# Guardrails (中文 (简体))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **事实来源：** `src/lib/guardrails/`
> **最后更新：** 2026-08-29 — v3.8.51（Video Bridge 的转录来源由调用方声明，
> 尚未经过服务器验证 — 根据 #11661 予以澄清）

Guardrail 在 OmniRoute 与上游提供者之间的边界处实施安全、策略和内容转换。
每个 guardrail 都可以检查（并可选择拒绝、转换或注释）请求负载（`preCall`）和
上游响应（`postCall`）。

系统采用**失败时放行**策略：如果某个 guardrail 在执行时抛出异常，注册表会
记录错误并继续执行下一个 guardrail，而不是使请求失败。阻止请求始终是显式决定
（`block: true`），绝不会因意外而发生。

## 内置保护措施

注册表在导入时按优先顺序自动加载六个保护措施
（参见 `registry.ts` → `registerDefaultGuardrails()`）：

| 优先级 | 名称                | 阶段(s)        | 文件                  |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

优先级数字越低，运行顺序越**靠前**。

### 视觉桥接 (`visionBridge.ts`) — 模态桥接 PR-1

拦截针对**非视觉模型**的图像请求，并将整个请求重定向到一个支持视觉的模型，或者在上游调用之前用可配置的视觉模型生成的文本描述替换图像部分。这使得仅支持文本的提供者能够透明地处理多模态负载。

流程：

1. 如果目标模型已经支持视觉，则跳过（除非它出现在强制桥接列表 `isVisionBridgeForcedModel` 中）。
2. 通过 `extractImageParts(messages)` 提取图像部分
   （`visionBridgeHelpers.ts`），该方法委托给**统一媒体检测器** `detectMediaParts()` 在 `open-sse/utils/mediaParts.ts` 中 — 这是与组合兼容性过滤器共享的唯一真实来源。
   提取仅允许顶层部分，`replaceImageParts` 可以重新拼接（提取↔替换合同）：OpenAI `image_url`，Anthropic base64 `source.type:"base64"`，Anthropic URL `source.type:"url"`，以及响应 API `input_image`。嵌套命中和仅指示形状是组合过滤材料，永远不会被提取。如果没有找到，则跳过。
3. 通过 `resolveVisionBridgeRuntimeSettings()` 解析运行时配置
   （`src/shared/constants/modalityBridgeDefaults.ts`）：新的 `modalityBridge*`
   设置键优先；遗留的 `visionBridge*` 键仍然是**一次性回退**（回滚窗口）。当桥接被禁用时，在任何媒体遍历之前跳过。
4. 模式选择器（`modalityBridgeVisionMode`，见下表）决定重定向与描述。重定向返回 `modifiedPayload`，仅交换 `model`，加上元数据 `{ rerouted, fromModel, toModel, imagesKept }`。
5. 描述路径：将图像限制在 `maxImages`，构建任务感知提示，查询描述缓存，**并行**调用视觉模型
   （`Promise.allSettled`），并在其位置注入 `[Image N]: <description>` 文本部分。描述失败返回 `null`，原始图像部分被**保留**（#4012） — 除非在组合描述路径上每个描述都失败，此时确认的非视觉上游将得到一个
   `(unavailable — no vision-capable provider connected)` 存根（#8430）。
6. 返回 `modifiedPayload` + 元数据（`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`）。

#### 模式选择器 (`modalityBridgeVisionMode`)

| 模式       | 默认 | 行为                                                                                                                                                             |
| ---------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔    | 传统启发式，未更改（#6640/#7204）：非组合/`auto/` 模型重定向到最佳视觉模型，除非原始模型已经有可用凭证（然后描述）；组合目标始终描述。                           |
| `describe` |      | 始终描述 — 重定向块完全跳过；用户选择的模型始终响应。                                                                                                            |
| `reroute`  |      | 强制重定向：跳过保持凭证模型的保护。重定向**目标**凭证保护仍然适用 — 当没有可用的视觉目标时，请求将转到描述，因此原始图像永远不会到达仅支持文本的后端（#8430）。 |

强制模式在**自动启发式运行之前**短路；`auto` 行为与 PR-1 保护措施之前的字节完全相同。

#### 任务感知描述提示 (`modalityBridgeVisionTaskAware`)

默认值为**true**。`composeVisionPrompt()` （`visionBridgeHelpers.ts`）将**最后一条用户消息**的文本（截断为 500 个字符）附加到基本描述提示中，引导描述朝向用户实际询问的内容（codex-vision-proxy 模式），并要求视觉模型转录可见文本。如果标志关闭 — 或没有用户文本 — 则使用未更改的基本提示。

描述自循环的 OpenAI 兼容请求（`callVisionModelSingle()` 在 `visionBridgeHelpers.ts` 中）始终请求 `image_url.detail: "high"` — 无条件地，对于每个调用者/提供者，不受任何客户端信号的限制。低细节采样会降低 OCR 准确性，正是这个提示所要求的文本转录任务，因此描述调用本身始终请求高细节，而不管原始入站请求使用了什么细节级别。这仅影响内部描述请求体；它不会改变 OmniRoute 在主要请求中转发调用者自己的 `image_url.detail` 的方式 — 该默认值是单独应用的，仅针对检测到的 OpenCode 客户端，在 `defaultImageDetail()`（`open-sse/handlers/chatCore/upstreamBody.ts`）中。描述自循环的 Anthropic wire-format 分支没有 `detail` 字段，并且不受任何默认值的影响。

#### 描述输出上限 (`modalityBridgeVisionMaxChars`)

| 键                             | 默认 | 范围             |
| ------------------------------ | ---- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`  | `0` 或 100–50000 |

`0`（默认）意味着 **没有上限** — `callVisionModel()` 返回的描述未经修改，保留现有行为。任何在 100–50000 范围内的值都会在描述后加上 `…` 后缀，然后再拼接回 `[Image N]: <description>`（`VisionBridgeGuardrail.preCall()` 在 `src/lib/guardrails/visionBridge.ts` 中）。对于需要完整转录的细节密集型 OCR 任务，可以提高此值；对于聊天型视觉模型，可以降低此值以限制令牌使用。仪表板字段位于视觉选项卡的高级面板中（`modality-bridge-max-chars` 在 `ModalityBridgeVisionTab.tsx` 中），并将任何值在 1 到 99 之间限制到 100 的下限，同时保留显式的 `0` 不变 — `0` 本身是一个有效的 Zod 值（`z.union([z.literal(0), z.number().int().min(100).max(50000)])`），不仅仅是“未设置”的默认值。

#### 描述缓存 (`modalityBridge/bridgeCache.ts`)

用于描述输出的内存 LRU + TTL 缓存，进程范围共享。键 = `sha256(imageRef + composedPrompt + configuredBridgeModel)`，带有长度前缀框架（没有字段边界冲突）。模型组件是 **配置的** 桥接模型，而不是实际回答的模型 — `callVisionModel` 可能在内部回退，按尝试键入会导致缓存碎片化。失败的描述永远不会被缓存。设置：

| 键                              | 默认   | 范围    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### 远程图像规范化（自循环描述/base64 获取）

当桥接自身获取 **远程** 图像时 — Anthropic 描述自调用和 claude-wire-format base64 转换（`ensureBase64ImagesForClaudeWire`），均通过 `fetchRemoteImageAsDataUri()` 在 `visionBridgeHelpers.ts` 中 — 生成的数据 URI 会通过 `normalizeDataUri()`（`open-sse/utils/imageNormalize.ts`）进行处理，然后嵌入到视觉模型请求中。超大图像会缩小到 **2048px 长边**（与 OpenAI/Anthropic 已经在服务器端应用的缩放上限相匹配），这减少了上传字节/延迟，而不改变视觉模型所看到的内容。缩放使用 `sharp`，通过动态导入加载：在其本地二进制文件无法加载的平台上，`normalizeDataUri()` **从不抛出异常** — 它会回退到原始字节的直通，因此描述/base64 转换路径始终保持工作。非图像字节（未返回可解码图像的获取）也会原样传递。此规范化仅限于桥接为其自身自调用获取的图像 — 从不应用于调用者的原始直通有效负载，符合仅限选择的变更原则（硬性规则 #20）。

#### 设置架构 + 迁移

新的 `modalityBridge*` 键在 `updateSettingsSchema` 中经过 Zod 验证（`src/shared/validation/settingsSchemas.ts`）：`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`，以及 `modalityBridgeCache*` 三元组和 Audio Bridge 使用的 `modalityBridgeAudio*` 组。迁移 `141_modality_bridge_settings.sql` 将现有的遗留 `visionBridge*` 值复制到匹配的新键（幂等，不会覆盖操作员设置的 `modalityBridge*` 值）；遗留键在一个发布周期内仍被接受作为读取回退。

#### 透明度头 + 统计信息

描述转换的响应携带 `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`（由 `buildModalityBridgeHeader()` 在 `modalityBridge/bridgeStats.ts` 中构建，通过 `withModalityBridgeHeader()` 在 `src/sse/handlers/chatHelpers.ts` 中印章）。重新路由的请求 **没有** 头 — 有效负载未被触及，模型交换在响应体的 `model` 字段中已经可见。

`GET /api/modality-bridge/stats`（管理身份验证，与 `GET /api/settings` 同级）返回内存中每种模式的计数器 `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }`，用于 `vision`、`audio` 和 `video`。`averageLatencyMs` 使用 `latencySamples`，而不是所有尝试，作为其分母；没有计时的操作不会虚构零毫秒样本。`bridged` 仍然是成功转换的向后兼容别名；失败的尝试不会增加它。计数器在进程重启时会重置（遥测，而非会计）。

#### 仪表板配置

专用仪表板页面是
`/dashboard/settings/modality-bridge`。其可通过 URL 访问的 `Vision`、`Audio` 和 `Video` 标签在切换 `tab` 值时保留查询参数。Vision 标签展示了启用、模式、模型选择（包括自动默认）、任务感知提示、高级超时/图像/描述长度/缓存限制、运行时计数器和受保护的示例请求。Audio 标签也是实时的：它展示了启用、仅 STT 模型选择器与自动、超时/最大片段限制、音频计数器和 `input_audio` 示例测试。Video 标签是功能性的：它报告 FFmpeg/ffprobe 运行时状态——四种明确的 UI 状态之一（在探测进行中或无法完成时为 `unknown`，在非回环仪表板主机上探测被客户端跳过时为 `restricted`，探测后确认缺失时为 `unavailable`，或与 FFmpeg/ffprobe 版本一起为 `available`）——持久化启用/模型/帧/视频/超时限制，过滤模型选择器以仅显示视觉能力模型，并展示视频计数器。

AI 设置下的前 Vision Bridge 卡片是指向新页面的兼容链接；它不再拥有表单的第二个副本。媒体提供者还将图像到文本和语音到文本工作流链接到相应的 Modality Bridge 标签，而不移除现有的语音到文本游乐场。

**自环接纳旁路：** 当描述调用通过 OmniRoute 自身的 `/v1` 自环（非标准提供者模型）路由时，子请求发送 `x-omniroute-admission-bypass: internal` 并使用解析的自环凭证进行身份验证——本地模式下的本地 `sk_omniroute` 哨兵，或操作员配置的 `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 环境变量 (#1350)，因此 `REQUIRE_API_KEY=true` 的部署仍然可以运行描述调用。旁路仅对这些确切凭证有效，因此外部客户端无法使用该头跳过接纳。

遗留默认值位于 `src/shared/constants/visionBridgeDefaults.ts`；新的模式/任务感知/缓存默认值和设置解析器位于 `src/shared/constants/modalityBridgeDefaults.ts`。护栏暴露了一个 `deps` 构造函数选项，以便测试可以注入假 `getSettings` 和 `callVisionModel` 实现。

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

在音频承载的聊天请求到达不被知晓接受音频输入的目标之前进行拦截。它从不重新路由聊天请求：音频部分通过现有的与 OpenAI 兼容的多部分端点进行转录，所选聊天模型继续使用文本转录。

流程：

1. 通过 `getResolvedModelCapabilities()` 解析 `supportsAudio`。显式提供者注册元数据优先，其次是静态模型元数据，然后是同步的 `modalities_input`。声明的输入列表如果没有 `audio` 则为 `false`；没有能力证据则保持 `null`。`false` 和 `null` 都会激活保守桥，而 `true` 则会绕过它。
2. 解析 `modalityBridgeAudio*` 设置，并通过共享的 `detectMediaParts()` 检测器从每个消息中提取可拼接的顶级音频部分。支持的线形为 OpenAI 的 `input_audio`、`audio_url` 和 `source.media_type: "audio/*"`。嵌套音频被检测用于路由，但不会被拼接路径移除。工作由 `modalityBridgeAudioMaxClips` 限制；后续部分保持不变。
3. 尊重配置的 `provider/model`，或者让 `selectAudioBridgeModel()` 按稳定目录顺序遍历 `AUDIO_TRANSCRIPTION_PROVIDERS` 并选择第一个具有可用活动提供者凭证的模型。
4. `callAudioTranscription()` 将 base64/data-URI 音频转换为多部分 `file`，或通过公共出站护栏下载远程 `audio_url`，并进行 DNS 钉扎，限制为 25 MB。然后将文件和所选模型 POST 到本地的 `/v1/audio/transcriptions` 自环，使用 `resolveSelfLoopBearer()` 进行身份验证。现有的转录路由执行正常的凭证查找、冷却/速率限制处理和提供者调度。
5. 成功的调用用 `[Audio N]: <transcript>` 替换其部分。调用使用 `Promise.allSettled` 运行：单个失败保留原始音频部分 (#4012 合同)。如果每个调用都失败且目标被证明为 `supportsAudio === false`，则部分变为 `[Audio N]: (unavailable — no STT provider connected)` (#8430 合同)。对于未知目标（`null`），所有失败结果保持不变。对于没有可用 STT 凭证的已证明文本目标，接收相同的显式存根而不发出网络调用。

成功的转录使用进程范围内的 Modality Bridge LRU/TTL 缓存。键结合音频引用、稳定的 `audio-transcription` 操作标签和所选的 STT 模型；失败永远不会被缓存。音频尝试更新共享的 `bridged`、`cacheHits`、`failures` 和 `lastUsedAt` 计数器。转换的响应携带 `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`；未触及的请求不接收 Audio Bridge 段。

运行时设置由数据库支持并经过 Zod 验证：

| 键                            | 默认值  | 范围          |
| ----------------------------- | ------- | ------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —             |
| `modalityBridgeAudioModel`    | `""`    | 自动或 STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000   |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10          |

共享缓存仍由 `modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes` 和 `modalityBridgeCacheMaxEntries` 控制。

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

拦截 Chat Completions `messages` 和响应 API `input` 中的顶级视频部分，直到调用没有已知原生视频支持的目标。支持的形状包括 `input_video`、`video_url`、`video_source`、HTTPS URLs，以及 `data:video/*;base64,...` 数据 URI。文本中的普通文件名不被视为视频。

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) 负责请求遍历、能力/策略检查、每个请求的聚合以及响应负载。每个视频的工作——获取、整个结果缓存、描述帧序列（融合任何调用者声明的音频转录）以及每次尝试的指标/中止/清理——隐藏在 `videoBridgePipeline.ts` 中的 `processVideoPart` 后，该函数在 `preCall` 的循环中每个视频部分调用一次。该模块还定义了显式的端口边界 `VideoMediaBrokerPort`（获取字节和提取采样帧）、`VideoAudioTranscriptionPort`（将调用者声明的音频转录与采样的字幕融合）和 `VideoDrilldownPort`（遗留的原始存储形状）。生产 STT 和帧保留围绕描述端口通过 `createVideoSttAdapter` 和 `createVideoDrilldownAdapter` 组合；后者使用共享的不透明句柄生命周期。

公共 `/v1` 请求路径从不导入或调用子进程。远程视频在 50 MiB 限制下下载；内联 base64 视频的解码大小保守地限制为每个视频 36 MiB，以便模型/消息/框架信封可以保持在公共 JSON 请求接纳限制的 50 MiB 以内。分配前检查内联长度和解码大小估计。初始远程 URL 和每个重定向都要求使用 HTTPS，使用现有的公共仅出站保护和 DNS 钉扎。字节随后跨越确切的内部 `POST /api/modality-bridge/video/extract` 代理边界。该路由既是 `LOCAL_ONLY` 也是 `SPAWN_CAPABLE`，仅接受每个进程经过身份验证的、受信任的回环请求，并且从不接受 URL、文件系统路径、可执行文件或参数列表。API 主体大小管道和处理程序的增量主体读取器独立地强制执行 50 MiB 代理输入限制。其有界队列一次运行一个提取，允许四个待处理作业，并将待处理输入限制在 100 MiB。

在代理内部，`ffprobe` 读取一个私有本地文件；固定格式白名单排除了播放列表和清单格式。对于允许的 MOV 家族容器，外部 MOV 数据引用默认情况下保持禁用，固定命令不选择它们。`ffprobe` 和 `ffmpeg` 都使用仅 `file` 的协议白名单、一个线程、固定参数数组、无 shell，并从 `PATH` 解析可执行文件。附加图片封面流不是可播放候选。所有可播放流必须满足限制，并且在确定性最低索引回退之前，优先选择显式默认流。视频限制为 600 秒、每个维度 8,192 像素和 33,554,432 源像素。FFmpeg 采样 1–16 个中点 JPEG 帧，将长边缩小到最多 1,024 像素，而不对较小的输入进行放大，并且从不接收 URL。采样默认是 `uniform`。可选的 `scene_aware` 和实验性的 `segment_aware` 策略在已经验证的本地流上执行一次额外的固定 FFmpeg 传递，选择有界的 `showinfo` 场景时间戳，并在检测器失败、超时、输出格式错误或候选集为空时确定性地回退到相同的均匀中点。段感知模式按比例分配中点样本到验证的场景间隔；段感知证据和回退行为在下面详细说明。每个策略在选择后应用硬性 16 帧限制。当场景感知请求只有一个帧预算时，它使用活动全视频或焦点窗口的均匀中点，并报告 `policyEffective: uniform`：单个选定场景帧无法保留两个时间端。调用者可以选择提供有限的焦点窗口（`start`/`end` 秒）；边界被限制在媒体持续时间内，反向或非有限窗口被拒绝，所有采样策略仅在标准化区间内执行。结果窗口包含在采样元数据和不受信任的描述前缀中，以便下游模型可以区分聚焦摘录与完整时间线。

语义字幕焦点是一个单独的、显式的设置。默认的 `full` 分析模式保留现有的帧提示，并且从不将请求文本转发到字幕模型。在 `focused` 模式下，桥只读取来自同一 Chat 或 Responses 容器的最新非空用户创作的 `text`/`input_text`，将其标准化为 NFC，折叠控制字符和空白，并限制为 500 个 Unicode 代码点。空结果回退到确切的 `full` 提示。可用提示以 JSON 格式序列化在专用的不受信任用户上下文块中，只能优先考虑可观察的细节；它不能覆盖在媒体中可见或可听的遵循指令的单独警告。文本焦点从不推断 `start`/`end` 或更改时间采样器。

#### FU-07 结构段证据

`segment_aware` 在已经验证的本地视频流上使用一次有界的预分析传递。固定的过滤器链首先缩放到最多 320 像素宽，检测场景变化和冻结间隔，然后以每秒 1 帧的速度对模糊、平均亮度和空间/时间信息进行采样。该传递限制为 600 个结构样本、一个 FFmpeg/过滤器线程、相同的仅 `file` 协议和容器白名单、1 MiB 进程输出限制，以及在代理的共享中止/截止时间内最多 30 秒。它从不接受请求中的命令、过滤器、路径或 URL。

结构值是确定性采样证据，而不是语义视频理解。它们不推断主题、动作、字幕、语音或用户意图。场景和冻结边界形成片段；冻结覆盖、模糊、曝光、空间细节和时间变化仅影响现有的 1–16 帧预算的分配。完全冻结的片段限制为一帧，而非冻结片段则竞争剩余的预算。当边界数量超过帧数时，保持均匀的时间线覆盖，因此快速的早期剪辑无法掩盖长尾片段。在冻结边界的 1 秒分析分辨率内的场景边界被合并。

缺失的过滤器、格式错误/空的证据、检测器错误或受限的预分析超时会开放失败到确切的均匀中点策略。调用者中止或代理截止时间不会开放失败：它终止正在进行的子进程，防止后续帧提取，并在 `finally` 中移除私有临时树。

`scripts/perf/video-bridge-fu07-eval.ts` 生成确定性的真实 FFmpeg 固件，用于后去重字幕调用节省、密集运动预算分配、模糊/曝光/SI-TI 证据、带有长尾的快速剪辑和渐变假阳性。它记录预分析的墙时间，并且在 `/usr/bin/time` 可用的情况下，记录子 CPU 和峰值 RSS。它的质量检查仅是结构性神谕。真实字幕模型质量保持为 `HOLD`，因为这个工具没有授权的端点或冻结的评审。货币节省也保持为 `HOLD`，除非 `--caption-cost-per-call-usd` 提供明确的每次调用的正估计；该脚本从不伪造任何结果。

每帧限制为 4 MiB，所有原始帧总共限制为 23 MiB，序列化的代理响应限制为 32 MiB。私有临时目录在 `finally` 中被移除。OmniRoute 不捆绑 FFmpeg，也不接受自定义可执行路径。在字幕处理之前，桥接应用保守的视觉去重处理：每个 JPEG 被缩减为 16×16 灰度缓冲区，并仅与保留的最后一帧进行比较。对于请求的字幕预算超过一帧，提取提供最多两倍于该预算的受限候选池，且从不超过 16 帧。请求的上限仅在去重后应用，在预算至少为两时，保留第一次和最后一次选择的候选者，在最终稀疏时进行处理。版本化的 `grayscale-16x16-mean-cells-v2` 策略使用均值亮度增量和缩略图单元的比率中较大的一个，其归一化增量至少为 0.05。重复阈值是常数 0.04，选择它是为了可预测性，而不是作为运行时设置暴露。这个次级高对比度信号保留了小运动和可见文本变化，而仅均值比较可能会隐藏这些变化。比较器或解码器错误开放失败并保持覆盖。输出元数据分离提取的候选者、成功使用的帧和丢弃的视觉重复。

显式标记的视频部分可以请求带时间戳的联系表。桥接最多构建一个 4 列、16 帧的 JPEG 网格。每个 512 像素的单元将其源时间戳刻入高对比度的底部带中，而相同的时间戳保留在文本元数据中以便于后续关联和审计。完整的 JPEG 保持在 32 MiB 的上限。如果 `sharp` 无法解码或组合网格，桥接将回退到单独的 JPEG 帧；客户端中止仍会传播到表操作中。

推广证据故意与合成组合微基准分开。`scripts/perf/video-bridge-contact-sheet-eval.ts` 定义了一个具有模式版本的 A/B 工具，用于真实的 OpenAI 兼容视觉模型。它测量提供者报告的令牌、端到端墙延迟（包括表组合）、模型调用次数和清单定义的事实保留。原始模型响应不会写入报告；仅保留 SHA-256 摘要和匹配的事实 ID。该工具不会进行网络或付费模型调用，除非传递了 `--execute-real` 并配置了 `--model`、`OMNIROUTE_BASE_URL` 和 `OMNIROUTE_API_KEY`。没有该显式的真实运行，其机器可读的裁决保持为 `HOLD`；合成有效载荷/调用计数测量本身不是推广证据。

单独的 `scripts/perf/video-bridge-promotion-eval.ts` 消耗 FU-07 或 FU-09 观察。推广入场要求所有八种合成场景类型加上一个经过清理的真实剪辑，每个角色和案例至少三次测量重复，所有十个声明的指标，冻结的媒体/提示/预期事实/设置摘要，唯一的观察 ID 和验证的种子 A/B 顺序。执行收据绑定了语料库摘要、确切的候选 SHA 和模型修订。缺失或无效的测量保持为 `HOLD`，包括 CPU 超过 30 秒、峰值 RSS 超过 512 MiB 或预分析超过 30 秒。这些是证据入场上限，而不是新的运行时 RSS 强制保证。

FU-07 要求至少 98% 的质量保留和 p95 延迟不超过基线的 1.2 倍，此外在等效的平均字幕调用中，要求 0.05 的绝对案例平衡均值召回改善，或至少减少 10% 的平均去重字幕调用。FU-09 要求至少 0.85 的质量、95% 的保留、20% 的 p95 延迟减少和 10% 的令牌减少。关键事实丢失、注入合规或缺失使用会阻止推广。一次执行不能推广任何内容：`--previous-report` 确认两个不同的、不重叠的、连续符合条件的执行，具有相同的策略/模型修订/候选/语料库。采样实验不能确认联系表实验。

收集器应在内存中对响应进行评分，并保存 `responseDigest` 以及指标和观察绑定，而不是响应文本。消费者还会读取遗留的原始观察结果，但绝不会将该文本复制到其报告中。每个观察结果仅接受 `responseDigest` 或 `rawResponseText` 之一。版本化的允许列表保持为空，默认值为不可变的 `hold`。合格条目需要其证据引用、政策、模型修订、确切的候选 SHA、清单摘要和两个不同的运行 ID；冲突的上下文会被拒绝。这些元数据是审计合同，而不是证明引用文件包含真实测量的证据。在添加任何条目之前，请审查实际收据。管理统计端点和视频仪表板显示保守的准备状态。仅配置的模型别名并不能确定其修订或正在运行的候选 SHA，因此当前仪表板报告 `HOLD` 而不是重用来自其他执行上下文的合格性。明确的实验选择与推广保持分离；没有默认值会自动更改。

调用者可以在他们已经拥有对齐文本时，将可选的 `transcript.cues` 数组附加到支持的视频部分。每个提示必须携带 `text`、在探测持续时间内的有限 `start`/`end` 区间，以及白名单中的 `source`（`client`、`embedded` 或 `audio-bridge`）；`confidence` 默认为 `1`，并且必须保持在 `0` 和 `1` 之间。完全重复的提示会被合并。OmniRoute 从这些元数据中永远不会开始转录：经过验证的提示会被复制到描述的结果中，包含来源、置信度和区间，并作为不可信的观察结果与帧字幕一起呈现。无效、超出范围或没有来源的文本会被拒绝，而不是混入字幕流中。两个请求体转录通道将提供的来源标准化为 `client`，包括自我声明的 `embedded` 或 `audio-bridge` 标签。只有服务器拥有的适配器可以通过仅限代码的 `trustedSource` 参数分配这些可信标签；请求 JSON 字段无法到达该参数。转录文本仍然是不可信的媒体派生内容，无论其来源如何，并且绝不能决定授权。

高级调用者可以为同一视频提供 `audioTranscript` 轨道；它被视为客户端提供的文本，而不是服务器转录的证明。融合接缝在一个截止日期和中止信号下运行视觉和音频观察，将它们按共同时间线排序，合并完全重复的内容，并在只有一侧成功时报告部分结果。无效的 `audioTranscript` 降级为该部分结果——视觉描述被保留，音频分支记录一个清理过的失败代码——而不是使整个视频失败。每个分支的可用性、部分标志和清理过的失败代码保留在描述的结果中，在护栏元数据（`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`）、结果缓存元数据和桥接融合计数器中。默认的视频桥路径不会调用语音转文本或下载第二个媒体副本；没有该显式轨道，它仍然是仅视频。

**转录保留 (#12150 P1)。** 每当视频桥（本身为选择性）呈现转录提示时，这会自动适用——没有单独的保留标志。当请求呈现任何转录提示（调用者声明的 `transcript` 或融合的 `audioTranscript`）时，护栏将其标记为 `videoBridgeObserved` 并生成视频描述的编辑影像——在每个提示的自由文本主体被替换为 `[redacted-video-transcript]` 的相同渲染，通过在字符串组装之前替换结构化提示字段来构建（而不是通过解析扁平文本，因此没有提示内容——对抗性或普通，包括包含 `]` 的主体，如 `[inaudible]`/`[music]`——可以存活）。持久化的调用日志请求体将每个视频派生的文本部分替换为该编辑影像，通过内容相等进行匹配；`fullText` 锚点从完成的预调用护栏有效负载中重新读取，因此在后续链护栏（PII 和凭证掩码，优先级 10/95）就地重写描述文本后，匹配仍然成功。发送到模型的主体保持不变。观察到的请求也不会填充任何持久内存（跳过请求和响应派生的提取），因此模型自己的回复无法将转录文本回显到内存中。

**原始视频字段 (#12430)。** 当桥接被启用且本地视频支持未知或缺失时，定义的 `transcript`/`audioTranscript` 字段也会激活 `videoBridgeObserved`，即使在描述失败或达到 `maxVideos` 限制后。`null` 和空字符串计入；缺失字段和非视频元数据不计入。保留的副本会编辑这些字段或省略请求，并绕过缓存/内存。提供者有效负载保持不变。

额外的保留副本使用相同的观察请求信号。原始的预护栏客户端请求快照、内存中的待处理请求和早期拒绝请求日志在结构上替换视频部分中的转录字段；由管道阶段和上下文交接合成的字符串提示在持久化请求体汇聚处被编辑。持久化的 `video_content_removed` 标记使得 `previous_response_id` 的延续失败关闭，而不是重建被故意丢弃的文本。如果观察到的请求在记录之前失去了每部分的编辑影像，或者即使多个视频影像中的一个在后续请求变更后未能匹配，保留的请求体将完全省略，而不是保留部分编辑的转录。

对于观察到的请求，模型响应可能会引用转录的任何部分，而没有结构化的提示边界。因此，其持久化的调用日志 `responseBody` 被一个省略标记替代；详细的管道工件（可以包括上游/客户端主体和流块）不会被保留。语义、幂等性和推理重放缓存会绕过该请求的读取和写入。提供者请求和客户端可见的响应保持不变。当省略详细工件时，早期的保持活动字节会从临时缓冲区中排出。Kiro 的格式错误事件流警告仅报告有效负载字节计数，而从不报告其内容或 JSON 解析器的原始错误。这并不声称每个不相关的提供者/插件诊断都经过审核；更广泛的保留汇总在 #11658 中跟踪。

内部的 `/api/modality-bridge/video/drilldown` 生命周期是一个独立的、回环/令牌认证的缓存底层。每个操作还需要一个规范的不透明主体 ID。在启用生产调用者之前，必须从经过认证的租户派生该 ID，并且绝不能转发客户端选择的值。缓存键将该主体绑定到规范会话和视频引用 ID，仅存储其 SHA-256 派生的键，并将读取和删除的范围限制为同一主体。缓存每个条目最多存储 16 个派生的 JPEG 帧，在十分钟后过期，并支持有界的 `start`/`end` 读取或显式会话删除。

每个主体限制为 16 个条目和 64 MiB 的规范 JPEG 数据。这些限制与全局的 64 个条目/256 MiB 上限是独立的：主体配额压力仅在考虑全局 LRU 驱逐之前驱逐该主体的最近最少使用条目。过期条目在缓存活动时从主体和全局会计中清除，而取消和验证失败不会提交部分替换。

缓存拒绝非规范的 Base64、过多的填充、非 JPEG 媒体、格式错误或截断的 JPEG，以及在有界全图 `sharp` 解码期间产生警告的 JPEG。它将每个接受的图像重新编码为规范 JPEG，从解码字节中派生宽度和高度，而不是信任调用者字段，并丢弃任何尾随的多语言字节，而不是保留它们。只有有界的规范压缩缓冲区会计入两个配额。JSON 线限制包括 32 MiB 解码输入上限的 Base64 开销。每个存储的派生记录其验证的 JPEG 格式/分辨率、采样策略、派生版本、创建时间、服务器计算的内容哈希和哈希的父引用，以及可信调用者的父内容哈希。取消在异步解码/哈希阶段之间检查，然后进行原子缓存提交。

生产生产者仅在成功的视觉分析后重用已派生的代理帧，而不进行第二次视频下载/提取。它需要操作员 `modalityBridgeVideoDrilldownEnabled=true`、严格的每部分 `drilldown: true` 和经过认证的 API 密钥记录 ID。客户端声明的主体/会话值永远不会建立所有权。在没有满足所有三个条件的情况下，它不会哈希、调整大小或保留额外的帧。保留失败保留可用的视觉响应。已同意的请求绕过整个视频结果缓存，因此缓存结果永远不会重放句柄。

成功的 JSON 和 SSE 响应在有界的 `x-omniroute-video-drilldown` 头中最多暴露四个不透明句柄。授权的浏览器来源可以读取该头，而无需扩大 CORS 来源策略。新句柄使用 `v1.<32-byte random base64url token>`，注册表仅保留其 SHA-256 哈希。读取器/头解析器还接受遗留的 64-十六进制令牌。经过认证的公共消费者是 `GET /api/v1/video-bridge/drilldown?handle=...`，独立由 `modalityBridgeVideoDrilldownRemoteEnabled=true` 控制。显式持久化的 false 撤销访问，即使遗留的 `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` 环境回退已启用。生产保留具有类似的遗留 `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` 回退。两个回退默认关闭。

消费者从经过认证的密钥派生所有权，应用密钥策略，并对未知、过期和其他密钥的句柄返回相同的 404。它接受 `variant=preview|standard|detail`（最大 JPEG 尺寸 320/640/1280，绝不放大）、`limit=1..8`（或遗留的 `frames` 别名，绝不同时使用）、零基 `page` 和可选的 `start`/`end` 聚焦秒数。重复的查询键和反向聚焦窗口会被拒绝。每个返回的变体都有其实际内容和实际分辨率元数据的哈希，链接到保留的源。变体在读取时派生，而不是作为额外的保留副本存储。JSON 响应，包括 Base64/信封，限制为 32 MiB；超大页面返回 413，客户端必须请求更少的帧。读取在每次调整大小时检查取消，并在返回之前重新检查句柄有效性。由所有者执行的 `DELETE` 是幂等的；删除或 TTL 过期会释放保留的源和使用会计。

共享存储是进程本地的：句柄在重启时过期，并且不能在独立的 OmniRoute 进程之间转移。管理统计数据仅暴露有效的保留/远程策略和聚合的保留条目/字节，而不包括媒体、引用、主体 ID 或句柄。视频设置面板显示这些值，并可以持久化两个同意开关。此实施文档不是实时部署或推广证据；真实模型的接受情况单独跟踪。

帧按配置的视频模型顺序添加字幕。空的视频覆盖继承视觉设置；如果两者都为空，视觉自动路由器选择有效的视觉能力模型。成功的字幕用一个稳定的 `[Video description:` 前缀替换原始部分，该前缀还将文本标记为不可信的媒体衍生观察，并告知下游模型不要遵循媒体中找到的指令。帧字幕缓存键包括 JPEG 字节、提示、时间戳和有效模型；只有成功的字幕会被缓存。缓存条目保留实际的成功生产者模型，包括一个后备模型；当不同帧由不同模型生成时，桥接报告为 `mixed`。缓存命中重用该生产者身份，而不是将其重新标记为请求的路由计划。整个视频结果缓存的键基于每个改变输出的输入——提示、有效模型、采样策略、帧计数、语义分析模式、标准化焦点提示的 SHA-256 指纹、焦点窗口、`transcript`、`audioTranscript` 和联系表标志——因此更改任何这些维度都会导致缓存未命中，而不是过时的重用。视觉去重策略版本、阈值和有限候选帧计数也在结果缓存键和元数据中明确；因此，策略更改无法重用过时的整个视频描述。结果缓存 v4 元数据保留模式和指纹，而不保留原始用户任务。护栏元数据报告请求的和有效的分析模式；没有可用用户文本的请求 `focused` 模式被报告为有效的 `full`。

护栏提取每个支持的视频部分，但描述不超过 `modalityBridgeVideoMaxVideos`。对于被证明 `supportsVideo === false` 的目标，失败和超限的视频变成明确的安全文本标记，因此没有原始视频存活。当能力未知时，这些部分保持不变。具有 `supportsVideo === true` 的目标绕过桥接。客户端请求中止信号通过下载、代理队列、子进程和字幕调用传播；中止在视频之间停止，绝不会开放失败到原始媒体。

运行时设置是基于数据库的，并经过 Zod 验证：

| 键                                  | 默认值      | 范围 / 行为                                                                 |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | 可选运行时，选择加入                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` 保留通用字幕；`focused` 使用有限的不可信最新用户上下文               |
| `modalityBridgeVideoModel`          | `""`        | 继承视觉桥接模型                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`、`scene_aware` 或比例 `segment_aware`；检测器失败回退到 `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 毫秒                                                            |

遗留的持久视频超时值超过 120 秒被限制为代理截止时间；超过该限制的新设置写入将被拒绝。`GET /api/modality-bridge/video/runtime` 在身份验证或运行时探测之前需要受信任的回环本地性，然后需要管理身份验证。它仅返回 `available`、经过清理的 FFmpeg/ffprobe 版本，以及在运行时不可用时的固定原因。内部提取端点不是公共上传 API：队列饱和返回 `503` 加 `Retry-After`，调用者断开连接返回 `499`，固定代理截止时间返回 `504`。转换的响应在中央 `x-omniroute-modality-bridge` 头中添加 `video->text;model=<visionModel>;parts=<videos>`，而不移除视觉或音频部分。

### PII Masker (`piiMasker.ts`)

在 **两个** 阶段运行。

- **`preCall`** 克隆有效负载，遍历 `system`、`messages`、`input` 和 `prompt`（包括普通字符串项），并对字符串 `content`/`text` 字段应用 `processPII()`（来自 `@/shared/utils/inputSanitizer`）。当 `PII_REDACTION_ENABLED=true` 时，检测到的 PII 会在出站有效负载中被删除。这与 `INPUT_SANITIZER_MODE` 无关（后者仅控制提示注入策略）。当删除关闭时，调用记录检测计数而不重写内容。
- **`postCall`** 深度克隆响应，运行 `sanitizePIIResponse()` 以及响应 API 形状掩码器（`maskResponsesOutput` — 涉及 `output_text` 和 `output[].content[].text`）。如果发生任何删除，修改后的响应将替换原始响应。

护栏从不阻止；它仅注释（`meta.detections`、`meta.redacted`）或重写。

### Prompt Injection (`promptInjection.ts`)

检测用户提供内容中的对抗结构并执行配置的策略。行为由环境变量和构造函数选项驱动：

| 设置     | 环境变量                                                                                            | 默认值 | 效果                                                                                                                                      |
| -------- | --------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 启用     | `INPUT_SANITIZER_ENABLED`                                                                           | `true` | 当为 `false` 时，保护措施短路。                                                                                                           |
| 模式     | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                     | `warn` | 注入策略：`block`、`warn` 或 `log`。(`redact` 被接受用于向后兼容，但**不**会去除注入文本；请求 PII 重写由 `PII_REDACTION_ENABLED` 控制。) |
| 阻止阈值 | `blockThreshold` 选项 / `INPUT_SANITIZER_BLOCK_THRESHOLD`（别名 `INJECTION_GUARD_BLOCK_THRESHOLD`） | `high` | 阻止所需的最低严重性。默认情况下，中等严重性仅为观察。                                                                                    |

**模式优先级** (`getMode`): 调用者 `options.mode` →
`INJECTION_GUARD_MODE` **数据库功能标志覆盖**（仪表板 → 设置 →
功能标志）→ `INJECTION_GUARD_MODE` 环境变量 → `INPUT_SANITIZER_MODE` 环境变量 →
`warn`。因此，仪表板覆盖优先于环境变量，因此功能标志 UI 控制实时运行的保护措施（无需重启）。数据库读取是故障安全的：
如果出错，保护措施将回退到基于环境的行为，当没有设置覆盖时，行为与仅基于环境的解析相同。

检测来源：

1. `sanitizeRequest()` 来自 `@/shared/utils/inputSanitizer`（在管道中其他地方使用的共享检测器集）。
2. 内置的 `DEFAULT_GUARD_PATTERNS`（当前为 `system_override_inline` 和
   `markdown_system_block`，均为 `high` 严重性）。
3. 通过构造函数选项传递的可选 `customPatterns`（字符串、正则表达式，
   或 `{ name, pattern, severity }` 记录）。

当 `mode === "block"` **并且** 至少一个检测满足严重性阈值时，`preCall` 返回 `{ block: true, message: "请求被拒绝：检测到可疑内容" }`。在 `warn`/`log` 模式下，保护措施记录日志但允许调用。共享助手 `evaluatePromptInjection()` 也被导出
供需要评估提示而不通过注册表的调用者使用。

**扫描限制 (v3.8.20):** 检测器仅检查连接提示文本的 **前 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024`（16 384 字节）在
`src/shared/utils/inputSanitizer.ts` 中。`detectInjection()` 和
`evaluatePromptInjection()` 在运行模式循环之前都 `slice(0, MAX_INJECTION_SCAN_BYTES)`。注入指令位于输入的顶部附近，因此这限制了在多百 KB 负载上的正则表达式 CPU/GC，而不会削弱检测（参见 #3932, #4041）。

### 凭证掩码器 (`credentialMasker.ts`)

在 **两个** 阶段运行，默认链中的最后一个（优先级 `95`）。从出站负载（消息内容、工具调用参数、工具结果） **和** 提供者响应中去除
众所周知的 API 密钥 / 秘密令牌模式，因此粘贴到提示中的凭证（或由工具结果回显）不会泄露给上游提供者或返回给客户端。

- **仅限选择加入**，与 PII 去除相同的约定（硬规则 #20 邻近）：
  除非 `settings.credentialRedactionEnabled === true` **或**
  `CREDENTIAL_REDACTION_ENABLED=true`，否则默认禁用。关闭时，保护措施无操作 —
  它从不阻止，也从不重写。
- `redactCredentials()` 遍历完整的负载/响应树（`walkValue()`，
  原型污染安全，通过 `WeakSet` 循环安全）并用
  `[REDACTED:<type>]` 占位符替换匹配项，仅克隆实际更改的分支。
- `CREDENTIAL_PATTERNS` 涵盖 LLM 提供者密钥（OpenAI、OpenAI-proj、
  Anthropic、Google、Hugging Face、Replicate）、VCS/SaaS 令牌（GitHub、Slack、
  Linear、Notion、npm、Postman、Discord）、支付密钥（Stripe、Square）、云
  密钥（AWS 访问密钥、Twilio、SendGrid、Mailgun）、私钥 / JWT、
  包含凭证的连接字符串（`mongodb://user:pass@...` 等），以及
  通用的 `Authorization`/`x-api-key`/`api-key`/`apikey` 头值
  模式。头形密钥（`authorization`、`x-api-key`、`api-key`、
  `apikey`）是结构性去除（仅值，保留方案前缀如
  `Bearer `/`Basic `）而不是通过通用文本正则表达式去除。
- 保护措施从不阻止；它仅重写（`modifiedPayload` /
  `modifiedResponse`）并注释（`meta.credentialsRedacted`、`meta.count`）。

回归保护：`tests/unit/credential-masker-guardrail.test.ts`。

## 基础契约 (`base.ts`)

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
  block?: boolean; // true 会使链路短路
  message?: string; // 阻止时对外显示
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // 由 preCall 返回，用于重写请求
  modifiedResponse?: TValue; // 由 postCall 返回，用于重写响应
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

护栏通过返回 `void`、`{}` 或
`{ block: false }` 来表示“不做更改”。返回 `modifiedPayload`/`modifiedResponse` 会替换
链路中流向后续护栏的值。
`signal?: AbortSignal` 将调用方的生命周期传递到护栏中。请求中止是有意设计的故障开放例外：媒体桥会停止工作并进行清理，而不会将原始媒体恢复到一个已知不支持该媒体的目标中。

## 注册表 (`registry.ts`)

单例 `guardrailRegistry` 提供：

- `register(guardrail)` — 添加护栏（或按规范化名称替换已有护栏），并
  按 `priority` 升序重新排序。
- `clear()` / `list()` — 管理辅助方法。
- `runPreCallHooks(payload, context)` — 遍历处于活动状态的护栏，通过
  `modifiedPayload` 逐步传递负载，并在遇到第一个 `block: true` 时停止。
- `runPostCallHooks(response, context)` — 在响应侧执行相同流程。
- `resetGuardrailsForTests({ registerDefaults })` — 清除状态，并可选择
  重新注册默认护栏，以实现干净的测试隔离。

两个运行器都返回 `{ blocked, payload|response, results, guardrail?, message? }`，
其中 `results` 是一个 `GuardrailExecutionResult` 记录数组，包含
每个护栏的 `blocked`、`skipped`、`modified`、`error` 和 `meta` 字段，
可用于追踪。

### 按请求禁用护栏

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` 会汇总当前
请求中应跳过的护栏名称，并生成一个去重后的列表。来源如下（均为可选，且会全部合并）：

- `apiKeyInfo.disabledGuardrails`
- 请求体中的 `disabledGuardrails`（顶层）
- 请求体中的 `metadata.disabledGuardrails`
- 请求头 `x-omniroute-disabled-guardrails`（或旧版
  `x-disabled-guardrails`）

值可以是字符串数组，也可以是逗号分隔的字符串；名称会被
规范化为小写 kebab-case（`pii_masker` → `pii-masker`）。结果会通过
`context.disabledGuardrails` 传递给注册表，注册表会跳过
匹配的护栏（在 `results` 中标记为 `skipped: true`）。

## 执行顺序

对于流经 `src/sse/handlers/chat.ts` 和
`open-sse/handlers/chatCore.ts` 的每个请求：

1. `resolveDisabledGuardrails(...)` 根据 API 密钥、请求体和请求头构建跳过列表。
2. `guardrailRegistry.runPreCallHooks(body, ctx)` 按优先级升序运行护栏：
   - 已禁用的护栏会被记录为 `skipped`。
   - 每个护栏的 `preCall` 都可以通过 `modifiedPayload` 重写有效负载。
   - 首个 `block: true` 会使链短路，处理程序将返回护栏拒绝响应。
3. （可能已被重写的）有效负载进入组合路由和上游分发流程。
4. 响应组装完成后，`guardrailRegistry.runPostCallHooks(...)`
   会对响应运行相同的护栏链。此处的 `block: true` 会丢弃上游响应。

抛出异常的护栏会以 `error: <message>` 的形式记录，并通过
`logger.warn` 写入日志，但护栏链会继续运行——这是有意采用的故障开放设计。

## 配置

内置护栏读取的环境变量：

| 变量                                  | 使用方               | 效果                                                                         |
| ------------------------------------- | -------------------- | ---------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`   | 设置为 `false` 可完全禁用检测。                                              |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`   | 注入策略：`warn`、`block` 或 `log`。旧值 `redact` 不会重写注入文本。         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`   | 注入护栏的模式；同时也是一个会**覆盖**环境变量的数据库功能标志（DB > ENV）。 |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`   | `MODE=block` 拒绝请求的最低严重程度：`high`（默认）、`medium` 或 `low`。     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`   | `INPUT_SANITIZER_BLOCK_THRESHOLD` 的旧版别名。                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`         | 为 `true` 时，请求中的 PII 会被脱敏（与注入模式无关）。                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker`（下游） | 控制响应侧脱敏器的行为。                                                     |

Modality Bridge 护栏从数据库支持的设置存储
（`getSettings()`）中读取运行时配置，而不是环境变量。Vision 的主键为
`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、
`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、
`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、
`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、
`modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes` 和
`modalityBridgeCacheMaxEntries`。旧版
`visionBridge*` 键仅作为文档所述的单周期读取回退方案被接受；仪表板写入时使用主键。默认值和回退解析器位于
`src/shared/constants/modalityBridgeDefaults.ts`，旧版常量则保留在
`src/shared/constants/visionBridgeDefaults.ts` 中。

Audio 使用 `modalityBridgeAudioEnabled`、`modalityBridgeAudioModel`、
`modalityBridgeAudioTimeout` 和 `modalityBridgeAudioMaxClips`，以及共享的
`modalityBridgeCache*` 设置。Audio 没有旧版键回退机制，因为这些键是随 Modality Bridge 架构一起引入的。

Video 使用 `modalityBridgeVideoEnabled`、`modalityBridgeVideoAnalysisMode`、
`modalityBridgeVideoModel`、
`modalityBridgeVideoFrameCount`、`modalityBridgeVideoSamplingPolicy`、
`modalityBridgeVideoMaxVideos` 和
`modalityBridgeVideoTimeout`，以及共享的 `modalityBridgeCache*` 设置。
它默认处于禁用状态，因为 FFmpeg/ffprobe 是可选的运行依赖项，而帧描述还会增加延迟和模型成本。

## 自定义防护栏

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

步骤：

1. 创建 `src/lib/guardrails/myGuardrail.ts`，并扩展 `BaseGuardrail`。
2. 实现 `preCall` 和/或 `postCall`。
3. 可以在导入时注册（从 `registerDefaultGuardrails` 推送），也可以在运行时
   调用 `guardrailRegistry.register(...)`——注册表会替换规范化名称相同的
   任何已有防护栏。
4. 在 `tests/unit/` 下添加测试（现有示例：
   `tests/unit/guardrails-registry.test.ts`、
   `tests/unit/prompt-injection-guard.test.ts`、
   `tests/unit/guardrails/visionBridge.test.ts`）。

## 测试

在各测试之间使用 `resetGuardrailsForTests()`，以便从已知状态开始。
传入 `{ registerDefaults: false }` 可从空注册表开始，并且只注册待测试的
防护栏。Vision Bridge 支持依赖注入（`deps.getSettings`、`deps.callVisionModel`）；
Audio Bridge 为设置、能力、STT 模型选择、凭据检查和转录提供了
对应的注入点。因此，测试无需访问数据库或网络即可覆盖这两种流程。

## 另请参阅

- `src/lib/guardrails/` — 实现
- `src/shared/utils/inputSanitizer.ts` — 为提示词注入检测和 PII 脱敏提供支持的共享检测器
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge 默认值和强制桥接模型列表
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio 共享运行时默认值
- `docs/architecture/RESILIENCE_GUIDE.md` — 正交层（熔断器、冷却机制）
- `docs/reference/ENVIRONMENT.md` — 完整的环境变量参考

## 注入防护路由覆盖与红队测试（阶段 8 · 模块 D）

注入防护（`createInjectionGuard` / `withInjectionGuard`）覆盖所有
接受用户提示词的路由。它遵循 `INJECTION_GUARD_MODE`（默认值 `warn` = 仅记录日志；
`block` = 返回 HTTP 400 `SECURITY_001`）。

| 类型         | 路由                                                                                                                                                 | 默认模式 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 文本（现有） | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn     |
| 生成式       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn     |
| 数据         | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn     |

文本提取（`extractMessageContents`）覆盖 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`。

**红队测试（每晚运行，`nightly-llm-security.yml`）：** promptfoo 验证每条路由在
`INJECTION_GUARD_MODE=block` 模式下都会阻止 OWASP-LLM 语料库中的内容；garak
运行探测（无密钥时跳过）。为保持一致性，`moderations` 也包含在内——使用阻止模式的
运维人员可通过 `resolveDisabledGuardrails` 将其豁免。

每晚运行的工作流（`.github/workflows/nightly-llm-security.yml`，定时任务 + 手动
触发）包含两个作业：

- **`promptfoo-guard`（阻断性）** — 使用 `INJECTION_GUARD_MODE=block` 运行
  `promptfoo eval -c promptfooconfig.yaml`。每个对抗性测试用例（例如“忽略之前的
  所有指令……”、DAN 风格的越狱）都会断言响应包含
  `error.code === "SECURITY_001"`，即防护确实拒绝了该请求。
- **`garak`（建议性）** — 针对本地 OmniRoute 实例
  （`http://localhost:20128/v1`）运行 garak
  `--probes promptinject,dan,leakreplay`。该作业以提供者密钥
  （`PROMPTFOO_PROVIDER_KEY`）作为执行条件；缺少密钥时会正常跳过，并以
  `|| true` 结尾，因此它只报告结果，不会导致 CI 失败。

防护辅助函数（`createInjectionGuard` / `withInjectionGuard`）覆盖每个包含提示词的
`/v1` 路由；提示词文本由 `src/shared/utils/inputSanitizer.ts` 中的
`extractMessageContents()` 从 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
中提取。
