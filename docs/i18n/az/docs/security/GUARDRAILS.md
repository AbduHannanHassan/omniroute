# Guardrails (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Həqiqət mənbəyi:** `src/lib/guardrails/`
> **Son yenilənmə:** 2026-08-29 — v3.8.51 (Video Bridge transkriptinin mənşəyi çağıran tərəf tərəfindən bəyan edilir,
> hələ server tərəfindən təsdiqlənmir — #11661 əsasında dəqiqləşdirilib)

Qoruyucu mexanizmlər OmniRoute ilə yuxarı axın provayderləri arasındakı sərhəddə
təhlükəsizlik, siyasət və məzmun transformasiyalarını təmin edir. Hər bir qoruyucu mexanizm
sorğu faydalı yüklərini (`preCall`) və yuxarı axın cavablarını (`postCall`) yoxlaya
(və istəyə görə rədd edə, transformasiya edə və ya annotasiya edə) bilər.

Sistem **xəta zamanı açıqdır**: qoruyucu mexanizm icra zamanı xəta atarsa, reyestr
xətanı qeydə alır və sorğunu uğursuz etmək əvəzinə növbəti qoruyucu mexanizmlə
davam edir. Bloklama heç vaxt təsadüf deyil, açıq şəkildə verilən qərardır (`block: true`).

## İnteqrasiya Olunmuş Qoruyucular

Qeydiyyat idxal zamanı prioritet sırasına görə altı qoruyucunu avtomatik yükləyir
(bax `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Ad                  | Mərhələ(ler)   | Fayl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Aşağı prioritet nömrələri **ilk** işlənir.

### Vision Bridge (`visionBridge.ts`) — Modallıq Köprüsü PR-1

**Görmə modellərinə** yönəlmiş şəkil daşıyan sorğuları ələ keçirir və ya
bütün sorğunu görmə qabiliyyətinə malik modelə yönləndirir, ya da şəkil
hissələrini konfiqurasiya edilə bilən görmə modeli tərəfindən istehsal olunan
mətn təsvirləri ilə dəyişdirir. Bu, yalnız mətn təminatçılarının
multimodal yükü şəffaf şəkildə idarə etməsinə imkan tanıyır.

Axın:

1. Hədəf model artıq görməni dəstəkləyirsə, keçin (əgər
   `isVisionBridgeForcedModel` məcburi köprü siyahısında görünmürsə).
2. Şəkil hissələrini `extractImageParts(messages)` vasitəsilə çıxarın
   (`visionBridgeHelpers.ts`), bu da **birləşdirilmiş media
   detektoru** `detectMediaParts()`-a yönləndirir `open-sse/utils/mediaParts.ts` — birləşmə uyğunluq filtrinin paylaşdığı tək həqiqət mənbəyi.
   Çıxarma yalnız `replaceImageParts`-ın geri qaytara biləcəyi
   formaların üst səviyyə hissələrinə icazə verilir (çıxarma↔dəyişdirmə müqaviləsi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, və Responses API `input_image`. Daxili zərbələr və
   yalnız göstərici formaları birləşmə-filtr materialıdır və heç vaxt çıxarılmır.
   Heç biri tapılmadıqda keçin.
3. İcraat konfiqurasiyasını `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) vasitəsilə həll edin: yeni `modalityBridge*`
   konfiqurasiya açarları qalib gəlir; köhnə `visionBridge*` açarları **bir dövr
   geri dönüş** (geri dönüş pəncərəsi) olaraq qalır. Köprü deaktiv edildikdə, hər hansı bir media keçidindən əvvəl keçin.
4. Rejim seçici (`modalityBridgeVisionMode`, aşağıdakı cədvələ baxın)
   yönləndirmə və ya təsvir etmə qərarını verir. Yönləndirmə yalnız `model` dəyişdirilmiş `modifiedPayload` ilə geri qaytarır, əlavə olaraq meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Təsvir yolu: şəkilləri `maxImages` ilə məhdudlaşdırın, tapşırığa uyğun
   təklif hazırlayın, təsvir önbelleğini yoxlayın, görmə modelini **paralel**
   (`Promise.allSettled`) çağırın və `[Image N]: <description>` mətn hissələrini
   onların yerində daxil edin. Uğursuz bir təsvir `null` verir və orijinal şəkil hissəsi
   **saxlanılır** (#4012) — yalnız hər bir təsvirin uğursuz olduğu birləşmə təsvir yolu
   zamanı, təsdiqlənmiş qeyri-görmə yuxarıdan `(unavailable — no vision-capable provider connected)` stub ilə əvəz olunur (#8430).
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) geri qaytarın.

#### Rejim seçici (`modalityBridgeVisionMode`)

| Rejim      | Default | Davranış                                                                                                                                                                                                                                                             |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Köhnə heuristika, toxunulmamış (#6640/#7204): qeyri-birləşmə/`auto/` modelləri ən yaxşı görmə modelinə yönləndirilir, əgər orijinal model artıq istifadə edilə bilən kredensiallara malikdirsə (onda təsvir edir); birləşmə hədəfləri həmişə təsvir edir.            |
| `describe` |         | Həmişə təsvir et — yönləndirmə bloku tamamilə atlanır; istifadəçinin seçdiyi model həmişə cavab verir.                                                                                                                                                               |
| `reroute`  |         | Məcburi yönləndirmə: kredensiallı model qoruyucusu atlanır. Yönləndirmə-**hədəf** kredensial qoruyucusu hələ də tətbiq olunur — istifadə edilə bilən görmə hədəfi olmadıqda, sorğu təsvirə düşür ki, xam şəkillər heç vaxt yalnız mətn arxa planda çatmasın (#8430). |

Məcburi rejimlər **avtomatik** heuristika işləmədən əvvəl qısa dövr edir; `auto` davranışı
PR-1 qoruyucusundan əvvəlki ilə bitişikdir.

#### Tapşırığa uyğun təsvir təklifi (`modalityBridgeVisionTaskAware`)

Default **doğru**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`)
son istifadəçi mesajının (500 simvola qədər qısaldılmış) mətnini əsas
təsvir təklifinə əlavə edir, təsviri istifadəçinin əslində nə soruşduğuna yönləndirir
(codex-vision-proxy nümunəsi) və görmə modelindən görünən
mətnin transkripsiyasını tələb edir. Bayraq söndürüldükdə — və ya istifadəçi mətni olmadıqda — əsas təklif olduğu kimi istifadə olunur.

#### Öz-çevriliyi təsvir et (`callVisionModelSingle()`

`visionBridgeHelpers.ts`-də)

Həmişə `image_url.detail: "high"` tələb edir —
şərtsiz, hər bir çağırıcı/təchizatçı üçün, heç bir müştəri siqnalına bağlı deyil.
Aşağı detallı nümunə OCR dəqiqliyini məhz bu promptun tələb etdiyi mətn-transkripsiya
tapşırığı üçün pisləşdirir, buna görə də təsvir çağırışı həmişə yüksək
detal tələb edir, orijinal daxil olan sorğunun istifadə etdiyi detal səviyyəsindən asılı olmayaraq.
Bu yalnız daxili təsvir sorğusunun bədənini təsir edir; OmniRoute-un çağırıcının öz
`image_url.detail`-ni əsas sorğuda necə ötürdüyünü dəyişmir — bu standart ayrıca tətbiq olunur
və yalnız aşkar edilmiş OpenCode müştəriləri üçün, `defaultImageDetail()`-də
(`open-sse/handlers/chatCore/upstreamBody.ts`). Təsvir öz-çevriliyi üçün
Anthropic wire-format bölməsi `detail` sahəsinə malik deyil və hər iki standartdan
təsirlənmir.

#### Təsvir çıxışı limiti (`modalityBridgeVisionMaxChars`)

| Açar                           | Standart | Aralıq              |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` və ya 100–50000 |

`0` (standart) **heç bir limit** deməkdir — `callVisionModel()` tərəfindən
dönən təsvir dəyişdirilmədən keçir, mövcud davranışı qoruyur. 100–50000 aralığında
hər hansı bir dəyər təsviri `…` əlavəsi ilə kəsir, sonra `[Image N]: <description>`
şəklində birləşdirilir (`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts`-də).
Bu, aşağı axın modelinin tam transkripsiyaya ehtiyacı olduğu detallı OCR tapşırıqları üçün artırılmalıdır;
çox danışan vizyon modellərində token istifadəsini məhdudlaşdırmaq üçün azaldılmalıdır.
Dashboard sahəsi Vision tabının Advanced panelində yerləşir
(`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx`-də) və 1-dən 99-a qədər
hər hansı bir dəyəri 100 döşəməsinə qədər sıxır, eyni zamanda açıq `0`-ı toxunulmaz saxlayır —
`0` özlüyündə etibarlı Zod dəyəridir
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), sadəcə
"quraşdırılmamış" standart deyil.

#### Təsvir önbelleği (`modalityBridge/bridgeCache.ts`)

Təsvir çıxışları üçün yaddaşda LRU + TTL önbelleği, prosesi geniş paylaşılır.
Açar = `sha256(imageRef + composedPrompt + configuredBridgeModel)` uzunluq-prefiks çərçivəsi ilə
(sahə sərhəd toqquşmaları yoxdur). Model komponenti **quraşdırılmış** körpü modelidir,
həqiqətən cavab verən model deyil — `callVisionModel` daxili olaraq geri qayıda bilər
və cəhd başına açar yaratmaq önbelleyi parçalayardı. Uğursuz təsvirlər heç vaxt
önbelleklənmir. Parametrlər:

| Açar                            | Standart | Aralıq  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Uzaq görüntü normalizasiyası (öz-çevriliyi təsvir et/base64 əldə et)

Körpü **uzaq** görüntünü özü əldə etdikdə — Anthropic təsvir öz-çağırışı və
claude-wire-format base64 çevrilməsi (`ensureBase64ImagesForClaudeWire`),
hər ikisi `fetchRemoteImageAsDataUri()` vasitəsilə `visionBridgeHelpers.ts`-də —
nəticə data URI `normalizeDataUri()`-dən keçir
(`open-sse/utils/imageNormalize.ts`) və vizyon-model sorğusuna daxil edilir.
Böyük görüntülər **2048px uzun kənar** ölçüsünə endirilir (OpenAI/Anthropic-ın
server tərəfində tətbiq etdiyi ölçü limitinə uyğun), bu da yükləmə baytlarını/latensiyanı
azaldır, lakin vizyon modelinin gördüyü şeyi dəyişmir. Ölçü dəyişdirmə
`sharp` istifadə edir, dinamik idxal vasitəsilə yüklənir: onun yerli
binary-nin yüklənmədiyi bir platformada `normalizeDataUri()` **heç vaxt atmaz** —
o, orijinal baytların keçidinə geri dönür, beləliklə təsvir/base64-çevrilmə
yolu həmişə işlək qalır. Şəkil olmayan baytlar (şəkil döndərməyən bir əldə etmə)
da toxunulmadan keçir. Bu normalizasiya yalnız körpünün öz-çağırışı üçün
əldə etdiyi görüntülərə aiddir — çağırıcının xam keçid yükünə tətbiq edilmir,
yalnız opt-in mutasiyası prinsipi ilə uyğun olaraq (Sərt Qayda #20).

#### Parametrlərin sxemi + köçürmə

Yeni `modalityBridge*` açarları `updateSettingsSchema`-da Zod ilə təsdiqlənir
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` üçlüyü və
Audio Bridge tərəfindən istifadə olunan `modalityBridgeAudio*` qrupu.
Köçürmə `141_modality_bridge_settings.sql` mövcud köhnə
`visionBridge*` dəyərlərini uyğun yeni açarlara kopyalayır (idempotent,
heç vaxt operator tərəfindən təyin edilmiş `modalityBridge*` dəyərini üstələməz);
köhnə açarlar bir buraxılış dövrü üçün oxumaq üçün geri qəbul edilir.

#### Şəffaflıq başlığı + statistikalar

Təsvirə çevrilmiş cavablar
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
daşıyır ( `buildModalityBridgeHeader()`-də `modalityBridge/bridgeStats.ts`-də
yaradılır, `withModalityBridgeHeader()`-də `src/sse/handlers/chatHelpers.ts`-də möhürlənir).
Yenidən yönləndirilmiş sorğular **heç bir** başlıq almır — yük toxunulmamışdır
və model dəyişməsi artıq cavab bədəninin `model` sahəsində görünür.

`GET /api/modality-bridge/stats` (idarəetmə avtorizasiyası,
`GET /api/settings` ilə eyni səviyyədə) yaddaşda hər modallıq üçün
sayğacları döndərir
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, 
latencySamples, averageLatencyMs, lastUsedAt }` `vision`, `audio` və
`video` üçün. `averageLatencyMs` `latencySamples`-dan istifadə edir,
bütün cəhdlərdən deyil, onun paydası kimi; zaman olmadan bir əməliyyat sıfır
millisaniyə nümunəsi yaratmır. `bridged` uğurlu çevrilmələr üçün
geriyə uyğun olan təyin edici olaraq qalır; uğursuz cəhdlər onu artırmır.
Sayğaclar prosesi yenidən başladıqda dizayn üzrə sıfırlanır
(telemetriya, hesablamalar deyil).

#### Dashboard konfiqurasiyası

Təqdim olunmuş idarəetmə paneli səhifəsi
`/dashboard/settings/modality-bridge`-dir. Onun URL-ə müraciət edilə bilən `Vision`, `Audio`
və `Video` tabları `tab` dəyərini dəyişərkən sorğu parametrlərini saxlayır.
Vision tabı aktivləşdirmə, rejim, model seçimi (avtomatik standart daxil olmaqla), tapşırıqdan xəbərdar
istək, inkişaf etmiş vaxt/aşkar/izah uzunluğu/cache limitləri, işləmə
sayğacları və qorunan nümunə tələbi təqdim edir. Audio tabı da canlıdır: o, aktivləşdirmə, yalnız STT üçün model seçici, Avtomatik, vaxt/maksimum-klip limitləri, audio
sayğacları və `input_audio` nümunə testi təqdim edir. Video tabı funksionaldır: o, FFmpeg/ffprobe işləmə vəziyyətini bildirir — dörd açıq UI vəziyyətindən biri (`unknown` probe uçuşda olduğu zaman və ya tamamlanmadığı zaman, `restricted` qeyri-loopback idarəetmə paneli hostunda probe-un müştəri tərəfində atlandığı zaman, `unavailable` probe edildikdən sonra və itkin olduğu təsdiqləndikdə, ya da `available` FFmpeg/ffprobe versiyaları ilə) — aktivləşdirmə/model/kadr/video/vaxt limitlərini saxlayır, model seçicisini vizion qabiliyyətli modellərlə filtr edir və video sayğaclarını təqdim edir.

AI parametrləri altında əvvəlki Vision Bridge kartı yeni səhifəyə uyğunluq bağlantısıdır; o, artıq formanın ikinci nüsxəsinə sahib deyil. Media Providers həmçinin Image-to-Text və Speech-to-Text iş axınlarını müvafiq Modality Bridge tablarına bağlayır, mövcud Speech-to-Text oyun sahəsini silmədən.

**Öz-özünə döngə qəbulunu keçmək:** təsvir çağırışı OmniRoute-un öz `/v1` öz-özünə döngəsi (standart olmayan provayder modeli) vasitəsilə yönləndiriləndə, alt-tələb `x-omniroute-admission-bypass: internal` göndərir və həll edilmiş öz-özünə döngə kredensialı ilə təsdiqlənir — yerli `sk_omniroute` sentinel yerli rejimdə, ya da operator tərəfindən konfiqurasiya edilmiş `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env açarı (#1350) beləliklə `REQUIRE_API_KEY=true` yerləşdirmələri hələ də təsvir çağırışını icra edə bilir. Keçid yalnız həmin dəqiq kredensiallar üçün qəbul edilir, beləliklə xarici müştərilər başlığı qəbuldan keçmək üçün istifadə edə bilməzlər.

Köhnə standartlar `src/shared/constants/visionBridgeDefaults.ts`-də yaşayır; yeni rejim/tapşırıqdan xəbərdar/cache standartları və parametrlər resolveri `src/shared/constants/modalityBridgeDefaults.ts`-də yaşayır. Qoruyucu `deps` konstruktor seçimini təqdim edir ki, testlər saxta `getSettings` və `callVisionModel` tətbiqlərini daxil edə bilsin.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio daşıyan söhbət tələblərini hədəfə çatmadan əvvəl ələ keçirir ki, bu hədəf audio girişini qəbul etməyi bilmir. O, heç vaxt söhbət tələbinə yönləndirmir: audio hissələri mövcud OpenAI-ya uyğun çox hissəli son nöqtə vasitəsilə transkripte edilir və seçilmiş söhbət modeli mətn transkriptləri ilə davam edir.

Axın:

1. `supportsAudio`-nu `getResolvedModelCapabilities()` vasitəsilə həll edin. Açıq
   provayder-reyestr metadata qalib gəlir, sonra statik model metadata, sonra sinkronlaşdırılmış
   `modalities_input`. `audio` olmadan bəyan edilmiş giriş siyahısı `false`-dır; heç bir
   qabiliyyət sübutu `null` qalır. Həm `false`, həm də `null` mühafizəkar körpünü aktivləşdirir, `true` isə onu keçərək.
2. `modalityBridgeAudio*` parametrlərini həll edin və hər mesajdan paylaşılabilən üst səviyyə
   audio hissələrini `detectMediaParts()` detektoru vasitəsilə çıxarın. Dəstəklənən tel formaları OpenAI `input_audio`, `audio_url` və
   `source.media_type: "audio/*"`-dır. Nest edilmiş audio yönləndirmə üçün aşkar edilir, lakin
   splice yolu ilə çıxarılmır. İş `modalityBridgeAudioMaxClips` ilə məhdudlaşdırılır;
   sonrakı hissələr toxunulmaz qalır.
3. Konfiqurasiya edilmiş `provider/model`-i qəbul edin, ya da `selectAudioBridgeModel()`-in
   stabil kataloq sırasına uyğun `AUDIO_TRANSCRIPTION_PROVIDERS`-i gəzdirərək istifadə edilə bilən aktiv provayder kredensialı olan ilk modeli seçməsinə icazə verin.
4. `callAudioTranscription()` base64/data-URI audio-sunu çox hissəli
   `file`-ə çevirir, ya da yalnız ictimai çıxış qoruyucusu vasitəsilə DNS pinləmə və 25 MB sərhəd ilə uzaq `audio_url`-u yükləyir. Sonra faylı və seçilmiş
   modeli yerli `/v1/audio/transcriptions` öz-özünə döngəyə POST edir, `resolveSelfLoopBearer()` ilə təsdiqlənir. Mövcud transkripsiya marşrutu normal
   kredensial axtarışı, cooldown/şərait limitlərinin idarə edilməsi və provayderin göndərilməsini həyata keçirir.
5. Uğurlu çağırışlar hissələrini `[Audio N]: <transcript>` ilə əvəz edir. Çağırışlar `Promise.allSettled` ilə işləyir: fərdi uğursuzluq orijinal
   audio hissəsini qoruyur (#4012 müqaviləsi). Əgər hər bir çağırış uğursuz olarsa və hədəf `supportsAudio === false` olduğu sübut edilərsə, hissələr
   `[Audio N]: (mövcud deyil — heç bir STT provayderi qoşulmamışdır)` (#8430 müqaviləsi) olur. Tanınmamış hədəf (`null`) üçün, bütün uğursuz nəticə toxunulmaz qalır. İstifadə edilə bilən STT kredensialı olmayan sübut edilmiş yalnız mətn hədəfi eyni açıq stub-u alır, şəbəkə çağırışı etmədən.

Uğurlu transkriptlər proses üzrə Modality Bridge LRU/TTL cache-dən istifadə edir. Açar audio istinadını, stabil `audio-transcription` əməliyyat etiketini və seçilmiş STT modelini birləşdirir; uğursuzluqlar heç vaxt cache-lənmir. Audio cəhdləri paylaşılmış `bridged`, `cacheHits`, `failures` və `lastUsedAt` sayğaclarını yeniləyir.
Dəyişdirilmiş cavablar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` daşıyır; toxunulmaz
tələblər Audio Bridge seqmenti almır.

İşləmə parametrləri DB-ə əsaslanır və Zod ilə təsdiqlənir:

| Açar                          | Standart | Aralıq                 |
| ----------------------------- | -------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                      |
| `modalityBridgeAudioModel`    | `""`     | Avtomatik və ya STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                   |

Paylaşılan cache `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` və `modalityBridgeCacheMaxEntries` ilə idarə olunur.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Üst səviyyə video hissələrini Chat Tamamlamalarında `messages` və Cavablarda
API `input`-ni hədəf olmayan yerli video dəstəyi olan bir yerə çağırmadan əvvəl
intersept edir. Dəstəklənən formalar `input_video`, `video_url`, `video_source`, HTTPS URL-ləri
və `data:video/*;base64,...` data URI-ləridir. Mətn içindəki sadə fayl adları
video kimi qəbul edilmir.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) sorğu gedişatını,
imkan/politika yoxlamasını, hər bir sorğu üçün toplamağı və cavab yükünü idarə edir.
Hər bir video üçün iş — əldə etmə, tam nəticə keşini, bir çərçivə
ardıcıllığını təsvir etmə (hansı ki, hər hansı bir çağırıcı tərəfindən elan edilmiş audio transkripti birləşdirir) və hər bir cəhdin
metrikləri/abort/təmizləmə — `processVideoPart`-ın arxasında gizlənir
`videoBridgePipeline.ts`-də, `preCall`-ın döngəsi içində hər bir video hissəsi üçün bir dəfə çağırılır.
Bu modul həmçinin açıq port sərhədlərini `VideoMediaBrokerPort`
(baytları əldə etmək və nümunə alınmış çərçivələri çıxarmaq), `VideoAudioTranscriptionPort`
(bir çağırıcı tərəfindən elan edilmiş audio transkripti ilə nümunə alınmış başlıqları birləşdirmək) və
`VideoDrilldownPort` (köhnə xammal mağaza forması) müəyyən edir. İstehsal STT və çərçivə saxlanması
təsvir edən port ətrafında `createVideoSttAdapter` və
`createVideoDrilldownAdapter` vasitəsilə tərtib edilir; sonuncusu
paylaşılan qeyri-şəffaf-handle həyat dövrünü istifadə edir.

İctimai `/v1` sorğu yolu heç vaxt bir alt prosesi idxal etmir və ya çağırmır. Uzaq
videolar 50 MiB sərhədində yüklənir; inline base64 videoların
konservativ 36 MiB dekod edilmiş hər video üçün sərhəd var ki, model/məsajlar/çərçivə
envelopu ictimai JSON sorğu qəbul limitinin 50 MiB daxilində qala bilsin. Inline
uzunluq və dekod edilmiş ölçü təxminləri ayrılmadan əvvəl yoxlanılır. HTTPS
ilk uzaq URL-də və hər bir yönləndirmədə tələb olunur, mövcud
ictimai-yalnız çıxış qoruması ilə DNS pinləmə istifadə olunur. Baytlar daha sonra dəqiq daxili
`POST /api/modality-bridge/video/extract` broker sərhədini keçir. Bu marşrut həm
`LOCAL_ONLY` həm də `SPAWN_CAPABLE`-dır, yalnız bir proses üçün autentifikasiya edilmiş,
etibarlı döngə geri sorğusunu qəbul edir və heç vaxt URL, fayl sistemi yolu, icra edilə bilən
və ya arqument siyahısını qəbul etmir. API bədən ölçüsü boru kəməri və
handler-in artan bədən oxuyucusu müstəqil olaraq 50 MiB broker giriş sərhədini tətbiq edir. Onun sərhədli növbəsi
bir vaxtda bir çıxarış həyata keçirir, dörd gözləyən işi icazə verir və gözləyən girişi
100 MiB ilə məhdudlaşdırır.

Brokerin içində `ffprobe` özəl yerli faylı oxuyur; sabit format
icazə siyahısı çalğı siyahısı və manifest formatlarını istisna edir. İcazə verilən MOV-familiyası
konteynerləri üçün xarici MOV məlumat istinadları standart olaraq deaktivdir və
sabit əmr onlara daxil olmur. Həm `ffprobe`, həm də `ffmpeg`
yalnız `file`-protokol icazə siyahısını, bir iplik, sabit arqument massivlərini, heç bir shell
və `PATH`-dan həll edilmiş icra edilə bilənləri istifadə edir. Bağlı şəkil örtük axınları
oynatıla bilən namizədlər deyil. Bütün oynatıla bilən axınlar sərhədləri
qarşılamalıdır və açıq bir standart axın, deterministik ən aşağı indeks
geri dönüşdən əvvəl üstünlük təşkil edir. Videolar 600 saniyə, 8,192 piksel ölçüsündə
və 33,554,432 mənbə pikseli ilə məhdudlaşdırılır. FFmpeg 1–16 orta JPEG çərçivələrini nümunə alır, uzun
kənarı ən çox 1,024 pikselə qədər aşağı ölçür, daha kiçik girişləri böyütmür və
heç vaxt URL almır. Nümunə alma `uniform` standartdır. İstəyə bağlı
`scene_aware` və eksperimental `segment_aware` siyasətləri artıq təsdiqlənmiş yerli axın üzərində
bir əlavə sabit FFmpeg keçidi həyata keçirir, sərhədli `showinfo` səhnə zaman damgalarını seçir
və detektor uğursuzluğu, zaman aşımı, yanlış formatlı çıxış və ya boş
namizəd dəstində deterministik olaraq eyni
uniform orta nöqtələrə geri dönür. Segment-şüurlu rejim, orta nöqtə nümunələrini
təsdiqlənmiş səhnə intervallarına nisbətən ayırır; segment-şüurlu sübut və geri dönüş davranışı
aşağıda ətraflı izah edilir. Sərt 16-çərçivə sərhədi
hər bir siyasətdə seçimdən sonra tətbiq olunur. Bir səhnə-şüurlu sorğu yalnız bir
çərçivə büdcəsinə malik olduqda, aktiv tam-video və ya fokus
pəncərəsinin uniform orta nöqtəsini istifadə edir və `policyEffective: uniform`-u bildirir: seçilmiş bir səhnə çərçivəsi
həm temporal sonları qorumaq mümkün deyil. Bir çağırıcı istəyə bağlı olaraq
məhdud bir fokus pəncərəsi (`start`/`end` saniyələri) təqdim edə bilər; sərhədlər media
müddətinə sıxılır, tərsinə və ya qeyri-məhdud pəncərələr rədd edilir və bütün nümunə
siyasətləri yalnız normallaşdırılmış intervallarda həyata keçirilir. Nəticədə
pəncərə nümunə metadata-sına və etibarsız təsvir
prefiksinə daxil edilir ki, aşağıdakı modellər fokuslanmış bir çıxarışı tam
xronologiyadan ayıra bilsin.

Semantik başlıq fokuslanması ayrı, açıq bir tənzimləməsidir. Standart `full`
analiz rejimi mövcud çərçivə təklifi qoruyur və heç vaxt sorğu
mətnini başlıq modelinə göndermir. `focused` rejimində, körpü yalnız
sonuncu boş olmayan istifadəçi tərəfindən yazılmış `text`/`input_text`-i eyni Chat və ya Cavablar
konteynerindən oxuyur, onu NFC-yə normallaşdırır, idarəetmə simvollarını və boşluqları
birləşdirir və 500 Unicode kod nöqtəsi ilə məhdudlaşdırır. Boş nəticə
tam `full` təklifinə geri dönür. İstifadə edilə bilən ipucu xüsusi
etibarsız-istifadəçi-kontekst blokunda JSON formatında seriyalaşdırılır və yalnız
görünən detallara prioritet verə bilər; o, mediada görünən və ya eşidilən
təlimatları izləmək üçün ayrı xəbərdarlığı üstələyə bilmir. Mətni fokuslama heç vaxt
`start`/`end`-i çıxarmır və ya temporal nümunə alıcısını dəyişmir.

#### FU-07 struktur seqment sübutu

`segment_aware` artıq təsdiqlənmiş yerli video axını üzərində bir sərhədli əvvəlcədən analiz keçidini
istifadə edir. Sabit filtr zənciri əvvəlcə ən çox 320 piksel genişliyə qədər ölçülür, səhnə dəyişikliklərini
və donmuş intervalları aşkar edir, sonra bulanıqlıq, orta luma və məkan/temporal məlumat üçün
saniyədə 1 çərçivə nümunə alır. Keçid 600 struktur nümunə ilə, bir FFmpeg/filter ipliyi,
eyni `file`-protokol və konteyner icazə siyahıları, 1 MiB proses-çıxış sərhədi
və brokerin paylaşılmış abort/son tarixində ən çox 30 saniyə ilə məhdudlaşdırılır. O, heç vaxt
sorğudan əmr, filtr, yol və ya URL qəbul etmir.

Struktur dəyərləri deterministik nümunə sübutlarıdır, semantik video anlama deyil. Onlar mövzuları, hərəkətləri, başlıqları, nitqi və ya istifadəçi niyyətini çıxarmazlar. Səhnə və donma sərhədləri seqmentlər yaradır; donma əhatəsi, bulanıqlıq, ekspozisiya, məkan detalları və zaman dəyişiklikləri yalnız mövcud 1–16 çərçivə büdcəsinin necə paylanmasına təsir edir. Tamamilə donmuş bir seqment bir çərçivə ilə məhdudlaşır, qeyri-donmuş seqmentlər isə qalan büdcə üçün mübarizə aparır. Sərhədlər çərçivələrdən çox olduqda, vahid zaman xətti əhatəsi saxlanılır ki, sürətli erkən kəsiklər uzun bir ardıcıl seqmenti gizlədə bilməsin. 1 saniyəlik analiz həllindəki donma sərhədləri birləşdirilir.

İtkin filtrler, yanlış/formasız/boş sübutlar, detektor xətası və ya məhdudlaşdırılmış ön analiz vaxtı dəqiq vahid orta siyasətə açıq şəkildə uğursuz olur. Bir çağırıcı abortu və ya broker müddəti açıq şəkildə uğursuz olmur: bu, uçuşda olan alt prosesi dayandırır, sonrakı çərçivə çıxarılmasını maneə törədir və özəl müvəqqəti ağac `finally`-də silinir.

`scripts/perf/video-bridge-fu07-eval.ts` post-dedup başlıq çağırış qənaətləri, sıx-hərəkət büdcə paylanması, bulanıqlıq/ekspozisiya/SI-TI sübutları, uzun quyruqlu sürətli kəsiklər və tədricən solğun yanlış müsbətləri üçün deterministik real FFmpeg düzəlişləri yaradır. O, ön analiz divar vaxtını qeyd edir və `/usr/bin/time` mövcud olduqda, uşaq CPU və pik RSS-i qeyd edir. Onun keyfiyyət yoxlamaları yalnız struktur orakllarıdır. Real başlıq-model keyfiyyəti `HOLD` olaraq qalır, çünki bu harness-in icazə verilmiş son nöqtəsi və ya donmuş hakimi yoxdur. Pul qənaətləri də `HOLD` olaraq qalır, əgər `--caption-cost-per-call-usd` açıq müsbət başlıq başına qiymət təqdim etmirsə; skript heç vaxt bu nəticələri uydurmur.

Hər bir çərçivə 4 MiB ilə, bütün xam çərçivələr bir yerdə 23 MiB ilə və seriyalaşdırılmış broker cavabı 32 MiB ilə məhdudlaşır. Özəl müvəqqəti direktoriyaya `finally`-də silinir. OmniRoute FFmpeg-i birləşdirmir və özəl icra yolu qəbul etmir. Başlıqdan əvvəl, körpü mühafizəkar vizual deduplication keçidini tətbiq edir: hər JPEG 16×16 boz tonlu tamponuna azaldılır və yalnız son saxlanılan çərçivə ilə müqayisə edilir. Bir çərçivədən yuxarı tələb olunan başlıq büdcəsi üçün, çıxarılma iki dəfə bu büdcənin məhdudlaşdırılmış namizəd hovuzunu təmin edir və heç vaxt 16 çərçivədən çox olmur. Tələb olunan limit yalnız deduplication-dan sonra tətbiq edilir, ilk və son seçilmiş namizədlər büdcə ən azı iki olduqda son incələmə zamanı saxlanılır. Versiyalı `grayscale-16x16-mean-cells-v2` siyasəti, ortalama luma delta və normalizə edilmiş delta ən azı 0.05 olan thumbnail hüceyrələrinin nisbətinin daha böyüyünü istifadə edir. Təkrarlama həddi sabit 0.04-dür, proqnozlaşdırıla bilənlik üçün seçilmişdir, runtime parametri kimi açıq şəkildə göstərilməmişdir. Bu ikincil yüksək-contrast siqnal kiçik hərəkətləri və görünən mətn dəyişikliklərini qoruyur ki, yalnız ortalama müqayisə gizlədə bilər. Müqayisəçi və ya deşifrə xətaları açıq şəkildə uğursuz olur və əhatəni saxlayır. Çıxış metadata çıxarılan namizədləri, uğurla istifadə olunan çərçivələri və vizual təkrarlamaları ayırır.

Açıq şəkildə işarələnmiş video hissəsi zaman damğalı əlaqə vərəqi tələb edə bilər. Körpü ən çox 4 sütunlu, 16 çərçivə JPEG şəbəkəsi yaradır. Hər 512 piksel hüceyrəsi öz mənbə zaman damğasını yüksək-contrast alt zolağa yandırır, eyni zaman damğaları isə aşağı axın əlaqəsi və audit üçün mətn metadata-da qalır. Tam JPEG 32 MiB ilə məhdudlaşır. Əgər `sharp` şəbəkəni deşifrə edə və ya tərtib edə bilmirsə, körpü fərdi JPEG çərçivələrinə geri dönür; müştəri abortu hələ də vərəq əməliyyatı vasitəsilə yayılır.

Təqdimat sübutları qəsdən sintetik tərkib mikrobenchmarkından ayrıdır. `scripts/perf/video-bridge-contact-sheet-eval.ts` real OpenAI-ya uyğun görmə modelləri üçün sxema-versiyalı A/B harnessini müəyyən edir. O, təminatçı tərəfindən bildirilen tokenləri, uçdan-uça divar gecikməsini (vərəq tərkibi daxil olmaqla), model çağırış sayını və manifestlə müəyyən edilmiş fakt saxlanmasını ölçür. Xam model cavabları hesabatda yazılmır; yalnız SHA-256 xülasələri və uyğun fakt ID-ləri saxlanılır. Harness heç bir şəbəkə və ya ödənişli model çağırışı etmir, əgər `--execute-real` ötürülməsə və `--model`, `OMNIROUTE_BASE_URL` və `OMNIROUTE_API_KEY` konfiqurasiya edilməsə. O açıq real icra olmadan, onun maşın oxuna bilən hökmü `HOLD` olaraq qalır; sintetik yük/çağırış sayı ölçmələri tək başına təqdimat sübutu deyil.

Ayrı `scripts/perf/video-bridge-promotion-eval.ts` FU-07 və ya FU-09 müşahidələrini istehlak edir. Təqdimat qəbul etmək üçün bütün səkkiz sintetik ssenari növü və sanitizasiya edilmiş real klip, hər rol və hal üçün ən azı üç ölçülmüş təkrarlama, bütün on bəyan edilmiş metrik, donmuş media/prompt/gözlənilən-fakt/ayarlar xülasələri, unikal müşahidə ID-ləri və təsdiqlənmiş toxum A/B sırası tələb olunur. İcra qəbzi korpus xülasəsini, dəqiq namizəd SHA və model versiyasını bağlayır. İtkin və ya etibarsız ölçmələr `HOLD` olaraq qalır, 30 s-dən yuxarı CPU, 512 MiB-dən yuxarı pik RSS və ya 30 s-dən yuxarı ön analiz daxil olmaqla. Bunlar sübut-qəbul limitləridir, yeni runtime RSS icra zəmanəti deyil.

FU-07 ən azı 98% keyfiyyət saxlanmasını və p95 gecikməsini 1.2x-dən çox olmamağı tələb edir, həmçinin ya 0.05 mütləq hal-balanclı ortalama geri çağırma artımını eyni ortalama başlıq çağırışları ilə, ya da ən azı 10% daha az ortalama post-dedup başlıq çağırışlarını tələb edir. FU-09 ən azı 0.85 keyfiyyət, 95% saxlanma, 20% p95 gecikmə azaldılması və 10% token azaldılması tələb edir. Kritik-fakt itirilməsi, inyeksiya uyğunluğu və ya itkin istifadə təqdimatı maneə törədir. Bir icra heç nəyi təqdim edə bilmir: `--previous-report` eyni siyasət/model versiyası/namizəd/korpusun iki fərqli, üst-üstə düşməyən, ardıcıl uyğun icrasını təsdiqləyir. Nümunə eksperimentinin əlaqə vərəqi eksperimentini təsdiqləməsi mümkün deyil.

Kollektorlar cavabları yaddaşda qiymətləndirməli və `responseDigest` ilə birlikdə metrikaları və müşahidə bağlamalarını saxlamalıdır, heç vaxt cavab mətnini. İstehlakçı köhnə xam müşahidələri oxuyur, lakin o mətnləri hesabatlarına kopyalamır. Hər bir müşahidə üçün yalnız `responseDigest` və ya `rawResponseText` qəbul edilir. Versiyalı icazə siyahısı dəyişməz `hold` standartı ilə boş qalır. Uyğun bir giriş öz sübut istinadını, siyasətini, modelin versiyasını, dəqiq namizəd SHA-sını, manifest digestini və iki fərqli icra ID-sini tələb edir; münaqişəli kontekstlər rədd edilir. Bu metadata audit müqaviləsidir, istinad olunan faylın həqiqi ölçmələr ehtiva etdiyinə dair sübut deyil. Hər hansı bir giriş əlavə etməzdən əvvəl faktiki qəbzləri nəzərdən keçirin. İdarəetmə statistikaları son nöqtəsi və Video paneli mühafizəkar hazırlığı açıq şəkildə göstərir. Konfiqurasiya edilmiş model təxmini yalnız onun versiyasını və ya işləyən namizəd SHA-sını müəyyən etmir, buna görə də cari panel `HOLD` bildirir, başqa icra kontekstindən uyğunluğu yenidən istifadə etmir. Açıq eksperimental seçim təşviqdən ayrı qalır; heç bir standart avtomatik olaraq dəyişdirilmir.

Çağıranlar artıq uyğunlaşdırılmış mətni olduqda dəstəklənən video hissəsinə əlavə olaraq `transcript.cues` massivini əlavə edə bilərlər. Hər bir cue `text`, ölçülən müddət içində sonlu `start`/`end` intervalları və ağ siyahıya alınmış `source` (`client`, `embedded`, və ya `audio-bridge`) daşımalıdır; `confidence` standart olaraq `1`-dir və `0` ilə `1` arasında qalmalıdır. Tam eyni cue-lar birləşdirilir. OmniRoute bu metadata-dan transkripsiyanı heç vaxt başlamır: təsdiqlənmiş cue-lar təsvir olunan nəticəyə mənbə, etibar və interval ilə kopyalanır və çərçivə başlıqları ilə yanaşı etibarsız müşahidələr kimi təqdim edilir. Yanlış, aralıqdan kənar və ya mənşəyi olmayan mətn rədd edilir, başlıq axınına qarışdırılmır. Hər iki sorğu-bədən transkript kanalları təqdim olunan mənşəyi `client`-ə normallaşdırır, özünü təsdiqlənmiş `embedded` və ya `audio-bridge` etiketlərini də daxil edir. Yalnız serverə aid adapter bu etibarlı etiketləri yalnız kodla `trustedSource` arqumenti vasitəsilə təyin edə bilər; bir sorğu JSON sahəsi o arqumentə çata bilməz. Transkript mətni etibarsız media-əsaslı məzmun olaraq qalır, onun mənşəyindən asılı olmayaraq, və heç vaxt səlahiyyət verməməlidir.

İrəliləmiş bir çağıran eyni video üçün `audioTranscript` track təqdim edə bilər; bu, server transkripsiyasının sübutu deyil, müştəri tərəfindən təqdim olunan mətn kimi qəbul edilir. Birləşmə dikişi vizual və audio müşahidələri bir son tarix və abort siqnalı altında aparır, onları ümumi bir zaman çizelgesində sıralayır, tam eyni olanları birləşdirir və yalnız bir tərəf müvəffəq olduqda qismən nəticə bildirir. Yanlış `audioTranscript` o qismən nəticəyə düşür — vizual təsvir saxlanılır və audio şöbəsi sanitizasiya edilmiş uğursuzluq kodunu qeyd edir — bütün videonu uğursuz etmədən. Hər bir şöbə üçün mövcudluq, qismən bayrağı və sanitizasiya edilmiş uğursuzluq kodları təsvir olunan nəticədə, qoruyucu metadata-da (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), nəticə-cache metadata-da və körpü birləşmə sayğaclarında saxlanılır. Default Video Bridge yolu danışıqdan mətbəxə keçid etmir və ya ikinci media nüsxəsini yükləmir; bu açıq track olmadan, yalnız video olaraq qalır.

**Transkriptin saxlanılması (#12150 P1).** Bu, Video Bridge (öz-özünə opt-in) bir transkript cue təqdim etdikdə avtomatik olaraq tətbiq olunur — ayrıca saxlanma bayrağı yoxdur. Bir sorğu hər hansı bir transkript cue (çağıran tərəfindən elan edilmiş `transcript` və ya birləşdirilmiş `audioTranscript`) təqdim etdikdə, qoruyucu onu `videoBridgeObserved` olaraq işarələyir və videonun təsvirinin redaktə edilmiş kölgəsini yaradır — hər cue-nin sərbəst mətn bədəni ` [redacted-video-transcript]` ilə əvəz olunur, bu da strukturlaşdırılmış cue sahəsini mətn birləşdirilmədən əvvəl əvəz etməklə yaradılır (heç vaxt düz mətni analiz etməklə, beləliklə heç bir cue məzmunu — düşmənçilik və ya adi, `]` kimi bədənləri daxil olmaqla, məsələn, `[inaudible]`/`[music]` — sağ qala bilmir). Saxlanılan çağırış-log sorğu bədəni hər bir video-əsaslı mətn hissəsini o redaktə edilmiş kölgə ilə dəyişdirir, məzmun bərabərliyi ilə uyğunlaşdırılır; `fullText` ankeri tamamlanmış əvvəlki çağırış qoruyucu yükdən yenidən oxunur, beləliklə uyğunluq daha sonra zəncir qoruyucuları (PII və etimad maskaları, prioritetlər 10/95) təsvir mətni yerində yenidən yazdıqdan sonra hələ də müvəffəq olur və sistem-təklif/ötürmə/yaddaş inyeksiya mesaj massivini yenidən formalaşdırır. Modelə göndərilən bədən dəyişməz qalır. Görülən bir sorğu da heç bir davamlı Yaddaş doldurmur (həm sorğu, həm də cavabdan əldə etmə atlanır), beləliklə modelin öz cavabı transkript mətni Yaddaşda əks etdirə bilmir.

**Xam video sahələri (#12430).** Körpü aktivləşdirildikdə və yerli video dəstəyi məlum deyil və ya yoxdur, müəyyən edilmiş `transcript`/`audioTranscript` sahələri də `videoBridgeObserved`-i aktivləşdirir, təsvir uğursuzluğu və ya `maxVideos` limitindən sonra belə. `null` və boş sətirlər sayılır; mövcud olmayan sahələr və qeyri-video metadata sayılmır. Saxlanılan nüsxələr bu sahələri redaktə edir və ya sorğunu atlayır, və cache-lər/Yaddaş bypass edilir. Təchizatçı yükü dəyişməz qalır.

Əlavə saxlanılan nüsxələr eyni görülən-sorğu siqnalını istifadə edir. Xam əvvəlki qoruyucu müştəri-sorğu snapshot-u, yaddaşda gözləyən sorğu və erkən rədd edilmiş sorğu logu video hissələrində transkript sahələrini strukturca əvəz edir; boru kəməri mərhələləri və kontekst ötürməsi tərəfindən sintetik olaraq yaradılan sətir təklifləri saxlanılan-sorğu-bədən çuxurunda redaktə edilir. Saxlanılan `video_content_removed` işarəsi `previous_response_id` davamını bağlayır, əksinə, qəsdən atılan mətni bərpa etməyə çalışır. Əgər görülən bir sorğu logdan əvvəl hər bir hissə üçün redaktə kölgəsini itirirsə, ya da bir neçə video kölgəsindən biri sonrakı sorğu dəyişikliklərindən sonra uyğun gəlmirsə, saxlanılan sorğu bədəni tamamilə atılır, qismən redaktə edilmiş transkript saxlanılmır.

Müşahidə olunan bir sorğu üçün model cavabı transkriptin istənilən hissəsini struktursuz siqnal sərhədindən sitat gətirə bilər. Onun saxlanılan çağrı-jurnalı `responseBody` buna görə də bir istisna işarəsi ilə əvəz olunur; ətraflı pipeline artefaktı (yuxarı axın/müştəri cəsədləri və axın parçaları daxil olmaqla) saxlanılmır. Semantik, idempotentlik və düşüncə-təkrar önbellekləri bu sorğu üçün oxuma və yazma əməliyyatlarını atlayır. Provayder sorğusu və müştəriyə görünən cavab dəyişməz qalır. Ətraflı artefaktın istisna edildiyi zaman erkən keepalive baytları müvəqqəti tampondan boşaldılır. Kiro'nun yanlış formatlı EventStream xəbərdarlığı yalnız yük bayt sayını bildirir, heç vaxt onun məzmununu və ya JSON parser-in xam səhvini göstərmir. Bu, hər bir əlaqəsiz provayder/plugin diaqnostikasının yoxlanıldığını iddia etmir; daha geniş saxlanılan-sink təmizlənməsi #11658-də izlənilir.

Daxili `/api/modality-bridge/video/drilldown` həyat dövrü ayrı, loopback/token-authenticated cache substratıdır. Hər bir əməliyyat eyni zamanda bir kanonik qeyri-şəffaf əsas ID tələb edir. İstehsal çağıranı aktivləşdirilməzdən əvvəl, bu ID-ni təsdiqlənmiş kirayəçidən çıxarmalıdır və müştəri tərəfindən seçilmiş bir dəyəri heç vaxt ötürməməlidir. Cache açarları bu əsas ID-ni kanonik sessiya və video-referans ID-lərinə bağlayır, yalnız onların SHA-256-dan əldə edilmiş açarlarını saxlayır və oxuma və silmə əməliyyatlarını eyni əsas ID-yə məhdudlaşdırır. Cache hər bir giriş üçün ən çox 16 əldə edilmiş JPEG çərçivəsini saxlayır, onları on dəqiqədən sonra müddəti bitirir və məhdud `start`/`end` oxuma və ya açıq sessiya silmə əməliyyatlarını dəstəkləyir.

Hər bir əsas ID 16 giriş və 64 MiB kanonik JPEG məlumatı ilə məhdudlaşır. Bu məhdudiyyətlər qlobal 64-giriş/256 MiB tavanından müstəqildir: əsas kvota təzyiqi yalnız həmin əsas ID-nin ən az istifadə olunan girişlərini silir, qlobal LRU silinməsi nəzərə alınmadan. Müddəti bitmiş girişlər cache fəaliyyətində həm əsas, həm də qlobal hesabdan silinir, ləğv və təsdiq uğursuzluğu isə qismən əvəzləmə etməz.

Cache qeyri-kanonik Base64, artıq doldurma, qeyri-JPEG media, yanlış formatlı və ya kəsilmiş JPEG-ləri, həmçinin məhdud tam şəkil `sharp` dekodlaşdırma zamanı xəbərdarlıq verən JPEG-ləri rədd edir. Hər qəbul edilmiş şəkli kanonik JPEG formatında yenidən kodlayır, genişlik və hündürlüyü dekodlaşdırılmış baytlardan çıxarır, çağıran sahələrə etibar etmir və hər hansı bir arxa planda olan polyglot baytları saxlamır. Yalnız məhdud kanonik sıxılmış tampon hər iki kvotaya yüklənir. JSON simli limiti 32 MiB dekodlaşdırılmış-giriş tavanı üçün Base64 əlavə yükünü əhatə edir. Hər saxlanılan derivasiya təsdiqlənmiş JPEG formatını/həcmını, nümunə siyasətini, derivasiya versiyasını, yaradılma vaxtını, server tərəfindən hesablanmış məzmun hashını və hash edilmiş valideyn referansını, eləcə də etibarlı çağıranın valideyn-məzmun hashını qeyd edir. Ləğv, atomik cache öhdəliyindən əvvəl asinxron dekodlaşdırma/hash mərhələləri arasında yoxlanılır.

İstehsal istehsalçısı artıq əldə edilmiş broker çərçivələrini yalnız uğurlu vizual analizdən sonra yenidən istifadə edir, ikinci video yüklənməsi/çıxarılması olmadan. O, operator `modalityBridgeVideoDrilldownEnabled=true`, sərt hissə üzrə `drilldown: true` və təsdiqlənmiş API açarının qeyd ID-sini tələb edir. Müştəri tərəfindən bəyan edilmiş əsas/sessiya dəyərləri heç vaxt mülkiyyət qurmaz. Bu üç şərt olmadan əlavə çərçivələri hash etmir, ölçüsünü dəyişmir və saxlamır. Saxlama uğursuzluğu istifadə edilə bilən vizual cavabı qoruyur. Razılaşdırılmış sorğular bütün-video nəticə cache-ni atlayır, beləliklə, saxlanılan nəticələr heç vaxt yenidən oynanılmır.

Uğurlu JSON və SSE cavabları məhdud `x-omniroute-video-drilldown` başlığında ən çox dörd qeyri-şəffaf tutacaqları açır. İcazə verilmiş brauzer mənşələri bu başlığı genişləndirmədən oxuya bilər. Yeni tutacaqlar `v1.<32-byte random base64url token>` formatını istifadə edir və qeydiyyat yalnız onların SHA-256 hashlarını saxlayır. Oxuyucu/header parser köhnə 64-hex tutacaqları da qəbul edir. Təsdiqlənmiş ictimai istehlakçı `GET /api/v1/video-bridge/drilldown?handle=...` şəklindədir, müstəqil olaraq `modalityBridgeVideoDrilldownRemoteEnabled=true` ilə qorunur. Açıq saxlanılan yanlış giriş, köhnə `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env geri dönüşü aktiv olsa belə, giriş hüququnu ləğv edir. İstehsal saxlanması analoji köhnə `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` geri dönüşünə malikdir. Hər iki geri dönüşün standart olaraq deaktivdir.

İstehlakçı təsdiqlənmiş açardan mülkiyyət çıxarır, açar siyasətini tətbiq edir və bilinməyən, müddəti bitmiş və başqa açarların tutacaqları üçün eyni 404 qaytarır. O, `variant=preview|standard|detail` (maksimum JPEG ölçüsü 320/640/1280, heç vaxt böyüdülmür), `limit=1..8` (ya da köhnə `frames` təyini, heç vaxt ikisi bir yerdə), sıfırdan başlayaraq `page` və optional `start`/`end` fokus saniyələrini qəbul edir. Təkrarlanan sorğu açarları və tərsinə fokus pəncərələri rədd edilir. Hər bir qaytarılan variantın faktiki məzmununun və faktiki həcm metadata-sının hashı saxlanılan mənbəyə bağlıdır. Variants oxuma zamanı çıxarılır, əlavə saxlanılan nüsxələr kimi saxlanılmır. JSON cavabı, Base64/qablaşdırma daxil olmaqla, 32 MiB ilə məhdudlaşdırılır; ölçüsü artıq olan bir səhifə 413 qaytarır və müştəri daha az çərçivə tələb etməlidir. Oxumalar hər ölçü dəyişdirmə ətrafında ləğvi yoxlayır və qaytarılmadan əvvəl tutacaq etibarlılığını yenidən yoxlayır. Sahibi tərəfindən `DELETE` idempotentdir; silmə və ya TTL müddətinin bitməsi saxlanılan mənbəni və istifadə hesabını azad edir.

Paylaşılan mağaza proses-lokaldır: tutacaqlar yenidən başladıqda müddəti bitir və müstəqil OmniRoute prosesləri arasında köçürülmür. İdarəetmə statistikaları yalnız effektiv saxlanma/uzaqdan siyasətini və toplanmış saxlanılan girişləri/baytları açıq şəkildə göstərir, heç vaxt media, referanslar, əsas ID-lər və ya tutacaqları göstərmir. Video parametrləri paneli bu dəyərləri göstərir və hər iki razılıq keçidini saxlayır. Bu tətbiqetmə sənədi canlı yerləşdirmə və ya təşviq sübutu deyil; real-model qəbulunu ayrıca izlənilir.

Kadrlar konfiqurasiya edilmiş Video modeli ilə ardıcıl olaraq başlıqlanır. Boş Video üstü Vision ayarını miras alır; əgər hər ikisi boşdursa, Vision avtomatik yönləndirici effektiv vizyon qabiliyyətli modeli seçir. Uğurlu başlıqlar orijinal hissəni sabit `[Video description:` prefiksi ilə əvəz edir ki, bu da mətni etibarsız media mənşəli müşahidə kimi işarələyir və aşağıdakı modellərə mediada tapılan təlimatları izləməməyi bildirir. Kadr-başlıq keş açarları JPEG baytlarını, promptu, zaman damgasını və effektiv modeli əhatə edir; yalnız uğurlu başlıqlar keşlənir. Keş girişləri faktiki uğurlu istehsalçı modelini, o cümlədən ehtiyat modelini saxlayır; körpü `mixed` hesabatını verir, əgər fərqli kadrlar fərqli modellər tərəfindən istehsal olunubsa. Keş hitləri istehsalçı kimliyini yenidən etiketləmək əvəzinə istifadə edir. Tam-video nəticə keşi çıxışı dəyişən hər bir girişə əsaslanır — prompt, effektiv model, nümunə siyasəti, kadr sayı, semantik analiz rejimi, normallaşdırılmış fokus ipucu, fokus pəncərəsi, `transcript`, `audioTranscript` və kontakt-şəkil flaqı — buna görə də bu ölçülərdən hər hansı birinin dəyişməsi keş itirilməsi, heç vaxt köhnə istifadəsi deyil. Vizual dedup siyasəti versiyası, hədd və məhdud namizəd-kadr sayı da nəticə-keş açarı və metadata-da açıqdır; buna görə də siyasət dəyişikliyi köhnə tam-video təsvirini yenidən istifadə edə bilmir. Nəticə-keş v4 metadata rejimi və fingerprinti saxlayır, heç vaxt xam istifadəçi tapşırığını. Qoruyucu metadata həm tələb olunan, həm də effektiv analiz rejimlərini bildirir; istifadə edilə bilən istifadəçi mətni olmayan tələb olunan `focused` rejimi effektiv olaraq `full` kimi bildirilir.

Qoruyucu hər dəstəklənən video hissəsini çıxarır, lakin `modalityBridgeVideoMaxVideos`-dan artıq təsvir etmir. `supportsVideo === false` olduğu sübut edilmiş bir hədəf üçün, uğursuz və həddən artıq limitli videolar açıq təhlükəsiz mətn işarələrinə çevrilir ki, heç bir xam video sağ qalmasın. İmkan bilinmədikdə, həmin hissələr toxunulmaz qalır. `supportsVideo === true` olan hədəflər körpünü keçirlər. Müştəri sorğusu abort siqnalı yükləmə, broker növbəsi, alt proseslər və başlıq çağırışları vasitəsilə yayılır; abortlar videolar arasında dayanır və heç vaxt xam mediaya açıq qalmır.

İcra parametrləri DB ilə dəstəklənir və Zod ilə təsdiqlənir:

| Açar                                | Default     | Aralıq / davranış                                                                                     |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İstəyə bağlı icra, iştirak etmə                                                                       |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ümumi başlıqları qoruyur; `focused` məhdud, etibarsız son istifadəçi kontekstini istifadə edir |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini miras alır                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, və ya nisbətli `segment_aware`; detektor uğursuzluğu `uniform`-a geri dönür |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                        |

120 saniyədən yuxarı köhnə saxlanılan Video vaxtı dəyərləri broker son tarixinə sıxılır; bu limitdən yuxarı yeni parametrlər yazıları rədd edilir. `GET /api/modality-bridge/video/runtime` etibarlı möhürlənmiş döngə yerini tələb edir, sonra idarəetmə autentifikasiyası tələb edir. Bu, yalnız `mövcud`, sanitizasiya edilmiş FFmpeg/ffprobe versiyalarını və icra mövcud olmadıqda sabit səbəb qaytarır. Daxili çıxarma uç nöqtəsi ictimai yükləmə API deyil: növbə doyması `503` və `Retry-After` qaytarır, çağıran əlaqə kəsilməsi `499` qaytarır və sabit broker son tarixi `504` qaytarır. Dönüşdürülmüş cavablar mərkəzi `x-omniroute-modality-bridge` başlığına `video->text;model=<visionModel>;parts=<videos>` əlavə edir, Vision və Audio seqmentlərini çıxarmadan.

### PII Masker (`piiMasker.ts`)

**Hər iki** mərhələdə işləyir.

- **`preCall`** yükü klonlayır, `system`, `messages`, `input` və `prompt` (sadə mətn elementləri daxil olmaqla) üzərində gəzərək `processPII()` ( `@/shared/utils/inputSanitizer`-dan) string `content`/`text` sahələrinə tətbiq edir. `PII_REDACTION_ENABLED=true` olduqda, aşkar edilmiş PII çıxarılır. Bu, `INPUT_SANITIZER_MODE`-dan müstəqildir (yalnız prompt-injection siyasətini idarə edir). Çıxarma söndürüldükdə, çağırış aşkar etmə saylarını qeyd edir, məzmunu yenidən yazmadan.
- **`postCall`** cavabı dərin klonlayır, `sanitizePIIResponse()` və Cavablar-API-forma maskeri (`maskResponsesOutput` — `output_text` və `output[].content[].text`-i əhatə edir) işləyir. Hər hansı bir çıxarma baş verdikdə, dəyişdirilmiş cavab orijinalı əvəz edir.

Qoruyucu heç vaxt bloklamır; yalnız annotasiya edir (`meta.detections`, `meta.redacted`) və ya yenidən yazır.

### Prompt Injection (`promptInjection.ts`)

İstifadəçi tərəfindən təqdim olunan məzmundakı düşmən strukturlarını aşkar edir və konfiqurasiya edilmiş siyasəti tətbiq edir. Davranış mühit dəyişənləri və konstruktor seçimləri ilə idarə olunur:

| Tənzimləmə | Env var                                                                                                 | Default | Təsir                                                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiv      | `INPUT_SANITIZER_ENABLED`                                                                               | `true`  | `false` olduqda, qoruyucu qısa dövr edir.                                                                                                                                                         |
| Rejim      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                         | `warn`  | İnsersion siyasəti: `block`, `warn`, və ya `log`. (`redact` geri uyğunluq üçün qəbul edilir, lakin **injection** mətnini silmir; PII yenidən yazılması `PII_REDACTION_ENABLED` ilə idarə olunur.) |
| Blok həddi | `blockThreshold` seçimi / `INPUT_SANITIZER_BLOCK_THRESHOLD` (təxmini `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Bloklamaq üçün tələb olunan minimum şiddət. Orta, standartda yalnız müşahidə üçündür.                                                                                                             |

**Rejim üstünlüyü** (`getMode`): çağıran `options.mode` →
`INJECTION_GUARD_MODE` **DB xüsusiyyət-flaqı üstələmə** (Dashboard → Tənzimləmələr →
Xüsusiyyət Flaggları) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Dashboard üstələməsi buna görə də env dəyişənlərindən üstündür, beləliklə Xüsusiyyət
Flagları UI qoruyucunun canlı işləməsini idarə edir (yenidən başlatma olmadan). DB oxumaq təhlükəsizdir:
əgər səhv baş verərsə, qoruyucu env-əsaslı davranışa geri dönür və heç bir
üstələmə təyin edilmədikdə davranış env-yalnız həllinə bərabərdir.

Aşkarlama mənbələri:

1. `sanitizeRequest()` `@/shared/utils/inputSanitizer`-dən (pipeline-da başqa yerdə istifadə olunan paylaşılmış detektor
   dəsti).
2. Daxili `DEFAULT_GUARD_PATTERNS` (hazırda `system_override_inline` və
   `markdown_system_block`, hər ikisi `high` şiddət).
3. Konstruktor seçimləri vasitəsilə ötürülən optional `customPatterns` (sətirlər, regex,
   və ya `{ name, pattern, severity }` qeydləri).

`mode === "block"` **və** ən azı bir aşkarlama şiddət
həddini qarşılayanda, `preCall` `{ block: true, message: "Sorğu rədd edildi:
şübhəli məzmun aşkar edildi" }` qaytarır. `warn`/`log` rejimlərində qoruyucu qeyd edir, lakin
çağırışı icazə verir. Paylaşılan köməkçi `evaluatePromptInjection()` də
qeydiyyatdan keçmədən promptları qiymətləndirmək üçün çağıranlar üçün ixrac edilir.

**Skana bağlı (v3.8.20):** detektor yalnız **ilk 16 KB** birləşdirilmiş prompt mətnini yoxlayır — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt) `src/shared/utils/inputSanitizer.ts`-də. Həm `detectInjection()` həm də
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` istifadə edir
nümunə dövrünü işə salmadan əvvəl. İnsersion direktivləri girişin yuxarı hissəsində yerləşir, buna görə də bu
regex CPU/GC-ni çox yüz-KB yükündə məhdudlaşdırır, aşkarlamağı zəiflətmir (cf.
#3932, #4041).

### İstifadəçi Məlumatlarının Maskalanması (`credentialMasker.ts`)

**Hər iki** mərhələdə işləyir, standart zəncirdə sonuncu (prioritet `95`).
Məşhur API açarları / gizli token nümunələrini çıxış yükündən (mesaj
məzmunu, alət çağırışları, alət nəticələri) **və** təminatçı cavabından silir, beləliklə bir
prompt-a yapışdırılan (və ya alət nəticəsi ilə geri əks olunan) bir
məlumat təminatçıya və ya müştəriyə sızmır.

- **Yalnız opt-in**, PII redaktəsi ilə eyni konvensiya (Sərt Qayda #20-ə yaxın):
  `settings.credentialRedactionEnabled === true` **və ya**
  `CREDENTIAL_REDACTION_ENABLED=true` olmadıqda deaktivdir. Bununla bağlı, qoruyucu heç bir əməliyyat etmir —
  heç vaxt bloklamır və heç vaxt yenidən yazmır.
- `redactCredentials()` tam yük/cavab ağacını gəzərək (`walkValue()`,
  prototip çirklənməsinə qarşı təhlükəsiz, `WeakSet` vasitəsilə dövr təhlükəsiz) uyğunluqları
  `[REDACTED:<type>]` yer tutucu ilə əvəz edir, yalnız faktiki dəyişən budaqları klonlayır.
- `CREDENTIAL_PATTERNS` LLM təminatçı açarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlərini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ödəniş açarlarını (Stripe, Square), bulud
  açarlarını (AWS giriş açarı, Twilio, SendGrid, Mailgun), özəl açarları / JWT-ləri,
  məlumat daşıyan bağlantı sətirlərini (`mongodb://user:pass@...`, və s.), və
  ümumi `Authorization`/`x-api-key`/`api-key`/`apikey` başlıq-dəyər
  nümunəsini əhatə edir. Başlıq şəklində açarlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) struktural olaraq (yalnız dəyər, `Bearer `/`Basic ` kimi sxem prefiksi qorunur) redaktə edilir, ümumi mətn regex vasitəsilə deyil.
- Qoruyucu heç vaxt bloklamır; yalnız yenidən yazır (`modifiedPayload` /
  `modifiedResponse`) və annotasiyalar edir (`meta.credentialsRedacted`, `meta.count`).

Regressiya qoruyucusu: `tests/unit/credential-masker-guardrail.test.ts`.

## Əsas müqavilə (`base.ts`)

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
  block?: boolean; // true zənciri dərhal dayandırır
  message?: string; // bloklama zamanı göstərilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // sorğunu yenidən yazmaq üçün preCall tərəfindən qaytarılır
  modifiedResponse?: TValue; // cavabı yenidən yazmaq üçün postCall tərəfindən qaytarılır
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

Qoruyucu mexanizm `void`, `{}` və ya `{ block: false }` qaytarmaqla "dəyişiklik yoxdur"
siqnalını verir. `modifiedPayload`/`modifiedResponse` qaytarılması zəncir boyunca
sonrakı qoruyucu mexanizmlərə ötürülən dəyəri əvəz edir.
`signal?: AbortSignal` çağıranın həyat dövrünü qoruyucu mexanizmlərə ötürür. Sorğunun ləğv edilməsi qəsdən tətbiq olunan fail-open istisnasıdır: media körpüləri işi dayandırır və təmizləmə aparır, lakin emal edilməmiş medianı onu dəstəkləmədiyi məlum olan hədəfə bərpa etmir.

## Reyestr (`registry.ts`)

Tək nümunəli `guardrailRegistry` aşağıdakıları təqdim edir:

- `register(guardrail)` — qoruyucu mexanizm əlavə edir (və ya normallaşdırılmış ada görə əvəz edir) və
  artan `priority` sırasına görə yenidən çeşidləyir.
- `clear()` / `list()` — inzibati köməkçi funksiyalar.
- `runPreCallHooks(payload, context)` — aktiv qoruyucu mexanizmlər üzrə iterasiya edir, payload-u
  `modifiedPayload` vasitəsilə zəncir boyunca ötürür və ilk `block: true` halında dayanır.
- `runPostCallHooks(response, context)` — cavab tərəfində eyni axını icra edir.
- `resetGuardrailsForTests({ registerDefaults })` — vəziyyəti təmizləyir və təmiz test izolyasiyası üçün istəyə bağlı olaraq
  standartları yenidən qeydiyyatdan keçirir.

Hər iki icra mexanizmi `{ blocked, payload|response, results, guardrail?, message? }`
qaytarır; burada `results` hər qoruyucu mexanizm üzrə
`blocked`, `skipped`, `modified`, `error` və `meta` sahələrini ehtiva edən
`GuardrailExecutionResult` qeydləri massividir və izləmə üçün faydalıdır.

### Hər sorğu üzrə qoruyucu mexanizmlərin deaktiv edilməsi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` cari sorğu üçün
ötürülməli olan qoruyucu mexanizm adlarının təkrarlanmayan siyahısını toplayır.
Mənbələr (hamısı istəyə bağlıdır və hamısı birləşdirilir):

- `apiKeyInfo.disabledGuardrails`
- Sorğunun gövdəsində `disabledGuardrails` (yuxarı səviyyə)
- Sorğunun gövdəsində `metadata.disabledGuardrails`
- `x-omniroute-disabled-guardrails` başlığı (və ya köhnə
  `x-disabled-guardrails`)

Dəyərlər sətirlər massivləri və ya vergüllə ayrılmış sətir ola bilər; adlar
kiçik hərflərlə kebab-case formatına normallaşdırılır (`pii_masker` → `pii-masker`). Nəticə
`context.disabledGuardrails` vasitəsilə reyestrə ötürülür və reyestr uyğun gələn
qoruyucu mexanizmləri ötürür (`results` daxilində `skipped: true`).

## İcra ardıcıllığı

`src/sse/handlers/chat.ts` və `open-sse/handlers/chatCore.ts` vasitəsilə keçən hər bir sorğu üçün:

1. `resolveDisabledGuardrails(...)` API açarı, sorğu gövdəsi və başlıqlar əsasında ötürüləcək qoruyucu mexanizmlərin siyahısını yaradır.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` qoruyucu mexanizmləri artan prioritet sırası ilə işə salır:
   - Deaktiv edilmiş qoruyucu mexanizmlər `skipped` kimi qeydə alınır.
   - Hər qoruyucu mexanizmin `preCall` funksiyası `modifiedPayload` vasitəsilə faydalı yükü yenidən yaza bilər.
   - İlk `block: true` zənciri qısa qapayır və emalçı qoruyucu mexanizm tərəfindən rədd cavabı qaytarır.
3. Dəyişdirilmiş ola bilən faydalı yük kombinə edilmiş marşrutlaşdırmaya və yuxarı axına göndərilməyə ötürülür.
4. Cavab formalaşdırıldıqdan sonra `guardrailRegistry.runPostCallHooks(...)` cavab üzərində eyni zənciri işə salır. Buradakı `block: true` yuxarı axın cavabını ləğv edir.

İstisna atan qoruyucu mexanizmlər `error: <message>` ilə qeydə alınır və `logger.warn` vasitəsilə jurnala yazılır, lakin zəncir davam edir — bu, dizayn etibarilə nasazlıq zamanı icazəvermə yanaşmasıdır.

## Konfiqurasiya

Daxili qoruyucu mexanizmlərin oxuduğu mühit dəyişənləri:

| Dəyişən                               | İstifadə edən             | Təsir                                                                                                         |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Aşkarlamanı tamamilə deaktiv etmək üçün `false` təyin edin.                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | İnjeksiya siyasəti: `warn`, `block` və ya `log`. Köhnə `redact` dəyəri injeksiya mətnini yenidən yazmır.      |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | İnjeksiya qoruyucusunun rejimi; həmçinin mühit dəyişənlərini **üstələyən** DB funksiya bayrağıdır (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` tərəfindən rədd edilən minimum ciddilik səviyyəsi: `high` (standart), `medium` və ya `low`.      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` üçün köhnə alternativ ad.                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` olduqda sorğudakı PII redaktə edilir (injeksiya rejimindən asılı olmayaraq).                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (aşağı axın) | Cavab tərəfindəki maskalayıcının davranışını idarə edir.                                                      |

Modality Bridge qoruyucu mexanizmləri mühit dəyişənlərindən deyil, DB dəstəkli parametrlər anbarındakı icra vaxtı konfiqurasiyasını (`getSettings()`) oxuyur. Vision üçün əsas açarlar bunlardır:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` və
`modalityBridgeCacheMaxEntries`. Köhnə
`visionBridge*` açarları yalnız sənədləşdirilmiş bir dövrlük oxuma ehtiyat variantı kimi qəbul edilir; idarəetmə panelindəki yazma əməliyyatları əsas açarlardan istifadə edir. Standart dəyərlər və ehtiyat həll mexanizmi `src/shared/constants/modalityBridgeDefaults.ts` daxilindədir, köhnə sabitlər isə `src/shared/constants/visionBridgeDefaults.ts` daxilində saxlanılır.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` və `modalityBridgeAudioMaxClips`, həmçinin ortaq
`modalityBridgeCache*` parametrlərindən istifadə edir. Bu açarlar Modality Bridge sxemi ilə təqdim edildiyinə görə Audio üçün köhnə açarlara ehtiyat keçid yoxdur.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` və
`modalityBridgeVideoTimeout`, həmçinin ortaq `modalityBridgeCache*` parametrlərindən istifadə edir.
FFmpeg/ffprobe istəyə bağlı əməliyyat asılılıqları olduğuna, kadrların təsvir edilməsi isə gecikmə və model xərci yaratdığına görə bu funksiya standart olaraq deaktivdir.

## Fərdi qoruyucu mexanizmlər

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

Addımlar:

1. `BaseGuardrail` sinfini genişləndirən `src/lib/guardrails/myGuardrail.ts` faylını yaradın.
2. `preCall` və/və ya `postCall` metodunu reallaşdırın.
3. Ya import zamanı qeydiyyatdan keçirin (`registerDefaultGuardrails` daxilindən əlavə edin), ya da
   icra zamanı `guardrailRegistry.register(...)` çağırın — reyestr eyni normallaşdırılmış ada
   malik əvvəlki qoruyucu mexanizmi əvəz edir.
4. Testləri `tests/unit/` altında əlavə edin (mövcud nümunələr:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testləmə

Məlum vəziyyətdən başlamaq üçün testlər arasında `resetGuardrailsForTests()` istifadə edin.
Boş reyestrlə başlamaq və yalnız test edilən qoruyucu mexanizmləri qeydiyyatdan keçirmək
üçün `{ registerDefaults: false }` ötürün. Vision Bridge asılılıqların yeridilməsini
(`deps.getSettings`, `deps.callVisionModel`) qəbul edir; Audio Bridge isə parametrlər,
imkanlar, STT modelinin seçimi, giriş məlumatlarının yoxlanılması və transkripsiya üçün
ekvivalent müdaxilə nöqtələri təqdim edir. Buna görə də testlər hər iki axını DB və ya
şəbəkə çıxışı olmadan sınaqdan keçirə bilər.

## Həmçinin baxın

- `src/lib/guardrails/` — reallaşdırma
- `src/shared/utils/inputSanitizer.ts` — prompt inyeksiyasını və PII maskalanmasını
  təmin edən ortaq detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standartları və
  məcburi körpü model siyahısı
- `src/shared/constants/modalityBridgeDefaults.ts` — ortaq Vision/Audio icra mühiti standartları
- `docs/architecture/RESILIENCE_GUIDE.md` — ortoqonal qat (dövrə kəsicisi, gözləmə müddətləri)
- `docs/reference/ENVIRONMENT.md` — mühit dəyişənlərinin tam arayışı

## İnyeksiya qoruyucusunun marşrut əhatəsi və red-team (Mərhələ 8 · Blok D)

İnyeksiya qoruyucusu (`createInjectionGuard` / `withInjectionGuard`) istifadəçi promptlarını
qəbul edən bütün marşrutları əhatə edir. O, `INJECTION_GUARD_MODE` parametrinə riayət edir
(standart `warn` = yalnız jurnala yazır; `block` = HTTP 400 `SECURITY_001` qaytarır).

| Növ           | Marşrutlar                                                                                                                                           | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Mətn (mövcud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Məlumat       | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Mətnin çıxarılması (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrini əhatə edir.

**Red-team (gecəlik, `nightly-llm-security.yml`):** promptfoo hər bir marşrutun
`INJECTION_GUARD_MODE=block` rejimində OWASP-LLM korpusunu blokladığını yoxlayır; garak
sınaqları işə salır (gizli açar olmadıqda ötürür). `moderations` ardıcıllıq naminə daxil
edilib — `block` rejimindəki operatorlar onu `resolveDisabledGuardrails` vasitəsilə istisna
edə bilərlər.

Gecəlik iş axınının (`.github/workflows/nightly-llm-security.yml`, cron + əl ilə
işə salma) iki tapşırığı var:

- **`promptfoo-guard` (bloklayıcı)** — `INJECTION_GUARD_MODE=block` ilə
  `promptfoo eval -c promptfooconfig.yaml` əmrini işlədir. Hər bir rəqib ssenari
  (məsələn, "əvvəlki bütün təlimatlara məhəl qoyma…", DAN üslublu jailbreak-lər)
  cavabın `error.code === "SECURITY_001"` daşıdığını, yəni qoruyucunun sorğunu
  həqiqətən rədd etdiyini təsdiqləyir.
- **`garak` (məşvərətçi)** — yerli OmniRoute instansiyasına
  (`http://localhost:20128/v1`) qarşı garak-ı `--probes promptinject,dan,leakreplay`
  ilə işə salır. Provayderin gizli açarından (`PROMPTFOO_PROVIDER_KEY`) asılıdır;
  açar olmadıqda problemsiz ötürülür və sonuna `|| true` əlavə edilib, buna görə
  CI prosesini uğursuz etmədən hesabat verir.

Qoruyucu köməkçi funksiyanın (`createInjectionGuard` / `withInjectionGuard`) əhatəsi
prompt daşıyan hər bir `/v1` marşrutunu əhatə edir; prompt mətni
`src/shared/utils/inputSanitizer.ts` daxilindəki `extractMessageContents()` tərəfindən
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrindən
götürülür.
