---
title: Datan synkronointi VitalControlin ja Alma Pron välillä
linkTitle: Synkronointi
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Synkronoi VitalControl-laitteeseen tallennetut eläimet automaattiruokkijaan rekisteröityjen eläinten kanssa ja siirrä VitalControl-laitteella mitatut arvot ruokkijaan arviointia ja parempaa visualisointia varten.
weight: 20
categories: [Datan vaihto, Alma Pro]
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

Suorita synkronointi Alma Pro -automaattiruokkijan ja VitalControl-laitteen välillä seuraavasti:

## Avaa USB-portti

1. Käytä pientä ruuvimeisseliä löysätäksesi USB-portin läpän lukitusruuvin ja taita se alas:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Avaa USB-portti" title="Avaa USB-portti" /></a>
        <figcaption class="figure-caption fs-6">Kuva 1: Avaa USB-portti</figcaption>
    </figure>

## Yhdistä VitalControl

2. Kytke VitalControl-laite päälle painamalla yläkeskellä olevaa `On/Off`-painiketta &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="On/Off-painike" />.

2. Yhdistä VitalControl-laitteen USB-C-liitin mukana toimitetulla USB-kaapelilla <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Ympyröity numero 1" title="Numero 1" /> kosketusnäytön USB-A-liittimeen <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Ympyröity numero 2" title="Numero 2" />.

   <figure class="figure" style="margin-top: 10px;">
       <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Yhdistä VitalControl Alma Prohon" title="Yhteys VitalControl Alma Pro" /></a>
       <figcaption class="figure-caption fs-6">Kuva 2: VitalControlin yhdistäminen Alma Prohon</figcaption>
   </figure>

### Aloita synkronointi

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Jotta voit aloittaa VitalControl-laitteen synkronoinnin, sinun on oltava kirjautuneena koneelle käyttäjäroolissa <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Muuten <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> -painike <a href="#synchronise-vc-ap" >Synkronointivalikossa</a> on pois käytöstä.
    </div>
</div>

4. Kosketusterminaalin vasemmassa sivupalkissa, klikkaa toista painiketta ylhäältä <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Syöttövalikko" title="Syöttövalikko"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Numero 1" title="Numero 1" />. Jos olet päävalikossa, jossa sivupalkki ei ole näkyvissä, paina painiketta &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Syöttövalikko" title="Syöttövalikko"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> avataksesi syöttövalikon.

1. Kosketusnäytöllisen päätteen oikeassa sivupalkissa, yhdistetyn syöttölaitteen symbolin alapuolella, näkyy nyt symboli <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> `{{<T "VitalControl" >}}` -laitteelle. Klikkaa tätä symbolia.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
            Jos symboli <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> `{{<T "VitalControl" >}}` -laitteelle oikeassa sivupalkissa <span style="font-weight: bold;">ei</span> näy, laite on vielä deaktivoitu asetuksissa. Tässä tapauksessa seuraa ohjeita laitteen kertaluonteiseen <a href="../configuration" >aktivointiin</a>.
        </div>
    </div>

1. Synkronointinäyttö tulee nyt näkyviin. Klikkaa painiketta <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="circled number 3" title="number 3" /> `{{<T "Synchronize" >}}` keskellä alhaalla aloittaaksesi synkronoinnin VitalControl-laitteen kanssa.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronisation VitalControl with Alma Pro" title="Synchronisation VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Kuva 3: VitalControlin synkronointi Alma Pro -automaattisen syöttölaitteen kanssa</figcaption>
    </figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomio</span><br>
        Jos monia eläimiä täytyy siirtää, synkronointi voi kestää jonkin aikaa. Voit nähdä synkronoinnin etenemisen VitalControl-laitteen näytöllä.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Synkronointi VitalControl Alma Pro, edistymisindikaattori" title="Synkronoinnin edistyminen" /></a>
            <figcaption class="figure-caption fs-6">Kuva 4: Synkronointi VitalControl Alma Pro, edistymisindikaattori</figcaption>
        </figure>
    </div>
</div>

## Sulje USB-portti

7. Onnistuneen synkronoinnin jälkeen irrota USB-kaapeli kosketusnäytön USB-portista. Taita portin suojakansi takaisin ylös ja kiinnitä se kiristämällä lukitusruuvi pienellä ruuvimeisselillä.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Sulje USB-portti" title="Sulje USB-portti" /></a>
    <figcaption class="figure-caption fs-6">Kuva 5: Sulje USB-portti uudelleen</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Huomautus</span><br>
        Varmista, että suljet USB-portin läpän jokaisen synkronoinnin jälkeen estääksesi kosteuden pääsyn porttiin ja suojataksesi porttia navetassasi olevalta syövyttävältä ilmalta!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="USB-portin pakollinen sulkeminen" title="USB-portin pakollinen sulkeminen" /></a>
            <figcaption class="figure-caption fs-6">Kuva 6: USB-portin pakollinen sulkeminen</figcaption>
        </figure>
    </div>
</div>

It seems like you haven't provided any Markdown content for translation. Please paste the content you want translated, and I'll assist you with it.
