# Guardrails (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Totuuden lähde:** `src/lib/guardrails/`
> **Päivitetty viimeksi:** 2026-08-29 — v3.8.51 (Video Bridgen transkription alkuperän ilmoittaa kutsuja,
> eikä palvelin vielä varmista sitä — selvennetty kohdan #11661 mukaisesti)

Suojaukset toteuttavat turvallisuus-, käytäntö- ja sisältömuunnokset OmniRouten
ja ylävirran palveluntarjoajien välisellä rajalla. Kukin suojaus voi tarkastaa
(ja valinnaisesti hylätä, muuntaa tai annotoida) pyyntöjen hyötykuormia
(`preCall`) ja ylävirran vastauksia (`postCall`).

Järjestelmä on **häiriötilanteessa salliva**: jos suojaus aiheuttaa poikkeuksen
suorituksen aikana, rekisteri kirjaa virheen ja jatkaa seuraavaan suojaukseen
sen sijaan, että pyyntö epäonnistuisi. Estäminen on aina nimenomainen päätös
(`block: true`), ei koskaan vahinko.

## Sisäänrakennetut Guardrails

Rekisteri lataa automaattisesti kuusi guardrailia prioriteettijärjestyksessä tuonnin yhteydessä
(ks. `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteetti | Nimi                | Vaihe(t)       | Tiedosto              |
| ------------ | ------------------- | -------------- | --------------------- |
| `5`          | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`          | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`          | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`         | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`         | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`         | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Alhaisemmat prioriteettinumerot suoritetaan **ensin**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Kaappaa kuvaa sisältävät pyynnöt, jotka on suunnattu **ei-näkömalleille**, ja joko
ohjaa koko pyynnön näkökykyiseen malliin tai korvataan kuvan osat tekstikuvauksilla, jotka on tuottanut konfiguroitava näkömalli ennen
ylävirran kutsua. Tämä mahdollistaa tekstipohjaisten tarjoajien käsitellä
monimuotoisia kuormia läpinäkyvästi.

Virta:

1. Ohita, jos kohdemalli tukee jo näköä (ellei se ilmesty
   pakotettujen siltojen listalle `isVisionBridgeForcedModel`).
2. Poimi kuvaosat käyttämällä `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), joka delegoi **yhtenäiselle media
   tunnistimelle** `detectMediaParts()` tiedostossa `open-sse/utils/mediaParts.ts` — ainoa totuuslähde, jota jaetaan yhdistelmäyhteensopivuussuodattimen kanssa.
   Poiminta on sallittu vain ylin taso osista, joita
   `replaceImageParts` voi liittää takaisin (poimi↔korvaa -sopimus): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, ja Responses API `input_image`. Sisäkkäiset osumat ja
   vain indikaattorimuodot ovat yhdistelmäsuodattimen materiaalia eivätkä koskaan
   poimita. Ohita, jos ei löydy.
3. Ratkaise ajonaikainen konfiguraatio käyttämällä `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uudet `modalityBridge*`
   asetusten avaimet voittavat; vanhat `visionBridge*` avaimet pysyvät **yksi-sykli
   varajärjestelmänä** (palautusikkuna). Ohita ennen mitään media-kävelyä, kun
   silta on poistettu käytöstä.
4. Moodin valitsin (`modalityBridgeVisionMode`, ks. taulukko alla) päättää
   ohjata vs kuvata. Ohjaus palauttaa `modifiedPayload`, jossa vain `model`
   on vaihdettu, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kuvauspolku: rajoita kuvat `maxImages`-arvoon, koostaa tehtäväkohtainen kehotus,
   tarkista kuvausvälimuisti, kutsu näkömallia **samanaikaisesti**
   (`Promise.allSettled`), ja injektoi `[Image N]: <description>` tekstiosat niiden paikalle. Epäonnistunut kuvaus tuottaa `null` ja alkuperäinen kuvaosa on
   **säilytetty** (#4012) — paitsi yhdistelmäkuvauspolulla, kun jokainen
   kuvaus epäonnistui, jolloin vahvistettu ei-näkö ylöspäin saa
   `(unavailable — no vision-capable provider connected)` -stubin sen sijaan (#8430).
6. Palauta `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Moodin valitsin (`modalityBridgeVisionMode`)

| Moodi      | Oletus | Käyttäytyminen                                                                                                                                                                                                                                                               |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Vanha heuristiikka, koskematon (#6640/#7204): ei-yhdistelmä/`auto/` mallit ohjaavat parhaan näkömallin suuntaan, ellei alkuperäisellä mallilla ole käytettäviä tunnistetietoja (silloin kuvaa); yhdistelmäkohteet kuvaavat aina.                                             |
| `describe` |        | Kuvaa aina — ohjauslohko ohitetaan kokonaan; käyttäjän valitsema malli vastaa aina.                                                                                                                                                                                          |
| `reroute`  |        | Pakota ohjaus: säilytä-tunnistetietojen-malli -guard ohitetaan. Ohjaus-**kohteen** tunnistussuoja on edelleen voimassa — kun käytettävää näkökohdetta ei ole, pyyntö siirtyy kuvaamiseen, joten raakakuvat eivät koskaan saavuta tekstipohjaista taustajärjestelmää (#8430). |

Pakotetut moodit lyhentävät **ennen** automaattista heuristiikkaa; `auto`-käyttäytyminen
on tismalleen sama kuin pre-PR-1 guardrail.

#### Tehtäväkohtainen kuvauskehotus (`modalityBridgeVisionTaskAware`)

Oletus **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) liittää
**viimeisen käyttäjäviestin** tekstin (lyhennettynä 500 merkkiin) perus
kuvauskehotukseen, ohjaten kuvausta kohti sitä, mitä käyttäjä todella kysyi
(codex-vision-proxy -malli) ja pyytää näkömallia transkriboimaan näkyvää
tekstiä. Kun lippu on pois päältä — tai ei ole käyttäjätekstiä — peruskehotusta käytetään muuttumattomana.

Kuvaile itse-silmukkaa OpenAI-yhteensopivalla pyynnöllä (`callVisionModelSingle()`
tiedostossa `visionBridgeHelpers.ts`), joka aina pyytää `image_url.detail: "high"` —
ehdottomasti, jokaiselle kutsujalle/tarjoajalle, ei riippuen mistään asiakassignaalista.
Alhaisen yksityiskohtaisuuden näytteenotto heikentää OCR-tarkkuutta juuri siinä tekstin
transkriptiotehtävässä, jota tämä kehotus pyytää, joten kuvaile-pyyntö itsessään
kysyy aina korkeaa yksityiskohtaisuutta riippumatta siitä, mitä yksityiskohtaisuusastetta
alkuperäinen saapuva pyyntö käytti. Tämä vaikuttaa vain sisäiseen kuvaile-pyyntöön;
se ei muuta sitä, miten OmniRoute välittää kutsujan oman `image_url.detail` ensisijaisessa
pyynnössä — tämä oletus sovelletaan erikseen, ja vain havaittuille OpenCode-asiakkaille,
tiedostossa `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropicin langanmuotoisen kuvaile itse-silmukan haara ei sisällä `detail`-kenttää
eikä se vaikuta kumpaankaan oletukseen.

#### Kuvaile ulostulokatto (`modalityBridgeVisionMaxChars`)

| Avain                          | Oletus | Vaihteluväli      |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` tai 100–50000 |

`0` (oletus) tarkoittaa **ei kattoa** — `callVisionModel()` palautettu kuvaus
siirretään muuttamattomana, säilyttäen olemassa olevan käyttäytymisen. Mikä tahansa
arvo 100–50000 välin sisällä katkaisee kuvauksen `…` -liitteellä ennen kuin se
liitetään takaisin muodossa `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` tiedostossa `src/lib/guardrails/visionBridge.ts`).
Nosta tätä yksityiskohtaisille OCR-tehtäville, joissa alhaalla oleva malli tarvitsee
täyden transkription; laske sitä rajoittaaksesi tokenin käyttöä puheliailla
näkymämalleilla. Hallintapaneelin kenttä sijaitsee Vision-välilehden
Lisäasetukset-paneelissa (`modality-bridge-max-chars` tiedostossa `ModalityBridgeVisionTab.tsx`)
ja rajoittaa minkä tahansa arvon 1 ja 99 välillä 100 lattiarajalle, jättäen
ilmeisen `0` koskemattomaksi — `0` on itsessään voimassa oleva Zod-arvo
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ei vain
"asetettu" oletus.

#### Kuvaile välimuisti (`modalityBridge/bridgeCache.ts`)

Muistiin perustuva LRU + TTL välimuisti kuvaile-ulostuloille, jaettu prosessin laajuisesti.
Avain = `sha256(imageRef + composedPrompt + configuredBridgeModel)` pituus-etuliitteellä
rajaus (ilman kenttärajan törmäyksiä). Mallikomponentti on **konfiguroitu** silta-malli,
ei malli, joka todella vastasi — `callVisionModel` voi sisäisesti palata takaisin,
ja avaimen asettaminen yrityksen mukaan hajottaisi välimuistin. Epäonnistuneita
kuvauksia ei koskaan välimuistita. Asetukset:

| Avain                           | Oletus | Vaihteluväli |
| ------------------------------- | ------ | ------------ |
| `modalityBridgeCacheEnabled`    | `true` | —            |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440       |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000      |

#### Etäkuvan normalisointi (itse-silmukka kuvaile/base64-haku)

Kun silta hakee **etä**kuvaa itse — Anthropicin kuvaile itse-kutsu ja claude-langamuotoisen
base64-muunnoksen (`ensureBase64ImagesForClaudeWire`), molemmat kautta
`fetchRemoteImageAsDataUri()` tiedostossa `visionBridgeHelpers.ts` — tuloksena oleva
data URI siirretään `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) ennen kuin se upotetaan näkymämallin
pyyntöön. Ylisuuria kuvia pienennetään **2048px pitkään reunaan** (vastaten
kokoamista, jota OpenAI/Anthropic jo soveltavat palvelinpuolella), mikä vähentää
latausbittien/viiveen määrää muuttamatta sitä, mitä näkymämalli näkee. Kokoaminen
käyttää `sharp`-kirjastoa, joka ladataan dynaamisen tuonnin kautta: alustalla,
jossa sen natiivibinaari ei onnistu latautumaan, `normalizeDataUri()` **ei koskaan
heitä poikkeusta** — se palaa alkuperäisten bittien läpivientiin, joten kuvaile/base64-muunnospolku
pysyy aina toiminnassa. Ei-kuva-bittejä (haku, joka ei palannut dekoodattavaa kuvaa)
siirretään myös koskemattomina. Tämä normalisointi rajoittuu kuviin, joita silta
hakee omaa itse-kutsua varten — sitä ei koskaan sovelleta kutsujan raakakäytävän
kuormaan, mikä on johdonmukaista vain opt-in-muutosperiaatteen (Hard Rule #20) kanssa.

#### Asetusten skeema + migraatio

Uudet `modalityBridge*` avaimet ovat Zod-validated tiedostossa `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trio, ja
`modalityBridgeAudio*` ryhmä, jota Audio Bridge käyttää. Migraatio
`141_modality_bridge_settings.sql` kopioi olemassa olevat perintö
`visionBridge*` arvot vastaaville uusille avaimille (idempotentti, ei koskaan
ylikirjoita operaattorin asettamaa `modalityBridge*` arvoa); perintöavaimet
pysyvät hyväksyttävinä lukemisen varalta yhden julkaisusyklin ajan.

#### Läpinäkyvyysotsikko + tilastot

Kuvaile-muunnellut vastaukset sisältävät
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(koottu `buildModalityBridgeHeader()` tiedostossa `modalityBridge/bridgeStats.ts`,
leimattu `withModalityBridgeHeader()` tiedostossa `src/sse/handlers/chatHelpers.ts`).
Uudelleenohjatut pyynnöt eivät saa **mitään** otsikkoa — kuorma oli koskematon
ja mallinvaihto on jo näkyvissä vastauksen rungon `model` kentässä.

`GET /api/modality-bridge/stats` (hallintotodistus, sama taso kuin
`GET /api/settings`) palauttaa muistiin perustuvat per-modality laskurit
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` `vision`, `audio`, ja
`video` varten. `averageLatencyMs` käyttää `latencySamples`, ei kaikkia yrityksiä,
kuten nimittäjäänsä; operaatio ilman ajoitusta ei luo nollamilisekunnin
näytettä. `bridged` pysyy taaksepäin yhteensopivana aliaksena onnistuneille
muunnoksille; epäonnistuneet yritykset eivät lisää sitä.
Laskurit nollautuvat prosessin uudelleenkäynnistyksessä suunnitelmallisesti
(telemetria, ei kirjanpito).

#### Hallintapaneelin konfigurointi

Omistettu hallintapaneelisivu on  
`/dashboard/settings/modality-bridge`. Sen URL-osoitteelliset `Vision`, `Audio`  
ja `Video` -välilehdet säilyttävät kyselyparametrit vaihtaessaan `tab`-arvoa.  
Vision-välilehti paljastaa mahdollistamisen, tilan, mallin valinnan (mukaan  
lukien automaattinen oletus), tehtäväkohtaisen kehotteen, edistyneet aikakatkaisu-/kuva-/kuvaus-pituus/välimuisti  
rajoitukset, ajonaikaiset  
laskurit ja suojatun näytepyynnön. Audio-välilehti on myös aktiivinen: se paljastaa  
mahdollistamisen, STT-yksinomaisen mallin valitsimen Auto, aikakatkaisu/max-clip  
rajoitukset, ääni  
laskurit ja `input_audio` näytetestin. Video-välilehti on toiminnallinen: se raportoi  
FFmpeg/ffprobe ajonaikaisen tilan — yksi neljästä eksplisiittisestä UI-tilasta  
(`unknown` kun tutkinta on käynnissä tai ei voitu suorittaa, `restricted` ei-silmukointipohjaisella  
hallintapaneelipalvelimella, jossa tutkinta ohitetaan asiakaspuolella, `unavailable`  
kun tutkinta on suoritettu ja vahvistettu puuttuvaksi, tai `available` FFmpeg/ffprobe  
versioiden kanssa) — säilyttää  
mahdollisuus/malli/kehys/video/aikakatkaisu rajoitukset, suodattaa mallin valitsimen  
näkökykyisten mallien mukaan ja paljastaa video laskurit.

Entinen Vision Bridge -kortti AI-asetuksissa on yhteensopivuuslinkki  
uuteen sivuun; se ei enää omista toista kopiota lomakkeesta. Media Providers  
linkittää myös Image-to-Text ja Speech-to-Text työnkulut vastaaviin Modality  
Bridge -välilehtiin poistamatta olemassa olevaa Speech-to-Text leikkikenttää.

**Itse-silmukoinnin hyväksymisen ohitus:** kun kuvauspuhelu reitittää  
OmniRoute:n omaan `/v1` itse-silmukkaan (ei-standardi palvelinmalli),  
alipyyntö lähettää `x-omniroute-admission-bypass: internal` ja se  
todennetaan ratkaistulla itse-silmukan tunnuksella — paikallisella  
`sk_omniroute` vartijalla paikallisessa tilassa, tai  
operaattorin määrittämällä `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ympäristöavaimella  
(#1350), jotta `REQUIRE_API_KEY=true` -asennukset voivat silti suorittaa  
kuvauspuhelun. Ohitus kunnioitetaan vain näille tarkkoille tunnuksille, joten  
ulkopuoliset asiakkaat eivät voi käyttää otsikkoa hyväksynnän ohittamiseen.

Perinteiset oletusarvot sijaitsevat `src/shared/constants/visionBridgeDefaults.ts`;  
uudet tila/tehtäväkohtaiset/välimuisti oletusarvot ja asetusten ratkaisin  
sijaitsevat `src/shared/constants/modalityBridgeDefaults.ts`. Suojakaide paljastaa  
`deps` konstruktorivaihtoehdon, jotta testit voivat injektoida väärennetyt  
`getSettings` ja `callVisionModel` toteutukset.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Keskeyttää ääntä sisältävät keskustelupyynnöt ennen kuin ne saavuttavat kohteen,  
joka ei ole tunnettu ääniinputin hyväksymisestä. Se ei koskaan reititä  
keskustelupyyntöä uudelleen: ääniosat transkriboidaan olemassa olevan  
OpenAI-yhteensopivan moniosaisen päätepisteen kautta ja valittu keskustelumalli  
jatkaa tekstitranskripteilla.

Virta:

1. Ratkaise `supportsAudio` kautta `getResolvedModelCapabilities()`.  
   Eksplisiittinen palvelinrekisterin metadata voittaa, sitten staattinen  
   mallimetadata, sitten synkronoidut `modalities_input`. Ilmoitettu  
   syötelista ilman `audio` on `false`; ei ole kyvykkyyden todisteita,  
   jää `null`. Sekä `false` että `null` aktivoivat konservatiivisen  
   sillan, kun taas `true` ohittaa sen.
2. Ratkaise `modalityBridgeAudio*` asetukset ja poimi  
   liitettävät ylimmät ääniosat jokaisesta viestistä jaetun  
   `detectMediaParts()` tunnistimen kautta. Tuetut johdinosat ovat  
   OpenAI `input_audio`, `audio_url` ja `source.media_type: "audio/*"`.  
   Sisäkkäinen ääni havaitaan reitittämistä varten, mutta ei poisteta  
   liitospolulta. Työ on rajattu `modalityBridgeAudioMaxClips`-arvolla;  
   myöhemmät osat pysyvät koskemattomina.
3. Kunnioita määritettyä `provider/model`, tai anna  
   `selectAudioBridgeModel()` kävellä `AUDIO_TRANSCRIPTION_PROVIDERS`  
   vakaassa luettelossa ja valita ensimmäinen malli, jolla on  
   käytettävissä oleva aktiivinen palvelintunnus.
4. `callAudioTranscription()` muuntaa base64/data-URI äänen  
   moniosaiseksi `file`, tai lataa etä `audio_url` julkisen vain  
   ulospäin suuntautuvan suojan kautta DNS-pinningillä ja 25 MB rajalla.  
   Se sitten POSTaa tiedoston ja valitun mallin paikalliseen  
   `/v1/audio/transcriptions` itse-silmukkaan, todennettuna  
   `resolveSelfLoopBearer()`. Olemassa oleva transkriptioreitti  
   suorittaa normaalin tunnistuksen haun, jäähdytys/nopeusrajoituksen  
   käsittelyn ja palvelimen lähetyksen.
5. Onnistuneet kutsut korvaavat osansa `[Audio N]: <transcript>`.  
   Kutsut suoritetaan `Promise.allSettled`: yksittäinen epäonnistuminen  
   säilyttää alkuperäisen ääniosan (#4012 sopimus). Jos jokainen kutsu  
   epäonnistuu ja kohteen todistetaan olevan `supportsAudio === false`,  
   osat muuttuvat `[Audio N]: (unavailable — no STT provider connected)`  
   (#8430 sopimus). Tuntemattomalle kohteelle (`null`) kaikki epäonnistumiset  
   pysyvät koskemattomina. Todistetulle tekstiyksinomaiselle kohteelle,  
   jolla ei ole käytettävissä olevaa STT-tunnusta, annetaan sama eksplisiittinen  
   stub ilman verkkokutsua.

Onnistuneet transkriptiot käyttävät prosessikohtaista Modality Bridge LRU/TTL  
välimuistia. Avain yhdistää äänen viittauksen, vakaan `audio-transcription`  
toimintotunnuksen ja valitun STT-mallin; epäonnistumisia ei koskaan  
välimuistita. Ääniyritykset päivittävät jaettua `bridged`, `cacheHits`,  
`failures` ja `lastUsedAt` laskureita. Muokatut vastaukset sisältävät  
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;  
koskemattomat pyynnöt eivät saa Audio Bridge -osiota.

Ajonaikaiset asetukset ovat DB-taustaisia ja Zod-validated:

| Avain                         | Oletus  | Vaihtoehdot     |
| ----------------------------- | ------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —               |
| `modalityBridgeAudioModel`    | `""`    | Auto tai STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10            |

Jaettu välimuisti pysyy hallinnassa `modalityBridgeCacheEnabled`,  
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries` avulla.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptoi ykköstason videokomponentit Chat Completions `messages` ja Responses
API `input` ennen kuin kohde, jolla ei ole tunnettua natiivivideosupporttia, kutsutaan.
Tuetut muodot ovat `input_video`, `video_url`, `video_source`, HTTPS-URL-osoitteet,
ja `data:video/*;base64,...` data URI:t. Pelkkiä tiedostonimiä tekstissä ei käsitellä
videona.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastaa pyyntöjen kulkemisesta,
kyvykkyys/politiikkatarkistuksesta, pyyntökohtaisesta aggregoinnista ja
vastauksen kuormasta. Jokaisen videon työ — hankinta, koko tuloksen välimuisti,
kehysjärjestyksen kuvaaminen (joka yhdistää kaikki kutsujan määrittelemät äänitranskriptit)
ja yrityskohtaiset mittarit/peruutus/puhdistus — on piilotettu `processVideoPart`-funktioon
`videoBridgePipeline.ts`-tiedostossa, jota kutsutaan kerran per videokomponentti
`preCall`-silmukan sisällä. Tämä moduuli määrittelee myös eksplisiittiset porttirajat
`VideoMediaBrokerPort` (tietojen hankinta ja näytteiden poiminta),
`VideoAudioTranscriptionPort` (yhdistää kutsujan määrittelemän äänitranskriptin
näytteiden kuvateksteihin) ja `VideoDrilldownPort` (perinteinen raakavarasto).
Tuotannon STT ja kehysten säilytys koostuvat kuvaavasta portista
`createVideoSttAdapter` ja `createVideoDrilldownAdapter` kautta; jälkimmäinen
käyttää jaettua läpinäkyvää käsittelysykliä.

Julkinen `/v1` pyyntöpolku ei koskaan tuo tai kutsu aliprocessia. Etävideot
ladataan 50 MiB rajoituksen alaisena; inline base64 -videot ovat
konservatiivisesti 36 MiB dekoodattua per video -raja, jotta malli/viestit/kehys
voivat pysyä julkisen JSON-pyynnön hyväksymisrajan sisällä, joka on 50 MiB.
Inline-pituus ja dekoodatun koon arviot tarkistetaan ennen allokointia. HTTPS
on pakollinen alkuperäiselle etä-URL-osoitteelle ja jokaiselle uudelleenohjaukselle,
käyttäen olemassa olevaa julkista vain ulospäin suuntautuvaa suojaa DNS-pinningillä.
Tiedot ylittävät tarkasti sisäisen `POST /api/modality-bridge/video/extract`
välittäjän rajan. Tämä reitti on sekä `LOCAL_ONLY` että `SPAWN_CAPABLE`,
hyväksyy vain prosessikohtaisen todennetun, luotetun silmukkapyynnön,
eikä koskaan hyväksy URL-osoitetta, tiedostopolkuja, suoritettavia tiedostoja
tai argumenttiluetteloita. API:n runkokoon putki ja käsittelijän
incremental body reader valvovat itsenäisesti 50 MiB välittäjän syöttörajaa.
Sen rajoitettu jono suorittaa yhden poiminnan kerrallaan, sallii neljä
odottavaa työtä ja rajoittaa odottavan syötteen 100 MiB:iin.

Välittäjän sisällä `ffprobe` lukee yksityistä paikallista tiedostoa;
kiinteä formaattihyväksyntä sulkee pois soittolistat ja manifestiformaatit.
Sallituille MOV-perheelle kuuluville säilöille ulkoiset MOV-tietoviittaukset
ovat oletuksena pois käytöstä, eikä kiinteä komento valitse niitä. Sekä
`ffprobe` että `ffmpeg` käyttävät vain `file`-protokollan hyväksyntää,
yhtä säiettä, kiinteitä argumenttitaulukoita, ei shelliä, ja suoritettavia
tiedostoja, jotka on ratkaistu `PATH`:ista. Liitetyt kuvat eivät ole
toistettavia ehdokkaita. Kaikkien toistettavien virtojen on täytettävä
rajoitukset, ja eksplisiittinen oletusvirta on etusijalla ennen
determinististä alhaisimman indeksin varautumista. Videot on rajoitettu
600 sekuntiin, 8,192 pikseliin per ulottuvuus ja 33,554,432 lähdepikseliin.
FFmpeg näyttelee 1–16 keskikohtaa JPEG-kehyksistä, skaalaa pitkän reunan
enintään 1,024 pikseliin ilman pienempien syötteiden suurentamista, ja
ei koskaan vastaanota URL-osoitetta. Näytteenotto on oletuksena
`uniform`. Valinnainen `scene_aware` ja kokeellinen `segment_aware`
politiikka suorittaa yhden lisäkiinteän FFmpeg-kierroksen jo
hyväksytyllä paikallisella virralla, valitsee rajoitetut `showinfo`
kohtauksen aikaleimat ja palaa deterministisesti samoihin
yhtenäisiin keskikohtiin tunnistimen epäonnistumisen, aikarajan,
virheellisen tuloksen tai tyhjien ehdokasjoukkojen yhteydessä.
Segmentti-tietoinen tila allokoi keskikohtanäytteet suhteessa
hyväksyttyihin kohtausväleihin; segmentti-tietoisen todisteen ja
palautuskäyttäytymisen yksityiskohdat on esitetty alla. Kiinteä 16-kehyksen
raja on sovellettava valinnan jälkeen jokaisessa politiikassa.
Kun kohtaus-tietoinen pyyntö on vain yhden kehyksen budjetilla, se
käyttää aktiivisen koko videon tai fokusoidun ikkunan yhtenäistä
keskikohtaa ja raportoi `policyEffective: uniform`: yksittäinen
valittu kohtauskehyks ei voi säilyttää molempia ajallisia päitä.
Kutsuja voi valinnaisesti antaa rajallisen fokusoidun ikkunan
(`start`/`end` sekuntia); rajat rajoitetaan median keston mukaan,
käänteiset tai ei-rajoitetut ikkunat hylätään, ja kaikki
näytteenottopolitiikat suoritetaan vain normalisoidun välin sisällä.
Tuloksena oleva ikkuna sisällytetään näytteenottometatietoihin ja
epäluotettavan kuvauksen etuliitteeseen, jotta alavirran mallit voivat
erottaa fokusoidun otteen koko aikajanasta.

Semanttinen kuvatekstifokus on erillinen, eksplisiittinen asetus.
Oletusarvoinen `full` analyysitila säilyttää olemassa olevan kehyskehotteen
eikä koskaan siirrä pyyntötekstiä kuvatekstimallille. `Focused`-tilassa
silta lukee vain viimeisimmän ei-tyhjän käyttäjän kirjoittaman
`text`/`input_text` samasta Chat- tai Responses-säiliöstä, normalisoi sen
NFC:ksi, tiivistää ohjausmerkit ja tyhjät tilat, ja rajoittaa sen
500 Unicode-koodipisteeseen. Tyhjät tulokset palaavat tarkalle
`full` kehotteelle. Käytettävä vihje sarjoitetaan JSON-muotoon
erityisessä epäluotettavassa käyttäjäkontekstiblokissa ja voi vain
priorisoida havaittavia yksityiskohtia; se ei voi ohittaa erillistä
varoitusta ohjeiden seuraamisesta, jotka ovat näkyviä tai kuultavissa
mediassa. Tekstuaalinen fokus ei koskaan päättele `start`/`end`
tai muuta ajallista näytteenottajaa.

#### FU-07 rakenteellinen segmenttitodistus

`segment_aware` käyttää yhtä rajoitettua esianalyysikierrosta jo
hyväksytyllä paikallisella videosuoralla. Kiinteä suodatinketju
skaalaa ensin enintään 320 pikselin levyiseksi, havaitsee kohtausmuutoksia
ja jäätyneitä aikavälejä, ja sitten näyttelee 1 kehystä sekunnissa
sumeuden, keskimääräisen lumin ja spatiaalisen/ajallisen tiedon
kautta. Kierros on rajoitettu 600 rakenteelliseen näytteeseen,
yksi FFmpeg/suodatin-säie, sama `file`-protokolla ja säilöhyväksynnät,
1 MiB prosessituloksen raja, ja enintään 30 sekuntia välittäjän
jaetussa peruutus/aikarajassa. Se ei koskaan hyväksy komentoa,
suodatinta, polkua tai URL-osoitetta pyynnöstä.

Rakenteelliset arvot ovat determinististä näytteenottoa, eivät semanttista videon ymmärtämistä. Ne eivät päättele aiheita, toimintoja, kuvatekstejä, puhetta tai käyttäjän aikomuksia. Kohtaus- ja jäädytysrakenteet muodostavat segmenttejä; jäädytyskattavuus, sumeus, altistus, spatiaalinen yksityiskohtaisuus ja ajallinen muutos vaikuttavat vain siihen, miten olemassa oleva 1–16 kehysbudjetti jaetaan. Täysin jäädytetty segmentti on rajoitettu yhteen kehykseen, kun taas ei-jäädytetyt segmentit kilpailevat jäljellä olevasta budjetista. Kun rajoja on enemmän kuin kehyksiä, säilytetään tasainen aikajana kattavuus, jotta nopeat aikaiset leikkaukset eivät voi piilottaa pitkää jälkisegmenttiä. Kohtaurat, jotka ovat 1 sekunnin analyysiresoluution sisällä jäädytysrakenteesta, yhdistetään.

Puuttuvat suodattimet, väärin muotoillut/tyhjät todisteet, tunnistimen virhe tai rajattu esianalyysiaika epäonnistuvat avoimiksi tarkalle tasaiselle keskipistepolitiikalle. Soittajan keskeytys tai välittäjän määräaika ei epäonnistu avoimeksi: se lopettaa käynnissä olevan aliprocessin, estää myöhemmän kehysten poiminnan ja yksityinen väliaikainen puu poistetaan `finally`-lohkossa.

`scripts/perf/video-bridge-fu07-eval.ts` tuottaa deterministisiä todellisia FFmpeg-laitteita jälkikäsittelyyn, tiheän liikkeen budjetin jakamiseen, sumeus/altistus/SI-TI todisteisiin, nopeisiin leikkauksiin pitkällä hännällä ja vähittäisiin väärin positiivisiin. Se tallentaa esianalyysin seinäajan ja, missä `/usr/bin/time` on saatavilla, lapsen CPU:n ja huippu RSS:n. Sen laatutarkastukset ovat rakenteellisia oraakkeleita vain. Todellisen kuvatekstimallin laatu pysyy `HOLD`-tilassa, koska tämä kehys ei omaa valtuutettua päätepistettä tai jäädytettyä tuomaria. Rahalliset säästöt pysyvät myös `HOLD`-tilassa, ellei `--caption-cost-per-call-usd` tarjoa eksplisiittistä positiivista arvioita per puhelu; skripti ei koskaan valehtele kumpaakaan tulosta.

Jokainen kehys on rajoitettu 4 MiB:iin, kaikki raakakehykset yhteensä 23 MiB:iin, ja sarjallistettu välittäjän vastaus 32 MiB:iin. Yksityinen väliaikainen hakemisto poistetaan `finally`-lohkossa. OmniRoute ei pakkaa FFmpegia eikä hyväksy mukautettua suoritettavaa polkua. Ennen kuvatekstien lisäämistä silta soveltaa konservatiivista visuaalista deduplikaatiota: jokainen JPEG vähennetään 16×16 harmaasävyiseen puskuriin ja verrataan vain viimeiseen säilytettyyn kehykseen. Pyydettyä kuvatekstibudjettia, joka ylittää yhden kehykset, varten poiminta tarjoaa rajatun ehdokkaiden joukon, joka on jopa kaksinkertainen tuohon budjettiin, eikä koskaan yli 16 kehystä. Pyydetty katto sovelletaan vain deduplikaation jälkeen, ensimmäiset ja viimeiset valitut ehdokkaat säilytetään lopullisessa ohenemisessa, kun budjetti on vähintään kaksi. Versioitu `grayscale-16x16-mean-cells-v2` -politiikka käyttää suurempaa keskimääräistä luma-deltan ja thumbnail-solujen suhdetta, joiden normalisoitu delta on vähintään 0.05. Kaksoiskappaleen kynnys on vakio 0.04, valittu ennustettavuuden vuoksi eikä paljastettu ajonaikaiseksi asetukseksi. Tämä toissijainen korkean kontrastin signaali säilyttää pienen liikkeen ja näkyvän tekstin muutokset, jotka keskimääräiseen vertailuun perustuva vertailu voi piilottaa. Vertailija- tai dekooderivirheet epäonnistuvat avoimiksi ja säilyttävät kattavuuden. Tulosteen metatiedot erottavat poimitut ehdokkaat, onnistuneesti käytetyt kehykset ja visuaaliset kaksoiskappaleet, jotka on hylätty.

Erityisesti merkitty videon osa voi pyytää aikaleimattua kontaktisivua. Silta rakentaa enintään 4-sarakkeisen, 16-kehyksen JPEG-ruudukon. Jokainen 512-pikselin solu polttaa lähteen aikaleiman korkeakontrastiseen alaosaan, kun taas samat aikaleimat pysyvät tekstimuotoisessa metatiedossa alavirran yhdistämistä ja tarkastusta varten. Täydellinen JPEG pysyy rajoitettuna 32 MiB:iin. Jos `sharp` ei voi purkaa tai koostaa ruudukkoa, silta siirtyy yksittäisiin JPEG-kehyksiin; asiakaskeskeytys leviää silti läpi sivuoperaation.

Edistämistodisteet ovat tarkoituksella erillään synteettisestä koostumuksen mikrotestistä. `scripts/perf/video-bridge-contact-sheet-eval.ts` määrittelee skeemaversioidun A/B-kehyksen todellisille OpenAI-yhteensopiville visiomalleille. Se mittaa palveluntarjoajan ilmoittamia tokeneita, end-to-end seinäviivettä (mukaan lukien sivun koostaminen), mallikutsujen määrää ja manifestin määrittämää faktan säilyttämistä. Raakoja mallivastauksia ei kirjoiteta raporttiin; vain SHA-256-hajautukset ja vastaavat faktan ID:t säilytetään. Kehys ei tee verkkoyhteyttä tai maksullista mallikutsua, ellei `--execute-real` ole annettu ja `--model`, `OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY` on määritetty. Ilman tuota eksplisiittistä todellista suoritusta sen koneellisesti luettava tuomio pysyy `HOLD`-tilassa; synteettiset kuormitus/kutsumittaukset yksinään eivät ole edistämistodisteita.

Erillinen `scripts/perf/video-bridge-promotion-eval.ts` käyttää FU-07 tai FU-09 havaintoja. Edistämisen hyväksyminen vaatii kaikki kahdeksan synteettistä skenaariotyyppiä sekä puhdistetun todellisen klipin, vähintään kolme mitattua toistoa per rooli ja tapa, kaikki kymmenen ilmoitettua metriikkaa, jäädytetyt media/prompt/odotetut faktat/asetukset hajautukset, ainutlaatuiset havainto-ID:t ja vahvistetut siemen A/B -järjestys. Suorituskuitti sitoo kokoelman hajautuksen, tarkan ehdokashajautuksen ja malliversion. Puuttuvat tai virheelliset mittaukset pysyvät `HOLD`-tilassa, mukaan lukien CPU yli 30 s, huippu RSS yli 512 MiB tai esianalyysi yli 30 s. Nämä ovat todisteiden hyväksymiskattoja, eivät uusi ajonaikainen RSS:n täytäntöönpanotakuu.

FU-07 vaatii vähintään 98 % laadun säilyttämistä ja p95 viivettä ei enempää kuin 1.2x peruslinja, sekä joko 0.05 absoluuttista tapauskohtaista keskimääräistä palautusparannusta vastaavilla keskimääräisillä kuvatekstikutsuilla tai vähintään 10 % vähemmän keskimääräisiä jälkikäsittelykuvatekstikutsuja. FU-09 vaatii vähintään 0.85 laatua, 95 % säilyttämistä, 20 % p95 viiveen vähentämistä ja 10 % tokenin vähentämistä. Kriittisen faktan menetys, injektiovaatimusten noudattaminen tai puuttuva käyttö estää edistämisen. Yksi suoritus ei voi edistää mitään: `--previous-report` vahvistaa kaksi erillistä, päällekkäistä, peräkkäin kelvollista suoritusta saman politiikan/malliversion/ehdokkaan/kokoelman osalta. Näytteenottokoe ei voi vahvistaa kontaktisivukoe.

Keräilijöiden tulisi arvioida vastauksia muistissa ja tallentaa `responseDigest` sekä
mittarit ja havaintosidokset, mutta ei koskaan vastaustekstiä. Kuluttaja lukee myös
perinteisiä raakahavaintoja, mutta ei koskaan kopioi sitä tekstiä raportteihinsa. Tarkalleen
yksi `responseDigest` tai `rawResponseText` hyväksytään kutakin havaintoa varten.
Versioitu sallittu lista pysyy tyhjänä muuttumattomalla `hold` oletuksella. Kelvollinen
merkintä vaatii todisteviittauksen, politiikan, malliversion, tarkan ehdokkaan SHA:n,
manifestin tiivisteen ja kaksi erillistä suoritustunnusta; ristiriitaiset kontekstit
hylätään. Nämä metatiedot ovat auditointisopimus, eivät todiste siitä, että viitattu
tiedosto sisältää aitoja mittauksia. Tarkista todelliset kuitit ennen minkään merkinnän
lisäämistä. Hallintastatistiikan päätepiste ja Video-ohjauspaneeli paljastavat
konservatiivisen valmiuden. Vain määritetty mallin alias ei määritä sen versiota tai
käynnissä olevaa ehdokasta SHA:ta, joten nykyinen ohjauspaneeli raportoi `HOLD`
sen sijaan, että se käyttäisi kelpoisuutta toisesta suorituskontekstista. Ilmoitettu
kokeellinen valinta pysyy erillään edistämisestä; oletusta ei muuteta automaattisesti.

Kutsujat voivat liittää valinnaisen `transcript.cues`-taulukon tuettuun videon
osaan, kun heillä on jo kohdistettua tekstiä. Jokaisen vihjeen on sisältävä `text`,
rajallinen `start`/`end`-väli tutkittavan keston sisällä, ja valkoistetun `source`
(`client`, `embedded` tai `audio-bridge`); `confidence` oletusarvo on `1` ja sen
on pysyttävä välillä `0` ja `1`. Tarkat kaksoisvihjeet yhdistetään. OmniRoute ei
aloita transkriptiota tästä metadatasta: validoidut vihjeet kopioidaan kuvattuun
tulokseen lähteen, luottamuksen ja välin kanssa, ja ne esitetään epäluotettavina
havaintoina yhdessä kehysotsikoiden kanssa. Virheelliset, alueen ulkopuoliset tai
todisteettomat tekstit hylätään sen sijaan, että ne sekoitettaisiin
otsikkovirtaan. Molemmat pyyntökehon transkriptiokanavat normalisoivat
toimitetun todistuksen `client`:iksi, mukaan lukien itseväitetyt `embedded` tai
`audio-bridge` -tunnisteet. Vain palvelimen omistama sovitin voi määrittää
nämä luotettavat tunnisteet koodipohjaisella `trustedSource`-argumentilla; pyyntö
JSON-kenttä ei voi saavuttaa tätä argumenttia. Transkriptiteksti pysyy
epäluotettavana mediaan liittyvänä sisältönä, riippumatta sen alkuperästä, eikä
sen koskaan tule määrittää valtuutusta.

Edistynyt kutsuja voi tarjota `audioTranscript`-raidan samalle videolle; sitä
käsitellään asiakasta tarjoavana tekstinä, ei todisteena palvelimen
transkriptiosta. Fuusioreuna suorittaa visuaaliset ja äänihavainnot yhden
määräajan ja keskeytyssignaalin alla, järjestää ne yhteiselle aikajanalle,
yhdistää tarkat kaksoiskappaleet ja raportoi osittaisen tuloksen, kun vain
yksi puoli onnistuu. Virheellinen `audioTranscript` heikkenee tuohon osittaiseen
tulokseen — visuaalinen kuvaus säilyy ja äänihaara tallentaa puhdistetun
virhekoodin — sen sijaan, että koko video epäonnistuisi. Jokaisen haaran
saatavuus, osittainen lippu ja puhdistetut virhekoodit säilytetään kuvatussa
tuloksessa, suojapalkin metatiedoissa (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulosvälimuistin metatiedoissa ja sillan fuusiolaskureissa.
Oletusarvoinen Video Bridge -polku ei aktivoi puhetta tekstiksi tai lataa toista
media kopiota; ilman tätä erillistä raitaa se pysyy vain videona.

**Transkriptin säilytys (#12150 P1).** Tämä soveltuu automaattisesti aina kun
Video Bridge (joka on itse opt-in) renderoi transkriptivihjeen — erillistä
säilytyslippua ei ole. Kun pyyntö renderoi minkä tahansa transkriptivihjeen
(kutsujan ilmoittama `transcript` tai fuusioitu `audioTranscript`), suojapalkki
merkitsee sen `videoBridgeObserved` ja tuottaa punastetun varjon videokuvauksesta —
identtisen renderöinnin, jossa jokaisen vihjeen vapaatekstisisältö on korvattu
`[redacted-video-transcript]`:lla, joka on rakennettu korvaamalla
rakenteinen vihje kenttä ennen merkkijonon kokoamista (ei koskaan tasoitettua
tekstiä jäsentämällä, joten mikään vihjeen sisältö — vihamielinen tai tavallinen,
mukaan lukien sisällöt, jotka sisältävät `]`, kuten `[inaudible]`/`[music]` —
ei voi selviytyä). Pysyvä pyyntölokin pyyntökeho vaihtaa jokaisen
videosta johdetun tekstiosan tuohon punastettuun varjoon, joka on sovitettu
sisällön tasa-arvoon; `fullText`-ankkuri luetaan uudelleen valmiista
esikutsusuojapalkin kuormasta, joten osuma onnistuu edelleen myöhempien
ketjujen suojapalkkien (PII- ja
todistustietojen peittäjät, prioriteetit 10/95) kirjoittaessa kuvaustekstiä
paikalleen ja järjestelmän kehotteiden/siirtojen/muistin injektoinnin
muotoillessa viestitaulukkoa. Kehon, joka lähetetään ylöspäin mallille, ei
muutu. Havainnoitu pyyntö ei myöskään täytä pysyvää Muistia (sekä pyyntö- että
vastausperäiset poiminnat ohitetaan), joten mallin oma vastaus ei voi
toistaa transkriptitekstiä Muistiin.

**Raakatiedostot (#12430).** Kun silta on käytössä ja natiivin videotuennan
tilanne on tuntematon tai puuttuu, määritellyt `transcript`/`audioTranscript`
kentät aktivoivat myös `videoBridgeObserved`, jopa kuvausvirheen tai `maxVideos`
rajan jälkeen. `null` ja tyhjät merkkijonot lasketaan; puuttuvat kentät ja
ei-videometatiedot eivät. Säilytetyt kopiot punastavat nämä kentät tai
jättävät pyynnön huomiotta, ja välimuistit/Muisti ohitetaan. Toimittajan
kuorma pysyy muuttumattomana.

Lisättyjä säilytettyjä kopioita käytetään samaa havaittua pyyntösignaalia. Raaka
esisuojapalkin asiakaspyyntökuva, muistissa odottava pyyntö ja aikaisemmin
hylätty pyyntöloki korvaavat rakenteellisesti transkriptikenttiä video-osissa;
merkkijonokutsut, jotka on syntetisoitu putkistovaiheissa ja kontekstisiirroissa,
punastetaan pysyvän pyyntökehon laskurissa. Pysyvä `video_content_removed`-merkki
tekee `previous_response_id`-jatkumisesta epäonnistuvan suljetun sen sijaan, että
se rekonstruoisi tekstiä, joka oli tarkoituksella hylätty. Jos havaittu pyyntö
menettää osakohtaisen punastetun varjonsa ennen lokitusta, tai jopa yksi useista
videovarjoista epäonnistuu vastaamaan myöhempien pyyntömuutosten jälkeen,
säilytetty pyyntökeho jätetään kokonaan pois sen sijaan, että säilytettäisiin
osittain punastettu transkripti.

Havainnoidussa pyynnössä mallivastaus voi lainata mitä tahansa osaa
keskustelusta ilman strukturoitua vihjeen rajaa. Sen pysyvä kutsuloki
`responseBody` korvataan siten poistomerkillä; yksityiskohtainen
putkistotaide (joka voi sisältää ylävirran/asiakasrunkoja ja virtaosuuksia)
ei säilytetä. Semanttiset, idempotenssi- ja päättelytoistokäytävät ohittavat
luku- ja kirjoitustoiminnot kyseiselle pyynnölle. Palveluntarjoajan pyyntö ja
asiakkaalle näkyvä vastaus pysyvät muuttumattomina. Varhaiset keepalive-bytit
tyhjennetään tilapäisestä puskurista, kun yksityiskohtainen taide jätetään
pois. Kiro'n virheellinen EventStream-varoitus raportoi vain kuormitusbytin
määrän, ei koskaan sen sisältöä tai JSON-parserin raakavirhettä.
Tämä ei väitä, että jokainen epäolennaiseen palveluntarjoajaan/pluginiin
liittyvä diagnostiikka olisi tarkastettu; laajempi säilytettyjen
sijoitusten tarkistus on seurannassa #11658.

Sisäinen `/api/modality-bridge/video/drilldown` elinkaarimalli on erillinen,
loopback/token-autentikoitu välimuistialusta. Jokainen operaatio vaatii myös
kanonisen läpinäkyvän pääsovelluksen ID:n. Ennen kuin tuotantokutsuja
otetaan käyttöön, sen on johdettava tämä ID autentikoidusta vuokralaisesta
eikä koskaan siirrettävä asiakkaan valitsemaa arvoa. Välimuistin avaimet
sitovat tämän pääsovelluksen kanonisiin istunto- ja videoviite-ID:hin,
tallentavat vain niiden SHA-256-johdettuja avaimia ja rajaavat sekä
luku- että poistotoiminnot samaan pääsovellukseen. Välimuisti tallentaa
korkeintaan 16 johdettua JPEG-ruutua per merkintä, vanhentaa ne kymmenen
minuutin kuluttua ja tukee rajattuja `start`/`end` lukuja tai
ilmaista istunnon poistoa.

Jokainen pääsovellus on rajoitettu 16 merkintään ja 64 MiB kanoniseen JPEG-dataan.
Nämä rajoitukset ovat riippumattomia globaalista 64 merkinnän/256 MiB
katosta: pääsovelluksen kiintiöpaine tyhjentää vain kyseisen pääsovelluksen
vähiten käytetyt merkinnät ennen kuin globaalia LRU-tyhjennystä harkitaan.
Vanhentuneet merkinnät poistetaan sekä pääsovelluksesta että globaalista
kirjanpidosta välimuistitoiminnan yhteydessä, kun taas peruutus ja
vahvistusvirhe eivät sitoudu osittaiseen korvaukseen.

Välimuisti hylkää ei-kanonisen Base64:n, ylimääräisen täytteen, ei-JPEG-median,
virheelliset tai katkaistut JPEG:t sekä JPEG:t, jotka tuottavat varoituksen
rajatussa koko-kuvan `sharp` purkamisessa. Se koodaa jokaisen hyväksytyn
kuvan kanoniseksi JPEG:ksi, johdattaa leveyden ja korkeuden purkamisesta
sen sijaan, että luottaisi kutsujan kenttiin, ja hylkää kaikki jäljellä olevat
polyglot-bytit sen sijaan, että säilyttäisi niitä. Vain rajattu kanoninen
pakattu puskuri lasketaan molempiin kiintiöihin. JSON-langallinen raja
sisältää Base64-ylihinnan 32 MiB purkamisrajan. Jokainen
tallennettu johdanto tallentaa vahvistetun JPEG-muodon/resoluution,
näytteenottopolitiikan, johdannon version, luontiajan, palvelimen
laskeman sisällön tiivisteen ja hashatun vanhemman viitteen sekä
luotettavan kutsujan vanhemman sisällön tiivisteen. Peruutus tarkistetaan
asynkronisten purku/tiivistevaiheiden välillä ennen atomista välimuistin
sitoutumista.

Tuotantotuottaja käyttää jo johdettuja välittäjäkehyksiä vain onnistuneen
visuaalisen analyysin jälkeen, ilman toista videon latausta/poimintaa.
Se vaatii operaattorin `modalityBridgeVideoDrilldownEnabled=true`,
tiukkaa osakohtaa `drilldown: true` ja autentikoidun API-avaimen
merkintä-ID:n. Asiakkaan ilmoittamat pääsovellus/istuntoarvot eivät koskaan
perusta omistajuutta. Ilman kaikkia kolmea ehtoa se ei tiivistä, muokkaa
eikä säilytä lisäkehyksiä. Säilytyksen epäonnistuminen säilyttää käytettävän
visuaalisen vastauksen. Suostumuksen saaneet pyynnöt ohittavat koko videon
tulosvälimuistin, joten välimuistissa olevat tulokset eivät koskaan toista
käsittelyjä.

Onnistuneet JSON- ja SSE-vastaukset paljastavat korkeintaan neljä
läpinäkyvää kättä rajatussa `x-omniroute-video-drilldown`-otsikossa.
Valtuutetut selainalkuperät voivat lukea tämän otsikon laajentamatta CORS
alkuperäpolitiikkaa. Uudet kädet käyttävät `v1.<32-byte random base64url
token>`, ja rekisteri säilyttää vain niiden SHA-256 tiivisteet.
Lukija/otsikkoparsija hyväksyy myös vanhat 64-hex-kädet.
Autentikoitu julkinen kuluttaja on
`GET /api/v1/video-bridge/drilldown?handle=...`, itsenäisesti
rajoitettu `modalityBridgeVideoDrilldownRemoteEnabled=true`. Ilmaista
pysyvästi väärää peruuttaa pääsyn, vaikka vanha `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED`
ympäristövaranto olisi käytössä. Tuotannon säilytyksellä on vastaava
vanha `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` varanto. Molemmat
varannot ovat oletuksena pois päältä.

Kuluttaja johdattaa omistajuuden autentikoidusta avaimesta, soveltaa avainpolitiikkaa
ja palauttaa saman 404 tuntemattomille, vanhentuneille ja toisen avaimen
käsille. Se hyväksyy `variant=preview|standard|detail` (maksimi JPEG-mittasuhde
320/640/1280, ei koskaan suurennettu), `limit=1..8` (tai vanha
`frames`-alias, ei koskaan molemmat), nollapohjainen `page` ja valinnaiset
`start`/`end` keskittymissekunnit. Kaksoiskyselyavaimet ja käänteiset
keskittymisikkunat hylätään. Jokaisella palautetulla variantilla on tiiviste
sen todellisesta sisällöstä ja todellisesta resoluutiometadatasta, joka on
linkitetty säilytettyyn lähteeseen. Variantit johdetaan lukuhetkellä
eikä tallenneta ylimääräisinä säilytettyinä kopioina. JSON-vastaus, mukaan
lukien Base64/paketti, on rajoitettu 32 MiB; liian suuri sivu palauttaa
413 ja asiakkaan on pyydettävä vähemmän kehyksiä. Luku tarkistaa peruutuksen
kunkin koon ympärillä ja tarkistaa käsittelyn voimassaolon ennen palauttamista.
`DELETE` omistajalta on idempotentti; poisto tai TTL-vanheneminen vapauttaa
säilytetyn lähteen ja käytön kirjanpidon.

Jaettu varasto on prosessikohtainen: kädet vanhenevat uudelleenkäynnistyksessä
eivätkä ole siirrettävissä itsenäisten OmniRoute-prosessien välillä. Hallintastatit
paljastavat tehokkaan säilytyksen/etäpolitiikan ja aggregoivat vain
säilytetyt merkinnät/bytit, eivät koskaan mediaa, viittauksia,
pääsovellus-ID:itä tai käsiä. Videon asetuspaneeli näyttää nämä arvot
ja voi säilyttää molemmat suostumusvaihtoehdot. Tämä toteutusdokumentaatio ei
ole live-julkaisu- tai markkinointitodistetta; todellisen mallin hyväksyntä
seurataan erikseen.

Kehykset nimetään peräkkäin määritellyn Video-mallin mukaan. Tyhjällä Video-ohituksella on perintö Vision-asetuksista; jos molemmat ovat tyhjät, Vision-autoreititin valitsee tehokkaan vision-kykyisen mallin. Onnistuneet nimitykset korvaavat alkuperäisen osan vakaalla `[Video description:` -etuliitteellä, joka myös merkitsee tekstin epäluotettavaksi mediaan perustuvaksi havainnoinniksi ja kertoo alhaalla oleville malleille, ettei niiden tule seurata mediasta löytyviä ohjeita. Kehys-nimitys välimuistin avaimet sisältävät JPEG-tavut, kehotteen, aikaleiman ja tehokkaan mallin; vain onnistuneet nimitykset tallennetaan välimuistiin. Välimuistiin tallennetut merkinnät säilyttävät varsinaisen onnistuneen tuottajamallin, mukaan lukien varamallin; silta raportoi `mixed`, kun eri kehykset on tuotettu eri malleilla. Välimuistihitti käyttää uudelleen tuottajan identiteettiä sen sijaan, että se nimettäisiin pyydetyksi reitityssuunnitelmaksi. Koko videon tulosvälimuisti on avattu jokaiselle syötteelle, joka muuttaa tulosta — kehotteelle, tehokkaalle mallille, näytteenottopolitiikalle, kehysten määrälle, semanttiselle analyysitilalle, normalisoidun tarkennusvinkin SHA-256-sormenjäljelle, tarkennusikkunalle, `transcript`, `audioTranscript` ja kontaktitaulun lipulle — joten minkä tahansa näistä ulottuvuuksista muuttaminen on välimuistihäviö, ei koskaan vanhan uudelleenkäyttö. Visuaalisen deduplikointipolitiikan versio, kynnysarvo ja rajattu ehdokas-kehysten määrä ovat myös erikseen tulosvälimuistin avaimessa ja metatiedoissa; politiikan muutos ei siis voi käyttää vanhaa koko videon kuvausta. Tulosvälimuistin v4 metatiedot säilyttävät tilan ja sormenjäljen, mutta eivät koskaan raakakäyttäjätehtävää. Guardrail-metatiedot raportoivat sekä pyydetyt että tehokkaat analyysitilat; pyydetty `focused`-tila ilman käyttökelpoista käyttäjätekstiä raportoidaan tehokkaasti `full`.

Guardrail poimii kaikki tuetut videon osat, mutta ei kuvaa enempää kuin `modalityBridgeVideoMaxVideos`. Kohteelle, jonka on todistettu olevan `supportsVideo === false`, epäonnistuneet ja ylirajalliset videot muuttuvat eksplisiittisiksi turvallisiksi tekstimerkeiksi, joten raakavideota ei säilytetä. Kun kyky on tuntematon, nämä osat pysyvät koskemattomina. Kohteet, joilla on `supportsVideo === true`, ohittavat sillan. Asiakkaan pyyntö keskeytyssignaali leviää latauksen, välittäjäjonon, aliprocessien ja nimityskutsujen läpi; keskeytykset pysähtyvät videoiden välillä eivätkä koskaan epäonnistu avautumaan raakamedialle.

Aikajänteen asetukset ovat DB-taustaisia ja Zod- validoituja:

| Avain                               | Oletus      | Vaihtoehdot / käyttäytyminen                                                                                      |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valinnainen aikajänne, opt-in                                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` säilyttää yleiset nimitykset; `focused` käyttää rajattua, epäluotettavaa viimeisimmän käyttäjän kontekstia |
| `modalityBridgeVideoModel`          | `""`        | Perii Vision Bridge -mallin                                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` tai suhteellinen `segment_aware`; tunnistimen epäonnistuminen palaa `uniform`-tilaan     |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                    |

Perinteiset tallennetut Video-aikakatkaisuarvot yli 120 sekuntia rajoitetaan välittäjän määräaikaan; uudet asetukset, jotka ylittävät tämän rajan, hylätään. `GET /api/modality-bridge/video/runtime` vaatii luotettavan leimattua silmukkaa paikallisuutta ennen todennusta tai aikajänteen tutkimista, ja sitten vaatii hallintotodennuksen. Se palauttaa vain `available`, puhdistettuja FFmpeg/ffprobe-versioita ja kiinteän syyn, kun aikajänne ei ole käytettävissä. Sisäinen poimintapiste ei ole julkinen lataus-API: jono saturaatio palauttaa `503` plus `Retry-After`, soittajan katkaisu palauttaa `499`, ja kiinteä välittäjän määräaika palauttaa `504`. Muunnetut vastaukset lisäävät `video->text;model=<visionModel>;parts=<videos>` keskeiseen `x-omniroute-modality-bridge` -otsikkoon poistamatta Vision- tai Audio-segmenttejä.

### PII Masker (`piiMasker.ts`)

Toimii **molemmilla** vaiheilla.

- **`preCall`** kloonaa kuormituksen, käy läpi `system`, `messages`, `input` ja `prompt` (mukaan lukien tavalliset merkkijonoelementit), ja soveltaa `processPII()` (mistä `@/shared/utils/inputSanitizer`) merkkijonon `content`/`text` kenttiin. Kun `PII_REDACTION_ENABLED=true`, havaittu PII poistetaan ulospäin menevästä kuormituksesta. Tämä on riippumaton `INPUT_SANITIZER_MODE`:sta (joka vain ohjaa kehotteen injektointipolitiikkaa). Kun punaisuus on pois päältä, kutsu tallentaa havaitsemislaskentaa ilman sisällön uudelleenkirjoittamista.
- **`postCall`** syväklonnee vastauksen, suorittaa `sanitizePIIResponse()` plus Responses-API-muoto masker (`maskResponsesOutput` — kattaa `output_text` ja `output[].content[].text`). Jos punaisuutta tapahtuu, muokattu vastaus korvataan alkuperäisellä.

Guardrail ei koskaan estä; se vain merkitsee (`meta.detections`, `meta.redacted`) tai kirjoittaa uudelleen.

### Prompt Injection (`promptInjection.ts`)

Havaitsee vihamielisiä rakenteita käyttäjän toimittamassa sisällössä ja valvoo määritettyä politiikkaa. Käyttäytyminen määräytyy ympäristömuuttujien ja konstruktorivaihtoehtojen mukaan:

| Asetus     | Ympäristömuuttuja                                                                                         | Oletus | Vaikutus                                                                                                                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Käytössä   | `INPUT_SANITIZER_ENABLED`                                                                                 | `true` | Kun `false`, turvakaide lyhentää.                                                                                                                                                                                          |
| Tila       | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn` | Injektio-politiikka: `block`, `warn` tai `log`. (`redact` hyväksytään taaksepäin yhteensopivuuden vuoksi, mutta se **ei** poista injektiotekstiä; PII-uudelleenkirjoitus on hallittavissa `PII_REDACTION_ENABLED` avulla.) |
| Estokynnys | `blockThreshold` vaihtoehto / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Vähimmäisvakavuus, joka vaaditaan estämiseen. Keskitaso on oletuksena vain tarkkailua varten.                                                                                                                              |

**Tilan etusija** (`getMode`): kutsujan `options.mode` →
`INJECTION_GUARD_MODE` **DB ominaisuuslipun ohitus** (Dashboard → Asetukset →
Ominaisuusliput) → `INJECTION_GUARD_MODE` ympäristö → `INPUT_SANITIZER_MODE` ympäristö →
`warn`. Dashboardin ohitus voittaa siten ympäristömuuttujat, joten Ominaisuusliput UI hallitsee toimivaa turvakaidetta reaaliaikaisesti (ilman uudelleenkäynnistystä). DB-luku on vikasuojattu:
jos se epäonnistuu, turvakaide palautuu ympäristöperusteiseen käyttäytymiseen, ja kun ei ole asetettu ohitusta, käyttäytyminen on identtistä ympäristön vain ratkaisun kanssa.

Havaitsemislähteet:

1. `sanitizeRequest()` `@/shared/utils/inputSanitizer`-moduulista (jaettu tunnistin, jota käytetään muualla putkistossa).
2. Sisäänrakennetut `DEFAULT_GUARD_PATTERNS` (tällä hetkellä `system_override_inline` ja `markdown_system_block`, molemmat `high` vakavuudella).
3. Valinnaiset `customPatterns`, jotka annetaan konstruktorin vaihtoehtojen kautta (merkkijonot, regex tai `{ name, pattern, severity }` -tiedot).

Kun `mode === "block"` **ja** vähintään yksi havaitseminen täyttää vakavuuskynnyksen, `preCall` palauttaa `{ block: true, message: "Pyyntö hylätty: epäilyttävää sisältöä havaittu" }`. `warn`/`log`-tiloissa turvakaide kirjaa, mutta sallii kutsun. Jaettu apuri `evaluatePromptInjection()` on myös viety ulos kutsujille, jotka tarvitsevat arvioida kehotteita ilman rekisterin läpikäymistä.

**Skannausraja (v3.8.20):** tunnistin tarkistaa vain **ensimmäiset 16 KB** yhdistetystä kehotetekstistä — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 tavua) `src/shared/utils/inputSanitizer.ts`-tiedostossa. Sekä `detectInjection()` että `evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` ennen kaavion silmukkaa. Injektiodirektiivit sijaitsevat lähellä syötteen ykköstä, joten tämä rajoittaa regexin CPU/GC:tä useiden satojen KB:n kuormissa heikentämättä havaitsemista (vrt. #3932, #4041).

### Todennustietojen peittäjä (`credentialMasker.ts`)

Toimii **molemmissa** vaiheissa, viimeisenä oletusketjussa (prioriteetti `95`). Poistaa tunnetut API-avain / salainen token -kaavat ulospäin menevästä kuormasta (viestin sisältö, työkalukutsun argumentit, työkalutulokset) **ja** palveluntarjoajan vastauksesta, joten kehotteeseen liitetty todennus (tai työkalutuloksen palauttama) ei vuoda ylös palveluntarjoajalle tai takaisin asiakkaalle.

- **Vapaaehtoinen vain**, sama käytäntö kuin PII:n peittämisessä (Kova sääntö #20-viereinen):
  pois päältä, ellei `settings.credentialRedactionEnabled === true` **tai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kun se on pois päältä, turvakaide on ei-toimiva —
  se ei koskaan estä eikä koskaan uudelleenkirjoita.
- `redactCredentials()` käy läpi koko kuorma/vastauspuun (`walkValue()`,
  prototyyppisaastumisen turvallinen, sykliturvallinen `WeakSet`in kautta) ja korvataan osumat
  `[REDACTED:<type>]` -paikalla, kloonaamalla vain ne oksat, jotka todella
  muuttuivat.
- `CREDENTIAL_PATTERNS` kattaa LLM-palveluntarjoajien avaimet (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS-tokenit (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksuvälineet (Stripe, Square), pilvi
  avaimet (AWS pääavain, Twilio, SendGrid, Mailgun), yksityiset avaimet / JWT:t,
  todennusmerkkijonot (`mongodb://user:pass@...`, jne.), ja
  yleinen `Authorization`/`x-api-key`/`api-key`/`apikey` -otsikkoväli
  kaava. Otsikkotyyppiset avaimet (`authorization`, `x-api-key`, `api-key`,
  `apikey`) peitetään rakenteellisesti (vain arvo, kaavan etuliite kuten
  `Bearer `/`Basic ` säilytetään) eikä yleisen tekstin regexin kautta.
- Turvakaide ei koskaan estä; se vain uudelleenkirjoittaa (`modifiedPayload` /
  `modifiedResponse`) ja annotoi (`meta.credentialsRedacted`, `meta.count`).

Regressiosuojus: `tests/unit/credential-masker-guardrail.test.ts`.

## Perussopimus (`base.ts`)

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
  block?: boolean; // true katkaisee ketjun välittömästi
  message?: string; // näytetään eston yhteydessä
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall palauttaa tämän pyynnön uudelleenkirjoittamiseksi
  modifiedResponse?: TValue; // postCall palauttaa tämän vastauksen uudelleenkirjoittamiseksi
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

Suojakaide ilmaisee, ettei muutoksia ole, palauttamalla joko arvon `void`, `{}` tai
`{ block: false }`. Arvon `modifiedPayload`/`modifiedResponse` palauttaminen korvaa
ketjussa eteenpäin myöhemmille suojakaiteille välitettävän arvon.
`signal?: AbortSignal` välittää kutsujan elinkaaren suojakaiteille. Pyynnön keskeytys on tarkoituksellinen avoimeksi jättävä poikkeus: mediasillat lopettavat työn ja siivoavat palauttamatta käsittelemätöntä mediaa kohteelle, jonka tiedetään, ettei se tue sitä.

## Rekisteri (`registry.ts`)

Singleton-olio `guardrailRegistry` tarjoaa seuraavat toiminnot:

- `register(guardrail)` — lisää suojakaiteen (tai korvaa sen normalisoidun nimen perusteella) ja
  järjestää suojakaiteet uudelleen `priority`-arvon mukaiseen nousevaan järjestykseen.
- `clear()` / `list()` — hallinnollisia aputoimintoja.
- `runPreCallHooks(payload, context)` — käy aktiiviset suojakaiteet läpi, välittää
  hyötykuorman `modifiedPayload`-arvojen kautta ja pysähtyy ensimmäiseen `block: true` -tulokseen.
- `runPostCallHooks(response, context)` — sama käsittely vastauksen puolella.
- `resetGuardrailsForTests({ registerDefaults })` — tyhjentää tilan ja valinnaisesti
  rekisteröi oletukset uudelleen testien puhdasta eristämistä varten.

Molemmat suorittimet palauttavat arvon `{ blocked, payload|response, results, guardrail?, message? }`,
jossa `results` on `GuardrailExecutionResult`-tietueiden taulukko. Tietueet sisältävät
kunkin suojakaiteen `blocked`-, `skipped`-, `modified`-, `error`- ja `meta`-kentät,
joista on hyötyä jäljityksessä.

### Suojakaiteiden poistaminen käytöstä pyyntökohtaisesti

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` kokoaa
duplikaateista puhdistetun luettelon suojakaiteiden nimistä, jotka tulee ohittaa nykyisessä
pyynnössä. Lähteet (kaikki valinnaisia ja yhdistetään):

- `apiKeyInfo.disabledGuardrails`
- Pyynnön rungon `disabledGuardrails` (ylimmällä tasolla)
- Pyynnön rungon `metadata.disabledGuardrails`
- Otsake `x-omniroute-disabled-guardrails` (tai vanha
  `x-disabled-guardrails`)

Arvot voivat olla merkkijonotaulukoita tai pilkuilla eroteltu merkkijono; nimet
normalisoidaan pienikirjaimisiksi kebab-case-muotoon (`pii_masker` → `pii-masker`). Tulos
välitetään rekisterille `context.disabledGuardrails`-arvon kautta, jolloin rekisteri ohittaa
vastaavat suojakaiteet (`skipped: true` kohteessa `results`).

## Suoritusjärjestys

Jokaiselle pyynnölle, joka kulkee tiedostojen `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts` kautta:

1. `resolveDisabledGuardrails(...)` muodostaa ohitusluettelon API-avaimen, pyynnön rungon
   ja otsakkeiden perusteella.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` suorittaa suojamekanismit nousevassa
   prioriteettijärjestyksessä:
   - Käytöstä poistetut suojamekanismit kirjataan tilaan `skipped`.
   - Kunkin suojamekanismin `preCall` voi kirjoittaa hyötykuorman uudelleen `modifiedPayload`-arvon avulla.
   - Ensimmäinen `block: true` keskeyttää ketjun, ja käsittelijä palauttaa
     suojamekanismin hylkäysvastauksen.
3. Mahdollisesti uudelleenkirjoitettu hyötykuorma siirtyy yhdistelmäreititykseen ja edelleen
   ylävirran käsittelyyn.
4. Kun vastaus on koottu, `guardrailRegistry.runPostCallHooks(...)`
   suorittaa saman ketjun vastaukselle. Tässä vaiheessa `block: true` hylkää ylävirran
   vastauksen.

Poikkeuksen aiheuttaneet suojamekanismit kirjataan muodossa `error: <message>` ja lokitetaan
`logger.warn`-kutsulla, mutta ketjun suoritus jatkuu — suunnitellusti salliva virhetilanteissa.

## Määritykset

Sisäänrakennettujen suojamekanismien lukemat ympäristömuuttujat:

| Muuttuja                              | Käyttäjä                | Vaikutus                                                                                                |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Aseta arvoksi `false`, jos haluat poistaa tunnistuksen kokonaan käytöstä.                               |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Injektiokäytäntö: `warn`, `block` tai `log`. Vanha arvo `redact` ei kirjoita injektiotekstiä uudelleen. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Injektiosuojan tila; myös tietokannan ominaisuuslippu, joka **ohittaa** ympäristömuuttujat (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Vähimmäisvakavuus, jonka `MODE=block` hylkää: `high` (oletus), `medium` tai `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Vanha alias muuttujalle `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                              |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kun arvo on `true`, pyynnön henkilötiedot peitetään (injektiotilasta riippumatta).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (alavirta) | Hallitsee vastauksen peittimen toimintaa.                                                               |

Modality Bridge -suojamekanismit lukevat ajonaikaiset määritykset tietokantapohjaisesta asetussäilöstä
(`getSettings()`), eivät ympäristömuuttujista. Kuvankäsittelyn ensisijaiset avaimet ovat
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Vanhoja
`visionBridge*`-avaimia tuetaan vain dokumentoituna yhden julkaisusyklin lukemisen
vararatkaisuna; hallintapaneelin kirjoitukset käyttävät ensisijaisia avaimia. Oletusarvot ja vararatkaisun
selvitystoiminto sijaitsevat tiedostossa `src/shared/constants/modalityBridgeDefaults.ts`, ja vanhat
vakiot säilytetään tiedostossa `src/shared/constants/visionBridgeDefaults.ts`.

Ääni käyttää asetuksia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` sekä jaettuja
`modalityBridgeCache*`-asetuksia. Äänelle ei ole vanhojen avainten vararatkaisua, koska nämä
avaimet otettiin käyttöön Modality Bridge -skeeman yhteydessä.

Video käyttää asetuksia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` sekä jaettuja `modalityBridgeCache*`-asetuksia.
Se on oletusarvoisesti poissa käytöstä, koska FFmpeg/ffprobe ovat valinnaisia operatiivisia
riippuvuuksia ja kuvatekstien tuottaminen videoruuduille lisää viivettä ja mallin käyttökustannuksia.

## Mukautetut suojaukset

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

Vaiheet:

1. Luo `src/lib/guardrails/myGuardrail.ts`, joka laajentaa `BaseGuardrail`-luokkaa.
2. Toteuta `preCall` ja/tai `postCall`.
3. Rekisteröi joko tuonnin yhteydessä (lisää `registerDefaultGuardrails`-funktiosta) tai
   kutsu `guardrailRegistry.register(...)` suorituksen aikana — rekisteri korvaa
   kaikki aiemmat suojaukset, joilla on sama normalisoitu nimi.
4. Lisää testit hakemistoon `tests/unit/` (olemassa olevia esimerkkejä:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testaus

Käytä `resetGuardrailsForTests()`-funktiota testien välissä, jotta jokainen testi alkaa tunnetusta tilasta.
Anna `{ registerDefaults: false }`, jos haluat aloittaa tyhjällä rekisterillä ja
rekisteröidä vain testattavat suojaukset. Vision Bridge hyväksyy riippuvuuksien
injektoinnin (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge tarjoaa
vastaavat liityntäkohdat asetuksille, ominaisuuksille, STT-mallin valinnalle, tunnistetietojen
tarkistuksille ja litteroinnille. Testeillä voidaan siten testata kumpaakin työnkulkua ilman
tietokanta- tai verkkoyhteyttä.

## Katso myös

- `src/lib/guardrails/` — toteutus
- `src/shared/utils/inputSanitizer.ts` — jaettu tunnistin, jota käytetään
  kehoteinjektioiden havaitsemiseen ja henkilökohtaisten tunnistetietojen peittämiseen
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridgen oletusarvot ja
  pakotetun siltauksen malliluettelo
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio-ajonaikaiset jaetut oletusarvot
- `docs/architecture/RESILIENCE_GUIDE.md` — erillinen kerros (piirikatkaisin, jäähdytysajat)
- `docs/reference/ENVIRONMENT.md` — täydellinen ympäristömuuttujien viite

## Injektiosuojauksen reittikattavuus ja red-team-testaus (vaihe 8 · lohko D)

Injektiosuojaus (`createInjectionGuard` / `withInjectionGuard`) kattaa kaikki reitit,
jotka hyväksyvät käyttäjän kehotteita. Se noudattaa `INJECTION_GUARD_MODE`-asetusta (oletus `warn` = vain kirjaus;
`block` = palauttaa HTTP 400 `SECURITY_001`).

| Tyyppi            | Reitit                                                                                                                                               | Oletustila |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Teksti (nykyinen) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn       |
| Generatiivinen    | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn       |
| Data              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn       |

Tekstin poiminta (`extractMessageContents`) kattaa kentät `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testaus (öisin, `nightly-llm-security.yml`):** promptfoo varmistaa, että kukin reitti estää
OWASP-LLM-aineiston tilassa `INJECTION_GUARD_MODE=block`; garak suorittaa testit (ohitetaan ilman salaisuutta).
`moderations` sisältyy yhdenmukaisuuden vuoksi — estotilaa käyttävät ylläpitäjät voivat vapauttaa sen
`resolveDisabledGuardrails`-toiminnolla.

Öisin suoritettavassa työnkulussa (`.github/workflows/nightly-llm-security.yml`, cron + manuaalinen
käynnistys) on kaksi työtä:

- **`promptfoo-guard` (estävä)** — suorittaa komennon `promptfoo eval -c promptfooconfig.yaml`
  asetuksella `INJECTION_GUARD_MODE=block`. Kukin vihamielinen tapaus (esim. "ohita kaikki
  aiemmat ohjeet…", DAN-tyyliset suojauksen ohitukset) varmistaa, että vastaus sisältää
  arvon `error.code === "SECURITY_001"` eli että suojaus todella hylkäsi pyynnön.
- **`garak` (neuvoa-antava)** — suorittaa garakin asetuksella `--probes promptinject,dan,leakreplay`
  paikallista OmniRoute-instanssia (`http://localhost:20128/v1`) vasten. Suoritus riippuu
  palveluntarjoajan salaisuudesta (`PROMPTFOO_PROVIDER_KEY`); ilman sitä testi ohitetaan hallitusti, ja
  komentoon on lisätty loppuliite `|| true`, joten se raportoi tulokset aiheuttamatta CI-ajon epäonnistumista.

Suojausaputoiminnon (`createInjectionGuard` / `withInjectionGuard`)
kattavuus ulottuu kaikkiin kehotteita vastaanottaviin `/v1`-reitteihin; kehoteteksti poimitaan
kentistä `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
`src/shared/utils/inputSanitizer.ts`-tiedoston `extractMessageContents()`-funktiolla.
