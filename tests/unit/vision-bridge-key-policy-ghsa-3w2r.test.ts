/**
 * GHSA-3w2r-vvhm-8h85 — the Vision Bridge must not widen the caller API key's
 * reach.
 *
 * When the routed model lacks vision, the bridge picks a vision model from ALL
 * usable credentials and describes the image through a self-loop authenticated
 * with the internal bearer — not the caller key. A key restricted by
 * allowedModels / blockedModels / allowedConnections therefore had its image
 * sent to a model/connection it may not use. The bridge now filters every
 * candidate by the key's policy, passes the request through unchanged when no
 * allowed candidate exists, and carries the key's allowed connections into the
 * self-loop describe call.
 */
import { test } from "node:test";
import assert from "node:assert/strict";

import { useDecollidedMigrationsDir } from "./helpers/decollidedMigrationsDir.ts";

useDecollidedMigrationsDir();

const { VisionBridgeGuardrail } = await import("../../src/lib/guardrails/visionBridge.ts");
const { clearSelectionCache } = await import("../../src/lib/guardrails/visionBridgeRouter.ts");
const { callVisionModel } = await import("../../src/lib/guardrails/visionBridgeHelpers.ts");
const { resolveSelfLoopBearer } =
  await import("../../src/shared/middleware/chatAdmissionIdentity.ts");

/** Header the describe self-loop uses to carry the caller key's connection scope. */
const SCOPE_HEADER = "x-omniroute-allowed-connections";

const TEXT_ONLY_MODEL = "some/text-only-model";
const CONFIGURED_VISION_MODEL = "openai/gpt-4o-mini";

function imageBody(uniqueRef: string): Record<string, unknown> {
  return {
    model: TEXT_ONLY_MODEL,
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "what is in the image?" },
          {
            type: "image_url",
            image_url: {
              url: `data:image/png;base64,${Buffer.from(uniqueRef).toString("base64")}`,
            },
          },
        ],
      },
    ],
  };
}

type DescribeCall = { model: string; config: Record<string, unknown> };

function describeGuardrail(
  calls: DescribeCall[],
  keyScopeDeps: Record<string, unknown>,
  mode: "describe" | "auto" = "describe"
) {
  return new VisionBridgeGuardrail({
    deps: {
      getSettings: async () => ({
        modalityBridgeVisionMode: mode,
        modalityBridgeVisionModel: CONFIGURED_VISION_MODEL,
        modalityBridgeCacheEnabled: false,
      }),
      callVisionModel: async (_image, config) => {
        calls.push({ model: config.model, config: config as unknown as Record<string, unknown> });
        return "a cat";
      },
      // Every model has credentials on this instance — the key policy is the
      // only thing that may narrow the candidate pool.
      hasUsableCredentials: async () => true,
      keyScope: keyScopeDeps,
    },
  });
}

test.beforeEach(() => clearSelectionCache());

test("GHSA-3w2r: describe never uses a vision model outside the key's allowedModels", async () => {
  const calls: DescribeCall[] = [];
  const guardrail = describeGuardrail(calls, {
    isModelAllowed: async (_info: unknown, model: string) => model.startsWith("gemini/"),
  });

  const result = await guardrail.preCall(imageBody("ghsa-3w2r-allowed-models"), {
    model: TEXT_ONLY_MODEL,
    apiKeyInfo: { id: "key-gemini-only", allowedModels: ["gemini/*"] },
  });

  assert.equal(calls.length, 1, "the image is still described by an allowed model");
  assert.ok(
    calls[0].model.startsWith("gemini/"),
    `describe model ${calls[0].model} must be allowed for the key`
  );
  assert.equal(result.meta?.imagesProcessed, 1);
});

test("GHSA-3w2r: describe passes the request through unchanged when no vision model is allowed", async () => {
  const calls: DescribeCall[] = [];
  const guardrail = describeGuardrail(calls, { isModelAllowed: async () => false });

  const body = imageBody("ghsa-3w2r-nothing-allowed");
  const result = await guardrail.preCall(body, {
    model: TEXT_ONLY_MODEL,
    apiKeyInfo: { id: "key-blocked", blockedModels: ["*"] },
  });

  assert.equal(calls.length, 0, "no describe call may be made on behalf of the key");
  assert.equal(result.block, false, "fail-open: the request is not blocked");
  assert.equal(result.modifiedPayload, undefined, "payload passes through unchanged");
});

test("GHSA-3w2r: describe never selects a model reachable only through a disallowed connection", async () => {
  const calls: DescribeCall[] = [];
  const guardrail = describeGuardrail(calls, {
    // Only gemini has a usable connection inside the key's scope.
    getUsableConnections: async (model: string) =>
      model.startsWith("gemini/") ? [{ id: "conn-A" }] : [{ id: "conn-B" }],
  });

  await guardrail.preCall(imageBody("ghsa-3w2r-allowed-connections"), {
    model: TEXT_ONLY_MODEL,
    apiKeyInfo: { id: "key-conn-A", allowedConnections: ["conn-A"] },
  });

  assert.equal(calls.length, 1);
  assert.ok(calls[0].model.startsWith("gemini/"), `got ${calls[0].model}`);
  assert.deepEqual(
    calls[0].config.allowedConnectionIds,
    ["conn-A"],
    "the describe call carries the key's connection scope"
  );
  assert.equal(
    calls[0].config.routeThroughOmniRoute,
    true,
    "connection-scoped describes go through OmniRoute so connections stay authoritative"
  );
});

test("GHSA-3w2r: reroute never targets a vision model outside the key's policy", async () => {
  const calls: DescribeCall[] = [];
  const guardrail = describeGuardrail(
    calls,
    { isModelAllowed: async (_info: unknown, model: string) => model.startsWith("gemini/") },
    "auto"
  );

  const result = await guardrail.preCall(imageBody("ghsa-3w2r-reroute"), {
    model: TEXT_ONLY_MODEL,
    apiKeyInfo: { id: "key-gemini-only-reroute", allowedModels: ["gemini/*"] },
  });

  if (result.meta?.rerouted === true) {
    assert.ok(
      String(result.meta.toModel).startsWith("gemini/"),
      `reroute target ${String(result.meta.toModel)} must be allowed for the key`
    );
  } else {
    for (const call of calls) assert.ok(call.model.startsWith("gemini/"), call.model);
  }
});

test("GHSA-3w2r: an unrestricted key keeps the configured describe model", async () => {
  const calls: DescribeCall[] = [];
  const guardrail = describeGuardrail(calls, {
    isModelAllowed: async () => {
      throw new Error("an unrestricted key must not consult the key policy");
    },
  });

  await guardrail.preCall(imageBody("ghsa-3w2r-unrestricted"), {
    model: TEXT_ONLY_MODEL,
    apiKeyInfo: { id: "key-open" },
  });

  assert.equal(calls.length, 1);
  assert.equal(calls[0].model, CONFIGURED_VISION_MODEL);
  assert.equal(calls[0].config.allowedConnectionIds, undefined);
});

test("GHSA-3w2r: callVisionModel filters its own selection and sends the connection scope", async () => {
  const captured: Array<{ model: string; headers: Record<string, string> }> = [];
  const fetchImpl = (async (_url: string, init: RequestInit) => {
    const body = JSON.parse(String(init.body)) as { model: string };
    captured.push({ model: body.model, headers: init.headers as Record<string, string> });
    return new Response(JSON.stringify({ choices: [{ message: { content: "a dog" } }] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }) as unknown as typeof fetch;

  const description = await callVisionModel("data:image/png;base64,aGVsbG8=", {
    model: CONFIGURED_VISION_MODEL,
    prompt: "describe",
    timeoutMs: 5_000,
    maxImages: 1,
    fetchImpl,
    routeThroughOmniRoute: true,
    allowedConnectionIds: ["conn-A"],
    cacheScope: "key:helpers",
    credentialCheck: async (model: string) => model.startsWith("gemini/"),
  });

  assert.equal(description, "a dog");
  assert.equal(captured.length, 1);
  assert.ok(captured[0].model.startsWith("gemini/"), `got ${captured[0].model}`);
  assert.equal(captured[0].headers[SCOPE_HEADER], "conn-A");
});

test("GHSA-3w2r: the self-loop connection scope narrows only the internal bearer", async () => {
  const { applySelfLoopConnectionScope, SELF_LOOP_ALLOWED_CONNECTIONS_HEADER } =
    await import("../../src/shared/middleware/selfLoopConnectionScope.ts");
  assert.equal(SELF_LOOP_ALLOWED_CONNECTIONS_HEADER, SCOPE_HEADER);
  const selfLoop = new Request("http://localhost/v1/chat/completions", {
    headers: {
      authorization: `Bearer ${resolveSelfLoopBearer()}`,
      [SELF_LOOP_ALLOWED_CONNECTIONS_HEADER]: "conn-A, conn-C",
    },
  });
  const info = { id: "self-loop" };
  assert.deepEqual(applySelfLoopConnectionScope(selfLoop, info)?.allowedConnections, [
    "conn-A",
    "conn-C",
  ]);
  assert.equal((info as Record<string, unknown>).allowedConnections, undefined, "no mutation");

  // Intersection with an existing scope never widens it.
  const narrowed = applySelfLoopConnectionScope(selfLoop, {
    id: "env",
    allowedConnections: ["conn-C", "conn-Z"],
  });
  assert.deepEqual(narrowed?.allowedConnections, ["conn-C"]);
  const disjoint = applySelfLoopConnectionScope(selfLoop, {
    id: "env",
    allowedConnections: ["conn-Z"],
  });
  assert.equal(disjoint?.allowedConnections?.length, 1);
  assert.notEqual(disjoint?.allowedConnections?.[0], "conn-Z", "disjoint scope admits nothing");

  // Any other bearer cannot use the header.
  const external = new Request("http://localhost/v1/chat/completions", {
    headers: {
      authorization: "Bearer sk-some-client-key",
      [SELF_LOOP_ALLOWED_CONNECTIONS_HEADER]: "conn-A",
    },
  });
  const untouched = { id: "client" };
  assert.equal(applySelfLoopConnectionScope(external, untouched), untouched);
});
