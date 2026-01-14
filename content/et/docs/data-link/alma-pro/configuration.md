---
title: Seadme ühekordne aktiveerimine ja seadistamine automaatse sööturi seadetes
linkTitle: Seadistamine
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Enne VitalControli esmakordset kasutamist peate selle Alma Pro sööturi seadetes aktiveerima ja õigesti seadistama.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/et
---
## Nõuded

Soovitame kasutada VitalControl seadmega püsivara versiooni <span style="font-weight: bold">25-04-Vxx</span> või uuemat.\
Püsivara versiooni kontrollimiseks, mis on teie seadmesse installitud:

* Liikuge sööturi avalehele, klõpsates ülemist `Avaleht` nuppu <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Avalehe ikoon" title="Alma Pro: Avaleht"/>&nbsp; ekraani vasakpoolses navigatsiooniribal.
* Avalehel klõpsake `Abi` nuppu <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Abi menüü ikoon" title="Alma Pro: Abi ekraan"/>&nbsp; ekraani paremas ülanurgas.
* Versiooninumber <span style="font-size: 140%">➂</span> kuvatakse nüüd keelelüliti nupu vasakul.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: püsivara versiooni kontroll" title="Alma Pro: püsivara versiooni kontroll" />
    <figcaption class="figure-caption fs-6">Ekraanipilt 1: <span style="font-style: italic;">Alma Pro: püsivara versiooni kontroll</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
        Kui teie sööturi püsivara versioon on madalam kui <span style="font-weight: bold">25-04-Vxx</span>, võivad allpool toodud ekraanipildid ja teie puuteekraani kuva erineda, mistõttu ei pruugi te juhiseid järgida. Sellisel juhul võtke ühendust oma teenindustehnikuga, et uuendada sööturi püsivara.<br>
    </div>
</div>

## Navigeerimine seadete menüüsse `{{% T "VitalControl" %}}`

{{% alert title="Tähelepanu" %}}
{{<T "VitalControl" >}} seadme aktiveerimiseks ja seadistamiseks peate olema automaatse söötja juures sisse logitud kui {{<T "SiteManager" >}} kasutajaroll. Vastasel juhul ei ole mõned allpool näidatud ja kirjeldatud nupud teile nähtavad.
{{% /alert %}}

1. Klõpsake alumisel nupul <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Seadete menüü" title="Seaded"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> puuteterminali vasakus külgribas. Kui olete põhimenüüs, kus külgriba ei ole nähtav, vajutage nuppu &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Söötja menüü" title="Söötja menüü"/>`{{<T "Feeder" >}}`, et kuvada külgriba.

1. Klõpsake teisel nupul vasakult <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Puuteterminali seaded" title="Puuteseaded"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> puuteterminali alumises tööriistaribas.

1. Nüüd ilmub keskekraani vasakule poolele rida menüüelemente. Klõpsake alumisel nupul `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Nüüd ilmub keskekraani paremale poolele menüüelement (või mitu). Klõpsake ülemisel nupul `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Nupp liigub nüüd vasakule ekraanipoolele.

1. Ekraani paremal allosas kuvatakse nupp &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Ava VitalControl seaded" title="Ava seaded" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Klõpsake seda nuppu ja avaneb hüpikaken, mis kuvab [Lehekülg 1](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` seadete menüüst.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="Ava VitalControl seaded"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Ava VitalControl seaded" />
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
    Ekraanipilt 2: Juurdepääs <span style="font-style: italic;">{{<T "VitalControl" >}}</span> seadete menüüsse
</figcaption>

`{{<T "VitalControl" >}}` seadete menüü on jaotatud kahe lehe vahel:

## `{{% T "VitalControl" %}}` Seadete Menüü - Lehekülg 1 {#settings-menu-vitalcontrol-page-1}

Lehekülg 1 <span style="font-style: italic;">{{<T "VitalControl" >}}</span> seadete menüüst on esitatud järgmiselt:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="VitalControl seadete menüü: Lehekülg 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="VitalControl seaded (1)" />
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
    Ekraanipilt 3: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> seadete menüü, Lehekülg 1
</figcaption>

Sellel lehel saate teha järgmisi toiminguid ja seadeid.

### {{% T "VitalControl" %}} Seadme aktiveerimine {#activation-vitalcontrol}

Masina vaikeseisundis on {{<T "VitalControl" >}} deaktiveeritud. Seadke lüliti <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> paremale asendisse <span style="font-style: italic;">{{<T "YES" >}}</span>, et aktiveerida {{<T "VitalControl" >}} seade. Seejärel kuvatakse sööturi menüü paremas külgribas, ühendatud masina(te) ikooni(de) all, ikoon <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl seade" title="VitalControl"/> `{{<T "VitalControl" >}}` seadme jaoks (vt ekraanipilt <span style="font-style: italic;"><a href="../synchronisation#figure3_synchronize_vitalcontrol_alma_pro">Sööturi Menüü</a></span>, joonis <span style="font-size: 140%">➂</span> seal).

### Sünkroniseerimine automaatne söötur <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Ekraani vasakul küljel on kaks märkeruutu:

* Märkeruut <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

    See valik kontrollib käitumist juhul, kui sünkroniseerimise ajal on söötjal loomi, keda {{<T "VitalControl" >}} seade veel ei tunne. See valik on vaikimisi lubatud ja peaks üldiselt jääma lubatuks. Kui registreerite oma ostetud loomad nende loomapasside skaneerimise teel, tuleb see valik keelata.

    <span style="font-weight: bold">Luba</span> see valik:

    - kui teil on uus {{<T "VitalControl" >}} teie ees, kuhu soovite kõik loomad söötjalt üle kanda. Pärast sünkroniseerimist on kõik söötjal tuntud loomad ka {{<T "VitalControl" >}} seadmes.
    - kui toote pidevalt uusi vasikaid söötjale käimasoleva töö ajal. Need loomad luuakse siis ka {{<T "VitalControl" >}} seadmes sünkroniseerimise ajal.

    <span style="font-weight: bold">Keela</span> see valik:

    - kui olete oma {{<T "VitalControl" >}} seadmes loonud uusi loomi nende loomapasside skaneerimise teel, kus
    - neile loomadele pole veel määratud transponderit ja
    - need loomad on juba söötjal ja seega seal registreeritud.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
                Kui valik jääb ülaltoodud konfiguratsioonis lubatuks, on loomad pärast sünkroniseerimist {{<T "VitalControl" >}} seadmes kaks korda.
            </div>
        </div>

* Märkeruut <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

See valik kontrollib, kas loomad, kes on ainult {{<T "VitalControl" >}}-is, kuid mitte söötjas, kustutatakse {{<T "VitalControl" >}}-ist järgmise sünkroniseerimise ajal. Kui kasutate {{<T "VitalControl" >}}-i ainult loomade laktatsiooniperioodil, tuleks see valik lubada. Kui soovite jälgida loomi ka pärast laktatsiooniperioodi, peate selle valiku keelama.

<span style="font-weight: bold">Luba</span> see valik:

- kui kogute andmeid loomade kohta ainult laktatsiooniperioodil,
- kui soovite, et loomad kustutataks {{<T "VitalControl" >}}-ist järgmise sünkroniseerimise ajal pärast nende kustutamist söötjast. Nii ei kogune loomad aja jooksul {{<T "VitalControl" >}}-isse.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
        Kui see valik on aktiveeritud ja märkeruut <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> on samuti aktiveeritud, ei kustutata ühtegi looma, kes on noorem kui määratud arvuväljal <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Keela</span> see valik:
- kui soovite jätkata loomade andmete kogumist pärast laktatsiooniperioodi, näiteks kaalumise ajal,
- kui olete valmis loomi ise käsitsi {{<T "VitalControl" >}}-ist kustutama.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
        Kui te selle valiku keelata, peate transponderi lahti ühendama {{<T "VitalControl" >}} seadmes võõrutatud loomade jaoks hiljemalt siis, kui kaelarihm eemaldatakse võõrutatud vasikalt ja pannakse teisele, nooremale vasikale. Kui transponderit ei eemaldata, lisatakse noorema looma andmed - kes nüüd kannab võõrutatud looma endist kaelarihma - valesti võõrutatud loomade andmekogumisse.
    </div>
</div>

### Sünkroniseerimine {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Automaatne söötja

Ekraani paremal küljel on märkeruut ja kaks sisendvälja:

* Märkeruut <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- See valik kontrollib, kas {{<T "VitalControl" >}} seadmes olevad loomad, kes on söötjale tundmatud, luuakse söötjal järgmise sünkroniseerimise ajal. Vaikimisi pole see valik aktiveeritud.

    <span style="font-weight: bold">Deaktiveerige</span> see valik või jätke see deaktiveerituks:

    - kui kasutate oma {{<T "VitalControl" >}} seadet mitmel söötjal samaaegselt,
    - kui viite oma loomad otse söötjale, ilma et neid esmalt {{<T "VitalControl" >}} seadme kaudu registreeriksite. Teie loomad luuakse automaatselt registreerimise ajal, kui neid esimest korda söötjal toidetakse.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
            Kui {{<T "VitalControl" >}} kasutatakse mitmel masinal ja see valik on märgitud, kantakse loomad sünkroniseerimise ajal tahtmatult ühelt masinalt teisele.
        </div>
    </div>

    <span style="font-weight: bold">Aktiveeri</span> see valik:

    - kui nende vastsündinud loomade esmane registreerimine {{<T "VitalControl" >}} toimub enne esimest söötmist sööturil.
    - kui registreerite oma ostetud loomad, skaneerides nende loomapassid {{<T "VitalControl" >}}.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
            Aktiveeri see valik ainult siis, kui kasutad {{<T "VitalControl" >}} ühel masinal! Kui soovid selle valikuga sünkroniseerimist mitme masinaga, pead kasutama iga masina jaoks eraldi {{<T "VitalControl" >}} seadet.
        </div>
    </div>

* Rippmenüü <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Selles rippmenüüs saate valida sööda kõvera, mis määratakse loomadele, kes luuakse sünkroniseerimise ajal söödaautomaadil.

* Numbriline sisestusväli<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Selles numbriväljas saate määrata minimaalse vanuse (päevades), millest alates loomad luuakse sünkroniseerimise ajal söödaautomaadil. Loomi, kes on nooremad kui määratud minimaalne vanus, **ei** looda sünkroniseerimise ajal.

Vajutage nuppu <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span>, et liikuda <span style="font-style: italic;">seadete menüü {{<T "VitalControl" >}}</span> [lehele 2](#settings-menu-vitalcontrol-page-2).

## Seadete menüü `{{% T "VitalControl" %}}` - Leht 2 {#settings-menu-vitalcontrol-page-2}

### Kuidas lahendada andmete konflikte sünkroniseerimise ajal

Andmete konfliktid võivad tekkida, kui sünkroniseeritakse andmeid söödaautomaadi ja {{<T "VitalControl" >}} seadme vahel. Andmete konflikt tekib siis, kui andmed on vastuolus {{<T "VitalControl" >}} seadmel ja söödaautomaadil (nt seoses <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Selle seadete menüü lehe 2 peal saate määrata, kas ja kuidas andmete konfliktid lahendatakse sünkroniseerimise ajal. Siin on kolm võimalust:

* Eelistatakse söödaautomaadi andmeid, {{<T "VitalControl" >}} seadme andmed kirjutatakse üle söödaautomaadi omadega\.
  Aktiveerige see valik, valides raadionupu vasakpoolses veerus söödaautomaadi sümboli all <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Eelistatakse {{<T "VitalControl" >}} andmeid, söödaautomaadi andmed kirjutatakse üle {{<T "VitalControl" >}} seadme omadega\.
  Aktiveerige see valik, valides raadionupu vasakpoolses veerus {{<T "VitalControl" >}} all <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* Muudatusi ei tehta, nii sööturi andmed kui ka {{<T "VitalControl" >}} seadme andmed jäävad muutumatuks.\
  Selle valiku aktiveerimiseks valige raadionupp parempoolses veerus <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Näide</span><br>
            Pärast vasikate partii ostmist registreerite oma ostetud loomad {{<T "VitalControl" >}}-is, skaneerides kõik nende loomapassid. Nende loomade loomade numbrid {{<T "VitalControl" >}}-is on siis – sõltuvalt <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">seadme seadistustest</a> – looma passi viimased 3-5 numbrit. Seejärel panete äsja ostetud loomadele kaelarihmad Urban transponderitega ja toidate neid automaatsööturis. Esmakordsel jaamas käimisel registreeritakse loomad nende transponderi abil ja luuakse sööturis uued. Kuid nende uute loomade loomade numbrid sööturis tuletatakse transponderi numbrist või vastavad sellele transponderile sööturis salvestatud loomade numbrile. See tähendab, et samale loomale on nüüd määratud erinev loomade number {{<T "VitalControl" >}} seadmes ja sööturis, mis põhjustab andmekonflikti. Kasutades raadionuppe <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, saate nüüd seadete menüüs määrata, milline kahest paralleelsest loomade numbrist on prioriteetne ja milline kustutatakse sünkroniseerimise ajal.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Seadete menüü VitalControl: Lehekülg 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Seaded VitalControl (2)" />
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
    Ekraanipilt 4: Seadete menüü <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Lehekülg 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
        Sisemistel põhjustel saab muudatusi praegu teha ainult <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Hilisemates püsivara versioonides saate teha muudatusi ka <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> ja <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Vajutades <span style="font-style: italic;">nuppu</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> naasete [leheküljele 1](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` seadete menüüs.
