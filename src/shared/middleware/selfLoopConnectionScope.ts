import { resolveSelfLoopBearer } from "./chatAdmissionIdentity";
import { timingSafeCompare } from "@/shared/utils/timingSafeCompare";

/**
 * GHSA-3w2r-vvhm-8h85: the Vision Bridge describes images through a self-loop
 * to /v1/chat/completions authenticated with the internal self-loop bearer, not
 * the caller's API key. The caller key's `allowedConnections` would otherwise be
 * lost on that hop, so the describe call sends them in this header and the
 * policy layer narrows the self-loop identity to them.
 */
export const SELF_LOOP_ALLOWED_CONNECTIONS_HEADER = "x-omniroute-allowed-connections";

/** Never matches a real connection: a disjoint narrowing must admit nothing. */
const NO_CONNECTION_SENTINEL = "__omniroute_self_loop_no_connection__";

function parseConnectionIds(raw: string | null): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);
}

function isSelfLoopBearerRequest(request: Request): boolean {
  const auth = request.headers.get("authorization") || "";
  const match = /^bearer\s+(\S+)$/i.exec(auth.trim());
  if (!match) return false;
  return timingSafeCompare(match[1].trim(), resolveSelfLoopBearer());
}

/**
 * Narrow the self-loop identity to the connection scope carried by the
 * describe call. Honored only for the internal self-loop bearer, and it can
 * only narrow: an existing `allowedConnections` list is intersected, never
 * replaced by a wider one. Returns the input object untouched when it does not
 * apply (never mutates the cached key metadata).
 */
export function applySelfLoopConnectionScope<T extends { allowedConnections?: string[] }>(
  request: Request,
  apiKeyInfo: T | null
): T | null {
  if (!apiKeyInfo) return apiKeyInfo;
  const requested = parseConnectionIds(request.headers.get(SELF_LOOP_ALLOWED_CONNECTIONS_HEADER));
  if (requested.length === 0 || !isSelfLoopBearerRequest(request)) return apiKeyInfo;

  const existing = Array.isArray(apiKeyInfo.allowedConnections)
    ? apiKeyInfo.allowedConnections.filter((id) => typeof id === "string" && id.length > 0)
    : [];
  const narrowed =
    existing.length > 0 ? requested.filter((id) => existing.includes(id)) : requested;
  // An empty allowedConnections list means "unrestricted" downstream, so a
  // disjoint narrowing must be expressed as a list nothing can match.
  return {
    ...apiKeyInfo,
    allowedConnections: narrowed.length > 0 ? narrowed : [NO_CONNECTION_SENTINEL],
  };
}
