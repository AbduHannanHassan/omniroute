# Guardrails (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Pirminis tiesos šaltinis:** `src/lib/guardrails/`
> **Paskutinį kartą atnaujinta:** 2026-08-29 — v3.8.51 („Video Bridge“ transkripcijos kilmę deklaruoja iškvietėjas,
> serveris jos dar nepatvirtina — patikslinta pagal #11661)

Apsaugos priemonės užtikrina saugos, politikos ir turinio transformacijas ties
riba tarp „OmniRoute“ ir išorinių teikėjų. Kiekviena apsaugos priemonė gali tikrinti
(ir pasirinktinai atmesti, transformuoti arba anotuoti) užklausų naudingąsias apkrovas (`preCall`) ir
išorinių teikėjų atsakymus (`postCall`).

Sistema yra **fail-open**: jei vykdant apsaugos priemonę įvyksta išimtis, registras
įrašo klaidą ir tęsia darbą su kita apsaugos priemone, užuot atmetęs
užklausą. Blokavimas visada yra sąmoningas sprendimas (`block: true`), o ne atsitiktinumas.

## Įmontuoti apsauginiai mechanizmai

Registras automatiškai įkelia šešis apsauginius mechanizmus prioritetų tvarka importuojant
(žr. `registry.ts` → `registerDefaultGuardrails()`):

| Prioritetas | Pavadinimas         | Etapas(-ai)    | Failas                |
| ----------- | ------------------- | -------------- | --------------------- |
| `5`         | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`         | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`         | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`        | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`        | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`        | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Mažesni prioritetai vykdomi **pirmiausia**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Perima vaizdus turinčius užklausas, skirtas **nevaizdo modeliams**, ir arba
peradresuoja visą užklausą į modelį, galintį dirbti su vaizdais, arba pakeičia vaizdo
dalis tekstinėmis aprašymomis, kurias sukuria konfigūruojamas vaizdo modelis prieš
aukštesnę užklausą. Tai leidžia tik tekstinius teikėjus skaidriai tvarkyti
multimodalius krovinius.

Srautas:

1. Praleisti, jei tikslinis modelis jau palaiko vaizdą (nebent jis yra
   priverstų tiltų sąraše `isVisionBridgeForcedModel`).
2. Išgauti vaizdo dalis naudojant `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kuris perduoda užduotį **suvienytam medijos
   detektoriui** `detectMediaParts()` `open-sse/utils/mediaParts.ts` — tai
   vienintelis tiesos šaltinis, bendrinamas su derinimo suderinamumo filtru.
   Išgavimas leidžiamas tik viršutinio lygio dalims, kurias
   `replaceImageParts` gali vėl sujungti (išgauti↔pakeisti sutartis): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, ir Responses API `input_image`. Įdėtiniai hitai ir
   tik indikatorių formos yra derinimo filtro medžiaga ir niekada nėra išgaunami.
   Praleisti, jei nieko nerasta.
3. Išspręsti vykdymo konfigūraciją naudojant `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nauji `modalityBridge*`
   nustatymų raktai laimi; senieji `visionBridge*` raktai lieka **vieno ciklo
   atsarginiu** (atsarginio lango). Praleisti prieš bet kokį medijos perėjimą, kai
   tiltas yra išjungtas.
4. Režimo pasirinkiklis (`modalityBridgeVisionMode`, žr. žemiau esančią lentelę) nusprendžia
   peradresuoti ar aprašyti. Peradresavimas grąžina `modifiedPayload` su tik `model`
   pakeistu, plius meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Aprašymo kelias: apriboti vaizdus iki `maxImages`, sudaryti užduotį atitinkantį
   raginimą, pasikonsultuoti su aprašymo talpykla, iškviesti vaizdo modelį **paraleliai**
   (`Promise.allSettled`), ir įterpti `[Image N]: <description>` teksto dalis jų
   vietoje. Nepavykęs aprašymas grąžina `null`, o originali vaizdo dalis yra
   **išsaugota** (#4012) — išskyrus derinimo aprašymo kelią, kai kiekvienas
   aprašymas nepavyko, kur patvirtintas nevaizdo aukštesnis lygis gauna
   `(unavailable — no vision-capable provider connected)` stubą vietoj (#8430).
6. Grąžinti `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režimo pasirinkiklis (`modalityBridgeVisionMode`)

| Režimas    | Numatytoji | Elgesys                                                                                                                                                                                                                                                                                            |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | Senoji heuristika, nepaliesta (#6640/#7204): ne derinimo/`auto/` modeliai peradresuoja į geriausią vaizdo modelį, nebent originalus modelis jau turi naudojamus kredencialus (tuomet aprašo); derinimo tikslai visada aprašo.                                                                      |
| `describe` |            | Visada aprašyti — peradresavimo blokas visiškai praleidžiamas; vartotojo pasirinktas modelis visada atsako.                                                                                                                                                                                        |
| `reroute`  |            | Priverstinis peradresavimas: kredencialų modelio apsaugos mechanizmas apeinamas. Peradresavimo-**tikslo** kredencialų apsaugos mechanizmas vis tiek taikomas — kai nėra naudojamo vaizdo tikslo, užklausa pereina į aprašymą, todėl žali vaizdai niekada nepasiekia tik tekstinio backend (#8430). |

Priverstiniai režimai trumpina **prieš** automatinę heuristiką; `auto` elgesys
yra bitų identiškas prieš PR-1 apsauginį mechanizmą.

#### Užduotį atitinkantis aprašymo raginimas (`modalityBridgeVisionTaskAware`)

Numatytoji **tiesa**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) prideda
paskutinės vartotojo žinutės tekstą (sutrumpintą iki 500 simbolių) prie pagrindinio
aprašymo raginimo, nukreipdama aprašymą į tai, ko vartotojas iš tikrųjų prašė
(codex-vision-proxy modelis) ir prašydama vaizdo modelio transkribuoti matomą
tekstą. Išjungus šią vėliavą — arba jei nėra vartotojo teksto — naudojamas
pagrindinis raginimas be pakeitimų.

Aprašyti savęs ciklo OpenAI suderinamą užklausą (`callVisionModelSingle()`
faile `visionBridgeHelpers.ts`) visada prašo `image_url.detail: "high"` —
be jokių sąlygų, kiekvienam skambinančiam/tiekėjui, nesiremiant jokiu kliento signalu.
Žemos detalės mėginiai sumažina OCR tikslumą būtent tekstų transkripcijos
užduočiai, dėl kurios šis užklausimas yra, todėl aprašymo užklausa visada prašo
aukštos detalės, nepriklausomai nuo to, kokio detalumo lygį naudojo originali
įeinanti užklausa. Tai veikia tik vidinę aprašymo užklausos kūną; tai nekeičia
to, kaip OmniRoute perduoda skambinančiojo `image_url.detail` pirminėje
užklausoje — tas numatytasis taikomas atskirai, ir tik aptiktiems OpenCode
klientams, faile `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic laidų formato aprašymo savęs ciklas neturi `detail` lauko
ir nėra paveiktas jokio numatytojo.

#### Aprašymo išvesties riba (`modalityBridgeVisionMaxChars`)

| Raktas                         | Numatytoji | Diapazonas         |
| ------------------------------ | ---------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`        | `0` arba 100–50000 |

`0` (numatytoji) reiškia **jokios ribos** — aprašymas, grąžintas iš
`callVisionModel()`, perduodamas nepakitęs, išlaikant esamą elgesį. Bet koks
vertė 100–50000 diapazone sutrumpina aprašymą su `…` priesaga prieš jį
sujungiant kaip `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` faile `src/lib/guardrails/visionBridge.ts`).
Padidinkite tai detalėms turtingiems OCR užduotims, kur žemyn esantis modelis
reikia pilnos transkripcijos; sumažinkite, kad apribotumėte simbolių
naudojimą kalbantiems vizijos modeliams. Valdymo skydelio laukas yra
Vizijos skyriaus Išplėstiniame skydelyje
(`modality-bridge-max-chars` faile `ModalityBridgeVisionTab.tsx`) ir riboja bet
kokią vertę nuo 1 iki 99 iki 100 grindų, palikdamas aiškų `0`
nepakitusį — `0` yra galiojanti Zod vertė savaime
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), o ne tik
"nustatyta" numatytoji.

#### Aprašymo talpykla (`modalityBridge/bridgeCache.ts`)

Atmintyje LRU + TTL talpykla aprašymo išvestims, bendrinama visame procese.
Raktas = `sha256(imageRef + composedPrompt + configuredBridgeModel)` su
ilgio prefiksu (be lauko ribų kolizijų). Modelio komponentas yra
**nustatytas** tilto modelis, o ne modelis, kuris iš tikrųjų atsakė —
`callVisionModel` gali viduje grįžti atgal, o raktavimas pagal bandymą
suskaidytų talpyklą. Nepavykę aprašymai niekada nėra talpinami. Nustatymai:

| Raktas                          | Numatytoji | Diapazonas |
| ------------------------------- | ---------- | ---------- |
| `modalityBridgeCacheEnabled`    | `true`     | —          |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440     |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000    |

#### Nuotolinių vaizdų normalizavimas (savęs ciklo aprašymas/base64 gavimas)

Kai tiltas pats gauna **nuotolinį** vaizdą — Anthropic aprašymo
savęs užklausa ir claude-laidų formato base64 konversija
(`ensureBase64ImagesForClaudeWire`), abi per
`fetchRemoteImageAsDataUri()` faile `visionBridgeHelpers.ts` — gautas duomenų
URI perduodamas per `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prieš jį įterpiant į vizijos modelio
užklausą. Per dideli vaizdai sumažinami iki **2048px ilgo krašto** (atitinka
perdarymo ribą, kurią OpenAI/Anthropic jau taiko serverio pusėje), kas sumažina
įkėlimo baitus/latenciją, nekeisdami to, ką vizijos modelis mato. Perdarymas
naudoja `sharp`, įkeltą per dinaminį importą: platformoje, kurioje jos
nativus binarinis failas nepavyksta įkelti, `normalizeDataUri()` **niekada
nepaleidžia** — jis grįžta prie originalių baitų, todėl aprašymo/base64
konversijos kelias visada veikia. Nevaizdiniai baitai (užklausa, kuri negrąžino
dekoduojamo vaizdo) taip pat perduodami nepakitę. Ši normalizacija taikoma
tik vaizdams, kuriuos tiltas gauna savo savęs užklausai — ji niekada
netaikoma skambinančiojo žaliam perduodamajam kroviniui, laikantis
pasirinktinio mutacijos principo (Griežta taisyklė #20).

#### Nustatymų schema + migracija

Nauji `modalityBridge*` raktai yra Zod patvirtinti `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trio, ir
`modalityBridgeAudio*` grupė, naudojama Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopijuoja esamas senas
`visionBridge*` vertes į atitinkamus naujus raktus (idempotentinis, niekada
neperrašys operatoriaus nustatyto `modalityBridge*` vertės); senieji raktai
lieka priimami kaip skaitymo atsarginė parinktis vienam leidimo ciklui.

#### Skaidrumo antraštė + statistika

Aprašymo transformuoti atsakymai turi
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(sukurtas `buildModalityBridgeHeader()` faile `modalityBridge/bridgeStats.ts`,
pažymėtas `withModalityBridgeHeader()` faile `src/sse/handlers/chatHelpers.ts`).
Peradresuoti užklausimai **neturi** antraštės — krovinys buvo nepakitęs ir modelio
keitimas jau matomas atsakymo kūno `model` lauke.

`GET /api/modality-bridge/stats` (valdymo autentifikacija, tas pats lygis kaip
`GET /api/settings`) grąžina atmintyje esančius per-modalinius skaitiklius
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` `vision`, `audio` ir
`video`. `averageLatencyMs` naudoja `latencySamples`, o ne visus bandymus, kaip
savo vardiklį; operacija be laiko nesukuria nulio milisekundžių
pavyzdžio. `bridged` lieka atgal suderinamu aliastu sėkmingoms
konversijoms; nepavykę bandymai jo nepadidina.
Skaitikliai iš naujo nustatomi proceso perkrovimo metu pagal dizainą
(telemetrija, ne apskaita).

#### Valdymo skydelio konfigūracija

Skirta informacijos suvestinės puslapis yra
`/dashboard/settings/modality-bridge`. Jo URL adresuojami `Vision`, `Audio`
ir `Video` skyriai išlaiko užklausos parametrus keičiant `tab` reikšmę.
Vision skyrius atskleidžia galimybes, režimą, modelio pasirinkimą (įskaitant automatinį
numatytąjį), užduotims jautrų užklausimą, pažangius laiko/išvaizdos/aprašymo ilgio/kešavimo
ribas, vykdymo
skaitiklius ir saugomą pavyzdžio užklausą. Audio skyrius taip pat yra aktyvus: jis atskleidžia
galimybes, STT tik modelio pasirinkiklį su Auto, laiko/max-clip ribas, garso
skaitiklius ir `input_audio` pavyzdžio testą. Video skyrius veikia: jis praneša
FFmpeg/ffprobe vykdymo būseną — viena iš keturių aiškių UI būsenų (`unknown`, kai
probas yra vykdomas arba negalėjo būti užbaigtas, `restricted` ne ciklinio
informacijos suvestinės serverio, kur probas yra praleidžiamas kliento pusėje, `unavailable`, kai
probas buvo atliktas ir patvirtintas kaip trūkstamas, arba `available` su FFmpeg/ffprobe versijomis) — išlaiko
galimybes/modelį/rėmelį/video/laiko ribas, filtruoja modelio pasirinkiklį iki vizijos galinčių
modelių ir atskleidžia video skaitiklius.

Ankstesnė Vision Bridge kortelė AI nustatymuose yra suderinamumo nuoroda į
naują puslapį; ji daugiau neturi antros formos kopijos. Media Providers taip pat
susieja Image-to-Text ir Speech-to-Text darbo eigas su atitinkamais Modality
Bridge skyriais, nepašalindama esamos Speech-to-Text žaidimų aikštelės.

**Savarankiško ciklo priėmimo apeitis:** kai aprašymo užklausa nukreipiama per OmniRoute
savo `/v1` savarankišką ciklą (ne standartinio tiekėjo modelis), sub-užklausa siunčia
`x-omniroute-admission-bypass: internal` ir yra autentifikuojama su išspręstu
savarankiško ciklo akreditu — vietiniu `sk_omniroute` sargybinio vietiniame režime, arba
operatoriaus sukonfigūruotu `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` aplinkos raktu (#1350), kad
`REQUIRE_API_KEY=true` diegimai vis tiek galėtų vykdyti aprašymo užklausą. Apeitis
yra gerbiama tik tiems tiksliai akreditams, todėl išoriniai klientai negali naudoti
antraštės, kad praleistų priėmimą.

Paveldėti numatyti nustatymai gyvena `src/shared/constants/visionBridgeDefaults.ts`;
nauji režimo/užduotims jautrūs/kešavimo numatyti nustatymai ir nustatymų sprendėjas gyvena
`src/shared/constants/modalityBridgeDefaults.ts`. Saugiklis atskleidžia
`deps` konstruktoriaus parinktį, kad testai galėtų įterpti netikrus `getSettings` ir
`callVisionModel` įgyvendinimus.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Perima garso turinčias pokalbių užklausas prieš joms pasiekiant tikslą, kuris nėra
žinomas kaip priimantis garso įvestį. Jis niekada neperadresuoja pokalbių užklausos: garso dalys
yra transkribuojamos per esamą OpenAI suderinamą multipart galinį tašką, o pasirinktas pokalbių modelis
tęsiasi su tekstinėmis transkripcijomis.

Srautas:

1. Išspręskite `supportsAudio` per `getResolvedModelCapabilities()`. Aiškūs
   tiekėjo registracijos metaduomenys laimi, tada statiniai modelio metaduomenys, tada sinchronizuoti
   `modalities_input`. Deklaruota įvesties sąrašas be `audio` yra `false`; jokie
   galimybių įrodymai lieka `null`. Tiek `false`, tiek `null` aktyvuoja
   konservatyvų tiltą, o `true` jį apeina.
2. Išspręskite `modalityBridgeAudio*` nustatymus ir ištraukite sujungiamas viršutinio lygio
   garso dalis iš kiekvienos žinutės per bendrą `detectMediaParts()`
   detektorių. Palaikomi laidų formatai yra OpenAI `input_audio`, `audio_url` ir
   `source.media_type: "audio/*"`. Įdėtas garsas yra aptinkamas nukreipimui, bet ne
   pašalinamas per sujungimo kelią. Darbas yra ribojamas `modalityBridgeAudioMaxClips`;
   vėlesnės dalys lieka nepaliestos.
3. Gerbkite sukonfigūruotą `provider/model`, arba leiskite `selectAudioBridgeModel()` pereiti
   per `AUDIO_TRANSCRIPTION_PROVIDERS` stabilia katalogo tvarka ir pasirinkti pirmą
   modelį su naudojamu aktyviu tiekėjo akreditu.
4. `callAudioTranscription()` konvertuoja base64/data-URI garso į multipart
   `file`, arba atsisiunčia nuotolinį `audio_url` per tik viešą išėjimo
   sargybinį su DNS fiksavimu ir 25 MB riba. Tada jis POST'ina failą ir pasirinktą
   modelį į vietinį `/v1/audio/transcriptions` savarankišką ciklą, autentifikuotą su
   `resolveSelfLoopBearer()`. Esamas transkripcijos maršrutas atlieka normalų
   akreditų paiešką, atvėsinimo/greičio ribojimo tvarkymą ir tiekėjo siuntimą.
5. Sėkmingos užklausos pakeičia savo dalis į `[Audio N]: <transcript>`. Užklausos
   vykdomos su `Promise.allSettled`: individualus nesėkmingas atvejis išlaiko tą originalią
   garso dalį (#4012 sutartis). Jei kiekviena užklausa nepavyksta ir tikslas įrodytas
   `supportsAudio === false`, dalys tampa
   `[Audio N]: (nepasiekiamas — jokio STT tiekėjo neprijungta)` (#8430 sutartis). Nežinomam
   tikslui (`null`), visi nesėkmių rezultatai lieka nepaliesti. Įrodytas
   tik tekstui skirtas tikslas be naudojamo STT akredito gauna tą patį aiškų
   stubą, neišsiunčiant tinklo užklausos.

Sėkmingos transkripcijos naudoja procesą plačiai Modality Bridge LRU/TTL kešą. Raktas
sujungia garso nuorodą, stabilų `audio-transcription` operacijos
etiketę ir pasirinktą STT modelį; nesėkmės niekada nėra kešuojamos. Garso bandymai atnaujina
bendrus `bridged`, `cacheHits`, `failures` ir `lastUsedAt` skaitiklius.
Transformuoti atsakymai neša
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nepaliestos
užklausos negauna Audio Bridge segmento.

Vykdymo nustatymai yra DB pagrindu ir Zod patvirtinti:

| Raktas                        | Numatytoji | Diapazonas       |
| ----------------------------- | ---------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                |
| `modalityBridgeAudioModel`    | `""`       | Auto arba STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10             |

Bendras kešas lieka kontroliuojamas `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ir `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptuoja aukščiausio lygio vaizdo dalis Chat Completions `messages` ir Responses
API `input` prieš tai, kai yra iškviečiamas tikslas, neturintis žinomos natūralios vaizdo palaikymo.
Palaikomos formos yra `input_video`, `video_url`, `video_source`, HTTPS URL,
ir `data:video/*;base64,...` duomenų URI. Paprasti failų pavadinimai tekste nėra laikomi
vaizdo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) atsako už užklausų perėjimą,
galimybių/politikos patikrinimą, užklausų agregavimą ir atsakymo turinį.
Kiekvienam vaizdui skirti darbai — įsigijimas, viso rezultato talpykla, kadro
seka (kuri sujungia bet kokį skambinančiojo deklaruotą garso transkriptą) ir
kiekvieno bandymo metrika/nutraukimas/valymas — yra paslėpti už `processVideoPart`
`videoBridgePipeline.ts`, kuris yra iškviečiamas kartą per vaizdo dalį `preCall` cikle.
Tas modulis taip pat apibrėžia aiškias prievado ribas `VideoMediaBrokerPort`
(įsigyjant baitus ir išgaunant mėginius), `VideoAudioTranscriptionPort`
(sujungiant skambinančiojo deklaruotą garso transkriptą su mėginiu užrašais), ir
`VideoDrilldownPort` (senos žaliavos saugojimo forma). Gamybos STT ir kadro išlaikymas
yra sudaryti aplink aprašomą prievadą per `createVideoSttAdapter` ir
`createVideoDrilldownAdapter`; pastarasis naudoja bendrą opakų rankenų gyvavimo ciklą.

Viešas `/v1` užklausų kelias niekada neimportuoja ir neįvykdo subprocess. Nuotoliniai
vaizdai yra atsisiunčiami pagal 50 MiB ribą; įterpti base64 vaizdai turi
konservatyvią 36 MiB dekoduotą per-vaizdo ribą, kad modelis/žinutės/rėmelio aplankas
galėtų likti viešo JSON užklausų priėmimo riboje, kuri yra 50 MiB. Įterptos
ilgio ir dekoduoto dydžio vertinimai yra tikrinami prieš paskirstymą. HTTPS yra
reikalingas pradiniam nuotoliniam URL ir kiekvienam peradresavimui, naudojant esamą
viešą tik išėjimo apsaugą su DNS fiksavimu. Baitai tada kerta tikslų vidinį
`POST /api/modality-bridge/video/extract` brokerio ribą. Tas maršrutas yra tiek
`LOCAL_ONLY`, tiek `SPAWN_CAPABLE`, priima tik per procesą autentifikuotą,
patikimą atgalinę užklausą ir niekada nepriima URL, failų sistemos kelio, vykdomojo
failo ar argumentų sąrašo. API kūno dydžio pipeline ir tvarkyklės inkrementinis kūno
skaitytuvas nepriklausomai užtikrina 50 MiB brokerio įvesties ribą. Jo ribota eilė
vykdo vieną išgavimą vienu metu, leidžia keturis laukiančius darbus ir riboja laukiančią
įvestį iki 100 MiB.

Brokerio viduje `ffprobe` skaito privatų vietinį failą; fiksuotas formatų
leidimų sąrašas neįtraukia grojaraščio ir manifestų formatų. Leidžiamiems MOV šeimos
konteineriams išoriniai MOV duomenų nuorodos pagal numatytuosius nustatymus yra
išjungtos, o fiksuotas komandas jų neįtraukia. Tiek `ffprobe`, tiek `ffmpeg` naudoja
`tik failo` protokolo leidimų sąrašą, vieną giją, fiksuotas argumentų masyvas, be
šalies, ir vykdomuosius failus, išspręstus iš `PATH`. Prikabintų paveikslėlių viršeliai
nėra žaidžiami kandidatai. Visi žaidžiami srautai turi atitikti ribas, o
aiškiai nustatytas srautas yra pageidautinas prieš deterministinį žemiausio indekso
atsarginį variantą. Vaizdai yra ribojami iki 600 sekundžių, 8,192 pikselių per
matmenį ir 33,554,432 šaltinio pikselių. FFmpeg mėgina 1–16 vidurio JPEG kadrų,
sumažina ilgą kraštą iki ne daugiau kaip 1,024 pikselių, nesumažindamas mažesnių
įvestų, ir niekada nepriima URL. Mėginimas yra `uniform` pagal numatytuosius
nustatymus. Pasirinktinės `scene_aware` ir eksperimentinės `segment_aware` politikos
atlieka vieną papildomą fiksuotą FFmpeg praeitį per jau patvirtintą vietinį srautą,
pasirenka ribotus `showinfo` scenos laiko žymenis ir deterministiškai grįžta
prie tų pačių vienodų vidurių, kai detektorius nepavyksta, laikas baigiasi, išvestis
yra netinkama arba kandidato rinkinys yra tuščias. Segmentų sąmoningumo režimas
paskirsto vidurio mėginius proporcingai patvirtintoms scenos intervalams; segmentų
sąmoningumo įrodymai ir atsarginio elgesio detalės pateikiamos žemiau. Kieta 16 kadrų
riba taikoma po pasirinkimo kiekvienoje politikoje. Kai scenos sąmoningumo užklausa
turi tik vieno kadro biudžetą, ji naudoja vienodą vidurį aktyvaus viso vaizdo ar
fokusavimo lango ir praneša `policyEffective: uniform`: vienas pasirinktas scenos
kadrų negali išlaikyti abiejų laiko galų. Skambinantysis gali pasirinktinai pateikti
ribotą fokusavimo langą (`start`/`end` sekundėmis); ribos yra pririštos prie
medijos trukmės, atvirkštinės arba neribotos langai yra atmesti, o visi mėginimo
politikai atliekami tik normalizuotame intervale. Gautas langas yra įtrauktas į
mėginimo metaduomenis ir nepatikimo aprašymo prefiksą, kad žemyniniai modeliai
galėtų atskirti fokusuotą ištrauką nuo viso laiko juostos.

Semantinis užrašų fokusas yra atskiras, aiškus nustatymas. Numatytoji `full`
analizės režimas išlaiko esamą kadro užklausą ir niekada neperduoda užklausos
teksto užrašų modeliui. `focused` režimu tiltas skaito tik naujausią
ne tuščią vartotojo sukurtą `text`/`input_text` iš to paties Chat arba Responses
konteinerio, normalizuoja jį į NFC, sujungia valdymo simbolius ir tarpus,
ir riboja iki 500 Unicode kodų taškų. Tuščias rezultatas grįžta prie tikslaus
`full` užklausos. Naudojamas užuomina yra serializuojama kaip JSON specialiame
nepatikimo vartotojo konteksto bloke ir gali tik prioritetizuoti pastebimus
detalius; ji negali pakeisti atskiro įspėjimo dėl instrukcijų, matomų ar girdimų
medijoje. Tekstinis fokusas niekada nenustato `start`/`end` arba nekeičia
laiko mėgintuvo.

#### FU-07 struktūrinio segmento įrodymai

`segment_aware` naudoja vieną ribotą išankstinį analizės praeitį per jau
patvirtintą vietinį vaizdo srautą. Fiksuota filtrų grandinė pirmiausia sumažina
iki ne daugiau kaip 320 pikselių pločio, nustato scenos pokyčius ir užšaldytus
intervalus, tada mėgina 1 kadrą per sekundę dėl neryškumo, vidutinės liumenų
ir erdvinių/laiko informacijos. Praeitis yra ribojama iki 600 struktūrinių
mėginių, vienos FFmpeg/filter gijos, to paties `file`-tik protokolo ir konteinerių
leidimų sąrašų, 1 MiB proceso išvesties ribos ir ne daugiau kaip 30 sekundžių
brokerio bendro nutraukimo/termino viduje. Ji niekada nepriima komandos, filtro,
kelio ar URL iš užklausos.

Struktūrinės vertės yra deterministinės mėginių ėmimo įrodymų, o ne semantinio vaizdo supratimo. Jos neinferuoja subjektų, veiksmų, antraščių, kalbos ar vartotojo ketinimų. Scenos ir sustojimo ribos formuoja segmentus; sustojimo aprėptis, neryškumas, ekspozicija, erdviniai detalės ir laikini pokyčiai tik įtakoja, kaip esamas 1–16 kadro biudžetas yra paskirstomas. Visiškai sustabdytas segmentas yra apribotas iki vieno kadro, o nesustabdytų segmentų konkurencija vyksta dėl likusio biudžeto. Kai ribos viršija kadrus, išlaikoma vienoda laiko juostos aprėptis, todėl greiti ankstyvi pjūviai negali paslėpti ilgo sekamo segmento. Scenos ribos, esančios 1 sekundės analizės rezoliucijoje, yra sujungtos.

Trūkstami filtrai, netinkami/tušti įrodymai, detektoriaus klaida arba ribotas išankstinės analizės laiko limitas atveria tikslų vienodą vidurio politiką. Skambintojo nutraukimas arba brokerio terminas nesukelia atviro nesėkmės: jis nutraukia vykdomą subprocess, neleidžia vėlesniam kadro išgavimui, o privatus laikinas medis yra pašalinamas `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuoja deterministinius realius FFmpeg
priedus po dedup antraščių išlaidų, tankaus judesio biudžeto paskirstymo,
neryškumo/ekspozicijos/SI-TI įrodymų, greitų pjūvių su ilgu uodega ir palaipsniui išblukusių klaidingų teiginių. Jis fiksuoja išankstinės analizės sienos laiką ir, kur `/usr/bin/time`
yra prieinama, vaiko CPU ir maksimalų RSS. Jo kokybės patikrinimai yra struktūriniai orakulai
tik. Realių antraščių modelio kokybė lieka `HOLD`, nes šis įrenginys neturi
įgalioto galinio taško ar sustabdytos teisėjų. Monetarinės taupymo priemonės taip pat lieka `HOLD`
nebent `--caption-cost-per-call-usd` pateikia aiškų teigiamą per skambutį
įvertinimą; skriptas niekada nesukuria jokio rezultato.

Kiekvienas kadras yra apribotas iki 4 MiB, visi žali kadrai kartu iki 23 MiB, o
serializuotas brokerio atsakymas iki 32 MiB. Privatus laikinas katalogas yra pašalinamas
`finally`. OmniRoute nesujungia FFmpeg ir nepriima individualaus
vykdomojo kelio. Prieš antraščių pridėjimą, tiltas taiko konservatyvų vizualinį
deduplicavimo procesą: kiekvienas JPEG yra sumažinamas iki 16×16 pilkos spalvos buferio ir
palyginamas tik su paskutiniu išlaikytu kadru. Prašant antraščių biudžeto
virš vieno kadro, išgavimas pateikia
apribotą kandidatų baseiną iki dvigubo to biudžeto ir niekada daugiau nei 16 kadrų.
Prašomas limitas taikomas tik po deduplicavimo, pirmieji ir galutiniai
pasirinkti kandidatai išlaikomi galutinio plonėjimo metu, kai biudžetas yra bent
du. Versijomis
`grayscale-16x16-mean-cells-v2` politika naudoja didesnį iš vidutinio luma delta ir
thumbnail ląstelių, kurių normalizuotas delta yra bent 0.05, santykio. Dublikatų slenkstis yra pastovus 0.04, pasirinktas dėl prognozuojamumo, o ne
pateiktas kaip vykdymo nustatymas. Šis antrinis
aukšto kontrasto signalas išlaiko mažą judesį ir matomus teksto pokyčius, kuriuos
vidutinio palyginimas gali paslėpti. Palyginimo ar dekodavimo klaidos atveria ir išlaiko
aprėptį. Išvesties metaduomenys atskiria išgautus kandidatus, sėkmingai naudotus
kadrus ir vizualinius dublikatus, kurie buvo atmesti.

Aiškiai pažymėta vaizdo dalis gali prašyti laiko žymėto kontaktinio lapo. Tilto
sukuria ne daugiau kaip 4 stulpelių, 16 kadro JPEG tinklą. Kiekviena 512 pikselių ląstelė
įrašo savo šaltinio laiko žymę į aukšto kontrasto apatinį juostą, o tos pačios laiko žymės
lieka tekstiniuose metaduomenyse tolesniam susiejimui ir auditui. Pilnas
JPEG lieka apribotas iki 32 MiB. Jei `sharp` negali dekoduoti ar sudaryti tinklo, tiltas
grįžta prie individualių JPEG kadrų; kliento nutraukimas vis tiek plinta
per lapo operaciją.

Skatinimo įrodymai yra sąmoningai atskirti nuo sintetinio sudarymo
mikrobandymo. `scripts/perf/video-bridge-contact-sheet-eval.ts` apibrėžia
schemos versiją A/B įrenginį realiems OpenAI suderinamiems vizijos modeliams. Jis matuoja
teikėjo praneštus žetonus, galutinį sienos delsą (įskaitant lapo sudarymą),
modelio skambučio skaičių ir manifestu apibrėžtą faktų išlaikymą. Žali modelio atsakymai nėra
rašomi į ataskaitą; tik SHA-256 santrumpos ir atitinkantys faktų ID yra išlaikomi. Įrenginys nedaro jokio tinklo ar mokamo modelio skambučio, nebent `--execute-real` yra perduodamas ir
`--model`, `OMNIROUTE_BASE_URL`, ir `OMNIROUTE_API_KEY` yra sukonfigūruoti. Be
to aiškaus realaus vykdymo, jo mašininio skaitomo nuosprendžio lieka `HOLD`; sintetinių
krovinių/skambučio skaičiaus matavimai patys nėra skatinimo įrodymai.

Atskiras `scripts/perf/video-bridge-promotion-eval.ts` naudoja FU-07 arba
FU-09 stebėjimus. Skatinimo priėmimas reikalauja visų aštuonių sintetinių scenarijų
tipų plius sanizuotas realus klipas, bent trijų matuotų pakartojimų kiekvienai rolė ir atvejui, visų dešimties paskelbtų metrikų, sustabdytų medijų/prompt/numatytų faktų/nustatymų
santrumpų, unikalių stebėjimo ID ir patvirtintų sėklų A/B tvarkos. Vykdymo
kvitas sieja korpuso santrumpą, tikslų kandidato SHA ir modelio versiją. Trūkstami
ar netinkami matavimai lieka `HOLD`, įskaitant CPU virš 30 s, maksimalų RSS virš 512 MiB arba išankstinę analizę virš 30 s. Tai yra įrodymų priėmimo limitai, o ne naujas
vykdymo RSS užtikrinimo garantija.

FU-07 reikalauja bent 98% kokybės išlaikymo ir p95 delsos ne daugiau kaip 1.2x
pagrindo, plius arba 0.05 absoliutus atvejo subalansuotas vidutinio atgaminimo
pagerinimas lygiaverčiu vidutiniu antraščių skambučiu, arba bent 10% mažiau vidutinių
po dedup antraščių skambučių. FU-09 reikalauja bent 0.85 kokybės, 95% išlaikymo, 20% p95 delsos
sumažinimo ir 10% žetono sumažinimo. Kritinių faktų praradimas, injekcijos atitiktis arba
trūkstamas naudojimas neleidžia skatinimui. Vienas vykdymas negali skatinti nieko:
`--previous-report` patvirtina du skirtingus, nesikertančius, nuosekliai
tinkamus vykdymus to paties politikos/modelio versijos/kandidato/korpuso. Mėginių ėmimo eksperimentas negali patvirtinti kontaktinio lapo eksperimento.

Kolektoriai turėtų įvertinti atsakymus atmintyje ir išsaugoti `responseDigest` plius
metrikas ir stebėjimo ryšius, niekada neatsakymo teksto. Vartotojas taip pat skaito
senus žalius stebėjimus, bet niekada nekopijuoja to teksto į savo ataskaitas. Tiksliai
vienas iš `responseDigest` arba `rawResponseText` yra priimtinas kiekvienam stebėjimui.
Versijuotas leidimų sąrašas lieka tuščias su nekintamu `hold` numatymu. Tinkamas įrašas
reikalauja savo įrodymo nuorodos, politikos, modelio revizijos, tikslaus kandidato SHA,
manifesto įrašo ir dviejų skirtingų vykdymo ID; konfliktuojantys kontekstai
atmetami. Šie metaduomenys yra audito sutartis, o ne įrodymas, kad nurodytas
failas turi tikrus matavimus. Peržiūrėkite faktinius kvitus prieš pridėdami
bet kurį įrašą. Valdymo statistikos galinis taškas ir vaizdo valdymo skydelis
atveria konservatyvų paruoštumą. Tik sukonfigūruotas modelio aliasas nesukuria
jo revizijos ar vykdomo kandidato SHA, todėl dabartinis valdymo skydelis praneša
`HOLD`, o ne perima tinkamumą iš kito vykdymo konteksto. Aiškus eksperimentinis
pasirinkimas lieka atskirtas nuo skatinimo; jokie numatyti nustatymai automatiškai
nepasikeičia.

Kreipėjai gali pridėti neprivalomą `transcript.cues` masyvą prie palaikomo vaizdo
dalis, kai jie jau turi suderintą tekstą. Kiekvienas cue turi turėti `text`,
baigtinį `start`/`end` intervalą viduje tiriamos trukmės ir baltąjį sąrašą
`source` (`client`, `embedded` arba `audio-bridge`); `confidence` numatoma
`1` ir turi likti tarp `0` ir `1`. Tikslūs dubliavimo cue yra sujungiami.
OmniRoute niekada nepradeda transkripcijos iš šių metaduomenų: patvirtinti cue
yra kopijuojami į aprašytą rezultatą su šaltiniu, pasitikėjimu ir intervalu, ir
yra pateikiami kaip nepatikimi stebėjimai kartu su kadro antraštėmis. Negaliojantys,
už ribų esantys arba kilmės neturintys tekstai yra atmetami, o ne sumaišomi į
antraštės srautą. Abu užklausos kūno transkripcijos kanalai normalizuoja
pateiktą kilmę į `client`, įskaitant savarankiškai teigtus `embedded` arba
`audio-bridge` žymes. Tik serverio valdomas adapteris gali priskirti tuos
patikimus žymenis per tik kodu `trustedSource` argumentą; užklausos JSON laukas
negali pasiekti to argumento. Transkripcijos tekstas lieka nepatikimas medijos
gautas turinys, nepriklausomai nuo jo kilmės, ir niekada neturi nustatyti
autorizacijos.

Išplėstinis kreipėjas gali pateikti `audioTranscript` takelį tam pačiam vaizdui;
jis laikomas kliento pateiktu tekstu, o ne serverio transkripcijos įrodymu.
Sujungimo siūlas vykdo vizualinius ir garso stebėjimus pagal
vieną terminą ir abortų signalą, užsako juos bendroje laiko juostoje, sujungia
tiksliai dubliuojančius ir praneša dalinį rezultatą, kai tik viena pusė pavyksta.
Negaliojantis `audioTranscript` degradavo iki to dalinio rezultato — vizualinė
aprašymas išlaikoma, o garso šaka registruoja sanizuotą klaidos kodą —
vietoj to, kad nepavyktų visam vaizdui. Pagal šaką prieinamumas, dalinis
žymuo ir sanizuoti klaidos kodai yra išsaugomi aprašytame rezultate, saugumo
metaduomenyse (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), rezultato talpyklos metaduomenyse ir tilto
sujungimo skaitikliuose. Numatyta Vaizdo Tiltas kelias nesukelia kalbos į tekstą
arba neatsisiunčia antros medijos kopijos; be to aiškaus takelio, jis lieka
tik vaizdo.

**Transkripcijos išlaikymas (#12150 P1).** Tai taikoma automatiškai, kai
Vaizdo Tiltas (kuris pats yra pasirinktinai) pateikia transkripcijos cue — nėra
atskira išlaikymo žyma. Kai užklausa pateikia bet kokį transkripcijos cue (kreipėjo
paskelbtas `transcript` arba sujungtas `audioTranscript`), saugumo
žymuo pažymi jį kaip `videoBridgeObserved` ir sukuria redaguotą vaizdo
aprašymo šešėlį — identišką atvaizdavimą, kuriame kiekvieno cue laisvo teksto
kūnas yra pakeistas į `[redacted-video-transcript]`, sukurtą pakeitus
struktūrizuotą cue lauką prieš suformuojant eilutę (niekada neanalizuojant
suklijuoto teksto, todėl jokie cue turiniai — priešiški ar įprasti, įskaitant
kūnus, turinčius `]`, tokius kaip `[inaudible]`/`[music]` — negali išlikti).
Išsaugotas užklausos žurnalo kūno užklausos kūnas keičia kiekvieną vaizdo
gautą teksto dalį į tą redaguotą šešėlį, atitinkantį turinio lygybę; `fullText`
ankurys yra perskaitytas iš užbaigto priešklausos saugumo
paketo, todėl atitikimas vis tiek pavyksta po vėlesnių grandinės saugumo
žymų (PII ir kredencialų maskuotojai, prioritetai 10/95) perrašant
aprašymo tekstą vietoje ir po sistemos-paskatinimo/perdavimų/atminties
įpurškimo formuojant žinutės masyvą. Kūnas, siunčiamas aukštyn modeliui,
lieka nepakeistas. Stebima užklausa taip pat nepildo jokios patvarios Atminties
(abiejų užklausos ir atsakymo gautų ištraukų praleidimas), todėl modelio
atsakymas negali atspindėti transkripcijos teksto į Atmintį.

**Žalių vaizdo laukų (#12430).** Kai tiltas yra įjungtas ir natūralus vaizdo
palaikymas yra nežinomas arba nėra, apibrėžti `transcript`/`audioTranscript`
laukeliai taip pat aktyvuoja `videoBridgeObserved`, net po aprašymo nesėkmės
ar `maxVideos` ribos. `null` ir tušti eilutės skaičiuojami; nebuvę laukeliai
ir nevaizdo metaduomenys nesiskaito. Išlaikytos kopijos redaguoja šiuos laukus
arba praleidžia užklausą, o talpyklos/Atmintis yra apeinamos. Teikėjo paketas
lieka nepakeistas.

Papildomos išlaikytos kopijos naudoja tą patį stebimos užklausos signalą. Žali
prieš saugumo klientų užklausos nuotrauka, atmintyje laukiančios užklausos
ir ankstyvos atmestos užklausos žurnalas struktūriškai pakeičia transkripcijos
laukus vaizdo dalyse; eilutės raginimai, sukurti per pipeline etapus ir konteksto
perdavimą, yra redaguojami saugomo užklausos kūno nuotekyje. Išsaugotas `video_content_removed`
žymuo daro `previous_response_id` tęstinumą nesėkmingą, o ne atkuria
tekstą, kuris buvo tyčia atmestas. Jei stebima užklausa praranda savo
kiekvieno dalies redagavimo šešėlį prieš žurnalą, arba net jei viena iš kelių
vaizdo šešėlių nesugeba atitikti po vėlesnių užklausos mutacijų, išsaugotas
užklausos kūnas visiškai praleidžiamas, o ne išlaikomas dalinai redaguotas
transkripcijos tekstas.

Stebint prašymą, modelio atsakymas gali cituoti bet kurią transkripto dalį be struktūrizuoto ženklų ribos. Todėl jo išsaugotas skambučio žurnalo `responseBody` yra pakeistas praleidimo žymekliu; išsami pipeline artefaktas (kuris gali apimti aukščiau esančius/kliento kūnus ir srauto dalis) nėra išlaikomas. Semantinės, idempotencijos ir mąstymo pakartojimo talpyklos apeina skaitymus ir rašymus tam prašymui. Paslaugų teikėjo prašymas ir klientui matomas atsakymas lieka nepakitę. Ankstyvi keepalive baitai yra išleidžiami iš laikino buferio, kai išsami artefaktas yra praleidžiamas. Kiro netinkamas EventStream įspėjimas praneša tik apie naštos baitų skaičių, niekada apie jos turinį ar JSON analizatoriaus žalią klaidą.
Tai nesako, kad kiekvienas nesusijęs paslaugų teikėjo/plugin diagnostika buvo patikrinta; platesnis išsaugotų nuotekų valymas yra stebimas #11658.

Vidinė `/api/modality-bridge/video/drilldown` gyvavimo ciklo sistema yra atskira, loopback/token-authenticated talpyklos substratas. Kiekviena operacija taip pat reikalauja kanoninio nepermatomo pagrindinio ID. Prieš leidžiant gamybos skambintojui, jis turi gauti tą ID iš autentifikuoto nuomininko ir niekada neturi perduoti kliento pasirinkto vertės. Talpyklos raktai sieja tą pagrindinį su kanoniniais sesijos ir vaizdo nuorodų ID, saugo tik jų SHA-256 gautus raktus ir riboja tiek skaitymus, tiek naikinimą tam pačiam pagrindiniam. Talpykla saugo ne daugiau kaip 16 gautų JPEG kadrų per įrašą, pasibaigia po dešimties minučių ir palaiko ribotus `start`/`end` skaitymus arba aiškų sesijos naikinimą.

Kiekvienas pagrindinis yra ribotas iki 16 įrašų ir 64 MiB kanoninių JPEG duomenų. Šios ribos yra nepriklausomos nuo globalios 64 įrašų/256 MiB lubų: pagrindinio kvotos spaudimas išstumia tik to pagrindinio mažiausiai neseniai naudotus įrašus prieš svarstant globalų LRU išstūmimą. Pasibaigę įrašai yra pašalinami tiek iš pagrindinio, tiek iš globalios apskaitos talpyklos veikloje, tuo tarpu atšaukimas ir patvirtinimo nesėkmė neįvykdo dalinio pakeitimo.

Talpykla atmeta nekanoninius Base64, perteklinius užpildymus, ne-JPEG medijas, netinkamus ar sutrumpintus JPEG, ir JPEG, kurie sukelia įspėjimą riboto pilno vaizdo `sharp` dekodavimo metu. Ji iš naujo koduoja kiekvieną priimtą vaizdą kaip kanoninį JPEG, išgauna plotį ir aukštį iš dekoduotų baitų, o ne pasikliauja skambintojo laukais, ir atmeta bet kokius seklius poliglotinius baitus, o ne juos išlaiko. Tik ribotas kanoninis suspaustas buferis yra įkainojamas abiem kvotoms. JSON laidų limitas apima Base64 papildomus baitus 32 MiB dekoduoto įvesties luboms. Kiekviena
saugoma derivacija registruoja savo patvirtintą JPEG formatą/rezoliuciją, mėginių politiką,
derivacijos versiją, sukūrimo laiką, serverio apskaičiuotą turinio hash, ir hash'ą tėvų
nuorodai plius patikimo skambintojo tėvų turinio hash. Atšaukimas tikrinamas
tarp asinchroninių dekodavimo/hash fazių prieš atominius talpyklos įsipareigojimus.

Gamybos gamintojas pakartoja jau gautus brokerio kadrus tik po sėkmingos
vizualinės analizės, be antro vaizdo atsisiuntimo/ekstrakcijos. Reikalaujama operatoriaus
`modalityBridgeVideoDrilldownEnabled=true`, griežto per dalį `drilldown: true`, ir
autentifikuoto API rakto įrašų ID. Kliento deklaruoti pagrindiniai/sesijos vertės niekada
nesukuria nuosavybės. Be visų trijų sąlygų jis nehashina, nesumažina ar neišlaiko
papildomų kadrų. Išlaikymo nesėkmė išsaugo naudojamą vizualinį atsakymą. Sutikti
prašymai apeina viso vaizdo rezultatų talpyklą, todėl talpykloje saugomi rezultatai niekada
nepakartoja rankenų.

Sėkmingi JSON ir SSE atsakymai atskleidžia ne daugiau kaip keturis nepermatomus
rankenų ribotame `x-omniroute-video-drilldown` antraštėje. Įgalioti naršyklės šaltiniai gali
skaityti tą antraštę neplėsdami CORS šaltinio politikos. Naujos rankenos naudoja
`v1.<32-byte random base64url token>`, o registras išlaiko tik
jų SHA-256 hash'us. Skaitytojas/antraštės analizatorius taip pat priima senus 64-hex
rankenų. Autentifikuotas viešas vartotojas yra
`GET /api/v1/video-bridge/drilldown?handle=...`, nepriklausomai uždarytas
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Aiškus išsaugotas neteisingas atšaukia
prieigą net kai senas `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` aplinkos
atsarginis planas yra įjungtas. Gamybos išlaikymas turi analogišką seną
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` atsarginį planą. Abu atsarginiai planai pagal numatytuosius nustatymus yra išjungti.

Vartotojas gauna nuosavybę iš autentifikuoto rakto, taiko rakto politiką ir
grąžina tą patį 404 nežinomiems, pasibaigusiems ir kito rakto rankenoms. Jis priima
`variant=preview|standard|detail` (maksimalus JPEG matmuo 320/640/1280, niekada nepadidintas),
`limit=1..8` (arba seną `frames` alias, niekada abu), nulinis `page`, ir neprivalomus
`start`/`end` fokusavimo sekundes. Dublikuoti
užklausų raktai ir apversti fokusavimo langai yra atmetami. Kiekvienas grąžintas variantas turi hash
savo tikro turinio ir tikros rezoliucijos metaduomenų, susietų su išsaugotu šaltiniu.
Variantai yra gauti skaitymo metu, o ne saugomi kaip papildomi išsaugoti kopijos. JSON
atsakymas, įskaitant Base64/envelope, yra apribotas iki 32 MiB; per didelis puslapis grąžina
413, o klientas turi prašyti mažiau kadrų. Skaitymai tikrina atšaukimą aplink kiekvieną
permatymą ir vėl tikrina rankenų galiojimą prieš grąžinant. `DELETE` savininko yra idempotentinis;
naikinimas arba TTL pasibaigimas išleidžia išsaugotą šaltinį ir naudojimo apskaitą.

Bendras saugykla yra proceso vietinis: rankenos pasibaigia perkrovus ir nėra perkeliamas
tarp nepriklausomų OmniRoute procesų. Valdymo statistika atskleidžia efektyvų išlaikymą/
nuotolinę politiką ir agreguotus išsaugotus įrašus/baitus tik, niekada medijas, nuorodas,
pagrindinius ID ar rankenas. Vaizdo nustatymų skydelis rodo tuos vertes ir gali išlaikyti
abu sutikimo jungiklius. Ši įgyvendinimo dokumentacija nėra tiesioginio diegimo ar
skatinimo įrodymas; realaus modelio priėmimas yra stebimas atskirai.

Rėmeliai yra pažymėti nuosekliai su sukonfigūruotu Video modeliu. Tuščias Video perrašymas paveldi Vision nustatymą; jei abu yra tušti, Vision automatinis maršrutizatorius pasirenka efektyvų viziją palaikantį modelį. Sėkmingi antraštės pakeičia originalią dalį su stabilia `[Video description:` prefiksu, kuris taip pat žymi tekstą kaip nepatikimą medijos gautą stebėjimą ir sako žemyn srauto modeliams nesekti instrukcijų, rastų medijoje. Rėmelio antraštės talpyklos raktai apima JPEG baitus, užklausą, laiko žymę ir efektyvų modelį; tik sėkmingos antraštės yra talpinamos. Talpyklos įrašai išlaiko faktinį sėkmingą gamintojo modelį, įskaitant atsarginį modelį; tiltas praneša `mixed`, kai skirtingi rėmeliai buvo pagaminti skirtingų modelių. Talpyklos pataikymas pakartoja tą gamintojo tapatybę, o ne pervadina ją kaip prašomą maršrutizavimo planą. Visas vaizdo rezultato talpyklos raktas yra pagrįstas kiekvienu įvestimi, kuri keičia išvestį — užklausa, efektyvus modelis, mėginių ėmimo politika, rėmelių skaičius, semantinės analizės režimas, normalizuoto fokusavimo užuominos SHA-256 pirštų atspaudas, fokusavimo langas, `transcript`, `audioTranscript` ir kontaktinės lentelės vėliava — taigi bet koks šių dimensijų pakeitimas yra talpyklos praleidimas, niekada nepasenęs pakartojimas. Vizualaus dedup politikos versija, slenkstis ir ribotas kandidatų rėmelių skaičius taip pat yra aiškūs rezultato talpyklos rakte ir metaduomenyse; politikos pakeitimas todėl negali pakartoti pasenusios viso vaizdo aprašymo. Rezultato talpyklos v4 metaduomenys išlaiko režimą ir pirštų atspaudą, niekada neapima žaliųjų vartotojo užduočių. Guardrail metaduomenys praneša tiek apie prašomus, tiek apie efektyvius analizės režimus; prašomas `focused` režimas be naudojamo vartotojo teksto pranešamas kaip efektyviai `full`.

Guardrail ištraukia kiekvieną palaikomą vaizdo dalį, bet aprašo ne daugiau kaip `modalityBridgeVideoMaxVideos`. Tikslui, kuris įrodytas turint `supportsVideo === false`, nesėkmingi ir viršijantys limitą vaizdo įrašai tampa aiškiais saugiais teksto žymekliais, todėl jokie žali vaizdo įrašai neišlieka. Kai galimybė nežinoma, tos dalys lieka nepaliestos. Tikslai su `supportsVideo === true` apeina tiltą. Kliento užklausos nutraukimo signalas plinta per atsisiuntimą, brokerio eilę, subprocessus ir antraščių skambučius; nutraukimai sustoja tarp vaizdo įrašų ir niekada nesibaigia atviru žaliu medija.

Vykdymo nustatymai yra DB palaikomi ir Zod patvirtinti:

| Raktas                              | Numatytoji  | Diapazonas / elgesys                                                                                    |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Pasirinktinė vykdymo, opt-in                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` išlaiko bendrąsias antraštes; `focused` naudoja ribotą, nepatikimą naujausio vartotojo kontekstą |
| `modalityBridgeVideoModel`          | `""`        | Paveldi Vision Bridge modelį                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                    |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, arba proporcingas `segment_aware`; detektoriaus nesėkmė grįžta prie `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                     |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                          |

Paveldėti išsaugoti Video laiko limitai virš 120 sekundžių yra apriboti brokerio terminui; nauji nustatymai, viršijantys tą ribą, yra atmetami. `GET /api/modality-bridge/video/runtime` reikalauja patikimo antspauduoto loopback vietos prieš autentifikaciją ar vykdymo tyrimą, tada reikalauja valdymo autentifikacijos. Jis grąžina tik `available`, sanizuotas FFmpeg/ffprobe versijas ir fiksuotą priežastį, kai vykdymas nėra prieinamas. Vidinis ištraukimo galas nėra vieša įkėlimo API: eilės prisotinimas grąžina `503` plius `Retry-After`, skambinančiojo atsijungimas grąžina `499`, o fiksuotas brokerio terminas grąžina `504`. Paversti atsakymai prideda `video->text;model=<visionModel>;parts=<videos>` prie centrinio `x-omniroute-modality-bridge` antraštės, neišimant Vision ar Audio segmentų.

### PII Masker (`piiMasker.ts`)

Veikia **abu** etapus.

- **`preCall`** kopijuoja užklausos turinį, pereina per `system`, `messages`, `input` ir `prompt` (įskaitant paprastus eilutės elementus), ir taiko `processPII()` (iš `@/shared/utils/inputSanitizer`) string `content`/`text` laukams. Kai `PII_REDACTION_ENABLED=true`, aptiktas PII yra redaguojamas iš išorinio užklausos turinio. Tai nepriklauso nuo `INPUT_SANITIZER_MODE` (kuris tik kontroliuoja užklausos injekcijos politiką). Kai redagavimas yra išjungtas, skambutis registruoja aptikimo skaičius, neperrašydamas turinio.
- **`postCall`** giliai kopijuoja atsakymą, vykdo `sanitizePIIResponse()` plius Atsakymų-API-formos maskuotoją (`maskResponsesOutput` — apima `output_text` ir `output[].content[].text`). Jei įvyksta bet koks redagavimas, modifikuotas atsakymas pakeičia originalą.

Guardrail niekada neužblokuoja; jis tik anotuoja (`meta.detections`, `meta.redacted`) arba perrašo.

### Prompt Injection (`promptInjection.ts`)

Aptinka priešingas struktūras vartotojo pateiktame turinyje ir įgyvendina sukonfigūruotą politiką. Elgesys yra valdomas aplinkos kintamųjų ir konstruktoriaus parinkčių:

| Nustatymas          | Env var                                                                                                  | Numatyta | Efektas                                                                                                                                                                                           |
| ------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Įjungta             | `INPUT_SANITIZER_ENABLED`                                                                                | `true`   | Kai `false`, apsauginė juosta trumpina.                                                                                                                                                           |
| Režimas             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`   | Įterpimo politika: `block`, `warn`, arba `log`. (`redact` priimamas atgalinei suderinamumui, bet **ne** pašalina įterpimo teksto; PII perrašymo užklausa kontroliuojama `PII_REDACTION_ENABLED`.) |
| Blokavimo slenkstis | `blockThreshold` parinktis / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimalus rimtumas, reikalingas blokavimui. Vidutinis yra tik stebėjimui pagal numatytuosius nustatymus.                                                                                          |

**Režimo prioritetas** (`getMode`): skambinančiojo `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijos vėliavos perrašymas** (Dashboard → Nustatymai →
Funkcijų vėliavos) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Taigi, valdymas per valdymo skydelį laimi prieš aplinkos kintamuosius, todėl Funkcijų vėliavos UI kontroliuoja veikiančią apsaugą tiesiogiai (be perkrovimo). DB skaitymas yra saugus: jei įvyksta klaida, apsauga grįžta prie aplinkos pagrindu veikiančio elgesio, o kai nėra nustatyto perrašymo, elgesys yra identiškas aplinkos tik sprendimui.

Aptikimo šaltiniai:

1. `sanitizeRequest()` iš `@/shared/utils/inputSanitizer` (bendras detektorius
   rinkinys, naudojamas kitur pipeline).
2. Įmontuoti `DEFAULT_GUARD_PATTERNS` (šiuo metu `system_override_inline` ir
   `markdown_system_block`, abu `high` rimtumo).
3. Pasirinktiniai `customPatterns`, perduodami per konstruktoriaus parinktis (eilutės, regex,
   arba `{ name, pattern, severity }` įrašai).

Kai `mode === "block"` **ir** bent vienas aptikimas atitinka rimtumo
slenkstį, `preCall` grąžina `{ block: true, message: "Užklausa atmesta:
aptikta įtartina medžiaga" }`. `warn`/`log` režimuose apsauginė juosta registruoja, bet
leidžia skambutį. Bendras pagalbinis `evaluatePromptInjection()` taip pat eksportuojamas
skambinantiems, kuriems reikia įvertinti užklausas, neperėjus per registrą.

**Skenavimo riba (v3.8.20):** detektorius tikrina **pirmus 16 KB**
sujungto užklausos teksto — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baitai) `src/shared/utils/inputSanitizer.ts`. T tanto `detectInjection()` ir
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` prieš vykdant
šablono ciklą. Įterpimo direktyvos yra arti įvesties viršaus, todėl tai
apriboja regex CPU/GC dideliuose šimtų KB apkrovose, nesumažinant aptikimo (cf.
#3932, #4041).

### Kredencialų Maskuotojas (`credentialMasker.ts`)

Veikia **abu** etapus, paskutinis numatytoje grandinėje (prioritetas `95`). Pašalina
gerai žinomus API rakto / slaptažodžio šablonus iš išėjimo apkrovos (žinutės
turinys, įrankių skambučio argumentai, įrankių rezultatai) **ir** teikėjo atsakymo, todėl
kredencialas, įklijuotas į užklausą (arba atspindėtas įrankio rezultate), nėra nutekintas
į aukščiau esantį teikėją ar atgal į klientą.

- **Pasirinktinai**, ta pati konvencija kaip PII redagavimui (Griežta taisyklė #20):
  išjungta, nebent `settings.credentialRedactionEnabled === true` **arba**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kai ji išjungta, apsauginė juosta neveikia —
  ji niekada neblokuoja ir niekada neperrašo.
- `redactCredentials()` pereina visą apkrovos/atsakymo medį (`walkValue()`,
  saugus prototipo užteršimui, saugus ciklams per `WeakSet`) ir pakeičia atitikmenis su
  `[REDACTED:<type>]` laikinuoju ženklu, klonuodama tik tas šakas, kurios iš tikrųjų
  pasikeitė.
- `CREDENTIAL_PATTERNS` apima LLM teikėjų raktus (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS žetonus (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), mokėjimo raktus (Stripe, Square), debesų
  raktus (AWS prieigos raktas, Twilio, SendGrid, Mailgun), privačius raktus / JWT,
  kredencialus turinčius prisijungimo eilutes (`mongodb://user:pass@...`, kt.), ir
  bendrą `Authorization`/`x-api-key`/`api-key`/`apikey` antraštės-vertės
  šabloną. Antraštės formos raktai (`authorization`, `x-api-key`, `api-key`,
  `apikey`) yra redaguojami struktūriškai (tik vertė, schema, tokia kaip
  `Bearer `/`Basic ` išsaugota) o ne per bendrą tekstinį regex.
- Apsauginė juosta niekada neblokuoja; ji tik perrašo (`modifiedPayload` /
  `modifiedResponse`) ir anotuoja (`meta.credentialsRedacted`, `meta.count`).

Regresijos apsauga: `tests/unit/credential-masker-guardrail.test.ts`.

## Bazinė sutartis (`base.ts`)

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
  block?: boolean; // true nutraukia grandinę
  message?: string; // pateikiamas blokuojant
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // grąžinamas iš preCall užklausai perrašyti
  modifiedResponse?: TValue; // grąžinamas iš postCall atsakymui perrašyti
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

Apsaugos priemonė nurodo, kad pakeitimų nėra, grąžindama `void`, `{}` arba
`{ block: false }`. Grąžinus `modifiedPayload` / `modifiedResponse`, grandine
perduodama reikšmė pakeičiama tolesnėms apsaugos priemonėms.
`signal?: AbortSignal` perduoda iškvietėjo gyvavimo ciklą apsaugos priemonėms. Užklausos nutraukimas yra sąmoninga „fail-open“ išimtis: medijos tarpininkai sustabdo darbą ir atlaisvina išteklius, neatkurdami neapdorotos medijos paskirties vietai, kuri, kaip žinoma, jos nepalaiko.

## Registras (`registry.ts`)

Vienintelis egzempliorius `guardrailRegistry` suteikia:

- `register(guardrail)` — prideda apsaugos priemonę (arba pakeičia pagal normalizuotą pavadinimą) ir
  iš naujo surikiuoja didėjančia `priority` tvarka.
- `clear()` / `list()` — administravimo pagalbinės funkcijos.
- `runPreCallHooks(payload, context)` — iteruoja aktyvias apsaugos priemones, perduoda
  naudingąją apkrovą per `modifiedPayload` ir sustoja ties pirmuoju `block: true`.
- `runPostCallHooks(response, context)` — tokia pati eiga atsakymo pusėje.
- `resetGuardrailsForTests({ registerDefaults })` — išvalo būseną ir pasirinktinai
  iš naujo užregistruoja numatytąsias apsaugos priemones, kad testai būtų visiškai izoliuoti.

Abi vykdymo funkcijos grąžina `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` yra `GuardrailExecutionResult` įrašų masyvas, apimantis kiekvienos
apsaugos priemonės laukus `blocked`, `skipped`, `modified`, `error` ir `meta`,
naudingus sekimui.

### Apsaugos priemonių išjungimas atskiroms užklausoms

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` surenka pasikartojimų
neturintį apsaugos priemonių, kurios turi būti praleistos vykdant dabartinę
užklausą, pavadinimų sąrašą. Šaltiniai (visi neprivalomi, visi sujungiami):

- `apiKeyInfo.disabledGuardrails`
- Užklausos turinio `disabledGuardrails` (aukščiausiu lygiu)
- Užklausos turinio `metadata.disabledGuardrails`
- Antraštė `x-omniroute-disabled-guardrails` (arba senoji
  `x-disabled-guardrails`)

Reikšmės gali būti eilučių masyvai arba kableliais atskirta eilutė; pavadinimai
normalizuojami į mažosiomis raidėmis rašomą kebabo stilių (`pii_masker` → `pii-masker`). Rezultatas
perduodamas registrui per `context.disabledGuardrails`, o registras praleidžia
atitinkančias apsaugos priemones (`skipped: true` lauke `results`).

## Vykdymo tvarka

Kiekvienai užklausai, perduodamai per `src/sse/handlers/chat.ts` ir
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sudaro praleidžiamų apsaugos priemonių sąrašą pagal API raktą, užklausos turinį
   ir antraštes.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` vykdo apsaugos priemones didėjančia
   prioriteto tvarka:
   - Išjungtos apsaugos priemonės pažymimos kaip `skipped`.
   - Kiekvienos apsaugos priemonės `preCall` gali perrašyti naudingąją apkrovą per `modifiedPayload`.
   - Pirmasis `block: true` nutraukia grandinę, o apdorojimo programa grąžina
     apsaugos priemonės atmetimo atsakymą.
3. Galimai perrašyta naudingoji apkrova perduodama kombinuotajam maršrutizavimui ir išsiunčiama
   aukštesniojo lygio paslaugai.
4. Surinkus atsakymą, `guardrailRegistry.runPostCallHooks(...)`
   paleidžia tą pačią grandinę atsakymui. Šiame etape `block: true` atmeta aukštesniojo lygio paslaugos
   atsakymą.

Klaidą sukeliančios apsaugos priemonės pažymimos įrašu `error: <message>`, o klaida registruojama per
`logger.warn`, tačiau grandinė tęsiama — taip sąmoningai įgyvendinamas veikimo tęstinumas klaidos atveju.

## Konfigūracija

Integruotųjų apsaugos priemonių nuskaitomi aplinkos kintamieji:

| Kintamasis                            | Naudoja               | Poveikis                                                                                                                     |
| ------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`    | Nustačius `false`, aptikimas visiškai išjungiamas.                                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`    | Įterpimo politika: `warn`, `block` arba `log`. Ankstesnė reikšmė `redact` įterpimo teksto neperrašo.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`    | Įterpimo apsaugos režimas; taip pat DB funkcijos vėliavėlė, kuri **perrašo** aplinkos kintamuosius (DB > ENV).               |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`    | Mažiausias griežtumo lygis, kurį `MODE=block` atmeta: `high` (numatytasis), `medium` arba `low`.                             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`    | Ankstesnis `INPUT_SANITIZER_BLOCK_THRESHOLD` alternatyvus pavadinimas.                                                       |
| `PII_REDACTION_ENABLED`               | `pii-masker`          | Kai nustatyta `true`, užklausoje esanti asmens identifikavimo informacija užmaskuojama (nepriklausomai nuo įterpimo režimo). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (toliau) | Valdo atsakymo pusės maskavimo priemonės veikimą.                                                                            |

„Modality Bridge“ apsaugos priemonės vykdymo konfigūraciją nuskaito iš DB pagrįstos nustatymų
saugyklos (`getSettings()`), o ne iš aplinkos kintamųjų. Pagrindiniai vaizdo apdorojimo raktai yra
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ir
`modalityBridgeCacheMaxEntries`. Ankstesni
`visionBridge*` raktai priimami tik kaip dokumentuotas vieno ciklo nuskaitymo
atsarginis variantas; valdymo skydelio įrašymo operacijos naudoja pagrindinius raktus. Numatytosios reikšmės ir atsarginio varianto
sprendiklis yra faile `src/shared/constants/modalityBridgeDefaults.ts`, o ankstesnės
konstantos paliktos faile `src/shared/constants/visionBridgeDefaults.ts`.

Garso apdorojimas naudoja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ir `modalityBridgeAudioMaxClips` bei bendrus
`modalityBridgeCache*` nustatymus. Garso apdorojimas neturi atsarginio ankstesnių raktų varianto, nes šie
raktai buvo įtraukti kartu su „Modality Bridge“ schema.

Vaizdo įrašų apdorojimas naudoja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ir
`modalityBridgeVideoTimeout` bei bendrus `modalityBridgeCache*` nustatymus.
Pagal numatytuosius nustatymus jis išjungtas, nes FFmpeg/ffprobe yra pasirenkamos operacinės
priklausomybės, o kadrų aprašų generavimas padidina delsą ir modelio naudojimo sąnaudas.

## Pasirinktinės apsaugos priemonės

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

Veiksmai:

1. Sukurkite `src/lib/guardrails/myGuardrail.ts`, išplečiantį `BaseGuardrail`.
2. Įgyvendinkite `preCall` ir (arba) `postCall`.
3. Užregistruokite importavimo metu (įtraukite per `registerDefaultGuardrails`) arba
   vykdymo metu iškvieskite `guardrailRegistry.register(...)` — registras pakeičia
   bet kurią ankstesnę apsaugos priemonę tuo pačiu normalizuotu pavadinimu.
4. Pridėkite testus aplanke `tests/unit/` (esami pavyzdžiai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testavimas

Tarp testų naudokite `resetGuardrailsForTests()`, kad pradėtumėte nuo žinomos būsenos.
Perduokite `{ registerDefaults: false }`, kad pradėtumėte nuo tuščio registro ir
užregistruotumėte tik testuojamas apsaugos priemones. „Vision Bridge“ palaiko priklausomybių
įterpimą (`deps.getSettings`, `deps.callVisionModel`); „Audio Bridge“ suteikia
atitinkamus sąsajos taškus nustatymams, galimybėms, STT modelio pasirinkimui, prisijungimo duomenų
patikroms ir transkripcijai. Todėl testais galima patikrinti abu srautus be prieigos
prie DB ar tinklo.

## Taip pat žr.

- `src/lib/guardrails/` — įgyvendinimas
- `src/shared/utils/inputSanitizer.ts` — bendras aptikimo mechanizmas, kuriuo grindžiami
  raginimų injekcijos aptikimas ir PII maskavimas
- `src/shared/constants/visionBridgeDefaults.ts` — numatytosios „Vision Bridge“ reikšmės ir
  priverstinio tilto modelių sąrašas
- `src/shared/constants/modalityBridgeDefaults.ts` — bendrosios „Vision“ / „Audio“ vykdymo aplinkos numatytosios reikšmės
- `docs/architecture/RESILIENCE_GUIDE.md` — nepriklausomas sluoksnis (grandinės pertraukiklis, atvėsimo laikotarpiai)
- `docs/reference/ENVIRONMENT.md` — išsamus aplinkos kintamųjų žinynas

## Injekcijos apsaugos maršrutų aprėptis ir „red-team“ testavimas (8 etapas · D blokas)

Injekcijos apsauga (`createInjectionGuard` / `withInjectionGuard`) apima visus maršrutus,
kurie priima naudotojų raginimus. Ji atsižvelgia į `INJECTION_GUARD_MODE` (numatytoji reikšmė `warn` = tik registruoti žurnale;
`block` = grąžina HTTP 400 `SECURITY_001`).

| Tipas           | Maršrutai                                                                                                                                            | Numatytasis režimas |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Tekstas (esami) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatyviniai  | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Duomenys        | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Teksto išskyrimas (`extractMessageContents`) apima `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**„Red-team“ testavimas (kasnakt, `nightly-llm-security.yml`):** promptfoo patikrina, ar kiekvienas maršrutas blokuoja
OWASP-LLM rinkinį, kai `INJECTION_GUARD_MODE=block`; garak vykdo zondus (praleidžiama, jei nėra slaptojo rakto).
`moderations` įtrauktas nuoseklumo sumetimais — operatoriai, naudojantys blokavimo režimą, gali jam taikyti išimtį per
`resolveDisabledGuardrails`.

Kasnakt vykdoma darbo eiga (`.github/workflows/nightly-llm-security.yml`, cron + rankinis
paleidimas) turi dvi užduotis:

- **`promptfoo-guard` (blokuojanti)** — vykdo `promptfoo eval -c promptfooconfig.yaml`
  su `INJECTION_GUARD_MODE=block`. Kiekvienu priešišku atveju (pvz., „nepaisyk visų
  ankstesnių instrukcijų…“, DAN tipo apsaugos apėjimai) patvirtinama, kad atsakyme yra
  `error.code === "SECURITY_001"`, t. y. apsauga iš tikrųjų atmetė užklausą.
- **`garak` (patariamoji)** — vykdo garak `--probes promptinject,dan,leakreplay`
  vietiniame „OmniRoute“ egzemplioriuje (`http://localhost:20128/v1`). Vykdymas priklauso nuo
  teikėjo slaptojo rakto (`PROMPTFOO_PROVIDER_KEY`); jo nesant užduotis korektiškai praleidžiama, o pabaigoje pridėta
  `|| true`, todėl rezultatai pateikiami nesukeliant CI nesėkmės.

Apsaugos pagalbinės priemonės (`createInjectionGuard` / `withInjectionGuard`)
aprėptis apima kiekvieną raginimus priimantį `/v1` maršrutą; raginimo tekstas paimamas iš
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, naudojant
`extractMessageContents()` faile `src/shared/utils/inputSanitizer.ts`.
