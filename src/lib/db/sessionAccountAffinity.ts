/**
 * Legacy synchronous SQLite API remains compatible with existing callers/tests.
 * Request routing uses getSessionAffinityStore() and awaits its operations;
 * synchronous planners receive the record fetched once by credential selection.
 */
export {
  getSessionAccountAffinity,
  upsertSessionAccountAffinity,
  touchSessionAccountAffinity,
  deleteSessionAccountAffinity,
  evictSessionAccountAffinityForConnection,
  cleanupStaleSessionAccountAffinities,
  startSessionAccountAffinityCleanup,
} from "./sessionAffinity/sqliteStore";
export { getSessionAffinityStore } from "./sessionAffinity/storeFactory";
export type { SessionAccountAffinityRecord } from "./sessionAffinity/store";
