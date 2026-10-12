/**
 * Route-level authentication guard for CLIENT_API (`/v1/*`) handlers.
 *
 * Defence-in-depth companion to `clientApiPolicy`
 * (src/server/authz/policies/clientApi.ts), which already fronts these routes
 * through `src/proxy.ts`. The handler-level check must never be *stricter*
 * than the middleware, otherwise callers the pipeline admits get a 401 from
 * the route instead — both layers apply the same strict-mode rule below:
 *
 *  - a presented key must be valid, but is only rejected while
 *    `REQUIRE_API_KEY=true`; with enforcement off a stale CLI key degrades to
 *    anonymous instead of failing the whole request (#2257);
 *  - a cookie-authenticated dashboard session is accepted in place of a key —
 *    the dashboard Media page and Playground call these routes with a session
 *    only (same fix as the preset auth mismatch in
 *    `src/app/api/playground/presets/route.ts`);
 *  - anonymous traffic stays allowed while `REQUIRE_API_KEY=false`.
 *  - with `REQUIRE_API_KEY_STRICT=true` (and `REQUIRE_API_KEY=true`), a
 *    dashboard session is no longer sufficient for routes that dispatch to
 *    providers — only a valid API key is accepted, so nothing can be
 *    upstreamed without one. The read-only model catalog stays
 *    session-accessible so the dashboard UI keeps working.
 *
 * @module shared/utils/clientApiRouteAuth
 */

import { errorResponse } from "@omniroute/open-sse/utils/error.ts";
import { HTTP_STATUS } from "@omniroute/open-sse/config/constants.ts";
import { extractApiKey, isValidApiKey } from "@/sse/services/auth";
import { isRequireApiKeyEnabled, isStrictApiKeyEnabled } from "@/shared/utils/featureFlags";
import { isDashboardSessionAuthenticated } from "@/shared/utils/apiAuth";

/**
 * CLIENT_API path prefixes where a dashboard session stays sufficient even
 * when strict API-key enforcement is on. These are read-only local routes that
 * never dispatch to an upstream provider — the dashboard UI needs them with
 * just its session (model catalog for the API-key editor, combos page, ...).
 * Everything else under /v1/* requires a valid API key in strict mode.
 */
const STRICT_SESSION_EXEMPT_PREFIXES: readonly string[] = ["/api/v1/models"];

/**
 * Whether `pathname` names a CLIENT_API route that keeps accepting a
 * dashboard session while strict API-key enforcement is on.
 *
 * Accepts both the public spelling (`/v1/models`) and the rewritten one
 * (`/api/v1/models`); matching is by exact path or strict prefix so adjacent
 * routes (e.g. `/v1/models-extra`) are not accidentally exempted.
 */
export function isSessionExemptClientApiPath(pathname: string): boolean {
  let path = typeof pathname === "string" && pathname ? pathname : "/";
  // Normalize the public spelling to the rewritten one the classifier uses.
  if (path === "/v1" || path.startsWith("/v1/")) path = "/api" + path;
  return STRICT_SESSION_EXEMPT_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(prefix + "/")
  );
}

/**
 * Strict API-key enforcement is active only when the base flag is enabled too:
 * with `REQUIRE_API_KEY=false` anonymous traffic is allowed anyway, so there
 * is nothing for strict mode to tighten.
 */
export function isStrictApiKeyEnforced(): boolean {
  return isRequireApiKeyEnabled() && isStrictApiKeyEnabled();
}

function requestPathname(request: Request): string {
  try {
    return new URL(request.url).pathname;
  } catch {
    // Unparseable URL — fail closed: treat as a non-exempt path.
    return "/unparseable";
  }
}

/**
 * Authenticate a client-API request at the route level.
 *
 * @param request - The incoming request.
 * @returns A 401 `Response` the handler must return, or `null` when the
 *          request may proceed to policy enforcement.
 */
export async function enforceClientApiRouteAuth(request: Request): Promise<Response | null> {
  const apiKeyRaw = extractApiKey(request);

  if (apiKeyRaw) {
    if (await isValidApiKey(apiKeyRaw)) return null;
    return isRequireApiKeyEnabled()
      ? errorResponse(HTTP_STATUS.UNAUTHORIZED, "Invalid API key")
      : null;
  }

  if (await isDashboardSessionAuthenticated(request)) {
    // Strict mode: a dashboard session is not a substitute for an API key on
    // routes that dispatch to providers — otherwise a stolen session can burn
    // upstream quota with no key in the audit trail.
    if (isStrictApiKeyEnforced() && !isSessionExemptClientApiPath(requestPathname(request))) {
      return errorResponse(
        HTTP_STATUS.UNAUTHORIZED,
        "Authentication required: this endpoint requires a valid API key"
      );
    }
    return null;
  }

  return isRequireApiKeyEnabled()
    ? errorResponse(HTTP_STATUS.UNAUTHORIZED, "Authentication required")
    : null;
}
