---
title: Abmeldung von Tieren vom Betrieb
linkTitle: Abmeldung
date: 2025-02-22T13:07:52+01:00
draft: false
weight: 30
type: docs
slug: abgang
translationKey: massenmeldung/abgang
description: >
  Nutzen Sie die folgende Anleitung, um im HI-Tier Portal Tiere von ihrem Betrieb abzumelden.
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

{{< tabpane persist="header" text=true >}}
  {{% tab header="**Abzumeldende Tiere einlesen aus**:" disabled=true /%}}
  {{% tab header="Exportdatei von VitalControl" %}}
1. Klicken Sie auf die untenstehende Schaltfläche, um die Anmeldeseite bei HI-Tier aufzurufen. Melden Sie sich dort mit ihrer Betriebsnummer (<a href="#screenshot-1a">Screenshot 1</a>, Ziffer <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Ziffer 1" />) und ihrem Passwort <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Ziffer 2" /> an.

    <a href="https://www.hi-tier.de/hitCom/login.asp" role="button" class="btn btn-primary" target="_blank">Zu HI-Tier: _Anmeldeseite_</a>

    <a name="screenshot-1a"></a>
    <figure class="figure" style="margin-top: 20px">
        <img src="../screenshots/anmeldung.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Anmeldebildschirm HI-Tier" title="Anmeldung bei HI-Tier" />
        <figcaption class="figure-caption fs-6">Screenshot 1: Anmeldung beim HI-Tier Portal</figcaption>
    </figure>

1. Klicken Sie auf die untenstehende Schaltfläche, um bei HI-Tier direkt die Bildschirmseite zum Abmelden von Tieren von ihrem Betrieb (per Massenmeldung) aufzurufen. Sollte dieser Link für Sie nicht funktionieren, so folgen sie den untenstehenden [Anweisungen](#call-screen-via-links), um die Bildschirmseite manuell linkgestützt aufzurufen.

    <a href="https://www.hi-tier.de/hitCom/l_uploadabzu.asp?M=WEI" role="button" class="btn btn-primary" target="_blank">Zu HI-Tier: _Tiere vom Betrieb abmelden_</a>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="45px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Tipp:">
      <use xlink:href="#check-circle-fill"/>
    </svg>
    <div>
      <span class="text-primary fs-3 fw-semibold">Tipp</span><br>
      Setzen Sie sich in ihrem Browser ein Lesezeichen auf diese Seite, damit Sie sie beim nächsten Meldevorgang leichter wiederfinden können.
    </div>
    </div>

1. Geben Sie in das Textfeld `Abgangsbetrieb` (<a href="#screenshot-2a">Screenshot 2</a>, Ziffer <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Ziffer 1" />) die zwölfstellige Betriebsnummer desjenigen Betriebs ein, von dem die Tiere abgehen.

1. Lassen Sie das Textfeld `Zugangsbetrieb` <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Ziffer 2" /> leer, da sie keine Tiere als Zugänge anmelden wollen.

1. Geben Sie in das Textfeld `Datum` <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="Circled digit 3" title="Ziffer 3" /> das Abmeldedatum (Format: `TT.MM.JJJJ`) für ihre abgehenden Tiere an.

1. Stecken Sie in die USB-Buchse ihres Computers denjenigen USB-Stick an, auf den Sie seinerzeit beim Zugang der Tiere die Exportdatei gespeichert haben.

1. Wählen Sie über den Punkt `Ohrmarken-Datei` <img src="/digits/4_negative_circled.svg" width="25" align="middle" alt="Circled digit 4" title="Ziffer 4" /> diese damals erzeugte CSV-Exportdatei aus. Das damalige Zugangsdatum ist Teil des Dateinamens der Exportdatei (z.&nbsp;B `zugang-20-03-2026_09-22.csv`), dies sollte beim Wiederfinden der Datei hilfreich sein. 

    <div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="45px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
      <use xlink:href="#info-fill"/>
    </svg>
    <div>
      <span class="text-primary fs-3 fw-semibold">Hinweis</span><br>
      Die von ihnen auszuwählende Datei wird den Namen <span style="font-style: italic;">zugang-TT-MM-JJJJ-HH-MM.csv</span> tragen. Stören Sie sich nicht an der Namensgebung der Datei! Aus ihren Zugängen sind mittlerweile Abgänge geworden, die entscheidende Information in der Datei, die Ohrmarkennummer des Tieres, hat sich aber nicht geändert! Sollte diese Datei Tiere enthalten, die nicht mehr auf dem Betrieb sind, können Sie diese trotzdem verwenden! Es werden dann zwar Fehler zu fehlgeschlagenen Abmeldungen angezeigt, diese können Sie aber ignorieren.
    </div>
    </div>

1. Klicken Sie auf die Schaltfläche `Einfügen` <img src="/digits/5_negative_circled.svg" width="25" align="middle" alt="Circled digit 5" title="Ziffer 5" />, um die Abmeldung der mittlerweile von ihnen großgezogenen Tiere vorzunehmen.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="45px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
      <use xlink:href="#info-fill"/>
    </svg>
    <div>
      <span class="text-primary fs-3 fw-semibold">Hinweis</span><br>
      Bei einer größeren Anzahl an abzumeldenden Tieren kann der Exportvorgang 30 Sekunden (oder mehr) in Anspruch nehmen. Seien Sie bitte geduldig und warten das Erscheinen der Erfolgsmeldung ab!
    </div>
    </div>

<a name="screenshot-2a"></a>
<figure class="figure" style="margin-top: 10px;">
    <img src="../screenshots/abmeldung/massenabmeldung.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Bildschirmseite Massenabmeldung" title="Massenabmeldung HI-Tier" />
    <figcaption class="figure-caption fs-6">Screenshot 2: Bildschirm <span style="font-style: italic;">Abmeldung von Tieren vom Betrieb (Massenmeldung)</span></figcaption>
</figure>

6. Nach Abschluss der Massenmeldung wird in der unteren Bildschirmhälfte eine Statistik ihres Meldevorgangs angezeigt. In dieser Statistik wird die Anzahl der erfolgreichen Abmeldungen (<a href="#screenshot-3a">Screenshot 3</a>, Ziffer <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Ziffer 1" />) ebenso aufgeführt wie die Anzahl der fehlgeschlagenen Abmeldungen.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="64px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Attention:">
      <use xlink:href="#exclamation-triangle-fill"/>
    </svg>
    <div>
    <span class="text-primary fs-3 fw-semibold">ACHTUNG</span><br>Sollte es bei Ihrer Meldung zu Fehlern gekommen sein, nehmen Sie diese ernst und stellen Sie die aufgetretenen Fehler anhand der gegebenen Hinweise ab!
    </div>
    </div>

<a name="screenshot-3a"></a>
<figure class="figure" style="margin-top: 20px;margin-bottom: 40px;">
    <img src="../screenshots/abmeldung/erfolg-abmeldung.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Erfolgsmeldung Abmeldung" title="Erfolgsmeldung Abmeldung" />
    <figcaption class="figure-caption fs-6">Screenshot 3: Erfolgreiche Ausführung der Abmeldung von ihrem Betrieb</figcaption>
</figure>

Ihre Tiere wurden damit bei HI-Tier erfolgreich von ihrem Betrieb abgemeldet.

## Linkgeführter Aufruf des Bildschirms <span style="font-style: italic;">Abmeldung von Tieren von ihrem Betrieb</span> {#call-screen-via-links}

1. Rufen Sie den Startbildschirm des HI-Tier Portals auf. Dort finden Sie unter der Überschrift `Rinderdatenbank - Abfragen` den Menüpunkt `weitere Abfragen und Funktionen` (<a href="#screenshot-4a">Screenshot 4</a>, Ziffer <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Ziffer 1" />). Klicken Sie auf diesen Menüpunkt.

2.  Sie werden jetzt auf eine neue Seite weitergeleitet, auf der sich ein zweispaltiges Auswahlmenü `Weitere Abfragen und Funktionen` befindet. Klicken Sie in diesem Menü auf den Menüpunkt `Ab- und Zugang` <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Ziffer 2" /> in der linken Spalte. Sie werden jetzt auf die gewünschte Bildschirmseite zur [Massenmeldung](https://www.hi-tier.de/hitCom/l_uploadabzu.asp?M=WEI) weitergeleitet.

<a name="screenshot-4a"></a>
<figure class="figure" style="margin-top: 20px;">
    <img src="../screenshots/ummeldung/aufruf-massenummeldung.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Aufruf Bildschirm Massenabmmeldung" title="Aufruf Massenabmeldung" />
    <figcaption class="figure-caption fs-6">Screenshot 4: Aufruf des Bildschirm <span style="font-style: italic;">Massenabmeldung</span> via Links</figcaption>
</figure>

  {{% /tab %}}
  {{% tab header="HI-Tier Bestandsregister" %}}

1. Klicken Sie auf die untenstehende Schaltfläche, um die Anmeldeseite bei HI-Tier aufzurufen. Melden Sie sich dort mit ihrer Betriebsnummer (<a href="#screenshot-1b">Screenshot 1</a>, Ziffer <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Ziffer 1" />) und ihrem Passwort <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Ziffer 2" /> an.

    <a href="https://www.hi-tier.de/hitCom/login.asp" role="button" class="btn btn-primary" target="_blank">Zu HI-Tier: _Anmeldeseite_</a>

    <a name="screenshot-1b"></a>
    <figure class="figure" style="margin-top: 20px">
        <img src="../screenshots/anmeldung.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Anmeldebildschirm HI-Tier" title="Anmeldung bei HI-Tier" />
        <figcaption class="figure-caption fs-6">Screenshot 1: Anmeldung beim HI-Tier Portal</figcaption>
    </figure>

1. Klicken Sie auf die untenstehende Schaltfläche, um bei HI-Tier direkt die Bildschirmseite zum Abmelden von Tieren bei Auswahl aus dem Bestandsregister aufzurufen. Sollte dieser Link für Sie nicht funktionieren, so folgen sie den untenstehenden [Anweisungen](#call-herd-register-screen-via-links), um die Bildschirmseite manuell linkgestützt aufzurufen.

    <a href="https://www.hi-tier.de/hitCom/bestreg_abzu.asp?M=WEI" role="button" class="btn btn-primary" target="_blank">Zu HI-Tier: _Tiere per Bestandsregister abmelden_</a>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="45px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Tipp:">
      <use xlink:href="#check-circle-fill"/>
    </svg>
    <div>
      <span class="text-primary fs-3 fw-semibold">Tipp</span><br>
      Setzen Sie sich in ihrem Browser ein Lesezeichen auf diese Seite, damit Sie sie beim nächsten Meldevorgang leichter wiederfinden können.
    </div>
    </div>

1. Geben Sie in das Textfeld `Abgangsbetrieb` (<a href="#screenshot-2b">Screenshot 2</a>, Ziffer <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Ziffer 1" />) die zwölfstellige Betriebsnummer desjenigen Betriebs ein, von dem die Tiere abgehen.

1. Lassen Sie das Textfeld `Zugangsbetrieb` <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Ziffer 2" /> leer, da sie keine Tiere als Zugänge anmelden wollen.

1. Geben Sie in das Textfeld `Ab/Zugangsdatum` <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="Circled digit 3" title="Ziffer 3" /> das Abmeldedatum (Format: `TT.MM.JJJJ`) für ihre abgehenden Tiere an.

1. Geben Sie als Selektionskriterium in das Textfeld `Zugang` <img src="/digits/4_negative_circled.svg" width="25" align="middle" alt="Circled digit 4" title="Ziffer 4" /> dasjenige Datum an, an dem die Tiere seinerzeit auf ihrem Betrieb zugegangen sind (Format: `TT.MM.JJJJ`).

1. Klicken Sie auf die Schaltfläche `Anzeigen` <img src="/digits/5_negative_circled.svg" width="25" align="middle" alt="Circled digit 5" title="Ziffer 5" />. Im unteren Bildschirmbereich werden jetzt alle Tiere <img src="/digits/6_negative_circled.svg" width="25" align="middle" alt="Circled digit 6" title="Ziffer 6" /> aufgelistet, die den angegebenen Selektionskriterien entsprechen. Alle Tiere, bei denen jeweils die Checkbox <img src="/digits/7_negative_circled.svg" width="25" align="middle" alt="Circled digit 7" title="Ziffer 7" /> am Beginn der Datenzeile ausgewählt ist, werden bei der noch anzustoßenden Tiermeldung berücksichtigt.

1. Klicken Sie auf die Schaltfläche `Einfügen` <img src="/digits/8_negative_circled.svg" width="25" align="middle" alt="Circled digit 8" title="Ziffer 8" />, um die Massenmeldung der aus dem Bestandsregister aufgelisteten Tiere vorzunehmen.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="45px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
      <use xlink:href="#info-fill"/>
    </svg>
    <div>
      <span class="text-primary fs-3 fw-semibold">Hinweis</span><br>
      Bei einer größeren Anzahl an abzumeldenden Tieren kann der Exportvorgang 30 Sekunden (oder mehr) in Anspruch nehmen. Seien Sie bitte geduldig und warten das Erscheinen der Erfolgsmeldung ab!
    </div>
    </div>

<a name="screenshot-2b"></a>
<figure class="figure" style="margin-top: 10px;">
    <img src="../screenshots/abmeldung/abmeldung-bestandsregister.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Bildschirmseite Abmeldung via Bestandsregister" title="Abmeldung via Bestandsregister" />
    <figcaption class="figure-caption fs-6">Screenshot 2: Bildschirm <span style="font-style: italic;">Abmeldung von Tieren vom Betrieb mittels Bestandsregister</span></figcaption>
</figure>

6. Nach Abschluss der Abmeldung wird in der unteren Bildschirmhälfte Hinweise zum Erfolg ihrer Ummeldung angezeigt. In diesen Hinweisen (<a href="#screenshot-3b">Screenshot 3</a>, Ziffer <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Ziffer 1" />) sind alle erfolgreichen An- und Abmeldungen einzeln aufgeführt. Beim Auftreten von Fehler werden zusätzlich auch die jeweiligen Fehlermeldungen wiedergegeben.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="64px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Attention:">
      <use xlink:href="#exclamation-triangle-fill"/>
    </svg>
    <div>
    <span class="text-primary fs-3 fw-semibold">ACHTUNG</span><br>Sollte es bei Ihrer Abmeldung zu Fehlern gekommen sein, nehmen Sie diese ernst und stellen Sie die aufgetretenen Fehler anhand der gegebenen Hinweise ab!
    </div>
    </div>

<a name="screenshot-3b"></a>
<figure class="figure" style="margin-top: 20px;margin-bottom: 40px;">
    <img src="../screenshots/abmeldung/erfolg-abmeldung-bestandsregister.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Erfolgsmeldung Abmeldung via Bestandsregister" title="Erfolgsmeldung Abmeldung Bestandsregister" />
    <figcaption class="figure-caption fs-6">Screenshot 3: Erfolgreiche Ausführung der Abmeldung via Bestandsregister</figcaption>
</figure>

Ihre Tiere wurden damit bei HI-Tier erfolgreich vom Abgangsbetrieb auf den Zugangsbetrieb umgemeldet.

## Linkgeführter Aufruf des Bildschirms <span style="font-style: italic;">Abmeldung von Tieren via Bestandsregister</span> {#call-herd-register-screen-via-links}

1. Rufen Sie den Startbildschirm des HI-Tier Portals auf. Dort finden Sie unter der Überschrift `Rinderdatenbank - Abfragen` den Menüpunkt `weitere Abfragen und Funktionen` (<a href="#screenshot-4b">Screenshot 4</a>, Ziffer <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Ziffer 1" />). Klicken Sie auf diesen Menüpunkt.

2.  Sie werden jetzt auf eine neue Seite weitergeleitet, auf der sich ein zweispaltiges Auswahlmenü `Weitere Abfragen und Funktionen` befindet. Klicken Sie in diesem Menü auf den Menüpunkt _per Bestandsregister Ab- und Zugang melden_ <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Ziffer 2" /> in der rechten Spalte. Sie werden jetzt auf die gewünschte Bildschirmseite zur [Massenmeldung](https://www.hi-tier.de/hitCom/bestreg_abzu.asp) weitergeleitet.

<a name="screenshot-4b"></a>
<figure class="figure" style="margin-top: 20px;">
    <img src="../screenshots/ummeldung/aufruf-ummeldung-bestandsregister.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Aufruf Bildschirm Massenabmeldung" title="Aufruf Massenabmeldung" />
    <figcaption class="figure-caption fs-6">Screenshot 4: Aufruf des Bildschirm <span style="font-style: italic;">Massenabmeldung</span> via Links</figcaption>
</figure>

  {{% /tab %}}
{{< /tabpane >}}

<div style="max-width: 80%; margin-top: 25px;">
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <div class="d-grid gap-2">
        <a class="text-start btn btn-lg btn-outline-primary" role="button"  href="/fresser/erzeugung-csv/"><span class="fs-6">Vorherige</span><br><span class="fs-4 fw-semibold">« Erzeugung CSV-Datei</span></a>
      </div>
    </div>
    <div class="col">
      <div class="d-none gap-2">
        <a class="btn btn-lg btn-outline-primary text-end" role="button" href="#"><span class="fs-6">Nächste</span><br><span class="fs-4 fw-semibold">Erzeugung CSV-Datei »</span></a>
      </div>
    </div>
  </div>
</div>
<div>
