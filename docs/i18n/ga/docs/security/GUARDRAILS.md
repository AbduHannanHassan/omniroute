# Guardrails (Gaeilge)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Foinse na fírinne:** `src/lib/guardrails/`
> **Nuashonraithe is déanaí:** 2026-08-29 — v3.8.51 (Is é an glaoiteoir a dhearbhaíonn bunús thras-scríbhinn Video Bridge,
> níl sé fíoraithe ag an bhfreastalaí fós — soiléirithe de réir #11661)

Forfheidhmíonn ráillí cosanta sábháilteacht, polasaí, agus claochluithe ábhair ag an teorainn idir OmniRoute agus soláthraithe in aghaidh an tsrutha. Is féidir le gach ráille cosanta pálastaí iarratais (`preCall`) agus freagraí in aghaidh an tsrutha (`postCall`) a iniúchadh (agus, de rogha air sin, diúltú dóibh, iad a chlaochlú, nó nótaí a chur leo).

Is córas **teip-oscailte** é: má chaitheann ráille cosanta earráid le linn forghníomhaithe, déanann an chlárlann an earráid a thaifeadadh agus leanann sí ar aghaidh leis an gcéad ráille cosanta eile in ionad teip a chur ar an iarratas. Is cinneadh sainráite é blocáil (`block: true`), ní tharlaíonn sé de thaisme riamh.

## Cosaint Laistigh

Lódáiltear sé cosaintí laistigh de shíce ar ord tosaíochta ar allmhairiú
(féach `registry.ts` → `registerDefaultGuardrails()`):

| Tosaíocht | Ainm                | Stáit(í)       | Comhad                |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Láimhdeachtaí le huimhreacha tosaíochta níos ísle a rith **ar dtús**.

### Droichead Radharc (`visionBridge.ts`) — Droichead Modh PR-1

Tógann sé isteach iarratais atá ag iompar íomhánna atá dírithe ar **módel nach bhfuil radharc aige** agus athraíonn sé an t-iarratas iomlán chuig módel atá in ann radharc a dhéanamh nó cuireann sé na codanna íomhá le cur síos téacs a tháirgtear ag módel radhairc atá inchoigeartaithe sula ndéantar an glao suas. Ligeann sé do sholáthraithe téacs amháin láimhseáil trédhearcach a dhéanamh ar phacáistí il-mhodh.

Sreabhadh:

1. Éalaigh más rud é go dtacaíonn an módel sprioc cheana le radharc (ach amháin má tá sé le feiceáil sa liosta droichead éigeandála `isVisionBridgeForcedModel`).
2. Bain na codanna íomhá trí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), a dhéanann comhoibriú leis an **detector meán comhoibrithe** `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — an t-aon fhoinse fírinne a roinneann an scagaire comhoiriúnachta comhoibrithe.
   Tá an t-eisiúint ceadaithe do na codanna barr leibhéal de na cruthanna
   a d'fhéadfadh `replaceImageParts` a chur ar ais (an conradh extract↔replace): OpenAI
   `image_url`, bunús base64 Anthropic `source.type:"base64"`, URL Anthropic
   `source.type:"url"`, agus API na Freagartha `input_image`. Ní bhaintear na cruthanna neadaithe agus na cruthanna le comhartha amháin as. Éalaigh más rud é nach bhfaightear aon rud.
3. Réitigh socruithe rith trí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): buaileann na socruithe nua `modalityBridge*`
   eochracha; fanann na heochracha sean-`visionBridge*` mar **tacaíocht laistigh de chiorcal amháin**
   (fuinneog rolla). Éalaigh roimh aon thrasnú meán nuair atá an droichead díothaithe.
4. Déanann an rogha mód (`modalityBridgeVisionMode`, féach an tábla thíos) cinneadh
   maidir le hathrú vs cur síos. Athraíonn an reroute `modifiedPayload` le `model`
   amháin a mhalartú, chomh maith le meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Conas a dhéantar cur síos: cuireann sé íomhánna ag `maxImages`, comhoibríonn sé leis an gcur síos atá ar an tasc,
   comhoibríonn sé leis an gcórais cur síos, glaonn sé ar an módel radhairc **i gcomhthráth**
   (`Promise.allSettled`), agus cuireann sé na codanna téacs `[Image N]: <description>` ina n-áit. Taispeánann cur síos teip `null` agus coimeádtar an codanna íomhá bunaidh **( #4012 )** — ach amháin ar an gcosán cur síos comhoibrithe nuair a theip gach cur síos, áit a bhfaigheann an t-uaslódáil nach bhfuil radharc aige
   stub `(unavailable — no vision-capable provider connected)` in ionad (#8430).
6. Tuairisceoidh `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Rogha mód (`modalityBridgeVisionMode`)

| Mód        | Réamhshocrú | Iompar                                                                                                                                                                                                                                                                                                                    |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Heuristic sean, gan teagmháil (#6640/#7204): athraíonn módel nach bhfuil comhoibrithe/`auto/` chuig an módel radhairc is fearr ach amháin má tá creidiúnachtaí inúsáidte ag an módel bunaidh (ansin déan cur síos); tá spriocanna comhoibrithe i gcónaí ag déanamh cur síos.                                              |
| `describe` |             | Déan cur síos i gcónaí — éalaítear an bloc reroute go hiomlán; freagraíonn an módel a roghnaigh an t-úsáideoir i gcónaí.                                                                                                                                                                                                  |
| `reroute`  |             | Éalaigh reroute: déantar an cosaint ar an módel le creidiúnachtaí a choinneáil a shárú. Tá an cosaint creidiúnachtaí **sprioc** reroute fós i bhfeidhm — nuair nach bhfuil sprioc radharc inúsáidte ann, téann an t-iarratas tríd chun cur síos a dhéanamh ionas nach sroicheann íomhánna amh cúlra téacs amháin (#8430). |

Éilíonn módanna éigeandála **roimh** an heuristic auto a rith; tá iompar `auto`
comhoiriúnach le byte leis an droichead cosanta roimh PR-1.

#### Cur síos ar an tasc atá ar an eolas (`modalityBridgeVisionTaskAware`)

Réamhshocrú **fíor**. Cuireann `composeVisionPrompt()` (`visionBridgeHelpers.ts`) an téacs de
an **teachtaireacht deireanach ó úsáideoir** (truncated go 500 chars) leis an gcur síos bun, ag treorú an cur síos i dtreo cad a iarr an t-úsáideoir i ndáiríre
(patrún codex-vision-proxy) agus ag iarraidh ar an módel radhairc téacs infheicthe a tharchur. Leis an gcnaipe as — nó gan téacs ó úsáideoir — úsáidtear an gcur síos bun gan athrú.

#### Cur síos ar an gcuairteoir féin (`callVisionModelSingle()`

in `visionBridgeHelpers.ts`)

I gcónaí iarrann an gcuairteoir féin ar an gcuairteoir OpenAI comhoiriúnach `image_url.detail: "high"` —
gan coinníoll, do gach gcallaire/soláthraí, nach bhfuil gafa le comhartha cliant ar bith.
Degrádálann sampláil íseal-dhéanamh cruinneas OCR don tasc trascríobh téacs go díreach
a iarrann an t-iarratas seo, mar sin iarrann an gcall ar a shon féin i gcónaí ard
dhéanamh beag beann ar cé acu an leibhéal mionsonraithe a úsáideadh sa iarratas isteach bunaidh. Ní
chuireann sé seo isteach ach ar an gcorp iarratais inmheánach; ní athraíonn sé conas
a tharchuireann OmniRoute `image_url.detail` an gcallaire ar an iarratas príomha —
tá an réamhshocrú sin curtha i bhfeidhm go neamhspleách, agus amháin do chliaint OpenCode a
tá le feiceáil, i `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Níl
gcuairteoir leagan sreang de gcall ar an gcuairteoir féin aon réimse `detail`
agus níl sé faoi thionchar ag aon réamhshocrú.

#### Teorainn aschuir cur síos (`modalityBridgeVisionMaxChars`)

| Eochair                        | Réamhshocrú | Raon             |
| ------------------------------ | ----------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` nó 100–50000 |

Is é `0` (réamhshocrú) **níl teorainn** — cuireadh an cur síos a dhoirtítear le
`callVisionModel()` trí, ag coimeád an iompar atá ann cheana. Cuireann aon luach sa raon 100–50000 deireadh leis an gcur síos le
suffeix `…` sula gcuirtear ar ais é mar `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Ardaigh é seo do thascanna OCR atá trom le mionsonraí áit a bhfuil gá ag an
múnla íochtarach leis an trascríobh iomlán; laghdaigh é chun úsáid na dtócaine a theorannú ar mhúnlaí radharcacha garr.
Tá an réimse painéil ar an gclár ar an gclár Vision ar an bpainéal Advanced
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) agus cuireann sé teorainn ar aon
luach idir 1 agus 99 suas go dtí an 100 urlár agus ag fágáil `0`
neamhdhíobhálach — is luach bailí Zod é `0` ina cheart
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ní hamháin
an réamhshocrú "neamhsocraithe".

#### Caching cur síos (`modalityBridge/bridgeCache.ts`)

LRU + TTL cache i gcuimhne do aschuir cur síos, roinnte ar fud an phróisis.
Eochair = `sha256(imageRef + composedPrompt + configuredBridgeModel)` le
framing fad-prefix (gan comhoiriúnachtaí teorainn réimse). Is é an comhoiriúnacht múnla
an múnla **socraithe** droichead, ní an múnla a d'fhreagair i ndáiríre —
d'fhéadfadh `callVisionModel` dul ar ais go laige, agus bheadh
eochair ag gach iarracht a bheadh ag cur an cache i gcion. Ní chuireann cur síos teipthe
ar an gcache. Socruithe:

| Eochair                         | Réamhshocrú | Raon    |
| ------------------------------- | ----------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`      | —       |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000 |

#### Normalú íomhá iargúlta (cur síos ar an gcuairteoir/bunachar a fháil)

Nuair a fhaigheann an droichead íomhá **iargúlta** féin — an gcall cur síos
ar an gcuairteoir agus an comhoiriúnacht bunachar leagan sreang claude
(`ensureBase64ImagesForClaudeWire`), araon trí
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — cuireadh an URI sonraí
trí `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sula gcuirtear é i d'iarratas an mhúnla radharc.
Déantar íomhánna ró-mhóra a laghdú go **2048px ar an imeall fada** (ag comhoiriúnadh
leis an gcuirtear teorainn athmhúnlaithe OpenAI/Anthropic i bhfeidhm ar an freastalaí), a ghearrann
bótaí/latency a uaslódáil gan athrú ar an méid a fheiceann an múnla radharc. Úsáideann an
athmhúnlú `sharp`, a luchtú trí allmhairiú dinimiciúil: ar ardán ina
n-éiríonn le híoslód a n-ábhar dúchasach, ní **throid** `normalizeDataUri()` — téann sé ar ais
go dtí pastróth na n-ábhar bunaidh, mar sin coimeádann an cosán cur síos/bunachar
i gcónaí ag obair. Déantar bótaí nach íomhá (cuardach nach d'fhill íomhá inchoigeartaithe)
a chur trí gan athrú. Tá an normalú seo teoranta do íomhánna a fhaigheann an droichead
do gcall ar a shon féin — ní cuireadh i bhfeidhm ar an bplean pastróth amh
de na gcallairí, comhoiriúnach leis an
prionsabal múnlaithe opt-in amháin (Príomhriail #20).

#### Scéim socruithe + inimirce

Tá na heochracha nua `modalityBridge*` bailíochtaithe ag Zod i `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, an trio `modalityBridgeCache*`, agus an
grúpa `modalityBridgeAudio*` a úsáidtear ag an Droichead Audio. Cóipeann an inimirce
`141_modality_bridge_settings.sql` luachanna seanchaite atá ann cheana
`visionBridge*` chuig na heochracha nua comhoiriúnacha (idempotent, ní scríobhann sé
luach `modalityBridge*` a shocraigh an oibreoir); fanann na heochracha seanchaite
a bheith inghlactha mar thacaíocht léitheoireachta ar feadh timthriall scaoilte amháin.

#### Ceannaireacht trédhearcachta + stats

Iompraíonn freagraí a bhfuil cur síos orthu
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(a tógadh ag `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`,
stamped ag `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Ní fhaigheann iarratais a d'iompaigh **nó** ceannaireacht — níor athraíodh an
páipéar agus tá an múnla a mhalartú le feiceáil cheana féin i réimse `model` an
chorp freagartha.

`GET /api/modality-bridge/stats` (údarás bainistíochta, an céanna le
`GET /api/settings`) cuireann ar ais na comhoiriúnachtaí in-mheabhrach
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` do `vision`, `audio`, agus
`video`. Úsáideann `averageLatencyMs` `latencySamples`, ní gach iarracht, mar a
bhí a denominator; ní dhéanann oibríocht gan am a chruthú sampla de zero-millisecond.
Fanann `bridged` mar an t-ainm comhoiriúnach do thrascríobh rathúil; ní
ardóidh iarrachtaí teip é.
Athraíonn comhoiriúnachtaí ar athsheoladh an phróisis deara
(telemetry, ní cuntas).

#### Conradh painéil

Tá an leathanach painéil tiomnaithe ar
`/dashboard/settings/modality-bridge`. Coinníonn a chuid `Vision`, `Audio`,
agus `Video` táblaí paraiméadair ceiste nuair a athraíonn siad luach an `tab`.
Nochtann an táb Vision cumas, mód, roghnú múnla (lena n-áirítear an réamhshocraithe uathoibríoch),
tacaíocht do thasc, freagairí a bhfuil aird ar thasc, teorainneacha ama/íomhá/cur síos/aistriúcháin,
comhoibrithe ama, agus iarratas samplach cosanta. Tá an táb Audio beo freisin: nochtann sé
cumas, rogha múnla STT amháin le Auto, teorainneacha ama/max-clip, comhoibrithe fuaime,
agus tástáil samplach `input_audio`. Tá an táb Video feidhmiúil: tuairiscíonn sé
staid reatha FFmpeg/ffprobe — laistigh de cheithre stát UI soiléire (`unknown` nuair a
bhíonn an probe ag eitilt nó nach féidir é a chríochnú, `restricted` ar óstán painéil nach
gcuirtear ar ais é, `unavailable` nuair a bhíonn sé próbháilte agus dearbhaithe go bhfuil sé
duine, nó `available` le leagan FFmpeg/ffprobe) — coinníonn sé
teorainneacha cumais/múnla/raon/vídeo/am, scagann sé an rogha múnla go dtí
múnlaí atá in ann fís, agus nochtann sé comhoibrithe físe.

Tá an cárta Vision Bridge roimhe seo faoi shocruithe AI mar nasc comhoiriúnachta leis an
leathanach nua; ní chuireann sé cóip eile den fhoirm. Nascann Soláthraithe Meán freisin
oibreacha Íomhá-go-Teanga agus Duine-go-Teanga leis na táblaí Modality Bridge
comhoiriúnacha gan an pháirc Duine-go-Teanga atá ann cheana a bhaint.

**Bóthar aitheantais féin-loop:** nuair a théann an glao cur síos tríd an
`/v1` féin-loop de OmniRoute (múnla soláthraí neamhchaighdeánach), seolann an fo-glao
`x-omniroute-admission-bypass: internal` agus deimhnítear é le creidiúnacht
féin-loop atá réitithe — an `sk_omniroute` sentinel áitiúil i mód áitiúil, nó an
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` eochair env a shocraítear ag an oibreoir (#1350) ionas
go bhféadfadh déantóirí `REQUIRE_API_KEY=true` an glao cur síos a rith. Ní
gheofar an bóthar ach do na creidiúnachtaí sin, mar sin ní féidir le cliaint
eachtracha an ceann scríbe a úsáid chun an t-aithint a scipeáil.

Maireann na réamhshocruithe sean i `src/shared/constants/visionBridgeDefaults.ts`; tá
na réamhshocruithe nua/mód/tasc-aire/cache agus an réitigh socruithe i
`src/shared/constants/modalityBridgeDefaults.ts`. Nochtann an cosaint rogha
constróid `deps` ionas go bhféadfaidh tástálaithe gníomhachtaí bréige `getSettings` agus
`callVisionModel` a chur isteach.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Bíonn sé ag cur isteach ar iarratais comhoibrithe fuaime sula sroicheann siad
sprioc nach bhfuil ar eolas go nglacann sé le hionchur fuaime. Ní athraíonn sé
an t-iarratas comhoibrithe: déantar na codanna fuaime a thrascríobh trí
an pointe deireadh atá comhoiriúnach le OpenAI atá ann cheana agus leanann an
múnla comhoibrithe roghnaithe le trascríobhanna téacs.

Próiseas:

1. Réitigh `supportsAudio` trí `getResolvedModelCapabilities()`. Buaileann
   sonraí miontuairiscí soláthraí, ansin sonraí múnla staiticiúil, ansin
   `modalities_input` comhoiriúnachta. Is `false` atá i liosta ionchur
   a fógraítear gan `audio`; ní fhanann aon fhianaise cumais `null`. Gníomhóidh
   an droichead coimeádach le `false` agus `null`, agus scipeálfaidh `true` é.
2. Réitigh socruithe `modalityBridgeAudio*` agus extractáil codanna fuaime
   barr-leibhéal inchoigeartaithe ó gach teachtaireacht trí
   an detector `detectMediaParts()`. Tá na cruthanna sreangaithe tacaíochta
   `OpenAI input_audio`, `audio_url`, agus `source.media_type: "audio/*"`.
   Déantar fuaim neadaithe a bhrath le haghaidh treorach ach ní baintear é
   as an mbóthar splice. Tá an obair teoranta ag `modalityBridgeAudioMaxClips`;
   fanann codanna níos déanaí neamhghafa.
3. Comhlíon socrú `provider/model` atá socraithe, nó lig do `selectAudioBridgeModel()`
   siúl tríd `AUDIO_TRANSCRIPTION_PROVIDERS` i gcruth ord catalog cobhsaí agus
   roghnaigh an chéad múnla le creidiúnacht soláthraí gníomhach inúsáidte.
4. Convertaíonn `callAudioTranscription()` fuaim base64/data-URI go
   `file` ilpháirteach, nó íoslódálann sé `audio_url` iargúlta trí
   an cosaint poiblí amháin le DNS pinning agus teorainn 25 MB. Ansin POSTann sé
   an comhoiriúnacht agus an múnla roghnaithe chuig an féin-loop áitiúil
   `/v1/audio/transcriptions`, a deimhnítear le `resolveSelfLoopBearer()`.
   Déanann an t-iompar trascríobh atá ann cheana gníomhachtaí deimhniú gnáth,
   láimhseáil cooldown/ráta, agus seoladh soláthraí.
5. Athraíonn glao rathúil a gcuid codanna le `[Audio N]: <transcript>`. Rithtear
   glao le `Promise.allSettled`: coimeádtar teip aonair ar an
   codanna fuaime bunaidh (#4012 conradh). Má theipeann ar gach glao agus
   deimhnítear go bhfuil an sprioc `supportsAudio === false`, éiríonn na codanna
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 conradh).
   Maidir le sprioc anaithnid (`null`), fanann toradh uile-teipeanna neamhghafa.
   Faigheann sprioc téacs amháin a deimhnítear gan creidiúnacht STT inúsáidte
   an stubb soiléir céanna gan glao líonra a eisiúint.

Úsáideann trascríobhanna rathúla an próiseas-leathan Modality Bridge LRU/TTL
cache. Comhcheanglaíonn an eochair an tagairt fuaime, an lipéad oibríochta
`audio-transcription` cobhsaí, agus an múnla STT roghnaithe; ní stórálann teipeanna
ar chor ar bith. Nuashonraíonn iarrachtaí fuaime na comhoibrithe `bridged`,
`cacheHits`, `failures`, agus `lastUsedAt`.
Iarratais a aistrítear a iompaíonn
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; ní fhaigheann
iarratais neamhghafa aon chuid Audio Bridge.

Tá socruithe reatha bunaithe ar DB agus bailí le Zod:

| Eochair                       | Réamhshocrú | Raon           |
| ----------------------------- | ----------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —              |
| `modalityBridgeAudioModel`    | `""`        | Auto nó STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10           |

Fanann an cache comhoilte faoi smacht ag `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, agus `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts top-level parts físeáin i gComhoibriú Comhoibrithe `messages` agus Freagraí
API `input` sula gcuirtear glao ar sprioc nach bhfuil tacaíocht dhúchasach físeáin aige.
Tá cruthanna tacaíochta `input_video`, `video_url`, `video_source`, URLanna HTTPS,
agus `data:video/*;base64,...` URIs sonraí. Ní dhéantar comhoibrithe comhoibrithe i gcló
mar fhíseáin.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) atá i gceannas ar thrasnú iarratais, an
seiceáil ar chumas/polasaí, comhoibriú in aghaidh an iarratais, agus an t-ualach freagartha.
Obair gach físe — faighte, an cache toradh iomlán, cur síos ar shraith fráma
(ag comhoibriú le haon trascríobh fuaime a d’fhógair an glao), agus méadrachtaí/abort/cleanup
in aghaidh an iarracht — tá sé i bhfolach taobh thiar de `processVideoPart` i
`videoBridgePipeline.ts`, a gcalltar uair amháin in aghaidh gach cuid físe laistigh de
chiorcal `preCall`. Sainmhíníonn an modúl freisin na teorainneacha port soiléire `VideoMediaBrokerPort`
(faighte byteanna agus ag baint amach frámaí sampláilte), `VideoAudioTranscriptionPort`
(ag comhoibriú le trascríobh fuaime a d’fhógair an glao le na fo-caption sampláilte), agus
`VideoDrilldownPort` (an cruth stórála amh oidhreachta). Déantar STT táirgeachta agus coimeád
fráma timpeall an phort atá ag cur síos trí `createVideoSttAdapter` agus
`createVideoDrilldownAdapter`; úsáideann an dara ceann an timthriall láimhseála opaque roinnte.

Ní dhéanann an cosán iarratais poiblí `/v1` riamh allmhairiú nó glao ar fheidhm.
Íoslódáiltear físeáin iargúlta faoi bhun 50 MiB; tá teorainn 36 MiB deichniúil ag físeáin
base64 inline in aghaidh gach físe chun go bhféadfadh an múnla/messages/soicind
fanacht laistigh de theorainn admhála iarratais JSON poiblí de 50 MiB. Déantar
meastacháin ar fhad inline agus méid deichniúil a sheiceáil sula ndéantar
dáileadh. Éilítear HTTPS ar an URL iargúlta tosaigh agus gach athsheoladh, ag
úsáid an chosanta poiblí amháin atá ann cheana le DNS pinning. Téann na byteanna ansin
trí theorainn broker inmheánach `POST /api/modality-bridge/video/extract` go díreach.
Tá an cosán sin `LOCAL_ONLY` agus `SPAWN_CAPABLE`, glacann sé ach iarratas
údaraithe, muiníneach, ar ais, agus ní ghlacann sé riamh URL, cosán comhoibrithe,
fheidhm, nó liosta argóintí. Cuireann an píblíne méid comhlacht API agus léitheoir
comhlacht méadaithe an láimhseálaí teorainn 50 MiB ar ionchur broker. Ritheann a
gcuimhne teoranta extraction amháin ag an am, ligeann sé ceithre post atá ag fanacht,
agus cuireann sé teorainn ar ionchur atá ag fanacht ag 100 MiB.

Laistigh den broker, léann `ffprobe` comhad áitiúil príobháideach; tá an liosta
formáidí ceadaithe socraithe ag eisiamh formáidí liosta agus comhoiriúnachta.
Maidir le comhoibrithe CONTAINEAR MOV ceadaithe, fanann tagairtí sonraí MOV
iargúlta díghlasáilte de réir réamhshocraithe, agus ní roghnaíonn an t-ordú socraithe
iad. Úsáideann `ffprobe` agus `ffmpeg` an liosta ceadaithe protacal `file`-amháin,
snáithe amháin, comhoibriú argóint socraithe, gan comhoibriú, agus feidhmeanna
a réitítear ó `PATH`. Ní bhíonn sruthanna clúdaithe pictiúr ceangailte in ann
a bheith ina gcórais in ann imirt. Caithfidh gach sruth in ann imirt freastal ar
na teorainneacha, agus is fearr sruth réamhshocraithe soiléir roimh an íos-innéacs
cinneadh. Tá teorainneacha físeanna teoranta do 600 soicind, 8,192 picteilín in
gach dimenzion, agus 33,554,432 picteilín foinsí. Samplaíonn FFmpeg 1–16 frámaí JPEG
lár, laghdaíonn sé an taobh fada go 1,024 picteilín ar a mhéad gan ardú ar ionchur
níos lú, agus ní fhaigheann sé riamh URL. Is `uniform` é sampláil de réir réamhshocraithe.
Déantar na polasaithe roghnaithe `scene_aware` agus `segment_aware` a dhéanamh
trí phas FFmpeg socraithe breise thar an sruth áitiúil a bhfuil sé bailí, roghnaíonn
tíomanta `showinfo` amanna radharc, agus téann sé ar ais go cinneadh go
cinntitheach chuig na lár na samplaí aonfhoirmeacha ar theip ar an gconraitheoir,
am a chaitheamh, aschur mí-oiriúnach, nó socrú folamh. Déanann an modh
roghnaithe lár samplaí lár a dháil go comhoiriúnach le hidirbhlianta radharc
bailí; tá fianaise agus iompar ar ais a bhaineann le roghnaithe lár leagtha amach
thíos. Cuireann an teorainn 16-fráma crua i bhfeidhm tar éis roghnú i ngach polasaí.
Nuair a bhíonn iarratas ar aird radharc amháin le buiséid fráma amháin, úsáideann sé
an lár aonfhoirmeach de na físeáin iomlána gníomhacha nó fuinneog fócas agus
tuairiscíonn sé `policyEffective: uniform`: ní féidir le fráma radharc amháin
an dá deireadh ama a choinneáil. D’fhéadfadh glao a sholáthar go roghnach
fuinneog fócas teoranta (`start`/`end` soicind); tá na teorainneacha comhoiriúnach
le fad na meán, cuireadh fuinneoga a chasadh nó neamh-theoranta ar ceal, agus
déantar na polasaithe samplála go léir laistigh den idirbhliain normalized amháin.
Tugtar an fuinneog atá ag teacht as sampláil i metadata samplála agus i
gceann scríbe neamhiontaofa ionas go bhféadfadh samhlacha anuas a bheith in ann
difriúil a dhéanamh idir sleachta fócasáilte agus an líne ama iomlán.

Tá fócas ar lipéad brí mar shocrú ar leith, soiléir. Coinníonn an modh anailíse
réamhshocraithe `full` an t-iarratas fráma atá ann cheana agus ní chuireann sé
téacs iarratais ar aghaidh chuig an múnla lipéada. I mód `focused`, léann an
droichead ach an `text`/`input_text` neamh-íogair is déanaí a scríobh an
úsáideoir ó chontae Comhoibriú nó Freagraí, déanann sé normalú air go NFC,
cuireann sé carachtair rialaithe agus spás bán le chéile, agus cuireann sé teorainn
ar 500 pointe cód Unicode. Titeann toradh folamh ar an `full` promt cruinn.
Tugtar le fios go bhfuil leideanna inúsáidte serialaithe mar JSON i bbloc
neamhiontaofa úsáideora tiomnaithe agus ní féidir ach sonraí infheicthe a
thabhairt tosaíocht; ní féidir leis an leideanna a shárú an rabhadh ar leith
i gcoinne treoracha atá infheicthe nó inbhéartach sa mheán. Ní dhéanann fócas
téacs aon chiall `start`/`end` a tharraingt nó athrú ar an samplála ama.

#### FU-07 fianaise ar shonraíocht struchtúrach

`segment_aware` úsáideann pas réamh-anailíse teoranta amháin thar an sruth físe
áitiúil a bhfuil sé bailí. Déanann an slabhra scagaire socraithe an chéad scála
go 320 picteilín ar a mhéad, faigheann sé athruithe radharc agus eatraimh reoite,
agus ansin samplaíonn sé ag 1 fráma in aghaidh an soicind do blur, luma meán, agus
eolas spásúil/am. Tá an pas teoranta do 600 sampla struchtúracha, snáithe FFmpeg/scagaire amháin,
an prótacal agus na liostaí ceadaithe comhoiriúnachta `file`-amháin, teorainn 1 MiB
ar aschur próiseas, agus ar a mhéad 30 soicind laistigh de na spriocanna roinnte
abort/deadline an broker. Ní ghlacann sé riamh ordú, scagaire, cosán, nó URL ón iarratas.

Tá na luachanna struchtúracha mar fhianaise samplála cinntitheach, ní tuiscint físe seimeanta. Ní dhéanann siad tuairimí ar ábhair, gníomhartha, teidil, cainte, nó intinn úsáideora. Cruthaíonn teorainneacha radharc agus reo na codanna; ní dhéanann clúdach reo, doimhneacht, nochtadh, mionsonraí spásúla, agus athrú ama ach tionchar a imirt ar conas a roinntear an buiséad 1–16 fráma. Tá teorainn iomlán reoite teoranta do fráma amháin, agus comhoibríonn na codanna neamh-reoite don bhuiséad atá fágtha. Nuair a bhíonn teorainneacha níos mó ná frámaí, coimeádtar clúdach ama comhoiriúnach ionas nach féidir le gearrthóga luath tapa a cheilt codanna fada. Déantar teorainneacha radharc laistigh de réiteach anailíse 1-soicind de theorainn reoite a chomhtháthú.

Ní éiríonn le scagaireacha atá in easnamh, fianaise míchruinn/folamh, earráid braiteora, nó an teorainn ama réamh-anailíse a theipeann ar an bpolasaí lár comhoiriúnach. Ní théann cur isteach ar gcallaire nó spriocdháta bróicéir ar fail: cuireann sé deireadh leis an subpróiseas atá ar siúl, cuireann sé cosc ar tharraingt frámaí ina dhiaidh sin, agus baintear an crann príobháideach sealadach i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` cruthaíonn foirne FFmpeg cinntitheach fíor do shábháil ar gcalltaí tar éis dedup, roinn buiséid gluaiseachta dlúth, fianaise doimhneachta/nochtadh/SI-TI, gearrthóga tapa le tail fada, agus bréagchláir le laghdú gníomhach. Taifeadann sé am balla réamh-anailíse agus, nuair a bhíonn `/usr/bin/time` ar fáil, CPU leanbh agus RSS barr. Is oracles struchtúracha amháin atá ina sheiceáil cáilíochta. Fanann cáil an mhúnla gcalltaí fíor `HOLD` toisc nach bhfuil deireadh ceadaithe ag an harness nó breitheamh reoite. Fanann sábháil airgid freisin `HOLD` mura soláthraíonn `--caption-cost-per-call-usd` meastachán dearfach ar gach gcallt; ní dhéanann an script torthaí ar bith a chruthú.

Tá gach fráma teoranta do 4 MiB, gach fráma amh le chéile do 23 MiB, agus freagra bróicéir shíniú do 32 MiB. Baintear comhoiriúnacht phríobháideach sealadach i `finally`. Ní chuimsíonn OmniRoute FFmpeg agus ní ghlacann sé le cosán feidhmeanna saincheaptha. Sula ndéantar gcallt, cuireann an droichead pas dé-dhíothúcháin amhairc coimeádach i bhfeidhm: laghdaítear gach JPEG go bufer grayscale 16×16 agus comparáidítear é ach leis an fráma deireanach a choinnítear. Maidir le buiséad gcallt a iarrtar os cionn fráma amháin, soláthraíonn an t-extraction pool iarrthóirí teoranta suas le dhá oiread an bhuiséid sin agus ní níos mó ná 16 fráma. Cuireann an cap iarrtha i bhfeidhm ach tar éis dé-dhíothúcháin, le na chéad agus deireanach iarrthóirí roghnaithe á gcoimeád le linn na tanaí deiridh nuair atá an buiséad ar a laghad dhá. Úsáideann an polasaí leagan `grayscale-16x16-mean-cells-v2` an méid níos mó de luma delta meán agus an cóimheas de chealla íomhá bheag a bhfuil a delta normalized ar a laghad 0.05. Is é an leibhéal dúblach an 0.04 seasta, a roghnaíodh le haghaidh tuiscint seachas a bheith nochtaithe mar shocrú ama. Coimeádann an comhartha ard-chointráite seo gluaiseachtaí beaga agus athruithe téacs infheicthe a d'fhéadfadh comparáid amháin le meán a cheilt. Teipeann ar earráidí comparáideora nó de-chódóir ar fail agus coimeádann siad clúdach. Scarann an metadata aschuir iarrthóirí a tharraingítear, frámaí a úsáideadh go rathúil, agus dúblach amhairc a thit.

Féadfaidh cuid físe go soiléir marcáilte iarratas a dhéanamh ar shíntíomhaireacht ama. Tógann an droichead gride JPEG 4-colún, 16-fráma ar a mhéad. Dóitear stamp ama a fhoinsíonn gach cealla 512-pixel isteach i banda íochtarach ard-chointráite, agus fanann na stampanna céanna i metadata téacsúil le haghaidh comhoiriúnachta agus iniúchta. Fanann an JPEG iomlán teoranta do 32 MiB. Mura féidir le `sharp` an gride a dhé-códú nó a chomhoiriúnú, téann an droichead ar ais chuig na frámaí JPEG aonair; scaoileann cur isteach cliant fós tríd an oibríocht gcallt.

Tá fianaise ardaithe go deonach ar leithligh ón microbenchmark comhoiriúnachta sintéiseach. `scripts/perf/video-bridge-contact-sheet-eval.ts` sainmhíníonn harness A/B le leagan scéime do mhúnlaí físe atá comhoiriúnach le OpenAI. Tomhaiseann sé na comhoiriúnachtaí a thuairiscítear ag an soláthraí, moill balla deireadh-go-deireadh (lena n-áirítear comhoiriúnacht gcallt), líon gcalltaí múnla, agus coimeád fíricí a shonraítear sa mhainistir. Ní scríobhann freagraí múnla amh chuig an tuarascáil; ní coimeádtar ach digests SHA-256 agus ID fíricí comhoiriúnachta. Ní dhéanann an harness gcallt líonra nó múnla íoctha mura gcuirtear `--execute-real` agus má tá `--model`, `OMNIROUTE_BASE_URL`, agus `OMNIROUTE_API_KEY` socraithe. Gan an rith fíor sin, fanann a breith chumasach inléite `HOLD`; ní hé fianaise ardaithe amháin tomhais ar phacáiste sintéiseach/gcallt.

Tógann an `scripts/perf/video-bridge-promotion-eval.ts` ar leith na breathnóireachtaí FU-07 nó FU-09. Teastaíonn admháil ardaithe ar fad na hocht gcineál scéime sintéiseach, chomh maith le clip fíor glan, ar a laghad trí athrá tomhaiste in aghaidh ról agus cás, na deich mheitric a shonraítear, digests meán-mheán/teagmháil/ionchur/sonraí a reoite, ID breathnóireachta uathúil agus ord A/B seasta a dheimhniú. Ceanglaíonn an faighte an digest corpais, SHA iarrthóra cruinn agus leagan múnla. Fanann tomhais atá in easnamh nó míchruinn `HOLD`, lena n-áirítear CPU os cionn 30 s, RSS barr os cionn 512 MiB nó réamh-anailís os cionn 30 s. Is caps admhála fianaise iad seo, ní ráthaíocht nua forfheidhmithe RSS ama.

Teastaíonn ar a laghad 98% coimeád cáilíochta agus moill p95 nach bhfuil níos mó ná 1.2x bunlíne do FU-07, chomh maith le feabhsú cuimhne meán-bhunaithe 0.05 ar a laghad ag gcalltaí gcallt comhoiriúnach, nó ar a laghad 10% níos lú gcalltaí gcallt tar éis dedup. Teastaíonn ar a laghad 0.85 cáilíocht, 95% coimeád, 20% laghdú moille p95 agus 10% laghdú ar thóca. Cuireann caillteanas fíricí criticiúla, comhoiriúnacht insteallta nó easnamh úsáid cosc ar ardú. Ní féidir le haon rith ardú a dhéanamh ar rud ar bith: deimhníonn `--previous-report` dhá rith ar leith, neamh-íoctha, a bhfuil cead a bheith comhoiriúnach ag an bpolasaí/múnla/iarraidh/corp. Ní féidir le turgnamh samplála deimhniú turgnamh gcallt.

Ba chóir do chruinnithe scóráil a dhéanamh ar fhreagair i gcuimhne agus `responseDigest` a shábháil chomh maith le méadrachtaí agus ceangail breathnóireachta, ach níor chóir an téacs freagartha a shábháil. Léann an tomhaltóir freisin breathnóireachtaí amh traidisiúnta ach ní chóipeann sé an téacs sin isteach ina thuairiscí. Glactar le `responseDigest` nó `rawResponseText` amháin do gach breathnóireacht. Fanann an liosta ceadaithe le leagan agus `hold` mar réamhshocrú. Éilíonn iontráil incháilithe a tagairt fianaise, polasaí, athbhreithniú múnla, SHA beacht an iarrthóra, digest na miontuairiscí agus dhá ID rith difriúla; cuireadh cásanna contrártha ar ceal. Is conradh iniúchta atá sna meiteadata seo, ní fianaise go bhfuil comhad tagartha ag déanamh tomhais fíor. Déan athbhreithniú ar na faighteanna iarbhír sula gcuirtear aon iontráil leis. Nochtann an pointe de stats bainistíochta agus an painéal físe coigeartú coimeádta. Ní shocróidh alias múnla atá cumraithe a athbhreithniú nó SHA an iarrthóra atá ag rith, mar sin tuairiscíonn an painéal reatha `HOLD` seachas é a athúsáid ó chás rith eile. Fanann roghnú turgnamhach soiléir ó chur chun cinn; ní athraítear réamhshocrú go huathoibríoch.

Féadfaidh glaoiteoirí gnáth `transcript.cues` a chur le chéile le páirt físe tacaíochta nuair a bhíonn téacs comhoiriúnach acu cheana. Caithfidh gach cue `text`, eatraimh `start`/`end` teoranta laistigh den tréimhse a scrúdaítear, agus `source` atá ar liosta ceadaithe (`client`, `embedded`, nó `audio-bridge`) a iompar; tá `confidence` réamhshocraithe ar `1` agus caithfidh sé fanacht idir `0` agus `1`. Collapsaítear cues dúblacha beacht. Ní thosaíonn OmniRoute trascríobh ó na meiteadata seo: cóipeann cues bailí isteach sa toradh atá curtha síos leis an gcóimheas, muinín, agus eatramh, agus déantar iad a chur i láthair mar bhreathnóireachtaí neamhiontaofa in éineacht le hiontrálacha na gcreathanna. Cuireadh téacs neamhbhailí, lasmuigh de raon, nó gan fianaise ar ceal seachas a mheascadh isteach sa sruth caption. Normalizes an dá chainéal transcript i gcorp an iarratais an fianaise a sholáthraítear go `client`, lena n-áirítear lipéid `embedded` nó `audio-bridge` a dhearbhaigh tú féin. Ní féidir ach oiriúnóir atá ag an freastalaí na lipéid iontaofa sin a shannadh trí argóint `trustedSource` atá dírithe ar chód; ní féidir le réimse JSON iarratais teacht ar an argóint sin. Fanann téacs trascríobh mar ábhar neamhiontaofa atá bunaithe ar mheán, beag beann ar a fianaise, agus níor chóir dó riamh údarú a chinneadh.

Féadfaidh glaoiteoir ardleibhéil `audioTranscript` a sholáthar do na físeanna céanna; déantar é a chóireáil mar théacs a sholáthraigh an cliant, ní fianaise ar trascríobh an freastalaí. Ritheann an seam comhoiriúnachta breathnóireachtaí amhairc agus guth faoi dháta deiridh amháin agus comhartha abort, ordóidh siad ar líne ama coiteann, collapsoidh dúblacha beacht, agus tuairiscíonn siad toradh páirteach nuair a éiríonn le taobh amháin amháin. Déantar `audioTranscript` neamhbhailí a laghdú go dtí an toradh páirteach sin — coimeádtar an cur síos amhairc agus taifeadann an craobh guth cód teip shanraithe — seachas teip a chur ar an bhfíseán iomlán. Coimeádtar ar fáil in aghaidh na craobh, an bratach páirteach, agus na cóid teip shanraithe sa toradh atá curtha síos, sna meiteadata cosanta (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), i meiteadata an chache toradh, agus i gcuntais comhoiriúnachta na droichid. Ní gníomhóidh an cosán droichid físe réamhshocrú guth-go-téacs nó íoslódáil cóip meán eile; gan an track soiléir sin, fanann sé ach físe.

**Coinneáil trascríobh (#12150 P1).** Cuireann sé seo i bhfeidhm go huathoibríoch nuair a dhéanann an Droichid Físe (féin opt-in) cue trascríobh a ghintear — níl bratach coinneála ar leith. Nuair a dhéanann iarratas aon cue trascríobh a ghintear (a dúradh ag an nglaoiteoir `transcript` nó `audioTranscript` comhoiriúnaithe), marcann an cosantóir é `videoBridgeObserved` agus táirgeann sé scáth deargtha den cur síos físe — tá léiriú comhoiriúnach ann ina gcuirtear comhlacht téacs saor gach cue in ionad `[redacted-video-transcript]`, a tógadh trí shubstitú na réimse cue struchtúrtha sula gcuirtear an sreang le chéile (ní trí pharsáil an téacs flatten, mar sin ní féidir le hábhar cue — contrártha nó gnáth, lena n-áirítear comhlachtaí a bhfuil `]` acu mar ` [inaudible]`/`[music]` — maireachtáil). Athraíonn an corp iarratais log gcallaigh a choinníonn gach cuid téacs a dhéantar as físe don scáth deargtha sin, comhoiriúnaithe de réir comhoiriúnachta ábhar; athléirítear an t-anchóir `fullText` ó phacáiste cosanta réamhchruinnithe, mar sin fanann an comhoiriúnacht fós ag éirí tar éis cosantóirí slabhra níos déanaí (na maskers PII agus creidiúnachta, tosaíochtaí 10/95) a scríobh an téacs cur síos in áit agus tar éis don chóras-prompt/handoff/injection cuimhne a athshaoil an t-aistriúchán teachtaireachta. Fanann an corp a sheoltar suas chuig an múnla gan athrú. Ní líonann iarratas breathnóireachta aon chuimhne buan (tá an t-aistriúchán a dhéantar as iarratais agus freagraí araon scipeáilte), mar sin ní féidir le freagra an mhúnla a thuar téacs trascríobh isteach i gCuimhne.

**Réimsí físe amh (#12430).** Nuair a bhíonn an droichid gníomhach agus nach bhfuil tacaíocht físe dúchais ar eolas nó ar fáil, gníomhóidh réimsí `transcript`/`audioTranscript` ar an gcaoi chéanna `videoBridgeObserved`, fiú tar éis teip cur síos nó teorainn `maxVideos`. Comhoibríonn `null` agus sreangáin folmha; ní comhoibríonn réimsí atá as láthair agus meiteadata neamhfhíse. Déanann cóipeanna coimeádta na réimsí seo a dhíscaoileadh nó an t-iarratas a eisiamh, agus scipeáiltear cacha/ Cuimhne. Fanann an pacáiste soláthraithe gan athrú.

Úsáideann cóipeanna coimeádta breise an comhartha iarratais breathnóireachta céanna. Athraíonn an snapshot iarratais chliant pre-guardrail, an iarratas atá ag fanacht i gcuimhne, agus an log iarratais a dhiúltaíodh go luath na réimsí trascríobh i bpáirteanna físe; déantar prompts sreang a shintéisiú ag céimeanna pipelíne agus handoff comhoiriúnachta a dhíscaoileadh ag an sink corp iarratais a choimeád. Déanann an marcóir `video_content_removed` a choinneáil go n-éireoidh le `previous_response_id` a leanúint go dúnta seachas téacs a aththógáil a cuireadh ar ceal go d'aon chuspóir. Má chailleann iarratas breathnóireachta a scáth redacted in aghaidh na páirte, sula ndéantar logáil, nó fiú má theipeann ar cheann de na scáthanna físe a comhoiriúnú tar éis athruithe iarratais níos déanaí, eisiítear an corp iarratais coimeádta go hiomlán seachas coimeád a trascríobh páirteach redacted.

Maidir le hiarratas atá feicthe, d'fhéadfadh freagra samhail aon chuid den
trascríobh a lua gan teorainn chláraithe struchtúrtha. Mar sin, cuireadh marc
eisiatais in ionad `responseBody` a chaomhnófar; ní choinnítear an t-ealaín
mionsonraithe (a d'fhéadfadh comhoibrithe/gníomhaireachtaí suas agus sliseanna sruthanna
a áireamh). Déanann cásanna le haghaidh brí, idempotency, agus ath-imirt réasúnaíochta
léamh agus scríobh a sheachaint don iarratas sin. Fanann iarratas an soláthraí agus
freagra infheicthe don chliant gan athrú. Déantar na byteanna tosaigh keepalive a
dhrainiú ón mbufair sealadach nuair a bhíonn an t-ealaín mionsonraithe eisiata. Tuairiscíonn
rabhadh EventStream mífhoirméad Kiro ach an comhoibriú byte, riamh a áireamh a
chomhoibriú nó earráid amh an parser JSON.
Ní dhéanann sé éileamh go bhfuil gach diagnóis soláthraí/plugin neamhchomhoiriúnach
curtha faoi scrúdú; tá an sweep níos leithne a chaomhnaítear-sink rianaithe i #11658.

Is bunús cache ar leith é an timthriall `/api/modality-bridge/video/drilldown`,
a bhfuil aitheantas timthriall/teicneolaíochta ag baint leis. Éilíonn gach gníomh
ID príomhchoinníoll opaca caighdeánach. Sula gcuirtear glaoiteoir táirgeachta ar
fhoirm, caithfidh sé an ID sin a bhaint as an gconradh aitheanta agus ní mór dó
luach a roghnaíodh ag an gcliant a chur ar aghaidh riamh. Ceanglaíonn eochracha
cache an príomhchoinníoll le seisiúin caighdeánacha agus IDanna tagtha físe, stórann
nó amháin a eochracha a dhéantar as SHA-256, agus cuireann sé teorainneacha léitheoireachta
agus scriosadh ar an bpríomhchoinníoll céanna. Stórann an cache ar a mhéad 16
fráma JPEG a dhéantar as gach iontráil, a éiríonn as deich nóiméad, agus tacaíonn
sé le léitheoirí teoranta `start`/`end` nó scriosadh seisiúin soiléir.

Tá gach príomhchoinníoll teoranta do 16 iontráil agus 64 MiB de shonraí JPEG
caighdeánacha. Níl na teorainneacha sin neamhspleácha ón gcuibhreán domhanda 64-iontráil/256
MiB: brú cota an phríomhchoinníoll a chuireann as an iontrálacha is lú-úsáid
roimh go gcuirfear as an LRU domhanda san áireamh. Déantar iontrálacha a éirí as
ó chuntais an phríomhchoinníoll agus an domhain ar ghníomhaíocht an cache, agus
ní dhéanann cealú agus teip bailíocht a chur ar iontráil páirteach.

Déanann an cache neamh-cháineadh ar Bhunús Base64 neamhchaighdeánach, padding
iomarcach, meáin neamh-JPEG, JPEGanna mífhoirméadacha nó gearrtha, agus JPEGanna
a chruthaíonn rabhadh le linn `sharp` deighilt iomlán teoranta. Déanann sé
athchóiriú ar gach íomhá a ghlactar mar JPEG caighdeánach, faigheann sé leathan agus
airde ó na byteanna a dhéantar as an gcliant seachas muinín a bheith ag brath ar
na réimsí glaoiteora, agus cuireann sé aon byteanna polyglot atá ag leanúint
ar aghaidh as an áireamh seachas iad a choinneáil. Ní dhéantar ach an bufer comhoiriúnach
comhoiriúnach a ghearradh ar na cotaí. Áirítear an teorainn sreang JSON le
hómaigh Base64 don 32 MiB de ch nóiméad a dhéantar as. Gach
derivation stóráilte a thaifeadann a bhformáid JPEG bailí/roghna, polasaí samplála,
leagan derivation, am cruthaithe, hash ábhar a ríomhaítear ag an freastalaí, agus
hash tagartha tuismitheora a choinneáil chomh maith le hash ábhar tuismitheora an
glaoiteora iontaofa. Déantar cealú a sheiceáil idir céimeanna asynchrónacha
deighilte/hash sula gcuirtear an cache comhoiriúnach.

Athúsáidíonn an táirgeoir táirgeachta frámaí bróicé a dhéantar cheana ach amháin
tar éis anailís amhairc rathúil, gan aon íoslódáil/aistriú físe eile. Éilíonn sé
`modalityBridgeVideoDrilldownEnabled=true`, `drilldown: true` do gach cuid, agus
ID taifead API aitheanta. Ní dhéanann luachanna príomhchoinníoll/seisiúin a
fhógraítear ag an gcliant úinéireacht a bhunú. Gan na trí choinníoll go léir,
ní dhéanann sé hash, athmhéadaigh ná coinnigh frámaí breise. Cuireann teip coimhdeachta
an freagra amhairc in úsáid. Seachnaíonn iarratais aontaithe an cache toradh
físe iomláin ionas nach gcuirtear freagraí cached ar ais.

Nochtann freagraí JSON agus SSE rathúla ar a mhéad ceithre láimhseáil opaca
i gceannaire `x-omniroute-video-drilldown` teoranta. Is féidir le foinsí brabhsála
údaraithe an ceannaire sin a léamh gan polasaí foinsí CORS a leathnú. Úsáideann
láimhseálacha nua `v1.<32-byte random base64url token>`, agus coinníonn an
clár ach a n-hashes SHA-256. Glacann an parser léitheora/ceannaire freisin le
láimhseálacha 64-hex sean. Is é an tomhaltóir poiblí aitheanta
`GET /api/v1/video-bridge/drilldown?handle=...`, atá gafa go neamhspleách le
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Cuireann briseadh brónach
persisted falsa rochtain ar ceal fiú nuair a bhíonn an `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED`
env fallback gníomhach. Tá an coinníoll coimhdeachta táirgeachta ag an
fallback sean `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Tá an dá fallback
réamhshocraithe as.

Baineann an tomhaltóir úinéireacht as an eochair aitheanta, cuireann sé polasaí
eochair i bhfeidhm, agus tugann sé an 404 céanna do láimhseálacha anaithnid,
tréimhseacha agus láimhseálacha eochair eile. Glacann sé
`variant=preview|standard|detail` (toisí JPEG uasta 320/640/1280, riamh
ní dhéantar suas), `limit=1..8` (nó an sean-alias `frames`, riamh an dá),
`page` bunaithe ar nialas, agus sochair roghnach `start`/`end` soicind.
Déanann eochracha ceiste dúblacha agus fuinneoga fócas a chaitheamh. Tá gach
variant a dtuairiscítear ag baint le hash a ábhar fíor agus mionsonraí
réitigh, nasctha leis an gcuimhne a chaomhnaítear. Déantar variants a bhaint
ar léamh seachas a stóráil mar chóipeanna breise a chaomhnaítear. Tá an freagra
JSON, lena n-áirítear Base64/envelope, teoranta do 32 MiB; cuireann leathanach
mór 413 ar ais agus caithfidh an cliant iarratas a dhéanamh ar níos lú
frámaí. Déanann léamha seiceáil cealú timpeall gach athmhéadú agus
seiceáil ar bhailíocht láimhseála sula gcuirtear ar ais. Is idempotent é `DELETE`
trí úinéir; cuireann scriosadh nó éag TTTL an foinse a chaomhnaítear agus
cuntasaíocht úsáide ar fáil.

Is ábhar áitiúil é an stór comhoibrithe: éiríonn láimhseálacha ar aththosú
agus ní féidir iad a aistriú idir próisis OmniRoute neamhspleácha. Nochtann
staitisticí bainistíochta polasaí coimhdeachta/uaigneach éifeachtach agus
iontrálacha/byteanna a chaomhnaítear go hiondúil, riamh meáin, tagairtí,
IDanna príomhchoinníoll nó láimhseálacha. Taispeánann painéal socruithe
an Físe na luachanna sin agus is féidir leis an dá chluas aontaithe a chaomhnú.
Ní fianaise é an doiciméad seo maidir le táirgeadh beo nó cur chun cinn; tá
glacadh le samhail réalaíoch rianaithe go neamhspleách.

Frames atá marcáilte go seicheamhach leis an múnla Video atá cumraithe. Oidhreacht folamh Video an socrú Vision; má tá an dá rud folamh, roghnaíonn an auto-router Vision an múnla éifeachtach atá in ann fís. Cuireann marcanna rathúla an chuid bhunaidh in ionad le réamhfhocal seasta `[Video description:` a chuireann marc ar an téacs mar fhíor-obair atá bunaithe ar mheán agus a insíonn do mhúnlaí anuas gan na treoracha atá le fáil sa mheán a leanúint. Cuireann eochracha cacha marcanna frame isteach na byteanna JPEG, an t-iarratas, an t-am, agus an múnla éifeachtach; ní dhéanann ach marcanna rathúla a chach. Coinníonn iontrálacha cacha an múnla táirgeora rathúil, lena n-áirítear múnla cúnaimh; tuairiscíonn an droichead `mixed` nuair a tháinig frames éagsúla ó mhúnlaí éagsúla. Úsáideann buille cacha sin a shaintréithe táirgeora seachas é a athainmniú mar an plean bealaigh atá iarrtha. Tá an cacha toradh ar an bhfíseán iomlán bunaithe ar gach ionchur a athraíonn an toradh — iarratas, múnla éifeachtach, polasaí samplála, comhoibriú frame, mód anailíse sémantach, an fingerprint SHA-256 de na leideanna fócasaithe normalaithe, fuinneog fócas, `transcript`, `audioTranscript`, agus an bratach gníomhaireachta — mar sin tá athrú ar aon cheann de na dimenzí sin ina chaillteanas cacha, riamh athúsáid seana. Tá leagan, leibhéal, agus comhoibriú comhoibrithe an pholasaí de-dúblála amhairc soiléir sa eochair cacha toradh agus na meiteashonraí; mar sin ní féidir le hathrú polasaí seana cur síos ar an bhfíseán iomlán a athúsáid. Coinníonn meiteashonraí cacha toradh v4 an mód agus an fingerprint, riamh an tasc úsáideora amh. Tuairiscíonn meiteashonraí garda an dá mhód anailíse atá iarrtha agus éifeachtach; tuairiscítear mód `focused` atá iarrtha gan téacs úsáideora inúsáidte mar `full` go héifeachtach.

Extractann an garda gach cuid físe atá tacaíocht aige ach ní dhéanann sé cur síos ar níos mó ná `modalityBridgeVideoMaxVideos`. Maidir le sprioc a bhfuil cruthúnas ann go bhfuil `supportsVideo === false`, éiríonn físeáin theipte agus os cionn teorainneacha mar mharcóirí téacs sábháilte soiléir ionas nach maireann físeán amh. Nuair atá an cumas anaithnid, fanann na codanna sin neamhghafa. Éiríonn spriocanna le `supportsVideo === true` an droichead a shárú. Scaipeann comhartha gníomhachtúcháin iarratais an chliaint tríd an íoslódáil, an gnáthchórais bróicéir, fo-chórais, agus glaonna marcanna; stopann gníomhachtaí idir físeáin agus ní theipeann riamh ar oscailt go meán amh.

Tá socruithe rith bunaithe ar DB agus bailí le Zod:

| Eochair                             | Réamhshocrú | Raon / iompar                                                                                                                      |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Rith roghnach, opt-in                                                                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | Coimeádann `full` marcanna ginearálta; úsáideann `focused` comhoibriú teoranta, neamhiontaofa le comhoibriú an úsáideora is déanaí |
| `modalityBridgeVideoModel`          | `""`        | Oidhreacht an múnla Droichead Vision                                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                               |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, nó `segment_aware` comhoibrithe; teipeanna braiteoir ar ais go `uniform`                                 |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                                |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                     |

Tá luachanna ama teipte Video a chaomhnófar os cionn 120 soicind clamped chuig an spriocdháta bróicéir; cuireadh cosc ar shocrú nua a scríobh os cionn an teorainn sin. Éilíonn `GET /api/modality-bridge/video/runtime` áiteanna áitiúla muiníneacha a bhfuil stampáilte ar a gcuirtear roimh fhíorú nó próbáil rith, ansin éilíonn sé údarás bainistíochta. Tugann sé ar ais ach `available`, leaganacha FFmpeg/ffprobe glan, agus cúis shocraithe nuair nach bhfuil an rith ar fáil. Ní hé an pointe extraction inmheánach API uaslódála poiblí: cuireann sásamh an gnáthchórais `503` le `Retry-After`, cuireann disconneacht glao `499`, agus cuireann an spriocdháta bróicéir socraithe `504`. Cuireann freagraí aistrithe `video->text;model=<visionModel>;parts=<videos>` leis an gceannlínte lárnach `x-omniroute-modality-bridge` gan na codanna Vision nó Audio a bhaint.

### PII Masker (`piiMasker.ts`)

Ritheann sé ar **an dá** chéim.

- **`preCall`** a dhéanann cóip den phacáiste, siúlann sé `system`, `messages`, `input`, agus `prompt` (lena n-áirítear míreanna sreang ghránna), agus cuireann sé `processPII()` (ó `@/shared/utils/inputSanitizer`) i bhfeidhm ar na réimsí téacs `content`/`text`. Nuair atá `PII_REDACTION_ENABLED=true`, déantar PII a bhrú ar ais sa phacáiste amach. Tá sé seo neamhspleách ar `INPUT_SANITIZER_MODE` (a rialaíonn polasaí ionchur-insteallta amháin). Nuair atá an brú ar ais as, coimeádann an glao comhoibriú na comhoibriú gan ábhar a athscríobh.
- **`postCall`** a dhéanann cóip dhomhain den fhreagra, ritheann sé `sanitizePIIResponse()` agus an masker cruth-API na Freagraí (`maskResponsesOutput` — clúdaíonn sé `output_text` agus `output[].content[].text`). Má tharlaíonn aon bhrú ar ais, cuireann an freagra athraithe an t-údarás bunaidh in ionad.

Ní dhéanann an garda bac; ní dhéanann sé ach miontuairisc a dhéanamh (`meta.detections`, `meta.redacted`) nó athscríobh.

### Prompt Injection (`promptInjection.ts`)

Aithníonn sé struchtúir frithsheasmhacha i dtéacs a sholáthraíonn an úsáideoir agus cuireann sé an polasaí atá cumraithe i bhfeidhm. Tá iompar tiomáinte ag athróg timpeallachta agus roghanna conraitheora:

| Socruithe       | Athróg env                                                                                           | Réamhshocrú | Éifeacht                                                                                                                                                                                             |
| --------------- | ---------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gníomhachtaithe | `INPUT_SANITIZER_ENABLED`                                                                            | `true`      | Nuair atá sé `false`, cuireann an guardrail gearradh.                                                                                                                                                |
| Mód             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`      | Polasaí insteallta: `block`, `warn`, nó `log`. (Tugtar `redact` le haghaidh comhoiriúnachta ach ní dhéanann sé **ní** téacs insteallta a bhaint; rialtar athscríobh PII le `PII_REDACTION_ENABLED`.) |
| Tairseach bloc  | Rogha `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | Ísealchaighdeán is gá chun bloc a dhéanamh. Is observ-only é Meán ag an réamhshocrú.                                                                                                                 |

**Tosaíocht mód** (`getMode`): glaoiteoir `options.mode` →
`INJECTION_GUARD_MODE` **sainmhíniú ar ghné DB** (Dashboard → Socruithe →
Gnéithe) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Mar sin, buaileann an sainmhíniú ar an dashboard an athróg env, mar sin rialíonn an UI Gnéithe an guard a reáchtáil go beo (gan aththosú). Tá léamh DB sábháilte ó thaobh teipeanna de:
má tharlaíonn earráid, téann an guard ar ais chuig an iompar atá bunaithe ar an env, agus nuair nach bhfuil aon
sainmhíniú socraithe tá iompar comhoiriúnach le réiteach amháin env.

Foinsí braite:

1. `sanitizeRequest()` ó `@/shared/utils/inputSanitizer` (sainbhreithneoir roinnte
   a úsáidtear in áiteanna eile sa phíblíne).
2. `DEFAULT_GUARD_PATTERNS` atá comhoiriúnach (faoi láthair `system_override_inline` agus
   `markdown_system_block`, an dá cheann le déine `high`).
3. Roghnach `customPatterns` a cuireadh isteach trí roghanna an tógála (sraitheanna, regex,
   nó `{ name, pattern, severity }` taifid).

Nuair atá `mode === "block"` **agus** go bhfuil ar a laghad braite amháin ag comhlíonadh an déine
tairseach, cuireann `preCall` ar ais `{ block: true, message: "Request rejected:
suspicious content detected" }`. I módanna `warn`/`log` logálann an guardrail ach
ceadaíonn an glao. Tá an cabhair roinnte `evaluatePromptInjection()` ar fáil freisin
do na glaoiteoirí a theastaíonn uathu chun luachanna a mheas gan dul tríd an gclár.

**Sceideal scannáin (v3.8.20):** ní dhéanann an braiteoir ach iniúchadh ar an **16 KB**
chéad de téacs luachanna comhoibrithe — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) i
`src/shared/utils/inputSanitizer.ts`. Déanann `detectInjection()` agus
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` sula rithtear
an timthriall patrún. Suíonn treoracha insteallta gar do bharr ionchuir, mar sin cuireann sé
srian ar CPU/GC regex ar phacáistí il-hundred-KB gan laige a chur ar bhraite (cf.
#3932, #4041).

### Masker Creidiúnachtaí (`credentialMasker.ts`)

Oibríonn sé ar **an dá** chéim, deiridh sa shlabhra réamhshocraithe (tosaíocht `95`). Déanann sé
táirgí eochair API / patrún rún a bhfuil cáil orthu a bhaint ó phacáiste amach (ábhar
teachtaire, argóintí glao uirlis, torthaí uirlis) **agus** freagra an soláthraí, mar sin
ní dhéantar creidiúnacht a ghabháil isteach i luach (nó a chur ar ais ag torthaí uirlis) a sceitheadh
go dtí an soláthraí uachtarach nó ar ais chuig an gcliant.

- **Opt-in amháin**, an comhoibriú céanna le redaction PII (Riail Chrua #20-íseal):
  díghníomhachtaithe mura bhfuil `settings.credentialRedactionEnabled === true` **nó**
  `CREDENTIAL_REDACTION_ENABLED=true`. Leis sin as, is no-op é an guardrail —
  ní dhéanann sé bloc riamh agus ní scríobhann sé riamh.
- Walks `redactCredentials()` an crann iomlán pacáiste/freagra (`walkValue()`,
  sábháilte ó thrua, sábháilte timthriall trí `WeakSet`) agus cuireann sé comhoiriúnachtaí in ionad
  le háit comhoiriúnach `[REDACTED:<type>]`, ag clónáil ach na craobhacha a d'athraigh i ndáiríre.
- Clúdaíonn `CREDENTIAL_PATTERNS` eochracha soláthraithe LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), toic VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), eochracha íocaíochta (Stripe, Square), eochracha
  scamall (eochair rochtana AWS, Twilio, SendGrid, Mailgun), eochracha príobháideacha / JWTanna,
  sreanganna ceangailte a bhfuil creidiúnachtaí iontu (`mongodb://user:pass@...`, srl.), agus
  patrún ginearálta `Authorization`/`x-api-key`/`api-key`/`apikey` luach.
- Déantar eochracha atá shaped mar cheannlínte (`authorization`, `x-api-key`, `api-key`,
  `apikey`) a bhaint go struchtúrtha (luach amháin, coimeádann réamhshocrú mar
  `Bearer `/`Basic `) seachas trí regex téacs ginearálta.
- Ní dhéanann an guardrail bloc riamh; ní dhéanann sé ach scríobh ( `modifiedPayload` /
  `modifiedResponse`) agus a chur in eagar (`meta.credentialsRedacted`, `meta.count`).

Guard frith-athraithe: `tests/unit/credential-masker-guardrail.test.ts`.

## Conradh Bunúsach (`base.ts`)

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
  block?: boolean; // cuireann true an slabhra ar stop
  message?: string; // taispeántar nuair a bhíonn blocáil
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // a dhoirteadh ag preCall chun an iarratas a athscríobh
  modifiedResponse?: TValue; // a dhoirteadh ag postCall chun an freagra a athscríobh
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

Tugann guardrail "gan athrú" le tuiscint trí `void`, `{}`, nó
`{ block: false }` a thabhairt ar ais. Cuireann a bheith ag tabhairt `modifiedPayload`/`modifiedResponse` in ionad
an luach a shreabhann tríd an slabhra do guardrails anuas.
`signal?: AbortSignal` a thógann saol an gcallaire isteach i guardrails. Is é an t-aistriú iarratais an eisceacht fail-open a bhí beartaithe: stopann na droichid meán oibriú agus glanann siad suas gan an meán amh a chur ar ais chuig sprioc a bhfuil a fhios nach dtacaíonn sé leis.

## Clárlann (`registry.ts`)

Nochtann an t-aonán `guardrailRegistry`:

- `register(guardrail)` — cuireann sé garda-ráille leis (nó cuireann sé ceann eile ina áit de réir ainm normalaithe) agus ath-shórtálann sé de réir `priority` ardaitheach.
- `clear()` / `list()` — cúntóirí riaracháin.
- `runPreCallHooks(payload, context)` — déanann sé athrá ar gharda-ráillí gníomhacha, snáitheann sé an t-ualach tríd an `modifiedPayload`, agus stopann sé ar an gcéad `block: true`.
- `runPostCallHooks(response, context)` — an sreabhadh céanna ar thaobh an fhreagra.
- `resetGuardrailsForTests({ registerDefaults })` — glanann sé an staid agus, go roghnach, athchláraíonn sé na réamhshocruithe le haghaidh aonrú tástála glan.

Tugann an dá reathaí `{ blocked, payload|response, results, guardrail?, message? }` ar ais, áit a bhfuil `results` ina eagar de thaifid `GuardrailExecutionResult` a chuimsíonn réimsí `blocked`, `skipped`, `modified`, `error`, agus `meta` in aghaidh an gharda-ráille, atá úsáideach le haghaidh rianú.

### Garda-ráillí a Dhíchumasú in aghaidh an Iarratais

Déanann `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` liosta dí-dhúbailte d'ainmneacha garda-ráillí a bhailiú ar cheart iad a scipeáil don iarratas reatha. Foinsí (gach ceann roghnach, gach ceann cumaiscthe):

- `apiKeyInfo.disabledGuardrails`
- Comhlacht iarratais `disabledGuardrails` (barrleibhéal)
- Comhlacht iarratais `metadata.disabledGuardrails`
- Ceanntásc `x-omniroute-disabled-guardrails` (nó an ceann oidhreachta `x-disabled-guardrails`)

Féadfaidh na luachanna a bheith ina n-eagar teaghrán nó ina dteaghrán scartha le camóg; déantar ainmneacha a normalú go cás íochtair kebab-case (`pii_masker` → `pii-masker`). Cuirtear an toradh tríd an `context.disabledGuardrails` chuig an gclárlann, a scipeálann garda-ráillí meaitseála (`skipped: true` i `results`).

## Ord Feidhmithe

Maidir le gach iarratas a théann trí `src/sse/handlers/chat.ts` agus
`open-sse/handlers/chatCore.ts`:

1.  Tógann `resolveDisabledGuardrails(...)` an liosta scipeála ón eochair API, ón gcorp,
    agus ó na ceanntásca.
2.  Ritheann `guardrailRegistry.runPreCallHooks(body, ctx)` na ráillí cosanta in ord tosaíochta ardaitheach:
    - Déantar ráillí cosanta díchumasaithe a thaifeadadh mar `skipped`.
    - Féadfaidh `preCall` gach ráille cosanta an t-ualach pá a athscríobh trí `modifiedPayload`.
    - Gearrann an chéad `block: true` an slabhra agus cuireann an láimhseálaí freagra diúltaithe ráille cosanta ar ais.
3.  Sreabhann an t-ualach pá (a d'fhéadfadh a bheith athscríofa) isteach i ródú teaglama agus i seoladh in aghaidh an tsrutha.
4.  Tar éis an freagra a chur le chéile, ritheann `guardrailRegistry.runPostCallHooks(...)`
    an slabhra céanna ar an bhfreagra. Scaoileann `block: true` an freagra in aghaidh an tsrutha anseo.

Déantar ráillí cosanta a chaitheann earráid a thaifeadadh le `error: <message>` agus a logáil trí
`logger.warn`, ach leanann an slabhra ar aghaidh — teip-oscailte de réir dearaidh.

## Cumraíocht

Athróga comhshaoil a léann na ráillí cosanta ionsuite:

| Variable                              | Used by                   | Effect                                                                                                          |
| :------------------------------------ | :------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Socraigh `false` chun braite a dhíchumasú go hiomlán.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Beartas insteallta: `warn`, `block`, nó `log`. Ní athscríobhann an luach oidhreachta `redact` téacs insteallta. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mód don gharda insteallta; bratach gné DB freisin a **sháraíonn** na hathróga comhshaoil (DB > ENV).            |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Íos-déine a dhiúltaíonn `MODE=block`: `high` (réamhshocrú), `medium`, nó `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Ailias oidhreachta do `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Nuair atá `true`, déantar PII an iarratais a eagrú (neamhspleách ar mhodh insteallta).                          |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Rialaíonn sé iompar an mhascóra ar thaobh an fhreagra.                                                          |

Léann ráillí cosanta an Modality Bridge cumraíocht reatha ón stór socruithe atá bunaithe ar DB
(`getSettings()`), ní ó athróga comhshaoil. Is iad príomheochracha Vision ná
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, agus
`modalityBridgeCacheMaxEntries`. Ní ghlactar leis na heochracha oidhreachta
`visionBridge*` ach amháin mar an t-aischur léitheoireachta aon-timthriallta
doiciméadaithe; úsáideann scríbhinní painéil na príomheochracha. Tá na réamhshocruithe agus an
réiteoir aischuir lonnaithe i `src/shared/constants/modalityBridgeDefaults.ts`, le
tairisigh oidhreachta coinnithe i `src/shared/constants/visionBridgeDefaults.ts`.

Úsáideann Fuaime `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, agus `modalityBridgeAudioMaxClips`, chomh maith leis na socruithe
comhroinnte `modalityBridgeCache*`. Níl aon aischur eochrach oidhreachta ag Fuaime toisc gur
tugadh na heochracha seo isteach le scéimre an Modality Bridge.

Úsáideann Físeán `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, agus
`modalityBridgeVideoTimeout`, chomh maith leis na socruithe comhroinnte `modalityBridgeCache*`.
Tá sé díchumasaithe de réir réamhshocraithe toisc gur spleáchais oibríochtúla roghnacha iad
FFmpeg/ffprobe agus go gcuireann fotheidealú fráma moill agus costas samhail leis.

## Cosaintí Saincheaptha

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

Céimeanna:

1.  Cruthaigh `src/lib/guardrails/myGuardrail.ts` ag leathnú `BaseGuardrail`.
2.  Cuir `preCall` agus/nó `postCall` i bhfeidhm.
3.  Cláraigh ag am iompórtála (brúigh ó `registerDefaultGuardrails`) nó glaoigh ar `guardrailRegistry.register(...)` ag am rite — cuirfidh an clárlann aon chosaint roimhe seo leis an ainm normalaithe céanna in ionad.
4.  Cuir tástálacha leis faoi `tests/unit/` (samplaí atá ann cheana:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Tástáil

Úsáid `resetGuardrailsForTests()` idir tástálacha chun tús a chur le staid aitheanta. Cuir `{ registerDefaults: false }` ar aghaidh chun tús a chur le clárlann fholamh agus chun na cosaintí atá á dtástáil amháin a chlárú. Glacann Vision Bridge le hinstealladh spleáchais (`deps.getSettings`, `deps.callVisionModel`); nochtann Audio Bridge na hailt chomhionanna le haghaidh socruithe, cumais, roghnú samhail STT, seiceálacha dintiúir, agus trascríobh. Is féidir le tástálacha an dá shreabhadh a fheidhmiú dá bhrí sin gan rochtain ar DB nó ar líonra.

## Féach Freisin

- `src/lib/guardrails/` — cur i bhfeidhm
- `src/shared/utils/inputSanitizer.ts` — brathadóir comhroinnte a chumhachtaíonn instealladh pras agus mascáil PII
- `src/shared/constants/visionBridgeDefaults.ts` — réamhshocruithe Vision Bridge agus liosta samhlacha droichid éigeantacha
- `src/shared/constants/modalityBridgeDefaults.ts` — réamhshocruithe comhroinnte ama rite Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ciseal ortagánach (scoradán ciorcaid, fuarú)
- `docs/reference/ENVIRONMENT.md` — tagairt iomlán do athróga comhshaoil

## Clúdach bealaigh cosanta insteallta & foireann dhearg (Céim 8 · Bloc D)

Clúdaíonn an cosantóir insteallta (`createInjectionGuard` / `withInjectionGuard`) gach bealach a ghlacann le prasanna úsáideora. Tugann sé ómós do `INJECTION_GUARD_MODE` (réamhshocrú `warn` = logáil amháin; `block` = seolann sé ar ais HTTP 400 `SECURITY_001`).

| Cineál                 | Bealaí                                                                                                                                               | Mód réamhshocraithe |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Téacs (atá ann cheana) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Giniúnach              | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Sonraí                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Clúdaíonn eastóscadh téacs (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Foireann dhearg (oíche, `nightly-llm-security.yml`):** fíoraíonn promptfoo go gcuireann gach bealach bac ar an gcorp OWASP-LLM i `INJECTION_GUARD_MODE=block`; ritheann garak taiscéalaithe (scipeann sé gan rún). Cuirtear `moderations` san áireamh ar mhaithe le comhsheasmhacht — is féidir le hoibreoirí i mód bloc é a dhíolmhú trí `resolveDisabledGuardrails`.

Tá dhá phost ag an sreabhadh oibre oíche (`.github/workflows/nightly-llm-security.yml`, cron + seoladh láimhe):

- **`promptfoo-guard` (blocáil)** — ritheann sé `promptfoo eval -c promptfooconfig.yaml` le `INJECTION_GUARD_MODE=block`. Dearbhaíonn gach cás frithsheasmhach (m.sh. "déan neamhaird de gach treoir roimhe seo…", jailbreaks stíl DAN) go bhfuil `error.code === "SECURITY_001"` sa fhreagra, i.e. gur dhiúltaigh an cosantóir an t-iarratas i ndáiríre.
- **`garak` (comhairleach)** — ritheann sé garak `--probes promptinject,dan,leakreplay` i gcoinne cás áitiúil OmniRoute (`http://localhost:20128/v1`). Geataithe ar rún soláthraí (`PROMPTFOO_PROVIDER_KEY`); scipeann sé go galánta agus tá an iarmhír `|| true` leis, ionas go dtuairiscíonn sé gan teip CI.

Clúdaíonn clúdach an chúntóra cosanta (`createInjectionGuard` / `withInjectionGuard`) gach bealach `/v1` a iompraíonn prasanna; tarraingítear téacs an phrais ó `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ag `extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
