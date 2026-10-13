import { createHash, randomBytes } from "crypto";
import {
  createSyncTokenRecord,
  getSyncTokenByHash,
  listSyncTokens,
  revokeSyncToken,
  touchSyncTokenLastUsed,
  type SyncTokenRecord,
} from "@/lib/db/syncTokens";
import { getApiKeyById, getApiKeyMetadata } from "@/lib/db/apiKeys";
import { getSettings } from "@/lib/db/settings";
import { getStoredManagementPassword } from "@/lib/auth/managementPassword";

/**
 * Sync tokens unlock GET /api/sync/bundle, which carries every provider credential in
 * plaintext. GHSA-2452-4qrm-6p4w hardening: a token is only accepted while
 *   - it is not revoked and not past `expiresAt` (default 30 days, max 365),
 *   - it was minted after this hardening (`issuerKind` set — legacy rows are rejected),
 *   - the admin password is the one in force when it was minted (`passwordFingerprint`),
 *   - the API key recorded as its issuer (`syncApiKeyId`), if any, is still live.
 */
export type SyncTokenIssuerKind = "dashboard_session" | "local_cli" | "open_instance";

const DAY_MS = 24 * 60 * 60 * 1000;
export const SYNC_TOKEN_DEFAULT_TTL_MS = 30 * DAY_MS;
export const SYNC_TOKEN_MAX_TTL_MS = 365 * DAY_MS;

const TTL_UNIT_MS: Record<string, number> = { m: 60 * 1000, h: 60 * 60 * 1000, d: DAY_MS };

/**
 * Parse a `<n>m|h|d` TTL (the format `omniroute sync tokens create --ttl` sends) into
 * milliseconds. Returns null when the value is malformed, zero, or above the 365-day cap.
 */
export function parseSyncTokenTtl(ttl: string): number | null {
  const match = /^(\d{1,6})([mhd])$/.exec(ttl.trim().toLowerCase());
  if (!match) return null;
  const ms = Number(match[1]) * TTL_UNIT_MS[match[2]];
  if (!Number.isFinite(ms) || ms <= 0 || ms > SYNC_TOKEN_MAX_TTL_MS) return null;
  return ms;
}

/**
 * Digest of the stored admin password (hash) — any rotation, from the dashboard, the
 * require-login route or `omniroute reset-password`, changes it. Only a digest of the
 * already-hashed value is stored, never the password itself.
 */
export async function getCurrentSyncPasswordFingerprint(): Promise<string> {
  const settings = (await getSettings()) as Record<string, unknown>;
  const stored = getStoredManagementPassword(settings);
  return createHash("sha256")
    .update(`omniroute:sync-token-password-binding:v1:${stored}`)
    .digest("hex");
}

async function isIssuingApiKeyLive(apiKeyId: string): Promise<boolean> {
  const key = (await getApiKeyById(apiKeyId)) as Record<string, unknown> | null;
  if (!key) return false;
  if (key.isActive === false || key.isBanned === true) return false;
  if (typeof key.revokedAt === "string" && key.revokedAt.trim() !== "") return false;
  if (typeof key.expiresAt === "string" && key.expiresAt.trim() !== "") {
    const expiresMs = Date.parse(key.expiresAt);
    if (Number.isFinite(expiresMs) && expiresMs <= Date.now()) return false;
  }
  return true;
}

function normalizeToken(rawToken: string | null | undefined) {
  if (typeof rawToken !== "string") return null;
  const token = rawToken.trim();
  return token.length > 0 ? token : null;
}

export function hashSyncToken(rawToken: string) {
  // CodeQL: Intentionally SHA-256, NOT password hashing. Sync tokens are
  // high-entropy random values (osync_ + 32 random bytes) — not user passwords.
  // codeql[js/insufficient-password-hash]
  return createHash("sha256").update(rawToken).digest("hex"); // nosemgrep: insufficient-password-hash
}

export function generatePlaintextSyncToken() {
  return `osync_${randomBytes(32).toString("base64url")}`;
}

export async function issueSyncToken(params: {
  name: string;
  issuerKind: SyncTokenIssuerKind;
  syncApiKeyId?: string | null;
  ttlMs?: number | null;
}) {
  const ttlMs =
    typeof params.ttlMs === "number" && params.ttlMs > 0
      ? Math.min(params.ttlMs, SYNC_TOKEN_MAX_TTL_MS)
      : SYNC_TOKEN_DEFAULT_TTL_MS;
  const plaintextToken = generatePlaintextSyncToken();
  const record = await createSyncTokenRecord({
    name: params.name,
    tokenHash: hashSyncToken(plaintextToken),
    syncApiKeyId: params.syncApiKeyId || null,
    expiresAt: new Date(Date.now() + ttlMs).toISOString(),
    issuerKind: params.issuerKind,
    passwordFingerprint: await getCurrentSyncPasswordFingerprint(),
  });

  return {
    token: plaintextToken,
    record,
  };
}

export async function validateSyncToken(rawToken: string | null | undefined) {
  const token = normalizeToken(rawToken);
  if (!token) return null;

  const record = await getSyncTokenByHash(hashSyncToken(token));
  if (!record || record.revokedAt) return null;

  // Legacy rows (minted before GHSA-2452 hardening, possibly by a manage-scoped API key)
  // carry no issuer binding and no expiry — never accept them.
  if (!record.issuerKind || !record.expiresAt || !record.passwordFingerprint) return null;

  const expiresMs = Date.parse(record.expiresAt);
  if (!Number.isFinite(expiresMs) || expiresMs <= Date.now()) return null;

  if (record.passwordFingerprint !== (await getCurrentSyncPasswordFingerprint())) return null;

  if (record.syncApiKeyId && !(await isIssuingApiKeyLive(record.syncApiKeyId))) return null;

  return record;
}

export async function markSyncTokenUsed(record: SyncTokenRecord) {
  await touchSyncTokenLastUsed(record.id);
}

export async function listSyncTokenSummaries() {
  const records = await listSyncTokens();
  return records.map((record) => ({
    id: record.id,
    name: record.name,
    syncApiKeyId: record.syncApiKeyId,
    issuerKind: record.issuerKind,
    revokedAt: record.revokedAt,
    expiresAt: record.expiresAt,
    lastUsedAt: record.lastUsedAt,
    createdAt: record.createdAt,
    updatedAt: record.updatedAt,
  }));
}

export async function revokeSyncTokenById(id: string) {
  const revoked = await revokeSyncToken(id);
  if (!revoked) return null;
  return {
    id: revoked.id,
    name: revoked.name,
    syncApiKeyId: revoked.syncApiKeyId,
    issuerKind: revoked.issuerKind,
    revokedAt: revoked.revokedAt,
    expiresAt: revoked.expiresAt,
    lastUsedAt: revoked.lastUsedAt,
    createdAt: revoked.createdAt,
    updatedAt: revoked.updatedAt,
  };
}

export async function resolveSyncApiKeyIdFromManagementRequest(request: Request) {
  const authHeader = request.headers.get("authorization") || request.headers.get("Authorization");
  if (typeof authHeader !== "string") return null;
  const trimmedHeader = authHeader.trim();
  if (!trimmedHeader.toLowerCase().startsWith("bearer ")) return null;

  const apiKey = trimmedHeader.slice(7).trim();
  if (!apiKey) return null;

  const metadata = await getApiKeyMetadata(apiKey);
  return metadata?.id || null;
}

export function getSyncTokenFromRequest(request: Request) {
  const explicitHeader = request.headers.get("x-sync-token");
  if (typeof explicitHeader === "string" && explicitHeader.trim().length > 0) {
    return explicitHeader.trim();
  }

  const authHeader = request.headers.get("authorization") || request.headers.get("Authorization");
  if (typeof authHeader !== "string") return null;
  const trimmedHeader = authHeader.trim();
  if (!trimmedHeader.toLowerCase().startsWith("bearer ")) return null;
  return trimmedHeader.slice(7).trim() || null;
}
