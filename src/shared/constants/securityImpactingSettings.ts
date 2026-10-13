/**
 * Settings keys whose change broadens attack surface or touches authentication.
 *
 * `PATCH /api/settings` requires password re-auth (`currentPassword`) whenever any
 * of these keys is present in the validated body. Kept in a server-free leaf so
 * every other settings writer can consult the SAME list instead of a drifting copy.
 *
 * - `localOnlyManageScopeBypassEnabled` / `localOnlyManageScopeBypassPrefixes`:
 *   T-011 bypass kill-switch + per-prefix list. Operator must re-confirm before
 *   broadening the LOCAL_ONLY carve-out.
 * - `requireLogin`: dashboard login enforcement toggle.
 * - `newPassword`: password rotation. Handled by the same gate so the
 *   password-verify only fires ONCE per PATCH.
 * - `oidcEnabled` / `oidcDisablePasswordLogin` / `oidcClientSecret`: OIDC login.
 * - `oidcIssuer` / `oidcClientId` / `oidcAllowedSubjects` / `oidcRedirectPath` /
 *   `oidcScopes`: the OIDC identity config — which IdP's ID tokens are trusted, the
 *   audience they must carry, where the authorization code is sent and which subjects
 *   may log in. Changing them without re-auth would let a stolen session or management
 *   credential point dashboard login at an attacker-controlled IdP or allowlist the
 *   attacker's own subject. Every `oidc*` key of the settings schema belongs here
 *   (pinned by `tests/unit/oidc-settings-reauth.test.ts`).
 */
export const SECURITY_IMPACTING_SETTINGS_KEYS = [
  "localOnlyManageScopeBypassEnabled",
  "localOnlyManageScopeBypassPrefixes",
  "requireLogin",
  "newPassword",
  "oidcEnabled",
  "oidcDisablePasswordLogin",
  "oidcClientSecret",
  "oidcIssuer",
  "oidcClientId",
  "oidcAllowedSubjects",
  "oidcRedirectPath",
  "oidcScopes",
] as const;

/**
 * Keys a bulk settings import (`POST /api/settings/import-json`) must NEVER write.
 * That route has no password re-auth, so it must not become a side door around the
 * PATCH gate (GHSA-hcwm-v74f-pfvh): every re-auth-guarded key, plus the stored
 * password hash, the re-auth field itself and the dashboard-session revocation state
 * (`SESSIONS_VALID_AFTER_SETTING` / `REVOKED_SESSIONS_SETTING` in
 * `src/shared/utils/dashboardSessionToken.ts` — literals here to keep this leaf free of
 * the `jose` import; a unit test pins them to those constants). Importing an older
 * value of either would revive sessions that a password change or logout ended.
 */
export const IMPORT_PROTECTED_SETTINGS_KEYS: ReadonlyArray<string> = [
  ...SECURITY_IMPACTING_SETTINGS_KEYS,
  "password",
  "currentPassword",
  "sessionsValidAfter",
  "revokedDashboardSessions",
];

/**
 * Return a copy of `settings` with every `IMPORT_PROTECTED_SETTINGS_KEYS` entry
 * removed, so an imported backup cannot change authentication or authz-bypass state.
 */
export function stripImportProtectedSettings(
  settings: Record<string, unknown>
): Record<string, unknown> {
  const protectedKeys = new Set(IMPORT_PROTECTED_SETTINGS_KEYS);
  return Object.fromEntries(Object.entries(settings).filter(([key]) => !protectedKeys.has(key)));
}
