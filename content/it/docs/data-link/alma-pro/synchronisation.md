---
title: Sincronizzazione dei dati tra VitalControl e Alma Pro
linkTitle: Sincronizzazione
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Sincronizza gli animali memorizzati sul dispositivo VitalControl con gli animali registrati sul distributore automatico e trasferisci i valori misurati registrati con il dispositivo VitalControl al distributore per scopi di valutazione e migliore visualizzazione.
weight: 20
categories: [Scambio dati, Alma Pro]
translationKey: alma-pro/synchronisation
aliases: /vc/sync/it
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Per effettuare la sincronizzazione tra il distributore automatico Alma Pro e il dispositivo VitalControl, procedi come segue:

## Apri la porta USB

1. Usa un piccolo cacciavite per allentare la vite di bloccaggio sullo sportello della porta USB e abbassalo:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Apri la porta USB" title="Apri la porta USB" /></a>
        <figcaption class="figure-caption fs-6">Figura 1: Apri la porta USB</figcaption>
    </figure>

## Collega VitalControl

2. Accendi il dispositivo VitalControl premendo il pulsante centrale superiore `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Pulsante On/Off" />.

2. Collega la presa USB-C del dispositivo VitalControl utilizzando il cavo USB fornito <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> con la presa USB-A del touchscreen <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Figura 2: Collegamento di VitalControl ad Alma Pro</figcaption>
</figure>

### Avvia la sincronizzazione

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attenzione</span><br>
        Per avviare la sincronizzazione del dispositivo VitalControl, devi essere connesso alla macchina con il ruolo utente <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Altrimenti, il pulsante <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> nel <a href="#synchronise-vc-ap" >menu di sincronizzazione</a> è disabilitato.
    </div>
</div>

4. Nella barra laterale sinistra del terminale touch, clicca il secondo pulsante dall'alto <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Se ti trovi nel menu principale dove non è visibile alcuna barra laterale, premi il pulsante &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> per aprire il menu feeder.

1. Nella barra laterale destra del terminale touchscreen, sotto il simbolo(i) per il(i) alimentatore(i) collegato(i), viene ora visualizzato il simbolo <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="Dispositivo VitalControl" title="VitalControl"/> per il dispositivo `{{<T "VitalControl" >}}`. Clicca su questo simbolo.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attenzione</span><br>
            Se il simbolo <img src="/icons/device.svg" width="25" align="bottom" alt="Dispositivo VitalControl" title="VitalControl"/> per il dispositivo <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> nella barra laterale destra <span style="font-weight: bold;">non</span> è visualizzato, il dispositivo è ancora disattivato nelle impostazioni. In questo caso, segui le istruzioni per l'<a href="../configuration" >attivazione</a> una tantum del dispositivo.
        </div>
    </div>

1. Ora apparirà la schermata di sincronizzazione. Clicca sul pulsante <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="numero 3 cerchiato" title="numero 3" /> `{{<T "Synchronize" >}}` al centro in basso per avviare la sincronizzazione con il dispositivo VitalControl.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Sincronizzazione VitalControl con Alma Pro" title="Sincronizzazione VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Figura 3: Sincronizzazione di VitalControl con l'alimentatore automatico Alma Pro</figcaption>
    </figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attenzione</span><br>
        Se molti animali devono essere trasferiti, la sincronizzazione può richiedere del tempo. È possibile vedere il progresso della sincronizzazione sul display del dispositivo VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Sincronizzazione VitalControl Alma Pro, indicatore di progresso" title="Progresso della sincronizzazione" /></a>
            <figcaption class="figure-caption fs-6">Figura 4: Sincronizzazione VitalControl Alma Pro, indicatore di progresso</figcaption>
        </figure>
    </div>
</div>

## Chiudere la porta USB

7. Dopo la sincronizzazione riuscita, scollegare il cavo USB dalla porta USB sul touchscreen. Ripiegare il coperchio protettivo della porta e fissarlo serrando la vite di bloccaggio con un piccolo cacciavite.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Chiudere la porta USB" title="Chiudere la porta USB" /></a>
    <figcaption class="figure-caption fs-6">Figura 5: Chiudere di nuovo la porta USB</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Nota</span><br>
        Assicurarsi di chiudere il coperchio della porta USB dopo ogni sincronizzazione per evitare che l'umidità entri nella porta e per proteggere la porta dall'aria corrosiva presente nella stalla!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Chiusura obbligatoria della porta USB" title="Chiusura obbligatoria della porta USB" /></a>
            <figcaption class="figure-caption fs-6">Figura 6: Chiusura obbligatoria della porta USB</figcaption>
        </figure>
    </div>
</div>
