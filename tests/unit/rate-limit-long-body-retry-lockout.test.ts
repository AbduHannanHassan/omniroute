/**
 * A 429 whose body asks for a retry longer than the request-queue budget used to
 * freeze that key's limiter for the whole wait (Gemini's daily quota answers with
 * `RetryInfo.retryDelay: "86399s"`). Nothing else recorded the wait: no model
 * lockout, no cooldown. The combo kept coming back to the frozen key, every
 * request sat out the full queue budget (maxWaitMs, 30 s by default) and died as a
 * local 503 "Request exceeded queue budget"; ten such keys burned a 300 s combo
 * timeout without a single upstream call.
 *
 * Expected now:
 *   - a body retry longer than the queue budget becomes a model lockout on that
 *     connection (the signal the combo pre-dispatch gate and account selection
 *     already skip on) and leaves the queue unfrozen;
 *   - a pause the caller's remaining queue time cannot outlast fails at once
 *     instead of waiting that time out.
 */
import test from "node:test";
import assert from "node:assert/strict";

const rateLimitManager = await import("../../open-sse/services/rateLimitManager.ts");
const accountFallback = await import("../../open-sse/services/accountFallback.ts");
const { LEGACY_RATE_LIMIT_QUEUE_TIMEOUT_CODE } =
  await import("../../open-sse/services/rateLimitManager/errors.ts");

const MODEL = "gemini-3.6-flash";
const DAY_MS = 24 * 60 * 60 * 1000;

function gemini429Body(retryDelay: string): string {
  return JSON.stringify({
    error: {
      code: 429,
      message: "You exceeded your current quota, please check your plan and billing details.",
      status: "RESOURCE_EXHAUSTED",
      details: [
        {
          "@type": "type.googleapis.com/google.rpc.QuotaFailure",
          violations: [
            {
              quotaMetric: "generativelanguage.googleapis.com/generate_content_free_tier_requests",
              quotaId: "GenerateRequestsPerDayPerProjectPerModel-FreeTier",
            },
          ],
        },
        { "@type": "type.googleapis.com/google.rpc.RetryInfo", retryDelay },
      ],
    },
  });
}

/** The exact sequence chatCore and the provider pipeline run on an upstream 429. */
function record429(provider: string, connectionId: string, model: string | null, body: string) {
  rateLimitManager.updateFromHeaders(provider, connectionId, new Headers(), 429, model);
  rateLimitManager.updateFromResponseBody(provider, connectionId, body, 429, model);
}

async function warm(provider: string, connectionId: string, model: string | null) {
  rateLimitManager.enableRateLimitProtection(connectionId);
  await rateLimitManager.withRateLimit(provider, connectionId, model, async () => "warm");
}

function isQueueTimeout(err: unknown): boolean {
  return (err as { code?: unknown } | null)?.code === LEGACY_RATE_LIMIT_QUEUE_TIMEOUT_CODE;
}

test.afterEach(async () => {
  accountFallback.clearAllModelLockouts();
  await rateLimitManager.__resetRateLimitManagerForTests();
});

test("429 with a daily-quota RetryInfo locks the model on that connection instead of freezing its queue", async () => {
  const conn = "conn-long-retry-lock";
  await warm("gemini", conn, MODEL);

  record429("gemini", conn, MODEL, gemini429Body("86399s"));

  assert.equal(
    accountFallback.isModelLocked("gemini", conn, MODEL),
    true,
    "the combo pre-dispatch gate and account selection skip on isModelLocked()"
  );
  const lock = accountFallback.getModelLockoutInfo("gemini", conn, MODEL);
  assert.ok(lock, "expected a model lockout for the body-stated wait");
  assert.ok(
    lock.remainingMs > 86_390_000 && lock.remainingMs <= 86_399_000,
    `lockout should last the stated 86399s, got ${lock.remainingMs}ms`
  );
  assert.equal(
    accountFallback.isModelLocked("gemini", conn, "gemini-2.5-pro"),
    false,
    "other models on the same connection keep serving"
  );

  // The queue must not hold the key frozen for a day behind the lockout.
  const started = Date.now();
  const result = await rateLimitManager.withRateLimit(
    "gemini",
    conn,
    MODEL,
    async () => "served",
    null,
    3_000
  );
  assert.equal(result, "served");
  assert.ok(Date.now() - started < 1_000, `queue held the call for ${Date.now() - started}ms`);
});

test("a body-stated lockout never outlasts the 24h retry-hint ceiling", async () => {
  const conn = "conn-long-retry-ceiling";
  await warm("gemini", conn, MODEL);

  record429("gemini", conn, MODEL, gemini429Body("999999s"));

  const lock = accountFallback.getModelLockoutInfo("gemini", conn, MODEL);
  assert.ok(lock, "expected a model lockout");
  assert.ok(lock.remainingMs <= DAY_MS, `lockout ${lock.remainingMs}ms exceeds 24h`);
  assert.ok(lock.remainingMs > DAY_MS - 10_000, `lockout ${lock.remainingMs}ms should be ~24h`);
});

test("a pause that outlasts the caller's remaining queue time fails at once instead of waiting it out", async () => {
  const conn = "conn-long-retry-fastfail";
  await warm("gemini", conn, MODEL);

  // 20 s fits the default 30 s queue budget, so the limiter pauses (no lockout)...
  record429("gemini", conn, MODEL, gemini429Body("20s"));
  assert.equal(accountFallback.getModelLockoutInfo("gemini", conn, MODEL), null);

  // ...but this caller has 3 s left: waiting cannot end in a dispatch.
  const started = Date.now();
  await assert.rejects(
    rateLimitManager.withRateLimit("gemini", conn, MODEL, async () => "late", null, 3_000),
    isQueueTimeout
  );
  const waited = Date.now() - started;
  assert.ok(waited < 1_000, `waited ${waited}ms for a pause that could not clear in time`);
});

test("with no model to lock, a long body pause still fails fast instead of eating the queue budget", async () => {
  const conn = "conn-long-retry-nomodel";
  await warm("gemini", conn, null);

  record429("gemini", conn, null, gemini429Body("86399s"));

  const started = Date.now();
  await assert.rejects(
    rateLimitManager.withRateLimit("gemini", conn, null, async () => "late", null, 3_000),
    isQueueTimeout
  );
  const waited = Date.now() - started;
  assert.ok(waited < 1_000, `waited ${waited}ms behind a pause that outlasts the budget`);
});

test("guard: a short body pause inside the queue budget still holds the call and then serves it", async () => {
  const conn = "conn-long-retry-short";
  await warm("gemini", conn, MODEL);

  record429("gemini", conn, MODEL, gemini429Body("1s"));
  assert.equal(accountFallback.getModelLockoutInfo("gemini", conn, MODEL), null);

  const started = Date.now();
  const result = await rateLimitManager.withRateLimit(
    "gemini",
    conn,
    MODEL,
    async () => "after-pause",
    null,
    5_000
  );
  const waited = Date.now() - started;
  assert.equal(result, "after-pause");
  assert.ok(waited >= 500, `the 1s pause was not honoured (waited ${waited}ms)`);
  assert.ok(waited < 4_000, `waited ${waited}ms for a 1s pause`);
});

test("guard: once the reservoir is relaxed, a recorded pause no longer fails calls fast", async () => {
  const conn = "conn-long-retry-relaxed";
  await warm("openai", conn, "gpt-4o");

  record429(
    "openai",
    conn,
    "gpt-4o",
    JSON.stringify({ error: { message: "Rate limit reached. Please retry after 20s" } })
  );
  // A later response reports plenty of headroom and relaxes the reservoir.
  rateLimitManager.updateFromHeaders(
    "openai",
    conn,
    new Headers({
      "x-ratelimit-limit-requests": "100",
      "x-ratelimit-remaining-requests": "90",
      "x-ratelimit-reset-requests": "60s",
    }),
    200,
    "gpt-4o"
  );

  const started = Date.now();
  const result = await rateLimitManager.withRateLimit(
    "openai",
    conn,
    "gpt-4o",
    async () => "relaxed",
    null,
    3_000
  );
  assert.equal(result, "relaxed");
  assert.ok(
    Date.now() - started < 1_000,
    `relaxed limiter held the call ${Date.now() - started}ms`
  );
});

test("guard: the per-target deadline (abort signal) ends a wait behind a body pause", async () => {
  const conn = "conn-long-retry-abort";
  await warm("gemini", conn, MODEL);

  record429("gemini", conn, MODEL, gemini429Body("20s"));

  const controller = new AbortController();
  const deadline = new Error("combo per-model timeout");
  const timer = setTimeout(() => controller.abort(deadline), 200);
  const started = Date.now();
  try {
    await assert.rejects(
      rateLimitManager.withRateLimit(
        "gemini",
        conn,
        MODEL,
        async () => "late",
        controller.signal,
        30_000
      ),
      (err: unknown) => err === deadline
    );
  } finally {
    clearTimeout(timer);
  }
  const waited = Date.now() - started;
  assert.ok(waited < 1_500, `abort took ${waited}ms to end the queue wait`);
});
