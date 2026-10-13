# Guardrails (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Madogaran gaskiya:** `src/lib/guardrails/`
> **An sabunta ta karshe:** 2026-08-29 — v3.8.51 (Asalin fassarar Video Bridge an bayyana shi ne ta hanyar mai kiran,
> ba a tabbatar da shi ta server ba tukuna — an yi bayani gwargwadon #11661)

Guardrails suna aiwatar da tsaro, dokoki, da sauye-sauyen abun ciki a iyakar
tsakanin OmniRoute da masu ba da sabis na sama (upstream providers). Kowace guardrail na iya bincika (kuma
da zabi ta ki, ta sauya, ko ta sanya bayani a kan) buƙatun kaya (`preCall`) da
martanin sama (`postCall`).

Tsarin **fail-open** ne: idan wani guardrail ya fadi yayin aiwatarwa, tsarin
rajista (registry) yana rubuta kuskuren kuma ya ci gaba da sauran guardrail maimakon ya sa buƙatar ta fadi.
Tabbatar da block yanke shawara ce ta zahiri (`block: true`), ba ta faru ta kuskure ba.

## Tsarin Garkuwa na Cikin Gida

Rajistar tana loda garkuwa guda shida ta atomatik bisa ga tsarin fifiko lokacin shigo da su
(ka duba `registry.ts` → `registerDefaultGuardrails()`):

| Fifiko | Sunan               | Mataki(ku)     | Fayil                 |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lambar fifiko mai ƙasa tana gudana **na farko**.

### Garkuwa na Hangen Nesa (`visionBridge.ts`) — Tsarin Hangen Nesa PR-1

Yana tsallake buƙatun da ke ɗauke da hotuna da aka nufa ga **samfuran da ba su da hangen nesa** kuma ko dai
yana canza dukkan buƙatar zuwa samfurin da ke da ikon hangen nesa ko kuma yana maye gurbin sassan hoton da bayanan rubutu da aka samar ta hanyar samfurin hangen nesa da za a iya saita kafin
kiran sama. Wannan yana ba masu bayar da rubutu kawai damar sarrafa
manyan kaya cikin sauƙi.

Hanyar:

1. Tsallake idan samfurin da aka nufa yana goyon bayan hangen nesa tuni (sai dai idan yana cikin jerin garkuwa da aka tilasta `isVisionBridgeForcedModel`).
2. Fitar da sassan hoton ta hanyar `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), wanda ke ba da izini ga **masanin kafofin watsa labarai
   guda ɗaya** `detectMediaParts()` a cikin `open-sse/utils/mediaParts.ts` — tushen gaskiya guda ɗaya da aka raba tare da tacewar dacewar haɗin gwiwa.
   Fitarwa yana cikin jerin izini ga sassan manyan matakan da
   `replaceImageParts` zai iya maye gurbinsu (yarjejeniyar fitarwa↔maye gurbinsu): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, da Responses API `input_image`. Kuskuren da aka yi a cikin sassa da
   sassan da ke nuna kawai suna kayan tacewar haɗin gwiwa kuma ba a taɓa fitar da su ba.
   Tsallake idan ba a sami komai ba.
3. Warware saitin lokacin aiki ta hanyar `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): sabbin maɓallan saitin `modalityBridge*`
   suna cin nasara; tsofaffin maɓallan `visionBridge*` suna zama **madadin zagaye ɗaya**
   (madadin juyawa). Tsallake kafin kowanne tafiya na kafofin watsa labarai lokacin da garkuwa ta kasance an hana.
4. Mai zaɓin yanayi (`modalityBridgeVisionMode`, duba tebur a ƙasa) yana yanke shawara
   canza hanyar ko bayyana. Canza hanyar tana dawo da `modifiedPayload` tare da kawai `model`
   an canza, tare da meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Hanyar bayyana: iyakance hotuna zuwa `maxImages`, haɗa aikin da aka sani,
   tuntubi ajiyar bayyana, kira samfurin hangen nesa **a cikin jere**
   (`Promise.allSettled`), da saka `[Image N]: <description>` sassan rubutu a
   wurin su. Rashin nasarar bayyana yana haifar da `null` kuma sashin hoton asali yana
   **adana** (#4012) — sai dai a kan hanyar bayyana haɗin gwiwa lokacin da kowane
   bayyana ya gaza, inda samfurin da ba na hangen nesa ba ya sami
   `(unavailable — no vision-capable provider connected)` stub maimakon (#8430).
6. Dawo da `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mai zaɓin yanayi (`modalityBridgeVisionMode`)

| Yanayi     | Na Gaskiya | Halayya                                                                                                                                                                                                                                                                             |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | Tsofaffin dabaru, ba a taɓa su ba (#6640/#7204): samfuran da ba su da haɗin gwiwa/`auto/` suna canza zuwa mafi kyawun samfurin hangen nesa sai dai idan samfurin asali yana da ingantaccen takardun shaida (sai a bayyana); abubuwan haɗin gwiwa koyaushe suna bayyana.             |
| `describe` |            | Koyaushe bayyana — an tsallake dukkanin garkuwa; samfurin da mai amfani ya zaɓa koyaushe yana amsa.                                                                                                                                                                                 |
| `reroute`  |            | Tilasta canza hanya: an tsallake garkuwa mai riƙe takardun shaida. Garkuwar takardun shaida na **manufa** har yanzu yana aiki — lokacin da babu samfurin hangen nesa mai amfani, buƙatar tana faɗuwa zuwa bayyana don hotuna na asali ba su kai ga bayanan rubutu kawai ba (#8430). |

Hanyoyin da aka tilasta suna gaggauta **kafin** dabarun auto su gudana; halayen `auto`
na daidai da byte ga garkuwa na pre-PR-1.

#### Aikin da aka sani na bayyana rubutu (`modalityBridgeVisionTaskAware`)

Na Gaskiya **gaskiya**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) yana ƙara
rubutun **sako na ƙarshe na mai amfani** (an rage shi zuwa haruffa 500) zuwa tushen
rubutun bayyana, yana jagorantar bayanin zuwa abin da mai amfani ya tambaya
(salon codex-vision-proxy) da kuma tambayar samfurin hangen nesa don rubuta rubutun da ke bayyana. Tare da alamar a kashe — ko babu rubutun mai amfani — ana amfani da tushen rubutun ba tare da canji ba.

#### Bayani akan kiran kanka (`callVisionModelSingle()`

a cikin `visionBridgeHelpers.ts`) koyaushe yana neman `image_url.detail: "high"` —
ba tare da wani sharaɗi ba, ga kowane mai kiran/mai bayarwa, ba tare da an yi la'akari da kowanne siginar abokin ciniki ba.
Samfuran ƙananan bayani suna rage ingancin OCR don ainihin aikin rubutun rubutu
da wannan umarnin ke nema, don haka kiran bayani da kansa koyaushe yana neman babban
bayani ba tare da la'akari da matakin bayani da aka yi amfani da shi a cikin
kiran shigowa na asali ba. Wannan yana shafar kawai jikin kiran bayani na ciki; ba ya canza yadda
OmniRoute ke turawa `image_url.detail` na mai kiran a kan kiran farko —
wannan tsohon yana aiki daban, kuma kawai ga abokan ciniki na OpenCode da aka gano, a cikin
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Ramin tsarin waya na
kiran kanka na Anthropic ba shi da filin `detail` kuma ba ya shafa ko wanne tsoho.

#### Iyakar fitarwa na bayani (`modalityBridgeVisionMaxChars`)

| Mabuɗi                         | Tsoho | Tsarin           |
| ------------------------------ | ----- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`   | `0` ko 100–50000 |

`0` (tsoho) yana nufin **babu iyaka** — bayanin da aka dawo daga
`callVisionModel()` ana wucewa ba tare da canji ba, yana kiyaye halayen da suke akwai. Kowanne ƙima a cikin
100–50000 yana yanke bayanin tare da `…` a ƙarshen kafin a haɗa shi a matsayin `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` a cikin `src/lib/guardrails/visionBridge.ts`).
Kara wannan don ayyukan OCR masu nauyi inda samfurin da ke ƙasa ke buƙatar cikakken rubutu; rage shi don iyakance amfani da token a kan samfurin hangen nesa mai magana da yawa.
Filin dashboard yana cikin shafin Vision na Advanced panel
(`modality-bridge-max-chars` a cikin `ModalityBridgeVisionTab.tsx`) kuma yana iyakance kowanne
ƙima tsakanin 1 da 99 zuwa ƙasan 100 yayin barin `0` a fili
ba tare da canji ba — `0` yana da ingantaccen Zod a cikin kansa
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ba kawai
tsohon "ba a saita ba".

#### Cache na bayani (`modalityBridge/bridgeCache.ts`)

Cache na LRU + TTL a cikin ƙwaƙwalwa don fitar da bayanai, wanda aka raba a cikin dukkanin tsarin.
Mabuɗi = `sha256(imageRef + composedPrompt + configuredBridgeModel)` tare da
tsarin tsawo (babu haɗarin iyakar filin). Sashin samfurin shine
**saitaccen** samfurin gado, ba samfurin da ya amsa ba —
`callVisionModel` na iya komawa a cikin gida, kuma yin mabuɗi bisa ga ƙoƙari zai
yankar cache. Ba a taɓa adana bayanan da suka gaza ba. Saituna:

| Mabuɗi                          | Tsoho  | Tsarin  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Daidaitawa hoton nesa (kiran kanka na bayani/fetch base64)

Lokacin da gado ya ɗauki hoto **na nesa** da kansa — kiran kanka na Anthropic
da canjin tsarin waya na claude-base64
(`ensureBase64ImagesForClaudeWire`), duka ta hanyar
`fetchRemoteImageAsDataUri()` a cikin `visionBridgeHelpers.ts` — URI na bayanin da aka samu
ana wucewa ta `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kafin a haɗa shi a cikin kiran samfurin hangen nesa.
Hotuna masu girma suna ragewa zuwa **2048px gefen tsayi** (wanda ya dace da
iyakar girman da OpenAI/Anthropic suka riga suka yi amfani da shi a gefen sabar), wanda ke rage
bytes/latency na loda ba tare da canza abin da samfurin hangen nesa ke gani ba. Rage girma
yana amfani da `sharp`, wanda aka loda ta hanyar shigo da dindindin: a kan dandalin da
binary ɗin sa na asali ya kasa loda, `normalizeDataUri()` **ba ya taɓa jefa** — yana komawa
ga wucewar asalin bytes, don haka hanyar kiran kanka/base64
koyaushe tana ci gaba da aiki. Bytes marasa hoto (fetch wanda bai dawo da
hoto mai iya fassara ba) ana wucewa ba tare da canji ba. Wannan daidaitawa yana
ƙayyade ga hotuna da gado ke ɗauka don kiran kansa — ba a taɓa
aikata shi ga kayan wucewar mai kiran ba, wanda ya dace da
ka'idar canji kawai (Ka'idar Hard #20).

#### Tsarin saituna + hijira

Sabbin mabuɗan `modalityBridge*` suna da tabbaci na Zod a cikin `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, taron `modalityBridgeCache*`, da
rukunin `modalityBridgeAudio*` da aka yi amfani da su ta hanyar Audio Bridge. Hijira
`141_modality_bridge_settings.sql` yana kwafa tsofaffin ƙimar
`visionBridge*` zuwa sabbin mabuɗan da suka dace (idempotent, ba ya taɓa canza
ƙimar `modalityBridge*` da mai gudanarwa ya saita); tsofaffin mabuɗan suna ci gaba da karɓa a matsayin
madadin karatu na tsawon wani zagaye na fitarwa.

#### Header na bayyana + kididdiga

Amsoshin da aka canza ta hanyar bayyana suna ɗauke da
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(da aka gina ta `buildModalityBridgeHeader()` a cikin `modalityBridge/bridgeStats.ts`,
an yi wa `withModalityBridgeHeader()` a cikin `src/sse/handlers/chatHelpers.ts`).
Kiran da aka canza ba su da **header** — kayan aikin ba a taɓa canza shi ba kuma canjin samfurin
tuni yana bayyana a cikin filin `model` na jikin amsar.

`GET /api/modality-bridge/stats` (izinin gudanarwa, a cikin matakin daidai da
`GET /api/settings`) yana dawo da ƙididdigar kowane samfurin a cikin ƙwaƙwalwa
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` don `vision`, `audio`, da
`video`. `averageLatencyMs` yana amfani da `latencySamples`, ba duk ƙoƙari ba, a matsayin
ma'aunin sa; aikin da ba shi da lokaci ba ya ƙirƙiri samfurin milisani na zero. `bridged` yana ci gaba da zama
sunan da ya dace da baya don canje-canje masu nasara; ƙoƙarin da suka gaza ba su ƙara shi ba.
Ƙididdiga suna sake saita lokacin farawa na tsarin bisa ga ƙa'ida
(telemetry, ba lissafi).

#### Tsarin dashboard

Shafin dashboard na musamman shine
`/dashboard/settings/modality-bridge`. Adireshin URL na `Vision`, `Audio`,
da `Video` suna kiyaye tambayoyin yayin canza ƙimar `tab`.
Tab na Vision yana bayyana izini, yanayi, zaɓin samfur (ciki har da tsohon
na'ura), tambayoyin da suka dace da aiki, iyakokin lokaci/ hoton/ tsawon bayanin/ ajiyar
cache, ƙididdiga na lokacin aiki,
da kuma buƙatar samfur mai kariya. Tab na Audio ma yana aiki: yana bayyana
izini, mai zaɓin samfur na STT kawai tare da Auto, iyakokin lokaci/ max-clip, ƙididdiga na
audio, da kuma gwajin samfur na `input_audio`. Tab na Video yana aiki: yana bayar da
halin lokacin aiki na FFmpeg/ffprobe — ɗaya daga cikin hudu halayen UI na fili (`unknown` yayin da
aka tura binciken ko ba a kammala ba, `restricted` akan mai masaukin dashboard mara juyawa inda aka tsallake binciken a gefen abokin ciniki, `unavailable` bayan an bincika
da tabbatar da rashin, ko `available` tare da sigar FFmpeg/ffprobe) — yana ci gaba
da izini/ samfur/ fuskantar/ video/ iyakokin lokaci, yana tace mai zaɓin samfur zuwa samfurori masu iya hangen nesa,
da kuma yana bayyana ƙididdiga na bidiyo.

Tsohon katin Vision Bridge a ƙarƙashin saitunan AI shine haɗin gwiwa zuwa
sabuwar shafin; ba ya mallaki kwafin na biyu na fom. Masu bayar da kafofin watsa labarai ma
suna haɗa Hanyoyin Hoto-zuwa-Tekun da Hanyoyin Magana-zuwa-Tekun zuwa tab ɗin Modality
Bridge ba tare da cire filin wasan Hanyoyin Magana-zuwa-Tekun da ke akwai ba.

**Bari shiga cikin juyawa:** lokacin da kiran bayyana ya tafi ta hanyar
OmniRoute's na `/v1` juyawa (samfurin mai bayarwa mara tsari), ƙaramin buƙatar yana aika
`x-omniroute-admission-bypass: internal` kuma an tabbatar da shi tare da
takardar shaidar juyawa da aka warware — `sk_omniroute` na gida a cikin yanayin gida, ko
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` da aka saita ta mai gudanarwa (#1350) don haka
zai iya gudanar da kiran bayyana. An girmama juyawar ne kawai ga waɗannan takardun shaidar, don haka abokan ciniki na waje ba za su iya amfani da
kanun don tsallake shiga ba.

Tsoffin tsoffin suna cikin `src/shared/constants/visionBridgeDefaults.ts`; sabbin
iyawa/ tambaya mai hankali/ ajiyar ajiyar ajiyar suna cikin
`src/shared/constants/modalityBridgeDefaults.ts`. Kariya tana bayyana
zaɓin `deps` na gina don haka gwaje-gwaje na iya shigar da jujjuyawar `getSettings` da
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Yana tsallake buƙatun tattaunawa masu ɗauke da sauti kafin su kai ga wani
manufa da ba a san ta da karɓar shigarwar sauti ba. Ba ya taɓa canza hanyar buƙatar tattaunawa: ɓangarorin sauti
ana rubuta su ta hanyar hanyar haɗin gwiwar OpenAI da aka riga aka kafa kuma
samfurin tattaunawa da aka zaɓa yana ci gaba tare da rubutattun rubutu.

Hanyar:

1. Warware `supportsAudio` ta hanyar `getResolvedModelCapabilities()`. Bayanan
   rajistar mai bayarwa na fili yana cin nasara, sannan bayanan samfur na tsaye, sannan
   `modalities_input` da aka haɗa. Jerin shigarwa da aka bayyana ba tare da `audio` ba yana nufin `false`; babu
   shaidar iyawa yana kasancewa `null`. Duka `false` da `null` suna kunna
   gado mai tsauri, yayin da `true` ke tsallake shi.
2. Warware saitunan `modalityBridgeAudio*` da kuma fitar da ɓangarorin sauti na
   matakin sama daga kowanne saƙo ta hanyar raba `detectMediaParts()`
   mai gano. Tsarin waya da aka goyi bayan sune OpenAI `input_audio`, `audio_url`, da
   `source.media_type: "audio/*"`. Ana gano sauti mai zurfi don juyawa amma ba a
   cire ta ta hanyar hanyar haɗin gwiwa. Aiki yana da iyaka ta `modalityBridgeAudioMaxClips`;
   ɓangarorin daga baya suna kasancewa ba tare da taɓawa ba.
3. Girmama `provider/model` da aka saita, ko barin `selectAudioBridgeModel()` ya yi tafiya
   `AUDIO_TRANSCRIPTION_PROVIDERS` a cikin tsari na katako mai ɗorewa kuma ya zaɓi samfurin farko
   tare da ingantaccen takardar shaidar mai bayarwa.
4. `callAudioTranscription()` yana canza sautin base64/data-URI zuwa
   multipart `file`, ko yana sauke `audio_url` na nesa ta hanyar kariya ta
   waje kawai tare da DNS pinning da iyaka na 25 MB. Sannan yana POST fayil ɗin da aka zaɓa
   da samfurin zuwa na gida `/v1/audio/transcriptions` juyawa, an tabbatar da shi tare da
   `resolveSelfLoopBearer()`. Hanyar rubutun da aka riga aka kafa tana gudanar da binciken takardar shaidar na yau da kullum, sarrafa lokacin hutu/iyaka, da kuma tura mai bayarwa.
5. Kiran da suka yi nasara suna maye gurbin ɓangarorin su da `[Audio N]: <transcript>`. Kiran
   suna gudana tare da `Promise.allSettled`: gazawar mutum na adana wannan asalin
   ɓangaren sauti (#4012 kwangila). Idan duk kiran sun gaza kuma an tabbatar da cewa
   manufa tana da `supportsAudio === false`, ɓangarorin suna zama
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 kwangila). Don
   manufa mara sananne (`null`), sakamakon duk-gazawa yana kasancewa ba tare da taɓawa ba. Manufa da aka tabbatar
   kawai tare da rubutu ba tare da ingantaccen takardar shaidar STT ba tana karɓar
   wannan stub na fili ba tare da yin kiran hanyar sadarwa ba.

Rubutun da suka yi nasara suna amfani da tsarin Modality Bridge LRU/TTL cache. Maɓallin yana haɗa
da tunanin sauti, alamar aikin `audio-transcription` mai ɗorewa, da samfurin STT da aka zaɓa; gazawar ba a taɓa ajiye su ba. Kokarin sauti suna sabunta
`bridged`, `cacheHits`, `failures`, da `lastUsedAt` ƙididdiga.
Amsoshin da aka canza suna ɗauke da
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; buƙatun da ba a taɓa su ba ba su karɓi
sashin Audio Bridge ba.

Saitunan lokacin aiki suna da tushe daga DB kuma an tabbatar da su ta hanyar Zod:

| Maɓalli                       | Tsoho   | Tsarin         |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto ko STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

Ajiyar da aka raba yana ƙarƙashin kulawa ta `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, da `modalityBridgeCacheMaxEntries`.

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

Darajar tsarin suna shaidar samfurin mai tabbatacce, ba fahimtar bidiyo mai ma'ana ba. Ba su fassara batutuwa, ayyuka, rubuce-rubuce, magana, ko niyyar mai amfani. Iyakokin yanayi da dakatarwa suna samar da sassa; rufewar dakatarwa, hazo, haske, cikakkun bayanai na sarari, da canjin lokaci suna shafar yadda aka rarraba kasafin kuɗi na firam 1–16. An iyakance sashi mai dakatarwa zuwa firam guda, yayin da sassan da ba su dakatar ba ke fafatawa don sauran kasafin kuɗin. Lokacin da iyakokin suka fi yawa fiye da firam, ana kiyaye rufewar lokaci mai ma'ana don cewa gajerun yanke-yanke na farko ba za su iya ɓoye sashi mai tsawo ba. Iyakokin yanayi a cikin ingancin nazarin na dakika 1 na iyakar dakatarwa ana haɗawa.

Rashin tace, shaidar da ba ta dace ba/ta kasance babu komai, kuskuren mai gano, ko lokacin dakatarwa na kafin an yi nazari yana fuskantar buɗewa ga daidaitaccen tsari na tsakiya. Tsarin kiran ko lokacin ƙungiya ba ya fuskantar buɗewa: yana dakatar da aikin da ke gudana, yana hana fitar da firam daga baya, kuma ana cire itacen wucin gadi a cikin `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` yana haifar da ingantaccen FFmpeg na ainihi don adana kudaden kiran rubutu bayan an cire maimaitawa, rarraba kasafin motsi mai yawa, shaidar hazo/haske/SI-TI, yanke-yanke masu sauri tare da dogon juyawa, da ƙarin ƙarya na ƙarya. Yana rubuta lokacin bango na kafin nazari kuma, inda `/usr/bin/time` ke samuwa, CPU na yaron da RSS mafi girma. Duban ingancinsa na tsari ne kawai. Ingancin samfurin rubutu na ainihi yana ci gaba da kasancewa `HOLD` saboda wannan kayan aikin ba shi da ƙarshen da aka ba da izini ko mai hukunci mai dakatarwa. Ajiye kuɗi ma yana ci gaba da kasancewa `HOLD` sai dai idan `--caption-cost-per-call-usd` ya bayar da kimanta mai kyau na kiran kowane lokaci; rubutun ba ya ƙirƙirar kowanne sakamako.

Kowane firam yana iyakance zuwa 4 MiB, dukkan firam na ainihi tare zuwa 23 MiB, da amsar mai haɗin gwiwa da aka tsara zuwa 32 MiB. Ana cire babban fayil na wucin gadi a cikin `finally`. OmniRoute ba ta haɗa FFmpeg kuma ba ta karɓi hanyar aiwatarwa ta musamman. Kafin a rubuta rubutu, gado yana amfani da wucewa na gani mai tsauri: kowane JPEG yana ragewa zuwa buffer mai launin launin 16×16 kuma ana kwatanta shi ne kawai da firam na ƙarshe da aka riƙe. Don kasafin rubutu da aka nema sama da firam guda, fitarwa tana bayar da
tsohon zaɓi na har zuwa sau biyu na wannan kasafin kuma ba ta wuce firam 16 ba. Ana amfani da iyakar da aka nema ne kawai bayan an cire maimaitawa, tare da zaɓin farko da na ƙarshe da aka adana yayin ƙarshe lokacin da kasafin ya kai akalla biyu. Tsarin da aka tsara
`grayscale-16x16-mean-cells-v2` yana amfani da mafi girman na luma delta da kuma rabo na ƙwayoyin thumbnail wanda ke da delta mai daidaitacce akalla 0.05. Iyakokin maimaitawa shine 0.04, wanda aka zaɓa don tabbatacce maimakon a bayyana a matsayin saitin lokacin gudu. Wannan siginar
mai tsanani tana adana ƙaramin motsi da canje-canje na rubutu da za a iya ɓoye su ta hanyar kwatancen kawai na ma'ana. Kuskuren mai kwatanta ko mai fassara suna fuskantar buɗewa kuma suna kiyaye rufewar. Metadata na fitarwa yana raba zaɓin da aka fitar, firam da aka yi amfani da su, da kwatancen gani da aka zubar.

Wani ɓangare na bidiyo da aka bayyana a fili na iya neman takardar tuntuɓar da aka sanya lokaci. Gado yana gina grid na JPEG mai ginshiƙi 4, firam 16 a mafi yawa. Kowane ƙwayar 512-pixel tana ƙonewa timestamp na tushenta a cikin babban rukunin tsanani, yayin da timestamps ɗin suna kasancewa a cikin metadata na rubutu don haɗin gwiwa da bincike na gaba. JPEG ɗin da aka kammala yana ci gaba da kasancewa a iyakar 32 MiB. Idan `sharp` ba zai iya fassara ko haɗa grid ba, gado yana komawa zuwa firam na JPEG na mutum; dakatarwar abokin ciniki har yanzu tana wucewa ta hanyar aikin takardar.

Shaidar inganta tana da nufin zama daban daga ƙirƙirar haɗin gwiwa na microbenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` yana bayyana tsarin da aka tsara na A/B don ainihin samfuran hangen nesa masu dacewa da OpenAI. Yana auna adadin tokens da mai bayarwa ya bayar, jinkirin bango na kowane ɓangare (ciki har da haɗin takarda), adadin kiran samfur, da riƙon gaskiya da aka bayyana a cikin jerin. Ba a rubuta amsoshin samfur na ainihi a cikin rahoton; kawai SHA-256 digests da IDs na gaskiya da aka dace ne aka adana. Kayan aikin ba ya yi kiran hanyar sadarwa ko kiran samfur na biya sai dai idan `--execute-real` an wuce kuma `--model`, `OMNIROUTE_BASE_URL`, da `OMNIROUTE_API_KEY` an tsara. Ba tare da wannan gudanarwar ainihi ba, hukuncin da za a iya karantawa yana ci gaba da kasancewa `HOLD`; kawai auna nauyin/ƙididdigar kiran na ƙirƙira ba su zama shaidar inganta ba.

Wannan ɓangaren daban `scripts/perf/video-bridge-promotion-eval.ts` yana amfani da FU-07 ko FU-09 lura. Shiga inganta yana buƙatar dukkan nau'ikan yanayi guda takwas na ƙirƙira tare da faifan ainihi da aka tsabtace, akalla maimaitawa uku da aka auna a kowanne rawa da yanayi, dukkanin ƙididdigar da aka bayyana goma, shaidar kafofin watsa labarai/umarnin/ƙididdigar da ake tsammani/saƙonnin, IDs na lura na musamman da tabbatar da tsarin A/B. Takardar shaidar gudanarwa tana haɗa digest na jiki, takamaiman SHA na zaɓi da gyaran samfur. Rashin ko auna da ba ta dace ba suna ci gaba da kasancewa `HOLD`, ciki har da CPU sama da 30 s, RSS mafi girma sama da 512 MiB ko kafin nazari sama da 30 s. Waɗannan suna zama iyakokin shaidar shigarwa, ba sabon tabbacin tilasta RSS na lokacin gudu ba.

FU-07 yana buƙatar akalla 98% riƙon inganci da jinkirin p95 ba fiye da 1.2x tushe ba, tare da ko dai ingantaccen ma'auni na 0.05 na ma'auni mai daidaito a kiran rubutu na ma'ana, ko akalla 10% ƙasa da kiran rubutu na bayan cire maimaitawa. FU-09 yana buƙatar akalla 0.85 inganci, 95% riƙon, 20% rage jinkirin p95 da 10% rage token. Asarar muhimmin gaskiya, bin ka'idoji ko rashin amfani yana hana inganta. Wani gudanarwa ba zai iya inganta komai ba: `--previous-report` yana tabbatar da gudanarwa guda biyu masu zaman kansu, marasa jituwa, da suka cancanta na jere na tsarin/model/zaɓi/jiki guda ɗaya. Gwajin samfur ba zai iya tabbatar da gwajin takardar tuntuɓar ba.

Collectors ya kamata su yi ƙididdiga ga amsoshi a cikin ƙwaƙwalwa kuma su adana `responseDigest` tare da
metrics da observation bindings, ba tare da adana rubutun amsa ba. Mai amfani kuma yana karanta
tsohon raw observations amma ba ya kwafa wannan rubutun cikin rahotonsa. Daya daga cikin `responseDigest` ko `rawResponseText` ana karɓa don kowanne observation.
Jerin da aka ba da izini na sigar yana ci gaba da zama fanko tare da `hold` na tsoho wanda ba za a iya canzawa ba. Wani shafi mai cancanta yana buƙatar shaida, manufofi, sabuntawa na samfur, takamaiman SHA na mai nema, digest na manifest da IDs guda biyu na gudu daban-daban; ana ƙin karɓar mahallin da suka sabawa. Wannan metadata shine kwangilar bincike, ba hujja cewa fayil ɗin da aka ambata yana ɗauke da ainihin ma'auni ba. Duba takardun da suka dace kafin ƙara kowanne shafi. Hanyar stats na gudanarwa da dashboard na Bidiyo suna bayyana shirin da aka yi hankali. Wani alias na samfur da aka saita kawai ba ya kafa sabuntawarsa ko
takamaiman SHA na mai gudu, don haka dashboard na yanzu yana bayar da `HOLD` maimakon sake amfani da cancanta daga wani mahallin aiwatarwa. Zaɓin gwaji na musamman yana ci gaba da zama daban daga inganta; babu tsoho da za a canza ta atomatik.

Masu kira na iya haɗa zaɓin `transcript.cues` array zuwa wani ɓangare na bidiyo da aka goyi bayan lokacin da suke da rubutun da aka daidaita. Kowanne cue yana buƙatar ɗaukar `text`, wani iyakacin `start`/`end` a cikin lokacin da aka bincika, da `source` da aka ba da izini (`client`, `embedded`, ko `audio-bridge`); `confidence` na tsoho shine `1` kuma ya kamata ya kasance tsakanin `0` da `1`. Ana haɗa cikakkun cues. OmniRoute ba ya fara rubutun daga wannan metadata: an kwafa cues da aka tabbatar cikin sakamakon da aka bayyana tare da tushe, tabbaci, da iyaka, kuma ana fassara su a matsayin observations marasa amincewa tare da rubutun fuskokin. Rubutun da ba daidai ba, wanda ya wuce iyaka, ko wanda ba shi da tushe ana ƙin karɓa maimakon haɗawa cikin ruwan rubutu. Dukkanin tashoshin transcript na jikin buƙata suna daidaita tushe da aka bayar zuwa `client`, gami da `embedded` ko `audio-bridge` da aka tabbatar da kansu. Kawai mai haɗin kai na uwar garke ne zai iya ba da waɗannan lakabin da aka amince da su ta hanyar hujjar `trustedSource` kawai; filin JSON na buƙata ba zai iya kaiwa ga wannan hujjar ba. Rubutun transcript yana kasancewa abun ciki wanda aka samo daga kafofin watsa labarai marasa amincewa, ba tare da la'akari da tushe ba, kuma ba ya kamata a tantance izini.

Wani mai kira na iya bayar da `audioTranscript` track don wannan bidiyon; ana ɗaukar shi a matsayin rubutun da abokin ciniki ya bayar, ba hujja ta rubutun uwar garke ba. Hanyar haɗin gwiwa tana gudanar da hangen nesa da sauti a ƙarƙashin
ƙayyadadden lokaci da siginar dakatarwa, tana tsara su a kan lokaci guda, tana haɗa cikakkun kwafi, kuma tana bayar da sakamakon rabi lokacin da ɓangare guda ɗaya kawai ya yi nasara.
Wani `audioTranscript` da ba daidai ba yana raguwa zuwa wannan sakamakon rabi — ana adana bayanin hangen nesa kuma ɓangaren sauti yana rubuta lambar gazawa mai tsabta —
maimakon gazawa dukkan bidiyon. Dangane da samuwa a kowanne ɓangare, alamar rabi, da lambobin gazawa masu tsabta ana adana su a cikin sakamakon da aka bayyana, a cikin metadata na kariya (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), a cikin metadata na ajiyar sakamako, da kuma a cikin ƙididdigar haɗin gwiwa. Hanyar tsoho ta Video Bridge ba ta kaddamar da magana-zuwa-rubutu
ko sauke kwafi na biyu na kafofin watsa labarai; ba tare da wannan takardar da aka bayyana ba, yana kasancewa kawai bidiyo.

**Riƙon transcript (#12150 P1).** Wannan yana aiki ta atomatik duk lokacin da
Video Bridge (kansa yana buƙatar shiga) ya fitar da rubutun transcript — babu wata alamar riƙon daban. Lokacin da buƙata ta fitar da kowanne rubutun transcript (wannan yana nufin `transcript` da mai kira ya bayyana ko `audioTranscript` da aka haɗa), kariya tana alamar shi da `videoBridgeObserved` kuma tana samar da inuwa mai gyara na bayanin bidiyo —
wani fassarar da ta yi kama inda kowanne juzu'i na rubutun kyauta yana maye gurbin da
`[redacted-video-transcript]`, wanda aka gina ta hanyar maye gurbin filin juzu'i na tsari kafin a haɗa rubutun (ba ta hanyar fassara rubutun da aka gurbace ba, don haka babu abun ciki na juzu'i — na adawa ko na al'ada, gami da juzu'i da ke ɗauke da `]` kamar
`[inaudible]`/`[music]` — za su iya tsira). Jikin buƙatar da aka adana yana musanya kowanne ɓangare na rubutun da aka samo daga bidiyo don wannan inuwa mai gyara, wanda aka dace da daidaiton abun ciki; an sake karanta `fullText` daga kayan kariya na pre-call da aka gama, don haka daidaito har yanzu yana yi nasara bayan kariya na jere daga baya (PII da
masu ɓoyewa na shaida, fifiko 10/95) suna sake rubuta rubutun bayanin a wuri da
bayan tsarin-gargaɗi/haɗin kai/ƙarin ƙwaƙwalwa suna sake fasalin jerin saƙon. Jikin da aka tura sama zuwa samfur ba ya canza. An lura da buƙatar kuma ba ta cika Memory ba (duka fitar da jikin buƙata da amsa an tsallake),
don haka amsar kanta ba za ta iya maimaita rubutun transcript a cikin Memory ba.

**Fannonin bidiyo na asali (#12430).** Lokacin da aka kunna hanyar haɗin gwiwa kuma goyon bayan bidiyo na asali ba a san shi ko ba a samu ba, an bayyana `transcript`/`audioTranscript` fannonin suna kunna `videoBridgeObserved`, ko bayan gazawar bayanin ko iyakar `maxVideos`. `null` da rubutun fanko suna ƙidaya; fannonin da ba su da su da metadata na ba bidiyo ba ba su ƙidaya. An adana kwafi suna gyara waɗannan fannonin ko kuma suna watsi da buƙatar, kuma ajiyar/Memory ana tsallake su. Jikin bayarwa yana kasancewa ba tare da canji ba.

Karin kwafi da aka adana suna amfani da wannan alamar buƙatar da aka lura. Hoton buƙatar abokin ciniki na pre-guardrail, a cikin ƙwaƙwalwa yana jiran buƙata, da log na buƙatar da aka ƙin karɓa suna musanya fannonin transcript a cikin ɓangarorin bidiyo;
rubutun da aka ƙirƙira ta hanyar matakan bututun da haɗin kai suna gyara a wurin ajiyar buƙatar da aka adana. Alamar `video_content_removed` da aka adana tana sa ci gaba da `previous_response_id` ya gaza rufewa maimakon sake gina rubutun da aka yi niyyar zubar da shi. Idan buƙatar da aka lura ta rasa inuwa mai gyara a kowanne ɓangare kafin a rubuta, ko ma ɗaya daga cikin shadows na bidiyo da yawa ta kasa dacewa bayan canje-canje na buƙata daga baya, jikin buƙatar da aka adana yana watsi da shi gaba ɗaya maimakon adana rubutun transcript da aka gyara a ɓangare.

Don buƙatar da aka lura, amsar samfurin na iya ambaton kowanne ɓangare na
rubutun ba tare da iyakar alamar tsari ba. Saboda haka, an maye gurbin
`responseBody` na log ɗin kira da aka adana da alamar rashin; kayan aikin
pipeline na daki-daki (wanda zai iya haɗawa da jikin upstream/client da
chunks na kwarara) ba a adana su. Cache na ma'ana, idempotency, da
reasoning-replay suna kauce wa karatu da rubuce-rubuce don wannan buƙatar.
Buƙatar mai bayarwa da amsar da abokin ciniki ke gani suna nan ba tare da canji ba.
Ana cire bytes na farko na keepalive daga buffer na wucin gadi lokacin da aka
raba kayan daki-daki. Gargadin EventStream na Kiro mai lalacewa yana bayar da
rahoton kawai adadin bytes na payload, ba tare da abun ciki ko kuskuren
raw na mai fassara JSON ba. Wannan ba ya yi ikirarin cewa an duba kowanne
bayanan gwaji na mai bayarwa/plugin da ba su da alaƙa; ana bin diddigin
gabaɗaya na retained-sink a cikin #11658.

Rayuwar `/api/modality-bridge/video/drilldown` na ciki yana da
cache substrate na daban, loopback/token-authenticated. Kowanne aiki
hakanan yana buƙatar ID na babban mai amfani na canonical. Kafin a ba da
izinin mai kira na samarwa, dole ne ya samo wannan ID daga mai haya
da aka tantance kuma ba zai taɓa watsawa da ƙimar da abokin ciniki ya
zaɓa ba. Cache keys suna haɗa wannan babban mai amfani da ID na
canonical session da video-reference, suna adana kawai maɓallan da aka
samu daga SHA-256, kuma suna iyakance karatu da goge-goge ga wannan
babban mai amfani. Cache yana adana aƙalla frames 16 na JPEG da aka
samu a kowanne shigar, yana ƙare su bayan mintuna goma, kuma yana
tallafawa karatu ko goge-goge na session na musamman.

Kowane babban mai amfani yana da iyaka na shigar 16 da 64 MiB na
data na JPEG na canonical. Wadannan iyakokin suna zaman kansu daga
gabaɗaya 64-entry/256 MiB ceiling: matsin lamba na quota na babban
mai amfani yana fitar da kawai shigar da aka yi amfani da su na
karshe kafin a yi la'akari da goge-goge na gabaɗaya LRU. An goge
shigar da suka ƙare daga duka babban mai amfani da lissafin gabaɗaya
akan aikin cache, yayin da soke da gazawar tantancewa ba su
commita wani canjin rarrabawa ba.

Cache yana ƙin non-canonical Base64, ƙarin padding, non-JPEG
media, JPEGs masu lalacewa ko truncated, da JPEGs da ke haifar da
gargadi yayin da aka yi amfani da `sharp` decode na cikakken hoto.
Yana sake fassara kowanne hoto da aka karɓa a matsayin JPEG na
canonical, yana samo fadi da tsawo daga bytes da aka fassara maimakon
dogaro da filayen mai kira, kuma yana zubar da kowanne trailing
polyglot bytes maimakon adana su. Kawai buffer na canonical da aka
ƙara yana cajin duka quotas. Iyakokin JSON suna haɗawa da
Base64 overhead don ceiling na 32 MiB na decoded-input. Kowanne
rarrabawa da aka adana yana rubuta tsarin/ma'aunin JPEG da aka
tantance, tsarin samfur, sigar rarrabawa, lokacin ƙirƙira, hash na
abun ciki da aka ƙirƙira ta uwar garken, da hash na mahaifin
maɓallin mai amincewa. Ana duba soke tsakanin matakan asyncronous
decode/hash kafin a yi atomic cache commit.

Mai samarwa na samarwa yana sake amfani da frames na broker da aka
samu kawai bayan nasarar nazarin hoto, ba tare da saukar ko
fitar da bidiyo na biyu ba. Yana buƙatar `modalityBridgeVideoDrilldownEnabled=true`,
matsanancin `drilldown: true` na kowane ɓangare, da ID na rajistar
API-key da aka tantance. Kima na babban mai amfani/session da abokin
ciniki ya bayyana ba su taɓa kafa mallaka ba. Ba tare da duk
sharuɗɗan uku ba, ba ya hash, resize ko adana ƙarin frames. Gazawar
adana tana adana amsar hoto mai amfani. Buƙatun da aka yarda suna
kauce wa cache na sakamakon bidiyo gaba ɗaya don haka sakamakon da
aka adana ba su taɓa sake kunnawa ba.

Nasara JSON da SSE suna bayyana aƙalla handles hudu na opaque a cikin
`x-omniroute-video-drilldown` header. Asalin burauzar da aka
yarda na iya karanta wannan header ba tare da faɗaɗa tsarin
CORS na asali ba. Sabbin handles suna amfani da `v1.<32-byte random base64url
token>`, kuma rajistar tana adana kawai
hash na SHA-256. Mai karatu/header parser yana karɓar kuma tsofaffin
64-hex tokens. Mai amfani na jama'a da aka tantance shine
`GET /api/v1/video-bridge/drilldown?handle=...`, wanda aka raba
ta hanyar `modalityBridgeVideoDrilldownRemoteEnabled=true`.
Soke da aka adana na zahiri yana janye
izini ko da lokacin da tsohuwar `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED`
env fallback yana aiki. Adana samarwa yana da
tsohuwar `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Duk
wadannan fallbacks suna da tsoho a kashe.

Mai amfani yana samo mallaka daga maɓallin da aka tantance, yana
aikata tsarin maɓalli, kuma yana dawo da 404 ɗaya don
bayanan da ba a sani ba, waɗanda suka ƙare da handles na wani
maɓalli. Yana karɓar `variant=preview|standard|detail`
(matsakaicin girman JPEG 320/640/1280, ba a ƙara girma ba),
`limit=1..8` (ko tsohuwar `frames` alias, ba duka ba),
zero-based `page`, da zaɓin `start`/`end` na seconds.
Ana ƙin maɓallan tambaya masu maimaitawa da windows na
mayar da hankali da aka juyawa. Kowanne variant da aka dawo da
shi yana da hash na abun ciki na gaske da ma'aunin
gaskiya, wanda aka haɗa da tushen da aka adana.
Variants suna samuwa a karatu maimakon adana su a matsayin ƙarin
kwafi da aka adana. Amsar JSON, gami da Base64/envelope, tana
iyaka a 32 MiB; shafi mai girma yana dawo da 413 kuma abokin
ciniki dole ne ya nemi ƙananan frames. Karatu suna duba soke
a kusa da kowanne resize da sake duba ingancin handle kafin
dawo. `DELETE` ta mai mallaka yana da idempotent;
goge ko TTL expiry yana sakin tushen da aka adana da lissafin amfani.

Store ɗin da aka raba yana cikin tsari na gida: handles suna ƙare
akan sake farawa kuma ba za a canza su tsakanin
tsarin OmniRoute masu zaman kansu ba. Kididdigar gudanarwa tana
bayyana tasirin adana/tsarin nesa da adadi na shigarwa/bytes
kawai, ba tare da media, tunani, ID na babban mai amfani ko
handles ba. Panel na saitunan Bidiyo yana nuna waɗannan ƙimar
kuma yana iya adana duka canjin yarda. Wannan takaddar
aikin aiwatarwa ba ta zama shaidar aikace-aikacen kai tsaye ko
tallatawa ba; amincewar samfurin na ainihi ana bin diddigin
shi daban.

Frames suna da taken da aka tsara a jere tare da samfurin Bidiyo da aka saita. Wani override na Bidiyo mara komai yana gado saitin Vision; idan duka suna da komai, mai haɗa kai na Vision yana zaɓar ingantaccen samfurin da ke da ikon hangen nesa. Nasarar taken suna maye gurbin asalin sashi tare da wani mai ɗorewa `[Video description:` prefix wanda kuma ke nuna rubutun a matsayin wani abu daga kafofin watsa labarai mara amincewa kuma yana gaya wa samfurori masu zuwa kada su bi umarnin da aka samo a cikin kafofin watsa labarai. Maɓallan ajiyar taken suna haɗa JPEG bytes, umarni, lokacin, da ingantaccen samfur; kawai nasarar taken ne ake adanawa. Shigarwar ajiyar suna riƙe da ainihin samfurin mai samarwa na nasara, gami da samfurin madadin; gada tana bayar da rahoton `mixed` lokacin da aka samar da frames daban-daban ta hanyoyi daban-daban. Samun ajiyar yana sake amfani da wannan asalin mai samarwa maimakon sake sanya shi a matsayin shirin jigilar da aka nema. Ajiyar sakamakon dukkan bidiyo yana da maɓalli akan kowane shigarwa wanda ke canza fitarwa — umarni, ingantaccen samfur, tsarin samfur, adadin frame, yanayin nazarin ma'ana, SHA-256 fingerprint na alamar mai da hankali da aka daidaita, taga mai da hankali, `transcript`, `audioTranscript`, da kuma alamar takardar tuntuɓa — don haka canza kowane daga cikin waɗannan dimbin yana zama rashin samun ajiyar, ba tare da sake amfani da tsohuwar ba. Sigogin manufofin hoto na dedup suna bayyana, ƙayyadaddun ƙimar, da adadin frames na mai yiwuwa a cikin maɓallin ajiyar sakamakon da metadata; canjin manufofi don haka ba zai iya sake amfani da tsohon bayanin bidiyo ba. Metadata na ajiyar sakamakon v4 yana riƙe da yanayin da fingerprint, ba tare da aikin mai amfani na asali ba. Metadata na guardrail yana bayar da rahoton duka yanayin nazarin da aka nema da ingantaccen; yanayin `focused` da aka nema ba tare da rubutun mai amfani mai amfani ba ana bayar da rahoton a matsayin ingantaccen `full`.

Guardrail yana fitar da kowane ɓangare na bidiyo da aka goyi bayan amma ba ya bayyana fiye da `modalityBridgeVideoMaxVideos`. Don wani manufa da aka tabbatar tana da `supportsVideo === false`, bidiyo da suka gaza da kuma waɗanda suka wuce iyaka suna zama alamomin rubutu masu aminci don haka babu bidiyo na asali da ya wanzu. Lokacin da ba a san ikon ba, waɗannan ɓangarorin suna kasancewa ba a taɓa su ba. Targets tare da `supportsVideo === true` suna wuce gada. Siginar dakatar da buƙatar abokin ciniki tana wucewa ta hanyar saukarwa, jerin broker, subprocesses, da kiran taken; dakatarwa suna tsayawa tsakanin bidiyo kuma ba sa fadi a bude ga kafofin watsa labarai na asali.

Saitunan lokacin suna da goyon bayan DB da kuma tabbatar da Zod:

| Key                                 | Default     | Range / behavior                                                                                               |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Zaɓi na lokacin, zaɓi cikin                                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` yana adana taken gama-gari; `focused` yana amfani da iyakantaccen, ba a amince da sabuwar mai amfani ba |
| `modalityBridgeVideoModel`          | `""`        | Gado samfurin Vision Bridge                                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                           |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ko kuma `segment_aware` na kashi; gazawar mai gano yana komawa zuwa `uniform`        |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                            |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                 |

Darajar lokacin ajiyar Bidiyo na tsoho sama da sekondi 120 ana ƙayyade su zuwa lokacin ƙarshe na broker; sabbin saituna da aka rubuta sama da wannan iyakar ana ƙin su. `GET /api/modality-bridge/video/runtime` yana buƙatar amintaccen stamped loopback locality kafin tantancewa ko binciken lokacin, sannan yana buƙatar izinin gudanarwa. Yana dawo da kawai `available`, tsabtace FFmpeg/ffprobe versions, da kuma dalili mai ɗorewa lokacin da lokacin ba ya samuwa. Wurin fitarwa na ciki ba shine API na ɗora jama'a ba: cunkoson jerin yana dawo da `503` tare da `Retry-After`, katsewar mai kira yana dawo da `499`, da kuma lokacin ƙarshe na broker yana dawo da `504`. An canza amsoshin suna ƙara `video->text;model=<visionModel>;parts=<videos>` zuwa babban `x-omniroute-modality-bridge` header ba tare da cire sassan Vision ko Audio ba.

### PII Masker (`piiMasker.ts`)

Yana gudana akan **duka** matakai.

- **`preCall`** yana kwafin kayan, yana tafiya `system`, `messages`, `input`, da `prompt` (ciki har da abubuwan rubutu na al'ada), kuma yana amfani da `processPII()` (daga `@/shared/utils/inputSanitizer`) ga filayen rubutu `content`/`text`. Lokacin da `PII_REDACTION_ENABLED=true`, an yi redaction ga PII da aka gano a cikin kayan fita. Wannan yana zaman kansa daga `INPUT_SANITIZER_MODE` (wanda kawai ke sarrafa tsarin shigar da umarni). Lokacin da aka kashe redaction, kiran yana rikodin adadin gano ba tare da sake rubuta abun ciki ba.
- **`postCall`** yana yin zurfin kwafin amsar, yana gudanar da `sanitizePIIResponse()` tare da mai masker na Responses-API-shape (`maskResponsesOutput` — yana rufe `output_text` da `output[].content[].text`). Idan an yi redaction, amsar da aka gyara tana maye gurbin asalin.

Guardrail ba ya taɓa toshe; yana kawai yin bayanin (`meta.detections`, `meta.redacted`) ko kuma yana sake rubuta.

### Prompt Injection (`promptInjection.ts`)

Yana gano tsarukan adawa a cikin abun ciki da mai amfani ya bayar kuma yana tilasta tsarin da aka saita. Halayen suna tuka ta hanyar canje-canje na muhalli da zaɓuɓɓukan mai gina:

| Saitin          | Env var                                                                                             | Default | Tasiri                                                                                                                                                                                        |
| --------------- | --------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An kunna        | `INPUT_SANITIZER_ENABLED`                                                                           | `true`  | Lokacin da `false`, guardrail yana gaggawa.                                                                                                                                                   |
| Yanayi          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                     | `warn`  | Ka'idojin shigarwa: `block`, `warn`, ko `log`. (`redact` ana karɓa don jituwa da baya amma ba ya cire rubutun shigarwa; buƙatar gyaran PII ana sarrafa ta ta hanyar `PII_REDACTION_ENABLED`.) |
| Tazarar toshewa | `blockThreshold` zaɓi / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Mafi ƙarancin tsanani da ake buƙata don toshewa. Matsakaici yana zama kawai a kalla a tsoho.                                                                                                  |

**Gabaɗaya yanayi** (`getMode`): mai kira `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Saituna →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Saboda haka, override na dashboard yana samun nasara akan env vars, don haka UI na Feature Flags yana sarrafa guard mai gudana kai tsaye (ba tare da sake farawa ba). Karatun DB yana da kariya:
idan ya yi kuskure, guard yana komawa ga halayen da aka dogara da env, kuma lokacin da babu
override da aka saita halayen suna daidai da warwarewar kawai ta env.

Hanyoyin gano:

1. `sanitizeRequest()` daga `@/shared/utils/inputSanitizer` (saitin mai gano
   da aka yi amfani da shi a wasu wurare a cikin bututun).
2. Gano `DEFAULT_GUARD_PATTERNS` (a halin yanzu `system_override_inline` da
   `markdown_system_block`, duka suna da tsanani `high`).
3. Zaɓi `customPatterns` da aka wuce ta hanyar zaɓin gina (strings, regex,
   ko `{ name, pattern, severity }` rikodi).

Lokacin da `mode === "block"` **da** aƙalla gano ɗaya ya cika tazarar tsanani,
`preCall` yana dawo da `{ block: true, message: "An ƙi buƙata: 
an gano abun ciki mai shakku" }`. A cikin yanayin `warn`/`log` guardrail yana yin rajista amma
yana ba da izinin kira. Mai taimako na raba `evaluatePromptInjection()` an kuma fitar da shi
don masu kira da ke buƙatar tantance tambayoyi ba tare da wucewa ta hanyar rajista ba.

**Scan bound (v3.8.20):** mai gano yana duba **na farko 16 KB** na
rubutun tambaya da aka haɗa — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) a
`src/shared/utils/inputSanitizer.ts`. Duka `detectInjection()` da
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` kafin gudanar da
madauki na tsari. Umarnin shigarwa suna kusa da saman shigarwa, don haka wannan
yana iyakance CPU/GC na regex akan nauyin da ya kai dubban-KB ba tare da raunana gano ba (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Yana gudana a **duka** matakai, na ƙarshe a cikin silsilar tsoho (matsayi `95`). Yana cire
sanannun tsarin API-key / secret-token daga nauyin fita (abun ciki na saƙo,
huɗa na kayan aiki, sakamakon kayan aiki) **da** amsar mai bayarwa, don haka
credential da aka liƙa cikin tambaya (ko aka maimaita ta hanyar sakamakon kayan aiki) ba a bayyana
ga mai bayarwa na sama ko kuma ga abokin ciniki ba.

- **Zaɓi kawai**, wannan yana daidai da ka'idar PII redaction (Ka'ida Mai Tsauri #20-mai kusa):
  an kashe sai dai idan `settings.credentialRedactionEnabled === true` **ko**
  `CREDENTIAL_REDACTION_ENABLED=true`. Idan an kashe, guardrail ba ya aiki —
  ba ya taɓa toshewa kuma ba ya taɓa gyarawa.
- `redactCredentials()` yana tafiya cikin dukkan nauyin/amsar itace (`walkValue()`,
  mai kariya daga gurbatawa, mai kariya daga zagaye ta hanyar `WeakSet`) kuma yana maye gurbin da
  `[REDACTED:<type>]` placeholder, yana kwafin kawai rassan da suka canza.
- `CREDENTIAL_PATTERNS` yana rufe maɓallan mai bayar da LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens na VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maɓallan biyan kuɗi (Stripe, Square), maɓallan gajimare
  (AWS access key, Twilio, SendGrid, Mailgun), maɓallan sirri / JWTs,
  layukan haɗin da ke ɗauke da credential (`mongodb://user:pass@...`, da sauransu), da
  tsarin `Authorization`/`x-api-key`/`api-key`/`apikey` header-value.
  Maɓallan da suka yi kama da header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ana cire su a tsari (kawai ƙima, tsarin gabatarwa kamar
  `Bearer `/`Basic ` an adana) maimakon ta hanyar regex na rubutu na gama gari.
- Guardrail ba ya taɓa toshewa; yana gyara kawai (`modifiedPayload` /
  `modifiedResponse`) da kuma yin bayanin (`meta.credentialsRedacted`, `meta.count`).

Kariya daga koma baya: `tests/unit/credential-masker-guardrail.test.ts`.

## Kwantirƙirar Asali (`base.ts`)

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
  block?: boolean; // gaskiya yana katse silsilar
  message?: string; // an bayyana lokacin katsewa
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // an dawo da shi daga preCall don sake rubuta bukatar
  modifiedResponse?: TValue; // an dawo da shi daga postCall don sake rubuta amsar
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

Wani guardrail yana nuna "babu canji" ta hanyar dawo da ko dai `void`, `{}`, ko `{ block: false }`. Dawo da `modifiedPayload`/`modifiedResponse` yana maye gurbin ƙimar da ke gudana ta cikin silsilar don ƙarin guardrails. `signal?: AbortSignal` yana ɗaukar rayuwar mai kira cikin guardrails. Tsarin dakatar da buƙata shine kuskuren fail-open na gangan: gadojin kafofin watsa labarai suna daina aiki da tsaftacewa ba tare da dawo da kafofin watsa labarai na asali zuwa wani manufa da aka sani ba wanda ba ya goyon bayan shi.

## Rajista (`registry.ts`)

Singleton `guardrailRegistry` yana bayyana:

- `register(guardrail)` — yana ƙara (ko maye gurbin ta sunan da aka daidaita) guardrail kuma
  yana sake tsarawa ta hanyar hawan `priority`.
- `clear()` / `list()` — masu taimakawa gudanarwa.
- `runPreCallHooks(payload, context)` — yana maimaita guardrails masu aiki, yana wuce da
  payload ta hanyar `modifiedPayload`, kuma yana tsayawa a farkon `block: true`.
- `runPostCallHooks(response, context)` — tsarin guda ɗaya a gefen amsa.
- `resetGuardrailsForTests({ registerDefaults })` — yana share yanayi kuma a zaɓi
  yana sake yin rajistar tsoffin abubuwan don tsabtataccen keɓewar gwaji.

Duk masu gudu suna dawo da `{ blocked, payload|response, results, guardrail?, message? }`
inda `results` shine jerin bayanan `GuardrailExecutionResult` waɗanda suka haɗa da
filayen `blocked`, `skipped`, `modified`, `error`, da `meta` na kowane guardrail,
masu amfani don bin diddigi.

### Kashe Guardrails Ga Kowane Buƙata

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` yana tattara
jerin sunayen guardrail da aka cire kwafi waɗanda ya kamata a tsallake su don
buƙatar yanzu. Tushen (duk na zaɓi, duk an haɗa su):

- `apiKeyInfo.disabledGuardrails`
- Jikin buƙata `disabledGuardrails` (matakin sama)
- Jikin buƙata `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (ko tsohon
  `x-disabled-guardrails`)

Ƙimar na iya zama jerin igiyoyi ko igiya mai raba-koma; ana daidaita sunaye
zuwa ƙananan haruffa kebab-case (`pii_masker` → `pii-masker`). Ana wuce da
sakamakon ta hanyar `context.disabledGuardrails` zuwa rajista, wanda ke
tsallake guardrails masu dacewa (`skipped: true` a cikin `results`).

## Tsarin Aiki

Ga kowane buƙata da ke gudana ta `src/sse/handlers/chat.ts` da
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` yana gina jerin abubuwan da za a tsallake daga maɓallin API, jiki,
    da kuma kanun labarai.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` yana gudanar da guardrails a cikin tsarin fifiko mai hawa:
    - Guardrails da aka kashe ana rubuta su a matsayin `skipped`.
    - Kowane `preCall` na guardrail na iya sake rubuta bayanan da aka ɗora ta hanyar `modifiedPayload`.
    - `block: true` na farko yana dakatar da sarkar kuma mai sarrafawa yana mayar da
      martanin kin amincewa da guardrail.
3.  Bayanan da aka ɗora (watakila an sake rubuta su) suna shiga cikin hanyar haɗin gwiwa da kuma
    aikin aika zuwa sama.
4.  Bayan an haɗa martanin, `guardrailRegistry.runPostCallHooks(...)`
    yana gudanar da sarkar iri ɗaya akan martanin. `block: true` anan yana jefar da martanin daga sama.

Guardrails da suka jefa kuskure ana rubuta su da `error: <message>` kuma ana shigar da su ta hanyar
`logger.warn`, amma sarkar tana ci gaba – an tsara ta don ta ci gaba duk da kuskure.

## Saita

Ma'aunin muhalli da guardrails na ciki ke karantawa:

| Variable                              | Wanda ke amfani da shi      | Tasiri                                                                                              |
| :------------------------------------ | :-------------------------- | :-------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Saita `false` don kashe gano gaba ɗaya.                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Manufar allura: `warn`, `block`, ko `log`. Tsohon darajar `redact` baya sake rubuta rubutun allura. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Yanayin don kariyar allura; kuma alamar fasalin DB da **ke mamaye** ma'aunin muhalli (DB > ENV).    |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Mafi ƙarancin tsanani da `MODE=block` ke ƙi: `high` (tsoho), `medium`, ko `low`.                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Tsohon suna ga `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Lokacin da `true`, PII na buƙata ana gyara shi (mai zaman kansa daga yanayin allura).               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (ƙasa da ruwa) | Yana sarrafa halayen masker na gefen martani.                                                       |

Guardrails na Modality Bridge suna karanta saitin lokacin aiki daga ma'ajiyar saitunan da DB ke tallafawa
(`getSettings()`), ba ma'aunin muhalli ba. Maɓallan farko na Vision sune
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, da
`modalityBridgeCacheMaxEntries`. Tsoffin maɓallan
`visionBridge*` ana karɓar su ne kawai a matsayin abin da aka rubuta na sake karantawa na zagaye ɗaya;
rubuce-rubucen dashboard suna amfani da maɓallan farko. Abubuwan tsoho da mai warwarewa na sake karantawa suna zaune a
`src/shared/constants/modalityBridgeDefaults.ts`, tare da tsoffin ma'auni da aka riƙe a
`src/shared/constants/visionBridgeDefaults.ts`.

Audio yana amfani da `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, da `modalityBridgeAudioMaxClips`, tare da saitunan
`modalityBridgeCache*` da aka raba. Audio bashi da tsohon maɓallin sake karantawa saboda an gabatar da waɗannan maɓallan tare da tsarin Modality Bridge.

Video yana amfani da `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, da
`modalityBridgeVideoTimeout`, tare da saitunan `modalityBridgeCache*` da aka raba.
An kashe shi ta tsohuwa saboda FFmpeg/ffprobe sune zaɓin dogaro na aiki kuma
ƙara rubutun firam yana ƙara jinkiri da farashin samfuri.

## Tsare-tsare na Musamman

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "An wuce kasafin kuɗi na yau da kullun" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Matakai:

1. Ƙirƙiri `src/lib/guardrails/myGuardrail.ts` yana faɗaɗa `BaseGuardrail`.
2. Aiwatar da `preCall` da/ko `postCall`.
3. Ko dai a yi rajista a lokacin shigo da kaya (tura daga `registerDefaultGuardrails`) ko
   kiran `guardrailRegistry.register(...)` a lokacin gudu — rajistar tana maye gurbin
   kowane tsarin tsaro na baya da suna ɗaya.
4. Ƙara gwaje-gwaje a ƙarƙashin `tests/unit/` (misalai masu akwai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Gwaji

Yi amfani da `resetGuardrailsForTests()` tsakanin gwaje-gwaje don farawa daga sanannen yanayi.
Wuce `{ registerDefaults: false }` don farawa da rajista mara komai kuma
yi rajistar tsare-tsaren tsaro kawai da ake gwadawa. Vision Bridge yana karɓar allurar dogaro (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge yana bayyana
daidaitattun abubuwan da suka dace don saituna, iyawa, zaɓin samfurin STT, binciken takardun shaida,
da rubutawa. Don haka gwaje-gwaje na iya yin amfani da duka hanyoyin ba tare da DB
ko samun damar hanyar sadarwa ba.

## Duba Kuma

- `src/lib/guardrails/` — aiwatarwa
- `src/shared/utils/inputSanitizer.ts` — mai gano abubuwan da aka raba wanda ke ba da ƙarfi
  allurar saƙo da rufe PII
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge tsoffin saituna da
  jerin samfuran da aka tilasta-gada
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio tsoffin saitunan lokacin gudu
- `docs/architecture/RESILIENCE_GUIDE.md` — Layer na orthogonal (mai karya kewaye, sanyaya)
- `docs/reference/ENVIRONMENT.md` — cikakken bayanin env var

## Rufin hanyar kariya daga allura & ƙungiyar ja (Mataki na 8 · Block D)

Kariyar allura (`createInjectionGuard` / `withInjectionGuard`) tana rufe duk hanyoyin
da ke karɓar saƙonnin mai amfani. Tana mutunta `INJECTION_GUARD_MODE` (tsoho `warn` = log kawai;
`block` = yana dawo da HTTP 400 `SECURITY_001`).

| Nau'i | Hanyoyi | Yanayin tsoho |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | warn |
| Rubutu (mai akwai) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions` | warn |
| Generative | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn |
| Data | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations` | warn |

Cire rubutu (`extractMessageContents`) yana rufe `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Ƙungiyar ja (dare, `nightly-llm-security.yml`):** promptfoo yana tabbatar da cewa kowace hanya tana toshe
corpus na OWASP-LLM a cikin `INJECTION_GUARD_MODE=block`; garak yana gudanar da bincike (yana tsallake ba tare da sirri ba).
An haɗa `moderations` don daidaito — masu aiki a yanayin toshewa na iya keɓe shi ta hanyar
`resolveDisabledGuardrails`.

Aikin dare (`.github/workflows/nightly-llm-security.yml`, cron + manual
dispatch) yana da ayyuka biyu:

- **`promptfoo-guard` (toshewa)** — yana gudanar da `promptfoo eval -c promptfooconfig.yaml`
  tare da `INJECTION_GUARD_MODE=block`. Kowace shari'ar adawa (misali "yi watsi da duk
  umarnin da suka gabata…", DAN-style jailbreaks) yana tabbatar da cewa amsar tana ɗauke da
  `error.code === "SECURITY_001"`, wato, mai gadi ya ƙi buƙatar.
- **`garak` (shawara)** — yana gudanar da garak `--probes promptinject,dan,leakreplay`
  akan wani misali na OmniRoute na gida (`http://localhost:20128/v1`). An rufe shi da
  sirrin mai bayarwa (`PROMPTFOO_PROVIDER_KEY`); yana tsallake da kyau kuma an haɗa shi da
  `|| true`, don haka yana bayar da rahoto ba tare da gazawar CI ba.

Rufin mai taimakon gadi (`createInjectionGuard` / `withInjectionGuard`)
yana rufe kowace hanyar `/v1` mai ɗauke da saƙo; ana cire rubutun saƙo daga
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ta hanyar
`extractMessageContents()` a cikin `src/shared/utils/inputSanitizer.ts`.
