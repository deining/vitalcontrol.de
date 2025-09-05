---
title: Jednokratna aktivacija i konfiguracija uređaja u postavkama automatskog hranilice
linkTitle: Konfiguracija
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Prije prve upotrebe VitalControl-a, morate ga aktivirati i pravilno konfigurirati u postavkama Alma Pro hranilice.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/hr
---
## Zahtjevi

Preporučujemo korištenje verzije firmvera <span style="font-weight: bold">24-xx-xx</span> ili novije s uređajem VitalControl.\
Da biste provjerili koja je verzija firmvera instalirana na vašem uređaju:

* Idite na početnu stranicu hranilice klikom na gumb `Početna` na vrhu <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Ikona početnog zaslona" title="Alma Pro: Početni zaslon"/>&nbsp; u navigacijskoj traci na lijevoj strani zaslona.
* Na početnom zaslonu kliknite gumb `Pomoć` <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Ikona izbornika pomoći" title="Alma Pro: Zaslon pomoći"/>&nbsp; u gornjem desnom dijelu zaslona.
* Broj verzije <span style="font-size: 140%">➂</span> sada je prikazan lijevo od gumba za promjenu jezika.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: provjera verzije firmvera" title="Alma Pro: provjera verzije firmvera" />
    <figcaption class="figure-caption fs-6">Snimka zaslona 1: <span style="font-style: italic;">Alma Pro: provjera verzije firmvera</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako je verzija firmvera vaše hranilice niža od <span style="font-weight: bold">24-xx-xx</span>, mogu postojati razlike između snimaka zaslona u nastavku i prikaza na vašem zaslonu osjetljivom na dodir, tako da možda nećete moći slijediti upute. U tom slučaju, obratite se svom serviseru kako biste ažurirali firmver na vašoj hranilici.<br>
    </div>
</div>

## Navigacija do izbornika postavki `{{% T "VitalControl" %}}`

{{% alert title="Pažnja" %}}
Da biste aktivirali i postavili uređaj {{<T "VitalControl" >}}, morate biti prijavljeni kao korisnička uloga {{<T "SiteManager" >}} na automatskom hranilici. Inače, neki od gumba prikazanih i opisanih u nastavku neće vam biti vidljivi.
{{% /alert %}}

1. Kliknite na donji gumb <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Izbornik postavki" title="Postavke"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> u lijevom bočnom izborniku dodirnog terminala. Ako ste u glavnom izborniku gdje bočni izbornik nije vidljiv, pritisnite gumb &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Izbornik hranilice" title="Izbornik hranilice"/>`{{<T "Feeder" >}}`da biste prikazali bočni izbornik.

1. Kliknite na drugi gumb s lijeve strane <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Postavke dodirnog terminala" title="Postavke dodira"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> u donjoj alatnoj traci dodirnog terminala.

1. Sada se na lijevoj polovici središnjeg zaslona pojavljuje niz stavki izbornika. Kliknite na donji gumb `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Sada se na desnoj polovici središnjeg zaslona pojavljuje stavka izbornika (ili možda nekoliko njih). Kliknite na gornji gumb `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Gumb se sada prebacuje na lijevu polovicu zaslona.

1. Na dnu desne strane zaslona sada se prikazuje gumb &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Otvori postavke VitalControl" title="Otvori postavke" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Kliknite ovaj gumb i otvorit će se skočni prozor koji prikazuje [Stranicu 1](#settings-menu-vitalcontrol-page-1) izbornika postavki `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="Postavke VitalControl: Pristup"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Pristup izborniku postavki VitalControl" />
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
    Snimka zaslona 2: Pristup izborniku postavki <span style="font-style: italic;">{{<T "VitalControl" >}}
</figcaption>

Izbornik postavki `{{<T "VitalControl" >}}` raspoređen je na dvije stranice:

## Izbornik postavki `{{% T "VitalControl" %}}` - Stranica 1 {#settings-menu-vitalcontrol-page-1}

Stranica 1 izbornika postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span> prikazana je na sljedeći način:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="Izbornik postavki VitalControl: Stranica 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Postavke VitalControl (1)" />
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
    Snimka zaslona 3: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> izbornik postavki, Stranica 1
</figcaption>

Na ovoj stranici možete izvršiti sljedeće radnje i postavke.

### Aktivacija uređaja {{% T "VitalControl" %}} {#activation-vitalcontrol}

U zadanim postavkama stroja, {{<T "VitalControl" >}} je deaktiviran. Postavite prekidač <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> u desni položaj <span style="font-style: italic;">{{<T "YES" >}}</span> kako biste aktivirali uređaj {{<T "VitalControl" >}}. Nakon toga, u desnoj bočnoj traci izbornika za hranjenje, ispod ikone(a) za povezani stroj(eve), prikazat će se ikona <img src="/icons/device.svg" width="20" align="bottom" alt="Uređaj VitalControl" title="VitalControl"/> za uređaj `{{<T "VitalControl" >}}` (pogledajte Snimku zaslona <span style="font-style: italic;"><a href="../synchronisation#figure3_synchronize_vitalcontrol_alma_pro">Izbornik za hranjenje</a></span>, slika <span style="font-size: 140%">➂</span> tamo).

### Sinkronizacija automatskog hranitelja <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Na lijevoj strani zaslona nalaze se dvije potvrdne kućice:

* Potvrdna kućica <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Ova opcija kontrolira ponašanje u slučaju da su životinje prisutne na hranilici tijekom sinkronizacije, a koje još nisu poznate uređaju {{<T "VitalControl" >}}. Ova opcija je prema zadanim postavkama omogućena i općenito bi trebala ostati postavljena. Ako registrirate svoje kupljene životinje skeniranjem njihovih životinjskih putovnica, ovu opciju morate onemogućiti.

<span style="font-weight: bold">Omogućite</span> ovu opciju:

- ako imate potpuno novi {{<T "VitalControl" >}} ispred sebe, na koji želite prenijeti sve životinje s hranilice. Nakon sinkronizacije, sve životinje poznate hranilici bit će također prisutne na {{<T "VitalControl" >}}.
- ako kontinuirano dovodite nove teladi na hranilicu tijekom tekućih operacija. Te će se životinje tada također kreirati na uređaju {{<T "VitalControl" >}} tijekom sinkronizacije.

<span style="font-weight: bold">Onemogućite</span> ovu opciju:

- ako ste novostvorene životinje na vašem {{<T "VitalControl" >}} registrirali skeniranjem njihovih životinjskih putovnica, gdje
- te životinje još nisu dodijeljene transponderu i
- te se životinje već hrane na hranilici i stoga su tamo registrirane.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako opcija ostane postavljena u gornjoj konfiguraciji, životinje će biti prisutne dvaput na {{<T "VitalControl" >}} nakon sinkronizacije.
    </div>
</div>

* Potvrdni okvir <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Ova opcija kontrolira hoće li se životinje koje su prisutne samo na {{<T "VitalControl" >}}, ali ne i na hranilici, izbrisati s {{<T "VitalControl" >}} tijekom sljedeće sinkronizacije. Ako koristite {{<T "VitalControl" >}} samo tijekom mliječnog razdoblja životinja, ovu opciju treba omogućiti. Ako želite pratiti životinje i nakon mliječnog razdoblja, morate onemogućiti ovu opciju.

<span style="font-weight: bold">Omogućite</span> ovu opciju:

- ako prikupljate podatke za životinje samo tijekom mliječnog razdoblja,
- ako želite da se životinje izbrišu s {{<T "VitalControl" >}} tijekom sljedeće sinkronizacije nakon što su izbrisane s hranilice. Na taj način, životinje se ne nakupljaju na {{<T "VitalControl" >}} tijekom vremena.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako je ova opcija aktivirana i potvrdni okvir <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> također je aktiviran, nijedna životinja neće biti izbrisana koja je mlađa od specificirane u polju za broj <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Onemogućite</span> ovu opciju:
- ako želite nastaviti prikupljati podatke za životinje nakon mliječnog razdoblja, na primjer, tijekom vaganja,
- ako ste spremni ručno izbrisati životinje s {{<T "VitalControl" >}} sami.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako onemogućite ovu opciju, morate odspojiti transponder za odbijenu telad na uređaju {{<T "VitalControl" >}} najkasnije kada se ogrlica ukloni s odbijene teladi na drugu, mlađu telad. Ako transponder nije uklonjen, zapisi podataka mlađe životinje - koja sada nosi bivšu ogrlicu odbijene životinje - pogrešno se dodaju u skup podataka odbijene životinje.
    </div>
</div>

### Sinkronizacija {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Automatska hranilica

Na desnoj strani ekrana nalazi se potvrdni okvir i dva ulazna polja:

* Potvrdni okvir <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Ova opcija kontrolira hoće li se životinje prisutne na {{<T "VitalControl" >}}, koje su nepoznate hranilici, stvoriti na hranilici tijekom sljedeće sinkronizacije. Po defaultu, ova opcija nije aktivirana.

    <span style="font-weight: bold">Deaktivirajte</span> ovu opciju ili je ostavite deaktiviranom:

    - ako koristite svoj uređaj {{<T "VitalControl" >}} na više hranilica istovremeno,
    - ako svoje životinje dovodite izravno na hranilicu bez prethodnog registriranja putem uređaja {{<T "VitalControl" >}}. Vaše životinje će tada biti automatski stvorene tijekom registracije kada se prvi put hrane na hranilici.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako se {{<T "VitalControl" >}} koristi na više strojeva i ova opcija je označena, životinje će biti nenamjerno prenesene s jednog stroja na drugi tijekom sinkronizacije.
    </div>
</div>

<span style="font-weight: bold">Aktivirajte</span> ovu opciju:

- ako se početna registracija njihovih novorođenih životinja s {{<T "VitalControl" >}} odvija prije prvog hranjenja na hranilici.
- ako bilježite svoje kupljene životinje skeniranjem njihovih životinjskih putovnica na {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Aktivirajte ovu opciju samo ako koristite {{<T "VitalControl" >}} na jednom stroju! Ako želite izvršiti sinkronizaciju s više strojeva s ovom postavkom, morate koristiti zaseban {{<T "VitalControl" >}} uređaj za svaki stroj.
    </div>
</div>

* Padajući izbornik <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   U ovom padajućem izborniku možete odabrati krivulju hranjenja koja je dodijeljena životinjama koje su novostvorene na hranilici tijekom sinkronizacije.

* Numeričko polje za unos<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    U ovom numeričkom polju možete odrediti minimalnu starost (u danima) od koje se životinje novostvaraju na hranilici tijekom sinkronizacije. Životinje koje su mlađe od specificirane minimalne starosti **nisu** stvorene tijekom sinkronizacije.

Pritisnite gumb <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> za prelazak na [stranicu 2](#settings-menu-vitalcontrol-page-2) izbornika <span style="font-style: italic;">postavki {{<T "VitalControl" >}}</span>.

## Izbornik postavki `{{% T "VitalControl" %}}` - Stranica 2 {#settings-menu-vitalcontrol-page-2}

### Kako se nositi s konfliktima podataka tijekom sinkronizacije

Konflikti podataka mogu se pojaviti prilikom sinkronizacije podataka između hranilice i uređaja {{<T "VitalControl" >}}. Konflikt podataka nastaje kada se podaci međusobno proturječe na uređaju {{<T "VitalControl" >}} i na hranilici (npr. u vezi s <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Na ovoj stranici 2 izbornika postavki možete odrediti hoće li i kako će se konflikti podataka riješiti tijekom sinkronizacije. Ovdje postoje tri opcije:

* Prioritet se daje podacima hranilice, podaci na uređaju {{<T "VitalControl" >}} prepisuju se s onima s hranilice\.
  Aktivirajte ovu opciju odabirom radio gumba u lijevom stupcu ispod simbola hranilice <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Prioritet se daje podacima {{<T "VitalControl" >}}, podaci na hranilici prepisuju se s onima s uređaja {{<T "VitalControl" >}}\.
  Aktivirajte ovu opciju odabirom radio gumba u lijevom stupcu ispod {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.


* Nema promjena, podaci o hranilici i podaci uređaja {{<T "VitalControl" >}} ostaju nepromijenjeni.\
  Aktivirajte ovu opciju odabirom radio gumba u desnom stupcu <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Primjer</span><br>
            Nakon što ste kupili seriju teladi, registrirate svoje kupljene životinje na {{<T "VitalControl" >}} skeniranjem svih njihovih životinjskih putovnica. Brojevi životinja za ove životinje na {{<T "VitalControl" >}} su tada – ovisno o <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">postavkama uređaja</a> – posljednje 3-5 znamenke putovnice životinje. Zatim stavljate ogrlice s Urban transponderima na novokupljene životinje i hranite ih na automatskoj hranilici. Tijekom prvog posjeta stanici, životinje se registriraju pomoću svog transpondera i novostvorene su na hranilici. Međutim, brojevi životinja za ove nove životinje na hranilici izvedeni su iz broja transpondera ili odgovaraju broju životinje pohranjenom za ovaj transponder u hranilici. To znači da je sada dodijeljen drugačiji broj životinje istoj životinji na uređaju {{<T "VitalControl" >}} i na hranilici, što rezultira sukobom podataka. Korištenjem radio gumba za <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, sada možete odrediti u izborniku postavki koji od dva paralelna broja životinja ima prioritet i koji će biti izbrisan tijekom sinkronizacije.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Izbornik postavki VitalControl: Stranica 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Postavke VitalControl (2)" />
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
    Snimka zaslona 4: Izbornik postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Stranica 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Iz unutarnjih razloga, promjene se trenutno mogu napraviti samo na <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. U kasnijim verzijama firmvera, također možete napraviti promjene na <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> i <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Pritiskom na <span style="font-style: italic;">gumb</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> vratit ćete se na [stranicu 1](#settings-menu-vitalcontrol-page-1) izbornika postavki `{{<T "VitalControl" >}}`.
