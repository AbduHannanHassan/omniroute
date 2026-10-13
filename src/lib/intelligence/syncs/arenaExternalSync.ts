/**
 * arenaExternalSync.ts — External Arena leaderboard sync.
 *
 * Fetches model intelligence data from external Arena leaderboards and stores
 * normalized task-fit scores in the `model_intelligence` DB table.
 * Source literal: "arena_elo_external"
 *
 * Schedule: daily at 03:00 UTC (cron: '0 3 * * *')
 * Expiry: 7 days after sync (consistent with arena_elo).
 */

import { BaseSync, BaseSyncConfig } from "../baseSync";
import { transformArenaExternal } from "../transforms/arenaExternal";
import { getLatestSyncedAt, applyArenaEloRefresh } from "@/lib/db/modelIntelligence";

/** Arena external API response entry shape. */
export interface ArenaExtEntry {
  model?: string;
  score?: number;
  elo?: number;
  votes?: number;
  rank?: number;
}

/** Arena external API response envelope. */
export interface ArenaExternalResponse {
  models: ArenaExtEntry[];
  fetchedAt: string;
}

/** Sync result shape. */
export interface SyncResult {
  success: boolean;
  modelCount: number;
  source: string;
  error?: string;
}

/** Arena external API base URL (env-overridable for tests/staging). */
const ARENA_EXTERNAL_API_BASE = process.env.ARENA_EXTERNAL_API_BASE || "https://api.arena.ai/v1/external";

/** Default sync schedule: daily at 03:00 UTC. */
const SCHEDULE_CRON = "0 3 * * *";

/** Default sync interval in ms (24h). */
const DEFAULT_INTERVAL_MS = 24 * 60 * 60 * 1000;

/** Backoff on failure: 6h (interval/4). */
const BACKOFF_MS = DEFAULT_INTERVAL_MS / 4;

/** Intelligence entry expiry: 7 days after sync. */
const EXPIRY_DAYS = 7;

const KV_NAMESPACE = "arena_elo_external";
const KV_LAST_FAILED_KEY = "lastFailedAt";
const KV_LAST_SYNC_KEY = "lastSyncAt";

let syncTimer: ReturnType<typeof setInterval> | null = null;
let lastSyncTime: string | null = null;
let lastSyncModelCount = 0;
let activeSyncIntervalMs = DEFAULT_INTERVAL_MS;
let firstSyncDone = false;
let syncInProgress = false;

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

async function readKvTimestamp(key: string): Promise<number | null> {
  try {
    const { getDbInstance } = await import("@/lib/db/core");
    const row = getDbInstance()
      .prepare(`SELECT value FROM key_value WHERE namespace = ? AND key = ? LIMIT 1`)
      .get(KV_NAMESPACE, key) as { value: string } | undefined;
    if (!row?.value) return null;
    const ts = Date.parse(row.value);
    return Number.isFinite(ts) ? ts : null;
  } catch {
    return null;
  }
}

async function writeKvTimestamp(key: string, ts: number): Promise<void> {
  try {
    const { getDbInstance } = await import("@/lib/db/core");
    getDbInstance()
      .prepare(`INSERT OR REPLACE INTO key_value (namespace, key, value) VALUES (?, ?, ?)`)
      .run(KV_NAMESPACE, key, new Date(ts).toISOString());
  } catch (err) {
    console.warn(`[ARENA_EXTERNAL_SYNC] Failed to persist ${key}: ${getErrorMessage(err)}`);
  }
}

async function clearKvTimestamp(key: string): Promise<void> {
  try {
    const { getDbInstance } = await import("@/lib/db/core");
    getDbInstance()
      .prepare(`DELETE FROM key_value WHERE namespace = ? AND key = ?`)
      .run(KV_NAMESPACE, key);
  } catch {
    // Swallow: a stuck KV row only costs one redundant fetch later.
  }
}

async function getEffectiveArenaExternalSyncEnabled(): Promise<boolean> {
  try {
    const { isFeatureFlagEnabled } = await import("@/shared/utils/featureFlags");
    return isFeatureFlagEnabled("MODEL_INTEL_ARENA_EXTERNAL_ENABLED");
  } catch (error) {
    console.warn(
      `[ARENA_EXTERNAL_SYNC] Failed to resolve MODEL_INTEL_ARENA_EXTERNAL_ENABLED feature flag: ${getErrorMessage(error)}`
    );
    return process.env.MODEL_INTEL_ARENA_EXTERNAL_ENABLED !== "false";
  }
}

const baseConfig: BaseSyncConfig = {
  source: "arena_elo_external",
  namespace: KV_NAMESPACE,
  backoffMs: BACKOFF_MS,
};

export class ArenaExternalSync extends BaseSync {
  constructor() {
    super(baseConfig);
  }

  /** Fetch external Arena leaderboard snapshot from API. */
  async fetch(): Promise<ArenaExternalResponse> {
    const response = await fetch(ARENA_EXTERNAL_API_BASE, {
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) {
      throw new Error(
        `Arena External API fetch failed [${response.status}]: ${response.statusText}`
      );
    }
    const text = await response.text();
    try {
      return JSON.parse(text) as ArenaExternalResponse;
    } catch {
      throw new Error(
        `Arena External API returned invalid JSON (${text.slice(0, 100)}...)`
      );
    }
  }

  /** Execute one sync cycle. */
  async sync(dryRun = false): Promise<SyncResult> {
    if (syncInProgress) {
      return {
        success: false,
        modelCount: 0,
        source: this.config.source,
        error: "Sync already in progress",
      };
    }
    syncInProgress = true;

    try {
      // Backup DB before first sync
      if (!firstSyncDone && !dryRun) {
        const { backupDbFile } = await import("@/lib/db/backup");
        backupDbFile("pre-arena-external-sync");
        firstSyncDone = true;
      }

      if (!dryRun) {
        // Freshness guard: skip if synced within interval
        const latest = await getLatestSyncedAt("arena_elo_external");
        if (latest) {
          const age = Date.now() - Date.parse(latest);
          if (Number.isFinite(age) && age >= 0 && age < activeSyncIntervalMs) {
            return {
              success: true,
              modelCount: lastSyncModelCount,
              source: this.config.source,
            };
          }
        }

        // Failure backoff
        const failedAt = await readKvTimestamp(KV_LAST_FAILED_KEY);
        if (failedAt !== null && Date.now() - failedAt < BACKOFF_MS) {
          return {
            success: false,
            modelCount: 0,
            source: this.config.source,
            error: "Skipping sync: recent failure within backoff window",
          };
        }
      }

      // Fetch FIRST — failed fetch must never mutate stored intelligence
      const data = await this.fetch();
      const entries = transformArenaExternal(data.models);

      if (!dryRun && entries.length > 0) {
        try {
          // Atomic replace for this source
          await applyArenaEloRefresh(entries, "arena_elo_external");
          await clearKvTimestamp(KV_LAST_FAILED_KEY);
        } catch (err) {
          const message = getErrorMessage(err);
          console.warn(`[ARENA_EXTERNAL_SYNC] Failed to apply intelligence refresh: ${message}`);
          this.recordFailure(err);
          return {
            success: false,
            modelCount: 0,
            source: this.config.source,
            error: message,
          };
        }
      }

      if (!dryRun) {
        lastSyncTime = new Date().toISOString();
        lastSyncModelCount = entries.length;
        await writeKvTimestamp(KV_LAST_SYNC_KEY, Date.now());
      }

      const countLabel = dryRun ? "would sync" : "synced";
      console.log(
        `[ARENA_EXTERNAL_SYNC] ${countLabel} ${entries.length} model intelligence entries from Arena External`
      );

      this.recordSuccess();
      return {
        success: true,
        modelCount: entries.length,
        source: this.config.source,
      };
    } catch (err) {
      const message = getErrorMessage(err);
      console.warn("[ARENA_EXTERNAL_SYNC] Sync failed:", message);
      if (!dryRun) {
        await writeKvTimestamp(KV_LAST_FAILED_KEY, Date.now());
      }
      this.recordFailure(err);
      return {
        success: false,
        modelCount: 0,
        source: this.config.source,
        error: message,
      };
    } finally {
      syncInProgress = false;
    }
  }

  /** Get current sync status. */
  async getStatus() {
    const enabled = await getEffectiveArenaExternalSyncEnabled();
    return {
      enabled,
      lastSync: lastSyncTime,
      lastSyncModelCount,
      nextSync:
        syncTimer && lastSyncTime
          ? new Date(new Date(lastSyncTime).getTime() + activeSyncIntervalMs).toISOString()
          : null,
      intervalMs: activeSyncIntervalMs,
      sources: ["arena_elo_external"],
      scheduleCron: SCHEDULE_CRON,
    };
  }
}

/** Start periodic sync (idempotent). */
export function startPeriodicSync(intervalMs?: number): void {
  if (syncTimer) return;

  const interval = intervalMs ?? DEFAULT_INTERVAL_MS;
  activeSyncIntervalMs = interval;
  console.log(`[ARENA_EXTERNAL_SYNC] Starting periodic sync every ${interval / 1000}s (cron: ${SCHEDULE_CRON})`);

  const arenaExternalSync = new ArenaExternalSync();
  // Initial sync (non-blocking)
  arenaExternalSync.sync().catch((err) => {
    console.warn(
      "[ARENA_EXTERNAL_SYNC] Initial sync error:",
      err instanceof Error ? err.message : err
    );
  });

  syncTimer = setInterval(() => {
    arenaExternalSync
      .sync()
      .then((result) => {
        if (result.success) {
          console.log(`[ARENA_EXTERNAL_SYNC] Periodic sync complete: ${result.modelCount} entries`);
        }
      })
      .catch((err) => {
        console.warn(
          "[ARENA_EXTERNAL_SYNC] Periodic sync error:",
          err instanceof Error ? err.message : err
        );
      });
  }, interval);

  if (syncTimer && typeof syncTimer === "object" && "unref" in syncTimer) {
    (syncTimer as { unref?: () => void }).unref?.();
  }
}

/** Stop periodic sync. */
export function stopArenaExternalSync(): void {
  if (syncTimer) {
    clearInterval(syncTimer);
    syncTimer = null;
    console.log("[ARENA_EXTERNAL_SYNC] Periodic sync stopped");
  }
}

/** Boot-time init: only starts when feature flag is enabled. */
export async function initArenaExternalSync(): Promise<boolean> {
  const enabled = await getEffectiveArenaExternalSyncEnabled();
  if (!enabled) {
    console.log(
      "[ARENA_EXTERNAL_SYNC] Disabled by feature flag. Set MODEL_INTEL_ARENA_EXTERNAL_ENABLED=true to enable."
    );
    return false;
  }
  startPeriodicSync();
  return true;
}