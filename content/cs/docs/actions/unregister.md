---
title: Odhlásit zvíře
linkTitle: Odhlásit
slug: unregister
weight: 100
description: >
 Odhlásit zvíře
date: 2023-07-26
kategorie: [Akce]
štítky: [Akce, Odhlásit]
translationKey: actions/unregister
---
{{% alert title="Varování" color="warning" %}}
Jakmile odstraníte záznam o zvířeti, již není k dispozici pro účely hodnocení! Pokud odhlásíte zvíře, ale chcete například znovu hodnotit jeho vývoj, musíte si záznam o zvířeti ponechat!
{{% /alert %}}

## Odhlásit {#unregister}

Akce `{{<T "Unregister" >}}` vám umožňuje odhlásit zvíře, jakmile je přemístěno. Pro odhlášení zvířete postupujte následovně:

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Akce" /> `{{<T "Actions" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Buď naskenujte zvíře pomocí transpondéru nebo vyberte zvíře ze seznamu. Potvrďte `{{<T "Ok" >}}` a vyberte zvíře pomocí šipek △ ▽. Potvrďte `{{<T "Ok" >}}`.

3. Otevře se podmenu s akcemi pro zvíře. Pomocí šipek ◁ ▷ △ ▽ vyberte akci &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Odhlásit" /> `{{<T "Unregister" >}}` a potvrďte `{{<T "Ok" >}}`.

4. Otevře se další podmenu, ve kterém můžete uložit různá nastavení. Pomocí šipek △ ▽ vyberte požadovanou možnost nastavení. Pomocí šipek ◁ ▷ vyberte požadované nastavení.

5. Pomocí klávesy `F3` `{{<T "Unregister" >}}` odhlásíte zvíře s uvedenými nastaveními.

{{< tabpane >}}
{{< tab header="Odhlásit:" text=true disabled=true />}}
{{% tab header="Skenování transpondéru" text=true %}}
![VitalControl: Menu Akce Odhlásit](../images/unregister-scan.png "Odhlásit zvíře")
{{% /tab %}}
{{% tab header="Ruční výběr ze seznamu" text=true %}}
![VitalControl: Menu Akce Odhlásit](../images/unregister.png "Odhlásit zvíře")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Tip" %}}
Pokud tato akce není k dispozici, pravděpodobně byla deaktivována! Aktivujte akci v menu [nastavení akcí](../settings/). Alternativně, resetování všech akcí tuto akci znovu zpřístupní.
{{% /alert %}}
