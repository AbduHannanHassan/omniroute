# Guardrails (Igbo)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Isi mmalite nke eziokwu:** `src/lib/guardrails/`
> **Emelitere ikpeazụ:** 2026-08-29 — v3.8.51 (Video Bridge transcript provenance bụ nke onye kpọrọ ọrụ kwupụtara,
> sava enyochabeghị ya — akọwapụtara nke ọma dịka #11661)

Guardrails na-amanye nchekwa, amụma, na mgbanwe ọdịnaya n'ókè dị
n'etiti OmniRoute na ndị na-eweta ọrụ upstream. Guardrail ọ bụla nwere ike inyocha (ma
ọ bụrụ na achọrọ, jụ, gbanwee, ma ọ bụ tinye nkọwa na) payload arịrịọ (`preCall`) na
nzaghachi upstream (`postCall`).

Sistemụ ahụ bụ **fail-open**: ọ bụrụ na guardrail atụpụta njehie mgbe ọ na-arụ ọrụ, registry
na-edekọ njehie ahụ ma gaa n'ihu na guardrail na-esote kama ime ka
arịrịọ ahụ daa. Igbochi bụ mkpebi doro anya (`block: true`), ọ bụghị ihe mberede.

## Nchedo Ndụ

Nchedo ndọrọndọrọ na-ebudata onwe ya n'usoro ihe ndị a na-eme ka ọ bụrụ nke mbụ na mbubata
(lee `registry.ts` → `registerDefaultGuardrails()`):

| Nchedo | Aha                 | Ọnọdụ(s)       | Faịlụ                 |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nọmba nchedo dị ala na-agba **mbụ**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Na-ejide arịrịọ ndị nwere onyonyo nke na-ezube **ụdị na-enweghị ọhụụ** ma ọ bụ
na-agbanwe arịrịọ niile ka ọ bụrụ ụdị nwere ọhụụ ma ọ bụ na-anọchi onyonyo
nke na-eme ka nkọwa ederede nke a na-emepụta site na ụdị ọhụụ nwere ike ịhazigharị tupu
kpọọ elu. Nke a na-enye ndị na-enye naanị ederede ohere ịchịkwa
ngwugwu multimodal n'enweghị nsogbu.

Usoro:

1. Hapụ ma ọ bụrụ na ụdị ebumnuche ahụ na-akwado ọhụụ (ma ọ bụrụ na ọ bụghị na
   ndepụta nke a na-eme ka ọ bụrụ `isVisionBridgeForcedModel`).
2. Wepu akụkụ onyonyo site na `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), nke na-enye ọrụ na **nchedo mgbakwunye
   media** `detectMediaParts()` na `open-sse/utils/mediaParts.ts` — isi
   otu isiokwu nke a na-ekekọrịta na ng фильтр ngwugwu.
   Wepu bụ nke a na-anabata na akụkụ dị elu nke ụdị
   `replaceImageParts` nwere ike ịgbakwunye (nkwekọrịta wepu↔dochie): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Ncheta na
   ụdị naanị ihe na-egosi bụ ihe ngwugwu na a na-ewepụghị ya.
   Hapụ ma ọ bụrụ na enweghi ihe ọ bụla.
3. Dozie nhazi oge site na `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): ọhụrụ `modalityBridge*`
   igodo nhazi na-emeri; ihe ochie `visionBridge*` igodo na-anọgide na **otu
   usoro ndabere** (ndabere rollback). Hapụ tupu ọ bụla media traversal mgbe
   a na-egbochi mgbakwunye.
4. Nhọrọ usoro (`modalityBridgeVisionMode`, lee tebụl dị n'okpuru) na-ekpebi
   ịgbanwe ma ọ bụ kọwaa. Ịgbanwe na-eweghachite `modifiedPayload` na naanị `model`
   gbanwere, tinyere meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kọwaa ụzọ: gbochie onyonyo na `maxImages`, hazie ọrụ na-ahụ maka
   nkwupụta, jụọ cache kọwaa, kpọọ ụdị ọhụụ **na n'usoro**
   (`Promise.allSettled`), ma tinye `[Image N]: <description>` akụkụ ederede na
   ebe ha nọ. Nkọwa na-adịghị mma na-enye `null` na akụkụ onyonyo mbụ
   **na-echekwa** (#4012) — ma e wezụga na ụzọ kọwaa ngwugwu mgbe
   kọwaa niile dara, ebe a na-enweta ụdị na-enweghị ọhụụ na
   `(unavailable — no vision-capable provider connected)` stub kama (#8430).
6. Weghachite `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Nhọrọ usoro (`modalityBridgeVisionMode`)

| Usoro      | Ndabere | Ọrụ                                                                                                                                                                                                                         |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Nchedo ochie, na-enweghị mmetọ (#6640/#7204): ụdị na-enweghị ngwugwu/`auto/` na-agbanwe na ụdị ọhụụ kacha mma ma ọ bụrụ na ụdị mbụ nwere ikike eji arụ ọrụ (nke ahụ na kọwaa); ebumnuche ngwugwu na-emekarị kọwaa.          |
| `describe` |         | Kọwaa mgbe niile — a na-ewepụ blọk ịgbanwe kpamkpam; ụdị nke onye ọrụ họọrọ na-aza mgbe niile.                                                                                                                              |
| `reroute`  |         | Ikwesịrị ịgbanwe: a na-ewepụ nchedo nke na-echekwa ikike. Nchedo ikike **ebumnuche** na-emetụta — mgbe enweghi ebumnuche ọhụụ eji arụ ọrụ, arịrịọ na-adaba na kọwaa ka onyonyo raw ghara iru backend naanị ederede (#8430). |

Usoro a na-eme ka ọ bụrụ na **tupu** heuristics auto na-agba; omume `auto`
bụ byte-ndị na-emekọrịta na nchedo pre-PR-1.

#### Nkwupụta kọwaa na-ahụ maka ọrụ (`modalityBridgeVisionTaskAware`)

Ndabere **ezigbo**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) na-agbakwunye
ede nke **nkwupụta ikpeazụ nke onye ọrụ** (nke a na-ewepụ na 500 chars) na
nkwupụta kọwaa, na-eduga nkọwa na ihe onye ọrụ jụrụ n'ezie
(pattern codex-vision-proxy) na-arịọ ụdị ọhụụ ka o dezie ederede
nke a na-ahụ. Na flag gbanyere — ma ọ bụ na-enweghị ederede onye ọrụ — a na-eji
nkwupụta ndabere na-enweghị mgbanwe.

The describe self-loop's own OpenAI-compatible request (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) na-achọ `image_url.detail: "high"` —
n'enweghị ọnọdụ, maka onye ọ bụla na-akpọ/na-enye, ọ bụghị na-egbochi na
mgbaàmà onye ahịa ọ bụla. Sampling nke nkọwa dị ala na-emebi
OCR ziri ezi maka ọrụ ederede a na-achọ maka, ya mere, oku
nkọwa na-achọkarị nkọwa dị elu n'agbanyeghị nke nkọwa
ogo nke mbụ na-abata. Nke a na-emetụta naanị
n'ime nkọwa oku; ọ naghị agbanwe otu
OmniRoute si ebufe `image_url.detail` nke onye na-akpọ na
nke mbụ — nke a na-etinye na nke ọzọ, na naanị maka
ndị ahịa OpenCode a chọpụtara, na
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic wire-format branch nke describe self-loop enweghị
`detail` field ma na-adịghị emetụta ma ọ bụ nke a na-etinye.

#### Describe output cap (`modalityBridgeVisionMaxChars`)

| Key                            | Default | Range                 |
| ------------------------------ | ------- | --------------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` ma ọ bụ 100–50000 |

`0` (ndabara) pụtara **nweghị cap** — nkọwa a na-alaghachi site na
`callVisionModel()` na-apụtaghị mgbanwe, na-echekwa
omume dị ugbu a. Ọ bụla uru dị na 100–50000
na-ewepụ nkọwa na `…` suffix tupu e weghachite ya dịka
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` na
`src/lib/guardrails/visionBridge.ts`). Gbaa mbọ hụ na nke a
maka ọrụ OCR nke nwere nkọwa dị arọ ebe
ndị na-esote model chọrọ ederede zuru ezu; belata ya
iji chebe ojiji token na ụdị ọhụụ na-ekwu okwu.
Ogwe dashboard dị na Vision tab's Advanced panel
(`modality-bridge-max-chars` na `ModalityBridgeVisionTab.tsx`) na-ejide
ọ bụla uru n'etiti 1 na 99 ruo na 100 floor
n'ịhapụ `0` doro anya — `0` bụ uru Zod ziri ezi n'onwe ya
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ọ bụghị naanị
ndabara "nseta".

#### Describe cache (`modalityBridge/bridgeCache.ts`)

In-memory LRU + TTL cache maka describe outputs, a na-ekekọrịta ya n'ozuzu.
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` na
length-prefix framing (enweghị field-boundary collisions). Ihe nlereanya bụ
**nke a haziri** bridge model, ọ bụghị model nke zara n'ezie —
`callVisionModel` nwere ike ịlaghachi n'ime, na
keying kwa mgbalị ga-eme ka cache pụta. A naghị echekwa
nkọwa ndị dara. Ntọala:

| Key                             | Default | Range   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Remote image normalization (self-loop describe/base64 fetch)

Mgbe bridge na-enweta **remote** image n'onwe ya — nke Anthropic describe
self-call na claude-wire-format base64 conversion
(`ensureBase64ImagesForClaudeWire`), ma abụọ site na
`fetchRemoteImageAsDataUri()` na `visionBridgeHelpers.ts` — data URI
nke na-abịa na `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) tupu etinye ya na
nke vision-model. Oversized images na-ebelata na **2048px ogologo
oche** (na-ezute resize cap OpenAI/Anthropic etinyere na
server-side), nke na-ewepụ bytes/latency na-enweghị
ịgbanwe ihe model na-ahụ. Resizing
na-eji `sharp`, nke a na-ebudata site na dynamic import: na
platform ebe binary ya nke mbụ na-ada, `normalizeDataUri()` **agaghị egbu** —
o laghachi na passthrough nke bytes mbụ, ya mere, ụzọ describe/base64-conversion
na-anọgide na-arụ ọrụ. Non-image bytes (fetch nke na-adịghị
weghachite image nke a ga-edozi) na-agafe na-enweghị mgbanwe. A na-ejide
nke a na images bridge na-enweta maka
nke ya — a naghị etinye ya na raw passthrough payload nke onye na-akpọ,
na-ezute ụkpụrụ mgbanwe naanị na nhọrọ (Hard Rule #20).

#### Settings schema + migration

Ndị ọhụrụ `modalityBridge*` keys bụ Zod-validated na `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, na
`modalityBridgeAudio*` otu a na-eji site na Audio Bridge. Migration
`141_modality_bridge_settings.sql` na-ewepụta
nke dị ugbu a legacy `visionBridge*` values na
nke ọhụrụ na-ezute (idempotent, anaghị overwrite
`modalityBridge*` value nke onye na-arụ ọrụ); a na-anabata
legacy keys dị ka fallback na-agụ maka otu
ngwugwu.

#### Transparency header + stats

Describe-transformed responses carry
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(built by `buildModalityBridgeHeader()` na `modalityBridge/bridgeStats.ts`,
stamped by `withModalityBridgeHeader()` na `src/sse/handlers/chatHelpers.ts`).
Rerouted requests get **no** header — payload ahụ adịghị agbanwe
na model swap na-adị na `model` field nke
nke azịza.

`GET /api/modality-bridge/stats` (management auth, otu ogo dị ka
`GET /api/settings`) na-eweghachite in-memory per-modality counters
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` maka `vision`, `audio`, na
`video`. `averageLatencyMs` na-eji `latencySamples`, ọ bụghị
nke niile attempts, dị ka denominator ya; ọrụ na-enweghị
oge anaghị emepụta sample nke zero-millisecond. `bridged` na-anọgide
nke a na-akwado azụ maka conversions nke gara nke ọma; attempts
ndị dara adịghị eme ka ọ pụta.
Counters na-eweghachite na mmeghachi omume site na
ndesign (telemetry, ọ bụghị accounting).

#### Dashboard configuration

Ihu dashboard a na-enye bụ
`/dashboard/settings/modality-bridge`. Adreesị URL ya `Vision`, `Audio`,
na `Video` tabs na-echekwa ajụjụ parameters mgbe ha na-agbanwe `tab` value.
Tab Vision na-egosi ikike, ọnọdụ, nhọrọ ụdị (gụnyere ndabara akpaghị aka),
nkwupụta na-adabere na ọrụ, oge a na-atụ anya/onyonyo/nkọwa ogologo/cache
ogo, oge
counters, na arịrịọ sample echekwara. Tab Audio bụkwa ndụ: ọ na-egosi
ikike, onye na-ahọrọ ụdị STT naanị na Auto, oge a na-atụ anya/ogo clip kachasị,
audio
counters, na `input_audio` sample test. Tab Video na-arụ ọrụ: ọ na-akọwa
ọnọdụ oge FFmpeg/ffprobe — otu n'ime anọ doro anya UI states (`unknown` mgbe
probe nọ n'ịga ma ọ bụ enweghị ike ịmecha, `restricted` na dashboard host na-abụghị
loopback ebe probe na-apụghị imecha na akụkụ onye ahịa, `unavailable` mgbe probe
na-enyocha ma kwadoro na ọ na-efu, ma ọ bụ `available` na FFmpeg/ffprobe
versions) — na-echekwa
ikike/model/frame/video/oge a na-atụ anya, na-filter na onye na-ahọrọ ụdị ka
ụdị nwere ike ịhụ, na-egosi video counters.

Card Vision Bridge gara aga n'okpuru AI settings bụ njikọ nkwado na
peeji ọhụrụ; ọ naghị enwe otu mkpụrụ akwụkwọ nke fọm. Ndị na-enye Media
na-ejikọta Image-to-Text na Speech-to-Text workflows na tabs Modality
Bridge metụtara na-enweghị iwepụ egwuregwu Speech-to-Text dị.

**Nkwupụta n'ịbanye na onwe:** mgbe akpọrọ oku nkọwa na-agafe
OmniRoute's `/v1` onwe (model onye na-enye na-abụghị ọkọlọtọ), sub-arịrịọ na-eziga
`x-omniroute-admission-bypass: internal` ma na-enyocha ya na
akụkụ ikike onwe — `sk_omniroute` sentinel na ọnọdụ mpaghara, ma ọ bụ
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350) ka
`REQUIRE_API_KEY=true` deployments nwere ike ka na-arụ ọrụ oku nkọwa. Nkwupụta a
na-anabata naanị maka ndị ahụ kpọmkwem ikike, ya mere ndị ahịa mpụga enweghị ike iji
header ahụ gbanwee ịbanye.

Defaults ochie dị na `src/shared/constants/visionBridgeDefaults.ts`;
defaults ọhụrụ na-adabere na ọnọdụ/ọrụ/cache na onye na-enyocha
dị na `src/shared/constants/modalityBridgeDefaults.ts`. Guardrail na-egosi
`deps` constructor option ka ule nwee ike itinye ụgha `getSettings` na
`callVisionModel` implementations.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Na-ejide arịrịọ chat nwere audio tupu ha erute ebe a na-amaghị
na-anabata audio input. Ọ naghị agbanwe arịrịọ chat: akụkụ audio na-
edekọ na ụzọ OpenAI kwekọrọ na multipart endpoint dị ugbu a na
model chat a họọrọ na-aga n'ihu na transcripts ederede.

Flow:

1. Kpebie `supportsAudio` site na `getResolvedModelCapabilities()`. Metadata
   onye na-enye doro anya na-emeri, mgbe ahụ static model metadata, mgbe ahụ
   synced `modalities_input`. Ndepụta input a kọwara na-enweghị `audio` bụ `false`;
   enweghị ihe akaebe ikike na-anọ `null`. Ma `false` na `null` na-eme ka
   bridge na-echekwa, ebe `true` na-agbapụ ya.
2. Kpebie `modalityBridgeAudio*` settings ma wepụ akụkụ audio
   nke nwere ike ịkpụ site na ozi ọ bụla site na `detectMediaParts()`
   detector. A na-akwado wire shapes bụ OpenAI `input_audio`, `audio_url`, na
   `source.media_type: "audio/*"`. A na-enyocha audio dị n'ime maka routing ma
   ọ bụghị wepụ site na ụzọ splice. A na-edobe ọrụ site na `modalityBridgeAudioMaxClips`;
   akụkụ ndị ọzọ na-anọghị na-emetụta.
3. Kwanyere `provider/model` a haziri, ma ọ bụ ka `selectAudioBridgeModel()`
   na-agagharị `AUDIO_TRANSCRIPTION_PROVIDERS` na usoro catalog kwụsiri ike ma họrọ
   model mbụ nwere ikike onye na-enye na-arụ ọrụ.
4. `callAudioTranscription()` na-agbanwe base64/data-URI audio ka
   multipart `file`, ma ọ bụ na-ebudata `audio_url` dịpụrụ adịpụ site na
   guard nke na-anabata naanị ọha na eze na DNS pinning na 25 MB bound. Ọ na-eso
   POSTs faịlụ na model a họọrọ na mpaghara `/v1/audio/transcriptions`
   onwe, na-enyocha ya na `resolveSelfLoopBearer()`. Ụzọ transcription dị ugbu a na-eme
   nyocha ikike nkịtị, cooldown/rate-limit handling, na dispatch onye na-enye.
5. Arịrịọ ndị gara nke ọma na-anọchi akụkụ ha na `[Audio N]: <transcript>`. Arịrịọ
   na-agba ọsọ na `Promise.allSettled`: mmejọ nke onye ọ bụla na-echekwa
   akụkụ audio mbụ (#4012 contract). Ọ bụrụ na arịrịọ niile dara na
   ebe a na-enyocha `supportsAudio === false`, akụkụ ahụ ghọọ
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 contract). Maka
   ebe a na-amaghị (`null`), nsonaazụ niile na-adịghị mma na-anọghị na-emetụta. Ebe a
   na-enyocha na ọ bụ naanị ederede na-enweghị ikike STT na-arụ ọrụ na-enweta
   otu stub doro anya na-enweghị ịkpọ oku netwọk.

Transcripts ndị gara nke ọma na-eji usoro Modality Bridge LRU/TTL cache.
Igodo na-ejikọta audio reference, label ọrụ `audio-transcription` kwụsiri ike,
na model STT a họọrọ; mmejọ anaghị echekwa. Audio attempts na-emelite
`bridged`, `cacheHits`, `failures`, na `lastUsedAt` counters.
Nsonaazụ a gbanwere na carrying
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; arịrịọ
na-anọghị na-enwetaghị Audio Bridge segment.

Ozi oge bụ DB-backed na Zod-validated:

| Igodo                         | Ndabara | Ogo                 |
| ----------------------------- | ------- | ------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                   |
| `modalityBridgeAudioModel`    | `""`    | Auto ma ọ bụ STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000         |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                |

Cache a na-ekekọrịta ka na-achịkwa site na `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts top-level video parts in Chat Completions `messages` and Responses
API `input` before a target without known native video support is called.
Supported shapes are `input_video`, `video_url`, `video_source`, HTTPS URLs,
and `data:video/*;base64,...` data URIs. Plain filenames in text are not treated
as video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) owns request traversal, the
capability/policy check, per-request aggregation, and the response payload.
Per-video work — acquisition, the whole-result cache, describing a frame
sequence (which fuses any caller-declared audio transcript), and per-attempt
metrics/abort/cleanup — is hidden behind `processVideoPart` in
`videoBridgePipeline.ts`, called once per video part inside `preCall`'s loop.
That module also defines the explicit port boundaries `VideoMediaBrokerPort`
(acquiring bytes and extracting sampled frames), `VideoAudioTranscriptionPort`
(fusing a caller-declared audio transcript with the sampled captions), and
`VideoDrilldownPort` (the legacy raw-store shape). Production STT and frame retention
are composed around the describing port through `createVideoSttAdapter` and
`createVideoDrilldownAdapter`; the latter uses the shared opaque-handle lifecycle.

The public `/v1` request path never imports or invokes a subprocess. Remote
videos are downloaded under a 50 MiB bound; inline base64 videos have a
conservative 36 MiB decoded per-video cap so the model/messages/framing envelope
can remain inside the public JSON request admission limit of 50 MiB. Inline
length and decoded-size estimates are checked before allocation. HTTPS is
required on the initial remote URL and every redirect, using the existing
public-only outbound guard with DNS pinning. The bytes then cross the exact internal
`POST /api/modality-bridge/video/extract` broker boundary. That route is both
`LOCAL_ONLY` and `SPAWN_CAPABLE`, accepts only a per-process authenticated,
trusted-loopback request, and never accepts a URL, filesystem path, executable,
or argument list. The API body-size pipeline and the handler's incremental body
reader independently enforce a 50 MiB broker input cap. Its bounded queue runs
one extraction at a time, allows four pending jobs, and caps pending input at
100 MiB.

Inside the broker, `ffprobe` reads a private local file; the fixed format
allowlist excludes playlist and manifest formats. For allowed MOV-family
containers, external MOV data references remain disabled by default, and the
fixed command does not opt in to them. Both `ffprobe` and `ffmpeg` use the
`file`-only protocol whitelist, one thread, fixed argument arrays, no shell,
and executables resolved from `PATH`. Attached-picture cover streams are not
playable candidates. All playable streams must satisfy the limits, and an
explicit default stream is preferred before the deterministic lowest-index
fallback. Videos are limited to 600 seconds, 8,192 pixels per dimension, and
33,554,432 source pixels. FFmpeg samples 1–16 midpoint JPEG frames, scales down
the long edge to at most 1,024 pixels without upscaling smaller inputs, and
never receives a URL. Sampling is `uniform` by default. The optional
`scene_aware` and experimental `segment_aware` policies perform one additional
fixed FFmpeg pass over the already validated local stream, select bounded
`showinfo` scene timestamps, and fall back deterministically to the same
uniform midpoints on detector failure, timeout, malformed output, or an empty
candidate set. Segment-aware mode allocates midpoint samples proportionally to
the validated scene intervals; segment-aware evidence and fallback behavior are
detailed below. The hard 16-frame cap is
applied after selection in every policy. When a scene-aware request has only a
one-frame budget, it uses the uniform midpoint of the active full-video or focus
window and reports `policyEffective: uniform`: a single selected scene frame
cannot preserve both temporal ends. A caller may optionally provide a
finite focus window (`start`/`end` seconds); bounds are clamped to the media
duration, reversed or non-finite windows are rejected, and all sampling
policies are performed only inside the normalized interval. The resulting
window is included in sampling metadata and in the untrusted description
prefix so downstream models can distinguish a focused excerpt from the full
timeline.

Semantic caption focus is a separate, explicit setting. The default `full`
analysis mode preserves the existing frame prompt and never forwards request
text to the caption model. In `focused` mode, the bridge reads only the latest
non-empty user-authored `text`/`input_text` from the same Chat or Responses
container, normalizes it to NFC, collapses control characters and whitespace,
and limits it to 500 Unicode code points. An empty result falls back to the
exact `full` prompt. A usable hint is serialized as JSON in a dedicated
untrusted-user-context block and may only prioritize observable details; it
cannot override the separate warning against following instructions visible
or audible in the media. Textual focus never infers `start`/`end` or changes
the temporal sampler.

#### FU-07 structural segment evidence

`segment_aware` uses one bounded pre-analysis pass over the already validated
local video stream. The fixed filter chain first scales to at most 320 pixels
wide, detects scene changes and frozen intervals, then samples at 1 frame per
second for blur, average luma, and spatial/temporal information. The pass is
limited to 600 structural samples, one FFmpeg/filter thread, the same
`file`-only protocol and container allowlists, a 1 MiB process-output bound,
and at most 30 seconds inside the broker's shared abort/deadline. It never
accepts a command, filter, path, or URL from the request.

Uru ndị a bụ ihe atụ nke ịtụgharị uche na-enweghị atụ, ọ bụghị nghọta vidiyo. Ha anaghị atụgharị isiokwu, omume, nkọwa, okwu, ma ọ bụ ebumnuche onye ọrụ. Mpaghara na njedebe freeze na-emepụta akụkụ; mkpuchi freeze, blur, exposure, nkọwa mpaghara, na mgbanwe oge na-emetụta naanị otu esi etinye ego 1–16 frame dị. A na-edobe akụkụ zuru ezu na otu frame, ebe akụkụ na-adịghị freeze na-asọ mpi maka ego fọdụrụ. Mgbe njedebe karịrị frames, a na-edebe mkpuchi oge niile ka ngwa ngwa na cuts mbụ enweghị ike ịzụta akụkụ ogologo. A na-ejikọta njedebe mpụta n'ime 1 nkeji nyocha nke njedebe freeze.

Nchekwa na-adịghị, ihe atụ na-adịghị mma/efu, njehie na-achọpụta, ma ọ bụ oge nkwụsịtụ pre-analysis na-ezighị ezi na-emepe na iwu etiti. Nkwụsị oku ma ọ bụ oge njikọ anaghị emepe: ọ na-akwụsị usoro na-agba ọsọ, na-egbochi iwepụ frame n'oge na-adịghị anya, na a na-ewepụ osisi nzuzo na `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` na-emepụta ihe atụ FFmpeg ziri ezi maka nchekwa caption-call post-dedup, itinye ego dense-motion, blur/exposure/SI-TI ihe atụ, ngwa ngwa cuts nwere ogologo ogwe, na ndọtị na-adịgide adịgide. Ọ na-edekọ oge mgbidi pre-analysis na, ebe `/usr/bin/time` dị, CPU nwa na peak RSS. Nyocha àgwà ya bụ naanị oracles nke usoro. N'ezie, àgwà caption-model ka nọ na `HOLD` n'ihi na harness a enweghị njedebe kwadoro ma ọ bụ onye ikpe freeze. Nchekwa ego ka nọ na `HOLD` ma ọ bụrụ na `--caption-cost-per-call-usd` na-enye ọnụahịa doro anya kwa oku; script ahụ anaghị emepụta nsonaazụ ọ bụla.

A na-edobe frame ọ bụla na 4 MiB, niile raw frames ọnụ na 23 MiB, na nzaghachi broker a haziri ahazi na 32 MiB. A na-ewepụ nchekwa nzuzo na `finally`. OmniRoute anaghị etinye FFmpeg ma na-anaghị anabata ụzọ executable ahaziri. Tupu captioning, njikọ ahụ na-etinye usoro na-echekwa: JPEG ọ bụla na-ebelata na 16×16 grayscale buffer ma na-ejikọta naanị na frame ikpeazụ echekwara. Maka ego caption a rịọrọ nke karịrị otu frame, iwepụ na-enye pool nke ndị na-achọsi ike nke ruo ugboro abụọ nke ego ahụ ma ọ bụghị karịa 16 frames. A na-etinye cap a rịọrọ naanị mgbe e mesịrị, na ndị a họpụtara mbụ na ikpeazụ na-echekwa n'oge thinning ikpeazụ mgbe ego ahụ dịkarịa ala abụọ. Usoro `grayscale-16x16-mean-cells-v2` na-eji nke kachasị n'etiti mean luma delta na ọnụego nke thumbnail cells nke normalized delta ya dịkarịa ala 0.05. Nchekwa nke ndị na-emegharị bụ 0.04, a họpụtara ya maka ịtụkwasị obi kama ka e wepụta ya dị ka ntọala oge. Nke a secondary high-contrast signal na-echekwa obere mmegharị na mgbanwe ederede nke a na-ejikọta naanị na njikọ mean. Njehie comparator ma ọ bụ decoder na-emepe na na-echekwa mkpuchi. Metadata mmepụta na-ekewapụ ndị na-achọsi ike, frames a jiri nke ọma, na ndị na-emegharị anya a na-ewepụ.

Mpaghara vidiyo a kpọpụtara nwere ike ịrịọ akwụkwọ kọntaktị nwere timestamp. Njikọ ahụ na-ewu grid JPEG nke 4-column, 16-frame kacha. Cell 512-pixel ọ bụla na-ere timestamp ya na band ala dị elu, ebe timestamps ndị ahụ ka nọ na metadata ederede maka njikọ na audit. JPEG zuru ezu ka nọ na 32 MiB. Ọ bụrụ na `sharp` enweghị ike ịkọ ma ọ bụ hazie grid, njikọ ahụ na-alaghachi na frames JPEG ndị a. Nkwụsị onye ahịa ka na-agbasa site na ọrụ akwụkwọ ahụ.

Ihe atụ nkwado bụ nke a na-apụghị ịkekọrịta na composition synthetic microbenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` na-akọwa A/B harness nke nwere schema-versioned maka ụdị ọhụụ nke OpenAI. Ọ na-atụle tokens a na-akọwa site na onye na-enye, oge mgbidi end-to-end (gụnyere composition akwụkwọ), ọnụ ọgụgụ oku model, na njikọ nke a kọwara na manifest. A naghị ede azịza model raw na akụkọ; naanị SHA-256 digests na ID eziokwu a na-ejikọta ka echekwara. Harness ahụ anaghị eme netwọk ma ọ bụ oku model akwụ ụgwọ ma ọ bụrụ na `--execute-real` na-abanye na `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY` ahaziri. Na-enweghị arụmọrụ ziri ezi ahụ, mkpebi ya nke igwe na-agụ agụ ka nọ na `HOLD`; naanị nyocha payload/call-count abụghị ihe atụ nkwado.

`scripts/perf/video-bridge-promotion-eval.ts` na-ejikwa FU-07 ma ọ bụ FU-09 nlele. Nkwado nkwado chọrọ ụdị senario synthetic asatọ niile tinyere clip ziri ezi, ma ọ dịkarịa ala repetitions atọ a tụrụ na ọrụ na ikpe, metrics iri niile a kọwara, digests media/prompt/expected-fact/settings freeze, unique observation IDs na A/B order a kwadoro. Nkwupụta arụmọrụ na-ejikọta digest corpus, SHA nke ndị na-achọsi ike ziri ezi na mmezi model. Nchekwa ma ọ bụ nyocha na-adịghị mma ka nọ na `HOLD`, gụnyere CPU karịrị 30 s, peak RSS karịrị 512 MiB ma ọ bụ pre-analysis karịrị 30 s. Ndị a bụ caps admission evidence, ọ bụghị nkwa ọhụrụ nke RSS enforcement runtime.

FU-07 chọrọ ka a na-echekwa 98% àgwà na p95 latency na-abụghị karịa 1.2x baseline, tinyere ma ọ bụ 0.05 n'ozuzu nke a na-emegharị na ọnụ ọgụgụ caption calls, ma ọ bụ ma ọ dịkarịa ala 10% karịa ọnụ ọgụgụ caption calls post-dedup. FU-09 chọrọ ka a na-echekwa 0.85 àgwà, 95% retention, 20% p95 latency belata na 10% token belata. Nkwụsị nke eziokwu dị mkpa, nkwado injection ma ọ bụ iji na-adịghị na-egbochi nkwado. Otu arụmọrụ enweghị ike ịkwado ihe ọ bụla: `--previous-report` na-ekwenye na arụmọrụ abụọ dị iche, na-enweghị overlap, nke na-emezu usoro/model revision/candidate/corpus. Nnyocha sampling enweghị ike ịkwado nnyocha akwụkwọ kọntaktị.

Collectors kwesịrị ịkọwa nzaghachi na nchekwa na `responseDigest` tinyere
metrics na njikọ nyocha, ọ bụghị ederede nzaghachi. Onye na-eji ya na-agụ
ncheta ochie raw mana anaghị ebugharị ederede ahụ n'ime akụkọ ya. Otu n'ime
`responseDigest` ma ọ bụ `rawResponseText` ka a na-anabata maka nyocha ọ bụla.
Ndepụta nke nwere ụdị dị iche iche ka na-adị efu na `hold` ndabara na-adịghị agbanwe.
Iji bụrụ onye kwesịrị ekwesị, a chọrọ ntụaka nke ihe akaebe ya, iwu, mmezi
model, kpọmkwem SHA nke onye na-achọ, manifest digest na ID abụọ dị iche;
ncheta na-emegide na-anaghị anabata. Metadata ndị a bụ nkwekọrịta nyocha, ọ bụghị
nkwado na faịlụ a kpọtụrụ aha nwere ezigbo ọnụọgụ. Lelee akwụkwọ ndị a
n'ezie tupu itinye ihe ọ bụla. Njikọ stats njikwa na Video dashboard na-egosi
ndị na-emegharị. A haziri alias model naanị na-emepụta mmezi ya ma ọ bụ
SHA nke onye na-arụ ọrụ, ya mere, dashboard ugbu a na-akọ `HOLD` kama
iji eligibility si na ọnọdụ mmegharị ọzọ. Nhọrọ nyocha doro anya ka na-adị
iche na mmelite; enweghị ndabara na-agbanwe na-akpaghị aka.

Ndị na-akpọ nwere ike itinye `transcript.cues` array nke a na-akwado na
vidiyo nke ha nwere ederede kwekọrọ. Cue ọ bụla ga-enwe `text`, oge
`start`/`end` nke dị n'ime oge a na-enyocha, na `source` nke a na-anabata
(`client`, `embedded`, ma ọ bụ `audio-bridge`); `confidence` bụ ndabara
`1` ma ga-anọgide n'etiti `0` na `1`. A na-ejikọta cue ndị yiri ya.
OmniRoute anaghị amalite transcription site na metadata a: a na-ewepụta
cues ndị a kwadoro n'ime nsonaazụ a kọwara na isi, ntụkwasị obi, na oge,
na a na-eme ka ha bụrụ nyocha na-enweghị ntụkwasị obi na mgbakwunye na
caption nke frame. Ederede na-adịghị mma, nke na-apụghị ịrụ ọrụ, ma ọ bụ
nke na-enweghị isi na-anaghị anabata kama ịkọrọ ya na caption stream. Ma
nke a na-arịọ ahụ na transcript channels na-eme ka provenance a na-enye
ka `client`, gụnyere `embedded` ma ọ bụ `audio-bridge` labels nke onye
nwe. Nanị adapter nke onye ọrụ nwere ike ịnye labels ndị a kwadoro site na
argument `trustedSource` nke naanị koodu; a na-apụghị ịbanye na argument
a site na mpaghara JSON. Ederede transcript ka na-anọgide na-enweghị ntụkwasị
obi, n'agbanyeghị provenance ya, ma ghara ịkọwa ikike.

Ndị na-akpọ nke dị elu nwere ike ịnye `audioTranscript` track maka vidiyo
nke ahụ; a na-atụle ya dị ka ederede nke onye ahịa nyere, ọ bụghị
nkwado nke transcription nke sava. A na-agba ọsọ fusion seam na-enyocha
visual na audio observations n'okpuru otu oge ikpeazụ na mgbaàmà
ndị na-akwụsị, na-edozi ha na oge a na-ahụkarị, na-ejikọta
nke yiri ya, na-akọwa nsonaazụ akụkụ mgbe otu akụkụ so na ya. A na-ebelata
`audioTranscript` na nsonaazụ akụkụ ahụ — a na-edebe nkọwa visual na
audio branch na-edekọ koodu mmejọ a na-emezi — kama ịkwụsị vidiyo
nke niile. Nchekwa per-branch, akara akụkụ, na koodu mmejọ a na-emezi
na-edebe na nsonaazụ a kọwara, na metadata guardrail (`audioFusionRuns`/
`audioFusionPartials`/`audioFusionFailureCodes`), na metadata cache
nsonaazụ, na na mgbakwunye fusion counters. Ụzọ ndabara Video Bridge
adịghị akpọrọ speech-to-text ma ọ bụ budata otu media nke abụọ; na-enweghị
track doro anya ahụ, ọ na-anọgide naanị vidiyo.

**Nchekwa transcript (#12150 P1).** Nke a na-emetụta akpaghị aka mgbe
Video Bridge (nke onwe ya bụ opt-in) na-eme ka cue transcript — enweghị
akụkụ nchekwa dị iche. Mgbe a na-arịọ ka ọ na-eme ka cue transcript
nke ọ bụla (nke onye na-akpọ kwupụtara `transcript` ma ọ bụ `audioTranscript`
nke a na-ejikọta), guardrail na-eme ka ọ bụrụ `videoBridgeObserved` ma
na-emepụta shadow redacted nke nkọwa vidiyo — a na-emegharị ya n'ụzọ
dọrọ anya ebe a na-anọchi `text` nke cue ọ bụla na `[redacted-video-transcript]`,
nke a na-ewu site na ịtụgharị akụkụ cue nke a haziri tupu a na-ejikọta
string (ọ bụghị site na parsing ederede a na-emegharị, ya mere, enweghị
nke cue ọdịnaya — nke na-emegide ma ọ bụ nke nkịtị, gụnyere
bodies nwere `]` dịka `[inaudible]`/`[music]` — nwere ike ịnagide). A na-agbanwe
nchekwa call-log request body na-ejikwa akụkụ ederede vidiyo ọ bụla
nke a na-enyocha maka shadow redacted ahụ, dabere na ịdị n'otu
nke ọdịnaya; a na-agụ `fullText` anchor ọzọ site na guardrail
payload nke a mechara, ya mere, njikọ ka na-aga n'ihu mgbe
guardrails nke na-esote (PII na credential maskers, priorities 10/95)
na-emegharị nkọwa ederede na ebe na mgbe sistemu-prompt/handoff/memory
injection na-emegharị array ozi. A na-ezighị body a na-eziga n'elu
na model. A na-ahụ request a na-emepụta na-enweghị nchekwa Memory
(nke a na-arịọ na nke a na-enweta nzaghachi na-apụghị ịrụ ọrụ),
ya mere, nzaghachi nke model enweghị ike ịkpọtụrụ ederede transcript
n'ime Memory.

**Raw video fields (#12430).** Mgbe a na-eme ka bridge na-arụ ọrụ
na nkwado vidiyo ndabere adịghị ama ma ọ bụ adịghị, a na-eme ka
`transcript`/`audioTranscript` fields na-arụ ọrụ `videoBridgeObserved`,
n'agbanyeghị na nkọwa dara ma ọ bụ `maxVideos` limit. `null` na
strings efu na-agụ; a na-apụghị ịnweta fields na metadata na-abụghị
vidiyo. A na-ewepụ copies a na-echekwa na-edebe fields ndị a ma ọ bụ
na-ewepụ arịrịọ ahụ, na caches/Memory na-apụghị ịbanye. A na-ejide
payload nke onye na-enye na-enweghị mgbanwe.

Copies ndị ọzọ a na-echekwa na-eji otu akara arịrịọ a na-ahụ. Snapshot
nke arịrịọ client pre-guardrail, na-echekwa arịrịọ na-eche na
nchekwa, na log nke arịrịọ a na-atụfu na-emegharị akụkụ transcript
n'ime akụkụ vidiyo; a na-ewepụ string prompts nke a na-emepụta site na
pipeline stages na context handoff na sink nke persisted-request-body.
A na-eme ka `video_content_removed` marker na-eme ka `previous_response_id`
nwepụta na-emechi kama ịmepụta ederede nke a na-ewepụ n'echiche. Ọ bụrụ
na arịrịọ a na-ahụ na-efu shadow redacted ya n'ozuzu tupu logging, ma ọ bụ
nke ọbụla n'ime ọtụtụ shadows vidiyo na-efu na-anaghị adabara mgbe
arịrịọ na-esote na-agbanwe, a na-ewepụ arịrịọ a na-echekwa n'ozuzu
n'ịbụ na-echekwa transcript redacted.

Maka arịrịọ a na-ahụ, azịza ụdị nwere ike ịkpọtụrụ akụkụ ọ bụla nke
transcript na-enweghị usoro cue boundary. A na-anọchi `responseBody` nke
nke a na-echekwa na log oku ya site na akara ommission; a naghị echekwa
ihe nkịtị pipeline (nke nwere ike ịgụnye ndị na-abata/ndị ahịa na
ahịrị ndị na-abụghị). Semantic, idempotency, na reasoning-replay caches
na-eziga na-agụ na ide maka arịrịọ ahụ. Arịrịọ onye na-enye na azịza
nke onye ahịa na-ahụ adịghị agbanwe. A na-ewepụ bytes nke
keepalive mbụ site na buffer nke oge a mgbe a na-ewepụ ihe nkịtị.
Nkwupụta njehie EventStream nke Kiro na-akọwa naanị ọnụ ọgụgụ byte
payload, ọ bụghị ọdịnaya ya ma ọ bụ njehie raw nke JSON parser.
Nke a anaghị ekwu na a nyochaghi nyocha nke onye na-enye/plugin
nke na-abụghị; a na-edekọ sweep nke a na-echekwa na #11658.

Ụzọ ndụ `/api/modality-bridge/video/drilldown` nke ime ụlọ bụ
cache substrate nke dị iche, loopback/token-authenticated. Ọrụ ọ bụla
na-achọkwa ID nke onye isi opaque canonical. Tupu a kwado onye na-akpọ
na mmepụta, ọ ga-enweta ID ahụ site na tenant nke a kwadoro ma
n'agbanyeghị na ọ gaghị ebugharị uru nke onye ahịa họọrọ. Cache keys
na-ejikọta onye isi ahụ na ID nke oge canonical na ID nke vidiyo,
na-echekwa naanị mkpụrụedemede ha sitere na SHA-256, na-ejikwa
gụgụ na ihichapụ na onye isi ahụ. Cache na-echekwa naanị 16
derived JPEG frames kwa ntinye, na-emecha ha mgbe nkeji iri gasịrị,
na-akwado gụọ `start`/`end` ma ọ bụ ihichapụ oge doro anya.

Onye isi ọ bụla nwere oke nke 16 ntinye na 64 MiB nke data JPEG
canonical. Oke ndị a bụ nke na-abụghị nke 64-entry/256 MiB
ceiling zuru ụwa ọnụ: nrụgide quota nke onye isi na-ewepụ naanị
ntinye nke onye isi ahụ nke a na-eji na-adịbeghị anya tupu a
tụlee ihichapụ LRU zuru ụwa ọnụ. A na-ewepụ ntinye ndị
mebiri emebi site na onye isi na nchịkọta zuru ụwa ọnụ na
ọrụ cache, ebe nkwụsị na njehie nkwenye anaghị eme ka
nhọpụta akụkụ.

Cache na-anaghị anabata Base64 na-abụghị canonical, padding
n'elu, media na-abụghị JPEG, JPEGs mebiri emebi ma ọ bụ
truncated, na JPEGs nke na-emepụta nkwupụta njehie n'oge
`sharp` decode nke zuru oke. Ọ na-emegharị foto ọ bụla
nwere ike dịka JPEG canonical, na-enweta obosara na
ogologo site na bytes nke a kọrọ kama ịtụkwasị obi na
ndị na-akpọ. Ọ na-ewepụ bytes polyglot ndị na-esochi
ya kama ịchekwa ha. Naanị buffer compressed canonical
nke a na-edebanye bụ nke a na-akwụ ụgwọ na quota abụọ.
Oke JSON wire gụnyere Base64 overhead maka 32 MiB
decoded-input ceiling. Nkọwa ọ bụla
nwere ndekọ nke JPEG format/resolution ya, sampling policy,
derivation version, oge okike, content hash nke server
na hashed parent reference tinyere hashed parent-content
hash nke onye na-akpọ nke a kwadoro. A na-enyocha
nkwụsị n'etiti asynchronous decode/hash phases tupu
atomic cache commit.

Onye na-emepụta mmepụta na-eji frames broker nke a
nwetara naanị mgbe nyocha anya gara nke ọma, na-enweghị
nbudata/ntinye vidiyo nke abụọ. Ọ na-achọ operator
`modalityBridgeVideoDrilldownEnabled=true`, nke siri ike
per-part `drilldown: true`, na ID ndekọ API-key
nke a kwadoro. Uru nke onye isi/session nke onye ahịa
adịghị etinye ikike. Na-enweghị ọnọdụ atọ ahụ, ọ
nweghị hash, resize ma ọ bụ chekwaa frames ndị ọzọ.
Nkwụsị na-adịghị mma na-echekwa azịza anya nke nwere ike
iji. Arịrịọ nke a kwadoro na-eziga cache nke
nsonaazụ vidiyo niile ka nsonaazụ echekwara
nweghị replay handles.

Azịza JSON na SSE nke gara nke ọma na-egosi
n'elu nkeji anọ opaque handles na `x-omniroute-video-drilldown`
header. Ndị nchọgharị a kwadoro nwere ike ịgụ header ahụ
na-enweghị ịgbatị usoro iwu CORS. Handles ọhụrụ na-eji
`v1.<32-byte random base64url token>`, na ndekọ na-echekwa
nanị hashes ha sitere na SHA-256. Onye na-agụ/header parser
na-anabatakwa legacy 64-hex tokens. Onye na-ahụ maka
ọha na eze bụ `GET /api/v1/video-bridge/drilldown?handle=...`,
nke a na-achịkwa n'ụzọ dị iche site na
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Nkwupụta
nke a kwadoro na-adịghị mma na-ewepụ ohere ọbụna mgbe
legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED`
env fallback na-arụ ọrụ. Nchekwa mmepụta nwere
nkwupụta legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`
fallback. Ma fallback abụọ na-abụghị nke a na-eme.

Onye na-eji na-enweta ikike site na igodo a kwadoro,
na-etinye iwu igodo, na na-eweghachi 404 otu a maka
nke a na-amaghị, nke gasịrị na handles nke igodo ọzọ.
Ọ na-anabata `variant=preview|standard|detail`
(maximum JPEG dimension 320/640/1280, na-adịghị
eme ka ọ bụrụ nke ka ukwuu), `limit=1..8`
(ma ọ bụ legacy `frames` alias, na-adịghị
eme ka ha abụọ), zero-based `page`, na optional
`start`/`end` focus seconds. A na-anaghị anabata
duplicate query keys na reversed focus windows.
Nke ọ bụla a na-eweghachi variant nwere hash
nke ọdịnaya ya na metadata nke resolution ya,
jikọtara na isi iyi echekwara. A na-enweta variants
na-agụ kama ịchekwa ha dịka mkpụrụedemede echekwara
ndị ọzọ. Azịza JSON, gụnyere Base64/envelope,
na-ejide na 32 MiB; peeji nke ukwuu na-eweghachi
413 na onye ahịa ga-arịọ maka fewer frames.
A na-enyocha nkwụsị n'ịbụ nke ọ bụla
resize na recheck handle validity tupu
na-eweghachi. `DELETE` site na onye nwe bụ idempotent;
ihichapụ ma ọ bụ TTL expiry na-emeghe isi iyi
echekwara na nchịkọta iji.

Store nke a na-ekekọrịta bụ process-local: handles
na-agwụ na restart ma na-abụghị nke a na-ebufe
n'etiti usoro OmniRoute dị iche. Nchịkọta stats
na-egosi retention/remote policy dị irè na
nchịkọta ntinye/bytes echekwara naanị, na-abụghị
media, references, principal IDs ma ọ bụ handles.
Panel ntọala Vidiyo na-egosi uru ndị ahụ ma
nwere ike ịchekwa ma switches consent. Akwụkwọ
ndị a na-emeghị ka ọ bụrụ ihe ngosi nke
ndebanye ma ọ bụ nkwado; nnabata nke
real-model na-edekọ na nke ọzọ.

Frames na-enweta aha n'usoro na usoro Video a haziri. Otu Video na-enweghị ihe na-erite uru na ntọala Vision; ma ọ bụrụ na ha abụọ adịghị, Vision auto-router na-ahọrọ ụdị ọhụụ nwere ike. Aha ndị gara nke ọma na-anọchi anya akụkụ mbụ na prefix `[Video description:` nke na-emekwa ka ederede ahụ bụrụ nyocha sitere na mgbasa ozi na-adịghị ntụkwasị obi ma na-agwa ụdị ndị na-esote ka ha ghara iso ntuziaka ndị dị na mgbasa ozi. Igodo cache aha frame-caption gụnyere JPEG bytes, prompt, timestamp, na ụdị dị irè; naanị aha ndị gara nke ọma ka a na-echekwa. Nkọwa cache na-ejide ụdị onye na-emepụta nke gara nke ọma, gụnyere ụdị nkwụsị; ọdụ ụgbọ mmiri na-akọ `mixed` mgbe ụdị dị iche iche na-emepụta site na ụdị dị iche iche. A na-eji cache hit reuse onye na-emepụta ahụ kama ịkpọpụta ya dịka atụmatụ routing a rịọrọ. Cache nsonaazụ vidiyo niile na-eji igodo na ntinye ọ bụla na-agbanwe nsonaazụ — prompt, ụdị dị irè, iwu sampling, ọnụ ọgụgụ frame, usoro nyocha semantic, SHA-256 fingerprint nke normalized focus hint, focus window, `transcript`, `audioTranscript`, na flag contact-sheet — ya mere, ịgbanwe otu n'ime ndị a bụ cache miss, ọ bụghị mgbe ochie. Usoro ndọtị visual dedup version, threshold, na ọnụ ọgụgụ candidate-frame a na-edobe na igodo nsonaazụ-cache na metadata; mgbanwe iwu ya mere enweghị ike iji nkọwa vidiyo niile mgbe ochie. Nsonaazụ-cache v4 metadata na-edebe usoro na fingerprint, ọ bụghị ọrụ onye ọrụ raw. Metadata guardrail na-akọ ma usoro nyocha a rịọrọ na nke dị irè; usoro `focused` a rịọrọ na-enweghị ederede onye ọrụ bara uru na-akọ dịka nke dị irè `full`.

Guardrail na-ewepụ akụkụ vidiyo niile a kwadoro ma na-akọghị karịa `modalityBridgeVideoMaxVideos`. Maka ebumnuche a kwadoro na `supportsVideo === false`, vidiyo ndị dara na nke karịrị oke na-abụ akara ederede nchekwa doro anya ka mgbasa ozi raw ghara ịdị. Mgbe ikike adịghị ama, akụkụ ndị ahụ na-anọghị na-emetụta. Ebumnuche nwere `supportsVideo === true` na-apụ apụ na ọdụ ụgbọ mmiri. Ihe ngosi nkwupụta nkwụsị nke onye ahịa na-agbasa site na ibudata, broker queue, subprocesses, na oku caption; nkwụsị na-akwụsị n'etiti vidiyo ma na-adịghị emebi na mgbasa ozi raw.

Ntọala runtime bụ DB-backed na Zod-validated:

| Key                                 | Default     | Range / behavior                                                                                       |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Ntọala runtime, opt-in                                                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` na-echekwa aha ndị a na-ahụkarị; `focused` na-eji bounded, untrusted latest-user context        |
| `modalityBridgeVideoModel`          | `""`        | Nweta ụdị Vision Bridge                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ma ọ bụ proportional `segment_aware`; mfu detector na-alaghachi na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                         |

Legacy persisted Video timeout values dị n'elu 120 sekọnd na-ejide na broker deadline; edemede ọhụrụ na-ede n'elu oke ahụ na-anaghị anabata. `GET /api/modality-bridge/video/runtime` chọrọ trusted stamped loopback locality tupu authentication ma ọ bụ runtime probing, mgbe ahụ na-achọkwa njikwa auth. Ọ na-eweghachi naanị `available`, sanitized FFmpeg/ffprobe versions, na ihe kpatara mgbe runtime adịghị. Internal extraction endpoint abụghị public upload API: queue saturation na-eweghachi `503` tinyere `Retry-After`, disconnect nke onye na-akpọ na-eweghachi `499`, na fixed broker deadline na-eweghachi `504`. A na-agbakwunye azịza ndị a gbanwere `video->text;model=<visionModel>;parts=<videos>` na isi `x-omniroute-modality-bridge` header na-enweghị iwepụ Vision ma ọ bụ Audio segments.

### PII Masker (`piiMasker.ts`)

Na-arụ ọrụ na **ma** ọkwa abụọ.

- **`preCall`** na-emepụta clone nke payload, na-agagharị `system`, `messages`, `input`, na `prompt` (gụnyere plain string items), na-etinye `processPII()` (site na `@/shared/utils/inputSanitizer`) na string `content`/`text` fields. Mgbe `PII_REDACTION_ENABLED=true`, PII a chọpụtara na-ewepụ na outbound payload. Nke a bụ nke na-adịghị emetụta `INPUT_SANITIZER_MODE` (nke na-achịkwa naanị prompt-injection policy). Mgbe redaction kwụsịrị, oku na-edekọ ọnụ ọgụgụ nchọpụta na-enweghị idegharịa ọdịnaya.
- **`postCall`** na-eme deep-clone nke nzaghachi, na-agba ọsọ `sanitizePIIResponse()` tinyere masker Responses-API-shape (`maskResponsesOutput` — na-ekpuchi `output_text` na `output[].content[].text`). Ọ bụrụ na redaction ọ bụla mere, nzaghachi gbanwere na-anọchi anya nke mbụ.

Guardrail anaghị egbochi; ọ na-anọchi anya naanị (`meta.detections`, `meta.redacted`) ma ọ bụ na-edegharị.

### Prompt Injection (`promptInjection.ts`)

Na-achọpụta usoro ndị na-emegide na ọdịnaya onye ọrụ nyere ma na-eme ka iwu a haziri. Ọrụ na-adabere na gburugburu ebe obibi na nhọrọ constructor:

| Ntọala          | Env var                                                                                            | Default | Nsonaazụ                                                                                                                                                                             |
| --------------- | -------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Kwadoro         | `INPUT_SANITIZER_ENABLED`                                                                          | `true`  | Mgbe `false`, guardrail na-eme ka ọ bụrụ na ọ gaghị arụ ọrụ.                                                                                                                         |
| Ụzọ             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                    | `warn`  | Usoro ntinye: `block`, `warn`, ma ọ bụ `log`. (`redact` na-anabata maka nkwado azụ mana anaghị ewepụ ederede ntinye; arịrịọ PII rewrite na-achịkwa site na `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` nhọrọ / `INPUT_SANITIZER_BLOCK_THRESHOLD` (aha `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Ọnụ ọgụgụ kachasị mkpa chọrọ iji gbochie. Medium bụ naanị nlekota na ndabara.                                                                                                        |

**Ụzọ ndọrọ ndọrọ** (`getMode`): onye na-akpọ `options.mode` →
`INJECTION_GUARD_MODE` **DB atụmatụ-ndị na-emegharị** (Dashboard → Ntọala →
Atụmatụ Ndọrọ) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. N'ihi ya, mmegharị dashboard na-emeri karịa env vars, ya mere UI Atụmatụ
ndọrọ na-achịkwa guard na-arụ ọrụ n'oge (enweghị mmegharị). Ntụle DB bụ nke na-echebe:
ma ọ bụrụ na ọ na-emehie, guard na-alaghachi na omume dabere na env, na mgbe enweghị
mmegharị, omume ahụ bụ otu na ngwọta naanị env.

Isi iyi nchọpụta:

1. `sanitizeRequest()` si `@/shared/utils/inputSanitizer` (nchọpụta a na-ekekọrịta
   set eji n'ebe ọzọ na pipeline).
2. `DEFAULT_GUARD_PATTERNS` nke a na-ewere (n'oge a `system_override_inline` na
   `markdown_system_block`, abụọ nwere `high` severity).
3. `customPatterns` nke a na-enye site na nhọrọ constructor (strings, regex,
   ma ọ bụ `{ name, pattern, severity }` ndekọ).

Mgbe `mode === "block"` **na** ọ dịkarịa ala otu nchọpụta na-ezute
ọkwa nke a chọrọ, `preCall` na-alaghachi `{ block: true, message: "Arịrịọ e jụrụ:
nkọwa na-adịghị mma achọpụtara" }`. Na `warn`/`log` Ụzọ, guardrail na-edekọ ma
na-enye ohere ka arịrịọ ahụ. Onye enyemaka a na-ekekọrịta `evaluatePromptInjection()` na-emekwa ka ndị na-akpọ chọrọ ịtụle prompts na-enweghị ịga site na ndekọ.

**Nyocha njikọ (v3.8.20):** nchọpụta na-enyocha naanị **mbụ 16 KB** nke
edekọtara prompt text — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) na
`src/shared/utils/inputSanitizer.ts`. Ma `detectInjection()` na
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` tupu ịrụ ọrụ
na usoro. Ntuziaka ntinye nọ n'elu nke ntinye, ya mere nke a
na-ewepụ regex CPU/GC na ọtụtụ narị-KB payloads na-enweghị imebi nchọpụta (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Na-arụ ọrụ na **ma** ọkwa abụọ, ikpeazụ na usoro ndabara (nchekwa `95`). Na-ewepụ
ama ama API-key / secret-token patterns site na payload na-apụ (nkọwa
nkọwa, arguments tool-call, nsonaazụ ngwá ọrụ) **na** nzaghachi onye na-enye, ya mere a
credential edepụtara na prompt (ma ọ bụ na-eweghachite site na nsonaazụ ngwá ọrụ) adịghị apụta
na onye na-enye elu ma ọ bụ laghachi na onye ahịa.

- **Opt-in naanị**, otu usoro dị ka PII redaction (Hard Rule #20-adjacent):
  kwụsịrị ma ọ bụrụ na `settings.credentialRedactionEnabled === true` **ma ọ bụ**
  `CREDENTIAL_REDACTION_ENABLED=true`. Mgbe ọ na-ewepụ, guardrail bụ no-op —
  ọ gaghị egbu ma ọ bụ gbanwee.
- `redactCredentials()` na-agagharị na payload/azaghachi osisi (`walkValue()`,
  prototype-pollution-safe, cycle-safe site na `WeakSet`) ma na-anọchi anya ihe
  na `[REDACTED:<type>]` placeholder, na-ewepụta naanị ndị na-emetụta nke
  gbanwere.
- `CREDENTIAL_PATTERNS` na-ekpuchi LLM onye na-enye igodo (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), igodo ịkwụ ụgwọ (Stripe, Square), igodo igwe ojii
  (AWS access key, Twilio, SendGrid, Mailgun), igodo nzuzo / JWTs,
  credential-bearing njikọ ahịrị (`mongodb://user:pass@...`, wdg.), na
  usoro `Authorization`/`x-api-key`/`api-key`/`apikey` header-value
  pattern. Igodo nke nwere ụdị header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) na-ewepụ na usoro (nke a na-ewepụ naanị, usoro prefix dịka
  `Bearer `/`Basic ` na-echekwa) kama site na regex ederede nkịtị.
- Guardrail anaghị egbu; ọ na-ewepụ naanị (`modifiedPayload` /
  `modifiedResponse`) ma na-akatọ (`meta.credentialsRedacted`, `meta.count`).

Nchekwa nback: `tests/unit/credential-masker-guardrail.test.ts`.

## Nkwekọrịta Ntọala (`base.ts`)

```typescript
class BaseGuardrail {
  enabled: boolean;
  name: string;
  priority: number;

  constructor(name: string, options?: { enabled?: boolean; priority?: number });

  async preCall(payload: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;

  async postCall(response: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;
}

interface GuardrailResult<TValue = unknown> {
  block?: boolean; // true na-akwụsị usoro ahụ ozugbo
  message?: string; // a na-egosi ya mgbe a na-egbochi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall na-eweghachi ya iji degharịa arịrịọ ahụ
  modifiedResponse?: TValue; // postCall na-eweghachi ya iji degharịa nzaghachi ahụ
}

interface GuardrailContext {
  apiKeyInfo?: Record<string, unknown> | null;
  disabledGuardrails?: string[] | null;
  endpoint?: string | null;
  headers?: Headers | Record<string, unknown> | null;
  log?: GuardrailLog | Console | null;
  method?: string | null;
  model?: string | null;
  provider?: string | null;
  signal?: AbortSignal;
  sourceFormat?: string | null;
  stream?: boolean;
  targetFormat?: string | null;
}
```

Guardrail na-egosi “enweghị mgbanwe” site n'ịweghachi `void`, `{}`, ma ọ bụ
`{ block: false }`. Iweghachi `modifiedPayload`/`modifiedResponse` na-eji uru ahụ
dochie uru na-agafe n'usoro ahụ maka guardrail ndị na-esote.
`signal?: AbortSignal` na-ebunye usoro ndụ onye kpọrọ ọrụ ahụ n'ime guardrail. Ịkwụsị arịrịọ bụ ọnọdụ pụrụ iche fail-open e kpachapụrụ anya: àkwà mmiri mgbasa ozi na-akwụsị ọrụ ma na-ehichapụ ihe ndị fọdụrụ n'enweghị iweghachi mgbasa ozi raw n'ebe a maara na ọ naghị akwado ya.

## Ndebanye (`registry.ts`)

Singleton `guardrailRegistry` na-enye:

- `register(guardrail)` — na-agbakwụnye guardrail (ma ọ bụ jiri aha ahaziri dochie nke dị adị) ma
  hazie ha ọzọ dịka `priority` na-arịgo.
- `clear()` / `list()` — ngwa enyemaka nchịkwa.
- `runPreCallHooks(payload, context)` — na-agafe guardrail ndị na-arụ ọrụ, na-ebufe
  payload ahụ site na `modifiedPayload`, ma kwụsị na `block: true` mbụ.
- `runPostCallHooks(response, context)` — otu usoro ahụ n'akụkụ nzaghachi.
- `resetGuardrailsForTests({ registerDefaults })` — na-ehichapụ ọnọdụ ma, ma ọ bụrụ na ahọrọ ya,
  debanyeghachi ntọala ndabara iji kewapụ ule nke ọma.

Ndị na-agba ọsọ abụọ ahụ na-eweghachi `{ blocked, payload|response, results, guardrail?, message? }`
ebe `results` bụ n'usoro ndekọ `GuardrailExecutionResult` nke gụnyere mpaghara
`blocked`, `skipped`, `modified`, `error`, na `meta` maka guardrail ọ bụla,
nke bara uru maka nsuso.

### Ịgbanyụ Guardrail Maka Arịrịọ Ọ Bụla

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` na-achịkọta ndepụta
aha guardrail na-enweghị oyiri nke a ga-awụli maka arịrịọ dị ugbu a. Isi mmalite
(ha niile bụ nhọrọ, a na-ejikọta ha niile):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` dị n'ahụ arịrịọ (n'ọkwa kachasị elu)
- `metadata.disabledGuardrails` dị n'ahụ arịrịọ
- Header `x-omniroute-disabled-guardrails` (ma ọ bụ nke ochie
  `x-disabled-guardrails`)

Uru nwere ike ịbụ n'usoro string ma ọ bụ string nke rikoma kewara; a na-ahazi
aha ka ha bụrụ lowercase kebab-case (`pii_masker` → `pii-masker`). A na-ebufe
nsonaazụ ahụ site na `context.disabledGuardrails` gaa na ndebanye ahụ, nke na-awụli
guardrail ndị dabara (`skipped: true` n'ime `results`).

## Usoro Mmezu

Maka arịrịọ ọ bụla na-agafe na `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` na-emepụta ndepụta ihe a ga-amafe site na API key, body,
   na headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` na-eme guardrails n'usoro priority
   na-arị elu:
   - A na-edekọ guardrails ndị agbanyụrụ dịka `skipped`.
   - `preCall` nke guardrail ọ bụla nwere ike idegharị payload site na `modifiedPayload`.
   - `block: true` mbụ na-akwụsị usoro ahụ ozugbo, handler ahụ wee weghachite
     nzaghachi ọjụjụ guardrail.
3. Payload ahụ (nke enwere ike idegharị) na-abanye na combo routing na upstream
   dispatch.
4. Mgbe ahaziri nzaghachi ahụ, `guardrailRegistry.runPostCallHooks(...)`
   na-eme otu usoro ahụ na nzaghachi ahụ. `block: true` n'ebe a na-ewepụ nzaghachi
   upstream ahụ.

A na-edekọ guardrails ndị tụbara mperi na `error: <message>`, a na-edekwa ha na log site na
`logger.warn`, mana usoro ahụ na-aga n'ihu — nke a bụ nhazi fail-open e mere ụma.

## Nhazi

Environment variables ndị guardrails arụnyere n'ime sistemụ na-agụ:

| Variable                              | Ihe na-eji ya             | Mmetụta                                                                                                 |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Tọọ ya ka ọ bụrụ `false` iji gbanyụọ nchọpụta kpamkpam.                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Iwu injection: `warn`, `block`, ma ọ bụ `log`. Legacy value `redact` anaghị edegharị ederede injection. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mode maka injection guard; ọ bụkwa DB feature flag nke **na-akagbu** env vars (DB > ENV).               |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Severity kacha nta nke `MODE=block` na-ajụ: `high` (ndabara), `medium`, ma ọ bụ `low`.                  |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Legacy alias maka `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Mgbe ọ bụ `true`, a na-ekpuchi PII dị na request (n'adabereghị na injection mode).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Na-achịkwa omume masker n'akụkụ response.                                                               |

Guardrails nke Modality Bridge na-agụ runtime config site na settings store
nke DB na-akwado (`getSettings()`), ọ bụghị env vars. Primary keys nke Vision bụ
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. A na-anabata legacy
`visionBridge*` keys naanị dịka documented one-cycle read
fallback; ihe dashboard na-ede na-eji primary keys. Defaults na fallback
resolver dị na `src/shared/constants/modalityBridgeDefaults.ts`, ebe a ka na-edobe legacy
constants na `src/shared/constants/visionBridgeDefaults.ts`.

Audio na-eji `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, tinyere settings
`modalityBridgeCache*` ndị a na-ekekọrịta. Audio enweghị legacy-key fallback n'ihi na e
webatara keys ndị a na schema nke Modality Bridge.

Video na-eji `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, tinyere settings `modalityBridgeCache*` ndị a na-ekekọrịta.
A na-agbanyụ ya na ndabara n'ihi na FFmpeg/ffprobe bụ operational
dependencies ndị nhọrọ, na frame captioning na-agbakwunye latency na model cost.

## Guardrail Ahaziri

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Daily budget exceeded" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Nzọụkwụ:

1. Mepụta `src/lib/guardrails/myGuardrail.ts` nke na-agbatị `BaseGuardrail`.
2. Mejuputa `preCall` na/ma ọ bụ `postCall`.
3. Debanye ya n'oge mbubata (tinye site na `registerDefaultGuardrails`) ma ọ bụ
   kpọọ `guardrailRegistry.register(...)` n'oge sistemụ na-arụ ọrụ — ndekọ ahụ na-eji
   guardrail ọhụrụ dochie nke ọ bụla dịbu nke nwere otu aha ahaziri ahazi.
4. Tinye ule n'okpuru `tests/unit/` (ihe atụ ndị dị ugbu a:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Nnwale

Jiri `resetGuardrailsForTests()` n'etiti ule iji malite site n'ọnọdụ a maara.
Nyefee `{ registerDefaults: false }` iji malite na ndekọ efu ma
debanye naanị guardrail ndị a na-anwale. Vision Bridge na-anabata ntinye
ndabere (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge na-ekpughe
ebe ntinye yiri ya maka ntọala, ike, nhọrọ ụdị STT, nyocha
nzere, na ntụgharị okwu ọdịyo gaa na ederede. Ya mere, ule nwere ike ịnwale usoro abụọ ahụ na-enweghị ohere
ịnweta DB ma ọ bụ netwọkụ.

## Hụkwa

- `src/lib/guardrails/` — mmejuputa
- `src/shared/utils/inputSanitizer.ts` — ihe nchọpụta a na-ekekọrịta nke na-akwado
  igbochi ntinye prompt na ikpuchi PII
- `src/shared/constants/visionBridgeDefaults.ts` — ndabara Vision Bridge na
  ndepụta ụdị nke a na-amanye iji bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — ndabara runtime Vision/Audio a na-ekekọrịta
- `docs/architecture/RESILIENCE_GUIDE.md` — oyi akwa kwụụrụ onwe ya (circuit breaker, oge nchere)
- `docs/reference/ENVIRONMENT.md` — ntụaka zuru ezu nke env var

## Mkpuchi route nke injection-guard & red-team (Oge 8 · Blọk D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) na-ekpuchi route niile
na-anabata prompt ndị ọrụ. Ọ na-asọpụrụ `INJECTION_GUARD_MODE` (ndabara `warn` = naanị dekọọ;
`block` = weghachite HTTP 400 `SECURITY_001`).

| Ụdị                 | Route                                                                                                                                                | Ọnọdụ ndabara |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Ederede (dị ugbu a) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Mmepụta             | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Mwepụta ederede (`extractMessageContents`) na-ekpuchi `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kwa abalị, `nightly-llm-security.yml`):** promptfoo na-akwado na route ọ bụla na-egbochi
corpus OWASP-LLM mgbe `INJECTION_GUARD_MODE=block`; garak na-agba probes (ọ na-awụfe ma ọ bụrụ na secret adịghị).
Agụnyere `moderations` maka ịdị n'otu — ndị na-ahụ maka sistemụ nọ na block-mode nwere ike iwepụ ya site na
`resolveDisabledGuardrails`.

Workflow nke abalị (`.github/workflows/nightly-llm-security.yml`, cron + iji aka
malite) nwere ọrụ abụọ:

- **`promptfoo-guard` (na-egbochi)** — na-agba `promptfoo eval -c promptfooconfig.yaml`
  na `INJECTION_GUARD_MODE=block`. Ọnọdụ mmegide ọ bụla (dịka "leghara
  ntuziaka niile gara aga anya…", jailbreak ụdị DAN) na-akwado na nzaghachi ahụ nwere
  `error.code === "SECURITY_001"`, ya bụ, na guard ahụ jụrụ arịrịọ ahụ n'ezie.
- **`garak` (ndụmọdụ)** — na-agba garak `--probes promptinject,dan,leakreplay`
  megide instance OmniRoute mpaghara (`http://localhost:20128/v1`). A na-achịkwa ya site na
  secret onye na-eweta (`PROMPTFOO_PROVIDER_KEY`); ọ na-awụfe n'enweghị nsogbu ma tinye
  `|| true` na njedebe, ya mere ọ na-enye akụkọ na-emeghị ka CI daa.

Mkpuchi nke ihe enyemaka guard (`createInjectionGuard` / `withInjectionGuard`)
na-erute route `/v1` ọ bụla nwere prompt; a na-ewepụta ederede prompt site na
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` site na
`extractMessageContents()` dị na `src/shared/utils/inputSanitizer.ts`.
