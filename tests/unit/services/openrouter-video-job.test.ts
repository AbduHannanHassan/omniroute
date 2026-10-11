import test from "node:test";
import assert from "node:assert/strict";
import {
  getVideoJobPreset,
  handleVideoJobGeneration,
} from "../../../open-sse/handlers/videoGeneration/job.ts";
import {
  ANON_OWNER,
  mediaOwnerTag,
  ownerTagForApiKey,
  pruneExpiredMedia,
  readMediaFile,
  resolveMediaPath,
  writeMediaFile,
} from "../../../open-sse/handlers/videoGeneration/mediaStore.ts";
import { getVideoProvider } from "../../../open-sse/config/videoRegistry.ts";
import { runWithCallLogApiKeyContext } from "../../../src/lib/usage/callLogApiKeyContext.ts";

test("the openrouter provider is wired to the async job preset", () => {
  // OpenRouter answers POST /videos with 202 + a job id, so it must NOT use the
  // synchronous openai-video handler — that returned HTTP 200 with an empty
  // `data` array, which the combo reported as success while producing no video.
  const provider = getVideoProvider("openrouter");
  assert.ok(provider, "openrouter video provider should be registered");
  assert.equal(provider.format, "openrouter-video-job");
  assert.equal(provider.baseUrl, "https://openrouter.ai/api/v1");
  assert.ok(
    getVideoJobPreset(provider.format),
    "the format must resolve to a job preset for the dispatcher to route it"
  );
});

test("openrouter preset polls to completion and serves the auth-gated result as a URL", async () => {
  const preset = getVideoJobPreset("openrouter-video-job");
  assert.ok(preset);

  // Mirrors OpenRouter's documented contract: submit -> { id, polling_url, status },
  // poll -> status: "completed" with `unsigned_urls: ["https://…"]` (the
  // string-array form readResultUrl unwraps).
  assert.equal(preset.baseUrlFallback, "https://openrouter.ai/api/v1");
  assert.equal(preset.taskIdPath, "id");
  assert.equal(preset.statusPath, "status");
  assert.deepEqual(preset.statusDone, ["completed"]);
  assert.deepEqual(preset.resultPath, "unsigned_urls");
  // cancelled/expired are terminal; without them the loop would poll a dead job
  // until maxPolls ran out and then report a misleading 504.
  assert.ok(preset.statusFailed.includes("cancelled"));
  assert.ok(preset.statusFailed.includes("expired"));
  // The content endpoint 401s without the upstream key, so the result must be
  // fetched and re-served rather than handed back as an unfetchable URL.
  assert.equal(preset.resultNeedsAuth, true);

  const originalFetch = globalThis.fetch;
  const calls: Array<{ url: string; method: string; body: string }> = [];
  const videoBytes = new Uint8Array([0, 0, 0, 32, 102, 116, 121, 112, 105, 115, 111, 109]);
  globalThis.fetch = async (input, init) => {
    const url = String(input);
    const method = String(init?.method ?? "GET");
    calls.push({ url, method, body: String(init?.body ?? "") });
    if (method === "POST") {
      return new Response(
        JSON.stringify({
          id: "job-123",
          polling_url: "https://openrouter.ai/api/v1/videos/job-123",
          status: "pending",
        }),
        { status: 202, headers: { "content-type": "application/json" } }
      );
    }
    if (url.endsWith("/content?index=0")) {
      return new Response(videoBytes, {
        status: 200,
        headers: { "content-type": "video/mp4" },
      });
    }
    return new Response(
      JSON.stringify({
        id: "job-123",
        status: "completed",
        unsigned_urls: ["https://openrouter.ai/api/v1/videos/job-123/content?index=0"],
      }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  };

  try {
    const result = await handleVideoJobGeneration({
      model: "alibaba/wan-3.0",
      presetName: "openrouter-video-job",
      body: { prompt: "a paper boat", duration: 5, aspect_ratio: "16:9" },
      credentials: { apiKey: "sk-test" },
      pollIntervalMs: 1,
      mediaOrigin: "https://gw.example",
    });

    assert.equal(result.success, true);
    const payload = (
      result.data as { data: Array<{ b64_json?: string; url?: string; format: string }> }
    ).data;
    assert.equal(payload.length, 1);

    // A servable URL, not base64: the shape must match what fal returns for
    // slots 1-2, or a combo's failover path breaks clients that handle the happy path.
    assert.equal(payload[0].b64_json, undefined);
    assert.equal(payload[0].format, "mp4");
    assert.match(
      payload[0].url!,
      /^https:\/\/gw\.example\/api\/v1\/media\/([a-f0-9]{16}|anon)__[a-f0-9]{32}\.mp4$/
    );

    // ...and the bytes are really on disk behind that URL.
    const mediaId = payload[0].url!.split("/").pop()!;
    assert.ok(resolveMediaPath(mediaId), "stored media should resolve");
    assert.equal(readMediaFile(mediaId)?.length, videoBytes.length);

    // A trailing slash on the origin must not produce a doubled separator.
    assert.equal(calls[0].method, "POST");
    assert.equal(calls[0].url, "https://openrouter.ai/api/v1/videos");
    assert.equal(calls[1].method, "GET");
    assert.equal(calls[1].url, "https://openrouter.ai/api/v1/videos/job-123");
    assert.equal(calls[2].url, "https://openrouter.ai/api/v1/videos/job-123/content?index=0");

    // Duration is a plain integer on this API, and extras are passed through.
    const submitBody = JSON.parse(calls[0].body);
    assert.equal(submitBody.model, "alibaba/wan-3.0");
    assert.equal(submitBody.duration, 5);
    assert.equal(submitBody.aspect_ratio, "16:9");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("media ids carry a digested owner tag, never the key id itself", () => {
  const apiKeyId = "8fa9208b-27e2-4bba-a8b5-043acb003a08";
  const tag = ownerTagForApiKey(apiKeyId);

  assert.match(tag, /^[a-f0-9]{16}$/);
  assert.equal(tag.includes("8fa9208b"), false, "must not leak the key id");
  // Stable for the same key, and different across keys — the whole basis for scoping.
  assert.equal(ownerTagForApiKey(apiKeyId), tag);
  assert.notEqual(ownerTagForApiKey("some-other-key"), tag);
  // No key at all is its own bucket, not an empty tag inside the pattern.
  assert.equal(ownerTagForApiKey(null), ANON_OWNER);
  assert.equal(ownerTagForApiKey(undefined), ANON_OWNER);
  assert.equal(ownerTagForApiKey("   "), ANON_OWNER);

  const stored = writeMediaFile(Buffer.from("bytes"), "mp4", tag);
  assert.ok(stored, "media should be stored");
  assert.equal(stored.startsWith(`${tag}__`), true);
  assert.equal(mediaOwnerTag(stored!), tag);
  assert.ok(resolveMediaPath(stored!), "stored id should resolve");

  // An id whose owner segment is missing or malformed must not resolve, since the
  // serving route takes the id straight from the URL.
  for (const bad of [
    stored!.slice(stored!.indexOf("__") + 2),
    `not-a-tag__${stored!.split("__")[1]}`,
  ]) {
    assert.equal(mediaOwnerTag(bad), null, `should reject: ${bad}`);
    assert.equal(resolveMediaPath(bad), null, `should not resolve: ${bad}`);
  }
});

test("expired media is pruned, fresh media is kept", () => {
  const bytes = Buffer.from("prune-me");
  const stale = writeMediaFile(bytes, "mp4", ANON_OWNER);
  const fresh = writeMediaFile(bytes, "mp4", ANON_OWNER);
  assert.ok(stale && fresh);

  // Nothing is expired yet, so a sweep at "now" removes nothing.
  assert.equal(pruneExpiredMedia(), 0);
  assert.ok(resolveMediaPath(fresh!), "fresh file must survive");

  // `pruneExpiredMedia(now)` treats `now` as the clock; push it past the retention
  // window (CALL_LOG_RETENTION_DAYS, 7 by default) and every file is expired.
  const wellPastRetention = Date.now() + 365 * 24 * 60 * 60 * 1000;
  assert.ok(pruneExpiredMedia(wellPastRetention) >= 2, "expired files should be removed");
  assert.equal(resolveMediaPath(stale!), null, "stale file should be gone");
  assert.equal(resolveMediaPath(fresh!), null, "fresh file should be gone too, at that clock");
});

test("the api-key context decides the stored media owner", async () => {
  // End-to-end for the two scoping pieces: the route binds identity via
  // runWithCallLogApiKeyContext, and the job stores its digest in the media id so the
  // serving route can scope by key without a lookup table.
  const apiKeyId = "11111111-2222-3333-4444-555555555555";
  const expectedTag = ownerTagForApiKey(apiKeyId);
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (_input, init) =>
    String(init?.method ?? "GET") === "POST"
      ? new Response(JSON.stringify({ id: "job-owned", status: "pending" }), {
          status: 202,
          headers: { "content-type": "application/json" },
        })
      : new Response(
          JSON.stringify({
            id: "job-owned",
            status: "completed",
            unsigned_urls: ["https://openrouter.ai/api/v1/videos/job-owned/content"],
          }),
          { status: 200, headers: { "content-type": "application/json" } }
        );

  try {
    const result = await runWithCallLogApiKeyContext({ apiKeyId, apiKeyName: "main" }, () =>
      handleVideoJobGeneration({
        model: "alibaba/wan-3.0-owned",
        presetName: "openrouter-video-job",
        body: { prompt: "x" },
        credentials: { apiKey: "sk-test" },
        pollIntervalMs: 1,
        mediaOrigin: "https://gw.example",
      })
    );
    assert.equal(result.success, true);

    const url = (result.data as { data: Array<{ url: string }> }).data[0].url;
    const mediaId = url.split("/").pop()!;
    assert.equal(mediaOwnerTag(mediaId), expectedTag);
    // The raw key id must not appear anywhere in what the client receives.
    assert.equal(url.includes(apiKeyId), false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("malformed media ids never resolve outside the media directory", () => {
  // The serving route takes its id straight from the URL, so traversal attempts
  // must fail closed rather than escaping MEDIA_DIR.
  for (const bad of [
    "../storage.sqlite",
    "..%2fstorage.sqlite",
    "/etc/passwd",
    "..\\storage.sqlite",
    "abc.mp4",
    `${"a".repeat(32)}.mp4/../../x.mp4`,
    `${"a".repeat(32)}.mp4`,
  ]) {
    assert.equal(resolveMediaPath(bad), null, `should reject: ${bad}`);
    assert.equal(readMediaFile(bad), null, `should not read: ${bad}`);
  }
});

test("openrouter preset fails fast on a cancelled job", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (_input, init) =>
    String(init?.method ?? "GET") === "POST"
      ? new Response(JSON.stringify({ id: "job-9", status: "pending" }), {
          status: 202,
          headers: { "content-type": "application/json" },
        })
      : new Response(JSON.stringify({ id: "job-9", status: "cancelled" }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });

  try {
    const result = await handleVideoJobGeneration({
      model: "alibaba/wan-3.0",
      presetName: "openrouter-video-job",
      body: { prompt: "x" },
      credentials: { apiKey: "sk-test" },
      pollIntervalMs: 1,
      mediaOrigin: "https://gw.example",
    });
    assert.equal(result.success, false);
    assert.equal(result.status, 502);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
