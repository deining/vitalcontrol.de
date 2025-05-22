---
title: Ierīces vienreizēja aktivizēšana un konfigurēšana automātiskā barotāja iestatījumos
linkTitle: Konfigurācija
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Pirms pirmās VitalControl lietošanas reizes, jums tas ir jāaktivizē un pareizi jākonfigurē Alma Pro barotāja iestatījumos.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Lai aktivizētu un iestatītu VitalControl ierīci, rīkojieties šādi:

## Navigācija uz iestatījumu izvēlni `{{<T "VitalControl" >}}`

{{% alert title="Uzmanību" %}}
Lai aktivizētu un iestatītu {{<T "VitalControl" >}} ierīci, jums ir jābūt pieteiktam kā {{<T "SiteManager" >}} lietotāja lomai automātiskajā barotājā. Pretējā gadījumā daži no zemāk redzamajiem un aprakstītajiem pogām jums nebūs redzami.
{{% /alert %}}

1. Noklikšķiniet uz apakšējās pogas <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Iestatījumu izvēlne" title="Iestatījumi"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> kreisajā sānjoslā pieskāriena terminālī. Ja atrodaties galvenajā izvēlnē, kur sānjosla nav redzama, nospiediet pogu &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Barotāja izvēlne" title="Barotāja izvēlne"/>`{{<T "Feeder" >}}`, lai parādītu sānjoslu.

1. Noklikšķiniet uz otrās pogas no kreisās <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Pieskāriena termināļa iestatījumi" title="Pieskāriena iestatījumi"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> apakšējā rīkjoslā pieskāriena terminālī.

1. Tagad kreisajā centrālās ekrāna daļā parādās virkne izvēlnes vienumu. Noklikšķiniet uz apakšējās pogas `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Tagad labajā centrālās ekrāna daļā parādās izvēlnes vienums (vai iespējams vairāki). Noklikšķiniet uz augšējās pogas `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Poga tagad pārslēdzas uz kreiso ekrāna pusi.

1. Ekrāna labajā pusē apakšā tagad tiek parādīta poga &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Atvērt VitalControl iestatījumus" title="Atvērt iestatījumus" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Noklikšķiniet uz šīs pogas, un tiks atvērts uznirstošais logs, kurā tiks parādīta [1. lapa](#settings-menu-vitalcontrol-page-1) no `{{<T "VitalControl" >}}` iestatījumu izvēlnes.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl iestatījumi: Piekļuve" title="Piekļuve VitalControl iestatījumu izvēlnei" />
    <figcaption class="figure-caption fs-6">Ekrānuzņēmums 1: Piekļuve <span style="font-style: italic;">{{<T "VitalControl" >}}</span> iestatījumu izvēlnei</figcaption>
</figure>

`{{<T "VitalControl" >}}` iestatījumu izvēlne ir sadalīta divās lapās:

## `{{<T "VitalControl" >}}` Iestatījumu Izvēlne - 1. Lapa {#settings-menu-vitalcontrol-page-1}

1. lapa <span style="font-style: italic;">{{<T "VitalControl" >}}</span> iestatījumu izvēlnē ir attēlota šādi:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl iestatījumu izvēlne: 1. lapa" title="VitalControl iestatījumi (1)" />
    <figcaption class="figure-caption fs-6">Ekrānuzņēmums 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> iestatījumu izvēlne, 1. lapa</figcaption>
</figure>

Šajā lapā jūs varat veikt šādas darbības un iestatījumus.

### {{<T "VitalControl" >}} Ierīces Aktivizēšana {#activation-vitalcontrol}

Ierīces noklusējuma stāvoklī {{<T "VitalControl" >}} ir deaktivizēts. Iestatiet slēdzi <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> uz labo pozīciju <span style="font-style: italic;">{{<T "YES" >}}</span>, lai aktivizētu {{<T "VitalControl" >}} ierīci. Pēc tam padevēja izvēlnes labajā sānjoslā, zem pievienotās ierīces ikonas, tiks parādīta ikona <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl ierīce" title="VitalControl"/> `{{<T "VitalControl" >}}` ierīcei (skatīt Ekrānuzņēmumu <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Padevēja Izvēlne</a></span>, attēls <span style="font-size: 140%">➁</span> tur).

### Sinhronizācijas automātiskais padevējs <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Ekrāna kreisajā pusē ir divas izvēles rūtiņas:

* Izvēles rūtiņa <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Šī opcija kontrolē uzvedību gadījumā, ja padevēja sinhronizācijas laikā ir dzīvnieki, kas vēl nav zināmi {{<T "VitalControl" >}} ierīcei. Šī opcija ir iespējota pēc noklusējuma un parasti tai vajadzētu palikt iestatītai. Ja jūs reģistrējat savus iegādātos dzīvniekus, skenējot viņu dzīvnieku pasus, šī opcija ir jāatspējo.

    <span style="font-weight: bold">Iespējot</span> šo opciju:

    - ja jums ir pavisam jauns {{<T "VitalControl" >}} jūsu priekšā, uz kuru vēlaties pārsūtīt visus dzīvniekus no padevēja. Pēc sinhronizācijas visi dzīvnieki, kas zināmi padevējā, būs arī uz {{<T "VitalControl" >}}.
    - ja jūs nepārtraukti vedat jaunus teļus uz padevēju darbības laikā. Šie dzīvnieki tiks izveidoti arī uz {{<T "VitalControl" >}} ierīces sinhronizācijas laikā.

    <span style="font-weight: bold">Atspējot</span> šo opciju:

    - ja jums ir nesen izveidoti dzīvnieki uz jūsu {{<T "VitalControl" >}}, skenējot viņu dzīvnieku pasus, kur
    - šiem dzīvniekiem vēl nav piešķirts transponders un
    - šie dzīvnieki jau tiek baroti pie padevēja un tādējādi ir reģistrēti tur.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
                Ja opcija paliek iestatīta iepriekš minētajā konfigurācijā, dzīvnieki pēc sinhronizācijas būs divreiz uz {{<T "VitalControl" >}}.
            </div>
        </div>


* Atzīmēšanas rūtiņa <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Šī opcija kontrolē, vai dzīvnieki, kas ir tikai {{<T "VitalControl" >}}, bet nav barotavā, tiek dzēsti no {{<T "VitalControl" >}} nākamās sinhronizācijas laikā. Ja jūs izmantojat {{<T "VitalControl" >}} tikai dzīvnieku piena periodā, šī opcija būtu jāiespējo. Ja vēlaties izsekot dzīvniekus arī pēc piena perioda, jums šī opcija jāatspējo.

    <span style="font-weight: bold">Iespējojiet</span> šo opciju:

    - ja jūs vācat datus par dzīvniekiem tikai piena periodā,
    - ja vēlaties, lai dzīvnieki tiktu dzēsti no {{<T "VitalControl" >}} nākamās sinhronizācijas laikā pēc tam, kad tie ir dzēsti no barotavas. Tādā veidā dzīvnieki laika gaitā neuzkrājas {{<T "VitalControl" >}}.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
            Ja šī opcija ir aktivizēta un atzīmēšanas rūtiņa <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> ir arī aktivizēta, netiks dzēsti dzīvnieki, kas ir jaunāki par norādīto skaitļu laukā <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Atspējojiet</span> šo opciju:
    - ja vēlaties turpināt vākt datus par dzīvniekiem pēc piena perioda, piemēram, svēršanas laikā,
    - ja esat gatavs manuāli dzēst dzīvniekus no {{<T "VitalControl" >}} pats.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
        Ja atspējojat šo opciju, jums ir jāatvieno transponders no atšķirtajiem dzīvniekiem uz {{<T "VitalControl" >}} ierīces ne vēlāk kā tad, kad kaklasiksna tiek noņemta no atšķirtā teļa uz citu, jaunāku teļu. Ja transponders netiek noņemts, jaunākā dzīvnieka dati - kurš tagad nēsā bijušo atšķirtā dzīvnieka kaklasiksnu - tiek nepareizi pievienoti atšķirto dzīvnieku datu kopai.
    </div>
</div>

### Sinhronizācija {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automātiskais barotājs

Ekrāna labajā pusē ir izvēles rūtiņa un divi ievades lauki:

* Izvēles rūtiņa <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Šī opcija kontrolē, vai dzīvnieki, kas atrodas uz {{<T "VitalControl" >}}, kuri nav zināmi barotājam, tiks izveidoti barotājā nākamās sinhronizācijas laikā. Pēc noklusējuma šī opcija nav aktivizēta.

    <span style="font-weight: bold">Deaktivizējiet</span> šo opciju vai atstājiet to deaktivizētu:

    - ja izmantojat savu {{<T "VitalControl" >}} ierīci uz vairākiem barotājiem vienlaicīgi,
    - ja vedat savus dzīvniekus tieši uz barotāju, nereģistrējot tos vispirms caur {{<T "VitalControl" >}} ierīci. Jūsu dzīvnieki tiks automātiski izveidoti reģistrācijas laikā, kad tie pirmo reizi tiks baroti pie barotāja.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
            Ja {{<T "VitalControl" >}} tiek izmantots uz vairākām mašīnām un šī opcija ir atzīmēta, dzīvnieki tiks netīši pārvietoti no vienas mašīnas uz citu sinhronizācijas laikā.
        </div>
    </div>

<span style="font-weight: bold">Aktivizējiet</span> šo opciju:

- ja jūsu jaundzimušo dzīvnieku sākotnējā reģistrācija ar {{<T "VitalControl" >}} notiek pirms pirmās barošanas pie barotavas.
- ja jūs reģistrējat savus iegādātos dzīvniekus, skenējot viņu dzīvnieku pasus ar {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
        Aktivizējiet šo opciju tikai tad, ja izmantojat {{<T "VitalControl" >}} uz vienas iekārtas! Ja vēlaties veikt sinhronizāciju ar vairākām iekārtām, kad šī opcija ir iestatīta, jums jāizmanto atsevišķa {{<T "VitalControl" >}} ierīce katrai iekārtai.
    </div>
</div>

* Nolaižamā izvēlne <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Šajā nolaižamajā izvēlnē jūs varat izvēlēties barošanas līkni, kas tiek piešķirta dzīvniekiem, kas tiek jaunizveidoti barotavā sinhronizācijas laikā.

* Skaitliskais ievades lauks<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Šajā skaitliskajā laukā jūs varat norādīt minimālo vecumu (dienās), no kura dzīvnieki tiek jaunizveidoti barotavā sinhronizācijas laikā. Dzīvnieki, kas ir jaunāki par norādīto minimālo vecumu, **netiek** izveidoti sinhronizācijas laikā.

Nospiediet pogu <span style="font-size: 140%">⑧</span>, lai pārslēgtos uz [2. lapu](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">iestatījumu izvēlnē {{<T "VitalControl" >}}</span>.

## Iestatījumu izvēlne `{{<T "VitalControl" >}}` - 2. lapa {#settings-menu-vitalcontrol-page-2}

### Kā risināt datu konfliktus sinhronizācijas laikā

Datu konflikti var rasties, sinhronizējot datus starp padevēju un {{<T "VitalControl" >}} ierīci. Datu konflikts rodas, kad dati pretrunā viens otram uz {{<T "VitalControl" >}} ierīces un uz padevēja (piemēram, attiecībā uz <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Šajā iestatījumu izvēlnes 2. lapā jūs varat norādīt, vai un kā datu konflikti tiek atrisināti sinhronizācijas laikā. Šeit ir trīs iespējas:

* Prioritāte tiek piešķirta padevēja datiem, dati uz {{<T "VitalControl" >}} ierīces tiek pārrakstīti ar padevēja datiem\.
  Aktivizējiet šo opciju, izvēloties radio pogu kreisajā kolonnā zem padevēja simbola <span style="font-size: 140%">➃</span>.

* Prioritāte tiek piešķirta {{<T "VitalControl" >}} datiem, dati uz padevēja tiek pārrakstīti ar {{<T "VitalControl" >}} ierīces datiem\.
  Aktivizējiet šo opciju, izvēloties radio pogu kreisajā kolonnā zem {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Nekādas izmaiņas netiek veiktas, gan padevēja dati, gan {{<T "VitalControl" >}} ierīces dati paliek nemainīti.\
  Aktivizējiet šo opciju, izvēloties radio pogu labajā kolonnā <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Piemērs</span><br>
            Pēc tam, kad esat iegādājies teļu partiju, jūs reģistrējat savus iegādātos dzīvniekus uz {{<T "VitalControl" >}}, skenējot visus viņu dzīvnieku pasus. Dzīvnieku numuri šiem dzīvniekiem uz {{<T "VitalControl" >}} ir tad – atkarībā no <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">ierīces iestatījumiem</a> – pēdējie 3-5 dzīvnieka pases cipari. Tad jūs uzliekat apkakles ar Urban transponderiem uz jauniegādātajiem dzīvniekiem un barojat tos automātiskajā padevējā. Sākotnējā apmeklējuma laikā stacijā dzīvnieki tiek reģistrēti, izmantojot savu transponderu, un jaunizveidoti padevējā. Tomēr dzīvnieku numuri šiem jaunajiem dzīvniekiem uz padevēja tiek iegūti no transpondera numura vai atbilst dzīvnieku numuram, kas saglabāts šim transponderam padevējā. Tas nozīmē, ka atšķirīgs dzīvnieku numurs tagad ir piešķirts tam pašam dzīvniekam uz {{<T "VitalControl" >}} ierīces un uz padevēja, radot datu konfliktu. Izmantojot radio pogas <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, jūs tagad varat norādīt iestatījumu izvēlnē, kuram no diviem paralēlajiem dzīvnieku numuriem ir prioritāte un kurš tiks dzēsts sinhronizācijas laikā.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Settings Menu VitalControl: Page 2" title="Settings VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Ekrānuzņēmums 3: Iestatījumu izvēlne <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Lapa 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
        Iekšēju iemeslu dēļ izmaiņas pašlaik var veikt tikai <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Vēlākās programmatūras versijās jūs varēsiet veikt izmaiņas arī <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> un <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Nospiežot <span style="font-style: italic;">pogu</span> <span style="font-size: 140%">⑧</span>, jūs atgriezīsieties pie [1. lapas](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` iestatījumu izvēlnē.
