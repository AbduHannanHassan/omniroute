/**
 * rateLimitManager/bodyRetryPause — what a body-stated retry does to the queue.
 *
 * A 429 body can name its own wait (Gemini `RetryInfo.retryDelay`, "retry after
 * Ns" text). A wait the request queue can sit out is pacing, and the limiter
 * pauses for it. A wait longer than the queue budget is not: Gemini answers an
 * exhausted daily quota with `retryDelay: "86399s"`, and pausing the limiter for
 * that turned every request on the key into a full `maxWaitMs` queue wait ending
 * in a local 503, while nothing told the combo to stop picking the key.
 *
 * When the wait comes from Google's structured `RetryInfo` (an authoritative
 * hint, like the ones that bypass the lockout `maxCooldownMs` cap) and the key's
 * limiter is already scoped to the model, it becomes a model lockout on the
 * connection instead: the same scope the pause would have had, but visible and
 * honoured by the combo pre-dispatch gate and account selection. Prose hints and
 * connection-wide limiters keep the pause.
 *
 * A pause the limiter does take is remembered per limiter instance, so a caller
 * whose remaining queue time ends before the pause does fails at once instead of
 * waiting that time out. Any later change to the reservoir or its refresh
 * schedule forgets it, and only a pause set on a limiter built for it is
 * recorded: an older limiter's refresh clock may refill the reservoir sooner, and
 * an overstated pause would turn away a request the queue could still serve.
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
  /** The model when the key's limiter is scoped to it; null for a connection-wide limiter. */
  scopedModel: string | null | undefined;
  status: number;
  retryAfterMs: number;
  reason: string;
}

/**
 * True when the body carries a structured `RetryInfo.retryDelay`, the field
 * `parseRetryAfterFromBody` reads before falling back to prose.
 */
export function hasRetryInfoDelay(responseBody: unknown): boolean {
  let body: unknown = responseBody;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return false;
    }
  }
  const root = (body ?? {}) as { error?: { details?: unknown }; details?: unknown };
  const details = root.error?.details || root.details;
  return (
    Array.isArray(details) &&
    details.some((d) => Boolean((d as { retryDelay?: unknown } | null)?.retryDelay))
  );
}

/**
 * Lock the model on the connection (capped at 24h) when a 429's `RetryInfo`
 * wait exceeds the queue budget, and return true. Returns false when the wait
 * stays a limiter pause: it fits the budget, it came from prose, the limiter is
 * connection-wide, or the queue has no wait deadline (`maxWaitMs` 0, #12902).
 */
export function lockModelForLongBodyRetry(
  retry: BodyRetry,
  queueBudgetMs: number,
  responseBody: unknown,
  log: (message: string) => void = () => {}
): boolean {
  const { provider, connectionId, scopedModel, status, retryAfterMs, reason } = retry;
  if (status !== 429 || !scopedModel) return false;
  if (queueBudgetMs <= 0 || retryAfterMs <= queueBudgetMs) return false;
  if (!hasRetryInfoDelay(responseBody)) return false;
  const lockMs = Math.min(retryAfterMs, MAX_SHORT_RETRY_HINT_MS);
  lockModel(provider, connectionId, scopedModel, reason, lockMs);
  log(
    `🔒 [RATE-LIMIT] ${provider}:${connectionId.slice(0, 8)} — body-parsed retry: ${Math.ceil(retryAfterMs / 1000)}s (${reason}) exceeds the ${queueBudgetMs}ms queue budget; locking ${scopedModel} on this connection for ${Math.ceil(lockMs / 1000)}s instead of pausing its queue`
  );
  return true;
}

/** Record that `limiter`'s reservoir stays empty until `untilMs`. */
export function rememberLimiterPause(limiter: object, untilMs: number): void {
  pausedUntil.set(limiter, untilMs);
}

/** Forget the recorded pause when `updates` touch the reservoir or its refresh schedule. */
export function noteLimiterUpdate(limiter: object, updates: object): void {
  if (Object.keys(updates).some((key) => key.startsWith("reservoir"))) {
    pausedUntil.delete(limiter);
  }
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
