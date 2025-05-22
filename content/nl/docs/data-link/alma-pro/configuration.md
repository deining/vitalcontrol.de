---
title: Eenmalige Activering en Configuratie van het Apparaat in de automatische voerinstellingen
linkTitle: Configuratie
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Voordat u de VitalControl voor de eerste keer gebruikt, moet u deze eenmalig activeren en correct configureren in de instellingen van de Alma Pro voeder.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Om het VitalControl-apparaat te activeren en in te stellen, gaat u als volgt te werk:

## Navigatie naar instellingenmenu `{{<T "VitalControl" >}}`

{{% alert title="Let op" %}}
Om het {{<T "VitalControl" >}} apparaat te activeren en in te stellen, moet u ingelogd zijn als de {{<T "SiteManager" >}} gebruikersrol bij de automatische voeder. Anders zijn sommige van de hieronder getoonde en beschreven knoppen niet zichtbaar voor u.
{{% /alert %}}

1. Klik op de onderste knop <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Instellingenmenu" title="Instellingen"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> in de linker zijbalk van de aanraakterminal. Als u in het hoofdmenu bent waar geen zijbalk zichtbaar is, druk dan op de knop &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Voedermenu" title="Voedermenu"/>`{{<T "Feeder" >}}`om de zijbalk weer te geven.

1. Klik op de tweede knop van links <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Aanraakterminalinstellingen" title="Aanraakinstellingen"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> in de onderste werkbalk van de aanraakterminal.

1. Er verschijnt nu een reeks menu-items aan de linkerkant van het centrale schermgebied. Klik op de onderste knop `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Er verschijnt nu een menu-item (of mogelijk meerdere) aan de rechterkant van het centrale schermgebied. Klik op de bovenste knop `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. De knop schakelt nu naar de linker schermhelft.

1. Onderaan de rechterkant van het scherm wordt nu de knop &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Open VitalControl-instellingen" title="Open instellingen" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span> weergegeven. Klik op deze knop en er opent een pop-upvenster dat [Pagina 1](#settings-menu-vitalcontrol-page-1) van het `{{<T "VitalControl" >}}` instellingenmenu weergeeft.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl instellingen: Toegang" title="Toegang tot VitalControl instellingenmenu" />
    <figcaption class="figure-caption fs-6">Screenshot 1: Toegang tot het <span style="font-style: italic;">{{<T "VitalControl" >}}</span> instellingenmenu</figcaption>
</figure>

Het `{{<T "VitalControl" >}}` instellingenmenu is verdeeld over twee pagina's:

## `{{<T "VitalControl" >}}` Instellingenmenu - Pagina 1 {#settings-menu-vitalcontrol-page-1}

Pagina 1 van het <span style="font-style: italic;">{{<T "VitalControl" >}}</span> instellingenmenu wordt als volgt gepresenteerd:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl instellingenmenu: Pagina 1" title="VitalControl instellingen (1)" />
    <figcaption class="figure-caption fs-6">Screenshot 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> instellingenmenu, Pagina 1</figcaption>
</figure>

Op deze pagina kunt u de volgende acties en instellingen uitvoeren.

### Activering van het {{<T "VitalControl" >}} Apparaat {#activation-vitalcontrol}

In de standaardtoestand van de machine is de {{<T "VitalControl" >}} gedeactiveerd. Zet de <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> schakelaar <span style="font-size: 140%">➀</span> in de juiste positie <span style="font-style: italic;">{{<T "YES" >}}</span> om het {{<T "VitalControl" >}} apparaat te activeren. Vervolgens wordt in de rechter zijbalk van het voermenu, onder het/de pictogram(men) voor de aangesloten machine(s), het pictogram <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl apparaat" title="VitalControl"/> voor het `{{<T "VitalControl" >}}` apparaat weergegeven (zie Screenshot <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Voermenu</a></span>, figuur <span style="font-size: 140%">➁</span> daar).

### Synchronisatie automatische voederbak <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Aan de linkerkant van het scherm zijn er twee selectievakjes:

* Selectievakje <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Deze optie controleert het gedrag in het geval dat er dieren aanwezig zijn op de voederbak tijdens synchronisatie die nog niet bekend zijn bij het {{<T "VitalControl" >}} apparaat. Deze optie is standaard ingeschakeld en moet over het algemeen ingesteld blijven. Als je je aangekochte dieren registreert door hun dierenpaspoorten te scannen, moet deze optie worden uitgeschakeld.

    <span style="font-weight: bold">Schakel</span> deze optie in:

    - als je een gloednieuwe {{<T "VitalControl" >}} voor je hebt, waarop je alle dieren van een voederbak wilt overbrengen. Na synchronisatie zullen alle dieren die bekend zijn bij de voederbak ook aanwezig zijn op de {{<T "VitalControl" >}}.
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
                Als de optie in de bovenstaande configuratie ingesteld blijft, zullen dieren na synchronisatie dubbel aanwezig zijn op de {{<T "VitalControl" >}}.
            </div>
        </div>


* Checkbox <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Deze optie bepaalt of dieren die alleen aanwezig zijn op de {{<T "VitalControl" >}} maar niet op de voederbak, worden verwijderd van de {{<T "VitalControl" >}} tijdens de volgende synchronisatie. Als je de {{<T "VitalControl" >}} alleen gebruikt tijdens de melkperiode van de dieren, moet deze optie ingeschakeld zijn. Als je de dieren wilt volgen na de melkperiode, moet je deze optie uitschakelen.

    <span style="font-weight: bold">Schakel</span> deze optie in:

    - als je alleen gegevens verzamelt voor de dieren tijdens de melkperiode,
    - als je wilt dat de dieren worden verwijderd van de {{<T "VitalControl" >}} tijdens de volgende synchronisatie nadat ze van de voederbak zijn verwijderd. Op deze manier hopen dieren zich niet op de {{<T "VitalControl" >}} op in de loop van de tijd.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Let op</span><br>
            Als deze optie is geactiveerd en de checkbox <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> ook is geactiveerd, worden er geen dieren verwijderd die jonger zijn dan gespecificeerd in het nummer veld <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
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
        Als u deze optie uitschakelt, moet u de transponder voor gespeende dieren op het {{<T "VitalControl" >}} apparaat uiterlijk ontkoppelen wanneer de halsband van het gespeende kalf naar een ander, jonger kalf wordt overgebracht. Als de transponder niet wordt verwijderd, worden de gegevens van het jongere dier - dat nu de voormalige halsband van het gespeende dier draagt - onjuist toegevoegd aan de dataset van de gespeende dieren.
    </div>
</div>

### Synchronisatie {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automatische Voederbak

Aan de rechterkant van het scherm bevindt zich een selectievakje en twee invoervelden:

* Selectievakje <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Deze optie bepaalt of dieren die aanwezig zijn op de {{<T "VitalControl" >}}, maar onbekend zijn voor de voederbak, tijdens de volgende synchronisatie op de voederbak worden aangemaakt. Standaard is deze optie niet geactiveerd.

    <span style="font-weight: bold">Deactiveer</span> deze optie of laat deze gedeactiveerd:

    - als u uw {{<T "VitalControl" >}} apparaat op meerdere voederbakken tegelijkertijd gebruikt,
    - als u uw dieren direct naar de voederbak brengt zonder ze eerst via het {{<T "VitalControl" >}} apparaat te registreren. Uw dieren worden dan automatisch aangemaakt tijdens de registratie wanneer ze voor het eerst bij de voederbak worden gevoerd.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Let op</span><br>
            Als de {{<T "VitalControl" >}} op meerdere machines wordt gebruikt en deze optie is aangevinkt, worden dieren onbedoeld van de ene machine naar de andere overgebracht tijdens synchronisatie.
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

* Dropdownmenu <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   In dit dropdownmenu kunt u de voercurve selecteren die is toegewezen aan dieren die nieuw worden aangemaakt op de voederbak tijdens synchronisatie.

* Numeriek invoerveld<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    In dit numerieke veld kunt u de minimumleeftijd (in dagen) specificeren vanaf welke dieren nieuw worden aangemaakt op de voederbak tijdens synchronisatie. Dieren die jonger zijn dan de gespecificeerde minimumleeftijd worden **niet** aangemaakt tijdens synchronisatie.

Druk op knop <span style="font-size: 140%">⑧</span> om naar [pagina 2](#settings-menu-vitalcontrol-page-2) van het <span style="font-style: italic;">instellingenmenu {{<T "VitalControl" >}}</span> te gaan.

## Instellingenmenu `{{<T "VitalControl" >}}` - Pagina 2 {#settings-menu-vitalcontrol-page-2}

### Hoe om te gaan met dataconflicten tijdens synchronisatie

Dataconflicten kunnen optreden bij het synchroniseren van de gegevens tussen de voerautomaat en het {{<T "VitalControl" >}} apparaat. Een dataconflict treedt op wanneer de gegevens elkaar tegenspreken op het {{<T "VitalControl" >}} apparaat en op de voerautomaat (bijv. met betrekking tot het <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Op deze pagina 2 van het instellingenmenu kunt u specificeren of en hoe dataconflicten worden opgelost tijdens synchronisatie. Er zijn hier drie opties:

* Prioriteit wordt gegeven aan de gegevens van de voerautomaat, gegevens op het {{<T "VitalControl" >}} apparaat worden overschreven met die van de voerautomaat\.
  Activeer deze optie door de radioknop in de linker kolom onder het voerautomaatsymbool <span style="font-size: 140%">➃</span> te selecteren.

* Prioriteit wordt gegeven aan de {{<T "VitalControl" >}} gegevens, gegevens op de voerautomaat worden overschreven met die van het {{<T "VitalControl" >}} apparaat\.
  Activeer deze optie door de radioknop in de linker kolom onder de {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span> te selecteren.

* Er worden geen wijzigingen aangebracht, zowel de gegevens van de voerautomaat als de gegevens van het {{<T "VitalControl" >}} apparaat blijven ongewijzigd.\ 
  Activeer deze optie door de radioknop in de rechter kolom <span style="font-size: 140%">⑥</span> te selecteren.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Voorbeeld</span><br>
            Nadat u een partij kalveren heeft gekocht, registreert u uw aangekochte dieren op de {{<T "VitalControl" >}} door al hun dierenpaspoorten te scannen. De diernummers voor deze dieren op de {{<T "VitalControl" >}} zijn dan – afhankelijk van de <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">apparaatinstellingen</a> – de laatste 3-5 cijfers van het dierenpaspoort. U plaatst vervolgens halsbanden met Urban-transponders op de nieuw aangekochte dieren en voedt ze bij de automatische voerautomaat. Tijdens het eerste bezoek aan het station worden de dieren geregistreerd met hun transponder en nieuw aangemaakt bij de voerautomaat. De diernummers voor deze nieuwe dieren op de voerautomaat zijn echter afgeleid van het transpondernummer of komen overeen met het diernummer dat voor deze transponder in de voerautomaat is opgeslagen. Dit betekent dat er nu een ander diernummer is toegewezen aan hetzelfde dier op het {{<T "VitalControl" >}} apparaat en op de voerautomaat, wat resulteert in een dataconflict. Met behulp van de radioknoppen voor het <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, kunt u nu in het instellingenmenu specificeren welk van de twee parallelle diernummers prioriteit heeft en welke tijdens synchronisatie wordt verwijderd.
        </div>
</div>


<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Instellingenmenu VitalControl: Pagina 2" title="Instellingen VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Screenshot 3: Instellingenmenu <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Pagina 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Let op</span><br>
        Om interne redenen kunnen wijzigingen momenteel alleen worden aangebracht in het <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. In latere firmwareversies kunt u ook wijzigingen aanbrengen in het <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> en de <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Door op de <span style="font-style: italic;">knop</span> <span style="font-size: 140%">⑧</span> te drukken, keert u terug naar [pagina 1](#settings-menu-vitalcontrol-page-1) van het `{{<T "VitalControl" >}}` instellingenmenu.
