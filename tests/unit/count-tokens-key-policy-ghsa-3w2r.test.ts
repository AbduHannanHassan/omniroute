/**
 * GHSA-3w2r-vvhm-8h85 — `/v1/messages/count_tokens` must honor the caller API
 * key's routing policy before it calls a provider.
 *
 * The route used to resolve credentials with `getProviderCredentials(provider,
 * null, null, model)` — no `allowedConnections`, no allow/block model check —
 * so a key pinned to connection A was served by connection B, and a key scoped
 * to another provider (403 on chat) still got a real `source: "provider"`
 * count. A denied model now returns the same 403 chat returns, and the key's
 * allowed connections bound the credential pool (no allowed connection →
 * local estimate, no upstream call).
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-count-tokens-ghsa-3w2r-"));
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.API_KEY_SECRET = process.env.API_KEY_SECRET || "ghsa-3w2r-test-secret";

const core = await import("../../src/lib/db/core.ts");
const providersDb = await import("../../src/lib/db/providers.ts");
const apiKeysDb = await import("../../src/lib/db/apiKeys.ts");
const modelAliasResolver = await import("../../src/lib/modelAliasResolver.ts");
const { POST } = await import("../../src/app/api/v1/messages/count_tokens/route.ts");

type CountTokensResponse = { input_tokens: number; source: string; provider?: string };

async function resetStorage() {
  core.resetDbInstance();
  apiKeysDb.resetApiKeyState();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

async function seedAnthropicConnection(name: string, apiKey: string) {
  return providersDb.createProviderConnection({
    provider: "anthropic",
    authType: "apikey",
    name,
    apiKey,
    isActive: true,
    testStatus: "active",
    providerSpecificData: {},
  });
}

function countRequest(apiKey: string | null, model = "anthropic/claude-opus-4.6") {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
  return new Request("http://localhost/api/v1/messages/count_tokens", {
    method: "POST",
    headers,
    body: JSON.stringify({ model, messages: [{ role: "user", content: "Count these tokens" }] }),
  });
}

/** Captures the upstream `x-api-key` of every provider count call. */
function stubUpstream() {
  const originalFetch = globalThis.fetch;
  const upstreamKeys: string[] = [];
  globalThis.fetch = async (_url, init: RequestInit = {}) => {
    const headers = (init.headers || {}) as Record<string, string>;
    upstreamKeys.push(String(headers["x-api-key"] ?? ""));
    return new Response(JSON.stringify({ input_tokens: 777 }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };
  return { upstreamKeys, restore: () => (globalThis.fetch = originalFetch) };
}

test.beforeEach(async () => {
  await resetStorage();
  modelAliasResolver.invalidateAliasCache();
});

test.after(async () => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

test("GHSA-3w2r: a key restricted to connection A is never served by connection B", async () => {
  // B is created first, so it holds the better (lower) priority and would win
  // an unrestricted pool selection.
  await seedAnthropicConnection("conn-B", "sk-ant-connection-B");
  const connA = await seedAnthropicConnection("conn-A", "sk-ant-connection-A");
  const key = await apiKeysDb.createApiKey("restricted-to-A", "machine-ghsa-3w2r", [], {
    allowedConnections: [connA.id],
  });

  const upstream = stubUpstream();
  try {
    for (let i = 0; i < 3; i++) {
      const response = await POST(countRequest(key.key));
      assert.equal(response.status, 200);
      const body = (await response.json()) as CountTokensResponse;
      assert.equal(body.source, "provider");
    }
    assert.ok(upstream.upstreamKeys.length > 0, "the provider count must still run via A");
    assert.deepEqual(
      [...new Set(upstream.upstreamKeys)],
      ["sk-ant-connection-A"],
      "count_tokens must only use the key's allowed connection"
    );
  } finally {
    upstream.restore();
  }
});

test("GHSA-3w2r: a key whose allowed connections exclude the provider never calls upstream", async () => {
  await seedAnthropicConnection("conn-B", "sk-ant-connection-B");
  const key = await apiKeysDb.createApiKey("restricted-elsewhere", "machine-ghsa-3w2r", [], {
    allowedConnections: ["00000000-0000-4000-8000-00000000dead"],
  });

  const upstream = stubUpstream();
  try {
    const response = await POST(countRequest(key.key));
    assert.equal(response.status, 200);
    const body = (await response.json()) as CountTokensResponse;
    assert.equal(body.source, "local", "no allowed connection → local estimate only");
    assert.equal(upstream.upstreamKeys.length, 0, "no upstream call outside the key's scope");
  } finally {
    upstream.restore();
  }
});

test("GHSA-3w2r: a key not allowed for the model gets chat's 403 and no upstream call", async () => {
  await seedAnthropicConnection("conn-B", "sk-ant-connection-B");
  const key = await apiKeysDb.createApiKey("openai-only", "machine-ghsa-3w2r", [], {
    modelAccessMode: "restricted",
    allowedModels: ["openai/*"],
  });

  const upstream = stubUpstream();
  try {
    const response = await POST(countRequest(key.key));
    assert.equal(response.status, 403, "same rejection the chat endpoint returns");
    const body = (await response.json()) as { error?: { message?: string } };
    assert.ok(body.error?.message, "error body is present");
    assert.ok(!String(body.error?.message).includes("at /"), "no stack trace leaks");
    assert.equal(upstream.upstreamKeys.length, 0, "a denied model must never reach upstream");
  } finally {
    upstream.restore();
  }
});

test("GHSA-3w2r: a blocked model is rejected even when the allow-list is open", async () => {
  await seedAnthropicConnection("conn-B", "sk-ant-connection-B");
  const key = await apiKeysDb.createApiKey("block-anthropic", "machine-ghsa-3w2r");
  await apiKeysDb.updateApiKeyPermissions(key.id, { blockedModels: ["anthropic/*"] });

  const upstream = stubUpstream();
  try {
    const response = await POST(countRequest(key.key));
    assert.equal(response.status, 403);
    assert.equal(upstream.upstreamKeys.length, 0);
  } finally {
    upstream.restore();
  }
});

test("GHSA-3w2r: an unrestricted key keeps the real provider count", async () => {
  await seedAnthropicConnection("conn-B", "sk-ant-connection-B");
  const key = await apiKeysDb.createApiKey("unrestricted", "machine-ghsa-3w2r");

  const upstream = stubUpstream();
  try {
    const response = await POST(countRequest(key.key));
    assert.equal(response.status, 200);
    const body = (await response.json()) as CountTokensResponse;
    assert.equal(body.source, "provider");
    assert.equal(body.input_tokens, 777);
    assert.deepEqual(upstream.upstreamKeys, ["sk-ant-connection-B"]);
  } finally {
    upstream.restore();
  }
});
