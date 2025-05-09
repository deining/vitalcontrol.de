---
title: Структура та вміст експортованих файлів даних CSV
linkTitle: Експорт файлів
date: 2023-07-20
weight: 30
description: >
  Опис структури та вмісту чотирьох файлів даних, створених під час експорту.
categories: [Експорт даних]
tags: [експорт файлів, температури, ваги, оцінки]
slug: export-files
translationKey: data-export/data-files
---
## Загальна інформація {#general-information}

Під час експорту даних про тварин, незалежно від того, чи це на [USB флеш-накопичувач][] чи на локальний накопичувач [на ПК][], у кожному випадку створюються чотири експортні файли:

- [Дані про тварин][] `(animals.csv)`
- [Дані про температуру тіла][] `(temperatures.csv)`
- [Дані про вагу][] `(weights.csv)`
- [Оцінки тварин][] `(ratings.csv)`

[USB флеш-накопичувач]: ../usb-drive/
[на ПК]: ../pc/

[Дані про тварин]: #animal-data-animalscsv
[Дані про температуру тіла]: #body-temperature-data-temperaturescsv
[Дані про вагу]: #weight-data-weightscsv
[Оцінки тварин]: #animal-ratings-ratingscsv

Усі чотири файли є текстовими файлами [CSV](https://en.wikipedia.org/wiki/Comma-separated_values), які можна читати людиною. Файли закодовані у форматі `UTF-8`, як роздільники колонок використовуються крапки з комою (`;`). Окремі поля даних *не* обмежені лапками. Кожен рядок відповідної таблиці представляє набір даних про тварину або вимірювання чи оцінку, виконану на тварині.

## Подальша обробка експортованих даних {#further-processing-of-exported-data}

Ви можете відкрити кожен з цих чотирьох експортних файлів у програмі для роботи з електронними таблицями на ваш вибір (такій як [Microsoft Excel](https://products.office.com/excel) або [OpenOffice Calc](https://www.openoffice.org/)) і виконати там розширений аналіз даних. Наприклад, нижче показано вигляд таблиці `animals.csv` у програмі для роботи з електронними таблицями:

![Експортовані дані про тварин, відкриті у програмі для роботи з електронними таблицями](../images/animals.png "Дані про тварин, відкриті у програмі для роботи з електронними таблицями")

## Опис файлів даних {#description-of-data-files}

Наступні чотири розділи детально описують кожен з експортованих файлів даних:

### Дані про тварин (`animals.csv`) {#animal-data-animalscsv}

- **Назва файлу** `animals.csv`
- **Опис** Загальні дані про тварин
- **Кількість колонок** 6

Кожен рядок таблиці даних про тварин представляє одну тварину, збережену на VitalControl. Приклад таблиці даних про тварин має наступний вигляд:

{{% data-files/en %}}

Наступна таблиця перераховує та описує кожну колонку таблиці даних про тварин:

|Колонка| Назва колонки       | Опис                             | Коментарі                                                 |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Офіційний національний номер тварини | 15 цифр згідно з [ISO1174/85][], може бути не записаний   |
| 2 | `Farm-ID-Animal`     | Управлінський номер              | 2-6 цифр, часто збігається з номером на нашийнику         |
| 3 | `Transponder-ID`     | Номер транспондера               | може бути відсутнім, може збігатися з національним номером тварини |
| 4 | `DateOfBirth`        | Дата народження                  | Формат: `YYYY-MM-TT` (`Рік-Місяць-День`)                  |
| 5 | `Sex`                | Стать                            | _Значення:_ `M`: чоловіча, `F`: жіноча, `?`: невідома     |
| 6 | `BirthWeight-Kg`     | Вага при народженні              | Одиниця: `кілограм`, може бути не записана / відсутня     |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

За потреби, ви також можете завантажити наданий зразок файлу [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Дані про температуру тіла (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Назва файлу** `temperatures.csv`
- **Опис** Значення температури, отримані шляхом вимірювання ректальної температури тіла тварин.
- **Кількість колонок** 5

Кожен рядок таблиці даних про температуру представляє вимірювання температури тіла, виконане на тварині за допомогою пристрою VitalControl. Приклад таблиці температур має наступний вигляд:


{{% data-files/en_2 %}}

a
Наступна таблиця містить перелік та опис кожного стовпця експортного файлу, що містить значення температури тіла:

|Стовпець| Назва стовпця        | Опис                                | Коментарі                                         |
|:-:|---------------------------|-------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`      | 15-значний номер вимірюваної тварини | згідно з [ISO1174/85][], можливо, не записано    |
| 2 | `Farm-ID-Animal`          | Управлінський номер вимірюваної тварини | 2-6 цифр, часто дорівнює номеру нашийника       |
| 3 | `Date`                    | Дата вимірювання температури        | Формат: `YYYY-MM-TT` (`Рік-Місяць-День`)         |
| 4 | `Time`                    | Uhrzeit der Temperaturmessung        | Формат: `hh-mm-ss` (`година:хвилина:секунда`)    |
| 5 | `Temperature-Celsius`     | Виміряне значення температури       | Одиниця: `Градус Цельсія`                        |

За потреби, ви також можете завантажити наданий зразок файлу [temperatures.csv][]. На малюнку нижче показано цей файл даних, відкритий у програмі для роботи з електронними таблицями.

![Експортний файл зі значеннями температури тіла, відкритий у програмі для роботи з електронними таблицями](../images/temperatures.png "Таблиця значень температури")

[temperatures.csv]: /data-export/temperatures.csv

### Дані про вагу (`weights.csv`) {#weight-data-weightscsv}

- **Назва файлу** `weights.csv`
- **Опис** Значення ваги, отримані шляхом зважування тварин
- **Кількість стовпців** 5

Кожен рядок таблиці ваги представляє одне зважування тварини за допомогою пристрою VitalControl для запису значення ваги. Приклад таблиці ваги має такий вигляд:

{{% data-files/en_3 %}}

Наступна таблиця містить перелік та опис окремих стовпців таблиці, що містить вагу тварин:

|Стовпець| Назва стовпця        | Опис                                | Коментарі                                         |
|:-:|---------------------------|-------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`      | 15-значний номер зважуваної тварини | згідно з [ISO1174/85][], можливо, не записано    |
| 2 | `Farm-ID-Animal`          | Управлінський номер зважуваної тварини | 2-6 цифр, часто дорівнює номеру нашийника       |
| 3 | `Date`                    | Дата зважування                     | Формат: `YYYY-MM-TT` (`Рік-Місяць-День`)         |
| 4 | `Time`                    | Час зважування                      | Формат: `hh-mm-ss` (`година:хвилина:секунда`)    |
| 5 | `Weight-Kg`               | Значення ваги                       | Одиниця: `Кілограм`                              |

Якщо потрібно, ви також можете завантажити наданий зразок файлу [weights.csv][]. На малюнку нижче показано цей експортний файл, відкритий у програмі для роботи з електронними таблицями.

![Експортний файл зі значеннями ваги тварин, відкритий у програмі для роботи з електронними таблицями](../images/weights.png "Таблиця значень ваги")

[weights.csv]: /data-export/weights.csv

### Оцінки тварин (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Назва файлу** `ratings.csv`
- **Опис** Оцінки тварин, отримані шляхом візуального огляду тварин
- **Кількість колонок** 8

Кожен рядок таблиці оцінок тварин представляє візуальну оцінку тварини, проведену за допомогою VitalControl. Зразкова таблиця з оцінкою тварин має наступний вигляд:

{{% data-files/en_4 %}}

Наступна таблиця перераховує та описує кожну колонку таблиці оцінок тварин:

|Колонка| Назва колонки      | Опис                                    | Коментарі                                      |
|:-:|-----------------------|-----------------------------------------|------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-значний номер оціненої тварини       | відповідно до [ISO1174/85][], можливо не записано |
| 2 | `Farm-ID-Animal`      | Управлінський номер оціненої тварини    | 2- до 6 цифр, часто дорівнює номеру нашийника  |
| 3 | `Date`                | Дата оцінки                             | Формат: `YYYY-MM-TT` (`Рік-Місяць-День`)       |
| 4 | `Time`                | Час оцінки                              | Формат: `hh-mm-ss` (`година:хвилина:секунда`)  |
| 5 | `ScoreCondition`      | Оцінка загального стану                 | _Оцінки:_ `Red`, `Yellow`, `Green`, `None`     |
| 6 | `ScoreFeedIntake`     | Оцінка споживання корму                 | _Оцінки:_ `Red`, `Yellow`, `Green`, `None`     |
| 7 | `ScoreScours`         | Оцінка стану щодо `Scours`              | _Оцінки:_ `Red`, `Yellow`, `Green`, `None`     |
| 8 | `ScoreRespiratory`    | Оцінка стану `Респіраторні захворювання`| _Оцінки:_ `Red`, `Yellow`, `Green`, `None`     |


Якщо необхідно, ви також можете завантажити наданий зразок файлу [ratings.csv][]. На малюнку нижче показано цей файл, відкритий у програмі для роботи з електронними таблицями.

![Експорт файлу з оцінками тварин, відкритий у програмі для роботи з електронними таблицями](../images/ratings.png "Таблиця оцінок тварин")

[ratings.csv]: /data-export/ratings.csv
