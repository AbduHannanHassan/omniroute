/**
 * The public origin a client used to reach this gateway.
 *
 * `new URL(request.url).origin` is not usable here: the server binds
 * HOSTNAME=0.0.0.0, so Next reports `http://0.0.0.0:<port>` regardless of the
 * address the caller dialed. Requests that hand back a URL on this gateway (media
 * served from generated video/audio) would then be unfetchable.
 *
 * Prefers the proxy's forwarding headers, which is also correct behind a reverse
 * proxy: the Host header is the name the caller used, and X-Forwarded-Proto is the
 * scheme they used, neither of which the app can infer from its own bind address.
 * Header values may be comma-separated when several proxies append, so only the
 * first (client-facing) entry is used.
 */
export function resolveRequestOrigin(request: Request): string {
  const url = new URL(request.url);
  const firstHeaderValue = (name: string): string | null => {
    const raw = request.headers.get(name);
    if (!raw) return null;
    const first = raw.split(",")[0]?.trim();
    return first ? first : null;
  };

  const host = firstHeaderValue("x-forwarded-host") ?? firstHeaderValue("host") ?? url.host;
  const proto = (
    firstHeaderValue("x-forwarded-proto") ?? url.protocol.replace(/:$/, "")
  ).toLowerCase();
  // Only http/https are meaningful for a fetchable URL; anything else (or a
  // malformed value) falls back to the request's own scheme.
  const scheme = proto === "https" || proto === "http" ? proto : url.protocol.replace(/:$/, "");

  return `${scheme}://${host}`;
}
