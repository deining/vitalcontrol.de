---
title: Synchronizacja danych między VitalControl a Alma Pro
linkTitle: Synchronizacja
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Synchronizuj zwierzęta zapisane na urządzeniu VitalControl ze zwierzętami zarejestrowanymi na automatycznym karmniku i przenieś zmierzone wartości zarejestrowane za pomocą urządzenia VitalControl do karmnika w celu oceny i lepszej wizualizacji.
weight: 20
categories: [Wymiana danych, Alma Pro]
translationKey: alma-pro/synchronisation
maphilight: true
aliases: /vc/sync/pl
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Aby przeprowadzić synchronizację między automatycznym karmnikiem Alma Pro a urządzeniem VitalControl, postępuj w następujący sposób:

## Otwórz port USB

1. Użyj małego śrubokręta, aby poluzować śrubę blokującą na klapce portu USB i otwórz ją:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Otwórz port USB" title="Otwórz port USB" /></a>
        <figcaption class="figure-caption fs-6">Rysunek 1: Otwórz port USB</figcaption>
    </figure>

## Podłącz VitalControl

2. Włącz urządzenie VitalControl, naciskając górny środkowy przycisk `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Przycisk On/Off" />.

2. Podłącz gniazdo USB-C urządzenia VitalControl za pomocą dostarczonego kabla USB <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Cyfra 1 w kółku" title="Cyfra 1" /> do gniazda USB-A ekranu dotykowego <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Cyfra 2 w kółku" title="Cyfra 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Podłącz VitalControl do Alma Pro" title="Połączenie VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Rysunek 2: Podłączanie VitalControl do Alma Pro</figcaption>
</figure>

### Rozpocznij synchronizację

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Aby rozpocząć synchronizację urządzenia VitalControl, musisz być zalogowany na maszynie w roli użytkownika <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. W przeciwnym razie przycisk <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> w <a href="#figure3_synchronize_vitalcontrol_alma_pro">menu Synchronizacji</a> jest wyłączony.
    </div>
</div>

4. W lewym pasku bocznym terminala dotykowego kliknij drugi przycisk od góry <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Menu podajnika" title="Menu podajnika"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" id="StartSynchronisation_Digit_1" width="25" align="middle" alt="Cyfra 1" title="Cyfra 1" />. Jeśli jesteś w menu głównym, gdzie pasek boczny nie jest widoczny, naciśnij przycisk &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Menu podajnika" title="Menu podajnika"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> aby otworzyć menu podajnika.

1. W prawym pasku bocznym terminala dotykowego, poniżej symbolu (symboli) podłączonego podajnika (podajników), wyświetlany jest teraz symbol <img src="/digits/2_negative_circled.svg" id="StartSynchronisation_Digit_2" width="25" align="middle" alt="Cyfra 2 w kółku" title="Cyfra 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="Urządzenie VitalControl" title="VitalControl"/> dla urządzenia `{{<T "VitalControl" >}}`. Kliknij na ten symbol.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
            Jeśli symbol <img src="/icons/device.svg" width="25" align="bottom" alt="Urządzenie VitalControl" title="VitalControl"/> dla urządzenia <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> w prawym pasku bocznym <span style="font-weight: bold;">nie</span> jest wyświetlany, urządzenie jest nadal dezaktywowane w ustawieniach. W takim przypadku postępuj zgodnie z instrukcjami dotyczącymi jednorazowej <a href="../configuration" >aktywacji</a> urządzenia.
        </div>
    </div>

1. Teraz pojawi się ekran synchronizacji. Kliknij przycisk <img src="/digits/3_negative_circled.svg"  id="StartSynchronisation_Digit_3" width="25" align="middle" alt="cyfra 3 w kółku" title="cyfra 3" /> `{{<T "Synchronize" >}}` na środku u dołu, aby rozpocząć synchronizację z urządzeniem VitalControl.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;" id="figure3_synchronize_vitalcontrol_alma_pro">
<div style="padding: 12px;">
    <img
        src="../images/synchronise-vitalcontrol-alma-pro.png"
        alt="Synchronizacja VitalControl z automatycznym podajnikiem Alma Pro"
        usemap="#syncmap"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid"
        align="bottom"
        title="Synchronizacja VitalControl z automatycznym podajnikiem Alma Pro" />
</div>
<map name="syncmap">
    <area shape="rect" coords="15,115,112,190" alt="Feeder" title='{{<T "Feeder" >}}' href="#StartSynchronisation_Digit_1">
    <area shape="rect" coords="844,240,1012,282" alt="Temperature" title='{{<T "VitalControl" >}}' href="#StartSynchronisation_Digit_2">
    <area shape="rect" coords="361,570,612,620" alt="Temperature" title='{{<T "Synchronize" >}}' href="#StartSynchronisation_Digit_3">
</map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Rysunek 3: Synchronizacja VitalControl z automatycznym podajnikiem Alma Pro
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Jeśli wiele zwierząt musi zostać przeniesionych, synchronizacja może zająć trochę czasu. Postęp synchronizacji można zobaczyć na wyświetlaczu urządzenia VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Synchronizacja VitalControl Alma Pro, wskaźnik postępu" title="Postęp synchronizacji" /></a>
            <figcaption class="figure-caption fs-6">Rysunek 4: Synchronizacja VitalControl Alma Pro, wskaźnik postępu</figcaption>
        </figure>
    </div>
</div>

## Zamknij port USB

7. Po pomyślnej synchronizacji odłącz kabel USB od portu USB na ekranie dotykowym. Złóż z powrotem osłonę ochronną portu i zabezpiecz ją, dokręcając śrubę blokującą za pomocą małego śrubokręta.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Zamknij port USB" title="Zamknij port USB" /></a>
    <figcaption class="figure-caption fs-6">Rysunek 5: Ponowne zamknięcie portu USB</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Upewnij się, że po każdej synchronizacji zamkniesz klapkę portu USB, aby zapobiec przedostawaniu się wilgoci do portu i chronić port przed korozyjnym powietrzem obecnym w Twojej oborze!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Obowiązkowe zamknięcie portu USB" title="Obowiązkowe zamknięcie portu USB" /></a>
            <figcaption class="figure-caption fs-6">Rysunek 6: Obowiązkowe zamknięcie portu USB</figcaption>
        </figure>
    </div>
</div>
