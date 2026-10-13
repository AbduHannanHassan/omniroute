# Guardrails (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Źródło prawdy:** `src/lib/guardrails/`
> **Ostatnia aktualizacja:** 2026-08-29 — v3.8.51 (Pochodzenie transkrypcji Video Bridge jest deklarowane przez dzwoniącego,
> jeszcze nie zweryfikowane przez serwer — wyjaśniono zgodnie z #11661)

Guardrails wymuszają bezpieczeństwo, politykę i transformacje treści na granicy
między OmniRoute a dostawcami upstream. Każdy guardrail może kontrolować (i
opcjonalnie odrzucać, przekształcać lub dodawać adnotacje) ładunki żądań (`preCall`)
oraz odpowiedzi upstream (`postCall`).

System działa w trybie **fail-open**: jeśli guardrail zgłosi błąd podczas wykonywania,
rejestr zapisuje błąd i kontynuuje pracę z następnym guardrailem, zamiast przerywać
żądanie. Blokowanie jest jawną decyzją (`block: true`), nigdy przypadkiem.

## Wbudowane Guardrails

Rejestr automatycznie ładuje sześć guardrails w kolejności priorytetu podczas importu
(zobacz `registry.ts` → `registerDefaultGuardrails()`):

| Priorytet | Nazwa               | Etap(y)        | Plik                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niższe numery priorytetów działają **pierwsze**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Przechwytuje żądania zawierające obrazy skierowane do **modeli nie-wizualnych** i albo
przekierowuje całe żądanie do modelu obsługującego wizję, albo zastępuje części obrazu
opisami tekstowymi generowanymi przez konfigurowalny model wizji przed
wywołaniem upstream. Dzięki temu dostawcy obsługujący tylko tekst mogą
przezroczysto obsługiwać multimodalne ładunki.

Przepływ:

1. Pomiń, jeśli docelowy model już obsługuje wizję (chyba że znajduje się na liście
   wymuszonych mostów `isVisionBridgeForcedModel`).
2. Wyodrębnij części obrazu za pomocą `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), która deleguje do **zunifikowanego detektora
   mediów** `detectMediaParts()` w `open-sse/utils/mediaParts.ts` — jedynego źródła prawdy
   współdzielonego z filtrem kompatybilności combo.
   Wyodrębnienie jest dozwolone tylko dla najwyższego poziomu części kształtów,
   które `replaceImageParts` może ponownie wstawić (kontrakt extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` oraz Responses API `input_image`. Zagnieżdżone trafienia i
   kształty tylko wskaźnikowe są materiałem do filtrowania combo i nigdy nie są wyodrębniane.
   Pomiń, jeśli nic nie znaleziono.
3. Rozwiąż konfigurację czasu wykonania za pomocą `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nowe klucze ustawień `modalityBridge*`
   wygrywają; klucze legacy `visionBridge*` pozostają **jednorazowym
   zapasowym** (okno wycofania). Pomiń przed jakimkolwiek przejściem mediów, gdy most
   jest wyłączony.
4. Wybór trybu (`modalityBridgeVisionMode`, zobacz tabelę poniżej) decyduje
   o przekierowaniu vs opisie. Przekierowanie zwraca `modifiedPayload` z zamienionym
   tylko `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ścieżka opisu: ogranicz obrazy do `maxImages`, skomponuj zadaniowy prompt,
   skonsultuj pamięć podręczną opisów, wywołaj model wizji **równolegle**
   (`Promise.allSettled`), i wstaw `[Image N]: <description>` tekstowe części w
   ich miejsce. Nieudany opis zwraca `null`, a oryginalna część obrazu jest
   **zachowana** (#4012) — z wyjątkiem ścieżki opisu combo, gdy każdy
   opis się nie powiódł, gdzie potwierdzony upstream bez wizji otrzymuje
   `(niedostępne — brak połączenia z dostawcą obsługującym wizję)` stub zamiast (#8430).
6. Zwróć `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Wybór trybu (`modalityBridgeVisionMode`)

| Tryb       | Domyślny | Zachowanie                                                                                                                                                                                                                                                                                    |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Legacy heurystyka, nietknięta (#6640/#7204): modele non-combo/`auto/` przekierowują do najlepszego modelu wizji, chyba że oryginalny model już ma użyteczne poświadczenia (wtedy opisuje); cele combo zawsze opisują.                                                                         |
| `describe` |          | Zawsze opisuj — blok przekierowania jest całkowicie pomijany; wybrany przez użytkownika model zawsze odpowiada.                                                                                                                                                                               |
| `reroute`  |          | Wymuś przekierowanie: ochrona modelu z poświadczeniami jest pomijana. Ochrona poświadczeń dla celu przekierowania nadal obowiązuje — gdy nie istnieje użyteczny cel wizji, żądanie przechodzi do opisu, więc surowe obrazy nigdy nie docierają do backendu obsługującego tylko tekst (#8430). |

Wymuszone tryby przerywają **przed** uruchomieniem heurystyki auto; zachowanie `auto`
jest identyczne bajtowo z guardrailem przed PR-1.

#### Zadaniowy opis promptu (`modalityBridgeVisionTaskAware`)

Domyślnie **prawda**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **ostatniej wiadomości użytkownika** (przycięty do 500 znaków) do podstawowego
promptu opisu, kierując opis w stronę tego, o co użytkownik faktycznie pytał
(wzorzec codex-vision-proxy) i prosząc model wizji o transkrypcję widocznego
tekstu. Gdy flaga jest wyłączona — lub nie ma tekstu użytkownika — używany jest
niezmieniony podstawowy prompt.

#### Opis pętli samodzielnej (`callVisionModelSingle()`

w `visionBridgeHelpers.ts`)

Opis pętli samodzielnej zawsze żąda `image_url.detail: "high"` —
bezwarunkowo, dla każdego wywołującego/dostawcy, nie jest uzależnione od żadnego sygnału klienta.
Próbkowanie o niskiej szczegółowości obniża dokładność OCR dla dokładnie tego zadania transkrypcji tekstu,
o które prosi ten prompt, więc wywołanie opisu zawsze żąda wysokiej
szczegółowości, niezależnie od tego, jaki poziom szczegółowości użyto w oryginalnym przychodzącym żądaniu. To
wpływa tylko na wewnętrzne ciało żądania opisu; nie zmienia to, jak
OmniRoute przekazuje własne `image_url.detail` wywołującego w głównym żądaniu —
ta domyślna wartość jest stosowana osobno, i tylko dla wykrytych klientów OpenCode, w
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Gałąź formatu wire-format Anthropic
opisu pętli samodzielnej nie ma pola `detail`
i nie jest dotknięta żadnym z domyślnych ustawień.

#### Limit wyjścia opisu (`modalityBridgeVisionMaxChars`)

| Klucz                          | Domyślna | Zakres            |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` lub 100–50000 |

`0` (domyślnie) oznacza **brak limitu** — opis zwrócony przez
`callVisionModel()` jest przekazywany bez modyfikacji, zachowując istniejące
zachowanie. Każda wartość w zakresie 100–50000 skraca opis z
sufiksem `…` przed tym, jak zostanie wstawiony jako `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` w `src/lib/guardrails/visionBridge.ts`).
Zwiększ to dla zadań OCR wymagających dużej szczegółowości, gdzie model downstream potrzebuje
pełnej transkrypcji; zmniejsz, aby ograniczyć użycie tokenów w rozmownych modelach wizji.
Pole na pulpicie znajduje się w zakładce Wizja w panelu Zaawansowane
(`modality-bridge-max-chars` w `ModalityBridgeVisionTab.tsx`) i ogranicza każdą
wartość między 1 a 99 do 100, pozostawiając wyraźne `0`
nietknięte — `0` jest ważną wartością Zod samą w sobie
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a nie tylko
"nieustawionym" domyślnym.

#### Pamięć podręczna opisu (`modalityBridge/bridgeCache.ts`)

Pamięć podręczna LRU + TTL w pamięci dla wyjść opisu, współdzielona w całym procesie.
Klucz = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z
ramkami długości-prefiksu (brak kolizji granic pól). Składnik modelu to
**skonfigurowany** model mostu, a nie model, który faktycznie odpowiedział —
`callVisionModel` może wewnętrznie przechodzić na zapas, a kluczowanie według próby
fragmentowałoby pamięć podręczną. Nieudane opisy nigdy nie są buforowane. Ustawienia:

| Klucz                           | Domyślna | Zakres  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalizacja obrazów zdalnych (pętla samodzielna opis/pobieranie base64)

Gdy most pobiera **zdalny** obraz samodzielnie — wywołanie opisu Anthropic
i konwersja base64 formatu claude-wire
(`ensureBase64ImagesForClaudeWire`), obie za pośrednictwem
`fetchRemoteImageAsDataUri()` w `visionBridgeHelpers.ts` — wynikowy URI danych
jest przekazywany przez `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) przed osadzeniem w żądaniu modelu wizji. Obrazy
przekraczające rozmiar są zmniejszane do **2048px długiego boku** (co odpowiada
ograniczeniu zmiany rozmiaru, które OpenAI/Anthropic już stosują po stronie serwera), co zmniejsza
bity przesyłania/opóźnienie bez zmiany tego, co widzi model wizji. Zmiana rozmiaru
używa `sharp`, ładowanego za pomocą dynamicznego importu: na platformie, gdzie jego natywna
binarka nie ładuje się, `normalizeDataUri()` **nigdy nie zgłasza błędu** — przechodzi
do przekazania oryginalnych bajtów, więc ścieżka opisu/konwersji base64
zawsze działa. Bajty, które nie są obrazami (pobranie, które nie zwróciło
rozszyfrowywalnego obrazu) są również przekazywane bez zmian. Ta normalizacja
jest ograniczona do obrazów, które most pobiera dla swojego własnego wywołania — nigdy
nie jest stosowana do surowego ładunku przekazywanego przez wywołującego, zgodnie z
zasadą mutacji tylko na zasadzie opt-in (Twarda zasada #20).

#### Schemat ustawień + migracja

Nowe klucze `modalityBridge*` są walidowane przez Zod w `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, oraz grupa
`modalityBridgeAudio*` używana przez Most Audio. Migracja
`141_modality_bridge_settings.sql` kopiuje istniejące wartości legacy
`visionBridge*` do odpowiadających nowych kluczy (idempotentna, nigdy nie nadpisuje
ustawionej przez operatora wartości `modalityBridge*`); klucze legacy pozostają akceptowane jako
odczytowy fallback przez jeden cykl wydania.

#### Nagłówek przejrzystości + statystyki

Odpowiedzi przekształcone przez opis niosą
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(zbudowane przez `buildModalityBridgeHeader()` w `modalityBridge/bridgeStats.ts`,
stemplowane przez `withModalityBridgeHeader()` w `src/sse/handlers/chatHelpers.ts`).
Przekierowane żądania nie mają **żadnego** nagłówka — ładunek pozostał nietknięty, a zamiana modelu
jest już widoczna w polu `model` ciała odpowiedzi.

`GET /api/modality-bridge/stats` (autoryzacja zarządzania, ten sam poziom co
`GET /api/settings`) zwraca w pamięci liczniki per-modality
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` dla `vision`, `audio` i
`video`. `averageLatencyMs` używa `latencySamples`, a nie wszystkich prób, jako swojego
mianownika; operacja bez pomiaru nie wytwarza próbki o zerowym czasie milisekund. `bridged` pozostaje
wstecznie kompatybilnym aliasem dla udanych konwersji; nieudane próby nie zwiększają go.
Liczniki są resetowane przy ponownym uruchomieniu procesu z zamysłem
(telemetria, nie księgowość).

#### Konfiguracja pulpitu

Dedykowana strona pulpitu nawigacyjnego to
`/dashboard/settings/modality-bridge`. Jej zakładki `Vision`, `Audio`
i `Video` zachowują parametry zapytania podczas zmiany wartości `tab`.
Zakładka Vision udostępnia włączenie, tryb, wybór modelu (w tym automatyczny
domyślny), kontekstowe podpowiedzi, zaawansowane limity czasu/obrazu/długości opisu/pamięci
cache, liczniki czasu działania
i zabezpieczone żądanie próbki. Zakładka Audio jest również aktywna: udostępnia
włączenie, wybór modelu tylko STT z Auto, limity czasu/max-clip, liczniki audio
i test próbki `input_audio`. Zakładka Video jest funkcjonalna: raportuje
stan czasu działania FFmpeg/ffprobe — jeden z czterech wyraźnych stanów UI (`unknown` podczas
gdy probe jest w trakcie lub nie mogło się zakończyć, `restricted` na hoście pulpitu
nieloopback, gdzie probe jest pomijany po stronie klienta, `unavailable` po
próbie i potwierdzeniu braku, lub `available` z wersjami FFmpeg/ffprobe) — zachowuje
limity włączenia/modelu/klatki/wideo/czasu, filtruje wybór modelu do modeli
zdolnych do wizji i udostępnia liczniki wideo.

Poprzednia karta Vision Bridge w ustawieniach AI jest linkiem do
nowej strony; nie posiada już drugiej kopii formularza. Media Providers również
łączy przepływy Image-to-Text i Speech-to-Text z odpowiednimi zakładkami Modality
Bridge, nie usuwając istniejącego placu zabaw Speech-to-Text.

**Ominięcie przyjęcia samopętli:** gdy wywołanie describe przechodzi przez
własną samopętlę OmniRoute `/v1` (model dostawcy niestandardowy), sub-zapytanie wysyła
`x-omniroute-admission-bypass: internal` i jest uwierzytelniane przy użyciu
rozwiązanego poświadczenia samopętli — lokalnego `sk_omniroute` w trybie lokalnym, lub
konfigurowanego przez operatora klucza env `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), aby
wdrożenia z `REQUIRE_API_KEY=true` mogły nadal wykonywać wywołanie describe. Ominięcie
jest honorowane tylko dla tych dokładnych poświadczeń, więc zewnętrzni klienci nie mogą
używać nagłówka, aby pominąć przyjęcie.

Domyślne wartości legacy znajdują się w `src/shared/constants/visionBridgeDefaults.ts`; nowe
domyślne wartości trybu/świadomości zadania/cache oraz resolver ustawień znajdują się w
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail udostępnia opcję
konstruktora `deps`, aby testy mogły wstrzykiwać fałszywe implementacje `getSettings` i
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Przechwytuje żądania czatu z dźwiękiem przed dotarciem do celu, który nie jest
znany jako akceptujący wejście audio. Nigdy nie przekierowuje żądania czatu: części audio są
transkrybowane przez istniejący punkt końcowy wieloczęściowy zgodny z OpenAI, a
wybrany model czatu kontynuuje z transkryptami tekstowymi.

Przebieg:

1. Rozwiąż `supportsAudio` przez `getResolvedModelCapabilities()`. Wyraźne
   metadane rejestru dostawcy mają pierwszeństwo, następnie statyczne metadane modelu, a następnie
   zsynchronizowane `modalities_input`. Zadeklarowana lista wejściowa bez `audio` to `false`; brak
   dowodów na zdolność pozostaje `null`. Zarówno `false`, jak i `null` aktywują
   konserwatywny most, podczas gdy `true` go omija.
2. Rozwiąż ustawienia `modalityBridgeAudio*` i wyodrębnij części audio na najwyższym poziomie
   z każdego komunikatu przez wspólny detektor `detectMediaParts()`. Obsługiwane kształty
   przewodów to OpenAI `input_audio`, `audio_url` i
   `source.media_type: "audio/*"`. Zagnieżdżone audio jest wykrywane do routingu, ale nie
   usuwane przez ścieżkę splicingu. Praca jest ograniczona przez `modalityBridgeAudioMaxClips`;
   późniejsze części pozostają nietknięte.
3. Uhonoruj skonfigurowany `provider/model`, lub pozwól `selectAudioBridgeModel()`
   przejść przez `AUDIO_TRANSCRIPTION_PROVIDERS` w stabilnej kolejności katalogu i wybrać pierwszy
   model z użytecznym aktywnym poświadczeniem dostawcy.
4. `callAudioTranscription()` konwertuje audio base64/data-URI na wieloczęściowy
   `file`, lub pobiera zdalny `audio_url` przez publicznie tylko wychodzący
   guard z przypinaniem DNS i limitem 25 MB. Następnie POSTuje plik i wybrany
   model do lokalnej samopętli `/v1/audio/transcriptions`, uwierzytelnionej przy
   użyciu `resolveSelfLoopBearer()`. Istniejąca trasa transkrypcyjna wykonuje normalne
   wyszukiwanie poświadczeń, obsługę cooldown/rate-limit i dyspozycję dostawcy.
5. Udane wywołania zastępują swoje części `[Audio N]: <transcript>`. Wywołania
   działają z `Promise.allSettled`: indywidualna awaria zachowuje oryginalną część audio
   (#4012 kontrakt). Jeśli każde wywołanie zawiedzie, a cel okaże się
   `supportsAudio === false`, części stają się
   `[Audio N]: (niedostępne — brak połączenia z dostawcą STT)` (#8430 kontrakt). Dla
   nieznanego celu (`null`), wynik z wszystkimi awariami pozostaje nietknięty. Udowodniony
   cel tylko tekstowy bez użytecznego poświadczenia STT otrzymuje ten sam wyraźny
   stub bez wydawania wywołania sieciowego.

Udane transkrypty korzystają z ogólnoprocesowego cache LRU/TTL Modality Bridge. Klucz
łączy odniesienie audio, stabilną etykietę operacji `audio-transcription` oraz wybrany model STT; awarie nigdy nie są cache'owane. Próby audio aktualizują
wspólne liczniki `bridged`, `cacheHits`, `failures` i `lastUsedAt`.
Przekształcone odpowiedzi niosą
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nietknięte
żądania nie otrzymują segmentu Audio Bridge.

Ustawienia czasu działania są wspierane przez DB i walidowane przez Zod:

| Klucz                         | Domyślna | Zakres          |
| ----------------------------- | -------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —               |
| `modalityBridgeAudioModel`    | `""`     | Auto lub ID STT |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10            |

Wspólny cache pozostaje kontrolowany przez `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Przechwytuje najwyższe części wideo w `messages` i odpowiedziach Chat Completions
API `input` przed wywołaniem celu, który nie ma znanej natywnej obsługi wideo.
Obsługiwane kształty to `input_video`, `video_url`, `video_source`, adresy URL HTTPS
oraz `data:video/*;base64,...` URI danych. Zwykłe nazwy plików w tekście nie są traktowane
jako wideo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) odpowiada za przechodzenie przez żądania,
sprawdzanie możliwości/polityki, agregację na poziomie żądania oraz ładunek odpowiedzi.
Prace związane z wideo — pozyskiwanie, pamięć podręczna całkowitych wyników, opisywanie sekwencji klatek
(która łączy dowolny zadeklarowany przez wywołującego transkrypt audio) oraz metryki/abort/cleanup
na poziomie próby — są ukryte za `processVideoPart` w `videoBridgePipeline.ts`, wywoływane raz na część wideo
w pętli `preCall`. Ten moduł definiuje również wyraźne granice portów `VideoMediaBrokerPort`
(pozyskiwanie bajtów i ekstrakcja próbkowanych klatek), `VideoAudioTranscriptionPort`
(łączenie zadeklarowanego przez wywołującego transkryptu audio z próbkowanymi napisami) oraz
`VideoDrilldownPort` (dziedziczony kształt surowego magazynu). Produkcyjne STT i przechowywanie klatek
są zbudowane wokół opisanego portu przez `createVideoSttAdapter` i
`createVideoDrilldownAdapter`; ten ostatni korzysta z wspólnego cyklu życia z nieprzezroczystym uchwytem.

Publiczna ścieżka żądania `/v1` nigdy nie importuje ani nie wywołuje podprocesu. Zdalne
wideo jest pobierane w granicach 50 MiB; wbudowane wideo base64 ma
konserwatywny limit 36 MiB po dekodowaniu na wideo, aby model/wiadomości/ramka
mogły pozostać w publicznym limicie przyjęcia żądania JSON wynoszącym 50 MiB. Długość inline i
szacunkowe rozmiary po dekodowaniu są sprawdzane przed alokacją. HTTPS
jest wymagane na początkowym zdalnym URL i każdym przekierowaniu, korzystając z istniejącego
publicznego tylko zabezpieczenia wyjścia z przypinaniem DNS. Bajty następnie przekraczają dokładną wewnętrzną
granice brokera `POST /api/modality-bridge/video/extract`. Ta trasa jest zarówno
`LOCAL_ONLY`, jak i `SPAWN_CAPABLE`, akceptuje tylko uwierzytelnione żądanie
zaufanej pętli zwrotnej na poziomie procesu i nigdy nie akceptuje URL, ścieżki systemu plików,
wykonywalnego pliku ani listy argumentów. Pipeline rozmiaru ciała API i inkrementalny czytnik ciała
handlera niezależnie egzekwują limit wejścia brokera wynoszący 50 MiB. Jego ograniczona kolejka
uruchamia jedną ekstrakcję na raz, pozwala na cztery oczekujące zadania i ogranicza oczekujące wejście do
100 MiB.

Wewnątrz brokera `ffprobe` odczytuje prywatny lokalny plik; stała lista dozwolonych formatów
wyklucza formaty list odtwarzania i manifestów. Dla dozwolonych kontenerów rodziny MOV
zewnętrzne odniesienia danych MOV pozostają domyślnie wyłączone, a stałe polecenie nie optuje w nie.
Zarówno `ffprobe`, jak i `ffmpeg` korzystają z białej listy protokołów tylko `file`, jednego wątku,
stałych tablic argumentów, bez powłoki oraz wykonywalnych plików rozwiązywanych z `PATH`. Strumienie
okładek z dołączonymi obrazami nie są kandydatami do odtwarzania. Wszystkie strumienie do odtwarzania muszą
spełniać limity, a wyraźny domyślny strumień jest preferowany przed deterministycznym
najniższym indeksem zapasowym. Wideo jest ograniczone do 600 sekund, 8192 pikseli na wymiar i
33 554 432 pikseli źródłowych. FFmpeg próbuje 1–16 środkowych klatek JPEG, skaluje długi brzeg
do maksymalnie 1024 pikseli bez powiększania mniejszych wejść i nigdy nie otrzymuje URL. Próbkowanie jest
domyślnie `uniform`. Opcjonalne polityki `scene_aware` i eksperymentalne `segment_aware` wykonują
jedno dodatkowe stałe przejście FFmpeg nad już zwalidowanym lokalnym strumieniem, wybierają ograniczone
znaczniki czasowe sceny `showinfo` i deterministycznie wracają do tych samych
jednorodnych środków w przypadku awarii detektora, przekroczenia czasu, źle sformatowanego wyjścia lub pustego
zbioru kandydatów. Tryb świadomy segmentów przydziela próbki środkowe proporcjonalnie do
zwalidowanych interwałów scen; dowody świadome segmentów i zachowanie zapasowe są
szczegółowo opisane poniżej. Twardy limit 16 klatek jest
stosowany po wyborze w każdej polityce. Gdy żądanie świadome sceny ma tylko budżet na jedną klatkę,
używa jednorodnego środka aktywnego pełnego wideo lub okna fokusowego i zgłasza `policyEffective: uniform`:
pojedyncza wybrana klatka sceny nie może zachować obu końców czasowych. Wywołujący może opcjonalnie dostarczyć
ograniczone okno fokusowe (`start`/`end` sekundy); granice są ograniczane do czasu trwania mediów,
odwrócone lub nieskończone okna są odrzucane, a wszystkie polityki próbkowania są wykonywane tylko w
normalizowanym interwale. Wynikowe okno jest dołączane do metadanych próbkowania i w
niezaufanym prefiksie opisu, aby modele downstream mogły odróżnić wycinek skupiony od pełnej
osi czasu.

Skupienie na podpisach semantycznych jest osobnym, wyraźnym ustawieniem. Domyślny tryb analizy `full`
zachowuje istniejący prompt klatki i nigdy nie przesyła tekstu żądania do modelu podpisów. W trybie `focused`
mostek odczytuje tylko najnowszy niepusty `text`/`input_text` stworzony przez użytkownika z tego samego kontenera Chat lub Responses,
normalizuje go do NFC, redukuje znaki kontrolne i białe znaki oraz ogranicza do 500 punktów kodowych Unicode. Pusty wynik wraca do
dokładnego promptu `full`. Użyteczna wskazówka jest serializowana jako JSON w dedykowanym
bloku kontekstu niezaufanego użytkownika i może jedynie priorytetyzować obserwowalne szczegóły; nie
może zastąpić osobnego ostrzeżenia przed podążaniem za instrukcjami widocznymi lub słyszalnymi w mediach. Skupienie tekstowe nigdy nie wywnioskuje `start`/`end` ani nie zmieni
próbkowania czasowego.

#### Dowody strukturalne segmentu FU-07

`segment_aware` wykorzystuje jedno ograniczone przejście wstępnej analizy nad już zwalidowanym
lokalnym strumieniem wideo. Stały łańcuch filtrów najpierw skaluje do maksymalnie 320 pikseli
szerokości, wykrywa zmiany scen i zamrożone interwały, a następnie próbuje z prędkością 1 klatki na
sekundę dla rozmycia, średniej luminancji oraz informacji przestrzennych/czasowych. Przejście jest
ograniczone do 600 próbek strukturalnych, jednego wątku FFmpeg/filter, tej samej
białej listy protokołów i kontenerów tylko `file`, limitu wyjścia procesu wynoszącego 1 MiB
i maksymalnie 30 sekund wewnątrz wspólnego abortu/terminu brokera. Nigdy nie
akceptuje polecenia, filtru, ścieżki ani URL z żądania.

Wartości strukturalne to dowody z deterministycznego próbkowania, a nie semantycznego rozumienia wideo. Nie wnioskowały o podmiotach, działaniach, podpisach, mowie ani intencji użytkownika. Granice sceny i zamrożenia tworzą segmenty; pokrycie zamrożenia, rozmycie, ekspozycja, szczegóły przestrzenne i zmiany czasowe wpływają jedynie na to, jak istniejący budżet 1–16 klatek jest alokowany. W pełni zamrożony segment jest ograniczony do jednej klatki, podczas gdy segmenty niezamrożone konkurują o pozostały budżet. Gdy granice przewyższają liczbę klatek, zachowywane jest jednolite pokrycie osi czasu, więc szybkie wczesne cięcia nie mogą ukryć długiego segmentu końcowego. Granice sceny w obrębie 1-sekundowej rozdzielczości analizy granicy zamrożenia są łączone.

Brakujące filtry, źle sformatowane/puste dowody, błąd detektora lub ograniczony czas na wstępną analizę nie przechodzą do dokładnej polityki jednolitego punktu środkowego. Przerwanie przez wywołującego lub termin brokera nie przechodzi do trybu otwartego: kończy proces podrzędny w trakcie, uniemożliwia późniejsze wydobycie klatek, a prywatne tymczasowe drzewo jest usuwane w `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministyczne rzeczywiste elementy FFmpeg dla oszczędności po deduplikacji podpisów, alokacji budżetu na gęsty ruch, dowodów rozmycia/ekspozycji/SI-TI, szybkich cięć z długim ogonem oraz fałszywych pozytywów przy stopniowym zaniku. Rejestruje czas ściany przed analizą i, gdzie `/usr/bin/time` jest dostępne, zużycie CPU i maksymalne RSS dla dzieci. Jego kontrole jakości są jedynie oraklami strukturalnymi. Rzeczywista jakość modelu podpisów pozostaje `HOLD`, ponieważ ten system nie ma autoryzowanego punktu końcowego ani zamrożonego sędziego. Oszczędności finansowe również pozostają `HOLD`, chyba że `--caption-cost-per-call-usd` dostarczy wyraźnej pozytywnej estymacji kosztu na wywołanie; skrypt nigdy nie fałszuje żadnego z wyników.

Każda klatka jest ograniczona do 4 MiB, wszystkie surowe klatki razem do 23 MiB, a zserializowana odpowiedź brokera do 32 MiB. Prywatny tymczasowy katalog jest usuwany w `finally`. OmniRoute nie pakuje FFmpeg i nie akceptuje niestandardowej ścieżki do pliku wykonywalnego. Przed dodaniem podpisów, mostek stosuje konserwatywną wizualną deduplikację: każdy JPEG jest redukowany do 16×16 bufora w odcieniach szarości i porównywany tylko z ostatnią zachowaną klatką. Dla żądanego budżetu podpisów powyżej jednej klatki, wydobycie dostarcza ograniczoną pulę kandydatów do maksymalnie dwukrotności tego budżetu i nigdy więcej niż 16 klatek. Żądany limit jest stosowany dopiero po deduplikacji, przy czym pierwsze i ostatnie wybrane kandydaty są zachowywane podczas ostatecznego wygładzania, gdy budżet wynosi co najmniej dwa. Polityka wersjonowana `grayscale-16x16-mean-cells-v2` wykorzystuje większą z wartości średniego delta jasności i stosunku komórek miniatur, których znormalizowane delta wynosi co najmniej 0.05. Próg duplikacji to stała 0.04, wybrana dla przewidywalności, a nie ujawniona jako ustawienie w czasie wykonywania. Ten wtórny sygnał o wysokim kontraście zachowuje małe ruchy i zmiany widocznego tekstu, które porównanie tylko na podstawie średniej może ukryć. Błędy komparatora lub dekodera przechodzą do trybu otwartego i zachowują pokrycie. Metadane wyjściowe oddzielają wydobytych kandydatów, pomyślnie użyte klatki i wizualne duplikaty, które zostały odrzucone.

Wyraźnie oznaczona część wideo może żądać znacznikowego arkusza kontaktowego. Mostek buduje maksymalnie 4-kolumnową siatkę JPEG z 16 klatkami. Każda komórka o rozmiarze 512 pikseli wypala swój znacznik czasowy w wysokokontrastowym dolnym pasku, podczas gdy te same znaczniki czasowe pozostają w metadanych tekstowych do późniejszego powiązania i audytu. Cały JPEG pozostaje ograniczony do 32 MiB. Jeśli `sharp` nie może dekodować ani skomponować siatki, mostek przechodzi do indywidualnych klatek JPEG; przerwanie klienta nadal propaguje się przez operację arkusza.

Dowody promocji są celowo oddzielone od syntetycznego mikrobenchmarku kompozycji. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiuje schemat wersjonowany A/B dla rzeczywistych modeli wizji zgodnych z OpenAI. Mierzy zgłoszone przez dostawcę tokeny, opóźnienie ściany end-to-end (w tym kompozycję arkusza), liczbę wywołań modelu oraz zachowanie faktów zdefiniowane w manifeście. Surowe odpowiedzi modelu nie są zapisywane w raporcie; zachowywane są jedynie skróty SHA-256 i dopasowane identyfikatory faktów. System nie wykonuje żadnych wywołań sieciowych ani płatnych modeli, chyba że przekazano `--execute-real` oraz skonfigurowano `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez tego wyraźnego rzeczywistego uruchomienia, jego czytelny maszynowo werdykt pozostaje `HOLD`; pomiary syntetycznego ładunku/liczby wywołań same w sobie nie są dowodem promocji.

Oddzielny `scripts/perf/video-bridge-promotion-eval.ts` przetwarza obserwacje FU-07 lub FU-09. Przyjęcie promocji wymaga wszystkich ośmiu syntetycznych rodzajów scenariuszy oraz oczyszczonego rzeczywistego klipu, co najmniej trzech mierzonych powtórzeń na rolę i przypadek, wszystkich dziesięciu zadeklarowanych metryk, zamrożonych mediów/promptów/oczekiwanych faktów/ustawień, unikalnych identyfikatorów obserwacji i zweryfikowanego zasianego porządku A/B. Paragon wykonania wiąże skrót korpusu, dokładny SHA kandydata i rewizję modelu. Brakujące lub nieprawidłowe pomiary pozostają `HOLD`, w tym CPU powyżej 30 s, maksymalne RSS powyżej 512 MiB lub wstępna analiza powyżej 30 s. To są limity przyjęcia dowodów, a nie nowa gwarancja egzekwowania RSS w czasie wykonywania.

FU-07 wymaga co najmniej 98% zachowania jakości i opóźnienia p95 nie większego niż 1.2x bazowe, plus albo 0.05 absolutnej poprawy średniej przypomnienia zrównoważonej przypadkami przy równoważnych średnich wywołaniach podpisów, albo co najmniej 10% mniej średnich wywołań podpisów po deduplikacji. FU-09 wymaga co najmniej 0.85 jakości, 95% zachowania, 20% redukcji opóźnienia p95 i 10% redukcji tokenów. Utrata krytycznych faktów, zgodność z wstrzyknięciem lub brak użycia uniemożliwia promocję. Jedno wykonanie nie może promować niczego: `--previous-report` potwierdza dwa odrębne, niepokrywające się, kolejno kwalifikujące się wykonania tej samej polityki/rewizji modelu/kandydata/korpusu. Eksperyment próbkowania nie może potwierdzić eksperymentu arkusza kontaktowego.

Kolekcjonerzy powinni oceniać odpowiedzi w pamięci i zapisywać `responseDigest` oraz
metryki i powiązania obserwacji, nigdy tekst odpowiedzi. Konsument również odczytuje
stare surowe obserwacje, ale nigdy nie kopiuje tego tekstu do swoich raportów. Dokładnie
jeden z `responseDigest` lub `rawResponseText` jest akceptowany dla każdej obserwacji.
Wersjonowana lista dozwolonych pozostaje pusta z niezmiennym domyślnym `hold`. Kwalifikujący
się wpis wymaga odniesienia do dowodu, polityki, rewizji modelu, dokładnego SHA kandydata,
skrótu manifestu i dwóch odrębnych identyfikatorów uruchomienia; sprzeczne konteksty
są odrzucane. Te metadane są umową audytową, a nie dowodem, że odniesiony plik zawiera
autentyczne pomiary. Przejrzyj rzeczywiste dowody przed dodaniem jakiegokolwiek wpisu.
Endpoint statystyk zarządzania i pulpit nawigacyjny Video ujawniają konserwatywną
gotowość. Samo skonfigurowane alias modelu nie ustala jego rewizji ani
uruchamianego SHA kandydata, więc bieżący pulpit zgłasza `HOLD`, a nie
ponownie wykorzystuje kwalifikowalność z innego kontekstu wykonania. Wyraźny wybór
eksperymentalny pozostaje oddzielony od promocji; żaden domyślny nie jest automatycznie
zmieniany.

Wywołujący mogą dołączyć opcjonalną tablicę `transcript.cues` do wspieranego
fragmentu wideo, gdy już posiadają dopasowany tekst. Każdy sygnał musi zawierać
`text`, skończony interwał `start`/`end` w obrębie badanej długości oraz
dozwolone źródło (`client`, `embedded` lub `audio-bridge`); `confidence` domyślnie
wynosi `1` i musi pozostawać między `0` a `1`. Dokładne duplikaty sygnałów są
łączone. OmniRoute nigdy nie rozpoczyna transkrypcji z tych metadanych: zwalidowane
sygnały są kopiowane do opisanego wyniku z źródłem, pewnością i interwałem, i
są renderowane jako nieufne obserwacje obok podpisów klatek. Nieprawidłowy,
poza zakresem lub pozbawiony pochodzenia tekst jest odrzucany, a nie mieszany
z strumieniem podpisów. Oba kanały transkryptu w ciele żądania normalizują
dostarczone pochodzenie do `client`, w tym samodzielnie zadeklarowane etykiety
`embedded` lub `audio-bridge`. Tylko adapter należący do serwera może przypisać
te zaufane etykiety przez argument `trustedSource` tylko w kodzie; pole JSON
żądania nie może dotrzeć do tego argumentu. Tekst transkryptu pozostaje
nieufną treścią pochodzącą z mediów, niezależnie od jego pochodzenia, i nigdy
nie powinien decydować o autoryzacji.

Zaawansowany wywołujący może dostarczyć ścieżkę `audioTranscript` dla tego samego
wideo; jest traktowana jako tekst dostarczony przez klienta, a nie dowód transkrypcji
serwera. Szew fuzji uruchamia wizualne i audioobserwacje pod jednym terminem
i sygnałem przerwania, porządkuje je na wspólnej osi czasu, łączy
dokładne duplikaty i zgłasza częściowy wynik, gdy tylko jedna strona
sukcesuje. Nieprawidłowy `audioTranscript` degraduje do tego częściowego wyniku —
opis wizualny jest zachowywany, a gałąź audio rejestruje oczyszczony kod błędu —
zamiast niepowodzenia całego wideo. Dostępność na gałęzi, flaga częściowa
i oczyszczone kody błędów są zachowywane w opisanym wyniku, w metadanych
ograniczających (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), w metadanych pamięci podręcznej wyników oraz w licznikach
fuzji mostu. Domyślna ścieżka Video Bridge nie wywołuje mowy na tekst
ani nie pobiera drugiej kopii mediów; bez tej wyraźnej ścieżki pozostaje
tylko wideo.

**Zatrzymywanie transkryptów (#12150 P1).** To stosuje się automatycznie
za każdym razem, gdy Video Bridge (samo w sobie opt-in) renderuje sygnał
transkryptu — nie ma oddzielnej flagi zatrzymywania. Gdy żądanie renderuje
jakikolwiek sygnał transkryptu (deklarowany przez wywołującego `transcript`
lub zintegrowany `audioTranscript`), ogrodzenie oznacza go jako
`videoBridgeObserved` i produkuje redagowany cień opisu wideo —
identyczne renderowanie, w którym ciało wolnego tekstu każdego sygnału jest
zastępowane przez `[redacted-video-transcript]`, zbudowane przez
podstawienie strukturalnego pola sygnału przed złożeniem ciągu (nigdy przez
parsowanie spłaszczonego tekstu, więc żaden zawartość sygnału — wrogiego
lub zwykłego, w tym ciał zawierających `]`, takich jak `[inaudible]`/`[music]`
— nie może przetrwać). Utrwalony dziennik wywołania wymienia każdą część
tekstu pochodzącego z wideo na ten redagowany cień, dopasowany przez
równość zawartości; kotwica `fullText` jest ponownie odczytywana z zakończonego
ładunku ogrodzenia przed wywołaniem, więc dopasowanie nadal się udaje po
późniejszych ogrodzeniach łańcucha (maski PII i poświadczeń, priorytety 10/95)
przepisywaniu tekstu opisu w miejscu i po systemowym podpowiedzi/transferze/wstrzyknięciu
pamięci przekształceniu tablicy wiadomości. Ciało wysłane w górę do modelu
pozostaje niezmienione. Obserwowane żądanie również nie popularyzuje
trwałej Pamięci (oba wydobycia pochodzące z żądania i odpowiedzi są pomijane),
więc odpowiedź modelu nie może powtórzyć tekstu transkryptu w Pamięci.

**Pola surowego wideo (#12430).** Gdy most jest włączony, a natywne wsparcie wideo
jest nieznane lub nieobecne, zdefiniowane pola `transcript`/`audioTranscript`
aktywują również `videoBridgeObserved`, nawet po niepowodzeniu opisu lub
limicie `maxVideos`. `null` i puste ciągi się liczą; brakujące pola i
metadane nie-wideo nie. Zachowane kopie redagują te pola lub pomijają
żądanie, a pamięci podręczne/Pamięć są pomijane. Ładunek dostawcy pozostaje
niezmieniony.

Dodatkowe zachowane kopie używają tego samego sygnału obserwowanego żądania.
Surowy zrzut żądania klienta przed ogrodzeniem, oczekujące żądanie w pamięci
i wczesny dziennik odrzuconych żądań strukturalnie zastępują pola transkryptu
w częściach wideo; ciągi podpowiedzi syntetyzowane przez etapy pipeline i
transfer kontekstu są redagowane w miejscu docelowym ciała żądania
utrwalonego. Utrwalony znacznik `video_content_removed` powoduje, że
kontynuacja `previous_response_id` kończy się niepowodzeniem, zamiast
rekonstruować tekst, który został celowo odrzucony. Jeśli obserwowane żądanie
traci swój cień redakcji na część przed rejestrowaniem, lub nawet jeden z
kilku cieni wideo nie pasuje po późniejszych mutacjach żądania, zachowane
ciało żądania jest całkowicie pomijane zamiast zachowywać częściowo
redagowany transkrypt.

Dla obserwowanego żądania, odpowiedź modelu może cytować dowolną część
transkryptu bez strukturalnej granicy wskazującej. Dlatego jego zachowany dziennik wywołań
`responseBody` jest zastępowany przez znacznik pominięcia; szczegółowy
artefakt potoku (który może zawierać ciała upstream/klienta i fragmenty strumienia)
nie jest zachowywany. Pamięci podręczne semantyczne, idempotencji i odtwarzania
rozumowania omijają odczyty i zapisy dla tego żądania. Żądanie dostawcy i widoczna dla
klienta odpowiedź pozostają niezmienione. Wczesne bajty keepalive są usuwane z
tymczasowego bufora, gdy szczegółowy artefakt jest pomijany. Ostrzeżenie Kiro o
nieprawidłowym EventStream raportuje tylko liczbę bajtów ładunku, nigdy jego zawartość
ani surowy błąd parsera JSON.
To nie oznacza, że każda niezwiązana diagnostyka dostawcy/wtyczki została
audytowana; szersze czyszczenie zachowanych zlewni jest śledzone w #11658.

Wewnętrzny cykl życia `/api/modality-bridge/video/drilldown` jest osobnym
substratem pamięci podręcznej z pętlą/uwierzytelnieniem tokenów. Każda operacja
wymaga również kanonicznego, nieprzezroczystego identyfikatora głównego. Zanim
wywołujący produkcyjny zostanie włączony, musi wyprowadzić ten identyfikator z
uwierzytelnionego najemcy i nigdy nie może przekazywać wartości wybranej przez
klienta. Klucze pamięci podręcznej wiążą ten identyfikator z kanonicznymi identyfikatorami
sesji i odniesienia wideo, przechowują tylko ich klucze pochodne SHA-256 i ograniczają
zarówno odczyty, jak i usunięcia do tego samego identyfikatora. Pamięć podręczna
przechowuje maksymalnie 16 pochodnych klatek JPEG na wpis, wygasza je po dziesięciu
minutach i obsługuje ograniczone odczyty `start`/`end` lub jawne usunięcie sesji.

Każdy identyfikator główny jest ograniczony do 16 wpisów i 64 MiB kanonicznych danych
JPEG. Te limity są niezależne od globalnego limitu 64 wpisów/256 MiB: presja kwoty
głównej usuwa tylko najmniej używane wpisy tego identyfikatora przed rozważeniem
globalnego usunięcia LRU. Wygasłe wpisy są usuwane zarówno z głównego, jak i globalnego
rachunku w przypadku aktywności pamięci podręcznej, podczas gdy anulowanie i
niepowodzenie walidacji nie zatwierdzają częściowej wymiany.

Pamięć podręczna odrzuca niekanoniczne Base64, nadmiarowe wypełnienie, media
nie-JPEG, nieprawidłowe lub obcięte JPEG oraz JPEG, które generują ostrzeżenie
podczas ograniczonego pełnoobrazowego dekodowania `sharp`. Ponownie koduje każdy
zaakceptowany obraz jako kanoniczny JPEG, wyprowadza szerokość i wysokość
z dekodowanych bajtów zamiast ufać polom wywołującego, i odrzuca wszelkie
trailingowe bajty poliglotowe zamiast ich zachowywania. Tylko ograniczony kanoniczny
skompresowany bufor jest obciążany obiema kwotami. Limit JSON obejmuje narzut Base64
dla limitu 32 MiB dekodowanego wejścia. Każda
przechowywana derivacja rejestruje swój zweryfikowany format/rozdzielczość JPEG,
politykę próbkowania, wersję derivacji, czas utworzenia, serwerowo obliczony hash
zawartości oraz zhashowany odniesienie do rodzica plus zhashowany hash zawartości
rodzica zaufanego wywołującego. Anulowanie jest sprawdzane pomiędzy asynchronicznymi
fazami dekodowania/hashowania przed atomowym zatwierdzeniem pamięci podręcznej.

Producent produkcyjny ponownie wykorzystuje już wyprowadzone ramki brokera tylko po
udanej analizie wizualnej, bez drugiego pobierania/ekstrakcji wideo. Wymaga operatora
`modalityBridgeVideoDrilldownEnabled=true`, ścisłej polityki `drilldown: true` dla
każdej części oraz uwierzytelnionego identyfikatora rekordu klucza API. Wartości
identyfikatora głównego/sesji zadeklarowane przez klienta nigdy nie ustanawiają
własności. Bez wszystkich trzech warunków nie hashuje, nie zmienia rozmiaru ani nie
zachowuje dodatkowych klatek. Niepowodzenie w zachowaniu zachowuje użyteczną
odpowiedź wizualną. Zgłoszone żądania omijają pamięć podręczną wyników całego wideo,
więc wyniki w pamięci podręcznej nigdy nie odtwarzają uchwytów.

Udane odpowiedzi JSON i SSE ujawniają maksymalnie cztery nieprzezroczyste uchwyty w
ograniczonym nagłówku `x-omniroute-video-drilldown`. Autoryzowane pochodzenia przeglądarki
mogą odczytywać ten nagłówek bez poszerzania polityki pochodzenia CORS. Nowe uchwyty
używają `v1.<32-bajtowy losowy token base64url>`, a rejestr zachowuje tylko
ich hashe SHA-256. Parser nagłówka/odczytywacz również akceptuje legacy 64-hex
tokeny. Uwierzytelniony publiczny konsument to
`GET /api/v1/video-bridge/drilldown?handle=...`, niezależnie bramkowany przez
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Jawne trwałe fałszywe
cofają dostęp, nawet gdy włączona jest legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED`
fallback. Produkcyjne zachowanie ma analogiczny legacy
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Oba fallbacki domyślnie są wyłączone.

Konsument wyprowadza własność z uwierzytelnionego klucza, stosuje politykę klucza i
zwraca ten sam 404 dla nieznanych, wygasłych i uchwytów innego klucza. Akceptuje
`variant=preview|standard|detail` (maksymalne wymiary JPEG 320/640/1280, nigdy
nie powiększone), `limit=1..8` (lub legacy `frames` alias, nigdy oba), zero-based
`page` oraz opcjonalne sekundy skupienia `start`/`end`. Duplikaty
kluczy zapytań i odwrócone okna skupienia są odrzucane. Każda zwrócona wariant ma hash
swojej rzeczywistej zawartości i metadanych rozdzielczości, powiązany z zachowanym
źródłem. Warianty są wyprowadzane podczas odczytu, a nie przechowywane jako dodatkowe
zachowane kopie. Odpowiedź JSON, w tym Base64/envelope, jest ograniczona do 32 MiB;
przekroczona strona zwraca 413, a klient musi zażądać mniejszej liczby klatek. Odczyty
sprawdzają anulowanie wokół każdego zmniejszenia rozmiaru i ponownie sprawdzają
ważność uchwytu przed zwróceniem. `DELETE` przez właściciela jest idempotentne;
usunięcie lub wygaśnięcie TTL zwalnia zachowane źródło i rachunek użycia.

Wspólny magazyn jest lokalny dla procesu: uchwyty wygasają po ponownym uruchomieniu
i nie są przenoszone między niezależnymi procesami OmniRoute. Statystyki zarządzania
ujawniają skuteczną politykę zachowania/zdalną oraz agregują tylko zachowane wpisy/bajty,
nigdy media, odniesienia, identyfikatory główne ani uchwyty. Panel ustawień wideo
pokazuje te wartości i może zachować oba przełączniki zgody. Ta dokumentacja
wdrożeniowa nie jest dowodem na wdrożenie na żywo ani promocję; akceptacja
modelu rzeczywistego jest śledzona osobno.

Frames są podpisywane sekwencyjnie przy użyciu skonfigurowanego modelu Wideo. Pusty nadpis Wideo dziedziczy ustawienie Wizji; jeśli oba są puste, automatyczny router Wizji wybiera skuteczny model obsługujący wizję. Udane podpisy zastępują oryginalną część stabilnym prefiksem `[Opis wideo:` , który również oznacza tekst jako niepewną obserwację pochodzącą z mediów i informuje modele downstream, aby nie podążały za instrukcjami znalezionymi w mediach. Klucze pamięci podręcznej podpisów klatek obejmują bajty JPEG, podpowiedź, znacznik czasu i skuteczny model; tylko udane podpisy są buforowane. Wpisy w pamięci podręcznej zachowują rzeczywisty model producenta, w tym model zapasowy; mostek zgłasza `mixed`, gdy różne klatki zostały wyprodukowane przez różne modele. Trafienie w pamięci podręcznej ponownie wykorzystuje tożsamość producenta zamiast oznaczać ją jako żądany plan routingu. Pamięć podręczna wyników całego wideo jest kluczem na każde wejście, które zmienia wyjście — podpowiedź, skuteczny model, polityka próbkowania, liczba klatek, tryb analizy semantycznej, odcisk SHA-256 znormalizowanego wskazania ostrości, okno ostrości, `transcript`, `audioTranscript` i flaga kontaktowej tabeli — więc zmiana któregokolwiek z tych wymiarów to nietrafienie w pamięci podręcznej, nigdy nie jest to stara ponowna użycie. Wersja polityki deduplikacji wizualnej, próg i ograniczona liczba klatek kandydatów są również jawne w kluczu pamięci podręcznej wyników i metadanych; zmiana polityki nie może zatem ponownie wykorzystać starego opisu całego wideo. Metadane pamięci podręcznej wyników v4 przechowują tryb i odcisk, nigdy surowe zadanie użytkownika. Metadane zabezpieczeń zgłaszają zarówno żądane, jak i skuteczne tryby analizy; żądany tryb `focused` bez użytecznego tekstu użytkownika jest zgłaszany jako skutecznie `full`.

Zabezpieczenie wyodrębnia każdą obsługiwaną część wideo, ale opisuje nie więcej niż `modalityBridgeVideoMaxVideos`. Dla celu, który udowodnił, że `supportsVideo === false`, nieudane i przekraczające limit wideo stają się wyraźnymi znacznikami bezpiecznego tekstu, więc żadne surowe wideo nie przetrwa. Gdy zdolność jest nieznana, te części pozostają nietknięte. Cele z `supportsVideo === true` omijają mostek. Sygnał abortu żądania klienta propaguje się przez pobieranie, kolejkę brokera, podprocesy i wywołania podpisów; aborcje zatrzymują się między wideo i nigdy nie otwierają się na surowe media.

Ustawienia czasu wykonywania są wspierane przez bazę danych i walidowane przez Zod:

| Klucz                               | Domyślnie   | Zakres / zachowanie                                                                                         |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opcjonalny czas wykonywania, opt-in                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zachowuje ogólne podpisy; `focused` używa ograniczonego, niepewnego kontekstu ostatniego użytkownika |
| `modalityBridgeVideoModel`          | `""`        | Dziedziczy model Mostka Wizji                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` lub proporcjonalny `segment_aware`; awaria detektora przechodzi na `uniform`       |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                              |

Zachowane wartości czasu oczekiwania Wideo powyżej 120 sekund są ograniczane do terminu brokera; nowe ustawienia powyżej tego limitu są odrzucane. `GET /api/modality-bridge/video/runtime` wymaga zaufanej lokalizacji pętli zwrotnej przed uwierzytelnieniem lub badaniem czasu wykonywania, a następnie wymaga autoryzacji zarządzania. Zwraca tylko `available`, oczyszczone wersje FFmpeg/ffprobe oraz stały powód, gdy czas wykonywania jest niedostępny. Wewnętrzny punkt końcowy ekstrakcji nie jest publicznym API przesyłania: nasycenie kolejki zwraca `503` plus `Retry-After`, rozłączenie wywołującego zwraca `499`, a stały termin brokera zwraca `504`. Przekształcone odpowiedzi dodają `video->text;model=<visionModel>;parts=<videos>` do centralnego nagłówka `x-omniroute-modality-bridge` bez usuwania segmentów Wizji lub Dźwięku.

### Masker PII (`piiMasker.ts`)

Działa na **obu** etapach.

- **`preCall`** klonuje ładunek, przechodzi przez `system`, `messages`, `input` i `prompt` (w tym elementy zwykłego ciągu), i stosuje `processPII()` (z `@/shared/utils/inputSanitizer`) do pól `content`/`text`. Gdy `PII_REDACTION_ENABLED=true`, wykryte PII jest redagowane w wychodzącym ładunku. Jest to niezależne od `INPUT_SANITIZER_MODE` (które kontroluje tylko politykę wstrzykiwania podpowiedzi). Gdy redakcja jest wyłączona, wywołanie rejestruje liczby wykryć bez przepisania treści.
- **`postCall`** głęboko klonuje odpowiedź, uruchamia `sanitizePIIResponse()` oraz masker kształtu API Odpowiedzi (`maskResponsesOutput` — obejmuje `output_text` i `output[].content[].text`). Jeśli wystąpi jakakolwiek redakcja, zmodyfikowana odpowiedź zastępuje oryginalną.

Zabezpieczenie nigdy nie blokuje; tylko anotuje (`meta.detections`, `meta.redacted`) lub przepisuje.

### Wstrzykiwanie Podpowiedzi (`promptInjection.ts`)

Wykrywa struktury adwersarialne w dostarczonej przez użytkownika treści i egzekwuje skonfigurowaną politykę. Zachowanie jest napędzane przez zmienne środowiskowe i opcje konstruktora:

| Ustawienie   | Zmienna środowiskowa                                                                                 | Domyślna | Efekt                                                                                                                                                                                                                      |
| ------------ | ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Włączone     | `INPUT_SANITIZER_ENABLED`                                                                            | `true`   | Gdy `false`, bariera bezpieczeństwa przerywa działanie.                                                                                                                                                                    |
| Tryb         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`   | Polityka wstrzykiwania: `block`, `warn` lub `log`. (`redact` jest akceptowane dla zachowania wstecznego, ale **nie** usuwa tekstu wstrzykiwania; żądanie przepisania PII jest kontrolowane przez `PII_REDACTION_ENABLED`.) |
| Próg blokady | Opcja `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimalna powaga wymagana do zablokowania. Średnia jest domyślnie tylko do obserwacji.                                                                                                                                     |

**Priorytet trybu** (`getMode`): wywołujący `options.mode` →
`INJECTION_GUARD_MODE` **przełącznik flagi DB** (Dashboard → Ustawienia →
Flagy funkcji) → `INJECTION_GUARD_MODE` zmienna środowiskowa → `INPUT_SANITIZER_MODE` zmienna środowiskowa →
`warn`. Zatem nadpisanie w dashboardzie ma pierwszeństwo przed zmiennymi środowiskowymi, więc interfejs użytkownika Flag Funkcji kontroluje działającą barierę na żywo (bez ponownego uruchamiania). Odczyt z DB jest zabezpieczony:
jeśli wystąpi błąd, bariera przechodzi do zachowania opartego na zmiennych środowiskowych, a gdy nie jest ustawione żadne nadpisanie, zachowanie jest identyczne z rozwiązywaniem opartym tylko na zmiennych środowiskowych.

Źródła detekcji:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (wspólny detektor
   używany w innych miejscach w potoku).
2. Wbudowane `DEFAULT_GUARD_PATTERNS` (aktualnie `system_override_inline` i
   `markdown_system_block`, obie o powadze `high`).
3. Opcjonalne `customPatterns` przekazywane przez opcje konstruktora (ciągi, regex,
   lub `{ name, pattern, severity }` rekordy).

Gdy `mode === "block"` **i** przynajmniej jedna detekcja spełnia próg
powagi, `preCall` zwraca `{ block: true, message: "Żądanie odrzucone:
wykryto podejrzaną treść" }`. W trybach `warn`/`log` bariera bezpieczeństwa rejestruje, ale
pozwala na wywołanie. Wspólny pomocnik `evaluatePromptInjection()` jest również eksportowany
dla wywołujących, którzy muszą ocenić podpowiedzi bez przechodzenia przez rejestr.

**Ograniczenie skanowania (v3.8.20):** detektor bada tylko **pierwsze 16 KB**
połączonego tekstu podpowiedzi — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtów) w
`src/shared/utils/inputSanitizer.ts`. Zarówno `detectInjection()`, jak i
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` przed uruchomieniem
pętli wzorców. Dyrektywy wstrzykiwania znajdują się blisko początku wejścia, więc to
ogranicza CPU/GC regex w ładunkach o wielkości wielu setek KB bez osłabiania detekcji (por.
#3932, #4041).

### Masker poświadczeń (`credentialMasker.ts`)

Działa na **obu** etapach, ostatni w domyślnej kolejności (priorytet `95`). Usuwa
znane wzorce kluczy API / tokenów sekretów z ładunku wychodzącego (treść
wiadomości, argumenty wywołania narzędzia, wyniki narzędzia) **i** odpowiedzi dostawcy, więc
poświadczenie wklejone do podpowiedzi (lub zwrócone przez wynik narzędzia) nie jest ujawniane
dostawcy upstream ani z powrotem do klienta.

- **Tylko na zasadzie opt-in**, ta sama konwencja co redakcja PII (Twarda zasada #20-adjacent):
  wyłączone, chyba że `settings.credentialRedactionEnabled === true` **lub**
  `CREDENTIAL_REDACTION_ENABLED=true`. Gdy jest wyłączone, bariera bezpieczeństwa nie działa —
  nigdy nie blokuje i nigdy nie przepisuje.
- `redactCredentials()` przeszukuje pełne drzewo ładunku/odpowiedzi (`walkValue()`,
  bezpieczne dla zanieczyszczenia prototypu, bezpieczne cyklicznie za pomocą `WeakSet`) i zastępuje dopasowania
  miejscem `[REDACTED:<type>]`, klonując tylko gałęzie, które faktycznie
  się zmieniły.
- `CREDENTIAL_PATTERNS` obejmuje klucze dostawców LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), klucze płatności (Stripe, Square), klucze chmurowe
  (klucz dostępu AWS, Twilio, SendGrid, Mailgun), klucze prywatne / JWT,
  ciągi połączeń zawierające poświadczenia (`mongodb://user:pass@...`, itd.), oraz
  ogólny wzór nagłówka `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Klucze w kształcie nagłówka (`authorization`, `x-api-key`, `api-key`,
  `apikey`) są redagowane strukturalnie (tylko wartość, prefiks schematu jak
  `Bearer `/`Basic ` zachowany) zamiast za pomocą ogólnego regexu tekstowego.
- Bariera bezpieczeństwa nigdy nie blokuje; tylko przepisuje (`modifiedPayload` /
  `modifiedResponse`) i anotuje (`meta.credentialsRedacted`, `meta.count`).

Guard regresji: `tests/unit/credential-masker-guardrail.test.ts`.

## Podstawowy Kontrakt (`base.ts`)

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
  block?: boolean; // true przerywa łańcuch
  message?: string; // wyświetlane przy blokowaniu
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // zwracane przez preCall w celu przepisania żądania
  modifiedResponse?: TValue; // zwracane przez postCall w celu przepisania odpowiedzi
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

Guardrail sygnalizuje "brak zmian" przez zwrócenie `void`, `{}` lub
`{ block: false }`. Zwrócenie `modifiedPayload`/`modifiedResponse` zastępuje
wartość przepływającą przez łańcuch dla dalszych guardrails.
`signal?: AbortSignal` przenosi cykl życia wywołującego do guardrails. Przerwanie żądania to celowe wyjątek fail-open: mosty medialne przestają działać i sprzątają bez przywracania surowych mediów do celu, o którym wiadomo, że go nie obsługuje.

## Rejestr (`registry.ts`)

Singleton `guardrailRegistry` udostępnia:

- `register(guardrail)` — dodaje (lub zastępuje według znormalizowanej nazwy) zabezpieczenie i
  ponownie sortuje według rosnącego `priority`.
- `clear()` / `list()` — pomocnicze funkcje administracyjne.
- `runPreCallHooks(payload, context)` — iteruje aktywne zabezpieczenia, przekazuje
  `payload` przez `modifiedPayload` i zatrzymuje się przy pierwszym `block: true`.
- `runPostCallHooks(response, context)` — ten sam przepływ po stronie odpowiedzi.
- `resetGuardrailsForTests({ registerDefaults })` — czyści stan i opcjonalnie
  ponownie rejestruje wartości domyślne dla czystej izolacji testów.

Oba uruchamiacze zwracają `{ blocked, payload|response, results, guardrail?, message? }`,
gdzie `results` to tablica rekordów `GuardrailExecutionResult`, które zawierają
pola `blocked`, `skipped`, `modified`, `error` i `meta` dla każdego zabezpieczenia,
przydatne do śledzenia.

### Wyłączanie zabezpieczeń na żądanie

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agreguje
zdeduplikowaną listę nazw zabezpieczeń, które powinny zostać pominięte dla bieżącego
żądania. Źródła (wszystkie opcjonalne, wszystkie połączone):

- `apiKeyInfo.disabledGuardrails`
- Treść żądania `disabledGuardrails` (najwyższy poziom)
- Treść żądania `metadata.disabledGuardrails`
- Nagłówek `x-omniroute-disabled-guardrails` (lub starszy
  `x-disabled-guardrails`)

Wartości mogą być tablicami ciągów znaków lub ciągiem znaków oddzielonych przecinkami; nazwy są
normalizowane do małych liter w formacie kebab-case (`pii_masker` → `pii-masker`). Wynik
jest przekazywany przez `context.disabledGuardrails` do rejestru, który pomija
pasujące zabezpieczenia (`skipped: true` w `results`).

## Kolejność wykonania

Dla każdego żądania przechodzącego przez `src/sse/handlers/chat.ts` oraz
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` buduje listę pomijanych elementów z klucza API, treści (body)
   oraz nagłówków.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` uruchamia mechanizmy zabezpieczające (guardrails) w rosnącym
   porządku priorytetów:
   - Wyłączone zabezpieczenia są rejestrowane jako `skipped`.
   - Metoda `preCall` każdego zabezpieczenia może przepisać ładunek (payload) za pomocą `modifiedPayload`.
   - Pierwsze wystąpienie `block: true` przerywa łańcuch, a obsługa zwraca
     odpowiedź odrzucenia przez mechanizm zabezpieczający.
3. Potencjalnie przepisywany ładunek trafia do routingu hybrydowego (combo routing) oraz
   wysyłki nadrzędnej (upstream dispatch).
4. Po skompletowaniu odpowiedzi, `guardrailRegistry.runPostCallHooks(...)`
   uruchamia ten sam łańcuch dla odpowiedzi. Wystąpienie `block: true` w tym miejscu odrzuca
   odpowiedź nadrzędną.

Zabezpieczenia, które zgłaszają błędy, są rejestrowane z wpisem `error: <message>` i logowane przez
`logger.warn`, ale łańcuch jest kontynuowany — zgodnie z założeniem o otwartości na awarię (fail-open).

## Konfiguracja

Zmienne środowiskowe odczytywane przez wbudowane mechanizmy zabezpieczające:

| Zmienna                               | Używana przez             | Efekt                                                                                                                |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Ustawienie `false` wyłącza wykrywanie całkowicie.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Polityka wstrzykiwania: `warn`, `block` lub `log`. Starsza wartość `redact` nie modyfikuje tekstu wstrzyknięcia.     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Tryb dla osłony wstrzyknięć; również flaga funkcji bazy danych, która **nadpisuje** zmienne środowiskowe (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimalny poziom ważności odrzucany przez `MODE=block`: `high` (domyślnie), `medium` lub `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Starszy alias dla `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Gdy `true`, dane PII w żądaniu są maskowane (niezależnie od trybu wstrzykiwania).                                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Steruje zachowaniem maskera po stronie odpowiedzi.                                                                   |

Zabezpieczenia Modality Bridge odczytują konfigurację wykonawczą z magazynu ustawień
opartego na bazie danych (`getSettings()`), a nie ze zmiennych środowiskowych. Kluczami głównymi dla wizji są
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` oraz
`modalityBridgeCacheMaxEntries`. Starsze klucze
`visionBridge*` są akceptowane tylko jako udokumentowane rozwiązanie zapasowe (fallback) odczytu na jeden cykl;
zapisy z panelu sterowania (dashboard) używają kluczy głównych. Wartości domyślne oraz moduł rozstrzygający mechanizm zapasowy znajdują się w
`src/shared/constants/modalityBridgeDefaults.ts`, a starsze stałe są zachowane w
`src/shared/constants/visionBridgeDefaults.ts`.

Audio używa ustawień `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, a także współdzielonych
ustawień `modalityBridgeCache*`. Audio nie posiada mechanizmu zapasowego dla starszych kluczy, ponieważ te
klucze zostały wprowadzone wraz ze schematem Modality Bridge.

Wideo używa ustawień `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` oraz
`modalityBridgeVideoTimeout`, a także współdzielonych ustawień `modalityBridgeCache*`.
Jest domyślnie wyłączone, ponieważ pakiety FFmpeg/ffprobe są opcjonalnymi zależnościami operacyjnymi,
a tworzenie podpisów klatek (frame captioning) zwiększa opóźnienie oraz koszt modelu.

## Niestandardowe Guardraile

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

Kroki:

1.  Utwórz `src/lib/guardrails/myGuardrail.ts` rozszerzający `BaseGuardrail`.
2.  Zaimplementuj `preCall` i/lub `postCall`.
3.  Zarejestruj podczas importu (push z `registerDefaultGuardrails`) lub
    wywołaj `guardrailRegistry.register(...)` w czasie wykonania — rejestr zastępuje
    każdy poprzedni guardrail o tej samej znormalizowanej nazwie.
4.  Dodaj testy w `tests/unit/` (istniejące przykłady:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testowanie

Użyj `resetGuardrailsForTests()` między testami, aby rozpocząć od znanego stanu.
Przekaż `{ registerDefaults: false }`, aby rozpocząć z pustym rejestrem i
zarejestrować tylko testowane guardraile. Vision Bridge akceptuje wstrzykiwanie zależności
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge udostępnia
równoważne punkty dla ustawień, możliwości, wyboru modelu STT, sprawdzania poświadczeń
i transkrypcji. Testy mogą zatem ćwiczyć oba przepływy bez dostępu do bazy danych
lub sieci.

## Zobacz także

- `src/lib/guardrails/` — implementacja
- `src/shared/utils/inputSanitizer.ts` — współdzielony detektor, który zasila
  ochronę przed wstrzykiwaniem promptów i maskowanie PII
- `src/shared/constants/visionBridgeDefaults.ts` — domyślne ustawienia Vision Bridge i
  lista modeli wymuszonego mostkowania
- `src/shared/constants/modalityBridgeDefaults.ts` — współdzielone domyślne ustawienia środowiska wykonawczego Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — warstwa ortogonalna (wyłącznik obwodu, czasy odnowienia)
- `docs/reference/ENVIRONMENT.md` — pełne odniesienie do zmiennych środowiskowych

## Pokrycie tras przez injection-guard i red-team (Faza 8 · Blok D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) obejmuje wszystkie trasy,
które akceptują prompty użytkownika. Szanuje `INJECTION_GUARD_MODE` (domyślnie `warn` = tylko logowanie;
`block` = zwraca HTTP 400 `SECURITY_001`).

| Typ                | Trasy                                                                                                                                                | Tryb domyślny |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (istniejący) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generatywny        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Dane               | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Ekstrakcja tekstu (`extractMessageContents`) obejmuje `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nocne, `nightly-llm-security.yml`):** promptfoo waliduje, że każda trasa blokuje
korpus OWASP-LLM w `INJECTION_GUARD_MODE=block`; garak uruchamia sondy (pomija bez sekretu).
`moderations` jest uwzględnione dla spójności — operatorzy w trybie blokowania mogą je wyłączyć za pomocą
`resolveDisabledGuardrails`.

Nocny workflow (`.github/workflows/nightly-llm-security.yml`, cron + ręczne
uruchamianie) ma dwa zadania:

- **`promptfoo-guard` (blokujące)** — uruchamia `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Każdy przypadek adversarialny (np. "ignoruj wszystkie
  poprzednie instrukcje...", jailbreaki w stylu DAN) potwierdza, że odpowiedź zawiera
  `error.code === "SECURITY_001"`, tzn. że guard faktycznie odrzucił żądanie.
- **`garak` (doradcze)** — uruchamia garak `--probes promptinject,dan,leakreplay`
  przeciwko lokalnej instancji OmniRoute (`http://localhost:20128/v1`). Zależne od
  sekretu dostawcy (`PROMPTFOO_PROVIDER_KEY`); pomija się elegancko i jest sufiksowane
  `|| true`, więc raportuje bez powodowania błędu CI.

Pokrycie pomocnika guard (`createInjectionGuard` / `withInjectionGuard`)
obejmuje każdą trasę `/v1` zawierającą prompt; tekst promptu jest pobierany z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` przez
`extractMessageContents()` w `src/shared/utils/inputSanitizer.ts`.
