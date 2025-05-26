---
title: Az eszköz egyszeri aktiválása és konfigurálása az automata etető beállításaiban
linkTitle: Konfiguráció
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  A VitalControl első használata előtt egyszer aktiválnia és megfelelően konfigurálnia kell az Alma Pro etető beállításaiban.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/hu
---
## Követelmények

Javasoljuk, hogy a VitalControl eszközzel a <span style="font-weight: bold">24-xx-xx</span> vagy magasabb firmware verziót használja.\
A telepített firmware verzió ellenőrzéséhez az eszközön:

* Navigáljon az etető kezdőlapjára a felső `Home` gombra kattintva <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Kezdőképernyő ikon" title="Alma Pro: Kezdőképernyő"/>&nbsp; a képernyő bal oldali navigációs sávjában.
* A kezdőképernyőn kattintson a `Help` gombra <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Súgó menü ikon" title="Alma Pro: Súgó képernyő"/>&nbsp; a képernyő jobb felső részén.
* A verziószám <span style="font-size: 140%">➂</span> most megjelenik a nyelvváltó gomb bal oldalán.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: firmware verzió ellenőrzése" title="Alma Pro: firmware verzió ellenőrzése" />
    <figcaption class="figure-caption fs-6">1. képernyőkép: <span style="font-style: italic;">Alma Pro: firmware verzió ellenőrzése</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Figyelem:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
        Ha az etető firmware verziója alacsonyabb, mint <span style="font-weight: bold">24-xx-xx</span>, eltérések lehetnek az alábbi képernyőképek és az Ön érintőképernyőjén megjelenő kijelzés között, így előfordulhat, hogy nem tudja követni az utasításokat. Ebben az esetben vegye fel a kapcsolatot a szerviztechnikusával az etető firmware-jének frissítése érdekében.<br>
    </div>
</div>

## Navigáció a `{{% T "VitalControl" %}}` beállítások menüjéhez

{{% alert title="Figyelem" %}}
A {{<T "VitalControl" >}} eszköz aktiválásához és beállításához be kell jelentkeznie a {{<T "SiteManager" >}} felhasználói szerepkörrel az automata etetőnél. Ellenkező esetben az alább bemutatott és leírt gombok közül néhány nem lesz látható az Ön számára.
{{% /alert %}}

1. Kattintson a bal oldali sáv alján található gombra <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Beállítások menü" title="Beállítások"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> az érintőképernyős terminál bal oldali sávjában. Ha a főmenüben van, ahol nem látható az oldalsáv, nyomja meg a gombot &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Etető menü" title="Etető menü"/>`{{<T "Feeder" >}}` az oldalsáv megjelenítéséhez.

1. Kattintson a második gombra balról <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Érintőképernyős terminál beállítások" title="Érintő beállítások"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> az érintőképernyős terminál alsó eszköztárában.

1. Most egy sor menüelem jelenik meg a központi képernyőterület bal felén. Kattintson az alsó gombra `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Most egy (vagy több) menüelem jelenik meg a központi képernyőterület jobb felén. Kattintson a felső gombra `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. A gomb most átvált a bal képernyőfelére.

1. A képernyő jobb oldalának alján most megjelenik a gomb &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="VitalControl beállítások megnyitása" title="Beállítások megnyitása" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Kattintson erre a gombra, és egy felugró ablak nyílik meg, amely a `{{<T "VitalControl" >}}` beállítások menü [1. oldalát](#settings-menu-vitalcontrol-page-1) jeleníti meg.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" usemap="#NavigationToVitalControlSettingsMenu" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl beállítások: Hozzáférés" title="VitalControl beállítások menü elérése" />
    <figcaption class="figure-caption fs-6">1. képernyőkép: A <span style="font-style: italic;">{{<T "VitalControl" >}}</span> beállítások menü elérése</figcaption>
</figure>

A `{{<T "VitalControl" >}}` beállítási menü két oldalra van osztva:

## `{{% T "VitalControl" %}}` Beállítási Menü - 1. oldal {#settings-menu-vitalcontrol-page-1}

A <span style="font-style: italic;">{{<T "VitalControl" >}}</span> beállítási menü 1. oldala a következőképpen jelenik meg:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" usemap="#VitalControlSettingsPage1" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl beállítási menü: 1. oldal" title="VitalControl beállítások (1)" />
    <figcaption class="figure-caption fs-6">2. képernyőkép: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> beállítási menü, 1. oldal</figcaption>
</figure>

Ezen az oldalon a következő műveleteket és beállításokat végezheti el.

### A {{% T "VitalControl" %}} Eszköz Aktiválása {#activation-vitalcontrol}

A gép alapértelmezett állapotában a {{<T "VitalControl" >}} inaktív. Állítsa a <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> kapcsolót <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> a jobb oldali pozícióba <span style="font-style: italic;">{{<T "YES" >}}</span> a {{<T "VitalControl" >}} eszköz aktiválásához. Ezt követően az adagoló menü jobb oldali sávjában, a csatlakoztatott gép(ek) ikonjai alatt megjelenik a <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl eszköz" title="VitalControl"/> ikon a `{{<T "VitalControl" >}}` eszközhöz (lásd Képernyőkép <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Adagoló Menü</a></span>, ábra <span style="font-size: 140%">➁</span> ott).

### Szinkronizálás automatikus adagoló <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

A képernyő bal oldalán két jelölőnégyzet található:

* Jelölőnégyzet <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Ez az opció szabályozza a viselkedést abban az esetben, ha az etetőnél szinkronizálás közben olyan állatok vannak jelen, amelyek még nem ismertek a {{<T "VitalControl" >}} eszköz számára. Ez az opció alapértelmezés szerint engedélyezve van, és általában így is kell maradnia. Ha az állatútlevelek beolvasásával regisztrálja a megvásárolt állatokat, akkor ezt az opciót le kell tiltani.

<span style="font-weight: bold">Engedélyezze</span> ezt az opciót:

- ha egy vadonatúj {{<T "VitalControl" >}} van Ön előtt, amelyre az összes állatot át szeretné vinni egy etetőről. Szinkronizálás után az etetőn ismert összes állat jelen lesz a {{<T "VitalControl" >}}-on is.
- ha folyamatosan új borjakat hoz az etetőhöz a működés során. Ezek az állatok szinkronizálás közben szintén létrejönnek a {{<T "VitalControl" >}} eszközön.

<span style="font-weight: bold">Tiltsa le</span> ezt az opciót:

- ha újonnan létrehozott állatok vannak a {{<T "VitalControl" >}}-on az állatútlevelek beolvasásával, ahol
- ezek az állatok még nem kaptak transzpondert, és
- ezek az állatok már az etetőnél vannak etetve, és ezért ott regisztrálva vannak.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
        Ha az opció a fenti konfigurációban marad, az állatok kétszer lesznek jelen a {{<T "VitalControl" >}}-on szinkronizálás után.
    </div>
</div>

* Jelölőnégyzet <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Ez az opció szabályozza, hogy a {{<T "VitalControl" >}}-on jelen lévő, de az etetőn nem található állatok törlődjenek-e a {{<T "VitalControl" >}}-ról a következő szinkronizálás során. Ha a {{<T "VitalControl" >}}-t csak az állatok tejtermelési időszakában használja, ezt az opciót engedélyezni kell. Ha az állatokat a tejtermelési időszakon túl is nyomon szeretné követni, le kell tiltania ezt az opciót.

<span style="font-weight: bold">Engedélyezze</span> ezt az opciót:

- ha csak az állatok tejtermelési időszakában gyűjt adatokat,
- ha azt szeretné, hogy az állatok törlődjenek a {{<T "VitalControl" >}}-ról a következő szinkronizálás során, miután törölték őket az etetőről. Így az állatok nem halmozódnak fel a {{<T "VitalControl" >}}-on az idő múlásával.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
        Ha ez az opció aktiválva van, és az <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> jelölőnégyzet is aktiválva van, akkor nem törlődnek azok az állatok, amelyek fiatalabbak, mint a számmezőben megadott érték <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Tiltsa le</span> ezt az opciót:
- ha az állatok tejtermelési időszaka után is szeretne adatokat gyűjteni, például mérlegelés során,
- ha hajlandó manuálisan törölni az állatokat a {{<T "VitalControl" >}}-ról.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
        Ha letiltja ezt az opciót, akkor legkésőbb akkor kell leválasztania a transzpondert az elválasztott állatokról a {{<T "VitalControl" >}} eszközön, amikor a nyakörvet eltávolítják az elválasztott borjúról, és egy másik, fiatalabb borjúra helyezik. Ha a transzpondert nem távolítják el, a fiatalabb állat adatrekordjai - amely most az elválasztott állat korábbi nyakörvét viseli - helytelenül kerülnek hozzáadásra az elválasztott állatok adathalmazához.
    </div>
</div>

### Szinkronizáció {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Automata Etető

A képernyő jobb oldalán található egy jelölőnégyzet és két beviteli mező:

* Jelölőnégyzet <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Ez az opció szabályozza, hogy a {{<T "VitalControl" >}} eszközön jelen lévő, az etető számára ismeretlen állatok létrehozásra kerülnek-e az etetőn a következő szinkronizálás során. Alapértelmezés szerint ez az opció nincs aktiválva.

    <span style="font-weight: bold">Deaktiválja</span> ezt az opciót, vagy hagyja deaktiválva:

    - ha a {{<T "VitalControl" >}} eszközét egyszerre több etetőn használja,
    - ha az állatait közvetlenül az etetőhöz viszi anélkül, hogy először regisztrálná őket a {{<T "VitalControl" >}} eszközön. Az állatok automatikusan létrehozásra kerülnek a regisztráció során, amikor először etetik őket az etetőnél.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
        Ha a {{<T "VitalControl" >}} több gépen van használva és ez az opció be van jelölve, az állatok akaratlanul átkerülnek egyik gépről a másikra a szinkronizálás során.
    </div>
</div>

<span style="font-weight: bold">Aktiválja</span> ezt az opciót:

- ha az újszülött állatok kezdeti regisztrációja a {{<T "VitalControl" >}} segítségével az etetőnél történő első etetés előtt történik.
- ha a vásárolt állatokat az állatútlevelük beolvasásával rögzíti a {{<T "VitalControl" >}}-on.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
        Csak akkor aktiválja ezt az opciót, ha a {{<T "VitalControl" >}}-t egyetlen gépen használja! Ha több géppel szeretne szinkronizálni ezzel az opcióval, külön {{<T "VitalControl" >}} eszközt kell használnia minden géphez.
    </div>
</div>

* Legördülő menü <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Ebben a legördülő menüben kiválaszthatja azt a takarmánygörbét, amely az újonnan létrehozott állatokhoz van hozzárendelve az etetőn szinkronizálás során.

* Számmező <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Ebben a számmezőben megadhatja azt a minimális életkort (napokban), amelytől kezdve az állatok újonnan létrehozásra kerülnek az etetőn szinkronizálás során. Azok az állatok, amelyek fiatalabbak a megadott minimális életkornál, **nem** kerülnek létrehozásra szinkronizálás során.

Nyomja meg a gombot <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> a <span style="font-style: italic;">beállítások menü {{<T "VitalControl" >}}</span> [2. oldalára](#settings-menu-vitalcontrol-page-2) való átváltáshoz.

## Beállítások menü `{{% T "VitalControl" %}}` - 2. oldal {#settings-menu-vitalcontrol-page-2}

### Hogyan kezeljük az adatütközéseket szinkronizálás során

Adatütközések fordulhatnak elő, amikor az adatokat szinkronizáljuk az etető és a {{<T "VitalControl" >}} eszköz között. Adatütközés akkor fordul elő, amikor az adatok ellentmondanak egymásnak a {{<T "VitalControl" >}} eszközön és az etetőn (pl. az <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> tekintetében). A beállítások menü ezen 2. oldalán megadhatja, hogy az adatütközések hogyan kerülnek megoldásra szinkronizálás során. Három lehetőség van:

* Az etető adatai élveznek prioritást, a {{<T "VitalControl" >}} eszköz adatai felülíródnak az etető adataival\.
  Aktiválja ezt az opciót az etető szimbólum alatti bal oldali oszlopban található rádiógomb kiválasztásával <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* A {{<T "VitalControl" >}} adatai élveznek prioritást, az etető adatai felülíródnak a {{<T "VitalControl" >}} eszköz adataival\.
  Aktiválja ezt az opciót a {{<T "VitalControl" >}} alatti bal oldali oszlopban található rádiógomb kiválasztásával <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* Nem történik változás, mind a takarmányozó adatai, mind a {{<T "VitalControl" >}} eszköz adatai változatlanok maradnak.\
  Ezt az opciót a jobb oldali oszlopban található rádiógomb kiválasztásával aktiválhatja <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Példa</span><br>
            Miután megvásárolt egy adag borjút, regisztrálja a megvásárolt állatokat a {{<T "VitalControl" >}} eszközön az állatútlevelek beolvasásával. Az állatok számai a {{<T "VitalControl" >}} eszközön – az <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">eszköz beállításaitól</a> függően – az állatútlevél utolsó 3-5 számjegye lesz. Ezután Urban transzponderes nyakörveket helyez az újonnan vásárolt állatokra, és az automata etetőnél eteti őket. Az állomás első látogatása során az állatokat a transzponderük segítségével regisztrálják, és újonnan létrehozzák az etetőnél. Azonban az új állatok számai az etetőnél a transzponder számából származnak, vagy megegyeznek az etetőben a transzponderhez tárolt állatszámmal. Ez azt jelenti, hogy ugyanazon állathoz most más állatszámot rendeltek a {{<T "VitalControl" >}} eszközön és az etetőnél, ami adatkonfliktust eredményez. A <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span> rádiógombok segítségével most megadhatja a beállítási menüben, hogy a két párhuzamos állatszám közül melyik élvez elsőbbséget, és melyik törlődik a szinkronizálás során.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" usemap="#VitalControlSettingsPage2" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Beállítások Menü VitalControl: 2. oldal" title="Beállítások VitalControl (2)" />
    <figcaption class="figure-caption fs-6">3. képernyőkép: Beállítások Menü <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, 2. oldal</figcaption>
</figure>


<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
        Belső okok miatt jelenleg csak a <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> módosítható. Későbbi firmware verziókban módosíthatja a <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> és a <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span> is.
    </div>
</div>

A <span style="font-style: italic;">gomb</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> megnyomásával visszatér az `{{<T "VitalControl" >}}` beállítási menü [1. oldalára](#settings-menu-vitalcontrol-page-1).

<map name="NavigationToVitalControlSettingsMenu">
    <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='Kattintson ide: {{<T "Settings" >}}' href="#Navigation_Digit_1">
    <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='Kattintson ide: {{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
    <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='Kattintson ide: {{<T "Accessories" >}}' href="#Navigation_Digit_3">
    <area shape="rect" coords="520,150,870,197" alt='{{<T "OpenSettings" >}}' title='Kattintson ide: {{<T "OpenSettings" >}}' href="#Navigation_Digit_4">
    <area shape="rect" coords="580,582,850,636" alt='{{<T "VitalControl" >}}' title='Kattintson ide: {{<T "VitalControl" >}}' href="#Navigation_Digit_5">
</map>

<map name="VitalControlSettingsPage1">
    <area shape="rect" coords="253,45,626,107" alt='{{<T "IGEN" >}}/{{<T "NEM" >}}' title='Kattintson az {{<T "IGEN" >}}/{{<T "NEM" >}}' href="#VitalControlSettingsPage1_Digit_1">
    <area shape="rect" coords="11,236,88,316" alt='{{<T "ÚjRegisztrálásaAVitalControlEszközön" >}}' title='Kattintson az {{<T "ÚjRegisztrálásaAVitalControlEszközön" >}}' href="#VitalControlSettingsPage1_Digit_2">
    <area shape="rect" coords="11,357,88,434" alt='{{<T "TörlésAVitalControlból" >}}' title='Kattintson az {{<T "TörlésAVitalControlból" >}}' href="#VitalControlSettingsPage1_Digit_3">
    <area shape="rect" coords="31,463,357,508" alt='{{<T "NeTöröljeAzÁllatokatAmelyekFiatalabbakMint" >}}' title='Kattintson az {{<T "NeTöröljeAzÁllatokatAmelyekFiatalabbakMint" >}}' href="#VitalControlSettingsPage1_Digit_4">
    <area shape="rect" coords="420,236,511,286" alt='{{<T "ÚjRegisztrálásaAzAutomataEtetőn" >}}' title='Kattintson az {{<T "ÚjRegisztrálásaAzAutomataEtetőn" >}}' href="#VitalControlSettingsPage1_Digit_5">
    <area shape="rect" coords="435,352,837,397" alt='{{<T "EtetésiGörbeHozzárendelveAzImportáltÁllatokhoz" >}}' title='Kattintson az {{<T "EtetésiGörbeHozzárendelveAzImportáltÁllatokhoz" >}}' href="#VitalControlSettingsPage1_Digit_6">
    <area shape="rect" coords="513,462,837,507" alt='{{<T "NeImportáljaAzÁllatokatAmelyekIdősebbekMint" >}}' title='Kattintson az {{<T "NeImportáljaAzÁllatokatAmelyekIdősebbekMint" >}}' href="#VitalControlSettingsPage1_Digit_7">
    <area shape="rect" coords="142,517,215,616" alt='2. oldal' title='Kattintson a 2. oldalra' href="#VitalControlSettingsPage1_Digit_8">
</map>

<map name="VitalControlSettingsPage2">
    <area shape="rect" coords="5,208,235,248" alt='{{<T "FülCímkeSzám" >}}' title='Kattintson a {{<T "FülCímkeSzám" >}}' href="#VitalControlSettingsPage2_Digit_1">
    <area shape="rect" coords="5,208,235,328" alt='{{<T "ÁllatSzám" >}}' title='Kattintson az {{<T "ÁllatSzám" >}}' href="#VitalControlSettingsPage2_Digit_2">
    <area shape="rect" coords="5,368,235,408" alt='{{<T "SzületésiDátum" >}}' title='Kattintson a {{<T "SzületésiDátum" >}}' href="#VitalControlSettingsPage2_Digit_3">
    <area shape="rect" coords="392,116,455,177" alt='{{<T "Etető" >}}' title='Kattintson az {{<T "Etető" >}}' href="#VitalControlSettingsPage2_Digit_4">
    <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='Kattintson a {{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
    <area shape="rect" coords="678,97,775,159" alt='{{<T "NincsVáltozás_AP" >}}' title='Kattintson a {{<T "NincsVáltozás_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
    <area shape="rect" coords="52,510,125,615" alt='1. oldal' title='Kattintson az 1. oldalra' href="#VitalControlSettingsPage2_Digit_8">
</map>
