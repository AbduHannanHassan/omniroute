# Guardrails (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Naposledy aktualizované:** 2026-08-29 — v3.8.51 (pôvod prepisu Video Bridge deklaruje volajúci,
> server ho zatiaľ neoveruje — spresnené podľa #11661)

Guardraily vynucujú bezpečnosť, pravidlá a transformácie obsahu na rozhraní
medzi OmniRoute a nadradenými poskytovateľmi. Každý guardrail môže kontrolovať
(a voliteľne odmietnuť, transformovať alebo anotovať) dátové časti požiadaviek
(`preCall`) a odpovede nadradených poskytovateľov (`postCall`).

Systém je navrhnutý ako **fail-open**: ak guardrail počas vykonávania vyhodí
výnimku, register zaznamená chybu a namiesto zlyhania požiadavky pokračuje
ďalším guardrailom. Blokovanie je explicitné rozhodnutie (`block: true`), nikdy
nie náhoda.

## Vstavané Ochranné Mechanizmy

Registrácia automaticky načíta šesť ochranných mechanizmov v poradí priorít pri importe
(pozri `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Názov               | Fáza(e)        | Súbor                 |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižšie čísla priority sa vykonávajú **prvé**.

### Vision Bridge (`visionBridge.ts`) — Modálny Most PR-1

Zachytáva požiadavky nesúce obrázky, ktoré sú určené pre **modely bez vízie**, a buď
presmeruje celú požiadavku na model schopný vízie, alebo nahradí časti obrázkov textovými popismi vyprodukovanými konfigurovateľným modelom vízie pred
upstream volaním. To umožňuje poskytovateľom len s textom transparentne spracovávať
multimodálne zaťaženia.

Tok:

1. Preskoč, ak cieľový model už podporuje víziu (pokiaľ sa neobjavuje v zozname
   nútených mostov `isVisionBridgeForcedModel`).
2. Extrahuj časti obrázkov pomocou `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ktorá deleguje na **unifikovaný detektor médií**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný zdroj pravdy zdieľaný s filtrom kompatibility combo.
   Extrakcia je povolená len pre najvyššie úrovne častí tvarov,
   ktoré môže `replaceImageParts` znova pripojiť (zmluva extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, a Responses API `input_image`. Vnorené zásahy a
   tvary len s indikátormi sú materiálom pre combo-filter a nikdy nie sú extrahované.
   Preskoč, ak neboli nájdené žiadne.
3. Rozpoznať runtime konfiguráciu pomocou `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové kľúče nastavení `modalityBridge*`
   vyhrávajú; dedičné kľúče `visionBridge*` zostávajú **jednorazovou
   zálohou** (okno na vrátenie). Preskoč pred akýmkoľvek prechodom médií, keď je
   most zakázaný.
4. Výber režimu (`modalityBridgeVisionMode`, pozri tabuľku nižšie) rozhoduje
   o presmerovaní vs popise. Presmerovanie vracia `modifiedPayload` s iba
   vymeneným `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Cesta popisu: obmedziť obrázky na `maxImages`, zostaviť úlohu vedomý prompt,
   konzultovať cache popisov, zavolať model vízie **paralelne**
   (`Promise.allSettled`), a injektovať `[Image N]: <description>` textové časti na
   ich miesto. Zlyhanie popisu vracia `null` a pôvodná časť obrázka je
   **zachovaná** (#4012) — okrem cesty combo popisu, keď každý
   popis zlyhal, kde potvrdený upstream bez vízie dostane
   `(unavailable — no vision-capable provider connected)` stub namiesto (#8430).
6. Vrátiť `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Výber režimu (`modalityBridgeVisionMode`)

| Režim      | Predvolené | Správanie                                                                                                                                                                                                                                                         |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | Dedičná heuristika, nedotknutá (#6640/#7204): modely bez combo/`auto/` presmerujú na najlepší model vízie, pokiaľ pôvodný model už nemá použiteľné poverenia (potom popis); ciele combo vždy popisujú.                                                            |
| `describe` |            | Vždy popisuj — blok presmerovania je úplne preskočený; zvolený model používateľa vždy odpovedá.                                                                                                                                                                   |
| `reroute`  |            | Nútené presmerovanie: ochrana modelu s povereniami je obídená. Ochrana poverení presmerovania-**cieľa** stále platí — ak neexistuje žiadny použiteľný cieľ vízie, požiadavka prejde na popis, takže surové obrázky nikdy nedosiahnu backend len s textom (#8430). |

Nútené režimy skrátené **pred** spustením automatickej heuristiky; správanie `auto`
je bajtovo identické s pred-PR-1 ochranným mechanizmom.

#### Úloha-vedomý popisový prompt (`modalityBridgeVisionTaskAware`)

Predvolené **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pridáva
text **poslednej správy používateľa** (skrátený na 500 znakov) k základnému
popisovému promptu, nasmerujúc popis k tomu, čo používateľ skutočne požiadal
(patern codex-vision-proxy) a žiada model vízie, aby prepisoval viditeľný
text. S vypnutou vlajkou — alebo bez textu používateľa — sa používa nezmenený
základný prompt.

The describe self-loop's own OpenAI-compatible request (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) vždy požaduje `image_url.detail: "high"` —
bezpodmienečne, pre každého volajúceho/poskytovateľa, nie je obmedzené na žiadny signál klienta.
Nízko-detailné vzorkovanie zhoršuje presnosť OCR presne pre úlohu textovej transkripcie,
na ktorú sa tento prompt pýta, takže samotný describe hovor vždy žiada o vysokú
detailnosť bez ohľadu na to, akú úroveň detailu použil pôvodný prichádzajúci požiadavok. To
ovplyvňuje iba interné telo požiadavky describe; nemení to, ako
OmniRoute posiela vlastný `image_url.detail` volajúceho v primárnom požiadavku —
tento predvolené sa aplikuje samostatne, a to iba pre detekovaných klientov OpenCode, v
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic wire-format vetva describe self-loop nemá pole `detail`
a nie je ovplyvnená žiadnym predvoleným.

#### Describe výstupný limit (`modalityBridgeVisionMaxChars`)

| Kľúč                           | Predvolené | Rozsah              |
| ------------------------------ | ---------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` alebo 100–50000 |

`0` (predvolené) znamená **žiadny limit** — popis vrátený
`callVisionModel()` je prechádzaný bez úprav, pričom sa zachováva existujúce
správanie. Akákoľvek hodnota v rozsahu 100–50000 skráti popis s
`…` príponou predtým, ako sa znovu spojí ako `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Zvýšte to pre úlohy OCR s vysokým detailom, kde downstream model potrebuje
plnú transkripciu; znížte to, aby ste obmedzili používanie tokenov na komunikatívnych vizuálnych modeloch.
Pole na paneli dashboardu sa nachádza na záložke Vision v pokročilom paneli
(`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) a obmedzuje akúkoľvek
hodnotu medzi 1 a 99 na 100, pričom explicitné `0`
zostáva nedotknuté — `0` je platná hodnota Zod sama o sebe
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nie iba
"nepriradené" predvolené.

#### Describe cache (`modalityBridge/bridgeCache.ts`)

Cache v pamäti LRU + TTL pre výstupy describe, zdieľaná v celom procese.
Kľúč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
rámovaním dĺžky prefixu (žiadne kolízie hraníc polí). Modelová zložka je
**konfigurovaný** mostový model, nie model, ktorý skutočne odpovedal —
`callVisionModel` môže interné prepadnúť, a kľúčenie podľa pokusu by
fragmentovalo cache. Zlyhané popisy sa nikdy neukladajú do cache. Nastavenia:

| Kľúč                            | Predvolené | Rozsah  |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Normalizácia vzdialeného obrázka (self-loop describe/base64 fetch)

Keď most sám načíta **vzdialený** obrázok — self-call Anthropic describe
a konverzia claude-wire-format base64
(`ensureBase64ImagesForClaudeWire`), oboje cez
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledný dátový
URI je prechádzaný cez `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) predtým, ako je vložený do požiadavky na vizuálny model.
Nadmerné obrázky sú zmenšené na **2048px dlhú hranu** (zodpovedajúce
kapacite zmenšenia, ktorú OpenAI/Anthropic už aplikujú na serveri), čo znižuje
počet bajtov/latenciu pri nahrávaní bez zmeny toho, čo vizuálny model vidí. Zmenšovanie
používa `sharp`, načítané cez dynamický import: na platforme, kde sa jeho natívny
binárny súbor nepodarí načítať, `normalizeDataUri()` **nikdy nevyhodí** — prepadne
na prechod pôvodných bajtov, takže cesta describe/base64-konverzie
vždy funguje. Neobrázkové bajty (načítanie, ktoré nevrátilo
dekódovateľný obrázok) sú tiež prechádzané nedotknuté. Táto normalizácia je
obmedzená na obrázky, ktoré most načíta pre svoj vlastný self-call — nikdy sa
neaplikuje na surový prechodný payload volajúceho, v súlade s
princípom mutácie iba na opt-in (Hard Rule #20).

#### Schéma nastavení + migrácia

Nové kľúče `modalityBridge*` sú validované Zod v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, a skupina
`modalityBridgeAudio*` používaná Audio Bridge. Migrácia
`141_modality_bridge_settings.sql` kopíruje existujúce dedičné
`visionBridge*` hodnoty do zodpovedajúcich nových kľúčov (idempotentné, nikdy neprepíše
hodnotu `modalityBridge*` nastavenú operátorom); dedičné kľúče zostávajú akceptované ako
čítací fallback na jedno vydanie.

#### Transparentný hlavička + štatistiky

Odpovede transformované pomocou describe nesú
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(vytvorené `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
označené `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Preposlané požiadavky nedostávajú **žiadnu** hlavičku — payload bol nedotknutý a zmena modelu
je už viditeľná v poli `model` tela odpovede.

`GET /api/modality-bridge/stats` (správne auth, rovnaká úroveň ako
`GET /api/settings`) vracia v pamäti per-modality počítadlá
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pre `vision`, `audio` a
`video`. `averageLatencyMs` používa `latencySamples`, nie všetky pokusy, ako svoj
menovateľ; operácia bez časovania nevytvára vzorku s nulovou milisekundou.
`bridged` zostáva spätne kompatibilným aliasom pre úspešné
konverzie; zlyhané pokusy ho nezvyšujú.
Počítadlá sa resetujú pri reštarte procesu podľa návrhu
(telemetria, nie účtovanie).

#### Konfigurácia dashboardu

Stránka s vyhradeným panelom je
`/dashboard/settings/modality-bridge`. Jej URL-adresovateľné karty `Vision`, `Audio`
a `Video` zachovávajú parametre dotazu pri prepínaní hodnoty `tab`.
Karta Vision odhaľuje aktiváciu, režim, výber modelu (vrátane automatického
predvoleného), úlohu-vedomé vyzývanie, pokročilé limity na časový limit/obrázok/dĺžku popisu/cache,
runtime
počítadlá a chránenú vzorku požiadavky. Karta Audio je tiež aktívna: odhaľuje
aktiváciu, výber modelu iba pre STT s možnosťou Auto, limity na časový limit/max-clip, audio
počítadlá a test vzorky `input_audio`. Karta Video je funkčná: hlási
runtime stav FFmpeg/ffprobe — jeden zo štyroch explicitných stavov UI (`unknown` počas
prieskumu alebo ak sa nedá dokončiť, `restricted` na hostiteľovi dashboardu, ktorý nie je loopback, kde je prieskum preskočený na strane klienta, `unavailable` po prieskume a potvrdení chýbania, alebo `available` s verziami FFmpeg/ffprobe) — zachováva
limity aktivácie/modelu/rámca/videa/časového limitu, filtruje výber modelu na modely schopné vízie
a odhaľuje video počítadlá.

Predchádzajúca karta Vision Bridge pod nastaveniami AI je kompatibilný odkaz na
novú stránku; už nevlastní druhú kópiu formulára. Poskytovatelia médií tiež
odkazujú na pracovné postupy Image-to-Text a Speech-to-Text na zodpovedajúce karty Modality
Bridge bez odstránenia existujúceho hracieho priestoru Speech-to-Text.

**Obídenie prijatia samospojky:** keď sa volanie popisu smeruje cez vlastnú samospojku OmniRoute
`/v1` (nestandardný model poskytovateľa), sub-požiadavka posiela
`x-omniroute-admission-bypass: internal` a je autentifikovaná s vyriešenou
samospojkovou poverením — lokálnym `sk_omniroute` strážcom v lokálnom režime, alebo
operátorom nakonfigurovaným `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env kľúčom (#1350), takže
nasadenia s `REQUIRE_API_KEY=true` môžu stále vykonávať volanie popisu. Obídenie
je uznané iba pre tieto presné poverenia, takže externí klienti nemôžu použiť
hlavičku na preskočenie prijatia.

Dedičstvo predvolené hodnoty žije v `src/shared/constants/visionBridgeDefaults.ts`; nové
predvoľby režimu/úlohy-vedomé/cache a rozlíšovač nastavení žijú v
`src/shared/constants/modalityBridgeDefaults.ts`. Strážca odhaľuje
možnosť konštruktora `deps`, aby testy mohli injektovať falošné implementácie `getSettings` a
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytáva audio obsahujúce požiadavky na chat predtým, ako dosiahnu cieľ, ktorý nie je
známy ako akceptujúci audio vstup. Nikdy nepreposiela požiadavku na chat: audio časti sú
prepisované cez existujúci multipart koncový bod kompatibilný s OpenAI a
vybraný chat model pokračuje s textovými prepismi.

Tok:

1. Rozlíšte `supportsAudio` cez `getResolvedModelCapabilities()`. Explicitné
   metadata registrácie poskytovateľa vyhráva, potom statické metadata modelu, potom synchronizované
   `modalities_input`. Deklarovaný zoznam vstupov bez `audio` je `false`; žiadne
   dôkazy o schopnosti zostávajú `null`. Oba `false` a `null` aktivujú
   konzervatívny most, zatiaľ čo `true` ho obchádza.
2. Rozlíšte nastavenia `modalityBridgeAudio*` a extrahujte spájateľné vrcholové
   audio časti z každej správy cez zdieľaný detektor `detectMediaParts()`.
   Podporované drôtené tvary sú OpenAI `input_audio`, `audio_url` a
   `source.media_type: "audio/*"`. Vnorené audio je detekované na smerovanie, ale nie
   odstránené spájacou cestou. Práca je obmedzená na `modalityBridgeAudioMaxClips`;
   neskoršie časti zostávajú nedotknuté.
3. Uznajte nakonfigurovaného `provider/model`, alebo nechajte `selectAudioBridgeModel()` prechádzať
   `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnom poradí katalógu a vyberte prvý
   model s použitelnou aktívnou poverením poskytovateľa.
4. `callAudioTranscription()` konvertuje audio vo formáte base64/data-URI na multipart
   `file`, alebo sťahuje vzdialený `audio_url` cez verejne iba odchádzajúcu
   strážcu s DNS pinningom a limitom 25 MB. Potom POSTuje súbor a vybraný
   model do lokálnej `/v1/audio/transcriptions` samospojky, autentifikovanej s
   `resolveSelfLoopBearer()`. Existujúca trasa prepisu vykonáva normálne
   vyhľadávanie poverení, spracovanie cooldown/rate-limit a odosielanie poskytovateľa.
5. Úspešné volania nahrádzajú svoje časti s `[Audio N]: <transcript>`. Volania
   bežia s `Promise.allSettled`: individuálny zlyhanie zachováva pôvodnú
   audio časť (#4012 zmluva). Ak každé volanie zlyhá a cieľ sa preukáže
   `supportsAudio === false`, časti sa stanú
   `[Audio N]: (nedostupné — žiadny STT poskytovateľ pripojený)` (#8430 zmluva). Pre
   neznámy cieľ (`null`) zostáva výsledok so všetkými zlyhaniami nedotknutý. Pre preukázaný
   cieľ iba s textom bez použiteľnej STT poverenia dostáva rovnaký explicitný
   stub bez vykonania sieťového volania.

Úspešné prepisy používajú procesom širokú LRU/TTL cache Modality Bridge. Kľúč kombinuje
audio referenciu, stabilný štítok operácie `audio-transcription` a vybraný STT model; zlyhania sa nikdy necache. Audio pokusy aktualizujú
zdieľané počítadlá `bridged`, `cacheHits`, `failures` a `lastUsedAt`.
Transformované odpovede nesú
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nedotknuté
požiadavky nedostávajú segment Audio Bridge.

Runtime nastavenia sú DB-podporované a Zod-validované:

| Kľúč                          | Predvolené | Rozsah            |
| ----------------------------- | ---------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                 |
| `modalityBridgeAudioModel`    | `""`       | Auto alebo STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10              |

Zdieľaná cache zostáva kontrolovaná `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptuje vrcholové video časti v Chat Completions `messages` a odpovediach
API `input` pred tým, ako je zavolaný cieľ bez známej nativnej podpory videa.
Podporované formáty sú `input_video`, `video_url`, `video_source`, HTTPS URL,
a `data:video/*;base64,...` dátové URI. Čisté názvy súborov v texte nie sú považované
za video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vlastní prechod požiadaviek, kontrolu
schopností/politiky, agregáciu na požiadavku a payload odpovede.
Práca na úrovni videa — akvizícia, cache celkového výsledku, popis sekvencie snímok
(ktorá spája akýkoľvek audio prepis deklarovaný volajúcim) a metriky/abort/údržba
na pokus — je skrytá za `processVideoPart` v `videoBridgePipeline.ts`, ktorá je
zavolaná raz za video časť v rámci slučky `preCall`.
Ten modul tiež definuje explicitné portové hranice `VideoMediaBrokerPort`
(aqvizícia bajtov a extrakcia vzorkovaných snímok), `VideoAudioTranscriptionPort`
(spájanie audio prepisu deklarovaného volajúcim so vzorkovanými titulkami) a
`VideoDrilldownPort` (dedičná surová forma). Produkčné STT a uchovávanie snímok
sú zložené okolo popisného portu cez `createVideoSttAdapter` a
`createVideoDrilldownAdapter`; ten druhý používa zdieľaný nepriehľadný cyklus.

Verejná požiadavka `/v1` nikdy neimportuje ani nevyvoláva podproces. Diaľkové
videá sú sťahované pod limitom 50 MiB; inline base64 videá majú
konzervatívny limit 36 MiB dekódovanej veľkosti na video, aby model/správy/rámcová
obal zostali v rámci verejného JSON limitu prijatia požiadaviek 50 MiB. Dĺžka inline
a odhady dekódovanej veľkosti sú kontrolované pred alokáciou. HTTPS je
požadované na počiatočnej diaľkovej URL a každom presmerovaní, pričom sa používa
existujúca verejná iba výstupná ochrana s DNS pinningom. Bajty potom prechádzajú
presne internou hranicou `POST /api/modality-bridge/video/extract`. Táto trasa je
`LOCAL_ONLY` a `SPAWN_CAPABLE`, akceptuje iba autentifikovanú, dôveryhodnú
loopback požiadavku na proces a nikdy neakceptuje URL, cestu k súborom,
spustiteľný súbor alebo zoznam argumentov. Pipeline veľkosti tela API a
inkrementálny čitateľ tela spracovateľa nezávisle vynucujú limit 50 MiB
na vstup brokera. Jeho obmedzená fronta vykonáva jednu extrakciu naraz, umožňuje
štyri čakajúce úlohy a obmedzuje čakajúci vstup na 100 MiB.

Vo vnútri brokera `ffprobe` číta súkromný lokálny súbor; pevný formát
zoznamu povolených formátov vylučuje playlisty a manifesty. Pre povolené
MOV-famílie kontajnery zostávajú externé MOV dátové odkazy predvolene zakázané,
a pevný príkaz sa na ne neprihlasuje. Oba `ffprobe` a `ffmpeg` používajú
iba protokol `file` whitelist, jeden vlákno, pevné argumentové polia, žiadny shell,
a spustiteľné súbory sa riešia z `PATH`. Pripojené obrázkové krycie prúdy nie sú
hrateľné kandidáty. Všetky hrateľné prúdy musia spĺňať limity, a explicitný
predvolený prúd je preferovaný pred deterministickým najnižším indexom
náhradou. Videá sú obmedzené na 600 sekúnd, 8,192 pixelov na rozmer a
33,554,432 zdrojových pixelov. FFmpeg vzorkuje 1–16 stredových JPEG snímok, zmenšuje
dlhú hranu na maximálne 1,024 pixelov bez zväčšovania menších vstupov, a
nikdy nedostáva URL. Vzorkovanie je predvolene `uniform`. Voliteľné
`scene_aware` a experimentálne `segment_aware` politiky vykonávajú jeden ďalší
pevný FFmpeg prechod nad už validovaným lokálnym prúdom, vyberajú obmedzené
`showinfo` časové pečiatky scén a deterministicky sa vracajú k rovnakým
uniformným stredom pri zlyhaní detektora, časovom limite, nesprávnom výstupe
alebo prázdnej sade kandidátov. Mód segment-aware prideľuje stredové vzorky
proporčne k validovaným časovým intervalom scén; segment-aware dôkazy a
náhradné správanie sú podrobne popísané nižšie. Pevný limit 16 snímok je
aplikovaný po výbere v každej politike. Keď má požiadavka s vedomím scény
iba rozpočet na jednu snímku, používa uniformný stred aktívneho celého videa
alebo zameraného okna a hlási `policyEffective: uniform`: jediná vybraná
snímka scény nemôže zachovať oba časové konce. Volajúci môže voliteľne poskytnúť
konečné zamerané okno (`start`/`end` sekundy); hranice sú obmedzené na trvanie
mediat, obrátené alebo nekonečné okná sú zamietnuté, a všetky vzorkovacie
politiky sa vykonávajú iba v rámci normalizovaného intervalu. Výsledné
okno je zahrnuté v metadátach vzorkovania a v nepodporovanej popisnej
predponke, aby mohli downstream modely rozlíšiť zameraný úryvok od celej
časovej osi.

Sémantické zameranie titulkov je samostatné, explicitné nastavenie. Predvolený
`full` analytický režim zachováva existujúci rámcový prompt a nikdy neposiela
text požiadavky do modelu titulkov. V `focused` režime most číta iba najnovší
neprázdny text/autorský `text`/`input_text` z rovnakého kontajnera Chat alebo
Odpovede, normalizuje ho na NFC, zlučuje ovládacie znaky a prázdne miesta,
a obmedzuje ho na 500 Unicode kódových bodov. Prázdny výsledok sa vracia k
presnému `full` promptu. Použiteľný náznak je serializovaný ako JSON v
vyhradenom bloku kontextu nepodporovaného používateľa a môže iba uprednostniť
pozorovateľné detaily; nemôže prekonať samostatné varovanie proti sledovaniu
inštrukcií viditeľných alebo počuteľných v médiu. Textové zameranie nikdy
neodvodzuje `start`/`end` alebo nemení časového vzorkovača.

#### FU-07 štrukturálny segmentový dôkaz

`segment_aware` používa jeden obmedzený pre-analytický prechod nad už validovaným
lokálnym video prúdom. Pevný filter reťazec najprv zmenšuje na maximálne 320 pixelov
na šírku, detekuje zmeny scén a zmrazené intervaly, potom vzorkuje 1 snímku za
sekundu pre rozmazanie, priemernú luminiscenciu a priestorové/časové informácie. Prechod je
obmedzený na 600 štrukturálnych vzoriek, jedno FFmpeg/filter vlákno, rovnaké
povolené zoznamy protokolu a kontajnerov `file`-only, limit výstupu procesu 1 MiB,
a maximálne 30 sekúnd v rámci zdieľaného abort/deadline brokera. Nikdy
neakceptuje príkaz, filter, cestu alebo URL z požiadavky.

Štrukturálne hodnoty sú deterministické vzorkovacie dôkazy, nie sémantické video
pochopenie. Nevyvodzujú subjekty, akcie, titulky, reč ani úmysel používateľa. Hranice scén a zmrazenia tvoria segmenty; pokrytie zmrazenia, rozmazanie,
expozícia, priestorové detaily a časová zmena ovplyvňujú iba to, ako je existujúci
rozpočet 1–16 snímok rozdelený. Úplne zmrazený segment je obmedzený na jednu snímku,
kým nezmrazené segmenty súťažia o zvyšný rozpočet. Keď hranice prevyšujú snímky,
zachováva sa jednotné pokrytie časovej osi, takže rýchle skoré strihy nemôžu skryť
dlhý nasledujúci segment. Hranice scén v rámci 1-sekundovej
analytickej rozlíšenia zmrazenia sú zlučované.

Chýbajúce filtre, nesprávne/ prázdne dôkazy, chyba detektora alebo obmedzený
časový limit predanalýzy zlyhávajú otvorene na presnú jednotnú politiku
stredného bodu. Zrušenie volajúceho alebo termín sprostredkovateľa nezlyháva
otvorene: ukončuje prebiehajúci subprocess, zabraňuje neskoršiemu extrahovaniu
snímok a súkromný dočasný strom je odstránený v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické reálne FFmpeg
prípravky pre úspory po deduplikácii titulkov, rozdelenie rozpočtu na hustý pohyb,
dôkazy rozmazania/expozície/SI-TI, rýchle strihy s dlhým chvostom a falošné pozitíva
postupného vyblednutia. Zaznamenáva čas steny predanalýzy a, kde je k dispozícii
`/usr/bin/time`, CPU dieťaťa a vrcholový RSS. Jeho kvalitatívne kontroly sú
strukturálne orákuly iba. Skutočná kvalita modelu titulkov zostáva `HOLD`, pretože
tento systém nemá autorizovaný koncový bod ani zmrazeného sudcu. Finančné úspory
tiež zostávajú `HOLD`, pokiaľ `--caption-cost-per-call-usd` neposkytne explicitný
kladný odhad na volanie; skript nikdy nevytvára ani jeden výsledok.

Každá snímka je obmedzená na 4 MiB, všetky surové snímky spolu na 23 MiB a
serializovaná odpoveď sprostredkovateľa na 32 MiB. Súkromný dočasný adresár je
odstránený v `finally`. OmniRoute nezlučuje FFmpeg a neprijíma vlastnú
cestu k spustiteľnému súboru. Pred titulkovaním most aplikuje konzervatívny
vizuálny deduplikáciu: každý JPEG je zredukovaný na 16×16 odtieňov šedej a
porovnáva sa iba s poslednou zachovanou snímkou. Pre požadovaný rozpočet titulkov
nad jednu snímku, extrakcia poskytuje
obmedzený kandidátsky bazén až do dvojnásobku tohto rozpočtu a nikdy viac ako 16
snímok. Požadovaný strop sa aplikuje iba po deduplikácii, pričom prvé a
posledné vybrané kandidáty sú zachované počas konečného zúženia, keď je rozpočet
aspoň dva. Verziovaná
`grayscale-16x16-mean-cells-v2` politika používa väčšiu z priemerného luma delta a
pomeru buniek náhľadu, ktorých normalizovaný delta je aspoň 0.05. Prah
duplicitných snímok je konštanta 0.04, vybraná pre predvídateľnosť, nie
exponovaná ako nastavenie za behu. Tento sekundárny
vysokokontrastný signál zachováva malé pohyby a zmeny viditeľného textu, ktoré
môže skryť porovnanie iba s priemerom. Chyby porovnávača alebo dekodéra
zlyhávajú otvorene a zachovávajú pokrytie. Výstupné metadata oddeľuje
extrahovaných kandidátov, úspešne použitých snímok a vizuálne duplicitné snímky.

Výslovne označená časť videa môže požiadať o časovo označený kontaktný list. Most
vytvára maximálne 4-stĺpcovú, 16-snímkovú JPEG mriežku. Každá bunka s rozmermi
512 pixelov vypáli svoj časový údaj do vysoko kontrastného spodného pásu, zatiaľ čo
tie isté časové údaje zostávajú v textových metadátach pre neskoršie
priradenie a audit. Kompletný JPEG zostáva obmedzený na 32 MiB. Ak `sharp` nemôže
dekódovať alebo zostaviť mriežku, most prechádza na jednotlivé JPEG snímky; zrušenie
klienta sa stále propaguje cez operáciu listu.

Dôkazy o propagácii sú zámerne oddelené od syntetického zloženia
mikrobenchmarku. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje
schému verziovaného A/B systému pre skutočné modely vízie kompatibilné s OpenAI.
Meria tokeny hlásené poskytovateľom, latenciu od konca po koniec (vrátane
zloženia listu), počet volaní modelu a zachovanie faktov definovaných v manifeste.
Surové odpovede modelu nie sú zapísané do správy; iba SHA-256 digesty a
zhodné ID faktov sú zachované. Systém nevykonáva žiadne sieťové alebo platené
volanie modelu, pokiaľ nie je zadané `--execute-real` a `--model`,
`OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY` sú nakonfigurované. Bez
tohto explicitného reálneho behu zostáva jeho strojovo čitateľný verdikt `HOLD`;
syntetické merania payload/počet volaní samy osebe nie sú dôkazom o propagácii.

Samostatný `scripts/perf/video-bridge-promotion-eval.ts` spracováva
pozorovania FU-07 alebo FU-09. Prijatie propagácie vyžaduje všetkých osem
syntetických scenárov plus sanitizovaný skutočný klip, aspoň tri merané
opakovaní na rolu a prípad, všetkých desať deklarovaných metrík, zmrazené
médiá/prompt/očakávané-fakty/nastavenia digesty, jedinečné ID pozorovaní a
overený zasadený A/B poradie. Príjem vykonania viaže digest corpus, presný
SHA kandidáta a revíziu modelu. Chýbajúce alebo neplatné merania zostávajú
`HOLD`, vrátane CPU nad 30 s, vrcholový RSS nad 512 MiB alebo predanalýza
nad 30 s. Tieto sú stropy pre prijatie dôkazov, nie nová záruka vynútenia
RSS za behu.

FU-07 vyžaduje aspoň 98% zachovanie kvality a p95 latenciu nie viac ako 1.2x
základ, plus buď 0.05 absolútnu vyváženú priemernú zlepšenie pripomienky pri
ekvivalentných priemerných volaniach titulkov, alebo aspoň 10% menej priemerných
volaní titulkov po deduplikácii. FU-09 vyžaduje aspoň 0.85 kvalitu, 95%
zachovanie, 20% zníženie p95 latencie a 10% zníženie tokenov. Strata kritických
faktov, dodržiavanie injekcií alebo chýbajúce použitie bráni propagácii. Jedno
vykonanie nemôže propagovať nič: `--previous-report` potvrdzuje dve
odlišné, neprekrývajúce sa, po sebe idúce oprávnené vykonania tej istej
politiky/revízie modelu/kandidáta/corpus. Experiment so vzorkovaním nemôže
potvrdiť experiment s kontaktným listom.

Zberatelia by mali hodnotiť odpovede v pamäti a uložiť `responseDigest` spolu s metrikami a pozorovacími väzbami, nikdy nie text odpovede. Spotrebiteľ tiež číta staré surové pozorovania, ale nikdy nekopíruje tento text do svojich správ. Presne jedna z `responseDigest` alebo `rawResponseText` je akceptovaná pre každé pozorovanie. Verziovaná povolená lista zostáva prázdna s nemenným predvoleným `hold`. Oprávnený záznam vyžaduje jeho referenciu dôkazu, politiku, revíziu modelu, presný SHA kandidáta, manifest digest a dve odlišné ID behu; konfliktné kontexty sú zamietnuté. Tieto metadata sú audítorskou zmluvou, nie dôkazom, že odkazovaný súbor obsahuje skutočné merania. Skontrolujte skutočné potvrdenia pred pridaním akéhokoľvek záznamu. Koncový bod štatistík správy a Video panel zobrazujú konzervatívnu pripravenosť. Iba nakonfigurovaná alias modelu nezakladá jeho revíziu ani bežiaci SHA kandidáta, takže aktuálny panel hlási `HOLD` namiesto opätovného použitia oprávnenosti z iného vykonávacieho kontextu. Explicitný experimentálny výber zostáva oddelený od propagácie; žiadne predvolené nastavenie sa automaticky nezmení.

Volajúci môžu pripojiť voliteľné pole `transcript.cues` k podporovanej časti videa, keď už majú zarovnaný text. Každý cue musí obsahovať `text`, konečný `start`/`end` interval v rámci skúmanej dĺžky a schválený `source` (`client`, `embedded` alebo `audio-bridge`); `confidence` má predvolenú hodnotu `1` a musí zostať medzi `0` a `1`. Presné duplicitné cue sú zlučované. OmniRoute nikdy nezačína transkripciu z týchto metadát: validované cue sú skopírované do opísaného výsledku so zdrojom, dôverou a intervalom a sú zobrazené ako nedôveryhodné pozorovania vedľa titulkov snímok. Neplatný, mimo rozsahu alebo bez pôvodu text je zamietnutý, namiesto toho, aby bol zmiešaný do toku titulkov. Obe kanály textu transkripcie v tele požiadavky normalizujú dodaný pôvod na `client`, vrátane samo-určených `embedded` alebo `audio-bridge` označení. Iba adaptér vlastnený serverom môže priradiť tieto dôveryhodné označenia prostredníctvom argumentu iba pre kód `trustedSource`; pole JSON požiadavky nemôže dosiahnuť tento argument. Text transkripcie zostáva nedôveryhodným obsahom odvodeným z médií, bez ohľadu na jeho pôvod, a nikdy nesmie určovať autorizáciu.

Pokročilý volajúci môže poskytnúť stopu `audioTranscript` pre rovnaké video; je považovaná za text poskytnutý klientom, nie dôkaz serverovej transkripcie. Spojovací šev spúšťa vizuálne a audio pozorovania pod jedným termínom a signálom na zrušenie, usporiada ich na spoločnej časovej osi, zlučuje presné duplikáty a hlási čiastočný výsledok, keď uspeje iba jedna strana. Neplatný `audioTranscript` degraduje na tento čiastočný výsledok — vizuálny popis je zachovaný a audio vetva zaznamenáva sanitizovaný kód zlyhania — namiesto toho, aby zlyhal celý video. Dostupnosť na vetve, čiastočná vlajka a sanitizované kódy zlyhania sú zachované v opísanom výsledku, v metadata ochranného pásma (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), v metadata cache výsledku a v počítadlách fúzie mosta. Predvolená cesta Video Bridge nevyvoláva prevod reči na text ani nestiahne druhú kópiu médií; bez tejto explicitnej stopy zostáva iba video.

**Zachovanie transkripcie (#12150 P1).** Toto sa automaticky uplatňuje vždy, keď Video Bridge (sám opt-in) vykreslí cue transkripcie — neexistuje žiadna samostatná vlajka pre zachovanie. Keď požiadavka vykreslí akýkoľvek cue transkripcie (volajúci deklarovaný `transcript` alebo zlúčený `audioTranscript`), ochranné pásmo ho označuje ako `videoBridgeObserved` a vytvára redigovaný tieň video popisu — identické vykreslenie, v ktorom je telo voľného textu každého cue nahradené `"[redacted-video-transcript]"`, vytvorené substitúciou štruktúrovaného poľa cue pred zostavením reťazca (nikdy nie analýzou zplošteného textu, takže žiadny obsah cue — nepriateľský alebo obyčajný, vrátane telies obsahujúcich `]`, ako napríklad `"[inaudible]"`/`"[music]"` — nemôže prežiť). Uložené telo požiadavky v protokole vymení každú časť textu odvodeného z videa za ten redigovaný tieň, zodpovedajúci obsahovej rovnosti; ukotvenie `fullText` sa znovu prečíta z dokončeného predvolania ochranného pásma, takže zhodovanie stále uspeje po neskorších ochranných pásmach (maskovače PII a poverení, priority 10/95) prepíšu text popisu na mieste a po systémovom výzve/predaní/vstrekovaní pamäte preformátujú pole správ. Telo odoslané nahor modelu zostáva nezmenené. Pozorovaná požiadavka tiež nepopulárne zapĺňa žiadnu trvalú pamäť (obidve extrakcie odvodené z požiadavky a odpovede sú preskočené), takže odpoveď modelu nemôže odrážať text transkripcie do pamäte.

**Surové video polia (#12430).** Keď je most povolený a natívna podpora videa je neznáma alebo chýba, definované polia `transcript`/`audioTranscript` tiež aktivujú `videoBridgeObserved`, aj po zlyhaní popisu alebo limite `maxVideos`. `null` a prázdne reťazce sa počítajú; chýbajúce polia a nemediálne metadata nie. Zachované kópie redigujú tieto polia alebo vynechávajú požiadavku, a cache/pamäť sú obídené. Náklad poskytovateľa zostáva nezmenený.

Ďalšie zachované kópie používajú rovnaký signál pozorovanej požiadavky. Surový snímok požiadavky klienta pred ochranným pásmom, čakajúca požiadavka v pamäti a skorý protokol zamietnutej požiadavky štrukturálne nahrádzajú polia transkripcie vo video častiach; reťazcové výzvy syntetizované fázami potrubia a kontextovým predaním sú redigované na mieste uloženého tela požiadavky. Uložený marker `video_content_removed` spôsobuje, že pokračovanie `previous_response_id` zlyhá uzavretím, namiesto toho, aby rekonštruovalo text, ktorý bol úmyselne vyhodený. Ak pozorovaná požiadavka stratí svoj redigovaný tieň pred protokolovaním, alebo ak dokonca jeden z niekoľkých video tieňov zlyhá v zhode po neskorších mutáciách požiadavky, zachované telo požiadavky je úplne vynechané namiesto toho, aby sa zachoval čiastočne redigovaný transcript.

Pre pozorovanú požiadavku môže modelová odpoveď citovať akúkoľvek časť prepisu bez štruktúrovaného hranice nápovedy. Jeho uchovávaný záznam volania `responseBody` je preto nahradený značkou vynechania; podrobný artefakt pipeline (ktorý môže obsahovať upstream/klientské telá a prúdy) nie je uchovaný. Sémantické, idempotentné a reasoning-replay cache obchádzajú čítania a zápisy pre túto požiadavku. Požiadavka poskytovateľa a odpoveď viditeľná pre klienta zostávajú nezmenené. Počiatočné keepalive bajty sú odčerpané z dočasného bufferu, keď je podrobný artefakt vynechaný. Kirova varovná správa o nesprávnom EventStream hlási iba počet bajtov payloadu, nikdy jeho obsah alebo surovú chybu JSON parsera.
Toto netvrdí, že každý nesúvisiaci diagnostický nástroj poskytovateľa/pluginu bol audítovaný; širšie uchovávanie sinky je sledované v #11658.

Interný `/api/modality-bridge/video/drilldown` životný cyklus je samostatný, loopback/token-authentifikovaný cache substrát. Každá operácia tiež vyžaduje kanonické nepriehľadné ID hlavného subjektu. Predtým, ako je povolený produkčný volajúci, musí odvodiť toto ID z autentifikovaného nájomcu a nikdy nesmie poslať hodnotu vybranú klientom. Kľúče cache viažu tohto hlavného subjektu na kanonické ID relácie a video-referencie, uchovávajú iba ich kľúče odvodené z SHA-256 a obmedzujú čítania a vymazanie na toho istého hlavného subjektu. Cache uchováva maximálne 16 odvodených JPEG snímok na záznam, vyprší ich platnosť po desiatich minútach a podporuje obmedzené čítania `start`/`end` alebo explicitné vymazanie relácie.

Každý hlavný subjekt je obmedzený na 16 záznamov a 64 MiB kanonických JPEG dát. Tieto limity sú nezávislé od globálneho stropu 64 záznamov/256 MiB: tlak na kvótu hlavného subjektu vyháňa iba najmenej nedávno používané záznamy tohto hlavného subjektu predtým, ako sa zváži globálne LRU vyháňanie. Expirujúce záznamy sú vymazané z účtovania hlavného subjektu aj globálneho pri aktivite cache, zatiaľ čo zrušenie a zlyhanie validácie nezaväzujú čiastočnú náhradu.

Cache odmieta nekanonické Base64, nadbytočné vyplnenie, ne-JPEG médiá, nesprávne alebo skrátené JPEG a JPEG, ktoré produkujú varovanie počas obmedzeného dekódovania celej snímky `sharp`. Každý prijatý obrázok prekóduje ako kanonický JPEG, odvádza šírku a výšku z dekódovaných bajtov namiesto dôvery v polia volajúceho a zahadzuje akékoľvek koncové polyglot bajty namiesto ich uchovávania. Iba obmedzený kanonický komprimovaný buffer je účtovaný obom kvótam. JSON drôtový limit zahŕňa Base64 overhead pre strop dekódovaného vstupu 32 MiB. Každé
uchovávané odvodenie zaznamenáva jeho validovaný JPEG formát/rozlíšenie, politiku vzorkovania,
verziu odvodenia, čas vytvorenia, serverom vypočítaný obsahový hash a hash rodičovskej referencie plus hash rodičovského obsahu dôveryhodného volajúceho. Zrušenie sa kontroluje medzi asynchrónnymi fázami dekódovania/hashovania pred atómovým potvrdením cache.

Produkčný producent znovu používa už odvodené broker snímky iba po úspešnej vizuálnej analýze, bez druhého sťahovania/extrakcie videa. Vyžaduje operátora `modalityBridgeVideoDrilldownEnabled=true`, prísne per-part `drilldown: true` a autentifikovaný ID záznam API-kľúča. Klientom deklarované hodnoty hlavného subjektu/relácie nikdy nezakladajú vlastníctvo. Bez všetkých troch podmienok nehashuje, nezmenšuje ani neuchováva ďalšie snímky. Zlyhanie uchovania zachováva použiteľnú vizuálnu odpoveď. Súhlasné požiadavky obchádzajú cache výsledkov celého videa, takže uchovávané výsledky nikdy neprehrávajú handle.

Úspešné JSON a SSE odpovede odhaľujú maximálne štyri nepriehľadné handle v obmedzenom `x-omniroute-video-drilldown` hlavičke. Autorizované prehliadačové pôvody môžu čítať túto hlavičku bez rozšírenia politiky CORS pôvodu. Nové handle používajú `v1.<32-byte random base64url token>`, a registrácia uchováva iba
ich SHA-256 hashe. Čítač/analýza hlavičky tiež akceptuje dedičné 64-hex tokeny. Autentifikovaný verejný spotrebiteľ je
`GET /api/v1/video-bridge/drilldown?handle=...`, nezávisle zabezpečený `modalityBridgeVideoDrilldownRemoteEnabled=true`. Explicitne uchovávané false odníma prístup aj v prípade, že je povolený dedičný `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env fallback. Produkčné uchovanie má analógový dedičný `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Obe fallbacky sú predvolene vypnuté.

Spotrebiteľ odvádza vlastníctvo z autentifikovaného kľúča, aplikuje politiku kľúča a vracia rovnaké 404 pre neznáme, expirujúce a handle iného kľúča. Akceptuje `variant=preview|standard|detail` (maximálne JPEG rozmery 320/640/1280, nikdy neupscaled),
`limit=1..8` (alebo dedičný alias `frames`, nikdy oboje), nula-založenú `page` a voliteľné
`start`/`end` sekundy zamerania. Duplicitné
kľúče dopytu a obrátené okná zamerania sú odmietnuté. Každý vrátený variant má hash
svojho skutočného obsahu a skutočné rozlíšenie metadát, prepojené na uchovávaný zdroj.
Varianty sú odvodené pri čítaní, nie uchovávané ako extra uchovávané kópie. JSON
odpoveď, vrátane Base64/envelope, je obmedzená na 32 MiB; nadmerná stránka vracia 413 a klient musí požiadať o menej snímok. Čítania kontrolujú zrušenie okolo každého zmenšenia a znovu kontrolujú platnosť handle pred vrátením. `DELETE` od vlastníka je idempotentné;
vymazanie alebo vypršanie TTL uvoľňuje uchovávaný zdroj a účtovanie použitia.

Zdieľaný obchod je procesovo-lokálny: handle vypršia pri reštarte a nie sú prenosné
medzi nezávislými OmniRoute procesmi. Štatistiky správy odhaľujú efektívne uchovávanie/
ďalšiu politiku a agregované uchovávané záznamy/bajty iba, nikdy médiá, referencie,
ID hlavných subjektov alebo handle. Panel nastavení videa zobrazuje tieto hodnoty a môže uchovávať
obe prepínače súhlasu. Táto dokumentácia implementácie nie je dôkazom živého nasadenia alebo propagácie; akceptácia reálneho modelu je sledovaná samostatne.

Rámce sú označené postupne s nakonfigurovaným modelom videa. Prázdny
prepis videa dedí nastavenie vízie; ak sú oba prázdne, automatický smerovač vízie
vyberie účinný model schopný vízie. Úspešné titulky nahrádzajú pôvodnú časť
stabilným prefixom `[Video description:` ktorý tiež označuje text ako
nedôveryhodnú pozorovanie odvodené z médií a hovorí downstream modelom, aby
nesledovali pokyny nájdené v médiu. Kľúče vyrovnávacej pamäte pre titulky rámcov
zahŕňajú JPEG bajty, výzvu, časovú pečiatku a účinný model; iba úspešné
titulky sú vyrovnávané. Záznamy v cache uchovávajú skutočný úspešný model
producenta, vrátane záložného modelu; most hlási `mixed`, keď boli rôzne
rámce vyprodukované rôznymi modelmi. Zásah do cache opätovne používa túto
identitu producenta namiesto toho, aby ju prelabeloval ako požadovaný plán
smerovania. Cache výsledkov celého videa je kľúčovaná na každý vstup, ktorý
mení výstup — výzva, účinný model, politika vzorkovania, počet rámcov,
režim sémantickej analýzy, SHA-256 odtlačok normalizovanej nápovedy
fokusu, okno fokusu, `transcript`,
`audioTranscript` a vlajka kontaktnej stránky — takže zmena akýchkoľvek
týchto dimenzií je zásah do cache, nikdy nie zastarané opätovné použitie.
Verzia politiky vizuálnej deduplikácie, prah a obmedzený počet kandidátskych
rámcov sú tiež explicitné v kľúči a metadátach vyrovnávacej pamäte; zmena
politiky preto nemôže opätovne použiť zastaraný popis celého videa. Metadata
vyrovnávacej pamäte v4 uchováva režim a odtlačok, nikdy surovú úlohu používateľa.
Metadata ochranného pásma hlási ako požadované, tak aj účinné režimy analýzy;
požadovaný režim `focused` bez použiteľného textu používateľa je hlásený
ako účinne `full`.

Ochranné pásmo extrahuje každú podporovanú časť videa, ale popisuje
najviac `modalityBridgeVideoMaxVideos`. Pre cieľ, ktorý sa preukázal ako
`supportsVideo === false`, sa zlyhané a nadlimitné videá stávajú explicitnými
bezpečnými textovými značkami, takže žiadne surové video neprežije. Keď je
schopnosť neznáma, tieto časti zostávajú nedotknuté. Ciele s
`supportsVideo === true` obchádzajú most. Signál abort klientskej požiadavky
sa šíri cez sťahovanie, frontu brokerov, podprocesy a volania titulkov;
aborty sa zastavujú medzi videami a nikdy neotvárajú na surové médiá.

Nastavenia behu sú podporované DB a validované Zod:

| Kľúč                                | Predvolená hodnota | Rozsah / správanie                                                                                            |
| ----------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`            | Voliteľný beh, opt-in                                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`           | `full` zachováva všeobecné titulky; `focused` používa obmedzený, nedôveryhodný kontext posledného používateľa |
| `modalityBridgeVideoModel`          | `""`               | Dediť model mosta vízie                                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`                | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`        | `uniform`, `scene_aware` alebo proporcionálne `segment_aware`; zlyhanie detektora prechádza na `uniform`      |
| `modalityBridgeVideoMaxVideos`      | `1`                | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`           | 1000–120000 ms                                                                                                |

Hodnoty časového limitu pretrvávajúceho videa nad 120 sekúnd sú obmedzené na
termín brokerov; nové nastavenia nad touto hranicou sú odmietnuté.
`GET /api/modality-bridge/video/runtime` vyžaduje dôveryhodnú pečiatku
smyčky lokality pred autentifikáciou alebo testovaním behu, potom vyžaduje
autentifikáciu správy. Vracia iba `available`, sanitizované verzie FFmpeg/ffprobe
a fixný dôvod, keď je beh nedostupný. Interný koncový bod pre extrakciu nie je
verejné API pre nahrávanie: saturácia frontu vracia `503` plus `Retry-After`,
odpojenie volajúceho vracia `499` a fixný termín brokerov vracia `504`.
Prevedené odpovede pridávajú `video->text;model=<visionModel>;parts=<videos>` do centrálneho
`x-omniroute-modality-bridge` hlavičky bez odstránenia segmentov vízie alebo zvuku.

### PII Masker (`piiMasker.ts`)

Beží na **oboch** fázach.

- **`preCall`** klonuje payload, prechádza `system`, `messages`, `input` a
  `prompt` (vrátane obyčajných reťazcových položiek) a aplikuje `processPII()`
  (z `@/shared/utils/inputSanitizer`) na reťazcové polia `content`/`text`. Keď
  je `PII_REDACTION_ENABLED=true`, detekovaný PII je redigovaný v odchádzajúcom
  payload. Toto je nezávislé od `INPUT_SANITIZER_MODE` (ktorý iba ovláda
  politiku injekcie výzvy). Keď je redigovanie vypnuté, záznam volania
  zaznamenáva počty detekcie bez prepisovania obsahu.
- **`postCall`** hlboko klonuje odpoveď, spúšťa `sanitizePIIResponse()` plus
  maskér tvaru Responses-API (`maskResponsesOutput` — pokrýva
  `output_text` a `output[].content[].text`). Ak dôjde k akémukoľvek redigovaniu,
  upravená odpoveď nahrádza pôvodnú.

Ochranné pásmo nikdy nezablokuje; iba anotuje (`meta.detections`,
`meta.redacted`) alebo prepisuje.

### Prompt Injection (`promptInjection.ts`)

Detekuje nepriateľské štruktúry v obsahu poskytnutom používateľom a vynucuje
nastavenú politiku. Správanie je riadené premennými prostredia a možnosťami
konštruktora:

| Nastavenie      | Env var                                                                                                | Predvolené | Účinok                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Povolené        | `INPUT_SANITIZER_ENABLED`                                                                              | `true`     | Keď je `false`, ochranný mechanizmus sa skráti.                                                                                                                                                  |
| Režim           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`     | Politika injekcie: `block`, `warn` alebo `log`. (`redact` je akceptované pre spätnú kompatibilitu, ale **neodstraňuje** text injekcie; žiadosť o prepis PII je riadená `PII_REDACTION_ENABLED`.) |
| Prah blokovania | `blockThreshold` možnosť / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`     | Minimálna závažnosť potrebná na blokovanie. Stredná je predvolene iba na pozorovanie.                                                                                                            |

**Priorita režimu** (`getMode`): volajúci `options.mode` →
`INJECTION_GUARD_MODE` **prepisovanie funkcie DB** (Dashboard → Nastavenia →
Funkčné vlajky) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Prepisovanie na palubnej doske teda vyhráva nad env premennými, takže UI funkčných vlajok ovláda behúci ochranný mechanizmus naživo (bez reštartu). Čítanie z DB je bezpečné:
ak nastane chyba, ochranný mechanizmus prejde na správanie založené na env, a keď nie je nastavené žiadne
prepisovanie, správanie je identické s riešením iba na základe env.

Zdroje detekcie:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (zdieľaný detektor
   použitý aj inde v pipeline).
2. Vstavané `DEFAULT_GUARD_PATTERNS` (aktuálne `system_override_inline` a
   `markdown_system_block`, obidve s `high` závažnosťou).
3. Voliteľné `customPatterns` odovzdané cez konštruktorové možnosti (reťazce, regex,
   alebo `{ name, pattern, severity }` záznamy).

Keď `mode === "block"` **a** aspoň jedna detekcia spĺňa prah závažnosti,
`preCall` vracia `{ block: true, message: "Žiadosť zamietnutá: detekovaný podozrivý obsah" }`. V režimoch `warn`/`log` ochranný mechanizmus zaznamenáva, ale
umožňuje volanie. Zdieľaný pomocník `evaluatePromptInjection()` je tiež exportovaný
pre volajúce subjekty, ktoré potrebujú vyhodnotiť výzvy bez prechádzania registri.

**Skenovanie obmedzené (v3.8.20):** detektor kontroluje iba **prvých 16 KB**
spojeného textu výzvy — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Obidve `detectInjection()` a
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` pred spustením
cyklu vzorov. Injekčné direktívy sa nachádzajú blízko vrchu vstupu, takže to
obmedzuje CPU/GC regex na multi-hundred-KB nákladoch bez oslabenia detekcie (porov.
#3932, #4041).

### Maskovač poverení (`credentialMasker.ts`)

Beží na **oboch** fázach, posledný v predvolenom reťazci (priorita `95`). Odstraňuje
známe vzory API-kľúčov / tajných tokenov z odchádzajúceho nákladu (obsah správy,
argumenty volania nástroja, výsledky nástroja) **a** odpovede poskytovateľa, takže
poverenie vložené do výzvy (alebo vrátené výsledkom nástroja) nie je uniknuté
k upstream poskytovateľovi alebo späť k klientovi.

- **Iba na opt-in**, rovnaká konvencia ako PII redakcia (Hard Rule #20-adjacent):
  zakázané, pokiaľ `settings.credentialRedactionEnabled === true` **alebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Keď je to vypnuté, ochranný mechanizmus je bez účinku —
  nikdy neblokuje a nikdy neprepisuje.
- `redactCredentials()` prechádza celým stromom nákladu/odpovede (`walkValue()`,
  bezpečné voči znečisteniu prototypu, bezpečné voči cyklom cez `WeakSet`) a nahrádza zhody
  s `[REDACTED:<type>]` zástupným symbolom, klonujúc iba vetvy, ktoré sa skutočne
  zmenili.
- `CREDENTIAL_PATTERNS` pokrýva kľúče poskytovateľov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokeny (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platobné kľúče (Stripe, Square), cloud
  kľúče (AWS access key, Twilio, SendGrid, Mailgun), súkromné kľúče / JWT,
  reťazce pripojenia obsahujúce poverenia (`mongodb://user:pass@...`, atď.), a
  generický vzor hlavičky `Authorization`/`x-api-key`/`api-key`/`apikey`. Kľúče tvaru hlavičky
  (`authorization`, `x-api-key`, `api-key`, `apikey`) sú štrukturálne odstraňované (iba hodnota, schéma prefix ako
  `Bearer `/`Basic ` zachovaná) namiesto cez generický textový regex.
- Ochranný mechanizmus nikdy neblokuje; iba prepisuje (`modifiedPayload` /
  `modifiedResponse`) a anotuje (`meta.credentialsRedacted`, `meta.count`).

Regresný ochranný mechanizmus: `tests/unit/credential-masker-guardrail.test.ts`.

## Základný kontrakt (`base.ts`)

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
  block?: boolean; // hodnota true okamžite ukončí reťazec
  message?: string; // zobrazí sa pri blokovaní
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrátené metódou preCall na úpravu požiadavky
  modifiedResponse?: TValue; // vrátené metódou postCall na úpravu odpovede
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

Ochranný mechanizmus signalizuje „bez zmeny“ vrátením hodnoty `void`, `{}` alebo
`{ block: false }`. Vrátenie hodnoty `modifiedPayload`/`modifiedResponse` nahradí
hodnotu prechádzajúcu reťazcom pre nasledujúce ochranné mechanizmy.
`signal?: AbortSignal` prenáša životný cyklus volajúceho do ochranných mechanizmov. Prerušenie požiadavky je zámernou výnimkou typu fail-open: mediálne mosty zastavia prácu a vykonajú vyčistenie bez obnovenia nespracovaných médií pre cieľ, o ktorom je známe, že ich nepodporuje.

## Register (`registry.ts`)

Jediná inštancia `guardrailRegistry` poskytuje:

- `register(guardrail)` — pridá ochranný mechanizmus (alebo ho nahradí podľa normalizovaného názvu) a
  opätovne zoradí mechanizmy vzostupne podľa `priority`.
- `clear()` / `list()` — administratívne pomocné metódy.
- `runPreCallHooks(payload, context)` — prechádza aktívnymi ochrannými mechanizmami, odovzdáva
  payload prostredníctvom `modifiedPayload` a zastaví sa pri prvom výskyte `block: true`.
- `runPostCallHooks(response, context)` — rovnaký postup na strane odpovede.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a voliteľne
  znova zaregistruje predvolené mechanizmy, aby sa zabezpečila čistá izolácia testov.

Obe spúšťacie metódy vracajú `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamov `GuardrailExecutionResult`, ktoré obsahujú
polia `blocked`, `skipped`, `modified`, `error` a `meta` pre každý ochranný mechanizmus,
čo je užitočné pri trasovaní.

### Vypnutie ochranných mechanizmov pre jednotlivé požiadavky

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` zhromažďuje
deduplikovaný zoznam názvov ochranných mechanizmov, ktoré sa majú pre aktuálnu
požiadavku preskočiť. Zdroje (všetky sú voliteľné a zlúčia sa):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v tele požiadavky (na najvyššej úrovni)
- `metadata.disabledGuardrails` v tele požiadavky
- Hlavička `x-omniroute-disabled-guardrails` (alebo staršia
  `x-disabled-guardrails`)

Hodnoty môžu byť polia reťazcov alebo reťazec oddelený čiarkami; názvy sa
normalizujú na malé písmená vo formáte kebab-case (`pii_masker` → `pii-masker`). Výsledok
sa prostredníctvom `context.disabledGuardrails` odovzdá registru, ktorý preskočí
zodpovedajúce ochranné mechanizmy (`skipped: true` v `results`).

## Poradie vykonávania

Pre každú požiadavku prechádzajúcu cez `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` zostaví zoznam vynechaných ochranných mechanizmov z kľúča API, tela požiadavky
   a hlavičiek.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spustí ochranné mechanizmy vo vzostupnom
   poradí priority:
   - Zakázané ochranné mechanizmy sa zaznamenajú ako `skipped`.
   - Metóda `preCall` každého ochranného mechanizmu môže prepísať dátový obsah prostredníctvom `modifiedPayload`.
   - Prvý výskyt `block: true` ukončí reťazec a obslužná rutina vráti
     odpoveď o odmietnutí ochranným mechanizmom.
3. (Potenciálne prepísaný) dátový obsah pokračuje do kombinovaného smerovania a následného
   odoslania nadradenému systému.
4. Po zostavení odpovede spustí `guardrailRegistry.runPostCallHooks(...)`
   rovnaký reťazec nad odpoveďou. Hodnota `block: true` v tomto bode zahodí odpoveď
   nadradeného systému.

Ochranné mechanizmy, ktoré vyvolajú výnimku, sa zaznamenajú s `error: <message>` a zapíšu do protokolu
prostredníctvom `logger.warn`, ale reťazec pokračuje — zámerne využíva princíp fail-open.

## Konfigurácia

Premenné prostredia čítané vstavanými ochrannými mechanizmami:

| Premenná                              | Používa ju                          | Účinok                                                                                                                                |
| ------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                  | Nastavením na `false` sa detekcia úplne zakáže.                                                                                       |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                  | Pravidlá pre injektáž: `warn`, `block` alebo `log`. Staršia hodnota `redact` text injektáže neprepisuje.                              |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                  | Režim ochrany proti injektáži; zároveň ide o príznak funkcie v databáze, ktorý **má prednosť** pred premennými prostredia (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                  | Minimálna závažnosť, ktorú režim `MODE=block` odmietne: `high` (predvolené), `medium` alebo `low`.                                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                  | Starší alias pre `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                        | Ak je nastavená na `true`, osobné údaje v požiadavke sa redigujú (nezávisle od režimu injektáže).                                     |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (následné spracovanie) | Ovláda správanie maskovania na strane odpovede.                                                                                       |

Ochranné mechanizmy Modality Bridge čítajú konfiguráciu za behu z úložiska nastavení
založeného na databáze (`getSettings()`), nie z premenných prostredia. Primárne kľúče pre Vision sú
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Staršie kľúče
`visionBridge*` sa akceptujú iba ako zdokumentované záložné hodnoty na čítanie počas jedného cyklu;
zápisy z ovládacieho panela používajú primárne kľúče. Predvolené hodnoty a záložný
resolver sa nachádzajú v `src/shared/constants/modalityBridgeDefaults.ts`, pričom staršie
konštanty zostávajú zachované v `src/shared/constants/visionBridgeDefaults.ts`.

Audio používa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` spolu so zdieľanými
nastaveniami `modalityBridgeCache*`. Audio nemá záložný mechanizmus pre staršie kľúče, pretože tieto
kľúče boli zavedené spolu so schémou Modality Bridge.

Video používa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout` spolu so zdieľanými nastaveniami `modalityBridgeCache*`.
V predvolenom nastavení je zakázané, pretože FFmpeg/ffprobe sú voliteľné prevádzkové
závislosti a opis snímok zvyšuje latenciu a náklady na model.

## Vlastné ochranné mechanizmy

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Denný rozpočet bol prekročený" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Postup:

1. Vytvorte `src/lib/guardrails/myGuardrail.ts`, ktorý rozširuje `BaseGuardrail`.
2. Implementujte `preCall` a/alebo `postCall`.
3. Buď ho zaregistrujte pri importe (pridaním z `registerDefaultGuardrails`), alebo
   zavolajte `guardrailRegistry.register(...)` za behu — register nahradí
   každý predchádzajúci ochranný mechanizmus s rovnakým normalizovaným názvom.
4. Pridajte testy do `tests/unit/` (existujúce príklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testovanie

Medzi testami používajte `resetGuardrailsForTests()`, aby ste začali zo známeho stavu.
Ak chcete začať s prázdnym registrom a zaregistrovať iba testované ochranné mechanizmy,
odovzdajte `{ registerDefaults: false }`. Vision Bridge podporuje vkladanie závislostí
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge poskytuje ekvivalentné
body napojenia pre nastavenia, schopnosti, výber modelu STT, kontroly prihlasovacích
údajov a transkripciu. Testy tak môžu overiť oba toky bez prístupu k databáze
alebo sieti.

## Pozrite tiež

- `src/lib/guardrails/` — implementácia
- `src/shared/utils/inputSanitizer.ts` — zdieľaný detektor, ktorý zabezpečuje
  detekciu injektovania promptov a maskovanie osobných údajov
- `src/shared/constants/visionBridgeDefaults.ts` — predvolené nastavenia Vision Bridge a
  zoznam modelov s vynúteným premostením
- `src/shared/constants/modalityBridgeDefaults.ts` — zdieľané predvolené nastavenia behu pre Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonálna vrstva (istič, doby čakania)
- `docs/reference/ENVIRONMENT.md` — úplný prehľad premenných prostredia

## Pokrytie trás ochranou pred injektovaním a red-team testovanie (Fáza 8 · Blok D)

Ochrana pred injektovaním (`createInjectionGuard` / `withInjectionGuard`) pokrýva všetky trasy,
ktoré prijímajú používateľské prompty. Rešpektuje `INJECTION_GUARD_MODE` (predvolená hodnota `warn` = iba zaznamenať;
`block` = vráti HTTP 400 `SECURITY_001`).

| Typ               | Trasy                                                                                                                                                | Predvolený režim |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Text (existujúce) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generatívne       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Dáta              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

Extrakcia textu (`extractMessageContents`) pokrýva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testovanie (každú noc, `nightly-llm-security.yml`):** promptfoo overuje, že každá trasa blokuje
korpus OWASP-LLM v režime `INJECTION_GUARD_MODE=block`; garak spúšťa sondy (bez tajného kľúča sa preskočí).
Trasa `moderations` je zahrnutá kvôli konzistentnosti — prevádzkovatelia ju môžu v režime blokovania vyňať
prostredníctvom `resolveDisabledGuardrails`.

Nočný pracovný postup (`.github/workflows/nightly-llm-security.yml`, cron + manuálne
spustenie) obsahuje dve úlohy:

- **`promptfoo-guard` (blokujúca)** — spúšťa `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý nepriateľský prípad (napr. „ignoruj všetky
  predchádzajúce pokyny…“, prelomenia obmedzení v štýle DAN) overuje, že odpoveď obsahuje
  `error.code === "SECURITY_001"`, t. j. ochrana požiadavku skutočne odmietla.
- **`garak` (poradná)** — spúšťa garak s `--probes promptinject,dan,leakreplay`
  voči lokálnej inštancii OmniRoute (`http://localhost:20128/v1`). Je podmienená dostupnosťou
  tajného kľúča poskytovateľa (`PROMPTFOO_PROVIDER_KEY`); ak nie je dostupný, úloha sa korektne
  preskočí a je zakončená `|| true`, takže iba hlási výsledky bez zlyhania CI.

Pokrytie pomocnej ochrany (`createInjectionGuard` / `withInjectionGuard`)
zahŕňa každú trasu `/v1`, ktorá prijíma prompt; text promptu sa získava z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocou
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
