# Guardrails (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sanningskälla:** `src/lib/guardrails/`
> **Senast uppdaterad:** 2026-08-29 — v3.8.51 (Video Bridge-transkriptets ursprung deklareras av anroparen,
> ännu inte serververifierat — förtydligat enligt #11661)

Guardrails upprätthåller säkerhet, policy och innehållstransformationer vid gränsen
mellan OmniRoute och uppströmsleverantörer. Varje guardrail kan inspektera (och
valfritt avvisa, transformera eller kommentera) begärans nyttolaster (`preCall`) och
uppströms svar (`postCall`).

Systemet är **fail-open**: om en guardrail kastar ett fel under exekvering,
registrerar registret felet och fortsätter med nästa guardrail istället för att
misslyckas med begäran. Blockering är ett explicit beslut (`block: true`),
aldrig en olycka.

## Inbyggda Skyddsräcken

Registreringen laddar automatiskt sex skyddsräcken i prioritetsordning vid import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Namn                | Steg(en)       | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lägre prioritetstal körs **först**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Fångar bildbärande förfrågningar riktade mot **icke-visionsmodeller** och antingen
omdirigerar hela förfrågan till en visionskapabel modell eller ersätter bilddelarna
med textbeskrivningar som produceras av en konfigurerbar visionsmodell innan
den uppströmsanropet. Detta gör att textbaserade leverantörer kan hantera
multimodala nyttolaster på ett transparent sätt.

Flöde:

1. Hoppa över om målmodellen redan stöder vision (om den inte finns i
   den tvingade bro-listan `isVisionBridgeForcedModel`).
2. Extrahera bilddelar via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerar till **den enhetliga mediedetektorn**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den
   enda sanningskällan som delas med kombinationskompatibilitetsfiltret.
   Extraktion är tillåten för toppnivådelar av formerna
   `replaceImageParts` kan klippa tillbaka (kontraktet extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, och Responses API `input_image`. Nästlade träffar och
   indikator-endast former är material för kombinationsfilter och extraheras aldrig.
   Hoppa över om ingen hittas.
3. Lös runtime-konfiguration via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nya `modalityBridge*`
   inställningsnycklar vinner; äldre `visionBridge*` nycklar förblir en **en-cykel
   fallback** (återställningsfönster). Hoppa över innan någon medietraversering när
   bron är inaktiverad.
4. Modusväljare (`modalityBridgeVisionMode`, se tabellen nedan) avgör
   omdirigering vs beskrivning. Omdirigering returnerar `modifiedPayload` med endast `model`
   utbytt, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivningsväg: begränsa bilder till `maxImages`, komponer den
   uppgiftsmedvetna prompten, konsultera beskrivningscache, anropa visionsmodellen **parallellt**
   (`Promise.allSettled`), och injicera `[Image N]: <description>` textdelar på
   deras plats. En misslyckad beskrivning ger `null` och den ursprungliga bilddelen
   är **bevarad** (#4012) — utom på den kombinerade beskrivningsvägen när varje
   beskrivning misslyckades, där en bekräftad icke-visionsuppströms får en
   `(unavailable — no vision-capable provider connected)` stub istället (#8430).
6. Returnera `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modusväljare (`modalityBridgeVisionMode`)

| Läge       | Standard | Beteende                                                                                                                                                                                                                                                               |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Äldre heuristik, orörd (#6640/#7204): icke-kombinations/`auto/` modeller omdirigerar till den bästa visionsmodellen om inte den ursprungliga modellen redan har användbara referenser (då beskriver den); kombinationsmål beskriver alltid.                            |
| `describe` |          | Beskriv alltid — omdirigeringsblocket hoppar helt över; användarens valda modell svarar alltid.                                                                                                                                                                        |
| `reroute`  |          | Tvinga omdirigering: skyddet för att behålla referensmodellen kringgås. Skyddet för omdirigerings-**mål** gäller fortfarande — när ingen användbar visionsmål finns, faller förfrågan igenom till beskrivning så råa bilder aldrig når en textbaserad backend (#8430). |

Tvingade lägen kortsluter **innan** den automatiska heuristiken körs; `auto` beteende
är byte-identiskt med det pre-PR-1 skyddsräcket.

#### Uppgiftsmedveten beskrivningsprompt (`modalityBridgeVisionTaskAware`)

Standard **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lägger till
texten från **den senaste användarmeddelandet** (avkortad till 500 tecken) till den grundläggande
beskrivningsprompten, vilket styr beskrivningen mot vad användaren faktiskt frågade
(codex-vision-proxy-mönster) och ber visionsmodellen att transkribera synlig
text. Med flaggan av — eller ingen användartext — används den grundläggande prompten oförändrad.

Den beskrivande självslingan av OpenAI-kompatibla begäran (`callVisionModelSingle()` i `visionBridgeHelpers.ts`) begär alltid `image_url.detail: "high"` — ovillkorligt, för varje anropar/leverantör, utan att vara begränsad av någon klientsignal. Lågdetaljprovtagning försämrar OCR-precisionen för just den texttranskription som denna prompt efterfrågar, så den beskrivande anropet begär alltid hög detalj oavsett vilken detaljnivå den ursprungliga inkommande begäran använde. Detta påverkar endast den interna beskrivande begäran; det ändrar inte hur OmniRoute vidarebefordrar anroparens egen `image_url.detail` i den primära begäran — den standarden tillämpas separat, och endast för upptäckta OpenCode-klienter, i `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Den Anthropic wire-format-grenen av den beskrivande självslingan har inget `detail`-fält och påverkas inte av någon standard.

#### Beskriv utdata cap (`modalityBridgeVisionMaxChars`)

| Nyckel                         | Standard | Omfång              |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyder **ingen begränsning** — beskrivningen som returneras av `callVisionModel()` passerar oförändrad, vilket bevarar det befintliga beteendet. Värden inom intervallet 100–50000 trunkerar beskrivningen med en `…` suffix innan den sätts tillbaka som `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`). Höj detta för detaljrika OCR-uppgifter där den nedströms modellen behöver den fullständiga transkriptionen; sänk det för att begränsa tokenanvändningen på pratsamma visionmodeller. Dashboardfältet finns på Vision-flikens avancerade panel (`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) och begränsar alla värden mellan 1 och 99 upp till 100-golvet medan ett explicit `0` förblir orört — `0` är ett giltigt Zod-värde i sig själv (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), inte bara den "obestämda" standarden.

#### Beskriv cache (`modalityBridge/bridgeCache.ts`)

I-minnet LRU + TTL-cache för beskrivningsutdata, delad process-omfattande. Nyckel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med längd-prefix inramning (inga fältgränskollisioner). Modellkomponenten är den **konfigurerade** bryggmodellen, inte den modell som faktiskt svarade — `callVisionModel` kan falla tillbaka internt, och nyckling per försök skulle fragmentera cachen. Misslyckade beskrivningar cachas aldrig. Inställningar:

| Nyckel                          | Standard | Omfång  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalisering av fjärrbilder (självslinga beskrivning/base64 hämtning)

När bryggan hämtar en **fjärr** bild själv — den Anthropic beskrivande själv-anropet och claude-wire-format base64-konverteringen (`ensureBase64ImagesForClaudeWire`), båda via `fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — passerar den resulterande data-URI genom `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) innan den bäddas in i vision-modellens begäran. Överdimensionerade bilder skalas ner till en **2048px lång kant** (som matchar den storleksbegränsning som OpenAI/Anthropic redan tillämpar server-sidan), vilket minskar uppladdningsbyte/latenstid utan att ändra vad visionmodellen ser. Ändring av storlek använder `sharp`, laddad via dynamisk import: på en plattform där dess inbyggda binärfil misslyckas med att laddas, **kastar aldrig** `normalizeDataUri()` — den faller tillbaka till en genomgång av de ursprungliga bytena, så beskrivnings/base64-konverteringsvägen fungerar alltid. Icke-bildbyten (en hämtning som inte returnerade en avkodbar bild) passerar också oförändrade. Denna normalisering är begränsad till bilder som bryggan hämtar för sitt eget själv-anrop — den tillämpas aldrig på anroparens råa genomgångslast, i enlighet med principen om opt-in-endast mutation (Hård Regel #20).

#### Inställningsschema + migrering

De nya `modalityBridge*` nycklarna valideras med Zod i `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, den `modalityBridgeCache*` trio, och gruppen `modalityBridgeAudio*` som används av Audio Bridge. Migrering `141_modality_bridge_settings.sql` kopierar befintliga legacy `visionBridge*` värden till de matchande nya nycklarna (idempotent, skriver aldrig över ett operatörsinställt `modalityBridge*` värde); de legacy nycklarna förblir accepterade som en läsbackfall för en releasecykel.

#### Transparenshuvud + statistik

Beskrivna-transformerade svar bär `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (byggd av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`, stämplad av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`). Omdirigerade begärningar får **inga** huvuden — nyttolasten var oförändrad och modellbytet är redan synligt i svarskroppens `model`-fält.

`GET /api/modality-bridge/stats` (hanteringsautentisering, samma nivå som `GET /api/settings`) returnerar de i-minnet per-modality räknarna `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` för `vision`, `audio`, och `video`. `averageLatencyMs` använder `latencySamples`, inte alla försök, som sin nämnare; en operation utan tidtagning fabricerar inte ett noll-millisekund prov. `bridged` förblir den bakåtkompatibla aliasen för framgångsrika konverteringar; misslyckade försök ökar inte den. Räknarna återställs vid processstart av design (telemetri, inte redovisning).

#### Dashboardkonfiguration

Den dedikerade instrumentpanelen är
`/dashboard/settings/modality-bridge`. Dess URL-adresserbara flikar `Vision`, `Audio`
och `Video` bevarar frågeparametrar medan de växlar värdet på `tab`.
Vision-fliken visar aktivering, läge, modellval (inklusive den automatiska
standarden), uppgiftsmedveten prompting, avancerade tidsgränser/bild/beskrivningslängd/cache
gränser, körning
räknare och en skyddad exempelbegäran. Audio-fliken är också aktiv: den visar
aktivering, en STT-endast modellväljare med Auto, tidsgräns/max-klipp gränser, ljud
räknare och ett `input_audio` exempeltest. Video-fliken är funktionell: den rapporterar
FFmpeg/ffprobe körningstillstånd — en av fyra explicita UI-tillstånd (`unknown` medan
proben är under behandling eller kunde inte slutföras, `restricted` på en icke-loopback
instrumentpanelvärd där proben hoppar över klient-sidan, `unavailable` när den har
probat och bekräftats saknas, eller `available` med FFmpeg/ffprobe-versionerna) — kvarstår
aktivera/modell/ram/video/tidsgränsgränser, filtrerar modellväljaren till vision-kompatibla
modeller och visar videoräknare.

Det tidigare Vision Bridge-kortet under AI-inställningar är en kompatibilitetslänk till den
nya sidan; det äger inte längre en andra kopia av formuläret. Media Providers länkar också
Image-to-Text och Speech-to-Text arbetsflöden till motsvarande Modality
Bridge-flikar utan att ta bort den befintliga Speech-to-Text-lekplatsen.

**Självloopens godkännande omväg:** när beskrivningsanropet ruttas genom OmniRoute's
egen `/v1` självloop (icke-standard leverantörsmodell), skickar delbegäran
`x-omniroute-admission-bypass: internal` och autentiseras med den lösta
självloopens referens — den lokala `sk_omniroute` vakten i lokal läge, eller den
operatörskonfigurerade `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` miljönyckeln (#1350) så
`REQUIRE_API_KEY=true` distributioner fortfarande kan köra beskrivningsanropet. Omvägen
erkänns endast för dessa exakta referenser, så externa klienter kan inte använda
huvudet för att hoppa över godkännande.

Legacy-standarder finns i `src/shared/constants/visionBridgeDefaults.ts`; de
nya läge/uppgiftsmedvetna/cache-standarderna och inställningslösaren finns i
`src/shared/constants/modalityBridgeDefaults.ts`. Skyddsräcket visar en
`deps` konstruktörsalternativ så tester kan injicera falska `getSettings` och
`callVisionModel` implementationer.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fångar ljudbärande chatanrop innan de når ett mål som inte är
känt för att acceptera ljudinmatning. Det omdirigerar aldrig chatanropet: ljuddelar
transkriberas genom den befintliga OpenAI-kompatibla multipart-endpointen och den
valda chattmodellen fortsätter med texttranskriptioner.

Flöde:

1. Lös `supportsAudio` genom `getResolvedModelCapabilities()`. Explicit
   leverantörsregistermetadata vinner, sedan statisk modellmetadata, sedan synkroniserad
   `modalities_input`. En deklarerad inmatningslista utan `audio` är `false`; ingen
   kapabilitetsbevis förblir `null`. Både `false` och `null` aktiverar den
   konservativa bron, medan `true` omgår den.
2. Lös `modalityBridgeAudio*` inställningar och extrahera splicebara toppnivå
   ljuddelar från varje meddelande genom den delade `detectMediaParts()`
   detektorn. Stödda trådmönster är OpenAI `input_audio`, `audio_url`, och
   `source.media_type: "audio/*"`. Nedsänkt ljud upptäckts för ruttning men tas inte
   bort av splice-vägen. Arbetet begränsas av `modalityBridgeAudioMaxClips`;
   senare delar förblir oförändrade.
3. Respektera en konfigurerad `provider/model`, eller låt `selectAudioBridgeModel()`
   gå igenom `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalogordning och välja den första
   modellen med en användbar aktiv leverantörsreferens.
4. `callAudioTranscription()` konverterar base64/data-URI ljud till en multipart
   `file`, eller laddar ner en fjärr `audio_url` genom den offentliga endast utgående
   skyddet med DNS-pinning och en 25 MB gräns. Det POSTar sedan filen och den valda
   modellen till den lokala `/v1/audio/transcriptions` självloopen, autentiserad med
   `resolveSelfLoopBearer()`. Den befintliga transkriptionsvägen utför normal
   referenssökning, cooldown/taktgränshantering och leverantörsdispatche.
5. Framgångsrika anrop ersätter sina delar med `[Audio N]: <transcript>`. Anrop
   körs med `Promise.allSettled`: ett individuellt misslyckande bevarar den ursprungliga
   ljuddelen (#4012 kontrakt). Om varje anrop misslyckas och målet bevisas
   `supportsAudio === false`, blir delarna
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 kontrakt). För
   ett okänt mål (`null`), förblir ett allt-misslyckande resultat oförändrat. Ett bevisat
   text-endast mål utan användbar STT-referens får samma explicita stub utan att utfärda
   ett nätverksanrop.

Framgångsrika transkriptioner använder den processomfattande Modality Bridge LRU/TTL-cachen. Nyckeln kombinerar ljudreferensen, den stabila `audio-transcription` operationsetiketten och den valda STT-modellen; misslyckanden cachas aldrig. Ljudförsök uppdaterar de delade `bridged`, `cacheHits`, `failures`, och `lastUsedAt` räknarna.
Transformera svar bär
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; oförändrade
begärningar får inte en Audio Bridge-segment.

Körningsinställningar är DB-backade och Zod-validerade:

| Nyckel                        | Standard | Omfång            |
| ----------------------------- | -------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                 |
| `modalityBridgeAudioModel`    | `""`     | Auto eller STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10              |

Den delade cachen förblir kontrollerad av `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, och `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptar toppnivå videodelar i Chat Completions `messages` och Responses
API `input` innan en måltavla utan känd inbyggd videosupport anropas.
Stödda former är `input_video`, `video_url`, `video_source`, HTTPS-URL:er,
och `data:video/*;base64,...` data-URI:er. Vanliga filnamn i text behandlas inte
som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ansvarar för begärans traversering, kapabilitets-/policykontroll, per-begäran aggregering och svarspayload.
Per-video arbete — förvärv, hela resultatcache, beskrivning av en bildsekvens
(som sammanfogar en anropad ljudtranskript), och per-försök
metrik/abort/rensning — döljs bakom `processVideoPart` i
`videoBridgePipeline.ts`, som anropas en gång per videodel inuti `preCall`'s loop.
Den modulen definierar också de explicita portgränserna `VideoMediaBrokerPort`
(förvärv av byte och extrahering av provade bilder), `VideoAudioTranscriptionPort`
(sammanfoga en anropad ljudtranskript med de provade undertexterna), och
`VideoDrilldownPort` (den äldre råbutiksformen). Produktion STT och bildbevarande
komponeras runt den beskrivande porten genom `createVideoSttAdapter` och
`createVideoDrilldownAdapter`; den senare använder den delade opaka-handelslivscykeln.

Den offentliga `/v1` begärans väg importerar eller anropar aldrig en subprocess. Fjärrvideor laddas ner under en gräns på 50 MiB; inlinje base64-videor har en
konservativ gräns på 36 MiB avkodad per video så att modellen/budskapen/ramen
kan förbli inom den offentliga JSON-begärans antagningsgränsen på 50 MiB. Inline
längd och avkodad storleksuppskattningar kontrolleras innan allokering. HTTPS är
krävs på den initiala fjärr-URL:en och varje omdirigering, med hjälp av den befintliga
offentliga endast utgående skyddet med DNS-pinning. Bytes korsar sedan den exakta interna
`POST /api/modality-bridge/video/extract` mäklargränsen. Den vägen är både
`LOCAL_ONLY` och `SPAWN_CAPABLE`, accepterar endast en per-process autentiserad,
betrodd loopback-begäran, och accepterar aldrig en URL, filsystemväg, körbar,
eller argumentlista. API kroppsstorlekspipeline och hanterarens inkrementella kropp
läsare upprätthåller oberoende en 50 MiB mäklarinmatningsgräns. Dess begränsade kö kör
en extraktion i taget, tillåter fyra väntande jobb, och begränsar väntande inmatning till
100 MiB.

Inuti mäklaren läser `ffprobe` en privat lokal fil; den fasta format
tillåtelselistan utesluter spellistor och manifestformat. För tillåtna MOV-familj
behållare förblir externa MOV-datareferenser inaktiverade som standard, och den
fasta kommandot väljer inte in dem. Både `ffprobe` och `ffmpeg` använder
`file`-endast protokoll vitlistor, en tråd, fasta argumentarrayer, ingen shell,
och körbara som löses från `PATH`. Bilduppläggningsströmmande bilder är inte
spelbara kandidater. Alla spelbara strömmar måste uppfylla gränserna, och en
explisit standardström föredras före den deterministiska lägsta index
fallback. Videor är begränsade till 600 sekunder, 8,192 pixlar per dimension, och
33,554,432 källpixlar. FFmpeg tar prover av 1–16 mittpunkt JPEG-ramar, skalar ner
den långa kanten till högst 1,024 pixlar utan att uppskala mindre inmatningar, och
mottar aldrig en URL. Provtagning är `uniform` som standard. De valfria
`scene_aware` och experimentella `segment_aware` policyerna utför ett ytterligare
fast FFmpeg-pass över den redan validerade lokala strömmen, väljer begränsade
`showinfo` scenstämplar, och faller deterministiskt tillbaka till samma
uniforma mittpunkter vid detektorfel, tidsgräns, felaktig utdata, eller en tom
kandidatsats. Segmentmedveten läge allokerar mittpunktsprover proportionellt till
de validerade scenintervallen; segmentmedveten bevis och fallback-beteende är
detaljerade nedan. Den hårda 16-ramarsgränsen tillämpas
efter urval i varje policy. När en scenmedveten begäran har endast en
en-ramarsbudget, använder den den uniforma mittpunkten av den aktiva full-video eller fokus
fönster och rapporterar `policyEffective: uniform`: en enda vald scenram
kan inte bevara båda temporala ändar. En anropare kan valfritt tillhandahålla en
slutlig fokusfönster (`start`/`end` sekunder); gränserna kläms till mediedurationen, omvända eller icke-slutliga fönster avvisas, och alla provtagnings
policyer utförs endast inom det normaliserade intervallet. Det resulterande
fönstret inkluderas i provtagningsmetadata och i den icke-betrodda beskrivningen
prefix så att nedströms modeller kan särskilja ett fokuserat utdrag från hela
tidslinjen.

Semantisk undertextfokus är en separat, explicit inställning. Den
standard `full` analysläget bevarar den befintliga ram-prompten och vidarebefordrar aldrig begärningstext till undertextmodellen. I `focused` läge läser bron endast den senaste
icke-tomma användarskapade `text`/`input_text` från samma Chat eller Responses
behållare, normaliserar den till NFC, kollapsar kontrolltecken och vita utrymmen,
och begränsar den till 500 Unicode-kodpunkter. Ett tomt resultat faller tillbaka till den
exakta `full` prompten. En användbar hint serialiseras som JSON i en dedikerad
icke-betrodd-användarkontextblock och får endast prioritera observerbara detaljer; den
kan inte åsidosätta den separata varningen mot att följa instruktioner som är synliga
eller hörbara i mediet. Textfokus infererar aldrig `start`/`end` eller ändrar
den temporala provtagaren.

#### FU-07 strukturell segmentbevis

`segment_aware` använder ett begränsat föranalyspass över den redan validerade
lokala videoströmmen. Den fasta filterkedjan skalar först till högst 320 pixlar
bred, upptäcker scenförändringar och frysta intervall, och provtar sedan med 1 ram per
sekund för suddighet, genomsnittlig luma och spatial/temporal information. Passet är
begränsat till 600 strukturella prover, en FFmpeg/filtertråd, samma
`file`-endast protokoll och behållartillåtelse, en 1 MiB process-output gräns,
och högst 30 sekunder inuti mäklarens delade abort/tidsgräns. Det accepterar aldrig
ett kommando, filter, väg eller URL från begäran.

De strukturella värdena är deterministiska provbevis, inte semantisk videoförståelse. De infererar inte ämnen, handlingar, bildtexter, tal eller användarintention. Scen- och frysningsgränser bildar segment; frysningsövervakning, suddighet, exponering, spatial detalj och temporär förändring påverkar endast hur den befintliga 1–16 bildramars budget fördelas. Ett helt fryst segment är begränsat till en bildram, medan icke-frysta segment tävlar om den återstående budgeten. När gränser överstiger bildramar, behålls en enhetlig tidslinjeövervakning så att snabba tidiga klipp inte kan dölja ett långt efterföljande segment. Scengränser inom den 1-sekunders analysupplösningen av en frysningsgräns sammanfogas.

Saknade filter, felaktiga/tomma bevis, ett detektorfel eller den begränsade föranalys-tidsgränsen misslyckas med att öppna till den exakta enhetliga mittpunktsprincipen. En avbrytning från anroparen eller en deadline för mäklaren misslyckas inte med att öppna: den avslutar den pågående subprocessen, förhindrar senare bildramsextraktion och det privata temporära trädet tas bort i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererar deterministiska verkliga FFmpeg-fixeringar för post-deduplicering av bildtextkostnader, tät rörelsebudgetfördelning, suddighet/exponering/SI-TI-bevis, snabba klipp med en lång svans och gradvisa falska positiva. Den registrerar föranalys väggtid och, där `/usr/bin/time` är tillgängligt, barn-CPU och topp RSS. Dess kvalitetskontroller är endast strukturella orakler. Verklig kvalitet på bildtextmodellen förblir `HOLD` eftersom denna anordning inte har någon auktoriserad slutpunkt eller fryst domare. Monetära besparingar förblir också `HOLD` om inte `--caption-cost-per-call-usd` tillhandahåller en uttrycklig positiv uppskattning per samtal; skriptet fabricerar aldrig något av resultaten.

Varje bildram är begränsad till 4 MiB, alla råa bildramar tillsammans till 23 MiB, och det serialiserade mäklarresponsen till 32 MiB. En privat temporär katalog tas bort i `finally`. OmniRoute paketerar inte FFmpeg och accepterar inte en anpassad körbar sökväg. Innan bildtextning tillämpas bron en konservativ visuell dedupliceringspass: varje JPEG reduceras till en 16×16 gråskala-buffer och jämförs endast med den senaste behållna bildramen. För en begärd bildtextbudget över en bildram, tillhandahåller extraktionen en begränsad kandidatpool på upp till dubbelt så stor budget och aldrig mer än 16 bildramar. Den begärda gränsen tillämpas endast efter deduplicering, med de första och sista valda kandidaterna bevarade under den slutliga tunnandet när budgeten är minst två. Den versionerade `grayscale-16x16-mean-cells-v2` policyn använder den större av medelluma-delta och förhållandet av miniatyrcells vars normaliserade delta är minst 0.05. Duplicattröskeln är konstanten 0.04, vald för förutsägbarhet snarare än exponerad som en körinställning. Denna sekundära högkontrastsignal bevarar små rörelser och synliga textförändringar som enbart medeljämförelse kan dölja. Jämförare eller avkodningsfel misslyckas med att öppna och behåller täckning. Utdata metadata separerar extraherade kandidater, framgångsrikt använda bildramar och visuella dubbletter som har tagits bort.

En uttryckligen markerad videodel kan begära ett tidsstämplat kontaktblad. Bron bygger högst ett 4-kolumners, 16-bildramars JPEG-galler. Varje 512-pixelcell bränner sin källtidsstämpel i ett högkontrast bottenband, medan samma tidsstämplar förblir i textmetadata för nedströms koppling och revision. Den kompletta JPEG förblir begränsad till 32 MiB. Om `sharp` inte kan avkoda eller kompilera galleriet, faller bron tillbaka till de individuella JPEG-bildramarna; en avbrytning från klienten sprider sig fortfarande genom bladoperationen.

Främjande bevis är avsiktligt separerat från den syntetiska kompositionsmikrobänkningen. `scripts/perf/video-bridge-contact-sheet-eval.ts` definierar en schema-versionerad A/B-anordning för verkliga OpenAI-kompatibla visionsmodeller. Den mäter leverantörsrapporterade tokens, end-to-end vägglatens (inklusive bladkomposition), modell-anropantal och manifest-definierad faktabevarande. Råa modellrespons skrivs inte till rapporten; endast SHA-256-digester och matchade fakt-ID:n bevaras. Anordningen gör inga nätverks- eller betalda modellanrop om inte `--execute-real` passerar och `--model`, `OMNIROUTE_BASE_URL` och `OMNIROUTE_API_KEY` är konfigurerade. Utan den explicita verkliga körningen förblir dess maskinläsbara dom `HOLD`; syntetiska nyttolaster/anropantal-mätningar ensamma är inte främjande bevis.

Den separata `scripts/perf/video-bridge-promotion-eval.ts` konsumerar FU-07 eller FU-09 observationer. Främjande antagande kräver alla åtta syntetiska scenariokategorier plus en sanerad verklig klipp, minst tre mätta upprepningar per roll och fall, alla tio deklarerade mätvärden, frysta medier/promptar/förväntade faktum/inställningar-digester, unika observations-ID:n och verifierad sådd A/B-ordning. Exekveringskvittot binder corpus-digester, exakt kandidat-SHA och modellrevision. Saknade eller ogiltiga mätningar förblir `HOLD`, inklusive CPU över 30 s, topp RSS över 512 MiB eller föranalys över 30 s. Dessa är bevis-antagningsgränser, inte en ny kör-RSS-verkställighetsgaranti.

FU-07 kräver minst 98% kvalitetsbevarande och p95-latens inte mer än 1.2x baslinje, plus antingen en 0.05 absolut fallbalanserad medelåterkallande förbättring vid motsvarande medelbildtextanrop, eller minst 10% färre medelpost-deduplicerade bildtextanrop. FU-09 kräver minst 0.85 kvalitet, 95% bevarande, 20% p95 latensreduktion och 10% tokenreduktion. Kritisk faktaförlust, injektionsöverensstämmelse eller saknad användning förhindrar främjande. En exekvering kan inte främja något: `--previous-report` bekräftar två distinkta, icke-överlappande, konsekutivt berättigade exekveringar av samma policy/modellrevision/kandidat/corpus. Ett provtagningsexperiment kan inte bekräfta ett kontaktbladsexperiment.

Samlarna bör poängsätta svar i minnet och spara `responseDigest` plus
metrik och observationsbindningar, aldrig svarstext. Konsumenten läser också
ärvda råobservationer men kopierar aldrig den texten till sina rapporter. Exakt
ett av `responseDigest` eller `rawResponseText` accepteras för varje observation.
Den versionerade tillåtna listan förblir tom med en oföränderlig `hold` standard. En
berättigad post kräver sin bevisreferens, policy, modellrevision, exakt
kandidat SHA, manifestdigest och två distinkta kör-ID; konfliktande kontexter
avvisas. Dessa metadata är ett revisionskontrakt, inte bevis på att en refererad
fil innehåller äkta mätningar. Granska de faktiska kvittona innan du lägger till
någon post. Statistikslutpunkten för hantering och videodashbordet visar
konservativ beredskap. En konfigurerad modellalias ensam fastställer inte dess
revision eller den körande kandidat SHA, så den aktuella instrumentpanelen rapporterar
`HOLD` istället för att återanvända berättigande från en annan exekveringskontext.
Explicit experimentell urval förblir separat från befordran; ingen standard ändras
automatiskt.

Anroparna kan bifoga en valfri `transcript.cues`-array till en stödd videodel
när de redan har anpassad text. Varje cue måste innehålla `text`, ett
avgränsat `start`/`end` intervall inom den undersökta varaktigheten, och en
vitlistad `source` (`client`, `embedded` eller `audio-bridge`); `confidence`
standardiseras till `1` och måste förbli mellan `0` och `1`. Exakta dubbletter
av cues slås ihop. OmniRoute startar aldrig transkription från dessa metadata:
validerade cues kopieras in i det beskrivna resultatet med källa, förtroende och
intervall, och renderas som otillförlitliga observationer tillsammans med
ramtexterna. Ogiltig, utanför räckvidd, eller ursprungsfri text avvisas istället
för att blandas in i textströmmen. Båda begärningskroppens transkriptkanaler
normaliserar tillhandahållen ursprung till `client`, inklusive själv-uttalad
`embedded` eller `audio-bridge` etiketter. Endast en serverägd adapter kan
tilldela dessa betrodda etiketter genom det kodendast `trustedSource` argumentet;
ett begärnings JSON-fält kan inte nå det argumentet. Transkripttext förblir
otillförlitligt medieavledt innehåll, oavsett dess ursprung, och får aldrig
bestämma auktorisation.

En avancerad anropar kan tillhandahålla en `audioTranscript`-spår för samma
video; det behandlas som klient-tillhandahållen text, inte bevis på servertranskription.
Fusionsfogen kör visuella och ljudobservationer under
en deadline och abortsignal, ordnar dem på en gemensam tidslinje, slår ihop
exakta dubbletter och rapporterar ett delresultat när endast en sida lyckas.
En ogiltig `audioTranscript` degraderas till det delresultatet — den visuella
beskrivningen behålls och ljudgrenen registrerar en sanerad felkod —
istället för att misslyckas med hela videon. Per-gren tillgänglighet, delflaggan,
och de sanerade felkoderna bevaras i det beskrivna resultatet, i
skyddsmetadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i resultat-cachemetadata, och i brofusionräknarna.
Den standardiserade Video Bridge-sökvägen anropar inte tal-till-text
eller laddar ner en andra mediekopia; utan det explicita spåret förblir det
endast video.

**Transkriptbevarande (#12150 P1).** Detta tillämpas automatiskt när
Video Bridge (själv opt-in) renderar en transkriptcue — det finns ingen separat
bevarande flagga. När en begäran renderar någon transkriptcue (en
anropar-deklarerad `transcript` eller en fusionerad `audioTranscript`),
markerar skyddet den som `videoBridgeObserved` och producerar en redigerad
skugga av videobeskrivningen — en identisk rendering där varje cues
fritekstkropp ersätts med `[redacted-video-transcript]`, byggd genom att
ersätta det strukturerade cue-fältet innan strängen sätts ihop (aldrig genom
att parsa den platta texten, så inget cue-innehåll — fientligt eller vanligt,
inklusive kroppar som innehåller `]` såsom `[inaudible]`/`[music]` — kan överleva).
Den bevarade anropsloggen byter ut varje video-avledd textdel mot den
redigerade skuggan, matchad efter innehållsegalitet; `fullText`-ankaret
läses om från den färdiga pre-call skyddspayloaden, så matchningen lyckas
fortfarande efter senare kedjeskydd (PII och
credential maskers, prioriteter 10/95) skriver om beskrivningstexten på plats och
efter system-prompt/överlämning/minnesinjektion omformar meddelandearrayen. Den
kropp som skickas uppströms till modellen är oförändrad. En observerad begäran
fyller inte heller något hållbart minne (både begärnings- och
svar-avledda extraktioner hoppar över), så modellens eget svar kan inte
återspegla transkripttext i minnet.

**Råvideofält (#12430).** När bron är aktiverad och inhemskt videosupport är okänt eller
frånvarande, aktiverar definierade `transcript`/`audioTranscript` fält också
`videoBridgeObserved`, även efter beskrivningsfel eller en `maxVideos`-gräns.
`null` och tomma strängar räknas; frånvarande fält och icke-videometadata gör det inte.
Bevarade kopior redigerar dessa fält eller utelämnar begäran, och cache/minne
bypassas. Leverantörens payload förblir oförändrad.

Ytterligare bevarade kopior använder samma observerade-begäransignal. Den råa
pre-skyddsklientbegäransnapshot, i minnet väntande begäran, och tidig
avvisad-begäran-logg strukturellt ersätter transkriptfälten i videodelar;
strängprompter som syntetiseras av pipeline-steg och kontextöverlämning
redigeras vid den bevarade-begärningskroppens sänka. Den bevarade
`video_content_removed`-markören gör att `previous_response_id`-fortsättningen
misslyckas stängt istället för att rekonstruera text som avsiktligt
kastades bort. Om en observerad begäran förlorar sin per-del redigeringsskugga
innan loggning, eller till och med en av flera videoskuggor misslyckas med att
matcha efter senare begärningsmutationer, utelämnas den bevarade begärningskroppen
helt istället för att behålla ett delvis redigerat transkript.

För en observerad begäran kan ett modellrespons citera vilken del av transkriptet som helst utan en strukturerad cue-gräns. Dess kvarhållna anropslogg `responseBody` ersätts därför av en utelämningsmarkör; den detaljerade pipeline-artikeln (som kan inkludera upstream/klientkroppar och stream-chunks) behålls inte. Semantiska, idempotens- och resonansåterspelningscachear kringgår läsningar och skrivningar för den begäran. Leverantörens begäran och klient-synliga svar förblir oförändrade. Tidiga keepalive-bytes dräneras från den temporära bufferten när den detaljerade artikeln utelämnas. Kiros felaktiga EventStream-varning rapporterar endast payload-byteantalet, aldrig dess innehåll eller JSON-parserns råa fel.

Detta påstår inte att varje orelaterad leverantör/plugin-diagnos har granskats; den bredare behållna-sink-svepningen spåras i #11658.

Den interna `/api/modality-bridge/video/drilldown` livscykeln är en separat, loopback/token-autentiserad cache-substrat. Varje operation kräver också en kanonisk opak huvud-ID. Innan en produktionsanropare aktiveras måste den härleda det ID:t från den autentiserade hyresgästen och får aldrig vidarebefordra ett klientvalt värde. Cache-nycklar binder det huvudet till kanoniska session- och video-referens-ID:n, lagrar endast deras SHA-256-härledda nycklar och begränsar både läsningar och radering till samma huvud. Cachen lagrar högst 16 härledda JPEG-ramar per post, går ut efter tio minuter och stöder begränsade `start`/`end` läsningar eller explicit sessionsradering.

Varje huvud är begränsat till 16 poster och 64 MiB av kanonisk JPEG-data. Dessa gränser är oberoende av den globala 64-poster/256 MiB taket: huvudkvottryck evakuerar endast det huvuds senaste använda poster innan global LRU-evakuering övervägs. Utgångna poster sveps bort från både huvud- och global redovisning vid cache-aktivitet, medan avbokning och valideringsfel inte åtar en partiell ersättning.

Cachen avvisar icke-kanonisk Base64, överflödig padding, icke-JPEG-media, felaktiga eller avklippta JPEG:er, och JPEG:er som ger en varning under en begränsad fullbild `sharp` avkodning. Den omkodar varje accepterad bild som en kanonisk JPEG, härleder bredd och höjd från de avkodade bytena istället för att lita på anropsfält, och kassera eventuella efterföljande polyglot-bytes istället för att behålla dem. Endast den begränsade kanoniska komprimerade bufferten debiteras båda kvoter. JSON-trådlängden inkluderar Base64-overhead för den 32 MiB avkodade-ingångstaket. Varje lagrad härledning registrerar sitt validerade JPEG-format/upplösning, samplingspolicy, härdningsversion, skapelsestid, serverberäknad innehållshash och hashad föräldrareferens plus den betrodda anroparens föräldra-innehållshash. Avbokning kontrolleras mellan asynkrona avkodnings/hash-faser innan den atomiska cache-åtagandet.

Produktionens producent återanvänder redan-härledda mäklar-ramar endast efter framgångsrik visuell analys, utan andra videonedladdningar/utvinningar. Den kräver operatör `modalityBridgeVideoDrilldownEnabled=true`, strikt per-del `drilldown: true`, och en autentiserad API-nyckel post-ID. Klientdeklarerade huvud/session-värden etablerar aldrig ägarskap. Utan alla tre villkor hash, ändrar storlek eller behåller ytterligare ramar. Bevarande misslyckande bevarar det användbara visuella svaret. Samtyckta begärningar kringgår hela-videons resultatcache så cachade resultat återspelar aldrig hanterar.

Framgångsrika JSON- och SSE-svar exponerar högst fyra opaka hanterare i den begränsade `x-omniroute-video-drilldown` rubriken. Auktoriserade webbläsarursprung kan läsa den rubriken utan att bredda CORS ursprungs policyn. Nya hanterare använder `v1.<32-byte random base64url token>`, och registret behåller endast deras SHA-256-hashar. Läsaren/rubrikparsern accepterar också arv 64-hex hanterare. Den autentiserade offentliga konsumenten är `GET /api/v1/video-bridge/drilldown?handle=...`, oberoende kontrollerad av `modalityBridgeVideoDrilldownRemoteEnabled=true`. Explicit kvarhållen falsk återkallar åtkomst även när den arv `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env fallback är aktiverad. Produktionsbevarande har den analogiska arv `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Båda fallbacken är som standard avstängda.

Konsumenten härleder ägarskap från den autentiserade nyckeln, tillämpar nyckelpolicy och returnerar samma 404 för okända, utgångna och en annan nyckels hanterare. Den accepterar `variant=preview|standard|detail` (maximal JPEG-dimension 320/640/1280, aldrig uppskalat), `limit=1..8` (eller den arv `frames` alias, aldrig båda), noll-baserad `page`, och valfri `start`/`end` fokus sekunder. Duplicerade fråge-nycklar och omvända fokusfönster avvisas. Varje returnerad variant har en hash av sitt faktiska innehåll och faktisk upplösningsmetadata, kopplad till den kvarhållna källan. Varianter härleds vid läsning snarare än lagras som extra kvarhållna kopior. JSON-svaret, inklusive Base64/kuvert, är begränsat till 32 MiB; en överdimensionerad sida returnerar 413 och klienten måste begära färre ramar. Läsningar kontrollerar avbokning runt varje storleksändring och kontrollerar giltigheten av hanteraren innan de returnerar. `DELETE` av ägaren är idempotent; radering eller TTL-utgång frigör den kvarhållna källan och användningsredovisningen.

Den delade lagringen är process-lokal: hanterare går ut vid omstart och är inte överförbara mellan oberoende OmniRoute-processer. Hanteringsstatistik exponerar effektiv bevarande/remote-policy och aggregerade kvarhållna poster/bytes endast, aldrig media, referenser, huvud-ID:n eller hanterare. Videoinställningspanelen visar dessa värden och kan bevara båda samtyckesväxlar. Denna implementationsdokumentation är inte bevis på live-distribution eller marknadsföring; verklig modellacceptans spåras separat.

Frames är numrerade sekventiellt med den konfigurerade Video-modellen. En tom Video-överskrivning ärver Vision-inställningen; om båda är tomma väljer Vision auto-router den effektiva vision-kapabla modellen. Framgångsrika bildtexter ersätter den ursprungliga delen med ett stabilt `[Video description:` prefix som också markerar texten som en otillförlitlig medieavledd observation och berättar för nedströmsmodeller att inte följa instruktioner som finns i mediet. Cache-nycklar för bildtext inkluderar JPEG-bytes, prompt, tidsstämpel och effektiv modell; endast framgångsrika bildtexter cachas. Cache-poster behåller den faktiska framgångsrika producentmodellen, inklusive en fallback-modell; bron rapporterar `mixed` när olika bilder producerades av olika modeller. En cache-tre träff återanvänder den producentidentiteten istället för att ometikettera den som den begärda routingplanen. Hela videoresultat-cachen är nycklad på varje indata som ändrar utdata — prompt, effektiv modell, samplingpolicy, bildantal, semantisk analysläge, SHA-256 fingeravtryck av den normaliserade fokusledtråden, fokusfönster, `transcript`, `audioTranscript`, och kontaktbladflaggan — så att ändra någon av dessa dimensioner är en cache-miss, aldrig en gammal återanvändning. Den visuella dedup-policyversionen, tröskeln och det begränsade kandidatbildantalet är också explicita i resultat-cache-nyckeln och metadata; en policyändring kan därför inte återanvända en gammal hela video-beskrivning. Resultat-cache v4 metadata behåller läget och fingeravtrycket, aldrig den råa användartasken. Guardrail-metadata rapporterar både de begärda och effektiva analyslägena; ett begärt `focused` läge utan användbar användartext rapporteras som effektivt `full`.

Guardrail extraherar varje stödd videodel men beskriver inte mer än `modalityBridgeVideoMaxVideos`. För ett mål som visat sig ha `supportsVideo === false`, blir misslyckade och övergränsade videor explicita säkra textmarkörer så att ingen rå video överlever. När kapabiliteten är okänd förblir dessa delar orörda. Mål med `supportsVideo === true` kringgår bron. Klientens begäran avbrytsignal sprider sig genom nedladdning, mäklarkö, subprocesser och bildtextanrop; avbrott stoppar mellan videor och misslyckas aldrig öppet till rå media.

Körinställningar är DB-backade och Zod-validerade:

| Nyckel                              | Standard    | Omfång / beteende                                                                                         |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valfri körning, opt-in                                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` bevarar generiska bildtexter; `focused` använder begränsad, otillförlitlig senaste användarkontext |
| `modalityBridgeVideoModel`          | `""`        | Ärva Vision Bridge-modellen                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, eller proportionell `segment_aware`; detektorfel faller tillbaka till `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                            |

Äldre kvarhållna Video timeout-värden över 120 sekunder begränsas till mäklarens deadline; nya inställningar som skrivs över den gränsen avvisas. `GET /api/modality-bridge/video/runtime` kräver betrodd stämplad loopback-lokalitet före autentisering eller körningsprobering, och kräver sedan hanteringsautentisering. Den returnerar endast `available`, sanerade FFmpeg/ffprobe-versioner, och ett fast skäl när körningen inte är tillgänglig. Den interna extraktionspunkten är inte en offentlig uppladdnings-API: kömättnad returnerar `503` plus `Retry-After`, en frånkoppling av anroparen returnerar `499`, och den fasta mäklarens deadline returnerar `504`. Konverterade svar lägger till `video->text;model=<visionModel>;parts=<videos>` till den centrala `x-omniroute-modality-bridge`-huvudet utan att ta bort Vision eller Ljudsegment.

### PII Masker (`piiMasker.ts`)

Körs på **båda** stadier.

- **`preCall`** klonar nyttolasten, går igenom `system`, `messages`, `input`, och `prompt` (inklusive vanliga strängobjekt), och tillämpar `processPII()` (från `@/shared/utils/inputSanitizer`) på sträng `content`/`text` fält. När `PII_REDACTION_ENABLED=true`, redigeras detekterad PII i den utgående nyttolasten. Detta är oberoende av `INPUT_SANITIZER_MODE` (som endast kontrollerar prompt-injektionspolicy). När redigering är avstängd, registrerar anropet detektionsräkningar utan att skriva om innehållet.
- **`postCall`** djupklonar svaret, kör `sanitizePIIResponse()` plus Responses-API-formmasker (`maskResponsesOutput` — täcker `output_text` och `output[].content[].text`). Om någon redigering sker, ersätter det modifierade svaret det ursprungliga.

Guardrail blockerar aldrig; den annoterar endast (`meta.detections`, `meta.redacted`) eller skriver om.

### Prompt Injection (`promptInjection.ts`)

Detekterar fientliga strukturer i användartillhandahållet innehåll och verkställer den konfigurerade policyn. Beteendet styrs av miljövariabler och konstruktörsalternativ:

| Inställning  | Miljövariabel                                                                                             | Standard | Effekt                                                                                                                                                                                          |
| ------------ | --------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiverad    | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`   | När `false`, kortsluter skyddsräcket.                                                                                                                                                           |
| Läge         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`   | Injektionspolicy: `block`, `warn` eller `log`. (`redact` accepteras för bakåtkompatibilitet men tar **inte** bort injektionstext; begäran om PII-omskrivning styrs av `PII_REDACTION_ENABLED`.) |
| Blocktröskel | `blockThreshold` alternativ / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minsta allvarlighetsgrad som krävs för att blockera. Medium är endast observationsläge som standard.                                                                                            |

**Lägesprioritet** (`getMode`): anroparens `options.mode` →
`INJECTION_GUARD_MODE` **DB-funktion-flagga överskrivning** (Dashboard → Inställningar →
Funktioner) → `INJECTION_GUARD_MODE` miljö → `INPUT_SANITIZER_MODE` miljö →
`warn`. En överskrivning från instrumentpanelen vinner därför över miljövariablerna, så UI för funktioner kontrollerar det aktiva skyddet live (ingen omstart). DB-läsningen är säker:
om det uppstår ett fel, faller skyddet tillbaka till miljöbaserat beteende, och när ingen överskrivning är inställd är beteendet identiskt med miljöbaserad lösning.

Detektionskällor:

1. `sanitizeRequest()` från `@/shared/utils/inputSanitizer` (delad detektor
   som används på andra ställen i pipeline).
2. Inbyggda `DEFAULT_GUARD_PATTERNS` (för närvarande `system_override_inline` och
   `markdown_system_block`, båda med `high` allvarlighetsgrad).
3. Valfria `customPatterns` som skickas via konstruktörens alternativ (strängar, regex,
   eller `{ name, pattern, severity }` poster).

När `mode === "block"` **och** minst en detektion uppfyller allvarlighetsgränsen
returnerar `preCall` `{ block: true, message: "Begäran avvisad: misstänkt innehåll upptäckt" }`. I `warn`/`log` lägen loggar skyddsräcket men
tillåter anropet. Den delade hjälparen `evaluatePromptInjection()` exporteras också
för anropare som behöver utvärdera uppmaningar utan att gå igenom registret.

**Scan bound (v3.8.20):** detektorn inspekterar endast de **första 16 KB** av
sammanfogad uppmaningstext — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` och
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` innan de kör
mönsterloopen. Injektionsdirektiv ligger nära toppen av en inmatning, så detta
begränsar regex CPU/GC på flera hundra KB nyttolaster utan att försvaga detektionen (jmf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Körs på **båda** stegen, sist i standardkedjan (prioritet `95`). Tar bort
välkända API-nyckel / hemlig token-mönster från den utgående nyttolasten (meddelande
innehåll, verktygsanropsargument, verktygsresultat) **och** leverantörens svar, så en
credential som klistras in i en uppmaning (eller ekas tillbaka av ett verktygsresultat) läcker inte
till den uppströms leverantören eller tillbaka till klienten.

- **Opt-in endast**, samma konvention som PII-redigering (Hård regel #20-nära):
  inaktiverad om inte `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. Med det avstängt är skyddsräcket en no-op —
  det blockerar aldrig och skriver aldrig om.
- `redactCredentials()` går igenom hela nyttolasten/svarsträdet (`walkValue()`,
  prototypföroreningssäker, cykelsäker via `WeakSet`) och ersätter träffar med
  en `[REDACTED:<type>]` platshållare, klonar endast de grenar som faktiskt
  ändrades.
- `CREDENTIAL_PATTERNS` täcker LLM-leverantörsnycklar (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS-token (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalningsnycklar (Stripe, Square), moln
  nycklar (AWS access key, Twilio, SendGrid, Mailgun), privata nycklar / JWT:er,
  credential-bärande anslutningssträngar (`mongodb://user:pass@...`, etc.), och
  ett generiskt `Authorization`/`x-api-key`/`api-key`/`apikey` header-värde
  mönster. Header-formade nycklar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redigeras strukturellt (endast värde, schema-prefix som
  `Bearer `/`Basic ` bevaras) snarare än via den generiska textregexen.
- Skyddsräcket blockerar aldrig; det skriver endast om (`modifiedPayload` /
  `modifiedResponse`) och annoterar (`meta.credentialsRedacted`, `meta.count`).

Regression skydd: `tests/unit/credential-masker-guardrail.test.ts`.

## Baskontrakt (`base.ts`)

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
  block?: boolean; // true kortsluter kedjan
  message?: string; // visas vid blockering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneras av preCall för att skriva om begäran
  modifiedResponse?: TValue; // returneras av postCall för att skriva om svaret
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

En "guardrail" signalerar "ingen ändring" genom att returnera antingen `void`, `{}`, eller
`{ block: false }`. Att returnera en `modifiedPayload`/`modifiedResponse` ersätter
värdet som flödar genom kedjan för nedströms "guardrails".
`signal?: AbortSignal` överför anroparens livscykel till "guardrails". En avbruten begäran är det avsiktliga "fail-open"-undantaget: mediabryggor stoppar arbetet och rensar upp utan att återställa råmedia till ett mål som inte förväntas stödja det.

## Register (`registry.ts`)

Singleton-objektet `guardrailRegistry` exponerar:

- `register(guardrail)` — lägger till (eller ersätter med normaliserat namn) en "guardrail" och
  sorterar om efter stigande `priority`.
- `clear()` / `list()` — administrativa hjälpfunktioner.
- `runPreCallHooks(payload, context)` — itererar aktiva "guardrails", skickar
  "payload" genom `modifiedPayload`, och stoppar vid den första `block: true`.
- `runPostCallHooks(response, context)` — samma flöde på svarsidan.
- `resetGuardrailsForTests({ registerDefaults })` — rensar tillstånd och registrerar
  valfritt om standardinställningarna för ren testisolering.

Båda körarna returnerar `{ blocked, payload|response, results, guardrail?, message? }`
där `results` är en array av `GuardrailExecutionResult`-poster som inkluderar
`blocked`, `skipped`, `modified`, `error` och `meta`-fält per "guardrail",
användbara för spårning.

### Inaktivera Guardrails per Begäran

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` aggregerar en
avdubblerad lista över "guardrail"-namn som ska hoppas över för den aktuella
begäran. Källor (alla valfria, alla sammanfogade):

- `apiKeyInfo.disabledGuardrails`
- Begärans kropp `disabledGuardrails` (högsta nivån)
- Begärans kropp `metadata.disabledGuardrails`
- Rubrik `x-omniroute-disabled-guardrails` (eller äldre
  `x-disabled-guardrails`)

Värden kan vara arrayer av strängar eller en kommaavgränsad sträng; namn
normaliseras till gemener kebab-case (`pii_masker` → `pii-masker`). Resultatet
skickas via `context.disabledGuardrails` till registret, som hoppar över
matchande "guardrails" (`skipped: true` i `results`).

## Exekveringsordning

För varje förfrågan som flödar genom `src/sse/handlers/chat.ts` och
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` bygger hopplistan från API-nyckel, brödtext
    och rubriker.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` kör skyddsräcken i stigande
    prioritetsordning:
    - Inaktiverade skyddsräcken registreras som `skipped`.
    - Varje skyddsräckes `preCall` kan skriva om nyttolasten via `modifiedPayload`.
    - Den första `block: true` kortsluter kedjan och hanteraren returnerar
      ett avvisningssvar från skyddsräcket.
3.  Den (potentiellt omskrivna) nyttolasten flödar in i kombinationsdirigering och uppströms
    vidarebefordran.
4.  Efter att svaret har sammanställts kör `guardrailRegistry.runPostCallHooks(...)`
    samma kedja på svaret. `block: true` här släpper det uppströms
    svaret.

Skyddsräcken som kastar ett fel registreras med `error: <message>` och loggas via
`logger.warn`, men kedjan fortsätter – fail-open per design.

## Konfiguration

Miljövariabler som läses av de inbyggda skyddsräckena:

| Variabel                              | Används av               | Effekt                                                                                                   |
| :------------------------------------ | :----------------------- | :------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Sätt `false` för att helt inaktivera detektering.                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Injektionspolicy: `warn`, `block` eller `log`. Det äldre värdet `redact` skriver inte om injektionstext. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Läge för injektionsskyddet; även en DB-funktionsflagga som **åsidosätter** miljövariablerna (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Minsta allvarlighetsgrad som `MODE=block` avvisar: `high` (standard), `medium` eller `low`.              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Äldre alias för `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                       |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | När `true` redigeras PII i förfrågan (oberoende av injektionsläge).                                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nedströms) | Styr maskeringsbeteendet på svarssidan.                                                                  |

Modality Bridge-skyddsräckena läser körningskonfiguration från den DB-stödda inställningsbutiken
(`getSettings()`), inte miljövariabler. Visions primära nycklar är
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` och
`modalityBridgeCacheMaxEntries`. De äldre
`visionBridge*`-nycklarna accepteras endast som den dokumenterade en-cykels läs-
fallbacken; instrumentpanelsskrivningar använder de primära nycklarna. Standardvärden och fallback-
upplösaren finns i `src/shared/constants/modalityBridgeDefaults.ts`, med äldre
konstanter bevarade i `src/shared/constants/visionBridgeDefaults.ts`.

Ljud använder `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` och `modalityBridgeAudioMaxClips`, plus de delade
`modalityBridgeCache*`-inställningarna. Ljud har ingen fallback för äldre nycklar eftersom dessa
nycklar introducerades med Modality Bridge-schemat.

Video använder `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` och
`modalityBridgeVideoTimeout`, plus de delade `modalityBridgeCache*`-inställningarna.
Det är inaktiverat som standard eftersom FFmpeg/ffprobe är valfria operativa
beroenden och bildtextning av ramar lägger till latens och modellkostnad.

## Anpassade Guardrails

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

Steg:

1.  Skapa `src/lib/guardrails/myGuardrail.ts` som utökar `BaseGuardrail`.
2.  Implementera `preCall` och/eller `postCall`.
3.  Registrera antingen vid importtillfället (push från `registerDefaultGuardrails`) eller
    anropa `guardrailRegistry.register(...)` vid körning – registret ersätter
    alla tidigare guardrails med samma normaliserade namn.
4.  Lägg till tester under `tests/unit/` (befintliga exempel:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testning

Använd `resetGuardrailsForTests()` mellan tester för att starta från ett känt tillstånd.
Skicka `{ registerDefaults: false }` för att starta med ett tomt register och
registrera endast de guardrails som testas. Vision Bridge accepterar beroendeinjektion
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge exponerar motsvarande
gränssnitt för inställningar, funktioner, STT-modellval, autentiseringskontroller och transkription.
Tester kan därför utföra båda flödena utan DB- eller nätverksåtkomst.

## Se även

- `src/lib/guardrails/` — implementering
- `src/shared/utils/inputSanitizer.ts` — delad detektor som driver
  prompt-injektion och PII-maskering
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standardinställningar och
  lista över tvingade-bryggmodeller
- `src/shared/constants/modalityBridgeDefaults.ts` — delade Vision/Audio körningsstandardinställningar
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lager (strömbrytare, nedkylningstider)
- `docs/reference/ENVIRONMENT.md` — fullständig referens för miljövariabler

## Täckning av injektionsskyddsrutter & red-team (Fas 8 · Block D)

Injektionsskyddet (`createInjectionGuard` / `withInjectionGuard`) täcker alla rutter
som accepterar användarprompter. Det respekterar `INJECTION_GUARD_MODE` (standard `warn` = logga endast;
`block` = returnerar HTTP 400 `SECURITY_001`).

| Typ              | Rutter                                                                                                                                               | Standardläge |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| Text (befintlig) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | varna        |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | varna        |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | varna        |

Textutvinning (`extractMessageContents`) täcker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nattlig, `nightly-llm-security.yml`):** promptfoo validerar att varje rutt blockerar
OWASP-LLM-korpusen i `INJECTION_GUARD_MODE=block`; garak kör sonder (hoppar över utan hemlighet).
`moderations` inkluderas för konsekvens – operatörer i block-läge kan undanta den via
`resolveDisabledGuardrails`.

Det nattliga arbetsflödet (`.github/workflows/nightly-llm-security.yml`, cron + manuell
dispatch) har två jobb:

- **`promptfoo-guard` (blockerande)** – kör `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Varje fientligt fall (t.ex. "ignorera alla
  tidigare instruktioner...", DAN-liknande jailbreaks) bekräftar att svaret innehåller
  `error.code === "SECURITY_001"`, dvs. att skyddet faktiskt avvisade begäran.
- **`garak` (rådgivande)** – kör garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Begränsas av en
  leverantörshemlighet (`PROMPTFOO_PROVIDER_KEY`); hoppar över graciöst och är suffixerat
  `|| true`, så det rapporterar utan att CI misslyckas.

Täckningen av skyddshjälpen (`createInjectionGuard` / `withInjectionGuard`)
spänner över varje promptbärande `/v1`-rutt; prompttext hämtas från
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
