---
title: Enkratna aktivacija in konfiguracija naprave v nastavitvah samodejnega podajalnika
linkTitle: Konfiguracija
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Pred prvo uporabo VitalControl morate napravo enkrat aktivirati in pravilno konfigurirati v nastavitvah podajalnika Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/sl
---
## Zahteve

Priporočamo uporabo različice vdelane programske opreme <span style="font-weight: bold">24-xx-xx</span> ali višje z napravo VitalControl.\
Za preverjanje, katera različica vdelane programske opreme je nameščena na vaši napravi:

* Pomaknite se na domačo stran podajalnika s klikom na zgornji gumb `Domov` <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Ikona domačega zaslona" title="Alma Pro: Domači zaslon"/>&nbsp; v navigacijski vrstici na levi strani zaslona.
* Na domačem zaslonu kliknite gumb `Pomoč` <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Ikona menija pomoči" title="Alma Pro: Zaslon pomoči"/>&nbsp; v zgornjem desnem delu zaslona.
* Številka različice <span style="font-size: 140%">➂</span> je zdaj prikazana levo od gumba za preklop jezika.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: preverjanje različice vdelane programske opreme" title="Alma Pro: preverjanje različice vdelane programske opreme" />
    <figcaption class="figure-caption fs-6">Posnetek zaslona 1: <span style="font-style: italic;">Alma Pro: preverjanje različice vdelane programske opreme</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Opozorilo:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Če je različica vdelane programske opreme vašega podajalnika nižja od <span style="font-weight: bold">24-xx-xx</span>, lahko pride do neskladij med spodnjimi posnetki zaslona in prikazom na vašem zaslonu na dotik, zato morda ne boste mogli slediti navodilom. V tem primeru se obrnite na svojega servisnega tehnika za posodobitev vdelane programske opreme na vašem podajalniku.<br>
    </div>
</div>

## Navigacija do menija nastavitev `{{% T "VitalControl" %}}`

{{% alert title="Pozor" %}}
Za aktivacijo in nastavitev naprave {{<T "VitalControl" >}}, morate biti prijavljeni kot uporabnik z vlogo {{<T "SiteManager" >}} na avtomatskem podajalniku. V nasprotnem primeru nekateri gumbi, prikazani in opisani spodaj, ne bodo vidni.
{{% /alert %}}

1. Kliknite na spodnji gumb <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Meni nastavitev" title="Nastavitve"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> v levi stranski vrstici na dotik terminala. Če ste v glavnem meniju, kjer stranska vrstica ni vidna, pritisnite gumb &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Meni podajalnika" title="Meni podajalnika"/>`{{<T "Feeder" >}}`, da prikažete stransko vrstico.

1. Kliknite na drugi gumb z leve <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Nastavitve dotik terminala" title="Nastavitve dotika"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> v spodnji orodni vrstici dotik terminala.

1. Na levi polovici osrednjega zaslona se zdaj prikaže vrsta menijskih elementov. Kliknite na spodnji gumb `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Na desni polovici osrednjega zaslona se zdaj prikaže menijski element (ali morda več njih). Kliknite na zgornji gumb `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Gumb se zdaj premakne na levo polovico zaslona.

1. Na dnu desne strani zaslona se zdaj prikaže gumb &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Odpri nastavitve VitalControl" title="Odpri nastavitve" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Kliknite ta gumb, in odprlo se bo pojavno okno, ki prikazuje [Stran 1](#settings-menu-vitalcontrol-page-1) menija nastavitev `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="Nastavitve VitalControl: Dostop"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Dostop do menija nastavitev VitalControl" />
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
    Posnetek zaslona 2: Dostop do menija nastavitev <span style="font-style: italic;">{{<T "VitalControl" >}}</span>
</figcaption>

Meni nastavitev `{{<T "VitalControl" >}}` je razdeljen na dve strani:

## Meni nastavitev `{{% T "VitalControl" %}}` - Stran 1 {#settings-menu-vitalcontrol-page-1}

Stran 1 menija nastavitev <span style="font-style: italic;">{{<T "VitalControl" >}}</span> je predstavljena takole:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="Meni nastavitev VitalControl: Stran 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Nastavitve VitalControl (1)" />
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
    Posnetek zaslona 3: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> meni nastavitev, Stran 1
</figcaption>

Na tej strani lahko izvedete naslednja dejanja in nastavitve.

### Aktivacija naprave {{% T "VitalControl" %}} {#activation-vitalcontrol}

V privzetem stanju naprave je {{<T "VitalControl" >}} deaktiviran. Nastavite stikalo <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> v desni položaj <span style="font-style: italic;">{{<T "YES" >}}</span> za aktivacijo naprave {{<T "VitalControl" >}}. Nato bo v desni stranski vrstici menija podajalnika, pod ikono/ikone za povezano napravo/naprave, prikazana ikona <img src="/icons/device.svg" width="20" align="bottom" alt="Naprava VitalControl" title="VitalControl"/> za napravo `{{<T "VitalControl" >}}` (glejte Posnetek zaslona <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Meni podajalnika</a></span>, slika <span style="font-size: 140%">➁</span> tam).

### Sinhronizacija samodejnega podajalnika <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Na levi strani zaslona sta dve potrditveni polji:

* Potrditveno polje <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Ta možnost nadzoruje vedenje v primeru, da so na krmilniku med sinhronizacijo prisotne živali, ki še niso znane napravi {{<T "VitalControl" >}}. Ta možnost je privzeto omogočena in naj bi na splošno ostala nastavljena. Če registrirate svoje kupljene živali s skeniranjem njihovih živalskih potnih listov, je treba to možnost onemogočiti.

<span style="font-weight: bold">Omogočite</span> to možnost:

- če imate pred seboj povsem nov {{<T "VitalControl" >}}, na katerega želite prenesti vse živali s krmilnika. Po sinhronizaciji bodo vse živali, znane krmilniku, prisotne tudi na {{<T "VitalControl" >}}.
- če med tekočimi operacijami nenehno prinašate nove teleta na krmilnik. Te živali bodo nato ustvarjene tudi na napravi {{<T "VitalControl" >}} med sinhronizacijo.

<span style="font-weight: bold">Onemogočite</span> to možnost:

- če imate na svojem {{<T "VitalControl" >}} na novo ustvarjene živali s skeniranjem njihovih živalskih potnih listov, kjer
- te živali še niso bile dodeljene transponderju in
- te živali se že hranijo na krmilniku in so zato tam registrirane.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Če možnost ostane nastavljena v zgornji konfiguraciji, bodo živali po sinhronizaciji prisotne dvakrat na {{<T "VitalControl" >}}.
    </div>
</div>

* Potrditveno polje <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Ta možnost nadzoruje, ali se živali, ki so prisotne samo na {{<T "VitalControl" >}}, vendar ne na hranilniku, izbrišejo iz {{<T "VitalControl" >}} med naslednjo sinhronizacijo. Če uporabljate {{<T "VitalControl" >}} samo med obdobjem mleka živali, bi morala biti ta možnost omogočena. Če želite slediti živalim tudi po obdobju mleka, morate to možnost onemogočiti.

<span style="font-weight: bold">Omogočite</span> to možnost:

- če zbirate podatke za živali samo med obdobjem mleka,
- če želite, da se živali izbrišejo iz {{<T "VitalControl" >}} med naslednjo sinhronizacijo, potem ko so bile izbrisane iz hranilnika. Na ta način se živali sčasoma ne kopičijo na {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Če je ta možnost aktivirana in je potrditveno polje <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> prav tako aktivirano, se ne bodo izbrisale živali, ki so mlajše od določene starosti v številčnem polju <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Onemogočite</span> to možnost:
- če želite nadaljevati z zbiranjem podatkov za živali po obdobju mleka, na primer med tehtanjem,
- če ste pripravljeni sami ročno izbrisati živali iz {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Če onemogočite to možnost, morate odstraniti transponder za odstavljene živali na napravi {{<T "VitalControl" >}} najkasneje, ko se ovratnica odstrani iz odstavljene teleta na drugo, mlajšo tele. Če transponder ni odstranjen, se podatki mlajše živali - ki zdaj nosi nekdanjo ovratnico odstavljene živali - nepravilno dodajo v podatkovni niz odstavljene živali.
    </div>
</div>

### Sinhronizacija {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Samodejni hranilnik

Na desni strani zaslona je potrditveno polje in dve vnosni polji:

* Potrditveno polje <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Ta možnost nadzoruje, ali bodo živali, ki so prisotne na {{<T "VitalControl" >}}, ki niso znane hranilniku, ustvarjene na hranilniku med naslednjo sinhronizacijo. Privzeto ta možnost ni aktivirana.

    <span style="font-weight: bold">Deaktivirajte</span> to možnost ali jo pustite deaktivirano:

    - če uporabljate svojo napravo {{<T "VitalControl" >}} na več hranilnikih hkrati,
    - če svoje živali pripeljete neposredno do hranilnika, ne da bi jih najprej registrirali prek naprave {{<T "VitalControl" >}}. Vaše živali bodo nato samodejno ustvarjene med registracijo, ko bodo prvič hranjene na hranilniku.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Če se {{<T "VitalControl" >}} uporablja na več napravah in je ta možnost označena, bodo živali nenamerno prenesene z ene naprave na drugo med sinhronizacijo.
    </div>
</div>

<span style="font-weight: bold">Aktivirajte</span> to možnost:

- če se začetna registracija njihovih novorojenih živali z {{<T "VitalControl" >}} izvede pred prvim hranjenjem na hranilniku.
- če beležite svoje kupljene živali s skeniranjem njihovih živalskih potnih listov na {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Aktivirajte to možnost samo, če uporabljate {{<T "VitalControl" >}} na eni napravi! Če želite izvesti sinhronizacijo z več napravami s to nastavitvijo, morate uporabiti ločeno napravo {{<T "VitalControl" >}} za vsako napravo.
    </div>
</div>


* Spustni meni <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   V tem spustnem meniju lahko izberete krivuljo hranjenja, ki je dodeljena živalim, ki so na novo ustvarjene na hranilniku med sinhronizacijo.

* Polje za vnos številk<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    V tem številčnem polju lahko določite minimalno starost (v dneh), od katere so živali na novo ustvarjene na hranilniku med sinhronizacijo. Živali, ki so mlajše od določene minimalne starosti, **niso** ustvarjene med sinhronizacijo.

Pritisnite gumb <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> za preklop na [stran 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">menija nastavitev {{<T "VitalControl" >}}</span>.

## Meni nastavitev `{{% T "VitalControl" %}}` - Stran 2 {#settings-menu-vitalcontrol-page-2}

### Kako ravnati s podatkovnimi konflikti med sinhronizacijo

Podatkovni konflikti se lahko pojavijo pri sinhronizaciji podatkov med hranilnikom in napravo {{<T "VitalControl" >}}. Podatkovni konflikt se pojavi, ko si podatki nasprotujejo na napravi {{<T "VitalControl" >}} in na hranilniku (npr. glede <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Na tej strani 2 menija nastavitev lahko določite, ali in kako se podatkovni konflikti rešujejo med sinhronizacijo. Tukaj so tri možnosti:

* Prednost imajo podatki hranilnika, podatki na napravi {{<T "VitalControl" >}} so prepisani s tistimi iz hranilnika\.
  To možnost aktivirate z izbiro radijskega gumba v levi koloni pod simbolom hranilnika <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Prednost imajo podatki {{<T "VitalControl" >}}, podatki na hranilniku so prepisani s tistimi iz naprave {{<T "VitalControl" >}}\.
  To možnost aktivirate z izbiro radijskega gumba v levi koloni pod {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* Nobene spremembe niso narejene, tako podatki podajalnika kot podatki naprave {{<T "VitalControl" >}} ostanejo nespremenjeni. To možnost aktivirate z izbiro radijskega gumba v desnem stolpcu <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Primer</span><br>
            Po nakupu serije telet registrirate kupljene živali na {{<T "VitalControl" >}} s skeniranjem vseh njihovih živalskih potnih listov. Številke živali za te živali na {{<T "VitalControl" >}} so nato – odvisno od <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">nastavitev naprave</a> – zadnje 3-5 številke živalskega potnega lista. Nato na novo kupljene živali opremite z ovratnicami z Urban transponderji in jih hranite na avtomatskem podajalniku. Med prvim obiskom postaje so živali registrirane z uporabo njihovega transponderja in na novo ustvarjene na podajalniku. Vendar pa so številke živali za te nove živali na podajalniku izpeljane iz številke transponderja ali ustrezajo številki živali, shranjeni za ta transponder v podajalniku. To pomeni, da je zdaj isti živali dodeljena drugačna številka živali na napravi {{<T "VitalControl" >}} in na podajalniku, kar povzroči konflikt podatkov. Z uporabo radijskih gumbov za <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span> lahko zdaj v meniju nastavitev določite, katera od dveh vzporednih številk živali ima prednost in katera bo izbrisana med sinhronizacijo.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Meni nastavitev VitalControl: Stran 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Nastavitve VitalControl (2)" />
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
    Posnetek zaslona 4: Meni nastavitev <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Stran 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Zaradi notranjih razlogov je trenutno mogoče spreminjati le <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. V kasnejših različicah vdelane programske opreme boste lahko spreminjali tudi <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> in <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

S pritiskom na <span style="font-style: italic;">gumb</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> se boste vrnili na [stran 1](#settings-menu-vitalcontrol-page-1) menija nastavitev `{{<T "VitalControl" >}}`.
