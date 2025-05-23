---
title: Одноразова активація та налаштування пристрою в налаштуваннях автоматичної годівниці
linkTitle: Налаштування
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Перед першим використанням VitalControl, ви повинні активувати та правильно налаштувати його один раз у налаштуваннях годівниці Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Щоб активувати та налаштувати пристрій VitalControl, виконайте наступні дії:

## Навігація до меню налаштувань `{{<T "VitalControl" >}}`

{{% alert title="Увага" %}}
Щоб активувати та налаштувати пристрій {{<T "VitalControl" >}}, ви повинні бути увійшли як користувач з роллю {{<T "SiteManager" >}} на автоматичній годівниці. Інакше деякі з кнопок, показаних і описаних нижче, не будуть видимі для вас.
{{% /alert %}}

1. Натисніть на нижню кнопку <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Меню налаштувань" title="Налаштування"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> у лівій бічній панелі сенсорного терміналу. Якщо ви знаходитесь у головному меню, де бічна панель не видима, натисніть кнопку &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Меню годівниці" title="Меню годівниці"/>`{{<T "Feeder" >}}`, щоб відобразити бічну панель.

1. Натисніть на другу кнопку зліва <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Налаштування сенсорного терміналу" title="Налаштування сенсору"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> у нижній панелі інструментів сенсорного терміналу.

1. Тепер на лівій половині центральної області екрана з'являється серія пунктів меню. Натисніть на нижню кнопку `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Тепер на правій половині центральної області екрана з'являється пункт меню (або, можливо, кілька). Натисніть на верхню кнопку `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Кнопка тепер перемикається на ліву половину екрана.

1. Внизу правої сторони екрана тепер відображається кнопка &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Відкрити налаштування VitalControl" title="Відкрити налаштування" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Натисніть цю кнопку, і відкриється спливаюче вікно, яке відобразить [Сторінку 1](#settings-menu-vitalcontrol-page-1) меню налаштувань `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl settings: Access" title="Access VitalControl settings menu" />
    <figcaption class="figure-caption fs-6">Скріншот 1: Доступ до меню налаштувань <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Меню налаштувань `{{<T "VitalControl" >}}` розподілено на дві сторінки:

## Меню налаштувань `{{<T "VitalControl" >}}` - Сторінка 1 {#settings-menu-vitalcontrol-page-1}

Сторінка 1 меню налаштувань <span style="font-style: italic;">{{<T "VitalControl" >}}</span> представлена наступним чином:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl settings menu: Page 1" title="VitalControl settings (1)" />
    <figcaption class="figure-caption fs-6">Скріншот 2: Меню налаштувань <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Сторінка 1</figcaption>
</figure>

На цій сторінці ви можете виконати наступні дії та налаштування.

### Активація пристрою {{<T "VitalControl" >}} {#activation-vitalcontrol}

У стандартному стані машина, {{<T "VitalControl" >}} деактивована. Встановіть перемикач <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> у праве положення <span style="font-style: italic;">{{<T "YES" >}}</span>, щоб активувати пристрій {{<T "VitalControl" >}}. Після цього в правій бічній панелі меню подачі, під значком(ами) підключеної машини(н), буде відображено значок <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl device" title="VitalControl"/> для пристрою `{{<T "VitalControl" >}}` (див. Скріншот <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Меню подачі</a></span>, рисунок <span style="font-size: 140%">➁</span> там).

### Синхронізація автоматичної годівниці <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

На лівій стороні екрана є два прапорці:

* Прапорець <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Цей параметр контролює поведінку у випадку, якщо на годівниці під час синхронізації присутні тварини, які ще не відомі пристрою {{<T "VitalControl" >}}. Цей параметр увімкнено за замовчуванням і зазвичай має залишатися встановленим. Якщо ви реєструєте своїх придбаних тварин шляхом сканування їхніх паспортів, цей параметр потрібно вимкнути.

    <span style="font-weight: bold">Увімкніть</span> цей параметр:

    - якщо у вас є абсолютно новий {{<T "VitalControl" >}}, на який ви хочете перенести всіх тварин з годівниці. Після синхронізації всі тварини, відомі годівниці, також будуть присутні на {{<T "VitalControl" >}}.
    - якщо ви постійно приводите нових телят до годівниці під час поточних операцій. Ці тварини також будуть створені на пристрої {{<T "VitalControl" >}} під час синхронізації.

    <span style="font-weight: bold">Вимкніть</span> цей параметр:

    - якщо ви створили нових тварин на вашому {{<T "VitalControl" >}} шляхом сканування їхніх паспортів, де
    - ці тварини ще не отримали транспондер і
    - ці тварини вже годуються на годівниці і, отже, зареєстровані там.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Увага</span><br>
                Якщо параметр залишиться встановленим у вищезазначеній конфігурації, тварини будуть присутні двічі на {{<T "VitalControl" >}} після синхронізації.
            </div>
        </div>


* Прапорець <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Цей параметр контролює, чи будуть тварини, які присутні лише в {{<T "VitalControl" >}}, але не на годівниці, видалені з {{<T "VitalControl" >}} під час наступної синхронізації. Якщо ви використовуєте {{<T "VitalControl" >}} лише під час молочного періоду тварин, цей параметр слід увімкнути. Якщо ви хочете відстежувати тварин після молочного періоду, ви повинні вимкнути цей параметр.

    <span style="font-weight: bold">Увімкніть</span> цей параметр:

    - якщо ви збираєте дані про тварин лише під час молочного періоду,
    - якщо ви хочете, щоб тварини були видалені з {{<T "VitalControl" >}} під час наступної синхронізації після того, як вони були видалені з годівниці. Таким чином, тварини не накопичуються на {{<T "VitalControl" >}} з часом.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Увага</span><br>
            Якщо цей параметр активовано і прапорець <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> також активовано, жодні тварини не будуть видалені, які молодші за вказане значення в полі числа <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
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

### Синхронізація {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Автоматична годівниця

На правій стороні екрана є прапорець і два поля введення:

* Прапорець <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Ця опція контролює, чи будуть тварини, присутні на {{<T "VitalControl" >}}, які невідомі годівниці, створені на годівниці під час наступної синхронізації. За замовчуванням ця опція не активована.

    <span style="font-weight: bold">Деактивуйте</span> цю опцію або залиште її деактивованою:

    - якщо ви використовуєте свій пристрій {{<T "VitalControl" >}} на кількох годівницях одночасно,
    - якщо ви приводите своїх тварин безпосередньо до годівниці без попередньої реєстрації їх через пристрій {{<T "VitalControl" >}}. Ваші тварини будуть автоматично створені під час реєстрації, коли вони вперше годуються на годівниці.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Увага</span><br>
            Якщо {{<T "VitalControl" >}} використовується на кількох машинах і ця опція відзначена, тварини будуть ненавмисно перенесені з однієї машини на іншу під час синхронізації.
        </div>
    </div>

<span style="font-weight: bold">Активуйте</span> цю опцію:

- якщо початкова реєстрація їхніх новонароджених тварин у {{<T "VitalControl" >}} відбувається до першого годування на годівниці.
- якщо ви реєструєте своїх придбаних тварин, скануючи їхні паспорти тварин на {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Увага</span><br>
        Активуйте цю опцію лише якщо ви використовуєте {{<T "VitalControl" >}} на одній машині! Якщо ви хочете виконати синхронізацію з кількома машинами з цією опцією, ви повинні використовувати окремий пристрій {{<T "VitalControl" >}} для кожної машини.
    </div>
</div>

* Випадаюче меню <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   У цьому випадаючому меню ви можете вибрати криву годування, яка призначена для тварин, що новостворені на годівниці під час синхронізації.

* Поле числового вводу<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    У цьому числовому полі ви можете вказати мінімальний вік (у днях), з якого тварини новостворюються на годівниці під час синхронізації. Тварини, які молодші за вказаний мінімальний вік, **не** створюються під час синхронізації.

Натисніть кнопку <span style="font-size: 140%">⑧</span>, щоб перейти на [сторінку 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">меню налаштувань {{<T "VitalControl" >}}</span>.

## Меню налаштувань `{{<T "VitalControl" >}}` - Сторінка 2 {#settings-menu-vitalcontrol-page-2}

### Як вирішувати конфлікти даних під час синхронізації

Конфлікти даних можуть виникати під час синхронізації даних між годівницею та пристроєм {{<T "VitalControl" >}}. Конфлікт даних виникає, коли дані суперечать один одному на пристрої {{<T "VitalControl" >}} та на годівниці (наприклад, стосовно <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). На цій сторінці 2 меню налаштувань ви можете вказати, чи і як вирішуються конфлікти даних під час синхронізації. Тут є три варіанти:

* Пріоритет надається даним годівниці, дані на пристрої {{<T "VitalControl" >}} перезаписуються даними з годівниці.
  Активуйте цей варіант, вибравши перемикач у лівій колонці під символом годівниці <span style="font-size: 140%">➃</span>.

* Пріоритет надається даним {{<T "VitalControl" >}}, дані на годівниці перезаписуються даними з пристрою {{<T "VitalControl" >}}.
  Активуйте цей варіант, вибравши перемикач у лівій колонці під символом {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Зміни не вносяться, як дані годівниці, так і дані пристрою {{<T "VitalControl" >}} залишаються незмінними.\
  Активуйте цей варіант, вибравши перемикач у правій колонці <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Приклад</span><br>
            Після того, як ви придбали партію телят, ви реєструєте придбаних тварин на {{<T "VitalControl" >}}, скануючи всі їхні паспорти тварин. Номери тварин для цих тварин на {{<T "VitalControl" >}} є – залежно від <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">налаштувань пристрою</a> – останніми 3-5 цифрами паспорта тварини. Потім ви надягаєте нашийники з транспондерами Urban на новопридбаних тварин і годуєте їх на автоматичній годівниці. Під час першого відвідування станції тварини реєструються за допомогою свого транспондера і створюються нові на годівниці. Однак номери тварин для цих нових тварин на годівниці виводяться з номера транспондера або відповідають номеру тварини, збереженому для цього транспондера на годівниці. Це означає, що різний номер тварини тепер призначено одній і тій самій тварині на пристрої {{<T "VitalControl" >}} та на годівниці, що призводить до конфлікту даних. Використовуючи перемикачі для <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, ви можете вказати в меню налаштувань, який з двох паралельних номерів тварин має пріоритет і який буде видалено під час синхронізації.
        </div>
</div>


<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Меню налаштувань VitalControl: Сторінка 2" title="Налаштування VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Скріншот 3: Меню налаштувань <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Сторінка 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Увага:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Увага</span><br>
        З внутрішніх причин зміни наразі можуть бути внесені лише до <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. У пізніших версіях прошивки ви також зможете вносити зміни до <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> та <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Натиснувши <span style="font-style: italic;">кнопку</span> <span style="font-size: 140%">⑧</span>, ви повернетеся на [сторінку 1](#settings-menu-vitalcontrol-page-1) меню налаштувань `{{<T "VitalControl" >}}`.
