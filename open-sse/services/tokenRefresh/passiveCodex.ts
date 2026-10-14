import { buildErrorBody } from "../../utils/error.ts";
import { parseTokenExpiryMs } from "@/lib/tokenHealthCheckExpiry";

/** Issue #16471, slice A: registry Codex identity and its public alias. */
export const PASSIVE_CODEX_IDS = ["codex", "cx"] as const;
export const PASSIVE_REFRESH_ENV = "OMNIROUTE_TOKEN_REFRESH_PASSIVE_PROVIDERS";
export const PASSIVE_REFRESH_MESSAGE =
  "Codex token refresh is passive on this instance. Log in on the active instance and sync the connection rows, then retry.";

export function parsePassiveProviders(value: string | undefined): string[] {
  return [
    ...new Set(
      (value || "")
        .split(",")
        .map((id) => id.trim().toLowerCase())
        .filter(Boolean)
    ),
  ];
}

function isCodexId(provider: unknown): boolean {
  return (
    typeof provider === "string" &&
    PASSIVE_CODEX_IDS.some((id) => id === provider.trim().toLowerCase())
  );
}

export function passiveProvidersError(value: string | undefined): string | undefined {
  const unsupported = parsePassiveProviders(value).filter((id) => !isCodexId(id));
  if (unsupported.length) {
    return `${PASSIVE_REFRESH_ENV}: unsupported ids: ${unsupported.join(", ")}. Supported ids (Codex slice): ${PASSIVE_CODEX_IDS.join(", ")}`;
  }
}

/** Unknown ids are never made passive, even when startup validation was bypassed. */
export function isPassiveCodex(provider: unknown): boolean {
  return (
    isCodexId(provider) && parsePassiveProviders(process.env[PASSIVE_REFRESH_ENV]).some(isCodexId)
  );
}

export function passiveOutcome() {
  return {
    error: "passive_refresh",
    code: "passive_refresh",
    retryable: true,
    status: 401,
  } as const;
}

export function isPassiveOutcome(value: unknown): value is ReturnType<typeof passiveOutcome> {
  return (
    !!value && typeof value === "object" && "code" in value && value.code === "passive_refresh"
  );
}

export function passiveResponse(status = 401): Response {
  const message =
    status === 503
      ? "This replica has no fresh synchronized Codex token yet; retry."
      : PASSIVE_REFRESH_MESSAGE;
  const body = buildErrorBody(status, message, undefined, {
    code: "passive_refresh",
  });
  return Response.json(
    status === 409 ? { error: body.error.message, code: body.error.code } : body,
    { status, ...(status === 503 ? { headers: { "Retry-After": "30" } } : {}) }
  );
}

export function passiveTestOutcome() {
  return {
    ...passiveOutcome(),
    valid: false,
    error: PASSIVE_REFRESH_MESSAGE,
    statusCode: 401,
    refreshed: false,
  };
}

export function passiveExecutionResult(body: unknown) {
  return { response: passiveResponse(), url: "", headers: {}, transformedBody: body };
}

export function passiveError(status = 401): Error & { status: number; code: string } {
  return Object.assign(new Error(PASSIVE_REFRESH_MESSAGE), { status, code: "passive_refresh" });
}

type CredentialSnapshot = {
  connectionId?: string;
  id?: string;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: string | null;
  tokenExpiresAt?: string | null;
  idToken?: string;
  providerSpecificData?: Record<string, unknown>;
};

export function tokenRereader(
  connectionId: string,
  read: (id: string) => Promise<Record<string, unknown> | null>
) {
  return connectionId
    ? async () => {
        const latest = await read(connectionId);
        return typeof latest?.refreshToken === "string" ? latest.refreshToken : null;
      }
    : null;
}

/** Read only: never invoke persistence, rotation maps, retry counters or refresh lanes. */
export async function resolvePassiveCodex(credentials: CredentialSnapshot, reactive = false) {
  const id = credentials?.connectionId || credentials?.id;
  if (!id) return passiveOutcome();
  try {
    const { getProviderConnectionById } = await import("@/lib/db/providers");
    const stored = (await getProviderConnectionById(id)) as
      (CredentialSnapshot & { provider: string }) | null;
    const expiresAt = stored?.tokenExpiresAt || stored?.expiresAt;
    const expiresAtMs = parseTokenExpiryMs(expiresAt);
    if (
      !stored ||
      !isCodexId(stored.provider) ||
      !stored.accessToken ||
      !(expiresAtMs > Date.now())
    )
      return passiveOutcome();
    if (reactive && stored.accessToken === credentials.accessToken) return passiveOutcome();
    return {
      accessToken: stored.accessToken,
      refreshToken: stored.refreshToken,
      expiresAt: new Date(expiresAtMs).toISOString(),
      tokenExpiresAt: new Date(expiresAtMs).toISOString(),
      idToken: stored.idToken,
      providerSpecificData: stored.providerSpecificData,
    };
  } catch (error) {
    console.debug(
      "[TOKEN_REFRESH] Passive Codex reread failed:",
      error instanceof Error ? error.name : "unknown"
    );
    return passiveOutcome();
  }
}
