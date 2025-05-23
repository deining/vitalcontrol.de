---
title: Adatszinkronizáció a VitalControl és az Alma Pro között
linkTitle: Szinkronizáció
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Szinkronizálja a VitalControl eszközön tárolt állatokat az automata etetőn regisztrált állatokkal, és továbbítsa a VitalControl eszközzel rögzített mért értékeket az etetőre kiértékelési célokra és jobb vizualizáció érdekében.
weight: 20
categories: [Adatcsere, Alma Pro]
translationKey: alma-pro/synchronisation
aliases: /vc/sync/hu
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

A szinkronizáció végrehajtásához az Alma Pro automata etető és a VitalControl eszköz között, kövesse az alábbi lépéseket:

## USB port megnyitása

1. Használjon egy kis csavarhúzót az USB port fedelének rögzítő csavarjának meglazításához, majd hajtsa le:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="USB port megnyitása" title="USB port megnyitása" /></a>
        <figcaption class="figure-caption fs-6">1. ábra: USB port megnyitása</figcaption>
    </figure>

## VitalControl csatlakoztatása

2. Kapcsolja be a VitalControl eszközt a felső középső `Be/Ki` gomb megnyomásával &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Be/Ki gomb" />.

2. Csatlakoztassa a VitalControl eszköz USB-C aljzatát a mellékelt USB-kábellel <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> a érintőképernyő USB-A aljzatához <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">2. ábra: VitalControl csatlakoztatása az Alma Pro-hoz</figcaption>
</figure>

### Szinkronizálás indítása

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
        A VitalControl eszköz szinkronizálásának megkezdéséhez be kell jelentkeznie a gépre a <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span> felhasználói szerepkörben. Ellenkező esetben a <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> gomb a <a href="#synchronise-vc-ap" >Szinkronizálás menüben</a> le van tiltva.
    </div>
</div>

4. Az érintőképernyős terminál bal oldali sávjában kattintson a második gombra felülről <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Ha a főmenüben van, ahol az oldalsáv nem látható, nyomja meg a &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> gombot a feeder menü megnyitásához.

1. Az érintőképernyős terminál jobb oldali sávjában, a csatlakoztatott adagoló(k) szimbóluma(i) alatt most megjelenik a `{{<T "VitalControl" >}}` eszköz szimbóluma <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/>. Kattintson erre a szimbólumra.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
            Ha a <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> eszköz szimbóluma <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> a jobb oldali sávban <span style="font-weight: bold;">nem</span> jelenik meg, az eszköz még mindig inaktív a beállításokban. Ebben az esetben kövesse az eszköz egyszeri <a href="../configuration" >aktiválására</a> vonatkozó utasításokat.
        </div>
    </div>

1. Most megjelenik a szinkronizációs képernyő. Kattintson a középen alul található <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="circled number 3" title="number 3" /> `{{<T "Synchronize" >}}` gombra a VitalControl eszközzel való szinkronizáció megkezdéséhez.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronisation VitalControl with Alma Pro" title="Synchronisation VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">3. ábra: VitalControl szinkronizálása az Alma Pro automata adagolóval</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
            Ha sok állatot kell áthelyezni, a szinkronizálás eltarthat egy ideig. A szinkronizálás előrehaladását a VitalControl eszköz kijelzőjén láthatja.<br>
            <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Szinkronizálás VitalControl Alma Pro, előrehaladási jelző" title="Szinkronizálás előrehaladása" /></a>
                <figcaption class="figure-caption fs-6">4. ábra: Szinkronizálás VitalControl Alma Pro, előrehaladási jelző</figcaption>
            </figure>
        </div>
    </div>

## USB port bezárása

7. A sikeres szinkronizálás után húzza ki az USB kábelt az érintőképernyő USB portjából. Hajtsa vissza a port védőburkolatát, és rögzítse azt a zárócsavar meghúzásával egy kis csavarhúzó segítségével.

    <figure class="figure" style="margin-top: 10px;">
        <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="USB port bezárása" title="USB port bezárása" /></a>
        <figcaption class="figure-caption fs-6">5. ábra: USB port újbóli bezárása</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Megjegyzés</span><br>
            Ügyeljen arra, hogy minden szinkronizálás után zárja le az USB port fedelét, hogy megakadályozza a nedvesség bejutását a portba, és hogy megvédje a portot az istállójában lévő korrozív levegőtől!<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="USB port kötelező bezárása" title="USB port kötelező bezárása" /></a>
                <figcaption class="figure-caption fs-6">6. ábra: USB port kötelező bezárása</figcaption>
            </figure>
        </div>
    </div>
