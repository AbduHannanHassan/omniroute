/**
 * syncs/index.ts — Registration hook for intelligence syncs.
 *
 * Exports registerIntelligenceSyncs(scheduler: SchedulerLike) to wire all four
 * intelligence syncs to the existing scheduler interface.
 */

import type { ModelgrepSync } from "./modelgrepSync";
import type { PublicaiSync } from "./publicaiSync";
import type { ArenaExternalSync } from "./arenaExternalSync";
import type { HuggingfaceSync } from "./huggingfaceSync";

export interface SchedulerLike {
  registerSync(options: {
    source: string;
    namespace: string;
    scheduleCron: string;
    factory: () => ModelgrepSync | PublicaiSync | ArenaExternalSync | HuggingfaceSync;
  }): void;
}

export async function registerIntelligenceSyncs(scheduler: SchedulerLike): Promise<void> {
  const { ModelgrepSync } = await import("./modelgrepSync");
  const { PublicaiSync } = await import("./publicaiSync");
  const { ArenaExternalSync } = await import("./arenaExternalSync");
  const { HuggingfaceSync } = await import("./huggingfaceSync");

  scheduler.registerSync({
    source: "modelgrep_intel",
    namespace: "modelgrep_intel",
    scheduleCron: "0 6 * * *",
    factory: () => new ModelgrepSync(),
  });

  scheduler.registerSync({
    source: "publicai_index",
    namespace: "publicai_index",
    scheduleCron: "0 9 * * *",
    factory: () => new PublicaiSync(),
  });

  scheduler.registerSync({
    source: "arena_elo_external",
    namespace: "arena_elo_external",
    scheduleCron: "0 3 * * *",
    factory: () => new ArenaExternalSync(),
  });

  scheduler.registerSync({
    source: "huggingface_meta",
    namespace: "huggingface_meta",
    scheduleCron: "0 0 * * *",
    factory: () => new HuggingfaceSync(),
  });
}