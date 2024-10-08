---
title: Запис на тегло
linkTitle: Тегло
slug: record-weight
weight: 20
description: >
  Запишете теглото на вашите животни.
date: 2023-07-26
категории: [Действия]
тагове: [Действия, тегло]
translationKey: actions/weight
---

## Запис на тегло {#record-weight}
Използвайте &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Теглене" /> действието `{{<T "Weighing" >}}` за да запазите теглото на вашето животно индивидуално. За целта измерете теглото на животните или оценете тяхното тегло и въведете тази стойност в устройството VitalControl. Това ви позволява да проверите развитието на теглото на вашите животни и да ги оцените индивидуално.

{{% alert title="Съвет" %}}
Ако средното тегло се отклонява много силно в една посока (прекалено високо/прекалено ниско), стойността за дневното увеличение трябва да бъде коригирана.
{{% /alert %}}

1. На главния екран на вашето устройство VitalControl изберете менюто &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Действия" /> `{{<T "Actions" >}}` и натиснете бутона `{{<T "Ok" >}}`.

2. Сканирайте животно с помощта на транспондера или изберете животно от списъка. Потвърдете с `{{<T "Ok" >}}` и изберете животно със стрелките △ ▽. Потвърдете с `{{<T "Ok" >}}`.

3. Отваря се подменю с действия за животни. Използвайте стрелките ◁ ▷ за да изберете действието &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Теглене" /> `{{<T "Weighing" >}}` и потвърдете с `{{<T "Ok" >}}`.

4. Отваря се меню със спецификация за тегло. Увеличете или намалете това със стрелките △ ▽ и запазете резултата с бутона `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Запазване" /> или с бутона `{{<T "Ok" >}}`.

{{< tabpane >}}
{{< tab header="Запис на тегло:" text=true disabled=true />}}
{{% tab header="Сканиране с транспондер" text=true %}}
  ![VitalControl: Меню Действие Теглене](../images/weighing-scan.png "Теглене")
{{% /tab %}}
{{% tab header="Ръчен избор от списъка" text=true %}}
  ![VitalControl: Меню Действие Теглене](../images/weighing.png "Теглене")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Съвет" %}}
Ако това действие не е налично, вероятно е било деактивирано! Активирайте действието в менюто [настройки на действията](../setting/). Алтернативно, рестартирането на всички действия ще върне това действие обратно.
{{% /alert %}}
