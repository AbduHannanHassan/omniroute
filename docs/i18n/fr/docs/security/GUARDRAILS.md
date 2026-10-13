# Guardrails (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Source de vérité :** `src/lib/guardrails/`
> **Dernière mise à jour :** 2026-08-29 — v3.8.51 (la provenance des transcriptions de Video Bridge est déclarée par l'appelant,
> mais n'est pas encore vérifiée par le serveur — clarification conformément à #11661)

Les garde-fous appliquent les règles de sécurité, les politiques et les transformations de contenu à la frontière
entre OmniRoute et les fournisseurs en amont. Chaque garde-fou peut inspecter (et
éventuellement rejeter, transformer ou annoter) les charges utiles des requêtes (`preCall`) et
les réponses en amont (`postCall`).

Le système est **à tolérance ouverte** : si un garde-fou lève une exception pendant son exécution, le registre
consigne l'erreur et passe au garde-fou suivant au lieu de faire échouer la
requête. Le blocage est une décision explicite (`block: true`), jamais un accident.

## Garde-fous intégrés

Le registre charge automatiquement six garde-fous par ordre de priorité lors de l'importation
(voir `registry.ts` → `registerDefaultGuardrails()`):

| Priorité | Nom                 | Étape(s)       | Fichier               |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Les numéros de priorité inférieurs s'exécutent **en premier**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Intercepte les requêtes contenant des images destinées aux **modèles non-visuels** et soit
redirige l'ensemble de la requête vers un modèle capable de vision, soit remplace les parties image par des descriptions textuelles produites par un modèle de vision configurable avant l'appel en amont. Cela permet aux fournisseurs uniquement textuels de gérer de manière transparente
des charges multimodales.

Flux :

1. Passer si le modèle cible prend déjà en charge la vision (à moins qu'il n'apparaisse dans la
   liste de redirection forcée `isVisionBridgeForcedModel`).
2. Extraire les parties image via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), qui délègue à la **détection de médias unifiée**
   `detectMediaParts()` dans `open-sse/utils/mediaParts.ts` — la
   seule source de vérité partagée avec le filtre de compatibilité combo.
   L'extraction est autorisée uniquement pour les parties de premier niveau des formes
   que `replaceImageParts` peut réinsérer (le contrat extract↔replace) : OpenAI
   `image_url`, base64 d'Anthropic `source.type:"base64"`, URL d'Anthropic
   `source.type:"url"`, et API Responses `input_image`. Les frappes imbriquées et
   les formes uniquement indicatives sont du matériel de filtre combo et ne sont jamais extraites.
   Passer si aucune n'est trouvée.
3. Résoudre la configuration d'exécution via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) : les nouvelles clés de paramètres
   `modalityBridge*` l'emportent ; les clés héritées `visionBridge*` restent un **retour en arrière d'un cycle**
   (fenêtre de retour). Passer avant tout parcours de médias lorsque le
   pont est désactivé.
4. Le sélecteur de mode (`modalityBridgeVisionMode`, voir tableau ci-dessous) décide
   de rediriger ou de décrire. La redirection renvoie `modifiedPayload` avec uniquement `model`
   échangé, plus des métadonnées `{ rerouted, fromModel, toModel, imagesKept }`.
5. Chemin de description : limiter les images à `maxImages`, composer le prompt conscient de la tâche,
   consulter le cache de description, appeler le modèle de vision **en parallèle**
   (`Promise.allSettled`), et injecter les parties de texte `[Image N]: <description>` à leur place. Une description échouée renvoie `null` et la partie image originale est
   **préservée** (#4012) — sauf sur le chemin de description combo lorsque chaque
   description a échoué, où un upstream non-visuel confirmé reçoit un
   `(unavailable — no vision-capable provider connected)` stub à la place (#8430).
6. Retourner `modifiedPayload` + métadonnées (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Sélecteur de mode (`modalityBridgeVisionMode`)

| Mode       | Par défaut | Comportement                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | Heuristique héritée, inchangée (#6640/#7204) : les modèles non-combo/`auto/` redirigent vers le meilleur modèle de vision à moins que le modèle d'origine n'ait déjà des identifiants utilisables (alors décrire) ; les cibles combo décrivent toujours.                                                                                       |
| `describe` |            | Toujours décrire — le bloc de redirection est complètement ignoré ; le modèle choisi par l'utilisateur répond toujours.                                                                                                                                                                                                                        |
| `reroute`  |            | Forcer la redirection : la garde du modèle avec identifiants conservés est contournée. La garde des identifiants du **cible** de redirection s'applique toujours — lorsque aucun modèle de vision utilisable n'existe, la requête passe à la description afin que les images brutes n'atteignent jamais un backend uniquement textuel (#8430). |

Les modes forcés court-circuitent **avant** que l'heuristique automatique ne s'exécute ; le comportement `auto`
est identique au garde-fou pré-PR-1.

#### Prompt de description conscient de la tâche (`modalityBridgeVisionTaskAware`)

Par défaut **vrai**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) ajoute
le texte du **dernier message utilisateur** (tronqué à 500 caractères) au prompt de base
de description, orientant la description vers ce que l'utilisateur a réellement demandé
(patron codex-vision-proxy) et demandant au modèle de vision de transcrire le texte visible. Avec le drapeau désactivé — ou sans texte utilisateur — le prompt de base est utilisé sans changement.

Le demande de boucle auto-décrite compatible avec OpenAI (`callVisionModelSingle()` dans `visionBridgeHelpers.ts`) demande toujours `image_url.detail: "high"` — sans condition, pour chaque appelant/fournisseur, sans être conditionné par un signal client. Un échantillonnage de faible détail dégrade la précision de l'OCR pour exactement la tâche de transcription de texte que cette invite demande, donc l'appel de description lui-même demande toujours un haut détail, peu importe le niveau de détail utilisé dans la demande entrante originale. Cela n'affecte que le corps de la demande interne de description ; cela ne change pas la façon dont OmniRoute transmet le propre `image_url.detail` de l'appelant dans la demande principale — ce défaut est appliqué séparément, et uniquement pour les clients OpenCode détectés, dans `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). La branche de format de fil d'Anthropic de la boucle auto-décrite n'a pas de champ `detail` et n'est pas affectée par aucun défaut.

#### Limite de sortie de description (`modalityBridgeVisionMaxChars`)

| Clé                            | Par défaut | Plage            |
| ------------------------------ | ---------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` ou 100–50000 |

`0` (par défaut) signifie **pas de limite** — la description renvoyée par `callVisionModel()` est transmise sans modification, préservant le comportement existant. Toute valeur dans la plage de 100 à 50000 tronque la description avec un suffixe `…` avant qu'elle ne soit réinsérée sous la forme `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` dans `src/lib/guardrails/visionBridge.ts`). Augmentez cela pour les tâches OCR riches en détails où le modèle en aval a besoin de la transcription complète ; réduisez-le pour limiter l'utilisation des tokens sur les modèles de vision bavards. Le champ du tableau de bord se trouve dans le panneau Avancé de l'onglet Vision (`modality-bridge-max-chars` dans `ModalityBridgeVisionTab.tsx`) et limite toute valeur entre 1 et 99 à un minimum de 100 tout en laissant un `0` explicite intact — `0` est une valeur Zod valide en soi (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), pas seulement le défaut "non défini".

#### Cache de description (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL en mémoire pour les sorties de description, partagé à l'échelle du processus. Clé = `sha256(imageRef + composedPrompt + configuredBridgeModel)` avec un encadrement par préfixe de longueur (pas de collisions de frontières de champ). Le composant modèle est le modèle de pont **configuré**, pas le modèle qui a réellement répondu — `callVisionModel` peut revenir en arrière en interne, et la clé par tentative fragmenterait le cache. Les descriptions échouées ne sont jamais mises en cache. Paramètres :

| Clé                             | Par défaut | Plage   |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Normalisation d'image distante (auto-appel de description/récupération base64)

Lorsque le pont récupère une image **distante** lui-même — l'auto-appel de description d'Anthropic et la conversion base64 au format claude
(`ensureBase64ImagesForClaudeWire`), tous deux via `fetchRemoteImageAsDataUri()` dans `visionBridgeHelpers.ts` — l'URI de données résultant est passé par `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) avant d'être intégré dans la demande du modèle de vision. Les images surdimensionnées sont redimensionnées à un **bord long de 2048px** (correspondant à la limite de redimensionnement qu'OpenAI/Anthropic applique déjà côté serveur), ce qui réduit les octets de téléchargement/la latence sans changer ce que le modèle de vision voit. Le redimensionnement utilise `sharp`, chargé via import dynamique : sur une plateforme où son binaire natif échoue à se charger, `normalizeDataUri()` **ne lance jamais d'exception** — il revient à un passage des octets originaux, donc le chemin de description/conversion base64 continue toujours de fonctionner. Les octets non-image (une récupération qui n'a pas renvoyé une image décodable) sont également passés sans modification. Cette normalisation est limitée aux images que le pont récupère pour son propre auto-appel — elle n'est jamais appliquée à la charge utile brute de l'appelant, conformément au principe de mutation uniquement sur opt-in (Règle stricte #20).

#### Schéma de paramètres + migration

Les nouvelles clés `modalityBridge*` sont validées par Zod dans `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`) : `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, le trio `modalityBridgeCache*`, et le groupe `modalityBridgeAudio*` utilisé par le Pont Audio. La migration `141_modality_bridge_settings.sql` copie les valeurs héritées existantes `visionBridge*` vers les nouvelles clés correspondantes (idempotent, n'écrase jamais une valeur `modalityBridge*` définie par un opérateur) ; les clés héritées restent acceptées comme un retour de lecture pour un cycle de version.

#### En-tête de transparence + statistiques

Les réponses transformées par la description portent `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (construit par `buildModalityBridgeHeader()` dans `modalityBridge/bridgeStats.ts`, estampillé par `withModalityBridgeHeader()` dans `src/sse/handlers/chatHelpers.ts`). Les demandes redirigées n'obtiennent **aucune** en-tête — la charge utile n'a pas été touchée et le changement de modèle est déjà visible dans le champ `model` du corps de la réponse.

`GET /api/modality-bridge/stats` (authentification de gestion, même niveau que `GET /api/settings`) renvoie les compteurs en mémoire par modalité `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` pour `vision`, `audio`, et `video`. `averageLatencyMs` utilise `latencySamples`, pas toutes les tentatives, comme son dénominateur ; une opération sans chronométrage ne fabrique pas un échantillon de zéro millisecondes. `bridged` reste l'alias rétrocompatible pour les conversions réussies ; les tentatives échouées ne l'incrémentent pas. Les compteurs se réinitialisent au redémarrage du processus par conception (télémetrie, pas comptabilité).

#### Configuration du tableau de bord

La page de tableau de bord dédiée est  
`/dashboard/settings/modality-bridge`. Ses onglets `Vision`, `Audio` et `Video` accessibles par URL préservent les paramètres de requête tout en changeant la valeur `tab`. L'onglet Vision expose l'activation, le mode, la sélection de modèle (y compris le défaut automatique), les invites conscientes de la tâche, les limites avancées de délai/image/longueur de description/cache, les compteurs d'exécution et une demande d'échantillon protégée. L'onglet Audio est également actif : il expose l'activation, un sélecteur de modèle uniquement STT avec Auto, des limites de délai/max-clip, des compteurs audio et un test d'échantillon `input_audio`. L'onglet Vidéo est fonctionnel : il rapporte l'état d'exécution de FFmpeg/ffprobe — l'un des quatre états UI explicites (`unknown` pendant que le probe est en vol ou n'a pas pu se terminer, `restricted` sur un hôte de tableau de bord non-loopback où le probe est sauté côté client, `unavailable` une fois sondé et confirmé manquant, ou `available` avec les versions FFmpeg/ffprobe) — persiste les limites d'activation/modèle/image/vidéo/délai, filtre le sélecteur de modèle pour les modèles capables de vision, et expose des compteurs vidéo.

L'ancienne carte Vision Bridge sous les paramètres AI est un lien de compatibilité vers la nouvelle page ; elle ne possède plus une seconde copie du formulaire. Les Fournisseurs de Médias lient également les flux Image-à-Texte et Parole-à-Texte aux onglets Modality Bridge correspondants sans supprimer le terrain de jeu existant Parole-à-Texte.

**Contournement de l'admission en boucle auto-référentielle :** lorsque l'appel de description passe par la propre boucle auto-référentielle `/v1` d'OmniRoute (modèle de fournisseur non standard), la sous-requête envoie  
`x-omniroute-admission-bypass: internal` et est authentifiée avec les informations d'identification de boucle auto-référentielle résolues — le sentinelle local `sk_omniroute` en mode local, ou la clé d'environnement configurée par l'opérateur `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350) afin que les déploiements `REQUIRE_API_KEY=true` puissent toujours exécuter l'appel de description. Le contournement n'est honoré que pour ces informations d'identification exactes, donc les clients externes ne peuvent pas utiliser l'en-tête pour sauter l'admission.

Les valeurs par défaut héritées se trouvent dans `src/shared/constants/visionBridgeDefaults.ts` ; les nouvelles valeurs par défaut conscientes du mode/tâche/cache et le résolveur de paramètres se trouvent dans `src/shared/constants/modalityBridgeDefaults.ts`. Le garde-fou expose une option de constructeur `deps` afin que les tests puissent injecter de fausses implémentations de `getSettings` et `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepte les requêtes de chat contenant de l'audio avant qu'elles n'atteignent une cible qui n'est pas connue pour accepter l'entrée audio. Elle ne redirige jamais la requête de chat : les parties audio sont transcrites via l'endpoint multipart compatible OpenAI existant et le modèle de chat choisi continue avec les transcriptions textuelles.

Flux :

1. Résoudre `supportsAudio` via `getResolvedModelCapabilities()`. Les métadonnées de registre de fournisseur explicites l'emportent, puis les métadonnées de modèle statiques, puis `modalities_input` synchronisé. Une liste d'entrée déclarée sans `audio` est `false` ; aucune preuve de capacité reste `null`. Tant `false` que `null` activent le pont conservateur, tandis que `true` le contourne.
2. Résoudre les paramètres `modalityBridgeAudio*` et extraire les parties audio de niveau supérieur pouvant être assemblées de chaque message via le détecteur partagé `detectMediaParts()`. Les formes de fil prises en charge sont `input_audio`, `audio_url` et `source.media_type: "audio/*"` d'OpenAI. L'audio imbriqué est détecté pour le routage mais n'est pas supprimé par le chemin d'assemblage. Le travail est limité par `modalityBridgeAudioMaxClips` ; les parties ultérieures restent intactes.
3. Honorer un `provider/model` configuré, ou laisser `selectAudioBridgeModel()` parcourir `AUDIO_TRANSCRIPTION_PROVIDERS` dans l'ordre du catalogue stable et sélectionner le premier modèle avec des informations d'identification de fournisseur actif utilisables.
4. `callAudioTranscription()` convertit l'audio base64/data-URI en un `file` multipart, ou télécharge un `audio_url` distant via le garde public uniquement sortant avec un ancrage DNS et une limite de 25 Mo. Il POSTe ensuite le fichier et le modèle sélectionné à la boucle auto-référentielle locale `/v1/audio/transcriptions`, authentifiée avec `resolveSelfLoopBearer()`. La route de transcription existante effectue une recherche normale d'informations d'identification, gère le temps d'attente/de limitation de taux, et dispatch le fournisseur.
5. Les appels réussis remplacent leurs parties par `[Audio N]: <transcript>`. Les appels s'exécutent avec `Promise.allSettled` : un échec individuel préserve cette partie audio originale (#4012 contrat). Si chaque appel échoue et que la cible prouve `supportsAudio === false`, les parties deviennent  
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 contrat). Pour une cible inconnue (`null`), un résultat d'échec total reste intact. Une cible prouvée uniquement textuelle sans informations d'identification STT utilisables reçoit le même stub explicite sans émettre un appel réseau.

Les transcriptions réussies utilisent le cache LRU/TTL du Modality Bridge à l'échelle du processus. La clé combine la référence audio, l'étiquette d'opération stable `audio-transcription`, et le modèle STT sélectionné ; les échecs ne sont jamais mis en cache. Les tentatives audio mettent à jour les compteurs partagés `bridged`, `cacheHits`, `failures`, et `lastUsedAt`. Les réponses transformées portent  
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ; les requêtes intactes ne reçoivent pas de segment Audio Bridge.

Les paramètres d'exécution sont soutenus par la base de données et validés par Zod :

| Clé                           | Par défaut | Plage          |
| ----------------------------- | ---------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —              |
| `modalityBridgeAudioModel`    | `""`       | Auto ou ID STT |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10           |

Le cache partagé reste contrôlé par `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, et `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts les parties vidéo de premier niveau dans les `messages` et les réponses des complétions de chat
API `input` avant qu'un cible sans support vidéo natif connu ne soit appelée.
Les formes prises en charge sont `input_video`, `video_url`, `video_source`, les URL HTTPS,
et `data:video/*;base64,...` URI de données. Les noms de fichiers simples dans le texte ne sont pas considérés
comme des vidéos.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) gère le parcours des requêtes, la
vérification des capacités/politiques, l'agrégation par requête, et la charge utile de la réponse.
Le travail par vidéo — acquisition, le cache de résultats complets, la description d'une séquence de frames
(qui fusionne toute transcription audio déclarée par l'appelant), et les métriques/abort/nettoyage par tentative — est caché derrière `processVideoPart` dans
`videoBridgePipeline.ts`, appelé une fois par partie vidéo à l'intérieur de la boucle de `preCall`.
Ce module définit également les limites de port explicites `VideoMediaBrokerPort`
(acquisition d'octets et extraction de frames échantillonnées), `VideoAudioTranscriptionPort`
(fusion d'une transcription audio déclarée par l'appelant avec les légendes échantillonnées), et
`VideoDrilldownPort` (la forme de stockage brut héritée). La STT de production et la rétention de frames
sont composées autour du port de description via `createVideoSttAdapter` et
`createVideoDrilldownAdapter`; ce dernier utilise le cycle de vie opaque partagé.

Le chemin de requête public `/v1` n'importe jamais ni n'invoque un sous-processus. Les
vidéos distantes sont téléchargées sous une limite de 50 MiB ; les vidéos base64 en ligne ont une
limite décodée conservatrice de 36 MiB par vidéo afin que le modèle/messages/enveloppe de cadrage
puissent rester à l'intérieur de la limite d'admission de requête JSON publique de 50 MiB. La longueur en ligne et les estimations de taille décodée sont vérifiées avant allocation. HTTPS est
exigé sur l'URL distante initiale et chaque redirection, utilisant la garde publique uniquement sortante existante avec un ancrage DNS. Les octets traversent ensuite la frontière exacte du courtier interne
`POST /api/modality-bridge/video/extract`. Cette route est à la fois
`LOCAL_ONLY` et `SPAWN_CAPABLE`, accepte uniquement une requête authentifiée par processus,
trusted-loopback, et n'accepte jamais une URL, un chemin de système de fichiers, un exécutable,
ou une liste d'arguments. Le pipeline de taille du corps de l'API et le lecteur de corps incrémental du gestionnaire
imposent indépendamment une limite d'entrée de courtier de 50 MiB. Sa file d'attente limitée exécute
une extraction à la fois, permet quatre travaux en attente, et limite l'entrée en attente à
100 MiB.

À l'intérieur du courtier, `ffprobe` lit un fichier local privé ; la liste blanche de formats fixes
exclut les formats de playlist et de manifeste. Pour les conteneurs de la famille MOV autorisés,
les références de données MOV externes restent désactivées par défaut, et la commande fixe ne s'y
inscrit pas. Tant `ffprobe` que `ffmpeg` utilisent la liste blanche de protocole `file`-uniquement, un
fil, des tableaux d'arguments fixes, pas de shell,
et des exécutables résolus à partir de `PATH`. Les flux de couverture d'image attachés ne sont pas
des candidats jouables. Tous les flux jouables doivent satisfaire aux limites, et un
flux par défaut explicite est préféré avant le repli déterministe sur l'index le plus bas.
Les vidéos sont limitées à 600 secondes, 8 192 pixels par dimension, et
33 554 432 pixels sources. FFmpeg échantillonne 1 à 16 frames JPEG au milieu, réduit la
longueur maximale à 1 024 pixels sans augmenter les entrées plus petites, et
ne reçoit jamais une URL. L'échantillonnage est `uniforme` par défaut. Les politiques optionnelles
`scene_aware` et expérimentales `segment_aware` effectuent un passage FFmpeg fixe supplémentaire sur le flux local déjà validé, sélectionnent des timestamps de scène `showinfo` limités, et tombent de manière déterministe sur les mêmes
milieux uniformes en cas d'échec du détecteur, de délai d'attente, de sortie malformée, ou d'un ensemble de candidats vide. Le mode conscient de segment alloue des échantillons de milieu proportionnellement aux intervalles de scène validés ; les preuves conscientes de segment et le comportement de repli sont
détaillés ci-dessous. La limite stricte de 16 frames est
appliquée après sélection dans chaque politique. Lorsqu'une requête consciente de scène a seulement un
budget d'une frame, elle utilise le milieu uniforme de la vidéo complète active ou de la fenêtre de focus
et rapporte `policyEffective: uniform`: une seule frame de scène sélectionnée
ne peut pas préserver les deux extrémités temporelles. Un appelant peut optionnellement fournir une
fenêtre de focus finie (`start`/`end` secondes) ; les limites sont clampées à la durée des médias, les fenêtres inversées ou non finies sont rejetées, et toutes les politiques d'échantillonnage ne sont effectuées qu'à l'intérieur de l'intervalle normalisé. La fenêtre résultante est incluse dans les métadonnées d'échantillonnage et dans le préfixe de description non fiable afin que les modèles en aval puissent distinguer un extrait focalisé de la chronologie complète.

Le focus de légende sémantique est un paramètre séparé et explicite. Le mode d'analyse par défaut `full`
préserve l'invite de frame existante et ne transmet jamais le texte de la requête au modèle de légende. En mode `focused`, le pont ne lit que le dernier
`text`/`input_text` non vide rédigé par l'utilisateur du même conteneur de chat ou de réponses, le normalise en NFC, réduit les caractères de contrôle et les espaces, et le limite à 500 points de code Unicode. Un résultat vide revient à l'exacte invite `full`. Un indice utilisable est sérialisé en JSON dans un bloc de contexte utilisateur non fiable dédié et peut uniquement prioriser les détails observables ; il ne peut pas remplacer l'avertissement séparé contre le suivi des instructions visibles
ou audibles dans les médias. Le focus textuel n'infère jamais `start`/`end` ou ne change
le sampler temporel.

#### FU-07 preuves de segment structurel

`segment_aware` utilise un passage de pré-analyse limité sur le flux vidéo local déjà validé. La chaîne de filtres fixe réduit d'abord à au plus 320 pixels
de large, détecte les changements de scène et les intervalles figés, puis échantillonne à 1 frame par
seconde pour le flou, la luma moyenne, et les informations spatiales/temporelles. Le passage est
limité à 600 échantillons structurels, un fil FFmpeg/filter, les mêmes
listes blanches de protocoles et de conteneurs `file`-uniquement, une limite de sortie de processus de 1 MiB,
et au plus 30 secondes à l'intérieur de l'abandon/délai partagé du courtier. Il n'accepte jamais
une commande, un filtre, un chemin, ou une URL de la requête.

Les valeurs structurelles sont des preuves d'échantillonnage déterministes, et non une compréhension sémantique de la vidéo. Elles n'infèrent pas les sujets, les actions, les légendes, la parole ou l'intention de l'utilisateur. Les limites de scène et de gel forment des segments ; la couverture de gel, le flou, l'exposition, le détail spatial et le changement temporel n'influencent que la manière dont le budget existant de 1 à 16 images est alloué. Un segment entièrement gelé est limité à une image, tandis que les segments non gelés se disputent le budget restant. Lorsque les limites dépassent le nombre d'images, une couverture uniforme de la chronologie est conservée, de sorte que des coupes rapides au début ne peuvent pas cacher un long segment en traîne. Les limites de scène dans la résolution d'analyse d'une seconde d'une limite de gel sont fusionnées.

Des filtres manquants, des preuves mal formées/vides, une erreur de détecteur ou le délai d'analyse préliminaire limité échouent en s'ouvrant à la politique exacte du point médian uniforme. Un appelant qui abandonne ou un délai de courtier ne réussit pas à s'ouvrir : il termine le sous-processus en cours, empêche l'extraction ultérieure d'images, et l'arbre temporaire privé est supprimé dans `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` génère des fixtures FFmpeg réelles déterministes pour des économies de légendes après dé-duplication, l'allocation de budget de mouvement dense, les preuves de flou/exposition/SI-TI, les coupes rapides avec une longue traîne, et les faux positifs de fondu progressif. Il enregistre le temps d'analyse préliminaire et, lorsque `/usr/bin/time` est disponible, le CPU enfant et le RSS maximal. Ses vérifications de qualité sont uniquement des oracles structurels. La qualité réelle du modèle de légende reste `HOLD` car ce harnais n'a pas de point de terminaison autorisé ou de juge gelé. Les économies monétaires restent également `HOLD` à moins que `--caption-cost-per-call-usd` ne fournisse une estimation positive explicite par appel ; le script ne fabrique jamais l'un ou l'autre résultat.

Chaque image est limitée à 4 MiB, toutes les images brutes ensemble à 23 MiB, et la réponse du courtier sérialisée à 32 MiB. Un répertoire temporaire privé est supprimé dans `finally`. OmniRoute ne regroupe pas FFmpeg et n'accepte pas de chemin exécutable personnalisé. Avant le sous-titrage, le pont applique un passage de dé-duplication visuelle conservateur : chaque JPEG est réduit à un tampon en niveaux de gris de 16×16 et est comparé uniquement avec la dernière image conservée. Pour un budget de légende demandé supérieur à une image, l'extraction fournit un pool de candidats limité à jusqu'à deux fois ce budget et jamais plus de 16 images. Le plafond demandé est appliqué uniquement après dé-duplication, avec les premiers et derniers candidats sélectionnés préservés lors de l'amincissement final lorsque le budget est d'au moins deux. La politique versionnée `grayscale-16x16-mean-cells-v2` utilise le plus grand entre la moyenne du delta de luminance et le ratio des cellules de vignettes dont le delta normalisé est d'au moins 0.05. Le seuil de duplication est la constante 0.04, choisie pour sa prévisibilité plutôt que d'être exposée comme un paramètre d'exécution. Ce signal secondaire à contraste élevé préserve les petits mouvements et les changements de texte visible que seule une comparaison de moyenne peut cacher. Les erreurs de comparateur ou de décodeur échouent en s'ouvrant et conservent la couverture. Les métadonnées de sortie séparent les candidats extraits, les images utilisées avec succès, et les duplicatas visuels supprimés.

Une partie de vidéo explicitement marquée peut demander une feuille de contact horodatée. Le pont construit au maximum une grille JPEG de 4 colonnes et 16 images. Chaque cellule de 512 pixels brûle son horodatage source dans une bande inférieure à contraste élevé, tandis que les mêmes horodatages restent dans les métadonnées textuelles pour l'association et l'audit en aval. Le JPEG complet reste limité à 32 MiB. Si `sharp` ne peut pas décoder ou composer la grille, le pont revient aux images JPEG individuelles ; un abandon du client se propage toujours à travers l'opération de la feuille.

Les preuves de promotion sont délibérément séparées du micro-benchmark de composition synthétique. `scripts/perf/video-bridge-contact-sheet-eval.ts` définit un harnais A/B versionné par schéma pour de véritables modèles de vision compatibles avec OpenAI. Il mesure les tokens rapportés par le fournisseur, la latence mur à mur de bout en bout (y compris la composition de la feuille), le nombre d'appels de modèle, et la rétention des faits définie par le manifeste. Les réponses brutes du modèle ne sont pas écrites dans le rapport ; seuls les résumés SHA-256 et les ID de faits correspondants sont conservés. Le harnais ne fait aucun appel réseau ou modèle payant à moins que `--execute-real` ne soit passé et que `--model`, `OMNIROUTE_BASE_URL`, et `OMNIROUTE_API_KEY` soient configurés. Sans cette exécution réelle explicite, son verdict lisible par machine reste `HOLD` ; les mesures de charge utile/sous-appels synthétiques seules ne sont pas des preuves de promotion.

Le `scripts/perf/video-bridge-promotion-eval.ts` séparé consomme les observations FU-07 ou FU-09. L'admission à la promotion nécessite tous les huit types de scénarios synthétiques plus un clip réel assaini, au moins trois répétitions mesurées par rôle et cas, toutes les dix métriques déclarées, les résumés de médias/prompt/faits attendus/réglages gelés, des ID d'observation uniques et un ordre A/B semé vérifié. Le reçu d'exécution lie le résumé du corpus, le SHA exact du candidat et la révision du modèle. Les mesures manquantes ou invalides restent `HOLD`, y compris le CPU au-dessus de 30 s, le RSS maximal au-dessus de 512 MiB ou l'analyse préliminaire au-dessus de 30 s. Ce sont des plafonds d'admission de preuves, pas une nouvelle garantie d'application du RSS à l'exécution.

FU-07 nécessite au moins 98 % de rétention de qualité et une latence p95 ne dépassant pas 1,2 fois la référence, plus soit une amélioration de rappel moyen équilibré absolu de 0,05 à des appels de légende moyens équivalents, soit au moins 10 % de moins d'appels de légende moyens après dé-duplication. FU-09 nécessite au moins 0,85 de qualité, 95 % de rétention, une réduction de latence p95 de 20 % et une réduction de 10 % des tokens. La perte de faits critiques, la conformité à l'injection ou l'utilisation manquante empêchent la promotion. Une exécution ne peut promouvoir quoi que ce soit : `--previous-report` confirme deux exécutions distinctes, non chevauchantes, consécutivement éligibles de la même politique/révision de modèle/candidat/corpus. Une expérience d'échantillonnage ne peut pas confirmer une expérience de feuille de contact.

Les collecteurs doivent évaluer les réponses en mémoire et enregistrer `responseDigest` ainsi que les métriques et les liaisons d'observation, jamais le texte de la réponse. Le consommateur lit également les observations brutes héritées mais ne copie jamais ce texte dans ses rapports. Exactement un des `responseDigest` ou `rawResponseText` est accepté pour chaque observation. La liste blanche versionnée reste vide avec un `hold` par défaut immuable. Une entrée éligible nécessite sa référence de preuve, sa politique, la révision du modèle, le SHA exact du candidat, le digest du manifeste et deux ID de run distincts ; les contextes conflictuels sont rejetés. Ces métadonnées constituent un contrat d'audit, et non une preuve qu'un fichier référencé contient des mesures authentiques. Examinez les reçus réels avant d'ajouter une entrée. Le point de terminaison des statistiques de gestion et le tableau de bord Vidéo exposent une préparation conservatrice. Un alias de modèle configuré à lui seul n'établit pas sa révision ou le SHA du candidat en cours, donc le tableau de bord actuel rapporte `HOLD` plutôt que de réutiliser l'éligibilité d'un autre contexte d'exécution. La sélection expérimentale explicite reste séparée de la promotion ; aucun défaut n'est automatiquement modifié.

Les appelants peuvent attacher un tableau optionnel `transcript.cues` à une partie vidéo prise en charge lorsqu'ils possèdent déjà un texte aligné. Chaque indice doit porter `text`, un intervalle `start`/`end` fini à l'intérieur de la durée sondée, et une `source` sur liste blanche (`client`, `embedded`, ou `audio-bridge`) ; `confidence` par défaut est `1` et doit rester entre `0` et `1`. Les indices en double exact sont fusionnés. OmniRoute ne commence jamais la transcription à partir de ces métadonnées : les indices validés sont copiés dans le résultat décrit avec la source, la confiance et l'intervalle, et sont rendus comme des observations non fiables aux côtés des légendes de cadre. Le texte invalide, hors limites ou sans provenance est rejeté plutôt que mélangé dans le flux de légende. Les deux canaux de transcription du corps de la requête normalisent la provenance fournie à `client`, y compris les étiquettes auto-affirmées `embedded` ou `audio-bridge`. Seul un adaptateur appartenant au serveur peut attribuer ces étiquettes de confiance via l'argument `trustedSource` uniquement en code ; un champ JSON de requête ne peut pas atteindre cet argument. Le texte de la transcription reste un contenu dérivé des médias non fiable, quelle que soit sa provenance, et ne doit jamais déterminer l'autorisation.

Un appelant avancé peut fournir une piste `audioTranscript` pour la même vidéo ; elle est traitée comme un texte fourni par le client, pas comme une preuve de transcription par le serveur. La couture de fusion exécute des observations visuelles et audio sous une seule échéance et signal d'abandon, les ordonne sur une chronologie commune, fusionne les doublons exacts, et rapporte un résultat partiel lorsque seule une des parties réussit. Un `audioTranscript` invalide se dégrade à ce résultat partiel — la description visuelle est conservée et la branche audio enregistre un code d'échec assaini — au lieu d'échouer toute la vidéo. La disponibilité par branche, le drapeau partiel, et les codes d'échec assainis sont préservés dans le résultat décrit, dans les métadonnées de garde (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), dans les métadonnées de cache de résultat, et dans les compteurs de fusion de pont. Le chemin par défaut du Pont Vidéo n'invoque pas la reconnaissance vocale ou ne télécharge pas une seconde copie de média ; sans cette piste explicite, il reste uniquement vidéo.

**Conservation de la transcription (#12150 P1).** Cela s'applique automatiquement chaque fois que le Pont Vidéo (lui-même opt-in) rend un indice de transcription — il n'y a pas de drapeau de conservation séparé. Lorsqu'une requête rend un indice de transcription (un `transcript` déclaré par l'appelant ou un `audioTranscript` fusionné), le garde-fou le marque `videoBridgeObserved` et produit une ombre expurgée de la description vidéo — un rendu identique dans lequel le corps de texte libre de chaque indice est remplacé par `[redacted-video-transcript]`, construit en substituant le champ d'indice structuré avant que la chaîne ne soit assemblée (jamais en analysant le texte aplati, donc aucun contenu d'indice — adversarial ou ordinaire, y compris les corps contenant `]` tels que `[inaudible]`/`[music]` — ne peut survivre). Le corps de la requête du journal d'appels persisté échange chaque partie de texte dérivée de la vidéo pour cette ombre expurgée, correspondue par égalité de contenu ; l'ancre `fullText` est relue à partir de la charge utile de garde pré-appel terminée, donc la correspondance réussit toujours après que les garde-fous de chaîne ultérieurs (les masques PII et d'identifiants, priorités 10/95) réécrivent le texte de description sur place et après que l'injection de message système/passage/mémoire transforme le tableau de messages. Le corps envoyé en amont au modèle reste inchangé. Une requête observée ne remplit également aucune mémoire durable (les extractions dérivées de la requête et de la réponse sont sautées), donc la réponse du modèle ne peut pas répercuter le texte de la transcription dans la mémoire.

**Champs vidéo bruts (#12430).** Lorsque le pont est activé et que le support vidéo natif est inconnu ou absent, les champs définis `transcript`/`audioTranscript` activent également `videoBridgeObserved`, même après un échec de description ou une limite `maxVideos`. `null` et les chaînes vides comptent ; les champs absents et les métadonnées non vidéo ne le font pas. Les copies conservées expurgent ces champs ou omettent la requête, et les caches/mémoires sont contournés. La charge utile du fournisseur reste inchangée.

Des copies supplémentaires conservées utilisent le même signal de requête observée. L'instantané de requête client brut pré-garde, la requête en mémoire en attente, et le journal de requêtes rejetées précoces remplacent structurellement les champs de transcription dans les parties vidéo ; les invites de chaîne synthétisées par les étapes de pipeline et le passage de contexte sont expurgées au niveau du puits de corps de requête persisté. Le marqueur `video_content_removed` persistant fait échouer la continuation de `previous_response_id` plutôt que de reconstruire le texte qui a été intentionnellement rejeté. Si une requête observée perd son ombre d'expurgation par partie avant la journalisation, ou même si l'une des plusieurs ombres vidéo échoue à correspondre après des mutations ultérieures de la requête, le corps de requête conservé est entièrement omis au lieu de conserver une transcription partiellement expurgée.

Pour une demande observée, une réponse de modèle peut citer n'importe quelle portion de la transcription sans une frontière de signal structuré. Son `responseBody` de journal d'appels persistant est donc remplacé par un marqueur d'omission ; l'artéfact de pipeline détaillé (qui peut inclure des corps en amont/client et des morceaux de flux) n'est pas conservé. Les caches sémantiques, d'idempotence et de relecture de raisonnement contournent les lectures et écritures pour cette demande. La demande du fournisseur et la réponse visible par le client restent inchangées. Les premiers octets de maintien sont drainés du tampon temporaire lorsque l'artéfact détaillé est omis. L'avertissement d'EventStream malformé de Kiro ne rapporte que le nombre d'octets de charge utile, jamais son contenu ou l'erreur brute du parseur JSON.  
Cela ne prétend pas que chaque diagnostic de fournisseur/plugin non lié a été audité ; le balayage plus large des puits conservés est suivi dans #11658.

Le cycle de vie interne de `/api/modality-bridge/video/drilldown` est un substrat de cache distinct, authentifié par boucle de retour/token. Chaque opération nécessite également un ID principal opaque canonique. Avant qu'un appelant de production ne soit activé, il doit dériver cet ID à partir du locataire authentifié et ne doit jamais transmettre une valeur sélectionnée par le client. Les clés de cache lient ce principal aux ID de session canonique et de référence vidéo, ne stockent que leurs clés dérivées SHA-256, et limitent à la fois les lectures et la suppression au même principal. Le cache stocke au maximum 16 images JPEG dérivées par entrée, les expire après dix minutes, et prend en charge des lectures `start`/`end` bornées ou une suppression explicite de session.

Chaque principal est limité à 16 entrées et 64 MiB de données JPEG canoniques. Ces limites sont indépendantes du plafond global de 64 entrées/256 MiB : la pression de quota principal évince uniquement les entrées les moins récemment utilisées de ce principal avant que l'éviction LRU globale ne soit envisagée. Les entrées expirées sont balayées à la fois de la comptabilité principale et globale lors de l'activité du cache, tandis que l'annulation et l'échec de validation ne valident pas un remplacement partiel.

Le cache rejette les Base64 non canoniques, le remplissage excessif, les médias non-JPEG, les JPEG malformés ou tronqués, et les JPEG qui produisent un avertissement lors d'un décodage d'image complète `sharp` borné. Il réencode chaque image acceptée en tant que JPEG canonique, dérive la largeur et la hauteur à partir des octets décodés au lieu de faire confiance aux champs de l'appelant, et rejette tout octet polyglotte traînant plutôt que de les conserver. Seul le tampon compressé canonique borné est facturé aux deux quotas. La limite de fil JSON inclut la surcharge Base64 pour le plafond d'entrée décodée de 32 MiB. Chaque dérivation stockée enregistre son format/résolution JPEG validé, sa politique d'échantillonnage, sa version de dérivation, son heure de création, le hachage de contenu calculé par le serveur, et le hachage de référence parent plus le hachage de contenu parent de l'appelant de confiance. L'annulation est vérifiée entre les phases de décodage/hachage asynchrones avant l'engagement atomique du cache.

Le producteur de production réutilise les images de courtier déjà dérivées uniquement après une analyse visuelle réussie, sans second téléchargement/extraction vidéo. Il nécessite `modalityBridgeVideoDrilldownEnabled=true` pour l'opérateur, `drilldown: true` strict par partie, et un ID d'enregistrement de clé API authentifiée. Les valeurs de principal/session déclarées par le client n'établissent jamais la propriété. Sans les trois conditions, il ne hache, redimensionne ou ne conserve pas d'images supplémentaires. L'échec de conservation préserve la réponse visuelle utilisable. Les demandes consenties contournent le cache de résultats de vidéo complète, de sorte que les résultats mis en cache ne rejouent jamais les poignées.

Les réponses JSON et SSE réussies exposent au maximum quatre poignées opaques dans l'en-tête borné `x-omniroute-video-drilldown`. Les origines de navigateur autorisées peuvent lire cet en-tête sans élargir la politique d'origine CORS. Les nouvelles poignées utilisent `v1.<token base64url aléatoire de 32 octets>`, et le registre conserve uniquement leurs hachages SHA-256. Le lecteur/parseur d'en-tête accepte également les anciens tokens hexadécimaux de 64. Le consommateur public authentifié est `GET /api/v1/video-bridge/drilldown?handle=...`, indépendamment régulé par `modalityBridgeVideoDrilldownRemoteEnabled=true`. Un faux persistant explicite révoque l'accès même lorsque le fallback d'environnement hérité `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` est activé. La conservation en production a le fallback hérité analogue `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Les deux fallbacks sont désactivés par défaut.

Le consommateur dérive la propriété de la clé authentifiée, applique la politique de clé, et renvoie le même 404 pour des poignées inconnues, expirées et d'une autre clé. Il accepte `variant=preview|standard|detail` (dimension JPEG maximale 320/640/1280, jamais agrandie), `limit=1..8` (ou l'alias hérité `frames`, jamais les deux), `page` basé sur zéro, et des secondes de focus `start`/`end` optionnelles. Les clés de requête dupliquées et les fenêtres de focus inversées sont rejetées. Chaque variante retournée a un hachage de son contenu réel et des métadonnées de résolution réelle, lié à la source conservée. Les variantes sont dérivées à la lecture plutôt que stockées comme copies conservées supplémentaires. La réponse JSON, y compris Base64/enveloppe, est limitée à 32 MiB ; une page trop grande renvoie 413 et le client doit demander moins d'images. Les lectures vérifient l'annulation autour de chaque redimensionnement et re-vérifient la validité de la poignée avant de retourner. `DELETE` par le propriétaire est idempotent ; la suppression ou l'expiration TTL libère la source conservée et la comptabilité d'utilisation.

Le magasin partagé est local au processus : les poignées expirent au redémarrage et ne sont pas transférables entre des processus OmniRoute indépendants. Les statistiques de gestion exposent uniquement la politique de conservation/à distance effective et le nombre d'entrées/octets conservés agrégés, jamais les médias, références, IDs de principal ou poignées. Le panneau des paramètres vidéo affiche ces valeurs et peut conserver les deux interrupteurs de consentement. Cette documentation d'implémentation n'est pas une preuve de déploiement ou de promotion en direct ; l'acceptation du modèle réel est suivie séparément.

Les images sont légendées séquentiellement avec le modèle vidéo configuré. Un remplacement vidéo vide hérite du paramètre Vision ; si les deux sont vides, le routeur automatique Vision sélectionne le modèle efficace capable de vision. Les légendes réussies remplacent la partie originale par un préfixe stable `[Video description:` qui marque également le texte comme une observation dérivée des médias non fiable et indique aux modèles en aval de ne pas suivre les instructions trouvées dans les médias. Les clés de cache des légendes de cadre incluent les octets JPEG, le prompt, l'horodatage et le modèle efficace ; seules les légendes réussies sont mises en cache. Les entrées de cache conservent le modèle producteur réussi réel, y compris un modèle de secours ; le pont signale `mixed` lorsque différents cadres ont été produits par différents modèles. Un hit de cache réutilise cette identité de producteur au lieu de la renommer selon le plan de routage demandé. Le cache de résultats de la vidéo entière est indexé sur chaque entrée qui change la sortie — prompt, modèle efficace, politique d'échantillonnage, nombre de cadres, mode d'analyse sémantique, l'empreinte SHA-256 de l'indice de focus normalisé, fenêtre de focus, `transcript`, `audioTranscript`, et le drapeau de planche de contact — donc changer l'une de ces dimensions est un échec de cache, jamais une réutilisation obsolète. La version de la politique de dé-duplication visuelle, le seuil et le nombre de cadres candidats limités sont également explicites dans la clé de cache de résultats et les métadonnées ; un changement de politique ne peut donc pas réutiliser une description de vidéo entière obsolète. Les métadonnées de cache de résultats v4 conservent le mode et l'empreinte, jamais la tâche utilisateur brute. Les métadonnées de garde-fou rapportent à la fois les modes d'analyse demandés et efficaces ; un mode `focused` demandé sans texte utilisateur utilisable est rapporté comme étant effectivement `full`.

Le garde-fou extrait chaque partie vidéo prise en charge mais ne décrit pas plus que `modalityBridgeVideoMaxVideos`. Pour une cible prouvée avoir `supportsVideo === false`, les vidéos échouées et dépassant la limite deviennent des marqueurs de texte sûrs explicites afin qu'aucune vidéo brute ne survive. Lorsque la capacité est inconnue, ces parties restent intactes. Les cibles avec `supportsVideo === true` contournent le pont. Le signal d'abandon de la demande client se propage à travers le téléchargement, la file d'attente du courtier, les sous-processus et les appels de légende ; les abandons s'arrêtent entre les vidéos et ne échouent jamais en laissant les médias bruts.

Les paramètres d'exécution sont soutenus par une base de données et validés par Zod :

| Clé                                 | Par défaut  | Plage / comportement                                                                                  |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optionnel à l'exécution, sur demande                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` préserve les légendes génériques ; `focused` utilise un contexte utilisateur non fiable limité |
| `modalityBridgeVideoModel`          | `""`        | Hérite du modèle Vision Bridge                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ou `segment_aware` proportionnel ; l'échec du détecteur revient à `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                        |

Les valeurs de délai d'attente vidéo héritées persistées au-dessus de 120 secondes sont limitées à la date limite du courtier ; les nouvelles écritures de paramètres au-dessus de cette limite sont rejetées. `GET /api/modality-bridge/video/runtime` nécessite une localité de boucle de retour estampillée de confiance avant l'authentification ou le sondage d'exécution, puis nécessite une authentification de gestion. Il ne retourne que les versions FFmpeg/ffprobe disponibles et assainies, et une raison fixe lorsque l'exécution n'est pas disponible. Le point de terminaison d'extraction interne n'est pas une API de téléchargement public : la saturation de la file d'attente retourne `503` plus `Retry-After`, une déconnexion de l'appelant retourne `499`, et la date limite fixe du courtier retourne `504`. Les réponses converties ajoutent `video->text;model=<visionModel>;parts=<videos>` à l'en-tête central `x-omniroute-modality-bridge` sans supprimer les segments Vision ou Audio.

### Masque PII (`piiMasker.ts`)

Fonctionne sur **les deux** étapes.

- **`preCall`** clone la charge utile, parcourt `system`, `messages`, `input`, et `prompt` (y compris les éléments de chaîne simples), et applique `processPII()` (de `@/shared/utils/inputSanitizer`) aux champs de chaîne `content`/`text`. Lorsque `PII_REDACTION_ENABLED=true`, les PII détectées sont supprimées dans la charge utile sortante. Cela est indépendant de `INPUT_SANITIZER_MODE` (qui ne contrôle que la politique d'injection de prompt). Lorsque la suppression est désactivée, l'appel enregistre les comptes de détection sans réécrire le contenu.
- **`postCall`** clone en profondeur la réponse, exécute `sanitizePIIResponse()` plus le masque de forme de l'API des réponses (`maskResponsesOutput` — couvre `output_text` et `output[].content[].text`). Si une suppression se produit, la réponse modifiée remplace l'originale.

Le garde-fou ne bloque jamais ; il annoté seulement (`meta.detections`, `meta.redacted`) ou réécrit.

### Injection de Prompt (`promptInjection.ts`)

Détecte les structures adversariales dans le contenu fourni par l'utilisateur et applique la politique configurée. Le comportement est guidé par des variables d'environnement et des options de constructeur :

| Paramètre        | Var d'environnement                                                                                   | Par défaut | Effet                                                                                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activé           | `INPUT_SANITIZER_ENABLED`                                                                             | `true`     | Lorsque `false`, le garde-fou court-circuite.                                                                                                                                                                     |
| Mode             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`     | Politique d'injection : `block`, `warn`, ou `log`. (`redact` est accepté pour la compatibilité, mais ne supprime **pas** le texte d'injection ; la réécriture des PII est contrôlée par `PII_REDACTION_ENABLED`.) |
| Seuil de blocage | Option `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`     | Sévérité minimale requise pour bloquer. Medium est en mode observation par défaut.                                                                                                                                |

**Priorité du mode** (`getMode`) : `options.mode` de l'appelant →
`INJECTION_GUARD_MODE` **surcharge de fonctionnalité DB** (Tableau de bord → Paramètres →
Drapeaux de fonctionnalités) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Une surcharge du tableau de bord l'emporte donc sur les variables d'environnement, de sorte que l'interface utilisateur des Drapeaux de fonctionnalités contrôle le garde en cours d'exécution (sans redémarrage). La lecture de la DB est à l'épreuve des pannes : si elle échoue, le garde revient au comportement basé sur l'environnement, et lorsque aucune surcharge n'est définie, le comportement est identique à la résolution uniquement basée sur l'environnement.

Sources de détection :

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (détecteur partagé utilisé ailleurs dans le pipeline).
2. `DEFAULT_GUARD_PATTERNS` intégrés (actuellement `system_override_inline` et `markdown_system_block`, tous deux de sévérité `high`).
3. `customPatterns` optionnels passés via les options du constructeur (chaînes, regex, ou enregistrements `{ name, pattern, severity }`).

Lorsque `mode === "block"` **et** qu'au moins une détection atteint le seuil de sévérité, `preCall` retourne `{ block: true, message: "Demande rejetée : contenu suspect détecté" }`. En modes `warn`/`log`, le garde-fou enregistre mais permet l'appel. L'assistant partagé `evaluatePromptInjection()` est également exporté pour les appelants qui ont besoin d'évaluer des invites sans passer par le registre.

**Limite de scan (v3.8.20) :** le détecteur n'inspecte que les **premiers 16 Ko** de texte d'invite joint — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 octets) dans `src/shared/utils/inputSanitizer.ts`. Tant `detectInjection()` que `evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` avant d'exécuter la boucle de motif. Les directives d'injection se trouvent près du haut d'une entrée, donc cela limite l'utilisation du CPU/GC des regex sur des charges utiles de plusieurs centaines de Ko sans affaiblir la détection (cf. #3932, #4041).

### Masque de crédentiel (`credentialMasker.ts`)

Fonctionne sur **les deux** étapes, en dernier dans la chaîne par défaut (priorité `95`). Supprime les motifs de clé API / jeton secret bien connus de la charge utile sortante (contenu du message, arguments d'appel d'outil, résultats d'outil) **et** de la réponse du fournisseur, de sorte qu'un crédentiel collé dans une invite (ou renvoyé par un résultat d'outil) ne soit pas divulgué au fournisseur en amont ou de retour au client.

- **Opt-in uniquement**, même convention que la réécriture des PII (Règle stricte #20-adjacente) : désactivé sauf si `settings.credentialRedactionEnabled === true` **ou** `CREDENTIAL_REDACTION_ENABLED=true`. Avec cela désactivé, le garde-fou est inactif — il ne bloque jamais et ne réécrit jamais.
- `redactCredentials()` parcourt l'arbre complet de la charge utile/réponse (`walkValue()`, sûr contre la pollution de prototype, sûr contre les cycles via `WeakSet`) et remplace les correspondances par un espace réservé `[REDACTED:<type>]`, clonant uniquement les branches qui ont réellement changé.
- `CREDENTIAL_PATTERNS` couvre les clés des fournisseurs LLM (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), les jetons VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord), les clés de paiement (Stripe, Square), les clés cloud (clé d'accès AWS, Twilio, SendGrid, Mailgun), les clés privées / JWT, les chaînes de connexion contenant des crédentiels (`mongodb://user:pass@...`, etc.), et un motif générique d'en-tête `Authorization`/`x-api-key`/`api-key`/`apikey`. Les clés en forme d'en-tête (`authorization`, `x-api-key`, `api-key`, `apikey`) sont supprimées structurellement (valeur uniquement, préfixe de schéma comme `Bearer `/`Basic ` préservé) plutôt que via la regex de texte générique.
- Le garde-fou ne bloque jamais ; il ne fait que réécrire (`modifiedPayload` / `modifiedResponse`) et annoter (`meta.credentialsRedacted`, `meta.count`).

Garde de régression : `tests/unit/credential-masker-guardrail.test.ts`.

## Contrat de base (`base.ts`)

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
  block?: boolean; // true interrompt immédiatement la chaîne
  message?: string; // affiché en cas de blocage
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // renvoyé par preCall pour réécrire la requête
  modifiedResponse?: TValue; // renvoyé par postCall pour réécrire la réponse
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

Un garde-fou signale « aucune modification » en renvoyant soit `void`, `{}`, soit
`{ block: false }`. Le renvoi d'un `modifiedPayload`/`modifiedResponse` remplace
la valeur qui parcourt la chaîne pour les garde-fous suivants.
`signal?: AbortSignal` propage le cycle de vie de l'appelant aux garde-fous. L'abandon d'une requête constitue l'exception délibérée au comportement fail-open : les ponts multimédias interrompent leur traitement et effectuent le nettoyage sans restaurer les données multimédias brutes vers une cible dont on sait qu'elle ne les prend pas en charge.

## Registre (`registry.ts`)

Le singleton `guardrailRegistry` expose :

- `register(guardrail)` — ajoute un garde-fou (ou le remplace selon son nom normalisé) et
  retrie les garde-fous par `priority` croissante.
- `clear()` / `list()` — utilitaires d'administration.
- `runPreCallHooks(payload, context)` — parcourt les garde-fous actifs, fait transiter
  le contenu via `modifiedPayload` et s'arrête au premier `block: true`.
- `runPostCallHooks(response, context)` — même flux côté réponse.
- `resetGuardrailsForTests({ registerDefaults })` — efface l'état et, facultativement,
  réenregistre les garde-fous par défaut afin d'assurer une isolation propre des tests.

Les deux exécuteurs renvoient `{ blocked, payload|response, results, guardrail?, message? }`,
où `results` est un tableau d'enregistrements `GuardrailExecutionResult` comprenant
les champs `blocked`, `skipped`, `modified`, `error` et `meta` propres à chaque garde-fou,
utiles pour le traçage.

### Désactivation des garde-fous par requête

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrège une
liste dédupliquée des noms de garde-fous qui doivent être ignorés pour la
requête actuelle. Sources (toutes facultatives et fusionnées) :

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` dans le corps de la requête (au niveau supérieur)
- `metadata.disabledGuardrails` dans le corps de la requête
- En-tête `x-omniroute-disabled-guardrails` (ou l'ancien
  `x-disabled-guardrails`)

Les valeurs peuvent être des tableaux de chaînes ou une chaîne séparée par des virgules ; les noms sont
normalisés en minuscules au format kebab-case (`pii_masker` → `pii-masker`). Le résultat
est transmis au registre via `context.disabledGuardrails`, qui ignore
les garde-fous correspondants (`skipped: true` dans `results`).

## Ordre d’exécution

Pour chaque requête transitant par `src/sse/handlers/chat.ts` et
`open-sse/handlers/chatCore.ts` :

1. `resolveDisabledGuardrails(...)` construit la liste des éléments à ignorer à partir de la clé API, du corps
   et des en-têtes.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` exécute les garde-fous par ordre croissant
   de priorité :
   - Les garde-fous désactivés sont enregistrés comme `skipped`.
   - La méthode `preCall` de chaque garde-fou peut réécrire la charge utile via `modifiedPayload`.
   - Le premier `block: true` interrompt la chaîne et le gestionnaire renvoie
     une réponse de rejet du garde-fou.
3. La charge utile (potentiellement réécrite) passe dans le routage combiné et l’envoi
   en amont.
4. Une fois la réponse assemblée, `guardrailRegistry.runPostCallHooks(...)`
   exécute la même chaîne sur la réponse. Ici, `block: true` supprime la réponse
   en amont.

Les garde-fous qui lèvent une exception sont enregistrés avec `error: <message>` et consignés via
`logger.warn`, mais la chaîne continue — par conception, les erreurs n’entraînent pas de blocage.

## Configuration

Variables d’environnement lues par les garde-fous intégrés :

| Variable                              | Utilisée par           | Effet                                                                                                                                                              |
| ------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`     | Définissez-la sur `false` pour désactiver entièrement la détection.                                                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`     | Politique d’injection : `warn`, `block` ou `log`. L’ancienne valeur `redact` ne réécrit pas le texte d’injection.                                                  |
| `INJECTION_GUARD_MODE`                | `prompt-injection`     | Mode du garde-fou contre les injections ; il s’agit également d’un indicateur de fonctionnalité en BDD qui **remplace** les variables d’environnement (BDD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`     | Gravité minimale rejetée par `MODE=block` : `high` (par défaut), `medium` ou `low`.                                                                                |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`     | Ancien alias de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`           | Lorsque la valeur est `true`, les données personnelles de la requête sont masquées (indépendamment du mode d’injection).                                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (en aval) | Contrôle le comportement du masqueur côté réponse.                                                                                                                 |

Les garde-fous Modality Bridge lisent la configuration d’exécution depuis le magasin de paramètres
adossé à la BDD (`getSettings()`), et non depuis les variables d’environnement. Les clés principales de Vision sont
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` et
`modalityBridgeCacheMaxEntries`. Les anciennes clés
`visionBridge*` ne sont acceptées que comme mécanisme documenté de repli en lecture pour un cycle ;
les écritures depuis le tableau de bord utilisent les clés principales. Les valeurs par défaut et le résolveur
de repli se trouvent dans `src/shared/constants/modalityBridgeDefaults.ts`, tandis que les anciennes
constantes sont conservées dans `src/shared/constants/visionBridgeDefaults.ts`.

Audio utilise `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` et `modalityBridgeAudioMaxClips`, ainsi que les paramètres partagés
`modalityBridgeCache*`. Audio ne dispose d’aucun mécanisme de repli vers d’anciennes clés, car celles-ci
ont été introduites avec le schéma Modality Bridge.

Video utilise `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` et
`modalityBridgeVideoTimeout`, ainsi que les paramètres partagés `modalityBridgeCache*`.
Il est désactivé par défaut, car FFmpeg/ffprobe sont des dépendances opérationnelles
facultatives et que le sous-titrage des images ajoute de la latence et augmente le coût du modèle.

## Garde-fous personnalisés

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

Étapes :

1. Créez `src/lib/guardrails/myGuardrail.ts` en étendant `BaseGuardrail`.
2. Implémentez `preCall` et/ou `postCall`.
3. Enregistrez-le lors de l’importation (ajout depuis `registerDefaultGuardrails`) ou
   appelez `guardrailRegistry.register(...)` à l’exécution — le registre remplace
   tout garde-fou existant portant le même nom normalisé.
4. Ajoutez des tests sous `tests/unit/` (exemples existants :
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tests

Utilisez `resetGuardrailsForTests()` entre les tests afin de repartir d’un état connu.
Passez `{ registerDefaults: false }` pour commencer avec un registre vide et
n’enregistrer que les garde-fous testés. Vision Bridge accepte l’injection de
dépendances (`deps.getSettings`, `deps.callVisionModel`) ; Audio Bridge expose les
points d’injection équivalents pour les paramètres, les capacités, la sélection du
modèle STT, la vérification des identifiants et la transcription. Les tests peuvent
donc couvrir les deux flux sans accès à une base de données ni au réseau.

## Voir aussi

- `src/lib/guardrails/` — implémentation
- `src/shared/utils/inputSanitizer.ts` — détecteur partagé utilisé pour
  l’injection de prompts et le masquage des informations personnelles
- `src/shared/constants/visionBridgeDefaults.ts` — valeurs par défaut de Vision Bridge et
  liste des modèles pour lesquels le pont est imposé
- `src/shared/constants/modalityBridgeDefaults.ts` — valeurs d’exécution par défaut partagées pour Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — couche orthogonale (disjoncteur, délais de récupération)
- `docs/reference/ENVIRONMENT.md` — référence complète des variables d’environnement

## Couverture des routes par le garde-fou contre les injections et red team (Phase 8 · Bloc D)

Le garde-fou contre les injections (`createInjectionGuard` / `withInjectionGuard`) couvre toutes les routes
qui acceptent des prompts utilisateur. Il respecte `INJECTION_GUARD_MODE` (`warn` par défaut = journalisation uniquement ;
`block` = renvoie une réponse HTTP 400 `SECURITY_001`).

| Type             | Routes                                                                                                                                               | Mode par défaut |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Texte (existant) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn            |
| Génératif        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn            |
| Données          | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn            |

L’extraction de texte (`extractMessageContents`) couvre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (chaque nuit, `nightly-llm-security.yml`) :** promptfoo vérifie que chaque route bloque
le corpus OWASP-LLM lorsque `INJECTION_GUARD_MODE=block` ; garak exécute des sondes (ignorées en l’absence de secret).
`moderations` est inclus par souci de cohérence — les opérateurs utilisant le mode de blocage peuvent l’exempter via
`resolveDisabledGuardrails`.

Le workflow nocturne (`.github/workflows/nightly-llm-security.yml`, tâche cron + déclenchement
manuel) comporte deux jobs :

- **`promptfoo-guard` (bloquant)** — exécute `promptfoo eval -c promptfooconfig.yaml`
  avec `INJECTION_GUARD_MODE=block`. Chaque cas antagoniste (par exemple « ignorer toutes les
  instructions précédentes… », contournements de type DAN) vérifie que la réponse contient
  `error.code === "SECURITY_001"`, c’est-à-dire que le garde-fou a bien rejeté la requête.
- **`garak` (informatif)** — exécute garak avec `--probes promptinject,dan,leakreplay`
  sur une instance OmniRoute locale (`http://localhost:20128/v1`). Son exécution est conditionnée par un
  secret de fournisseur (`PROMPTFOO_PROVIDER_KEY`) ; il est ignoré proprement en son absence et se termine
  par `|| true`, afin de produire un rapport sans faire échouer la CI.

La couverture de l’utilitaire de garde-fou (`createInjectionGuard` / `withInjectionGuard`)
s’étend à toutes les routes `/v1` acceptant des prompts ; le texte du prompt est extrait de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` par
`extractMessageContents()` dans `src/shared/utils/inputSanitizer.ts`.
