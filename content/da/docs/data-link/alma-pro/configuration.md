---
title: Engangsaktivering og konfiguration af enheden i indstillingerne for den automatiske foderautomat
linkTitle: Konfiguration
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Før du bruger VitalControl for første gang, skal du aktivere og korrekt konfigurere den én gang i indstillingerne for Alma Pro foderautomaten.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/da
---
## Krav

Vi anbefaler at bruge en firmwareversion <span style="font-weight: bold">24-xx-xx</span> eller højere med VitalControl-enheden.\
For at kontrollere hvilken firmwareversion der er installeret på din enhed:

* Naviger til foderautomatens startside ved at klikke på den øverste `Home`-knap <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Hjem skærm ikon" title="Alma Pro: Hjem skærm"/>&nbsp; i navigationslinjen i venstre side af skærmen.
* På startskærmen skal du klikke på `Hjælp`-knappen <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Hjælp menu ikon" title="Alma Pro: Hjælp skærm"/>&nbsp; i øverste højre område af skærmen.
* Versionsnummeret <span style="font-size: 140%">➂</span> vises nu til venstre for sprogskifteknappen.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: kontrol af firmwareversion" title="Alma Pro: kontrol af firmwareversion" />
    <figcaption class="figure-caption fs-6">Skærmbillede 1: <span style="font-style: italic;">Alma Pro: kontrol af firmwareversion</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
        Hvis firmwareversionen på din foderautomat er lavere end <span style="font-weight: bold">24-xx-xx</span>, kan der være uoverensstemmelser mellem skærmbillederne nedenfor og visningen på din touchscreen, så du muligvis ikke kan følge instruktionerne. I dette tilfælde skal du kontakte din servicetekniker for at opdatere firmwaren på din foderautomat.<br>
    </div>
</div>

## Navigation til indstillingsmenuen `{{% T "VitalControl" %}}`

{{% alert title="Opmærksomhed" %}}
For at aktivere og opsætte {{<T "VitalControl" >}}-enheden skal du være logget ind som {{<T "SiteManager" >}} brugerrolle på den automatiske foderautomat. Ellers vil nogle af de knapper, der vises og beskrives nedenfor, ikke være synlige for dig.
{{% /alert %}}

1. Klik på den nederste knap <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Indstillingsmenu" title="Indstillinger"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> i venstre sidebjælke på touch-terminalen. Hvis du er i hovedmenuen, hvor ingen sidebjælke er synlig, skal du trykke på knappen &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Fodermenu" title="Fodermenu"/>`{{<T "Feeder" >}}`for at vise sidebjælken.

1. Klik på den anden knap fra venstre <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Touch Terminal Indstillinger" title="Touch Indstillinger"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> i den nederste værktøjslinje på touch-terminalen.

1. En række menupunkter vises nu på venstre halvdel af det centrale skærmområde. Klik på den nederste knap `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Et menupunkt (eller muligvis flere) vises nu på højre halvdel af det centrale skærmområde. Klik på den øverste knap `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Knapen skifter nu til venstre skærmhalvdel.

1. Nederst på højre side af skærmen vises knappen &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Åbn VitalControl indstillinger" title="Åbn indstillinger" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Klik på denne knap, og et popup-vindue åbnes, der viser [Side 1](#settings-menu-vitalcontrol-page-1) af `{{<T "VitalControl" >}}` indstillingsmenuen.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="Åbn VitalControl indstillinger"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Åbn VitalControl indstillinger" />
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
    Skærmbillede 2: Adgang til <span style="font-style: italic;">{{<T "VitalControl" >}}</span> indstillingsmenuen
</figcaption>

`{{<T "VitalControl" >}}` indstillingsmenuen er fordelt på to sider:

## `{{% T "VitalControl" %}}` Indstillingsmenu - Side 1 {#settings-menu-vitalcontrol-page-1}

Side 1 af <span style="font-style: italic;">{{<T "VitalControl" >}}</span> indstillingsmenuen præsenteres som følger:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="VitalControl indstillingsmenu: Side 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="VitalControl indstillinger (1)" />
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
    Skærmbillede 3: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> indstillingsmenu, Side 1
</figcaption>

På denne side kan du udføre følgende handlinger og indstillinger.

### Aktivering af {{% T "VitalControl" %}} Enheden {#activation-vitalcontrol}

I maskinens standardtilstand er {{<T "VitalControl" >}} deaktiveret. Indstil <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> kontakten <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> til højre position <span style="font-style: italic;">{{<T "YES" >}}</span> for at aktivere {{<T "VitalControl" >}} enheden. Derefter vil ikonet <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl enhed" title="VitalControl"/> for `{{<T "VitalControl" >}}` enheden blive vist i højre sidebjælke af feeder-menuen, under ikonet/ikonerne for den/de tilsluttede maskine(r) (se Skærmbillede <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Feeder Menu</a></span>, figur <span style="font-size: 140%">➁</span> der).

### Synkronisering automatisk feeder <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

På venstre side af skærmen er der to afkrydsningsfelter:

* Afkrydsningsfelt <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Denne mulighed styrer adfærden i tilfælde af, at der er dyr til stede på foderautomaten under synkronisering, som endnu ikke er kendt af {{<T "VitalControl" >}}-enheden. Denne mulighed er som standard aktiveret og bør generelt forblive aktiveret. Hvis du registrerer dine købte dyr ved at scanne deres dyrepas, skal denne mulighed deaktiveres.

<span style="font-weight: bold">Aktiver</span> denne mulighed:

- hvis du har en helt ny {{<T "VitalControl" >}} foran dig, som du ønsker at overføre alle dyr fra en foderautomat til. Efter synkronisering vil alle dyr, der er kendt af foderautomaten, også være til stede på {{<T "VitalControl" >}}.
- hvis du løbende bringer nye kalve til foderautomaten under igangværende operationer. Disse dyr vil så også blive oprettet på {{<T "VitalControl" >}}-enheden under synkronisering.

<span style="font-weight: bold">Deaktiver</span> denne mulighed:

- hvis du har nyoprettede dyr på din {{<T "VitalControl" >}} ved at scanne deres dyrepas, hvor
- disse dyr endnu ikke er blevet tildelt en transponder, og
- disse dyr allerede bliver fodret ved foderautomaten og derfor er registreret der.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
        Hvis muligheden forbliver aktiveret i ovenstående konfiguration, vil dyrene være til stede to gange på {{<T "VitalControl" >}} efter synkronisering.
    </div>
</div>

* Afkrydsningsfelt <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Denne mulighed styrer, om dyr, der kun er til stede på {{<T "VitalControl" >}} men ikke på foderautomaten, slettes fra {{<T "VitalControl" >}} under den næste synkronisering. Hvis du kun bruger {{<T "VitalControl" >}} i dyrenes mælkeperiode, bør denne mulighed være aktiveret. Hvis du ønsker at spore dyrene ud over mælkeperioden, skal du deaktivere denne mulighed.

<span style="font-weight: bold">Aktiver</span> denne mulighed:

- hvis du kun indsamler data for dyrene i mælkeperioden,
- hvis du ønsker, at dyrene skal slettes fra {{<T "VitalControl" >}} under den næste synkronisering, efter at de er blevet slettet fra foderautomaten. På denne måde ophobes dyrene ikke på {{<T "VitalControl" >}} over tid.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
        Hvis denne mulighed er aktiveret, og afkrydsningsfeltet <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> også er aktiveret, vil ingen dyr blive slettet, der er yngre end angivet i talfeltet <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Deaktiver</span> denne mulighed:
- hvis du ønsker at fortsætte med at indsamle data for dyrene efter mælkeperioden, for eksempel under en vejning,
- hvis du er villig til selv at slette dyrene manuelt fra {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
        Hvis du deaktiverer denne mulighed, skal du afkoble transponderen for fravænnede dyr på {{<T "VitalControl" >}} enheden senest, når halsbåndet fjernes fra den fravænnede kalv til en anden, yngre kalv. Hvis transponderen ikke fjernes, tilføjes dataene for det yngre dyr - som nu bærer det tidligere halsbånd fra det fravænnede dyr - forkert til det fravænnede dyrs datasæt.
    </div>
</div>

### Synkronisering {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Automatisk Fodermaskine

På højre side af skærmen er der en afkrydsningsboks og to indtastningsfelter:

* Afkrydsningsboks <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Denne mulighed styrer, om dyr, der er til stede på {{<T "VitalControl" >}}, som er ukendte for fodermaskinen, vil blive oprettet på fodermaskinen under den næste synkronisering. Som standard er denne mulighed ikke aktiveret.

    <span style="font-weight: bold">Deaktiver</span> denne mulighed eller lad den være deaktiveret:

    - hvis du bruger din {{<T "VitalControl" >}} enhed på flere fodermaskiner samtidigt,
    - hvis du bringer dine dyr direkte til fodermaskinen uden først at registrere dem via {{<T "VitalControl" >}} enheden. Dine dyr vil derefter automatisk blive oprettet under registreringen, når de fodres ved fodermaskinen for første gang.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
        Hvis {{<T "VitalControl" >}} bruges på flere maskiner, og denne mulighed er markeret, vil dyr utilsigtet blive overført fra en maskine til en anden under synkronisering.
    </div>
</div>

<span style="font-weight: bold">Aktiver</span> denne mulighed:

- hvis den første registrering af deres nyfødte dyr med {{<T "VitalControl" >}} finder sted før den første fodring ved foderautomaten.
- hvis du registrerer dine købte dyr ved at scanne deres dyrepas på {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
        Aktiver kun denne mulighed, hvis du bruger {{<T "VitalControl" >}} på en enkelt maskine! Hvis du vil udføre synkronisering med flere maskiner med denne mulighed indstillet, skal du bruge en separat {{<T "VitalControl" >}} enhed til hver maskine.
    </div>
</div>

* Dropdown-menu <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   I denne dropdown-menu kan du vælge den fodringskurve, der tildeles til dyr, der oprettes på foderautomaten under synkronisering.

* Numerisk indtastningsfelt<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    I dette nummerfelt kan du angive den minimumsalder (i dage), hvorfra dyr oprettes på foderautomaten under synkronisering. Dyr, der er yngre end den angivne minimumsalder, oprettes **ikke** under synkronisering.

Tryk på knappen <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> for at skifte til [side 2](#settings-menu-vitalcontrol-page-2) af <span style="font-style: italic;">indstillingsmenuen {{<T "VitalControl" >}}</span>.

## Indstillingsmenu `{{% T "VitalControl" %}}` - Side 2 {#settings-menu-vitalcontrol-page-2}

### Hvordan man håndterer datakonflikter under synkronisering

Datakonflikter kan opstå, når data synkroniseres mellem foderautomaten og {{<T "VitalControl" >}}-enheden. En datakonflikt opstår, når dataene modsiger hinanden på {{<T "VitalControl" >}}-enheden og på foderautomaten (f.eks. vedrørende <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). På denne side 2 af indstillingsmenuen kan du angive, om og hvordan datakonflikter løses under synkronisering. Der er tre muligheder her:

* Prioritet gives til foderautomatens data, data på {{<T "VitalControl" >}}-enheden overskrives med dem fra foderautomaten\.
  Aktivér denne mulighed ved at vælge radioknappen i venstre kolonne under foderautomatsymbolet <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Prioritet gives til {{<T "VitalControl" >}}-dataene, data på foderautomaten overskrives med dem fra {{<T "VitalControl" >}}-enheden\.
  Aktivér denne mulighed ved at vælge radioknappen i venstre kolonne under {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* Ingen ændringer foretages, både foderdata og {{<T "VitalControl" >}} enhedsdata forbliver uændrede.\
  Aktivér denne mulighed ved at vælge radioknappen i højre kolonne <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Eksempel</span><br>
            Efter du har købt en flok kalve, registrerer du dine købte dyr på {{<T "VitalControl" >}} ved at scanne alle deres dyrepas. Dyrenumrene for disse dyr på {{<T "VitalControl" >}} er derefter – afhængigt af <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">enhedsindstillingerne</a> – de sidste 3-5 cifre af dyrets pas. Du placerer derefter halsbånd med Urban transpondere på de nyindkøbte dyr og fodrer dem ved den automatiske foderautomat. Under det første besøg på stationen registreres dyrene ved hjælp af deres transponder og oprettes ny ved foderautomaten. Dog er dyrenumrene for disse nye dyr ved foderautomaten afledt af transpondernummeret eller svarer til det dyrenummer, der er gemt for denne transponder i foderautomaten. Dette betyder, at et andet dyrenummer nu er blevet tildelt det samme dyr på {{<T "VitalControl" >}} enheden og ved foderautomaten, hvilket resulterer i en datakonflikt. Ved hjælp af radioknapperne for <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, kan du nu specificere i indstillingsmenuen, hvilket af de to parallelle dyrenumre der har prioritet, og hvilket der vil blive slettet under synkronisering.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Indstillingsmenu VitalControl: Side 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Indstillinger VitalControl (2)" />
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
    Skærmbillede 4: Indstillingsmenu <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Side 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
        Af interne årsager kan ændringer i øjeblikket kun foretages på <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. I senere firmwareversioner kan du også foretage ændringer på <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> og <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Ved at trykke på <span style="font-style: italic;">knappen</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> vender du tilbage til [side 1](#settings-menu-vitalcontrol-page-1) i `{{<T "VitalControl" >}}` indstillingsmenuen.
