/**
 * GHSA-3w2r-vvhm-8h85 (Audio / Video Bridge variant) — the modality bridges
 * must not widen the caller API key's reach.
 *
 * The Audio Bridge (and the Video Bridge, which reuses its STT boundary and
 * the Vision Bridge describe call for frames) picked the STT / vision model
 * from ALL usable credentials and called OmniRoute's own /v1 routes through a
 * self-loop authenticated with the internal bearer — an unrestricted
 * identity. A key restricted by allowedModels / blockedModels /
 * allowedConnections therefore had its audio (or video frames) sent to a
 * model / connection it may not use. On top of that, /v1/audio/transcriptions
 * itself never applied the key's allowedConnections when it resolved
 * credentials, so even a direct call with a connection-scoped key was served
 * by any connection of the provider.
 *
 * The bridges now filter every candidate by the key's policy (same scope as
 * the Vision Bridge fix, #16476), pass the request through unchanged when no
 * allowed candidate exists, and carry the key's allowed connections into the
 * self-loop; the transcription route bounds credential selection by the key's
 * (possibly self-loop-narrowed) allowed connections.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { useDecollidedMigrationsDir } from "./helpers/decollidedMigrationsDir.ts";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-audio-bridge-ghsa-3w2r-"));
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.API_KEY_SECRET = process.env.API_KEY_SECRET || "ghsa-3w2r-audio-test-secret";
useDecollidedMigrationsDir();

const core = await import("../../src/lib/db/core.ts");
const providersDb = await import("../../src/lib/db/providers.ts");
const apiKeysDb = await import("../../src/lib/db/apiKeys.ts");
const { AudioBridgeGuardrail } = await import("../../src/lib/guardrails/audioBridge.ts");
const { callAudioTranscription } = await import("../../src/lib/guardrails/audioBridgeHelpers.ts");
const { VideoBridgeGuardrail } = await import("../../src/lib/guardrails/videoBridge.ts");
const { clearSelectionCache } = await import("../../src/lib/guardrails/visionBridgeRouter.ts");
const { resolveSelfLoopBearer } =
  await import("../../src/shared/middleware/chatAdmissionIdentity.ts");
const transcriptionRoute = await import("../../src/app/api/v1/audio/transcriptions/route.ts");

/** Header the self-loop uses to carry the caller key's connection scope. */
const SCOPE_HEADER = "x-omniroute-allowed-connections";

const TEXT_ONLY_MODEL = "example/text-only";

type TranscriptionCall = { part: unknown; config: Record<string, unknown> };

function audioPayload(): Record<string, unknown> {
  return {
    model: TEXT_ONLY_MODEL,
    messages: [
      {
        role: "user",
        content: [
          { type: "input_audio", input_audio: { data: "UklGRg==", format: "wav" } },
          { type: "text", text: "What was said?" },
        ],
      },
    ],
  };
}

function audioGuardrail(
  calls: TranscriptionCall[],
  keyScopeDeps: Record<string, unknown>,
  configuredModel = "auto",
  supportsAudio: boolean | null = false
) {
  return new AudioBridgeGuardrail({
    deps: {
      getSettings: async () => ({
        modalityBridgeAudioEnabled: true,
        modalityBridgeAudioModel: configuredModel,
        modalityBridgeCacheEnabled: false,
      }),
      getCapabilities: () => ({ supportsAudio }),
      // Every STT model has credentials on this instance — the key policy is
      // the only thing that may narrow the candidate pool.
      hasUsableCredentials: async () => true,
      callTranscription: async (part, config) => {
        calls.push({ part, config: config as unknown as Record<string, unknown> });
        return "hello from the clip";
      },
      keyScope: keyScopeDeps,
    },
  });
}

test.beforeEach(() => clearSelectionCache());

test.after(async () => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

// ── Audio Bridge guardrail ──────────────────────────────────────────────────

test("GHSA-3w2r audio: transcription never uses an STT model outside the key's allowedModels", async () => {
  const calls: TranscriptionCall[] = [];
  const guardrail = audioGuardrail(calls, {
    isModelAllowed: async (_info: unknown, model: string) => model.startsWith("groq/"),
  });

  const result = await guardrail.preCall(audioPayload(), {
    model: TEXT_ONLY_MODEL,
    apiKeyInfo: { id: "key-groq-only", allowedModels: ["groq/*"] },
  });

  assert.equal(calls.length, 1, "the clip is still transcribed by an allowed model");
  assert.ok(
    String(calls[0].config.model).startsWith("groq/"),
    `STT model ${String(calls[0].config.model)} must be allowed for the key`
  );
  assert.equal(result.meta?.clipsProcessed, 1);
});

test("GHSA-3w2r audio: a configured STT model the key may not use is never called", async () => {
  const calls: TranscriptionCall[] = [];
  const guardrail = audioGuardrail(
    calls,
    { isModelAllowed: async (_info: unknown, model: string) => model.startsWith("groq/") },
    "deepgram/nova-3"
  );

  const body = audioPayload();
  const result = await guardrail.preCall(body, {
    model: TEXT_ONLY_MODEL,
    apiKeyInfo: { id: "key-groq-only-fixed", allowedModels: ["groq/*"] },
  });

  assert.equal(calls.length, 0, "the operator's STT model is outside the key's policy");
  assert.equal(result.block, false);
  assert.equal(result.modifiedPayload, undefined, "payload passes through unchanged");
});

test("GHSA-3w2r audio: no allowed STT model passes the request through unchanged", async () => {
  const calls: TranscriptionCall[] = [];
  const guardrail = audioGuardrail(calls, { isModelAllowed: async () => false });

  const body = audioPayload();
  const result = await guardrail.preCall(body, {
    model: TEXT_ONLY_MODEL,
    apiKeyInfo: { id: "key-blocked", blockedModels: ["*"] },
  });

  assert.equal(calls.length, 0, "no transcription call may be made on behalf of the key");
  assert.equal(result.block, false, "fail-open: the request is not blocked");
  assert.equal(result.modifiedPayload, undefined, "payload passes through unchanged");
  assert.equal(result.meta?.skippedByKeyPolicy, true);
});

test("GHSA-3w2r audio: STT selection stays on the key's connections and the call carries them", async () => {
  const calls: TranscriptionCall[] = [];
  const guardrail = audioGuardrail(calls, {
    // Only groq has a usable connection inside the key's scope.
    getUsableConnections: async (model: string) =>
      model.startsWith("groq/") ? [{ id: "conn-A" }] : [{ id: "conn-B" }],
  });

  await guardrail.preCall(audioPayload(), {
    model: TEXT_ONLY_MODEL,
    apiKeyInfo: { id: "key-conn-A", allowedConnections: ["conn-A"] },
  });

  assert.equal(calls.length, 1);
  assert.ok(String(calls[0].config.model).startsWith("groq/"), `got ${calls[0].config.model}`);
  assert.deepEqual(
    calls[0].config.allowedConnectionIds,
    ["conn-A"],
    "the transcription call carries the key's connection scope"
  );
});

test("GHSA-3w2r audio: an unrestricted key keeps the configured STT model", async () => {
  const calls: TranscriptionCall[] = [];
  const guardrail = audioGuardrail(
    calls,
    {
      isModelAllowed: async () => {
        throw new Error("an unrestricted key must not consult the key policy");
      },
    },
    "deepgram/nova-3"
  );

  await guardrail.preCall(audioPayload(), {
    model: TEXT_ONLY_MODEL,
    apiKeyInfo: { id: "key-open" },
  });

  assert.equal(calls.length, 1);
  assert.equal(calls[0].config.model, "deepgram/nova-3");
  assert.equal(calls[0].config.allowedConnectionIds, undefined);
});

test("GHSA-3w2r audio: the transcription self-loop sends the connection scope header", async () => {
  const captured: Array<Record<string, string>> = [];
  const fetchImpl = (async (_url: string, init: RequestInit) => {
    captured.push(init.headers as Record<string, string>);
    return new Response(JSON.stringify({ text: "scoped" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }) as unknown as typeof fetch;

  const part = {
    messageIndex: 0,
    partIndex: 0,
    ref: "data:audio/wav;base64,UklGRg==",
    shape: "input_audio" as const,
    format: "wav",
  };
  const scoped = await callAudioTranscription(
    part,
    {
      model: "groq/whisper-large-v3",
      timeoutMs: 5_000,
      allowedConnectionIds: ["conn-A", "conn-C"],
    },
    { fetchImpl, getPort: () => 20128, getBearer: () => "self-loop-bearer" }
  );
  const unscoped = await callAudioTranscription(
    part,
    { model: "groq/whisper-large-v3", timeoutMs: 5_000 },
    { fetchImpl, getPort: () => 20128, getBearer: () => "self-loop-bearer" }
  );

  assert.equal(scoped, "scoped");
  assert.equal(unscoped, "scoped");
  assert.equal(captured[0][SCOPE_HEADER], "conn-A,conn-C");
  assert.equal(captured[1][SCOPE_HEADER], undefined, "an unscoped call sends no scope header");
});

// ── Video Bridge (frames via vision describe + STT via audio boundary) ──────

test("GHSA-3w2r video: frame describe and STT both stay inside the key's connections", async () => {
  const visionCalls: Array<Record<string, unknown>> = [];
  const sttCalls: Array<Record<string, unknown>> = [];
  const guardrail = new VideoBridgeGuardrail({
    deps: {
      getSettings: async () => ({
        modalityBridgeVideoEnabled: true,
        modalityBridgeVideoAudioTranscriptionEnabled: true,
        modalityBridgeAudioEnabled: true,
        modalityBridgeAudioModel: "auto",
        modalityBridgeVisionModel: "openai/gpt-4o-mini",
        modalityBridgeCacheEnabled: false,
      }),
      getCapabilities: () => ({ supportsVideo: false as const }),
      hasUsableCredentials: async () => true,
      keyScope: {
        // Only gemini (vision) and groq (STT) have a usable connection in scope.
        getUsableConnections: async (model: string) =>
          model.startsWith("gemini/") || model.startsWith("groq/")
            ? [{ id: "conn-A" }]
            : [{ id: "conn-B" }],
      },
      extractAudio: async () => ({
        audio: { channels: 1, dataUri: "data:audio/wav;base64,UklGRg==", sampleRateHz: 16000 },
        durationSeconds: 2,
      }),
      transcribeAudio: async (_part, config) => {
        sttCalls.push(config as unknown as Record<string, unknown>);
        return { text: "spoken words" };
      },
      extractFrames: async () => ({
        durationSeconds: 2,
        frames: [{ dataUri: "data:image/jpeg;base64,/9j/4AAQ", timestampSeconds: 1 }],
      }),
      callVisionModel: async (_image, config) => {
        visionCalls.push(config as unknown as Record<string, unknown>);
        return "a blue screen";
      },
    },
  });

  await guardrail.preCall(
    {
      model: TEXT_ONLY_MODEL,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "input_video",
              video_url: `data:video/mp4;base64,${Buffer.from("ghsa-3w2r-video").toString("base64")}`,
              audioTranscription: true,
            },
            { type: "text", text: "what happens?" },
          ],
        },
      ],
    },
    {
      model: TEXT_ONLY_MODEL,
      apiKeyInfo: { id: "key-video-conn-A", allowedConnections: ["conn-A"] },
    }
  );

  assert.ok(visionCalls.length > 0, "frames are still described by an allowed model");
  for (const config of visionCalls) {
    assert.ok(String(config.model).startsWith("gemini/"), `vision model ${config.model}`);
    assert.deepEqual(config.allowedConnectionIds, ["conn-A"]);
  }
  assert.equal(sttCalls.length, 1, "the soundtrack is still transcribed by an allowed model");
  assert.ok(String(sttCalls[0].model).startsWith("groq/"), `STT model ${sttCalls[0].model}`);
  assert.deepEqual(sttCalls[0].allowedConnectionIds, ["conn-A"]);
});

// ── /v1/audio/transcriptions route ──────────────────────────────────────────

async function seedOpenAiConnection(name: string, apiKey: string) {
  return providersDb.createProviderConnection({
    provider: "openai",
    authType: "apikey",
    name,
    apiKey,
    isActive: true,
    testStatus: "active",
    providerSpecificData: {},
  });
}

function wavBlob(): Blob {
  const dataLen = 320;
  const b = Buffer.alloc(44 + dataLen);
  b.write("RIFF", 0, "ascii");
  b.writeUInt32LE(36 + dataLen, 4);
  b.write("WAVE", 8, "ascii");
  b.write("fmt ", 12, "ascii");
  b.writeUInt32LE(16, 16);
  b.writeUInt16LE(1, 20);
  b.writeUInt16LE(1, 22);
  b.writeUInt32LE(16000, 24);
  b.writeUInt32LE(32000, 28);
  b.writeUInt16LE(2, 32);
  b.writeUInt16LE(16, 34);
  b.write("data", 36, "ascii");
  b.writeUInt32LE(dataLen, 40);
  return new Blob([b], { type: "audio/wav" });
}

function transcriptionRequest(bearer: string, extraHeaders: Record<string, string> = {}) {
  const fd = new FormData();
  fd.set("model", "openai/whisper-1");
  fd.set("file", wavBlob(), "clip.wav");
  return new Request("http://localhost/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${bearer}`, ...extraHeaders },
    body: fd,
  });
}

/** Captures the upstream Authorization header of every provider call. */
function stubUpstream() {
  const originalFetch = globalThis.fetch;
  const upstreamAuth: string[] = [];
  globalThis.fetch = (async (_url: RequestInfo | URL, init: RequestInit = {}) => {
    upstreamAuth.push(new Headers(init.headers).get("authorization") ?? "");
    return new Response(JSON.stringify({ text: "upstream transcript" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }) as typeof fetch;
  return { upstreamAuth, restore: () => (globalThis.fetch = originalFetch) };
}

test("GHSA-3w2r route: transcriptions honor the key's allowedConnections", async () => {
  // B is created first, so it would win an unrestricted pool selection.
  const connB = await seedOpenAiConnection("route-conn-B", "sk-openai-connection-B");
  const connA = await seedOpenAiConnection("route-conn-A", "sk-openai-connection-A");
  const key = await apiKeysDb.createApiKey("audio-restricted-to-A", "machine-ghsa-3w2r", [], {
    allowedConnections: [connA.id],
  });
  const disjointKey = await apiKeysDb.createApiKey("audio-elsewhere", "machine-ghsa-3w2r", [], {
    allowedConnections: ["00000000-0000-4000-8000-00000000dead"],
  });
  assert.notEqual(connA.id, connB.id);

  const upstream = stubUpstream();
  try {
    for (let i = 0; i < 3; i++) {
      const response = await transcriptionRoute.POST(transcriptionRequest(key.key));
      assert.equal(response.status, 200, await response.clone().text());
    }
    assert.ok(upstream.upstreamAuth.length > 0, "the transcription still runs via A");
    assert.deepEqual(
      [...new Set(upstream.upstreamAuth)],
      ["Bearer sk-openai-connection-A"],
      "transcription must only use the key's allowed connection"
    );

    upstream.upstreamAuth.length = 0;
    const denied = await transcriptionRoute.POST(transcriptionRequest(disjointKey.key));
    assert.notEqual(denied.status, 200, "no allowed connection → no transcription");
    const deniedBody = await denied.text();
    assert.ok(!deniedBody.includes("at /"), "no stack trace leaks");
    assert.equal(upstream.upstreamAuth.length, 0, "no upstream call outside the key's scope");
  } finally {
    upstream.restore();
  }
});

test("GHSA-3w2r route: the self-loop scope header narrows the internal bearer's connections", async () => {
  const bearer = resolveSelfLoopBearer();
  const connections = (await providersDb.getProviderConnections({
    provider: "openai",
    isActive: true,
  })) as Array<{ id: string; name?: string }>;
  const connA = connections.find((conn) => conn.name === "route-conn-A");
  assert.ok(connA, "route-conn-A seeded by the previous test");

  const upstream = stubUpstream();
  try {
    const scoped = await transcriptionRoute.POST(
      transcriptionRequest(bearer, { [SCOPE_HEADER]: connA.id })
    );
    assert.equal(scoped.status, 200, await scoped.clone().text());
    assert.deepEqual(upstream.upstreamAuth, ["Bearer sk-openai-connection-A"]);

    upstream.upstreamAuth.length = 0;
    const disjoint = await transcriptionRoute.POST(
      transcriptionRequest(bearer, { [SCOPE_HEADER]: "00000000-0000-4000-8000-00000000dead" })
    );
    assert.notEqual(disjoint.status, 200);
    assert.equal(upstream.upstreamAuth.length, 0, "a disjoint scope admits no connection");

    // A client key cannot use the header to pick a connection outside its own scope.
    upstream.upstreamAuth.length = 0;
    const clientKey = await apiKeysDb.createApiKey("audio-client", "machine-ghsa-3w2r", [], {
      allowedConnections: [connA.id],
    });
    const others = connections.filter((conn) => conn.id !== connA.id).map((conn) => conn.id);
    const widened = await transcriptionRoute.POST(
      transcriptionRequest(clientKey.key, { [SCOPE_HEADER]: others.join(",") })
    );
    assert.equal(widened.status, 200, await widened.clone().text());
    assert.deepEqual(upstream.upstreamAuth, ["Bearer sk-openai-connection-A"]);
  } finally {
    upstream.restore();
  }
});
