/**
 * Decisions of open-sse/services/rateLimitManager/bodyRetryPause.ts without
 * timers or limiters: when a body-stated 429 wait becomes a model lockout, and
 * when a recorded limiter pause turns a caller away. The end-to-end behaviour
 * through the rate-limit manager is in rate-limit-long-body-retry-lockout.test.ts.
 */
import test from "node:test";
import assert from "node:assert/strict";

const accountFallback = await import("../../open-sse/services/accountFallback.ts");
const bodyRetryPause = await import("../../open-sse/services/rateLimitManager/bodyRetryPause.ts");
const { LEGACY_RATE_LIMIT_QUEUE_TIMEOUT_CODE } =
  await import("../../open-sse/services/rateLimitManager/errors.ts");

type BodyRetry = Parameters<typeof bodyRetryPause.lockModelForLongBodyRetry>[0];

const MODEL = "gemini-3.6-flash";
const NOW = 1_000_000;

function retryInfoBody(retryDelay: string): string {
  return JSON.stringify({
    error: {
      code: 429,
      status: "RESOURCE_EXHAUSTED",
      details: [{ "@type": "type.googleapis.com/google.rpc.RetryInfo", retryDelay }],
    },
  });
}

function proseBody(seconds: number): string {
  return JSON.stringify({
    error: { message: `Rate limit reached. Please retry after ${seconds}s` },
  });
}

function isQueueTimeout(err: unknown): boolean {
  return (err as { code?: unknown } | null)?.code === LEGACY_RATE_LIMIT_QUEUE_TIMEOUT_CODE;
}

test.afterEach(() => {
  accountFallback.clearAllModelLockouts();
});

test("checkLimiterPause compares the recorded pause with the remaining budget", () => {
  const limiter = {};
  assert.equal(bodyRetryPause.checkLimiterPause(limiter, 5_000, "p/m", NOW), null, "no pause");

  bodyRetryPause.rememberLimiterPause(limiter, NOW + 20_000);
  assert.equal(bodyRetryPause.checkLimiterPause(limiter, 30_000, "p/m", NOW), null);
  assert.equal(bodyRetryPause.checkLimiterPause(limiter, 20_000, "p/m", NOW), null);
  const err = bodyRetryPause.checkLimiterPause(limiter, 5_000, "p/m", NOW);
  assert.ok(isQueueTimeout(err), "a pause past the budget is a queue timeout");
  assert.match(String(err?.message), /lasts 20000ms more, past the 5000ms left/);
  assert.equal(
    bodyRetryPause.checkLimiterPause(limiter, 5_000, "p/m", NOW + 15_000),
    null,
    "the same pause fits once less of it is left"
  );
});

test("noteLimiterUpdate forgets the pause on a reservoir or refresh change, not on pacing", () => {
  for (const updates of [
    { reservoir: null },
    { reservoir: 5 },
    { reservoirRefreshInterval: 1_000 },
    { reservoirRefreshAmount: 10 },
  ]) {
    const limiter = {};
    bodyRetryPause.rememberLimiterPause(limiter, NOW + 20_000);
    bodyRetryPause.noteLimiterUpdate(limiter, updates);
    assert.equal(
      bodyRetryPause.checkLimiterPause(limiter, 5_000, "p/m", NOW),
      null,
      `${Object.keys(updates)[0]} must forget the pause`
    );
  }

  const limiter = {};
  bodyRetryPause.rememberLimiterPause(limiter, NOW + 20_000);
  bodyRetryPause.noteLimiterUpdate(limiter, { minTime: 200, maxConcurrent: 2 });
  assert.ok(bodyRetryPause.checkLimiterPause(limiter, 5_000, "p/m", NOW), "pacing keeps it");
});

test("lockModelForLongBodyRetry locks only a 429 RetryInfo wait past the budget on a model-scoped limiter", () => {
  const base: BodyRetry = {
    provider: "gemini",
    connectionId: "conn-decision",
    scopedModel: MODEL,
    status: 429,
    retryAfterMs: 86_399_000,
    reason: "rate_limit_exceeded",
  };
  const retryInfo = retryInfoBody("86399s");
  const logged: string[] = [];
  const decide = (overrides: Partial<BodyRetry>, budgetMs = 30_000, body: unknown = retryInfo) =>
    bodyRetryPause.lockModelForLongBodyRetry({ ...base, ...overrides }, budgetMs, body, (m) =>
      logged.push(m)
    );

  assert.equal(decide({ status: 503 }), false, "only 429s convert");
  assert.equal(decide({ scopedModel: null }), false, "a connection-wide limiter keeps the pause");
  assert.equal(decide({ retryAfterMs: 30_000 }), false, "a wait that fits the budget is pacing");
  assert.equal(decide({}, 0), false, "maxWaitMs 0 means the queue has no wait deadline");
  assert.equal(decide({}, 30_000, proseBody(86_399)), false, "a prose hint is not authoritative");
  assert.equal(accountFallback.getModelLockoutInfo("gemini", "conn-decision", MODEL), null);
  assert.deepEqual(logged, [], "only a lockout is logged here; the caller logs the pause");

  assert.equal(decide({}), true);
  const lock = accountFallback.getModelLockoutInfo("gemini", "conn-decision", MODEL);
  assert.ok(lock && lock.remainingMs > 86_390_000 && lock.remainingMs <= 86_399_000);
  assert.match(logged.join("\n"), /86399s .* exceeds the 30000ms queue budget; locking gemini/);

  assert.equal(decide({ connectionId: "conn-ceiling", retryAfterMs: 999_999_000 }), true);
  const capped = accountFallback.getModelLockoutInfo("gemini", "conn-ceiling", MODEL);
  assert.ok(capped && capped.remainingMs <= 24 * 60 * 60 * 1000, "capped at the 24h hint ceiling");
});

test("hasRetryInfoDelay reads the field parseRetryAfterFromBody prefers over prose", () => {
  assert.equal(bodyRetryPause.hasRetryInfoDelay(retryInfoBody("5s")), true);
  assert.equal(bodyRetryPause.hasRetryInfoDelay(JSON.parse(retryInfoBody("5s"))), true);
  assert.equal(bodyRetryPause.hasRetryInfoDelay({ details: [{ retryDelay: "5s" }] }), true);
  assert.equal(bodyRetryPause.hasRetryInfoDelay(proseBody(5)), false);
  assert.equal(bodyRetryPause.hasRetryInfoDelay("not json"), false);
  assert.equal(bodyRetryPause.hasRetryInfoDelay(null), false);
  assert.equal(bodyRetryPause.hasRetryInfoDelay({ error: { details: [{}] } }), false);
});
