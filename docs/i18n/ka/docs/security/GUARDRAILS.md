# Guardrails (ქართული)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **სიმართლის წყარო:** `src/lib/guardrails/`
> **ბოლოს განახლდა:** 2026-08-29 — v3.8.51 (ვიდეო ხიდის ტრანსკრიპტის წარმომავლობა დეკლარირებულია გამომძახებლის მიერ, ჯერ არ არის სერვერის მიერ დამოწმებული — განმარტებულია #11661-ის მიხედვით)

Guardrails უზრუნველყოფენ უსაფრთხოებას, პოლიტიკას და კონტენტის ტრანსფორმაციებს OmniRoute-სა და upstream პროვაიდერებს შორის საზღვარზე. თითოეულ guardrail-ს შეუძლია შეამოწმოს (და სურვილისამებრ უარყოს, გარდაქმნას ან ანოტირება გაუკეთოს) მოთხოვნის payload-ები (`preCall`) და upstream პასუხები (`postCall`).

სისტემა არის **fail-open**: თუ guardrail-ის შესრულებისას შეცდომა მოხდა, რეგისტრატორი აღრიცხავს შეცდომას და აგრძელებს შემდეგ guardrail-ზე, ნაცვლად მოთხოვნის შეწყვეტისა. დაბლოკვა არის მკაფიო გადაწყვეტილება (`block: true`), არასდროს შემთხვევითობა.

## მშვენიერი დაცვა

რეგისტრი ავტომატურად იტვირთავს ექვს დაცვას პრიორიტეტის მიხედვით იმპორტის დროს
(იხილეთ `registry.ts` → `registerDefaultGuardrails()`):

| პრიორიტეტი | სახელი              | ეტაპ(ები)      | ფაილი                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

დაბალი პრიორიტეტის ნომრები მუშაობენ **პირველ**.

### ხედვის ხიდი (`visionBridge.ts`) — მოდალობის ხიდი PR-1

შეიცავს იმიჯის შემცველ მოთხოვნებს, რომლებიც მიმართულია **არახედვის მოდელებზე** და ან
გადამისამართებს მთელ მოთხოვნას ხედვის შესაძლებლობის მქონე მოდელზე ან ცვლის იმიჯის
ნაწილებს ტექსტური აღწერებით, რომლებიც წარმოიქმნება კონფიგურირებად ხედვის მოდელით
მაღლა ზემოთ ზარის წინ. ეს საშუალებას აძლევს მხოლოდ ტექსტურ პროვაიდერებს
მიუთითონ მრავალმოდალური დატვირთვები.

მიმდინარე პროცესი:

1. გამოტოვეთ, თუ მიზნობრივი მოდელი უკვე მხარს უჭერს ხედვას (თუ არ ჩანს
   იძულებითი ხიდის სიაში `isVisionBridgeForcedModel`).
2. გამოიტანეთ იმიჯის ნაწილები `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), რომელიც დელეგატებს **ერთიან მედია
   დეტექტორს** `detectMediaParts()` `open-sse/utils/mediaParts.ts`-ში —
   სიმართლეს ერთიანი წყარო, რომელიც გაწვდილია კომბინირებული თავსებადობის ფილტრზე.
   გამოტანა დაშვებულია მხოლოდ ზედა დონეზე ნაწილებზე, რომლებსაც
   `replaceImageParts` შეუძლია უკან დააბრუნოს (გამოტანა↔შეცვლა კონტრაქტი): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, და Responses API `input_image`. ჩასმული_hits და
   მხოლოდ ინდიკატორის ფორმები კომბო-ფილტრის მასალაა და არასოდეს გამოიტანება.
   გამოტოვეთ, თუ არაფერი მოიძებნა.
3. გადაწყვიტეთ runtime კონფიგურაცია `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): ახალი `modalityBridge*`
   პარამეტრების გასაღებები იგებს; ძველი `visionBridge*` გასაღებები რჩება
   **ერთი ციკლისFallback** (უკან დაბრუნების ფანჯარა). გამოტოვეთ ნებისმიერი მედიის
   გავლა, როდესაც ხიდი გამორთულია.
4. რეჟიმის არჩევანი (`modalityBridgeVisionMode`, იხილეთ ქვემოთ მოცემული ცხრილი)
   გადაწყვეტს გადამისამართებას თუ აღწერას. გადამისამართება აბრუნებს `modifiedPayload`
   მხოლოდ `model` შეცვლილი, პლუს მეტა `{ rerouted, fromModel, toModel, imagesKept }`.
5. აღწერის გზა: შეზღუდეთ იმიჯები `maxImages`-ზე, შეადგინეთ დავალების
   ცნობიერი პრომტი, კონსულტაციები აღწერის კეშზე, გამოიძახეთ ხედვის მოდელი
   **პარალელურად** (`Promise.allSettled`), და ჩააწვდეთ `[Image N]: <description>`
   ტექსტური ნაწილები მათ ადგილას. წარუმატებელი აღწერა იძლევა `null` და
   ორიგინალური იმიჯის ნაწილი არის **შენახული** (#4012) — გარდა კომბო
   აღწერის გზაზე, როდესაც ყველა აღწერა წარუმატებელია, სადაც
   დადასტურებული არახედვის ზემოთ მიდის `(unavailable — no vision-capable provider connected)`
   stub-ის ნაცვლად (#8430).
6. დააბრუნეთ `modifiedPayload` + მეტა (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### რეჟიმის არჩევანი (`modalityBridgeVisionMode`)

| რეჟიმი     | დეფოლტი | ქცევა                                                                                                                                                                                                                                                                                              |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | ძველი ჰიურისტიკა, შეუცვლელი (#6640/#7204): არაკომბო/`auto/` მოდელები გადამისამართდებიან საუკეთესო ხედვის მოდელზე, თუ ორიგინალური მოდელი უკვე აქვს გამოსაყენებელი სერთიფიკატები (მაშინ აღწერეთ); კომბო მიზნები ყოველთვის აღწერენ.                                                                   |
| `describe` |         | ყოველთვის აღწერეთ — გადამისამართების ბლოკი მთლიანად გამოტოვებულია; მომხმარებლის მიერ არჩეული მოდელი ყოველთვის პასუხობს.                                                                                                                                                                            |
| `reroute`  |         | იძულებითი გადამისამართება: სერთიფიცირებული მოდელის დაცვა გამოტოვებულია. გადამისამართების **მიზნობრივი** სერთიფიცირების დაცვა კვლავ მოქმედებს — როდესაც არ არსებობს გამოსაყენებელი ხედვის მიზანი, მოთხოვნა აღწერაზე გადადის, ასე რომ خامი იმიჯები არასოდეს აღწვდებიან ტექსტურ უკანა მხარეს (#8430). |

ზრდილი რეჟიმები სწრაფად მუშაობენ **წინ** ავტომატური ჰიურისტიკის მუშაობამდე; `auto` ქცევა
ბაიტ-იდენტურია PR-1 დაცვასთან.

#### დავალების ცნობიერი აღწერის პრომტი (`modalityBridgeVisionTaskAware`)

დეფოლტი **მართალია**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) ამატებს
**ბოლო მომხმარებლის შეტყობინების** ტექსტს (500 სიმბოლომდე შეზღუდული) ბაზის
აღწერის პრომტზე, რაც აღწერას მიმართავს იმაზე, რაც მომხმარებელმა სინამდვილეში მოითხოვა
(codex-vision-proxy ნიმუში) და ითხოვს ხედვის მოდელს, რომ ტრანსკრიპტირება მოახდინოს
მხოლოდ ტექსტური. როდესაც დროშა გამორთულია — ან მომხმარებლის ტექსტი არ არის — ბაზის
პრომტი გამოიყენება უცვლელად.

აღწერა თვით-ციკლის საკუთარი OpenAI-თან თავსებადი მოთხოვნა (`callVisionModelSingle()`
`visionBridgeHelpers.ts`-ში) ყოველთვის ითხოვს `image_url.detail: "high"` —
არასოდეს, ყველა გამწვდელზე/მომწოდებელზე, არ არის შეზღუდული რომელიმე კლიენტის სიგნალზე.
დაბალი დეტალების ნიმუში ამცირებს OCR-ის სიზუსტეს სწორედ იმ ტექსტის ტრანსკრიპციის
მოცულობისთვის, რაც ამ მოთხოვნაშია, ამიტომ აღწერის გამოძახება ყოველთვის ითხოვს მაღალ
დეტალებს, მიუხედავად იმისა, თუ რა დეტალების დონე იყო თავდაპირველ შემომავალი მოთხოვნაში. ეს
მხოლოდ გავლენას ახდენს შიდა აღწერის მოთხოვნის სხეულზე; ეს არ ცვლის როგორ
OmniRoute აგზავნის გამწვდელის საკუთარ `image_url.detail` ძირითად მოთხოვნაზე —
ეს დეფოლტი ცალკე გამოიყენება და მხოლოდ აღმოჩენილი OpenCode კლიენტებისთვის,
`defaultImageDetail()`-ში (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic-ის ვაირ-ფორმატის შტო აღწერის თვით-ციკლში არ შეიცავს `detail` ველს
და არ ექვემდებარება არცერთ დეფოლტს.

#### აღწერის გამომავალი კაპი (`modalityBridgeVisionMaxChars`)

| გასაღები                       | დეფოლტი | დიაპაზონი        |
| ------------------------------ | ------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` ან 100–50000 |

`0` (დეფოლტი) ნიშნავს **არანაირ კაპს** — აღწერა, რომელიც დაბრუნდება
`callVisionModel()`-დან, გადადის დაუცველად, არსებული ქცევის შენარჩუნებით. ნებისმიერი
მნიშვნელობა 100–50000 დიაპაზონში აჭრობს აღწერას `…` სუფიქსით, სანამ ის
გადაიჭრება როგორც `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts`-ში).
ამაღლეთ ეს დეტალების მძიმე OCR დავალებებისთვის, სადაც ქვედა მოდელს სჭირდება
სრული ტრანსკრიპცია; შეამცირეთ ეს, რათა შეზღუდოთ ტოკენის გამოყენება საუბრის
მოდელებზე. პანელის ველი მდებარეობს Vision-ის ტაბის მოწინავე პანელში
(`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx`-ში) და
შეზღუდავს ნებისმიერ მნიშვნელობას 1 და 99 შორის 100-ის ქვედა ზღვაზე, ხოლო
სპეციფიური `0` არ ეხება — `0` არის ვალიდური Zod მნიშვნელობა თავისთავად
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), არა მხოლოდ
"არასაკმარისი" დეფოლტი.

#### აღწერის კეში (`modalityBridge/bridgeCache.ts`)

მეხსიერების LRU + TTL კეში აღწერის გამომავალებისთვის, საერთო პროცესზე.
გასაღები = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
სიგრძის-პრეფიქსის ჩარჩოთი (არ არის ველის საზღვრის შეჯახება). მოდელის კომპონენტი არის
**კონფიგურირებული** ხიდის მოდელი, არა მოდელი, რომელიც რეალურად უპასუხა —
`callVisionModel` შეიძლება შიდა fallback-ით იმოქმედოს, და გასაღების თითოეული მცდელობა
შეიცავს კეშის ფრაგმენტაციას. წარუმატებელი აღწერები არასოდეს ინახება. პარამეტრები:

| გასაღები                        | დეფოლტი | დიაპაზონი |
| ------------------------------- | ------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`  | —         |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000   |

#### შორეული სურათების ნორმალიზაცია (თვით-ციკლის აღწერა/base64 მიღება)

როდესაც ხიდი იღებს **შორეულ** სურათს თავად — Anthropic-ის აღწერის
თვით-გამოძახება და claude-wire-format base64 კონვერტაცია
(`ensureBase64ImagesForClaudeWire`), ორივე `fetchRemoteImageAsDataUri()`
`visionBridgeHelpers.ts`-ში — الناتجური მონაცემთა URI გადადის `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) სანამ ის ჩადებულია ვიზუალური მოდელის
მოთხოვნაში. გადიდებული სურათები შემცირდება **2048px ხანგრძლივ მხარეზე** (რომელიც
შესაბამისია OpenAI/Anthropic-ის მიერ უკვე გამოყენებულ ზომის კაპზე), რაც ამცირებს
ატვირთვის ბაიტებს/ლატენტობას, არ შეცვლის იმაზე, რაც ვიზუალური მოდელი ხედავს.
ზომის შეცვლა იყენებს `sharp`, რომელიც იტვირთება დინამიური იმპორტით: პლატფორმაზე,
სადაც მისი ნატივი ბინარი ვერ იტვირთება, `normalizeDataUri()` **არასოდეს ისვრის** —
ის უკან დაბრუნდება ორიგინალური ბაიტების გადაცემით, ასე რომ აღწერა/base64-კონვერტაციის
პატარა გზა ყოველთვის მუშაობს. არ-სურათული ბაიტები (მიღება, რომელიც არ დაბრუნდა
შესაძლებელი სურათით) ასევე გადადის დაუცველად. ეს ნორმალიზაცია შეზღუდულია იმ სურათებზე,
რომლებსაც ხიდი იღებს საკუთარი თვით-გამოძახებისთვის — ეს არასოდეს გამოიყენება
გამწვდელის ნედლი გადაცემული დატვირთვისთვის, რაც შეესაბამება
მხოლოდ ოპტ-ინ მუტაციის პრინციპს (Hard Rule #20).

#### პარამეტრების სქემა + მიგრაცია

ახალი `modalityBridge*` გასაღებები Zod-ის მიერ ვალიდირებულია `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` ტრიო და
`modalityBridgeAudio*` ჯგუფი, რომელიც გამოიყენება აუდიო ხიდისთვის. მიგრაცია
`141_modality_bridge_settings.sql` ასახავს არსებული მემკვიდრეობის
`visionBridge*` მნიშვნელობებს შესაბამის ახალ გასაღებებზე (იდემპოტენტური, არასოდეს
გაანადგურებს ოპერატორის მიერ გაწვდილი `modalityBridge*` მნიშვნელობა); მემკვიდრეობის
გასაღებები რჩება მიღებული როგორც წაკითხვისFallback ერთი გამოშვების ციკლის განმავლობაში.

#### გამჭვირვალობის სათაური + სტატისტიკა

აღწერის გარდაქმნილი პასუხები ატარებენ
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(შექმნილია `buildModalityBridgeHeader()`-ით `modalityBridge/bridgeStats.ts`-ში,
დასმულია `withModalityBridgeHeader()`-ით `src/sse/handlers/chatHelpers.ts`-ში).
გადამისამართებული მოთხოვნები **არ** იღებენ სათაურს — დატვირთვა არ იყო
შეხება და მოდელის შეცვლა უკვე ჩანს პასუხის სხეულის `model` ველში.

`GET /api/modality-bridge/stats` (მმართველობის ავტორიზაცია, იგივე დონე როგორც
`GET /api/settings`) აბრუნებს მეხსიერების თითოეული მოდალობის მექანიზმების
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` `vision`, `audio`, და
`video`-ისთვის. `averageLatencyMs` იყენებს `latencySamples`, არა ყველა მცდელობას, როგორც
მის denominator; ოპერაცია, რომელიც დროის გარეშეა, არ ქმნის ნულ-წუთიან
ნიმუშს. `bridged` რჩება უკუკავშირით თავსებადი ალტერნატივა წარმატებული
კონვერტაციებისთვის; წარუმატებელი მცდელობები არ ზრდიან მას.
კაუნტერები თავიდან იწყება პროცესის გადატვირთვის დროს დიზაინის მიხედვით
(ტელემეტრია, არა ანგარიშგება).

#### პანელის კონფიგურაცია

დედიური პანელის გვერდი არის  
`/dashboard/settings/modality-bridge`. მისი URL-მისამართით `Vision`, `Audio`  
და `Video` ტაბები ინარჩუნებენ შეკითხვის პარამეტრებს `tab` მნიშვნელობის შეცვლისას.  
Vision ტაბი აჩვენებს აქტივაციას, რეჟიმს, მოდელის არჩევანს (მათ შორის ავტომატურ  
ნაგულისხმევ მოდელს), დავალების მიმართ მომზადებას, მოწინავე დროის/სურათის/აღწერის სიგრძის/კეშის  
შეზღუდვებს, გაწვდილი  
კაუნტერებს და დაცულ ნიმუშის მოთხოვნას. Audio ტაბიც აქტიურია: ის აჩვენებს  
აქტივაციას, STT-თვის მხოლოდ მოდელის არჩევანს Auto-ით, დროის/მაქსიმალური კლიპის  
შეზღუდვებს, აუდიო კაუნტერებს და `input_audio` ნიმუშის ტესტს. Video ტაბი ფუნქციონირებს: ის  
რეპორტავს FFmpeg/ffprobe-ის გაწვდილი მდგომარეობას — ოთხი კონკრეტული UI მდგომარეობიდან ერთ-ერთი  
(`unknown`, როდესაც პრობა ფრენაშია ან ვერ დასრულდა, `restricted` არ-ლუპბექ  
დედიური მასპინძლის დროს, როდესაც პრობა გამოტოვებულია კლიენტ-გვერდზე, `unavailable`  
როდესაც პრობა დასრულდა და დადასტურებულია, რომ არ არის, ან `available` FFmpeg/ffprobe  
ვერსიებით) — ინარჩუნებს  
აქტივ/მოდელ/ფრემ/ვიდეო/დროის შეზღუდვებს, ფილტრავს მოდელის არჩევანს ვიზუალური  
მოდელებისკენ და აჩვენებს ვიდეო კაუნტერებს.

ყოფილი Vision Bridge ბარათი AI პარამეტრებში არის თავსებადობის ბმული  
ახალ გვერდზე; ის აღარ ფლობს ფორმის მეორე ასლს. მედია პროვაიდერები ასევე  
ბმულობენ სურათიდან ტექსტში და საუბრიდან ტექსტში სამუშაო პროცესებს  
Corresponding Modality Bridge ტაბებთან, არსებული საუბრიდან ტექსტში  
თამაშის გარეშე.

**თვით-ციკლის მიღების გვერდის ავლა:** როდესაც აღწერის გამოძახება  
OmniRoute-ის საკუთარ `/v1` თვით-ციკლში (არასტანდარტული პროვაიდერის მოდელი)  
მიმართავს, ქვემოთ მოთხოვნა აგზავნის  
`x-omniroute-admission-bypass: internal` და ავტორიზებულია  
გადაწვდილი თვით-ციკლის სერთიფიკატით — ადგილობრივი `sk_omniroute`  
სენტინელით ადგილობრივ რეჟიმში, ან ოპერატორის მიერ კონფიგურირებული  
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env გასაღებით (#1350), ასე რომ  
`REQUIRE_API_KEY=true` განლაგებები კვლავ შეუძლიათ აღწერის გამოძახების  
შესრულება. გვერდის ავლა მხოლოდ იმ ზუსტ სერთიფიკატებზეა  
აღიარებული, ამიტომ გარე კლიენტები ვერ გამოიყენებენ  
ბმულს მიღების გამოტოვებისთვის.

მემკვიდრეობის ნაგულისხმევები ცხოვრობენ `src/shared/constants/visionBridgeDefaults.ts`;  
ახალი რეჟიმი/დავალების მიმართ მომზადება/კეშის ნაგულისხმევები და პარამეტრების  
გადაწვდილი ცხოვრობენ `src/shared/constants/modalityBridgeDefaults.ts`.  
დაცვა აჩვენებს `deps` კონსტრუქტორის პარამეტრს, რათა ტესტებმა  
შეძლონ ყალბი `getSettings` და `callVisionModel` იმპლემენტაციების  
შენახვა.

### აუდიო ბრიჯი (`audioBridge.ts`) — მოდალობის ბრიჯი PR-3

შეიჭრება აუდიომომცველი ჩატ მოთხოვნებში, სანამ ისინი  
მიზანზე მიაღწევენ, რომელიც არ არის ცნობილი აუდიო  
შესახებ. ის არასოდეს გადამისამართებს ჩატ მოთხოვნას: აუდიო ნაწილები  
გადაიწერება არსებული OpenAI-თან თავსებადი მრავალმხრივი  
ბოლო წერტილის საშუალებით და არჩეული ჩატ მოდელი  
გრძელდება ტექსტური ტრანსკრიპტებით.

მიმდინარე პროცესი:

1. გადაწყვიტეთ `supportsAudio` `getResolvedModelCapabilities()`-ის  
   საშუალებით. კონკრეტული პროვაიდერის რეგისტრაციის მეტადატა  
   იგებს, შემდეგ სტატიკური მოდელის მეტადატა, შემდეგ  
   სინქრონული `modalities_input`. დეკლარირებული  
   შესვლის სია, რომელიც არ შეიცავს `audio`, არის `false`;  
   არანაირი შესაძლებლობის მტკიცებულება რჩება `null`.  
   როგორც `false`, ასევე `null` აქტივირებს  
   კონსერვატიულ ბრიჯს, ხოლო `true`  
   გვერდს უვლის.
2. გადაწყვიტეთ `modalityBridgeAudio*` პარამეტრები და  
   გამოიტანეთ გაწვდილი უმაღლესი აუდიო ნაწილები  
   თითოეული შეტყობინებიდან საერთო `detectMediaParts()`  
   დეტექტორის საშუალებით. მხარდაჭერილი  
   მავთულების ფორმები არიან OpenAI `input_audio`,  
   `audio_url`, და `source.media_type: "audio/*"`.  
   ჩNested აუდიო იწარმოება მარშრუტისთვის, მაგრამ  
   არ არის მოცილებული გაწვდილი გზით. სამუშაო  
   შეზღუდულია `modalityBridgeAudioMaxClips`-ით;  
   შემდგომი ნაწილები რჩება შეუცვლელი.
3. პატივი ეცით კონფიგურირებულ `provider/model`,  
   ან მიეცით `selectAudioBridgeModel()`-ს  
   `AUDIO_TRANSCRIPTION_PROVIDERS`-ის გავლა  
   სტაბილური კატალოგის წესით და აირჩიეთ პირველი  
   მოდელი, რომელსაც აქვს გამოსაყენებელი აქტიური  
   პროვაიდერის სერთიფიკატი.
4. `callAudioTranscription()` გარდაქმნის base64/data-URI  
   აუდიოს მრავალმხრივ `file`-ად, ან  
   ჩამოტვირთავს შორეულ `audio_url`-ს  
   საჯაროდ მხოლოდ გასვლის დაცვით DNS-ით  
   და 25 MB-ის ზღვარით. შემდეგ ის POST-ით  
   აგზავნის ფაილსა და არჩეულ მოდელს  
   ადგილობრივ `/v1/audio/transcriptions`  
   თვით-ციკლში, ავტორიზებული  
   `resolveSelfLoopBearer()`-ით. არსებული  
   ტრანსკრიპციის მარშრუტი ასრულებს ჩვეულებრივ  
   სერთიფიკატის ძიებას, cooldown/rate-limit  
   მართვას და პროვაიდერის გადაცემას.
5. წარმატებული გამოძახებები ცვლიან თავიანთ ნაწილებს  
   `[Audio N]: <transcript>`. გამოძახებები  
   მუშაობენ `Promise.allSettled`: ინდივიდუალური  
   წარუმატებლობა ინარჩუნებს იმ ორიგინალურ  
   აუდიო ნაწილს (#4012 კონტრაქტი). თუ  
   ყველა გამოძახება წარუმატებელია და მიზანი  
   დადასტურებულია `supportsAudio === false`,  
   ნაწილები ხდება  
   `[Audio N]: (unavailable — no STT provider connected)`  
   (#8430 კონტრაქტი). უცნობ მიზანზე (`null`)  
   ყველა წარუმატებელი შედეგი რჩება შეუცვლელი.  
   დადასტურებული ტექსტური მიზანი, რომელსაც  
   არ აქვს გამოსაყენებელი STT სერთიფიკატი,  
   იღებს იმავე კონკრეტულ stub-ს  
   ქსელის გამოძახების გარეშე.

წარმატებული ტრანსკრიპტები იყენებენ პროცესის  
მხრივი მოდალობის ბრიჯის LRU/TTL კეშს.  
კი კომბინირებს აუდიოს მითითებას,  
სტაბილურ `audio-transcription` ოპერაციის  
ნიშანს და არჩეულ STT მოდელს;  
წარუმატებლობები არასოდეს ინახება.  
აუდიო მცდელობები განაახლებენ  
ზიარებულ `bridged`, `cacheHits`,  
`failures`, და `lastUsedAt` კაუნტერებს.  
გადაიქცეული პასუხები ატარებენ  
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;  
შეუცვლელი მოთხოვნები არ იღებენ  
აუდიო ბრიჯის სექციას.

მიმდინარე პარამეტრები DB-ით მხარდაჭერილი და  
Zod-ით ვალიდირებული:

| გასაღები                      | ნაგულისხმევი | დიაპაზონი      |
| ----------------------------- | ------------ | -------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —              |
| `modalityBridgeAudioModel`    | `""`         | Auto ან STT ID |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10           |

ზიარებული კეში რჩება კონტროლირებადი  
`modalityBridgeCacheEnabled`,  
`modalityBridgeCacheTtlMinutes`,  
და `modalityBridgeCacheMaxEntries`.

### ვიდეო ბრიჯი (`videoBridge.ts`, `videoBridgePipeline.ts`)

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

#### FU-07 სტრუქტურული სექციის მტკიცებულება

`segment_aware` uses one bounded pre-analysis pass over the already validated
local video stream. The fixed filter chain first scales to at most 320 pixels
wide, detects scene changes and frozen intervals, then samples at 1 frame per
second for blur, average luma, and spatial/temporal information. The pass is
limited to 600 structural samples, one FFmpeg/filter thread, the same
`file`-only protocol and container allowlists, a 1 MiB process-output bound,
and at most 30 seconds inside the broker's shared abort/deadline. It never
accepts a command, filter, path, or URL from the request.

სტრუქტურული მნიშვნელობები არის დეტერმინისტული ნიმუშების მტკიცებულება, არა სემანტიკური ვიდეო გაგება. ისინი არ განსაზღვრავენ სუბიექტებს, მოქმედებებს, სათაურებს, საუბარს ან მომხმარებლის მიზანს. სცენის და გაყინვის საზღვრები ქმნიან სექტორებს; გაყინვის დაფარვა, ბუნდოვანება, ექსპოზიცია, სივრცული დეტალი და დროითი ცვლილება მხოლოდ იმაზე ახდენს გავლენას, თუ როგორ არის გამოყოფილი არსებული 1–16 ჩარჩოს ბიუჯეტი. სრულად გაყინული სექტორი შეზღუდულია ერთ ჩარჩოზე, ხოლო არაგაყინული სექტორები კონკურენციას უწევენ დარჩენილ ბიუჯეტზე. როდესაც საზღვრები ჩარჩოებზე მეტია, ერთგვარი დროის დაფარვა შენარჩუნებულია, ასე რომ სწრაფი ადრეული გაჭრილები ვერ მალავს გრძელ კვალს. სცენის საზღვრები 1-წამიანი ანალიზის რეზოლუციაში გაყინვის საზღვრის ფარგლებში გაწვდილი არიან.

მოსული ფილტრები, არასწორი/ცარიელი მტკიცებულება, დეტექტორის შეცდომა, ან შეზღუდული წინასწარი ანალიზის დროის გასვლის შემთხვევაში, ზუსტად ერთგვარი შუა პოლიტიკა ვერ გაივლის. სატელეფონო გაწყვეტა ან ბროკერის ვადა არ გაივლის: ის ამთავრებს მიმდინარე სუბპროცესს, ხელს უშლის შემდგომ ჩარჩოს ამოღებას და კერძო დროებითი ხე იხსნება `finally`-ში.

`scripts/perf/video-bridge-fu07-eval.ts` გენერირებს დეტერმინისტულ რეალურ FFmpeg-ის მოწყობილობებს პოსტ-დედუპლიკაციის სათაურების დაზოგვისთვის, მჭიდრო მოძრაობის ბიუჯეტის გამოყოფისთვის, ბუნდოვანების/ექსპოზიციის/SI-TI მტკიცებულებისთვის, სწრაფი გაჭრილებისთვის გრძელი კვალით და ნელ-ნელა გაქცეული ცრუ დადებითი შედეგებისთვის. ის აღრიცხავს წინასწარი ანალიზის კედლის დროს და, სადაც `/usr/bin/time` ხელმისაწვდომია, შვილობილი CPU და პიკი RSS. მისი ხარისხის შემოწმებები არის სტრუქტურული ორკაკლები მხოლოდ. რეალური სათაურების მოდელის ხარისხი რჩება `HOLD`, რადგან ეს მოწყობილობა არ აქვს ავტორიზებული ბოლო წერტილი ან გაყინული მსაჯი. ფინანსური დაზოგვები ასევე რჩება `HOLD`, თუ `--caption-cost-per-call-usd` არ აწვდოს ექსპლიციტური დადებითი თითო-ზარის შეფასება; სკრიპტი არასოდეს ქმნის არც ერთ შედეგს.

ყოველი ჩარჩო შეზღუდულია 4 MiB-ზე, ყველა خام ჩარჩო ერთად 23 MiB-ზე, და სერიული ბროკერის პასუხი 32 MiB-ზე. კერძო დროებითი დირექტორია იხსნება `finally`-ში. OmniRoute არ აკავშირებს FFmpeg-ს და არ იღებს მორგებულExecutable-ის გზას. სათაურების დაწერის წინ, ხიდი იყენებს კონსერვატიულ ვიზუალურ დედუპლიკაციის გადაცემას: თითოეული JPEG შემცირებულია 16×16 გრayscale ბუფერში და შედარებულია მხოლოდ ბოლო ჩარჩოსთან, რომელიც შენარჩუნებულია. მოთხოვნილი სათაურების ბიუჯეტის შემთხვევაში, რომელიც ერთ ჩარჩოზე მეტია, ამოღება აწვდავს შეზღუდულ კანდიდატთა აუზს, რომელიც შეიძლება იყოს ორჯერ მეტი ამ ბიუჯეტზე და არასოდეს მეტია 16 ჩარჩოზე. მოთხოვნილი ზღვარი გამოიყენება მხოლოდ დედუპლიკაციის შემდეგ, პირველ და საბოლოო არჩეულ კანდიდატებს კი შენარჩუნებულნი არიან საბოლოო თხელების დროს, როდესაც ბიუჯეტი მინიმუმ ორი არის. ვერსირებული `grayscale-16x16-mean-cells-v2` პოლიტიკა იყენებს საშუალო ლუმას დელტას და მინიატურების უჯრედების თანაფარდობას, რომლის ნორმალიზებული დელტა მინიმუმ 0.05 არის. დუბლიკატის ზღვარი არის მუდმივი 0.04, რომელიც აირჩიეს პროგნოზირებადობისთვის, ვიდრე როგორც runtime პარამეტრი. ეს მეორადი მაღალი-კონტრასტული სიგნალი ინარჩუნებს მცირე მოძრაობას და ხილულ ტექსტურ ცვლილებებს, რომლებიც საშუალო-წინასწარ შედარებას შეუძლია დამალოს. Comparator-ის ან დეკოდერის შეცდომები ვერ გაივლის და ინარჩუნებს დაფარვას. გამომავალი მეტადატა ცალკე გამოყოფს ამოღებულ კანდიდატებს, წარმატებით გამოყენებულ ჩარჩოებს და ვიზუალურ დუბლიკატებს, რომლებიც ჩამოწერილია.

სპეციფიურად მონიშნული ვიდეო ნაწილი შეიძლება მოითხოვოს დროით მონიშნული კონტაქტის ფურცელი. ხიდი აშენებს მაქსიმუმ 4 სვეტიან, 16 ჩარჩოს JPEG-ის გრიდს. თითოეული 512-პიქსელი უჯრედი წვავს თავის წყაროს დროის მარკას მაღალი კონტრასტული ქვედა ზოლში, ხოლო იგივე დროები რჩება ტექსტურ მეტადატაში ქვემოთ ასოციაციისა და აუდიტისთვის. სრული JPEG რჩება შეზღუდული 32 MiB-ზე. თუ `sharp` ვერ ახერხებს გრიდის დეკოდირებას ან შედგენას, ხიდი გადადის ინდივიდუალურ JPEG ჩარჩოებზე; კლიენტის გაწყვეტა მაინც გავრცელდება ფურცლის ოპერაციაზე.

პრომოციის მტკიცებულება განზრახ არის გამიჯნული სინთეზური კომპოზიციის მიკრო-ბენჩმარკიდან. `scripts/perf/video-bridge-contact-sheet-eval.ts` განსაზღვრავს სქემის ვერსირებულ A/B მოწყობილობას რეალურ OpenAI-თან თავსებადი ხედვის მოდელებისთვის. ის ზომავს პროვაიდერის მიერ მოხსენებულ ტოკენებს, ბოლო-მდე კედლის ლატენტობას (ფურცლის კომპოზიციის ჩათვლით), მოდელის ზარის რაოდენობას და მანიფესტით განსაზღვრულ ფაქტების შენარჩუნებას. خام მოდელის პასუხები არ იწერება ანგარიშში; მხოლოდ SHA-256-ის დიგესტები და შეწყვილებული ფაქტების ID-ები რჩება. მოწყობილობა არ აკეთებს ქსელურ ან გადახდილი მოდელის ზარს, თუ `--execute-real` არ არის გადაცემული და `--model`, `OMNIROUTE_BASE_URL`, და `OMNIROUTE_API_KEY` არ არის კონფიგურირებული. ამ ექსპლიციტური რეალური გაწვდის გარეშე, მისი მანქანით წასაკითხი განაჩენი რჩება `HOLD`; სინთეზური ტვირთის/ზარის-რაოდენობის ზომები მარტო არ არის პრომოციის მტკიცებულება.

ცალკე `scripts/perf/video-bridge-promotion-eval.ts` მოიხმარს FU-07 ან FU-09 დაკვირვებებს. პრომოციის მიღება მოითხოვს ყველა რვა სინთეზური სცენარის ტიპს და სუფთა რეალურ კლიპს, მინიმუმ სამი გაზომილი გამეორება თითო როლზე და შემთხვევაზე, ყველა ათი გამოცხადებული მეტრიკა, გაყინული მედია/პრემტ/მოლოდინის ფაქტი/პარამეტრების დიგესტები, უნიკალური დაკვირვების ID-ები და გადამოწმებული თესლი A/B თანმიმდევრობა. შესრულების მიღება აკავშირებს კორპუსის დიგესტს, ზუსტ კანდიდატ SHA-ს და მოდელის რევიზიას. დაკარგული ან არასწორი გაზომვები რჩება `HOLD`, მათ შორის CPU 30 ს-ზე მეტი, პიკი RSS 512 MiB-ზე მეტი ან წინასწარი ანალიზი 30 ს-ზე მეტი. ეს არის მტკიცებულების მიღების ზღვარი, არა ახალი runtime RSS-ის აღსრულების გარანტია.

FU-07 მოითხოვს მინიმუმ 98%-იან ხარისხის შენარჩუნებას და p95 ლატენტობას არაუმეტეს 1.2x ბაზის ხაზის, ასევე ან 0.05 აბსოლუტური შემთხვევის ბალანსირებული საშუალო დაბრუნების გაუმჯობესებას შესაბამისი საშუალო სათაურების ზარებზე, ან მინიმუმ 10%-ით ნაკლებ საშუალო პოსტ-დედუპლიკაციის სათაურების ზარებზე. FU-09 მოითხოვს მინიმუმ 0.85 ხარისხს, 95%-იან შენარჩუნებას, 20%-იან p95 ლატენტობის შემცირებას და 10%-იან ტოკენის შემცირებას. კრიტიკული ფაქტის დაკარგვა, ინექციის შესაბამისობა ან დაკარგული გამოყენება ხელს უშლის პრომოციის მიღებას. ერთი შესრულება ვერ გააკეთებს არაფერს: `--previous-report` ადასტურებს ორი განსხვავებული, არაპარალელური, თანმიმდევრული შესაფერისი შესრულების იმავე პოლიტიკის/მოდელის რევიზიის/კანდიდატის/კორპუსის. ნიმუშების ექსპერიმენტი ვერ დაადასტურებს კონტაქტის ფურცლის ექსპერიმენტს.

კოლექტორებმა უნდა შეაფასონ პასუხები მეხსიერებაში და შეინახონ `responseDigest` და მეტრიკა და დაკვირვების ბმულები, არასოდეს პასუხის ტექსტი. მომხმარებელი ასევე კითხულობს ძველ ნედლ დაკვირვებებს, მაგრამ არასოდეს ასახავს ამ ტექსტს თავის ანგარიშებში. თითოეულ დაკვირვებაზე მიიღება მხოლოდ ერთი `responseDigest` ან `rawResponseText`. ვერსიონირებული ნებართვის სია ცარიელია და აქვს უცვლელი `hold` დეფოლტი. შესაფერისი ჩანაწერი მოითხოვს თავის მტკიცებულების ბმულს, პოლიტიკას, მოდელის რევიზიას, ზუსტ კანდიდატ SHA-ს, მანიფესტის დიგესტსა და ორ განსხვავებულ გაშვების ID-ს; კონფლიქტური კონტექსტები უარყოფილია. ეს მეტადატა არის აუდიტის კონტრაქტი, არა მტკიცებულება, რომ მითითებულ ფაილში არის ნამდვილ ზომები. შეამოწმეთ რეალური ქვითრები ნებისმიერი ჩანაწერის დამატების წინ. მართვის სტატისტიკის ბოლო წერტილი და ვიდეოს პანელი ავლენს კონსერვატიულ მზადყოფნას. კონფიგურირებული მოდელის ალტერნატივი მარტო არ ადგენს მის რევიზიას ან მიმდინარე კანდიდატ SHA-ს, ამიტომ მიმდინარე პანელი იტყობინება `HOLD`, ნაცვლად იმისა, რომ სხვა შესრულების კონტექსტიდან გამოყენებული იყოს შესაბამისობა. ექსპლიციტური ექსპერიმენტული არჩევანი რჩება გამიჯნული პრომოციისგან; არანაირი დეფოლტი ავტომატურად არ იცვლება.

გამიძახებლები შეიძლება დაურთონ დამატებითი `transcript.cues` მასივი მხარდაჭერილი ვიდეო ნაწილისთვის, როდესაც უკვე აქვთ შესაბამისი ტექსტი. თითოეულ კუ უნდა შეიცავდეს `text`, შეზღუდული `start`/`end` ინტერვალი გამოკვლეული ხანგრძლივობის ფარგლებში და ნებართვის მქონე `source` (`client`, `embedded`, ან `audio-bridge`); `confidence` დეფოლტად არის `1` და უნდა დარჩეს `0` და `1` შორის. ზუსტად ერთნაირი კუები გაწვდილი იქნება. OmniRoute არასოდეს იწყებს ტრანსკრიპციას ამ მეტადატიდან: ვალიდირებული კუები კოპირდება აღწერილ შედეგში წყაროს, ნდობის და ინტერვალის მიხედვით და წარმოდგენილია როგორც არენდობით დაკვირვებები ჩარჩოს წარწერებთან ერთად. არასწორი, არასწორი დიაპაზონის ან წარმოშობის გარეშე ტექსტი უარყოფილია, ნაცვლად იმისა, რომ ჩაწეროს წარწერის ნაკადში. ორივე მოთხოვნის სხეულის ტრანსკრიპტის არხი ნორმალიზებს მიწვდილი წარმოშობას `client`, მათ შორის თვით-დამტკიცებული `embedded` ან `audio-bridge` ეტიკეტები. მხოლოდ სერვერის საკუთრებაში მყოფი ადაპტერი შეუძლია მიაწვდოს ეს ნდობით აღჭურვილი ეტიკეტები კოდის მხოლოდ `trustedSource` არგუმენტის საშუალებით; მოთხოვნის JSON ველი ვერ მიაღწევს ამ არგუმენტს. ტრანსკრიპტის ტექსტი რჩება არენდობით მიღებული შინაარსი, მიუხედავად მისი წარმოშობისა, და არასოდეს უნდა განსაზღვროს ავტორიზაცია.

განვითარებული გამიძახებელი შეიძლება მიაწვდოს `audioTranscript` ტრეკი იმავე ვიდეოსთვის; ეს ითვლება როგორც მომხმარებლის მიერ მიწვდილი ტექსტი, არა სერვერის ტრანსკრიპციის მტკიცებულება. ფუზიის seam აწარმოებს ვიზუალურ და აუდიო დაკვირვებებს ერთ ვადაში და შეწყვეტის სიგნალზე, აწყობს მათ საერთო დროის ხაზზე, გაწვდილი ზუსტად ერთნაირი, და იტყობინება ნაწილობრივ შედეგზე, როდესაც მხოლოდ ერთი მხარე წარმატებულია. არასწორი `audioTranscript` იწევს იმ ნაწილობრივ შედეგზე — ვიზუალური აღწერა შენარჩუნებულია და აუდიო შტო აღრიცხავს გაწმენდილი შეცდომის კოდს — ნაცვლად იმისა, რომ მთლიანად ვიდეო ჩავარდნას. თითოეული შტოს ხელმისაწვდომობა, ნაწილობრივი დროშა და გაწმენდილი შეცდომის კოდები შენარჩუნებულია აღწერილ შედეგში, დაცვის მეტადატაში (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), შედეგების კეშის მეტადატაში და ხიდის ფუზიის კაუნტერში. დეფოლტური ვიდეო ხიდის გზა არ იწვევს სიტყვების ტექსტში გადაქცევას ან მეორე მედიის ასლის ჩამოტვირთვას; ამ კონკრეტული ტრეკის გარეშე, ეს რჩება მხოლოდ ვიდეო.

**ტრანსკრიპტის შენახვა (#12150 P1).** ეს ავტომატურად ვრცელდება whenever ვიდეო ხიდი (თავისი სურვილით) წარმოგიდგენთ ტრანსკრიპტის კუ — არ არსებობს ცალკე შენახვის დროშა. როდესაც მოთხოვნა წარმოგიდგენთ ნებისმიერ ტრანსკრიპტის კუ (გამიძახებლის მიერ გამოცხადებული `transcript` ან გაწვდილი `audioTranscript`), დაცვის სისტემა აღნიშნავს მას `videoBridgeObserved` და წარმოგიდგენთ წაშლილ ჩრდილს ვიდეო აღწერის — იდენტური წარმოჩენა, რომელშიც თითოეული კუს თავისუფალი ტექსტის სხეული შეიცვლება `"[redacted-video-transcript]"`, რომელიც შექმნილია სტრუქტურირებული კუ ველის ჩანაცვლებით სანამ სტრინგი შეიკრიბება (არასოდეს გაწვდილი ტექსტის გაწვდვით, ასე რომ არანაირი კუს შინაარსი — როგორც მტრული, ისე ჩვეულებრივი, მათ შორის სხეულები, რომლებიც შეიცავს `]`, როგორიცაა `"[inaudible]"`/`"[music]"` — ვერ გადარჩება). შენახული ზარის ლოგის მოთხოვნის სხეული ცვლის თითოეულ ვიდეო-დამზადებულ ტექსტურ ნაწილს ამ წაშლილი ჩრდილით, შინაარსის თანხვედრით; `fullText` ანკორი კვლავ იკითხება დასრულებული წინასწარი ზარის დაცვის ტვირთიდან, ასე რომ, შესაბამისობა კვლავ წარმატებულია მოგვიანებით ჯაჭვის დაცვის სისტემების (PII და სერტიფიკატების დამალვა, პრიორიტეტები 10/95) აღწერის ტექსტის ადგილზე გადაკეთების შემდეგ და სისტემური სიგნალის/გადაცემის/მეხსიერების ინექციის შემდეგ შეტყობინების მასივის ფორმის შეცვლის შემდეგ. სხეული, რომელიც მოდის მოდელზე, უცვლელია. დაკვირვებული მოთხოვნა ასევე არ ავსებს მდგრად მეხსიერებას (ორივე მოთხოვნისა და პასუხის მიღებული ექსტრაქცია გამოტოვებულია), ამიტომ მოდელის საკუთარი პასუხი ვერ ასახავს ტრანსკრიპტის ტექსტს მეხსიერებაში.

**ნედლი ვიდეო ველები (#12430).** როდესაც ხიდი ჩართულია და ადგილობრივი ვიდეო მხარდაჭერა უცნობია ან არ არის, განსაზღვრული `transcript`/`audioTranscript` ველები ასევე აქტივირებენ `videoBridgeObserved`, თუნდაც აღწერის ჩავარდნის ან `maxVideos` ლიმიტის შემდეგ. `null` და ცარიელი სტრინგები ითვლება; არარსებული ველები და არ-video მეტადატა არ ითვლება. შენახული ასლები წაშლის ამ ველებს ან გამოტოვებს მოთხოვნას, და კეშები/მეხსიერება გამოტოვებულია. მიმწვდელის ტვირთი უცვლელია.

დამატებითი შენახული ასლები იყენებენ იმავე დაკვირვებული მოთხოვნის სიგნალს. ნედლი წინასწარი დაცვის მომხმარებლის მოთხოვნის სნაპშოტი, მეხსიერებაში მოლოდინში არსებული მოთხოვნა და ადრეული უარყოფილი მოთხოვნის ლოგი სტრუქტურულად ცვლის ტრანსკრიპტის ველებს ვიდეო ნაწილებში; სტრინგის პრომპტები, რომლებიც სინთეზირებულია მილსადენის ეტაპებზე და კონტექსტის გადაცემით, წაშლილია შენახული მოთხოვნის სხეულის ჩასადებით. შენახული `video_content_removed` მარკერი იწვევს `previous_response_id` გაგრძელების ჩავარდნას დახურული, ნაცვლად იმისა, რომ აღადგინოს ტექსტი, რომელიც განზრახ იყო გადაყრილი. თუ დაკვირვებული მოთხოვნა კარგავს თავის ნაწილობრივ წაშლილ ჩრდილს ლოგირების წინ, ან თუნდაც რამდენიმე ვიდეო ჩრდილი ვერ შეესაბამება მოგვიანებით მოთხოვნის მუტაციების შემდეგ, შენახული მოთხოვნის სხეული მთლიანად გამოტოვებულია, ნაცვლად იმისა, რომ შენარჩუნდეს ნაწილობრივ წაშლილი ტრანსკრიპტი.

შესაძლო მოთხოვნისთვის, მოდელის პასუხი შეიძლება ციტირებდეს ტრანსკრიპტის ნებისმიერ ნაწილს სტრუქტურირებული სიგნალის საზღვრის გარეშე. მისი შენახული ზარის ლოგი `responseBody` ამიტომ შეიცვლება გამოტოვების მარკერით; დეტალური pipeline არტეფაქტი (რომელიც შეიძლება მოიცავდეს ზემოთ/კლინენტის სხეულებს და ნაკადების ნაწილებს) არ ინახება. სემანტიკური, იდემპოტენტური და დასაბრუნებელი ლოგიკის კეშები გვერდს უვლიან იმ მოთხოვნის წაკითხვას და წერის პროცესს. პროვაიდერის მოთხოვნა და კლინენტისთვის ხილული პასუხი უცვლელი რჩება. ადრე შენახული ბაიტები დროებით ბუფერში იწურება, როდესაც დეტალური არტეფაქტი გამოტოვებულია. Kiro-ს არასწორი EventStream გაფრთხილება მხოლოდ payload-ის ბაიტების რაოდენობას იუწყება, არასდროს მის შინაარსს ან JSON პარser-ის خام خطأ.

ეს არ ნიშნავს, რომ ყველა უკავშირდებადი პროვაიდერის/პლაგინის დიაგნოსტიკა აუდიტი ჩაუტარდა; უფრო ფართო შენახული სინგლის გაწმენდა #11658-შია გაწვდილი.

შიდა `/api/modality-bridge/video/drilldown` ციკლის სიცოცხლე არის ცალკე, ლუპბექი/ტოკენ-ავტორიზებული კეშის სუბსტრატი. ყოველი ოპერაცია ასევე მოითხოვს კანონიკურ მუქი პრინციპის ID-ს. სანამ წარმოების გამწვდელი ჩართულია, ის უნდა წარმოადგინოს ეს ID ავტორიზებული ქირით და არასდროს უნდა გადმოსცეს კლინენტის მიერ არჩეული მნიშვნელობა. კეშის გასაღებები აკავშირებს ამ პრინციპს კანონიკურ სესიასა და ვიდეო-რეფერენს ID-ებთან, ინახავს მხოლოდ მათ SHA-256-ით მიღებულ გასაღებებს და ორივე წაკითხვას და წაშლას იმავე პრინციპზე აჩერებს. კეში ინახავს მაქსიმუმ 16 მიღებულ JPEG ჩარჩოს თითო ჩანაწერში, ვადა გასდის ათ წუთში და მხარს უჭერს შეზღუდულ `start`/`end` წაკითხვებს ან ექსპლიციტურ სესიის წაშლას.

ყოველი პრინციპი შეზღუდულია 16 ჩანაწერით და 64 MiB კანონიკური JPEG მონაცემებით. ეს შეზღუდვები დამოუკიდებელია გლობალური 64 ჩანაწერის/256 MiB ჭერისგან: პრინციპის კვოტის წნევა მხოლოდ იმ პრინციპის ყველაზე ცოტა გამოყენებული ჩანაწერების გაწვდას იწვევს, სანამ გლობალური LRU გაწვდვა განიხილება. ვადის გასული ჩანაწერები გაწმენდილია როგორც პრინციპის, ისე გლობალური ანგარიშიდან კეშის აქტივობის დროს, ხოლო გაუქმება და ვალიდაციის წარუმატებლობა არ ახდენს ნაწილობრივი ჩანაცვლების განხორციელებას.

კეში უარყოფს არაკანონიკურ Base64-ს, ზედმეტ პადინგს, არ-JPEG მედია, არასწორ ან გაწვდილი JPEG-ებს და JPEG-ებს, რომლებიც გაფრთხილებას იწვევენ შეზღუდული სრული გამოსახულების `sharp` დეკოდირების დროს. ის თითოეულ მიღებულ გამოსახულებას კანონიკურ JPEG-ად გარდაქმნის, განიხილავს სიგანეს და სიმაღლეს დეკოდირებული ბაიტებიდან, ნაცვლად იმისა, რომ ენდოს გამწვდელის ველებს, და უგულებელყოფს ნებისმიერი ბოლო პოლიგლოტ ბაიტები, ნაცვლად იმისა, რომ შეინახოს ისინი. მხოლოდ შეზღუდული კანონიკური კომპრესირებული ბუფერი იწერს ორივე კვოტას. JSON ვაირ ლიმიტი მოიცავს Base64-ს ზედმეტ ხარჯებს 32 MiB დეკოდირებული-შედეგის ჭერისთვის. ყოველი შენახული წარმოება აღრიცხავს მის ვალიდირებულ JPEG ფორმატს/გარჩევას, ნიმუშის პოლიტიკას, წარმოების ვერსიას, შექმნის დროს, სერვერის მიერ გამოთვლილი შინაარსის ჰეშს და ჰეშირებულ მშვენიერ რეფერენს პლუს ნდობით აღჭურვილი გამწვდელის მშვენიერი შინაარსის ჰეშს. გაუქმება შემოწმდება ასინქრონული დეკოდირების/ჰეშირების ფაზებს შორის, სანამ ატომური კეშის კომიტეტი არ განხორციელდება.

წარმოების პროდიუსერი უკვე მიღებულ ბროკერ ჩარჩოებს მხოლოდ წარმატებული ვიზუალური ანალიზის შემდეგ იყენებს, მეორე ვიდეოს ჩამოტვირთვის/გამოწერის გარეშე. ეს მოითხოვს ოპერატორის `modalityBridgeVideoDrilldownEnabled=true`, მკაცრ ნაწილობრივ `drilldown: true` და ავტორიზებული API-კი ჩანაწერის ID-ს. კლინენტის მიერ გამოცხადებული პრინციპის/სესიის მნიშვნელობები არასდროს ადგენს საკუთრებას. ამ სამივე პირობების გარეშე ის არ ჰეშირდება, არ ზომავს და არ ინახავს დამატებით ჩარჩოებს. შენახვის წარუმატებლობა ინარჩუნებს გამოსაყენებელ ვიზუალურ პასუხს. თანხმობით მოთხოვნები გვერდს უვლიან მთელ ვიდეოს შედეგების კეშს, ამიტომ კეშირებული შედეგები არასდროს იმეორებს ხელებს.

წარმატებული JSON და SSE პასუხები მაქსიმუმ ოთხ მუქი ხელის გამოჩენას ახდენენ შეზღუდულ `x-omniroute-video-drilldown` სათაურში. ავტორიზებული ბრაუზერის წარმოშობები შეუძლიათ წაიკითხონ ეს სათაური CORS წარმოშობის პოლიტიკის გაფართოების გარეშე. ახალი ხელები იყენებენ `v1.<32-byte random base64url token>`, და რეგისტრაცია ინახავს მხოლოდ მათ SHA-256 ჰეშებს. მკითხველი/სათაურის პარსერი ასევე იღებს მემკვიდრეობით 64-ჰექს ტოკენებს. ავტორიზებული საჯარო მომხმარებელი არის `GET /api/v1/video-bridge/drilldown?handle=...`, დამოუკიდებლად გაწვდილი `modalityBridgeVideoDrilldownRemoteEnabled=true`. ექსპლიციტურად შენახული სიცრუე აუქმებს წვდომას მაშინაც კი, როდესაც მემკვიდრეობითი `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` envFallback ჩართულია. წარმოების შენახვას აქვს ანალოგიური მემკვიდრეობითი `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. ორივე fallback-ის დეფოლტი არის გამორთული.

მომხმარებელი იღებს საკუთრებას ავტორიზებული გასაღებიდან, იყენებს გასაღების პოლიტიკას და აბრუნებს იმავე 404-ს უცნობ, ვადის გასულ და სხვა გასაღების ხელებისთვის. ის იღებს `variant=preview|standard|detail` (მაქსიმალური JPEG განზომილება 320/640/1280, არასდროს გაზრდილი), `limit=1..8` (ან მემკვიდრეობითი `frames` ალიასი, არასდროს ორივე), ნულიდან დაწყებული `page`, და optional `start`/`end` ფოკუსის წამები. დუბლირებული
მოთხოვნის გასაღებები და პირიქით ფოკუსის ფანჯრები უარყოფილია. თითოეული დაბრუნებული ვარიანტი აქვს თავისი რეალური შინაარსის და რეალური გარჩევის მეტა-დატვირთვა, დაკავშირებული შენახულ წყაროსთან. ვარიანტები წარმოიქმნება წაკითხვის დროს, ნაცვლად იმისა, რომ ინახებოდეს როგორც დამატებითი შენახული ასლები. JSON პასუხი, რომელიც მოიცავს Base64/კონვერტორს, შეზღუდულია 32 MiB-ზე; ზედმეტი გვერდი აბრუნებს 413-ს და კლინენტი უნდა მოითხოვოს ნაკლები ჩარჩოები. წაკითხვები შემოწმებენ გაუქმებას თითოეულ ზომაზე და ხელის ვალიდურობას კვლავაც გადაამოწმებენ დაბრუნების წინ. `DELETE` მფლობელის მიერ არის იდემპოტენტური; წაშლა ან TTL ვადის გასვლა უშვებს შენახულ წყაროს და გამოყენების ანგარიშს.

გაზიარებული მაღაზია პროცეს-ლოკალურია: ხელები ვადის გასვლის შემდეგ იწურება და არ არის გადაცემული დამოუკიდებელ OmniRoute პროცესებს შორის. მართვის სტატისტიკა აჩვენებს ეფექტურ შენახვას/მრავალფეროვან პოლიტიკას და აგრეგატულად შენახულ ჩანაწერებს/ბაიტებს მხოლოდ, არასდროს მედია, რეფერენციები, პრინციპის ID-ები ან ხელები. ვიდეოს პარამეტრების პანელი აჩვენებს ამ მნიშვნელობებს და შეუძლია შეინახოს ორივე თანხმობის გადართვა. ეს განხორციელების დოკუმენტაცია არ არის ცოცხალი განთავსების ან პოპულარიზაციის მტკიცებულება; რეალური მოდელის მიღება ცალკე არის გაწვდილი.

ფრეიმები თანმიმდევრულად არის გაწვდილი კონფიგურირებული ვიდეო მოდელით. ცარიელი ვიდეო გადამწყვეტი მემკვიდრეობას იღებს ვიზიონის პარამეტრიდან; თუ ორივე ცარიელია, ვიზიონის ავტომატური მარშრუტიზატორი ირჩევს ეფექტურ ვიზიონზე მომუშავე მოდელს. წარმატებული წარწერები ცვლიან ორიგინალურ ნაწილს სტაბილური `[Video description:` პრეფიქსით, რომელიც ასევე აღნიშნავს ტექსტს როგორც არამტკიცებულ მედია-დამოკიდებულ დაკვირვებას და ამბობს ქვედა მოდელებს, რომ არ მიჰყვნენ მედია-ში აღმოჩენილ ინსტრუქციებს. ფრეიმ-წარწერის კეშის გასაღებები მოიცავს JPEG ბაიტებს, პრომპტს, დროის ნიშნულს და ეფექტურ მოდელს; მხოლოდ წარმატებული წარწერები ინახება კეშში. კეშის ჩანაწერები ინარჩუნებენ რეალურ წარმატებულ პროდიუსერ მოდელს, მათ შორისFallback მოდელს; ხიდი იტყობინება `mixed`, როდესაც სხვადასხვა ფრეიმები წარმოიქმნება სხვადასხვა მოდელების მიერ. კეშის ჰიტი ხელახლა იყენებს იმ პროდიუსერის იდენტობას, ნაცვლად იმისა, რომ კვლავ დაარქვას ის მოთხოვნილი მარშრუტიზაციის გეგმა. მთლიანი ვიდეო შედეგების კეში არის გასაღებული ყოველ იმ შესავალზე, რომელიც ცვლის შედეგს — პრომპტი, ეფექტური მოდელი, ნიმუშების პოლიტიკა, ფრეიმების რაოდენობა, სემანტიკური ანალიზის რეჟიმი, ნორმალიზებული ფოკუსის მინიშნება SHA-256 თითის ანაბეჭდი, ფოკუსის ფანჯარა, `transcript`, `audioTranscript`, და კონტაქტ-შიდა დროშა — ამიტომ ნებისმიერი იმ განზომილების შეცვლა არის კეშის მარცხი, არასოდეს ძველი ხელახლა გამოყენება. ვიზუალური დედუპ პოლიტიკის ვერსია, ზღვრები და შეზღუდული კანდიდატ-ფრეიმების რაოდენობა ასევე არის აშკარა შედეგების კეშის გასაღებში და მეტადატაში; პოლიტიკის ცვლილება, შესაბამისად, ვერ გამოიყენებს ძველ მთლიანი ვიდეო აღწერას. შედეგების კეშის v4 მეტადატა ინარჩუნებს რეჟიმსა და თითის ანაბეჭდს, არასოდეს خامი მომხმარებლის დავალებას. გარე მეტადატა იტყობინება როგორც მოთხოვნილ, ასევე ეფექტურ ანალიზის რეჟიმებზე; მოთხოვნილი `focused` რეჟიმი, როდესაც არ არის გამოყენებადი მომხმარებლის ტექსტი, იტყობინება როგორც ეფექტურად `full`.

გარე მექანიზმი extracts ყველა მხარდაჭერილი ვიდეო ნაწილს, მაგრამ აღწერს არა მეტ `modalityBridgeVideoMaxVideos`. მიზანზე, რომელიც დადასტურებულია, რომ აქვს `supportsVideo === false`, წარუმატებელი და ზედმეტი ვიდეოები ხდება აშკარა უსაფრთხო ტექსტური მარკერები, ასე რომ არ არსებობს خامი ვიდეო. როდესაც შესაძლებლობა უცნობია, ეს ნაწილები რჩება დაუზიანებელი. მიზნები, რომლებსაც აქვთ `supportsVideo === true`, გვერდს უვლიან ხიდს. კლიენტის მოთხოვნის გაწყვეტის სიგნალი გავრცელდება ჩამოტვირთვაში, ბროკერის რიგში, სუბპროცესებში და წარწერის ზარებზე; გაწყვეტები შეჩერდება ვიდეოებს შორის და არასოდეს გახდება ღია خامი მედიისთვის.

რეგისტრაციის პარამეტრები არის DB-ით მხარდაჭერილი და Zod-ით ვალიდირებული:

| გასაღები                            | ნაგულისხმები | დიაპაზონი / ქცევა                                                                                       |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`      | სავალდებულო რეგისტრაცია, ოპტ-ინ                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` ინარჩუნებს ზოგად წარწერებს; `focused` იყენებს შეზღუდულ, არამტკიცებულ ბოლო-მომხმარებლის კონტექსტს |
| `modalityBridgeVideoModel`          | `""`         | მემკვიდრეობას იღებს ვიზიონის ხიდის მოდელს                                                               |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                    |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware`, ან პროპორციული `segment_aware`; დეტექტორის წარუმატებლობა გადადის `uniform`-ზე |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                     |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                          |

ძველი შენახული ვიდეო დროის მნიშვნელობები 120 წამზე ზემოთ არის შეზღუდული ბროკერის ვადის მიხედვით; ახალი პარამეტრების წერა ამ ზღვარზე ზემოთ უარყოფილია. `GET /api/modality-bridge/video/runtime` მოითხოვს ნდობით აღჭურვილი შტამპირებული ლუპბექი ადგილმდებარეობას ავტორიზაციის ან რეგისტრაციის პრობირების წინ, შემდეგ მოითხოვს მართვის ავტორიზაციას. იგი აბრუნებს მხოლოდ `available`, გაწმენდილი FFmpeg/ffprobe ვერსიებს და ფიქსირებულ მიზეზს, როდესაც რეგისტრაცია არ არის ხელმისაწვდომი. შიდა ექსტრაქციის წერტილი არ არის საჯარო ატვირთვის API: რიგის გაჯერება აბრუნებს `503` პლუს `Retry-After`, გამსწორებელი გაწყვეტა აბრუნებს `499`, და ფიქსირებული ბროკერის ვადა აბრუნებს `504`. გარდაქმნილი პასუხები ამატებენ `video->text;model=<visionModel>;parts=<videos>` ცენტრალურ `x-omniroute-modality-bridge` სათაურის გარეშე ვიზიონის ან აუდიოს სექციების ამოღების.

### PII Masker (`piiMasker.ts`)

მუშაობს **ორივე** ეტაპზე.

- **`preCall`** კლონავს დატვირთვას, გადის `system`, `messages`, `input`, და `prompt` (მათ შორის უბრალო სტრინგის ელემენტები), და იყენებს `processPII()` (განაცხადიდან `@/shared/utils/inputSanitizer`) სტრინგ `content`/`text` ველებზე. როდესაც `PII_REDACTION_ENABLED=true`, აღმოჩენილი PII არის წაშლილი გასვლის დატვირთვაში. ეს არის დამოუკიდებელი `INPUT_SANITIZER_MODE`-დან (რომელიც მხოლოდ კონტროლირებს პრომპტ-ინექციის პოლიტიკას). როდესაც წაშლა გამორთულია, ზარი აღრიცხავს აღმოჩენის რაოდენობებს, მაგრამ არ წერს შინაარსს.
- **`postCall`** ღრმად კლონავს პასუხს, ატარებს `sanitizePIIResponse()` და პასუხების API-ის ფორმის მარკერს (`maskResponsesOutput` — მოიცავს `output_text` და `output[].content[].text`). თუ რაიმე წაშლა ხდება, შეცვლილი პასუხი ცვლის ორიგინალს.

გარე მექანიზმი არასოდეს ბლოკავს; იგი მხოლოდ ანოტირებს (`meta.detections`, `meta.redacted`) ან წერს თავიდან.

### Prompt Injection (`promptInjection.ts`)

აღმოაჩენს მტრულ სტრუქტურებს მომხმარებლის მიერ მიწვდილი შინაარსში და ახორციელებს კონფიგურირებულ პოლიტიკას. ქცევა მართვულია გარემოს ცვლადებით და კონსტრუქტორის პარამეტრებით:

| პარამეტრი          | გარემოს ცვლადი                                                                                                  | ნორმა  | ეფექტი                                                                                                                                                                                |
| ------------------ | --------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ჩართული            | `INPUT_SANITIZER_ENABLED`                                                                                       | `true` | როდესაც `false`, დაცვა მოკლდება.                                                                                                                                                      |
| რეჟიმი             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                                 | `warn` | ინექციის პოლიტიკა: `block`, `warn`, ან `log`. (`redact` მიღებულია უკუკავშირისათვის, მაგრამ არ შლის ინექციის ტექსტს; მოთხოვნის PII გადაკეთება კონტროლდება `PII_REDACTION_ENABLED`-ით.) |
| ბლოკირების ზღვრები | `blockThreshold` პარამეტრი / `INPUT_SANITIZER_BLOCK_THRESHOLD` (ალტერნატიული `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | მინიმალური სერიოზულობა საჭირო ბლოკირებისთვის. საშუალო მხოლოდ დაკვირვების რეჟიმშია ნორმალურად.                                                                                         |

**რეჟიმის პრიორიტეტი** (`getMode`): გამიძახებლის `options.mode` →
`INJECTION_GUARD_MODE` **DB ფუნქციის დროშის გადაფარვა** (Dashboard → პარამეტრები →
ფუნქციის დროშები) → `INJECTION_GUARD_MODE` გარემო → `INPUT_SANITIZER_MODE` გარემო →
`warn`. შესაბამისად, Dashboard-ის გადაფარვა უფრო ძლიერია გარემოს ცვლადებზე, ამიტომ ფუნქციის დროშების UI მართავს მიმდინარე დაცვას პირდაპირ (რესტარტის გარეშე). DB-ის წაკითხვა უსაფრთხოა:
თუ შეცდომა ხდება, დაცვა გადადის გარემოზე დაფუძნებულ ქცევაზე, და როდესაც არ არის
გადაფარვა, ქცევა იდენტურია მხოლოდ გარემოს გადაწყვეტასთან.

აღმოჩენის წყაროები:

1. `sanitizeRequest()` `@/shared/utils/inputSanitizer`-დან (გადაწვდილი დეტექტორი
   სხვა ადგილებში გამოყენებული).
2. მშვენიერი `DEFAULT_GUARD_PATTERNS` (ამჟამად `system_override_inline` და
   `markdown_system_block`, ორივე `high` სერიოზულობა).
3. სავალდებულო `customPatterns`, რომელიც გადაეცემა კონსტრუქტორის პარამეტრებით (სტრინგები, რეგულარული გამოხატულებები,
   ან `{ name, pattern, severity }` ჩანაწერები).

როდესაც `mode === "block"` **და** მინიმუმ ერთი აღმოჩენა აკმაყოფილებს სერიოზულობის
ზღვარს, `preCall` აბრუნებს `{ block: true, message: "მოთხოვნა უარყოფილია:
შეუმჩნეველი შინაარსი აღმოჩენილი" }`. `warn`/`log` რეჟიმებში დაცვა ლოგავს, მაგრამ
შეგიძლიათ გააგრძელოთ ზარი. საერთო დამხმარე `evaluatePromptInjection()` ასევე ექსპორტირდება
გამიძახებლებისთვის, რომლებსაც სჭირდებათ პრომპტების შეფასება რეგისტრაციის გავლით.

**სკანირების საზღვარი (v3.8.20):** დეტექტორი მხოლოდ ინსპექტირებს **პირველ 16 KB**-ს
ერთიან პრომპტ ტექსტში — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 ბაიტი)
`src/shared/utils/inputSanitizer.ts`-ში. როგორც `detectInjection()` ასევე
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)`-ს იყენებს
პატერნის ციკლის გაშვების წინ. ინექციის დირექტივები ყოველთვის მდებარეობს
შესახებ, ამიტომ ეს აკონტროლებს რეგულარულ გამოხატულებებს CPU/GC-ზე მრავალ ასეულ KB
ტვირთებზე, რაც არ ასუსტებს აღმოჩენას (შეხედეთ #3932, #4041).

### სერტიფიკატის დამალვა (`credentialMasker.ts`)

მუშაობს **ორივე** ეტაპზე, ბოლო ნორმალურ ჯაჭვში (პრიორიტეტი `95`). შლის
კარგად ცნობილი API-კი / საიდუმლო-ტოკენის პატერნებს გამოსულ ტვირთში (მესიჯის
შინაარსი, ინსტრუმენტის ზარის არგუმენტები, ინსტრუმენტის შედეგები) **და** პროვაიდერის პასუხში, ასე რომ
სერტიფიკატი, რომელიც პრომპტში არის ჩასმული (ან ინსტრუმენტის შედეგით დაბრუნებული), არ გაჟონება
ზემოთ პროვაიდერისთვის ან უკან კლიენტისთვის.

- **მხოლოდ არჩევითი**, იგივე კონვენცია როგორც PII-ის დამალვა (Hard Rule #20-ს მიმდებარე):
  გამორთულია, თუ არა `settings.credentialRedactionEnabled === true` **ან**
  `CREDENTIAL_REDACTION_ENABLED=true`. როდესაც გამორთულია, დაცვა არ მოქმედებს —
  არასოდეს ბლოკავს და არასოდეს გადაკეთებს.
- `redactCredentials()` გადის სრულ ტვირთზე/პასუხის ხეზე (`walkValue()`,
  პროტოტიპის დაბინძურების უსაფრთხო, ციკლის უსაფრთხო `WeakSet`-ის მეშვეობით) და შეცვლის
  შესაბამისობას `[REDACTED:<type>]` ადგილმდებარეობით, მხოლოდ იმ შტოებს კლონირებს, რომლებიც მართლაც
  შეიცვალა.
- `CREDENTIAL_PATTERNS` მოიცავს LLM პროვაიდერის გასაღებებს (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS ტოკენებს (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), გადახდის გასაღებებს (Stripe, Square), ღრუბლის
  გასაღებებს (AWS წვდომის გასაღები, Twilio, SendGrid, Mailgun), კერძო გასაღებები / JWT-ები,
  სერტიფიკატების შემცველი კავშირების სტრიქონები (`mongodb://user:pass@...`, და ა.შ.), და
  ზოგადი `Authorization`/`x-api-key`/`api-key`/`apikey` სათაურის ღირებულების
  პატერნი. სათაურის ფორმის გასაღებები (`authorization`, `x-api-key`, `api-key`,
  `apikey`) სტრუქტურულად შლილია (ღირებულება მხოლოდ, სქემის წინასწარი ნაწილი, როგორიცაა
  `Bearer `/`Basic ` შენარჩუნებულია) ნაცვლად ზოგადი ტექსტური რეგულარული გამოხატულების მეშვეობით.
- დაცვა არასოდეს ბლოკავს; მხოლოდ გადაკეთებს (`modifiedPayload` /
  `modifiedResponse`) და ანოტაციას (`meta.credentialsRedacted`, `meta.count`).

რეგრესიული დაცვა: `tests/unit/credential-masker-guardrail.test.ts`.

## ბაზის კონტრაქტი (`base.ts`)

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
  block?: boolean; // true მოკლედ აჩერებს ჯაჭვს
  message?: string; // გამოჩნდება როდესაც ბლოკირებულია
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // დაბრუნებულია preCall-ით მოთხოვნის გადაკეთებისთვის
  modifiedResponse?: TValue; // დაბრუნებულია postCall-ით პასუხის გადაკეთებისთვის
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

გარდრაილი "არანაირი ცვლილება" სიგნალს აძლევს `void`, `{}`, ან
`{ block: false }` დაბრუნებით. `modifiedPayload`/`modifiedResponse` დაბრუნება
ცვლილებას ახდენს ჯაჭვში მიმდინარე მნიშვნელობაზე ქვემოთ მდებარე გარდრაილებისთვის.
`signal?: AbortSignal` გადატანს გამიძახებლის სიცოცხლის ციკლს გარდრაილებში. მოთხოვნის გაწყვეტა არის განზრახი წარუმატებელი გამოტოვების გამონაკლისი: მედია ხიდები წყვეტენ მუშაობას და წმენდას, არ აღადგინებენ ნედლ მედია მიზანზე, რომელიც ცნობილია, რომ არ უჭერს მხარს.

## რეგისტრატორი (`registry.ts`)

სინგლტონი `guardrailRegistry` აჩვენებს:

- `register(guardrail)` — ამატებს (ან ცვლის ნორმალიზებული სახელით) გარდრეილს და
  ხელახლა ალაგებს ზრდადი `priority`-ის მიხედვით.
- `clear()` / `list()` — ადმინისტრაციული დამხმარეები.
- `runPreCallHooks(payload, context)` — ახდენს აქტიური გარდრეილების იტერაციას,
  გადასცემს `payload`-ს `modifiedPayload`-ის გავლით და ჩერდება პირველ `block: true`-ზე.
- `runPostCallHooks(response, context)` — იგივე ნაკადი პასუხის მხარეს.
- `resetGuardrailsForTests({ registerDefaults })` — ასუფთავებს მდგომარეობას და სურვილისამებრ
  ხელახლა არეგისტრირებს ნაგულისხმევ პარამეტრებს ტესტის სუფთა იზოლაციისთვის.

ორივე რანერი აბრუნებს `{ blocked, payload|response, results, guardrail?, message? }`-ს,
სადაც `results` არის `GuardrailExecutionResult` ჩანაწერების მასივი, რომელიც მოიცავს
თითოეული გარდრეილის `blocked`, `skipped`, `modified`, `error` და `meta` ველებს,
რაც სასარგებლოა ტრეისინგისთვის.

### გარდრეილების გამორთვა თითო მოთხოვნაზე

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` აგროვებს
გარდრეილების სახელების დედუპლიცირებულ სიას, რომლებიც უნდა გამოტოვებულ იქნას
მიმდინარე მოთხოვნისთვის. წყაროები (ყველა არასავალდებულო, ყველა გაერთიანებულია):

- `apiKeyInfo.disabledGuardrails`
- მოთხოვნის სხეული `disabledGuardrails` (ზედა დონის)
- მოთხოვნის სხეული `metadata.disabledGuardrails`
- ჰედერი `x-omniroute-disabled-guardrails` (ან მოძველებული
  `x-disabled-guardrails`)

მნიშვნელობები შეიძლება იყოს სტრიქონების მასივები ან მძიმით გამოყოფილი სტრიქონი;
სახელები ნორმალიზდება პატარა ასოებით kebab-case-ში (`pii_masker` → `pii-masker`).
შედეგი გადაეცემა `context.disabledGuardrails`-ის გავლით რეგისტრატორს,
რომელიც გამოტოვებს შესაბამის გარდრეილებს (`skipped: true` `results`-ში).

## შესრულების თანმიმდევრობა

ყოველი მოთხოვნისთვის, რომელიც გადის `src/sse/handlers/chat.ts`-სა და `open-sse/handlers/chatCore.ts`-ის გავლით:

1.  `resolveDisabledGuardrails(...)` აგებს გამოტოვების სიას API გასაღებიდან, სხეულიდან და სათაურებიდან.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` ასრულებს დამცავ მექანიზმებს პრიორიტეტის ზრდადი თანმიმდევრობით:
    - გამორთული დამცავი მექანიზმები აღირიცხება როგორც `skipped`.
    - თითოეული დამცავი მექანიზმის `preCall`-მა შეიძლება გადაწეროს მონაცემთა პაკეტი `modifiedPayload`-ის მეშვეობით.
    - პირველი `block: true` წყვეტს ჯაჭვს და დამმუშავებელი აბრუნებს დამცავი მექანიზმის უარყოფის პასუხს.
3.  (პოტენციურად გადაწერილი) მონაცემთა პაკეტი მიედინება კომბინირებულ მარშრუტიზაციასა და ზედა დინების გაგზავნაში.
4.  პასუხის აწყობის შემდეგ, `guardrailRegistry.runPostCallHooks(...)` აწარმოებს იმავე ჯაჭვს პასუხზე. `block: true` აქ აგდებს ზედა დინების პასუხს.

დამცავი მექანიზმები, რომლებიც შეცდომას აგდებენ, აღირიცხება `error: <message>`-ით და აღინიშნება `logger.warn`-ის მეშვეობით, მაგრამ ჯაჭვი გრძელდება — დიზაინით ღიაა წარუმატებლობისთვის.

## კონფიგურაცია

ჩაშენებული დამცავი მექანიზმების მიერ წაკითხული გარემოს ცვლადები:

| ცვლადი                                | გამოიყენება                 | ეფექტი                                                                                                      |
| :------------------------------------ | :-------------------------- | :---------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | დააყენეთ `false` გამოვლენის სრულად გამორთვისთვის.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | ინექციის პოლიტიკა: `warn`, `block`, ან `log`. მოძველებული მნიშვნელობა `redact` არ გადაწერს ინექციის ტექსტს. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | რეჟიმი ინექციის დამცავისთვის; ასევე DB ფუნქციის დროშა, რომელიც **გადაფარავს** გარემოს ცვლადებს (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | მინიმალური სიმძიმე, რომელსაც `MODE=block` უარყოფს: `high` (ნაგულისხმევი), `medium`, ან `low`.               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | მოძველებული ფსევდონიმი `INPUT_SANITIZER_BLOCK_THRESHOLD`-ისთვის.                                            |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | როდესაც `true`, მოთხოვნის PII რედაქტირდება (ინექციის რეჟიმისგან დამოუკიდებლად).                             |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (ქვედა დინება) | აკონტროლებს პასუხის მხარის ნიღბის ქცევას.                                                                   |

Modality Bridge-ის დამცავი მექანიზმები კითხულობენ გაშვების კონფიგურაციას DB-ზე დაფუძნებული პარამეტრების საცავიდან (`getSettings()`), და არა გარემოს ცვლადებიდან. Vision-ის ძირითადი გასაღებებია `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, და `modalityBridgeCacheMaxEntries`. მოძველებული `visionBridge*` გასაღებები მიიღება მხოლოდ როგორც დოკუმენტირებული ერთციკლიანი წაკითხვის სარეზერვო ვარიანტი; დაფის ჩანაწერები იყენებენ ძირითად გასაღებებს. ნაგულისხმევი მნიშვნელობები და სარეზერვო გადამწყვეტი განთავსებულია `src/shared/constants/modalityBridgeDefaults.ts`-ში, მოძველებული კონსტანტები შენარჩუნებულია `src/shared/constants/visionBridgeDefaults.ts`-ში.

აუდიო იყენებს `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout`, და `modalityBridgeAudioMaxClips`, პლუს გაზიარებულ `modalityBridgeCache*` პარამეტრებს. აუდიოს არ აქვს მოძველებული გასაღების სარეზერვო ვარიანტი, რადგან ეს გასაღებები შემოღებულ იქნა Modality Bridge სქემასთან ერთად.

ვიდეო იყენებს `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos`, და `modalityBridgeVideoTimeout`, პლუს გაზიარებულ `modalityBridgeCache*` პარამეტრებს. ის ნაგულისხმევად გამორთულია, რადგან FFmpeg/ffprobe არის არჩევითი ოპერაციული დამოკიდებულებები და კადრების წარწერა ზრდის შეყოვნებასა და მოდელის ღირებულებას.

## მორგებული Guardrails

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

ნაბიჯები:

1.  შექმენით `src/lib/guardrails/myGuardrail.ts`, რომელიც აფართოებს `BaseGuardrail`-ს.
2.  განახორციელეთ `preCall` და/ან `postCall`.
3.  ან დაარეგისტრირეთ იმპორტის დროს (`registerDefaultGuardrails`-დან დამატებით) ან გამოიძახეთ `guardrailRegistry.register(...)` გაშვების დროს — რეესტრი ჩაანაცვლებს ნებისმიერ წინა guardrail-ს იგივე ნორმალიზებული სახელით.
4.  დაამატეთ ტესტები `tests/unit/`-ში (არსებული მაგალითები: `tests/unit/guardrails-registry.test.ts`, `tests/unit/prompt-injection-guard.test.ts`, `tests/unit/guardrails/visionBridge.test.ts`).

## ტესტირება

გამოიყენეთ `resetGuardrailsForTests()` ტესტებს შორის, რათა დაიწყოთ ცნობილი მდგომარეობიდან. გადაეცით `{ registerDefaults: false }`, რათა დაიწყოთ ცარიელი რეესტრით და დაარეგისტრიროთ მხოლოდ ტესტირებადი guardrails. Vision Bridge იღებს დამოკიდებულების ინექციას (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge აჩვენებს ექვივალენტურ წერტილებს პარამეტრებისთვის, შესაძლებლობებისთვის, STT მოდელის არჩევისთვის, სერთიფიკატების შემოწმებისთვის და ტრანსკრიფციისთვის. ამიტომ, ტესტებს შეუძლიათ ორივე ნაკადის შემოწმება მონაცემთა ბაზის ან ქსელზე წვდომის გარეშე.

## იხილეთ აგრეთვე

- `src/lib/guardrails/` — იმპლემენტაცია
- `src/shared/utils/inputSanitizer.ts` — გაზიარებული დეტექტორი, რომელიც უზრუნველყოფს prompt-injection-ს და PII-ის ნიღბვას
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge-ის ნაგულისხმევი პარამეტრები და იძულებითი ხიდის მოდელების სია
- `src/shared/constants/modalityBridgeDefaults.ts` — გაზიარებული Vision/Audio გაშვების ნაგულისხმევი პარამეტრები
- `docs/architecture/RESILIENCE_GUIDE.md` — ორთოგონალური ფენა (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — გარემოს ცვლადების სრული მითითება

## ინექციისგან დამცავი მარშრუტების დაფარვა და წითელი გუნდი (ფაზა 8 · ბლოკი D)

ინექციისგან დამცავი მექანიზმი (`createInjectionGuard` / `withInjectionGuard`) მოიცავს ყველა მარშრუტს, რომელიც იღებს მომხმარებლის მოთხოვნებს. ის ითვალისწინებს `INJECTION_GUARD_MODE`-ს (ნაგულისხმევი `warn` = მხოლოდ ჟურნალი; `block` = აბრუნებს HTTP 400 `SECURITY_001`).

| ტიპი            | მარშრუტები                                                                                                                                           | ნაგულისხმევი რეჟიმი |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Text (existing) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generative      | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Data            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

ტექსტის ამოღება (`extractMessageContents`) მოიცავს `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`-ს.

**წითელი გუნდი (ღამის, `nightly-llm-security.yml`):** promptfoo ამოწმებს, რომ თითოეული მარშრუტი ბლოკავს OWASP-LLM კორპუსს `INJECTION_GUARD_MODE=block` რეჟიმში; garak აწარმოებს ზონდებს (გამოტოვებს საიდუმლოს გარეშე). `moderations` შედის თანმიმდევრულობისთვის — ოპერატორებს ბლოკირების რეჟიმში შეუძლიათ მისი გათავისუფლება `resolveDisabledGuardrails`-ის მეშვეობით.

ღამის სამუშაო პროცესი (`.github/workflows/nightly-llm-security.yml`, cron + ხელით გაშვება) მოიცავს ორ დავალებას:

- **`promptfoo-guard` (ბლოკირება)** — აწარმოებს `promptfoo eval -c promptfooconfig.yaml`-ს `INJECTION_GUARD_MODE=block`-ით. თითოეული მტრული შემთხვევა (მაგ. „უგულებელყავით ყველა წინა ინსტრუქცია…“, DAN-ის სტილის jailbreaks) ადასტურებს, რომ პასუხი შეიცავს `error.code === "SECURITY_001"`, ანუ guard-მა რეალურად უარყო მოთხოვნა.
- **`garak` (საკონსულტაციო)** — აწარმოებს garak `--probes promptinject,dan,leakreplay`-ს ლოკალური OmniRoute ინსტანციის წინააღმდეგ (`http://localhost:20128/v1`). დაცულია პროვაიდერის საიდუმლო გასაღებით (`PROMPTFOO_PROVIDER_KEY`); გამოტოვებს შეცდომის გარეშე და დამატებულია `|| true`, ასე რომ, ის აფიქსირებს CI-ის ჩავარდნის გარეშე.

guard დამხმარის (`createInjectionGuard` / `withInjectionGuard`) დაფარვა მოიცავს ყველა მოთხოვნის შემცველ `/v1` მარშრუტს; მოთხოვნის ტექსტი ამოღებულია `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`-დან `extractMessageContents()` ფუნქციის მიერ `src/shared/utils/inputSanitizer.ts`-ში.
