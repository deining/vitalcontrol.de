---
title: Синхронизация данных между VitalControl и Alma Pro
linkTitle: Синхронизация
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Синхронизируйте животных, хранящихся на устройстве VitalControl, с животными, зарегистрированными на автоматической кормушке, и передавайте измеренные значения, записанные с помощью устройства VitalControl, на кормушку для целей оценки и лучшей визуализации.
weight: 20
categories: [Обмен данными, Alma Pro]
translationKey: alma-pro/synchronisation
maphilight: true
aliases: /vc/sync/ru
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Чтобы выполнить синхронизацию между автоматической кормушкой Alma Pro и устройством VitalControl, выполните следующие действия:

## Откройте USB-порт

1. Используйте небольшую отвертку, чтобы ослабить фиксирующий винт на крышке USB-порта и откиньте её вниз:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Открыть USB-порт" title="Открыть USB-порт" /></a>
        <figcaption class="figure-caption fs-6">Рисунок 1: Открыть USB-порт</figcaption>
    </figure>

## Подключите VitalControl

2. Включите устройство VitalControl, нажав верхнюю центральную кнопку `Вкл/Выкл` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Кнопка Вкл/Выкл" />.

2. Подключите разъем USB-C устройства VitalControl с помощью прилагаемого USB-кабеля <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> к разъему USB-A сенсорного экрана <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Рисунок 2: Подключение VitalControl к Alma Pro</figcaption>
</figure>

### Начало синхронизации

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        Чтобы начать синхронизацию устройства VitalControl, вы должны быть авторизованы на машине в роли пользователя <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. В противном случае кнопка <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> в <a href="#figure3_synchronize_vitalcontrol_alma_pro">меню синхронизации</a> будет недоступна.
    </div>
</div>

4. В левой боковой панели сенсорного терминала нажмите вторую кнопку сверху <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" id="StartSynchronisation_Digit_1" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Если вы находитесь в главном меню, где боковая панель не видна, нажмите кнопку &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span>, чтобы открыть меню подачи.

1. В правой боковой панели сенсорного терминала, под символом(ами) подключенного(ых) питателя(ей), теперь отображается символ <img src="/digits/2_negative_circled.svg" id="StartSynchronisation_Digit_2" width="25" align="middle" alt="Цифра 2 в круге" title="Цифра 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="Устройство VitalControl" title="VitalControl"/> для устройства `{{<T "VitalControl" >}}`. Нажмите на этот символ.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
            Если символ <img src="/icons/device.svg" width="25" align="bottom" alt="Устройство VitalControl" title="VitalControl"/> для устройства <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> в правой боковой панели <span style="font-weight: bold;">не</span> отображается, устройство все еще деактивировано в настройках. В этом случае следуйте инструкциям по одноразовой <a href="../configuration" >активации</a> устройства.
        </div>
    </div>

1. Теперь появится экран синхронизации. Нажмите на кнопку <img src="/digits/3_negative_circled.svg" id="StartSynchronisation_Digit_3" width="25" align="middle" alt="цифра 3 в круге" title="цифра 3" /> `{{<T "Synchronize" >}}` в середине внизу, чтобы начать синхронизацию с устройством VitalControl.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;" id="figure3_synchronize_vitalcontrol_alma_pro">
<div style="padding: 12px;">
    <img
        src="../images/synchronise-vitalcontrol-alma-pro.png"
        alt="Синхронизация VitalControl с автоматическим питателем Alma Pro"
        usemap="#syncmap"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid"
        align="bottom"
        title="Синхронизация VitalControl с автоматическим питателем Alma Pro" />
</div>
<map name="syncmap">
    <area shape="rect" coords="15,115,112,190" alt="Feeder" title='{{<T "Feeder" >}}' href="#StartSynchronisation_Digit_1">
    <area shape="rect" coords="844,240,1012,282" alt="Temperature" title='{{<T "VitalControl" >}}' href="#StartSynchronisation_Digit_2">
    <area shape="rect" coords="361,570,612,620" alt="Temperature" title='{{<T "Synchronize" >}}' href="#StartSynchronisation_Digit_3">
</map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Рисунок 3: Синхронизация VitalControl с автоматическим питателем Alma Pro
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        Если необходимо перенести много животных, синхронизация может занять некоторое время. Вы можете увидеть прогресс синхронизации на дисплее устройства VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Синхронизация VitalControl Alma Pro, индикатор прогресса" title="Прогресс синхронизации" /></a>
            <figcaption class="figure-caption fs-6">Рисунок 4: Синхронизация VitalControl Alma Pro, индикатор прогресса</figcaption>
        </figure>
    </div>
</div>

## Закрыть USB-порт

7. После успешной синхронизации отключите USB-кабель от USB-порта на сенсорном экране. Сложите защитную крышку порта и закрепите ее, затянув фиксирующий винт с помощью маленькой отвертки.

    <figure class="figure" style="margin-top: 10px;">
        <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Закрыть USB-порт" title="Закрыть USB-порт" /></a>
        <figcaption class="figure-caption fs-6">Рисунок 5: Снова закрыть USB-порт</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Примечание</span><br>
            Убедитесь, что вы закрыли крышку USB-порта после каждой синхронизации, чтобы предотвратить попадание влаги в порт и защитить его от коррозионного воздуха в вашем сарае!<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Обязательное закрытие USB-порта" title="Обязательное закрытие USB-порта" /></a>
                <figcaption class="figure-caption fs-6">Рисунок 6: Обязательное закрытие USB-порта</figcaption>
            </figure>
        </div>
    </div>
