---
title: Vienkartinis įrenginio aktyvavimas ir konfigūravimas automatinio šėryklos nustatymuose
linkTitle: Konfigūracija
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Prieš pirmą kartą naudojant VitalControl, jį reikia vieną kartą aktyvuoti ir tinkamai sukonfigūruoti Alma Pro šėryklos nustatymuose.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
---
## Reikalavimai

Rekomenduojame naudoti programinės įrangos versiją <span style="font-weight: bold">24-xx-xx</span> arba naujesnę su VitalControl įrenginiu.\
Norėdami patikrinti, kuri programinės įrangos versija įdiegta jūsų įrenginyje:

* Eikite į šėryklos pagrindinį puslapį spustelėdami viršutinį `Home` mygtuką <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Pagrindinio ekrano piktograma" title="Alma Pro: Pagrindinis ekranas"/>&nbsp; kairėje ekrano pusėje esančioje naršymo juostoje.
* Pagrindiniame ekrane spustelėkite `Help` mygtuką <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Pagalbos meniu piktograma" title="Alma Pro: Pagalbos ekranas"/>&nbsp; viršutiniame dešiniajame ekrano kampe.
* Versijos numeris <span style="font-size: 140%">➂</span> dabar rodomas kairėje kalbos keitimo mygtuko pusėje.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: programinės įrangos versijos patikrinimas" title="Alma Pro: programinės įrangos versijos patikrinimas" />
    <figcaption class="figure-caption fs-6">Ekrano nuotrauka 1: <span style="font-style: italic;">Alma Pro: programinės įrangos versijos patikrinimas</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
        Jei jūsų šėryklos programinės įrangos versija yra mažesnė nei <span style="font-weight: bold">24-xx-xx</span>, gali būti neatitikimų tarp žemiau pateiktų ekrano nuotraukų ir jūsų jutiklinio ekrano vaizdo, todėl gali nepavykti sekti instrukcijų. Tokiu atveju susisiekite su savo techninės priežiūros specialistu, kad atnaujintumėte šėryklos programinę įrangą.<br>
    </div>
</div>

## Naršymas į nustatymų meniu `{{<T "VitalControl" >}}`

{{% alert title="Dėmesio" %}}
Norint aktyvuoti ir nustatyti {{<T "VitalControl" >}} įrenginį, turite būti prisijungę kaip {{<T "SiteManager" >}} vartotojo rolė prie automatinio šėryklos. Priešingu atveju, kai kurie žemiau parodyti ir aprašyti mygtukai jums nebus matomi.
{{% /alert %}}

1. Spustelėkite apatinį mygtuką <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Nustatymų meniu" title="Nustatymai"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> kairiajame šoniniame jutiklinio terminalo meniu. Jei esate pagrindiniame meniu, kur šoninis meniu nematomas, paspauskite mygtuką &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Šėryklos meniu" title="Šėryklos meniu"/>`{{<T "Feeder" >}}`, kad būtų rodomas šoninis meniu.

1. Spustelėkite antrąjį mygtuką iš kairės <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Jutiklinio terminalo nustatymai" title="Jutikliniai nustatymai"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> apatinėje jutiklinio terminalo įrankių juostoje.

1. Dabar kairėje centrinės ekrano dalies pusėje pasirodo meniu elementų serija. Spustelėkite apatinį mygtuką `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Dabar dešinėje centrinės ekrano dalies pusėje pasirodo meniu elementas (arba keli). Spustelėkite viršutinį mygtuką `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Mygtukas dabar persijungia į kairę ekrano pusę.

1. Ekrano dešinės pusės apačioje dabar rodomas mygtukas &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Atidaryti VitalControl nustatymus" title="Atidaryti nustatymus" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Spustelėkite šį mygtuką, ir atsidarys iššokantis langas, rodantis [1 puslapį](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` nustatymų meniu.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" usemap="#NavigationToVitalControlSettingsMenu" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl nustatymai: Prieiga" title="Prieiga prie VitalControl nustatymų meniu" />
    <figcaption class="figure-caption fs-6">Ekrano nuotrauka 1: Prieiga prie <span style="font-style: italic;">{{<T "VitalControl" >}}</span> nustatymų meniu</figcaption>
</figure>

`{{<T "VitalControl" >}}` nustatymų meniu yra padalintas į du puslapius:

## `{{<T "VitalControl" >}}` Nustatymų Meniu - 1 Puslapis {#settings-menu-vitalcontrol-page-1}

1-asis <span style="font-style: italic;">{{<T "VitalControl" >}}</span> nustatymų meniu puslapis pateikiamas taip:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" usemap="#VitalControlSettingsPage1" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl nustatymų meniu: 1 puslapis" title="VitalControl nustatymai (1)" />
    <figcaption class="figure-caption fs-6">Ekrano nuotrauka 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> nustatymų meniu, 1 puslapis</figcaption>
</figure>

Šiame puslapyje galite atlikti šiuos veiksmus ir nustatymus.

### {{<T "VitalControl" >}} Įrenginio Aktyvavimas {#activation-vitalcontrol}

Pagal numatytąją mašinos būseną, {{<T "VitalControl" >}} yra išjungtas. Nustatykite <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> jungiklį <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> į dešinę poziciją <span style="font-style: italic;">{{<T "YES" >}}</span>, kad aktyvuotumėte {{<T "VitalControl" >}} įrenginį. Vėliau, dešiniajame šoniniame šėryklos meniu stulpelyje, po prijungtos mašinos (-ų) piktograma (-omis), bus rodoma piktograma <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl įrenginys" title="VitalControl"/> `{{<T "VitalControl" >}}` įrenginiui (žr. Ekrano nuotrauką <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Šėryklos Meniu</a></span>, figūra <span style="font-size: 140%">➁</span> ten).

### Sinchronizacija automatinė šėrykla <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Kairėje ekrano pusėje yra du žymimieji langeliai:

* Žymimasis langelis <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Ši parinktis kontroliuoja elgesį, kai sinchronizacijos metu šėrykloje yra gyvūnų, kurie dar nėra žinomi {{<T "VitalControl" >}} įrenginiui. Ši parinktis yra įjungta pagal numatytuosius nustatymus ir paprastai turėtų likti įjungta. Jei registruojate savo įsigytus gyvūnus nuskaitydami jų gyvūnų pasus, ši parinktis turi būti išjungta.

<span style="font-weight: bold">Įjunkite</span> šią parinktį:

- jei turite visiškai naują {{<T "VitalControl" >}} priešais save, į kurį norite perkelti visus gyvūnus iš šėryklos. Po sinchronizacijos visi šėrykloje žinomi gyvūnai taip pat bus {{<T "VitalControl" >}}.
- jei nuolat atvedate naujus veršelius į šėryklą vykdant veiklą. Šie gyvūnai taip pat bus sukurti {{<T "VitalControl" >}} įrenginyje sinchronizacijos metu.

<span style="font-weight: bold">Išjunkite</span> šią parinktį:

- jei turite naujai sukurtus gyvūnus savo {{<T "VitalControl" >}} nuskaitydami jų gyvūnų pasus, kur
- šiems gyvūnams dar nebuvo priskirtas transponderis ir
- šie gyvūnai jau yra šeriami šėrykloje ir todėl yra ten registruoti.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
        Jei parinktis lieka nustatyta aukščiau pateiktoje konfigūracijoje, po sinchronizacijos gyvūnai bus du kartus {{<T "VitalControl" >}}.
    </div>
</div>

* Žymės langelis <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Ši parinktis kontroliuoja, ar gyvūnai, kurie yra tik {{<T "VitalControl" >}}, bet nėra šėrykloje, bus ištrinti iš {{<T "VitalControl" >}} per kitą sinchronizaciją. Jei naudojate {{<T "VitalControl" >}} tik gyvūnų pieno laikotarpiu, ši parinktis turėtų būti įjungta. Jei norite stebėti gyvūnus po pieno laikotarpio, turite išjungti šią parinktį.

<span style="font-weight: bold">Įjunkite</span> šią parinktį:

- jei renkatės duomenis apie gyvūnus tik pieno laikotarpiu,
- jei norite, kad gyvūnai būtų ištrinti iš {{<T "VitalControl" >}} per kitą sinchronizaciją po to, kai jie buvo ištrinti iš šėryklos. Tokiu būdu gyvūnai nesikaupia {{<T "VitalControl" >}} laikui bėgant.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
        Jei ši parinktis yra aktyvuota ir žymimasis langelis <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> taip pat yra aktyvuotas, nebus ištrinti gyvūnai, kurie yra jaunesni nei nurodyta skaičiaus lauke <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Išjunkite</span> šią parinktį:
- jei norite toliau rinkti duomenis apie gyvūnus po pieno laikotarpio, pavyzdžiui, sveriant,
- jei esate pasirengę patys rankiniu būdu ištrinti gyvūnus iš {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
        Jei išjungsite šią parinktį, turite atjungti transponderį nuo atjunkytų gyvūnų {{<T "VitalControl" >}} įrenginyje ne vėliau kaip tada, kai antkaklis yra nuimamas nuo atjunkytos veršelės ir uždedamas kitai, jaunesnei veršelei. Jei transponderis nėra pašalinamas, jaunesnio gyvūno duomenys - kuris dabar dėvi buvusį atjunkytos veršelės antkaklį - bus neteisingai pridedami prie atjunkytų gyvūnų duomenų rinkinio.
    </div>
</div>

### Sinchronizacija {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automatinis šėrykla

Dešinėje ekrano pusėje yra žymimasis langelis ir du įvesties laukai:

* Žymimasis langelis <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Ši parinktis kontroliuoja, ar gyvūnai, esantys {{<T "VitalControl" >}}, kurie nėra žinomi šėrykloje, bus sukurti šėrykloje per kitą sinchronizaciją. Pagal numatytuosius nustatymus ši parinktis nėra aktyvuota.

    <span style="font-weight: bold">Deaktyvuokite</span> šią parinktį arba palikite ją deaktyvuotą:

    - jei naudojate savo {{<T "VitalControl" >}} įrenginį keliuose šėryklose vienu metu,
    - jei tiesiogiai vedate savo gyvūnus į šėryklą, neregistruodami jų per {{<T "VitalControl" >}} įrenginį pirmiausia. Jūsų gyvūnai bus automatiškai sukurti registracijos metu, kai jie pirmą kartą bus šeriami šėrykloje.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
        Jei {{<T "VitalControl" >}} naudojamas keliuose įrenginiuose ir ši parinktis pažymėta, gyvūnai bus netyčia perkelti iš vieno įrenginio į kitą sinchronizacijos metu.
    </div>
</div>

<span style="font-weight: bold">Aktyvuokite</span> šią parinktį:

- jei pirminė jų naujagimių registracija su {{<T "VitalControl" >}} vyksta prieš pirmąjį šėrimą šėrykloje.
- jei registruojate įsigytus gyvūnus nuskaitydami jų gyvūnų pasus su {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
        Aktyvuokite šią parinktį tik jei naudojate {{<T "VitalControl" >}} viename įrenginyje! Jei norite atlikti sinchronizaciją su keliais įrenginiais su šia parinktimi, turite naudoti atskirą {{<T "VitalControl" >}} įrenginį kiekvienam įrenginiui.
    </div>
</div>

* Išskleidžiamasis meniu <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Šiame išskleidžiamajame meniu galite pasirinkti pašarų kreivę, kuri priskiriama gyvūnams, naujai sukurtiems šėrykloje sinchronizacijos metu.

* Skaitmeninis įvesties laukas<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Šiame skaitmeniniame lauke galite nurodyti minimalų amžių (dienomis), nuo kurio gyvūnai naujai sukuriami šėrykloje sinchronizacijos metu. Gyvūnai, kurie yra jaunesni nei nurodytas minimalus amžius, **nėra** kuriami sinchronizacijos metu.

Paspauskite mygtuką <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> norėdami pereiti į [2 puslapį](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">nustatymų meniu {{<T "VitalControl" >}}</span>.

## Nustatymų meniu `{{<T "VitalControl" >}}` - 2 puslapis {#settings-menu-vitalcontrol-page-2}

### Kaip spręsti duomenų konfliktus sinchronizacijos metu

Duomenų konfliktai gali kilti sinchronizuojant duomenis tarp šėryklos ir {{<T "VitalControl" >}} įrenginio. Duomenų konfliktas atsiranda, kai duomenys prieštarauja vieni kitiems {{<T "VitalControl" >}} įrenginyje ir šėrykloje (pvz., dėl <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Šiame nustatymų meniu 2 puslapyje galite nurodyti, ar ir kaip duomenų konfliktai sprendžiami sinchronizacijos metu. Čia yra trys pasirinkimai:

* Pirmenybė teikiama šėryklos duomenims, {{<T "VitalControl" >}} įrenginio duomenys perrašomi šėryklos duomenimis\.
  Aktyvuokite šią parinktį pasirinkdami radijo mygtuką kairėje stulpelio pusėje po šėryklos simboliu <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Pirmenybė teikiama {{<T "VitalControl" >}} duomenims, šėryklos duomenys perrašomi {{<T "VitalControl" >}} įrenginio duomenimis\.
  Aktyvuokite šią parinktį pasirinkdami radijo mygtuką kairėje stulpelio pusėje po {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* Jokių pakeitimų nėra, tiek šėryklos duomenys, tiek {{<T "VitalControl" >}} įrenginio duomenys lieka nepakitę. \
  Aktyvuokite šią parinktį pasirinkdami radijo mygtuką dešinėje stulpelio pusėje <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pavyzdys</span><br>
            Po to, kai įsigijote veršelių partiją, registruojate savo įsigytus gyvūnus {{<T "VitalControl" >}} nuskaitydami visus jų gyvūnų pasus. Šių gyvūnų numeriai {{<T "VitalControl" >}} yra – priklausomai nuo <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">įrenginio nustatymų</a> – paskutiniai 3-5 gyvūno paso skaitmenys. Tada uždedate antkaklius su Urban siųstuvais naujai įsigytiems gyvūnams ir šeriate juos automatiniame šėrykloje. Per pirmąjį apsilankymą stotyje gyvūnai registruojami naudojant jų siųstuvą ir naujai sukuriami šėrykloje. Tačiau naujų gyvūnų numeriai šėrykloje yra gaunami iš siųstuvo numerio arba atitinka gyvūno numerį, saugomą šiam siųstuvui šėrykloje. Tai reiškia, kad tam pačiam gyvūnui dabar buvo priskirtas skirtingas gyvūno numeris {{<T "VitalControl" >}} įrenginyje ir šėrykloje, dėl ko kyla duomenų konfliktas. Naudodami radijo mygtukus <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, dabar galite nustatymų meniu nurodyti, kuris iš dviejų lygiagrečių gyvūnų numerių turi prioritetą ir kuris bus ištrintas sinchronizacijos metu.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" usemap="#VitalControlSettingsPage2" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Nustatymų meniu VitalControl: 2 puslapis" title="Nustatymai VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Ekrano nuotrauka 3: Nustatymų meniu <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, 2 puslapis</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
        Dėl vidinių priežasčių pakeitimus šiuo metu galima atlikti tik <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Vėlesnėse programinės įrangos versijose galėsite atlikti pakeitimus ir <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> bei <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Paspaudę <span style="font-style: italic;">mygtuką</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> grįšite į [1 puslapį](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` nustatymų meniu.

<map name="NavigationToVitalControlSettingsMenu">
    <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='Spustelėkite {{<T "Settings" >}}' href="#Navigation_Digit_1">
    <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='Spustelėkite {{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
    <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='Spustelėkite {{<T "Accessories" >}}' href="#Navigation_Digit_3">
    <area shape="rect" coords="520,150,870,197" alt='Temperature" title="Spustelėkite {{<T "Synchronize" >}}' href="#Navigation_Digit_4">
    <area shape="rect" coords="580,582,850,636" alt='Temperature" title="Spustelėkite {{<T "Synchronize" >}}' href="#Navigation_Digit_5">
</map>

<map name="VitalControlSettingsPage1">
    <area shape="rect" coords="253,45,626,107" alt='{{<T "TAIP" >}}/{{<T "NE" >}}' title='Spustelėkite {{<T "TAIP" >}}/{{<T "NE" >}}' href="#VitalControlSettingsPage1_Digit_1">
    <area shape="rect" coords="11,236,88,316" alt='{{<T "RegistruotiNaująVitalControlĮrenginyje" >}}' title='Spustelėkite {{<T "RegistruotiNaująVitalControlĮrenginyje" >}}' href="#VitalControlSettingsPage1_Digit_2">
    <area shape="rect" coords="11,357,88,434" alt='{{<T "IštrintiIšVitalControl" >}}' title='Spustelėkite {{<T "IštrintiIšVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
    <area shape="rect" coords="31,463,357,508" alt='{{<T "NeištrintiGyvūnųJaunesniųNei" >}}' title='Spustelėkite {{<T "NeištrintiGyvūnųJaunesniųNei" >}}' href="#VitalControlSettingsPage1_Digit_4">
    <area shape="rect" coords="420,236,511,286" alt='{{<T "RegistruotiNaująAutomatiniameŠėrykloje" >}}' title='Spustelėkite {{<T "RegistruotiNaująAutomatiniameŠėrykloje" >}}' href="#VitalControlSettingsPage1_Digit_5">
    <area shape="rect" coords="435,352,837,397" alt='{{<T "ŠėrimoKreivėPriskirtaImportuotiemsGyvūnams" >}}' title='Spustelėkite {{<T "ŠėrimoKreivėPriskirtaImportuotiemsGyvūnams" >}}' href="#VitalControlSettingsPage1_Digit_6">
    <area shape="rect" coords="513,462,837,507" alt='{{<T "NeimportuotiGyvūnųVyresniųNei" >}}' title='Spustelėkite {{<T "NeimportuotiGyvūnųVyresniųNei" >}}' href="#VitalControlSettingsPage1_Digit_7">
    <area shape="rect" coords="142,517,215,616" alt='Puslapis 2' title='Spustelėkite Puslapis 2' href="#VitalControlSettingsPage1_Digit_8">
</map>

<map name="VitalControlSettingsPage2">
    <area shape="rect" coords="5,208,235,248" alt='{{<T "AusiesŽymėsNumeris" >}}' title='Spustelėkite {{<T "AusiesŽymėsNumeris" >}}' href="#VitalControlSettingsPage2_Digit_1">
    <area shape="rect" coords="5,208,235,328" alt='{{<T "GyvūnoNumeris" >}}' title='Spustelėkite {{<T "GyvūnoNumeris" >}}' href="#VitalControlSettingsPage2_Digit_2">
    <area shape="rect" coords="5,368,235,408" alt='{{<T "GimimoData" >}}' title='Spustelėkite {{<T "GimimoData" >}}' href="#VitalControlSettingsPage2_Digit_3">
    <area shape="rect" coords="392,116,455,177" alt='{{<T "Šėrykla" >}}' title='Spustelėkite {{<T "Šėrykla" >}}' href="#VitalControlSettingsPage2_Digit_4">
    <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='Spustelėkite {{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
    <area shape="rect" coords="678,97,775,159" alt='{{<T "NėraPakeitimų_AP" >}}' title='Spustelėkite {{<T "NėraPakeitimų_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
    <area shape="rect" coords="52,510,125,615" alt='Puslapis 1' title='Spustelėkite Puslapis 1' href="#VitalControlSettingsPage2_Digit_8">
</map>
