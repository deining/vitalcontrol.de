---
title: Sinhronizacija podatkov med VitalControl in Alma Pro
linkTitle: Sinhronizacija
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Sinhronizirajte živali, shranjene na napravi VitalControl, z živalmi, registriranimi na avtomatskem hranilniku, in prenesite izmerjene vrednosti, zabeležene z napravo VitalControl, na hranilnik za namene ocenjevanja in boljšo vizualizacijo.
weight: 20
categories: [Izmenjava podatkov, Alma Pro]
translationKey: alma-pro/synchronisation
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Za izvedbo sinhronizacije med avtomatskim hranilnikom Alma Pro in napravo VitalControl sledite naslednjim korakom:

## Odprite USB priključek

1. Uporabite majhen izvijač, da sprostite zaporni vijak na pokrovu USB priključka in ga zložite navzdol:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Odprite USB priključek" title="Odprite USB priključek" /></a>
        <figcaption class="figure-caption fs-6">Slika 1: Odprite USB priključek</figcaption>
    </figure>

## Povežite VitalControl

2. Vklopite napravo VitalControl s pritiskom na zgornji sredinski gumb `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Gumb On/Off" />.

2. Povežite USB-C vtičnico naprave VitalControl z uporabo priloženega USB kabla <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Obkrožena številka 1" title="Številka 1" /> z USB-A vtičnico na zaslonu na dotik <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Obkrožena številka 2" title="Številka 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Povezava VitalControl z Alma Pro" title="Povezava VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Slika 2: Povezovanje VitalControl z Alma Pro</figcaption>
</figure>

### Začni sinhronizacijo

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Da bi začeli sinhronizacijo naprave VitalControl, morate biti prijavljeni na napravo v uporabniški vlogi <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. V nasprotnem primeru je gumb <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> v <a href="#synchronise-vc-ap" >meniju za sinhronizacijo</a> onemogočen.
    </div>
</div>

4. V levem stranskem meniju na dotik terminala kliknite drugi gumb od zgoraj <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Meni za podajalnik" title="Meni za podajalnik"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Številka 1" title="Številka 1" />. Če ste v glavnem meniju, kjer stranski meni ni viden, pritisnite gumb &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Meni za podajalnik" title="Meni za podajalnik"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> za odprtje menija za podajalnik.

1. V desni stranski vrstici na zaslonu na dotik, pod simbolom(i) za priključeni podajalnik(e), je zdaj prikazan simbol <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Številka 2 v krogu" title="Številka 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="Naprava VitalControl" title="VitalControl"/> za napravo `{{<T "VitalControl" >}}`. Kliknite na ta simbol.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
            Če simbol <img src="/icons/device.svg" width="25" align="bottom" alt="Naprava VitalControl" title="VitalControl"/> za napravo <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> v desni stranski vrstici <span style="font-weight: bold;">ni</span> prikazan, je naprava še vedno deaktivirana v nastavitvah. V tem primeru sledite navodilom za enkratno <a href="../configuration" >aktivacijo</a> naprave.
        </div>
    </div>

1. Zdaj se bo prikazal zaslon za sinhronizacijo. Kliknite na gumb <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="številka 3 v krogu" title="številka 3" /> `{{<T "Synchronize" >}}` na sredini spodaj, da začnete sinhronizacijo z napravo VitalControl.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Sinhronizacija VitalControl z Alma Pro" title="Sinhronizacija VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Slika 3: Sinhronizacija VitalControl z avtomatskim podajalnikom Alma Pro</figcaption>
    </figure>

```markdown
<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Če je treba prenesti veliko živali, lahko sinhronizacija traja nekaj časa. Napredek sinhronizacije lahko vidite na zaslonu naprave VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Sinhronizacija VitalControl Alma Pro, indikator napredka" title="Napredek sinhronizacije" /></a>
            <figcaption class="figure-caption fs-6">Slika 4: Sinhronizacija VitalControl Alma Pro, indikator napredka</figcaption>
        </figure>
    </div>
</div>

## Zaprite USB priključek

7. Po uspešni sinhronizaciji iztaknite USB kabel iz USB priključka na zaslonu na dotik. Zložite zaščitni pokrov priključka nazaj in ga pritrdite z zategovanjem zapornega vijaka z majhnim izvijačem.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Zaprite USB priključek" title="Zaprite USB priključek" /></a>
    <figcaption class="figure-caption fs-6">Slika 5: Ponovno zaprite USB priključek</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opomba</span><br>
        Poskrbite, da po vsaki sinhronizaciji zaprete pokrov USB priključka, da preprečite vdor vlage v priključek in zaščitite priključek pred korozivnim zrakom v vaši hlevu!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Obvezno zapiranje USB priključka" title="Obvezno zapiranje USB priključka" /></a>
            <figcaption class="figure-caption fs-6">Slika 6: Obvezno zapiranje USB priključka</figcaption>
        </figure>
    </div>
</div>
```

Zdi se, da ni bilo nobene vsebine za prevod. Prosimo, prilepite vsebino, ki jo želite prevesti.
