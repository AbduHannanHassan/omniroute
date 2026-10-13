# Guardrails (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fuente de referencia:** `src/lib/guardrails/`
> **Última actualización:** 2026-08-29 — v3.8.51 (la procedencia de la transcripción de Video Bridge es declarada por quien realiza la llamada,
> aún no está verificada por el servidor — aclarado según #11661)

Las barreras de seguridad aplican medidas de seguridad, políticas y transformaciones de contenido en el límite
entre OmniRoute y los proveedores ascendentes. Cada barrera puede inspeccionar (y
opcionalmente rechazar, transformar o anotar) las cargas útiles de las solicitudes (`preCall`) y
las respuestas ascendentes (`postCall`).

El sistema es **fail-open**: si una barrera genera una excepción durante la ejecución, el registro
guarda el error y continúa con la siguiente barrera en lugar de hacer que falle la
solicitud. El bloqueo es una decisión explícita (`block: true`), nunca un accidente.

## Guardrails Integrados

El registro carga automáticamente seis guardrails en orden de prioridad al importar
(vea `registry.ts` → `registerDefaultGuardrails()`):

| Prioridad | Nombre              | Etapa(s)       | Archivo               |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Los números de prioridad más bajos se ejecutan **primero**.

### Vision Bridge (`visionBridge.ts`) — Puente de Modalidad PR-1

Intercepta solicitudes que contienen imágenes dirigidas a **modelos no visuales** y
ya sea redirige toda la solicitud a un modelo capaz de visión o reemplaza las partes de imagen
con descripciones de texto producidas por un modelo de visión configurable antes
de la llamada ascendente. Esto permite que los proveedores solo de texto manejen
cargas multimodales de manera transparente.

Flujo:

1. Omitir si el modelo objetivo ya soporta visión (a menos que aparezca en la
   lista de puente forzado `isVisionBridgeForcedModel`).
2. Extraer partes de imagen a través de `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega al **detector de medios unificado**
   `detectMediaParts()` en `open-sse/utils/mediaParts.ts` — la
   única fuente de verdad compartida con el filtro de compatibilidad combinado.
   La extracción está permitida solo para las partes de nivel superior de las formas
   que `replaceImageParts` puede volver a insertar (el contrato de extracción↔reemplazo): OpenAI
   `image_url`, base64 de Anthropic `source.type:"base64"`, URL de Anthropic
   `source.type:"url"`, y API de Respuestas `input_image`. Los hits anidados y
   las formas solo de indicador son material del filtro combinado y nunca se extraen.
   Omitir si no se encuentra ninguno.
3. Resolver la configuración de tiempo de ejecución a través de `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): las nuevas claves de configuración
   `modalityBridge*` ganan; las claves heredadas `visionBridge*` permanecen como un
   **retroceso de un ciclo** (ventana de retroceso). Omitir antes de cualquier
   recorrido de medios cuando el puente está deshabilitado.
4. El selector de modo (`modalityBridgeVisionMode`, vea la tabla a continuación) decide
   redirigir vs describir. La redirección devuelve `modifiedPayload` con solo `model`
   intercambiado, más meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ruta de descripción: limitar imágenes a `maxImages`, componer el aviso consciente de la tarea,
   consultar la caché de descripción, llamar al modelo de visión **en paralelo**
   (`Promise.allSettled`), e inyectar partes de texto `[Image N]: <description>` en
   su lugar. Una descripción fallida produce `null` y la parte de imagen original se
   **preserva** (#4012) — excepto en la ruta de descripción combinada cuando cada
   descripción falló, donde un upstream confirmado no visual recibe un
   `(no disponible — ningún proveedor capaz de visión conectado)` stub en su lugar (#8430).
6. Devolver `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selector de modo (`modalityBridgeVisionMode`)

| Modo       | Predeterminado | Comportamiento                                                                                                                                                                                                                                                                                                |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔              | Heurística heredada, sin cambios (#6640/#7204): modelos no combinados/`auto/` redirigen al mejor modelo de visión a menos que el modelo original ya tenga credenciales utilizables (entonces describe); los objetivos combinados siempre describen.                                                           |
| `describe` |                | Siempre describe — el bloque de redirección se omite por completo; el modelo elegido por el usuario siempre responde.                                                                                                                                                                                         |
| `reroute`  |                | Forzar redirección: se omite la guardia del modelo con credenciales. La guardia de credenciales del objetivo de redirección aún se aplica — cuando no existe un objetivo de visión utilizable, la solicitud pasa a describir para que las imágenes en bruto nunca lleguen a un backend solo de texto (#8430). |

Los modos forzados cortocircuitan **antes** de que se ejecute la heurística automática; el comportamiento `auto`
es idéntico en bytes al guardrail anterior a PR-1.

#### Aviso de descripción consciente de la tarea (`modalityBridgeVisionTaskAware`)

Predeterminado **verdadero**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) agrega
el texto del **último mensaje del usuario** (truncado a 500 caracteres) al aviso base
de descripción, orientando la descripción hacia lo que el usuario realmente preguntó
(patrón de proxy de codex-vision) y pidiendo al modelo de visión que transcriba el texto visible.
Con la bandera desactivada — o sin texto del usuario — se utiliza el aviso base sin cambios.

El bucle de auto-descripción de la solicitud compatible con OpenAI (`callVisionModelSingle()` en `visionBridgeHelpers.ts`) siempre solicita `image_url.detail: "high"` — incondicionalmente, para cada llamador/proveedor, sin estar condicionado a ninguna señal del cliente. El muestreo de baja calidad degrada la precisión de OCR para exactamente la tarea de transcripción de texto que este aviso solicita, por lo que la llamada de descripción siempre pide alta calidad independientemente del nivel de detalle que utilizara la solicitud de entrada original. Esto solo afecta el cuerpo de la solicitud de descripción interna; no cambia cómo OmniRoute reenvía el propio `image_url.detail` del llamador en la solicitud principal — ese valor predeterminado se aplica por separado, y solo para clientes OpenCode detectados, en `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). La rama de formato de wire de Anthropic del bucle de auto-descripción no tiene campo `detail` y no se ve afectada por ninguno de los valores predeterminados.

#### Límite de salida de descripción (`modalityBridgeVisionMaxChars`)

| Clave                          | Predeterminado | Rango           |
| ------------------------------ | -------------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`            | `0` o 100–50000 |

`0` (predeterminado) significa **sin límite** — la descripción devuelta por `callVisionModel()` se pasa sin modificar, preservando el comportamiento existente. Cualquier valor en el rango de 100–50000 trunca la descripción con un sufijo `…` antes de que se vuelva a insertar como `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` en `src/lib/guardrails/visionBridge.ts`). Aumenta esto para tareas de OCR con mucho detalle donde el modelo posterior necesita la transcripción completa; redúcelo para limitar el uso de tokens en modelos de visión muy conversadores. El campo del panel de control se encuentra en el panel Avanzado de la pestaña de Visión (`modality-bridge-max-chars` en `ModalityBridgeVisionTab.tsx`) y limita cualquier valor entre 1 y 99 hasta el mínimo de 100, mientras deja un `0` explícito sin tocar — `0` es un valor Zod válido por derecho propio (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), no meramente el valor predeterminado "no establecido".

#### Caché de descripción (`modalityBridge/bridgeCache.ts`)

Caché LRU + TTL en memoria para salidas de descripción, compartido a nivel de proceso. Clave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` con enmarcado de longitud-prefijo (sin colisiones de límite de campo). El componente del modelo es el modelo de puente **configurado**, no el modelo que realmente respondió — `callVisionModel` puede recurrir internamente, y la clave por intento fragmentaría la caché. Las descripciones fallidas nunca se almacenan en caché. Configuraciones:

| Clave                           | Predeterminado | Rango   |
| ------------------------------- | -------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`         | —       |
| `modalityBridgeCacheTtlMinutes` | `60`           | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`          | 10–5000 |

#### Normalización de imágenes remotas (bucle de auto-descripción/búsqueda base64)

Cuando el puente busca una imagen **remota** por sí mismo — la auto-llamada de descripción de Anthropic y la conversión base64 del formato de wire de claude (`ensureBase64ImagesForClaudeWire`), ambas a través de `fetchRemoteImageAsDataUri()` en `visionBridgeHelpers.ts` — el URI de datos resultante se pasa a través de `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) antes de ser incrustado en la solicitud del modelo de visión. Las imágenes sobredimensionadas se reducen a un **borde largo de 2048px** (coincidiendo con el límite de redimensionamiento que OpenAI/Anthropic ya aplican del lado del servidor), lo que reduce los bytes de carga/latencia sin cambiar lo que ve el modelo de visión. El redimensionamiento utiliza `sharp`, cargado a través de importación dinámica: en una plataforma donde su binario nativo no se carga, `normalizeDataUri()` **nunca lanza** — recurre a un paso a través de los bytes originales, por lo que la ruta de descripción/conversión base64 siempre sigue funcionando. Los bytes que no son imágenes (una búsqueda que no devolvió una imagen decodificable) también se pasan sin tocar. Esta normalización se limita a las imágenes que el puente busca para su propia auto-llamada — nunca se aplica a la carga útil de paso en bruto del llamador, consistente con el principio de mutación solo opt-in (Regla Dura #20).

#### Esquema de configuraciones + migración

Las nuevas claves `modalityBridge*` son validadas por Zod en `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, el trío `modalityBridgeCache*`, y el grupo `modalityBridgeAudio*` utilizado por el Puente de Audio. La migración `141_modality_bridge_settings.sql` copia los valores heredados existentes `visionBridge*` a las nuevas claves correspondientes (idempotente, nunca sobrescribe un valor `modalityBridge*` establecido por el operador); las claves heredadas siguen siendo aceptadas como una alternativa de lectura durante un ciclo de lanzamiento.

#### Encabezado de transparencia + estadísticas

Las respuestas transformadas por descripción llevan `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (construido por `buildModalityBridgeHeader()` en `modalityBridge/bridgeStats.ts`, sellado por `withModalityBridgeHeader()` en `src/sse/handlers/chatHelpers.ts`). Las solicitudes reenviadas **no** reciben encabezado — la carga útil no fue tocada y el intercambio de modelo ya es visible en el campo `model` del cuerpo de la respuesta.

`GET /api/modality-bridge/stats` (autenticación de gestión, mismo nivel que `GET /api/settings`) devuelve los contadores en memoria por modalidad `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio`, y `video`. `averageLatencyMs` utiliza `latencySamples`, no todos los intentos, como su denominador; una operación sin temporización no fabrica una muestra de cero milisegundos. `bridged` sigue siendo el alias compatible hacia atrás para conversiones exitosas; los intentos fallidos no lo incrementan. Los contadores se restablecen en el reinicio del proceso por diseño (telemetría, no contabilidad).

#### Configuración del panel de control

La página de panel dedicada es  
`/dashboard/settings/modality-bridge`. Sus pestañas `Vision`, `Audio` y `Video` accesibles por URL preservan los parámetros de consulta mientras cambian el valor de `tab`. La pestaña Vision expone habilitación, modo, selección de modelo (incluyendo el predeterminado automático), indicaciones conscientes de la tarea, límites avanzados de tiempo de espera/longitud de imagen/longitud de descripción/caché, contadores de tiempo de ejecución y una solicitud de muestra protegida. La pestaña Audio también está activa: expone habilitación, un selector de modelo solo STT con Auto, límites de tiempo de espera/máximo de clips, contadores de audio y una prueba de muestra de `input_audio`. La pestaña Video es funcional: informa el estado de tiempo de ejecución de FFmpeg/ffprobe — uno de cuatro estados de UI explícitos (`unknown` mientras la sonda está en vuelo o no pudo completarse, `restricted` en un host de panel no de bucle de retorno donde la sonda se omite del lado del cliente, `unavailable` una vez sondeado y confirmado como faltante, o `available` con las versiones de FFmpeg/ffprobe) — persiste habilitación/modelo/límite de fotogramas/video/tiempo de espera, filtra el selector de modelo a modelos capaces de visión y expone contadores de video.

La antigua tarjeta Vision Bridge bajo la configuración de AI es un enlace de compatibilidad a la nueva página; ya no posee una segunda copia del formulario. Los Proveedores de Medios también enlazan flujos de Trabajo de Imagen a Texto y de Voz a Texto a las pestañas correspondientes de Modality Bridge sin eliminar el parque de pruebas existente de Voz a Texto.

**Bypass de admisión de auto-bucle:** cuando la llamada de descripción se enruta a través del propio `/v1` auto-bucle de OmniRoute (modelo de proveedor no estándar), la sub-solicitud envía  
`x-omniroute-admission-bypass: internal` y se autentica con la credencial de auto-bucle resuelta — el centinela local `sk_omniroute` en modo local, o la clave de entorno configurada por el operador `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ( #1350) para que los despliegues `REQUIRE_API_KEY=true` aún puedan ejecutar la llamada de descripción. El bypass solo se respeta para esas credenciales exactas, por lo que los clientes externos no pueden usar el encabezado para omitir la admisión.

Los valores predeterminados heredados viven en `src/shared/constants/visionBridgeDefaults.ts`; los nuevos valores predeterminados conscientes de modo/tarea/cache y el resolvedor de configuraciones viven en `src/shared/constants/modalityBridgeDefaults.ts`. La barandilla expone una opción de constructor `deps` para que las pruebas puedan inyectar implementaciones falsas de `getSettings` y `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepta solicitudes de chat que contienen audio antes de que lleguen a un objetivo que no se conoce que acepte entrada de audio. Nunca redirige la solicitud de chat: las partes de audio se transcriben a través del punto final multipart compatible con OpenAI existente y el modelo de chat elegido continúa con las transcripciones de texto.

Flujo:

1. Resuelve `supportsAudio` a través de `getResolvedModelCapabilities()`. Los metadatos del registro de proveedores explícitos ganan, luego los metadatos del modelo estático, luego `modalities_input` sincronizados. Una lista de entrada declarada sin `audio` es `false`; no queda evidencia de capacidad `null`. Tanto `false` como `null` activan el puente conservador, mientras que `true` lo omite.
2. Resuelve configuraciones `modalityBridgeAudio*` y extrae partes de audio de nivel superior spliceables de cada mensaje a través del detector compartido `detectMediaParts()`. Las formas de cable soportadas son `input_audio`, `audio_url` de OpenAI, y `source.media_type: "audio/*"`. El audio anidado se detecta para enrutar pero no se elimina por la ruta de splice. El trabajo está limitado por `modalityBridgeAudioMaxClips`; las partes posteriores permanecen intactas.
3. Honra un `provider/model` configurado, o deja que `selectAudioBridgeModel()` recorra `AUDIO_TRANSCRIPTION_PROVIDERS` en orden de catálogo estable y seleccione el primer modelo con una credencial de proveedor activa utilizable.
4. `callAudioTranscription()` convierte audio en base64/data-URI a un `file` multipart, o descarga un `audio_url` remoto a través de la guardia de salida solo pública con fijación de DNS y un límite de 25 MB. Luego envía el archivo y el modelo seleccionado al auto-bucle local `/v1/audio/transcriptions`, autenticado con `resolveSelfLoopBearer()`. La ruta de transcripción existente realiza la búsqueda normal de credenciales, manejo de enfriamiento/límite de tasa y despacho de proveedores.
5. Las llamadas exitosas reemplazan sus partes con `[Audio N]: <transcript>`. Las llamadas se ejecutan con `Promise.allSettled`: un fallo individual preserva esa parte de audio original (#4012 contrato). Si cada llamada falla y se prueba que el objetivo es `supportsAudio === false`, las partes se convierten en  
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 contrato). Para un objetivo desconocido (`null`), un resultado de todas las fallas permanece intacto. Un objetivo probado solo de texto sin credencial STT utilizable recibe el mismo stub explícito sin emitir una llamada de red.

Las transcripciones exitosas utilizan la caché LRU/TTL del Modality Bridge a nivel de proceso. La clave combina la referencia de audio, la etiqueta de operación estable `audio-transcription` y el modelo STT seleccionado; los fallos nunca se almacenan en caché. Los intentos de audio actualizan los contadores compartidos `bridged`, `cacheHits`, `failures` y `lastUsedAt`. Las respuestas transformadas llevan  
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; las solicitudes sin cambios no reciben un segmento de Audio Bridge.

Las configuraciones de tiempo de ejecución están respaldadas por DB y validadas por Zod:

| Clave                         | Predeterminado | Rango            |
| ----------------------------- | -------------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`         | —                |
| `modalityBridgeAudioModel`    | `""`           | Auto o ID de STT |
| `modalityBridgeAudioTimeout`  | `60000`        | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`            | 1–10             |

La caché compartida sigue controlada por `modalityBridgeCacheEnabled`,  
`modalityBridgeCacheTtlMinutes` y `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta las partes de video de nivel superior en `messages` y Respuestas de Chat Completions
API `input` antes de que se llame a un objetivo sin soporte nativo de video conocido.
Las formas soportadas son `input_video`, `video_url`, `video_source`, URLs HTTPS,
y `data:video/*;base64,...` URIs de datos. Los nombres de archivos simples en texto no se tratan
como video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) se encarga de la travesía de solicitudes, la
verificación de capacidad/política, la agregación por solicitud y la carga útil de respuesta.
El trabajo por video — adquisición, la caché de resultados completos, la descripción de una secuencia de fotogramas
(que fusiona cualquier transcripción de audio declarada por el llamador), y métricas/abortos/limpieza por intento — está oculto detrás de `processVideoPart` en
`videoBridgePipeline.ts`, llamado una vez por parte de video dentro del bucle de `preCall`.
Ese módulo también define los límites de puerto explícitos `VideoMediaBrokerPort`
(adquiriendo bytes y extrayendo fotogramas muestreados), `VideoAudioTranscriptionPort`
(fusionando una transcripción de audio declarada por el llamador con los subtítulos muestreados), y
`VideoDrilldownPort` (la forma de almacenamiento en crudo heredada). La producción de STT y la retención de fotogramas
se componen alrededor del puerto descriptivo a través de `createVideoSttAdapter` y
`createVideoDrilldownAdapter`; este último utiliza el ciclo de vida de manejador opaco compartido.

La ruta de solicitud pública `/v1` nunca importa ni invoca un subprocesso. Los
videos remotos se descargan bajo un límite de 50 MiB; los videos base64 en línea tienen un
límite conservador de 36 MiB decodificados por video para que el modelo/mensajes/envase de enmarcado
puedan permanecer dentro del límite de admisión de solicitud JSON pública de 50 MiB. La longitud en línea y las
estimaciones de tamaño decodificado se verifican antes de la asignación. Se requiere HTTPS
en la URL remota inicial y en cada redirección, utilizando la guardia de salida pública existente
con fijación de DNS. Los bytes luego cruzan el límite exacto interno
`POST /api/modality-bridge/video/extract`. Esa ruta es tanto
`LOCAL_ONLY` como `SPAWN_CAPABLE`, acepta solo una solicitud autenticada por proceso,
bucle de confianza, y nunca acepta una URL, ruta de sistema de archivos, ejecutable,
o lista de argumentos. La tubería de tamaño del cuerpo de la API y el lector de cuerpo incremental del manejador
imponen independientemente un límite de entrada de 50 MiB para el corredor. Su cola limitada ejecuta
una extracción a la vez, permite cuatro trabajos pendientes, y limita la entrada pendiente a
100 MiB.

Dentro del corredor, `ffprobe` lee un archivo local privado; la lista de formatos
permitidos excluye formatos de lista de reproducción y manifiesto. Para los contenedores de la familia MOV permitidos,
las referencias de datos MOV externas permanecen deshabilitadas por defecto, y el
comando fijo no opta por ellas. Tanto `ffprobe` como `ffmpeg` utilizan la
lista blanca de protocolo solo `file`, un hilo, arreglos de argumentos fijos, sin shell,
y ejecutables resueltos desde `PATH`. Los flujos de portada de imagen adjunta no son
candidatos reproducibles. Todos los flujos reproducibles deben satisfacer los límites, y un
flujo predeterminado explícito es preferido antes de la caída de índice más bajo determinista.
Los videos están limitados a 600 segundos, 8,192 píxeles por dimensión, y
33,554,432 píxeles de origen. FFmpeg muestrea de 1 a 16 fotogramas JPEG en el punto medio, reduce la escala
del lado largo a un máximo de 1,024 píxeles sin aumentar entradas más pequeñas, y
nunca recibe una URL. El muestreo es `uniforme` por defecto. Las políticas opcionales
`scene_aware` y `segment_aware` realizan un pase adicional fijo de FFmpeg sobre el flujo local ya validado, seleccionan
marcas de tiempo de escena `showinfo` limitadas, y retroceden de manera determinista a los mismos
puntos medios uniformes en caso de fallo del detector, tiempo de espera, salida malformada, o un conjunto de
candidatos vacío. El modo consciente de segmentos asigna muestras de puntos medios proporcionalmente a
los intervalos de escena validados; la evidencia consciente de segmentos y el comportamiento de retroceso se
detallan a continuación. El límite estricto de 16 fotogramas se aplica
después de la selección en cada política. Cuando una solicitud consciente de escena tiene solo un
presupuesto de un fotograma, utiliza el punto medio uniforme de todo el video activo o ventana de enfoque
y reporta `policyEffective: uniform`: un solo fotograma de escena seleccionado
no puede preservar ambos extremos temporales. Un llamador puede opcionalmente proporcionar una
ventana de enfoque finita (`start`/`end` segundos); los límites se ajustan a la duración del medio, las ventanas invertidas o no finitas son rechazadas, y todas las políticas de muestreo se realizan solo dentro del intervalo normalizado. La ventana resultante se incluye en los metadatos de muestreo y en el prefijo de descripción no confiable
para que los modelos posteriores puedan distinguir un extracto enfocado de la línea de tiempo completa.

El enfoque semántico de subtítulos es una configuración separada y explícita. El modo de análisis
predeterminado `full` preserva el aviso de fotograma existente y nunca reenvía el texto de la solicitud al modelo de subtítulos. En el modo `focused`, el puente lee solo el último
`text`/`input_text` no vacío creado por el usuario del mismo contenedor de Chat o Respuestas, lo normaliza a NFC, colapsa caracteres de control y espacios en blanco,
y lo limita a 500 puntos de código Unicode. Un resultado vacío retrocede al
exacto aviso `full`. Una pista utilizable se serializa como JSON en un bloque dedicado
de contexto de usuario no confiable y solo puede priorizar detalles observables; no
puede anular la advertencia separada contra seguir instrucciones visibles
o audibles en el medio. El enfoque textual nunca infiere `start`/`end` o cambia
el muestreador temporal.

#### FU-07 evidencia de segmento estructural

`segment_aware` utiliza un pase de pre-análisis limitado sobre el flujo de video local ya validado. La cadena de filtros fija primero escala a un máximo de 320 píxeles
de ancho, detecta cambios de escena e intervalos congelados, luego muestrea a 1 fotograma por
segundo para desenfoque, luma promedio, y información espacial/temporal. El pase está
limitado a 600 muestras estructurales, un hilo de FFmpeg/filtro, las mismas
listas blancas de protocolo y contenedor solo `file`, un límite de salida de proceso de 1 MiB,
y un máximo de 30 segundos dentro de la fecha límite/abort compartido del corredor. Nunca
acepta un comando, filtro, ruta o URL de la solicitud.

Los valores estructurales son evidencia de muestreo determinista, no comprensión semántica del video. No infieren sujetos, acciones, subtítulos, discurso o intención del usuario. Los límites de escena y congelación forman segmentos; la cobertura de congelación, el desenfoque, la exposición, el detalle espacial y el cambio temporal solo influyen en cómo se asigna el presupuesto existente de 1 a 16 fotogramas. Un segmento completamente congelado está limitado a un fotograma, mientras que los segmentos no congelados compiten por el presupuesto restante. Cuando los límites superan a los fotogramas, se mantiene una cobertura uniforme de la línea de tiempo, de modo que los cortes rápidos al principio no pueden ocultar un segmento largo en cola. Los límites de escena dentro de la resolución de análisis de 1 segundo de un límite de congelación se fusionan.

Filtros faltantes, evidencia malformada/vacía, un error del detector o el tiempo de espera de pre-análisis limitado fallan abriendo a la política del punto medio uniforme exacto. Un aborto del llamador o un plazo del corredor no fallan abriendo: terminan el subprocesso en vuelo, previenen la extracción de fotogramas posteriores y el árbol temporal privado se elimina en `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genera elementos FFmpeg reales deterministas para ahorros de llamada de subtítulos post-deduplicación, asignación de presupuesto de movimiento denso, evidencia de desenfoque/exposición/SI-TI, cortes rápidos con una larga cola y falsos positivos de desvanecimiento gradual. Registra el tiempo de pared de pre-análisis y, donde `/usr/bin/time` está disponible, el CPU hijo y el RSS máximo. Sus verificaciones de calidad son oráculos estructurales solamente. La calidad real del modelo de subtítulos permanece en `HOLD` porque este arnés no tiene un punto final autorizado o un juez congelado. Los ahorros monetarios también permanecen en `HOLD` a menos que `--caption-cost-per-call-usd` proporcione una estimación positiva explícita por llamada; el script nunca fabrica ninguno de los resultados.

Cada fotograma está limitado a 4 MiB, todos los fotogramas sin procesar juntos a 23 MiB, y la respuesta del corredor serializada a 32 MiB. Un directorio temporal privado se elimina en `finally`. OmniRoute no agrupa FFmpeg y no acepta una ruta ejecutable personalizada. Antes de la subtitulación, el puente aplica un pase de deduplicación visual conservador: cada JPEG se reduce a un búfer en escala de grises de 16×16 y se compara solo con el último fotograma retenido. Para un presupuesto de subtítulos solicitado por encima de un fotograma, la extracción proporciona un grupo de candidatos limitado de hasta el doble de ese presupuesto y nunca más de 16 fotogramas. El límite solicitado se aplica solo después de la deduplicación, con los primeros y últimos candidatos seleccionados preservados durante el afinado final cuando el presupuesto es al menos dos. La política versionada `grayscale-16x16-mean-cells-v2` utiliza el mayor de la delta de luma media y la relación de celdas de miniatura cuya delta normalizada es al menos 0.05. El umbral de duplicados es la constante 0.04, elegida por su predecibilidad en lugar de ser expuesta como una configuración de tiempo de ejecución. Esta señal secundaria de alto contraste preserva pequeños movimientos y cambios de texto visible que una comparación solo de media puede ocultar. Los errores de comparador o decodificador fallan abriendo y mantienen la cobertura. Los metadatos de salida separan los candidatos extraídos, los fotogramas utilizados con éxito y los duplicados visuales eliminados.

Una parte de video explícitamente marcada puede solicitar una hoja de contacto con marca de tiempo. El puente construye como máximo una cuadrícula JPEG de 4 columnas y 16 fotogramas. Cada celda de 512 píxeles quema su marca de tiempo de origen en una banda inferior de alto contraste, mientras que las mismas marcas de tiempo permanecen en los metadatos textuales para la asociación y auditoría posteriores. El JPEG completo permanece limitado a 32 MiB. Si `sharp` no puede decodificar o componer la cuadrícula, el puente vuelve a los fotogramas JPEG individuales; un aborto del cliente aún se propaga a través de la operación de la hoja.

La evidencia de promoción está deliberadamente separada del microbenchmark de composición sintética. `scripts/perf/video-bridge-contact-sheet-eval.ts` define un arnés A/B versionado por esquema para modelos de visión compatibles con OpenAI reales. Mide los tokens reportados por el proveedor, la latencia de pared de extremo a extremo (incluida la composición de la hoja), el conteo de llamadas al modelo y la retención de hechos definida por el manifiesto. Las respuestas del modelo en bruto no se escriben en el informe; solo se retienen los resúmenes SHA-256 y los IDs de hechos coincidentes. El arnés no realiza ninguna llamada de red o de modelo pagado a menos que se pase `--execute-real` y se configuren `--model`, `OMNIROUTE_BASE_URL` y `OMNIROUTE_API_KEY`. Sin esa ejecución real explícita, su veredicto legible por máquina permanece en `HOLD`; las mediciones de carga útil/cantidad de llamadas sintéticas por sí solas no son evidencia de promoción.

El separado `scripts/perf/video-bridge-promotion-eval.ts` consume observaciones de FU-07 o FU-09. La admisión de promoción requiere los ocho tipos de escenarios sintéticos más un clip real sanitizado, al menos tres repeticiones medidas por rol y caso, las diez métricas declaradas, resúmenes de medios/prompt/hechos/ajustes congelados, IDs de observación únicos y orden A/B verificado. El recibo de ejecución vincula el resumen del corpus, el SHA exacto del candidato y la revisión del modelo. Las mediciones faltantes o inválidas permanecen en `HOLD`, incluyendo CPU por encima de 30 s, RSS máximo por encima de 512 MiB o pre-análisis por encima de 30 s. Estos son límites de admisión de evidencia, no una nueva garantía de aplicación de RSS en tiempo de ejecución.

FU-07 requiere al menos un 98% de retención de calidad y una latencia p95 no mayor a 1.2x de la línea base, además de una mejora de recall media equilibrada absoluta de 0.05 en llamadas de subtítulos medias equivalentes, o al menos un 10% menos de llamadas de subtítulos medias post-deduplicación. FU-09 requiere al menos 0.85 de calidad, 95% de retención, una reducción de latencia p95 del 20% y una reducción del 10% en tokens. La pérdida de hechos críticos, el cumplimiento de inyección o el uso faltante impiden la promoción. Una ejecución no puede promover nada: `--previous-report` confirma dos ejecuciones distintas, no superpuestas, consecutivas elegibles de la misma política/revisión de modelo/candidato/corpus. Un experimento de muestreo no puede confirmar un experimento de hoja de contacto.

Los recolectores deben puntuar las respuestas en memoria y guardar `responseDigest` más métricas y enlaces de observación, nunca el texto de respuesta. El consumidor también lee observaciones crudas heredadas, pero nunca copia ese texto en sus informes. Exactamente uno de `responseDigest` o `rawResponseText` es aceptado para cada observación. La lista permitida versionada permanece vacía con un `hold` predeterminado inmutable. Una entrada elegible requiere su referencia de evidencia, política, revisión del modelo, SHA exacto del candidato, digest de manifiesto y dos IDs de ejecución distintos; los contextos en conflicto son rechazados. Estos metadatos son un contrato de auditoría, no prueba de que un archivo referenciado contenga mediciones genuinas. Revise los recibos reales antes de agregar cualquier entrada. El endpoint de estadísticas de gestión y el panel de Video exponen una preparación conservadora. Un alias de modelo configurado por sí solo no establece su revisión ni el SHA del candidato en ejecución, por lo que el panel actual informa `HOLD` en lugar de reutilizar la elegibilidad de otro contexto de ejecución. La selección experimental explícita permanece separada de la promoción; ningún valor predeterminado se cambia automáticamente.

Los llamadores pueden adjuntar un array opcional `transcript.cues` a una parte de video soportada cuando ya poseen texto alineado. Cada indicio debe llevar `text`, un intervalo finito `start`/`end` dentro de la duración sondeada, y un `source` en la lista blanca (`client`, `embedded` o `audio-bridge`); `confidence` tiene un valor predeterminado de `1` y debe permanecer entre `0` y `1`. Los indicios duplicados exactos se colapsan. OmniRoute nunca inicia la transcripción a partir de estos metadatos: los indicios validados se copian en el resultado descrito con fuente, confianza e intervalo, y se representan como observaciones no confiables junto con los subtítulos del marco. El texto inválido, fuera de rango o sin procedencia es rechazado en lugar de mezclarse en el flujo de subtítulos. Ambos canales de transcripción del cuerpo de la solicitud normalizan la procedencia suministrada a `client`, incluyendo etiquetas autoafirmadas `embedded` o `audio-bridge`. Solo un adaptador de propiedad del servidor puede asignar esas etiquetas confiables a través del argumento solo de código `trustedSource`; un campo JSON de solicitud no puede alcanzar ese argumento. El texto de la transcripción sigue siendo contenido derivado de medios no confiables, independientemente de su procedencia, y nunca debe determinar la autorización.

Un llamador avanzado puede proporcionar una pista `audioTranscript` para el mismo video; se trata como texto proporcionado por el cliente, no como prueba de transcripción del servidor. La costura de fusión ejecuta observaciones visuales y de audio bajo una misma fecha límite y señal de aborto, las ordena en una línea de tiempo común, colapsa duplicados exactos y reporta un resultado parcial cuando solo un lado tiene éxito. Un `audioTranscript` inválido se degrada a ese resultado parcial: se mantiene la descripción visual y la rama de audio registra un código de fallo sanitizado, en lugar de fallar todo el video. La disponibilidad por rama, la bandera parcial y los códigos de fallo sanitizados se preservan en el resultado descrito, en los metadatos de guardarraíl (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), en los metadatos de caché de resultados y en los contadores de fusión del puente. La ruta predeterminada del Video Bridge no invoca el reconocimiento de voz a texto ni descarga una segunda copia de medios; sin esa pista explícita, permanece solo como video.

**Retención de transcripciones (#12150 P1).** Esto se aplica automáticamente siempre que el Video Bridge (que es opcional) renderiza un indicio de transcripción: no hay una bandera de retención separada. Cuando una solicitud renderiza cualquier indicio de transcripción (un `transcript` declarado por el llamador o un `audioTranscript` fusionado), el guardarraíl lo marca como `videoBridgeObserved` y produce una sombra redactada de la descripción del video: una representación idéntica en la que el cuerpo de texto libre de cada indicio es reemplazado por `[redacted-video-transcript]`, construido al sustituir el campo de indicio estructurado antes de que se ensamble la cadena (nunca mediante el análisis del texto aplanado, por lo que ningún contenido de indicio —adversarial u ordinario, incluyendo cuerpos que contengan `]` como `[inaudible]`/`[music]`— puede sobrevivir). El cuerpo de solicitud del registro persistido intercambia cada parte de texto derivada del video por esa sombra redactada, emparejada por igualdad de contenido; el ancla `fullText` se vuelve a leer del payload de guardarraíl previo a la llamada finalizada, por lo que la coincidencia aún tiene éxito después de que los guardarraíles de cadena posteriores (los enmascaradores de PII y credenciales, prioridades 10/95) reescriben el texto de descripción en su lugar y después de que la inyección de mensajes del sistema/prompt/transferencia remodela el array de mensajes. El cuerpo enviado hacia arriba al modelo no cambia. Una solicitud observada tampoco pobló ninguna Memoria duradera (se omiten tanto la extracción derivada de la solicitud como la de la respuesta), por lo que la propia respuesta del modelo no puede reflejar el texto de la transcripción en la Memoria.

**Campos de video crudo (#12430).** Cuando el puente está habilitado y el soporte de video nativo es desconocido o está ausente, los campos definidos `transcript`/`audioTranscript` también activan `videoBridgeObserved`, incluso después de un fallo de descripción o un límite de `maxVideos`. `null` y cadenas vacías cuentan; los campos ausentes y los metadatos no relacionados con video no. Las copias retenidas redactan estos campos u omiten la solicitud, y se omiten las cachés/Memoria. La carga útil del proveedor permanece sin cambios.

Copias retenidas adicionales utilizan la misma señal de solicitud observada. La instantánea de solicitud del cliente antes del guardarraíl, la solicitud pendiente en memoria y el registro de solicitudes rechazadas tempranas reemplazan estructuralmente los campos de transcripción en partes de video; las cadenas de texto sintetizadas por etapas de pipeline y transferencia de contexto son redactadas en el sumidero del cuerpo de solicitud persistido. El marcador persistido `video_content_removed` hace que la continuación de `previous_response_id` falle cerrada en lugar de reconstruir texto que fue intencionalmente descartado. Si una solicitud observada pierde su sombra de redacción por parte antes de ser registrada, o incluso una de varias sombras de video no coincide después de mutaciones posteriores de la solicitud, el cuerpo de solicitud retenido se omite por completo en lugar de retener una transcripción parcialmente redactada.

Para una solicitud observada, una respuesta del modelo puede citar cualquier parte de la transcripción sin un límite de señal estructurado. Su `responseBody` de registro de llamadas persistido se reemplaza por un marcador de omisión; el artefacto detallado de la tubería (que puede incluir cuerpos y fragmentos de flujo de upstream/clientes) no se retiene. Las cachés semánticas, de idempotencia y de reproducción de razonamiento omiten lecturas y escrituras para esa solicitud. La solicitud del proveedor y la respuesta visible para el cliente permanecen sin cambios. Los bytes de keepalive tempranos se drenan del búfer temporal cuando se omite el artefacto detallado. La advertencia de EventStream malformada de Kiro informa solo el conteo de bytes de carga útil, nunca su contenido o el error bruto del analizador JSON.  
Esto no afirma que cada diagnóstico no relacionado del proveedor/plugin haya sido auditado; la barrida de retención más amplia se rastrea en #11658.

El ciclo de vida interno de `/api/modality-bridge/video/drilldown` es un sustrato de caché separado, autenticado por bucle/token. Cada operación también requiere un ID de principal opaco canónico. Antes de que se habilite un llamador de producción, debe derivar ese ID del inquilino autenticado y nunca debe reenviar un valor seleccionado por el cliente. Las claves de caché vinculan a ese principal con IDs de sesión canónica y de referencia de video, almacenan solo sus claves derivadas de SHA-256, y limitan tanto las lecturas como la eliminación al mismo principal. La caché almacena un máximo de 16 fotogramas JPEG derivados por entrada, los expira después de diez minutos y admite lecturas o eliminación de sesión explícita con límites `start`/`end`.

Cada principal está limitado a 16 entradas y 64 MiB de datos JPEG canónicos. Esos límites son independientes del techo global de 64 entradas/256 MiB: la presión de cuota del principal expulsa solo las entradas menos utilizadas de ese principal antes de considerar la expulsión global LRU. Las entradas expiradas se eliminan tanto de la contabilidad del principal como de la global en la actividad de caché, mientras que la cancelación y el fallo de validación no comprometen un reemplazo parcial.

La caché rechaza Base64 no canónico, relleno excesivo, medios no JPEG, JPEG malformados o truncados, y JPEG que producen una advertencia durante una decodificación de imagen completa `sharp` limitada. Vuelve a codificar cada imagen aceptada como un JPEG canónico, deriva el ancho y la altura de los bytes decodificados en lugar de confiar en los campos del llamador, y descarta cualquier byte poliglota final en lugar de retenerlos. Solo el búfer comprimido canónico limitado se carga a ambas cuotas. El límite de wire JSON incluye el sobrecosto de Base64 para el techo de entrada decodificada de 32 MiB. Cada derivación almacenada registra su formato/resolución JPEG validada, política de muestreo, versión de derivación, hora de creación, hash de contenido computado por el servidor, y hash de referencia padre más el hash de contenido padre del llamador de confianza. La cancelación se verifica entre las fases de decodificación/hash asíncronas antes del compromiso atómico de la caché.

El productor de producción reutiliza los fotogramas de corredor ya derivados solo después de un análisis visual exitoso, sin una segunda descarga/extracción de video. Requiere `modalityBridgeVideoDrilldownEnabled=true` del operador, `drilldown: true` estricto por parte, y un ID de registro de clave API autenticada. Los valores de principal/sesión declarados por el cliente nunca establecen propiedad. Sin las tres condiciones, no se hash, redimensiona ni retiene fotogramas adicionales. El fallo de retención preserva la respuesta visual utilizable. Las solicitudes consentidas omiten la caché de resultados de video completo, por lo que los resultados en caché nunca reproducen manejadores.

Las respuestas JSON y SSE exitosas exponen como máximo cuatro manejadores opacos en el encabezado limitado `x-omniroute-video-drilldown`. Los orígenes de navegador autorizados pueden leer ese encabezado sin ampliar la política de origen CORS. Los nuevos manejadores utilizan `v1.<token aleatorio base64url de 32 bytes>`, y el registro retiene solo sus hashes SHA-256. El lector/parser de encabezados también acepta tokens hexadecimales de 64 legados. El consumidor público autenticado es `GET /api/v1/video-bridge/drilldown?handle=...`, independientemente controlado por `modalityBridgeVideoDrilldownRemoteEnabled=true`. Un falso persistido explícito revoca el acceso incluso cuando se habilita el retroceso legado `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED`. La retención de producción tiene el retroceso legado análogo `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Ambos retrocesos están desactivados por defecto.

El consumidor deriva la propiedad de la clave autenticada, aplica la política de clave y devuelve el mismo 404 para manejadores desconocidos, expirados y de otra clave. Acepta `variant=preview|standard|detail` (dimensión máxima JPEG 320/640/1280, nunca ampliada), `limit=1..8` (o el alias legado `frames`, nunca ambos), `page` basado en cero, y opcionales `start`/`end` segundos de enfoque. Las claves de consulta duplicadas y las ventanas de enfoque invertidas son rechazadas. Cada variante devuelta tiene un hash de su contenido real y metadatos de resolución real, vinculados a la fuente retenida. Las variantes se derivan al leer en lugar de almacenarse como copias retenidas adicionales. La respuesta JSON, incluido Base64/envelope, está limitada a 32 MiB; una página sobredimensionada devuelve 413 y el cliente debe solicitar menos fotogramas. Las lecturas verifican la cancelación alrededor de cada redimensionamiento y vuelven a verificar la validez del manejador antes de devolver. `DELETE` por el propietario es idempotente; la eliminación o la expiración de TTL libera la fuente retenida y la contabilidad de uso.

La tienda compartida es local al proceso: los manejadores expiran al reiniciar y no son transferibles entre procesos independientes de OmniRoute. Las estadísticas de gestión exponen la política de retención/remota efectiva y solo las entradas/bytes retenidos agregados, nunca medios, referencias, IDs de principal o manejadores. El panel de configuración de Video muestra esos valores y puede persistir ambos interruptores de consentimiento. Esta documentación de implementación no es evidencia de despliegue en vivo o promoción; la aceptación del modelo real se rastrea por separado.

Los fotogramas se subtitulan secuencialmente con el modelo de Video configurado. Un anulación de Video vacía hereda la configuración de Visión; si ambos están vacíos, el enrutador automático de visión selecciona el modelo efectivo capaz de visión. Los subtítulos exitosos reemplazan la parte original con un prefijo estable `[Descripción del Video:` que también marca el texto como una observación derivada de medios no confiables y le indica a los modelos posteriores que no sigan las instrucciones encontradas en los medios. Las claves de caché de subtítulos de fotogramas incluyen los bytes JPEG, el aviso, la marca de tiempo y el modelo efectivo; solo se almacenan en caché los subtítulos exitosos. Las entradas de caché retienen el modelo productor exitoso real, incluyendo un modelo de respaldo; el puente informa `mixed` cuando diferentes fotogramas fueron producidos por diferentes modelos. Un acierto de caché reutiliza esa identidad de productor en lugar de volver a etiquetarla como el plan de enrutamiento solicitado. La caché de resultados de todo el video se basa en cada entrada que cambia la salida: aviso, modelo efectivo, política de muestreo, recuento de fotogramas, modo de análisis semántico, la huella SHA-256 de la pista de enfoque normalizada, ventana de enfoque, `transcript`, `audioTranscript`, y la bandera de hoja de contacto; por lo tanto, cambiar cualquiera de esas dimensiones es un fallo de caché, nunca una reutilización obsoleta. La versión de política de deduplicación visual, el umbral y el recuento de fotogramas candidatos limitados también son explícitos en la clave de caché de resultados y metadatos; un cambio de política, por lo tanto, no puede reutilizar una descripción de video completo obsoleta. Los metadatos de caché de resultados v4 mantienen el modo y la huella, nunca la tarea de usuario en bruto. Los metadatos de guardrail informan tanto los modos de análisis solicitados como los efectivos; un modo `focused` solicitado sin texto de usuario utilizable se informa como efectivamente `full`.

El guardrail extrae cada parte de video soportada pero no describe más de `modalityBridgeVideoMaxVideos`. Para un objetivo que se ha demostrado tener `supportsVideo === false`, los videos fallidos y los que exceden el límite se convierten en marcadores de texto seguro explícitos, por lo que no sobrevive ningún video en bruto. Cuando la capacidad es desconocida, esas partes permanecen intactas. Los objetivos con `supportsVideo === true` evitan el puente. La señal de aborto de la solicitud del cliente se propaga a través de la descarga, la cola del corredor, los subprocesos y las llamadas de subtítulos; los abortos se detienen entre videos y nunca fallan abriendo a medios en bruto.

Los ajustes de tiempo de ejecución están respaldados por DB y validados por Zod:

| Clave                               | Predeterminado | Rango / comportamiento                                                                                   |
| ----------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`        | Opcional en tiempo de ejecución, opt-in                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`       | `full` preserva subtítulos genéricos; `focused` utiliza contexto de último usuario no confiable limitado |
| `modalityBridgeVideoModel`          | `""`           | Hereda el modelo del Puente de Visión                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`            | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`    | `uniform`, `scene_aware`, o `segment_aware` proporcional; la falla del detector vuelve a `uniform`       |
| `modalityBridgeVideoMaxVideos`      | `1`            | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`       | 1000–120000 ms                                                                                           |

Los valores de tiempo de espera de Video persistidos en legado por encima de 120 segundos se limitan a la fecha límite del corredor; se rechazan las escrituras de nuevos ajustes por encima de ese límite. `GET /api/modality-bridge/video/runtime` requiere localidad de bucle de retroalimentación confiable estampada antes de la autenticación o sondeo de tiempo de ejecución, luego requiere autenticación de gestión. Solo devuelve versiones de FFmpeg/ffprobe disponibles y sanitizadas, y una razón fija cuando el tiempo de ejecución no está disponible. El punto final de extracción interno no es una API de carga pública: la saturación de la cola devuelve `503` más `Retry-After`, una desconexión del llamador devuelve `499`, y la fecha límite fija del corredor devuelve `504`. Las respuestas convertidas añaden `video->text;model=<visionModel>;parts=<videos>` al encabezado central `x-omniroute-modality-bridge` sin eliminar segmentos de Visión o Audio.

### Enmascarador de PII (`piiMasker.ts`)

Funciona en **ambas** etapas.

- **`preCall`** clona la carga útil, recorre `system`, `messages`, `input`, y `prompt` (incluyendo elementos de cadena simple), y aplica `processPII()` (de `@/shared/utils/inputSanitizer`) a los campos de texto `content`/`text`. Cuando `PII_REDACTION_ENABLED=true`, la PII detectada se redacta en la carga útil saliente. Esto es independiente de `INPUT_SANITIZER_MODE` (que solo controla la política de inyección de aviso). Cuando la redacción está desactivada, la llamada registra los conteos de detección sin reescribir el contenido.
- **`postCall`** clona profundamente la respuesta, ejecuta `sanitizePIIResponse()` más el enmascarador de forma de API de Respuestas (`maskResponsesOutput` — cubre `output_text` y `output[].content[].text`). Si ocurre alguna redacción, la respuesta modificada reemplaza la original.

El guardrail nunca bloquea; solo anota (`meta.detections`, `meta.redacted`) o reescribe.

### Inyección de Aviso (`promptInjection.ts`)

Detecta estructuras adversariales en el contenido proporcionado por el usuario y hace cumplir la política configurada. El comportamiento está impulsado por variables de entorno y opciones del constructor:

| Configuración     | Var de entorno                                                                                        | Predeterminado | Efecto                                                                                                                                                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Habilitado        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`         | Cuando es `false`, el guardrail se corta.                                                                                                                                                                         |
| Modo              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`         | Política de inyección: `block`, `warn` o `log`. (`redact` se acepta por compatibilidad, pero **no** elimina el texto de inyección; la reescritura de PII solicitada está controlada por `PII_REDACTION_ENABLED`.) |
| Umbral de bloqueo | Opción `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`         | Severidad mínima requerida para bloquear. Medium es solo de observación por defecto.                                                                                                                              |

**Precedencia del modo** (`getMode`): `options.mode` del llamador →
`INJECTION_GUARD_MODE` **anulación de bandera de función de DB** (Dashboard → Configuración →
Banderas de función) → var de entorno `INJECTION_GUARD_MODE` → var de entorno `INPUT_SANITIZER_MODE` →
`warn`. Por lo tanto, una anulación del panel de control gana sobre las vars de entorno, así que la UI de Banderas de función controla el guardia en vivo (sin reinicio). La lectura de DB es a prueba de fallos:
si hay un error, el guardia vuelve al comportamiento basado en vars de entorno, y cuando no
se establece ninguna anulación, el comportamiento es idéntico a la resolución solo de vars de entorno.

Fuentes de detección:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (detector compartido
   utilizado en otros lugares de la canalización).
2. `DEFAULT_GUARD_PATTERNS` incorporados (actualmente `system_override_inline` y
   `markdown_system_block`, ambos de severidad `high`).
3. `customPatterns` opcionales pasados a través de opciones del constructor (cadenas, regex,
   o registros `{ name, pattern, severity }`).

Cuando `mode === "block"` **y** al menos una detección cumple con el umbral de severidad,
`preCall` devuelve `{ block: true, message: "Solicitud rechazada: contenido sospechoso detectado" }`. En modos `warn`/`log`, el guardrail registra pero
permite la llamada. El helper compartido `evaluatePromptInjection()` también se exporta
para los llamadores que necesitan evaluar prompts sin pasar por el registro.

**Límite de escaneo (v3.8.20):** el detector solo inspecciona los **primeros 16 KB** de
texto de prompt unido — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) en
`src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` como
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de ejecutar
el bucle de patrones. Las directivas de inyección se encuentran cerca de la parte superior de una entrada, por lo que esto limita el uso de CPU/GC de regex en cargas de varios cientos de KB sin debilitar la detección (cf.
#3932, #4041).

### Enmascarador de Credenciales (`credentialMasker.ts`)

Se ejecuta en **ambas** etapas, al final de la cadena predeterminada (prioridad `95`). Redacta
patrones de clave API / token secreto bien conocidos del payload saliente (contenido del mensaje,
argumentos de llamada a herramientas, resultados de herramientas) **y** la respuesta del proveedor, por lo que una
credencial pegada en un prompt (o devuelta por un resultado de herramienta) no se filtra
al proveedor upstream o de vuelta al cliente.

- **Solo con opción**, misma convención que la redacción de PII (Regla Dura #20-adyacente):
  deshabilitado a menos que `settings.credentialRedactionEnabled === true` **o**
  `CREDENTIAL_REDACTION_ENABLED=true`. Con esto desactivado, el guardrail no hace nada —
  nunca bloquea y nunca reescribe.
- `redactCredentials()` recorre todo el árbol de payload/respuesta (`walkValue()`,
  seguro contra contaminación de prototipos, seguro contra ciclos a través de `WeakSet`) y reemplaza coincidencias con
  un marcador de posición `[REDACTED:<type>]`, clonando solo las ramas que realmente
  cambiaron.
- `CREDENTIAL_PATTERNS` cubre claves de proveedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), claves de pago (Stripe, Square), claves de nube
  (clave de acceso de AWS, Twilio, SendGrid, Mailgun), claves privadas / JWTs,
  cadenas de conexión que contienen credenciales (`mongodb://user:pass@...`, etc.), y
  un patrón genérico de encabezado-valor `Authorization`/`x-api-key`/`api-key`/`apikey`.
- Las claves con forma de encabezado (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se redactan estructuralmente (solo el valor, el prefijo del esquema como
  `Bearer `/`Basic ` se conserva) en lugar de a través de la regex de texto genérico.
- El guardrail nunca bloquea; solo reescribe (`modifiedPayload` /
  `modifiedResponse`) y anota (`meta.credentialsRedacted`, `meta.count`).

Guardia de regresión: `tests/unit/credential-masker-guardrail.test.ts`.

## Contrato base (`base.ts`)

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
  block?: boolean; // true interrumpe inmediatamente la cadena
  message?: string; // se muestra cuando se bloquea
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // devuelto por preCall para reescribir la solicitud
  modifiedResponse?: TValue; // devuelto por postCall para reescribir la respuesta
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

Un mecanismo de protección indica que «no hay cambios» devolviendo `void`, `{}` o
`{ block: false }`. Devolver un `modifiedPayload`/`modifiedResponse` reemplaza
el valor que fluye por la cadena para los mecanismos de protección posteriores.
`signal?: AbortSignal` transmite el ciclo de vida del llamador a los mecanismos de protección. La cancelación de una solicitud es la excepción deliberada de apertura ante fallos: los puentes multimedia detienen el trabajo y realizan la limpieza sin restaurar los datos multimedia sin procesar en un destino que se sabe que no los admite.

## Registro (`registry.ts`)

La instancia singleton `guardrailRegistry` expone:

- `register(guardrail)` — añade un mecanismo de protección (o reemplaza uno según su nombre normalizado) y
  vuelve a ordenarlos por `priority` ascendente.
- `clear()` / `list()` — funciones auxiliares administrativas.
- `runPreCallHooks(payload, context)` — recorre los mecanismos de protección activos, pasa el
  payload a través de `modifiedPayload` y se detiene ante el primer `block: true`.
- `runPostCallHooks(response, context)` — el mismo flujo en el lado de la respuesta.
- `resetGuardrailsForTests({ registerDefaults })` — borra el estado y, opcionalmente,
  vuelve a registrar los valores predeterminados para lograr un aislamiento limpio de las pruebas.

Ambos ejecutores devuelven `{ blocked, payload|response, results, guardrail?, message? }`,
donde `results` es un array de registros `GuardrailExecutionResult` que incluyen
los campos `blocked`, `skipped`, `modified`, `error` y `meta` por cada mecanismo de protección,
útiles para el seguimiento.

### Desactivar mecanismos de protección por solicitud

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` recopila una
lista sin duplicados de nombres de mecanismos de protección que deben omitirse en la
solicitud actual. Fuentes (todas opcionales y combinadas):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` en el cuerpo de la solicitud (nivel superior)
- `metadata.disabledGuardrails` en el cuerpo de la solicitud
- Encabezado `x-omniroute-disabled-guardrails` (o el heredado
  `x-disabled-guardrails`)

Los valores pueden ser arrays de cadenas o una cadena separada por comas; los nombres se
normalizan a minúsculas en formato kebab-case (`pii_masker` → `pii-masker`). El resultado
se pasa mediante `context.disabledGuardrails` al registro, que omite
los mecanismos de protección coincidentes (`skipped: true` en `results`).

## Orden de ejecución

Para cada solicitud que pasa por `src/sse/handlers/chat.ts` y
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` crea la lista de omisiones a partir de la clave de API, el cuerpo
   y los encabezados.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` ejecuta las barreras de seguridad en orden
   ascendente de prioridad:
   - Las barreras de seguridad deshabilitadas se registran como `skipped`.
   - El método `preCall` de cada barrera de seguridad puede reescribir la carga útil mediante `modifiedPayload`.
   - El primer `block: true` interrumpe la cadena y el controlador devuelve
     una respuesta de rechazo de la barrera de seguridad.
3. La carga útil (posiblemente reescrita) pasa al enrutamiento combinado y al despacho
   ascendente.
4. Una vez creada la respuesta, `guardrailRegistry.runPostCallHooks(...)`
   ejecuta la misma cadena sobre la respuesta. En este caso, `block: true` descarta la respuesta
   ascendente.

Las barreras de seguridad que generan una excepción se registran con `error: <message>` y se anotan mediante
`logger.warn`, pero la cadena continúa; por diseño, se permite la operación en caso de fallo.

## Configuración

Variables de entorno leídas por las barreras de seguridad integradas:

| Variable                              | Utilizada por              | Efecto                                                                                                                                          |
| ------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`         | Establézcala en `false` para deshabilitar por completo la detección.                                                                            |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`         | Política de inyección: `warn`, `block` o `log`. El valor heredado `redact` no reescribe el texto de la inyección.                               |
| `INJECTION_GUARD_MODE`                | `prompt-injection`         | Modo de la protección contra inyecciones; también es una marca de funcionalidad de la BD que **reemplaza** las variables de entorno (BD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`         | Gravedad mínima que rechaza `MODE=block`: `high` (predeterminada), `medium` o `low`.                                                            |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`         | Alias heredado de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                            |
| `PII_REDACTION_ENABLED`               | `pii-masker`               | Cuando es `true`, se oculta la PII de la solicitud (independientemente del modo de inyección).                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (descendente) | Controla el comportamiento del ocultador en las respuestas.                                                                                     |

Las barreras de seguridad de Modality Bridge leen la configuración en tiempo de ejecución del almacén
de ajustes respaldado por la BD (`getSettings()`), no de las variables de entorno. Las claves principales de Vision son
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` y
`modalityBridgeCacheMaxEntries`. Las claves heredadas
`visionBridge*` solo se aceptan como mecanismo alternativo de lectura durante un ciclo, según lo documentado;
las escrituras del panel usan las claves principales. Los valores predeterminados y el
resolutor alternativo se encuentran en `src/shared/constants/modalityBridgeDefaults.ts`, mientras que las constantes
heredadas se conservan en `src/shared/constants/visionBridgeDefaults.ts`.

Audio usa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` y `modalityBridgeAudioMaxClips`, además de los ajustes compartidos
`modalityBridgeCache*`. Audio no tiene un mecanismo alternativo para claves heredadas porque estas
claves se introdujeron con el esquema de Modality Bridge.

Video usa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` y
`modalityBridgeVideoTimeout`, además de los ajustes compartidos `modalityBridgeCache*`.
Está deshabilitado de forma predeterminada porque FFmpeg/ffprobe son dependencias operativas
opcionales y la descripción de fotogramas añade latencia y costes del modelo.

## Barreras de protección personalizadas

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

Pasos:

1. Cree `src/lib/guardrails/myGuardrail.ts` extendiendo `BaseGuardrail`.
2. Implemente `preCall` y/o `postCall`.
3. Regístrela durante la importación (incorpórela desde `registerDefaultGuardrails`) o
   llame a `guardrailRegistry.register(...)` en tiempo de ejecución; el registro reemplaza
   cualquier barrera de protección anterior que tenga el mismo nombre normalizado.
4. Añada pruebas en `tests/unit/` (ejemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pruebas

Use `resetGuardrailsForTests()` entre pruebas para comenzar desde un estado conocido.
Pase `{ registerDefaults: false }` para comenzar con un registro vacío y
registrar únicamente las barreras de protección que se estén probando. Vision Bridge admite
inyección de dependencias (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge expone los
puntos de integración equivalentes para la configuración, las capacidades, la selección del modelo STT, las comprobaciones
de credenciales y la transcripción. Por lo tanto, las pruebas pueden ejercitar ambos flujos sin acceso
a la base de datos ni a la red.

## Véase también

- `src/lib/guardrails/` — implementación
- `src/shared/utils/inputSanitizer.ts` — detector compartido que permite
  detectar la inyección de prompts y enmascarar PII
- `src/shared/constants/visionBridgeDefaults.ts` — valores predeterminados de Vision Bridge y
  lista de modelos con puente forzado
- `src/shared/constants/modalityBridgeDefaults.ts` — valores predeterminados compartidos de ejecución de Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — capa ortogonal (disyuntor, períodos de espera)
- `docs/reference/ENVIRONMENT.md` — referencia completa de variables de entorno

## Cobertura de rutas y red team de la protección contra inyecciones (Fase 8 · Bloque D)

La protección contra inyecciones (`createInjectionGuard` / `withInjectionGuard`) cubre todas las rutas
que aceptan prompts de usuario. Respeta `INJECTION_GUARD_MODE` (el valor predeterminado `warn` = solo registra;
`block` = devuelve HTTP 400 `SECURITY_001`).

| Tipo              | Rutas                                                                                                                                                | Modo predeterminado |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generativas       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Datos             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

La extracción de texto (`extractMessageContents`) cubre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (nocturno, `nightly-llm-security.yml`):** promptfoo valida que cada ruta bloquee
el corpus OWASP-LLM con `INJECTION_GUARD_MODE=block`; garak ejecuta sondas (se omite si no hay un secreto).
`moderations` se incluye para mantener la coherencia; los operadores que utilicen el modo de bloqueo pueden excluirla mediante
`resolveDisabledGuardrails`.

El flujo de trabajo nocturno (`.github/workflows/nightly-llm-security.yml`, cron + ejecución
manual) tiene dos trabajos:

- **`promptfoo-guard` (bloqueante)** — ejecuta `promptfoo eval -c promptfooconfig.yaml`
  con `INJECTION_GUARD_MODE=block`. Cada caso adversario (p. ej., «ignora todas las
  instrucciones anteriores…», jailbreaks de estilo DAN) comprueba que la respuesta contenga
  `error.code === "SECURITY_001"`, es decir, que la protección haya rechazado realmente la solicitud.
- **`garak` (consultivo)** — ejecuta garak `--probes promptinject,dan,leakreplay`
  contra una instancia local de OmniRoute (`http://localhost:20128/v1`). Está condicionado a un
  secreto del proveedor (`PROMPTFOO_PROVIDER_KEY`); se omite sin errores y lleva el sufijo
  `|| true`, por lo que genera informes sin provocar fallos en CI.

La cobertura del auxiliar de protección (`createInjectionGuard` / `withInjectionGuard`)
abarca todas las rutas `/v1` que admiten prompts; el texto del prompt se obtiene de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mediante
`extractMessageContents()` en `src/shared/utils/inputSanitizer.ts`.
