---
title: Datasynkronisering mellem VitalControl og Alma Pro
linkTitle: Synkronisering
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Synkroniser dyrene lagret på VitalControl-enheden med dyrene registreret på den automatiske foderautomat og overfør målte værdier registreret med VitalControl-enheden til foderautomaten til evalueringsformål og bedre visualisering.
weight: 20
categories: [Dataudveksling, Alma Pro]
translationKey: alma-pro/synchronisation
maphilight: true
aliases: /vc/sync/da
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

For at udføre synkronisering mellem Alma Pro automatisk foderautomat og VitalControl-enheden, skal du gøre følgende:

## Åbn USB-port

1. Brug en lille skruetrækker til at løsne låseskruen på klappen til USB-porten og fold den ned:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Åbn USB-port" title="Åbn USB-port" /></a>
        <figcaption class="figure-caption fs-6">Figur 1: Åbn USB-port</figcaption>
    </figure>

## Tilslut VitalControl

2. Tænd for VitalControl-enheden ved at trykke på den øverste midterste `On/Off`-knap &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="On/Off-knap" />.

2. Tilslut USB-C stikket på VitalControl-enheden ved hjælp af det medfølgende USB-kabel <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> til USB-A stikket på touchskærmen <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Figur 2: Tilslutning af VitalControl til Alma Pro</figcaption>
</figure>

### Start synkronisering

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Bemærk</span><br>
        For at starte synkroniseringen af VitalControl-enheden skal du være logget på maskinen i brugerrollen <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Ellers er knappen <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> i <a href="#figure3_synchronize_vitalcontrol_alma_pro">Synkroniseringsmenuen</a> deaktiveret.
    </div>
</div>

4. I venstre sidebjælke på touch-terminalen skal du klikke på den anden knap fra toppen <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" id="StartSynchronisation_Digit_1" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Hvis du er i hovedmenuen, hvor ingen sidebjælke er synlig, skal du trykke på knappen &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> for at åbne feeder-menuen.

1. I den højre sidebjælke på touchscreen-terminalen, under symbolet/symbolerne for den/de tilsluttede feeder(e), vises nu symbolet <img src="/digits/2_negative_circled.svg" id="StartSynchronisation_Digit_2" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> for `{{<T "VitalControl" >}}`-enheden. Klik på dette symbol.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
            Hvis symbolet <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> for <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span>-enheden i den højre sidebjælke <span style="font-weight: bold;">ikke</span> vises, er enheden stadig deaktiveret i indstillingerne. I dette tilfælde skal du følge instruktionerne for engangs-<a href="../configuration" >aktivering</a> af enheden.
        </div>
    </div>

1. Synkroniseringsskærmen vil nu blive vist. Klik på knappen <img src="/digits/3_negative_circled.svg" id="StartSynchronisation_Digit_3" width="25" align="middle" alt="circled number 3" title="number 3" /> `{{<T "Synchronize" >}}` i midten nederst for at starte synkronisering med VitalControl-enheden.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;" id="figure3_synchronize_vitalcontrol_alma_pro">
<div style="padding: 12px;">
    <img
        src="../images/synchronise-vitalcontrol-alma-pro.png"
        alt="Synkronisering af VitalControl med Alma Pro automatisk feeder"
        usemap="#syncmap"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid"
        align="bottom"
        title="Synkronisering af VitalControl med Alma Pro automatisk feeder" />
</div>
<map name="syncmap">
    <area shape="rect" coords="15,115,112,190" alt="Feeder" title='{{<T "Feeder" >}}' href="#StartSynchronisation_Digit_1">
    <area shape="rect" coords="844,240,1012,282" alt="Temperature" title='{{<T "VitalControl" >}}' href="#StartSynchronisation_Digit_2">
    <area shape="rect" coords="361,570,612,620" alt="Temperature" title='{{<T "Synchronize" >}}' href="#StartSynchronisation_Digit_3">
</map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Figur 3: Synkronisering af VitalControl med Alma Pro automatisk feeder
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opmærksomhed</span><br>
        Hvis mange dyr skal overføres, kan synkroniseringen tage noget tid. Du kan se synkroniseringsforløbet på displayet af VitalControl-enheden.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Synkronisering VitalControl Alma Pro, fremskridtsindikator" title="Synkroniseringsforløb" /></a>
            <figcaption class="figure-caption fs-6">Figur 4: Synkronisering VitalControl Alma Pro, fremskridtsindikator</figcaption>
        </figure>
    </div>
</div>

## Luk USB-porten

7. Efter vellykket synkronisering, tag USB-kablet ud af USB-porten på touchskærmen. Fold beskyttelsesdækslet på porten op igen og fastgør det ved at stramme låseskruen med en lille skruetrækker.

    <figure class="figure" style="margin-top: 10px;">
        <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Luk USB-porten" title="Luk USB-porten" /></a>
        <figcaption class="figure-caption fs-6">Figur 5: Luk USB-porten igen</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Bemærk</span><br>
            Sørg for at lukke klappen på USB-porten efter hver synkronisering for at forhindre fugt i at trænge ind i porten og for at beskytte porten mod den korrosive luft, der er til stede i din stald!<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Obligatorisk lukning af USB-port" title="Obligatorisk lukning af USB-port" /></a>
                <figcaption class="figure-caption fs-6">Figur 6: Obligatorisk lukning af USB-port</figcaption>
            </figure>
        </div>
    </div>
