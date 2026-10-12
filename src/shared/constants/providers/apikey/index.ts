/**
 * APIKEY provider catalog barrel — merges the semantic family files into one object
 * (god-file decomposition). Pure data; spread preserves every entry. Keys are now grouped
 * by provider family (was historical-accretion order); lookups are by-key so this is a
 * cosmetic-only iteration-order change (e.g. the dashboard blocked-providers grid).
 */
import { APIKEY_PROVIDERS_GATEWAYS } from "./gateways";
import { APIKEY_PROVIDERS_BEATAPI } from "./beatapi";
import { APIKEY_PROVIDERS_FRONTIER } from "./frontier-labs";
import { APIKEY_PROVIDERS_INFERENCE } from "./inference-hosts";
import { APIKEY_PROVIDERS_ENTERPRISE } from "./enterprise-cloud";
import { APIKEY_PROVIDERS_REGIONAL } from "./regional";
import { APIKEY_PROVIDERS_SPECIALTY } from "./specialty-media";

export const APIKEY_PROVIDERS = {
  ...APIKEY_PROVIDERS_GATEWAYS,
  ...APIKEY_PROVIDERS_BEATAPI,
  ...APIKEY_PROVIDERS_FRONTIER,
  ...APIKEY_PROVIDERS_INFERENCE,
  ...APIKEY_PROVIDERS_ENTERPRISE,
  ...APIKEY_PROVIDERS_REGIONAL,
  ...APIKEY_PROVIDERS_SPECIALTY,
  onomeo: {
    id: "onomeo",
    serviceKinds: ["llm"],
    alias: "onomeo",
    name: "onomeo",
    icon: "router",
    color: "#C2410C",
    textIcon: "ONO",
    passthroughModels: true,
    website: "https://onomeo.com",
    hasFree: true,
    freeNote:
      "Sign in (email code, Google or GitHub, no card). About 30 free models are metered by calls: 30 calls per 5 hours per account and 12 requests/min per key, within a site-wide pool shared by all accounts. Claude, GPT and other large models are paid from a USD balance at per-model prices; during the beta an account can spend at most $0.50/day on them. Optional top-up from $5 (balance never expires, no auto-renewal) raises the free-model limit to 90 calls per 5 hours for 35 days.",
    apiHint:
      "Create an API key on the onomeo dashboard, then use https://onomeo.com/v1 as the OpenAI-compatible base URL. Models are served by third-party upstreams, some of which may train on prompts; each model page on onomeo.com states this. onomeo is in public beta: not every feature is guaranteed to work, and feedback is welcome at https://onomeo.com/feedback.",
  },
  uncloseai: {
    id: "uncloseai",
    serviceKinds: ["llm"],
    alias: "unc",
    name: "UncloseAI",
    icon: "auto_awesome",
    color: "#8B5CF6",
    textIcon: "UN",
    website: "https://uncloseai.com",
    passthroughModels: true,
    hasFree: true,
    noAuth: true,
    freeNote:
      "Free forever — no signup, no credit card. OpenAI-compatible endpoints. API accepts any non-empty string as key for identification. If older built-in models return 404, use Available Models → Import from /models or Auto-Sync; verified live model: Lorbus/Qwen3.6-27B-int4-AutoRound.",
    apiHint:
      "No auth required. API accepts any non-empty string as key for identification. If older built-in models return 404, use Available Models → Import from /models or Auto-Sync.",
    notice: {
      text: "UncloseAI needs no API key. API accepts any non-empty string as key for identification. If older built-in models return 404, use Available Models → Import from /models or Auto-Sync.",
    },
  },
};
