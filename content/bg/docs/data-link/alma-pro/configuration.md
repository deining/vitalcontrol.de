---
title: Еднократна активация и конфигурация на устройството в настройките на автоматичния хранилка
linkTitle: Конфигурация
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Преди да използвате VitalControl за първи път, трябва да го активирате и правилно конфигурирате веднъж в настройките на хранилката Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/bg
---
## Изисквания

Препоръчваме използването на версия на фърмуера <span style="font-weight: bold">24-xx-xx</span> или по-висока с устройството VitalControl.\
За да проверите коя версия на фърмуера е инсталирана на вашето устройство:

* Навигирайте до началната страница на хранилката, като кликнете върху горния бутон `Начало` <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Икона на началния екран" title="Alma Pro: Начален екран"/>&nbsp; в навигационната лента в лявата част на екрана.
* На началния екран кликнете върху бутона `Помощ` <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Икона на менюто за помощ" title="Alma Pro: Екран за помощ"/>&nbsp; в горната дясна част на екрана.
* Номерът на версията <span style="font-size: 140%">➂</span> сега се показва вляво от бутона за превключване на езика.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: проверка на версията на фърмуера" title="Alma Pro: проверка на версията на фърмуера" />
    <figcaption class="figure-caption fs-6">Снимка 1: <span style="font-style: italic;">Alma Pro: проверка на версията на фърмуера</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        Ако версията на фърмуера на вашата хранилка е по-ниска от <span style="font-weight: bold">24-xx-xx</span>, може да има несъответствия между екранните снимки по-долу и дисплея на вашия сензорен екран, така че може да не успеете да следвате инструкциите. В този случай се свържете с вашия сервизен техник, за да актуализирате фърмуера на вашата хранилка.<br>
    </div>
</div>

## Навигация към менюто за настройки `{{% T "VitalControl" %}}`

{{% alert title="Внимание" %}}
За да активирате и настроите устройството {{<T "VitalControl" >}}, трябва да сте влезли като потребител с роля {{<T "SiteManager" >}} на автоматичния хранилник. В противен случай някои от бутоните, показани и описани по-долу, няма да бъдат видими за вас.
{{% /alert %}}

1. Кликнете върху долния бутон <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Меню за настройки" title="Настройки"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> в лявата странична лента на сензорния терминал. Ако сте в главното меню, където не се вижда странична лента, натиснете бутона &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Меню на хранилника" title="Меню на хранилника"/>`{{<T "Feeder" >}}`, за да се покаже страничната лента.

1. Кликнете върху втория бутон отляво <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Настройки на сензорния терминал" title="Настройки на сензора"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> в долната лента с инструменти на сензорния терминал.

1. Сега се появява серия от елементи на менюто в лявата половина на централната екранна област. Кликнете върху долния бутон `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Сега се появява елемент на менюто (или възможно няколко) в дясната половина на централната екранна област. Кликнете върху горния бутон `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Бутонът сега се премества в лявата екранна половина.

1. В долната част на дясната страна на екрана сега се показва бутонът &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Отваряне на настройките на VitalControl" title="Отваряне на настройки" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Кликнете върху този бутон и ще се отвори изскачащ прозорец, показващ [Страница 1](#settings-menu-vitalcontrol-page-1) от менюто за настройки на `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="Настройки на VitalControl: Достъп"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Достъп до менюто за настройки на VitalControl" />
    </div>
    <map name="NavigationToVitalControlSettingsMenu">
        <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='{{<T "Settings" >}}' href="#Navigation_Digit_1">
        <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='{{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
        <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='{{<T "Accessories" >}}' href="#Navigation_Digit_3">
        <area shape="rect" coords="520,150,870,197" alt='{{<T "VitalControl" >}}' title='{{<T "VitalControl" >}}' href="#Navigation_Digit_4">
        <area shape="rect" coords="580,582,850,636" alt='{{<T "OpenSettings" >}}' title='{{<T "OpenSettings" >}}' href="#Navigation_Digit_5">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Снимка 2: Достъп до менюто за настройки на <span style="font-style: italic;">{{<T "VitalControl" >}}
</figcaption>

Менюто за настройки на `{{<T "VitalControl" >}}` е разпределено на две страници:

## Меню за настройки на `{{% T "VitalControl" %}}` - Страница 1 {#settings-menu-vitalcontrol-page-1}

Страница 1 от менюто за настройки на <span style="font-style: italic;">{{<T "VitalControl" >}}</span> е представена по следния начин:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="Меню за настройки на VitalControl: Страница 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Настройки на VitalControl (1)" />
    </div>
    <map name="VitalControlSettingsPage1">
        <area shape="rect" coords="253,45,626,107" alt='{{<T "YES" >}}/{{<T "NO" >}}' title='{{<T "YES" >}}/{{<T "NO" >}}' href="#VitalControlSettingsPage1_Digit_1">
        <area shape="rect" coords="11,236,88,316" alt='{{<T "RegisterNewOnVitalControlDevice" >}}' title='{{<T "RegisterNewOnVitalControlDevice" >}}' href="#VitalControlSettingsPage1_Digit_2">
        <area shape="rect" coords="11,357,88,434" alt='{{<T "DeleteFromVitalControl" >}}' title='{{<T "DeleteFromVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
        <area shape="rect" coords="31,463,357,508" alt='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' title='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' href="#VitalControlSettingsPage1_Digit_4">
        <area shape="rect" coords="420,236,511,286" alt='{{<T "RegisterNewOnAutomaticFeeder" >}}' title='{{<T "RegisterNewOnAutomaticFeeder" >}}' href="#VitalControlSettingsPage1_Digit_5">
        <area shape="rect" coords="435,352,837,397" alt='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' title='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' href="#VitalControlSettingsPage1_Digit_6">
        <area shape="rect" coords="513,462,837,507" alt='{{<T "DoNotImportAnimalsOlderThan" >}}' title='{{<T "DoNotImportAnimalsOlderThan" >}}' href="#VitalControlSettingsPage1_Digit_7">
        <area shape="rect" coords="142,517,215,616" alt='Page 2' title='Page 2' href="#VitalControlSettingsPage1_Digit_8">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Снимка 3: Меню за настройки на <span style="font-style: italic;">{{<T "VitalControl" >}}
</figcaption>

На тази страница можете да извършите следните действия и настройки.

### Активиране на устройството {{% T "VitalControl" %}} {#activation-vitalcontrol}

В стандартното състояние на машината, {{<T "VitalControl" >}} е деактивиран. Задайте превключвателя <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> в дясната позиция <span style="font-style: italic;">{{<T "YES" >}}</span>, за да активирате устройството {{<T "VitalControl" >}}. След това, в дясната странична лента на менюто на фидера, под иконата(ите) за свързаната(ите) машина(и), ще се появи иконата <img src="/icons/device.svg" width="20" align="bottom" alt="Устройство VitalControl" title="VitalControl"/> за устройството `{{<T "VitalControl" >}}` (вижте Снимка <span style="font-style: italic;"><a href="../synchronisation#figure3_synchronize_vitalcontrol_alma_pro">Меню на фидера</a></span>, фигура <span style="font-size: 140%">➂</span> там).

### Синхронизация автоматичен фидер <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

В лявата част на екрана има две отметки:

* Отметка <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Тази опция контролира поведението в случай, че на хранилката по време на синхронизация има животни, които все още не са известни на устройството {{<T "VitalControl" >}}. Тази опция е активирана по подразбиране и обикновено трябва да остане зададена. Ако регистрирате закупените животни чрез сканиране на техните животински паспорти, тази опция трябва да бъде деактивирана.

<span style="font-weight: bold">Активирайте</span> тази опция:

- ако имате чисто нов {{<T "VitalControl" >}} пред вас, на който искате да прехвърлите всички животни от хранилката. След синхронизацията всички животни, известни на хранилката, ще бъдат налични и на {{<T "VitalControl" >}}.
- ако непрекъснато водите нови телета на хранилката по време на текущи операции. Тези животни също ще бъдат създадени на устройството {{<T "VitalControl" >}} по време на синхронизацията.

<span style="font-weight: bold">Деактивирайте</span> тази опция:

- ако сте създали нови животни на вашия {{<T "VitalControl" >}} чрез сканиране на техните животински паспорти, където
- тези животни все още не са получили транспондер и
- тези животни вече се хранят на хранилката и следователно са регистрирани там.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        Ако опцията остане зададена в горната конфигурация, животните ще бъдат налични два пъти на {{<T "VitalControl" >}} след синхронизацията.
    </div>
</div>

* Чекбокс <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Тази опция контролира дали животните, които са налични само в {{<T "VitalControl" >}}, но не и на хранилката, ще бъдат изтрити от {{<T "VitalControl" >}} по време на следващата синхронизация. Ако използвате {{<T "VitalControl" >}} само по време на млечния период на животните, тази опция трябва да бъде активирана. Ако искате да проследявате животните след млечния период, трябва да деактивирате тази опция.

<span style="font-weight: bold">Активирайте</span> тази опция:

- ако събирате данни за животните само по време на млечния период,
- ако искате животните да бъдат изтрити от {{<T "VitalControl" >}} по време на следващата синхронизация, след като са били изтрити от хранилката. По този начин животните няма да се натрупват в {{<T "VitalControl" >}} с времето.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        Ако тази опция е активирана и отметката <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> също е активирана, няма да бъдат изтрити животни, които са по-млади от посоченото в полето за брой <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Деактивирайте</span> тази опция:
- ако искате да продължите да събирате данни за животните след млечния период, например по време на претегляне,
- ако сте готови да изтриете животните от {{<T "VitalControl" >}} ръчно.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        Ако деактивирате тази опция, трябва да откачите транспондера за отбити животни на устройството {{<T "VitalControl" >}} най-късно когато нашийникът бъде премахнат от отбито теле на друго, по-младо теле. Ако транспондерът не бъде премахнат, записите на данни на по-младото животно - което сега носи бившия нашийник на отбито животно - ще бъдат неправилно добавени към набора от данни на отбити животни.
    </div>
</div>

### Синхронизация {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Автоматична хранилка

В дясната част на екрана има отметка и две полета за въвеждане:

* Отметка <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Тази опция контролира дали животните, присъстващи на {{<T "VitalControl" >}}, които са неизвестни на хранилката, ще бъдат създадени на хранилката по време на следващата синхронизация. По подразбиране тази опция не е активирана.

    <span style="font-weight: bold">Деактивирайте</span> тази опция или я оставете деактивирана:

    - ако използвате вашето устройство {{<T "VitalControl" >}} на няколко хранилки едновременно,
    - ако водите вашите животни директно до хранилката, без първо да ги регистрирате чрез устройството {{<T "VitalControl" >}}. Вашите животни ще бъдат автоматично създадени по време на регистрацията, когато бъдат нахранени на хранилката за първи път.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
            Ако {{<T "VitalControl" >}} се използва на няколко машини и тази опция е отметната, животните ще бъдат неволно прехвърлени от една машина на друга по време на синхронизацията.
        </div>
    </div>

    <span style="font-weight: bold">Активирайте</span> тази опция:

    - ако първоначалната регистрация на новородените им животни с {{<T "VitalControl" >}} се извършва преди първото хранене на хранилката.
    - ако записвате закупените си животни, като сканирате техните животински паспорти на {{<T "VitalControl" >}}.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
            Активирайте тази опция само ако използвате {{<T "VitalControl" >}} на една машина! Ако искате да извършите синхронизация с няколко машини с тази опция, трябва да използвате отделно устройство {{<T "VitalControl" >}} за всяка машина.
        </div>
    </div>

* Падащо меню <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   В това падащо меню можете да изберете кривата на хранене, която е назначена на животни, които са новосъздадени на хранилката по време на синхронизация.

* Поле за числов вход<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    В това числово поле можете да зададете минималната възраст (в дни), от която животните са новосъздадени на хранилката по време на синхронизация. Животни, които са по-млади от зададената минимална възраст, **не** се създават по време на синхронизация.

Натиснете бутона <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span>, за да преминете към [страница 2](#settings-menu-vitalcontrol-page-2) на <span style="font-style: italic;">менюто за настройки {{<T "VitalControl" >}}</span>.

## Меню за настройки `{{% T "VitalControl" %}}` - Страница 2 {#settings-menu-vitalcontrol-page-2}

### Как да се справим с конфликти на данни по време на синхронизация

Конфликти на данни могат да възникнат при синхронизиране на данните между хранилката и устройството {{<T "VitalControl" >}}. Конфликт на данни възниква, когато данните си противоречат на устройството {{<T "VitalControl" >}} и на хранилката (например относно <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). На тази страница 2 от менюто за настройки можете да зададете дали и как конфликтите на данни се разрешават по време на синхронизация. Има три опции тук:

* Приоритет се дава на данните от хранилката, данните на устройството {{<T "VitalControl" >}} се презаписват с тези от хранилката.
  Активирайте тази опция, като изберете радио бутона в лявата колона под символа на хранилката <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Приоритет се дава на данните от {{<T "VitalControl" >}}, данните на хранилката се презаписват с тези от устройството {{<T "VitalControl" >}}.
  Активирайте тази опция, като изберете радио бутона в лявата колона под {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.


* Не се правят промени, както данните на хранилката, така и данните на устройството {{<T "VitalControl" >}} остават непроменени.\
  Активирайте тази опция, като изберете радио бутона в дясната колона <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Пример</span><br>
            След като сте закупили партида телета, регистрирате закупените животни на {{<T "VitalControl" >}}, като сканирате всички техни животински паспорти. Номерата на животните за тези животни на {{<T "VitalControl" >}} са – в зависимост от <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">настройките на устройството</a> – последните 3-5 цифри от паспорта на животното. След това поставяте нашийници с Urban транспондери на новозакупените животни и ги храните на автоматичната хранилка. По време на първоначалното посещение на станцията, животните се регистрират чрез техния транспондер и се създават нови на хранилката. Въпреки това, номерата на животните за тези нови животни на хранилката се извличат от номера на транспондера или съответстват на номера на животното, съхранен за този транспондер в хранилката. Това означава, че различен номер на животно вече е присвоен на същото животно на устройството {{<T "VitalControl" >}} и на хранилката, което води до конфликт на данни. Използвайки радио бутоните за <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, сега можете да определите в менюто за настройки кой от двата паралелни номера на животни има приоритет и кой ще бъде изтрит по време на синхронизацията.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Меню за настройки VitalControl: Страница 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Настройки VitalControl (2)" />
    </div>
    <map name="VitalControlSettingsPage2">
        <area shape="rect" coords="5,208,235,248" alt='{{<T "EarTagNumber" >}}' title='{{<T "EarTagNumber" >}}' href="#VitalControlSettingsPage2_Digit_1">
        <area shape="rect" coords="5,285,235,328" alt='{{<T "AnimalNumber" >}}' title='{{<T "AnimalNumber" >}}' href="#VitalControlSettingsPage2_Digit_2">
        <area shape="rect" coords="5,368,235,408" alt='{{<T "DateOfBirth" >}}' title='{{<T "DateOfBirth" >}}' href="#VitalControlSettingsPage2_Digit_3">
        <area shape="rect" coords="392,116,455,177" alt='{{<T "Feeder" >}}' title='{{<T "Feeder" >}}' href="#VitalControlSettingsPage2_Digit_4">
        <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='{{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
        <area shape="rect" coords="678,97,775,159" alt='{{<T "NoChange_AP" >}}' title='{{<T "NoChange_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
        <area shape="rect" coords="52,510,125,615" alt='Page 1' title='Page 1' href="#VitalControlSettingsPage2_Digit_8">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Снимка 4: Меню за настройки <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Страница 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        Поради вътрешни причини, промените в момента могат да бъдат направени само в <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. В по-късни версии на фърмуера, можете също да правите промени в <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> и <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

С натискане на <span style="font-style: italic;">бутона</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> ще се върнете на [страница 1](#settings-menu-vitalcontrol-page-1) от менюто за настройки на `{{<T "VitalControl" >}}`.
