---
title: Activarea și Configurarea Unică a Dispozitivului în Setările Distribuitorului Automat
linkTitle: Configurare
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Înainte de a utiliza VitalControl pentru prima dată, trebuie să îl activați și să îl configurați corect o dată în setările distribuitorului Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Pentru a activa și configura dispozitivul VitalControl, procedați după cum urmează:

## Navigarea către meniul de setări `{{<T "VitalControl" >}}`

{{% alert title="Atenție" %}}
Pentru a activa și configura dispozitivul {{<T "VitalControl" >}}, trebuie să fiți autentificat cu rolul de utilizator {{<T "SiteManager" >}} la distribuitorul automat. În caz contrar, unele dintre butoanele afișate și descrise mai jos nu vor fi vizibile pentru dumneavoastră.
{{% /alert %}}

1. Faceți clic pe butonul de jos <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Meniu Setări" title="Setări"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> în bara laterală stângă a terminalului tactil. Dacă sunteți în meniul principal unde nu este vizibilă nicio bară laterală, apăsați butonul &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Meniu Distribuitor" title="Meniu Distribuitor"/>`{{<T "Feeder" >}}`pentru a afișa bara laterală.

1. Faceți clic pe al doilea buton din stânga <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Setări Terminal Tactil" title="Setări Tactil"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> în bara de instrumente de jos a terminalului tactil.

1. O serie de elemente de meniu apare acum pe jumătatea stângă a ecranului central. Faceți clic pe butonul de jos `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Un element de meniu (sau posibil mai multe) apare acum pe jumătatea dreaptă a ecranului central. Faceți clic pe butonul de sus `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Butonul se mută acum pe jumătatea stângă a ecranului.

1. În partea de jos a părții drepte a ecranului, butonul &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Deschide setările VitalControl" title="Deschide setările" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span> este acum afișat. Faceți clic pe acest buton și se va deschide o fereastră pop-up, afișând [Pagina 1](#settings-menu-vitalcontrol-page-1) a meniului de setări `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Setări VitalControl: Acces" title="Accesare meniu setări VitalControl" />
    <figcaption class="figure-caption fs-6">Captură de ecran 1: Accesarea meniului de setări <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Meniul de setări `{{<T "VitalControl" >}}` este împărțit pe două pagini:

## Meniul de Setări `{{<T "VitalControl" >}}` - Pagina 1 {#settings-menu-vitalcontrol-page-1}

Pagina 1 a meniului de setări <span style="font-style: italic;">{{<T "VitalControl" >}}</span> este prezentată astfel:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Meniu setări VitalControl: Pagina 1" title="Setări VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Captură de ecran 2: Meniul de setări <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Pagina 1</figcaption>
</figure>

Pe această pagină, puteți efectua următoarele acțiuni și setări.

### Activarea Dispozitivului {{<T "VitalControl" >}} {#activation-vitalcontrol}

În starea implicită a mașinii, {{<T "VitalControl" >}} este dezactivat. Setați comutatorul <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> în poziția dreaptă <span style="font-style: italic;">{{<T "YES" >}}</span> pentru a activa dispozitivul {{<T "VitalControl" >}}. Ulterior, în bara laterală dreaptă a meniului de alimentare, sub pictograma(ele) pentru mașina(ele) conectată(e), va fi afișată pictograma <img src="/icons/device.svg" width="20" align="bottom" alt="Dispozitiv VitalControl" title="VitalControl"/> pentru dispozitivul `{{<T "VitalControl" >}}` (vezi Captura de ecran <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Meniu Alimentare</a></span>, figura <span style="font-size: 140%">➁</span> acolo).

### Sincronizare alimentator automat <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Pe partea stângă a ecranului, există două căsuțe de selectare:

* Căsuță de selectare <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Această opțiune controlează comportamentul în cazul în care animalele sunt prezente la alimentator în timpul sincronizării și nu sunt încă cunoscute de dispozitivul {{<T "VitalControl" >}}. Această opțiune este activată implicit și ar trebui să rămână setată în general. Dacă înregistrați animalele achiziționate prin scanarea pașapoartelor lor, această opțiune trebuie dezactivată.

    <span style="font-weight: bold">Activați</span> această opțiune:

    - dacă aveți un {{<T "VitalControl" >}} nou-nouț în fața dumneavoastră, pe care doriți să transferați toate animalele de la un alimentator. După sincronizare, toate animalele cunoscute de alimentator vor fi de asemenea prezente pe {{<T "VitalControl" >}}.
    - dacă aduceți continuu viței noi la alimentator în timpul operațiunilor curente. Aceste animale vor fi de asemenea create pe dispozitivul {{<T "VitalControl" >}} în timpul sincronizării.

    <span style="font-weight: bold">Dezactivați</span> această opțiune:

    - dacă aveți animale nou create pe {{<T "VitalControl" >}} prin scanarea pașapoartelor lor, unde
    - aceste animale nu au fost încă atribuite unui transponder și
    - aceste animale sunt deja hrănite la alimentator și sunt astfel înregistrate acolo.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
                Dacă opțiunea rămâne setată în configurația de mai sus, animalele vor fi prezente de două ori pe {{<T "VitalControl" >}} după sincronizare.
            </div>
        </div>


* Bifa <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Această opțiune controlează dacă animalele care sunt prezente doar pe {{<T "VitalControl" >}} dar nu și la hrănitor sunt șterse din {{<T "VitalControl" >}} în timpul următoarei sincronizări. Dacă folosiți {{<T "VitalControl" >}} doar în perioada de lactație a animalelor, această opțiune ar trebui activată. Dacă doriți să urmăriți animalele și după perioada de lactație, trebuie să dezactivați această opțiune.

    <span style="font-weight: bold">Activați</span> această opțiune:

    - dacă colectați date pentru animale doar în perioada de lactație,
    - dacă doriți ca animalele să fie șterse din {{<T "VitalControl" >}} în timpul următoarei sincronizări după ce au fost șterse de la hrănitor. În acest fel, animalele nu se acumulează pe {{<T "VitalControl" >}} în timp.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
            Dacă această opțiune este activată și bifa <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> este de asemenea activată, niciun animal mai tânăr decât specificat în câmpul numeric <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span> nu va fi șters.
        </div>
    </div>

    <span style="font-weight: bold">Dezactivați</span> această opțiune:
    - dacă doriți să continuați colectarea datelor pentru animale după perioada de lactație, de exemplu, în timpul unei cântăriri,
    - dacă sunteți dispus să ștergeți manual animalele din {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
        Dacă dezactivați această opțiune, trebuie să deconectați transponderul pentru animalele înțărcate pe dispozitivul {{<T "VitalControl" >}} cel târziu când zgarda este îndepărtată de la vițelul înțărcat la altul, mai tânăr. Dacă transponderul nu este îndepărtat, înregistrările de date ale animalului mai tânăr - care acum poartă zgarda fostului animal înțărcat - sunt adăugate incorect la setul de date al animalelor înțărcate.
    </div>
</div>

### Sincronizare {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Hrănitor Automat

Pe partea dreaptă a ecranului, există o casetă de selectare și două câmpuri de introducere:

* Casetă de selectare <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

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

- dacă înregistrarea inițială a animalelor nou-născute cu {{<T "VitalControl" >}} are loc înainte de prima hrănire la hrănitor.
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

* Meniu derulant <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   În acest meniu derulant, puteți selecta curba de hrănire care este atribuită animalelor care sunt create recent la hrănitor în timpul sincronizării.

* Câmp de intrare numeric<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    În acest câmp numeric, puteți specifica vârsta minimă (în zile) de la care animalele sunt create recent la hrănitor în timpul sincronizării. Animalele care sunt mai tinere decât vârsta minimă specificată **nu** sunt create în timpul sincronizării.

Apăsați butonul <span style="font-size: 140%">⑧</span> pentru a trece la [pagina 2](#settings-menu-vitalcontrol-page-2) a <span style="font-style: italic;">meniului de setări {{<T "VitalControl" >}}</span>.

## Meniul Setări `{{<T "VitalControl" >}}` - Pagina 2 {#settings-menu-vitalcontrol-page-2}

### Cum să gestionezi conflictele de date în timpul sincronizării

Conflictele de date pot apărea atunci când se sincronizează datele între distribuitor și dispozitivul {{<T "VitalControl" >}}. Un conflict de date apare atunci când datele se contrazic între ele pe dispozitivul {{<T "VitalControl" >}} și pe distribuitor (de exemplu, referitor la <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Pe această pagină 2 a meniului de setări, poți specifica dacă și cum sunt rezolvate conflictele de date în timpul sincronizării. Există trei opțiuni aici:

* Prioritatea este acordată datelor distribuitorului, datele de pe dispozitivul {{<T "VitalControl" >}} sunt suprascrise cu cele ale distribuitorului\.
  Activează această opțiune selectând butonul radio din coloana din stânga sub simbolul distribuitorului <span style="font-size: 140%">➃</span>.

* Prioritatea este acordată datelor {{<T "VitalControl" >}}, datele de pe distribuitor sunt suprascrise cu cele ale dispozitivului {{<T "VitalControl" >}}\.
  Activează această opțiune selectând butonul radio din coloana din stânga sub {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Nu se fac modificări, atât datele distribuitorului, cât și datele dispozitivului {{<T "VitalControl" >}} rămân neschimbate.\ 
  Activează această opțiune selectând butonul radio din coloana din dreapta <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Exemplu</span><br>
            După ce ai achiziționat un lot de viței, îți înregistrezi animalele achiziționate pe {{<T "VitalControl" >}} scanând toate pașapoartele lor de animale. Numerele de animale pentru aceste animale pe {{<T "VitalControl" >}} sunt apoi – în funcție de <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">setările dispozitivului</a> – ultimele 3-5 cifre ale pașaportului animalului. Apoi pui zgărzi cu transpondere Urban pe animalele nou achiziționate și le hrănești la distribuitorul automat. În timpul primei vizite la stație, animalele sunt înregistrate folosind transponderul lor și create noi la distribuitor. Totuși, numerele de animale pentru aceste animale noi pe distribuitor sunt derivate din numărul transponderului sau corespund numărului de animal stocat pentru acest transponder în distribuitor. Aceasta înseamnă că un număr de animal diferit a fost acum atribuit aceluiași animal pe dispozitivul {{<T "VitalControl" >}} și pe distribuitor, rezultând un conflict de date. Folosind butoanele radio pentru <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, poți specifica acum în meniul de setări care dintre cele două numere de animale paralele are prioritate și care va fi șters în timpul sincronizării.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Settings Menu VitalControl: Page 2" title="Settings VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Captură de ecran 3: Meniul de setări <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Pagina 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenție</span><br>
        Din motive interne, modificările pot fi făcute momentan doar la <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. În versiunile ulterioare de firmware, veți putea face modificări și la <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> și la <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Apăsând <span style="font-style: italic;">butonul</span> <span style="font-size: 140%">⑧</span> veți reveni la [pagina 1](#settings-menu-vitalcontrol-page-1) a meniului de setări `{{<T "VitalControl" >}}`.
