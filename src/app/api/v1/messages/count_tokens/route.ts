import { CORS_HEADERS } from "@/shared/utils/cors";
import { v1CountTokensSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import { countTextTokens, type TokenizerContext } from "@/shared/utils/tiktokenCounter";
import { isRuntimeProviderRetirementError } from "@/shared/constants/providerRetirement";
import { getExecutor } from "@omniroute/open-sse/executors/index.ts";
import { buildErrorBody } from "@omniroute/open-sse/utils/error.ts";
import { runWithProxyContext } from "@omniroute/open-sse/utils/proxyFetch.ts";
import { isCommonChatGptWebRetirementError } from "@/shared/constants/chatgptWebRetirement";
import { getModelInfo } from "@/sse/services/model";
import { getProviderCredentials } from "@/sse/services/auth";
import { getApiKeyMetadata } from "@/lib/db/apiKeys";
import { constrainConnectionsToQuota, resolveQuotaKeyScope } from "@/lib/quota/quotaKey";
import {
  resolvePolicyApiKey,
  validateApiKeyRoutingTarget,
  type ApiKeyMetadata,
} from "@/shared/utils/apiKeyPolicy";
import { intersectAllowedConnectionIds } from "@/sse/handlers/chat/connectionConstraints";
import { createVisibleResolvedModelGate } from "@/sse/handlers/chat/resolvedModelPolicy";
import { isCredentialDiagnosticSentinel } from "@/sse/services/credentialSentinel";
import { safeResolveProxy } from "@/sse/handlers/chatHelpers";
import * as log from "@/sse/utils/logger";
import { isInputTokenCountPlausible } from "@omniroute/open-sse/utils/usageTracking.ts";

/**
 * Handle CORS preflight
 */
export async function OPTIONS() {
  return new Response(null, { headers: CORS_HEADERS });
}

/**
 * POST /v1/messages/count_tokens - Hybrid token count response.
 * Uses real provider-side count when supported, falling back to estimation.
 */
export async function POST(request) {
  let rawBody;
  try {
    rawBody = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  }

  const validation = validateBody(v1CountTokensSchema, rawBody);
  if (isValidationFailure(validation)) {
    return new Response(JSON.stringify({ error: validation.error }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  }
  const body = validation.data;

  const tokenizerContext: TokenizerContext = {
    model: typeof body.model === "string" ? body.model : undefined,
  };
  const estimated = buildEstimatedCountResponse(body, tokenizerContext);
  const requestedModel = typeof body.model === "string" ? body.model : "";
  if (!requestedModel) {
    return estimated;
  }

  try {
    // GHSA-3w2r: the provider-side count is an upstream call on behalf of the
    // caller key, so it must stay inside that key's routing policy exactly like
    // chat dispatch: a model the key may not use gets chat's 403, and the
    // credential pool is bounded by the key's allowed connections.
    const keyScope = await resolveCountTokensKeyScope(request, requestedModel);
    if (keyScope.rejection) return keyScope.rejection;
    if (keyScope.localOnly) return estimated;

    const modelInfo = await getModelInfo(requestedModel);
    if (!modelInfo?.provider || !modelInfo?.model) {
      return estimated;
    }

    const resolvedModelRejection = await createVisibleResolvedModelGate({
      apiKeyInfo: keyScope.apiKeyInfo,
      apiKey: keyScope.apiKey,
      contextModel: null,
      comboGrantsTargets: false,
      provider: modelInfo.provider,
      model: modelInfo.model,
      modelStr: requestedModel,
    })([`${modelInfo.provider}/${modelInfo.model}`]);
    if (resolvedModelRejection) return resolvedModelRejection;

    const allowedConnections = await resolveCountTokensAllowedConnections(keyScope.apiKeyInfo);
    if (Array.isArray(allowedConnections) && allowedConnections.length === 0) {
      return estimated;
    }

    const credentials = await getProviderCredentials(
      modelInfo.provider,
      null,
      allowedConnections,
      modelInfo.model
    );
    if (!credentials || isCredentialDiagnosticSentinel(credentials)) {
      return estimated;
    }

    const executor = await getExecutor(modelInfo.provider);
    // The provider-side count is a real upstream call — it must honor the
    // connection's proxy assignment exactly like chat execution does.
    const proxyInfo = await safeResolveProxy(
      credentials.connectionId,
      undefined,
      modelInfo.provider
    );
    const counted = await runWithProxyContext(proxyInfo?.proxy || null, () =>
      executor?.countTokens?.({
        model: modelInfo.model,
        body,
        credentials,
        log,
      })
    );

    if (
      !counted ||
      !Number.isFinite(counted.input_tokens) ||
      !isInputTokenCountPlausible(counted.input_tokens, body) ||
      // A provider count of 0 for a non-empty request is bogus (#15763).
      (counted.input_tokens === 0 && estimateInputTokens(body, tokenizerContext) > 0)
    ) {
      return estimated;
    }

    return new Response(
      JSON.stringify({
        input_tokens: counted.input_tokens,
        model: modelInfo.model,
        provider: modelInfo.provider,
        source: counted.source || "provider",
      }),
      {
        headers: { "Content-Type": "application/json", ...CORS_HEADERS },
      }
    );
  } catch (error) {
    if (isRuntimeProviderRetirementError(error) || isCommonChatGptWebRetirementError(error)) {
      return new Response(
        JSON.stringify(
          buildErrorBody(error.status, error.message, null, {
            type: "provider_error",
            code: error.code,
          })
        ),
        {
          status: error.status,
          headers: { "Content-Type": "application/json", ...CORS_HEADERS },
        }
      );
    }
    log.debug(
      "COUNT_TOKENS",
      `Falling back to estimate for ${requestedModel}: ${error instanceof Error ? error.message : String(error)}`
    );
    return estimated;
  }
}

type CountTokensKeyScope = {
  apiKey: string | null;
  apiKeyInfo: ApiKeyMetadata | null;
  /** Set when the key's routing policy rejects the requested model (same as chat). */
  rejection: Response | null;
  /** The key policy could not be read: answer locally, never call upstream. */
  localOnly: boolean;
};

/**
 * Resolve the caller key and its model/combo/quota authorization for the
 * requested model, the way chat does at entry — without charging the key's
 * request/budget counters, since a token count is not a billable request.
 */
async function resolveCountTokensKeyScope(
  request: Request,
  requestedModel: string
): Promise<CountTokensKeyScope> {
  const apiKey = await resolvePolicyApiKey(request);
  if (!apiKey) return { apiKey: null, apiKeyInfo: null, rejection: null, localOnly: false };

  let apiKeyInfo: ApiKeyMetadata | null;
  try {
    apiKeyInfo = (await getApiKeyMetadata(apiKey)) as ApiKeyMetadata | null;
  } catch (error) {
    log.warn(
      "COUNT_TOKENS",
      `API key policy unavailable, counting locally: ${error instanceof Error ? error.name : "error"}`
    );
    return { apiKey, apiKeyInfo: null, rejection: null, localOnly: true };
  }
  if (!apiKeyInfo) return { apiKey, apiKeyInfo: null, rejection: null, localOnly: false };

  const rejection = await validateApiKeyRoutingTarget(request, apiKey, apiKeyInfo, requestedModel);
  return { apiKey, apiKeyInfo, rejection, localOnly: false };
}

/** The key's connection scope (plus its quota pools), as chat dispatch applies it. */
async function resolveCountTokensAllowedConnections(
  apiKeyInfo: ApiKeyMetadata | null
): Promise<string[] | null> {
  const allowed = intersectAllowedConnectionIds(apiKeyInfo?.allowedConnections ?? null, null);
  if (!apiKeyInfo?.allowedQuotas?.length) return allowed;
  const quotaScope = await resolveQuotaKeyScope(apiKeyInfo.allowedQuotas);
  return constrainConnectionsToQuota(allowed ?? [], quotaScope.connectionIds);
}

function safeStringify(value) {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value) ?? "";
  } catch {
    return "";
  }
}

// Estimate tokens for a single Anthropic content block. Real agentic
// conversations carry most of their tokens in `tool_use` inputs, `tool_result`
// content, and `thinking` blocks — counting only `text` (as before) reported
// near-zero for those messages and silently broke Claude Code's auto-compaction
// (#2337). Image / redacted_thinking blocks are not text-estimable and count 0.
function estimateContentBlockTokens(part, tokenizerContext: TokenizerContext) {
  if (!part || typeof part !== "object") return 0;
  let tokens = 0;
  switch (part.type) {
    case "text":
      if (typeof part.text === "string") tokens += countTextTokens(part.text, tokenizerContext);
      break;
    case "tool_use":
      if (typeof part.name === "string") tokens += countTextTokens(part.name, tokenizerContext);
      if (part.input !== undefined)
        tokens += countTextTokens(safeStringify(part.input), tokenizerContext);
      break;
    case "tool_result":
      tokens += estimateToolResultTokens(part.content, tokenizerContext);
      break;
    case "thinking":
      if (typeof part.thinking === "string")
        tokens += countTextTokens(part.thinking, tokenizerContext);
      break;
    default:
      break;
  }
  return tokens;
}

// A `tool_result` content can be a plain string or an array of nested blocks
// (text / image). Count string content and nested text blocks.
function estimateToolResultTokens(content, tokenizerContext: TokenizerContext) {
  if (typeof content === "string") return countTextTokens(content, tokenizerContext);
  if (Array.isArray(content)) {
    let tokens = 0;
    for (const block of content) {
      if (block?.type === "text" && typeof block.text === "string") {
        tokens += countTextTokens(block.text, tokenizerContext);
      }
    }
    return tokens;
  }
  return 0;
}

function estimateInputTokens(body, tokenizerContext: TokenizerContext = {}): number {
  const messages = Array.isArray(body?.messages) ? body.messages : [];
  let inputTokens = 0;

  for (const msg of messages) {
    if (typeof msg?.content === "string") {
      inputTokens += countTextTokens(msg.content, tokenizerContext);
      continue;
    }

    if (Array.isArray(msg?.content)) {
      for (const part of msg.content) {
        inputTokens += estimateContentBlockTokens(part, tokenizerContext);
      }
    }
  }

  if (typeof body?.system === "string") {
    inputTokens += countTextTokens(body.system, tokenizerContext);
  } else if (Array.isArray(body?.system)) {
    for (const block of body.system) {
      if (block?.type === "text" && typeof block.text === "string") {
        inputTokens += countTextTokens(block.text, tokenizerContext);
      }
    }
  }

  return inputTokens;
}

function buildEstimatedCountResponse(body, tokenizerContext: TokenizerContext = {}) {
  const inputTokens = estimateInputTokens(body, tokenizerContext);
  return new Response(
    JSON.stringify({
      input_tokens: inputTokens,
      source: "local",
    }),
    {
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    }
  );
}
