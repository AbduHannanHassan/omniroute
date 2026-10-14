import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-passive-public-"));
process.env.DATA_DIR = dataDir;
process.env.API_KEY_SECRET = "synthetic-passive-public-secret";
process.env.REQUIRE_API_KEY = "false";
process.env.OMNIROUTE_TOKEN_REFRESH_PASSIVE_PROVIDERS = "codex";
process.env.OMNIROUTE_WS_BRIDGE_SECRET = "synthetic-bridge-secret";
process.env.OMNIROUTE_CODEX_WS_ENABLED = "true";
const core = await import("../../src/lib/db/core.ts");
const db = await import("../../src/lib/db/providers.ts");
const settings = await import("../../src/lib/db/settings.ts");
const { handleChat } = await import("../../src/sse/handlers/chat.ts");
const images = await import("../../src/app/api/v1/images/generations/route.ts");
const ws = await import("../../src/app/api/internal/codex-responses-ws/route.ts");
const auth = await import("../../src/sse/services/auth.ts");
const refresh = await import("../../src/sse/services/tokenRefresh.ts");
const sharedRefresh = await import("../../open-sse/services/tokenRefresh.ts");
const imageRetry = await import("../../src/sse/services/imageCredentialRetry.ts");
const policy = await import("../../open-sse/services/tokenRefresh/passiveCodex.ts");
const originalFetch = globalThis.fetch;
let calls: string[] = [];
let connection: Awaited<ReturnType<typeof createConnection>>;

function request(endpoint: string, body: unknown, headers = {}) {
  return new Request(`http://localhost${endpoint}`, {
    method: "POST",
    headers: { "content-type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}
function chat(stream = false, headers = {}) {
  return handleChat(
    request(
      "/v1/chat/completions",
      {
        model: "cx/gpt-5.5",
        messages: [{ role: "user", content: "synthetic" }],
        stream,
      },
      headers
    )
  );
}
async function createConnection(seconds = -60) {
  return (await db.createProviderConnection({
    provider: "codex",
    authType: "oauth",
    name: "synthetic-passive-public",
    email: `synthetic-${crypto.randomUUID()}@example.invalid`,
    accessToken: `synthetic-access-${crypto.randomUUID()}`,
    refreshToken: "synthetic-refresh",
    idToken: "synthetic-id",
    expiresAt: new Date(Date.now() + seconds * 1000).toISOString(),
    testStatus: "active",
    isActive: true,
  })) as Record<string, unknown> & { id: string; accessToken: string };
}
function serveSyntheticResponse() {
  globalThis.fetch = async (input) => {
    calls.push(String(input));
    return new Response(
      `data: ${JSON.stringify({
        type: "response.completed",
        response: {
          id: "synthetic-response",
          object: "response",
          status: "completed",
          output: [
            {
              type: "message",
              role: "assistant",
              content: [{ type: "output_text", text: "synthetic" }],
            },
          ],
          usage: { input_tokens: 1, output_tokens: 1 },
        },
      })}\n\ndata: [DONE]\n\n`,
      { headers: { "content-type": "text/event-stream" } }
    );
  };
}
async function assertPassive(response: Response) {
  const body = await response.json();
  assert.equal(response.status, 503, JSON.stringify(body));
  assert.equal(response.headers.get("retry-after"), "30");
  assert.equal(body.error.code, "passive_refresh");
  assert.match(body.error.message, /retry/i);
}
test.beforeEach(async () => {
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
  globalThis.fetch = async (input) => {
    calls.push(String(input));
    return Response.json({ error: { message: "synthetic auth miss" } }, { status: 401 });
  };
});
test.after(() => {
  globalThis.fetch = originalFetch;
  core.resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});

for (const stream of [false, true]) {
  test(`chat exhaustion returns retryable passive response, stream=${stream}`, async () => {
    await createConnection();
    await assertPassive(await chat(stream));
    assert.equal(calls.length, 0);
  });
  test(`chat serves unchanged token inside proactive window, stream=${stream}`, async () => {
    await db.updateProviderConnection(connection.id, {
      expiresAt: new Date(Date.now() + 120000).toISOString(),
    });
    serveSyntheticResponse();
    const response = await chat(stream);
    await response.text();
    assert.equal(response.status, 200);
    assert.equal(calls.length, 1);
    assert.ok(calls[0].includes("/backend-api/codex/"));
  });
}
test("chat reactive exhaustion preserves passive response after inference 401", async () => {
  await db.updateProviderConnection(connection.id, {
    expiresAt: new Date(Date.now() + 3600000).toISOString(),
  });
  await assertPassive(await chat());
  assert.equal(calls.length, 1);
  assert.ok(calls[0].includes("/backend-api/codex/"));
});
test("chat skips a passive miss and serves a synchronized sibling", async () => {
  await createConnection(3600);
  serveSyntheticResponse();
  const response = await chat();
  await response.text();
  assert.equal(response.status, 200);
  assert.equal(calls.length, 1);
});
test("pinned chat passive miss returns the same retryable client contract", async () => {
  await assertPassive(await chat(false, { "x-omniroute-connection": connection.id }));
  assert.equal(calls.length, 0);
});
test("images return retryable passive response without fetching", async () => {
  await createConnection();
  await assertPassive(
    await images.POST(
      request("/v1/images/generations", {
        model: "cx/gpt-image-2",
        prompt: "synthetic",
        n: 1,
      })
    )
  );
  assert.equal(calls.length, 0);
});
test("image retry never executes a passive sentinel and selects each sibling once", async () => {
  const sibling = await createConnection(3600);
  let executions = 0;
  const execution = await imageRetry.executeImageWithCredentialFallback({
    provider: "codex",
    requestedModel: "gpt-image-2",
    credentials: { ...connection, connectionId: connection.id },
    selectNextCredentials: async (_provider, _model, excluded) => {
      assert.deepEqual([...excluded], [connection.id]);
      return { ...sibling, connectionId: sibling.id };
    },
    execute: async (credentials) => {
      executions++;
      assert.equal(credentials.accessToken, sibling.accessToken);
      return { success: true, data: { data: [] } };
    },
  });
  assert.equal(execution.result.success, true);
  assert.equal(executions, 1);
  assert.equal(calls.length, 0);
});
test("Responses WS prepare returns retryable passive response without fetching", async () => {
  await assertPassive(
    await ws.POST(
      request(
        "/api/internal/codex-responses-ws",
        {
          action: "prepare",
          requestUrl: "http://localhost/v1/responses",
          headers: {},
          response: { model: "cx/gpt-5.5", input: "synthetic" },
        },
        { "x-omniroute-ws-bridge-secret": "synthetic-bridge-secret" }
      )
    )
  );
  assert.equal(calls.length, 0);
});
test("round-robin passive miss skips credential/status/failure/breaker writes, not routing bookkeeping", async () => {
  await settings.updateSettings({ fallbackStrategy: "round-robin" });
  const before = await db.getProviderConnectionById(connection.id);
  const breakerBefore = sharedRefresh.getCircuitBreakerStatus();
  const selected = await auth.getProviderCredentials("codex", null, null, "gpt-5.5");
  const result = await refresh.checkAndRefreshToken("codex", selected);
  assert.equal(result.code, "passive_refresh");
  assert.equal(result.status, 401);
  await auth.markAccountUnavailable(
    connection.id,
    result.status,
    policy.PASSIVE_REFRESH_MESSAGE,
    "codex",
    "gpt-5.5",
    null,
    { structuredError: { code: result.code } }
  );
  const after = await db.getProviderConnectionById(connection.id);
  const {
    lastUsedAt: beforeUsed,
    consecutiveUseCount: beforeCount,
    updatedAt: _beforeUpdated,
    ...stableBefore
  } = before;
  const {
    lastUsedAt: afterUsed,
    consecutiveUseCount: afterCount,
    updatedAt: _afterUpdated,
    ...stableAfter
  } = after;
  assert.deepEqual(stableAfter, stableBefore);
  assert.equal(afterCount, Number(beforeCount) + 1);
  assert.notEqual(afterUsed, beforeUsed);
  assert.deepEqual(sharedRefresh.getCircuitBreakerStatus(), breakerBefore);
  assert.equal(calls.length, 0);
});
