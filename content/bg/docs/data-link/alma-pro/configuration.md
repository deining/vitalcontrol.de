---
title: Еднократно активиране и конфигуриране на устройството в настройките на автоматичния хранилник
linkTitle: Конфигурация
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Преди да използвате VitalControl за първи път, трябва да го активирате и правилно конфигурирате веднъж в настройките на хранилника Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
За да активирате и настроите устройството VitalControl, следвайте следните стъпки:

## Навигация до менюто с настройки `{{<T "VitalControl" >}}`

{{% alert title="Внимание" %}}
За да активирате и настроите устройството {{<T "VitalControl" >}}, трябва да сте влезли като потребител с роля {{<T "SiteManager" >}} на автоматичния хранилник. В противен случай някои от бутоните, показани и описани по-долу, няма да бъдат видими за вас.
{{% /alert %}}

1. Кликнете върху долния бутон <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Меню с настройки" title="Настройки"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> в лявата странична лента на сензорния терминал. Ако сте в главното меню, където страничната лента не е видима, натиснете бутона &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Меню на хранилника" title="Меню на хранилника"/>`{{<T "Feeder" >}}`, за да се покаже страничната лента.

1. Кликнете върху втория бутон отляво <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Настройки на сензорния терминал" title="Настройки на сензора"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> в долната лента с инструменти на сензорния терминал.

1. Сега се появява серия от елементи на менюто в лявата половина на централната екранна област. Кликнете върху долния бутон `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Сега се появява елемент на менюто (или възможно няколко) в дясната половина на централната екранна област. Кликнете върху горния бутон `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Бутонът сега се премества в лявата половина на екрана.

1. В долната част на дясната страна на екрана сега се показва бутонът &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Отваряне на настройките на VitalControl" title="Отваряне на настройки" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Кликнете върху този бутон и ще се отвори изскачащ прозорец, показващ [Страница 1](#settings-menu-vitalcontrol-page-1) от менюто с настройки на `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl settings: Access" title="Access VitalControl settings menu" />
    <figcaption class="figure-caption fs-6">Екранна снимка 1: Достъп до менюто с настройки на <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Менюто с настройки на `{{<T "VitalControl" >}}` е разпределено на две страници:

## Меню с настройки на `{{<T "VitalControl" >}}` - Страница 1 {#settings-menu-vitalcontrol-page-1}

Страница 1 от менюто с настройки на <span style="font-style: italic;">{{<T "VitalControl" >}}</span> е представена по следния начин:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl settings menu: Page 1" title="VitalControl settings (1)" />
    <figcaption class="figure-caption fs-6">Екранна снимка 2: Меню с настройки на <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Страница 1</figcaption>
</figure>

На тази страница можете да извършите следните действия и настройки.

### Активиране на устройството {{<T "VitalControl" >}} {#activation-vitalcontrol}

В стандартното състояние на машината, {{<T "VitalControl" >}} е деактивиран. Задайте превключвателя <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> в дясната позиция <span style="font-style: italic;">{{<T "YES" >}}</span>, за да активирате устройството {{<T "VitalControl" >}}. След това, в дясната странична лента на менюто на фидера, под иконата(ите) за свързаната(ите) машина(и), ще се появи иконата <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl device" title="VitalControl"/> за устройството `{{<T "VitalControl" >}}` (вижте Екранна снимка <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Меню на фидера</a></span>, фигура <span style="font-size: 140%">➁</span> там).

### Синхронизация на автоматичен хранилка <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

В лявата част на екрана има две отметки:

* Отметка <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Тази опция контролира поведението в случай, че животни са на хранилката по време на синхронизация, които все още не са известни на устройството {{<T "VitalControl" >}}. Тази опция е активирана по подразбиране и обикновено трябва да остане зададена. Ако регистрирате закупените животни чрез сканиране на техните животински паспорти, тази опция трябва да бъде деактивирана.

    <span style="font-weight: bold">Активирайте</span> тази опция:

    - ако имате чисто нов {{<T "VitalControl" >}} пред вас, на който искате да прехвърлите всички животни от хранилка. След синхронизацията всички животни, известни на хранилката, ще бъдат налични и на {{<T "VitalControl" >}}.
    - ако непрекъснато водите нови телета на хранилката по време на текущи операции. Тези животни също ще бъдат създадени на устройството {{<T "VitalControl" >}} по време на синхронизация.

    <span style="font-weight: bold">Деактивирайте</span> тази опция:

    - ако имате новосъздадени животни на вашия {{<T "VitalControl" >}} чрез сканиране на техните животински паспорти, където
    - тези животни все още не са получили транспондер и
    - тези животни вече се хранят на хранилката и следователно са регистрирани там.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
                Ако опцията остане зададена в горната конфигурация, животните ще бъдат налични два пъти на {{<T "VitalControl" >}} след синхронизация.
            </div>
        </div>

* Чекбокс <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

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
            Ако тази опция е активирана и чекбоксът <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> също е активиран, няма да бъдат изтрити животни, които са по-млади от посоченото в полето за брой <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Деактивирайте</span> тази опция:
    - ако искате да продължите да събирате данни за животните след млечния период, например, по време на претегляне,
    - ако сте готови да изтриете животните от {{<T "VitalControl" >}} ръчно.


<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        Ако деактивирате тази опция, трябва да откачите транспондера за отбити животни на устройството {{<T "VitalControl" >}} най-късно когато нашийникът бъде премахнат от отбито теле на друго, по-младо теле. Ако транспондерът не бъде премахнат, данните на по-младото животно - което сега носи бившия нашийник на отбито животно - ще бъдат неправилно добавени към набора от данни на отбити животни.
    </div>
</div>

### Синхронизация {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Автоматичен хранилник

От дясната страна на екрана има отметка и две полета за въвеждане:

* Отметка <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Тази опция контролира дали животните, присъстващи на {{<T "VitalControl" >}}, които са неизвестни на хранилника, ще бъдат създадени на хранилника по време на следващата синхронизация. По подразбиране тази опция не е активирана.

    <span style="font-weight: bold">Деактивирайте</span> тази опция или я оставете деактивирана:

    - ако използвате вашето устройство {{<T "VitalControl" >}} на няколко хранилника едновременно,
    - ако водите вашите животни директно към хранилника, без да ги регистрирате първо чрез устройството {{<T "VitalControl" >}}. Вашите животни ще бъдат автоматично създадени по време на регистрацията, когато бъдат нахранени на хранилника за първи път.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
            Ако {{<T "VitalControl" >}} се използва на няколко машини и тази опция е отметната, животните ще бъдат неволно прехвърлени от една машина на друга по време на синхронизация.
        </div>
    </div>

<span style="font-weight: bold">Активирайте</span> тази опция:

- ако първоначалната регистрация на новородените животни с {{<T "VitalControl" >}} се извършва преди първото хранене на хранилката.
- ако записвате закупените животни чрез сканиране на техните животински паспорти на {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        Активирайте тази опция само ако използвате {{<T "VitalControl" >}} на една машина! Ако искате да извършите синхронизация с множество машини с тази опция, трябва да използвате отделно устройство {{<T "VitalControl" >}} за всяка машина.
    </div>
</div>

* Падащо меню <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   В това падащо меню можете да изберете кривата на хранене, която се присвоява на животни, които са новосъздадени на хранилката по време на синхронизация.

* Поле за числов вход<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    В това числово поле можете да зададете минималната възраст (в дни), от която животните са новосъздадени на хранилката по време на синхронизация. Животните, които са по-млади от зададената минимална възраст, **не** се създават по време на синхронизация.

Натиснете бутона <span style="font-size: 140%">⑧</span> за да преминете към [страница 2](#settings-menu-vitalcontrol-page-2) на <span style="font-style: italic;">менюто за настройки {{<T "VitalControl" >}}</span>.

## Меню Настройки `{{<T "VitalControl" >}}` - Страница 2 {#settings-menu-vitalcontrol-page-2}

### Как да се справим с конфликти на данни по време на синхронизация

Конфликти на данни могат да възникнат при синхронизиране на данните между хранилката и устройството {{<T "VitalControl" >}}. Конфликт на данни възниква, когато данните си противоречат на устройството {{<T "VitalControl" >}} и на хранилката (например относно <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). На тази страница 2 от менюто настройки можете да определите дали и как конфликтите на данни се разрешават по време на синхронизация. Тук има три опции:

* Приоритет се дава на данните от хранилката, данните на устройството {{<T "VitalControl" >}} се презаписват с тези от хранилката\.
  Активирайте тази опция, като изберете радио бутона в лявата колона под символа на хранилката <span style="font-size: 140%">➃</span>.

* Приоритет се дава на данните от {{<T "VitalControl" >}}, данните на хранилката се презаписват с тези от устройството {{<T "VitalControl" >}}\.
  Активирайте тази опция, като изберете радио бутона в лявата колона под {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Не се правят промени, както данните от хранилката, така и данните от устройството {{<T "VitalControl" >}} остават непроменени.\
  Активирайте тази опция, като изберете радио бутона в дясната колона <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Пример</span><br>
            След като сте закупили партида телета, регистрирате закупените животни на {{<T "VitalControl" >}} чрез сканиране на всички техни животински паспорти. Животинските номера за тези животни на {{<T "VitalControl" >}} са тогава – в зависимост от <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">настройките на устройството</a> – последните 3-5 цифри от паспорта на животното. След това поставяте нашийници с Urban транспондери на новозакупените животни и ги храните на автоматичната хранилка. По време на първоначалното посещение на станцията, животните се регистрират чрез техния транспондер и се създават нови на хранилката. Въпреки това, животинските номера за тези нови животни на хранилката се извличат от номера на транспондера или съответстват на животинския номер, съхранен за този транспондер в хранилката. Това означава, че различен животински номер е назначен на същото животно на устройството {{<T "VitalControl" >}} и на хранилката, което води до конфликт на данни. Използвайки радио бутоните за <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, можете сега да определите в менюто настройки кой от двата паралелни животински номера има приоритет и кой ще бъде изтрит по време на синхронизацията.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Меню Настройки VitalControl: Страница 2" title="Настройки VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Снимка 3: Меню Настройки <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Страница 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        Поради вътрешни причини, промените в момента могат да се правят само на <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. В по-късни версии на фърмуера, ще можете да правите промени и на <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> и <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

С натискане на <span style="font-style: italic;">бутона</span> <span style="font-size: 140%">⑧</span> ще се върнете на [страница 1](#settings-menu-vitalcontrol-page-1) от менюто за настройки на `{{<T "VitalControl" >}}`.
