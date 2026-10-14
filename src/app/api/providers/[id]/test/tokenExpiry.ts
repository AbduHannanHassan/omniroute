/**
 * Check if token is expired or about to expire (within 5 minutes).
 *
 * A NULL/missing expiry is treated as expired when the connection carries a
 * refresh token: connections imported without an expires_at (bulk import,
 * manual entry) would otherwise never trigger the proactive refresh before the
 * probe, and a stale access token then surfaces as a provider-specific 400
 * that the 401/403 reactive branch never recovers from. When there is no
 * refresh token the old behaviour stands — an unknown expiry cannot be fixed,
 * so probing as-is is the only option.
 */
export function isTokenExpired(connection: {
  expiresAt?: string | number;
  tokenExpiresAt?: string | number;
  refreshToken?: unknown;
}) {
  const expiresAtValue = connection.expiresAt || connection.tokenExpiresAt;
  if (!expiresAtValue) {
    return typeof connection.refreshToken === "string" && connection.refreshToken.length > 0;
  }
  const expiresAt = new Date(expiresAtValue).getTime();
  if (!Number.isFinite(expiresAt)) {
    // Corrupt date string: unverifiable, and refreshable if we can refresh.
    return typeof connection.refreshToken === "string" && connection.refreshToken.length > 0;
  }
  const buffer = 5 * 60 * 1000; // 5 minutes
  return expiresAt <= Date.now() + buffer;
}
