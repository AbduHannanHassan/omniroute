# Guardrails (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **แหล่งข้อมูลหลัก:** `src/lib/guardrails/`
> **อัปเดตล่าสุด:** 2026-08-29 — v3.8.51 (ที่มาของทรานสคริปต์ Video Bridge ถูกประกาศโดยผู้เรียก
> และยังไม่ได้รับการตรวจสอบโดยเซิร์ฟเวอร์ — ชี้แจงตาม #11661)

Guardrails บังคับใช้มาตรการด้านความปลอดภัย นโยบาย และการแปลงเนื้อหาที่ขอบเขต
ระหว่าง OmniRoute กับผู้ให้บริการต้นทาง Guardrail แต่ละตัวสามารถตรวจสอบ (และ
เลือกที่จะปฏิเสธ แปลง หรือใส่คำอธิบายประกอบ) เพย์โหลดคำขอ (`preCall`) และ
การตอบกลับจากต้นทาง (`postCall`)

ระบบนี้เป็นแบบ **fail-open**: หาก Guardrail เกิดข้อผิดพลาดขณะทำงาน รีจิสทรี
จะบันทึกข้อผิดพลาดและดำเนินการต่อด้วย Guardrail ตัวถัดไป แทนที่จะทำให้
คำขอล้มเหลว การบล็อกต้องเกิดจากการตัดสินใจอย่างชัดเจน (`block: true`) ไม่ใช่เหตุบังเอิญ

## การป้องกันในตัว

รีจิสตรีจะโหลดการป้องกันหกตัวตามลำดับความสำคัญโดยอัตโนมัติเมื่อมีการนำเข้า
(ดูที่ `registry.ts` → `registerDefaultGuardrails()`):

| ความสำคัญ | ชื่อ                | ขั้นตอน(s)     | ไฟล์                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

หมายเลขความสำคัญที่ต่ำกว่าจะทำงาน **ก่อน**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

ดักจับคำขอที่มีภาพซึ่งมุ่งเป้าไปที่ **โมเดลที่ไม่ใช่ภาพ** และ
เปลี่ยนเส้นทางคำขอทั้งหมดไปยังโมเดลที่รองรับภาพหรือแทนที่ส่วนที่เป็นภาพ
ด้วยคำอธิบายข้อความที่สร้างโดยโมเดลภาพที่สามารถกำหนดค่าได้ก่อน
การเรียกขึ้นต้น นี่ทำให้ผู้ให้บริการที่มีเฉพาะข้อความสามารถจัดการ
ข้อมูลหลายรูปแบบได้อย่างโปร่งใส

การไหล:

1. ข้ามหากโมเดลเป้าหมายรองรับภาพอยู่แล้ว (เว้นแต่จะปรากฏใน
   รายการบังคับ `isVisionBridgeForcedModel`).
2. ดึงส่วนที่เป็นภาพผ่าน `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ซึ่งมอบหมายให้กับ **ตัวตรวจจับสื่อ
   ที่รวมกัน** `detectMediaParts()` ใน `open-sse/utils/mediaParts.ts` — แหล่งข้อมูลเดียวที่ใช้ร่วมกันกับตัวกรองความเข้ากันได้แบบรวม.
   การดึงข้อมูลจะอนุญาตให้เฉพาะส่วนระดับสูงสุดของรูปทรง
   `replaceImageParts` สามารถนำกลับมาใช้ใหม่ได้ (สัญญา extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, และ Responses API `input_image`. การตีที่ซ้อนกันและ
   รูปทรงที่เป็นเพียงตัวบ่งชี้จะเป็นวัสดุสำหรับตัวกรองแบบรวมและจะไม่ถูกดึงออก.
   ข้ามหากไม่พบ.
3. แก้ไขการตั้งค่ารันไทม์ผ่าน `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): คีย์การตั้งค่าใหม่ `modalityBridge*`
   จะชนะ; คีย์ `visionBridge*` แบบเก่ายังคงเป็น **การสำรองข้อมูลรอบเดียว**
   (หน้าต่างย้อนกลับ). ข้ามก่อนการเดินทางสื่อใด ๆ เมื่อสะพานถูกปิดใช้งาน.
4. ตัวเลือกโหมด (`modalityBridgeVisionMode`, ดูตารางด้านล่าง) ตัดสินใจ
   ว่าจะเปลี่ยนเส้นทางหรืออธิบาย. การเปลี่ยนเส้นทางจะส่งคืน `modifiedPayload` โดยมีเพียง `model`
   ที่ถูกสลับ, พร้อมเมตา `{ rerouted, fromModel, toModel, imagesKept }`.
5. เส้นทางการอธิบาย: จำกัดภาพที่ `maxImages`, รวบรวมคำสั่งที่ตระหนักถึงงาน,
   ปรึกษาคำอธิบายแคช, เรียกโมเดลภาพ **พร้อมกัน**
   (`Promise.allSettled`), และแทรกส่วนข้อความ `[Image N]: <description>` ใน
   ที่ของพวกเขา. การอธิบายที่ล้มเหลวจะให้ `null` และส่วนภาพต้นฉบับจะ
   **ถูกเก็บรักษา** (#4012) — ยกเว้นในเส้นทางการอธิบายแบบรวมเมื่อการ
   อธิบายทั้งหมดล้มเหลว, ซึ่งจะทำให้การเรียกขึ้นต้นที่ไม่ใช่ภาพได้รับ
   stub `(unavailable — no vision-capable provider connected)` แทน (#8430).
6. ส่งคืน `modifiedPayload` + เมตา (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### ตัวเลือกโหมด (`modalityBridgeVisionMode`)

| โหมด       | ค่าเริ่มต้น | พฤติกรรม                                                                                                                                                                                                                                                |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | อัลกอริธึมแบบเก่า, ไม่ถูกแตะต้อง (#6640/#7204): โมเดลที่ไม่ใช่แบบรวม/`auto/` จะเปลี่ยนเส้นทางไปยังโมเดลภาพที่ดีที่สุด เว้นแต่โมเดลต้นฉบับจะมีข้อมูลประจำตัวที่ใช้งานได้ (จากนั้นจะอธิบาย); เป้าหมายแบบรวมจะต้องอธิบายเสมอ.                              |
| `describe` |             | อธิบายเสมอ — บล็อกการเปลี่ยนเส้นทางจะถูกข้ามโดยสิ้นเชิง; โมเดลที่ผู้ใช้เลือกจะตอบเสมอ.                                                                                                                                                                  |
| `reroute`  |             | บังคับเปลี่ยนเส้นทาง: การป้องกันโมเดลที่มีข้อมูลประจำตัวจะถูกข้าม. การป้องกันข้อมูลประจำตัวของการเปลี่ยนเส้นทาง-**เป้าหมาย** ยังคงใช้ — เมื่อไม่มีเป้าหมายภาพที่ใช้งานได้ คำขอจะตกไปที่การอธิบายเพื่อให้ภาพดิบไม่ถึงแบ็คเอนด์ที่มีเฉพาะข้อความ (#8430). |

โหมดที่บังคับจะทำงาน **ก่อน** ที่อัลกอริธึมอัตโนมัติจะทำงาน; พฤติกรรม `auto`
จะเหมือนกันกับการป้องกันก่อน PR-1.

#### คำสั่งอธิบายที่ตระหนักถึงงาน (`modalityBridgeVisionTaskAware`)

ค่าเริ่มต้น **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) จะเพิ่ม
ข้อความของ **ข้อความผู้ใช้ล่าสุด** (ตัดให้เหลือ 500 ตัวอักษร) ลงในคำสั่งอธิบายพื้นฐาน,
ชี้นำคำอธิบายไปยังสิ่งที่ผู้ใช้ถามจริง ๆ (รูปแบบ codex-vision-proxy) และขอให้โมเดลภาพถอดความ
ข้อความที่มองเห็นได้. หากไม่มีการเปิดใช้งานธง — หรือไม่มีข้อความจากผู้ใช้ — คำสั่งพื้นฐานจะถูกใช้โดยไม่มีการเปลี่ยนแปลง.

การเรียกใช้คำอธิบายของ self-loop ของตัวเองที่เข้ากันได้กับ OpenAI (`callVisionModelSingle()` ใน `visionBridgeHelpers.ts`) จะขอ `image_url.detail: "high"` เสมอ — โดยไม่มีเงื่อนไข สำหรับผู้เรียกใช้/ผู้ให้บริการทุกคน ไม่ได้ขึ้นอยู่กับสัญญาณจากลูกค้าใดๆ การสุ่มตัวอย่างที่มีรายละเอียดต่ำจะลดความแม่นยำของ OCR สำหรับงานการถอดข้อความที่คำสั่งนี้ขอมา ดังนั้นการเรียกใช้คำอธิบายจึงขอรายละเอียดสูงเสมอโดยไม่คำนึงถึงระดับรายละเอียดที่คำขอเข้ามาใช้ การเปลี่ยนแปลงนี้มีผลต่อเนื้อหาของคำขอภายในเท่านั้น; ไม่ได้เปลี่ยนวิธีที่ OmniRoute ส่งต่อ `image_url.detail` ของผู้เรียกใช้ในคำขอหลัก — ค่าดีฟอลต์จะถูกนำไปใช้แยกต่างหาก และเฉพาะสำหรับลูกค้า OpenCode ที่ตรวจพบใน `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) สาขาฟอร์แมตสายของ Anthropic ของ self-loop คำอธิบายไม่มีฟิลด์ `detail` และไม่ได้รับผลกระทบจากค่าดีฟอลต์ใดๆ

#### ขีดจำกัดผลลัพธ์ของคำอธิบาย (`modalityBridgeVisionMaxChars`)

| คีย์                           | ค่าเริ่มต้น | ช่วง               |
| ------------------------------ | ----------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`         | `0` หรือ 100–50000 |

`0` (ค่าเริ่มต้น) หมายถึง **ไม่มีขีดจำกัด** — คำอธิบายที่ส่งคืนโดย `callVisionModel()` จะถูกส่งผ่านโดยไม่เปลี่ยนแปลง รักษาพฤติกรรมที่มีอยู่ไว้ ค่าใดๆ ในช่วง 100–50000 จะตัดคำอธิบายด้วย `…` ต่อท้ายก่อนที่จะถูกตัดกลับเป็น `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` ใน `src/lib/guardrails/visionBridge.ts`) เพิ่มค่านี้สำหรับงาน OCR ที่มีรายละเอียดมากซึ่งโมเดลด้านล่างต้องการการถอดข้อความทั้งหมด; ลดมันเพื่อจำกัดการใช้โทเค็นในโมเดลวิสัยทัศน์ที่พูดคุยกันมาก ฟิลด์แดชบอร์ดอยู่ในแผงขั้นสูงของแท็บวิสัยทัศน์ (`modality-bridge-max-chars` ใน `ModalityBridgeVisionTab.tsx`) และจำกัดค่าทุกค่าระหว่าง 1 ถึง 99 ให้ถึง 100 ในขณะที่ปล่อยให้ `0` ที่ชัดเจนไม่ถูกแตะต้อง — `0` เป็นค่าที่ถูกต้องของ Zod ในตัวมันเอง (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ไม่ใช่เพียงแค่ค่าดีฟอลต์ที่ "ไม่ได้ตั้งค่า"

#### แคชคำอธิบาย (`modalityBridge/bridgeCache.ts`)

แคช LRU + TTL ในหน่วยความจำสำหรับผลลัพธ์ของคำอธิบาย แบ่งปันทั่วทั้งกระบวนการ คีย์ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` โดยมีการจัดกรอบความยาวพรีฟิก (ไม่มีการชนกันของขอบเขตฟิลด์) ส่วนประกอบโมเดลคือโมเดลบริดจ์ที่ **กำหนดค่า** ไม่ใช่โมเดลที่ตอบจริง — `callVisionModel` อาจย้อนกลับภายใน และการสร้างคีย์ต่อการพยายามจะทำให้แคชแตกเป็นชิ้นๆ คำอธิบายที่ล้มเหลวจะไม่ถูกเก็บในแคช การตั้งค่า:

| คีย์                            | ค่าเริ่มต้น | ช่วง    |
| ------------------------------- | ----------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`      | —       |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000 |

#### การทำให้ภาพระยะไกลเป็นมาตรฐาน (self-loop describe/base64 fetch)

เมื่อบริดจ์ดึงภาพ **ระยะไกล** เอง — การเรียกใช้คำอธิบายของ Anthropic และการแปลง base64 ของฟอร์แมต claude-wire (`ensureBase64ImagesForClaudeWire`), ทั้งสองผ่าน `fetchRemoteImageAsDataUri()` ใน `visionBridgeHelpers.ts` — URI ข้อมูลที่ได้จะถูกส่งผ่าน `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) ก่อนที่จะถูกฝังในคำขอโมเดลวิสัยทัศน์ ภาพที่มีขนาดใหญ่เกินไปจะถูกปรับขนาดให้มี **ขอบยาว 2048px** (ตรงกับขีดจำกัดการปรับขนาดที่ OpenAI/Anthropic ใช้แล้วที่ฝั่งเซิร์ฟเวอร์) ซึ่งลดขนาดการอัปโหลด/ความหน่วงเวลาโดยไม่เปลี่ยนสิ่งที่โมเดลวิสัยทัศน์เห็น การปรับขนาดใช้ `sharp` ซึ่งโหลดผ่านการนำเข้าแบบไดนามิก: บนแพลตฟอร์มที่ไบนารีพื้นเมืองของมันไม่สามารถโหลดได้ `normalizeDataUri()` **จะไม่โยนข้อผิดพลาด** — มันจะย้อนกลับไปยังการส่งผ่านของไบต์ต้นฉบับ ดังนั้นเส้นทางการอธิบาย/การแปลง base64 จะทำงานต่อไป ภาพที่ไม่ใช่ภาพ (การดึงที่ไม่คืนค่าภาพที่สามารถถอดรหัสได้) จะถูกส่งผ่านโดยไม่เปลี่ยนแปลง การทำให้เป็นมาตรฐานนี้มีขอบเขตเฉพาะสำหรับภาพที่บริดจ์ดึงสำหรับการเรียกใช้ของตัวเอง — จะไม่ถูกนำไปใช้กับข้อมูลดิบที่ส่งผ่านของผู้เรียกใช้ ซึ่งสอดคล้องกับหลักการการเปลี่ยนแปลงที่เลือกใช้เท่านั้น (Hard Rule #20)

#### โครงสร้างการตั้งค่า + การโยกย้าย

คีย์ใหม่ `modalityBridge*` จะถูกตรวจสอบโดย Zod ใน `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, กลุ่ม `modalityBridgeCache*` สามตัว และกลุ่ม `modalityBridgeAudio*` ที่ใช้โดย Audio Bridge การโยกย้าย `141_modality_bridge_settings.sql` จะคัดลอกค่าที่มีอยู่ใน legacy `visionBridge*` ไปยังคีย์ใหม่ที่ตรงกัน (idempotent, ไม่เคยเขียนทับค่า `modalityBridge*` ที่ตั้งค่าโดยผู้ดำเนินการ); คีย์ legacy ยังคงได้รับการยอมรับเป็นการสำรองข้อมูลอ่านสำหรับหนึ่งรอบการเผยแพร่

#### ส่วนหัวความโปร่งใส + สถิติ

การตอบสนองที่ถูกแปลงโดยคำอธิบายจะมี `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (สร้างโดย `buildModalityBridgeHeader()` ใน `modalityBridge/bridgeStats.ts`, ประทับโดย `withModalityBridgeHeader()` ใน `src/sse/handlers/chatHelpers.ts`) คำขอที่ถูกเปลี่ยนเส้นทางจะไม่มีส่วนหัว — ข้อมูลที่ส่งผ่านไม่ได้ถูกแตะต้องและการเปลี่ยนโมเดลนั้นมองเห็นได้แล้วในฟิลด์ `model` ของเนื้อหาการตอบสนอง

`GET /api/modality-bridge/stats` (การรับรองความถูกต้องของการจัดการ, ชั้นเดียวกับ `GET /api/settings`) จะส่งคืนเคาน์เตอร์ต่อโมดัลในหน่วยความจำ `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` สำหรับ `vision`, `audio`, และ `video` ค่า `averageLatencyMs` ใช้ `latencySamples`, ไม่ใช่การพยายามทั้งหมด เป็นตัวหาร; การดำเนินการที่ไม่มีการจับเวลาไม่สร้างตัวอย่างศูนย์มิลลิวินาที ค่า `bridged` ยังคงเป็นนามแฝงที่เข้ากันได้ย้อนหลังสำหรับการแปลงที่ประสบความสำเร็จ; การพยายามที่ล้มเหลวจะไม่เพิ่มค่าเคาน์เตอร์นี้ เคาน์เตอร์จะถูกรีเซ็ตเมื่อกระบวนการเริ่มต้นใหม่ตามการออกแบบ (การตรวจสอบ, ไม่ใช่การบัญชี)

#### การกำหนดค่าของแดชบอร์ด

หน้าดashboard ที่กำหนดเฉพาะคือ
`/dashboard/settings/modality-bridge` ที่อยู่ URL ของแท็บ `Vision`, `Audio` และ `Video` จะรักษาพารามิเตอร์การค้นหาในขณะที่เปลี่ยนค่า `tab` แท็บ Vision จะแสดงการเปิดใช้งาน, โหมด, การเลือกโมเดล (รวมถึงค่าเริ่มต้นอัตโนมัติ), การกระตุ้นที่รู้จักงาน, ขีดจำกัดเวลา/ภาพ/ความยาวคำอธิบาย/แคชขั้นสูง, ตัวนับเวลาทำงาน, และคำขอตัวอย่างที่มีการป้องกัน แท็บ Audio ก็ใช้งานได้เช่นกัน: มันแสดงการเปิดใช้งาน, ตัวเลือกโมเดล STT เท่านั้นที่มี Auto, ขีดจำกัดเวลา/คลิปสูงสุด, ตัวนับเสียง, และการทดสอบตัวอย่าง `input_audio` แท็บ Video ทำงานได้: มันรายงานสถานะการทำงานของ FFmpeg/ffprobe — หนึ่งในสี่สถานะ UI ที่ชัดเจน (`unknown` ขณะที่การตรวจสอบอยู่ในระหว่างการบินหรือไม่สามารถทำได้, `restricted` บนโฮสต์แดชบอร์ดที่ไม่ใช่ loopback ซึ่งการตรวจสอบถูกข้ามที่ฝั่งไคลเอนต์, `unavailable` เมื่อถูกตรวจสอบและยืนยันว่าขาดหายไป, หรือ `available` พร้อมกับเวอร์ชัน FFmpeg/ffprobe) — รักษาขีดจำกัดการเปิดใช้งาน/โมเดล/เฟรม/วิดีโอ/เวลา, กรองตัวเลือกโมเดลให้เป็นโมเดลที่สามารถมองเห็นได้, และแสดงตัวนับวิดีโอ

การ์ด Vision Bridge ก่อนหน้านี้ภายใต้การตั้งค่า AI เป็นลิงก์ความเข้ากันได้ไปยังหน้าที่ใหม่; มันไม่เป็นเจ้าของสำเนาที่สองของฟอร์มอีกต่อไป ผู้ให้บริการสื่อยังเชื่อมโยงการทำงาน Image-to-Text และ Speech-to-Text ไปยังแท็บ Modality Bridge ที่เกี่ยวข้องโดยไม่ลบสนามเด็กเล่น Speech-to-Text ที่มีอยู่

**การข้ามการอนุญาตแบบวนซ้ำ:** เมื่อการเรียกคำอธิบายถูกส่งผ่านการวนซ้ำ `/v1` ของ OmniRoute (โมเดลผู้ให้บริการที่ไม่เป็นมาตรฐาน), การร้องขอย่อยจะส่ง `x-omniroute-admission-bypass: internal` และได้รับการตรวจสอบด้วยข้อมูลประจำตัวการวนซ้ำที่แก้ไขแล้ว — sentinel `sk_omniroute` ในโหมดท้องถิ่น, หรือคีย์ env ที่กำหนดโดยผู้ดำเนินการ `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350) ดังนั้นการปรับใช้ `REQUIRE_API_KEY=true` ยังคงสามารถเรียกคำอธิบายได้ การข้ามจะได้รับการเคารพเฉพาะสำหรับข้อมูลประจำตัวที่แน่นอนเหล่านั้น ดังนั้นลูกค้าภายนอกจึงไม่สามารถใช้ส่วนหัวเพื่อข้ามการอนุญาตได้

ค่าเริ่มต้นแบบเก่าจะอยู่ใน `src/shared/constants/visionBridgeDefaults.ts`; ค่าเริ่มต้นใหม่/ที่รู้จักงาน/แคชและตัวแก้ไขการตั้งค่าอยู่ใน `src/shared/constants/modalityBridgeDefaults.ts` การ์ดป้องกันแสดงตัวเลือกตัวสร้าง `deps` เพื่อให้การทดสอบสามารถฉีด `getSettings` และ `callVisionModel` ที่ปลอมได้

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

ดักจับคำขอแชทที่มีเสียงก่อนที่จะถึงเป้าหมายที่ไม่รู้จักว่าเป็นผู้รับเสียง มันไม่เปลี่ยนเส้นทางคำขอแชท: ส่วนเสียงจะถูกถอดความผ่านจุดสิ้นสุด multipart ที่เข้ากันได้กับ OpenAI ที่มีอยู่และโมเดลแชทที่เลือกจะดำเนินการต่อด้วยการถอดความเป็นข้อความ

การไหล:

1. แก้ไข `supportsAudio` ผ่าน `getResolvedModelCapabilities()` เมตาดาต้าของการลงทะเบียนผู้ให้บริการที่ชัดเจนจะชนะ, จากนั้นเมตาดาต้าของโมเดลแบบสถิติ, จากนั้น `modalities_input` ที่ซิงค์ รายการข้อมูลนำเข้าที่ประกาศโดยไม่มี `audio` จะเป็น `false`; ไม่มีหลักฐานความสามารถจะยังคงเป็น `null` ทั้ง `false` และ `null` จะเปิดใช้งานสะพานอนุรักษ์นิยม ในขณะที่ `true` จะข้ามมัน
2. แก้ไขการตั้งค่า `modalityBridgeAudio*` และดึงส่วนเสียงระดับสูงที่สามารถตัดต่อได้จากทุกข้อความผ่านตัวตรวจจับ `detectMediaParts()` ที่ใช้ร่วมกัน รูปร่างสายที่รองรับคือ OpenAI `input_audio`, `audio_url`, และ `source.media_type: "audio/*"` เสียงที่ซ้อนกันจะถูกตรวจจับเพื่อการจัดเส้นทางแต่ไม่ถูกลบโดยเส้นทางการตัดต่อ งานจะถูกจำกัดโดย `modalityBridgeAudioMaxClips`; ส่วนที่ตามมาจะยังคงไม่ถูกแตะต้อง
3. เคารพ `provider/model` ที่กำหนดไว้, หรือให้ `selectAudioBridgeModel()` เดินผ่าน `AUDIO_TRANSCRIPTION_PROVIDERS` ในลำดับแคตตาล็อกที่เสถียรและเลือกโมเดลแรกที่มีข้อมูลประจำตัวผู้ให้บริการที่ใช้งานได้
4. `callAudioTranscription()` แปลงเสียง base64/data-URI เป็น multipart `file`, หรือดาวน์โหลด `audio_url` ระยะไกลผ่านการ์ดป้องกันที่ออกสู่สาธารณะเท่านั้นพร้อมการปักหมุด DNS และขีดจำกัด 25 MB จากนั้นจะ POST ไฟล์และโมเดลที่เลือกไปยังการวนซ้ำ `/v1/audio/transcriptions` ในท้องถิ่น โดยได้รับการตรวจสอบด้วย `resolveSelfLoopBearer()` เส้นทางการถอดความที่มีอยู่จะทำการค้นหาข้อมูลประจำตัวตามปกติ, การจัดการเวลาพัก/จำกัดอัตรา, และการส่งมอบผู้ให้บริการ
5. การเรียกที่สำเร็จจะเปลี่ยนส่วนของพวกเขาเป็น `[Audio N]: <transcript>` การเรียกจะทำงานด้วย `Promise.allSettled`: ความล้มเหลวแต่ละรายการจะรักษาส่วนเสียงเดิม (#4012 สัญญา) หากการเรียกล้มเหลวทั้งหมดและเป้าหมายถูกพิสูจน์ว่า `supportsAudio === false`, ส่วนจะกลายเป็น
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 สัญญา) สำหรับเป้าหมายที่ไม่รู้จัก (`null`), ผลลัพธ์ที่ล้มเหลวทั้งหมดจะยังคงไม่ถูกแตะต้อง เป้าหมายที่พิสูจน์แล้วว่าเป็นข้อความเท่านั้นโดยไม่มีข้อมูลประจำตัว STT ที่ใช้งานได้จะได้รับ stub ที่ชัดเจนเดียวกันโดยไม่ต้องเรียกเครือข่าย

การถอดความที่สำเร็จจะใช้แคช Modality Bridge LRU/TTL ทั่วทั้งกระบวนการ คีย์จะรวมการอ้างอิงเสียง, ป้ายชื่อการดำเนินการ `audio-transcription` ที่เสถียร, และโมเดล STT ที่เลือก; ความล้มเหลวจะไม่ถูกเก็บไว้ในแคช ความพยายามเสียงจะอัปเดตตัวนับ `bridged`, `cacheHits`, `failures`, และ `lastUsedAt` ที่ใช้ร่วมกัน การตอบสนองที่แปลงแล้วจะมี
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; คำขอที่ไม่ถูกแตะต้องจะไม่ได้รับส่วน Audio Bridge

การตั้งค่าเวลาทำงานจะถูกสนับสนุนโดยฐานข้อมูลและตรวจสอบโดย Zod:

| คีย์                          | ค่าเริ่มต้น | ช่วง             |
| ----------------------------- | ----------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                |
| `modalityBridgeAudioModel`    | `""`        | Auto หรือ STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10             |

แคชที่ใช้ร่วมกันยังคงถูกควบคุมโดย `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, และ `modalityBridgeCacheMaxEntries`

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

#### FU-07 structural segment evidence

`segment_aware` uses one bounded pre-analysis pass over the already validated
local video stream. The fixed filter chain first scales to at most 320 pixels
wide, detects scene changes and frozen intervals, then samples at 1 frame per
second for blur, average luma, and spatial/temporal information. The pass is
limited to 600 structural samples, one FFmpeg/filter thread, the same
`file`-only protocol and container allowlists, a 1 MiB process-output bound,
and at most 30 seconds inside the broker's shared abort/deadline. It never
accepts a command, filter, path, or URL from the request.

ค่าทางโครงสร้างเป็นหลักฐานการสุ่มที่แน่นอน ไม่ใช่การเข้าใจวิดีโอเชิงความหมาย พวกเขาไม่อนุมานหัวข้อ การกระทำ คำบรรยาย การพูด หรือเจตนาของผู้ใช้ ขอบเขตของฉากและการหยุดชั่วคราวจะสร้างส่วนต่าง ๆ; การครอบคลุมการหยุดชั่วคราว ความเบลอ การเปิดรับแสง รายละเอียดเชิงพื้นที่ และการเปลี่ยนแปลงตามเวลา จะมีอิทธิพลต่อวิธีการจัดสรรงบประมาณ 1–16 เฟรมที่มีอยู่ ส่วนที่ถูกหยุดชั่วคราวทั้งหมดจะถูกจำกัดที่หนึ่งเฟรม ในขณะที่ส่วนที่ไม่ถูกหยุดชั่วคราวจะแข่งขันกันเพื่อแย่งงบประมาณที่เหลืออยู่ เมื่อขอบเขตมีจำนวนมากกว่าเฟรม การครอบคลุมไทม์ไลน์แบบสม่ำเสมอจะถูกเก็บรักษาไว้ ดังนั้นการตัดที่รวดเร็วในช่วงต้นจึงไม่สามารถซ่อนส่วนที่ยาวนานได้ ขอบเขตของฉากภายในความละเอียดการวิเคราะห์ 1 วินาทีของขอบเขตการหยุดชั่วคราวจะถูกรวมเข้าด้วยกัน

การขาดฟิลเตอร์ หลักฐานที่ไม่ถูกต้อง/ว่างเปล่า ข้อผิดพลาดของตัวตรวจจับ หรือการหมดเวลาในการวิเคราะห์ล่วงหน้าที่ถูกจำกัดจะล้มเหลวในการเปิดไปยังนโยบายจุดกึ่งกลางที่สม่ำเสมออย่างแน่นอน การยกเลิกของผู้เรียกหรือกำหนดเวลาของนายหน้าจะไม่ล้มเหลวในการเปิด: จะยุติการทำงานของกระบวนการย่อยที่กำลังดำเนินอยู่ ป้องกันไม่ให้มีการดึงเฟรมในภายหลัง และต้นไม้ชั่วคราวส่วนตัวจะถูกลบใน `finally`

`scripts/perf/video-bridge-fu07-eval.ts` สร้างฟิกเจอร์ FFmpeg ที่แน่นอนสำหรับการประหยัดการเรียกคำบรรยายหลังการลบซ้ำ การจัดสรรงบประมาณการเคลื่อนไหวหนา หลักฐานความเบลอ/การเปิดรับแสง/SI-TI การตัดที่รวดเร็วพร้อมหางยาว และผลบวกเท็จที่ค่อยเป็นค่อยไป มันบันทึกเวลาที่ใช้ในการวิเคราะห์ล่วงหน้า และเมื่อ `/usr/bin/time` มีอยู่ จะบันทึก CPU ของลูกและ RSS สูงสุด การตรวจสอบคุณภาพของมันเป็นเพียงออราเคิลเชิงโครงสร้าง คุณภาพของโมเดลคำบรรยายจริงยังคงอยู่ที่ `HOLD` เนื่องจากอุปกรณ์นี้ไม่มีจุดสิ้นสุดที่ได้รับอนุญาตหรือผู้ตัดสินที่ถูกหยุดชั่วคราว การประหยัดเงินก็ยังคงอยู่ที่ `HOLD` เว้นแต่ `--caption-cost-per-call-usd` จะให้การประมาณการเชิงบวกที่ชัดเจนต่อการเรียก; สคริปต์จะไม่สร้างผลลัพธ์ใด ๆ

แต่ละเฟรมถูกจำกัดที่ 4 MiB เฟรมดิบทั้งหมดรวมกันเป็น 23 MiB และการตอบสนองของนายหน้าที่ถูกจัดเรียงเป็น 32 MiB ไดเรกทอรีชั่วคราวส่วนตัวจะถูกลบใน `finally` OmniRoute ไม่รวม FFmpeg และไม่รับเส้นทางที่สามารถเรียกใช้ได้เอง ก่อนการบรรยาย สะพานจะใช้การลบซ้ำทางสายตาที่อนุรักษ์นิยม: JPEG แต่ละตัวจะถูกลดขนาดลงเป็นบัฟเฟอร์สีเทา 16×16 และจะถูกเปรียบเทียบเฉพาะกับเฟรมสุดท้ายที่เก็บรักษาไว้ สำหรับงบประมาณคำบรรยายที่ร้องขอเกินหนึ่งเฟรม การดึงข้อมูลจะจัดเตรียมกลุ่มผู้สมัครที่ถูกจำกัดสูงสุดถึงสองเท่าของงบประมาณนั้นและไม่เกิน 16 เฟรม งบประมาณที่ร้องขอจะถูกนำไปใช้เฉพาะหลังจากการลบซ้ำ โดยผู้สมัครที่เลือกครั้งแรกและสุดท้ายจะถูกเก็บรักษาไว้ในระหว่างการลดขนาดสุดท้ายเมื่อมีงบประมาณอย่างน้อยสอง นโยบาย `grayscale-16x16-mean-cells-v2` ที่มีเวอร์ชันจะใช้ค่าเฉลี่ยของลูมาดีลตาที่ใหญ่กว่าหรืออัตราส่วนของเซลล์ภาพขนาดย่อที่มีดีลตาที่ปรับมาตรฐานอย่างน้อย 0.05 เกณฑ์การซ้ำคือค่าคงที่ 0.04 ซึ่งเลือกเพื่อความคาดเดาได้มากกว่าที่จะเปิดเผยเป็นการตั้งค่าเวลาทำงาน สัญญาณที่มีความเปรียบต่างสูงนี้จะรักษาการเคลื่อนไหวเล็กน้อยและการเปลี่ยนแปลงข้อความที่มองเห็นได้ซึ่งการเปรียบเทียบเฉพาะค่าเฉลี่ยอาจซ่อนอยู่ ข้อผิดพลาดของตัวเปรียบเทียบหรือตัวถอดรหัสจะล้มเหลวในการเปิดและรักษาการครอบคลุม เมตาดาต้าขาออกจะแยกผู้สมัครที่ถูกดึงออก เฟรมที่ใช้งานได้สำเร็จ และการซ้ำซ้อนทางสายตาที่ถูกทิ้ง

ส่วนวิดีโอที่ถูกทำเครื่องหมายอย่างชัดเจนอาจขอแผ่นติดต่อที่มีการระบุเวลา สะพานจะสร้างกริด JPEG สูงสุด 4 คอลัมน์ 16 เฟรม เซลล์ขนาด 512 พิกเซลแต่ละเซลล์จะบันทึกเวลาแหล่งที่มาลงในแถบด้านล่างที่มีความเปรียบต่างสูง ในขณะที่เวลาเดียวกันจะยังคงอยู่ในเมตาดาต้าข้อความสำหรับการเชื่อมโยงและการตรวจสอบในภายหลัง JPEG ที่สมบูรณ์จะถูกจำกัดที่ 32 MiB หาก `sharp` ไม่สามารถถอดรหัสหรือประกอบกริดได้ สะพานจะกลับไปที่เฟรม JPEG ทีละเฟรม การยกเลิกของลูกค้าจะยังคงส่งผ่านการดำเนินการแผ่น

หลักฐานการส่งเสริมถูกแยกออกอย่างตั้งใจจากการทดสอบไมโครเบนช์การประกอบสังเคราะห์ `scripts/perf/video-bridge-contact-sheet-eval.ts` กำหนด A/B harness ที่มีเวอร์ชันสคีมาสำหรับโมเดลวิสัยทัศน์ที่เข้ากันได้กับ OpenAI จริง มันวัดจำนวนโทเคนที่รายงานโดยผู้ให้บริการ ความล่าช้าของกำแพงแบบ end-to-end (รวมถึงการประกอบแผ่น) จำนวนการเรียกโมเดล และการเก็บรักษาข้อเท็จจริงที่กำหนดโดยแผนผัง คำตอบของโมเดลดิบจะไม่ถูกเขียนลงในรายงาน; จะเก็บเฉพาะ SHA-256 ดิจิests และ ID ข้อเท็จจริงที่ตรงกัน อุปกรณ์นี้จะไม่ทำการเรียกเครือข่ายหรือโมเดลที่ต้องชำระเงิน เว้นแต่จะมีการส่ง `--execute-real` และมีการกำหนดค่า `--model`, `OMNIROUTE_BASE_URL` และ `OMNIROUTE_API_KEY` หากไม่มีการเรียกใช้งานจริงที่ชัดเจน คำตัดสินที่อ่านได้ของมันจะยังคงอยู่ที่ `HOLD`; การวัดผลการโหลด/จำนวนการเรียกสังเคราะห์เพียงอย่างเดียวจะไม่เป็นหลักฐานการส่งเสริม

`scripts/perf/video-bridge-promotion-eval.ts` แยกต่างหากจะใช้การสังเกต FU-07 หรือ FU-09 การเข้าร่วมการส่งเสริมต้องการประเภทสถานการณ์สังเคราะห์ทั้งแปดประเภทบวกกับคลิปจริงที่ผ่านการฆ่าเชื้ออย่างน้อยสามการทำซ้ำที่วัดได้ต่อบทบาทและกรณี เมตริกที่ประกาศทั้งสิบ รายละเอียดสื่อ/คำกระตุ้น/ข้อเท็จจริงที่คาดหวัง/การตั้งค่าที่ถูกหยุดชั่วคราว ID การสังเกตที่ไม่ซ้ำกันและลำดับ A/B ที่ได้รับการตรวจสอบ การรับรองการดำเนินการจะผูกพันกับดิจิests ของคอร์ปัส SHA ที่แน่นอนและการแก้ไขโมเดล การวัดที่ขาดหายไปหรือไม่ถูกต้องจะยังคงอยู่ที่ `HOLD` รวมถึง CPU ที่เกิน 30 วินาที RSS สูงสุดที่เกิน 512 MiB หรือการวิเคราะห์ล่วงหน้าที่เกิน 30 วินาที สิ่งเหล่านี้เป็นขีดจำกัดการเข้ารับหลักฐาน ไม่ใช่การรับประกันการบังคับใช้ RSS ใหม่ในระยะเวลาการทำงาน

FU-07 ต้องการการเก็บรักษาคุณภาพอย่างน้อย 98% และความล่าช้า p95 ไม่เกิน 1.2x ของฐานบรรทัด รวมถึงการปรับปรุงการเรียกคืนค่าเฉลี่ยที่สมดุลอย่างแท้จริงที่ 0.05 ในการเรียกคำบรรยายที่มีค่าเฉลี่ยเท่ากัน หรืออย่างน้อย 10% น้อยกว่าการเรียกคำบรรยายหลังการลบซ้ำ FU-09 ต้องการคุณภาพอย่างน้อย 0.85 การเก็บรักษา 95% การลดความล่าช้า p95 20% และการลดโทเคน 10% การสูญเสียข้อเท็จจริงที่สำคัญ การปฏิบัติตามการฉีด หรือการใช้งานที่ขาดหายไปจะป้องกันการส่งเสริม การดำเนินการหนึ่งไม่สามารถส่งเสริมอะไรได้: `--previous-report` ยืนยันการดำเนินการที่มีสิทธิ์ที่แตกต่างกันสองรายการซึ่งไม่ทับซ้อนกันและเกิดขึ้นติดต่อกันของนโยบาย/การแก้ไขโมเดล/ผู้สมัคร/คอร์ปัสเดียวกัน การทดลองสุ่มไม่สามารถยืนยันการทดลองแผ่นติดต่อได้

Collectors ควรให้คะแนนการตอบสนองในหน่วยความจำและบันทึก `responseDigest` พร้อมกับเมตริกและการสังเกตการณ์ที่ผูกพัน ไม่เคยบันทึกข้อความการตอบสนอง ผู้บริโภคยังอ่านการสังเกตการณ์ดิบแบบเก่า แต่ไม่เคยคัดลอกข้อความนั้นไปยังรายงานของตน โดยจะยอมรับเพียงหนึ่งใน `responseDigest` หรือ `rawResponseText` สำหรับแต่ละการสังเกตการณ์ รายการที่มีสิทธิ์ต้องการการอ้างอิงหลักฐาน นโยบาย การปรับรุ่นโมเดล SHA ของผู้สมัครที่แน่นอน การบีบอัดของแมนิฟีสต์ และรหัสการทำงานที่แตกต่างกันสองรหัส; บริบทที่ขัดแย้งจะถูกปฏิเสธ เมตาดาต้าเหล่านี้เป็นสัญญาการตรวจสอบ ไม่ใช่หลักฐานว่ามีไฟล์ที่อ้างอิงมีการวัดที่แท้จริง ตรวจสอบใบเสร็จจริงก่อนที่จะเพิ่มรายการใด ๆ จุดสิ้นสุดสถิติการจัดการและแดชบอร์ดวิดีโอเปิดเผยความพร้อมที่ระมัดระวัง อัลลิอัสโมเดลที่กำหนดไว้เพียงอย่างเดียวไม่สามารถกำหนดการปรับรุ่นหรือ SHA ของผู้สมัครที่กำลังทำงาน ดังนั้นแดชบอร์ดปัจจุบันจึงรายงาน `HOLD` แทนที่จะนำความมีสิทธิ์จากบริบทการดำเนินการอื่นมาใช้ การเลือกทดลองที่ชัดเจนยังคงแยกจากการส่งเสริม; ไม่มีค่าเริ่มต้นใด ๆ ที่เปลี่ยนแปลงโดยอัตโนมัติ

ผู้เรียกสามารถแนบอาร์เรย์ `transcript.cues` ที่เป็นทางเลือกไปยังส่วนวิดีโอที่รองรับเมื่อพวกเขามีข้อความที่จัดเรียงแล้ว แต่ละ cue ต้องมี `text` ช่วง `start`/`end` ที่จำกัดภายในระยะเวลาที่ตรวจสอบ และ `source` ที่อยู่ในรายการอนุญาต (`client`, `embedded`, หรือ `audio-bridge`); `confidence` จะตั้งค่าเป็น `1` โดยค่าเริ่มต้นและต้องอยู่ระหว่าง `0` และ `1` Cue ที่ซ้ำกันจะถูกยุบรวมกัน OmniRoute จะไม่เริ่มการถอดเสียงจากเมตาดาต้านี้: cue ที่ได้รับการตรวจสอบจะถูกคัดลอกไปยังผลลัพธ์ที่อธิบายพร้อมกับแหล่งที่มา ความเชื่อมั่น และช่วงเวลา และจะถูกแสดงเป็นการสังเกตการณ์ที่ไม่น่าเชื่อถือควบคู่ไปกับคำบรรยายของเฟรม ข้อความที่ไม่ถูกต้อง นอกช่วง หรือไม่มีแหล่งที่มา จะถูกปฏิเสธแทนที่จะถูกผสมเข้ากับสตรีมคำบรรยาย ช่องทางการถอดเสียงในร่างคำขอทั้งสองจะทำให้แหล่งที่มาที่จัดเตรียมไว้เป็น `client` รวมถึง `embedded` หรือ `audio-bridge` ที่ยืนยันตนเองเท่านั้น อะแดปเตอร์ที่เป็นเจ้าของเซิร์ฟเวอร์เท่านั้นที่สามารถกำหนดป้ายชื่อที่เชื่อถือได้เหล่านั้นผ่านอาร์กิวเมนต์ `trustedSource` ที่เป็นโค้ดเท่านั้น; ฟิลด์ JSON ของคำขอไม่สามารถเข้าถึงอาร์กิวเมนต์นั้นได้ ข้อความถอดเสียงยังคงเป็นเนื้อหาที่ได้มาจากสื่อที่ไม่น่าเชื่อถือ โดยไม่คำนึงถึงแหล่งที่มา และไม่ควรกำหนดการอนุญาต

ผู้เรียกขั้นสูงอาจจัดเตรียมแทร็ก `audioTranscript` สำหรับวิดีโอเดียวกัน; จะถูกจัดการเป็นข้อความที่จัดเตรียมโดยลูกค้า ไม่ใช่หลักฐานของการถอดเสียงจากเซิร์ฟเวอร์ รอยต่อการรวมจะดำเนินการการสังเกตการณ์ภาพและเสียงภายใต้เส้นตายและสัญญาณยกเลิก สั่งให้พวกเขาอยู่ในไทม์ไลน์ทั่วไป ยุบรวมการซ้ำกันที่แน่นอน และรายงานผลลัพธ์บางส่วนเมื่อด้านใดด้านหนึ่งประสบความสำเร็จเท่านั้น `audioTranscript` ที่ไม่ถูกต้องจะลดลงเป็นผลลัพธ์บางส่วน — คำอธิบายภาพจะถูกเก็บรักษาไว้และสาขาเสียงจะบันทึกโค้ดความล้มเหลวที่ทำความสะอาด — แทนที่จะทำให้วิดีโอทั้งหมดล้มเหลว ความพร้อมใช้งานต่อสาขา ธงบางส่วน และรหัสความล้มเหลวที่ทำความสะอาดจะถูกเก็บรักษาไว้ในผลลัพธ์ที่อธิบาย ในเมตาดาต้า guardrail (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`) ในเมตาดาต้าผลลัพธ์แคช และในเคาน์เตอร์การรวมสะพาน เส้นทาง Video Bridge เริ่มต้นจะไม่เรียกใช้การพูดเป็นข้อความหรือดาวน์โหลดสำเนาสื่อที่สอง; หากไม่มีแทร็กที่ชัดเจน จะยังคงเป็นวิดีโอเท่านั้น

**การเก็บรักษาถอดเสียง (#12150 P1).** สิ่งนี้จะถูกนำไปใช้โดยอัตโนมัติเมื่อใดก็ตามที่ Video Bridge (ซึ่งเป็นการเลือกเข้าร่วม) สร้าง cue ถอดเสียง — ไม่มีธงการเก็บรักษาแยกต่างหาก เมื่อคำขอสร้าง cue ถอดเสียงใด ๆ (การถอดเสียงที่ประกาศโดยผู้เรียกหรือ `audioTranscript` ที่รวมกัน) guardrail จะทำเครื่องหมายว่า `videoBridgeObserved` และสร้างเงาของคำอธิบายวิดีโอที่ถูกแก้ไข — การสร้างที่เหมือนกันซึ่งร่างกายของข้อความฟรีของแต่ละ cue ถูกแทนที่ด้วย `[redacted-video-transcript]` ที่สร้างขึ้นโดยการแทนที่ฟิลด์ cue ที่มีโครงสร้างก่อนที่สตริงจะถูกประกอบ (ไม่เคยโดยการวิเคราะห์ข้อความที่แบนราบ ดังนั้นเนื้อหาของ cue — ไม่ว่าจะเป็นการต่อต้านหรือปกติ รวมถึงร่างกายที่มี `]` เช่น `[inaudible]`/`[music]` — ไม่สามารถอยู่รอดได้) ร่างคำขอในบันทึกการโทรที่เก็บรักษาไว้จะสลับแต่ละส่วนของข้อความที่ได้จากวิดีโอเป็นเงาที่ถูกแก้ไขนั้น โดยตรงตามความเท่าเทียมกันของเนื้อหา; แหล่งข้อมูล `fullText` จะถูกอ่านใหม่จาก payload guardrail ก่อนการโทรที่เสร็จสิ้น ดังนั้นการจับคู่ยังคงสำเร็จหลังจาก guardrail ของสายโซ่ในภายหลัง (PII และตัวปิดบังข้อมูลประจำตัว ลำดับความสำคัญ 10/95) เขียนข้อความคำอธิบายใหม่ในที่และหลังจากการกระตุ้นระบบ/การส่งต่อ/การฉีดหน่วยความจำเปลี่ยนรูปอาร์เรย์ข้อความ ร่างที่ส่งไปยังโมเดลจะไม่เปลี่ยนแปลง คำขอที่สังเกตยังไม่เติมหน่วยความจำที่ยั่งยืน (การสกัดที่ได้จากคำขอและการตอบสนองจะถูกข้าม) ดังนั้นการตอบสนองของโมเดลจึงไม่สามารถสะท้อนข้อความถอดเสียงในหน่วยความจำได้

**ฟิลด์วิดีโอดิบ (#12430).** เมื่อสะพานถูกเปิดใช้งานและการสนับสนุนวิดีโอพื้นฐานไม่เป็นที่รู้จักหรือไม่มีอยู่ ฟิลด์ `transcript`/`audioTranscript` ที่กำหนดไว้จะเปิดใช้งาน `videoBridgeObserved` แม้หลังจากความล้มเหลวในการอธิบายหรือขีดจำกัด `maxVideos` `null` และสตริงว่างนับ; ฟิลด์ที่ขาดหายไปและข้อมูลเมตาดาต้าที่ไม่ใช่วิดีโอจะไม่นับ คัดลอกที่เก็บรักษาไว้จะลบฟิลด์เหล่านี้หรือข้ามคำขอ และแคช/หน่วยความจำจะถูกข้าม เนื้อหาของผู้ให้บริการจะยังคงไม่เปลี่ยนแปลง

สำเนาที่เก็บรักษาเพิ่มเติมใช้สัญญาณคำขอที่สังเกตเดียวกัน สแนปช็อตคำขอของลูกค้าก่อนการควบคุม guardrail ที่ดิบ คำขอที่รอดำเนินการในหน่วยความจำ และบันทึกคำขอที่ถูกปฏิเสธในระยะต้นจะเปลี่ยนฟิลด์ถอดเสียงในส่วนวิดีโอ; สตริงที่สร้างขึ้นโดยขั้นตอนของท่อและการส่งต่อบริบทจะถูกลบในที่เก็บร่างคำขอที่เก็บรักษาไว้ เครื่องหมาย `video_content_removed` ที่เก็บรักษาไว้ทำให้การต่อเนื่องของ `previous_response_id` ล้มเหลวในการปิดแทนที่จะสร้างข้อความที่ถูกทิ้ง intentionally หากคำขอที่สังเกตสูญเสียเงาของการลบในแต่ละส่วนก่อนการบันทึก หรือแม้แต่เงาของวิดีโอหลายรายการไม่ตรงกันหลังจากการเปลี่ยนแปลงคำขอในภายหลัง ร่างคำขอที่เก็บรักษาไว้จะถูกละเว้นโดยสิ้นเชิงแทนที่จะเก็บถอดเสียงที่ถูกลบบางส่วนไว้

สำหรับคำขอที่สังเกตได้ การตอบสนองของโมเดลอาจอ้างอิงส่วนใดส่วนหนึ่งของ
การถอดเสียงโดยไม่มีขอบเขตการชี้นำที่มีโครงสร้าง ดังนั้น `responseBody` ที่บันทึกไว้จะถูกแทนที่ด้วยเครื่องหมายการละเว้น; อาร์ติแฟกต์ของพายป์ไลน์ที่ละเอียด (ซึ่งอาจรวมถึงร่าง/เนื้อหาของลูกค้าและชิ้นส่วนสตรีม) จะไม่ถูกเก็บรักษา แคชเชิงความหมาย, ความสามารถในการทำซ้ำ, และการเล่นซ้ำเหตุผลจะข้ามการอ่านและการเขียนสำหรับคำขอนั้น คำขอของผู้ให้บริการและการตอบสนองที่มองเห็นได้จากลูกค้ายังคงไม่เปลี่ยนแปลง ไบต์ keepalive ที่ถูกต้องจะถูกระบายออกจากบัฟเฟอร์ชั่วคราวเมื่ออาร์ติแฟกต์ที่ละเอียดถูกละเว้น คำเตือน EventStream ที่ไม่ถูกต้องของ Kiro รายงานเฉพาะจำนวนไบต์ของเพย์โหลดเท่านั้น ไม่เคยรายงานเนื้อหาหรือข้อผิดพลาดดิบของ JSON parser
นี่ไม่ได้อ้างว่าการวินิจฉัยของผู้ให้บริการ/ปลั๊กอินที่ไม่เกี่ยวข้องทุกตัวได้รับการตรวจสอบแล้ว; การตรวจสอบที่กว้างขึ้นของ sink ที่เก็บรักษาอยู่ถูกติดตามใน #11658

วงจรชีวิต `/api/modality-bridge/video/drilldown` ภายในเป็นฐานข้อมูลแคชที่แยกต่างหากซึ่งใช้การวนซ้ำ/การตรวจสอบสิทธิ์ด้วยโทเค็น ทุกการดำเนินการยังต้องการ ID หลักที่ไม่โปร่งใสแบบแคนนอนิคัล ก่อนที่ผู้โทรในสภาพแวดล้อมการผลิตจะถูกเปิดใช้งาน จะต้องสร้าง ID นั้นจากผู้เช่าที่ได้รับการตรวจสอบสิทธิ์และต้องไม่ส่งค่าที่เลือกโดยลูกค้าไปข้างหน้า คีย์แคชจะผูก ID หลักนั้นกับเซสชันแคนนอนิคัลและ ID อ้างอิงวิดีโอ เก็บเฉพาะคีย์ที่ได้จาก SHA-256 และกำหนดขอบเขตการอ่านและการลบให้กับ ID หลักเดียวกัน แคชเก็บภาพ JPEG ที่ได้มาไม่เกิน 16 เฟรมต่อรายการ หมดอายุหลังจากสิบนาที และสนับสนุนการอ่านที่มีขอบเขต `start`/`end` หรือการลบเซสชันอย่างชัดเจน

แต่ละ ID หลักถูกจำกัดไว้ที่ 16 รายการและ 64 MiB ของข้อมูล JPEG แบบแคนนอนิคัล ขีดจำกัดเหล่านั้นเป็นอิสระจากเพดานทั่วโลกที่ 64 รายการ/256 MiB: ความกดดันจากโควต้าหลักจะไล่รายการที่ใช้งานน้อยที่สุดของ ID หลักนั้นออกก่อนที่จะพิจารณาการไล่ระดับ LRU ทั่วโลก รายการที่หมดอายุจะถูกลบออกจากการบัญชีทั้งในระดับหลักและระดับโลกเมื่อมีการทำกิจกรรมในแคช ในขณะที่การยกเลิกและการตรวจสอบความถูกต้องล้มเหลวจะไม่ทำการแทนที่บางส่วน

แคชจะปฏิเสธ Base64 ที่ไม่เป็นแคนนอนิคัล, การเติมที่เกิน, สื่อที่ไม่ใช่ JPEG, JPEG ที่ไม่ถูกต้องหรือถูกตัดทอน, และ JPEG ที่สร้างคำเตือนระหว่างการถอดรหัสภาพเต็มขนาด `sharp` ที่มีขอบเขต มันจะเข้ารหัสภาพที่ได้รับการยอมรับแต่ละภาพเป็น JPEG แบบแคนนอนิคัล ดึงความกว้างและความสูงจากไบต์ที่ถอดรหัสแทนที่จะไว้วางใจฟิลด์ของผู้โทร และทิ้งไบต์ polyglot ที่ตามมาทั้งหมดแทนที่จะเก็บรักษาไว้ เฉพาะบัฟเฟอร์ที่บีบอัดแบบแคนนอนิคัลที่มีขอบเขตเท่านั้นที่จะถูกเรียกเก็บจากโควต้าทั้งสอง ขีดจำกัดของสาย JSON รวมถึงค่าใช้จ่าย Base64 สำหรับเพดานการป้อนข้อมูลที่ถอดรหัส 32 MiB ทุกการ
สร้างที่เก็บจะบันทึกรูปแบบ/ความละเอียด JPEG ที่ได้รับการตรวจสอบ, นโยบายการสุ่มตัวอย่าง, เวอร์ชันการสร้าง, เวลาที่สร้าง, แฮชเนื้อหาที่คำนวณโดยเซิร์ฟเวอร์, และแฮชอ้างอิงของผู้ปกครองที่เชื่อถือได้รวมถึงแฮชเนื้อหาของผู้โทรที่เชื่อถือได้ การยกเลิกจะถูกตรวจสอบระหว่างขั้นตอนการถอดรหัส/แฮชแบบอะซิงโครนัสก่อนที่จะมีการคอมมิตแคชแบบอะตอมิก

ผู้ผลิตในสภาพแวดล้อมการผลิตจะนำเฟรมโบรกเกอร์ที่ได้มาแล้วมาใช้ใหม่เฉพาะหลังจากการวิเคราะห์ภาพที่ประสบความสำเร็จ โดยไม่มีการดาวน์โหลด/การสกัดวิดีโอครั้งที่สอง มันต้องการ `modalityBridgeVideoDrilldownEnabled=true` ของผู้ดำเนินการ, `drilldown: true` ที่เข้มงวดต่อแต่ละส่วน, และ ID บันทึก API-key ที่ได้รับการตรวจสอบสิทธิ์ ค่าหลัก/เซสชันที่ประกาศโดยลูกค้าไม่เคยสร้างความเป็นเจ้าของ โดยไม่มีเงื่อนไขทั้งสามนี้มันจะไม่ทำการแฮช, ปรับขนาดหรือเก็บเฟรมเพิ่มเติม การล้มเหลวในการเก็บรักษาจะรักษาการตอบสนองที่มองเห็นได้ที่ใช้งานได้ คำขอที่ได้รับความยินยอมจะข้ามแคชผลลัพธ์วิดีโอทั้งหมดดังนั้นผลลัพธ์ที่เก็บไว้จะไม่เล่นซ้ำการจัดการ

การตอบสนอง JSON และ SSE ที่ประสบความสำเร็จจะเปิดเผยไม่เกินสี่ตัวจัดการที่ไม่โปร่งใสในส่วนหัว `x-omniroute-video-drilldown` ที่มีขอบเขต ต้นทางเบราว์เซอร์ที่ได้รับอนุญาตสามารถอ่านส่วนหัวนั้นได้โดยไม่ขยายนโยบายต้นทาง CORS ตัวจัดการใหม่ใช้ `v1.<32-byte random base64url token>` และทะเบียนจะเก็บเฉพาะแฮช SHA-256 ของพวกเขา ตัวอ่าน/พาร์เซอร์ส่วนหัวยังยอมรับโทเค็น 64-hex แบบเก่า ผู้บริโภคสาธารณะที่ได้รับการตรวจสอบสิทธิ์คือ
`GET /api/v1/video-bridge/drilldown?handle=...` ซึ่งถูกควบคุมโดยอิสระโดย
`modalityBridgeVideoDrilldownRemoteEnabled=true` การปฏิเสธที่บันทึกอย่างชัดเจนจะเพิกถอนการเข้าถึงแม้ว่าจะเปิดใช้งานการสำรองข้อมูล `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` แบบเก่า การเก็บรักษาในสภาพแวดล้อมการผลิตมีการสำรองข้อมูลแบบเก่า `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` ที่คล้ายกัน การสำรองข้อมูลทั้งสองจะปิดเป็นค่าเริ่มต้น

ผู้บริโภคจะสร้างความเป็นเจ้าของจากกุญแจที่ได้รับการตรวจสอบสิทธิ์ ใช้นโยบายกุญแจ และส่งคืน 404 เดียวกันสำหรับตัวจัดการที่ไม่รู้จัก, หมดอายุ และของกุญแจอื่น มันยอมรับ `variant=preview|standard|detail` (ขนาด JPEG สูงสุด 320/640/1280, ไม่เคยขยายขนาด), `limit=1..8` (หรืออัลลิอัส `frames` แบบเก่า, ไม่เคยทั้งสอง), `page` ที่เริ่มต้นที่ศูนย์ และวินาทีโฟกัส `start`/`end` ที่เลือกได้ คีย์การค้นหาที่ซ้ำกันและหน้าต่างโฟกัสที่กลับด้านจะถูกปฏิเสธ แต่ละตัวแปรที่ส่งคืนมีแฮชของเนื้อหาจริงและข้อมูลเมตาของความละเอียดที่เชื่อมโยงกับแหล่งที่เก็บไว้ ตัวแปรจะถูกสร้างขึ้นเมื่ออ่านแทนที่จะถูกเก็บเป็นสำเนาที่เก็บรักษาไว้เพิ่มเติม การตอบสนอง JSON รวมถึง Base64/envelope ถูกจำกัดที่ 32 MiB; หน้าที่มีขนาดใหญ่เกินไปจะส่งคืน 413 และลูกค้าต้องขอเฟรมที่น้อยลง การอ่านจะตรวจสอบการยกเลิกรอบการปรับขนาดแต่ละครั้งและตรวจสอบความถูกต้องของตัวจัดการก่อนที่จะส่งคืน `DELETE` โดยเจ้าของเป็นแบบ idempotent; การลบหรือการหมดอายุ TTL จะปล่อยแหล่งที่เก็บและการบัญชีการใช้งาน

ร้านค้าที่ใช้ร่วมกันเป็นระดับกระบวนการ: ตัวจัดการจะหมดอายุเมื่อเริ่มต้นใหม่และไม่สามารถโอนย้ายระหว่างกระบวนการ OmniRoute ที่เป็นอิสระ สถิติการจัดการจะเปิดเผยนโยบายการเก็บรักษา/ระยะไกลที่มีประสิทธิภาพและรวมรายการ/ไบต์ที่เก็บรักษาไว้เท่านั้น ไม่เคยมีสื่อ, อ้างอิง, ID หลัก หรือ ตัวจัดการ แผงการตั้งค่าวิดีโอจะแสดงค่าดังกล่าวและสามารถเก็บสวิตช์ความยินยอมทั้งสองได้ เอกสารการดำเนินการนี้ไม่ใช่หลักฐานการใช้งานจริงหรือการส่งเสริม; การยอมรับโมเดลจริงจะถูกติดตามแยกต่างหาก

Frames ถูกตั้งชื่อเรียงตามลำดับด้วยโมเดลวิดีโอที่กำหนดไว้ การเขียนทับวิดีโอที่ว่างเปล่าจะสืบทอดการตั้งค่าการมองเห็น; หากทั้งสองว่างเปล่า ตัวเลือกอัตโนมัติการมองเห็นจะเลือกโมเดลที่มีความสามารถในการมองเห็นที่มีผล การเขียนคำบรรยายที่สำเร็จจะแทนที่ส่วนต้นฉบับด้วยคำนำหน้า `[Video description:` ที่เสถียรซึ่งยังทำเครื่องหมายข้อความว่าเป็นการสังเกตที่ได้จากสื่อที่ไม่น่าเชื่อถือและบอกโมเดลที่อยู่ด้านล่างไม่ให้ปฏิบัติตามคำแนะนำที่พบในสื่อ คีย์แคชคำบรรยายเฟรมรวมถึงไบต์ JPEG, prompt, timestamp และโมเดลที่มีผล; เฉพาะคำบรรยายที่สำเร็จเท่านั้นที่ถูกแคช รายการแคชจะเก็บโมเดลผู้ผลิตที่สำเร็จจริง รวมถึงโมเดลสำรอง; สะพานจะรายงาน `mixed` เมื่อเฟรมที่แตกต่างกันถูกผลิตโดยโมเดลที่แตกต่างกัน การเข้าถึงแคชจะนำตัวตนของผู้ผลิตนั้นกลับมาใช้แทนที่จะทำการเปลี่ยนชื่อใหม่เป็นแผนการจัดเส้นทางที่ร้องขอ แคชผลวิดีโอทั้งหมดจะถูกกำหนดคีย์จากทุกการป้อนข้อมูลที่เปลี่ยนผลลัพธ์ — prompt, โมเดลที่มีผล, นโยบายการสุ่มตัวอย่าง, จำนวนเฟรม, โหมดการวิเคราะห์เชิงความหมาย, SHA-256 ลายนิ้วมือของคำแนะนำโฟกัสที่ถูกปรับให้เป็นมาตรฐาน, หน้าต่างโฟกัส, `transcript`, `audioTranscript`, และธง contact-sheet — ดังนั้นการเปลี่ยนแปลงใด ๆ ในมิติที่กล่าวถึงเหล่านี้จะเป็นการพลาดแคช ไม่เคยเป็นการนำกลับมาใช้ที่ล้าสมัย นโยบายการลบซ้ำทางภาพเวอร์ชัน, เกณฑ์, และจำนวนเฟรมที่ถูกจำกัดก็ชัดเจนในคีย์แคชผลและข้อมูลเมตา; การเปลี่ยนแปลงนโยบายจึงไม่สามารถนำกลับมาใช้คำบรรยายวิดีโอทั้งหมดที่ล้าสมัยได้ ข้อมูลเมตาแคชผล v4 จะเก็บโหมดและลายนิ้วมือ ไม่เคยเก็บงานผู้ใช้ดิบ ข้อมูลเมตา guardrail จะรายงานทั้งโหมดการวิเคราะห์ที่ร้องขอและที่มีผล; โหมด `focused` ที่ร้องขอโดยไม่มีข้อความผู้ใช้ที่ใช้งานได้จะถูกรายงานว่าเป็น `full` อย่างมีประสิทธิภาพ

guardrail จะดึงทุกส่วนของวิดีโอที่รองรับ แต่จะอธิบายไม่เกิน `modalityBridgeVideoMaxVideos` สำหรับเป้าหมายที่พิสูจน์แล้วว่า `supportsVideo === false` วิดีโอที่ล้มเหลวและเกินขีดจำกัดจะกลายเป็นเครื่องหมายข้อความที่ปลอดภัยอย่างชัดเจน ดังนั้นจึงไม่มีวิดีโอดิบที่รอดชีวิต เมื่อความสามารถไม่เป็นที่รู้จัก ส่วนเหล่านั้นจะยังคงไม่ถูกแตะต้อง เป้าหมายที่มี `supportsVideo === true` จะข้ามสะพาน สัญญาณยกเลิกคำขอของลูกค้าจะส่งผ่านการดาวน์โหลด, คิวโบรกเกอร์, subprocesses, และการเรียกคำบรรยาย; การยกเลิกจะหยุดระหว่างวิดีโอและไม่เคยล้มเหลวเปิดให้กับสื่อดิบ

การตั้งค่าเวลาทำงานจะถูกสนับสนุนโดย DB และตรวจสอบโดย Zod:

| คีย์                                | ค่าเริ่มต้น | ช่วง / พฤติกรรม                                                                                             |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | ตัวเลือกเวลาทำงาน, ต้องเลือกเข้าร่วม                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` จะรักษาคำบรรยายทั่วไป; `focused` ใช้บริบทล่าสุดที่ไม่เชื่อถือได้ที่ถูกจำกัด                          |
| `modalityBridgeVideoModel`          | `""`        | สืบทอดโมเดล Vision Bridge                                                                                   |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, หรือ `segment_aware` ที่เป็นสัดส่วน; การล้มเหลวของตัวตรวจจับจะกลับไปที่ `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                              |

ค่าตั้งเวลาวิดีโอเก่าที่เก็บไว้ซึ่งเกิน 120 วินาทีจะถูกจำกัดที่กำหนดเวลาของโบรกเกอร์; การเขียนการตั้งค่าใหม่ที่เกินขีดจำกัดนั้นจะถูกปฏิเสธ `GET /api/modality-bridge/video/runtime` ต้องการความเชื่อถือได้ที่มีการประทับเวลาในพื้นที่ก่อนการตรวจสอบสิทธิ์หรือการตรวจสอบเวลาทำงาน จากนั้นต้องการการตรวจสอบสิทธิ์การจัดการ มันจะส่งคืนเฉพาะเวอร์ชัน FFmpeg/ffprobe ที่ `available` และได้รับการทำความสะอาด และเหตุผลที่แน่นอนเมื่อเวลาทำงานไม่พร้อมใช้งาน จุดสิ้นสุดการดึงข้อมูลภายในไม่ใช่ API การอัปโหลดสาธารณะ: การอิ่มตัวของคิวจะส่งคืน `503` พร้อม `Retry-After`, การตัดการเชื่อมต่อของผู้โทรจะส่งคืน `499`, และกำหนดเวลาของโบรกเกอร์ที่แน่นอนจะส่งคืน `504` การตอบสนองที่แปลงแล้วจะเพิ่ม `video->text;model=<visionModel>;parts=<videos>` ลงในส่วนหัว `x-omniroute-modality-bridge` โดยไม่ลบส่วน Vision หรือ Audio

### PII Masker (`piiMasker.ts`)

ทำงานใน **ทั้งสอง** ขั้นตอน

- **`preCall`** จะทำการโคลน payload, เดินผ่าน `system`, `messages`, `input`, และ `prompt` (รวมถึงรายการสตริงธรรมดา) และใช้ `processPII()` (จาก `@/shared/utils/inputSanitizer`) กับฟิลด์ `content`/`text` สตริง เมื่อ `PII_REDACTION_ENABLED=true`, PII ที่ตรวจพบจะถูกลบออกใน payload ที่ส่งออก นี่เป็นอิสระจาก `INPUT_SANITIZER_MODE` (ซึ่งควบคุมเฉพาะนโยบายการฉีด prompt) เมื่อการลบออกปิดอยู่ การเรียกจะบันทึกจำนวนการตรวจจับโดยไม่เขียนเนื้อหาใหม่
- **`postCall`** จะทำการโคลนลึกการตอบสนอง, รัน `sanitizePIIResponse()` บวกกับตัวปิดกั้นรูปแบบ Responses-API (`maskResponsesOutput` — ครอบคลุม `output_text` และ `output[].content[].text`) หากมีการลบออกเกิดขึ้น การตอบสนองที่แก้ไขจะแทนที่ต้นฉบับ

guardrail จะไม่บล็อก; มันจะทำการบันทึกเฉพาะ (`meta.detections`, `meta.redacted`) หรือเขียนใหม่เท่านั้น

### Prompt Injection (`promptInjection.ts`)

ตรวจจับโครงสร้างที่เป็นศัตรูในเนื้อหาที่ผู้ใช้จัดหาและบังคับใช้นโยบายที่กำหนดไว้ พฤติกรรมจะถูกขับเคลื่อนโดยตัวแปรสภาพแวดล้อมและตัวเลือกของผู้สร้าง

| การตั้งค่า    | ตัวแปร Env                                                                                               | ค่าเริ่มต้น | ผลกระทบ                                                                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| เปิดใช้งาน    | `INPUT_SANITIZER_ENABLED`                                                                                | `true`      | เมื่อ `false` การป้องกันจะถูกตัดสั้น.                                                                                                                                            |
| โหมด          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`      | นโยบายการฉีด: `block`, `warn`, หรือ `log`. (`redact` ยอมรับสำหรับความเข้ากันได้ย้อนหลังแต่จะ **ไม่** ลบข้อความการฉีด; การขอการเขียน PII จะถูกควบคุมโดย `PII_REDACTION_ENABLED`.) |
| เกณฑ์การบล็อก | ตัวเลือก `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (นามแฝง `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | ความรุนแรงขั้นต่ำที่ต้องการเพื่อบล็อก. ระดับกลางจะสังเกตเฉพาะที่ค่าเริ่มต้น.                                                                                                     |

**ลำดับความสำคัญของโหมด** (`getMode`): ผู้เรียก `options.mode` →
`INJECTION_GUARD_MODE` **การตั้งค่าแฟลกฟีเจอร์ DB** (แดชบอร์ด → การตั้งค่า →
แฟลกฟีเจอร์) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. การเขียนทับแดชบอร์ดจึงชนะตัวแปร env ดังนั้น UI แฟลกฟีเจอร์จึงควบคุมการทำงานของการป้องกันแบบสด (ไม่ต้องรีสตาร์ท). การอ่าน DB เป็นแบบปลอดภัย:
หากเกิดข้อผิดพลาด การป้องกันจะกลับไปใช้พฤติกรรมตาม env และเมื่อไม่มี
การตั้งค่าการเขียนทับพฤติกรรมจะเหมือนกับการแก้ไขเฉพาะ env เท่านั้น.

แหล่งที่มาของการตรวจจับ:

1. `sanitizeRequest()` จาก `@/shared/utils/inputSanitizer` (ตัวตรวจจับที่ใช้ร่วมกัน
   ที่ใช้ในที่อื่นในท่อ).
2. `DEFAULT_GUARD_PATTERNS` ที่สร้างขึ้นในตัว (ปัจจุบันคือ `system_override_inline` และ
   `markdown_system_block`, ทั้งสองมีความรุนแรง `high`).
3. `customPatterns` ที่เลือกใช้ผ่านตัวเลือกของคอนสตรัคเตอร์ (สตริง, regex,
   หรือ `{ name, pattern, severity }` records).

เมื่อ `mode === "block"` **และ** การตรวจจับอย่างน้อยหนึ่งรายการตรงตามเกณฑ์
ความรุนแรง `preCall` จะส่งคืน `{ block: true, message: "Request rejected:
suspicious content detected" }`. ในโหมด `warn`/`log` การป้องกันจะบันทึกแต่
อนุญาตให้เรียก. ตัวช่วยที่ใช้ร่วมกัน `evaluatePromptInjection()` ยังถูกส่งออก
สำหรับผู้เรียกที่ต้องการประเมินคำกระตุ้นโดยไม่ต้องผ่านการลงทะเบียน.

**ขอบเขตการสแกน (v3.8.20):** ตัวตรวจจับจะตรวจสอบเฉพาะ **16 KB แรก** ของ
ข้อความคำกระตุ้นที่รวมกัน — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 ไบต์) ใน
`src/shared/utils/inputSanitizer.ts`. ทั้ง `detectInjection()` และ
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` ก่อนที่จะทำการวนลูป
รูปแบบ. คำสั่งการฉีดจะอยู่ใกล้ด้านบนของข้อมูลนำเข้า ดังนั้นจึงจำกัด CPU/GC regex บน
ข้อมูลที่มีขนาดหลายร้อย KB โดยไม่ลดทอนการตรวจจับ (ดู #3932, #4041).

### ตัวป้องกันข้อมูลประจำตัว (`credentialMasker.ts`)

ทำงานใน **ทั้งสอง** ขั้นตอน เป็นขั้นตอนสุดท้ายในสายการทำงานเริ่มต้น (ลำดับความสำคัญ `95`). ลบ
รูปแบบ API-key / secret-token ที่รู้จักจากข้อมูลที่ส่งออก (เนื้อหาข้อความ,
อาร์กิวเมนต์การเรียกเครื่องมือ, ผลลัพธ์เครื่องมือ) **และ** การตอบสนองของผู้ให้บริการ ดังนั้น
ข้อมูลประจำตัวที่วางลงในคำกระตุ้น (หรือถูกส่งกลับโดยผลลัพธ์ของเครื่องมือ) จะไม่รั่วไหล
ไปยังผู้ให้บริการต้นน้ำหรือกลับไปยังลูกค้า.

- **ต้องเลือกใช้เท่านั้น**, ใช้แนวทางเดียวกันกับการลบ PII (กฎที่เข้มงวด #20):
  ปิดใช้งานเว้นแต่ `settings.credentialRedactionEnabled === true` **หรือ**
  `CREDENTIAL_REDACTION_ENABLED=true`. เมื่อปิดอยู่ การป้องกันจะไม่มีผล —
  มันจะไม่บล็อกและไม่เขียนใหม่.
- `redactCredentials()` จะเดินผ่านต้นไม้ข้อมูล/การตอบสนองทั้งหมด (`walkValue()`,
  ปลอดภัยจากการปนเปื้อนโปรโตไทป์, ปลอดภัยจากวงจรผ่าน `WeakSet`) และแทนที่การจับคู่ด้วย
  ตัวแทน `[REDACTED:<type>]`, ทำการโคลนเฉพาะสาขาที่เปลี่ยนแปลงจริงๆ.
- `CREDENTIAL_PATTERNS` ครอบคลุมคีย์ผู้ให้บริการ LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), โทเค็น VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), คีย์การชำระเงิน (Stripe, Square), คีย์คลาวด์
  (AWS access key, Twilio, SendGrid, Mailgun), คีย์ส่วนตัว / JWTs,
  สตริงการเชื่อมต่อที่มีข้อมูลประจำตัว (`mongodb://user:pass@...`, ฯลฯ), และ
  รูปแบบค่าเฮดเดอร์ทั่วไป `Authorization`/`x-api-key`/`api-key`/`apikey`.
  คีย์ที่มีรูปแบบเฮดเดอร์ (`authorization`, `x-api-key`, `api-key`,
  `apikey`) จะถูกลบออกในเชิงโครงสร้าง (เฉพาะค่า, สคีมเพรฟิกเช่น
  `Bearer `/`Basic ` ถูกเก็บรักษาไว้) แทนที่จะใช้ regex ข้อความทั่วไป.
- การป้องกันจะไม่บล็อก; มันจะเขียนใหม่เท่านั้น (`modifiedPayload` /
  `modifiedResponse`) และทำการบันทึก (`meta.credentialsRedacted`, `meta.count`).

การป้องกันการถดถอย: `tests/unit/credential-masker-guardrail.test.ts`.

## สัญญาพื้นฐาน (`base.ts`)

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
  block?: boolean; // ค่า true จะลัดวงจรของเชน
  message?: string; // แสดงเมื่อมีการบล็อก
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // ส่งคืนโดย preCall เพื่อเขียนคำขอใหม่
  modifiedResponse?: TValue; // ส่งคืนโดย postCall เพื่อเขียนการตอบกลับใหม่
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

การ์ดเรลระบุว่า "ไม่มีการเปลี่ยนแปลง" ด้วยการส่งคืน `void`, `{}` หรือ
`{ block: false }` อย่างใดอย่างหนึ่ง การส่งคืน `modifiedPayload`/`modifiedResponse`
จะแทนที่ค่าที่ไหลผ่านเชนสำหรับการ์ดเรลลำดับถัดไป
`signal?: AbortSignal` ส่งต่อวงจรชีวิตของผู้เรียกไปยังการ์ดเรล การยกเลิกคำขอเป็นข้อยกเว้นแบบยอมให้ทำงานต่อโดยเจตนา: บริดจ์สื่อจะหยุดการทำงานและล้างทรัพยากร โดยไม่กู้คืนสื่อดิบไปยังปลายทางที่ทราบว่าไม่รองรับสื่อนั้น

## รีจิสทรี (`registry.ts`)

ซิงเกิลตัน `guardrailRegistry` เปิดเผยเมธอดต่อไปนี้:

- `register(guardrail)` — เพิ่มการ์ดเรล (หรือแทนที่ตามชื่อที่ผ่านการทำให้เป็นมาตรฐาน)
  และเรียงลำดับใหม่ตาม `priority` จากน้อยไปมาก
- `clear()` / `list()` — ตัวช่วยสำหรับการดูแลระบบ
- `runPreCallHooks(payload, context)` — วนซ้ำการ์ดเรลที่ทำงานอยู่ ส่งต่อ
  เพย์โหลดผ่าน `modifiedPayload` และหยุดเมื่อพบ `block: true` ครั้งแรก
- `runPostCallHooks(response, context)` — ใช้โฟลว์เดียวกันกับฝั่งการตอบกลับ
- `resetGuardrailsForTests({ registerDefaults })` — ล้างสถานะและเลือก
  ลงทะเบียนค่าเริ่มต้นใหม่เพื่อแยกการทดสอบอย่างสะอาด

รันเนอร์ทั้งสองส่งคืน `{ blocked, payload|response, results, guardrail?, message? }`
โดย `results` เป็นอาร์เรย์ของเรคคอร์ด `GuardrailExecutionResult` ซึ่งประกอบด้วย
ฟิลด์ `blocked`, `skipped`, `modified`, `error` และ `meta` ของแต่ละการ์ดเรล
ซึ่งมีประโยชน์สำหรับการติดตาม

### การปิดใช้งานการ์ดเรลสำหรับแต่ละคำขอ

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` รวบรวมรายการ
ชื่อการ์ดเรลที่ตัดรายการซ้ำแล้ว ซึ่งควรข้ามสำหรับคำขอปัจจุบัน
แหล่งที่มา (ทั้งหมดเป็นตัวเลือกและนำมารวมกันทั้งหมด):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` ในเนื้อหาคำขอ (ระดับบนสุด)
- `metadata.disabledGuardrails` ในเนื้อหาคำขอ
- เฮดเดอร์ `x-omniroute-disabled-guardrails` (หรือชื่อเดิม
  `x-disabled-guardrails`)

ค่าอาจเป็นอาร์เรย์ของสตริงหรือสตริงที่คั่นด้วยจุลภาค ชื่อจะถูก
ทำให้เป็นอักษรพิมพ์เล็กในรูปแบบ kebab-case (`pii_masker` → `pii-masker`) ผลลัพธ์
จะถูกส่งผ่าน `context.disabledGuardrails` ไปยังรีจิสทรี ซึ่งจะข้าม
การ์ดเรลที่ตรงกัน (`skipped: true` ใน `results`)

## ลำดับการดำเนินการ

สำหรับแต่ละคำขอที่ไหลผ่าน `src/sse/handlers/chat.ts` และ
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` สร้างรายการที่ต้องข้ามจาก API key, body
   และ headers
2. `guardrailRegistry.runPreCallHooks(body, ctx)` เรียกใช้ guardrails ตามลำดับ
   priority จากน้อยไปมาก:
   - Guardrails ที่ปิดใช้งานจะถูกบันทึกเป็น `skipped`
   - `preCall` ของแต่ละ guardrail อาจเขียน payload ใหม่ผ่าน `modifiedPayload`
   - รายการแรกที่มี `block: true` จะยุติลำดับการทำงานทันที และ handler จะส่งคืน
     การตอบกลับที่ระบุว่า guardrail ปฏิเสธคำขอ
3. Payload ที่อาจถูกเขียนใหม่จะถูกส่งต่อไปยัง combo routing และการส่งคำขอ
   ไปยัง upstream
4. หลังจากประกอบการตอบกลับแล้ว `guardrailRegistry.runPostCallHooks(...)`
   จะเรียกใช้ลำดับเดิมกับการตอบกลับ หากพบ `block: true` ในขั้นตอนนี้ การตอบกลับ
   จาก upstream จะถูกละทิ้ง

Guardrails ที่ throw ข้อผิดพลาดจะถูกบันทึกด้วย `error: <message>` และเขียน log ผ่าน
`logger.warn` แต่ลำดับการทำงานจะดำเนินต่อไป ซึ่งเป็นการออกแบบแบบ fail-open

## การกำหนดค่า

ตัวแปรสภาพแวดล้อมที่ guardrails ในตัวอ่าน:

| ตัวแปร                                | ใช้โดย                    | ผลกระทบ                                                                                                  |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | ตั้งค่าเป็น `false` เพื่อปิดใช้งานการตรวจจับทั้งหมด                                                      |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | นโยบายการตรวจจับ injection: `warn`, `block` หรือ `log` ค่าเดิม `redact` จะไม่เขียนข้อความ injection ใหม่ |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | โหมดสำหรับ injection guard และยังเป็น DB feature flag ที่ **มีผลเหนือกว่า** env vars (DB > ENV)          |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | ระดับความรุนแรงขั้นต่ำที่ `MODE=block` จะปฏิเสธ: `high` (ค่าเริ่มต้น), `medium` หรือ `low`               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias แบบเดิมสำหรับ `INPUT_SANITIZER_BLOCK_THRESHOLD`                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | เมื่อเป็น `true` ข้อมูล PII ในคำขอจะถูกปกปิด (ไม่ขึ้นกับโหมด injection)                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | ควบคุมลักษณะการทำงานของ masker ฝั่งการตอบกลับ                                                            |

Guardrails ของ Modality Bridge อ่านการกำหนดค่าขณะรันไทม์จาก settings
store ที่มี DB รองรับ (`getSettings()`) ไม่ใช่จาก env vars โดย primary keys ของ Vision คือ
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` และ
`modalityBridgeCacheMaxEntries` ส่วน keys แบบเดิม
`visionBridge*` จะได้รับการยอมรับเฉพาะในฐานะกลไกสำรองสำหรับการอ่านหนึ่งรอบตามที่ระบุไว้
ในเอกสารเท่านั้น การเขียนค่าจาก dashboard จะใช้ primary keys ค่าเริ่มต้นและตัวแก้ไข
fallback อยู่ใน `src/shared/constants/modalityBridgeDefaults.ts` ขณะที่ constants
แบบเดิมยังคงอยู่ใน `src/shared/constants/visionBridgeDefaults.ts`

Audio ใช้ `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` และ `modalityBridgeAudioMaxClips` ร่วมกับ settings
`modalityBridgeCache*` ที่ใช้ร่วมกัน Audio ไม่มีกลไก fallback ไปยัง keys แบบเดิม เนื่องจาก
keys เหล่านี้ถูกนำมาใช้พร้อมกับ schema ของ Modality Bridge

Video ใช้ `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` และ
`modalityBridgeVideoTimeout` ร่วมกับ settings `modalityBridgeCache*` ที่ใช้ร่วมกัน
โดยค่าเริ่มต้นจะปิดใช้งาน เนื่องจาก FFmpeg/ffprobe เป็น operational dependencies
ที่ไม่บังคับ และการสร้างคำบรรยายให้แต่ละ frame จะเพิ่มเวลาแฝงและต้นทุนของโมเดล

## การ์ดเรลแบบกำหนดเอง

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

ขั้นตอน:

1. สร้าง `src/lib/guardrails/myGuardrail.ts` โดยสืบทอดจาก `BaseGuardrail`
2. อิมพลีเมนต์ `preCall` และ/หรือ `postCall`
3. ลงทะเบียนขณะนำเข้า (เพิ่มจาก `registerDefaultGuardrails`) หรือ
   เรียก `guardrailRegistry.register(...)` ขณะรันไทม์ — รีจิสทรีจะแทนที่
   การ์ดเรลก่อนหน้าที่มีชื่อหลังการปรับรูปแบบเหมือนกัน
4. เพิ่มการทดสอบภายใต้ `tests/unit/` (ตัวอย่างที่มีอยู่:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`)

## การทดสอบ

ใช้ `resetGuardrailsForTests()` ระหว่างการทดสอบแต่ละรายการเพื่อเริ่มต้นจากสถานะที่ทราบแน่ชัด
ส่ง `{ registerDefaults: false }` เพื่อเริ่มต้นด้วยรีจิสทรีว่างและ
ลงทะเบียนเฉพาะการ์ดเรลที่กำลังทดสอบ Vision Bridge รองรับการฉีดการพึ่งพา
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge มีจุดเชื่อมต่อ
ที่เทียบเท่ากันสำหรับการตั้งค่า ความสามารถ การเลือกโมเดล STT การตรวจสอบข้อมูลรับรอง
และการถอดเสียง ดังนั้นการทดสอบจึงสามารถตรวจสอบโฟลว์ทั้งสองได้โดยไม่ต้องเข้าถึง DB
หรือเครือข่าย

## ดูเพิ่มเติม

- `src/lib/guardrails/` — การอิมพลีเมนต์
- `src/shared/utils/inputSanitizer.ts` — ตัวตรวจจับร่วมที่ขับเคลื่อน
  การป้องกัน prompt injection และการปกปิด PII
- `src/shared/constants/visionBridgeDefaults.ts` — ค่าเริ่มต้นของ Vision Bridge และ
  รายการโมเดลที่บังคับใช้บริดจ์
- `src/shared/constants/modalityBridgeDefaults.ts` — ค่าเริ่มต้นรันไทม์ที่ใช้ร่วมกันของ Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — เลเยอร์ที่เป็นอิสระจากกัน (circuit breaker, ช่วงพัก)
- `docs/reference/ENVIRONMENT.md` — เอกสารอ้างอิงตัวแปรสภาพแวดล้อมฉบับเต็ม

## ความครอบคลุมของเส้นทางและการทดสอบแบบเรดทีมสำหรับการป้องกันการแทรกคำสั่ง (Phase 8 · Block D)

การป้องกันการแทรกคำสั่ง (`createInjectionGuard` / `withInjectionGuard`) ครอบคลุมทุกเส้นทาง
ที่รับพรอมต์จากผู้ใช้ โดยจะเคารพ `INJECTION_GUARD_MODE` (ค่าเริ่มต้น `warn` = บันทึกล็อกเท่านั้น;
`block` = ส่งคืน HTTP 400 `SECURITY_001`)

| ประเภท         | เส้นทาง                                                                                                                                              | โหมดเริ่มต้น |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| ข้อความ (เดิม) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| เชิงสร้างสรรค์ | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| ข้อมูล         | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

การแยกข้อความ (`extractMessageContents`) ครอบคลุม `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`

**เรดทีม (ทุกคืน, `nightly-llm-security.yml`):** promptfoo ตรวจสอบว่าแต่ละเส้นทางบล็อก
คลัง OWASP-LLM ใน `INJECTION_GUARD_MODE=block`; garak เรียกใช้โพรบ (ข้ามหากไม่มีข้อมูลลับ)
`moderations` ถูกรวมไว้เพื่อความสอดคล้อง — ผู้ดูแลระบบที่ใช้โหมดบล็อกสามารถยกเว้นเส้นทางนี้ผ่าน
`resolveDisabledGuardrails`

เวิร์กโฟลว์รายคืน (`.github/workflows/nightly-llm-security.yml`, cron + การสั่งงาน
ด้วยตนเอง) มีสองงาน:

- **`promptfoo-guard` (บล็อกเมื่อไม่ผ่าน)** — เรียกใช้ `promptfoo eval -c promptfooconfig.yaml`
  โดยใช้ `INJECTION_GUARD_MODE=block` กรณีโจมตีแต่ละกรณี (เช่น "เพิกเฉยต่อ
  คำสั่งก่อนหน้าทั้งหมด…", การเจลเบรกแบบ DAN) จะยืนยันว่าการตอบกลับมี
  `error.code === "SECURITY_001"` กล่าวคือ การ์ดได้ปฏิเสธคำขอจริง
- **`garak` (ให้คำแนะนำ)** — เรียกใช้ garak `--probes promptinject,dan,leakreplay`
  กับอินสแตนซ์ OmniRoute ภายในเครื่อง (`http://localhost:20128/v1`) โดยขึ้นอยู่กับ
  ข้อมูลลับของผู้ให้บริการ (`PROMPTFOO_PROVIDER_KEY`); จะข้ามอย่างราบรื่นหากไม่มีข้อมูลดังกล่าว และต่อท้ายด้วย
  `|| true` จึงรายงานผลโดยไม่ทำให้ CI ล้มเหลว

ความครอบคลุมของตัวช่วยการ์ด (`createInjectionGuard` / `withInjectionGuard`)
ครอบคลุมทุกเส้นทาง `/v1` ที่มีพรอมต์; ข้อความพรอมต์จะถูกดึงจาก
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` โดย
`extractMessageContents()` ใน `src/shared/utils/inputSanitizer.ts`
