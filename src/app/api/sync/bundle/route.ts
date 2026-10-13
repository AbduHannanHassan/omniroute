import { buildConfigSyncEnvelope, redactApiKeySecretsForExport } from "@/lib/sync/bundle";
import { isApiKeyRevealEnabled, maskStoredApiKey } from "@/lib/apiKeyExposure";
import { getSyncTokenFromRequest, markSyncTokenUsed, validateSyncToken } from "@/lib/sync/tokens";
import { createErrorResponse, createErrorResponseFromUnknown } from "@/lib/api/errorResponse";

function matchesEtag(request: Request, version: string) {
  const ifNoneMatch = request.headers.get("if-none-match");
  if (!ifNoneMatch) return false;
  const candidates = ifNoneMatch
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  return candidates.some((candidate) => candidate === version || candidate === `"${version}"`);
}

function responseHeaders(version: string) {
  return {
    etag: `"${version}"`,
    "x-config-version": version,
    "cache-control": "private, no-store",
  };
}

export async function GET(request: Request) {
  try {
    const rawToken = getSyncTokenFromRequest(request);
    const syncToken = await validateSyncToken(rawToken);
    if (!syncToken) {
      return createErrorResponse({
        status: 401,
        message: "Invalid sync token",
      });
    }

    const envelope = await buildConfigSyncEnvelope();
    const { version } = envelope;
    // Same switch as /api/keys/{id}/reveal: no plaintext OmniRoute API keys while reveal is off.
    const bundle = isApiKeyRevealEnabled()
      ? envelope.bundle
      : redactApiKeySecretsForExport(envelope.bundle, maskStoredApiKey);
    await markSyncTokenUsed(syncToken);

    if (matchesEtag(request, version)) {
      return new Response(null, {
        status: 304,
        headers: responseHeaders(version),
      });
    }

    return Response.json(
      {
        version,
        bundle,
      },
      {
        headers: responseHeaders(version),
      }
    );
  } catch (error) {
    return createErrorResponseFromUnknown(error, "Failed to build sync bundle");
  }
}
