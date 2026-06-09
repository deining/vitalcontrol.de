---
title: Einmalige Aktivierung und Konfiguration des Geräts in den Einstellungen des Tränkeautomaten
linkTitle: Konfiguration
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Vor der erstmaligen Nutzung müssen Sie das VitalControl einmalig am Automaten aktivieren und passend für ihren Einsatzfall konfigurieren.
slug: konfiguration
weight: 10
Kategorien: [VitalControl, Alma Pro]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/de
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

## Voraussetzungen

Für den Einsatz des VitalControl-Geräts empfehlen wir eine Firmwareversion <span style="font-weight: bold">25-04-Vxx</span> oder höher.\
So prüfen Sie, welche Firmwareversion auf ihrem Automaten installiert ist:

* Wechseln Sie zur Startseite des Automaten, klicken Sie dazu ggf. auf die oberste `Home`-Schaltfläche <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Icon Startbildschirm" title="Alma Pro: Startbildschirm"/>&nbsp; in der Navigationsleiste im linken Bildschirmbereich.
* Klicken Sie im Startbildschirm auf die `Hilfe`-Schaltfläche <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Icon Hilfemenü" title="Alma Pro: Hilfebildschirm"/>&nbsp; im rechten oberen Bildschirmbereich.
* Die Versionsnummer <span style="font-size: 140%">➂</span> wird jetzt links neben der Schaltfläche zur Sprachumschaltung angezeigt.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: Prüfung Firmwareversion" title="Alma Pro: Prüfung Firmwareversion" />
    <figcaption class="figure-caption fs-6">Screenshot 1: <span style="font-style: italic;">Alma Pro</span>, Überprüfung der Firmwareversion</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
        Bei Firmwareversion niedriger als <span style="font-weight: bold">25-04-Vxx</span> können Abweichungen zwischen den unten angegeben Screenshots und der Anzeige auf bei ihrem Touchscreen auftreten, so dass Sie die Anleitung möglicherweise nicht nachvollziehen können. Kontaktieren Sie in diesem Fall ihren Servicetechniker, damit dieser auf ihrem Automaten eine Aktualisierung der Firmware vornimmt.<br>
    </div>
</div>

## Einstellungsmenü `VitalControl` aufrufen

> [!NOTE] Achtung
> Um die Aktivierung und Einrichtung des VitalControl-Geräts vornehmen zu können, müssen Sie in der Benutzerrolle `Betriebsleiter` am Automaten angemeldet sein. Andernfalls sind einige der unten abgebildeten und beschriebenen Schaltflächen für sie nicht sichtbar.

1. Klicken Sie in der linken Seitenliste des Touch-Terminals auf die unterste Schaltfläche <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Menü Einstellungen" title="Einstellungen"/> `Einstellungen` <span style="font-size: 140%">➀</span>. Sollten Sie sich im Hauptmenü befinden, wo keine Seitenleiste sichtbar ist, drücken sie die Schaltfläche &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Automatenmenü" title="Automatenmenü"/> `Automat`, um die Seitenleiste anzuzeigen.

1. Klicken Sie in der unteren Symbolleiste des Touch-Terminals auf die zweite Schaltfläche von links <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Einstellungen Touch-Terminal" title="Einstellungen Touch"/> `Einstellungen Touch-Terminal` <span style="font-size: 140%">➁</span>.

1. In der linken Hälfte des zentralen Bildschirmbereichs erscheint jetzt einen Reihe von Menüpunkten. Klicken Sie auf die unterste Schaltfläche `Zubehör` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. In der rechten Hälfte des zentralen Bildschirmbereichs erscheint jetzt ein (oder ggf. auch mehrere) Menüpunkt(e). Klicken Sie auf die oberste Schaltfläche `VitalControl` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Die Schaltfläche wechselt jetzt auf die linke Bildschirmhälfte.

1. Unten in der rechten Bildschirmhälfte wird nun die Schaltfläche &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Einstellungen VitalControl öffnen" title="Einstellungen öffnen" /> `Einstellungen öffnen` <span style="font-size: 140%" id="Navigation_Digit_5">➄</span> angezeigt. Klicken Sie auf diese Schaltfläche, es öffnet sich dann ein Popup-Fenster, in welchem  [Seite 1](#settings-menu-vitalcontrol-page-1) des Einstellungsmenüs `VitalControl` angezeigt wird.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="Einstellungen VitalControl: Aufruf"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Aufruf Einstellungsmenü VitalControl" />
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
    Screenshot 2: Aufruf des Einstellungsmenüs <span style="font-style: italic;">VitalControl</span>
</figcaption>

Das Einstellungsmenü `VitalControl` ist auf zwei Seiten verteilt: 

## Einstellungsmenü `VitalControl` - Seite 1 {#settings-menu-vitalcontrol-page-1}

Seite 1 des Einstellungsmenüs <span style="font-style: italic;">VitalControl</span> präsentiert sich wie folgt:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="Einstellungsmenü VitalControl: Seite 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Einstellungen VitalControl (1)" />
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
    Screenshot 3: Einstellungsmenü <span style="font-style: italic;">VitalControl</span>, Seite 1
</figcaption>

Sie können auf dieser Seite folgende Aktionen und Einstellungen durchführen bzw. vornehmen.

### Aktivierung des VitalControl-Geräts {#activation-vitalcontrol}

Im Auslieferungszustand des Automaten ist das VitalControl deaktiviert. Stellen Sie den <span style="font-style: italic;">Ein/Aus</span> Schalter <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_1">➀</span> auf die rechte Position <span style="font-style: italic;">Ja</span>, um das VitalControl-Gerät zu aktivieren. Anschließend wird in der rechten Seitenleiste des Automatenmenüs unterhalb der Symbol(e) für die/den angeschlossenen Automat(en) das Symbol <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl-Gerät" title="VitalControl"/> für das `VitalControl`-Gerät angezeigt (siehe Screenshot <span style="font-style: italic;"><a href="../synchronisation#figure3_synchronize_vitalcontrol_alma_pro">Automatenmenü</a></span>, dortige Ziffer <span style="font-size: 140%">➂</span>).

### Synchronisation Automat <span style="font-size: 150%">🠲</span> VitalControl

Auf der linken Seite des Bildschirms befinden sich zwei Checkboxen:

* Checkbox <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span> <span style="font-style: italic;">Auf VitalControl neu anlegen</span>. 

    Diese Option regelt das Verhalten für den Fall, dass bei der Synchronisation auf dem Automaten Tiere vorhanden sind, die dem VitalControl noch nicht bekannt sind. Diese Option ist standardmäßig aktiviert und sollte in der Regel auch gesetzt bleiben. Erfassen ihre zugekauften Fresser durch Scannen ihrer Tierpässe, muss diese Option jedoch zwingend deaktiviert werden.

    <span style="font-weight: bold">Aktivieren</span> Sie diese Option:

    - wenn Sie ein fabrikneues VitalControl vor sich haben, auf welches Sie alle Tiere eines Automaten übertragen wollen. Nach der Synchronisation sind dann alle dem Automaten bekannten Tiere auch auf dem VitalControl vorhanden.
    - wenn Sie im laufenden Betrieb kontinuierlich neue Kälber an den Automaten bringen. Diese Tiere werden dann im Zuge der Synchronisation ebenfalls auf dem VitalControl angelegt.

    <span style="font-weight: bold">Deaktivieren</span> Sie diese Option:
    - wenn Sie auf Ihrem VitalControl Tiere durch das Scannen ihrer Tierpässe neu angelegt haben, wobei
    - diesen Tieren noch kein Transponder zugewiesen wurde und
    - diese Tiere bereits am Automat gefüttert werden und sie insofern dort bereits registriert sind.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
                Bleibt in der oben zuletzt aufgeführten Konstellation die Option gesetzt, so werden nach der Synchronisation Tiere doppelt auf dem VitalControl vorhanden sein.
            </div>
        </div>

* Checkbox <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span> <span style="font-style: italic;">Vom VitalControl löschen</span>. 

    Diese Option regelt, ob Tiere, die nur auf dem VitalControl, nicht aber auf dem Automaten vorhanden sind, im Zuge der Synchronisation vom VitalControl gelöscht werden. Nutzen Sie das VitalControl nur während der Tränkeperiode der Tiere, so sollte die Option gesetzt sein. Möchten Sie die Tiere über die Tränkeperiode hinaus verfolgen, so müssen Sie diese Option deaktivieren.

    <span style="font-weight: bold">Aktivieren</span> Sie diese Option:
    - wenn Sie nur während der Tränkeperiode Daten für die Tiere erfassen,
    - wenn Sie möchten, dass die Tiere nach dem Löschen am Automat im Zuge der nächsten Synchronisation auch vom VitalControl gelöscht werden. Nur so sammeln sich im Lauf der Zeit keine Tiere auf dem VitalControl an.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
            Ist diese Option aktiviert und zugleich auch die Option Checkbox <span style="font-size: 140%">➃</span> <span style="font-style: italic;">Auf Automat neu anlegen</span> aktiviert, so werden keine Tiere gelöscht, die jünger sind als im Ziffernfeld <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">Keine Löschung von Tieren jünger als</span> angegeben.
        </div>
    </div>

    <span style="font-weight: bold">Deaktivieren</span> Sie diese Option:

    - wenn Sie auch nach Abschluss der Milchperiode noch Daten für die Tiere erfassen möchten, etwa im Zuge einer Wiegung,
    - wenn Sie bereit sind, die Tiere selbst manuell vom VitalControl zu löschen.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
            Wenn Sie diese Option deaktivieren, müssen Sie auf dem VitalControl für abgetränkte Tiere den Transponder lösen, sobald dem abgetränkten Tier das Halsband abgenommen und einem anderen, jüngeren Kalb umgehängt wurde. Unterbleibt dieses Lösen des Transponders, so werden dem abgetränkten Tier fälschlicherweise Datensätze des jüngeren Tieres hinzugefügt, welches jetzt das ehemalige Halsband des abgetränkten Tieres trägt.
        </div>
    </div>

### Synchronisation VitalControl <span style="font-size: 150%">🠲</span> Automat

Auf der rechten Seite des Bildschirms befindet sich eine Checkbox sowie zwei Einstellungsfelder:

* Checkbox <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span> <span style="font-style: italic;">Auf Automat neu anlegen</span>.

    - Diese Option regelt, ob auf dem VitalControl vorhandene Tiere, die dem Automaten unbekannt sind, im Zuge der nächsten Synchronisation auf dem Automaten neu angelegt werden. Im Standard ist diese Option deaktiviert.
    
    <span style="font-weight: bold">Deaktivieren</span> Sie diese Option bzw. lassen Sie sie deaktiviert:

    - wenn Sie Ihr VitalControl-Gerät an mehreren Automaten gleichzeitig nutzen,
    - wenn Sie Ihre Tiere direkt an den Automaten bringen, ohne Sie vorher mit dem VitalControl zu erfassen. Ihre Tiere werden dann bei der Registrierung im Zuge der erstmaligen Fütterung am Automaten automatisch neu angelegt.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
            Wird das VitalControl an mehreren Automaten genutzt und ist diese Option gesetzt, so werden im Zuge der Synchronisation ungewollt Tiere von einem Automaten auf den anderen übertragen.
        </div>
    </div>

    <span style="font-weight: bold">Aktivieren</span> Sie diese Option:

    - wenn die Ersterfassung ihrer neugeborenen Tiere mit dem VitalControl bereits vor der ersten Fütterung am Automaten erfolgt.
    - wenn Sie ihre zugekauften Tiere durch Einscannen ihrer Tierpässe auf dem VitalControl erfassen.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
            Aktivieren Sie diese Option nur, wenn sie das VitalControl an einem einzigen Automaten nutzen! Wollen Sie bei gesetzter Option die Synchronisation mit mehreren Automaten durchführen, so müssen Sie pro Automat jeweils ein separates VitalControl-Gerät nutzen.
        </div>
    </div>

* Dropdown-Menü <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">Futterkurve für importierte Tiere</span>.

    In diesem Dropdown-Menü können Sie diejenige Futterkurve auswählen, die Tieren zugewiesen wird, welche im Zuge der Synchronisation neu auf dem Automaten angelegt werden.

* Ziffernfeld <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">Kein Import von Tieren älter als</span>.

    In diesem Ziffernfeld können Sie das Mindestalter in Tagen angeben, ab welchem Tiere im Zuge der Synchronisation neu auf dem Automaten angelegt werden. Tiere, die jünger sind als das angegebene Mindestalter, werden im Zuge der Synchronisation nicht neu angelegt.

Durch das Drücken der Schaltfläche <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> gelangen sie zu [Seite 2](#settings-menu-vitalcontrol-page-2) des Einstellungsmenüs `VitalControl`.

## Einstellungsmenü `VitalControl` - Seite 2 {#settings-menu-vitalcontrol-page-2}

### Umgang mit Datenkonflikten bei der Synchronisation

Bei der Synchronisation der Daten zwischen Automat und VitalControl kann es zu Datenkonflikten kommen. Von einem Datenkonflikt spricht man immer dann, wenn sich die Daten, etwa zur <span style="font-style: italic;">Tiernummer</span> <span style="font-size: 140%">➁</span>, auf dem VitalControl und auf dem Automaten widersprechen. Auf dieser Seite 2 des Einstellungsmenüs können Sie festlegen, ob und wie Datenkonflikte im Zuge der Synchronisation aufgelöst werden. Hierbei gibt es drei Möglichkeiten:

* Die Automatendaten erhalten Vorrang, die Daten auf dem VitalControl-Gerät werden mit denjenigen des Automaten überschrieben.\
  Aktivieren Sie diese Option, indem Sie den Radiobutton in der linken Spalte – unterhalb des Automatensymbols <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span> – auswählen.

* Die Daten des VitalControl erhalten Vorrang, die Daten auf dem Automaten werden mit denjenigen des VitalControl-Geräts überschrieben.\
  Aktivieren Sie diese Option, indem Sie den Radiobutton in der mittleren Spalte – unterhalb des VitalControl-Geräts <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span> – auswählen.

* Es werden keine Änderungen vorgenommen, sowohl die Daten des Automaten als auch des VitalControl-Geräts bleiben unverändert.\
  Aktivieren Sie diese Option, indem Sie den Radiobutton in der rechten Spalte <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span> auswählen.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Beispiel</span><br>
            Nachdem Sie eine Kälberpartie bezogen haben, legen Sie diese Tiere durch Scan aller Tierpässe neu auf dem VitalControl an. Die Tiernummern dieser Tiere auf dem VitalControl sind dann – je nach <a href="/docs/einstellungen/tiere-neu-anlegen/#digit-of-the-new-id">Geräteeinstellung</a> – die letzten 3-5 Ziffern des Tieres auf dem Tierpass. Danach legen Sie den zugekauften Tieren Halsbänder mit Urban-Transpondern um und versorgen diese am Automaten. Im Zuge des erstmaligen Stationsbesuchs werden die Tiere anhand ihres Transponders registriert und neu am Automaten angelegt. Die Tiernummern dieser neuen Tiere auf dem Automaten sind jedoch von der Transpondernummer abgeleitet oder entsprechen der Tiernummer, die zu diesem Transponder im Automaten hinterlegt ist. Somit wurde jetzt auf dem VitalControl-Gerät und auf dem Automaten für ein und dasselbe Tier jeweils eine unterschiedliche Tiernummer vergeben, ein Datenkonflikt liegt vor. Anhand der Radiobuttons für die <span style="font-style: italic;">Tiernummer</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span> können sie jetzt im Einstellungsmenü  festlegen, welche der beiden parallel vergebenen Tiernummern Vorrang erhält und welche im Zuge der Synchronisation gelöscht wird.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Einstellungsmenü VitalControl: Seite 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Einstellungen VitalControl (2)" />
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
    Screenshot 4: Einstellungsmenü <span style="font-style: italic;">VitalControl</span>, Seite 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
        Aus internen Gründen können aktuell nur Änderungen für die <span style="font-style: italic;">Tiernummer</span> <span style="font-size: 140%">➁</span> vorgenommen werden. In späteren Firmwareversionen werden Sie auch Änderungen bezüglich der <span style="font-style: italic;">Ohrmarkennummer</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> sowie des <span style="font-style: italic;">Geburtsdatums</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span> vornehmen können.
    </div>
</div>

Durch das Drücken der <span style="font-style: italic;">Schaltfläche</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> gelangen sie zurück zu [Seite 1](#settings-menu-vitalcontrol-page-1) des Einstellungsmenüs `VitalControl`.
