/**
 * Codex rejects a replayed reasoning item whose encrypted_content cannot be verified with
 * HTTP 400, `type: "invalid_request_error"` and an empty `code`, e.g. "The encrypted content
 * for item rs_… could not be verified. Reason: Encrypted content could not be decrypted or
 * parsed."
 *
 * Clients or the router recover by resending without the foreign reasoning item.
 */
export const CODEX_REASONING_REPLAY_ERROR_CODE = "invalid_encrypted_content";

const MAX_MESSAGE_LENGTH = 2_000;

// Bounded quantifiers only (ReDoS-safe on untrusted upstream text).
const REPLAY_MESSAGE_PATTERN =
  /\bencrypted[ _]content\b.{0,200}\bcould not be (?:verified|decrypted)\b/i;

export interface CodexReplayRejectionInfo {
  message: string;
  isGenericBadRequest?: boolean;
}

export function isReasoningReplayRejectionMessage(text: string): boolean {
  return typeof text === "string" && REPLAY_MESSAGE_PATTERN.test(text);
}

export async function readCodexReasoningReplayRejection(
  response: Response
): Promise<CodexReplayRejectionInfo | null> {
  if (response.status !== 400) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(await response.clone().text());
  } catch {
    return null;
  }
  const record =
    parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as Record<string, unknown>)
      : null;
  if (!record) return null;

  const errorObj =
    record.error && typeof record.error === "object" && !Array.isArray(record.error)
      ? (record.error as Record<string, unknown>)
      : record;

  const code = typeof errorObj.code === "string" ? errorObj.code : "";
  const rawMessage =
    typeof errorObj.message === "string"
      ? errorObj.message
      : typeof record.detail === "string"
        ? record.detail
        : "";
  const text = rawMessage.slice(0, MAX_MESSAGE_LENGTH);

  const isExplicitRejection =
    code === CODEX_REASONING_REPLAY_ERROR_CODE || REPLAY_MESSAGE_PATTERN.test(text);
  if (isExplicitRejection) {
    return { message: text || "Codex rejected a replayed reasoning item" };
  }

  // Upstream generic 400 bad_request (observed on cross-model switch)
  if (code === "bad_request" || errorObj.type === "invalid_request_error") {
    return { message: text || "Upstream error: 400", isGenericBadRequest: true };
  }

  return null;
}

/**
 * Strips replayed opaque reasoning items from a request body so a turn rejected
 * by upstream due to foreign or undecryptable reasoning can be retried once.
 */
export function stripCodexReplayedReasoning<T>(body: T): { body: T; strippedCount: number } {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { body, strippedCount: 0 };
  }
  const record = body as Record<string, unknown>;
  let strippedCount = 0;

  let nextInput: unknown[] | undefined;
  if (Array.isArray(record.input)) {
    nextInput = record.input.filter((item) => {
      const rec =
        item && typeof item === "object" && !Array.isArray(item)
          ? (item as Record<string, unknown>)
          : null;
      if (
        rec &&
        rec.type === "reasoning" &&
        (typeof rec.encrypted_content === "string" || typeof rec.id === "string")
      ) {
        strippedCount++;
        return false;
      }
      return true;
    });
  }

  if (strippedCount === 0 && !record.previous_response_id) {
    return { body, strippedCount: 0 };
  }

  const nextRecord: Record<string, unknown> = { ...record };
  if (nextInput) {
    nextRecord.input = nextInput;
  }
  if (nextRecord.previous_response_id) {
    delete nextRecord.previous_response_id;
    strippedCount++;
  }

  return { body: nextRecord as T, strippedCount };
}
