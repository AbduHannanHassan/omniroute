/**
 * publicaiSync.ts — PublicAI index snapshot sync.
 *
 * Fetches model intelligence data from the PublicAI API and stores
 * normalized task-fit scores in the `model_intelligence` DB table.
 * Source literal: "publicai_index"
 *
 * Schedule: daily at 09:00 UTC (cron: '0 9 * * *')
 * Expiry: 24 hours after sync.
 */

import { BaseSync, BaseSyncConfig } from "../baseSync";
import { transformPublicAI } from "../transforms/publicai";
import { getLatestSyncedAt, applyArenaEloRefresh } from "@/lib/db/modelIntelligence";

/** PublicAI API response entry shape. */
export interface PublicAIEntry {
  id?: string;
  model?: string;
  index?: number;
  score?: number;
}

/** PublicAI API response envelope. */
export interface PublicAIResponse {
  models: PublicAIEntry[];
  fetchedAt: string;
}

/** Sync result shape. */
export interface SyncResult {
  success: boolean;
  modelCount: number;
  source: string;
  error?: string;
}

/** PublicAI API base URL (env-overridable for tests/staging). */
const PUBLICAI_API_BASE = process.env.PUBLICAI_API_BASE || "https://api.publicai.io/v1/models";

/** Default sync schedule: daily at 09:00 UTC. */
const SCHEDULE_CRON = "0 9 * * *";

/** Default sync interval in ms (24h). */
const DEFAULT_INTERVAL_MS = 24 * 60 * 60 * 1000;

/** Backoff on failure: 6h (interval/4). */
const BACKOFF_MS = DEFAULT_INTERVAL_MS / 4;

/** Intelligence entry expiry: 24 hours after sync. */
const EXPIRY_DAYS = 1;

const KV_NAMESPACE = "publicai_index";
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
    console.warn(`[PUBLICAI_SYNC] Failed to persist ${key}: ${getErrorMessage(err)}`);
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

async function getEffectivePublicaiSyncEnabled(): Promise<boolean> {
  try {
    const { isFeatureFlagEnabled } = await import("@/shared/utils/featureFlags");
    return isFeatureFlagEnabled("MODEL_INTEL_PUBLICAI_ENABLED");
  } catch (error) {
    console.warn(
      `[PUBLICAI_SYNC] Failed to resolve MODEL_INTEL_PUBLICAI_ENABLED feature flag: ${getErrorMessage(error)}`
    );
    return process.env.MODEL_INTEL_PUBLICAI_ENABLED !== "false";
  }
}

const baseConfig: BaseSyncConfig = {
  source: "publicai_index",
  namespace: KV_NAMESPACE,
  backoffMs: BACKOFF_MS,
};

export class PublicaiSync extends BaseSync {
  constructor() {
    super(baseConfig);
  }

  /** Fetch PublicAI index snapshot from API. */
  async fetch(): Promise<PublicAIResponse> {
    const response = await fetch(PUBLICAI_API_BASE, {
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) {
      throw new Error(
        `PublicAI API fetch failed [${response.status}]: ${response.statusText}`
      );
    }
    const text = await response.text();
    try {
      return JSON.parse(text) as PublicAIResponse;
    } catch {
      throw new Error(
        `PublicAI API returned invalid JSON (${text.slice(0, 100)}...)`
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
        backupDbFile("pre-publicai-sync");
        firstSyncDone = true;
      }

      if (!dryRun) {
        // Freshness guard: skip if synced within interval
        const latest = await getLatestSyncedAt("publicai_index");
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
      const entries = transformPublicAI(data.models);

      if (!dryRun && entries.length > 0) {
        try {
          // Atomic replace for this source
          await applyArenaEloRefresh(entries, "publicai_index");
          await clearKvTimestamp(KV_LAST_FAILED_KEY);
        } catch (err) {
          const message = getErrorMessage(err);
          console.warn(`[PUBLICAI_SYNC] Failed to apply intelligence refresh: ${message}`);
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
        `[PUBLICAI_SYNC] ${countLabel} ${entries.length} model intelligence entries from PublicAI`
      );

      this.recordSuccess();
      return {
        success: true,
        modelCount: entries.length,
        source: this.config.source,
      };
    } catch (err) {
      const message = getErrorMessage(err);
      console.warn("[PUBLICAI_SYNC] Sync failed:", message);
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
    const enabled = await getEffectivePublicaiSyncEnabled();
    return {
      enabled,
      lastSync: lastSyncTime,
      lastSyncModelCount,
      nextSync:
        syncTimer && lastSyncTime
          ? new Date(new Date(lastSyncTime).getTime() + activeSyncIntervalMs).toISOString()
          : null,
      intervalMs: activeSyncIntervalMs,
      sources: ["publicai_index"],
      scheduleCron: SCHEDULE_CRON,
    };
  }
}

/** Start periodic sync (idempotent). */
export function startPeriodicSync(intervalMs?: number): void {
  if (syncTimer) return;

  const interval = intervalMs ?? DEFAULT_INTERVAL_MS;
  activeSyncIntervalMs = interval;
  console.log(`[PUBLICAI_SYNC] Starting periodic sync every ${interval / 1000}s (cron: ${SCHEDULE_CRON})`);

  const publicaiSync = new PublicaiSync();
  // Initial sync (non-blocking)
  publicaiSync.sync().catch((err) => {
    console.warn(
      "[PUBLICAI_SYNC] Initial sync error:",
      err instanceof Error ? err.message : err
    );
  });

  syncTimer = setInterval(() => {
    publicaiSync
      .sync()
      .then((result) => {
        if (result.success) {
          console.log(`[PUBLICAI_SYNC] Periodic sync complete: ${result.modelCount} entries`);
        }
      })
      .catch((err) => {
        console.warn(
          "[PUBLICAI_SYNC] Periodic sync error:",
          err instanceof Error ? err.message : err
        );
      });
  }, interval);

  if (syncTimer && typeof syncTimer === "object" && "unref" in syncTimer) {
    (syncTimer as { unref?: () => void }).unref?.();
  }
}

/** Stop periodic sync. */
export function stopPublicaiSync(): void {
  if (syncTimer) {
    clearInterval(syncTimer);
    syncTimer = null;
    console.log("[PUBLICAI_SYNC] Periodic sync stopped");
  }
}

/** Boot-time init: only starts when feature flag is enabled. */
export async function initPublicaiSync(): Promise<boolean> {
  const enabled = await getEffectivePublicaiSyncEnabled();
  if (!enabled) {
    console.log(
      "[PUBLICAI_SYNC] Disabled by feature flag. Set MODEL_INTEL_PUBLICAI_ENABLED=true to enable."
    );
    return false;
  }
  startPeriodicSync();
  return true;
}