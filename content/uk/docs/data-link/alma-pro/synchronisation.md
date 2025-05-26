---
title: Синхронізація даних між VitalControl та Alma Pro
linkTitle: Синхронізація
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Синхронізуйте тварин, збережених на пристрої VitalControl, з тваринами, зареєстрованими на автоматичній годівниці, та передайте виміряні значення, записані за допомогою пристрою VitalControl, на годівницю для оцінки та кращої візуалізації.
weight: 20
categories: [Обмін даними, Alma Pro]
translationKey: alma-pro/synchronisation
aliases: /vc/sync/uk
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Щоб виконати синхронізацію між автоматичною годівницею Alma Pro та пристроєм VitalControl, виконайте наступні дії:

## Відкрийте USB-порт

1. Використовуйте маленьку викрутку, щоб послабити фіксуючий гвинт на кришці USB-порту та відкрити її:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Відкрийте USB-порт" title="Відкрийте USB-порт" /></a>
        <figcaption class="figure-caption fs-6">Рисунок 1: Відкрийте USB-порт</figcaption>
    </figure>

## Підключіть VitalControl

2. Увімкніть пристрій VitalControl, натиснувши верхню центральну кнопку `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Кнопка On/Off" />.


2. Підключіть роз'єм USB-C пристрою VitalControl за допомогою наданого USB-кабелю <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> до роз'єму USB-A сенсорного екрану <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

   <figure class="figure" style="margin-top: 10px;">
       <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
       <figcaption class="figure-caption fs-6">Рисунок 2: Підключення VitalControl до Alma Pro</figcaption>
   </figure>

### Початок синхронізації

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Увага</span><br>
        Щоб розпочати синхронізацію пристрою VitalControl, ви повинні бути увійшли в систему в ролі користувача <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. В іншому випадку кнопка <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> у <a href="#synchronise-vc-ap" >меню Синхронізації</a> буде недоступна.
    </div>
</div>

4. У лівій бічній панелі сенсорного терміналу натисніть другу кнопку зверху <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Якщо ви знаходитесь у головному меню, де бічна панель не відображається, натисніть кнопку &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> щоб відкрити меню подачі.


1. У правій бічній панелі сенсорного терміналу, під символом(ами) підключеного(их) подавача(ів), тепер відображається символ <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Цифра 2 в колі" title="Цифра 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="Пристрій VitalControl" title="VitalControl"/> для пристрою `{{<T "VitalControl" >}}`. Натисніть на цей символ.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Увага</span><br>
            Якщо символ <img src="/icons/device.svg" width="25" align="bottom" alt="Пристрій VitalControl" title="VitalControl"/> для пристрою <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> у правій бічній панелі <span style="font-weight: bold;">не</span> відображається, пристрій все ще деактивовано в налаштуваннях. У цьому випадку дотримуйтесь інструкцій для одноразової <a href="../configuration" >активації</a> пристрою.
        </div>
    </div>

1. Тепер з'явиться екран синхронізації. Натисніть на кнопку <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="цифра 3 в колі" title="цифра 3" /> `{{<T "Synchronize" >}}` посередині внизу, щоб розпочати синхронізацію з пристроєм VitalControl.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Синхронізація VitalControl з Alma Pro" title="Синхронізація VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Рисунок 3: Синхронізація VitalControl з автоматичним подавачем Alma Pro</figcaption>
    </figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Увага</span><br>
        Якщо потрібно перенести багато тварин, синхронізація може зайняти деякий час. Ви можете побачити прогрес синхронізації на дисплеї пристрою VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Синхронізація VitalControl Alma Pro, індикатор прогресу" title="Прогрес синхронізації" /></a>
            <figcaption class="figure-caption fs-6">Рисунок 4: Синхронізація VitalControl Alma Pro, індикатор прогресу</figcaption>
        </figure>
    </div>
</div>

## Закриття USB-порту

7. Після успішної синхронізації від'єднайте USB-кабель від USB-порту на сенсорному екрані. Поверніть захисну кришку порту назад і закріпіть її, затягнувши фіксуючий гвинт за допомогою маленької викрутки.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Закриття USB-порту" title="Закриття USB-порту" /></a>
    <figcaption class="figure-caption fs-6">Рисунок 5: Повторне закриття USB-порту</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Примітка</span><br>
        Обов'язково закривайте кришку USB-порту після кожної синхронізації, щоб запобігти потраплянню вологи в порт і захистити його від корозійного повітря у вашому сараї!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Обов'язкове закриття USB-порту" title="Обов'язкове закриття USB-порту" /></a>
            <figcaption class="figure-caption fs-6">Рисунок 6: Обов'язкове закриття USB-порту</figcaption>
        </figure>
    </div>
</div>
