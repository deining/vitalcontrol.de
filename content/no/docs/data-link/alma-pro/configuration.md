---
title: Engangsaktivering og konfigurasjon av enheten i innstillingene for automatisk mater
linkTitle: Konfigurasjon
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Før du bruker VitalControl for første gang, må du aktivere og konfigurere den riktig én gang i innstillingene til Alma Pro mater.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
For å aktivere og sette opp VitalControl-enheten, gjør følgende:

## Navigering til innstillingsmenyen `{{<T "VitalControl" >}}`

{{% alert title="Oppmerksomhet" %}}
For å aktivere og sette opp {{<T "VitalControl" >}}-enheten, må du være logget inn som {{<T "SiteManager" >}} brukerrolle på den automatiske materen. Ellers vil noen av knappene som vises og beskrives nedenfor ikke være synlige for deg.
{{% /alert %}}

1. Klikk på den nederste knappen <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Innstillingsmeny" title="Innstillinger"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> i venstre sidefelt på berøringsterminalen. Hvis du er i hovedmenyen der ingen sidefelt er synlig, trykk på knappen &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Matermeny" title="Matermeny"/>`{{<T "Feeder" >}}`for å vise sidefeltet.

1. Klikk på den andre knappen fra venstre <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Innstillinger for berøringsterminal" title="Berøringsinnstillinger"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> i den nederste verktøylinjen på berøringsterminalen.

1. En serie med menyvalg vises nå på venstre halvdel av det sentrale skjermområdet. Klikk på den nederste knappen `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Et menyvalg (eller muligens flere) vises nå på høyre halvdel av det sentrale skjermområdet. Klikk på den øverste knappen `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Knappen bytter nå til venstre skjermhalvdel.

1. Nederst på høyre side av skjermen vises knappen &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Åpne VitalControl-innstillinger" title="Åpne innstillinger" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Klikk på denne knappen, og et popup-vindu åpnes, som viser [Side 1](#settings-menu-vitalcontrol-page-1) av `{{<T "VitalControl" >}}` innstillingsmenyen.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl-innstillinger: Tilgang" title="Tilgang til VitalControl-innstillingsmeny" />
    <figcaption class="figure-caption fs-6">Skjermbilde 1: Tilgang til <span style="font-style: italic;">{{<T "VitalControl" >}}</span> innstillingsmeny</figcaption>
</figure>

`{{<T "VitalControl" >}}` innstillingsmeny er delt over to sider:

## `{{<T "VitalControl" >}}` Innstillingsmeny - Side 1 {#settings-menu-vitalcontrol-page-1}

Side 1 av <span style="font-style: italic;">{{<T "VitalControl" >}}</span> innstillingsmeny presenteres som følger:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl-innstillingsmeny: Side 1" title="VitalControl-innstillinger (1)" />
    <figcaption class="figure-caption fs-6">Skjermbilde 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> innstillingsmeny, Side 1</figcaption>
</figure>

På denne siden kan du utføre følgende handlinger og innstillinger.

### Aktivering av {{<T "VitalControl" >}}-enheten {#activation-vitalcontrol}

I maskinens standardtilstand er {{<T "VitalControl" >}} deaktivert. Sett bryteren <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> til riktig posisjon <span style="font-style: italic;">{{<T "YES" >}}</span> for å aktivere {{<T "VitalControl" >}}-enheten. Deretter vil ikonet <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl-enhet" title="VitalControl"/> for `{{<T "VitalControl" >}}`-enheten vises i høyre sidefelt av matermenyen, under ikonet/ikonene for den/de tilkoblede maskinen(e) (se Skjermbilde <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Matermeny</a></span>, figur <span style="font-size: 140%">➁</span> der).

### Synkronisering automatisk mater <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

På venstre side av skjermen er det to avkrysningsbokser:

* Avkrysningsboks <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Dette alternativet styrer oppførselen i tilfelle det er dyr på materen under synkronisering som ennå ikke er kjent for {{<T "VitalControl" >}}-enheten. Dette alternativet er aktivert som standard og bør generelt forbli satt. Hvis du registrerer dine kjøpte dyr ved å skanne deres dyrepass, må dette alternativet deaktiveres.

    <span style="font-weight: bold">Aktiver</span> dette alternativet:

    - hvis du har en helt ny {{<T "VitalControl" >}} foran deg, som du vil overføre alle dyr fra en mater til. Etter synkronisering vil alle dyr kjent for materen også være til stede på {{<T "VitalControl" >}}.
    - hvis du kontinuerlig bringer nye kalver til materen under pågående drift. Disse dyrene vil da også bli opprettet på {{<T "VitalControl" >}}-enheten under synkronisering.

    <span style="font-weight: bold">Deaktiver</span> dette alternativet:

    - hvis du har nylig opprettede dyr på din {{<T "VitalControl" >}} ved å skanne deres dyrepass, hvor
    - disse dyrene ennå ikke har blitt tildelt en transponder og
    - disse dyrene allerede blir matet ved materen og derfor er registrert der.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Oppmerksomhet</span><br>
                Hvis alternativet forblir satt i konfigurasjonen ovenfor, vil dyrene være til stede to ganger på {{<T "VitalControl" >}} etter synkronisering.
            </div>
        </div>


* Avkrysningsboks <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Dette alternativet styrer om dyr som kun er til stede på {{<T "VitalControl" >}} men ikke på materen, blir slettet fra {{<T "VitalControl" >}} under neste synkronisering. Hvis du bruker {{<T "VitalControl" >}} kun i dyrenes melkingsperiode, bør dette alternativet være aktivert. Hvis du ønsker å spore dyrene utover melkingsperioden, må du deaktivere dette alternativet.

    <span style="font-weight: bold">Aktiver</span> dette alternativet:

    - hvis du kun samler inn data for dyrene i melkingsperioden,
    - hvis du ønsker at dyrene skal bli slettet fra {{<T "VitalControl" >}} under neste synkronisering etter at de har blitt slettet fra materen. På denne måten akkumuleres ikke dyrene på {{<T "VitalControl" >}} over tid.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Oppmerksomhet</span><br>
            Hvis dette alternativet er aktivert og avkrysningsboksen <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> også er aktivert, vil ingen dyr bli slettet som er yngre enn spesifisert i nummerfeltet <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Deaktiver</span> dette alternativet:
    - hvis du ønsker å fortsette å samle inn data for dyrene etter melkingsperioden, for eksempel under en veiing,
    - hvis du er villig til å manuelt slette dyrene fra {{<T "VitalControl" >}} selv.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Oppmerksomhet</span><br>
        Hvis du deaktiverer dette alternativet, må du koble fra transponderen for avvente dyr på {{<T "VitalControl" >}}-enheten senest når halsbåndet fjernes fra den avvente kalven til en annen, yngre kalv. Hvis transponderen ikke fjernes, vil dataene til det yngre dyret - som nå bærer det tidligere halsbåndet til det avvente dyret - feilaktig legges til i datasettet til det avvente dyret.
    </div>
</div>

### Synkronisering {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automatisk Mater

På høyre side av skjermen er det en avkrysningsboks og to inndatafelt:

* Avkrysningsboks <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Dette alternativet styrer om dyr som er til stede på {{<T "VitalControl" >}}, som er ukjente for materen, vil bli opprettet på materen under neste synkronisering. Som standard er dette alternativet ikke aktivert.

    <span style="font-weight: bold">Deaktiver</span> dette alternativet eller la det være deaktivert:

    - hvis du bruker din {{<T "VitalControl" >}}-enhet på flere matere samtidig,
    - hvis du bringer dyrene dine direkte til materen uten å registrere dem via {{<T "VitalControl" >}}-enheten først. Dyrene dine vil da automatisk bli opprettet under registrering når de mates ved materen for første gang.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Oppmerksomhet</span><br>
            Hvis {{<T "VitalControl" >}} brukes på flere maskiner og dette alternativet er avkrysset, vil dyr utilsiktet bli overført fra en maskin til en annen under synkronisering.
        </div>
    </div>

<span style="font-weight: bold">Aktiver</span> dette alternativet:

- hvis den første registreringen av deres nyfødte dyr med {{<T "VitalControl" >}} skjer før den første fôringen ved fôringsautomaten.
- hvis du registrerer dine innkjøpte dyr ved å skanne deres dyrepass på {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Oppmerksomhet</span><br>
        Aktiver dette alternativet bare hvis du bruker {{<T "VitalControl" >}} på en enkelt maskin! Hvis du ønsker å utføre synkronisering med flere maskiner med dette alternativet aktivert, må du bruke en separat {{<T "VitalControl" >}}-enhet for hver maskin.
    </div>
</div>

* Nedtrekksmeny <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   I denne nedtrekksmenyen kan du velge fôrkurven som er tildelt dyr som nylig er opprettet på fôringsautomaten under synkronisering.

* Numerisk inntastingsfelt<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    I dette nummerfeltet kan du angi minimumsalderen (i dager) fra hvilken dyr nylig opprettes på fôringsautomaten under synkronisering. Dyr som er yngre enn den angitte minimumsalderen blir **ikke** opprettet under synkronisering.

Trykk på knappen <span style="font-size: 140%">⑧</span> for å bytte til [side 2](#settings-menu-vitalcontrol-page-2) av <span style="font-style: italic;">innstillingsmenyen {{<T "VitalControl" >}}</span>.

## Innstillingsmeny `{{<T "VitalControl" >}}` - Side 2 {#settings-menu-vitalcontrol-page-2}

### Hvordan håndtere datakonflikter under synkronisering

Datakonflikter kan oppstå når data synkroniseres mellom materen og {{<T "VitalControl" >}}-enheten. En datakonflikt oppstår når dataene motsier hverandre på {{<T "VitalControl" >}}-enheten og på materen (f.eks. angående <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). På denne siden 2 av innstillingsmenyen kan du spesifisere om og hvordan datakonflikter løses under synkronisering. Det er tre alternativer her:

* Prioritet gis til materdataene, dataene på {{<T "VitalControl" >}}-enheten overskrives med de fra materen.\
  Aktiver dette alternativet ved å velge radioknappen i venstre kolonne under matersymbolet <span style="font-size: 140%">➃</span>.

* Prioritet gis til {{<T "VitalControl" >}}-dataene, dataene på materen overskrives med de fra {{<T "VitalControl" >}}-enheten.\
  Aktiver dette alternativet ved å velge radioknappen i venstre kolonne under {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Ingen endringer gjøres, både materdataene og {{<T "VitalControl" >}}-enhetens data forblir uendret.\
  Aktiver dette alternativet ved å velge radioknappen i høyre kolonne <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Eksempel</span><br>
            Etter at du har kjøpt en gruppe kalver, registrerer du de kjøpte dyrene på {{<T "VitalControl" >}} ved å skanne alle dyrepassene deres. Dyrenumrene for disse dyrene på {{<T "VitalControl" >}} er da – avhengig av <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">enhetsinnstillingene</a> – de siste 3-5 sifrene i dyrets pass. Du plasserer deretter halsbånd med Urban-transpondere på de nyinnkjøpte dyrene og mater dem ved den automatiske materen. Under det første besøket på stasjonen blir dyrene registrert ved hjelp av transponderen sin og nyopprettet ved materen. Imidlertid er dyrenumrene for disse nye dyrene på materen avledet fra transpondernummeret eller tilsvarer dyrenummeret lagret for denne transponderen i materen. Dette betyr at et annet dyrenummer nå er tildelt det samme dyret på {{<T "VitalControl" >}}-enheten og på materen, noe som resulterer i en datakonflikt. Ved hjelp av radioknappene for <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, kan du nå spesifisere i innstillingsmenyen hvilket av de to parallelle dyrenumrene som har prioritet og hvilket som vil bli slettet under synkronisering.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Settings Menu VitalControl: Page 2" title="Settings VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Skjermbilde 3: Innstillingsmeny <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Side 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Oppmerksomhet</span><br>
        Av interne årsaker kan endringer for øyeblikket kun gjøres på <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. I senere firmwareversjoner kan du også gjøre endringer på <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> og <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Ved å trykke på <span style="font-style: italic;">knappen</span> <span style="font-size: 140%">⑧</span> vil du returnere til [side 1](#settings-menu-vitalcontrol-page-1) av `{{<T "VitalControl" >}}` innstillingsmenyen.
