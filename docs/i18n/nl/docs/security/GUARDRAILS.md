# Guardrails (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Bron van waarheid:** `src/lib/guardrails/`
> **Laatst bijgewerkt:** 2026-08-29 — v3.8.51 (de herkomst van Video Bridge-transcripties wordt door de aanroeper opgegeven,
> en wordt nog niet door de server geverifieerd — verduidelijkt conform #11661)

Guardrails dwingen veiligheidsregels, beleidsregels en inhoudstransformaties af op de grens
tussen OmniRoute en upstreamproviders. Elke guardrail kan requestpayloads (`preCall`) en
upstreamresponses (`postCall`) inspecteren (en optioneel weigeren, transformeren of annoteren).

Het systeem is **fail-open**: als een guardrail tijdens de uitvoering een fout veroorzaakt,
registreert het register de fout en gaat het verder met de volgende guardrail in plaats van
het request te laten mislukken. Blokkeren is een expliciete beslissing (`block: true`), nooit een ongeluk.

## Ingebouwde Guardrails

De registry laadt automatisch zes guardrails in prioriteitsvolgorde bij import
(zie `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteit | Naam                | Fase(s)        | Bestand               |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lagere prioriteitsnummers worden **eerst** uitgevoerd.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Intercepts afbeeldingsdragende verzoeken gericht op **niet-visiemodellen** en
ofwel leidt het hele verzoek om naar een vision-capabel model of vervangt het de afbeeldingsdelen door tekstbeschrijvingen geproduceerd door een configureerbaar vision model vóór de upstream-aanroep. Dit stelt tekst-only providers in staat om multimodale payloads transparant te verwerken.

Stroom:

1. Sla over als het doelformulier al vision ondersteunt (tenzij het voorkomt in de
   geforceerde bruglijst `isVisionBridgeForcedModel`).
2. Extraheer afbeeldingsdelen via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), dat delegeert aan de **geünificeerde media
   detector** `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — de
   enige bron van waarheid die gedeeld wordt met de combo compatibiliteitsfilter.
   Extractie is toegestaan voor top-level delen van de vormen
   `replaceImageParts` kan terugspelen (het extract↔vervang contract): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, en Responses API `input_image`. Geneste hits en
   alleen-indicator vormen zijn combo-filter materiaal en worden nooit geëxtraheerd.
   Sla over als er geen gevonden zijn.
3. Los runtime-configuratie op via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nieuwe `modalityBridge*`
   instellingen sleutels winnen; legacy `visionBridge*` sleutels blijven een **één-cyclus
   terugval** (rollback window). Sla over vóór enige media traversie wanneer de
   brug is uitgeschakeld.
4. Modeselector (`modalityBridgeVisionMode`, zie tabel hieronder) beslist
   omleiden versus beschrijven. Omleiden retourneert `modifiedPayload` met alleen `model`
   verwisseld, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beschrijvingspad: beperk afbeeldingen tot `maxImages`, stel de taakbewuste prompt samen,
   raadpleeg de beschrijvingscache, roep het vision model **parallel**
   (`Promise.allSettled`) aan, en injecteer `[Image N]: <description>` tekstdelen op
   hun plaats. Een mislukte beschrijving levert `null` op en het originele afbeeldingsdeel is
   **behouden** (#4012) — behalve op het combo beschrijvingspad wanneer elke
   beschrijving is mislukt, waar een bevestigde niet-vision upstream een
   `(onbeschikbaar — geen vision-capabele provider verbonden)` stub in plaats daarvan krijgt (#8430).
6. Retourneer `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modeselector (`modalityBridgeVisionMode`)

| Modus      | Standaard | Gedrag                                                                                                                                                                                                                                                                                      |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔         | Legacy heuristiek, onaangeroerd (#6640/#7204): niet-combo/`auto/` modellen leiden om naar het beste vision model tenzij het originele model al bruikbare referenties heeft (dan beschrijven); combo-doelen beschrijven altijd.                                                              |
| `describe` |           | Altijd beschrijven — de omleidingsblok wordt volledig overgeslagen; het door de gebruiker gekozen model antwoordt altijd.                                                                                                                                                                   |
| `reroute`  |           | Dwing omleiden: de keep-credentialed-model guard wordt omzeild. De omleidings-**doel** referentiegarde blijft van toepassing — wanneer er geen bruikbaar vision doel bestaat, valt het verzoek door naar beschrijven zodat ruwe afbeeldingen nooit een tekst-only backend bereiken (#8430). |

Geforceerde modi kortsluiten **voordat** de auto heuristiek draait; `auto` gedrag
is byte-identiek aan de pre-PR-1 guardrail.

#### Taakbewuste beschrijvingsprompt (`modalityBridgeVisionTaskAware`)

Standaard **waar**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) voegt
de tekst van het **laatste gebruikersbericht** (afgekapt tot 500 tekens) toe aan de basis
beschrijvingsprompt, waardoor de beschrijving wordt gestuurd naar wat de gebruiker daadwerkelijk vroeg
(codex-vision-proxy patroon) en vraagt het vision model om zichtbare
tekst te transcriberen. Met de vlag uit — of geen gebruikers tekst — wordt de basisprompt onveranderd gebruikt.

De beschrijving van de zelf-loop van de OpenAI-compatibele aanvraag (`callVisionModelSingle()` in `visionBridgeHelpers.ts`) vraagt altijd om `image_url.detail: "high"` — onvoorwaardelijk, voor elke aanroeper/provider, niet afhankelijk van een client-signaal. Sampling met lage detailniveaus vermindert de OCR-nauwkeurigheid voor precies de teksttranscriptietaak waar deze prompt om vraagt, dus de beschrijvingsaanroep vraagt altijd om hoge details, ongeacht welk detailniveau de oorspronkelijke inkomende aanvraag gebruikte. Dit beïnvloedt alleen de interne beschrijvingsaanvraagbody; het verandert niet hoe OmniRoute de eigen `image_url.detail` van de aanroeper doorstuurt op de primaire aanvraag — die standaard wordt apart toegepast, en alleen voor gedetecteerde OpenCode-clients, in `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). De Anthropic wire-format tak van de beschrijving zelf-loop heeft geen `detail`-veld en wordt door geen van beide standaarden beïnvloed.

#### Beschrijving uitvoercap (`modalityBridgeVisionMaxChars`)

| Sleutel                        | Standaard | Bereik           |
| ------------------------------ | --------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`       | `0` of 100–50000 |

`0` (standaard) betekent **geen limiet** — de beschrijving die door `callVisionModel()` wordt geretourneerd, wordt ongewijzigd doorgegeven, waardoor het bestaande gedrag behouden blijft. Elke waarde in het bereik van 100–50000 verkort de beschrijving met een `…` suffix voordat deze weer wordt samengevoegd als `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`). Verhoog dit voor detailrijke OCR-taken waarbij het downstream-model de volledige transcriptie nodig heeft; verlaag het om het tokengebruik op spraakzame vision-modellen te beperken. Het dashboardveld bevindt zich op het Geavanceerde paneel van het Vision-tabblad (`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) en beperkt elke waarde tussen 1 en 99 tot de 100-grens, terwijl een expliciete `0` onaangetast blijft — `0` is op zichzelf een geldige Zod-waarde (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), niet slechts de "niet ingesteld" standaard.

#### Beschrijving cache (`modalityBridge/bridgeCache.ts`)

In-memory LRU + TTL-cache voor beschrijvingsuitvoer, gedeeld over het hele proces. Sleutel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` met lengte-prefix framing (geen veldgrensbotsingen). De modelcomponent is het **geconfigureerde** brugmodel, niet het model dat daadwerkelijk antwoordde — `callVisionModel` kan intern terugvallen, en sleutelen per poging zou de cache fragmenteren. Mislukte beschrijvingen worden nooit gecached. Instellingen:

| Sleutel                         | Standaard | Bereik  |
| ------------------------------- | --------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`    | —       |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000 |

#### Normalisatie van externe afbeeldingen (zelf-loop beschrijving/base64 ophalen)

Wanneer de brug zelf een **externe** afbeelding ophaalt — de Anthropic beschrijving zelf-aanroep en de claude-wire-format base64-conversie (`ensureBase64ImagesForClaudeWire`), beide via `fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — wordt de resulterende data-URI doorgegeven aan `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) voordat deze wordt ingebed in de aanvraag van het vision-model. Te grote afbeeldingen worden verkleind tot een **2048px lange rand** (overeenkomend met de resize-limiet die OpenAI/Anthropic al server-side toepassen), wat het uploaden van bytes/latentie vermindert zonder te veranderen wat het vision-model ziet. Het verkleinen maakt gebruik van `sharp`, geladen via dynamische import: op een platform waar de native binaire niet kan worden geladen, **gooit** `normalizeDataUri()` **nooit een fout** — het valt terug op een passthrough van de oorspronkelijke bytes, zodat het beschrijving/base64-conversiepad altijd blijft werken. Niet-afbeeldingsbytes (een fetch die geen decodeerbare afbeelding retourneerde) worden ook onaangetast doorgegeven. Deze normalisatie is beperkt tot afbeeldingen die de brug ophaalt voor zijn eigen zelf-aanroep — het wordt nooit toegepast op de ruwe passthrough-payload van de aanroeper, in overeenstemming met het opt-in-only mutatieprincipe (Hard Rule #20).

#### Instellingen schema + migratie

De nieuwe `modalityBridge*` sleutels worden gevalideerd met Zod in `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, de `modalityBridgeCache*` trio, en de `modalityBridgeAudio*` groep die door de Audio Bridge wordt gebruikt. Migratie `141_modality_bridge_settings.sql` kopieert bestaande legacy `visionBridge*` waarden naar de bijbehorende nieuwe sleutels (idempotent, overschrijft nooit een door de operator ingestelde `modalityBridge*` waarde); de legacy sleutels blijven geaccepteerd als een leesfallback voor één releasecyclus.

#### Transparantie header + statistieken

Beschrijf-getransformeerde antwoorden bevatten `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (gebouwd door `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`, gestempeld door `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`). Omgeleide aanvragen krijgen **geen** header — de payload was onaangetast en de modelwisseling is al zichtbaar in het `model`-veld van de antwoordbody.

`GET /api/modality-bridge/stats` (beheer-authenticatie, dezelfde laag als `GET /api/settings`) retourneert de in-memory per-modality tellers `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` voor `vision`, `audio`, en `video`. `averageLatencyMs` gebruikt `latencySamples`, niet alle pogingen, als noemer; een operatie zonder timing fabriceert geen nul-milliseconde monster. `bridged` blijft de achterwaarts-compatibele alias voor succesvolle conversies; mislukte pogingen verhogen het niet. Tellers worden bij procesherstart gereset volgens ontwerp (telemetrie, geen boekhouding).

#### Dashboardconfiguratie

De speciale dashboardpagina is
`/dashboard/settings/modality-bridge`. De URL-adresseerbare `Vision`, `Audio`,
en `Video` tabbladen behouden queryparameters terwijl de `tab` waarde wordt gewijzigd.
Het Vision tabblad biedt inschakeling, modus, modelselectie (inclusief de automatische
standaard), taakbewuste prompts, geavanceerde limieten voor time-out/afbeelding/beschrijving-lengte/cache,
runtime
tellers, en een beveiligd voorbeeldverzoek. Het Audio tabblad is ook live: het biedt
inschakeling, een STT-only modelkiezer met Auto, time-out/max-clip limieten, audiotellers,
en een `input_audio` voorbeeldtest. Het Video tabblad is functioneel: het rapporteert
de FFmpeg/ffprobe runtime status — een van vier expliciete UI-statussen (`unknown` terwijl
de probe in de lucht is of niet kon worden voltooid, `restricted` op een niet-loopback
dashboard host waar de probe client-side wordt overgeslagen, `unavailable` zodra geprobeerd
en bevestigd ontbrekend, of `available` met de FFmpeg/ffprobe versies) — behoudt
inschakel/model/kader/video/time-out limieten, filtert de modelkiezer naar vision-capabele
modellen, en biedt video tellers.

De voormalige Vision Bridge kaart onder AI-instellingen is een compatibiliteitslink naar de
nieuwe pagina; het bezit niet langer een tweede kopie van het formulier. Media Providers
linkt ook Image-to-Text en Speech-to-Text workflows naar de overeenkomstige Modality
Bridge tabbladen zonder de bestaande Speech-to-Text playground te verwijderen.

**Self-loop toelatingsomzeiling:** wanneer de beschrijvingsaanroep via OmniRoute's
eigen `/v1` self-loop (niet-standaard provider model) wordt geleid, stuurt de sub-aanroep
`x-omniroute-admission-bypass: internal` en wordt geauthenticeerd met de opgeloste
self-loop referentie — de lokale `sk_omniroute` sentinel in lokale modus, of de
operator-geconfigureerde `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env sleutel (#1350) zodat
`REQUIRE_API_KEY=true` implementaties de beschrijvingsaanroep nog steeds kunnen uitvoeren. De omzeiling
wordt alleen erkend voor die exacte referenties, zodat externe clients de
header niet kunnen gebruiken om toelating over te slaan.

Legacy standaardinstellingen bevinden zich in `src/shared/constants/visionBridgeDefaults.ts`; de
nieuwe modus/taakbewuste/cache standaardinstellingen en de instellingenresolver bevinden zich in
`src/shared/constants/modalityBridgeDefaults.ts`. De guardrail biedt een
`deps` constructoroptie zodat tests nep `getSettings` en
`callVisionModel` implementaties kunnen injecteren.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepts audio-bevattende chatverzoeken voordat ze een doel bereiken dat niet
bekend is om audio-invoer te accepteren. Het leidt het chatverzoek nooit om: audio-onderdelen worden
getranscribeerd via de bestaande OpenAI-compatibele multipart eindpunt en het
gekozen chatmodel gaat verder met teksttranscripties.

Stroom:

1. Los `supportsAudio` op via `getResolvedModelCapabilities()`. Expliciete
   provider-register metadata wint, dan statische modelmetadata, dan gesynchroniseerde
   `modalities_input`. Een verklaarde invoerlijst zonder `audio` is `false`; geen
   capaciteitsbewijs blijft `null`. Zowel `false` als `null` activeren de
   conservatieve brug, terwijl `true` deze omzeilt.
2. Los `modalityBridgeAudio*` instellingen op en extraheer splicebare top-level
   audio-onderdelen uit elk bericht via de gedeelde `detectMediaParts()`
   detector. Ondersteunde draadvormen zijn OpenAI `input_audio`, `audio_url`, en
   `source.media_type: "audio/*"`. Geneste audio wordt gedetecteerd voor routering maar niet
   verwijderd door het splice-pad. Het werk wordt beperkt door `modalityBridgeAudioMaxClips`;
   latere onderdelen blijven onaangeroerd.
3. Eer een geconfigureerde `provider/model`, of laat `selectAudioBridgeModel()`
   `AUDIO_TRANSCRIPTION_PROVIDERS` in stabiele catalogusvolgorde doorlopen en selecteer het eerste
   model met een bruikbare actieve providerreferentie.
4. `callAudioTranscription()` converteert base64/data-URI audio naar een multipart
   `file`, of downloadt een externe `audio_url` via de publiek-only uitgaande
   guard met DNS pinning en een limiet van 25 MB. Het POST vervolgens het bestand en het geselecteerde
   model naar de lokale `/v1/audio/transcriptions` self-loop, geauthenticeerd met
   `resolveSelfLoopBearer()`. De bestaande transcriptie route voert normale
   referentie-opzoeking, cooldown/rate-limit afhandeling, en provider dispatch uit.
5. Succesvolle aanroepen vervangen hun onderdelen door `[Audio N]: <transcript>`. Aanroepen
   worden uitgevoerd met `Promise.allSettled`: een individuele fout behoudt dat originele
   audio-onderdeel (#4012 contract). Als elke aanroep mislukt en het doel is bewezen
   `supportsAudio === false`, worden de onderdelen
   `[Audio N]: (onbeschikbaar — geen STT provider verbonden)` (#8430 contract). Voor
   een onbekend doel (`null`), blijft een all-failure resultaat onaangeroerd. Een bewezen
   tekst-only doel zonder bruikbare STT referentie ontvangt dezelfde expliciete
   stub zonder een netwerkoproep uit te voeren.

Succesvolle transcripties gebruiken de proces-brede Modality Bridge LRU/TTL cache. De
sleutel combineert de audio referentie, het stabiele `audio-transcription` operatie
label, en geselecteerd STT model; mislukkingen worden nooit gecached. Audio pogingen updaten
de gedeelde `bridged`, `cacheHits`, `failures`, en `lastUsedAt` tellers.
Getransformeerde reacties dragen
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; onaangeroerde
verzoeken ontvangen geen Audio Bridge segment.

Runtime-instellingen zijn DB-ondersteund en Zod-gevalideerd:

| Sleutel                       | Standaard | Bereik         |
| ----------------------------- | --------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`    | —              |
| `modalityBridgeAudioModel`    | `""`      | Auto of STT ID |
| `modalityBridgeAudioTimeout`  | `60000`   | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`       | 1–10           |

De gedeelde cache blijft gecontroleerd door `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, en `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts top-level video onderdelen in Chat Completions `messages` en Responses
API `input` voordat een doel zonder bekende native video ondersteuning wordt aangeroepen.
Ondersteunde vormen zijn `input_video`, `video_url`, `video_source`, HTTPS-URL's,
en `data:video/*;base64,...` data URI's. Gewone bestandsnamen in tekst worden niet behandeld
als video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) beheert de aanvraagdoorloop, de
capaciteit/beleid controle, per-aanvraag aggregatie, en de response payload.
Per-video werk — acquisitie, de hele-resultaat cache, het beschrijven van een frame
sequentie (die elke door de aanroeper verklaarde audio transcript fuseert), en per-poging
statistieken/afbreken/opruimen — is verborgen achter `processVideoPart` in
`videoBridgePipeline.ts`, dat eenmaal per video onderdeel wordt aangeroepen binnen de loop van `preCall`.
Die module definieert ook de expliciete poortgrenzen `VideoMediaBrokerPort`
(het verwerven van bytes en het extraheren van bemonsterde frames), `VideoAudioTranscriptionPort`
(het fuseren van een door de aanroeper verklaarde audio transcript met de bemonsterde bijschriften), en
`VideoDrilldownPort` (de legacy raw-store vorm). Productie STT en frame-retentie
worden samengesteld rond de beschrijvende poort via `createVideoSttAdapter` en
`createVideoDrilldownAdapter`; de laatste gebruikt de gedeelde ondoorzichtige-handle levenscyclus.

Het openbare `/v1` aanvraagpad importeert of roept nooit een subprocess aan. Afstands
video's worden gedownload onder een limiet van 50 MiB; inline base64 video's hebben een
conservatieve limiet van 36 MiB gedecodeerd per video zodat het model/messages/framing envelop
binnen de openbare JSON aanvraagtoelatingslimiet van 50 MiB kan blijven. Inline
lengte en gedecodeerde grootte schattingen worden gecontroleerd voordat allocatie plaatsvindt. HTTPS is
vereist op de initiële externe URL en elke omleiding, gebruikmakend van de bestaande
openbare-only uitgaande beveiliging met DNS pinning. De bytes kruisen dan de exacte interne
`POST /api/modality-bridge/video/extract` broker grens. Die route is zowel
`LOCAL_ONLY` als `SPAWN_CAPABLE`, accepteert alleen een per-proces geauthenticeerde,
vertrouwde-lus aanvraag, en accepteert nooit een URL, bestandspad, uitvoerbaar bestand,
of argumentenlijst. De API body-grootte pipeline en de incrementele body lezer van de handler
handhaven onafhankelijk een limiet van 50 MiB voor broker input. De begrensde wachtrij draait
één extractie tegelijk, staat vier wachtende taken toe, en beperkt wachtende input tot
100 MiB.

Binnen de broker leest `ffprobe` een privé lokaal bestand; de vaste formaat
toegestane lijst sluit afspeellijst en manifestformaten uit. Voor toegestane MOV-familie
containers blijven externe MOV data referenties standaard uitgeschakeld, en het
vaste commando kiest er niet voor om ze in te schakelen. Zowel `ffprobe` als `ffmpeg` gebruiken de
`file`-alleen protocol whitelist, één thread, vaste argumentarrays, geen shell,
en uitvoerbare bestanden die zijn opgelost vanuit `PATH`. Aangehechte afbeelding cover streams zijn geen
speelbare kandidaten. Alle speelbare streams moeten voldoen aan de limieten, en een
expliciete standaardstream heeft de voorkeur boven de deterministische laagste-index
fallback. Video's zijn beperkt tot 600 seconden, 8.192 pixels per dimensie, en
33.554.432 bronpixels. FFmpeg monster 1–16 midden JPEG frames, schaalt de lange rand
tot maximaal 1.024 pixels zonder kleinere invoer te vergroten, en ontvangt nooit een URL. Sampling is `uniform`
standaard. De optionele `scene_aware` en experimentele `segment_aware` beleidsregels voeren één extra
vaste FFmpeg doorloop uit over de al gevalideerde lokale stream, selecteren begrensde
`showinfo` scène tijdstempels, en vallen deterministisch terug naar dezelfde
uniforme middentijden bij detectorfouten, time-outs, onjuist formaat output, of een lege
kandidatenlijst. Segment-bewuste modus allocateert middelpunt monsters proportioneel aan
de gevalideerde scène-intervallen; segment-bewijs en fallback gedrag worden hieronder
gedetailleerd. De harde limiet van 16 frames wordt
toegepast na selectie in elk beleid. Wanneer een scène-bewuste aanvraag slechts een
één-frame budget heeft, gebruikt het het uniforme middelpunt van de actieve volledige video of focus
venster en rapporteert `policyEffective: uniform`: een enkele geselecteerde scène frame
kan beide temporele uiteinden niet behouden. Een aanroeper kan optioneel een
eindige focus venster (`start`/`end` seconden) opgeven; grenzen worden vastgezet op de media
duur, omgekeerde of niet-eindige vensters worden afgewezen, en alle sampling
beleidsregels worden alleen uitgevoerd binnen het genormaliseerde interval. Het resulterende
venster is opgenomen in de sampling metadata en in de onbetrouwbare beschrijving
prefix zodat downstream modellen een gefocuste excerpt van de volledige
tijdlijn kunnen onderscheiden.

Semantische bijschrift focus is een aparte, expliciete instelling. De standaard `full`
analyse modus behoudt de bestaande frame prompt en stuurt nooit aanvraag tekst door naar het bijschrift model. In `focused` modus leest de brug alleen de laatste
niet-lege door de gebruiker geschreven `text`/`input_text` uit dezelfde Chat of Responses
container, normaliseert het naar NFC, collapseert controlekarakters en witruimtes,
en beperkt het tot 500 Unicode codepunten. Een leeg resultaat valt terug op de
exacte `full` prompt. Een bruikbare hint wordt geserialiseerd als JSON in een
gewijd onbetrouwbare-gebruikers-context blok en mag alleen observeerbare details prioriteren; het
kan de aparte waarschuwing tegen het volgen van instructies zichtbaar
of hoorbaar in de media niet overschrijven. Textuele focus inferreert nooit `start`/`end` of verandert
de temporele sampler.

#### FU-07 structureel segment bewijs

`segment_aware` gebruikt één begrensde pre-analyse doorloop over de al gevalideerde
lokale video stream. De vaste filterketen schaalt eerst tot maximaal 320 pixels
breed, detecteert scène veranderingen en bevroren intervallen, en monster vervolgens met 1 frame per
seconde voor vervaging, gemiddelde luma, en ruimtelijke/temporele informatie. De doorloop is
beperkt tot 600 structurele monsters, één FFmpeg/filter thread, dezelfde
`file`-alleen protocol en container toegestane lijsten, een 1 MiB proces-output limiet,
en maximaal 30 seconden binnen de gedeelde afbreek/deadline van de broker. Het accepteert nooit
een commando, filter, pad, of URL van de aanvraag.

De structurele waarden zijn deterministische steekproefbewijzen, geen semantisch videobegrip. Ze infereren geen onderwerpen, acties, bijschriften, spraak of gebruikersintentie. Scène- en freeze-grenzen vormen segmenten; freeze-dekking, vervaging, belichting, ruimtelijke details en temporele verandering beïnvloeden alleen hoe het bestaande 1–16 framebudget wordt toegewezen. Een volledig bevroren segment is beperkt tot één frame, terwijl niet-bevroren segmenten concurreren om het resterende budget. Wanneer grenzen het aantal frames overschrijden, wordt een uniforme tijdlijnbedekking behouden, zodat snelle vroege snits een lang achterliggend segment niet kunnen verbergen. Scènegrenzen binnen de 1-seconde analysetijdresolutie van een freeze-grens worden samengevoegd.

Ontbrekende filters, verkeerd gevormde/leeg bewijs, een detectorfout of de beperkte pre-analyse time-out falen open volgens het exacte uniforme middenpuntbeleid. Een oproepabort of brokerdeadline faalt niet open: het beëindigt het lopende subprocess, voorkomt latere frame-extractie en de privé tijdelijke boom wordt verwijderd in `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genereert deterministische echte FFmpeg fixtures voor post-deduplicatie bijschriftkostenbesparingen, dichte bewegingsbudgettoewijzing, vervaging/belichting/SI-TI bewijs, snelle snits met een lange staart en geleidelijke vervaging valse positieven. Het registreert de pre-analyse wandtijd en, waar `/usr/bin/time` beschikbaar is, kind CPU en piek RSS. De kwaliteitscontroles zijn alleen structurele orakels. De echte bijschriftmodelkwaliteit blijft `HOLD` omdat deze harnassen geen geautoriseerd eindpunt of bevroren rechter heeft. Monetaire besparingen blijven ook `HOLD` tenzij `--caption-cost-per-call-usd` een expliciete positieve schatting per oproep levert; het script fabriceert nooit een van beide resultaten.

Elk frame is beperkt tot 4 MiB, alle ruwe frames samen tot 23 MiB, en de geserialiseerde brokerrespons tot 32 MiB. Een privé tijdelijke directory wordt verwijderd in `finally`. OmniRoute bundelt geen FFmpeg en accepteert geen aangepast uitvoerpad. Voor het bijschriften past de brug een conservatieve visuele deduplicatiepass toe: elke JPEG wordt gereduceerd tot een 16×16 grijswaardenbuffer en wordt alleen vergeleken met het laatste behouden frame. Voor een aangevraagd bijschriftbudget boven één frame, levert extractie een beperkte kandidatenpool van maximaal twee keer dat budget en nooit meer dan 16 frames. De aangevraagde limiet wordt alleen toegepast na deduplicatie, waarbij de eerste en laatste geselecteerde kandidaten behouden blijven tijdens de laatste verdunning wanneer het budget ten minste twee is. Het versiegebonden
`grayscale-16x16-mean-cells-v2` beleid gebruikt de grotere van gemiddelde luma-delta en de verhouding van thumbnail-cellen waarvan de genormaliseerde delta ten minste 0.05 is. De duplicaatdrempel is de constante 0.04, gekozen voor voorspelbaarheid in plaats van blootgesteld als een runtime-instelling. Dit secundaire
hoogcontrast signaal behoudt kleine bewegingen en zichtbare tekstwijzigingen die een gemiddelde vergelijking kan verbergen. Comparator- of decoderfouten falen open en behouden dekking. Uitvoer metadata scheidt geëxtraheerde kandidaten, succesvol gebruikte frames en visuele duplicaten die zijn verwijderd.

Een expliciet gemarkeerd videodeel kan een getimede contactblad aanvragen. De brug bouwt maximaal een 4-koloms, 16-frame JPEG-grid. Elke 512-pixel cel brandt zijn bron-timestamp in een hoogcontrast onderband, terwijl dezelfde timestamps in tekstuele metadata blijven voor downstream associatie en audit. De complete JPEG blijft beperkt tot 32 MiB. Als `sharp` de grid niet kan decoderen of samenstellen, valt de brug terug op de individuele JPEG-frames; een clientabort verspreidt zich nog steeds door de bladoperatie.

Promotiebewijs is opzettelijk gescheiden van de synthetische samenstellingsmicrobenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` definieert een schema-versiegebonden A/B-harnas voor echte OpenAI-compatibele visiemodellen. Het meet door de provider gerapporteerde tokens, end-to-end wandlatentie (inclusief bladcompositie), modeloproeptelling en manifest-gedefinieerde feitbehoud. Ruwe modelantwoorden worden niet in het rapport geschreven; alleen SHA-256-digests en overeenkomende feit-ID's worden behouden. Het harnas maakt geen netwerk- of betaalde modeloproep tenzij `--execute-real` wordt doorgegeven en `--model`, `OMNIROUTE_BASE_URL` en `OMNIROUTE_API_KEY` zijn geconfigureerd. Zonder die expliciete echte uitvoering blijft het machine-leesbare oordeel `HOLD`; synthetische payload/oproep-tellingen alleen zijn geen promotiebewijs.

De aparte `scripts/perf/video-bridge-promotion-eval.ts` consumeert FU-07 of FU-09 observaties. Promotietoegang vereist alle acht synthetische scenario soorten plus een gesaneerde echte clip, ten minste drie gemeten herhalingen per rol en geval, alle tien verklaarde metrics, bevroren media/prompt/verwachte-feit/instellingen digests, unieke observatie-ID's en geverifieerde gezaaide A/B-volgorde. De uitvoeringsontvangst bindt de corpusdigest, exacte kandidaat SHA en modelherziening. Ontbrekende of ongeldige metingen blijven `HOLD`, inclusief CPU boven 30 s, piek RSS boven 512 MiB of pre-analyse boven 30 s. Dit zijn bewijs-toegangsgrenzen, geen nieuwe runtime RSS handhaving garantie.

FU-07 vereist ten minste 98% kwaliteitsbehoud en p95 latentie niet meer dan 1.2x basislijn, plus ofwel een 0.05 absolute gevalsgebalanceerde gemiddelde recall verbetering bij equivalente gemiddelde bijschriftoproepen, of ten minste 10% minder gemiddelde post-deduplicatie bijschriftoproepen. FU-09 vereist ten minste 0.85 kwaliteit, 95% behoud, 20% p95 latentie reductie en 10% token reductie. Kritisch feitverlies, injectie-naleving of ontbrekende gebruik voorkomt promotie. Eén uitvoering kan niets promoten: `--previous-report` bevestigt twee verschillende, niet-overlappende, opeenvolgend in aanmerking komende uitvoeringen van hetzelfde beleid/modelherziening/kandidaat/corpus. Een steekproefexperiment kan een contactbladexperiment niet bevestigen.

Verzamelaars moeten reacties in het geheugen scoren en `responseDigest` plus
statistieken en observatiebindingen opslaan, nooit de reactietekst. De consument leest ook
legacy ruwe observaties maar kopieert die tekst nooit in zijn rapporten. Precies
één van `responseDigest` of `rawResponseText` wordt geaccepteerd voor elke observatie.
De versie-allowlist blijft leeg met een onveranderlijke `hold` standaard. Een
geschikte invoer vereist zijn bewijsreferentie, beleid, modelherziening, exacte
kandidaat SHA, manifestdigest en twee verschillende run-ID's; conflicterende contexten
worden afgewezen. Deze metadata zijn een auditcontract, geen bewijs dat een
verwezen bestand echte metingen bevat. Controleer de werkelijke bonnen voordat je
een invoer toevoegt. De managementstatistieken-eindpunt en Video-dashboard tonen
conservatieve gereedheid. Een geconfigureerde modelalias alleen stelt zijn
herziening of de lopende kandidaat SHA niet vast, dus het huidige dashboard rapporteert
`HOLD` in plaats van geschiktheid van een andere uitvoeringscontext te hergebruiken.
Expliciete experimentele selectie blijft gescheiden van promotie; er wordt geen
standaard automatisch gewijzigd.

Aanroepers kunnen een optionele `transcript.cues` array aan een ondersteunde video
deel toevoegen wanneer ze al uitgelijnde tekst bezitten. Elke cue moet `text` bevatten, een
eindige `start`/`end` interval binnen de onderzochte duur, en een goedgekeurde
`source` (`client`, `embedded`, of `audio-bridge`); `confidence` is standaard
`1` en moet tussen `0` en `1` blijven. Exacte dubbele cues worden samengevoegd.
OmniRoute start nooit transcriptie vanuit deze metadata: gevalideerde cues worden
gekopieerd in het beschreven resultaat met bron, vertrouwen en interval, en
worden weergegeven als onbetrouwbare observaties naast de framebijschriften. Ongeldige,
buiten bereik, of zonder oorsprong tekst wordt afgewezen in plaats van gemengd in de
bijschriftstroom. Beide request-body transcriptkanalen normaliseren de geleverde
oorsprong naar `client`, inclusief zelf-verklaarde `embedded` of `audio-bridge`
labels. Alleen een door de server beheerde adapter kan die vertrouwde labels toewijzen
via het code-only `trustedSource` argument; een request JSON-veld kan dat argument
niet bereiken. Transcripttekst blijft onbetrouwbare media-afgeleide inhoud,
ongeacht de oorsprong, en mag nooit autorisatie bepalen.

Een geavanceerde aanroeper kan een `audioTranscript` track voor dezelfde video
aanbieden; het wordt behandeld als door de client geleverde tekst, niet als bewijs van
servertranscriptie. De fusie-naad draait visuele en audio-observaties onder
één deadline en abortsignaal, ordent ze op een gemeenschappelijke tijdlijn, voegt
exacte duplicaten samen, en rapporteert een gedeeltelijk resultaat wanneer slechts
één kant slaagt. Een ongeldige `audioTranscript` degradeert naar dat gedeeltelijke resultaat —
de visuele beschrijving wordt behouden en de audio-tak registreert een
gezuiverde foutcode — in plaats van de hele video te laten falen. Per-tak beschikbaarheid,
de gedeeltelijke vlag, en de gezuiverde foutcodes worden bewaard in het beschreven resultaat,
in de guardrail metadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), in de result-cache metadata, en in de brug
fusietellers. Het standaard Video Bridge pad roept geen spraak-naar-tekst aan
of downloadt een tweede media-kopie; zonder die expliciete track blijft het
video-only.

**Transcriptretentie (#12150 P1).** Dit geldt automatisch wanneer de
Video Bridge (zelf opt-in) een transcript cue weergeeft — er is geen aparte
retentievlag. Wanneer een verzoek een transcript cue weergeeft (een door de aanroeper
verklaarde `transcript` of een gefuseerde `audioTranscript`), markeert de guardrail het
`videoBridgeObserved` en produceert een geredigeerde schaduw van de videobeschrijving —
een identieke weergave waarin de vrije tekst van elke cue wordt vervangen door
`[redacted-video-transcript]`, opgebouwd door het gestructureerde cue-veld te vervangen
voordat de string wordt samengesteld (nooit door de afgevlakte tekst te parseren, zodat geen cue
inhoud — vijandig of gewoon, inclusief lichamen die `]` bevatten zoals
`[inaudible]`/`[music]` — kan overleven). Het opgeslagen call-log verzoeklichaam verwisselt
elke video-afgeleide tekstdeel voor die geredigeerde schaduw, gematcht op inhoudsgelijkheid;
de `fullText` anker wordt opnieuw gelezen van de voltooide pre-call guardrail
payload, zodat de match nog steeds slaagt na latere keten guardrails (de PII en
credential maskers, prioriteiten 10/95) die de beschrijvingstekst ter plaatse herschrijven en
na systeemprompt/overdracht/geheugeninjectie de berichtarray hervormen. Het
lichaam dat stroomopwaarts naar het model wordt verzonden, blijft ongewijzigd. Een
geobserveerd verzoek vult ook geen duurzame Geheugen (zowel request- als
response-afgeleide extractie worden overgeslagen), zodat het antwoord van het model
geen transcripttekst in Geheugen kan echoën.

**Ruwe video velden (#12430).** Wanneer de brug is ingeschakeld en native video-ondersteuning onbekend of afwezig is, activeren gedefinieerde `transcript`/`audioTranscript` velden ook `videoBridgeObserved`, zelfs na beschrijvingsfout of een `maxVideos` limiet. `null` en lege strings tellen; afwezig velden en niet-video metadata doen dat niet. Behouden kopieën redigeren deze velden of omzeilen het verzoek, en caches/Geheugen worden omzeild. De provider payload blijft ongewijzigd.

Extra behouden kopieën gebruiken hetzelfde geobserveerde verzoeksignaal. De ruwe
pre-guardrail client-verzoeksnapshot, in-memory wachtende verzoek, en vroege
afgewezen-verzoek log vervangen structureel transcriptvelden in video delen;
string prompts gesynthetiseerd door pipeline-stadia en contextoverdracht worden geredigeerd
bij de opgeslagen-verzoek-lichaam sink. De opgeslagen `video_content_removed` marker
maakt `previous_response_id` voortzetting falen gesloten in plaats van tekst te reconstrueren
die opzettelijk was weggegooid. Als een geobserveerd verzoek zijn
per-deel redactie schaduw verliest voordat het wordt gelogd, of zelfs een van de verschillende video schaduwen
faalt om te matchen na latere verzoekmutaties, wordt het behouden verzoeklichaam
volledig weggelaten in plaats van een gedeeltelijk geredigeerd transcript te behouden.

Voor een waargenomen verzoek kan een modelreactie elk deel van het transcript citeren zonder een gestructureerde cue-grens. Het opgeslagen oproep-log `responseBody` wordt daarom vervangen door een weglatingsmarker; het gedetailleerde pipeline-artifact (dat upstream/client-lichamen en stream-chunks kan bevatten) wordt niet bewaard. Semantische, idempotentie- en redeneer-replay caches omzeilen lees- en schrijfoperaties voor dat verzoek. Het providerverzoek en de voor de client zichtbare reactie blijven ongewijzigd. Vroeg keepalive-bits worden uit de tijdelijke buffer verwijderd wanneer het gedetailleerde artifact wordt weggelaten. Kiro's onjuiste EventStream-waarschuwing rapporteert alleen het payload-byte-aantal, nooit de inhoud of de ruwe fout van de JSON-parser. Dit beweert niet dat elke niet-gerelateerde provider/plugin-diagnose is gecontroleerd; de bredere retained-sink sweep wordt bijgehouden in #11658.

De interne `/api/modality-bridge/video/drilldown` levenscyclus is een aparte, loopback/token-geauthenticeerde cache-substraat. Elke operatie vereist ook een canonieke ondoorzichtige principal ID. Voordat een productie-aanroeper wordt ingeschakeld, moet deze die ID afleiden van de geauthenticeerde huurder en mag deze nooit een door de client geselecteerde waarde doorgeven. Cache-sleutels binden die principal aan canonieke sessie- en video-referentie-ID's, slaan alleen hun SHA-256-afgeleide sleutels op en beperken zowel lees- als verwijderoperaties tot dezelfde principal. De cache slaat maximaal 16 afgeleide JPEG-frames per invoer op, vervalt ze na tien minuten en ondersteunt begrensde `start`/`end` leesoperaties of expliciete sessieverwijdering.

Elke principal is beperkt tot 16 invoeren en 64 MiB aan canonieke JPEG-gegevens. Die limieten zijn onafhankelijk van het globale plafond van 64 invoeren/256 MiB: druk op de principal-quota verwijdert alleen de minst recent gebruikte invoeren van die principal voordat globale LRU-verwijdering wordt overwogen. Verlopen invoeren worden verwijderd uit zowel de principal- als de globale boekhouding bij cache-activiteit, terwijl annulering en validatiefouten geen gedeeltelijke vervangingen bevestigen.

De cache weigert niet-canonieke Base64, overtollige padding, niet-JPEG media, onjuiste of afgebroken JPEG's, en JPEG's die een waarschuwing produceren tijdens een begrensde volledige afbeelding `sharp` decodering. Het hercodeert elke geaccepteerde afbeelding als een canonieke JPEG, haalt breedte en hoogte uit de gedecodeerde bytes in plaats van te vertrouwen op aanroepvelden, en verwerpt eventuele achterblijvende polyglot bytes in plaats van ze te behouden. Alleen de begrensde canonieke gecomprimeerde buffer wordt in rekening gebracht bij beide quota. De JSON-draadlimiet omvat Base64-overhead voor het 32 MiB gedecodeerde invoerplafond. Elke opgeslagen afleiding registreert zijn gevalideerde JPEG-formaat/resolutie, samplingbeleid, afleidingsversie, creatietijd, server-berekende inhoudshash en gehashte ouderreferentie plus de geverifieerde ouder-inhoudshash van de aanroep. Annulering wordt gecontroleerd tussen asynchrone decode/hash-fasen voordat de atomische cache-commit plaatsvindt.

De productieproducent hergebruikt al afgeleide broker-frames alleen na succesvolle visuele analyse, zonder een tweede video-download/extractie. Het vereist operator `modalityBridgeVideoDrilldownEnabled=true`, strikte per-deel `drilldown: true`, en een geauthenticeerde API-sleutel record ID. Door de client gedeclareerde principal/sessie waarden vestigen nooit eigendom. Zonder alle drie voorwaarden wordt er geen hashing, resizing of behoud van extra frames uitgevoerd. Falen van behoud behoudt de bruikbare visuele reactie. Toegestane verzoeken omzeilen de hele-video resultaatcache, zodat gecachte resultaten nooit replay-handles opnieuw afspelen.

Succesvolle JSON- en SSE-reacties onthullen maximaal vier ondoorzichtige handles in de begrensde `x-omniroute-video-drilldown` header. Geautoriseerde browser-oorsprongen kunnen die header lezen zonder de CORS-oorsprongbeleid te verbreden. Nieuwe handles gebruiken `v1.<32-byte random base64url token>`, en het register behoudt alleen hun SHA-256-hashes. De lezer/header-parser accepteert ook legacy 64-hex tokens. De geauthenticeerde publieke consument is `GET /api/v1/video-bridge/drilldown?handle=...`, onafhankelijk geconfigureerd door `modalityBridgeVideoDrilldownRemoteEnabled=true`. Expliciete opgeslagen false herroept toegang, zelfs wanneer de legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env fallback is ingeschakeld. Productiebehoud heeft de analoge legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Beide fallbacks zijn standaard uitgeschakeld.

De consument leidt eigendom af van de geauthenticeerde sleutel, past sleutelbeleid toe en retourneert dezelfde 404 voor onbekende, verlopen en andere sleutels handles. Het accepteert `variant=preview|standard|detail` (maximale JPEG-dimensie 320/640/1280, nooit opgeschaald), `limit=1..8` (of de legacy `frames` alias, nooit beide), nul-gebaseerde `page`, en optionele `start`/`end` focus seconden. Dubbele query-sleutels en omgekeerde focusvensters worden afgewezen. Elke geretourneerde variant heeft een hash van zijn werkelijke inhoud en werkelijke resolutiemetagegevens, gekoppeld aan de behouden bron. Varianten worden afgeleid bij lezen in plaats van opgeslagen als extra behouden kopieën. De JSON-reactie, inclusief Base64/envelop, is beperkt tot 32 MiB; een te grote pagina retourneert 413 en de client moet minder frames aanvragen. Lezingen controleren annulering rond elke resizing en controleren opnieuw de geldigheid van de handle voordat ze retourneren. `DELETE` door eigenaar is idempotent; verwijdering of TTL-verval geeft de behouden bron en gebruiksboekhouding vrij.

De gedeelde opslag is proces-lokaal: handles vervallen bij herstart en zijn niet overdraagbaar tussen onafhankelijke OmniRoute-processen. Beheerstatistieken onthullen effectieve behouds-/remote-beleid en aggregeren alleen behouden invoeren/bytes, nooit media, referenties, principal ID's of handles. Het Video-instellingenpaneel toont die waarden en kan beide toestemmingsschakelaars behouden. Deze implementatiedocumentatie is geen bewijs van live-implementatie of promotie; acceptatie van het echte model wordt afzonderlijk bijgehouden.

Frames worden sequentieel bijgeschreven met het geconfigureerde Video-model. Een lege Video-override erft de Vision-instelling; als beide leeg zijn, selecteert de Vision-auto-router het effectieve vision-capabele model. Succesvolle bijschriften vervangen het oorspronkelijke deel met een stabiele `[Video description:` prefix die de tekst ook markeert als een onbetrouwbare media-afgeleide observatie en downstream-modellen vertelt om geen instructies te volgen die in de media zijn gevonden. De cache-sleutels voor frame-bijschriften omvatten de JPEG-bytes, prompt, tijdstempel en effectief model; alleen succesvolle bijschriften worden gecached. Cache-invoeren behouden het daadwerkelijke succesvolle producentmodel, inclusief een fallback-model; de brug rapporteert `mixed` wanneer verschillende frames door verschillende modellen zijn geproduceerd. Een cache-hit hergebruikt die producentidentiteit in plaats van deze opnieuw te labelen als het gevraagde routeringsplan. De cache voor het resultaat van de hele video is gebaseerd op elke invoer die de uitvoer verandert — prompt, effectief model, samplingbeleid, frame-aantal, semantische analysemode, de SHA-256 vingerafdruk van de genormaliseerde focushint, focusvenster, `transcript`, `audioTranscript`, en de contactblad-vlag — dus het wijzigen van een van die dimensies is een cache-mis, nooit een verouderde hergebruik. De versie van het visuele deduplicatiebeleid, drempel en begrensd kandidaat-frame-aantal zijn ook expliciet in de resultaat-cache-sleutel en metadata; een beleidswijziging kan daarom geen verouderde beschrijving van de hele video hergebruiken. De metadata van resultaat-cache v4 houdt de modus en vingerafdruk bij, nooit de ruwe gebruikersopdracht. Metadata van de guardrail rapporteert zowel de gevraagde als effectieve analysemodes; een gevraagde `focused` modus zonder bruikbare gebruikers tekst wordt gerapporteerd als effectief `full`.

De guardrail extraheert elk ondersteund videodeel maar beschrijft niet meer dan `modalityBridgeVideoMaxVideos`. Voor een doel dat bewezen heeft `supportsVideo === false` te hebben, worden mislukte en over-limiet video's expliciete veilige tekstmarkeringen zodat er geen ruwe video overblijft. Wanneer de mogelijkheid onbekend is, blijven die delen onaangeroerd. Doelen met `supportsVideo === true` omzeilen de brug. Het afbreeksignaal van de clientaanroep verspreidt zich door download, brokerwachtrij, subprocessen en bijschriftoproepen; afbrekingen stoppen tussen video's en falen nooit open naar ruwe media.

Runtime-instellingen zijn DB-ondersteund en Zod-gevalideerd:

| Sleutel                             | Standaard   | Bereik / gedrag                                                                                              |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Optionele runtime, opt-in                                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` behoudt generieke bijschriften; `focused` gebruikt begrensde, onbetrouwbare laatste-gebruikerscontext |
| `modalityBridgeVideoModel`          | `""`        | Erft het Vision Bridge-model                                                                                 |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                         |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, of proportioneel `segment_aware`; detectorfout valt terug op `uniform`             |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                          |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                               |

Legacy bewaarde Video-timeoutwaarden boven de 120 seconden worden beperkt tot de brokerdeadline; nieuwe instellingen boven die limiet worden afgewezen. `GET /api/modality-bridge/video/runtime` vereist vertrouwde gestempelde loopback-localiteit vóór authenticatie of runtime-probing, en vereist vervolgens beheersauthenticatie. Het retourneert alleen `available`, gesaneerde FFmpeg/ffprobe-versies, en een vaste reden wanneer de runtime niet beschikbaar is. Het interne extractie-eindpunt is geen openbare upload-API: wachtrijverzadiging retourneert `503` plus `Retry-After`, een oproeperdisconnect retourneert `499`, en de vaste brokerdeadline retourneert `504`. Geconverteerde antwoorden voegen `video->text;model=<visionModel>;parts=<videos>` toe aan de centrale `x-omniroute-modality-bridge` header zonder Vision of Audio-segmenten te verwijderen.

### PII Masker (`piiMasker.ts`)

Werkt op **beide** fasen.

- **`preCall`** kloont de payload, doorloopt `system`, `messages`, `input`, en `prompt` (inclusief platte stringitems), en past `processPII()` (van `@/shared/utils/inputSanitizer`) toe op string `content`/`text` velden. Wanneer `PII_REDACTION_ENABLED=true`, wordt gedetecteerde PII in de uitgaande payload gecensureerd. Dit is onafhankelijk van `INPUT_SANITIZER_MODE` (dat alleen het prompt-injectiebeleid controleert). Wanneer censuur uit staat, registreert de oproep detectietellingen zonder de inhoud te herschrijven.
- **`postCall`** deep-kloont de respons, voert `sanitizePIIResponse()` uit plus de Responses-API-vorm masker (`maskResponsesOutput` — dekt `output_text` en `output[].content[].text`). Als er enige censuur plaatsvindt, vervangt de gewijzigde respons de oorspronkelijke.

De guardrail blokkeert nooit; het annotaties alleen (`meta.detections`, `meta.redacted`) of herschrijft.

### Prompt Injectie (`promptInjection.ts`)

Detecteert vijandige structuren in door de gebruiker aangeleverde inhoud en handhaaft het geconfigureerde beleid. Gedrag wordt gestuurd door omgevingsvariabelen en constructoropties:

| Instelling       | Omgevingsvariabele                                                                                   | Standaard | Effect                                                                                                                                                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ingeschakeld     | `INPUT_SANITIZER_ENABLED`                                                                            | `true`    | Wanneer `false`, kortsluit de guardrail.                                                                                                                                                                                              |
| Modus            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`    | Injectiebeleid: `block`, `warn` of `log`. (`redact` wordt geaccepteerd voor achterwaartse compatibiliteit, maar verwijdert **niet** de injectietekst; verzoek om PII herschrijving wordt gecontroleerd door `PII_REDACTION_ENABLED`.) |
| Blokkeer drempel | `blockThreshold` optie / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`    | Minimale ernst die vereist is om te blokkeren. Medium is standaard alleen ter observatie.                                                                                                                                             |

**Modus prioriteit** (`getMode`): aanroepers `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Instellingen →
Feature Flags) → `INJECTION_GUARD_MODE` omgevingsvariabele → `INPUT_SANITIZER_MODE` omgevingsvariabele →
`warn`. Een dashboard override wint dus van de omgevingsvariabelen, zodat de Feature
Flags UI de actieve guard live controleert (geen herstart). De DB-leesoperatie is fail-safe:
als er een fout optreedt, valt de guard terug op het gedrag op basis van omgevingsvariabelen, en wanneer er geen
override is ingesteld, is het gedrag identiek aan de resolutie op basis van alleen omgevingsvariabelen.

Detectiebronnen:

1. `sanitizeRequest()` van `@/shared/utils/inputSanitizer` (gedeelde detector
   set die elders in de pijplijn wordt gebruikt).
2. Ingebouwde `DEFAULT_GUARD_PATTERNS` (momenteel `system_override_inline` en
   `markdown_system_block`, beide met `high` ernst).
3. Optionele `customPatterns` doorgegeven via constructoropties (strings, regex,
   of `{ name, pattern, severity }` records).

Wanneer `mode === "block"` **en** ten minste één detectie voldoet aan de ernst
drempel, retourneert `preCall` `{ block: true, message: "Verzoek afgewezen:
verdachte inhoud gedetecteerd" }`. In `warn`/`log` modi logt de guardrail maar
staat de oproep toe. De gedeelde helper `evaluatePromptInjection()` wordt ook geëxporteerd
voor aanroepers die prompts willen evalueren zonder door het register te gaan.

**Scan limiet (v3.8.20):** de detector inspecteert alleen de **eerste 16 KB** van
samengevoegde prompttekst — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) in
`src/shared/utils/inputSanitizer.ts`. Zowel `detectInjection()` als
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` voordat ze de
patroonlus uitvoeren. Injectie-instructies bevinden zich meestal aan de bovenkant van een invoer, dus dit
beperkt regex CPU/GC op multi-honderd-KB payloads zonder de detectie te verzwakken (vgl.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Werkt in **beide** fasen, als laatste in de standaardketen (prioriteit `95`). Verwijdert
bekende API-sleutel / geheim-token patronen uit de uitgaande payload (berichtinhoud, tool-aanroepargumenten, toolresultaten) **en** de providerrespons, zodat een
credential die in een prompt is geplakt (of teruggegeven door een toolresultaat) niet wordt gelekt
naar de upstream provider of terug naar de client.

- **Opt-in alleen**, dezelfde conventie als PII verwijdering (Hard Rule #20-adjacent):
  uitgeschakeld tenzij `settings.credentialRedactionEnabled === true` **of**
  `CREDENTIAL_REDACTION_ENABLED=true`. Met deze optie uit, is de guardrail een no-op —
  het blokkeert nooit en herschrijft nooit.
- `redactCredentials()` doorloopt de volledige payload/response boom (`walkValue()`,
  prototype-vervuiling veilig, cyclusveilig via `WeakSet`) en vervangt overeenkomsten door
  een `[REDACTED:<type>]` placeholder, waarbij alleen de takken worden gekloond die daadwerkelijk
  zijn veranderd.
- `CREDENTIAL_PATTERNS` dekt LLM provider sleutels (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalingssleutels (Stripe, Square), cloud
  sleutels (AWS toegangssleutel, Twilio, SendGrid, Mailgun), privésleutels / JWT's,
  credential-bevattende verbindingsstrings (`mongodb://user:pass@...`, enz.), en
  een generiek `Authorization`/`x-api-key`/`api-key`/`apikey` header-waarde
  patroon. Header-vormige sleutels (`authorization`, `x-api-key`, `api-key`,
  `apikey`) worden structureel verwijderd (alleen waarde, schema-prefix zoals
  `Bearer `/`Basic ` behouden) in plaats van via de generieke tekst regex.
- De guardrail blokkeert nooit; het herschrijft alleen (`modifiedPayload` /
  `modifiedResponse`) en annotaties (`meta.credentialsRedacted`, `meta.count`).

Regressiebewaking: `tests/unit/credential-masker-guardrail.test.ts`.

## Basiscontract (`base.ts`)

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
  block?: boolean; // true onderbreekt de keten
  message?: string; // wordt weergegeven bij blokkering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // geretourneerd door preCall om het verzoek te herschrijven
  modifiedResponse?: TValue; // geretourneerd door postCall om het antwoord te herschrijven
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

Een guardrail geeft aan dat er „geen wijziging” is door `void`, `{}` of
`{ block: false }` te retourneren. Het retourneren van een `modifiedPayload`/`modifiedResponse`
vervangt de waarde die door de keten naar volgende guardrails stroomt.
`signal?: AbortSignal` brengt de levenscyclus van de aanroeper over naar guardrails. Het afbreken van een verzoek is de bewuste fail-open-uitzondering: mediabruggen stoppen hun werkzaamheden en ruimen op zonder onbewerkte media terug te zetten voor een doel waarvan bekend is dat het deze niet ondersteunt.

## Register (`registry.ts`)

De singleton `guardrailRegistry` biedt het volgende:

- `register(guardrail)` — voegt een guardrail toe (of vervangt deze op basis van de genormaliseerde naam) en
  sorteert opnieuw op oplopende `priority`.
- `clear()` / `list()` — administratieve hulpfuncties.
- `runPreCallHooks(payload, context)` — doorloopt actieve guardrails, geeft de
  payload via `modifiedPayload` door en stopt bij de eerste `block: true`.
- `runPostCallHooks(response, context)` — dezelfde stroom aan de antwoordzijde.
- `resetGuardrailsForTests({ registerDefaults })` — wist de status en registreert
  optioneel de standaardwaarden opnieuw voor een schone testisolatie.

Beide uitvoerfuncties retourneren `{ blocked, payload|response, results, guardrail?, message? }`,
waarbij `results` een array is van `GuardrailExecutionResult`-records met
de velden `blocked`, `skipped`, `modified`, `error` en `meta` per guardrail,
die nuttig zijn voor tracering.

### Guardrails per verzoek uitschakelen

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` verzamelt een
ontdubbelde lijst met namen van guardrails die voor het huidige verzoek moeten
worden overgeslagen. Bronnen (allemaal optioneel en allemaal samengevoegd):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` in de verzoekbody (op het hoogste niveau)
- `metadata.disabledGuardrails` in de verzoekbody
- Header `x-omniroute-disabled-guardrails` (of verouderde
  `x-disabled-guardrails`)

Waarden kunnen arrays van tekenreeksen of een door komma's gescheiden tekenreeks zijn; namen worden
genormaliseerd naar kebab-case in kleine letters (`pii_masker` → `pii-masker`). Het resultaat
wordt via `context.disabledGuardrails` doorgegeven aan het register, dat
overeenkomende guardrails overslaat (`skipped: true` in `results`).

## Uitvoeringsvolgorde

Voor elk verzoek dat door `src/sse/handlers/chat.ts` en
`open-sse/handlers/chatCore.ts` stroomt:

1. `resolveDisabledGuardrails(...)` stelt de lijst met over te slaan guardrails samen op basis van de API-sleutel, body
   en headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` voert guardrails uit in oplopende
   prioriteitsvolgorde:
   - Uitgeschakelde guardrails worden geregistreerd als `skipped`.
   - De `preCall` van elke guardrail kan de payload herschrijven via `modifiedPayload`.
   - De eerste `block: true` breekt de keten voortijdig af en de handler retourneert
     een afwijzingsrespons van de guardrail.
3. De (mogelijk herschreven) payload wordt doorgegeven aan combinatieroutering en
   upstream-dispatch.
4. Nadat de respons is samengesteld, voert `guardrailRegistry.runPostCallHooks(...)`
   dezelfde keten uit op de respons. `block: true` verwijdert hier de upstream-respons.

Guardrails die een fout veroorzaken, worden geregistreerd met `error: <message>` en gelogd via
`logger.warn`, maar de keten wordt voortgezet — bewust volgens het fail-open-principe.

## Configuratie

Omgevingsvariabelen die door de ingebouwde guardrails worden gelezen:

| Variabele                             | Gebruikt door             | Effect                                                                                                              |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Stel in op `false` om detectie volledig uit te schakelen.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Injectiebeleid: `warn`, `block` of `log`. De verouderde waarde `redact` herschrijft injectietekst niet.             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modus voor de injectieguardrail; tevens een DB-functievlag die de omgevingsvariabelen **overschrijft** (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimale ernst die door `MODE=block` wordt afgewezen: `high` (standaard), `medium` of `low`.                        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Verouderde alias voor `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                            |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Wanneer ingesteld op `true`, worden persoonsgegevens in verzoeken geredigeerd (onafhankelijk van de injectiemodus). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Bepaalt het gedrag van de masker aan de responszijde.                                                               |

De Modality Bridge-guardrails lezen runtimeconfiguratie uit de DB-gebaseerde opslag voor
instellingen (`getSettings()`), niet uit omgevingsvariabelen. De primaire sleutels van Vision zijn
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` en
`modalityBridgeCacheMaxEntries`. De verouderde
`visionBridge*`-sleutels worden alleen geaccepteerd als de gedocumenteerde terugvaloptie voor één cyclus bij het
lezen; schrijfbewerkingen vanuit het dashboard gebruiken de primaire sleutels. Standaardwaarden en de terugvalresolver
staan in `src/shared/constants/modalityBridgeDefaults.ts`, waarbij verouderde
constanten behouden blijven in `src/shared/constants/visionBridgeDefaults.ts`.

Audio gebruikt `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` en `modalityBridgeAudioMaxClips`, plus de gedeelde
`modalityBridgeCache*`-instellingen. Audio heeft geen terugvaloptie voor verouderde sleutels, omdat deze
sleutels zijn geïntroduceerd met het Modality Bridge-schema.

Video gebruikt `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` en
`modalityBridgeVideoTimeout`, plus de gedeelde `modalityBridgeCache*`-instellingen.
Dit is standaard uitgeschakeld omdat FFmpeg/ffprobe optionele operationele
afhankelijkheden zijn en het maken van bijschriften voor frames extra latentie en modelkosten met zich meebrengt.

## Aangepaste guardrails

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Dagbudget overschreden" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Stappen:

1. Maak `src/lib/guardrails/myGuardrail.ts` aan en breid `BaseGuardrail` uit.
2. Implementeer `preCall` en/of `postCall`.
3. Registreer de guardrail tijdens het importeren (door deze vanuit `registerDefaultGuardrails` toe te voegen) of
   roep tijdens runtime `guardrailRegistry.register(...)` aan — het register vervangt
   elke eerdere guardrail met dezelfde genormaliseerde naam.
4. Voeg tests toe onder `tests/unit/` (bestaande voorbeelden:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testen

Gebruik `resetGuardrailsForTests()` tussen tests om vanuit een bekende status te beginnen.
Geef `{ registerDefaults: false }` door om met een leeg register te beginnen en
registreer alleen de guardrails die worden getest. Vision Bridge ondersteunt dependency-
injectie (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge biedt
vergelijkbare injectiepunten voor instellingen, mogelijkheden, selectie van het STT-model,
controle van referenties en transcriptie. Tests kunnen daardoor beide stromen uitvoeren zonder toegang
tot een database of netwerk.

## Zie ook

- `src/lib/guardrails/` — implementatie
- `src/shared/utils/inputSanitizer.ts` — gedeelde detector die
  promptinjectie en maskering van persoonsgegevens mogelijk maakt
- `src/shared/constants/visionBridgeDefaults.ts` — standaardinstellingen voor Vision Bridge en
  lijst met modellen waarvoor de bridge wordt afgedwongen
- `src/shared/constants/modalityBridgeDefaults.ts` — gedeelde standaardinstellingen voor de runtime van Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — orthogonale laag (circuitbreaker, afkoelperiodes)
- `docs/reference/ENVIRONMENT.md` — volledige referentie voor omgevingsvariabelen

## Routedekking en red-teamtests voor de injectieguard (Fase 8 · Blok D)

De injectieguard (`createInjectionGuard` / `withInjectionGuard`) dekt alle routes
die gebruikersprompts accepteren. Deze respecteert `INJECTION_GUARD_MODE` (standaard `warn` = alleen loggen;
`block` = retourneert HTTP 400 `SECURITY_001`).

| Type             | Routes                                                                                                                                               | Standaardmodus |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Tekst (bestaand) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generatief       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Gegevens         | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Tekstextractie (`extractMessageContents`) ondersteunt `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-teamtests (nachtelijks, `nightly-llm-security.yml`):** promptfoo valideert dat elke route
de OWASP-LLM-corpus blokkeert wanneer `INJECTION_GUARD_MODE=block`; garak voert probes uit (wordt zonder geheim overgeslagen).
`moderations` is voor consistentie opgenomen — operators kunnen deze route in blokkeermodus uitzonderen via
`resolveDisabledGuardrails`.

De nachtelijke workflow (`.github/workflows/nightly-llm-security.yml`, cron + handmatige
activering) heeft twee taken:

- **`promptfoo-guard` (blokkerend)** — voert `promptfoo eval -c promptfooconfig.yaml` uit
  met `INJECTION_GUARD_MODE=block`. Elk vijandig testgeval (bijvoorbeeld "negeer alle
  eerdere instructies…", jailbreaks in DAN-stijl) controleert dat het antwoord
  `error.code === "SECURITY_001"` bevat, wat betekent dat de guard het verzoek daadwerkelijk heeft geweigerd.
- **`garak` (adviserend)** — voert garak `--probes promptinject,dan,leakreplay` uit
  tegen een lokale OmniRoute-instantie (`http://localhost:20128/v1`). Dit is afhankelijk van een
  providergeheim (`PROMPTFOO_PROVIDER_KEY`); zonder dit geheim wordt de taak zonder fouten overgeslagen en
  de opdracht heeft het achtervoegsel `|| true`, zodat er wel wordt gerapporteerd zonder dat CI mislukt.

De dekking van de guardhelper (`createInjectionGuard` / `withInjectionGuard`)
omvat elke `/v1`-route die prompts verwerkt; prompttekst wordt opgehaald uit
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` door
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts`.
