export type SessionAccountAffinityRecord = {
  connectionId: string;
  /** SHA-256 of resolveUsageAccountIdentity().accountKey; never a label or credential. */
  accountIdentity?: string;
  createdAt: string;
  lastUsedAt: string;
  expiresAt: string;
};

type Result<T> = T | Promise<T>;

/** SQLite stays synchronous; request callers await operations for either driver. */
export interface SessionAffinityStore {
  readonly driver: "sqlite" | "redis";
  get(
    sessionKey: string,
    provider: string,
    ttlMs?: number,
    now?: number
  ): Result<SessionAccountAffinityRecord | null>;
  upsert(
    sessionKey: string,
    provider: string,
    connectionId: string,
    now?: number,
    ttlMs?: number,
    accountIdentity?: string
  ): Result<void>;
  touch(sessionKey: string, provider: string, now?: number, ttlMs?: number): Result<void>;
  delete(sessionKey: string, provider: string): Result<void>;
  /** Conditional deletion, independent of the request's TTL setting (#6219). */
  evict(
    sessionKey: string,
    provider: string,
    connectionId: string,
    accountIdentity?: string
  ): Result<boolean>;
}
