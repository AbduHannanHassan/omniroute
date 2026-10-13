import { isFlatRateProvider } from "./flatRateProviders";
import { toNumber } from "@/shared/utils/numeric";

type PricingByProvider = Record<string, Record<string, Record<string, unknown>>>;
type ComputeCostFromPricing = (
  pricing: Record<string, unknown> | null | undefined,
  tokens: Record<string, number | undefined> | null | undefined,
  options?: Record<string, unknown>
) => number;
type GetCodexFastCostMultiplier = (
  provider: string | null | undefined,
  model: string | null | undefined,
  serviceTier: string | null | undefined
) => number;

export function toStringValue(value: unknown, fallback = ""): string {
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}

export function roundCost(value: number): number {
  return Math.round(value * 1_000_000) / 1_000_000;
}

export function normalizeServiceTier(value: unknown): "standard" | "priority" | "flex" {
  const tier = typeof value === "string" ? value.trim().toLowerCase() : "";
  if (tier === "priority" || tier === "fast") return "priority";
  if (tier === "flex") return "flex";
  return "standard";
}

export function getServiceTierLabelId(serviceTier: string): string {
  return normalizeServiceTier(serviceTier);
}

function findKeyInsensitive(obj: Record<string, any> | undefined | null, key: string): any {
  if (!obj || !key) return undefined;
  return obj[key.toLowerCase()];
}

function uniqueValues(values: Array<string | null | undefined>): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values) {
    const normalized = typeof value === "string" ? value.trim().toLowerCase() : "";
    if (!normalized || seen.has(normalized)) continue;
    seen.add(normalized);
    result.push(normalized);
  }
  return result;
}

function stripCodexEffortSuffix(model: string): string {
  return model.replace(/-(?:xhigh|high|medium|low|none)$/i, "");
}

function getPricingModelCandidates(
  model: string,
  normalizeModelName: (model: string) => string
): string[] {
  const normalizedModel = normalizeModelName(model);
  const lowerModel = model.toLowerCase();
  const lowerNormalized = normalizedModel.toLowerCase();
  const hyphenModel = lowerModel.replace(/\./g, "-");
  const hyphenNormalized = lowerNormalized.replace(/\./g, "-");
  const effortBaseModel = stripCodexEffortSuffix(lowerNormalized);

  return uniqueValues([
    lowerModel,
    lowerNormalized,
    hyphenModel,
    hyphenNormalized,
    effortBaseModel,
    effortBaseModel.replace(/\./g, "-"),
    lowerNormalized === "codex-auto-review" ? "gpt-5.5" : null,
  ]);
}

function resolveModelPricing(
  pricingByProvider: PricingByProvider,
  providerAliasMap: Record<string, string>,
  providerRaw: string,
  model: string,
  normalizeModelName: (model: string) => string
): Record<string, unknown> | null {
  const pLower = (providerRaw || "").toLowerCase();

  let providerPricing = findKeyInsensitive(pricingByProvider, pLower);

  if (!providerPricing) {
    // providerAliasMap maps ID -> ALIAS. So if pLower is "codex", alias is "cx".
    const alias = providerAliasMap[pLower];
    if (alias) {
      providerPricing = findKeyInsensitive(pricingByProvider, alias);
    }
  }

  if (!providerPricing) {
    // In case pLower was ALIAS and we want to try the ID (reverse search values)
    for (const [id, alias] of Object.entries(providerAliasMap)) {
      if (alias.toLowerCase() === pLower) {
        providerPricing = findKeyInsensitive(pricingByProvider, id);
        if (providerPricing) break;
      }
    }
  }

  if (!providerPricing) {
    const np = pLower.replace(/-cn$/, "");
    if (np && np !== pLower) {
      providerPricing = findKeyInsensitive(pricingByProvider, np);
    }
  }

  // Hardcoded known fallbacks
  if (!providerPricing) {
    if (pLower === "antigravity") providerPricing = findKeyInsensitive(pricingByProvider, "ag");
  }

  const modelCandidates = getPricingModelCandidates(model, normalizeModelName);

  const tryFind = (prov: Record<string, unknown> | null | undefined) => {
    if (!prov || typeof prov !== "object") return null;
    for (const candidate of modelCandidates) {
      const pricing = findKeyInsensitive(prov as Record<string, unknown>, candidate);
      if (pricing) return pricing;
    }
    return null;
  };

  let pricing = providerPricing ? tryFind(providerPricing) : null;

  if (!pricing) {
    // Global fallback: search all providers for this exact model (helps with aliases)
    for (const prov of Object.values(pricingByProvider)) {
      const found = tryFind(prov as Record<string, unknown>);
      if (found) {
        pricing = found;
        break;
      }
    }
  }

  // Short-circuit :free models to $0 (they have no pricing entry → should not fall back to arbitrary rates)
  if (!pricing && model.endsWith(":free")) {
    return null;
  }

  // Last resort fallback for historical usage (e.g. "gpt-4" missing, matches "gpt-4.1")
  if (!pricing && providerPricing && typeof providerPricing === "object") {
    for (const [key, val] of Object.entries(providerPricing as Record<string, unknown>)) {
      const lm = model.toLowerCase();
      if (key.includes(lm) || lm.includes(key)) {
        pricing = val;
        break;
      }
    }
  }

  return pricing as Record<string, unknown> | null;
}

export function computeUsageRowCost(
  row: Record<string, unknown>,
  pricingByProvider: PricingByProvider,
  providerAliasMap: Record<string, string>,
  normalizeModelName: (model: string) => string,
  computeCostFromPricing: ComputeCostFromPricing,
  flatRateAsZero = true
): number {
  const provider = toStringValue(row.provider);
  const model = toStringValue(row.model);
  if (!provider || !model) return 0;
  const serviceTier = normalizeServiceTier(row.serviceTier ?? row.service_tier);
  const isAggregated = toNumber(row.isAggregated ?? row.is_aggregated) > 0;
  const storedCost = toNumber(row.storedCost ?? row.stored_cost);

  if (isAggregated) {
    if (flatRateAsZero && isFlatRateProvider(provider)) return 0;
    // New rollups preserve the exact API-equivalent value calculated before
    // cache/reasoning token dimensions are discarded. Legacy zero-cost rows
    // fall through to the best available input/output-token estimate.
    if (storedCost > 0) return storedCost;
  }

  const pricing = resolveModelPricing(
    pricingByProvider,
    providerAliasMap,
    provider,
    model,
    normalizeModelName
  );
  if (!pricing) return 0;

  return computeCostFromPricing(
    pricing,
    {
      input: toNumber(row.promptTokens),
      output: toNumber(row.completionTokens),
      cacheRead: toNumber(row.cacheReadTokens),
      cacheCreation: toNumber(row.cacheCreationTokens),
      reasoning: toNumber(row.reasoningTokens),
    },
    {
      provider,
      model,
      serviceTier,
      flatRateAsZero,
    }
  );
}

export function computeUsageRowStandardCost(
  row: Record<string, unknown>,
  pricingByProvider: PricingByProvider,
  providerAliasMap: Record<string, string>,
  normalizeModelName: (model: string) => string,
  computeCostFromPricing: ComputeCostFromPricing,
  flatRateAsZero = true
): number {
  return computeUsageRowCost(
    {
      ...row,
      serviceTier: "standard",
      service_tier: "standard",
      storedCost: 0,
      stored_cost: 0,
      isAggregated: 0,
      is_aggregated: 0,
    },
    pricingByProvider,
    providerAliasMap,
    normalizeModelName,
    computeCostFromPricing,
    flatRateAsZero
  );
}

export function computeUsageSavingsTokens(
  row: Record<string, unknown>,
  serviceTier: string,
  getCodexFastCostMultiplier: GetCodexFastCostMultiplier
): number {
  const provider = toStringValue(row.provider);
  const model = toStringValue(row.model);
  const totalTokens = toNumber(row.totalTokens);
  if (!provider || !model || totalTokens <= 0) return 0;

  const standardMultiplier = getCodexFastCostMultiplier(provider, model, "standard");
  if (standardMultiplier <= 0) return 0;

  const actualMultiplier = getCodexFastCostMultiplier(provider, model, serviceTier);
  const savingsRatio = Math.max(0, (standardMultiplier - actualMultiplier) / standardMultiplier);
  return totalTokens * savingsRatio;
}
