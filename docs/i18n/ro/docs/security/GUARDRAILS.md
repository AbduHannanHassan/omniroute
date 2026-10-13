# Guardrails (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sursa de referință:** `src/lib/guardrails/`
> **Ultima actualizare:** 2026-08-29 — v3.8.51 (proveniența transcrierii Video Bridge este declarată de apelant,
> dar nu este încă verificată de server — clarificat conform #11661)

Mecanismele de protecție aplică reguli de siguranță, politici și transformări de conținut la limita
dintre OmniRoute și furnizorii din amonte. Fiecare mecanism de protecție poate inspecta (și
opțional respinge, transforma sau adnota) sarcinile utile ale cererilor (`preCall`) și
răspunsurile din amonte (`postCall`).

Sistemul este de tip **fail-open**: dacă un mecanism de protecție generează o excepție în timpul execuției, registrul
înregistrează eroarea și continuă cu următorul mecanism de protecție, în loc să determine eșecul
cererii. Blocarea este o decizie explicită (`block: true`), niciodată un accident.

## Garduri Încorporate

Registrul încarcă automat șase garduri în ordinea priorității la import
(vezi `registry.ts` → `registerDefaultGuardrails()`):

| Prioritate | Nume                | Etapă(e)       | Fișier                |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Numerele de prioritate mai mici rulează **mai întâi**.

### Vision Bridge (`visionBridge.ts`) — Podul de Modalitate PR-1

Interceptă cererile care conțin imagini destinate **modelurilor non-vizion** și fie
redirecționează întreaga cerere către un model capabil de viziune, fie înlocuiește părțile cu imagini
cu descrieri textuale produse de un model de viziune configurabil înainte de
apelul de upstream. Acest lucru permite furnizorilor doar de text să gestioneze
transparent încărcăturile multimodale.

Flux:

1. Sari dacă modelul țintă suportă deja viziunea (cu excepția cazului în care apare în lista
   de poduri forțate `isVisionBridgeForcedModel`).
2. Extrage părțile imaginii prin `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), care delegă către **detectorul de media unificat**
   `detectMediaParts()` din `open-sse/utils/mediaParts.ts` — sursa unică de adevăr
   partajată cu filtrul de compatibilitate combo.
   Extracția este permisă doar pentru părțile de nivel superior ale formelor
   pe care `replaceImageParts` le poate reintroduce (contractul extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, și Responses API `input_image`. Loviturile imbricate și
   formele doar cu indicatori sunt materiale pentru filtrul combo și nu sunt niciodată extrase.
   Sari dacă nu s-au găsit.
3. Rezolvă configurația de runtime prin `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): noile chei de setări `modalityBridge*`
   câștigă; cheile vechi `visionBridge*` rămân un **fallback de un ciclu**
   (fereastră de rollback). Sari înainte de orice traversare media când
   podul este dezactivat.
4. Selectorul de mod (`modalityBridgeVisionMode`, vezi tabelul de mai jos) decide
   redirecționarea vs descriere. Redirecționarea returnează `modifiedPayload` cu doar `model`
   schimbat, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Calea de descriere: limitează imaginile la `maxImages`, compune promptul conștient de sarcină,
   consultă cache-ul de descriere, apelează modelul de viziune **în paralel**
   (`Promise.allSettled`), și injectează părțile de text `[Image N]: <description>` în
   locul lor. O descriere eșuată returnează `null` și partea originală a imaginii este
   **păstrată** (#4012) — exceptând calea de descriere combo când fiecare
   descriere a eșuat, unde un upstream confirmat non-vizion primește un
   `(unavailable — no vision-capable provider connected)` stub în schimb (#8430).
6. Returnează `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selector de mod (`modalityBridgeVisionMode`)

| Mod        | Implicit | Comportament                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Heuristică veche, neschimbată (#6640/#7204): modelele non-combo/`auto/` redirecționează către cel mai bun model de viziune, cu excepția cazului în care modelul original are deja acreditive utilizabile (atunci descrie); țintele combo descriu întotdeauna.                                                                       |
| `describe` |          | Descrie întotdeauna — blocul de redirecționare este sărit complet; modelul ales de utilizator răspunde întotdeauna.                                                                                                                                                                                                                 |
| `reroute`  |          | Forțează redirecționarea: gardul modelului cu acreditive păstrate este ocolit. Gardul de acreditive pentru **ținta** de redirecționare se aplică în continuare — când nu există o țintă de viziune utilizabilă, cererea trece la descriere, astfel încât imaginile brute să nu ajungă niciodată la un backend doar de text (#8430). |

Modurile forțate scurtcircuitează **înainte** ca heuristică auto să ruleze; comportamentul `auto`
este identic din punct de vedere al byte-urilor cu gardul pre-PR-1.

#### Prompt de descriere conștient de sarcină (`modalityBridgeVisionTaskAware`)

Implicit **adevărat**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) adaugă
textul **ultimului mesaj al utilizatorului** (trunchiat la 500 de caractere) la promptul de bază
de descriere, orientând descrierea către ceea ce a cerut efectiv utilizatorul
(patrul codex-vizion) și cerând modelului de viziune să transcrie textul vizibil.
Cu flag-ul dezactivat — sau fără text de utilizator — se folosește promptul de bază neschimbat.

#### Descrierea capului de auto-loop (`callVisionModelSingle()`

în `visionBridgeHelpers.ts`) solicită întotdeauna `image_url.detail: "high"` —
fără condiții, pentru fiecare apelant/furnizor, fără a fi restricționat de vreun semnal al clientului.
Samplingul de detaliu scăzut degradează acuratețea OCR pentru exact sarcina de transcriere a textului
pe care acest prompt o solicită, astfel încât apelul de descriere în sine solicită întotdeauna detalii mari, indiferent de nivelul de detaliu utilizat în cererea inițială. Aceasta
afectează doar corpul cererii interne de descriere; nu schimbă modul în care
OmniRoute transmite propriul `image_url.detail` al apelantului în cererea principală —
această valoare implicită este aplicată separat, și doar pentru clienții OpenCode detectați, în
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Ramura de format wire Anthropic a descrierii auto-loop nu are câmpul `detail`
și nu este afectată de niciunul dintre aceste valori implicite.

#### Limitarea ieșirii descrierii (`modalityBridgeVisionMaxChars`)

| Cheie                          | Implicit | Interval          |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` sau 100–50000 |

`0` (implicit) înseamnă **fără limită** — descrierea returnată de
`callVisionModel()` este transmisă nealterată, păstrând comportamentul existent. Orice valoare în intervalul 100–50000 va trunchia descrierea cu un
sufix `…` înainte de a fi reîmbinată ca `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` în `src/lib/guardrails/visionBridge.ts`).
Creșteți această valoare pentru sarcini OCR cu detalii mari, unde modelul din aval are nevoie de
transcrierea completă; reduceți-o pentru a limita utilizarea token-urilor pe modelele vizuale vorbărețe.
Câmpul de pe tabloul de bord se află pe panoul Avansat al tab-ului Vision
(`modality-bridge-max-chars` în `ModalityBridgeVisionTab.tsx`) și limitează orice
valoare între 1 și 99 la 100, lăsând un `0` explicit
neafectat — `0` este o valoare Zod validă în sine
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nu doar
valoarea implicită "nesetată".

#### Cache-ul descrierii (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL în memorie pentru ieșirile descrierii, partajat pe întreaga proces.
Cheie = `sha256(imageRef + composedPrompt + configuredBridgeModel)` cu
cadru de lungime-prefix (fără coliziuni de limită de câmp). Componenta modelului este
modelul **configurat** al podului, nu modelul care a răspuns efectiv —
`callVisionModel` poate reveni intern, iar cheile pe fiecare încercare ar fragmenta cache-ul. Descrierile eșuate nu sunt niciodată stocate în cache. Setări:

| Cheie                           | Implicit | Interval |
| ------------------------------- | -------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`   | —        |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000  |

#### Normalizarea imaginilor de la distanță (auto-loop descriere/obținere base64)

Când podul obține o imagine **de la distanță** — apelul de descriere Anthropic
și conversia în format wire claude-base64
(`ensureBase64ImagesForClaudeWire`), ambele prin
`fetchRemoteImageAsDataUri()` în `visionBridgeHelpers.ts` — URI-ul de date rezultat
este transmis prin `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) înainte de a fi încorporat în cererea modelului vizual.
Imaginile supradimensionate sunt redimensionate la un **margine lungă de 2048px** (corespunzând
limitei de redimensionare pe care OpenAI/Anthropic o aplică deja pe server), ceea ce reduce
bytes/latency la încărcare fără a schimba ceea ce vede modelul vizual. Redimensionarea
folosește `sharp`, încărcat prin import dinamic: pe o platformă unde binarul său nativ
nu se încarcă, `normalizeDataUri()` **nu aruncă niciodată** — revine
la o transmisie a byte-urilor originale, astfel încât calea de descriere/conversie base64
să continue să funcționeze. Byte-urile non-imagine (o obținere care nu a returnat o
imagine decodabilă) sunt, de asemenea, transmise nealterate. Această normalizare este
limitată la imaginile pe care podul le obține pentru apelul său propriu — nu este niciodată
aplicată la payload-ul brut de transmisie al apelantului, conform principiului de mutație
opțională (Regula strictă #20).

#### Schema de setări + migrare

Noile chei `modalityBridge*` sunt validate Zod în `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio-ul `modalityBridgeCache*`, și grupul
`modalityBridgeAudio*` utilizat de Audio Bridge. Migrarea
`141_modality_bridge_settings.sql` copiază valorile existente legate de
`visionBridge*` în cheile noi corespunzătoare (idempotent, nu suprascrie niciodată
o valoare `modalityBridge*` setată de operator); cheile legate rămân acceptate ca o
fallback de citire pentru un ciclu de lansare.

#### Header de transparență + statistici

Răspunsurile transformate prin descriere poartă
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(construit de `buildModalityBridgeHeader()` în `modalityBridge/bridgeStats.ts`,
ștampilat de `withModalityBridgeHeader()` în `src/sse/handlers/chatHelpers.ts`).
Cereri redirecționate nu primesc **niciun** header — payload-ul a fost nealterat și schimbarea modelului
este deja vizibilă în câmpul `model` al corpului răspunsului.

`GET /api/modality-bridge/stats` (autentificare de management, același nivel ca
`GET /api/settings`) returnează contoarele în memorie pe fiecare modalitate
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pentru `vision`, `audio`, și
`video`. `averageLatencyMs` folosește `latencySamples`, nu toate încercările, ca
numitor; o operațiune fără temporizare nu fabrică un eșantion de zero milisecunde.
`bridged` rămâne aliasul compatibil cu versiunile anterioare pentru conversiile reușite; încercările eșuate nu îl incrementează.
Contoarele se resetează la repornirea procesului prin design
(telemetrie, nu contabilitate).

#### Configurarea tabloului de bord

Pagina dedicată tabloului de bord este
`/dashboard/settings/modality-bridge`. Tab-urile sale `Vision`, `Audio`
și `Video` păstrează parametrii de interogare în timp ce schimbă valoarea `tab`.
Tab-ul Vision expune activarea, modul, selecția modelului (inclusiv implicitul
automată), solicitările conștiente de sarcină, limitele avansate de timeout/lungime
a imaginii/descrierii/cache, contoarele de execuție și o solicitare de exemplu
protejată. Tab-ul Audio este, de asemenea, activ: acesta expune activarea, un
selector de model STT-doar cu Auto, limite de timeout/max-clip, contoare audio
și un test de exemplu `input_audio`. Tab-ul Video este funcțional: acesta raportează
starea de execuție FFmpeg/ffprobe — unul dintre cele patru stări explicite ale UI
(`unknown` în timp ce proba este în curs de desfășurare sau nu a putut fi finalizată,
`restricted` pe un host de tabloul de bord non-loopback unde proba este sărită
pe partea clientului, `unavailable` odată ce a fost probată și confirmată ca lipsă,
sau `available` cu versiunile FFmpeg/ffprobe) — păstrează limitele enable/model/frame/video/timeout,
filtrează selectorul de model pentru modelele capabile de viziune și expune contoare video.

Fosta carte Vision Bridge din setările AI este un link de compatibilitate către
noua pagină; aceasta nu mai deține o a doua copie a formularului. Furnizorii de
media leagă, de asemenea, fluxurile Image-to-Text și Speech-to-Text de tab-urile
corespunzătoare Modality Bridge fără a elimina terenul de joacă existent Speech-to-Text.

**Ocolirea admiterii auto-loop:** când apelul de descriere trece prin
auto-loop-ul propriu al OmniRoute `/v1` (model de furnizor non-standard),
sub-solicitarea trimite `x-omniroute-admission-bypass: internal` și este
autentificată cu acreditivul de auto-loop rezolvat — sentinelul local
`sk_omniroute` în modul local, sau cheia de mediu configurată de operator
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ( #1350) astfel încât desfășurările
`REQUIRE_API_KEY=true` să poată rula în continuare apelul de descriere. Ocolirea
este onorată doar pentru acele acreditive exacte, astfel încât clienții externi
nu pot folosi antetul pentru a sări peste admitere.

Valorile implicite moștenite se află în `src/shared/constants/visionBridgeDefaults.ts`;
noile valori implicite de mod/sarcină/conștiente de cache și rezolvatorul de setări
se află în `src/shared/constants/modalityBridgeDefaults.ts`. Bariera expune o
opțiune de constructor `deps` astfel încât testele să poată injecta implementări
false `getSettings` și `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Interceptă solicitările de chat care conțin audio înainte de a ajunge la un
țintă care nu este cunoscut că acceptă input audio. Nu redirecționează niciodată
solicitarea de chat: părțile audio sunt transcrise prin endpoint-ul multipart
compatibil OpenAI existent, iar modelul de chat ales continuă cu transcrierile
textuale.

Flux:

1. Rezolvă `supportsAudio` prin `getResolvedModelCapabilities()`. Metadata
   explicită a registrului de furnizori câștigă, apoi metadata statică a modelului,
   apoi `modalities_input` sincronizat. O listă de input declarată fără `audio`
   este `false`; nicio dovadă de capacitate rămâne `null`. Atât `false` cât și
   `null` activează podul conservator, în timp ce `true` îl ocolește.
2. Rezolvă setările `modalityBridgeAudio*` și extrage părțile audio de nivel
   superior care pot fi combinate din fiecare mesaj prin detectorul comun
   `detectMediaParts()`. Formele de wire acceptate sunt OpenAI `input_audio`,
   `audio_url`, și `source.media_type: "audio/*"`. Audio-ul înnodat este
   detectat pentru rutare, dar nu este eliminat de calea de combinare. Lucrul
   este limitat de `modalityBridgeAudioMaxClips`; părțile ulterioare rămân
   neafectate.
3. Onorează un `provider/model` configurat, sau lasă `selectAudioBridgeModel()`
   să parcurgă `AUDIO_TRANSCRIPTION_PROVIDERS` în ordinea stabilă a catalogului
   și să selecteze primul model cu un acreditiv de furnizor activ utilizabil.
4. `callAudioTranscription()` convertește audio base64/data-URI în
   `file` multipart, sau descarcă un `audio_url` de la distanță prin
   bariera public-only outbound cu pinning DNS și o limită de 25 MB. Apoi
   trimite fișierul și modelul selectat către auto-loop-ul local
   `/v1/audio/transcriptions`, autentificat cu `resolveSelfLoopBearer()`. Ruta
   de transcriere existentă efectuează căutarea normală a acreditivelor, gestionarea
   cooldown/rate-limit și dispatch-ul furnizorului.
5. Apelurile de succes își înlocuiesc părțile cu `[Audio N]: <transcript>`. Apelurile
   rulează cu `Promise.allSettled`: o eșec individual păstrează acea parte audio
   originală (contract #4012). Dacă fiecare apel eșuează și ținta este dovedită
   `supportsAudio === false`, părțile devin
   `[Audio N]: (unavailable — no STT provider connected)` (contract #8430). Pentru
   o țintă necunoscută (`null`), un rezultat de eșec total rămâne neafectat. O țintă
   dovedită doar text cu niciun acreditiv STT utilizabil primește același stub
   explicit fără a emite un apel de rețea.

Transcrierile de succes folosesc cache-ul Modality Bridge LRU/TTL la nivel de proces.
Cheia combină referința audio, eticheta operației stabile `audio-transcription`
și modelul STT selectat; eșecurile nu sunt niciodată stocate în cache. Încercările
audio actualizează contoarele comune `bridged`, `cacheHits`, `failures` și
`lastUsedAt`. Răspunsurile transformate poartă
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; solicitările
neafectate nu primesc un segment Audio Bridge.

Setările de execuție sunt susținute de DB și validate de Zod:

| Cheie                         | Implicit | Interval        |
| ----------------------------- | -------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —               |
| `modalityBridgeAudioModel`    | `""`     | Auto sau ID STT |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10            |

Cache-ul comun rămâne controlat de `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` și `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptarea părților video de nivel superior în completările de chat `messages` și răspunsuri
API `input` înainte ca un țintă fără suport video nativ cunoscut să fie apelată.
Formele acceptate sunt `input_video`, `video_url`, `video_source`, URL-uri HTTPS,
și `data:video/*;base64,...` URI-uri de date. Numele de fișiere simple în text nu sunt tratate
ca video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) se ocupă de traversarea cererilor,
verificarea capacității/politicii, agregarea pe cerere și payload-ul răspunsului.
Lucrările pe video — achiziția, cache-ul rezultatului complet, descrierea unei secvențe de cadre
(care fuzionează orice transcriere audio declarată de apelant) și metricile/abortul/curățarea
pe fiecare încercare — sunt ascunse în spatele `processVideoPart` în
`videoBridgePipeline.ts`, apelat o dată pe parte video în interiorul buclei lui `preCall`.
Acest modul definește, de asemenea, limitele explicite ale porturilor `VideoMediaBrokerPort`
(achiziționarea de bytes și extragerea cadrelor sample), `VideoAudioTranscriptionPort`
(fuzionarea unei transcrieri audio declarate de apelant cu subtitrările sample) și
`VideoDrilldownPort` (forma legacy raw-store). STT-ul de producție și retenția cadrelor
sunt compuse în jurul portului descriptiv prin `createVideoSttAdapter` și
`createVideoDrilldownAdapter`; acesta din urmă folosește ciclul de viață cu handle opac partajat.

Calea de cerere publică `/v1` nu importă sau invocă niciodată un subprocess. Videoclipurile
de la distanță sunt descărcate sub o limită de 50 MiB; videoclipurile inline base64 au o
limită conservatoare de 36 MiB decodate pe video astfel încât modelul/mesajele/envelopa de
încadrare să poată rămâne în limita de admitere a cererilor JSON publice de 50 MiB. Lungimea inline
și estimările dimensiunii decodate sunt verificate înainte de alocare. HTTPS este
necesar pe URL-ul inițial de la distanță și fiecare redirecționare, folosind protecția existentă
public-only outbound cu DNS pinning. Bytes-urile trec apoi peste exact limita internă
`POST /api/modality-bridge/video/extract`. Această rută este atât
`LOCAL_ONLY` cât și `SPAWN_CAPABLE`, acceptă doar o cerere autentificată pe proces,
trusted-loopback, și nu acceptă niciodată un URL, un path de sistem de fișiere, un executabil,
sau o listă de argumente. Pipeline-ul de dimensiune a corpului API și cititorul incremental de corp
al handler-ului impun independent o limită de 50 MiB pentru input-ul broker-ului. Coada sa limitată
rulează o extragere la un moment dat, permite patru joburi în așteptare și limitează input-ul în așteptare la
100 MiB.

În interiorul broker-ului, `ffprobe` citește un fișier local privat; lista de formate
acceptate exclude formatele de playlist și manifest. Pentru containerele permise din familia MOV,
referințele externe de date MOV rămân dezactivate în mod implicit, iar comanda fixă nu se optează
pentru ele. Atât `ffprobe` cât și `ffmpeg` folosesc
lista albă de protocoale `file`-only, un singur fir, matrice de argumente fixe, fără shell,
și executabile rezolvate din `PATH`. Fluxurile de copertă cu imagine atașată nu sunt
candidati jucabili. Toate fluxurile jucabile trebuie să satisfacă limitele, iar un
flux implicit preferat este ales înainte de fallback-ul determinist cu cel mai mic index.
Videoclipurile sunt limitate la 600 de secunde, 8,192 de pixeli pe dimensiune, și
33,554,432 de pixeli sursă. FFmpeg samplează 1–16 cadre JPEG la mijloc, reduce
marginea lungă la maximum 1,024 de pixeli fără a scala în sus intrările mai mici, și
nu primește niciodată un URL. Sampling-ul este `uniform` în mod implicit. Politicile opționale
`scene_aware` și experimentale `segment_aware` efectuează o trecere FFmpeg fixă suplimentară
peste fluxul local deja validat, selectează timpi de scenă limitați `showinfo`, și
revin determinist la aceleași puncte medii uniforme în caz de eșec al detectorului, timeout,
ieșire malformată, sau un set de candidați gol. Modul segment-aware alocă mostre de puncte medii
proporțional cu intervalele de scenă validate; dovezile segment-aware și comportamentul de fallback
sunt detaliate mai jos. Limita strictă de 16 cadre este
aplicată după selecție în fiecare politică. Când o cerere conștientă de scenă are doar un
buget de un cadru, folosește punctul mediu uniform al videoclipului complet activ sau al feroniei
și raportează `policyEffective: uniform`: un singur cadru de scenă selectat
nu poate păstra ambele capete temporale. Un apelant poate oferi opțional o
fereastră de focalizare finită (`start`/`end` secunde); limitele sunt restricționate la durata media,
feronii inversate sau non-finite sunt respinse, iar toate politicile de sampling
sunt efectuate doar în interiorul intervalului normalizat. Fereastra rezultată
este inclusă în metadatele de sampling și în prefixul descrierii neîncrezătoare
astfel încât modelele downstream să poată distinge un extras focalizat de întreaga
linie temporală.

Focalizarea pe subtitrări semantice este o setare separată, explicită. Mod default `full`
analiza păstrează promptul de cadru existent și nu trimite niciodată textul cererii
modelului de subtitrări. În modul `focused`, podul citește doar cel mai recent
`text`/`input_text` non-gol creat de utilizator din același container de Chat sau Răspunsuri,
îl normalizează la NFC, colapsează caracterele de control și spațiile, și îl limitează la 500 de puncte de cod Unicode. Un rezultat gol revine la exact
promptul `full`. Un indiciu utilizabil este serializat ca JSON într-un bloc dedicat
contextului utilizatorului neîncrezător și poate prioritiza doar detaliile observabile; nu
poate suprascrie avertizarea separată împotriva urmării instrucțiunilor vizibile
sau audibile în media. Focalizarea textuală nu deduce niciodată `start`/`end` sau schimbă
samplerul temporal.

#### Dovezi structurale ale segmentului FU-07

`segment_aware` folosește o trecere de pre-analiză limitată peste fluxul video local deja validat.
Lanțul de filtre fixat scalează mai întâi la maximum 320 de pixeli lățime, detectează schimbările de scenă și intervalele înghețate, apoi samplează la 1 cadru pe secundă pentru blur, luma medie, și informații spațiale/temporale. Trecerea este
limitată la 600 de mostre structurale, un fir FFmpeg/filter, aceleași
liste albe de protocoale și containere `file`-only, o limită de output de proces de 1 MiB,
și la maximum 30 de secunde în interiorul termenului limită/abortului partajat al broker-ului. Nu acceptă niciodată o comandă, un filtru, un path sau un URL din cerere.

Valorile structurale sunt dovezi de eșantionare deterministice, nu înțelegerea semantică a videoclipurilor. Ele nu inferă subiecți, acțiuni, subtitrări, discurs sau intenția utilizatorului. Granițele scenelor și cele de îngheț formează segmente; acoperirea înghețului, estomparea, expunerea, detaliul spațial și schimbarea temporală influențează doar modul în care bugetul existent de 1–16 cadre este alocat. Un segment complet înghețat este limitat la un cadru, în timp ce segmentele neînghețate concurează pentru bugetul rămas. Când granițele depășesc cadrele, se menține o acoperire uniformă a cronologiei, astfel încât tăieturile rapide timpurii nu pot ascunde un segment lung de urmărire. Granițele scenelor în cadrul rezoluției de analiză de 1 secundă a unei granițe de îngheț sunt coalescente.

Filtrele lipsă, dovezile malformate/goale, o eroare a detectorului sau timpul limitat de pre-analiză eșuează deschis la politica exactă a punctului mediu uniform. O anulare a apelantului sau un termen limită al brokerului nu eșuează deschis: aceasta termină subprocessul în desfășurare, împiedică extragerea ulterioară a cadrelor, iar arborele temporar privat este eliminat în `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generează fixture FFmpeg deterministe reale pentru economiile post-deduplicare ale apelurilor de subtitrări, alocarea bugetului de mișcare densă, dovezile de estompare/expunere/SI-TI, tăieturile rapide cu un coadă lungă și fals pozitive de estompare graduală. Acesta înregistrează timpul de perete al pre-analizei și, acolo unde `/usr/bin/time` este disponibil, CPU-ul copil și RSS-ul maxim. Verificările sale de calitate sunt doar oracole structurale. Calitatea reală a modelului de subtitrări rămâne `HOLD` deoarece acest sistem nu are un punct final autorizat sau un judecător înghețat. Economiile monetare rămân de asemenea `HOLD` decât dacă `--caption-cost-per-call-usd` furnizează o estimare pozitivă explicită pe apel; scriptul nu fabrică niciun rezultat.

Fiecare cadru este limitat la 4 MiB, toate cadrele brute împreună la 23 MiB, iar răspunsul serializat al brokerului la 32 MiB. Un director temporar privat este eliminat în `finally`. OmniRoute nu împachetează FFmpeg și nu acceptă un path executabil personalizat. Înainte de subtitrare, podul aplică o trecere conservatoare de deduplicare vizuală: fiecare JPEG este redus la un buffer în nuanțe de gri de 16×16 și este comparat doar cu ultimul cadru păstrat. Pentru un buget de subtitrări solicitat peste un cadru, extragerea furnizează un pool de candidați limitat de până la de două ori acel buget și niciodată mai mult de 16 cadre. Limita solicitată este aplicată doar după deduplicare, cu primii și ultimii candidați selectați păstrați în timpul subțierii finale când bugetul este de cel puțin două. Politica versionată `grayscale-16x16-mean-cells-v2` folosește cel mai mare dintre delta medie luma și raportul celulelor miniaturale al căror delta normalizat este de cel puțin 0.05. Pragul de duplicare este constantul 0.04, ales pentru predictibilitate mai degrabă decât expus ca o setare de rulare. Acest semnal secundar de înalt contrast păstrează mișcarea mică și schimbările de text vizibil care o comparație bazată doar pe medie poate ascunde. Erorile comparatorului sau decodorului eșuează deschis și mențin acoperirea. Metadatele de ieșire separă candidații extrași, cadrele utilizate cu succes și duplicatul vizual eliminat.

O parte de videoclip marcată explicit poate solicita o foaie de contact timestamped. Podul construiește cel mult o grilă JPEG de 4 coloane și 16 cadre. Fiecare celulă de 512 pixeli arde timestamp-ul sursei sale într-o bandă inferioară de înalt contrast, în timp ce aceleași timestamp-uri rămân în metadatele textuale pentru asocierea și auditul ulterioare. JPEG-ul complet rămâne limitat la 32 MiB. Dacă `sharp` nu poate decoda sau compune grila, podul revine la cadrele JPEG individuale; o anulare a clientului se propagă totuși prin operațiunea foii.

Dovezile de promovare sunt deliberate separate de microbenchmark-ul compunerii sintetice. `scripts/perf/video-bridge-contact-sheet-eval.ts` definește un sistem de tip A/B versionat pentru modele de viziune compatibile cu OpenAI reale. Măsoară token-urile raportate de furnizor, latența de perete end-to-end (inclusiv compunerea foii), numărul apelurilor modelului și retenția faptelor definite în manifest. Răspunsurile brute ale modelului nu sunt scrise în raport; doar digesturile SHA-256 și ID-urile faptelor corespunzătoare sunt păstrate. Sistemul nu face apeluri de rețea sau apeluri de model plătite decât dacă `--execute-real` este trecut și `--model`, `OMNIROUTE_BASE_URL` și `OMNIROUTE_API_KEY` sunt configurate. Fără acea rulare reală explicită, verdictul său citibil de mașină rămâne `HOLD`; măsurătorile de încărcătură sintetică/numărul apelurilor singure nu sunt dovezi de promovare.

Sistemul separat `scripts/perf/video-bridge-promotion-eval.ts` consumă observațiile FU-07 sau FU-09. Admiterea promovării necesită toate cele opt tipuri de scenarii sintetice plus un clip real sanitizat, cel puțin trei repetiții măsurate pe rol și caz, toate cele zece metrici declarate, digesturi de media/prompt/facte așteptate/setări înghețate, ID-uri unice de observație și un ordin A/B semnat verificat. Chitanța de execuție leagă digestul corpusului, SHA-ul exact al candidatului și revizia modelului. Măsurătorile lipsă sau invalide rămân `HOLD`, inclusiv CPU-ul peste 30 s, RSS-ul maxim peste 512 MiB sau pre-analiza peste 30 s. Acestea sunt limite de admitere a dovezilor, nu o nouă garanție de aplicare a RSS-ului în timpul rulării.

FU-07 necesită o retenție a calității de cel puțin 98% și o latență p95 de nu mai mult de 1.2x față de baza, plus fie o îmbunătățire absolută a mediei de recall echilibrată de 0.05 la apeluri de subtitrări medii echivalente, fie cu cel puțin 10% mai puține apeluri de subtitrări medii post-deduplicare. FU-09 necesită cel puțin 0.85 calitate, 95% retenție, o reducere a latenței p95 de 20% și o reducere a token-urilor de 10%. Pierderea de fapte critice, conformitatea cu injecția sau utilizarea lipsă împiedică promovarea. O execuție nu poate promova nimic: `--previous-report` confirmă două execuții distincte, neîncadrate, eligibile consecutiv ale aceleași politici/revizii de model/candidat/corpus. Un experiment de eșantionare nu poate confirma un experiment de foaie de contact.

Colectorii ar trebui să evalueze răspunsurile în memorie și să salveze `responseDigest` plus metrici și legături de observație, niciodată textul răspunsului. Consumatorul citește de asemenea observațiile brute moștenite, dar niciodată nu copiază acel text în rapoartele sale. Exact unul dintre `responseDigest` sau `rawResponseText` este acceptat pentru fiecare observație. Lista de permisiuni versiunate rămâne goală cu un `hold` implicit. O intrare eligibilă necesită referința de dovezi, politica, revizia modelului, SHA-ul exact al candidatului, digestul manifestului și două ID-uri de rulare distincte; contexte conflictuale sunt respinse. Aceste metadate sunt un contract de audit, nu o dovadă că un fișier referit conține măsurători autentice. Revizuiți chitanțele reale înainte de a adăuga orice intrare. Endpoint-ul de statistici de management și tabloul de bord Video expun o pregătire conservatoare. Un alias de model configurat singur nu stabilește revizia sa sau SHA-ul candidatului în execuție, așa că tabloul de bord curent raportează `HOLD` în loc să reutilizeze eligibilitatea dintr-un alt context de execuție. Selecția experimentală explicită rămâne separată de promovare; niciun implicit nu este schimbat automat.

Apelanții pot atașa un array opțional `transcript.cues` la o parte de video suportată atunci când deja dețin text aliniat. Fiecare cue trebuie să conțină `text`, un interval finit `start`/`end` în interiorul duratei investigate, și o `source` pe lista albă (`client`, `embedded`, sau `audio-bridge`); `confidence` are implicit `1` și trebuie să rămână între `0` și `1`. Cue-urile duplicate exacte sunt comprimate. OmniRoute nu începe niciodată transcrierea din aceste metadate: cue-urile validate sunt copiate în rezultatul descris cu sursa, încrederea și intervalul, și sunt prezentate ca observații neîncrezătoare alături de subtitrările cadrelor. Textul invalid, în afara intervalului sau fără proveniență este respins în loc să fie amestecat în fluxul de subtitrări. Ambele canale de transcriere din corpul cererii normalizează proveniența furnizată la `client`, inclusiv etichetele auto-atribuite `embedded` sau `audio-bridge`. Numai un adaptor deținut de server poate atribui acele etichete de încredere prin argumentul `trustedSource` care este doar în cod; un câmp JSON al cererii nu poate ajunge la acel argument. Textul transcrierii rămâne conținut derivat din media neîncrezătoare, indiferent de proveniența sa, și nu trebuie niciodată să determine autorizarea.

Un apelant avansat poate furniza o pistă `audioTranscript` pentru același video; aceasta este tratată ca text furnizat de client, nu ca dovadă a transcrierii de server. Seam-ul de fuziune rulează observațiile vizuale și audio sub un singur termen limită și semnal de abort, le ordonează pe o cronologie comună, comprimă duplicatele exacte și raportează un rezultat parțial atunci când doar o parte reușește. Un `audioTranscript` invalid se degradează la acel rezultat parțial — descrierea vizuală este păstrată iar ramura audio înregistrează un cod de eroare sanitizat — în loc să eșueze întregul video. Disponibilitatea pe ramură, steagul parțial și codurile de eroare sanitizate sunt păstrate în rezultatul descris, în metadatele de protecție (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), în metadatele cache-ului de rezultate și în contoarele de fuziune a podului. Calea implicită a Video Bridge nu invocă vorbirea în text sau nu descarcă o a doua copie a media; fără acea pistă explicită, rămâne doar video.

**Păstrarea transcrierii (#12150 P1).** Aceasta se aplică automat ori de câte ori Video Bridge (care este opțional) redă un cue de transcriere — nu există un steag de păstrare separat. Când o cerere redă orice cue de transcriere (un `transcript` declarat de apelant sau un `audioTranscript` fuzionat), protecția marchează acesta ca `videoBridgeObserved` și produce o umbră redactată a descrierii video — o redare identică în care corpul textului liber al fiecărui cue este înlocuit cu `[redacted-video-transcript]`, construit prin substituirea câmpului cue structurat înainte ca șirul să fie asamblat (niciodată prin analizarea textului aplatizat, astfel încât niciun conținut al cue-ului — adversarial sau obișnuit, inclusiv corpuri care conțin `]` cum ar fi `[inaudible]`/`[music]` — nu poate supraviețui). Corpul cererii înregistrate persistente înlocuiește fiecare parte de text derivată din video cu acea umbră redactată, potrivită prin egalitate de conținut; ancorarea `fullText` este citită din încărcătura de protecție pre-apel finalizată, astfel încât potrivirea să reușească în continuare după protecțiile de lanț ulterioare (mascarea PII și a acreditivelor, priorități 10/95) rescrie textul descrierii la fața locului și după sistem-prompt/transfer/injectare de memorie care reshapează array-ul mesajului. Corpul trimis în sus către model rămâne neschimbat. O cerere observată nu populează de asemenea nicio Memorie durabilă (atât extragerea derivată din cerere cât și din răspuns sunt sărite), astfel încât răspunsul propriu al modelului nu poate reflecta textul transcrierii în Memorie.

**Câmpuri video brute (#12430).** Când podul este activat și suportul video nativ este necunoscut sau absent, câmpurile definite `transcript`/`audioTranscript` activează de asemenea `videoBridgeObserved`, chiar și după eșecul descrierii sau o limită `maxVideos`. `null` și șirurile goale contează; câmpurile absente și metadatele non-video nu. Copiile păstrate redactează aceste câmpuri sau omit cererea, iar cache-urile/Memoria sunt ocolite. Încărcătura furnizorului rămâne neschimbată.

Copiile suplimentare păstrate folosesc același semnal de cerere observată. Instantaneul cererii clientului pre-protecție, cererea în memorie în așteptare și jurnalul cererilor respinse timpurii înlocuiesc structural câmpurile de transcriere în părțile video; sugestiile de șiruri sintetizate de etapele pipeline-ului și transferul de context sunt redactate la scurgerea corpului cererii persistente. Marcajul `video_content_removed` păstrat face ca continuarea `previous_response_id` să eșueze închis în loc să reconstruiască textul care a fost intenționat eliminat. Dacă o cerere observată își pierde umbra de redactare pe parte înainte de a fi înregistrată, sau chiar una dintre mai multe umbre video nu reușește să se potrivească după mutațiile cererii ulterioare, corpul cererii păstrate este omis complet în loc să păstreze o transcriere parțial redactată.

Pentru o cerere observată, un răspuns al modelului ar putea cita orice porțiune a transcrierii fără o limită de indiciu structurată. Jurnalul de apeluri păstrat `responseBody` este, prin urmare, înlocuit de un marker de omisiune; artefactul detaliat al pipeline-ului (care poate include corpuri upstream/client și bucăți de flux) nu este reținut. Cache-urile semantice, de idempotentă și de redare a raționamentului ocolesc citirile și scrierile pentru acea cerere. Cererea furnizorului și răspunsul vizibil clientului rămân neschimbate. Byte-urile de keepalive timpurii sunt drenate din bufferul temporar atunci când artefactul detaliat este omis. Avertizarea de flux de evenimente malformed a lui Kiro raportează doar numărul de byte-uri ale payload-ului, niciodată conținutul său sau eroarea brută a parser-ului JSON.  
Aceasta nu afirmă că fiecare diagnostic nelegat de furnizor/plugin a fost auditat; curățarea mai largă a sink-ului păstrat este urmărită în #11658.

Ciclul de viață intern `/api/modality-bridge/video/drilldown` este un substrat de cache separat, autentificat prin loopback/token. Fiecare operațiune necesită, de asemenea, un ID principal opac canonic. Înainte ca un apelant de producție să fie activat, acesta trebuie să deriveze acel ID din chiriașul autentificat și nu trebuie niciodată să transmită o valoare selectată de client. Cheile de cache leagă acel principal de ID-urile de sesiune canonice și de referință video, stochează doar cheile derivate din SHA-256 și limitează atât citirile, cât și ștergerea la același principal. Cache-ul stochează cel mult 16 cadre JPEG derivate pe intrare, le expiră după zece minute și suportă citiri limitate `start`/`end` sau ștergerea explicită a sesiunii.

Fiecare principal este limitat la 16 intrări și 64 MiB de date JPEG canonice. Aceste limite sunt independente de plafonul global de 64 de intrări/256 MiB: presiunea asupra cotei principale evacuează doar intrările cele mai puțin utilizate ale acelui principal înainte ca evacuarea globală LRU să fie considerată. Intrările expirate sunt curățate atât din contabilizarea principalului, cât și din cea globală la activitatea cache-ului, în timp ce anularea și eșecul validării nu comit o înlocuire parțială.

Cache-ul respinge Base64 non-canonice, umplerea excesivă, media non-JPEG, JPEG-uri malformed sau trunchiate și JPEG-uri care produc un avertisment în timpul decodării complete a imaginii `sharp` limitate. Re-encodifică fiecare imagine acceptată ca un JPEG canonic, derivă lățimea și înălțimea din byte-urile decodificate în loc să se bazeze pe câmpurile apelantului și elimină orice byte-uri poliglote de la final în loc să le păstreze. Numai buffer-ul comprimat canonic limitat este taxat pentru ambele cote. Limita wire JSON include suprasarcina Base64 pentru plafonul de 32 MiB al input-ului decodat. Fiecare derivare stocată înregistrează formatul/resoluția JPEG validată, politica de eșantionare, versiunea derivării, timpul de creare, hash-ul de conținut calculat de server și hash-ul referinței părinte plus hash-ul conținutului părinte al apelantului de încredere. Anularea este verificată între fazele de decodare/hash asincron înainte de comiterea atomică a cache-ului.

Producătorul de producție reutilizează cadrele broker deja derivate doar după o analiză vizuală de succes, fără a descărca/extrage un al doilea videoclip. Necesită operator `modalityBridgeVideoDrilldownEnabled=true`, strict per-part `drilldown: true` și un ID de înregistrare a cheii API autentificate. Valorile de principal/sesiune declarate de client nu stabilesc niciodată proprietatea. Fără toate cele trei condiții, nu hash-ează, redimensionează sau păstrează cadre suplimentare. Eșecul de retenție păstrează răspunsul vizual utilizabil. Cererile consimțite ocolesc cache-ul rezultatului întregului videoclip, astfel încât rezultatele cache-uite nu replays handles.

Răspunsurile JSON și SSE de succes expun cel mult patru handles opace în antetul limitat `x-omniroute-video-drilldown`. Originea browser-ului autorizată poate citi acel antet fără a extinde politica de origine CORS. Noile handles folosesc `v1.<32-byte random base64url token>`, iar registrul păstrează doar hash-urile lor SHA-256. Parser-ul cititor/antet acceptă, de asemenea, token-uri legacy de 64 hex. Consumatorul public autentificat este `GET /api/v1/video-bridge/drilldown?handle=...`, controlat independent de `modalityBridgeVideoDrilldownRemoteEnabled=true`. Revocarea explicită a persistentei false anulează accesul chiar și atunci când fallback-ul legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` este activat. Retenția de producție are fallback-ul legacy analog `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Ambele fallback-uri sunt dezactivate implicit.

Consumatorul derivă proprietatea din cheia autentificată, aplică politica cheii și returnează același 404 pentru handles necunoscute, expirate și ale unei alte chei. Acceptă `variant=preview|standard|detail` (dimensiunea maximă JPEG 320/640/1280, niciodată scalată), `limit=1..8` (sau aliasul legacy `frames`, niciodată ambele), `page` bazat pe zero și optional `start`/`end` focus seconds. Cheile de interogare duplicate și feronii inversate sunt respinse. Fiecare variantă returnată are un hash al conținutului său efectiv și al metadatelor de rezoluție efectivă, legate de sursa păstrată. Variantele sunt derivate la citire, mai degrabă decât stocate ca copii suplimentare păstrate. Răspunsul JSON, inclusiv Base64/envelope, este limitat la 32 MiB; o pagină supradimensionată returnează 413 și clientul trebuie să solicite mai puține cadre. Citirile verifică anularea în jurul fiecărui redimensionare și re-verifică validitatea handle-ului înainte de a returna. `DELETE` de către proprietar este idempotent; ștergerea sau expirarea TTL eliberează sursa păstrată și contabilizarea utilizării.

Stocarea partajată este locală procesului: handles expiră la repornire și nu sunt transferabile între procesele independente OmniRoute. Statistici de management expun politica de retenție/remote eficientă și intrările/byte-urile păstrate agregate doar, niciodată media, referințele, ID-urile principale sau handles. Panoul de setări Video arată acele valori și poate păstra ambele comutatoare de consimțământ. Această documentație de implementare nu este dovadă de desfășurare sau promovare live; acceptarea modelului real este urmărită separat.

Frames sunt etichetate secvențial cu modelul Video configurat. O suprascriere Video goală moștenește setarea Vision; dacă ambele sunt goale, routerul auto Vision selectează modelul eficient capabil de viziune. Etichetele de succes înlocuiesc partea originală cu un prefix stabil `[Video description:` care marchează de asemenea textul ca o observație derivată din media neîncredere și spune modelelor downstream să nu urmeze instrucțiunile găsite în media. Cheile cache-ului pentru etichetele de cadre includ byte-urile JPEG, promptul, timestamp-ul și modelul eficient; doar etichetele de succes sunt stocate în cache. Intrările din cache păstrează modelul efectiv al producătorului de succes, inclusiv un model de rezervă; podul raportează `mixed` atunci când cadre diferite au fost produse de modele diferite. O lovitură de cache reutilizează acea identitate a producătorului în loc să o reeticheteze ca planul de rutare solicitat. Cache-ul rezultatului întregului video este chemat pe fiecare input care schimbă output-ul — prompt, model eficient, politica de eșantionare, numărul de cadre, modul de analiză semantică, amprenta SHA-256 a sugestiei de focalizare normalizate, fereastra de focalizare, `transcript`, `audioTranscript` și flag-ul contact-sheet — astfel că schimbarea oricărei dintre aceste dimensiuni este o rată de cache, niciodată o reutilizare învechită. Politica de deduplicare vizuală versiunea, pragul și numărul limitat de cadre candidate sunt de asemenea explicite în cheia și metadatele cache-ului rezultat; o schimbare a politicii prin urmare nu poate reutiliza o descriere învechită a întregului video. Metadatele cache-ului rezultat v4 păstrează modul și amprenta, niciodată sarcina brută a utilizatorului. Metadatele de protecție raportează atât modurile de analiză solicitate cât și cele eficiente; un mod `focused` solicitat fără text utilizabil de la utilizator este raportat ca fiind efectiv `full`.

Protecția extrage fiecare parte de video suportată, dar nu descrie mai mult de `modalityBridgeVideoMaxVideos`. Pentru un obiectiv dovedit că are `supportsVideo === false`, videoclipurile eșuate și cele care depășesc limita devin marcaje explicite de text sigur astfel încât niciun video brut să nu supraviețuiască. Când capacitatea este necunoscută, acele părți rămân neatins. Obiectivele cu `supportsVideo === true` ocolesc podul. Semnalul de abort al cererii clientului se propagă prin descărcare, coada brokerului, subprocessuri și apeluri de etichetare; abortează între videoclipuri și nu eșuează niciodată deschis la media brută.

Setările de rulare sunt susținute de DB și validate de Zod:

| Cheie                               | Implicit    | Interval / comportament                                                                                         |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opțional la rulare, opt-in                                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` păstrează etichete generice; `focused` folosește contextul limitat, neîncredere al utilizatorului recent |
| `modalityBridgeVideoModel`          | `""`        | Moștenește modelul Vision Bridge                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, sau proporțional `segment_aware`; eșecul detectorului revine la `uniform`             |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                  |

Valorile de timeout Video persistente legate de moștenire de peste 120 de secunde sunt limitate la termenul brokerului; scrierile de setări noi deasupra acelei limite sunt respinse. `GET /api/modality-bridge/video/runtime` necesită localitate de loopback de încredere înainte de autentificare sau sondare a rulării, apoi necesită autentificare de management. Returnează doar versiuni FFmpeg/ffprobe disponibile, igienizate și un motiv fix atunci când rularea nu este disponibilă. Endpoint-ul intern de extragere nu este o API publică de încărcare: saturația cozii returnează `503` plus `Retry-After`, o deconectare a apelantului returnează `499`, iar termenul fix al brokerului returnează `504`. Răspunsurile convertite adaugă `video->text;model=<visionModel>;parts=<videos>` la header-ul central `x-omniroute-modality-bridge` fără a elimina segmentele Vision sau Audio.

### PII Masker (`piiMasker.ts`)

Rulează pe **ambele** etape.

- **`preCall`** clonează payload-ul, parcurge `system`, `messages`, `input` și `prompt` (inclusiv elemente de tip string simplu), și aplică `processPII()` (din `@/shared/utils/inputSanitizer`) pe câmpurile de tip string `content`/`text`. Când `PII_REDACTION_ENABLED=true`, PII detectat este redactat în payload-ul de ieșire. Aceasta este independent de `INPUT_SANITIZER_MODE` (care controlează doar politica de injecție a promptului). Când redactarea este oprită, apelul înregistrează numărul de detectări fără a rescrie conținutul.
- **`postCall`** clonează profund răspunsul, rulează `sanitizePIIResponse()` plus masca de formă a API-ului Răspunsurilor (`maskResponsesOutput` — acoperă `output_text` și `output[].content[].text`). Dacă apare vreo redactare, răspunsul modificat înlocuiește originalul.

Protecția nu blochează niciodată; doar anotează (`meta.detections`, `meta.redacted`) sau rescrie.

### Prompt Injection (`promptInjection.ts`)

Detectează structuri adverse în conținutul furnizat de utilizator și impune politica configurată. Comportamentul este determinat de variabilele de mediu și opțiunile constructorului:

| Setare          | Variabilă de mediu                                                                                      | Implicit | Efect                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activat         | `INPUT_SANITIZER_ENABLED`                                                                               | `true`   | Când este `false`, protecția scurtcircuitează.                                                                                                                                                                               |
| Mod             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                         | `warn`   | Politica de injecție: `block`, `warn` sau `log`. (`redact` este acceptat pentru compatibilitate anterioară, dar **nu** elimină textul de injecție; solicitarea de rescriere PII este controlată de `PII_REDACTION_ENABLED`.) |
| Prag de blocare | Opțiunea `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Severitatea minimă necesară pentru a bloca. Mediu este doar pentru observare în mod implicit.                                                                                                                                |

**Precedența modului** (`getMode`): apelant `options.mode` →
`INJECTION_GUARD_MODE` **suprascrierea flag-ului de caracteristică DB** (Dashboard → Setări →
Flag-uri de caracteristică) → `INJECTION_GUARD_MODE` variabilă de mediu → `INPUT_SANITIZER_MODE` variabilă de mediu →
`warn`. O suprascriere a tabloului de bord câștigă, așadar, în fața variabilelor de mediu, astfel încât UI-ul Flag-urilor de caracteristică controlează protecția activă (fără repornire). Citirea din DB este sigură:
dacă apare o eroare, protecția revine la comportamentul bazat pe variabile de mediu, iar când nu este setată nicio suprascriere, comportamentul este identic cu rezolvarea bazată doar pe variabile de mediu.

Surse de detectare:

1. `sanitizeRequest()` din `@/shared/utils/inputSanitizer` (detector partajat
   utilizat și în alte părți ale pipeline-ului).
2. `DEFAULT_GUARD_PATTERNS` încorporat (în prezent `system_override_inline` și
   `markdown_system_block`, ambele cu severitate `high`).
3. Opționale `customPatterns` transmise prin opțiunile constructorului (șiruri, regex,
   sau înregistrări `{ name, pattern, severity }`).

Când `mode === "block"` **și** cel puțin o detectare îndeplinește pragul de severitate,
`preCall` returnează `{ block: true, message: "Cererea a fost respinsă: conținut suspect detectat" }`. În modurile `warn`/`log`, protecția înregistrează, dar
permite apelul. Ajutorul partajat `evaluatePromptInjection()` este, de asemenea, exportat
pentru apelanții care trebuie să evalueze prompturile fără a trece prin registru.

**Scanare limitată (v3.8.20):** detectorul inspectează doar **primele 16 KB** de
text de prompt combinat — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) în
`src/shared/utils/inputSanitizer.ts`. Atât `detectInjection()`, cât și
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` înainte de a rula
ciclul de modele. Directivele de injecție se află aproape de partea de sus a unui input, astfel încât acest lucru
limitează CPU/GC regex pe payload-uri de câteva sute de KB fără a slăbi detectarea (cf.
#3932, #4041).

### Masca de acreditive (`credentialMasker.ts`)

Funcționează în **ambele** etape, ultima în lanțul implicit (prioritate `95`). Elimină
modelele bine cunoscute de chei API / token-uri secrete din payload-ul de ieșire (conținutul
mesajului, argumentele apelului de instrument, rezultatele instrumentului) **și** răspunsul furnizorului, astfel încât o
acreditiv lipită într-un prompt (sau returnată de un rezultat al instrumentului) să nu fie divulgată
furnizorului superior sau înapoi clientului.

- **Opt-in doar**, aceeași convenție ca și rescrierea PII (Regula strictă #20-adjacent):
  dezactivat, cu excepția cazului în care `settings.credentialRedactionEnabled === true` **sau**
  `CREDENTIAL_REDACTION_ENABLED=true`. Cu aceasta dezactivată, protecția este inactivă —
  nu blochează niciodată și nu rescrie niciodată.
- `redactCredentials()` parcurge întregul arbore de payload/răspuns (`walkValue()`,
  sigur împotriva poluării prototipului, sigur împotriva ciclurilor prin `WeakSet`) și înlocuiește potrivirile cu
  un placeholder `[REDACTED:<type>]`, clonând doar ramurile care s-au schimbat efectiv.
- `CREDENTIAL_PATTERNS` acoperă cheile furnizorilor LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token-uri VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), chei de plată (Stripe, Square), chei de cloud
  (cheia de acces AWS, Twilio, SendGrid, Mailgun), chei private / JWT-uri,
  șiruri de conexiune care conțin acreditive (`mongodb://user:pass@...`, etc.), și
  un model generic de antet `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Cheile în formă de antet (`authorization`, `x-api-key`, `api-key`,
  `apikey`) sunt eliminate structural (doar valoarea, prefixul schemei precum
  `Bearer `/`Basic ` păstrat) mai degrabă decât prin regex-ul textului generic.
- Protecția nu blochează niciodată; doar rescrie (`modifiedPayload` /
  `modifiedResponse`) și anotează (`meta.credentialsRedacted`, `meta.count`).

Protecția regresivă: `tests/unit/credential-masker-guardrail.test.ts`.

## Contract de bază (`base.ts`)

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
  block?: boolean; // valoarea true întrerupe lanțul
  message?: string; // afișat în cazul blocării
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returnat de preCall pentru a rescrie cererea
  modifiedResponse?: TValue; // returnat de postCall pentru a rescrie răspunsul
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

Un mecanism de protecție semnalează „nicio modificare” returnând fie `void`, `{}`, fie
`{ block: false }`. Returnarea unui `modifiedPayload`/`modifiedResponse` înlocuiește
valoarea transmisă prin lanț către mecanismele de protecție ulterioare.
`signal?: AbortSignal` transmite ciclul de viață al apelantului către mecanismele de protecție. Anularea unei cereri reprezintă excepția intenționată de tip „fail-open”: punțile media își opresc activitatea și efectuează curățarea fără a restaura conținutul media brut către o destinație despre care se știe că nu îl acceptă.

## Registru (`registry.ts`)

Instanța singleton `guardrailRegistry` expune:

- `register(guardrail)` — adaugă un mecanism de protecție (sau îl înlocuiește după numele normalizat) și
  reordonează elementele în ordine crescătoare după `priority`.
- `clear()` / `list()` — funcții auxiliare administrative.
- `runPreCallHooks(payload, context)` — parcurge mecanismele de protecție active, transmite succesiv
  sarcina utilă prin `modifiedPayload` și se oprește la primul `block: true`.
- `runPostCallHooks(response, context)` — același flux pentru răspuns.
- `resetGuardrailsForTests({ registerDefaults })` — golește starea și, opțional,
  reînregistrează valorile implicite pentru o izolare curată a testelor.

Ambele funcții de execuție returnează `{ blocked, payload|response, results, guardrail?, message? }`,
unde `results` este un tablou de înregistrări `GuardrailExecutionResult` care includ
câmpurile `blocked`, `skipped`, `modified`, `error` și `meta` pentru fiecare mecanism de protecție,
utile pentru trasare.

### Dezactivarea mecanismelor de protecție pentru fiecare cerere

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agregă o listă
fără duplicate cu numele mecanismelor de protecție care trebuie omise pentru cererea
curentă. Sursele (toate opționale și combinate) sunt:

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` din corpul cererii (la nivel superior)
- `metadata.disabledGuardrails` din corpul cererii
- Antetul `x-omniroute-disabled-guardrails` (sau varianta veche
  `x-disabled-guardrails`)

Valorile pot fi tablouri de șiruri sau un șir separat prin virgule; numele sunt
normalizate la litere mici în format kebab-case (`pii_masker` → `pii-masker`). Rezultatul
este transmis prin `context.disabledGuardrails` către registru, care omite
mecanismele de protecție corespunzătoare (`skipped: true` în `results`).

## Ordinea de execuție

Pentru fiecare cerere care trece prin `src/sse/handlers/chat.ts` și
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` construiește lista de omitere pe baza cheii API, a corpului
   și a antetelor.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` execută mecanismele de protecție în ordinea
   crescătoare a priorității:
   - Mecanismele de protecție dezactivate sunt înregistrate ca `skipped`.
   - Metoda `preCall` a fiecărui mecanism de protecție poate rescrie conținutul transmis prin `modifiedPayload`.
   - Primul `block: true` întrerupe lanțul, iar handlerul returnează
     un răspuns de respingere din partea mecanismului de protecție.
3. Conținutul transmis (eventual rescris) trece în rutarea combinată și în trimiterea
   către serviciul upstream.
4. După asamblarea răspunsului, `guardrailRegistry.runPostCallHooks(...)`
   execută același lanț asupra răspunsului. Un `block: true` în acest punct elimină răspunsul
   upstream.

Mecanismele de protecție care generează excepții sunt înregistrate cu `error: <message>` și consemnate prin
`logger.warn`, însă lanțul continuă — prin proiectare, comportamentul este fail-open.

## Configurare

Variabile de mediu citite de mecanismele de protecție încorporate:

| Variabilă                             | Utilizată de              | Efect                                                                                                                                                      |
| ------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Setați la `false` pentru a dezactiva complet detectarea.                                                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Politica pentru injecții: `warn`, `block` sau `log`. Valoarea veche `redact` nu rescrie textul injecției.                                                  |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modul mecanismului de protecție împotriva injecțiilor; este și un indicator de funcționalitate din DB care **suprascrie** variabilele de mediu (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Severitatea minimă respinsă de `MODE=block`: `high` (implicit), `medium` sau `low`.                                                                        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias vechi pentru `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Când este `true`, datele PII din cerere sunt redactate (independent de modul pentru injecții).                                                             |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Controlează comportamentul de mascare aplicat răspunsului.                                                                                                 |

Mecanismele de protecție Modality Bridge citesc configurația din timpul execuției din depozitul de setări
susținut de DB (`getSettings()`), nu din variabilele de mediu. Cheile principale pentru Vision sunt
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` și
`modalityBridgeCacheMaxEntries`. Cheile vechi
`visionBridge*` sunt acceptate numai ca mecanism documentat de rezervă pentru citire pe durata unui singur ciclu;
scrierile din tabloul de bord utilizează cheile principale. Valorile implicite și resolverul de rezervă
se află în `src/shared/constants/modalityBridgeDefaults.ts`, iar constantele vechi
sunt păstrate în `src/shared/constants/visionBridgeDefaults.ts`.

Pentru audio se utilizează `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` și `modalityBridgeAudioMaxClips`, împreună cu setările comune
`modalityBridgeCache*`. Pentru audio nu există un mecanism de rezervă bazat pe chei vechi, deoarece aceste
chei au fost introduse odată cu schema Modality Bridge.

Pentru video se utilizează `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` și
`modalityBridgeVideoTimeout`, împreună cu setările comune `modalityBridgeCache*`.
Funcționalitatea este dezactivată implicit deoarece FFmpeg/ffprobe sunt dependențe operaționale
opționale, iar generarea descrierilor pentru cadre adaugă latență și costuri asociate modelului.

## Mecanisme de protecție personalizate

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

Pași:

1. Creați `src/lib/guardrails/myGuardrail.ts` extinzând `BaseGuardrail`.
2. Implementați `preCall` și/sau `postCall`.
3. Fie înregistrați la momentul importului (adăugând din `registerDefaultGuardrails`), fie
   apelați `guardrailRegistry.register(...)` în timpul execuției — registrul înlocuiește
   orice mecanism de protecție anterior cu același nume normalizat.
4. Adăugați teste în `tests/unit/` (exemple existente:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testare

Utilizați `resetGuardrailsForTests()` între teste pentru a porni de la o stare cunoscută.
Transmiteți `{ registerDefaults: false }` pentru a porni cu un registru gol și
înregistrați doar mecanismele de protecție testate. Vision Bridge acceptă injectarea
dependențelor (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge expune
punctele de extensie echivalente pentru setări, capabilități, selectarea modelului STT,
verificarea acreditărilor și transcriere. Astfel, testele pot verifica ambele fluxuri fără
acces la baza de date sau la rețea.

## Consultați și

- `src/lib/guardrails/` — implementare
- `src/shared/utils/inputSanitizer.ts` — detector partajat care asigură
  detectarea injectării în prompturi și mascarea PII
- `src/shared/constants/visionBridgeDefaults.ts` — valorile implicite Vision Bridge și
  lista modelelor care impun utilizarea punții
- `src/shared/constants/modalityBridgeDefaults.ts` — valorile implicite partajate de execuție pentru Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — strat ortogonal (întrerupător de circuit, perioade de așteptare)
- `docs/reference/ENVIRONMENT.md` — referința completă a variabilelor de mediu

## Acoperirea rutelor de mecanismul anti-injectare și red-team (Faza 8 · Blocul D)

Mecanismul anti-injectare (`createInjectionGuard` / `withInjectionGuard`) acoperă toate rutele
care acceptă prompturi de la utilizatori. Acesta respectă `INJECTION_GUARD_MODE` (valoarea implicită `warn` = doar jurnalizare;
`block` = returnează HTTP 400 `SECURITY_001`).

| Tip             | Rute                                                                                                                                                 | Mod implicit |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Text (existent) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| Generativ       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| Date            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

Extragerea textului (`extractMessageContents`) acoperă `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nocturn, `nightly-llm-security.yml`):** promptfoo validează că fiecare rută blochează
corpusul OWASP-LLM când `INJECTION_GUARD_MODE=block`; garak execută sonde (este omis fără secret).
`moderations` este inclus pentru consecvență — operatorii care utilizează modul de blocare îl pot excepta prin
`resolveDisabledGuardrails`.

Fluxul de lucru nocturn (`.github/workflows/nightly-llm-security.yml`, cron + declanșare
manuală) are două joburi:

- **`promptfoo-guard` (blocant)** — execută `promptfoo eval -c promptfooconfig.yaml`
  cu `INJECTION_GUARD_MODE=block`. Fiecare caz adversarial (de exemplu, „ignorați toate
  instrucțiunile anterioare…”, jailbreak-uri în stil DAN) verifică dacă răspunsul conține
  `error.code === "SECURITY_001"`, adică mecanismul de protecție a respins efectiv cererea.
- **`garak` (consultativ)** — execută garak `--probes promptinject,dan,leakreplay`
  asupra unei instanțe OmniRoute locale (`http://localhost:20128/v1`). Este condiționat de
  un secret al furnizorului (`PROMPTFOO_PROVIDER_KEY`); este omis fără eroare și are sufixul
  `|| true`, astfel încât raportează fără a provoca eșecul CI.

Acoperirea funcției ajutătoare a mecanismului de protecție (`createInjectionGuard` / `withInjectionGuard`)
include fiecare rută `/v1` care conține prompturi; textul promptului este preluat din
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` de către
`extractMessageContents()` din `src/shared/utils/inputSanitizer.ts`.
