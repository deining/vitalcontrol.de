---
title: Одноразовая активация и настройка устройства в настройках автоматической кормушки
linkTitle: Конфигурация
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Перед первым использованием VitalControl необходимо один раз активировать и правильно настроить его в настройках кормушки Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Чтобы активировать и настроить устройство VitalControl, выполните следующие действия:

## Переход в меню настроек `{{<T "VitalControl" >}}`

{{% alert title="Внимание" %}}
Чтобы активировать и настроить устройство {{<T "VitalControl" >}}, вы должны войти в систему с ролью пользователя {{<T "SiteManager" >}} на автоматической кормушке. В противном случае некоторые из кнопок, показанных и описанных ниже, будут вам недоступны.
{{% /alert %}}

1. Нажмите на нижнюю кнопку <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Меню настроек" title="Настройки"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> в левой боковой панели сенсорного терминала. Если вы находитесь в главном меню, где боковая панель не видна, нажмите кнопку &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Меню кормушки" title="Меню кормушки"/>`{{<T "Feeder" >}}`, чтобы отобразить боковую панель.

1. Нажмите на вторую кнопку слева <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Настройки сенсорного терминала" title="Настройки сенсора"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> в нижней панели инструментов сенсорного терминала.

1. Теперь на левой половине центральной области экрана появляется ряд пунктов меню. Нажмите на нижнюю кнопку `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Теперь на правой половине центральной области экрана появляется пункт меню (или, возможно, несколько). Нажмите на верхнюю кнопку `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Кнопка теперь переключается на левую половину экрана.

1. В нижней части правой стороны экрана теперь отображается кнопка &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Открыть настройки VitalControl" title="Открыть настройки" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Нажмите эту кнопку, и откроется всплывающее окно, отображающее [Страницу 1](#settings-menu-vitalcontrol-page-1) меню настроек `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Настройки VitalControl: Доступ" title="Доступ к меню настроек VitalControl" />
    <figcaption class="figure-caption fs-6">Скриншот 1: Доступ к меню настроек <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Меню настроек `{{<T "VitalControl" >}}` разделено на две страницы:

## Меню настроек `{{<T "VitalControl" >}}` - Страница 1 {#settings-menu-vitalcontrol-page-1}

Страница 1 меню настроек <span style="font-style: italic;">{{<T "VitalControl" >}}</span> представлена следующим образом:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Меню настроек VitalControl: Страница 1" title="Настройки VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Скриншот 2: Меню настроек <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Страница 1</figcaption>
</figure>

На этой странице вы можете выполнить следующие действия и настройки.

### Активация устройства {{<T "VitalControl" >}} {#activation-vitalcontrol}

В стандартном состоянии машины {{<T "VitalControl" >}} деактивирован. Установите переключатель <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> в правое положение <span style="font-style: italic;">{{<T "YES" >}}</span>, чтобы активировать устройство {{<T "VitalControl" >}}. Впоследствии в правой боковой панели меню загрузчика, под значком(ами) подключенной машины(н), будет отображаться значок <img src="/icons/device.svg" width="20" align="bottom" alt="Устройство VitalControl" title="VitalControl"/> для устройства `{{<T "VitalControl" >}}` (см. Скриншот <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Меню загрузчика</a></span>, рисунок <span style="font-size: 140%">➁</span> там).

### Синхронизация автоматической кормушки <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

С левой стороны экрана находятся два флажка:

* Флажок <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Эта опция контролирует поведение в случае, если на кормушке во время синхронизации присутствуют животные, которые еще не известны устройству {{<T "VitalControl" >}}. Эта опция включена по умолчанию и обычно должна оставаться установленной. Если вы регистрируете приобретенных животных, сканируя их паспорта, эту опцию необходимо отключить.

    <span style="font-weight: bold">Включите</span> эту опцию:

    - если у вас есть совершенно новый {{<T "VitalControl" >}}, на который вы хотите перенести всех животных с кормушки. После синхронизации все животные, известные кормушке, также будут присутствовать на {{<T "VitalControl" >}}.
    - если вы постоянно приводите новых телят к кормушке во время текущих операций. Эти животные также будут созданы на устройстве {{<T "VitalControl" >}} во время синхронизации.

    <span style="font-weight: bold">Отключите</span> эту опцию:

    - если вы создали новых животных на вашем {{<T "VitalControl" >}}, сканируя их паспорта, где
    - этим животным еще не назначен транспондер и
    - эти животные уже кормятся на кормушке и, следовательно, зарегистрированы там.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
                Если опция останется установленной в вышеуказанной конфигурации, животные будут присутствовать дважды на {{<T "VitalControl" >}} после синхронизации.
            </div>
        </div>


* Флажок <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Эта опция контролирует, будут ли удалены животные, которые присутствуют только в {{<T "VitalControl" >}}, но отсутствуют на кормушке, из {{<T "VitalControl" >}} во время следующей синхронизации. Если вы используете {{<T "VitalControl" >}} только в период лактации животных, эта опция должна быть включена. Если вы хотите отслеживать животных после периода лактации, вы должны отключить эту опцию.

    <span style="font-weight: bold">Включите</span> эту опцию:

    - если вы собираете данные о животных только в период лактации,
    - если вы хотите, чтобы животные были удалены из {{<T "VitalControl" >}} во время следующей синхронизации после того, как они были удалены из кормушки. Таким образом, животные не накапливаются в {{<T "VitalControl" >}} со временем.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
            Если эта опция активирована и флажок <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> также активирован, животные, которые моложе, чем указано в числовом поле <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>, не будут удалены.
        </div>
    </div>

    <span style="font-weight: bold">Отключите</span> эту опцию:
    - если вы хотите продолжать собирать данные о животных после периода лактации, например, во время взвешивания,
    - если вы готовы самостоятельно вручную удалять животных из {{<T "VitalControl" >}}.


    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
            Если вы отключите эту опцию, вы должны отвязать транспондер для отнятых от матери животных на устройстве {{<T "VitalControl" >}} не позднее, чем когда ошейник будет снят с отнятого теленка и надет на другого, более молодого теленка. Если транспондер не будет удален, записи данных более молодого животного, которое теперь носит бывший ошейник отнятого животного, будут неправильно добавлены в набор данных отнятых животных.
        </div>
    </div>

### Синхронизация {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Автоматическая кормушка

Справа на экране находится флажок и два поля ввода:

* Флажок <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Эта опция контролирует, будут ли животные, присутствующие на {{<T "VitalControl" >}}, которые неизвестны кормушке, созданы на кормушке во время следующей синхронизации. По умолчанию эта опция не активирована.

    <span style="font-weight: bold">Деактивируйте</span> эту опцию или оставьте ее деактивированной:

    - если вы используете ваше устройство {{<T "VitalControl" >}} на нескольких кормушках одновременно,
    - если вы приводите своих животных непосредственно к кормушке, не регистрируя их сначала через устройство {{<T "VitalControl" >}}. Ваши животные будут автоматически созданы во время регистрации, когда они впервые будут кормиться на кормушке.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
            Если {{<T "VitalControl" >}} используется на нескольких машинах и эта опция отмечена, животные будут непреднамеренно перенесены с одной машины на другую во время синхронизации.
        </div>
    </div>

<span style="font-weight: bold">Активируйте</span> эту опцию:

- если первоначальная регистрация их новорожденных животных с помощью {{<T "VitalControl" >}} происходит до первого кормления у кормушки.
- если вы регистрируете своих приобретенных животных, сканируя их паспорта животных на {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        Активируйте эту опцию только в том случае, если вы используете {{<T "VitalControl" >}} на одном устройстве! Если вы хотите выполнить синхронизацию с несколькими устройствами с установленной этой опцией, вы должны использовать отдельное устройство {{<T "VitalControl" >}} для каждого устройства.
    </div>
</div>

* Выпадающее меню <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   В этом выпадающем меню вы можете выбрать кривую кормления, которая назначается животным, которые создаются на кормушке во время синхронизации.

* Поле ввода чисел<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    В этом числовом поле вы можете указать минимальный возраст (в днях), с которого животные создаются на кормушке во время синхронизации. Животные, которые моложе указанного минимального возраста, **не** создаются во время синхронизации.

Нажмите кнопку <span style="font-size: 140%">⑧</span>, чтобы перейти на [страницу 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">меню настроек {{<T "VitalControl" >}}</span>.

## Меню настроек `{{<T "VitalControl" >}}` - Страница 2 {#settings-menu-vitalcontrol-page-2}

### Как справляться с конфликтами данных во время синхронизации

Конфликты данных могут возникать при синхронизации данных между кормушкой и устройством {{<T "VitalControl" >}}. Конфликт данных возникает, когда данные противоречат друг другу на устройстве {{<T "VitalControl" >}} и на кормушке (например, касательно <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). На этой странице 2 меню настроек вы можете указать, разрешаются ли и как разрешаются конфликты данных во время синхронизации. Здесь есть три варианта:

* Приоритет отдается данным кормушки, данные на устройстве {{<T "VitalControl" >}} перезаписываются данными кормушки.
  Активируйте этот вариант, выбрав радиокнопку в левой колонке под символом кормушки <span style="font-size: 140%">➃</span>.

* Приоритет отдается данным {{<T "VitalControl" >}}, данные на кормушке перезаписываются данными устройства {{<T "VitalControl" >}}.
  Активируйте этот вариант, выбрав радиокнопку в левой колонке под {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Изменения не вносятся, данные как кормушки, так и устройства {{<T "VitalControl" >}} остаются неизменными.\
  Активируйте этот вариант, выбрав радиокнопку в правой колонке <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Пример</span><br>
            После покупки партии телят вы регистрируете приобретенных животных на {{<T "VitalControl" >}}, сканируя все их паспорта животных. Номера животных для этих животных на {{<T "VitalControl" >}} затем – в зависимости от <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">настроек устройства</a> – это последние 3-5 цифр паспорта животного. Затем вы надеваете ошейники с транспондерами Urban на вновь приобретенных животных и кормите их на автоматической кормушке. Во время первого визита на станцию животные регистрируются с помощью их транспондера и вновь создаются на кормушке. Однако номера животных для этих новых животных на кормушке выводятся из номера транспондера или соответствуют номеру животного, сохраненному для этого транспондера в кормушке. Это означает, что теперь одному и тому же животному на устройстве {{<T "VitalControl" >}} и на кормушке присвоен другой номер животного, что приводит к конфликту данных. Используя радиокнопки для <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, вы можете указать в меню настроек, какой из двух параллельных номеров животных имеет приоритет и какой будет удален во время синхронизации.
        </div>
</div>


<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Меню настроек VitalControl: Страница 2" title="Настройки VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Скриншот 3: Меню настроек <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Страница 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Внимание</span><br>
        По внутренним причинам изменения в настоящее время могут быть внесены только в <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. В более поздних версиях прошивки вы также сможете вносить изменения в <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> и <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Нажав на <span style="font-style: italic;">кнопку</span> <span style="font-size: 140%">⑧</span>, вы вернетесь на [страницу 1](#settings-menu-vitalcontrol-page-1) меню настроек `{{<T "VitalControl" >}}`.
