/** Pure, opt-in pace scoring for quota-weighted; eligibility remains in the orderer. */
import { clamp01 } from "../../utils/number.ts";
import { isRecord } from "./comboData.ts";
import {
  getQuotaWindowEntries,
  getResetAwareRemainingPercent,
  parseResetTimeMs,
  resolveQuotaWindowByName,
  type resolveResetAwareConfig,
} from "./quotaScoring.ts";
import { RESET_WINDOW_NAMES } from "./types.ts";

const UNKNOWN_RESET_HOURS = 168;
const HOUR_MS = 3_600_000;

type PaceWindow = { remaining: number; resetMs: number };

export function resolveQuotaWeightedScoring(
  configSource: Record<string, unknown> | null | undefined
): "leftover" | "pace" {
  return configSource?.quotaWeightedScoring === "pace" ? "pace" : "leftover";
}

function resolvePaceWindows(quota: Record<string, unknown>): PaceWindow[] {
  const windows = RESET_WINDOW_NAMES.map((name) => resolveQuotaWindowByName(quota, name)).filter(
    (window) => window !== null
  );
  if (windows.length === 0) {
    for (const { window } of getQuotaWindowEntries(quota)) windows.push(window);
  }
  // Match resolveWindowRemaining's finite-number coercion and missing-percent fallback.
  const overallPercentUsed = Number(quota.percentUsed);
  const fallback = Number.isFinite(overallPercentUsed) ? clamp01(overallPercentUsed) : 0.5;
  return windows.map((window) => ({
    remaining: clamp01(1 - (window.percentUsed ?? fallback)),
    resetMs: parseResetTimeMs(window.resetAt),
  }));
}

/**
 * Spend the outer (latest-resetting) window's leftover per hour, with inner-window
 * exhaustion damping. Missing reset telemetry uses a conservative seven-day horizon;
 * elapsed or imminent resets floor to one hour so weights stay finite and bounded.
 */
export function scoreQuotaPace(
  quota: unknown,
  config: ReturnType<typeof resolveResetAwareConfig>,
  nowMs: number
): { score: number } {
  if (!isRecord(quota)) return { score: 1 / UNKNOWN_RESET_HOURS };
  if (quota.limitReached === true) return { score: 0 };

  const windows = resolvePaceWindows(quota);
  let outer: PaceWindow | null = null;
  for (const window of windows) {
    if (Number.isFinite(window.resetMs) && (outer === null || window.resetMs > outer.resetMs)) {
      outer = window;
    }
  }
  const remaining = outer
    ? outer.remaining
    : windows.length > 0
      ? Math.min(...windows.map((window) => window.remaining))
      : getResetAwareRemainingPercent(quota) / 100;
  const hours = outer ? Math.max(1, (outer.resetMs - nowMs) / HOUR_MS) : UNKNOWN_RESET_HOURS;
  const minInner = Math.min(
    1,
    ...windows.filter((window) => window !== outer).map((window) => window.remaining)
  );
  let score = remaining / hours;
  if (config.exhaustionGuard > 0 && minInner < config.exhaustionGuard) {
    score *= Math.max(0.05, minInner / config.exhaustionGuard);
  }
  return { score };
}
