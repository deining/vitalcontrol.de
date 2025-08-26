---
title: Sinhronizacija podataka između VitalControl i Alma Pro
linkTitle: Sinhronizacija
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Sinhronizirajte životinje pohranjene na uređaju VitalControl sa životinjama registrovanim na automatskom hranilici i prenesite izmjerene vrijednosti zabilježene uređajem VitalControl na hranilicu za svrhe evaluacije i bolje vizualizacije.
weight: 20
categories: [Razmjena podataka, Alma Pro]
translationKey: alma-pro/synchronisation
maphilight: true
aliases: /vc/sync/bs
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Da biste izvršili sinhronizaciju između automatskog hranilice Alma Pro i uređaja VitalControl, postupite na sljedeći način:

## Otvorite USB port

1. Koristite mali odvijač da olabavite sigurnosni vijak na poklopcu USB porta i preklopite ga dolje:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Otvorite USB port" title="Otvorite USB port" /></a>
        <figcaption class="figure-caption fs-6">Slika 1: Otvorite USB port</figcaption>
    </figure>

## Povežite VitalControl

2. Uključite uređaj VitalControl pritiskom na gornje središnje dugme `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="On/Off dugme" />.

2. Povežite USB-C utičnicu uređaja VitalControl koristeći priloženi USB kabl <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> sa USB-A utičnicom ekrana osjetljivog na dodir <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Slika 2: Povezivanje VitalControl sa Alma Pro</figcaption>
</figure>

### Pokreni sinhronizaciju

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Da biste pokrenuli sinhronizaciju uređaja VitalControl, morate biti prijavljeni na mašinu u korisničkoj ulozi <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. U suprotnom, dugme <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> u <a href="#synchronise-vc-ap" >meniju za sinhronizaciju</a> je onemogućeno.
    </div>
</div>

4. U lijevoj bočnoj traci terminala na dodir, kliknite drugo dugme od vrha <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" id="StartSynchronisation_Digit_1" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Ako ste u glavnom meniju gdje bočna traka nije vidljiva, pritisnite dugme &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> da otvorite feeder meni.

1. U desnom bočnom panelu terminala na dodir, ispod simbola za povezani feeder, sada je prikazan simbol <img src="/digits/2_negative_circled.svg" id="StartSynchronisation_Digit_2" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> za uređaj `{{<T "VitalControl" >}}`. Kliknite na ovaj simbol.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
            Ako simbol <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> za uređaj <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> u desnom bočnom panelu <span style="font-weight: bold;">nije</span> prikazan, uređaj je još uvijek deaktiviran u postavkama. U tom slučaju, slijedite upute za jednokratnu <a href="../configuration" >aktivaciju</a> uređaja.
        </div>
    </div>

1. Sada će se pojaviti ekran za sinhronizaciju. Kliknite na dugme <img src="/digits/3_negative_circled.svg" id="StartSynchronisation_Digit_3" width="25" align="middle" alt="circled number 3" title="number 3" /> `{{<T "Synchronize" >}}` u sredini na dnu da biste započeli sinhronizaciju s uređajem VitalControl.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
<div style="padding: 12px;">
    <img
        src="../images/synchronise-vitalcontrol-alma-pro.png"
        alt="Sinhronizacija VitalControl - Alma Pro"
        usemap="#syncmap"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid"
        align="bottom"
        title="Sinhronizacija VitalControl - Alma Pro" />
</div>
<map name="syncmap">
    <area shape="rect" coords="15,115,112,190" alt="Feeder" title='{{<T "Feeder" >}}' href="#StartSynchronisation_Digit_1">
    <area shape="rect" coords="844,240,1012,282" alt="Temperature" title='{{<T "VitalControl" >}}' href="#StartSynchronisation_Digit_2">
    <area shape="rect" coords="361,570,612,620" alt="Temperature" title='{{<T "Synchronize" >}}' href="#StartSynchronisation_Digit_3">
</map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Slika 3: Sinhronizacija VitalControl-a sa Alma Pro automatskom hranilicom
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako je potrebno prenijeti mnogo životinja, sinhronizacija može potrajati neko vrijeme. Možete vidjeti napredak sinhronizacije na ekranu uređaja VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Sinhronizacija VitalControl Alma Pro, indikator napretka" title="Napredak sinhronizacije" /></a>
            <figcaption class="figure-caption fs-6">Slika 4: Sinhronizacija VitalControl Alma Pro, indikator napretka</figcaption>
        </figure>
    </div>
</div>

## Zatvorite USB port

7. Nakon uspješne sinhronizacije, isključite USB kabl iz USB porta na ekranu osjetljivom na dodir. Preklopite zaštitni poklopac porta i osigurajte ga zatezanjem vijka za zaključavanje pomoću malog odvijača.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Zatvorite USB port" title="Zatvorite USB port" /></a>
    <figcaption class="figure-caption fs-6">Slika 5: Ponovno zatvorite USB port</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Napomena</span><br>
        Obavezno zatvorite poklopac USB porta nakon svake sinhronizacije kako biste spriječili ulazak vlage u port i zaštitili port od korozivnog zraka prisutnog u vašoj štali!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Obavezno zatvaranje USB porta" title="Obavezno zatvaranje USB porta" /></a>
            <figcaption class="figure-caption fs-6">Slika 6: Obavezno zatvaranje USB porta</figcaption>
        </figure>
    </div>
</div>
