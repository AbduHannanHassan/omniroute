import assert from "node:assert/strict";
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { Agent } from "undici";

test("explicit direct fetch ignores a supplied dispatcher without mutating request options", async (t) => {
  const savedDataDir = process.env.DATA_DIR;
  const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "omni-direct-dispatcher-"));
  process.env.DATA_DIR = dataDir;
  let resetDbInstance = () => {};
  t.after(() => {
    resetDbInstance();
    fs.rmSync(dataDir, { recursive: true, force: true });
    if (savedDataDir === undefined) delete process.env.DATA_DIR;
    else process.env.DATA_DIR = savedDataDir;
  });
  ({ resetDbInstance } = await import("../../src/lib/db/core.ts"));
  const { proxyFetch, runWithDirectFetchContext } =
    await import("../../open-sse/utils/proxyFetch.ts");
  const requests: Array<{ method: string; body: string; control: string }> = [];
  const server = http.createServer(async (request, response) => {
    const chunks: Buffer[] = [];
    for await (const chunk of request) chunks.push(Buffer.from(chunk));
    requests.push({
      method: request.method ?? "",
      body: Buffer.concat(chunks).toString("utf8"),
      control: String(request.headers["x-control"] ?? ""),
    });
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("loopback control");
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  t.after(async () => {
    server.closeAllConnections();
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve()))
    );
  });
  const address = server.address();
  assert.ok(address && typeof address !== "string");
  const url = `http://127.0.0.1:${address.port}/control`;
  const dispatcher = new Agent();
  t.after(() => dispatcher.close());
  const options: RequestInit & { dispatcher: Agent } = {
    method: "POST",
    headers: { "content-type": "text/plain", "x-control": "preserved" },
    body: "same request body",
    dispatcher,
    signal: AbortSignal.timeout(10_000),
  };

  // The supplied dispatcher is valid with its own library's fetch implementation.
  const control = await proxyFetch(url, options);
  assert.equal(control.status, 200);
  assert.equal(await control.text(), "loopback control");

  const direct = await runWithDirectFetchContext(() => proxyFetch(url, options));
  assert.equal(direct.status, 200);
  assert.equal(await direct.text(), "loopback control");
  assert.equal(options.dispatcher, dispatcher, "the caller keeps its reusable options");
  assert.deepEqual(requests, [
    { method: "POST", body: "same request body", control: "preserved" },
    { method: "POST", body: "same request body", control: "preserved" },
  ]);
});
