---
title: Sinkronizacija podataka između VitalControl i Alma Pro
linkTitle: Sinkronizacija
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Sinkronizirajte životinje pohranjene na uređaju VitalControl s životinjama registriranim na automatskom hranilici i prenesite izmjerene vrijednosti zabilježene uređajem VitalControl na hranilicu za potrebe evaluacije i bolje vizualizacije.
weight: 20
categories: [Razmjena podataka, Alma Pro]
translationKey: alma-pro/synchronisation
maphilight: true
aliases: /vc/sync/hr
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Za provođenje sinkronizacije između automatskog hranilice Alma Pro i uređaja VitalControl, postupite na sljedeći način:

## Otvorite USB priključak

1. Koristite mali odvijač za otpuštanje vijka za zaključavanje na poklopcu USB priključka i preklopite ga prema dolje:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Otvorite USB priključak" title="Otvorite USB priključak" /></a>
        <figcaption class="figure-caption fs-6">Slika 1: Otvorite USB priključak</figcaption>
    </figure>

## Povežite VitalControl

2. Uključite uređaj VitalControl pritiskom na gornju središnju tipku `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="On/Off tipka" />.

2. Spojite USB-C utičnicu uređaja VitalControl koristeći priloženi USB kabel <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> s USB-A utičnicom zaslona osjetljivog na dodir <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Slika 2: Spajanje VitalControl na Alma Pro</figcaption>
</figure>

### Pokreni sinkronizaciju

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Da biste pokrenuli sinkronizaciju uređaja VitalControl, morate biti prijavljeni na uređaj u korisničkoj ulozi <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Inače, gumb <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> u <a href="#figure3_synchronize_vitalcontrol_alma_pro">izborniku Sinkronizacija</a> je onemogućen.
    </div>
</div>

4. U lijevom bočnom izborniku dodirnog terminala, kliknite drugi gumb odozgo <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" id="StartSynchronisation_Digit_1" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Ako ste u glavnom izborniku gdje bočni izbornik nije vidljiv, pritisnite gumb &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> za otvaranje izbornika za hranjenje.

1. U desnoj bočnoj traci terminala osjetljivog na dodir, ispod simbola povezanog hranilice, sada je prikazan simbol <img src="/digits/2_negative_circled.svg" id="StartSynchronisation_Digit_2" width="25" align="middle" alt="Broj 2 u krugu" title="Broj 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl uređaj" title="VitalControl"/> za uređaj `{{<T "VitalControl" >}}`. Kliknite na ovaj simbol.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
            Ako simbol <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl uređaj" title="VitalControl"/> za uređaj <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> u desnoj bočnoj traci <span style="font-weight: bold;">nije</span> prikazan, uređaj je još uvijek deaktiviran u postavkama. U tom slučaju, slijedite upute za jednokratnu <a href="../configuration" >aktivaciju</a> uređaja.
        </div>
    </div>

1. Sada će se pojaviti zaslon za sinkronizaciju. Kliknite na gumb <img src="/digits/3_negative_circled.svg" id="StartSynchronisation_Digit_3" width="25" align="middle" alt="broj 3 u krugu" title="broj 3" /> `{{<T "Synchronize" >}}` u sredini na dnu za pokretanje sinkronizacije s uređajem VitalControl.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;" id="figure3_synchronize_vitalcontrol_alma_pro">
<div style="padding: 12px;">
    <img
        src="../images/synchronise-vitalcontrol-alma-pro.png"
        alt="Sinkronizacija VitalControl s automatskom hranilicom Alma Pro"
        usemap="#syncmap"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid"
        align="bottom"
        title="Sinkronizacija VitalControl s automatskom hranilicom Alma Pro" />
</div>
<map name="syncmap">
    <area shape="rect" coords="15,115,112,190" alt="Feeder" title='{{<T "Feeder" >}}' href="#StartSynchronisation_Digit_1">
    <area shape="rect" coords="844,240,1012,282" alt="Temperature" title='{{<T "VitalControl" >}}' href="#StartSynchronisation_Digit_2">
    <area shape="rect" coords="361,570,612,620" alt="Temperature" title='{{<T "Synchronize" >}}' href="#StartSynchronisation_Digit_3">
</map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Slika 3: Sinkronizacija VitalControl s automatskom hranilicom Alma Pro
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pažnja</span><br>
        Ako je potrebno prenijeti mnogo životinja, sinkronizacija može potrajati neko vrijeme. Napredak sinkronizacije možete vidjeti na zaslonu uređaja VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Sinkronizacija VitalControl Alma Pro, indikator napretka" title="Napredak sinkronizacije" /></a>
            <figcaption class="figure-caption fs-6">Slika 4: Sinkronizacija VitalControl Alma Pro, indikator napretka</figcaption>
        </figure>
    </div>
</div>

## Zatvorite USB priključak

7. Nakon uspješne sinkronizacije, odspojite USB kabel iz USB priključka na zaslonu osjetljivom na dodir. Preklopite zaštitni poklopac priključka natrag i osigurajte ga zatezanjem vijka za zaključavanje pomoću malog odvijača.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Zatvorite USB priključak" title="Zatvorite USB priključak" /></a>
    <figcaption class="figure-caption fs-6">Slika 5: Ponovno zatvorite USB priključak</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Napomena</span><br>
        Obavezno zatvorite poklopac USB priključka nakon svake sinkronizacije kako biste spriječili ulazak vlage u priključak i zaštitili ga od korozivnog zraka prisutnog u vašoj štali!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Obavezno zatvaranje USB priključka" title="Obavezno zatvaranje USB priključka" /></a>
            <figcaption class="figure-caption fs-6">Slika 6: Obavezno zatvaranje USB priključka</figcaption>
        </figure>
    </div>
</div>
