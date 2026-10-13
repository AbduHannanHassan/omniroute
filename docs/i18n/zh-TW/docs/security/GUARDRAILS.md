# Guardrails (中文 (繁體))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md)

---

> **事實來源：** `src/lib/guardrails/`
> **上次更新：** 2026-08-29 — v3.8.51（Video Bridge 逐字稿來源由呼叫端宣告，
> 尚未由伺服器驗證 — 已依 #11661 釐清）

護欄會在 OmniRoute 與上游提供者之間的邊界強制執行安全、政策及內容轉換。每個護欄都可以檢查請求承載資料（`preCall`）和上游回應（`postCall`），並可選擇拒絕、轉換或註解這些內容。

系統採用**失敗時開放**機制：如果護欄在執行期間擲出例外，登錄檔會記錄錯誤並繼續執行下一個護欄，而不會讓請求失敗。封鎖一律是明確的決定（`block: true`），絕不會因意外而發生。

## 內建的防護措施

註冊表在導入時按優先順序自動加載六個防護措施
(參見 `registry.ts` → `registerDefaultGuardrails()`):

| 優先級 | 名稱                | 階段(s)        | 檔案                  |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

較低的優先級數字會**優先執行**。

### 視覺橋 (`visionBridge.ts`) — 模態橋 PR-1

攔截針對**非視覺模型**的圖像請求，並將整個請求重新路由到一個具備視覺能力的模型，或在上游呼叫之前用可配置的視覺模型生成的文本描述替換圖像部分。這使得僅提供文本的提供者能夠透明地處理多模態有效載荷。

流程：

1. 如果目標模型已經支持視覺，則跳過（除非它出現在強制橋接列表 `isVisionBridgeForcedModel` 中）。
2. 通過 `extractImageParts(messages)` 提取圖像部分
   (`visionBridgeHelpers.ts`)，該函數委派給**統一媒體檢測器** `detectMediaParts()` 在 `open-sse/utils/mediaParts.ts` 中 — 與組合兼容性過濾器共享的唯一真相來源。
   提取僅允許頂層部分，這些部分是 `replaceImageParts` 可以重新拼接的（提取↔替換合約）：OpenAI `image_url`、Anthropic base64 `source.type:"base64"`、Anthropic URL `source.type:"url"`，以及 Responses API `input_image`。嵌套命中和僅指示形狀是組合過濾材料，永遠不會被提取。如果未找到則跳過。
3. 通過 `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) 解決運行時配置：新的 `modalityBridge*`
   設置鍵優先；舊的 `visionBridge*` 鍵仍然是一個**單循環回退**（回滾窗口）。當橋接被禁用時，在任何媒體遍歷之前跳過。
4. 模式選擇器 (`modalityBridgeVisionMode`，見下表) 決定重新路由與描述。重新路由返回 `modifiedPayload`，僅交換 `model`，加上元數據 `{ rerouted, fromModel, toModel, imagesKept }`。
5. 描述路徑：將圖像限制在 `maxImages`，組合任務感知提示，查詢描述快取，並**並行**呼叫視覺模型
   (`Promise.allSettled`)，並在其位置注入 `[Image N]: <description>` 文本部分。描述失敗會產生 `null`，原始圖像部分會**保留**（#4012） — 除非在每個描述都失敗的組合描述路徑上，確認的非視覺上游會得到一個 `(unavailable — no vision-capable provider connected)` 存根（#8430）。
6. 返回 `modifiedPayload` + 元數據 (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`)。

#### 模式選擇器 (`modalityBridgeVisionMode`)

| 模式       | 預設 | 行為                                                                                                                                                                |
| ---------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔    | 遺留啟發式，未更改 (#6640/#7204)：非組合/`auto/` 模型重新路由到最佳視覺模型，除非原始模型已經有可用的憑證（然後描述）；組合目標始終描述。                           |
| `describe` |      | 始終描述 — 重新路由塊完全跳過；用戶選擇的模型始終回答。                                                                                                             |
| `reroute`  |      | 強制重新路由：跳過保持憑證模型的保護。重新路由-**目標** 憑證保護仍然適用 — 當不存在可用的視覺目標時，請求會流向描述，因此原始圖像永遠不會到達僅文本的後端 (#8430)。 |

強制模式在**自動**啟發式運行之前短路；`auto` 行為與 pre-PR-1 防護措施的字節完全相同。

#### 任務感知描述提示 (`modalityBridgeVisionTaskAware`)

預設**為真**。`composeVisionPrompt()` (`visionBridgeHelpers.ts`) 將**最後用戶消息**的文本（截斷為 500 個字符）附加到基礎描述提示，將描述引導到用戶實際要求的內容（codex-vision-proxy 模式），並要求視覺模型轉錄可見文本。當標誌關閉時 — 或沒有用戶文本 — 將使用未更改的基礎提示。

描述自迴圈的 OpenAI 兼容請求 (`callVisionModelSingle()` 在 `visionBridgeHelpers.ts` 中) 總是請求 `image_url.detail: "high"` — 無條件地，對於每個呼叫者/提供者，並不依賴於任何客戶端信號。低細節取樣會降低 OCR 準確性，正是這個提示所要求的文本轉錄任務，因此描述呼叫本身總是要求高細節，無論原始進入請求使用了什麼細節級別。這僅影響內部描述請求主體；它不改變 OmniRoute 在主要請求中轉發呼叫者自己的 `image_url.detail` 的方式 — 該預設值是單獨應用的，並且僅對檢測到的 OpenCode 客戶端，在 `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) 中。描述自迴圈的 Anthropic wire-format 分支沒有 `detail` 字段，並且不受任何預設值的影響。

#### 描述輸出上限 (`modalityBridgeVisionMaxChars`)

| 鍵                             | 預設 | 範圍             |
| ------------------------------ | ---- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`  | `0` 或 100–50000 |

`0`（預設）表示 **無上限** — `callVisionModel()` 返回的描述未經修改，保留現有行為。任何在 100–50000 範圍內的值會在描述被拼接回 `[Image N]: <description>` 之前用 `…` 後綴截斷它 (`VisionBridgeGuardrail.preCall()` 在 `src/lib/guardrails/visionBridge.ts` 中)。對於需要完整轉錄的細節密集型 OCR 任務，應提高此值；對於健談的視覺模型，則應降低此值以限制標記使用。儀表板字段位於視覺選項卡的高級面板中 (`modality-bridge-max-chars` 在 `ModalityBridgeVisionTab.tsx` 中)，並將任何值在 1 到 99 之間夾緊到 100 的下限，同時保持顯式的 `0` 不變 — `0` 本身是一個有效的 Zod 值 (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`)，而不僅僅是 "未設置" 的預設值。

#### 描述快取 (`modalityBridge/bridgeCache.ts`)

記憶體 LRU + TTL 快取，用於描述輸出，進程範圍共享。鍵 = `sha256(imageRef + composedPrompt + configuredBridgeModel)`，具有長度前綴框架（無字段邊界衝突）。模型組件是 **配置的** 桥接模型，而不是實際回答的模型 — `callVisionModel` 可能會在內部回退，按嘗試鍵入會使快取碎片化。失敗的描述永遠不會被快取。設置：

| 鍵                              | 預設   | 範圍    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### 遠程圖像標準化（自迴圈描述/base64 獲取）

當橋接本身獲取 **遠程** 圖像時 — Anthropic 描述自呼叫和 claude-wire-format base64 轉換 (`ensureBase64ImagesForClaudeWire`)，均通過 `fetchRemoteImageAsDataUri()` 在 `visionBridgeHelpers.ts` 中 — 所得的數據 URI 會通過 `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) 進行標準化，然後嵌入到視覺模型請求中。超大圖像會縮小到 **2048px 長邊**（與 OpenAI/Anthropic 已經在服務器端應用的調整上限相匹配），這樣可以減少上傳字節/延遲，而不改變視覺模型所見的內容。調整使用 `sharp`，通過動態導入加載：在其本地二進制文件無法加載的平台上，`normalizeDataUri()` **永遠不會拋出異常** — 它會回退到原始字節的通過，因此描述/base64 轉換路徑始終保持運行。非圖像字節（未返回可解碼圖像的獲取）也會原封不動地通過。這種標準化僅限於橋接為其自身自呼叫獲取的圖像 — 不會應用於呼叫者的原始通過有效負載，這與僅選擇性變更原則（硬性規則 #20）一致。

#### 設置架構 + 遷移

新的 `modalityBridge*` 鍵在 `updateSettingsSchema` 中經過 Zod 驗證 (`src/shared/validation/settingsSchemas.ts`)：`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、`modalityBridgeCache*` 三元組，以及 Audio Bridge 使用的 `modalityBridgeAudio*` 群組。遷移 `141_modality_bridge_settings.sql` 將現有的舊版 `visionBridge*` 值複製到匹配的新鍵（冪等，不會覆蓋操作員設置的 `modalityBridge*` 值）；舊鍵在一個版本周期內仍然被接受作為讀取回退。

#### 透明度標頭 + 統計

描述轉換的回應攜帶 `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`（由 `buildModalityBridgeHeader()` 在 `modalityBridge/bridgeStats.ts` 中構建，通過 `withModalityBridgeHeader()` 在 `src/sse/handlers/chatHelpers.ts` 中印章）。重新路由的請求 **不** 會有標頭 — 有效負載未被觸及，模型交換已在回應主體的 `model` 字段中可見。

`GET /api/modality-bridge/stats`（管理授權，與 `GET /api/settings` 同級）返回記憶體中每個模態計數器 `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }`，針對 `vision`、`audio` 和 `video`。`averageLatencyMs` 使用 `latencySamples`，而不是所有嘗試，作為其分母；沒有計時的操作不會虛構零毫秒樣本。`bridged` 仍然是成功轉換的向後兼容別名；失敗的嘗試不會增加它。計數器在進程重啟時會重置，這是設計使然（遙測，而非會計）。

#### 儀表板配置

專用的儀表板頁面是
`/dashboard/settings/modality-bridge`。其可通過 URL 訪問的 `Vision`、`Audio` 和 `Video` 標籤在切換 `tab` 值時保留查詢參數。Vision 標籤顯示啟用、模式、模型選擇（包括自動預設）、任務感知提示、高級超時/圖像/描述長度/快取限制、運行時計數器和受保護的樣本請求。Audio 標籤也處於活動狀態：它顯示啟用、僅 STT 模型選擇器，具有自動、超時/最大片段限制、音頻計數器和 `input_audio` 樣本測試。Video 標籤是功能性的：它報告 FFmpeg/ffprobe 的運行時狀態——四種明確的 UI 狀態之一（在探測過程中為 `unknown` 或無法完成時，非循環儀表板主機上探測被客戶端跳過時為 `restricted`，探測後確認缺失時為 `unavailable`，或與 FFmpeg/ffprobe 版本一起為 `available`）——持久化啟用/模型/幀/視頻/超時限制，將模型選擇器過濾為支持視覺的模型，並顯示視頻計數器。

以前的 Vision Bridge 卡片在 AI 設置下是一個兼容連結到新頁面；它不再擁有表單的第二個副本。媒體提供者還將圖像到文本和語音到文本工作流程連結到相應的 Modality Bridge 標籤，而不移除現有的語音到文本遊樂場。

**自循環入場繞過：** 當描述呼叫通過 OmniRoute 的 `/v1` 自循環（非標準提供者模型）路由時，子請求發送 `x-omniroute-admission-bypass: internal` 並使用解析的自循環憑證進行身份驗證——本地模式下的本地 `sk_omniroute` 哨兵，或運營商配置的 `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 環境變量 (#1350)，因此 `REQUIRE_API_KEY=true` 的部署仍然可以運行描述呼叫。僅對這些確切憑證尊重繞過，因此外部客戶端無法使用標頭跳過入場。

舊的預設值位於 `src/shared/constants/visionBridgeDefaults.ts`；新的模式/任務感知/快取預設值和設置解析器位於 `src/shared/constants/modalityBridgeDefaults.ts`。護欄顯示 `deps` 構造函數選項，以便測試可以注入假 `getSettings` 和 `callVisionModel` 實現。

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

在音頻承載的聊天請求到達不知接受音頻輸入的目標之前進行攔截。它從不重新路由聊天請求：音頻部分通過現有的 OpenAI 兼容多部分端點進行轉錄，所選聊天模型繼續使用文本轉錄。

流程：

1. 通過 `getResolvedModelCapabilities()` 解決 `supportsAudio`。顯式的提供者註冊元數據優先，其次是靜態模型元數據，然後是同步的 `modalities_input`。聲明的輸入列表如果沒有 `audio` 則為 `false`；沒有能力證據則保持 `null`。`false` 和 `null` 都會啟動保守的橋接，而 `true` 則繞過它。
2. 解決 `modalityBridgeAudio*` 設置，並通過共享的 `detectMediaParts()` 檢測器從每條消息中提取可拼接的頂級音頻部分。支持的線形狀為 OpenAI 的 `input_audio`、`audio_url` 和 `source.media_type: "audio/*"`。嵌套音頻被檢測以進行路由，但不會被拼接路徑移除。工作由 `modalityBridgeAudioMaxClips` 限制；後面的部分保持不變。
3. 尊重配置的 `provider/model`，或者讓 `selectAudioBridgeModel()` 按穩定目錄順序遍歷 `AUDIO_TRANSCRIPTION_PROVIDERS` 並選擇第一個具有可用活動提供者憑證的模型。
4. `callAudioTranscription()` 將 base64/data-URI 音頻轉換為多部分 `file`，或通過公共僅出站護欄下載遠程 `audio_url`，並進行 DNS 鎖定，限制為 25 MB。然後將文件和所選模型 POST 到本地的 `/v1/audio/transcriptions` 自循環，並使用 `resolveSelfLoopBearer()` 進行身份驗證。現有的轉錄路由執行正常的憑證查找、冷卻/速率限制處理和提供者調度。
5. 成功的呼叫用 `[Audio N]: <transcript>` 替換其部分。呼叫使用 `Promise.allSettled` 運行：單個失敗保留原始音頻部分 (#4012 合約)。如果每個呼叫都失敗且目標被證明為 `supportsAudio === false`，則部分變為 `[Audio N]: (unavailable — no STT provider connected)` (#8430 合約)。對於未知目標（`null`），所有失敗結果保持不變。對於證明為僅文本的目標且沒有可用的 STT 憑證，則在不發出網絡呼叫的情況下接收相同的明確存根。

成功的轉錄使用全域的 Modality Bridge LRU/TTL 快取。鍵結合音頻引用、穩定的 `audio-transcription` 操作標籤和所選的 STT 模型；失敗永遠不會被快取。音頻嘗試更新共享的 `bridged`、`cacheHits`、`failures` 和 `lastUsedAt` 計數器。轉換的回應攜帶 `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`；未觸及的請求不會收到音頻橋段。

運行時設置由數據庫支持並經 Zod 驗證：

| 鍵                            | 預設值  | 範圍          |
| ----------------------------- | ------- | ------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —             |
| `modalityBridgeAudioModel`    | `""`    | 自動或 STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000   |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10          |

共享快取仍然由 `modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes` 和 `modalityBridgeCacheMaxEntries` 控制。

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

在 Chat Completions 的 `messages` 和 Responses API `input` 中攔截頂層視頻部分，當目標沒有已知的原生視頻支持時被呼叫。支持的形狀包括 `input_video`、`video_url`、`video_source`、HTTPS URLs，以及 `data:video/*;base64,...` 數據 URI。純文件名在文本中不被視為視頻。

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) 負責請求遍歷、能力/政策檢查、每個請求的聚合以及回應有效負載。每個視頻的工作——獲取、整體結果快取、描述幀序列（融合任何呼叫者聲明的音頻轉錄）以及每次嘗試的度量/中止/清理——隱藏在 `videoBridgePipeline.ts` 中的 `processVideoPart` 後面，在 `preCall` 的循環中每個視頻部分呼叫一次。該模組還定義了明確的端口邊界 `VideoMediaBrokerPort`（獲取字節和提取取樣幀）、`VideoAudioTranscriptionPort`（將呼叫者聲明的音頻轉錄與取樣的字幕融合）和 `VideoDrilldownPort`（舊版原始存儲形狀）。生產 STT 和幀保留圍繞描述端口通過 `createVideoSttAdapter` 和 `createVideoDrilldownAdapter` 組成；後者使用共享的透明句柄生命週期。

公共的 `/v1` 請求路徑從不導入或呼叫子進程。遠程視頻在 50 MiB 的限制下下載；內聯 base64 視頻有保守的 36 MiB 解碼每視頻上限，以便模型/消息/框架信封可以保持在公共 JSON 請求接納限制的 50 MiB 內。內聯長度和解碼大小估算在分配之前進行檢查。初始遠程 URL 和每次重定向都需要 HTTPS，使用現有的公共僅出站保護和 DNS 鎖定。然後字節穿越精確的內部 `POST /api/modality-bridge/video/extract` 中介邊界。該路由同時是 `LOCAL_ONLY` 和 `SPAWN_CAPABLE`，僅接受每個進程的身份驗證、受信回環請求，並且從不接受 URL、文件系統路徑、可執行文件或參數列表。API 主體大小管道和處理程序的增量主體讀取器獨立執行 50 MiB 中介輸入上限。其有界隊列一次運行一個提取，允許四個待處理作業，並將待處理輸入限制在 100 MiB。

在中介內，`ffprobe` 讀取私有本地文件；固定格式白名單排除了播放列表和清單格式。對於允許的 MOV 家族容器，外部 MOV 數據引用預設情況下保持禁用，固定命令不選擇它們。`ffprobe` 和 `ffmpeg` 都使用 `file`-僅協議白名單、一個線程、固定參數數組、不使用 shell，並從 `PATH` 中解析可執行文件。附加圖片封面流不是可播放候選者。所有可播放流必須滿足限制，並且在確定的最低索引回退之前，優先選擇顯式預設流。視頻限制為 600 秒、每個維度 8,192 像素和 33,554,432 源像素。FFmpeg 取樣 1–16 個中點 JPEG 幀，將長邊縮放至最多 1,024 像素而不放大較小的輸入，並且從不接收 URL。取樣預設為 `uniform`。可選的 `scene_aware` 和實驗性的 `segment_aware` 策略對已驗證的本地流執行一次額外的固定 FFmpeg 通過，選擇有界的 `showinfo` 場景時間戳，並在檢測器失敗、超時、格式錯誤的輸出或空候選集時確定性地回退到相同的均勻中點。段落感知模式按比例分配中點樣本到驗證的場景間隔；段落感知證據和回退行為詳述如下。硬性 16 幀上限在每個策略的選擇後應用。當場景感知請求只有一幀預算時，它使用活動全視頻或焦點窗口的均勻中點並報告 `policyEffective: uniform`：單個選定的場景幀無法保留兩個時間端。呼叫者可以選擇性地提供有限的焦點窗口（`start`/`end` 秒）；邊界被限制在媒體持續時間內，反向或非有限窗口被拒絕，所有取樣策略僅在標準化區間內執行。結果窗口包含在取樣元數據中以及在不受信的描述前綴中，以便下游模型可以區分焦點摘錄和完整時間線。

語義字幕焦點是一個單獨的、明確的設置。預設的 `full` 分析模式保留現有的幀提示，並且從不將請求文本轉發到字幕模型。在 `focused` 模式下，橋接僅從同一 Chat 或 Responses 容器中讀取最新的非空用戶創建的 `text`/`input_text`，將其標準化為 NFC，折疊控制字符和空白，並限制為 500 個 Unicode 代碼點。空結果回退到確切的 `full` 提示。可用提示被序列化為 JSON，放在專用的不受信用戶上下文塊中，並且只能優先考慮可觀察的細節；它不能覆蓋對於在媒體中可見或可聽的指示的單獨警告。文本焦點從不推斷 `start`/`end` 或改變時間取樣器。

#### FU-07 結構段證據

`segment_aware` 對已驗證的本地視頻流進行一次有界的預分析通過。固定的過濾器鏈首先將寬度縮放至最多 320 像素，檢測場景變化和靜止間隔，然後以每秒 1 幀的速度取樣模糊、平均亮度和空間/時間信息。該通過限制為 600 個結構樣本、一個 FFmpeg/過濾器線程、相同的 `file`-僅協議和容器白名單、1 MiB 的進程輸出上限，以及在中介的共享中止/截止時間內最多 30 秒。它從不接受請求中的命令、過濾器、路徑或 URL。

結構值是確定性取樣證據，而不是語義視頻理解。它們不推斷主題、行動、標題、語音或用戶意圖。場景和靜止邊界形成片段；靜止覆蓋、模糊、曝光、空間細節和時間變化僅影響現有的 1–16 幀預算如何分配。完全靜止的片段上限為一幀，而非靜止片段則競爭剩餘預算。當邊界數量超過幀數時，保持均勻的時間線覆蓋，因此快速的早期剪輯無法隱藏長尾片段。在靜止邊界的 1 秒分析解析度內的場景邊界會合併。

缺少過濾器、格式錯誤/空的證據、檢測器錯誤或受限的預分析超時會失敗並開放到確切的均勻中點政策。呼叫者中止或代理截止時間不會失敗並開放：它終止正在進行的子過程，防止後續幀提取，並在 `finally` 中刪除私有臨時樹。

`scripts/perf/video-bridge-fu07-eval.ts` 生成確定性的真實 FFmpeg 固件，用於後去重的標題呼叫節省、密集運動預算分配、模糊/曝光/SI-TI 證據、帶有長尾的快速剪輯和逐漸淡出的假陽性。它記錄預分析的牆時間，並且在 `/usr/bin/time` 可用的情況下，記錄子 CPU 和峰值 RSS。它的質量檢查僅是結構性神諭。真實的標題模型質量保持為 `HOLD`，因為這個工具沒有授權的端點或靜止的評審。除非 `--caption-cost-per-call-usd` 提供明確的每次呼叫的正估算，否則貨幣節省也保持為 `HOLD`；該腳本從不捏造任何結果。

每幀限制為 4 MiB，所有原始幀總共限制為 23 MiB，序列化的代理回應限制為 32 MiB。私有臨時目錄在 `finally` 中刪除。OmniRoute 不捆綁 FFmpeg，也不接受自定義可執行路徑。在標題處理之前，橋接器應用保守的視覺去重過程：每個 JPEG 被減少為 16×16 灰度緩衝區，並僅與保留的最後一幀進行比較。對於請求的標題預算超過一幀，提取提供最多兩倍於該預算的受限候選池，且從不超過 16 幀。請求的上限僅在去重後應用，第一個和最後選定的候選在預算至少為兩個時保留於最終稀疏過程中。版本化的 `grayscale-16x16-mean-cells-v2` 政策使用均值亮度增量和縮略圖單元的比率中較大的那一個，該縮略圖單元的標準化增量至少為 0.05。重複閾值是常數 0.04，選擇這個值是為了可預測性，而不是作為運行時設置公開。這個次要的高對比度信號保留了小運動和可見文本變化，而僅使用均值比較可能會隱藏這些變化。比較器或解碼器錯誤會失敗並保持覆蓋。輸出元數據分開提取的候選、成功使用的幀和丟棄的視覺重複項。

明確標記的視頻部分可以請求帶有時間戳的聯絡表。橋接器最多構建 4 列、16 幀的 JPEG 網格。每個 512 像素的單元將其源時間戳燒錄到高對比度的底部帶中，而相同的時間戳則保留在文本元數據中以便於下游關聯和審計。完整的 JPEG 保持在 32 MiB 的上限。如果 `sharp` 無法解碼或組合網格，橋接器會回退到單獨的 JPEG 幀；客戶端中止仍然會在表操作中傳播。

促銷證據故意與合成組合微基準分開。`scripts/perf/video-bridge-contact-sheet-eval.ts` 定義了一個具有架構版本的 A/B 測試工具，用於真實的 OpenAI 兼容視覺模型。它測量提供者報告的令牌、端到端的牆延遲（包括表組合）、模型呼叫計數和清單定義的事實保留。原始模型回應不會寫入報告；僅保留 SHA-256 摘要和匹配的事實 ID。該工具不會進行任何網絡或付費模型呼叫，除非傳遞 `--execute-real` 並配置 `--model`、`OMNIROUTE_BASE_URL` 和 `OMNIROUTE_API_KEY`。如果沒有這個明確的真實運行，其機器可讀的裁決保持為 `HOLD`；僅合成有效載荷/呼叫計數測量不構成促銷證據。

單獨的 `scripts/perf/video-bridge-promotion-eval.ts` 消耗 FU-07 或 FU-09 觀察。促銷入場要求所有八種合成場景類型加上一個經過清理的真實片段，每個角色和案例至少三次測量重複，所有十個聲明的指標、靜止的媒體/提示/預期事實/設置摘要、唯一的觀察 ID 和經過驗證的種子 A/B 順序。執行收據綁定了語料庫摘要、確切的候選 SHA 和模型修訂。缺失或無效的測量保持為 `HOLD`，包括 CPU 超過 30 秒、峰值 RSS 超過 512 MiB 或預分析超過 30 秒。這些是證據入場的上限，而不是新的運行時 RSS 強制保證。

FU-07 要求至少 98% 的質量保留和 p95 延遲不超過基線的 1.2 倍，此外還要求在等效的平均標題呼叫中，絕對案例平衡的平均召回率提高 0.05，或平均去重標題呼叫減少至少 10%。FU-09 要求至少 0.85 的質量、95% 的保留、20% 的 p95 延遲減少和 10% 的令牌減少。關鍵事實損失、注入合規或缺失的使用會阻止促銷。一個執行無法促銷任何內容：`--previous-report` 確認兩次不同的、不重疊的、連續符合條件的執行，使用相同的政策/模型修訂/候選/語料庫。取樣實驗無法確認聯絡表實驗。

收集器應該在記憶體中評分回應並保存 `responseDigest` 以及指標和觀察綁定，而不是回應文本。消費者也會讀取舊版原始觀察，但從不將該文本複製到其報告中。每個觀察僅接受 `responseDigest` 或 `rawResponseText` 之一。版本化的允許清單保持空白，預設為不可變的 `hold`。合格的條目需要其證據參考、政策、模型修訂、確切的候選 SHA、清單摘要和兩個不同的運行 ID；衝突的上下文會被拒絕。這些元數據是一種審計合約，而不是證明引用的文件包含真實測量的證據。在添加任何條目之前，請檢查實際的收據。管理統計端點和視頻儀表板顯示保守的準備情況。僅配置的模型別名並不建立其修訂或運行的候選 SHA，因此當前的儀表板報告 `HOLD` 而不是重用來自另一執行上下文的合格性。明確的實驗選擇與推廣保持分開；不會自動更改任何預設值。

呼叫者可以在已對齊文本的支持視頻部分附加可選的 `transcript.cues` 陣列。每個提示必須攜帶 `text`、在探測持續時間內的有限 `start`/`end` 區間，以及白名單中的 `source`（`client`、`embedded` 或 `audio-bridge`）；`confidence` 預設為 `1`，必須保持在 `0` 和 `1` 之間。完全重複的提示會被合併。OmniRoute 不會從這些元數據開始轉錄：經過驗證的提示會被複製到描述的結果中，並帶有來源、置信度和區間，並作為不受信的觀察與幀標題一起呈現。無效、超範圍或無來源的文本會被拒絕，而不是混入標題流中。兩個請求主體的轉錄通道將提供的來源標準化為 `client`，包括自我聲明的 `embedded` 或 `audio-bridge` 標籤。只有伺服器擁有的適配器可以通過僅限代碼的 `trustedSource` 參數分配這些受信標籤；請求 JSON 字段無法到達該參數。轉錄文本仍然是不受信的媒體衍生內容，無論其來源如何，並且絕不能決定授權。

高級呼叫者可以為同一視頻提供 `audioTranscript` 軌道；它被視為客戶端提供的文本，而不是伺服器轉錄的證據。融合接縫在一個截止日期和中止信號下運行視覺和音頻觀察，將它們按共同時間線排序，合併完全重複的項目，並在只有一側成功時報告部分結果。無效的 `audioTranscript` 降級為該部分結果——視覺描述被保留，音頻分支記錄一個清理過的失敗代碼——而不是使整個視頻失敗。每個分支的可用性、部分標誌和清理過的失敗代碼保留在描述的結果中，在護欄元數據（`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`）、結果快取元數據和橋接融合計數器中。預設的視頻橋路徑不會呼叫語音轉文本或下載第二個媒體副本；如果沒有該明確的軌道，它仍然保持視頻專用。

**轉錄保留 (#12150 P1)。** 每當視頻橋（本身是選擇性）呈現轉錄提示時，這會自動適用——沒有單獨的保留標誌。當請求呈現任何轉錄提示（呼叫者聲明的 `transcript` 或融合的 `audioTranscript`）時，護欄會將其標記為 `videoBridgeObserved`，並生成視頻描述的編輯影像——一個相同的渲染，其中每個提示的自由文本主體被替換為 `[redacted-video-transcript]`，這是通過在組裝字串之前替換結構化提示字段來構建的（絕不通過解析扁平文本，因此沒有提示內容——對抗性或普通，包括包含 `]` 的主體，如 `[inaudible]`/`[music]`——可以存活）。持久化的呼叫日誌請求主體將每個視頻衍生的文本部分替換為該編輯影像，通過內容相等進行匹配；`fullText` 錨點從完成的預呼叫護欄有效負載中重新讀取，因此在後續鏈護欄（PII 和憑證遮罩，優先級 10/95）就地重寫描述文本後，匹配仍然成功。發送到模型的主體保持不變。觀察到的請求也不會填充任何持久的記憶（請求和回應衍生的提取都被跳過），因此模型自己的回覆無法將轉錄文本回響到記憶中。

**原始視頻字段 (#12430)。** 當橋接啟用且本地視頻支持未知或缺失時，定義的 `transcript`/`audioTranscript` 字段也會激活 `videoBridgeObserved`，即使在描述失敗或達到 `maxVideos` 限制後。`null` 和空字串計算；缺失的字段和非視頻元數據不計算。保留的副本會編輯這些字段或省略請求，並且快取/記憶被繞過。提供者有效負載保持不變。

其他保留的副本使用相同的觀察請求信號。原始的預護欄客戶端請求快照、記憶體中的待處理請求和早期拒絕請求日誌在結構上替換視頻部分中的轉錄字段；由管道階段和上下文交接合成的字串提示在持久請求主體接收端被編輯。持久化的 `video_content_removed` 標記使 `previous_response_id` 的延續失敗關閉，而不是重建故意丟棄的文本。如果觀察到的請求在日誌之前失去其每部分的編輯影像，或者即使幾個視頻影像中的一個在後續請求變更後未能匹配，則保留的請求主體將完全省略，而不是保留部分編輯的轉錄。

對於觀察到的請求，模型回應可能會引用逐字稿的任何部分，而不需要結構化的提示邊界。因此，其持久化的呼叫日誌 `responseBody` 被一個省略標記所取代；詳細的管道工件（可以包括上游/客戶端主體和流塊）不會被保留。語義、冪等性和推理重播快取會繞過該請求的讀取和寫入。提供者請求和客戶端可見的回應保持不變。當省略詳細工件時，早期的保持活動字節會從臨時緩衝區中排出。Kiro 的格式錯誤 EventStream 警告僅報告有效載荷字節計數，從不報告其內容或 JSON 解析器的原始錯誤。這並不聲稱每個不相關的提供者/插件診斷都已經過審核；更廣泛的保留接收器掃描在 #11658 中進行跟蹤。

內部的 `/api/modality-bridge/video/drilldown` 生命週期是一個獨立的、回環/令牌身份驗證的快取基礎設施。每個操作還需要一個標準的、不透明的主體 ID。在啟用生產呼叫者之前，必須從經過身份驗證的租戶中推導出該 ID，並且絕不能轉發客戶端選擇的值。快取鍵將該主體綁定到標準會話和視頻參考 ID，僅存儲其 SHA-256 派生的鍵，並將讀取和刪除範圍限制在同一主體。快取每個條目最多存儲 16 個派生的 JPEG 幀，並在十分鐘後過期，支持有界的 `start`/`end` 讀取或顯式會話刪除。

每個主體的條目限制為 16 個和 64 MiB 的標準 JPEG 數據。這些限制與全域的 64 條目/256 MiB 上限是獨立的：主體配額壓力僅驅逐該主體的最近最少使用條目，然後才考慮全域 LRU 驅逐。過期的條目在快取活動時從主體和全域會計中清除，而取消和驗證失敗不會提交部分替換。

快取拒絕非標準的 Base64、過多的填充、非 JPEG 媒體、格式錯誤或截斷的 JPEG，以及在有界的全圖 `sharp` 解碼過程中產生警告的 JPEG。它將每個接受的圖像重新編碼為標準 JPEG，從解碼的字節中推導寬度和高度，而不是信任呼叫者字段，並丟棄任何尾隨的多語言字節，而不是保留它們。只有有界的標準壓縮緩衝區會計入兩個配額。JSON 線限制包括 32 MiB 解碼輸入上限的 Base64 開銷。每個存儲的派生記錄其驗證的 JPEG 格式/解析度、取樣策略、派生版本、創建時間、服務器計算的內容哈希，以及哈希的父參考加上可信呼叫者的父內容哈希。在原子快取提交之前，會在異步解碼/哈希階段之間檢查取消。

生產生產者僅在成功的視覺分析後重用已派生的經紀幀，無需第二次視頻下載/提取。它需要操作員 `modalityBridgeVideoDrilldownEnabled=true`、嚴格的每部分 `drilldown: true` 和經過身份驗證的 API 密鑰記錄 ID。客戶端聲明的主體/會話值永遠不會建立所有權。沒有滿足所有三個條件，它不會哈希、調整大小或保留額外的幀。保留失敗保留可用的視覺回應。已同意的請求繞過整個視頻結果快取，因此快取結果永遠不會重播句柄。

成功的 JSON 和 SSE 回應在有界的 `x-omniroute-video-drilldown` 標頭中最多暴露四個不透明的句柄。授權的瀏覽器來源可以在不擴大 CORS 原始政策的情況下讀取該標頭。新句柄使用 `v1.<32-byte random base64url token>`，註冊表僅保留其 SHA-256 哈希。讀取器/標頭解析器還接受舊版的 64-十六進制令牌。經過身份驗證的公共消費者是 `GET /api/v1/video-bridge/drilldown?handle=...`，獨立由 `modalityBridgeVideoDrilldownRemoteEnabled=true` 控制。顯式持久化的 false 即使在舊版的 `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` 環境回退啟用時也會撤銷訪問。生產保留具有類似的舊版 `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` 回退。這兩個回退預設為關閉。

消費者從經過身份驗證的密鑰中推導所有權，應用密鑰政策，並對未知、過期和其他密鑰的句柄返回相同的 404。它接受 `variant=preview|standard|detail`（最大 JPEG 尺寸 320/640/1280，永遠不會放大）、`limit=1..8`（或舊版的 `frames` 別名，永遠不會同時使用）、零基 `page` 和可選的 `start`/`end` 焦點秒數。重複的查詢鍵和反向焦點窗口會被拒絕。每個返回的變體都有其實際內容和實際解析度元數據的哈希，與保留的源連結。變體在讀取時派生，而不是作為額外的保留副本存儲。JSON 回應，包括 Base64/信封，限制為 32 MiB；超過大小的頁面返回 413，客戶端必須請求更少的幀。讀取在每次調整大小周圍檢查取消，並在返回之前重新檢查句柄的有效性。擁有者的 `DELETE` 是冪等的；刪除或 TTL 到期會釋放保留的源和使用會計。

共享存儲是進程本地的：句柄在重啟時過期，並且不能在獨立的 OmniRoute 進程之間轉移。管理統計僅暴露有效的保留/遠程政策和聚合的保留條目/字節，從不包括媒體、參考、主體 ID 或句柄。視頻設置面板顯示這些值，並可以持久化兩個同意開關。此實施文件不是實時部署或推廣證據；真實模型的接受情況單獨進行跟蹤。

幀會根據配置的視頻模型按順序加上標題。空的視頻覆蓋繼承視覺設置；如果兩者都是空的，視覺自動路由器會選擇有效的視覺能力模型。成功的標題會用穩定的 `[Video description:` 前綴替換原始部分，這也將文本標記為不受信的媒體衍生觀察，並告訴下游模型不要遵循媒體中找到的指令。幀標題快取鍵包括 JPEG 字節、提示、時間戳和有效模型；只有成功的標題會被快取。快取條目保留實際成功的生成模型，包括後備模型；當不同的幀由不同的模型生成時，橋接報告 `mixed`。快取命中會重用該生成者身份，而不是將其重新標記為請求的路由計劃。整個視頻結果快取以每個改變輸出的輸入為鍵——提示、有效模型、取樣策略、幀數、語義分析模式、標準化焦點提示的 SHA-256 指紋、焦點窗口、`transcript`、`audioTranscript` 和聯絡表標誌——因此改變任何這些維度都是快取未命中，而不是過時的重用。視覺去重政策版本、閾值和有界候選幀數量在結果快取鍵和元數據中也是明確的；因此，政策變更不能重用過時的整個視頻描述。結果快取 v4 元數據保留模式和指紋，從不保留原始用戶任務。護欄元數據報告請求的和有效的分析模式；請求的 `focused` 模式在沒有可用用戶文本的情況下被報告為有效的 `full`。

護欄提取每個支持的視頻部分，但不會描述超過 `modalityBridgeVideoMaxVideos`。對於證明為 `supportsVideo === false` 的目標，失敗和超限的視頻會成為明確的安全文本標記，因此不會有原始視頻存活。當能力未知時，這些部分保持不變。對於 `supportsVideo === true` 的目標，則會繞過橋接。客戶端請求中止信號會在下載、經紀人隊列、子進程和標題呼叫中傳播；中止會在視頻之間停止，並且永遠不會開放到原始媒體。

運行時設置是基於數據庫的，並經過 Zod 驗證：

| 鍵                                  | 預設值      | 範圍 / 行為                                                                 |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | 可選運行時，選擇加入                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` 保留通用標題；`focused` 使用有界的、不受信的最新用戶上下文           |
| `modalityBridgeVideoModel`          | `""`        | 繼承視覺橋接模型                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`、`scene_aware` 或比例 `segment_aware`；檢測器失敗回退到 `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 毫秒                                                            |

遺留的持久視頻超時值超過 120 秒會被限制在經紀人截止時間；超過該限制的新設置寫入會被拒絕。`GET /api/modality-bridge/video/runtime` 需要受信的印章回環本地性，然後需要管理授權。它僅返回 `available`、經過清理的 FFmpeg/ffprobe 版本，以及在運行時不可用時的固定原因。內部提取端點不是公共上傳 API：隊列飽和返回 `503` 加上 `Retry-After`，呼叫者斷開連接返回 `499`，固定的經紀人截止時間返回 `504`。轉換的回應在中央 `x-omniroute-modality-bridge` 標頭中添加 `video->text;model=<visionModel>;parts=<videos>`，而不移除視覺或音頻部分。

### PII 掩碼器 (`piiMasker.ts`)

在 **兩個** 階段運行。

- **`preCall`** 克隆有效負載，遍歷 `system`、`messages`、`input` 和 `prompt`（包括普通字串項目），並對字串 `content`/`text` 字段應用 `processPII()`（來自 `@/shared/utils/inputSanitizer`）。當 `PII_REDACTION_ENABLED=true` 時，檢測到的 PII 會在外發負載中被刪除。這與 `INPUT_SANITIZER_MODE` 無關（該模式僅控制提示注入策略）。當刪除關閉時，呼叫記錄檢測計數而不重寫內容。
- **`postCall`** 深度克隆回應，運行 `sanitizePIIResponse()` 加上回應 API 形狀掩碼器（`maskResponsesOutput` — 涵蓋 `output_text` 和 `output[].content[].text`）。如果發生任何刪除，修改後的回應會替換原始回應。

護欄從不阻止；它僅標註（`meta.detections`、`meta.redacted`）或重寫。

### 提示注入 (`promptInjection.ts`)

檢測用戶提供內容中的對抗結構並強制執行配置的政策。行為由環境變量和構造函數選項驅動：

| 設定     | 環境變數                                                                                            | 預設   | 效果                                                                                                                                  |
| -------- | --------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 啟用     | `INPUT_SANITIZER_ENABLED`                                                                           | `true` | 當為 `false` 時，護欄會短路。                                                                                                         |
| 模式     | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                     | `warn` | 注入政策：`block`、`warn` 或 `log`。(`redact` 被接受作為向後相容，但不會刪除注入文本；請求 PII 重寫由 `PII_REDACTION_ENABLED` 控制。) |
| 阻擋閾值 | `blockThreshold` 選項 / `INPUT_SANITIZER_BLOCK_THRESHOLD`（別名 `INJECTION_GUARD_BLOCK_THRESHOLD`） | `high` | 阻擋所需的最低嚴重性。預設情況下，中等為僅觀察。                                                                                      |

**模式優先級** (`getMode`): 呼叫者 `options.mode` →
`INJECTION_GUARD_MODE` **資料庫功能標誌覆蓋**（儀表板 → 設定 →
功能標誌）→ `INJECTION_GUARD_MODE` 環境變數 → `INPUT_SANITIZER_MODE` 環境變數 →
`warn`。因此，儀表板的覆蓋優先於環境變數，因此功能標誌 UI 控制運行中的護欄（無需重啟）。資料庫讀取是故障安全的：
如果出錯，護欄會回退到基於環境的行為，當沒有設置覆蓋時，行為與僅基於環境的解析相同。

檢測來源：

1. `sanitizeRequest()` 來自 `@/shared/utils/inputSanitizer`（在管道中其他地方使用的共享檢測器集）。
2. 內建的 `DEFAULT_GUARD_PATTERNS`（目前為 `system_override_inline` 和
   `markdown_system_block`，兩者為 `high` 嚴重性）。
3. 通過構造函數選項傳遞的可選 `customPatterns`（字串、正則表達式，
   或 `{ name, pattern, severity }` 記錄）。

當 `mode === "block"` **且** 至少一個檢測符合嚴重性閾值時，`preCall` 返回 `{ block: true, message: "請求被拒絕：檢測到可疑內容" }`。在 `warn`/`log` 模式下，護欄會記錄但允許呼叫。共享助手 `evaluatePromptInjection()` 也被導出
給需要評估提示而不經過註冊表的呼叫者。

**掃描限制 (v3.8.20)：** 檢測器僅檢查 **前 16 KB** 的
合併提示文本 — `MAX_INJECTION_SCAN_BYTES = 16 * 1024`（16 384 字節）在
`src/shared/utils/inputSanitizer.ts` 中。`detectInjection()` 和
`evaluatePromptInjection()` 在運行模式循環之前都會 `slice(0, MAX_INJECTION_SCAN_BYTES)`。注入指令通常位於輸入的頂部，因此這限制了多百 KB 負載上的正則表達式 CPU/GC，而不會削弱檢測（參見 #3932, #4041）。

### 憑證遮罩器 (`credentialMasker.ts`)

在 **兩個** 階段運行，作為預設鏈中的最後一個（優先級 `95`）。從外發負載（消息內容、工具呼叫參數、工具結果）**和**提供者回應中刪除
知名的 API 密鑰 / 秘密令牌模式，因此粘貼到提示中的憑證（或由工具結果回顯）不會洩漏到上游提供者或回到客戶端。

- **僅限選擇性啟用**，與 PII 刪除相同的約定（硬性規則 #20 附近）：
  除非 `settings.credentialRedactionEnabled === true` **或**
  `CREDENTIAL_REDACTION_ENABLED=true`，否則禁用。關閉時，護欄為無操作 —
  它從不阻擋，也從不重寫。
- `redactCredentials()` 遍歷完整的負載/回應樹（`walkValue()`，
  原型污染安全，通過 `WeakSet` 循環安全）並用
  `[REDACTED:<type>]` 占位符替換匹配項，僅克隆實際更改的分支。
- `CREDENTIAL_PATTERNS` 涵蓋 LLM 提供者密鑰（OpenAI、OpenAI-proj、
  Anthropic、Google、Hugging Face、Replicate）、VCS/SaaS 令牌（GitHub、Slack、
  Linear、Notion、npm、Postman、Discord）、支付密鑰（Stripe、Square）、雲
  密鑰（AWS 訪問密鑰、Twilio、SendGrid、Mailgun）、私有密鑰 / JWT、
  帶有憑證的連接字串（`mongodb://user:pass@...` 等），以及通用的 `Authorization`/`x-api-key`/`api-key`/`apikey` 標頭值
  模式。標頭形狀的密鑰（`authorization`、`x-api-key`、`api-key`、
  `apikey`）是結構性地刪除（僅值，保留方案前綴如
  `Bearer `/`Basic `）而不是通過通用文本正則表達式。
- 護欄從不阻擋；它僅重寫（`modifiedPayload` /
  `modifiedResponse`）並註解（`meta.credentialsRedacted`、`meta.count`）。

回歸護欄：`tests/unit/credential-masker-guardrail.test.ts`。

## 基礎契約（`base.ts`）

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
  block?: boolean; // true 會使鏈結短路
  message?: string; // 阻擋時顯示
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // 由 preCall 傳回以重寫請求
  modifiedResponse?: TValue; // 由 postCall 傳回以重寫回應
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

防護欄可透過傳回 `void`、`{}` 或 `{ block: false }` 來表示「無變更」。傳回 `modifiedPayload`/`modifiedResponse` 會取代沿著鏈結傳遞給下游防護欄的值。
`signal?: AbortSignal` 會將呼叫端的生命週期帶入防護欄。請求中止是刻意設計的開放式失敗例外：媒體橋接器會停止工作並執行清理，而不會將原始媒體還原至已知不支援該媒體的目標。

## 登錄檔（`registry.ts`）

單例 `guardrailRegistry` 提供：

- `register(guardrail)` — 新增防護欄（或依正規化名稱取代現有防護欄），並依 `priority` 升冪重新排序。
- `clear()` / `list()` — 管理輔助方法。
- `runPreCallHooks(payload, context)` — 逐一執行啟用中的防護欄，透過 `modifiedPayload` 傳遞酬載，並在第一個 `block: true` 時停止。
- `runPostCallHooks(response, context)` — 在回應端執行相同流程。
- `resetGuardrailsForTests({ registerDefaults })` — 清除狀態，並可選擇重新註冊預設防護欄，以確保測試彼此完全隔離。

兩個執行器都會傳回 `{ blocked, payload|response, results, guardrail?, message? }`，其中 `results` 是 `GuardrailExecutionResult` 記錄陣列，包含每個防護欄的 `blocked`、`skipped`、`modified`、`error` 與 `meta` 欄位，便於追蹤。

### 針對個別請求停用防護欄

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` 會彙整目前請求中應略過的防護欄名稱，並移除重複項目。來源如下（全部皆為選用，且會全部合併）：

- `apiKeyInfo.disabledGuardrails`
- 請求主體的 `disabledGuardrails`（頂層）
- 請求主體的 `metadata.disabledGuardrails`
- 標頭 `x-omniroute-disabled-guardrails`（或舊版
  `x-disabled-guardrails`）

值可以是字串陣列或以逗號分隔的字串；名稱會正規化為小寫 kebab-case（`pii_masker` → `pii-masker`）。結果會透過 `context.disabledGuardrails` 傳遞至登錄檔，登錄檔會略過相符的防護欄（在 `results` 中標記為 `skipped: true`）。

## 執行順序

對於每個流經 `src/sse/handlers/chat.ts` 和
`open-sse/handlers/chatCore.ts` 的請求：

1. `resolveDisabledGuardrails(...)` 根據 API 金鑰、請求本文和標頭建立略過清單。
2. `guardrailRegistry.runPreCallHooks(body, ctx)` 依優先順序由低至高執行護欄：
   - 停用的護欄會被記錄為 `skipped`。
   - 每個護欄的 `preCall` 都可以透過 `modifiedPayload` 改寫承載資料。
   - 第一個 `block: true` 會使鏈結短路，處理常式會傳回護欄拒絕回應。
3. （可能已改寫的）承載資料會進入組合路由及上游分派。
4. 組合回應後，`guardrailRegistry.runPostCallHooks(...)`
   會對回應執行相同的鏈結。此處的 `block: true` 會捨棄上游回應。

擲回例外的護欄會以 `error: <message>` 記錄，並透過
`logger.warn` 寫入日誌，但鏈結仍會繼續執行——此設計採用失敗開放原則。

## 組態

內建護欄所讀取的環境變數：

| 變數                                  | 使用者               | 效果                                                                   |
| ------------------------------------- | -------------------- | ---------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`   | 設為 `false` 可完全停用偵測。                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`   | 注入政策：`warn`、`block` 或 `log`。舊版值 `redact` 不會改寫注入文字。 |
| `INJECTION_GUARD_MODE`                | `prompt-injection`   | 注入護欄的模式；同時也是會**覆寫**環境變數的 DB 功能旗標（DB > ENV）。 |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`   | `MODE=block` 拒絕請求的最低嚴重性：`high`（預設）、`medium` 或 `low`。 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`   | `INPUT_SANITIZER_BLOCK_THRESHOLD` 的舊版別名。                         |
| `PII_REDACTION_ENABLED`               | `pii-masker`         | 設為 `true` 時，將遮蔽請求中的 PII（與注入模式無關）。                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker`（下游） | 控制回應端遮蔽器的行為。                                               |

Modality Bridge 護欄會從由 DB 支援的設定儲存區（`getSettings()`）讀取執行階段組態，而非環境變數。Vision 的主要鍵為
`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、
`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、
`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、
`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、
`modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes` 和
`modalityBridgeCacheMaxEntries`。舊版
`visionBridge*` 鍵僅作為文件所述、為期一個週期的讀取後備方案；儀表板寫入時會使用主要鍵。預設值和後備解析器位於 `src/shared/constants/modalityBridgeDefaults.ts`，舊版常數則保留於 `src/shared/constants/visionBridgeDefaults.ts`。

Audio 使用 `modalityBridgeAudioEnabled`、`modalityBridgeAudioModel`、
`modalityBridgeAudioTimeout` 和 `modalityBridgeAudioMaxClips`，並搭配共用的
`modalityBridgeCache*` 設定。Audio 沒有舊版鍵後備方案，因為這些鍵是隨 Modality Bridge 結構描述一同引入的。

Video 使用 `modalityBridgeVideoEnabled`、`modalityBridgeVideoAnalysisMode`、
`modalityBridgeVideoModel`、
`modalityBridgeVideoFrameCount`、`modalityBridgeVideoSamplingPolicy`、
`modalityBridgeVideoMaxVideos` 和
`modalityBridgeVideoTimeout`，並搭配共用的 `modalityBridgeCache*` 設定。
其預設為停用，因為 FFmpeg/ffprobe 是選用的作業相依項目，而且畫面字幕生成會增加延遲和模型成本。

## 自訂護欄

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

步驟：

1. 建立繼承 `BaseGuardrail` 的 `src/lib/guardrails/myGuardrail.ts`。
2. 實作 `preCall` 和／或 `postCall`。
3. 可在匯入時註冊（從 `registerDefaultGuardrails` 推送），或在執行階段
   呼叫 `guardrailRegistry.register(...)`——登錄檔會取代任何具有相同正規化名稱的
   既有護欄。
4. 在 `tests/unit/` 下新增測試（現有範例：
   `tests/unit/guardrails-registry.test.ts`、
   `tests/unit/prompt-injection-guard.test.ts`、
   `tests/unit/guardrails/visionBridge.test.ts`）。

## 測試

在各測試之間使用 `resetGuardrailsForTests()`，以從已知狀態開始。
傳入 `{ registerDefaults: false }` 可從空白登錄檔開始，並僅註冊受測護欄。
Vision Bridge 支援相依性注入（`deps.getSettings`、`deps.callVisionModel`）；
Audio Bridge 則公開用於設定、功能、STT 模型選擇、憑證檢查及轉錄的
對等介面。因此，測試可在不存取資料庫或網路的情況下執行這兩種流程。

## 另請參閱

- `src/lib/guardrails/` — 實作
- `src/shared/utils/inputSanitizer.ts` — 支援提示注入偵測與 PII 遮蔽的共用偵測器
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge 預設值及
  強制橋接模型清單
- `src/shared/constants/modalityBridgeDefaults.ts` — 共用的 Vision/Audio 執行階段預設值
- `docs/architecture/RESILIENCE_GUIDE.md` — 正交層（斷路器、冷卻時間）
- `docs/reference/ENVIRONMENT.md` — 完整環境變數參考

## 注入護欄的路由涵蓋範圍與紅隊測試（第 8 階段 · 區塊 D）

注入護欄（`createInjectionGuard` / `withInjectionGuard`）涵蓋所有
接受使用者提示的路由。它遵循 `INJECTION_GUARD_MODE`（預設為 `warn` = 僅記錄；
`block` = 傳回 HTTP 400 `SECURITY_001`）。

| 類型         | 路由                                                                                                                                                 | 預設模式 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 文字（既有） | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn     |
| 生成式       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn     |
| 資料         | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn     |

文字擷取（`extractMessageContents`）涵蓋 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`。

**紅隊測試（每晚執行，`nightly-llm-security.yml`）：** promptfoo 會驗證每個路由在
`INJECTION_GUARD_MODE=block` 下皆會封鎖 OWASP-LLM 語料庫；garak 則執行探測
（沒有密鑰時跳過）。為維持一致性，`moderations` 也包含在內——使用封鎖模式的
運維人員可透過 `resolveDisabledGuardrails` 將其豁免。

每晚執行的工作流程（`.github/workflows/nightly-llm-security.yml`，cron + 手動
觸發）包含兩個作業：

- **`promptfoo-guard`（阻斷性）**——使用 `INJECTION_GUARD_MODE=block`
  執行 `promptfoo eval -c promptfooconfig.yaml`。每個對抗性案例（例如「忽略所有
  先前指示……」、DAN 風格越獄）都會斷言回應包含
  `error.code === "SECURITY_001"`，也就是護欄確實拒絕了該請求。
- **`garak`（建議性）**——針對本機 OmniRoute 執行個體
  （`http://localhost:20128/v1`）執行 garak `--probes promptinject,dan,leakreplay`。
  此作業以提供者密鑰（`PROMPTFOO_PROVIDER_KEY`）作為執行條件；若無密鑰則妥善跳過，
  並加上 `|| true` 後綴，因此它只會回報結果，而不會導致 CI 失敗。

護欄輔助函式（`createInjectionGuard` / `withInjectionGuard`）的涵蓋範圍
包括每個含提示內容的 `/v1` 路由；提示文字由
`src/shared/utils/inputSanitizer.ts` 中的 `extractMessageContents()` 從
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
擷取。
