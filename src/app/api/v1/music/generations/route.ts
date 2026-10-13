import { handleMusicGeneration } from "@omniroute/open-sse/handlers/musicGeneration.ts";
import { withInjectionGuard } from "@/middleware/promptInjectionGuard";
import {
  getProviderCredentialsWithQuotaPreflight,
  clearRecoveredProviderState,
} from "@/sse/services/auth";
import { parseMusicModel, getMusicProvider } from "@omniroute/open-sse/config/musicRegistry.ts";
import { errorResponse } from "@omniroute/open-sse/utils/error.ts";
import { HTTP_STATUS } from "@omniroute/open-sse/config/constants.ts";
import * as log from "@/sse/utils/logger";
import { enforceApiKeyPolicy } from "@/shared/utils/apiKeyPolicy";
import {
  isKeyScopeBlockedCredentials,
  keyScopeBlockedResponse,
  resolveKeyConnectionScope,
  withoutKeyScopeBlocked,
} from "@/sse/services/keyConnectionScope";
import {
  isAllRateLimitedCredentials,
  rateLimitedProviderResponse,
} from "@/app/api/v1/_shared/rateLimit";
import {
  failedMediaGenerationResponse,
  mediaGenerationOptionsResponse,
  promptRequiredResponse,
  readMediaGenerationBody,
  successfulMediaGenerationResponse,
} from "@/app/api/v1/_shared/mediaGenerationRoute";
import { getSpecialtyModelsResponse } from "@/app/api/v1/_shared/specialtyCatalog";

export const dynamic = "force-dynamic";

/**
 * Handle CORS preflight
 */
export async function OPTIONS() {
  return mediaGenerationOptionsResponse();
}

/**
 * GET /v1/music/generations — list available music models
 */
export async function GET(request?: Request) {
  return getSpecialtyModelsResponse(
    request,
    "/v1/music/generations",
    (model) => model.type === "music"
  );
}

/**
 * #6928: best-effort per-connection base-URL override lookup for local no-auth
 * media providers (ComfyUI). Returns null instead of failing when no connection
 * exists — local providers must keep working with zero configuration.
 */
async function resolveLocalOverrideCredentials(
  provider: string,
  allowedConnections: string[] | null
) {
  // GHSA-3w2r: a connection outside the caller key's scope is never used for
  // the override; the provider then runs on its zero-configuration default.
  const localCredentials = withoutKeyScopeBlocked(
    await getProviderCredentialsWithQuotaPreflight(provider, null, allowedConnections)
  );
  return localCredentials && !isAllRateLimitedCredentials(localCredentials)
    ? localCredentials
    : null;
}

/**
 * POST /v1/music/generations — generate music
 */
async function postHandler(request, context) {
  const parsed = await readMediaGenerationBody(request, log, "MUSIC");
  if (parsed.state === "invalid") {
    return parsed.response;
  }
  const body = parsed.body;
  const startTime = Date.now();

  const promptError = promptRequiredResponse(body);
  if (promptError) return promptError;

  // Enforce API key policies (model restrictions + budget limits)
  const policy = await enforceApiKeyPolicy(request, body.model);
  if (policy.rejection) return policy.rejection;
  // GHSA-3w2r: credential selection stays inside the key's connection scope,
  // the same scope chat applies.
  const scope = await resolveKeyConnectionScope(policy.apiKeyInfo);
  if (scope.rejection) return scope.rejection;

  // Parse model to get provider
  const { provider } = parseMusicModel(body.model);
  if (!provider) {
    return errorResponse(
      HTTP_STATUS.BAD_REQUEST,
      `Invalid music model: ${body.model}. Use format: provider/model`
    );
  }

  // Check provider config for auth bypass
  const providerConfig = getMusicProvider(provider);

  // Get credentials — skip for local providers (authType: "none")
  let credentials = null;
  if (providerConfig && providerConfig.authType !== "none") {
    credentials = await getProviderCredentialsWithQuotaPreflight(
      provider,
      null,
      scope.allowedConnections
    );
    if (!credentials) {
      return errorResponse(
        HTTP_STATUS.BAD_REQUEST,
        `No credentials for music provider: ${provider}`
      );
    }
    if (isKeyScopeBlockedCredentials(credentials)) {
      return keyScopeBlockedResponse(provider, credentials);
    }
    if (isAllRateLimitedCredentials(credentials)) {
      return rateLimitedProviderResponse(provider, credentials);
    }
  } else if (providerConfig?.authType === "none") {
    credentials = await resolveLocalOverrideCredentials(provider, scope.allowedConnections);
  }

  const result = await handleMusicGeneration({ body, credentials, log });

  if (result.success) {
    await clearRecoveredProviderState(credentials);
    return successfulMediaGenerationResponse({
      result,
      billingMode: "audio",
      provider,
      model: body.model,
      startTime,
      duration: body.duration,
    });
  }

  return failedMediaGenerationResponse(result, "Music generation provider error");
}

export const POST = withInjectionGuard(postHandler);
