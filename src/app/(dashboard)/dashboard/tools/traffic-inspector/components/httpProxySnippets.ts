/**
 * Copy-paste snippets for the Traffic Inspector HTTP_PROXY listener.
 *
 * The listener (src/mitm/inspector/httpProxyServer.ts) never decrypts HTTPS:
 * a CONNECT request becomes a raw TCP tunnel, so the client still completes
 * TLS with the real upstream and verifies its real certificate. The snippets
 * must therefore only set the proxy variables — never disable certificate
 * verification and never ask the user to trust an extra CA
 * (GHSA-7gv8-3qvx-rrvj: they used to export NODE_TLS_REJECT_UNAUTHORIZED=0,
 * which turns TLS verification off for every connection of the process).
 */

export type HttpProxySnippetLang = "bash" | "python" | "node";

export const HTTP_PROXY_SNIPPET_LANGS: readonly HttpProxySnippetLang[] = ["bash", "python", "node"];

const TLS_NOTE = [
  "HTTPS is tunneled (CONNECT), not decrypted: TLS is verified end-to-end",
  "against the real server certificate. Never disable certificate verification.",
];

export function buildHttpProxySnippets(port: number): Record<HttpProxySnippetLang, string> {
  const proxyUrl = `http://127.0.0.1:${port}`;
  const hashNote = TLS_NOTE.map((line) => `# ${line}`).join("\n");
  const slashNote = TLS_NOTE.map((line) => `// ${line}`).join("\n");

  return {
    bash: [
      hashNote,
      `export HTTP_PROXY=${proxyUrl}`,
      `export HTTPS_PROXY=${proxyUrl}`,
      "# then run your command:",
      "curl https://api.openai.com/v1/models",
    ].join("\n"),
    python: [
      hashNote,
      "import os",
      `os.environ["HTTP_PROXY"] = "${proxyUrl}"`,
      `os.environ["HTTPS_PROXY"] = "${proxyUrl}"`,
      "# then use requests or httpx as usual",
    ].join("\n"),
    node: [
      slashNote,
      `process.env.HTTP_PROXY = "${proxyUrl}";`,
      `process.env.HTTPS_PROXY = "${proxyUrl}";`,
      "// then use fetch / axios / undici as usual",
    ].join("\n"),
  };
}
