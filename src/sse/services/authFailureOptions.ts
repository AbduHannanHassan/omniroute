import type { markAccountUnavailable } from "./auth";

type ExhaustionOptions = NonNullable<Parameters<typeof markAccountUnavailable>[6]>;

/** Build the options for markAccountUnavailable on the chat exhaustion path.
 * Single place that forwards the request id so no chat sender can forget it:
 * every chat caller passes its in-scope id through here. */
export function buildExhaustionOptions(
  correlationId: string | null,
  rest: Omit<ExhaustionOptions, "correlationId"> = {}
): ExhaustionOptions & { correlationId: string | null } {
  return { ...rest, correlationId };
}
