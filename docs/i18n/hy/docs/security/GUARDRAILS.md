# Guardrails (Հայերեն)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Ճշմարտության աղբյուր՝** `src/lib/guardrails/`
> **Վերջին թարմացումը՝** 2026-08-29 — v3.8.51 (Video Bridge-ի տրանսկրիպտի ծագումը հայտարարում է կանչողը,
> և այն դեռ չի ստուգվում սերվերի կողմից — հստակեցվել է ըստ #11661-ի)

Պաշտպանիչ սահմանափակումներն ապահովում են անվտանգությունը, քաղաքականությունների կիրառումը և բովանդակության փոխակերպումները
OmniRoute-ի ու վերին մակարդակի մատակարարների միջև ընկած սահմանագծում։ Յուրաքանչյուր պաշտպանիչ սահմանափակում կարող է ստուգել (և
ըստ անհրաժեշտության մերժել, փոխակերպել կամ ծանոթագրել) հարցման օգտակար բեռները (`preCall`) և
վերին մակարդակի պատասխանները (`postCall`)։

Համակարգը գործում է **fail-open** սկզբունքով․ եթե պաշտպանիչ սահմանափակման կատարման ընթացքում բացառություն է առաջանում, ռեեստրը
գրանցում է սխալը և հարցումը ձախողելու փոխարեն շարունակում է հաջորդ պաշտպանիչ սահմանափակմամբ։
Արգելափակումը միշտ բացահայտ որոշում է (`block: true`) և երբեք՝ պատահականություն։

## Ներքին պաշտպանիչ միջոցներ

Ռեգիստրն ավտոմատ կերպով ներբեռնում է վեց պաշտպանիչ միջոցներ առաջնահերթության կարգով ներմուծման ժամանակ
(տես `registry.ts` → `registerDefaultGuardrails()`):

| Առաջնահերթություն | Անվանում            | Հարթակ(ներ)    | Ֆայլ                  |
| ----------------- | ------------------- | -------------- | --------------------- |
| `5`               | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`               | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`               | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`              | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`              | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`              | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ավելի ցածր առաջնահերթության համար թվերը աշխատում են **առաջին**։

### Vision Bridge (`visionBridge.ts`) — Մոդալիտետային կամուրջ PR-1

Բռնում է պատկեր պարունակող հարցումները, որոնք ուղղված են **ոչ-տեսողական մոդելներին** և կամ
վերադարձնում է ամբողջ հարցումը տեսողական կարողություններով մոդելին կամ փոխարինում է պատկեր
պահանջները տեքստային նկարագրություններով, որոնք ստեղծվում են կարգավորվող տեսողական մոդելի կողմից, նախքան
վերահսկող զանգը։ Սա թույլ է տալիս միայն տեքստային մատակարարներին թափանցիկ կերպով գործել
մուլտիմոդալ բեռների հետ։

Հոսք:

1. Թողնել, եթե նպատակային մոդելը արդեն աջակցում է տեսողությանը (եթե այն չի հայտնվում
   պարտադիր-կամուրջի ցուցակում `isVisionBridgeForcedModel`).
2. Հանել պատկերային մասերը `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), որը պատվիրում է **միավորված մեդիա
   հայտնաբերիչին** `detectMediaParts()` `open-sse/utils/mediaParts.ts`-ում — ճշգրիտ
   աղբյուրը, որը կիսվում է համադրության համատեղելիության ֆիլտրի հետ։
   Հանումը թույլատրվում է միայն ձևերի վերին մակարդակի մասերի համար,
   որոնք կարող են վերականգնվել `replaceImageParts`-ի միջոցով (հանել↔փոխարինել պայմանագիր): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, և Responses API `input_image`։ Ներսում գտնվող հարվածները և
   միայն ցուցիչ ձևերը համադրության ֆիլտրի նյութ են և երբեք չեն հանվում։
   Թողնել, եթե ոչինչ չի գտնվել։
3. Հարթակային կարգավորումը լուծել `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): նոր `modalityBridge*`
   կարգավորումների բանալիները հաղթում են; հին `visionBridge*` բանալիները մնում են **մեկ-ցիկլային
   հետադարձ** (հետադարձ պատուհան)։ Թողնել ցանկացած մեդիա անցումից առաջ, երբ
   կամուրջը անջատված է։
4. Մոդի ընտրիչը (`modalityBridgeVisionMode`, տես ստորև ներկայացված աղյուսակը) որոշում է
   վերափոխել կամ նկարագրել։ Վերափոխումը վերադարձնում է `modifiedPayload` միայն `model`
   փոխարինված, plus meta `{ rerouted, fromModel, toModel, imagesKept }`։
5. Նկարագրելու ճանապարհը. սահմանափակել պատկերները `maxImages`-ով, կազմել խնդրի գիտակից հրահանգը,
   խորհրդակցել նկարագրության cache-ի հետ, զանգահարել տեսողական մոդելը **պարալել**
   (`Promise.allSettled`), և ներարկել `[Image N]: <description>` տեքստային մասերը իրենց տեղում։
   Նկարագրելու ձախողումը վերադարձնում է `null` և սկզբնական պատկերային մասը
   **պահպանվում է** (#4012) — բացառությամբ համադրության նկարագրության ճանապարհի, երբ յուրաքանչյուր
   նկարագրություն ձախողվել է, որտեղ հաստատված ոչ-տեսողական վերին մակարդակը ստանում է
   `(unavailable — no vision-capable provider connected)` կաղապար (#8430)։
6. Վերադարձնել `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`)։

#### Մոդի ընտրիչ (`modalityBridgeVisionMode`)

| Մոդ        | Դեֆոլտ | վարքագիծ                                                                                                                                                                                                                                                |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Հին հիպոթեզ, անփոփոխ (#6640/#7204): ոչ-համադրություն/`auto/` մոդելները վերափոխվում են լավագույն տեսողական մոդելին, եթե սկզբնական մոդելը արդեն ունի օգտագործելի հավատարմագրեր (այն ժամանակ նկարագրում); համադրության նպատակները միշտ նկարագրում են։      |
| `describe` |        | Always describe — the reroute block is skipped entirely; the user's chosen model always answers.                                                                                                                                                        |
| `reroute`  |        | Force reroute: the keep-credentialed-model guard is bypassed. The reroute-**target** credential guard still applies — when no usable vision target exists, the request falls through to describe so raw images never reach a text-only backend (#8430). |

Պարտադիր մոդերը կարճացնում են **առաջ** ավտո հիպոթեզը գործի մեջ; `auto` վարքը
բայթ-հավասար է նախորդ PR-1 պաշտպանիչ միջոցին։

#### Պատասխանատու նկարագրության հրահանգ (`modalityBridgeVisionTaskAware`)

Դեֆոլտ **ճիշտ**։ `composeVisionPrompt()` (`visionBridgeHelpers.ts`) ավելացնում է
**վերջին օգտագործողի հաղորդագրության** (կրճատված 500 նիշ) տեքստը հիմք
նկարագրական հրահանգին, ուղղորդելով նկարագրությունը դեպի այն, ինչ իրականում հարցնում է օգտագործողը
(codex-vision-proxy pattern) և խնդրելով տեսողական մոդելին՝ տեքստը վերագրել։
Flag-ը անջատված է — կամ օգտագործողի տեքստ չկա — հիմք հրահանգը օգտագործվում է անփոփոխ։

Նկարագրել ինքնապտույտի սեփական OpenAI-համատեղելի հարցումը (`callVisionModelSingle()`
`visionBridgeHelpers.ts`-ում) միշտ պահանջում է `image_url.detail: "high"` —
անհրաժեշտորեն, յուրաքանչյուր զանգահարողի/մատակարարի համար, առանց որևէ հաճախորդի ազդանշանի վրա փակվելու:
Low-detail sampling-ը նվազեցնում է OCR ճշգրտությունը հենց այն տեքստի-փոխանցման
աշխատանքի համար, որը այս հրահանգը պահանջում է, այնպես որ նկարագրել զանգը միշտ պահանջում է բարձր
ճշգրտություն, անկախ նրանից, թե ինչ մանրամասնության մակարդակ է օգտագործվել սկզբնական inbound հարցման մեջ: Սա
միայն ազդում է ներքին նկարագրության հարցման մարմնի վրա; դա չի փոխում, թե ինչպես
OmniRoute-ը փոխանցում է զանգահարողի սեփական `image_url.detail` հիմնական հարցման վրա —
այս նախնականը կիրառվում է առանձին, և միայն հայտնաբերված OpenCode հաճախորդների համար,
`defaultImageDetail()`-ում (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic-ի wire-format ճյուղը նկարագրել ինքնապտույտի համար չունի `detail` դաշտ
և չի ազդում որևէ նախնականի վրա:

#### Նկարագրել ելքային սահմանափակում (`modalityBridgeVisionMaxChars`)

| Կի                             | Նախնական | Տիրույթ           |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` կամ 100–50000 |

`0` (նախնական) նշանակում է **ոչ սահմանափակում** — `callVisionModel()`-ի կողմից վերադարձված նկարագրությունը
անցնում է առանց փոփոխության, պահպանելով առկա վարքագիծը: 100–50000 տիրույթում գտնվող ցանկացած արժեք կտրում է
նկարագրությունը `…` հավելվածով, նախքան այն վերամիավորվելն `[Image N]: <description>`-ի հետ
(`VisionBridgeGuardrail.preCall()`-ում `src/lib/guardrails/visionBridge.ts`-ում).
Ավելի բարձրացրեք սա մանրամասն-ծանր OCR աշխատանքների համար, որտեղ ստորին մոդելը պետք է
լրիվ փոխանցում; նվազեցրեք այն, որպեսզի սահմանափակեք նշանների օգտագործումը խոսուն տեսողական մոդելների վրա.
Dashboard դաշտը գտնվում է Vision թաբի Advanced պանելում
(`modality-bridge-max-chars`-ում `ModalityBridgeVisionTab.tsx`) և սահմանափակում է ցանկացած
արժեք 1-ից 99 մինչև 100 հատակը, մինչդեռ թողնելով բացահայտ `0`-ը անփոփոխ — `0`-ը
իր հերթին վավեր Zod արժեք է
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ոչ միայն
"չսահմանված" նախնական:

#### Նկարագրել կոշտ (cache) (`modalityBridge/bridgeCache.ts`)

Հիշողության մեջ LRU + TTL կոշտ նկարագրությունների ելքերի համար, կիսված գործընթացի լայնությամբ:
Կի = `sha256(imageRef + composedPrompt + configuredBridgeModel)` երկարության-prefix շրջանակով
(ոչ դաշտ-սահմանի բախումներ): Մոդելի բաղադրիչը
**կարգավորված** կամուրջի մոդելն է, ոչ թե այն մոդելը, որը իրականում պատասխանեց —
`callVisionModel`-ը կարող է ներքին կերպով հետադարձվել, և յուրաքանչյուր փորձի համար բանալին
կոտրում է կոշտը: Անհաջող նկարագրությունները երբեք չեն պահվում: Կարգավորումներ:

| Կի                              | Նախնական | Տիրույթ |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Remote image normalization (self-loop describe/base64 fetch)

Երբ կամուրջը ինքնուրույն բերում է **remote** պատկեր — Anthropic նկարագրել
ինքնահավաքը և claude-wire-format base64 փոխարկումը
(`ensureBase64ImagesForClaudeWire`), երկուսն էլ
`fetchRemoteImageAsDataUri()`-ի միջոցով `visionBridgeHelpers.ts`-ում — արդյունքի տվյալ URI-ն
անցնում է `normalizeDataUri()`-ի միջոցով
(`open-sse/utils/imageNormalize.ts`) նախքան այն ներդրվի տեսողական մոդելի
հարցման մեջ: Oversized պատկերները նվազեցվում են **2048px երկար եզրին** (համապատասխանելով
resize cap-ին, որը OpenAI/Anthropic արդեն կիրառում է սերվերային կողմում), ինչը կրճատում է
բեռնումի բիթ/լատենտությունը առանց փոխելու այն, ինչ տեսնում է տեսողական մոդելը:
Resize-ը օգտագործում է `sharp`, որը բեռնվում է դինամիկ ներմուծմամբ:
Այդ հարթակում, որտեղ դրա բնիկ
բայները չի բեռնվում, `normalizeDataUri()` **չի նետում** — այն հետադարձվում է
առաջին բիթերի փոխանցմամբ, այնպես որ նկարագրել/base64-փոխարկման
ուղին միշտ շարունակում է աշխատել: Ոչ-պատկերային բիթերը (մի fetch, որը չի վերադարձրել
կոդավորվող պատկեր) նույնպես անցնում են անփոփոխ: Այս նորմալացումը սահմանափակվում է
պատկերներին, որոնք կամուրջը բերում է իր սեփական ինքնահավաքի համար — այն երբեք
չի կիրառվում զանգահարողի خام passthrough բեռի վրա, համաձայն
ընտրովի միայն մուտացիայի սկզբունքի (Hard Rule #20).

#### Կարգավորումների սխեմա + միգրացիա

Նոր `modalityBridge*` բանալիները Zod-ով վավերացված են `updateSettingsSchema`-ում
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` եռյակը, և
`modalityBridgeAudio*` խումբը, որը օգտագործվում է Audio Bridge-ի կողմից:
Միգրացիա `141_modality_bridge_settings.sql`-ը պատճենում է առկա ժառանգական
`visionBridge*` արժեքները համապատասխան նոր բանալիներին (իդեմպոտենտ, երբեք չի փոխում
օպերատորի սահմանված `modalityBridge*` արժեքը); ժառանգական բանալիները մնում են ընդունված
որպես ընթերցմանFallback մեկ թողարկման ցիկլի համար:

#### Թափանցիկության գլխիկ + վիճակագրություն

Նկարագրել-փոխված պատասխանները կրում են
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(կառուցված `buildModalityBridgeHeader()`-ի միջոցով `modalityBridge/bridgeStats.ts`-ում,
նշանակված `withModalityBridgeHeader()`-ի միջոցով `src/sse/handlers/chatHelpers.ts`-ում).
Վերահասցեավորված հարցումները **չեն** ստանում գլխիկ — բեռը անփոփոխ էր, և մոդելի
փոխարինումը արդեն տեսանելի է պատասխան մարմնի `model` դաշտում:

`GET /api/modality-bridge/stats` (կառավարման հեղինակություն, նույն մակարդակում, ինչ
`GET /api/settings`) վերադարձնում է հիշողության մեջ յուրաքանչյուր մոդալության համար
հաշվիչները `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` `vision`, `audio`, և
`video` համար: `averageLatencyMs` օգտագործում է `latencySamples`, ոչ թե բոլոր փորձերը, որպես
իր բաժանորդը; ժամանակի առանց գործողություն չունեցող գործողությունը չի ստեղծում զրո-միլիսեկունդ
օրինակ: `bridged` մնում է հետադարձ-համատեղելի այլ անուն հաջողված
փոխարկումների համար; անհաջող փորձերը չեն ավելացնում այն:
Հաշվիչները վերականգնվում են գործընթացի վերագործարկման ժամանակ նախագծով
(տելեմետրիա, ոչ հաշվապահություն).

#### Dashboard կարգավորում

Նվիրված վահանակի էջը է
`/dashboard/settings/modality-bridge`։ Նրա URL հասցեով `Vision`, `Audio`
և `Video` ներդիրները պահպանում են հարցման պարամետրերը, երբ փոխում են `tab` արժեքը։
Vision ներդիրը բացահայտում է ակտիվացման, ռեժիմի, մոդելի ընտրության (ներառյալ ավտոմատ
հիմնականը), առաջադրանքի-aware հրահանգման, առաջադեմ ժամանակի/պատկեր/նկարագրության երկարության/քեշի
սահմանափակումները, գործառնական
հաշվիչները և պաշտպանված նմուշի հարցումը։ Audio ներդիրը նույնպես կենդանի է. այն բացահայտում է
ակտիվացումը, STT-ով մոդելի ընտրիչը Auto-ով, ժամանակի/մաքսիմալ կտորների սահմանափակումները, աուդիո
հաշվիչները և `input_audio` նմուշի փորձարկումը։ Video ներդիրը գործառնական է. այն հաղորդում է
FFmpeg/ffprobe գործառնական վիճակը՝ չորս հստակ UI վիճակներից մեկը (`unknown`, երբ
հետազոտությունը օդում է կամ չի կարող ավարտվել, `restricted` ոչ-լուպբեք
վահանակի հյուրընկալողում, որտեղ հետազոտությունը բաց է թողնվում հաճախորդի կողմից, `unavailable` երբ
հետազոտվել է և հաստատվել է բացակայությունը, կամ `available` FFmpeg/ffprobe տարբերակներով)՝
պահպանելով ակտիվ/մոդել/ֆրեյմ/վիդեո/ժամանակի սահմանափակումները, մոդելի ընտրիչը ֆիլտրելով
տեսողական կարողություններով մոդելների համար և բացահայտելով վիդեո հաշվիչները։

AI կարգավորումների ներքո նախկին Vision Bridge քարտը համատեղելիության հղում է
նոր էջին. այն այլևս չի տիրապետում ձևի երկրորդ պատճենին։ Մեդիա մատակարարները նույնպես
հղում են անում Image-to-Text և Speech-to-Text աշխատանքային հոսքերին համապատասխան
Modality Bridge ներդիրներին, առանց գոյություն ունեցող Speech-to-Text խաղահրապարակը հեռացնելու։

**Self-loop ընդունման շրջանցում:** երբ նկարագրել զանգը անցնում է OmniRoute-ի
իր սեփական `/v1` self-loop (ոչ ստանդարտ մատակարարի մոդել), ենթահարցումը ուղարկում է
`x-omniroute-admission-bypass: internal` և հաստատվում է լուծված
self-loop հավատարմագրով՝ տեղական `sk_omniroute` պահապանով տեղական ռեժիմում, կամ
օպերատորի կողմից կարգավորված `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env բանալիով (#1350), որպեսզի
`REQUIRE_API_KEY=true` տեղադրումները դեռ կարողանան իրականացնել նկարագրել զանգը։ Շրջանցումը
ընդունվում է միայն այդ կոնկրետ հավատարմագրերի համար, այնպես որ արտաքին հաճախորդները չեն կարող
օգտագործել վերնագիրը ընդունումը շրջանցելու համար։

Հին նախնական պարամետրերը գտնվում են `src/shared/constants/visionBridgeDefaults.ts`-ում։
Նոր ռեժիմի/առաջադրանքի-aware/cache նախնական պարամետրերը և կարգավորումների լուծիչը գտնվում են
`src/shared/constants/modalityBridgeDefaults.ts`-ում։ Պաշտպանիչը բացահայտում է
`deps` կոնստրուկտորի տարբերակ, որպեսզի թեստերը կարողանան ներարկել կեղծ `getSettings` և
`callVisionModel` իրականացմաններ։

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Անցկացնում է աուդիո պարունակող զրույցի հարցումները, նախքան դրանք հասնում են նպատակին, որը հայտնի չէ
ընդունելու աուդիո մուտք։ Այն երբեք չի վերափոխում զրույցի հարցումը. աուդիո մասերը
գրանցվում են գոյություն ունեցող OpenAI-համատեղելի բազմամասային վերջնակետով, և ընտրված զրույցի մոդելը
շարունակում է տեքստային գրառումները։

Հոսք:

1. Լուծել `supportsAudio` միջոցով `getResolvedModelCapabilities()`։ Հստակ
   մատակարարի գրանցման մետադատան հաղթում է, ապա ստատիկ մոդելի մետադատան, ապա սինխոնիզացված
   `modalities_input`։ `audio`-ի բացակայությամբ հայտարարված մուտքի ցանկը `false` է; ոչ
   կարողության ապացույցը մնում է `null`։ Ինչպես `false`, այնպես էլ `null` ակտիվացնում են
   պահպանողական կամուրջը, մինչդեռ `true`-ն շրջանցում է այն։
2. Լուծել `modalityBridgeAudio*` կարգավորումները և յուրաքանչյուր հաղորդագրությունից
   դուրս բերել կտրվող վերին մակարդակի աուդիո մասերը՝ օգտագործելով ընդհանուր `detectMediaParts()`
   հայտնաբերման գործիքը։ Supported wire shapes-ը OpenAI `input_audio`, `audio_url`, և
   `source.media_type: "audio/*"` են։ Nested աուդիոն հայտնաբերվում է ուղղորդման համար, բայց
   չի հեռացվում կտրման ճանապարհով։ Աշխատանքը սահմանափակվում է `modalityBridgeAudioMaxClips`-ով;
   հետագա մասերը մնում են անփոփոխ։
3. Հարգել կարգավորված `provider/model`, կամ թողնել `selectAudioBridgeModel()`-ը քայլել
   `AUDIO_TRANSCRIPTION_PROVIDERS` կայուն կատալոգի կարգով և ընտրել առաջին մոդելը
   օգտագործելի ակտիվ մատակարարի հավատարմագրով։
4. `callAudioTranscription()`-ը փոխարկում է base64/data-URI աուդիոն բազմամասային
   `file`-ի, կամ ներբեռնում է հեռավոր `audio_url`-ը հանրային միայն outbound
   պաշտպանությամբ DNS pinning-ով և 25 MB սահմանով։ Այնուհետև POST-ով ուղարկում է ֆայլը և ընտրված
   մոդելը տեղական `/v1/audio/transcriptions` self-loop-ին, հաստատված `resolveSelfLoopBearer()`-ով։ Գոյություն ունեցող
   գրանցման ուղին իրականացնում է սովորական հավատարմագրերի որոնում, cooldown/rate-limit
   մշակումը և մատակարարի ուղարկումը։
5. Հաջող զանգերը փոխարինում են իրենց մասերը `[Audio N]: <transcript>`-ով։ Զանգերը
   աշխատում են `Promise.allSettled`-ով. անհատական ձախողումը պահպանում է այդ սկզբնական
   աուդիո մասը (#4012 պայմանագիր)։ Եթե յուրաքանչյուր զանգ ձախողում է, և նպատակն ապացուցվում է
   `supportsAudio === false`, մասերը դառնում են
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 պայմանագիր)։ Անհայտ նպատակին (`null`)
   բոլոր ձախողման արդյունքը մնում է անփոփոխ։ Ապացուցված տեքստային միայն նպատակ, որը չունի
   օգտագործելի STT հավատարմագիր, ստանում է նույն հստակ stub-ը առանց ցանցային զանգի կատարելու։

Հաջող գրառումները օգտագործում են գործընթացի լայնածավալ Modality Bridge LRU/TTL քեշը։
Բանալիի համադրությունը աուդիո հղման, կայուն `audio-transcription` գործողության
լեյբլի և ընտրված STT մոդելի միջև է; ձախողումները երբեք չեն քեշավորվում։ Աուդիո փորձերը թարմացնում են
համատեղ `bridged`, `cacheHits`, `failures`, և `lastUsedAt` հաշվիչները։
Փոխարկված պատասխանները կրում են
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; անփոփոխ
հարցումները չեն ստանում Audio Bridge հատված։

Գործառնական կարգավորումները DB-ով աջակցված են և Zod-ով վավերացված։

| Բանալի                        | Նախնական | Տիրույթ         |
| ----------------------------- | -------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —               |
| `modalityBridgeAudioModel`    | `""`     | Auto կամ STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10            |

Համատեղ քեշը մնում է վերահսկվող `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, և `modalityBridgeCacheMaxEntries`-ով։

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts top-level video parts in Chat Completions `messages` and Responses API `input` before a target without known native video support is called. Supported shapes are `input_video`, `video_url`, `video_source`, HTTPS URLs, and `data:video/*;base64,...` data URIs. Plain filenames in text are not treated as video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) owns request traversal, the capability/policy check, per-request aggregation, and the response payload. Per-video work — acquisition, the whole-result cache, describing a frame sequence (which fuses any caller-declared audio transcript), and per-attempt metrics/abort/cleanup — is hidden behind `processVideoPart` in `videoBridgePipeline.ts`, called once per video part inside `preCall`'s loop. That module also defines the explicit port boundaries `VideoMediaBrokerPort` (acquiring bytes and extracting sampled frames), `VideoAudioTranscriptionPort` (fusing a caller-declared audio transcript with the sampled captions), and `VideoDrilldownPort` (the legacy raw-store shape). Production STT and frame retention are composed around the describing port through `createVideoSttAdapter` and `createVideoDrilldownAdapter`; the latter uses the shared opaque-handle lifecycle.

The public `/v1` request path never imports or invokes a subprocess. Remote videos are downloaded under a 50 MiB bound; inline base64 videos have a conservative 36 MiB decoded per-video cap so the model/messages/framing envelope can remain inside the public JSON request admission limit of 50 MiB. Inline length and decoded-size estimates are checked before allocation. HTTPS is required on the initial remote URL and every redirect, using the existing public-only outbound guard with DNS pinning. The bytes then cross the exact internal `POST /api/modality-bridge/video/extract` broker boundary. That route is both `LOCAL_ONLY` and `SPAWN_CAPABLE`, accepts only a per-process authenticated, trusted-loopback request, and never accepts a URL, filesystem path, executable, or argument list. The API body-size pipeline and the handler's incremental body reader independently enforce a 50 MiB broker input cap. Its bounded queue runs one extraction at a time, allows four pending jobs, and caps pending input at 100 MiB.

Inside the broker, `ffprobe` reads a private local file; the fixed format allowlist excludes playlist and manifest formats. For allowed MOV-family containers, external MOV data references remain disabled by default, and the fixed command does not opt in to them. Both `ffprobe` and `ffmpeg` use the `file`-only protocol whitelist, one thread, fixed argument arrays, no shell, and executables resolved from `PATH`. Attached-picture cover streams are not playable candidates. All playable streams must satisfy the limits, and an explicit default stream is preferred before the deterministic lowest-index fallback. Videos are limited to 600 seconds, 8,192 pixels per dimension, and 33,554,432 source pixels. FFmpeg samples 1–16 midpoint JPEG frames, scales down the long edge to at most 1,024 pixels without upscaling smaller inputs, and never receives a URL. Sampling is `uniform` by default. The optional `scene_aware` and experimental `segment_aware` policies perform one additional fixed FFmpeg pass over the already validated local stream, select bounded `showinfo` scene timestamps, and fall back deterministically to the same uniform midpoints on detector failure, timeout, malformed output, or an empty candidate set. Segment-aware mode allocates midpoint samples proportionally to the validated scene intervals; segment-aware evidence and fallback behavior are detailed below. The hard 16-frame cap is applied after selection in every policy. When a scene-aware request has only a one-frame budget, it uses the uniform midpoint of the active full-video or focus window and reports `policyEffective: uniform`: a single selected scene frame cannot preserve both temporal ends. A caller may optionally provide a finite focus window (`start`/`end` seconds); bounds are clamped to the media duration, reversed or non-finite windows are rejected, and all sampling policies are performed only inside the normalized interval. The resulting window is included in sampling metadata and in the untrusted description prefix so downstream models can distinguish a focused excerpt from the full timeline.

Semantic caption focus is a separate, explicit setting. The default `full` analysis mode preserves the existing frame prompt and never forwards request text to the caption model. In `focused` mode, the bridge reads only the latest non-empty user-authored `text`/`input_text` from the same Chat or Responses container, normalizes it to NFC, collapses control characters and whitespace, and limits it to 500 Unicode code points. An empty result falls back to the exact `full` prompt. A usable hint is serialized as JSON in a dedicated untrusted-user-context block and may only prioritize observable details; it cannot override the separate warning against following instructions visible or audible in the media. Textual focus never infers `start`/`end` or changes the temporal sampler.

#### FU-07 կառուցվածքային հատվածի ապացույց

`segment_aware` uses one bounded pre-analysis pass over the already validated local video stream. The fixed filter chain first scales to at most 320 pixels wide, detects scene changes and frozen intervals, then samples at 1 frame per second for blur, average luma, and spatial/temporal information. The pass is limited to 600 structural samples, one FFmpeg/filter thread, the same `file`-only protocol and container allowlists, a 1 MiB process-output bound, and at most 30 seconds inside the broker's shared abort/deadline. It never accepts a command, filter, path, or URL from the request.

Struktural արժեքները որոշիչ նմուշավորման ապացույցներ են, ոչ թե սեմանտիկ տեսանյութի
հասկացում: Դրանք չեն ենթադրում առարկաներ, գործողություններ, վերնագրեր, խոսք կամ օգտվողի
նպատակ: տեսարանի և սառեցման սահմանները ձևավորում են հատվածներ; սառեցման ծածկույթը, մառախուղը,
լուսավորությունը, տարածքային մանրամասնությունը և ժամանակային փոփոխությունը միայն ազդում են
կայացած 1–16 շրջանակների բյուջեի բաշխման վրա: Լրիվ սառեցված հատվածը սահմանափակվում է մեկ
շրջանակով, մինչդեռ ոչ սառեցված հատվածները մրցում են մնացած բյուջեի համար: Երբ սահմանները
շրջանակներից ավելի շատ են, պահպանվում է միատեսակ ժամանակային ծածկույթ, որպեսզի արագ
առաջին կտրումները չկարողանան թաքցնել երկար հետևող հատվածը: Սառեցման սահմանների
մեջ 1 վայրկյան վերլուծության լուծման շրջանակներում համախմբվում են:

Կորած ֆիլտրերը, սխալ ձևավորված/ դատարկ ապացույցները, հայտնաբերման սխալը կամ սահմանափակ
նախնական վերլուծության ժամանակը բաց են թողնում ճշգրիտ միատեսակ միջին քաղաքականությանը:
Հեռախոսահամարի դադարեցումը կամ միջնորդի ժամկետը չեն բաց թողնում. այն ավարտում է
թռիչքի մեջ գտնվող ենթածրագրերը, կանխում հետագա շրջանակների հանումը, և մասնավոր
ժամանակավոր ծառը հեռացվում է `finally`-ում:

`scripts/perf/video-bridge-fu07-eval.ts` ստեղծում է որոշիչ իրական FFmpeg
հիմքեր՝ հետագա կրկնօրինակման վերնագրերի խնայողությունների, խիտ-շարժման բյուջեի
բաշխման, մառախուղի/լուսավորության/SI-TI ապացույցների, արագ կտրումների երկար хвостով և
հաստատված-մարող կեղծ դրականների համար: Այն գրանցում է նախնական վերլուծության պատի
ժամանակը և, որտեղ `/usr/bin/time` հասանելի է, երեխայի CPU և առավելագույն RSS: Նրա որակի
ստուգումները կառուցվածքային օրակլներ են միայն: Իրական վերնագրի մոդելի որակը մնում է
`HOLD`, քանի որ այս սարքը չունի լիազորված վերջնակետ կամ սառեցված դատավոր: Դրամական
խնայողությունները նույնպես մնում են `HOLD`, եթե `--caption-cost-per-call-usd` չի
մատակարարում բացահայտ դրական մեկ զանգի գնահատում; սցենարը երբեք չի ստեղծում ոչ
մեկ արդյունք:

Յուրաքանչյուր շրջանակը սահմանափակվում է 4 MiB-ով, բոլոր خام շրջանակները միասին 23 MiB-ով,
և սերիալացված միջնորդի պատասխանն 32 MiB-ով: Մասնավոր ժամանակավոր կատալոգը
հեռացվում է `finally`-ում: OmniRoute-ը չի փաթեթավորում FFmpeg և չի ընդունում
հատուկ գործառնական ճանապարհ: Վերնագրումից առաջ, կամուրջը կիրառում է պահպանողական
տեսողական կրկնօրինակման անցք. յուրաքանչյուր JPEG-ը նվազեցվում է 16×16 մոխրագույն
բուֆերի և համեմատվում է միայն վերջին պահպանված շրջանակի հետ: Մեկ շրջանակից
վերև պահանջվող վերնագրի բյուջեի համար, հանումը մատակարարում է
սահմանափակ թեկնածուների պուլ մինչև այդ բյուջեի կրկնակի և երբեք ավելի քան 16 շրջանակ:
Պահանջվող սահմանը կիրառվում է միայն կրկնօրինակման հետո, առաջին և վերջնական
ընտրված թեկնածուները պահպանվում են վերջնական նոսրացման ժամանակ, երբ բյուջեն
պակասագույնը երկու է: Վարկանիշային
`grayscale-16x16-mean-cells-v2` քաղաքականությունը օգտագործում է միջին լումայի դելտայի և
thumbnail բջիջների հարաբերությունը, որոնց նորմալացված դելտան առնվազն 0.05 է:
Կրկնօրինակման շեմը մշտական 0.04 է, ընտրված է կանխատեսելիության համար, այլ ոչ թե
գործողության կարգավորում որպես բացահայտ: Այս երկրորդական
բարձր-հակապատկերային ազդանշանը պահպանվում է փոքր շարժման և տեսանելի-տեքստի
փոփոխությունների համար, որոնք կարող են թաքցնել միայն միջին համեմատությունը: Համեմատիչի
կամ դեկոդերի սխալները բաց են թողնում և պահպանում են ծածկույթը: Արտադրողական
մետադատները բաժանում են հանված թեկնածուները, հաջողությամբ օգտագործված շրջանակները և
տեսողական կրկնօրինակները, որոնք հեռացվել են:

Բացահայտորեն նշված տեսանյութի մասը կարող է պահանջել ժամանակակետային կոնտակտային թերթիկ:
Կամուրջը կառուցում է առավելագույնը 4-թյուն, 16-շրջանակ JPEG ցանց: Յուրաքանչյուր 512-պիքսել
բջիջը այրում է իր աղբյուրի ժամանակակետը բարձր հակապատկերային ստորին գոտում, մինչդեռ
նույն ժամանակակետերը մնում են տեքստային մետադատներում հետագա ասոցիացիայի և աուդիտի համար:
Ամբողջ JPEG-ը մնում է սահմանափակված 32 MiB-ով: Եթե `sharp` չի կարող դեկոդել կամ
կազմել ցանցը, կամուրջը վերադառնում է անհատական JPEG շրջանակներին; հաճախորդի
դադարեցումը դեռ տարածվում է թերթիկի գործողության միջոցով:

Հրապարակման ապացույցը դիտավորյալ առանձին է սինթետիկ կազմի
միկրոբենչմարկից: `scripts/perf/video-bridge-contact-sheet-eval.ts` սահմանում է
սխեմա-վարկանիշային A/B սարքավորում իրական OpenAI-համատեղ տեսողական մոդելների համար:
Այն չափում է մատակարարի հաղորդած նշանները, վերջից վերջի պատի ուշացումը (ներառյալ
թերթիկի կազմումը), մոդելի զանգերի քանակը և մանիֆեստ-սահմանված փաստերի պահպանումը:
خام մոդելի պատասխանները չեն գրանցվում հաշվետվությունում; միայն SHA-256 խտացումները և
համապատասխան փաստերի ID-ները պահպանվում են: Սարքը չի կատարում որևէ ցանցային կամ
վճարված մոդելի զանգ, եթե `--execute-real` չի փոխանցվում և `--model`,
`OMNIROUTE_BASE_URL` և `OMNIROUTE_API_KEY` չեն կարգավորվում: Այդ բացահայտ իրական
գործողության բացակայության դեպքում, նրա մեքենայով ընթերցվող վճիռը մնում է `HOLD`;
սինթետիկ բեռի/զանգերի քանակի չափումները միայն չեն հանդիսանում հրապարակման ապացույց:

Ազատ `scripts/perf/video-bridge-promotion-eval.ts` սպառում է FU-07 կամ
FU-09 դիտարկումներ: Հրապարակման ընդունումը պահանջում է բոլոր ութ սինթետիկ
սցենարի տեսակները, ինչպես նաև մաքրված իրական կլիպ, առնվազն երեք չափված կրկնություններ
ամեն դեր և դեպքի համար, բոլոր տասը հայտարարված մետրիկաները, սառեցված մեդիա/խթան/սպասվող-փաստ/կարգավորումների
խտացումները, եզակի դիտարկման ID-ները և հաստատված սերմավորված A/B կարգը: Գործողության
թերթիկը կապում է կորպուսի խտացումը, ճշգրիտ թեկնածու SHA-ն և մոդելի տարբերակը:
Կորած կամ անվավեր չափումները մնում են `HOLD`, ներառյալ CPU-ն 30 վայրկյանից
վերև, առավելագույն RSS 512 MiB-ից վեր կամ նախնական վերլուծություն 30 վայրկյանից
վեր: Սա ապացույց-ընդունման սահմանափակումներ են, ոչ թե նոր
գործողության RSS-ի պարտադիր երաշխիք:

FU-07 պահանջում է առնվազն 98% որակի պահպանություն և p95 ուշացում ոչ ավելի քան 1.2x
հիմնական, ինչպես նաև կամ 0.05 բացարձակ դեպքի հավասարակշռված միջին հիշողության
բարելավում հավասար միջին վերնագրերի զանգերի դեպքում, կամ առնվազն 10% ավելի քիչ
միջին հետկրկնօրինակման վերնագրերի զանգեր: FU-09 պահանջում է առնվազն 0.85 որակ,
95% պահպանություն, 20% p95 ուշացման նվազեցում և 10% նշանի նվազեցում: Կրիտիկական-փաստի
կորուստը, ներարկման համապատասխանությունը կամ կորած օգտագործումը կանխում են
հրապարակումը: Մի գործողություն չի կարող առաջադրել ոչինչ: `--previous-report` հաստատում է
երկու տարբեր, ոչ-համընկնող, հաջորդականորեն իրավասու գործողություններ նույն քաղաքականության/մոդելի
տարբերակի/թեկնածուի/կորպուսի համար: Նմուշավորման փորձը չի կարող հաստատել
կոնտակտային թերթիկի փորձը:

Հավաքողները պետք է գնահատեն պատասխանները հիշողության մեջ և պահպանեն `responseDigest`-ը, ինչպես նաև մետրիկաներն ու դիտարկման կապերը, երբեք պատասխանային տեքստը: Օգտագործողը նաև ընթերցում է հին خام դիտարկումները, բայց երբեք չի պատճենում այդ տեքստը իր հաշվետվություններում: Յուրաքանչյուր դիտարկման համար ընդունվում է միայն մեկ `responseDigest` կամ `rawResponseText`. Վարկանիշային թույլտվությունը մնում է դատարկ անփոփոխ `hold` նախնական արժեքով: Հարմարավետ մուտքը պահանջում է իր ապացույցի հղումը, քաղաքականությունը, մոդելի վերանայումը, ճշգրիտ թեկնածուի SHA-ն, մանիֆեստի դիգեստը և երկու տարբեր գործարկման ID-ներ; հակասական համատեքստերը մերժվում են: Այս մետադատները աուդիտի պայմանագիր են, ոչ թե ապացույց, որ հղված ֆայլը պարունակում է իսկական չափումներ: Նախքան ցանկացած մուտք ավելացնելը, վերանայեք իրական ստացումները: Կառավարման վիճակագրության վերջնակետը և Տեսանյութի վահանակը բացահայտում են պահպանողական պատրաստակամություն: Միայն կարգավորված մոդելի ալիասը չի հաստատում իր վերանայումը կամ գործող թեկնածուի SHA-ն, այնպես որ, ներկայիս վահանակը հաղորդում է `HOLD`, այլ ոչ թե օգտագործում է հարմարավետությունը այլ գործարկման համատեքստից: Բացահայտ փորձնական ընտրությունը մնում է առանձին առաջխաղացումից; ոչ մի նախնական արժեք ավտոմատ կերպով չի փոխվում:

Զանգահարողները կարող են միացնել ընտրովի `transcript.cues` զանգվածը աջակցվող տեսանյութի մասի, երբ նրանք արդեն ունեն համընկնող տեքստ: Յուրաքանչյուր ազդակ պետք է պարունակի `text`, սահմանափակ `start`/`end` միջակայք փորձարկված տևողության մեջ, և սպիտակ ցուցակում ընդգրկված `source` (`client`, `embedded`, կամ `audio-bridge`); `confidence`-ը նախնական արժեքով `1` է և պետք է մնա `0` և `1` միջև: Ցանկացած կրկնվող ազդակներ խտացվում են: OmniRoute երբեք չի սկսում տեքստագրություն այս մետադատներից. վավերացված ազդակները պատճենվում են նկարագրված արդյունքին `source`, `confidence`, և միջակայքով, և ներկայացվում են որպես անվստահ դիտարկումներ կողքի վերնագրերի հետ: Անվավեր, սահմաններից դուրս կամ ծագման բաց տեքստը մերժվում է, այլ ոչ թե խառնվում վերնագրերի հոսքին: Երկու խնդրանք-մարմնի տեքստագրության ալիքները նորմալացնում են տրամադրված ծագումը `client`, ներառյալ ինքնա-հաստատված `embedded` կամ `audio-bridge` պիտակները: Միայն սերվերի սեփական ադապտերը կարող է նշանակել այդ վստահված պիտակները `trustedSource` արգումենտի միջոցով; խնդրանքի JSON դաշտը չի կարող հասնել այդ արգումենտին: Տեքստագրության տեքստը մնում է անվստահ մեդիա-առաջացած բովանդակություն, անկախ իր ծագումից, և երբեք չի պետք է որոշի լիազորումը:

Նախ avanzado զանգահարողը կարող է տրամադրել `audioTranscript` ուղի նույն տեսանյութի համար; այն դիտվում է որպես հաճախորդի տրամադրված տեքստ, ոչ թե սերվերի տեքստագրության ապացույց: Միաձուլման սոսինքը վիզուալ և աուդիո դիտարկումները վարում է մեկ ժամկետ և ընդհատման ազդանշան, կարգավորում է դրանք ընդհանուր ժամանակային գծով, խտացնում է ճշգրիտ կրկնությունները և հաղորդում է մասնակի արդյունք, երբ միայն մեկ կողմը հաջողվում է: Անվավեր `audioTranscript`-ը նվազում է այդ մասնակի արդյունքին՝ վիզուալ նկարագրությունը պահպանվում է, իսկ աուդիո ճյուղը գրանցում է մաքրված ձախողման կոդ՝ փոխարենը ամբողջ տեսանյութը ձախողելու: Յուրաքանչյուր ճյուղի հասանելիությունը, մասնակի դրոշը և մաքրված ձախողման կոդերը պահպանվում են նկարագրված արդյունքում, պաշտպանիչ մետադատներում (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), արդյունքի-քեշի մետադատներում և կամուրջի միաձուլման հաշվումներում: Դեֆոլտ Տեսանյութի Կամուրջի ուղին չի հրավիրում խոսքից տեքստ կամ ներբեռնում երկրորդ մեդիա պատճեն; առանց այդ բացահայտ ուղու, այն մնում է միայն տեսանյութ:

**Տեքստագրության պահպանման (#12150 P1):** Սա ավտոմատ կերպով կիրառվում է, երբ Տեսանյութի Կամուրջը (նաև ընտրովի) ներկայացնում է տեքստագրության ազդակ — առանձին պահպանման դրոշ չկա: Երբ որևէ խնդրանք ներկայացնում է ցանկացած տեքստագրության ազդակ (զանգահարողի հայտարարած `transcript` կամ միաձուլված `audioTranscript`), պաշտպանիչը նշում է այն `videoBridgeObserved` և արտադրում է տեսանյութի նկարագրության մաքրված ստվեր — նույնական ներկայացում, որտեղ յուրաքանչյուր ազդակի ազատ տեքստի մարմինը փոխարինվում է `[redacted-video-transcript]`-ով, որը կառուցվում է կառուցվածքային ազդակի դաշտը փոխարինելով նախքան տողը հավաքելը (երբեք չհավաքելով հարթեցված տեքստը, այնպես որ, որևէ ազդակի բովանդակություն — հակառակորդ կամ սովորական, ներառյալ մարմինները, որոնք պարունակում են `]`, ինչպիսիք են `[inaudible]`/`[music]` — չեն կարող գոյատևել): Պահպանված զանգի-լոգի խնդրանքի մարմինը փոխում է յուրաքանչյուր տեսանյութից առաջացած տեքստի մասը այդ մաքրված ստվերի համար, բովանդակության հավասարության միջոցով; `fullText` ակցենտը կրկին ընթերցվում է ավարտված նախքան-զանգի պաշտպանիչ բեռից, այնպես որ, համընկնումը դեռ հաջողվում է հետո ուշ շղթայի պաշտպանիչները (PII և հավատարմագրերի մաքրողներ, առաջնահերթություններ 10/95) վերագրում են նկարագրության տեքստը տեղում և հետո համակարգի-խթան/հանձնում/հիշողության ներարկումը ձևափոխում է հաղորդագրության զանգվածը: Մոդելին ուղարկված մարմինը չի փոխվում: Նկատված խնդրանքը նույնպես չի բնակեցնում որևէ կայուն Հիշողություն (երկու խնդրանքի և պատասխանների-derived հանման գործընթացները բաց են թողնվում), այնպես որ, մոդելի սեփական պատասխանն չի կարող կրկնել տեքստագրության տեքստը Հիշողության մեջ:

**خام տեսանյութի դաշտեր (#12430):** Երբ կամուրջը ակտիվ է, և բնիկ տեսանյութի աջակցությունը հայտնի կամ բացակայում է, սահմանված `transcript`/`audioTranscript` դաշտերը նույնպես ակտիվացնում են `videoBridgeObserved`, նույնիսկ նկարագրության ձախողման կամ `maxVideos` սահմանափակման դեպքում: `null` և դատարկ տողերը հաշվում են; բացակայող դաշտերը և ոչ-տեսանյութի մետադատները չեն հաշվում: Պահպանված պատճենները մաքրում են այս դաշտերը կամ բաց թողնում խնդրանքը, և քեշերը/Հիշողությունը շրջանցվում են: Տրամադրողի բեռը մնում է անփոփոխ:

Ավելորդ պահպանված պատճենները օգտագործում են նույն դիտված-խնդրանքի ազդանշանը: خام նախապաշտպանող հաճախորդի-խնդրանքի լուսանկար, հիշողության մեջ սպասող խնդրանքը և վաղ մերժված-խնդրանքի լոգը կառուցվածքային կերպով փոխարինում են տեքստագրության դաշտերը տեսանյութի մասերում; տողային հրահանգները, որոնք սինթեզվում են խողովակաշարի փուլերով և համատեքստի փոխանցմամբ, մաքրում են պահպանված-խնդրանքի մարմնի խողովակում: Պահպանված `video_content_removed` նշանը ստիպում է `previous_response_id` շարունակությունը փակ ձախողել, այլ ոչ թե վերականգնել տեքստը, որը դիտավորյալ մերժվել է: Եթե դիտված խնդրանքը կորցնում է իր յուրաքանչյուր մասի մաքրող ստվերը նախքան գրանցումը, կամ նույնիսկ մի քանի տեսանյութի ստվերներից մեկը չի համապատասխանում հետո ուշ խնդրանքի փոփոխություններին, պահպանված խնդրանքի մարմինը ամբողջությամբ բաց է թողնվում, այլ ոչ թե պահպանվում է մասնակի մաքրված տեքստագրություն:

Հետազոտված հարցման համար մոդելի պատասխանն կարող է մեջբերել տրանսկրիպտի ցանկացած հատված առանց կառուցվածքային ազդանշանի սահմանագծի: Դրա պահպանված զանգի օրագրի `responseBody`-ը, հետևաբար, փոխարինվում է բաց թողնման նշանով; մանրամասն pipeline արհեստական օբյեկտը (որը կարող է ներառել վերին/հաճախորդի մարմիններ և հոսքային կտորներ) չի պահպանվում: Սեմանտիկ, իդեմպոտենտություն և պատճառաբանման-վերադարձի կեշերը շրջանցում են ընթերցումները և գրառումները այդ հարցման համար: Մատակարարի հարցումն ու հաճախորդի տեսանելի պատասխանն անփոփոխ են մնում: Նախնական keepalive բայթերը դուրս են հանվում ժամանակավոր բուֆերից, երբ մանրամասն արհեստական օբյեկտը բաց է թողնվում: Kiro-ի սխալ EventStream զգուշացումը հաղորդում է միայն բեռի բայթերի քանակը, երբեք դրա պարունակությունը կամ JSON վերլուծիչի خام սխալը:
Սա չի պնդում, որ յուրաքանչյուր անկապ մատակարարի/պլագինի ախտորոշում audited է; ավելի լայն պահպանված-ջրահեռացման մաքրումը հետևվում է #11658-ում:

Արտաքին `/api/modality-bridge/video/drilldown` կյանքի ցիկլը առանձին, շրջադարձային/թոքեն-ավտորիզացված կեշի ենթակառուցվածք է: Յուրաքանչյուր գործողություն նաև պահանջում է կանոնական անթափանց սկզբնական ID: Նախքան արտադրական զանգահարողի ակտիվացումը, այն պետք է ստանա այդ ID-ն վավերացված վարձակալից և երբեք չպետք է փոխանցի հաճախորդի ընտրած արժեքը: Կեշի բանալիները կապում են այդ սկզբնական ID-ն կանոնական նստաշրջանի և տեսանյութի-հղման ID-ների հետ, պահում են միայն նրանց SHA-256-ով ստացված բանալիները և սահմանափակում են ինչպես ընթերցումները, այնպես էլ ջնջումը նույն սկզբնական ID-ի համար: Կեշը պահում է առավելագույնը 16 ստացված JPEG շրջանակներ յուրաքանչյուր գրառման համար, ավարտվում է տասը րոպե հետո և աջակցում է սահմանափակ `start`/`end` ընթերցումներին կամ հստակ նստաշրջանի ջնջմանը:

Յուրաքանչյուր սկզբնական ID-ն սահմանափակված է 16 գրառումներով և 64 MiB կանոնական JPEG տվյալներով: Այդ սահմանափակումները անկախ են գլոբալ 64-գրառման/256 MiB առաստաղից. սկզբնական քվոտայի ճնշումը դուրս է մղում միայն այդ սկզբնական ID-ի ամենաքիչ-վերջին օգտագործված գրառումները, նախքան գլոբալ LRU դուրս մղումը դիտարկելը: Վավերացված գրառումները մաքրվում են ինչպես սկզբնական, այնպես էլ գլոբալ հաշվարկից կեշի ակտիվության ժամանակ, մինչդեռ չեղարկումը և վավերացման ձախողումը չեն կատարում մասնակի փոխարինում:

Կեշը մերժում է ոչ-կանոնական Base64, ավելորդ padding, ոչ-JPEG մեդիա, սխալ կամ կրճատված JPEG-ներ և JPEG-ներ, որոնք առաջացնում են զգուշացում սահմանափակ ամբողջական պատկեր `sharp` վերծանման ժամանակ: Այն վերակոդավորում է յուրաքանչյուր ընդունված պատկեր որպես կանոնական JPEG, ստանում է լայնությունը և բարձրությունը վերծանված բայթերից, այլ ոչ թե վստահում զանգահարողի դաշտերին, և մերժում է ցանկացած հետագա պոլիգլոտ բայթեր, այլ ոչ թե պահում դրանք: Միայն սահմանափակ կանոնական սեղմված բուֆերը հաշվարկվում է երկու քվոտաների համար: JSON մալուխի սահմանը ներառում է Base64-ի ավելցուկը 32 MiB վերծանված-մուտքային առաստաղի համար: Յուրաքանչյուր պահված ստացում գրանցում է իր վավերացված JPEG ձևաչափը/լուծումը, նմուշավորման քաղաքականությունը, ստացման տարբերակը, ստեղծման ժամանակը, սերվերի կողմից հաշվարկված բովանդակության հեշը և հեշավորված ծնողական հղումը, ինչպես նաև վստահված զանգահարողի ծնողական բովանդակության հեշը: Չեղարկումը ստուգվում է ասինխրոն վերծանման/հեշավորման փուլերի միջև, նախքան ատոմիկ կեշի հանձնումը:

Արտադրական արտադրողը կրկին օգտագործում է արդեն ստացված բրոքերային շրջանակները միայն հաջող տեսողական վերլուծությունից հետո, առանց երկրորդ տեսանյութի ներբեռնում/հանում: Այն պահանջում է օպերատորի `modalityBridgeVideoDrilldownEnabled=true`, խիստ յուրաքանչյուր մասի `drilldown: true` և վավերացված API-հիմք գրառման ID: Հաճախորդի կողմից հայտարարված սկզբնական/նստաշրջանի արժեքները երբեք չեն հաստատում սեփականությունը: Բոլոր երեք պայմանները չունենալու դեպքում այն չի հեշավորում, չի չափում կամ չի պահում լրացուցիչ շրջանակներ: Պահպանման ձախողումը պահպանվում է օգտագործելի տեսողական պատասխանով: Համաձայնեցված հարցումները շրջանցում են ամբողջ-տեսանյութի արդյունքների կեշը, այնպես որ կեշավորված արդյունքները երբեք չեն վերարտադրում ձեռքեր:

Հաջող JSON և SSE պատասխանները բացահայտում են առավելագույնը չորս անթափանց ձեռքեր սահմանափակ `x-omniroute-video-drilldown` գլխում: Արդյունավետ բրաուզերի աղբյուրները կարող են կարդալ այդ գլխիկը առանց CORS աղբյուրի քաղաքականության ընդլայնման: Նոր ձեռքեր օգտագործում են `v1.<32-byte random base64url token>`, և գրանցամատյանը պահում է միայն նրանց SHA-256 հեշերը: Ընթերցող/գլխիկի վերլուծիչը նաև ընդունում է հին 64-hex ձեռքեր: Վավերացված հանրային սպառողը
`GET /api/v1/video-bridge/drilldown?handle=...`, անկախորեն փակված է
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Հստակ պահպանված կեղծը վերացնում է մուտքը նույնիսկ այն դեպքում, երբ հին `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
հետադարձումը ակտիվ է: Արտադրական պահպանման համար կա համանման հին
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` հետադարձումը: Երկու հետադարձումները ըստ կանխորոշման անջատ են:

Սպառողը ստանում է սեփականությունը վավերացված բանալուց, կիրառելով բանալիի քաղաքականությունը և վերադարձնում նույն 404-ը անհայտ, ավարտված և այլ բանալիների ձեռքերով: Այն ընդունում է
`variant=preview|standard|detail` (ամենամեծ JPEG չափը 320/640/1280, երբեք չի մեծացվում),
`limit=1..8` (կամ հին `frames` այլ անունը, երբեք երկուսն էլ), զրոյական հիմքով `page`, և ընտրովի
`start`/`end` կենտրոնացման վայրկյաններ: կրկնակի
հարցման բանալիները և հակառակ կենտրոնացման պատուհանները մերժվում են: Յուրաքանչյուր վերադարձված տարբերակը ունի իր իրական բովանդակության և իրական լուծման մետադատա հեշը, կապված պահպանված աղբյուրի հետ: Տարբերակները ստացվում են ընթերցման ժամանակ, այլ ոչ թե պահվում որպես լրացուցիչ պահպանված պատճեններ: JSON պատասխանն, ներառյալ Base64/փաթեթը, սահմանափակվում է 32 MiB; չափազանց մեծ էջը վերադարձնում է 413, և հաճախորդը պետք է խնդրի ավելի քիչ շրջանակներ: Ընթերցումները ստուգում են չեղարկումը յուրաքանչյուր չափման շուրջ և կրկին ստուգում են ձեռքի վավերությունը, նախքան վերադարձնելը: `DELETE` սեփականատիրոջ կողմից իդեմպոտենտ է; ջնջումը կամ TTL-ի ժամկետի ավարտը ազատում է պահպանված աղբյուրը և օգտագործման հաշվարկը:

Համատեղ խանութը գործընթացի տեղական է. ձեռքերն ավարտվում են վերագործարկման ժամանակ և չեն փոխանցվում անկախ OmniRoute գործընթացների միջև: Կառավարման վիճակագրությունները բացահայտում են արդյունավետ պահպանման/հեռավոր քաղաքականությունը և միայն հավաքական պահպանված գրառումները/բայթերը, երբեք մեդիա, հղումներ, սկզբնական ID-ներ կամ ձեռքեր: Տեսանյութի կարգավորումների պանելն ցույց է տալիս այդ արժեքները և կարող է պահպանել ինչպես համաձայնության switches-ը: Այս իրականացման փաստաթուղթը չի հանդիսանում կենդանի տեղադրում կամ առաջխաղացման ապացույց; իրական մոդելի ընդունումը հետևվում է առանձին:

Frames-ը հերթականությամբ վերնագրեր է ստանում կոնֆիգուրացված Video մոդելի միջոցով: դատարկ Video override-ը ժառանգում է Vision կարգավորումը; եթե երկուսն էլ դատարկ են, Vision ավտո-ուղեցույցը ընտրում է արդյունավետ տեսողական-կարող մոդելը: Հաջող վերնագրերը փոխում են սկզբնական մասը կայուն `[Video description:` նախաբառով, որը նաև նշում է, որ տեքստը վստահված մեդիա-առաջարկություն է և ասում է ստորին մոդելներին, որ չպետք է հետևեն մեդիայում հայտնաբերված հրահանգներին: Frame-caption cache բանալիները ներառում են JPEG բիթեր, հրահանգ, ժամանակի կնիք և արդյունավետ մոդել; միայն հաջող վերնագրերը պահվում են: Cache մուտքերը պահպանում են իրական հաջող արտադրողի մոդելը, ներառյալ fallback մոդելը; կամուրջը հաղորդում է `mixed`, երբ տարբեր շրջանակներ արտադրել են տարբեր մոդելներ: Cache-ի հարվածը վերօգտագործում է այդ արտադրողի նույնականությունը, այլ ոչ թե վերանվանում է այն որպես պահանջվող ուղեցույցի պլան: ամբողջ-տեսանյութի արդյունքի cache-ը հիմնված է յուրաքանչյուր մուտքի վրա, որը փոխում է ելքը — հրահանգ, արդյունավետ մոդել, sampling քաղաքականություն, շրջանակների քանակ, սեմանտիկ վերլուծության ռեժիմ, նորմալացված կենտրոնացման հուշի SHA-256 մատնահետք, կենտրոնացման պատուհան, `transcript`, `audioTranscript`, և contact-sheet դրոշը — այնպես որ, այդ չափանիշներից որևէ մեկի փոփոխությունը cache-ի բաց թողնում է, երբեք չօգտագործվող վերամշակում: Visual dedup քաղաքականության տարբերակը, շեմը և սահմանափակ թեկնածու-շրջանակների քանակը նույնպես բացահայտ են արդյունքի cache բանալու և մետադատների մեջ; քաղաքականության փոփոխությունը, հետևաբար, չի կարող վերօգտագործել չօգտագործվող ամբողջ-տեսանյութի նկարագրությունը: Result-cache v4 մետադատները պահպանում են ռեժիմը և մատնահետքը, երբեք ոչ خام օգտվողի առաջադրանքը: Guardrail մետադատները հաղորդում են ինչպես պահանջվող, այնպես էլ արդյունավետ վերլուծության ռեժիմները; պահանջվող `focused` ռեժիմը, առանց օգտագործելի օգտվողի տեքստի, հաղորդվում է որպես արդյունավետ `full`.

Guardrail-ը հանում է յուրաքանչյուր աջակցվող տեսանյութի մասը, բայց նկարագրում է ոչ ավել, քան `modalityBridgeVideoMaxVideos`: նպատակ, որը ապացուցված է `supportsVideo === false`, ձախողված և սահմանափակ տեսանյութերը դառնում են բացահայտ անվտանգ տեքստային նշաններ, այնպես որ ոչ մի خام տեսանյութ չի մնում: Երբ կարողությունը հայտնի չէ, այդ մասերը մնում են անխախտ: Նպատակները, որոնց `supportsVideo === true`, շրջանցում են կամուրջը: Clien-ի պահանջի դադարեցման ազդանշանը տարածվում է ներբեռնում, բրոքերային հերթ, ենթածրագրեր և վերնագրերի զանգեր; դադարեցումները կանգնում են տեսանյութերի միջև և երբեք չեն բաց թողնում خام մեդիա:

Runtime կարգավորումները DB-ով աջակցված են և Zod-ով վավերացված:

| Key                                 | Default     | Range / behavior                                                                                                |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Ընտրովի runtime, opt-in                                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` պահպանում է ընդհանուր վերնագրերը; `focused` օգտագործում է սահմանափակ, վստահված վերջին օգտվողի համատեքստը |
| `modalityBridgeVideoModel`          | `""`        | ժառանգել Vision Bridge մոդելը                                                                                   |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, կամ համաչափ `segment_aware`; հայտնաբերման ձախողումը վերադառնում է `uniform`           |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                  |

Legacy պահպանված Video timeout արժեքները, որոնք ավելի քան 120 վայրկյան են, սահմանափակվում են բրոքերի վերջնաժամկետով; նոր կարգավորումները, որոնք գերազանցում են այդ սահմանը, մերժվում են. `GET /api/modality-bridge/video/runtime` պահանջում է վստահված կնիքով loopback տեղակայություն նախքան վավերացումը կամ runtime-ի հետազոտությունը, ապա պահանջում է կառավարման վավերացում: Այն վերադարձնում է միայն `available`, մաքրված FFmpeg/ffprobe տարբերակներ, և ֆիքսված պատճառ, երբ runtime-ը անհասանելի է: Ներքին հանման վերջնակետը հանրային ներբեռնում API չէ: հերթի հագեցվածությունը վերադարձնում է `503` և `Retry-After`, զանգահարողի անջատումը վերադարձնում է `499`, և ֆիքսված բրոքերի վերջնաժամկետը վերադարձնում է `504`: Փոխարկված պատասխանները ավելացնում են `video->text;model=<visionModel>;parts=<videos>` կենտրոնական `x-omniroute-modality-bridge` գլխին, առանց Vision կամ Audio հատվածների հեռացման:

### PII Masker (`piiMasker.ts`)

Աշխատում է **երկու** փուլերում:

- **`preCall`** կրկնօրինակում է բեռը, անցնում `system`, `messages`, `input`, և `prompt` (ներառյալ պարզ տողային տարրեր), և կիրառում է `processPII()` (ից `@/shared/utils/inputSanitizer`) տող `content`/`text` դաշտերին: Երբ `PII_REDACTION_ENABLED=true`, հայտնաբերված PII-ն հեռացվում է outbound բեռում: Սա անկախ է `INPUT_SANITIZER_MODE`-ից (որը միայն վերահսկում է հրահանգ-սեղմման քաղաքականությունը): Երբ հեռացումը անջատված է, զանգը գրանցում է հայտնաբերման քանակները առանց բովանդակության վերագրելու:
- **`postCall`** խորքային կրկնօրինակում է պատասխանն, աշխատում է `sanitizePIIResponse()`-ի հետ, ինչպես նաև Responses-API-ձևի մաքրող (`maskResponsesOutput` — ծածկում է `output_text` և `output[].content[].text`): Եթե որևէ հեռացում տեղի ունենա, փոփոխված պատասխանն փոխարինում է սկզբնականին:

Guardrail-ը երբեք չի արգելափակում; այն միայն նշում է (`meta.detections`, `meta.redacted`) կամ վերագրում:

### Prompt Injection (`promptInjection.ts`)

Հայտնաբերում է հակառակորդ կառուցվածքներ օգտվողի կողմից տրամադրված բովանդակության մեջ և պարտադրում է կոնֆիգուրացված քաղաքականությունը: վարքը ղեկավարվում է միջավայրի փոփոխականներով և կոնստրուկտորի ընտրանքներով:

| Կարգավորում | Շրջակա փոփոխական                                                                                           | Դեֆոլտ | Արդյունք                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ակտիվ       | `INPUT_SANITIZER_ENABLED`                                                                                  | `true` | Երբ `false`, պաշտպանիչը կարճացնում է։                                                                                                                                                                                   |
| Մոդը        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                            | `warn` | Ներդրման քաղաքականություն՝ `block`, `warn`, կամ `log`։ (`redact` ընդունվում է հետադարձ համատեղելիության համար, բայց **չի** հեռացնում ներդրման տեքստը; PII վերանայման խնդրանքը վերահսկվում է `PII_REDACTION_ENABLED`-ով) |
| Բլոկի շեմը  | `blockThreshold` ընտրանք / `INPUT_SANITIZER_BLOCK_THRESHOLD` (համահունչ `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Բլոկելու համար անհրաժեշտ նվազագույն ծանրությունը։ Միջինն դիտարկման համար է ըստ դեֆոլտի։                                                                                                                                 |

**Մոդի առաջնահերթություն** (`getMode`): զանգահարողի `options.mode` →
`INJECTION_GUARD_MODE` **DB ֆունկցիոնալության-պայմանագրի վերափոխում** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` շրջակա փոփոխական → `INPUT_SANITIZER_MODE` շրջակա փոփոխական →
`warn`։ Դashboard-ի վերափոխումը, հետևաբար, հաղթում է շրջակա փոփոխականներին, այնպես որ Feature
Flags UI-ն վերահսկում է գործող պաշտպանիչը կենդանի (առանց վերագործարկման)։ DB-ի ընթերցումը անվտանգ է՝
եթե այն սխալ է, պաշտպանիչը վերադառնում է շրջակա փոփոխականների վրա հիմնված վարքագծին, և երբ ոչ
վերափոխում է սահմանված, վարքագիծը նույնն է, ինչ շրջակա փոփոխականների վրա հիմնված լուծումը։

Հայտնաբերման աղբյուրներ:

1. `sanitizeRequest()` `@/shared/utils/inputSanitizer`-ից (համատեղ հայտնաբերման
   հավաքածու, որը օգտագործվում է այլուր խողովակում)։
2. Ներառված `DEFAULT_GUARD_PATTERNS` (այժմ `system_override_inline` և
   `markdown_system_block`, երկուսն էլ `high` ծանրությամբ)։
3. Ընտրովի `customPatterns`, որոնք փոխանցվում են կոնստրուկտորի ընտրանքներով (տողեր, regex,
   կամ `{ name, pattern, severity }` գրառումներ)։

Երբ `mode === "block"` **և** առնվազն մեկ հայտնաբերում համապատասխանում է ծանրության
շեմին, `preCall` վերադարձնում է `{ block: true, message: "Հայտարարությունը մերժվել է:
կասկածելի բովանդակություն հայտնաբերվել է" }`։ `warn`/`log` մոդերում պաշտպանիչը գրանցում է, բայց
թույլ է տալիս զանգը։ Համատեղ օգնական `evaluatePromptInjection()`-ը նույնպես արտահանվում է
զանգահարողներին, որոնք պետք է գնահատեն հրահանգները առանց գրանցամատյանով անցնելու։

**Սքանավորման սահման (v3.8.20):** հայտնաբերիչը միայն ստուգում է **առաջին 16 KB**-ը
միավորված հրահանգի տեքստից — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 բայ)
`src/shared/utils/inputSanitizer.ts`-ում։ Երկուսն էլ `detectInjection()` և
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` կատարում են նախքան
պատկերի ցիկլը։ Ներդրման ուղղումները գտնվում են մուտքի վերևում, այնպես որ սա
սահմանափակում է regex CPU/GC-ն բազմահարյուր-KB բեռների վրա առանց հայտնաբերման թուլացնելու (cf.
#3932, #4041)։

### Հաստատման դիմակ (`credentialMasker.ts`)

Աշխատում է **երկու** փուլերում, վերջինը դեֆոլտային շղթայում (prioritet `95`)։ Հեռացնում է
լավ հայտնի API-հիմնաբառերի / գաղտնի-թոքենների ձևաչափերը դուրս եկող բեռից (հաղորդագրության
բովանդակություն, գործիք-կոչի արգումենտներ, գործիքների արդյունքներ) **և** մատակարարի պատասխանից, այնպես որ
հաստատումը, որը տեղադրվում է հրահանգում (կամ վերադարձվում է գործիքի արդյունքով) չի արտահոսում
վերին մատակարարին կամ հաճախորդին։

- **Ընտրովի միայն**, նույն ավանդույթը, ինչ PII հեռացումը (Hard Rule #20-համընկնող):
  անջատված, եթե `settings.credentialRedactionEnabled === true` **կամ**
  `CREDENTIAL_REDACTION_ENABLED=true`։ Եթե դա անջատված է, պաշտպանիչը ոչ մի գործողություն չի կատարում —
  այն երբեք չի բլոկում և երբեք չի վերագրում։
- `redactCredentials()` քայլում է ամբողջ բեռի/պատասխանի ծառով (`walkValue()`,
  պրոտոտիպի-աղտոտման անվտանգ, ցիկլի-անվտանգ `WeakSet`-ի միջոցով) և փոխարինում է համապատասխանությունները
  `[REDACTED:<type>]` տեղապահով, կրկնօրինակելով միայն այն ճյուղերը, որոնք իրականում
  փոխվել են։
- `CREDENTIAL_PATTERNS` ընդգրկում է LLM մատակարարի բանալիները (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS թոքենները (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), վճարման բանալիները (Stripe, Square), ամպային
  բանալիները (AWS access key, Twilio, SendGrid, Mailgun), մասնավոր բանալիներ / JWT-ներ,
  հաստատման պարունակող կապի տողեր (`mongodb://user:pass@...`, և այլն), և
  ընդհանուր `Authorization`/`x-api-key`/`api-key`/`apikey` գլխի-արժեք
  ձևաչափը։ Գլխի ձևաչափի բանալիները (`authorization`, `x-api-key`, `api-key`,
  `apikey`) կառուցվածքային կերպով հեռացվում են (միայն արժեքը, սխեմայի նախածանցը, ինչպես
  `Bearer `/`Basic ` պահպանված) այլ ոչ թե ընդհանուր տեքստի regex-ով։
- Պաշտպանիչը երբեք չի բլոկում; այն միայն վերագրում է (`modifiedPayload` /
  `modifiedResponse`) և նշում է (`meta.credentialsRedacted`, `meta.count`)։

Հետադարձի պաշտպանություն: `tests/unit/credential-masker-guardrail.test.ts`։

## Հիմնական պայմանագիր (`base.ts`)

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
  block?: boolean; // true-ը անմիջապես դադարեցնում է շղթայի կատարումը
  message?: string; // ցուցադրվում է արգելափակման ժամանակ
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // վերադարձվում է preCall-ի կողմից՝ հարցումը վերագրելու համար
  modifiedResponse?: TValue; // վերադարձվում է postCall-ի կողմից՝ պատասխանը վերագրելու համար
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

Պաշտպանիչ սահմանափակումը ազդարարում է «փոփոխություն չկա»՝ վերադարձնելով կա՛մ `void`, կա՛մ `{}`, կա՛մ
`{ block: false }`։ `modifiedPayload`/`modifiedResponse` վերադարձնելը փոխարինում է
շղթայով դեպի հաջորդ պաշտպանիչ սահմանափակումներ փոխանցվող արժեքը։
`signal?: AbortSignal`-ը կանչողի կենսացիկլը փոխանցում է պաշտպանիչ սահմանափակումներին։ Հարցման ընդհատումը կանխամտածված fail-open բացառություն է․ մեդիա կամուրջները դադարեցնում են աշխատանքը և մաքրում ռեսուրսները՝ առանց չմշակված մեդիան վերականգնելու այն թիրախի համար, որը, ինչպես հայտնի է, չի աջակցում այն։

## Ռեեստր (`registry.ts`)

`guardrailRegistry` եզակի օրինակը տրամադրում է՝

- `register(guardrail)` — ավելացնում է պաշտպանիչ սահմանափակում (կամ փոխարինում է այն ըստ նորմալացված անվան) և
  վերադասավորում ըստ աճող `priority`-ի։
- `clear()` / `list()` — վարչական օժանդակ մեթոդներ։
- `runPreCallHooks(payload, context)` — հերթով մշակում է ակտիվ պաշտպանիչ սահմանափակումները, փոխանցում է
  payload-ը `modifiedPayload`-ի միջոցով և կանգ է առնում առաջին `block: true`-ի դեպքում։
- `runPostCallHooks(response, context)` — նույն հոսքը պատասխանի կողմում։
- `resetGuardrailsForTests({ registerDefaults })` — մաքրում է վիճակը և, ըստ անհրաժեշտության,
  վերագրանցում է լռելյայնները՝ թեստերի մաքուր մեկուսացման համար։

Երկու գործարկիչներն էլ վերադարձնում են `{ blocked, payload|response, results, guardrail?, message? }`,
որտեղ `results`-ը `GuardrailExecutionResult` գրառումների զանգված է, որոնք ներառում են
յուրաքանչյուր պաշտպանիչ սահմանափակման `blocked`, `skipped`, `modified`, `error` և `meta` դաշտերը,
որոնք օգտակար են հետագծման համար։

### Յուրաքանչյուր հարցման համար պաշտպանիչ սահմանափակումների անջատում

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })`-ը հավաքում է
պաշտպանիչ սահմանափակումների անունների կրկնազերծված ցանկ, որոնք պետք է բաց թողնվեն ընթացիկ
հարցման համար։ Աղբյուրները (բոլորն ընտրովի են, բոլորը միավորվում են)՝

- `apiKeyInfo.disabledGuardrails`
- Հարցման մարմնի `disabledGuardrails` (վերին մակարդակում)
- Հարցման մարմնի `metadata.disabledGuardrails`
- `x-omniroute-disabled-guardrails` վերնագիր (կամ հին
  `x-disabled-guardrails`)

Արժեքները կարող են լինել տողերի զանգվածներ կամ ստորակետերով բաժանված տող․ անունները
նորմալացվում են փոքրատառ kebab-case ձևաչափի (`pii_masker` → `pii-masker`)։ Արդյունքը
`context.disabledGuardrails`-ի միջոցով փոխանցվում է ռեեստրին, որը բաց է թողնում
համապատասխան պաշտպանիչ սահմանափակումները (`skipped: true`՝ `results`-ում)։

## Կատարման հերթականություն

`src/sse/handlers/chat.ts`-ով և
`open-sse/handlers/chatCore.ts`-ով անցնող յուրաքանչյուր հարցման համար՝

1. `resolveDisabledGuardrails(...)`-ը API բանալիից, հարցման մարմնից և
   վերնագրերից կազմում է բաց թողնման ցանկը։
2. `guardrailRegistry.runPreCallHooks(body, ctx)`-ը պաշտպանիչ սահմանափակումները գործարկում է
   առաջնահերթության աճման կարգով՝
   - Անջատված պաշտպանիչ սահմանափակումներն արձանագրվում են որպես `skipped`։
   - Յուրաքանչյուր պաշտպանիչ սահմանափակման `preCall`-ը կարող է վերագրել օգտակար բեռը՝ օգտագործելով `modifiedPayload`։
   - Առաջին `block: true`-ն անմիջապես ընդհատում է շղթան, և մշակիչը վերադարձնում է
     պաշտպանիչ սահմանափակման մերժման պատասխան։
3. Հնարավոր վերագրված օգտակար բեռը փոխանցվում է համակցված երթուղավորմանը և վերին հոսքի
   ուղարկմանը։
4. Պատասխանը կազմելուց հետո `guardrailRegistry.runPostCallHooks(...)`-ը
   պատասխանի վրա գործարկում է նույն շղթան։ Այստեղ `block: true`-ն հեռացնում է վերին հոսքի
   պատասխանը։

Սխալ արձակող պաշտպանիչ սահմանափակումներն արձանագրվում են `error: <message>`-ով և գրանցվում
`logger.warn`-ի միջոցով, սակայն շղթան շարունակվում է. նախագծմամբ կիրառվում է սխալի դեպքում թույլատրելու մոտեցումը։

## Կազմաձևում

Ներկառուցված պաշտպանիչ սահմանափակումների կողմից ընթերցվող միջավայրի փոփոխականները՝

| Փոփոխական                             | Օգտագործվում է             | Ազդեցություն                                                                                                                  |
| ------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`         | Հայտնաբերումն ամբողջությամբ անջատելու համար սահմանեք `false`։                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`         | Ներարկման քաղաքականությունը՝ `warn`, `block` կամ `log`։ Հնացած `redact` արժեքը չի վերագրում ներարկման տեքստը։                 |
| `INJECTION_GUARD_MODE`                | `prompt-injection`         | Ներարկման պաշտպանիչի ռեժիմը. նաև ՏԲ-ի գործառույթի դրոշակ է, որը **գերակայում է** միջավայրի փոփոխականների նկատմամբ (DB > ENV)։ |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`         | Նվազագույն խստությունը, որը մերժվում է `MODE=block`-ի դեպքում՝ `high` (լռելյայն), `medium` կամ `low`։                         |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`         | `INPUT_SANITIZER_BLOCK_THRESHOLD`-ի հնացած այլանունը։                                                                         |
| `PII_REDACTION_ENABLED`               | `pii-masker`               | Երբ `true` է, հարցման PII-ը քողարկվում է՝ անկախ ներարկման ռեժիմից։                                                            |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (ներքևի հոսք) | Կառավարում է պատասխանի կողմում քողարկիչի վարքագիծը։                                                                           |

Մոդալության կամրջի պաշտպանիչ սահմանափակումները կատարման ժամանակի կազմաձևումն ընթերցում են ՏԲ-ով ապահովվող կարգավորումների
պահոցից (`getSettings()`), ոչ թե միջավայրի փոփոխականներից։ Պատկերի մշակման հիմնական բանալիներն են՝
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` և
`modalityBridgeCacheMaxEntries`։ Հնացած
`visionBridge*` բանալիներն ընդունվում են միայն որպես փաստաթղթավորված՝ մեկ ցիկլի ընթերցման
պահուստային տարբերակ. կառավարման վահանակից գրանցումները կիրառում են հիմնական բանալիները։ Լռելյայն արժեքները և պահուստային
լուծիչը գտնվում են `src/shared/constants/modalityBridgeDefaults.ts`-ում, իսկ հնացած
հաստատունները պահպանվում են `src/shared/constants/visionBridgeDefaults.ts`-ում։

Ձայնի մշակումն օգտագործում է `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` և `modalityBridgeAudioMaxClips`, ինչպես նաև ընդհանուր
`modalityBridgeCache*` կարգավորումները։ Ձայնի մշակման համար հնացած բանալիների պահուստային տարբերակ չկա, քանի որ այս
բանալիները ներդրվել են Մոդալության կամրջի սխեմայի հետ։

Տեսանյութի մշակումն օգտագործում է `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` և
`modalityBridgeVideoTimeout`, ինչպես նաև ընդհանուր `modalityBridgeCache*` կարգավորումները։
Այն լռելյայն անջատված է, քանի որ FFmpeg/ffprobe-ը ոչ պարտադիր գործառնական
կախվածություններ են, իսկ կադրերի նկարագրությունների ստեղծումն ավելացնում է ուշացումն ու մոդելի օգտագործման արժեքը։

## Հատուկ պաշտպանիչ կանոններ

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

Քայլեր՝

1. Ստեղծեք `src/lib/guardrails/myGuardrail.ts`՝ ընդլայնելով `BaseGuardrail`-ը։
2. Իրագործեք `preCall`-ը և/կամ `postCall`-ը։
3. Կամ գրանցեք ներմուծման պահին (`registerDefaultGuardrails`-ից ավելացնելով), կամ
   գործարկման ընթացքում կանչեք `guardrailRegistry.register(...)`-ը․ ռեեստրը փոխարինում է
   նույն նորմալացված անունն ունեցող ցանկացած նախորդ պաշտպանիչ կանոն։
4. Ավելացրեք թեստեր `tests/unit/`-ում (առկա օրինակներ՝
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`)։

## Թեստավորում

Թեստերի միջև օգտագործեք `resetGuardrailsForTests()`՝ հայտնի վիճակից սկսելու համար։
Փոխանցեք `{ registerDefaults: false }`՝ դատարկ ռեեստրից սկսելու և
միայն թեստավորվող պաշտպանիչ կանոնները գրանցելու համար։ Vision Bridge-ն աջակցում է կախվածությունների
ներմուծմանը (`deps.getSettings`, `deps.callVisionModel`), իսկ Audio Bridge-ը տրամադրում է
համարժեք միջերեսներ՝ կարգավորումների, հնարավորությունների, STT մոդելի ընտրության, հավատարմագրերի
ստուգումների և տրանսկրիպցիայի համար։ Հետևաբար, թեստերը կարող են ստուգել երկու հոսքերն էլ՝ առանց DB-ի
կամ ցանցային հասանելիության։

## Տես նաև

- `src/lib/guardrails/` — իրականացումը
- `src/shared/utils/inputSanitizer.ts` — ընդհանուր դետեկտորը, որն ապահովում է
  հուշման ներարկման հայտնաբերումը և PII-ի քողարկումը
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge-ի լռելյայն արժեքները և
  հարկադիր կամրջման մոդելների ցանկը
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio-ի ընդհանուր գործարկման միջավայրի լռելյայն արժեքները
- `docs/architecture/RESILIENCE_GUIDE.md` — ուղղահայաց շերտ (շղթայի անջատիչ, սպասման ժամանակահատվածներ)
- `docs/reference/ENVIRONMENT.md` — միջավայրի փոփոխականների ամբողջական տեղեկատուն

## Ներարկման պաշտպանիչ կանոնով երթուղիների ծածկույթ և red-team թեստավորում (Փուլ 8 · Բլոկ D)

Ներարկման պաշտպանիչ կանոնը (`createInjectionGuard` / `withInjectionGuard`) ընդգրկում է օգտատիրոջ հուշումներ
ընդունող բոլոր երթուղիները։ Այն հաշվի է առնում `INJECTION_GUARD_MODE`-ը (լռելյայն՝ `warn` = միայն գրանցել մատյանում,
`block` = վերադարձնում է HTTP 400 `SECURITY_001`)։

| Տեսակ        | Երթուղիներ                                                                                                                                           | Լռելյայն ռեժիմ |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Տեքստ (առկա) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Գեներատիվ    | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Տվյալներ     | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Տեքստի արտաբերումը (`extractMessageContents`) ներառում է `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`։

**Red-team (ամեն գիշեր, `nightly-llm-security.yml`)․** promptfoo-ն ստուգում է, որ յուրաքանչյուր երթուղի արգելափակում է
OWASP-LLM կորպուսը `INJECTION_GUARD_MODE=block` ռեժիմում, իսկ garak-ը կատարում է ստուգումներ (գաղտնիքի բացակայության դեպքում՝ բաց է թողնում)։
`moderations`-ը ներառված է հետևողականության համար․ արգելափակման ռեժիմն օգտագործող օպերատորները կարող են այն բացառել
`resolveDisabledGuardrails`-ի միջոցով։

Գիշերային աշխատանքային հոսքը (`.github/workflows/nightly-llm-security.yml`, cron + ձեռքով
գործարկում) ունի երկու առաջադրանք՝

- **`promptfoo-guard` (արգելափակող)** — գործարկում է `promptfoo eval -c promptfooconfig.yaml`-ը
  `INJECTION_GUARD_MODE=block`-ով։ Յուրաքանչյուր հակառակորդային դեպք (օրինակ՝ «անտեսիր բոլոր
  նախորդ հրահանգները…», DAN ոճի jailbreak-ներ) հաստատում է, որ պատասխանը պարունակում է
  `error.code === "SECURITY_001"`, այսինքն՝ պաշտպանիչ կանոնն իսկապես մերժել է հարցումը։
- **`garak` (խորհրդատվական)** — գործարկում է garak-ը `--probes promptinject,dan,leakreplay`-ով
  տեղային OmniRoute օրինակի (`http://localhost:20128/v1`) նկատմամբ։ Պայմանավորված է
  մատակարարի գաղտնիքի (`PROMPTFOO_PROVIDER_KEY`) առկայությամբ․ դրա բացակայության դեպքում առանց սխալի բաց է թողնվում և վերջում
  ունի `|| true`, ուստի այն հաշվետվություն է ներկայացնում՝ առանց CI-ն ձախողելու։

Պաշտպանիչ օգնականի (`createInjectionGuard` / `withInjectionGuard`)
ծածկույթը տարածվում է հուշում պարունակող յուրաքանչյուր `/v1` երթուղու վրա․ հուշման տեքստը վերցվում է
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` դաշտերից՝
`src/shared/utils/inputSanitizer.ts`-ի `extractMessageContents()`-ի միջոցով։
