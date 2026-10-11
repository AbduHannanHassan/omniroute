/**
 * Regression test for Codex model-switch / cross-turn reasoning replay 400 recovery.
 *
 * When switching models mid-conversation (e.g. to a gpt-6 model) or replaying session
 * history on Codex, previously stored reasoning items with foreign `encrypted_content`
 * cause upstream 400 errors ("could not be verified" or generic bad_request).
 *
 * The executor must transparently strip the rejected `encrypted_content` and retry
 * once, allowing the turn to complete successfully.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { cleanupTempDataDir } from "../_setup/tempDataDir.ts";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omr-codex-rec-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const { CodexExecutor, __setCodexWebSocketTransportForTesting } =
  await import("../../open-sse/executors/codex.ts");

const VERIFY_FAILED_MESSAGE =
  "The encrypted content for item rs_foreign_123 could not be verified. Reason: Encrypted content could not be decrypted or parsed.";

function upstream400(error: Record<string, unknown>, status = 400): Response {
  return Response.json({ error }, { status });
}

function upstream200(body: Record<string, unknown>): Response {
  return Response.json(body, { status: 200 });
}

test.afterEach(() => __setCodexWebSocketTransportForTesting(undefined));
test.after(async () => {
  await cleanupTempDataDir(TEST_DATA_DIR);
});

test("CodexExecutor recovers from reasoning replay rejection by stripping encrypted_content and retrying once", async () => {
  const executor = new CodexExecutor();
  const originalFetch = globalThis.fetch;
  const fetchCalls: Array<{ url: string; body: string }> = [];

  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    const bodyStr = typeof init?.body === "string" ? init.body : "";
    fetchCalls.push({ url: String(url), body: bodyStr });

    if (fetchCalls.length === 1) {
      // First attempt with replayed foreign reasoning fails upstream with 400
      return upstream400({
        message: VERIFY_FAILED_MESSAGE,
        type: "invalid_request_error",
        param: null,
        code: "",
      });
    }

    // Second attempt (retry) should succeed
    return upstream200({
      id: "resp_success_123",
      model: "gpt-6-sol",
      choices: [{ message: { role: "assistant", content: "Hello from gpt-6!" } }],
    });
  }) as typeof globalThis.fetch;

  try {
    const result = await executor.execute({
      model: "gpt-6-sol",
      body: {
        model: "gpt-6-sol",
        input: [
          { type: "message", role: "user", content: [{ type: "input_text", text: "hi" }] },
          {
            type: "reasoning",
            id: "rs_foreign_123",
            encrypted_content: "FOREIGN_ENCRYPTED_BLOB_XYZ",
            summary: [{ type: "text", text: "foreign summary" }],
          },
        ],
      },
      stream: false,
      credentials: { accessToken: "codex-token" },
    });

    assert.equal(fetchCalls.length, 2, "must have retried once after 400");
    assert.equal(result.response.status, 200, "recovery attempt must return 200 OK");

    // First attempt sent the encrypted_content
    assert.ok(fetchCalls[0].body.includes("FOREIGN_ENCRYPTED_BLOB_XYZ"));

    // Second attempt must NOT have the foreign encrypted_content
    assert.ok(!fetchCalls[1].body.includes("FOREIGN_ENCRYPTED_BLOB_XYZ"));
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("CodexExecutor recovers from generic 400 bad_request when body carries replayed encrypted reasoning", async () => {
  const executor = new CodexExecutor();
  const originalFetch = globalThis.fetch;
  const fetchCalls: Array<{ url: string; body: string }> = [];

  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    const bodyStr = typeof init?.body === "string" ? init.body : "";
    fetchCalls.push({ url: String(url), body: bodyStr });

    if (fetchCalls.length === 1) {
      // Upstream returns generic 400 bad_request on model switch
      return upstream400({
        message: "Invalid request payload",
        type: "invalid_request_error",
        param: null,
        code: "bad_request",
      });
    }

    return upstream200({
      id: "resp_model_switch_ok",
      model: "gpt-6-sol",
      output: [
        {
          type: "message",
          role: "assistant",
          content: [{ type: "output_text", text: "Switched model OK" }],
        },
      ],
    });
  }) as typeof globalThis.fetch;

  try {
    const result = await executor.execute({
      model: "gpt-6-sol",
      body: {
        model: "gpt-6-sol",
        previous_response_id: "resp_prev_model_123",
        input: [
          { type: "message", role: "user", content: [{ type: "input_text", text: "continue" }] },
          {
            type: "reasoning",
            id: "rs_foreign_456",
            encrypted_content: "ANOTHER_MODEL_ENCRYPTED_BLOB",
          },
        ],
      },
      stream: false,
      credentials: { accessToken: "codex-token" },
    });

    assert.equal(fetchCalls.length, 2, "must have retried once after generic 400");
    assert.equal(result.response.status, 200, "recovery attempt must return 200 OK");
    assert.ok(!fetchCalls[1].body.includes("ANOTHER_MODEL_ENCRYPTED_BLOB"));
    assert.ok(!fetchCalls[1].body.includes("resp_prev_model_123"));
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("CodexExecutor does NOT retry if the 400 is unrelated to reasoning replay", async () => {
  const executor = new CodexExecutor();
  const originalFetch = globalThis.fetch;
  let fetchCount = 0;

  globalThis.fetch = (async () => {
    fetchCount++;
    return upstream400({
      message: "Unsupported parameter: 'temperature'.",
      type: "invalid_request_error",
      code: "bad_request",
    });
  }) as typeof globalThis.fetch;

  try {
    const result = await executor.execute({
      model: "gpt-6-sol",
      body: {
        model: "gpt-6-sol",
        input: [
          { type: "message", role: "user", content: [{ type: "input_text", text: "hello" }] },
        ],
      },
      stream: false,
      credentials: { accessToken: "codex-token" },
    });

    assert.equal(fetchCount, 1, "must not retry when no reasoning items are present");
    assert.equal(result.response.status, 400);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
