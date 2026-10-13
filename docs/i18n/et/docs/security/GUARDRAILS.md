# Guardrails (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Tõeallikas:** `src/lib/guardrails/`
> **Viimati uuendatud:** 2026-08-29 — v3.8.51 (Video Bridge'i transkriptsiooni päritolu deklareerib kutsuja,
> server ei ole seda veel kontrollinud — täpsustatud vastavalt #11661-le)

Kaitsepiirded rakendavad ohutust, poliitikaid ja sisuteisendusi OmniRoute'i ning
ülesvoolu teenusepakkujate vahelisel piiril. Iga kaitsepiire saab kontrollida (ja
valikuliselt tagasi lükata, teisendada või annoteerida) päringu andmekogumeid (`preCall`) ja
ülesvoolu vastuseid (`postCall`).

Süsteem on **tõrke korral läbilaskev**: kui kaitsepiire tekitab käitamisel erindi, salvestab register
vea ja jätkab järgmise kaitsepiirdega, selle asemel et päring nurjata.
Blokeerimine on teadlik otsus (`block: true`), mitte kunagi juhus.

## Sisseehitatud Kaitsepiirded

Registri automaatne laadimine kuue kaitsepiirdega prioriteedi järjekorras importimisel
(vaata `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteet | Nimi                | Etapp(id)      | Fail                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Madalamad prioriteedinumbrid käivituvad **esimesena**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Interceptib pildiga seotud päringud, mis on suunatud **mitte-vision mudelitele** ja kas
suunab kogu päringu visioonivõimelisele mudelile või asendab pildiosad tekstikirjeldustega, mis on toodetud konfigureeritava visioonimudeli poolt enne
ülemise kõne tegemist. See võimaldab ainult tekstipõhistel pakkujatel läbipaistvalt hallata
multimodaalseid koormusi.

Voog:

1. Jäta vahele, kui sihtmudel toetab juba visiooni (kui see ei ole sunnitud sildade nimekirjas `isVisionBridgeForcedModel`).
2. Ekstraheerige pildiosad `extractImageParts(messages)` kaudu
   (`visionBridgeHelpers.ts`), mis delegeerib **ühtse meedia
   detektori** `detectMediaParts()` kutsumise `open-sse/utils/mediaParts.ts` — ainus tõe allikas, mida jagatakse koos kombinatsioonide ühilduvuse filtriga.
   Ekstraheerimine on lubatud ainult ülemise taseme osadele, mida
   `replaceImageParts` saab tagasi lõigata (ekstraheerimise↔asendamise leping): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` ja Responses API `input_image`. Pesastatud tabamused ja
   ainult indikaatorvormid on kombinatsioonifiltri materjal ja neid ei ekstraheerita kunagi.
   Jäta vahele, kui midagi ei leitud.
3. Lahendage käitusaegne konfiguratsioon `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uued `modalityBridge*`
   seadistuste võtmed võidavad; vanad `visionBridge*` võtmed jäävad **ühetsükliseks
   varukoopiks** (tagasivõtmise aken). Jäta vahele enne meedia läbimist, kui
   sild on keelatud.
4. Režiimi valija (`modalityBridgeVisionMode`, vaata allolevat tabelit) otsustab
   suunamise vs kirjeldamise. Suunamine tagastab `modifiedPayload`, kus ainult `model`
   on vahetatud, pluss meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kirjeldamise tee: piirake pilte `maxImages`-iga, koostage ülesande teadlik
   prompt, konsulteerige kirjeldamise vahehoidla, kutsuge visioonimudelit **paralleelselt**
   (`Promise.allSettled`), ja süstige `[Image N]: <description>` tekstiosad nende
   asemele. Ebaõnnestunud kirjeldamine annab `null` ja originaalne pildiosa on
   **säilinud** (#4012) — välja arvatud kombinatsioonide kirjeldamise teel, kui iga
   kirjeldamine ebaõnnestus, kus kinnitatud mitte-visioon ülemine saab
   `(unavailable — no vision-capable provider connected)` stubi asemel (#8430).
6. Tagastage `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režiimi valija (`modalityBridgeVisionMode`)

| Režiim     | Vaikimisi | Käitumine                                                                                                                                                                                                                                                                    |
| ---------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔         | Vanem heuristika, muutmata (#6640/#7204): mitte-kombineeritud/`auto/` mudelid suunavad parimale visioonimudelile, välja arvatud juhul, kui originaalmudelil on juba kasutatavad mandaadid (siis kirjeldatakse); kombinatsioonide sihtmärgid kirjeldavad alati.               |
| `describe` |           | Kirjeldage alati — suunamise plokk jäetakse täielikult vahele; kasutaja valitud mudel vastab alati.                                                                                                                                                                          |
| `reroute`  |           | Sunnitud suunamine: hoia-mandaadiga mudeli kaitse kõrvaldatakse. Suunamise-**siht** mandaadi kaitse kehtib endiselt — kui ei ole kasutatavat visioonisihtmärki, langeb päring kirjeldamisele, nii et toored pildid ei jõua kunagi ainult tekstipõhisesse tagasiside (#8430). |

Sunnitud režiimid lühendavad **enne** automaatse heuristika käivitumist; `auto` käitumine
on baiti-identne pre-PR-1 kaitsepiirdega.

#### Ülesande teadlik kirjeldamise prompt (`modalityBridgeVisionTaskAware`)

Vaikimisi **tõene**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lisab
**viimase kasutaja sõnumi** teksti (lühendatud 500 tähemärgini) põhikirjeldamise promptile, suunates
kirjeldust sellele, mida kasutaja tegelikult küsis
(codex-vision-proxy muster) ja paludes visioonimudelil transkribeerida nähtavat
teksti. Kui lipp on välja lülitatud — või ei ole kasutaja teksti — kasutatakse muutumatut põhiküsimust.

#### Kirjeldage enda silmus OpenAI ühilduvat päringut (`callVisionModelSingle()`

failis `visionBridgeHelpers.ts`), mis alati küsib `image_url.detail: "high"` —
ilma tingimusteta, iga kõneleja/teenusepakkuja jaoks, mitte sõltuvalt kliendi signaalist.
Madala detailitasemega proovide võtmine halvendab OCR täpsust just selle teksti
ülekandmise ülesande puhul, mida see käsk küsib, seega küsib kirjeldamise
kõne alati kõrge detailitaseme, sõltumata sellest, millist detailitaset
algne sissetulev päring kasutas. See mõjutab ainult sisemist kirjeldamise
päringu keha; see ei muuda, kuidas OmniRoute edastab kõneleja enda
`image_url.detail` peapäringus — see vaikeseade rakendatakse eraldi ja
ainult tuvastatud OpenCode klientide jaoks, funktsioonis
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic wire-format haru kirjeldamise enda silmusel ei oma `detail`
välja ja ei ole mõjutanud kumbagi vaikeseadet.

#### Kirjeldage väljundi piiri (`modalityBridgeVisionMaxChars`)

| Võti                           | Vaikeseade | Vahemik           |
| ------------------------------ | ---------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` või 100–50000 |

`0` (vaikeseade) tähendab **ilma piiranguta** — `callVisionModel()` tagastatud
kirjeldus edastatakse muutmata, säilitades olemasoleva käitumise. Iga väärtus
vahemikus 100–50000 kärbib kirjelduse `…` sufiksiga enne, kui see
spliced tagasi kui `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` failis `src/lib/guardrails/visionBridge.ts`).
Suurendage seda detailirohkete OCR ülesannete jaoks, kus allavoolu mudel vajab
täielikku ülekannet; vähendage seda, et piirata tokenite kasutamist
rikkalike visuaalsete mudelite puhul. Juhtpaneeli väli asub Vision vahekaartide
Täpsem paneel
(`modality-bridge-max-chars` failis `ModalityBridgeVisionTab.tsx`) ja piirab
iga väärtust vahemikus 1 kuni 99 100 põrandani, jättes samas
selgelt `0` muutmata — `0` on kehtiv Zod väärtus iseenesest
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mitte
lihtsalt "seadmata" vaikeseade.

#### Kirjeldage vahemälu (`modalityBridge/bridgeCache.ts`)

Mälu LRU + TTL vahemälu kirjeldamise väljundite jaoks, jagatud protsessi ulatuses.
Võti = `sha256(imageRef + composedPrompt + configuredBridgeModel)` koos
pikkuse-eelne raamimine (ilma välja-piiri kokkupõrgeteta). Mudeli komponent on
**konfigureeritud** sildmudel, mitte mudel, mis tegelikult vastas —
`callVisionModel` võib sisemiselt tagasi langeda ja katse järgi võtme
kasutamine killustaks vahemälu. Ebaõnnestunud kirjeldusi ei salvestata kunagi.
Seaded:

| Võti                            | Vaikeseade | Vahemik |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Kaugpildi normaliseerimine (enda silmus kirjeldamine/base64 hankimine)

Kui sild hangib **kaug** pildi ise — Anthropic kirjeldamise
enda kõne ja claude-wire-format base64 konversioon
(`ensureBase64ImagesForClaudeWire`), mõlemad läbi
`fetchRemoteImageAsDataUri()` failis `visionBridgeHelpers.ts` — saadud andmed
URI edastatakse läbi `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) enne, kui see sisestatakse
visuaal-mudeli päringusse. Üksikasjalikud pildid vähendatakse
**2048px pika servani** (vastab OpenAI/Anthropic serveripoolsetele
mõõtmispiirangutele), mis vähendab üleslaadimise baitide/latentsuse
ilma, et see muudaks, mida visuaal mudel näeb. Ümbermõõtmiseks
kasutatakse `sharp`, mis laaditakse dünaamilise impordi kaudu: platvormil,
kus selle kohalik binaar ei laadi, `normalizeDataUri()` **ei viska kunagi**
viga — see langeb tagasi originaalbaitide edastamisele, nii et
kirjeldamise/base64-konversiooni tee töötab alati. Mitte-pildi baitide
(hankimine, mis ei tagastanud dekodeeritavat pilti) edastatakse samuti
muutmata. See normaliseerimine on suunatud piltidele, mida sild hangib
oma enda kõne jaoks — seda ei rakendata kunagi kõneleja toore
edastamise koormusele, kooskõlas ainult opt-in-muutmise põhimõttega
(Hard Rule #20).

#### Seadete skeem + migratsioon

Uued `modalityBridge*` võtmed on Zod-iga valideeritud funktsioonis
`updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trio ja
`modalityBridgeAudio*` grupp, mida kasutab Audio Bridge. Migratsioon
`141_modality_bridge_settings.sql` kopeerib olemasolevad pärand
`visionBridge*` väärtused vastavatesse uutesse võtmetesse (idempotentne, ei
ülekirjuta kunagi operaatori seadistatud `modalityBridge*` väärtust); pärand
võtmed jäävad aktsepteerituks lugemiseks tagavaraks ühe väljaandetsükli
aja.

#### Läbipaistvuse päis + statistika

Kirjeldatud muudetud vastused sisaldavad
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(koostatud funktsioonis `buildModalityBridgeHeader()` failis
`modalityBridge/bridgeStats.ts`, tembeldatud funktsioonis
`withModalityBridgeHeader()` failis `src/sse/handlers/chatHelpers.ts`).
Ümber suunatud päringud ei saa **ühtki** päist — koormus jäi muutmata ja
mudeli vahetus on juba nähtav vastuse keha `model` väljas.

`GET /api/modality-bridge/stats` (halduse autentimine, sama tase kui
`GET /api/settings`) tagastab mälus per-modality loendurid
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` `vision`, `audio` ja
`video` jaoks. `averageLatencyMs` kasutab `latencySamples`, mitte kõiki
katseid, kui oma nimetaja; operatsioon, millel ei ole ajastust, ei
tooda null-millisekundilist näidust. `bridged` jääb tagurpidi ühilduvaks
aliasiks eduka konversiooni jaoks; ebaõnnestunud katsed ei suurenda seda.
Loendurid lähtestatakse protsessi taaskäivitamisel disaini järgi
(telemeetria, mitte raamatupidamine).

#### Juhtpaneeli konfiguratsioon

Pühendatud juhtpaneeli leht on
`/dashboard/settings/modality-bridge`. Selle URL-iga `Vision`, `Audio`
ja `Video` vahekaartide vahetamisel säilivad päringu parameetrid `tab` väärtuse muutmisel.
Vision vahekaart avab võimaluse, režiimi, mudeli valiku (sealhulgas automaatse
vaikesätte), ülesande teadlikud sisendkäsklused, täiustatud aja/pildi/kirjelduse pikkuse/mälu
piirangud, tööaeg
loendurid ja kaitstud näidisettepanek. Audio vahekaart on samuti aktiivne: see avab
võimaluse, STT-ainult mudeli valija koos Auto, aja/max-clip piirangud, audio
loendurid ja `input_audio` näidis test. Video vahekaart on funktsionaalne: see teatab
FFmpeg/ffprobe tööaja olekust — üks neljast selgest UI olekust (`unknown`, kui
proov on lennul või ei saanud lõpule viia, `restricted` mitte-loopback
juhtpaneeli hostil, kus proov jäetakse kliendipoolt vahele, `unavailable`, kui on
proovitud ja kinnitatud, et see puudub, või `available` koos FFmpeg/ffprobe versioonidega) — säilitab
võimaluse/mudeli/raami/video/aja piirangud, filtreerib mudeli valijat visioonivõimeliste
mudelite jaoks ja avab video loendurid.

Endine Vision Bridge kaart AI seadetes on ühilduvuse link
uuele lehele; see ei oma enam teist koopiat vormist. Meedia pakkujad
seovad ka Image-to-Text ja Speech-to-Text töövood vastavate Modality
Bridge vahekaartidega, eemaldamata olemasolevat Speech-to-Text mänguväljakut.

**Iseloomuliku ringi vastuvõtu ümbersuunamine:** kui describe kõne suunatakse läbi OmniRoute'i
enda `/v1` iseloomuliku ringi (mitte-standardne pakkuja mudel), saadab alampäring
`x-omniroute-admission-bypass: internal` ja autentitakse lahendatud
iseloomuliku ringi mandaadiga — kohalik `sk_omniroute` sentinell kohalikus režiimis või
operaatori konfigureeritud `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` keskkonna muutuja (#1350), et
`REQUIRE_API_KEY=true` juurutused saaksid siiski käivitada describe kõne. Ümbersuunamine
kehtib ainult nende täpsete mandaadide jaoks, seega ei saa välist kliendid kasutada
pealkirja, et vastuvõttu vahele jätta.

Pärandvaikesätted asuvad `src/shared/constants/visionBridgeDefaults.ts`; uued
režiimi/ülesande-teadlikud/mälu vaikesätted ja seadete lahendaja asuvad
`src/shared/constants/modalityBridgeDefaults.ts`. Kaitsepiire avab
`deps` konstruktorivaliku, et testid saaksid süstida vale `getSettings` ja
`callVisionModel` rakendusi.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Kätkeb audio sisaldavaid vestluspäringuid enne, kui need jõuavad sihtkohta, mis ei ole
tuntud audio sisendi aktsepteerimiseks. See ei suuna vestluspäringut ümber: audio osad
transkribeeritakse olemasoleva OpenAI ühilduva mitmeosa lõpp-punkti kaudu ja
valitud vestlusmudel jätkab tekstitranskriptsioonidega.

Protsess:

1. Lahenda `supportsAudio` kaudu `getResolvedModelCapabilities()`. Selged
   pakkuja-registeri metaandmed võidavad, seejärel staatilised mudeli metaandmed, seejärel sünkroniseeritud
   `modalities_input`. Deklareeritud sisendloend ilma `audio` on `false`; ei
   jää mingit võimekuse tõendit `null`. Nii `false` kui ka `null` aktiveerivad
   konservatiivse silla, samas kui `true` ümbersuunab selle.
2. Lahenda `modalityBridgeAudio*` sätted ja eralda splicetavad tipp-taseme
   audio osad igast sõnumist läbi jagatud `detectMediaParts()`
   detektori. Toetatud juhtme kujud on OpenAI `input_audio`, `audio_url` ja
   `source.media_type: "audio/*"`. Pesastatud audio tuvastatakse suunamiseks, kuid ei
   eemaldata splicing teelt. Töö on piiratud `modalityBridgeAudioMaxClips`-iga;
   hilisemad osad jäävad puutumatuks.
3. Austa konfigureeritud `provider/model`, või lase `selectAudioBridgeModel()` kõndida
   `AUDIO_TRANSCRIPTION_PROVIDERS` stabiilses katalooge järjekorras ja valida esimene
   mudel, millel on kasutatav aktiivne pakkuja mandaad.
4. `callAudioTranscription()` muundab base64/data-URI audio mitmeosaliseks
   `file`, või laadib alla kaug-`audio_url` läbi avalikult ainult väljamineva
   kaitsega DNS pinning ja 25 MB piiranguga. Seejärel POSTib faili ja valitud
   mudeli kohalikku `/v1/audio/transcriptions` iseloomuliku ringi, autentitakse
   `resolveSelfLoopBearer()` kaudu. Olemasolev transkriptsiooni marsruut teostab normaalset
   mandaadi otsingut, cooldown/kiiruspiirangute käsitlemist ja pakkuja edastamist.
5. Edukad kõned asendavad oma osad `[Audio N]: <transcript>`. Kõned
   töötavad `Promise.allSettled`: individuaalne ebaõnnestumine säilitab algse
   audio osa (#4012 leping). Kui iga kõne ebaõnnestub ja sihtkoht tõestatakse
   `supportsAudio === false`, muutuvad osad
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 leping). Tundmatu
   sihtkoha (`null`) puhul jääb kõik ebaõnnestumise tulemus puutumatuks. Tõestatud
   ainult tekstiga sihtkoht, millel ei ole kasutatavat STT mandaati, saab sama
   selge stubi ilma võrgu kõne tegemata.

Edukaid transkriptsioone kasutatakse protsessi ulatuses Modality Bridge LRU/TTL vahemälu.
Võti ühendab audio viite, stabiilse `audio-transcription` operatsiooni
sildi ja valitud STT mudeli; ebaõnnestumisi ei salvestata kunagi. Audio katsed uuendavad
jagatud `bridged`, `cacheHits`, `failures` ja `lastUsedAt` loendureid.
Muudetud vastused sisaldavad
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; puutumatud
päringud ei saa Audio Bridge segmenti.

Tööaegade sätted on DB-toetatud ja Zod-validateeritud:

| Võti                          | Vaikimisi | Vahemik         |
| ----------------------------- | --------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`    | —               |
| `modalityBridgeAudioModel`    | `""`      | Auto või STT ID |
| `modalityBridgeAudioTimeout`  | `60000`   | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`       | 1–10            |

Jagatud vahemälu jääb kontrolli alla `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

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

#### FU-07 struktuurne segmentide tõend

`segment_aware` uses one bounded pre-analysis pass over the already validated
local video stream. The fixed filter chain first scales to at most 320 pixels
wide, detects scene changes and frozen intervals, then samples at 1 frame per
second for blur, average luma, and spatial/temporal information. The pass is
limited to 600 struktuurset näidist, üks FFmpeg/filter thread, sama
`file`-only protokolli ja konteineri lubade nimekiri, 1 MiB protsessi-väljundi piir,
ja maksimaalselt 30 sekundit brokera jagatud katkestuse/tähtaega. It never
accepts a command, filter, path, or URL from the request.

Struktuursed väärtused on deterministlikud proovivõtu tõendid, mitte semantilise video mõistmine. Need ei järeldu subjekte, tegevusi, pealkirju, kõnet ega kasutaja kavatsust. Stseeni ja külmutamise piirid moodustavad segmente; külmutamise katvus, hägusus, säritus, ruumiline detail ja ajamuutus mõjutavad ainult seda, kuidas olemasolev 1–16 kaadri eelarve jaotatakse. Täiesti külmutatud segment on piiratud ühe kaadriga, samas kui mitte-külmutatud segmendid konkureerivad ülejäänud eelarve pärast. Kui piire on rohkem kui kaadreid, säilitatakse ühtlane ajajoone katvus, nii et kiired varased lõiked ei saa varjata pikka järgnevat segmenti. Stseeni piirid, mis asuvad 1-sekundilise analüüsi resolutsiooni piires külmutamise piiril, koondatakse.

Puuduvad filtrid, valesti vormindatud/tühi tõend, detektori viga või piiratud eelanalüüsi ajutine ülemineku aeg ebaõnnestuvad avatud täpselt ühtlase keskmise poliitika juurde. Helistaja katkestamine või vahendaja tähtaeg ei ebaõnnestu avatud: see lõpetab õhus oleva alamprotsessi, takistab hilisema kaadri väljavõtmist ja privaatne ajutine puu eemaldatakse `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genereerib deterministlikud reaalsed FFmpeg fikseerimised post-dedup pealkirja-kõne säästmiseks, tiheda liikumise eelarve jaotamiseks, hägusus/säritus/SI-TI tõendite jaoks, kiirete lõikude jaoks pika sabaga ja järkjärgulise hägustumise vale positiivsete jaoks. See salvestab eelanalüüsi seinaaja ja, kui `/usr/bin/time` on saadaval, lapse CPU ja tipptasemel RSS. Selle kvaliteedikontrollid on struktuursed oraaklid ainult. Reaalse pealkirja mudeli kvaliteet jääb `HOLD`, kuna see rakendus ei oma volitatud lõpp-punkti ega külmutatud kohtunikku. Raha säästud jäävad samuti `HOLD`, kui `--caption-cost-per-call-usd` ei anna selget positiivset hinnangut iga kõne kohta; skript ei valeta kumbagi tulemust.

Iga kaader on piiratud 4 MiB, kõik toorkaadrid kokku 23 MiB ja serialiseeritud vahendaja vastus 32 MiB. Privaatne ajutine kataloog eemaldatakse `finally`. OmniRoute ei paki FFmpeg'i ja ei aktsepteeri kohandatud täidetava faili teed. Enne pealkirjastamist rakendab sild konservatiivse visuaalse deduplication'i läbimise: iga JPEG vähendatakse 16×16 halltooni puhvri ja võrreldakse ainult viimase säilitatud kaadriga. Kui nõutav pealkirja eelarve ületab ühe kaadri, annab väljavõtmine piiratud kandidaadi basseini, mis on kuni kaks korda suurem sellest eelarvest ja mitte kunagi rohkem kui 16 kaadrit. Nõutav piir rakendatakse ainult pärast deduplication'i, kus esimesed ja viimased valitud kandidaadid säilitatakse lõpliku hõrenemise ajal, kui eelarve on vähemalt kaks. Versioonitud `grayscale-16x16-mean-cells-v2` poliitika kasutab suuremat keskmise luma delta ja suhet miniatuuri rakkude vahel, mille normaliseeritud delta on vähemalt 0.05. Duplikaadi lävi on konstant 0.04, valitud ennustatavuse tõttu, mitte jooksva seadistuse seadistamiseks. See sekundaarne kõrge kontrastsuse signaal säilitab väikese liikumise ja nähtava teksti muutused, mida ainult keskmise võrdlemisega varjata saab. Võrdleja või dekooderi vead ebaõnnestuvad avatud ja säilitavad katvuse. Väljundmetaandmed eraldavad väljavõetud kandidaadid, edukalt kasutatud kaadrid ja visuaalsed duplikaadid, mis on eemaldatud.

Selgelt märgitud videoosa võib nõuda ajastatud kontaktlehte. Sild koostab maksimaalselt 4-samba, 16-kaadrise JPEG võrgu. Iga 512-pikslise raku all põletab oma allika ajatempli kõrge kontrastsuse alumisse riba, samas kui samad ajatempli andmed jäävad tekstilisse metaandmesse edasise seose ja auditi jaoks. Täielik JPEG jääb piiratud 32 MiB. Kui `sharp` ei suuda võrku dekodeerida või koostada, tagastab sild individuaalsed JPEG kaadrid; kliendi katkestamine levib siiski läbi lehe operatsiooni.

Edendamise tõendid on teadlikult eraldi sünteetilisest koostamis mikrobenchmarkist. `scripts/perf/video-bridge-contact-sheet-eval.ts` määratleb skeemi-versiooniga A/B rakenduse reaalse OpenAI ühilduva visioonimudeli jaoks. See mõõdab teenusepakkuja teatatud tokeneid, lõpust lõpuni seina latentsust (sealhulgas lehe koostamine), mudeli-kõne arvu ja manifestiga määratletud fakti säilitamist. Toor mudeli vastuseid ei kirjutata aruandesse; ainult SHA-256 kokkuvõtted ja vastavad fakti ID-d säilitatakse. Rakendus ei tee ühtegi võrgu- või tasulist mudeli kõnet, kui `--execute-real` ei ole edastatud ja `--model`, `OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY` ei ole konfigureeritud. Ilma selle selge reaalse käitamiseta jääb selle masinloetav otsus `HOLD`; sünteetilised koormuse/kõne-arvu mõõtmised üksi ei ole edendamise tõendid.

Erinev `scripts/perf/video-bridge-promotion-eval.ts` tarbib FU-07 või FU-09 tähelepanekuid. Edendamise vastuvõtt nõuab kõiki kaheksat sünteetilist stsenaariumi tüüpi pluss sanitiseeritud reaalne klipp, vähemalt kolm mõõdetud kordust iga rolli ja juhtumi kohta, kõik kümme kuulutatud mõõdikut, külmutatud meedia/käsk/oodatud-fakti/seadistuste kokkuvõtted, unikaalsed tähelepaneku ID-d ja kinnitatud seemne A/B järjekord. Täitmise kviitung seob korpuse kokkuvõtte, täpse kandidaadi SHA ja mudeli versiooni. Puuduvad või kehtetud mõõtmised jäävad `HOLD`, sealhulgas CPU üle 30 s, tipptasemel RSS üle 512 MiB või eelanalüüs üle 30 s. Need on tõendite vastuvõtu piirangud, mitte uus jooksva RSS jõustamise garantii.

FU-07 nõuab vähemalt 98% kvaliteedi säilitamist ja p95 latentsust mitte rohkem kui 1.2x baasil, pluss kas 0.05 absoluutne juhtumite tasakaalustatud keskmise tagasikutsumise paranemine samade keskmiste pealkirja kõnede korral või vähemalt 10% vähem keskmisi post-dedup pealkirja kõnesid. FU-09 nõuab vähemalt 0.85 kvaliteeti, 95% säilitamist, 20% p95 latentsuse vähenemist ja 10% tokeni vähenemist. Kriitilise fakti kaotus, süstimise vastavus või puuduv kasutamine takistab edendamist. Üks täitmine ei saa midagi edendada: `--previous-report` kinnitab kahte eraldi, kattumatut, järjestikust sobivat täitmist sama poliitika/mudeli versiooni/kandidaadi/korpuse jaoks. Proovivõtu katse ei saa kinnitada kontaktlehe katset.

Kogujad peaksid hindama vastuseid mälus ja salvestama `responseDigest` pluss
mõõdikud ja vaatlus sidumised, mitte kunagi vastuse teksti. Tarbija loeb
ka pärandlikke tooreid vaatlusandmeid, kuid ei kopeeri seda teksti oma
aruannetesse. Iga vaatluse jaoks aktsepteeritakse täpselt ühte `responseDigest`
või `rawResponseText`. Versioonitud lubatud nimekiri jääb tühjaks
immutabelse `hold` vaikeväärtusega. Sobiv sissekanne nõuab oma tõendite
viidet, poliitikat, mudeli revisjoni, täpset kandidaadi SHA-d, manifesti
digest ja kahte eraldi jooksu ID-d; vastuolulised kontekstid lükatakse tagasi.
Need metaandmed on auditi leping, mitte tõend, et viidatud fail sisaldab
tõelisi mõõtmisi. Enne igasuguse sissekande lisamist vaadake tegelikke
kviitungeid. Halduse statistika lõpp-punkt ja Video armatuurlaud
näitavad konservatiivset valmidust. Ainult konfigureeritud mudeli alias ei
kehtesta oma revisjoni ega jooksva kandidaadi SHA-d, seega praegune
armatuurlaud teatab `HOLD`, mitte ei kasuta sobivust teisest täitmise
kontekstist. Selgesõnaline eksperimentaalne valik jääb eraldi edutamisest;
ühtki vaikeväärtust ei muudetud automaatselt.

Kutsujad võivad lisada valikulise `transcript.cues` massiivi toetatud video
osale, kui nad juba omavad joondatud teksti. Iga vihje peab sisaldama
`text`, lõplikku `start`/`end` intervalli uuritud kestuse sees ja
lubatud `source` (`client`, `embedded` või `audio-bridge`); `confidence`
vaikeväärtus on `1` ja peab jääma vahemikku `0` kuni `1`. Täpsed
duplikaadid koondatakse. OmniRoute ei alusta transkriptsiooni sellest
metaandmest: valideeritud vihjed kopeeritakse kirjeldatud tulemusse koos
allika, usaldusväärsuse ja intervalliga ning neid esitatakse
usaldamatute vaatlustena koos raamitekstidega. Kehtetu, vahemikust
väljas või tõendita tekst lükatakse tagasi, mitte ei segata
pealkirja voogu. Mõlemad päringu keha transkriptsiooni kanalid
normaliseerivad esitatud tõendit `client`, sealhulgas ise kinnitatud
`embedded` või `audio-bridge` silte. Ainult serveri omatud adapter
saab määrata need usaldusväärsed sildid koodipõhise `trustedSource`
argumentide kaudu; päringu JSON väli ei saa sellele argumendile
jõuda. Transkriptsiooni tekst jääb usaldamatuks meedia tuletatud sisuks,
olenemata selle tõendist, ja ei tohi kunagi määrata autoriseerimist.

Küps kutsuja võib pakkuda `audioTranscript` rada sama video jaoks;
seda käsitletakse kliendi pakutud tekstina, mitte tõendina serveri
transkriptsioonist. Fuseerimise õmblus käivitab visuaalsed ja helilised
vaatlused ühe tähtaega ja katkestussignaali all, tellib need ühisel
ajateljel, koondab täpsed duplikaadid ja teatab osalisest tulemusest,
kui ainult üks külg õnnestub. Kehtetu `audioTranscript` halveneb
selle osalise tulemuse juurde — visuaalne kirjeldus hoitakse ja
heliline haru salvestab puhastatud tõrkekoodi — selle asemel, et
kogu video ebaõnnestuda. Iga haru kättesaadavus, osaline lipp ja
puhastatud tõrkekoodid säilitatakse kirjeldatud tulemuses, kaitsemetaandmetes
(`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`),
tulemuste vahemälu metaandmetes ja sildade fuseerimise loendurites.
Vaike Video Bridge rada ei aktiveeri kõne-tekstiks ega laadi
teist meedia koopiat; ilma selle selgesõnalise rajata jääb see
ainult videoiks.

**Transkriptsiooni säilitamine (#12150 P1).** See kehtib automaatselt
igal ajal, kui Video Bridge (isegi opt-in) renderdab transkriptsiooni
vihje — eraldi säilitamise lippu ei ole. Kui päring renderdab
mõne transkriptsiooni vihje (kutsuja deklareeritud `transcript` või
fuseeritud `audioTranscript`), märgib kaitse `videoBridgeObserved`
ja toodab redigeeritud vari video kirjeldusest — identne renderdus,
kus iga vihje vabateksti keha asendatakse `[redacted-video-transcript]`,
mis on koostatud struktureeritud vihje välja asendamise kaudu enne
stringi kokkupanemist (kunagi mitte tasandatud teksti analüüsimisega,
nii et ükski vihje sisu — vaenulik või tavaline, sealhulgas
kehad, mis sisaldavad `]`, nagu `[inaudible]`/`[music]` — ei saa
püsida). Püsiv kõne-logi päringu keha asendab iga video tuletatud
teksti osa selle redigeeritud variandiga, mis on vastavuses sisu
võrdlemisega; `fullText` ankur loetakse uuesti lõpetatud
enne-kõne kaitse koormusest, nii et vaste õnnestub endiselt pärast
hilisemaid ahelakaitse (PII ja akrediteerimise maskeerijad, prioriteedid
10/95) kirjeldusteksti kohapeal ja pärast süsteemi-käsku/üleminekut/mälu
süstimist, mis kujundab sõnumi massiivi. Üles saadetud keha mudelile
on muutmata. Täheldatud päring ei täida ka mitte ühtegi püsivat
Mälu (nii päringu- kui ka vastuse tuletamine jäetakse vahele),
nii et mudeli enda vastus ei saa peegeldada transkriptsiooni teksti
Mälu.

**Toored video väljad (#12430).** Kui sild on aktiveeritud ja
põhivideo tugi on teadmata või puudub, aktiveerivad määratud
`transcript`/`audioTranscript` väljad ka `videoBridgeObserved`,
isegi pärast kirjeldamise ebaõnnestumist või `maxVideos` piiri.
`null` ja tühjad stringid loetakse; puuduvad väljad ja mitte-video
metaandmed ei loeta. Säilitatud koopiad redigeerivad neid välju või
jätavad päringu välja, ja vahemälu/Mälu jäetakse vahele. Pakkuja
koormus jääb muutmata.

Lisaks säilitatud koopiad kasutavad sama täheldatud päringu signaali.
Toore eel-kaitse kliendi-päringu hetkepilt, mälus ootel päring ja
varajane tagasi lükatud päringu logi asendavad struktuurselt
transkriptsiooni väljad video osades; stringi vihjed, mis on
sünteesitud torujuhtme etappide ja konteksti ülemineku kaudu, on
redigeeritud püsiva päringu keha sihtpunktis. Püsiv `video_content_removed`
märkeruut muudab `previous_response_id` jätkamise ebaõnnestumise
sulgemiseks, mitte ei rekonstrueeri teksti, mis oli tahtlikult
ära visatud. Kui täheldatud päring kaotab oma iga osa redigeeritud
vari enne logimist, või isegi kui üks mitmest video variandist
ei õnnestu hilisemate päringu muutuste järel, jäetakse säilitatud
päringu keha täielikult välja, mitte ei säilitata osaliselt redigeeritud
transkriptsiooni.

Käideldud päringu puhul võib mudeli vastus tsiteerida mis tahes osa transkriptsioonist ilma struktureeritud vihje piirita. Seetõttu asendatakse selle püsiv kõne-logi `responseBody` puudumise märgiga; detailne toru artefakt (mis võib sisaldada ülemise/kliendi keha ja voolu osi) ei jää alles. Semantilised, idempotentsed ja põhjendamise taasesituse vahemälud mööduvad selle päringu lugemisest ja kirjutamisest. Pakkuja päring ja kliendile nähtav vastus jäävad muutumatuks. Varased keepalive bait tühjendatakse ajutisest puhvrist, kui detailne artefakt on välja jäetud. Kiro vale EventStreami hoiatus teatab ainult koormuse baitide arvust, mitte kunagi selle sisust või JSON parseri toorest veast.
See ei väida, et iga mitteseotud pakkuja/plugin diagnostika on auditeeritud; laiemalt säilitatud äravoolu puhastus on jälgitud #11658.

Sisemine `/api/modality-bridge/video/drilldown` elutsükkel on eraldi, tagasiside/token-autentimise vahemälu aluspind. Iga toiming nõuab ka kanonilist läbipaistmatut peamist ID-d. Enne tootmishelistaja lubamist peab see tuletama selle ID autentitud üürnikust ja ei tohi kunagi edastada kliendi valitud väärtust. Vahemälu võtmed seovad selle peamise kanoniliste sessioonide ja video viidete ID-dega, salvestavad ainult nende SHA-256 tuletatud võtmed ning piiravad nii lugemist kui ka kustutamist samale peamisele. Vahemälu salvestab maksimaalselt 16 tuletatud JPEG raami iga kirje kohta, aegub need kümne minuti pärast ja toetab piiratud `start`/`end` lugemist või selget sessiooni kustutamist.

Iga peamine on piiratud 16 kirje ja 64 MiB kanonilise JPEG andmetega. Need piirangud on sõltumatud globaalsest 64-kirje/256 MiB laest: peamise kvoodi surve eemaldab ainult selle peamise kõige hiljuti kasutatud kirjed enne, kui globaalset LRU eemaldamist kaalutakse. Aegunud kirjed eemaldatakse nii peamisest kui ka globaalsetest arvestustest vahemälu tegevuse ajal, samas kui tühistamine ja valideerimise ebaõnnestumine ei kinnita osalist asendamist.

Vahemälu lükkab tagasi mitte-kanonilise Base64, liigse täienduse, mitte-JPEG meedia, vale või lühendatud JPEG-d ja JPEG-d, mis tekitavad hoiatuse piiratud täispildi `sharp` dekodeerimise ajal. See kodeerib iga aktsepteeritud pildi uuesti kanoniliseks JPEG-iks, tuletab laius ja kõrgus dekodeeritud baitidest, mitte ei usalda helistaja välju, ja loobub igasugustest lõpp-poli-glott baitidest, mitte ei säilita neid. Ainult piiratud kanoniline kompressitud puhver arvestatakse mõlema kvoodi jaoks. JSONi traadi piirang sisaldab Base64 ülekatet 32 MiB dekodeeritud sisendi lae jaoks. Iga
salvestatud tuletus registreerib oma valideeritud JPEG formaadi/resolutsiooni, proovivõtu poliitika, tuletuse versiooni, loomise aja, serveri arvutatud sisu hash'i ja hashitud vanema viite pluss usaldusväärse helistaja vanema sisu hash. Tühistamine kontrollitakse asünkroonsete dekodeerimise/hash faaside vahel enne aatomaarse vahemälu kinnitamist.

Tootmis tootja kasutab juba tuletatud maakleriraame ainult pärast eduka visuaalanalüüsi, ilma teise video allalaadimise/ekstraktsioonita. See nõuab operaatori `modalityBridgeVideoDrilldownEnabled=true`, ranget iga osa `drilldown: true` ja autentitud API-võtme kirje ID-d. Kliendi deklareeritud peamine/sessiooni väärtused ei loo kunagi omandiõigust. Ilma kõigi kolme tingimuseta ei hash, suurenda ega säilita täiendavaid raame. Säilitamise ebaõnnestumine säilitab kasutatava visuaalse vastuse. Nõusolekuga päringud mööduvad kogu video tulemuste vahemälust, nii et vahemälus olevad tulemused ei taasesita käepidemeid.

Eduka JSON ja SSE vastuse korral paljastatakse maksimaalselt neli läbipaistvat käepidet piiratud `x-omniroute-video-drilldown` päises. Volitatud brauseri allikad saavad seda päist lugeda, ilma et CORSi allika poliitikat laiendataks. Uued käepidemed kasutavad `v1.<32-byte random base64url token>`, ja registris säilitatakse ainult nende SHA-256 hashid. Lugemise/päise parser aktsepteerib ka pärand 64-hex käepidemeid. Autentitud avalik tarbija on `GET /api/v1/video-bridge/drilldown?handle=...`, iseseisvalt piiratud `modalityBridgeVideoDrilldownRemoteEnabled=true`. Selgesõnaline püsiv vale tühistab juurdepääsu isegi siis, kui pärand `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` keskkonna tagasivõtmine on lubatud. Tootmis säilitamisel on analoogne pärand `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` tagasivõtmine. Mõlemad tagasivõtmised on vaikimisi välja lülitatud.

Tarbija tuletab omandiõigust autentitud võtme põhjal, rakendab võtme poliitikat ja tagastab sama 404 tundmatute, aegunud ja teise võtme käepidemete jaoks. See aktsepteerib `variant=preview|standard|detail` (maksimaalne JPEG mõõde 320/640/1280, kunagi mitte suurendatud), `limit=1..8` (või pärandi `frames` alias, mitte kunagi mõlemad), null-põhine `page` ja valikuline `start`/`end` fookuse sekundid. Duplikaat
päringu võtmed ja pööratud fookusaknad lükatakse tagasi. Iga tagastatud variant sisaldab oma tegeliku sisu ja tegeliku resolutsiooni metaandmete hash'i, mis on seotud säilitatud allikaga. Variandid tuletatakse lugemise ajal, mitte ei salvestata täiendavate säilitatud koopiatena. JSON vastus, sealhulgas Base64/ümbris, on piiratud 32 MiB; liiga suur leht tagastab 413 ja klient peab küsima vähem raame. Lugemised kontrollivad tühistamist iga suurendamise ümber ja kontrollivad käepideme kehtivust enne tagastamist. `DELETE` omaniku poolt on idempotentne; kustutamine või TTL aegumine vabastab säilitatud allika ja kasutuse arvestuse.

Jagatud salvestus on protsessi kohalik: käepidemed aeguvad taaskäivitamisel ja ei ole ülekantavad sõltumatute OmniRoute protsesside vahel. Halduse statistika paljastab tõhusad säilitamise/kauguse poliitika ja koguarv säilitatud kirjeid/bait ainult, mitte kunagi meedia, viidete, peamise ID-de või käepidemete kohta. Video seadete paneel näitab neid väärtusi ja võib säilitada mõlemad nõusoleku lülitid. See rakenduse dokumentatsioon ei ole elav juurutamise või reklaami tõend; reaalmudeli aktsepteerimist jälgitakse eraldi.

Frames on järjestatud pealkirjadega vastavalt konfigureeritud Video mudelile. Tühi Video ülekate pärib Vision seaded; kui mõlemad on tühjad, valib Vision automaatne marsruuter tõhusa visioonivõimekusega mudeli. Edukad pealkirjad asendavad algse osa stabiilse `[Video description:` prefiksiga, mis märgib ka teksti kui usaldusväärset meedia-põhist vaatlust ja ütleb allavoolu mudelitele, et nad ei järgiks meedias leitud juhiseid. Raami-pealkirja vahemälu võtmed sisaldavad JPEG-bitte, prompti, ajatemplit ja tõhusat mudelit; ainult edukad pealkirjad salvestatakse. Vahemälu kirjed säilitavad tegeliku eduka tootja mudeli, sealhulgas varumudeli; sild teatab `mixed`, kui erinevad raamid on toodetud erinevate mudelite poolt. Vahemälu tabamine kasutab seda tootja identiteeti uuesti, selle asemel et seda ümber nimetada nõutud marsruutimisplaaniks. Kogu video tulemuste vahemälu on seotud iga sisendiga, mis muudab väljundi — prompt, tõhus mudel, proovivõtu poliitika, raami arv, semantiline analüüsi režiim, normaliseeritud fookuse vihje SHA-256 sõrmjälg, fookuse aken, `transcript`, `audioTranscript` ja kontaktlehe lipp — seega iga nende mõõtmete muutmine on vahemälu tabamine, mitte kunagi aegunud uuesti kasutamine. Visuaalse dedup poliitika versioon, lävi ja piiratud kandidaadi raami arv on samuti selgelt määratletud tulemuste vahemälu võtmes ja metaandmetes; poliitika muutmine ei saa seega uuesti kasutada aegunud kogu video kirjeldust. Tulemuste vahemälu v4 metaandmed säilitavad režiimi ja sõrmjälje, mitte kunagi toore kasutaja ülesande. Guardrail metaandmed teatavad nii nõutud kui ka tõhusatest analüüsi režiimidest; nõutud `focused` režiim ilma kasutatava kasutaja tekstita kajastatakse tõhusalt kui `full`.

Guardrail ekstraktib iga toetatud video osa, kuid ei kirjelda rohkem kui `modalityBridgeVideoMaxVideos`. Sihtmärgi puhul, millel on tõestatud `supportsVideo === false`, muutuvad ebaõnnestunud ja üle piiride videod selgeks ohuteks tekstimarkeriteks, nii et toore videot ei jää. Kui võimekus on teadmata, jäävad need osad puutumatuks. Sihtmärgid, millel on `supportsVideo === true`, ületavad silda. Klientide taotluse katkestamise signaal levib allalaadimise, vahendaja järjekorra, alamprotsesside ja pealkirja kõnede kaudu; katkestused peatavad videode vahel ja ei ebaõnnestu kunagi toore meedia avamisele.

Käitusaja seaded on DB-toega ja Zod-validateeritud:

| Võti                                | Vaikimisi   | Vahemik / käitumine                                                                                             |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valikuline käitusaeg, opt-in                                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` säilitab üldised pealkirjad; `focused` kasutab piiratud, usaldusväärset viimase kasutaja konteksti       |
| `modalityBridgeVideoModel`          | `""`        | Pärib Vision Bridge mudeli                                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` või proportsionaalne `segment_aware`; detektori ebaõnnestumine langeb tagasi `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                  |

Ajaloolised püsivad Video katkestuse väärtused üle 120 sekundi on piiratud vahendaja tähtaega; uued seaded, mis ületavad seda piiri, lükatakse tagasi. `GET /api/modality-bridge/video/runtime` nõuab usaldusväärset tempel-loopback lokaalsust enne autentimist või käitusaegset uurimist, seejärel nõuab haldust. See tagastab ainult `available`, puhastatud FFmpeg/ffprobe versioonid ja fikseeritud põhjuse, kui käitusaeg ei ole saadaval. Sisemine ekstraktsiooni lõpp-punkt ei ole avalik üleslaadimise API: järjekorra küllastus tagastab `503` pluss `Retry-After`, kõne katkestamine tagastab `499`, ja fikseeritud vahendaja tähtaeg tagastab `504`. Muudetud vastused lisavad `video->text;model=<visionModel>;parts=<videos>` kesksele `x-omniroute-modality-bridge` päisele, eemaldamata Vision või Audio segmente.

### PII Masker (`piiMasker.ts`)

Töötleb **mõlemas** etapis.

- **`preCall`** kloonib koormuse, kõnnib `system`, `messages`, `input` ja `prompt` (sealhulgas tavalised stringi elemendid) ning rakendab `processPII()` (alates `@/shared/utils/inputSanitizer`) stringi `content`/`text` väljadele. Kui `PII_REDACTION_ENABLED=true`, tuvastatud PII redigeeritakse väljaminevas koormuses. See ei sõltu `INPUT_SANITIZER_MODE` (mis kontrollib ainult prompti süstimise poliitikat). Kui redigeerimine on välja lülitatud, salvestab kõne tuvastamise arveid ilma sisu ümber kirjutamata.
- **`postCall`** sügavalt kloonib vastuse, käivitab `sanitizePIIResponse()` pluss Vastuste-API-kuju maskeri (`maskResponsesOutput` — katab `output_text` ja `output[].content[].text`). Kui redigeerimist toimub, asendab muudetud vastus originaali.

Guardrail ei blokeeri kunagi; see ainult annotatsioonib (`meta.detections`, `meta.redacted`) või kirjutab ümber.

### Prompt Injection (`promptInjection.ts`)

Tuvastab vaenulikke struktuure kasutaja esitatud sisus ja jõustab konfigureeritud poliitikat. Käitumine on juhitud keskkonnamuutujatest ja konstruktorivalikutest:

| Seade             | Keskkonna muutuja                                                                                    | Vaikimisi | Mõju                                                                                                                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lubatud           | `INPUT_SANITIZER_ENABLED`                                                                            | `true`    | Kui `false`, siis turvapiire lülitub välja.                                                                                                                                                   |
| Režiim            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`    | Süstimise poliitika: `block`, `warn` või `log`. (`redact` on tagasipöördumise ühilduv, kuid ei eemalda süstimise teksti; PII ümberkirjutamine on kontrollitud `PII_REDACTION_ENABLED` kaudu.) |
| Blokeerimise lävi | `blockThreshold` valik / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`    | Minimaalne tõsidus, mis on vajalik blokeerimiseks. Keskmine on vaikimisi ainult vaatamiseks.                                                                                                  |

**Režiimi eelõigus** (`getMode`): kutsuja `options.mode` →
`INJECTION_GUARD_MODE` **DB funktsioonilippude ülekirjutamine** (Dashboard → Seaded →
Funktsioonilippude haldamine) → `INJECTION_GUARD_MODE` keskkonna muutuja → `INPUT_SANITIZER_MODE` keskkonna muutuja →
`warn`. Seega võidab juhtpaneeli ülekirjutamine keskkonna muutujad, nii et Funktsioonilippude UI kontrollib jooksva turvapiiri reaalajas (ilma taaskäivitamiseta). DB lugemine on vigade suhtes turvaline:
kui see ebaõnnestub, siis turvapiir naaseb keskkonna põhisele käitumisele ja kui ülekirjutamist ei ole seadistatud, on käitumine identne ainult keskkonna lahendusega.

Tuletamisallikad:

1. `sanitizeRequest()` failist `@/shared/utils/inputSanitizer` (jagatud detektor
   komplekt, mida kasutatakse mujal torustikus).
2. Sisseehitatud `DEFAULT_GUARD_PATTERNS` (praegu `system_override_inline` ja
   `markdown_system_block`, mõlemad `high` tõsidusega).
3. Valikuline `customPatterns`, mis edastatakse konstruktorivalikute kaudu (stringid, regex,
   või `{ name, pattern, severity }` kirjed).

Kui `mode === "block"` **ja** vähemalt üks tuvastamine vastab tõsiduse
lävele, siis `preCall` tagastab `{ block: true, message: "Päring tagasi lükatud:
kahtlane sisu tuvastatud" }`. Režiimides `warn`/`log` logib turvapiir, kuid
lubab kõne. Jagatud abifunktsioon `evaluatePromptInjection()` on samuti eksporditud
kutsujatele, kes peavad hindama käske ilma registri kaudu minemata.

**Skaneerimise piir (v3.8.20):** detektor kontrollib ainult **esimese 16 KB**
liidetud käsu teksti — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti) failis
`src/shared/utils/inputSanitizer.ts`. Nii `detectInjection()` kui ka
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` enne mustri tsükli käivitamist. Süstimise direktiivid asuvad sisendi ülaosas, seega piirab see regex CPU/GC mitmesaja-KB koormuste puhul ilma tuvastamist nõrgendamata (vt
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Töötleb **mõlemas** etapis, viimane vaikimisi ahelas (prioriteet `95`). Eemaldab
tuntud API-võtme / salajase märgi mustrid väljaminevas koormuses (sõnumi
sisu, tööriista kutsumise argumendid, tööriista tulemused) **ja** pakkuja vastuses, nii et
krediitkaart, mis on käsule kleepitud (või mille tööriista tulemus tagasi kajastab), ei leki
ülesvoolu pakkujale ega tagasi kliendile.

- **Ainult valikuline**, sama konventsioon nagu PII redaktsioon (Hard Rule #20-adjacent):
  keelatud, kui `settings.credentialRedactionEnabled === true` **või**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kui see on välja lülitatud, on turvapiir mitteaktiivne —
  see ei blokeeri kunagi ja ei ümberkirjuta kunagi.
- `redactCredentials()` läbib kogu koormuse/vastuse puu (`walkValue()`,
  prototüübi saastumise ohutu, tsükli ohutu `WeakSet` kaudu) ja asendab vasted
  `[REDACTED:<type>]` kohatäitega, kloonides ainult need oksad, mis tegelikult
  muutusid.
- `CREDENTIAL_PATTERNS` katab LLM pakkuja võtmed (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenid (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksevõtmed (Stripe, Square), pilveteenuse
  võtmed (AWS juurdepääsu võti, Twilio, SendGrid, Mailgun), privaatvõtmed / JWT-d,
  krediiti sisaldavad ühendusstringid (`mongodb://user:pass@...`, jne.), ja
  üldine `Authorization`/`x-api-key`/`api-key`/`apikey` päise-väärtuse
  muster. Päise kujul olevad võtmed (`authorization`, `x-api-key`, `api-key`,
  `apikey`) eemaldatakse struktuurselt (ainult väärtus, skeemi eelosa nagu
  `Bearer `/`Basic ` säilitatakse) mitte üldise teksti regexi kaudu.
- Turvapiir ei blokeeri kunagi; see ainult ümberkirjutab (`modifiedPayload` /
  `modifiedResponse`) ja annotatsioonid (`meta.credentialsRedacted`, `meta.count`).

Tagasivõtmise turvapiir: `tests/unit/credential-masker-guardrail.test.ts`.

## Baasleping (`base.ts`)

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
  block?: boolean; // true katkestab ahela kohe
  message?: string; // kuvatakse blokeerimisel
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tagastatakse preCall poolt päringu ümberkirjutamiseks
  modifiedResponse?: TValue; // tagastatakse postCall poolt vastuse ümberkirjutamiseks
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

Kaitsepiire annab „muudatus puudub” märku, tagastades kas `void`, `{}` või
`{ block: false }`. Väärtuse `modifiedPayload`/`modifiedResponse` tagastamine asendab
ahelas allavoolu kaitsepiiretele edastatava väärtuse.
`signal?: AbortSignal` edastab kutsuja elutsükli kaitsepiiretesse. Päringu katkestamine on tahtlik tõrke korral jätkamise erand: meediasillad peatavad töö ja puhastavad ressursid, taastamata töötlemata meediat sihtkohale, mis teadaolevalt seda ei toeta.

## Register (`registry.ts`)

Üksikeksemplar `guardrailRegistry` võimaldab järgmist:

- `register(guardrail)` — lisab kaitsepiirde (või asendab selle normaliseeritud nime alusel) ja
  sordib uuesti kasvava `priority` järgi.
- `clear()` / `list()` — haldusabimeetodid.
- `runPreCallHooks(payload, context)` — läbib aktiivsed kaitsepiirded, edastab
  lasti läbi `modifiedPayload` ja peatub esimese `block: true` korral.
- `runPostCallHooks(response, context)` — sama voog vastuse poolel.
- `resetGuardrailsForTests({ registerDefaults })` — tühjendab oleku ja soovi korral
  registreerib vaikeseaded uuesti, et tagada testide puhas isoleeritus.

Mõlemad käitajad tagastavad `{ blocked, payload|response, results, guardrail?, message? }`,
kus `results` on kirjete `GuardrailExecutionResult` massiiv, mis sisaldab
iga kaitsepiirde välju `blocked`, `skipped`, `modified`, `error` ja `meta`,
mis on kasulikud jälitamiseks.

### Kaitsepiirete keelamine päringupõhiselt

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` koondab
duplikaatideta loendi kaitsepiirete nimedest, mis tuleb praeguse
päringu puhul vahele jätta. Allikad (kõik valikulised, kõik ühendatakse):

- `apiKeyInfo.disabledGuardrails`
- Päringu keha `disabledGuardrails` (tipptasemel)
- Päringu keha `metadata.disabledGuardrails`
- Päis `x-omniroute-disabled-guardrails` (või pärandvormingus
  `x-disabled-guardrails`)

Väärtused võivad olla stringide massiivid või komadega eraldatud string; nimed
normaliseeritakse väiketähtedega kebab-kirjapilti (`pii_masker` → `pii-masker`). Tulemus
edastatakse registrile `context.disabledGuardrails` kaudu, mis jätab
sobivad kaitsepiirded vahele (`skipped: true` väljal `results`).

## Käivitusjärjekord

Iga päringu puhul, mis liigub läbi `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` koostab API võtme, päringu keha ja päiste
   põhjal vahelejäetavate kaitsepiirete loendi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` käivitab kaitsepiirded prioriteedi
   kasvavas järjekorras:
   - Keelatud kaitsepiirded märgitakse olekuga `skipped`.
   - Iga kaitsepiirde `preCall` võib `modifiedPayload` kaudu andmekoormuse ümber kirjutada.
   - Esimene `block: true` katkestab ahela ja töötleja tagastab
     kaitsepiirde tagasilükkamisvastuse.
3. (Võimalikult ümber kirjutatud) andmekoormus liigub kombineeritud marsruutimise ja
   ülesvoolu saatmise etappi.
4. Pärast vastuse koostamist käivitab `guardrailRegistry.runPostCallHooks(...)`
   vastuse jaoks sama ahela. Siinne `block: true` kõrvaldab ülesvoolu
   vastuse.

Erindi visanud kaitsepiirded registreeritakse kujul `error: <message>` ja logitakse
`logger.warn` kaudu, kuid ahela täitmine jätkub — see on kavandatud tõrke korral lubama.

## Konfiguratsioon

Sisseehitatud kaitsepiirete loetavad keskkonnamuutujad:

| Muutuja                               | Kasutaja                 | Mõju                                                                                                    |
| ------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Tuvastamise täielikuks keelamiseks määrake väärtuseks `false`.                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Süstimise poliitika: `warn`, `block` või `log`. Pärandväärtus `redact` ei kirjuta süstimisteksti ümber. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Süstimiskaitse režiim; ühtlasi DB funktsioonilipp, mis **alistab** keskkonnamuutujad (DB > ENV).        |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Minimaalne raskusaste, mille `MODE=block` tagasi lükkab: `high` (vaikimisi), `medium` või `low`.        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Muutuja `INPUT_SANITIZER_BLOCK_THRESHOLD` pärandalias.                                                  |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Kui väärtus on `true`, redigeeritakse päringu isikuandmed (süstimisrežiimist sõltumatult).              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (allavoolu) | Juhib vastusepoolse maskeri käitumist.                                                                  |

Modality Bridge'i kaitsepiirded loevad käitusaegset konfiguratsiooni DB-põhisest
sätete hoidlast (`getSettings()`), mitte keskkonnamuutujatest. Visioni peamised võtmed on
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Pärandvõtmeid
`visionBridge*` aktsepteeritakse ainult dokumenteeritud ühe tsükli pikkuse lugemise
varuvariandina; juhtpaneel kirjutab peamistesse võtmetesse. Vaikeväärtused ja varuvariandi
lahendaja asuvad failis `src/shared/constants/modalityBridgeDefaults.ts`, pärand-
konstandid on säilitatud failis `src/shared/constants/visionBridgeDefaults.ts`.

Audio kasutab võtmeid `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` ning lisaks jagatud
`modalityBridgeCache*` sätteid. Audiol puudub pärandvõtmete varuvariant, sest need
võtmed võeti kasutusele koos Modality Bridge'i skeemiga.

Video kasutab võtmeid `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` ning lisaks jagatud `modalityBridgeCache*` sätteid.
See on vaikimisi keelatud, sest FFmpeg/ffprobe on valikulised käituskeskkonna
sõltuvused ning kaadrite kirjeldamine lisab viivitust ja mudeli kasutamise kulu.

## Kohandatud kaitsepiirded

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

Sammud:

1. Looge `src/lib/guardrails/myGuardrail.ts`, mis laiendab klassi `BaseGuardrail`.
2. Rakendage `preCall` ja/või `postCall`.
3. Registreerige kas importimise ajal (lisage funktsioonist `registerDefaultGuardrails`) või
   kutsuge käitusajal välja `guardrailRegistry.register(...)` — register asendab
   kõik varasemad sama normaliseeritud nimega kaitsepiirded.
4. Lisage testid kataloogi `tests/unit/` (olemasolevad näited:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testimine

Kasutage testide vahel funktsiooni `resetGuardrailsForTests()`, et alustada teadaolevast olekust.
Tühja registriga alustamiseks edastage `{ registerDefaults: false }` ja
registreerige ainult testitavad kaitsepiirded. Vision Bridge toetab sõltuvuste
sisestamist (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge pakub
samaväärseid liideseid seadete, võimekuste, STT-mudeli valimise, mandaatide
kontrollimise ja transkribeerimise jaoks. Seega saavad testid kontrollida mõlemat
voogu ilma andmebaasi- või võrgujuurdepääsuta.

## Vaadake ka

- `src/lib/guardrails/` — teostus
- `src/shared/utils/inputSanitizer.ts` — ühine tuvastaja, millel põhinevad
  promptisüsti tuvastamine ja isikuandmete maskeerimine
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge'i vaikeväärtused ja
  sunnitud sillaga mudelite loend
- `src/shared/constants/modalityBridgeDefaults.ts` — Visioni/Audio ühised käitusaja vaikeväärtused
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonaalne kiht (kaitselüliti, ooteajad)
- `docs/reference/ENVIRONMENT.md` — keskkonnamuutujate täielik teatmik

## Süstikaitse marsruutide katvus ja red-team-testimine (8. etapp · plokk D)

Süstikaitse (`createInjectionGuard` / `withInjectionGuard`) hõlmab kõiki marsruute,
mis võtavad vastu kasutaja prompte. See järgib muutujat `INJECTION_GUARD_MODE` (vaikimisi `warn` = ainult logimine;
`block` = tagastab HTTP 400 `SECURITY_001`).

| Tüüp               | Marsruudid                                                                                                                                           | Vaikerežiim |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Tekst (olemasolev) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn        |
| Genereeriv         | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn        |
| Andmed             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn        |

Teksti eraldamine (`extractMessageContents`) hõlmab välju `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testimine (igal ööl, `nightly-llm-security.yml`):** promptfoo kontrollib, et iga marsruut blokeeriks
OWASP-LLM-i korpuse režiimis `INJECTION_GUARD_MODE=block`; garak käitab sonde (jäetakse saladuse puudumisel vahele).
`moderations` on järjepidevuse huvides kaasatud — plokirežiimi operaatorid saavad selle funktsiooni
`resolveDisabledGuardrails` kaudu erandiks määrata.

Igaöisel töövoolel (`.github/workflows/nightly-llm-security.yml`, cron + käsitsi
käivitamine) on kaks tööd:

- **`promptfoo-guard` (blokeeriv)** — käitab käsku `promptfoo eval -c promptfooconfig.yaml`
  režiimiga `INJECTION_GUARD_MODE=block`. Iga ründejuhtum (nt „ignoreeri kõiki
  varasemaid juhiseid…“, DAN-stiilis turvapiirangutest möödahiilimised) kontrollib, et vastus sisaldaks
  `error.code === "SECURITY_001"`, st et kaitse lükkas päringu tegelikult tagasi.
- **`garak` (nõuandev)** — käitab garakit võtmega `--probes promptinject,dan,leakreplay`
  kohaliku OmniRoute'i eksemplari (`http://localhost:20128/v1`) suhtes. Käivitamine sõltub
  teenusepakkuja saladusest (`PROMPTFOO_PROVIDER_KEY`); selle puudumisel jäetakse töö korrektselt vahele ja sellele on lisatud
  `|| true`, mistõttu esitatakse aruanne ilma CI-d nurjamata.

Kaitse abifunktsiooni (`createInjectionGuard` / `withInjectionGuard`)
katvus hõlmab kõiki prompte kandvaid `/v1` marsruute; prompti tekst võetakse väljadest
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` funktsiooniga
`extractMessageContents()` failis `src/shared/utils/inputSanitizer.ts`.
