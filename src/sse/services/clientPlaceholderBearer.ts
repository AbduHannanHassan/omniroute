import { readHeaderValue, type AuthRequestHeaders } from "./headerReader.ts";

/**
 * Bearer values that some clients send only to satisfy an SDK that insists on an
 * `Authorization` header, while the real credential travels in `x-api-key`.
 *
 * - `acp-proxy`: JetBrains Air's local BYOK proxy forwards the embedded Claude
 *   engine's requests as `Authorization: Bearer acp-proxy` + `x-api-key: <real key>`.
 *
 * The match is exact (case-insensitive, trimmed) so no real key is ever mistaken
 * for a placeholder. See `resolveAuthorizationBearer`.
 */
const PLACEHOLDER_BEARER_TOKENS: ReadonlySet<string> = new Set(["acp-proxy"]);

export function isPlaceholderBearer(token: string | null | undefined): boolean {
  return typeof token === "string" && PLACEHOLDER_BEARER_TOKENS.has(token.trim().toLowerCase());
}

/**
 * Issue #2225: Anthropic Messages API clients authenticate via `x-api-key`.
 * Gated on `anthropic-version` OR a claude-code/anthropic user-agent so local-mode
 * requests from non-Anthropic clients that send placeholder `x-api-key` values
 * are not rejected as an invalid key.
 */
export function extractAnthropicApiKeyHeader(
  headers: AuthRequestHeaders | null | undefined
): string | null {
  const anthropicVersion =
    readHeaderValue(headers, "anthropic-version") || readHeaderValue(headers, "Anthropic-Version");
  const userAgent =
    readHeaderValue(headers, "user-agent") || readHeaderValue(headers, "User-Agent");
  if (!anthropicVersion && !(userAgent && /claude-code|claude-cli|anthropic/i.test(userAgent))) {
    return null;
  }
  return readHeaderValue(headers, "x-api-key") || readHeaderValue(headers, "X-Api-Key");
}

/**
 * Credential carried by an `Authorization: Bearer <token>` header.
 *
 * Bearer keeps priority over `x-api-key` ("explicit headers win"), with one
 * exception: a known client placeholder (see PLACEHOLDER_BEARER_TOKENS) yields to
 * an eligible `x-api-key`, because the placeholder can never authenticate.
 *
 * @returns the token (`null` for an empty one), or `undefined` when the header is
 *   not a Bearer credential or is a placeholder superseded by `x-api-key` — the
 *   caller then continues with its other credential sources.
 */
export function resolveAuthorizationBearer(
  authorization: string | null | undefined,
  headers: AuthRequestHeaders | null | undefined
): string | null | undefined {
  if (typeof authorization !== "string") return undefined;
  const trimmed = authorization.trim();
  if (!trimmed.toLowerCase().startsWith("bearer ")) return undefined;
  const token = trimmed.slice(7).trim();
  if (isPlaceholderBearer(token) && extractAnthropicApiKeyHeader(headers)) return undefined;
  return token || null;
}
