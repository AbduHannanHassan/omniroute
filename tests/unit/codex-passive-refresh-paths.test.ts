import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-codex-passive-paths-"));
process.env.DATA_DIR = dataDir;
const core = await import("../../src/lib/db/core.ts");
const db = await import("../../src/lib/db/providers.ts");
const settings = await import("../../src/lib/db/settings.ts");
const { handleChatCore } = await import("../../open-sse/handlers/chatCore.ts");
const { CodexExecutor } = await import("../../open-sse/executors/codex.ts");
const { BaseExecutor } = await import("../../open-sse/executors/base.ts");
const auth = await import("../../src/sse/services/auth.ts");
const manual = await import("../../src/app/api/providers/[id]/refresh/route.ts");
const providerTest = await import("../../src/app/api/providers/[id]/test/route.ts");
const connect = await import("../../src/app/api/codex/connect/[token]/route.ts");
const authFile = await import("../../src/lib/oauth/utils/codexAuthFile.ts");
const importToken = await import("../../src/app/api/oauth/codex/import-token/route.ts");
const policy = await import("../../open-sse/services/tokenRefresh/passiveCodex.ts");
const registry = await import("../../open-sse/config/providerRegistry.ts");
const refresh = await import("../../open-sse/services/tokenRefresh.ts");
const usageRoute = await import("../../src/app/api/usage/[connectionId]/route.ts");
const resetCreditRoute = await import("../../src/app/api/usage/codex-reset-credit/route.ts");
const localRefresh = await import("../../src/sse/services/tokenRefresh.ts");
const proxyFetch = await import("../../open-sse/utils/proxyFetch.ts");
const runtimeEnv = await import("../../src/lib/env/runtimeEnv.ts");
const originalFetch = globalThis.fetch;
const envName = policy.PASSIVE_REFRESH_ENV;
const originalEnv = process.env[envName];
const calls: string[] = [];
const log = { debug() {}, info() {}, warn() {}, error() {} };
const request = () => new Request("http://localhost/api/synthetic", { method: "POST", body: "{}" });
async function connection(seconds = 120) {
  return (await db.createProviderConnection({
    provider: "codex",
    authType: "oauth",
    name: "synthetic",
    email: `synthetic-${crypto.randomUUID()}@example.invalid`,
    idToken: "synthetic-id-token",
    accessToken: `synthetic-access-${crypto.randomUUID()}`,
    refreshToken: `synthetic-refresh-${crypto.randomUUID()}`,
    expiresAt: new Date(Date.now() + seconds * 1000).toISOString(),
    providerSpecificData: { workspaceId: "synthetic-workspace" },
    testStatus: "active",
    isActive: true,
  })) as { id: string; accessToken: string; refreshToken: string; expiresAt: string };
}
test.before(async () => {
  await settings.updateSettings({ requireLogin: false });
});
test.beforeEach(() => {
  process.env[envName] = "cx";
  calls.length = 0;
  globalThis.fetch = async (input) => {
    calls.push(input instanceof Request ? input.url : String(input));
    return Response.json({ error: { message: "synthetic auth miss" } }, { status: 401 });
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

test("parsing, safe unsupported runtime policy and registry alias completeness", () => {
  assert.deepEqual(policy.parsePassiveProviders(" CX ,codex, ,CX"), ["cx", "codex"]);
  const codex = registry.getRegistryEntry("codex");
  assert.equal(registry.getRegistryEntry("cx"), codex);
  assert.deepEqual(
    [...new Set([codex.id, codex.alias])].sort(),
    [...policy.PASSIVE_CODEX_IDS].sort()
  );
  process.env[envName] = "claude,openai,unknown";
  for (const id of ["codex", "cx", "claude", "openai", "unknown"])
    assert.equal(policy.isPassiveCodex(id), false);
});

for (const stream of [false, true]) {
  for (const synced of [false, true]) {
    test(`chatCore ${stream ? "stream" : "HTTP"} reactive ${synced ? "adopts" : "waits"} without credential writes`, async () => {
      const c = await connection(3600);
      let inferenceCalls = 0;
      let persisted = 0;
      globalThis.fetch = async (input) => {
        const url = input instanceof Request ? input.url : String(input);
        calls.push(url);
        if (url.includes("/backend-api/codex/")) {
          inferenceCalls++;
          if (synced && inferenceCalls === 1)
            await db.updateProviderConnection(c.id, {
              accessToken: "synthetic-synced",
              expiresAt: new Date(Date.now() + 7200000).toISOString(),
              providerSpecificData: { workspaceId: "synthetic-synced-workspace" },
            });
          if (synced && inferenceCalls > 1)
            return new Response(
              `data: ${JSON.stringify({ type: "response.completed", response: { id: "synthetic-response", object: "response", status: "completed", output: [{ type: "message", role: "assistant", content: [{ type: "output_text", text: "synthetic" }] }], usage: { input_tokens: 1, output_tokens: 1 } } })}\n\ndata: [DONE]\n\n`,
              { headers: { "content-type": "text/event-stream" } }
            );
        }
        return Response.json({ error: { message: "synthetic auth miss" } }, { status: 401 });
      };
      const result = await handleChatCore({
        body: { model: "gpt-5.5", input: "synthetic", stream },
        modelInfo: { provider: "codex", model: "gpt-5.5", extendedContext: false },
        credentials: { ...c, connectionId: c.id },
        log,
        clientRawRequest: { endpoint: "/v1/responses", headers: new Headers(), body: {} },
        userAgent: "synthetic-test",
        onCredentialsRefreshed: async () => {
          persisted++;
        },
      });
      if (synced) assert.equal(result.response.status, 200);
      else {
        assert.equal(result.response.status, 401);
        assert.equal((await result.response.json()).error.code, "passive_refresh");
      }
      if (synced) await result.response.text();
      assert.equal(
        calls.some((url) => url.includes("auth.openai.com/oauth/token")),
        false
      );
      assert.equal(persisted, 0);
      const stored = await db.getProviderConnectionById(c.id);
      assert.equal(stored.testStatus, "active");
      assert.equal(stored.isActive, true);
      assert.equal(stored.refreshToken, c.refreshToken);
    });
  }
}
for (const seconds of [120, -60]) {
  for (const kind of ["codex", "base"]) {
    test(`${kind} proactive executor uses unchanged ${seconds}s token or passive outcome`, async () => {
      const c = await connection(seconds);
      let persisted = 0;
      const executor =
        kind === "codex"
          ? new CodexExecutor()
          : new BaseExecutor("codex", {
              baseUrl: "https://chatgpt.com/backend-api/codex/responses",
            });
      const result = await executor.execute({
        model: "gpt-5.5",
        body: { input: "synthetic", stream: false },
        stream: false,
        credentials: { ...c, connectionId: c.id },
        log,
        onCredentialsRefreshed: async () => {
          persisted++;
        },
      });
      assert.equal(result.response.status, 401);
      if (seconds < 0) {
        assert.equal((await result.response.json()).error.code, "passive_refresh");
        assert.equal(calls.length, 0);
      } else assert.ok(calls.some((url) => url.includes("/backend-api/codex/")));
      assert.equal(
        calls.some((url) => url.includes("auth.openai.com/oauth/token")),
        false
      );
      assert.equal(persisted, 0);
    });
  }
  test(`manual/test/export ${seconds}s token never exchange or persist on passive miss`, async () => {
    const c = await connection(seconds);
    const before = await db.getProviderConnectionById(c.id);
    const response = await manual.POST(request(), { params: Promise.resolve({ id: c.id }) });
    assert.equal(response.status, seconds > 0 ? 200 : 401);
    const tested = await providerTest.POST(request(), { params: Promise.resolve({ id: c.id }) });
    if (seconds < 0) {
      assert.equal(tested.status, 401);
      assert.equal((await tested.json()).error.code, "passive_refresh");
      assert.deepEqual(await db.getProviderConnectionById(c.id), before);
      await assert.rejects(authFile.buildCodexAuthFile(c.id), {
        status: 401,
        code: "passive_refresh",
      });
    } else {
      const built = await authFile.buildCodexAuthFile(c.id);
      assert.ok(built);
    }
    assert.equal(
      calls.some((url) => url.includes("auth.openai.com/oauth/token")),
      false
    );
  });
}
test("passive outcome does not mutate cooldown or account failure counters", async () => {
  const c = await connection(-60);
  const before = await db.getProviderConnectionById(c.id);
  const result = await auth.markAccountUnavailable(
    c.id,
    401,
    policy.PASSIVE_REFRESH_MESSAGE,
    "codex",
    "gpt-5.5",
    null,
    { structuredError: { code: "passive_refresh" } }
  );
  assert.deepEqual(result, { shouldFallback: true, cooldownMs: 0 });
  assert.deepEqual(await db.getProviderConnectionById(c.id), before);
});
test("public Codex connect refuses both readiness and device completion", async () => {
  for (const fn of [connect.GET, connect.POST]) {
    const response = await fn(request(), {
      params: Promise.resolve({ token: "synthetic-ticket" }),
    });
    assert.equal(response.status, 409);
    assert.match(JSON.stringify(await response.json()), /active instance/i);
  }
  assert.equal(calls.length, 0);
});
test("already-issued access token import remains allowed", async () => {
  const response = await importToken.POST(
    new Request("http://localhost/api/oauth/codex/import-token", {
      method: "POST",
      body: JSON.stringify({ accessToken: "synthetic-issued", name: "synthetic" }),
    })
  );
  assert.equal(response.status, 200);
  assert.equal(calls.length, 0);
});
test("default-off manual route keeps the base rotating-provider skip", async () => {
  delete process.env[envName];
  const c = await connection(-60);
  const before = await db.getProviderConnectionById(c.id);
  const response = await manual.POST(request(), { params: Promise.resolve({ id: c.id }) });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).skipped, true);
  assert.deepEqual(await db.getProviderConnectionById(c.id), before);
  assert.equal(calls.length, 0);
});
test("default-off auth export preserves the token exchange", async () => {
  delete process.env[envName];
  const c = await connection(-60);
  globalThis.fetch = async (input) => {
    calls.push(String(input));
    return Response.json({
      access_token: "synthetic-export",
      refresh_token: "synthetic-export-refresh",
      expires_in: 3600,
    });
  };
  await authFile.buildCodexAuthFile(c.id);
  assert.equal(calls.filter((url) => url.includes("auth.openai.com/oauth/token")).length, 1);
});
test("startup enforcement exits rather than accepting an unsupported passive provider", () => {
  const exit = process.exit;
  const messages: string[] = [];
  process.exit = (code) => {
    assert.equal(code, 1);
    throw new Error("synthetic startup exit");
  };
  try {
    assert.throws(
      () =>
        runtimeEnv.enforceWebRuntimeEnv(
          {
            NODE_ENV: "test",
            API_KEY_SECRET: "synthetic-startup-secret",
            [envName]: "codex,claude,openai",
          },
          { error: (message: string) => messages.push(message), warn() {} }
        ),
      /synthetic startup exit/
    );
    assert.equal(messages.filter((message) => message.includes("unsupported ids:")).length, 1);
    assert.match(messages.join("\n"), /claude, openai.*codex, cx/);
    for (const id of ["codex", "cx", " CoDeX , cX , ", "", ", ,"])
      runtimeEnv.enforceWebRuntimeEnv(
        { NODE_ENV: "test", API_KEY_SECRET: "synthetic-startup-secret", [envName]: id },
        {
          error() {
            assert.fail("supported policy");
          },
          warn() {},
        }
      );
  } finally {
    process.exit = exit;
  }
});

for (const kind of ["codex", "base"]) {
  test(`default-off ${kind} proactive executor still exchanges and persists`, async () => {
    delete process.env[envName];
    const c = await connection(-60);
    let persisted = 0;
    globalThis.fetch = async (input) => {
      const url = input instanceof Request ? input.url : String(input);
      calls.push(url);
      return url.includes("/oauth/token")
        ? Response.json({
            access_token: "synthetic-fresh",
            refresh_token: "synthetic-fresh-refresh",
            expires_in: 3600,
          })
        : Response.json({ id: "synthetic" });
    };
    const executor = new CodexExecutor();
    const input = {
      model: "gpt-5.5",
      body: { input: "synthetic" },
      stream: false,
      credentials: { ...c, connectionId: c.id },
      log,
      onCredentialsRefreshed: async () => {
        persisted++;
      },
    };
    const result =
      kind === "codex"
        ? await executor.execute(input)
        : await BaseExecutor.prototype.execute.call(executor, input);
    assert.equal(result instanceof Response ? result.status : result.response.status, 200);
    assert.equal(calls.filter((url) => url.includes("auth.openai.com/oauth/token")).length, 1);
    assert.equal(persisted, 1);
  });
}

for (const seconds of [120, -60]) {
  test(`usage/limits and reset-credit routes with ${seconds}s token have no exchanges or auth-state writes on a miss`, async () => {
    const c = await connection(seconds);
    const before = await db.getProviderConnectionById(c.id);
    const response = await usageRoute.GET(request(), {
      params: Promise.resolve({ connectionId: c.id }),
    });
    assert.equal(response.status, 401);
    assert.equal((await response.json()).error.code, "passive_refresh");
    const credits = await resetCreditRoute.GET(
      new Request(`http://localhost/api/usage/codex-reset-credit?connectionId=${c.id}`)
    );
    assert.equal(credits.status, 401);
    assert.equal((await credits.json()).code, "passive_refresh");
    assert.equal(
      calls.some((url) => url.includes("auth.openai.com/oauth/token")),
      false
    );
    assert.deepEqual(await db.getProviderConnectionById(c.id), before);
  });
}

test("usage reactive reread adopts a changed synchronized token and workspace", async () => {
  const c = await connection();
  let usageCalls = 0;
  globalThis.fetch = async (input, init) => {
    const url = input instanceof Request ? input.url : String(input);
    calls.push(url);
    if (url.includes("/wham/usage")) {
      usageCalls++;
      if (usageCalls === 1) {
        await db.updateProviderConnection(c.id, {
          accessToken: "synthetic-usage-synced",
          providerSpecificData: { workspaceId: "synthetic-usage-workspace" },
        });
        return Response.json({}, { status: 401 });
      }
      assert.equal(
        new Headers(init?.headers).get("authorization"),
        "Bearer synthetic-usage-synced"
      );
      assert.equal(
        new Headers(init?.headers).get("chatgpt-account-id"),
        "synthetic-usage-workspace"
      );
      return Response.json({
        rate_limit: {
          primary_window: {
            used_percent: 10,
            limit_window_seconds: 18000,
            reset_at: Math.floor(Date.now() / 1000) + 60,
          },
        },
      });
    }
    return Response.json({});
  };
  const response = await usageRoute.GET(request(), {
    params: Promise.resolve({ connectionId: c.id }),
  });
  assert.equal(response.status, 200);
  assert.equal(usageCalls, 2);
  assert.equal(
    calls.some((url) => url.includes("auth.openai.com/oauth/token")),
    false
  );
  assert.equal((await db.getProviderConnectionById(c.id)).refreshToken, c.refreshToken);
});

test("passive stored numeric expiry and missing/foreign rows are handled safely", async () => {
  const c = await connection();
  await db.updateProviderConnection(c.id, { expiresAt: String(Date.now() + 120000) });
  const resolved = await policy.resolvePassiveCodex({ connectionId: c.id });
  assert.ok("accessToken" in resolved);
  assert.ok(new Date(resolved.expiresAt).getTime() > Date.now());
  assert.equal(
    (await policy.resolvePassiveCodex({ connectionId: "synthetic-missing" })).code,
    "passive_refresh"
  );
  const other = await db.createProviderConnection({
    provider: "claude",
    accessToken: "synthetic-other",
    expiresAt: new Date(Date.now() + 3600000).toISOString(),
  });
  assert.equal(
    (await policy.resolvePassiveCodex({ connectionId: String(other.id) })).code,
    "passive_refresh"
  );
});

test("default-off local refresh keeps provider and account proxy resolution", async () => {
  delete process.env[envName];
  const c = await connection(-60);
  const syntheticProxy = { type: "http", host: "127.0.0.1", port: 19876 };
  await db.updateProviderConnection(c.id, { providerSpecificData: { proxy: syntheticProxy } });
  const seen: unknown[] = [];
  globalThis.fetch = async (input) => {
    seen.push(proxyFetch.resolveProxyForRequest(String(input)));
    return Response.json({
      access_token: "synthetic-proxied",
      refresh_token: "synthetic-proxied-refresh",
      expires_in: 3600,
    });
  };
  const expected = await localRefresh.resolveProxyForCredentials("codex", { connectionId: c.id });
  await localRefresh.refreshCodexToken(c.refreshToken, { connectionId: c.id });
  assert.equal(seen.length, 1);
  const reference = await proxyFetch.runWithProxyContext(expected, async () =>
    proxyFetch.resolveProxyForRequest("https://auth.openai.com/oauth/token")
  );
  assert.deepEqual(seen[0], reference);
});

test("passive shared resolution ignores a pre-existing breaker without changing it", async () => {
  delete process.env[envName];
  await refresh.refreshWithRetry(async () => null, 1, null, "codex", { failureThreshold: 1 });
  const before = refresh.getCircuitBreakerStatus();
  process.env[envName] = "codex";
  const c = await connection();
  const result = await refresh.refreshWithRetry(
    () => new CodexExecutor().refreshCredentials({ ...c, connectionId: c.id }, null),
    1,
    null,
    "codex"
  );
  assert.equal(result.code, "passive_refresh");
  const after = refresh.getCircuitBreakerStatus();
  assert.equal(after.codex.failures, before.codex.failures);
  assert.equal(after.codex.blockedUntil, before.codex.blockedUntil);
});
