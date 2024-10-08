---
title: Transzponder leválasztása
linkTitle: Transzponder leválasztása
slug: unlink-transponder
weight: 110
description: >
 Az állathoz rendelt transzponder leválasztása
date: 2023-07-26
kategóriák: [Transponder]
címkék: [Transponder]
translationKey: actions/transponder-unlink
---
{{% alert title="Figyelem" color="warning" %}}
Ez a művelet alapértelmezés szerint nincs engedélyezve! Aktiválja ezt a [művelet beállítás](../setting/) leírása szerint.
{{% /alert %}}

## Transzponder leválasztása {#unlink-transponder}

Ezzel a művelettel leválaszthat egy állathoz már hozzárendelt transzpondert az állatról.

1. A VitalControl készülék főképernyőjén válassza ki a &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` menüpontot, és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Vagy olvassa be a kívánt transzponderrel rendelkező állatot, vagy válassza ki a transzponderrel rendelkező állatot a listából. Ehhez erősítse meg az `{{<T "Ok" >}}` gombbal, és válassza ki az állat azonosítóját a △ ▽ nyílgombokkal. Erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik egy almenü az állatműveletekkel. Használja a ◁ ▷ △ ▽ nyílgombokat a &nbsp;<img src="/icons/actions/unlink-transponder.svg" width="45" align="bottom" alt="Unlink transponder" /> `{{<T "UnlinkTransponder" >}}` művelet kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. A transzponder sikeresen levált az állatról.

{{< tabpane >}}
{{< tab header="Transzponder leválasztása:" text=true disabled=true />}}
{{% tab header="Transzponder beolvasása" text=true %}}
![VitalControl: Menü Művelet Transzponder leválasztása](../images/unlinktransponder-scan.png "Transzponder leválasztása")
{{% /tab %}}
{{% tab header="Kézi kiválasztás a listából" text=true %}}
![VitalControl: Menü Művelet Transzponder leválasztása](../images/unlinktransponder.png "Transzponder leválasztása")
{{% /tab %}}
{{< /tabpane >}}
