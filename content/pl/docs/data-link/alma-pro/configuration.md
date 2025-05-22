---
title: Jednorazowa aktywacja i konfiguracja urządzenia w ustawieniach automatycznego podajnika
linkTitle: Konfiguracja
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Przed pierwszym użyciem VitalControl należy go raz aktywować i odpowiednio skonfigurować w ustawieniach podajnika Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Aby aktywować i skonfigurować urządzenie VitalControl, postępuj w następujący sposób:

## Nawigacja do menu ustawień `{{<T "VitalControl" >}}`

{{% alert title="Uwaga" %}}
Aby aktywować i skonfigurować urządzenie {{<T "VitalControl" >}}, musisz być zalogowany jako użytkownik z rolą {{<T "SiteManager" >}} w automatycznym podajniku. W przeciwnym razie niektóre z przycisków pokazanych i opisanych poniżej nie będą dla Ciebie widoczne.
{{% /alert %}}

1. Kliknij dolny przycisk <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Menu Ustawień" title="Ustawienia"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> w lewym pasku bocznym terminala dotykowego. Jeśli jesteś w menu głównym, gdzie pasek boczny nie jest widoczny, naciśnij przycisk &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Menu Podajnika" title="Menu Podajnika"/>`{{<T "Feeder" >}}`, aby wyświetlić pasek boczny.

1. Kliknij drugi przycisk od lewej <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Ustawienia Terminala Dotykowego" title="Ustawienia Dotykowe"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> w dolnym pasku narzędzi terminala dotykowego.

1. Teraz na lewej połowie centralnego obszaru ekranu pojawi się szereg pozycji menu. Kliknij dolny przycisk `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Teraz na prawej połowie centralnego obszaru ekranu pojawi się pozycja menu (lub kilka). Kliknij górny przycisk `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Przycisk teraz przełącza się na lewą połowę ekranu.

1. Na dole prawej strony ekranu wyświetlany jest teraz przycisk &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Otwórz ustawienia VitalControl" title="Otwórz ustawienia" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Kliknij ten przycisk, a otworzy się okno popup, wyświetlając [Stronę 1](#settings-menu-vitalcontrol-page-1) menu ustawień `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Ustawienia VitalControl: Dostęp" title="Dostęp do menu ustawień VitalControl" />
    <figcaption class="figure-caption fs-6">Zrzut ekranu 1: Dostęp do menu ustawień <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Menu ustawień `{{<T "VitalControl" >}}` jest podzielone na dwie strony:

## Menu Ustawień `{{<T "VitalControl" >}}` - Strona 1 {#settings-menu-vitalcontrol-page-1}

Strona 1 menu ustawień <span style="font-style: italic;">{{<T "VitalControl" >}}</span> jest przedstawiona w następujący sposób:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Menu ustawień VitalControl: Strona 1" title="Ustawienia VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Zrzut ekranu 2: Menu ustawień <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Strona 1</figcaption>
</figure>

Na tej stronie możesz wykonać następujące działania i ustawienia.

### Aktywacja Urządzenia {{<T "VitalControl" >}} {#activation-vitalcontrol}

W domyślnym stanie maszyny, {{<T "VitalControl" >}} jest dezaktywowany. Ustaw przełącznik <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> w prawą pozycję <span style="font-style: italic;">{{<T "YES" >}}</span>, aby aktywować urządzenie {{<T "VitalControl" >}}. Następnie, w prawym pasku bocznym menu podajnika, poniżej ikony/ikon dla podłączonej/ych maszyny/maszyn, zostanie wyświetlona ikona <img src="/icons/device.svg" width="20" align="bottom" alt="Urządzenie VitalControl" title="VitalControl"/> dla urządzenia `{{<T "VitalControl" >}}` (zobacz Zrzut ekranu <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Menu Podajnika</a></span>, rysunek <span style="font-size: 140%">➁</span> tam).

### Synchronizacja automatycznego podajnika <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Po lewej stronie ekranu znajdują się dwa pola wyboru:

* Pole wyboru <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Ta opcja kontroluje zachowanie w przypadku, gdy podczas synchronizacji na podajniku znajdują się zwierzęta, które nie są jeszcze znane urządzeniu {{<T "VitalControl" >}}. Ta opcja jest domyślnie włączona i zazwyczaj powinna pozostać ustawiona. Jeśli rejestrujesz zakupione zwierzęta, skanując ich paszporty, ta opcja musi być wyłączona.

    <span style="font-weight: bold">Włącz</span> tę opcję:

    - jeśli masz przed sobą nowiutki {{<T "VitalControl" >}}, na który chcesz przenieść wszystkie zwierzęta z podajnika. Po synchronizacji wszystkie zwierzęta znane podajnikowi będą również obecne na {{<T "VitalControl" >}}.
    - jeśli ciągle przyprowadzasz nowe cielęta do podajnika podczas trwających operacji. Te zwierzęta zostaną również utworzone na urządzeniu {{<T "VitalControl" >}} podczas synchronizacji.

    <span style="font-weight: bold">Wyłącz</span> tę opcję:

    - jeśli masz nowo utworzone zwierzęta na swoim {{<T "VitalControl" >}}, skanując ich paszporty, gdzie
    - te zwierzęta nie zostały jeszcze przypisane do transpondera i
    - te zwierzęta są już karmione przy podajniku i są tam zarejestrowane.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
                Jeśli opcja pozostanie ustawiona w powyższej konfiguracji, zwierzęta będą obecne dwukrotnie na {{<T "VitalControl" >}} po synchronizacji.
            </div>
        </div>


* Pole wyboru <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Ta opcja kontroluje, czy zwierzęta, które są obecne tylko w {{<T "VitalControl" >}}, ale nie przy karmniku, są usuwane z {{<T "VitalControl" >}} podczas następnej synchronizacji. Jeśli używasz {{<T "VitalControl" >}} tylko w okresie mlecznym zwierząt, ta opcja powinna być włączona. Jeśli chcesz śledzić zwierzęta poza okresem mlecznym, musisz wyłączyć tę opcję.

    <span style="font-weight: bold">Włącz</span> tę opcję:

    - jeśli zbierasz dane o zwierzętach tylko w okresie mlecznym,
    - jeśli chcesz, aby zwierzęta były usuwane z {{<T "VitalControl" >}} podczas następnej synchronizacji po ich usunięciu z karmnika. W ten sposób zwierzęta nie gromadzą się w {{<T "VitalControl" >}} z czasem.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
            Jeśli ta opcja jest aktywowana i pole wyboru <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> jest również aktywowane, żadne zwierzęta nie będą usuwane, które są młodsze niż określono w polu liczbowym <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Wyłącz</span> tę opcję:
    - jeśli chcesz kontynuować zbieranie danych o zwierzętach po okresie mlecznym, na przykład podczas ważenia,
    - jeśli jesteś gotów samodzielnie usuwać zwierzęta z {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Jeśli wyłączysz tę opcję, musisz odłączyć transponder dla odstawionych zwierząt na urządzeniu {{<T "VitalControl" >}} najpóźniej, gdy obroża zostanie zdjęta z odstawionego cielęcia na inne, młodsze cielę. Jeśli transponder nie zostanie usunięty, dane młodszego zwierzęcia - które teraz nosi dawną obrożę odstawionego zwierzęcia - zostaną błędnie dodane do zestawu danych odstawionych zwierząt.
    </div>
</div>

### Synchronizacja {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automatyczny Karmnik

Po prawej stronie ekranu znajduje się pole wyboru i dwa pola wejściowe:

* Pole wyboru <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Ta opcja kontroluje, czy zwierzęta obecne na {{<T "VitalControl" >}}, które są nieznane karmnikowi, zostaną utworzone na karmniku podczas następnej synchronizacji. Domyślnie ta opcja nie jest aktywowana.

    <span style="font-weight: bold">Dezaktywuj</span> tę opcję lub pozostaw ją nieaktywną:

    - jeśli używasz swojego urządzenia {{<T "VitalControl" >}} na wielu karmnikach jednocześnie,
    - jeśli przyprowadzasz swoje zwierzęta bezpośrednio do karmnika bez wcześniejszej rejestracji ich za pomocą urządzenia {{<T "VitalControl" >}}. Twoje zwierzęta zostaną wtedy automatycznie utworzone podczas rejestracji, gdy zostaną po raz pierwszy nakarmione w karmniku.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
            Jeśli {{<T "VitalControl" >}} jest używany na wielu maszynach i ta opcja jest zaznaczona, zwierzęta zostaną nieumyślnie przeniesione z jednej maszyny na inną podczas synchronizacji.
        </div>
    </div>

<span style="font-weight: bold">Aktywuj</span> tę opcję:

- jeśli początkowa rejestracja nowo narodzonych zwierząt w {{<T "VitalControl" >}} odbywa się przed pierwszym karmieniem przy karmniku.
- jeśli rejestrujesz zakupione zwierzęta, skanując ich paszporty zwierząt w {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Aktywuj tę opcję tylko wtedy, gdy używasz {{<T "VitalControl" >}} na jednej maszynie! Jeśli chcesz przeprowadzić synchronizację z wieloma maszynami z ustawioną tą opcją, musisz użyć oddzielnego urządzenia {{<T "VitalControl" >}} dla każdej maszyny.
    </div>
</div>

* Menu rozwijane <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   W tym menu rozwijanym możesz wybrać krzywą karmienia przypisaną do zwierząt, które są nowo tworzone na karmniku podczas synchronizacji.

* Pole numeryczne <span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    W tym polu liczbowym możesz określić minimalny wiek (w dniach), od którego zwierzęta są nowo tworzone na karmniku podczas synchronizacji. Zwierzęta młodsze niż określony minimalny wiek **nie** są tworzone podczas synchronizacji.

Naciśnij przycisk <span style="font-size: 140%">⑧</span>, aby przejść do [strony 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">menu ustawień {{<T "VitalControl" >}}</span>.

## Menu Ustawień `{{<T "VitalControl" >}}` - Strona 2 {#settings-menu-vitalcontrol-page-2}

### Jak radzić sobie z konfliktami danych podczas synchronizacji

Konflikty danych mogą wystąpić podczas synchronizacji danych między karmnikiem a urządzeniem {{<T "VitalControl" >}}. Konflikt danych występuje, gdy dane są sprzeczne na urządzeniu {{<T "VitalControl" >}} i na karmniku (np. dotyczące <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Na tej stronie 2 menu ustawień możesz określić, czy i jak konflikty danych są rozwiązywane podczas synchronizacji. Istnieją trzy opcje:

* Priorytet mają dane z karmnika, dane na urządzeniu {{<T "VitalControl" >}} są nadpisywane danymi z karmnika.
  Aktywuj tę opcję, wybierając przycisk radiowy w lewej kolumnie poniżej symbolu karmnika <span style="font-size: 140%">➃</span>.

* Priorytet mają dane {{<T "VitalControl" >}}, dane na karmniku są nadpisywane danymi z urządzenia {{<T "VitalControl" >}}.
  Aktywuj tę opcję, wybierając przycisk radiowy w lewej kolumnie poniżej {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Nie wprowadzane są żadne zmiany, zarówno dane karmnika, jak i dane urządzenia {{<T "VitalControl" >}} pozostają niezmienione.
  Aktywuj tę opcję, wybierając przycisk radiowy w prawej kolumnie <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Przykład</span><br>
            Po zakupie partii cieląt rejestrujesz zakupione zwierzęta na {{<T "VitalControl" >}} poprzez skanowanie wszystkich ich paszportów zwierząt. Numery zwierząt dla tych zwierząt na {{<T "VitalControl" >}} to wtedy – w zależności od <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">ustawień urządzenia</a> – ostatnie 3-5 cyfr paszportu zwierzęcia. Następnie zakładasz obroże z transponderami Urban na nowo zakupione zwierzęta i karmisz je w automatycznym karmniku. Podczas pierwszej wizyty na stacji zwierzęta są rejestrowane za pomocą transpondera i nowo tworzone w karmniku. Jednak numery zwierząt dla tych nowych zwierząt na karmniku są wywodzone z numeru transpondera lub odpowiadają numerowi zwierzęcia przechowywanemu dla tego transpondera w karmniku. Oznacza to, że inny numer zwierzęcia został teraz przypisany do tego samego zwierzęcia na urządzeniu {{<T "VitalControl" >}} i na karmniku, co skutkuje konfliktem danych. Korzystając z przycisków radiowych dla <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, możesz teraz określić w menu ustawień, który z dwóch równoległych numerów zwierząt ma priorytet i który zostanie usunięty podczas synchronizacji.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Menu Ustawień VitalControl: Strona 2" title="Ustawienia VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Zrzut ekranu 3: Menu Ustawień <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Strona 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Z powodów wewnętrznych zmiany mogą być obecnie dokonywane tylko w <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. W późniejszych wersjach oprogramowania układowego będzie można również dokonywać zmian w <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> oraz <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Naciskając <span style="font-style: italic;">przycisk</span> <span style="font-size: 140%">⑧</span> powrócisz do [strony 1](#settings-menu-vitalcontrol-page-1) menu ustawień `{{<T "VitalControl" >}}`.
