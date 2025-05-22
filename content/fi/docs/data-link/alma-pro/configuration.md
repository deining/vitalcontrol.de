---
title: Laitteen kertaluonteinen aktivointi ja konfigurointi automaattisen syöttölaitteen asetuksissa
linkTitle: Konfigurointi
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Ennen kuin käytät VitalControlia ensimmäistä kertaa, sinun on aktivoitava ja konfiguroitava se oikein Alma Pro -syöttölaitteen asetuksissa.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Aktivoidaksesi ja asettaaksesi VitalControl-laitteen, toimi seuraavasti:

## Siirtyminen asetusten valikkoon `{{<T "VitalControl" >}}`

{{% alert title="Huomio" %}}
Aktivoidaksesi ja asettaaksesi {{<T "VitalControl" >}} -laitteen, sinun on oltava kirjautuneena sisään {{<T "SiteManager" >}} -käyttäjäroolilla automaattisessa syöttölaitteessa. Muutoin jotkin alla näkyvistä ja kuvatuista painikkeista eivät ole näkyvissä sinulle.
{{% /alert %}}

1. Napsauta alareunan painiketta <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Asetusvalikko" title="Asetukset"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> kosketusterminaalin vasemmassa sivupalkissa. Jos olet päävalikossa, jossa sivupalkki ei ole näkyvissä, paina painiketta &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Syöttölaitteen valikko" title="Syöttölaitteen valikko"/>`{{<T "Feeder" >}}`näyttääksesi sivupalkin.

1. Napsauta toista painiketta vasemmalta <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Kosketusterminaalin asetukset" title="Kosketusasetukset"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> kosketusterminaalin alatyökalupalkissa.

1. Sarja valikkokohteita ilmestyy nyt keskusnäytön vasemmalle puoliskolle. Napsauta alareunan painiketta `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Valikkokohta (tai mahdollisesti useita) ilmestyy nyt keskusnäytön oikealle puoliskolle. Napsauta yläreunan painiketta `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Painike siirtyy nyt näytön vasemmalle puoliskolle.

1. Näytön oikean puolen alareunassa näkyy nyt painike &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Avaa VitalControl-asetukset" title="Avaa asetukset" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Napsauta tätä painiketta, ja ponnahdusikkuna avautuu, näyttäen [Sivu 1](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` -asetusten valikosta.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl-asetukset: Pääsy" title="Pääsy VitalControl-asetusvalikkoon" />
    <figcaption class="figure-caption fs-6">Kuvakaappaus 1: <span style="font-style: italic;">{{<T "VitalControl" >}}</span>-asetusten valikon avaaminen</figcaption>
</figure>

`{{<T "VitalControl" >}}`-asetukset on jaettu kahdelle sivulle:

## `{{<T "VitalControl" >}}` Asetusvalikko - Sivu 1 {#settings-menu-vitalcontrol-page-1}

Sivu 1 <span style="font-style: italic;">{{<T "VitalControl" >}}</span>-asetusten valikosta esitetään seuraavasti:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl-asetusvalikko: Sivu 1" title="VitalControl-asetukset (1)" />
    <figcaption class="figure-caption fs-6">Kuvakaappaus 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span>-asetusten valikko, Sivu 1</figcaption>
</figure>

Tällä sivulla voit suorittaa seuraavat toiminnot ja asetukset.

### {{<T "VitalControl" >}}-laitteen aktivointi {#activation-vitalcontrol}

Koneen oletustilassa {{<T "VitalControl" >}} on deaktivoitu. Aseta <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span>-kytkin <span style="font-size: 140%">➀</span> oikeaan asentoon <span style="font-style: italic;">{{<T "YES" >}}</span> aktivoidaksesi {{<T "VitalControl" >}}-laitteen. Tämän jälkeen syöttölaitteen valikon oikeassa sivupalkissa, liitettyjen koneiden kuvakkeiden alapuolella, näkyy <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl-laite" title="VitalControl"/>-kuvake `{{<T "VitalControl" >}}`-laitteelle (katso Kuvakaappaus <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Syöttölaitteen valikko</a></span>, kuva <span style="font-size: 140%">➁</span> siellä).

### Automaattisen syöttölaitteen synkronointi <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Näytön vasemmalla puolella on kaksi valintaruutua:

* Valintaruutu <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Tämä vaihtoehto ohjaa toimintaa, jos syöttölaitteella on synkronoinnin aikana eläimiä, joita {{<T "VitalControl" >}}-laite ei vielä tunne. Tämä vaihtoehto on oletuksena käytössä ja sen tulisi yleensä pysyä asetettuna. Jos rekisteröit ostamasi eläimet skannaamalla niiden eläinpassit, tämä vaihtoehto on poistettava käytöstä.

    <span style="font-weight: bold">Ota tämä vaihtoehto käyttöön</span>:

    - jos sinulla on uusi {{<T "VitalControl" >}} edessäsi, johon haluat siirtää kaikki eläimet syöttölaitteelta. Synkronoinnin jälkeen kaikki syöttölaitteella tunnetut eläimet ovat myös {{<T "VitalControl" >}}-laitteessa.
    - jos tuot jatkuvasti uusia vasikoita syöttölaitteelle käynnissä olevan toiminnan aikana. Nämä eläimet luodaan sitten myös {{<T "VitalControl" >}}-laitteeseen synkronoinnin aikana.

    <span style="font-weight: bold">Poista tämä vaihtoehto käytöstä</span>:

    - jos olet luonut uusia eläimiä {{<T "VitalControl" >}}-laitteeseesi skannaamalla niiden eläinpassit, missä
    - näille eläimille ei ole vielä annettu transponderia ja
    - näitä eläimiä ruokitaan jo syöttölaitteella ja ne on siksi rekisteröity siellä.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
                Jos vaihtoehto pysyy asetettuna yllä olevassa kokoonpanossa, eläimet ovat synkronoinnin jälkeen kahdesti {{<T "VitalControl" >}}-laitteessa.
            </div>
        </div>


* Valintaruutu <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Tämä vaihtoehto määrittää, poistetaanko eläimet, jotka ovat vain {{<T "VitalControl" >}}:ssa mutta eivät ruokintalaitteessa, {{<T "VitalControl" >}}:sta seuraavan synkronoinnin aikana. Jos käytät {{<T "VitalControl" >}}:a vain eläinten maidontuotantokauden aikana, tämä vaihtoehto tulisi ottaa käyttöön. Jos haluat seurata eläimiä maidontuotantokauden jälkeen, sinun on poistettava tämä vaihtoehto käytöstä.

    <span style="font-weight: bold">Ota tämä vaihtoehto käyttöön</span>:

    - jos keräät tietoja eläimistä vain maidontuotantokauden aikana,
    - jos haluat, että eläimet poistetaan {{<T "VitalControl" >}}:sta seuraavan synkronoinnin aikana sen jälkeen, kun ne on poistettu ruokintalaitteesta. Näin eläimet eivät kerry {{<T "VitalControl" >}}:iin ajan myötä.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
            Jos tämä vaihtoehto on aktivoitu ja valintaruutu <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> on myös aktivoitu, eläimiä ei poisteta, jotka ovat nuorempia kuin numerokentässä <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span> määritetty ikä.
        </div>
    </div>

    <span style="font-weight: bold">Poista tämä vaihtoehto käytöstä</span>:
    - jos haluat jatkaa eläinten tietojen keräämistä maidontuotantokauden jälkeen, esimerkiksi punnituksen aikana,
    - jos olet valmis poistamaan eläimet itse manuaalisesti {{<T "VitalControl" >}}:sta.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Jos poistat tämän vaihtoehdon käytöstä, sinun on poistettava transponderi vieroitettujen eläinten {{<T "VitalControl" >}}-laitteesta viimeistään, kun panta poistetaan vieroitetulta vasikalta ja siirretään toiselle, nuoremmalle vasikalle. Jos transponderia ei poisteta, nuoremman eläimen - joka nyt käyttää vieroitetun eläimen entistä pantaa - tietueet lisätään virheellisesti vieroitetun eläimen tietokantaan.
    </div>
</div>

### Synkronointi {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automaattinen ruokintalaite

Näytön oikealla puolella on valintaruutu ja kaksi syöttökenttää:

* Valintaruutu <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Tämä vaihtoehto hallitsee, luodaanko {{<T "VitalControl" >}}-laitteessa olevat eläimet, jotka eivät ole ruokintalaitteelle tunnettuja, ruokintalaitteelle seuraavan synkronoinnin aikana. Oletuksena tämä vaihtoehto ei ole aktivoitu.

    <span style="font-weight: bold">Poista</span> tämä vaihtoehto käytöstä tai jätä se pois käytöstä:

    - jos käytät {{<T "VitalControl" >}}-laitettasi useilla ruokintalaitteilla samanaikaisesti,
    - jos viet eläimesi suoraan ruokintalaitteelle rekisteröimättä niitä ensin {{<T "VitalControl" >}}-laitteen kautta. Eläimesi luodaan sitten automaattisesti rekisteröinnin aikana, kun ne ruokitaan ruokintalaitteella ensimmäistä kertaa.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Jos {{<T "VitalControl" >}}-laitetta käytetään useilla koneilla ja tämä vaihtoehto on valittuna, eläimet siirretään tahattomasti koneelta toiselle synkronoinnin aikana.
    </div>
</div>

<span style="font-weight: bold">Aktivoi</span> tämä vaihtoehto:

- jos vastasyntyneiden eläinten alkuperäinen rekisteröinti {{<T "VitalControl" >}}-järjestelmään tapahtuu ennen ensimmäistä ruokintaa ruokintalaitteella.
- jos tallennat ostamasi eläimet skannaamalla niiden eläinpassit {{<T "VitalControl" >}}-järjestelmään.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Aktivoi tämä vaihtoehto vain, jos käytät {{<T "VitalControl" >}}-järjestelmää yhdellä koneella! Jos haluat suorittaa synkronoinnin useiden koneiden kanssa tämän vaihtoehdon ollessa käytössä, sinun on käytettävä erillistä {{<T "VitalControl" >}}-laitetta jokaiselle koneelle.
    </div>
</div>

* Pudotusvalikko <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Tässä pudotusvalikossa voit valita ruokintakäyrän, joka on määritetty eläimille, jotka luodaan uudelleen ruokintalaitteella synkronoinnin aikana.

* Numeerinen syöttökenttä<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Tässä numerokentässä voit määrittää vähimmäisiän (päivinä), josta alkaen eläimet luodaan uudelleen ruokintalaitteella synkronoinnin aikana. Eläimiä, jotka ovat nuorempia kuin määritetty vähimmäisikä, **ei** luoda synkronoinnin aikana.

Paina painiketta <span style="font-size: 140%">⑧</span> siirtyäksesi [sivulle 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">asetukset-valikossa {{<T "VitalControl" >}}</span>.

## Asetusvalikko `{{<T "VitalControl" >}}` - Sivu 2 {#settings-menu-vitalcontrol-page-2}

### Kuinka käsitellä tietokonflikteja synkronoinnin aikana

Tietokonflikteja voi esiintyä, kun synkronoidaan tietoja syöttölaitteen ja {{<T "VitalControl" >}} laitteen välillä. Tietokonflikti syntyy, kun tiedot ovat ristiriitaisia {{<T "VitalControl" >}} laitteessa ja syöttölaitteessa (esim. koskien <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Tällä asetusten valikon sivulla 2 voit määrittää, ratkaistaanko tietokonfliktit synkronoinnin aikana ja miten. Tässä on kolme vaihtoehtoa:

* Etusija annetaan syöttölaitteen tiedoille, {{<T "VitalControl" >}} laitteen tiedot korvataan syöttölaitteen tiedoilla.
  Aktivoi tämä vaihtoehto valitsemalla valintanappi syöttölaitteen symbolin alla vasemmassa sarakkeessa <span style="font-size: 140%">➃</span>.

* Etusija annetaan {{<T "VitalControl" >}} tiedoille, syöttölaitteen tiedot korvataan {{<T "VitalControl" >}} laitteen tiedoilla.
  Aktivoi tämä vaihtoehto valitsemalla valintanappi {{<T "VitalControl" >}} symbolin alla vasemmassa sarakkeessa <span style="font-size: 140%">⑤</span>.

* Muutoksia ei tehdä, sekä syöttölaitteen että {{<T "VitalControl" >}} laitteen tiedot pysyvät muuttumattomina.
  Aktivoi tämä vaihtoehto valitsemalla valintanappi oikeassa sarakkeessa <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Esimerkki</span><br>
            Kun olet ostanut erän vasikoita, rekisteröit ostamasi eläimet {{<T "VitalControl" >}} laitteeseen skannaamalla kaikki niiden eläinpassit. Näiden eläinten eläinnumerot {{<T "VitalControl" >}} laitteessa ovat sitten – riippuen <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">laitteen asetuksista</a> – eläinpassin viimeiset 3-5 numeroa. Sitten asetat Urban-transpondereilla varustetut kaulapannat vastikään ostetuille eläimille ja syötät ne automaattisella syöttölaitteella. Ensimmäisen aseman vierailun aikana eläimet rekisteröidään transponderinsa avulla ja luodaan uudelleen syöttölaitteessa. Kuitenkin näiden uusien eläinten eläinnumerot syöttölaitteessa johdetaan transponderin numerosta tai vastaavat syöttölaitteeseen tallennettua transponderin eläinnumeroa. Tämä tarkoittaa, että eri eläinnumero on nyt annettu samalle eläimelle {{<T "VitalControl" >}} laitteessa ja syöttölaitteessa, mikä johtaa tietokonfliktiin. Käyttämällä valintanappeja <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, voit nyt määrittää asetusten valikossa, kummalla kahdesta rinnakkaisesta eläinnumerosta on etusija ja mikä poistetaan synkronoinnin aikana.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Asetukset Valikko VitalControl: Sivu 2" title="Asetukset VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Kuvakaappaus 3: Asetukset Valikko <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Sivu 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Varoitus:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Sisäisistä syistä muutoksia voidaan tällä hetkellä tehdä vain <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Myöhemmissä laiteohjelmistoversioissa voit tehdä muutoksia myös <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> ja <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Painamalla <span style="font-style: italic;">painiketta</span> <span style="font-size: 140%">⑧</span> palaat [sivulle 1](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` asetukset valikossa.
