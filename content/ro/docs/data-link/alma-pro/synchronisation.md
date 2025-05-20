---
title: Sincronizarea datelor între VitalControl și Alma Pro
linkTitle: Sincronizare
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Sincronizați animalele stocate pe dispozitivul VitalControl cu animalele înregistrate pe hrănitorul automat și transferați valorile măsurate înregistrate cu dispozitivul VitalControl către hrănitor pentru evaluare și o mai bună vizualizare.
weight: 20
categories: [Schimb de date, Alma Pro]
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

Pentru a efectua sincronizarea între hrănitorul automat Alma Pro și dispozitivul VitalControl, procedați după cum urmează:

## Deschideți portul USB

1. Folosiți o șurubelniță mică pentru a slăbi șurubul de blocare de pe clapeta portului USB și pliați-l în jos:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Deschideți portul USB" title="Deschideți portul USB" /></a>
        <figcaption class="figure-caption fs-6">Figura 1: Deschideți portul USB</figcaption>
    </figure>

## Conectați VitalControl

2. Porniți dispozitivul VitalControl apăsând butonul central superior `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Buton On/Off" />.

2. Conectați mufa USB-C a dispozitivului VitalControl folosind cablul USB furnizat <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Cifra 1 încercuită" title="Cifra 1" /> cu mufa USB-A a ecranului tactil <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Cifra 2 încercuită" title="Cifra 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Conectează VitalControl la Alma Pro" title="Conexiune VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Figura 2: Conectarea VitalControl la Alma Pro</figcaption>
</figure>

### Porniți sincronizarea

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
        Pentru a începe sincronizarea dispozitivului VitalControl, trebuie să fiți autentificat pe mașină cu rolul de utilizator <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. În caz contrar, butonul <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> din <a href="#synchronise-vc-ap" >meniul de sincronizare</a> este dezactivat.
    </div>
</div>

4. În bara laterală din stânga a terminalului tactil, faceți clic pe al doilea buton de sus <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Meniul de alimentare" title="Meniul de alimentare"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Cifra 1" title="Cifra 1" />. Dacă vă aflați în meniul principal unde nu este vizibilă nicio bară laterală, apăsați butonul &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Meniul de alimentare" title="Meniul de alimentare"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> pentru a deschide meniul de alimentare.

1. În bara laterală din dreapta a terminalului cu ecran tactil, sub simbolul(ele) pentru alimentatorul(ele) conectat(e), este acum afișat simbolul <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> pentru dispozitivul `{{<T "VitalControl" >}}`. Faceți clic pe acest simbol.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
            Dacă simbolul <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> pentru dispozitivul <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> din bara laterală dreaptă <span style="font-weight: bold;">nu</span> este afișat, dispozitivul este încă dezactivat în setări. În acest caz, urmați instrucțiunile pentru <a href="../configuration" >activarea</a> unică a dispozitivului.
        </div>
    </div>

1. Ecranul de sincronizare va apărea acum. Faceți clic pe butonul <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="circled number 3" title="number 3" /> `{{<T "Synchronize" >}}` în mijloc, în partea de jos, pentru a începe sincronizarea cu dispozitivul VitalControl.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronisation VitalControl with Alma Pro" title="Synchronisation VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Figura 3: Sincronizarea VitalControl cu alimentatorul automat Alma Pro</figcaption>
    </figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
        Dacă multe animale trebuie transferate, sincronizarea poate dura ceva timp. Puteți vedea progresul sincronizării pe afișajul dispozitivului VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Sincronizare VitalControl Alma Pro, indicator de progres" title="Progresul sincronizării" /></a>
            <figcaption class="figure-caption fs-6">Figura 4: Sincronizare VitalControl Alma Pro, indicator de progres</figcaption>
        </figure>
    </div>
</div>

## Închideți portul USB

7. După sincronizarea cu succes, deconectați cablul USB de la portul USB de pe ecranul tactil. Îndoiți capacul de protecție al portului înapoi și asigurați-l prin strângerea șurubului de blocare folosind o șurubelniță mică.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Închideți portul USB" title="Închideți portul USB" /></a>
    <figcaption class="figure-caption fs-6">Figura 5: Închideți din nou portul USB</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Notă</span><br>
        Asigurați-vă că închideți clapeta portului USB după fiecare sincronizare pentru a preveni pătrunderea umezelii în port și pentru a proteja portul de aerul coroziv prezent în grajdul dumneavoastră!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Închiderea obligatorie a portului USB" title="Închiderea obligatorie a portului USB" /></a>
            <figcaption class="figure-caption fs-6">Figura 6: Închiderea obligatorie a portului USB</figcaption>
        </figure>
    </div>
</div>

Se pare că nu ați introdus niciun conținut Markdown. Vă rog să introduceți textul pe care doriți să-l traduc.
