---
title: Ierīces vienreizēja aktivizēšana un konfigurēšana automātiskā padevēja iestatījumos
linkTitle: Konfigurācija
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Pirms pirmās VitalControl lietošanas reizes, jums ir jāaktivizē un pareizi jākonfigurē to Alma Pro padevēja iestatījumos.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/lv
---
## Prasības

Mēs iesakām izmantot programmaparatūras versiju <span style="font-weight: bold">24-xx-xx</span> vai augstāku ar VitalControl ierīci.\
Lai pārbaudītu, kura programmaparatūras versija ir instalēta jūsu ierīcē:

* Dodieties uz padevēja sākumlapu, noklikšķinot uz augšējās `Home` pogas <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Sākuma ekrāna ikona" title="Alma Pro: Sākuma ekrāns"/>&nbsp; navigācijas joslā ekrāna kreisajā pusē.
* Sākuma ekrānā noklikšķiniet uz `Help` pogas <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Palīdzības izvēlnes ikona" title="Alma Pro: Palīdzības ekrāns"/>&nbsp; ekrāna augšējā labajā stūrī.
* Versijas numurs <span style="font-size: 140%">➂</span> tagad tiek parādīts pa kreisi no valodas pārslēgšanas pogas.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: programmaparatūras versijas pārbaude" title="Alma Pro: programmaparatūras versijas pārbaude" />
    <figcaption class="figure-caption fs-6">Ekrānuzņēmums 1: <span style="font-style: italic;">Alma Pro: programmaparatūras versijas pārbaude</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
        Ja jūsu padevēja programmaparatūras versija ir zemāka par <span style="font-weight: bold">24-xx-xx</span>, var būt neatbilstības starp zemāk redzamajiem ekrānuzņēmumiem un jūsu skārienekrāna attēlojumu, tādējādi jūs, iespējams, nevarēsiet sekot instrukcijām. Šādā gadījumā sazinieties ar savu servisa tehniķi, lai atjauninātu programmaparatūru jūsu padevējā.<br>
    </div>
</div>

## Navigācija uz iestatījumu izvēlni `{{% T "VitalControl" %}}`

{{% alert title="Uzmanību" %}}
Lai aktivizētu un iestatītu ierīci {{<T "VitalControl" >}}, jums jābūt pieteiktam kā lietotājam ar lomu {{<T "SiteManager" >}} automātiskajā barotavā. Pretējā gadījumā dažas no zemāk redzamajām un aprakstītajām pogām jums nebūs redzamas.
{{% /alert %}}

1. Noklikšķiniet uz apakšējās pogas <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Iestatījumu izvēlne" title="Iestatījumi"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> kreisajā sānjoslā uz skārienjutīgā termināļa. Ja atrodaties galvenajā izvēlnē, kur sānjosla nav redzama, nospiediet pogu &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Barotavas izvēlne" title="Barotavas izvēlne"/>`{{<T "Feeder" >}}`, lai parādītu sānjoslu.

1. Noklikšķiniet uz otrās pogas no kreisās <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Skārienjutīgā termināļa iestatījumi" title="Skārienjutīgie iestatījumi"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> apakšējā rīkjoslā uz skārienjutīgā termināļa.

1. Tagad centrālā ekrāna kreisajā pusē parādās virkne izvēlnes vienumu. Noklikšķiniet uz apakšējās pogas `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Tagad centrālā ekrāna labajā pusē parādās izvēlnes vienums (vai iespējams vairāki). Noklikšķiniet uz augšējās pogas `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Poga tagad pārslēdzas uz kreiso ekrāna pusi.

1. Ekrāna labajā pusē apakšā tagad tiek parādīta poga &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Atvērt VitalControl iestatījumus" title="Atvērt iestatījumus" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Noklikšķiniet uz šīs pogas, un tiks atvērts uznirstošais logs, kurā tiks parādīta [1. lapa](#settings-menu-vitalcontrol-page-1) no `{{<T "VitalControl" >}}` iestatījumu izvēlnes.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" usemap="#NavigationToVitalControlSettingsMenu" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl iestatījumi: Piekļuve" title="Piekļuve VitalControl iestatījumu izvēlnei" />
    <figcaption class="figure-caption fs-6">Ekrānuzņēmums 1: Piekļuve <span style="font-style: italic;">{{<T "VitalControl" >}}</span> iestatījumu izvēlnei</figcaption>
</figure>

`{{<T "VitalControl" >}}` iestatījumu izvēlne ir sadalīta divās lapās:

## `{{% T "VitalControl" %}}` Iestatījumu Izvēlne - 1. Lapa {#settings-menu-vitalcontrol-page-1}

1. lapa <span style="font-style: italic;">{{<T "VitalControl" >}}</span> iestatījumu izvēlnē ir attēlota šādi:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" usemap="#VitalControlSettingsPage1" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl iestatījumu izvēlne: 1. lapa" title="VitalControl iestatījumi (1)" />
    <figcaption class="figure-caption fs-6">Ekrānuzņēmums 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> iestatījumu izvēlne, 1. lapa</figcaption>
</figure>

Šajā lapā var veikt šādas darbības un iestatījumus.

### {{% T "VitalControl" %}} Ierīces Aktivizēšana {#activation-vitalcontrol}

Ierīces noklusējuma stāvoklī {{<T "VitalControl" >}} ir deaktivizēts. Iestatiet slēdzi <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> uz labo pozīciju <span style="font-style: italic;">{{<T "YES" >}}</span>, lai aktivizētu {{<T "VitalControl" >}} ierīci. Pēc tam padevēja izvēlnes labajā sānjoslā, zem pievienotās ierīces ikonas, tiks parādīta ikona <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl ierīce" title="VitalControl"/> priekš `{{<T "VitalControl" >}}` ierīces (skatīt Ekrānuzņēmumu <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Padevēja Izvēlne</a></span>, attēls <span style="font-size: 140%">➁</span> tur).

### Sinhronizācija automātiskais padevējs <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Ekrāna kreisajā pusē ir divas izvēles rūtiņas:

* Izvēles rūtiņa <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Šī opcija kontrolē uzvedību gadījumā, ja sinhronizācijas laikā uz barotavas ir dzīvnieki, kas vēl nav zināmi {{<T "VitalControl" >}} ierīcei. Šī opcija ir iespējota pēc noklusējuma un parasti tai vajadzētu palikt ieslēgtai. Ja jūs reģistrējat savus iegādātos dzīvniekus, skenējot viņu dzīvnieku pasus, šī opcija ir jāatspējo.

<span style="font-weight: bold">Iespējot</span> šo opciju:

- ja jums ir pavisam jauns {{<T "VitalControl" >}} jūsu priekšā, uz kuru vēlaties pārsūtīt visus dzīvniekus no barotavas. Pēc sinhronizācijas visi dzīvnieki, kas zināmi barotavai, būs arī uz {{<T "VitalControl" >}}.
- ja jūs nepārtraukti vedat jaunus teļus uz barotavu darbības laikā. Šie dzīvnieki tiks izveidoti arī uz {{<T "VitalControl" >}} ierīces sinhronizācijas laikā.

<span style="font-weight: bold">Atspējot</span> šo opciju:

- ja jums ir nesen izveidoti dzīvnieki uz jūsu {{<T "VitalControl" >}} skenējot viņu dzīvnieku pasus, kur
- šiem dzīvniekiem vēl nav piešķirts transponders un
- šie dzīvnieki jau tiek baroti pie barotavas un tādējādi ir reģistrēti tur.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
        Ja opcija paliek iestatīta iepriekš minētajā konfigurācijā, dzīvnieki pēc sinhronizācijas būs divreiz uz {{<T "VitalControl" >}}.
    </div>
</div>

* Atzīmēšanas rūtiņa <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Šī opcija kontrolē, vai dzīvnieki, kas ir tikai {{<T "VitalControl" >}}, bet nav barotavā, tiek dzēsti no {{<T "VitalControl" >}} nākamās sinhronizācijas laikā. Ja jūs izmantojat {{<T "VitalControl" >}} tikai dzīvnieku piena periodā, šī opcija ir jāiespējo. Ja vēlaties izsekot dzīvniekus arī pēc piena perioda, šī opcija ir jāatspējo.

<span style="font-weight: bold">Iespējot</span> šo opciju:

- ja jūs vācat datus par dzīvniekiem tikai piena periodā,
- ja vēlaties, lai dzīvnieki tiktu dzēsti no {{<T "VitalControl" >}} nākamās sinhronizācijas laikā pēc tam, kad tie ir dzēsti no barotavas. Tādā veidā dzīvnieki laika gaitā neuzkrājas {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
        Ja šī opcija ir aktivizēta un izvēles rūtiņa <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> ir arī aktivizēta, netiks dzēsti dzīvnieki, kas ir jaunāki par norādīto skaitļa laukā <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Atspējot</span> šo opciju:
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

### Sinhronizācija {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Automātiskais barotājs

Ekrāna labajā pusē ir izvēles rūtiņa un divi ievades lauki:

* Izvēles rūtiņa <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Šī opcija kontrolē, vai dzīvnieki, kas atrodas uz {{<T "VitalControl" >}}, kuri nav zināmi barotājam, tiks izveidoti barotājā nākamās sinhronizācijas laikā. Pēc noklusējuma šī opcija nav aktivizēta.

    <span style="font-weight: bold">Deaktivizējiet</span> šo opciju vai atstājiet to deaktivizētu:

    - ja izmantojat savu {{<T "VitalControl" >}} ierīci uz vairākiem barotājiem vienlaicīgi,
    - ja jūs vedat savus dzīvniekus tieši uz barotāju, nereģistrējot tos vispirms caur {{<T "VitalControl" >}} ierīci. Jūsu dzīvnieki tiks automātiski izveidoti reģistrācijas laikā, kad tie pirmo reizi tiks baroti pie barotāja.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
        Ja {{<T "VitalControl" >}} tiek izmantots vairākās iekārtās un šī opcija ir atzīmēta, dzīvnieki tiks netīšām pārvietoti no vienas iekārtas uz citu sinhronizācijas laikā.
    </div>
</div>

<span style="font-weight: bold">Aktivizējiet</span> šo opciju:

- ja sākotnējā viņu jaundzimušo dzīvnieku reģistrācija ar {{<T "VitalControl" >}} notiek pirms pirmās barošanas pie barotavas.
- ja jūs reģistrējat savus iegādātos dzīvniekus, skenējot viņu dzīvnieku pasus uz {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
        Aktivizējiet šo opciju tikai tad, ja izmantojat {{<T "VitalControl" >}} vienā iekārtā! Ja vēlaties veikt sinhronizāciju ar vairākām iekārtām, kad šī opcija ir iestatīta, jums jāizmanto atsevišķa {{<T "VitalControl" >}} ierīce katrai iekārtai.
    </div>
</div>

* Nolaižamā izvēlne <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Šajā nolaižamajā izvēlnē varat izvēlēties barošanas līkni, kas tiek piešķirta dzīvniekiem, kas tiek izveidoti barotavā sinhronizācijas laikā.

* Ciparu ievades lauks<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Šajā ciparu laukā varat norādīt minimālo vecumu (dienās), no kura dzīvnieki tiek izveidoti barotavā sinhronizācijas laikā. Dzīvnieki, kas ir jaunāki par norādīto minimālo vecumu, **netiek** izveidoti sinhronizācijas laikā.

Nospiediet pogu <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span>, lai pārslēgtos uz [2. lapu](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">iestatījumu izvēlnē {{<T "VitalControl" >}}</span>.

## Iestatījumu izvēlne `{{% T "VitalControl" %}}` - 2. lapa {#settings-menu-vitalcontrol-page-2}

### Kā rīkoties ar datu konfliktiem sinhronizācijas laikā

Datu konflikti var rasties, sinhronizējot datus starp barotavu un {{<T "VitalControl" >}} ierīci. Datu konflikts rodas, ja dati pretrunā viens otram {{<T "VitalControl" >}} ierīcē un barotavā (piemēram, attiecībā uz <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Šajā iestatījumu izvēlnes 2. lapā varat norādīt, vai un kā datu konflikti tiek atrisināti sinhronizācijas laikā. Šeit ir trīs iespējas:

* Prioritāte tiek piešķirta barotavas datiem, dati {{<T "VitalControl" >}} ierīcē tiek pārrakstīti ar barotavas datiem\.
  Aktivizējiet šo opciju, izvēloties radio pogu kreisajā kolonnā zem barotavas simbola <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Prioritāte tiek piešķirta {{<T "VitalControl" >}} datiem, dati barotavā tiek pārrakstīti ar {{<T "VitalControl" >}} ierīces datiem\.
  Aktivizējiet šo opciju, izvēloties radio pogu kreisajā kolonnā zem {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* Netiek veiktas nekādas izmaiņas, gan barotāja dati, gan {{<T "VitalControl" >}} ierīces dati paliek nemainīgi. Aktivizējiet šo opciju, izvēloties radio pogu labajā kolonnā <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Piemērs</span><br>
            Pēc tam, kad esat iegādājies teļu partiju, jūs reģistrējat savus iegādātos dzīvniekus {{<T "VitalControl" >}}, skenējot visus viņu dzīvnieku pasus. Dzīvnieku numuri šiem dzīvniekiem {{<T "VitalControl" >}} ir – atkarībā no <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">ierīces iestatījumiem</a> – pēdējie 3-5 dzīvnieka pases cipari. Tad jūs uzliekat kakla siksnas ar Urban transponderiem jauniegādātajiem dzīvniekiem un barojat tos automātiskajā barotavā. Sākotnējā apmeklējuma laikā stacijā dzīvnieki tiek reģistrēti, izmantojot savu transponderu, un tiek izveidoti jauni barotavā. Tomēr dzīvnieku numuri šiem jaunajiem dzīvniekiem barotavā tiek iegūti no transpondera numura vai atbilst dzīvnieka numuram, kas saglabāts šim transponderam barotavā. Tas nozīmē, ka tagad vienam un tam pašam dzīvniekam ir piešķirts atšķirīgs dzīvnieka numurs {{<T "VitalControl" >}} ierīcē un barotavā, radot datu konfliktu. Izmantojot radio pogas <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, jūs tagad varat iestatījumu izvēlnē norādīt, kuram no diviem paralēlajiem dzīvnieku numuriem ir prioritāte un kurš tiks dzēsts sinhronizācijas laikā.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" usemap="#VitalControlSettingsPage2" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Iestatījumu izvēlne VitalControl: 2. lapa" title="Iestatījumi VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Ekrānuzņēmums 3: Iestatījumu izvēlne <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, 2. lapa</figcaption>
</figure>


<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
        Iekšēju iemeslu dēļ izmaiņas pašlaik var veikt tikai <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Vēlākās programmaparatūras versijās jūs varēsiet veikt izmaiņas arī <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> un <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Nospiežot <span style="font-style: italic;">pogu</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span>, jūs atgriezīsieties pie [1. lapas](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` iestatījumu izvēlnē.

<map name="NavigationToVitalControlSettingsMenu">
    <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='Noklikšķiniet {{<T "Settings" >}}' href="#Navigation_Digit_1">
    <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='Noklikšķiniet {{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
    <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='Noklikšķiniet {{<T "Accessories" >}}' href="#Navigation_Digit_3">
    <area shape="rect" coords="520,150,870,197" alt='{{<T "OpenSettings" >}}' title='Noklikšķiniet {{<T "OpenSettings" >}}' href="#Navigation_Digit_4">
    <area shape="rect" coords="580,582,850,636" alt='{{<T "VitalControl" >}}' title='Noklikšķiniet {{<T "VitalControl" >}}' href="#Navigation_Digit_5">
</map>

<map name="VitalControlSettingsPage1">
    <area shape="rect" coords="253,45,626,107" alt='{{<T "JĀ" >}}/{{<T "NĒ" >}}' title='Klikšķiniet {{<T "JĀ" >}}/{{<T "NĒ" >}}' href="#VitalControlSettingsPage1_Digit_1">
    <area shape="rect" coords="11,236,88,316" alt='{{<T "ReģistrētJaunuUzVitalControlIerīces" >}}' title='Klikšķiniet {{<T "ReģistrētJaunuUzVitalControlIerīces" >}}' href="#VitalControlSettingsPage1_Digit_2">
    <area shape="rect" coords="11,357,88,434" alt='{{<T "DzēstNoVitalControl" >}}' title='Klikšķiniet {{<T "DzēstNoVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
    <area shape="rect" coords="31,463,357,508" alt='{{<T "NedzēstDzīvniekusJaunākusPar" >}}' title='Klikšķiniet {{<T "NedzēstDzīvniekusJaunākusPar" >}}' href="#VitalControlSettingsPage1_Digit_4">
    <area shape="rect" coords="420,236,511,286" alt='{{<T "ReģistrētJaunuUzAutomātiskāBarotāja" >}}' title='Klikšķiniet {{<T "ReģistrētJaunuUzAutomātiskāBarotāja" >}}' href="#VitalControlSettingsPage1_Digit_5">
    <area shape="rect" coords="435,352,837,397" alt='{{<T "BarošanasLīknePiešķirtaImportētajiemDzīvniekiem" >}}' title='Klikšķiniet {{<T "BarošanasLīknePiešķirtaImportētajiemDzīvniekiem" >}}' href="#VitalControlSettingsPage1_Digit_6">
    <area shape="rect" coords="513,462,837,507" alt='{{<T "NeimportētDzīvniekusVecākusPar" >}}' title='Klikšķiniet {{<T "NeimportētDzīvniekusVecākusPar" >}}' href="#VitalControlSettingsPage1_Digit_7">
    <area shape="rect" coords="142,517,215,616" alt='Lapa 2' title='Klikšķiniet Lapa 2' href="#VitalControlSettingsPage1_Digit_8">
</map>

<map name="VitalControlSettingsPage2">
    <area shape="rect" coords="5,208,235,248" alt='{{<T "AusuZīmesNumurs" >}}' title='Klikšķiniet {{<T "AusuZīmesNumurs" >}}' href="#VitalControlSettingsPage2_Digit_1">
    <area shape="rect" coords="5,208,235,328" alt='{{<T "DzīvniekaNumurs" >}}' title='Klikšķiniet {{<T "DzīvniekaNumurs" >}}' href="#VitalControlSettingsPage2_Digit_2">
    <area shape="rect" coords="5,368,235,408" alt='{{<T "DzimšanasDatums" >}}' title='Klikšķiniet {{<T "DzimšanasDatums" >}}' href="#VitalControlSettingsPage2_Digit_3">
    <area shape="rect" coords="392,116,455,177" alt='{{<T "Barotājs" >}}' title='Klikšķiniet {{<T "Barotājs" >}}' href="#VitalControlSettingsPage2_Digit_4">
    <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='Klikšķiniet {{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
    <area shape="rect" coords="678,97,775,159" alt='{{<T "NavIzmaiņu_AP" >}}' title='Klikšķiniet {{<T "NavIzmaiņu_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
    <area shape="rect" coords="52,510,125,615" alt='Lapa 1' title='Klikšķiniet Lapa 1' href="#VitalControlSettingsPage2_Digit_8">
</map>
