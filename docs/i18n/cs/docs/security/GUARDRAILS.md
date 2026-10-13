# Guardrails (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Naposledy aktualizováno:** 2026-08-29 — v3.8.51 (původ přepisu Video Bridge deklaruje volající,
> server jej zatím neověřuje — upřesněno dle #11661)

Guardraily prosazují bezpečnost, zásady a transformace obsahu na rozhraní
mezi OmniRoute a upstream poskytovateli. Každý guardrail může kontrolovat (a
volitelně odmítnout, transformovat nebo anotovat) datové části požadavků (`preCall`) a
upstream odpovědi (`postCall`).

Systém je **fail-open**: pokud guardrail během provádění vyvolá výjimku, registr
chybu zaznamená a pokračuje dalším guardrailem, místo aby požadavek
selhal. Blokování je výslovné rozhodnutí (`block: true`), nikdy ne nehoda.

## Vestavěné ochranné prvky

Registr automaticky načítá šest ochranných prvků v prioritním pořadí při importu
(vidět `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Název               | Stádium(s)     | Soubor                |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižší čísla priority běží **první**.

### Vision Bridge (`visionBridge.ts`) — Modální most PR-1

Zachycuje požadavky nesoucí obrázky zaměřené na **modely bez vidění** a buď
přesměrovává celý požadavek na model schopný vidění, nebo nahrazuje části obrázků
textovými popisy vytvořenými konfigurovatelným modelem vidění před
upstreamovým voláním. To umožňuje poskytovatelům pouze s textem transparentně
zpracovávat multimodální payloady.

Tok:

1. Přeskočit, pokud cílový model již podporuje vidění (pokud se neobjeví v
   seznamu nucených mostů `isVisionBridgeForcedModel`).
2. Extrakce částí obrázků pomocí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), která deleguje na **unifikovaný detektor médií**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný zdroj pravdy
   sdílený s filtrem kompatibility combo.
   Extrakce je povolena pouze pro vrcholové části tvarů,
   které může `replaceImageParts` znovu spojit (smlouva extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, a Responses API `input_image`. Vnořené zásahy a
   tvary pouze s indikátory jsou materiálem pro combo filtr a nikdy nejsou extrahovány.
   Přeskočit, pokud nebyly nalezeny žádné.
3. Vyřešit runtime konfiguraci pomocí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové klíče nastavení
   `modalityBridge*` vyhrávají; staré klíče `visionBridge*` zůstávají jako
   **jednorázová záloha** (okno pro návrat). Přeskočit před jakýmkoli
   procházením médií, když je most zakázán.
4. Výběr režimu (`modalityBridgeVisionMode`, viz tabulka níže) rozhoduje
   o přesměrování vs popis. Přesměrování vrací `modifiedPayload` pouze se
   zaměněným `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Cesta popisu: omezit obrázky na `maxImages`, sestavit úkolově
   orientovaný prompt, konzultovat cache popisů, zavolat model vidění **paralelně**
   (`Promise.allSettled`), a injektovat textové části `[Image N]: <description>`
   na jejich místo. Neúspěšný popis vrací `null` a původní část obrázku je
   **zachována** (#4012) — kromě cesty popisu combo, kdy každý
   popis selhal, kde potvrzený upstream bez vidění dostane
   `(unavailable — no vision-capable provider connected)` stub místo toho (#8430).
6. Vrátit `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Výběr režimu (`modalityBridgeVisionMode`)

| Režim      | Výchozí | Chování                                                                                                                                                                                                                                                                       |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Dědictví heuristika, nedotčená (#6640/#7204): modely bez combo/`auto/` přesměrovávají na nejlepší model vidění, pokud původní model již nemá použitelné pověření (pak popis); cíle combo vždy popisují.                                                                       |
| `describe` |         | Vždy popisovat — blok přesměrování je zcela přeskočen; zvolený model uživatele vždy odpovídá.                                                                                                                                                                                 |
| `reroute`  |         | Nucené přesměrování: ochrana modelu s uchováním pověření je obcházena. Ochrana pověření cílového přesměrování stále platí — pokud neexistuje žádný použitelný cíl vidění, požadavek přechází na popis, takže surové obrázky nikdy nedosáhnou backendu pouze s textem (#8430). |

Nucené režimy zkracují **před** tím, než se spustí automatická heuristika; chování `auto`
je identické s předchozím ochranným prvkem PR-1.

#### Úkolově orientovaný popisový prompt (`modalityBridgeVisionTaskAware`)

Výchozí **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) přidává
text **poslední uživatelské zprávy** (zkrácené na 500 znaků) k základnímu
popisovému promptu, nasměrovává popis k tomu, co uživatel skutečně požadoval
(patent codex-vision-proxy) a žádá model vidění, aby přepsal viditelný
text. Pokud je příznak vypnutý — nebo není žádný uživatelský text — používá se
nezměněný základní prompt.

Popis vlastního self-loopu `callVisionModelSingle()` v `visionBridgeHelpers.ts` vždy požaduje `image_url.detail: "high"` — bezpodmínečně, pro každého volajícího/poskytovatele, není řízen žádným signálem od klienta. Vzorkování s nízkým detailem snižuje přesnost OCR přesně pro úkol textové transkripce, o který tento prompt žádá, takže samotný popisový hovor vždy žádá o vysoké detaily bez ohledu na to, jakou úroveň detailu použil původní příchozí požadavek. To ovlivňuje pouze interní tělo popisového požadavku; nemění to, jak OmniRoute předává vlastní `image_url.detail` volajícího v primárním požadavku — tento výchozí se aplikuje samostatně a pouze pro detekované OpenCode klienty, v `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Anthropic drátový formát větve popisu self-loopu nemá pole `detail` a není ovlivněn žádným výchozím nastavením.

#### Popis výstupního limitu (`modalityBridgeVisionMaxChars`)

| Klíč                           | Výchozí | Rozsah             |
| ------------------------------ | ------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`     | `0` nebo 100–50000 |

`0` (výchozí) znamená **žádný limit** — popis vrácený funkcí `callVisionModel()` je předán nezměněný, čímž se zachovává stávající chování. Jakákoli hodnota v rozsahu 100–50000 zkracuje popis s příponou `…` předtím, než je znovu vložen jako `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`). Zvyšte tuto hodnotu pro úkoly OCR s vysokým detailem, kde downstream model potřebuje plnou transkripci; snižte ji, abyste omezili používání tokenů u komunikativních vizuálních modelů. Pole na panelu řídicího panelu se nachází na záložce Vize v pokročilém panelu (`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) a omezuje jakoukoli hodnotu mezi 1 a 99 na 100, zatímco explicitní `0` zůstává nedotčeno — `0` je platná hodnota Zod sama o sobě (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ne pouze "nepřidělený" výchozí.

#### Popis cache (`modalityBridge/bridgeCache.ts`)

Cache v paměti LRU + TTL pro výstupy popisu, sdílená v rámci procesu.
Klíč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s rámováním podle délky (žádné kolize na hranicích polí). Modelová složka je **konfigurovaný** mostový model, nikoli model, který skutečně odpověděl — `callVisionModel` může interně přejít na jiný model a klíčování podle pokusu by fragmentovalo cache. Neúspěšné popisy nejsou nikdy ukládány do cache. Nastavení:

| Klíč                            | Výchozí | Rozsah  |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalizace vzdáleného obrázku (self-loop popis/base64 načtení)

Když most sám načítá **vzdálený** obrázek — self-hovor Anthropic popisu a konverze claude-drátového formátu na base64 (`ensureBase64ImagesForClaudeWire`), obojí prostřednictvím `fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledný datový URI je předán přes `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) předtím, než je vložen do požadavku na vizuální model. Příliš velké obrázky jsou zmenšeny na **2048px dlouhý okraj** (odpovídající limitu změny velikosti, který OpenAI/Anthropic již aplikují na serverové straně), což snižuje uploadované bajty/latenci, aniž by se změnilo, co vizuální model vidí. Změna velikosti používá `sharp`, načtený prostřednictvím dynamického importu: na platformě, kde se jeho nativní binární soubor nedaří načíst, `normalizeDataUri()` **nikdy nevyhazuje** — přechází na průchod původními bajty, takže cesta popisu/base64-konverze vždy zůstává funkční. Neobrázkové bajty (načtení, které nevrátilo dekódovatelný obrázek) jsou také předány nezměněné. Tato normalizace se vztahuje pouze na obrázky, které most načítá pro svůj vlastní self-hovor — nikdy se neuplatňuje na surové payloady volajícího, v souladu s principem mutace pouze na opt-in (Tvrdé pravidlo #20).

#### Schéma nastavení + migrace

Nové klíče `modalityBridge*` jsou validovány pomocí Zod v `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*` a skupina `modalityBridgeAudio*` používaná Audio Bridge. Migrace `141_modality_bridge_settings.sql` kopíruje existující hodnoty legacy `visionBridge*` do odpovídajících nových klíčů (idempotentní, nikdy nepřepisuje hodnotu `modalityBridge*` nastavenou operátorem); legacy klíče zůstávají akceptovány jako fallback pro čtení po jedno cyklu vydání.

#### Hlava transparentnosti + statistiky

Odpovědi transformované popisem nesou `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (vytvořeno funkcí `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`, označeno funkcí `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`). Přesměrované požadavky **nemají** žádnou hlavičku — payload zůstal nedotčen a výměna modelu je již viditelná v poli `model` těla odpovědi.

`GET /api/modality-bridge/stats` (autentizace pro správu, stejná úroveň jako `GET /api/settings`) vrací v paměti per-modality počítadla `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` pro `vision`, `audio` a `video`. `averageLatencyMs` používá `latencySamples`, nikoli všechny pokusy, jako svůj jmenovatel; operace bez časování nevytváří vzorek s nulovou milisekundou. `bridged` zůstává zpětně kompatibilním aliasem pro úspěšné konverze; neúspěšné pokusy jej nezvyšují. Počítadla se při restartu procesu resetují záměrně (telemetrie, ne účetnictví).

#### Konfigurace řídicího panelu

Stránka věnovaná řídicímu panelu je  
`/dashboard/settings/modality-bridge`. Její URL-adresovatelné záložky `Vision`, `Audio`  
a `Video` zachovávají dotazovací parametry při přepínání hodnoty `tab`. Záložka Vision  
exponuje aktivaci, režim, výběr modelu (včetně automatického výchozího), úkolově  
vědomé vyžadování, pokročilé limity pro časový limit/délku obrázku/ popisu/cache,  
běhové počítadla a chráněný vzorový požadavek. Záložka Audio je také aktivní:  
exponuje aktivaci, výběr modelu pouze pro STT s možností Auto, limity pro časový  
limit/max-clip, audio počítadla a vzorový test `input_audio`. Záložka Video je  
funkční: hlásí stav běhu FFmpeg/ffprobe — jeden ze čtyř explicitních stavů UI  
(`unknown`, zatímco je zkoumáno nebo se nepodařilo dokončit, `restricted` na  
ne-loopback hostiteli řídicího panelu, kde je zkoumání přeskočeno na straně klienta,  
`unavailable` po zkoumání a potvrzení, že chybí, nebo `available` s verzemi  
FFmpeg/ffprobe) — uchovává limity pro aktivaci/model/frame/video/časový limit,  
filtruje výběr modelu na modely schopné zpracování obrazu a exponuje video počítadla.

Předchozí karta Vision Bridge pod nastavením AI je kompatibilní odkaz na  
novou stránku; již nevlastní druhou kopii formuláře. Poskytovatelé médií také  
odkazují na pracovní postupy Image-to-Text a Speech-to-Text na odpovídající  
záložky Modality Bridge, aniž by odstranili stávající hřiště Speech-to-Text.

**Obcházení přijetí sebekruhu:** když volání describe prochází vlastním  
sebekruhem OmniRoute `/v1` (nestandardní model poskytovatele), sub-požadavek  
odesílá `x-omniroute-admission-bypass: internal` a je autentizován s  
vyřešenými přihlašovacími údaji pro sebekruh — místní `sk_omniroute` sentinel v  
místním režimu, nebo operátorem nakonfigurovaný `OMNIROUTE_API_KEY` /  
`ROUTER_API_KEY` env klíč (#1350), takže nasazení s `REQUIRE_API_KEY=true`  
mohou stále provádět volání describe. Obcházení je ctěno pouze pro tyto  
přesné přihlašovací údaje, takže externí klienti nemohou použít hlavičku k  
přeskočení přijetí.

Dědictví výchozích hodnot žije v `src/shared/constants/visionBridgeDefaults.ts`;  
nové výchozí hodnoty pro režim/úkol/cache a resolver nastavení žijí v  
`src/shared/constants/modalityBridgeDefaults.ts`. Ochranná lišta exponuje  
možnost konstruktoru `deps`, takže testy mohou injektovat falešné  
implementace `getSettings` a `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachycuje audio obsahující chatové požadavky, než dosáhnou cíle, který není  
známý jako akceptující audio vstup. Nikdy nepřesměrovává chatový požadavek:  
audio části jsou přepisovány prostřednictvím stávajícího OpenAI-kompatibilního  
multipart koncového bodu a vybraný chatový model pokračuje s textovými  
přepisy.

Tok:

1. Vyřešte `supportsAudio` prostřednictvím `getResolvedModelCapabilities()`.  
   Explicitní metadata registru poskytovatelů vyhrávají, poté statická metadata  
   modelu, poté synchronizované `modalities_input`. Deklarovaný seznam vstupů  
   bez `audio` je `false`; žádný důkaz o schopnosti zůstává `null`. Jak `false`,  
   tak `null` aktivují konzervativní most, zatímco `true` ho obchází.
2. Vyřešte nastavení `modalityBridgeAudio*` a extrahujte splicovatelné  
   audio části z každé zprávy prostřednictvím sdíleného detektoru  
   `detectMediaParts()`. Podporované dráty jsou OpenAI `input_audio`,  
   `audio_url` a `source.media_type: "audio/*"`. Vnořené audio je detekováno  
   pro směrování, ale není odstraněno splicovací cestou. Práce je omezena  
   `modalityBridgeAudioMaxClips`; pozdější části zůstávají nedotčeny.
3. Ctěte nakonfigurovaný `provider/model`, nebo nechte `selectAudioBridgeModel()`  
   projít `AUDIO_TRANSCRIPTION_PROVIDERS` ve stabilním katalogovém pořadí a  
   vyberte první model s použitelnými aktivními přihlašovacími údaji poskytovatele.
4. `callAudioTranscription()` převádí audio ve formátu base64/data-URI na  
   multipart `file`, nebo stahuje vzdálené `audio_url` prostřednictvím  
   veřejně dostupné výstupní ochrany s DNS pinningem a limitem 25 MB. Poté  
   POSTuje soubor a vybraný model do místního `/v1/audio/transcriptions`  
   sebekruhu, autentizovaného s `resolveSelfLoopBearer()`. Stávající trasa  
   přepisu provádí normální vyhledávání přihlašovacích údajů, zpracování  
   cooldown/rate-limit a odesílání poskytovatele.
5. Úspěšná volání nahrazují své části s `[Audio N]: <transcript>`. Volání  
   běží s `Promise.allSettled`: jednotlivé selhání uchovává původní audio část  
   (#4012 smlouva). Pokud každé volání selže a cíl se prokáže jako  
   `supportsAudio === false`, části se stanou  
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 smlouva).  
   Pro neznámý cíl (`null`) zůstává výsledek se všemi selháními nedotčen.  
   Prokázaný cíl pouze pro text bez použitelných přihlašovacích údajů STT  
   obdrží stejný explicitní stub bez provedení síťového volání.

Úspěšné přepisy používají procesem širokou LRU/TTL cache Modality Bridge. Klíč  
kombinuje audio referenci, stabilní štítek operace `audio-transcription` a  
vybraný model STT; selhání nejsou nikdy ukládána do cache. Audio pokusy  
aktualizují sdílené počítadla `bridged`, `cacheHits`, `failures` a `lastUsedAt`.  
Transformované odpovědi nesou  
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;  
nedotčené požadavky nedostávají segment Audio Bridge.

Běhová nastavení jsou podložena DB a validována Zod:

| Klíč                          | Výchozí | Rozsah           |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | Auto nebo STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

Sdílená cache zůstává řízena `modalityBridgeCacheEnabled`,  
`modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptuje vrcholové video části v Chat Completions `messages` a odpovědích
API `input` před tím, než je zavolán cíl bez známé nativní podpory videa.
Podporované formáty jsou `input_video`, `video_url`, `video_source`, HTTPS URL
a `data:video/*;base64,...` datové URI. Čisté názvy souborů v textu nejsou považovány
za video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) zajišťuje průchod požadavky,
kontrolu schopností/politiky, agregaci na úrovni požadavku a payload odpovědi.
Práce na úrovni videa — akvizice, cache celkového výsledku, popis sekvence snímků
(která slučuje jakýkoli audio přepis deklarovaný volajícím) a metriky/přerušení/úklid
na úrovni pokusu — je skryta za `processVideoPart` v `videoBridgePipeline.ts`,
která je volána jednou za video část uvnitř smyčky `preCall`. Tento modul také
definuje explicitní portové hranice `VideoMediaBrokerPort` (získávání bytů a
extrakce vzorkovaných snímků), `VideoAudioTranscriptionPort` (sloučení
audio přepisu deklarovaného volajícím se vzorkovanými titulky) a
`VideoDrilldownPort` (legacy tvar raw-store). Produkční STT a uchovávání snímků
jsou složeny kolem popisného portu prostřednictvím `createVideoSttAdapter` a
`createVideoDrilldownAdapter`; ten druhý využívá sdílený neprůhledný cyklus.

Veřejná cesta požadavku `/v1` nikdy neimportuje ani nevyvolává podproces.
Vzdálená videa jsou stahována pod limitem 50 MiB; inline base64 videa mají
konzervativní limit 36 MiB na dekódované video, aby model/messages/framing envelope
mohly zůstat uvnitř veřejného limitu přijetí JSON požadavku 50 MiB. Délka inline
a odhady dekódované velikosti jsou kontrolovány před alokací. HTTPS je
požadováno na počátečním vzdáleném URL a každém přesměrování, přičemž se používá
existující veřejně pouze výstupní ochrana s DNS pinningem. Byty pak překračují
přesně interní hranici `POST /api/modality-bridge/video/extract`. Tato trasa je
jak `LOCAL_ONLY`, tak `SPAWN_CAPABLE`, přijímá pouze ověřený, důvěryhodný
loopback požadavek na úrovni procesu a nikdy nepřijímá URL, cestu k souborovému
systému, spustitelný soubor nebo seznam argumentů. Pipeline velikosti těla API
a inkrementální čtečka těla handlera nezávisle vynucují limit 50 MiB na vstup
brokeru. Jeho omezená fronta provádí jednu extrakci najednou, umožňuje čtyři
čekající úkoly a omezuje čekající vstup na 100 MiB.

Uvnitř brokera `ffprobe` čte soukromý místní soubor; pevný formát
allowlist vylučuje playlisty a manifesty. Pro povolené kontejnery rodiny MOV
zůstávají externí odkazy na MOV data ve výchozím nastavení zakázány a
pevný příkaz se na ně nepřihlašuje. Jak `ffprobe`, tak `ffmpeg` používají
whitelist protokolu pouze `file`, jeden vlákno, pevné pole argumentů, žádný shell
a spustitelné soubory vyřešené z `PATH`. Připojené obrázkové krycí proudy nejsou
přehrávatelné kandidáty. Všechny přehrávatelné proudy musí splňovat limity, a
explicitní výchozí proud je preferován před deterministickým nejnižším indexem
náhradního řešení. Videím je omezeno na 600 sekund, 8 192 pixelů na rozměr a
33 554 432 zdrojových pixelů. FFmpeg vzorkuje 1–16 středových JPEG snímků,
škáluje dlouhou hranu na maximálně 1 024 pixelů bez zvětšování menších vstupů a
nikdy nepřijímá URL. Vzorkování je ve výchozím nastavení `uniform`. Volitelné
politiky `scene_aware` a experimentální `segment_aware` provádějí jeden
další pevný průchod FFmpeg přes již validovaný místní proud, vybírají
omezené časové značky scén `showinfo` a deterministicky se vracejí k
stejným uniformním středům při selhání detektoru, vypršení času,
neplatném výstupu nebo prázdném souboru kandidátů. Mód segment-aware
alokuje středové vzorky proporcionálně k validovaným scénickým intervalům;
důkazy segment-aware a chování náhradního řešení jsou podrobně popsány níže.
Tvrdý limit 16 snímků je aplikován po výběru v každé politice. Když má
požadavek zaměřený na scénu pouze rozpočet na jeden snímek, používá
uniformní střed aktivního celého videa nebo zaměřeného okna a hlásí
`policyEffective: uniform`: jediný vybraný snímek scény nemůže zachovat
oba časové konce. Volající může volitelně poskytnout konečné zaměřené okno
(`start`/`end` sekundy); limity jsou ohraničeny na délku média, obrácená nebo
nekonečná okna jsou odmítnuta a všechna vzorkovací politika se provádějí
pouze uvnitř normalizovaného intervalu. Výsledné okno je zahrnuto v
metadata vzorkování a v prefixu nedůvěryhodného popisu, aby mohly
následné modely rozlišovat zaměřený výňatek od celého časového rámce.

Sémantické zaměření titulků je samostatné, explicitní nastavení.
Výchozí režim analýzy `full` zachovává existující rámcový prompt a nikdy
nepředává text požadavku modelu titulků. V režimu `focused` most čte
pouze nejnovější neprázdný uživatelsky vytvořený `text`/`input_text`
ze stejné nádoby Chat nebo Responses, normalizuje ho na NFC,
snižuje ovládací znaky a bílé znaky a omezuje ho na 500 Unicode kódových bodů.
Prázdný výsledek se vrací k přesnému `full` promptu. Použitelný náznak je
serializován jako JSON v dedikovaném bloku nedůvěryhodného uživatelského kontextu
a může pouze upřednostnit pozorovatelné detaily; nemůže přepsat
samostatné varování proti následování pokynů viditelných nebo slyšitelných
v médiu. Textové zaměření nikdy neodvozuje `start`/`end` nebo nemění
časový vzorkovač.

#### FU-07 strukturovaný segmentový důkaz

`segment_aware` používá jeden omezený předanalytický průchod přes již
validovaný místní video proud. Pevný filtr řetězec nejprve škáluje na maximálně
320 pixelů na šířku, detekuje změny scén a zmrazené intervaly, poté vzorkuje
1 snímek za sekundu pro rozmazání, průměrnou luminiscenci a prostorové/časové
informace. Průchod je omezen na 600 strukturálních vzorků, jedno vlákno
FFmpeg/filtru, stejný whitelist protokolu a kontejneru `file`-only,
1 MiB limit výstupu procesu a maximálně 30 sekund uvnitř sdíleného
přerušení/termínu brokera. Nikdy nepřijímá příkaz, filtr, cestu nebo URL
z požadavku.

Strukturální hodnoty jsou deterministické vzorkovací důkazy, nikoli sémantické porozumění videu. Neodvozují subjekty, akce, titulky, řeč nebo záměr uživatele. Hranice scén a zmrazení tvoří segmenty; pokrytí zmrazením, rozmazání, expozice, prostorové detaily a časová změna pouze ovlivňují, jak je stávající rozpočet 1–16 snímků přidělen. Úplně zmrazený segment je omezen na jeden snímek, zatímco nezmrazené segmenty soutěží o zbývající rozpočet. Když hranice převyšují snímky, zachovává se jednotné pokrytí časové osy, takže rychlé rané střihy nemohou skrýt dlouhý následující segment. Hranice scén v rámci 1-sekundové analýzy rozlišení hranice zmrazení jsou sloučeny.

Chybějící filtry, nesprávné/prázdné důkazy, chyba detektoru nebo omezený časový limit předanalýzy selhávají otevřeně na přesnou jednotnou politiku středního bodu. Zrušení volajícího nebo termín zprostředkovatele neselhává otevřeně: ukončuje probíhající podproces, brání pozdějšímu extrakci snímků a soukromý dočasný strom je odstraněn v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické skutečné FFmpeg
instalace pro úspory po deduplikaci titulkových volání, přidělení rozpočtu na hustý pohyb,
důkazy o rozmazání/expozici/SI-TI, rychlé střihy s dlouhým ocasem a falešné pozitivy
postupného vyblednutí. Zaznamenává čas stěny předanalýzy a, kde je `/usr/bin/time`
dostupný, dětské CPU a vrcholový RSS. Jeho kontrola kvality je pouze strukturálními orákly.
Skutečná kvalita modelu titulků zůstává `HOLD`, protože tento systém nemá
autorizovaný koncový bod nebo zmrazeného soudce. Finanční úspory také zůstávají `HOLD`
pokud `--caption-cost-per-call-usd` neposkytne explicitní pozitivní odhad na volání; skript nikdy nevytváří ani jeden výsledek.

Každý snímek je omezen na 4 MiB, všechny surové snímky dohromady na 23 MiB a
serializovaná odpověď zprostředkovatele na 32 MiB. Soukromý dočasný adresář je odstraněn
v `finally`. OmniRoute nespojuje FFmpeg a nepřijímá vlastní cestu k
spustitelnému souboru. Před titulkováním most aplikuje konzervativní vizuální
deduplikaci: každý JPEG je zredukován na 16×16 odstín šedé a je
porovnáván pouze s posledním zachovaným snímkem. Pro požadovaný rozpočet titulků
nad jeden snímek, extrakce dodává
omezený kandidátní bazén až dvojnásobného rozpočtu a nikdy více než 16 snímků.
Požadovaný limit je aplikován pouze po deduplikaci, přičemž první a poslední
vybraní kandidáti jsou zachováni během konečného ztenčení, když je rozpočet alespoň
dva. Verze
`grayscale-16x16-mean-cells-v2` politika používá větší z průměrného luma delta a
poměru buněk miniatur, jejichž normalizované delta je alespoň 0.05. Prah pro duplicity je
konstantní 0.04, zvolený pro předvídatelnost spíše než
exponovaný jako nastavení za běhu. Tento sekundární
vysokokontrastní signál zachovává malé pohyby a změny viditelného textu, které může
porovnání pouze s průměrem skrýt. Chyby komparátoru nebo dekodéru selhávají otevřeně a
udržují pokrytí. Výstupní metadata oddělují extrahované kandidáty, úspěšně použité
snímky a vizuální duplicity, které byly vyřazeny.

Výslovně označená část videa může požadovat časově označený kontaktní list. Most
vytváří maximálně 4-sloupcovou, 16-snímkovou JPEG mřížku. Každá buňka o velikosti 512 pixelů
vypaluje svůj časový údaj do vysoce kontrastního spodního pásu, zatímco stejné časové údaje
zůstávají v textových metadatech pro následné přiřazení a audit. Kompletní
JPEG zůstává omezen na 32 MiB. Pokud `sharp` nemůže dekódovat nebo sestavit mřížku, most
se vrací k jednotlivým JPEG snímkům; zrušení klienta se stále propaguje
přes operaci listu.

Důkazy o propagaci jsou záměrně odděleny od syntetického složení
mikrobenchmarku. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje
schéma-verzi A/B systému pro skutečné modely kompatibilní s OpenAI. Měří
poskytovatelem hlášené tokeny, latenci konce ke konci (včetně složení listu),
počet volání modelu a uchování faktů definovaných manifestem. Surové odpovědi modelu nejsou
zapsány do zprávy; pouze SHA-256 součty a shodné ID faktů jsou uchovány. Systém
neprovádí žádné síťové nebo placené volání modelu, pokud není předán `--execute-real` a
jsou nakonfigurovány `--model`, `OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY`. Bez
tohoto explicitního skutečného běhu zůstává jeho strojově čitelný verdikt `HOLD`; syntetické
měření payload/počtu volání sama o sobě nejsou důkazy o propagaci.

Oddělený `scripts/perf/video-bridge-promotion-eval.ts` zpracovává pozorování FU-07 nebo
FU-09. Přijetí propagace vyžaduje všech osm syntetických scénářových typů plus
sanitizovaný skutečný klip, alespoň tři měřené opakování na roli
a případ, všech deset deklarovaných metrik, zmrazené média/prompt/čekané-fakty/nastavení
součty, unikátní ID pozorování a ověřený zasetý A/B pořadí. Potvrzení provedení
svazuje součet korpusu, přesný SHA kandidáta a revizi modelu. Chybějící
nebo neplatná měření zůstávají `HOLD`, včetně CPU nad 30 s, vrcholového RSS nad
512 MiB nebo předanalýzy nad 30 s. Toto jsou limity pro přijetí důkazů, nikoli nová
garance vynucení RSS za běhu.

FU-07 vyžaduje alespoň 98% uchování kvality a p95 latenci ne více než 1.2x
základní, plus buď 0.05 absolutní případově vyvážené zlepšení průměrného
připomenutí při ekvivalentních průměrných voláních titulků, nebo alespoň 10% méně
průměrných volání titulků po deduplikaci. FU-09 vyžaduje alespoň 0.85 kvalitu, 95%
uchování, 20% snížení latence p95 a 10% snížení tokenů. Ztráta kritických faktů,
shoda s injekcí nebo chybějící použití brání propagaci. Jedno provedení nemůže nic
propagovat: `--previous-report` potvrzuje dvě odlišné, nepřekrývající se, po sobě jdoucí
způsobilé provedení stejné politiky/revize modelu/kandidáta/korpusu. Vzorkovací experiment
nemůže potvrdit experiment s kontaktním listem.

Sběratelé by měli hodnotit odpovědi v paměti a ukládat `responseDigest` plus
metriky a vazby pozorování, nikdy text odpovědi. Spotřebitel také čte
historické surové pozorování, ale nikdy tento text nekopíruje do svých zpráv. Přijímá se přesně jeden z `responseDigest` nebo `rawResponseText` pro každé pozorování.
Verzovaná povolená lista zůstává prázdná s neměnným výchozím `hold`. Oprávněný záznam vyžaduje jeho důkazní referenci, politiku, revizi modelu, přesný SHA kandidáta, manifestní digest a dvě odlišné ID běhu; konfliktní kontexty jsou odmítnuty. Tyto metadata jsou auditem, nikoli důkazem, že odkazovaný soubor obsahuje skutečná měření. Před přidáním jakéhokoli záznamu si prohlédněte skutečné účtenky. Endpoint pro správu statistik a Video dashboard odhalují konzervativní připravenost. Pouze nakonfigurovaný alias modelu nezakládá jeho revizi nebo běžící SHA kandidáta, takže aktuální dashboard hlásí `HOLD` místo opětovného použití oprávněnosti z jiného kontextu provádění. Explicitní experimentální výběr zůstává oddělen od propagace; žádný výchozí se automaticky nemění.

Zavolání mohou připojit volitelnou `transcript.cues` pole k podporované části videa, když již mají zarovnaný text. Každý cue musí obsahovat `text`, konečný `start`/`end` interval uvnitř prozkoumané doby, a bílou listinu `source` (`client`, `embedded`, nebo `audio-bridge`); `confidence` má výchozí hodnotu `1` a musí zůstat mezi `0` a `1`. Přesně duplicitní cues jsou sloučeny. OmniRoute nikdy nezačíná transkripci z těchto metadat: validované cues jsou zkopírovány do popsaného výsledku se zdrojem, důvěrou a intervalem, a jsou vykresleny jako nedůvěryhodná pozorování vedle titulků snímků. Neplatný, mimo rozsah, nebo bezprovenienční text je odmítnut místo toho, aby byl smíchán do streamu titulků. Obě kanály transkripce těla žádosti normalizují dodanou provenienci na `client`, včetně sebe-oznámených `embedded` nebo `audio-bridge` štítků. Pouze adaptér vlastněný serverem může přiřadit tyto důvěryhodné štítky prostřednictvím argumentu pouze pro kód `trustedSource`; pole JSON žádosti nemůže dosáhnout tohoto argumentu. Text transkripce zůstává nedůvěryhodným obsahem odvozeným od médií, bez ohledu na jeho provenienci, a nikdy nesmí určovat autorizaci.

Pokročilý volající může poskytnout `audioTranscript` stopu pro stejné video; je považována za text poskytnutý klientem, nikoli důkaz serverové transkripce. Fúzní šev provozuje vizuální a audio pozorování pod jedním termínem a signálem pro přerušení, řadí je na společném časovém rámci, sloučí přesné duplicity a hlásí částečný výsledek, když pouze jedna strana uspěje. Neplatný `audioTranscript` degraduje na tento částečný výsledek — vizuální popis je zachován a audio větev zaznamenává sanitizovaný kód selhání — místo toho, aby selhal celé video. Dostupnost na každé větvi, částečná vlajka a sanitizované kódy selhání jsou zachovány v popsaném výsledku, v metadata ochranného pásma (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), v metadata cache výsledků a v počítadlech fúze mostu. Výchozí cesta Video Bridge nevyvolává převod řeči na text nebo nestahuje druhou kopii médií; bez této explicitní stopy zůstává pouze video.

**Uchování transkripce (#12150 P1).** To se automaticky aplikuje, kdykoli
Video Bridge (sám opt-in) vykresluje cue transkripce — neexistuje žádná samostatná
vlajka uchování. Když žádost vykreslí jakýkoli cue transkripce (volající deklarovaný
`transcript` nebo fúzovaný `audioTranscript`), ochranné pásmo jej označí
`videoBridgeObserved` a produkuje redigovaný stín videa popisu —
identické vykreslení, ve kterém je tělo každého cue nahrazeno
`[redacted-video-transcript]`, vytvořené substitucí strukturovaného pole cue
před sestavením řetězce (nikdy analýzou zploštělého textu, takže žádný obsah cue
— protivník nebo obyčejný, včetně těl obsahujících `]`, jako
`[inaudible]`/`[music]` — nemůže přežít). Uložené tělo žádosti v protokolu
vymění každou část textu odvozeného od videa za tento redigovaný stín, shodně podle
rovnosti obsahu; ukotvení `fullText` je znovu přečteno z dokončeného předvolání
payloadu ochranného pásma, takže shoda stále úspěšně probíhá po pozdějších
ochranných pásech (maskování PII a přihlašovacích údajů, priority 10/95), které
přepisují text popisu na místě a po systémovém výzvě/předání/vstřiku paměti
přetvářejí pole zpráv. Tělo odeslané nahoru k modelu zůstává nezměněno. Pozorovaná žádost také nepopulární žádnou trvalou paměť (jak extrakce odvozená od žádosti, tak odpovědi jsou přeskočeny),
takže odpověď modelu nemůže odrážet text transkripce do paměti.

**Surové video pole (#12430).** Když je most povolen a nativní podpora videa je neznámá nebo chybí, definovaná pole `transcript`/`audioTranscript` také aktivují `videoBridgeObserved`, i po selhání popisu nebo limitu `maxVideos`. `null` a prázdné řetězce se počítají; chybějící pole a metadata, která nejsou videem, se nepočítají. Uložené kopie redigují tato pole nebo vynechávají žádost, a cache/paměť jsou obcházena. Payload poskytovatele zůstává nezměněn.

Další uložené kopie používají stejný signál pozorované žádosti. Surový
snapshot klientské žádosti před ochranným pásmem, žádost v paměti čekající a
raný protokol odmítnuté žádosti strukturálně nahrazují pole transkripce ve
videových částech; řetězcové výzvy syntetizované fázemi pipeline a předáním kontextu
jsou redigovány na sinku uloženého těla žádosti. Uložený marker `video_content_removed`
způsobuje, že pokračování `previous_response_id` selže uzavřeně místo toho, aby
rekonstruovalo text, který byl úmyslně vyřazen. Pokud pozorovaná žádost ztratí svůj
stín redakce před protokolováním, nebo dokonce jeden z několika video stínů
selže v shodě po pozdějších mutacích žádosti, je uložené tělo žádosti
úplně vynecháno místo toho, aby uchovávalo částečně redigovanou transkripci.

Pro pozorovanou žádost může modelová odpověď citovat jakoukoli část přepisu bez strukturované hranice nápovědy. Její trvalý protokol volání `responseBody` je proto nahrazen značkou vynechání; podrobný artefakt pipeline (který může zahrnovat upstream/tělo klienta a streamové chunk) není uchován. Sémantické, idempotentní a reasoning-replay cache obcházejí čtení a zápisy pro tuto žádost. Žádost poskytovatele a odpověď viditelná pro klienta zůstávají nezměněny. Ranné keepalive bajty jsou odčerpány z dočasného bufferu, když je podrobný artefakt vynechán. Kirova varování o neplatném EventStreamu hlásí pouze počet bajtů payloadu, nikdy jeho obsah nebo hrubou chybu JSON parseru.  
To netvrdí, že každá nesouvisející diagnostika poskytovatele/pluginu byla auditována; širší úklid uchovaných sinků je sledován v #11658.

Interní `/api/modality-bridge/video/drilldown` životní cyklus je samostatný, loopback/token-authentizovaný cache substrát. Každá operace také vyžaduje kanonické neprůhledné ID hlavního subjektu. Než je povolen volající v produkci, musí odvodit toto ID z autentizovaného nájemce a nikdy nesmí předávat hodnotu vybranou klientem. Klíče cache spojují tohoto hlavního subjektu s kanonickými ID relace a video-reference, ukládají pouze jejich klíče odvozené z SHA-256 a omezují jak čtení, tak odstranění na stejný hlavní subjekt. Cache ukládá maximálně 16 odvozených JPEG snímků na položku, vyprší po deseti minutách a podporuje omezené `start`/`end` čtení nebo explicitní odstranění relace.

Každý hlavní subjekt je omezen na 16 položek a 64 MiB kanonických JPEG dat. Tato omezení jsou nezávislá na globálním stropu 64 položek/256 MiB: tlak na kvótu hlavního subjektu vyřazuje pouze nejméně používané položky tohoto hlavního subjektu, než je zvažováno globální LRU vyřazení. Vypršené položky jsou odstraněny jak z hlavního subjektu, tak z globálního účetnictví při aktivitě cache, zatímco zrušení a selhání validace neprovádí částečnou náhradu.

Cache odmítá nekanonické Base64, nadbytečné padding, ne-JPEG média, neplatné nebo zkrácené JPEG a JPEG, které vyvolávají varování během omezeného dekódování celého obrazu `sharp`. Každý přijatý obrázek znovu kóduje jako kanonický JPEG, odvozuje šířku a výšku z dekódovaných bajtů místo důvěřování polím volajícího a odmítá jakékoli koncové polyglot bajty místo jejich uchovávání. Pouze omezený kanonický komprimovaný buffer je účtován oběma kvótám. Limit JSON wire zahrnuje Base64 overhead pro strop dekódovaného vstupu 32 MiB. Každé  
uložené odvození zaznamenává svůj validovaný JPEG formát/rozlišení, politiku vzorkování, verzi odvození, čas vytvoření, serverem vypočítaný hash obsahu a hash rodičovské reference plus hash rodičovského obsahu důvěryhodného volajícího. Zrušení je kontrolováno mezi asynchronními fázemi dekódování/hashování před atomickým potvrzením cache.

Producent v produkci znovu používá již odvozené broker snímky pouze po úspěšné vizuální analýze, bez druhého stahování/extrakce videa. Vyžaduje operátor `modalityBridgeVideoDrilldownEnabled=true`, přísné per-part `drilldown: true` a autentizovaný API-klíč záznam ID. Klientem deklarované hodnoty hlavního subjektu/relace nikdy nezakládají vlastnictví. Bez všech tří podmínek neprovádí hash, změnu velikosti ani neuchovává další snímky. Selhání uchování zachovává použitelnou vizuální odpověď. Souhlasné žádosti obcházejí cache výsledků celého videa, takže uložené výsledky nikdy neprovádějí opakování handle.

Úspěšné JSON a SSE odpovědi odhalují maximálně čtyři neprůhledné handle v omezeném `x-omniroute-video-drilldown` headeru. Autorizované prohlížečové původy mohou číst tento header bez rozšíření CORS politiky původu. Nové handle používají `v1.<32-byte random base64url token>`, a registr uchovává pouze jejich SHA-256 hashe. Čtečka/parser headeru také přijímá legacy 64-hex tokeny. Autentizovaný veřejný spotřebitel je  
`GET /api/v1/video-bridge/drilldown?handle=...`, nezávisle řízený `modalityBridgeVideoDrilldownRemoteEnabled=true`. Explicitní trvalé false odnímá přístup i když je povolen fallback na legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env. Fallback na produkční uchování má analogický legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Oba fallbacky mají výchozí hodnotu vypnuto.

Spotřebitel odvozuje vlastnictví z autentizovaného klíče, aplikuje politiku klíče a vrací stejný 404 pro neznámé, vypršené a handle jiného klíče. Přijímá `variant=preview|standard|detail` (maximální JPEG rozměr 320/640/1280, nikdy neupscaled), `limit=1..8` (nebo legacy alias `frames`, nikdy obojí), nula-založenou `page` a volitelné `start`/`end` sekundy zaměření. Duplicitní  
dotazovací klíče a obrácená okna zaměření jsou odmítány. Každá vrácená varianta má hash svého skutečného obsahu a skutečné rozlišení metadat, propojené s uchovaným zdrojem. Varianty jsou odvozeny při čtení spíše než uchovávány jako další uchované kopie. JSON odpověď, včetně Base64/envelope, je omezena na 32 MiB; příliš velká stránka vrací 413 a klient musí požádat o méně snímků. Čtení kontroluje zrušení kolem každého změny velikosti a znovu kontroluje platnost handle před vrácením. `DELETE` od vlastníka je idempotentní; odstranění nebo vypršení TTL uvolňuje uchovaný zdroj a účetnictví použití.

Sdílený obchod je procesně lokální: handle vyprší při restartu a nejsou přenositelné mezi nezávislými procesy OmniRoute. Statistika správy odhaluje efektivní uchování/remote politiku a agregované uchované položky/bajty pouze, nikdy média, reference, ID hlavního subjektu nebo handle. Panel nastavení videa zobrazuje tyto hodnoty a může uchovávat oba přepínače souhlasu. Tato dokumentace implementace není důkazem živého nasazení nebo propagace; akceptace reálného modelu je sledována odděleně.

Rámečky jsou titulkovány sekvenčně s nakonfigurovaným Video modelem. Prázdný Video override zdědí nastavení Vision; pokud jsou oba prázdné, Vision auto-router vybere efektivní model schopný vidění. Úspěšné titulky nahrazují původní část stabilním prefixem `[Video description:` který také označuje text jako nedůvěryhodnou mediálně odvozenou pozorování a říká downstream modelům, aby se neřídily pokyny nalezenými v médiu. Klíče mezipaměti pro titulky rámců zahrnují JPEG bajty, prompt, časovou značku a efektivní model; pouze úspěšné titulky jsou ukládány do mezipaměti. Záznamy v mezipaměti uchovávají skutečný úspěšný model producenta, včetně záložního modelu; most hlásí `mixed`, když byly různé rámečky vyprodukovány různými modely. Zásah do mezipaměti znovu používá tuto identitu producenta místo toho, aby ji přejmenoval na požadovaný plán směrování. Mezipaměť výsledků celého videa je klíčová na každém vstupu, který mění výstup — prompt, efektivní model, politiku vzorkování, počet rámců, režim sémantické analýzy, SHA-256 otisk normalizovaného náznaku zaměření, okno zaměření, `transcript`, `audioTranscript` a příznak kontaktního listu — takže změna jakékoli z těchto dimenzí je zásah do mezipaměti, nikdy ne zastaralé opětovné použití. Verze politiky vizuální deduplikace, práh a omezený počet kandidátských rámců jsou také explicitní v klíči mezipaměti výsledků a metadatech; změna politiky tedy nemůže znovu použít zastaralý popis celého videa. Metadata mezipaměti výsledků v4 uchovávají režim a otisk, nikdy však surový uživatelský úkol. Metadata ochranného pásma hlásí jak požadované, tak efektivní režimy analýzy; požadovaný režim `focused` bez použitelných uživatelských textů je hlášen jako efektivně `full`.

Ochranné pásmo extrahuje každou podporovanou část videa, ale popisuje maximálně `modalityBridgeVideoMaxVideos`. Pro cíl, u kterého je prokázáno, že `supportsVideo === false`, se neúspěšná a nadlimitní videa stávají explicitními bezpečnými textovými značkami, takže žádné surové video nepřežije. Když je schopnost neznámá, tyto části zůstávají nedotčeny. Cíle s `supportsVideo === true` obcházejí most. Signál pro zrušení požadavku klienta se šíří prostřednictvím stahování, fronty brokerů, podprocesů a volání titulků; zrušení se zastaví mezi videi a nikdy neotevře k surovým médiím.

Nastavení za běhu jsou podložena DB a validována Zod:

| Klíč                                | Výchozí     | Rozsah / chování                                                                                      |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Volitelný runtime, opt-in                                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` uchovává obecné titulky; `focused` používá omezený, nedůvěryhodný kontext posledního uživatele |
| `modalityBridgeVideoModel`          | `""`        | Dědí model Vision Bridge                                                                              |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, nebo proporcionální `segment_aware`; selhání detektoru se vrací k `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                        |

Hodnoty časového limitu Video, které byly uloženy a překračují 120 sekund, jsou omezeny na termín brokera; nové zápisy nad tímto limitem jsou odmítnuty. `GET /api/modality-bridge/video/runtime` vyžaduje důvěryhodnou razítkovanou smyčkovou lokalitu před autentizací nebo zkoumáním runtime, poté vyžaduje správu auth. Vrací pouze `available`, sanitizované verze FFmpeg/ffprobe a pevný důvod, když runtime není k dispozici. Interní koncový bod pro extrakci není veřejné API pro nahrávání: saturace fronty vrací `503` plus `Retry-After`, odpojení volajícího vrací `499`, a pevný termín brokera vrací `504`. Převedené odpovědi přidávají `video->text;model=<visionModel>;parts=<videos>` do centrálního `x-omniroute-modality-bridge` hlavičky, aniž by odstranily segmenty Vision nebo Audio.

### PII Masker (`piiMasker.ts`)

Běží na **obou** fázích.

- **`preCall`** klonuje payload, prochází `system`, `messages`, `input` a `prompt` (včetně obyčejných řetězcových položek) a aplikuje `processPII()` (z `@/shared/utils/inputSanitizer`) na řetězcové `content`/`text` pole. Když je `PII_REDACTION_ENABLED=true`, detekované PII je redigováno v odchozím payloadu. To je nezávislé na `INPUT_SANITIZER_MODE` (který pouze řídí politiku injekce promptu). Když je redakce vypnuta, záznam volání uchovává počty detekce bez přepisování obsahu.
- **`postCall`** hluboce klonuje odpověď, spouští `sanitizePIIResponse()` plus maskér tvaru Responses-API (`maskResponsesOutput` — pokrývá `output_text` a `output[].content[].text`). Pokud dojde k jakékoli redakci, upravená odpověď nahrazuje původní.

Ochranné pásmo nikdy nezablokuje; pouze anotuje (`meta.detections`, `meta.redacted`) nebo přepisuje.

### Prompt Injection (`promptInjection.ts`)

Detekuje protivníkovské struktury v uživatelském obsahu a prosazuje nakonfigurovanou politiku. Chování je řízeno proměnnými prostředí a možnostmi konstruktoru:

| Nastavení      | Env var                                                                                               | Výchozí | Efekt                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Povolené       | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Když je `false`, strážní systém zkracuje.                                                                                                                                                   |
| Mód            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Politika injekce: `block`, `warn` nebo `log`. (`redact` je akceptováno pro zpětnou kompatibilitu, ale **ne** odstraňuje text injekce; přepis PII žádosti je řízen `PII_REDACTION_ENABLED`.) |
| Prah blokování | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Minimální závažnost potřebná k blokování. Střední je ve výchozím nastavení pouze pro pozorování.                                                                                            |

**Priorita módu** (`getMode`): volající `options.mode` →
`INJECTION_GUARD_MODE` **přepsání funkce flagu DB** (Dashboard → Nastavení →
Funkční flagy) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Přepsání na dashboardu tedy vítězí nad env proměnnými, takže uživatelské
rozhraní funkčních flagů řídí běžící strážní systém v reálném čase (bez restartu). Čtení z DB je fail-safe:
pokud dojde k chybě, strážní systém se vrátí k chování založenému na env, a když není
nastaveno žádné přepsání, chování je identické s řešením pouze na základě env.

Zdroje detekce:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (sdílený detektor
   použitý jinde v pipeline).
2. Vestavěné `DEFAULT_GUARD_PATTERNS` (aktuálně `system_override_inline` a
   `markdown_system_block`, obě s závažností `high`).
3. Volitelné `customPatterns` předané prostřednictvím možností konstruktoru (řetězce, regex,
   nebo `{ name, pattern, severity }` záznamy).

Když `mode === "block"` **a** alespoň jedna detekce splňuje prahovou
závažnost, `preCall` vrací `{ block: true, message: "Žádost byla zamítnuta:
detekován podezřelý obsah" }`. V módech `warn`/`log` strážní systém loguje, ale
umožňuje volání. Sdílená pomocná funkce `evaluatePromptInjection()` je také exportována
pro volající, kteří potřebují vyhodnotit výzvy bez procházení registru.

**Skenovací limit (v3.8.20):** detektor kontroluje pouze **prvních 16 KB**
spojeného textu výzvy — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtů) v
`src/shared/utils/inputSanitizer.ts`. Jak `detectInjection()`, tak
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` před spuštěním
cyklu vzorů. Injekční direktivy se nacházejí blízko vrcholu vstupu, takže to
omezuje CPU/GC regexu na víc než stovkách KB payloadů, aniž by to oslabilo detekci (srov.
#3932, #4041).

### Maskér přihlašovacích údajů (`credentialMasker.ts`)

Běží na **obou** fázích, poslední v defaultním řetězci (priorita `95`). Odstraňuje
známé vzory API klíčů / tajných tokenů z výstupního payloadu (obsah zprávy,
argumenty volání nástroje, výsledky nástroje) **a** odpovědi poskytovatele, takže
přihlašovací údaje vložené do výzvy (nebo vrácené výsledkem nástroje) nejsou uniklé
k upstream poskytovateli nebo zpět k klientovi.

- **Pouze na základě opt-in**, stejná konvence jako PII redakce (Hard Rule #20-adjacent):
  zakázáno, pokud `settings.credentialRedactionEnabled === true` **nebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Když je to vypnuto, strážní systém je no-op —
  nikdy neblokuje a nikdy nepřepisuje.
- `redactCredentials()` prochází celým stromem payloadu/odpovědi (`walkValue()`,
  bezpečné proti zneužití prototypu, bezpečné proti cyklům pomocí `WeakSet`) a nahrazuje shody
  s `[REDACTED:<type>]` zástupným symbolem, klonuje pouze větve, které se skutečně
  změnily.
- `CREDENTIAL_PATTERNS` pokrývá klíče poskytovatelů LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokeny (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platební klíče (Stripe, Square), cloudové
  klíče (AWS access key, Twilio, SendGrid, Mailgun), soukromé klíče / JWT,
  přihlašovací řetězce obsahující přihlašovací údaje (`mongodb://user:pass@...`, atd.), a
  generický vzor pro hlavičku `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Klíče ve tvaru hlavičky (`authorization`, `x-api-key`, `api-key`,
  `apikey`) jsou strukturovaně redigovány (pouze hodnota, schéma prefix jako
  `Bearer `/`Basic ` zachováno) spíše než pomocí generického textového regexu.
- Strážní systém nikdy neblokuje; pouze přepisuje (`modifiedPayload` /
  `modifiedResponse`) a anotuje (`meta.credentialsRedacted`, `meta.count`).

Regresní stráž: `tests/unit/credential-masker-guardrail.test.ts`.

## Základní kontrakt (`base.ts`)

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
  block?: boolean; // true zkrátí vyhodnocování řetězce
  message?: string; // zobrazí se při zablokování
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vráceno metodou preCall pro přepsání požadavku
  modifiedResponse?: TValue; // vráceno metodou postCall pro přepsání odpovědi
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

Ochranné pravidlo signalizuje „žádnou změnu“ vrácením hodnoty `void`, `{}` nebo
`{ block: false }`. Vrácení `modifiedPayload`/`modifiedResponse` nahradí
hodnotu procházející řetězcem pro následná ochranná pravidla.
`signal?: AbortSignal` přenáší životní cyklus volajícího do ochranných pravidel. Přerušení požadavku je záměrnou výjimkou z režimu fail-open: mediální převodníky ukončí práci a provedou úklid, aniž by obnovily nezpracovaná média pro cíl, o kterém je známo, že je nepodporuje.

## Registr (`registry.ts`)

Singleton `guardrailRegistry` poskytuje:

- `register(guardrail)` — přidá ochranné pravidlo (nebo je nahradí podle normalizovaného názvu) a
  znovu seřadí pravidla vzestupně podle `priority`.
- `clear()` / `list()` — pomocné administrativní funkce.
- `runPreCallHooks(payload, context)` — prochází aktivní ochranná pravidla, předává
  payload prostřednictvím `modifiedPayload` a zastaví se při prvním `block: true`.
- `runPostCallHooks(response, context)` — stejný postup na straně odpovědi.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a volitelně
  znovu zaregistruje výchozí pravidla pro čistou izolaci testů.

Oba spouštěče vracejí `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamů `GuardrailExecutionResult`, které obsahují
pro jednotlivá ochranná pravidla pole `blocked`, `skipped`, `modified`, `error` a `meta`,
užitečná pro trasování.

### Zakázání ochranných pravidel pro jednotlivé požadavky

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` shromažďuje
deduplikovaný seznam názvů ochranných pravidel, která mají být pro aktuální
požadavek přeskočena. Zdroje (všechny jsou volitelné a všechny se slučují):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v těle požadavku (na nejvyšší úrovni)
- `metadata.disabledGuardrails` v těle požadavku
- Hlavička `x-omniroute-disabled-guardrails` (nebo starší
  `x-disabled-guardrails`)

Hodnoty mohou být pole řetězců nebo řetězec oddělený čárkami; názvy jsou
normalizovány na malá písmena ve formátu kebab-case (`pii_masker` → `pii-masker`). Výsledek
je předán registru prostřednictvím `context.disabledGuardrails`, který přeskočí
odpovídající ochranná pravidla (`skipped: true` v `results`).

## Pořadí zpracování

Pro každý požadavek procházející přes `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sestaví seznam vynechaných ochranných mechanismů z klíče API, těla požadavku
   a hlaviček.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spustí ochranné mechanismy ve vzestupném
   pořadí priorit:
   - Zakázané ochranné mechanismy se zaznamenají jako `skipped`.
   - Metoda `preCall` každého ochranného mechanismu může přepsat datovou část pomocí `modifiedPayload`.
   - První výskyt `block: true` okamžitě ukončí řetězec a obslužná rutina vrátí
     odpověď o zamítnutí ochranným mechanismem.
3. (Případně přepsaná) datová část pokračuje do kombinovaného směrování a odeslání
   nadřazené službě.
4. Po sestavení odpovědi spustí `guardrailRegistry.runPostCallHooks(...)`
   stejný řetězec nad odpovědí. Hodnota `block: true` v této fázi zahodí odpověď
   nadřazené služby.

Ochranné mechanismy, které vyvolají výjimku, se zaznamenají s `error: <message>` a zaprotokolují prostřednictvím
`logger.warn`, ale řetězec pokračuje — záměrně tedy funguje v režimu fail-open.

## Konfigurace

Proměnné prostředí načítané vestavěnými ochrannými mechanismy:

| Proměnná                              | Používá ji                | Účinek                                                                                                        |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Nastavením na `false` se detekce zcela zakáže.                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Zásady pro injekce: `warn`, `block` nebo `log`. Zastaralá hodnota `redact` text injekce nepřepisuje.          |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Režim ochrany proti injekcím; zároveň příznak funkce v DB, který **přepisuje** proměnné prostředí (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimální závažnost, kterou `MODE=block` odmítne: `high` (výchozí), `medium` nebo `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Zastaralý alias pro `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Je-li nastaveno na `true`, údaje PII v požadavku se začerní (nezávisle na režimu injekcí).                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (na výstupu) | Řídí chování maskování na straně odpovědi.                                                                    |

Ochranné mechanismy Modality Bridge načítají běhovou konfiguraci z úložiště nastavení
založeného na DB (`getSettings()`), nikoli z proměnných prostředí. Primární klíče pro obraz jsou
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Zastaralé klíče
`visionBridge*` jsou přijímány pouze jako zdokumentovaný záložní zdroj pro čtení během jednoho cyklu;
zápisy z řídicího panelu používají primární klíče. Výchozí hodnoty a záložní
resolver se nacházejí v `src/shared/constants/modalityBridgeDefaults.ts`, přičemž zastaralé
konstanty zůstávají zachovány v `src/shared/constants/visionBridgeDefaults.ts`.

Zvuk používá `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` společně se sdílenými
nastaveními `modalityBridgeCache*`. Zvuk nemá záložní podporu zastaralých klíčů, protože tyto
klíče byly zavedeny se schématem Modality Bridge.

Video používá `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout` společně se sdílenými nastaveními `modalityBridgeCache*`.
Ve výchozím nastavení je zakázáno, protože FFmpeg/ffprobe jsou volitelné provozní
závislosti a popisování snímků zvyšuje latenci a náklady na model.

## Vlastní guardraily

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

Postup:

1. Vytvořte `src/lib/guardrails/myGuardrail.ts`, který rozšiřuje `BaseGuardrail`.
2. Implementujte `preCall` a/nebo `postCall`.
3. Buď jej zaregistrujte při importu (přidáním z `registerDefaultGuardrails`), nebo
   za běhu zavolejte `guardrailRegistry.register(...)` — registr nahradí
   jakýkoli dřívější guardrail se stejným normalizovaným názvem.
4. Přidejte testy do `tests/unit/` (existující příklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testování

Mezi testy použijte `resetGuardrailsForTests()`, abyste vždy začínali ze známého stavu.
Předejte `{ registerDefaults: false }`, chcete-li začít s prázdným registrem a
zaregistrovat pouze testované guardraily. Vision Bridge podporuje vkládání závislostí
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge zpřístupňuje ekvivalentní
rozhraní pro nastavení, schopnosti, výběr modelu STT, kontrolu přihlašovacích údajů
a přepis. Testy tak mohou ověřovat oba toky bez přístupu k databázi nebo síti.

## Viz také

- `src/lib/guardrails/` — implementace
- `src/shared/utils/inputSanitizer.ts` — sdílený detektor zajišťující
  detekci prompt injection a maskování PII
- `src/shared/constants/visionBridgeDefaults.ts` — výchozí hodnoty Vision Bridge a
  seznam modelů s vynuceným přemostěním
- `src/shared/constants/modalityBridgeDefaults.ts` — sdílené výchozí hodnoty běhového prostředí Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonální vrstva (circuit breaker, intervaly zklidnění)
- `docs/reference/ENVIRONMENT.md` — úplný přehled proměnných prostředí

## Pokrytí tras ochranou proti injection a red-team testování (Fáze 8 · Blok D)

Ochrana proti injection (`createInjectionGuard` / `withInjectionGuard`) pokrývá všechny trasy,
které přijímají uživatelské prompty. Respektuje `INJECTION_GUARD_MODE` (výchozí `warn` = pouze protokolování;
`block` = vrátí HTTP 400 `SECURITY_001`).

| Typ              | Trasy                                                                                                                                                | Výchozí režim |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (stávající) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativní      | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Extrakce textu (`extractMessageContents`) pokrývá `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testování (každou noc, `nightly-llm-security.yml`):** promptfoo ověřuje, že každá trasa blokuje
korpus OWASP-LLM v režimu `INJECTION_GUARD_MODE=block`; garak spouští sondy (bez tajného klíče se přeskočí).
`moderations` je zahrnuto kvůli konzistenci — provozovatelé jej mohou v režimu blokování vyjmout pomocí
`resolveDisabledGuardrails`.

Noční pracovní postup (`.github/workflows/nightly-llm-security.yml`, cron + ruční
spuštění) obsahuje dvě úlohy:

- **`promptfoo-guard` (blokující)** — spouští `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý nepřátelský případ (např. „ignoruj všechny
  předchozí instrukce…“, jailbreaky ve stylu DAN) ověřuje, že odpověď obsahuje
  `error.code === "SECURITY_001"`, tj. že ochrana požadavek skutečně odmítla.
- **`garak` (informativní)** — spouští garak `--probes promptinject,dan,leakreplay`
  proti lokální instanci OmniRoute (`http://localhost:20128/v1`). Je podmíněna
  tajným klíčem poskytovatele (`PROMPTFOO_PROVIDER_KEY`); pokud není k dispozici, korektně se přeskočí a je doplněna
  o `|| true`, takže podá hlášení, aniž by způsobila selhání CI.

Pokrytí pomocné funkce ochrany (`createInjectionGuard` / `withInjectionGuard`)
zahrnuje každou trasu `/v1` přijímající prompt; text promptu se získává z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocí
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
