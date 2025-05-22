---
title: Seadme ühekordne aktiveerimine ja seadistamine automaatse söötja seadetes
linkTitle: Seadistamine
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Enne VitalControli esmakordset kasutamist peate selle aktiveerima ja õigesti seadistama Alma Pro söötja seadetes.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
VitalControl seadme aktiveerimiseks ja seadistamiseks toimige järgmiselt:

## Navigeerimine seadete menüüsse `{{<T "VitalControl" >}}`

{{% alert title="Tähelepanu" %}}
VitalControl seadme aktiveerimiseks ja seadistamiseks peate olema sisse logitud automaatse söötja kasutajana {{<T "SiteManager" >}} rollis. Vastasel juhul ei ole mõned allpool näidatud ja kirjeldatud nupud teile nähtavad.
{{% /alert %}}

1. Klõpsake alumisel nupul <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Seadete menüü" title="Seaded"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> puuteterminali vasakus külgribas. Kui olete põhimenüüs, kus külgriba pole nähtav, vajutage nuppu &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Söötja menüü" title="Söötja menüü"/>`{{<T "Feeder" >}}`, et kuvada külgriba.

1. Klõpsake puuteterminali alumises tööriistaribas vasakult teisel nupul <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Puuteterminali seaded" title="Puuteseaded"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span>.

1. Nüüd ilmub keskekraani vasakule poolele rida menüüelemente. Klõpsake alumisel nupul `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Nüüd ilmub keskekraani paremale poolele menüüelement (või mitu). Klõpsake ülemisel nupul `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Nupp liigub nüüd vasakule ekraanipoolele.

1. Ekraani paremal küljel allosas kuvatakse nupp &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Ava VitalControl seaded" title="Ava seaded" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Klõpsake seda nuppu ja avaneb hüpikaken, mis kuvab [Lehekülg 1](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` seadete menüüst.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl seaded: Juurdepääs" title="Juurdepääs VitalControl seadete menüüle" />
    <figcaption class="figure-caption fs-6">Ekraanipilt 1: Juurdepääs <span style="font-style: italic;">{{<T "VitalControl" >}}</span> seadete menüüle</figcaption>
</figure>

`{{<T "VitalControl" >}}` seadete menüü on jaotatud kaheks leheks:

## `{{<T "VitalControl" >}}` Seadete Menüü - Leht 1 {#settings-menu-vitalcontrol-page-1}

Leht 1 <span style="font-style: italic;">{{<T "VitalControl" >}}</span> seadete menüüst on esitatud järgmiselt:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl seadete menüü: Leht 1" title="VitalControl seaded (1)" />
    <figcaption class="figure-caption fs-6">Ekraanipilt 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> seadete menüü, Leht 1</figcaption>
</figure>

Sellel lehel saate teha järgmisi toiminguid ja seadeid.

### {{<T "VitalControl" >}} Seadme Aktiveerimine {#activation-vitalcontrol}

Masina vaikeseisundis on {{<T "VitalControl" >}} deaktiveeritud. Seadke <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> lüliti <span style="font-size: 140%">➀</span> paremale positsioonile <span style="font-style: italic;">{{<T "YES" >}}</span>, et aktiveerida {{<T "VitalControl" >}} seade. Seejärel kuvatakse sööturi menüü paremas külgribas, ühendatud masina(te) ikooni(te) all, ikoon <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl seade" title="VitalControl"/> `{{<T "VitalControl" >}}` seadme jaoks (vt Ekraanipilt <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Sööturi Menüü</a></span>, joonis <span style="font-size: 140%">➁</span> seal).

### Sünkroniseerimine automaatse söötjaga <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Ekraani vasakul küljel on kaks märkeruutu:

* Märkeruut <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    See valik kontrollib käitumist juhul, kui sünkroniseerimise ajal on söötjal loomi, keda {{<T "VitalControl" >}} seade veel ei tunne. See valik on vaikimisi lubatud ja peaks üldiselt jääma lubatuks. Kui registreerite oma ostetud loomad nende loomapasside skaneerimise teel, tuleb see valik keelata.

    <span style="font-weight: bold">Luba</span> see valik:

    - kui teil on uus {{<T "VitalControl" >}} teie ees, kuhu soovite kõik loomad söötjalt üle kanda. Pärast sünkroniseerimist on kõik söötjal tuntud loomad ka {{<T "VitalControl" >}} seadmes.
    - kui toote pidevalt uusi vasikaid söötjale käimasoleva töö ajal. Need loomad luuakse siis ka {{<T "VitalControl" >}} seadmes sünkroniseerimise ajal.

    <span style="font-weight: bold">Keela</span> see valik:

    - kui olete loonud uusi loomi oma {{<T "VitalControl" >}} seadmes nende loomapasside skaneerimise teel, kus
    - neile loomadele ei ole veel määratud transponderit ja
    - need loomad on juba söötjal ja seetõttu seal registreeritud.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
                Kui ülaltoodud konfiguratsioonis jääb valik lubatuks, on loomad pärast sünkroniseerimist {{<T "VitalControl" >}} seadmes kahekordselt esindatud.
            </div>
        </div>


* Märkeruut <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    See valik määrab, kas loomad, kes on ainult {{<T "VitalControl" >}}-is, kuid mitte söötjas, kustutatakse järgmisel sünkroonimisel {{<T "VitalControl" >}}-ist. Kui kasutate {{<T "VitalControl" >}} ainult loomade laktatsiooniperioodil, tuleks see valik lubada. Kui soovite jälgida loomi ka pärast laktatsiooniperioodi, peate selle valiku keelama.

    <span style="font-weight: bold">Lubage</span> see valik:

    - kui kogute andmeid loomade kohta ainult laktatsiooniperioodil,
    - kui soovite, et loomad kustutataks {{<T "VitalControl" >}}-ist järgmisel sünkroonimisel pärast nende kustutamist söötjast. Nii ei kogune loomad aja jooksul {{<T "VitalControl" >}}-isse.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
            Kui see valik on aktiveeritud ja märkeruut <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> on samuti aktiveeritud, ei kustutata ühtegi looma, kes on noorem kui määratud arvuväljal <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Keelake</span> see valik:
    - kui soovite jätkata andmete kogumist loomade kohta pärast laktatsiooniperioodi, näiteks kaalumise ajal,
    - kui olete valmis loomi ise käsitsi {{<T "VitalControl" >}}-ist kustutama.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
        Kui te selle valiku keelata, peate transponderi lahti ühendama võõrutatud loomade {{<T "VitalControl" >}} seadmes hiljemalt siis, kui kaelarihm eemaldatakse võõrutatud vasikalt ja pannakse teisele, nooremale vasikale. Kui transponderit ei eemaldata, lisatakse noorema looma andmed - kes nüüd kannab võõrutatud looma endist kaelarihma - valesti võõrutatud loomade andmekogumisse.
    </div>
</div>

### Sünkroniseerimine {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automaatne söötja

Ekraani paremal küljel on märkeruut ja kaks sisendvälja:

* Märkeruut <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- See valik kontrollib, kas {{<T "VitalControl" >}} seadmes olevad loomad, kes on söötjale tundmatud, luuakse söötjal järgmise sünkroniseerimise ajal. Vaikimisi pole see valik aktiveeritud.

    <span style="font-weight: bold">Deaktiveeri</span> see valik või jäta see deaktiveerituks:

    - kui kasutate oma {{<T "VitalControl" >}} seadet mitmel söötjal samaaegselt,
    - kui viite oma loomad otse söötjale, ilma et registreeriksite neid esmalt {{<T "VitalControl" >}} seadme kaudu. Teie loomad luuakse siis automaatselt registreerimise ajal, kui neid esimest korda söötjal toidetakse.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
            Kui {{<T "VitalControl" >}} kasutatakse mitmel masinal ja see valik on märgitud, kantakse loomad sünkroniseerimise ajal tahtmatult ühelt masinalt teisele.
        </div>
    </div>

<span style="font-weight: bold">Aktiveeri</span> see valik:

- kui vastsündinud loomade esmane registreerimine {{<T "VitalControl" >}}-iga toimub enne esimest söötmist sööturil.
- kui registreerite oma ostetud loomad, skaneerides nende loomapassid {{<T "VitalControl" >}}-is.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
        Aktiveeri see valik ainult siis, kui kasutad {{<T "VitalControl" >}}-i ühel masinal! Kui soovid sünkroniseerida mitme masinaga, kui see valik on seatud, pead kasutama eraldi {{<T "VitalControl" >}} seadet iga masina jaoks.
    </div>
</div>

* Rippmenüü <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Selles rippmenüüs saad valida sööda kõvera, mis määratakse loomadele, kes sünkroniseerimise ajal sööturil uueks luuakse.

* Numbriline sisestusväli<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Selles numbriväljas saad määrata minimaalne vanus (päevades), millest alates loomad sünkroniseerimise ajal sööturil uueks luuakse. Loomi, kes on nooremad kui määratud minimaalne vanus, **ei** looda sünkroniseerimise ajal.

Vajuta nuppu <span style="font-size: 140%">⑧</span>, et liikuda <span style="font-style: italic;">seadete menüü {{<T "VitalControl" >}}</span> [lehele 2](#settings-menu-vitalcontrol-page-2).

## Seadete menüü `{{<T "VitalControl" >}}` - Lehekülg 2 {#settings-menu-vitalcontrol-page-2}

### Kuidas lahendada andmete konflikte sünkroniseerimise ajal

Andmete konfliktid võivad tekkida, kui sünkroniseeritakse andmeid söötja ja {{<T "VitalControl" >}} seadme vahel. Andmete konflikt tekib siis, kui andmed on vastuolus {{<T "VitalControl" >}} seadmel ja söötjal (nt seoses <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Selle seadete menüü leheküljel 2 saate määrata, kas ja kuidas andmete konfliktid sünkroniseerimise ajal lahendatakse. Siin on kolm võimalust:

* Eelistatakse söötja andmeid, {{<T "VitalControl" >}} seadme andmed kirjutatakse üle söötja omadega\.
  Aktiveerige see valik, valides raadionupu vasakpoolses veerus söötja sümboli all <span style="font-size: 140%">➃</span>.

* Eelistatakse {{<T "VitalControl" >}} andmeid, söötja andmed kirjutatakse üle {{<T "VitalControl" >}} seadme omadega\.
  Aktiveerige see valik, valides raadionupu vasakpoolses veerus {{<T "VitalControl" >}} all <span style="font-size: 140%">⑤</span>.

* Muudatusi ei tehta, nii söötja kui ka {{<T "VitalControl" >}} seadme andmed jäävad muutmata.\ 
  Aktiveerige see valik, valides raadionupu parempoolses veerus <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Näide</span><br>
            Pärast vasikate partii ostmist registreerite oma ostetud loomad {{<T "VitalControl" >}} seadmel, skaneerides kõik nende loomapassid. Nende loomade loomade numbrid {{<T "VitalControl" >}} seadmel on siis – sõltuvalt <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">seadme seadistustest</a> – looma passi viimased 3-5 numbrit. Seejärel panete äsja ostetud loomadele kaelarihmad Urban transponderitega ja toidate neid automaatsöötjal. Esmakordsel jaama külastamisel registreeritakse loomad nende transponderi abil ja luuakse söötjal uued. Kuid nende uute loomade loomade numbrid söötjal on tuletatud transponderi numbrist või vastavad sellele transponderile söötjal salvestatud loomade numbrile. See tähendab, et samale loomale on nüüd määratud erinev loomade number {{<T "VitalControl" >}} seadmel ja söötjal, mis põhjustab andmete konflikti. Kasutades raadionuppe <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, saate nüüd seadete menüüs määrata, milline kahest paralleelsest loomade numbrist on prioriteetne ja milline kustutatakse sünkroniseerimise ajal.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Seadete menüü VitalControl: Lehekülg 2" title="Seaded VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Ekraanipilt 3: Seadete menüü <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Lehekülg 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Tähelepanu</span><br>
        Sisemistel põhjustel saab praegu muudatusi teha ainult <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Hilisemates püsivara versioonides saate teha muudatusi ka <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> ja <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Vajutades <span style="font-style: italic;">nuppu</span> <span style="font-size: 140%">⑧</span> naasete [leheküljele 1](#settings-menu-vitalcontrol-page-1) `{{<T "VitalControl" >}}` seadete menüüs.
