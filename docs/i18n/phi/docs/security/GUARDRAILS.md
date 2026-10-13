# Guardrails (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Pinagmumulan ng katotohanan:** `src/lib/guardrails/`
> **Huling na-update:** 2026-08-29 — v3.8.51 (ang pinagmulan ng transcript ng Video Bridge ay idinedeklara ng tumatawag,
> hindi pa bineberipika ng server — nilinaw alinsunod sa #11661)

Ipinapatupad ng mga guardrail ang kaligtasan, patakaran, at mga pagbabago sa content sa hangganan
sa pagitan ng OmniRoute at mga upstream provider. Maaaring suriin ng bawat guardrail (at
opsyonal na tanggihan, baguhin, o lagyan ng anotasyon) ang mga request payload (`preCall`) at
mga upstream response (`postCall`).

Ang system ay **fail-open**: kung mag-throw ang isang guardrail habang isinasagawa, itinatala ng registry
ang error at nagpapatuloy sa susunod na guardrail sa halip na mabigo ang
request. Ang pag-block ay isang tahasang desisyon (`block: true`), at hindi kailanman aksidente.

## Mga Naka-built-in na Guardrails

Awtomatikong naglo-load ang registry ng anim na guardrails sa prayoridad na pagkakasunod-sunod sa pag-import
(tingnan ang `registry.ts` → `registerDefaultGuardrails()`):

| Prayoridad | Pangalan            | Yugto(s)       | File                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ang mas mababang mga numero ng prayoridad ay tumatakbo **una**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Nagsasagawa ng intercept sa mga kahilingan na may dalang imahe na nakatuon sa **mga non-vision model** at alinman
na nire-route ang buong kahilingan sa isang vision-capable na modelo o pinapalitan ang mga bahagi ng imahe
ng mga paglalarawan ng teksto na ginawa ng isang configurable na vision model bago ang upstream call. Pinapayagan nito ang mga text-only na provider na transparently na hawakan
ang multimodal payloads.

Daloy:

1. Laktawan kung ang target na modelo ay sumusuporta na sa vision (maliban kung ito ay lumilitaw sa
   forced-bridge list `isVisionBridgeForcedModel`).
2. Kunin ang mga bahagi ng imahe sa pamamagitan ng `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), na nag-delegate sa **unified media
   detector** `detectMediaParts()` sa `open-sse/utils/mediaParts.ts` — ang
   nag-iisang pinagmulan ng katotohanan na ibinabahagi sa combo compatibility filter.
   Ang extraction ay pinapayagan lamang sa mga top-level na bahagi ng mga hugis
   na maaaring i-splice muli ng `replaceImageParts` (ang extract↔replace na kontrata): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, at Responses API `input_image`. Ang mga nested hits at
   indicator-only na hugis ay materyal para sa combo-filter at hindi kailanman kinukuha.
   Laktawan kung walang natagpuan.
3. I-resolve ang runtime config sa pamamagitan ng `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): ang mga bagong `modalityBridge*`
   na mga key ng setting ay nananalo; ang legacy `visionBridge*` na mga key ay nananatiling isang **one-cycle
   fallback** (rollback window). Laktawan bago ang anumang media traversal kapag ang
   bridge ay hindi pinagana.
4. Ang mode selector (`modalityBridgeVisionMode`, tingnan ang talahanayan sa ibaba) ay nagpasya
   sa reroute vs describe. Ang reroute ay nagbabalik ng `modifiedPayload` na may tanging `model`
   na pinalitan, kasama ang meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Describe path: limitahan ang mga imahe sa `maxImages`, bumuo ng task-aware na prompt,
   kumonsulta sa describe cache, tawagan ang vision model **sa parallel**
   (`Promise.allSettled`), at i-inject ang `[Image N]: <description>` na mga bahagi ng teksto sa
   kanilang lugar. Ang nabigong describe ay nagbabalik ng `null` at ang orihinal na bahagi ng imahe ay
   **napanatili** (#4012) — maliban sa combo describe path kapag bawat
   describe ay nabigo, kung saan ang isang nakumpirmang non-vision upstream ay nakakakuha ng
   `(unavailable — no vision-capable provider connected)` stub sa halip (#8430).
6. Ibalik ang `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mode selector (`modalityBridgeVisionMode`)

| Mode       | Default | Behavior                                                                                                                                                                                                                                                                                                               |
| ---------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Legacy heuristic, untouched (#6640/#7204): non-combo/`auto/` models ay nire-route sa pinakamahusay na vision model maliban kung ang orihinal na modelo ay may mga magagamit na kredensyal (kung gayon ay describe); ang mga combo target ay palaging nagde-describe.                                                   |
| `describe` |         | Palaging nagde-describe — ang reroute block ay ganap na nalaktawan; ang napiling modelo ng gumagamit ay palaging sumasagot.                                                                                                                                                                                            |
| `reroute`  |         | Pinipilit ang reroute: ang keep-credentialed-model guard ay nalaktawan. Ang reroute-**target** credential guard ay nananatiling naaangkop — kapag walang magagamit na vision target, ang kahilingan ay bumabagsak sa describe upang ang mga raw na imahe ay hindi kailanman umabot sa isang text-only backend (#8430). |

Ang mga pinilit na mode ay nag-short-circuit **bago** tumakbo ang auto heuristic; ang `auto` na pag-uugali
ay byte-identical sa pre-PR-1 guardrail.

#### Task-aware describe prompt (`modalityBridgeVisionTaskAware`)

Default **true**. Ang `composeVisionPrompt()` (`visionBridgeHelpers.ts`) ay nagdadagdag
ng teksto ng **huling mensahe ng gumagamit** (na pinutol sa 500 chars) sa base
describe prompt, na nagdidirekta sa paglalarawan patungo sa kung ano talaga ang tinanong ng gumagamit
(codex-vision-proxy pattern) at humihiling sa vision model na i-transcribe ang nakikitang
teksto. Kapag ang flag ay naka-off — o walang teksto ng gumagamit — ang base prompt ay ginagamit nang walang pagbabago.

Ang describe self-loop's own OpenAI-compatible request (`callVisionModelSingle()`
sa `visionBridgeHelpers.ts`) ay palaging humihiling ng `image_url.detail: "high"` —
walang kondisyon, para sa bawat caller/provider, hindi nakasalalay sa anumang signal ng kliyente.
Ang low-detail sampling ay nagpapababa ng OCR accuracy para sa eksaktong text-transcription
na gawain na hinihiling ng prompt na ito, kaya ang describe call mismo ay palaging humihiling ng mataas
na detalye anuman ang antas ng detalye na ginamit ng orihinal na inbound request. Ito
ay nakakaapekto lamang sa internal describe request body; hindi nito binabago kung paano
ipinapasa ng OmniRoute ang sariling `image_url.detail` ng caller sa pangunahing request —
ang default na ito ay inilalapat nang hiwalay, at tanging para sa mga natukoy na OpenCode clients, sa
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Ang
Anthropic wire-format branch ng describe self-loop ay walang `detail` field
at hindi naapektuhan ng alinman sa default.

#### Describe output cap (`modalityBridgeVisionMaxChars`)

| Key                            | Default | Range           |
| ------------------------------ | ------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` o 100–50000 |

`0` (default) ay nangangahulugang **walang cap** — ang description na ibinabalik ng
`callVisionModel()` ay ipinapasa nang hindi binabago, pinapanatili ang umiiral na
behavior. Anumang halaga sa saklaw na 100–50000 ay pinutol ang description na may
`…` suffix bago ito ipasok muli bilang `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` sa `src/lib/guardrails/visionBridge.ts`).
Itataas ito para sa mga detalye-heavy OCR tasks kung saan kailangan ng downstream model ang
buong transcription; babaan ito upang limitahan ang paggamit ng token sa mga chatty vision models.
Ang field ng dashboard ay nasa Advanced panel ng Vision tab
(`modality-bridge-max-chars` sa `ModalityBridgeVisionTab.tsx`) at pinipigilan ang anumang
halaga sa pagitan ng 1 at 99 pataas sa 100 floor habang iniiwan ang isang tahasang `0`
na hindi nababago — ang `0` ay isang wastong Zod value sa sarili nitong karapatan
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), hindi lamang
ang "unset" default.

#### Describe cache (`modalityBridge/bridgeCache.ts`)

In-memory LRU + TTL cache para sa describe outputs, ibinabahagi sa buong proseso.
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` na may
length-prefix framing (walang field-boundary collisions). Ang model component ay
ang **configured** bridge model, hindi ang model na talagang sumagot —
`callVisionModel` ay maaaring bumalik sa loob, at ang pag-key per attempt ay
magpapalubog sa cache. Ang mga nabigong describe ay hindi kailanman naka-cache. Mga setting:

| Key                             | Default | Range   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Remote image normalization (self-loop describe/base64 fetch)

Kapag ang bridge ay kumukuha ng isang **remote** na imahe mismo — ang Anthropic describe
self-call at ang claude-wire-format base64 conversion
(`ensureBase64ImagesForClaudeWire`), parehong sa pamamagitan ng
`fetchRemoteImageAsDataUri()` sa `visionBridgeHelpers.ts` — ang resulta ng data
URI ay ipinapasa sa `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) bago ito isama sa vision-model
request. Ang mga oversized na imahe ay pinapababa sa isang **2048px long edge** (na tumutugma
sa resize cap na inilalapat na ng OpenAI/Anthropic sa server-side), na nagpapababa
ng upload bytes/latency nang hindi binabago kung ano ang nakikita ng vision model. Ang resizing
ay gumagamit ng `sharp`, na na-load sa pamamagitan ng dynamic import: sa isang platform kung saan ang
native binary nito ay nabigong mag-load, ang `normalizeDataUri()` **hindi kailanman nag-throw** — bumabalik ito
sa passthrough ng orihinal na bytes, kaya ang describe/base64-conversion
path ay palaging patuloy na gumagana. Ang mga non-image bytes (isang fetch na hindi nagbalik ng
decodable image) ay ipinapasa rin nang hindi nababago. Ang normalization na ito ay
naka-scope sa mga imahe na kinukuha ng bridge para sa sarili nitong self-call — hindi ito kailanman
inaangkop sa raw passthrough payload ng caller, na naaayon sa
opt-in-only mutation principle (Hard Rule #20).

#### Settings schema + migration

Ang mga bagong `modalityBridge*` keys ay Zod-validated sa `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, ang `modalityBridgeCache*` trio, at ang
`modalityBridgeAudio*` group na ginagamit ng Audio Bridge. Ang migration
`141_modality_bridge_settings.sql` ay kumokopya ng umiiral na legacy
`visionBridge*` values sa tumutugmang bagong keys (idempotent, hindi kailanman nag-o-overwrite
ng operator-set `modalityBridge*` value); ang mga legacy keys ay mananatiling tinatanggap bilang isang
read fallback para sa isang release cycle.

#### Transparency header + stats

Ang mga describe-transformed responses ay nagdadala ng
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(built by `buildModalityBridgeHeader()` sa `modalityBridge/bridgeStats.ts`,
stamped by `withModalityBridgeHeader()` sa `src/sse/handlers/chatHelpers.ts`).
Ang mga rerouted requests ay walang **header** — ang payload ay hindi nabago at ang model
swap ay nakikita na sa `model` field ng response body.

`GET /api/modality-bridge/stats` (management auth, parehong tier bilang
`GET /api/settings`) ay nagbabalik ng in-memory per-modality counters
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para sa `vision`, `audio`, at
`video`. Ang `averageLatencyMs` ay gumagamit ng `latencySamples`, hindi lahat ng attempts, bilang denominator; ang isang operasyon na walang timing ay hindi gumagawa ng zero-millisecond
sample. Ang `bridged` ay nananatiling backward-compatible alias para sa matagumpay
na conversions; ang mga nabigong attempts ay hindi ito pinapataas.
Ang mga counter ay nire-reset sa pag-restart ng proseso ayon sa disenyo
(telemetry, hindi accounting).

#### Dashboard configuration

Ang nakalaang pahina ng dashboard ay
`/dashboard/settings/modality-bridge`. Ang URL-addressable na mga tab na `Vision`, `Audio`,
at `Video` ay nagpapanatili ng mga query parameter habang pinapalitan ang halaga ng `tab`.
Ang tab na Vision ay naglalantad ng enablement, mode, pagpili ng modelo (kasama ang awtomatikong
default), task-aware prompting, advanced timeout/image/description-length/cache
limits, runtime
counters, at isang guarded sample request. Ang tab na Audio ay aktibo rin: ito ay naglalantad
ng enablement, isang STT-only model picker na may Auto, timeout/max-clip limits, audio
counters, at isang `input_audio` sample test. Ang tab na Video ay functional: ito ay nag-uulat
ng estado ng runtime ng FFmpeg/ffprobe — isa sa apat na tahasang estado ng UI (`unknown` habang
ang probe ay nasa flight o hindi nakumpleto, `restricted` sa isang non-loopback
dashboard host kung saan ang probe ay na-skip sa client-side, `unavailable` kapag na-probe
at nakumpirmang nawawala, o `available` kasama ang mga bersyon ng FFmpeg/ffprobe) — nagpapanatili
ng enable/model/frame/video/timeout limits, sinasala ang model picker sa mga vision-capable
models, at naglalantad ng video counters.

Ang dating Vision Bridge card sa ilalim ng mga setting ng AI ay isang compatibility link sa
bagong pahina; wala na itong pangalawang kopya ng form. Ang Media Providers ay nag-uugnay din
ng Image-to-Text at Speech-to-Text workflows sa mga kaukulang Modality
Bridge tabs nang hindi inaalis ang umiiral na Speech-to-Text playground.

**Self-loop admission bypass:** kapag ang describe call ay dumadaan sa sariling `/v1` self-loop ng OmniRoute
(non-standard provider model), ang sub-request ay nagpapadala ng
`x-omniroute-admission-bypass: internal` at na-authenticate gamit ang na-resolved
self-loop credential — ang lokal na `sk_omniroute` sentinel sa lokal na mode, o ang
operator-configured na `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350) kaya
ang `REQUIRE_API_KEY=true` deployments ay maaari pa ring patakbuhin ang describe call. Ang bypass
ay iginagalang lamang para sa mga eksaktong credential na iyon, kaya ang mga panlabas na kliyente ay hindi
maaaring gamitin ang header upang laktawan ang admission.

Ang mga legacy defaults ay nasa `src/shared/constants/visionBridgeDefaults.ts`; ang
mga bagong mode/task-aware/cache defaults at ang settings resolver ay nasa
`src/shared/constants/modalityBridgeDefaults.ts`. Ang guardrail ay naglalantad ng isang
`deps` constructor option upang ang mga pagsubok ay makapag-inject ng pekeng `getSettings` at
`callVisionModel` implementations.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Nagsasagawa ng intercept sa mga audio-bearing chat requests bago sila umabot sa isang target na hindi
alam na tumatanggap ng audio input. Hindi nito nire-route ang chat request: ang mga audio parts ay
naka-transcribe sa pamamagitan ng umiiral na OpenAI-compatible multipart endpoint at ang
napiling chat model ay nagpapatuloy gamit ang mga text transcripts.

Daloy:

1. I-resolve ang `supportsAudio` sa pamamagitan ng `getResolvedModelCapabilities()`. Ang tahasang
   provider-registry metadata ang mananaig, pagkatapos ay static model metadata, pagkatapos ay synced
   `modalities_input`. Ang isang idineklarang input list na walang `audio` ay `false`; walang
   ebidensya ng kakayahan ay mananatiling `null`. Parehong `false` at `null` ay nag-activate sa
   conservative bridge, habang ang `true` ay lumalaktaw dito.
2. I-resolve ang `modalityBridgeAudio*` settings at kunin ang spliceable top-level
   audio parts mula sa bawat mensahe sa pamamagitan ng shared `detectMediaParts()`
   detector. Ang mga suportadong wire shapes ay OpenAI `input_audio`, `audio_url`, at
   `source.media_type: "audio/*"`. Ang nested audio ay nadedetect para sa routing ngunit hindi
   tinatanggal ng splice path. Ang trabaho ay nakatakda sa `modalityBridgeAudioMaxClips`;
   ang mga susunod na bahagi ay mananatiling hindi nababago.
3. I-honor ang isang naka-configure na `provider/model`, o hayaan ang `selectAudioBridgeModel()` na maglakbay
   sa `AUDIO_TRANSCRIPTION_PROVIDERS` sa stable catalog order at piliin ang unang
   modelo na may magagamit na aktibong provider credential.
4. Ang `callAudioTranscription()` ay nagko-convert ng base64/data-URI audio sa isang multipart
   `file`, o nagda-download ng remote `audio_url` sa pamamagitan ng public-only outbound
   guard na may DNS pinning at isang 25 MB bound. Pagkatapos ay ipinapadala nito ang file at napiling
   modelo sa lokal na `/v1/audio/transcriptions` self-loop, na na-authenticate gamit ang
   `resolveSelfLoopBearer()`. Ang umiiral na transcription route ay nagsasagawa ng normal
   credential lookup, cooldown/rate-limit handling, at provider dispatch.
5. Ang matagumpay na tawag ay pinapalitan ang kanilang mga bahagi ng `[Audio N]: <transcript>`. Ang mga tawag
   ay tumatakbo gamit ang `Promise.allSettled`: ang isang indibidwal na pagkabigo ay nagpapanatili ng orihinal na
   audio part (#4012 contract). Kung ang bawat tawag ay nabigo at ang target ay napatunayan
   `supportsAudio === false`, ang mga bahagi ay nagiging
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 contract). Para sa
   isang hindi kilalang target (`null`), ang lahat ng pagkabigo ay nananatiling hindi nababago. Ang isang napatunayang
   text-only target na walang magagamit na STT credential ay tumatanggap ng parehong tahasang
   stub nang hindi naglalabas ng network call.

Ang matagumpay na transcripts ay gumagamit ng process-wide Modality Bridge LRU/TTL cache. Ang
key ay pinagsasama ang audio reference, ang stable na `audio-transcription` operation
label, at napiling STT model; ang mga pagkabigo ay hindi kailanman naka-cache. Ang mga audio attempts ay nag-a-update
ng shared `bridged`, `cacheHits`, `failures`, at `lastUsedAt` counters.
Ang mga na-transform na responses ay nagdadala ng
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; ang mga untouched
requests ay hindi tumatanggap ng Audio Bridge segment.

Ang mga runtime settings ay DB-backed at Zod-validated:

| Key                           | Default | Range         |
| ----------------------------- | ------- | ------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —             |
| `modalityBridgeAudioModel`    | `""`    | Auto o STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000   |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10          |

Ang shared cache ay nananatiling kontrolado ng `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, at `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts top-level video parts in Chat Completions `messages` at mga Responses
API `input` bago tawagin ang isang target na walang kilalang katutubong suporta sa video.
Ang mga suportadong anyo ay `input_video`, `video_url`, `video_source`, HTTPS URLs,
at `data:video/*;base64,...` data URIs. Ang mga simpleng filename sa teksto ay hindi itinuturing
bilang video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ang may-ari ng request traversal, ang
capability/policy check, per-request aggregation, at ang response payload.
Per-video work — acquisition, ang whole-result cache, paglalarawan ng isang frame
sequence (na pinagsasama ang anumang caller-declared audio transcript), at per-attempt
metrics/abort/cleanup — ay nakatago sa likod ng `processVideoPart` sa
`videoBridgePipeline.ts`, na tinatawag isang beses sa bawat bahagi ng video sa loob ng loop ng `preCall`.
Ang module na iyon ay nagtatakda rin ng mga tiyak na hangganan ng port `VideoMediaBrokerPort`
(pagkuha ng bytes at pagkuha ng sampled frames), `VideoAudioTranscriptionPort`
(pagsasama ng isang caller-declared audio transcript sa mga sampled captions), at
`VideoDrilldownPort` (ang legacy raw-store shape). Ang production STT at frame retention
ay binubuo sa paligid ng naglalarawang port sa pamamagitan ng `createVideoSttAdapter` at
`createVideoDrilldownAdapter`; ang huli ay gumagamit ng shared opaque-handle lifecycle.

Ang pampublikong `/v1` request path ay hindi kailanman nag-iimport o nag-iinvoke ng subprocess. Ang mga remote
na video ay dinownload sa ilalim ng 50 MiB na limitasyon; ang inline base64 na mga video ay may
konserbatibong 36 MiB na decoded per-video cap upang ang modelo/mga mensahe/framing envelope
ay maaaring manatili sa loob ng pampublikong JSON request admission limit na 50 MiB. Ang inline
length at decoded-size estimates ay sinusuri bago ang allocation. HTTPS ay
kinakailangan sa paunang remote URL at bawat redirect, gamit ang umiiral na
public-only outbound guard na may DNS pinning. Ang mga bytes ay tumatawid sa eksaktong internal
`POST /api/modality-bridge/video/extract` broker boundary. Ang ruta na iyon ay parehong
`LOCAL_ONLY` at `SPAWN_CAPABLE`, tumatanggap lamang ng isang per-process authenticated,
trusted-loopback request, at hindi kailanman tumatanggap ng URL, filesystem path, executable,
o argument list. Ang API body-size pipeline at ang incremental body reader ng handler
ay independiyenteng nagpapatupad ng 50 MiB broker input cap. Ang nakabound na queue nito ay tumatakbo
ng isang extraction sa isang pagkakataon, pinapayagan ang apat na pending jobs, at naglalagay ng cap sa pending input sa
100 MiB.

Sa loob ng broker, `ffprobe` ay nagbabasa ng isang pribadong lokal na file; ang fixed format
allowlist ay nag-eexclude ng playlist at manifest formats. Para sa pinapayagang MOV-family
containers, ang external MOV data references ay nananatiling hindi pinagana sa default, at ang
fixed command ay hindi nag-oopt in sa kanila. Parehong `ffprobe` at `ffmpeg` ay gumagamit ng
`file`-only protocol whitelist, isang thread, fixed argument arrays, walang shell,
at mga executable na nalutas mula sa `PATH`. Ang mga attached-picture cover streams ay hindi
maaaring maging playable candidates. Lahat ng playable streams ay dapat sumunod sa mga limitasyon, at isang
explicit default stream ang pinapaboran bago ang deterministic lowest-index
fallback. Ang mga video ay limitado sa 600 segundo, 8,192 pixels bawat dimensyon, at
33,554,432 source pixels. Ang FFmpeg ay kumukuha ng 1–16 midpoint JPEG frames, pinapaliit ang
mahahabang gilid sa pinakababa ng 1,024 pixels nang hindi nag-uupscale ng mas maliliit na inputs, at
hindi kailanman tumatanggap ng URL. Ang sampling ay `uniform` sa default. Ang opsyonal na
`scene_aware` at experimental na `segment_aware` policies ay nagsasagawa ng isang karagdagang
fixed FFmpeg pass sa na-validate na lokal na stream, pumipili ng bounded
`showinfo` scene timestamps, at bumabalik nang deterministic sa parehong
uniform midpoints sa pagkabigo ng detector, timeout, maling output, o isang walang laman
na candidate set. Ang segment-aware mode ay nag-aallocate ng midpoint samples nang proporsyonal sa
validated scene intervals; ang segment-aware evidence at fallback behavior ay
detalyado sa ibaba. Ang hard 16-frame cap ay
ipinapataw pagkatapos ng pagpili sa bawat policy. Kapag ang isang scene-aware request ay may
isang one-frame budget lamang, ginagamit nito ang uniform midpoint ng aktibong full-video o focus
window at nag-uulat ng `policyEffective: uniform`: isang napiling scene frame
ay hindi maaaring mapanatili ang parehong temporal ends. Ang isang caller ay maaaring opsyonal na magbigay ng
isang finite focus window (`start`/`end` seconds); ang mga hangganan ay nakatakda sa media
duration, ang mga reversed o non-finite windows ay tinatanggihan, at lahat ng sampling
policies ay isinasagawa lamang sa loob ng normalized interval. Ang resulting
window ay kasama sa sampling metadata at sa untrusted description
prefix upang ang downstream models ay makapag-iba ng isang focused excerpt mula sa buong
timeline.

Ang semantic caption focus ay isang hiwalay, explicit na setting. Ang default na `full`
analysis mode ay nagpapanatili ng umiiral na frame prompt at hindi kailanman ipinapasa ang request
text sa caption model. Sa `focused` mode, ang bridge ay nagbabasa lamang ng pinakabago
na non-empty user-authored `text`/`input_text` mula sa parehong Chat o Responses
container, normalizes ito sa NFC, pinagsasama ang control characters at whitespace,
at nililimitahan ito sa 500 Unicode code points. Ang isang walang laman na resulta ay bumabalik sa
eksaktong `full` prompt. Ang isang magagamit na hint ay serialized bilang JSON sa isang nakalaang
untrusted-user-context block at maaaring mag-prioritize lamang ng observable details; hindi ito
maaaring mag-override sa hiwalay na babala laban sa pagsunod sa mga tagubilin na nakikita
o naririnig sa media. Ang textual focus ay hindi kailanman nag-iinfer ng `start`/`end` o nagbabago
sa temporal sampler.

#### FU-07 structural segment evidence

`segment_aware` ay gumagamit ng isang bounded pre-analysis pass sa na-validate
na lokal na video stream. Ang fixed filter chain ay unang nag-scale sa pinakababa ng 320 pixels
wide, nag-detect ng mga pagbabago sa scene at frozen intervals, pagkatapos ay kumukuha ng 1 frame bawat
segundo para sa blur, average luma, at spatial/temporal information. Ang pass ay
nililimitahan sa 600 structural samples, isang FFmpeg/filter thread, ang parehong
`file`-only protocol at container allowlists, isang 1 MiB process-output bound,
at sa pinakababa ng 30 segundo sa loob ng shared abort/deadline ng broker. Hindi ito kailanman
tumatanggap ng command, filter, path, o URL mula sa request.

Ang mga estruktural na halaga ay deterministic sampling evidence, hindi semantic video understanding. Hindi nila pinapalagay ang mga paksa, aksyon, caption, pagsasalita, o intensyon ng gumagamit. Ang mga hangganan ng eksena at freeze ay bumubuo ng mga segment; ang freeze coverage, blur, exposure, spatial detail, at temporal change ay nakakaapekto lamang sa kung paano inilalaan ang umiiral na 1–16 frame budget. Ang isang ganap na frozen na segment ay nakatakdang maging isang frame, habang ang mga non-frozen na segment ay nakikipagkumpitensya para sa natitirang budget. Kapag ang mga hangganan ay mas marami kaysa sa mga frame, ang uniform timeline coverage ay pinanatili upang ang mabilis na maagang cuts ay hindi makapagtagong ng isang mahabang trailing segment. Ang mga hangganan ng eksena sa loob ng 1-segundong analysis resolution ng isang freeze boundary ay pinagsasama-sama.

Ang mga nawawalang filter, maling anyo/empty evidence, isang error sa detector, o ang bounded pre-analysis timeout ay nabibigo sa eksaktong uniform midpoint policy. Ang isang caller abort o broker deadline ay hindi nabibigo sa bukas: tinatapos nito ang in-flight subprocess, pinipigilan ang susunod na frame extraction, at ang pribadong pansamantalang puno ay tinatanggal sa `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ay bumubuo ng deterministic real FFmpeg fixtures para sa post-dedup caption-call savings, dense-motion budget allocation, blur/exposure/SI-TI evidence, rapid cuts na may mahabang tail, at gradual-fade false positives. Ito ay nagtatala ng pre-analysis wall time at, kung saan ang `/usr/bin/time` ay available, child CPU at peak RSS. Ang mga quality checks nito ay structural oracles lamang. Ang tunay na caption-model quality ay nananatiling `HOLD` dahil ang harness na ito ay walang awtorisadong endpoint o frozen judge. Ang mga monetary savings ay nananatiling `HOLD` maliban kung ang `--caption-cost-per-call-usd` ay nagbibigay ng isang tahasang positibong per-call estimate; ang script ay hindi kailanman gumagawa ng alinman sa mga resulta.

Bawat frame ay limitado sa 4 MiB, lahat ng raw frames ay sama-samang 23 MiB, at ang serialized broker response ay 32 MiB. Ang isang pribadong pansamantalang direktoryo ay tinatanggal sa `finally`. Ang OmniRoute ay hindi nagbubundok ng FFmpeg at hindi tumatanggap ng custom executable path. Bago ang captioning, ang tulay ay nag-aaplay ng isang konserbatibong visual deduplication pass: bawat JPEG ay binabawasan sa isang 16×16 grayscale buffer at ikinumpara lamang sa huling frame na napanatili. Para sa isang hiniling na caption budget na higit sa isang frame, ang extraction ay nagbibigay ng isang bounded candidate pool ng hanggang dalawang beses na budget na iyon at hindi kailanman higit sa 16 frames. Ang hiniling na cap ay inilalapat lamang pagkatapos ng deduplication, kasama ang unang at huling napiling kandidato na pinanatili sa panahon ng huling thinning kapag ang budget ay hindi bababa sa dalawa. Ang versioned `grayscale-16x16-mean-cells-v2` policy ay gumagamit ng mas malaki sa mean luma delta at ang ratio ng thumbnail cells na ang normalized delta ay hindi bababa sa 0.05. Ang duplicate threshold ay ang constant na 0.04, na pinili para sa predictability sa halip na ilantad bilang isang runtime setting. Ang pangalawang high-contrast signal na ito ay nagpapanatili ng maliit na paggalaw at mga pagbabago sa nakikitang teksto na maaaring itago ng mean-only comparison. Ang mga error sa comparator o decoder ay nabibigo sa bukas at pinapanatili ang coverage. Ang output metadata ay naghihiwalay ng mga extracted candidates, matagumpay na ginamit na frames, at mga visual duplicates na tinanggal.

Ang isang tahasang minarkahang bahagi ng video ay maaaring humiling ng isang timestamped contact sheet. Ang tulay ay bumubuo ng hindi hihigit sa isang 4-column, 16-frame JPEG grid. Bawat 512-pixel cell ay nag-uukit ng source timestamp nito sa isang high-contrast bottom band, habang ang parehong timestamps ay nananatili sa textual metadata para sa downstream association at audit. Ang kumpletong JPEG ay nananatiling nakatakdang 32 MiB. Kung ang `sharp` ay hindi makapag-decode o makapag-compose ng grid, ang tulay ay bumabalik sa mga indibidwal na JPEG frames; ang isang client abort ay patuloy na kumakalat sa operasyon ng sheet.

Ang promotion evidence ay tahasang hiwalay mula sa synthetic composition microbenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` ay nagtatakda ng isang schema-versioned A/B harness para sa tunay na OpenAI-compatible vision models. Sinusukat nito ang provider-reported tokens, end-to-end wall latency (kasama ang sheet composition), model-call count, at manifest-defined fact retention. Ang mga raw model responses ay hindi isinusulat sa ulat; tanging SHA-256 digests at mga matched fact IDs ang pinanatili. Ang harness ay walang network o paid model call maliban kung ang `--execute-real` ay ipinasa at ang `--model`, `OMNIROUTE_BASE_URL`, at `OMNIROUTE_API_KEY` ay na-configure. Nang walang tahasang tunay na run, ang machine-readable verdict nito ay nananatiling `HOLD`; ang synthetic payload/call-count measurements lamang ay hindi promotion evidence.

Ang hiwalay na `scripts/perf/video-bridge-promotion-eval.ts` ay kumokonsumo ng FU-07 o FU-09 observations. Ang promotion admission ay nangangailangan ng lahat ng walong synthetic scenario kinds kasama ang isang sanitized real clip, hindi bababa sa tatlong nasusukat na repetitions bawat role at case, lahat ng sampung idineklarang metrics, frozen media/prompt/expected-fact/settings digests, natatanging observation IDs at verified seeded A/B order. Ang execution receipt ay nag-uugnay sa corpus digest, eksaktong candidate SHA at model revision. Ang mga nawawalang o hindi wastong sukat ay nananatiling `HOLD`, kasama ang CPU na higit sa 30 s, peak RSS na higit sa 512 MiB o pre-analysis na higit sa 30 s. Ang mga ito ay mga evidence-admission caps, hindi isang bagong runtime RSS enforcement guarantee.

Ang FU-07 ay nangangailangan ng hindi bababa sa 98% quality retention at p95 latency na hindi hihigit sa 1.2x baseline, kasama ang alinman sa isang 0.05 absolute case-balanced mean recall improvement sa katumbas na mean caption calls, o hindi bababa sa 10% na mas kaunting mean post-dedup caption calls. Ang FU-09 ay nangangailangan ng hindi bababa sa 0.85 quality, 95% retention, 20% p95 latency reduction at 10% token reduction. Ang critical-fact loss, injection compliance o nawawalang paggamit ay pumipigil sa promotion. Ang isang execution ay hindi maaaring mag-promote ng anuman: ang `--previous-report` ay nagpapatunay ng dalawang magkakaibang, hindi nag-o-overlap, sunud-sunod na eligible executions ng parehong policy/model revision/candidate/corpus. Ang isang sampling experiment ay hindi maaaring magpatunay ng isang contact-sheet experiment.

Dapat i-score ng mga kolektor ang mga tugon sa memorya at i-save ang `responseDigest` kasama ang mga metrics at observation bindings, hindi kailanman ang response text. Ang consumer ay nagbabasa din ng mga legacy raw observations ngunit hindi kailanman kinokopya ang text na iyon sa mga ulat nito. Eksaktong isa sa `responseDigest` o `rawResponseText` ang tinatanggap para sa bawat observation. Ang versioned allowlist ay nananatiling walang laman na may immutable na `hold` default. Ang isang karapat-dapat na entry ay nangangailangan ng ebidensya na reference, patakaran, model revision, eksaktong candidate SHA, manifest digest at dalawang natatanging run IDs; ang mga nagkokontradik na konteksto ay tinatanggihan. Ang mga metadata na ito ay isang audit contract, hindi patunay na ang isang referenced file ay naglalaman ng tunay na sukat. Suriin ang aktwal na resibo bago magdagdag ng anumang entry. Ang management stats endpoint at Video dashboard ay naglalantad ng konserbatibong readiness. Ang isang naka-configure na model alias lamang ay hindi nagtatakda ng kanyang revision o ang tumatakbong candidate SHA, kaya ang kasalukuyang dashboard ay nag-uulat ng `HOLD` sa halip na muling gamitin ang eligibility mula sa ibang execution context. Ang tahasang experimental selection ay nananatiling hiwalay mula sa promotion; walang default na awtomatikong nagbabago.

Maaaring mag-attach ang mga caller ng optional na `transcript.cues` array sa isang suportadong bahagi ng video kapag mayroon na silang naka-align na text. Ang bawat cue ay dapat magdala ng `text`, isang finite na `start`/`end` interval sa loob ng nasusuring tagal, at isang whitelisted na `source` (`client`, `embedded`, o `audio-bridge`); ang `confidence` ay default sa `1` at dapat manatili sa pagitan ng `0` at `1`. Ang mga eksaktong duplicate na cues ay pinagsasama. Ang OmniRoute ay hindi kailanman nagsisimula ng transcription mula sa metadata na ito: ang validated cues ay kinokopya sa inilarawang resulta kasama ang source, confidence, at interval, at inilalarawan bilang hindi mapagkakatiwalaang observations kasama ang mga caption ng frame. Ang hindi wasto, out-of-range, o walang provenance na text ay tinatanggihan sa halip na ihalo sa caption stream. Ang parehong request-body transcript channels ay nag-normalize ng ibinigay na provenance sa `client`, kabilang ang self-asserted na `embedded` o `audio-bridge` labels. Tanging isang server-owned adapter ang maaaring magtalaga ng mga pinagkakatiwalaang label sa pamamagitan ng code-only na `trustedSource` argument; ang isang request JSON field ay hindi makararating sa argument na iyon. Ang transcript text ay nananatiling hindi mapagkakatiwalaang media-derived content, anuman ang provenance nito, at hindi dapat kailanman magtakda ng authorization.

Ang isang advanced caller ay maaaring magbigay ng `audioTranscript` track para sa parehong video; ito ay itinuturing na client-provided text, hindi patunay ng server transcription. Ang fusion seam ay nagpapatakbo ng visual at audio observations sa ilalim ng isang deadline at abort signal, inuutusan ang mga ito sa isang karaniwang timeline, pinagsasama ang mga eksaktong duplicate, at nag-uulat ng partial result kapag isa lamang sa mga bahagi ang nagtagumpay. Ang isang hindi wasto na `audioTranscript` ay bumababa sa partial result — ang visual description ay pinanatili at ang audio branch ay nagtatala ng sanitized failure code — sa halip na mabigo ang buong video. Ang per-branch availability, ang partial flag, at ang sanitized failure codes ay pinanatili sa inilarawang resulta, sa guardrail metadata (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), sa result-cache metadata, at sa bridge fusion counters. Ang default na Video Bridge path ay hindi nag-iinvoke ng speech-to-text o nagda-download ng pangalawang media copy; nang walang tahasang track na iyon, ito ay nananatiling video-only.

**Transcript retention (#12150 P1).** Ito ay awtomatikong nalalapat sa tuwing ang Video Bridge (na opt-in) ay nag-render ng transcript cue — walang hiwalay na retention flag. Kapag ang isang request ay nag-render ng anumang transcript cue (isang caller-declared na `transcript` o isang fused na `audioTranscript`), ang guardrail ay minamarkahan ito bilang `videoBridgeObserved` at gumagawa ng redacted shadow ng video description — isang magkaparehong rendering kung saan ang bawat cue's free-text body ay pinalitan ng `[redacted-video-transcript]`, na binuo sa pamamagitan ng pagpapalit ng structured cue field bago ang string ay ma-assemble (hindi sa pamamagitan ng pag-parse ng flattened text, kaya walang cue content — adversarial o ordinary, kabilang ang mga body na naglalaman ng `]` tulad ng `[inaudible]`/`[music]` — ang makakaligtas). Ang persisted call-log request body ay pinapalitan ang bawat video-derived text part para sa redacted shadow na iyon, na tumutugma sa content equality; ang `fullText` anchor ay muling binabasa mula sa natapos na pre-call guardrail payload, kaya ang match ay nagtatagumpay pa rin pagkatapos ng mga susunod na chain guardrails (ang PII at credential maskers, priorities 10/95) ay muling isinulat ang description text in place at pagkatapos ng system-prompt/handoff/memory injection ay nagbago ng message array. Ang body na ipinadala pataas sa model ay hindi nagbago. Ang isang observed request ay hindi rin nagpopopulate ng anumang durable Memory (parehong request- at response-derived extraction ay nilaktawan), kaya ang sariling reply ng model ay hindi maaaring umulit ng transcript text sa Memory.

**Raw video fields (#12430).** Kapag ang bridge ay naka-enable at ang native video support ay hindi alam o wala, ang mga tinukoy na `transcript`/`audioTranscript` fields ay nag-activate din ng `videoBridgeObserved`, kahit pagkatapos ng pagkabigo sa description o isang `maxVideos` limit. Ang `null` at mga empty string ay binibilang; ang mga nawawalang fields at non-video metadata ay hindi. Ang mga retained copies ay nag-redact ng mga fields na ito o hindi isinasama ang request, at ang caches/Memory ay nilaktawan. Ang provider payload ay nananatiling hindi nagbago.

Ang karagdagang retained copies ay gumagamit ng parehong observed-request signal. Ang raw pre-guardrail client-request snapshot, in-memory pending request, at maagang rejected-request log ay estruktural na pinapalitan ang transcript fields sa mga bahagi ng video; ang mga string prompts na synthesized ng pipeline stages at context handoff ay nire-redact sa persisted-request-body sink. Ang persisted na `video_content_removed` marker ay nagpapagawa ng `previous_response_id` continuation na mabigo sa closed sa halip na muling buuin ang text na sinadyang itinapon. Kung ang isang observed request ay nawawalan ng per-part redaction shadow bago ang logging, o kahit isa sa maraming video shadows ay nabigong tumugma pagkatapos ng mga susunod na mutation ng request, ang retained request body ay ganap na tinanggal sa halip na panatilihin ang isang partially redacted transcript.

Para sa isang naobserbahang kahilingan, ang tugon ng modelo ay maaaring mag-quote ng anumang bahagi ng transcript nang walang nakastrukturang cue boundary. Ang naitalang call-log `responseBody` ay pinapalitan ng isang marker ng pag-alis; ang detalyadong artifact ng pipeline (na maaaring kabilang ang upstream/client bodies at stream chunks) ay hindi pinapanatili. Ang mga cache ng semantika, idempotency, at reasoning-replay ay lumalampas sa mga pagbabasa at pagsusulat para sa kahilingang iyon. Ang provider request at client-visible response ay nananatiling hindi nagbabago. Ang mga maagang keepalive bytes ay tinatanggal mula sa pansamantalang buffer kapag ang detalyadong artifact ay inalis. Ang babala ng maling EventStream ni Kiro ay nag-uulat lamang ng bilang ng payload byte, hindi kailanman ang nilalaman nito o ang raw error ng JSON parser.
Hindi ito nag-aangkin na ang bawat hindi kaugnay na diagnostic ng provider/plugin ay na-audit; ang mas malawak na retained-sink sweep ay sinusubaybayan sa #11658.

Ang panloob na `/api/modality-bridge/video/drilldown` lifecycle ay isang hiwalay, loopback/token-authenticated cache substrate. Ang bawat operasyon ay nangangailangan din ng isang canonical opaque principal ID. Bago ma-enable ang isang production caller, kailangan nitong kunin ang ID mula sa authenticated tenant at hindi kailanman dapat ipasa ang isang client-selected value. Ang mga cache key ay nagbubuklod sa principal na iyon sa canonical session at video-reference IDs, nag-iimbak lamang ng kanilang SHA-256-derived keys, at nililimitahan ang parehong pagbabasa at pagtanggal sa parehong principal. Ang cache ay nag-iimbak ng hindi hihigit sa 16 na derived JPEG frames bawat entry, nag-e-expire sa loob ng sampung minuto, at sumusuporta sa bounded `start`/`end` reads o tahasang session deletion.

Bawat principal ay limitado sa 16 na entries at 64 MiB ng canonical JPEG data. Ang mga limitasyong iyon ay hindi nakadepende sa global 64-entry/256 MiB ceiling: ang pressure ng principal quota ay nag-aalis lamang ng mga least-recently-used entries ng principal na iyon bago isaalang-alang ang global LRU eviction. Ang mga expired entries ay tinatanggal mula sa parehong principal at global accounting sa cache activity, habang ang cancellation at validation failure ay hindi nagko-commit ng partial replacement.

Tinanggihan ng cache ang non-canonical Base64, labis na padding, non-JPEG media, maling anyo o truncated JPEGs, at JPEGs na nagbubunga ng babala sa panahon ng bounded full-image `sharp` decode. Ire-reencode nito ang bawat tinanggap na imahe bilang isang canonical JPEG, kukunin ang lapad at taas mula sa decoded bytes sa halip na umasa sa mga field ng caller, at itinatapon ang anumang trailing polyglot bytes sa halip na panatilihin ang mga ito. Tanging ang bounded canonical compressed buffer ang sinisingil sa parehong quotas. Ang limitasyon ng JSON wire ay kinabibilangan ng Base64 overhead para sa 32 MiB decoded-input ceiling. Bawat
naka-imbak na derivation ay nagtatala ng validated JPEG format/resolution, sampling policy,
derivation version, creation time, server-computed content hash, at hashed parent
reference kasama ang trusted caller's parent-content hash. Ang cancellation ay sinusuri
sa pagitan ng asynchronous decode/hash phases bago ang atomic cache commit.

Ang production producer ay muling gumagamit ng mga na-derive na broker frames lamang pagkatapos ng matagumpay na visual analysis, nang walang pangalawang video download/extraction. Nangangailangan ito ng operator
`modalityBridgeVideoDrilldownEnabled=true`, mahigpit na per-part `drilldown: true`, at
isang authenticated API-key record ID. Ang mga client-declared principal/session values ay hindi kailanman nagtatag ng pagmamay-ari. Nang walang lahat ng tatlong kondisyon, hindi ito nagha-hash, nagre-resize o nagtatago ng karagdagang frames. Ang pagkabigo sa retention ay nagpapanatili ng magagamit na visual response. Ang mga consented requests ay lumalampas sa buong-video result cache kaya ang mga cached results ay hindi kailanman nagre-replay ng handles.

Ang matagumpay na JSON at SSE responses ay naglalantad ng hindi hihigit sa apat na opaque handles sa bounded `x-omniroute-video-drilldown` header. Ang mga awtorisadong browser origins ay maaaring magbasa ng header na iyon nang hindi pinapalawak ang CORS origin policy. Ang mga bagong handles ay gumagamit ng `v1.<32-byte random base64url token>`, at ang registry ay nag-iimbak lamang ng kanilang SHA-256 hashes. Ang reader/header parser ay tumatanggap din ng legacy 64-hex tokens. Ang authenticated public consumer ay
`GET /api/v1/video-bridge/drilldown?handle=...`, na independiyenteng naka-gate ng
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Ang tahasang persisted false ay nag-aalis
ng access kahit na ang legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
fallback ay naka-enable. Ang production retention ay may katulad na legacy
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Parehong fallback ay default na off.

Ang consumer ay kumukuha ng pagmamay-ari mula sa authenticated key, nag-aaplay ng key policy, at
nagbabalik ng parehong 404 para sa hindi kilala, expired at ibang key's handles. Tumatanggap ito ng
`variant=preview|standard|detail` (maximum JPEG dimension 320/640/1280, hindi kailanman upscaled),
`limit=1..8` (o ang legacy `frames` alias, hindi kailanman pareho), zero-based `page`, at optional
`start`/`end` focus seconds. Ang mga duplicate
query keys at reversed focus windows ay tinatanggihan. Bawat ibinalik na variant ay may hash
ng aktwal na nilalaman nito at aktwal na resolution metadata, na naka-link sa retained source.
Ang mga variants ay kinukuha sa pagbabasa sa halip na naka-imbak bilang karagdagang retained copies. Ang JSON
response, kasama ang Base64/envelope, ay may limitasyon na 32 MiB; ang oversized page ay nagbabalik
ng 413 at ang client ay dapat humiling ng mas kaunting frames. Ang mga pagbabasa ay nagche-check ng cancellation sa paligid ng bawat
resize at nire-recheck ang handle validity bago ibalik. Ang `DELETE` ng may-ari ay idempotent;
ang pagtanggal o TTL expiry ay naglalabas ng retained source at usage accounting.

Ang shared store ay process-local: ang mga handles ay nag-e-expire sa restart at hindi transferable
sa pagitan ng mga independiyenteng proseso ng OmniRoute. Ang mga management stats ay naglalantad ng epektibong retention/
remote policy at aggregate retained entries/bytes lamang, hindi kailanman media, references,
principal IDs o handles. Ang Video settings panel ay nagpapakita ng mga halagang iyon at maaaring panatilihin
parehong consent switches. Ang dokumentasyong ito ng implementasyon ay hindi live deployment o
promotion evidence; ang real-model acceptance ay sinusubaybayan nang hiwalay.

Frames ay may mga caption na sunud-sunod na naka-configure gamit ang Video model. Ang isang walang laman na Video override ay nagmamana ng Vision setting; kung pareho silang walang laman, ang Vision auto-router ay pumipili ng epektibong vision-capable model. Ang matagumpay na mga caption ay pinapalitan ang orihinal na bahagi gamit ang isang matatag na `[Video description:` prefix na nagmamarka rin sa teksto bilang isang untrusted media-derived observation at nagsasabi sa downstream models na huwag sundin ang mga tagubilin na matatagpuan sa media. Ang mga key ng frame-caption cache ay kinabibilangan ng JPEG bytes, prompt, timestamp, at epektibong model; tanging matagumpay na mga caption ang naka-cache. Ang mga entry ng cache ay nagtatago ng aktwal na matagumpay na producer model, kasama ang isang fallback model; ang tulay ay nag-uulat ng `mixed` kapag ang iba't ibang frames ay ginawa ng iba't ibang models. Ang isang cache hit ay muling ginagamit ang pagkakakilanlan ng producer na iyon sa halip na muling lagyan ito ng label bilang hinihinging routing plan. Ang buong-video result cache ay nakabatay sa bawat input na nagbabago ng output — prompt, epektibong model, sampling policy, frame count, semantic analysis mode, ang SHA-256 fingerprint ng normalized focus hint, focus window, `transcript`, `audioTranscript`, at ang contact-sheet flag — kaya ang pagbabago ng alinman sa mga sukat na iyon ay isang cache miss, hindi kailanman isang stale reuse. Ang bersyon ng visual dedup policy, threshold, at bounded candidate-frame count ay malinaw din sa result-cache key at metadata; ang pagbabago ng policy ay hindi makakagamit ng stale whole-video description. Ang result-cache v4 metadata ay nagtatago ng mode at fingerprint, hindi kailanman ang raw user task. Ang guardrail metadata ay nag-uulat ng parehong hinihinging at epektibong analysis modes; ang hinihinging `focused` mode na walang magagamit na user text ay iniulat bilang epektibong `full`.

Ang guardrail ay nag-eextract ng bawat suportadong bahagi ng video ngunit naglalarawan ng hindi hihigit sa `modalityBridgeVideoMaxVideos`. Para sa isang target na napatunayan na may `supportsVideo === false`, ang mga nabigong at over-limit na video ay nagiging mga tahasang ligtas na text markers kaya walang raw video ang nakaligtas. Kapag ang kakayahan ay hindi alam, ang mga bahagi na iyon ay nananatiling hindi nagalaw. Ang mga target na may `supportsVideo === true` ay lumalampas sa tulay. Ang client request abort signal ay kumakalat sa download, broker queue, subprocesses, at caption calls; ang mga abort ay humihinto sa pagitan ng mga video at hindi kailanman bumabagsak sa raw media.

Ang mga runtime settings ay naka-backup sa DB at Zod-validated:

| Key                                 | Default     | Range / behavior                                                                                                 |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opsyonal na runtime, opt-in                                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ay nag-iingat ng generic captions; `focused` ay gumagamit ng bounded, untrusted latest-user context       |
| `modalityBridgeVideoModel`          | `""`        | Nagmamana ng Vision Bridge model                                                                                 |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                             |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, o proporsyonal na `segment_aware`; ang pagkabigo ng detector ay bumabalik sa `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                              |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                   |

Ang mga legacy persisted Video timeout values na higit sa 120 segundo ay pinipigilan sa broker deadline; ang mga bagong setting na nakasulat sa itaas ng limitasyong iyon ay tinatanggihan. Ang `GET /api/modality-bridge/video/runtime` ay nangangailangan ng trusted stamped loopback locality bago ang authentication o runtime probing, pagkatapos ay nangangailangan ng management auth. Ito ay nagbabalik lamang ng `available`, sanitized FFmpeg/ffprobe versions, at isang fixed reason kapag ang runtime ay hindi available. Ang internal extraction endpoint ay hindi isang pampublikong upload API: ang saturation ng queue ay nagbabalik ng `503` kasama ang `Retry-After`, ang pag-disconnect ng caller ay nagbabalik ng `499`, at ang fixed broker deadline ay nagbabalik ng `504`. Ang mga na-convert na tugon ay nagdadagdag ng `video->text;model=<visionModel>;parts=<videos>` sa sentral na `x-omniroute-modality-bridge` header nang hindi inaalis ang Vision o Audio segments.

### PII Masker (`piiMasker.ts`)

Tumakbo sa **parehong** yugto.

- **`preCall`** ay nag-clone ng payload, naglalakad sa `system`, `messages`, `input`, at `prompt` (kasama ang mga plain string items), at nag-aaplay ng `processPII()` (mula sa `@/shared/utils/inputSanitizer`) sa mga string `content`/`text` fields. Kapag `PII_REDACTION_ENABLED=true`, ang natukoy na PII ay tinatanggal sa outbound payload. Ito ay independyente sa `INPUT_SANITIZER_MODE` (na nagkokontrol lamang sa prompt-injection policy). Kapag ang redaction ay off, ang tawag ay nagtatala ng mga bilang ng detection nang hindi nire-rewrite ang nilalaman.
- **`postCall`** ay nag-deep-clone ng response, tumatakbo ng `sanitizePIIResponse()` kasama ang Responses-API-shape masker (`maskResponsesOutput` — sumasaklaw sa `output_text` at `output[].content[].text`). Kung may anumang redaction na naganap, ang binagong response ay pinapalitan ang orihinal.

Ang guardrail ay hindi kailanman nagba-block; ito ay nag-aannotate lamang (`meta.detections`, `meta.redacted`) o nagre-rewrite.

### Prompt Injection (`promptInjection.ts`)

Nagtutukoy ng mga adversarial structures sa nilalaman na ibinigay ng user at nagpapatupad ng naka-configure na policy. Ang pag-uugali ay pinapatakbo ng mga environment variables at constructor options:

| Setting         | Env var                                                                                               | Default | Effect                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Kapag `false`, ang guardrail ay nag-short-circuit.                                                                                                                                                             |
| Mode            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Injection policy: `block`, `warn`, o `log`. (`redact` ay tinatanggap para sa back-compat ngunit hindi nito tinatanggal ang injection text; ang request PII rewrite ay kinokontrol ng `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Minimum severity na kinakailangan upang i-block. Medium ay observe-only sa default.                                                                                                                            |

**Mode precedence** (`getMode`): caller `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Ang dashboard override ay nananalo sa env vars, kaya ang Feature
Flags UI ay kumokontrol sa tumatakbong guard live (walang restart). Ang DB read ay fail-safe:
kung ito ay nag-error, ang guard ay bumabalik sa env-based na pag-uugali, at kapag walang
override na nakaset ang pag-uugali ay katulad ng env-only resolution.

Detection sources:

1. `sanitizeRequest()` mula sa `@/shared/utils/inputSanitizer` (shared detector
   set na ginamit sa ibang bahagi ng pipeline).
2. Built-in `DEFAULT_GUARD_PATTERNS` (kasalukuyang `system_override_inline` at
   `markdown_system_block`, parehong `high` severity).
3. Optional `customPatterns` na ipinasa sa constructor options (strings, regex,
   o `{ name, pattern, severity }` records).

Kapag `mode === "block"` **at** ang hindi bababa sa isang detection ay nakakatugon sa severity
threshold, `preCall` ay nagbabalik ng `{ block: true, message: "Request rejected:
suspicious content detected" }`. Sa `warn`/`log` modes ang guardrail ay nag-log ngunit
pinapayagan ang tawag. Ang shared helper `evaluatePromptInjection()` ay na-export din
para sa mga caller na kailangang suriin ang mga prompt nang hindi dumadaan sa registry.

**Scan bound (v3.8.20):** ang detector ay tanging sumusuri sa **unang 16 KB** ng
pinagsamang prompt text — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) sa
`src/shared/utils/inputSanitizer.ts`. Parehong `detectInjection()` at
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` bago tumakbo
ang pattern loop. Ang mga injection directives ay nakaupo malapit sa tuktok ng isang input, kaya ito
ay naglilimita sa regex CPU/GC sa multi-hundred-KB payloads nang hindi nagpapahina sa detection (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Tumatakbo sa **parehong** yugto, huli sa default chain (priority `95`). Tinatanggal
ang mga kilalang API-key / secret-token patterns mula sa outbound payload (nilalaman ng mensahe,
mga argumento ng tool-call, mga resulta ng tool) **at** ang provider response, kaya ang
credential na ipinaste sa isang prompt (o ibinalik ng isang tool result) ay hindi na-leak
sa upstream provider o pabalik sa client.

- **Opt-in lamang**, parehong convention tulad ng PII redaction (Hard Rule #20-adjacent):
  hindi pinagana maliban kung `settings.credentialRedactionEnabled === true` **o**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kapag ito ay off, ang guardrail ay isang no-op —
  hindi ito kailanman nagba-block at hindi kailanman nag-rewrite.
- `redactCredentials()` ay naglalakad sa buong payload/response tree (`walkValue()`,
  prototype-pollution-safe, cycle-safe sa pamamagitan ng `WeakSet`) at pinapalitan ang mga tugma ng
  isang `[REDACTED:<type>]` placeholder, kinokopya lamang ang mga sanga na talagang
  nagbago.
- `CREDENTIAL_PATTERNS` ay sumasaklaw sa mga LLM provider keys (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), payment keys (Stripe, Square), cloud
  keys (AWS access key, Twilio, SendGrid, Mailgun), private keys / JWTs,
  credential-bearing connection strings (`mongodb://user:pass@...`, atbp.), at
  isang generic na `Authorization`/`x-api-key`/`api-key`/`apikey` header-value
  pattern. Ang mga header-shaped keys (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ay tinatanggal nang estruktural (value lamang, scheme prefix tulad ng
  `Bearer `/`Basic ` ay pinanatili) sa halip na sa pamamagitan ng generic text regex.
- Ang guardrail ay hindi kailanman nagba-block; ito ay nag-rewrite lamang (`modifiedPayload` /
  `modifiedResponse`) at nag-annotate (`meta.credentialsRedacted`, `meta.count`).

Regression guard: `tests/unit/credential-masker-guardrail.test.ts`.

## Batayang Kontrata (`base.ts`)

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
  block?: boolean; // kapag true, agad na itinitigil ang chain
  message?: string; // ipinapakita kapag bina-block
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // ibinabalik ng preCall upang baguhin ang request
  modifiedResponse?: TValue; // ibinabalik ng postCall upang baguhin ang response
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

Ipinahihiwatig ng isang guardrail na "walang pagbabago" sa pamamagitan ng pagbabalik ng `void`, `{}`, o
`{ block: false }`. Kapag nagbalik ng `modifiedPayload`/`modifiedResponse`, papalitan nito
ang value na dumadaloy sa chain para sa mga kasunod na guardrail.
Dinadala ng `signal?: AbortSignal` ang lifecycle ng caller papunta sa mga guardrail. Ang pag-abort ng request ang sinasadyang fail-open exception: itinitigil ng mga media bridge ang trabaho at nagsasagawa ng cleanup nang hindi ibinabalik ang raw media sa isang target na alam nang hindi sumusuporta rito.

## Registry (`registry.ts`)

Inilalantad ng singleton na `guardrailRegistry` ang:

- `register(guardrail)` — nagdaragdag ng guardrail (o pinapalitan ito ayon sa normalized na pangalan) at
  muling inaayos ayon sa pataas na `priority`.
- `clear()` / `list()` — mga administratibong helper.
- `runPreCallHooks(payload, context)` — inuulit ang bawat aktibong guardrail, ipinapasa ang
  payload sa pamamagitan ng `modifiedPayload`, at humihinto sa unang `block: true`.
- `runPostCallHooks(response, context)` — kaparehong daloy sa panig ng response.
- `resetGuardrailsForTests({ registerDefaults })` — nililinis ang state at opsyonal na
  muling nirerehistro ang mga default para sa malinis na test isolation.

Ang parehong runner ay nagbabalik ng `{ blocked, payload|response, results, guardrail?, message? }`
kung saan ang `results` ay isang array ng mga record na `GuardrailExecutionResult` na may
mga field na `blocked`, `skipped`, `modified`, `error`, at `meta` para sa bawat guardrail,
na kapaki-pakinabang para sa tracing.

### Pag-disable ng Mga Guardrail sa Bawat Request

Pinagsasama-sama ng `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` ang isang
de-duplicated na listahan ng mga pangalan ng guardrail na dapat laktawan para sa kasalukuyang
request. Mga source (lahat ay opsyonal, lahat ay pinagsasama):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` sa request body (top-level)
- `metadata.disabledGuardrails` sa request body
- Header na `x-omniroute-disabled-guardrails` (o ang legacy na
  `x-disabled-guardrails`)

Maaaring mga array ng string o comma-separated string ang mga value; ang mga pangalan ay
ino-normalize sa lowercase kebab-case (`pii_masker` → `pii-masker`). Ipinapasa
ang resulta sa registry sa pamamagitan ng `context.disabledGuardrails`, na lumalaktaw sa
mga tumutugmang guardrail (`skipped: true` sa `results`).

## Pagkakasunod-sunod ng Pagpapatupad

Para sa bawat request na dumadaan sa `src/sse/handlers/chat.ts` at
`open-sse/handlers/chatCore.ts`:

1. Binubuo ng `resolveDisabledGuardrails(...)` ang listahan ng lalaktawan mula sa API key, body,
   at mga header.
2. Pinapatakbo ng `guardrailRegistry.runPreCallHooks(body, ctx)` ang mga guardrail ayon sa pataas
   na pagkakasunod-sunod ng priority:
   - Itinatala bilang `skipped` ang mga naka-disable na guardrail.
   - Maaaring baguhin ng `preCall` ng bawat guardrail ang payload sa pamamagitan ng `modifiedPayload`.
   - Ang unang `block: true` ay agad na nagpapatigil sa chain at nagbabalik ang handler
     ng tugon ng pagtanggi mula sa guardrail.
3. Ang payload na maaaring nabago ay ipinapasa sa combo routing at upstream
   dispatch.
4. Pagkatapos mabuo ang tugon, pinapatakbo ng `guardrailRegistry.runPostCallHooks(...)`
   ang parehong chain sa tugon. Kapag `block: true` dito, hindi ipinapasa ang upstream
   na tugon.

Ang mga guardrail na nag-throw ay itinatala gamit ang `error: <message>` at nila-log sa pamamagitan ng
`logger.warn`, ngunit nagpapatuloy ang chain — sadyang fail-open ang disenyo.

## Configuration

Mga environment variable na binabasa ng mga built-in na guardrail:

| Variable                              | Ginagamit ng              | Epekto                                                                                                                   |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Itakda sa `false` upang ganap na i-disable ang pagtukoy.                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Patakaran sa injection: `warn`, `block`, o `log`. Hindi binabago ng legacy na value na `redact` ang teksto ng injection. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mode para sa injection guard; isa ring DB feature flag na **nangingibabaw** sa mga env var (DB > ENV).                   |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Pinakamababang severity na tinatanggihan ng `MODE=block`: `high` (default), `medium`, o `low`.                           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Legacy na alias para sa `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Kapag `true`, nire-redact ang PII ng request (hiwalay sa injection mode).                                                |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Kinokontrol ang gawi ng masker sa panig ng tugon.                                                                        |

Binabasa ng mga guardrail ng Modality Bridge ang runtime config mula sa DB-backed na settings
store (`getSettings()`), hindi mula sa mga env var. Ang mga pangunahing key ng Vision ay
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, at
`modalityBridgeCacheMaxEntries`. Tinatanggap lamang ang mga legacy na
`visionBridge*` key bilang dokumentadong one-cycle read
fallback; ginagamit ng mga write mula sa dashboard ang mga pangunahing key. Ang mga default at fallback
resolver ay nasa `src/shared/constants/modalityBridgeDefaults.ts`, habang pinananatili ang mga legacy
constant sa `src/shared/constants/visionBridgeDefaults.ts`.

Ginagamit ng Audio ang `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, at `modalityBridgeAudioMaxClips`, kasama ang mga shared na
setting na `modalityBridgeCache*`. Walang fallback para sa legacy key ang Audio dahil ipinakilala ang mga
key na ito kasama ng schema ng Modality Bridge.

Ginagamit ng Video ang `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, at
`modalityBridgeVideoTimeout`, kasama ang mga shared na setting na `modalityBridgeCache*`.
Naka-disable ito bilang default dahil opsyonal na operational
dependency ang FFmpeg/ffprobe at nagdaragdag ng latency at gastos sa model ang paglalagay ng caption sa mga frame.

## Mga Custom na Guardrail

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

Mga hakbang:

1. Gumawa ng `src/lib/guardrails/myGuardrail.ts` na nag-e-extend sa `BaseGuardrail`.
2. Ipatupad ang `preCall` at/o `postCall`.
3. Magrehistro sa oras ng pag-import (i-push mula sa `registerDefaultGuardrails`) o
   tawagin ang `guardrailRegistry.register(...)` sa runtime — pinapalitan ng registry
   ang anumang naunang guardrail na may parehong normalized na pangalan.
4. Magdagdag ng mga test sa ilalim ng `tests/unit/` (mga kasalukuyang halimbawa:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pagsubok

Gamitin ang `resetGuardrailsForTests()` sa pagitan ng mga test upang magsimula mula sa isang tiyak na state.
Ipasa ang `{ registerDefaults: false }` upang magsimula sa isang walang-lamang registry at
irehistro lamang ang mga guardrail na sinusubok. Tumatanggap ang Vision Bridge ng dependency
injection (`deps.getSettings`, `deps.callVisionModel`); inilalantad ng Audio Bridge ang
mga katumbas na seam para sa mga setting, capability, pagpili ng STT model, pagsusuri ng
credential, at transcription. Dahil dito, maaaring subukan ng mga test ang parehong flow nang walang
access sa DB o network.

## Tingnan Din

- `src/lib/guardrails/` — implementasyon
- `src/shared/utils/inputSanitizer.ts` — nakabahaging detector na nagpapatakbo sa
  prompt-injection at PII masking
- `src/shared/constants/visionBridgeDefaults.ts` — mga default ng Vision Bridge at
  listahan ng mga model na sapilitang gumagamit ng bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — mga nakabahaging runtime default ng Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — orthogonal na layer (circuit breaker, mga cooldown)
- `docs/reference/ENVIRONMENT.md` — kumpletong sanggunian ng env var

## Saklaw ng route at red-team para sa injection-guard (Phase 8 · Block D)

Saklaw ng injection-guard (`createInjectionGuard` / `withInjectionGuard`) ang lahat ng route
na tumatanggap ng mga prompt ng user. Sinusunod nito ang `INJECTION_GUARD_MODE` (default na `warn` = pag-log lamang;
`block` = nagbabalik ng HTTP 400 `SECURITY_001`).

| Uri                | Mga Route                                                                                                                                            | Default na mode |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Text (kasalukuyan) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn            |
| Generative         | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn            |
| Data               | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn            |

Saklaw ng pagkuha ng text (`extractMessageContents`) ang `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (gabi-gabi, `nightly-llm-security.yml`):** bine-validate ng promptfoo na bina-block ng bawat route
ang OWASP-LLM corpus kapag `INJECTION_GUARD_MODE=block`; nagpapatakbo ang garak ng mga probe (nilalaktawan kapag walang secret).
Kasama ang `moderations` para sa consistency — maaari itong i-exempt ng mga operator sa block-mode sa pamamagitan ng
`resolveDisabledGuardrails`.

May dalawang job ang nightly workflow (`.github/workflows/nightly-llm-security.yml`, cron + manual
dispatch):

- **`promptfoo-guard` (blocking)** — pinapatakbo ang `promptfoo eval -c promptfooconfig.yaml`
  gamit ang `INJECTION_GUARD_MODE=block`. Tinitiyak ng bawat adversarial na kaso (hal. "ignore all
  previous instructions…", mga DAN-style jailbreak) na may taglay na
  `error.code === "SECURITY_001"` ang response, ibig sabihin, talagang tinanggihan ng guard ang request.
- **`garak` (advisory)** — pinapatakbo ang garak `--probes promptinject,dan,leakreplay`
  laban sa isang lokal na instance ng OmniRoute (`http://localhost:20128/v1`). Nakadepende ito sa isang
  provider secret (`PROMPTFOO_PROVIDER_KEY`); maayos itong lumalaktaw at nilalagyan ng suffix na
  `|| true`, kaya nag-uulat ito nang hindi pinapabagsak ang CI.

Saklaw ng guard helper (`createInjectionGuard` / `withInjectionGuard`)
ang bawat `/v1` route na may prompt; kinukuha ang text ng prompt mula sa
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ng
`extractMessageContents()` sa `src/shared/utils/inputSanitizer.ts`.
