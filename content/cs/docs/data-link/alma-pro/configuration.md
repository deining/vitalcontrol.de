---
title: Jednorázová aktivace a konfigurace zařízení v nastavení automatického podavače
linkTitle: Konfigurace
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Před prvním použitím VitalControl musíte zařízení jednorázově aktivovat a správně nakonfigurovat v nastavení podavače Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Pro aktivaci a nastavení zařízení VitalControl postupujte následovně:

## Navigace do menu nastavení `{{<T "VitalControl" >}}`

{{% alert title="Pozor" %}}
Pro aktivaci a nastavení zařízení {{<T "VitalControl" >}} musíte být přihlášeni jako uživatelská role {{<T "SiteManager" >}} na automatickém podavači. Jinak některá z tlačítek zobrazená a popsaná níže nebudou viditelná.
{{% /alert %}}

1. Klikněte na spodní tlačítko <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Menu Nastavení" title="Nastavení"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> v levém postranním panelu dotykového terminálu. Pokud jste v hlavním menu, kde není viditelný postranní panel, stiskněte tlačítko &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Menu Podavače" title="Menu Podavače"/>`{{<T "Feeder" >}}` pro zobrazení postranního panelu.

1. Klikněte na druhé tlačítko zleva <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Nastavení Dotykového Terminálu" title="Nastavení Dotyku"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> v dolním panelu nástrojů dotykového terminálu.

1. Nyní se na levé polovině centrální obrazovky objeví řada položek menu. Klikněte na spodní tlačítko `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Na pravé polovině centrální obrazovky se nyní objeví položka menu (nebo možná několik). Klikněte na horní tlačítko `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Tlačítko se nyní přesune na levou polovinu obrazovky.

1. Ve spodní části pravé strany obrazovky se nyní zobrazuje tlačítko &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Otevřít nastavení VitalControl" title="Otevřít nastavení" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Klikněte na toto tlačítko a otevře se vyskakovací okno, které zobrazí [Stránku 1](#settings-menu-vitalcontrol-page-1) menu nastavení `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Nastavení VitalControl: Přístup" title="Přístup do menu nastavení VitalControl" />
    <figcaption class="figure-caption fs-6">Snímek 1: Přístup do menu nastavení <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Menu nastavení `{{<T "VitalControl" >}}` je rozděleno na dvě stránky:

## Menu Nastavení `{{<T "VitalControl" >}}` - Stránka 1 {#settings-menu-vitalcontrol-page-1}

Stránka 1 menu nastavení <span style="font-style: italic;">{{<T "VitalControl" >}}</span> je prezentována následovně:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Menu nastavení VitalControl: Stránka 1" title="Nastavení VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Snímek 2: Menu nastavení <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Stránka 1</figcaption>
</figure>

Na této stránce můžete provádět následující akce a nastavení.

### Aktivace zařízení {{<T "VitalControl" >}} {#activation-vitalcontrol}

Ve výchozím stavu stroje je {{<T "VitalControl" >}} deaktivován. Nastavte přepínač <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> do pravé polohy <span style="font-style: italic;">{{<T "YES" >}}</span> pro aktivaci zařízení {{<T "VitalControl" >}}. Následně se v pravém postranním panelu menu podavače, pod ikonou/ikonami pro připojený stroj/stroje, zobrazí ikona <img src="/icons/device.svg" width="20" align="bottom" alt="Zařízení VitalControl" title="VitalControl"/> pro zařízení `{{<T "VitalControl" >}}` (viz Snímek <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Menu Podavače</a></span>, obrázek <span style="font-size: 140%">➁</span> tam).

### Synchronizace automatického krmítka <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Na levé straně obrazovky jsou dvě zaškrtávací políčka:

* Zaškrtávací políčko <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Tato možnost řídí chování v případě, že jsou na krmítku během synchronizace přítomna zvířata, která ještě nejsou známa zařízení {{<T "VitalControl" >}}. Tato možnost je ve výchozím nastavení povolena a obecně by měla zůstat nastavena. Pokud registrujete zakoupená zvířata skenováním jejich pasů, musí být tato možnost zakázána.

    <span style="font-weight: bold">Povolte</span> tuto možnost:

    - pokud máte před sebou zcela nový {{<T "VitalControl" >}}, na který chcete přenést všechna zvířata z krmítka. Po synchronizaci budou všechna zvířata známá krmítku také přítomna na {{<T "VitalControl" >}}.
    - pokud během probíhajícího provozu neustále přivádíte nová telata ke krmítku. Tato zvířata pak budou také vytvořena na zařízení {{<T "VitalControl" >}} během synchronizace.

    <span style="font-weight: bold">Zakázat</span> tuto možnost:

    - pokud máte na svém {{<T "VitalControl" >}} nově vytvořená zvířata skenováním jejich pasů, kde
    - tato zvířata ještě nebyla přiřazena transpondéru a
    - tato zvířata jsou již krmena u krmítka a jsou tedy tam registrována.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
                Pokud zůstane možnost nastavena v uvedené konfiguraci, budou zvířata po synchronizaci přítomna dvakrát na {{<T "VitalControl" >}}.
            </div>
        </div>


* Zaškrtávací políčko <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Tato možnost určuje, zda budou z {{<T "VitalControl" >}} během další synchronizace smazána zvířata, která jsou přítomna pouze na {{<T "VitalControl" >}}, ale ne na krmítku. Pokud používáte {{<T "VitalControl" >}} pouze během mléčného období zvířat, měla by být tato možnost povolena. Pokud chcete sledovat zvířata i po mléčném období, musíte tuto možnost zakázat.

    <span style="font-weight: bold">Povolte</span> tuto možnost:

    - pokud sbíráte data o zvířatech pouze během mléčného období,
    - pokud chcete, aby byla zvířata smazána z {{<T "VitalControl" >}} během další synchronizace poté, co byla smazána z krmítka. Tímto způsobem se zvířata na {{<T "VitalControl" >}} časem nehromadí.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
            Pokud je tato možnost aktivována a zaškrtávací políčko <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> je také aktivováno, nebudou smazána žádná zvířata, která jsou mladší než je uvedeno v číselném poli <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Zakázat</span> tuto možnost:
    - pokud chcete pokračovat ve sběru dat o zvířatech po mléčném období, například během vážení,
    - pokud jste ochotni zvířata z {{<T "VitalControl" >}} smazat sami ručně.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Pokud tuto možnost deaktivujete, musíte odpojit transpondér pro odstavená zvířata na zařízení {{<T "VitalControl" >}} nejpozději, když je obojek odstraněn z odstaveného telete na jiné, mladší tele. Pokud transpondér není odstraněn, záznamy dat mladšího zvířete - které nyní nosí bývalý obojek odstaveného zvířete - jsou nesprávně přidány do datové sady odstavených zvířat.
    </div>
</div>

### Synchronizace {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automatický krmítko

Na pravé straně obrazovky je zaškrtávací políčko a dvě vstupní pole:

* Zaškrtávací políčko <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Tato možnost ovládá, zda zvířata přítomná na {{<T "VitalControl" >}}, která jsou neznámá krmítku, budou vytvořena na krmítku během příští synchronizace. Ve výchozím nastavení není tato možnost aktivována.

    <span style="font-weight: bold">Deaktivujte</span> tuto možnost nebo ji nechte deaktivovanou:

    - pokud používáte své zařízení {{<T "VitalControl" >}} na více krmítkách současně,
    - pokud přivádíte svá zvířata přímo ke krmítku, aniž byste je nejprve registrovali přes zařízení {{<T "VitalControl" >}}. Vaše zvířata budou automaticky vytvořena během registrace, když budou poprvé krmena u krmítka.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
            Pokud je {{<T "VitalControl" >}} používán na více strojích a tato možnost je zaškrtnuta, zvířata budou během synchronizace neúmyslně přenesena z jednoho stroje na druhý.
        </div>
    </div>

<span style="font-weight: bold">Aktivujte</span> tuto možnost:

- pokud se počáteční registrace jejich novorozených zvířat pomocí {{<T "VitalControl" >}} uskuteční před prvním krmením u krmítka.
- pokud zaznamenáváte svá zakoupená zvířata skenováním jejich zvířecích pasů na {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Aktivujte tuto možnost pouze v případě, že používáte {{<T "VitalControl" >}} na jednom zařízení! Pokud chcete provádět synchronizaci s více zařízeními s touto nastavenou možností, musíte použít samostatné zařízení {{<T "VitalControl" >}} pro každé zařízení.
    </div>
</div>

* Rozbalovací menu <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   V tomto rozbalovacím menu můžete vybrat krmnou křivku, která je přiřazena zvířatům, která jsou nově vytvořena na krmítku během synchronizace.

* Číselné vstupní pole<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    V tomto číselném poli můžete zadat minimální věk (ve dnech), od kterého jsou zvířata nově vytvořena na krmítku během synchronizace. Zvířata, která jsou mladší než zadaný minimální věk, **nejsou** vytvořena během synchronizace.

Stiskněte tlačítko <span style="font-size: 140%">⑧</span> pro přepnutí na [stránku 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">menu nastavení {{<T "VitalControl" >}}</span>.

## Nabídka nastavení `{{<T "VitalControl" >}}` - Stránka 2 {#settings-menu-vitalcontrol-page-2}

### Jak řešit konflikty dat během synchronizace

Ke konfliktům dat může dojít při synchronizaci dat mezi krmítkem a zařízením {{<T "VitalControl" >}}. Ke konfliktu dat dochází, když si data na zařízení {{<T "VitalControl" >}} a na krmítku odporují (např. ohledně <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Na této stránce 2 nabídky nastavení můžete určit, zda a jak se konflikty dat řeší během synchronizace. Zde jsou tři možnosti:

* Priorita je dána datům z krmítka, data na zařízení {{<T "VitalControl" >}} jsou přepsána daty z krmítka.\
  Tuto možnost aktivujete výběrem radiového tlačítka v levém sloupci pod symbolem krmítka <span style="font-size: 140%">➃</span>.

* Priorita je dána datům z {{<T "VitalControl" >}}, data na krmítku jsou přepsána daty ze zařízení {{<T "VitalControl" >}}.\
  Tuto možnost aktivujete výběrem radiového tlačítka v levém sloupci pod {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Žádné změny nejsou provedeny, data z krmítka i data ze zařízení {{<T "VitalControl" >}} zůstávají nezměněna.\
  Tuto možnost aktivujete výběrem radiového tlačítka v pravém sloupci <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Příklad</span><br>
            Poté, co jste zakoupili skupinu telat, zaregistrujete svá zakoupená zvířata na {{<T "VitalControl" >}} naskenováním všech jejich zvířecích pasů. Čísla zvířat pro tato zvířata na {{<T "VitalControl" >}} jsou pak – v závislosti na <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">nastavení zařízení</a> – poslední 3-5 číslice zvířecího pasu. Poté umístíte obojky s Urban transpondéry na nově zakoupená zvířata a krmíte je u automatického krmítka. Během první návštěvy stanice jsou zvířata registrována pomocí jejich transpondéru a nově vytvořena u krmítka. Čísla zvířat pro tato nová zvířata na krmítku jsou však odvozena z čísla transpondéru nebo odpovídají číslu zvířete uloženému pro tento transpondér v krmítku. To znamená, že nyní bylo stejnému zvířeti přiřazeno jiné číslo zvířete na zařízení {{<T "VitalControl" >}} a na krmítku, což vede ke konfliktu dat. Pomocí radiových tlačítek pro <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> můžete nyní v nabídce nastavení určit, které z těchto dvou paralelních čísel zvířat má prioritu a které bude během synchronizace smazáno.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Nabídka nastavení VitalControl: Stránka 2" title="Nastavení VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Snímek obrazovky 3: Nabídka nastavení <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Stránka 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Z interních důvodů lze aktuálně provádět změny pouze u <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. V pozdějších verzích firmwaru budete moci provádět změny také u <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> a <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Stisknutím <span style="font-style: italic;">tlačítka</span> <span style="font-size: 140%">⑧</span> se vrátíte na [stránku 1](#settings-menu-vitalcontrol-page-1) nabídky nastavení `{{<T "VitalControl" >}}`.
