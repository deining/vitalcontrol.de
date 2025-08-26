---
title: Datasynkronisering mellan VitalControl och Alma Pro
linkTitle: Synkronisering
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Synkronisera djuren lagrade på VitalControl-enheten med djur registrerade på den automatiska mataren och överför uppmätta värden registrerade med VitalControl-enheten till mataren för utvärderingsändamål och bättre visualisering.
weight: 20
categories: [Datautbyte, Alma Pro]
translationKey: alma-pro/synchronisation
maphilight: true
aliases: /vc/sync/sv
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

För att utföra synkronisering mellan Alma Pro automatisk matare och VitalControl-enheten, gör följande:

## Öppna USB-port

1. Använd en liten skruvmejsel för att lossa låsskruven på USB-portens lucka och fäll ner den:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Öppna USB-port" title="Öppna USB-port" /></a>
        <figcaption class="figure-caption fs-6">Figur 1: Öppna USB-port</figcaption>
    </figure>

## Anslut VitalControl

2. Slå på VitalControl-enheten genom att trycka på den övre mitten `On/Off` knappen &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="On/Off-knapp" />.

2. Anslut USB-C-uttaget på VitalControl-enheten med den medföljande USB-kabeln <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> till USB-A-uttaget på pekskärmen <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Figur 2: Ansluta VitalControl till Alma Pro</figcaption>
</figure>

### Starta synkronisering

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uppmärksamhet</span><br>
        För att starta synkroniseringen av VitalControl-enheten måste du vara inloggad på maskinen i användarrollen <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Annars är knappen <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> i <a href="#synchronise-vc-ap" >Synkroniseringsmenyn</a> inaktiverad.
    </div>
</div>

4. I den vänstra sidofältet på pekterminalen, klicka på den andra knappen uppifrån <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" id="StartSynchronisation_Digit_1" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Om du är i huvudmenyn där inget sidofält är synligt, tryck på knappen &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> för att öppna feeder-menyn.

1. I den högra sidofältet på pekskärmsterminalen, under symbolen/symbolerna för den anslutna mataren/matarna, visas nu symbolen <img src="/digits/2_negative_circled.svg" id="StartSynchronisation_Digit_2" width="25" align="middle" alt="Siffra 2 i cirkel" title="Siffra 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl-enhet" title="VitalControl"/> för `{{<T "VitalControl" >}}`-enheten. Klicka på denna symbol.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Uppmärksamhet</span><br>
            Om symbolen <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl-enhet" title="VitalControl"/> för <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span>-enheten i det högra sidofältet <span style="font-weight: bold;">inte</span> visas, är enheten fortfarande inaktiverad i inställningarna. Följ i så fall instruktionerna för engångs<a href="../configuration" >aktivering</a> av enheten.
        </div>
    </div>

1. Synkroniseringsskärmen visas nu. Klicka på knappen <img src="/digits/3_negative_circled.svg" id="StartSynchronisation_Digit_3" width="25" align="middle" alt="cirkulerad siffra 3" title="siffra 3" /> `{{<T "Synchronize" >}}` i mitten längst ner för att starta synkronisering med VitalControl-enheten.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
<div style="padding: 12px;">
    <img
        src="../images/synchronise-vitalcontrol-alma-pro.png"
        alt="Synkronisering av VitalControl med Alma Pro automatisk matare"
        usemap="#syncmap"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid"
        align="bottom"
        title="Synkronisering av VitalControl med Alma Pro automatisk matare" />
</div>
<map name="syncmap">
    <area shape="rect" coords="15,115,112,190" alt="Feeder" title='{{<T "Feeder" >}}' href="#StartSynchronisation_Digit_1">
    <area shape="rect" coords="844,240,1012,282" alt="Temperature" title='{{<T "VitalControl" >}}' href="#StartSynchronisation_Digit_2">
    <area shape="rect" coords="361,570,612,620" alt="Temperature" title='{{<T "Synchronize" >}}' href="#StartSynchronisation_Digit_3">
</map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Figur 3: Synkronisering av VitalControl med Alma Pro automatisk matare
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uppmärksamhet</span><br>
        Om många djur behöver överföras kan synkroniseringen ta lite tid. Du kan se synkroniseringsförloppet på displayen på VitalControl-enheten.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Synkronisering VitalControl Alma Pro, förloppsindikator" title="Synkroniseringsförlopp" /></a>
            <figcaption class="figure-caption fs-6">Figur 4: Synkronisering VitalControl Alma Pro, förloppsindikator</figcaption>
        </figure>
    </div>
</div>

## Stäng USB-porten

7. Efter lyckad synkronisering, koppla ur USB-kabeln från USB-porten på pekskärmen. Fäll upp skyddslocket på porten och säkra det genom att dra åt låsskruven med en liten skruvmejsel.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Stäng USB-porten" title="Stäng USB-porten" /></a>
    <figcaption class="figure-caption fs-6">Figur 5: Stäng USB-porten igen</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Notera</span><br>
        Se till att stänga luckan till USB-porten efter varje synkronisering för att förhindra att fukt tränger in i porten och för att skydda porten från den korrosiva luften i din ladugård!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Obligatorisk stängning av USB-port" title="Obligatorisk stängning av USB-port" /></a>
            <figcaption class="figure-caption fs-6">Figur 6: Obligatorisk stängning av USB-port</figcaption>
        </figure>
    </div>
</div>
