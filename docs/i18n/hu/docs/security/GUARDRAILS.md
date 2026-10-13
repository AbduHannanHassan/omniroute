# Guardrails (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Hiteles forrás:** `src/lib/guardrails/`
> **Legutóbb frissítve:** 2026-08-29 — v3.8.51 (a Video Bridge átiratának eredetét a hívó deklarálja,
> a szerver még nem ellenőrzi — pontosítva a #11661 alapján)

A guardrailek biztonsági, szabályzati és tartalomátalakítási előírásokat érvényesítenek az OmniRoute és a külső szolgáltatók közötti határon. Minden guardrail megvizsgálhatja (és opcionálisan elutasíthatja, átalakíthatja vagy annotálhatja) a kérés hasznos adatait (`preCall`) és a külső szolgáltatók válaszait (`postCall`).

A rendszer **hiba esetén nyitott**: ha egy guardrail végrehajtás közben kivételt dob, a regisztrációs adatbázis rögzíti a hibát, és a kérés meghiúsítása helyett a következő guardraillel folytatja. A blokkolás mindig explicit döntés (`block: true`), soha nem véletlen.

## Beépített Védőkorlátok

A regisztráció automatikusan betölt hat védőkorlátot prioritási sorrendben importáláskor
(lásd `registry.ts` → `registerDefaultGuardrails()`):

| Prioritás | Név                 | Színpad(ok)    | Fájl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

A kisebb prioritású számok **először** futnak.

### Vision Bridge (`visionBridge.ts`) — Modalitás Híd PR-1

Elfogja a képet tartalmazó kéréseket, amelyek **nem-vizuális modellek** felé irányulnak, és vagy
átirányítja az egész kérést egy vizuális képességekkel rendelkező modellhez, vagy a képet
tartalmazó részeket szöveges leírásokkal helyettesíti, amelyeket egy konfigurálható vizuális modell állít elő az upstream hívás előtt. Ez lehetővé teszi a csak szöveget szolgáltató
szolgáltatók számára, hogy átláthatóan kezeljék a multimodális payloadokat.

Folyamat:

1. Ugrás, ha a célmodell már támogatja a látást (kivéve, ha szerepel a
   kényszerített híd listában `isVisionBridgeForcedModel`).
2. Kép részek kinyerése a `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) segítségével, amely a **egységes média
   detektor** `detectMediaParts()`-ra delegál az `open-sse/utils/mediaParts.ts`-ben — az
   egyetlen igazságforrás, amelyet a kombinált kompatibilitási szűrő oszt meg.
   A kinyerés engedélyezett a legfelső szintű részekre, amelyeket a
   `replaceImageParts` vissza tud illeszteni (a kinyerés↔helyettesítés szerződés): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, és Responses API `input_image`. A beágyazott találatok és
   csak indikátor formák kombinált szűrő anyagnak számítanak, és soha nem kerülnek kinyerésre.
   Ugrás, ha nem található.
3. Futási konfiguráció megoldása a `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): az új `modalityBridge*`
   beállítási kulcsok nyernek; a régi `visionBridge*` kulcsok **egy ciklusos
   visszaesés** (visszagörgetési ablak). Ugrás bármilyen média áthaladás előtt, amikor a
   híd le van tiltva.
4. A módválasztó (`modalityBridgeVisionMode`, lásd az alábbi táblázatot) dönti el
   az átirányítást vagy a leírást. Az átirányítás `modifiedPayload`-ot ad vissza, amelyben csak a `model`
   lett kicserélve, plusz meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Leíró út: korlátozza a képeket `maxImages`-re, összeállítja a feladat-tudatos promptot,
   konzultál a leíró gyorsítótárral, párhuzamosan hívja a vizuális modellt
   (`Promise.allSettled`), és injektálja az `[Image N]: <description>` szöveges részeket a
   helyükre. Egy sikertelen leírás `null`-t ad vissza, és az eredeti kép rész **megmarad**
   (#4012) — kivéve a kombinált leíró úton, amikor minden leírás megbukik, ahol egy megerősített nem-vizuális upstream
   `(unavailable — no vision-capable provider connected)` stub-ot kap helyette (#8430).
6. Visszaadja a `modifiedPayload`-ot + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Módválasztó (`modalityBridgeVisionMode`)

| Mód        | Alapértelmezett | Viselkedés                                                                                                                                                                                                                                                                                   |
| ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔               | Régi heurisztika, érintetlen (#6640/#7204): nem-kombinált/`auto/` modellek a legjobb vizuális modellhez irányítanak, hacsak az eredeti modellnek már nincsenek használható hitelesítő adatai (akkor leír); a kombinált célok mindig leírnak.                                                 |
| `describe` |                 | Mindig leír — az átirányítási blokk teljesen ki van hagyva; a felhasználó által választott modell mindig válaszol.                                                                                                                                                                           |
| `reroute`  |                 | Kényszerített átirányítás: a hitelesített modell védőkorlátot megkerülik. Az átirányítási **cél** hitelesítő védőkorlát továbbra is érvényes — ha nincs használható vizuális cél, a kérés a leírásra esik vissza, így a nyers képek soha nem jutnak el egy csak szöveges backendhez (#8430). |

A kényszerített módok **előtt** rövidre zárják az automatikus heurisztikát; az `auto` viselkedés
byte-azonos a pre-PR-1 védőkorláttal.

#### Feladat-tudatos leíró prompt (`modalityBridgeVisionTaskAware`)

Alapértelmezett **igaz**. A `composeVisionPrompt()` (`visionBridgeHelpers.ts`) hozzáfűzi
az **utolsó felhasználói üzenet** szövegét (500 karakterre rövidítve) az alap
leíró prompthoz, irányítva a leírást arra, amit a felhasználó valójában kért
(codex-vision-proxy minta), és megkérve a vizuális modellt, hogy transzkribálja a látható
szöveget. A zászló kikapcsolásával — vagy ha nincs felhasználói szöveg — az alap prompt változatlanul kerül felhasználásra.

A self-loop saját OpenAI-kompatibilis kérésének leírása (`callVisionModelSingle()`
a `visionBridgeHelpers.ts`-ben) mindig `image_url.detail: "high"`-t kér
kondicionálatlanul, minden hívó/szolgáltató számára, nem függően semmilyen kliensjeletől.
Az alacsony részletességű mintavételezés rontja az OCR pontosságát pontosan
azért a szövegátírási feladatért, amelyet ez a prompt kér, így a leíró hívás
mindig magas részletességet kér, függetlenül attól, hogy az eredeti bejövő
kérés milyen részletességi szintet használt. Ez csak a belső leíró kérés
törzsét érinti; nem változtatja meg, hogyan továbbítja az OmniRoute a hívó
saját `image_url.detail`-ját a fő kérésen — ez a default külön alkalmazásra kerül,
és csak a detektált OpenCode kliensek esetében, a `defaultImageDetail()`-ben
(`open-sse/handlers/chatCore/upstreamBody.ts`). Az Anthropic wire-format
ág a leíró self-loopban nem tartalmaz `detail` mezőt, és nem érinti
semmilyen default.

#### Leíró kimeneti korlát (`modalityBridgeVisionMaxChars`)

| Kulcs                          | Alapértelmezett | Tartomány          |
| ------------------------------ | --------------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`             | `0` vagy 100–50000 |

A `0` (alapértelmezett) azt jelenti, hogy **nincs korlát** — a `callVisionModel()`
által visszaadott leírás módosítás nélkül kerül továbbításra, megőrizve a meglévő
viselkedést. Bármely 100–50000 közötti érték a leírást egy `…` utótaggal
megszakítja, mielőtt visszavágják `[Image N]: <description>` formátumban
(`VisionBridgeGuardrail.preCall()` a `src/lib/guardrails/visionBridge.ts`-ben).
Ezt emeld meg részletgazdag OCR feladatokhoz, ahol az alsóbb modellnek
szüksége van a teljes átírásra; csökkentsd, hogy korlátozd a tokenhasználatot
a beszédes látásmodellek esetében. A műszerfal mező a Vision fül Fejlett paneljén
(`modality-bridge-max-chars` a `ModalityBridgeVisionTab.tsx`-ben) található,
és bármely 1 és 99 közötti értéket 100-ra korlátoz, miközben egy explicit `0`
érintetlen marad — a `0` önállóan érvényes Zod érték
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nem csupán
az "nincs beállítva" alapértelmezett.

#### Leíró cache (`modalityBridge/bridgeCache.ts`)

Memóriában lévő LRU + TTL cache a leíró kimenetekhez, megosztott folyamat-szinten.
Kulcs = `sha256(imageRef + composedPrompt + configuredBridgeModel)` hosszúság-előtag keretezéssel
(mezőhatár ütközések nélkül). A modell komponens a **konfigurált** híd modell,
nem az a modell, amely valójában válaszolt —
a `callVisionModel` belsőleg visszaeshet, és a kísérletek szerinti kulcsok
fragmentálnák a cache-t. A sikertelen leírások soha nem kerülnek cache-elésre. Beállítások:

| Kulcs                           | Alapértelmezett | Tartomány |
| ------------------------------- | --------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`          | —         |
| `modalityBridgeCacheTtlMinutes` | `60`            | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`           | 10–5000   |

#### Távoli kép normalizálás (self-loop leírás/base64 lekérés)

Amikor a híd **távoli** képet kér le — az Anthropic leíró self-call és a claude-wire-format
base64 konverzió
(`ensureBase64ImagesForClaudeWire`), mindkettő a
`fetchRemoteImageAsDataUri()`-n keresztül a `visionBridgeHelpers.ts`-ben — a
kapott adat URI a `normalizeDataUri()`-n keresztül kerül továbbításra
(`open-sse/utils/imageNormalize.ts`) mielőtt beágyaznák a látásmodell
kérésbe. A túlméretezett képeket **2048px hosszú élre** csökkentik (megegyezve
azzal a méretezési korláttal, amelyet az OpenAI/Anthropic már alkalmaz a szerveroldalon),
ami csökkenti a feltöltési bájtokat/latenciát anélkül, hogy megváltoztatná, amit a
látásmodell lát. A méretezés a `sharp`-ot használja, dinamikus importálás útján betöltve:
egy olyan platformon, ahol a natív bináris nem tud betöltődni, a `normalizeDataUri()`
**soha nem dob** — visszaesik az eredeti bájtok átkonvertálására, így a leíró/base64-konverziós
útvonal mindig működik. A nem-kép bájtok (egy lekérés, amely nem adott vissza
dekódolható képet) szintén érintetlenül kerülnek továbbításra. Ez a normalizálás
csak a híd által saját self-callhoz lekért képekre vonatkozik — soha nem alkalmazzák
a hívó nyers átkonvertált payloadjára, összhangban az opt-in csak mutációs elvvel
(Hard Rule #20).

#### Beállítási séma + migráció

Az új `modalityBridge*` kulcsok Zod-ellenőrzöttek az `updateSettingsSchema`-ban
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, a `modalityBridgeCache*` hármas, és a
`modalityBridgeAudio*` csoport, amelyet az Audio Bridge használ. A migráció
`141_modality_bridge_settings.sql` a meglévő örökölt
`visionBridge*` értékeket másolja a megfelelő új kulcsokhoz (idempotens, soha nem írja felül
a kezelő által beállított `modalityBridge*` értéket); az örökölt kulcsok továbbra is
elfogadottak olvasási visszaesésként egy kiadási cikluson keresztül.

#### Átláthatósági fejléc + statisztikák

A leíró-transzformált válaszok tartalmazzák
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(`buildModalityBridgeHeader()` a `modalityBridge/bridgeStats.ts`-ben,
`withModalityBridgeHeader()` a `src/sse/handlers/chatHelpers.ts`-ben).
A továbbított kérések **nem** kapnak fejlécet — a payload érintetlen maradt, és a modell
cseréje már látható a válasz törzs `model` mezőjében.

`GET /api/modality-bridge/stats` (kezelői hitelesítés, ugyanazon szint, mint
`GET /api/settings`) visszaadja a memóriában lévő per-modalitás számlálókat
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` a `vision`, `audio`, és
`video` számára. Az `averageLatencyMs` a `latencySamples`-t használja, nem az összes
kísérletet, mint nevezőt; egy időzítés nélküli művelet nem gyárt nullás milliszekundumos
mintát. A `bridged` továbbra is a visszafelé kompatibilis alias a sikeres
konverziók számára; a sikertelen kísérletek nem növelik ezt.
A számlálók a folyamat újraindításakor alapértelmezett szerint nullázódnak
(telemetria, nem számvitel).

#### Műszerfal konfiguráció

A dedikált irányítópult oldal a
`/dashboard/settings/modality-bridge`. Az URL-címezhető `Vision`, `Audio`
és `Video` fülek megőrzik a lekérdezési paramétereket a `tab` értékének váltása közben.
A Vision fül lehetővé teszi a bekapcsolást, a módot, a modell kiválasztását (beleértve az automatikus
alapértelmezettet), a feladat-tudatos promptolást, a fejlett időkorlát/kép/leírás-hossz/gyorsítótár
korlátokat, a futási
számlálókat, és egy védett minta kérést. Az Audio fül szintén élő: lehetővé teszi
a bekapcsolást, egy STT- csak modellválasztót Automatikus, időkorlát/max-clip korlátokkal, audio
számlálókkal, és egy `input_audio` minta tesztet. A Video fül működőképes: jelentést ad
az FFmpeg/ffprobe futási állapotáról — négy explicit UI állapot egyike (`unknown`, míg
a probe folyamatban van vagy nem tudott befejeződni, `restricted` egy nem-hurok
irányítópult gazdán, ahol a probe-t az ügyféloldalon kihagyják, `unavailable`, miután
meg lett vizsgálva és megerősítve, hogy hiányzik, vagy `available` az FFmpeg/ffprobe verziókkal) — megőrzi
a engedélyezett/modellt/képet/videót/időkorlátokat, szűri a modellválasztót a látásra képes
modellekre, és megjeleníti a videószámlálókat.

A korábbi Vision Bridge kártya az AI beállítások alatt egy kompatibilitási link az
új oldalra; már nem birtokol egy második példányt a űrlapról. A Média Szolgáltatók szintén
linkeli a Kép-a-Szövegre és a Beszéd-a-Szövegre munkafolyamatokat a megfelelő Modality
Bridge fülekhez anélkül, hogy eltávolítaná a meglévő Beszéd-a-Szövegre játszóteret.

**Ön-hurok belépési megkerülés:** amikor a leíró hívás az OmniRoute saját `/v1` ön-hurokján
keresztül halad (nem szabványos szolgáltató modell), a rész-kérés elküldi
`x-omniroute-admission-bypass: internal` és az azonosított ön-hurok hitelesítő adataival
hitelesítve van — a helyi `sk_omniroute` őrhely helyi módban, vagy az üzemeltető által
konfigurált `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` környezeti kulcs (#1350), így a
`REQUIRE_API_KEY=true` telepítések továbbra is végrehajthatják a leíró hívást. A megkerülés
csak ezekre a pontos hitelesítő adatokra érvényes, így a külső kliensek nem használhatják a
fejlécet a belépés megkerülésére.

A régi alapértelmezettek a `src/shared/constants/visionBridgeDefaults.ts` fájlban találhatók; az
új mód/feladat-tudatos/gyorsítótár alapértelmezettek és a beállítások megoldója a
`src/shared/constants/modalityBridgeDefaults.ts` fájlban találhatók. A védőkorlát egy
`deps` konstruktor opciót biztosít, így a tesztek hamis `getSettings` és
`callVisionModel` megvalósításokat injektálhatnak.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Megakadályozza az audio-tartalmú chat kérések célba érését, amely nem
ismert audio bemenetet fogadni. Soha nem irányítja át a chat kérést: az audio részeket
az existing OpenAI-kompatibilis multipart végponton keresztül transzkribálják, és a
választott chat modell folytatódik a szöveges transzkripciókkal.

Folyamat:

1. Oldja meg a `supportsAudio`-t a `getResolvedModelCapabilities()`-on keresztül. Az explicit
   szolgáltató-regisztrációs metaadatok nyernek, majd a statikus modell metaadatok, majd a szinkronizált
   `modalities_input`. Egy deklarált bemeneti lista `audio` nélkül `false`; nincs
   képesség bizonyíték marad `null`. A `false` és `null` aktiválja a
   konzervatív hidat, míg a `true` megkerüli azt.
2. Oldja meg a `modalityBridgeAudio*` beállításokat, és vonja ki a splice-olható legfelső szintű
   audio részeket minden üzenetből a megosztott `detectMediaParts()`
   detektoron keresztül. Támogatott vezetékformák az OpenAI `input_audio`, `audio_url`, és
   `source.media_type: "audio/*"`. A beágyazott audio észlelésre kerül az irányításhoz, de nem
   távolítják el a splice úton. A munka a `modalityBridgeAudioMaxClips`-re van korlátozva;
   a későbbi részek érintetlenek maradnak.
3. Tisztelje meg a konfigurált `provider/model`-t, vagy engedje meg, hogy a `selectAudioBridgeModel()`
   végigjárja az `AUDIO_TRANSCRIPTION_PROVIDERS`-t stabil katalógus sorrendben, és válassza ki az első
   modellt, amely rendelkezik használható aktív szolgáltató hitelesítő adatokkal.
4. A `callAudioTranscription()` a base64/data-URI audio-t multipart
   `file`-ra alakítja, vagy letölti a távoli `audio_url`-t a nyilvános csak kimeneti
   védőkorláttal DNS rögzítéssel és 25 MB-os korláttal. Ezután POST-olja a fájlt és a kiválasztott
   modellt a helyi `/v1/audio/transcriptions` ön-hurokba, amelyet a
   `resolveSelfLoopBearer()` hitelesít. A meglévő transzkripciós útvonal normál
   hitelesítő keresést, cooldown/ráta-korlátozást és szolgáltató kiszolgálást végez.
5. A sikeres hívások helyettesítik részeiket `[Audio N]: <transcript>`. A hívások
   `Promise.allSettled`-del futnak: egyéni hiba megőrzi az eredeti
   audio részt (#4012 szerződés). Ha minden hívás meghiúsul, és a cél bizonyítottan
   `supportsAudio === false`, a részek
   `[Audio N]: (nem elérhető — nincs STT szolgáltató csatlakoztatva)` (#8430 szerződés). Egy
   ismeretlen cél (`null`) esetén a teljes hiba eredmény érintetlen marad. Egy bizonyított
   szöveg-alapú cél, amelynek nincs használható STT hitelesítője, ugyanazt az explicit
   stub-ot kapja anélkül, hogy hálózati hívást indítana.

A sikeres transzkripciók a folyamat-széles Modality Bridge LRU/TTL gyorsítótárat használják. A
kulcs az audio referencia, a stabil `audio-transcription` művelet címke, és a kiválasztott STT modell
kombinációja; a hibákat soha nem tárolják. Az audio kísérletek frissítik a megosztott
`bridged`, `cacheHits`, `failures`, és `lastUsedAt` számlálókat.
A transzformált válaszok tartalmazzák
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; az érintetlen
kérések nem kapnak Audio Bridge szegmenst.

A futási beállítások DB-alapúak és Zod-validated:

| Kulcs                         | Alapértelmezett | Tartomány               |
| ----------------------------- | --------------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —                       |
| `modalityBridgeAudioModel`    | `""`            | Automatikus vagy STT ID |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10                    |

A megosztott gyorsítótárat a `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, és `modalityBridgeCacheMaxEntries` vezérli.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptálja a legfelső szintű videó részeket a Chat Completions `messages` és Responses API `input` előtt, mielőtt egy célhoz érkezne, amelynek nincs ismert natív videótámogatása. Támogatott formátumok: `input_video`, `video_url`, `video_source`, HTTPS URL-ek, és `data:video/*;base64,...` adat URI-k. A sima fájlnevek a szövegben nem tekinthetők videónak.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) felelős a kérés áthaladásáért, a képesség/politika ellenőrzéséért, kérésenkénti aggregálásért és a válasz payload-ért. A videónkénti munka — beszerzés, a teljes eredmény cache, egy keret sorozat leírása (amely egyesíti a hívó által megadott audio átírást), és kísérletenkénti metrikák/megszakítás/tisztítás — rejtve van a `processVideoPart` mögött a `videoBridgePipeline.ts`-ben, amelyet egyszer hívnak meg videó részenként a `preCall` ciklusán belül. Ez a modul definiálja a kifejezett port határokat: `VideoMediaBrokerPort` (bájtok beszerzése és mintavételezett keretek kinyerése), `VideoAudioTranscriptionPort` (a hívó által megadott audio átírás egyesítése a mintavételezett feliratokkal), és `VideoDrilldownPort` (a régi nyers tároló forma). A gyártási STT és keretmegtartás a leíró port köré épül a `createVideoSttAdapter` és `createVideoDrilldownAdapter` segítségével; az utóbbi a megosztott átlátszó-handle életciklust használja.

A nyilvános `/v1` kérés útvonal soha nem importál vagy hív meg egy alfolyamatot. A távoli videók 50 MiB-os határ alatt kerülnek letöltésre; az inline base64 videók konzervatív 36 MiB dekódolt per videó korlátozással rendelkeznek, így a modell/üzenetek/keretező boríték a nyilvános JSON kérés belépési határán belül maradhat 50 MiB-on. Az inline hosszúság és dekódolt méret becsléseket ellenőrzik az allokálás előtt. HTTPS szükséges az első távoli URL-en és minden átirányításon, a meglévő nyilvános csak kimeneti védelmet DNS pinninggel használva. A bájtok ezután átlépik a pontos belső `POST /api/modality-bridge/video/extract` bróker határt. Ez az útvonal `LOCAL_ONLY` és `SPAWN_CAPABLE`, csak egy per-folyamat hitelesített, megbízható hurok kérését fogadja el, és soha nem fogad el URL-t, fájlrendszer útvonalat, végrehajthatót vagy argumentumlistát. Az API testméret csővezeték és a kezelő fokozatos test olvasó függetlenül érvényesít egy 50 MiB bróker bemeneti korlátot. A határolt sorozata egyszerre egy kinyerést futtat, négy függőben lévő munkát engedélyez, és a függő bemenetet 100 MiB-ra korlátozza.

A brókeren belül az `ffprobe` egy privát helyi fájlt olvas; a rögzített formátumú engedélyezési lista kizárja a lejátszási listákat és a manifest formátumokat. Az engedélyezett MOV-család konténerek esetén a külső MOV adatreferenciák alapértelmezés szerint le vannak tiltva, és a rögzített parancs nem optál be rájuk. Az `ffprobe` és az `ffmpeg` a `file`-csak protokoll engedélyezési listát, egy szálat, rögzített argumentum tömböket, nincs shell-t, és a `PATH`-ból megoldott végrehajthatókat használ. A csatolt képes borító stream-ek nem játszható jelöltek. Minden játszható stream-nek meg kell felelnie a határoknak, és egy explicit alapértelmezett stream előnyben részesül a determinisztikus legalacsonyabb indexű visszaesés előtt. A videók időtartama 600 másodpercre, 8,192 pixelre dimenziónként, és 33,554,432 forrás pixelre korlátozódnak. Az FFmpeg 1–16 középső JPEG keretet mintavételez, a hosszú élt legfeljebb 1,024 pixelre méretezi le anélkül, hogy a kisebb bemeneteket felnagyítaná, és soha nem fogad el URL-t. A mintavételezés alapértelmezés szerint `uniform`. Az opcionális `scene_aware` és kísérleti `segment_aware` politikák egy további rögzített FFmpeg átmenetet hajtanak végre az már érvényesített helyi stream-en, kiválasztják a határolt `showinfo` jelenet időbélyegeket, és determinisztikusan visszaesnek ugyanazokra az egységes középpontokra a detektor hibája, időtúllépés, hibás kimenet vagy üres jelölt halmaz esetén. A szegmens-tudatos mód arányosan osztja el a középpont mintákat az érvényesített jelenet intervallumokhoz; a szegmens-tudatos bizonyítékok és visszaesési viselkedés részletezve van alább. A kemény 16 keretes korlát minden politikán belül a kiválasztás után érvényesül. Amikor egy jelenet-tudatos kérésnek csak egy keretes költségvetése van, az az aktív teljes videó vagy fókusz ablak egységes középpontját használja, és jelenti a `policyEffective: uniform`: egyetlen kiválasztott jelenet keret nem tudja megőrizni mindkét időbeli végét. A hívó opcionálisan megadhat egy véges fókusz ablakot (`start`/`end` másodpercek); a határok a média időtartamához vannak rögzítve, a megfordított vagy nem véges ablakokat elutasítják, és minden mintavételezési politikát csak a normalizált intervallumon belül hajtanak végre. Az eredményül kapott ablak a mintavételezési metaadatokban és a megbízhatatlan leírás előtagban szerepel, így az alsóbb modellek megkülönböztethetik a fókuszált kivonatot a teljes idővonalból.

A szemantikai felirat fókusz egy külön, explicit beállítás. Az alapértelmezett `full` elemzési mód megőrzi a meglévő keret promptot, és soha nem továbbítja a kérés szövegét a felirat modellnek. `focused` módban a híd csak a legutolsó nem üres felhasználó által írt `text`/`input_text`-et olvassa a ugyanabból a Chat vagy Responses tárolóból, normalizálja azt NFC-re, összevonja a vezérlő karaktereket és a szóközöket, és 500 Unicode kódpontra korlátozza. Egy üres eredmény visszaesik az pontos `full` prompt-ra. Egy használható tipp JSON formátumban van sorosítva egy dedikált megbízhatatlan felhasználói kontextus blokkban, és csak megfigyelhető részleteket priorizálhat; nem írhatja felül a külön figyelmeztetést, amely a médiában látható vagy hallható utasítások követésére vonatkozik. A szöveges fókusz soha nem inferál `start`/`end` vagy változtatja meg az időbeli mintavételezőt.

#### FU-07 struktúrált szegmens bizonyíték

A `segment_aware` egy határolt előelemzési átmenetet használ az már érvényesített helyi videó stream-en. A rögzített szűrő lánc először legfeljebb 320 pixel szélesre méretezi, észleli a jelenetváltozásokat és a megfagyott intervallumokat, majd másodpercenként 1 keretet mintavételez a homály, átlagos luma és térbeli/időbeli információk számára. Az átmenet 600 struktúrált mintára, egy FFmpeg/szűrő szálra, ugyanarra a `file`-csak protokoll és konténer engedélyezési listákra, 1 MiB folyamat-kimeneti határra, és legfeljebb 30 másodpercre van korlátozva a bróker megosztott megszakítási/határidő keretein belül. Soha nem fogad el parancsot, szűrőt, útvonalat vagy URL-t a kérésből.

A strukturális értékek determinisztikus mintavételezési bizonyítékok, nem pedig szemantikai videóértés. Nem inferálnak alanyokat, cselekvéseket, feliratokat, beszédet vagy felhasználói szándékot. A jelenetek és a fagyási határok szegmenseket alkotnak; a fagyási lefedettség, elmosódás, expozíció, térbeli részletesség és időbeli változás csak azt befolyásolja, hogy a meglévő 1–16 keretes költségvetés hogyan van elosztva. Egy teljesen lefagyott szegmens egy keretre van korlátozva, míg a nem lefagyott szegmensek versenyeznek a fennmaradó költségvetésért. Amikor a határok száma meghaladja a keretek számát, az egységes idővonal lefedettség megmarad, így a gyors korai vágások nem tudják elrejteni a hosszú, elhúzódó szegmenst. A 1 másodperces elemzési felbontású fagyási határon belüli jelenet határokat összevonják.

Hiányzó szűrők, hibás/üres bizonyítékok, detektorhiba vagy a korlátozott elő-elemzési időtúllépés a pontos egységes középpont politikához nyitva marad. Egy hívó megszakítás vagy bróker határidő nem marad nyitva: megszünteti a folyamatban lévő alfolyamatot, megakadályozza a későbbi keretkinyerést, és a privát ideiglenes fát eltávolítja a `finally`-ban.

`scripts/perf/video-bridge-fu07-eval.ts` determinisztikus valós FFmpeg berendezéseket generál a deduplikálás utáni felirat-hívási megtakarításokhoz, sűrű mozgás költségvetés-elosztáshoz, elmosódás/expozíció/SI-TI bizonyítékokhoz, gyors vágásokhoz hosszú farokkal, és fokozatos elhalványulás hamis pozitívumokhoz. Rögzíti az elő-elemzési falidőt, és ahol a `/usr/bin/time` elérhető, a gyermek CPU-t és a csúcs RSS-t. A minőségellenőrzései csak strukturális orákulumok. A valós felirat-modell minősége továbbra is `HOLD`, mert ez a híd nem rendelkezik engedélyezett végponttal vagy lefagyott bírával. A pénzügyi megtakarítások is `HOLD` maradnak, hacsak a `--caption-cost-per-call-usd` nem biztosít egy explicit pozitív per-hívási becslést; a szkript soha nem hamisítja meg egyik eredményt sem.

Minden keret 4 MiB-ra van korlátozva, az összes nyers keret együtt 23 MiB-ra, és a soros bróker válasz 32 MiB-ra. Egy privát ideiglenes könyvtár eltávolításra kerül a `finally`-ban. Az OmniRoute nem csomagolja az FFmpeg-et, és nem fogad el egyedi végrehajtható elérési utat. A feliratozás előtt a híd egy konzervatív vizuális deduplikálási lépést alkalmaz: minden JPEG-t egy 16×16 szürkeárnyalatos pufferre csökkent, és csak az utolsó megőrzött kerettel hasonlítják össze. A kért felirat költségvetés esetén, amely meghaladja az egy keretet, a kinyerés egy korlátozott jelölt medencét biztosít, amely legfeljebb kétszerese ennek a költségvetésnek, és soha nem több mint 16 keret. A kért korlátot csak a deduplikálás után alkalmazzák, az első és az utolsó kiválasztott jelöltet megőrzik a végső vékonyítás során, amikor a költségvetés legalább kettő. A verzionált `grayscale-16x16-mean-cells-v2` politika a nagyobbik átlagos luma delta és a normált delta legalább 0.05-ös arányú miniatűr cellák arányát használja. A duplikált küszöb a konstans 0.04, amelyet a kiszámíthatóság érdekében választottak, nem pedig futási beállításként. Ez a másodlagos magas kontrasztú jel megőrzi a kis mozgást és a látható szövegváltozásokat, amelyeket egy csak átlagos összehasonlítás elrejthet. A komparátor vagy dekóder hibák nyitva maradnak és megtartják a lefedettséget. A kimeneti metaadatok elkülönítik a kinyert jelölteket, a sikeresen használt kereteket és a vizuális duplikátumokat, amelyeket eldobtak.

Egy kifejezetten megjelölt videó rész kérheti egy időbélyeges kontaktlapot. A híd legfeljebb egy 4-oszlopos, 16-keretes JPEG rácsot épít. Minden 512-pixeles cella a forrás időbélyegét egy magas kontrasztú alsó sávba égeti, míg a ugyanazok az időbélyegek szöveges metaadatokban maradnak a további társításhoz és auditáláshoz. A teljes JPEG 32 MiB-ra van korlátozva. Ha a `sharp` nem tudja dekódolni vagy összeállítani a rácsot, a híd visszaesik az egyes JPEG keretekre; egy kliens megszakítás még mindig terjed a lapműveleten.

A promóciós bizonyítékok szándékosan különállnak a szintetikus összetétel mikrobemérésétől. A `scripts/perf/video-bridge-contact-sheet-eval.ts` egy séma-verziózott A/B hídot definiál a valós OpenAI-kompatibilis látásmodellekhez. Méri a szolgáltató által jelentett tokeneket, az end-to-end fal késleltetést (beleértve a lap összetételét), a modell-hívások számát és a manifesztált ténymegtartást. A nyers modell válaszokat nem írják a jelentésbe; csak a SHA-256 összegzések és a megfeleltetett tény ID-k maradnak meg. A híd nem végez hálózati vagy fizetett modell hívást, hacsak a `--execute-real` nem kerül átadásra, és az `--model`, `OMNIROUTE_BASE_URL`, és `OMNIROUTE_API_KEY` nincsenek konfigurálva. Anélkül, hogy ez a kifejezett valós futás megtörténne, a gép által olvasható ítélete `HOLD` marad; a szintetikus payload/hívás-szám mérések önmagukban nem jelentenek promóciós bizonyítékot.

A különálló `scripts/perf/video-bridge-promotion-eval.ts` FU-07 vagy FU-09 megfigyeléseket fogyaszt. A promóciós felvételhez mind a nyolc szintetikus forgatókönyv típusra, plusz egy tisztított valós klipre van szükség, legalább három mért ismétlésre szerepkörönként és esetenként, mind a tíz deklarált metrikára, lefagyott média/prompt/megfelelő-tény/beállítások összegzésekre, egyedi megfigyelési ID-kra és ellenőrzött magvetésű A/B sorrendre. A végrehajtási nyugta köti a korpusz összegzést, a pontos jelölt SHA-t és a modell revíziót. A hiányzó vagy érvénytelen mérések `HOLD` maradnak, beleértve a 30 s feletti CPU-t, 512 MiB feletti csúcs RSS-t vagy 30 s feletti elő-elemzést. Ezek bizonyíték-felvételi korlátok, nem új futási RSS érvényesítési garancia.

A FU-07 legalább 98%-os minőségmegtartást és 1.2x-nél nem nagyobb p95 késleltetést igényel, plusz vagy egy 0.05 abszolút eset-kiigazított átlagos visszahívási javulást az egyenértékű átlagos felirat-hívásoknál, vagy legalább 10%-kal kevesebb átlagos deduplikált felirat-hívást. A FU-09 legalább 0.85 minőséget, 95%-os megtartást, 20%-os p95 késleltetés csökkentést és 10%-os token csökkentést igényel. Kritikus tényvesztés, injekciós megfelelés vagy hiányzó használat megakadályozza a promóciót. Egy végrehajtás nem tud semmit promótálni: a `--previous-report` megerősíti a két különböző, nem átfedő, egymást követő, jogosult végrehajtást ugyanazon politika/modell revízió/jelölt/korpuszon. Egy mintavételi kísérlet nem tudja megerősíteni a kontaktlap kísérletet.

A gyűjtőknek a válaszokat memóriában kell értékelniük, és el kell menteniük a `responseDigest`-et, valamint a metrikákat és megfigyelési kötéseket, soha nem a válasz szövegét. A fogyasztó szintén olvassa a régi nyers megfigyeléseket, de soha nem másolja azt a szöveget a jelentéseibe. Pontosan az `responseDigest` vagy a `rawResponseText` egyike fogadható el minden megfigyeléshez. A verzionált engedélyezési lista üres marad, egy változatlan `hold` alapértelmezettel. Egy jogosult bejegyzés megköveteli az bizonyíték hivatkozását, politikát, modellverziót, pontos jelölt SHA-t, manifest digestet és két különböző futásazonosítót; ellentmondásos kontextusokat elutasítanak. Ezek a metaadatok egy audit szerződés, nem bizonyíték arra, hogy a hivatkozott fájl valódi méréseket tartalmaz. A tényleges nyugtákat át kell nézni, mielőtt bármilyen bejegyzést hozzáadnánk. A menedzsment statisztikai végpont és a Videó irányítópult konzervatív készenlétet mutat. Egy konfigurált modell alias önmagában nem állapítja meg a verzióját vagy a futó jelölt SHA-t, így a jelenlegi irányítópult `HOLD`-ot jelent, ahelyett, hogy egy másik végrehajtási kontextusból újrahasználná a jogosultságot. Az explicit kísérleti kiválasztás elkülönül a promóciótól; nincs automatikusan megváltoztatott alapértelmezett.

A hívók opcionális `transcript.cues` tömböt csatolhatnak egy támogatott videó részhez, amikor már rendelkeznek összehangolt szöveggel. Minden cue-nak tartalmaznia kell a `text`-et, egy véges `start`/`end` intervallumot a vizsgált időtartamon belül, és egy engedélyezett `source`-t (`client`, `embedded` vagy `audio-bridge`); a `confidence` alapértelmezett értéke `1`, és 0 és 1 között kell maradnia. A pontosan azonos cue-k összevonásra kerülnek. Az OmniRoute soha nem indít transzkripciót ezekből a metaadatokból: a validált cue-k a leírt eredménybe kerülnek másolásra forrással, bizalommal és intervallummal, és megbízhatatlan megfigyelésként jelennek meg a keretfeliratok mellett. Az érvénytelen, tartományon kívüli vagy származási információ nélküli szöveget elutasítják, ahelyett, hogy belekevernék a feliratfolyamba. Mindkét kérés-test transzkripciós csatorna normalizálja a megadott származást `client`-re, beleértve az önállóan megállapított `embedded` vagy `audio-bridge` címkéket. Csak egy szerver által birtokolt adapter tudja hozzárendelni ezeket a megbízható címkéket a kód-alapú `trustedSource` argumentumon keresztül; egy kérés JSON mező nem érheti el ezt az argumentumot. A transzkripciós szöveg megbízhatatlan médiából származó tartalom marad, függetlenül a származásától, és soha nem határozhatja meg az engedélyezést.

Egy fejlett hívó `audioTranscript` sávot adhat meg ugyanahhoz a videóhoz; ezt kliens által biztosított szövegként kezelik, nem a szerver transzkripciójának bizonyítékaként. A fúziós varrat vizuális és audio megfigyeléseket futtat egy határidő és megszakító jel alatt, közös idővonalon rendezi őket, összevonja a pontosan azonos példányokat, és részleges eredményt jelent, amikor csak az egyik oldal sikeres. Egy érvénytelen `audioTranscript` a részleges eredményre degradálódik — a vizuális leírás megmarad, és az audio ág egy tisztított hibakódot rögzít — ahelyett, hogy az egész videó megbukna. Az egyes ágak elérhetősége, a részleges jelző és a tisztított hibakódok megmaradnak a leírt eredményben, a védőkorlát metaadatokban (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), az eredmény-cache metaadatokban és a híd fúziós számlálókban. Az alapértelmezett Videó Híd útvonal nem indít beszédről szövegre konvertálást, vagy nem tölt le egy második média másolatot; anélkül, hogy ez a kifejezett sáv létezne, csak videó marad.

**Transzkripció megőrzése (#12150 P1).** Ez automatikusan alkalmazandó, amikor a Videó Híd (amely önkéntes) transzkripciós cue-t renderel — nincs külön megőrzési jelző. Amikor egy kérés bármilyen transzkripciós cue-t renderel (egy hívó által deklarált `transcript` vagy egy fúziós `audioTranscript`), a védőkorlát `videoBridgeObserved`-ra jelöli, és egy cenzúrázott árnyékot készít a videó leírásáról — egy azonos renderelés, amelyben minden cue szabad szöveges törzse helyettesítve van `[redacted-video-transcript]`-tel, amelyet a strukturált cue mező helyettesítésével készítenek el, mielőtt a szöveg összeállna (soha nem a lapos szöveg elemzésével, így semmilyen cue tartalom — ellenséges vagy szokásos, beleértve a `]`-t tartalmazó törzseket, mint például `[inaudible]`/`[music]` — nem maradhat meg). A megőrzött hívásnapló kérés testében minden videóból származó szöveges részt cenzúrázott árnyékkal helyettesítenek, tartalomegyezőség alapján; a `fullText` horgonyt újraolvassák a befejezett előhívási védőkorlát terhelésből, így az egyezés még a későbbi lánc védőkorlátok (a PII és hitelesítő adatok maszkolói, prioritások 10/95) leírás szövegének helyben történő átírása után is sikeres marad, és a rendszer-prompt/átadás/memória injekció átalakítja az üzenet tömböt. A modellhez felfelé küldött test változatlan marad. Egy megfigyelt kérés szintén nem népesít be tartós Memóriát (mind a kérés-, mind a válasz-alapú kinyerés ki van hagyva), így a modell saját válasza nem tudja visszhangozni a transzkripciós szöveget a Memóriába.

**Nyers videó mezők (#12430).** Amikor a híd engedélyezve van, és a natív videótámogatás ismeretlen vagy hiányzik, a meghatározott `transcript`/`audioTranscript` mezők szintén aktiválják a `videoBridgeObserved`-t, még a leírási hiba vagy a `maxVideos` korlát után is. A `null` és az üres karakterláncok számítanak; a hiányzó mezők és a nem videó metaadatok nem. A megőrzött másolatok cenzúrázzák ezeket a mezőket vagy kihagyják a kérést, és a cache-ek/Memória megkerülésre kerülnek. A szolgáltató terhelése változatlan marad.

További megőrzött másolatok ugyanazt a megfigyelt-kérés jelet használják. A nyers elő-védőkorlát kliens-kérés pillanatképe, a memóriában lévő függő kérés és a korai elutasított kérés naplója strukturálisan helyettesíti a transzkripciós mezőket a videó részekben; a szöveges promptok, amelyeket a pipeline szakaszok és a kontextus átadása szintetizál, cenzúrázva vannak a megőrzött kérés-test bemenetén. A megőrzött `video_content_removed` jelző miatt a `previous_response_id` folytatásának sikertelensége zárva marad, ahelyett, hogy rekonstruálná a szöveget, amelyet szándékosan eldobtak. Ha egy megfigyelt kérés elveszíti a részletezett cenzúrázott árnyékát, mielőtt naplózásra kerülne, vagy akár egy több videó árnyék közül egy sem egyezik a későbbi kérés módosítások után, a megőrzött kérés testét teljesen kihagyják, ahelyett, hogy egy részben cenzúrázott transzkripciót megtartanának.

Egy megfigyelt kérés esetén a modell válasza bármely részét idézheti a
átírásnak strukturált jelzőhatár nélkül. A megőrzött hívásnapló
`responseBody`-ját ezért egy kihagyási jelölő váltja fel; a részletes
pipeline artefaktum (amely tartalmazhatja a felfelé irányuló/ügyfél testeket és
stream darabokat) nem kerül megőrzésre. A szemantikai, idempotens és
érvelés-visszajátszó cache-ek megkerülik a kérés olvasását és írását. A
szolgáltató kérés és az ügyfél számára látható válasz változatlan marad. A
korai keepalive bájtokat eltávolítják a ideiglenes pufferből, amikor a részletes
artefaktumot kihagyják. Kiro hibás EventStream figyelmeztetése csak a payload
bájtok számát jelzi, soha nem a tartalmát vagy a JSON parser nyers hibáját.
Ez nem állítja, hogy minden nem kapcsolódó szolgáltató/plugin diagnosztikát
ellenőriztek; a szélesebb megőrzött-szennyvíz takarítást a #11658 nyomon
követi.

A belső `/api/modality-bridge/video/drilldown` életciklus egy külön,
loopback/token-hitelesített cache alap. Minden művelethez szükséges egy
kanonikus opak fő ID. Mielőtt egy termelési hívó engedélyezve lenne, le kell
vezetnie ezt az ID-t az azonosított bérlőtől, és soha nem szabad továbbítania
egy ügyfél által választott értéket. A cache kulcsok összekapcsolják ezt a
főt a kanonikus munkamenet és videó-referencia ID-kkal, csak az SHA-256-ból
származó kulcsokat tárolják, és a beolvasásokat és törléseket is ugyanarra a
főre korlátozzák. A cache legfeljebb 16 származtatott JPEG keretet tárol
bejegyzésenként, tíz perc után lejár, és támogatja a korlátozott
`start`/`end` olvasásokat vagy a kifejezett munkamenet törlést.

Minden fő legfeljebb 16 bejegyzésre és 64 MiB kanonikus JPEG adatra van
korlátozva. Ezek a korlátok függetlenek a globális 64-bejegyzéses/256 MiB
maximumtól: a fő kvóta nyomás csak a legkevésbé használt bejegyzéseket
távolítja el, mielőtt a globális LRU eltávolításra kerülne. A lejárt
bejegyzéseket eltávolítják mind a fő, mind a globális számításból a cache
tevékenység során, míg a törlés és az érvényesítési hiba nem hajt végre
részleges cserét.

A cache elutasítja a nem kanonikus Base64-t, a felesleges kitöltést, a nem-JPEG
médiafájlokat, a hibás vagy levágott JPEG-ket, és a JPEG-ket, amelyek figyelmeztetést
okoznak egy korlátozott teljes képes `sharp` dekódolás során. Minden elfogadott
képet kanonikus JPEG-ként újrakódol, a szélességet és a magasságot a dekódolt
bájtokból vezeti le, a hívó mezőkre való támaszkodás helyett, és eldobja a
bármilyen hátramaradt polyglot bájtokat, ahelyett, hogy megőrizné őket. Csak a
korlátozott kanonikus tömörített puffert számolják mindkét kvótához. A JSON
drótkorlát tartalmazza a Base64 overheadet a 32 MiB dekódolt-bemeneti maximumhoz.
Minden tárolt származtatás rögzíti a validált JPEG formátumát/felbontását,
mintavételezési politikáját, származtatási verzióját, létrehozási idejét,
szerver által számított tartalom hash-t, és a hashelt szülő referenciát, valamint
a megbízható hívó szülő-tartalom hash-át. A törlést az aszinkron dekódolás/hash
fázisok között ellenőrzik, mielőtt az atomikus cache elköteleződne.

A termelési előállító csak sikeres vizuális elemzés után használja újra a már
származtatott bróker kereteket, második videó letöltés/kivonás nélkül. Szükséges
az operátor `modalityBridgeVideoDrilldownEnabled=true`, szigorú per-rész
`drilldown: true`, és egy hitelesített API-kulcs rekord ID. Az ügyfél által
deklarált fő/munkamenet értékek soha nem állítanak fel tulajdonjogot. E három
feltétel nélkül nem hash-el, nem méretezi át, és nem őriz meg további kereteket.
A megőrzési hiba megőrzi a felhasználható vizuális választ. A beleegyezett
kérések megkerülik a teljes videó eredmény cache-t, így a cache-elt eredmények
soha nem játszanak vissza kezelőket.

A sikeres JSON és SSE válaszok legfeljebb négy opak kezelőt tárnak fel a
korlátozott `x-omniroute-video-drilldown` fejlécben. Az engedélyezett böngésző
eredetek olvashatják ezt a fejlécet anélkül, hogy szélesítenék a CORS
eredetpolitikát. Az új kezelők `v1.<32-byte random base64url token>` formátumúak,
és a nyilvántartás csak az SHA-256 hash-okat őrzi meg. Az olvasó/fejléc
elemzője a régi 64-hex tokeneket is elfogadja. A hitelesített nyilvános
fogyasztó a `GET /api/v1/video-bridge/drilldown?handle=...`, függetlenül
szabályozva a `modalityBridgeVideoDrilldownRemoteEnabled=true` által. A
kifejezett megőrzött hamis visszavonja a hozzáférést, még akkor is, ha a régi
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` környezeti
visszaesés engedélyezve van. A termelési megőrzésnek analóg régi
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` visszaesése van. Mindkét
visszaesés alapértelmezés szerint ki van kapcsolva.

A fogyasztó a hitelesített kulcsból vezeti le a tulajdonjogot, alkalmazza a kulcs
politikát, és ugyanazt a 404-et adja vissza ismeretlen, lejárt és más kulcsok
kezelői esetén. Elfogadja a `variant=preview|standard|detail` (maximum JPEG
méret 320/640/1280, soha nem nagyobbítva), `limit=1..8` (vagy a régi
`frames` alias, soha nem mindkettő), nullázott `page`, és opcionális
`start`/`end` fókusz másodperceket. A duplikált
lekérdezési kulcsokat és a megfordított fókusz ablakokat elutasítják. Minden
visszaadott variáns rendelkezik a tényleges tartalom és tényleges felbontás
metadatájának hash-jával, amely a megőrzött forráshoz van kapcsolva. A variánsok
olvasáskor származnak, nem pedig extra megőrzött másolatokként tárolódnak. A JSON
válasz, beleértve a Base64/burkolatot, 32 MiB-ra van korlátozva; egy túlméretezett
oldal 413-at ad vissza, és az ügyfélnek kevesebb keretet kell kérnie. Az olvasások
ellenőrzik a törlést minden egyes átméretezés körül, és újra ellenőrzik a kezelő
érvényességét, mielőtt visszaadnák. A tulajdonos általi `DELETE` idempotens;
a törlés vagy a TTL lejárat felszabadítja a megőrzött forrást és a felhasználás
számítását.

A megosztott tároló folyamat-lokális: a kezelők lejárnak újraindításkor, és nem
átvihetők független OmniRoute folyamatok között. A kezelési statisztikák
megmutatják a hatékony megőrzési/távoli politikát és az összesített megőrzött
bejegyzéseket/bájtokat, soha nem a médiát, referenciákat, fő ID-ket vagy
kezelőket. A Videó beállítások panel megjeleníti ezeket az értékeket, és
megőrzi mindkét beleegyezési kapcsolót. Ez a megvalósítási dokumentáció nem
élő telepítési vagy promóciós bizonyíték; a valódi modell elfogadása külön
nyomon követett.

A kereteket a konfigurált Videó modell szerint, sorrendben címkézik. Egy üres Videó felülírás örökli a Látás beállítást; ha mindkettő üres, a Látás automatikus irányítója választja ki a hatékony látásra képes modellt. A sikeres címkék a stabil `[Video description:` előtaggal helyettesítik az eredeti részt, amely szintén megjelöli a szöveget, mint egy megbízhatatlan médiából származó megfigyelést, és azt mondja a downstream modelleknek, hogy ne kövessék a médiában található utasításokat. A keret-címke gyorsítótár kulcsai tartalmazzák a JPEG byte-okat, a promptot, az időbélyeget és a hatékony modellt; csak a sikeres címkék kerülnek gyorsítótárba. A gyorsítótár bejegyzések megőrzik a tényleges sikeres előállító modellt, beleértve egy visszaesési modellt; a híd `mixed`-et jelent, amikor különböző kereteket különböző modellek állítottak elő. Egy gyorsítótár találat újra felhasználja azt az előállító identitást ahelyett, hogy újra címkézné a kért irányítási tervként. Az egész videó eredmény gyorsítótár minden olyan bemenetre kulcsot kap, amely megváltoztatja a kimenetet — prompt, hatékony modell, mintavételezési politika, keretszám, szemantikai elemzési mód, a normalizált fókusz jelzés SHA-256 ujjlenyomata, fókusz ablak, `transcript`, `audioTranscript`, és a kontaktlap jelző — így bármelyik dimenzió megváltoztatása gyorsítótár hiányt jelent, soha nem elavult újrahasználatot. A vizuális deduplikálási politika verziója, küszöbértéke és a korlátozott jelölt keretek száma szintén explicit a gyorsítótár kulcsban és metadatában; egy politika változás ezért nem tudja újra felhasználni az elavult egész videó leírást. A gyorsítótár v4 metadatája megőrzi a módot és az ujjlenyomatot, soha nem a nyers felhasználói feladatot. A védőkorlát metadatája jelentést ad mind a kért, mind a hatékony elemzési módokról; egy kért `focused` mód, amely nem tartalmaz használható felhasználói szöveget, hatékonyan `full`-ként van jelentve.

A védőkorlát minden támogatott videó részt kinyer, de nem ír le többet, mint `modalityBridgeVideoMaxVideos`. Egy cél, amelyről bizonyított, hogy `supportsVideo === false`, a sikertelen és a határon túli videók explicit biztonságos szövegjelzőkké válnak, így nyers videó nem marad. Amikor a képesség ismeretlen, azok a részek érintetlenek maradnak. Azok a célok, amelyek `supportsVideo === true`, megkerülik a hidat. Az ügyfél kérés megszakító jel propagálódik a letöltés, a bróker sor, a subprocesszek és a címke hívások között; a megszakítások a videók között állnak meg, és soha nem nyitnak meg nyers médiára.

A futási beállítások DB-alapúak és Zod-érvényesítettek:

| Kulcs                               | Alapértelmezett | Tartomány / viselkedés                                                                                               |
| ----------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`         | Opcionális futásidő, beleegyezés                                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | `full` megőrzi a generikus címkéket; `focused` korlátozott, megbízhatatlan legutolsó felhasználói kontextust használ |
| `modalityBridgeVideoModel`          | `""`            | Örökli a Látás Híd modellt                                                                                           |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware`, vagy arányos `segment_aware`; a detektor hiba visszaesik `uniform`-ra                      |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                                       |

A régi, megőrzött Videó időtúllépési értékek, amelyek meghaladják a 120 másodpercet, a bróker határidőhöz vannak rögzítve; az új beállítások, amelyek ezen a határon túl írnak, elutasításra kerülnek. A `GET /api/modality-bridge/video/runtime` megbízható bélyegzővel ellátott hurok visszajelzést igényel az autentikáció vagy futásidőbeli próba előtt, majd menedzsment hitelesítést igényel. Csak `available`, sanitált FFmpeg/ffprobe verziókat és egy fix okot ad vissza, amikor a futásidő nem elérhető. A belső kinyerési végpont nem nyilvános feltöltési API: a sor telítettsége `503`-at ad vissza `Retry-After`-ral, a hívó bontása `499`-et, és a fix bróker határidő `504`-et ad vissza. A konvertált válaszok hozzáadják a `video->text;model=<visionModel>;parts=<videos>`-t a központi `x-omniroute-modality-bridge` fejléchez anélkül, hogy eltávolítanák a Látás vagy Audio szegmenseket.

### PII Maszkáló (`piiMasker.ts`)

**Mindkét** szakaszon fut.

- **`preCall`** klónozza a payloadot, végigjárja a `system`, `messages`, `input` és `prompt` (beleértve a sima szöveges elemeket), és alkalmazza a `processPII()`-t (a `@/shared/utils/inputSanitizer`-ből) a szöveges `content`/`text` mezőkre. Amikor `PII_REDACTION_ENABLED=true`, a észlelt PII a kimeneti payloadban eltávolításra kerül. Ez független az `INPUT_SANITIZER_MODE`-tól (amely csak a prompt-befecskendezési politikát szabályozza). Amikor az eltávolítás ki van kapcsolva, a hívás nyilvántartja az észlelési számokat anélkül, hogy átírná a tartalmat.
- **`postCall`** mély klónozza a választ, futtatja a `sanitizePIIResponse()`-t plusz a Válasz-API-alak maszkálót (`maskResponsesOutput` — lefedi az `output_text`-et és az `output[].content[].text`-et). Ha bármilyen eltávolítás történik, a módosított válasz helyettesíti az eredetit.

A védőkorlát soha nem blokkol; csak annotál (`meta.detections`, `meta.redacted`) vagy átír.

### Prompt Befecskendezés (`promptInjection.ts`)

Észleli az ellenséges struktúrákat a felhasználó által megadott tartalomban, és érvényesíti a konfigurált politikát. A viselkedést környezeti változók és konstruktor opciók vezérlik:

| Beállítás         | Környezeti változó                                                                                   | Alapértelmezett | Hatás                                                                                                                                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Engedélyezve      | `INPUT_SANITIZER_ENABLED`                                                                            | `true`          | Ha `false`, a védőkorlát rövidre zár.                                                                                                                                                                 |
| Mód               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`          | Befecskendezési politika: `block`, `warn` vagy `log`. (`redact` visszafelé kompatibilis, de **nem** távolítja el a befecskendezési szöveget; a PII átírása a `PII_REDACTION_ENABLED` által vezérelt.) |
| Blokkolási küszöb | `blockThreshold` opció / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`          | Minimális súlyosság, amely szükséges a blokkoláshoz. Az alapértelmezett közepes csak megfigyelésre szolgál.                                                                                           |

**Mód előny** (`getMode`): hívó `options.mode` →
`INJECTION_GUARD_MODE` **DB funkció-flag felülírás** (Dashboard → Beállítások →
Funkciók zászlói) → `INJECTION_GUARD_MODE` környezeti változó → `INPUT_SANITIZER_MODE` környezeti változó →
`warn`. Ezért egy dashboard felülírás felülmúlja a környezeti változókat, így a Funkciók
Zászlói UI vezérli a futó védőkorlátot élőben (nincs újraindítás). Az DB olvasás biztonságos:
ha hiba lép fel, a védőkorlát visszaáll a környezeti alapú viselkedésre, és amikor nincs
beállítva felülírás, a viselkedés azonos a környezeti alapú megoldással.

Észlelési források:

1. `sanitizeRequest()` az `@/shared/utils/inputSanitizer`-ből (megosztott detektor
   készlet, amelyet máshol is használnak a csővezetékben).
2. Beépített `DEFAULT_GUARD_PATTERNS` (jelenleg `system_override_inline` és
   `markdown_system_block`, mindkettő `high` súlyosság).
3. Opcionális `customPatterns`, amelyeket a konstruktor opciókon keresztül adnak át (stringek, regex,
   vagy `{ name, pattern, severity }` rekordok).

Amikor `mode === "block"` **és** legalább egy észlelés megfelel a súlyossági
küszöbnek, a `preCall` visszaadja `{ block: true, message: "Kérés elutasítva:
gyanús tartalom észlelve" }`. A `warn`/`log` módokban a védőkorlát naplóz, de
engedélyezi a hívást. A megosztott segédprogram `evaluatePromptInjection()` szintén exportálva van
azok számára, akiknek szükségük van a promptok értékelésére anélkül, hogy áthaladnának a nyilvántartáson.

**Vizsgálati határ (v3.8.20):** a detektor csak az **első 16 KB**-t vizsgálja
a csatlakoztatott prompt szövegből — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) a
`src/shared/utils/inputSanitizer.ts`-ben. Mind a `detectInjection()`, mind az
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)`-t hajt végre a minta ciklus futtatása előtt. A befecskendezési direktívák a bemenet tetején helyezkednek el, így ez
korlátozza a regex CPU/GC-t a több száz KB-os payloadok esetében anélkül, hogy gyengítené az észlelést (lásd.
#3932, #4041).

### Hitelesítő adatok maszkoló (`credentialMasker.ts`)

**Mindkét** szakaszban fut, utolsó a default láncban (prioritás `95`). Maszkálja
a jól ismert API-kulcs / titkos token mintákat a kimeneti payloadból (üzenet
tartalom, eszközhívás argumentumai, eszköz eredmények) **és** a szolgáltató válaszából, így egy
promptba beillesztett hitelesítő adat (vagy egy eszköz eredménye által visszhangozva) nem szivárog
a felfelé irányuló szolgáltatóhoz vagy vissza az ügyfélhez.

- **Csak opciós**, ugyanaz a konvenció, mint a PII maszkolás (Kemény Szabály #20-melléklet):
  letiltva, hacsak `settings.credentialRedactionEnabled === true` **vagy**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ha ki van kapcsolva, a védőkorlát nem végez semmilyen műveletet —
  soha nem blokkol, és soha nem ír át.
- A `redactCredentials()` bejárja a teljes payload/válasz fát (`walkValue()`,
  prototípus-szennyezésbiztos, ciklusbiztos a `WeakSet`-en keresztül) és a
  találatokat egy `[REDACTED:<type>]` helyettesítő szövegre cseréli, csak azokat az ágakat klónozva, amelyek valóban
  megváltoztak.
- A `CREDENTIAL_PATTERNS` lefedi az LLM szolgáltató kulcsokat (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokeneket (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), fizetési kulcsokat (Stripe, Square), felhő
  kulcsokat (AWS hozzáférési kulcs, Twilio, SendGrid, Mailgun), privát kulcsokat / JWT-ket,
  hitelesítő adatokat tartalmazó kapcsolati karakterláncokat (`mongodb://user:pass@...`, stb.), és
  egy általános `Authorization`/`x-api-key`/`api-key`/`apikey` fejléc-érték
  mintát. A fejléc alakú kulcsok (`authorization`, `x-api-key`, `api-key`,
  `apikey`) struktúráltan vannak maszkolva (csak az érték, a séma előtag, mint
  `Bearer `/`Basic ` megőrzésre kerül) ahelyett, hogy a generikus szöveg regex-en keresztül történne.
- A védőkorlát soha nem blokkol; csak átírja (`modifiedPayload` /
  `modifiedResponse`) és annotálja (`meta.credentialsRedacted`, `meta.count`).

Visszacsatoló védő: `tests/unit/credential-masker-guardrail.test.ts`.

## Alapszerződés (`base.ts`)

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
  block?: boolean; // true esetén megszakítja a láncot
  message?: string; // blokkoláskor jelenik meg
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // a preCall adja vissza a kérés átírásához
  modifiedResponse?: TValue; // a postCall adja vissza a válasz átírásához
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

Egy védőkorlát a „nincs változás” állapotot a `void`, a `{}` vagy a
`{ block: false }` egyikének visszaadásával jelzi. A `modifiedPayload`/`modifiedResponse`
visszaadása lecseréli a láncon továbbhaladó értéket a soron következő védőkorlátok számára.
A `signal?: AbortSignal` továbbítja a hívó életciklusát a védőkorlátoknak. A kérés megszakítása a szándékos, hibát átengedő kivétel: a médiakezelő hidak leállítják a munkát és elvégzik a takarítást anélkül, hogy visszaállítanák a nyers médiát egy olyan cél számára, amelyről ismert, hogy nem támogatja azt.

## Nyilvántartó (`registry.ts`)

A singleton `guardrailRegistry` a következőket teszi elérhetővé:

- `register(guardrail)` — hozzáad egy védőkorlátot (vagy lecseréli a normalizált név alapján), majd
  növekvő `priority` szerint újrarendezi őket.
- `clear()` / `list()` — adminisztratív segédfüggvények.
- `runPreCallHooks(payload, context)` — végiglépked az aktív védőkorlátokon, továbbfűzi a
  hasznos adatot a `modifiedPayload` segítségével, és az első `block: true` értéknél leáll.
- `runPostCallHooks(response, context)` — ugyanez a folyamat a válaszoldalon.
- `resetGuardrailsForTests({ registerDefaults })` — törli az állapotot, és opcionálisan
  újraregisztrálja az alapértelmezéseket a tesztek tiszta elkülönítése érdekében.

Mindkét futtató `{ blocked, payload|response, results, guardrail?, message? }`
értéket ad vissza, ahol a `results` `GuardrailExecutionResult` rekordok tömbje, amelyek
védőkorlátonként tartalmazzák a `blocked`, `skipped`, `modified`, `error` és `meta` mezőket,
ami hasznos a nyomkövetéshez.

### Védőkorlátok letiltása kérésenként

A `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` összegyűjti azon
védőkorlátok neveinek duplikációmentes listáját, amelyeket az aktuális
kérésnél ki kell hagyni. A források (mind opcionális, és mindegyik összevonásra kerül):

- `apiKeyInfo.disabledGuardrails`
- A kérés törzsében lévő legfelső szintű `disabledGuardrails`
- A kérés törzsében lévő `metadata.disabledGuardrails`
- Az `x-omniroute-disabled-guardrails` fejléc (vagy a korábbi
  `x-disabled-guardrails`)

Az értékek lehetnek karakterláncok tömbjei vagy vesszővel elválasztott karakterláncok; a nevek
normalizálása kisbetűs kebab-case formátumra történik (`pii_masker` → `pii-masker`). Az eredmény
a `context.disabledGuardrails` mezőn keresztül kerül a nyilvántartóhoz, amely kihagyja
az egyező védőkorlátokat (`skipped: true` a `results` tömbben).

## Végrehajtási sorrend

Minden, a `src/sse/handlers/chat.ts` és az
`open-sse/handlers/chatCore.ts` fájlon áthaladó kérés esetén:

1. A `resolveDisabledGuardrails(...)` létrehozza a kihagyási listát az API-kulcsból, a törzsből
   és a fejlécekből.
2. A `guardrailRegistry.runPreCallHooks(body, ctx)` növekvő prioritási
   sorrendben futtatja a védelmi korlátokat:
   - A letiltott védelmi korlátokat `skipped` állapottal rögzíti.
   - Az egyes védelmi korlátok `preCall` műveletei a `modifiedPayload` segítségével átírhatják az adatterhet.
   - Az első `block: true` rövidre zárja a láncot, és a kezelő
     egy, a védelmi korlát általi elutasítást jelző választ ad vissza.
3. A (potenciálisan átírt) adatteher továbbhalad a kombinált útválasztáshoz és a felsőbb rétegbe
   történő továbbításhoz.
4. A válasz összeállítása után a `guardrailRegistry.runPostCallHooks(...)`
   ugyanazt a láncot futtatja a válaszon. A `block: true` ebben az esetben elveti a felsőbb réteg
   válaszát.

A kivételt dobó védelmi korlátokat `error: <message>` értékkel rögzíti, és a
`logger.warn` segítségével naplózza a rendszer, de a lánc folytatódik — a tervezés szerint hiba esetén átengedő módon.

## Konfiguráció

A beépített védelmi korlátok által beolvasott környezeti változók:

| Változó                               | Használja                       | Hatás                                                                                                                                    |
| ------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`              | Állítsa `false` értékre az észlelés teljes letiltásához.                                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`              | Injektálási szabályzat: `warn`, `block` vagy `log`. Az örökölt `redact` érték nem írja át az injektált szöveget.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`              | Az injektálás elleni védelem módja; egyben egy adatbázisbeli funkciójelző is, amely **felülbírálja** a környezeti változókat (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`              | A `MODE=block` által elutasított minimális súlyosság: `high` (alapértelmezett), `medium` vagy `low`.                                     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`              | Az `INPUT_SANITIZER_BLOCK_THRESHOLD` örökölt álneve.                                                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`                    | `true` esetén a kérésben szereplő személyazonosításra alkalmas adatokat kitakarja a rendszer (az injektálási módtól függetlenül).        |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (kimeneti oldalon) | A válaszoldali maszkoló viselkedését szabályozza.                                                                                        |

A Modality Bridge védelmi korlátai futásidejű konfigurációjukat az adatbázis-alapú beállítástárból
(`getSettings()`) olvassák, nem környezeti változókból. A Vision elsődleges kulcsai:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` és
`modalityBridgeCacheMaxEntries`. Az örökölt
`visionBridge*` kulcsokat kizárólag a dokumentált, egy cikluson át elérhető olvasási
tartalékmegoldásként fogadja el a rendszer; az irányítópulton végzett írások az elsődleges kulcsokat használják. Az alapértelmezések és a tartalékérték-feloldó
a `src/shared/constants/modalityBridgeDefaults.ts` fájlban találhatók, az örökölt
konstansokat pedig a `src/shared/constants/visionBridgeDefaults.ts` őrzi.

A hangfeldolgozás a `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` és `modalityBridgeAudioMaxClips` beállításokat, valamint a megosztott
`modalityBridgeCache*` beállításokat használja. A hangfeldolgozáshoz nem tartozik örökölt kulcsokra épülő tartalékmegoldás, mert ezek
a kulcsok a Modality Bridge sémával együtt jelentek meg.

A videófeldolgozás a `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` és
`modalityBridgeVideoTimeout` beállításokat, valamint a megosztott `modalityBridgeCache*` beállításokat használja.
Alapértelmezés szerint le van tiltva, mivel az FFmpeg/ffprobe opcionális üzemeltetési
függőségek, a képkockák feliratozása pedig növeli a késleltetést és a modellhasználat költségét.

## Egyéni védőkorlátok

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

Lépések:

1. Hozza létre a `src/lib/guardrails/myGuardrail.ts` fájlt a `BaseGuardrail` kiterjesztésével.
2. Implementálja a `preCall` és/vagy a `postCall` metódust.
3. Regisztrálja importáláskor (a `registerDefaultGuardrails` függvényből hozzáadva), vagy
   futásidőben hívja meg a `guardrailRegistry.register(...)` metódust — a regisztrációs jegyzék
   lecseréli az azonos normalizált nevű korábbi védőkorlátot.
4. Adjon hozzá teszteket a `tests/unit/` könyvtárban (meglévő példák:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tesztelés

A tesztek között használja a `resetGuardrailsForTests()` függvényt, hogy ismert állapotból induljon.
Üres regisztrációs jegyzékkel való indításhoz adja át a `{ registerDefaults: false }` értéket, és
csak a tesztelendő védőkorlátokat regisztrálja. A Vision Bridge támogatja a függőséginjektálást
(`deps.getSettings`, `deps.callVisionModel`); az Audio Bridge ezzel egyenértékű csatlakozási
pontokat biztosít a beállításokhoz, képességekhez, az STT-modell kiválasztásához, a hitelesítő
adatok ellenőrzéséhez és az átíráshoz. A tesztek így adatbázis- vagy hálózati hozzáférés nélkül
is ellenőrizhetik mindkét folyamatot.

## Lásd még

- `src/lib/guardrails/` — implementáció
- `src/shared/utils/inputSanitizer.ts` — a promptinjektálás és a személyazonosításra alkalmas adatok maszkolását
  működtető megosztott detektor
- `src/shared/constants/visionBridgeDefaults.ts` — a Vision Bridge alapértelmezett értékei és
  a kényszerített hídként kezelt modellek listája
- `src/shared/constants/modalityBridgeDefaults.ts` — a Vision/Audio megosztott futásidejű alapértelmezett értékei
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonális réteg (áramkör-megszakító, várakozási idők)
- `docs/reference/ENVIRONMENT.md` — a környezeti változók teljes referenciája

## Az injektálásvédő útvonal-lefedettsége és red-team tesztelése (8. fázis · D blokk)

Az injektálásvédő (`createInjectionGuard` / `withInjectionGuard`) minden olyan útvonalat lefed,
amely felhasználói promptokat fogad. Figyelembe veszi az `INJECTION_GUARD_MODE` beállítást
(alapértelmezés szerint `warn` = csak naplózás; `block` = HTTP 400 `SECURITY_001` választ ad vissza).

| Típus            | Útvonalak                                                                                                                                            | Alapértelmezett mód |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Szöveg (meglévő) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatív        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Adat             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

A szövegkinyerés (`extractMessageContents`) a `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőket kezeli.

**Red-team (éjszakánként, `nightly-llm-security.yml`):** a promptfoo ellenőrzi, hogy minden útvonal
blokkolja-e az OWASP-LLM korpuszt `INJECTION_GUARD_MODE=block` módban; a garak próbákat futtat
(titkos érték hiányában kihagyja őket). A `moderations` a konzisztencia érdekében szerepel — a
blokkoló módot használó üzemeltetők a `resolveDisabledGuardrails` segítségével mentesíthetik.

Az éjszakai munkafolyamat (`.github/workflows/nightly-llm-security.yml`, cron + kézi
indítás) két feladatot tartalmaz:

- **`promptfoo-guard` (blokkoló)** — futtatja a `promptfoo eval -c promptfooconfig.yaml`
  parancsot `INJECTION_GUARD_MODE=block` beállítással. Minden ellenséges teszteset (például „hagyj
  figyelmen kívül minden korábbi utasítást…”, DAN-stílusú jailbreak-kísérletek) ellenőrzi, hogy a válasz
  tartalmazza-e az `error.code === "SECURITY_001"` értéket, vagyis hogy a védő valóban elutasította-e a kérést.
- **`garak` (tájékoztató jellegű)** — a garak `--probes promptinject,dan,leakreplay`
  próbáit futtatja egy helyi OmniRoute-példánnyal (`http://localhost:20128/v1`) szemben. Egy
  szolgáltatói titkos érték (`PROMPTFOO_PROVIDER_KEY`) meglétéhez kötött; annak hiányában szabályosan
  kimarad, és az `|| true` utótagot kapja, így jelentést készít anélkül, hogy meghiúsítaná a CI-folyamatot.

A védő segédfüggvény (`createInjectionGuard` / `withInjectionGuard`) lefedettsége
minden promptot fogadó `/v1` útvonalra kiterjed; a prompt szövegét a
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőkből
az `extractMessageContents()` nyeri ki a `src/shared/utils/inputSanitizer.ts` fájlban.
