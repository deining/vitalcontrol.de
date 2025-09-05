---
title: Activarea și Configurarea Unică a Dispozitivului în Setările distribuitorului automat
linkTitle: Configurare
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Înainte de a utiliza VitalControl pentru prima dată, trebuie să îl activați și să îl configurați corect o dată în setările distribuitorului Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/ro
---
## Cerințe

Recomandăm utilizarea unei versiuni de firmware <span style="font-weight: bold">24-xx-xx</span> sau mai mare cu dispozitivul VitalControl.\
Pentru a verifica ce versiune de firmware este instalată pe dispozitivul dumneavoastră:

* Navigați la pagina principală a distribuitorului făcând clic pe butonul `Home` din partea de sus <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Pictogramă ecran principal" title="Alma Pro: Ecran principal"/>&nbsp; în bara de navigare din zona din stânga a ecranului.
* Pe ecranul principal, faceți clic pe butonul `Help` <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Pictogramă meniu ajutor" title="Alma Pro: Ecran ajutor"/>&nbsp; în zona din dreapta sus a ecranului.
* Numărul versiunii <span style="font-size: 140%">➂</span> este acum afișat în stânga butonului de schimbare a limbii.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: verificarea versiunii firmware" title="Alma Pro: verificarea versiunii firmware" />
    <figcaption class="figure-caption fs-6">Captură de ecran 1: <span style="font-style: italic;">Alma Pro: verificarea versiunii firmware</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alertă:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
        Dacă versiunea de firmware a distribuitorului dumneavoastră este mai mică de <span style="font-weight: bold">24-xx-xx</span>, pot exista discrepanțe între capturile de ecran de mai jos și afișajul de pe ecranul tactil, astfel încât este posibil să nu puteți urma instrucțiunile. În acest caz, contactați tehnicianul de service pentru a actualiza firmware-ul distribuitorului dumneavoastră.<br>
    </div>
</div>

## Navigare către meniul de setări `{{% T "VitalControl" %}}`

{{% alert title="Atenție" %}}
Pentru a activa și configura dispozitivul {{<T "VitalControl" >}}, trebuie să fiți autentificat cu rolul de utilizator {{<T "SiteManager" >}} la distribuitorul automat. În caz contrar, unele dintre butoanele afișate și descrise mai jos nu vor fi vizibile pentru dumneavoastră.
{{% /alert %}}

1. Faceți clic pe butonul de jos <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Meniu Setări" title="Setări"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> din bara laterală stângă a terminalului tactil. Dacă sunteți în meniul principal unde nu este vizibilă nicio bară laterală, apăsați butonul &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Meniu Distribuitor" title="Meniu Distribuitor"/>`{{<T "Feeder" >}}`pentru a afișa bara laterală.

1. Faceți clic pe al doilea buton din stânga <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Setări Terminal Tactil" title="Setări Tactile"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> din bara de instrumente de jos a terminalului tactil.

1. O serie de elemente de meniu apare acum pe jumătatea stângă a zonei centrale a ecranului. Faceți clic pe butonul de jos `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Un element de meniu (sau posibil mai multe) apare acum pe jumătatea dreaptă a zonei centrale a ecranului. Faceți clic pe butonul de sus `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Butonul se mută acum pe jumătatea stângă a ecranului.

1. În partea de jos a părții drepte a ecranului, butonul &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Deschide setările VitalControl" title="Deschide setările" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span> este acum afișat. Faceți clic pe acest buton și se va deschide o fereastră popup, afișând [Pagina 1](#settings-menu-vitalcontrol-page-1) a meniului de setări `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="Setări VitalControl: Acces"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Acces la meniul de setări VitalControl" />
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
    Captură de ecran 2: Accesarea meniului de setări <span style="font-style: italic;">{{<T "VitalControl" >}}</span>
</figcaption>

Meniul de setări `{{<T "VitalControl" >}}` este împărțit pe două pagini:

## Meniul de Setări `{{% T "VitalControl" %}}` - Pagina 1 {#settings-menu-vitalcontrol-page-1}

Pagina 1 a meniului de setări <span style="font-style: italic;">{{<T "VitalControl" >}}</span> este prezentată astfel:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="Meniul de setări VitalControl: Pagina 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Setări VitalControl (1)" />
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
    Captură de ecran 3: Meniul de setări <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Pagina 1
</figcaption>

Pe această pagină, puteți efectua următoarele acțiuni și setări.

### Activarea Dispozitivului {{% T "VitalControl" %}} {#activation-vitalcontrol}

În starea implicită a mașinii, {{<T "VitalControl" >}} este dezactivat. Setați comutatorul <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> în poziția dreaptă <span style="font-style: italic;">{{<T "YES" >}}</span> pentru a activa dispozitivul {{<T "VitalControl" >}}. Ulterior, în bara laterală dreaptă a meniului de alimentare, sub pictograma(ele) pentru mașina(ele) conectată(e), va fi afișată pictograma <img src="/icons/device.svg" width="20" align="bottom" alt="Dispozitiv VitalControl" title="VitalControl"/> pentru dispozitivul `{{<T "VitalControl" >}}` (vezi Captura de ecran <span style="font-style: italic;"><a href="../synchronisation#figure3_synchronize_vitalcontrol_alma_pro">Meniu Alimentator</a></span>, figura <span style="font-size: 140%">➂</span> acolo).

### Sincronizare alimentator automat <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Pe partea stângă a ecranului, există două căsuțe de selectare:

* Căsuța de selectare <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Această opțiune controlează comportamentul în cazul în care animalele sunt prezente la hrănitor în timpul sincronizării și nu sunt încă cunoscute de dispozitivul {{<T "VitalControl" >}}. Această opțiune este activată implicit și ar trebui să rămână setată în general. Dacă înregistrați animalele achiziționate prin scanarea pașapoartelor lor de animale, această opțiune trebuie dezactivată.

<span style="font-weight: bold">Activați</span> această opțiune:

- dacă aveți un {{<T "VitalControl" >}} nou-nouț în fața dumneavoastră, pe care doriți să transferați toate animalele de la un hrănitor. După sincronizare, toate animalele cunoscute de hrănitor vor fi, de asemenea, prezente pe {{<T "VitalControl" >}}.
- dacă aduceți continuu viței noi la hrănitor în timpul operațiunilor în desfășurare. Aceste animale vor fi, de asemenea, create pe dispozitivul {{<T "VitalControl" >}} în timpul sincronizării.

<span style="font-weight: bold">Dezactivați</span> această opțiune:

- dacă aveți animale nou create pe {{<T "VitalControl" >}} prin scanarea pașapoartelor lor de animale, unde
- aceste animale nu au fost încă atribuite unui transponder și
- aceste animale sunt deja hrănite la hrănitor și sunt, prin urmare, înregistrate acolo.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
        Dacă opțiunea rămâne setată în configurația de mai sus, animalele vor fi prezente de două ori pe {{<T "VitalControl" >}} după sincronizare.
    </div>
</div>

* Checkbox <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Această opțiune controlează dacă animalele care sunt prezente doar pe {{<T "VitalControl" >}} dar nu și pe hrănitor sunt șterse din {{<T "VitalControl" >}} în timpul următoarei sincronizări. Dacă folosești {{<T "VitalControl" >}} doar în perioada de lactație a animalelor, această opțiune ar trebui activată. Dacă dorești să urmărești animalele și după perioada de lactație, trebuie să dezactivezi această opțiune.

<span style="font-weight: bold">Activează</span> această opțiune:

- dacă colectezi date pentru animale doar în perioada de lactație,
- dacă dorești ca animalele să fie șterse din {{<T "VitalControl" >}} în timpul următoarei sincronizări după ce au fost șterse de pe hrănitor. În acest fel, animalele nu se acumulează pe {{<T "VitalControl" >}} în timp.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
        Dacă această opțiune este activată și caseta de selectare <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> este de asemenea activată, niciun animal nu va fi șters care este mai tânăr decât specificat în câmpul numeric <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Dezactivează</span> această opțiune:
- dacă dorești să continui colectarea de date pentru animale după perioada de lactație, de exemplu, în timpul unei cântăriri,
- dacă ești dispus să ștergi manual animalele din {{<T "VitalControl" >}} tu însuți.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
        Dacă dezactivați această opțiune, trebuie să deconectați transponderul pentru animalele înțărcate pe dispozitivul {{<T "VitalControl" >}} cel târziu când zgarda este îndepărtată de la vițelul înțărcat la un alt vițel mai tânăr. Dacă transponderul nu este îndepărtat, înregistrările de date ale animalului mai tânăr - care acum poartă zgarda fostului animal înțărcat - sunt adăugate incorect la setul de date al animalelor înțărcate.
    </div>
</div>

### Sincronizare {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Hranitor Automat

Pe partea dreaptă a ecranului, există o casetă de selectare și două câmpuri de intrare:

* Casetă de selectare <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Această opțiune controlează dacă animalele prezente pe {{<T "VitalControl" >}}, care sunt necunoscute hrănitorului, vor fi create pe hrănitor în timpul următoarei sincronizări. În mod implicit, această opțiune nu este activată.

    <span style="font-weight: bold">Dezactivați</span> această opțiune sau lăsați-o dezactivată:

    - dacă utilizați dispozitivul {{<T "VitalControl" >}} pe mai multe hrănitoare simultan,
    - dacă aduceți animalele direct la hrănitor fără a le înregistra mai întâi prin dispozitivul {{<T "VitalControl" >}}. Animalele vor fi create automat în timpul înregistrării când sunt hrănite la hrănitor pentru prima dată.


    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
            Dacă {{<T "VitalControl" >}} este utilizat pe mai multe mașini și această opțiune este bifată, animalele vor fi transferate neintenționat de la o mașină la alta în timpul sincronizării.
        </div>
    </div>

    <span style="font-weight: bold">Activați</span> această opțiune:

    - dacă înregistrarea inițială a animalelor lor nou-născute cu {{<T "VitalControl" >}} are loc înainte de prima hrănire la hrănitor.
    - dacă înregistrați animalele achiziționate prin scanarea pașapoartelor lor de animale pe {{<T "VitalControl" >}}.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
            Activați această opțiune doar dacă utilizați {{<T "VitalControl" >}} pe o singură mașină! Dacă doriți să efectuați sincronizarea cu mai multe mașini cu această opțiune setată, trebuie să utilizați un dispozitiv {{<T "VitalControl" >}} separat pentru fiecare mașină.
        </div>
    </div>


* Meniu derulant <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   În acest meniu derulant, poți selecta curba de hrănire care este atribuită animalelor care sunt create recent pe hrănitor în timpul sincronizării.

* Câmp de introducere numerică<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    În acest câmp numeric, poți specifica vârsta minimă (în zile) de la care animalele sunt create recent pe hrănitor în timpul sincronizării. Animalele care sunt mai tinere decât vârsta minimă specificată **nu** sunt create în timpul sincronizării.

Apasă butonul <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> pentru a trece la [pagina 2](#settings-menu-vitalcontrol-page-2) a <span style="font-style: italic;">meniului de setări {{<T "VitalControl" >}}</span>.

## Meniul de Setări `{{% T "VitalControl" %}}` - Pagina 2 {#settings-menu-vitalcontrol-page-2}

### Cum să gestionezi conflictele de date în timpul sincronizării

Conflictele de date pot apărea atunci când se sincronizează datele între hrănitor și dispozitivul {{<T "VitalControl" >}}. Un conflict de date apare atunci când datele se contrazic între ele pe dispozitivul {{<T "VitalControl" >}} și pe hrănitor (de exemplu, referitor la <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Pe această pagină 2 a meniului de setări, poți specifica dacă și cum sunt rezolvate conflictele de date în timpul sincronizării. Există trei opțiuni aici:

* Prioritatea este acordată datelor de pe hrănitor, datele de pe dispozitivul {{<T "VitalControl" >}} sunt suprascrise cu cele de pe hrănitor\.
  Activează această opțiune selectând butonul radio din coloana din stânga de sub simbolul hrănitorului <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Prioritatea este acordată datelor de pe {{<T "VitalControl" >}}, datele de pe hrănitor sunt suprascrise cu cele de pe dispozitivul {{<T "VitalControl" >}}\.
  Activează această opțiune selectând butonul radio din coloana din stânga de sub {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.


* Nu se fac modificări, atât datele de la distribuitor, cât și datele dispozitivului {{<T "VitalControl" >}} rămân neschimbate.\
  Activați această opțiune selectând butonul radio din coloana din dreapta <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Exemplu</span><br>
            După ce ați achiziționat un lot de viței, înregistrați animalele achiziționate pe {{<T "VitalControl" >}} scanând toate pașapoartele animalelor. Numerele animalelor pentru aceste animale pe {{<T "VitalControl" >}} sunt apoi – în funcție de <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">setările dispozitivului</a> – ultimele 3-5 cifre ale pașaportului animalului. Apoi plasați zgărzi cu transpondere Urban pe animalele nou achiziționate și le hrăniți la distribuitorul automat. În timpul primei vizite la stație, animalele sunt înregistrate folosind transponderul lor și create noi la distribuitor. Totuși, numerele animalelor pentru aceste animale noi la distribuitor sunt derivate din numărul transponderului sau corespund numărului de animal stocat pentru acest transponder în distribuitor. Acest lucru înseamnă că un număr de animal diferit a fost acum atribuit aceluiași animal pe dispozitivul {{<T "VitalControl" >}} și pe distribuitor, rezultând un conflict de date. Folosind butoanele radio pentru <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, puteți specifica acum în meniul de setări care dintre cele două numere de animale paralele are prioritate și care va fi șters în timpul sincronizării.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Meniu Setări VitalControl: Pagina 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Setări VitalControl (2)" />
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
    Captură de ecran 4: Meniu Setări <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Pagina 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
        Din motive interne, modificările pot fi făcute în prezent doar la <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. În versiunile ulterioare de firmware, puteți face modificări și la <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> și la <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Prin apăsarea <span style="font-style: italic;">butonului</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> veți reveni la [pagina 1](#settings-menu-vitalcontrol-page-1) a meniului de setări `{{<T "VitalControl" >}}`.
