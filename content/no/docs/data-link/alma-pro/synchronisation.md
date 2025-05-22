---
title: Datasynkronisering mellom VitalControl og Alma Pro
linkTitle: Synkronisering
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Synkroniser dyrene lagret på VitalControl-enheten med dyr registrert på den automatiske materen og overfør målte verdier registrert med VitalControl-enheten til materen for evalueringsformål og bedre visualisering.
weight: 20
categories: [Datautveksling, Alma Pro]
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

For å utføre synkronisering mellom Alma Pro automatisk mater og VitalControl-enheten, gjør følgende:

## Åpne USB-port

1. Bruk en liten skrutrekker for å løsne låseskruen på klaffen til USB-porten og brett den ned:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Åpne USB-port" title="Åpne USB-port" /></a>
        <figcaption class="figure-caption fs-6">Figur 1: Åpne USB-port</figcaption>
    </figure>

## Koble til VitalControl

2. Slå på VitalControl-enheten ved å trykke på den øverste midtre `På/Av`-knappen &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="På/Av-knapp" />.

2. Koble USB-C-kontakten på VitalControl-enheten ved hjelp av den medfølgende USB-kabelen <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> til USB-A-kontakten på berøringsskjermen <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

    <figure class="figure" style="margin-top: 10px;">
        <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Figur 2: Koble VitalControl til Alma Pro</figcaption>
    </figure>

### Start synkronisering

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Oppmerksomhet</span><br>
        For å starte synkroniseringen av VitalControl-enheten, må du være logget på maskinen i brukerrollen <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Ellers er <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span>-knappen i <a href="#synchronise-vc-ap" >Synkroniseringsmenyen</a> deaktivert.
    </div>
</div>

4. I venstre sidefelt på berøringsterminalen, klikk på den andre knappen fra toppen <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Hvis du er i hovedmenyen der ingen sidefelt er synlig, trykk på knappen &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> for å åpne feeder-menyen.

1. I høyre sidefelt på berøringsskjermen, under symbolet/symbolene for den tilkoblede materen/materne, vises nå symbolet <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> for `{{<T "VitalControl" >}}`-enheten. Klikk på dette symbolet.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Oppmerksomhet</span><br>
            Hvis symbolet <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> for <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span>-enheten i høyre sidefelt <span style="font-weight: bold;">ikke</span> vises, er enheten fortsatt deaktivert i innstillingene. I dette tilfellet, følg instruksjonene for engangs <a href="../configuration" >aktivering</a> av enheten.
        </div>
    </div>

1. Synkroniseringsskjermen vil nå vises. Klikk på knappen <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="circled number 3" title="number 3" /> `{{<T "Synchronize" >}}` i midten nederst for å starte synkronisering med VitalControl-enheten.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronisation VitalControl with Alma Pro" title="Synchronisation VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Figur 3: Synkronisering av VitalControl med Alma Pro automatisk mater</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Oppmerksomhet</span><br>
            Hvis mange dyr må overføres, kan synkroniseringen ta litt tid. Du kan se synkroniseringsfremdriften på skjermen til VitalControl-enheten.<br>
            <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Synkronisering VitalControl Alma Pro, fremdriftsindikator" title="Synkroniseringsfremdrift" /></a>
                <figcaption class="figure-caption fs-6">Figur 4: Synkronisering VitalControl Alma Pro, fremdriftsindikator</figcaption>
            </figure>
        </div>
    </div>

## Lukk USB-porten

7. Etter vellykket synkronisering, trekk ut USB-kabelen fra USB-porten på berøringsskjermen. Brett beskyttelsesdekselet til porten opp igjen og fest det ved å stramme låseskruen med en liten skrutrekker.

    <figure class="figure" style="margin-top: 10px;">
        <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Lukk USB-porten" title="Lukk USB-porten" /></a>
        <figcaption class="figure-caption fs-6">Figur 5: Lukk USB-porten igjen</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Merk</span><br>
            Sørg for å lukke klaffen til USB-porten etter hver synkronisering for å forhindre at fuktighet kommer inn i porten og for å beskytte porten mot den korrosive luften i fjøset ditt!<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Obligatorisk lukking av USB-port" title="Obligatorisk lukking av USB-port" /></a>
                <figcaption class="figure-caption fs-6">Figur 6: Obligatorisk lukking av USB-port</figcaption>
            </figure>
        </div>
    </div>
