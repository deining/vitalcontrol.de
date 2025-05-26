---
title: Jednokratna Aktivacija i Konfiguracija Uređaja u Postavkama automatskog hranilice
linkTitle: Konfiguracija
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Prije nego što prvi put koristite VitalControl, morate ga aktivirati i pravilno konfigurirati u postavkama Alma Pro hranilice.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/bs
---
## Zahtjevi

Preporučujemo korištenje verzije firmvera <span style="font-weight: bold">24-xx-xx</span> ili novije s uređajem VitalControl.\
Da biste provjerili koja je verzija firmvera instalirana na vašem uređaju:

* Idite na početnu stranicu hranilice klikom na gornje dugme `Početna` <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Ikona početnog ekrana" title="Alma Pro: Početni ekran"/>&nbsp; u navigacijskoj traci na lijevoj strani ekrana.
* Na početnom ekranu, kliknite dugme `Pomoć` <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Ikona menija pomoći" title="Alma Pro: Ekran pomoći"/>&nbsp; u gornjem desnom dijelu ekrana.
* Broj verzije <span style="font-size: 140%">➂</span> sada je prikazan lijevo od dugmeta za promjenu jezika.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: provjera verzije firmvera" title="Alma Pro: provjera verzije firmvera" />
    <figcaption class="figure-caption fs-6">Snimak ekrana 1: <span style="font-style: italic;">Alma Pro: provjera verzije firmvera</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako je verzija firmvera vaše hranilice niža od <span style="font-weight: bold">24-xx-xx</span>, mogu postojati razlike između snimaka ekrana ispod i prikaza na vašem ekranu osjetljivom na dodir, tako da možda nećete moći slijediti upute. U tom slučaju, kontaktirajte svog servisnog tehničara da ažurira firmver na vašoj hranilici.<br>
    </div>
</div>

## Navigacija do menija postavki `{{% T "VitalControl" %}}`

{{% alert title="Pažnja" %}}
Da biste aktivirali i postavili uređaj {{<T "VitalControl" >}}, morate biti prijavljeni kao korisnička uloga {{<T "SiteManager" >}} na automatskom hranilici. U suprotnom, neki od dugmadi prikazanih i opisanih u nastavku neće biti vidljivi.
{{% /alert %}}

1. Kliknite na donje dugme <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Meni postavki" title="Postavke"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> u lijevoj bočnoj traci dodirnog terminala. Ako ste u glavnom meniju gdje bočna traka nije vidljiva, pritisnite dugme &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Meni hranilice" title="Meni hranilice"/>`{{<T "Feeder" >}}`da biste prikazali bočnu traku.

1. Kliknite na drugo dugme s lijeve strane <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Postavke dodirnog terminala" title="Postavke dodira"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> u donjoj alatnoj traci dodirnog terminala.

1. Sada se pojavljuje niz stavki menija na lijevoj polovini centralnog ekrana. Kliknite na donje dugme `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Stavka menija (ili možda nekoliko njih) sada se pojavljuje na desnoj polovini centralnog ekrana. Kliknite na gornje dugme `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Dugme sada prelazi na lijevu polovinu ekrana.

1. Na dnu desne strane ekrana, sada je prikazano dugme &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Otvorite postavke VitalControl" title="Otvorite postavke" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Kliknite ovo dugme, i pojavit će se popup prozor koji prikazuje [Stranicu 1](#settings-menu-vitalcontrol-page-1) menija postavki `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" usemap="#NavigationToVitalControlSettingsMenu" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Postavke VitalControl: Pristup" title="Pristup meniju postavki VitalControl" />
    <figcaption class="figure-caption fs-6">Snimak ekrana 1: Pristup meniju postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Izbornik postavki `{{<T "VitalControl" >}}` je raspoređen na dvije stranice:

## Izbornik postavki `{{% T "VitalControl" %}}` - Stranica 1 {#settings-menu-vitalcontrol-page-1}

Stranica 1 izbornika postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span> prikazana je na sljedeći način:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" usemap="#VitalControlSettingsPage1" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Izbornik postavki VitalControl: Stranica 1" title="Postavke VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Snimak ekrana 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> izbornik postavki, Stranica 1</figcaption>
</figure>

Na ovoj stranici možete izvršiti sljedeće radnje i postavke.

### Aktivacija uređaja {{% T "VitalControl" %}} {#activation-vitalcontrol}

U osnovnom stanju mašine, {{<T "VitalControl" >}} je deaktiviran. Postavite prekidač <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> u desni položaj <span style="font-style: italic;">{{<T "YES" >}}</span> da aktivirate uređaj {{<T "VitalControl" >}}. Nakon toga, u desnoj bočnoj traci izbornika za hranjenje, ispod ikone(a) za povezanu mašinu(e), prikazat će se ikona <img src="/icons/device.svg" width="20" align="bottom" alt="Uređaj VitalControl" title="VitalControl"/> za uređaj `{{<T "VitalControl" >}}` (pogledajte Snimak ekrana <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Izbornik za hranjenje</a></span>, slika <span style="font-size: 140%">➁</span> tamo).

### Sinhronizacija automatskog hranitelja <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Na lijevoj strani ekrana nalaze se dvije kućice za potvrdu:

* Kućica za potvrdu <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Ova opcija kontroliše ponašanje u slučaju da su životinje prisutne na hranilici tokom sinhronizacije koje još nisu poznate uređaju {{<T "VitalControl" >}}. Ova opcija je podrazumevano omogućena i generalno bi trebala ostati postavljena. Ako registrujete kupljene životinje skeniranjem njihovih pasoša, ova opcija mora biti onemogućena.

<span style="font-weight: bold">Omogućite</span> ovu opciju:

- ako imate potpuno novi {{<T "VitalControl" >}} ispred sebe, na koji želite prenijeti sve životinje sa hranilice. Nakon sinhronizacije, sve životinje poznate hranilici će također biti prisutne na {{<T "VitalControl" >}}.
- ako kontinuirano dovodite nove teladi na hranilicu tokom tekućih operacija. Ove životinje će tada također biti kreirane na uređaju {{<T "VitalControl" >}} tokom sinhronizacije.

<span style="font-weight: bold">Onemogućite</span> ovu opciju:

- ako ste novokreirane životinje na vašem {{<T "VitalControl" >}} skeniranjem njihovih pasoša, gdje
- ove životinje još nisu dodijeljene transponderu i
- ove životinje se već hrane na hranilici i stoga su tamo registrovane.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako opcija ostane postavljena u gore navedenoj konfiguraciji, životinje će biti prisutne dvaput na {{<T "VitalControl" >}} nakon sinhronizacije.
    </div>
</div>

* Checkbox <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Ova opcija kontroliše da li se životinje koje su prisutne samo na {{<T "VitalControl" >}} ali ne i na hranilici brišu sa {{<T "VitalControl" >}} tokom sledeće sinhronizacije. Ako koristite {{<T "VitalControl" >}} samo tokom perioda mužnje životinja, ova opcija treba biti omogućena. Ako želite pratiti životinje i nakon perioda mužnje, morate onemogućiti ovu opciju.

<span style="font-weight: bold">Omogućite</span> ovu opciju:

- ako prikupljate podatke za životinje samo tokom perioda mužnje,
- ako želite da se životinje brišu sa {{<T "VitalControl" >}} tokom sledeće sinhronizacije nakon što su obrisane sa hranilice. Na taj način, životinje se ne akumuliraju na {{<T "VitalControl" >}} tokom vremena.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako je ova opcija aktivirana i polje za potvrdu <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> je također aktivirano, nijedna životinja neće biti obrisana koja je mlađa od specificirane u polju za broj <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Onemogućite</span> ovu opciju:
- ako želite nastaviti prikupljati podatke za životinje nakon perioda mužnje, na primjer, tokom vaganja,
- ako ste spremni ručno obrisati životinje sa {{<T "VitalControl" >}} sami.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako onemogućite ovu opciju, morate odspojiti transponder za odbijenu telad na uređaju {{<T "VitalControl" >}} najkasnije kada se ogrlica ukloni s odbijene teladi na drugu, mlađu telad. Ako transponder nije uklonjen, zapisi podataka mlađe životinje - koja sada nosi bivšu ogrlicu odbijene životinje - pogrešno se dodaju u skup podataka odbijene životinje.
    </div>
</div>

### Sinhronizacija {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Automatski hranilac

Na desnoj strani ekrana nalazi se potvrdni okvir i dva ulazna polja:

* Potvrdni okvir <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Ova opcija kontroliše hoće li životinje prisutne na {{<T "VitalControl" >}}, koje su nepoznate hranilici, biti kreirane na hranilici tokom sljedeće sinhronizacije. Po defaultu, ova opcija nije aktivirana.

    <span style="font-weight: bold">Deaktivirajte</span> ovu opciju ili je ostavite deaktiviranom:

    - ako koristite svoj uređaj {{<T "VitalControl" >}} na više hranilica istovremeno,
    - ako svoje životinje dovodite direktno do hranilice bez prethodnog registriranja putem uređaja {{<T "VitalControl" >}}. Vaše životinje će tada biti automatski kreirane tokom registracije kada se prvi put hrane na hranilici.

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
- ako evidentirate svoje kupljene životinje skeniranjem njihovih pasoša za životinje na {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Aktivirajte ovu opciju samo ako koristite {{<T "VitalControl" >}} na jednoj mašini! Ako želite izvršiti sinhronizaciju s više mašina s ovom opcijom postavljenom, morate koristiti poseban {{<T "VitalControl" >}} uređaj za svaku mašinu.
    </div>
</div>

* Padajući meni <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   U ovom padajućem meniju možete odabrati krivulju ishrane koja je dodijeljena životinjama koje su novokreirane na hranilici tokom sinhronizacije.

* Polje za unos brojeva<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    U ovom polju za unos brojeva možete odrediti minimalnu starost (u danima) od koje se životinje novokreiraju na hranilici tokom sinhronizacije. Životinje koje su mlađe od specificirane minimalne starosti **nisu** kreirane tokom sinhronizacije.

Pritisnite dugme <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> da biste prešli na [stranicu 2](#settings-menu-vitalcontrol-page-2) menija <span style="font-style: italic;">postavki {{<T "VitalControl" >}}</span>.

## Meni postavki `{{% T "VitalControl" %}}` - Stranica 2 {#settings-menu-vitalcontrol-page-2}

### Kako se nositi s konfliktima podataka tokom sinhronizacije

Konflikti podataka mogu se pojaviti prilikom sinhronizacije podataka između hranilice i uređaja {{<T "VitalControl" >}}. Konflikt podataka se javlja kada se podaci međusobno proturječe na uređaju {{<T "VitalControl" >}} i na hranilici (npr. u vezi sa <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Na ovoj stranici 2 menija postavki možete odrediti da li i kako se konflikti podataka rješavaju tokom sinhronizacije. Ovdje postoje tri opcije:

* Prioritet se daje podacima hranilice, podaci na uređaju {{<T "VitalControl" >}} se prepisuju podacima hranilice\.
  Aktivirajte ovu opciju odabirom radio dugmeta u lijevoj koloni ispod simbola hranilice <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Prioritet se daje podacima {{<T "VitalControl" >}}, podaci na hranilici se prepisuju podacima uređaja {{<T "VitalControl" >}}\.
  Aktivirajte ovu opciju odabirom radio dugmeta u lijevoj koloni ispod {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.


* Nema promjena, podaci o hranilici i podaci uređaja {{<T "VitalControl" >}} ostaju nepromijenjeni.\
  Aktivirajte ovu opciju odabirom radio dugmeta u desnoj koloni <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Primjer</span><br>
            Nakon što ste kupili grupu teladi, registrujete kupljene životinje na {{<T "VitalControl" >}} skeniranjem svih njihovih pasoša. Brojevi životinja za ove životinje na {{<T "VitalControl" >}} su tada – ovisno o <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">postavkama uređaja</a> – posljednje 3-5 cifre pasoša životinje. Zatim stavljate ogrlice s Urban transponderima na novokupljene životinje i hranite ih na automatskoj hranilici. Tokom prve posjete stanici, životinje se registruju pomoću njihovog transpondera i novokreirane na hranilici. Međutim, brojevi životinja za ove nove životinje na hranilici izvedeni su iz broja transpondera ili odgovaraju broju životinje pohranjenom za ovaj transponder u hranilici. To znači da je sada dodijeljen drugačiji broj životinje istoj životinji na uređaju {{<T "VitalControl" >}} i na hranilici, što rezultira sukobom podataka. Koristeći radio dugmad za <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, sada možete odrediti u meniju postavki koji od dva paralelna broja životinja ima prioritet i koji će biti izbrisan tokom sinhronizacije.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" usemap="#VitalControlSettingsPage2" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Meni postavki VitalControl: Stranica 2" title="Postavke VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Snimak ekrana 3: Meni postavki <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Stranica 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Iz unutrašnjih razloga, promjene se trenutno mogu izvršiti samo na <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. U kasnijim verzijama firmvera, možete također izvršiti promjene na <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> i <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Pritiskom na <span style="font-style: italic;">dugme</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> vratit ćete se na [stranicu 1](#settings-menu-vitalcontrol-page-1) menija postavki `{{<T "VitalControl" >}}`.

<map name="NavigationToVitalControlSettingsMenu">
    <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='Kliknite {{<T "Settings" >}}' href="#Navigation_Digit_1">
    <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='Kliknite {{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
    <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='Kliknite {{<T "Accessories" >}}' href="#Navigation_Digit_3">
    <area shape="rect" coords="520,150,870,197" alt='{{<T "OpenSettings" >}}' title='Kliknite {{<T "OpenSettings" >}}' href="#Navigation_Digit_4">
    <area shape="rect" coords="580,582,850,636" alt='{{<T "VitalControl" >}}' title='Kliknite {{<T "VitalControl" >}}' href="#Navigation_Digit_5">
</map>

<map name="VitalControlSettingsPage1">
    <area shape="rect" coords="253,45,626,107" alt='{{<T "YES" >}}/{{<T "NO" >}}' title='Kliknite {{<T "YES" >}}/{{<T "NO" >}}' href="#VitalControlSettingsPage1_Digit_1">
    <area shape="rect" coords="11,236,88,316" alt='{{<T "RegisterNewOnVitalControlDevice" >}}' title='Kliknite {{<T "RegisterNewOnVitalControlDevice" >}}' href="#VitalControlSettingsPage1_Digit_2">
    <area shape="rect" coords="11,357,88,434" alt='{{<T "DeleteFromVitalControl" >}}' title='Kliknite {{<T "DeleteFromVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
    <area shape="rect" coords="31,463,357,508" alt='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' title='Kliknite {{<T "DoNotDeleteAnimalsYoungerThan" >}}' href="#VitalControlSettingsPage1_Digit_4">
    <area shape="rect" coords="420,236,511,286" alt='{{<T "RegisterNewOnAutomaticFeeder" >}}' title='Kliknite {{<T "RegisterNewOnAutomaticFeeder" >}}' href="#VitalControlSettingsPage1_Digit_5">
    <area shape="rect" coords="435,352,837,397" alt='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' title='Kliknite {{<T "FeedingCurveAssignedToImportedAnimals" >}}' href="#VitalControlSettingsPage1_Digit_6">
    <area shape="rect" coords="513,462,837,507" alt='{{<T "DoNotImportAnimalsOlderThan" >}}' title='Kliknite {{<T "DoNotImportAnimalsOlderThan" >}}' href="#VitalControlSettingsPage1_Digit_7">
    <area shape="rect" coords="142,517,215,616" alt='Stranica 2' title='Kliknite Stranica 2' href="#VitalControlSettingsPage1_Digit_8">
</map>

<map name="VitalControlSettingsPage2">
    <area shape="rect" coords="5,208,235,248" alt='{{<T "EarTagNumber" >}}' title='Kliknite {{<T "EarTagNumber" >}}' href="#VitalControlSettingsPage2_Digit_1">
    <area shape="rect" coords="5,208,235,328" alt='{{<T "AnimalNumber" >}}' title='Kliknite {{<T "AnimalNumber" >}}' href="#VitalControlSettingsPage2_Digit_2">
    <area shape="rect" coords="5,368,235,408" alt='{{<T "DateOfBirth" >}}' title='Kliknite {{<T "DateOfBirth" >}}' href="#VitalControlSettingsPage2_Digit_3">
    <area shape="rect" coords="392,116,455,177" alt='{{<T "Feeder" >}}' title='Kliknite {{<T "Feeder" >}}' href="#VitalControlSettingsPage2_Digit_4">
    <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='Kliknite {{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
    <area shape="rect" coords="678,97,775,159" alt='{{<T "NoChange_AP" >}}' title='Kliknite {{<T "NoChange_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
    <area shape="rect" coords="52,510,125,615" alt='Stranica 1' title='Kliknite Stranica 1' href="#VitalControlSettingsPage2_Digit_8">
</map>
