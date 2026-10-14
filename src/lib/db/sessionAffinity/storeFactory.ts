import { sqliteSessionAffinityStore } from "./sqliteStore";
import type { SessionAffinityStore } from "./store";

export function getSessionAffinityStore(): SessionAffinityStore {
  return sqliteSessionAffinityStore;
}
