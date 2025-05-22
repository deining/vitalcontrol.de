---
title: Enkratna aktivacija in konfiguracija naprave v nastavitvah avtomatskega podajalnika
linkTitle: Konfiguracija
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Pred prvo uporabo VitalControl ga morate enkrat aktivirati in pravilno konfigurirati v nastavitvah podajalnika Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Za aktivacijo in nastavitev naprave VitalControl sledite naslednjim korakom:

## Navigacija do menija nastavitev `{{<T "VitalControl" >}}`

{{% alert title="Pozor" %}}
Za aktivacijo in nastavitev naprave {{<T "VitalControl" >}} morate biti prijavljeni kot uporabniška vloga {{<T "SiteManager" >}} na avtomatskem podajalniku. V nasprotnem primeru nekateri gumbi, prikazani in opisani spodaj, ne bodo vidni.
{{% /alert %}}

1. Kliknite na spodnji gumb <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Meni nastavitev" title="Nastavitve"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> v levi stranski vrstici na dotikalnem terminalu. Če ste v glavnem meniju, kjer stranska vrstica ni vidna, pritisnite gumb &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Meni podajalnika" title="Meni podajalnika"/>`{{<T "Feeder" >}}`, da prikažete stransko vrstico.

1. Kliknite na drugi gumb z leve <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Nastavitve dotikalnega terminala" title="Nastavitve dotika"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> v spodnji orodni vrstici dotikalnega terminala.

1. Na levi polovici osrednjega zaslonskega območja se zdaj prikaže vrsta menijskih elementov. Kliknite na spodnji gumb `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Na desni polovici osrednjega zaslonskega območja se zdaj prikaže menijski element (ali morda več). Kliknite na zgornji gumb `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Gumb se zdaj premakne na levo polovico zaslona.

1. Na dnu desne strani zaslona se zdaj prikaže gumb &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Odpri nastavitve VitalControl" title="Odpri nastavitve" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Kliknite ta gumb, in odprlo se bo pojavno okno, ki prikazuje [Stran 1](#settings-menu-vitalcontrol-page-1) menija nastavitev `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Nastavitve VitalControl: Dostop" title="Dostop do menija nastavitev VitalControl" />
    <figcaption class="figure-caption fs-6">Posnetek zaslona 1: Dostop do menija nastavitev <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Meni nastavitev `{{<T "VitalControl" >}}` je razdeljen na dve strani:

## Meni nastavitev `{{<T "VitalControl" >}}` - Stran 1 {#settings-menu-vitalcontrol-page-1}

Stran 1 menija nastavitev <span style="font-style: italic;">{{<T "VitalControl" >}}</span> je predstavljena takole:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Meni nastavitev VitalControl: Stran 1" title="Nastavitve VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Posnetek zaslona 2: Meni nastavitev <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Stran 1</figcaption>
</figure>

Na tej strani lahko izvedete naslednja dejanja in nastavitve.

### Aktivacija naprave {{<T "VitalControl" >}} {#activation-vitalcontrol}

V privzetem stanju naprave je {{<T "VitalControl" >}} deaktiviran. Nastavite stikalo <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> v desni položaj <span style="font-style: italic;">{{<T "YES" >}}</span> za aktivacijo naprave {{<T "VitalControl" >}}. Nato se bo v desni stranski vrstici menija podajalnika, pod ikono/ikone za povezano napravo/e, prikazala ikona <img src="/icons/device.svg" width="20" align="bottom" alt="Naprava VitalControl" title="VitalControl"/> za napravo `{{<T "VitalControl" >}}` (glejte Posnetek zaslona <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Meni podajalnika</a></span>, slika <span style="font-size: 140%">➁</span> tam).

### Sinhronizacija avtomatskega podajalnika <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Na levi strani zaslona sta dve potrditveni polji:

* Potrditveno polje <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Ta možnost nadzoruje vedenje v primeru, da so na podajalniku med sinhronizacijo prisotne živali, ki še niso znane napravi {{<T "VitalControl" >}}. Ta možnost je privzeto omogočena in naj bi na splošno ostala nastavljena. Če registrirate svoje kupljene živali s skeniranjem njihovih živalskih potnih listov, mora biti ta možnost onemogočena.

    <span style="font-weight: bold">Omogočite</span> to možnost:

    - če imate pred seboj povsem nov {{<T "VitalControl" >}}, na katerega želite prenesti vse živali iz podajalnika. Po sinhronizaciji bodo vse živali, znane podajalniku, prisotne tudi na {{<T "VitalControl" >}}.
    - če med tekočim delovanjem nenehno prinašate nove teleta na podajalnik. Te živali bodo nato med sinhronizacijo ustvarjene tudi na napravi {{<T "VitalControl" >}}.

    <span style="font-weight: bold">Onemogočite</span> to možnost:

    - če imate na svojem {{<T "VitalControl" >}} na novo ustvarjene živali s skeniranjem njihovih živalskih potnih listov, kjer
    - te živali še niso dodeljene transponderju in
    - te živali se že hranijo na podajalniku in so zato tam registrirane.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
                Če možnost ostane nastavljena v zgornji konfiguraciji, bodo živali po sinhronizaciji prisotne dvakrat na {{<T "VitalControl" >}}.
            </div>
        </div>


* Potrditveno polje <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Ta možnost nadzoruje, ali se živali, ki so prisotne samo na {{<T "VitalControl" >}}, vendar ne na hranilniku, izbrišejo iz {{<T "VitalControl" >}} med naslednjo sinhronizacijo. Če uporabljate {{<T "VitalControl" >}} samo med mlečnim obdobjem živali, mora biti ta možnost omogočena. Če želite spremljati živali tudi po mlečnem obdobju, morate to možnost onemogočiti.

    <span style="font-weight: bold">Omogočite</span> to možnost:

    - če zbirate podatke za živali samo med mlečnim obdobjem,
    - če želite, da se živali izbrišejo iz {{<T "VitalControl" >}} med naslednjo sinhronizacijo, potem ko so bile izbrisane iz hranilnika. Tako se živali sčasoma ne kopičijo na {{<T "VitalControl" >}}.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
            Če je ta možnost aktivirana in je potrditveno polje <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> prav tako aktivirano, ne bodo izbrisane nobene živali, ki so mlajše od določene starosti v številčnem polju <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Onemogočite</span> to možnost:
    - če želite nadaljevati z zbiranjem podatkov za živali po mlečnem obdobju, na primer med tehtanjem,
    - če ste pripravljeni ročno izbrisati živali iz {{<T "VitalControl" >}} sami.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Če onemogočite to možnost, morate odklopiti transponder za odstavljene živali na napravi {{<T "VitalControl" >}} najkasneje, ko se ovratnica odstrani z odstavljene teleta na drugo, mlajšo tele. Če transponder ni odstranjen, se podatki mlajše živali - ki zdaj nosi nekdanjo ovratnico odstavljene živali - napačno dodajo v podatkovni niz odstavljene živali.
    </div>
</div>

### Sinhronizacija {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Samodejni hranilnik

Na desni strani zaslona je potrditveno polje in dve vnosni polji:

* Potrditveno polje <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Ta možnost nadzoruje, ali bodo živali, prisotne na {{<T "VitalControl" >}}, ki so neznane hranilniku, ustvarjene na hranilniku med naslednjo sinhronizacijo. Privzeto ta možnost ni aktivirana.

    <span style="font-weight: bold">Deaktivirajte</span> to možnost ali jo pustite deaktivirano:

    - če uporabljate svojo napravo {{<T "VitalControl" >}} na več hranilnikih hkrati,
    - če pripeljete svoje živali neposredno do hranilnika, ne da bi jih najprej registrirali prek naprave {{<T "VitalControl" >}}. Vaše živali bodo nato samodejno ustvarjene med registracijo, ko bodo prvič hranjene na hranilniku.

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

- če se začetna registracija njihovih novorojenih živali z {{<T "VitalControl" >}} izvede pred prvo hranjenjem na hranilniku.
- če beležite svoje kupljene živali s skeniranjem njihovih živalskih potnih listov na {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Aktivirajte to možnost le, če uporabljate {{<T "VitalControl" >}} na eni napravi! Če želite izvesti sinhronizacijo z več napravami s to nastavitvijo, morate uporabiti ločeno napravo {{<T "VitalControl" >}} za vsako napravo.
    </div>
</div>

* Spustni meni <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   V tem spustnem meniju lahko izberete krivuljo hranjenja, ki je dodeljena živalim, ki so na novo ustvarjene na hranilniku med sinhronizacijo.

* Številsko vnosno polje<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    V tem številskem polju lahko določite minimalno starost (v dneh), od katere se živali na novo ustvarijo na hranilniku med sinhronizacijo. Živali, ki so mlajše od določene minimalne starosti, **niso** ustvarjene med sinhronizacijo.

Pritisnite gumb <span style="font-size: 140%">⑧</span> za preklop na [stran 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">menija nastavitev {{<T "VitalControl" >}}</span>.

## Meni nastavitev `{{<T "VitalControl" >}}` - Stran 2 {#settings-menu-vitalcontrol-page-2}

### Kako ravnati s podatkovnimi konflikti med sinhronizacijo

Podatkovni konflikti se lahko pojavijo pri sinhronizaciji podatkov med podajalnikom in napravo {{<T "VitalControl" >}}. Podatkovni konflikt se pojavi, ko se podatki med seboj nasprotujejo na napravi {{<T "VitalControl" >}} in na podajalniku (npr. glede <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Na tej strani 2 menija nastavitev lahko določite, ali in kako se podatkovni konflikti rešujejo med sinhronizacijo. Na voljo so tri možnosti:

* Prednost imajo podatki podajalnika, podatki na napravi {{<T "VitalControl" >}} se prepišejo s podatki podajalnika.\
  To možnost aktivirate z izbiro radijskega gumba v levi koloni pod simbolom podajalnika <span style="font-size: 140%">➃</span>.

* Prednost imajo podatki {{<T "VitalControl" >}}, podatki na podajalniku se prepišejo s podatki naprave {{<T "VitalControl" >}}.\
  To možnost aktivirate z izbiro radijskega gumba v levi koloni pod {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Nobenih sprememb ni, tako podatki podajalnika kot podatki naprave {{<T "VitalControl" >}} ostanejo nespremenjeni.\
  To možnost aktivirate z izbiro radijskega gumba v desni koloni <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Primer</span><br>
            Po nakupu serije telet registrirate kupljene živali na {{<T "VitalControl" >}} s skeniranjem vseh njihovih živalskih potnih listov. Živalske številke za te živali na {{<T "VitalControl" >}} so nato – odvisno od <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">nastavitev naprave</a> – zadnje 3-5 številke živalskega potnega lista. Nato na novo kupljene živali opremite z ovratnicami z Urban transponderji in jih hranite na avtomatskem podajalniku. Med prvim obiskom postaje se živali registrirajo s pomočjo transponderja in na novo ustvarijo na podajalniku. Vendar pa so živalske številke za te nove živali na podajalniku izpeljane iz številke transponderja ali ustrezajo živalski številki, shranjeni za ta transponder v podajalniku. To pomeni, da je zdaj isti živali dodeljena drugačna živalska številka na napravi {{<T "VitalControl" >}} in na podajalniku, kar povzroči podatkovni konflikt. Z uporabo radijskih gumbov za <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> lahko zdaj v meniju nastavitev določite, katera od dveh vzporednih živalskih številk ima prednost in katera bo izbrisana med sinhronizacijo.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Settings Menu VitalControl: Page 2" title="Settings VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Posnetek zaslona 3: Meni nastavitev <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Stran 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Zaradi notranjih razlogov je trenutno mogoče spreminjati le <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. V kasnejših različicah vdelane programske opreme boste lahko spreminjali tudi <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> in <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

S pritiskom na <span style="font-style: italic;">gumb</span> <span style="font-size: 140%">⑧</span> se boste vrnili na [stran 1](#settings-menu-vitalcontrol-page-1) menija nastavitev `{{<T "VitalControl" >}}`.
