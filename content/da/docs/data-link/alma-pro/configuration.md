---
title: Engangsaktivering og konfiguration af enheden i indstillingerne for den automatiske feeder
linkTitle: Konfiguration
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Før du bruger VitalControl for første gang, skal du aktivere og korrekt konfigurere den én gang i indstillingerne for Alma Pro feeder.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
For at aktivere og opsætte VitalControl-enheden, skal du gøre følgende:

## Navigation til indstillingsmenuen `{{<T "VitalControl" >}}`

{{% alert title="Opmærksomhed" %}}
For at aktivere og opsætte {{<T "VitalControl" >}}-enheden, skal du være logget ind som {{<T "SiteManager" >}} brugerrolle på den automatiske feeder. Ellers vil nogle af de knapper, der vises og beskrives nedenfor, ikke være synlige for dig.
{{% /alert %}}

1. Klik på den nederste knap <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Indstillingsmenu" title="Indstillinger"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> i venstre sidebjælke på touch-terminalen. Hvis du er i hovedmenuen, hvor ingen sidebjælke er synlig, skal du trykke på knappen &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder Menu" title="Feeder Menu"/>`{{<T "Feeder" >}}`for at vise sidebjælken.

1. Klik på den anden knap fra venstre <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Touch Terminal Indstillinger" title="Touch Indstillinger"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> i den nederste værktøjslinje på touch-terminalen.

1. En række menuemner vises nu på venstre halvdel af det centrale skærmområde. Klik på den nederste knap `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Et menuemne (eller muligvis flere) vises nu på højre halvdel af det centrale skærmområde. Klik på den øverste knap `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Knapen skifter nu til venstre skærmhalvdel.

1. Nederst på højre side af skærmen vises knappen &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Åbn VitalControl indstillinger" title="Åbn indstillinger" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Klik på denne knap, og et popup-vindue åbnes, der viser [Side 1](#settings-menu-vitalcontrol-page-1) af `{{<T "VitalControl" >}}` indstillingsmenuen.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl indstillinger: Adgang" title="Adgang til VitalControl indstillingsmenu" />
    <figcaption class="figure-caption fs-6">Skærmbillede 1: Adgang til <span style="font-style: italic;">{{<T "VitalControl" >}}</span> indstillingsmenu</figcaption>
</figure>

`{{<T "VitalControl" >}}` indstillingsmenuen er fordelt over to sider:

## `{{<T "VitalControl" >}}` Indstillingsmenu - Side 1 {#settings-menu-vitalcontrol-page-1}

Side 1 af <span style="font-style: italic;">{{<T "VitalControl" >}}</span> indstillingsmenuen præsenteres som følger:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl indstillingsmenu: Side 1" title="VitalControl indstillinger (1)" />
    <figcaption class="figure-caption fs-6">Skærmbillede 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> indstillingsmenu, Side 1</figcaption>
</figure>

På denne side kan du udføre følgende handlinger og indstillinger.

### Aktivering af {{<T "VitalControl" >}} Enheden {#activation-vitalcontrol}

I maskinens standardtilstand er {{<T "VitalControl" >}} deaktiveret. Indstil <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> kontakten <span style="font-size: 140%">➀</span> til højre position <span style="font-style: italic;">{{<T "YES" >}}</span> for at aktivere {{<T "VitalControl" >}} enheden. Derefter vil ikonet <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl enhed" title="VitalControl"/> for `{{<T "VitalControl" >}}` enheden blive vist i højre sidebjælke af feeder-menuen, under ikonet/ikonerne for den/de tilsluttede maskine(r) (se Skærmbillede <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Feeder Menu</a></span>, figur <span style="font-size: 140%">➁</span> der).

### Synkronisering automatisk foderautomat <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

På venstre side af skærmen er der to afkrydsningsfelter:

* Afkrydsningsfelt <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Denne mulighed styrer adfærden i tilfælde af, at der er dyr på foderautomaten under synkronisering, som endnu ikke er kendt af {{<T "VitalControl" >}}-enheden. Denne mulighed er som standard aktiveret og bør generelt forblive sat. Hvis du registrerer dine købte dyr ved at scanne deres dyrepas, skal denne mulighed deaktiveres.

    <span style="font-weight: bold">Aktiver</span> denne mulighed:

    - hvis du har en helt ny {{<T "VitalControl" >}} foran dig, som du vil overføre alle dyr fra en foderautomat til. Efter synkronisering vil alle dyr, der er kendt af foderautomaten, også være til stede på {{<T "VitalControl" >}}.
    - hvis du løbende bringer nye kalve til foderautomaten under igangværende drift. Disse dyr vil så også blive oprettet på {{<T "VitalControl" >}}-enheden under synkronisering.

    <span style="font-weight: bold">Deaktiver</span> denne mulighed:

    - hvis du har nyoprettede dyr på din {{<T "VitalControl" >}} ved at scanne deres dyrepas, hvor
    - disse dyr endnu ikke er blevet tildelt en transponder og
    - disse dyr allerede bliver fodret ved foderautomaten og derfor er registreret der.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
                Hvis muligheden forbliver sat i ovenstående konfiguration, vil dyr være til stede to gange på {{<T "VitalControl" >}} efter synkronisering.
            </div>
        </div>

* Afkrydsningsfelt <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Denne mulighed styrer, om dyr, der kun er til stede på {{<T "VitalControl" >}} men ikke på foderautomaten, slettes fra {{<T "VitalControl" >}} under den næste synkronisering. Hvis du kun bruger {{<T "VitalControl" >}} under dyrenes mælkeperiode, bør denne mulighed være aktiveret. Hvis du ønsker at spore dyrene ud over mælkeperioden, skal du deaktivere denne mulighed.

    <span style="font-weight: bold">Aktiver</span> denne mulighed:

    - hvis du kun indsamler data for dyrene under mælkeperioden,
    - hvis du ønsker, at dyrene skal slettes fra {{<T "VitalControl" >}} under den næste synkronisering, efter at de er blevet slettet fra foderautomaten. På denne måde ophobes dyrene ikke på {{<T "VitalControl" >}} over tid.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
            Hvis denne mulighed er aktiveret, og afkrydsningsfeltet <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> også er aktiveret, vil ingen dyr blive slettet, der er yngre end angivet i talfeltet <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Deaktiver</span> denne mulighed:
    - hvis du ønsker at fortsætte med at indsamle data for dyrene efter mælkeperioden, for eksempel under en vejning,
    - hvis du er villig til manuelt at slette dyrene fra {{<T "VitalControl" >}} selv.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
        Hvis du deaktiverer denne mulighed, skal du fjerne transponderen for fravænnede dyr på {{<T "VitalControl" >}} enheden senest, når halsbåndet fjernes fra den fravænnede kalv til en anden, yngre kalv. Hvis transponderen ikke fjernes, tilføjes dataene for det yngre dyr - som nu bærer det tidligere halsbånd fra det fravænnede dyr - forkert til det fravænnede dyrs datasæt.
    </div>
</div>

### Synkronisering {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automatisk Fodermaskine

På højre side af skærmen er der en afkrydsningsboks og to indtastningsfelter:

* Afkrydsningsboks <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

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
        Aktiver denne mulighed kun, hvis du bruger {{<T "VitalControl" >}} på en enkelt maskine! Hvis du vil udføre synkronisering med flere maskiner med denne mulighed indstillet, skal du bruge en separat {{<T "VitalControl" >}} enhed til hver maskine.
    </div>
</div>

* Dropdown-menu <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   I denne dropdown-menu kan du vælge den fodringskurve, der er tildelt dyr, der er nyoprettede på foderautomaten under synkronisering.

* Numerisk inputfelt<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    I dette nummerfelt kan du angive den minimumsalder (i dage), hvorfra dyr nyoprettes på foderautomaten under synkronisering. Dyr, der er yngre end den angivne minimumsalder, **oprettes ikke** under synkronisering.

Tryk på knappen <span style="font-size: 140%">⑧</span> for at skifte til [side 2](#settings-menu-vitalcontrol-page-2) af <span style="font-style: italic;">indstillingsmenuen {{<T "VitalControl" >}}</span>.

## Indstillingsmenu `{{<T "VitalControl" >}}` - Side 2 {#settings-menu-vitalcontrol-page-2}

### Hvordan man håndterer datakonflikter under synkronisering

Datakonflikter kan opstå, når data synkroniseres mellem foderautomaten og {{<T "VitalControl" >}} enheden. En datakonflikt opstår, når data modsiger hinanden på {{<T "VitalControl" >}} enheden og på foderautomaten (f.eks. vedrørende <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). På denne side 2 af indstillingsmenuen kan du angive, om og hvordan datakonflikter løses under synkronisering. Der er tre muligheder her:

* Prioritet gives til foderautomatens data, data på {{<T "VitalControl" >}} enheden overskrives med dem fra foderautomaten.\
  Aktivér denne mulighed ved at vælge radioknappen i venstre kolonne under foderautomatsymbolet <span style="font-size: 140%">➃</span>.

* Prioritet gives til {{<T "VitalControl" >}} data, data på foderautomaten overskrives med dem fra {{<T "VitalControl" >}} enheden.\
  Aktivér denne mulighed ved at vælge radioknappen i venstre kolonne under {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Der foretages ingen ændringer, både foderautomatens data og {{<T "VitalControl" >}} enhedens data forbliver uændrede.\
  Aktivér denne mulighed ved at vælge radioknappen i højre kolonne <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Eksempel</span><br>
            Efter du har købt en flok kalve, registrerer du dine købte dyr på {{<T "VitalControl" >}} ved at scanne alle deres dyrepas. Dyrenumrene for disse dyr på {{<T "VitalControl" >}} er derefter – afhængigt af <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">enhedsindstillingerne</a> – de sidste 3-5 cifre af dyrets pas. Du placerer derefter halsbånd med Urban transpondere på de nyindkøbte dyr og fodrer dem ved den automatiske foderautomat. Under det første besøg på stationen registreres dyrene ved hjælp af deres transponder og oprettes som nye ved foderautomaten. Dog er dyrenumrene for disse nye dyr på foderautomaten afledt af transpondernummeret eller svarer til det dyrenummer, der er gemt for denne transponder i foderautomaten. Dette betyder, at et andet dyrenummer nu er blevet tildelt det samme dyr på {{<T "VitalControl" >}} enheden og på foderautomaten, hvilket resulterer i en datakonflikt. Ved hjælp af radioknapperne for <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, kan du nu angive i indstillingsmenuen, hvilket af de to parallelle dyrenumre der har prioritet, og hvilket der vil blive slettet under synkronisering.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Indstillingsmenu VitalControl: Side 2" title="Indstillinger VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Skærmbillede 3: Indstillingsmenu <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Side 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
        Af interne årsager kan ændringer i øjeblikket kun foretages på <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. I senere firmwareversioner kan du også foretage ændringer på <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> og <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Ved at trykke på <span style="font-style: italic;">knappen</span> <span style="font-size: 140%">⑧</span> vender du tilbage til [side 1](#settings-menu-vitalcontrol-page-1) af `{{<T "VitalControl" >}}` indstillingsmenuen.
