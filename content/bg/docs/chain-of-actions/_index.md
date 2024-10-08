---
title: "Поредица от действия: настройка и употреба"
linkTitle: "Поредица от действия"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Изпълнение на множество действия с животни последователно
категории: [Поредица от действия]
тагове: [Поредица от действия, Действия]
translationKey: action-chain
---
## Поредица от действия {#chain-of-actions}

Поредицата от действия ви позволява автоматично да извършите няколко действия за едно животно едно след друго. Например, можете да изберете действията `{{<T "Temperature" >}}` и `{{<T "Rating" >}}`. Ако след това изпълните поредицата от действия, първо можете да вземете температурата на животното и веднага след това да запишете оценката.

### Използване на поредица от действия {#use-chain-of-actions}

1. На главния екран на вашето устройство VitalControl изберете менюто &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Поредица от действия" />&nbsp; `{{<T "ActionChain" >}}` и натиснете бутона `{{<T "Ok" >}}`.

2. Сканирайте животно с помощта на транспондера или потвърдете с `{{<T "Ok" >}}` и използвайте стрелките △ ▽ ◁ ▷ за въвеждане на желания идентификационен номер на животното.

3. Поредицата от действия се изпълнява. Щом всички действия в поредицата от действия бъдат извършени, може директно да изберете следващото животно.

{{< tabpane >}}
{{< tab header="Използване на поредица от действия:" text=true disabled=true />}}
{{% tab header="Сканиране с транспондер" text=true %}}
![VitalControl: Меню поредица от действия](images/chainofactions-scan.png "Поредица от действия")
{{% /tab %}}
{{% tab header="Ръчен избор от списъка" text=true %}}
![VitalControl: Меню поредица от действия](images/chainofactions.png "Поредица от действия")
{{% /tab %}}
{{< /tabpane >}}

### Настройка на поредица от действия {#set-chain-of-actions}

1. На главния екран на вашето устройство VitalControl изберете менюто &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Поредица от действия" />&nbsp; `{{<T "ActionChain" >}}` и натиснете бутона `{{<T "Ok" >}}`.

2. Използвайте бутона `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Настройки на поредицата" />&nbsp; (`{{<T "Settings" >}}`).

3. Появява се екран за настройки. Използвайте стрелките △ ▽ за избор между изброените действия 1 - 4 (можете да изпълните до четири действия последователно). Използвайте стрелките ◁ ▷ за избор на желаното действие за съответното действие. Запазете настройките с бутона `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Запази и излез" />&nbsp;.

4. Ако искате да рестартирате цялата верига от действия, изберете опцията `{{<T "ResetActionChain" >}}` в подменюто, като използвате стрелките △ ▽ и потвърдете с `{{<T "Ok" >}}`.

    ![VitalControl: Menu chain of actions](images/setchainofactions.png "Set chain of actions")

{{% alert title="Съвет" %}}
В рамките на отделните действия имате същите настройки, както са описани в главата [Actions](../actions) за всяко отделно действие.
{{% /alert %}}

{{% alert title="Съвет" %}}
Символите в началния екран на веригата от действия показват кои действия сте задали и в какъв ред.
{{% /alert %}}
