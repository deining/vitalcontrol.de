---
title: Jednokratna Aktivacija i Konfiguracija Uređaja u Postavkama automatskog hranilice
linkTitle: Konfiguracija
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Prije prve upotrebe VitalControl-a, morate ga aktivirati i pravilno konfigurirati u postavkama Alma Pro hranilice.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Da biste aktivirali i postavili VitalControl uređaj, postupite na sljedeći način:

## Navigacija do menija postavki `{{<T "VitalControl" >}}`

{{% alert title="Pažnja" %}}
Da biste aktivirali i postavili uređaj {{<T "VitalControl" >}}, morate biti prijavljeni kao korisnik s ulogom {{<T "SiteManager" >}} na automatskoj hranilici. U suprotnom, neki od prikazanih i opisanih dugmadi neće biti vidljivi.
{{% /alert %}}

1. Kliknite na donje dugme <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Meni postavki" title="Postavke"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> u lijevoj bočnoj traci dodirnog terminala. Ako ste u glavnom meniju gdje bočna traka nije vidljiva, pritisnite dugme &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Meni hranilice" title="Meni hranilice"/>`{{<T "Feeder" >}}`da biste prikazali bočnu traku.

1. Kliknite na drugo dugme s lijeve strane <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Postavke dodirnog terminala" title="Postavke dodira"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> u donjoj alatnoj traci dodirnog terminala.

1. Sada se na lijevoj polovini centralnog ekrana pojavljuje niz stavki menija. Kliknite na donje dugme `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Sada se na desnoj polovini centralnog ekrana pojavljuje stavka menija (ili možda nekoliko njih). Kliknite na gornje dugme `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Dugme se sada prebacuje na lijevu polovinu ekrana.

1. Na dnu desne strane ekrana sada se prikazuje dugme &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Otvori postavke VitalControl-a" title="Otvori postavke" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Kliknite ovo dugme i otvorit će se skočni prozor koji prikazuje [Stranicu 1](#settings-menu-vitalcontrol-page-1) menija postavki `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl postavke: Pristup" title="Pristupite VitalControl izborniku postavki" />
    <figcaption class="figure-caption fs-6">Snimak ekrana 1: Pristupanje izborniku postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Izbornik postavki `{{<T "VitalControl" >}}` je raspoređen na dvije stranice:

## Izbornik postavki `{{<T "VitalControl" >}}` - Stranica 1 {#settings-menu-vitalcontrol-page-1}

Stranica 1 izbornika postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span> je prikazana na sljedeći način:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Izbornik postavki VitalControl: Stranica 1" title="VitalControl postavke (1)" />
    <figcaption class="figure-caption fs-6">Snimak ekrana 2: Izbornik postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Stranica 1</figcaption>
</figure>

Na ovoj stranici možete izvršiti sljedeće radnje i postavke.

### Aktivacija uređaja {{<T "VitalControl" >}} {#activation-vitalcontrol}

U zadatom stanju mašine, {{<T "VitalControl" >}} je deaktiviran. Postavite prekidač <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> u desni položaj <span style="font-style: italic;">{{<T "YES" >}}</span> da aktivirate uređaj {{<T "VitalControl" >}}. Nakon toga, u desnoj bočnoj traci izbornika za hranjenje, ispod ikone(a) za povezanu mašinu(e), prikazat će se ikona <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl uređaj" title="VitalControl"/> za uređaj `{{<T "VitalControl" >}}` (pogledajte Snimak ekrana <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Izbornik za hranjenje</a></span>, slika <span style="font-size: 140%">➁</span> tamo).

### Sinhronizacija automatskog hranilice <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Na lijevoj strani ekrana nalaze se dvije kućice za potvrdu:

* Kućica <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Ova opcija kontroliše ponašanje u slučaju da su životinje prisutne na hranilici tokom sinhronizacije koje još nisu poznate uređaju {{<T "VitalControl" >}}. Ova opcija je podrazumijevano omogućena i generalno bi trebala ostati postavljena. Ako registrujete kupljene životinje skeniranjem njihovih pasoša, ova opcija mora biti onemogućena.

    <span style="font-weight: bold">Omogućite</span> ovu opciju:

    - ako imate potpuno novi {{<T "VitalControl" >}} ispred sebe, na koji želite prenijeti sve životinje s hranilice. Nakon sinhronizacije, sve životinje poznate hranilici će također biti prisutne na {{<T "VitalControl" >}}.
    - ako kontinuirano dovodite nove teladi na hranilicu tokom tekućih operacija. Ove životinje će tada također biti kreirane na uređaju {{<T "VitalControl" >}} tokom sinhronizacije.

    <span style="font-weight: bold">Onemogućite</span> ovu opciju:

    - ako ste novokreirane životinje na vašem {{<T "VitalControl" >}} registrirali skeniranjem njihovih pasoša, gdje
    - te životinje još nisu dobile transponder i
    - te životinje se već hrane na hranilici i stoga su tamo registrirane.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
                Ako opcija ostane postavljena u gore navedenoj konfiguraciji, životinje će biti prisutne dvaput na {{<T "VitalControl" >}} nakon sinhronizacije.
            </div>
        </div>

* Checkbox <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Ova opcija kontroliše da li se životinje koje su prisutne samo na {{<T "VitalControl" >}}, ali ne i na hranilici, brišu sa {{<T "VitalControl" >}} tokom sljedeće sinhronizacije. Ako koristite {{<T "VitalControl" >}} samo tokom perioda mlijeka životinja, ova opcija treba biti omogućena. Ako želite pratiti životinje i nakon perioda mlijeka, morate onemogućiti ovu opciju.

    <span style="font-weight: bold">Omogućite</span> ovu opciju:

    - ako prikupljate podatke za životinje samo tokom perioda mlijeka,
    - ako želite da se životinje brišu sa {{<T "VitalControl" >}} tokom sljedeće sinhronizacije nakon što su izbrisane sa hranilice. Na taj način, životinje se ne akumuliraju na {{<T "VitalControl" >}} tokom vremena.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
            Ako je ova opcija aktivirana i checkbox <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> je također aktiviran, nijedna životinja neće biti izbrisana koja je mlađa od specificirane u polju za broj <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Onemogućite</span> ovu opciju:
    - ako želite nastaviti prikupljati podatke za životinje nakon perioda mlijeka, na primjer, tokom vaganja,
    - ako ste spremni ručno izbrisati životinje sa {{<T "VitalControl" >}} sami.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako onemogućite ovu opciju, morate odspojiti transponder za odbijenu telad na uređaju {{<T "VitalControl" >}} najkasnije kada se ogrlica ukloni s odbijene teladi na drugu, mlađu telad. Ako transponder nije uklonjen, podaci mlađe životinje - koja sada nosi bivšu ogrlicu odbijene teladi - bit će pogrešno dodani u skup podataka odbijene teladi.
    </div>
</div>

### Sinhronizacija {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automatski hranilac

Na desnoj strani ekrana nalazi se potvrdni okvir i dva ulazna polja:

* Potvrdni okvir <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Ova opcija kontrolira hoće li se životinje prisutne na {{<T "VitalControl" >}}, koje su nepoznate hranilici, kreirati na hranilici tokom sljedeće sinhronizacije. Po defaultu, ova opcija nije aktivirana.

    <span style="font-weight: bold">Deaktivirajte</span> ovu opciju ili je ostavite deaktiviranom:

    - ako koristite svoj uređaj {{<T "VitalControl" >}} na više hranilica istovremeno,
    - ako svoje životinje direktno dovodite do hranilice bez prethodnog registriranja putem uređaja {{<T "VitalControl" >}}. Vaše životinje će tada biti automatski kreirane tokom registracije kada se prvi put hrane na hranilici.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
            Ako se {{<T "VitalControl" >}} koristi na više mašina i ova opcija je označena, životinje će biti nenamjerno prebačene s jedne mašine na drugu tokom sinhronizacije.
        </div>
    </div>

<span style="font-weight: bold">Aktivirajte</span> ovu opciju:

- ako se početna registracija njihovih novorođenih životinja sa {{<T "VitalControl" >}} obavlja prije prvog hranjenja na hranilici.
- ako evidentirate kupljene životinje skeniranjem njihovih pasoša na {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Aktivirajte ovu opciju samo ako koristite {{<T "VitalControl" >}} na jednoj mašini! Ako želite izvršiti sinhronizaciju s više mašina s ovom opcijom, morate koristiti poseban uređaj {{<T "VitalControl" >}} za svaku mašinu.
    </div>
</div>

* Padajući meni <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   U ovom padajućem meniju možete odabrati krivulju hranjenja koja je dodijeljena životinjama koje su novokreirane na hranilici tokom sinhronizacije.

* Numeričko polje za unos<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    U ovom numeričkom polju možete odrediti minimalnu starost (u danima) od koje se životinje novokreiraju na hranilici tokom sinhronizacije. Životinje koje su mlađe od specificirane minimalne starosti **nisu** kreirane tokom sinhronizacije.

Pritisnite dugme <span style="font-size: 140%">⑧</span> da biste prešli na [stranicu 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">menija postavki {{<T "VitalControl" >}}</span>.

## Meni postavki `{{<T "VitalControl" >}}` - Stranica 2 {#settings-menu-vitalcontrol-page-2}

### Kako se nositi s konfliktima podataka tokom sinhronizacije

Konflikti podataka mogu se pojaviti prilikom sinhronizacije podataka između hranilice i uređaja {{<T "VitalControl" >}}. Konflikt podataka nastaje kada se podaci međusobno proturječe na uređaju {{<T "VitalControl" >}} i na hranilici (npr. u vezi sa <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Na ovoj stranici 2 menija postavki, možete odrediti da li i kako se konflikti podataka rješavaju tokom sinhronizacije. Ovdje postoje tri opcije:

* Prioritet se daje podacima hranilice, podaci na uređaju {{<T "VitalControl" >}} se prepisuju podacima hranilice.
  Aktivirajte ovu opciju odabirom radio dugmeta u lijevoj koloni ispod simbola hranilice <span style="font-size: 140%">➃</span>.

* Prioritet se daje podacima {{<T "VitalControl" >}}, podaci na hranilici se prepisuju podacima uređaja {{<T "VitalControl" >}}.
  Aktivirajte ovu opciju odabirom radio dugmeta u lijevoj koloni ispod {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Nema promjena, podaci hranilice i podaci uređaja {{<T "VitalControl" >}} ostaju nepromijenjeni.\
  Aktivirajte ovu opciju odabirom radio dugmeta u desnoj koloni <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Primjer</span><br>
            Nakon što ste kupili grupu teladi, registrujete kupljene životinje na {{<T "VitalControl" >}} skeniranjem svih njihovih pasoša za životinje. Brojevi životinja za ove životinje na {{<T "VitalControl" >}} su tada – ovisno o <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">postavkama uređaja</a> – posljednje 3-5 cifre pasoša životinje. Zatim stavljate ogrlice s Urban transponderima na novokupljene životinje i hranite ih na automatskoj hranilici. Tokom prve posjete stanici, životinje se registruju pomoću svog transpondera i novokreirane su na hranilici. Međutim, brojevi životinja za ove nove životinje na hranilici su izvedeni iz broja transpondera ili odgovaraju broju životinje pohranjenom za ovaj transponder u hranilici. To znači da je sada različit broj životinje dodijeljen istoj životinji na uređaju {{<T "VitalControl" >}} i na hranilici, što rezultira konfliktom podataka. Koristeći radio dugmad za <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, sada možete odrediti u meniju postavki koji od dva paralelna broja životinja ima prioritet i koji će biti izbrisan tokom sinhronizacije.
        </div>
</div>


<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Meni postavki VitalControl: Stranica 2" title="Postavke VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Snimak ekrana 3: Meni postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Stranica 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Upozorenje:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Iz unutrašnjih razloga, promjene se trenutno mogu izvršiti samo na <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. U kasnijim verzijama firmvera, promjene će biti moguće i na <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> i <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Pritiskom na <span style="font-style: italic;">dugme</span> <span style="font-size: 140%">⑧</span> vratit ćete se na [stranicu 1](#settings-menu-vitalcontrol-page-1) menija postavki `{{<T "VitalControl" >}}`.
