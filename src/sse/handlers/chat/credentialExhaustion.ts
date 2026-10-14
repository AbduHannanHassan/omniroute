import { passiveResponse } from "@omniroute/open-sse/services/tokenRefresh/passiveCodex.ts";
import {
  findShadowedCompatibleNode,
  handleNoCredentials,
  withSelectedConnectionHeader,
} from "../chatHelpers";
import {
  recordQuotaParkedSkip,
  type ChatRejectionScope,
  type QuotaParkedSkip,
} from "../quotaParkedSkipUsage";

/** Final client response only; per-account fallback keeps its original status. */
export async function credentialExhaustionResponse(
  skip: QuotaParkedSkip,
  excludedConnectionIds: ReadonlySet<string>,
  resolved: object,
  isCombo: boolean,
  correlationId: string | null,
  lastPassiveMiss: boolean,
  rejectionScope: ChatRejectionScope
) {
  const { credentials, lastError, lastStatus, provider, model } = skip;
  const candidateAliases =
    "candidateAliases" in resolved && Array.isArray(resolved.candidateAliases)
      ? resolved.candidateAliases.filter(
          (candidate): candidate is string => typeof candidate === "string"
        )
      : undefined;
  // #11943: only when no connection was ever tried — a built-in provider
  // whose id/alias is also a configured compatible-node prefix means the
  // operator's node was shadowed by the reserved-prefix guard, not broken.
  const shadowedNode =
    excludedConnectionIds.size === 0 ? await findShadowedCompatibleNode(provider) : null;
  const response = lastPassiveMiss
    ? passiveResponse(503)
    : handleNoCredentials(
        credentials,
        excludedConnectionIds.size > 0 ? Array.from(excludedConnectionIds)[0] : null,
        provider,
        model,
        lastError,
        lastStatus,
        candidateAliases,
        isCombo,
        shadowedNode,
        correlationId
      );
  // #14360: log the synthesized quota-parking refusal (never for combo targets).
  await recordQuotaParkedSkip(skip, rejectionScope);
  const lastFailedConnectionId =
    excludedConnectionIds.size > 0
      ? Array.from(excludedConnectionIds)[excludedConnectionIds.size - 1]
      : null;
  return withSelectedConnectionHeader(response, lastFailedConnectionId);
}
