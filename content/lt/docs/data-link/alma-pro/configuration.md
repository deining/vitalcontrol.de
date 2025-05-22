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
---
Norėdami aktyvuoti ir nustatyti VitalControl įrenginį, atlikite šiuos veiksmus:

## Naršymas į nustatymų meniu `{{<T "VitalControl" >}}`

{{% alert title="Dėmesio" %}}
Norėdami aktyvuoti ir nustatyti {{<T "VitalControl" >}} įrenginį, turite būti prisijungę kaip {{<T "SiteManager" >}} vartotojo rolė automatinėje šėrykloje. Priešingu atveju kai kurie žemiau parodyti ir aprašyti mygtukai jums nebus matomi.
{{% /alert %}}

1. Spustelėkite apatinį mygtuką <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Nustatymų meniu" title="Nustatymai"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> kairėje jutiklinio terminalo šoninėje juostoje. Jei esate pagrindiniame meniu, kur šoninė juosta nematoma, paspauskite mygtuką &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Šėryklos meniu" title="Šėryklos meniu"/>`{{<T "Feeder" >}}`, kad būtų rodoma šoninė juosta.

1. Spustelėkite antrą mygtuką iš kairės <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Jutiklinio terminalo nustatymai" title="Jutikliniai nustatymai"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> apatinėje jutiklinio terminalo įrankių juostoje.

1. Dabar kairėje centrinės ekrano srities pusėje pasirodo meniu elementų serija. Spustelėkite apatinį mygtuką `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Dabar dešinėje centrinės ekrano srities pusėje pasirodo meniu elementas (arba keli). Spustelėkite viršutinį mygtuką `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Mygtukas dabar persijungia į kairę ekrano pusę.

1. Ekrano dešinės pusės apačioje dabar rodomas mygtukas &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Atidaryti VitalControl nustatymus" title="Atidaryti nustatymus" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Spustelėkite šį mygtuką, ir atsidarys iššokantis langas, rodantis [1 puslapį](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` nustatymų meniu.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl nustatymai: Prieiga" title="Prieiga prie VitalControl nustatymų meniu" />
    <figcaption class="figure-caption fs-6">Ekrano nuotrauka 1: Prieiga prie <span style="font-style: italic;">{{<T "VitalControl" >}}</span> nustatymų meniu</figcaption>
</figure>

`{{<T "VitalControl" >}}` nustatymų meniu yra padalintas į du puslapius:

## `{{<T "VitalControl" >}}` Nustatymų Meniu - 1 puslapis {#settings-menu-vitalcontrol-page-1}

1 puslapis iš <span style="font-style: italic;">{{<T "VitalControl" >}}</span> nustatymų meniu pateikiamas taip:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl nustatymų meniu: 1 puslapis" title="VitalControl nustatymai (1)" />
    <figcaption class="figure-caption fs-6">Ekrano nuotrauka 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> nustatymų meniu, 1 puslapis</figcaption>
</figure>

Šiame puslapyje galite atlikti šiuos veiksmus ir nustatymus.

### {{<T "VitalControl" >}} Įrenginio Aktyvavimas {#activation-vitalcontrol}

Pagal numatytąją mašinos būseną, {{<T "VitalControl" >}} yra išjungtas. Nustatykite <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> jungiklį <span style="font-size: 140%">➀</span> į dešinę poziciją <span style="font-style: italic;">{{<T "YES" >}}</span>, kad aktyvuotumėte {{<T "VitalControl" >}} įrenginį. Vėliau, dešinėje šoninės juostos dalyje, po prijungtos mašinos (-ų) piktograma (-omis), bus rodoma piktograma <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl įrenginys" title="VitalControl"/> `{{<T "VitalControl" >}}` įrenginiui (žr. Ekrano nuotrauką <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Feeder Meniu</a></span>, figūra <span style="font-size: 140%">➁</span> ten).

### Sinchronizacija automatinio šėryklos <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Kairėje ekrano pusėje yra du žymės langeliai:

* Žymės langelis <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Ši parinktis kontroliuoja elgesį, kai sinchronizacijos metu šėrykloje yra gyvūnų, kurie dar nėra žinomi {{<T "VitalControl" >}} įrenginiui. Ši parinktis yra įjungta pagal numatytuosius nustatymus ir paprastai turėtų likti nustatyta. Jei registruojate savo įsigytus gyvūnus skenuodami jų gyvūnų pasus, ši parinktis turi būti išjungta.

    <span style="font-weight: bold">Įjungti</span> šią parinktį:

    - jei turite visiškai naują {{<T "VitalControl" >}} priešais save, į kurį norite perkelti visus gyvūnus iš šėryklos. Po sinchronizacijos visi šėrykloje žinomi gyvūnai taip pat bus {{<T "VitalControl" >}}.
    - jei nuolat atnešate naujus veršelius į šėryklą vykdant veiklą. Šie gyvūnai taip pat bus sukurti {{<T "VitalControl" >}} įrenginyje sinchronizacijos metu.

    <span style="font-weight: bold">Išjungti</span> šią parinktį:

    - jei turite naujai sukurtus gyvūnus savo {{<T "VitalControl" >}} skenuodami jų gyvūnų pasus, kur
    - šiems gyvūnams dar nebuvo priskirtas transponderis ir
    - šie gyvūnai jau yra šeriami šėrykloje ir todėl yra ten registruoti.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
                Jei parinktis lieka nustatyta aukščiau pateiktoje konfigūracijoje, po sinchronizacijos gyvūnai bus dvigubai {{<T "VitalControl" >}}.
            </div>
        </div>

* Žymimasis langelis <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

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
            Jei ši parinktis yra aktyvuota ir žymimasis langelis <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> taip pat yra aktyvuotas, nebus ištrinti gyvūnai, kurie yra jaunesni nei nurodyta skaičiaus lauke <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Išjunkite</span> šią parinktį:
    - jei norite toliau rinkti duomenis apie gyvūnus po pieno laikotarpio, pavyzdžiui, svėrimo metu,
    - jei esate pasirengę patys rankiniu būdu ištrinti gyvūnus iš {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
        Jei išjungsite šią parinktį, turite atjungti transponderį nuo atjunkytų gyvūnų {{<T "VitalControl" >}} įrenginyje ne vėliau kaip tada, kai antkaklis pašalinamas nuo atjunkytos veršelio ir uždedamas kitam, jaunesniam veršeliui. Jei transponderis nebus pašalintas, jaunesnio gyvūno duomenys - kuris dabar dėvi buvusį atjunkyto gyvūno antkaklį - bus neteisingai pridedami prie atjunkytų gyvūnų duomenų rinkinio.
    </div>
</div>

### Sinchronizacija {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automatinis šėryklos aparatas

Dešinėje ekrano pusėje yra žymimasis langelis ir du įvesties laukai:

* Žymimasis langelis <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Ši parinktis kontroliuoja, ar gyvūnai, esantys {{<T "VitalControl" >}}, kurie nėra žinomi šėryklos aparatui, bus sukurti šėryklos aparate per kitą sinchronizaciją. Pagal numatytuosius nustatymus ši parinktis nėra aktyvuota.

    <span style="font-weight: bold">Deaktyvuokite</span> šią parinktį arba palikite ją deaktyvuotą:

    - jei naudojate savo {{<T "VitalControl" >}} įrenginį keliuose šėryklose vienu metu,
    - jei tiesiogiai atvedate savo gyvūnus į šėryklos aparatą, neregistruodami jų per {{<T "VitalControl" >}} įrenginį pirmiausia. Jūsų gyvūnai bus automatiškai sukurti registracijos metu, kai jie pirmą kartą bus šeriami šėryklos aparate.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
            Jei {{<T "VitalControl" >}} naudojamas keliuose įrenginiuose ir ši parinktis yra pažymėta, gyvūnai bus netyčia perkelti iš vieno įrenginio į kitą sinchronizacijos metu.
        </div>
    </div>

<span style="font-weight: bold">Aktyvuokite</span> šią parinktį:

- jei pirminė naujagimių gyvūnų registracija su {{<T "VitalControl" >}} vyksta prieš pirmąjį šėrimą šėrykloje.
- jei registruojate įsigytus gyvūnus nuskaitydami jų gyvūnų pasus su {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
        Aktyvuokite šią parinktį tik jei naudojate {{<T "VitalControl" >}} viename įrenginyje! Jei norite atlikti sinchronizaciją su keliais įrenginiais, kai ši parinktis nustatyta, turite naudoti atskirą {{<T "VitalControl" >}} įrenginį kiekvienam įrenginiui.
    </div>
</div>

* Išskleidžiamasis meniu <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Šiame išskleidžiamajame meniu galite pasirinkti šėrimo kreivę, kuri priskiriama gyvūnams, kurie naujai sukurti šėrykloje sinchronizacijos metu.

* Skaitmeninis įvesties laukas<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Šiame skaitmeniniame lauke galite nurodyti minimalų amžių (dienomis), nuo kurio gyvūnai naujai sukuriami šėrykloje sinchronizacijos metu. Gyvūnai, kurie yra jaunesni nei nurodytas minimalus amžius, **nėra** kuriami sinchronizacijos metu.

Paspauskite mygtuką <span style="font-size: 140%">⑧</span> norėdami pereiti į [2 puslapį](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">nustatymų meniu {{<T "VitalControl" >}}</span>.

## Nustatymų meniu `{{<T "VitalControl" >}}` - 2 puslapis {#settings-menu-vitalcontrol-page-2}

### Kaip spręsti duomenų konfliktus sinchronizacijos metu

Duomenų konfliktai gali kilti sinchronizuojant duomenis tarp šėryklos ir {{<T "VitalControl" >}} įrenginio. Duomenų konfliktas atsiranda, kai duomenys prieštarauja vieni kitiems {{<T "VitalControl" >}} įrenginyje ir šėrykloje (pvz., dėl <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Šiame 2 nustatymų meniu puslapyje galite nurodyti, ar ir kaip duomenų konfliktai bus sprendžiami sinchronizacijos metu. Čia yra trys pasirinkimai:

* Pirmenybė teikiama šėryklos duomenims, {{<T "VitalControl" >}} įrenginio duomenys yra perrašomi šėryklos duomenimis.\
  Aktyvuokite šią parinktį pasirinkdami radijo mygtuką kairėje stulpelio pusėje po šėryklos simboliu <span style="font-size: 140%">➃</span>.

* Pirmenybė teikiama {{<T "VitalControl" >}} duomenims, šėryklos duomenys yra perrašomi {{<T "VitalControl" >}} įrenginio duomenimis.\
  Aktyvuokite šią parinktį pasirinkdami radijo mygtuką kairėje stulpelio pusėje po {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Jokių pakeitimų nėra daroma, tiek šėryklos, tiek {{<T "VitalControl" >}} įrenginio duomenys lieka nepakitę.\
  Aktyvuokite šią parinktį pasirinkdami radijo mygtuką dešinėje stulpelio pusėje <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pavyzdys</span><br>
            Po to, kai įsigijote veršelių partiją, registruojate savo įsigytus gyvūnus {{<T "VitalControl" >}} nuskaitydami visus jų gyvūnų pasus. Gyvūnų numeriai šiems gyvūnams {{<T "VitalControl" >}} yra – priklausomai nuo <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">įrenginio nustatymų</a> – paskutiniai 3-5 gyvūno paso skaitmenys. Tada uždedate antkaklius su Urban transponderiais naujai įsigytiems gyvūnams ir šeriate juos automatinėje šėrykloje. Per pirmąjį apsilankymą stotyje gyvūnai registruojami naudojant jų transponderį ir naujai sukuriami šėrykloje. Tačiau gyvūnų numeriai šiems naujiems gyvūnams šėrykloje yra gaunami iš transponderio numerio arba atitinka gyvūno numerį, saugomą šiam transponderiui šėrykloje. Tai reiškia, kad skirtingas gyvūno numeris dabar buvo priskirtas tam pačiam gyvūnui {{<T "VitalControl" >}} įrenginyje ir šėrykloje, sukeliant duomenų konfliktą. Naudodami radijo mygtukus <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, dabar galite nurodyti nustatymų meniu, kuris iš dviejų lygiagrečių gyvūnų numerių turi pirmenybę ir kuris bus ištrintas sinchronizacijos metu.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Nustatymų meniu VitalControl: 2 puslapis" title="Nustatymai VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Ekrano kopija 3: Nustatymų meniu <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, 2 puslapis</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Įspėjimas:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
        Dėl vidinių priežasčių pakeitimus šiuo metu galima atlikti tik <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Vėlesnėse programinės įrangos versijose galėsite atlikti pakeitimus ir <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> bei <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Paspaudę <span style="font-style: italic;">mygtuką</span> <span style="font-size: 140%">⑧</span>, grįšite į [1 puslapį](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` nustatymų meniu.
