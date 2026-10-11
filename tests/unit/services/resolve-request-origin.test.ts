import test from "node:test";
import assert from "node:assert/strict";
import { resolveRequestOrigin } from "../../../src/shared/utils/resolveRequestOrigin.ts";

/**
 * The bug this guards: the server binds HOSTNAME=0.0.0.0, so Next reports
 * `http://0.0.0.0:<port>` as request.url regardless of the address the caller
 * dialed. Media URLs built from it are unfetchable.
 */
test("prefers the proxy's forwarded host and proto over the bind address", () => {
  const request = new Request("http://0.0.0.0:20128/api/v1/videos/generations", {
    headers: {
      "x-forwarded-host": "assistant.fundere.app",
      "x-forwarded-proto": "https",
    },
  });
  assert.equal(resolveRequestOrigin(request), "https://assistant.fundere.app");
});

test("falls back to the Host header when there is no forwarded host", () => {
  // Caddy preserves the original Host (`header_up Host {host}`) and only adds
  // X-Forwarded-Proto, so this is the production path behind the reverse proxy.
  const request = new Request("http://0.0.0.0:20128/api/v1/videos/generations", {
    headers: { "x-forwarded-proto": "https", host: "assistant.fundere.app" },
  });
  assert.equal(resolveRequestOrigin(request), "https://assistant.fundere.app");
});

test("uses only the first entry of comma-separated forwarding headers", () => {
  // Several proxies may append; the first entry is the client-facing one.
  const request = new Request("http://0.0.0.0:20128/api/v1/videos/generations", {
    headers: {
      "x-forwarded-host": "public.example, internal.example",
      "x-forwarded-proto": "https, http",
    },
  });
  assert.equal(resolveRequestOrigin(request), "https://public.example");
});

test("keeps the request's own scheme for a direct local call", () => {
  const request = new Request("http://127.0.0.1:20129/api/v1/videos/generations");
  assert.equal(resolveRequestOrigin(request), "http://127.0.0.1:20129");
});

test("ignores a nonsense forwarded proto rather than emitting a broken URL", () => {
  const request = new Request("http://127.0.0.1:20129/api/v1/videos/generations", {
    headers: { "x-forwarded-proto": "gopher" },
  });
  assert.equal(resolveRequestOrigin(request), "http://127.0.0.1:20129");
});

test("never returns a bare bind address when a host header is present", () => {
  // The regression in full: same request.url, but now servable.
  const request = new Request("http://0.0.0.0:20128/api/v1/media/abc.mp4", {
    headers: { "x-forwarded-proto": "https", host: "gateway.example" },
  });
  const origin = resolveRequestOrigin(request);
  assert.equal(origin.includes("0.0.0.0"), false, "must not leak the bind address");
  assert.equal(origin, "https://gateway.example");
});
