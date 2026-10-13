import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(".ci-work/cache-input-fixture");
fs.mkdirSync(root, { recursive: true });
const data = fs.mkdtempSync(path.join(root, "data-"));
process.env.DATA_DIR = data;
process.env.APP_LOG_TO_FILE = "false";
const core = await import("../../src/lib/db/core.ts");
const { saveRequestUsage } = await import("../../src/lib/usage/usageHistory.ts");
const { getUsageStats } = await import("../../src/lib/usage/usageStats.ts");

test.after(async () => {
  await (await import("../../src/lib/usage/callLogs.ts")).closeCallLogSaves(5_000);
  core.resetDbInstance();
  fs.rmSync(data, { recursive: true, force: true });
});

test(
  "usage stats expose recorded cached input without adding it twice",
  { timeout: 5_000 },
  async () => {
    await saveRequestUsage({
      provider: "fixture-provider",
      model: "fixture-model",
      connectionId: "fixture-account",
      apiKeyId: "fixture-key",
      apiKeyName: "Fixture key",
      tokens: { input: 100, output: 10, cacheRead: 60, cacheCreation: 20 },
      success: true,
      status: "success",
      timestamp: new Date().toISOString(),
    });
    const result = (await getUsageStats()) as unknown as {
      totalPromptTokens: number;
      totalCompletionTokens: number;
      totalCachedInputTokens: number;
      totalCachedInputTokensComplete: boolean;
      byProvider: Record<string, { cachedInputTokens: number }>;
      byModel: Record<string, { cachedInputTokens: number }>;
      byAccount: Record<string, { cachedInputTokens: number }>;
      byApiKey: Record<string, { cachedInputTokens: number }>;
    };
    assert.equal(result.totalPromptTokens, 100);
    assert.equal(result.totalCompletionTokens, 10);
    assert.equal(result.totalCachedInputTokens, 60);
    assert.equal(result.totalCachedInputTokensComplete, true);
    for (const breakdown of [
      result.byProvider,
      result.byModel,
      result.byAccount,
      result.byApiKey,
    ]) {
      assert.equal(Object.values(breakdown)[0].cachedInputTokens, 60);
    }
  }
);

test(
  "new archives retain cached counts while old archives remain explicitly incomplete",
  { timeout: 5_000 },
  async () => {
    const { rollupUsageHistoryBeforeDate } =
      await import("../../src/lib/usage/aggregateHistory.ts");
    const { getUserDatabaseSettings, updateDatabaseSettings } =
      await import("../../src/lib/db/databaseSettings.ts");
    const oldDate = "2020-01-02T12:00:00.000Z";
    await saveRequestUsage({
      provider: "archive-fixture",
      model: "archive-model",
      tokens: { input: 200, output: 20, cacheRead: 80 },
      success: true,
      status: "success",
      timestamp: oldDate,
    });
    for (let repeat = 0; repeat < 2; repeat++) {
      const rolled = await rollupUsageHistoryBeforeDate("2020-02-01");
      assert.equal(rolled.errors, 0);
    }
    const settings = getUserDatabaseSettings();
    updateDatabaseSettings({ aggregation: { ...settings.aggregation, enabled: true } });
    const db = core.getDbInstance();
    db.prepare("DELETE FROM usage_history WHERE timestamp < ?").run("2020-02-01");
    let stats = await getUsageStats();
    assert.equal(stats.byProvider["archive-fixture"].cachedInputTokens, 80);
    assert.equal(stats.byProvider["archive-fixture"].cachedInputTokensComplete, true);
    assert.equal(Object.values(stats.byAccount)[0].cachedInputTokensComplete, false);
    assert.equal(Object.values(stats.byApiKey)[0].cachedInputTokensComplete, false);
    db.prepare(
      "INSERT INTO daily_usage_summary (provider,model,date,total_requests,total_input_tokens,total_output_tokens,total_cost) VALUES ('legacy-fixture','legacy-model','2020-01-01',1,100,10,0)"
    ).run();
    stats = await getUsageStats();
    assert.equal(stats.byProvider["legacy-fixture"].cachedInputTokens, null);
    assert.equal(stats.byProvider["legacy-fixture"].cachedInputTokensComplete, false);
    assert.equal(stats.totalCachedInputTokens, 140);
    assert.equal(stats.totalCachedInputTokensComplete, false);
  }
);

test(
  "quota backfill invalidates cache reads belonging to replaced daily totals",
  { timeout: 5_000 },
  async () => {
    const { rollupDailyUsage } = await import("../../src/lib/usage/aggregateHistory.ts");
    const db = core.getDbInstance();
    const before = await getUsageStats();
    assert.equal(before.byProvider["archive-fixture"].promptTokens, 200);
    assert.equal(before.byProvider["archive-fixture"].cachedInputTokens, 80);
    db.prepare(
      "INSERT INTO quota_snapshots (provider, connection_id, window_key, raw_data, created_at) VALUES (?, ?, ?, ?, ?)"
    ).run(
      "archive-fixture",
      "fixture-account",
      "fixture-window",
      JSON.stringify({ model: "archive-model", input_tokens: 30, output_tokens: 5, cost: 0 }),
      "2020-01-02T12:00:00.000Z"
    );
    const rolled = await rollupDailyUsage("2020-01-02", "2020-01-02");
    assert.equal(rolled.errors, 0);
    assert.equal(rolled.inserted, 1);
    const after = await getUsageStats();
    assert.equal(after.byProvider["archive-fixture"].promptTokens, 30);
    assert.equal(after.byProvider["archive-fixture"].cachedInputTokens, null);
    assert.equal(after.byProvider["archive-fixture"].cachedInputTokensComplete, false);
  }
);
