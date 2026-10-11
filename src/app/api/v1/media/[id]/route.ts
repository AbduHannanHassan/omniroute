import { CORS_HEADERS, handleCorsOptions } from "@/shared/utils/cors";
import { NextResponse } from "next/server";
import { getApiKeyRequestScope } from "@/app/api/v1/_helpers/apiKeyScope";
import {
  ANON_OWNER,
  mediaMimeType,
  mediaOwnerTag,
  ownerTagForApiKey,
  readMediaFile,
} from "@omniroute/open-sse/handlers/videoGeneration/mediaStore.ts";

export async function OPTIONS() {
  return handleCorsOptions();
}

/**
 * Serve generated media stored by the video/audio job pipeline.
 *
 * Exists so provider results that are auth-gated upstream (OpenRouter's
 * `/videos/{id}/content`) can be handed back as a URL on this gateway. Without
 * it the caller receives either an unfetchable upstream URL or a base64 blob,
 * and the response shape would vary by provider — breaking combo failover, where
 * only some targets can be serialized as a plain URL.
 *
 * The id is validated against the exact pattern mediaStore generates, so an id
 * taken from the URL cannot escape the media directory.
 *
 * Media is scoped to the key that generated it, mirroring the files API. The owner
 * is carried in the id as a digest rather than looked up in a table: media ids are
 * stateless by design, so there is nothing to query. A mismatch returns 404 rather
 * than 403 so the route does not confirm that an unowned id exists.
 */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const scope = await getApiKeyRequestScope(request);
  if (scope.rejection) return scope.rejection;

  const { id } = await params;
  const ownerTag = mediaOwnerTag(id);
  const owned =
    ownerTag === ANON_OWNER ||
    scope.isSessionAuth ||
    ownerTag === ownerTagForApiKey(scope.apiKeyId);

  const content = owned ? readMediaFile(id) : null;
  if (!content) {
    return NextResponse.json(
      { error: { message: "Media not found", type: "invalid_request_error" } },
      { status: 404, headers: CORS_HEADERS }
    );
  }

  return new Response(new Uint8Array(content), {
    headers: {
      ...CORS_HEADERS,
      "Content-Type": mediaMimeType(id),
      "Content-Length": String(content.length),
      // inline, not attachment: these URLs back a `url` field in a generation
      // response, so a client may render them directly rather than download.
      "Content-Disposition": `inline; filename="${id}"`,
    },
  });
}
