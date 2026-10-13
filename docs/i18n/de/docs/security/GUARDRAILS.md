# Guardrails (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Verbindliche Quelle:** `src/lib/guardrails/`
> **Zuletzt aktualisiert:** 2026-08-29 — v3.8.51 (Die Herkunft des Video-Bridge-Transkripts wird vom Aufrufer deklariert,
> aber noch nicht serverseitig verifiziert — gemäß #11661 klargestellt)

Guardrails erzwingen Sicherheitsvorgaben, Richtlinien und Inhaltstransformationen an der Grenze
zwischen OmniRoute und vorgelagerten Anbietern. Jede Guardrail kann Anfrage-Payloads (`preCall`) und
Antworten vorgelagerter Anbieter (`postCall`) prüfen (und optional ablehnen, transformieren oder
mit Anmerkungen versehen).

Das System ist **fehlertolerant (Fail-open)**: Löst eine Guardrail während der Ausführung einen Fehler aus,
zeichnet die Registry den Fehler auf und fährt mit der nächsten Guardrail fort, anstatt die
Anfrage fehlschlagen zu lassen. Das Blockieren ist stets eine explizite Entscheidung (`block: true`)
und niemals ein Versehen.

## Eingebaute Schutzvorrichtungen

Das Register lädt automatisch sechs Schutzvorrichtungen in priorisierter Reihenfolge beim Import (siehe `registry.ts` → `registerDefaultGuardrails()`):

| Priorität | Name                | Phase(n)       | Datei                 |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niedrigere Prioritätszahlen werden **zuerst** ausgeführt.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Fängt bildtragende Anfragen an **nicht-visuelle Modelle** ab und leitet entweder die gesamte Anfrage an ein visionfähiges Modell um oder ersetzt die Bildteile durch Textbeschreibungen, die von einem konfigurierbaren Vision-Modell vor dem upstream-Aufruf erzeugt werden. Dies ermöglicht es textbasierten Anbietern, multimodale Payloads transparent zu verarbeiten.

Ablauf:

1. Überspringen, wenn das Zielmodell bereits Vision unterstützt (es sei denn, es erscheint in der erzwungenen Brückenliste `isVisionBridgeForcedModel`).
2. Bildteile über `extractImageParts(messages)` extrahieren (`visionBridgeHelpers.ts`), das an den **einheitlichen Mediendetektor** `detectMediaParts()` in `open-sse/utils/mediaParts.ts` delegiert — die einzige Quelle der Wahrheit, die mit dem Kombi-Kompatibilitätsfilter geteilt wird. Die Extraktion ist auf die obersten Teile der Formen beschränkt, die `replaceImageParts` zurückspulen kann (der extract↔replace-Vertrag): OpenAI `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL `source.type:"url"` und Responses API `input_image`. Verschachtelte Treffer und nur Indikatorformen sind Material für den Kombi-Filter und werden niemals extrahiert. Überspringen, wenn keine gefunden.
3. Laufzeitkonfiguration über `resolveVisionBridgeRuntimeSettings()` auflösen (`src/shared/constants/modalityBridgeDefaults.ts`): neue `modalityBridge*`-Einstellungs-Schlüssel gewinnen; veraltete `visionBridge*`-Schlüssel bleiben ein **Fallback für einen Zyklus** (Rollback-Fenster). Überspringen vor jeder Medienübertragung, wenn die Brücke deaktiviert ist.
4. Moduswähler (`modalityBridgeVisionMode`, siehe Tabelle unten) entscheidet über Umleitung oder Beschreibung. Die Umleitung gibt `modifiedPayload` zurück, bei dem nur `model` ausgetauscht wird, plus Meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beschreibungsweg: Bilder auf `maxImages` begrenzen, den aufgabenbewussten Prompt zusammensetzen, den Beschreibungs-Cache konsultieren, das Vision-Modell **parallel** aufrufen (`Promise.allSettled`), und `[Image N]: <description>`-Textteile an deren Stelle injizieren. Eine fehlgeschlagene Beschreibung ergibt `null` und der ursprüngliche Bildteil wird **bewahrt** (#4012) — außer auf dem Kombi-Beschreibungsweg, wenn jede Beschreibung fehlgeschlagen ist, wo ein bestätigter nicht-visueller Upstream stattdessen einen `(unavailable — no vision-capable provider connected)` Stub erhält (#8430).
6. `modifiedPayload` + Meta (`imagesProcessed`, `descriptions`, `processingTimeMs`, `visionModel`) zurückgeben.

#### Moduswähler (`modalityBridgeVisionMode`)

| Modus      | Standard | Verhalten                                                                                                                                                                                                                                                                                                                             |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Veraltete Heuristik, unverändert (#6640/#7204): Nicht-Kombi/`auto/`-Modelle leiten an das beste Vision-Modell um, es sei denn, das ursprüngliche Modell hat bereits verwendbare Anmeldeinformationen (dann beschreiben); Kombi-Ziele beschreiben immer.                                                                               |
| `describe` |          | Immer beschreiben — der Umleitungsblock wird vollständig übersprungen; das vom Benutzer gewählte Modell antwortet immer.                                                                                                                                                                                                              |
| `reroute`  |          | Zwinge Umleitung: Der Schutz für das Modell mit Anmeldeinformationen wird umgangen. Der Schutz für die Umleitungs-**Ziel**-Anmeldeinformationen gilt weiterhin — wenn kein verwendbares Vision-Ziel existiert, fällt die Anfrage auf die Beschreibung zurück, sodass rohe Bilder niemals ein textbasiertes Backend erreichen (#8430). |

Erzwungene Modi unterbrechen **vor** der Ausführung der automatischen Heuristik; das Verhalten von `auto` ist byte-identisch mit der vor PR-1 Schutzvorrichtung.

#### Aufgabenbewusster Beschreibungs-Prompt (`modalityBridgeVisionTaskAware`)

Standard **wahr**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) fügt den Text der **letzten Benutzeranfrage** (auf 500 Zeichen gekürzt) zum Basisbeschreibungs-Prompt hinzu, lenkt die Beschreibung auf das, was der Benutzer tatsächlich gefragt hat (codex-vision-proxy-Muster) und fordert das Vision-Modell auf, sichtbaren Text zu transkribieren. Mit deaktivierter Flagge — oder ohne Benutzertext — wird der Basis-Prompt unverändert verwendet.

Die Beschreibung des Selbstloops von `callVisionModelSingle()` in `visionBridgeHelpers.ts` fordert immer `image_url.detail: "high"` — bedingungslos, für jeden Aufrufer/Provider, ohne dass ein Client-Signal erforderlich ist. Die Abtastung mit niedriger Detailgenauigkeit verringert die OCR-Genauigkeit genau für die Texttranskriptionsaufgabe, um die dieser Prompt bittet, sodass der Beschreibungsaufruf selbst immer nach hoher Detailgenauigkeit fragt, unabhängig davon, welches Detailniveau die ursprüngliche eingehende Anfrage verwendet hat. Dies betrifft nur den internen Beschreibungsanfragetext; es ändert nicht, wie OmniRoute das eigene `image_url.detail` des Aufrufers in der Hauptanfrage weiterleitet — dieses Standardverhalten wird separat angewendet und nur für erkannte OpenCode-Clients in `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Der Anthropic-Wire-Format-Zweig des Selbstloops hat kein `detail`-Feld und ist von beiden Standards nicht betroffen.

#### Beschreibungs-Ausgabeobergrenze (`modalityBridgeVisionMaxChars`)

| Schlüssel                      | Standard | Bereich            |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` oder 100–50000 |

`0` (Standard) bedeutet **keine Obergrenze** — die Beschreibung, die von `callVisionModel()` zurückgegeben wird, wird unverändert durchgereicht, wodurch das bestehende Verhalten beibehalten wird. Jeder Wert im Bereich von 100–50000 kürzt die Beschreibung mit einem `…`-Suffix, bevor sie als `[Image N]: <description>` wieder eingefügt wird (`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`). Erhöhen Sie dies für detailreiche OCR-Aufgaben, bei denen das nachgelagerte Modell die vollständige Transkription benötigt; senken Sie es, um den Tokenverbrauch bei gesprächigen Vision-Modellen zu begrenzen. Das Dashboard-Feld befindet sich im erweiterten Bereich des Vision-Tabs (`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) und begrenzt jeden Wert zwischen 1 und 99 auf den Mindestwert von 100, während ein explizites `0` unberührt bleibt — `0` ist ein gültiger Zod-Wert an sich (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nicht nur das "nicht festgelegte" Standardverhalten.

#### Beschreibungs-Cache (`modalityBridge/bridgeCache.ts`)

In-Memory LRU + TTL-Cache für Beschreibungs-Ausgaben, prozessweit geteilt. Schlüssel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` mit Längenpräfix-Rahmung (keine Feldgrenzenkollisionen). Die Modellkomponente ist das **konfigurierte** Brückenmodell, nicht das Modell, das tatsächlich geantwortet hat — `callVisionModel` kann intern zurückfallen, und das Schlüssel-Per-Versuch würde den Cache fragmentieren. Fehlgeschlagene Beschreibungen werden niemals im Cache gespeichert. Einstellungen:

| Schlüssel                       | Standard | Bereich |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normierung von Remote-Bildern (Selbstloop-Beschreibung/base64-Abruf)

Wenn die Brücke ein **remote** Bild selbst abruft — der Anthropic-Beschreibungs-Selbstaufruf und die claude-wire-format base64-Konvertierung (`ensureBase64ImagesForClaudeWire`), beide über `fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — wird die resultierende Daten-URI durch `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) geleitet, bevor sie in die Anfrage des Vision-Modells eingebettet wird. Übergroße Bilder werden auf eine **2048px lange Kante** skaliert (entsprechend der Resize-Obergrenze, die OpenAI/Anthropic bereits serverseitig anwenden), was die Upload-Bytes/Latenz reduziert, ohne zu ändern, was das Vision-Modell sieht. Die Größenänderung verwendet `sharp`, das über einen dynamischen Import geladen wird: Auf einer Plattform, auf der das native Binary nicht geladen werden kann, wirft `normalizeDataUri()` **nie eine Ausnahme** — es fällt auf eine Durchleitung der ursprünglichen Bytes zurück, sodass der Beschreibungs/base64-Konvertierungsweg immer funktioniert. Nicht-Bild-Bytes (ein Abruf, der kein decodierbares Bild zurückgegeben hat) werden ebenfalls unverändert durchgeleitet. Diese Normierung ist auf Bilder beschränkt, die die Brücke für ihren eigenen Selbstaufruf abruft — sie wird niemals auf die rohe Durchleitungsnutzlast des Aufrufers angewendet, was mit dem Prinzip der nur optionalen Mutation (Hard Rule #20) übereinstimmt.

#### Einstellungen-Schema + Migration

Die neuen `modalityBridge*`-Schlüssel werden in `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`) mit Zod validiert: `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, das `modalityBridgeCache*`-Trio und die `modalityBridgeAudio*`-Gruppe, die von der Audio-Brücke verwendet wird. Die Migration `141_modality_bridge_settings.sql` kopiert vorhandene Legacy `visionBridge*`-Werte in die entsprechenden neuen Schlüssel (idempotent, überschreibt niemals einen vom Operator festgelegten `modalityBridge*`-Wert); die Legacy-Schlüssel bleiben als Lese-Fallback für einen Release-Zyklus akzeptiert.

#### Transparenz-Header + Statistiken

Die durch die Beschreibung transformierten Antworten tragen `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (erstellt von `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`, gestempelt von `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`). Umgeleitete Anfragen erhalten **keinen** Header — die Nutzlast wurde unverändert gelassen und der Modellwechsel ist bereits im `model`-Feld des Antwortkörpers sichtbar.

`GET /api/modality-bridge/stats` (Management-Authentifizierung, dieselbe Ebene wie `GET /api/settings`) gibt die im Speicher pro Modalität gezählten Werte `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` für `vision`, `audio` und `video` zurück. `averageLatencyMs` verwendet `latencySamples`, nicht alle Versuche, als Nenner; eine Operation ohne Zeitmessung erzeugt kein Null-Millisekunden-Probe. `bridged` bleibt das abwärtskompatible Alias für erfolgreiche Konversionen; fehlgeschlagene Versuche erhöhen es nicht. Die Zähler werden bei einem Prozessneustart aus Design zurückgesetzt (Telemetrie, nicht Buchhaltung).

#### Dashboard-Konfiguration

Die dedizierte Dashboard-Seite ist  
`/dashboard/settings/modality-bridge`. Ihre URL-adressierbaren `Vision`, `Audio`  
und `Video` Tabs bewahren die Abfrageparameter beim Wechseln des `tab` Wertes.  
Der Vision-Tab bietet die Aktivierung, den Modus, die Modellauswahl (einschließlich der automatischen  
Standardauswahl), aufgabenbewusste Aufforderungen, erweiterte Zeitüberschreitungs-/Bild-/Beschreibungslängen-/Cache  
Grenzen, Laufzeit  
Zähler und eine geschützte Beispielanfrage. Der Audio-Tab ist ebenfalls aktiv: er bietet  
die Aktivierung, einen STT-nur Modellauswähler mit Auto, Zeitüberschreitungs-/max-Clip-Grenzen, Audio  
Zähler und einen `input_audio` Beispieltest. Der Video-Tab ist funktionsfähig: er berichtet  
über den FFmpeg/ffprobe Laufzeitstatus — einen von vier expliziten UI-Zuständen (`unknown`, während  
die Erkundung läuft oder nicht abgeschlossen werden konnte, `restricted` auf einem Nicht-Loopback  
Dashboard-Host, wo die Erkundung clientseitig übersprungen wird, `unavailable`, sobald erkundet  
und als fehlend bestätigt, oder `available` mit den FFmpeg/ffprobe Versionen) — bewahrt  
Aktivierungs-/Modell-/Frame-/Video-/Zeitüberschreitungsgrenzen, filtert den Modellauswähler auf visionfähige  
Modelle und bietet Videozähler an.

Die frühere Vision Bridge-Karte unter den KI-Einstellungen ist ein Kompatibilitätslink zur  
neuen Seite; sie besitzt nicht mehr eine zweite Kopie des Formulars. Media Providers verlinkt auch  
Image-to-Text und Speech-to-Text Workflows zu den entsprechenden Modality Bridge Tabs, ohne den  
bestehenden Speech-to-Text Playground zu entfernen.

**Selbstschleifen-Zulassungsumgehung:** Wenn der Describe-Call durch OmniRoute's  
eigenen `/v1` Selbstloop (nicht-standardmäßiges Anbieter-Modell) geleitet wird, sendet die  
Unteranfrage `x-omniroute-admission-bypass: internal` und wird mit dem aufgelösten  
Selbstloop-Zugangsdaten authentifiziert — dem lokalen `sk_omniroute` Sentinel im lokalen Modus oder  
dem vom Betreiber konfigurierten `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env Schlüssel (#1350), sodass  
`REQUIRE_API_KEY=true` Bereitstellungen den Describe-Call weiterhin ausführen können. Die Umgehung  
wird nur für diese genauen Zugangsdaten anerkannt, sodass externe Clients den  
Header nicht verwenden können, um die Zulassung zu überspringen.

Legacy-Standards befinden sich in `src/shared/constants/visionBridgeDefaults.ts`; die  
neuen Modus-/aufgabenbewussten/Cache-Standards und der Einstellungsresolver befinden sich in  
`src/shared/constants/modalityBridgeDefaults.ts`. Die Schutzvorrichtung bietet eine  
`deps` Konstruktoroption, sodass Tests gefälschte `getSettings` und  
`callVisionModel` Implementierungen injizieren können.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fängt audiohaltige Chat-Anfragen ab, bevor sie ein Ziel erreichen, das nicht  
bekannt ist, Audioeingaben zu akzeptieren. Es leitet die Chat-Anfrage niemals um: Audio-Teile werden  
über den bestehenden OpenAI-kompatiblen Multipart-Endpunkt transkribiert und das  
ausgewählte Chat-Modell fährt mit Texttranskripten fort.

Ablauf:

1. Bestimme `supportsAudio` durch `getResolvedModelCapabilities()`. Explizite  
   Anbieter-Registry-Metadaten haben Vorrang, dann statische Modellmetadaten, dann synchronisierte  
   `modalities_input`. Eine deklarierte Eingabeliste ohne `audio` ist `false`; keine  
   Fähigkeitshinweise bleiben `null`. Sowohl `false` als auch `null` aktivieren die  
   konservative Brücke, während `true` sie umgeht.
2. Bestimme `modalityBridgeAudio*` Einstellungen und extrahiere splicebare oberste  
   Audio-Teile aus jeder Nachricht durch den gemeinsamen `detectMediaParts()`  
   Detektor. Unterstützte Drahtformen sind OpenAI `input_audio`, `audio_url` und  
   `source.media_type: "audio/*"`. Verschachteltes Audio wird zur Weiterleitung erkannt, aber nicht  
   durch den Splice-Pfad entfernt. Die Arbeit wird durch `modalityBridgeAudioMaxClips` begrenzt;  
   spätere Teile bleiben unberührt.
3. Berücksichtige ein konfiguriertes `provider/model`, oder lasse `selectAudioBridgeModel()`  
   `AUDIO_TRANSCRIPTION_PROVIDERS` in stabiler Katalogreihenfolge durchlaufen und wähle das erste  
   Modell mit einem verwendbaren aktiven Anbieter-Zugangsdaten aus.
4. `callAudioTranscription()` konvertiert base64/data-URI Audio in eine Multipart  
   `file`, oder lädt eine entfernte `audio_url` über die nur öffentlichen ausgehenden  
   Schutzvorrichtung mit DNS-Pinning und einer 25 MB Grenze herunter. Es POSTet dann die Datei und das  
   ausgewählte Modell an den lokalen `/v1/audio/transcriptions` Selbstloop, authentifiziert mit  
   `resolveSelfLoopBearer()`. Die bestehende Transkriptionsroute führt eine normale  
   Zugangsdaten-Suche, Abkühlungs-/Ratenlimit-Behandlung und Anbieter-Dispatch durch.
5. Erfolgreiche Anfragen ersetzen ihre Teile durch `[Audio N]: <transcript>`. Anfragen  
   werden mit `Promise.allSettled` ausgeführt: ein individueller Fehler bewahrt dieses ursprüngliche  
   Audio-Teil (#4012 Vertrag). Wenn jeder Aufruf fehlschlägt und das Ziel als  
   `supportsAudio === false` nachgewiesen wird, werden die Teile zu  
   `[Audio N]: (unavailable — kein STT-Anbieter verbunden)` (#8430 Vertrag). Für  
   ein unbekanntes Ziel (`null`) bleibt ein Ergebnis mit allen Fehlern unberührt. Ein nachgewiesenes  
   text-only Ziel ohne verwendbare STT-Zugangsdaten erhält denselben expliziten Stub, ohne  
   einen Netzwerkaufruf auszulösen.

Erfolgreiche Transkripte verwenden den prozessweiten Modality Bridge LRU/TTL-Cache. Der  
Schlüssel kombiniert die Audio-Referenz, das stabile `audio-transcription` Betriebslabel  
und das ausgewählte STT-Modell; Fehler werden niemals im Cache gespeichert. Audio-Versuche aktualisieren  
die gemeinsamen `bridged`, `cacheHits`, `failures` und `lastUsedAt` Zähler.  
Transformierte Antworten tragen  
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; unberührte  
Anfragen erhalten kein Audio Bridge Segment.

Laufzeiteinstellungen sind DB-gestützt und Zod-validiert:

| Schlüssel                     | Standard | Bereich          |
| ----------------------------- | -------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                |
| `modalityBridgeAudioModel`    | `""`     | Auto oder STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10             |

Der gemeinsame Cache bleibt durch `modalityBridgeCacheEnabled`,  
`modalityBridgeCacheTtlMinutes` und `modalityBridgeCacheMaxEntries` kontrolliert.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts top-level Video-Teile in Chat-Vervollständigungen `messages` und Antworten
API `input`, bevor ein Ziel ohne bekannte native Videounterstützung aufgerufen wird.
Unterstützte Formen sind `input_video`, `video_url`, `video_source`, HTTPS-URLs
und `data:video/*;base64,...` Daten-URIs. Einfache Dateinamen im Text werden nicht als Video behandelt.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ist verantwortlich für die Anforderungsdurchquerung, die
Fähigkeits-/Richtlinienprüfung, die Aggregation pro Anfrage und die Antwortnutzlast.
Die pro Video-Arbeit — Erwerb, der gesamte Ergebnis-Cache, die Beschreibung einer Bildfolge
(welche jedes vom Aufrufer deklarierte Audio-Transkript integriert) und pro Versuch
Metriken/Abbruch/aufräumen — ist hinter `processVideoPart` in
`videoBridgePipeline.ts` verborgen, das einmal pro Video-Teil innerhalb der Schleife von `preCall` aufgerufen wird.
Dieses Modul definiert auch die expliziten Portgrenzen `VideoMediaBrokerPort`
(Erwerb von Bytes und Extraktion von abgetasteten Frames), `VideoAudioTranscriptionPort`
(Integration eines vom Aufrufer deklarierten Audio-Transkripts mit den abgetasteten Untertiteln) und
`VideoDrilldownPort` (die legacy raw-store Form). Die Produktions-STT und die Frame-Retention
sind um den beschreibenden Port herum zusammengesetzt durch `createVideoSttAdapter` und
`createVideoDrilldownAdapter`; letzterer verwendet den gemeinsamen opaken Handle-Lebenszyklus.

Der öffentliche `/v1` Anforderungsweg importiert oder ruft niemals einen Unterprozess auf. Remote
Videos werden unter einer Grenze von 50 MiB heruntergeladen; Inline-base64-Videos haben eine
konservative Grenze von 36 MiB dekodiert pro Video, damit das Modell/die Nachrichten/der Rahmen
innerhalb des öffentlichen JSON-Anforderungszulassungsgrenzwerts von 50 MiB bleiben kann. Inline
Längen- und Dekodierungsgrößen-Schätzungen werden vor der Zuweisung überprüft. HTTPS ist
erforderlich für die anfängliche Remote-URL und jede Umleitung, unter Verwendung des bestehenden
nur-öffentlichen ausgehenden Schutzes mit DNS-Pinning. Die Bytes überqueren dann die genaue interne
`POST /api/modality-bridge/video/extract` Broker-Grenze. Diese Route ist sowohl
`LOCAL_ONLY` als auch `SPAWN_CAPABLE`, akzeptiert nur eine pro-Prozess authentifizierte,
vertrauenswürdige Loopback-Anfrage und akzeptiert niemals eine URL, einen Dateipfad, ein ausführbares
Programm oder eine Argumentliste. Die API-Körpergrößen-Pipeline und der inkrementelle Körperleser des Handlers
setzen unabhängig eine Grenze von 50 MiB für die Broker-Eingabe durch. Die begrenzte Warteschlange führt
eine Extraktion nach der anderen aus, erlaubt vier ausstehende Jobs und begrenzt die ausstehende Eingabe auf
100 MiB.

Innerhalb des Brokers liest `ffprobe` eine private lokale Datei; die feste Format
Whitelist schließt Playlist- und Manifestformate aus. Für erlaubte MOV-Familien
Container bleiben externe MOV-Datenreferenzen standardmäßig deaktiviert, und der
feste Befehl optiert nicht dafür. Sowohl `ffprobe` als auch `ffmpeg` verwenden die
`file`-nur Protokoll-Whitelist, einen Thread, feste Argumentarrays, kein Shell
und ausführbare Dateien, die aus `PATH` aufgelöst werden. Angehängte Bildcover-Streams sind keine
spielbaren Kandidaten. Alle spielbaren Streams müssen die Grenzen erfüllen, und ein
expliziter Standardstream wird bevorzugt, bevor der deterministische niedrigste Index
Fallback eintritt. Videos sind auf 600 Sekunden, 8.192 Pixel pro Dimension und
33.554.432 Quellpixel begrenzt. FFmpeg nimmt 1–16 Midpoint-JPEG-Frames, skaliert die lange Kante
auf maximal 1.024 Pixel herunter, ohne kleinere Eingaben hochzuskalieren, und
erhält niemals eine URL. Die Abtastung ist standardmäßig `uniform`. Die optionale
`scene_aware` und experimentelle `segment_aware` Richtlinien führen einen zusätzlichen
festen FFmpeg-Durchgang über den bereits validierten lokalen Stream durch, wählen begrenzte
`showinfo` Szenenzeitstempel aus und fallen deterministisch auf die gleichen
uniformen Midpoints bei Detektorfehlern, Zeitüberschreitungen, fehlerhaften Ausgaben oder einem leeren
Kandidaten-Set zurück. Der segmentbewusste Modus weist Midpoint-Proben proportional den
validierten Szenenintervallen zu; segmentbewusste Beweise und Fallback-Verhalten sind
unten detailliert. Die harte 16-Frame-Grenze wird
nach der Auswahl in jeder Richtlinie angewendet. Wenn eine szenenbewusste Anfrage nur ein
einzelnes Frame-Budget hat, verwendet sie den uniformen Midpoint des aktiven Vollvideos oder des Fokusfensters
und meldet `policyEffective: uniform`: ein einzelnes ausgewähltes Szenen-Frame
kann nicht beide zeitlichen Enden bewahren. Ein Aufrufer kann optional ein
endliches Fokusfenster bereitstellen (`start`/`end` Sekunden); die Grenzen werden auf die Mediendauer
beschränkt, umgekehrte oder nicht-endliche Fenster werden abgelehnt, und alle Abtastrichtlinien
werden nur innerhalb des normalisierten Intervalls durchgeführt. Das resultierende
Fenster wird in den Abtastmetadaten und im untrusted Beschreibung
Präfix enthalten, damit nachgelagerte Modelle einen fokussierten Auszug von der gesamten
Zeitleiste unterscheiden können.

Der semantische Untertitel-Fokus ist eine separate, explizite Einstellung. Der Standard `full`
Analysemodus bewahrt die vorhandene Frame-Aufforderung und leitet niemals den Anfrage-Text an das
Untertitel-Modell weiter. Im `focused` Modus liest die Brücke nur den neuesten
nicht-leeren vom Benutzer verfassten `text`/`input_text` aus demselben Chat- oder Antworten-Container,
normalisiert ihn auf NFC, reduziert Steuerzeichen und Leerzeichen und begrenzt ihn auf 500 Unicode-Codepunkte. Ein leeres Ergebnis fällt auf die genaue `full` Aufforderung zurück. Ein verwendbarer Hinweis wird als JSON in einem speziellen
untrusted-user-context Block serialisiert und darf nur beobachtbare Details priorisieren; er
kann die separate Warnung gegen das Befolgen von Anweisungen, die in den Medien sichtbar oder hörbar sind, nicht
überschreiben. Textueller Fokus leitet niemals `start`/`end` ab oder ändert
den zeitlichen Sampler.

#### FU-07 strukturelle Segmentbeweise

`segment_aware` verwendet einen begrenzten Voranalyse-Durchgang über den bereits validierten
lokalen Video-Stream. Die feste Filterkette skaliert zuerst auf maximal 320 Pixel
Breite, erkennt Szenenwechsel und eingefrorene Intervalle und nimmt dann mit 1 Frame pro
Sekunde für Unschärfe, durchschnittliche Luma und räumliche/zeitliche Informationen Proben. Der Durchgang ist
auf 600 strukturelle Proben, einen FFmpeg/Filter-Thread, die gleiche
`file`-nur Protokoll- und Container-Whitelists, eine 1 MiB Prozessausgabengrenze
und maximal 30 Sekunden innerhalb des gemeinsamen Abbruchs/Fristen des Brokers beschränkt. Er akzeptiert niemals
einen Befehl, Filter, Pfad oder URL aus der Anfrage.

Die strukturellen Werte sind deterministische Stichprobennachweise, keine semantische Videoverständnis. Sie schließen keine Subjekte, Aktionen, Beschriftungen, Sprache oder Benutzerabsicht ein. Szenen- und Freeze-Grenzen bilden Segmente; Freeze-Abdeckung, Unschärfe, Belichtung, räumliche Details und zeitliche Veränderungen beeinflussen nur, wie das vorhandene Budget von 1–16 Frames verteilt wird. Ein vollständig eingefrorenes Segment ist auf einen Frame begrenzt, während nicht eingefrorene Segmente um das verbleibende Budget konkurrieren. Wenn die Grenzen die Frames übersteigen, wird eine einheitliche Zeitlinienabdeckung beibehalten, sodass schnelle frühe Schnitte ein langes nachfolgendes Segment nicht verbergen können. Szenengrenzen innerhalb der 1-Sekunden-Analyseauflösung einer Freeze-Grenze werden zusammengefasst.

Fehlende Filter, fehlerhafte/leere Nachweise, ein Detektorf fehler oder der begrenzte Voranalyse-Timeout scheitern offen an der genauen einheitlichen Mittelwertpolitik. Ein Abbruch durch den Aufrufer oder eine Broker-Frist scheitert nicht offen: Er beendet den laufenden Unterprozess, verhindert eine spätere Frame-Extraktion, und der private temporäre Baum wird in `finally` entfernt.

`scripts/perf/video-bridge-fu07-eval.ts` generiert deterministische echte FFmpeg Fixtures für post-dedup Beschriftungsanruf-Einsparungen, dichte Bewegungsbudgetverteilung, Unschärfe/Belichtung/SI-TI Nachweise, schnelle Schnitte mit einem langen Schwanz und allmähliche Falsch-Positiv. Es zeichnet die Voranalyse-Wandzeit auf und, wo `/usr/bin/time` verfügbar ist, die Kind-CPU und den maximalen RSS. Seine Qualitätsprüfungen sind strukturelle Orakel. Die Qualität des echten Beschriftungsmodells bleibt `HOLD`, da dieses System keinen autorisierten Endpunkt oder gefrorenen Richter hat. Monetäre Einsparungen bleiben ebenfalls `HOLD`, es sei denn, `--caption-cost-per-call-usd` liefert eine explizite positive Schätzung pro Anruf; das Skript fabriziert niemals ein Ergebnis.

Jeder Frame ist auf 4 MiB begrenzt, alle Rohframes zusammen auf 23 MiB und die serialisierte Broker-Antwort auf 32 MiB. Ein privates temporäres Verzeichnis wird in `finally` entfernt. OmniRoute bündelt FFmpeg nicht und akzeptiert keinen benutzerdefinierten ausführbaren Pfad. Vor der Beschriftung wendet die Brücke einen konservativen visuellen Duplikationsdurchlauf an: Jeder JPEG wird auf einen 16×16 Graustufenpuffer reduziert und nur mit dem letzten beibehaltenen Frame verglichen. Für ein angefordertes Beschriftungsbudget über einem Frame liefert die Extraktion einen begrenzten Kandidatenpool von bis zu doppelt so viel Budget und niemals mehr als 16 Frames. Die angeforderte Obergrenze wird nur nach der Duplikation angewendet, wobei die ersten und letzten ausgewählten Kandidaten während der endgültigen Verdünnung beibehalten werden, wenn das Budget mindestens zwei beträgt. Die versionierte `grayscale-16x16-mean-cells-v2`-Politik verwendet den größeren von mittlerem Luma-Differenz und dem Verhältnis von Thumbnail-Zellen, deren normalisierte Differenz mindestens 0,05 beträgt. Der Duplikatschwellenwert ist die Konstante 0,04, die für Vorhersehbarkeit gewählt wurde, anstatt als Laufzeiteinstellung offengelegt zu werden. Dieses sekundäre hochkontrastreiche Signal bewahrt kleine Bewegungen und sichtbare Textänderungen, die ein rein mittlerer Vergleich verbergen kann. Comparator- oder Decoderfehler scheitern offen und behalten die Abdeckung. Ausgabemetadaten trennen extrahierte Kandidaten, erfolgreich verwendete Frames und visuelle Duplikate, die fallen gelassen wurden.

Ein ausdrücklich markierter Videoteil kann ein zeitgestempeltes Kontaktblatt anfordern. Die Brücke erstellt maximal ein 4-Spalten, 16-Frame JPEG-Raster. Jede 512-Pixel-Zelle brennt ihren Quellzeitstempel in ein hochkontrastreiches unteres Band, während dieselben Zeitstempel in den textuellen Metadaten für nachgelagerte Zuordnung und Prüfung verbleiben. Das vollständige JPEG bleibt auf 32 MiB begrenzt. Wenn `sharp` das Raster nicht dekodieren oder erstellen kann, fällt die Brücke auf die einzelnen JPEG-Frames zurück; ein Abbruch durch den Client propagiert weiterhin durch den Blattbetrieb.

Fördernachweise sind absichtlich von der synthetischen Kompositions-Mikrobewertung getrennt. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiert ein schema-versioniertes A/B-Harness für echte OpenAI-kompatible Vision-Modelle. Es misst die vom Anbieter gemeldeten Tokens, die End-to-End-Wandlatenz (einschließlich Blattkomposition), die Modellaufrufanzahl und die manifest-definierte Faktenerhaltung. Rohmodellantworten werden nicht im Bericht geschrieben; nur SHA-256-Digests und übereinstimmende Fakt-ID werden beibehalten. Das Harness führt keinen Netzwerk- oder bezahlten Modellaufruf durch, es sei denn, `--execute-real` wird übergeben und `--model`, `OMNIROUTE_BASE_URL` und `OMNIROUTE_API_KEY` sind konfiguriert. Ohne diesen expliziten echten Lauf bleibt sein maschinenlesbares Urteil `HOLD`; synthetische Payload-/Aufrufanzahlmessungen allein sind kein Fördernachweis.

Das separate `scripts/perf/video-bridge-promotion-eval.ts` konsumiert FU-07 oder FU-09 Beobachtungen. Die Zulassung zur Förderung erfordert alle acht synthetischen Szenarioarten plus einen bereinigten echten Clip, mindestens drei gemessene Wiederholungen pro Rolle und Fall, alle zehn deklarierten Metriken, gefrorene Medien/Aufforderungen/erwartete Fakten/Einstellungen-Digests, eindeutige Beobachtungs-IDs und verifiziertes gesätes A/B-Ordnung. Der Ausführungsbeleg bindet das Corpus-Digest, den genauen Kandidaten-SHA und die Modellrevision. Fehlende oder ungültige Messungen bleiben `HOLD`, einschließlich CPU über 30 s, maximaler RSS über 512 MiB oder Voranalyse über 30 s. Dies sind Nachweis-Zulassungsobergrenzen, keine neue Laufzeit-RSS-Durchsetzungs-Garantie.

FU-07 erfordert mindestens 98% Qualitätsbeibehaltung und p95-Latenz nicht mehr als 1,2x Baseline, plus entweder eine 0,05 absolute fallbalancierte mittlere Rückrufverbesserung bei gleichwertigen mittleren Beschriftungsaufrufen oder mindestens 10% weniger mittlere post-Dedup-Beschriftungsaufrufe. FU-09 erfordert mindestens 0,85 Qualität, 95% Beibehaltung, 20% p95-Latenzreduktion und 10% Tokenreduktion. Kritischer Faktenverlust, Injektionskonformität oder fehlende Nutzung verhindern die Förderung. Eine Ausführung kann nichts fördern: `--previous-report` bestätigt zwei unterschiedliche, nicht überlappende, nacheinander berechtigte Ausführungen derselben Politik/Modellrevision/Kandidaten/Korpus. Ein Stichprobenerexperiment kann ein Kontaktblatt-Experiment nicht bestätigen.

Sammler sollten Antworten im Speicher bewerten und `responseDigest` sowie Metriken und Beobachtungsbindungen speichern, niemals den Antworttext. Der Verbraucher liest auch alte Rohbeobachtungen, kopiert diesen Text jedoch niemals in seine Berichte. Genau eines von `responseDigest` oder `rawResponseText` wird für jede Beobachtung akzeptiert. Die versionierte Zulassungsliste bleibt leer mit einem unveränderlichen Standardwert `hold`. Ein berechtigter Eintrag erfordert seinen Beweisverweis, die Richtlinie, die Modellrevision, den genauen Kandidaten-SHA, den Manifest-Digest und zwei unterschiedliche Ausführungs-IDs; widersprüchliche Kontexte werden abgelehnt. Diese Metadaten sind ein Prüfvertrag, kein Beweis dafür, dass eine referenzierte Datei echte Messungen enthält. Überprüfen Sie die tatsächlichen Belege, bevor Sie einen Eintrag hinzufügen. Der Management-Stats-Endpunkt und das Video-Dashboard zeigen eine konservative Bereitschaft. Ein konfiguriertes Modellalias allein stellt nicht seine Revision oder den laufenden Kandidaten-SHA fest, sodass das aktuelle Dashboard `HOLD` meldet, anstatt die Berechtigung aus einem anderen Ausführungskontext wiederzuverwenden. Die explizite experimentelle Auswahl bleibt von der Förderung getrennt; kein Standard wird automatisch geändert.

Aufrufer können ein optionales `transcript.cues`-Array an einem unterstützten Videoteil anhängen, wenn sie bereits über ausgerichteten Text verfügen. Jeder Cue muss `text`, ein endliches `start`/`end`-Intervall innerhalb der untersuchten Dauer und eine auf die Whitelist gesetzte `source` (`client`, `embedded` oder `audio-bridge`) tragen; `confidence` hat standardmäßig den Wert `1` und muss zwischen `0` und `1` bleiben. Exakte doppelte Cues werden zusammengefasst. OmniRoute beginnt niemals die Transkription aus diesen Metadaten: Validierte Cues werden in das beschriebene Ergebnis mit Quelle, Vertrauen und Intervall kopiert und als unzuverlässige Beobachtungen neben den Frame-Untertiteln dargestellt. Ungültiger, außerhalb des Bereichs liegender oder herkunftsfreier Text wird abgelehnt, anstatt in den Untertitelstrom gemischt zu werden. Beide Anfrage-Body-Transkriptkanäle normalisieren die bereitgestellte Herkunft auf `client`, einschließlich selbstbehaupteter `embedded`- oder `audio-bridge`-Labels. Nur ein serverbesessener Adapter kann diese vertrauenswürdigen Labels über das code-only `trustedSource`-Argument zuweisen; ein Anfrage-JSON-Feld kann dieses Argument nicht erreichen. Transkripttext bleibt unzuverlässiger, medienabgeleiteter Inhalt, unabhängig von seiner Herkunft, und darf niemals die Autorisierung bestimmen.

Ein fortgeschrittener Aufrufer kann eine `audioTranscript`-Spur für dasselbe Video bereitstellen; sie wird als vom Client bereitgestellter Text behandelt, nicht als Beweis für die Servertranskription. Die Fusionsnaht führt visuelle und audio Beobachtungen unter einem Frist- und Abbruchsignal aus, ordnet sie auf einer gemeinsamen Zeitachse, fasst exakte Duplikate zusammen und meldet ein partielles Ergebnis, wenn nur eine Seite erfolgreich ist. Ein ungültiges `audioTranscript` wird auf dieses partielle Ergebnis herabgestuft — die visuelle Beschreibung bleibt erhalten und der Audiozweig zeichnet einen bereinigten Fehlercode auf — anstatt das gesamte Video fehlschlagen zu lassen. Die Verfügbarkeit pro Zweig, das partielle Flag und die bereinigten Fehlercodes werden im beschriebenen Ergebnis, in den Guardrail-Metadaten (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), in den Ergebnis-Cache-Metadaten und in den Brückenfusionszählern beibehalten. Der Standardpfad der Video Bridge ruft keine Spracherkennung auf oder lädt eine zweite Medienkopie herunter; ohne diese explizite Spur bleibt es nur Video.

**Transkriptaufbewahrung (#12150 P1).** Dies gilt automatisch, wann immer die Video Bridge (selbst opt-in) einen Transkript-Cue rendert — es gibt kein separates Aufbewahrungsflag. Wenn eine Anfrage einen Transkript-Cue rendert (ein vom Aufrufer deklariertes `transcript` oder ein fusioniertes `audioTranscript`), markiert der Guardrail es als `videoBridgeObserved` und erzeugt einen redigierten Schatten der Videobeschreibung — eine identische Darstellung, in der der Freitextkörper jedes Cues durch `[redacted-video-transcript]` ersetzt wird, der durch Ersetzen des strukturierten Cue-Feldes vor der Zusammenstellung des Strings erstellt wird (niemals durch das Parsen des flachgedrückten Textes, sodass kein Cue-Inhalt — feindlich oder gewöhnlich, einschließlich Körper, die `]` enthalten, wie `[inaudible]`/`[music]` — überleben kann). Der persistierte Anrufprotokoll-Anfrage-Body tauscht jeden videoabgeleiteten Textteil gegen diesen redigierten Schatten aus, der durch Inhaltsgleichheit übereinstimmt; der `fullText`-Anker wird aus der fertigen Pre-Call-Guardrail-Nutzlast erneut gelesen, sodass die Übereinstimmung auch nach späteren Ketten-Guardrails (den PII- und Anmeldemaskierern, Prioritäten 10/95) erfolgreich bleibt, die den Beschreibungstext vor Ort umschreiben und nachdem Systemaufforderungen/Übergaben/Speichereinspritzungen das Nachrichtenarray umgestalten. Der Body, der an das Modell gesendet wird, bleibt unverändert. Eine beobachtete Anfrage füllt auch keinen dauerhaften Speicher (sowohl anfrage- als auch antwortabgeleitete Extraktionen werden übersprungen), sodass die eigene Antwort des Modells den Transkripttext nicht in den Speicher wiedergeben kann.

**Rohvideofelder (#12430).** Wenn die Bridge aktiviert ist und die native Videounterstützung unbekannt oder nicht vorhanden ist, aktivieren definierte `transcript`/`audioTranscript`-Felder auch `videoBridgeObserved`, selbst nach einer Beschreibungspanne oder einem `maxVideos`-Limit. `null` und leere Strings zählen; fehlende Felder und Nicht-Video-Metadaten nicht. Behaltene Kopien redigieren diese Felder oder lassen die Anfrage aus, und Caches/Speicher werden umgangen. Die Anbieter-Nutzlast bleibt unverändert.

Zusätzliche behaltene Kopien verwenden dasselbe beobachtete Anfrage-Signal. Der rohe Pre-Guardrail-Client-Anfrage-Snapshot, die im Speicher wartende Anfrage und das frühzeitig abgelehnte Anfrageprotokoll ersetzen strukturell die Transkriptfelder in Videoteilen; String-Prompts, die von Pipeline-Stufen und Kontextübergaben synthetisiert werden, werden am Ziel des persistierten Anfrage-Body redigiert. Der persistierte Marker `video_content_removed` lässt das Fortsetzen von `previous_response_id` fehlschlagen, anstatt Text zu rekonstruieren, der absichtlich verworfen wurde. Wenn eine beobachtete Anfrage ihren redigierten Schatten pro Teil vor dem Protokollieren verliert oder sogar einer von mehreren Videoschattens nach späteren Anfrageänderungen nicht übereinstimmt, wird der behaltene Anfrage-Body vollständig weggelassen, anstatt ein teilweise redigiertes Transkript zu behalten.

Für eine beobachtete Anfrage könnte eine Modellantwort jeden Teil des Transkripts ohne eine strukturierte Cue-Grenze zitieren. Daher wird das persistierte Protokoll `responseBody` durch ein Auslassungszeichen ersetzt; das detaillierte Pipeline-Artefakt (das upstream/client Bodies und Stream-Chunks enthalten kann) wird nicht beibehalten. Semantische, Idempotenz- und Reasoning-Replay-Caches umgehen Lese- und Schreibvorgänge für diese Anfrage. Die Anbieteranfrage und die für den Client sichtbare Antwort bleiben unverändert. Frühe Keepalive-Bytes werden aus dem temporären Puffer abgeleitet, wenn das detaillierte Artefakt weggelassen wird. Kiros fehlerhafte EventStream-Warnung berichtet nur die Payload-Byte-Anzahl, niemals deren Inhalte oder den Rohfehler des JSON-Parsers.  
Dies beansprucht nicht, dass jede nicht verwandte Anbieter-/Plugin-Diagnose geprüft wurde; der umfassendere Sweep des beibehaltenen Sink wird in #11658 verfolgt.

Der interne Lebenszyklus von `/api/modality-bridge/video/drilldown` ist ein separates, Loopback/token-authentifiziertes Cache-Substrat. Jede Operation erfordert auch eine kanonische opake Principal-ID. Bevor ein Produktionsaufrufer aktiviert wird, muss er diese ID aus dem authentifizierten Mandanten ableiten und darf niemals einen vom Client ausgewählten Wert weiterleiten. Cache-Schlüssel binden diesen Principal an kanonische Sitzungs- und Video-Referenz-IDs, speichern nur deren SHA-256-abgeleitete Schlüssel und beschränken sowohl Lese- als auch Löschvorgänge auf denselben Principal. Der Cache speichert maximal 16 abgeleitete JPEG-Frames pro Eintrag, läuft nach zehn Minuten ab und unterstützt begrenzte `start`/`end`-Lesungen oder explizite Sitzungslöschungen.

Jeder Principal ist auf 16 Einträge und 64 MiB kanonische JPEG-Daten beschränkt. Diese Grenzen sind unabhängig von der globalen Obergrenze von 64 Einträgen/256 MiB: Der Druck auf das Principal-Quota entfernt nur die am wenigsten verwendeten Einträge dieses Principals, bevor eine globale LRU-Evakuierung in Betracht gezogen wird. Abgelaufene Einträge werden sowohl aus der Principal- als auch aus der globalen Buchhaltung bei Cache-Aktivität entfernt, während Stornierungen und Validierungsfehler keinen partiellen Ersatz festschreiben.

Der Cache lehnt nicht-kanonisches Base64, übermäßige Polsterung, nicht-JPEG-Medien, fehlerhafte oder abgeschnittene JPEGs und JPEGs ab, die während einer begrenzten vollständigen Bild `sharp`-Dekodierung eine Warnung erzeugen. Er kodiert jedes akzeptierte Bild als kanonisches JPEG neu, leitet Breite und Höhe aus den dekodierten Bytes ab, anstatt den Feldern des Aufrufers zu vertrauen, und verwirft alle nachfolgenden Polyglot-Bytes, anstatt sie zu behalten. Nur der begrenzte kanonische komprimierte Puffer wird beiden Quoten belastet. Das JSON-Drahtlimit umfasst die Base64-Überkopfkosten für die 32 MiB Dekodierteingangsobergrenze. Jede  
gespeicherte Ableitung dokumentiert ihr validiertes JPEG-Format/-Auflösung, Sampling-Policy, Ableitungs-Version, Erstellungszeit, serverberechneten Inhalts-Hash und gehashten übergeordneten Verweis sowie den übergeordneten Inhalts-Hash des vertrauenswürdigen Aufrufers. Die Stornierung wird zwischen den asynchronen Dekodier-/Hash-Phasen vor dem atomaren Cache-Commit überprüft.

Der Produktionsproduzent verwendet bereits abgeleitete Broker-Frames nur nach erfolgreicher visueller Analyse, ohne einen zweiten Video-Download/Auszug. Er erfordert den Operator `modalityBridgeVideoDrilldownEnabled=true`, strikte pro-Teil `drilldown: true` und eine authentifizierte API-Schlüssel-Aufzeichnungs-ID. Vom Client deklarierte Principal-/Sitzungswerte begründen niemals das Eigentum. Ohne alle drei Bedingungen wird kein Hash, keine Größenänderung oder keine Beibehaltung zusätzlicher Frames durchgeführt. Ein Beibehaltungsfehler bewahrt die verwendbare visuelle Antwort. Einwilligte Anfragen umgehen den gesamten Videoergebnis-Cache, sodass zwischengespeicherte Ergebnisse niemals Handles wiedergeben.

Erfolgreiche JSON- und SSE-Antworten geben maximal vier opake Handles im begrenzten `x-omniroute-video-drilldown`-Header aus. Autorisierte Browser-Ursprünge können diesen Header lesen, ohne die CORS-Ursprungspolitik zu erweitern. Neue Handles verwenden `v1.<32-byte random base64url token>`, und das Register behält nur deren SHA-256-Hashes. Der Leser/Header-Parser akzeptiert auch veraltete 64-Hex-Token. Der authentifizierte öffentliche Verbraucher ist  
`GET /api/v1/video-bridge/drilldown?handle=...`, unabhängig durch `modalityBridgeVideoDrilldownRemoteEnabled=true` gesperrt. Explizit persistiertes false widerruft den Zugriff, selbst wenn der veraltete `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env-Fallback aktiviert ist. Die Produktionsbeibehaltung hat den analogen veralteten `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`-Fallback. Beide Fallbacks sind standardmäßig deaktiviert.

Der Verbraucher leitet das Eigentum vom authentifizierten Schlüssel ab, wendet die Schlüsselrichtlinie an und gibt denselben 404 für unbekannte, abgelaufene und andere Schlüssel-Handles zurück. Er akzeptiert `variant=preview|standard|detail` (maximale JPEG-Dimension 320/640/1280, niemals hochskaliert), `limit=1..8` (oder das veraltete `frames`-Alias, niemals beides), nullbasierte `page` und optionale `start`/`end`-Fokussekunden. Doppelte  
Abfrage-Schlüssel und umgekehrte Fokusfenster werden abgelehnt. Jede zurückgegebene Variante hat einen Hash ihres tatsächlichen Inhalts und der tatsächlichen Auflösungsmetadaten, die mit der beibehaltenen Quelle verknüpft sind. Varianten werden beim Lesen abgeleitet, anstatt als zusätzliche beibehaltene Kopien gespeichert zu werden. Die JSON-Antwort, einschließlich Base64/Umschlag, ist auf 32 MiB begrenzt; eine übergroße Seite gibt 413 zurück, und der Client muss weniger Frames anfordern. Lesevorgänge überprüfen die Stornierung um jede Größenänderung und überprüfen die Gültigkeit des Handles, bevor sie zurückgegeben werden. `DELETE` durch den Eigentümer ist idempotent; Löschung oder TTL-Ablauf gibt die beibehaltene Quelle und die Nutzungskosten frei.

Der gemeinsame Speicher ist prozesslokal: Handles laufen beim Neustart ab und sind nicht übertragbar zwischen unabhängigen OmniRoute-Prozessen. Verwaltungsstatistiken zeigen nur die effektive Beibehaltung/Remote-Politik und aggregierte beibehaltene Einträge/Bytes an, niemals Medien, Verweise, Principal-IDs oder Handles. Das Videoeinstellungsfeld zeigt diese Werte an und kann beide Einwilligungsschalter beibehalten. Diese Implementierungsdokumentation ist kein Nachweis für den Live-Einsatz oder die Förderung; die Akzeptanz des realen Modells wird separat verfolgt.

Frames werden nacheinander mit dem konfigurierten Video-Modell beschriftet. Eine leere Video-Überschreibung erbt die Vision-Einstellung; wenn beide leer sind, wählt der Vision-Auto-Router das effektive vision-fähige Modell aus. Erfolgreiche Beschriftungen ersetzen den ursprünglichen Teil mit einem stabilen `[Video description:` Präfix, das den Text auch als unzuverlässige, medienabgeleitete Beobachtung kennzeichnet und nachgelagerte Modelle anweist, den in den Medien gefundenen Anweisungen nicht zu folgen. Die Cache-Schlüssel für Frame-Beschriftungen umfassen die JPEG-Bytes, den Prompt, den Zeitstempel und das effektive Modell; nur erfolgreiche Beschriftungen werden im Cache gespeichert. Cache-Einträge behalten das tatsächliche erfolgreiche Produzentenmodell, einschließlich eines Fallback-Modells; die Brücke meldet `mixed`, wenn verschiedene Frames von unterschiedlichen Modellen produziert wurden. Ein Cache-Treffer verwendet diese Produzentenidentität erneut, anstatt sie als den angeforderten Routing-Plan neu zu kennzeichnen. Der Cache für das gesamte Videoergebnis wird auf jedem Eingabewert, der die Ausgabe ändert — Prompt, effektives Modell, Sampling-Policy, Frame-Anzahl, semantischer Analysemodus, der SHA-256-Fingerabdruck des normalisierten Fokus-Hinweises, Fokusfenster, `transcript`, `audioTranscript` und das Kontaktblatt-Flag — basierend, sodass jede Änderung dieser Dimensionen einen Cache-Fehler darstellt, niemals eine veraltete Wiederverwendung. Die Version, der Schwellenwert und die begrenzte Anzahl an Kandidaten-Frames der visuellen Duplikat-Policy sind ebenfalls explizit im Ergebnis-Cache-Schlüssel und in den Metadaten enthalten; eine Änderung der Policy kann daher keine veraltete Beschreibung des gesamten Videos wiederverwenden. Die Metadaten des Ergebnis-Caches v4 behalten den Modus und den Fingerabdruck, niemals die rohe Benutzeraufgabe. Die Metadaten der Schutzvorrichtung berichten sowohl über die angeforderten als auch über die effektiven Analysemodi; ein angeforderter `focused` Modus ohne verwendbaren Benutzertext wird als effektiv `full` gemeldet.

Die Schutzvorrichtung extrahiert jeden unterstützten Videoteil, beschreibt jedoch nicht mehr als `modalityBridgeVideoMaxVideos`. Für ein Ziel, das nachweislich `supportsVideo === false` hat, werden fehlgeschlagene und überlimitierte Videos zu expliziten sicheren Textmarkern, sodass kein rohes Video überlebt. Wenn die Fähigkeit unbekannt ist, bleiben diese Teile unberührt. Ziele mit `supportsVideo === true` umgehen die Brücke. Das Abbruchsignal der Client-Anfrage breitet sich durch Download, Broker-Warteschlange, Unterprozesse und Beschriftungsaufrufe aus; Abbrüche stoppen zwischen Videos und führen niemals zu einem offenen Fehler bei rohen Medien.

Die Laufzeiteinstellungen sind DB-gestützt und Zod-validiert:

| Schlüssel                           | Standard    | Bereich / Verhalten                                                                                                           |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optionale Laufzeit, Opt-in                                                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` bewahrt generische Beschriftungen; `focused` verwendet begrenzten, unzuverlässigen Kontext des letzten Benutzers       |
| `modalityBridgeVideoModel`          | `""`        | Erbt das Vision Bridge-Modell                                                                                                 |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` oder proportional `segment_aware`; bei einem Fehler des Detektors wird auf `uniform` zurückgegriffen |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                |

Veraltete persistente Video-Timeout-Werte über 120 Sekunden werden auf die Broker-Frist begrenzt; neue Einstellungen, die über diesem Limit liegen, werden abgelehnt. `GET /api/modality-bridge/video/runtime` erfordert vertrauenswürdige gestempelte Loopback-Lokalisierung vor der Authentifizierung oder Laufzeiterfassung und erfordert dann die Management-Authentifizierung. Es gibt nur `available`, sanierte FFmpeg/ffprobe-Versionen und einen festen Grund zurück, wenn die Laufzeit nicht verfügbar ist. Der interne Extraktionsendpunkt ist keine öffentliche Upload-API: Warteschlangenüberlastung gibt `503` plus `Retry-After` zurück, eine Anrufertrennung gibt `499` zurück, und die feste Broker-Frist gibt `504` zurück. Konvertierte Antworten fügen `video->text;model=<visionModel>;parts=<videos>` zum zentralen `x-omniroute-modality-bridge` Header hinzu, ohne Vision- oder Audiosegmente zu entfernen.

### PII Masker (`piiMasker.ts`)

Läuft in **beiden** Phasen.

- **`preCall`** klont die Payload, durchläuft `system`, `messages`, `input` und `prompt` (einschließlich einfacher String-Elemente) und wendet `processPII()` (aus `@/shared/utils/inputSanitizer`) auf die String-Felder `content`/`text` an. Wenn `PII_REDACTION_ENABLED=true`, wird erkannte PII in der ausgehenden Payload geschwärzt. Dies ist unabhängig von `INPUT_SANITIZER_MODE` (das nur die Prompt-Injektions-Policy steuert). Wenn die Schwärzung deaktiviert ist, zeichnet der Aufruf die Erkennungszahlen auf, ohne den Inhalt umzuschreiben.
- **`postCall`** tief-klont die Antwort, führt `sanitizePIIResponse()` plus den Responses-API-Form-Masker (`maskResponsesOutput` — deckt `output_text` und `output[].content[].text` ab). Wenn eine Schwärzung erfolgt, ersetzt die modifizierte Antwort die ursprüngliche.

Die Schutzvorrichtung blockiert niemals; sie annotiert nur (`meta.detections`, `meta.redacted`) oder schreibt um.

### Prompt Injection (`promptInjection.ts`)

Erkennt adversarielle Strukturen im vom Benutzer bereitgestellten Inhalt und setzt die konfigurierte Policy durch. Das Verhalten wird durch Umgebungsvariablen und Konstruktoroptionen gesteuert:

| Einstellung   | Umgebungsvariable                                                                                     | Standard | Wirkung                                                                                                                                                                                                                                          |
| ------------- | ----------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aktiviert     | `INPUT_SANITIZER_ENABLED`                                                                             | `true`   | Wenn `false`, wird der Schutzmechanismus umgangen.                                                                                                                                                                                               |
| Modus         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`   | Injektionsrichtlinie: `block`, `warn` oder `log`. (`redact` wird für die Rückwärtskompatibilität akzeptiert, entfernt jedoch **nicht** den Injektionstext; die Anforderung zur PII-Umformulierung wird durch `PII_REDACTION_ENABLED` gesteuert.) |
| Blockschwelle | `blockThreshold` Option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (Alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimale Schwere, die erforderlich ist, um zu blockieren. Medium ist standardmäßig nur zur Beobachtung.                                                                                                                                          |

**Modus-Vorrang** (`getMode`): Aufrufer `options.mode` →
`INJECTION_GUARD_MODE` **DB-Feature-Flag-Überschreibung** (Dashboard → Einstellungen →
Feature-Flags) → `INJECTION_GUARD_MODE` Umgebungsvariable → `INPUT_SANITIZER_MODE` Umgebungsvariable →
`warn`. Eine Dashboard-Überschreibung hat daher Vorrang vor den Umgebungsvariablen, sodass die Benutzeroberfläche für die Feature-Flags den laufenden Schutzmechanismus live steuert (kein Neustart). Der DB-Lesevorgang ist fehlersicher:
Wenn ein Fehler auftritt, fällt der Schutzmechanismus auf das umgebungsbasierte Verhalten zurück, und wenn keine
Überschreibung festgelegt ist, ist das Verhalten identisch mit der nur umgebungsbasierten Auflösung.

Erkennungsquellen:

1. `sanitizeRequest()` von `@/shared/utils/inputSanitizer` (gemeinsamer Detektor
   Satz, der an anderer Stelle in der Pipeline verwendet wird).
2. Eingebaute `DEFAULT_GUARD_PATTERNS` (derzeit `system_override_inline` und
   `markdown_system_block`, beide mit `high` Schwere).
3. Optionale `customPatterns`, die über Konstruktoroptionen übergeben werden (Strings, Regex
   oder `{ name, pattern, severity }`-Datensätze).

Wenn `mode === "block"` **und** mindestens eine Erkennung die Schwere
Schwelle erfüllt, gibt `preCall` `{ block: true, message: "Anfrage abgelehnt:
verdächtiger Inhalt erkannt" }` zurück. In den Modi `warn`/`log` protokolliert der Schutzmechanismus, erlaubt jedoch den Aufruf. Der gemeinsame Helfer `evaluatePromptInjection()` wird ebenfalls exportiert
für Aufrufer, die Eingabeaufforderungen bewerten müssen, ohne durch das Register zu gehen.

**Scan-Grenze (v3.8.20):** Der Detektor untersucht nur die **ersten 16 KB** des
verbundenen Eingabetexts — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 Bytes) in
`src/shared/utils/inputSanitizer.ts`. Sowohl `detectInjection()` als auch
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` vor dem Ausführen
der Muster-Schleife. Injektionsdirektiven befinden sich in der Nähe des Anfangs einer Eingabe, sodass dies
CPU/GC für mehrere hundert KB große Payloads begrenzt, ohne die Erkennung zu schwächen (vgl.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Läuft in **beiden** Phasen, zuletzt in der Standardkette (Priorität `95`). Redaktiert
bekannte API-Schlüssel / Geheimtoken-Muster aus der ausgehenden Payload (Nachrichteninhalt, Tool-Aufrufargumente, Toolergebnisse) **und** der Anbieterantwort, sodass ein
Credential, das in eine Eingabeaufforderung eingefügt (oder von einem Toolergebnis zurückgegeben) wird, nicht an den
upstream-Anbieter oder zurück an den Client weitergegeben wird.

- **Nur auf Anfrage**, dieselbe Konvention wie bei der PII-Redaktion (Hard Rule #20-adjacent):
  deaktiviert, es sei denn, `settings.credentialRedactionEnabled === true` **oder**
  `CREDENTIAL_REDACTION_ENABLED=true`. Wenn es deaktiviert ist, ist der Schutzmechanismus ein No-Op —
  er blockiert niemals und schreibt niemals um.
- `redactCredentials()` durchläuft den gesamten Payload-/Antwortbaum (`walkValue()`,
  prototypenverschmutzungs-sicher, zykelsicher über `WeakSet`) und ersetzt Übereinstimmungen durch
  einen `[REDACTED:<type>]` Platzhalter, wobei nur die Zweige geklont werden, die sich tatsächlich
  geändert haben.
- `CREDENTIAL_PATTERNS` deckt LLM-Anbieter-Schlüssel (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS-Token (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), Zahlungsschlüssel (Stripe, Square), Cloud-
  Schlüssel (AWS-Zugangs-Schlüssel, Twilio, SendGrid, Mailgun), private Schlüssel / JWTs,
  credential-tragende Verbindungszeichenfolgen (`mongodb://user:pass@...`, usw.) und
  ein generisches `Authorization`/`x-api-key`/`api-key`/`apikey` Header-Wert
  Muster. Header-förmige Schlüssel (`authorization`, `x-api-key`, `api-key`,
  `apikey`) werden strukturell redigiert (nur Wert, Schema-Präfix wie
  `Bearer `/`Basic ` erhalten) anstelle über den generischen Text-Regex.
- Der Schutzmechanismus blockiert niemals; er schreibt nur um (`modifiedPayload` /
  `modifiedResponse`) und annotiert (`meta.credentialsRedacted`, `meta.count`).

Regressionstest: `tests/unit/credential-masker-guardrail.test.ts`.

## Basisvertrag (`base.ts`)

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
  block?: boolean; // true bricht die Kette vorzeitig ab
  message?: string; // wird beim Blockieren ausgegeben
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // wird von preCall zurückgegeben, um die Anfrage umzuschreiben
  modifiedResponse?: TValue; // wird von postCall zurückgegeben, um die Antwort umzuschreiben
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

Eine Schutzvorrichtung signalisiert „keine Änderung“, indem sie entweder `void`, `{}` oder
`{ block: false }` zurückgibt. Die Rückgabe eines `modifiedPayload`/`modifiedResponse` ersetzt
den Wert, der für nachgelagerte Schutzvorrichtungen durch die Kette fließt.
`signal?: AbortSignal` überträgt den Lebenszyklus des Aufrufers an die Schutzvorrichtungen. Der Abbruch einer Anfrage ist die bewusste Fail-Open-Ausnahme: Medienbrücken beenden ihre Arbeit und führen Aufräumarbeiten durch, ohne rohe Medien für ein Ziel wiederherzustellen, von dem bekannt ist, dass es diese nicht unterstützt.

## Registrierung (`registry.ts`)

Der Singleton `guardrailRegistry` stellt Folgendes bereit:

- `register(guardrail)` — fügt eine Schutzvorrichtung hinzu (oder ersetzt sie anhand ihres normalisierten Namens) und
  sortiert erneut nach aufsteigender `priority`.
- `clear()` / `list()` — administrative Hilfsfunktionen.
- `runPreCallHooks(payload, context)` — durchläuft aktive Schutzvorrichtungen, reicht die
  Nutzlast über `modifiedPayload` weiter und stoppt beim ersten `block: true`.
- `runPostCallHooks(response, context)` — derselbe Ablauf auf der Antwortseite.
- `resetGuardrailsForTests({ registerDefaults })` — löscht den Zustand und registriert optional
  die Standardwerte erneut, um eine saubere Testisolation zu gewährleisten.

Beide Ausführungsfunktionen geben `{ blocked, payload|response, results, guardrail?, message? }`
zurück, wobei `results` ein Array von `GuardrailExecutionResult`-Datensätzen ist, die
für jede Schutzvorrichtung die Felder `blocked`, `skipped`, `modified`, `error` und `meta`
enthalten, was für die Ablaufverfolgung nützlich ist.

### Schutzvorrichtungen pro Anfrage deaktivieren

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` erstellt eine
deduplizierte Liste der Namen von Schutzvorrichtungen, die für die aktuelle
Anfrage übersprungen werden sollen. Quellen (alle optional, alle zusammengeführt):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` im Anfragekörper (auf oberster Ebene)
- `metadata.disabledGuardrails` im Anfragekörper
- Header `x-omniroute-disabled-guardrails` (oder veraltet
  `x-disabled-guardrails`)

Werte können Zeichenfolgen-Arrays oder eine kommagetrennte Zeichenfolge sein; Namen werden
in kleingeschriebene Kebab-Case-Schreibweise normalisiert (`pii_masker` → `pii-masker`). Das Ergebnis
wird über `context.disabledGuardrails` an die Registrierung übergeben, die
übereinstimmende Schutzvorrichtungen überspringt (`skipped: true` in `results`).

## Ausführungsreihenfolge

Für jede Anfrage, die `src/sse/handlers/chat.ts` und
`open-sse/handlers/chatCore.ts` durchläuft:

1. `resolveDisabledGuardrails(...)` erstellt anhand von API-Schlüssel, Body
   und Headern die Liste der zu überspringenden Guardrails.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` führt Guardrails in
   aufsteigender Prioritätsreihenfolge aus:
   - Deaktivierte Guardrails werden als `skipped` erfasst.
   - `preCall` jedes Guardrails kann die Nutzdaten über `modifiedPayload`
     umschreiben.
   - Das erste `block: true` bricht die Kette vorzeitig ab, und der Handler
     gibt eine Guardrail-Ablehnungsantwort zurück.
3. Die (möglicherweise umgeschriebenen) Nutzdaten werden an das Combo-Routing
   und die Upstream-Weiterleitung übergeben.
4. Nachdem die Antwort zusammengestellt wurde, führt
   `guardrailRegistry.runPostCallHooks(...)` dieselbe Kette für die Antwort
   aus. `block: true` verwirft hier die Upstream-Antwort.

Guardrails, die eine Ausnahme auslösen, werden mit `error: <message>` erfasst
und über `logger.warn` protokolliert, die Kette wird jedoch fortgesetzt —
dies entspricht dem Fail-Open-Prinzip.

## Konfiguration

Von den integrierten Guardrails gelesene Umgebungsvariablen:

| Variable                              | Verwendet von               | Auswirkung                                                                                                            |
| ------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Auf `false` setzen, um die Erkennung vollständig zu deaktivieren.                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Injektionsrichtlinie: `warn`, `block` oder `log`. Der Legacy-Wert `redact` schreibt Injektionstext nicht um.          |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Modus für den Injektions-Guard; zugleich ein DB-Feature-Flag, das die Umgebungsvariablen **überschreibt** (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Mindestschweregrad, den `MODE=block` ablehnt: `high` (Standard), `medium` oder `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Legacy-Alias für `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Bei `true` werden personenbezogene Daten in Anfragen redigiert (unabhängig vom Injektionsmodus).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nachgelagert) | Steuert das Maskierungsverhalten auf der Antwortseite.                                                                |

Die Modality-Bridge-Guardrails lesen die Laufzeitkonfiguration aus dem
DB-gestützten Einstellungsspeicher (`getSettings()`), nicht aus
Umgebungsvariablen. Die primären Schlüssel für Vision sind
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` und
`modalityBridgeCacheMaxEntries`. Die Legacy-Schlüssel
`visionBridge*` werden nur als dokumentierter Lese-Fallback für einen Zyklus
akzeptiert; Schreibvorgänge über das Dashboard verwenden die primären
Schlüssel. Standardwerte und der Fallback-Resolver befinden sich in
`src/shared/constants/modalityBridgeDefaults.ts`, während Legacy-Konstanten in
`src/shared/constants/visionBridgeDefaults.ts` beibehalten werden.

Audio verwendet `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` und `modalityBridgeAudioMaxClips` sowie die
gemeinsam genutzten `modalityBridgeCache*`-Einstellungen. Für Audio gibt es
keinen Legacy-Schlüssel-Fallback, da diese Schlüssel mit dem
Modality-Bridge-Schema eingeführt wurden.

Video verwendet `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` und
`modalityBridgeVideoTimeout` sowie die gemeinsam genutzten
`modalityBridgeCache*`-Einstellungen. Es ist standardmäßig deaktiviert, da
FFmpeg/ffprobe optionale betriebliche Abhängigkeiten sind und die
Frame-Beschriftung zusätzliche Latenz und Modellkosten verursacht.

## Benutzerdefinierte Guardrails

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

Schritte:

1. Erstellen Sie `src/lib/guardrails/myGuardrail.ts` als Erweiterung von `BaseGuardrail`.
2. Implementieren Sie `preCall` und/oder `postCall`.
3. Registrieren Sie die Guardrail entweder beim Import (über `registerDefaultGuardrails`) oder
   rufen Sie zur Laufzeit `guardrailRegistry.register(...)` auf — die Registry ersetzt
   jede vorhandene Guardrail mit demselben normalisierten Namen.
4. Fügen Sie Tests unter `tests/unit/` hinzu (vorhandene Beispiele:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tests

Verwenden Sie zwischen den Tests `resetGuardrailsForTests()`, um mit einem bekannten Zustand zu beginnen.
Übergeben Sie `{ registerDefaults: false }`, um mit einer leeren Registry zu beginnen und
nur die zu testenden Guardrails zu registrieren. Vision Bridge unterstützt Dependency
Injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge stellt entsprechende
Schnittstellen für Einstellungen, Fähigkeiten, STT-Modellauswahl, Anmeldedatenprüfungen
und Transkription bereit. Tests können daher beide Abläufe ohne Datenbank- oder
Netzwerkzugriff ausführen.

## Siehe auch

- `src/lib/guardrails/` — Implementierung
- `src/shared/utils/inputSanitizer.ts` — gemeinsamer Detektor, auf dem
  Prompt-Injection-Erkennung und PII-Maskierung basieren
- `src/shared/constants/visionBridgeDefaults.ts` — Standardwerte für Vision Bridge und
  Modellliste für erzwungenes Bridging
- `src/shared/constants/modalityBridgeDefaults.ts` — gemeinsame Laufzeitstandardwerte für Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — orthogonale Schicht (Circuit Breaker, Cooldowns)
- `docs/reference/ENVIRONMENT.md` — vollständige Referenz der Umgebungsvariablen

## Routenabdeckung des Injection-Guards und Red-Teaming (Phase 8 · Block D)

Der Injection-Guard (`createInjectionGuard` / `withInjectionGuard`) deckt alle Routen ab,
die Benutzer-Prompts akzeptieren. Er berücksichtigt `INJECTION_GUARD_MODE` (Standardwert `warn` = nur protokollieren;
`block` = gibt HTTP 400 `SECURITY_001` zurück).

| Typ              | Routen                                                                                                                                               | Standardmodus |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (vorhanden) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Daten            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Die Textextraktion (`extractMessageContents`) deckt `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ab.

**Red-Teaming (nächtlich, `nightly-llm-security.yml`):** promptfoo überprüft, dass jede Route
den OWASP-LLM-Korpus bei `INJECTION_GUARD_MODE=block` blockiert; garak führt Prüfungen aus (wird ohne Secret übersprungen).
`moderations` ist aus Konsistenzgründen enthalten — Betreiber können die Route im Blockierungsmodus über
`resolveDisabledGuardrails` ausnehmen.

Der nächtliche Workflow (`.github/workflows/nightly-llm-security.yml`, Cron + manueller
Start) umfasst zwei Jobs:

- **`promptfoo-guard` (blockierend)** — führt `promptfoo eval -c promptfooconfig.yaml`
  mit `INJECTION_GUARD_MODE=block` aus. Jeder adversariale Fall (z. B. „ignore all
  previous instructions…“, Jailbreaks im DAN-Stil) stellt sicher, dass die Antwort
  `error.code === "SECURITY_001"` enthält, d. h., dass die Guardrail die Anfrage tatsächlich abgelehnt hat.
- **`garak` (informativ)** — führt garak mit `--probes promptinject,dan,leakreplay`
  gegen eine lokale OmniRoute-Instanz (`http://localhost:20128/v1`) aus. Die Ausführung hängt von einem
  Provider-Secret (`PROMPTFOO_PROVIDER_KEY`) ab; ohne dieses wird sie ordnungsgemäß übersprungen und ist mit
  `|| true` versehen, sodass Ergebnisse gemeldet werden, ohne dass CI fehlschlägt.

Die Abdeckung des Guard-Helfers (`createInjectionGuard` / `withInjectionGuard`)
erstreckt sich über jede Prompt-verarbeitende `/v1`-Route; der Prompt-Text wird durch
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts` aus
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` extrahiert.
