// GHSA-7gv8-3qvx-rrvj — the Traffic Inspector HTTP_PROXY snippets used to hand
// users `NODE_TLS_REJECT_UNAUTHORIZED=0`, disabling TLS verification for the
// whole process. The HTTP_PROXY listener never decrypts HTTPS (CONNECT is a raw
// TCP tunnel, see src/mitm/inspector/httpProxyServer.ts), so no client needs to
// trust or disable anything: certificates must stay verified end-to-end.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  buildHttpProxySnippets,
  HTTP_PROXY_SNIPPET_LANGS,
} from "../../src/app/(dashboard)/dashboard/tools/traffic-inspector/components/httpProxySnippets.ts";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const componentsDir = path.join(
  repoRoot,
  "src/app/(dashboard)/dashboard/tools/traffic-inspector/components"
);

// Every known way a copy-paste snippet can switch certificate checks off.
const TLS_DISABLE_PATTERNS: Array<[string, RegExp]> = [
  ["NODE_TLS_REJECT_UNAUTHORIZED", /NODE_TLS_REJECT_UNAUTHORIZED/],
  ["rejectUnauthorized", /rejectUnauthorized/],
  ["curl -k / --insecure", /(^|\s)(-k|--insecure)(\s|$)/m],
  ["python verify=False", /verify\s*=\s*False/],
  ["python CERT_NONE", /CERT_NONE/],
  ["PYTHONHTTPSVERIFY=0", /PYTHONHTTPSVERIFY/],
];

test("every language has a snippet", () => {
  const snippets = buildHttpProxySnippets(8080);
  assert.deepEqual([...HTTP_PROXY_SNIPPET_LANGS].sort(), ["bash", "node", "python"]);
  for (const lang of HTTP_PROXY_SNIPPET_LANGS) {
    assert.equal(typeof snippets[lang], "string", `${lang} snippet missing`);
    assert.ok(snippets[lang].length > 0, `${lang} snippet empty`);
  }
});

test("no snippet disables TLS certificate verification (GHSA-7gv8-3qvx-rrvj)", () => {
  const snippets = buildHttpProxySnippets(8080);
  for (const lang of HTTP_PROXY_SNIPPET_LANGS) {
    for (const [label, pattern] of TLS_DISABLE_PATTERNS) {
      assert.doesNotMatch(snippets[lang], pattern, `${lang} snippet disables TLS via ${label}`);
    }
  }
});

test("each snippet still points HTTP_PROXY and HTTPS_PROXY at the inspector port", () => {
  const snippets = buildHttpProxySnippets(18181);
  const proxyUrl = "http://127.0.0.1:18181";
  assert.match(snippets.bash, new RegExp(`export HTTP_PROXY=${proxyUrl}`));
  assert.match(snippets.bash, new RegExp(`export HTTPS_PROXY=${proxyUrl}`));
  assert.match(snippets.python, new RegExp(`os\\.environ\\["HTTP_PROXY"\\] = "${proxyUrl}"`));
  assert.match(snippets.python, new RegExp(`os\\.environ\\["HTTPS_PROXY"\\] = "${proxyUrl}"`));
  assert.match(snippets.node, new RegExp(`process\\.env\\.HTTP_PROXY = "${proxyUrl}"`));
  assert.match(snippets.node, new RegExp(`process\\.env\\.HTTPS_PROXY = "${proxyUrl}"`));
});

test("each snippet tells the user TLS stays verified end-to-end", () => {
  const snippets = buildHttpProxySnippets(8080);
  for (const lang of HTTP_PROXY_SNIPPET_LANGS) {
    assert.match(
      snippets[lang],
      /TLS is verified end-to-end/,
      `${lang} snippet lacks the end-to-end verification note`
    );
  }
});

test("the card renders a visible TLS note, localized in en and pt-BR", () => {
  const card = fs.readFileSync(path.join(componentsDir, "HttpProxySnippetCard.tsx"), "utf8");
  assert.match(card, /t\("httpProxyTlsNote"\)/);
  assert.match(card, /buildHttpProxySnippets\(port\)/);
  assert.doesNotMatch(card, /NODE_TLS_REJECT_UNAUTHORIZED/);

  for (const locale of ["en", "pt-BR"]) {
    const messages = JSON.parse(
      fs.readFileSync(path.join(repoRoot, `src/i18n/messages/${locale}.json`), "utf8")
    );
    const note: unknown = messages.trafficInspector?.httpProxyTlsNote;
    assert.equal(typeof note, "string", `${locale}: trafficInspector.httpProxyTlsNote missing`);
    const text = note as string;
    assert.doesNotMatch(text, /NODE_TLS_REJECT_UNAUTHORIZED/);
    // Points users at scoped CA trust for the decrypting modes, per language.
    assert.match(text, /NODE_EXTRA_CA_CERTS/);
    assert.match(text, /REQUESTS_CA_BUNDLE/);
    assert.match(text, /--cacert/);
  }
});
