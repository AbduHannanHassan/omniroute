/**
 * rateLimitManager/bodyRetryPause — what a body-stated retry does to the queue.
 *
 * A 429 body can name its own wait (Gemini `RetryInfo.retryDelay`, "retry after
 * Ns" text). A wait the request queue can sit out is pacing, and the limiter
 * pauses for it. A wait longer than the queue budget is not: Gemini answers an
 * exhausted daily quota with `retryDelay: "86399s"`, and pausing the limiter for
 * that turned every request on the key into a full `maxWaitMs` queue wait ending
 * in a local 503, while nothing told the combo to stop picking the key. Such a
 * wait becomes a model lockout on the connection instead — the signal the combo
 * pre-dispatch gate and account selection already skip on.
 *
 * A pause the limiter does take is remembered per limiter instance, so a caller
 * whose remaining queue time ends before the pause does fails at once instead of
 * waiting that time out. Any later reservoir change forgets it, and only a pause
 * set on a limiter built for it is recorded: an older limiter's refresh clock may
 * refill the reservoir sooner, and an overstated pause would turn away a request
 * the queue could still serve.
 *
 * @module services/rateLimitManager/bodyRetryPause
 */

import { lockModel } from "../accountFallback.ts";
import { MAX_SHORT_RETRY_HINT_MS } from "../retryAfterJson.ts";
import { LEGACY_RATE_LIMIT_QUEUE_TIMEOUT_CODE, markLocalRateLimitError } from "./errors";

const pausedUntil = new WeakMap<object, number>();

export interface BodyRetry {
  provider: string;
  connectionId: string;
  model: string | null | undefined;
  status: number;
  retryAfterMs: number;
  /** The connection's request-queue budget (`maxWaitMs`). */
  queueBudgetMs: number;
  reason: string;
}

/**
 * Lock `model` on the connection when a 429's body-stated wait exceeds the queue
 * budget, and return the lockout length. Returns null when the wait is pacing
 * the limiter should take, or when there is no model to lock. A queue budget of
 * 0 means the queue has no wait deadline (#12902), so every wait fits it.
 */
export function lockModelForLongBodyRetry(retry: BodyRetry): number | null {
  const { provider, connectionId, model, status, retryAfterMs, queueBudgetMs, reason } = retry;
  if (status !== 429 || !model) return null;
  if (queueBudgetMs <= 0 || retryAfterMs <= queueBudgetMs) return null;
  const lockMs = Math.min(retryAfterMs, MAX_SHORT_RETRY_HINT_MS);
  lockModel(provider, connectionId, model, reason, lockMs);
  return lockMs;
}

/** Record that `limiter`'s reservoir stays empty until `untilMs`. */
export function rememberLimiterPause(limiter: object, untilMs: number): void {
  pausedUntil.set(limiter, untilMs);
}

/** Drop the recorded pause; called on every reservoir change to the limiter. */
export function forgetLimiterPause(limiter: object): void {
  pausedUntil.delete(limiter);
}

/**
 * Returns a typed `RATE_LIMIT_QUEUE_TIMEOUT` error when the recorded pause runs
 * past the caller's remaining queue time `budgetMs` (queueing could only end in
 * that same timeout), or null when no pause is recorded or it ends in time.
 */
export function checkLimiterPause(
  limiter: object,
  budgetMs: number,
  identity: string,
  now: number = Date.now()
): Error | null {
  const until = pausedUntil.get(limiter);
  if (until === undefined || until - now <= budgetMs) return null;
  return markLocalRateLimitError(
    new Error(
      `Request not queued: the local rate-limit pause for ${identity} lasts ${until - now}ms more, ` +
        `past the ${budgetMs}ms left in its queue budget — this is OmniRoute's request queue ` +
        `honouring an upstream retry-after, not a new upstream rejection.`
    ),
    LEGACY_RATE_LIMIT_QUEUE_TIMEOUT_CODE
  );
}
