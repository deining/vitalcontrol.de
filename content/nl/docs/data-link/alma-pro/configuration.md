---
title: Eenmalige Activering en Configuratie van het Apparaat in de automatische voerbak Instellingen
linkTitle: Configuratie
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Voordat u de VitalControl voor de eerste keer gebruikt, moet u deze eenmalig activeren en correct configureren in de instellingen van de Alma Pro voerbak.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/nl
---
## Vereisten

We raden aan om een firmwareversie <span style="font-weight: bold">24-xx-xx</span> of hoger te gebruiken met het VitalControl-apparaat.\
Om te controleren welke firmwareversie op uw apparaat is geïnstalleerd:

* Navigeer naar de startpagina van de voerbak door op de bovenste `Home` knop <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Startscherm icoon" title="Alma Pro: Startscherm"/>&nbsp; in de navigatiebalk aan de linkerkant van het scherm te klikken.
* Klik op het startscherm op de `Help` knop <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Help menu icoon" title="Alma Pro: Help scherm"/>&nbsp; in de rechterbovenhoek van het scherm.
* Het versienummer <span style="font-size: 140%">➂</span> wordt nu links van de taalwisselknop weergegeven.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: controle van firmwareversie" title="Alma Pro: controle van firmwareversie" />
    <figcaption class="figure-caption fs-6">Screenshot 1: <span style="font-style: italic;">Alma Pro: controle van firmwareversie</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Let op</span><br>
        Als de firmwareversie van uw voerbak lager is dan <span style="font-weight: bold">24-xx-xx</span>, kunnen er verschillen zijn tussen de onderstaande screenshots en de weergave op uw touchscreen, waardoor u de instructies mogelijk niet kunt volgen. Neem in dit geval contact op met uw servicetechnicus om de firmware op uw voerbak bij te werken.<br>
    </div>
</div>

## Navigatie naar instellingenmenu `{{% T "VitalControl" %}}`

{{% alert title="Let op" %}}
Om het {{<T "VitalControl" >}} apparaat te activeren en in te stellen, moet u ingelogd zijn als de {{<T "SiteManager" >}} gebruikersrol bij de automatische voeder. Anders zijn sommige van de knoppen die hieronder worden getoond en beschreven niet zichtbaar voor u.
{{% /alert %}}

1. Klik op de onderste knop <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Instellingenmenu" title="Instellingen"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> in de linkerzijbalk van de aanraakterminal. Als u in het hoofdmenu bent waar geen zijbalk zichtbaar is, druk dan op de knop &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Voedermenu" title="Voedermenu"/>`{{<T "Feeder" >}}`om de zijbalk weer te geven.

1. Klik op de tweede knop van links <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Aanraakterminalinstellingen" title="Aanraakinstellingen"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> in de onderste werkbalk van de aanraakterminal.

1. Er verschijnt nu een reeks menu-items aan de linkerhelft van het centrale schermgebied. Klik op de onderste knop `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Er verschijnt nu een menu-item (of mogelijk meerdere) aan de rechterhelft van het centrale schermgebied. Klik op de bovenste knop `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. De knop schakelt nu naar de linker schermhelft.

1. Onderaan de rechterkant van het scherm wordt de knop &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Open VitalControl-instellingen" title="Instellingen openen" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span> nu weergegeven. Klik op deze knop en er opent een pop-upvenster dat [Pagina 1](#settings-menu-vitalcontrol-page-1) van het `{{<T "VitalControl" >}}` instellingenmenu toont.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="VitalControl-instellingen: Toegang"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Toegang tot VitalControl-instellingenmenu" />
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
    Screenshot 2: Toegang tot het <span style="font-style: italic;">{{<T "VitalControl" >}}</span> instellingenmenu
</figcaption>

Het `{{<T "VitalControl" >}}` instellingenmenu is verdeeld over twee pagina's:

## `{{% T "VitalControl" %}}` Instellingenmenu - Pagina 1 {#settings-menu-vitalcontrol-page-1}

Pagina 1 van het <span style="font-style: italic;">{{<T "VitalControl" >}}</span> instellingenmenu wordt als volgt gepresenteerd:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="VitalControl instellingenmenu: Pagina 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="VitalControl instellingen (1)" />
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
    Screenshot 3: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> instellingenmenu, Pagina 1
</figcaption>

Op deze pagina kunt u de volgende acties en instellingen uitvoeren.

### Activering van het {{% T "VitalControl" %}} apparaat {#activation-vitalcontrol}

In de standaardtoestand van de machine is de {{<T "VitalControl" >}} gedeactiveerd. Zet de <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> schakelaar <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> naar de rechterpositie <span style="font-style: italic;">{{<T "YES" >}}</span> om het {{<T "VitalControl" >}} apparaat te activeren. Vervolgens wordt in de rechterzijbalk van het invoermenu, onder het/de pictogram(men) voor de aangesloten machine(s), het pictogram <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl apparaat" title="VitalControl"/> voor het `{{<T "VitalControl" >}}` apparaat weergegeven (zie Screenshot <span style="font-style: italic;"><a href="../synchronisation#figure3_synchronize_vitalcontrol_alma_pro">Invoermenu</a></span>, figuur <span style="font-size: 140%">➂</span> daar).

### Synchronisatie automatische invoer <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Aan de linkerkant van het scherm zijn er twee selectievakjes:

* Selectievakje <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Deze optie regelt het gedrag in het geval dat er dieren aanwezig zijn op de voederbak tijdens de synchronisatie die nog niet bekend zijn bij het {{<T "VitalControl" >}} apparaat. Deze optie is standaard ingeschakeld en moet over het algemeen ingeschakeld blijven. Als je je aangekochte dieren registreert door hun dierenpaspoorten te scannen, moet deze optie worden uitgeschakeld.

<span style="font-weight: bold">Schakel</span> deze optie in:

- als je een gloednieuwe {{<T "VitalControl" >}} voor je hebt, waarop je alle dieren van een voederbak wilt overzetten. Na synchronisatie zullen alle dieren die bekend zijn bij de voederbak ook aanwezig zijn op de {{<T "VitalControl" >}}.
- als je continu nieuwe kalveren naar de voederbak brengt tijdens lopende operaties. Deze dieren zullen dan ook worden aangemaakt op het {{<T "VitalControl" >}} apparaat tijdens synchronisatie.

<span style="font-weight: bold">Schakel</span> deze optie uit:

- als je nieuw aangemaakte dieren op je {{<T "VitalControl" >}} hebt door hun dierenpaspoorten te scannen, waarbij
- deze dieren nog geen transponder hebben toegewezen gekregen en
- deze dieren al worden gevoerd bij de voederbak en daar dus geregistreerd zijn.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Let op</span><br>
        Als de optie in de bovenstaande configuratie ingeschakeld blijft, zullen dieren na synchronisatie dubbel aanwezig zijn op de {{<T "VitalControl" >}}.
    </div>
</div>

* Checkbox <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Deze optie bepaalt of dieren die alleen aanwezig zijn op de {{<T "VitalControl" >}} maar niet op de voederbak, worden verwijderd van de {{<T "VitalControl" >}} tijdens de volgende synchronisatie. Als je de {{<T "VitalControl" >}} alleen gebruikt tijdens de melkperiode van de dieren, moet deze optie ingeschakeld zijn. Als je de dieren wilt volgen na de melkperiode, moet je deze optie uitschakelen.

<span style="font-weight: bold">Schakel</span> deze optie in:

- als je alleen gegevens verzamelt voor de dieren tijdens de melkperiode,
- als je wilt dat de dieren worden verwijderd van de {{<T "VitalControl" >}} tijdens de volgende synchronisatie nadat ze zijn verwijderd van de voederbak. Op deze manier hopen dieren zich niet op de {{<T "VitalControl" >}} na verloop van tijd.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Let op</span><br>
        Als deze optie is geactiveerd en het selectievakje <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> ook is geactiveerd, worden er geen dieren verwijderd die jonger zijn dan gespecificeerd in het nummer veld <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Schakel</span> deze optie uit:
- als je gegevens wilt blijven verzamelen voor de dieren na de melkperiode, bijvoorbeeld tijdens een weging,
- als je bereid bent om de dieren handmatig van de {{<T "VitalControl" >}} te verwijderen.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Let op</span><br>
        Als u deze optie uitschakelt, moet u de transponder voor gespeende dieren op het {{<T "VitalControl" >}}-apparaat uiterlijk ontkoppelen wanneer de halsband van het gespeende kalf naar een ander, jonger kalf wordt overgebracht. Als de transponder niet wordt verwijderd, worden de gegevens van het jongere dier - dat nu de voormalige halsband van het gespeende dier draagt - onjuist toegevoegd aan de dataset van de gespeende dieren.
    </div>
</div>

### Synchronisatie {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Automatische Voeder

Aan de rechterkant van het scherm bevindt zich een selectievakje en twee invoervelden:

* Selectievakje <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Deze optie bepaalt of dieren die aanwezig zijn op de {{<T "VitalControl" >}}, die onbekend zijn voor de voeder, tijdens de volgende synchronisatie op de voeder worden aangemaakt. Standaard is deze optie niet geactiveerd.

    <span style="font-weight: bold">Deactiveer</span> deze optie of laat deze gedeactiveerd:

    - als u uw {{<T "VitalControl" >}}-apparaat op meerdere voeders tegelijkertijd gebruikt,
    - als u uw dieren direct naar de voeder brengt zonder ze eerst via het {{<T "VitalControl" >}}-apparaat te registreren. Uw dieren worden dan automatisch aangemaakt tijdens de registratie wanneer ze voor het eerst bij de voeder worden gevoerd.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Let op</span><br>
        Als de {{<T "VitalControl" >}} op meerdere machines wordt gebruikt en deze optie is aangevinkt, zullen dieren onbedoeld van de ene machine naar de andere worden overgebracht tijdens synchronisatie.
    </div>
</div>

<span style="font-weight: bold">Activeer</span> deze optie:

- als de eerste registratie van hun pasgeboren dieren met de {{<T "VitalControl" >}} plaatsvindt vóór de eerste voeding bij de voederbak.
- als u uw aangekochte dieren registreert door hun dierenpaspoorten te scannen op de {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Let op</span><br>
        Activeer deze optie alleen als u de {{<T "VitalControl" >}} op een enkele machine gebruikt! Als u synchronisatie met meerdere machines wilt uitvoeren met deze optie ingesteld, moet u een apart {{<T "VitalControl" >}} apparaat voor elke machine gebruiken.
    </div>
</div>

* Dropdownmenu <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   In dit dropdownmenu kunt u de voercurve selecteren die is toegewezen aan dieren die tijdens de synchronisatie nieuw op de voederbak worden aangemaakt.

* Numeriek invoerveld<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    In dit numerieke veld kunt u de minimumleeftijd (in dagen) specificeren vanaf welke dieren nieuw op de voederbak worden aangemaakt tijdens de synchronisatie. Dieren die jonger zijn dan de gespecificeerde minimumleeftijd worden **niet** aangemaakt tijdens de synchronisatie.

Druk op knop <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> om naar [pagina 2](#settings-menu-vitalcontrol-page-2) van het <span style="font-style: italic;">instellingenmenu {{<T "VitalControl" >}}</span> te schakelen.

## Instellingenmenu `{{% T "VitalControl" %}}` - Pagina 2 {#settings-menu-vitalcontrol-page-2}

### Hoe om te gaan met gegevensconflicten tijdens synchronisatie

Gegevensconflicten kunnen optreden bij het synchroniseren van de gegevens tussen de voederbak en het {{<T "VitalControl" >}}-apparaat. Een gegevensconflict treedt op wanneer de gegevens elkaar tegenspreken op het {{<T "VitalControl" >}}-apparaat en op de voederbak (bijv. met betrekking tot het <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Op deze pagina 2 van het instellingenmenu kunt u specificeren of en zo ja, hoe gegevensconflicten worden opgelost tijdens de synchronisatie. Er zijn hier drie opties:

* Prioriteit wordt gegeven aan de gegevens van de voederbak, gegevens op het {{<T "VitalControl" >}}-apparaat worden overschreven met die van de voederbak\.
  Activeer deze optie door de radioknop in de linkerkolom onder het voederbaksymbool <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span> te selecteren.

* Prioriteit wordt gegeven aan de {{<T "VitalControl" >}}-gegevens, gegevens op de voederbak worden overschreven met die van het {{<T "VitalControl" >}}-apparaat\.
  Activeer deze optie door de radioknop in de linkerkolom onder de {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span> te selecteren.


* Er worden geen wijzigingen aangebracht, zowel de voedergegevens als de gegevens van het {{<T "VitalControl" >}} apparaat blijven ongewijzigd.\
  Activeer deze optie door de radioknop in de rechterkolom te selecteren <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Voorbeeld</span><br>
            Nadat je een partij kalveren hebt gekocht, registreer je je gekochte dieren op de {{<T "VitalControl" >}} door al hun dierenpaspoorten te scannen. De diernummers voor deze dieren op de {{<T "VitalControl" >}} zijn dan – afhankelijk van de <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">apparaatinstellingen</a> – de laatste 3-5 cijfers van het dierenpaspoort. Je plaatst vervolgens halsbanden met Urban-transponders op de nieuw gekochte dieren en voert ze bij de automatische voederbak. Tijdens het eerste bezoek aan het station worden de dieren geregistreerd met hun transponder en nieuw aangemaakt bij de voederbak. Echter, de diernummers voor deze nieuwe dieren bij de voederbak zijn afgeleid van het transpondernummer of komen overeen met het diernummer dat voor deze transponder in de voederbak is opgeslagen. Dit betekent dat er nu een ander diernummer is toegewezen aan hetzelfde dier op het {{<T "VitalControl" >}} apparaat en bij de voederbak, wat resulteert in een gegevensconflict. Met behulp van de radioknoppen voor de <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, kun je nu in het instellingenmenu specificeren welk van de twee parallelle diernummers prioriteit heeft en welke tijdens synchronisatie wordt verwijderd.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Instellingenmenu VitalControl: Pagina 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Instellingen VitalControl (2)" />
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
    Screenshot 4: Instellingenmenu <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Pagina 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Let op</span><br>
        Om interne redenen kunnen wijzigingen momenteel alleen worden aangebracht in het <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. In latere firmwareversies kunt u ook wijzigingen aanbrengen in het <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> en de <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Door op de <span style="font-style: italic;">knop</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> te drukken, keert u terug naar [pagina 1](#settings-menu-vitalcontrol-page-1) van het `{{<T "VitalControl" >}}` instellingenmenu.
