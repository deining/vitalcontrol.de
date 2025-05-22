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
---
A VitalControl eszköz aktiválásához és beállításához kövesse az alábbi lépéseket:

## Navigáció a `{{<T "VitalControl" >}}` beállítások menüjéhez

{{% alert title="Figyelem" %}}
A {{<T "VitalControl" >}} eszköz aktiválásához és beállításához be kell jelentkeznie az automata etetőnél {{<T "SiteManager" >}} felhasználói szerepkörben. Ellenkező esetben az alább bemutatott és leírt gombok közül néhány nem lesz látható az Ön számára.
{{% /alert %}}

1. Kattintson a bal oldali sáv alján található <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Beállítások menü" title="Beállítások"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> gombra az érintőképernyős terminál bal oldali sávjában. Ha a főmenüben van, ahol nem látható az oldalsáv, nyomja meg a &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Etető menü" title="Etető menü"/>`{{<T "Feeder" >}}` gombot az oldalsáv megjelenítéséhez.

1. Kattintson a balról a második gombra <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Érintőképernyős terminál beállítások" title="Érintő beállítások"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> az érintőképernyős terminál alsó eszköztárában.

1. Most egy sor menüpont jelenik meg a központi képernyőterület bal felén. Kattintson az alsó gombra `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Most egy (vagy több) menüpont jelenik meg a központi képernyőterület jobb felén. Kattintson a felső gombra `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. A gomb most a bal képernyőfelére vált.

1. A képernyő jobb oldalának alján most megjelenik a &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="VitalControl beállítások megnyitása" title="Beállítások megnyitása" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span> gomb. Kattintson erre a gombra, és egy felugró ablak nyílik meg, amely a `{{<T "VitalControl" >}}` beállítások menü [1. oldalát](#settings-menu-vitalcontrol-page-1) jeleníti meg.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl beállítások: Hozzáférés" title="VitalControl beállítások menü elérése" />
    <figcaption class="figure-caption fs-6">1. képernyőkép: A <span style="font-style: italic;">{{<T "VitalControl" >}}</span> beállítások menü elérése</figcaption>
</figure>

A `{{<T "VitalControl" >}}` beállítások menü két oldalra van osztva:

## `{{<T "VitalControl" >}}` Beállítások Menü - 1. oldal {#settings-menu-vitalcontrol-page-1}

A <span style="font-style: italic;">{{<T "VitalControl" >}}</span> beállítások menü 1. oldala a következőképpen néz ki:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl beállítások menü: 1. oldal" title="VitalControl beállítások (1)" />
    <figcaption class="figure-caption fs-6">2. képernyőkép: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> beállítások menü, 1. oldal</figcaption>
</figure>

Ezen az oldalon a következő műveleteket és beállításokat végezheti el.

### A {{<T "VitalControl" >}} Eszköz Aktiválása {#activation-vitalcontrol}

A gép alapértelmezett állapotában a {{<T "VitalControl" >}} inaktív. Állítsa a <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> kapcsolót <span style="font-size: 140%">➀</span> a jobb oldali pozícióba <span style="font-style: italic;">{{<T "YES" >}}</span> a {{<T "VitalControl" >}} eszköz aktiválásához. Ezt követően az adagoló menü jobb oldali sávjában, a csatlakoztatott gép(ek) ikonja(i) alatt megjelenik a <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl eszköz" title="VitalControl"/> ikon a `{{<T "VitalControl" >}}` eszközhöz (lásd a <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Adagoló Menü</a></span>, <span style="font-size: 140%">➁</span> ábra ott).

### Automatikus etető szinkronizálása <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

A képernyő bal oldalán két jelölőnégyzet található:

* Jelölőnégyzet <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Ez az opció szabályozza a viselkedést abban az esetben, ha az etetőnél szinkronizálás közben olyan állatok vannak jelen, amelyek még nem ismertek a {{<T "VitalControl" >}} eszközön. Ez az opció alapértelmezés szerint engedélyezve van, és általában be kell állítva maradnia. Ha az állatait az állatútlevelek beolvasásával regisztrálja, ezt az opciót le kell tiltani.

    <span style="font-weight: bold">Engedélyezze</span> ezt az opciót:

    - ha egy vadonatúj {{<T "VitalControl" >}} van előtted, amelyre az összes állatot át szeretnéd vinni egy etetőről. Szinkronizálás után az etetőn ismert összes állat a {{<T "VitalControl" >}} eszközön is jelen lesz.
    - ha folyamatosan új borjakat hozol az etetőhöz a működés során. Ezek az állatok a szinkronizálás során a {{<T "VitalControl" >}} eszközön is létrejönnek.

    <span style="font-weight: bold">Tiltsa le</span> ezt az opciót:

    - ha újonnan létrehozott állatok vannak a {{<T "VitalControl" >}} eszközön az állatútlevelek beolvasásával, ahol
    - ezek az állatok még nem kaptak transzpondert, és
    - ezek az állatok már az etetőnél vannak etetve, és ezért ott regisztrálva vannak.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
                Ha az opció a fenti konfigurációban beállítva marad, az állatok kétszer lesznek jelen a {{<T "VitalControl" >}} eszközön a szinkronizálás után.
            </div>
        </div>

* Jelölőnégyzet <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

   Ez az opció szabályozza, hogy a {{<T "VitalControl" >}}-on jelen lévő, de az etetőn nem szereplő állatok törlődjenek-e a {{<T "VitalControl" >}}-ról a következő szinkronizálás során. Ha a {{<T "VitalControl" >}}-t csak az állatok tejtermelési időszakában használja, ezt az opciót engedélyezni kell. Ha az állatokat a tejtermelési időszakon túl is nyomon szeretné követni, akkor ezt az opciót le kell tiltani.

   <span style="font-weight: bold">Engedélyezze</span> ezt az opciót:

   - ha csak az állatok tejtermelési időszakában gyűjt adatokat,
   - ha azt szeretné, hogy az állatok törlődjenek a {{<T "VitalControl" >}}-ról a következő szinkronizálás során, miután az etetőről törölték őket. Így az állatok nem halmozódnak fel a {{<T "VitalControl" >}}-on idővel.

   <div class="alert alert-primary d-flex align-items-center" role="alert">
       <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
           <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
       </svg>
       <div>
           <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
           Ha ez az opció aktiválva van, és a jelölőnégyzet <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> is aktiválva van, akkor nem törlődnek azok az állatok, amelyek fiatalabbak, mint a számmezőben megadott <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
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
        Ha letiltja ezt az opciót, akkor a transzpondert a {{<T "VitalControl" >}} eszközön legkésőbb akkor kell leválasztani az elválasztott állatokról, amikor a nyakörvet eltávolítják az elválasztott borjúról egy másik, fiatalabb borjúra. Ha a transzpondert nem távolítják el, akkor a fiatalabb állat adatai - amely most az elválasztott állat korábbi nyakörvét viseli - helytelenül kerülnek hozzáadásra az elválasztott állatok adathalmazához.
    </div>
</div>

### Szinkronizálás {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automata Etető

A képernyő jobb oldalán található egy jelölőnégyzet és két beviteli mező:

* Jelölőnégyzet <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Ez az opció szabályozza, hogy a {{<T "VitalControl" >}} eszközön jelen lévő, de az etető számára ismeretlen állatok létrejönnek-e az etetőn a következő szinkronizálás során. Alapértelmezés szerint ez az opció nincs aktiválva.

    <span style="font-weight: bold">Deaktiválja</span> ezt az opciót, vagy hagyja deaktiválva:

    - ha a {{<T "VitalControl" >}} eszközt egyszerre több etetőn használja,
    - ha az állatokat közvetlenül az etetőhöz viszi anélkül, hogy először regisztrálná őket a {{<T "VitalControl" >}} eszközön. Az állatok automatikusan létrejönnek a regisztráció során, amikor először etetik őket az etetőnél.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
        Ha a {{<T "VitalControl" >}} több gépen van használva, és ez az opció be van jelölve, az állatok akaratlanul átkerülnek egyik gépről a másikra a szinkronizálás során.
    </div>
</div>

<span style="font-weight: bold">Aktiválja</span> ezt az opciót:

- ha az újszülött állatok kezdeti regisztrációja a {{<T "VitalControl" >}}-on az etetőnél történő első etetés előtt történik.
- ha a vásárolt állatokat az állatútlevelek {{<T "VitalControl" >}}-on történő beolvasásával rögzíti.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
        Csak akkor aktiválja ezt az opciót, ha a {{<T "VitalControl" >}}-t egyetlen gépen használja! Ha több géppel szeretne szinkronizálni ezzel az opcióval, akkor minden géphez külön {{<T "VitalControl" >}} eszközt kell használnia.
    </div>
</div>

* Legördülő menü <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Ebben a legördülő menüben kiválaszthatja azt a takarmánygörbét, amely az újonnan létrehozott állatokhoz van hozzárendelve az etetőnél a szinkronizálás során.

* Számmező <span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Ebben a számmezőben megadhatja azt a minimális életkort (napokban), amelytől kezdve az állatok újonnan létrehozásra kerülnek az etetőnél a szinkronizálás során. Azok az állatok, amelyek fiatalabbak a megadott minimális életkornál, **nem** kerülnek létrehozásra a szinkronizálás során.

Nyomja meg a <span style="font-size: 140%">⑧</span> gombot, hogy átváltson a <span style="font-style: italic;">beállítások menü {{<T "VitalControl" >}}</span> [2. oldalára](#settings-menu-vitalcontrol-page-2).

## Beállítások menü `{{<T "VitalControl" >}}` - 2. oldal {#settings-menu-vitalcontrol-page-2}

### Hogyan kezeljük az adatütközéseket szinkronizálás során

Adatütközések fordulhatnak elő, amikor az adatokat szinkronizáljuk az etető és a {{<T "VitalControl" >}} eszköz között. Adatütközés akkor következik be, amikor az adatok ellentmondanak egymásnak a {{<T "VitalControl" >}} eszközön és az etetőn (pl. az <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> tekintetében). A beállítások menü 2. oldalán megadhatja, hogy az adatütközések hogyan kerülnek megoldásra szinkronizálás során. Három lehetőség van:

* Az etető adatai élveznek elsőbbséget, a {{<T "VitalControl" >}} eszköz adatai felülíródnak az etető adataival\.
  Aktiválja ezt az opciót az etető szimbólum alatti bal oldali oszlopban található rádiógomb kiválasztásával <span style="font-size: 140%">➃</span>.

* A {{<T "VitalControl" >}} adatai élveznek elsőbbséget, az etető adatai felülíródnak a {{<T "VitalControl" >}} eszköz adataival\.
  Aktiválja ezt az opciót a {{<T "VitalControl" >}} alatti bal oldali oszlopban található rádiógomb kiválasztásával <span style="font-size: 140%">⑤</span>.

* Nem történik változtatás, az etető és a {{<T "VitalControl" >}} eszköz adatai változatlanok maradnak.\ 
  Aktiválja ezt az opciót a jobb oldali oszlopban található rádiógomb kiválasztásával <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Példa</span><br>
            Miután megvásárolt egy adag borjút, regisztrálja a megvásárolt állatokat a {{<T "VitalControl" >}} eszközön az összes állatútlevél beolvasásával. Az állatok számai a {{<T "VitalControl" >}} eszközön – az <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">eszköz beállításaitól</a> függően – az állatútlevél utolsó 3-5 számjegyei lesznek. Ezután Urban transzponderrel ellátott nyakörveket helyez az újonnan vásárolt állatokra, és az automata etetőnél eteti őket. Az állomás első látogatása során az állatok regisztrálásra kerülnek a transzponderük segítségével, és újonnan létrehozásra kerülnek az etetőnél. Azonban az új állatok számai az etetőn a transzponder számából származnak, vagy megegyeznek az etetőben a transzponderhez tárolt állatszámmal. Ez azt jelenti, hogy most egy másik állatszám lett hozzárendelve ugyanahhoz az állathoz a {{<T "VitalControl" >}} eszközön és az etetőn, ami adatütközést eredményez. Az <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> rádiógombok segítségével most megadhatja a beállítások menüben, hogy a két párhuzamos állatszám közül melyik élvez elsőbbséget, és melyik kerül törlésre a szinkronizálás során.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Beállítások menü VitalControl: 2. oldal" title="Beállítások VitalControl (2)" />
    <figcaption class="figure-caption fs-6">3. képernyőkép: Beállítások menü <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, 2. oldal</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Figyelem:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Figyelem</span><br>
        Belső okok miatt jelenleg csak a <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> módosítható. Későbbi firmware verziókban módosíthatja a <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> és a <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span> is.
    </div>
</div>

A <span style="font-style: italic;">gomb</span> <span style="font-size: 140%">⑧</span> megnyomásával visszatér az `{{<T "VitalControl" >}}` beállítások menü [1. oldalára](#settings-menu-vitalcontrol-page-1).
