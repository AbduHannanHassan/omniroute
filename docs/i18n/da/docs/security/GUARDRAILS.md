# Guardrails (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sandhedskilde:** `src/lib/guardrails/`
> **Senest opdateret:** 2026-08-29 — v3.8.51 (herkomsten af Video Bridge-transskriptioner deklareres af kalderen,
> men er endnu ikke verificeret af serveren — præciseret i henhold til #11661)

Guardrails håndhæver sikkerhed, politikker og indholdstransformationer ved grænsen
mellem OmniRoute og upstream-udbydere. Hver guardrail kan inspicere (og
eventuelt afvise, transformere eller annotere) request-payloads (`preCall`) og
upstream-svar (`postCall`).

Systemet er **fail-open**: Hvis en guardrail kaster en fejl under kørsel, registrerer
registreringsdatabasen fejlen og fortsætter med den næste guardrail i stedet for at lade
requesten fejle. Blokering er en eksplicit beslutning (`block: true`), aldrig et uheld.

## Indbyggede Guardrails

Registreringen indlæser automatisk seks guardrails i prioritetsrækkefølge ved import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Navn                | Fase(r)        | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lavere prioritetstal kører **først**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Intercepts billedbærende anmodninger rettet mod **ikke-vision modeller** og enten
omdirigerer hele anmodningen til en vision-kompatibel model eller erstatter billeddelene
med tekstbeskrivelser produceret af en konfigurerbar visionmodel før
den opadgående kald. Dette gør det muligt for tekst-only udbydere at håndtere
multimodale payloads gennemsigtigt.

Flow:

1. Spring over, hvis målmodellen allerede understøtter vision (medmindre den optræder i
   den tvungne bro-liste `isVisionBridgeForcedModel`).
2. Uddrag billeddele via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerer til **den samlede mediedetektor**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den
   eneste sandhedskilde delt med kombinationskompatibilitetsfilteret.
   Uddragning er tilladt til topniveau dele af de former,
   `replaceImageParts` kan splices tilbage (udtræk↔erstat kontrakt): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, og Responses API `input_image`. Næstede hits og
   indikator-only former er kombinationsfiltermateriale og bliver aldrig udtrukket.
   Spring over, hvis ingen findes.
3. Løs runtime-konfiguration via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nye `modalityBridge*`
   indstillingsnøgler vinder; legacy `visionBridge*` nøgler forbliver en **én-cyklus
   tilbagefald** (rollback vindue). Spring over før nogen medietransport, når
   broen er deaktiveret.
4. Modevælger (`modalityBridgeVisionMode`, se tabel nedenfor) beslutter
   omdirigering vs beskrivelse. Omdirigering returnerer `modifiedPayload` med kun `model`
   byttet, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivelsesvej: begræns billeder til `maxImages`, sammensæt den opgavebevidste prompt,
   konsulter beskrivelsescache, kald visionmodellen **parallelt**
   (`Promise.allSettled`), og injicer `[Image N]: <description>` tekstdele på
   deres plads. En mislykket beskrivelse giver `null`, og den originale billeddel er
   **beholdt** (#4012) — undtagen på kombinationsbeskrivelsesvejen, når hver
   beskrivelse mislykkedes, hvor en bekræftet ikke-vision opadgående får en
   `(unavailable — no vision-capable provider connected)` stub i stedet (#8430).
6. Returner `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modevælger (`modalityBridgeVisionMode`)

| Mode       | Standard | Adfærd                                                                                                                                                                                                                                                                           |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Legacy heuristik, urørt (#6640/#7204): ikke-kombination/`auto/` modeller omdirigerer til den bedste visionmodel, medmindre den oprindelige model allerede har brugbare legitimationsoplysninger (så beskriver); kombinationsmål beskriver altid.                                 |
| `describe` |          | Beskriv altid — omdirigeringsblokken springes helt over; brugerens valgte model svarer altid.                                                                                                                                                                                    |
| `reroute`  |          | Tving omdirigering: beskyttelsen af den credentialed-model omgås. Omdirigering-**mål** legitimationsbeskyttelsen gælder stadig — når der ikke findes et brugbart visionmål, falder anmodningen igennem til beskrivelse, så rå billeder aldrig når en tekst-only backend (#8430). |

Tvangsmodi kortslutter **før** den automatiske heuristik kører; `auto` adfærd
er byte-identisk med pre-PR-1 guardrail.

#### Opgavebevidst beskrivelsesprompt (`modalityBridgeVisionTaskAware`)

Standard **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) tilføjer
teksten fra **den sidste brugermeddelelse** (afkortet til 500 tegn) til den grundlæggende
beskrivelsesprompt, hvilket styrer beskrivelsen mod hvad brugeren faktisk spurgte
(codex-vision-proxy mønster) og beder visionmodellen om at transskribere synlig
tekst. Med flaget slået fra — eller ingen brugers tekst — bruges den grundlæggende prompt uændret.

Den beskrevne selvsløjfe's egen OpenAI-kompatible anmodning (`callVisionModelSingle()` i `visionBridgeHelpers.ts`) anmoder altid om `image_url.detail: "high"` — ubetinget, for hver opkalder/udbyder, ikke begrænset af noget klient signal. Lav-detalje sampling forringer OCR-nøjagtigheden for netop den tekst-transskriptionsopgave, som denne prompt beder om, så den beskrevne anmodning selv beder altid om høj detalje uanset hvilket detaljeniveau den oprindelige indgående anmodning brugte. Dette påvirker kun den interne beskrivelsesanmodningskrop; det ændrer ikke, hvordan OmniRoute videresender opkalderens egen `image_url.detail` på den primære anmodning — den standard anvendes separat, og kun for detekterede OpenCode-klienter, i `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Den Anthropic wire-format gren af den beskrevne selvsløjfe har ikke noget `detail` felt og påvirkes ikke af nogen standard.

#### Beskriv output cap (`modalityBridgeVisionMaxChars`)

| Nøgle                          | Standard | Område              |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyder **ingen grænse** — beskrivelsen, der returneres af `callVisionModel()`, sendes uændret igennem, hvilket bevarer den eksisterende adfærd. Enhver værdi i området 100–50000 afkorter beskrivelsen med et `…` suffix, før den bliver indsat tilbage som `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`). Hæv dette for detaljerige OCR-opgaver, hvor den nedstrøms model har brug for den fulde transskription; sænk det for at begrænse tokenbrug på snakkesalige visionmodeller. Dashboardfeltet findes på Vision-fanens Avanceret panel (`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) og begrænser enhver værdi mellem 1 og 99 op til 100 gulvet, mens en eksplicit `0` forbliver uændret — `0` er en gyldig Zod-værdi i sig selv (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ikke blot den "usatte" standard.

#### Beskriv cache (`modalityBridge/bridgeCache.ts`)

In-memory LRU + TTL cache til beskrivelsesoutput, delt proces-bredt. Nøgle = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med længde-præfiks indramning (ingen felt-grænse-kollisioner). Modelkomponenten er den **konfigurerede** bro-model, ikke den model, der faktisk svarede — `callVisionModel` kan falde tilbage internt, og nøgleopslag pr. forsøg ville fragmentere cachen. Mislykkede beskrivelser caches aldrig. Indstillinger:

| Nøgle                           | Standard | Område  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Fjernbillede normalisering (selvsløjfe beskriv/base64 hentning)

Når broen henter et **fjernt** billede selv — den Anthropic beskrevne selv-anmodning og claude-wire-format base64 konvertering (`ensureBase64ImagesForClaudeWire`), begge via `fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — bliver den resulterende data URI sendt gennem `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) før den bliver indlejret i vision-model anmodningen. Overdimensionerede billeder bliver nedskaleret til en **2048px lang kant** (som matcher resize-grænsen, OpenAI/Anthropic allerede anvender server-side), hvilket reducerer upload bytes/latens uden at ændre hvad vision-modellen ser. Resize bruger `sharp`, indlæst via dynamisk import: på en platform hvor dens native binære fil ikke kan indlæses, **kaster** `normalizeDataUri()` **aldrig** — det falder tilbage til en passthrough af de originale bytes, så beskriv/base64-konverteringsstien altid forbliver funktionel. Ikke-billede bytes (en hentning, der ikke returnerede et decodable billede) bliver også sendt igennem uændret. Denne normalisering er begrænset til billeder, som broen henter til sin egen selv-anmodning — den anvendes aldrig på opkalderens rå passthrough payload, i overensstemmelse med opt-in-only mutationsprincippet (Hard Rule #20).

#### Indstillingsskema + migration

De nye `modalityBridge*` nøgler er Zod-validerede i `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, den `modalityBridgeCache*` trio, og gruppen `modalityBridgeAudio*`, der bruges af Audio Bridge. Migration `141_modality_bridge_settings.sql` kopierer eksisterende legacy `visionBridge*` værdier til de matchende nye nøgler (idempotent, overskriver aldrig en operatør-sat `modalityBridge*` værdi); de legacy nøgler forbliver accepteret som en læse-fald tilbage i en udgivelsescylcus.

#### Transparens header + stats

Beskriv-transformerede svar bærer `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (opbygget af `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`, stemplet af `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`). Omdirigerede anmodninger får **ingen** header — payloaden var uændret, og modeludskiftningen er allerede synlig i svarets `model` felt.

`GET /api/modality-bridge/stats` (administrationsautentificering, samme niveau som `GET /api/settings`) returnerer de in-memory per-modality tællere `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` for `vision`, `audio`, og `video`. `averageLatencyMs` bruger `latencySamples`, ikke alle forsøg, som sin nævner; en operation uden timing fabrikker ikke et nul-millisekund sample. `bridged` forbliver det bagudkompatible alias for succesfulde konverteringer; mislykkede forsøg øger det ikke. Tællere nulstilles ved procesgenstart efter design (telemetri, ikke regnskab).

#### Dashboard konfiguration

Den dedikerede dashboard-side er  
`/dashboard/settings/modality-bridge`. Dens URL-adresserbare `Vision`, `Audio`  
og `Video` faner bevarer forespørgselsparametre, mens de skifter `tab` værdi.  
Vision-fanen eksponerer aktivering, tilstand, modelvalg (inklusive den automatiske  
standard), opgavebevidst prompting, avancerede timeout/billede/beskrivelse-længde/cache  
grænser, runtime  
tællere og en beskyttet prøveanmodning. Audio-fanen er også aktiv: den eksponerer  
aktivering, en STT-enkelt modelvælger med Auto, timeout/max-clip grænser, audio  
tællere og en `input_audio` prøve test. Video-fanen er funktionel: den rapporterer  
FFmpeg/ffprobe runtime-tilstand — en af fire eksplicitte UI-tilstande (`unknown` mens  
proben er i gang eller ikke kunne fuldføres, `restricted` på en ikke-loopback  
dashboard-vært, hvor proben springes over på klientsiden, `unavailable` når den er  
proberet og bekræftet som manglende, eller `available` med FFmpeg/ffprobe versioner) —  
bevarer aktiverings/model/frame/video/timeout grænser, filtrerer modelvælgeren til  
vision-kompatible modeller og eksponerer video tællere.

Det tidligere Vision Bridge-kort under AI-indstillinger er et kompatibilitetslink til den  
nye side; det ejer ikke længere en anden kopi af formularen. Media Providers linker også  
Image-to-Text og Speech-to-Text workflows til de tilsvarende Modality Bridge faner uden  
at fjerne den eksisterende Speech-to-Text legeplads.

**Selv-loop adgangs-bypass:** når beskrivelsesopkaldet ruter gennem OmniRoute's  
egen `/v1` selv-loop (ikke-standard leverandørmodel), sender underanmodningen  
`x-omniroute-admission-bypass: internal` og bliver autentificeret med den  
løste selv-loop legitimationsoplysning — den lokale `sk_omniroute` sentinel i lokal  
tilstand, eller den operatorkonfigurerede `OMNIROUTE_API_KEY` / `ROUTER_API_KEY`  
miljønøgle (#1350), så `REQUIRE_API_KEY=true` implementeringer stadig kan køre  
beskrivelsesopkaldet. Bypass'en respekteres kun for disse nøjagtige legitimationsoplysninger,  
så eksterne klienter kan ikke bruge headeren til at springe adgang over.

Legacy standarder findes i `src/shared/constants/visionBridgeDefaults.ts`; de  
nye mode/opgavebevidste/cache standarder og indstillingsløseren findes i  
`src/shared/constants/modalityBridgeDefaults.ts`. Beskyttelsesbarrieren eksponerer en  
`deps` konstruktørmulighed, så tests kan injicere falske `getSettings` og  
`callVisionModel` implementeringer.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepts audio-bærende chat-anmodninger, før de når et mål, der ikke  
er kendt for at acceptere audio input. Det omdirigerer aldrig chat-anmodningen:  
audio dele transkriberes gennem den eksisterende OpenAI-kompatible multipart  
endpoint, og den valgte chat-model fortsætter med teksttranskriptioner.

Flow:

1. Løs `supportsAudio` gennem `getResolvedModelCapabilities()`. Eksplicit  
   leverandør-register metadata vinder, derefter statisk modelmetadata, derefter  
   synkroniseret `modalities_input`. En erklæret inputliste uden `audio` er `false`;  
   ingen kapabilitetsevidens forbliver `null`. Både `false` og `null` aktiverer den  
   konservative bro, mens `true` omgår den.
2. Løs `modalityBridgeAudio*` indstillinger og udtræk spliceable top-level  
   audio dele fra hver besked gennem den delte `detectMediaParts()`  
   detektor. Understøttede wire former er OpenAI `input_audio`, `audio_url`, og  
   `source.media_type: "audio/*"`. Næstet audio opdages til routing, men fjernes ikke  
   af splice-stien. Arbejdet er begrænset af `modalityBridgeAudioMaxClips`;  
   senere dele forbliver urørte.
3. Respekter en konfigureret `provider/model`, eller lad `selectAudioBridgeModel()`  
   gå gennem `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalog rækkefølge og vælge den  
   første model med en brugbar aktiv leverandørlegitimationsoplysning.
4. `callAudioTranscription()` konverterer base64/data-URI audio til en multipart  
   `file`, eller downloader en fjern `audio_url` gennem den offentligt kun udgående  
   beskyttelse med DNS pinning og en 25 MB grænse. Den POST'er derefter filen og den  
   valgte model til den lokale `/v1/audio/transcriptions` selv-loop, autentificeret med  
   `resolveSelfLoopBearer()`. Den eksisterende transkriptionsrute udfører normal  
   legitimationsoplysning opslag, cooldown/rate-limit håndtering og leverandør  
   dispatch.
5. Succesfulde opkald erstatter deres dele med `[Audio N]: <transcript>`. Opkald  
   kører med `Promise.allSettled`: en individuel fejl bevarer den originale  
   audio del (#4012 kontrakt). Hvis hvert opkald fejler, og målet viser sig at være  
   `supportsAudio === false`, bliver delene  
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 kontrakt). For  
   et ukendt mål (`null`), forbliver et alt-fejl resultat urørt. Et bevist  
   tekst-only mål uden brugbar STT legitimationsoplysning modtager den samme  
   eksplicit stub uden at udstede et netværksopkald.

Succesfulde transkriptioner bruger den proces-bredde Modality Bridge LRU/TTL cache.  
Nøglen kombinerer audio referencen, den stabile `audio-transcription` operation  
etiket og den valgte STT model; fejl caches aldrig. Audio forsøg opdaterer  
den delte `bridged`, `cacheHits`, `failures`, og `lastUsedAt` tællere.  
Transformerede svar bærer  
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; urørte  
anmodninger modtager ikke et Audio Bridge segment.

Runtime indstillinger er DB-bakket og Zod-valideret:

| Nøgle                         | Standard | Område            |
| ----------------------------- | -------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                 |
| `modalityBridgeAudioModel`    | `""`     | Auto eller STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10              |

Den delte cache forbliver kontrolleret af `modalityBridgeCacheEnabled`,  
`modalityBridgeCacheTtlMinutes`, og `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts top-level video dele i Chat Completions `messages` og Responses
API `input` før en målrettet uden kendt indfødt videosupport kaldes.
Understøttede former er `input_video`, `video_url`, `video_source`, HTTPS URLs,
og `data:video/*;base64,...` data URIs. Almindelige filnavne i tekst behandles ikke
som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ejer anmodningsgennemgang,
kapabilitet/politik kontrol, per-anmodning aggregation, og respons payload.
Per-video arbejde — erhvervelse, hele-resultat cache, beskrivelse af en frame
sekvens (som fusionerer enhver caller-dekleret lydtranskript), og per-forsøg
metrics/abort/rengøring — er skjult bag `processVideoPart` i
`videoBridgePipeline.ts`, kaldt én gang per video del inden i `preCall`'s loop.
Det modul definerer også de eksplicitte portgrænser `VideoMediaBrokerPort`
(erhvervelse af bytes og udtrækning af samplede frames), `VideoAudioTranscriptionPort`
(fusionering af en caller-dekleret lydtranskript med de samplede undertekster), og
`VideoDrilldownPort` (den legacy rå-lager form). Produktions STT og frame retention
er sammensat omkring den beskrivende port gennem `createVideoSttAdapter` og
`createVideoDrilldownAdapter`; sidstnævnte bruger den delte opaque-handle livscyklus.

Den offentlige `/v1` anmodningssti importerer eller kalder aldrig en underproces. Fjernt
videoer downloades under en grænse på 50 MiB; inline base64 videoer har en
konservativ 36 MiB dekodet per-video grænse, så modellen/meldinger/indramningskuvert
kan forblive inden for den offentlige JSON anmodningsoptagelsesgrænse på 50 MiB. Inline
længde og dekodet-størrelse estimater kontrolleres før tildeling. HTTPS er
påkrævet på den indledende fjernt URL og hver omdirigering, ved hjælp af den eksisterende
offentlige-only outbound guard med DNS pinning. Bytes krydser derefter den præcise interne
`POST /api/modality-bridge/video/extract` broker grænse. Den rute er både
`LOCAL_ONLY` og `SPAWN_CAPABLE`, accepterer kun en per-proces autentificeret,
trusted-loopback anmodning, og accepterer aldrig en URL, filsystemsti, eksekverbar,
eller argumentliste. API body-størrelse pipeline og handlerens inkrementelle body
læser håndhæver uafhængigt en 50 MiB broker input grænse. Dens begrænsede kø kører
én udtrækning ad gangen, tillader fire ventende opgaver, og begrænser ventende input til
100 MiB.

Inden i brokeren læser `ffprobe` en privat lokal fil; den faste format
allowlist udelukker playliste og manifest formater. For tilladte MOV-familie
containere forbliver eksterne MOV data referencer deaktiveret som standard, og den
faste kommando tilmelder sig ikke dem. Både `ffprobe` og `ffmpeg` bruger
`file`-only protokol whitelist, én tråd, faste argument arrays, ingen shell,
og eksekverbare der er løst fra `PATH`. Vedhæftede-billede cover streams er ikke
afspilbare kandidater. Alle afspilbare streams skal opfylde grænserne, og en
eksplicit standard stream foretrækkes før den deterministiske laveste-indeks
fallback. Videoer er begrænset til 600 sekunder, 8.192 pixels per dimension, og
33.554.432 kilde pixels. FFmpeg sample 1–16 midpoint JPEG frames, skalerer ned
den lange kant til højst 1.024 pixels uden at opskalere mindre inputs, og
modtager aldrig en URL. Sampling er `uniform` som standard. De valgfrie
`scene_aware` og eksperimentelle `segment_aware` politikker udfører én yderligere
fast FFmpeg passage over den allerede validerede lokale stream, vælger begrænsede
`showinfo` scene tidsstempler, og falder deterministisk tilbage til de samme
uniforme midtpunkter ved detektorfejl, timeout, malformet output, eller et tomt
kandidatsæt. Segment-aware tilstand tildeler midpoint samples proportionalt til
de validerede scene intervaller; segment-aware beviser og fallback adfærd er
detaljeret nedenfor. Den hårde 16-frame grænse er
anvendt efter valg i hver politik. Når en scene-aware anmodning kun har et
én-frame budget, bruger den det uniforme midpoint af den aktive fuld-video eller fokus
vindue og rapporterer `policyEffective: uniform`: en enkelt valgt scene frame
kan ikke bevare begge tidsmæssige ender. En caller kan valgfrit give en
begrænset fokus vindue (`start`/`end` sekunder); grænserne er begrænset til mediets
varighed, omvendte eller ikke-finite vinduer afvises, og alle sampling
politikker udføres kun inden for det normaliserede interval. Det resulterende
vindue inkluderes i sampling metadata og i den ikke-betroede beskrivelse
præfiks, så downstream modeller kan skelne et fokuseret uddrag fra den fulde
tidslinje.

Semantisk undertekst fokus er en separat, eksplicit indstilling. Den
standard `full` analyse tilstand bevarer den eksisterende frame prompt og sender aldrig
anmodningstekst videre til undertekst modellen. I `focused` tilstand læser broen kun den
seneste ikke-tomme bruger-forfattede `text`/`input_text` fra den samme Chat eller Responses
container, normaliserer det til NFC, kollapser kontrol tegn og whitespace,
og begrænser det til 500 Unicode kodepunkter. Et tomt resultat falder tilbage til den
præcise `full` prompt. Et brugbart hint serialiseres som JSON i en dedikeret
ikke-betroet-bruger-kontekst blok og må kun prioritere observerbare detaljer; det
kan ikke tilsidesætte den separate advarsel mod at følge instruktioner synlige
eller hørbare i mediet. Tekstligt fokus udleder aldrig `start`/`end` eller ændrer
den tidsmæssige sampler.

#### FU-07 strukturel segment bevis

`segment_aware` bruger én begrænset pre-analyse passage over den allerede validerede
lokale video stream. Den faste filter kæde skalerer først til højst 320 pixels
bred, opdager scene ændringer og frosne intervaller, og sampler derefter ved 1 frame per
sekund for sløring, gennemsnitlig luma, og spatial/tidsmæssig information. Passagen er
begrænset til 600 strukturelle samples, én FFmpeg/filter tråd, den samme
`file`-only protokol og container allowlists, en 1 MiB proces-output grænse,
og højst 30 sekunder inden for brokerens delte abort/deadline. Den accepterer aldrig
en kommando, filter, sti, eller URL fra anmodningen.

De strukturelle værdier er deterministisk sampling evidens, ikke semantisk video forståelse. De infererer ikke emner, handlinger, billedtekster, tale eller brugerintention. Scene- og frysegrænser danner segmenter; fryse dækning, sløring, eksponering, rumlig detalje og tidsmæssig ændring påvirker kun, hvordan det eksisterende 1–16 frame budget fordeles. Et fuldt fryset segment er begrænset til én frame, mens ikke-frosne segmenter konkurrerer om det resterende budget. Når grænserne overstiger antallet af frames, bevares ensartet tidslinjedækning, så hurtige tidlige klip ikke kan skjule et langt efterfølgende segment. Scenegrænser inden for den 1-sekunders analyseopløsning af en frysegrænse samles.

Manglende filtre, fejlbehæftet/tom evidens, en detektorfejl eller den begrænsede pre-analyse timeout fejler åbent til den nøjagtige ensartede midpoint-politik. En opkaldsabort eller mæglerdeadline fejler ikke åbent: det afslutter den igangværende underproces, forhindrer senere frameudtrækning, og det private midlertidige træ fjernes i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererer deterministiske reelle FFmpeg fixtures til post-dedup billedtekst-omkostningsbesparelser, tæt bevægelsesbudgetfordeling, sløring/eksponering/SI-TI evidens, hurtige klip med en lang hale og gradvise falske positiver. Det registrerer pre-analyse vægttid og, hvor `/usr/bin/time` er tilgængelig, børns CPU og peak RSS. Dets kvalitetskontroller er strukturelle orakler kun. Den reelle billedtekst-modelkvalitet forbliver `HOLD`, fordi dette redskab ikke har noget autoriseret endpoint eller frosset dommer. Monetære besparelser forbliver også `HOLD`, medmindre `--caption-cost-per-call-usd` leverer et eksplicit positivt pr. opkald estimat; scriptet fabrikkerer aldrig noget resultat.

Hver frame er begrænset til 4 MiB, alle rå frames sammen til 23 MiB, og den serialiserede mæglerrespons til 32 MiB. Et privat midlertidigt bibliotek fjernes i `finally`. OmniRoute pakker ikke FFmpeg og accepterer ikke en brugerdefineret eksekverbar sti. Før billedtekstning anvender broen et konservativt visuelt deduplikeringspas: hver JPEG reduceres til en 16×16 gråtoner buffer og sammenlignes kun med den sidste gemte frame. For et anmodet billedtekstbudget over én frame, leverer udtrækning en begrænset kandidatpulje på op til det dobbelte af det budget og aldrig mere end 16 frames. Den anmodede grænse anvendes kun efter deduplikeringsprocessen, med de første og sidste valgte kandidater bevaret under den endelige udtynding, når budgettet er mindst to. Den versionerede `grayscale-16x16-mean-cells-v2` politik bruger den større af gennemsnitlig luma delta og forholdet af miniatureceller, hvis normaliserede delta er mindst 0.05. Duplikatgrænsen er den konstante 0.04, valgt for forudsigelighed snarere end eksponeret som en runtime indstilling. Dette sekundære højkontrast signal bevarer små bevægelser og synlige tekstændringer, som en gennemsnitlig sammenligning kan skjule. Comparator- eller dekoderfejl fejler åbent og bevarer dækning. Output metadata adskiller udtrukne kandidater, succesfuldt brugte frames og visuelle duplikater, der er droppet.

En eksplicit markeret videodel kan anmode om et tidsstemplet kontaktark. Broen bygger højst et 4-søjlet, 16-frame JPEG gitter. Hver 512-pixel celle brænder sin kilde tidsstempel ind i et højkontrast bundbånd, mens de samme tidsstempler forbliver i tekstuel metadata til downstream-association og revision. Det komplette JPEG forbliver begrænset til 32 MiB. Hvis `sharp` ikke kan dekode eller komponere gitteret, falder broen tilbage til de individuelle JPEG frames; en klientabort spreder stadig gennem arkoperationen.

Promotionsbevis er bevidst adskilt fra den syntetiske kompositions mikrobenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` definerer en skema-versioneret A/B redskab til reelle OpenAI-kompatible visionsmodeller. Det måler leverandør-rapporterede tokens, end-to-end vægttid (inklusive arkkomposition), model-opkaldsantal og manifest-defineret faktabevarelse. Rå modelrespons er ikke skrevet til rapporten; kun SHA-256 digester og matchede fakt-ID'er bevares. Redskabet foretager ingen netværks- eller betalte modelopkald, medmindre `--execute-real` er givet, og `--model`, `OMNIROUTE_BASE_URL` og `OMNIROUTE_API_KEY` er konfigureret. Uden den eksplicitte reelle kørsel forbliver dens maskinlæselige dom `HOLD`; syntetiske payload/opkaldsantal målinger alene er ikke promotionsbevis.

Den separate `scripts/perf/video-bridge-promotion-eval.ts` forbruger FU-07 eller FU-09 observationer. Promotionsoptagelse kræver alle otte syntetiske scenarietyper plus et saneret reelt klip, mindst tre målte gentagelser pr. rolle og sag, alle ti erklærede metrics, frosne medier/prompt/forventede-fakt/indstillinger digester, unikke observations-ID'er og verificeret seedet A/B rækkefølge. Udførelseskvitteringen binder corpus digest, nøjagtig kandidat SHA og modelrevision. Manglende eller ugyldige målinger forbliver `HOLD`, herunder CPU over 30 s, peak RSS over 512 MiB eller pre-analyse over 30 s. Disse er bevisoptagelsesgrænser, ikke en ny runtime RSS håndhævelsesgaranti.

FU-07 kræver mindst 98% kvalitetsbevarelse og p95 latenstid ikke mere end 1.2x baseline, plus enten en 0.05 absolut case-balance gennemsnitlig recall forbedring ved ækvivalente gennemsnitlige billedtekstopkald, eller mindst 10% færre gennemsnitlige post-dedup billedtekstopkald. FU-09 kræver mindst 0.85 kvalitet, 95% bevaring, 20% p95 latenstidsreduktion og 10% tokenreduktion. Kritisk faktatab, injektionsoverholdelse eller manglende brug forhindrer promotion. Én udførelse kan ikke promovere noget: `--previous-report` bekræfter to distinkte, ikke-overlappende, konsekutivt berettigede udførelser af den samme politik/modelrevision/kandidat/corpus. Et samplingeksperiment kan ikke bekræfte et kontakt-ark eksperiment.

Samlerne skal score svar i hukommelsen og gemme `responseDigest` plus
metrics og observationsbindinger, aldrig svartekst. Forbrugeren læser også
legacy rå observationer, men kopierer aldrig den tekst ind i sine rapporter. Præcist
én af `responseDigest` eller `rawResponseText` accepteres for hver observation.
Den versionerede tilladte liste forbliver tom med en uforanderlig `hold` standard. En
berettiget post kræver sin evidensreference, politik, modelrevision, præcise
kandidat SHA, manifest digest og to distinkte kørsel ID'er; konfliktende kontekster
afvises. Disse metadata er en revisionskontrakt, ikke bevis for, at en refereret
fil indeholder ægte målinger. Gennemgå de faktiske kvitteringer, før du tilføjer
nogen post. Management stats endpoint og Video dashboard viser konservativ
beredskab. Et konfigureret modelalias alene etablerer ikke sin revision eller
den kørende kandidat SHA, så det nuværende dashboard rapporterer `HOLD` i stedet for
at genbruge berettigelse fra en anden eksekveringskontekst. Eksplorativ
eksperimentel valg forbliver adskilt fra promovering; ingen standard ændres automatisk.

Opkaldere kan vedhæfte et valgfrit `transcript.cues` array til en understøttet video
del, når de allerede har justeret tekst. Hver cue skal bære `text`, et
afgrænset `start`/`end` interval inden for den undersøgte varighed, og en hvidlistet
`source` (`client`, `embedded`, eller `audio-bridge`); `confidence` er som standard
`1` og skal forblive mellem `0` og `1`. Præcise duplikat cues sammenlægges.
OmniRoute starter aldrig transkription fra disse metadata: validerede cues
kopieres ind i det beskrevne resultat med kilde, tillid og interval, og
vises som ikke-pålidelige observationer sammen med rammeundertekster. Ugyldig,
uden for rækkevidde, eller provenance-fri tekst afvises i stedet for at blive blandet ind i
undertekststrømmen. Begge request-body transkriptkanaler normaliserer leveret
proveniens til `client`, inklusive selv-asserted `embedded` eller `audio-bridge`
labels. Kun en server-ejet adapter kan tildele disse betroede labels gennem
den kode-only `trustedSource` argument; et request JSON-felt kan ikke nå
det argument. Transkript tekst forbliver ikke-pålidelig medieafledt indhold,
uanset dens proveniens, og må aldrig bestemme autorisation.

En avanceret opkalder kan levere et `audioTranscript` spor for den samme video;
det behandles som klientleveret tekst, ikke bevis for servertranskription.
Fusionssømmene kører visuelle og auditive observationer under
én deadline og abortsignal, ordner dem på en fælles tidslinje, sammenlægger
præcise duplikater, og rapporterer et delvist resultat, når kun den ene side lykkes.
Et ugyldigt `audioTranscript` degraderes til det delvise resultat — den visuelle
beskrivelse bevares, og den auditive gren registrerer en saniteret fejlkode —
i stedet for at fejle hele videoen. Per-gren tilgængelighed, den delvise flag,
og de saniterede fejlkoder bevares i det beskrevne resultat, i
guardrail metadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i resultat-cache metadata, og i bro
fusions tællere. Den standard Video Bridge sti aktiverer ikke tale-til-tekst
eller downloader en anden mediekopi; uden det eksplicitte spor forbliver det
kun video.

**Transkript opbevaring (#12150 P1).** Dette gælder automatisk, når
Video Bridge (selv opt-in) gengiver en transkript cue — der er ingen separat
opbevaringsflag. Når en anmodning gengiver en hvilken som helst transkript cue (en
opkalder-deklareret `transcript` eller en fusioneret `audioTranscript`), markerer
guardrail den som `videoBridgeObserved` og producerer en redigeret skygge af video
beskrivelsen — en identisk gengivelse, hvor hver cues fritekst krop er
erstatttet med `[redacted-video-transcript]`, bygget ved at erstatte det strukturerede
cue felt, før strengen samles (aldrig ved at analysere den fladede tekst, så ingen cue
indhold — modstridende eller almindeligt, inklusive kroppe der indeholder `]` såsom
`[inaudible]`/`[music]` — kan overleve). Den vedholdte call-log anmodningskrop
bytter hver video-afledt tekstdel med den redigerede skygge, matchet ved indhold
lighed; `fullText` ankeret læses igen fra den færdige pre-call guardrail
payload, så matchen stadig lykkes efter senere kæde guardrails (PII og
credential maskers, prioriteter 10/95) omskriver beskrivelsesteksten på stedet og
efter system-prompt/handoff/hukommelsesinjektion omformer meddelelsesarrayet. Den
krop, der sendes opstrøms til modellen, er uændret. En observeret anmodning fylder
heller ikke nogen varig Hukommelse (både request- og response-afledt ekstraktion springes),
så modellens eget svar kan ikke ekko transkript tekst ind i Hukommelse.

**Rå video felter (#12430).** Når broen er aktiveret, og indfødt videosupport er ukendt eller fraværende, aktiverer definerede `transcript`/`audioTranscript` felter også `videoBridgeObserved`, selv efter beskrivelsesfejl eller en `maxVideos` grænse. `null` og tomme strenge tæller; fraværende felter og ikke-video metadata gør ikke. Beholdte kopier redigerer disse felter eller udelader anmodningen, og caches/Hukommelse omgås. Udbyderens payload forbliver uændret.

Yderligere beholdte kopier bruger det samme observerede-anmodningssignal. Den rå
pre-guardrail klient-anmodningssnapshot, i-hukommelsen ventende anmodning, og tidligt
afviste-anmodningslog strukturelt erstatter transkriptfelter i videodelene;
streng prompts syntetiseret af pipeline faser og kontekst overdragelse redigeres
ved den vedholdte-anmodnings-krop sink. Den vedholdte `video_content_removed` markør
gør `previous_response_id` fortsættelse fejle lukket i stedet for at rekonstruere
tekst, der bevidst blev kasseret. Hvis en observeret anmodning mister sin
per-del redigeringsskygge før logning, eller selv en af flere video skygger
mislykkes med at matche efter senere anmodningsmutationer, udelades den beholdte
anmodningskrop helt i stedet for at bevare et delvist redigeret transkript.

For en observeret anmodning kan et modelrespons citere enhver del af transkriptet uden en struktureret cue-grænse. Dens vedholdte opkaldslog `responseBody` bliver derfor erstattet af en udeladelsesmarkør; det detaljerede pipeline-artifact (som kan inkludere upstream/klientkroppe og stream chunks) opbevares ikke. Semantiske, idempotente og ræsonnerings-replay caches omgår læsninger og skrivninger for den anmodning. Udbyderanmodningen og klient-synlige svar forbliver uændrede. Tidlige keepalive-bytes drænes fra den midlertidige buffer, når det detaljerede artifact udelades. Kiros fejlbehæftede EventStream advarsel rapporterer kun payload byte tælleren, aldrig indholdet eller JSON-parserens rå fejl.

Dette hævder ikke, at hver urelateret udbyder/plugin-diagnose er blevet revideret; den bredere retained-sink feje er sporet i #11658.

Den interne `/api/modality-bridge/video/drilldown` livscyklus er et separat, loopback/token-godkendt cache-substrat. Hver operation kræver også en kanonisk opaque principal ID. Før en produktionsopkalder aktiveres, skal den udlede den ID fra den godkendte lejer og må aldrig videresende en klient-valgt værdi. Cache-nøgler binder den principal til kanoniske session- og video-referens-ID'er, opbevarer kun deres SHA-256-afledte nøgler, og afgrænser både læsninger og sletning til den samme principal. Cachen opbevarer højst 16 afledte JPEG-rammer pr. post, udløber dem efter ti minutter, og understøtter begrænsede `start`/`end` læsninger eller eksplicit session-sletning.

Hver principal er begrænset til 16 poster og 64 MiB af kanoniske JPEG-data. Disse grænser er uafhængige af den globale 64-poster/256 MiB loft: principal kvote presser kun den pågældende principals mindst for nylig brugte poster, før global LRU-sletning overvejes. Udløbet poster fejes fra både principal og global regnskab ved cache-aktivitet, mens annullering og valideringsfejl ikke forpligter en delvis erstatning.

Cachen afviser ikke-kanonisk Base64, overskydende padding, ikke-JPEG medier, fejlbehæftede eller afkortede JPEG'er, og JPEG'er, der producerer en advarsel under en begrænset fuld-billede `sharp` dekodning. Den genkoder hvert accepteret billede som en kanonisk JPEG, udleder bredde og højde fra de dekodede bytes i stedet for at stole på opkalderfelter, og kasserer eventuelle efterfølgende polyglot bytes i stedet for at bevare dem. Kun den begrænsede kanoniske komprimerede buffer opkræves til begge kvoter. JSON wire grænsen inkluderer Base64 overhead for 32 MiB dekodet-input loft. Hver
opbevaret afledning registrerer sit validerede JPEG-format/opløsning, samplingpolitik,
afledningsversion, oprettelsestid, server-beregnet indholdshash, og hashed forælder
reference plus den betroede opkalder's forælder-indhold hash. Annullering kontrolleres
mellem asynkrone dekodnings/hash faser før den atomiske cache-commit.

Den produktionsproducer genbruger allerede-afledte broker-rammer kun efter vellykket
visuel analyse, uden anden video-download/udtrækning. Den kræver operatør
`modalityBridgeVideoDrilldownEnabled=true`, strenge per-del `drilldown: true`, og
en godkendt API-nøgle post ID. Klient-deklarede principal/session værdier etablerer aldrig
ejerskab. Uden alle tre betingelser hash, ændrer størrelse eller bevarer den
yderligere rammer. Bevaringsfejl bevarer det brugbare visuelle svar. Samtykkede
anmodninger omgår hele-video resultat cachen, så cachede resultater aldrig replay håndtag.

Vellykkede JSON og SSE svar eksponerer højst fire opaque håndtag i den begrænsede
`x-omniroute-video-drilldown` header. Autoriserede browser oprindelser kan læse den header
uden at udvide CORS oprindelsespolitikken. Nye håndtag bruger `v1.<32-byte random base64url
token>`, og registreringen bevarer kun
deres SHA-256 hashes. Læser/header-parseren accepterer også legacy 64-hex tokens.
Den godkendte offentlige forbruger er
`GET /api/v1/video-bridge/drilldown?handle=...`, uafhængigt gated af
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Eksplisit vedholdte falske tilbagekalder
adgang selv når den legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
fald tilbage er aktiveret. Produktionsbevaring har den analoge legacy
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fald tilbage. Begge fald tilbage er som standard slået fra.

Forbrugeren udleder ejerskab fra den godkendte nøgle, anvender nøglepolitik, og
returnerer den samme 404 for ukendte, udløbne og en anden nøgle's håndtag. Den accepterer
`variant=preview|standard|detail` (maksimal JPEG dimension 320/640/1280, aldrig op-skaleret),
`limit=1..8` (eller den legacy `frames` alias, aldrig begge), nul-baseret `page`, og valgfri
`start`/`end` fokus sekunder. Duplikerede
forespørgselsnøgler og omvendte fokusvinduer afvises. Hver returneret variant har en hash
af sit faktiske indhold og faktisk opløsning metadata, knyttet til den opbevarede kilde.
Varianter afledes ved læsning snarere end opbevares som ekstra opbevarede kopier. JSON
svaret, inklusive Base64/kuvert, er begrænset til 32 MiB; en overdimensioneret side returnerer
413, og klienten skal anmode om færre rammer. Læsninger kontrollerer annullering omkring hver
ændring af størrelse og genkontrollerer håndtagets gyldighed før returnering. `DELETE` af ejer er idempotent;
sletning eller TTL-udløb frigiver den opbevarede kilde og brugsregnskab.

Den delte butik er proces-lokal: håndtag udløber ved genstart og er ikke overførbare
mellem uafhængige OmniRoute processer. Ledelsesstatistikker eksponerer effektiv bevaring/
fjernpolitik og aggregerede opbevarede poster/bytes kun, aldrig medier, referencer,
principal ID'er eller håndtag. Videoindstillingspanelet viser disse værdier og kan bevare
begge samtykke-switches. Denne implementeringsdokumentation er ikke live implementering eller
fremme bevis; reel-model accept sporer separat.

Frames er sekventielt undertekster med den konfigurerede Video-model. En tom Video-overstyring arver Vision-indstillingen; hvis begge er tomme, vælger Vision auto-router den effektive vision-kapable model. Succesfulde undertekster erstatter den originale del med et stabilt `[Video description:` præfiks, der også markerer teksten som en ikke-pålidelig medieafledt observation og fortæller downstream-modeller ikke at følge instruktioner fundet i mediet. Frame-caption cache nøgler inkluderer JPEG bytes, prompt, tidsstempel og effektiv model; kun succesfulde undertekster caches. Cache-poster bevarer den faktiske succesfulde producentmodel, inklusive en fallback-model; broen rapporterer `mixed`, når forskellige frames er produceret af forskellige modeller. Et cache-hit genbruger den producentidentitet i stedet for at ommærke den som den anmodede routingplan. Hele video-resultatcachen er nøglebaseret på hver input, der ændrer output — prompt, effektiv model, sampling-politik, frame antal, semantisk analyse tilstand, SHA-256 fingeraftryk af den normaliserede fokus-hint, fokusvindue, `transcript`, `audioTranscript`, og kontaktark-flaget — så ændring af nogen af disse dimensioner er et cache-miss, aldrig en forældet genbrug. Den visuelle dedup politik version, tærskel og begrænset kandidat-frame antal er også eksplicit i resultat-cache nøglen og metadata; en politikændring kan derfor ikke genbruge en forældet hele-video beskrivelse. Resultat-cache v4 metadata bevarer tilstanden og fingeraftrykket, aldrig den rå brugeropgave. Guardrail metadata rapporterer både de anmodede og effektive analyse tilstande; en anmodet `focused` tilstand uden brugbar bruger tekst rapporteres som effektivt `full`.

Guardrail udtrækker hver understøttet videodel, men beskriver ikke mere end `modalityBridgeVideoMaxVideos`. For et mål, der er bevist at have `supportsVideo === false`, bliver mislykkede og over-grænse videoer eksplicit sikre tekstmarkører, så ingen rå video overlever. Når kapabilitet er ukendt, forbliver disse dele urørte. Mål med `supportsVideo === true` omgår broen. Klientanmodningens abortsignal spreder sig gennem download, broker kø, subprocesser og undertekstopkald; aborter stopper mellem videoer og fejler aldrig åbent til rå medier.

Runtime-indstillinger er DB-baserede og Zod-validerede:

| Nøgle                               | Standard    | Område / adfærd                                                                                           |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valgfri runtime, opt-in                                                                                   |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` bevarer generiske undertekster; `focused` bruger begrænset, ikke-pålidelig seneste-bruger kontekst |
| `modalityBridgeVideoModel`          | `""`        | Arv Vision Bridge-modellen                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, eller proportional `segment_aware`; detektorfejl falder tilbage til `uniform`   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                            |

Legacy vedholdte Video timeout værdier over 120 sekunder er begrænset til broker deadline; nye indstillingsskrifter over denne grænse afvises. `GET /api/modality-bridge/video/runtime` kræver betroet stemplet loopback lokalitet før autentificering eller runtime probing, derefter kræver det management auth. Det returnerer kun `available`, sanitiserede FFmpeg/ffprobe versioner, og en fast grund når runtime ikke er tilgængelig. Den interne udtræknings-endpoint er ikke en offentlig upload API: kømæthed returnerer `503` plus `Retry-After`, en opkalder frakobling returnerer `499`, og den faste broker deadline returnerer `504`. Konverterede svar tilføjer `video->text;model=<visionModel>;parts=<videos>` til den centrale `x-omniroute-modality-bridge` header uden at fjerne Vision eller Audio segmenter.

### PII Masker (`piiMasker.ts`)

Kører på **begge** stadier.

- **`preCall`** kloner payloaden, gennemgår `system`, `messages`, `input`, og `prompt` (inklusive almindelige strengobjekter), og anvender `processPII()` (fra `@/shared/utils/inputSanitizer`) til streng `content`/`text` felter. Når `PII_REDACTION_ENABLED=true`, bliver detekteret PII redigeret i den udgående payload. Dette er uafhængigt af `INPUT_SANITIZER_MODE` (som kun kontrollerer prompt-injektionspolitikken). Når redigering er slået fra, registrerer opkaldet detektionsantal uden at omskrive indholdet.
- **`postCall`** dybkloner svaret, kører `sanitizePIIResponse()` plus Responses-API-form maskereren (`maskResponsesOutput` — dækker `output_text` og `output[].content[].text`). Hvis der sker nogen redigering, erstatter det modificerede svar det originale.

Guardrail blokerer aldrig; det annoterer kun (`meta.detections`, `meta.redacted`) eller omskriver.

### Prompt Injection (`promptInjection.ts`)

Detekterer modstridende strukturer i brugerleveret indhold og håndhæver den konfigurerede politik. Adfærden styres af miljøvariabler og konstruktørmuligheder:

| Indstilling      | Miljøvariabel                                                                                           | Standard | Effekt                                                                                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiveret        | `INPUT_SANITIZER_ENABLED`                                                                               | `true`   | Når `false`, kortslutter sikkerhedsguarden.                                                                                                                                                          |
| Tilstand         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                         | `warn`   | Injektionspolitik: `block`, `warn` eller `log`. (`redact` accepteres for bagudkompatibilitet, men fjerner **ikke** injektionstekst; anmodning om PII-omskrivning styres af `PII_REDACTION_ENABLED`.) |
| Blokeringsgrænse | `blockThreshold` mulighed / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimum alvorlighed krævet for at blokere. Medium er kun til observation som standard.                                                                                                               |

**Tilstandsprioritet** (`getMode`): kalders `options.mode` →
`INJECTION_GUARD_MODE` **DB-funktion-flag override** (Dashboard → Indstillinger →
Funktion Flags) → `INJECTION_GUARD_MODE` miljø → `INPUT_SANITIZER_MODE` miljø →
`warn`. En dashboard override vinder derfor over miljøvariablerne, så Funktion
Flags UI kontrollerer den kørende sikkerhedsguard live (ingen genstart). DB-læsningen er fejlsikker:
hvis der opstår en fejl, falder sikkerhedsguarden tilbage til den miljøbaserede adfærd, og når ingen
override er indstillet, er adfærden identisk med miljøkun opløsning.

Detektionskilder:

1. `sanitizeRequest()` fra `@/shared/utils/inputSanitizer` (delt detektor
   sæt brugt andre steder i pipeline).
2. Indbyggede `DEFAULT_GUARD_PATTERNS` (aktuelt `system_override_inline` og
   `markdown_system_block`, begge med `high` alvorlighed).
3. Valgfri `customPatterns` givet via konstruktørmuligheder (strenge, regex,
   eller `{ name, pattern, severity }` poster).

Når `mode === "block"` **og** mindst én detektion opfylder alvorlighedsgrænsen,
returnerer `preCall` `{ block: true, message: "Anmodning afvist:
mistænkeligt indhold opdaget" }`. I `warn`/`log` tilstande logger sikkerhedsguarden, men
tillader kaldet. Den delte hjælper `evaluatePromptInjection()` eksporteres også
til kaldere, der har brug for at evaluere prompts uden at gå gennem registreringen.

**Scan grænse (v3.8.20):** detektoren inspicerer kun de **første 16 KB** af
sammensat prompttekst — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` og
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` før de kører
mønsterloopet. Injektionsdirektiver sidder nær toppen af en input, så dette
begrænser regex CPU/GC på multi-hundred-KB payloads uden at svække detektion (jf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Kører på **begge** stadier, sidst i standardkæden (prioritet `95`). Redakter
velkendte API-nøgle / hemmelig-token mønstre fra den udgående payload (besked
indhold, værktøjsopkaldsargumenter, værktøjsresultater) **og** leverandørens svar, så en
credential indsat i en prompt (eller ekkoet tilbage af et værktøjsresultat) ikke lækkes
til den opstrøms leverandør eller tilbage til klienten.

- **Opt-in kun**, samme konvention som PII redaktion (Hard Rule #20-nær):
  deaktiveret medmindre `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. Med det slået fra, er sikkerhedsguarden en no-op —
  den blokerer aldrig og omskriver aldrig.
- `redactCredentials()` gennemgår hele payload/svar træet (`walkValue()`,
  prototype-forurening-sikker, cyklus-sikker via `WeakSet`) og erstatter matches med
  en `[REDACTED:<type>]` pladsholder, kloner kun de grene, der faktisk
  ændrede sig.
- `CREDENTIAL_PATTERNS` dækker LLM leverandørnøgler (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalingsnøgler (Stripe, Square), cloud
  nøgler (AWS adgangsnøgle, Twilio, SendGrid, Mailgun), private nøgler / JWT'er,
  credential-bærende forbindelsesstrenge (`mongodb://user:pass@...`, osv.), og
  et generisk `Authorization`/`x-api-key`/`api-key`/`apikey` header-værdi
  mønster. Header-formede nøgler (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redigeres strukturelt (kun værdi, skema-præfiks som
  `Bearer `/`Basic ` bevaret) snarere end via den generiske tekst regex.
- Sikkerhedsguarden blokerer aldrig; den omskriver kun (`modifiedPayload` /
  `modifiedResponse`) og annoterer (`meta.credentialsRedacted`, `meta.count`).

Regression guard: `tests/unit/credential-masker-guardrail.test.ts`.

## Basiskontrakt (`base.ts`)

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
  block?: boolean; // true afbryder kæden
  message?: string; // vises ved blokering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneres af preCall for at omskrive anmodningen
  modifiedResponse?: TValue; // returneres af postCall for at omskrive svaret
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

En guardrail signalerer "ingen ændring" ved at returnere enten `void`, `{}` eller
`{ block: false }`. Returnering af en `modifiedPayload`/`modifiedResponse` erstatter
den værdi, der løber gennem kæden til efterfølgende guardrails.
`signal?: AbortSignal` viderefører kalderens livscyklus til guardrails. En afbrudt anmodning er den bevidste fail-open-undtagelse: mediebroer stopper arbejdet og rydder op uden at gendanne rå medier til et mål, som med sikkerhed ikke understøtter dem.

## Register (`registry.ts`)

Singletonen `guardrailRegistry` eksponerer:

- `register(guardrail)` — tilføjer en guardrail (eller erstatter efter normaliseret navn) og
  sorterer igen efter stigende `priority`.
- `clear()` / `list()` — administrative hjælpefunktioner.
- `runPreCallHooks(payload, context)` — gennemløber aktive guardrails, fører
  payloaden gennem `modifiedPayload` og stopper ved den første `block: true`.
- `runPostCallHooks(response, context)` — samme forløb på svarsiden.
- `resetGuardrailsForTests({ registerDefaults })` — rydder tilstanden og
  genregistrerer eventuelt standarderne for ren testisolering.

Begge kørselsfunktioner returnerer `{ blocked, payload|response, results, guardrail?, message? }`,
hvor `results` er et array af `GuardrailExecutionResult`-poster, som indeholder
felterne `blocked`, `skipped`, `modified`, `error` og `meta` for hver guardrail,
hvilket er nyttigt til sporing.

### Deaktivering af guardrails pr. anmodning

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` samler en
duplikatfri liste over guardrail-navne, som skal springes over for den aktuelle
anmodning. Kilder (alle valgfrie, alle flettes):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` i anmodningens body (på øverste niveau)
- `metadata.disabledGuardrails` i anmodningens body
- Headeren `x-omniroute-disabled-guardrails` (eller den ældre
  `x-disabled-guardrails`)

Værdier kan være arrays af strenge eller en kommasepareret streng; navne
normaliseres til kebab-case med små bogstaver (`pii_masker` → `pii-masker`). Resultatet
videregives via `context.disabledGuardrails` til registret, som springer
matchende guardrails over (`skipped: true` i `results`).

## Udførelsesrækkefølge

For hver anmodning, der går gennem `src/sse/handlers/chat.ts` og
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` opbygger listen over elementer, der skal springes over, ud fra API-nøglen, body
   og headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kører guardrails i stigende
   prioritetsrækkefølge:
   - Deaktiverede guardrails registreres som `skipped`.
   - Hver guardrails `preCall` kan omskrive payloaden via `modifiedPayload`.
   - Den første `block: true` afbryder kæden, og handleren returnerer
     et afvisningssvar fra den pågældende guardrail.
3. Den (potentielt omskrevne) payload sendes videre til kombinationsrouting og upstream-
   videresendelse.
4. Når svaret er samlet, kører `guardrailRegistry.runPostCallHooks(...)`
   den samme kæde på svaret. `block: true` her kasserer upstream-
   svaret.

Guardrails, der udløser fejl, registreres med `error: <message>` og logges via
`logger.warn`, men kæden fortsætter — den er bevidst designet til at være fail-open.

## Konfiguration

Miljøvariabler, der læses af de indbyggede guardrails:

| Variabel                              | Bruges af                 | Effekt                                                                                                           |
| ------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Angiv `false` for at deaktivere detektering fuldstændigt.                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Injektionspolitik: `warn`, `block` eller `log`. Den ældre værdi `redact` omskriver ikke injektionstekst.         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Tilstand for injektionsbeskyttelsen; også et DB-feature-flag, der **tilsidesætter** miljøvariablerne (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Den laveste alvorlighedsgrad, som `MODE=block` afviser: `high` (standard), `medium` eller `low`.                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Ældre alias for `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Når værdien er `true`, redigeres PII i anmodningen (uafhængigt af injektionstilstanden).                         |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Styrer maskeringsadfærden på svarsiden.                                                                          |

Modality Bridge-guardrails læser kørselskonfigurationen fra det DB-understøttede
indstillingslager (`getSettings()`), ikke fra miljøvariabler. Visions primære nøgler er
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og
`modalityBridgeCacheMaxEntries`. De ældre
`visionBridge*`-nøgler accepteres kun som det dokumenterede læsefallback i én cyklus;
dashboardet skriver med de primære nøgler. Standardværdier og fallback-
resolveren findes i `src/shared/constants/modalityBridgeDefaults.ts`, mens ældre
konstanter er bevaret i `src/shared/constants/visionBridgeDefaults.ts`.

Lyd bruger `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` og `modalityBridgeAudioMaxClips` samt de delte
`modalityBridgeCache*`-indstillinger. Lyd har intet fallback til ældre nøgler, da disse
nøgler blev introduceret med Modality Bridge-skemaet.

Video bruger `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` og
`modalityBridgeVideoTimeout` samt de delte `modalityBridgeCache*`-indstillinger.
Funktionen er som standard deaktiveret, fordi FFmpeg/ffprobe er valgfrie driftsmæssige
afhængigheder, og billedtekstning af frames øger latenstid og modelomkostninger.

## Tilpassede guardrails

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

Trin:

1. Opret `src/lib/guardrails/myGuardrail.ts`, som udvider `BaseGuardrail`.
2. Implementer `preCall` og/eller `postCall`.
3. Registrer enten ved importtidspunktet (tilføj fra `registerDefaultGuardrails`), eller
   kald `guardrailRegistry.register(...)` under kørsel — registreringsdatabasen erstatter
   enhver tidligere guardrail med det samme normaliserede navn.
4. Tilføj test under `tests/unit/` (eksisterende eksempler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test

Brug `resetGuardrailsForTests()` mellem test for at starte fra en kendt tilstand.
Angiv `{ registerDefaults: false }` for at starte med en tom registreringsdatabase og
kun registrere de guardrails, der testes. Vision Bridge accepterer dependency
injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge eksponerer de
tilsvarende integrationspunkter for indstillinger, funktionalitet, valg af STT-model,
kontrol af legitimationsoplysninger og transskription. Test kan derfor afprøve begge
forløb uden adgang til database eller netværk.

## Se også

- `src/lib/guardrails/` — implementering
- `src/shared/utils/inputSanitizer.ts` — fælles detektor, som driver
  beskyttelse mod prompt-injektion og maskering af personhenførbare oplysninger
- `src/shared/constants/visionBridgeDefaults.ts` — standarder for Vision Bridge og
  modelliste for tvungen bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — fælles standarder for kørsel af Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lag (circuit breaker, nedkølingsperioder)
- `docs/reference/ENVIRONMENT.md` — komplet reference til miljøvariabler

## Rutedækning og red-team for injektionsbeskyttelsen (Fase 8 · Blok D)

Injektionsbeskyttelsen (`createInjectionGuard` / `withInjectionGuard`) dækker alle ruter,
der accepterer brugerprompter. Den respekterer `INJECTION_GUARD_MODE` (standardværdien `warn` = kun logning;
`block` = returnerer HTTP 400 `SECURITY_001`).

| Type                 | Ruter                                                                                                                                                | Standardtilstand |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Tekst (eksisterende) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generativ            | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

Tekstudtrækning (`extractMessageContents`) dækker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (hver nat, `nightly-llm-security.yml`):** promptfoo validerer, at hver rute blokerer
OWASP-LLM-korpuset i `INJECTION_GUARD_MODE=block`; garak kører prober (springes over uden hemmelighed).
`moderations` er inkluderet for konsistens — operatører i blokeringstilstand kan undtage den via
`resolveDisabledGuardrails`.

Det natlige workflow (`.github/workflows/nightly-llm-security.yml`, cron + manuel
igangsættelse) har to jobs:

- **`promptfoo-guard` (blokerende)** — kører `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Hver adversarial test (f.eks. "ignore all
  previous instructions…", jailbreaks i DAN-stil) kontrollerer, at svaret indeholder
  `error.code === "SECURITY_001"`, dvs. at beskyttelsen faktisk afviste anmodningen.
- **`garak` (vejledende)** — kører garak `--probes promptinject,dan,leakreplay`
  mod en lokal OmniRoute-instans (`http://localhost:20128/v1`). Betinget af en
  udbyderhemmelighed (`PROMPTFOO_PROVIDER_KEY`); springes elegant over og har suffikset
  `|| true`, så jobbet rapporterer uden at få CI til at fejle.

Dækningen af hjælpefunktionen til beskyttelse (`createInjectionGuard` / `withInjectionGuard`)
omfatter alle promptbærende `/v1`-ruter; prompttekst hentes fra
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` af
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
