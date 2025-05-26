---
title: Jednorazowa aktywacja i konfiguracja urządzenia w ustawieniach automatycznego podajnika
linkTitle: Konfiguracja
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Przed pierwszym użyciem VitalControl należy go jednorazowo aktywować i odpowiednio skonfigurować w ustawieniach podajnika Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/pl
---
## Wymagania

Zalecamy używanie wersji oprogramowania układowego <span style="font-weight: bold">24-xx-xx</span> lub wyższej z urządzeniem VitalControl.\
Aby sprawdzić, która wersja oprogramowania układowego jest zainstalowana na Twoim urządzeniu:

* Przejdź do strony głównej podajnika, klikając górny przycisk `Home` <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Ikona ekranu głównego" title="Alma Pro: Ekran główny"/>&nbsp; w pasku nawigacyjnym po lewej stronie ekranu.
* Na ekranie głównym kliknij przycisk `Help` <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Ikona menu pomocy" title="Alma Pro: Ekran pomocy"/>&nbsp; w prawym górnym rogu ekranu.
* Numer wersji <span style="font-size: 140%">➂</span> jest teraz wyświetlany po lewej stronie przycisku zmiany języka.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: sprawdzanie wersji oprogramowania układowego" title="Alma Pro: sprawdzanie wersji oprogramowania układowego" />
    <figcaption class="figure-caption fs-6">Zrzut ekranu 1: <span style="font-style: italic;">Alma Pro: sprawdzanie wersji oprogramowania układowego</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Jeśli wersja oprogramowania układowego Twojego podajnika jest niższa niż <span style="font-weight: bold">24-xx-xx</span>, mogą wystąpić rozbieżności między poniższymi zrzutami ekranu a wyświetlaczem na ekranie dotykowym, co uniemożliwi Ci wykonanie instrukcji. W takim przypadku skontaktuj się z technikiem serwisowym, aby zaktualizować oprogramowanie układowe na Twoim podajniku.<br>
    </div>
</div>

## Nawigacja do menu ustawień `{{% T "VitalControl" %}}`

{{% alert title="Uwaga" %}}
Aby aktywować i skonfigurować urządzenie {{<T "VitalControl" >}}, musisz być zalogowany jako użytkownik z rolą {{<T "SiteManager" >}} na automatycznym podajniku. W przeciwnym razie niektóre z przycisków pokazanych i opisanych poniżej nie będą dla Ciebie widoczne.
{{% /alert %}}

1. Kliknij dolny przycisk <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Menu Ustawień" title="Ustawienia"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> w lewym pasku bocznym terminala dotykowego. Jeśli jesteś w menu głównym, gdzie pasek boczny nie jest widoczny, naciśnij przycisk &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Menu Podajnika" title="Menu Podajnika"/>`{{<T "Feeder" >}}`, aby wyświetlić pasek boczny.

1. Kliknij drugi przycisk od lewej <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Ustawienia Terminala Dotykowego" title="Ustawienia Dotykowe"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> w dolnym pasku narzędzi terminala dotykowego.

1. Teraz na lewej połowie centralnego obszaru ekranu pojawi się seria elementów menu. Kliknij dolny przycisk `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Teraz na prawej połowie centralnego obszaru ekranu pojawi się element menu (lub kilka). Kliknij górny przycisk `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Przycisk teraz przełącza się na lewą połowę ekranu.

1. Na dole prawej strony ekranu wyświetlany jest przycisk &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Otwórz ustawienia VitalControl" title="Otwórz ustawienia" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Kliknij ten przycisk, a otworzy się okno popup, wyświetlające [Stronę 1](#settings-menu-vitalcontrol-page-1) menu ustawień `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" usemap="#NavigationToVitalControlSettingsMenu" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Ustawienia VitalControl: Dostęp" title="Dostęp do menu ustawień VitalControl" />
    <figcaption class="figure-caption fs-6">Zrzut ekranu 1: Dostęp do menu ustawień <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Menu ustawień `{{<T "VitalControl" >}}` jest podzielone na dwie strony:

## Menu ustawień `{{% T "VitalControl" %}}` - Strona 1 {#settings-menu-vitalcontrol-page-1}

Strona 1 menu ustawień <span style="font-style: italic;">{{<T "VitalControl" >}}</span> jest przedstawiona w następujący sposób:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" usemap="#VitalControlSettingsPage1" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Menu ustawień VitalControl: Strona 1" title="Ustawienia VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Zrzut ekranu 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> menu ustawień, Strona 1</figcaption>
</figure>

Na tej stronie możesz wykonać następujące działania i ustawienia.

### Aktywacja urządzenia {{% T "VitalControl" %}} {#activation-vitalcontrol}

W domyślnym stanie maszyny, {{<T "VitalControl" >}} jest dezaktywowane. Ustaw przełącznik <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> w prawą pozycję <span style="font-style: italic;">{{<T "YES" >}}</span>, aby aktywować urządzenie {{<T "VitalControl" >}}. Następnie, w prawym pasku bocznym menu podajnika, poniżej ikony/ikon dla podłączonej maszyny/maszyn, zostanie wyświetlona ikona <img src="/icons/device.svg" width="20" align="bottom" alt="Urządzenie VitalControl" title="VitalControl"/> dla urządzenia `{{<T "VitalControl" >}}` (zobacz Zrzut ekranu <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Menu Podajnika</a></span>, rysunek <span style="font-size: 140%">➁</span> tam).

### Synchronizacja automatycznego podajnika <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Po lewej stronie ekranu znajdują się dwa pola wyboru:

* Pole wyboru <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Ta opcja kontroluje zachowanie w przypadku, gdy na karmniku podczas synchronizacji znajdują się zwierzęta, które nie są jeszcze znane urządzeniu {{<T "VitalControl" >}}. Ta opcja jest domyślnie włączona i zazwyczaj powinna pozostać ustawiona. Jeśli rejestrujesz zakupione zwierzęta, skanując ich paszporty, ta opcja musi być wyłączona.

<span style="font-weight: bold">Włącz</span> tę opcję:

- jeśli masz przed sobą nowy {{<T "VitalControl" >}}, na który chcesz przenieść wszystkie zwierzęta z karmnika. Po synchronizacji wszystkie zwierzęta znane karmnikowi będą również obecne na {{<T "VitalControl" >}}.
- jeśli ciągle przyprowadzasz nowe cielęta do karmnika podczas trwających operacji. Te zwierzęta zostaną również utworzone na urządzeniu {{<T "VitalControl" >}} podczas synchronizacji.

<span style="font-weight: bold">Wyłącz</span> tę opcję:

- jeśli masz nowo utworzone zwierzęta na swoim {{<T "VitalControl" >}} poprzez skanowanie ich paszportów, gdzie
- te zwierzęta nie mają jeszcze przypisanego transpondera i
- te zwierzęta są już karmione przy karmniku i są tam zarejestrowane.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Jeśli opcja pozostanie ustawiona w powyższej konfiguracji, zwierzęta będą obecne dwukrotnie na {{<T "VitalControl" >}} po synchronizacji.
    </div>
</div>

* Checkbox <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Ta opcja kontroluje, czy zwierzęta, które są obecne tylko na {{<T "VitalControl" >}}, ale nie na karmniku, są usuwane z {{<T "VitalControl" >}} podczas następnej synchronizacji. Jeśli używasz {{<T "VitalControl" >}} tylko w okresie mlecznym zwierząt, ta opcja powinna być włączona. Jeśli chcesz śledzić zwierzęta poza okresem mlecznym, musisz wyłączyć tę opcję.

<span style="font-weight: bold">Włącz</span> tę opcję:

- jeśli zbierasz dane dla zwierząt tylko w okresie mlecznym,
- jeśli chcesz, aby zwierzęta były usuwane z {{<T "VitalControl" >}} podczas następnej synchronizacji po ich usunięciu z karmnika. W ten sposób zwierzęta nie gromadzą się na {{<T "VitalControl" >}} z czasem.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Jeśli ta opcja jest aktywowana i pole wyboru <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> jest również aktywowane, żadne zwierzęta nie będą usuwane, które są młodsze niż określono w polu liczbowym <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Wyłącz</span> tę opcję:
- jeśli chcesz kontynuować zbieranie danych dla zwierząt po okresie mlecznym, na przykład podczas ważenia,
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

### Synchronizacja {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Automatyczny karmnik

Po prawej stronie ekranu znajduje się pole wyboru i dwa pola wejściowe:

* Pole wyboru <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Ta opcja kontroluje, czy zwierzęta obecne na {{<T "VitalControl" >}}, które są nieznane karmnikowi, zostaną utworzone na karmniku podczas następnej synchronizacji. Domyślnie ta opcja nie jest aktywowana.

    <span style="font-weight: bold">Dezaktywuj</span> tę opcję lub pozostaw ją nieaktywną:

    - jeśli używasz swojego urządzenia {{<T "VitalControl" >}} na wielu karmnikach jednocześnie,
    - jeśli przyprowadzasz swoje zwierzęta bezpośrednio do karmnika bez wcześniejszej rejestracji ich za pomocą urządzenia {{<T "VitalControl" >}}. Twoje zwierzęta zostaną wtedy automatycznie utworzone podczas rejestracji, gdy zostaną po raz pierwszy nakarmione przy karmniku.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Jeśli {{<T "VitalControl" >}} jest używany na wielu maszynach i ta opcja jest zaznaczona, zwierzęta będą nieumyślnie przenoszone z jednej maszyny na drugą podczas synchronizacji.
    </div>
</div>

<span style="font-weight: bold">Aktywuj</span> tę opcję:

- jeśli początkowa rejestracja ich nowonarodzonych zwierząt za pomocą {{<T "VitalControl" >}} odbywa się przed pierwszym karmieniem przy karmniku.
- jeśli rejestrujesz zakupione zwierzęta, skanując ich paszporty zwierząt na {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Aktywuj tę opcję tylko, jeśli używasz {{<T "VitalControl" >}} na jednej maszynie! Jeśli chcesz przeprowadzić synchronizację z wieloma maszynami z tą opcją ustawioną, musisz użyć oddzielnego urządzenia {{<T "VitalControl" >}} dla każdej maszyny.
    </div>
</div>

* Menu rozwijane <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   W tym menu rozwijanym możesz wybrać krzywą karmienia przypisaną do zwierząt, które są nowo utworzone na karmniku podczas synchronizacji.

* Pole wejściowe numeryczne<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    W tym polu liczbowym możesz określić minimalny wiek (w dniach), od którego zwierzęta są nowo tworzone na karmniku podczas synchronizacji. Zwierzęta, które są młodsze niż określony minimalny wiek, **nie** są tworzone podczas synchronizacji.

Naciśnij przycisk <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span>, aby przejść do [strony 2](#settings-menu-vitalcontrol-page-2) <span style="font-style: italic;">menu ustawień {{<T "VitalControl" >}}</span>.

## Menu Ustawień `{{% T "VitalControl" %}}` - Strona 2 {#settings-menu-vitalcontrol-page-2}

### Jak radzić sobie z konfliktami danych podczas synchronizacji

Konflikty danych mogą wystąpić podczas synchronizacji danych między karmnikiem a urządzeniem {{<T "VitalControl" >}}. Konflikt danych występuje, gdy dane są sprzeczne na urządzeniu {{<T "VitalControl" >}} i na karmniku (np. dotyczące <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Na tej stronie 2 menu ustawień możesz określić, czy i jak konflikty danych są rozwiązywane podczas synchronizacji. Istnieją trzy opcje:

* Priorytet mają dane z karmnika, dane na urządzeniu {{<T "VitalControl" >}} są nadpisywane danymi z karmnika.
  Aktywuj tę opcję, wybierając przycisk radiowy w lewej kolumnie poniżej symbolu karmnika <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Priorytet mają dane {{<T "VitalControl" >}}, dane na karmniku są nadpisywane danymi z urządzenia {{<T "VitalControl" >}}.
  Aktywuj tę opcję, wybierając przycisk radiowy w lewej kolumnie poniżej {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* Nie wprowadzono żadnych zmian, zarówno dane podajnika, jak i dane urządzenia {{<T "VitalControl" >}} pozostają niezmienione.\
  Aktywuj tę opcję, wybierając przycisk radiowy w prawej kolumnie <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Przykład</span><br>
            Po zakupie partii cieląt rejestrujesz zakupione zwierzęta na {{<T "VitalControl" >}} skanując wszystkie ich paszporty zwierząt. Numery zwierząt dla tych zwierząt na {{<T "VitalControl" >}} są następnie – w zależności od <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">ustawień urządzenia</a> – ostatnimi 3-5 cyframi paszportu zwierzęcia. Następnie zakładasz obroże z transponderami Urban na nowo zakupione zwierzęta i karmisz je przy automatycznym podajniku. Podczas pierwszej wizyty na stacji zwierzęta są rejestrowane za pomocą transpondera i nowo tworzone przy podajniku. Jednak numery zwierząt dla tych nowych zwierząt na podajniku są wywodzone z numeru transpondera lub odpowiadają numerowi zwierzęcia przechowywanemu dla tego transpondera w podajniku. Oznacza to, że teraz przypisano inny numer zwierzęcia do tego samego zwierzęcia na urządzeniu {{<T "VitalControl" >}} i na podajniku, co skutkuje konfliktem danych. Korzystając z przycisków radiowych dla <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, możesz teraz określić w menu ustawień, który z dwóch równoległych numerów zwierząt ma priorytet i który zostanie usunięty podczas synchronizacji.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" usemap="#VitalControlSettingsPage2" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Menu Ustawień VitalControl: Strona 2" title="Ustawienia VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Zrzut ekranu 3: Menu Ustawień <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Strona 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uwaga</span><br>
        Z powodów wewnętrznych zmiany mogą być obecnie dokonywane tylko w <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. W późniejszych wersjach oprogramowania można również dokonywać zmian w <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> oraz w <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Naciskając <span style="font-style: italic;">przycisk</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> powrócisz do [strony 1](#settings-menu-vitalcontrol-page-1) menu ustawień `{{<T "VitalControl" >}}`.

<map name="NavigationToVitalControlSettingsMenu">
    <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='Kliknij {{<T "Settings" >}}' href="#Navigation_Digit_1">
    <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='Kliknij {{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
    <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='Kliknij {{<T "Accessories" >}}' href="#Navigation_Digit_3">
    <area shape="rect" coords="520,150,870,197" alt='{{<T "OpenSettings" >}}' title='Kliknij {{<T "OpenSettings" >}}' href="#Navigation_Digit_4">
    <area shape="rect" coords="580,582,850,636" alt='{{<T "VitalControl" >}}' title='Kliknij {{<T "VitalControl" >}}' href="#Navigation_Digit_5">
</map>

<map name="VitalControlSettingsPage1">
    <area shape="rect" coords="253,45,626,107" alt='{{<T "TAK" >}}/{{<T "NIE" >}}' title='Kliknij {{<T "TAK" >}}/{{<T "NIE" >}}' href="#VitalControlSettingsPage1_Digit_1">
    <area shape="rect" coords="11,236,88,316" alt='{{<T "ZarejestrujNoweNaUrządzeniuVitalControl" >}}' title='Kliknij {{<T "ZarejestrujNoweNaUrządzeniuVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_2">
    <area shape="rect" coords="11,357,88,434" alt='{{<T "UsuńZVitalControl" >}}' title='Kliknij {{<T "UsuńZVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
    <area shape="rect" coords="31,463,357,508" alt='{{<T "NieUsuwajZwierzątMłodszychNiż" >}}' title='Kliknij {{<T "NieUsuwajZwierzątMłodszychNiż" >}}' href="#VitalControlSettingsPage1_Digit_4">
    <area shape="rect" coords="420,236,511,286" alt='{{<T "ZarejestrujNoweNaAutomatycznymKarmniku" >}}' title='Kliknij {{<T "ZarejestrujNoweNaAutomatycznymKarmniku" >}}' href="#VitalControlSettingsPage1_Digit_5">
    <area shape="rect" coords="435,352,837,397" alt='{{<T "KrzywaKarmieniaPrzypisanaDoImportowanychZwierząt" >}}' title='Kliknij {{<T "KrzywaKarmieniaPrzypisanaDoImportowanychZwierząt" >}}' href="#VitalControlSettingsPage1_Digit_6">
    <area shape="rect" coords="513,462,837,507" alt='{{<T "NieImportujZwierzątStarszychNiż" >}}' title='Kliknij {{<T "NieImportujZwierzątStarszychNiż" >}}' href="#VitalControlSettingsPage1_Digit_7">
    <area shape="rect" coords="142,517,215,616" alt='Strona 2' title='Kliknij Strona 2' href="#VitalControlSettingsPage1_Digit_8">
</map>

<map name="VitalControlSettingsPage2">
    <area shape="rect" coords="5,208,235,248" alt='{{<T "NumerKolczyka" >}}' title='Kliknij {{<T "NumerKolczyka" >}}' href="#VitalControlSettingsPage2_Digit_1">
    <area shape="rect" coords="5,208,235,328" alt='{{<T "NumerZwierzęcia" >}}' title='Kliknij {{<T "NumerZwierzęcia" >}}' href="#VitalControlSettingsPage2_Digit_2">
    <area shape="rect" coords="5,368,235,408" alt='{{<T "DataUrodzenia" >}}' title='Kliknij {{<T "DataUrodzenia" >}}' href="#VitalControlSettingsPage2_Digit_3">
    <area shape="rect" coords="392,116,455,177" alt='{{<T "Karmnik" >}}' title='Kliknij {{<T "Karmnik" >}}' href="#VitalControlSettingsPage2_Digit_4">
    <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='Kliknij {{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
    <area shape="rect" coords="678,97,775,159" alt='{{<T "BezZmian_AP" >}}' title='Kliknij {{<T "BezZmian_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
    <area shape="rect" coords="52,510,125,615" alt='Strona 1' title='Kliknij Strona 1' href="#VitalControlSettingsPage2_Digit_8">
</map>
