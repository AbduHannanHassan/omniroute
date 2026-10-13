import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { load } from "js-yaml";
import { parseOpenapi } from "../../src/lib/agentSkills/openapiParser.ts";

test("published OpenAPI parses and retains the authenticated bounded drilldown contract", () => {
  const specificationPath = fileURLToPath(new URL("../../docs/openapi.yaml", import.meta.url));
  const specification = load(readFileSync(specificationPath, "utf8")) as {
    paths: Record<
      string,
      {
        get: {
          security: unknown;
          parameters: Array<{ name: string; deprecated?: boolean; schema: { maximum?: number } }>;
        };
        delete: { security: unknown };
      }
    >;
  };
  const drilldown = specification.paths["/api/v1/video-bridge/drilldown"];
  assert.deepEqual(drilldown.get.security, [{ BearerAuth: [] }]);
  assert.deepEqual(drilldown.delete.security, [{ BearerAuth: [] }]);
  assert.equal(
    drilldown.get.parameters.find((parameter) => parameter.name === "limit")?.schema.maximum,
    8
  );
  assert.equal(
    drilldown.get.parameters.find((parameter) => parameter.name === "frames")?.deprecated,
    true
  );

  const catalog = parseOpenapi();
  assert.ok(catalog.paths.has("GET /api/keys"), "unrelated API areas must remain available");
  assert.ok(catalog.paths.has("GET /api/v1/video-bridge/drilldown"));
  assert.ok(catalog.paths.has("DELETE /api/v1/video-bridge/drilldown"));
});
