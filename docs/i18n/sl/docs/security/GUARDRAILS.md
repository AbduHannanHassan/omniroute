# Guardrails (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Vir resnice:** `src/lib/guardrails/`
> **Nazadnje posodobljeno:** 2026-08-29 — v3.8.51 (izvor prepisa Video Bridge določi klicatelj,
> strežnik pa ga še ne preverja — pojasnjeno skladno z #11661)

Varovala uveljavljajo varnost, pravilnike in preoblikovanje vsebine na meji
med OmniRoute in ponudniki v zaledju. Vsako varovalo lahko pregleda (in
po želji zavrne, preoblikuje ali opremi z opombami) koristne vsebine zahtev (`preCall`) ter
odzive iz zaledja (`postCall`).

Sistem je zasnovan tako, da ob napaki **dovoli nadaljevanje**: če varovalo med izvajanjem sproži izjemo, register
zabeleži napako in nadaljuje z naslednjim varovalom, namesto da bi
zahteva spodletela. Blokiranje je izrecna odločitev (`block: true`), nikoli naključje.

## Vgrajeni zaščitni mehanizmi

Registracija samodejno naloži šest zaščitnih mehanizmov v prioritetnem vrstnem redu ob uvozu
(glej `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteta | Ime                 | Faza(e)        | Datoteka              |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižje številke prioritet se izvajajo **prvi**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Zajame zahteve, ki vsebujejo slike, usmerjene na **ne-vizualne modele**, in bodisi
preusmeri celo zahtevo na model, ki podpira vizijo, bodisi nadomesti dele z
opisom slik, ki ga ustvari konfigurabilni vizualni model, pred
zgornjim klicem. To omogoča, da ponudniki, ki podpirajo le besedilo, prosto obravnavajo
multimodalne podatke.

Potek:

1. Preskoči, če ciljni model že podpira vizijo (razen če se pojavi na
   seznamu prisilnih mostov `isVisionBridgeForcedModel`).
2. Izvleči dele slik preko `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ki delegira na **enotnega medijskega
   detektorja** `detectMediaParts()` v `open-sse/utils/mediaParts.ts` —
   edini vir resnice, ki ga deli kombinirani filter združljivosti.
   Izvlečenje je dovoljeno le za vrhnje dele oblik,
   ki jih lahko `replaceImageParts` ponovno vstavi (pogodba o izvlečenju↔zamenjavi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, in Responses API `input_image`. Vloženi zadetki in
   oblike, ki so le indikatorji, so material za kombinirani filter in nikoli niso izvlečeni.
   Preskoči, če ni najdenih.
3. Razreši konfiguracijo v času izvajanja preko `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključi nastavitev `modalityBridge*`
   zmagajo; dediščinski ključi `visionBridge*` ostanejo **enokratni
   rezervni** (okno za povratno delovanje). Preskoči pred kakršnimikoli medijskimi prehodi, ko je
   most onemogočen.
4. Izbirnik načina (`modalityBridgeVisionMode`, glej spodnjo tabelo) odloča
   o preusmeritvi proti opisu. Preusmeritev vrne `modifiedPayload` z le zamenjanim `model`,
   plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Pot opisa: omeji slike na `maxImages`, sestavi nalogo-zavedajoč poziv,
   posvetuj se s predpomnilnikom opisov, pokliči vizualni model **v vzporedju**
   (`Promise.allSettled`), in injiciraj `[Image N]: <description>` besedilne dele na
   njihovo mesto. Neuspešen opis vrne `null` in izvirni del slike je
   **ohranjen** (#4012) — razen na kombinirani poti opisa, ko je vsak
   opis neuspešen, kjer potrjen ne-vizualni zgornji del dobi
   `(unavailable — no vision-capable provider connected)` nadomestek (#8430).
6. Vrni `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Izbirnik načina (`modalityBridgeVisionMode`)

| Način      | Privzeto | Obnašanje                                                                                                                                                                                                                                                       |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Dediščinska heuristika, nedotaknjena (#6640/#7204): ne-kombinirani/`auto/` modeli preusmerijo na najboljši vizualni model, razen če ima izvirni model že uporabne poverilnice (potem opiše); cilji kombinacije vedno opisujejo.                                 |
| `describe` |          | Vedno opisuj — blok preusmeritve se popolnoma preskoči; izbrani model uporabnika vedno odgovori.                                                                                                                                                                |
| `reroute`  |          | Prisilna preusmeritev: zaščita za ohranjanje poverilnic modela je obšla. Zaščita za preusmeritev-**cilj** še vedno velja — ko ne obstaja uporabni vizualni cilj, zahteva preide na opis, tako da surove slike nikoli ne dosežejo le besedilnega ozadja (#8430). |

Prisilni načini prekinjajo **pred** izvajanjem avtomatske heuristike; obnašanje `auto`
je byte-identično prejšnjem zaščitnem mehanizmu PR-1.

#### Naloga-zavedajoč opisni poziv (`modalityBridgeVisionTaskAware`)

Privzeto **res**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) doda
besedilo **zadnje uporabniške sporočila** (skrajšano na 500 znakov) osnovnemu
opisnemu pozivu, usmerja opis k temu, kar je uporabnik dejansko vprašal
(paterni codex-vision-proxy) in prosi vizualni model, da prepiše vidno
besedilo. Ko je zastavica izklopljena — ali ni besedila uporabnika — se uporablja
osnovni poziv brez sprememb.

Opis samopovezave OpenAI-kompatibilne zahteve (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vedno zahteva `image_url.detail: "high"` —
brezpogojno, za vsakega klicatelja/ponudnika, ne glede na signal stranke.
Vzorec z nizko podrobnostjo poslabša natančnost OCR za točno nalogo
prepisovanja besedila, za katero ta poziv zahteva, zato sam poziv za opis
vedno zahteva visoko podrobnost ne glede na to, katero raven podrobnosti je
uporabila prvotna vhodna zahteva. To vpliva le na notranje telo zahteve za
opis; ne spremeni, kako OmniRoute posreduje lastno `image_url.detail`
klicatelja na primarni zahtevek — ta privzeti parameter se uporablja ločeno
in le za zaznane stranke OpenCode, v `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Anthropicova žična
formatna veja samopovezave za opis nima polja `detail` in ni prizadeta
z nobenim privzetim.

#### Omejitev izhoda opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Privzeto | Obseg             |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` ali 100–50000 |

`0` (privzeto) pomeni **brez omejitve** — opis, vrnjen z
`callVisionModel()`, se prenese nespremenjen, kar ohranja obstoječe
vedenje. Vsaka vrednost v obsegu 100–50000 skrajša opis z
`…` pripono, preden se ponovno vključi kot `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Povečajte to za naloge OCR z veliko podrobnostjo, kjer model
v nadaljevanju potrebuje celoten prepis; zmanjšajte, da omejite uporabo
tokenov pri komunikativnih vizualnih modelih. Polje na nadzorni plošči se
nahaja na zavihku Vision v razširjenem panelu
(`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) in omeji
vsako vrednost med 1 in 99 na 100, medtem ko ostane izrecna `0`
neprizadeta — `0` je veljavna Zod vrednost sama po sebi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ne le
"ne nastavljena" privzeta.

#### Predpomnilnik opisa (`modalityBridge/bridgeCache.ts`)

V pomnilniku LRU + TTL predpomnilnik za izhode opisa, deljen po celotnem
procesu. Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
z dolžinsko-prefiksno obliko (brez trkov na mejah polja). Modelski
komponent je **konfiguriran** mostovni model, ne model, ki je dejansko
odgovoril — `callVisionModel` se lahko interno vrne, in ključevanje
po poskusu bi razdroblilo predpomnilnik. Neuspešni opisi nikoli niso
predpomnjeni. Nastavitve:

| Ključ                           | Privzeto | Obseg   |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalizacija oddaljenih slik (samopovezava opis/base64 pridobitev)

Ko most pridobi **oddaljeno** sliko — samoklic za opis Anthropic in
pretvorba v base64 v formatu claude-wire
(`ensureBase64ImagesForClaudeWire`), oboje preko
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — se
pridobljeni podatkovni URI prenese skozi `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) preden se vključi v zahtevo
vizualnega modela. Prevelike slike se zmanjšajo na **2048px dolgi rob**
(kar ustreza omejitvi za spremembo velikosti, ki jo OpenAI/Anthropic
že uporabljata na strežniški strani), kar zmanjša
bajte/latenco pri nalaganju, ne da bi spremenilo, kar vidi vizualni model.
Sprememba velikosti uporablja `sharp`, naložen preko dinamičnega
uvoza: na platformi, kjer se njegova izvorna binarna datoteka ne naloži,
`normalizeDataUri()` **nikoli ne vrže napake** — vrne se na
prenos izvornih bajtov, tako da pot opisa/pretvorbe v base64
vedno deluje. Bajti, ki niso slike (pridobitev, ki ni vrnila
dekodirne slike), se prav tako prenesejo nespremenjeni. Ta normalizacija
je omejena na slike, ki jih most pridobi za svoj samoklic — nikoli se ne
uporabi na surovem prenosnem tovoru klicatelja, kar je v skladu s
načelom mutacije le po izbiri (Trda pravila #20).

#### Shema nastavitev + migracija

Nova `modalityBridge*` ključi so Zod-validirani v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojica `modalityBridgeCache*`, in
skupina `modalityBridgeAudio*`, ki jo uporablja Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopira obstoječe dediščinske
`visionBridge*` vrednosti na ustrezne nove ključe (idempotentno, nikoli
ne prepisuje vrednosti `modalityBridge*`, ki jo nastavi operater);
dediščni ključi ostanejo sprejeti kot bralni rezervni za en cikel
izdaje.

#### Glava preglednosti + statistika

Odgovori, spremenjeni z opisom, nosijo
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(ustvarjeno z `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
označeno z `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Preusmerjene zahteve ne dobijo **nobene** glave — tovor ni bil
spremenjen in zamenjava modela je že vidna v polju `model` v
telesu odgovora.

`GET /api/modality-bridge/stats` (avtorizacija za upravljanje, enaka
ravni kot `GET /api/settings`) vrne v pomnilniku shranjene
številčnike po modalnostih `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` in
`video`. `averageLatencyMs` uporablja `latencySamples`, ne vseh
poskusov, kot svoj imenovalec; operacija brez časovnega merjenja ne
ustvari vzorca nič milisekund. `bridged` ostaja nazaj
združljiv vzdevek za uspešne pretvorbe; neuspešni poskusi ga ne
povečajo. Številčniki se ponastavijo ob ponovnem zagonu procesa
po zasnovi (telemetrija, ne računovodstvo).

#### Konfiguracija nadzorne plošče

Stran z namenskim nadzornim ploščem je
`/dashboard/settings/modality-bridge`. Njeni URL-naslovni zavihki `Vision`, `Audio`
in `Video` ohranjajo poizvedbene parametre med preklapljanjem vrednosti `tab`.
Zavihek Vision razkriva omogočanje, način, izbiro modela (vključno z avtomatskim
privzetim), nalogam prilagojeno spodbujanje, napredne omejitve časa/posnetka/dolžine
opisa/pomnilnika, števce v času izvajanja in zaščiteno zahtevo za vzorec. Zavihek Audio
je prav tako aktiven: razkriva omogočanje, izbiro modela samo za STT z Auto, omejitve
časa/ največjega posnetka, števce zvoka in test vzorca `input_audio`. Zavihek Video
je funkcionalen: poroča o stanju izvajanja FFmpeg/ffprobe — enem od štirih
izrecnih stanj uporabniškega vmesnika (`unknown`, medtem ko je preiskava v teku ali
ni mogla biti zaključena, `restricted` na gostitelju nadzorne plošče, ki ni
povezan v zanko, kjer je preiskava preskočena na strani odjemalca, `unavailable`
ko je bila preiskava opravljena in potrjena kot manjkajoča, ali `available` z
različicami FFmpeg/ffprobe) — ohranja omejitve omogočanja/modela/okvira/video/časa,
filtrira izbiro modela na modele, ki podpirajo vizijo, in razkriva števce videa.

Prejšnja kartica Vision Bridge pod nastavitvami AI je povezava za združljivost z
novo stranjo; ne obdrži več druge kopije obrazca. Medijski ponudniki prav tako
povezujejo delovne tokove Slika-v-Tekst in Govor-v-Tekst z ustreznimi zavihki
Modality Bridge, ne da bi odstranili obstoječi igrišče za Govor-v-Tekst.

**Obhod sprejema samopovezave:** ko klic za opis preusmeri skozi lastno
`/v1` samopovezavo OmniRoute (nestandardni model ponudnika), podzahteva pošlje
`x-omniroute-admission-bypass: internal` in je overjena z rešenim
samopovezovalnim poverilom — lokalnim `sk_omniroute` sentinelom v lokalnem
načinu ali operaterjem konfiguriranim `OMNIROUTE_API_KEY` / `ROUTER_API_KEY`
okoljskim ključem (#1350), tako da lahko `REQUIRE_API_KEY=true` implementacije
še vedno izvajajo klic za opis. Obhod se upošteva samo za ta natančna poverila,
tako da zunanji odjemalci ne morejo uporabiti glave za preskočitev sprejema.

Zgodnji privzeti nastavitve se nahajajo v `src/shared/constants/visionBridgeDefaults.ts`;
novi privzeti nastavitve za način/nalogo/pomnilnik in rešitelj nastavitev se nahajajo
v `src/shared/constants/modalityBridgeDefaults.ts`. Varovalka razkriva
možnost konstruktorja `deps`, tako da lahko testi injicirajo lažne
implementacije `getSettings` in `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Preusmeri zahteve za klepet z zvokom, preden dosežejo cilj, za katerega ni
znano, da sprejema zvočni vhod. Nikoli ne preusmeri zahteve za klepet: zvočni
deli se prepisujejo prek obstoječega večdelnega končnega točke, združljivega z
OpenAI, in izbrani model klepeta nadaljuje s pisnimi transkripcijami.

Potek:

1. Razreši `supportsAudio` prek `getResolvedModelCapabilities()`. Izrecni
   metapodatki registra ponudnikov zmagajo, nato statični metapodatki modela,
   nato sinhronizirani `modalities_input`. Deklariran seznam vhodov brez `audio`
   je `false`; nobenih dokazov o zmogljivosti ostane `null`. Tako `false` kot
   `null` aktivirata konzervativni most, medtem ko `true` obide.
2. Razreši nastavitve `modalityBridgeAudio*` in izvleči delujoče
   zvočne dele iz vsakega sporočila prek skupnega detektorja `detectMediaParts()`.
   Podprte oblike žic so OpenAI `input_audio`, `audio_url` in
   `source.media_type: "audio/*"`. Vgrajeni zvok se zazna za usmerjanje, vendar
   se ne odstrani s poti spajanja. Delo je omejeno z `modalityBridgeAudioMaxClips`;
   kasnejši deli ostanejo nedotaknjeni.
3. Upoštevaj konfiguriran `provider/model`, ali pa naj `selectAudioBridgeModel()`
   prehodi `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnem katalogu in izbere prvi
   model z uporabnim aktivnim poverilom ponudnika.
4. `callAudioTranscription()` pretvori base64/data-URI zvok v večdelni
   `file`, ali prenese oddaljeni `audio_url` prek javno dostopne izhodne
   varovalke z DNS pinningom in omejitvijo 25 MB. Nato pošlje datoteko in izbrani
   model na lokalno `/v1/audio/transcriptions` samopovezavo, overjeno z
   `resolveSelfLoopBearer()`. Obstoječa pot za transkripcijo izvaja normalno
   iskanje poveril, upravljanje s časom hlajenja/omejitvami in pošiljanje ponudnikov.
5. Uspešni klici zamenjajo svoje dele z `[Audio N]: <transcript>`. Klici
   se izvajajo z `Promise.allSettled`: posamezna napaka ohrani izvorni
   zvočni del (#4012 pogodba). Če vsak klic ne uspe in je cilj dokazan
   `supportsAudio === false`, deli postanejo
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 pogodba). Za
   neznan cilj (`null`) ostane rezultat z vsemi napakami nedotaknjen. Dokazan
   cilj samo za besedilo brez uporabnega STT poverila prejme enak izrecen
   stub brez pošiljanja omrežnega klica.

Uspešne transkripcije uporabljajo procesno široko predpomnilniško LRU/TTL
predpomnilnik Modality Bridge. Ključ združuje referenco zvoka, stabilno oznako
operacije `audio-transcription` in izbrani STT model; napake nikoli niso
predpomnjene. Poskusi zvoka posodabljajo skupne števce `bridged`, `cacheHits`,
`failures` in `lastUsedAt`. Pretvorjeni odgovori nosijo
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nedotaknjene
zahteve ne prejemajo segmenta Audio Bridge.

Nastavitve v času izvajanja so podprte z DB in validirane z Zod:

| Ključ                         | Privzeto | Obseg           |
| ----------------------------- | -------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —               |
| `modalityBridgeAudioModel`    | `""`     | Auto ali STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10            |

Skupni predpomnilnik ostaja nadzorovan z `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` in `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts top-level video parts in Chat Completions `messages` and Responses
API `input` before a target without known native video support is called.
Podprte oblike so `input_video`, `video_url`, `video_source`, HTTPS URL-ji,
in `data:video/*;base64,...` podatkovni URI-ji. Navadna imena datotek v besedilu niso obravnavana
kot video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prehod zahtevkov,
preverjanje zmogljivosti/politike, agregacijo po zahtevku in odzivno vsebino.
Delo na videu — pridobivanje, predpomnjenje celotnih rezultatov, opisovanje zaporedja
sličic (ki združi katerikoli avdio transkript, ki ga je razglasil klicatelj), in metrike/preklic/čiščenje po poskusu — je skrito za `processVideoPart` v
`videoBridgePipeline.ts`, ki se pokliče enkrat na video del znotraj zanke `preCall`.
Ta modul prav tako definira eksplicitne mejne vrednosti vrat `VideoMediaBrokerPort`
(pridobivanje bajtov in ekstrakcija vzorčenih sličic), `VideoAudioTranscriptionPort`
(združevanje avdio transkripta, ki ga je razglasil klicatelj, z vzorčenimi podnapisi), in
`VideoDrilldownPort` (obliko starega surovega skladišča). Proizvodni STT in zadrževanje
sličic sta sestavljena okoli opisnega vrata preko `createVideoSttAdapter` in
`createVideoDrilldownAdapter`; slednji uporablja skupni življenjski cikel z neprosojnim ročajem.

Javni `/v1` zahtevek nikoli ne uvozi ali pokliče podprocesa. Oddaljeni
videi se prenašajo pod mejo 50 MiB; vgrajeni base64 videi imajo
konservativno omejitev 36 MiB dekodirane velikosti na video, tako da model/sporočila/okvir
ostanejo znotraj javne omejitve za sprejem JSON zahtevkov 50 MiB. Dolžina vgrajenih
in ocene dekodirane velikosti se preverjajo pred dodelitvijo. HTTPS je
zahtevan na začetnem oddaljenem URL-ju in vsakem preusmeritvi, pri čemer se uporablja
obstoječa javna zaščita z DNS pinningom. Bajti nato prečkajo natančno notranjo
`POST /api/modality-bridge/video/extract` mejo posrednika. Ta pot je tako
`LOCAL_ONLY` kot `SPAWN_CAPABLE`, sprejema le overjen, zaupanja vreden
zahtevek znotraj procesa, in nikoli ne sprejema URL-jev, poti do datotek, izvršljivih
datotek ali seznama argumentov. Cevovod za velikost telesa API in postopkovni
inkrementalni bralnik telesa neodvisno uveljavita omejitev vnosa posrednika 50 MiB. Njegova omejena vrsta deluje
na eni ekstrakciji naenkrat, omogoča štiri čakajoče naloge in omejuje čakajoči vhod na
100 MiB.

Znotraj posrednika `ffprobe` bere zasebno lokalno datoteko; fiksni format
seznamov dovoljenih izključuje predvajalne in manifestne formate. Za dovoljene MOV-družinske
kontejnerje ostanejo zunanje MOV podatkovne reference privzeto onemogočene, in
fiksna ukazna vrstica se ne odloči za njih. Tako `ffprobe` kot `ffmpeg` uporabljata
le `file` protokol bele liste, eno nit, fiksne argumentne tabele, brez lupine,
in izvršljive datoteke, ki so razrešene iz `PATH`. Priloženi pokrovni tokovi slik niso
predvajalni kandidati. Vsi predvajalni tokovi morajo izpolnjevati omejitve, in
eksplicitni privzeti tok je prednosten pred determinističnim najnižjim indeksom
rezervne možnosti. Videi so omejeni na 600 sekund, 8,192 pikslov na dimenzijo, in
33,554,432 izvornih pikslov. FFmpeg vzorči 1–16 sredinskih JPEG sličic, zmanjša
dolgo stranico na največ 1,024 pikslov brez povečanja manjših vhodov, in
nikoli ne prejme URL. Vzorčenje je privzeto `uniformno`. Neobvezne
`scene_aware` in eksperimentalne `segment_aware` politike opravijo en dodaten
fiksni prehod FFmpeg nad že validiranim lokalnim tokom, izberejo omejene
`showinfo` časovne oznake prizorov, in deterministično padejo nazaj na iste
uniformne sredine ob neuspehu detektorja, časovni omejitvi, napačnem izhodu ali praznem
naboru kandidatov. Način zavedanja segmentov dodeli vzorčne sredine sorazmerno
z validiranimi časovnimi intervali prizorov; dokazi o zavedanju segmentov in
vedenje o rezervni možnosti so podrobno opisani spodaj. Trda omejitev 16 sličic je
uporabljena po izbiri v vsaki politiki. Ko ima zahteva z zavedanjem prizora le
eno-slični proračun, uporablja uniformno sredino aktivnega celotnega videa ali fokusa
okna in poroča `policyEffective: uniform`: ena izbrana sličica prizora
ne more ohraniti obeh časovnih koncev. Klicatelj lahko neobvezno zagotovi
končno okno fokusa (`start`/`end` sekund); meje so omejene na trajanje medija, obrnjena ali neomejena okna so zavrnjena, in vse politike vzorčenja se izvajajo le znotraj normaliziranega intervala. Rezultantno
okno je vključeno v metapodatke vzorčenja in v nepreverjen opis
predpone, tako da lahko spodnji modeli razlikujejo osredotočen izsek od celotne
časovne premice.

Osredotočenost semantičnih podnapisov je ločena, eksplicitna nastavitev. Privzeti `full`
analizni način ohranja obstoječi poziv sličic in nikoli ne posreduje besedila zahtevka
modelu podnapisov. V `focused` načinu most bere le najnovejše
ne-prazno uporabniško avtorsko `text`/`input_text` iz istega Chat ali Responses
kontejnerja, ga normalizira na NFC, združi kontrolne znake in presledke,
in omeji na 500 Unicode kodnih točk. Prazni rezultat se vrne nazaj na
natančen `full` poziv. Uporaben namig je serializiran kot JSON v
posebnem bloku nepreverjenega uporabniškega konteksta in lahko le daje prednost
opaznim podrobnostim; ne more nadomestiti ločenega opozorila proti sledenju navodilom,
ki so vidna ali slišna v mediju. Besedilna osredotočenost nikoli ne inferira `start`/`end` ali spreminja
časovnega vzorčevalnika.

#### FU-07 strukturni segmentni dokazi

`segment_aware` uporablja en omejen pre-analizni prehod nad že validiranim
lokalnim video tokom. Fiksna veriga filtrov najprej zmanjša na največ 320 pikslov
široko, zazna spremembe prizorov in zamrznjene intervale, nato vzorči pri 1 sličici na
sekundo za zameglitev, povprečno lumo in prostorske/časovne informacije. Prehod je
omejen na 600 strukturnih vzorcev, eno nit FFmpeg/filter, iste
`file`-le protokole in kontejnerske bele liste, 1 MiB omejitev izhodnega procesa,
in največ 30 sekund znotraj skupnega preklica/rok posrednika. Nikoli ne
sprejema ukaza, filtra, poti ali URL-ja iz zahtevka.

Strukturne vrednosti so deterministični vzorčni dokazi, ne pa semantično razumevanje videa. Ne sklepajo o predmetih, dejanjih, podnapisih, govoru ali namenu uporabnika. Meje prizorov in zamrznitev oblikujejo segmente; pokritost zamrznitve, zameglitev, osvetlitev, prostorska podrobnost in časovne spremembe vplivajo le na to, kako se obstoječi proračun 1–16 sličic razporedi. Popolnoma zamrznjen segment je omejen na eno sličico, medtem ko se segmenti, ki niso zamrznjeni, borijo za preostali proračun. Ko meje presegajo število sličic, se ohrani enotna pokritost časovnice, tako da hitri zgodnji rezi ne morejo skriti dolgega sledi segmenta. Meje prizorov znotraj 1-sekundne analitične ločljivosti meje zamrznitve se združijo.

Manjkajoči filtri, slabo oblikovani/prazni dokazi, napaka detektorja ali omejitev predanalize se odprejo na točno enotno sredinsko politiko. Prekinitev klicatelja ali rok posrednika se ne odpre: prekine v teku podproces, prepreči kasnejše pridobivanje sličic in zasebno začasno drevo se odstrani v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira deterministične realne FFmpeg naprave za prihranke po deduplikaciji podnapisov, dodelitev proračuna za gosto gibanje, dokaze o zameglitvi/osvetlitvi/SI-TI, hitre reze z dolgo repom in lažne pozitivne rezultate postopnega bledenja. Zabeleži čas stene pred analizo in, kjer je `/usr/bin/time` na voljo, otroški CPU in vrhunskega RSS. Njegove kakovostne kontrole so le strukturni oraklji. Kakovost pravega modela podnapisov ostaja `HOLD`, ker ta naprava nima pooblaščenega končnega cilja ali zamrznjenega sodnika. Finančni prihranki prav tako ostajajo `HOLD`, razen če `--caption-cost-per-call-usd` zagotovi eksplicitno pozitivno oceno na klic; skripta nikoli ne fabricira nobenega rezultata.

Vsaka sličica je omejena na 4 MiB, vse surove sličice skupaj na 23 MiB, in serijski odgovor posrednika na 32 MiB. Zasebni začasni imenik se odstrani v `finally`. OmniRoute ne združuje FFmpeg in ne sprejema prilagojene poti do izvršljive datoteke. Pred podnaslavljanjem most izvede konzervativen vizualni deduplikacijski prehod: vsak JPEG se zmanjša na 16×16 sivinsko območje in se primerja le z zadnjo ohranjeno sličico. Za zahtevani proračun podnapisov nad eno sličico, pridobitev zagotavlja omejen nabor kandidatov do dvakrat tega proračuna in nikoli več kot 16 sličic. Zahtevana omejitev se uporabi šele po deduplikaciji, pri čemer sta prva in končna izbrana kandidata ohranjena med končnim redčenjem, ko je proračun vsaj dva. Politika `grayscale-16x16-mean-cells-v2` uporablja večjo od povprečnega luma delta in razmerja celic sličic, katerih normalizirani delta je vsaj 0.05. Prag za podvajanje je konstantna 0.04, izbrana zaradi predvidljivosti in ne izpostavljena kot nastavitev med izvajanjem. Ta sekundarni signal z visokim kontrastom ohranja majhne gibe in spremembe vidnega besedila, ki jih lahko skrije le povprečna primerjava. Napake komparatorja ali dekoderja se odprejo in ohranijo pokritost. Metapodatki izhoda ločujejo pridobljene kandidate, uspešno uporabljene sličice in vizualne podvojitve, ki so bile odstranjene.

Izrecno označen del videa lahko zahteva časovno označeno kontaktno ploščo. Most gradi največ 4-stolpci, 16-sličični JPEG mrežo. Vsaka celica velikosti 512 pikslov vžge svoj izvorni časovni žig v visoko kontrastni spodnji pas, medtem ko isti časovni žigi ostanejo v besedilnih metapodatkih za nadaljnje povezovanje in revizijo. Celoten JPEG ostaja omejen na 32 MiB. Če `sharp` ne more dekodirati ali sestaviti mreže, most preide na posamezne JPEG sličice; prekinitev stranke se še vedno širi skozi operacijo plošče.

Dokazi o promociji so namerno ločeni od sintetičnega mikrobenchmarka sestave. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira shemo različice A/B za prave modele vizije, združljive z OpenAI. Meri tokene, ki jih poroča ponudnik, latenco stene od konca do konca (vključno s sestavo plošče), število klicev modela in ohranitev dejstev, opredeljenih v manifestu. Surove odgovore modela ne zapišejo v poročilo; ohranijo se le SHA-256 povzetki in ujemajoči se ID-ji dejstev. Naprava ne izvede nobenega omrežnega ali plačanega klica modela, razen če je `--execute-real` posredovan in `--model`, `OMNIROUTE_BASE_URL` in `OMNIROUTE_API_KEY` so konfigurirani. Brez tega izrecnega realnega izvajanja ostane njegov strojno berljiv sklep `HOLD`; meritve sintetičnega tovora/klicev same niso dokazi o promociji.

Ločen `scripts/perf/video-bridge-promotion-eval.ts` porabi FU-07 ali FU-09 opazovanja. Sprejem promocije zahteva vseh osem sintetičnih scenarijev plus saniran pravi posnetek, vsaj tri izmerjene ponovitve na vlogo in primer, vseh deset razglašenih metrik, zamrznjene medije/prompt/pričakovane dejanske povzetke, edinstvene ID-je opazovanj in preverjeno zasajeno A/B zaporedje. Potrdilo o izvajanju povezuje povzetek korpusa, natančen SHA kandidata in revizijo modela. Manjkajoče ali neveljavne meritve ostanejo `HOLD`, vključno s CPU nad 30 s, vrhunskim RSS nad 512 MiB ali predanalizo nad 30 s. To so omejitve za sprejem dokazov, ne pa nova garancija za izvrševanje RSS.

FU-07 zahteva vsaj 98% ohranitve kakovosti in p95 latenco ne več kot 1.2x osnovne vrednosti, poleg tega pa bodisi 0.05 absolutno uravnoteženo povprečno izboljšanje priklica pri enakih povprečnih klicih podnapisov, ali vsaj 10% manj povprečnih klicev podnapisov po deduplikaciji. FU-09 zahteva vsaj 0.85 kakovosti, 95% ohranitev, 20% zmanjšanje latence p95 in 10% zmanjšanje števila tokenov. Izguba kritičnih dejstev, skladnost z injekcijami ali manjkajoča uporaba preprečuje promocijo. Ena izvedba ne more promovirati ničesar: `--previous-report` potrjuje dve različni, nepokritni, zaporedno upravičeni izvedbi iste politike/modela revizije/kandidata/korpusa. Eksperiment vzorčenja ne more potrditi eksperimenta kontaktne plošče.

Zbiralci naj ocenijo odgovore v pomnilniku in shranijo `responseDigest` ter
metrike in opazovalne vezave, nikoli pa besedila odgovora. Porabnik prav tako bere
zapletene surove opazovanja, vendar nikoli ne kopira tega besedila v svoje poročila.
Sprejet je natančno en od `responseDigest` ali `rawResponseText` za vsako opazovanje.
Seznam dovoljenih različic ostaja prazen z nespremenljivim privzetim `hold`.
Ustrezni vnos zahteva svojo referenco dokazov, politiko, revizijo modela, natančen
SHA kandidata, manifestni digest in dva različna ID-ja izvajanja; nasprotujoči si
konteksti so zavrnjeni. Ti metapodatki so pogodba o reviziji, ne dokaz, da
v povezani datoteki vsebujejo pristne meritve. Pred dodajanjem katerega koli vnosa
preglejte dejanske račune. Končna točka za upravljanje statistik in Video
nadzorna plošča razkrivata konservativno pripravljenost. Samo konfigurirana
alias modela ne vzpostavi njegove revizije ali trenutnega SHA kandidata, zato
trenutna nadzorna plošča poroča `HOLD`, namesto da bi ponovno uporabila
ustreznost iz drugega izvajalnega konteksta. Izrecna eksperimentalna izbira
ostaja ločena od promocije; privzeto se ne spremeni samodejno.

Klicatelji lahko priložijo neobvezno `transcript.cues` polje k podprtemu
video delu, ko že imajo usklajeno besedilo. Vsaka oznaka mora vsebovati `text`,
končen `start`/`end` interval znotraj preizkušene dolžine in beljen `source`
(`client`, `embedded` ali `audio-bridge`); `confidence` privzeto znaša `1`
in mora ostati med `0` in `1`. Natančne podvojene oznake se združijo.
OmniRoute nikoli ne začne transkripcije iz teh metapodatkov: potrjene oznake
se kopirajo v opisani rezultat z virom, zaupnostjo in intervalom ter se
prikazujejo kot nezanesljiva opazovanja ob okvirnih napisih. Neveljavno,
izven obsega ali brez porekla besedilo se zavrne, namesto da bi se mešalo v
niz napisov. Obe kanali za transkripcijo v telesu zahteve normalizirata
priloženo poreklo na `client`, vključno s samo-izjavljenimi `embedded` ali
`audio-bridge` oznakami. Le adapter, ki ga upravlja strežnik, lahko dodeli
te zanesljive oznake preko argumenta, ki je samo za kodo `trustedSource`;
polje JSON zahteve ne more doseči tega argumenta. Besedilo transkripcije
ostaja nezanesljiv medijski izvor, ne glede na njegovo poreklo, in nikoli ne
sme določiti avtorizacije.

Napreden klicatelj lahko zagotovi `audioTranscript` sledi za isti video;
obravnava se kot besedilo, ki ga zagotovi odjemalec, ne kot dokaz strežniške
transkripcije. Fuzijska šivna linija izvaja vizualna in avdio opazovanja pod
eno rokom in signalom za prekinitev, jih razporedi na skupni časovni premici,
združi natančne podvojene in poroča o delnem rezultatu, ko uspe le ena stran.
Neveljavna `audioTranscript` se zmanjša na ta delni rezultat — vizualni
opis se ohrani, avdio veja pa zabeleži sanitarno kodo napake — namesto da bi
zavrnila celoten video. Razpoložljivost po vejah, delna oznaka in sanitarne
kode napak se ohranijo v opisanem rezultatu, v metapodatkih zaščitne ograje
(`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), v
metapodatkih predpomnilnika rezultatov in v števcah fuzije mostu. Privzeta
pot Video Bridge ne aktivira govora v besedilo ali ne prenese druge kopije
medija; brez te izrecne sledi ostane samo video.

**Zadrževanje transkripcije (#12150 P1).** To se samodejno uporablja
kadar koli Video Bridge (ki je sam po sebi opt-in) prikaže transkripcijsko
oznake — ni ločene oznake za zadrževanje. Ko zahteva prikaže katero koli
transkripcijsko oznako (klicateljem razglašena `transcript` ali združena
`audioTranscript`), zaščitna ograja označi kot `videoBridgeObserved` in
ustvari redigirano senco video opisa — identična predstavitev, v kateri je
vsaka oznaka prostega besedila zamenjana z `[redacted-video-transcript]`,
zgrajena z zamenjavo strukturiranega polja oznake pred sestavo niza (nikoli
z analizo poenostavljenega besedila, tako da nobena vsebina oznake — nasprotna
ali običajna, vključno z telesi, ki vsebujejo `]`, kot so `[inaudible]`/`[music]`
— ne more preživeti). Ohranjen dnevnik zahtevkov zamenja vsak del besedila,
ki izhaja iz videa, s to redigirano senco, ujemajočo se po vsebinski
enakosti; sidro `fullText` se ponovno prebere iz končnega pred-klicnega
payloada zaščitne ograje, tako da se ujemanje še vedno uspešno izvede po
kasnejših zaščitnih ograjah (maskirniki PII in poverilnic, prioriteti 10/95),
ki prepisujejo besedilo opisa na mestu in po sistemskem pozivu/prehodu/vstavljanju
pomnilnika preoblikujejo niz sporočil. Telo, poslano navzgor modelu, ostaja
nespremenjeno. Opazovana zahteva prav tako ne napolni trajnega pomnilnika
(obe ekstrakciji iz zahtevka in odgovora sta preskočeni), tako da odgovor
modela ne more odmevati besedila transkripcije v pomnilniku.

**Surovi video polja (#12430).** Ko je most omogočen in je podpora za
nativni video neznana ali odsotna, definirana polja `transcript`/`audioTranscript`
tudi aktivirajo `videoBridgeObserved`, tudi po neuspehu opisa ali
omejitvi `maxVideos`. `null` in prazni nizi se štejejo; odsotna polja in
ne-video metapodatki ne. Ohranjene kopije redigirajo ta polja ali izpustijo
zahtevo, predpomnilniki/pomnilnik pa se obidejo. Naloženi payload ostaja
nespremenjen.

Dodatne ohranjene kopije uporabljajo isti signal opazovane zahteve. Surova
pred-zaščitna ograja posnetek zahteve odjemalca, v pomnilniku čakajoča
zahteva in zgodnji dnevnik zavrženih zahtev strukturno zamenjajo polja
transkripcije v video delih; nizi pozivov, sintetizirani s stopnjami
pipeline in kontekstom prehoda, so redigirani na izhodu ohranjene zahteve.
Ohranjen marker `video_content_removed` povzroči, da nadaljevanje `previous_response_id`
ne uspe, namesto da bi rekonstruiral besedilo, ki je bilo namerno zavrženo.
Če opazovana zahteva izgubi svojo senco redakcije pred beleženjem, ali celo
ena od več video senc ne uspe ujemati po kasnejših mutacijah zahtev, se
ohranjeno telo zahteve popolnoma izpusti namesto da bi ohranilo delno redigirano
transkripcijo.

Za opazovan zahtevek lahko modelni odgovor citira kateri koli del transkripta brez strukturirane meje namiga. Njegov trajni dnevnik klicev `responseBody` je zato zamenjan z oznako za izpuščanje; podrobni artefakt cevi (ki lahko vključuje zgornje/tanjše telesa in delčke toka) ni ohranjen. Semantični, idempotentni in predpomnilni predlogi za razmišljanje obidejo branja in pisanja za ta zahtevek. Zahteva ponudnika in odgovor, viden s strani odjemalca, ostaneta nespremenjena. Zgodnji bajti keepalive se odcedijo iz začasnega predpomnilnika, ko je podrobni artefakt izpuščen. Kirova opozorila o nepravilnem EventStreamu poročajo le o številu bajtov v vsebini, nikoli o njeni vsebini ali surovem napaku JSON parserja. To ne trdi, da je bila vsaka nepovezana diagnostična informacija ponudnika/plugin-a preverjena; širše čiščenje ohranjenih odtokov je sledeno v #11658.

Notranji življenjski cikel `/api/modality-bridge/video/drilldown` je ločen, povratni/token-avtentikacijski predpomnilni substrat. Vsaka operacija zahteva tudi kanonični neprozorni ID glavnega. Preden je omogočen klicatelj v produkciji, mora izpeljati ta ID iz overjenega najemnika in nikoli ne sme posredovati vrednosti, ki jo izbere odjemalec. Ključi predpomnilnika povezujejo tega glavnega s kanoničnimi ID-ji seje in video-reference, shranjujejo le njihove ključe, pridobljene iz SHA-256, in omejujejo tako branja kot brisanje na istega glavnega. Predpomnilnik shrani največ 16 izpeljanih JPEG okvirjev na vnos, jih poteče po desetih minutah in podpira omejena branja `start`/`end` ali izrecno brisanje seje.

Vsak glavni je omejen na 16 vnosov in 64 MiB kanoničnih JPEG podatkov. Te omejitve so neodvisne od globalne omejitve 64 vnosov/256 MiB: pritisk na kvoto glavnega izloči le najmanj pogosto uporabljene vnose tega glavnega, preden se upošteva globalno LRU izločanje. Potečeni vnosi se odstranijo tako iz glavnega kot iz globalnega računovodstva ob dejavnosti predpomnilnika, medtem ko preklic in neuspeh validacije ne zavezujejo delne zamenjave.

Predpomnilnik zavrne nekanične Base64, odvečne obrobe, ne-JPEG medije, nepravilne ali skrajšane JPEG-je ter JPEG-je, ki med omejenim polnim `sharp` dekodiranjem povzročijo opozorilo. Vsako sprejeto sliko ponovno kodira kot kanonični JPEG, pridobi širino in višino iz dekodiranih bajtov namesto da bi zaupala poljem klicatelja, in zavrže vse končne poliglotne bajte namesto da bi jih ohranila. Le omejen kanonični stisnjen predpomnilnik se zaračuna obema kvotama. Omejitev JSON žice vključuje Base64 preobremenitev za 32 MiB omejitev dekodiranega vhoda. Vsaka
shranjena izpeljava beleži svoj potrjen JPEG format/ločljivost, politiko vzorčenja, različico izpeljave, čas ustvarjanja, strežniško izračunano vsebinsko hasho in hasho starševske reference ter hasho starševske vsebine zaupanja vrednega klicatelja. Preklic se preveri med asinhronimi fazami dekodiranja/hashiranja pred atomskim zavezanjem predpomnilnika.

Produkcijski proizvajalec ponovno uporablja že izpeljane okvirje posrednika šele po uspešni vizualni analizi, brez drugega prenosa/ekstrakcije videa. Zahteva operaterja `modalityBridgeVideoDrilldownEnabled=true`, strogo per-del `drilldown: true` in overjen ID zapisa API ključa. Vrednosti glavnega/seje, ki jih razglasi odjemalec, nikoli ne vzpostavijo lastništva. Brez vseh treh pogojev ne hasha, ne spremeni velikosti ali ne ohrani dodatnih okvirjev. Neuspeh pri ohranjanju ohranja uporabni vizualni odgovor. Dovoljeni zahtevki obidejo celoten predpomnilnik rezultatov videa, tako da predpomnjeni rezultati nikoli ne ponavljajo ročajev.

Uspešni JSON in SSE odgovori razkrijejo največ štiri neprozorni ročaje v omejenem `x-omniroute-video-drilldown` glavi. Pooblaščeni izvorni brskalniki lahko berejo to glavo, ne da bi razširili politiko CORS izvora. Novi ročaji uporabljajo `v1.<32-byte random base64url token>`, in register ohranja le njihove SHA-256 hashe. Bralnik/parser glave prav tako sprejema dediščinske 64-hex ročaje. Overjeni javni potrošnik je
`GET /api/v1/video-bridge/drilldown?handle=...`, neodvisno zaklenjen z
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Izrecno ohranjeno false odvzame dostop, tudi ko je omogočena dediščinska `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` okoljska
rezerva. Produkcijsko ohranjanje ima analogno dediščinsko
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` rezervo. Obe rezervi sta privzeto izklopljeni.

Potrošnik pridobi lastništvo iz overjenega ključa, uporabi politiko ključa in vrne enak 404 za neznane, potečene in ročaje drugega ključa. Sprejema
`variant=preview|standard|detail` (maksimalna JPEG dimenzija 320/640/1280, nikoli ne povečana),
`limit=1..8` (ali dediščinski `frames` alias, nikoli oboje), ničelno osnovano `page`, in neobvezne
`start`/`end` sekunde fokusa. Podvojeni
ključi poizvedbe in obrnjena okna fokusa so zavrnjeni. Vsaka vrnjena varianta ima hash
svoje dejanske vsebine in dejanske ločljivosti metapodatkov, povezanih z ohranjeno izvorno vsebino.
Variacije se izpeljujejo ob branju, namesto da bi bile shranjene kot dodatne ohranjene kopije. JSON
odgovor, vključno z Base64/ovojem, je omejen na 32 MiB; prevelika stran vrne 413 in odjemalec mora zahtevati manj okvirjev. Branja preverjajo preklic okoli vsake spremembe velikosti in ponovno preverijo veljavnost ročaja pred vrnitvijo. `DELETE` s strani lastnika je idempotentno;
brisanje ali potečena TTL sprosti ohranjeno izvorno vsebino in računovodstvo uporabe.

Skupni skladišče je lokalno za proces: ročaji potečejo ob ponovnem zagonu in niso prenosljivi
med neodvisnimi procesi OmniRoute. Statistika upravljanja razkriva učinkovito ohranjanje/
politiko oddaljenosti in agregira le ohranjene vnose/bajte, nikoli medije, reference,
ID-je glavnih ali ročaje. Plošča nastavitev videa prikazuje te vrednosti in lahko ohrani
obe stikali za soglasje. Ta dokumentacija o implementaciji ni dokaz o živi namestitvi ali
promociji; sprejem resničnega modela se sledi ločeno.

Okviri so označeni zaporedno z konfiguriranim Video modelom. Prazna
Video preusmeritev podeduje nastavitev Vizije; če sta oba prazna, Vizijski
avtomatski usmerjevalnik izbere učinkovit model, ki podpira vizijo. Uspešne
oznake nadomestijo izvirni del z stabilnim `[Video description:` predpono, ki
tudi označuje besedilo kot nezanesljivo opazovanje, pridobljeno iz medija, in
pove downstream modelom, naj ne upoštevajo navodil, najdenih v mediju. Ključi
predpomnilnika za oznake okvirov vključujejo JPEG bajte, poziv, časovni žig in
učinkovit model; samo uspešne oznake se predpomnijo. Vnosi predpomnilnika
ohranjajo dejanski uspešni model proizvajalca, vključno z modelom za
rezervno kopijo; most poroča `mixed`, ko so različni okviri proizvedeni z
različnimi modeli. Zadetek v predpomnilniku ponovno uporabi to identiteto
proizvajalca namesto da bi jo preimenoval v zahtevani načrt usmerjanja. Celoten
predpomnilnik rezultatov videa je ključan za vsak vhod, ki spremeni izhod —
poziv, učinkovit model, politika vzorčenja, število okvirov, način semantične
analize, SHA-256 prstni odtis normaliziranega namiga fokusa, okno fokusa,
`transcript`,
`audioTranscript` in zastavica kontaktne strani — zato je sprememba katerega koli
od teh dimenzij zadetek v predpomnilniku, nikoli zastarela ponovna uporaba. Različica
politike vizualne dedupikacije, prag in omejeno število kandidatnih okvirov so
prav tako izrecni v ključu in metapodatkih predpomnilnika rezultatov; sprememba
politike torej ne more ponovno uporabiti zastarele celotne video
opis. Metapodatki predpomnilnika rezultatov v4 ohranjajo način in
prstni odtis, nikoli suhe uporabniške naloge. Metapodatki zaščitnega
mehanizma poročajo tako o zahtevanih kot učinkovitih načinih analize; zahtevan
`focused` način brez uporabnega besedila se poroča kot učinkovito `full`.

Zaščitni mehanizem izloči vsak podprt del videa, vendar ne opisuje več kot
`modalityBridgeVideoMaxVideos`. Za cilj, za katerega je dokazano, da ima
`supportsVideo === false`, postanejo neuspešni in prekomerni videi
izrecni varni besedilni označevalci, tako da noben surov video ne preživi. Ko je
zmožnost neznana, ti deli ostanejo nedotaknjeni. Cilji z `supportsVideo === true`
obidejo most. Signal za prekinitev zahteve odjemalca se širi skozi prenos,
broker čakalno vrsto, podprocese in klice oznak; prekinitve se ustavijo med
videi in nikoli ne odpovejo odprto na surove medije.

Nastavitve v času izvajanja so podprte z DB in potrjene z Zod:

| Ključ                               | Privzeto    | Obseg / vedenje                                                                                      |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Neobvezno izvajanje, opt-in                                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ohranja splošne oznake; `focused` uporablja omejen, nezanesljiv kontekst zadnjega uporabnika  |
| `modalityBridgeVideoModel`          | `""`        | Podeduj model Vizijskega mostu                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ali proporcionalno `segment_aware`; neuspeh detektorja se vrne na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                       |

Zgodovinske vrednosti časovnika Video, ki presegajo 120 sekund, so omejene na
rok brokera; novi nastavitveni zapisi nad to mejo so zavrnjeni.
`GET /api/modality-bridge/video/runtime` zahteva zaupno žigosano lokalno
lokacijo pred avtentikacijo ali preizkušanjem v času izvajanja, nato zahteva
avtorizacijo za upravljanje. Vrača samo `available`, sanirane FFmpeg/ffprobe
različice in fiksni razlog, ko je izvajanje nedostopno. Notranja točka za
izvlečenje ni javni API za nalaganje: saturacija čakalne vrste vrne `503` plus
`Retry-After`, prekinitev klicatelja vrne `499`, in fiksni rok brokera vrne `504`.
Pretvorjeni odgovori dodajo
`video->text;model=<visionModel>;parts=<videos>` v osrednji
`x-omniroute-modality-bridge` glavi, ne da bi odstranili Vizijo ali Avdio segmente.

### PII Masker (`piiMasker.ts`)

Deluje na **oba** stadija.

- **`preCall`** klonira payload, prehodi `system`, `messages`, `input` in
  `prompt` (vključno s preprostimi nizovnimi elementi) ter uporabi `processPII()`
  (iz `@/shared/utils/inputSanitizer`) na nizovnih `content`/`text` poljih. Ko je
  `PII_REDACTION_ENABLED=true`, zaznani PII se izbriše v odhodnem
  payloadu. To je neodvisno od `INPUT_SANITIZER_MODE` (ki nadzira samo
  politiko injiciranja pozivov). Ko je brisanje izklopljeno, klic beleži
  število zaznav brez prepisovanja vsebine.
- **`postCall`** globoko klonira odgovor, izvede `sanitizePIIResponse()` plus
  masker oblike API-odgovorov (`maskResponsesOutput` — pokriva
  `output_text` in `output[].content[].text`). Če pride do kakršnega koli
  brisanja, spremenjeni odgovor nadomesti izvirnika.

Zaščitni mehanizem nikoli ne blokira; samo označuje (`meta.detections`,
`meta.redacted`) ali prepisuje.

### Vbrizgavanje pozivov (`promptInjection.ts`)

Zaznava nasprotne strukture v vsebini, ki jo zagotovi uporabnik, in
izvaja konfigurirano politiko. Vedenje je odvisno od okolijskih spremenljivk in
možnosti konstruktorja:

| Nastavitev   | Env var                                                                                                | Privzeto | Učinek                                                                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogočeno    | `INPUT_SANITIZER_ENABLED`                                                                              | `true`   | Ko je `false`, varnostna pregrada skrajša.                                                                                                                                                        |
| Način        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`   | Politika injiciranja: `block`, `warn` ali `log`. (`redact` je sprejet za nazaj-združljivost, vendar **ne** odstrani injicirnega besedila; zahteva za prepis PII nadzira `PII_REDACTION_ENABLED`.) |
| Prag blokade | `blockThreshold` možnost / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimalna resnost, potrebna za blokado. Srednja je privzeto samo za opazovanje.                                                                                                                   |

**Prednost načina** (`getMode`): klicatelj `options.mode` →
`INJECTION_GUARD_MODE` **preklop funkcije DB** (Nadzorna plošča → Nastavitve →
Funkcijske zastavice) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Preklop nadzorne plošče torej prevlada nad env variablami, tako da UI
funkcijske zastavice nadzira delovanje varnostne pregrade v živo (brez ponovnega zagona). Branje iz DB je varno:
če pride do napake, se varnostna pregrada vrne na obnašanje, ki temelji na env, in ko ni
nastavljenega preklopa, je obnašanje identično rešitvi, ki temelji samo na env.

Viri zaznavanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (skupni detektor
   set, uporabljen drugje v procesu).
2. Vgrajeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` in
   `markdown_system_block`, oba z resnostjo `high`).
3. Neobvezni `customPatterns`, posredovani preko možnosti konstruktorja (nizi, regex,
   ali `{ name, pattern, severity }` zapisi).

Ko je `mode === "block"` **in** vsaj ena zaznava doseže prag resnosti,
`preCall` vrne `{ block: true, message: "Zahteva zavrnjena: zaznana sumljiva vsebina" }`. V `warn`/`log` načinih varnostna pregrada zabeleži, vendar
dovoli klic. Skupni pomočnik `evaluatePromptInjection()` je prav tako izvozil
za klicatelje, ki morajo oceniti pozive, ne da bi šli skozi register.

**Obseg skeniranja (v3.8.20):** detektor pregleda le **prvih 16 KB**
združenega besedila poziva — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Tako `detectInjection()` kot
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` pred izvajanjem
cikla vzorcev. Direktive injiciranja so blizu vrha vnosa, tako da to
omejuje CPU/GC regex pri večsto-KB obremenitvah, ne da bi oslabelo zaznavanje (cf.
#3932, #4041).

### Masker poverilnic (`credentialMasker.ts`)

Deluje na **obeh** stopnjah, zadnji v privzeti verigi (prednost `95`). Odstrani
dobro znane vzorce API-ključa / skrivnega žetona iz izhodne obremenitve (vsebina
sporočila, argumenti klica orodja, rezultati orodja) **in** odgovora ponudnika, tako da
se poverilnica, prilepljena v poziv (ali vrnjena z rezultatom orodja), ne razkrije
zgornjemu ponudniku ali nazaj stranki.

- **Samo na podlagi izbire**, enaka konvencija kot pri prepisu PII (Trda pravila #20-sosednje):
  onemogočeno, razen če `settings.credentialRedactionEnabled === true` **ali**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ko je izklopljeno, je varnostna pregrada brez učinka —
  nikoli ne blokira in nikoli ne prepisuje.
- `redactCredentials()` prehodi celotno drevo obremenitve/odgovora (`walkValue()`,
  varno pred onesnaženjem prototipa, varno pred cikli preko `WeakSet`) in nadomesti ujemanja z
  `[REDACTED:<type>]` nadomestkom, klonira le veje, ki so se dejansko
  spremenile.
- `CREDENTIAL_PATTERNS` pokriva ključe ponudnikov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS žetone (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), plačilne ključe (Stripe, Square), oblačne
  ključe (AWS dostopni ključ, Twilio, SendGrid, Mailgun), zasebne ključe / JWT,
  povezovalne nize, ki vsebujejo poverilnice (`mongodb://user:pass@...`, itd.), in
  generični vzorec za `Authorization`/`x-api-key`/`api-key`/`apikey` vrednost glave. Ključi v obliki glave (`authorization`, `x-api-key`, `api-key`,
  `apikey`) so strukturno odstranjeni (samo vrednost, shema predpona, kot
  `Bearer `/`Basic ` ohranjena) namesto preko generičnega besedilnega regexa.
- Varnostna pregrada nikoli ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) in označuje (`meta.credentialsRedacted`, `meta.count`).

Regresijska pregrada: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovna pogodba (`base.ts`)

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
  block?: boolean; // vrednost true prekine verigo
  message?: string; // prikazano ob blokiranju
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrne preCall za preoblikovanje zahteve
  modifiedResponse?: TValue; // vrne postCall za preoblikovanje odgovora
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

Varovalo sporoči »brez spremembe« tako, da vrne `void`, `{}` ali
`{ block: false }`. Vrnitev `modifiedPayload`/`modifiedResponse` zamenja
vrednost, ki teče skozi verigo do naslednjih varoval.
`signal?: AbortSignal` posreduje življenjski cikel klicatelja varovalom. Prekinitev zahteve je namerna izjema s pristopom »fail-open«: predstavnostni mostovi ustavijo delo in počistijo vire, ne da bi obnovili neobdelano predstavnost za cilj, za katerega je znano, da je ne podpira.

## Register (`registry.ts`)

Edinec `guardrailRegistry` izpostavlja:

- `register(guardrail)` — doda varovalo (ali ga zamenja glede na normalizirano ime) in
  znova razvrsti varovala po naraščajoči vrednosti `priority`.
- `clear()` / `list()` — skrbniški pomožni funkciji.
- `runPreCallHooks(payload, context)` — gre skozi aktivna varovala, posreduje
  koristno vsebino prek `modifiedPayload` in se ustavi pri prvem `block: true`.
- `runPostCallHooks(response, context)` — enak potek na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — počisti stanje in po želji
  znova registrira privzete nastavitve za čisto izolacijo preizkusov.

Oba izvajalnika vrneta `{ blocked, payload|response, results, guardrail?, message? }`,
pri čemer je `results` polje zapisov `GuardrailExecutionResult`, ki vključujejo
polja `blocked`, `skipped`, `modified`, `error` in `meta` za vsako varovalo,
kar je uporabno za sledenje.

### Onemogočanje varoval za posamezno zahtevo

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` zbere
podvojenih vrednosti očiščen seznam imen varoval, ki jih je treba preskočiti za trenutno
zahtevo. Viri (vsi izbirni, vsi združeni):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v telesu zahteve (na najvišji ravni)
- `metadata.disabledGuardrails` v telesu zahteve
- Glava `x-omniroute-disabled-guardrails` (ali starejša
  `x-disabled-guardrails`)

Vrednosti so lahko polja nizov ali niz, ločen z vejicami; imena so
normalizirana v male črke in zapis kebab-case (`pii_masker` → `pii-masker`). Rezultat
se prek `context.disabledGuardrails` posreduje registru, ki preskoči
ujemajoča se varovala (`skipped: true` v `results`).

## Vrstni red izvajanja

Za vsako zahtevo, ki teče skozi `src/sse/handlers/chat.ts` in
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sestavi seznam za preskok na podlagi ključa API, telesa
   in glav.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izvede varovalne mehanizme po naraščajočem
   vrstnem redu prioritete:
   - Onemogočeni varovalni mehanizmi so zabeleženi kot `skipped`.
   - `preCall` vsakega varovalnega mehanizma lahko prepiše koristno vsebino prek `modifiedPayload`.
   - Prvi `block: true` prekine verigo, obravnavalnik pa vrne
     odgovor o zavrnitvi s strani varovalnega mehanizma.
3. (Morebiti prepisana) koristna vsebina se posreduje kombiniranemu usmerjanju in
   pošiljanju nadrejenemu ponudniku.
4. Ko je odgovor sestavljen, `guardrailRegistry.runPostCallHooks(...)`
   izvede isto verigo nad odgovorom. `block: true` na tej točki zavrže odgovor
   nadrejenega ponudnika.

Varovalni mehanizmi, ki sprožijo izjemo, so zabeleženi z `error: <message>` in zapisani v dnevnik prek
`logger.warn`, vendar se veriga nadaljuje — zasnovano po načelu odprtega odpovedovanja.

## Konfiguracija

Spremenljivke okolja, ki jih berejo vgrajeni varovalni mehanizmi:

| Spremenljivka                         | Uporablja jo                 | Učinek                                                                                                                       |
| ------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`           | Nastavite na `false`, da zaznavanje v celoti onemogočite.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`           | Pravilnik za vrivanje: `warn`, `block` ali `log`. Podedovana vrednost `redact` ne prepisuje vrinjenega besedila.             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`           | Način za zaščito pred vrivanjem; tudi zastavica funkcije v zbirki podatkov, ki **preglasi** spremenljivke okolja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`           | Najnižja stopnja resnosti, ki jo `MODE=block` zavrne: `high` (privzeto), `medium` ali `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`           | Podedovan vzdevek za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`                 | Ko je nastavljeno na `true`, se podatki PII v zahtevi zakrijejo (neodvisno od načina vrivanja).                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nadaljnji tok) | Nadzira vedenje prikrivanja na strani odgovora.                                                                              |

Varovalni mehanizmi Modality Bridge berejo izvajalno konfiguracijo iz shrambe
nastavitev, podprte z zbirko podatkov (`getSettings()`), in ne iz spremenljivk okolja. Primarni ključi za slikovni način so
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` in
`modalityBridgeCacheMaxEntries`. Podedovani ključi
`visionBridge*` so sprejeti samo kot dokumentiran nadomestni način branja za en cikel;
zapisi nadzorne plošče uporabljajo primarne ključe. Privzete vrednosti in razreševalnik nadomestnih vrednosti
so v `src/shared/constants/modalityBridgeDefaults.ts`, podedovane
konstante pa so ohranjene v `src/shared/constants/visionBridgeDefaults.ts`.

Zvok uporablja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` in `modalityBridgeAudioMaxClips` ter skupne
nastavitve `modalityBridgeCache*`. Zvok nima nadomestnega branja podedovanih ključev, ker so bili ti
ključi uvedeni s shemo Modality Bridge.

Video uporablja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` in
`modalityBridgeVideoTimeout` ter skupne nastavitve `modalityBridgeCache*`.
Privzeto je onemogočen, ker sta FFmpeg/ffprobe izbirni operativni
odvisnosti, opisovanje sličic pa poveča zakasnitev in stroške modela.

## Zaščitni mehanizmi po meri

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

Koraki:

1. Ustvarite `src/lib/guardrails/myGuardrail.ts`, ki razširja `BaseGuardrail`.
2. Implementirajte `preCall` in/ali `postCall`.
3. Registrirajte ga bodisi ob uvozu (dodajte ga iz `registerDefaultGuardrails`) bodisi
   med izvajanjem pokličite `guardrailRegistry.register(...)` — register zamenja
   vsak predhodni zaščitni mehanizem z enakim normaliziranim imenom.
4. Dodajte teste v `tests/unit/` (obstoječi primeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Med testi uporabite `resetGuardrailsForTests()`, da začnete iz znanega stanja.
Posredujte `{ registerDefaults: false }`, da začnete s praznim registrom in
registrirate samo zaščitne mehanizme, ki jih testirate. Vision Bridge podpira vstavljanje
odvisnosti (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge ponuja
enakovredne priključne točke za nastavitve, zmogljivosti, izbiro modela STT, preverjanje
poverilnic in prepisovanje. Testi lahko zato preverjajo oba poteka brez dostopa do
podatkovne zbirke ali omrežja.

## Glejte tudi

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — skupni detektor, ki omogoča
  zaznavanje vbrizgavanja pozivov in maskiranje osebno določljivih podatkov
- `src/shared/constants/visionBridgeDefaults.ts` — privzete nastavitve Vision Bridge in
  seznam modelov s prisilno uporabo mostu
- `src/shared/constants/modalityBridgeDefaults.ts` — skupne privzete nastavitve izvajalnega okolja Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — neodvisna plast (varovalka, obdobja mirovanja)
- `docs/reference/ENVIRONMENT.md` — celoten pregled spremenljivk okolja

## Pokritost poti z zaščito pred vbrizgavanjem in red-team testiranje (8. faza · sklop D)

Zaščita pred vbrizgavanjem (`createInjectionGuard` / `withInjectionGuard`) pokriva vse poti,
ki sprejemajo uporabniške pozive. Upošteva `INJECTION_GUARD_MODE` (privzeto `warn` = samo beleženje;
`block` = vrne HTTP 400 `SECURITY_001`).

| Vrsta                | Poti                                                                                                                                                 | Privzeti način |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Besedilo (obstoječe) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativno          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Podatki              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Izločanje besedila (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testiranje (vsako noč, `nightly-llm-security.yml`):** promptfoo preverja, ali vsaka pot blokira
korpus OWASP-LLM v načinu `INJECTION_GUARD_MODE=block`; garak izvaja sonde (brez skrivnosti se preskoči).
Pot `moderations` je vključena zaradi doslednosti — upravljavci jo lahko v načinu blokiranja izvzamejo prek
`resolveDisabledGuardrails`.

Nočni delovni tok (`.github/workflows/nightly-llm-security.yml`, cron + ročni
zagon) ima dve opravili:

- **`promptfoo-guard` (blokirajoče)** — izvede `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Vsak nasprotniški primer (npr. »prezri vsa
  prejšnja navodila …«, poskusi pobega iz omejitev v slogu DAN) preveri, ali odgovor vsebuje
  `error.code === "SECURITY_001"`, tj. ali je zaščita dejansko zavrnila zahtevo.
- **`garak` (svetovalno)** — izvede garak `--probes promptinject,dan,leakreplay`
  proti lokalnemu primerku OmniRoute (`http://localhost:20128/v1`). Pogojeno je s
  skrivnostjo ponudnika (`PROMPTFOO_PROVIDER_KEY`); brez nje se elegantno preskoči, ukaz pa ima pripono
  `|| true`, zato poroča, ne da bi povzročil neuspeh CI.

Pokritost pomožne funkcije zaščite (`createInjectionGuard` / `withInjectionGuard`)
obsega vse poti `/v1`, ki sprejemajo pozive; besedilo poziva se pridobi iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` s funkcijo
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
