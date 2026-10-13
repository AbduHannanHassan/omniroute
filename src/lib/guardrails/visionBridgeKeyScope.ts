/**
 * GHSA-3w2r-vvhm-8h85 — keep the Vision Bridge inside the caller API key's
 * routing policy.
 *
 * The bridge picks a vision model from every usable credential on the instance
 * and describes the image through a self-loop authenticated with the internal
 * bearer, so without this scope a key restricted by allowedModels /
 * blockedModels / allowedConnections / allowedQuotas could have its image sent
 * to a model or connection it may not use. The scope turns the key policy into
 * a credential check the vision router already understands: a candidate is
 * usable only when the key admits the model AND (for connection-scoped keys)
 * at least one of its usable connections is in the key's allow-list.
 *
 * Unrestricted keys (and keyless/local callers) get no scope, so their
 * selection is exactly what it was before.
 */
import { hasApiKeyModelRestrictions } from "@/shared/utils/resolvedModelAccess";
import { getUsableConnectionsForModel, type UsableConnectionRef } from "./visionBridgeCredentials";

type CredentialCheck = (model: string) => Promise<boolean | null>;

export interface VisionBridgeKeyInfo {
  id?: unknown;
  modelAccessMode?: string | null;
  allowedModels?: string[] | null;
  blockedModels?: string[] | null;
  disableNonPublicModels?: boolean | null;
  allowedConnections?: unknown;
  allowedQuotas?: unknown;
}

/** Injectable seams (node:test has no ESM module mocking). */
export interface VisionBridgeKeyScopeDeps {
  isModelAllowed?: (apiKeyInfo: VisionBridgeKeyInfo, model: string) => Promise<boolean>;
  getUsableConnections?: (model: string) => Promise<UsableConnectionRef[] | null>;
}

export interface VisionBridgeKeyScope {
  /** Router selection-cache partition, so one key's pick never serves another. */
  cacheScope: string;
  /** The key's connection allow-list, or null when it is not connection-scoped. */
  allowedConnectionIds: string[] | null;
  /** Credential check narrowed to what the key may use. */
  check: CredentialCheck;
}

function stringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((entry): entry is string => typeof entry === "string" && entry.length > 0);
}

/**
 * Same allow/block evaluation chat uses (`isModelAllowedForKey`). It is keyed
 * by the raw key, which the guardrail context does not carry, so the key is
 * looked up by id. Any failure denies — the scope only ever narrows.
 */
async function defaultIsModelAllowed(apiKeyInfo: VisionBridgeKeyInfo, model: string) {
  if (typeof apiKeyInfo.id !== "string" || apiKeyInfo.id.length === 0) return false;
  try {
    const { getApiKeyById, isModelAllowedForKey } = await import("@/lib/db/apiKeys");
    const row = await getApiKeyById(apiKeyInfo.id);
    const key = typeof row?.key === "string" ? row.key : null;
    return key ? await isModelAllowedForKey(key, model) : false;
  } catch {
    return false;
  }
}

/**
 * Build the scope for the caller key, or `null` when the key places no routing
 * restriction the bridge could widen.
 */
export function resolveVisionBridgeKeyScope(
  apiKeyInfo: VisionBridgeKeyInfo | null | undefined,
  baseCheck: CredentialCheck,
  deps: VisionBridgeKeyScopeDeps = {}
): VisionBridgeKeyScope | null {
  if (!apiKeyInfo) return null;
  const allowedConnectionIds = stringList(apiKeyInfo.allowedConnections);
  const quotaExclusive = stringList(apiKeyInfo.allowedQuotas).length > 0;
  const modelRestricted = hasApiKeyModelRestrictions(apiKeyInfo);
  if (!quotaExclusive && !modelRestricted && allowedConnectionIds.length === 0) return null;

  const isModelAllowed = deps.isModelAllowed ?? defaultIsModelAllowed;
  const getUsableConnections = deps.getUsableConnections ?? getUsableConnectionsForModel;
  const id = typeof apiKeyInfo.id === "string" && apiKeyInfo.id ? apiKeyInfo.id : "unknown";

  const check: CredentialCheck = async (model) => {
    // Quota-exclusive keys may only use their quotaShared-* pools; a bridge
    // vision model is never one of them.
    if (quotaExclusive) return false;
    if (modelRestricted && !(await isModelAllowed(apiKeyInfo, model))) return false;
    if (allowedConnectionIds.length > 0) {
      // Indeterminate connection data fails CLOSED here: the scope must never widen.
      const usable = await getUsableConnections(model);
      return Array.isArray(usable) && usable.some((conn) => allowedConnectionIds.includes(conn.id));
    }
    return baseCheck(model);
  };

  return {
    cacheScope: `key:${id}`,
    allowedConnectionIds: allowedConnectionIds.length > 0 ? allowedConnectionIds : null,
    check,
  };
}
