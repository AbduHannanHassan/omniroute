# Guardrails (Kiswahili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Chanzo rasmi:** `src/lib/guardrails/`
> **Ilisasishwa mwisho:** 2026-08-29 — v3.8.51 (asili ya nakala ya Video Bridge hutangazwa na mpigaji,
> bado haijathibitishwa na seva — imefafanuliwa kulingana na #11661)

Vizuizi vya ulinzi hutekeleza usalama, sera na mageuzi ya maudhui kwenye mpaka
kati ya OmniRoute na watoa huduma wa ngazi ya juu. Kila kizuizi cha ulinzi kinaweza kukagua (na
kwa hiari kukataa, kubadilisha au kuweka ufafanuzi kwenye) data za ombi (`preCall`) na
majibu ya mtoa huduma wa ngazi ya juu (`postCall`).

Mfumo ni wa **fail-open**: ikiwa kizuizi cha ulinzi kitatupa hitilafu kinapotekelezwa, sajili
hurekodi hitilafu hiyo na kuendelea na kizuizi kinachofuata badala ya kusababisha
ombi lishindwe. Kuzuia ni uamuzi wa moja kwa moja (`block: true`), kamwe si ajali.

## Mifumo ya Ulinzi ya Ndani

Rejista inajaza kiotomatiki mifumo sita ya ulinzi kwa mpangilio wa kipaumbele wakati wa kuagiza
(tazama `registry.ts` → `registerDefaultGuardrails()`):

| Kipaumbele | Jina                | Hatua(s)       | Faili                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nambari za kipaumbele za chini zinaendesha **kwanza**.

### Daraja la Maono (`visionBridge.ts`) — Mifumo ya Modality PR-1

Inakabili maombi yanayoleta picha yaliyolengwa kwa **mifano zisizo za maono** na ama
kuhamasisha ombi lote kwa mfano unaoweza kuona au kubadilisha sehemu za picha
na maelezo ya maandiko yanayozalishwa na mfano wa maono unaoweza kubadilishwa kabla
ya wito wa juu. Hii inaruhusu watoa huduma wa maandiko pekee kushughulikia
mifumo ya malipo ya multimodal kwa uwazi.

Mchakato:

1. Punguza ikiwa mfano wa lengo tayari unasaidia maono (isipokuwa inapoonekana kwenye
   orodha ya kulazimishwa `isVisionBridgeForcedModel`).
2. Toa sehemu za picha kupitia `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ambayo inapeleka kwa **mwanachama wa vyombo vya habari
   vilivyounganishwa** `detectMediaParts()` katika `open-sse/utils/mediaParts.ts` —
   chanzo kimoja cha ukweli kinachoshirikiwa na chujio cha ulinganifu wa combo.
   Utoaji umeorodheshwa kwa sehemu za juu za sura
   `replaceImageParts` zinaweza kuunganishwa tena (mkataba wa extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Vichwa vilivyopangwa na
   sura za kiashiria pekee ni vifaa vya chujio vya combo na havitolewa kamwe.
   Punguza ikiwa hakuna iliyoonekana.
3. Pata mipangilio ya wakati wa utekelezaji kupitia `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): funguo mpya za mipangilio ya `modalityBridge*`
   zinashinda; funguo za zamani za `visionBridge*` zinabaki kuwa **kurejelea
   mzunguko mmoja** (dirisha la kurudi nyuma). Punguza kabla ya kusafiri kwa vyombo vya habari wakati
   daraja limezuiliwa.
4. Mchaguzi wa hali (`modalityBridgeVisionMode`, tazama jedwali hapa chini) unamua
   kuhamasisha dhidi ya kuelezea. Kuhamasisha kunarudisha `modifiedPayload` na tu `model`
   iliyobadilishwa, pamoja na meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Njia ya kuelezea: weka picha kwenye `maxImages`, tengeneza ombi linalojua kazi,
   angalia cache ya kuelezea, piga simu kwa mfano wa maono **kwa sambamba**
   (`Promise.allSettled`), na ingiza sehemu za maandiko `[Image N]: <description>` mahali pake. Kuelezea
   kunashindwa kunatoa `null` na sehemu ya picha ya asili inabaki **ilindwe** (#4012) — isipokuwa kwenye njia ya kuelezea ya combo wakati kila
   kuelezea kumeshindwa, ambapo mwelekeo wa juu usio na maono unapata
   `(unavailable — no vision-capable provider connected)` stub badala (#8430).
6. Rudisha `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mchaguzi wa hali (`modalityBridgeVisionMode`)

| Hali       | Kawaida | Tabia                                                                                                                                                                                                                                                                               |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Heuristics za zamani, zisizoguswa (#6640/#7204): mifano zisizo za combo/`auto/` huhamasisha kwa mfano bora wa maono isipokuwa mfano wa asili tayari una akreditivu zinazoweza kutumika (kisha kuelezea); malengo ya combo daima yanaelezea.                                         |
| `describe` |         | Daima elezea — kizuizi cha kuhamasisha kinakosolewa kabisa; mfano uliochaguliwa na mtumiaji daima unajibu.                                                                                                                                                                          |
| `reroute`  |         | Lazimisha kuhamasisha: kizuizi cha mfano wa kudumisha akreditifu kinapita. Kizuizi cha akreditifu cha kuhamasisha-**lengo** bado kinatumika — wakati hakuna lengo la maono linaloweza kutumika, ombi linashuka kuelezea ili picha mbichi zisifikie nyuma ya maandiko pekee (#8430). |

Hali zilizolazimishwa zinakata **kabla** ya heuristics ya auto kuendesha; tabia ya `auto`
ni sawa na ile ya kizuizi cha awali PR-1.

#### Omba kuelezea inayojua kazi (`modalityBridgeVisionTaskAware`)

Kawaida **kweli**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) inaongeza
maandishi ya **ujumbe wa mwisho wa mtumiaji** (uliokatwa hadi herufi 500) kwenye msingi
wa ombi la kuelezea, ikielekeza maelezo kuelekea kile mtumiaji alichouliza
(mfano wa codex-vision-proxy) na kuomba mfano wa maono kuandika maandiko yanayoonekana.
Ikiwa bendera imezimwa — au hakuna maandiko ya mtumiaji — ombi la msingi linatumika bila kubadilishwa.

The describe self-loop's own OpenAI-compatible request (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) daima inahitaji `image_url.detail: "high"` —
bila masharti, kwa kila mpiga simu/mtoa huduma, bila kuzingatia ishara yoyote ya mteja.
Sampling ya undani wa chini inaharibu usahihi wa OCR kwa kazi ya maandiko ya maandiko
ambayo ombi hili linaomba, hivyo wito wa describe mwenyewe daima unahitaji undani wa juu bila kujali kiwango cha undani ambacho ombi la awali lilitumika. Hii
inaathiri tu mwili wa ombi la ndani la describe; haibadilishi jinsi
OmniRoute inavyosambaza `image_url.detail` ya mpiga simu kwenye ombi kuu —
ile default inatumika tofauti, na kwa wateja wa OpenCode waliogunduliwa tu, katika
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Tawi la muundo wa waya la Anthropic la describe self-loop halina uwanja wa `detail`
na halijaathiriwa na default yoyote.

#### Describe output cap (`modalityBridgeVisionMaxChars`)

| Key                            | Default | Range            |
| ------------------------------ | ------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` au 100–50000 |

`0` (default) inamaanisha **hakuna kikomo** — maelezo yanayorejeshwa na
`callVisionModel()` yanapitishwa bila kubadilishwa, yanahifadhi tabia iliyopo. Thamani yoyote katika anuwai ya 100–50000 inakata maelezo kwa
`…` kiambishi kabla ya kuunganishwa tena kama `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` katika `src/lib/guardrails/visionBridge.ts`).
Pandisha hii kwa kazi za OCR zenye undani mzito ambapo mfano wa chini unahitaji
kuandikwa kwa ukamilifu; ipunguze ili kudhibiti matumizi ya token kwenye mifano ya maono yenye mazungumzo.
Sehemu ya dashibodi iko kwenye paneli ya Advanced ya tab ya Vision
(`modality-bridge-max-chars` katika `ModalityBridgeVisionTab.tsx`) na inakata thamani yoyote kati ya 1 na 99 hadi sakafu ya 100 huku ikiacha `0`
iliyowekwa wazi bila kuguswa — `0` ni thamani halali ya Zod kwa njia yake mwenyewe
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), si tu
default ya "haijapangwa".

#### Describe cache (`modalityBridge/bridgeCache.ts`)

Hifadhi ya LRU + TTL katika kumbukumbu kwa matokeo ya describe, inayoshirikiwa kwa mchakato mzima.
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` yenye
ufafanuzi wa urefu wa awali (hakuna migongano ya mipaka ya uwanja). Sehemu ya mfano ni
mfano wa **iliyopangwa** wa bridge, si mfano ambao kwa kweli umejibu —
`callVisionModel` inaweza kurudi nyuma ndani, na kufungia kwa kila jaribio kutavunja hifadhi. Maelezo yaliyoshindwa hayahifadhiwi kamwe. Mipangilio:

| Key                             | Default | Range   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Remote image normalization (self-loop describe/base64 fetch)

Wakati bridge inachukua picha **ya mbali** yenyewe — wito wa ndani wa Anthropic
na mabadiliko ya muundo wa waya wa claude-base64
(`ensureBase64ImagesForClaudeWire`), zote kupitia
`fetchRemoteImageAsDataUri()` katika `visionBridgeHelpers.ts` — URI ya data inayotokana
inapitishwa kupitia `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kabla ya kuingizwa katika ombi la mfano wa maono.
Picha kubwa zinapunguzwa hadi **2048px upande mrefu** (zinazoendana
na kikomo cha upanuzi ambacho OpenAI/Anthropic tayari inatumia upande wa seva), ambayo inapunguza
bytes za kupakia/kuchelewesha bila kubadilisha kile mfano wa maono unaona. Upanuzi
unatumia `sharp`, iliyopakiwa kupitia uagizaji wa dynamic: kwenye jukwaa ambapo binary yake asilia inashindwa kupakia, `normalizeDataUri()` **haijawahi kutupa** — inarudi nyuma
kwa kupitisha bytes za asili, hivyo njia ya describe/mabadiliko ya base64
daima inaendelea kufanya kazi. Bytes zisizo za picha (kuhifadhi ambayo haikurejea picha inayoweza kufafanuliwa) pia zinapitishwa bila kuguswa. Urekebishaji huu unahusishwa na picha ambazo bridge inachukua kwa wito wake mwenyewe — hauwezi kutumika kwa mzigo wa kupitisha wa mpiga simu, kulingana na kanuni ya mabadiliko ya hiari pekee (Kanuni Ngumu #20).

#### Settings schema + migration

Vifunguo vipya vya `modalityBridge*` vinathibitishwa na Zod katika `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio ya `modalityBridgeCache*`, na
kikundi cha `modalityBridgeAudio*` kinachotumiwa na Bridge ya Sauti. Uhamisho
`141_modality_bridge_settings.sql` unakopya thamani za zamani za
`visionBridge*` kwa funguo mpya zinazolingana (idempotent, kamwe haibadilishi
thamani ya `modalityBridge*` iliyowekwa na opereta); funguo za zamani zinaendelea kukubaliwa kama
fallback ya kusoma kwa mzunguko mmoja wa kutolewa.

#### Transparency header + stats

Majibu yaliyobadilishwa na describe yanabeba
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(yaliyojengwa na `buildModalityBridgeHeader()` katika `modalityBridge/bridgeStats.ts`,
yaliyotolewa na `withModalityBridgeHeader()` katika `src/sse/handlers/chatHelpers.ts`).
Maombi yaliyosambazwa hayana **kichwa** — mzigo haujaguzwa na kubadilisha mfano
kunaonekana tayari katika uwanja wa mwili wa majibu `model`.

`GET /api/modality-bridge/stats` (uthibitisho wa usimamizi, kiwango sawa na
`GET /api/settings`) inarudisha hesabu za ndani za kila-modality
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` kwa `vision`, `audio`, na
`video`. `averageLatencyMs` inatumia `latencySamples`, si majaribio yote, kama
denominator yake; operesheni isiyo na wakati haiwezi kutengeneza sampuli ya sifuri-milisani. `bridged` inabaki kuwa jina la nyuma-linalofaa kwa mabadiliko yenye mafanikio; majaribio yaliyoshindwa hayataongeza.
Hesabu zinaweza kurejeshwa kwenye upya wa mchakato kwa muundo
(telemetry, si uhasibu).

#### Dashboard configuration

Ukurasa wa dashibodi uliopewa kipaumbele ni  
`/dashboard/settings/modality-bridge`. Tab za `Vision`, `Audio`, na `Video` zinazoweza kupatikana kwa URL zinahifadhi vigezo vya uchunguzi wakati wa kubadilisha thamani ya `tab`. Tab ya Vision inaonyesha kuwezesha, hali, uchaguzi wa mfano (ikiwemo chaguo la kiotomatiki), kuhamasisha kulingana na kazi, mipaka ya muda wa juu/picha/muda wa maelezo/kumbukumbu,
hesabu za wakati wa kukimbia, na ombi la sampuli lililolindwa. Tab ya Audio pia iko hai: inaonyesha kuwezesha, mchaguzi wa mfano wa STT pekee na Auto, mipaka ya muda wa juu/maklipu,
hesabu za sauti, na mtihani wa sampuli wa `input_audio`. Tab ya Video inafanya kazi: inaripoti hali ya wakati wa kukimbia ya FFmpeg/ffprobe — moja ya hali nne za UI wazi (`unknown` wakati uchunguzi unafanyika au hauwezi kukamilika, `restricted` kwenye mwenyeji wa dashibodi usio wa loopback ambapo uchunguzi unakosolewa upande wa mteja, `unavailable` mara uchunguzi unafanywa na kuthibitishwa kukosekana, au `available` na toleo za FFmpeg/ffprobe) — inahifadhi mipaka ya kuwezesha/model/frame/video/ muda wa juu, inachuja mchaguzi wa mfano kwa mifano inayoweza kuona, na inaonyesha hesabu za video.

Kadi ya zamani ya Vision Bridge chini ya mipangilio ya AI ni kiungo cha ulinganifu kwa ukurasa mpya; sasa haitumii nakala ya pili ya fomu. Watoa Huduma za Media pia wanaunganisha kazi za Image-to-Text na Speech-to-Text kwenye tab zinazolingana za Modality Bridge bila kuondoa uwanja wa majaribio wa Speech-to-Text.

**Kukwepa kuingia kwa mzunguko wa ndani:** wakati wito wa kuelezea unapotembea kupitia mzunguko wa ndani wa OmniRoute `/v1` (mfano wa mtoa huduma usio wa kawaida), ombi ndogo linaweza kutuma `x-omniroute-admission-bypass: internal` na kuthibitishwa kwa akidi ya mzunguko wa ndani — sentinel ya `sk_omniroute` katika hali ya ndani, au funguo za mazingira zilizowekwa na opereta `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (nambari #1350) ili kwamba matumizi ya `REQUIRE_API_KEY=true` yanaweza bado kufanikisha wito wa kuelezea. Kukwepa kunaheshimiwa tu kwa akidi hizo hasa, hivyo wateja wa nje hawawezi kutumia kichwa hicho kukwepa kuingia.

Mipangilio ya zamani inapatikana katika `src/shared/constants/visionBridgeDefaults.ts`; mipangilio mipya ya hali/kazi ya kukumbuka na resolver ya mipangilio inapatikana katika `src/shared/constants/modalityBridgeDefaults.ts`. Guardrail inaonyesha chaguo la `deps` la mjenzi ili majaribio yaweze kuingiza `getSettings` na `callVisionModel` za uwongo.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Inakabili maombi ya mazungumzo yanayobeba sauti kabla ya kufikia lengo ambalo halijulikani kukubali pembejeo za sauti. Kamwe haisambazi ombi la mazungumzo: sehemu za sauti zinatafsiriwa kupitia mwisho wa multipart unaofaa wa OpenAI na mfano wa mazungumzo uliochaguliwa unaendelea na tafsiri za maandiko.

Mchakato:

1. Pata `supportsAudio` kupitia `getResolvedModelCapabilities()`. Metadata ya usajili wa mtoa huduma iliyo wazi inashinda, kisha metadata ya mfano wa kudumu, kisha `modalities_input` iliyosawazishwa. Orodha ya pembejeo iliyotangazwa bila `audio` ni `false`; hakuna ushahidi wa uwezo unabaki `null`. Wote `false` na `null` huamsha daraja la kihafidhina, wakati `true` linakwepa.
2. Pata mipangilio ya `modalityBridgeAudio*` na kutoa sehemu za sauti za juu zinazoweza kuchanganywa kutoka kila ujumbe kupitia detector ya pamoja `detectMediaParts()`. Maumbo ya waya yanayoungwa mkono ni OpenAI `input_audio`, `audio_url`, na `source.media_type: "audio/*"`. Sauti zilizozungushwa zinagundulika kwa ajili ya usafirishaji lakini haziondolewa na njia ya kuchanganya. Kazi inakabiliwa na `modalityBridgeAudioMaxClips`; sehemu za baadaye zinabaki bila kuguswa.
3. Heshimu `provider/model` iliyowekwa, au acha `selectAudioBridgeModel()` ipite `AUDIO_TRANSCRIPTION_PROVIDERS` kwa mpangilio wa orodha thabiti na kuchagua mfano wa kwanza wenye akidi inayofaa ya mtoa huduma.
4. `callAudioTranscription()` inabadilisha sauti ya base64/data-URI kuwa `file` ya multipart, au inashusha `audio_url` ya mbali kupitia ulinzi wa umma pekee na pinning ya DNS na mipaka ya 25 MB. Kisha inatumia POST faili na mfano uliochaguliwa kwa mzunguko wa ndani wa `/v1/audio/transcriptions`, ikithibitishwa na `resolveSelfLoopBearer()`. Njia ya sasa ya tafsiri inafanya utafutaji wa kawaida wa akidi, kushughulikia baridi/mipaka ya kiwango, na usambazaji wa mtoa huduma.
5. Wito wenye mafanikio unabadilisha sehemu zao kuwa `[Audio N]: <transcript>`. Wito zinafanyika kwa `Promise.allSettled`: kushindwa kwa mtu binafsi kunahifadhi sehemu hiyo ya sauti ya awali (mkataba #4012). Ikiwa kila wito unashindwa na lengo linaonekana `supportsAudio === false`, sehemu zinakuwa `[Audio N]: (hazipatikani — hakuna mtoa huduma wa STT aliyeunganishwa)` (mkataba #8430). Kwa lengo lisilojulikana (`null`), matokeo ya kushindwa yote yanabaki bila kuguswa. Lengo lililo thibitishwa la maandiko pekee bila akidi inayofaa ya STT linapata stub hiyo hiyo wazi bila kutoa wito wa mtandao.

Tafsiri zenye mafanikio zinatumia cache ya Modality Bridge LRU/TTL inayotumika kwa mchakato mzima. Funguo inachanganya rejeleo la sauti, lebo ya operesheni ya thabiti ya `audio-transcription`, na mfano wa STT uliochaguliwa; kushindwa hakuhifadhiwi kamwe. Jaribio la sauti linaongeza hesabu za pamoja `bridged`, `cacheHits`, `failures`, na `lastUsedAt`.
Majibu yaliyobadilishwa yana carry `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; maombi yasiyoguswa hayapokei sehemu ya Audio Bridge.

Mipangilio ya wakati wa kukimbia inategemea DB na kuthibitishwa na Zod:

| Funguo                        | Kiwango | Mipaka         |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto au STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

Cache ya pamoja inabaki kudhibitiwa na `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts sehemu za video za kiwango cha juu katika Chat Completions `messages` na Responses
API `input` kabla ya lengo ambalo halijulikani kuwa na msaada wa video wa asili linapoitwa.
Maumbo yanayoungwa mkono ni `input_video`, `video_url`, `video_source`, HTTPS URLs,
na `data:video/*;base64,...` data URIs. Majina ya faili ya kawaida katika maandiko hayachukuliwi
kama video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) inamiliki usafiri wa ombi,
ukaguzi wa uwezo/sera, muungano wa kila ombi, na mzigo wa majibu.
Kazi za kila video — ununuzi, cache ya matokeo yote, kuelezea mfuatano wa fremu
(ambayo inachanganya nakala ya sauti iliyotangazwa na mwitishaji), na metriki za kila jaribio
/kufuta/kusafisha — zimefichwa nyuma ya `processVideoPart` katika
`videoBridgePipeline.ts`, inayoitwa mara moja kwa kila sehemu ya video ndani ya mzunguko wa `preCall`.
Moduli hiyo pia inaelezea mipaka ya bandari wazi `VideoMediaBrokerPort`
(kununua bytes na kutoa fremu zilizochukuliwa), `VideoAudioTranscriptionPort`
(kuchanganya nakala ya sauti iliyotangazwa na mwitishaji na vichwa vya habari vilivyopimwa), na
`VideoDrilldownPort` (umbo la zamani la kuhifadhi ghafi). STT ya uzalishaji na uhifadhi wa fremu
zinaundwa kuzunguka bandari inayofafanua kupitia `createVideoSttAdapter` na
`createVideoDrilldownAdapter`; ya mwisho inatumia mzunguko wa kushiriki wa opaque-handle.

Njia ya ombi ya umma `/v1` kamwe haiagizi au kuanzisha subprocess. Video za mbali
zinapakuliwa chini ya mipaka ya 50 MiB; video za inline za base64 zina
mipaka ya 36 MiB iliyotafsiriwa kwa kila video ili mfano/messages/envelope ya muundo
iweze kubaki ndani ya kikomo cha kuingia cha ombi la JSON cha umma cha 50 MiB. Urefu wa inline
na makadirio ya ukubwa wa decoded yanakaguliwa kabla ya ugawaji. HTTPS inahitajika
katika URL ya mbali ya awali na kila upitishaji, ikitumia ulinzi wa umma pekee wa outbound
na DNS pinning. Bytes kisha hupita mipaka halisi ya ndani ya
`POST /api/modality-bridge/video/extract`. Njia hiyo ni
`LOCAL_ONLY` na `SPAWN_CAPABLE`, inakubali tu ombi lililoidhinishwa la kila mchakato,
la kuaminika, na kamwe halikubali URL, njia ya mfumo wa faili, executable,
au orodha ya hoja. Mchakato wa ukubwa wa mwili wa API na msomaji wa mwili wa
incremental wa handler huteua kikomo cha 50 MiB cha pembejeo za broker. Foleni yake iliyo na mipaka
inafanya uchimbaji mmoja kwa wakati, inaruhusu kazi nne zinazokusubiri, na inakomo pembejeo zinazokusubiri
hadi 100 MiB.

Ndani ya broker, `ffprobe` inasoma faili ya ndani ya kibinafsi; orodha ya muundo
imeondoa muundo wa orodha na wa hati. Kwa kontena za MOV-familia zinazoruhusiwa,
marejeleo ya data ya MOV ya nje yanabaki yamezuiliwa kwa default, na amri iliyowekwa
haiingii ndani yao. Wote `ffprobe` na `ffmpeg` hutumia orodha ya ruhusa ya
protokali ya `file` pekee, nyuzi moja, safu za hoja zilizowekwa, hakuna shell,
na executable zinazotambuliwa kutoka `PATH`. Mipicha iliyounganishwa ya kifuniko si
wagombea wanaoweza kupigwa. Mipango yote inayoweza kupigwa lazima itimize mipaka, na
mipango ya kawaida ya default inPreferred kabla ya chini ya index ya chini inayoweza kubadilishwa.
Video zinakabiliwa na sekunde 600, pixels 8,192 kwa kila kipimo, na
33,554,432 pixels za chanzo. FFmpeg inachukua fremu za JPEG za katikati 1–16, inapunguza
kando ndefu hadi pixels 1,024 bila kupandisha saizi za pembejeo ndogo, na
kamwe haiwezi kupokea URL. Uchukuaji ni `uniform` kwa default. Sera ya hiari
`scene_aware` na ya majaribio `segment_aware` inafanya kupita moja ya ziada
ya FFmpeg juu ya mstream ya ndani iliyothibitishwa, kuchagua alama za wakati za
`showinfo` zilizopangwa, na kurudi kwa uamuzi kwa katikati sawa za kawaida
katika kushindwa kwa detector, muda wa mwisho, matokeo yasiyo sahihi, au seti ya wagombea tupu.
Njia ya segment-aware inagawanya sampuli za katikati kwa uwiano na
vipindi vya scene vilivyothibitishwa; ushahidi wa segment-aware na tabia ya kurudi
imeelezewa hapa chini. Kikomo kigumu cha fremu 16 kinawekwa
baada ya uchaguzi katika sera zote. Wakati ombi la scene-aware lina bajeti ya fremu moja tu,
linatumia katikati ya kawaida ya video kamili au dirisha la umakini na ripoti `policyEffective: uniform`: fremu moja iliyochaguliwa ya scene
haiwezi kuhifadhi pande zote za muda. Mwitishaji anaweza kwa hiari kutoa
dirisha la umakini lenye mipaka (`start`/`end` sekunde); mipaka inashikiliwa kwa muda wa media,
dirisha lililogeuzwa au lisilo na mipaka linakataliwa, na sera zote za uchukuaji
zinatendewa tu ndani ya kipindi kilichosanifiwa. Dirisha linalopatikana
linajumuishwa katika metadata ya uchukuaji na katika prefix ya maelezo yasiyoaminika
ili mifano ya chini iweze kutofautisha excerpt iliyozingatia kutoka kwa muda wote.

Mzingatiaji wa maelezo ya semantiki ni mipangilio tofauti, wazi. Modo ya uchambuzi ya default `full`
inaifadhi ombi la fremu lililopo na kamwe halituma maandiko ya ombi kwa mfano wa kichwa. Katika
modo ya `focused`, daraja linakusanya tu `text`/`input_text` ya hivi karibuni isiyo tupu iliyotolewa na mtumiaji kutoka
konteksti sawa ya Chat au Responses, inaiweka kuwa NFC, inakandamiza wahusika wa kudhibiti na nafasi,
na inakomo kwa alama 500 za Unicode. Matokeo yasiyo na kitu yanarudi kwa ombi la `full` halisi. Kidokezo kinachoweza kutumika
kinahifadhiwa kama JSON katika block maalum ya muktadha wa mtumiaji asiyeaminika na kinaweza tu kuzingatia maelezo yanayoonekana; hakiwezi kubadilisha onyo tofauti dhidi ya kufuata maagizo yanayoonekana
au kusikika katika media. Mzingatiaji wa maandiko kamwe haujifanyii `start`/`end` au kubadilisha
mchambuzi wa muda.

#### FU-07 ushahidi wa sehemu ya muundo

`segment_aware` inatumia kupita moja ya mipaka ya kabla ya uchambuzi juu ya mstream ya ndani iliyothibitishwa. Mnyororo wa chujio wa kudumu kwanza unapanua hadi pixels 320
kubwa, kugundua mabadiliko ya scene na vipindi vilivyoganda, kisha kuchukua sampuli kwa fremu 1 kwa
sekunde kwa blur, luma ya wastani, na habari ya nafasi/muda. Kupita kuna kikomo cha sampuli 600 za muundo, nyuzi moja ya FFmpeg/filter,
orodha sawa ya ruhusa ya protokali na kontena, kikomo cha pembejeo ya mchakato ya 1 MiB,
na sekunde 30 kwa ndani ya muda wa kushiriki wa broker wa kukatisha/kukamilisha. Kamwe
hakikubali amri, chujio, njia, au URL kutoka kwa ombi.

Thamani za muundo ni ushahidi wa sampuli wa kutabirika, si uelewa wa video wa semantiki. Hazihusishi mada, vitendo, maelezo, hotuba, au nia ya mtumiaji. Mipaka ya scene na barafu huunda sehemu; kufunika barafu, blur, mwangaza, maelezo ya nafasi, na mabadiliko ya muda yanashawishi tu jinsi bajeti ya picha 1–16 ilivyopewa. Sehemu iliyo barafu kabisa imewekwa kwenye picha moja, wakati sehemu zisizo na barafu zinashindana kwa bajeti iliyobaki. Wakati mipaka inazidi picha, kufunika kwa muda sawa kunahifadhiwa ili kukata mapema kwa haraka kusiweze kuficha sehemu ndefu inayofuata. Mipaka ya scene ndani ya azimio la uchambuzi la sekunde 1 la mpaka wa barafu inachanganywa.

Filters zinazokosekana, ushahidi usio na umbo/tyupu, kosa la kugundua, au muda wa kabla ya uchambuzi ulio na mipaka unashindwa kufungua kwa sera ya katikati sawa. Kuacha kwa mwito au muda wa broker hakufungui: inamaliza mchakato wa ndani, kuzuia uchimbaji wa picha baadaye, na mti wa muda wa kibinafsi unafutwa katika `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` inazalisha vifaa vya FFmpeg vya kutabirika kwa akiba ya wito wa maelezo baada ya kuondoa, ugawaji wa bajeti ya mwendo mzito, ushahidi wa blur/mwangaza/SI-TI, kukata kwa haraka na mkia mrefu, na uongo wa kupungua taratibu. Inarekodi muda wa ukuta wa kabla ya uchambuzi na, ambapo `/usr/bin/time` inapatikana, CPU ya mtoto na RSS ya juu. Ukaguzi wake wa ubora ni oracles za muundo tu. Ubora wa kweli wa mfano wa maelezo unabaki `HOLD` kwa sababu harness hii haina mwisho ulioidhinishwa au jaji aliye barafu. Akiba za fedha pia zinabaki `HOLD` isipokuwa `--caption-cost-per-call-usd` inatoa makadirio ya wazi ya chaji kwa wito; script haitengenezi matokeo yoyote.

Kila picha imewekwa mipaka ya 4 MiB, picha zote mbichi pamoja hadi 23 MiB, na jibu la broker lililosanifishwa hadi 32 MiB. Katalogi ya muda ya kibinafsi inafutwa katika `finally`. OmniRoute haisambazi FFmpeg na haitakubali njia ya mtendaji maalum. Kabla ya kuweka maelezo, daraja linafanya kupita kwa uhifadhi wa picha kwa njia ya kihafidhina: kila JPEG inapunguzwa hadi buffer ya 16×16 ya grayscale na inalinganishwa tu na picha ya mwisho iliyohifadhiwa. Kwa bajeti ya maelezo iliyohitajika juu ya picha moja, uchimbaji unatoa kundi la wagombea lililo na mipaka la hadi mara mbili ya bajeti hiyo na kamwe zaidi ya picha 16. Kiwango kilichohitajika kinatumika tu baada ya kuondoa, huku wagombea wa kwanza na wa mwisho waliochaguliwa wakihifadhiwa wakati wa kupunguza mwisho wakati bajeti iko angalau mbili. Sera ya `grayscale-16x16-mean-cells-v2` inatumia kubwa ya delta ya luma ya wastani na uwiano wa seli za thumbnail ambazo delta yao iliyosanifishwa ni angalau 0.05. Kiwango cha nakala ni 0.04, kilichochaguliwa kwa utabiri badala ya kufichuliwa kama mipangilio ya wakati wa kukimbia. Ishara hii ya pili ya muktadha wa juu inahifadhi mwendo mdogo na mabadiliko ya maandiko yanayoonekana ambayo kulinganisha kwa wastani pekee kunaweza kuficha. Makosa ya kulinganisha au ya kufasiri yanashindwa kufungua na kuhifadhi kufunika. Metadata ya pato inatenganisha wagombea waliochimbwa, picha zilizotumika kwa mafanikio, na nakala za picha zilizotupwa.

Sehemu ya video iliyoashiriwa kwa wazi inaweza kuomba karatasi ya mawasiliano yenye alama ya muda. Daraja linaunda gridi ya JPEG ya picha 4, 16. Kila seli ya 512-pixel inachoma alama yake ya muda kwenye bendi ya chini yenye muktadha wa juu, wakati alama hizo hizo zinabaki katika metadata ya maandiko kwa ushirikiano wa chini na ukaguzi. JPEG kamili inabaki na mipaka ya 32 MiB. Ikiwa `sharp` haiwezi kufasiri au kuunda gridi, daraja linarudi kwenye picha za JPEG za kibinafsi; kuacha kwa mteja bado kunasambaza kupitia operesheni ya karatasi.

Ushahidi wa kukuza umewekwa kando na microbenchmark ya muundo wa synthetiki. `scripts/perf/video-bridge-contact-sheet-eval.ts` inafafanua harness ya A/B yenye toleo la schema kwa mifano halisi ya maono yanayofaa OpenAI. Inapima tokens zilizoripotiwa na mtoa huduma, ucheleweshaji wa ukuta wa mwisho hadi mwisho (ikiwemo muundo wa karatasi), idadi ya wito wa mfano, na uhifadhi wa ukweli ulioainishwa na orodha. Majibu ya mfano mbichi hayandikwi kwenye ripoti; tu SHA-256 digests na vitambulisho vya ukweli vilivyolingana vinahifadhiwa. Harness hii haina wito wa mtandao au wa mfano wa kulipwa isipokuwa `--execute-real` ipitishwe na `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY` zikiwa zimewekwa. Bila kukimbia hiyo halisi, hukumu yake inayoweza kusomeka na mashine inabaki `HOLD`; vipimo vya mzigo wa synthetiki/idadi ya wito pekee si ushahidi wa kukuza.

`scripts/perf/video-bridge-promotion-eval.ts` tofauti inatumia FU-07 au FU-09 maoni. Kuingia kwa kukuza kunahitaji aina zote nane za hali za synthetiki pamoja na kipande halisi kilichosafishwa, angalau marudio matatu yaliyopimwa kwa kila jukumu na kesi, vipimo kumi vilivyotangazwa, nakala za media/barua/matarajio ya ukweli/mipangilio, vitambulisho vya maoni vya kipekee na mpangilio wa A/B uliohakikishwa. Risiti ya utekelezaji inashikilia digest ya corpus, SHA halisi ya wagombea na marekebisho ya mfano. Vipimo vilivyokosekana au visivyo sahihi vinabaki `HOLD`, ikiwa ni pamoja na CPU zaidi ya sekunde 30, RSS ya juu zaidi ya 512 MiB au kabla ya uchambuzi zaidi ya sekunde 30. Hizi ni mipaka ya kuingia ushahidi, si dhamana mpya ya utekelezaji wa RSS.

FU-07 inahitaji angalau 98% ya uhifadhi wa ubora na ucheleweshaji wa p95 usiozidi 1.2x msingi, pamoja na kuboresha kwa 0.05 ya wastani wa kesi ulio sawa katika wito wa maelezo, au angalau 10% ya chini ya wito wa maelezo baada ya kuondoa. FU-09 inahitaji angalau 0.85 ubora, 95% uhifadhi, 20% kupunguza ucheleweshaji wa p95 na 10% kupunguza tokens. Kupoteza ukweli muhimu, kufuata sindano au matumizi yaliyokosekana kunazuia kukuza. Utekelezaji mmoja hauwezi kukuza chochote: `--previous-report` inathibitisha utekelezaji wawili tofauti, wasioingiliana, wanaofaa mfululizo wa sera/model/revision/corpus sawa. Jaribio la sampuli haliwezi kuthibitisha jaribio la karatasi ya mawasiliano.

Wakusanyaji wanapaswa kuhesabu majibu katika kumbukumbu na kuhifadhi `responseDigest` pamoja na metriki na ufuatiliaji wa uchunguzi, kamwe si maandiko ya majibu. Mtumiaji pia anasoma uchunguzi wa zamani lakini kamwe haakopi maandiko hayo katika ripoti zake. Mojawapo ya `responseDigest` au `rawResponseText` inakubaliwa kwa kila uchunguzi. Orodha ya ruhusa iliyopangwa inabaki tupu ikiwa na `hold` isiyoweza kubadilishwa kama chaguo la msingi. Kuingia inayostahiki inahitaji rejeleo lake la ushahidi, sera, marekebisho ya mfano, SHA halisi ya mgombea, digest ya orodha na vitambulisho viwili tofauti vya kukimbia; muktadha unaopingana unakataliwa. Metadata hizi ni mkataba wa ukaguzi, si uthibitisho kwamba faili iliyorejelewa ina vipimo halisi. Kagua risiti halisi kabla ya kuongeza kuingia yoyote. Kituo cha takwimu za usimamizi na dashibodi ya Video vinatoa hali ya uhakika. Jina la mfano lililowekwa pekee halijathibitisha marekebisho yake au SHA ya mgombea anayekimbia, hivyo dashibodi ya sasa inaripoti `HOLD` badala ya kutumia ustahiki kutoka muktadha mwingine wa utekelezaji. Uchaguzi wa majaribio wazi unabaki tofauti na kukuza; hakuna chaguo la msingi linalobadilishwa kiotomatiki.

Wito wanaweza kuambatanisha safu ya hiari ya `transcript.cues` kwa sehemu ya video inayoungwa mkono wanapokuwa tayari na maandiko yaliyo sawa. Kila kiashiria lazima kibebe `text`, kipindi cha `start`/`end` kilichopangwa ndani ya muda uliochunguzwa, na `source` iliyoorodheshwa (`client`, `embedded`, au `audio-bridge`); `confidence` inakuwa chaguo la msingi `1` na lazima ibaki kati ya `0` na `1`. Viashiria vya nakala halisi vinakandamizwa. OmniRoute kamwe haianzishi uandishi kutoka kwa metadata hii: viashiria vilivyothibitishwa vinakopishwa katika matokeo yaliyoelezewa pamoja na chanzo, uaminifu, na kipindi, na vinatolewa kama uchunguzi usioaminika pamoja na vichwa vya sura. Maandishi yasiyo sahihi, yasiyo na mipaka, au yasiyo na asili yanakataliwa badala ya kuchanganywa katika mkondo wa kichwa. Makanika ya mwili wa ombi ya transcript huweka asili iliyotolewa kuwa `client`, ikiwa ni pamoja na `embedded` au `audio-bridge` zilizojitolea. Ni adapter inayomilikiwa na seva pekee inayoweza kupewa lebo hizo za kuaminika kupitia hoja ya `trustedSource` ya kipekee; uwanja wa JSON wa ombi hauwezi kufikia hoja hiyo. Maandishi ya transcript yanabaki kuwa maudhui yasiyoaminika yanayotokana na vyombo vya habari, bila kujali asili yake, na kamwe hayapaswi kuamua idhini.

Mwanakitu wa hali ya juu anaweza kutoa wimbo wa `audioTranscript` kwa video hiyo hiyo; inachukuliwa kama maandiko yaliyotolewa na mteja, si uthibitisho wa uandishi wa seva. Mshikamano wa fusion unafanya uchunguzi wa kuona na sauti chini ya tarehe moja na ishara ya kuacha, unawaweka kwenye muda wa kawaida, unakandamiza nakala halisi, na unaripoti matokeo ya sehemu wakati upande mmoja tu unafanikiwa. `audioTranscript` isiyo sahihi inashuka hadi matokeo hayo ya sehemu — maelezo ya kuona yanahifadhiwa na tawi la sauti linaandika msimbo wa kushindwa ulio safishwa — badala ya kufeli video nzima. Kila tawi la upatikanaji, bendera ya sehemu, na misimbo ya kushindwa iliyosafishwa inahifadhiwa katika matokeo yaliyoelezewa, katika metadata ya kingo (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), katika metadata ya cache ya matokeo, na katika hesabu za fusion za daraja. Njia ya msingi ya Video Bridge haianzishi sauti hadi maandiko au kupakua nakala nyingine ya vyombo vya habari; bila wimbo huo wa wazi, inabaki kuwa video pekee.

**Hifadhi ya transcript (#12150 P1).** Hii inatumika kiotomatiki kila wakati Video Bridge (ambayo ni hiari) inapotunga kiashiria cha transcript — hakuna bendera tofauti ya uhifadhi. Wakati ombi linapotunga kiashiria chochote cha transcript (`transcript` iliyotangazwa na mwito au `audioTranscript` iliyounganishwa), kingo inakadiria kuwa `videoBridgeObserved` na inatoa kivuli kilichofichwa cha maelezo ya video — uwasilishaji sawa ambapo kila mwili wa kiashiria wa maandiko hufichwa na `[redacted-video-transcript]`, iliyojengwa kwa kubadilisha uwanja wa kiashiria wa muundo kabla ya mfuatano wa maandiko kukusanywa (kamwe kwa kuchambua maandiko yaliyopunguzika, hivyo hakuna maudhui ya kiashiria — ya uhasama au ya kawaida, ikiwa ni pamoja na miili inayobeba `]` kama vile `[inaudible]`/`[music]` — inaweza kuishi). Mwili wa ombi wa kumbukumbu uliohifadhiwa unabadilisha kila sehemu ya maandiko inayotokana na video kwa kivuli hicho kilichofichwa, kilicholingana na usawa wa maudhui; kiunganishi cha `fullText` kinarejeshwa kutoka kwa mzigo wa kingo wa kabla ya wito, hivyo mechi bado inafanikiwa baada ya kingo za mfuatano baadaye (maskers za PII na akidi, vipaumbele 10/95) kuandika maandiko ya maelezo mahali na baada ya mfumo wa kuamuru/kuhamasisha/kuchanganya kumbukumbu kubadilisha safu ya ujumbe. Mwili uliotumwa juu kwa mfano haujabadilishwa. Ombi lililoshuhudiwa pia halijaza Kumbukumbu ya kudumu (kila uondoaji wa ombi na majibu unakosolewa), hivyo jibu la mfano haliwezi kurudi maandiko ya transcript katika Kumbukumbu.

**Sehemu za video ghafi (#12430).** Wakati daraja linaanzishwa na msaada wa video wa asili haujulikani au haupo, sehemu zilizofafanuliwa za `transcript`/`audioTranscript` pia zinaanzisha `videoBridgeObserved`, hata baada ya kushindwa kwa maelezo au kikomo cha `maxVideos`. `null` na nyuzi tupu zinahesabiwa; sehemu zilizokosekana na metadata zisizo za video hazihesabiwi. Nakala zilizohifadhiwa zinasafisha sehemu hizi au kuacha ombi, na caches/Kumbukumbu zinakosolewa. Mzigo wa mtoa huduma unabaki bila kubadilishwa.

Nakala za ziada zilizohifadhiwa zinatumia ishara sawa ya ombi lililoshuhudiwa. Snapshot ya ombi la mteja kabla ya kingo, ombi lililoko kwenye kumbukumbu, na kumbukumbu ya ombi lililokataliwa mapema zinabadilisha kimuundo sehemu za transcript katika sehemu za video; maelezo ya maandiko yaliyoundwa na hatua za pipeline na uhamasishaji wa muktadha yanafichwa katika sink ya mwili wa ombi lililohifadhiwa. Alama ya `video_content_removed` iliyohifadhiwa inafanya kuendelea kwa `previous_response_id` kufeli kufungwa badala ya kujenga maandiko ambayo yalitengwa kwa makusudi. Ikiwa ombi lililoshuhudiwa linapoteza kivuli chake cha kuficha kila sehemu kabla ya kuandika, au hata mmoja wa vivuli kadhaa vya video unashindwa kulinganisha baada ya mabadiliko ya ombi baadaye, mwili wa ombi uliohifadhiwa unakosolewa kabisa badala ya kuhifadhi transcript iliyofichwa kwa sehemu.

Kwa ombi lililoshuhudiwa, jibu la mfano linaweza kunukuu sehemu yoyote ya
kanda bila mipaka ya ishara iliyopangwa. Hivyo, `responseBody` ya kumbukumbu ya simu iliyohifadhiwa inabadilishwa na alama ya kutokuwepo; kipande cha maelezo ya mchakato (ambacho kinaweza kujumuisha miili ya juu/teknolojia na vipande vya mtiririko) hakihifadhiwi. Kumbukumbu za maana, idempotency, na reasoning-replay zinakwepa kusoma na kuandika kwa ombi hilo. Ombi la mtoa huduma na jibu linaloonekana kwa mteja yanabaki bila mabadiliko. Bytes za awali za keepalive zinatolewa kutoka kwenye buffer ya muda wakati kipande cha maelezo kinapuuziliwa mbali. Onyo la EventStream la Kiro lililo na makosa lina ripoti tu idadi ya bytes za mzigo, kamwe si maudhui yake au makosa ya mbinu ya JSON.

Hii haisemi kwamba kila uchunguzi wa mtoa huduma/plugin usiohusiana umekaguliwa; upana wa uhifadhi wa retained-sink unafuatiliwa katika #11658.

Mzunguko wa ndani wa `/api/modality-bridge/video/drilldown` ni msingi wa cache tofauti,
uliothibitishwa kwa loopback/token. Kila operesheni pia inahitaji ID ya msingi isiyo na muundo. Kabla ya mwito wa uzalishaji kuwezeshwa, inapaswa kupata ID hiyo kutoka kwa mpangaji aliyethibitishwa na kamwe haipaswi kupeleka thamani iliyochaguliwa na mteja. Funguo za cache zinabinda msingi huo kwa ID za kikao na rejeleo la video, kuhifadhi tu funguo zao zilizotokana na SHA-256, na kuzingatia kusoma na kufuta kwa msingi huo. Cache inahifadhi kwa kiwango cha juu cha picha 16 za JPEG zilizotokana kwa kila ingizo, inaziondoa baada ya dakika kumi, na inasaidia kusoma `start`/`end` zilizo na mipaka au kufuta kikao wazi.

Kila msingi umewekwa mipaka ya ingizo 16 na 64 MiB ya data ya JPEG isiyo na muundo. Mipaka hiyo haitegemei dari ya kimataifa ya ingizo 64/256 MiB: shinikizo la quota ya msingi linatoa tu ingizo la msingi lililotumika kidogo zaidi kabla ya kufikiriwa kwa kufutwa kwa LRU ya kimataifa. Ingizo zilizokwisha muda zinatolewa kutoka kwa hesabu ya msingi na ya kimataifa kwenye shughuli za cache, wakati kufutwa na kushindwa kwa uthibitisho hakuhifadhi kubadilisha sehemu.

Cache inakataa Base64 zisizo za muundo, padding nyingi, vyombo vya habari visivyo vya JPEG, JPEG zenye makosa au zilizokatwa, na JPEG zinazozalisha onyo wakati wa kufungua picha nzima `sharp` kwa mipaka. Inarekodisha kila picha iliyokubaliwa kama JPEG isiyo na muundo, inapata upana na urefu kutoka kwa bytes zilizofunguliwa badala ya kuamini mashamba ya mwito, na inatupa bytes zozote za polyglot zilizobaki badala ya kuzihifadhi. Ni buffer ya compressed canonical yenye mipaka pekee inayotozwa kwa quota zote. Kiwango cha waya cha JSON kinajumuisha ziada ya Base64 kwa dari ya 32 MiB ya ingizo lililofunguliwa. Kila
kumbukumbu iliyohifadhiwa inaandika muundo/ufafanuzi wa JPEG iliyothibitishwa, sera ya sampuli,
toleo la derivation, wakati wa kuunda, hash ya maudhui iliyohesabiwa na seva, na hash ya rejeleo la mzazi pamoja na hash ya maudhui ya mzazi ya mwito wa kuaminika. Kufutwa kunakaguliwa kati ya awamu za asynchronous decode/hash kabla ya kuhamasisha cache kwa atomiki.

Mzalishaji wa uzalishaji unatumia tena picha za broker zilizotokana tayari tu baada ya uchambuzi wa kuona kufanikiwa, bila kupakua/kutoa video nyingine. Inahitaji operator `modalityBridgeVideoDrilldownEnabled=true`, kwa ukali wa sehemu `drilldown: true`, na ID ya rekodi ya API-key iliyothibitishwa. Thamani za msingi/kikao zilizotangazwa na mteja kamwe hazianzishi umiliki. Bila masharti yote matatu haifanyi hash, kubadilisha ukubwa au kuhifadhi picha za ziada. Kushindwa kwa uhifadhi kunahifadhi jibu la kuona linaloweza kutumika. Maombi yaliyokubaliwa yanakwepa cache ya matokeo ya video nzima hivyo matokeo yaliyohifadhiwa kamwe hayarejei handles.

Majibu ya JSON na SSE yenye mafanikio yanaonyesha kwa kiwango cha juu cha handles nne zisizo na muundo katika kichwa cha `x-omniroute-video-drilldown` kilichowekwa mipaka. Misingi ya kivinjari iliyoidhinishwa inaweza kusoma kichwa hicho bila kupanua sera ya asili ya CORS. Handles mpya zinatumia `v1.<32-byte random base64url token>`, na rejista inahifadhi tu
hash zao za SHA-256. Msomaji/parser wa kichwa pia unakubali token za zamani za 64-hex. Mtumiaji wa umma aliyethibitishwa ni
`GET /api/v1/video-bridge/drilldown?handle=...`, inayozuiliwa kwa uhuru na
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Uthibitisho wa wazi wa uongo unafuta
upatikanaji hata wakati `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
fallback imewezeshwa. Uhifadhi wa uzalishaji una fallback sawa ya zamani
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Zote mbili zina default off.

Mtumiaji anapata umiliki kutoka kwa funguo iliyothibitishwa, anatumia sera ya funguo, na
anarudisha 404 sawa kwa handles zisizojulikana, zilizokwisha muda na za funguo nyingine. Inakubali
`variant=preview|standard|detail` (ukubwa wa juu wa JPEG 320/640/1280, kamwe haupandishwi),
`limit=1..8` (au alias ya zamani `frames`, kamwe si zote mbili), `page` yenye msingi sifuri, na sekunde za kuzingatia za hiari `start`/`end`. Funguo za
maswali zinazojirudia na madirisha ya kuzingatia yaliyogeuzwa yanakataliwa. Kila toleo lililorejeshwa lina hash ya maudhui yake halisi na metadata ya ufafanuzi halisi, iliyounganishwa na chanzo kilichohifadhiwa. Mabadiliko yanatokana wakati wa kusoma badala ya kuhifadhi kama nakala za ziada zilizohifadhiwa. Jibu la JSON, ikiwa ni pamoja na Base64/envelope, limewekwa mipaka kwa 32 MiB; ukurasa mkubwa unarudisha 413 na mteja lazima aombe picha chache. Kusoma kunakagua kufutwa karibu na kila kubadilisha ukubwa na kuangalia tena uhalali wa handle kabla ya kurudisha. `DELETE` na mmiliki ni idempotent; kufutwa au kuisha kwa TTL kunatoa chanzo kilichohifadhiwa na hesabu ya matumizi.

Hifadhi ya pamoja ni ya ndani ya mchakato: handles zinakoma wakati wa kuanzisha upya na hazihamishwi kati ya michakato huru ya OmniRoute. Takwimu za usimamizi zinaonyesha sera ya uhifadhi/mbali inayofanya kazi na kujumlisha tu ingizo/bytes zilizohifadhiwa, kamwe si vyombo vya habari, rejeleo,
IDs za msingi au handles. Paneli ya mipangilio ya Video inaonyesha thamani hizo na inaweza kuhifadhi
switches za consent zote mbili. Hati hii ya utekelezaji si uthibitisho wa kutekeleza au kukuza; kukubaliwa kwa mfano wa kweli kunafuatiliwa tofauti.

Frames zinapewa vichwa kwa mpangilio na mfano wa Video uliowekwa. Mabadiliko ya Video yasiyo na maudhui yanarithi mipangilio ya Vision; ikiwa zote ni tupu, auto-router ya Vision inachagua mfano unaoweza kuona. Vichwa vilivyofanikiwa vinachukua sehemu ya awali na kuweka `[Video description:` kama prefiksi ambayo pia inaashiria maandiko kama uchunguzi usioaminika wa vyombo vya habari na inawaambia mifano ya chini wasifuatilie maagizo yaliyopatikana kwenye vyombo vya habari. Funguo za cache za vichwa vya fremu zinajumuisha bytes za JPEG, ombi, muda, na mfano unaofaa; ni vichwa pekee vilivyofanikiwa vinavyohifadhiwa. Kichwa cha cache kinahifadhi mfano halisi wa mtengenezaji aliyefanikiwa, ikiwa ni pamoja na mfano wa akiba; daraja lina ripoti `mixed` wakati fremu tofauti zimetengenezwa na mifano tofauti. Hit ya cache inatumia utambulisho wa mtengenezaji badala ya kuupa jina jipya kama mpango wa urambazaji ulioombwa. Cache ya matokeo ya video nzima ina funguo kwenye kila ingizo linalobadilisha matokeo — ombi, mfano unaofaa, sera ya sampuli, idadi ya fremu, hali ya uchambuzi wa semantiki, alama ya SHA-256 ya kidokezo cha kawaida, dirisha la makini, `transcript`, `audioTranscript`, na bendera ya contact-sheet — hivyo kubadilisha yoyote ya vipimo hivyo ni kupoteza cache, kamwe sio matumizi ya zamani. Toleo la sera ya kuondoa picha za kurudi nyuma, kigezo, na idadi ya fremu za wagombea zilizopangwa pia ni wazi katika funguo za cache ya matokeo na metadata; hivyo, mabadiliko ya sera hayawezi kutumia maelezo ya zamani ya video nzima. Metadata ya cache ya matokeo v4 inahifadhi hali na alama, kamwe sio kazi halisi ya mtumiaji. Metadata ya guardrail inaripoti hali zote za uchambuzi zilizohitajika na zinazofaa; hali ya `focused` iliyohitajika bila maandiko ya mtumiaji yanayoweza kutumika inaripotiwa kama kwa ufanisi `full`.

Guardrail inatoa kila sehemu ya video inayoungwa mkono lakini inaelezea zaidi ya `modalityBridgeVideoMaxVideos`. Kwa lengo lililo thibitishwa kuwa `supportsVideo === false`, video zilizoshindwa na zile zilizopitiliza mipaka zinakuwa alama za maandiko salama ili hakuna video halisi inayosalia. Wakati uwezo haujulikani, sehemu hizo zinabaki bila kuguswa. Malengo yenye `supportsVideo === true` yanapita daraja. Ishara ya kuacha ombi la mteja inasambazwa kupitia upakuaji, foleni ya broker, michakato ya chini, na simu za vichwa; kuacha kunasimama kati ya video na kamwe hakufeli kufungua kwa vyombo vya habari halisi.

Mipangilio ya wakati wa kukimbia inategemea DB na kuthibitishwa na Zod:

| Funguo                              | Kiwango     | Mipaka / tabia                                                                                           |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Muda wa kukimbia wa hiari, kujiunga                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` inahifadhi vichwa vya jumla; `focused` inatumia muktadha wa mtumiaji wa hivi karibuni usioaminika |
| `modalityBridgeVideoModel`          | `""`        | Rithi mfano wa Vision Bridge                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, au `segment_aware` ya uwiano; kushindwa kwa gundua kunarudi kwenye `uniform`   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                           |

Thamani za zamani za muda wa Video zilizohifadhiwa juu ya sekunde 120 zinakandamizwa hadi tarehe ya mwisho ya broker; maandiko mapya juu ya kikomo hicho yanakataliwa. `GET /api/modality-bridge/video/runtime` inahitaji eneo la loopback lililothibitishwa kabla ya uthibitishaji au uchunguzi wa wakati wa kukimbia, kisha inahitaji uthibitisho wa usimamizi. Inarudisha tu `available`, toleo la FFmpeg/ffprobe lililosafishwa, na sababu iliyowekwa wakati wa kukimbia haipatikani. Kituo cha ndani cha uchimbaji sio API ya kupakia ya umma: kushindwa kwa foleni kunarudisha `503` pamoja na `Retry-After`, kutenganisha kwa mpiga simu kunarudisha `499`, na tarehe ya mwisho iliyowekwa ya broker inarudisha `504`. Majibu yaliyobadilishwa yanaongeza `video->text;model=<visionModel>;parts=<videos>` kwenye kichwa cha kati `x-omniroute-modality-bridge` bila kuondoa sehemu za Vision au Audio.

### PII Masker (`piiMasker.ts`)

Inafanya kazi kwenye **masharti** yote mawili.

- **`preCall`** inakloni mzigo, inatembea `system`, `messages`, `input`, na `prompt` (ikiwemo vitu vya maandiko safi), na inatumia `processPII()` (kutoka `@/shared/utils/inputSanitizer`) kwenye maeneo ya maandiko `content`/`text`. Wakati `PII_REDACTION_ENABLED=true`, PII iliyogunduliwa inafichwa katika mzigo wa nje. Hii haitegemei `INPUT_SANITIZER_MODE` (ambayo inasimamia sera ya kuingiza ombi). Wakati kufichwa kumekataliwa, simu inarekodi hesabu za kugundua bila kuandika tena maudhui.
- **`postCall`** inakloni kwa undani jibu, inafanya kazi `sanitizePIIResponse()` pamoja na masker ya muundo wa Responses-API (`maskResponsesOutput` — inashughulikia `output_text` na `output[].content[].text`). Ikiwa kufichwa kutatokea, jibu lililobadilishwa linachukua nafasi ya la awali.

Guardrail kamwe haizuizi; inachora tu (`meta.detections`, `meta.redacted`) au inarekebisha.

### Prompt Injection (`promptInjection.ts`)

Inagundua muundo wa uadui katika maudhui yaliyotolewa na mtumiaji na inatekeleza sera iliyowekwa. Tabia inaendeshwa na mabadiliko ya mazingira na chaguzi za mjenzi:

| Mipangilio         | Env var                                                                                               | Kawaida | Athari                                                                                                                                                                                        |
| ------------------ | ----------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Iliyoanzishwa      | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Wakati `false`, guardrail inakata.                                                                                                                                                            |
| Hali               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Sera ya kuingiza: `block`, `warn`, au `log`. (`redact` inakubaliwa kwa ajili ya urithi lakini haisafishi maandiko ya kuingiza; ombi la PII rewrite linadhibitiwa na `PII_REDACTION_ENABLED`.) |
| Kiwango cha kuzuia | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Ukali wa chini unaohitajika kuzuia. Kati ni ya kuangalia tu kwa kawaida.                                                                                                                      |

**Kipaumbele cha Hali** (`getMode`): mwitishaji `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashibodi → Mipangilio →
Bendera za Kipengele) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Hivyo, urekebishaji wa dashibodi unashinda juu ya env vars, hivyo UI ya Bendera za Kipengele inasimamia guard inayofanya kazi moja kwa moja (hakuna upya). Usomaji wa DB ni wa usalama:
ikiwa kuna kosa, guard inarudi kwenye tabia ya msingi ya env, na wakati hakuna
urekebishaji ulioanzishwa tabia ni sawa na ufumbuzi wa env pekee.

Vyanzo vya Ugunduzi:

1. `sanitizeRequest()` kutoka `@/shared/utils/inputSanitizer` (mchunguzi wa pamoja
   set inayotumika mahali pengine kwenye pipeline).
2. `DEFAULT_GUARD_PATTERNS` iliyojengwa ndani (sasa `system_override_inline` na
   `markdown_system_block`, zote zikiwa na ukali `high`).
3. `customPatterns` za hiari zinazopitishwa kupitia chaguzi za mjenzi (nyuzi, regex,
   au `{ name, pattern, severity }` rekodi).

Wakati `mode === "block"` **na** angalau ugunduzi mmoja unakidhi kiwango
cha ukali, `preCall` inarudisha `{ block: true, message: "Ombi limekataliwa:
maudhui ya kushuku yamegundulika" }`. Katika hali za `warn`/`log` guardrail inaandika lakini
inaruhusu wito. Msaada wa pamoja `evaluatePromptInjection()` pia unasafirishwa
kwa wito wanaohitaji kutathmini maelekezo bila kupitia kwenye orodha.

**Scan bound (v3.8.20):** mchunguzi anachunguza tu **KB 16 za kwanza** za
maandishi ya pamoja ya maelekezo — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) katika
`src/shared/utils/inputSanitizer.ts`. Wote `detectInjection()` na
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` kabla ya kuendesha
mzunguko wa mfano. Maelekezo ya kuingiza yako karibu na juu ya ingizo, hivyo hii
inasimamisha regex CPU/GC kwenye mzigo wa multi-hundred-KB bila kudhoofisha ugunduzi (cf.
#3932, #4041).

### Mshughulikiaji wa Akida (`credentialMasker.ts`)

Inafanya kazi kwenye **hatua zote** mbili, ya mwisho katika mnyororo wa kawaida (kipaumbele `95`). Inasafisha
mifumo ya API-key / token ya siri inayojulikana kutoka kwa mzigo wa nje (maudhui
ya ujumbe, hoja za wito wa zana, matokeo ya zana) **na** jibu la mtoa huduma, hivyo
akida iliyowekwa kwenye maelekezo (au iliyorejelewa na matokeo ya zana) haiwezi kuvuja
kwa mtoa huduma wa juu au kurudi kwa mteja.

- **Chaguo tu**, kanuni sawa na uondoaji wa PII (Sheria Ngumu #20-iliyo karibu):
  imezimwa isipokuwa `settings.credentialRedactionEnabled === true` **au**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ikiwa imezimwa, guardrail ni no-op —
  haitawahi kuzuia na haitawahi kuandika upya.
- `redactCredentials()` inatembea kwenye mti mzima wa mzigo/jibu (`walkValue()`,
  salama ya prototype-pollution, salama ya mzunguko kupitia `WeakSet`) na inabadilisha mechi na
  nafasi ya `[REDACTED:<type>]`, ikikopi tu matawi ambayo kwa kweli
  yamebadilika.
- `CREDENTIAL_PATTERNS` inashughulikia funguo za mtoa LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens za VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), funguo za malipo (Stripe, Square), funguo za wingu
  (AWS access key, Twilio, SendGrid, Mailgun), funguo za kibinafsi / JWTs,
  nyuzi za muunganisho zenye akida (`mongodb://user:pass@...`, nk.), na
  mfano wa jumla wa kichwa `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Funguo za umbo la kichwa (`authorization`, `x-api-key`, `api-key`,
  `apikey`) zinarekebishwa kimuundo (thamani tu, mpango wa awali kama
  `Bearer `/`Basic ` inahifadhiwa) badala ya kupitia regex ya maandiko ya jumla.
- Guardrail haitawahi kuzuia; inarekebisha tu (`modifiedPayload` /
  `modifiedResponse`) na kuandika maelezo (`meta.credentialsRedacted`, `meta.count`).

Ulinzi wa kurudi nyuma: `tests/unit/credential-masker-guardrail.test.ts`.

## Mkataba wa Msingi (`base.ts`)

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
  block?: boolean; // true husitisha mnyororo mara moja
  message?: string; // huonyeshwa wakati wa kuzuia
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // hurejeshwa na preCall ili kuandika upya ombi
  modifiedResponse?: TValue; // hurejeshwa na postCall ili kuandika upya jibu
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

Kizuizi huashiria "hakuna mabadiliko" kwa kurejesha mojawapo ya `void`, `{}`, au
`{ block: false }`. Kurejesha `modifiedPayload`/`modifiedResponse` hubadilisha
thamani inayopita kwenye mnyororo kwenda kwenye vizuizi vinavyofuata.
`signal?: AbortSignal` hubeba mzunguko wa maisha wa mpigaji hadi kwenye vizuizi. Kughairi ombi ni hali maalumu ya kimakusudi ya kuendelea licha ya hitilafu: madaraja ya midia husimamisha kazi na kufanya usafishaji bila kurejesha midia ghafi kwa lengo linalojulikana kuwa halitumii muundo huo.

## Sajili (`registry.ts`)

`guardrailRegistry` ya singleton hutoa:

- `register(guardrail)` — huongeza kizuizi (au kukibadilisha kulingana na jina lililosawazishwa) na
  kupanga upya kwa `priority` ya kupanda.
- `clear()` / `list()` — zana saidizi za usimamizi.
- `runPreCallHooks(payload, context)` — hupitia vizuizi amilifu, hupitisha
  payload kupitia `modifiedPayload`, na kusimama inapokutana na `block: true` ya kwanza.
- `runPostCallHooks(response, context)` — mtiririko huohuo upande wa jibu.
- `resetGuardrailsForTests({ registerDefaults })` — hufuta hali na kwa hiari
  kusajili upya chaguo-msingi ili kutenga majaribio kwa usafi.

Viendeshaji vyote viwili hurejesha `{ blocked, payload|response, results, guardrail?, message? }`
ambapo `results` ni safu ya rekodi za `GuardrailExecutionResult` zinazojumuisha
sehemu za `blocked`, `skipped`, `modified`, `error`, na `meta` kwa kila kizuizi,
ambazo ni muhimu kwa ufuatiliaji.

### Kuzima Vizuizi kwa Kila Ombi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` hukusanya orodha
isiyorudiwa ya majina ya vizuizi ambavyo vinapaswa kurukwa kwa ombi la sasa.
Vyanzo (vyote ni vya hiari, vyote vinaunganishwa):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` katika mwili wa ombi (kiwango cha juu)
- `metadata.disabledGuardrails` katika mwili wa ombi
- Kichwa `x-omniroute-disabled-guardrails` (au cha zamani
  `x-disabled-guardrails`)

Thamani zinaweza kuwa safu za mifuatano au mfuatano uliotenganishwa kwa koma; majina
husawazishwa kuwa herufi ndogo za kebab-case (`pii_masker` → `pii-masker`). Tokeo
hupitishwa kupitia `context.disabledGuardrails` hadi kwenye sajili, ambayo huruka
vizuizi vinavyolingana (`skipped: true` katika `results`).

## Mpangilio wa Utekelezaji

Kwa kila ombi linalopitia `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` huunda orodha ya kurukwa kutokana na ufunguo wa API, mwili wa ombi,
   na vichwa.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` huendesha vizuizi kwa mpangilio wa kipaumbele
   kuanzia cha chini kwenda juu:
   - Vizuizi vilivyozimwa hurekodiwa kama `skipped`.
   - `preCall` ya kila kizuizi inaweza kuandika upya data ya ombi kupitia `modifiedPayload`.
   - `block: true` ya kwanza husitisha mfuatano mara moja na kishughulikiaji hurejesha
     jibu la kukataliwa na kizuizi.
3. Data ya ombi (ambayo huenda imeandikwa upya) hupelekwa kwenye uelekezaji wa mchanganyiko na
   utumaji kwa huduma ya juu.
4. Baada ya jibu kuundwa, `guardrailRegistry.runPostCallHooks(...)`
   huendesha mfuatano huo huo kwenye jibu. `block: true` hapa huondoa jibu la
   huduma ya juu.

Vizuizi vinavyotupa hitilafu hurekodiwa kwa `error: <message>` na kuandikwa kwenye kumbukumbu kupitia
`logger.warn`, lakini mfuatano huendelea — kwa muundo, mfumo huruhusu ombi kuendelea hitilafu ikitokea.

## Usanidi

Vigeu vya mazingira vinavyosomwa na vizuizi vilivyojengewa ndani:

| Kigeu                                 | Kinachokitumia            | Athari                                                                                                                                     |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Weka `false` ili kuzima utambuzi kabisa.                                                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Sera ya udungaji: `warn`, `block`, au `log`. Thamani ya zamani `redact` haiandiki upya maandishi ya udungaji.                              |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Hali ya kizuizi cha udungaji; pia ni alama ya kipengele katika DB ambayo **hupuuza na kuchukua nafasi ya** vigeu vya mazingira (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Kiwango cha chini cha ukali kinachokataliwa na `MODE=block`: `high` (chaguo-msingi), `medium`, au `low`.                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Jina mbadala la zamani la `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Ikiwa `true`, PII katika ombi hufichwa (bila kutegemea hali ya udungaji).                                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Hudhibiti tabia ya kifichaji kwenye upande wa jibu.                                                                                        |

Vizuizi vya Modality Bridge husoma usanidi wa wakati wa utekelezaji kutoka kwenye hifadhi ya mipangilio
inayotegemea DB (`getSettings()`), si vigeu vya mazingira. Funguo kuu za Vision ni
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. Funguo za zamani za
`visionBridge*` zinakubaliwa tu kama mbadala wa usomaji wa mzunguko mmoja ulioandikwa
kwenye nyaraka; uandishi kutoka dashibodi hutumia funguo kuu. Chaguo-msingi na kitatuzi cha mbadala
vinapatikana katika `src/shared/constants/modalityBridgeDefaults.ts`, huku konstanti za zamani
zikihifadhiwa katika `src/shared/constants/visionBridgeDefaults.ts`.

Sauti hutumia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, pamoja na mipangilio ya pamoja ya
`modalityBridgeCache*`. Sauti haina mbadala wa funguo za zamani kwa sababu funguo hizi
zilianzishwa pamoja na skima ya Modality Bridge.

Video hutumia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, pamoja na mipangilio ya pamoja ya `modalityBridgeCache*`.
Imezimwa kwa chaguo-msingi kwa sababu FFmpeg/ffprobe ni vitegemezi vya hiari vya
uendeshaji, na uundaji wa maelezo ya fremu huongeza muda wa kusubiri na gharama ya modeli.

## Vizuizi Maalum

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

Hatua:

1. Unda `src/lib/guardrails/myGuardrail.ts` inayopanua `BaseGuardrail`.
2. Tekeleza `preCall` na/au `postCall`.
3. Ama isajili wakati wa kuingiza (isukume kutoka `registerDefaultGuardrails`) au
   uite `guardrailRegistry.register(...)` wakati wa utekelezaji — sajili hubadilisha
   kizuizi chochote cha awali chenye jina lilelile lililosawazishwa.
4. Ongeza majaribio chini ya `tests/unit/` (mifano iliyopo:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Majaribio

Tumia `resetGuardrailsForTests()` kati ya majaribio ili kuanza kutoka hali inayojulikana.
Pitisha `{ registerDefaults: false }` ili kuanza na sajili tupu na
kusajili tu vizuizi vinavyojaribiwa. Vision Bridge inakubali uingizaji wa vitegemezi
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge hutoa sehemu
sawa za mipangilio, uwezo, uteuzi wa modeli ya STT, ukaguzi wa vitambulisho,
na unukuzi. Kwa hivyo, majaribio yanaweza kutekeleza mitiririko yote miwili bila ufikiaji wa DB
au mtandao.

## Angalia Pia

- `src/lib/guardrails/` — utekelezaji
- `src/shared/utils/inputSanitizer.ts` — kigunduzi kinachoshirikiwa kinachowezesha
  ugunduzi wa udukuzi wa prompt na ufichaji wa PII
- `src/shared/constants/visionBridgeDefaults.ts` — chaguomsingi za Vision Bridge na
  orodha ya modeli zinazolazimishwa kutumia bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — chaguomsingi za pamoja za wakati wa utekelezaji za Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — safu huru (kivunja mzunguko, vipindi vya kusubiri)
- `docs/reference/ENVIRONMENT.md` — rejeleo kamili la vigeu vya mazingira

## Ufikivu wa njia wa kizuizi cha udukuzi na red-team (Awamu ya 8 · Sehemu D)

Kizuizi cha udukuzi (`createInjectionGuard` / `withInjectionGuard`) kinashughulikia njia zote
zinazokubali prompt za watumiaji. Kinaheshimu `INJECTION_GUARD_MODE` (chaguomsingi `warn` = kumbukumbu pekee;
`block` = hurudisha HTTP 400 `SECURITY_001`).

| Aina                 | Njia                                                                                                                                                 | Hali chaguomsingi |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Maandishi (zilizopo) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn              |
| Uzalishaji           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn              |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn              |

Uchimbaji wa maandishi (`extractMessageContents`) hushughulikia `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kila usiku, `nightly-llm-security.yml`):** promptfoo huthibitisha kuwa kila njia huzuia
mkusanyiko wa OWASP-LLM katika `INJECTION_GUARD_MODE=block`; garak huendesha uchunguzi (huruka bila siri).
`moderations` imejumuishwa kwa ajili ya uthabiti — waendeshaji katika hali ya kuzuia wanaweza kuiondoa kupitia
`resolveDisabledGuardrails`.

Mtiririko wa kazi wa kila usiku (`.github/workflows/nightly-llm-security.yml`, cron + uanzishaji wa
mkono) una kazi mbili:

- **`promptfoo-guard` (inayozuia)** — huendesha `promptfoo eval -c promptfooconfig.yaml`
  pamoja na `INJECTION_GUARD_MODE=block`. Kila tukio hasidi (k.m. "puuza
  maagizo yote ya awali…", uvunjaji wa vizuizi wa mtindo wa DAN) huhakikisha kuwa jibu lina
  `error.code === "SECURITY_001"`, yaani, kizuizi kilikataa ombi hilo kwa hakika.
- **`garak` (ya ushauri)** — huendesha garak `--probes promptinject,dan,leakreplay`
  dhidi ya instansi ya ndani ya OmniRoute (`http://localhost:20128/v1`). Hudhibitiwa na
  siri ya mtoa huduma (`PROMPTFOO_PROVIDER_KEY`); huruka kwa utaratibu bila hitilafu na huongezewa
  `|| true`, kwa hivyo huripoti bila kusababisha CI ishindwe.

Ufikivu wa kisaidizi cha kizuizi (`createInjectionGuard` / `withInjectionGuard`)
unahusisha kila njia ya `/v1` yenye prompt; maandishi ya prompt huchukuliwa kutoka
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` na
`extractMessageContents()` katika `src/shared/utils/inputSanitizer.ts`.
