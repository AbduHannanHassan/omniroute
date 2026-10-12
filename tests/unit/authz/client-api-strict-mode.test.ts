import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { SignJWT } from "jose";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omr-clientapi-strict-"));
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.API_KEY_SECRET = "test-api-key-secret-for-strict-mode-tests-0001";

const apiKeysDb = await import("../../../src/lib/db/apiKeys.ts");
const featureFlagsDb = await import("../../../src/lib/db/featureFlags.ts");
const core = await import("../../../src/lib/db/core.ts");
const { isSessionExemptClientApiPath, isStrictApiKeyEnforced } =
  await import("../../../src/shared/utils/clientApiRouteAuth.ts");

const ORIGINAL_REQUIRE_API_KEY = process.env.REQUIRE_API_KEY;
const ORIGINAL_STRICT = process.env.REQUIRE_API_KEY_STRICT;
const ORIGINAL_JWT_SECRET = process.env.JWT_SECRET;

function resetStorage() {
  core.resetDbInstance();
  apiKeysDb.resetApiKeyState();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
  delete process.env.JWT_SECRET;
  process.env.REQUIRE_API_KEY = "true";
  delete process.env.REQUIRE_API_KEY_STRICT;
}

test.beforeEach(() => {
  resetStorage();
});

test.after(() => {
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  if (ORIGINAL_REQUIRE_API_KEY === undefined) delete process.env.REQUIRE_API_KEY;
  else process.env.REQUIRE_API_KEY = ORIGINAL_REQUIRE_API_KEY;
  if (ORIGINAL_STRICT === undefined) delete process.env.REQUIRE_API_KEY_STRICT;
  else process.env.REQUIRE_API_KEY_STRICT = ORIGINAL_STRICT;
  if (ORIGINAL_JWT_SECRET === undefined) delete process.env.JWT_SECRET;
  else process.env.JWT_SECRET = ORIGINAL_JWT_SECRET;
});

async function loadPolicy() {
  const mod = await import(`../../../src/server/authz/policies/clientApi.ts?ts=${Date.now()}`);
  return mod.clientApiPolicy;
}

function ctx(headers: Headers, method = "POST", normalizedPath = "/api/v1/chat/completions") {
  const pathOnly = normalizedPath.split("?")[0];
  return {
    request: { method, headers, url: `http://localhost${normalizedPath}` },
    classification: {
      routeClass: "CLIENT_API" as const,
      reason: "client_api_v1" as const,
      normalizedPath: pathOnly,
    },
    requestId: "req_test",
  };
}

async function dashboardCookie(): Promise<string> {
  process.env.JWT_SECRET = "test-jwt-secret-for-strict-mode-tests-0002";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new SignJWT({ authenticated: true })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secret);
  return `auth_token=${token}`;
}

function enableStrict() {
  featureFlagsDb.setFeatureFlagOverride("REQUIRE_API_KEY_STRICT", "true");
}

// --- isSessionExemptClientApiPath unit tests ---------------------------------

test("isSessionExemptClientApiPath: models catalog exempt in both spellings", () => {
  assert.equal(isSessionExemptClientApiPath("/api/v1/models"), true);
  assert.equal(isSessionExemptClientApiPath("/v1/models"), true);
  assert.equal(isSessionExemptClientApiPath("/api/v1/models/abc123"), true);
});

test("isSessionExemptClientApiPath: inference routes are not exempt", () => {
  assert.equal(isSessionExemptClientApiPath("/api/v1/chat/completions"), false);
  assert.equal(isSessionExemptClientApiPath("/v1/chat/completions"), false);
  assert.equal(isSessionExemptClientApiPath("/api/v1/responses"), false);
  assert.equal(isSessionExemptClientApiPath("/api/v1/embeddings"), false);
});

test("isSessionExemptClientApiPath: prefix-adjacent paths are not exempt", () => {
  assert.equal(isSessionExemptClientApiPath("/api/v1/models-extra"), false);
  assert.equal(isSessionExemptClientApiPath("/api/v1/modelsx"), false);
});

test("isSessionExemptClientApiPath: empty/garbage fails closed", () => {
  assert.equal(isSessionExemptClientApiPath(""), false);
});

// --- isStrictApiKeyEnforced ----------------------------------------------------

test("isStrictApiKeyEnforced: needs both flags", () => {
  assert.equal(isStrictApiKeyEnforced(), false);
  enableStrict();
  assert.equal(isStrictApiKeyEnforced(), true);
  process.env.REQUIRE_API_KEY = "false";
  featureFlagsDb.removeFeatureFlagOverride("REQUIRE_API_KEY");
  assert.equal(isStrictApiKeyEnforced(), false);
});

// --- middleware policy behavior ------------------------------------------------

test("strict off: dashboard session still accepted for inference (existing behavior)", async () => {
  const policy = await loadPolicy();
  const out = await policy.evaluate(
    ctx(new Headers({ cookie: await dashboardCookie() }), "POST", "/api/v1/chat/completions")
  );
  assert.equal(out.allow, true);
  if (out.allow) assert.equal(out.subject.kind, "dashboard_session");
});

test("strict on: dashboard session rejected on inference routes", async () => {
  enableStrict();
  const policy = await loadPolicy();
  const out = await policy.evaluate(
    ctx(new Headers({ cookie: await dashboardCookie() }), "POST", "/api/v1/chat/completions")
  );
  assert.equal(out.allow, false);
  if (!out.allow) {
    assert.equal(out.status, 401);
    assert.equal(out.code, "AUTH_002");
  }
});

test("strict on: dashboard session still allowed on the models catalog", async () => {
  enableStrict();
  const policy = await loadPolicy();
  const out = await policy.evaluate(
    ctx(new Headers({ cookie: await dashboardCookie() }), "GET", "/api/v1/models")
  );
  assert.equal(out.allow, true);
  if (out.allow) assert.equal(out.subject.kind, "dashboard_session");
});

test("strict on: valid API key still accepted on inference routes", async () => {
  enableStrict();
  const created = await apiKeysDb.createApiKey("strict-test-key", "machine-strict-1");
  assert.ok(created?.key, "createApiKey must return a key");

  const policy = await loadPolicy();
  const out = await policy.evaluate(
    ctx(new Headers({ authorization: `Bearer ${created.key}` }), "POST", "/api/v1/chat/completions")
  );
  assert.equal(out.allow, true);
  if (out.allow) assert.equal(out.subject.kind, "client_api_key");
});

test("strict on: anonymous still rejected", async () => {
  enableStrict();
  const policy = await loadPolicy();
  const out = await policy.evaluate(ctx(new Headers()));
  assert.equal(out.allow, false);
  if (!out.allow) assert.equal(out.status, 401);
});

test("strict on but REQUIRE_API_KEY off: session allowed (strict is moot)", async () => {
  process.env.REQUIRE_API_KEY = "false";
  enableStrict();
  const policy = await loadPolicy();
  const out = await policy.evaluate(
    ctx(new Headers({ cookie: await dashboardCookie() }), "POST", "/api/v1/chat/completions")
  );
  assert.equal(out.allow, true);
});

// --- enforceClientApiRouteAuth (handler-level defense-in-depth) ----------------
// These are the checks the route handlers run directly, so a proxy-matcher
// bypass (e.g. uppercase /V1/ aliases) still hits authentication.

async function routeRequest(pathname: string, headers?: HeadersInit): Promise<Request> {
  return new Request(`http://localhost${pathname}`, {
    method: "POST",
    headers: new Headers(headers),
  });
}

test("handler guard: keyless inference request rejected (proxy-bypass safety net)", async () => {
  const { enforceClientApiRouteAuth } =
    await import("../../../src/shared/utils/clientApiRouteAuth.ts");
  const rejection = await enforceClientApiRouteAuth(await routeRequest("/api/v1/chat/completions"));
  assert.ok(rejection, "keyless request must be rejected at the handler");
  assert.equal(rejection.status, 401);
});

test("handler guard: session accepted when strict off (existing behavior)", async () => {
  const { enforceClientApiRouteAuth } =
    await import("../../../src/shared/utils/clientApiRouteAuth.ts");
  const rejection = await enforceClientApiRouteAuth(
    await routeRequest("/api/v1/chat/completions", { cookie: await dashboardCookie() })
  );
  assert.equal(rejection, null);
});

test("handler guard: session rejected on inference when strict on", async () => {
  enableStrict();
  const { enforceClientApiRouteAuth } =
    await import("../../../src/shared/utils/clientApiRouteAuth.ts");
  const rejection = await enforceClientApiRouteAuth(
    await routeRequest("/api/v1/chat/completions", { cookie: await dashboardCookie() })
  );
  assert.ok(rejection, "session must be rejected in strict mode");
  assert.equal(rejection.status, 401);
});

test("handler guard: session accepted on models catalog when strict on", async () => {
  enableStrict();
  const { enforceClientApiRouteAuth } =
    await import("../../../src/shared/utils/clientApiRouteAuth.ts");
  const rejection = await enforceClientApiRouteAuth(
    await routeRequest("/api/v1/models", { cookie: await dashboardCookie() })
  );
  assert.equal(rejection, null);
});
