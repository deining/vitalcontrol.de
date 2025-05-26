---
title: Andmete sünkroniseerimine VitalControli ja Alma Pro vahel
linkTitle: Sünkroniseerimine
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Sünkroniseeri VitalControl seadmel salvestatud loomad automaatse söötja registreeritud loomadega ning edasta VitalControl seadmega mõõdetud väärtused söötjale hindamise ja parema visualiseerimise eesmärgil.
weight: 20
categories: [Andmevahetus, Alma Pro]
translationKey: alma-pro/synchronisation
aliases: /vc/sync/et
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Alma Pro automaatse söötja ja VitalControl seadme vahelise sünkroniseerimise läbiviimiseks toimige järgmiselt:

## Ava USB port

1. Kasutage väikest kruvikeerajat, et lahti keerata USB pordi klapi lukustuskruvi ja klapp alla keerata:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Ava USB port" title="Ava USB port" /></a>
        <figcaption class="figure-caption fs-6">Joonis 1: Ava USB port</figcaption>
    </figure>

## Ühenda VitalControl

2. Lülitage VitalControl seade sisse, vajutades ülemist keskmist `On/Off` nuppu &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="On/Off nupp" />.

2. Ühendage VitalControl seadme USB-C pesa kaasasoleva USB-kaabli abil <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Ringikujuline number 1" title="Number 1" /> puuteekraani USB-A pesaga <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Ringikujuline number 2" title="Number 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Ühenda VitalControl Alma Pro-ga" title="Ühendus VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Joonis 2: VitalControli ühendamine Alma Pro-ga</figcaption>
</figure>

### Alusta sünkroniseerimist

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
        VitalControl seadme sünkroniseerimise alustamiseks peate olema masinasse sisse logitud kasutaja rollis <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Vastasel juhul on <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> nupp <a href="#synchronise-vc-ap" >Sünkroniseerimise menüüs</a> keelatud.
    </div>
</div>

4. Puuteterminali vasakpoolses külgribas klõpsake teist nuppu ülevalt <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menüü" title="Feeder menüü"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Number 1" title="Number 1" />. Kui olete põhimenüüs, kus külgriba pole nähtav, vajutage nuppu &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menüü" title="Feeder menüü"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span>, et avada feeder menüü.

1. Puutetundliku terminali paremas külgribas, ühendatud sööturite sümbolite all, kuvatakse nüüd sümbol <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> seadme `{{<T "VitalControl" >}}` jaoks. Klõpsake sellel sümbolil.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
            Kui seadme <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> sümbolit <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> paremas külgribas <span style="font-weight: bold;">ei</span> kuvata, on seade seadetes veel deaktiveeritud. Sel juhul järgige seadme ühekordse <a href="../configuration" >aktiveerimise</a> juhiseid.
        </div>
    </div>

1. Nüüd ilmub sünkroonimise ekraan. Klõpsake keskel allosas nuppu <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="circled number 3" title="number 3" /> `{{<T "Synchronize" >}}`, et alustada sünkroonimist VitalControl seadmega.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronisation VitalControl with Alma Pro" title="Synchronisation VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Joonis 3: VitalControl sünkroonimine Alma Pro automaatsööturiga</figcaption>
    </figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
        Kui on vaja üle kanda palju loomi, võib sünkroonimine võtta aega. Sünkroonimise edenemist saate vaadata VitalControl seadme ekraanilt.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Sünkroonimine VitalControl Alma Pro, edenemise indikaator" title="Sünkroonimise edenemine" /></a>
            <figcaption class="figure-caption fs-6">Joonis 4: Sünkroonimine VitalControl Alma Pro, edenemise indikaator</figcaption>
        </figure>
    </div>
</div>

## USB-pordi sulgemine

7. Pärast edukat sünkroonimist eemaldage USB-kaabel puuteekraani USB-pordist. Kallutage pordi kaitsekate tagasi üles ja kinnitage see, pingutades lukustuskruvi väikese kruvikeerajaga.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="USB-pordi sulgemine" title="USB-pordi sulgemine" /></a>
    <figcaption class="figure-caption fs-6">Joonis 5: USB-pordi uuesti sulgemine</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Märkus</span><br>
        Veenduge, et sulgete USB-pordi klapi pärast iga sünkroonimist, et vältida niiskuse sattumist pordisse ja kaitsta porti teie laudas esineva söövitava õhu eest!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="USB-pordi kohustuslik sulgemine" title="USB-pordi kohustuslik sulgemine" /></a>
            <figcaption class="figure-caption fs-6">Joonis 6: USB-pordi kohustuslik sulgemine</figcaption>
        </figure>
    </div>
</div>
