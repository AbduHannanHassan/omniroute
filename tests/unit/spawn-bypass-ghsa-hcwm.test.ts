/**
 * GHSA-hcwm-v74f-pfvh — the manage-scope LOCAL_ONLY bypass must never reach a
 * code-exec / spawn-capable route, at ANY of its three layers:
 *
 *   1. zod refine on `localOnlyManageScopeBypassPrefixes` (PATCH /api/settings),
 *   2. `normalizeAuthzBypass()` (DB row → runtime snapshot),
 *   3. `isLocalOnlyBypassableByManageScope()` (route-guard hot path),
 *
 * and the bypass keys must not be writable through POST /api/settings/import-json,
 * which skips the password re-auth that PATCH /api/settings enforces.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { setupSettingsFixture, mockSettings } from "./_mocks/settings.ts";

const fixture = setupSettingsFixture("ghsa-hcwm");
process.env.OMNIROUTE_DISABLE_REDIS_AUTH_CACHE = "1";

const core = await import("../../src/lib/db/core.ts");
const settingsDb = await import("../../src/lib/db/settings.ts");
const runtime = await import("../../src/lib/config/runtimeSettings.ts");
const routeGuard = await import("../../src/server/authz/routeGuard.ts");
const { updateSettingsSchema } = await import("../../src/shared/validation/settingsSchemas.ts");
const importJsonRoute = await import("../../src/app/api/settings/import-json/route.ts");
const sessionToken = await import("../../src/shared/utils/dashboardSessionToken.ts");
const securitySettings = await import("../../src/shared/constants/securityImpactingSettings.ts");

const GLOBAL_KEY = "__omniroute_authzBypass_config__";
const g = globalThis as unknown as Record<string, unknown>;

/** Code-exec / spawn routes that sat in LOCAL_ONLY but outside the deny-list. */
const NEWLY_DENIED_PREFIXES = [
  "/api/middleware/", // new vm.Script over caller-supplied hook code
  "/api/acp/agents", // execFileSync(probe.command, …, { shell })
  "/api/system/version", // POST: git checkout + npm install
  "/api/db-backups/exportAll", // execFileSync("tar", …)
  "/api/db/health", // fork() of the health-check worker
  "/api/oauth/cursor/auto-import", // execFile("which", "cursor")
  "/api/cli-tools/omp-settings",
  "/api/cli-tools/letta-settings",
  "/api/cli-tools/grok-build-settings",
  "/api/cli-tools/forge-settings",
  "/api/cli-tools/jcode-settings",
];

/** Concrete request paths under the newly denied surfaces. */
const NEWLY_DENIED_PATHS = [
  "/api/middleware/hooks",
  "/api/middleware/hooks/my-hook",
  "/api/acp/agents",
  "/api/system/version",
  "/api/db-backups/exportAll",
  "/api/db/health",
  "/api/oauth/cursor/auto-import",
  "/api/cli-tools/omp-settings",
  "/api/cli-tools/letta-settings",
  "/api/cli-tools/grok-build-settings",
  "/api/cli-tools/forge-settings",
  "/api/cli-tools/jcode-settings",
  "/api/providers/validate", // S-01 spawn: in LOCAL_ONLY_API_PATTERNS, not in SPAWN_CAPABLE_PATTERNS
  "/api/providers/import",
  "/api/providers/bulk",
];

function prefixRejectedBySchema(prefix: string): boolean {
  const result = updateSettingsSchema.safeParse({ localOnlyManageScopeBypassPrefixes: [prefix] });
  return !result.success;
}

test.beforeEach(async () => {
  await fixture.resetStorage();
  runtime.resetRuntimeSettingsStateForTests();
});

test.after(() => {
  delete g[GLOBAL_KEY];
  runtime.resetRuntimeSettingsStateForTests();
  core.resetDbInstance();
  fixture.cleanup();
});

// ─── Layer 1: zod refine ────────────────────────────────────────────────────

test("Layer 1: the settings schema rejects /api/middleware/ and /api/acp/agents as bypass prefixes", () => {
  assert.equal(prefixRejectedBySchema("/api/middleware/"), true);
  assert.equal(prefixRejectedBySchema("/api/middleware"), true);
  assert.equal(prefixRejectedBySchema("/api/middleware/hooks"), true);
  assert.equal(prefixRejectedBySchema("/api/acp/agents"), true);
  assert.equal(prefixRejectedBySchema("/api/acp/"), true, "parent of a spawn-capable prefix");
});

test("Layer 1: the settings schema rejects every audited code-exec / spawn LOCAL_ONLY prefix", () => {
  for (const prefix of NEWLY_DENIED_PREFIXES) {
    assert.equal(prefixRejectedBySchema(prefix), true, prefix);
  }
});

test("Layer 1: a parent prefix that would cover a spawn-capable route is rejected", () => {
  for (const prefix of ["/api/", "/api/cli-tools/", "/api/plug", "/api/system/"]) {
    assert.equal(prefixRejectedBySchema(prefix), true, prefix);
  }
});

test("Layer 1: non-spawning LOCAL_ONLY prefixes stay configurable", () => {
  for (const prefix of ["/api/mcp/", "/api/copilot/", "/api/resilience/connections"]) {
    assert.equal(prefixRejectedBySchema(prefix), false, prefix);
  }
});

// ─── Layer 3: runtime route-guard predicate (snapshot written directly) ─────

test("Layer 3: isLocalOnlyBypassableByManageScope refuses the denied routes even if the live snapshot lists them", () => {
  // Write straight into the globalThis store, skipping normalizeAuthzBypass, so
  // this exercises the route-guard veto on its own (a malformed snapshot).
  g[GLOBAL_KEY] = {
    enabled: true,
    prefixes: [...NEWLY_DENIED_PREFIXES, "/api/providers/", "/api/resilience/connections"],
  };
  // Control: the bypass is live for a non-spawning route.
  assert.equal(routeGuard.isLocalOnlyBypassableByManageScope("/api/resilience/connections"), true);
  for (const path of NEWLY_DENIED_PATHS) {
    assert.equal(routeGuard.isLocalOnlyBypassableByManageScope(path), false, path);
  }
});

test("Layer 3: the bare /api/plugins and /api/middleware paths are refused too", () => {
  g[GLOBAL_KEY] = { enabled: true, prefixes: ["/api/plugins", "/api/middleware"] };
  assert.equal(routeGuard.isLocalOnlyBypassableByManageScope("/api/plugins"), false);
  assert.equal(routeGuard.isLocalOnlyBypassableByManageScope("/api/middleware"), false);
});

// ─── Layer 2: normalizeAuthzBypass ──────────────────────────────────────────

test("Layer 2: normalizeAuthzBypass drops spawn-capable entries from a DB row", () => {
  const snapshot = runtime.buildRuntimeSettingsSnapshot({
    localOnlyManageScopeBypassEnabled: true,
    localOnlyManageScopeBypassPrefixes: [
      "/api/mcp/",
      "/api/middleware/",
      "/api/acp/agents",
      "/api/cli-tools/runtime/",
      "/api/",
      "/api/resilience/connections",
    ],
  });
  assert.deepEqual(snapshot.authzBypass, {
    enabled: true,
    prefixes: ["/api/mcp/", "/api/resilience/connections"],
  });
});

test("Layer 2: applyRuntimeSettings never publishes a spawn-capable bypass prefix", async () => {
  await runtime.applyRuntimeSettings(
    {
      localOnlyManageScopeBypassEnabled: true,
      localOnlyManageScopeBypassPrefixes: ["/api/mcp/", "/api/middleware/", "/api/acp/agents"],
    },
    { force: true }
  );
  assert.deepEqual(runtime.getAuthzBypassSnapshot().prefixes, ["/api/mcp/"]);
});

// ─── import-json must not write the re-auth-guarded keys ────────────────────

test("import-json does not persist the authz-bypass keys or any other re-auth-guarded setting", async () => {
  await mockSettings({ requireLogin: false });
  const before = (await settingsDb.getSettings()) as Record<string, unknown>;

  const payload = {
    settings: {
      localOnlyManageScopeBypassEnabled: false,
      localOnlyManageScopeBypassPrefixes: ["/api/mcp/", "/api/middleware/", "/api/acp/agents"],
      oidcEnabled: true,
      oidcDisablePasswordLogin: true,
      oidcClientSecret: "attacker-secret",
      newPassword: "attacker-password",
      password: "$2b$10$attackerhashattackerhashattackerhashattackerhashatt",
      requireLogin: false,
      sessionsValidAfter: 0,
      revokedDashboardSessions: [],
      ghsaHcwmBenignKey: "kept",
    },
  };
  const response = await importJsonRoute.POST(
    new Request("http://localhost:20128/api/settings/import-json", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
  );
  assert.equal(response.status, 200, await response.clone().text());

  const after = (await settingsDb.getSettings()) as Record<string, unknown>;
  // Benign keys still import (the route keeps working as a backup restore).
  assert.equal(after.ghsaHcwmBenignKey, "kept");
  // Every guarded key keeps its pre-import value.
  for (const key of [
    "localOnlyManageScopeBypassEnabled",
    "localOnlyManageScopeBypassPrefixes",
    "oidcEnabled",
    "oidcDisablePasswordLogin",
    "oidcClientSecret",
    "newPassword",
    "password",
    "requireLogin",
    "sessionsValidAfter",
    "revokedDashboardSessions",
  ]) {
    assert.deepEqual(after[key], before[key], key);
  }
});

test("import-protected keys cover every PATCH re-auth key and the real session-state setting names", () => {
  const protectedKeys = new Set(securitySettings.IMPORT_PROTECTED_SETTINGS_KEYS);
  for (const key of securitySettings.SECURITY_IMPACTING_SETTINGS_KEYS) {
    assert.ok(protectedKeys.has(key), key);
  }
  assert.ok(protectedKeys.has(sessionToken.SESSIONS_VALID_AFTER_SETTING));
  assert.ok(protectedKeys.has(sessionToken.REVOKED_SESSIONS_SETTING));
  assert.deepEqual(
    securitySettings.stripImportProtectedSettings({
      localOnlyManageScopeBypassPrefixes: ["/api/middleware/"],
      password: "x",
      theme: "dark",
    }),
    { theme: "dark" }
  );
});
