# Guardrails (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Haqiqatning asosiy manbasi:** `src/lib/guardrails/`
> **Soʻnggi yangilanish:** 2026-08-29 — v3.8.51 (Video Bridge transkriptining kelib chiqishi chaqiruvchi tomonidan eʼlon qilinadi,
> server tomonidan hali tasdiqlanmaydi — #11661 ga muvofiq aniqlashtirildi)

Guardrail’lar OmniRoute va yuqori oqim provayderlari oʻrtasidagi chegarada xavfsizlik, siyosat va kontent oʻzgartirishlarini taʼminlaydi. Har bir guardrail soʻrov yuklamalarini (`preCall`) va yuqori oqim javoblarini (`postCall`) tekshirishi (hamda ixtiyoriy ravishda rad etishi, oʻzgartirishi yoki izoh bilan belgilashi) mumkin.

Tizim **xatoda ochiq qoladi**: agar guardrail bajarilish vaqtida istisno chiqarsa, registr xatoni qayd etadi va soʻrovni muvaffaqiyatsiz yakunlash oʻrniga keyingi guardrail bilan davom etadi. Bloklash tasodif emas, balki aniq qarordir (`block: true`).

## Oʻrnatilgan Guardrails

Ro'yxat avtomatik ravishda import paytida olti ta guardrailni ustuvorlik tartibida yuklaydi
(qarang `registry.ts` → `registerDefaultGuardrails()`):

| Ustuvorlik | Nomi                | Bosqich(lar)   | Fayl                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Pastki ustuvorlik raqamlari **birinchi** bo'lib ishlaydi.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

**Ko'rish modeli** bo'lmagan so'rovlarni qabul qilib, ularni
ko'rish imkoniyatiga ega modelga yo'naltiradi yoki so'rovni
yuqoridagi chaqiruvdan oldin konfiguratsiyalangan ko'rish modeli tomonidan ishlab chiqarilgan matn tavsiflari bilan almashtiradi. Bu matnli ta'minotchilarga
multimodal yuklamalarni shaffof ravishda boshqarishga imkon beradi.

Jarayon:

1. Agar maqsad model allaqachon ko'rishni qo'llab-quvvatlasa, o'tkazib yuboring (agar u
   majburiy ko'prik ro'yxatida `isVisionBridgeForcedModel` ko'rsatilmagan bo'lsa).
2. Rasm qismlarini `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) orqali ajratib oling, bu esa **birlashtirilgan media
   detektori** `detectMediaParts()` ga delegatsiya qiladi `open-sse/utils/mediaParts.ts` — bu
   birgalikdagi moslik filtriga bo'lingan yagona haqiqat manbai.
   Ajratish faqat `replaceImageParts` qaytarishi mumkin bo'lgan shakllarning yuqori darajadagi qismlariga ruxsat beriladi (ajratish↔almashish shartnomasi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, va Responses API `input_image`. Ichki zarbalar va
   faqat ko'rsatkich shakllari birgalikdagi filtr materialidir va hech qachon ajratilmaydi.
   Agar hech narsa topilmasa, o'tkazib yuboring.
3. Ishga tushirish konfiguratsiyasini `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) orqali hal qiling: yangi `modalityBridge*`
   sozlamalar kalitlari g'olib; eski `visionBridge*` kalitlari **bir tsikl
   zaxira** (orqaga qaytish oynasi) sifatida qoladi. Ko'prik o'chirilganida har qanday media
   o'zgarishidan oldin o'tkazib yuboring.
4. Rejim tanlovchisi (`modalityBridgeVisionMode`, quyidagi jadvalga qarang)
   yo'naltirish yoki tavsiflashni hal qiladi. Yo'naltirish `model` faqat
   almashtirilgan holda `modifiedPayload` qaytaradi, shuningdek meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Tavsif yo'li: rasmlarni `maxImages` ga cheklang, vazifaga mos keladigan
   so'rovni tuzing, tavsif keshini tekshiring, ko'rish modelini **paralel ravishda**
   (`Promise.allSettled`) chaqiring va `[Image N]: <tavsif>` matn qismlarini
   o'z o'rnida qo'shing. Tavsiflash muvaffaqiyatsiz bo'lsa, `null` qaytariladi va asl rasm qismi
   **saqlanadi** (#4012) — faqat har bir
   tavsif muvaffaqiyatsiz bo'lgan birgalikdagi tavsif yo'lida, tasdiqlangan ko'rishdan
   mahrum bo'lgan yuqori oqim `(unavailable — no vision-capable provider connected)` stubi bilan o'zgaradi (#8430).
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) qaytariladi.

#### Rejim tanlovchisi (`modalityBridgeVisionMode`)

| Rejim      | Standart | Xulq-atvor                                                                                                                                                                                                                                                                                                             |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Eski g'oya, o'zgartirilmagan (#6640/#7204): non-combo/`auto/` modellari eng yaxshi ko'rish modeliga yo'naltiriladi, agar asl model allaqachon foydalanish mumkin bo'lgan credentiallarga ega bo'lsa (keyin tavsiflanadi); birgalikdagi maqsadlar har doim tavsiflanadi.                                                |
| `describe` |          | Har doim tavsiflang — yo'naltirish bloki butunlay o'tkazib yuboriladi; foydalanuvchining tanlagan modeli har doim javob beradi.                                                                                                                                                                                        |
| `reroute`  |          | Majburiy yo'naltirish: credentialga ega modelni saqlash himoyasi chetlab o'tiladi. Yo'naltirish-**maqsad** credential himoyasi hali ham amal qiladi — agar foydalanish mumkin bo'lgan ko'rish maqsadi mavjud bo'lmasa, so'rov tavsifga o'tadi, shunda xom rasmlar hech qachon matnli backendga yetib bormaydi (#8430). |

Majburiy rejimlar **avval** avtomatik g'oya ishlashidan oldin qisqa yo'lni o'z ichiga oladi; `auto` xulq-atvori
pre-PR-1 guardrailga byte-ijtimoiydir.

#### Vazifaga mos tavsif so'rovi (`modalityBridgeVisionTaskAware`)

Standart **haqiqat**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`)
foydalanuvchining **oxirgi xabar** matnini (500 belgigacha qisqartirilgan) asosiy
tavsif so'roviga qo'shib, tavsifni foydalanuvchi aslida so'ragan narsaga yo'naltiradi
(codex-vision-proxy naqsh) va ko'rish modelidan ko'rinadigan
matnni transkriptsiya qilishni so'raydi. Flag o'chirilganda — yoki foydalanuvchi matni bo'lmasa — asosiy so'rov o'zgartirilmasdan ishlatiladi.

O'z-o'zini tasvirlash sikli (`callVisionModelSingle()`
`visionBridgeHelpers.ts` ichida) har doim `image_url.detail: "high"` ni so'raydi —
shartlarsiz, har bir chaqiruvchi/taklif qiluvchi uchun, hech qanday mijoz signaliga bog'liq emas.
Past tafsilotli namuna OCR aniqligini pasaytiradi, aynan bu matnni transkriptsiya qilish
vazifasi uchun, shuning uchun tasvirlash chaqiruvi har doim yuqori
tafsilotlarni so'raydi, asl kirish so'rovi qanday tafsilot darajasidan foydalanishidan qat'i nazar. Bu
faqat ichki tasvirlash so'rov tanasiga ta'sir qiladi; bu
OmniRoute chaqiruvchining o'z `image_url.detail` ni asosiy so'rovda qanday uzatishini o'zgartirmaydi —
bu standart alohida qo'llaniladi va faqat aniqlangan OpenCode mijozlari uchun,
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) ichida.
Tasvirlash o'z-o'zini tasvirlashning Anthropic simli formatli bo'lagi `detail` maydoniga ega emas
va har qanday standartdan ta'sirlanmaydi.

#### Tasvirlash chiqish chegarasi (`modalityBridgeVisionMaxChars`)

| Kalit                          | Standart | Oralig'i           |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` yoki 100–50000 |

`0` (standart) **hech qanday cheklov yo'q** degan ma'noni anglatadi —
`callVisionModel()` tomonidan qaytarilgan tavsif o'zgartirilmasdan o'tadi, mavjud
xulq-atvorni saqlab qoladi. 100–50000 oralig'idagi har qanday qiymat tavsifni
`…` qo'shimchasi bilan qisqartiradi, keyin esa `[Image N]: <tavsif>` sifatida qayta birlashtiriladi
(`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts` ichida).
Bu tafsilotlarga boy OCR vazifalari uchun oshirilishi kerak,
qachonki pastki model to'liq transkriptsiyani talab qilsa;
suhbatli ko'rish modellari uchun token foydalanishini cheklash uchun uni kamaytiring.
Boshqaruv paneli maydoni Vision tabining Advanced panelida joylashgan
(`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx` ichida) va har qanday
qiymatni 1 dan 99 gacha 100 qavatiga qadar cheklaydi,
biroq aniq `0` ni o'zgartirmaydi — `0` o'z-o'zidan
amalga oshiriladigan Zod qiymati hisoblanadi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
faqatgina "o'rnatilmagan" standart emas.

#### Tasvirlash kesh (`modalityBridge/bridgeCache.ts`)

Tasvirlash chiqishlari uchun xotirada LRU + TTL kesh, jarayon bo'ylab umumiy.
Kalit = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
uzunlik-prefiks ramkasi bilan (maydon-chegarasi to'qnashuvlari yo'q). Model komponenti
**so'zlashilgan** ko'prik modeli, haqiqatan ham javob bergan model emas —
`callVisionModel` ichki ravishda orqaga qaytishi mumkin,
va har bir urinish bo'yicha kalitlash keshni parchalashga olib keladi.
Muvaffaqiyatsiz tasvirlar hech qachon keshga saqlanmaydi. Sozlamalar:

| Kalit                           | Standart | Oralig'i |
| ------------------------------- | -------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`   | —        |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000  |

#### Uzoqdagi tasvirni normallashtirish (o'z-o'zini tasvirlash/base64 olish)

Ko'prik **uzoqdagi** tasvirni o'zi olishganda —
Anthropic tasvirlash o'z-o'zini chaqirishi va claude-simli formatli base64 konversiyasi
(`ensureBase64ImagesForClaudeWire`), ikkala
`fetchRemoteImageAsDataUri()` orqali `visionBridgeHelpers.ts` ichida —
natijaviy ma'lumot URI `normalizeDataUri()` orqali o'tadi
(`open-sse/utils/imageNormalize.ts`) va ko'rish-model so'roviga kiritiladi.
Katta tasvirlar **2048px uzun qirra** ga kamaytiriladi
(OpenAI/Anthropic allaqachon server tomonda qo'llaniladigan o'lchov chegarasiga mos keladi),
bu yuklash byte/kechikishni kamaytiradi, ko'rish modeli nima ko'rishini o'zgartirmasdan.
O'lchash `sharp` dan foydalanadi, dinamik import orqali yuklanadi:
o'zining mahalliy binarisi yuklanmasa, `normalizeDataUri()` **hech qachon xato bermaydi** —
bu asl byte'larni o'tkazishga qaytadi, shuning uchun tasvirlash/base64-konversiya
yo'li har doim ishlashda davom etadi. Tasvir bo'lmagan byte'lar
(decodable tasvir qaytarmagan olish) ham o'zgartirilmaydi.
Bu normallashtirish ko'prik o'z-o'zini chaqirishi uchun olgan tasvirlarga cheklangan —
bu hech qachon chaqiruvchining xom o'tkazish yukiga qo'llanilmaydi,
faqat opt-in mutatsiya printsipiga muvofiq (Qattiq Qoidalar #20).

#### Sozlamalar sxemasi + migratsiya

Yangi `modalityBridge*` kalitlari `updateSettingsSchema` da Zod tomonidan tasdiqlanadi
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` uchligi va
Audio Bridge tomonidan ishlatiladigan `modalityBridgeAudio*` guruhi.
Migratsiya `141_modality_bridge_settings.sql` mavjud meros
`visionBridge*` qiymatlarini mos yangi kalitlarga nusxalaydi (idempotent, hech qachon operator tomonidan o'rnatilgan
`modalityBridge*` qiymatini o'zgartirmaydi); meros kalitlari bir chiqarish tsikli davomida o'qish uchun
zaxira sifatida qabul qilinadi.

#### Shaffoflik sarlavhasi + statistikalar

Tasvirlashga o'zgartirilgan javoblar
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(`modalityBridge/bridgeStats.ts` ichida `buildModalityBridgeHeader()` tomonidan yaratiladi,
`src/sse/handlers/chatHelpers.ts` ichida `withModalityBridgeHeader()` tomonidan muhrlanadi).
Qayta yo'naltirilgan so'rovlar **hech qanday** sarlavhaga ega emas —
yuklama o'zgartirilmagan va model almashinuvi javob tanasining `model` maydonida allaqachon ko'rinadi.

`GET /api/modality-bridge/stats` (boshqaruv autentifikatsiyasi,
`GET /api/settings` bilan bir xil darajada) xotirada har bir modalitiyaga oid hisoblagichlarni qaytaradi
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }`
`vision`, `audio` va `video` uchun. `averageLatencyMs`
`latencySamples` dan foydalanadi, barcha urinishlardan emas,
bu uning qismidir; vaqtni o'lchamagan operatsiya nol millisekundli
namuna yaratmaydi. `bridged` muvaffaqiyatli konversiyalar uchun orqaga mos keluvchi
laqab bo'lib qoladi; muvaffaqiyatsiz urinishlar uni oshirmaydi.
Hisoblagichlar jarayonni qayta ishga tushirishda dizayn bo'yicha
(telmetriya, hisob-kitob emas).

#### Boshqaruv paneli konfiguratsiyasi

Bagʻishlangan boshqaruv paneli sahifasi
`/dashboard/settings/modality-bridge`. Uning URL-manzilga ega `Vision`, `Audio`,
va `Video` tablari `tab` qiymatini o'zgartirganda so'rov parametrlarini saqlaydi.
Vision tabi imkoniyatlarni yoqish, rejim, model tanlash (avtomatik
standartni o'z ichiga olgan holda), vazifaga oid so'rovlar, ilg'or vaqt/tasvir/tavsif uzunligi/kesh
cheklovlari, ish vaqti
hisoblagichlari va himoyalangan namunali so'rovni ochib beradi. Audio tabi ham jonli: u
imkoniyatlarni yoqish, faqat STT modeli tanlovini Auto, vaqt/tugma cheklovlarini, audio
hisoblagichlarini va `input_audio` namunali testni ochib beradi. Video tabi funksional: u
FFmpeg/ffprobe ish vaqti holatini hisobot qiladi — to'rt xil aniq UI holatlaridan biri (`unknown` probe
uchayotganida yoki tugallana olmaganida, `restricted` non-loopback
boshqaruv paneli xostida probe mijoz tomonidan o'tkazib yuborilganda, `unavailable` probe
o'tkazilgandan so'ng va tasdiqlanganida yo'q, yoki `available` FFmpeg/ffprobe versiyalari bilan) —
imkoniyatlar/yangilanish/model/frame/video/vaqt cheklovlarini saqlaydi, model tanlovini
ko'rish qobiliyatiga ega modellarga filtrlash qiladi va video hisoblagichlarini ochib beradi.

Avvalgi Vision Bridge kartasi AI sozlamalari ostida yangi sahifaga moslik havolasi; u endi
forma nusxasini o'z ichiga olmaydi. Media Providers ham
Rasmdan Matnga va Nutqdan Matnga ish jarayonlarini tegishli Modality
Bridge tablariga bog'laydi, mavjud Nutqdan Matnga o'yin maydonini olib tashlamasdan.

**O'z-o'zini aylantirishni o'tkazib yuborish:** tavsif chaqiruvi OmniRoute'ning
o'z `/v1` o'z-o'zini aylantirish (standart bo'lmagan provayder modeli) orqali yo'naltirilganda,
sub-so'rov `x-omniroute-admission-bypass: internal` yuboradi va hal qilingan
o'z-o'zini aylantirish credentiali bilan tasdiqlanadi — lokal `sk_omniroute` sentinel
lokal rejimda, yoki operator tomonidan sozlangan `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env kaliti (#1350) shunday qilib
`REQUIRE_API_KEY=true` joylashtirishlar tavsif chaqiruvini bajarishi mumkin. O'tkazib yuborish
faqat ushbu aniq credentiallar uchun hurmat qilinadi, shuning uchun tashqi mijozlar
headerni qabul qilishni o'tkazib yuborish uchun ishlata olmaydi.

Meros defaultlari `src/shared/constants/visionBridgeDefaults.ts` da yashaydi; yangi
rejim/vazifaga oid/kesh defaultlari va sozlamalar yechuvchisi `src/shared/constants/modalityBridgeDefaults.ts` da yashaydi.
Himoya `deps` konstruktor variantini ochib beradi, shunda sinovlar soxta `getSettings` va
`callVisionModel` amalga oshirishlarini kiritishi mumkin.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio olib yuruvchi chat so'rovlarini maqsadga yetib bormasdan oldin tutadi, bu maqsad
audio kiritishni qabul qilishi ma'lum emas. U hech qachon chat so'rovini qayta yo'naltirmaydi: audio qismlari
mavjud OpenAI bilan mos keladigan ko'p qismli endpoint orqali transkriptsiyalanadi va
tanlangan chat modeli matn transkriptlari bilan davom etadi.

Jarayon:

1. `supportsAudio` ni `getResolvedModelCapabilities()` orqali hal qiling. Aniq
   provayder-reestri metadata g'alaba qozonadi, keyin statik model metadata, keyin sinxron
   `modalities_input`. `audio` bo'lmagan e'lon qilingan kiritish ro'yxati `false`; hech qanday
   qobiliyat dalillari `null` qoladi. Ikkala `false` va `null` konservativ ko'prikni faollashtiradi, `true` esa uni o'tkazib yuboradi.
2. `modalityBridgeAudio*` sozlamalarini hal qiling va har bir xabardan
   bo'linadigan yuqori darajadagi audio qismlarini `detectMediaParts()`
   detektori orqali oling. Qo'llab-quvvatlanadigan simli shakllar OpenAI `input_audio`, `audio_url`, va
   `source.media_type: "audio/*"` dir. Ichki audio yo'naltirish uchun aniqlanadi, lekin
   bo'linish yo'li orqali olib tashlanmaydi. Ish `modalityBridgeAudioMaxClips` bilan cheklangan;
   keyingi qismlar o'zgartirilmaydi.
3. Sozlangan `provider/model` ni hurmat qiling, yoki `selectAudioBridgeModel()` ni
   barqaror katalog tartibida `AUDIO_TRANSCRIPTION_PROVIDERS` orqali yuritishga ruxsat bering va
   ishlatiladigan faol provayder credentialiga ega birinchi modelni tanlang.
4. `callAudioTranscription()` base64/data-URI audio ni ko'p qismli
   `file` ga aylantiradi, yoki jamoatchilikka faqat chiqish
   himoyasi orqali DNS pinning va 25 MB chegarasi bilan masofaviy `audio_url` ni yuklab oladi. Keyin
   fayl va tanlangan modelni lokal `/v1/audio/transcriptions` o'z-o'zini aylantirishga POST qiladi,
   `resolveSelfLoopBearer()` bilan tasdiqlangan. Mavjud transkriptsiya yo'li normal
   credential qidiruvini, sovuq/qayta cheklashni va provayderni tarqatishni amalga oshiradi.
5. Muvaffaqiyatli chaqiruvlar o'z qismlarini `[Audio N]: <transcript>` bilan almashtiradi. Chaqaruvlar
   `Promise.allSettled` bilan ishlaydi: alohida muvaffaqiyatsizlik asl audio qismini saqlaydi (#4012 shart). Agar har bir chaqiruv muvaffaqiyatsiz bo'lsa va maqsad
   `supportsAudio === false` ekanligi isbotlangan bo'lsa, qismlar
   `[Audio N]: (mavjud emas — hech qanday STT provayderi ulanishi)` (#8430 shart). Noma'lum maqsad (`null`) uchun, barcha muvaffaqiyatsizlik natijasi o'zgartirilmaydi. Foydalanishga yaroqli STT credentiali bo'lmagan isbotlangan
   faqat matnli maqsad bir xil aniq stubni oladi, tarmoq chaqiruvi amalga oshirilmasdan.

Muvaffaqiyatli transkriptlar jarayon bo'ylab Modality Bridge LRU/TTL keshidan foydalanadi.
Kalit audio havolasini, barqaror `audio-transcription` operatsiya yorlig'ini va tanlangan STT modelini birlashtiradi; muvaffaqiyatsizliklar hech qachon keshda saqlanmaydi. Audio urinishlari
umumiy `bridged`, `cacheHits`, `failures`, va `lastUsedAt` hisoblagichlarini yangilaydi.
O'zgartirilgan javoblar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ni olib yuradi; o'zgartirilmagan
so'rovlar Audio Bridge segmentini olmaydi.

Ish vaqti sozlamalari DB tomonidan qo'llab-quvvatlanadi va Zod tomonidan tasdiqlanadi:

| Kalit                         | Standart | Oralig'i         |
| ----------------------------- | -------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                |
| `modalityBridgeAudioModel`    | `""`     | Auto yoki STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10             |

Umumiy kesh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, va `modalityBridgeCacheMaxEntries` tomonidan boshqariladi.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Top darajadagi video qismlarini Chat Completions `messages` va Responses API `input` ga toʻgʻri keladigan maqsadga ega boʻlmagan video qoʻllab-quvvatlashdan oldin tutadi. Qoʻllab-quvvatlanadigan shakllar `input_video`, `video_url`, `video_source`, HTTPS URL manzillari va `data:video/*;base64,...` ma'lumot URI laridir. Oddiy fayl nomlari matnda video sifatida hisobga olinmaydi.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) soʻrovlarni oʻtish, imkoniyat/ siyosat tekshiruvi, har bir soʻrovni yigʻish va javob yuklamasini boshqaradi. Har bir video uchun ish — sotib olish, toʻliq natija keshini, kadr ketma-ketligini tasvirlash (bu har qanday chaqiruvchi tomonidan e'lon qilingan audio transkripti bilan birlashtiriladi) va har bir urinish uchun metrikalar/ toʻxtatish/ tozalash — `processVideoPart` orqali yashirilgan, bu `videoBridgePipeline.ts` da joylashgan va `preCall` siklida har bir video qismi uchun bir marta chaqiriladi. Ushbu modul shuningdek, aniq port chegaralarini `VideoMediaBrokerPort` (baytlarni olish va namuna olingan kadrlarni chiqarish), `VideoAudioTranscriptionPort` (chaqiruvchi tomonidan e'lon qilingan audio transkripti bilan namuna olingan sarlavhalarni birlashtirish) va `VideoDrilldownPort` (meros bo'lib qolgan xom saqlash shakli) sifatida belgilaydi. Ishlab chiqarish STT va kadrlarni saqlash tasvirlovchi port atrofida `createVideoSttAdapter` va `createVideoDrilldownAdapter` orqali birlashtiriladi; ikkinchisi umumiy opak-hujjat hayot tsiklidan foydalanadi.

Jamoat `/v1` soʻrov yoʻli hech qachon subprocess ni import qilmaydi yoki chaqirmaydi. Uzoqdagi videolar 50 MiB chegarasi ostida yuklanadi; inline base64 videolar uchun ehtiyotkor 36 MiB dekodlangan har bir video uchun cheklov mavjud, shuning uchun model/messages/framing envelope jamoat JSON soʻrov qabul qilish cheklovida 50 MiB ichida qolishi mumkin. Inline uzunlik va dekodlangan o'lchovlar ajratishdan oldin tekshiriladi. HTTPS dastlabki uzoq URL va har bir qayta yo'naltirishda talab qilinadi, mavjud jamoat faqat chiqish himoyasi bilan DNS pinlashdan foydalanadi. Baytlar keyin aniq ichki `POST /api/modality-bridge/video/extract` broker chegarasini kesib o'tadi. Ushbu yo'l `LOCAL_ONLY` va `SPAWN_CAPABLE`, faqat bir jarayon uchun autentifikatsiyalangan, ishonchli-loopback soʻrovini qabul qiladi va hech qachon URL, fayl tizimi yo'li, bajariladigan yoki argumentlar ro'yxatini qabul qilmaydi. API tanasi hajmi quvur va handlerning bosqichma-bosqich tanasi o'qiydigan qurilmasi mustaqil ravishda 50 MiB broker kirish cheklovini amalga oshiradi. Uning chegaralangan navbati bir vaqtning o'zida bitta ekstraktsiyani bajaradi, to'rt kutayotgan ishni ruxsat beradi va kutayotgan kirishni 100 MiB bilan cheklaydi.

Broker ichida `ffprobe` maxfiy mahalliy faylni o'qiydi; belgilangan formatlar ro'yxati pleylist va manifest formatlarini istisno qiladi. Ruxsat etilgan MOV-oila konteynerlari uchun tashqi MOV ma'lumot havolalari standart bo'yicha o'chirilgan va belgilangan buyruq ularga qo'shilmaydi. `ffprobe` va `ffmpeg` faqat `file` protokoli ro'yxatidan foydalanadi, bitta ip, belgilangan argumentlar massivlari, hech qanday shell va `PATH` dan hal qilinadigan bajariladigan fayllar. Qo'shilgan rasm qoplamalari o'ynaladigan nomzodlar emas. Barcha o'ynaladigan oqimlar cheklovlarga javob berishi kerak va aniq standart oqim belgilangan eng past indeksga qaytishdan oldin afzal ko'riladi. Videolar 600 soniyaga, o'lchov bo'yicha 8,192 pikselga va 33,554,432 manba pikselga cheklangan. FFmpeg 1–16 o'rtacha JPEG kadrlarini namuna oladi, uzun qirrasini eng ko'pi bilan 1,024 pikselga kamaytiradi, kichikroq kirishlarni kattalashtirmaydi va hech qachon URL qabul qilmaydi. Namuna olish standart bo'yicha `uniform`. Ixtiyoriy `scene_aware` va tajribaviy `segment_aware` siyosatlari allaqachon tasdiqlangan mahalliy oqim ustida bir qo'shimcha belgilangan FFmpeg o‘tishini amalga oshiradi, cheklangan `showinfo` sahna vaqt belgilari tanlaydi va detektor muvaffaqiyatsizligi, vaqt tugashi, noto'g'ri chiqish yoki bo'sh nomzodlar to'plamida aniqlik bilan bir xil bir xil o'rtacha nuqtalarga qaytadi. Segmentga oid rejim tasdiqlangan sahna oralig'iga proporsional ravishda o'rtacha namuna ajratadi; segmentga oid dalillar va qaytish xulq-atvori quyida batafsil bayon etilgan. Qattiq 16-kadrli cheklov har bir siyosatda tanlanganidan keyin qo'llaniladi. Sahna bilan bog'liq so'rov faqat bitta kadr byudjetiga ega bo'lganda, u faol to'liq video yoki fokus oynasining bir xil o'rtacha nuqtasidan foydalanadi va `policyEffective: uniform` ni hisobot qiladi: bitta tanlangan sahna kadrini vaqtning ikkita oxirini saqlay olmaydi. Chaqiruvchi ixtiyoriy ravishda cheklangan fokus oynasini (`start`/`end` soniyalari) taqdim etishi mumkin; chegaralar media davomiyligiga mahkamlanadi, teskari yoki cheksiz oynalar rad etiladi va barcha namuna olish siyosatlari faqat normallashtirilgan oralig'ida amalga oshiriladi. Natijaviy oynalar namuna olish metadata va ishonchsiz tavsif prefiksida kiritiladi, shunda pastki modellari to'liq vaqt chizig'idan fokuslangan parchani ajratishi mumkin.

Semantik sarlavha fokusini alohida, aniq sozlashdir. Standart `full` tahlil rejimi mavjud kadr so'rovini saqlaydi va so'rov matnini sarlavha modeliga hech qachon uzatmaydi. `focused` rejimida, ko'prik faqat oxirgi bo'sh bo'lmagan foydalanuvchi tomonidan yozilgan `text`/`input_text` ni bir xil Chat yoki Responses konteyneridan o'qiydi, uni NFC ga normallashtiradi, boshqaruv belgilarini va bo'sh joylarni qisqartiradi va 500 Unicode kod nuqtasiga cheklaydi. Bo'sh natija aniq `full` so'roviga qaytadi. Foydali maslahat maxsus ishonchsiz foydalanuvchi konteksti blokida JSON sifatida seriyalanadi va faqat ko'rinadigan tafsilotlarni ustun qo'yishi mumkin; u media ichida ko'rinadigan yoki eshitiladigan ko'rsatmalarga amal qilishga qarshi alohida ogohlantirishni bekor qila olmaydi. Matnli fokus hech qachon `start`/`end` ni anglamaydi yoki vaqt namunasini o'zgartirmaydi.

#### FU-07 struktural segment dalillari

`segment_aware` allaqachon tasdiqlangan mahalliy video oqimi ustida bir cheklangan oldindan tahlil o'tishini amalga oshiradi. Belgilangan filtr zanjiri avval eng ko'pi bilan 320 piksel kenglikka o'lchaydi, sahna o'zgarishlarini va muzlatilgan intervallarni aniqlaydi, so'ngra 1 kadrni bir soniyada noaniqlik, o'rtacha luma va fazoviy/vaqt ma'lumotlari uchun namuna oladi. O'tish 600 struktural namuna, bitta FFmpeg/filter ipi, bir xil `file`-faqat protokoli va konteyner ruxsatnomalari, 1 MiB jarayon-chiqarish cheklovi va brokerning umumiy abort/muddatida eng ko'pi bilan 30 soniya bilan cheklangan. U hech qachon so'rovdan buyruq, filtr, yo'l yoki URL qabul qilmaydi.

Struktural qiymatlar deterministik namuna dalillari bo'lib, semantik video tushunish emas. Ular mavzular, harakatlar, sarlavhalar, nutq yoki foydalanuvchi niyatini anglatmaydi. Manzara va to'xtash chegaralari segmentlarni hosil qiladi; to'xtash qamrovi, xiralashish, ekspozitsiya, fazoviy tafsilot va vaqt o'zgarishi mavjud 1–16 kadrlik byudjet qanday taqsimlanishiga ta'sir qiladi. To'liq to'xtatilgan segment bir kadr bilan cheklangan, non-to'xtatilgan segmentlar esa qolgan byudjet uchun raqobatlashadi. Chegaralar kadrlardan ko'p bo'lsa, bir xil vaqt chizig'i qamrovi saqlanadi, shuning uchun tez kesishlar uzoq davom etadigan segmentni yashira olmaydi. 1 soniyali tahlil yechimi ichida to'xtash chegaralari birlashtiriladi.

Yo'qolgan filtrlar, noto'g'ri shakldagi/bo'sh dalillar, detektor xatosi yoki chegaralangan oldindan tahlil vaqtining tugashi aniq bir xil o'rtacha siyosatga ochiq qoladi. Qo'ng'iroqni to'xtatish yoki broker muddati ochiq qolmaydi: bu uchayotgan jarayonni to'xtatadi, keyingi kadrlarni olishni oldini oladi va maxfiy vaqtinchalik daraxt `finally` da olib tashlanadi.

`scripts/perf/video-bridge-fu07-eval.ts` post-dedup sarlavha-cho'ntak tejash, zich-harakat byudjet taqsimoti, xiralashish/ekspozitsiya/SI-TI dalillari, uzoq quyruqli tez kesishlar va bosqichma-bosqich xato ijobiylari uchun deterministik haqiqiy FFmpeg jihozlarini ishlab chiqaradi. U oldindan tahlil devor vaqtini yozadi va `/usr/bin/time` mavjud bo'lsa, bolalar CPU va eng yuqori RSS ni qayd etadi. Uning sifat tekshiruvlari struktural oraklardir. Haqiqiy sarlavha-model sifat `HOLD` da qoladi, chunki bu asbobda ruxsat berilgan nuqtai nazar yoki to'xtatilgan sud yo'q. Moliyaviy tejashlar ham `HOLD` da qoladi, agar `--caption-cost-per-call-usd` aniq ijobiy har bir qo'ng'iroq uchun baho taqdim etmasa; skript hech qachon natijalarni yasamaydi.

Har bir kadr 4 MiB bilan cheklangan, barcha xom kadrlari birgalikda 23 MiB ga va seriyalangan broker javobi 32 MiB ga. Maxfiy vaqtinchalik katalog `finally` da olib tashlanadi. OmniRoute FFmpeg ni birlashtirmaydi va maxsus bajariladigan yo'lni qabul qilmaydi. Sarlavhalashdan oldin, ko'prik ehtiyotkor vizual deduplyatsiya o‘tadi: har bir JPEG 16×16 kulrang buferga qisqartiriladi va faqat oxirgi saqlangan kadr bilan taqqoslanadi. Bir kadrdan yuqori so'ralgan sarlavha byudjeti uchun, olish ikki baravar byudjetga qadar cheklangan nomzodlar havzasini taqdim etadi va hech qachon 16 kadrdan ko'p bo'lmaydi. So'ralgan cheklov faqat deduplyatsiyadan keyin qo'llaniladi, birinchi va oxirgi tanlangan nomzodlar byudjet kamida ikki bo'lganda oxirgi ingichka paytida saqlanadi. Versiyalangan `grayscale-16x16-mean-cells-v2` siyosati o'rtacha luma delta va normallashtirilgan delta kamida 0.05 bo'lgan miniaturalar hujayralarining nisbati ichidan kattaroqini ishlatadi. Takroriy chegarasi 0.04 doimiy bo'lib, bashorat qilish uchun tanlangan, ish vaqtida sozlash sifatida ochiq ko'rsatilmagan. Ushbu ikkilamchi yuqori-kontrast signali kichik harakat va ko'rinadigan matn o'zgarishlarini saqlaydi, bu esa faqat o'rtacha taqqoslashni yashirishi mumkin. Taqqoslagich yoki dekoder xatolari ochiq qoladi va qamrovni saqlaydi. Chiqish metadatalari olingan nomzodlarni, muvaffaqiyatli ishlatilgan kadrlari va vizual takroriylarni ajratadi.

Aniq belgilangan video qismi vaqt belgilangan kontakt varaqasini so'rashi mumkin. Ko'prik eng ko'pi bilan 4 ustunli, 16 kadrli JPEG panjarasini quradi. Har bir 512-pikselli hujayra o'z manba vaqtini yuqori-kontrast pastki bandga yoqadi, bir xil vaqtlar esa pastki bog'lanish va audit uchun matnli metadatalarda qoladi. To'liq JPEG 32 MiB bilan cheklangan. Agar `sharp` panjarani dekodlash yoki tuzish imkoniga ega bo'lmasa, ko'prik alohida JPEG kadrlarga qaytadi; mijozni to'xtatish hali ham varaqa operatsiyasi orqali tarqaladi.

Taqdimot dalillari sun'iy tarkib mikrobenchmarkidan alohida. `scripts/perf/video-bridge-contact-sheet-eval.ts` haqiqiy OpenAI bilan mos keladigan ko'rish modellari uchun sxema-versiyalangan A/B asbobini belgilaydi. U provayder tomonidan hisobot berilgan tokenlar, oxirgi natijaga qadar devor kechikishi (varaqa tarkibi kiritilgan holda), model-cho'ntak soni va manifest tomonidan belgilangan fakt saqlanishini o'lchaydi. Xom model javoblari hisobotga yozilmaydi; faqat SHA-256 xulosalari va mos keluvchi fakt IDlari saqlanadi. Asbob hech qanday tarmoq yoki pullik model chaqiruvini amalga oshirmaydi, agar `--execute-real` o'tkazilmasa va `--model`, `OMNIROUTE_BASE_URL`, va `OMNIROUTE_API_KEY` sozlanmagan bo'lsa. Ushbu aniq haqiqiy ish bo'lmasa, uning mashinaga o'qiladigan hukmi `HOLD` da qoladi; sun'iy yuk/chaqiruv-soni o'lchovlari faqat taqdimot dalili emas.

Alohida `scripts/perf/video-bridge-promotion-eval.ts` FU-07 yoki FU-09 kuzatishlarini iste'mol qiladi. Taqdimot qabul qilish barcha sakkizta sun'iy senariy turini va tozalangan haqiqiy klipni, har bir rol va holat uchun kamida uchta o'lchangan takrorlashni, barcha o'nta e'lon qilingan metrikalarni, muzlatilgan media/so'rov/kutilgan-fakt/sozlamalar xulosalarini, noyob kuzatish IDlarini va tasdiqlangan urug'langan A/B tartibini talab qiladi. Ijro qog'ozi korpus xulosasini, aniq nomzod SHA va model versiyasini bog'laydi. Yo'qolgan yoki noto'g'ri o'lchovlar `HOLD` da qoladi, shu jumladan CPU 30 s dan yuqori, eng yuqori RSS 512 MiB dan yuqori yoki oldindan tahlil 30 s dan yuqori. Bu dalil-qabul qilish chegaralari, yangi ish vaqtida RSSni majburiy ravishda bajarish kafolati emas.

FU-07 kamida 98% sifat saqlanishini va p95 kechikishini bazaviydan 1.2x dan oshmasligini talab qiladi, shuningdek, bir xil o'rtacha sarlavha chaqiruvlarida 0.05 mutlaq holatga mos o'rtacha eslatma yaxshilanishini yoki kamida 10% kamroq o'rtacha post-dedup sarlavha chaqiruvlarini talab qiladi. FU-09 kamida 0.85 sifat, 95% saqlanish, 20% p95 kechikish kamayishi va 10% token kamayishini talab qiladi. Muhim fakt yo'qotilishi, qo'shilish muvofiqligi yoki yo'qolgan foydalanish taqdimotni oldini oladi. Bir ijro hech narsani taqdim eta olmaydi: `--previous-report` bir xil siyosat/model versiyasi/nomzod/korpusning ikki alohida, bir-birini qamrab olmagan, ketma-ket mos keladigan ijrolarini tasdiqlaydi. Namuna tajribasi kontakt-varaqa tajribasini tasdiqlay olmaydi.

Kollektorlar javoblarni xotirada baholashlari va `responseDigest` bilan birga
metrikalar va kuzatuv bog'lanmalarini saqlashlari kerak, hech qachon javob matnini emas. Istemolchi ham eski xom kuzatuvlarni o'qiydi, lekin hech qachon o'sha matnni hisobotlariga nusxa ko'chirmaydi. Har bir kuzatuv uchun `responseDigest` yoki `rawResponseText` dan biri qabul qilinadi. Versiyalangan ruxsatnomalar bo'sh qoladi va o'zgarmas `hold` standartiga ega. Muvofiq kirish o'z dalil havolasini, siyosatini, model yangilanishini, aniq nomzod SHA, manifest xulosasini va ikkita alohida ish ID'sini talab qiladi; qarama-qarshi kontekstlar rad etiladi. Ushbu metadata audit shartnomasidir, havola qilingan fayl haqiqiy o'lchovlarni o'z ichiga olishini isbotlamaydi. Har qanday kirishni qo'shishdan oldin haqiqiy kvitansiyalarni ko'rib chiqing. Boshqaruv statistikasi nuqtasi va Video boshqaruv paneli ehtiyotkor tayyorgarlikni ko'rsatadi. Faqat bitta konfiguratsiyalangan model taxallusi o'z yangilanishini yoki ishdagi nomzod SHA'sini belgilamaydi, shuning uchun joriy boshqaruv paneli `HOLD` ni hisobot qiladi, boshqa bajarilish kontekstidan muvofiqlikni qayta ishlatmaydi. Aniq tajribaviy tanlov targ'ibotdan alohida qoladi; hech qanday standart avtomatik ravishda o'zgartirilmaydi.

Chaqiruvchilar moslashtirilgan video qismiga qo'shimcha `transcript.cues` massivini ulashlari mumkin, agar ular allaqachon moslashtirilgan matnga ega bo'lsalar. Har bir cue `text`, cheklangan `start`/`end` intervalini o'z ichiga olishi va oqilona `source` (`client`, `embedded`, yoki `audio-bridge`) bo'lishi kerak; `confidence` standart bo'yicha `1` ga teng va `0` va `1` orasida qolishi kerak. Aniq takroriy cue'lar birlashtiriladi. OmniRoute hech qachon ushbu metadata'dan transkriptsiyani boshlamaydi: tasdiqlangan cue'lar tavsiflangan natijaga manba, ishonch va interval bilan nusxa ko'chiriladi va ramka sarlavhalari bilan birga ishonchsiz kuzatuvlar sifatida ko'rsatiladi. Noto'g'ri, chegaradan tashqari yoki kelib chiqishi bo'lmagan matn rad etiladi, aksincha sarlavha oqimiga aralashmaydi. Ikkala so'rov-tana transkript kanallari taqdim etilgan kelib chiqishni `client` ga normallashtiradi, o'z-o'zini tasdiqlangan `embedded` yoki `audio-bridge` yorliqlarini o'z ichiga oladi. Faqat serverga tegishli adapter ushbu ishonchli yorliqlarni faqat kodli `trustedSource` argumenti orqali belgilashi mumkin; so'rov JSON maydoni ushbu argumentga yetib bormaydi. Transkript matni ishonchsiz media-asoslangan kontent bo'lib qoladi, kelib chiqishidan qat'i nazar va hech qachon avtorizatsiyani belgilashi kerak emas.

Murakkab chaqiruvchi bir xil video uchun `audioTranscript` trekini taqdim etishi mumkin; bu mijoz tomonidan taqdim etilgan matn sifatida qaraladi, server transkriptsiyasining isboti emas. Bir vaqtning o'zida vizual va audio kuzatuvlarni bir muddat va abort signali ostida olib boradi, ularni umumiy vaqt chizig'ida tartibga soladi, aniq takroriylarni birlashtiradi va faqat bitta tomon muvaffaqiyat qozonganida qisman natijani hisobot qiladi. Noto'g'ri `audioTranscript` qisman natijaga pasayadi — vizual tavsif saqlanadi va audio bo'limi sanitizatsiyalangan muvaffaqiyatsizlik kodini yozadi — butun videoni muvaffaqiyatsiz qoldirmasdan. Har bir bo'limning mavjudligi, qisman bayroq va sanitizatsiyalangan muvaffaqiyatsizlik kodlari tavsiflangan natijada, himoya metadata'sida (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), natija-kesh metadata'sida va ko'prik birlashuvi hisoblagichlarida saqlanadi. Standart Video Bridge yo'li nutqni matnga aylantirmaydi yoki ikkinchi media nusxasini yuklamaydi; ushbu aniq trek bo'lmasa, u faqat video bo'lib qoladi.

**Transkriptni saqlash (#12150 P1).** Bu avtomatik ravishda Video Bridge (o'z-o'zidan opt-in) transkript cue'sini tasvirlaganda qo'llaniladi — alohida saqlash bayrog'i yo'q. Agar so'rov har qanday transkript cue'sini (chaqiruvchi tomonidan e'lon qilingan `transcript` yoki birlashtirilgan `audioTranscript`) tasvirlasa, himoya `videoBridgeObserved` deb belgilaydi va video tavsifining qizil rangda o'chirilgan soyasini ishlab chiqaradi — har bir cue'ning erkin matn tanasi `[redacted-video-transcript]` bilan almashtiriladi, bu esa tuzilgan cue maydoni o'rnida joylashtirilganda yaratiladi (hech qachon tekis matnni tahlil qilish orqali emas, shuning uchun hech qanday cue mazmuni — raqobatbardosh yoki oddiy, `]` ni o'z ichiga olgan tanalar, masalan, `[inaudible]`/`[music]` — saqlanmaydi). Saqlangan chaqiruv-log so'rov tanasi har bir video-asoslangan matn qismini o'sha qizil rangda o'chirilgan soyaga almashtiradi, mazmun tengligi bilan mos keladi; `fullText` ankridan tugallangan oldingi chaqiruv himoya yukidan qayta o'qiladi, shuning uchun moslik keyingi zanjir himoyalaridan (PII va credential maskerlar, ustuvorlik 10/95) tavsif matnini joyida qayta yozganda ham muvaffaqiyatli bo'ladi va tizim-iltimosi/uzatish/xotira qo'shilishi xabarlar massivini qayta shakllantiradi. Modelga yuqoriga yuborilgan tanasi o'zgarmaydi. Kuzatilgan so'rov ham hech qanday doimiy Xotira to'ldirmaydi (so'rov va javobdan olingan ekstraktsiya o'tkazib yuboriladi), shuning uchun modelning o'z javobi transkript matnini Xotiraga aks ettira olmaydi.

**Xom video maydonlari (#12430).** Ko'prik yoqilganda va mahalliy video qo'llab-quvvatlash noma'lum yoki mavjud bo'lmaganida, belgilangan `transcript`/`audioTranscript` maydonlari ham `videoBridgeObserved` ni faollashtiradi, tavsif muvaffaqiyatsiz bo'lsa yoki `maxVideos` chekloviga yetganda ham. `null` va bo'sh satrlar hisobga olinadi; mavjud bo'lmagan maydonlar va video bo'lmagan metadata hisobga olinmaydi. Saqlangan nusxalar ushbu maydonlarni o'chiradi yoki so'rovni o'tkazib yuboradi, va keshlar/Xotira chetlab o'tiladi. Taqdim etuvchi yuk o'zgarmas qoladi.

Qo'shimcha saqlangan nusxalar bir xil kuzatilgan-so'rov signalidan foydalanadi. Xom oldingi himoya mijoz-so'rov suratga olish, xotirada kutayotgan so'rov va erta rad etilgan so'rov logi struktural jihatdan video qismlaridagi transkript maydonlarini almashtiradi; quvurlar bosqichlari va kontekst uzatish tomonidan sintetik ravishda ishlab chiqarilgan satr so'rov tanasi saqlangan so'rov-tana joyida o'chiriladi. Saqlangan `video_content_removed` belgisi `previous_response_id` davomiyligini yopiq qilib muvaffaqiyatsizlikka olib keladi, aksincha matnni qasddan tashlab yuborilgan holda qayta tiklaydi. Agar kuzatilgan so'rov o'z qismidagi o'chirilgan soyasini logdan oldin yo'qotib qo'ysa, yoki hatto bir nechta video soyalaridan biri keyingi so'rov o'zgarishlaridan so'ng mos kelmasa, saqlangan so'rov tanasi to'liq o'chiriladi, qisman o'chirilgan transkriptni saqlash o'rniga.

Kuzatilgan so'rov uchun model javobi transkriptning har qanday qismini tuzilgan belgi chegarasiz iqtibos keltirishi mumkin. Shuning uchun uning saqlangan chaqiruv-jurnali `responseBody` o'chirish belgisiga almashtiriladi; batafsil pipeline artefakti (qaysi yuqoridagi/mijoz tanasi va oqim bo'laklarini o'z ichiga olishi mumkin) saqlanmaydi. Semantik, idempotentlik va mantiqiy qayta o'ynash keshlar o'sha so'rov uchun o'qish va yozishlarni chetlab o'tadi. Ta'minotchining so'rovi va mijozga ko'rinadigan javob o'zgarmaydi. Batafsil artefakt o'chirilganda dastlabki saqlash baytlari vaqtinchalik keshdan chiqariladi. Kironing noto'g'ri EventStream ogohlantirishi faqat yuklama baytlar sonini hisobot qiladi, hech qachon uning mazmuni yoki JSON parserining xom xatosini ko'rsatmaydi. Bu har qanday aloqasiz ta'minotchi/plugin diagnostikasi tekshirilganini da'vo qilmaydi; kengroq saqlangan-sink tozalash #11658 da kuzatiladi.

Ichki `/api/modality-bridge/video/drilldown` hayotiy sikli alohida, loopback/token-autentifikatsiyalangan kesh substrati hisoblanadi. Har bir operatsiya shuningdek, kanonik opak asosiy ID talab qiladi. Ishlab chiqarish chaqiruvchisi yoqilganda, u ushbu IDni autentifikatsiyalangan ijarachidan olish kerak va hech qachon mijoz tanlagan qiymatni uzatmasligi kerak. Kesh kalitlari ushbu asosiy IDni kanonik sessiya va video-referens IDlariga bog'laydi, faqat ularning SHA-256 dan olingan kalitlarini saqlaydi va o'qish va o'chirishni bir xil asosiy IDga bog'laydi. Kesh har bir yozuv uchun eng ko'pi bilan 16 olingan JPEG ramkalarni saqlaydi, ularni o'n daqiqadan keyin muddati o'tgan deb hisoblaydi va chegaralangan `start`/`end` o'qish yoki aniq sessiya o'chirishni qo'llab-quvvatlaydi.

Har bir asosiy ID 16 yozuv va 64 MiB kanonik JPEG ma'lumotlari bilan cheklangan. Ushbu cheklovlar global 64-yozuv/256 MiB yuqori chegaradan mustaqil: asosiy kvota bosimi faqat ushbu asosiy IDning eng kam ishlatilgan yozuvlarini chiqarib yuboradi, global LRU chiqarib yuborish ko'rib chiqilmasdan. Muddati o'tgan yozuvlar kesh faoliyati davomida asosiy va global hisobdan o'chiriladi, bekor qilish va tasdiqlash muvaffaqiyatsizligi qisman almashtirishni amalga oshirmaydi.

Kesh kanonik bo'lmagan Base64, ortiqcha to'ldirish, kanonik bo'lmagan JPEG bo'lmagan media, noto'g'ri yoki kesilgan JPEGlarni va chegaralangan to'liq tasvir `sharp` dekodlash jarayonida ogohlantirish beradigan JPEGlarni rad etadi. Har bir qabul qilingan tasvirni kanonik JPEG sifatida qayta kodlaydi, kenglik va balandlikni dekodlangan baytlardan oladi, chaqiruvchilar maydonlariga ishonmaydi va har qanday ortiqcha polyglot baytlarni saqlamaydi. Faqat chegaralangan kanonik siqilgan kesh ikkala kvotaga ham hisoblanadi. JSON simi chegarasi 32 MiB dekodlangan-kirish yuqori chegarasi uchun Base64 ortiqchasini o'z ichiga oladi. Har bir saqlangan derivatsiya o'zining tasdiqlangan JPEG formatini/rezolyutsiyasini, namuna siyosatini, derivatsiya versiyasini, yaratilish vaqtini, server tomonidan hisoblangan kontent xeshini va xeshlangan ota-referensni, shuningdek, ishonchli chaqiruvchining ota-kontent xeshini qayd etadi. Bekor qilish asinxron dekodlash/xesh bosqichlari orasida tekshiriladi, atomik keshni amalga oshirishdan oldin.

Ishlab chiqarish ishlab chiqaruvchisi allaqachon olingan broker ramkalarini faqat muvaffaqiyatli vizual tahlildan so'ng qayta ishlatadi, ikkinchi video yuklash/ekstraktsiya qilinmaydi. Bu operator `modalityBridgeVideoDrilldownEnabled=true`, qat'iy har bir qism uchun `drilldown: true` va autentifikatsiyalangan API-kalit yozuv ID talab qiladi. Mijoz tomonidan e'lon qilingan asosiy/sessiya qiymatlari hech qachon mulkni o'rnatmaydi. Uchta shartdan biri bo'lmasa, u xesh qilmaydi, o'lchamaydi yoki qo'shimcha ramkalarni saqlamaydi. Saqlash muvaffaqiyatsizligi foydalanish mumkin bo'lgan vizual javobni saqlaydi. Rozilik berilgan so'rovlar butun video natija keshini chetlab o'tadi, shuning uchun keshlangan natijalar hech qachon qayta o'ynashni amalga oshirmaydi.

Muvaffaqiyatli JSON va SSE javoblari eng ko'pi bilan to'rtta opak tutqichni chegaralangan `x-omniroute-video-drilldown` sarlavhasida ochib beradi. Ruxsat berilgan brauzer manbalari ushbu sarlavhani CORS manba siyosatini kengaytirmasdan o'qiy oladi. Yangi tutqichlar `v1.<32-baytli tasodifiy base64url token>` dan foydalanadi va ro'yxat faqat ularning SHA-256 xeshlarini saqlaydi. O'qiydigan/sarlavha parseri ham meros bo'lib qolgan 64-hex tokenlarni qabul qiladi. Autentifikatsiyalangan jamoatchilik iste'molchisi `GET /api/v1/video-bridge/drilldown?handle=...`, mustaqil ravishda `modalityBridgeVideoDrilldownRemoteEnabled=true` tomonidan nazorat qilinadi. Aniq saqlangan yolg'on kirish huquqini bekor qiladi, hatto meros bo'lib qolgan `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` muhitga qaytish yoqilgan bo'lsa ham. Ishlab chiqarish saqlashining meros bo'lib qolgan `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` qaytishi mavjud. Ikkala qaytish ham standart bo'yicha o'chirilgan.

Iste'molchi autentifikatsiyalangan kalitdan mulkni oladi, kalit siyosatini qo'llaydi va noma'lum, muddati o'tgan va boshqa kalitning tutqichlari uchun bir xil 404 qaytaradi. U `variant=preview|standard|detail` (maksimal JPEG o'lchami 320/640/1280, hech qachon kattalashtirilmaydi), `limit=1..8` (yoki meros bo'lib qolgan `frames` taxallusi, hech qachon ikkisi ham emas), nolga asoslangan `page`, va ixtiyoriy `start`/`end` diqqat soniyalarini qabul qiladi. Takroriy so'rov kalitlari va teskari diqqat oynalari rad etiladi. Har bir qaytarilgan variant o'zining haqiqiy mazmuni va haqiqiy rezolyutsiya metadatasining xeshiga ega bo'lib, saqlangan manbaga bog'langan. Variantlar o'qish paytida olinadi, qo'shimcha saqlangan nusxalar sifatida saqlanmaydi. JSON javobi, Base64/qoplama bilan birga, 32 MiB ga cheklangan; juda katta sahifa 413 qaytaradi va mijoz kamroq ramkalarni so'rashi kerak. O'qish har bir o'lchov atrofida bekor qilishni tekshiradi va qaytarishdan oldin tutqichning haqiqiyligini qayta tekshiradi. Egasi tomonidan `DELETE` idempotentdir; o'chirish yoki TTL muddati o'tishi saqlangan manbani va foydalanish hisobini ozod qiladi.

Ulashilgan do'kon jarayon mahalliydir: tutqichlar qayta ishga tushirilganda muddati o'tadi va mustaqil OmniRoute jarayonlari o'rtasida o'tkazilmaydi. Boshqaruv statistikasi samarali saqlash/masofaviy siyosatni va faqat saqlangan yozuvlar/baytlarni yig'indisini ko'rsatadi, hech qachon media, referenslar, asosiy IDlar yoki tutqichlarni ko'rsatmaydi. Video sozlamalari paneli ushbu qiymatlarni ko'rsatadi va ikkala rozilik o'zgaruvchilarini saqlashi mumkin. Ushbu amalga oshirish hujjati jonli joylashtirish yoki reklama dalili emas; haqiqiy model qabul qilinishi alohida kuzatiladi.

Kadrlar konfiguratsiyalangan Video modeli bilan ketma-ket ravishda sarlavhalanadi. Bo'sh Video o'zgartirish Vision sozlamasini meros qilib oladi; agar ikkalasi ham bo'sh bo'lsa, Vision avtomatik yo'naltiruvchi samarali ko'rish qobiliyatiga ega modelni tanlaydi. Muvaffaqiyatli sarlavhalar asl qismni barqaror `[Video description:` prefiksi bilan almashtiradi, bu ham matnni ishonchsiz media-asoslangan kuzatuv sifatida belgilaydi va pastki modellarga media ichida topilgan ko'rsatmalarga amal qilmaslikni aytadi. Kadr-sarlavha kesh kalitlari JPEG baytlarini, so'rovni, vaqt belgisini va samarali modelni o'z ichiga oladi; faqat muvaffaqiyatli sarlavhalar keshda saqlanadi. Kesh yozuvlari haqiqiy muvaffaqiyatli ishlab chiqaruvchi modelni, shu jumladan zaxira modelini saqlaydi; ko'prik `mixed` deb hisobot beradi, agar turli kadrlar turli modellardan ishlab chiqarilgan bo'lsa. Kesh urushi o'sha ishlab chiqaruvchi shaxsiyatini qayta belgilash o'rniga qayta ishlatadi. Butun-video natija kesh har qanday chiqishni o'zgartiradigan har bir kirish bo'yicha kalitlanadi — so'rov, samarali model, namuna siyosati, kadrlar soni, semantik tahlil rejimi, normallashtirilgan fokus ko'rsatmasining SHA-256 barmog'i, fokus oynasi, `transcript`, `audioTranscript`, va kontakt-varaq flagi — shuning uchun ushbu o'lchovlardan birortasini o'zgartirish keshni yo'qotishdir, hech qachon eskirgan qayta foydalanish emas. Vizual takrorlash siyosati versiyasi, chegarasi va chegaralangan nomzod-kadrlar soni natija-kesh kalitida va metadata-da aniq ko'rsatilgan; shuning uchun siyosat o'zgarishi eskirgan butun-video tavsifini qayta ishlata olmaydi. Natija-kesh v4 metadata rejimini va barmoq izini saqlaydi, hech qachon xom foydalanuvchi vazifasini emas. Guardrail metadata so'ralgan va samarali tahlil rejimlarini hisobot qiladi; foydalanuvchi matni ishlatilmaydigan so'ralgan `focused` rejimi samarali `full` sifatida hisobot qilinadi.

Guardrail har bir qo'llab-quvvatlanadigan video qismini chiqaradi, lekin `modalityBridgeVideoMaxVideos` dan ko'proq tavsiflamaydi. `supportsVideo === false` ga ega bo'lgan maqsadlar uchun, muvaffaqiyatsiz va cheklangan videolar aniq xavfsiz matn belgilari bo'ladi, shuning uchun hech qanday xom video saqlanmaydi. Qobiliyat noma'lum bo'lganda, ushbu qismlar o'zgartirilmaydi. `supportsVideo === true` ga ega bo'lgan maqsadlar ko'prikni chetlab o'tadi. Mijoz so'rovini to'xtatish signali yuklash, broker navbatlari, yordamchi jarayonlar va sarlavha chaqiruvlari orqali tarqaladi; to'xtatish videolar o'rtasida to'xtaydi va hech qachon xom media ga ochiq qolmaydi.

Ishga tushirish sozlamalari DB asosida va Zod tomonidan tasdiqlangan:

| Kalit                               | Standart    | Oralig'i / xulq-atvori                                                                                               |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Ixtiyoriy ishga tushirish, ro'yxatdan o'tish                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` umumiy sarlavhalarni saqlaydi; `focused` chegaralangan, ishonchsiz oxirgi foydalanuvchi kontekstini ishlatadi |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini meros qilib oling                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, yoki proporsional `segment_aware`; detektor muvaffaqiyatsiz bo'lsa `uniform` ga qaytadi    |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                       |

120 soniyadan yuqori eski saqlangan Video vaqt o'lchovlari brokerning oxirgi muddatiga qattiq bog'lanadi; ushbu cheklovdan yuqori yangi sozlamalar rad etiladi. `GET /api/modality-bridge/video/runtime` ishonchli muhrlangan loopback mahalliyligini autentifikatsiya yoki ishga tushirishni tekshirishdan oldin talab qiladi, keyin boshqaruv autentifikatsiyasini talab qiladi. U faqat `available`, sanitizatsiyalangan FFmpeg/ffprobe versiyalarini va ishga tushirish mavjud bo'lmaganida belgilangan sababni qaytaradi. Ichki ekstraksiya nuqtasi jamoatchilikka yuklash API emas: navbatning to'lib ketishi `503` va `Retry-After` qaytaradi, chaqiruvchi uzilishi `499` qaytaradi, va belgilangan brokerning oxirgi muddati `504` qaytaradi. O'zgartirilgan javoblar markaziy `x-omniroute-modality-bridge` sarlavhasiga `video->text;model=<visionModel>;parts=<videos>` qo'shadi, Vision yoki Audio segmentlarini olib tashlamasdan.

### PII Masker (`piiMasker.ts`)

**Ikkala** bosqichda ishlaydi.

- **`preCall`** yuklamani klonlaydi, `system`, `messages`, `input`, va `prompt` (oddiy satr elementlarini o'z ichiga oladi) bo'ylab yuradi va `processPII()` ( `@/shared/utils/inputSanitizer` dan) ni satr `content`/`text` maydonlariga qo'llaydi. Agar `PII_REDACTION_ENABLED=true` bo'lsa, aniqlangan PII chiqish yuklamasida yashiriladi. Bu `INPUT_SANITIZER_MODE` dan mustaqil (faqat so'rov-in'ektsiya siyosatini boshqaradi). Yashirish o'chirilganda, chaqiruv aniqlash hisoblarini qayd etadi, lekin kontentni qayta yozmaydi.
- **`postCall`** javobni chuqur klonlaydi, `sanitizePIIResponse()` ni ishga tushiradi va Responses-API-shape maskerni (`maskResponsesOutput` — `output_text` va `output[].content[].text` ni qamrab oladi). Agar har qanday yashirish sodir bo'lsa, o'zgartirilgan javob aslini almashtiradi.

Guardrail hech qachon to'sqinlik qilmaydi; u faqat annotatsiya qiladi (`meta.detections`, `meta.redacted`) yoki qayta yozadi.

### Prompt Injection (`promptInjection.ts`)

Foydalanuvchi tomonidan taqdim etilgan kontentda dushman tuzilmalarni aniqlaydi va konfiguratsiyalangan siyosatni amalga oshiradi. Xulq-atvor muhit o'zgaruvchilari va konstruktor variantlari tomonidan boshqariladi:

| Sozlama              | Atrof muhit o'zgaruvchisi                                                                               | Standart | Ta'sir                                                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Faol                 | `INPUT_SANITIZER_ENABLED`                                                                               | `true`   | `false` bo'lganda, himoya qisqa yo'lni tanlaydi.                                                                                                                                                                |
| Rejim                | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                         | `warn`   | Inyeksiya siyosati: `block`, `warn`, yoki `log`. (`redact` orqaga moslik uchun qabul qilinadi, lekin inyeksiya matnini **tozalash** qilmaydi; PII qayta yozilishi `PII_REDACTION_ENABLED` orqali boshqariladi.) |
| Blokirovka chegarasi | `blockThreshold` opsiyasi / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Blokirovka qilish uchun zarur minimal og'irlik. O'rta standartda faqat kuzatish uchun.                                                                                                                          |

**Rejim ustunligi** (`getMode`): chaqiruvchi `options.mode` →
`INJECTION_GUARD_MODE` **DB xususiyat-flagi ustunligi** (Dashboard → Sozlamalar →
Xususiyat Flagi) → `INJECTION_GUARD_MODE` atrof muhit → `INPUT_SANITIZER_MODE` atrof muhit →
`warn`. Shunday qilib, dashboard ustunligi atrof muhit o'zgaruvchilaridan ustun keladi, shuning uchun Xususiyat
Flaglari UI himoyani jonli boshqaradi (qayta ishga tushirishsiz). DB o'qilishi xavfsiz:
agar xato bo'lsa, himoya atrof muhitga asoslangan xatti-harakatlarga qaytadi va hech qanday
ustunlik o'rnatilmaganida xatti-harakat atrof muhitga asoslangan yechimga teng.

Aniqlash manbalari:

1. `sanitizeRequest()` `@/shared/utils/inputSanitizer` dan (pipeline'da boshqa joylarda ishlatiladigan umumiy detektor
   to'plami).
2. O'rnatilgan `DEFAULT_GUARD_PATTERNS` (hozirda `system_override_inline` va
   `markdown_system_block`, ikkalasi ham `high` og'irlik).
3. Konstruktor opsiyalari orqali o'tkazilgan ixtiyoriy `customPatterns` (stringlar, regex,
   yoki `{ name, pattern, severity }` yozuvlari).

Agar `mode === "block"` **va** kamida bitta aniqlash og'irlik chegarasiga yetganda,
`preCall` `{ block: true, message: "So'rov rad etildi: shubhali kontent aniqlangan" }` qaytaradi. `warn`/`log` rejimlarida himoya jurnalga yozadi, lekin chaqiruvga ruxsat beradi. Umumiy yordamchi `evaluatePromptInjection()` ham chaqiruvchilar uchun eksport qilinadi, ular ro'yxatga o'tmasdan so'rovlarni baholashlari kerak.

**Skanner chegarasi (v3.8.20):** detektor faqat **birinchi 16 KB** qo'shilgan so'rov matnini tekshiradi — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt) `src/shared/utils/inputSanitizer.ts` da. `detectInjection()` va
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` ni bajarishdan oldin ishlatadi
shablon aylanishi. Inyeksiya ko'rsatmalari kirishning yuqori qismida joylashgan, shuning uchun bu
regex CPU/GC ni ko'p yuz KB yuklamalarda cheklaydi, aniqlashni zaiflashtirmasdan (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

**Ikkala** bosqichda ishlaydi, standart zanjirda oxirgi (ustunlik `95`).
Tashqi yuklamadan (xabar
mazmuni, vosita chaqiruv argumentlari, vosita natijalari) **va** provayder javobidan
ma'lum API-kaliti / maxfiy-token shablonlarini tozalaydi, shunday qilib, so'rovga kiritilgan
maxfiylik (yoki vosita natijasi tomonidan qaytarilgan) yuqoridagi provayderga yoki
mijozga oshkor qilinmaydi.

- **Faoliyatga faqat** ruxsat berilgan, PII tozalash bilan bir xil konventsiyada (Qattiq Qoidalar #20-yaqin):
  `settings.credentialRedactionEnabled === true` **yoki**
  `CREDENTIAL_REDACTION_ENABLED=true` bo'lmaguncha o'chirilgan. Buning o'chirilishi bilan, himoya hech narsa qilmaydi —
  u hech qachon bloklamaydi va hech qachon qayta yozmaydi.
- `redactCredentials()` to'liq yuklama/javob daraxtini o'rganadi (`walkValue()`,
  prototip ifloslanishiga qarshi, `WeakSet` orqali aylanishga qarshi) va mos keladiganlarni
  `[REDACTED:<type>]` joy tutuvchi bilan almashtiradi, faqat haqiqatan ham
  o'zgargan shoxlarni ko'chirib.
- `CREDENTIAL_PATTERNS` LLM provayder kalitlarini (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlarini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), to'lov kalitlarini (Stripe, Square), bulut
  kalitlarini (AWS access key, Twilio, SendGrid, Mailgun), maxfiy kalitlar / JWTlar,
  credential-bearing ulanish satrlarini (`mongodb://user:pass@...`, va boshqalar), va
  umumiy `Authorization`/`x-api-key`/`api-key`/`apikey` sarlavha-qiymat
  shablonini qamrab oladi. Sarlavha shaklidagi kalitlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) tuzilish jihatidan tozalanadi (faqat qiymat, `Bearer `/`Basic ` kabi
  prefiks saqlanadi) umumiy matn regex orqali emas.
- Himoya hech qachon bloklamaydi; u faqat qayta yozadi (`modifiedPayload` /
  `modifiedResponse`) va annotatsiya qiladi (`meta.credentialsRedacted`, `meta.count`).

Regressiya himoyasi: `tests/unit/credential-masker-guardrail.test.ts`.

## Asosiy kontrakt (`base.ts`)

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
  block?: boolean; // true zanjir bajarilishini darhol toʻxtatadi
  message?: string; // bloklanganda koʻrsatiladi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // soʻrovni qayta yozish uchun preCall tomonidan qaytariladi
  modifiedResponse?: TValue; // javobni qayta yozish uchun postCall tomonidan qaytariladi
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

Himoya cheklovi `void`, `{}` yoki `{ block: false }` qiymatlaridan birini
qaytarish orqali «oʻzgarish yoʻq» holatini bildiradi. `modifiedPayload`/`modifiedResponse`
qaytarilishi zanjir boʻylab keyingi himoya cheklovlariga uzatilayotgan qiymatni
almashtiradi. `signal?: AbortSignal` chaqiruvchining hayot siklini himoya
cheklovlariga uzatadi. Soʻrovning bekor qilinishi ataylab qoʻllanadigan ochiq
oʻtkazish istisnosidir: media koʻpriklari ishni toʻxtatadi va tozalashni amalga
oshiradi, bunda xom media uni qoʻllab-quvvatlamasligi maʼlum boʻlgan maqsadga
qayta tiklanmaydi.

## Reestr (`registry.ts`)

Yagona `guardrailRegistry` nusxasi quyidagilarni taqdim etadi:

- `register(guardrail)` — himoya cheklovini qoʻshadi (yoki normallashtirilgan
  nom boʻyicha almashtiradi) va roʻyxatni `priority` qiymatining oʻsish tartibida
  qayta saralaydi.
- `clear()` / `list()` — maʼmuriy yordamchi funksiyalar.
- `runPreCallHooks(payload, context)` — faol himoya cheklovlarini ketma-ket
  bajaradi, foydali yuklamani `modifiedPayload` orqali uzatadi va birinchi
  `block: true` holatida toʻxtaydi.
- `runPostCallHooks(response, context)` — javob tomonida xuddi shu oqimni
  bajaradi.
- `resetGuardrailsForTests({ registerDefaults })` — holatni tozalaydi va
  testlarni izolyatsiya qilish uchun ixtiyoriy ravishda standart himoya
  cheklovlarini qayta roʻyxatdan oʻtkazadi.

Har ikkala bajaruvchi ham `{ blocked, payload|response, results, guardrail?, message? }`
qiymatini qaytaradi, bunda `results` har bir himoya cheklovi uchun `blocked`,
`skipped`, `modified`, `error` va `meta` maydonlarini oʻz ichiga olgan
`GuardrailExecutionResult` yozuvlari massivi boʻlib, kuzatuv uchun foydalidir.

### Har bir soʻrov uchun himoya cheklovlarini oʻchirish

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` joriy soʻrov uchun
oʻtkazib yuborilishi kerak boʻlgan himoya cheklovlari nomlarining takrorlanmaydigan
roʻyxatini jamlaydi. Manbalar (barchasi ixtiyoriy, barchasi birlashtiriladi):

- `apiKeyInfo.disabledGuardrails`
- Soʻrov tanasidagi `disabledGuardrails` (yuqori darajada)
- Soʻrov tanasidagi `metadata.disabledGuardrails`
- `x-omniroute-disabled-guardrails` sarlavhasi (yoki eski
  `x-disabled-guardrails`)

Qiymatlar satrlar massivi yoki vergul bilan ajratilgan satr boʻlishi mumkin;
nomlar kichik harflardagi kebab-case formatiga normallashtiriladi
(`pii_masker` → `pii-masker`). Natija `context.disabledGuardrails` orqali
reestrga uzatiladi va reestr mos keluvchi himoya cheklovlarini oʻtkazib yuboradi
(`results` ichida `skipped: true`).

## Bajarilish tartibi

`src/sse/handlers/chat.ts` va `open-sse/handlers/chatCore.ts` orqali oʻtadigan har bir soʻrov uchun:

1. `resolveDisabledGuardrails(...)` API kaliti, soʻrov tanasi va sarlavhalar asosida oʻtkazib yuboriladigan himoya mexanizmlari roʻyxatini tuzadi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` himoya mexanizmlarini ustuvorlikning oʻsish tartibida ishga tushiradi:
   - Oʻchirilgan himoya mexanizmlari `skipped` sifatida qayd etiladi.
   - Har bir himoya mexanizmining `preCall` funksiyasi `modifiedPayload` orqali foydali yuklamani qayta yozishi mumkin.
   - Birinchi `block: true` zanjirni muddatidan oldin toʻxtatadi va ishlov beruvchi himoya mexanizmi tomonidan rad etilganlik javobini qaytaradi.
3. (Qayta yozilgan boʻlishi mumkin boʻlgan) foydali yuklama kombinatsiyalangan marshrutlash va yuqori oqimga joʻnatish jarayoniga oʻtadi.
4. Javob shakllantirilgach, `guardrailRegistry.runPostCallHooks(...)` javob ustida ayni zanjirni ishga tushiradi. Bu yerda `block: true` yuqori oqim javobini bekor qiladi.

Istisno chiqaradigan himoya mexanizmlari `error: <message>` bilan qayd etiladi va `logger.warn` orqali jurnalga yoziladi, ammo zanjir davom etadi — bu ataylab ochiq xato siyosati asosida ishlaydi.

## Konfiguratsiya

Ichki himoya mexanizmlari oʻqiydigan muhit oʻzgaruvchilari:

| Oʻzgaruvchi                           | Foydalanadigan mexanizm  | Taʼsiri                                                                                                                             |
| ------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Aniqlashni butunlay oʻchirish uchun `false` qiymatini belgilang.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Inʼeksiya siyosati: `warn`, `block` yoki `log`. Eski `redact` qiymati inʼeksiya matnini qayta yozmaydi.                             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Inʼeksiya himoyasi rejimi; shuningdek, muhit oʻzgaruvchilarini **ustunlik bilan almashtiradigan** MB xususiyat bayrogʻi (MB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | `MODE=block` rad etadigan minimal jiddiylik darajasi: `high` (standart), `medium` yoki `low`.                                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | `INPUT_SANITIZER_BLOCK_THRESHOLD` uchun eski muqobil nom.                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | `true` boʻlganda, soʻrovdagi PII tahrirlanadi (inʼeksiya rejimidan mustaqil ravishda).                                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (quyi oqim) | Javob tomonidagi niqoblash mexanizmi xatti-harakatini boshqaradi.                                                                   |

Modality Bridge himoya mexanizmlari ish vaqti konfiguratsiyasini muhit oʻzgaruvchilaridan emas, MB tomonidan qoʻllab-quvvatlanadigan sozlamalar omboridan (`getSettings()`) oʻqiydi. Vision uchun asosiy kalitlar:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` va
`modalityBridgeCacheMaxEntries`. Eski
`visionBridge*` kalitlari faqat hujjatlashtirilgan bir siklli oʻqish
zaxira varianti sifatida qabul qilinadi; boshqaruv panelidagi yozuvlar asosiy kalitlardan foydalanadi. Standart qiymatlar va zaxira variantni aniqlovchi
`src/shared/constants/modalityBridgeDefaults.ts` faylida joylashgan, eski
konstantalar esa `src/shared/constants/visionBridgeDefaults.ts` faylida saqlab qolingan.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` va `modalityBridgeAudioMaxClips`, shuningdek, umumiy
`modalityBridgeCache*` sozlamalaridan foydalanadi. Audio uchun eski kalitlarga qaytish imkoniyati yoʻq, chunki bu
kalitlar Modality Bridge sxemasi bilan birga joriy etilgan.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` va
`modalityBridgeVideoTimeout`, shuningdek, umumiy `modalityBridgeCache*` sozlamalaridan foydalanadi.
U standart holatda oʻchirilgan, chunki FFmpeg/ffprobe ixtiyoriy operatsion
bogʻliqliklar hisoblanadi va kadrlarga tavsif yaratish kechikish hamda model xarajatini oshiradi.

## Maxsus Guardrail’lar

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

Qadamlar:

1. `BaseGuardrail`ni kengaytiruvchi `src/lib/guardrails/myGuardrail.ts` faylini yarating.
2. `preCall` va/yoki `postCall`ni amalga oshiring.
3. Import vaqtida roʻyxatdan oʻtkazing (`registerDefaultGuardrails`dan qoʻshing) yoki
   bajarilish vaqtida `guardrailRegistry.register(...)`ni chaqiring — registr
   bir xil normallashtirilgan nomga ega oldingi guardrail’ni almashtiradi.
4. Testlarni `tests/unit/` ichiga qoʻshing (mavjud misollar:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testlash

Maʼlum holatdan boshlash uchun testlar orasida `resetGuardrailsForTests()`dan foydalaning.
Boʻsh registr bilan boshlash va faqat test qilinayotgan guardrail’larni roʻyxatdan
oʻtkazish uchun `{ registerDefaults: false }`ni uzating. Vision Bridge bogʻliqliklarni
kiritishni (`deps.getSettings`, `deps.callVisionModel`) qabul qiladi; Audio Bridge esa
sozlamalar, imkoniyatlar, STT modelini tanlash, hisob maʼlumotlarini tekshirish va
transkripsiya uchun mos ekvivalent ulanish nuqtalarini taqdim etadi. Shu sababli testlar
har ikkala oqimni ham maʼlumotlar bazasi yoki tarmoqqa ulanmasdan sinashi mumkin.

## Shuningdek qarang

- `src/lib/guardrails/` — amalga oshirish
- `src/shared/utils/inputSanitizer.ts` — prompt-injection va PII niqoblashni
  taʼminlovchi umumiy detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standartlari va
  majburiy bridge modellari roʻyxati
- `src/shared/constants/modalityBridgeDefaults.ts` — umumiy Vision/Audio bajarilish muhiti standartlari
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonal qatlam (circuit breaker, kutish davrlari)
- `docs/reference/ENVIRONMENT.md` — muhit oʻzgaruvchilarining toʻliq maʼlumotnomasi

## Injection-guard marshrut qamrovi va red-team (8-bosqich · D blok)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) foydalanuvchi promptlarini
qabul qiladigan barcha marshrutlarni qamrab oladi. U `INJECTION_GUARD_MODE`ga amal qiladi
(standart `warn` = faqat jurnalga yozish; `block` = HTTP 400 `SECURITY_001`ni qaytaradi).

| Tur           | Marshrutlar                                                                                                                                          | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Matn (mavjud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Maʼlumotlar   | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Matnni ajratib olish (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`ni qamrab oladi.

**Red-team (har kecha, `nightly-llm-security.yml`):** promptfoo har bir marshrut
`INJECTION_GUARD_MODE=block` holatida OWASP-LLM korpusini bloklashini tekshiradi; garak
probelarni ishga tushiradi (maxfiy kalit boʻlmasa, oʻtkazib yuboradi).
Izchillik uchun `moderations` ham kiritilgan — `block` rejimidagi operatorlar uni
`resolveDisabledGuardrails` orqali istisno qilishi mumkin.

Har kechalik ish jarayoni (`.github/workflows/nightly-llm-security.yml`, cron + qoʻlda
ishga tushirish) ikkita vazifaga ega:

- **`promptfoo-guard` (bloklovchi)** — `INJECTION_GUARD_MODE=block` bilan
  `promptfoo eval -c promptfooconfig.yaml`ni ishga tushiradi. Har bir zararli holat
  (masalan, "barcha oldingi koʻrsatmalarni eʼtiborsiz qoldir…", DAN uslubidagi
  jailbreak’lar) javobda `error.code === "SECURITY_001"` mavjudligini, yaʼni guard
  soʻrovni amalda rad etganini tekshiradi.
- **`garak` (tavsiyaviy)** — lokal OmniRoute nusxasiga
  (`http://localhost:20128/v1`) qarshi garak’ni `--probes promptinject,dan,leakreplay`
  bilan ishga tushiradi. U provayder maxfiy kalitiga (`PROMPTFOO_PROVIDER_KEY`)
  bogʻlangan; kalit boʻlmasa muammosiz oʻtkazib yuboradi va `|| true` bilan
  yakunlanadi, shu sababli CI’ni muvaffaqiyatsiz qilmasdan hisobot beradi.

Guard yordamchisining (`createInjectionGuard` / `withInjectionGuard`) qamrovi
prompt qabul qiluvchi har bir `/v1` marshrutini oʻz ichiga oladi; prompt matni
`src/shared/utils/inputSanitizer.ts` ichidagi `extractMessageContents()` tomonidan
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`dan olinadi.
