import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-codex-passive-"));
process.env.DATA_DIR = dataDir;
const core = await import("../../src/lib/db/core.ts");
const db = await import("../../src/lib/db/providers.ts");
const settings = await import("../../src/lib/db/settings.ts");
const refresh = await import("../../open-sse/services/tokenRefresh.ts");
const local = await import("../../src/sse/services/tokenRefresh.ts");
const { CodexExecutor } = await import("../../open-sse/executors/codex.ts");
const health = await import("../../src/lib/tokenHealthCheck.ts");
const usage = await import("../../src/lib/usage/providerLimits/credentialRefresh.ts");
const providerTest = await import("../../src/app/api/providers/[id]/test/route.ts");
const oauth = await import("../../src/app/api/oauth/[provider]/[action]/route.ts");
const bulkImport = await import("../../src/app/api/oauth/codex/import/route.ts");
const { codex } = await import("../../src/lib/oauth/providers/codex.ts");
const runtime = await import("../../src/lib/env/runtimeEnv.ts");
const envName = "OMNIROUTE_TOKEN_REFRESH_PASSIVE_PROVIDERS";
const originalEnv = process.env[envName];
const originalFetch = globalThis.fetch;
const calls: { url: string; body: string }[] = [];
const executor = new CodexExecutor();
const json = (body: unknown, status = 200) => Response.json(body, { status });

async function connection(expiresIn = 120) {
  const row = (await db.createProviderConnection({
    provider: "codex",
    authType: "oauth",
    name: "synthetic passive account",
    email: `synthetic-${crypto.randomUUID()}@example.invalid`,
    accessToken: `synthetic-access-${crypto.randomUUID()}`,
    refreshToken: `synthetic-refresh-${crypto.randomUUID()}`,
    expiresAt: new Date(Date.now() + expiresIn * 1000).toISOString(),
    providerSpecificData: { workspaceId: "synthetic-workspace" },
    isActive: true,
    testStatus: "active",
  })) as {
    id: string;
    provider: string;
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
    providerSpecificData: Record<string, unknown>;
  };
  return { ...row, connectionId: row.id };
}

test.before(async () => {
  await settings.updateSettings({ requireLogin: false });
});
test.beforeEach(() => {
  process.env[envName] = " CoDeX , CX , ,";
  calls.length = 0;
  globalThis.fetch = async (input, init) => {
    const url = input instanceof Request ? input.url : String(input);
    calls.push({ url, body: String(init?.body || "") });
    return json({
      access_token: "synthetic-rotated",
      refresh_token: "synthetic-rotated-refresh",
      expires_in: 3600,
    });
  };
});
test.afterEach(() => {
  globalThis.fetch = originalFetch;
});
test.after(() => {
  if (originalEnv === undefined) delete process.env[envName];
  else process.env[envName] = originalEnv;
  core.resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});
const tokenCalls = () => calls.filter(({ url }) => url.includes("auth.openai.com/oauth/token"));

for (const id of ["codex", "cx", " CODEX ", "Cx"]) {
  test(`startup accepts Codex identifier ${id}`, () => {
    const result = runtime.validateWebRuntimeEnv({
      NODE_ENV: "test",
      API_KEY_SECRET: "synthetic-startup-secret",
      [envName]: id,
    });
    assert.equal(result.errors.filter((e) => e.name === envName).length, 0);
  });
}
test("startup refuses every unsupported id in one diagnostic", () => {
  const result = runtime.validateWebRuntimeEnv({
    NODE_ENV: "test",
    API_KEY_SECRET: "synthetic-startup-secret",
    [envName]: "codex, Claude,openai,unknown",
  });
  const errors = result.errors.filter((e) => e.name === envName);
  assert.equal(errors.length, 1);
  assert.match(errors[0].issue, /claude.*openai.*unknown/);
  assert.match(errors[0].issue, /codex.*cx/);
});

for (const mode of ["passive", "active"]) {
  for (const boundary of [
    "direct",
    "generic",
    "shared",
    "local",
    "executor",
    "proactive",
    "health",
    "usage",
    "code exchange",
  ]) {
    test(`${mode}: ${boundary} token endpoint boundary`, async () => {
      if (mode === "active") delete process.env[envName];
      const c = await connection(-60);
      const before = await db.getProviderConnectionById(c.id);
      let persisted = 0;
      switch (boundary) {
        case "direct":
          await refresh.refreshCodexToken(c.refreshToken, null);
          break;
        case "generic":
          await refresh.refreshAccessToken("codex", c.refreshToken, c, null);
          break;
        case "shared":
          await refresh.getAccessToken("codex", c, null, null, async () => {
            persisted++;
          });
          break;
        case "local":
          await local.refreshCodexToken(c.refreshToken, c);
          break;
        case "executor":
          await executor.refreshCredentials(c, null);
          break;
        case "proactive":
          await local.checkAndRefreshToken("codex", c);
          break;
        case "health":
          await health.checkConnection(c);
          break;
        case "usage":
          await usage
            .refreshAndUpdateCredentialsWithResolver(
              c,
              async () =>
                ({
                  needsRefresh: () => true,
                  refreshCredentials: () => refresh.refreshCodexToken(c.refreshToken, null),
                }) as unknown as typeof executor,
              { allowRotatingRefresh: true, force: true }
            )
            .catch((e: unknown) => {
              assert.equal((e as { code?: string }).code, "passive_refresh");
            });
          break;
        case "code exchange":
          await codex
            .exchangeToken(
              codex.config,
              "synthetic-code",
              "http://localhost/callback",
              "synthetic-verifier"
            )
            .catch((e: unknown) => {
              assert.equal((e as { status?: number }).status, 409);
            });
          break;
      }
      assert.equal(tokenCalls().length, mode === "passive" ? 0 : 1);
      if (mode === "passive") {
        assert.equal(persisted, 0);
        assert.deepEqual(await db.getProviderConnectionById(c.id), before);
      }
    });
  }
}

test("reactive reread adopts the entire different credential set without persisting", async () => {
  const c = await connection();
  const expiresAt = new Date(Date.now() + 3600000).toISOString();
  await db.updateProviderConnection(c.id, {
    accessToken: "synthetic-synced",
    refreshToken: "synthetic-synced-refresh",
    expiresAt,
    providerSpecificData: { workspaceId: "synthetic-synced-workspace" },
  });
  const before = await db.getProviderConnectionById(c.id);
  const result = await refresh.getAccessToken("codex", c, null, null, async () => {
    assert.fail("must not persist reread");
  });
  assert.equal(result.accessToken, "synthetic-synced");
  assert.equal(result.expiresAt, expiresAt);
  assert.equal(result.refreshToken, "synthetic-synced-refresh");
  assert.equal(result.providerSpecificData.workspaceId, "synthetic-synced-workspace");
  assert.deepEqual(await db.getProviderConnectionById(c.id), before);
  assert.equal(tokenCalls().length, 0);
});
test("reactive unchanged returns passive_refresh without breaker failures", async () => {
  const c = await connection();
  const before = refresh.getCircuitBreakerStatus();
  for (let n = 0; n < 6; n++) {
    const result = await refresh.refreshWithRetry(
      () => executor.refreshCredentials(c, null),
      1,
      null,
      "codex"
    );
    assert.equal(result.code, "passive_refresh");
  }
  assert.deepEqual(refresh.getCircuitBreakerStatus(), before);
});
for (const expiresIn of [120, -60]) {
  test(`unconditional unchanged token with ${expiresIn}s remaining`, async () => {
    const c = await connection(expiresIn);
    const before = await db.getProviderConnectionById(c.id);
    const result = await local.checkAndRefreshToken("codex", c);
    if (expiresIn > 0) assert.equal(result.accessToken, c.accessToken);
    else assert.equal(result.code, "passive_refresh");
    assert.deepEqual(await db.getProviderConnectionById(c.id), before);
    assert.equal(tokenCalls().length, 0);
  });
}
test("provider test adopts before making expiry-dependent decisions", async () => {
  const c = await connection(-60);
  await db.updateProviderConnection(c.id, {
    accessToken: "synthetic-synced",
    expiresAt: new Date(Date.now() + 120000).toISOString(),
  });
  const before = await db.getProviderConnectionById(c.id);
  const result = await providerTest.testOAuthConnection(c);
  assert.equal(result.valid, true);
  assert.equal(result.refreshed, false);
  assert.deepEqual(await db.getProviderConnectionById(c.id), before);
  assert.equal(tokenCalls().length, 0);
});
for (const action of ["authorize", "exchange", "device-complete", "public-link", "poll-callback"]) {
  test(`OAuth ${action} refuses passive login with 409`, async () => {
    const request = new Request(`http://localhost/api/oauth/codex/${action}`, {
      method: action === "authorize" ? "GET" : "POST",
      ...(action === "authorize" ? {} : { body: "{}" }),
    });
    const result = await (action === "authorize" ? oauth.GET : oauth.POST)(request, {
      params: Promise.resolve({ provider: "codex", action }),
    });
    assert.equal(result.status, 409);
    assert.match(JSON.stringify(await result.json()), /active instance/i);
    assert.equal(tokenCalls().length, 0);
  });
}
test("already-issued bulk import is allowed without a validation exchange", async () => {
  const response = await bulkImport.POST(
    new Request("http://localhost/api/oauth/codex/import", {
      method: "POST",
      body: JSON.stringify({
        accounts: {
          access_token: "synthetic-issued",
          refresh_token: "synthetic-issued-refresh",
          email: "synthetic-import@example.invalid",
        },
      }),
    })
  );
  assert.equal(response.status, 200);
  assert.equal((await response.json()).imported, 1);
  assert.equal(tokenCalls().length, 0);
});
