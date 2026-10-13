import { createErrorResponse } from "@/lib/api/errorResponse";
import { isCliTokenAuthValid } from "@/lib/middleware/cliTokenAuth";
import { AUTHZ_HEADER_AUTH_KIND, AUTHZ_HEADER_AUTH_LABEL } from "@/server/authz/headers";
import { isAuthRequired, isDashboardSessionAuthenticated } from "@/shared/utils/apiAuth";
import type { SyncTokenIssuerKind } from "@/lib/sync/tokens";

export type SyncTokenIssuerResolution =
  { ok: true; issuerKind: SyncTokenIssuerKind } | { ok: false; response: Response };

/**
 * Who may mint a sync token (GHSA-2452-4qrm-6p4w).
 *
 * A sync token downloads the full config bundle — every provider credential in plaintext —
 * so minting one is an operator action, not something an API key can do on its own:
 *   - an authenticated dashboard session (the admin logged in with the password / OIDC),
 *   - the machine-bound local CLI credential (loopback only, stamped by the authz pipeline
 *     or validated here for raw callers) — keeps `omniroute sync tokens create` working,
 *   - an instance with login disabled (every management surface is already open).
 *
 * Manage/admin-scoped API keys and scoped `oma_` access tokens are refused: a manage key can
 * be handed to automation and must not be able to extract credentials that GET
 * /api/providers masks and /api/keys/{id}/reveal withholds.
 */
export async function resolveSyncTokenIssuer(request: Request): Promise<SyncTokenIssuerResolution> {
  try {
    if (!(await isAuthRequired(request, { ignorePublicRoute: true }))) {
      return { ok: true, issuerKind: "open_instance" };
    }

    if (await isDashboardSessionAuthenticated(request)) {
      return { ok: true, issuerKind: "dashboard_session" };
    }

    if (
      request.headers.get(AUTHZ_HEADER_AUTH_KIND) === "management_key" &&
      request.headers.get(AUTHZ_HEADER_AUTH_LABEL) === "local-cli-token"
    ) {
      return { ok: true, issuerKind: "local_cli" };
    }

    if (await isCliTokenAuthValid(request)) {
      return { ok: true, issuerKind: "local_cli" };
    }
  } catch {
    return {
      ok: false,
      response: createErrorResponse({
        status: 503,
        message: "Service temporarily unavailable",
        type: "server_error",
      }),
    };
  }

  const hasCredential =
    Boolean(request.headers.get("authorization")) || Boolean(request.headers.get("x-api-key"));
  if (hasCredential) {
    return {
      ok: false,
      response: createErrorResponse({
        status: 403,
        message:
          "Sync tokens can only be issued from an authenticated dashboard session or the local CLI.",
        type: "invalid_request",
      }),
    };
  }

  return {
    ok: false,
    response: createErrorResponse({
      status: 401,
      message: "Authentication required",
      type: "invalid_request",
    }),
  };
}
