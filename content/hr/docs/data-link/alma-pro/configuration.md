---
title: Jednokratna aktivacija i konfiguracija uređaja u postavkama automatskog hranilice
linkTitle: Konfiguracija
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Prije prve upotrebe VitalControla, morate ga aktivirati i pravilno konfigurirati u postavkama Alma Pro hranilice.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Za aktivaciju i postavljanje uređaja VitalControl, postupite na sljedeći način:

## Navigacija do izbornika postavki `{{<T "VitalControl" >}}`

{{% alert title="Pažnja" %}}
Za aktivaciju i postavljanje uređaja {{<T "VitalControl" >}}, morate biti prijavljeni kao korisnička uloga {{<T "SiteManager" >}} na automatskoj hranilici. U suprotnom, neki od gumba prikazanih i opisanih u nastavku neće vam biti vidljivi.
{{% /alert %}}

1. Kliknite na donji gumb <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Izbornik postavki" title="Postavke"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> u lijevoj bočnoj traci dodirnog terminala. Ako ste u glavnom izborniku gdje bočna traka nije vidljiva, pritisnite gumb &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Izbornik hranilice" title="Izbornik hranilice"/>`{{<T "Feeder" >}}`da biste prikazali bočnu traku.

1. Kliknite na drugi gumb s lijeve strane <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Postavke dodirnog terminala" title="Postavke dodira"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> u donjoj alatnoj traci dodirnog terminala.

1. Sada se na lijevoj polovici središnjeg zaslona pojavljuje niz stavki izbornika. Kliknite na donji gumb `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Sada se na desnoj polovici središnjeg zaslona pojavljuje stavka izbornika (ili možda nekoliko njih). Kliknite na gornji gumb `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Gumb se sada prebacuje na lijevu polovicu zaslona.

1. Na dnu desne strane zaslona sada se prikazuje gumb &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Otvori postavke VitalControla" title="Otvori postavke" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Kliknite ovaj gumb i otvorit će se skočni prozor koji prikazuje [Stranicu 1](#settings-menu-vitalcontrol-page-1) izbornika postavki `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl postavke: Pristup" title="Pristup izborniku postavki VitalControl" />
    <figcaption class="figure-caption fs-6">Snimka zaslona 1: Pristup izborniku postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Izbornik postavki `{{<T "VitalControl" >}}` raspoređen je na dvije stranice:

## Izbornik postavki `{{<T "VitalControl" >}}` - Stranica 1 {#settings-menu-vitalcontrol-page-1}

Stranica 1 izbornika postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span> prikazana je kako slijedi:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Izbornik postavki VitalControl: Stranica 1" title="VitalControl postavke (1)" />
    <figcaption class="figure-caption fs-6">Snimka zaslona 2: Izbornik postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Stranica 1</figcaption>
</figure>

Na ovoj stranici možete izvršiti sljedeće radnje i postavke.

### Aktivacija uređaja {{<T "VitalControl" >}} {#activation-vitalcontrol}

U zadanoj postavci stroja, {{<T "VitalControl" >}} je deaktiviran. Postavite prekidač <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> u desni položaj <span style="font-style: italic;">{{<T "YES" >}}</span> kako biste aktivirali uređaj {{<T "VitalControl" >}}. Nakon toga, u desnoj bočnoj traci izbornika hranilice, ispod ikone(a) za povezani(e) stroj(eve), prikazat će se ikona <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl uređaj" title="VitalControl"/> za uređaj `{{<T "VitalControl" >}}` (pogledajte Snimku zaslona <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Izbornik hranilice</a></span>, slika <span style="font-size: 140%">➁</span> tamo).

### Sinkronizacija automatskog hranilice <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Na lijevoj strani ekrana nalaze se dvije potvrdne kućice:

* Potvrdna kućica <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Ova opcija kontrolira ponašanje u slučaju da su životinje prisutne na hranilici tijekom sinkronizacije, a još nisu poznate uređaju {{<T "VitalControl" >}}. Ova opcija je prema zadanim postavkama omogućena i općenito bi trebala ostati postavljena. Ako registrirate svoje kupljene životinje skeniranjem njihovih životinjskih putovnica, ovu opciju morate onemogućiti.

    <span style="font-weight: bold">Omogućite</span> ovu opciju:

    - ako imate potpuno novi {{<T "VitalControl" >}} ispred sebe, na koji želite prenijeti sve životinje s hranilice. Nakon sinkronizacije, sve životinje poznate hranilici bit će također prisutne na {{<T "VitalControl" >}}.
    - ako kontinuirano dovodite nove teladi na hranilicu tijekom tekućih operacija. Te će životinje tada također biti stvorene na uređaju {{<T "VitalControl" >}} tijekom sinkronizacije.

    <span style="font-weight: bold">Onemogućite</span> ovu opciju:

    - ako ste novostvorene životinje na svom {{<T "VitalControl" >}} registrirali skeniranjem njihovih životinjskih putovnica, gdje
    - te životinje još nisu dobile transponder i
    - te se životinje već hrane na hranilici i stoga su tamo registrirane.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
                Ako opcija ostane postavljena u gore navedenoj konfiguraciji, životinje će biti prisutne dvaput na {{<T "VitalControl" >}} nakon sinkronizacije.
            </div>
        </div>

* Potvrdni okvir <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Ova opcija kontrolira hoće li životinje koje su prisutne samo na {{<T "VitalControl" >}}, ali ne i na hranilici, biti izbrisane s {{<T "VitalControl" >}} tijekom sljedeće sinkronizacije. Ako koristite {{<T "VitalControl" >}} samo tijekom mliječnog razdoblja životinja, ovu opciju treba omogućiti. Ako želite pratiti životinje i nakon mliječnog razdoblja, morate onemogućiti ovu opciju.

    <span style="font-weight: bold">Omogućite</span> ovu opciju:

    - ako prikupljate podatke za životinje samo tijekom mliječnog razdoblja,
    - ako želite da se životinje izbrišu s {{<T "VitalControl" >}} tijekom sljedeće sinkronizacije nakon što su izbrisane s hranilice. Na taj način, životinje se ne nakupljaju na {{<T "VitalControl" >}} tijekom vremena.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
            Ako je ova opcija aktivirana i potvrdni okvir <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> također aktiviran, neće se brisati životinje koje su mlađe od specificiranog u polju za broj <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
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

### Sinkronizacija {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automatski hranilica

Na desnoj strani ekrana nalazi se potvrdni okvir i dva ulazna polja:

* Potvrdni okvir <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Ova opcija kontrolira hoće li se životinje prisutne na {{<T "VitalControl" >}}, koje su nepoznate hranilici, stvoriti na hranilici tijekom sljedeće sinkronizacije. Po defaultu, ova opcija nije aktivirana.

    <span style="font-weight: bold">Deaktivirajte</span> ovu opciju ili je ostavite deaktiviranom:

    - ako koristite svoj uređaj {{<T "VitalControl" >}} na više hranilica istovremeno,
    - ako svoje životinje dovodite izravno na hranilicu bez prethodnog registriranja putem uređaja {{<T "VitalControl" >}}. Vaše će se životinje tada automatski stvoriti tijekom registracije kada se prvi put hrane na hranilici.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
            Ako se {{<T "VitalControl" >}} koristi na više strojeva i ova je opcija označena, životinje će se nenamjerno prenijeti s jednog stroja na drugi tijekom sinkronizacije.
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
        Aktivirajte ovu opciju samo ako koristite {{<T "VitalControl" >}} na jednom uređaju! Ako želite izvršiti sinkronizaciju s više uređaja s ovom postavkom, morate koristiti zaseban {{<T "VitalControl" >}} uređaj za svaki uređaj.
    </div>
</div>

* Padajući izbornik <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   U ovom padajućem izborniku možete odabrati krivulju hranjenja koja je dodijeljena životinjama koje su novostvorene na hranilici tijekom sinkronizacije.

* Numeričko polje za unos<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    U ovom numeričkom polju možete odrediti minimalnu dob (u danima) od koje se životinje novostvaraju na hranilici tijekom sinkronizacije. Životinje koje su mlađe od navedene minimalne dobi **nisu** stvorene tijekom sinkronizacije.

Pritisnite gumb <span style="font-size: 140%">⑧</span> za prelazak na [stranicu 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">izbornika postavki {{<T "VitalControl" >}}</span>.

## Izbornik postavki `{{<T "VitalControl" >}}` - Stranica 2 {#settings-menu-vitalcontrol-page-2}

### Kako se nositi s konfliktima podataka tijekom sinkronizacije

Konflikti podataka mogu se pojaviti prilikom sinkronizacije podataka između hranilice i uređaja {{<T "VitalControl" >}}. Konflikt podataka nastaje kada se podaci međusobno proturječe na uređaju {{<T "VitalControl" >}} i na hranilici (npr. u vezi s <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Na ovoj stranici 2 izbornika postavki možete odrediti hoće li i kako će se konflikti podataka riješiti tijekom sinkronizacije. Ovdje postoje tri opcije:

* Prioritet se daje podacima hranilice, podaci na uređaju {{<T "VitalControl" >}} prepisuju se podacima hranilice.\
  Aktivirajte ovu opciju odabirom radio gumba u lijevom stupcu ispod simbola hranilice <span style="font-size: 140%">➃</span>.

* Prioritet se daje podacima {{<T "VitalControl" >}}, podaci na hranilici prepisuju se podacima uređaja {{<T "VitalControl" >}}.\
  Aktivirajte ovu opciju odabirom radio gumba u lijevom stupcu ispod {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Ne rade se promjene, podaci hranilice i podaci uređaja {{<T "VitalControl" >}} ostaju nepromijenjeni.\
  Aktivirajte ovu opciju odabirom radio gumba u desnom stupcu <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Primjer</span><br>
            Nakon što ste kupili seriju teladi, registrirate svoje kupljene životinje na {{<T "VitalControl" >}} skeniranjem svih njihovih životinjskih putovnica. Brojevi životinja za ove životinje na {{<T "VitalControl" >}} tada su – ovisno o <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">postavkama uređaja</a> – posljednje 3-5 znamenki putovnice životinje. Zatim stavljate ogrlice s Urban transponderima na novokupljene životinje i hranite ih na automatskoj hranilici. Tijekom prvog posjeta stanici, životinje se registriraju pomoću svog transpondera i novostvorene su na hranilici. Međutim, brojevi životinja za ove nove životinje na hranilici izvedeni su iz broja transpondera ili odgovaraju broju životinje pohranjenom za taj transponder u hranilici. To znači da je sada dodijeljen drugačiji broj životinje istoj životinji na uređaju {{<T "VitalControl" >}} i na hranilici, što rezultira konfliktom podataka. Pomoću radio gumba za <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, sada možete odrediti u izborniku postavki koji od dva paralelna broja životinja ima prioritet i koji će biti izbrisan tijekom sinkronizacije.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Settings Menu VitalControl: Page 2" title="Settings VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Snimka zaslona 3: Izbornik postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Stranica 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Iz unutarnjih razloga, promjene se trenutno mogu napraviti samo na <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. U kasnijim verzijama firmvera, također ćete moći napraviti promjene na <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> i <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Pritiskom na <span style="font-style: italic;">gumb</span> <span style="font-size: 140%">⑧</span> vratit ćete se na [stranicu 1](#settings-menu-vitalcontrol-page-1) izbornika postavki `{{<T "VitalControl" >}}`.
