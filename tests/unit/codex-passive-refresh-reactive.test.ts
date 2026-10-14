import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-passive-reactive-"));
process.env.DATA_DIR = dataDir;
process.env.API_KEY_SECRET = "synthetic-passive-reactive-secret";
process.env.REQUIRE_API_KEY = "false";
const core = await import("../../src/lib/db/core.ts");
const db = await import("../../src/lib/db/providers.ts");
const settings = await import("../../src/lib/db/settings.ts");
const { handleChat } = await import("../../src/sse/handlers/chat.ts");
const images = await import("../../src/app/api/v1/images/generations/route.ts");
const { recordKeyHealthStatus } = await import("../../open-sse/handlers/chatCore/keyHealth.ts");
const { runProviderExecutionPipeline } =
  await import("../../open-sse/handlers/chatCore/providerExecutionPipeline.ts");
const imageRetry = await import("../../src/sse/services/imageCredentialRetry.ts");
const fallback = await import("../../open-sse/services/accountFallback.ts");
const refresh = await import("../../open-sse/services/tokenRefresh.ts");
const originalFetch = globalThis.fetch;
let connection: Awaited<ReturnType<typeof createConnection>>;
let calls: string[];

function request(endpoint: string, body: unknown) {
  return new Request(`http://localhost${endpoint}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}
function chat(stream = false) {
  return handleChat(
    request("/v1/chat/completions", {
      model: "cx/gpt-5.5",
      messages: [{ role: "user", content: "synthetic" }],
      stream,
    })
  );
}
function image() {
  return images.POST(
    request("/v1/images/generations", {
      model: "cx/gpt-image-2",
      prompt: "synthetic",
      n: 1,
    })
  );
}
async function createConnection(seconds = 3600) {
  return (await db.createProviderConnection({
    provider: "codex",
    authType: "oauth",
    name: "synthetic-passive-reactive",
    email: `synthetic-${crypto.randomUUID()}@example.invalid`,
    accessToken: `synthetic-access-${crypto.randomUUID()}`,
    refreshToken: "synthetic-refresh",
    expiresAt: new Date(Date.now() + seconds * 1000).toISOString(),
    isActive: true,
    testStatus: "active",
  })) as Record<string, unknown> & { id: string; accessToken: string };
}
function rejectCredentials(status: number, synchronize = false) {
  globalThis.fetch = async (input, init) => {
    assert.ok(String(input).includes("/backend-api/"), "no token exchange");
    calls.push(new Headers(init?.headers).get("authorization") || "");
    if (synchronize && calls.length === 1) {
      await db.updateProviderConnection(connection.id, { accessToken: "synthetic-synchronized" });
    }
    return Response.json({ error: { message: "invalid token" } }, { status });
  };
}
async function assertPassive(response: Response) {
  const body = await response.json();
  assert.equal(response.status, 503, JSON.stringify(body));
  assert.equal(response.headers.get("retry-after"), "30");
  assert.equal(body.error.code, "passive_refresh");
  assert.doesNotMatch(body.error.message, /reset after/i);
}
async function assertUnchanged(before: Record<string, unknown>) {
  const after = await db.getProviderConnectionById(String(before.id));
  // Selection timestamps and counts are routing bookkeeping, not credential health.
  const stable = ({
    updatedAt,
    lastUsedAt,
    consecutiveUseCount,
    ...row
  }: Record<string, unknown>) => row;
  assert.deepEqual(stable(after), stable(before));
}
test.beforeEach(async () => {
  process.env.OMNIROUTE_TOKEN_REFRESH_PASSIVE_PROVIDERS = "codex";
  core.resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
  fs.mkdirSync(dataDir, { recursive: true });
  await settings.updateSettings({
    requireLogin: false,
    requireApiKey: false,
    fallbackStrategy: "fill-first",
    requestRetry: 0,
    maxRetryIntervalSec: 0,
  });
  connection = await createConnection();
  calls = [];
  rejectCredentials(401);
});
test.after(() => {
  globalThis.fetch = originalFetch;
  core.resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});

for (const status of [401, 403]) {
  for (const stream of [false, true]) {
    test(`passive chat ${status} leaves key health untouched, stream=${stream}`, async () => {
      rejectCredentials(status);
      const before = await db.getProviderConnectionById(connection.id);
      const breakerBefore = refresh.getCircuitBreakerStatus();
      await assertPassive(await chat(stream));
      assert.equal(calls.length, 1);
      await assertUnchanged(before);
      assert.deepEqual(refresh.getCircuitBreakerStatus(), breakerBefore);
    });
    test(`passive chat reread then ${status} rejection stays non-terminal, stream=${stream}`, async () => {
      rejectCredentials(status, true);
      const before = await db.getProviderConnectionById(connection.id);
      const breakerBefore = refresh.getCircuitBreakerStatus();
      await assertPassive(await chat(stream));
      assert.deepEqual(calls, [
        `Bearer ${connection.accessToken}`,
        "Bearer synthetic-synchronized",
      ]);
      await assertUnchanged({ ...before, accessToken: "synthetic-synchronized" });
      assert.deepEqual(refresh.getCircuitBreakerStatus(), breakerBefore);
    });
  }
  test(`passive image ${status} excludes each rejected account exactly once`, async () => {
    const sibling = await createConnection();
    const before = await db.getProviderConnectionById(connection.id);
    const siblingBefore = await db.getProviderConnectionById(sibling.id);
    const breakerBefore = refresh.getCircuitBreakerStatus();
    rejectCredentials(status);
    await assertPassive(await image());
    assert.deepEqual(
      calls.sort(),
      [`Bearer ${connection.accessToken}`, `Bearer ${sibling.accessToken}`].sort()
    );
    await assertUnchanged(before);
    await assertUnchanged(siblingBefore);
    assert.deepEqual(refresh.getCircuitBreakerStatus(), breakerBefore);
  });
  test(`default-off key health counts ${status} failures and invalidates repeated rejection`, async () => {
    delete process.env.OMNIROUTE_TOKEN_REFRESH_PASSIVE_PROVIDERS;
    const creds = { ...connection, connectionId: connection.id };
    recordKeyHealthStatus(status, creds, null, undefined, "invalid token");
    await new Promise((resolve) => setImmediate(resolve));
    let after = await db.getProviderConnectionById(connection.id);
    assert.equal(after.providerSpecificData.apiKeyHealth.primary.failures, 1);
    assert.equal(after.providerSpecificData.apiKeyHealth.primary.status, "warning");
    recordKeyHealthStatus(status, creds, null, undefined, "invalid token");
    await new Promise((resolve) => setImmediate(resolve));
    after = await db.getProviderConnectionById(connection.id);
    assert.equal(after.providerSpecificData.apiKeyHealth.primary.failures, 2);
    assert.equal(after.providerSpecificData.apiKeyHealth.primary.status, "invalid");
  });
  test(`default-off image ${status} retains ordinary public authentication error`, async () => {
    delete process.env.OMNIROUTE_TOKEN_REFRESH_PASSIVE_PROVIDERS;
    rejectCredentials(status);
    const response = await image();
    const body = await response.json();
    assert.equal(response.status, status);
    assert.equal(body.error.code, status === 401 ? "invalid_api_key" : "permission_denied");
    assert.equal(response.headers.get("retry-after"), null);
    assert.equal(calls.length, 1);
  });
  for (const terminal of [false, true]) {
    test(`${terminal ? "passive deactivated" : "default-off invalid-token"} non-stream ${status} retains upstream outcome`, async () => {
      const message = terminal ? "invalid token: account_deactivated" : "invalid token";
      if (!terminal) delete process.env.OMNIROUTE_TOKEN_REFRESH_PASSIVE_PROVIDERS;
      let sends = 0;
      let refreshes = 0;
      let credentials: Record<string, unknown> = { connectionId: connection.id };
      const outcome = await runProviderExecutionPipeline({
        policy: { allowAccountRotation: false, allowModelFallback: false },
        target: {
          provider: "codex",
          requestedModel: "gpt-5.5",
          sourceFormat: "openai",
          targetFormat: "openai",
          stream: false,
        },
        connection: {
          initialConnectionId: connection.id,
          getCurrentConnectionId: () => connection.id,
          getCredentials: () => credentials,
          replaceCredentials: (next) => {
            credentials = next;
          },
          onCredentialsRefreshed: () => {},
          assertManagedLeaseFence: () => {},
          getProviderCredentials: async () => {
            throw new Error("unexpected rotation");
          },
          refreshCredentials: async () => {
            refreshes++;
            return { accessToken: "synthetic-refreshed" };
          },
        },
        wire: {
          body: {},
          currentModel: "gpt-5.5",
          triedModels: new Set(["gpt-5.5"]),
          setBodyAndModel: () => {},
        },
        state: {
          updatePendingStage: () => {},
          recordRateLimitHeaders: () => {},
          recordRateLimitBody: () => {},
          writeTerminalStatus: async () => {},
          persistConnectionPatch: async () => null,
          setConnectionRateLimitedUntil: () => {},
          lockModel: () => {},
          recordAntigravityQuotaState: async () => {},
          markAccountSemaphoreBlocked: () => {},
          isolateProbeFailures: () => false,
        },
        sendProviderAttempt: async () => {
          sends++;
          return {
            response: Response.json({ error: { message } }, { status }),
            url: "http://localhost/synthetic",
            headers: {},
            transformedBody: {},
          };
        },
      });
      assert.equal(sends, terminal ? 1 : 2);
      assert.equal(refreshes, terminal ? 0 : 1);
      assert.equal(outcome.kind, "error");
      if (outcome.kind === "error") {
        assert.equal(outcome.result.status, status);
        assert.equal(outcome.result.rawMessage, message);
        assert.notEqual(outcome.result.errorCode, "passive_refresh");
      }
    });
  }
}
for (const status of [401, 403]) {
  for (const stream of [false, true]) {
    test(`passive deactivated chat ${status} locks the account and records key failure, stream=${stream}`, async () => {
      globalThis.fetch = async (input) => {
        assert.match(String(input), /backend-api/);
        calls.push(String(input));
        return Response.json(
          { error: { message: "invalid token: account_deactivated" } },
          { status }
        );
      };
      const response = await chat(stream);
      const body = await response.json();
      assert.notEqual(body.error.code, "passive_refresh");
      assert.equal(calls.length, 1);
      const after = await db.getProviderConnectionById(connection.id);
      assert.equal(after.testStatus, "banned");
      assert.equal(after.isActive, false);
      assert.equal(after.providerSpecificData.apiKeyHealth.primary.failures, 1);
    });
  }
  test(`passive deactivated image ${status} preserves the error and existing account exclusion rules`, async () => {
    const selected: string[][] = [];
    const result = await imageRetry.executeImageWithCredentialFallback({
      provider: "codex",
      requestedModel: "gpt-image-2",
      credentials: { ...connection, connectionId: connection.id },
      execute: async () => ({ success: false, status, error: { message: "account_deactivated" } }),
      selectNextCredentials: async (_provider, _model, excluded) => {
        selected.push([...excluded]);
        return null;
      },
    });
    assert.equal(result.result.status, status);
    assert.deepEqual(result.result.error, { message: "account_deactivated" });
    assert.deepEqual(selected, status === 401 ? [[connection.id]] : []);
    assert.equal(calls.length, 0);
  });
}
test("passive key health honors operator account-deactivation signals", async () => {
  fallback.setCustomBannedSignals(["synthetic-terminal-account"]);
  try {
    recordKeyHealthStatus(
      401,
      { ...connection, connectionId: connection.id },
      null,
      undefined,
      "synthetic-terminal-account"
    );
    await new Promise((resolve) => setImmediate(resolve));
    const after = await db.getProviderConnectionById(connection.id);
    assert.equal(after.providerSpecificData.apiKeyHealth.primary.failures, 1);
  } finally {
    fallback.setCustomBannedSignals([]);
  }
});
test("two consecutive passive chat misses never invalidate the primary key", async () => {
  const before = await db.getProviderConnectionById(connection.id);
  for (let i = 0; i < 2; i++) await assertPassive(await chat());
  assert.equal(calls.length, 2);
  await assertUnchanged(before);
});
test("passive images skip expired credentials and serve a fresh sibling", async () => {
  await db.updateProviderConnection(connection.id, {
    expiresAt: new Date(Date.now() - 60000).toISOString(),
  });
  const before = await db.getProviderConnectionById(connection.id);
  const sibling = await createConnection();
  globalThis.fetch = async (input, init) => {
    assert.ok(String(input).includes("/backend-api/"));
    calls.push(new Headers(init?.headers).get("authorization") || "");
    return Response.json({ data: [{ b64_json: "c3ludGhldGlj" }] });
  };
  const response = await image();
  const body = await response.json();
  assert.equal(response.status, 200);
  assert.equal(body.data[0].b64_json, "c3ludGhldGlj");
  assert.deepEqual(calls, [`Bearer ${sibling.accessToken}`]);
  await assertUnchanged(before);
});
