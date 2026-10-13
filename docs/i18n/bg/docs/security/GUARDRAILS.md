# Guardrails (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Източник на достоверна информация:** `src/lib/guardrails/`
> **Последна актуализация:** 2026-08-29 — v3.8.51 (произходът на транскрипцията във Video Bridge се декларира от извикващата страна,
> но все още не се проверява от сървъра — уточнено съгласно #11661)

Защитните механизми налагат изискванията за безопасност, правилата и трансформациите на съдържанието на границата
между OmniRoute и доставчиците нагоре по веригата. Всеки защитен механизъм може да проверява (и
по избор да отхвърля, трансформира или анотира) полезните товари на заявките (`preCall`) и
отговорите нагоре по веригата (`postCall`).

Системата е **fail-open**: ако защитен механизъм хвърли изключение по време на изпълнение, регистърът
записва грешката и продължава със следващия защитен механизъм, вместо да прекратява
заявката с грешка. Блокирането е изрично решение (`block: true`), а не инцидент.

## Вградени защитни механизми

Регистърът автоматично зарежда шест защитни механизми в приоритетен ред при импортиране
(виж `registry.ts` → `registerDefaultGuardrails()`):

| Приоритет | Име                 | Етап(и)        | Файл                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

По-ниските приоритетни номера се изпълняват **първи**.

### Vision Bridge (`visionBridge.ts`) — Мост за модалности PR-1

Прехваща заявки, съдържащи изображения, насочени към **не-визионни модели** и или
пренасочва цялата заявка към модел, способен на визия, или заменя частите с изображения
с текстови описания, произведени от конфигурируем модел за визия преди
възходящото извикване. Това позволява на доставчиците само с текст да обработват
мултимодални товари прозрачно.

Процес:

1. Пропусни, ако целевият модел вече поддържа визия (освен ако не се появи в
   списъка с принудителни мостове `isVisionBridgeForcedModel`).
2. Извлечи части с изображения чрез `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), което делегира на **обединения детектор на медии**
   `detectMediaParts()` в `open-sse/utils/mediaParts.ts` — единственият източник на истина,
   споделен с филтъра за съвместимост на комбинации.
   Извличането е разрешено само за основни части от формите,
   които `replaceImageParts` може да възстанови (договорът за извличане↔замяна): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, и Responses API `input_image`. Вложените попадения и
   форми само с индикатори са материал за филтриране на комбинации и никога не се извличат.
   Пропусни, ако не са намерени.
3. Разреши конфигурацията за време на изпълнение чрез `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): новите ключове за настройки
   `modalityBridge*` печелят; наследените ключове `visionBridge*` остават **еднократен
   резерв** (период на възстановяване). Пропусни преди всяко преминаване на медии, когато
   мостът е деактивиран.
4. Избор на режим (`modalityBridgeVisionMode`, виж таблицата по-долу) решава
   пренасочване срещу описание. Пренасочването връща `modifiedPayload` с единствено
   заменен `model`, плюс мета `{ rerouted, fromModel, toModel, imagesKept }`.
5. Път на описанието: ограничи изображенията до `maxImages`, състави задачно-осъзнатия
   подканващ текст, консултирайте се с кеша за описания, извикайте модела за визия **паралелно**
   (`Promise.allSettled`), и инжектирайте текстовите части `[Image N]: <description>` на
   тяхно място. Неуспешното описание дава `null` и оригиналната част с изображение е
   **запазена** (#4012) — освен на пътя за комбинирано описание, когато всяко
   описание е неуспешно, където потвърденото не-визионно възходящо получава
   `(unavailable — no vision-capable provider connected)` заместител вместо (#8430).
6. Върни `modifiedPayload` + мета (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Избор на режим (`modalityBridgeVisionMode`)

| Режим      | По подразбиране | Поведение                                                                                                                                                                                                                                                                                                              |
| ---------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔               | Наследствена хевристика, непокътната (#6640/#7204): не-комбинирани/`auto/` модели пренасочват към най-добрия модел за визия, освен ако оригиналният модел вече не разполага с използваеми удостоверения (тогава описва); целите на комбинации винаги описват.                                                          |
| `describe` |                 | Винаги описвай — блокът за пренасочване се пропуска напълно; избраният от потребителя модел винаги отговаря.                                                                                                                                                                                                           |
| `reroute`  |                 | Принудително пренасочване: защитата на модела с удостоверения остава незабелязана. Защитата на удостоверенията на целта за пренасочване все още важи — когато не съществува използваем целеви модел за визия, заявката преминава към описание, така че суровите изображения никога не достигат текстов бекенд (#8430). |

Принудителните режими прекъсват **преди** да се изпълни автоматичната хевристика; поведението на `auto`
е байт-идентично на защитния механизъм преди PR-1.

#### Задачно-осъзнат подканващ текст за описание (`modalityBridgeVisionTaskAware`)

По подразбиране **вярно**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) добавя
текста на **последното съобщение от потребителя** (съкращено до 500 знака) към основния
подканващ текст за описание, насочвайки описанието към това, което потребителят всъщност е попитал
(шаблон на codex-vision-proxy) и моли модела за визия да транскрибира видимия
текст. С изключен флаг — или без текст от потребителя — основният подканващ текст се използва без промяна.

Описание на собственото самоциклично искане, съвместимо с OpenAI (`callVisionModelSingle()` в `visionBridgeHelpers.ts`), винаги изисква `image_url.detail: "high"` — безусловно, за всеки повикващ/доставчик, без да е ограничено от какъвто и да е клиентски сигнал. Извадките с ниска детайлност влошават точността на OCR точно за задачата по транскрипция на текст, за която се иска в този подканващ текст, така че самото извикване на describe винаги изисква висока детайлност, независимо от нивото на детайлност, използвано в оригиналното входящо искане. Това засяга само вътрешното тяло на искането за описание; не променя начина, по който OmniRoute предава собственото `image_url.detail` на повикващия в основното искане — това по подразбиране се прилага отделно и само за откритите клиенти на OpenCode, в `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Клонът на формата на проводника на Anthropic за самоцикличното описание няма поле `detail` и не е засегнат от нито едно от подразбиращите се настройки.

#### Ограничение на изхода на описанието (`modalityBridgeVisionMaxChars`)

| Ключ                           | По подразбиране | Обхват            |
| ------------------------------ | --------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`             | `0` или 100–50000 |

`0` (по подразбиране) означава **без ограничение** — описанието, върнато от `callVisionModel()`, преминава без промяна, запазвайки съществуващото поведение. Всяка стойност в диапазона 100–50000 съкращава описанието с `…` суфикс, преди да бъде вмъкнато обратно като `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` в `src/lib/guardrails/visionBridge.ts`). Увеличете това за задачи с OCR с много детайли, където долният модел се нуждае от пълната транскрипция; намалете го, за да ограничите използването на токени при разговорливи визуални модели. Полето на таблото за управление се намира в разширената панел на таба Vision (`modality-bridge-max-chars` в `ModalityBridgeVisionTab.tsx`) и ограничава всяка стойност между 1 и 99 до 100, като оставя изрично `0` непокътнат — `0` е валидна стойност на Zod сама по себе си (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), а не просто "неустановен" по подразбиране.

#### Кеш за описание (`modalityBridge/bridgeCache.ts`)

Кеш в паметта LRU + TTL за изходите на описанието, споделен в целия процес. Ключ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` с рамкиране по дължина (без сблъсъци на граници на полета). Компонентът на модела е **конфигурираният** мостов модел, а не моделът, който всъщност е отговорил — `callVisionModel` може да се върне обратно вътрешно, а ключовете на всяка опитност биха фрагментирали кеша. Неуспешните описания никога не се кешират. Настройки:

| Ключ                            | По подразбиране | Обхват  |
| ------------------------------- | --------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`          | —       |
| `modalityBridgeCacheTtlMinutes` | `60`            | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`           | 10–5000 |

#### Нормализация на отдалечени изображения (самоциклично описание/изтегляне на base64)

Когато мостът изтегля **отдалечено** изображение сам — самоизвикването на описанието на Anthropic и конверсията на base64 в формата на claude (`ensureBase64ImagesForClaudeWire`), и двете чрез `fetchRemoteImageAsDataUri()` в `visionBridgeHelpers.ts` — полученото URI на данните преминава през `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) преди да бъде вградено в искането на визуалния модел. Прекомерно големите изображения се намаляват до **2048px дълга страна** (съответстваща на ограниченията за преоразмеряване, които OpenAI/Anthropic вече прилагат на сървърната страна), което намалява байтовете за качване/латентността, без да променя какво вижда визуалният модел. Преоразмеряването използва `sharp`, заредено чрез динамичен импорт: на платформа, където неговият роден бинарен файл не успява да се зареди, `normalizeDataUri()` **никога не хвърля** — той се връща обратно към предаването на оригиналните байтове, така че пътят за описание/конверсия на base64 винаги продължава да работи. Небайтовете на изображения (изтегляне, което не е върнало декодируемо изображение) също преминават без промяна. Тази нормализация е ограничена до изображения, които мостът изтегля за собственото си самоизвикване — тя никога не се прилага към суровото предаване на данни на повикващия, в съответствие с принципа на мутация само по избор (Hard Rule #20).

#### Схема за настройки + миграция

Новите ключове `modalityBridge*` са валидирани с Zod в `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, триото `modalityBridgeCache*` и групата `modalityBridgeAudio*`, използвана от Audio Bridge. Миграцията `141_modality_bridge_settings.sql` копира съществуващите наследствени стойности `visionBridge*` в съответстващите нови ключове (идемпотентна, никога не презаписва стойност на `modalityBridge*`, зададена от оператор); наследствените ключове остават приети като резервен вариант за четене за един цикъл на издание.

#### Заглавка за прозрачност + статистика

Отговорите, трансформирани от описанието, носят `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (създадено от `buildModalityBridgeHeader()` в `modalityBridge/bridgeStats.ts`, отпечатано от `withModalityBridgeHeader()` в `src/sse/handlers/chatHelpers.ts`). Пренасочените искания не получават **никакво** заглавие — полезният товар не е променен и смяната на модела вече е видима в полето `model` на тялото на отговора.

`GET /api/modality-bridge/stats` (управление на удостоверяване, същия слой като `GET /api/settings`) връща в паметта на пер-модалните броячи `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` за `vision`, `audio` и `video`. `averageLatencyMs` използва `latencySamples`, а не всички опити, като свой знаменател; операция без времеви измервания не създава нулева милисекундна проба. `bridged` остава обратно съвместимият псевдоним за успешни конверсии; неуспешните опити не го увеличават. Броячите се нулират при рестартиране на процеса по дизайн (телеметрия, а не счетоводство).

#### Конфигурация на таблото за управление

Посветената страница на таблото е
`/dashboard/settings/modality-bridge`. Нейните табове `Vision`, `Audio`
и `Video` запазват параметрите на заявката, докато сменят стойността на `tab`.
Табът Vision разкрива активиране, режим, избор на модел (включително автоматичния
по подразбиране), контекстуално подканване, разширени ограничения за времето за изчакване/дължина на изображението/описанието/кеша,
броячи на времето на изпълнение и защитена заявка за пример. Табът Audio също е активен: той разкрива
активиране, селектор на модел само за STT с Auto, ограничения за времето за изчакване/максимална дължина на клипа, броячи на аудио
и тест за пример с `input_audio`. Табът Video е функционален: той отчита
състоянието на изпълнението на FFmpeg/ffprobe — едно от четирите явни състояния на UI (`unknown`, докато
пробата е в движение или не може да бъде завършена, `restricted` на хост на таблото, който не е за обратна свързаност, където пробата е пропусната от клиентската страна, `unavailable`, след като е пробвана и потвърдена като липсваща, или `available` с версиите на FFmpeg/ffprobe) — запазва
ограниченията за активиране/модел/рамка/видео/време за изчакване, филтрира селектора на моделите до модели, способни на визуализация,
и разкрива броячи на видеото.

Бившата карта Vision Bridge под AI настройки е линк за съвместимост към
новата страница; тя вече не притежава второ копие на формуляра. Media Providers също
линква работни потоци Image-to-Text и Speech-to-Text към съответните табове на Modality
Bridge, без да премахва съществуващата площадка за Speech-to-Text.

**Заобикаляне на приемането на самопоток:** когато заявката за описание преминава през
собствения `/v1` самопоток на OmniRoute (нестандартен модел на доставчик), подзаявката изпраща
`x-omniroute-admission-bypass: internal` и е удостоверена с разрешените
самопотокови удостоверения — локалният `sk_omniroute` страж в локален режим или
конфигурираният от оператора `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env ключ (#1350), така че
разгърнатия с `REQUIRE_API_KEY=true` все още може да извърши заявката за описание. Заобикалянето
се уважава само за тези точни удостоверения, така че външните клиенти не могат да използват
заглавката, за да пропуснат приемането.

Наследствените стойности по подразбиране се намират в `src/shared/constants/visionBridgeDefaults.ts`; новите стойности по подразбиране за режим/задача/кеш и решавачът на настройки се намират в
`src/shared/constants/modalityBridgeDefaults.ts`. Защитната лента разкрива опцията
`deps` за конструктора, така че тестовете да могат да инжектират фалшиви `getSettings` и
`callVisionModel` реализации.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Прехваща аудио-съдържащи чат заявки, преди да достигнат цел, която не е
известна, че приема аудио вход. Никога не пренасочва чат заявката: аудио частите са
преписани чрез съществуващия OpenAI-съвместим многочастен крайна точка и
избраният чат модел продължава с текстовите транскрипции.

Процес:

1. Разрешава `supportsAudio` чрез `getResolvedModelCapabilities()`. Явните
   метаданни на регистъра на доставчиците печелят, след това статичните метаданни на модела, след това синхронизираните
   `modalities_input`. Обявен списък на входовете без `audio` е `false`; никакви
   доказателства за способност остават `null`. И `false`, и `null` активират
   консервативния мост, докато `true` го заобикаля.
2. Разрешава `modalityBridgeAudio*` настройки и извлича сплайсируеми топ-нивови
   аудио части от всяко съобщение чрез споделения `detectMediaParts()`
   детектор. Поддържаните форми на проводници са OpenAI `input_audio`, `audio_url` и
   `source.media_type: "audio/*"`. Вложеното аудио се открива за маршрутизиране, но не
   се премахва от пътя на сплайса. Работата е ограничена от `modalityBridgeAudioMaxClips`;
   по-късните части остават непокътнати.
3. Уважава конфигуриран `provider/model`, или позволява на `selectAudioBridgeModel()` да премине
   през `AUDIO_TRANSCRIPTION_PROVIDERS` в стабилен ред на каталога и да избере първия
   модел с използваем активен удостоверител на доставчика.
4. `callAudioTranscription()` преобразува base64/data-URI аудио в многочастен
   `file`, или изтегля отдалечен `audio_url` чрез публично само изходящо
   защитно устройство с DNS закрепване и ограничение от 25 MB. След това POST-ва файла и избрания
   модел до локалния `/v1/audio/transcriptions` самопоток, удостоверен с
   `resolveSelfLoopBearer()`. Съществуващият маршрут за транскрипция извършва нормално
   търсене на удостоверения, обработка на времето за изчакване/лимит на скоростта и разпределение на доставчика.
5. Успешните повиквания заменят частите си с `[Audio N]: <transcript>`. Повикванията
   се изпълняват с `Promise.allSettled`: индивидуална грешка запазва оригиналната
   аудио част (#4012 контракт). Ако всяко повикване се провали и целта е доказана
   `supportsAudio === false`, частите стават
   `[Audio N]: (недостъпно — няма свързан STT доставчик)` (#8430 контракт). За
   неизвестна цел (`null`), резултатът от всички провали остава непокътнат. Доказан
   цел с текст само и без използваем STT удостоверител получава същия явен
   stub без да извършва мрежово повикване.

Успешните транскрипции използват кеша на Modality Bridge с LRU/TTL на ниво процес. Ключът комбинира
аудио референцията, стабилния етикет на операцията `audio-transcription` и избрания STT модел; провалите никога не се кешират. Аудио опитите актуализират
споделените `bridged`, `cacheHits`, `failures` и `lastUsedAt` броячи.
Трансформираните отговори носят
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; непокътнатите
заявки не получават сегмент на Audio Bridge.

Настройките на времето на изпълнение са с подкрепа от DB и валидирани с Zod:

| Ключ                          | По подразбиране | Обхват          |
| ----------------------------- | --------------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —               |
| `modalityBridgeAudioModel`    | `""`            | Auto или STT ID |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10            |

Споделеният кеш остава контролиран от `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` и `modalityBridgeCacheMaxEntries`.

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

#### FU-07 структурни сегменти доказателства

`segment_aware` използва един ограничен предварителен анализ на вече валидирания
локален видео поток. Фиксираната филтърна верига първо мащабира до максимум 320 пиксела
ширина, открива промени в сцената и замразени интервали, след което взема проби с 1 кадър на
секунда за размазване, средна лума и пространствена/темporalна информация. Проходът е
ограничен до 600 структурни проби, един поток `FFmpeg/filter`, същите
`file`-only протокол и контейнерни списъци, 1 MiB ограничение на изхода от процеса,
и максимум 30 секунди в споделеното прекратяване/краен срок на брокера. Никога не
приема команда, филтър, път или URL от заявката.

Структурните стойности са детерминирани доказателства за вземане на проби, а не семантично разбиране на видео. Те не извеждат субекти, действия, надписи, реч или намерение на потребителя. Границите на сцени и замразяване образуват сегменти; покритие на замразяване, размазване, експозиция, пространствени детайли и времеви промени само влияят на начина, по който съществуващият бюджет от 1–16 кадъра е разпределен. Пълен замразен сегмент е ограничен до един кадър, докато незамразените сегменти се конкурират за оставащия бюджет. Когато границите надвишават кадрите, се запазва равномерно покритие на времевата линия, така че бързите ранни рязания не могат да скрият дълъг следващ сегмент. Границите на сцените в рамките на 1-секундната резолюция на анализа на границата на замразяване се коалират.

Липсващи филтри, неправилно форматирани/празни доказателства, грешка на детектора или ограниченото време за предварителен анализ не успяват да отворят до точното равномерно средно правило. Прекратяване от страна на повикващия или краен срок на брокера не успява да отворят: то прекратява текущия подпроцес, предотвратява по-късно извличане на кадри и частното временно дърво се премахва в `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` генерира детерминирани реални FFmpeg фикстури за спестяване на надписи след дублиране, разпределение на бюджета за плътно движение, доказателства за размазване/експозиция/SI-TI, бързи рязания с дълго опашка и фалшиви положителни при постепенно избледняване. То записва времето за стена преди анализа и, където `/usr/bin/time` е наличен, дъщерни CPU и пикова RSS. Неговите проверки за качество са структурни оракули само. Реалното качество на модела за надписи остава `HOLD`, защото този хъб няма упълномощен крайна точка или замразен съдия. Паричните спестявания също остават `HOLD`, освен ако `--caption-cost-per-call-usd` не предостави явна положителна оценка на разходите на повикване; скриптът никога не фалшифицира нито един от резултатите.

Всеки кадър е ограничен до 4 MiB, всички сурови кадри заедно до 23 MiB, а сериализираният отговор на брокера до 32 MiB. Частната временна директория се премахва в `finally`. OmniRoute не пакетира FFmpeg и не приема персонализиран път за изпълним файл. Преди надписването, хъбът прилага консервативен визуален дублиращ проход: всеки JPEG се намалява до 16×16 сивотонен буфер и се сравнява само с последния запазен кадър. За поискан бюджет за надписи над един кадър, извличането предоставя ограничен кандидатен пул от до два пъти този бюджет и никога повече от 16 кадъра. Исканият лимит се прилага само след дублиране, като първите и последните избрани кандидати се запазват по време на окончателното изтъняване, когато бюджетът е поне два. Версираният `grayscale-16x16-mean-cells-v2` политика използва по-голямото от средния луминесцентен делта и съотношението на клетките на миниатюри, чийто нормализиран делта е поне 0.05. Прагът за дублиране е постоянната 0.04, избрана за предсказуемост, а не изложена като настройка за време на изпълнение. Този вторичен сигнал с висока контрастност запазва малки движения и видими текстови промени, които само сравнение на средната стойност може да скрие. Грешките на компаратора или декодера не успяват да отворят и запазват покритие. Изходните метаданни разделят извлечените кандидати, успешно използвани кадри и визуални дубликати, които са отхвърлени.

Явно маркирана част от видеото може да поиска времеви контакт. Хъбът изгражда максимум 4-колонна, 16-кадрова JPEG мрежа. Всеки 512-пикселов клетка изгаря своя източник времеви печат в високо контрастна долна лента, докато същите времеви печати остават в текстовите метаданни за последваща асоциация и одит. Пълният JPEG остава ограничен до 32 MiB. Ако `sharp` не може да декодира или композира мрежата, хъбът се връща към индивидуалните JPEG кадри; прекратяването от страна на клиента все още се разпространява през операцията на листа.

Доказателствата за промоция са умишлено отделени от синтетичния микробенчмарк за композиция. `scripts/perf/video-bridge-contact-sheet-eval.ts` дефинира схема-версиран A/B хъб за реални модели на визия, съвместими с OpenAI. То измерва токени, докладвани от доставчика, край до край латентност на стената (включително композиция на листа), брой повиквания на модела и задържане на факти, определени от манифеста. Суровите отговори на модела не се записват в доклада; само SHA-256 хешове и съвпадащи идентификатори на факти се запазват. Хъбът не прави мрежови или платени повиквания на модела, освен ако не е предаден `--execute-real` и `--model`, `OMNIROUTE_BASE_URL` и `OMNIROUTE_API_KEY` са конфигурирани. Без това явно реално изпълнение, неговата машинно четима присъда остава `HOLD`; синтетичните измервания на полезния товар/броя на повикванията сами по себе си не са доказателства за промоция.

Отделният `scripts/perf/video-bridge-promotion-eval.ts` консумира FU-07 или FU-09 наблюдения. Приемането на промоция изисква всички осем синтетични сценарийни видове плюс санитарен реален клип, поне три измерени повторения на роля и случай, всички десет обявени метрики, замразени медии/подсказки/очаквани факти/настройки хешове, уникални идентификатори на наблюдения и проверен ред на A/B. Квитанцията за изпълнение свързва хешовете на корпуса, точния кандидат SHA и ревизията на модела. Липсващи или невалидни измервания остават `HOLD`, включително CPU над 30 s, пикова RSS над 512 MiB или предварителен анализ над 30 s. Това са лимити за приемане на доказателства, а не нова гаранция за прилагане на RSS по време на изпълнение.

FU-07 изисква поне 98% задържане на качеството и p95 латентност не повече от 1.2x базовото ниво, плюс или 0.05 абсолютна балансирана средна подобрение на припомнянето при еквивалентни средни повиквания за надписи, или поне 10% по-малко средни повиквания за надписи след дублиране. FU-09 изисква поне 0.85 качество, 95% задържане, 20% намаление на p95 латентността и 10% намаление на токените. Загубата на критични факти, съответствието на инжекциите или липсващото използване предотвратяват промоцията. Едно изпълнение не може да промотира нищо: `--previous-report` потвърдява две различни, непокриващи се, последователно допустими изпълнения на същата политика/ревизия на модела/кандидат/корпус. Експеримент за вземане на проби не може да потвърди експеримент за контактни листи.

Събирачите трябва да оценяват отговорите в паметта и да запазват `responseDigest` плюс метрики и наблюдателни привързвания, никога текст на отговора. Консуматорът също чете наследствени сурови наблюдения, но никога не копира този текст в своите отчети. При всяко наблюдение се приема точно едно от `responseDigest` или `rawResponseText`. Версираният списък с разрешения остава празен с неизменяемо `hold` по подразбиране. За да бъде допустим запис, е необходимо да има референция на доказателството, политика, ревизия на модела, точен SHA на кандидата, манифестен дайджест и два различни идентификатора на изпълнение; конфликтуващите контексти се отхвърлят. Тези метаданни са одитен договор, а не доказателство, че реферираният файл съдържа автентични измервания. Прегледайте действителните разписки преди да добавите какъвто и да е запис. Точката за статистика на управлението и видео таблото показват консервативна готовност. Конфигурираният алиас на модела сам по себе си не установява неговата ревизия или SHA на изпълнявания кандидат, така че текущото табло отчита `HOLD`, вместо да използва допустимостта от друг контекст на изпълнение. Явният експериментален избор остава отделен от промоцията; няма автоматично променено подразбиране.

Извикващите могат да прикрепят опционален масив `transcript.cues` към поддържана видео част, когато вече притежават подравнен текст. Всяка подсказка трябва да носи `text`, ограничен `start`/`end` интервал в рамките на проучената продължителност и бял списък `source` (`client`, `embedded` или `audio-bridge`); `confidence` по подразбиране е `1` и трябва да остава между `0` и `1`. Точните дублирани подсказки се обединяват. OmniRoute никога не започва транскрипция от тези метаданни: валидираните подсказки се копират в описания резултат с източник, увереност и интервал и се представят като ненадеждни наблюдения заедно с надписите на кадрите. Невалиден, извън обхвата или без произход текст се отхвърля, вместо да бъде смесен в потока на надписите. И двата канала на тялото на заявката за транскрипция нормализират предоставения произход на `client`, включително самоутвърдени `embedded` или `audio-bridge` етикети. Само адаптер, притежаван от сървъра, може да присвоява тези надеждни етикети чрез аргумента `trustedSource`, който е само за код; поле в JSON заявка не може да достигне до този аргумент. Текстът на транскрипцията остава ненадеждно медийно съдържание, независимо от произхода си, и никога не трябва да определя авторизация.

Разширен извикващ може да предостави `audioTranscript` трак за същото видео; той се третира като текст, предоставен от клиента, а не като доказателство за транскрипция от сървъра. Сливането на наблюденията за визуални и аудио данни протича под един краен срок и сигнал за прекратяване, подрежда ги на обща времева линия, обединява точните дубликати и отчита частичен резултат, когато само едната страна успее. Невалидният `audioTranscript` се понижава до този частичен резултат — визуалното описание се запазва, а аудио клонът записва код за санитарен провал — вместо да провали цялото видео. Наличността на всеки клон, частичният флаг и санитарните кодове за провал се запазват в описания резултат, в метаданните на защитната стена (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), в метаданните на кеша на резултата и в броячите на сливането на моста. Пътят по подразбиране на Video Bridge не активира преобразуване на реч в текст или изтегляне на второ медийно копие; без този явен трак, той остава само видео.

**Запазване на транскрипцията (#12150 P1).** Това се прилага автоматично, когато Video Bridge (сам по себе си по избор) рендерира подсказка за транскрипция — няма отделен флаг за запазване. Когато заявка рендерира всяка подсказка за транскрипция (обявена от извикващия `transcript` или слита `audioTranscript`), защитната стена я маркира като `videoBridgeObserved` и произвежда редактирана сянка на видео описанието — идентично рендериране, при което свободният текст на всяка подсказка е заменен с `[redacted-video-transcript]`, построен чрез заместване на структурираното поле на подсказката преди съставянето на стринга (никога чрез парсване на плоския текст, така че никакво съдържание на подсказката — враждебно или обикновено, включително тела, съдържащи `]`, като ` [inaudible]`/`[music]` — не може да оцелее). Запазеното тяло на заявката за обаждане заменя всяка част от текста, произлязла от видео, с тази редактирана сянка, съвпадаща по равенство на съдържанието; анкерът `fullText` се прочита от завършеното предизвикателство на защитната стена, така че съвпадението все още да успее след по-късни защитни стени (маскиращи PII и удостоверения, приоритети 10/95), които пренаписват текста на описанието на място и след системни подканвания/предавания/инжекции на паметта, които променят масива на съобщенията. Тялото, изпратено нагоре към модела, остава непроменено. Наблюдаваната заявка също не запълва никаква устойчива памет (както извличането, произлязло от заявката, така и от отговора, се пропуска), така че собственото отговор на модела не може да отразява текст на транскрипция в паметта.

**Сурови видео полета (#12430).** Когато мостът е активиран и поддръжката на родно видео е неизвестна или отсъства, дефинираните полета `transcript`/`audioTranscript` също активират `videoBridgeObserved`, дори след провал на описанието или лимит `maxVideos`. `null` и празни низове се броят; отсъстващите полета и не-видео метаданни не. Запазените копия редактират тези полета или пропускат заявката, а кешовете/паметта се заобикалят. Платежното задължение на доставчика остава непроменено.

Допълнителните запазени копия използват същия сигнал за наблюдавана заявка. Суровият моментен снимка на клиентската заявка преди защитната стена, в паметта на изчакващата заявка и ранния регистър на отхвърлени заявки структурно заменят полетата на транскрипцията в видео частите; стринговите подканвания, синтезирани от етапите на потока и предаването на контекста, се редактират на мястото на запазеното тяло на заявката. Запазеният маркер `video_content_removed` прави продължението на `previous_response_id` да се провали затворено, вместо да реконструира текст, който е бил умишлено изхвърлен. Ако наблюдаваната заявка загуби своята сянка на редакция преди регистрирането или дори една от няколко видео сенки не успее да съвпадне след по-късни мутации на заявката, запазеното тяло на заявката се пропуска напълно вместо да запази частично редактирана транскрипция.

За наблюдавано запитване, отговорът на модела може да цитира всяка част от транскрипта без структурирана граница на указание. Затова, запазеният лог на повикванията `responseBody` е заменен с маркер за пропуск; подробният артефакт на потока (който може да включва тела от upstream/client и части от потока) не се запазва. Кешовете за семантика, идемпотентност и повторно разиграване на разсъждения заобикалят четенето и записването за това запитване. Запитването на доставчика и видимият от клиента отговор остават непроменени. Ранните байтове за поддържане се източват от временното буферно пространство, когато подробният артефакт е пропуснат. Предупреждението за неправилен EventStream на Kiro отчита само броя на байтовете на полезния товар, никога неговото съдържание или суровата грешка на JSON парсера.  
Това не твърди, че всяка несвързана диагностика на доставчика/плъгина е била одитирана; по-широкото проследяване на запазените потоци е проследено в #11658.

Вътрешният жизнен цикъл на `/api/modality-bridge/video/drilldown` е отделен, кеш субстрат с обратна връзка/автентикация с токен. Всяка операция също изисква каноничен непрозрачен идентификатор на принципала. Преди да бъде активиран производственият повиквач, той трябва да извлече този идентификатор от автентикирания наемател и никога не трябва да предава стойност, избрана от клиента. Кеш ключовете свързват този принципал с канонични идентификатори на сесия и видео референции, съхраняват само техните ключове, извлечени от SHA-256, и ограничават както четенето, така и изтриването до същия принципал. Кешът съхранява най-много 16 извлечени JPEG кадъра на запис, изтича след десет минути и поддържа ограничени четения `start`/`end` или изрично изтриване на сесия.

Всеки принципал е ограничен до 16 записа и 64 MiB канонични JPEG данни. Тези ограничения са независими от глобалния таван от 64 записа/256 MiB: натискът върху квотата на принципала изхвърля само най-малко използваните записи на този принципал, преди да се обмисли глобалното LRU изхвърляне. Изтеклите записи се изтриват както от принципала, така и от глобалното отчитане при активност на кеша, докато анулирането и неуспехът на валидирането не ангажират частично заместване.

Кешът отхвърля неконвенционален Base64, излишно запълване, неконвенционални медии, неправилни или съкратени JPEG файлове и JPEG файлове, които предизвикват предупреждение по време на ограничено декодиране на пълно изображение с `sharp`. Той повторно кодира всяко прието изображение като каноничен JPEG, извлича ширина и височина от декодираните байтове вместо да се доверява на полета от повиквача и отхвърля всякакви излишни полиглотни байтове, вместо да ги запазва. Само ограниченото канонично компресирано буферно пространство се начислява и на двете квоти. Ограничението на JSON по мрежата включва разходите за Base64 за тавана от 32 MiB декодирани входни данни. Всеки  
съхранен произход записва валидирания си JPEG формат/разделител, политика на семплиране, версия на произхода, време на създаване, хеш на съдържанието, изчислен от сървъра, и хеширан родителски референт плюс хеша на родителското съдържание на доверения повиквач. Анулирането се проверява между асинхронните фази на декодиране/хеширане преди атомното ангажиране на кеша.

Производственият производител повторно използва вече извлечените брокерски кадри само след успешен визуален анализ, без вторично изтегляне/екстракция на видео. Той изисква оператор `modalityBridgeVideoDrilldownEnabled=true`, строг per-part `drilldown: true` и автентифициран идентификатор на API ключа. Декларираните от клиента стойности на принципала/сесията никога не установяват собственост. Без всички три условия той не хешира, не променя размера или не запазва допълнителни кадри. Неуспехът при запазването запазва използваемия визуален отговор. Съгласуваните запитвания заобикалят кеша за резултати от цялото видео, така че кешираните резултати никога не повтарят хендлите.

Успешните JSON и SSE отговори разкриват най-много четири непрозрачни хендла в ограничения хедър `x-omniroute-video-drilldown`. Упълномощените браузърни произходи могат да четат този хедър, без да разширяват политиката за произход на CORS. Новите хендли използват `v1.<32-byte random base64url token>`, а регистърът запазва само техните SHA-256 хешове. Читателят/парсерът на хедъра също приема наследствени 64-хекс хендли. Автентифицираният публичен потребител е  
`GET /api/v1/video-bridge/drilldown?handle=...`, независимо ограничен от  
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Ясно запазеното false отнема достъп дори когато наследственият env  
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` е активиран. Производственото запазване има аналогичен наследствен  
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` резерв. И двете резерви по подразбиране са изключени.

Потребителят извлича собственост от автентикирания ключ, прилага политиката на ключа и  
върща същия 404 за неизвестни, изтекли и хендли на друг ключ. Той приема  
`variant=preview|standard|detail` (максимален JPEG размер 320/640/1280, никога не увеличен),  
`limit=1..8` (или наследствения `frames` псевдоним, никога и двете), базиран на нула `page` и опционални  
`start`/`end` фокус секунди. Дублиращите  
ключове на запитвания и обърнати фокусни прозорци се отхвърлят. Всеки върнат вариант има хеш  
на действителното си съдържание и метаданни за действителната разделителна способност, свързани с  
запазения източник. Вариантите се извличат при четене, а не се съхраняват като допълнителни запазени копия. JSON  
отговорът, включително Base64/обвивка, е ограничен до 32 MiB; прекалено голямата страница връща 413 и клиентът трябва да поиска по-малко кадри. Четенията проверяват анулирането около всяко  
промяна на размера и повторно проверяват валидността на хендлите преди да върнат. `DELETE` от собственика е идемпотентен;  
изтриването или изтичането на TTL освобождава запазения източник и отчитането на използването.

Споделеното хранилище е локално за процеса: хендлите изтичат при рестартиране и не могат да се прехвърлят  
между независими процеси на OmniRoute. Статистиките за управление разкриват ефективната политика за запазване/отдалеченост  
и агрегатните запазени записи/байтове само, никога медии, референции, идентификатори на принципали или хендли. Панелът за настройки на видео показва тези стойности и може да запази  
и двете превключватели за съгласие. Тази документация за изпълнение не е доказателство за активна внедряване или промоция; приемането на реалния модел се проследява отделно.

Frames са надписани последователно с конфигурирания Video модел. Празният Video override наследява настройката Vision; ако и двете са празни, автоматичният маршрутизатор Vision избира ефективния модел, способен на визуализация. Успешните надписи заменят оригиналната част с стабилен префикс `[Video description:`, който също маркира текста като ненадеждно медийно наблюдение и казва на последващите модели да не следват инструкциите, намерени в медията. Ключовете за кеша на надписите на кадрите включват JPEG байтове, подканва, времеви печат и ефективен модел; само успешните надписи се кешират. Записите в кеша запазват действителния успешен производствен модел, включително резервен модел; мостът докладва `mixed`, когато различни кадри са произведени от различни модели. Успехът на кеша повторно използва идентичността на този производител вместо да я преименува на искания план за маршрутизиране. Кешът за резултати от цялото видео е ключиран на всеки вход, който променя изхода — подканва, ефективен модел, политика на вземане на проби, брой кадри, режим на семантичен анализ, SHA-256 отпечатък на нормализирания фокусен намек, фокусен прозорец, `transcript`, `audioTranscript` и флага за контактна таблица — така че промяната на която и да е от тези измерения е пропуск в кеша, никога остаряла повторна употреба. Версията на политиката за визуална дубликация, прагът и ограниченото количество кандидати за кадри също са явни в ключа на кеша за резултати и метаданни; следователно промяната на политиката не може да повторно използва остаряла описателна информация за цялото видео. Метаданните на кеша за резултати v4 запазват режима и отпечатъка, никога суровата потребителска задача. Метаданните на защитната стена докладват както исканите, така и ефективните режими на анализ; исканият режим `focused` без използваем потребителски текст се докладва като ефективно `full`.

Защитната стена извлича всяка поддържана част от видеото, но не описва повече от `modalityBridgeVideoMaxVideos`. За цел, доказана, че има `supportsVideo === false`, неуспешните и надвишаващи лимита видеа стават явни безопасни текстови маркери, така че нито едно сурово видео не оцеляват. Когато способността е неизвестна, тези части остават непокътнати. Целите с `supportsVideo === true` заобикалят моста. Сигналът за прекратяване на клиентската заявка се разпространява през изтегляне, брокерска опашка, подпроцеси и повиквания за надписи; прекратяванията спират между видеата и никога не се отварят за сурова медия.

Настройките за изпълнение са с база данни и валидирани с Zod:

| Ключ                                | По подразбиране | Обхват / поведение                                                                                         |
| ----------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`         | Опционално време за изпълнение, по избор                                                                   |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | `full` запазва общи надписи; `focused` използва ограничен, ненадежден контекст на последния потребител     |
| `modalityBridgeVideoModel`          | `""`            | Наследява модела на Vision Bridge                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware` или пропорционален `segment_aware`; неуспехът на детектора се връща към `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                             |

Стойностите на времето за изчакване на наследеното Video над 120 секунди са ограничени до крайния срок на брокера; новите настройки, записани над този лимит, се отхвърлят. `GET /api/modality-bridge/video/runtime` изисква доверена печатна локализация преди удостоверяване или проучване на времето за изпълнение, след което изисква управление на удостоверяване. Той връща само `available`, санитаризирани версии на FFmpeg/ffprobe и фиксирана причина, когато времето за изпълнение не е налично. Вътрешната точка за извличане не е публично API за качване: насищането на опашката връща `503` плюс `Retry-After`, разединяването на повикващия връща `499`, а фиксираният краен срок на брокера връща `504`. Преобразуваните отговори добавят `video->text;model=<visionModel>;parts=<videos>` към централния `x-omniroute-modality-bridge` заглавие, без да премахват Vision или аудио сегменти.

### PII Masker (`piiMasker.ts`)

Работи на **двата** етапа.

- **`preCall`** клонира полезния товар, обхожда `system`, `messages`, `input` и `prompt` (включително обикновени стрингови елементи) и прилага `processPII()` (от `@/shared/utils/inputSanitizer`) към стринговите полета `content`/`text`. Когато `PII_REDACTION_ENABLED=true`, откритото PII се премахва в изходящия полезен товар. Това е независимо от `INPUT_SANITIZER_MODE` (който само контролира политиката за инжектиране на подканва). Когато премахването е изключено, повикването записва броя на откритията, без да пренаписва съдържанието.
- **`postCall`** дълбоко клонира отговора, изпълнява `sanitizePIIResponse()` плюс маскиращия API-формат на отговорите (`maskResponsesOutput` — обхваща `output_text` и `output[].content[].text`). Ако се извърши каквото и да е премахване, модифицираният отговор заменя оригинала.

Защитната стена никога не блокира; тя само анотира (`meta.detections`, `meta.redacted`) или пренаписва.

### Prompt Injection (`promptInjection.ts`)

Открива враждебни структури в предоставеното от потребителя съдържание и прилага конфигурираната политика. Поведението се управлява от променливи на средата и опции на конструктора:

| Настройка         | Променлива на средата                                                                                    | По подразбиране | Ефект                                                                                                                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Активирано        | `INPUT_SANITIZER_ENABLED`                                                                                | `true`          | Когато е `false`, защитната лента прекратява.                                                                                                                                                                        |
| Режим             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`          | Политика за инжектиране: `block`, `warn` или `log`. (`redact` се приема за обратно съвместимост, но **не** премахва текста на инжекцията; искането за пренаписване на PII се контролира от `PII_REDACTION_ENABLED`.) |
| Праг за блокиране | `blockThreshold` опция / `INPUT_SANITIZER_BLOCK_THRESHOLD` (псевдоним `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`          | Минимална тежест, необходима за блокиране. Средната е само за наблюдение по подразбиране.                                                                                                                            |

**Предимство на режима** (`getMode`): caller `options.mode` →
`INJECTION_GUARD_MODE` **превишаване на флага за функция в DB** (Табло → Настройки →
Флагове за функции) → `INJECTION_GUARD_MODE` променлива на средата → `INPUT_SANITIZER_MODE` променлива на средата →
`warn`. Следователно, превишаването на таблото печели над променливите на средата, така че UI на флаговете за функции контролира работещата защита в реално време (без рестарт). Четенето от DB е защитено от грешки:
ако възникне грешка, защитата се връща към поведението, базирано на променливата на средата, и когато няма
превишаване, поведението е идентично на разрешаването само на базата на средата.

Източници на откритие:

1. `sanitizeRequest()` от `@/shared/utils/inputSanitizer` (споделен детектор
   набор, използван на друго място в потока).
2. Вградени `DEFAULT_GUARD_PATTERNS` (в момента `system_override_inline` и
   `markdown_system_block`, и двете с тежест `high`).
3. Опционални `customPatterns`, предадени чрез опции на конструктора (низове, regex,
   или `{ name, pattern, severity }` записи).

Когато `mode === "block"` **и** поне едно откритие отговаря на прага на тежест,
`preCall` връща `{ block: true, message: "Искането е отхвърлено: открито подозрително съдържание" }`. В режимите `warn`/`log` защитната лента записва, но
позволява извикването. Споделеният помощен метод `evaluatePromptInjection()` също е експортиран
за извикващите, които трябва да оценят подканите, без да преминават през регистъра.

**Сканиране на граница (v3.8.20):** детекторът проверява само **първите 16 KB** от
обединения текст на подканата — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 байта) в
`src/shared/utils/inputSanitizer.ts`. И `detectInjection()`, и
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` преди да стартират
цикъла на шаблона. Директивите за инжектиране се намират близо до върха на входа, така че това
ограничава CPU/GC на много стотин КБ полезни натоварвания, без да отслабва откритията (сравнете
#3932, #4041).

### Маскировчик на удостоверения (`credentialMasker.ts`)

Работи на **двата** етапа, последен в стандартната верига (приоритет `95`). Премахва
известни шаблони на API-ключове / секретни токени от изходящото полезно натоварване (съдържание на съобщението,
аргументи на извикването на инструмента, резултати от инструмента) **и** отговора на доставчика, така че
удостоверение, поставено в подканата (или върнато обратно от резултата на инструмента) да не бъде изтекло
към горния доставчик или обратно към клиента.

- **Само по желание**, същата конвенция като пренаписването на PII (Твърдо правило #20-съседно):
  деактивирано, освен ако `settings.credentialRedactionEnabled === true` **или**
  `CREDENTIAL_REDACTION_ENABLED=true`. Когато е изключено, защитната лента е бездействие —
  никога не блокира и никога не пренаписва.
- `redactCredentials()` обхожда цялото дърво на полезното натоварване/отговора (`walkValue()`,
  безопасно за замърсяване на прототипа, безопасно за цикли чрез `WeakSet`) и заменя съвпаденията с
  плейсхолдера `[REDACTED:<type>]`, клонирайки само клоните, които наистина
  са се променили.
- `CREDENTIAL_PATTERNS` обхваща ключове на LLM доставчици (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), токени за VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ключове за плащане (Stripe, Square), облачни
  ключове (AWS access key, Twilio, SendGrid, Mailgun), частни ключове / JWT,
  низове за свързване, носещи удостоверения (`mongodb://user:pass@...`, и др.), и
  общ шаблон за заглавие `Authorization`/`x-api-key`/`api-key`/`apikey`. Ключовете с форма на заглавие (`authorization`, `x-api-key`, `api-key`,
  `apikey`) се премахват структурно (само стойността, префикс на схемата като
  `Bearer `/`Basic ` запазен), а не чрез общия текстов regex.
- Защитната лента никога не блокира; тя само пренаписва (`modifiedPayload` /
  `modifiedResponse`) и анотира (`meta.credentialsRedacted`, `meta.count`).

Регресионна защита: `tests/unit/credential-masker-guardrail.test.ts`.

## Базов договор (`base.ts`)

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
  block?: boolean; // true прекъсва веригата
  message?: string; // показва се при блокиране
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // връща се от preCall, за да пренапише заявката
  modifiedResponse?: TValue; // връща се от postCall, за да пренапише отговора
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

Предпазен механизъм сигнализира „без промяна“, като връща `void`, `{}` или
`{ block: false }`. Връщането на `modifiedPayload`/`modifiedResponse` заменя
стойността, преминаваща през веригата към следващите предпазни механизми.
`signal?: AbortSignal` предава жизнения цикъл на извикващия към предпазните механизми. Прекъсването на заявка е умишленото изключение от поведението fail-open: медийните мостове спират работата и извършват почистване, без да възстановяват необработената медия към цел, за която е известно, че не я поддържа.

## Регистър (`registry.ts`)

Единичният екземпляр `guardrailRegistry` предоставя:

- `register(guardrail)` — добавя предпазен механизъм (или заменя такъв с нормализирано име) и
  сортира отново по `priority` във възходящ ред.
- `clear()` / `list()` — административни помощни функции.
- `runPreCallHooks(payload, context)` — обхожда активните предпазни механизми, предава
  полезния товар чрез `modifiedPayload` и спира при първото `block: true`.
- `runPostCallHooks(response, context)` — същият поток от страна на отговора.
- `resetGuardrailsForTests({ registerDefaults })` — изчиства състоянието и по избор
  регистрира отново стойностите по подразбиране за чиста изолация на тестовете.

И двете изпълняващи функции връщат `{ blocked, payload|response, results, guardrail?, message? }`,
където `results` е масив от записи `GuardrailExecutionResult`, включващи
полета `blocked`, `skipped`, `modified`, `error` и `meta` за всеки предпазен механизъм,
полезни за проследяване.

### Деактивиране на предпазни механизми за отделна заявка

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` обединява
дедублициран списък с имена на предпазни механизми, които трябва да бъдат пропуснати за текущата
заявка. Източници (всички незадължителни, всички се обединяват):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` в тялото на заявката (на най-горно ниво)
- `metadata.disabledGuardrails` в тялото на заявката
- Заглавка `x-omniroute-disabled-guardrails` (или наследената
  `x-disabled-guardrails`)

Стойностите могат да бъдат масиви от низове или низ, разделен със запетаи; имената се
нормализират до kebab-case с малки букви (`pii_masker` → `pii-masker`). Резултатът
се предава чрез `context.disabledGuardrails` към регистъра, който пропуска
съвпадащите предпазни механизми (`skipped: true` в `results`).

## Ред на изпълнение

За всяка заявка, преминаваща през `src/sse/handlers/chat.ts` и
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` изгражда списъка за пропускане от API ключа, тялото
   и заглавките.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` изпълнява защитните механизми във възходящ
   ред на приоритет:
   - Деактивираните защитни механизми се записват като `skipped`.
   - `preCall` на всеки защитен механизъм може да пренапише полезния товар чрез `modifiedPayload`.
   - Първото `block: true` прекъсва веригата и обработчикът връща
     отговор за отхвърляне от защитен механизъм.
3. Потенциално пренаписаният полезен товар преминава към комбинираното маршрутизиране и изпращането
   към системата нагоре по веригата.
4. След като отговорът бъде съставен, `guardrailRegistry.runPostCallHooks(...)`
   изпълнява същата верига върху отговора. `block: true` тук отхвърля отговора
   от системата нагоре по веригата.

Защитните механизми, които хвърлят изключение, се записват с `error: <message>` и се регистрират чрез
`logger.warn`, но веригата продължава — по замисъл се прилага подходът fail-open.

## Конфигурация

Променливи на средата, използвани от вградените защитни механизми:

| Променлива                            | Използва се от                    | Ефект                                                                                                                                   |
| ------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                | Задайте `false`, за да деактивирате откриването изцяло.                                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                | Политика за инжекции: `warn`, `block` или `log`. Остарялата стойност `redact` не пренаписва текста на инжекцията.                       |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                | Режим за защитата срещу инжекции; също и флаг за функционалност в БД, който **има предимство** пред променливите на средата (БД > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                | Минимална сериозност, която `MODE=block` отхвърля: `high` (по подразбиране), `medium` или `low`.                                        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                | Остарял псевдоним на `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`                      | Когато е `true`, личните данни в заявката се редактират (независимо от режима за инжекции).                                             |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (надолу по веригата) | Управлява поведението на маскиращия механизъм от страната на отговора.                                                                  |

Защитните механизми на Modality Bridge четат конфигурацията по време на изпълнение от хранилището
за настройки, поддържано от БД (`getSettings()`), а не от променливи на средата. Основните ключове за Vision са
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` и
`modalityBridgeCacheMaxEntries`. Остарелите ключове
`visionBridge*` се приемат само като документиран резервен вариант за четене в рамките на един цикъл;
записите от таблото за управление използват основните ключове. Стойностите по подразбиране и механизмът
за разрешаване на резервния вариант се намират в `src/shared/constants/modalityBridgeDefaults.ts`, а остарелите
константи са запазени в `src/shared/constants/visionBridgeDefaults.ts`.

Audio използва `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` и `modalityBridgeAudioMaxClips`, както и споделените
настройки `modalityBridgeCache*`. Audio няма резервен вариант с остарели ключове, тъй като тези
ключове са въведени със схемата на Modality Bridge.

Video използва `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` и
`modalityBridgeVideoTimeout`, както и споделените настройки `modalityBridgeCache*`.
Той е деактивиран по подразбиране, тъй като FFmpeg/ffprobe са незадължителни оперативни
зависимости, а добавянето на описания към кадрите увеличава латентността и разходите за модела.

## Персонализирани защитни механизми

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

Стъпки:

1. Създайте `src/lib/guardrails/myGuardrail.ts`, който разширява `BaseGuardrail`.
2. Имплементирайте `preCall` и/или `postCall`.
3. Регистрирайте го при импортиране (добавете го от `registerDefaultGuardrails`) или
   извикайте `guardrailRegistry.register(...)` по време на изпълнение — регистърът заменя
   всеки предходен защитен механизъм със същото нормализирано име.
4. Добавете тестове в `tests/unit/` (съществуващи примери:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Тестване

Използвайте `resetGuardrailsForTests()` между тестовете, за да започвате от известно състояние.
Подайте `{ registerDefaults: false }`, за да започнете с празен регистър и да
регистрирате само защитните механизми, които се тестват. Vision Bridge приема инжектиране
на зависимости (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge предоставя
еквивалентните точки за подмяна за настройки, възможности, избор на STT модел, проверки
на идентификационни данни и транскрипция. Така тестовете могат да упражняват и двата
потока без достъп до база данни или мрежа.

## Вижте също

- `src/lib/guardrails/` — имплементация
- `src/shared/utils/inputSanitizer.ts` — споделен детектор, който осигурява
  откриването на инжектиране в подкани и маскирането на PII
- `src/shared/constants/visionBridgeDefaults.ts` — стойности по подразбиране за Vision Bridge и
  списък с модели за принудително използване на моста
- `src/shared/constants/modalityBridgeDefaults.ts` — споделени стойности по подразбиране за изпълнение на Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ортогонален слой (прекъсвач на веригата, периоди на изчакване)
- `docs/reference/ENVIRONMENT.md` — пълна справка за променливите на средата

## Покритие на маршрутите от защитата срещу инжектиране и red-team тестване (Фаза 8 · Блок D)

Защитата срещу инжектиране (`createInjectionGuard` / `withInjectionGuard`) обхваща всички маршрути,
които приемат потребителски подкани. Тя спазва `INJECTION_GUARD_MODE` (по подразбиране `warn` = само регистриране;
`block` = връща HTTP 400 `SECURITY_001`).

| Тип                  | Маршрути                                                                                                                                             | Режим по подразбиране |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Текст (съществуващи) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                  |
| Генеративни          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                  |
| Данни                | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                  |

Извличането на текст (`extractMessageContents`) обхваща `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team тестване (всяка нощ, `nightly-llm-security.yml`):** promptfoo проверява дали всеки маршрут блокира
корпуса OWASP-LLM при `INJECTION_GUARD_MODE=block`; garak изпълнява сонди (пропуска се без тайна).
`moderations` е включен за последователност — операторите в режим на блокиране могат да го изключат чрез
`resolveDisabledGuardrails`.

Работният поток, изпълняван всяка нощ (`.github/workflows/nightly-llm-security.yml`, cron + ръчно
задействане), има две задачи:

- **`promptfoo-guard` (блокираща)** — изпълнява `promptfoo eval -c promptfooconfig.yaml`
  с `INJECTION_GUARD_MODE=block`. Всеки състезателен тестов случай (напр. „игнорирай всички
  предишни инструкции…“, jailbreak атаки в стил DAN) проверява, че отговорът съдържа
  `error.code === "SECURITY_001"`, т.е. че защитата действително е отхвърлила заявката.
- **`garak` (консултативна)** — изпълнява garak `--probes promptinject,dan,leakreplay`
  срещу локален екземпляр на OmniRoute (`http://localhost:20128/v1`). Условно се изпълнява при наличие на
  тайна за доставчика (`PROMPTFOO_PROVIDER_KEY`); пропуска се коректно и завършва с
  `|| true`, така че да отчита резултати, без да причинява неуспех на CI.

Покритието на помощната функция за защита (`createInjectionGuard` / `withInjectionGuard`)
обхваща всеки маршрут `/v1`, който приема подкани; текстът на подканата се извлича от
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` чрез
`extractMessageContents()` в `src/shared/utils/inputSanitizer.ts`.
