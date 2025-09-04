---
title: Synchronizace dat mezi VitalControl a Alma Pro
linkTitle: Synchronizace
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Synchronizujte zvířata uložená na zařízení VitalControl se zvířaty registrovanými na automatickém krmítku a přeneste naměřené hodnoty zaznamenané zařízením VitalControl do krmítka pro účely vyhodnocení a lepší vizualizace.
weight: 20
categories: [Výměna dat, Alma Pro]
translationKey: alma-pro/synchronisation
maphilight: true
aliases: /vc/sync/cs
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Pro provedení synchronizace mezi automatickým krmítkem Alma Pro a zařízením VitalControl postupujte následovně:

## Otevřete USB port

1. Pomocí malého šroubováku uvolněte zajišťovací šroub na krytu USB portu a sklopte jej dolů:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Otevřete USB port" title="Otevřete USB port" /></a>
        <figcaption class="figure-caption fs-6">Obrázek 1: Otevřete USB port</figcaption>
    </figure>

## Připojte VitalControl

2. Zapněte zařízení VitalControl stisknutím horního středového tlačítka `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Tlačítko On/Off" />.

2. Připojte USB-C konektor zařízení VitalControl pomocí dodaného USB kabelu <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> k USB-A konektoru dotykové obrazovky <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Obrázek 2: Připojení VitalControl k Alma Pro</figcaption>
</figure>

### Zahájení synchronizace

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Aby bylo možné zahájit synchronizaci zařízení VitalControl, musíte být přihlášeni k zařízení v uživatelské roli <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Jinak je tlačítko <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> v <a href="#figure3_synchronize_vitalcontrol_alma_pro">menu Synchronizace</a> deaktivováno.
    </div>
</div>

4. V levém postranním panelu dotykového terminálu klikněte na druhé tlačítko shora <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" id="StartSynchronisation_Digit_1" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Pokud jste v hlavním menu, kde není viditelný žádný postranní panel, stiskněte tlačítko &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> pro otevření menu podavače.

1. V pravém postranním panelu dotykového terminálu, pod symbolem/symboly pro připojený podavač/podavače, je nyní zobrazen symbol <img src="/digits/2_negative_circled.svg" id="StartSynchronisation_Digit_2" width="25" align="middle" alt="Číslo 2 v kruhu" title="Číslo 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="Zařízení VitalControl" title="VitalControl"/> pro zařízení `{{<T "VitalControl" >}}`. Klikněte na tento symbol.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
            Pokud symbol <img src="/icons/device.svg" width="25" align="bottom" alt="Zařízení VitalControl" title="VitalControl"/> pro zařízení <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> v pravém postranním panelu <span style="font-weight: bold;">není</span> zobrazen, zařízení je stále deaktivováno v nastavení. V tomto případě postupujte podle pokynů pro jednorázovou <a href="../configuration" >aktivaci</a> zařízení.
        </div>
    </div>

1. Nyní se objeví obrazovka synchronizace. Klikněte na tlačítko <img src="/digits/3_negative_circled.svg" id="StartSynchronisation_Digit_3" width="25" align="middle" alt="číslo 3 v kruhu" title="číslo 3" /> `{{<T "Synchronize" >}}` uprostřed dole pro zahájení synchronizace se zařízením VitalControl.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;" id="figure3_synchronize_vitalcontrol_alma_pro">
<div style="padding: 12px;">
    <img
        src="../images/synchronise-vitalcontrol-alma-pro.png"
        alt="Synchronizace VitalControl s Alma Pro"
        usemap="#syncmap"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid"
        align="bottom"
        title="Synchronizace VitalControl s Alma Pro" />
</div>
<map name="syncmap">
    <area shape="rect" coords="15,115,112,190" alt="Feeder" title='{{<T "Feeder" >}}' href="#StartSynchronisation_Digit_1">
    <area shape="rect" coords="844,240,1012,282" alt="Temperature" title='{{<T "VitalControl" >}}' href="#StartSynchronisation_Digit_2">
    <area shape="rect" coords="361,570,612,620" alt="Temperature" title='{{<T "Synchronize" >}}' href="#StartSynchronisation_Digit_3">
</map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Obrázek 3: Synchronizace VitalControl s automatickým podavačem Alma Pro
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Pokud je potřeba přenést mnoho zvířat, synchronizace může trvat delší dobu. Průběh synchronizace můžete sledovat na displeji zařízení VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Synchronizace VitalControl Alma Pro, indikátor průběhu" title="Průběh synchronizace" /></a>
            <figcaption class="figure-caption fs-6">Obrázek 4: Synchronizace VitalControl Alma Pro, indikátor průběhu</figcaption>
        </figure>
    </div>
</div>

## Zavřít USB port

7. Po úspěšné synchronizaci odpojte USB kabel z USB portu na dotykové obrazovce. Ochranný kryt portu znovu zaklapněte a zajistěte utažením zajišťovacího šroubu pomocí malého šroubováku.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Zavřít USB port" title="Zavřít USB port" /></a>
    <figcaption class="figure-caption fs-6">Obrázek 5: Znovu zavřít USB port</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Poznámka</span><br>
        Ujistěte se, že po každé synchronizaci zavřete kryt USB portu, abyste zabránili vniknutí vlhkosti do portu a ochránili port před korozivním vzduchem ve vaší stáji!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Povinné zavření USB portu" title="Povinné zavření USB portu" /></a>
            <figcaption class="figure-caption fs-6">Obrázek 6: Povinné zavření USB portu</figcaption>
        </figure>
    </div>
</div>
