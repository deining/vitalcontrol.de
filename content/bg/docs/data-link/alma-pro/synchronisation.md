---
title: Синхронизация на данни между VitalControl и Alma Pro
linkTitle: Синхронизация
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Синхронизирайте животните, съхранени на устройството VitalControl, с животните, регистрирани на автоматичната хранилка, и прехвърлете измерените стойности, записани с устройството VitalControl, към хранилката за целите на оценка и по-добра визуализация.
weight: 20
categories: [Обмен на данни, Alma Pro]
translationKey: alma-pro/synchronisation
---

За да извършите синхронизация между автоматичната хранилка Alma Pro и устройството VitalControl, следвайте следните стъпки:

## Отворете USB порта

1. Използвайте малка отвертка, за да разхлабите заключващия винт на капака на USB порта и го сгънете надолу:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Open USB port" title="Open USB port" /></a>
        <figcaption class="figure-caption fs-6">Фигура 1: Отворете USB порта</figcaption>
    </figure>

## Свържете VitalControl

2. Включете устройството VitalControl, като натиснете горния централен бутон `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="On/Off button" />.

2. Свържете USB-C гнездото на устройството VitalControl с помощта на предоставения USB кабел <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> с USB-A гнездото на сензорния екран <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Фигура 2: Свързване на VitalControl към Alma Pro</figcaption>
</figure>

### Стартиране на синхронизацията

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        За да стартирате синхронизацията на устройството VitalControl, трябва да сте влезли в системата с роля на потребител <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. В противен случай, бутонът <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> в <a href="#synchronise-vc-ap" >Меню за синхронизация</a> е деактивиран.
    </div>
</div>

4. В лявата странична лента на сензорния терминал, кликнете върху втория бутон отгоре <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Ако сте в главното меню, където не се вижда странична лента, натиснете бутона &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> за да отворите менюто на подавача.

1. В десния страничен панел на сензорния терминал, под символа(ите) за свързаните хранилки, сега се показва символът <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> за устройството `{{<T "VitalControl" >}}`. Кликнете върху този символ.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
            Ако символът <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> за устройството <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> в десния страничен панел <span style="font-weight: bold;">не</span> се показва, устройството все още е деактивирано в настройките. В този случай следвайте инструкциите за еднократна <a href="../configuration" >активация</a> на устройството.
        </div>
    </div>

1. Сега ще се появи екранът за синхронизация. Кликнете върху бутона <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="circled number 3" title="number 3" /> `{{<T "Synchronize" >}}` в средата долу, за да започнете синхронизацията с устройството VitalControl.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronisation VitalControl with Alma Pro" title="Synchronisation VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Фигура 3: Синхронизация на VitalControl с автоматичната хранилка Alma Pro</figcaption>
    </figure>


    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
            Ако много животни трябва да бъдат прехвърлени, синхронизацията може да отнеме известно време. Можете да видите напредъка на синхронизацията на дисплея на устройството VitalControl.<br>
            <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Синхронизация VitalControl Alma Pro, индикатор за напредък" title="Напредък на синхронизацията" /></a>
                <figcaption class="figure-caption fs-6">Фигура 4: Синхронизация VitalControl Alma Pro, индикатор за напредък</figcaption>
            </figure>
        </div>
    </div>

## Затваряне на USB порта

7. След успешна синхронизация, изключете USB кабела от USB порта на сензорния екран. Сгънете защитния капак на порта обратно и го закрепете, като затегнете заключващия винт с малка отвертка.

    <figure class="figure" style="margin-top: 10px;">
        <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Затваряне на USB порта" title="Затваряне на USB порта" /></a>
        <figcaption class="figure-caption fs-6">Фигура 5: Повторно затваряне на USB порта</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Забележка</span><br>
            Уверете се, че затваряте капака на USB порта след всяка синхронизация, за да предотвратите навлизането на влага в порта и да защитите порта от корозивния въздух във вашия обор!<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Задължително затваряне на USB порта" title="Задължително затваряне на USB порта" /></a>
                <figcaption class="figure-caption fs-6">Фигура 6: Задължително затваряне на USB порта</figcaption>
            </figure>
        </div>
    </div>
