# Guardrails (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Извор истине:** `src/lib/guardrails/`
> **Последње ажурирање:** 2026-08-29 — v3.8.51 (порекло транскрипта за Video Bridge декларише позивалац,
> сервер га још увек не верификује — појашњено у складу са #11661)

Заштитне мере примењују безбедносна правила, смернице и трансформације садржаја на граници
између OmniRoute-а и узводних провајдера. Свака заштитна мера може да прегледа (и
опционо одбије, трансформише или анотира) садржаје захтева (`preCall`) и
узводне одговоре (`postCall`).

Систем је **fail-open**: ако заштитна мера баци изузетак током извршавања, регистар
бележи грешку и наставља са следећом заштитном мером уместо да захтев
прогласи неуспешним. Блокирање је изричита одлука (`block: true`), никада случајност.

## Ugrađene zaštitne mere

Registracija automatski učitava šest zaštitnih mera po prioritetu prilikom uvoza
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Ime                 | Faza(e)        | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Brojevi sa nižim prioritetom se izvršavaju **prvi**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Presreće zahteve koji sadrže slike usmerene ka **modelima bez vizije** i ili
preusmerava ceo zahtev ka modelu koji podržava viziju ili zamenjuje delove
slike tekstualnim opisima koje proizvodi konfigurisani vizuelni model pre
uzlaznog poziva. Ovo omogućava provajderima koji rade samo sa tekstom da
transparentno obrade multimodalne podatke.

Tok:

1. Preskoči ako ciljni model već podržava viziju (osim ako se ne nalazi na
   listi prisilnih mostova `isVisionBridgeForcedModel`).
2. Izvuci delove slike putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji delegira na **ujedinjeni medijski
   detektor** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` —
   jedini izvor istine koji se deli sa kombinovanim filterom kompatibilnosti.
   Ekstrakcija je dozvoljena samo za najviši nivo delova oblika
   koje `replaceImageParts` može ponovo spojiti (ugovor o ekstrakciji↔zameni):
   OpenAI `image_url`, Anthropic base64 `source.type:"base64"`,
   Anthropic URL `source.type:"url"`, i Responses API `input_image`.
   Ugnježdene pogodbe i oblici koji su samo indikatori su materijal za
   kombinovani filter i nikada se ne izvode. Preskoči ako ništa nije pronađeno.
3. Reši runtime konfiguraciju putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nove `modalityBridge*`
   ključevi podešavanja pobeđuju; nasleđeni `visionBridge*` ključevi ostaju
   **jednokratna rezervna opcija** (prozor za povratak). Preskoči pre bilo
   kakvog prolaska kroz medije kada je most onemogućen.
4. Selektor moda (`modalityBridgeVisionMode`, pogledajte tabelu ispod) odlučuje
   o preusmeravanju naspram opisivanja. Preusmeravanje vraća `modifiedPayload`
   sa samo zamenjenim `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Put opisivanja: ograniči slike na `maxImages`, sastavi prompt koji je svestan
   zadatka, konsultuj keš za opisivanje, pozovi vizuelni model **paralelno**
   (`Promise.allSettled`), i umetni `[Image N]: <description>` tekstualne delove na
   njihovo mesto. Neuspešno opisivanje daje `null` i originalni deo slike je
   **sačuvan** (#4012) — osim na putu kombinovanog opisivanja kada je svako
   opisivanje propalo, gde potvrđeni ne-vizuelni uzvodni poziv dobija
   `(unavailable — no vision-capable provider connected)` stub umesto (#8430).
6. Vraća `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor moda (`modalityBridgeVisionMode`)

| Mod        | Podrazumevano | Ponašanje                                                                                                                                                                                                                                                                                  |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔             | Nasleđena heuristika, nepromenjena (#6640/#7204): modeli bez kombinacija/`auto/` preusmeravaju na najbolji vizuelni model osim ako originalni model već ima upotrebljive akreditive (onda opisuje); ciljevi kombinacija uvek opisuju.                                                      |
| `describe` |               | Uvek opisuj — blok preusmeravanja se potpuno preskoči; model koji je korisnik izabrao uvek odgovara.                                                                                                                                                                                       |
| `reroute`  |               | Prisilno preusmeravanje: čuvar modela sa akreditivima se zaobilazi. Čuvar akreditiva za preusmeravanje-**cilj** i dalje važi — kada ne postoji upotrebljivi vizuelni cilj, zahtev pada na opisivanje tako da sirove slike nikada ne dolaze do backend-a koji radi samo sa tekstom (#8430). |

Prisilni modovi prekinu **pre** nego što se automatska heuristika izvrši;
ponašanje `auto` je bajt-identično pre-PR-1 zaštitnoj meri.

#### Prompt za opisivanje svestan zadatka (`modalityBridgeVisionTaskAware`)

Podrazumevano **tačno**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **poslednje korisničke poruke** (skraćeno na 500 karaktera) osnovnom
promptu za opisivanje, usmeravajući opis ka onome što je korisnik zapravo tražio
(pattern codex-vision-proxy) i tražeći od vizuelnog modela da transkribuje vidljiv
tekst. Kada je zastavica isključena — ili nema korisničkog teksta — koristi se
nepromenjen osnovni prompt.

Opis samopovratne petlje OpenAI-kompatibilnog zahteva (`callVisionModelSingle()` u `visionBridgeHelpers.ts`) uvek zahteva `image_url.detail: "high"` — bezuslovno, za svakog pozivaoca/providera, bez obzira na bilo koji signal klijenta. Uzorkovanje niskog detalja smanjuje tačnost OCR-a za tačno onaj zadatak transkripcije teksta za koji se ovaj prompt traži, tako da sam poziv za opis uvek traži visoki detalj bez obzira na to koji nivo detalja je korišćen u originalnom dolaznom zahtevu. Ovo utiče samo na unutrašnje telo zahteva za opis; ne menja način na koji OmniRoute prosleđuje sopstveni `image_url.detail` pozivaocu u primarnom zahtevu — taj podrazumevani nivo se primenjuje odvojeno, i samo za otkrivene OpenCode klijente, u `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Anthropic wire-format grana samopovratne petlje za opis nema polje `detail` i nije pogođena nijednim podrazumevanjem.

#### Ograničenje izlaza opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Podrazumevano | Opseg             |
| ------------------------------ | ------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` ili 100–50000 |

`0` (podrazumevano) znači **bez ograničenja** — opis koji vraća `callVisionModel()` se prosleđuje neizmenjen, čuvajući postojeće ponašanje. Svaka vrednost u opsegu od 100 do 50000 skraćuje opis sa `…` sufiksom pre nego što se ponovo spoji kao `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`). Povećajte ovo za zadatke OCR-a bogate detaljima gde downstream model treba punu transkripciju; smanjite ga da ograničite korišćenje tokena na razgovetnim vizuelnim modelima. Polje na kontrolnoj tabli se nalazi na Naprednom panelu taba Vizija (`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i ograničava svaku vrednost između 1 i 99 na 100, dok ostavlja eksplicitni `0` netaknut — `0` je validna Zod vrednost sama po sebi (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo "nepostavljena" podrazumevana vrednost.

#### Keširanje opisa (`modalityBridge/bridgeCache.ts`)

Keširanje u memoriji LRU + TTL za izlaze opisa, deljeno na nivou procesa. Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` sa okvirom dužine-prefiksa (bez sudara na granicama polja). Model komponenta je **konfigurisani** most model, a ne model koji je zapravo odgovorio — `callVisionModel` može interno da se vrati, a ključanje po pokušaju bi fragmentiralo keš. Neuspešni opisi se nikada ne keširaju. Podešavanja:

| Ključ                           | Podrazumevano | Opseg   |
| ------------------------------- | ------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`        | —       |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000 |

#### Normalizacija udaljenih slika (samopovratni opis/base64 preuzimanje)

Kada most preuzima **udaljenu** sliku — samopoziv Anthropic opisa i claude-wire-format base64 konverzija (`ensureBase64ImagesForClaudeWire`), oba putem `fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultantni data URI se prosleđuje kroz `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) pre nego što bude ugrađen u zahtev vizuelnog modela. Prevelike slike se smanjuju na **2048px dužu ivicu** (što odgovara ograničenju veličine koje OpenAI/Anthropic već primenjuju na serverskoj strani), što smanjuje upload bajtova/latenciju bez promene onoga što vizuelni model vidi. Promena veličine koristi `sharp`, učitan putem dinamičkog uvoza: na platformi gde njegov nativni binarni fajl ne može da se učita, `normalizeDataUri()` **nikada ne baca** — vraća se na prosleđivanje originalnih bajtova, tako da putanja opisa/base64 konverzije uvek nastavlja da funkcioniše. Bajtovi koji nisu slike (preuzimanje koje nije vratilo dekodabilnu sliku) se takođe prosleđuju netaknuti. Ova normalizacija se odnosi na slike koje most preuzima za svoj sopstveni samopoziv — nikada se ne primenjuje na sirovi payload pozivaoca, u skladu sa principom mutacije samo uz opt-in (Hard Rule #20).

#### Šema podešavanja + migracija

Novi `modalityBridge*` ključevi su Zod-validirani u `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, i grupa `modalityBridgeAudio*` koja se koristi od strane Audio Bridge-a. Migracija `141_modality_bridge_settings.sql` kopira postojeće nasleđene `visionBridge*` vrednosti u odgovarajuće nove ključeve (idempotentno, nikada ne prepisuje vrednost `modalityBridge*` koju je postavio operater); nasleđeni ključevi ostaju prihvaćeni kao fallback za čitanje tokom jednog ciklusa izdanja.

#### Header transparentnosti + statistika

Odgovori transformisani opisom nose `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (izgrađeno od strane `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`, otisnuto od strane `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`). Ponovo usmereni zahtevi ne dobijaju **nikakav** header — payload je ostao netaknut i zamena modela je već vidljiva u polju `model` tela odgovora.

`GET /api/modality-bridge/stats` (menadžerska autorizacija, isti nivo kao `GET /api/settings`) vraća u memoriji po-modalitetske brojače `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio`, i `video`. `averageLatencyMs` koristi `latencySamples`, a ne sve pokušaje, kao svoj imenilac; operacija bez merenja ne fabricira uzorak od nula milisekundi. `bridged` ostaje unazad kompatibilni alias za uspešne konverzije; neuspešni pokušaji ga ne povećavaju. Brojači se resetuju pri ponovnom pokretanju procesa po dizajnu (telemetrija, ne računovodstvo).

#### Konfiguracija kontrolne table

Posvećena stranica kontrolne table je
`/dashboard/settings/modality-bridge`. Njene URL-adresibilne kartice `Vision`, `Audio`
i `Video` zadržavaju parametre upita dok menjaju vrednost `tab`. Kartica Vision otkriva
omogućavanje, režim, izbor modela (uključujući automatski podrazumevani), podsticanje
svesti o zadatku, napredne limite za vreme/dužinu slike/opisa/keša, brojače
u vreme izvođenja i zaštićeni uzorak zahteva. Kartica Audio je takođe aktivna: otkriva
omogućavanje, STT-samo izbor modela sa Auto, limite za vreme/max-clip, audio
brojače i uzorak testa `input_audio`. Kartica Video je funkcionalna: izveštava
o stanju izvođenja FFmpeg/ffprobe — jedan od četiri eksplicitna UI stanja (`unknown` dok
je proba u toku ili nije mogla da se završi, `restricted` na hostu kontrolne table koji
nije loopback gde je proba preskočena na klijentskoj strani, `unavailable` nakon što je
proba izvršena i potvrđeno da nedostaje, ili `available` sa verzijama FFmpeg/ffprobe) —
zadržava limite omogućavanja/modela/frejma/video/vremena, filtrira izbor modela na
modele sposobne za viziju i otkriva video brojače.

Bivša Vision Bridge kartica pod AI podešavanjima je link za kompatibilnost sa
novom stranicom; više ne poseduje drugu kopiju forme. Media Providers takođe
linkuje Image-to-Text i Speech-to-Text tokove ka odgovarajućim Modality
Bridge karticama bez uklanjanja postojećeg Speech-to-Text igrališta.

**Zaobilaženje prijema samopovratka:** kada poziv za opis prolazi kroz
OmniRoute-ov vlastiti `/v1` samopovratak (nestandardni model provajdera),
pod-zahtev šalje `x-omniroute-admission-bypass: internal` i autentifikuje se
sa rešenim samopovratnim akreditivom — lokalnim `sk_omniroute` sentinelom u
lokalnom režimu, ili operatorom konfigurisanim `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` env ključem (#1350) tako da `REQUIRE_API_KEY=true`
implementacije i dalje mogu izvršiti poziv za opis. Zaobilaženje se
poštuje samo za te tačne akreditive, tako da eksterni klijenti ne mogu
koristiti zaglavlje da preskoče prijem.

Nasleđeni podrazumevani podaci se nalaze u `src/shared/constants/visionBridgeDefaults.ts`;
novi podrazumevani podaci za režim/svest o zadatku/kešu i reševač podešavanja
nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`. Ograničenje otkriva
`deps` opciju konstruktora tako da testovi mogu injektovati lažne
`getSettings` i `callVisionModel` implementacije.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće audio-izvorne zahteve za chat pre nego što stignu do cilja koji nije
poznat da prihvata audio ulaz. Nikada ne preusmerava zahtev za chat: audio delovi
se transkribuju kroz postojeći OpenAI-kompatibilni multipart endpoint i izabrani
model chata nastavlja sa tekstualnim transkriptima.

Tok:

1. Rešite `supportsAudio` kroz `getResolvedModelCapabilities()`. Eksplicitni
   metapodaci registra provajdera pobeđuju, zatim statički metapodaci modela,
   zatim sinhronizovani `modalities_input`. Deklarisana lista ulaza bez `audio`
   je `false`; nijedna sposobnost ostaje `null`. I `false` i `null` aktiviraju
   konzervativni most, dok `true` zaobilazi.
2. Rešite `modalityBridgeAudio*` podešavanja i izdvojite delove audio
   sadržaja koji se mogu spojiti iz svake poruke kroz zajednički `detectMediaParts()`
   detektor. Podržani oblici žice su OpenAI `input_audio`, `audio_url`, i
   `source.media_type: "audio/*"`. Ugnježdeni audio se otkriva za usmeravanje
   ali se ne uklanja putem puta spajanja. Rad je ograničen sa
   `modalityBridgeAudioMaxClips`; kasniji delovi ostaju netaknuti.
3. Poštujte konfigurisan `provider/model`, ili dozvolite `selectAudioBridgeModel()`
   da prođe kroz `AUDIO_TRANSCRIPTION_PROVIDERS` u stabilnom redosledu kataloga i
   izabere prvi model sa upotrebljivim aktivnim akreditivom provajdera.
4. `callAudioTranscription()` konvertuje base64/data-URI audio u multipart
   `file`, ili preuzima udaljeni `audio_url` kroz javno-isključivo izlazno
   ograničenje sa DNS pinovanjem i granicom od 25 MB. Zatim POST-uje datoteku i
   izabrani model na lokalni `/v1/audio/transcriptions` samopovratak, autentifikovan
   sa `resolveSelfLoopBearer()`. Postojeća ruta transkripcije obavlja normalno
   pretraživanje akreditiva, upravljanje hlađenjem/ograničenjem brzine i
   isporuku provajdera.
5. Uspešni pozivi zamenjuju svoje delove sa `[Audio N]: <transcript>`. Pozivi
   se izvršavaju sa `Promise.allSettled`: pojedinačni neuspesi čuvaju taj
   originalni audio deo (#4012 ugovor). Ako svaki poziv ne uspe i cilj se
   dokaže kao `supportsAudio === false`, delovi postaju
   `[Audio N]: (nedostupno — nijedan STT provajder nije povezan)` (#8430 ugovor).
   Za nepoznati cilj (`null`), rezultat sa svim neuspesima ostaje netaknut.
   Dokazana meta koja prihvata samo tekst bez upotrebljivog STT akreditiva
   prima isti eksplicitni stub bez izdavanja mrežnog poziva.

Uspešni transkripti koriste procesom široku Modality Bridge LRU/TTL keš. Ključ
kombinuje audio referencu, stabilnu oznaku operacije `audio-transcription` i
izabrani STT model; neuspehi se nikada ne keširaju. Audio pokušaji ažuriraju
zajedničke `bridged`, `cacheHits`, `failures`, i `lastUsedAt` brojače.
Transformisani odgovori nose
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; netaknuti
zahtevi ne primaju segment Audio Bridge.

Podešavanja u vreme izvođenja su DB-podržana i Zod-validirana:

| Ključ                         | Podrazumevano | Opseg           |
| ----------------------------- | ------------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —               |
| `modalityBridgeAudioModel`    | `""`          | Auto ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10            |

Zajednički keš ostaje kontrolisan sa `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, i `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptuje vrhunske video delove u Chat Completions `messages` i Responses
API `input` pre nego što se pozove cilj bez poznate podrške za video.
Podržani oblici su `input_video`, `video_url`, `video_source`, HTTPS URL-ovi,
i `data:video/*;base64,...` data URI. Obične datotečne nazive u tekstu ne tretiraju
kao video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prelazom zahteva,
proverom sposobnosti/politike, agregacijom po zahtevu i payload-om odgovora.
Rad po videu — akvizicija, keširanje celog rezultata, opisivanje sekvence
okvira (koja spaja bilo koji audio transkript koji je pozivač naveo), i metrike/prekid/čišćenje po pokušaju — je skriven iza `processVideoPart` u
`videoBridgePipeline.ts`, pozvan jednom po video delu unutar `preCall`-ove petlje.
Ta jedinica takođe definiše eksplicitne port granice `VideoMediaBrokerPort`
(akvizicija bajtova i ekstrakcija uzorkovanih okvira), `VideoAudioTranscriptionPort`
(spajanje audio transkripta koji je naveo pozivač sa uzorkovanim titlovima), i
`VideoDrilldownPort` (nasleđeni oblik sirovog skladišta). Proizvodni STT i zadržavanje
okvira su sastavljeni oko opisa porta kroz `createVideoSttAdapter` i
`createVideoDrilldownAdapter`; potonji koristi zajednički neprozirni životni ciklus.

Javni `/v1` put zahteva nikada ne uvozi ili poziva podproces. Udaljeni
video snimci se preuzimaju pod granicom od 50 MiB; inline base64 video snimci imaju
konzervativni limit od 36 MiB dekodiranog po videu tako da model/poruke/okvir
mogu ostati unutar javnog JSON limita za prijem zahteva od 50 MiB. Inline
dužina i procene dekodirane veličine se proveravaju pre alokacije. HTTPS je
obavezan na inicijalnom udaljenom URL-u i svakom preusmeravanju, koristeći postojeću
javnu samo izlaznu zaštitu sa DNS pinovanjem. Bajtovi zatim prelaze tačno unutrašnju
`POST /api/modality-bridge/video/extract` granicu brokera. Ta ruta je i
`LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvata samo autentifikovani,
pouzdani loopback zahtev po procesu, i nikada ne prihvata URL, putanju do datoteke,
izvršnu datoteku ili listu argumenata. API pipeline za veličinu tela i
inkrementalni čitač tela rukovaoca nezavisno sprovode limit ulaza brokera od 50 MiB.
Njegova ograničena red čekanja pokreće jednu ekstrakciju u isto vreme, dozvoljava
četiri čekajuća posla, i postavlja limit čekajućeg ulaza na 100 MiB.

Unutar brokera, `ffprobe` čita privatnu lokalnu datoteku; fiksni format
lista dozvoljenih izuzima formate plejlista i manifest. Za dozvoljene MOV-familije
kontejnere, spoljne MOV reference podataka ostaju onemogućene po default-u, i fiksna
komanda se ne uključuje u njih. I `ffprobe` i `ffmpeg` koriste
`file`-samo protokol bele liste, jednu nit, fiksne nizove argumenata, bez ljuske,
i izvršne datoteke rešene iz `PATH`. Priključene slike pokrivača nisu
playable kandidati. Svi playable stream-ovi moraju zadovoljiti limite, i
eksplicitni podrazumevani stream je preferiran pre determinističkog najnižeg indeksa
rezervnog rešenja. Video snimci su ograničeni na 600 sekundi, 8,192 piksela po dimenziji, i
33,554,432 izvornih piksela. FFmpeg uzima uzorke 1–16 srednjih JPEG okvira, smanjuje
dugu ivicu na najviše 1,024 piksela bez povećavanja manjih ulaza, i
nikada ne prima URL. Uzorkovanje je `uniform` po default-u. Opcione
`scene_aware` i eksperimentalne `segment_aware` politike vrše jedan dodatni
fiksni FFmpeg prolaz preko već validiranog lokalnog stream-a, biraju ograničene
`showinfo` vremenske oznake scena, i deterministički se vraćaju na iste
uniformne sredine u slučaju neuspeha detektora, isteka, neispravnog izlaza, ili praznog
skupa kandidata. Segment-aware režim alocira uzorke sredine proporcionalno
validiranim vremenskim intervalima scena; segment-aware dokazi i ponašanje rezervnog rešenja su
detaljno opisani u nastavku. Teška granica od 16 okvira se
primenjuje nakon selekcije u svakoj politici. Kada scena-svesni zahtev ima samo
budžet od jednog okvira, koristi uniformnu sredinu aktivnog celog videa ili fokusa
prozora i izveštava `policyEffective: uniform`: jedan izabrani okvir scene
ne može sačuvati oba vremenska kraja. Pozivač može opcionalno pružiti
konačni fokus prozor (`start`/`end` sekunde); granice su ograničene na trajanje medija,
obrnuti ili neograničeni prozori se odbacuju, i sve politike uzorkovanja
se sprovode samo unutar normalizovanog intervala. Rezultantni
prozor je uključen u metapodatke uzorkovanja i u prefiks neproverenog opisa
tako da nizvodni modeli mogu razlikovati fokusirani izvod od pune
vremenske linije.

Semantički fokus titlova je posebno, eksplicitno podešavanje. Podrazumevani `full`
analitički režim čuva postojeći okvir prompt-a i nikada ne prosleđuje tekst
zahteva modelu titlova. U `focused` režimu, most čita samo najnoviji
ne-prazan korisnički napisani `text`/`input_text` iz iste Chat ili Responses
kontejnera, normalizuje ga na NFC, sruši kontrolne karaktere i razmake,
i ograničava ga na 500 Unicode kodnih tačaka. Prazan rezultat se vraća na
tačan `full` prompt. Korisna naznaka se serijalizuje kao JSON u
posvećenom bloku neproverenog korisničkog konteksta i može samo prioritizovati
vidljive detalje; ne može nadmašiti odvojeno upozorenje protiv praćenja uputstava
vidljivih ili čujnih u mediju. Tekstualni fokus nikada ne inferira `start`/`end` ili menja
temporalni uzorkivač.

#### FU-07 strukturni segment dokazi

`segment_aware` koristi jedan ograničen pre-analitički prolaz preko već validiranog
lokalnog video stream-a. Fiksni filter lanac prvo skalira na najviše 320 piksela
široko, detektuje promene scena i zamrznute intervale, zatim uzima uzorke na 1 okvir po
sekundi za zamućenje, prosečnu luma, i prostorno/temporalne informacije. Prolaz je
ograničen na 600 strukturnih uzoraka, jednu FFmpeg/filter nit, iste
`file`-samo protokol i kontejnere bele liste, limit izlaza procesa od 1 MiB,
i najviše 30 sekundi unutar zajedničkog prekida/rok brokera. Nikada
ne prihvata komandu, filter, putanju, ili URL iz zahteva.

Strukturne vrednosti su deterministički uzorci dokaza, a ne semantičko razumevanje videa. One ne inferiraju subjekte, akcije, natpise, govor ili nameru korisnika. Granice scena i zamrzavanja formiraju segmente; pokrivenost zamrzavanja, zamućenje, ekspozicija, prostorni detalj i vremenska promena samo utiču na to kako se postojeći budžet od 1–16 frejmova raspodeljuje. Potpuno zamrznut segment je ograničen na jedan frejm, dok se nezamrznuti segmenti takmiče za preostali budžet. Kada granice nadmaše frejmove, zadržava se uniformna pokrivenost vremenske linije tako da brzi rani rezovi ne mogu sakriti dugi segment. Granice scena unutar analitičke rezolucije od 1 sekunde granice zamrzavanja se spajaju.

Nedostajući filteri, neispravni/prazni dokazi, greška detektora ili vremensko ograničenje pre-analize otvaraju se prema tačnoj uniformnoj srednjoj politici. Abort pozivatelja ili rok brokera ne otvaraju se: prekida tekući podproces, sprečava kasniju ekstrakciju frejmova, a privatno privremeno stablo se uklanja u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generiše determinističke stvarne FFmpeg
fiksacije za uštede nakon deduplifikacije natpisa, raspodelu budžeta za gustu
pokretljivost, dokaze o zamućenju/ekspoziciji/SI-TI, brze rezove sa dugim repom i
lažne pozitivne rezultate postepene izblede. Beleži vreme zidne analize i, gde je
`/usr/bin/time` dostupno, CPU deteta i vrh RSS. Njegove provere kvaliteta su
strukturni orakuli samo. Stvarna kvaliteta modela natpisa ostaje `HOLD` jer ovaj
sistem nema ovlašćeni krajnji tačku ili zamrznutog sudiju. Monetarne uštede takođe
ostaju `HOLD` osim ako `--caption-cost-per-call-usd` ne obezbedi eksplicitnu
pozitivnu procenu po pozivu; skripta nikada ne fabricira ni jedan rezultat.

Svaki frejm je ograničen na 4 MiB, svi sirovi frejmovi zajedno na 23 MiB, a
serijalizovani odgovor brokera na 32 MiB. Privatni privremeni direktorijum se
uklanja u `finally`. OmniRoute ne bundluje FFmpeg i ne prihvata prilagođenu
izvršnu putanju. Pre nego što se doda natpis, most primenjuje konzervativni
vizuelni deduplifikacioni prolaz: svaki JPEG se smanjuje na 16×16
grayscale bafer i upoređuje se samo sa poslednjim zadržanim frejmom. Za
traženi budžet natpisa iznad jednog frejma, ekstrakcija obezbeđuje
ograničeni skup kandidata do dvostruko većeg budžeta i nikada više od 16
frejmova. Traženi limit se primenjuje samo nakon deduplifikacije, pri čemu se
prvi i poslednji izabrani kandidati čuvaju tokom konačnog pročišćavanja kada je
budžet najmanje dva. Verzijska
`grayscale-16x16-mean-cells-v2` politika koristi veći od srednjeg luma delta i
odnos ćelija sličica čija je normalizovana delta najmanje 0.05. Prag za
duplikate je konstantan 0.04, izabran zbog predvidljivosti, a ne izložen kao
podešavanje u vreme izvršavanja. Ovaj sekundarni
signal visokog kontrasta čuva male pokrete i promene vidljivog teksta koje
uporedba samo sa srednjom vrednošću može sakriti. Greške komparatora ili
dekodera se otvaraju i zadržavaju pokrivenost. Izlazni metapodaci razdvaja
ekstraktovane kandidate, uspešno korišćene frejmove i vizuelne duplikate
koji su odbijeni.

Eksplicitno označeni deo videa može zatražiti kontakt listu sa vremenskim
oznakama. Most gradi najviše JPEG mrežu sa 4 kolone i 16 frejmova. Svaka ćelija
od 512 piksela upisuje svoju izvorno vreme u visoko-kontrastnu donju traku,
dok iste vremenske oznake ostaju u tekstualnim metapodacima za kasniju
asocijaciju i reviziju. Kompletan JPEG ostaje ograničen na 32 MiB. Ako
`sharp` ne može dekodirati ili sastaviti mrežu, most se vraća na pojedinačne
JPEG frejmove; abort klijenta se i dalje propagira kroz operaciju lista.

Dokazi o promociji su namerno odvojeni od sintetičkog sastava
mikrobenchmarka. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiše
shemu sa verzijom A/B za stvarne OpenAI-kompatibilne vizione modele. Mera
izveštava o tokenima, latenciji zida od kraja do kraja (uključujući sastav
liste), broju poziva modela i zadržavanju činjenica definisanim manifestom. Sirovi
odgovori modela se ne upisuju u izveštaj; samo SHA-256 sažeci i usklađeni ID-ovi
činjenica se čuvaju. Sistem ne pravi mrežne ili plaćene pozive modela osim ako
nije prosleđen `--execute-real` i konfigurisan `--model`, `OMNIROUTE_BASE_URL`
i `OMNIROUTE_API_KEY`. Bez tog eksplicitnog stvarnog izvršavanja, njegov
mašinski čitljiv presud ostaje `HOLD`; mere sintetičkog tereta/broja poziva
same nisu dokazi o promociji.

Odvojeni `scripts/perf/video-bridge-promotion-eval.ts` koristi FU-07 ili
FU-09 posmatranja. Prihvat promocije zahteva svih osam sintetičkih scenarija
plus sanirani stvarni isječak, najmanje tri mjerene ponavljanja po ulozi i
slučaju, svih deset deklarisanih metrika, sažetke zamrznutih medija/prompta/
očekivanih činjenica/podešavanja, jedinstvene ID-ove posmatranja i verifikovani
A/B redosled. Potvrda izvršenja povezuje sažetak korpusa, tačan SHA kandidata i
reviziju modela. Nedostajući ili neispravni merenja ostaju `HOLD`, uključujući
CPU iznad 30 s, vrh RSS iznad 512 MiB ili pre-analizu iznad 30 s. Ovo su
ograničenja za prihvatanje dokaza, a ne nova garancija za sprovođenje RSS u
vreme izvršavanja.

FU-07 zahteva najmanje 98% zadržavanja kvaliteta i p95 latenciju ne veću od
1.2x osnovne vrednosti, plus ili 0.05 apsolutno uravnoteženo poboljšanje
srednjeg povratka na ekvivalentne pozive natpisa, ili najmanje 10% manje
srednjih poziva natpisa nakon deduplifikacije. FU-09 zahteva najmanje 0.85
kvaliteta, 95% zadržavanja, 20% smanjenja p95 latencije i 10% smanjenja
tokena. Gubitak kritičnih činjenica, usklađenost sa injekcijom ili nedostajući
korišćenje sprečava promociju. Jedno izvršenje ne može promovisati ništa:
`--previous-report` potvrđuje dva različita, nepokrivena, uzastopno
prihvatljiva izvršenja iste politike/modela revizije/kandidata/korpusa. Eksperiment
uzorkovanja ne može potvrditi eksperiment kontakt-liste.

Sakupljači bi trebali ocenjivati odgovore u memoriji i sačuvati `responseDigest` plus
metrike i obaveze posmatranja, nikada tekst odgovora. Potrošač takođe čita
nasleđene sirove posmatranja, ali nikada ne kopira taj tekst u svoje izveštaje. Tačno
jedan od `responseDigest` ili `rawResponseText` se prihvata za svako posmatranje.
Verzionirana lista dozvoljenih ostaje prazna sa nepromenljivim `hold` podrazumevanjem.
Kvalifikovani unos zahteva svoj referentni dokaz, politiku, reviziju modela, tačan
SHA kandidata, manifestni digest i dva različita ID-a izvršenja; sukobljeni konteksti
se odbacuju. Ovi metapodaci su ugovor o reviziji, a ne dokaz da referencirani
fajl sadrži autentična merenja. Pregledajte stvarne račune pre nego što dodate
bilo koji unos. Endpoint za upravljanje statistikama i Video kontrolna tabla
otkrivaju konzervativnu spremnost. Konfigurisani alias modela sam po sebi ne
uspostavlja njegovu reviziju ili trenutni SHA kandidata, tako da trenutna kontrolna
tabla izveštava `HOLD` umesto da ponovo koristi kvalifikaciju iz drugog konteksta
izvršenja. Eksplicitni eksperimentalni izbor ostaje odvojen od promocije; nijedan
podrazumevani izbor se automatski ne menja.

Pozivaoci mogu priložiti opcioni `transcript.cues` niz uz podržani deo videa
kada već poseduju usklađen tekst. Svaki cue mora nositi `text`, konačni `start`/`end`
interval unutar ispitivane dužine, i belu listu `source` (`client`, `embedded`, ili
`audio-bridge`); `confidence` podrazumevano iznosi `1` i mora ostati između `0` i `1`.
Tačno duplirani cue-ovi se spajaju. OmniRoute nikada ne započinje transkripciju iz
ovih metapodataka: validirani cue-ovi se kopiraju u opisani rezultat sa izvorom,
pouzdanjem i intervalom, i prikazuju se kao nepouzdana posmatranja pored
natpisa okvira. Nevažeći, van opsega, ili tekst bez porekla se odbacuju umesto da
se mešaju u tok natpisa. Oba kanala transkripta u telu zahteva normalizuju
dostavljenu poreklo na `client`, uključujući samoproklamovane `embedded` ili
`audio-bridge` oznake. Samo adapter koji poseduje server može dodeliti te
pouzdane oznake putem argumenta koji se koristi samo u kodu `trustedSource`; JSON
polje zahteva ne može doći do tog argumenta. Tekst transkripta ostaje nepouzdani
sadržaj izveden iz medija, bez obzira na njegovo poreklo, i nikada ne sme
određivati autorizaciju.

Napredni pozivač može pružiti `audioTranscript` stazu za isti video; ona se
tretira kao tekst koji je obezbedio klijent, a ne kao dokaz serverove transkripcije.
Fuziona šava pokreće vizuelna i audio posmatranja pod jednim rokom i signalom
prekida, naređuje ih na zajedničkoj vremenskoj liniji, spaja tačne duplikate, i
izveštava o delimičnom rezultatu kada samo jedna strana uspe. Nevažeći
`audioTranscript` degradira se na taj delimični rezultat — vizuelni opis se
čuva, a audio grana beleži sanitarni kod greške — umesto da ne uspe ceo video.
Dostupnost po grani, delimična oznaka, i sanitarni kodovi greške se čuvaju u
opisanom rezultatu, u metapodacima zaštitne ograde (`audioFusionRuns`/
`audioFusionPartials`/`audioFusionFailureCodes`), u metapodacima keša rezultata,
i u brojačima fuzije mosta. Podrazumevani put Video Bridge ne pokreće
govor-u-tekst ili preuzima drugu kopiju medija; bez te eksplicitne staze, ostaje
samo video.

**Zadržavanje transkripta (#12150 P1).** Ovo se automatski primenjuje
kada god Video Bridge (sam po sebi uz pristanak) prikaže cue transkripta — ne
postoji odvojena oznaka za zadržavanje. Kada zahtev prikaže bilo koji cue
transkripta (pozivačem deklarisani `transcript` ili spojeni `audioTranscript`),
zaštitna ograda ga označava kao `videoBridgeObserved` i proizvodi redigovanu
senku video opisa — identičnu renderingu u kojoj je slobodni tekst svakog cue-a
zamenjen sa `[redacted-video-transcript]`, izgrađenom zamenom strukturiranog
polja cue-a pre nego što se string sastavi (nikada parsiranjem
flattened teksta, tako da nijedan sadržaj cue-a — neprijateljski ili običan,
uključujući tela koja sadrže `]` kao što su `[inaudible]`/`[music]` — ne može
preživeti). Sačuvani pozivni log zahteva telo zamenjuje svaki deo teksta
izvedenog iz videa za tu redigovanu senku, usklađenu po jednakosti sadržaja;
`fullText` sidro se ponovo čita iz završnog pre-pozivnog tereta zaštitne ograde,
tako da usklađivanje i dalje uspeva nakon kasnijih zaštitnih ograda (PII i
maskeri akreditiva, prioriteti 10/95) prepisuju tekst opisa na licu mesta i
nakon sistemskog poziva/ predaje/ injekcije memorije preoblikuju niz poruka.
Telo poslato uzvodno modelu ostaje nepromenjeno. Posmatrani zahtev takođe ne
popunjava trajnu Memoriju (i ekstrakcija izvedena iz zahteva i odgovora se
preskoči), tako da odgovor modela ne može ponovo odražavati tekst transkripta
u Memoriji.

**Sirovi video polja (#12430).** Kada je most omogućen i izvorna podrška za video
je nepoznata ili odsutna, definisana `transcript`/`audioTranscript` polja takođe
aktiviraju `videoBridgeObserved`, čak i nakon neuspeha opisa ili `maxVideos`
ograničenja. `null` i prazni stringovi se računaju; odsutna polja i ne-video
metapodaci se ne računaju. Zadržane kopije rediguju ova polja ili izostavljaju
zahtev, a keševi/Memorija se zaobilaze. Teret pružatelja ostaje nepromenjen.

Dodatne zadržane kopije koriste isti signal posmatranog zahteva. Sirovi
snapshot klijentskog zahteva pre zaštitne ograde, u memoriji čekajući zahtev,
i rana odbijena loga zahteva strukturno zamenjuju polja transkripta u video
delovima; string prompti sintetizovani od strane faza pipeline-a i predaje
konteksta se rediguju na odredištu sačuvanog zahteva. Sačuvani marker
`video_content_removed` čini da nastavak `previous_response_id` ne uspe
zatvoreno umesto da rekonstruiše tekst koji je namerno odbačen. Ako posmatrani
zahtev izgubi svoju senku redigovanja po delovima pre logovanja, ili čak jedan
od nekoliko video senki ne uspe da se podudara nakon kasnijih mutacija zahteva,
sačuvano telo zahteva se potpuno izostavlja umesto da zadrži delimično redigovani
transkript.

Za posmatrani zahtev, model odgovor može citirati bilo koji deo transkripta bez strukturirane granice naznake. Njegov sačuvani pozivni dnevnik `responseBody` se stoga zamenjuje oznakom za izostavljanje; detaljni artefakt pipeline-a (koji može uključivati gornje/klijentske telo i delove toka) se ne čuva. Semantički, idempotentni i kešovi za ponavljanje rezonovanja zaobilaze čitanja i pisanja za taj zahtev. Zahtev provajdera i odgovor vidljiv klijentu ostaju nepromenjeni. Rani keepalive bajtovi se ispuštaju iz privremenog bafera kada je detaljni artefakt izostavljen. Kirova upozorenja o neispravnom EventStream-u izveštavaju samo o broju bajtova u teretu, nikada o njegovom sadržaju ili sirovoj grešci JSON parser-a.  
Ovo ne tvrdi da je svaki nepovezani dijagnostički alat provajdera/plugina pregledan; širi pregled zadržanih sudova se prati u #11658.

Unutrašnji `/api/modality-bridge/video/drilldown` životni ciklus je odvojen, loopback/token-autentifikovani keš podloga. Svaka operacija takođe zahteva kanonski neprozirni ID glavnog subjekta. Pre nego što se omogući pozivatelju u produkciji, mora izvesti taj ID iz autentifikovanog zakupca i nikada ne sme proslediti vrednost koju je izabrao klijent. Ključevi keša povezuju tog glavnog subjekta sa kanonskim sesijama i ID-evima video-reference, čuvaju samo njihove SHA-256 izvedene ključeve, i ograničavaju i čitanje i brisanje na istog glavnog subjekta. Keš čuva najviše 16 izvedenih JPEG okvira po unosu, ističe ih nakon deset minuta, i podržava ograničena `start`/`end` čitanja ili eksplicitno brisanje sesije.

Svaki glavni subjekt je ograničen na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta ograničenja su nezavisna od globalnog plafona od 64 unosa/256 MiB: pritisak kvote glavnog subjekta izbacuje samo najmanje korišćene unose tog glavnog subjekta pre nego što se razmatra globalno LRU izbacivanje. Istečeni unosi se uklanjaju iz oba, glavnog subjekta i globalnog računovodstva na aktivnost keša, dok otkazivanje i neuspeh validacije ne izvršavaju delimičnu zamenu.

Keš odbacuje nekanonski Base64, višak popunjavanja, ne-JPEG medije, neispravne ili skraćene JPEG-ove, i JPEG-ove koji proizvode upozorenje tokom ograničenog punog `sharp` dekodiranja slike. Ponovo kodira svaku prihvaćenu sliku kao kanonski JPEG, izvodi širinu i visinu iz dekodiranih bajtova umesto da veruje poljima pozivaoca, i odbacuje sve završne poliglotne bajtove umesto da ih zadržava. Samo je ograničeni kanonski kompresovani bafer naplaćen obema kvotama. JSON ograničenje za prenos uključuje Base64 preopterećenje za plafon od 32 MiB dekodiranog ulaza. Svaka  
sačuvana derivacija beleži svoj validirani JPEG format/rezoluciju, politiku uzorkovanja, verziju derivacije, vreme kreiranja, serverom izračunati sadržajni hash, i hash roditeljskog reference plus hash roditeljskog sadržaja pouzdanog pozivaoca. Otkazivanje se proverava između asinkronih faza dekodiranja/hash-a pre atomskog komitovanja keša.

Proizvodni proizvođač ponovo koristi već izvedene broker okvire samo nakon uspešne vizuelne analize, bez drugog preuzimanja/ekstrakcije videa. Zahteva operator `modalityBridgeVideoDrilldownEnabled=true`, strogo po delu `drilldown: true`, i autentifikovani API-ključ ID. Klijentom deklarisane vrednosti glavnog subjekta/sesije nikada ne uspostavljaju vlasništvo. Bez sve tri uslove ne vrši hash, promenjuje veličinu ili zadržava dodatne okvire. Neuspeh zadržavanja čuva upotrebljiv vizuelni odgovor. Pristankom odobreni zahtevi zaobilaze keš rezultata celog videa tako da keširani rezultati nikada ne ponavljaju rukovanje.

Uspešni JSON i SSE odgovori izlažu najviše četiri neprozirna rukovanja u ograničenom `x-omniroute-video-drilldown` header-u. Ovlašćeni izvori pretraživača mogu čitati taj header bez proširivanja CORS politike porekla. Nova rukovanja koriste `v1.<32-byte random base64url token>`, a registar zadržava samo  
njihove SHA-256 hash-eve. Čitač/parser header-a takođe prihvata nasleđene 64-hex tokene. Autentifikovani javni potrošač je  
`GET /api/v1/video-bridge/drilldown?handle=...`, nezavisno ograničen sa  
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Eksplicitno sačuvano false ukida pristup čak i kada je nasleđeni `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env  
fallback omogućen. Proizvodno zadržavanje ima analogni nasleđeni  
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Obe fallback opcije su po defaultu isključene.

Potrošač izvodi vlasništvo iz autentifikovanog ključa, primenjuje politiku ključa, i vraća isti 404 za nepoznata, istečena i rukovanja drugog ključa. Prihvata  
`variant=preview|standard|detail` (maksimalna JPEG dimenzija 320/640/1280, nikada ne povećava),  
`limit=1..8` (ili nasleđeni `frames` alias, nikada oboje), nulti-bazni `page`, i opcione  
`start`/`end` fokus sekunde. Dupli  
ključni upiti i obrnuti fokus prozori se odbacuju. Svaka vraćena varijanta ima hash  
svojih stvarnih sadržaja i stvarne rezolucije metapodataka, povezanih sa zadržanim izvorom. Varijante se izvode prilikom čitanja umesto da se čuvaju kao dodatne zadržane kopije. JSON  
odgovor, uključujući Base64/envelop, je ograničen na 32 MiB; prevelika stranica vraća 413 i klijent mora zatražiti manje okvire. Čitanja proveravaju otkazivanje oko svake  
promene veličine i ponovo proveravaju validnost rukovanja pre vraćanja. `DELETE` od strane vlasnika je idempotentno;  
brisanje ili isteka TTL oslobađa zadržani izvor i računovodstvo korišćenja.

Zajednički skladište je lokalno za proces: rukovanja ističu prilikom ponovnog pokretanja i nisu prenosiva između nezavisnih OmniRoute procesa. Statistika upravljanja izlaže efikasnu politiku zadržavanja/udaljenosti i agregira zadržane unose/bajte samo, nikada medije, reference,  
ID-ove glavnih subjekata ili rukovanja. Panel za podešavanje videa prikazuje te vrednosti i može sačuvati  
oba prekidača pristanka. Ova dokumentacija o implementaciji nije dokaz o aktivnom implementaciji ili promociji; prihvatanje pravog modela se prati odvojeno.

Okviri se redom označavaju sa konfigurisanom Video modelom. Prazan Video override nasleđuje Vision podešavanje; ako su oba prazna, Vision auto-router bira efektivni model sposoban za viziju. Uspešne oznake zamenjuju originalni deo sa stabilnim `[Video description:` prefiksom koji takođe označava tekst kao nepouzdanu medijsku posmatranje i govori downstream modelima da ne prate uputstva pronađena u mediju. Ključevi keša za oznake okvira uključuju JPEG bajtove, prompt, vremensku oznaku i efektivni model; samo uspešne oznake se keširaju. Unosi u keš zadržavaju stvarni uspešni model proizvođača, uključujući model rezervne opcije; most izveštava `mixed` kada su različiti okviri proizvedeni različitim modelima. Hit u kešu ponovo koristi tu identitet proizvođača umesto da ga preimenuje kao traženi plan usmeravanja. Keš rezultata celog videa se ključuje na svaki ulaz koji menja izlaz — prompt, efektivni model, politiku uzorkovanja, broj okvira, način semantičke analize, SHA-256 otisak normalizovanog fokusa, fokus prozor, `transcript`, `audioTranscript`, i oznaku kontaktne stranice — tako da promena bilo koje od tih dimenzija predstavlja promašaj u kešu, nikada zastarelu ponovnu upotrebu. Verzija politike vizuelne dedupikacije, prag i ograničen broj kandidatskih okvira su takođe eksplicitni u ključu keša rezultata i metapodacima; promena politike stoga ne može ponovo koristiti zastareli opis celog videa. Metapodaci keša rezultata v4 čuvaju način i otisak, nikada sirovi korisnički zadatak. Metapodaci zaštitne ograde izveštavaju o traženim i efektivnim načinima analize; traženi `focused` način bez upotrebljivog korisničkog teksta se izveštava kao efektivno `full`.

Zaštitna ograda izvlači svaki podržani deo videa, ali ne opisuje više od `modalityBridgeVideoMaxVideos`. Za cilj koji je dokazano da ima `supportsVideo === false`, neuspešni i video zapisi iznad limita postaju eksplicitni sigurni tekstualni markeri tako da nijedan sirovi video ne preživi. Kada je sposobnost nepoznata, ti delovi ostaju netaknuti. Ciljevi sa `supportsVideo === true` zaobilaze most. Signal za abortiranje zahteva klijenta se širi kroz preuzimanje, broker red, podprocese i pozive za oznake; aborti se zaustavljaju između videa i nikada ne otvaraju sirovi medij.

Podešavanja u vreme izvođenja su DB-podržana i Zod-validirana:

| Ključ                               | Podrazumevano | Opseg / ponašanje                                                                                     |
| ----------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Opcionalno vreme izvođenja, opt-in                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` čuva generičke oznake; `focused` koristi ograničen, nepouzdani kontekst poslednjeg korisnika   |
| `modalityBridgeVideoModel`          | `""`          | Nasleđuje Vision Bridge model                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware`, ili proporcionalni `segment_aware`; neuspeh detektora se vraća na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                        |

Zastarele sačuvane vrednosti vremena za Video iznad 120 sekundi su ograničene na rok brokera; nova podešavanja iznad tog limita se odbacuju. `GET /api/modality-bridge/video/runtime` zahteva poverljivu pečatnu lokalnost pre autentifikacije ili ispitivanja vremena izvođenja, zatim zahteva upravljačku autentifikaciju. Vraća samo `available`, sanirane verzije FFmpeg/ffprobe, i fiksni razlog kada vreme izvođenja nije dostupno. Unutrašnja tačka ekstrakcije nije javni API za otpremanje: zasićenje reda vraća `503` plus `Retry-After`, prekid poziva vraća `499`, a fiksni rok brokera vraća `504`. Konvertovani odgovori dodaju `video->text;model=<visionModel>;parts=<videos>` u centralni `x-omniroute-modality-bridge` zaglavlje bez uklanjanja Vision ili Audio segmenata.

### PII Masker (`piiMasker.ts`)

Radi na **oba** stepena.

- **`preCall`** klonira payload, prolazi kroz `system`, `messages`, `input`, i `prompt` (uključujući obične string stavke), i primenjuje `processPII()` (iz `@/shared/utils/inputSanitizer`) na string `content`/`text` polja. Kada je `PII_REDACTION_ENABLED=true`, otkriveni PII se rediguje u izlaznom payload-u. Ovo je nezavisno od `INPUT_SANITIZER_MODE` (koji samo kontroliše politiku ubrizgavanja prompta). Kada je redigovanje isključeno, poziv beleži brojeve detekcije bez prepisivanja sadržaja.
- **`postCall`** duboko klonira odgovor, pokreće `sanitizePIIResponse()` plus masku oblika API-ja odgovora (`maskResponsesOutput` — pokriva `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog redigovanja, izmenjeni odgovor zamenjuje original.

Zaštitna ograda nikada ne blokira; samo anotira (`meta.detections`, `meta.redacted`) ili prepisuje.

### Prompt Injection (`promptInjection.ts`)

Otkriva protivničke strukture u sadržaju koji je obezbedio korisnik i sprovodi konfigurisanju politiku. Ponašanje se pokreće promenljivim okruženja i opcijama konstruktora:

| Podešavanje  | Env var                                                                                               | Podrazumevano | Efekat                                                                                                                                                                                                  |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno    | `INPUT_SANITIZER_ENABLED`                                                                             | `true`        | Kada je `false`, zaštitna ograda se prekida.                                                                                                                                                            |
| Način        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`        | Politika injekcije: `block`, `warn`, ili `log`. (`redact` je prihvaćen za unazad kompatibilnost, ali **ne** uklanja tekst injekcije; zahtev za prepravku PII se kontroliše sa `PII_REDACTION_ENABLED`.) |
| Prag blokade | `blockThreshold` opcija / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Minimalna ozbiljnost potrebna za blokiranje. Srednja je samo za posmatranje po podrazumevanju.                                                                                                          |

**Prioritet načina** (`getMode`): poziva `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcionalna zastavica** (Dashboard → Podešavanja →
Funkcionalne zastavice) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Dakle, nadjačavanje na kontrolnoj tabli pobediće nad env varijablama, tako da UI funkcionalnih zastavica kontroliše aktivnu zaštitu (bez ponovnog pokretanja). Čitanje iz DB-a je fail-safe:
ako dođe do greške, zaštita se vraća na ponašanje zasnovano na env-u, a kada nije
postavljeno nadjačavanje, ponašanje je identično samo env rešenju.

Izvori detekcije:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (deljeni detektor
   set korišćen na drugim mestima u procesu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba `high` ozbiljnosti).
3. Opcioni `customPatterns` prosleđeni putem opcija konstruktora (stringovi, regex,
   ili `{ name, pattern, severity }` zapisi).

Kada je `mode === "block"` **i** barem jedna detekcija ispunjava prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Zahtev odbijen:
otkriven sumnjiv sadržaj" }`. U `warn`/`log` režimima zaštitna ograda beleži, ali
dozvoljava poziv. Deljeni pomoćnik `evaluatePromptInjection()` je takođe izvezen
za pozivače koji trebaju da procene upite bez prolaska kroz registar.

**Ograničenje skeniranja (v3.8.20):** detektor samo ispituje **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` pre pokretanja
petlje obrazaca. Direktive injekcije se nalaze blizu vrha unosa, tako da ovo
ograničava CPU/GC regex na višestotinama-KB teretima bez slabljenja detekcije (up.
#3932, #4041).

### Masker kredencijala (`credentialMasker.ts`)

Radi na **oba** stepena, poslednji u podrazumevanom lancu (prioritet `95`). Uklanja
poznate obrasce API ključeva / tajnih tokena iz izlaznog tereta (sadržaj poruke,
argumenti poziva alata, rezultati alata) **i** odgovora provajdera, tako da
kredencijal koji je zalepjen u upit (ili vraćen od strane rezultata alata) nije otkriven
gore navedenom provajderu ili nazad klijentu.

- **Samo na zahtev**, ista konvencija kao PII redakcija (Stroga pravila #20-povezana):
  onemogućeno osim ako `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitna ograda je bez efekta —
  nikada ne blokira i nikada ne prepravlja.
- `redactCredentials()` prolazi kroz celu strukturu tereta/odgovora (`walkValue()`,
  sigurno za zagađenje prototipa, sigurno od ciklusa putem `WeakSet`) i zamenjuje podudaranja sa
  `[REDACTED:<type>]` mestom, klonirajući samo grane koje su se zapravo
  promenile.
- `CREDENTIAL_PATTERNS` pokriva LLM ključeve provajdera (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve za oblak
  (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  stringove za povezivanje koji sadrže kredencijale (`mongodb://user:pass@...`, itd.), i
  generički obrazac za `Authorization`/`x-api-key`/`api-key`/`apikey` zaglavlje-vrednost.
- Ključevi u obliku zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se strukturno uklanjaju (samo vrednost, prefiks šeme kao
  `Bearer `/`Basic ` očuvan) umesto putem generičkog tekstualnog regex-a.
- Zaštitna ograda nikada ne blokira; samo prepravlja (`modifiedPayload` /
  `modifiedResponse`) i anotira (`meta.credentialsRedacted`, `meta.count`).

Regresiona zaštita: `tests/unit/credential-masker-guardrail.test.ts`.

## Основни уговор (`base.ts`)

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
  block?: boolean; // true тренутно прекида ланац
  message?: string; // приказује се приликом блокирања
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // враћа га preCall ради измене захтева
  modifiedResponse?: TValue; // враћа га postCall ради измене одговора
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

Заштитни механизам сигнализира „без измена“ враћањем вредности `void`, `{}` или
`{ block: false }`. Враћање `modifiedPayload`/`modifiedResponse` замењује
вредност која се прослеђује кроз ланац наредним заштитним механизмима.
`signal?: AbortSignal` преноси животни циклус позиваоца у заштитне механизме. Прекид захтева је намерни fail-open изузетак: медијски мостови заустављају рад и обављају чишћење без враћања необрађеног медијског садржаја одредишту за које се зна да га не подржава.

## Регистар (`registry.ts`)

Синглтон `guardrailRegistry` излаже:

- `register(guardrail)` — додаје заштитни механизам (или га замењује на основу нормализованог назива) и
  поново сортира према растућој вредности `priority`.
- `clear()` / `list()` — административне помоћне функције.
- `runPreCallHooks(payload, context)` — пролази кроз активне заштитне механизме, прослеђује
  payload кроз `modifiedPayload` и зауставља се на првом `block: true`.
- `runPostCallHooks(response, context)` — исти ток на страни одговора.
- `resetGuardrailsForTests({ registerDefaults })` — брише стање и опционо
  поново региструје подразумеване механизме ради чисте изолације тестова.

Оба покретача враћају `{ blocked, payload|response, results, guardrail?, message? }`,
где је `results` низ записа `GuardrailExecutionResult` који садрже
поља `blocked`, `skipped`, `modified`, `error` и `meta` за сваки заштитни механизам,
што је корисно за праћење.

### Онемогућавање заштитних механизама по захтеву

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` обједињује
листу назива заштитних механизама без дупликата које треба прескочити за тренутни
захтев. Извори (сви су опциони и сви се обједињују):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` у телу захтева (на највишем нивоу)
- `metadata.disabledGuardrails` у телу захтева
- Заглавље `x-omniroute-disabled-guardrails` (или застарело
  `x-disabled-guardrails`)

Вредности могу бити низови стрингова или стринг са вредностима раздвојеним зарезима; називи се
нормализују на мала слова у kebab-case формату (`pii_masker` → `pii-masker`). Резултат
се прослеђује преко `context.disabledGuardrails` регистру, који прескаче
одговарајуће заштитне механизме (`skipped: true` у `results`).

## Редослед извршавања

За сваки захтев који пролази кроз `src/sse/handlers/chat.ts` и
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` саставља листу за прескакање на основу API кључа, тела
   и заглавља.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` покреће заштитне механизме према растућем
   редоследу приоритета:
   - Онемогућени заштитни механизми се евидентирају као `skipped`.
   - `preCall` сваког заштитног механизма може да измени корисни садржај помоћу `modifiedPayload`.
   - Први `block: true` прекида ланац, а обрађивач враћа
     одговор о одбијању од стране заштитног механизма.
3. Корисни садржај (који је можда измењен) прослеђује се комбинованом рутирању и
   отпремању узводном сервису.
4. Након састављања одговора, `guardrailRegistry.runPostCallHooks(...)`
   покреће исти ланац над одговором. `block: true` у овој фази одбацује одговор
   узводног сервиса.

Заштитни механизми који баце изузетак евидентирају се са `error: <message>` и бележе путем
`logger.warn`, али се ланац наставља — систем је намерно пројектован да настави рад у случају грешке.

## Конфигурација

Променљиве окружења које читају уграђени заштитни механизми:

| Променљива                            | Користи је              | Ефекат                                                                                                                 |
| ------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Поставите на `false` да бисте потпуно онемогућили откривање.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Политика за убризгавање: `warn`, `block` или `log`. Застарела вредност `redact` не мења текст убризгавања.             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Режим заштите од убризгавања; такође DB заставица функције која **има предност** над променљивама окружења (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Минимална озбиљност коју `MODE=block` одбија: `high` (подразумевано), `medium` или `low`.                              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Застарели алијас за `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Када је `true`, PII подаци у захтеву се редигују (независно од режима за убризгавање).                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (низводно) | Контролише понашање маскирања на страни одговора.                                                                      |

Заштитни механизми Modality Bridge-а читају конфигурацију у време извршавања из складишта
подешавања заснованог на бази података (`getSettings()`), а не из променљивих окружења. Примарни кључеви за Vision су
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` и
`modalityBridgeCacheMaxEntries`. Застарели
`visionBridge*` кључеви прихватају се само као документована резервна опција за читање током једног циклуса;
контролна табла уписује примарне кључеве. Подразумеване вредности и механизам за разрешавање резервних вредности
налазе се у `src/shared/constants/modalityBridgeDefaults.ts`, док су застареле
константе задржане у `src/shared/constants/visionBridgeDefaults.ts`.

Audio користи `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` и `modalityBridgeAudioMaxClips`, као и дељена
`modalityBridgeCache*` подешавања. Audio нема резервну подршку за застареле кључеве јер су ови
кључеви уведени са Modality Bridge шемом.

Video користи `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` и
`modalityBridgeVideoTimeout`, као и дељена `modalityBridgeCache*` подешавања.
Подразумевано је онемогућен јер су FFmpeg/ffprobe опционе оперативне
зависности, а описивање кадрова повећава кашњење и трошкове модела.

## Прилагођени заштитни механизми

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

Кораци:

1. Направите `src/lib/guardrails/myGuardrail.ts` који проширује `BaseGuardrail`.
2. Имплементирајте `preCall` и/или `postCall`.
3. Или га региструјте приликом увоза (додавањем из `registerDefaultGuardrails`) или
   позовите `guardrailRegistry.register(...)` током извршавања — регистар замењује
   сваки претходни заштитни механизам са истим нормализованим називом.
4. Додајте тестове у `tests/unit/` (постојећи примери:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Тестирање

Користите `resetGuardrailsForTests()` између тестова како бисте започели из познатог стања.
Проследите `{ registerDefaults: false }` да бисте започели са празним регистром и
регистровали само заштитне механизме који се тестирају. Vision Bridge прихвата убризгавање
зависности (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge излаже
еквивалентне тачке раздвајања за подешавања, могућности, избор STT модела, проверу
акредитива и транскрипцију. Тестови стога могу да провере оба тока без приступа бази
података или мрежи.

## Погледајте и

- `src/lib/guardrails/` — имплементација
- `src/shared/utils/inputSanitizer.ts` — дељени детектор на којем се заснивају
  откривање убризгавања упита и маскирање личних података
- `src/shared/constants/visionBridgeDefaults.ts` — подразумеване вредности за Vision Bridge и
  листа модела са принудним премошћавањем
- `src/shared/constants/modalityBridgeDefaults.ts` — дељене подразумеване вредности извршавања за Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ортогонални слој (прекидач кола, периоди мировања)
- `docs/reference/ENVIRONMENT.md` — потпуна референца променљивих окружења

## Покривеност рута заштитом од убризгавања и red-team тестирање (Фаза 8 · Блок D)

Заштита од убризгавања (`createInjectionGuard` / `withInjectionGuard`) покрива све руте
које прихватају корисничке упите. Поштује `INJECTION_GUARD_MODE` (подразумевано `warn` = само евидентирање;
`block` = враћа HTTP 400 `SECURITY_001`).

| Тип               | Руте                                                                                                                                                 | Подразумевани режим |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Текст (постојеће) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Генеративне       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Подаци            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Издвајање текста (`extractMessageContents`) обухвата `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (сваке ноћи, `nightly-llm-security.yml`):** promptfoo проверава да свака рута блокира
OWASP-LLM корпус када је `INJECTION_GUARD_MODE=block`; garak покреће пробе (прескаче се без тајне).
`moderations` је укључен ради доследности — оператори у режиму блокирања могу га изузети путем
`resolveDisabledGuardrails`.

Ноћни ток рада (`.github/workflows/nightly-llm-security.yml`, cron + ручно
покретање) има два задатка:

- **`promptfoo-guard` (блокирајући)** — покреће `promptfoo eval -c promptfooconfig.yaml`
  са `INJECTION_GUARD_MODE=block`. Сваки супарнички случај (нпр. „игнориши сва
  претходна упутства…“, покушаји заобилажења ограничења у DAN стилу) потврђује да одговор садржи
  `error.code === "SECURITY_001"`, односно да је заштита заиста одбила захтев.
- **`garak` (саветодавни)** — покреће garak `--probes promptinject,dan,leakreplay`
  над локалном OmniRoute инстанцом (`http://localhost:20128/v1`). Условљен је
  тајном добављача (`PROMPTFOO_PROVIDER_KEY`); безбедно се прескаче и има суфикс
  `|| true`, тако да извештава без обарања CI процеса.

Покривеност помоћне функције заштите (`createInjectionGuard` / `withInjectionGuard`)
обухвата сваку `/v1` руту која прихвата упите; текст упита се преузима из
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` помоћу
`extractMessageContents()` у `src/shared/utils/inputSanitizer.ts`.
