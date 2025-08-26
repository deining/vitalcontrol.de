---
title: Jednorázová aktivace a konfigurace zařízení v nastavení automatického podavače
linkTitle: Konfigurace
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Před prvním použitím VitalControl je nutné jej jednorázově aktivovat a správně nakonfigurovat v nastavení podavače Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/cs
---
## Požadavky

Doporučujeme používat verzi firmwaru <span style="font-weight: bold">24-xx-xx</span> nebo vyšší se zařízením VitalControl.\
Chcete-li zkontrolovat, která verze firmwaru je nainstalována na vašem zařízení:

* Přejděte na domovskou stránku podavače kliknutím na horní tlačítko `Domů` <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Ikona domovské obrazovky" title="Alma Pro: Domovská obrazovka"/>&nbsp; v navigačním panelu v levé části obrazovky.
* Na domovské obrazovce klikněte na tlačítko `Nápověda` <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Ikona menu nápovědy" title="Alma Pro: Obrazovka nápovědy"/>&nbsp; v pravé horní části obrazovky.
* Číslo verze <span style="font-size: 140%">➂</span> je nyní zobrazeno vlevo od tlačítka pro přepínání jazyka.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: kontrola verze firmwaru" title="Alma Pro: kontrola verze firmwaru" />
    <figcaption class="figure-caption fs-6">Snímek obrazovky 1: <span style="font-style: italic;">Alma Pro: kontrola verze firmwaru</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Upozornění:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Pokud je verze firmwaru vašeho podavače nižší než <span style="font-weight: bold">24-xx-xx</span>, mohou se vyskytnout nesrovnalosti mezi níže uvedenými snímky obrazovky a zobrazením na vašem dotykovém displeji, takže nemusíte být schopni postupovat podle pokynů. V takovém případě kontaktujte svého servisního technika, aby aktualizoval firmware na vašem podavači.<br>
    </div>
</div>

## Navigace do menu nastavení `{{% T "VitalControl" %}}`

{{% alert title="Pozor" %}}
Pro aktivaci a nastavení zařízení {{<T "VitalControl" >}}, musíte být přihlášeni jako uživatelská role {{<T "SiteManager" >}} na automatickém podavači. Jinak některá z tlačítek zobrazená a popsaná níže nebudou pro vás viditelná.
{{% /alert %}}

1. Klikněte na spodní tlačítko <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Menu nastavení" title="Nastavení"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> v levém postranním panelu dotykového terminálu. Pokud jste v hlavním menu, kde není viditelný žádný postranní panel, stiskněte tlačítko &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Menu podavače" title="Menu podavače"/>`{{<T "Feeder" >}}` pro zobrazení postranního panelu.

1. Klikněte na druhé tlačítko zleva <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Nastavení dotykového terminálu" title="Nastavení dotyku"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> v dolní nástrojové liště dotykového terminálu.

1. Na levé polovině centrální obrazovky se nyní objeví řada položek menu. Klikněte na spodní tlačítko `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Na pravé polovině centrální obrazovky se nyní objeví položka menu (nebo možná několik). Klikněte na horní tlačítko `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Tlačítko se nyní přesune na levou polovinu obrazovky.

1. Ve spodní části pravé strany obrazovky se nyní zobrazí tlačítko &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Otevřít nastavení VitalControl" title="Otevřít nastavení" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Klikněte na toto tlačítko a otevře se vyskakovací okno, které zobrazí [Stránku 1](#settings-menu-vitalcontrol-page-1) menu nastavení `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="Otevřít nastavení VitalControl"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Otevřít nastavení VitalControl" />
    </div>
    <map name="NavigationToVitalControlSettingsMenu">
        <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='{{<T "Settings" >}}' href="#Navigation_Digit_1">
        <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='{{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
        <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='{{<T "Accessories" >}}' href="#Navigation_Digit_3">
        <area shape="rect" coords="520,150,870,197" alt='{{<T "VitalControl" >}}' title='{{<T "VitalControl" >}}' href="#Navigation_Digit_4">
        <area shape="rect" coords="580,582,850,636" alt='{{<T "OpenSettings" >}}' title='{{<T "OpenSettings" >}}' href="#Navigation_Digit_5">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Snímek obrazovky 2: Přístup do menu nastavení <span style="font-style: italic;">{{<T "VitalControl" >}}
</figcaption>

Nabídka nastavení `{{<T "VitalControl" >}}` je rozdělena na dvě stránky:

## Nabídka nastavení `{{% T "VitalControl" %}}` - Stránka 1 {#settings-menu-vitalcontrol-page-1}

Stránka 1 nabídky nastavení <span style="font-style: italic;">{{<T "VitalControl" >}}</span> je prezentována následovně:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="Nabídka nastavení VitalControl: Stránka 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Nastavení VitalControl (1)" />
    </div>
    <map name="VitalControlSettingsPage1">
        <area shape="rect" coords="253,45,626,107" alt='{{<T "YES" >}}/{{<T "NO" >}}' title='{{<T "YES" >}}/{{<T "NO" >}}' href="#VitalControlSettingsPage1_Digit_1">
        <area shape="rect" coords="11,236,88,316" alt='{{<T "RegisterNewOnVitalControlDevice" >}}' title='{{<T "RegisterNewOnVitalControlDevice" >}}' href="#VitalControlSettingsPage1_Digit_2">
        <area shape="rect" coords="11,357,88,434" alt='{{<T "DeleteFromVitalControl" >}}' title='{{<T "DeleteFromVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
        <area shape="rect" coords="31,463,357,508" alt='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' title='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' href="#VitalControlSettingsPage1_Digit_4">
        <area shape="rect" coords="420,236,511,286" alt='{{<T "RegisterNewOnAutomaticFeeder" >}}' title='{{<T "RegisterNewOnAutomaticFeeder" >}}' href="#VitalControlSettingsPage1_Digit_5">
        <area shape="rect" coords="435,352,837,397" alt='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' title='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' href="#VitalControlSettingsPage1_Digit_6">
        <area shape="rect" coords="513,462,837,507" alt='{{<T "DoNotImportAnimalsOlderThan" >}}' title='{{<T "DoNotImportAnimalsOlderThan" >}}' href="#VitalControlSettingsPage1_Digit_7">
        <area shape="rect" coords="142,517,215,616" alt='Page 2' title='Page 2' href="#VitalControlSettingsPage1_Digit_8">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Snímek obrazovky 3: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> nabídka nastavení, Stránka 1
</figcaption>

Na této stránce můžete provádět následující akce a nastavení.

### Aktivace zařízení {{% T "VitalControl" %}} {#activation-vitalcontrol}

V základním stavu stroje je {{<T "VitalControl" >}} deaktivován. Nastavte přepínač <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> do pravé polohy <span style="font-style: italic;">{{<T "YES" >}}</span> pro aktivaci zařízení {{<T "VitalControl" >}}. Následně se v pravém postranním panelu nabídky podavače, pod ikonou/ikonami pro připojený stroj/stroje, zobrazí ikona <img src="/icons/device.svg" width="20" align="bottom" alt="Zařízení VitalControl" title="VitalControl"/> pro zařízení `{{<T "VitalControl" >}}` (viz Snímek obrazovky <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Nabídka podavače</a></span>, obrázek <span style="font-size: 140%">➁</span> tam).

### Synchronizace automatického podavače <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Na levé straně obrazovky jsou dvě zaškrtávací políčka:

* Zaškrtávací políčko <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Tato volba ovládá chování v případě, že jsou na krmítku během synchronizace přítomna zvířata, která ještě nejsou známá zařízení {{<T "VitalControl" >}}. Tato volba je ve výchozím nastavení povolena a obecně by měla zůstat nastavena. Pokud registrujete svá zakoupená zvířata skenováním jejich zvířecích pasů, musí být tato volba zakázána.

<span style="font-weight: bold">Povolte</span> tuto volbu:

- pokud máte před sebou zcela nový {{<T "VitalControl" >}}, na který chcete přenést všechna zvířata z krmítka. Po synchronizaci budou všechna zvířata známá krmítku také přítomna na {{<T "VitalControl" >}}.
- pokud během probíhajícího provozu neustále přivádíte nová telata ke krmítku. Tato zvířata pak budou také vytvořena na zařízení {{<T "VitalControl" >}} během synchronizace.

<span style="font-weight: bold">Zakázat</span> tuto volbu:

- pokud máte na svém {{<T "VitalControl" >}} nově vytvořená zvířata skenováním jejich zvířecích pasů, kde
- tato zvířata ještě nebyla přiřazena k transpondéru a
- tato zvířata jsou již krmena u krmítka a jsou tedy tam registrována.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Pokud zůstane volba nastavena v uvedené konfiguraci, budou zvířata po synchronizaci přítomna dvakrát na {{<T "VitalControl" >}}.
    </div>
</div>

* Zaškrtávací políčko <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Tato volba určuje, zda budou z {{<T "VitalControl" >}} během další synchronizace smazána zvířata, která jsou přítomna pouze na {{<T "VitalControl" >}}, ale ne na krmítku. Pokud používáte {{<T "VitalControl" >}} pouze během mléčného období zvířat, měla by být tato volba povolena. Pokud chcete sledovat zvířata i po mléčném období, musíte tuto volbu zakázat.

<span style="font-weight: bold">Povolte</span> tuto volbu:

- pokud sbíráte data pro zvířata pouze během mléčného období,
- pokud chcete, aby byla zvířata smazána z {{<T "VitalControl" >}} během další synchronizace poté, co byla smazána z krmítka. Tímto způsobem se zvířata na {{<T "VitalControl" >}} časem nehromadí.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Pokud je tato volba aktivována a zaškrtávací políčko <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> je také aktivováno, nebudou smazána žádná zvířata, která jsou mladší než je uvedeno v číselném poli <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Zakázat</span> tuto volbu:
- pokud chcete pokračovat ve sběru dat pro zvířata po mléčném období, například během vážení,
- pokud jste ochotni ručně smazat zvířata z {{<T "VitalControl" >}} sami.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Pokud tuto možnost deaktivujete, musíte odpojit transpondér pro odstavená zvířata na zařízení {{<T "VitalControl" >}} nejpozději při sundání obojku z odstaveného telete na jiné, mladší tele. Pokud transpondér není odstraněn, záznamy dat mladšího zvířete - které nyní nosí bývalý obojek odstaveného zvířete - jsou nesprávně přidány do datové sady odstavených zvířat.
    </div>
</div>

### Synchronizace {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Automatický krmítko

Na pravé straně obrazovky je zaškrtávací políčko a dvě vstupní pole:

* Zaškrtávací políčko <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Tato možnost ovládá, zda zvířata přítomná na {{<T "VitalControl" >}}, která nejsou známá krmítku, budou vytvořena na krmítku během příští synchronizace. Ve výchozím nastavení není tato možnost aktivována.

    <span style="font-weight: bold">Deaktivujte</span> tuto možnost nebo ji nechte deaktivovanou:

    - pokud používáte své zařízení {{<T "VitalControl" >}} na více krmítkách současně,
    - pokud přivádíte svá zvířata přímo ke krmítku, aniž byste je nejprve zaregistrovali prostřednictvím zařízení {{<T "VitalControl" >}}. Vaše zvířata budou automaticky vytvořena během registrace, když budou poprvé krmena u krmítka.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Pokud je {{<T "VitalControl" >}} používán na více strojích a tato možnost je zaškrtnuta, zvířata budou při synchronizaci neúmyslně přenesena z jednoho stroje na druhý.
    </div>
</div>

<span style="font-weight: bold">Aktivujte</span> tuto možnost:

- pokud se počáteční registrace jejich novorozených zvířat pomocí {{<T "VitalControl" >}} provádí před prvním krmením u krmítka.
- pokud zaznamenáváte svá zakoupená zvířata skenováním jejich zvířecích pasů na {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Aktivujte tuto možnost pouze pokud používáte {{<T "VitalControl" >}} na jednom stroji! Pokud chcete provést synchronizaci s více stroji s touto možností nastavenou, musíte použít samostatné zařízení {{<T "VitalControl" >}} pro každý stroj.
    </div>
</div>

* Rozbalovací nabídka <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   V této rozbalovací nabídce můžete vybrat krmnou křivku, která je přiřazena zvířatům, která jsou nově vytvořena na krmítku během synchronizace.

* Číselné vstupní pole<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    V tomto číselném poli můžete zadat minimální věk (ve dnech), od kterého jsou zvířata nově vytvořena na krmítku během synchronizace. Zvířata, která jsou mladší než zadaný minimální věk, **nejsou** vytvořena během synchronizace.

Stiskněte tlačítko <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> pro přepnutí na [stránku 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">nastavení menu {{<T "VitalControl" >}}</span>.

## Nastavení Menu `{{% T "VitalControl" %}}` - Stránka 2 {#settings-menu-vitalcontrol-page-2}

### Jak řešit konflikty dat během synchronizace

Ke konfliktům dat může dojít při synchronizaci dat mezi krmítkem a zařízením {{<T "VitalControl" >}}. Ke konfliktu dat dochází, když si data na zařízení {{<T "VitalControl" >}} a na krmítku odporují (např. ohledně <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Na této stránce 2 nastavení menu můžete určit, zda a jak jsou konflikty dat řešeny během synchronizace. Zde jsou tři možnosti:

* Priorita je dána datům krmítka, data na zařízení {{<T "VitalControl" >}} jsou přepsána daty z krmítka\.
  Tuto možnost aktivujete výběrem rádiového tlačítka v levém sloupci pod symbolem krmítka <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Priorita je dána datům {{<T "VitalControl" >}}, data na krmítku jsou přepsána daty ze zařízení {{<T "VitalControl" >}}\.
  Tuto možnost aktivujete výběrem rádiového tlačítka v levém sloupci pod {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.


* Žádné změny nejsou provedeny, data podavače i data zařízení {{<T "VitalControl" >}} zůstávají nezměněna.\
  Tuto možnost aktivujte výběrem radiového tlačítka ve sloupci vpravo <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Příklad</span><br>
            Po zakoupení skupiny telat zaregistrujete svá zakoupená zvířata na {{<T "VitalControl" >}} naskenováním všech jejich zvířecích pasů. Čísla zvířat pro tato zvířata na {{<T "VitalControl" >}} jsou pak – v závislosti na <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">nastavení zařízení</a> – poslední 3-5 číslice zvířecího pasu. Poté umístíte obojky s Urban transpondéry na nově zakoupená zvířata a krmíte je u automatického podavače. Během první návštěvy stanice jsou zvířata registrována pomocí svého transpondéru a nově vytvořena u podavače. Čísla zvířat pro tato nová zvířata u podavače jsou však odvozena z čísla transpondéru nebo odpovídají číslu zvířete uloženému pro tento transpondér u podavače. To znamená, že nyní bylo stejnému zvířeti přiřazeno jiné číslo zvířete na zařízení {{<T "VitalControl" >}} a u podavače, což vede ke konfliktu dat. Pomocí radiových tlačítek pro <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span> můžete nyní v menu nastavení určit, které z těchto dvou paralelních čísel zvířat má prioritu a které bude při synchronizaci smazáno.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Nabídka nastavení VitalControl: Strana 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Nastavení VitalControl (2)" />
    </div>
    <map name="VitalControlSettingsPage2">
        <area shape="rect" coords="5,208,235,248" alt='{{<T "EarTagNumber" >}}' title='{{<T "EarTagNumber" >}}' href="#VitalControlSettingsPage2_Digit_1">
        <area shape="rect" coords="5,285,235,328" alt='{{<T "AnimalNumber" >}}' title='{{<T "AnimalNumber" >}}' href="#VitalControlSettingsPage2_Digit_2">
        <area shape="rect" coords="5,368,235,408" alt='{{<T "DateOfBirth" >}}' title='{{<T "DateOfBirth" >}}' href="#VitalControlSettingsPage2_Digit_3">
        <area shape="rect" coords="392,116,455,177" alt='{{<T "Feeder" >}}' title='{{<T "Feeder" >}}' href="#VitalControlSettingsPage2_Digit_4">
        <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='{{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
        <area shape="rect" coords="678,97,775,159" alt='{{<T "NoChange_AP" >}}' title='{{<T "NoChange_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
        <area shape="rect" coords="52,510,125,615" alt='Page 1' title='Page 1' href="#VitalControlSettingsPage2_Digit_8">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Snímek obrazovky 4: Nabídka nastavení <span style="font-style: italic;">{{<T "VitalControl" >}}
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Pozor</span><br>
        Z vnitřních důvodů lze aktuálně provádět změny pouze na <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. V pozdějších verzích firmwaru můžete také provádět změny na <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> a <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Stisknutím <span style="font-style: italic;">tlačítka</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> se vrátíte na [stránku 1](#settings-menu-vitalcontrol-page-1) nabídky nastavení `{{<T "VitalControl" >}}`.
