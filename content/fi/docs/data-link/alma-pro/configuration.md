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
maphilight: true
aliases: /vc/conf/fi
---
## Vaatimukset

Suosittelemme käyttämään laiteohjelmistoversiota <span style="font-weight: bold">25-04-Vxx</span> tai uudempaa VitalControl-laitteen kanssa.\
Tarkista, mikä laiteohjelmistoversio on asennettu laitteeseesi:

* Siirry syöttölaitteen aloitussivulle napsauttamalla yläreunan `Koti`-painiketta <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Koti-ikonin näyttö" title="Alma Pro: Koti-näyttö"/>&nbsp; näytön vasemmanpuoleisessa navigointipalkissa.
* Aloitusnäytössä napsauta `Ohje`-painiketta <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Ohje-valikon ikoni" title="Alma Pro: Ohje-näyttö"/>&nbsp; näytön oikeassa yläkulmassa.
* Versio numero <span style="font-size: 140%">➂</span> näkyy nyt kielenvaihtopainikkeen vasemmalla puolella.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: laiteohjelmistoversion tarkistus" title="Alma Pro: laiteohjelmistoversion tarkistus" />
    <figcaption class="figure-caption fs-6">Kuvakaappaus 1: <span style="font-style: italic;">Alma Pro: laiteohjelmistoversion tarkistus</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Jos syöttölaitteesi laiteohjelmistoversio on alle <span style="font-weight: bold">25-04-Vxx</span>, alla olevien kuvakaappausten ja kosketusnäytön näytön välillä voi olla eroja, joten et ehkä pysty seuraamaan ohjeita. Tässä tapauksessa ota yhteyttä huoltoteknikkoosi päivittääksesi syöttölaitteesi laiteohjelmiston.<br>
    </div>
</div>

## Navigointi asetusten valikkoon `{{% T "VitalControl" %}}`

{{% alert title="Huomio" %}}
Aktivoidaksesi ja asettaaksesi {{<T "VitalControl" >}}-laitteen, sinun on oltava kirjautuneena sisään {{<T "SiteManager" >}}-käyttäjäroolilla automaattisella syöttölaitteella. Muutoin jotkin alla näkyvistä ja kuvatuista painikkeista eivät ole näkyvissä sinulle.
{{% /alert %}}

1. Napsauta alareunan painiketta <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Asetusvalikko" title="Asetukset"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> kosketusterminaalin vasemmassa sivupalkissa. Jos olet päävalikossa, jossa sivupalkki ei ole näkyvissä, paina painiketta &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Syöttölaitteen valikko" title="Syöttölaitteen valikko"/>`{{<T "Feeder" >}}`näyttääksesi sivupalkin.

1. Napsauta toista painiketta vasemmalta <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Kosketusterminaalin asetukset" title="Kosketusasetukset"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> kosketusterminaalin alatyökalupalkissa.

1. Sarja valikkokohteita ilmestyy nyt keskialueen vasemmalle puoliskolle. Napsauta alareunan painiketta `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Valikkokohta (tai mahdollisesti useita) ilmestyy nyt keskialueen oikealle puoliskolle. Napsauta yläreunan painiketta `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Painike siirtyy nyt vasemmalle näyttöpuoliskolle.

1. Näytön oikean puolen alareunassa näkyy nyt painike &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Avaa VitalControl-asetukset" title="Avaa asetukset" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Napsauta tätä painiketta, ja ponnahdusikkuna avautuu, näyttäen [Sivu 1](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}`-asetusten valikosta.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="Avaa VitalControl-asetukset"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Avaa VitalControl-asetukset" />
    </div>
    <map name="NavigationToVitalControlSettingsMenu">
        <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='{{<T "Settings" >}}' href="#Navigation_Digit_1">
        <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='{{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
        <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='{{<T "Accessories" >}}' href="#Navigation_Digit_3">
        <area shape="rect" coords="520,150,870,197" alt='{{<T "VitalControl" >}}' title='{{<T "VitalControl" >}}' href="#Navigation_Digit_4">
        <area shape="rect" coords="580,582,850,636" alt='{{<T "OpenSettings" >}}' title='{{<T "OpenSettings" >}}' href="#Navigation_Digit_5">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Kuvakaappaus 2: Pääsy <span style="font-style: italic;">{{<T "VitalControl" >}}</span> asetusten valikkoon
</figcaption>

`{{<T "VitalControl" >}}` -asetusten valikko on jaettu kahdelle sivulle:

## `{{% T "VitalControl" %}}` Asetusvalikko - Sivu 1 {#settings-menu-vitalcontrol-page-1}

Sivu 1 <span style="font-style: italic;">{{<T "VitalControl" >}}</span> -asetusten valikosta esitetään seuraavasti:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="VitalControl-asetusvalikko: Sivu 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="VitalControl-asetukset (1)" />
    </div>
    <map name="VitalControlSettingsPage1">
        <area shape="rect" coords="253,45,626,107" alt='{{<T "YES" >}}/{{<T "NO" >}}' title='{{<T "YES" >}}/{{<T "NO" >}}' href="#VitalControlSettingsPage1_Digit_1">
        <area shape="rect" coords="11,236,88,316" alt='{{<T "RegisterNewOnVitalControlDevice" >}}' title='{{<T "RegisterNewOnVitalControlDevice" >}}' href="#VitalControlSettingsPage1_Digit_2">
        <area shape="rect" coords="11,357,88,434" alt='{{<T "DeleteFromVitalControl" >}}' title='{{<T "DeleteFromVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
        <area shape="rect" coords="31,463,357,508" alt='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' title='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' href="#VitalControlSettingsPage1_Digit_4">
        <area shape="rect" coords="420,236,511,286" alt='{{<T "RegisterNewOnAutomaticFeeder" >}}' title='{{<T "RegisterNewOnAutomaticFeeder" >}}' href="#VitalControlSettingsPage1_Digit_5">
        <area shape="rect" coords="435,352,837,397" alt='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' title='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' href="#VitalControlSettingsPage1_Digit_6">
        <area shape="rect" coords="513,462,837,507" alt='{{<T "DoNotImportAnimalsOlderThan" >}}' title='{{<T "DoNotImportAnimalsOlderThan" >}}' href="#VitalControlSettingsPage1_Digit_7">
        <area shape="rect" coords="142,517,215,616" alt='Page 2' title='Page 2' href="#VitalControlSettingsPage1_Digit_8">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Kuvakaappaus 3: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> -asetusten valikko, Sivu 1
</figcaption>

Tällä sivulla voit suorittaa seuraavat toiminnot ja asetukset.

### {{% T "VitalControl" %}}-laitteen aktivointi {#activation-vitalcontrol}

Koneen oletustilassa {{<T "VitalControl" >}} on deaktivoitu. Aseta <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> -kytkin <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> oikeaan asentoon <span style="font-style: italic;">{{<T "YES" >}}</span> aktivoidaksesi {{<T "VitalControl" >}} -laitteen. Tämän jälkeen syöttölaitteen valikon oikeassa sivupalkissa, yhdistetyn koneen kuvakkeen alapuolella, näytetään `{{<T "VitalControl" >}}` -laitteen kuvake <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl-laite" title="VitalControl"/> (katso kuvakaappaus <span style="font-style: italic;"><a href="../synchronisation#figure3_synchronize_vitalcontrol_alma_pro">Syöttölaitteen valikko</a></span>, kuva <span style="font-size: 140%">➂</span> siellä).

### Synkronointi automaattinen syöttölaite <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Näytön vasemmalla puolella on kaksi valintaruutua:

* Valintaruutu <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Tämä vaihtoehto ohjaa toimintaa tilanteessa, jossa syöttölaitteella on synkronoinnin aikana eläimiä, joita {{<T "VitalControl" >}}-laite ei vielä tunne. Tämä vaihtoehto on oletuksena käytössä ja sen tulisi yleensä pysyä asetettuna. Jos rekisteröit ostamasi eläimet skannaamalla niiden eläinpassit, tämä vaihtoehto on poistettava käytöstä.

<span style="font-weight: bold">Ota tämä vaihtoehto käyttöön:</span>

- jos sinulla on edessäsi uusi {{<T "VitalControl" >}}, johon haluat siirtää kaikki eläimet syöttölaitteelta. Synkronoinnin jälkeen kaikki syöttölaitteella tunnetut eläimet ovat myös {{<T "VitalControl" >}}-laitteessa.
- jos tuot jatkuvasti uusia vasikoita syöttölaitteelle käynnissä olevan toiminnan aikana. Nämä eläimet luodaan sitten myös {{<T "VitalControl" >}}-laitteeseen synkronoinnin aikana.

<span style="font-weight: bold">Poista tämä vaihtoehto käytöstä:</span>

- jos olet luonut uusia eläimiä {{<T "VitalControl" >}}-laitteeseesi skannaamalla niiden eläinpassit, missä
- näille eläimille ei ole vielä annettu transponderia ja
- nämä eläimet ovat jo syöttölaitteella ja siten rekisteröity siellä.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Jos vaihtoehto pysyy asetettuna yllä olevassa kokoonpanossa, eläimet ovat synkronoinnin jälkeen kahdesti {{<T "VitalControl" >}}-laitteessa.
    </div>
</div>

* Valintaruutu <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Tämä vaihtoehto hallitsee, poistetaanko eläimet, jotka ovat läsnä vain {{<T "VitalControl" >}}:ssa mutta eivät ruokintalaitteessa, {{<T "VitalControl" >}}:sta seuraavan synkronoinnin aikana. Jos käytät {{<T "VitalControl" >}}:a vain eläinten maitokauden aikana, tämä vaihtoehto tulisi ottaa käyttöön. Jos haluat seurata eläimiä maitokauden jälkeen, sinun on poistettava tämä vaihtoehto käytöstä.

<span style="font-weight: bold">Ota tämä vaihtoehto käyttöön:</span>

- jos keräät tietoja eläimistä vain maitokauden aikana,
- jos haluat, että eläimet poistetaan {{<T "VitalControl" >}}:sta seuraavan synkronoinnin aikana sen jälkeen, kun ne on poistettu ruokintalaitteesta. Näin eläimet eivät kerry {{<T "VitalControl" >}}:iin ajan myötä.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Jos tämä vaihtoehto on aktivoitu ja valintaruutu <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> on myös aktivoitu, eläimiä, jotka ovat nuorempia kuin numerokentässä määritetty <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>, ei poisteta.
    </div>
</div>

<span style="font-weight: bold">Poista tämä vaihtoehto käytöstä:</span>
- jos haluat jatkaa eläinten tietojen keräämistä maitokauden jälkeen, esimerkiksi punnituksen aikana,
- jos olet valmis poistamaan eläimet {{<T "VitalControl" >}}:sta itse manuaalisesti.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Jos poistat tämän vaihtoehdon käytöstä, sinun on poistettava vieroitettujen eläinten transponderi {{<T "VitalControl" >}}-laitteesta viimeistään, kun panta siirretään vieroitetulta vasikalta toiselle, nuoremmalle vasikalle. Jos transponderia ei poisteta, nuoremman eläimen - joka nyt käyttää vieroitetun eläimen entistä pantaa - tietueet lisätään virheellisesti vieroitetun eläimen tietokantaan.
    </div>
</div>

### Synkronointi {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Automaattinen ruokintalaite

Näytön oikealla puolella on valintaruutu ja kaksi syöttökenttää:

* Valintaruutu <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Tämä vaihtoehto ohjaa, luodaanko {{<T "VitalControl" >}}-laitteessa olevat eläimet, jotka eivät ole tunnettuja ruokintalaitteelle, ruokintalaitteelle seuraavan synkronoinnin aikana. Oletuksena tämä vaihtoehto ei ole aktivoitu.

    <span style="font-weight: bold">Poista</span> tämä vaihtoehto käytöstä tai jätä se pois käytöstä:

    - jos käytät {{<T "VitalControl" >}}-laitettasi useilla ruokintalaitteilla samanaikaisesti,
    - jos viet eläimesi suoraan ruokintalaitteelle rekisteröimättä niitä ensin {{<T "VitalControl" >}}-laitteen kautta. Eläimesi luodaan sitten automaattisesti rekisteröinnin aikana, kun niitä ruokitaan ruokintalaitteella ensimmäistä kertaa.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Jos {{<T "VitalControl" >}} käytetään useilla koneilla ja tämä vaihtoehto on valittu, eläimet siirtyvät tahattomasti koneelta toiselle synkronoinnin aikana.
    </div>
</div>

<span style="font-weight: bold">Aktivoi</span> tämä vaihtoehto:

- jos vastasyntyneiden eläinten alkuperäinen rekisteröinti {{<T "VitalControl" >}}:lla tapahtuu ennen ensimmäistä ruokintaa ruokintalaitteella.
- jos tallennat ostamasi eläimet skannaamalla niiden eläinpassit {{<T "VitalControl" >}}:lla.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Aktivoi tämä vaihtoehto vain, jos käytät {{<T "VitalControl" >}}:a yhdellä koneella! Jos haluat suorittaa synkronoinnin useilla koneilla tämän vaihtoehdon ollessa asetettuna, sinun on käytettävä erillistä {{<T "VitalControl" >}}-laitetta jokaiselle koneelle.
    </div>
</div>

* Pudotusvalikko <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Tässä pudotusvalikossa voit valita ruokintakäyrän, joka on liitetty eläimiin, jotka luodaan uudelleen syöttölaitteessa synkronoinnin aikana.

* Numeraalinen syöttökenttä<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Tässä numerokentässä voit määrittää vähimmäisiän (päivinä), josta alkaen eläimet luodaan uudelleen syöttölaitteessa synkronoinnin aikana. Eläimiä, jotka ovat nuorempia kuin määritetty vähimmäisikä, **ei** luoda synkronoinnin aikana.

Paina painiketta <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> siirtyäksesi [sivulle 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">asetukset-valikossa {{<T "VitalControl" >}}</span>.

## Asetukset-valikko `{{% T "VitalControl" %}}` - Sivu 2 {#settings-menu-vitalcontrol-page-2}

### Kuinka käsitellä tietokonflikteja synkronoinnin aikana

Tietokonflikteja voi esiintyä, kun synkronoidaan tietoja syöttölaitteen ja {{<T "VitalControl" >}} laitteen välillä. Tietokonflikti syntyy, kun tiedot ovat ristiriidassa {{<T "VitalControl" >}} laitteen ja syöttölaitteen välillä (esim. koskien <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Tällä asetukset-valikon sivulla 2 voit määrittää, ratkaistaanko tietokonfliktit synkronoinnin aikana ja miten. Tässä on kolme vaihtoehtoa:

* Etusija annetaan syöttölaitteen tiedoille, {{<T "VitalControl" >}} laitteen tiedot korvataan syöttölaitteen tiedoilla.
  Aktivoi tämä vaihtoehto valitsemalla valintanappi vasemmassa sarakkeessa syöttölaitteen symbolin alla <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Etusija annetaan {{<T "VitalControl" >}} tiedoille, syöttölaitteen tiedot korvataan {{<T "VitalControl" >}} laitteen tiedoilla.
  Aktivoi tämä vaihtoehto valitsemalla valintanappi vasemmassa sarakkeessa {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span> alla.


* Ei muutoksia tehdä, sekä syöttölaitteen että {{<T "VitalControl" >}} laitteen tiedot pysyvät muuttumattomina.\
  Aktivoi tämä vaihtoehto valitsemalla valintanappi oikeanpuoleisessa sarakkeessa <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Esimerkki</span><br>
            Kun olet ostanut erän vasikoita, rekisteröit ostamasi eläimet {{<T "VitalControl" >}} laitteeseen skannaamalla kaikki niiden eläinpassit. Näiden eläinten eläinnumerot {{<T "VitalControl" >}} laitteessa ovat sitten – riippuen <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">laitteen asetuksista</a> – eläinpassin viimeiset 3-5 numeroa. Sitten asetat Urban-transpondereilla varustetut kaulapannat vastikään ostetuille eläimille ja syötät ne automaattisella syöttölaitteella. Ensimmäisen aseman vierailun aikana eläimet rekisteröidään transponderinsa avulla ja luodaan uudelleen syöttölaitteessa. Kuitenkin näiden uusien eläinten eläinnumerot syöttölaitteessa johdetaan transponderin numerosta tai vastaavat syöttölaitteeseen tallennettua transponderin eläinnumeroa. Tämä tarkoittaa, että samalle eläimelle on nyt annettu eri eläinnumero {{<T "VitalControl" >}} laitteessa ja syöttölaitteessa, mikä johtaa tietokonfliktiin. Käyttämällä valintanappeja <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, voit nyt määrittää asetusten valikossa, kummalla kahdesta rinnakkaisesta eläinnumerosta on etusija ja mikä poistetaan synkronoinnin aikana.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Asetusvalikko VitalControl: Sivu 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Asetukset VitalControl (2)" />
    </div>
    <map name="VitalControlSettingsPage2">
        <area shape="rect" coords="5,208,235,248" alt='{{<T "EarTagNumber" >}}' title='{{<T "EarTagNumber" >}}' href="#VitalControlSettingsPage2_Digit_1">
        <area shape="rect" coords="5,285,235,328" alt='{{<T "AnimalNumber" >}}' title='{{<T "AnimalNumber" >}}' href="#VitalControlSettingsPage2_Digit_2">
        <area shape="rect" coords="5,368,235,408" alt='{{<T "DateOfBirth" >}}' title='{{<T "DateOfBirth" >}}' href="#VitalControlSettingsPage2_Digit_3">
        <area shape="rect" coords="392,116,455,177" alt='{{<T "Feeder" >}}' title='{{<T "Feeder" >}}' href="#VitalControlSettingsPage2_Digit_4">
        <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='{{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
        <area shape="rect" coords="678,97,775,159" alt='{{<T "NoChange_AP" >}}' title='{{<T "NoChange_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
        <area shape="rect" coords="52,510,125,615" alt='Page 1' title='Page 1' href="#VitalControlSettingsPage2_Digit_8">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Kuvakaappaus 4: Asetusvalikko <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Sivu 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Sisäisistä syistä muutoksia voidaan tällä hetkellä tehdä vain <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Myöhemmissä laiteohjelmistoversioissa voit tehdä muutoksia myös <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> ja <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Painamalla <span style="font-style: italic;">painiketta</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> palaat [sivulle 1](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` asetusten valikossa.
