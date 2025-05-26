---
title: Одноразова активація та налаштування пристрою в налаштуваннях автоматичної годівниці
linkTitle: Налаштування
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Перед першим використанням VitalControl необхідно один раз активувати та правильно налаштувати його в налаштуваннях годівниці Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/uk
---
## Вимоги

Ми рекомендуємо використовувати версію прошивки <span style="font-weight: bold">24-xx-xx</span> або вище з пристроєм VitalControl.\
Щоб перевірити, яка версія прошивки встановлена на вашому пристрої:

* Перейдіть на головну сторінку годівниці, натиснувши верхню кнопку `Home` <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Home screen icon" title="Alma Pro: Home screen"/>&nbsp; у навігаційній панелі в лівій частині екрана.
* На головному екрані натисніть кнопку `Help` <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Help menu icon" title="Alma Pro: Help screen"/>&nbsp; у верхньому правому куті екрана.
* Номер версії <span style="font-size: 140%">➂</span> тепер відображається ліворуч від кнопки перемикання мови.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: check of firmware version" title="Alma Pro: check of firmware version" />
    <figcaption class="figure-caption fs-6">Скріншот 1: <span style="font-style: italic;">Alma Pro: перевірка версії прошивки</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Увага</span><br>
        Якщо версія прошивки вашої годівниці нижча за <span style="font-weight: bold">24-xx-xx</span>, можуть бути розбіжності між наведеними нижче скріншотами та відображенням на вашому сенсорному екрані, тому ви можете не змогти виконати інструкції. У цьому випадку зверніться до вашого сервісного техніка для оновлення прошивки на вашій годівниці.<br>
    </div>
</div>

## Навігація до меню налаштувань `{{% T "VitalControl" %}}`

{{% alert title="Увага" %}}
Щоб активувати та налаштувати пристрій {{<T "VitalControl" >}}, ви повинні бути увійшли як користувач з роллю {{<T "SiteManager" >}} на автоматичному годівниці. В іншому випадку деякі з кнопок, показаних і описаних нижче, не будуть видимі для вас.
{{% /alert %}}

1. Натисніть на нижню кнопку <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Меню налаштувань" title="Налаштування"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> у лівій бічній панелі сенсорного терміналу. Якщо ви знаходитесь у головному меню, де бічна панель не видима, натисніть кнопку &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Меню годівниці" title="Меню годівниці"/>`{{<T "Feeder" >}}`, щоб відобразити бічну панель.

1. Натисніть на другу кнопку зліва <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Налаштування сенсорного терміналу" title="Налаштування сенсору"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> у нижній панелі інструментів сенсорного терміналу.

1. Тепер на лівій половині центральної області екрану з'являється ряд елементів меню. Натисніть на нижню кнопку `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Тепер на правій половині центральної області екрану з'являється елемент меню (або, можливо, кілька). Натисніть на верхню кнопку `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Кнопка тепер перемикається на ліву половину екрану.

1. Внизу правої сторони екрану тепер відображається кнопка &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Відкрити налаштування VitalControl" title="Відкрити налаштування" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Натисніть цю кнопку, і відкриється спливаюче вікно, яке відобразить [Сторінку 1](#settings-menu-vitalcontrol-page-1) меню налаштувань `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" usemap="#NavigationToVitalControlSettingsMenu" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Налаштування VitalControl: Доступ" title="Доступ до меню налаштувань VitalControl" />
    <figcaption class="figure-caption fs-6">Скріншот 1: Доступ до меню налаштувань <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Меню налаштувань `{{<T "VitalControl" >}}` розподілено на дві сторінки:

## Меню налаштувань `{{% T "VitalControl" %}}` - Сторінка 1 {#settings-menu-vitalcontrol-page-1}

Сторінка 1 меню налаштувань <span style="font-style: italic;">{{<T "VitalControl" >}}</span> представлена наступним чином:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" usemap="#VitalControlSettingsPage1" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Меню налаштувань VitalControl: Сторінка 1" title="Налаштування VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Скріншот 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> меню налаштувань, Сторінка 1</figcaption>
</figure>

На цій сторінці ви можете виконати наступні дії та налаштування.

### Активація пристрою {{% T "VitalControl" %}} {#activation-vitalcontrol}

У стандартному стані машини, {{<T "VitalControl" >}} деактивовано. Встановіть перемикач <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> у праве положення <span style="font-style: italic;">{{<T "YES" >}}</span>, щоб активувати пристрій {{<T "VitalControl" >}}. Після цього, у правій бічній панелі меню подачі, під значком(ами) підключеної машини(н), буде відображено значок <img src="/icons/device.svg" width="20" align="bottom" alt="Пристрій VitalControl" title="VitalControl"/> для пристрою `{{<T "VitalControl" >}}` (див. Скріншот <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Меню подачі</a></span>, рисунок <span style="font-size: 140%">➁</span> там).

### Синхронізація автоматичного подавача <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

На лівій стороні екрана є два прапорці:

* Прапорець <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Цей параметр контролює поведінку у випадку, якщо на годівниці під час синхронізації присутні тварини, які ще не відомі пристрою {{<T "VitalControl" >}}. Цей параметр увімкнено за замовчуванням і зазвичай має залишатися увімкненим. Якщо ви реєструєте придбаних тварин шляхом сканування їхніх паспортів, цей параметр потрібно вимкнути.

<span style="font-weight: bold">Увімкніть</span> цей параметр:

- якщо у вас є абсолютно новий {{<T "VitalControl" >}}, на який ви хочете перенести всіх тварин з годівниці. Після синхронізації всі тварини, відомі годівниці, також будуть присутні на {{<T "VitalControl" >}}.
- якщо ви постійно приводите нових телят до годівниці під час поточних операцій. Ці тварини також будуть створені на пристрої {{<T "VitalControl" >}} під час синхронізації.

<span style="font-weight: bold">Вимкніть</span> цей параметр:

- якщо ви створили нових тварин на вашому {{<T "VitalControl" >}} шляхом сканування їхніх паспортів тварин, де
- цим тваринам ще не було призначено транспондер, і
- ці тварини вже годуються на годівниці і, отже, зареєстровані там.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Увага</span><br>
        Якщо параметр залишиться встановленим у наведеній вище конфігурації, тварини будуть присутні двічі на {{<T "VitalControl" >}} після синхронізації.
    </div>
</div>

* Прапорець <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Цей параметр контролює, чи видаляються тварини, які присутні лише на {{<T "VitalControl" >}}, але не на годівниці, з {{<T "VitalControl" >}} під час наступної синхронізації. Якщо ви використовуєте {{<T "VitalControl" >}} лише під час молочного періоду тварин, цей параметр слід увімкнути. Якщо ви хочете відстежувати тварин після молочного періоду, ви повинні вимкнути цей параметр.

<span style="font-weight: bold">Увімкніть</span> цей параметр:

- якщо ви збираєте дані про тварин лише під час молочного періоду,
- якщо ви хочете, щоб тварини були видалені з {{<T "VitalControl" >}} під час наступної синхронізації після того, як вони були видалені з годівниці. Таким чином, тварини не накопичуються на {{<T "VitalControl" >}} з часом.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Увага</span><br>
        Якщо цей параметр активовано і прапорець <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> також активовано, жодні тварини не будуть видалені, які молодші, ніж вказано в числовому полі <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Вимкніть</span> цей параметр:
- якщо ви хочете продовжувати збирати дані про тварин після молочного періоду, наприклад, під час зважування,
- якщо ви готові вручну видаляти тварин з {{<T "VitalControl" >}} самостійно.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Увага</span><br>
        Якщо ви вимкнете цю опцію, ви повинні від'єднати транспондер для відлучених тварин на пристрої {{<T "VitalControl" >}} не пізніше, ніж коли нашийник знімається з відлученого теляти на інше, молодше теля. Якщо транспондер не буде видалено, записи даних молодшої тварини, яка тепер носить колишній нашийник відлученої тварини, будуть неправильно додані до набору даних відлучених тварин.
    </div>
</div>

### Синхронізація {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Автоматична годівниця

На правій стороні екрана є прапорець і два поля введення:

* Прапорець <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Ця опція контролює, чи будуть створені на годівниці тварини, присутні на {{<T "VitalControl" >}}, які невідомі годівниці, під час наступної синхронізації. За замовчуванням ця опція не активована.

    <span style="font-weight: bold">Деактивуйте</span> цю опцію або залиште її деактивованою:

    - якщо ви використовуєте свій пристрій {{<T "VitalControl" >}} на кількох годівницях одночасно,
    - якщо ви приводите своїх тварин безпосередньо до годівниці, не реєструючи їх спочатку через пристрій {{<T "VitalControl" >}}. Ваші тварини будуть автоматично створені під час реєстрації, коли вони вперше годуються на годівниці.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Увага</span><br>
            Якщо {{<T "VitalControl" >}} використовується на декількох машинах і ця опція вибрана, тварини будуть ненавмисно перенесені з однієї машини на іншу під час синхронізації.
        </div>
    </div>

    <span style="font-weight: bold">Активуйте</span> цю опцію:

    - якщо початкова реєстрація їх новонароджених тварин за допомогою {{<T "VitalControl" >}} відбувається до першого годування на годівниці.
    - якщо ви реєструєте своїх придбаних тварин, скануючи їхні паспорти тварин на {{<T "VitalControl" >}}.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Увага</span><br>
            Активуйте цю опцію лише якщо ви використовуєте {{<T "VitalControl" >}} на одній машині! Якщо ви хочете виконати синхронізацію з декількома машинами з цією опцією, ви повинні використовувати окремий пристрій {{<T "VitalControl" >}} для кожної машини.
        </div>
    </div>


* Випадаюче меню <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   У цьому випадаючому меню ви можете вибрати криву годування, яка призначена для тварин, що створюються на годівниці під час синхронізації.

* Поле числового вводу<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    У цьому числовому полі ви можете вказати мінімальний вік (у днях), з якого тварини створюються на годівниці під час синхронізації. Тварини, які молодші за вказаний мінімальний вік, **не** створюються під час синхронізації.

Натисніть кнопку <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span>, щоб перейти на [сторінку 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">меню налаштувань {{<T "VitalControl" >}}</span>.

## Меню налаштувань `{{% T "VitalControl" %}}` - Сторінка 2 {#settings-menu-vitalcontrol-page-2}

### Як вирішувати конфлікти даних під час синхронізації

Конфлікти даних можуть виникати під час синхронізації даних між годівницею та пристроєм {{<T "VitalControl" >}}. Конфлікт даних виникає, коли дані суперечать один одному на пристрої {{<T "VitalControl" >}} та на годівниці (наприклад, стосовно <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). На цій сторінці 2 меню налаштувань ви можете вказати, чи і як вирішуються конфлікти даних під час синхронізації. Є три варіанти:

* Пріоритет надається даним годівниці, дані на пристрої {{<T "VitalControl" >}} перезаписуються даними годівниці\.
  Активуйте цю опцію, вибравши радіокнопку в лівій колонці під символом годівниці <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Пріоритет надається даним {{<T "VitalControl" >}}, дані на годівниці перезаписуються даними пристрою {{<T "VitalControl" >}}\.
  Активуйте цю опцію, вибравши радіокнопку в лівій колонці під {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.


* Ніяких змін не вноситься, як дані подавача, так і дані пристрою {{<T "VitalControl" >}} залишаються незмінними.\
  Активуйте цю опцію, вибравши радіокнопку в правій колонці <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Приклад</span><br>
            Після того, як ви придбали партію телят, ви реєструєте своїх придбаних тварин на {{<T "VitalControl" >}}, скануючи всі їхні паспорти тварин. Номери тварин для цих тварин на {{<T "VitalControl" >}} є – залежно від <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">налаштувань пристрою</a> – останніми 3-5 цифрами паспорта тварини. Потім ви надягаєте нашийники з транспондерами Urban на новопридбаних тварин і годуєте їх на автоматичному подавачі. Під час першого відвідування станції тварини реєструються за допомогою свого транспондера і створюються нові на подавачі. Однак номери тварин для цих нових тварин на подавачі виводяться з номера транспондера або відповідають номеру тварини, збереженому для цього транспондера в подавачі. Це означає, що тепер одному і тому ж тварині на пристрої {{<T "VitalControl" >}} і на подавачі було призначено різний номер тварини, що призводить до конфлікту даних. Використовуючи радіокнопки для <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, ви тепер можете вказати в меню налаштувань, який з двох паралельних номерів тварин має пріоритет і який буде видалено під час синхронізації.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" usemap="#VitalControlSettingsPage2" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Меню налаштувань VitalControl: Сторінка 2" title="Налаштування VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Скріншот 3: Меню налаштувань <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Сторінка 2</figcaption>
</figure>


<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Увага</span><br>
        З внутрішніх причин зміни наразі можуть бути внесені лише до <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. У пізніших версіях прошивки ви також зможете вносити зміни до <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> та <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Натиснувши <span style="font-style: italic;">кнопку</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span>, ви повернетеся на [сторінку 1](#settings-menu-vitalcontrol-page-1) меню налаштувань `{{<T "VitalControl" >}}`.

<map name="NavigationToVitalControlSettingsMenu">
    <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='Натисніть {{<T "Settings" >}}' href="#Navigation_Digit_1">
    <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='Натисніть {{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
    <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='Натисніть {{<T "Accessories" >}}' href="#Navigation_Digit_3">
    <area shape="rect" coords="520,150,870,197" alt='{{<T "OpenSettings" >}}' title='Натисніть {{<T "OpenSettings" >}}' href="#Navigation_Digit_4">
    <area shape="rect" coords="580,582,850,636" alt='{{<T "VitalControl" >}}' title='Натисніть {{<T "VitalControl" >}}' href="#Navigation_Digit_5">
</map>

<map name="VitalControlSettingsPage1">
    <area shape="rect" coords="253,45,626,107" alt='{{<T "YES" >}}/{{<T "NO" >}}' title='Натисніть {{<T "YES" >}}/{{<T "NO" >}}' href="#VitalControlSettingsPage1_Digit_1">
    <area shape="rect" coords="11,236,88,316" alt='{{<T "RegisterNewOnVitalControlDevice" >}}' title='Натисніть {{<T "RegisterNewOnVitalControlDevice" >}}' href="#VitalControlSettingsPage1_Digit_2">
    <area shape="rect" coords="11,357,88,434" alt='{{<T "DeleteFromVitalControl" >}}' title='Натисніть {{<T "DeleteFromVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
    <area shape="rect" coords="31,463,357,508" alt='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' title='Натисніть {{<T "DoNotDeleteAnimalsYoungerThan" >}}' href="#VitalControlSettingsPage1_Digit_4">
    <area shape="rect" coords="420,236,511,286" alt='{{<T "RegisterNewOnAutomaticFeeder" >}}' title='Натисніть {{<T "RegisterNewOnAutomaticFeeder" >}}' href="#VitalControlSettingsPage1_Digit_5">
    <area shape="rect" coords="435,352,837,397" alt='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' title='Натисніть {{<T "FeedingCurveAssignedToImportedAnimals" >}}' href="#VitalControlSettingsPage1_Digit_6">
    <area shape="rect" coords="513,462,837,507" alt='{{<T "DoNotImportAnimalsOlderThan" >}}' title='Натисніть {{<T "DoNotImportAnimalsOlderThan" >}}' href="#VitalControlSettingsPage1_Digit_7">
    <area shape="rect" coords="142,517,215,616" alt='Сторінка 2' title='Натисніть Сторінка 2' href="#VitalControlSettingsPage1_Digit_8">
</map>

<map name="VitalControlSettingsPage2">
    <area shape="rect" coords="5,208,235,248" alt='{{<T "EarTagNumber" >}}' title='Натисніть {{<T "EarTagNumber" >}}' href="#VitalControlSettingsPage2_Digit_1">
    <area shape="rect" coords="5,208,235,328" alt='{{<T "AnimalNumber" >}}' title='Натисніть {{<T "AnimalNumber" >}}' href="#VitalControlSettingsPage2_Digit_2">
    <area shape="rect" coords="5,368,235,408" alt='{{<T "DateOfBirth" >}}' title='Натисніть {{<T "DateOfBirth" >}}' href="#VitalControlSettingsPage2_Digit_3">
    <area shape="rect" coords="392,116,455,177" alt='{{<T "Feeder" >}}' title='Натисніть {{<T "Feeder" >}}' href="#VitalControlSettingsPage2_Digit_4">
    <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='Натисніть {{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
    <area shape="rect" coords="678,97,775,159" alt='{{<T "NoChange_AP" >}}' title='Натисніть {{<T "NoChange_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
    <area shape="rect" coords="52,510,125,615" alt='Сторінка 1' title='Натисніть Сторінка 1' href="#VitalControlSettingsPage2_Digit_8">
</map>
