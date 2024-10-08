---
title: "Раждания"
linkTitle: "Раждания"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Тук можете да видите вашите раждания и да създадете файл за експорт.
категории: [Раждания]
тагове: [Раждания]
translationKey: new-on-farm/births
---
## Раждания {#births}

В този списък можете да видите вашите раждания, да ги редактирате и да създадете файл за експорт за регистрация в HI-Tier. За да създадете файл за експорт, следвайте следните стъпки:

{{% alert title="Съвет" %}}
За експорт на данни ви е необходим включеният USB стик. Свържете USB стика с адаптера USB-C към вашето устройство VitalControl преди да следвате инструкциите.
{{% /alert %}}

1. На главния екран на вашето устройство VitalControl изберете менюто <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Ново на фермата" /> `{{<T "NewOnFarm" >}}` и натиснете бутона `{{<T "Ok" >}}`.

2. Отваря се подменю, в което можете да избирате между <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Ново на фермата, без транспондер" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Купени животни" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Без национален номер на животното" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Раждания" /> `{{<T "Births" >}}` и <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Без присвоен транспондер" /> `{{<T "NoTransponderAssigned" >}}`. Използвайте стрелките ◁ ▷ △ ▽ за да изберете менюто <img src="/icons/main/births.svg" width="40" align="bottom" alt="Раждания" /> `{{<T "Births" >}}` и потвърдете с `{{<T "Ok" >}}`.

3. Отваря се списък с всички ваши раждания.

4. Използвайте клавиша `F3` `{{<T "ExportListBirths" >}}`. Отваря се подменю.

5. Използвайте стрелките △ ▽ за да изберете менюто `{{<T "ExportListBirths" >}}` и потвърдете с `{{<T "Ok" >}}`.

6. Списъкът сега е запазен като CSV файл на вашия USB стик. Всички животни от списъка `{{<T "Births" >}}` са изтрити.

    ![VitalControl: Меню Ново на фермата Раждания](../images/births.png "Раждания")

## Настройки на опциите {#setting-options}

Освен създаването на експортен файл, имате следните опции:

- [Промяна](#change-between-list-view-and-single-animal-view) между изглед списък и изглед на отделно животно
- [Изчистване на всички известия за раждане](../purchased-animals/#clear-all-purchase-notices)
- [Изтриване на животно + известия](../purchased-animals/#delete-animal--purchase-notice)
- [Изчистване на известие за раждане](../purchased-animals/#clear-notice-of-purchase)
- [Редактиране](#edit-data-of-birth-notice) на известие

{{% alert title="Съвет" %}}
Някои действия са идентични с действията в списъка `{{<T "PurchasedAnimals" >}}`. Следвайте връзките към стъпка по стъпка инструкциите. Винаги първо отваряйте списъка `{{<T "Births" >}}`, както е описано в инструкциите по-горе.
{{% /alert %}}

### Промяна между изглед списък и изглед на отделно животно {#change-between-list-view-and-single-animal-view}

1. Използвайте бутона <img src="/icons/gear.svg" width="25" align="bottom" alt="Зъбно колело" /> `On /Off`.

2. Използвайте стрелките ◁ ▷ за избор между `{{<T "ListView" >}}` и `{{<T "SingleAnimalView" >}}`.

3. Запазете настройката си с клавиша `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Запази и излез" />&nbsp;. В изглед списък, използвайте стрелките ◁ ▷ за превключване между животните.

    ![VitalControl: Меню Ново на фермата Раждания](../images/change.png "Промяна между изглед списък и изглед на отделно животно")

### Редактиране на данни за известие за раждане {#edit-data-of-birth-notice}

{{% alert title="Съвет" %}}
Редактирането на данни за животното е възможно само в изглед списък!
{{% /alert %}}

1. Използвайте стрелките △ ▽ за избор на животното, което искате да редактирате, и потвърдете с `{{<T "Ok" >}}`.

2. Отваря се подменю, в което можете да регулирате различни настройки. За стъпка по стъпка инструкции кликнете [тук](/bg/docs/new/calving/#register-a-calving).

    ![VitalControl: Меню Ново на фермата Раждания](../images/edit2.png "Редактиране на известие за раждане")
