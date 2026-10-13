/**
 * GHSA-2452-4qrm-6p4w — sync tokens unlock GET /api/sync/bundle, which returns every
 * provider credential in plaintext. Before the fix:
 *   - any API key with the `manage` scope could mint one (no dashboard session),
 *   - the token never expired,
 *   - revoking the issuing API key or rotating the admin password did not revoke it,
 *   - the bundle carried every OmniRoute API key in plaintext even with key reveal off.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { makeManagementSessionRequest } from "../helpers/managementSession.ts";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-ghsa-2452-"));
const ORIGINAL_DATA_DIR = process.env.DATA_DIR;
const ORIGINAL_API_KEY_SECRET = process.env.API_KEY_SECRET;
const ORIGINAL_INITIAL_PASSWORD = process.env.INITIAL_PASSWORD;
const ORIGINAL_ALLOW_REVEAL = process.env.ALLOW_API_KEY_REVEAL;

process.env.DATA_DIR = TEST_DATA_DIR;
process.env.API_KEY_SECRET = process.env.API_KEY_SECRET || "test-ghsa-2452-secret";
process.env.INITIAL_PASSWORD = "ghsa-2452-password";

const core = await import("../../src/lib/db/core.ts");
const apiKeysDb = await import("../../src/lib/db/apiKeys.ts");
const syncTokensDb = await import("../../src/lib/db/syncTokens.ts");
const syncTokensLib = await import("../../src/lib/sync/tokens.ts");
const syncTokensRoute = await import("../../src/app/api/sync/tokens/route.ts");
const syncBundleRoute = await import("../../src/app/api/sync/bundle/route.ts");
const { updateSettings } = await import("../../src/lib/db/settings.ts");
const { hashManagementPassword } = await import("../../src/lib/auth/managementPassword.ts");

const DAY_MS = 24 * 60 * 60 * 1000;

type BundleApiKeyEntry = { id: string; key?: string | null };
type BundlePayload = {
  version: string;
  bundle: { providerConnections: unknown[]; apiKeys: BundleApiKeyEntry[] };
};

function resetStorage() {
  apiKeysDb.resetApiKeyState();
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

test.beforeEach(async () => {
  resetStorage();
  delete process.env.ALLOW_API_KEY_REVEAL;
  await updateSettings({ requireLogin: true, password: "" });
});

test.after(() => {
  apiKeysDb.resetApiKeyState();
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });

  const restore = (name: string, value: string | undefined) => {
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  };
  restore("DATA_DIR", ORIGINAL_DATA_DIR);
  restore("API_KEY_SECRET", ORIGINAL_API_KEY_SECRET);
  restore("INITIAL_PASSWORD", ORIGINAL_INITIAL_PASSWORD);
  restore("ALLOW_API_KEY_REVEAL", ORIGINAL_ALLOW_REVEAL);
});

async function createManageKey(name = "Manage key") {
  const key = await apiKeysDb.createApiKey(name, `machine-${name}`);
  await apiKeysDb.updateApiKeyPermissions(key.id, { scopes: ["manage"] });
  apiKeysDb.clearApiKeyCaches();
  return key;
}

async function mintWithSession(options: { bearer?: string; body?: Record<string, unknown> } = {}) {
  const response = await syncTokensRoute.POST(
    await makeManagementSessionRequest("http://localhost/api/sync/tokens", {
      method: "POST",
      token: options.bearer,
      body: { name: "Replica", ...(options.body || {}) },
    })
  );
  assert.equal(response.status, 201, "an admin dashboard session must be able to mint");
  return (await response.json()) as {
    token: string;
    syncToken: { id: string; expiresAt: string | null; syncApiKeyId: string | null };
  };
}

function fetchBundle(token: string) {
  return syncBundleRoute.GET(
    new Request("http://localhost/api/sync/bundle", {
      headers: { authorization: `Bearer ${token}` },
    })
  );
}

test("a manage-scoped API key without a dashboard session cannot mint a sync token", async () => {
  const manageKey = await createManageKey();

  const response = await syncTokensRoute.POST(
    new Request("http://localhost/api/sync/tokens", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${manageKey.key}`,
      },
      body: JSON.stringify({ name: "exfil" }),
    })
  );

  assert.equal(response.status, 403);
  const body = (await response.json()) as unknown;
  assert.equal(JSON.stringify(body).includes("osync_"), false);
  assert.equal((await syncTokensDb.listSyncTokens()).length, 0);
});

test("an admin dashboard session still mints a token that downloads the bundle", async () => {
  const minted = await mintWithSession();
  assert.match(minted.token, /^osync_/);

  const response = await fetchBundle(minted.token);
  assert.equal(response.status, 200);
  const payload = (await response.json()) as BundlePayload;
  assert.equal(typeof payload.bundle, "object");
  assert.ok(Array.isArray(payload.bundle.providerConnections));
});

test("the trusted local CLI subject (pipeline-stamped) can still mint", async () => {
  const response = await syncTokensRoute.POST(
    new Request("http://localhost/api/sync/tokens", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-omniroute-auth-kind": "management_key",
        "x-omniroute-auth-label": "local-cli-token",
      },
      body: JSON.stringify({ name: "cli" }),
    })
  );
  assert.equal(response.status, 201);
});

test("sync tokens expire: default 30 days, and an expired token is rejected", async () => {
  const before = Date.now();
  const minted = await mintWithSession();
  assert.equal(typeof minted.syncToken.expiresAt, "string");
  const expiresMs = Date.parse(minted.syncToken.expiresAt as string);
  assert.ok(expiresMs >= before + 30 * DAY_MS - 5_000, "default expiry is ~30 days");
  assert.ok(expiresMs <= Date.now() + 30 * DAY_MS + 5_000, "default expiry is ~30 days");

  assert.equal((await fetchBundle(minted.token)).status, 200);

  // Age the token past its expiry.
  core
    .getDbInstance()
    .prepare("UPDATE sync_tokens SET expires_at = ? WHERE id = ?")
    .run(new Date(Date.now() - 1000).toISOString(), minted.syncToken.id);

  assert.equal((await fetchBundle(minted.token)).status, 401);
});

test("a requested TTL is honoured and capped", async () => {
  const short = await mintWithSession({ body: { ttl: "12h" } });
  const shortMs = Date.parse(short.syncToken.expiresAt as string) - Date.now();
  assert.ok(shortMs > 11 * 60 * 60 * 1000 && shortMs <= 12 * 60 * 60 * 1000 + 5_000);

  const rejected = await syncTokensRoute.POST(
    await makeManagementSessionRequest("http://localhost/api/sync/tokens", {
      method: "POST",
      body: { name: "forever", ttl: "9999d" },
    })
  );
  assert.equal(rejected.status, 400);
});

test("a sync token is rejected once the API key that issued it is revoked", async () => {
  const manageKey = await createManageKey("issuer");
  const minted = await mintWithSession({ bearer: manageKey.key });
  assert.equal(minted.syncToken.syncApiKeyId, manageKey.id);
  assert.equal((await fetchBundle(minted.token)).status, 200);

  assert.equal(await apiKeysDb.revokeApiKey(manageKey.id), true);
  assert.equal((await fetchBundle(minted.token)).status, 401);
});

test("a sync token is rejected once the issuing API key is deleted", async () => {
  const manageKey = await createManageKey("deleted-issuer");
  const minted = await mintWithSession({ bearer: manageKey.key });
  assert.equal((await fetchBundle(minted.token)).status, 200);

  await apiKeysDb.deleteApiKey(manageKey.id);
  assert.equal((await fetchBundle(minted.token)).status, 401);
});

test("rotating the admin password invalidates every sync token", async () => {
  await updateSettings({ password: await hashManagementPassword("first-password-123") });
  const minted = await mintWithSession();
  assert.equal((await fetchBundle(minted.token)).status, 200);

  await updateSettings({ password: await hashManagementPassword("second-password-456") });
  assert.equal((await fetchBundle(minted.token)).status, 401);
});

test("legacy tokens minted before the fix (no issuer binding) are rejected", async () => {
  const plaintext = syncTokensLib.generatePlaintextSyncToken();
  await syncTokensDb.createSyncTokenRecord({
    name: "legacy",
    tokenHash: syncTokensLib.hashSyncToken(plaintext),
  });

  assert.equal(await syncTokensLib.validateSyncToken(plaintext), null);
  assert.equal((await fetchBundle(plaintext)).status, 401);
});

test("the bundle does not carry plaintext OmniRoute API keys while key reveal is disabled", async () => {
  const clientKey = await apiKeysDb.createApiKey("Client", "machine-client");
  const minted = await mintWithSession();

  const hidden = (await (await fetchBundle(minted.token)).json()) as BundlePayload;
  const hiddenEntry = hidden.bundle.apiKeys.find((entry) => entry.id === clientKey.id);
  assert.ok(hiddenEntry, "the key's configuration is still synced");
  assert.notEqual(hiddenEntry.key, clientKey.key);
  assert.equal(JSON.stringify(hidden).includes(clientKey.key), false);

  process.env.ALLOW_API_KEY_REVEAL = "true";
  const revealed = (await (await fetchBundle(minted.token)).json()) as BundlePayload;
  const revealedEntry = revealed.bundle.apiKeys.find((entry) => entry.id === clientKey.id);
  assert.equal(revealedEntry?.key, clientKey.key);
});
