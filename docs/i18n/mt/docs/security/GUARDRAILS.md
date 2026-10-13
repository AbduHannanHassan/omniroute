# Guardrails (Malti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sors awtorevoli:** `src/lib/guardrails/`
> **Aġġornat l-aħħar:** 2026-08-29 — v3.8.51 (il-provenjenza tat-traskrizzjoni ta’ Video Bridge tiġi ddikjarata minn min isejjaħ,
> u għadha mhix ivverifikata mis-server — iċċarat skont #11661)

Il-guardrails jinfurzaw is-sikurezza, il-politiki u t-trasformazzjonijiet tal-kontenut fil-konfini
bejn OmniRoute u l-fornituri upstream. Kull guardrail jista’ jispezzjona (u,
b’mod fakultattiv, jirrifjuta, jittrasforma jew jannota) il-payloads tat-talbiet (`preCall`) u
r-risposti upstream (`postCall`).

Is-sistema hija **fail-open**: jekk guardrail jitfa’ eċċezzjoni waqt l-eżekuzzjoni, ir-reġistru
jirreġistra l-iżball u jkompli bil-guardrail li jmiss minflok ifalli
t-talba. L-imblukkar huwa deċiżjoni espliċita (`block: true`), qatt aċċident.

## Guardrails Integrati

Il-reġistru awtomatikament jimporta s-sitt guardrails fl-ordni ta' prijorità
(ara `registry.ts` → `registerDefaultGuardrails()`):

| Prijorità | Isem                | Fażi(e)        | File                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Numri ta' prijorità aktar baxxi jsiru **l-ewwel**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Jinterċetta talbiet li jġorru ritratti li huma mmirati lejn **mudelli mhux viżivi** u jew
jirruta t-talba kollha għal mudell kapaċi viżjoni jew jissostitwixxi l-parti tar-ritratti b'deskrizzjonijiet bil-kliem prodotti minn mudell viżwali konfigurable qabel
il-kall ta' fuq. Dan jippermetti li fornituri biss bil-kliem jandmu
payloads multimodali b'mod trasparenti.

Fluss:

1. Iskipja jekk il-mudell immirat diġà jappoġġja viżjoni (sakemm ma jidhirx fil-lista
   tal-bridge imġiegħel `isVisionBridgeForcedModel`).
2. Eżamina l-parti tar-ritratti permezz ta' `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), li delega lill-**detettur ta' media
   unifikata** `detectMediaParts()` f`open-sse/utils/mediaParts.ts` — is-sors uniku ta' verità
   maqsuma mal-filtru ta' kompatibbiltà tal-kombinazzjoni.
   L-eżami huwa awtorizzat għall-parti ta' fuq tal-formi
   `replaceImageParts` jistgħu jerġgħu jinqatgħu (il-kuntratt extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, u Responses API `input_image`. Hits imnissla u
   forom biss indikaturi huma materjal għall-filtru tal-kombinazzjoni u qatt ma jiġu eżaminati.
   Iskipja jekk ma jinstabx.
3. Irriżolvi l-konfigurazzjoni tal-ħin reali permezz ta' `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): il-ġodda `modalityBridge*`
   settijiet jiġġieldu; l-antik `visionBridge*` keys jibqgħu **fallback ta' ċiklu wieħed**
   (window ta' rollback). Iskipja qabel kwalunkwe traversa tal-media meta l-bridge huwa diżattivat.
4. Il-selettur tal-modalità (`modalityBridgeVisionMode`, ara t-tabella hawn taħt) jiddeċiedi
   jekk jirruttaw jew jiddeskrivu. Il-rirruta tirritorna `modifiedPayload` b'`model`
   biss mibdula, flimkien ma' meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Triq id-diskrizzjoni: iċċappa r-ritratti sa `maxImages`, kompona l-promt
   konxju tat-task, ikkonsulta l-cache tad-diskrizzjoni, iċċempel il-mudell viżwali **fil-parallelo**
   (`Promise.allSettled`), u injettaw `[Image N]: <description>` partijiet bil-kliem fil-post tagħhom. Deskrizzjoni falluta tagħti `null` u l-parti tar-ritratti oriġinali hija
   **mħarsa** (#4012) — eċċezzjoni fuq it-triq tad-diskrizzjoni tal-kombinazzjoni meta kull
   deskrizzjoni falliet, fejn upstream mhux viżwali ikkonfermat jiksbu stub
   `(unavailable — no vision-capable provider connected)` minflok (#8430).
6. Irritorna `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selettur tal-modalità (`modalityBridgeVisionMode`)

| Modalità   | Default | Imġieba                                                                                                                                                                                                                                                                                             |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Heuristika antika, mhux imħallta (#6640/#7204): mudelli mhux kombinati/`auto/` jirruttaw għall-aħjar mudell viżwali sakemm il-mudell oriġinali diġà jkollu kredenzjali utli (imbagħad jiddeskrivi); l-għanijiet tal-kombinazzjoni dejjem jiddeskrivu.                                               |
| `describe` |         | Dejjem jiddeskrivi — il-blokk tar-rirruta huwa skipjat kompletament; il-mudell magħżul mill-utent dejjem iwieġeb.                                                                                                                                                                                   |
| `reroute`  |         | Rirruta bil-forza: il-gwardja tal-mudell bil-kredenzjali tintlaqa. Il-gwardja tal-kredenzjali tar-rirruta-**target** għadha tapplika — meta ma jeżistux mudelli viżwali utli, it-talba tiġi ttrasferita għal deskrizzjoni sabiex ir-ritratti raw qatt ma jaslu għal backend bil-kliem biss (#8430). |

Modalitajiet imġiegħla jissakkru **qabel** ma l-heuristika awtomatika tiġi esegwita; l-imġieba `auto`
hija identika fil-byte għall-guardrail pre-PR-1.

#### Promt ta' diskrezzjoni konxju tat-task (`modalityBridgeVisionTaskAware`)

Default **veru**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) iżżid
it-test tal-**messaġġ tal-aħħar utent** (imnaqqas għal 500 karattri) mal-promt bażiku
ta' diskrezzjoni, imexxi d-deskrizzjoni lejn dak li l-utent fil-fatt staqsa
(patter ta' codex-vision-proxy) u jitlob lill-mudell viżwali biex jitranskrivi
testi viżibbli. Bil-flag off — jew mingħajr test tal-utent — il-promt bażiku jintuża bla
tbiddil.

Il-funzjoni tal-deskrizzjoni tal-loop awtonomu (`callVisionModelSingle()`
fil-`visionBridgeHelpers.ts`) dejjem titlob `image_url.detail: "high"` —
mingħajr kundizzjonijiet, għal kull min iċempel/fornitur, mingħajr ebda sinjal tal-klijent.
Il-kampjuni ta' dettall baxx jnaqqsu l-eżattezza tal-OCR għall-kompitu ta' traskrizzjoni
tal-kliem li dan il-promt jitlob, għalhekk il-funzjoni tal-deskrizzjoni nnifisha dejjem titlob dettall għoli
irrispettivament minn x'livell ta' dettall użat fil-bidu tal-request. Dan
jaffettwa biss il-ġisem tal-request interna tal-deskrizzjoni; ma jinbidelx kif
OmniRoute jforwardja l-proprju `image_url.detail` tal-minn iċempel fuq ir-request prinċipali —
dak id-default applikat separatament, u biss għal klijenti OpenCode identifikati, fil
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Il
filtru tal-wire-format tal-Anthropic tal-deskrizzjoni tal-loop awtonomu m'għandux
kamp `detail` u mhu affettwat minn xi default.

#### Limitu tal-output tal-deskrizzjoni (`modalityBridgeVisionMaxChars`)

| Key                            | Default | Range            |
| ------------------------------ | ------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` or 100–50000 |

`0` (default) jfisser **l-ebda limit** — id-deskrizzjoni li tiġi
ritornata minn `callVisionModel()` tiġi mgħoddija bla modifiki, filwaqt li
tippreserva l-imġiba eżistenti. Kull valur fil-livell ta' 100–50000 jnaqqas id-deskrizzjoni b'`…`
suffiss qabel ma tiġi mqiegħda lura bħala `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` fil-`src/lib/guardrails/visionBridge.ts`).
Irrid tella' dan għal kompiti ta' OCR b'dettall għoli fejn il-mudell downstream jeħtieġ
it-traskrizzjoni sħiħa; innaqqasha biex inqabbad l-użu tat-tokens fuq mudelli ta' viżjoni
li jitkellmu ħafna. Il-qasam tal-dashboard jinsab fil-panew Avvanzat tal-tab ta' Viżjoni
(`modality-bridge-max-chars` fil-`ModalityBridgeVisionTab.tsx`) u jillimita kull
valur bejn 1 u 99 sa l-100 floor waqt li jħalli `0` esplicitu
mingħajr ebda bidla — `0` huwa valur validu ta' Zod f'kull dritt
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mhux biss
id-default "unset".

#### Cache tal-deskrizzjoni (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL fil-memorja għall-output tal-deskrizzjoni, maqsuma proċess-wide.
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` bil
framing ta' length-prefix (mingħajr kolizjonijiet tal-limiti tal-kamp). Il-komponent tal-mudell huwa
l-mudell **konfigurati** tal-pont, mhux il-mudell li verament wieġeb —
`callVisionModel` jista' jerġa' lura internament, u l-keying għal kull tentattiv
jiffranka l-cache. Deskrizzjonijiet li fallu qatt ma jiġu kċejnati. Settings:

| Key                             | Default | Range   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalizzazzjoni tal-immaġni remota (deskrizzjoni tal-loop awtonomu/base64 fetch)

Meta l-pont jfetchja immaġni **remota** nnifisha — il-funzjoni tal-deskrizzjoni
awtonoma tal-Anthropic u l-konverżjoni tal-base64 tal-forma tal-claude
(`ensureBase64ImagesForClaudeWire`), it-tnejn permezz ta'
`fetchRemoteImageAsDataUri()` fil-`visionBridgeHelpers.ts` — id-URI tad-data li jirriżulta
jiġi mgħoddija permezz ta' `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) qabel ma tiġi embeddjata fil-request tal-mudell tal-viżjoni. Immaġini
eċċessivi jiġu nżelti għal **2048px long edge** (li jaqbel
mal-limitu ta' resize li OpenAI/Anthropic diġà applikaw fuq is-server), li jnaqqas
il-bytes/upload/latency mingħajr ma jinbidel dak li jarah il-mudell tal-viżjoni. Ir-ridimensionar
jintuża `sharp`, imniżżel permezz ta' import dinamiku: fuq pjattaforma fejn il-binary
nattiv tiegħu falla li jinstalla, `normalizeDataUri()` **qatt ma jniedi** — jaqa' lura
għall-passthrough tal-bytes oriġinali, sabiex il-path tal-deskrizzjoni/base64-konverżjoni
dejjem jibqa' jaħdem. Bytes mhux tal-immaġni (fetch li ma rritornax immaġni
deċodifikabbli) jiġu wkoll mgħoddija mingħajr ebda bidla. Din il-normalizzazzjoni hija
skopjata għall-immaġini li l-pont jfetchja għall-funzjoni tal-awtonomija tiegħu — qatt ma tiġi
applikata għall-payload raw tal-passthrough tal-minn iċempel, konsistenti mal-prinċipju ta' mutazzjoni
biss b'opt-in (Regola Ħar #20).

#### Skema tal-Settings + migrazzjoni

Il-ġodda `modalityBridge*` keys huma validati minn Zod fil-`updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, it-trio `modalityBridgeCache*`, u l-grupp
`modalityBridgeAudio*` użat mill-Pont tal-Audio. Il-migrazzjoni
`141_modality_bridge_settings.sql` tikkopja valuri eżistenti tal-legacy
`visionBridge*` għall-kliem ġodda li jmatchjaw (idempotent, qatt ma joverwritja
valur `modalityBridge*` stabbilit mill-operatur); il-kliem tal-legacy jibqgħu aċċettati bħala
fallback ta' qari għal ċiklu ta' rilaxx wieħed.

#### Header ta' Trasparenza + stats

Risposti trasformati mill-deskrizzjoni jġorru
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(mibnija minn `buildModalityBridgeHeader()` fil-`modalityBridge/bridgeStats.ts`,
stampata minn `withModalityBridgeHeader()` fil-`src/sse/handlers/chatHelpers.ts`).
Requests rerouted ma jiksbu **l-ebda** header — il-payload ma ġiex immodifikat u l-bidla tal-mudell
diġà hija viżibbli fil-qasam `model` tal-ġisem tar-risposta.

`GET /api/modality-bridge/stats` (awtorizzazzjoni tal-ġestjoni, l-istess livell bħal
`GET /api/settings`) jirritorna l-kontijiet per-modality fil-memorja
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` għal `vision`, `audio`, u
`video`. `averageLatencyMs` juża `latencySamples`, mhux il-ħafna tentattivi, bħala l
denominatur; operazzjoni mingħajr ħin ma toħloqx kampjun ta' zero-millisecond.
`bridged` jibqa' l-alias kompatibbli mal-ġejjieni għal konverżjonijiet suċċessivi; tentattivi li fallu ma jżidu
lilu. Il-kontijiet jerġgħu jitwaqqfu meta l-proċess jerġa' jibda b'disinn
(telemetrija, mhux kontabilità).

#### Konfigurazzjoni tal-dashboard

Il-paġna dedikata tal-dashboard hija
`/dashboard/settings/modality-bridge`. Il-tabijiet `Vision`, `Audio`,
u `Video` li jistgħu jiġu aċċessati bil-URL jżommu l-parametri tal-kwestjonarju waqt li jibdlu l-valur `tab`.
Il-tab Vision juri l-attivazzjoni, il-modalità, l-għażla tal-mudell (inkluż il-predefinit awtomatiku), il-prompts li jikkunsidraw il-kompitu, il-limiti avvanzati ta' timeout/immaġni/tul tal-deskrizzjoni/cache,
il-kontijiet tal-ħin, u talba protetta ta' kampjun. Il-tab Audio huwa wkoll attiv: juri
l-attivazzjoni, għażla ta' mudell biss STT bil-Auto, limiti ta' timeout/max-clip, kontijiet tal-audio,
u test ta' kampjun `input_audio`. Il-tab Video huwa funzjonali: jirrapporta
l-istat tal-ħin tal-FFmpeg/ffprobe — wieħed minn erba' stati UI espliciti (`unknown` waqt
li l-probe tkun fil-vjaġġ jew ma setgħetx titlesta, `restricted` fuq host tal-dashboard mhux loopback fejn il-probe tiġi saltata mill-klijent, `unavailable` ladarba tkun ġiet probata
u kkonfermata li nieqsa, jew `available` bil-verżjonijiet tal-FFmpeg/ffprobe) — jżomm
il-limiti ta' attiv/ mudell/ qafas/ video/ timeout, filtra l-għażla tal-mudell għal mudelli kapaċi tal-viżjoni,
u juri kontijiet tal-video.

Il-karta preċedenti tal-Vision Bridge taħt l-impostazzjonijiet AI hija link ta' kompatibbiltà għall
paġna l-ġdida; ma tħaddanx aktar kopja sekondarja tal-formola. Il-Provduturi tal-Media wkoll
jilinkjaw il-flussi ta' Immaġni għal-Test u l-Flussi ta' Diskors għal-Test mal-tabijiet korrespondenti tal-Modality
Bridge mingħajr ma jneħħu l-playground eżistenti tal-Fluss ta' Diskors għal-Test.

**Bypass ta' aċċettazzjoni ta' self-loop:** meta l-calling ta' deskrizzjoni jgħaddi mill-self-loop ta' OmniRoute
stess `/v1` (mudell ta' provditur mhux standard), il-sub-request jibgħat
`x-omniroute-admission-bypass: internal` u huwa awtorizzat bil-kredenzjali tal-self-loop riżolta — il-lokal `sk_omniroute` sentinel fil-modalità lokali, jew il-kredenzjali konfigurati mill-operatur `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350) sabiex
il-deployments `REQUIRE_API_KEY=true` jistgħu xorta jsalvaw il-calling ta' deskrizzjoni. Il-bypass
jiġi onorat biss għal dawk il-kredenzjali eżatti, sabiex il-klijenti esterni ma jistgħux jużaw il-header biex jaqbżu l-aċċettazzjoni.

Il-predefiniti tal-legacy jgħixu f`src/shared/constants/visionBridgeDefaults.ts`; il
predefiniti ġodda ta' modalità/kompitu-aware/cache u l-istruttura tal-impostazzjonijiet jgħixu f
`src/shared/constants/modalityBridgeDefaults.ts`. Il-guardrail juri
opzjoni ta' kostrutturi `deps` sabiex it-testijiet jistgħu jinjetta `getSettings` foloz u
implementazzjonijiet `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Jinterċetta talbiet ta' chat li għandhom audio qabel ma jaslu għal mira li mhix
magħrufa li taċċetta input audio. Qatt ma jerġa' jistrimma l-talba tal-chat: partijiet ta' audio
jiġu trascritti permezz tal-endpoint multipart kompatibbli ma' OpenAI eżistenti u l
mudell tal-chat magħżul jkompli bil-traskrizzjonijiet tat-test.

Fluss:

1. Iresolve `supportsAudio` permezz ta' `getResolvedModelCapabilities()`. Metadata tal-providitur
   espliċita tirbaħ, imbagħad metadata statika tal-mudell, imbagħad `modalities_input` sincronizzati. Lista ta' input dikjarata mingħajr `audio` hija `false`; ebda
   evidenza ta' kapaċità tibqa' `null`. Bħala `false` u `null` jattivaw il-bridge konservattiv, filwaqt li `true` jaqbżuha.
2. Iresolve `modalityBridgeAudio*` settings u estratt partijiet ta' audio ta' livell għoli
   li jistgħu jiġu spliced minn kull messaġġ permezz tal-`detectMediaParts()`
   detector. Il-formati ta' wire appoġġjati huma OpenAI `input_audio`, `audio_url`, u
   `source.media_type: "audio/*"`. L-audio imnested jiġi identifikat għall-routing iżda mhux
   imneħħi mill-passi ta' splice. Il-ħidma hija limitata minn `modalityBridgeAudioMaxClips`;
   partijiet aktar tard jibqgħu intatti.
3. Iħaddan `provider/model` konfigurati, jew jħalli `selectAudioBridgeModel()` jimxi
   `AUDIO_TRANSCRIPTION_PROVIDERS` fl-ordni tal-katalgu stabbli u jagħżel l-ewwel
   mudell bil-kredenzjali attivi utli.
4. `callAudioTranscription()` jikkonverti audio base64/data-URI għal multipart
   `file`, jew jitniżżel `audio_url` remota permezz tal-guard pubbliku biss
   bil-pinning DNS u limit ta' 25 MB. Imbagħad POSTs il-file u l-mudell magħżul
   għall-self-loop lokali `/v1/audio/transcriptions`, awtorizzat bil
   `resolveSelfLoopBearer()`. Ir-rotta eżistenti ta' traskrizzjoni twettaq normalment
   il-look up tal-kredenzjali, il-ħarsien ta' cooldown/rate-limit, u l-dispatch tal-providitur.
5. Il-calls suċċessivi jissostitwixxu l-partijiet tagħhom b`[Audio N]: <trascript>`. Il-calls
   jimxu bil `Promise.allSettled`: falliment individwali jżomm dik il-parti ta' audio oriġinali (#4012 kontratt). Jekk kull call jonqos u l-mira tiġi ppruvata
   `supportsAudio === false`, il-partijiet jsiru
   `[Audio N]: (nieqes — l-ebda provditur STT konness)` (#8430 kontratt). Għall
   mira mhux magħrufa (`null`), riżultat ta' falliment kollu jibqa' intatt. Mira magħrufa
   li hija biss test b'kredenzjali STT utli tirċievi l-istess stub esplicitu mingħajr ma tagħmel
   telefonata tan-netwerk.

Traskrizzjonijiet suċċessivi jużaw il-proċess tal-LRU/TTL tal-Modality Bridge. Il
għan jikkombina r-referenza tal-audio, l-etikett tal-operazzjoni stabbli `audio-transcription`, u l-mudell STT magħżul; fallimenti qatt ma jiġu kkurati. Il-pjanijiet tal-audio j aggiornaw
il-`bridged`, `cacheHits`, `failures`, u `lastUsedAt` counters.
Risposti trasformati jġorru
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; talbiet intatti ma jirċievu l-ebda segment tal-Audio Bridge.

L-impostazzjonijiet tal-ħin huma DB-backed u Zod-validated:

| Key                           | Default | Range           |
| ----------------------------- | ------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —               |
| `modalityBridgeAudioModel`    | `""`    | Auto jew STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10            |

Il-cache condiviża tibqa' kontrollata minn `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, u `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts top-level video parts in Chat Completions `messages` and Responses
API `input` qabel ma tiġi msejħa target mingħajr appoġġ nativ magħruf għall-video.
Shapes appoġġati huma `input_video`, `video_url`, `video_source`, URLs HTTPS,
u `data:video/*;base64,...` data URIs. Isemijiet ta' fajls sempliċi fit-test mhumiex trattati
bħala video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) għandha r-responsabbiltà tal-passaġġ tal-request, il
kontroll tal-kapaċità/policy, l-aggregazzjoni kull request, u l-payload tar-risposta.
Ix-xogħol kull video — akkwist, il-cache tal-riżultat kollu, id-deskrizzjoni ta' sequenza ta' frames
(li tgħaqqad kwalunkwe traskrizzjoni tal-audio dikjarata mill-caller), u metrikji/abort/cleanup kull tentattiv — huwa moħbi wara `processVideoPart` f'
`videoBridgePipeline.ts`, imsejħa darba għal kull parti tal-video ġewwa l-loop ta' `preCall`.
Dak il-modulu jiddeskrivi wkoll il-limiti tal-port espliciti `VideoMediaBrokerPort`
(akkwist ta' bytes u estrazzjoni ta' frames campjati), `VideoAudioTranscriptionPort`
(tgħaqqad traskrizzjoni tal-audio dikjarata mill-caller mal-kapturi campjati), u
`VideoDrilldownPort` (il-forma tal-ħażna raw tal-istorja). STT u r-retenzjoni tal-frames
huma komposti madwar il-port li jiddeskrivi permezz ta' `createVideoSttAdapter` u
`createVideoDrilldownAdapter`; l-aħħar tuża l-lifecycle ta' handle opak kondiviż.

Il-passaġġ tal-request pubbliku `/v1` qatt ma jimporta jew jinvoka subprocess.
Il-videos remoti jitniżżlu taħt limit ta' 50 MiB; il-videos base64 inline għandhom
limit konservattiv ta' 36 MiB dekodifikati għal kull video sabiex il-mudell/messages/framing envelope
jista' jibqa' ġewwa l-limitu ta' aċċettazzjoni tal-request JSON pubbliku ta' 50 MiB.
Il-lunghezza inline u l-estimi tad-daqs dekodifikat jiġu kkontrollati qabel l-allokazzjoni.
HTTPS huwa meħtieġ fuq l-ewwel URL remota u kull redirect, billi tuża l-guard pubbliku biss
eżistenti ma' DNS pinning. Il-bytes imbagħad jgħaddu mill-istess
`POST /api/modality-bridge/video/extract` broker boundary. Dak ir-rotta huwa kemm
`LOCAL_ONLY` u `SPAWN_CAPABLE`, jaċċetta biss request awtentikat, trusted-loopback għal kull proċess,
u qatt ma jaċċetta URL, path tal-fajl, eżekuttiv,
jew lista ta' argumenti. Il-pipeline tal-ġisem tal-API u l-qarrej incrementali tal-ġisem
tal-handler jimplimentaw indipendentement limit ta' input broker ta' 50 MiB.
Il-queue limitata tiegħu taħdem estrazzjoni waħda kull darba, tippermetti erba' xogħlijiet pendenti,
u tikkappa l-input pendenti għal 100 MiB.

Fil-broker, `ffprobe` jaqra fajl lokali privat; il-format
allowlist fissa teskludi playlist u formati manifest. Għall-kontenituri tal-familja MOV
permess, ir-referenzi ta' data MOV esterni jibqgħu disabilitati b'mod predefinit, u l
kmand fissi ma jippermetti lilhom. Bħala `ffprobe` u `ffmpeg` jużaw il
whitelist tal-protokoll `file` biss, thread waħda, arrays ta' argumenti fissi, mingħajr shell,
u eżekuttivi riżolti minn `PATH`. Il-flussi tal-kopertura tal-immaġni ma humiex
kandidati li jistgħu jiġu pplayjati. Il-flussi kollha li jistgħu jiġu pplayjati għandhom jissodisfaw il-limiti, u
stream esplicitu predefinit huwa ppreferut qabel il-fallback deterministiku tal-indice l-iktar baxx.
Il-videos huma limitati għal 600 sekondi, 8,192 pixels kull dimensjoni, u
33,554,432 pixels ta' sors. FFmpeg jikkampja 1–16 frames JPEG ta' nofs, jiskala 'l isfel
il-lunghezza twila għal massimu ta' 1,024 pixels mingħajr ma jiskala l-inputs iżgħar, u
qatt ma jirċievi URL. Il-kampjament huwa `uniform` b'mod predefinit. Il-policy
opzjonali `scene_aware` u l-esperimentali `segment_aware` jagħmlu pass addizzjonali fissi
FFmpeg fuq il-fluss lokali diġà validat, jagħżlu timestamps ta' scena `showinfo` limitati,
u jfallu deterministikament għall-istess midpoints uniformi f'każ ta' falliment tal-detector, timeout,
output mhux format, jew sett ta' kandidati vojt. Il-modalità segment-aware talloca kampjamenti ta' nofs
proporzjonalment għall-intervals ta' scena validati; l-evidenza segment-aware u l-imġiba tal-fallback
huma deskritti hawn taħt. Il-limitu 16-frame iebes huwa
applikat wara l-għażla f'kull policy. Meta request scene-aware ikollha biss
baġit ta' frame wieħed, tuża l-midpoint uniform tal-video sħiħ attiv jew tal-finestra ta' fokus
u tirrapporta `policyEffective: uniform`: frame ta' scena waħda magħżula
ma tistax iżżomm kemm it-tmiem temporali. Caller jista' b'mod opzjonali jipprovdi
finestra ta' fokus limitata (`start`/`end` sekondi); il-limiti huma kklampjati għall-medja
dura, il-finestri invertiti jew mhux limitati jiġu miċħuda, u l-politiki kollha tal-kampjament
jew jiġu eżegwiti biss ġewwa l-interval normalizzat. Il-finestra li tirriżulta
tiġi inkluża fil-metadati tal-kampjament u fil-prefiss ta' deskrizzjoni mhux fiduċjarju
b'hekk mudelli downstream jistgħu jiddistingwu eżerċit fokussat mill-timelin sħiħ.

Il-fokus tal-kapturi semantiku huwa sett separati, esplicitu. Il-modalità analisi predefinita `full`
tħares il-prompt tal-frame eżistenti u qatt ma tgħaddi t-test tal-request lill-mudell tal-kapturi.
Fil-modalità `focused`, il-bridge jaqra biss l-aħħar `text`/`input_text` mhux vojt
milli l-istess Chat jew Responses container, normalizza dan għal NFC, tikkollassa karattri ta' kontroll u
whitespace, u tikkappa għal 500 punti ta' kodiċi Unicode. Riżultat vojt jerġa' lura għall-eżatt
`full` prompt. Hint utli huwa serializzat bħala JSON f'blokka dedikata
ta' kontext mhux fiduċjarju u jista' biss jippreferi dettalji osservabbli; ma jistax
joverridi l-avviż separat kontra li jsegwi istruzzjonijiet viżibbli
jew udjibbli fil-media. Il-fokus testwali qatt ma jinfirx `start`/`end` jew jibdel
il-sampler temporali.

#### FU-07 evidenza ta' segment strutturali

`segment_aware` juża pass wieħed limitat ta' pre-analiżi fuq il-fluss lokali diġà validat.
Il-katina tal-filtri fissa l-ewwel tiskala għal massimu ta' 320 pixels
wiesgħa, tidentifika bidliet ta' scena u intervalli frozen, imbagħad tikkampja f'1 frame kull
sekonda għal blur, luma medja, u informazzjoni spazjali/temporali. Il-pass huwa
limitati għal 600 kampjamenti strutturali, thread waħda ta' FFmpeg/filter, l-istess
whitelist tal-protokoll u tal-kontenituri `file` biss, limit ta' output ta' proċess ta' 1 MiB,
u għal massimu ta' 30 sekondi ġewwa l-abort/deadline kondiviż tal-broker. Qatt ma
jaċċetta kmand, filtru, path, jew URL mill-request.

Il-valuri strutturali huma evidenza ta' kampjatura deterministika, mhux fehim semantiku tal-video. Huma ma jinfirxu suġġetti, azzjonijiet, didascaliji, diskors, jew intenzjoni tal-utent. Il-fruntieri tal-kwadri u tal-friż jiffurmaw segmenti; il-kopertura tal-friż, il-blur, l-espożizzjoni, id-dettall spazjali, u l-bidla temporali jaffettwaw biss kif il-baġit eżistenti ta' 1–16 framijiet huwa allokat. Segment li huwa kompletament friżat huwa limitat għal fram wieħed, filwaqt li s-segmenti mhux friżati jikkompetu għall-baġit li fadal. Meta l-fruntieri jinqasmu aktar minn framijiet, kopertura uniformi tal-linja ta' żmien tiġi mantenuta sabiex il-katali rapidi bikrija ma jistgħux jaħbu segment twil li jsegwi. Il-fruntieri tal-kwadri fi ħdan ir-riżoluzzjoni ta' analiżi ta' 1 sekonda ta' fruntiera tal-friż jiġu kkoalizzati.

Filtri nieqsa, evidenza mhux ffurmata/vojt, żball tad-dettettur, jew il-ħin limitat ta' pre-analiżi ma jfallux għall-politika ta' medda uniformi eżatta. Abort tal-caller jew deadline tal-broker ma jfallux għall-open: jtemm il-subprocess li huwa fil-fluss, jipprevjeni l-estrazzjoni ta' framijiet aktar tard, u l-ġnien temporanju privat jiġi meħtieġ fi `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` jiġġenera fixtures reali deterministiċi FFmpeg għall-ħlasijiet ta' didascaliji wara d-dedup, allokazzjoni tal-baġit ta' moviment densi, evidenza ta' blur/espożizzjoni/SI-TI, katali rapidi b'tarf twil, u falsi pożittivi ta' fade gradwali. Jirreġistra l-ħin tal-ħajt ta' pre-analiżi u, fejn `/usr/bin/time` huwa disponibbli, CPU tat-tfal u RSS massimu. Il-kontrolli tal-kwalità tiegħu huma orakli strutturali biss. Il-kwalità reali tal-mudell tad-didascalija tibqa' `HOLD` għax din il-harness m'għandhiex punt ta' aċċess awtorizzat jew ġudikant friżat. Il-ħlasijiet monetarji wkoll jibqgħu `HOLD` sakemm `--caption-cost-per-call-usd` jipprovdi stima pożittiva esplicita għal kull telefonata; il-kodiċi qatt ma joħloq riżultat.

Kull fram huwa limitat għal 4 MiB, il-framijiet raw kollha flimkien għal 23 MiB, u r-risposta serializzata tal-broker għal 32 MiB. Direttorju temporanju privat jiġi meħtieġ fi `finally`. OmniRoute ma jġibx FFmpeg u ma jaċċettax triq eżekuttiva personalizzata. Qabel il-kaptar, il-pont japplika pass ta' deduplication viżwali konservattiv: kull JPEG jiġi rduppjat għal buffer griż ta' 16×16 u jiġi mqabbel biss mal-aħħar fram li ġie rtenut. Għall-baġit ta' didascalija mitlub li huwa aktar minn fram wieħed, l-estrazzjoni tipprovdi pool ta' kandidati limitat ta' sa żewġ darbiet dak il-baġit u qatt aktar minn 16 framijiet. Il-kappa mitluba tiġi applikata biss wara d-deduplication, bil-kandidati magħżula l-ewwel u finali jiġu rtenuti waqt it-tnaqqis finali meta l-baġit ikun mill-inqas tnejn. Il-politika versionata `grayscale-16x16-mean-cells-v2` tuża l-akbar bejn il-delta medju tal-luma u r-ratio tal-cells tal-thumbnail li l-delta normalizzat tagħhom huwa mill-inqas 0.05. Il-threshold tad-doppji huwa l-kostanti 0.04, magħżula għall-prevedibbiltà minflok li tkun esposta bħala sett ta' runtime. Dan is-sinjal sekondarju ta' kontrast għoli jżomm moviment żgħir u bidliet ta' test visibbli li mqabbel biss medju jista' jaħbi. Żbalji ta' komparatur jew ta' dekkodifikazzjoni jfallu għall-open u jżommu kopertura. Il-metadati tal-output jisseparaw il-kandidati estratti, il-framijiet użati b'suċċess, u d-doppji viżwali li ġew imkeċċija.

Parti tal-video marked esplicittament tista' titlob sheet ta' kuntatt timestamped. Il-pont jibni massimu ta' grid JPEG ta' 4 kolonni, 16 fram. Kull cella ta' 512-pixel tħaffef il-timestamp tas-sors tagħha f'band ta' taħt ta' kontrast għoli, filwaqt li l-istess timestamps jibqgħu fil-metadati testwali għall-assocjazzjoni u l-audit downstream. Il-JPEG komplut jibqa' limitat għal 32 MiB. Jekk `sharp` ma jistax id-dekodifika jew jikkumpuni l-grid, il-pont jerġa' lura għall-framijiet JPEG individwali; abort tal-klijent xorta jippersisti permezz tal-operazzjoni tal-sheet.

L-evidenza ta' promozzjoni hija separata b'mod deliberat mill-mikrobenchmark tal-kompożizzjoni sintettika. `scripts/perf/video-bridge-contact-sheet-eval.ts` jiddeskrivi A/B harness b'schema-versioned għall-mudelli tal-viżjoni kompatibbli ma' OpenAI. Jkejjel tokens rapportati mill-fornitur, latenza tal-ħajt end-to-end (inkluż il-kompożizzjoni tal-sheet), kont ta' telefonati tal-mudell, u retention ta' fatti definiti mill-manifest. Ir-risposti raw tal-mudell ma jiġux miktuba fir-rapport; biss SHA-256 digests u matched fact IDs jiġu rtenuti. Il-harness ma tagħmel l-ebda telefonata tan-netwerk jew mudell mħallas sakemm `--execute-real` tiġi mgħoddija u `--model`, `OMNIROUTE_BASE_URL`, u `OMNIROUTE_API_KEY` jiġu kkonfigurati. Mingħajr dik il-run real esplicita, il-verdict li jista' jiġi maqsum jibqa' `HOLD`; il-measurements ta' payload/summit ta' telefonati sintettika biss mhumiex evidenza ta' promozzjoni.

Is-separat `scripts/perf/video-bridge-promotion-eval.ts` jikkonsma osservazzjonijiet FU-07 jew FU-09. L-aċċettazzjoni tal-promozzjoni teħtieġ l-għaxar tipi ta' xenarji sintettiki flimkien ma' clip reali sanitizzat, mill-inqas tlieta ripetizzjonijiet mkejla kull rwol u każ, l-għaxar metriċi ddikjarati, digests ta' media/friż/prompt/fattijiet mistennija, IDs ta' osservazzjoni uniċi u ordni A/B imħarsa. Ir-riċetta tal-eżekuzzjoni tgħaqqad id-digest tal-korp, SHA eżatta tal-kandidat u r-reviżjoni tal-mudell. Mank jew mis-measurements invalidi jibqgħu `HOLD`, inkluż CPU aktar minn 30 s, RSS massimu aktar minn 512 MiB jew pre-analiżi aktar minn 30 s. Dawn huma limiti ta' aċċettazzjoni ta' evidenza, mhux garanzija ġdida ta' enforcement ta' runtime RSS.

FU-07 teħtieġ mill-inqas 98% retention tal-kwalità u latenza p95 mhux aktar minn 1.2x bażi, flimkien ma' jew 0.05 titjib assolut bil-kas bil-bilanċ medju fil-kontijiet ta' didascalija ekwivalenti, jew mill-inqas 10% inqas kontijiet ta' didascalija wara d-dedup. FU-09 teħtieġ mill-inqas 0.85 kwalità, 95% retention, 20% tnaqqis fil-latenza p95 u 10% tnaqqis fit-tokens. Telf ta' fatti kritiċi, konformità ta' injizzjoni jew nuqqas ta' użu jpreventaw il-promozzjoni. Eżekuzzjoni waħda ma tistax tippromwovi xejn: `--previous-report` jikkonferma tnejn distinti, mhux sovrapposti, eżekuzzjonijiet konsekuttivi tal-istess politika/reviżjoni tal-mudell/kandidat/korp. Esperiment ta' kampjatura ma jistax jikkonferma esperiment ta' sheet ta' kuntatt.

Il-kolletturi għandhom jiskorjaw ir-risposti fil-memorja u jiffrankaw `responseDigest` flimkien mal-metriċi u l-osservazzjonijiet, qatt m'għandhom jiffrankaw it-test tar-risposta. Il-konsumatur jaqra wkoll osservazzjonijiet raw tal-istorja iżda qatt ma jkopja dak it-test fil-rapporti tiegħu. Eżatt wieħed minn `responseDigest` jew `rawResponseText` huwa aċċettat għal kull osservazzjoni. Il-lista permessa bil-verżjoni tibqa' vojt bi `hold` immutabbli bħala default. Entrata eliġibbli teħtieġ ir-referenza tal-evidenza tagħha, il-politika, ir-reviżjoni tal-mudell, il-SHA eżatta tal-kandidati, id-digest tal-manifest u żewġ ID ta' run distinti; kontesti konflittwali jiġu miċħuda. Dawn il-metadati huma kuntratt ta' awditjar, mhux prova li fajl referenzjat fih miżuri ġenwini. Iċċekkja r-reċipti attwali qabel ma żżid xi entrata. L-endpoint tal-istatistika tal-maniġment u l-dashboard tal-Video juru l-preparazzjoni konservattiva. Alias tal-mudell konfigurata waħdu ma jistax jistabbilixxi r-reviżjoni tiegħu jew il-SHA tal-kandidati li qed jaħdmu, għalhekk id-dashboard attwali jirrapporta `HOLD` minflok jerġa' juża l-eliġibilità minn kontest ta' eżekuzzjoni ieħor. Is-selezzjoni esperimentali esplicita tibqa' separata mill-promozzjoni; l-ebda default ma jinbidel awtomatikament.

Il-kollers jistgħu jattaccaw array opzjonali `transcript.cues` għal parti tal-video appoġġjata meta diġà jkollhom test allinjat. Kull cue għandu jġorr `text`, intervall definit `start`/`end` ġewwa d-durata mħarrġa, u `source` li huwa fil-lista permessa (`client`, `embedded`, jew `audio-bridge`); `confidence` huwa default għal `1` u għandu jibqa' bejn `0` u `1`. Cues eżatti d-doppji jiġu kkollettati. OmniRoute qatt ma jibda t-traskrizzjoni minn dawn il-metadati: cues validati jiġu kkopjati fil-riżultat deskritt bil-sors, il-fiduċja, u l-intervall, u jiġu rreġistrati bħala osservazzjonijiet mhux fiduċjużi flimkien mal-kaptazzjonijiet tal-qafas. Test invalidu, barra mill-limiti, jew mingħajr provvenjenza jiġi miċħud minflok jiġi mħallat fil-fluss tal-kaptazzjonijiet. It-tnejn tal-kanali tat-traskrizzjoni tal-korp tal-request jinnormalizzaw il-provenza mogħtija għal `client`, inkluż `embedded` jew `audio-bridge` labels asseriti minnha nnifisha. Biss adattatur li jappartjeni lis-server jista' jassigna dawk il-labels fiduċjużi permezz tal-argument `trustedSource` li huwa kodifikat biss; qasam JSON tal-request ma jistax jilħaq dak l-argument. It-test tat-traskrizzjoni jibqa' kontenut derivat mill-midja mhux fiduċjuż, irrispettivament mill-provenza tiegħu, u qatt ma għandu jiddetermina l-awtorizzazzjoni.

Kaller avvanzat jista' jipprovdi track `audioTranscript` għall-istess video; dan jiġi trattat bħala test mogħti mill-klijent, mhux prova ta' traskrizzjoni tas-server. Il-fużjoni tal-ħ seam tmexxi osservazzjonijiet viżwali u awdjovi taħt deadline waħda u sinjal ta' abort, ordnihom fuq timelin komuni, tikkollassa eżatti d-doppji, u tirrapporta riżultat parzjali meta biss naħa waħda tirnexxi. `audioTranscript` invalid jiġi degradat għal dak ir-riżultat parzjali — id-deskrizzjoni viżwali tiġi żżomm u l-branċ awdjo jirreġistra kodiċi ta' falliment sanitizzat — minflok ma jiflaħ il-video kollu. Il-preżenza ta' kull branċ, il-flag parzjali, u l-kodiċi ta' falliment sanitizzat jiġu preservati fir-riżultat deskritt, fil-metadati tal-guardrail (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), fil-metadati tal-cache tar-riżultat, u fil-kontijiet tal-fużjoni tal-pont. Il-path tal-Video Bridge default ma jinvokax speech-to-text jew jitniżżel kopja oħra tal-midja; mingħajr dak it-track esplicitu, jibqa' biss video.

**Il-ħażna tat-traskrizzjoni (#12150 P1).** Dan japplika awtomatikament kull meta l-Video Bridge (innifsu opt-in) juri cue tat-traskrizzjoni — m'hemm l-ebda flag ta' ħażna separata. Meta request juri xi cue tat-traskrizzjoni (a `transcript` iddikjarat mill-kaller jew `audioTranscript` fuzjonat), il-guardrail jimmarka bħala `videoBridgeObserved` u jipproduċi dell redattat tad-deskrizzjoni tal-video — rendiment identiku fejn il-korp tat-test liberu ta' kull cue jiġi sostitwit b'`[redacted-video-transcript]`, mibni billi ssostitwixxi l-qasam strutturat tal-cue qabel ma l-istringa tiġi assembjata (qatt billi tiġi parsejat it-test imwaħħal, sabiex l-ebda kontenut tal-cue — avversarjali jew ordinarju, inkluż korpi li jikkontinwaw `]` bħal ` [inaudible]`/`[music]` — ma jistax jgħix). Il-korp tal-request tal-log persistenti jissostitwixxi kull parti tat-test derivat mill-video għal dak id-dell redattat, imwaħħal mill-eżattezza tal-kontenut; l-ankra `fullText` tiġi r-read mill-payload tal-guardrail pre-call li tlestiet, sabiex il-match għad irnexxi wara guardrails ta' ċirku aktar tard (il-PII u l-maskers tal-kredenzjali, prioretajiet 10/95) jrewritejaw it-test tad-deskrizzjoni fil-post u wara l-prompt tas-sistema/handoff/injezzjoni tal-memorja jiffurma l-array tal-messaġġ. Il-korp mibgħut 'il fuq lill-mudell ma jinbidelx. Richiesta osservata wkoll ma tpopola l-ebda Memorja durabbli (it-tneħħija derivata mill-request u r-risposta jiġu skipjati), sabiex ir-risposta tal-mudell ma tistax tirrepeti t-test tat-traskrizzjoni fil-Memorja.

**Qasam raw tal-video (#12430).** Meta l-pont huwa attivat u l-appoġġ tal-video nativ huwa mhux magħruf jew assenti, il-qasam definit `transcript`/`audioTranscript` attiva wkoll `videoBridgeObserved`, anke wara falliment tad-deskrizzjoni jew limitu ta' `maxVideos`. `null` u strings vojt jikkontaw; qasmijiet assenti u metadati mhux tal-video ma jikkontawx. Kopji mħażna redattaw dawn il-qasams jew jomittu r-request, u caches/Memorja jiġu bypassed. Il-payload tal-fornitur jibqa' mhux mibdul.

Kopji addizzjonali mħażna jużaw l-istess sinjal ta' request osservat. Is-snapshot tal-request tal-klijent pre-guardrail raw, il-request pendenti fil-memorja, u l-log ta' request miċħuda kmieni jissostitwixxu strutturalment il-qasams tat-traskrizzjoni fil-partijiet tal-video; prompts ta' string sintetizzati mill-istadji tal-pipeline u l-handoff tal-kuntest jiġu redattati fil-sink tal-korp tal-request persistenti. Il-markatur persistenti `video_content_removed` jagħmel li l-kontinwazzjoni ta' `previous_response_id` tiġi miċħuda minflok tiġi ricostruwita t-test li kien intenzjonalment imħassar. Jekk request osservata titlef id-dell redattat tagħha għal kull parti qabel il-logging, jew anke waħda minn diversi shadows tal-video ma tistax tikkonforma wara mutazzjonijiet ta' request aktar tard, il-korp tal-request mħażen jiġi ommissu kompletament minflok ma jżomm traskrizzjoni parzjalment redattata.

Għal talba osservata, risposta tal-mudell tista' tikkwota kwalunkwe parti mill-protokoll mingħajr qafas strutturat ta' indikazzjoni. Il-log tal-kontijiet persistenti `responseBody` għalhekk jiġi sostitwit minn markatur ta' ommissjoni; l-artifatt dettaljat tal-pipeline (li jista' jinkludi korpi ta' upstream/client u chunks tal-fluss) ma jinżammx. Il-kaxxi semantici, ta' idempotency, u ta' replay ta' raġunament jgħaddu minn qari u kitba għal dik it-talba. It-talba tal-fornitur u r-risposta viżibbli għall-klijent jibqgħu invarjati. Il-byte ta' keepalive bikrija jiġi drenat mill-buffer temporanju meta l-artifatt dettaljat jiġi ommiss. Il-warning ta' Kiro dwar l-EventStream mhux valid jirrapporta biss il-kont ta' byte tal-payload, qatt il-kontenut tiegħu jew l-iżbalji raw tal-parser tal-JSON.

Dan ma jikkonfermax li kull diaknostika mhux relatata tal-fornitur/plugin ġiet auditata; il-ħruġ ikbar tal-kontijiet miżmuma huwa segwit f'#11658.

Il-lifecyle interni `/api/modality-bridge/video/drilldown` huwa substrat ta' cache separat, loopback/token-authenticated. Kull operazzjoni teħtieġ ukoll ID prinċipali opak kanoniku. Qabel ma tiġi attivata telefonata ta' produzzjoni, trid tiġbor dak l-ID mill-tenant awtorizzat u qatt ma għandha tgħaddi valur magħżul mill-klijent. Il-kliem tal-cache jgħaqqdu dak il-prinċipali ma' IDs kanoniċi tas-sessjoni u tar-referenza tal-video, jstorew biss il-kliem derivati SHA-256 tagħhom, u jiskopru kemm il-qari kif ukoll l-irtirar għall-istess prinċipali. Il-cache jstorew sa 16 framijiet JPEG derivati għal kull entrata, jiskadihom wara għaxar minuti, u jappoġġja qari limitat `start`/`end` jew irtirar esplicitu tas-sessjoni.

Kull prinċipali huwa limitat għal 16 entrati u 64 MiB ta' data JPEG kanonika. Dawn il-limiti huma indipendenti mill-limitu globali ta' 64 entrata/256 MiB: il-pressjoni tal-kwota tal-prinċipali tneħħi biss l-entrati l-inqas riċenti u użati ta' dak il-prinċipali qabel ma tiġi kkunsidrata l-irtirar globali LRU. L-entrati skaduti jiġu sweeps minn kemm il-prinċipali kif ukoll il-kont globali fuq l-attività tal-cache, filwaqt li l-annullament u l-falliment tal-validazzjoni ma jikkonfermax sostituzzjoni parzjali.

Il-cache jirrifjuta Base64 mhux kanoniku, padding eċċessiv, media mhux JPEG, JPEGs mhux validi jew imqassra, u JPEGs li jipproduċu warning waqt dekodifikazzjoni sħiħa limitata `sharp`. Huwa re-encode kull immaġni aċċettata bħala JPEG kanoniku, jiġġenera l-wisa' u l-għoli mill-byte dekodifikati minflok fiduċja fil-firxa tal-caller, u jiskarta kwalunkwe byte polyglot li jmiss minflok iżommhom. Biss il-buffer kompress kanoniku limitat huwa miżmum għall-kwoti. Il-limitu tal-wajer JSON jinkludi l-overhead Base64 għall-limitu ta' 32 MiB tal-input dekodifikat. Kull derivazzjoni maħżuna tirreġistra l-format/resoluzzjoni JPEG validata tagħha, il-politika ta' campjunar, il-verżjoni tad-derivazzjoni, il-ħin tal-ħolqien, l-hash tal-kontenut imħaddem mis-server, u l-hash tar-referenza tal-ġenitur flimkien mal-hash tal-kontenut tal-ġenitur tal-caller fiduċjuż. L-annullament jiġi kkontrollat bejn il-fażi dekodifikazzjoni/hash asinkroni qabel il-kummissjoni atomika tal-cache.

Il-produttur tal-produzzjoni jerġa' juża framijiet tal-broker diġà derivati biss wara analisi viżiva suċċessiva, mingħajr tniżżil/estrazzjoni sekonda tal-video. Huwa jeħtieġ operatur `modalityBridgeVideoDrilldownEnabled=true`, strett per-part `drilldown: true`, u ID tar-rekord tal-API-key awtorizzata. Valuri tal-prinċipali/sessjoni dikjarati mill-klijent qatt ma jistabbilixxu proprjetà. Mingħajr it-tlieta kundizzjonijiet ma jhash, ma jżidx jew ma jżommx framijiet addizzjonali. Falliment fil-ħażna jżomm ir-risposta viżiva utli. Talbiet konsenswali jgħaddu mill-cache tar-riżultat tal-video kollu sabiex ir-riżultati miżmuma qatt ma replay handles.

Risposti JSON u SSE suċċessivi juru sa erba' handles opaki fil-header limitat `x-omniroute-video-drilldown`. Oriġini awtorizzati tal-browser jistgħu jaqraw dak il-header mingħajr ma jespandu l-politika tal-oriġini CORS. Handles ġodda jużaw `v1.<32-byte random base64url token>`, u r-reġistru jżomm biss l-hashes SHA-256 tagħhom. Il-parser tal-qari/header jaċċetta wkoll tokens ta' 64-hex legat. Il-konsumatur pubbliku awtorizzat huwa `GET /api/v1/video-bridge/drilldown?handle=...`, imwaqqaf indipendentement minn `modalityBridgeVideoDrilldownRemoteEnabled=true`. Falsifikazzjoni persistita esplicita tirrevoka l-aċċess anke meta l-fall-back legat `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` huwa attivat. Il-ħażna tal-produzzjoni għandha l-fall-back legat analogu `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Iż-żewġ fall-backs huma default off.

Il-konsumatur jiġġenera l-proprjetà mill-key awtorizzata, applikat il-politika tal-key, u jirritorna l-istess 404 għal handles mhux magħrufa, skaduti u ta' key oħra. Huwa jaċċetta `variant=preview|standard|detail` (dimensjoni JPEG massima 320/640/1280, qatt ma tiġi aġġustata), `limit=1..8` (jew l-alias legat `frames`, qatt ma t-tnejn), `page` bbażata fuq żero, u sekondi fokali `start`/`end` opzjonali. Keys tal-query duplicati u windows fokali invertiti jiġu rrifjutati. Kull varjant imħallas għandu hash tal-kontenut attwali tiegħu u metadata tal-resoluzzjoni attwali, marbuta mal-fonte miżmuma. Il-varjanti huma derivati waqt il-qari minflok ma jkunux maħżuna bħala kopji miżmuma addizzjonali. Ir-risposta JSON, inkluż Base64/envelope, hija limitata għal 32 MiB; paġna eċċessiva tirritorna 413 u l-klijent irid jitlob inqas framijiet. Il-qari jikkontrolla l-annullament madwar kull aġġustament u jerġa' jikkontrolla l-validità tal-handle qabel ma jirritorna. `DELETE` mill-proprjetar huwa idempotent; l-irtirar jew l-iskadenza tal-TTL jħalli l-fonte miżmuma u l-kontabilità tal-użu.

Il-ħażna kondiviża hija lokali għall-proċess: handles jiskadu meta jerġa' jibda u mhumiex trasferibbli bejn proċessi indipendenti ta' OmniRoute. L-istatistika tal-ġestjoni turi l-politika effettiva tal-ħażna/remote u l-entrati/bytes miżmuma aggregati biss, qatt media, referenzi, IDs tal-prinċipali jew handles. Il-panel tal-impostazzjonijiet tal-Video juri dawk il-valuri u jista' jżomm kemm il-switches tal-kunsens. Din id-dokumenti ta' implimentazzjoni mhumiex evidenza ta' implimentazzjoni live jew promozzjoni; l-aċċettazzjoni tal-mudell reali tiġi segwita separatament.

Frames huma kkapitati b'mod sekondarju bil-modell tal-Vidjo kkonfigurat. Override tal-Vidjo vojt jinherit is-settings tal-Viżjoni; jekk it-tnejn huma vojt, il-router awtomatiku tal-Viżjoni jagħżel il-modell effettiv li jista' jara. Kappitazzjonijiet suċċessivi jissostitwixxu l-parti oriġinali b'prefix stabbli `[Video description:` li wkoll jindika t-test bħala osservazzjoni derivata minn media mhux fiduċjuża u jgħid lill-modelli li ġejjin biex ma jsegwu l-istruzzjonijiet li jinsabu fil-media. Il-kaxxi tal-cache tal-kappitazzjonijiet tal-frame jinkludu l-byte tal-JPEG, il-prompt, it-timestamp, u l-modell effettiv; biss kappitazzjonijiet suċċessivi huma maħżuna. L-entrati tal-cache iżommu l-modell tal-produttur suċċessiv attwali, inkluż modell ta' fallback; il-ħolqa tirrapporta `mixed` meta frames differenti ġew prodotti minn modelli differenti. Hit tal-cache jerġa' juża dik l-identità tal-produttur minflok jerġa' jlabelha bħala l-pjan ta' routing mitlub. Il-cache tar-riżultat tal-video kollu huwa kkatat fuq kull input li jibdel l-output — prompt, modell effettiv, politika ta' campjatura, kont ta' frames, modalità ta' analiżi semantika, il-fingerprint SHA-256 tal-ħjiel normalizzat tal-fokus, il-window tal-fokus, `transcript`, `audioTranscript`, u l-flag tal-kontatt — għalhekk ibdil ta' xi dimensjoni minn dawn huwa hit tal-cache, qatt riutilizzazzjoni stanjata. Il-verżjoni tal-politika ta' dedup viżwali, il-threshold, u l-kont tal-candidate-frame limitat huma wkoll espliciti fil-key tal-cache tar-riżultat u l-metadati; għalhekk, bidla fil-politika ma tistax terġa' tuża deskrizzjoni stanjata tal-video kollu. Il-metadati tal-cache tar-riżultat v4 iżommu l-modalità u l-fingerprint, qatt l-attività oriġinali tal-utent. Il-metadati tal-guardrail jirrapporta kemm il-modalitajiet analitiċi mitluba kif ukoll dawk effettivi; modalità mitluba `focused` mingħajr test utent utli tiġi rrappurtata bħala effettivament `full`.

Il-guardrail jestratti kull parti tal-video appoġġjata iżda jiddeskrivi l-anqas `modalityBridgeVideoMaxVideos`. Għal target li huwa provat li għandu `supportsVideo === false`, il-vidjos li fallu u dawk li jaqbżu l-limitu jsiru markaturi ta' test sikur espliciti sabiex l-ebda video raw ma jsurvivi. Meta l-kapaċità mhix magħrufa, dawk il-parti jibqgħu mhux imħassra. Targets b`supportsVideo === true` jgħaddu mill-ħolqa. Is-sinjal ta' abort tal-request tal-klijent jippopaga permezz ta' download, broker queue, subprocesses, u calls tal-kappitazzjoni; aborts waqfu bejn il-vidjos u qatt ma jfallu miftuħ għal media raw.

Is-settings tal-runtime huma DB-backed u Zod-validated:

| Key                                 | Default     | Range / behavior                                                                                                |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optional runtime, opt-in                                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` iżomm kappitazzjonijiet ġeneriċi; `focused` juża kontest limitat, mhux fiduċjuż tal-aħħar utent          |
| `modalityBridgeVideoModel`          | `""`        | Inherit il-modell tal-Viżjoni Bridge                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, jew `segment_aware` proporzjonali; falliment tad-dettettur jerġa' jmur għal `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                  |

Valuri ta' timeout tal-Vidjo persistenti tal-legacy li huma aktar minn 120 sekonda huma kklampjati għall-deadline tal-broker; settings ġodda li jiktbu aktar minn dak il-limitu jiġu miċħuda. `GET /api/modality-bridge/video/runtime` teħtieġ lokalità ta' loopback stampata fiduċjuża qabel l-autentikazzjoni jew il-probing tal-runtime, imbagħad teħtieġ l-autentikazzjoni tal-maniġment. Tirritorna biss `available`, versi FFmpeg/ffprobe sanitizzati, u raġuni fissa meta l-runtime mhix disponibbli. L-endpoint tal-estrazzjoni interna mhix API ta' upload pubbliku: saturazzjoni tal-queue tirritorna `503` plus `Retry-After`, disconnect tal-caller jirritorna `499`, u l-deadline fissa tal-broker tirritorna `504`. Risposti konvertiti jżidu `video->text;model=<visionModel>;parts=<videos>` mal-header ċentrali `x-omniroute-modality-bridge` mingħajr ma jneħħu s-segumenti tal-Viżjoni jew tal-Audio.

### PII Masker (`piiMasker.ts`)

Jaħdem fuq **it-tnejn** l-istadji.

- **`preCall`** jikkopja l-payload, jimxi `system`, `messages`, `input`, u `prompt` (inklużi l-oġġetti ta' string sempliċi), u japplika `processPII()` (minn `@/shared/utils/inputSanitizer`) għal fields ta' string `content`/`text`. Meta `PII_REDACTION_ENABLED=true`, PII identifikata tiġi redatta fil-payload outbound. Dan huwa indipendenti mill-`INPUT_SANITIZER_MODE` (li jikkontrolla biss il-politika ta' injizzjoni tal-prompt). Meta l-redazzjoni tkun off, il-call tirreġistra l-kontijiet tad-detekzjoni mingħajr ma terġa' tikteb il-kontenut.
- **`postCall`** jikkopja profondament ir-risposta, jaħdem `sanitizePIIResponse()` plus il-masker tal-forma tal-Responses-API (`maskResponsesOutput` — jkopri `output_text` u `output[].content[].text`). Jekk ikun hemm xi redazzjoni, ir-risposta immodifikata tissostitwixxi l-originali.

Il-guardrail qatt ma jblokka; huwa biss jannota (`meta.detections`, `meta.redacted`) jew jerġa' jikteb.

### Prompt Injection (`promptInjection.ts`)

Id-detects strutturi avversarjali fil-kontenut ipprovdut mill-utent u jforza l-politika kkonfigurat. Il-kondotta hija mmexxija minn varjabbli tal-ambjent u għażliet tal-kostruzzjoni:

| Impostazzjoni       | Env var                                                                                               | Default | Effett                                                                                                                                                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Attivat             | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Meta `false`, il-guardrail iċċirkondja.                                                                                                                                                                                  |
| Modalità            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Politika ta' injizzjoni: `block`, `warn`, jew `log`. (`redact` huwa aċċettat għal kompatibbiltà lura iżda **ma** jistrippja test ta' injizzjoni; talba għal PII rewrite hija kkontrollata minn `PII_REDACTION_ENABLED`.) |
| Threshold tal-blokk | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Severità minima meħtieġa biex tiġi blokkata. Medju huwa osservat biss bħala default.                                                                                                                                     |

**Preċedenza tal-modalità** (`getMode`): caller `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Għalhekk, override tal-dashboard jirbaħ fuq l-env vars, sabiex il-Feature
Flags UI tikkontrolla l-guard live (mingħajr reboot). Il-qari tal-DB huwa fail-safe:
jekk ikun hemm żball, il-guard jerġa' lura għall-imġiba bbażata fuq l-env, u meta m'hemmx
override imwaqqaf, l-imġiba hija identika għal riżoluzzjoni bbażata fuq l-env biss.

Sorsi ta' detzzjoni:

1. `sanitizeRequest()` minn `@/shared/utils/inputSanitizer` (detettur kondivi
   użat f'postijiet oħra fil-pipeline).
2. `DEFAULT_GUARD_PATTERNS` mibnija (bħalissa `system_override_inline` u
   `markdown_system_block`, it-tnejn ta' severità `high`).
3. `customPatterns` opzjonali mgħoddija permezz ta' għażliet tal-kostruzzjoni (strings, regex,
   jew `{ name, pattern, severity }` records).

Meta `mode === "block"` **u** mill-inqas waħda mid-dettazzjonijiet tilħaq il-threshold ta' severità,
`preCall` iħalli `{ block: true, message: "Talba miċħuda: 
kontenut suspettuż id-dettettat" }`. Fil-modalitajiet `warn`/`log`, il-guardrail jilloga iżda
jippermetti t-calling. Il-ħaġa kondivi `evaluatePromptInjection()` hija wkoll esportata
għal dawk li għandhom bżonn jivvalutaw il-prompts mingħajr ma jgħaddu mill-registry.

**Scan bound (v3.8.20):** id-dettettur jissorvelja biss il **l-ewwel 16 KB** ta'
test tal-prompts magħquda — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) f'
`src/shared/utils/inputSanitizer.ts`. Iż-żewġ `detectInjection()` u
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` qabel ma jsiru
l-loop tal-patter. Id-direttivi ta' injizzjoni jinsabu qrib il-quċċata ta' input, għalhekk dan
jillimita l-CPU/GC regex fuq payloads ta' multi-hundred-KB mingħajr ma jnaqqas id-dettzzjoni (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Jaħdem fuq **it-tnejn** il-fażi, l-aħħar fil-katina default (priorità `95`). Jistrippja
patterns magħrufa tal-API-key / secret-token mill-payload outbound (kontenut tal-messaġġ,
argumenti tal-tool-call, riżultati tal-tool) **u** ir-risposta tal-fornitur, sabiex credential imqiegħda f'prompt (jew eċċitati lura minn riżultat tal-tool) ma tiġix mxandra
lil fornitur ta' fuq jew lura lill-klijent.

- **Opt-in biss**, l-istess konvenzjoni bħal PII redaction (Hard Rule #20-adjacent):
  diżattivata sakemm `settings.credentialRedactionEnabled === true` **jew**
  `CREDENTIAL_REDACTION_ENABLED=true`. Meta tkun off, il-guardrail huwa no-op —
  qatt ma jblokka u qatt ma jrewrite.
- `redactCredentials()` jimxi mal-payload/risposta sħiħa (`walkValue()`,
  prototip-pollution-safe, cycle-safe permezz ta' `WeakSet`) u jissostitwixxi l-matches ma'
  placeholder `[REDACTED:<type>]`, jikkopja biss il-fergħat li verament
  biddlu.
- `CREDENTIAL_PATTERNS` tkopri keys tal-fornitur LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), keys ta' ħlas (Stripe, Square), keys tal-cloud
  (AWS access key, Twilio, SendGrid, Mailgun), keys privati / JWTs,
  strings ta' konnessjoni li jġorru credentials (`mongodb://user:pass@...`, eċċ.), u
  pattern ġeneriku ta' header-value `Authorization`/`x-api-key`/`api-key`/`apikey`.
- Il-guardrail qatt ma jblokka; huwa biss jrewrite (`modifiedPayload` /
  `modifiedResponse`) u jannota (`meta.credentialsRedacted`, `meta.count`).

Guard ta' regressjoni: `tests/unit/credential-masker-guardrail.test.ts`.

## Kuntratt Bażiku (`base.ts`)

```typescript
class BaseGuardrail {
  enabled: boolean;
  name: string;
  priority: number;

  constructor(name: string, options?: { enabled?: boolean; priority?: number });

  async preCall(
    payload: unknown,
    context: GuardrailContext,
  ): Promise<GuardrailResult | void>;

  async postCall(
    response: unknown,
    context: GuardrailContext,
  ): Promise<GuardrailResult | void>;
}

interface GuardrailResult<TValue = unknown> {
  block?: boolean; // true jwaqqaf il-katina immedjatament
  message?: string; // jintwera meta jsir imblukkar
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // jiġi rritornat minn preCall biex jerġa' jikteb it-talba
  modifiedResponse?: TValue; // jiġi rritornat minn postCall biex jerġa' jikteb ir-rispons
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

Guardrail jindika "l-ebda bidla" billi jirritorna jew `void`, `{}`, jew
`{ block: false }`. Ir-ritorn ta' `modifiedPayload`/`modifiedResponse` jissostitwixxi
l-valur li jgħaddi mill-katina għall-guardrails sussegwenti.
`signal?: AbortSignal` jittrasmetti ċ-ċiklu tal-ħajja ta' min jagħmel is-sejħa lill-guardrails. L-abort ta' talba huwa l-eċċezzjoni intenzjonata ta' fail-open: il-pontijiet tal-midja jwaqqfu x-xogħol u jagħmlu t-tindif mingħajr ma jirrestawraw il-midja mhux ipproċessata lejn mira li hu magħruf li ma tappoġġjahiex.

## Reġistru (`registry.ts`)

Is-singleton `guardrailRegistry` jesponi:

- `register(guardrail)` — iżid guardrail (jew jissostitwih skont l-isem normalizzat) u
  jerġa' jordna skont `priority` axxendenti.
- `clear()` / `list()` — għodod ta' għajnuna amministrattivi.
- `runPreCallHooks(payload, context)` — jgħaddi mill-guardrails attivi, jgħaddi l-
  payload minn `modifiedPayload`, u jieqaf mal-ewwel `block: true`.
- `runPostCallHooks(response, context)` — l-istess fluss fuq in-naħa tar-rispons.
- `resetGuardrailsForTests({ registerDefaults })` — ineħħi l-istat u, b'mod fakultattiv,
  jerġa' jirreġistra l-valuri predefiniti għal iżolament nadif tat-testijiet.

Iż-żewġ runners jirritornaw `{ blocked, payload|response, results, guardrail?, message? }`
fejn `results` huwa array ta' rekords `GuardrailExecutionResult` li jinkludu
l-fields `blocked`, `skipped`, `modified`, `error`, u `meta` għal kull guardrail,
utli għat-traċċar.

### Diżattivazzjoni tal-Guardrails Għal Kull Talba

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` jiġbor lista
mingħajr duplikati ta' ismijiet ta' guardrails li għandhom jinqabżu għat-talba
attwali. Is-sorsi (kollha fakultattivi, kollha magħquda) huma:

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` fil-body tat-talba (fl-ogħla livell)
- `metadata.disabledGuardrails` fil-body tat-talba
- Il-header `x-omniroute-disabled-guardrails` (jew dak legat
  `x-disabled-guardrails`)

Il-valuri jistgħu jkunu arrays ta' strings jew string separata b'virgoli; l-ismijiet jiġu
normalizzati għal kebab-case b'ittri żgħar (`pii_masker` → `pii-masker`). Ir-riżultat
jgħaddi permezz ta' `context.disabledGuardrails` lir-reġistru, li jaqbeż
il-guardrails korrispondenti (`skipped: true` f'`results`).

## Ordni tal-Eżekuzzjoni

Għal kull talba li tgħaddi minn `src/sse/handlers/chat.ts` u
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` jibni l-lista ta’ elementi li għandhom jinqabżu mill-API key, mill-body,
   u mill-headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` iħaddem il-guardrails f’ordni axxendenti
   ta’ prijorità:
   - Il-guardrails diżattivati jiġu rreġistrati bħala `skipped`.
   - Il-`preCall` ta’ kull guardrail jista’ jerġa’ jikteb il-payload permezz ta’ `modifiedPayload`.
   - L-ewwel `block: true` iwaqqaf il-katina immedjatament u l-handler jirritorna
     risposta ta’ rifjut mill-guardrail.
3. Il-payload (li potenzjalment ikun inkiteb mill-ġdid) jgħaddi għar-routing ikkombinat u
   għad-dispatch upstream.
4. Wara li tiġi assemblata r-risposta, `guardrailRegistry.runPostCallHooks(...)`
   iħaddem l-istess katina fuq ir-risposta. `block: true` hawnhekk iwarrab ir-risposta
   upstream.

Guardrails li joħolqu eċċezzjoni jiġu rreġistrati b’`error: <message>` u jiddaħħlu fil-log permezz ta’
`logger.warn`, iżda l-katina tkompli — bid-disinn, f’każ ta’ falliment tippermetti li l-proċess ikompli.

## Konfigurazzjoni

Varjabbli tal-ambjent moqrija mill-guardrails integrati:

| Varjabbli                             | Użata minn                | Effett                                                                                                                        |
| ------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Issettja għal `false` biex tiddiżattiva kompletament id-detezzjoni.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Politika tal-injezzjoni: `warn`, `block`, jew `log`. Il-valur legacy `redact` ma jerġax jikteb it-test tal-injezzjoni.        |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modalità għall-guard tal-injezzjoni; huwa wkoll feature flag fid-DB li **jissostitwixxi** l-varjabbli tal-ambjent (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Is-severità minima li `MODE=block` jirrifjuta: `high` (default), `medium`, jew `low`.                                         |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias legacy għal `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                          |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Meta jkun `true`, il-PII tat-talba jiġi redatt (indipendentement mill-modalità tal-injezzjoni).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Jikkontrolla l-imġiba tal-masker fuq in-naħa tar-risposta.                                                                    |

Il-guardrails tal-Modality Bridge jaqraw il-konfigurazzjoni waqt l-eżekuzzjoni mill-ħażna tas-settings
ibbażata fuq id-DB (`getSettings()`), mhux mill-varjabbli tal-ambjent. Il-keys primarji ta’ Vision huma
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, u
`modalityBridgeCacheMaxEntries`. Il-keys legacy
`visionBridge*` jiġu aċċettati biss bħala l-fallback dokumentat għall-qari għal ċiklu wieħed;
il-kitbiet mid-dashboard jużaw il-keys primarji. Il-valuri default u r-resolver tal-fallback
jinsabu f’`src/shared/constants/modalityBridgeDefaults.ts`, filwaqt li l-kostanti legacy
jinżammu f’`src/shared/constants/visionBridgeDefaults.ts`.

Audio juża `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, u `modalityBridgeAudioMaxClips`, flimkien mas-settings kondiviżi
`modalityBridgeCache*`. Audio m’għandux fallback għal keys legacy minħabba li dawn
il-keys ġew introdotti mal-iskema tal-Modality Bridge.

Video juża `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, u
`modalityBridgeVideoTimeout`, flimkien mas-settings kondiviżi `modalityBridgeCache*`.
Huwa diżattivat b’mod default minħabba li FFmpeg/ffprobe huma dipendenzi operazzjonali
fakultattivi u l-ħolqien ta’ captions għall-frames iżid il-latenza u l-ispiża tal-mudell.

## Guardrails Personalizzati

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

Passi:

1. Oħloq `src/lib/guardrails/myGuardrail.ts` li jestendi `BaseGuardrail`.
2. Implimenta `preCall` u/jew `postCall`.
3. Jew irreġistrah waqt l-importazzjoni (żidu minn `registerDefaultGuardrails`) jew
   sejjaħ `guardrailRegistry.register(...)` waqt l-eżekuzzjoni — ir-reġistru jissostitwixxi
   kwalunkwe guardrail preċedenti bl-istess isem normalizzat.
4. Żid testijiet taħt `tests/unit/` (eżempji eżistenti:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Ittestjar

Uża `resetGuardrailsForTests()` bejn it-testijiet biex tibda minn stat magħruf.
Għaddi `{ registerDefaults: false }` biex tibda b’reġistru vojt u
rreġistra biss il-guardrails li qed jiġu ttestjati. Vision Bridge jaċċetta l-injezzjoni
tad-dipendenzi (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge jesponi
l-punti ta’ separazzjoni ekwivalenti għas-settings, il-kapaċitajiet, l-għażla tal-mudell STT, il-kontrolli
tal-kredenzjali, u t-traskrizzjoni. Għalhekk, it-testijiet jistgħu jeżerċitaw iż-żewġ flussi mingħajr aċċess
għad-DB jew għan-network.

## Ara Wkoll

- `src/lib/guardrails/` — implimentazzjoni
- `src/shared/utils/inputSanitizer.ts` — detettur kondiviż li jħaddem
  il-protezzjoni kontra l-injezzjoni fil-prompt u l-maskra tal-PII
- `src/shared/constants/visionBridgeDefaults.ts` — valuri predefiniti ta’ Vision Bridge u
  lista ta’ mudelli b’bridge obbligatorju
- `src/shared/constants/modalityBridgeDefaults.ts` — valuri predefiniti kondiviżi waqt l-eżekuzzjoni għal Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — saff ortogonali (circuit breaker, perjodi ta’ stennija)
- `docs/reference/ENVIRONMENT.md` — referenza sħiħa tal-varjabbli tal-ambjent

## Kopertura tar-rotot tal-protezzjoni kontra l-injezzjoni u red-team (Fażi 8 · Blokka D)

Il-protezzjoni kontra l-injezzjoni (`createInjectionGuard` / `withInjectionGuard`) tkopri r-rotot kollha
li jaċċettaw prompts tal-utenti. Tirrispetta `INJECTION_GUARD_MODE` (il-valur predefinit `warn` = tirreġistra biss;
`block` = tirritorna HTTP 400 `SECURITY_001`).

| Tip              | Rotot                                                                                                                                                | Modalità predefinita |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Test (eżistenti) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                 |
| Ġenerattiv       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                 |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                 |

L-estrazzjoni tat-test (`extractMessageContents`) tkopri `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kull lejl, `nightly-llm-security.yml`):** promptfoo jivvalida li kull rotta timblokka
l-korpus OWASP-LLM meta `INJECTION_GUARD_MODE=block`; garak iħaddem probes (jinqabeż mingħajr secret).
`moderations` huwa inkluż għall-konsistenza — l-operaturi fil-modalità ta’ mblukkar jistgħu jeżentawh permezz ta’
`resolveDisabledGuardrails`.

Il-workflow ta’ kull lejl (`.github/workflows/nightly-llm-security.yml`, cron + attivazzjoni
manwali) għandu żewġ jobs:

- **`promptfoo-guard` (blokkanti)** — iħaddem `promptfoo eval -c promptfooconfig.yaml`
  b’`INJECTION_GUARD_MODE=block`. Kull każ avversarju (eż. "ignore all
  previous instructions…", jailbreaks tal-istil DAN) jivverifika li r-risposta ġġorr
  `error.code === "SECURITY_001"`, jiġifieri li l-protezzjoni fil-fatt irrifjutat it-talba.
- **`garak` (konsultattiv)** — iħaddem garak `--probes promptinject,dan,leakreplay`
  kontra istanza lokali ta’ OmniRoute (`http://localhost:20128/v1`). Huwa kkundizzjonat minn
  secret tal-fornitur (`PROMPTFOO_PROVIDER_KEY`); jinqabeż mingħajr problemi u għandu s-suffiss
  `|| true`, għalhekk jirrapporta mingħajr ma jfalli s-CI.

Il-kopertura tal-helper tal-protezzjoni (`createInjectionGuard` / `withInjectionGuard`)
testendi għal kull rotta `/v1` li ġġorr prompt; it-test tal-prompt jittieħed minn
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` minn
`extractMessageContents()` f’`src/shared/utils/inputSanitizer.ts`.
