# Guardrails (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte di verità:** `src/lib/guardrails/`
> **Ultimo aggiornamento:** 2026-08-29 — v3.8.51 (La provenienza della trascrizione di Video Bridge è dichiarata dal chiamante,
> non ancora verificata dal server — chiarito come da #11661)

I guardrail applicano sicurezza, policy e trasformazioni dei contenuti al confine
tra OmniRoute e i provider upstream. Ogni guardrail può ispezionare (e
opzionalmente rifiutare, trasformare o annotare) i payload delle richieste (`preCall`) e
le risposte upstream (`postCall`).

Il sistema è **fail-open**: se un guardrail genera un errore durante l'esecuzione, il registro
annota l'errore e continua con il guardrail successivo invece di far fallire la
richiesta. Il blocco è una decisione esplicita (`block: true`), mai accidentale.

## Guardrail Integrati

Il registro carica automaticamente sei guardrail in ordine di priorità all'importazione
(vedi `registry.ts` → `registerDefaultGuardrails()`):

| Priorità | Nome                | Fase(i)        | File                  |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Numeri di priorità più bassi vengono eseguiti **per primi**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Intercetta le richieste contenenti immagini destinate a **modelli non visivi** e
o reindirizza l'intera richiesta a un modello capace di visione o sostituisce le parti
immagine con descrizioni testuali prodotte da un modello visivo configurabile prima
della chiamata upstream. Questo consente ai fornitori solo testuali di gestire
in modo trasparente i payload multimodali.

Flusso:

1. Salta se il modello target supporta già la visione (a meno che non appaia nella
   lista di bridge forzati `isVisionBridgeForcedModel`).
2. Estrai le parti immagine tramite `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), che delega al **rilevatore media unificato**
   `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — l'unica fonte di verità condivisa con il filtro di compatibilità combo.
   L'estrazione è autorizzata solo per le parti di alto livello delle forme
   che `replaceImageParts` può reinserire (il contratto estrai↔sostituisci): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, e Responses API `input_image`. Colpi annidati e
   forme solo indicatore sono materiale per il filtro combo e non vengono mai estratti.
   Salta se non ne vengono trovati.
3. Risolvi la configurazione runtime tramite `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): le nuove chiavi di impostazione
   `modalityBridge*` vincono; le chiavi legacy `visionBridge*` rimangono un **fallback
   a ciclo unico** (finestra di rollback). Salta prima di qualsiasi attraversamento media quando il
   bridge è disabilitato.
4. Il selettore di modalità (`modalityBridgeVisionMode`, vedi tabella sotto) decide
   se reindirizzare o descrivere. Il reindirizzamento restituisce `modifiedPayload` con solo `model`
   scambiato, più meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Percorso di descrizione: limita le immagini a `maxImages`, compone il prompt
   consapevole del compito, consulta la cache di descrizione, chiama il modello visivo **in parallelo**
   (`Promise.allSettled`), e inietta le parti di testo `[Image N]: <description>` al loro posto. Una descrizione fallita restituisce `null` e la parte immagine originale è
   **preservata** (#4012) — tranne nel percorso di descrizione combo quando ogni
   descrizione è fallita, dove un upstream confermato non visivo riceve un
   `(unavailable — no vision-capable provider connected)` stub invece (#8430).
6. Restituisci `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selettore di modalità (`modalityBridgeVisionMode`)

| Modalità   | Predefinito | Comportamento                                                                                                                                                                                                                                                                                                                                |
| ---------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Eterogeneo legacy, non toccato (#6640/#7204): modelli non combo/`auto/` reindirizzano al miglior modello visivo a meno che il modello originale non abbia già credenziali utilizzabili (allora descrive); gli obiettivi combo descrivono sempre.                                                                                             |
| `describe` |             | Descrivi sempre — il blocco di reindirizzamento viene completamente saltato; il modello scelto dall'utente risponde sempre.                                                                                                                                                                                                                  |
| `reroute`  |             | Forza il reindirizzamento: il guardia del modello con credenziali viene bypassato. Il guardia delle credenziali del **target** di reindirizzamento si applica ancora — quando non esiste un target visivo utilizzabile, la richiesta passa a descrivere in modo che le immagini grezze non raggiungano mai un backend solo testuale (#8430). |

Le modalità forzate interrompono **prima** che l'euristica automatica venga eseguita; il comportamento `auto`
è identico a byte a quello del guardrail pre-PR-1.

#### Prompt di descrizione consapevole del compito (`modalityBridgeVisionTaskAware`)

Predefinito **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) aggiunge
il testo dell'**ultimo messaggio dell'utente** (troncato a 500 caratteri) al prompt di base
per la descrizione, orientando la descrizione verso ciò che l'utente ha effettivamente chiesto
(pattern codex-vision-proxy) e chiedendo al modello visivo di trascrivere il testo visibile.
Con il flag disattivato — o senza testo dell'utente — viene utilizzato il prompt di base senza modifiche.

Il descrivere il ciclo di auto-loop di OpenAI compatibile con la richiesta (`callVisionModelSingle()` in `visionBridgeHelpers.ts`) richiede sempre `image_url.detail: "high"` — incondizionatamente, per ogni chiamante/fornitore, non soggetto a nessun segnale del client. Il campionamento a bassa risoluzione degrada l'accuratezza dell'OCR per esattamente il compito di trascrizione del testo che questo prompt richiede, quindi la chiamata di descrizione stessa richiede sempre alta risoluzione indipendentemente dal livello di dettaglio utilizzato nella richiesta in ingresso originale. Questo influisce solo sul corpo della richiesta di descrizione interna; non cambia il modo in cui OmniRoute inoltra il proprio `image_url.detail` della chiamata nella richiesta principale — quel valore predefinito viene applicato separatamente e solo per i client OpenCode rilevati, in `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Il ramo del formato wire di Anthropic del ciclo di auto-loop di descrizione non ha campo `detail` ed è immune a entrambi i predefiniti.

#### Limite di output della descrizione (`modalityBridgeVisionMaxChars`)

| Chiave                         | Predefinito | Intervallo      |
| ------------------------------ | ----------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` o 100–50000 |

`0` (predefinito) significa **nessun limite** — la descrizione restituita da `callVisionModel()` viene passata attraverso senza modifiche, preservando il comportamento esistente. Qualsiasi valore nell'intervallo 100–50000 tronca la descrizione con un suffisso `…` prima di essere riunita come `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`). Aumenta questo valore per compiti OCR ricchi di dettagli in cui il modello a valle ha bisogno della trascrizione completa; abbassalo per limitare l'uso dei token su modelli visivi chiacchieroni. Il campo della dashboard si trova nel pannello Avanzato della scheda Vision (`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) e limita qualsiasi valore tra 1 e 99 fino al limite di 100, lasciando intatto un esplicito `0` — `0` è un valore Zod valido di per sé (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), non semplicemente il predefinito "non impostato".

#### Cache di descrizione (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL in memoria per gli output di descrizione, condivisa a livello di processo. Chiave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` con incapsulamento a prefisso di lunghezza (nessuna collisione di confine di campo). Il componente modello è il modello di ponte **configurato**, non il modello che ha effettivamente risposto — `callVisionModel` può tornare indietro internamente, e chiave per tentativo frammenterebbe la cache. Le descrizioni fallite non vengono mai memorizzate nella cache. Impostazioni:

| Chiave                          | Predefinito | Intervallo |
| ------------------------------- | ----------- | ---------- |
| `modalityBridgeCacheEnabled`    | `true`      | —          |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440     |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000    |

#### Normalizzazione delle immagini remote (descrizione del ciclo di auto-loop/recupero base64)

Quando il ponte recupera un'immagine **remota** — la chiamata di descrizione di Anthropic e la conversione base64 del formato wire di claude (`ensureBase64ImagesForClaudeWire`), entrambe tramite `fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — l'URI dei dati risultante viene passato attraverso `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) prima di essere incorporato nella richiesta del modello visivo. Le immagini sovradimensionate vengono ridimensionate a un **lato lungo di 2048px** (corrispondente al limite di ridimensionamento che OpenAI/Anthropic applicano già lato server), il che riduce i byte di upload/latency senza cambiare ciò che il modello visivo vede. Il ridimensionamento utilizza `sharp`, caricato tramite import dinamico: su una piattaforma in cui il suo binario nativo non riesce a caricarsi, `normalizeDataUri()` **non genera mai eccezioni** — torna a passare i byte originali, quindi il percorso di descrizione/conversione base64 continua sempre a funzionare. I byte non immagine (un recupero che non ha restituito un'immagine decodificabile) vengono anch'essi passati attraverso intatti. Questa normalizzazione è limitata alle immagini che il ponte recupera per la propria chiamata — non viene mai applicata al payload di passaggio grezzo del chiamante, in linea con il principio di mutazione solo su opt-in (Regola Ferrea #20).

#### Schema delle impostazioni + migrazione

Le nuove chiavi `modalityBridge*` sono validate da Zod in `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, il trio `modalityBridgeCache*`, e il gruppo `modalityBridgeAudio*` utilizzato dal Ponte Audio. La migrazione `141_modality_bridge_settings.sql` copia i valori legacy esistenti `visionBridge*` nelle nuove chiavi corrispondenti (idempotente, non sovrascrive mai un valore `modalityBridge*` impostato dall'operatore); le chiavi legacy rimangono accettate come fallback di lettura per un ciclo di rilascio.

#### Intestazione di trasparenza + statistiche

Le risposte trasformate dalla descrizione portano `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (costruito da `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`, timbrato da `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`). Le richieste reindirizzate non ricevono **nessuna** intestazione — il payload è rimasto intatto e il cambio di modello è già visibile nel campo `model` del corpo della risposta.

`GET /api/modality-bridge/stats` (autenticazione di gestione, stesso livello di `GET /api/settings`) restituisce i contatori per modalità in memoria `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` per `vision`, `audio` e `video`. `averageLatencyMs` utilizza `latencySamples`, non tutti i tentativi, come suo denominatore; un'operazione senza temporizzazione non fabbrica un campione di zero millisecondi. `bridged` rimane l'alias retrocompatibile per conversioni riuscite; i tentativi falliti non lo incrementano. I contatori vengono ripristinati all'avvio del processo per design (telemetria, non contabilità).

#### Configurazione della dashboard

La pagina del dashboard dedicata è
`/dashboard/settings/modality-bridge`. I suoi tab `Vision`, `Audio`
e `Video` indirizzabili via URL preservano i parametri di query mentre cambiano il valore di `tab`.
Il tab Vision espone l'abilitazione, la modalità, la selezione del modello (incluso il predefinito automatico), il prompting consapevole del compito, i limiti avanzati di timeout/lunghezza immagine/lunghezza descrizione/cache, i contatori di runtime e una richiesta di campione protetta. Il tab Audio è anch'esso attivo: espone l'abilitazione, un selettore di modelli solo STT con Auto, limiti di timeout/max-clip, contatori audio e un test di campione `input_audio`. Il tab Video è funzionale: riporta lo stato di runtime di FFmpeg/ffprobe — uno dei quattro stati UI espliciti (`unknown` mentre il probe è in volo o non è riuscito a completare, `restricted` su un host dashboard non loopback dove il probe viene saltato lato client, `unavailable` una volta sondato e confermato mancante, o `available` con le versioni di FFmpeg/ffprobe) — persiste i limiti di abilità/modello/frame/video/timeout, filtra il selettore di modelli per modelli capaci di visione e espone contatori video.

La precedente scheda Vision Bridge sotto le impostazioni AI è un link di compatibilità alla nuova pagina; non possiede più una seconda copia del modulo. I Media Providers collegano anche i flussi di lavoro Image-to-Text e Speech-to-Text ai corrispondenti tab Modality Bridge senza rimuovere il playground esistente Speech-to-Text.

**Bypass di ammissione self-loop:** quando la chiamata describe passa attraverso il self-loop `/v1` di OmniRoute (modello provider non standard), la sotto-richiesta invia
`x-omniroute-admission-bypass: internal` ed è autenticata con le credenziali di self-loop risolte — il locale `sk_omniroute` in modalità locale, o la chiave env configurata dall'operatore `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350) in modo che i deployment con `REQUIRE_API_KEY=true` possano comunque eseguire la chiamata describe. Il bypass è onorato solo per quelle esatte credenziali, quindi i client esterni non possono utilizzare l'intestazione per saltare l'ammissione.

I valori predefiniti legacy si trovano in `src/shared/constants/visionBridgeDefaults.ts`; i nuovi valori predefiniti per modalità/task-aware/cache e il risolutore delle impostazioni si trovano in `src/shared/constants/modalityBridgeDefaults.ts`. Il guardrail espone un'opzione costruttore `deps` in modo che i test possano iniettare implementazioni false di `getSettings` e `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercetta le richieste di chat contenenti audio prima che raggiungano un obiettivo che non è noto accettare input audio. Non reindirizza mai la richiesta di chat: le parti audio vengono trascritte attraverso l'esistente endpoint multipart compatibile con OpenAI e il modello di chat scelto continua con le trascrizioni testuali.

Flusso:

1. Risolvere `supportsAudio` attraverso `getResolvedModelCapabilities()`. I metadati del registro provider espliciti prevalgono, poi i metadati statici del modello, poi `modalities_input` sincronizzati. Un elenco di input dichiarato senza `audio` è `false`; nessuna evidenza di capacità rimane `null`. Sia `false` che `null` attivano il bridge conservativo, mentre `true` lo bypassa.
2. Risolvere le impostazioni `modalityBridgeAudio*` ed estrarre le parti audio di livello superiore splicabili da ogni messaggio attraverso il rilevatore condiviso `detectMediaParts()`. Le forme wire supportate sono `input_audio`, `audio_url` e `source.media_type: "audio/*"` di OpenAI. L'audio annidato viene rilevato per il routing ma non rimosso dal percorso di splicing. Il lavoro è limitato da `modalityBridgeAudioMaxClips`; le parti successive rimangono intatte.
3. Onorare un `provider/model` configurato, oppure lasciare che `selectAudioBridgeModel()` percorra `AUDIO_TRANSCRIPTION_PROVIDERS` in ordine di catalogo stabile e selezioni il primo modello con una credenziale di provider attiva utilizzabile.
4. `callAudioTranscription()` converte l'audio base64/data-URI in un multipart `file`, o scarica un `audio_url` remoto attraverso il guardiano outbound solo pubblico con pinning DNS e un limite di 25 MB. Quindi invia il file e il modello selezionato al self-loop locale `/v1/audio/transcriptions`, autenticato con `resolveSelfLoopBearer()`. Il percorso di trascrizione esistente esegue la normale ricerca delle credenziali, gestione del cooldown/rate-limit e dispatch del provider.
5. Le chiamate riuscite sostituiscono le loro parti con `[Audio N]: <trascrizione>`. Le chiamate vengono eseguite con `Promise.allSettled`: un singolo fallimento preserva quella parte audio originale (#4012 contract). Se ogni chiamata fallisce e l'obiettivo risulta `supportsAudio === false`, le parti diventano
   `[Audio N]: (non disponibile — nessun provider STT connesso)` (#8430 contract). Per un obiettivo sconosciuto (`null`), un risultato di tutti i fallimenti rimane intatto. Un obiettivo provato solo testo senza credenziali STT utilizzabili riceve lo stesso stub esplicito senza emettere una chiamata di rete.

Le trascrizioni riuscite utilizzano la cache LRU/TTL del Modality Bridge a livello di processo. La chiave combina il riferimento audio, l'etichetta dell'operazione stabile `audio-transcription` e il modello STT selezionato; i fallimenti non vengono mai memorizzati nella cache. I tentativi audio aggiornano i contatori condivisi `bridged`, `cacheHits`, `failures` e `lastUsedAt`.
Le risposte trasformate portano
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; le richieste non toccate non ricevono un segmento Audio Bridge.

Le impostazioni di runtime sono supportate da DB e validate da Zod:

| Chiave                        | Predefinito | Intervallo    |
| ----------------------------- | ----------- | ------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —             |
| `modalityBridgeAudioModel`    | `""`        | Auto o STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000   |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10          |

La cache condivisa rimane controllata da `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta le parti video di alto livello nelle `messages` e nelle risposte delle Chat Completions API `input` prima che venga chiamato un target senza supporto video nativo noto. Le forme supportate sono `input_video`, `video_url`, `video_source`, URL HTTPS e URI dati `data:video/*;base64,...`. I nomi di file semplici nel testo non vengono trattati come video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) gestisce il passaggio della richiesta, il controllo delle capacità/politiche, l'aggregazione per richiesta e il payload della risposta. Il lavoro per video — acquisizione, cache del risultato completo, descrizione di una sequenza di fotogrammi (che fonde qualsiasi trascrizione audio dichiarata dal chiamante) e metriche/abort/cleanup per tentativo — è nascosto dietro `processVideoPart` in `videoBridgePipeline.ts`, chiamato una volta per parte video all'interno del ciclo di `preCall`. Quel modulo definisce anche i confini di porta espliciti `VideoMediaBrokerPort` (acquisizione di byte ed estrazione di fotogrammi campionati), `VideoAudioTranscriptionPort` (fusione di una trascrizione audio dichiarata dal chiamante con i sottotitoli campionati) e `VideoDrilldownPort` (la forma legacy del raw-store). La produzione STT e la retention dei fotogrammi sono composte attorno alla porta descrittiva tramite `createVideoSttAdapter` e `createVideoDrilldownAdapter`; quest'ultimo utilizza il ciclo di vita dell'handle opaco condiviso.

Il percorso di richiesta pubblico `/v1` non importa mai né invoca un sottoprocesso. I video remoti vengono scaricati sotto un limite di 50 MiB; i video inline in base64 hanno un limite conservativo di 36 MiB decodificati per video affinché il modello/le message/l'involucro di framing possano rimanere all'interno del limite di ammissione della richiesta JSON pubblica di 50 MiB. La lunghezza inline e le stime della dimensione decodificata vengono controllate prima dell'allocazione. HTTPS è richiesto sull'URL remoto iniziale e su ogni reindirizzamento, utilizzando la guardia outbound pubblica esistente con pinning DNS. I byte attraversano quindi il confine esatto del broker `POST /api/modality-bridge/video/extract`. Quel percorso è sia `LOCAL_ONLY` che `SPAWN_CAPABLE`, accetta solo una richiesta autenticata e trusted-loopback per processo, e non accetta mai un URL, un percorso di filesystem, un eseguibile o un elenco di argomenti. La pipeline della dimensione del corpo API e il lettore incrementale del corpo del gestore applicano indipendentemente un limite di input del broker di 50 MiB. La sua coda limitata esegue un'estrazione alla volta, consente quattro lavori in attesa e limita l'input in attesa a 100 MiB.

All'interno del broker, `ffprobe` legge un file locale privato; l'elenco di formati consentiti fissi esclude i formati di playlist e manifest. Per i contenitori della famiglia MOV consentiti, i riferimenti ai dati MOV esterni rimangono disabilitati per impostazione predefinita, e il comando fisso non opta per essi. Sia `ffprobe` che `ffmpeg` utilizzano la whitelist del protocollo `file`-only, un thread, array di argomenti fissi, nessuna shell e eseguibili risolti da `PATH`. I flussi di copertura delle immagini allegate non sono candidati riproducibili. Tutti i flussi riproducibili devono soddisfare i limiti, e un flusso predefinito esplicito è preferito prima del fallback deterministico con l'indice più basso. I video sono limitati a 600 secondi, 8.192 pixel per dimensione e 33.554.432 pixel sorgente. FFmpeg campiona fotogrammi JPEG a metà strada da 1 a 16, ridimensiona il lato lungo a un massimo di 1.024 pixel senza ingrandire input più piccoli e non riceve mai un URL. Il campionamento è `uniform` per impostazione predefinita. Le politiche opzionali `scene_aware` e `segment_aware` eseguono un ulteriore passaggio fisso di FFmpeg sullo stream locale già convalidato, selezionano timestamp di scena `showinfo` limitati e tornano deterministicamente agli stessi punti medi uniformi in caso di errore del rilevatore, timeout, output malformato o un insieme di candidati vuoto. La modalità segment-aware alloca campioni a metà strada proporzionalmente agli intervalli di scena convalidati; le prove segment-aware e il comportamento di fallback sono dettagliati di seguito. Il limite rigido di 16 fotogrammi viene applicato dopo la selezione in ogni politica. Quando una richiesta scene-aware ha solo un budget di un fotogramma, utilizza il punto medio uniforme della finestra video completa attiva o della finestra di messa a fuoco e riporta `policyEffective: uniform`: un singolo fotogramma di scena selezionato non può preservare entrambe le estremità temporali. Un chiamante può opzionalmente fornire una finestra di messa a fuoco finita (`start`/`end` secondi); i limiti sono bloccati alla durata del media, le finestre invertite o non finite vengono rifiutate, e tutte le politiche di campionamento vengono eseguite solo all'interno dell'intervallo normalizzato. La finestra risultante è inclusa nei metadati di campionamento e nel prefisso di descrizione non fidata in modo che i modelli downstream possano distinguere un estratto focalizzato dalla timeline completa.

Il focus delle didascalie semantiche è un'impostazione separata ed esplicita. La modalità di analisi predefinita `full` preserva il prompt di fotogramma esistente e non inoltra mai il testo della richiesta al modello di didascalie. In modalità `focused`, il bridge legge solo il più recente `text`/`input_text` non vuoto creato dall'utente dallo stesso contenitore Chat o Risposte, lo normalizza in NFC, collassa i caratteri di controllo e gli spazi bianchi, e lo limita a 500 punti di codice Unicode. Un risultato vuoto torna esattamente al prompt `full`. Un suggerimento utilizzabile è serializzato come JSON in un blocco dedicato al contesto utente non fidato e può solo dare priorità ai dettagli osservabili; non può sovrascrivere l'avviso separato contro il seguire istruzioni visibili o udibili nei media. Il focus testuale non inferisce mai `start`/`end` né cambia il campionatore temporale.

#### FU-07 evidenza del segmento strutturale

`segment_aware` utilizza un passaggio di pre-analisi limitato sullo stream video locale già convalidato. La catena di filtri fissa prima ridimensiona a un massimo di 320 pixel di larghezza, rileva cambiamenti di scena e intervalli congelati, quindi campiona a 1 fotogramma al secondo per sfocatura, luminanza media e informazioni spaziali/temporali. Il passaggio è limitato a 600 campioni strutturali, un thread FFmpeg/filter, le stesse whitelist di protocollo e contenitore `file`-only, un limite di output di processo di 1 MiB e al massimo 30 secondi all'interno dell'aborto/scadenza condivisi del broker. Non accetta mai un comando, filtro, percorso o URL dalla richiesta.

I valori strutturali sono prove di campionamento deterministiche, non comprensione semantica del video. Non inferiscono soggetti, azioni, didascalie, discorsi o intenzioni dell'utente. I confini delle scene e dei freeze formano segmenti; la copertura del freeze, il blur, l'esposizione, il dettaglio spaziale e il cambiamento temporale influenzano solo come viene allocato il budget esistente di 1–16 frame. Un segmento completamente congelato è limitato a un frame, mentre i segmenti non congelati competono per il budget rimanente. Quando i confini superano i frame, viene mantenuta una copertura uniforme della timeline in modo che tagli rapidi all'inizio non possano nascondere un lungo segmento finale. I confini delle scene all'interno della risoluzione di analisi di 1 secondo di un confine di freeze vengono coalesciati.

Filtri mancanti, prove malformate/vuote, un errore del rilevatore o il timeout di pre-analisi limitato falliscono in modo aperto alla politica del punto medio uniforme esatto. Un abort del chiamante o una scadenza del broker non falliscono in modo aperto: termina il sottoprocesso in volo, impedisce l'estrazione di frame successivi e l'albero temporaneo privato viene rimosso in `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genera fixture FFmpeg reali deterministiche per risparmi post-dedup delle didascalie, allocazione del budget per il movimento denso, prove di blur/esposizione/SI-TI, tagli rapidi con una lunga coda e falsi positivi di dissolvenza graduale. Registra il tempo di wall pre-analisi e, dove `/usr/bin/time` è disponibile, CPU figlia e RSS di picco. I suoi controlli di qualità sono solo oracoli strutturali. La qualità reale del modello di didascalia rimane `HOLD` perché questo harness non ha un endpoint autorizzato o un giudice congelato. I risparmi monetari rimangono anch'essi `HOLD` a meno che `--caption-cost-per-call-usd` non fornisca una stima positiva esplicita per chiamata; lo script non fabbrica mai nessun risultato.

Ogni frame è limitato a 4 MiB, tutti i frame raw insieme a 23 MiB e la risposta serializzata del broker a 32 MiB. Una directory temporanea privata viene rimossa in `finally`. OmniRoute non include FFmpeg e non accetta un percorso eseguibile personalizzato. Prima della didascalia, il bridge applica un passaggio di deduplicazione visiva conservativa: ogni JPEG viene ridotto a un buffer in scala di grigi 16×16 e viene confrontato solo con l'ultimo frame mantenuto. Per un budget di didascalia richiesto superiore a un frame, l'estrazione fornisce un pool di candidati limitato fino a due volte quel budget e mai più di 16 frame. Il limite richiesto viene applicato solo dopo la deduplicazione, con i primi e gli ultimi candidati selezionati preservati durante il diradamento finale quando il budget è almeno due. La politica versionata `grayscale-16x16-mean-cells-v2` utilizza il maggiore tra la delta media della luminanza e il rapporto delle celle delle miniature il cui delta normalizzato è almeno 0.05. La soglia di duplicato è la costante 0.04, scelta per prevedibilità piuttosto che esposta come impostazione di runtime. Questo segnale secondario ad alto contrasto preserva piccoli movimenti e cambiamenti di testo visibile che un confronto solo medio può nascondere. Gli errori del comparatore o del decodificatore falliscono in modo aperto e mantengono la copertura. I metadati di output separano i candidati estratti, i frame utilizzati con successo e i duplicati visivi scartati.

Una parte video esplicitamente contrassegnata può richiedere un foglio di contatto timestampato. Il bridge costruisce al massimo una griglia JPEG a 4 colonne e 16 frame. Ogni cella di 512 pixel brucia il proprio timestamp sorgente in una banda inferiore ad alto contrasto, mentre gli stessi timestamp rimangono nei metadati testuali per l'associazione e l'audit a valle. Il JPEG completo rimane limitato a 32 MiB. Se `sharp` non può decodificare o comporre la griglia, il bridge torna ai singoli frame JPEG; un abort del client si propaga comunque attraverso l'operazione del foglio.

Le prove di promozione sono deliberatamente separate dal microbenchmark di composizione sintetica. `scripts/perf/video-bridge-contact-sheet-eval.ts` definisce un harness A/B versionato per modelli di visione compatibili con OpenAI reali. Misura i token riportati dal fornitore, la latenza totale end-to-end (inclusa la composizione del foglio), il conteggio delle chiamate al modello e la retention dei fatti definiti nel manifesto. Le risposte raw del modello non vengono scritte nel rapporto; vengono mantenuti solo i digest SHA-256 e gli ID dei fatti corrispondenti. L'harness non effettua chiamate di rete o a modelli a pagamento a meno che non venga passato `--execute-real` e siano configurati `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY`. Senza quella esecuzione reale esplicita, il suo verdetto leggibile dalla macchina rimane `HOLD`; le misurazioni del payload sintetico/conteggio delle chiamate da sole non sono prove di promozione.

Il separato `scripts/perf/video-bridge-promotion-eval.ts` consuma osservazioni FU-07 o FU-09. L'ammissione alla promozione richiede tutti e otto i tipi di scenario sintetico più un clip reale sanificato, almeno tre ripetizioni misurate per ruolo e caso, tutte e dieci le metriche dichiarate, digest di media/prompt/fatti attesi/impostazioni congelati, ID di osservazione unici e ordine A/B verificato. La ricevuta di esecuzione lega il digest del corpus, l'esatto SHA del candidato e la revisione del modello. Misurazioni mancanti o non valide rimangono `HOLD`, inclusi CPU sopra 30 s, RSS di picco sopra 512 MiB o pre-analisi sopra 30 s. Questi sono limiti di ammissione delle prove, non una nuova garanzia di enforcement di runtime RSS.

FU-07 richiede almeno il 98% di retention della qualità e una latenza p95 non superiore a 1.2x rispetto al baseline, più o un miglioramento assoluto della media di richiamo bilanciato per caso di 0.05 a chiamate di didascalia medie equivalenti, o almeno il 10% in meno di chiamate di didascalia post-dedup medie. FU-09 richiede almeno 0.85 di qualità, 95% di retention, riduzione della latenza p95 del 20% e riduzione del 10% dei token. La perdita di fatti critici, la conformità all'iniezione o l'uso mancante impediscono la promozione. Un'esecuzione non può promuovere nulla: `--previous-report` conferma due esecuzioni distinte, non sovrapposte, consecutivamente idonee della stessa politica/revisione del modello/candidato/corpus. Un esperimento di campionamento non può confermare un esperimento di foglio di contatto.

I collezionisti dovrebbero valutare le risposte in memoria e salvare `responseDigest` più metriche e binding di osservazione, mai il testo della risposta. Il consumatore legge anche le osservazioni grezze legacy ma non copia mai quel testo nei suoi rapporti. Esattamente uno tra `responseDigest` o `rawResponseText` è accettato per ogni osservazione. L'elenco di autorizzazione versionato rimane vuoto con un `hold` predefinito immutabile. Un'entrata idonea richiede il suo riferimento di prova, politica, revisione del modello, SHA esatto del candidato, digest del manifesto e due ID di esecuzione distinti; i contesti in conflitto vengono rifiutati. Questi metadati sono un contratto di audit, non prova che un file di riferimento contenga misurazioni genuine. Rivedere le ricevute effettive prima di aggiungere qualsiasi voce. L'endpoint delle statistiche di gestione e il dashboard Video espongono una prontezza conservativa. Un alias di modello configurato da solo non stabilisce la sua revisione o lo SHA del candidato in esecuzione, quindi il dashboard attuale riporta `HOLD` piuttosto che riutilizzare l'idoneità da un altro contesto di esecuzione. La selezione sperimentale esplicita rimane separata dalla promozione; nessun predefinito viene cambiato automaticamente.

I chiamanti possono allegare un array opzionale `transcript.cues` a una parte video supportata quando possiedono già testo allineato. Ogni cue deve contenere `text`, un intervallo finito `start`/`end` all'interno della durata sondato, e un `source` autorizzato (`client`, `embedded` o `audio-bridge`); `confidence` è predefinito a `1` e deve rimanere tra `0` e `1`. I cue duplicati esatti vengono accorpati. OmniRoute non inizia mai la trascrizione da questi metadati: i cue convalidati vengono copiati nel risultato descritto con sorgente, confidenza e intervallo, e vengono resi come osservazioni non affidabili accanto alle didascalie del fotogramma. Testo non valido, fuori intervallo o privo di provenienza viene rifiutato piuttosto che mescolato nel flusso delle didascalie. Entrambi i canali di trascrizione del corpo della richiesta normalizzano la provenienza fornita a `client`, inclusi i label auto-asseriti `embedded` o `audio-bridge`. Solo un adattatore di proprietà del server può assegnare quei label affidabili tramite l'argomento solo codice `trustedSource`; un campo JSON della richiesta non può raggiungere quell'argomento. Il testo della trascrizione rimane contenuto derivato dai media non affidabile, indipendentemente dalla sua provenienza, e non deve mai determinare l'autorizzazione.

Un chiamante avanzato può fornire una traccia `audioTranscript` per lo stesso video; viene trattata come testo fornito dal client, non come prova di trascrizione del server. La giunzione di fusione esegue osservazioni visive e audio sotto una scadenza e un segnale di abort, le ordina su una linea temporale comune, accorpa duplicati esatti e riporta un risultato parziale quando solo un lato ha successo. Un `audioTranscript` non valido degrada a quel risultato parziale — la descrizione visiva viene mantenuta e il ramo audio registra un codice di errore sanificato — invece di far fallire l'intero video. La disponibilità per ramo, il flag parziale e i codici di errore sanificati vengono preservati nel risultato descritto, nei metadati di guardrail (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), nei metadati della cache dei risultati e nei contatori di fusione del bridge. Il percorso predefinito del Video Bridge non invoca il riconoscimento vocale o scarica una seconda copia dei media; senza quella traccia esplicita, rimane solo video.

**Ritenzione della trascrizione (#12150 P1).** Questo si applica automaticamente ogni volta che il Video Bridge (di per sé opt-in) rende un cue di trascrizione — non c'è un flag di ritenzione separato. Quando una richiesta rende qualsiasi cue di trascrizione (un `transcript` dichiarato dal chiamante o un `audioTranscript` fuso), il guardrail lo segna come `videoBridgeObserved` e produce un'ombra redatta della descrizione video — una resa identica in cui il corpo di testo libero di ogni cue è sostituito da `[redacted-video-transcript]`, costruito sostituendo il campo cue strutturato prima che la stringa venga assemblata (mai analizzando il testo appiattito, quindi nessun contenuto del cue — avverso o ordinario, inclusi i corpi contenenti `]` come `[inaudible]`/`[music]` — può sopravvivere). Il corpo della richiesta del registro delle chiamate persistito scambia ogni parte di testo derivata dal video per quell'ombra redatta, abbinata per uguaglianza di contenuto; l'ancora `fullText` viene letta di nuovo dal payload del guardrail pre-chiamata finito, quindi l'abbinamento riesce ancora dopo che i guardrail della catena successiva (i mascheratori di PII e credenziali, priorità 10/95) riscrivono il testo della descrizione in loco e dopo che il sistema di prompt/passaggio/iniezione di memoria rimodella l'array dei messaggi. Il corpo inviato a monte al modello rimane invariato. Una richiesta osservata non popola nemmeno la Memoria durevole (sia l'estrazione derivata dalla richiesta che dalla risposta vengono saltate), quindi la risposta del modello non può ripetere il testo della trascrizione nella Memoria.

**Campi video grezzi (#12430).** Quando il bridge è abilitato e il supporto video nativo è sconosciuto o assente, i campi definiti `transcript`/`audioTranscript` attivano anche `videoBridgeObserved`, anche dopo un fallimento della descrizione o un limite `maxVideos`. `null` e stringhe vuote contano; campi assenti e metadati non video non lo fanno. Le copie mantenute redigono questi campi o omettono la richiesta, e le cache/Memoria vengono bypassate. Il payload del fornitore rimane invariato.

Ulteriori copie mantenute utilizzano lo stesso segnale di richiesta osservata. Lo snapshot della richiesta del client pre-guardrail, la richiesta in attesa in memoria e il registro delle richieste rifiutate precocemente sostituiscono strutturalmente i campi di trascrizione nelle parti video; i prompt di stringa sintetizzati dalle fasi della pipeline e dal passaggio di contesto vengono redatti al sink del corpo della richiesta persistita. Il marker `video_content_removed` persistito fa sì che il proseguimento di `previous_response_id` fallisca in chiusura piuttosto che ricostruire il testo che è stato intenzionalmente scartato. Se una richiesta osservata perde la sua ombra di redazione per parte prima della registrazione, o anche uno dei diversi ombre video non riesce a corrispondere dopo le successive mutazioni della richiesta, il corpo della richiesta mantenuto viene omesso completamente invece di mantenere una trascrizione parzialmente redatta.

Per una richiesta osservata, una risposta del modello potrebbe citare qualsiasi parte della trascrizione senza un confine di segnale strutturato. Il suo `responseBody` di log delle chiamate persistente viene quindi sostituito da un marcatore di omissione; l'articolo dettagliato della pipeline (che può includere corpi upstream/client e chunk di stream) non viene mantenuto. Le cache semantiche, di idempotenza e di ragionamento-ripetizione bypassano letture e scritture per quella richiesta. La richiesta del fornitore e la risposta visibile al cliente rimangono invariate. I byte di keepalive iniziali vengono drenati dal buffer temporaneo quando l'articolo dettagliato viene omesso. L'avviso di EventStream malformato di Kiro riporta solo il conteggio dei byte del payload, mai il suo contenuto o l'errore grezzo del parser JSON.  
Questo non afferma che ogni diagnostica non correlata di fornitore/plugin sia stata auditata; la più ampia pulizia del sink mantenuto è tracciata in #11658.

Il ciclo di vita interno di `/api/modality-bridge/video/drilldown` è un substrato di cache separato, autenticato tramite loopback/token. Ogni operazione richiede anche un ID principale opaco canonico. Prima che un chiamante di produzione venga abilitato, deve derivare quell'ID dal tenant autenticato e non deve mai inoltrare un valore selezionato dal cliente. Le chiavi della cache legano quel principale agli ID di sessione canonici e di riferimento video, memorizzano solo le loro chiavi derivate da SHA-256 e limitano sia le letture che la cancellazione allo stesso principale. La cache memorizza al massimo 16 frame JPEG derivati per voce, li scade dopo dieci minuti e supporta letture `start`/`end` limitate o cancellazione esplicita della sessione.

Ogni principale è limitato a 16 voci e 64 MiB di dati JPEG canonici. Questi limiti sono indipendenti dal tetto globale di 64 voci/256 MiB: la pressione della quota principale espelle solo le voci meno recentemente utilizzate di quel principale prima che venga considerata l'espulsione globale LRU. Le voci scadute vengono rimosse sia dalla contabilità principale che globale all'attività della cache, mentre la cancellazione e il fallimento della convalida non impegnano una sostituzione parziale.

La cache rifiuta Base64 non canonici, padding eccessivo, media non JPEG, JPEG malformati o troncati e JPEG che producono un avviso durante una decodifica `sharp` di immagine completa limitata. Ricodifica ogni immagine accettata come un JPEG canonico, deriva larghezza e altezza dai byte decodificati invece di fidarsi dei campi del chiamante e scarta eventuali byte poliglotti finali piuttosto che mantenerli. Solo il buffer compresso canonico limitato viene addebitato a entrambe le quote. Il limite del wire JSON include l'overhead Base64 per il tetto di input decodificato di 32 MiB. Ogni derivazione memorizzata registra il suo formato/resoluzione JPEG convalidati, la politica di campionamento, la versione di derivazione, il tempo di creazione, l'hash del contenuto calcolato dal server e l'hash di riferimento genitore più l'hash del contenuto genitore del chiamante fidato. La cancellazione viene controllata tra le fasi di decodifica/hash asincrone prima dell'impegno atomico della cache.

Il produttore di produzione riutilizza i frame del broker già derivati solo dopo un'analisi visiva riuscita, senza un secondo download/estrazione video. Richiede `modalityBridgeVideoDrilldownEnabled=true` per l'operatore, `drilldown: true` rigoroso per ogni parte e un ID record di chiave API autenticata. I valori di principale/sessione dichiarati dal cliente non stabiliscono mai la proprietà. Senza tutte e tre le condizioni, non esegue hash, ridimensiona o mantiene frame aggiuntivi. Il fallimento della retention preserva la risposta visiva utilizzabile. Le richieste consenzienti bypassano la cache dei risultati video completi in modo che i risultati memorizzati non riproducano mai gestori.

Le risposte JSON e SSE riuscite espongono al massimo quattro gestori opachi nell'intestazione limitata `x-omniroute-video-drilldown`. Le origini del browser autorizzate possono leggere quell'intestazione senza ampliare la politica di origine CORS. I nuovi gestori utilizzano `v1.<32-byte random base64url token>`, e il registro mantiene solo i loro hash SHA-256. Il lettore/parser dell'intestazione accetta anche token legacy a 64 esadecimali. Il consumatore pubblico autenticato è `GET /api/v1/video-bridge/drilldown?handle=...`, indipendentemente regolato da `modalityBridgeVideoDrilldownRemoteEnabled=true`. Un falso persistito esplicito revoca l'accesso anche quando il fallback legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` è abilitato. La retention di produzione ha il fallback legacy analogo `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Entrambi i fallback sono disabilitati per impostazione predefinita.

Il consumatore deriva la proprietà dalla chiave autenticata, applica la politica della chiave e restituisce lo stesso 404 per gestori sconosciuti, scaduti e di un'altra chiave. Accetta `variant=preview|standard|detail` (dimensione massima JPEG 320/640/1280, mai ingrandita), `limit=1..8` (o l'alias legacy `frames`, mai entrambi), `page` basato su zero e secondi di focus `start`/`end` opzionali. Le chiavi di query duplicate e le finestre di focus invertite vengono rifiutate. Ogni variante restituita ha un hash del suo contenuto effettivo e dei metadati di risoluzione effettiva, collegati alla fonte mantenuta. Le varianti vengono derivate in lettura piuttosto che memorizzate come copie aggiuntive mantenute. La risposta JSON, inclusi Base64/involucro, è limitata a 32 MiB; una pagina sovradimensionata restituisce 413 e il cliente deve richiedere meno frame. Le letture controllano la cancellazione attorno a ogni ridimensionamento e ricontrollano la validità del gestore prima di restituire. `DELETE` da parte del proprietario è idempotente; la cancellazione o la scadenza TTL rilasciano la fonte mantenuta e la contabilità dell'uso.

Il negozio condiviso è locale al processo: i gestori scadono al riavvio e non sono trasferibili tra processi OmniRoute indipendenti. Le statistiche di gestione espongono solo la politica di retention/remota efficace e le voci/byte mantenuti aggregati, mai media, riferimenti, ID principali o gestori. Il pannello delle impostazioni video mostra quei valori e può mantenere entrambi gli switch di consenso. Questa documentazione di implementazione non è prova di distribuzione o promozione dal vivo; l'accettazione del modello reale è tracciata separatamente.

I frame sono etichettati sequenzialmente con il modello Video configurato. Un override Video vuoto eredita l'impostazione Vision; se entrambi sono vuoti, il router automatico Vision seleziona il modello efficace in grado di visione. Le etichette di successo sostituiscono la parte originale con un prefisso stabile `[Video description:` che segna anche il testo come un'osservazione derivata da media non affidabili e informa i modelli downstream di non seguire le istruzioni trovate nei media. Le chiavi della cache delle etichette dei frame includono i byte JPEG, il prompt, il timestamp e il modello efficace; solo le etichette di successo vengono memorizzate nella cache. Le voci della cache mantengono il modello produttore effettivo di successo, incluso un modello di fallback; il bridge riporta `mixed` quando frame diversi sono stati prodotti da modelli diversi. Un colpo di cache riutilizza quell'identità del produttore invece di etichettarla come il piano di routing richiesto. La cache del risultato dell'intero video è chiave su ogni input che cambia l'output — prompt, modello efficace, politica di campionamento, conteggio dei frame, modalità di analisi semantica, l'impronta SHA-256 dell'indicazione di messa a fuoco normalizzata, finestra di messa a fuoco, `transcript`, `audioTranscript` e il flag della contact-sheet — quindi cambiare una di quelle dimensioni è un colpo di cache, mai un riutilizzo obsoleto. La versione della politica di deduplicazione visiva, la soglia e il conteggio dei frame candidati limitati sono anche espliciti nella chiave della cache dei risultati e nei metadati; quindi, un cambiamento di politica non può riutilizzare una descrizione dell'intero video obsoleta. I metadati della cache dei risultati v4 mantengono la modalità e l'impronta, mai il compito utente grezzo. I metadati del guardrail riportano sia le modalità di analisi richieste che quelle efficaci; una modalità `focused` richiesta senza testo utente utilizzabile viene riportata come effettivamente `full`.

Il guardrail estrae ogni parte video supportata ma non descrive più di `modalityBridgeVideoMaxVideos`. Per un target dimostrato avere `supportsVideo === false`, i video falliti e oltre il limite diventano marcatori di testo sicuri espliciti, quindi nessun video grezzo sopravvive. Quando la capacità è sconosciuta, quelle parti rimangono intatte. I target con `supportsVideo === true` bypassano il bridge. Il segnale di abort del client si propaga attraverso il download, la coda del broker, i subprocessi e le chiamate di etichettatura; gli aborti si fermano tra i video e non falliscono mai aperti ai media grezzi.

Le impostazioni di runtime sono supportate da DB e validate da Zod:

| Chiave                              | Predefinito | Intervallo / comportamento                                                                                        |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime opzionale, opt-in                                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` preserva le etichette generiche; `focused` utilizza il contesto dell'ultimo utente non affidabile limitato |
| `modalityBridgeVideoModel`          | `""`        | Eredita il modello Vision Bridge                                                                                  |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, o `segment_aware` proporzionale; il fallimento del rilevatore torna a `uniform`         |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                    |

I valori di timeout Video persistenti legacy superiori a 120 secondi sono limitati alla scadenza del broker; le scritture di nuove impostazioni superiori a quel limite vengono rifiutate. `GET /api/modality-bridge/video/runtime` richiede una località di loopback timbrata affidabile prima dell'autenticazione o della sonda di runtime, quindi richiede l'autenticazione di gestione. Restituisce solo versioni FFmpeg/ffprobe disponibili e sanificate, e un motivo fisso quando il runtime non è disponibile. L'endpoint di estrazione interno non è un'API di upload pubblica: la saturazione della coda restituisce `503` più `Retry-After`, una disconnessione del chiamante restituisce `499`, e la scadenza fissa del broker restituisce `504`. Le risposte convertite aggiungono `video->text;model=<visionModel>;parts=<videos>` all'intestazione centrale `x-omniroute-modality-bridge` senza rimuovere segmenti Vision o Audio.

### PII Masker (`piiMasker.ts`)

Funziona su **entrambi** i livelli.

- **`preCall`** clona il payload, attraversa `system`, `messages`, `input` e `prompt` (inclusi gli elementi di stringa semplice), e applica `processPII()` (da `@/shared/utils/inputSanitizer`) ai campi di stringa `content`/`text`. Quando `PII_REDACTION_ENABLED=true`, il PII rilevato viene redatto nel payload in uscita. Questo è indipendente da `INPUT_SANITIZER_MODE` (che controlla solo la politica di iniezione del prompt). Quando la redazione è disattivata, la chiamata registra i conteggi di rilevamento senza riscrivere il contenuto.
- **`postCall`** clona profondamente la risposta, esegue `sanitizePIIResponse()` più il mascheratore della forma dell'API delle Risposte (`maskResponsesOutput` — copre `output_text` e `output[].content[].text`). Se si verifica una redazione, la risposta modificata sostituisce l'originale.

Il guardrail non blocca mai; annota solo (`meta.detections`, `meta.redacted`) o riscrive.

### Prompt Injection (`promptInjection.ts`)

Rileva strutture avversarie nel contenuto fornito dall'utente e applica la politica configurata. Il comportamento è guidato da variabili di ambiente e opzioni del costruttore:

| Impostazione     | Variabile d'ambiente                                                                                   | Predefinito | Effetto                                                                                                                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Abilitato        | `INPUT_SANITIZER_ENABLED`                                                                              | `true`      | Quando `false`, il guardrail si interrompe.                                                                                                                                                                              |
| Modalità         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`      | Politica di iniezione: `block`, `warn` o `log`. (`redact` è accettato per compatibilità retroattiva ma **non** rimuove il testo di iniezione; la richiesta di riscrittura PII è controllata da `PII_REDACTION_ENABLED`.) |
| Soglia di blocco | Opzione `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | Severità minima richiesta per bloccare. Medium è solo osservazione per impostazione predefinita.                                                                                                                         |

**Precedenza della modalità** (`getMode`): `options.mode` del chiamante →
`INJECTION_GUARD_MODE` **override del flag di funzionalità DB** (Dashboard → Impostazioni →
Flag di funzionalità) → variabile d'ambiente `INJECTION_GUARD_MODE` → variabile d'ambiente `INPUT_SANITIZER_MODE` →
`warn`. Un override della dashboard quindi prevale sulle variabili d'ambiente, quindi l'interfaccia utente dei Flag di funzionalità controlla il guard live (senza riavvio). La lettura del DB è fail-safe:
se si verifica un errore, il guard torna al comportamento basato su variabili d'ambiente, e quando non è impostato alcun override il comportamento è identico alla risoluzione solo basata su variabili d'ambiente.

Fonti di rilevamento:

1. `sanitizeRequest()` da `@/shared/utils/inputSanitizer` (set di rilevatori condivisi utilizzati altrove nella pipeline).
2. `DEFAULT_GUARD_PATTERNS` integrati (attualmente `system_override_inline` e
   `markdown_system_block`, entrambi di severità `high`).
3. `customPatterns` opzionali passati tramite opzioni del costruttore (stringhe, regex,
   o record `{ name, pattern, severity }`).

Quando `mode === "block"` **e** almeno un rilevamento soddisfa la soglia di severità,
`preCall` restituisce `{ block: true, message: "Richiesta rifiutata: contenuto sospetto rilevato" }`. Nelle modalità `warn`/`log`, il guardrail registra ma
consente la chiamata. L'aiuto condiviso `evaluatePromptInjection()` è anche esportato
per i chiamanti che necessitano di valutare i prompt senza passare attraverso il registro.

**Scan bound (v3.8.20):** il rilevatore ispeziona solo i **primi 16 KB** di
testo del prompt unito — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) in
`src/shared/utils/inputSanitizer.ts`. Sia `detectInjection()` che
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` prima di eseguire
il ciclo di pattern. Le direttive di iniezione si trovano vicino all'inizio di un input, quindi questo
limita l'uso della CPU/GC regex su payload di diverse centinaia di KB senza indebolire il rilevamento (cfr.
#3932, #4041).

### Mascheratore di Credenziali (`credentialMasker.ts`)

Funziona su **entrambi** i livelli, ultimo nella catena predefinita (priorità `95`). Rimuove
i modelli di API-key / secret-token noti dal payload in uscita (contenuto del messaggio,
argomenti della chiamata dello strumento, risultati dello strumento) **e** dalla risposta del fornitore, quindi una
credenziale incollata in un prompt (o restituita da un risultato dello strumento) non viene divulgata
al fornitore upstream o di nuovo al cliente.

- **Solo su richiesta**, stessa convenzione della riscrittura PII (Regola Ferrea #20-adjacent):
  disabilitato a meno che `settings.credentialRedactionEnabled === true` **o**
  `CREDENTIAL_REDACTION_ENABLED=true`. Con essa disattivata, il guardrail è un no-op —
  non blocca mai e non riscrive mai.
- `redactCredentials()` percorre l'intero albero payload/riposta (`walkValue()`,
  sicuro per la contaminazione del prototipo, sicuro per i cicli tramite `WeakSet`) e sostituisce le corrispondenze con
  un segnaposto `[REDACTED:<type>]`, clonando solo i rami che sono effettivamente
  cambiati.
- `CREDENTIAL_PATTERNS` copre le chiavi dei fornitori LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), chiavi di pagamento (Stripe, Square), chiavi cloud
  (chiave di accesso AWS, Twilio, SendGrid, Mailgun), chiavi private / JWT,
  stringhe di connessione contenenti credenziali (`mongodb://user:pass@...`, ecc.), e
  un modello generico di intestazione `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Le chiavi a forma di intestazione (`authorization`, `x-api-key`, `api-key`,
  `apikey`) vengono rimosse strutturalmente (solo valore, prefisso dello schema come
  `Bearer `/`Basic ` preservato) piuttosto che tramite la regex di testo generica.
- Il guardrail non blocca mai; riscrive solo (`modifiedPayload` /
  `modifiedResponse`) e annota (`meta.credentialsRedacted`, `meta.count`).

Guardia di regressione: `tests/unit/credential-masker-guardrail.test.ts`.

## Contratto Base (`base.ts`)

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
  block?: boolean; // true interrompe la catena
  message?: string; // mostrato quando bloccato
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // restituito da preCall per riscrivere la richiesta
  modifiedResponse?: TValue; // restituito da postCall per riscrivere la risposta
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

Un guardrail segnala "nessun cambiamento" restituendo `void`, `{}`, o
`{ block: false }`. Restituire un `modifiedPayload`/`modifiedResponse` sostituisce
il valore che scorre attraverso la catena per i guardrail a valle.
`signal?: AbortSignal` porta il ciclo di vita del chiamante nei guardrail. Un aborto di richiesta è l'eccezione deliberata di fail-open: i bridge multimediali interrompono il lavoro e la pulizia senza ripristinare i media grezzi a un target noto per non supportarli.

## Registro (`registry.ts`)

Il singleton `guardrailRegistry` espone:

- `register(guardrail)` — aggiunge (o sostituisce per nome normalizzato) un guardrail e
  riordina per `priority` crescente.
- `clear()` / `list()` — helper amministrativi.
- `runPreCallHooks(payload, context)` — itera i guardrail attivi, passa il
  payload attraverso `modifiedPayload` e si ferma al primo `block: true`.
- `runPostCallHooks(response, context)` — stesso flusso sul lato della risposta.
- `resetGuardrailsForTests({ registerDefaults })` — cancella lo stato e opzionalmente
  registra nuovamente i valori predefiniti per un isolamento pulito dei test.

Entrambi i runner restituiscono `{ blocked, payload|response, results, guardrail?, message? }`
dove `results` è un array di record `GuardrailExecutionResult` che includono
i campi `blocked`, `skipped`, `modified`, `error` e `meta` per ogni guardrail,
utili per la tracciatura.

### Disabilitazione dei Guardrail per Richiesta

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` aggrega un
elenco deduplicato di nomi di guardrail che dovrebbero essere saltati per la richiesta
corrente. Fonti (tutte opzionali, tutte unite):

- `apiKeyInfo.disabledGuardrails`
- Corpo della richiesta `disabledGuardrails` (livello superiore)
- Corpo della richiesta `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (o il legacy
  `x-disabled-guardrails`)

I valori possono essere array di stringhe o una stringa separata da virgole; i nomi sono
normalizzati in kebab-case minuscolo (`pii_masker` → `pii-masker`). Il risultato
viene passato tramite `context.disabledGuardrails` al registro, che salta
i guardrail corrispondenti (`skipped: true` in `results`).

## Ordine di Esecuzione

Per ogni richiesta che transita attraverso `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` costruisce la lista di esclusione dalla chiave API, dal corpo e dagli header.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` esegue i guardrail in ordine di priorità crescente:
    - I guardrail disabilitati vengono registrati come `skipped`.
    - Il `preCall` di ogni guardrail può riscrivere il payload tramite `modifiedPayload`.
    - Il primo `block: true` interrompe la catena e l'handler restituisce una risposta di rifiuto del guardrail.
3.  Il payload (potenzialmente riscritto) fluisce nel routing combinato e nel dispatch a monte.
4.  Dopo che la risposta è stata assemblata, `guardrailRegistry.runPostCallHooks(...)` esegue la stessa catena sulla risposta. `block: true` qui scarta la risposta a monte.

I guardrail che generano un errore vengono registrati con `error: <message>` e loggati tramite
`logger.warn`, ma la catena continua — fail-open per design.

## Configurazione

Variabili d'ambiente lette dai guardrail integrati:

| Variabile                             | Usata da                  | Effetto                                                                                                                              |
| :------------------------------------ | :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Impostare `false` per disabilitare completamente il rilevamento.                                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Politica di iniezione: `warn`, `block`, o `log`. Il valore legacy `redact` non riscrive il testo di iniezione.                       |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modalità per il guardrail di iniezione; anche un flag di funzionalità del DB che **sovrascrive** le variabili d'ambiente (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Gravità minima che `MODE=block` rifiuta: `high` (predefinito), `medium`, o `low`.                                                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias legacy per `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                  |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Quando `true`, le PII della richiesta vengono redatte (indipendentemente dalla modalità di iniezione).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Controlla il comportamento del masker lato risposta.                                                                                 |

I guardrail di Modality Bridge leggono la configurazione di runtime dal
repository di impostazioni basato su DB (`getSettings()`), non dalle variabili d'ambiente. Le chiavi primarie di Vision sono
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, e
`modalityBridgeCacheMaxEntries`. Le chiavi legacy
`visionBridge*` sono accettate solo come fallback di lettura a ciclo singolo documentato; le scritture della dashboard utilizzano le chiavi primarie. I valori predefiniti e il risolutore di fallback si trovano in `src/shared/constants/modalityBridgeDefaults.ts`, con le costanti legacy mantenute in `src/shared/constants/visionBridgeDefaults.ts`.

Audio utilizza `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, e `modalityBridgeAudioMaxClips`, più le impostazioni condivise
`modalityBridgeCache*`. Audio non ha un fallback per le chiavi legacy perché queste
chiavi sono state introdotte con lo schema Modality Bridge.

Video utilizza `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, e
`modalityBridgeVideoTimeout`, più le impostazioni condivise `modalityBridgeCache*`.
È disabilitato per impostazione predefinita perché FFmpeg/ffprobe sono dipendenze operative opzionali e la didascalia dei fotogrammi aggiunge latenza e costi del modello.

## Guardrail Personalizzati

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

Passi:

1. Creare `src/lib/guardrails/myGuardrail.ts` estendendo `BaseGuardrail`.
2. Implementare `preCall` e/o `postCall`.
3. Registrare al momento dell'importazione (push da `registerDefaultGuardrails`) o
   chiamare `guardrailRegistry.register(...)` a runtime — il registro sostituisce
   qualsiasi guardrail precedente con lo stesso nome normalizzato.
4. Aggiungere test sotto `tests/unit/` (esempi esistenti:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test

Usare `resetGuardrailsForTests()` tra i test per partire da uno stato noto.
Passare `{ registerDefaults: false }` per iniziare con un registro vuoto e
registrare solo i guardrail sotto test. Vision Bridge accetta l'iniezione di dipendenza
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge espone i
punti di giunzione equivalenti per impostazioni, capacità, selezione del modello STT, controlli delle credenziali e trascrizione. I test possono quindi esercitare entrambi i flussi senza accesso al DB o alla rete.

## Vedi Anche

- `src/lib/guardrails/` — implementazione
- `src/shared/utils/inputSanitizer.ts` — rilevatore condiviso che alimenta
  l'iniezione di prompt e il mascheramento PII
- `src/shared/constants/visionBridgeDefaults.ts` — impostazioni predefinite di Vision Bridge e
  lista di modelli forzati
- `src/shared/constants/modalityBridgeDefaults.ts` — impostazioni predefinite di runtime condivise Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — livello ortogonale (interruttore di circuito, cooldown)
- `docs/reference/ENVIRONMENT.md` — riferimento completo alle variabili d'ambiente

## Copertura delle rotte di protezione dall'iniezione e red-team (Fase 8 · Blocco D)

La protezione dall'iniezione (`createInjectionGuard` / `withInjectionGuard`) copre tutte le rotte
che accettano prompt utente. Rispetta `INJECTION_GUARD_MODE` (predefinito `warn` = solo log;
`block` = restituisce HTTP 400 `SECURITY_001`).

| Tipo              | Rotte                                                                                                                                                | Modalità predefinita |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Testo (esistente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                 |
| Generativo        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                 |
| Dati              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                 |

L'estrazione del testo (`extractMessageContents`) copre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (notturno, `nightly-llm-security.yml`):** promptfoo verifica che ogni rotta blocchi
il corpus OWASP-LLM in `INJECTION_GUARD_MODE=block`; garak esegue probe (salta senza segreto).
`moderations` è incluso per coerenza — gli operatori in modalità blocco possono esentarlo tramite
`resolveDisabledGuardrails`.

Il workflow notturno (`.github/workflows/nightly-llm-security.yml`, cron + dispatch manuale)
ha due job:

- **`promptfoo-guard` (bloccante)** — esegue `promptfoo eval -c promptfooconfig.yaml`
  con `INJECTION_GUARD_MODE=block`. Ogni caso avversario (es. "ignora tutte
  le istruzioni precedenti...", jailbreak stile DAN) asserisce che la risposta contenga
  `error.code === "SECURITY_001"`, cioè che la protezione abbia effettivamente rifiutato la richiesta.
- **`garak` (consultivo)** — esegue garak `--probes promptinject,dan,leakreplay`
  contro un'istanza locale di OmniRoute (`http://localhost:20128/v1`). Vincolato a un
  segreto del provider (`PROMPTFOO_PROVIDER_KEY`); salta elegantemente ed è suffissato
  `|| true`, quindi riporta senza far fallire la CI.

La copertura dell'helper di protezione (`createInjectionGuard` / `withInjectionGuard`)
si estende a ogni rotta `/v1` che trasporta prompt; il testo del prompt viene estratto da
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` tramite
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts`.
