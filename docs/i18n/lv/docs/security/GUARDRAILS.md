# Guardrails (Latviešu)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Patiesības avots:** `src/lib/guardrails/`
> **Pēdējoreiz atjaunināts:** 2026-08-29 — v3.8.51 (Video Bridge transkripta izcelsmi deklarē izsaucējs,
> serveris to vēl nepārbauda — precizēts saskaņā ar #11661)

Aizsargmehānismi nodrošina drošības, politiku un satura transformāciju ievērošanu uz robežas
starp OmniRoute un augšupējiem pakalpojumu sniedzējiem. Katrs aizsargmehānisms var pārbaudīt (un
pēc izvēles noraidīt, transformēt vai anotēt) pieprasījumu lietderīgo slodzi (`preCall`) un
augšupējās atbildes (`postCall`).

Sistēma ir **kļūmju gadījumā atvērta**: ja aizsargmehānisma izpildes laikā rodas izņēmums, reģistrs
reģistrē kļūdu un turpina ar nākamo aizsargmehānismu, nevis izraisa pieprasījuma
kļūmi. Bloķēšana ir apzināts lēmums (`block: true`), nevis nejaušība.

## Iebūvēti Aizsargi

Reģistrs automātiski ielādē sešus aizsargus prioritātes secībā importēšanas laikā
(skatīt `registry.ts` → `registerDefaultGuardrails()`):

| Prioritāte | Nosaukums           | Posms(-i)      | Fails                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Zemākas prioritātes numuri darbojas **vispirms**.

### Vision Bridge (`visionBridge.ts`) — Modalitātes Tilts PR-1

Intercepcē attēlu nesošas pieprasījumus, kas vērsti uz **ne-vīzijas modeļiem**, un vai nu
pāradresē visu pieprasījumu uz vīzijas spējīgu modeli, vai aizvieto attēlu
daļas ar tekstuālām aprakstiem, ko ražo konfigurējams vīzijas modelis pirms
augšupvērstā izsaukuma. Tas ļauj tikai teksta nodrošinātājiem caurspīdīgi apstrādāt
multimodālus slodzes.

Plūsma:

1. Izlaist, ja mērķa modelis jau atbalsta vīziju (ja vien tas neparādās
   piespiedu tiltu sarakstā `isVisionBridgeForcedModel`).
2. Izvilkt attēlu daļas, izmantojot `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kas deleģē uz **apvienoto mediju
   detektoru** `detectMediaParts()` failā `open-sse/utils/mediaParts.ts` —
   vienīgais patiesības avots, kas kopīgs ar kombinēto saderības filtru.
   Izvilkšana ir atļauta tikai augstākā līmeņa daļām, kuras
   `replaceImageParts` var atkal pievienot (izvilkšanas↔aizvietošanas līgums): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, un Responses API `input_image`. Iekšējie trāpījumi un
   tikai indikatora formas ir kombinētā filtra materiāls un nekad netiek izvilkti.
   Izlaist, ja nekas nav atrasts.
3. Atrisināt izpildes konfigurāciju, izmantojot `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): jauni `modalityBridge*`
   iestatījumu atslēgas uzvar; vecās `visionBridge*` atslēgas paliek **viena cikla
   atpakaļgaitā** (atgūšanas logs). Izlaist pirms jebkādas mediju pārvietošanas, ja
   tilts ir atslēgts.
4. Režīma selektors (`modalityBridgeVisionMode`, skatīt zemāk esošo tabulu) nosaka
   pāradresāciju pret aprakstu. Pāradresācija atgriež `modifiedPayload` ar tikai `model`
   nomainītu, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Apraksta ceļš: ierobežot attēlus līdz `maxImages`, sastādīt uzdevumam atbilstošu
   pieprasījumu, konsultēties ar apraksta kešu, izsaukt vīzijas modeli **paralēli**
   (`Promise.allSettled`), un injicēt `[Image N]: <description>` teksta daļas to vietā. Neveiksmīgs apraksts dod `null`, un oriģinālā attēla daļa tiek
   **saglabāta** (#4012) — izņemot kombinētā apraksta ceļā, kad katrs
   apraksts neizdevās, kur apstiprināts ne-vīzijas augšupvērsts saņem
   `(unavailable — no vision-capable provider connected)` stubu (#8430).
6. Atgriezt `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režīma selektors (`modalityBridgeVisionMode`)

| Režīms     | Noklusējums | Uzvedība                                                                                                                                                                                                                                                                                      |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Mantojuma heuristika, nemainīta (#6640/#7204): ne-kombinējoši/`auto/` modeļi pāradresē uz labāko vīzijas modeli, ja vien oriģinālais modelis jau nav ieguvis izmantojamus akreditīvus (tad apraksta); kombinētie mērķi vienmēr apraksta.                                                      |
| `describe` |             | Vienmēr apraksta — pāradresācijas bloks tiek pilnībā izlaists; lietotāja izvēlētais modelis vienmēr atbild.                                                                                                                                                                                   |
| `reroute`  |             | Spiest pāradresāciju: akreditēto modeļu aizsardzība tiek apietta. Pāradresācijas-**mērķa** akreditācijas aizsardzība joprojām attiecas — ja nav izmantojama vīzijas mērķa, pieprasījums tiek novirzīts uz aprakstu, tādējādi neapstrādāti attēli nekad nenonāk tekstu tikai backendā (#8430). |

Piespiestie režīmi īsā ceļā darbojas **pirms** automātiskās heuristikas; `auto` uzvedība
ir baitu identiska iepriekšējai PR-1 aizsardzībai.

#### Uzdevumam atbilstošs apraksta pieprasījums (`modalityBridgeVisionTaskAware`)

Noklusējums **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pievieno
**pēdējā lietotāja ziņojuma** tekstu (saīsinātu līdz 500 rakstzīmēm) bāzes
apraksta pieprasījumam, virzot aprakstu uz to, ko lietotājs patiešām jautāja
(codex-vision-proxy modelis) un lūdzot vīzijas modeli transkribēt redzamo
tekstus. Ar izslēgtu karogu — vai bez lietotāja teksta — tiek izmantots nemainīts
bāzes pieprasījums.

Aprakstīt pašciklu OpenAI saderīgā pieprasījumā (`callVisionModelSingle()`
failā `visionBridgeHelpers.ts`) vienmēr pieprasa `image_url.detail: "high"` —
bez nosacījumiem, katram izsaucējam/piegādātājam, nebalstoties uz jebkuru klienta signālu.
Zemas detalizācijas paraugu ņemšana samazina OCR precizitāti tieši tekstu transkripcijas
uzdevumam, ko šis pieprasījums prasa, tāpēc apraksta izsaukums vienmēr pieprasa augstu
detalizāciju neatkarīgi no tā, kādu detalizācijas līmeni izmantoja sākotnējais ienākošais pieprasījums. Tas
ietekmē tikai iekšējo apraksta pieprasījuma ķermeni; tas nemaina to, kā
OmniRoute pārsūta izsaucēja paša `image_url.detail` primārajā pieprasījumā —
šis noklusējums tiek piemērots atsevišķi un tikai atklātajiem OpenCode klientiem,
funkcijā `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic vadu formāta zars apraksta pašciklā nav `detail` lauka
un netiek ietekmēts ne no viena noklusējuma.

#### Apraksta izvades ierobežojums (`modalityBridgeVisionMaxChars`)

| Atslēga                        | Noklusējums | Diapazons         |
| ------------------------------ | ----------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` vai 100–50000 |

`0` (noklusējums) nozīmē **nav ierobežojuma** — apraksts, ko atgriež
`callVisionModel()`, tiek nodots tālāk nemainīts, saglabājot esošo
uzvedību. Jebkura vērtība diapazonā no 100 līdz 50000 saīsina aprakstu ar
`…` sufiksu pirms tas tiek atgriezts kā `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` failā `src/lib/guardrails/visionBridge.ts`).
Palieliniet šo vērtību detalizētiem OCR uzdevumiem, kur apakšējais modelis nepieciešams
pilnīgai transkripcijai; samaziniet to, lai ierobežotu tokenu izmantošanu uz runīgajiem redzes modeļiem.
Informācijas panelis atrodas Redzes cilnes Papildu panelī
(`modality-bridge-max-chars` failā `ModalityBridgeVisionTab.tsx`) un ierobežo jebkuru
vērtību no 1 līdz 99 līdz 100 grīdai, vienlaikus atstājot skaidru `0`
neskartu — `0` ir derīga Zod vērtība pati par sevi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ne tikai
"neiestatīta" noklusējuma vērtība.

#### Apraksta kešatmiņa (`modalityBridge/bridgeCache.ts`)

LRU + TTL kešatmiņa atmiņā apraksta izvadei, kopīga visam procesam.
Atslēga = `sha256(imageRef + composedPrompt + configuredBridgeModel)` ar
garuma prefiksa ietvaru (nav lauka robežu sadursmju). Modeļa komponents ir
**konfigurētais** tilta modelis, nevis modelis, kas faktiski atbildēja —
`callVisionModel` var iekšēji atgriezties, un atslēgošana pēc mēģinājuma fragmentētu
kešatmiņu. Neizdevušies apraksti nekad netiek kešoti. Iestatījumi:

| Atslēga                         | Noklusējums | Diapazons |
| ------------------------------- | ----------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`      | —         |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000   |

#### Attālinātās attēlu normalizācija (pašcikla apraksts/base64 iegūšana)

Kad tilts iegūst **attālinātu** attēlu pats — Anthropic apraksta
pašizsaukums un claude-vadu formāta base64 konversija
(`ensureBase64ImagesForClaudeWire`), abi caur
`fetchRemoteImageAsDataUri()` failā `visionBridgeHelpers.ts` — rezultātā iegūtais datu
URI tiek nodots caur `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) pirms tas tiek iekļauts redzes modeļa
pieprasījumā. Pārsniegti attēli tiek samazināti līdz **2048px garajai malai** (atbilst
samazināšanas ierobežojumam, ko OpenAI/Anthropic jau piemēro servera pusē), kas samazina
augšupielādes baitus/latentumu, nemainot to, ko redzes modelis redz. Samazināšana
izmanto `sharp`, kas tiek ielādēts, izmantojot dinamisku importu: platformā, kur tās
dabas binārais fails neizdodas ielādēt, `normalizeDataUri()` **nekad neizmet** — tas atgriežas
pie sākotnējo baitus, tāpēc apraksta/base64 konversijas
ceļš vienmēr turpina darboties. Ne-attēlu baitus (iegūšana, kas neatgrieza
dekodējamu attēlu) arī tiek nodoti caur nesaskartiem. Šī normalizācija ir
ierobežota uz attēliem, kurus tilts iegūst savai pašizsaukšanai — tā nekad
netiek piemērota izsaucēja neapstrādātajam pārsūtīšanas slodzei, saskaņā ar
opt-in tikai mutācijas principu (Ciets noteikums #20).

#### Iestatījumu shēma + migrācija

Jaunās `modalityBridge*` atslēgas tiek Zod validētas `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trio, un
`modalityBridgeAudio*` grupa, ko izmanto Audio tilts. Migrācija
`141_modality_bridge_settings.sql` kopē esošās mantojuma
`visionBridge*` vērtības uz atbilstošajām jaunajām atslēgām (idempotenta, nekad nepārraksta
operatora iestatītu `modalityBridge*` vērtību); mantojuma atslēgas paliek pieņemtas kā
lasīšanas rezerves vienai izlaišanas ciklam.

#### Caurspīdīguma galvene + statistika

Apraksta pārvērstās atbildes satur
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izveidota ar `buildModalityBridgeHeader()` failā `modalityBridge/bridgeStats.ts`,
apzīmogota ar `withModalityBridgeHeader()` failā `src/sse/handlers/chatHelpers.ts`).
Pārsūtītie pieprasījumi saņem **nav** galvenes — slodze palika nesaskarta un modeļa
apmaiņa jau ir redzama atbildes ķermeņa `model` laukā.

`GET /api/modality-bridge/stats` (pārvaldības autentifikācija, tāds pats līmenis kā
`GET /api/settings`) atgriež atmiņā esošos per-modality skaitītājus
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` attiecībā uz `vision`, `audio` un
`video`. `averageLatencyMs` izmanto `latencySamples`, nevis visus mēģinājumus, kā savu
nominālu; operācija bez laika neizveido nulles milisekundes
paraugu. `bridged` paliek atpakaļ saderīgs alias veiksmīgām
konversijām; neizdevušies mēģinājumi to nepalielina.
Skaitītāji tiek atiestatīti procesa restartēšanas laikā pēc dizaina
(tehniskā informācija, ne grāmatvedība).

#### Informācijas paneļa konfigurācija

Veltītā informācijas paneļa lapa ir  
`/dashboard/settings/modality-bridge`. Tās URL adresējamie `Vision`, `Audio`  
un `Video` cilnes saglabā vaicājuma parametrus, pārejot uz citu `tab` vērtību.  
Vision cilne atklāj iespēju aktivizēt, režīmu, modeļa izvēli (ieskaitot automātisko  
noklusējumu), uzdevumam atbilstošu aicinājumu, uzlabotas laika/attēla/apraksta garuma/kešatmiņas  
ierobežojumus, izpildes  
skaitītājus un aizsargātu paraugu pieprasījumu. Audio cilne ir arī aktīva: tā atklāj  
iespēju aktivizēt, STT tikai modeļa izvēlni ar Auto, laika/noklusējuma klipa ierobežojumus, audio  
skaitītājus un `input_audio` paraugu testu. Video cilne ir funkcionāla: tā ziņo  
par FFmpeg/ffprobe izpildes stāvokli — viens no četriem skaidriem UI stāvokļiem (`unknown`, kamēr  
proba ir gaisā vai nevarēja pabeigt, `restricted` uz ne-loopback  
informācijas paneļa hosta, kur probe tiek izlaista klienta pusē, `unavailable`, kad  
tā ir pārbaudīta un apstiprināta kā trūkstoša, vai `available` ar FFmpeg/ffprobe versijām) —  
saglabā iespēju/modeli/rāmjus/video/laika ierobežojumus, filtrē modeļa izvēlni uz redzes spējīgiem  
modeļiem un atklāj video skaitītājus.

Iepriekšējā Vision Bridge karte AI iestatījumos ir saderības saite uz  
jauno lapu; tā vairs nepieder otrai formas kopijai. Mediju sniedzēji arī  
saista Image-to-Text un Speech-to-Text darba plūsmas ar attiecīgajām Modality  
Bridge cilnēm, neizņemot esošo Speech-to-Text spēļu laukumu.

**Pašloopošanas piekļuves apietšana:** kad apraksta izsaukums tiek novirzīts caur OmniRoute  
paša `/v1` pašloopu (nestandarta sniedzēja modelis), apakšpieprasījums nosūta  
`x-omniroute-admission-bypass: internal` un tiek autentificēts ar atrisināto  
pašloopas akreditāciju — vietējais `sk_omniroute` sargs vietējā režīmā vai  
operatora konfigurētais `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env atslēga (#1350),  
tādējādi `REQUIRE_API_KEY=true` izvietojumi joprojām var veikt apraksta izsaukumu.  
Apietšana tiek ievērota tikai attiecīgajām akreditācijām, tāpēc ārējie klienti nevar izmantot  
virsrakstu, lai izlaistu piekļuvi.

Mantojuma noklusējumi atrodas `src/shared/constants/visionBridgeDefaults.ts`;  
jaunās režīma/uzdevuma apzināšanās/kešatmiņas noklusējumi un iestatījumu risinātājs atrodas  
`src/shared/constants/modalityBridgeDefaults.ts`. Aizsargjosla atklāj  
`deps` konstruktora opciju, lai testi varētu injicēt viltotus `getSettings` un  
`callVisionModel` realizējumus.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Pārtrauc audio nesošos tērzēšanas pieprasījumus pirms tie sasniedz mērķi, kas nav  
zināms, ka pieņem audio ievadi. Tas nekad nenovirza tērzēšanas pieprasījumu: audio daļas  
tiek transkribētas caur esošo OpenAI saderīgo multipart galapunktu, un izvēlētais tērzēšanas  
modelis turpina ar teksta transkriptiem.

Plūsma:

1. Atrisināt `supportsAudio` caur `getResolvedModelCapabilities()`.  
   Skaidra sniedzēja reģistra metadati uzvar, tad statiskā modeļa metadati, tad sinhronizētie  
   `modalities_input`. Deklarēta ievades saraksts bez `audio` ir `false`; nav  
   spēkā esošu pierādījumu paliek `null`. Gan `false`, gan `null` aktivizē  
   konservatīvo tiltu, kamēr `true` to apiet.
2. Atrisināt `modalityBridgeAudio*` iestatījumus un izvilkt splicējamas augstākā līmeņa  
   audio daļas no katra ziņojuma caur kopīgo `detectMediaParts()`  
   detektoru. Atbalstītās vadu formas ir OpenAI `input_audio`, `audio_url`, un  
   `source.media_type: "audio/*"`. Iekšējais audio tiek noteikts maršrutēšanai, bet netiek  
   noņemts ar splicēšanas ceļu. Darbs tiek ierobežots ar `modalityBridgeAudioMaxClips`;  
   vēlākās daļas paliek neskartas.
3. Ievērot konfigurētu `provider/model`, vai ļaut `selectAudioBridgeModel()`  
   pārvietoties pa `AUDIO_TRANSCRIPTION_PROVIDERS` stabilā katalogā un izvēlēties pirmo  
   modeli ar izmantojamu aktīvu sniedzēja akreditāciju.
4. `callAudioTranscription()` pārvērš base64/data-URI audio par multipart  
   `file`, vai lejupielādē attālu `audio_url` caur publiski tikai izejošo  
   aizsardzību ar DNS piesaisti un 25 MB ierobežojumu. Pēc tam tas POSTo failu un izvēlēto  
   modeli uz vietējo `/v1/audio/transcriptions` pašloopu, autentificējot ar  
   `resolveSelfLoopBearer()`. Esošais transkripcijas maršruts veic normālu  
   akreditācijas meklēšanu, atdzišanas/ātruma ierobežojumu apstrādi un sniedzēja nosūtīšanu.
5. Veiksmīgi izsaukumi aizvieto savas daļas ar `[Audio N]: <transcript>`. Izsaukumi  
   tiek veikti ar `Promise.allSettled`: individuāla neveiksme saglabā to sākotnējo  
   audio daļu (#4012 līgums). Ja katrs izsaukums neizdodas un mērķis ir pierādīts  
   `supportsAudio === false`, daļas kļūst  
   `[Audio N]: (nav pieejams — nav STT sniedzēja savienots)` (#8430 līgums).  
   Nezināma mērķa gadījumā (`null`), visi neveiksmju rezultāti paliek neskarti.  
   Pierādīts tekstam tikai mērķis bez izmantojamas STT akreditācijas saņem to pašu  
   skaidro stubu, neizsūtot tīkla izsaukumu.

Veiksmīgas transkripcijas izmanto procesa līmeņa Modality Bridge LRU/TTL kešatmiņu.  
Atslēga apvieno audio atsauci, stabilo `audio-transcription` operācijas  
etiķeti un izvēlēto STT modeli; neveiksmes nekad netiek kešotas. Audio mēģinājumi atjaunina  
kopīgos `bridged`, `cacheHits`, `failures` un `lastUsedAt` skaitītājus.  
Pārveidotās atbildes nes  
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; neskartie  
pieprasījumi nesaņem Audio Bridge segmentu.

Izpildes iestatījumi ir DB atbalstīti un Zod validēti:

| Atslēga                       | Noklusējums | Diapazons       |
| ----------------------------- | ----------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —               |
| `modalityBridgeAudioModel`    | `""`        | Auto vai STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10            |

Kopējā kešatmiņa paliek kontrolēta ar `modalityBridgeCacheEnabled`,  
`modalityBridgeCacheTtlMinutes` un `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts augstākā līmeņa video daļas Chat Completions `messages` un Responses API `input` pirms tiek izsaukta mērķa vieta, kurai nav zināmas vietējās video atbalsta. Atbalstītās formas ir `input_video`, `video_url`, `video_source`, HTTPS URL un `data:video/*;base64,...` datu URI. Parastas failu nosaukumi tekstā netiek uzskatīti par video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) pārvalda pieprasījumu pāreju, spēju/politikas pārbaudi, katra pieprasījuma apvienošanu un atbildes datu kopu. Darbs ar katru video — iegūšana, visu rezultātu kešatmiņa, kadru secības apraksts (kas apvieno jebkuru izsaucēja deklarētu audio transkriptu) un katra mēģinājuma metrikas/atcelšana/tīrīšana — ir slēpts aiz `processVideoPart` `videoBridgePipeline.ts`, kas tiek izsaukts reizi par katru video daļu `preCall` ciklā. Šis modulis arī nosaka skaidras ostas robežas `VideoMediaBrokerPort` (iegūstot baitus un izņemot paraugotus kadrus), `VideoAudioTranscriptionPort` (apvienojot izsaucēja deklarētu audio transkriptu ar paraugotajām subtitrēm) un `VideoDrilldownPort` (mantojuma neapstrādātā veikala forma). Ražošanas STT un kadru saglabāšana ir veidota ap aprakstošo portu caur `createVideoSttAdapter` un `createVideoDrilldownAdapter`; pēdējais izmanto kopīgo necaurspīdīgo roktura dzīves ciklu.

Publiskais `/v1` pieprasījuma ceļš nekad neimportē vai neizsauc apakšprocesu. Attālinātie video tiek lejupielādēti ar 50 MiB ierobežojumu; iekļautie base64 video ir ar konservatīvu 36 MiB dekodētu katra video ierobežojumu, lai modelis/ziņojumi/iekļaujošais aploksne varētu palikt publiskā JSON pieprasījuma uzņemšanas ierobežojuma 50 MiB ietvaros. Iekļautā garuma un dekodētā izmēra novērtējumi tiek pārbaudīti pirms piešķiršanas. HTTPS ir obligāts sākotnējā attālinātajā URL un katrā pāradresē, izmantojot esošo publisko tikai izejošo aizsardzību ar DNS piesaisti. Baiti tad šķērso precīzo iekšējo `POST /api/modality-bridge/video/extract` brokeru robežu. Šis maršruts ir gan `LOCAL_ONLY`, gan `SPAWN_CAPABLE`, pieņem tikai katra procesa autentificētu, uzticamu atgriezenisko pieprasījumu un nekad nepieņem URL, failu sistēmas ceļu, izpildāmo failu vai argumentu sarakstu. API ķermeņa izmēra cauruļvads un apstrādātāja pakāpeniska ķermeņa lasītājs neatkarīgi izpilda 50 MiB brokera ievades ierobežojumu. Tās ierobežotā rinda darbojas vienā ekstrakcijā vienlaicīgi, ļauj četrus gaidošus darbus un ierobežo gaidošo ievadi līdz 100 MiB.

Brokerī `ffprobe` lasa privātu vietējo failu; fiksētā formāta atļauju saraksts izslēdz atskaņošanas saraksta un manifestu formātus. Atļautajiem MOV ģimenes konteineriem ārējie MOV datu atsauces pēc noklusējuma paliek atslēgtas, un fiksētā komanda neizvēlas tās. Gan `ffprobe`, gan `ffmpeg` izmanto tikai `file` protokola atļauju sarakstu, vienu pavedienu, fiksētus argumentu masīvus, bez komandrindas un izpildāmos failus, kas atrasti `PATH`. Pievienotās attēlu vāka straumes nav atskaņojamas kandidātes. Visām atskaņojamām straumēm jāatbilst ierobežojumiem, un skaidri definēta noklusējuma straume ir priekšroka pirms noteiktā zemākā indeksa rezerves. Video ir ierobežoti līdz 600 sekundēm, 8,192 pikseļiem katrā dimensijā un 33,554,432 avota pikseļiem. FFmpeg paraugi 1–16 vidus JPEG kadrus, samazina garo malu līdz maksimumam 1,024 pikseļiem, nepalielinot mazākus ievades datus, un nekad nesaņem URL. Paraugu ņemšana ir pēc noklusējuma `uniform`. Papildu `scene_aware` un eksperimentālās `segment_aware` politikas veic vienu papildu fiksētu FFmpeg pāreju pār jau validēto vietējo straumi, izvēlas ierobežotas `showinfo` ainas laika zīmes un noteikti atgriežas pie tām pašām vienotajām viduspunktiem detektora kļūmes, laika izsīkuma, nepareiza izejas vai tukša kandidātu kopuma gadījumā. Segmentu apzināšanās režīms piešķir viduspunktu paraugus proporcionāli validētajām ainas intervālam; segmentu apzināšanās pierādījumi un rezerves uzvedība ir detalizēti aprakstīti zemāk. Ciets 16 kadru ierobežojums tiek piemērots pēc izvēles katrā politikā. Kad ainas apzināšanās pieprasījumam ir tikai viena kadra budžets, tas izmanto aktīvā pilna video vai fokusa loga vienoto viduspunktu un ziņo `policyEffective: uniform`: vienam izvēlētam ainas kadrim nevar saglabāt abus laika galus. Izsaucējs var izvēles veidā nodrošināt beigtu fokusa logu (`start`/`end` sekundes); robežas tiek ierobežotas līdz mediju ilgumam, apgrieztas vai nebeigtas logi tiek noraidīti, un visi paraugu ņemšanas politikas tiek veiktas tikai iekšējā normalizētajā intervālā. Rezultātā iegūtais logs tiek iekļauts paraugu ņemšanas metadatos un neuzticamā apraksta prefiksā, lai turpmākie modeļi varētu atšķirt fokusētu izgriezumu no pilnās laika līnijas.

Semantiskā subtitru fokusa ir atsevišķs, skaidrs iestatījums. Noklusējuma `full` analīzes režīms saglabā esošo kadru aicinājumu un nekad nenodod pieprasījuma tekstu subtitru modelim. `focused` režīmā tilts lasa tikai jaunāko ne tukšo lietotāja rakstīto `text`/`input_text` no tā paša Chat vai Responses konteineru, normalizē to uz NFC, sabruka kontroles simbolus un tukšumus un ierobežo to līdz 500 Unicode kodu punktiem. Tukšs rezultāts atgriežas pie precīzā `full` aicinājuma. Izmantojams norādījums tiek sērijveidā sagatavots kā JSON veltītā neuzticamā lietotāja kontekstā un var tikai prioritizēt novērojamās detaļas; tas nevar pārspēt atsevišķo brīdinājumu pret sekošanu instrukcijām, kas ir redzamas vai dzirdamas medijos. Teksta fokuss nekad nenosaka `start`/`end` vai nemaina laika paraugu ņēmēju.

#### FU-07 strukturālo segmentu pierādījumi

`segment_aware` izmanto vienu ierobežotu priekšanalīzes pāreju pār jau validēto vietējo video straumi. Fiksētā filtru ķēde vispirms samazina līdz maksimumam 320 pikseļiem platumā, atklāj ainas izmaiņas un sasalšanas intervālus, pēc tam paraugu ņem 1 kadru sekundē neskaidrībai, vidējai luminiscencei un telpiskai/laika informācijai. Pāreja ir ierobežota līdz 600 strukturāliem paraugiem, vienam FFmpeg/filter pavedienam, tam pašam `file`-only protokola un konteineru atļauju sarakstam, 1 MiB procesa izejas ierobežojumam un maksimums 30 sekundēm brokeru kopējā atcelšanas/termiņa laikā. Tas nekad nepieņem komandu, filtru, ceļu vai URL no pieprasījuma.

Strukturālās vērtības ir deterministiskas paraugu ņemšanas pierādījumi, nevis semantiska video izpratne. Tās neizdara secinājumus par subjektiem, darbībām, parakstiem, runu vai lietotāja nodomu. Ainas un sasalšanas robežas veido segmentus; sasalšanas pārklājums, izplūdums, ekspozīcija, telpiskā detaļa un laika izmaiņas tikai ietekmē to, kā esošais 1–16 kadru budžets tiek sadalīts. Pilnībā sasaldēts segments ir ierobežots ar vienu kadru, kamēr nesasaldētie segmenti sacenšas par atlikušo budžetu. Kad robežas pārsniedz kadrus, tiek saglabāts vienmērīgs laika grafika pārklājums, tāpēc ātri agrīnie griezumi nevar noslēpt garu sekojošu segmentu. Ainas robežas 1 sekunžu analīzes izšķirtspējā ap sasalšanas robežu tiek apvienotas.

Trūkstoši filtri, nepareizi/formēti/ tukši pierādījumi, detektora kļūda vai ierobežots iepriekšējās analīzes laiks neizdodas atvērt uz precīzo vienmērīgo viduspunktu politiku. Izsaucēja aborts vai brokeru termiņš neizdodas atvērt: tas pārtrauc lidojošo apakšprocesu, novērš vēlākas kadru iegūšanu, un privātā pagaidu koka struktūra tiek noņemta `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ģenerē deterministiskas reālas FFmpeg iekārtas pēc deduplication parakstu izsaukumu ietaupījumiem, blīvas kustības budžeta sadalījumam, izplūduma/ekspozīcijas/SI-TI pierādījumiem, ātriem griezumiem ar garu asti un pakāpenisku izbalēšanu viltus pozitīviem rezultātiem. Tas reģistrē iepriekšējās analīzes sienas laiku un, kur `/usr/bin/time` ir pieejams, bērnu CPU un maksimālo RSS. Tā kvalitātes pārbaudes ir strukturāli orākuli tikai. Reālā parakstu modeļa kvalitāte paliek `HOLD`, jo šis rīks nav autorizēts galapunkts vai sasaldēts tiesnesis. Naudas ietaupījumi arī paliek `HOLD`, ja `--caption-cost-per-call-usd` nesniedz skaidru pozitīvu paraksta izsaukuma novērtējumu; skripts nekad neizgudro nevienu rezultātu.

Katrs kadrs ir ierobežots līdz 4 MiB, visi neapstrādātie kadri kopā līdz 23 MiB, un sērijveida brokeru atbilde līdz 32 MiB. Privāta pagaidu direktorija tiek noņemta `finally`. OmniRoute nesavieno FFmpeg un nepieņem pielāgotu izpildāmo ceļu. Pirms parakstīšanas tilts veic konservatīvu vizuālo deduplication pāreju: katrs JPEG tiek samazināts līdz 16×16 pelēktoņu buferim un tiek salīdzināts tikai ar pēdējo saglabāto kadru. Pieprasītā parakstu budžeta virs viena kadra, iegūšana nodrošina ierobežotu kandidātu baseinu līdz divreiz šim budžetam un nekad vairāk par 16 kadriem. Pieprasītais ierobežojums tiek piemērots tikai pēc deduplication, ar pirmajiem un pēdējiem izvēlētajiem kandidātiem saglabātiem gala retināšanas laikā, kad budžets ir vismaz divi. Versiju
`grayscale-16x16-mean-cells-v2` politika izmanto lielāko no vidējā luma delta un thumbnail šūnu attiecības, kuru normalizētais delta ir vismaz 0.05. Duplikātu slieksnis ir konstante 0.04, izvēlēta prognozējamībai, nevis izpausta kā izpildlaika iestatījums. Šis sekundārais
augsta kontrasta signāls saglabā mazu kustību un redzamu teksta izmaiņas, kuras vidējā salīdzināšana var noslēpt. Salīdzinātāja vai dekodera kļūdas neizdodas atvērt un saglabā pārklājumu. Izejas metadati atdala iegūtos kandidātus, veiksmīgi izmantotos kadrus un vizuālos duplikātus, kas ir noraidīti.

Ekspluatīvi marķēta video daļa var pieprasīt laika zīmētu kontaktu lapu. Tilts veido ne vairāk kā 4 kolonnu, 16 kadru JPEG režģi. Katrs 512 pikseļu šūna ieraksta savu avota laika zīmogu augsta kontrasta apakšējā joslā, kamēr tie paši laika zīmogi paliek tekstuālajos metadatos turpmākai asociācijai un revīzijai. Pilns JPEG paliek ierobežots līdz 32 MiB. Ja `sharp` nevar dekodēt vai izveidot režģi, tilts atgriežas pie individuālajiem JPEG kadriem; klienta aborts joprojām izplatās caur lapas operāciju.

Veicināšanas pierādījumi ir apzināti atdalīti no sintētiskās kompozīcijas mikrobenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` definē shēmas versiju A/B rīku reāliem OpenAI saderīgiem redzes modeļiem. Tas mēra pakalpojumu sniedzēja ziņotos tokenus, no gala līdz galam sienas latentumu (ieskaitot lapas kompozīciju), modeļa izsaukumu skaitu un manifestā definēto faktu saglabāšanu. Neapstrādātie modeļa atbildes netiek rakstītas ziņojumā; tikai SHA-256 kopsavilkumi un saskaņotie faktu ID tiek saglabāti. Rīks neveic tīkla vai maksāto modeļa izsaukumu, ja vien `--execute-real` netiek nodots un `--model`, `OMNIROUTE_BASE_URL` un `OMNIROUTE_API_KEY` nav konfigurēti. Bez šī skaidrā reālā izpildījuma tā mašīnā lasāmā spriedums paliek `HOLD`; sintētiskie slodzes/izsaukumu skaitīšanas mērījumi vieni paši nav veicināšanas pierādījumi.

Atsevišķais `scripts/perf/video-bridge-promotion-eval.ts` patērē FU-07 vai FU-09 novērojumus. Veicināšanas uzņemšana prasa visus astoņus sintētiskos scenāriju veidus plus sanitizētu reālu klipu, vismaz trīs mērītas atkārtojuma katram lomai un gadījumam, visus desmit deklarētos metriku, sasaldētus medijus/promptus/gaidāmās faktu/iestatījumu kopsavilkumus, unikālus novērošanas ID un pārbaudītu sēklu A/B secību. Izpildes kvīts saista korpusa kopsavilkumu, precīzu kandidāta SHA un modeļa versiju. Trūkstoši vai nederīgi mērījumi paliek `HOLD`, ieskaitot CPU virs 30 s, maksimālo RSS virs 512 MiB vai iepriekšējo analīzi virs 30 s. Šie ir pierādījumu uzņemšanas ierobežojumi, nevis jauna izpildlaika RSS izpildes garantija.

FU-07 prasa vismaz 98% kvalitātes saglabāšanu un p95 latentumu ne vairāk kā 1.2x bāzes līmenim, plus vai nu 0.05 absolūtu gadījumu līdzsvarotu vidējo atsaukšanas uzlabošanu pie ekvivalentiem vidējiem parakstu izsaukumiem, vai vismaz 10% mazāk vidējo pēc deduplication parakstu izsaukumu. FU-09 prasa vismaz 0.85 kvalitāti, 95% saglabāšanu, 20% p95 latentuma samazinājumu un 10% token samazinājumu. Kritisko faktu zudums, injekcijas atbilstība vai trūkstoša lietošana novērš veicināšanu. Viena izpilde nevar veicināt neko: `--previous-report` apstiprina divas atšķirīgas, nesakritīgas, secīgi piemērotas izpildes ar to pašu politiku/modeli/ kandidātu/korpusu. Paraugu eksperiments nevar apstiprināt kontaktu lapas eksperimentu.

Kolektoriem vajadzētu novērtēt atbildes atmiņā un saglabāt `responseDigest` kopā ar metrikām un novērošanas saitēm, nekad nevis atbildes tekstu. Patērētājs arī lasa mantojuma neapstrādātās novērošanas, bet nekad nekopē šo tekstu savos ziņojumos. Precīzi viens no `responseDigest` vai `rawResponseText` tiek pieņemts katrai novērošanai. Versiju atļauju saraksts paliek tukšs ar nemainīgu `hold` noklusējumu. Atbilstošai ierakstam ir nepieciešama tā pierādījumu atsauce, politika, modeļa revīzija, precīzs kandidāta SHA, manifestu kopsavilkums un divi atšķirīgi izpildes ID; pretrunīgi konteksti tiek noraidīti. Šie metadati ir audits līgums, nevis pierādījums, ka atsauces fails satur īstas mērījumus. Pārskatiet faktiskās kvītis pirms jebkura ieraksta pievienošanas. Vadības statistikas galapunkts un Video informācijas panelis atklāj konservatīvu gatavību. Konfigurēts modeļa alias pats par sevi nenosaka tā revīziju vai darbojošā kandidāta SHA, tāpēc pašreizējais informācijas panelis ziņo `HOLD`, nevis atkārtoti izmanto atbilstību no cita izpildes konteksta. Izteikta eksperimentālā izvēle paliek atsevišķa no veicināšanas; nekas noklusējuma automātiski netiek mainīts.

Izsaucēji var pievienot opciju `transcript.cues` masīvu atbalstītai video daļai, kad viņiem jau ir saskaņots teksts. Katram cue jānes `text`, beidzams `start`/`end` intervāls iekšā pārbaudītajā ilgumā, un baltajā sarakstā iekļauts `source` (`client`, `embedded`, vai `audio-bridge`); `confidence` noklusējums ir `1` un tam jāpaliek starp `0` un `1`. Precīzi dublikāti tiek apvienoti. OmniRoute nekad nesāk transkripciju no šiem metadatiem: validētie cues tiek kopēti aprakstītajā rezultātā ar avotu, pārliecību un intervālu, un tiek attēloti kā neuzticami novērojumi blakus kadru parakstiem. Nepareizs, ārpus diapazona vai bez izcelsmes teksts tiek noraidīts, nevis sajaukts ar parakstu straumi. Abi pieprasījuma ķermeņa transkriptu kanāli normalizē piegādāto izcelsmi uz `client`, tostarp pašapstiprinātus `embedded` vai `audio-bridge` etiķetes. Tikai servera īpašumā esošs adapteris var piešķirt šos uzticamos etiķetes, izmantojot tikai kodu `trustedSource` argumentu; pieprasījuma JSON lauks nevar sasniegt šo argumentu. Transkriptu teksts paliek neuzticams mediju iegūts saturs, neatkarīgi no tā izcelsmes, un tam nekad nevajadzētu noteikt autorizāciju.

Uzlabots izsaucējs var nodrošināt `audioTranscript` celiņu tam pašam video; tas tiek uzskatīts par klienta nodrošinātu tekstu, nevis pierādījumu par servera transkripciju. Fūzijas šuve vada vizuālos un audio novērojumus zem viena termiņa un aborta signāla, kārto tos kopējā laika skalā, apvieno precīzus dublikātus un ziņo par daļēju rezultātu, kad tikai viena puse izdodas. Nepareizs `audioTranscript` degradējas līdz šim daļējam rezultātam — vizuālais apraksts tiek saglabāts un audio zars reģistrē sanitizētu kļūdas kodu — nevis neizdodas visu video. Katras daļas pieejamība, daļējā karogs un sanitizētie kļūdas kodi tiek saglabāti aprakstītajā rezultātā, aizsargjoslas metadatos (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), rezultātu kešatmiņas metadatos un tilta fūzijas skaitītājos. Noklusējuma Video Bridge ceļš neizsauc runu uz tekstu vai nenolasa otro mediju kopiju; bez šī izteiktā celiņa tas paliek tikai video.

**Transkriptu saglabāšana (#12150 P1).** Tas automātiski attiecas, kad Video Bridge (kas pats ir opt-in) attēlo transkriptu cue — nav atsevišķa saglabāšanas karoga. Kad pieprasījums attēlo jebkuru transkriptu cue (izsaucēja deklarēts `transcript` vai apvienots `audioTranscript`), aizsargjosla to atzīmē kā `videoBridgeObserved` un rada rediģētu video apraksta ēnu — identisku attēlojumu, kur katra cue brīvā teksta ķermenis tiek aizvietots ar `[redacted-video-transcript]`, kas izveidots, aizstājot strukturēto cue lauku pirms virknes salikšanas (nekad neiztīrot izlīdzināto tekstu, tāpēc nekāda cue satura — pretiniecisks vai parasts, tostarp ķermeņi, kas satur `]`, piemēram, `[inaudible]`/`[music]` — nevar izdzīvot). Saglabātā zvanu žurnāla pieprasījuma ķermenis aizstāj katru video iegūto teksta daļu ar šo rediģēto ēnu, saskaņojot pēc satura vienādības; `fullText` enkurs tiek atkārtoti nolasīts no pabeigtā priekšzvana aizsargjoslas slodzes, tāpēc saskaņošana joprojām izdodas pēc vēlākām ķēdes aizsargjoslām (PII un akreditācijas maskēšanas, prioritātes 10/95) pārveidojot apraksta tekstu vietā un pēc sistēmas aicinājuma/pārejas/atmiņas injekcijas pārveidojot ziņojumu masīvu. Ķermenis, kas nosūtīts augšup uz modeli, paliek nemainīgs. Novērots pieprasījums arī nepievieno nevienu noturīgu Atmiņu (abi pieprasījuma un atbildes iegūti izslēgti), tāpēc modeļa paša atbilde nevar atspoguļot transkriptu tekstu Atmiņā.

**Neapstrādāti video lauki (#12430).** Kad tilts ir iespējots un vietējā video atbalsts ir nezināms vai trūkst, definētie `transcript`/`audioTranscript` lauki arī aktivizē `videoBridgeObserved`, pat pēc apraksta neveiksmes vai `maxVideos` ierobežojuma. `null` un tukši virknējumi tiek skaitīti; trūkstošie lauki un ne-video metadati neskaitās. Saglabātās kopijas rediģē šos laukus vai izslēdz pieprasījumu, un kešatmiņas/Atmiņa tiek apietas. Piegādātāja slodze paliek nemainīga.

Papildu saglabātās kopijas izmanto to pašu novērotā pieprasījuma signālu. Neapstrādāta priekš aizsargjoslas klienta pieprasījuma snapshots, atmiņā gaidošais pieprasījums un agrīnais noraidītais pieprasījuma žurnāls strukturāli aizstāj transkriptu laukus video daļās; virkņu uzvedinājumi, ko sintezē cauruļu posmi un konteksta pārejas, tiek rediģēti pie saglabātā pieprasījuma ķermeņa izsūknēšanas. Saglabātais `video_content_removed` marķieris padara `previous_response_id` turpinājumu neveiksmīgu, nevis atjaunina tekstu, kas tika apzināti izmests. Ja novērots pieprasījums zaudē savu daļas rediģēšanas ēnu pirms žurnāla, vai pat viens no vairākiem video ēnām neizdodas saskaņot pēc vēlākām pieprasījuma izmaiņām, saglabātais pieprasījuma ķermenis tiek pilnībā izslēgts, nevis saglabāts daļēji rediģēts transkripts.

Lai novērotu pieprasījumu, modeļa atbilde var citēt jebkuru transkripta daļu bez strukturētas norādes robežas. Tādējādi tā saglabātā zvanu žurnāla `responseBody` tiek aizstāta ar izlaiduma marķieri; detalizētais cauruļvadu artefakts (kas var ietvert augšupvērsto/klienta ķermeņus un straumēšanas fragmentus) netiek saglabāts. Semantiskie, idempotences un racionālas atkārtošanas keši apiet lasījumus un rakstīšanu šim pieprasījumam. Pakalpojumu sniedzēja pieprasījums un klientam redzamā atbilde paliek nemainīgi. Agrīnie keepalive baiti tiek iztukšoti no pagaidu bufera, kad detalizētais artefakts tiek izlaists. Kiro nepareizā EventStream brīdinājuma ziņojums ziņo tikai par slodzes baitu skaitu, nekad ne par tās saturu vai JSON parsera neapstrādāto kļūdu.
Tas neapgalvo, ka katrs nesaistīts pakalpojumu sniedzēja/plugin diagnostikas gadījums ir pārbaudīts; plašāka saglabātā izsistā tīrīšana tiek izsekota #11658.

Iekšējais `/api/modality-bridge/video/drilldown` dzīves cikls ir atsevišķa, atgriezeniskā/token-autentificētā kešu substrāts. Katram darbībai ir nepieciešams kanoniska necaurspīdīga galvenā ID. Pirms ražošanas izsaucēja aktivizēšanas tam jāiegūst šī ID no autentificētā īrnieka un tam nekad nedrīkst nosūtīt klienta izvēlētu vērtību. Kešu atslēgas sasaista šo galveno ID ar kanoniskajām sesijas un video-referencēm, uzglabā tikai to SHA-256 atvasinātās atslēgas un ierobežo gan lasījumus, gan dzēšanu uz to pašu galveno ID. Kešs uzglabā ne vairāk kā 16 atvasinātas JPEG kadru katrā ierakstā, beidzas pēc desmit minūtēm un atbalsta ierobežotus `start`/`end` lasījumus vai skaidru sesijas dzēšanu.

Katram galvenajam ID ir ierobežojums uz 16 ierakstiem un 64 MiB kanonisko JPEG datu. Šie ierobežojumi ir neatkarīgi no globālā 64 ierakstu/256 MiB griestiem: galvenā kvota spiediens izdzēš tikai šī galvenā ID vismazāk izmantotos ierakstus pirms globālās LRU izdzēšanas apsvēršanas. Beigu termiņa ieraksti tiek iztīrīti gan no galvenā, gan globālā uzskaites uz kešu aktivitātes, kamēr atcelšana un validācijas kļūme neapstiprina daļēju aizvietošanu.

Kešs noraida nekanonisku Base64, pārmērīgu pildījumu, ne-JPEG mediju, nepareizus vai saīsinātus JPEG un JPEG, kas rada brīdinājumu ierobežota pilna attēla `sharp` dekodēšanas laikā. Tas atkārtoti kodē katru pieņemto attēlu kā kanonisku JPEG, iegūst platumu un augstumu no dekodētajiem baitiem, nevis paļaujas uz izsaucēja laukiem, un noraida jebkādus pēdējos poliglotu baitus, nevis tos saglabā. Tikai ierobežotais kanoniskais saspiestais buferis tiek iekasēts abām kvotām. JSON vadu limits ietver Base64 pārslodzi 32 MiB dekodētā ievades griestiem. Katrs
uzglabātais atvasinājums reģistrē savu validēto JPEG formātu/izšķirtspēju, paraugu politiku, atvasinājuma versiju, izveides laiku, servera aprēķināto satura hash un hashojamo vecāku atsauci, kā arī uzticama izsaucēja vecāku satura hash. Atcelšana tiek pārbaudīta starp asinkronajiem dekodēšanas/hash posmiem pirms atomiskās kešu apstiprināšanas.

Ražošanas ražotājs atkārtoti izmanto jau atvasinātus brokeru kadrus tikai pēc veiksmīgas vizuālās analīzes, bez otrā video lejupielādes/izvilkšanas. Tam ir nepieciešams operators `modalityBridgeVideoDrilldownEnabled=true`, stingrs katras daļas `drilldown: true` un autentificēta API atslēgas ieraksta ID. Klienta deklarētās galvenās/sesijas vērtības nekad nenosaka īpašumtiesības. Bez visām trim nosacījumiem tas nehashē, nemaina izmēru vai nesaglabā papildu kadrus. Saglabāšanas neizdošanās saglabā izmantojamo vizuālo atbildi. Pieņemti pieprasījumi apiet visu video rezultātu kešu, tāpēc kešotie rezultāti nekad neatkārto rokturus.

Veiksmīgas JSON un SSE atbildes atklāj ne vairāk kā četrus necaurspīdīgus rokturus ierobežotajā `x-omniroute-video-drilldown` galvenē. Autorizēti pārlūkprogrammu avoti var lasīt šo galveni, nepaplašinot CORS avota politiku. Jauni rokturi izmanto `v1.<32-byte random base64url token>`, un reģistrs saglabā tikai to SHA-256 hash. Lasītājs/galvenes parsers arī pieņem mantojuma 64-hex rokturus. Autentificētais publiskais patērētājs ir
`GET /api/v1/video-bridge/drilldown?handle=...`, neatkarīgi kontrolēts ar
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Skaidri saglabāts nepatiesi atceļ piekļuvi pat tad, ja mantojuma `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
rezerves kopija ir aktivizēta. Ražošanas saglabāšana ir līdzīga mantojuma
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` rezerves kopijai. Abas rezerves kopijas pēc noklusējuma ir izslēgtas.

Patērētājs iegūst īpašumtiesības no autentificētās atslēgas, piemēro atslēgas politiku un
atgriež to pašu 404 nezināmiem, beigu termiņa un citas atslēgas rokturiem. Tas pieņem
`variant=preview|standard|detail` (maksimālā JPEG dimensija 320/640/1280, nekad nepalielināta),
`limit=1..8` (vai mantojuma `frames` alias, nekad ne abus), nulles bāzes `page`, un opcijas
`start`/`end` fokusa sekundes. Duplicētie
vaicājumu atslēgas un apgrieztie fokusa logi tiek noraidīti. Katram atgrieztajam variantam ir hash
tā faktiskajam saturam un faktiskās izšķirtspējas metadatiem, kas saistīti ar saglabāto avotu.
Varianti tiek atvasināti lasīšanas laikā, nevis uzglabāti kā papildu saglabātas kopijas. JSON
atbilde, tostarp Base64/envelope, ir ierobežota līdz 32 MiB; pārmērīgs lappuses pieprasījums atgriež 413 un klients jāpieprasa mazāk kadrus. Lasījumi pārbauda atcelšanu ap katru
izmēra maiņu un pārbauda roktura derīgumu pirms atgriešanas. `DELETE` īpašniekam ir idempotents;
dzēšana vai TTL beigu termiņš atbrīvo saglabāto avotu un lietošanas uzskaiti.

Kopīgā krātuve ir procesa lokāla: rokturi beidzas pēc restartēšanas un nav pārnēsājami
starp neatkarīgiem OmniRoute procesiem. Pārvaldības statistika atklāj efektīvu saglabāšanu/
attālināto politiku un apvieno saglabātos ierakstus/baitus tikai, nekad ne medijus, atsauces,
galveno ID vai rokturus. Video iestatījumu panelis parāda šīs vērtības un var saglabāt
gan piekrišanas slēdžus. Šī īstenošanas dokumentācija nav tiešsaistes izvietošanas vai
veicināšanas pierādījums; reāla modeļa pieņemšana tiek izsekota atsevišķi.

Rāmji tiek parakstīti secīgi ar konfigurēto Video modeli. Tukšs Video pārraksts manto Vision iestatījumu; ja abi ir tukši, Vision automātiskais maršrutētājs izvēlas efektīvo redzes spējīgo modeli. Veiksmīgi paraksti aizvieto oriģinālo daļu ar stabilu `[Video description:` prefiksu, kas arī atzīmē tekstu kā neuzticamu mediju iegūtu novērojumu un norāda lejupvērstajiem modeļiem, lai nesekotu instrukcijām, kas atrastas medijos. Rāmja parakstu kešatmiņas atslēgas ietver JPEG baitus, uzvedni, laika zīmogu un efektīvo modeli; tikai veiksmīgi paraksti tiek kešoti. Kešatmiņas ieraksti saglabā faktisko veiksmīgo ražotāja modeli, tostarp rezerves modeli; tilts ziņo par `mixed`, kad dažādi rāmji tika ražoti ar dažādiem modeļiem. Kešatmiņas trāpījums atkārtoti izmanto šo ražotāja identitāti, nevis pārsauc to par pieprasīto maršrutēšanas plānu. Visa video rezultātu kešatmiņa ir atslēgota uz katru ievadi, kas maina izeju — uzvedni, efektīvo modeli, paraugu politiku, rāmju skaitu, semantiskās analīzes režīmu, normalizētā fokusa norādes SHA-256 pirkstu nospiedumu, fokusa logu, `transcript`, `audioTranscript` un kontaktu lapas karogu — tāpēc jebkura no šīm dimensijām maiņa ir kešatmiņas trūkums, nekad nevis novecojusi atkārtota izmantošana. Vizualizācijas dublēšanas politikas versija, slieksnis un ierobežotais kandidātu rāmju skaits ir arī skaidri norādīti rezultātu kešatmiņas atslēgā un metadatos; tādējādi politikas maiņa nevar atkārtoti izmantot novecojušu visa video aprakstu. Rezultātu kešatmiņas v4 metadati saglabā režīmu un pirkstu nospiedumu, nekad nevis neapstrādātu lietotāja uzdevumu. Aizsardzības metadati ziņo gan par pieprasītajiem, gan efektīvajiem analīzes režīmiem; pieprasītais `focused` režīms bez izmantojama lietotāja teksta tiek ziņots kā efektīvi `full`.

Aizsardzība izņem katru atbalstītu video daļu, bet apraksta ne vairāk kā `modalityBridgeVideoMaxVideos`. Mērķiem, kas pierādīti ar `supportsVideo === false`, neizdotie un pārsniegti video kļūst par skaidriem drošiem teksta marķieriem, tāpēc neviens neapstrādāts video nepastāv. Kad iespēja nav zināma, šīs daļas paliek neskartas. Mērķi ar `supportsVideo === true` apiet tiltu. Klienta pieprasījuma aborta signāls izplatās caur lejupielādi, brokeru rindu, apakšprocesiem un parakstu izsaukumiem; aborti apstājas starp video un nekad neizdodas atvērt neapstrādātiem medijiem.

Izpildes iestatījumi ir DB atbalstīti un Zod validēti:

| Atslēga                             | Noklusējums | Diapazons / uzvedība                                                                                      |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opcionalais izpildes režīms, opt-in                                                                       |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` saglabā vispārējos parakstus; `focused` izmanto ierobežotu, neuzticamu jaunāko lietotāja kontekstu |
| `modalityBridgeVideoModel`          | `""`        | Manto Vision Bridge modeli                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` vai proporcionāls `segment_aware`; detektora neveiksme atgriežas pie `uniform`   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                            |

Mantojuma saglabātie Video laika ierobežojumi virs 120 sekundēm tiek ierobežoti līdz brokeru termiņam; jauni iestatījumi, kas pārsniedz šo ierobežojumu, tiek noraidīti. `GET /api/modality-bridge/video/runtime` prasa uzticamu zīmētu lokālo atgriezenisko saiti pirms autentifikācijas vai izpildes izpētes, tad prasa pārvaldības autentifikāciju. Tas atgriež tikai `available`, sanitizētus FFmpeg/ffprobe versijas un fiksētu iemeslu, kad izpilde nav pieejama. Iekšējā ekstrakcijas galapunkts nav publiska augšupielādes API: rindas piesātinājums atgriež `503` plus `Retry-After`, izsaucēja atvienošana atgriež `499`, un fiksētais brokeru termiņš atgriež `504`. Pārveidotās atbildes pievieno `video->text;model=<visionModel>;parts=<videos>` centrālajam `x-omniroute-modality-bridge` galvene, neizņemot Vision vai Audio segmentus.

### PII Masker (`piiMasker.ts`)

Darbojas **abos** posmos.

- **`preCall`** kopē slodzi, pārvietojas pa `system`, `messages`, `input` un `prompt` (ieskaitot parastus virkņu elementus), un piemēro `processPII()` (no `@/shared/utils/inputSanitizer`) virkņu `content`/`text` laukiem. Kad `PII_REDACTION_ENABLED=true`, atklātā PII tiek izdzēsta izejošajā slodzē. Tas ir neatkarīgi no `INPUT_SANITIZER_MODE` (kas tikai kontrolē uzvednes injekcijas politiku). Kad izdzēšana ir izslēgta, izsaukums reģistrē atklāšanas skaitļus, neizmainot saturu.
- **`postCall`** dziļi kopē atbildi, izpilda `sanitizePIIResponse()` plus atbilžu API formas maskētāju (`maskResponsesOutput` — aptver `output_text` un `output[].content[].text`). Ja notiek kāda izdzēšana, modificētā atbilde aizvieto oriģinālo.

Aizsardzība nekad nebloķē; tā tikai anotē (`meta.detections`, `meta.redacted`) vai pārraksta.

### Prompt Injection (`promptInjection.ts`)

Atklāj pretinieku struktūras lietotāja sniegtajā saturā un izpilda konfigurēto politiku. Uzvedību nosaka vides mainīgie un konstruktora opcijas:

| Iestatījums          | Vides mainīgais                                                                                       | Noklusējums | Ietekme                                                                                                                                                                                            |
| -------------------- | ----------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Iespējots            | `INPUT_SANITIZER_ENABLED`                                                                             | `true`      | Kad `false`, aizsargjosla īsā ceļā pārtrauc darbību.                                                                                                                                               |
| Režīms               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`      | Ievades politika: `block`, `warn` vai `log`. (`redact` tiek pieņemts atpakaļsaderībai, bet **neizņem** ievades tekstu; pieprasījuma PII pārrakstīšana tiek kontrolēta ar `PII_REDACTION_ENABLED`.) |
| Bloķēšanas slieksnis | `blockThreshold` opcija / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | Minimālā nopietnība, kas nepieciešama bloķēšanai. Vidēja ir tikai novērošanai pēc noklusējuma.                                                                                                     |

**Režīma prioritāte** (`getMode`): izsaucēja `options.mode` →
`INJECTION_GUARD_MODE` **DB funkciju karoga pārrakstīšana** (Dashboard → Iestatījumi →
Funkciju karogi) → `INJECTION_GUARD_MODE` vides mainīgais → `INPUT_SANITIZER_MODE` vides mainīgais →
`warn`. Tādējādi dēļa pārrakstīšana uzvar vides mainīgos, tāpēc Funkciju
karogu UI kontrolē darbojošos aizsargu tiešraidē (nav nepieciešama restartēšana). DB lasīšana ir droša:
ja rodas kļūda, aizsargs atgriežas pie vides balstītas uzvedības, un, kad nav
iestatīta pārrakstīšana, uzvedība ir identiska vides tikai risinājumam.

Atklāšanas avoti:

1. `sanitizeRequest()` no `@/shared/utils/inputSanitizer` (kopīgs detektors
   komplekts, kas tiek izmantots citur caurulē).
2. Iebūvētie `DEFAULT_GUARD_PATTERNS` (pašlaik `system_override_inline` un
   `markdown_system_block`, abi `high` nopietnības).
3. Papildus `customPatterns`, kas tiek nodoti caur konstruktora opcijām (virknes, regex,
   vai `{ name, pattern, severity }` ieraksti).

Kad `mode === "block"` **un** vismaz viena atklāšana atbilst nopietnības
slieksnim, `preCall` atgriež `{ block: true, message: "Pieprasījums noraidīts:
aizdomīgs saturs atklāts" }`. `warn`/`log` režīmos aizsargjosla reģistrē, bet
atļauj izsaukumu. Kopīgais palīgs `evaluatePromptInjection()` ir arī eksportēts
izsaucējiem, kuriem nepieciešams novērtēt uzvednes, neiziet cauri reģistram.

**Skenēšanas robeža (v3.8.20):** detektors pārbauda tikai **pirmos 16 KB**
apvienotā uzvednes teksta — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti) `src/shared/utils/inputSanitizer.ts`. Gan `detectInjection()`, gan
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` pirms modeļu cikla izpildes. Ievades direktīvas atrodas tuvu ievades augšai, tāpēc tas
ierobežo regex CPU/GC uz vairāku simtu KB slodzēm, ne vājinot atklāšanu (sal.
#3932, #4041).

### Akreditācijas maskētājs (`credentialMasker.ts`)

Darbojas **abās** posmās, pēdējais noklusējuma ķēdē (prioritāte `95`). Izņem
pazīstamus API atslēgu / slepeno tokenu modeļus no izejošās slodzes (ziņojuma
saturs, rīka izsaukuma argumenti, rīka rezultāti) **un** pakalpojumu sniedzēja atbildes, tāpēc
akreditācija, kas ielīmēta uzvednē (vai atgriezta ar rīka rezultātu), netiek nopludināta
uz augšupējo pakalpojumu sniedzēju vai atpakaļ uz klientu.

- **Tikai pēc izvēles**, tāda pati konvencija kā PII izņemšanai (Cieta noteikuma #20-blakus):
  atspējots, ja `settings.credentialRedactionEnabled === true` **vai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ja tas ir izslēgts, aizsargjosla ir bezdarbīga —
  tā nekad nebloķē un nekad nepārraksta.
- `redactCredentials()` pārvietojas pa visu slodzi/atbildes koku (`walkValue()`,
  prototipa piesārņojuma drošs, cikla drošs caur `WeakSet`) un aizvieto atbilstības ar
  `[REDACTED:<type>]` vietturi, klonējot tikai tās zarus, kas patiešām
  mainījās.
- `CREDENTIAL_PATTERNS` aptver LLM pakalpojumu sniedzēju atslēgas (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenus (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksājumu atslēgas (Stripe, Square), mākoņa
  atslēgas (AWS piekļuves atslēga, Twilio, SendGrid, Mailgun), privātās atslēgas / JWT,
  akreditāciju nesošas savienojuma virknes (`mongodb://user:pass@...`, utt.), un
  vispārēju `Authorization`/`x-api-key`/`api-key`/`apikey` galvenes-vērtības
  modeli. Galvenes formas atslēgas (`authorization`, `x-api-key`, `api-key`,
  `apikey`) tiek strukturāli izņemtas (tikai vērtība, shēmas prefikss, piemēram,
  `Bearer `/`Basic ` saglabāts) nevis caur vispārējo teksta regex.
- Aizsargjosla nekad nebloķē; tā tikai pārraksta (`modifiedPayload` /
  `modifiedResponse`) un anotē (`meta.credentialsRedacted`, `meta.count`).

Regresijas aizsargs: `tests/unit/credential-masker-guardrail.test.ts`.

## Pamatkontrakts (`base.ts`)

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
  block?: boolean; // true pārtrauc ķēdes izpildi
  message?: string; // tiek parādīts bloķēšanas gadījumā
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall atgriež šo vērtību, lai pārrakstītu pieprasījumu
  modifiedResponse?: TValue; // postCall atgriež šo vērtību, lai pārrakstītu atbildi
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

Drošības mehānisms norāda, ka „nav izmaiņu”, atgriežot `void`, `{}` vai
`{ block: false }`. Atgriežot `modifiedPayload`/`modifiedResponse`, tiek aizstāta
vērtība, kas ķēdē tiek nodota tālāk nākamajiem drošības mehānismiem.
`signal?: AbortSignal` nodod izsaucēja dzīves ciklu drošības mehānismiem. Pieprasījuma pārtraukšana ir apzināts atvērtas kļūmes izņēmums: multivides tilti pārtrauc darbu un veic tīrīšanu, neatjaunojot sākotnējo multividi mērķim, par kuru ir zināms, ka tas to neatbalsta.

## Reģistrs (`registry.ts`)

Vienīgā `guardrailRegistry` instance nodrošina:

- `register(guardrail)` — pievieno drošības mehānismu (vai aizstāj to pēc normalizētā nosaukuma) un
  atkārtoti sakārto pēc `priority` augošā secībā.
- `clear()` / `list()` — administratīvas palīgfunkcijas.
- `runPreCallHooks(payload, context)` — secīgi izpilda aktīvos drošības mehānismus, nododot
  lietderīgo slodzi caur `modifiedPayload`, un apstājas pie pirmā `block: true`.
- `runPostCallHooks(response, context)` — tāda pati plūsma atbildes pusē.
- `resetGuardrailsForTests({ registerDefaults })` — notīra stāvokli un pēc izvēles
  atkārtoti reģistrē noklusējuma mehānismus tīrai testu izolācijai.

Abas izpildfunkcijas atgriež `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` ir `GuardrailExecutionResult` ierakstu masīvs, kas ietver katra
drošības mehānisma laukus `blocked`, `skipped`, `modified`, `error` un `meta`,
kas ir noderīgi trasēšanai.

### Drošības mehānismu atspējošana katram pieprasījumam

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` apkopo
drošības mehānismu nosaukumu sarakstu bez dublikātiem, kuri pašreizējam
pieprasījumam ir jāizlaiž. Avoti (visi neobligāti, visi tiek apvienoti):

- `apiKeyInfo.disabledGuardrails`
- Pieprasījuma ķermeņa `disabledGuardrails` (augšējā līmenī)
- Pieprasījuma ķermeņa `metadata.disabledGuardrails`
- Galvene `x-omniroute-disabled-guardrails` (vai mantotā
  `x-disabled-guardrails`)

Vērtības var būt virkņu masīvi vai ar komatiem atdalīta virkne; nosaukumi tiek
normalizēti uz mazo burtu kebab-case formātu (`pii_masker` → `pii-masker`). Rezultāts
caur `context.disabledGuardrails` tiek nodots reģistram, kas izlaiž
atbilstošos drošības mehānismus (`skipped: true` laukā `results`).

## Izpildes secība

Katram pieprasījumam, kas tiek apstrādāts caur `src/sse/handlers/chat.ts` un
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` izveido izlaižamo aizsargmehānismu sarakstu no API atslēgas, pieprasījuma pamatteksta
   un galvenēm.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izpilda aizsargmehānismus augošā
   prioritātes secībā:
   - Atspējotie aizsargmehānismi tiek reģistrēti kā `skipped`.
   - Katra aizsargmehānisma `preCall` var pārrakstīt lietderīgo slodzi, izmantojot `modifiedPayload`.
   - Pirmais `block: true` priekšlaicīgi pārtrauc ķēdi, un apstrādātājs atgriež
     aizsargmehānisma noraidījuma atbildi.
3. (Iespējams, pārrakstītā) lietderīgā slodze tiek nodota kombinētajai maršrutēšanai un augšupstraumes
   nosūtīšanai.
4. Pēc atbildes izveides `guardrailRegistry.runPostCallHooks(...)`
   izpilda to pašu ķēdi atbildei. `block: true` šajā posmā atmet augšupstraumes
   atbildi.

Aizsargmehānismi, kas izmet kļūdu, tiek reģistrēti ar `error: <message>` un ierakstīti žurnālā, izmantojot
`logger.warn`, taču ķēdes izpilde turpinās — pēc konstrukcijas kļūmes gadījumā pieprasījums tiek atļauts.

## Konfigurācija

Iebūvēto aizsargmehānismu nolasītie vides mainīgie:

| Mainīgais                             | Izmanto                     | Ietekme                                                                                                                    |
| ------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Iestatiet uz `false`, lai pilnībā atspējotu noteikšanu.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Injekciju politika: `warn`, `block` vai `log`. Mantotā vērtība `redact` nepārraksta injekcijas tekstu.                     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Injekciju aizsargmehānisma režīms; arī DB funkcionalitātes karodziņš, kas **ignorē un aizstāj** vides mainīgos (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Minimālais nopietnības līmenis, kuru `MODE=block` noraida: `high` (noklusējums), `medium` vai `low`.                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Mantots `INPUT_SANITIZER_BLOCK_THRESHOLD` aizstājvārds.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Ja vērtība ir `true`, pieprasījumā esošā PII tiek aizklāta (neatkarīgi no injekciju režīma).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (lejupstraume) | Kontrolē maskētāja darbību atbildes pusē.                                                                                  |

Modalitātes tilta aizsargmehānismi izpildlaika konfigurāciju nolasa no DB nodrošinātās iestatījumu
krātuves (`getSettings()`), nevis no vides mainīgajiem. Attēlu apstrādes primārās atslēgas ir
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` un
`modalityBridgeCacheMaxEntries`. Mantotās
`visionBridge*` atslēgas tiek pieņemtas tikai kā dokumentētā viena cikla lasīšanas
atkāpšanās iespēja; informācijas paneļa veiktajai rakstīšanai tiek izmantotas primārās atslēgas. Noklusējuma vērtības un atkāpšanās
risinātājs atrodas `src/shared/constants/modalityBridgeDefaults.ts`, bet mantotās
konstantes ir saglabātas failā `src/shared/constants/visionBridgeDefaults.ts`.

Audio apstrāde izmanto `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` un `modalityBridgeAudioMaxClips`, kā arī koplietotos
`modalityBridgeCache*` iestatījumus. Audio apstrādei nav mantoto atslēgu atkāpšanās iespējas, jo šīs
atslēgas tika ieviestas kopā ar Modalitātes tilta shēmu.

Video apstrāde izmanto `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` un
`modalityBridgeVideoTimeout`, kā arī koplietotos `modalityBridgeCache*` iestatījumus.
Tā pēc noklusējuma ir atspējota, jo FFmpeg/ffprobe ir neobligātas darbības
atkarības, bet kadru aprakstu ģenerēšana palielina latentumu un modeļa izmaksas.

## Pielāgotas aizsargbarjeras

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

Darbības:

1. Izveidojiet `src/lib/guardrails/myGuardrail.ts`, paplašinot `BaseGuardrail`.
2. Implementējiet `preCall` un/vai `postCall`.
3. Vai nu reģistrējiet importēšanas laikā (pievienojiet no `registerDefaultGuardrails`), vai
   izsauciet `guardrailRegistry.register(...)` izpildlaikā — reģistrs aizstāj
   jebkuru iepriekšējo aizsargbarjeru ar tādu pašu normalizēto nosaukumu.
4. Pievienojiet testus direktorijā `tests/unit/` (esošie piemēri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testēšana

Starp testiem izmantojiet `resetGuardrailsForTests()`, lai sāktu no zināma stāvokļa.
Nododiet `{ registerDefaults: false }`, lai sāktu ar tukšu reģistru un
reģistrētu tikai testējamās aizsargbarjeras. Vision Bridge atbalsta atkarību
ievadīšanu (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge nodrošina
līdzvērtīgus paplašinājuma punktus iestatījumiem, iespējām, STT modeļa atlasei, akreditācijas datu
pārbaudēm un transkripcijai. Tādēļ testos var pārbaudīt abas plūsmas bez piekļuves
DB vai tīklam.

## Skatiet arī

- `src/lib/guardrails/` — implementācija
- `src/shared/utils/inputSanitizer.ts` — koplietots detektors, kas nodrošina
  uzvedņu injekciju noteikšanu un PII maskēšanu
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge noklusējuma vērtības un
  piespiedu tilta modeļu saraksts
- `src/shared/constants/modalityBridgeDefaults.ts` — koplietoti Vision/Audio izpildlaika noklusējumi
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonāls slānis (ķēdes pārtraucējs, nogaidīšanas periodi)
- `docs/reference/ENVIRONMENT.md` — pilna vides mainīgo atsauce

## Injekciju aizsarga maršrutu pārklājums un red-team testēšana (8. posms · D bloks)

Injekciju aizsargs (`createInjectionGuard` / `withInjectionGuard`) aptver visus maršrutus,
kas pieņem lietotāju uzvednes. Tas ievēro `INJECTION_GUARD_MODE` (noklusējuma vērtība `warn` = tikai reģistrē žurnālā;
`block` = atgriež HTTP 400 `SECURITY_001`).

| Tips            | Maršruti                                                                                                                                             | Noklusējuma režīms |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Teksts (esošie) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn               |
| Ģeneratīvie     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn               |
| Dati            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn               |

Teksta izgūšana (`extractMessageContents`) aptver `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testēšana (katru nakti, `nightly-llm-security.yml`):** promptfoo pārbauda, vai katrs maršruts bloķē
OWASP-LLM korpusu režīmā `INJECTION_GUARD_MODE=block`; garak izpilda pārbaudes (izlaiž, ja nav noslēpuma).
`moderations` ir iekļauts konsekvences labad — operatori bloķēšanas režīmā to var izslēgt, izmantojot
`resolveDisabledGuardrails`.

Nakts darbplūsmai (`.github/workflows/nightly-llm-security.yml`, cron + manuāla
palaišana) ir divi darbi:

- **`promptfoo-guard` (bloķējošs)** — izpilda `promptfoo eval -c promptfooconfig.yaml`
  ar `INJECTION_GUARD_MODE=block`. Katrs pretiniecisks gadījums (piemēram, "ignorē visus
  iepriekšējos norādījumus…", DAN stila ierobežojumu apiešanas mēģinājumi) pārbauda, vai atbilde satur
  `error.code === "SECURITY_001"`, proti, vai aizsargs patiešām noraidīja pieprasījumu.
- **`garak` (konsultatīvs)** — izpilda garak `--probes promptinject,dan,leakreplay`
  pret lokālu OmniRoute instanci (`http://localhost:20128/v1`). Tā izpilde ir atkarīga no
  pakalpojumu sniedzēja noslēpuma (`PROMPTFOO_PROVIDER_KEY`); ja tā nav, darbs tiek korekti izlaists, un tam ir pievienots
  `|| true`, tādēļ tas sniedz pārskatu, neizraisot CI kļūmi.

Aizsarga palīgfunkcijas (`createInjectionGuard` / `withInjectionGuard`) pārklājums
aptver katru `/v1` maršrutu, kas pieņem uzvednes; uzvednes teksts tiek iegūts no
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, izmantojot
`extractMessageContents()` failā `src/shared/utils/inputSanitizer.ts`.
