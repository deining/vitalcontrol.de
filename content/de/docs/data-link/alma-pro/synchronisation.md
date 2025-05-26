---
title: Datenabgleich zwischen VitalControl und Alma Pro
linkTitle: Synchronisation
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Gleichen Sie den Tierbestand des VitalControls mit dem Tierbestand des Automaten ab und überspielen Sie mit dem VitalControl erfasste Messwerte für die vereinfachte Visualisierung und Auswertung an den Automaten.
slug: synchronisation
weight: 20
Kategorien: [Datenaustausch, VitalControl, Alma Pro]
translationKey: alma-pro/synchronisation
aliases: /vc/sync/de
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Zur Durchführung einer Synchronisation zwischen dem Tränkeautomaten Alma Pro und dem VitalControl-Gerät gehen Sie wie folgt vor:

### USB-Anschluss öffnen

1. Lösen Sie mittels eines kleinen Schraubendrehers die Sicherungsschraube an der Klappe des USB-Ports und klappen Sie diese nach unten:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="USB-Anschluss öffnen" title="USB-Anschluss öffnen" /></a>
        <figcaption class="figure-caption fs-6">Abbildung 1: Sicherungsklappe des USB-Anschlusses öffnen</figcaption>
    </figure>

### VitalControl anschließen

2. Schalten Sie das VitalControl-Gerät durch Drücken der mittleren oberen `An/Aus` Taste &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="On/Off Taste" />&nbsp; ein.

2. Verbinden Sie mithilfe des mitgelieferten USB-Kabels die USB-C Buchse des VitalControl-Geräts <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Umrandete Ziffer 1" title="Ziffer 1" /> mit der USB-A Buchse des Touchscreens <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Umrandete Ziffer 2" title="Ziffer 2" />.

    <figure class="figure" style="margin-top: 10px;">
        <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="900" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="VitalControl mit Alma Pro verbinden" title="VitalControl mit Alma Pro verbinden" /></a>
        <figcaption class="figure-caption fs-6">Abbildung 2: VitalControl mit Alma Pro verbinden</figcaption>
    </figure>

### Synchronisation durchführen

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
            Um die Synchronisation des VitalControl-Geräts starten zu können, müssen Sie in der Benutzerrolle <span style="font-family: monospace; font-size: 90%;">Betriebsleiter</span> am Automaten angemeldet sein. Andernfalls ist die Schaltfläche <span style="font-family: monospace; font-size: 90%;">Synchronisieren</a> im <a href="#synchronise-vc-ap" >Synchronisationsmenü</a> deaktiviert.
        </div>
</div>

4. Klicken Sie in der linken Seitenliste des Touch-Terminals auf die zweitoberste Schaltfläche <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Automatenmenü" title="Automatenmenü"/> `Automat` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Ziffer 1" title="Ziffer 1" />. Sollten Sie sich im Hauptmenü befinden, wo keine Seitenleiste sichtbar ist, drücken sie die Schaltfläche &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Automatenmenü" title="Automatenmenü"/> <span style="font-family: monospace; font-size: 90%;">Automat</span>, um das Automatenmenü aufzurufen.

1. In der rechten Seitenleiste des Touchscreen-Terminal wird jetzt unterhalb der Symbol(e) für die/den angeschlossenen Automat(en) das mit <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Umrandete Ziffer 2" title="Ziffer 2" /> bezifferte Symbol <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl-Gerät" title="VitalControl"/> für das `VitalControl`-Gerät angezeigt. Klicken Sie auf dieses Symbol.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
            Sollte das Symbol <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl-Gerät" title="VitalControl"/> für das <span style="font-family: monospace; font-size: 90%;">VitalControl</span>-Gerät in der rechten Seitenleiste <span style="font-weight: bold;">nicht</span> angezeigt werden, so ist das Gerät in den Einstellungen noch deaktiviert. Folgen Sie in diesem Fall den Anweisungen zur einmaligen <a href="../konfiguration#activation-vitalcontrol" >Aktivierung</a> des Geräts.
        </div>
    </div>

1. Es wird jetzt der Synchronisationsbildschirm aufgerufen. Klicken Sie dort auf die unten mittig angeordnete Schaltfläche <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="Umrandete Ziffer 3" title="Ziffer 3" /> `Synchronisieren` um die Synchronisation mit dem VitalControl-Gerät zu starten.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronisation VitalControl mit Alma Pro" title="Synchronisation VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Abbildung 3: Synchronisation VitalControl mit Tränkeautomat Alma Pro</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
            Falls viele Tiere übertragen werden müssen, kann die Synchronisation eine gewisse Zeitspanne in Anspruch nehmen. Den Synchronisationsfortschritt können Sie dem Display des VitalControl-Geräts entnehmen.<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/tierimport/datenuebertragung.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Synchronisation VitalControl Alma Pro, Fortschrittsanzeige" title="Fortschritt Synchronisation" /></a>
                <figcaption class="figure-caption fs-6">Abbildung 4: Synchronisation VitalControl Alma Pro, Fortschrittsanzeige</figcaption>
            </figure>
        </div>
    </div>

### USB-Anschluss verschließen

7. Ziehen Sie nach der erfolgreichen Synchronisation das USB-Kabel wieder vom USB-Anschluss des Touchscreens ab. Klappen Sie die Schutzklappe des Anschlusses wieder nach oben und sichern diese, indem Sie die Sicherungsschraube mittels eines kleinen Schraubendrehers festziehen.

    <figure class="figure" style="margin-top: 10px;">
        <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="USB-Anschluss verschließen" title="USB-Anschluss verschließen" /></a>
        <figcaption class="figure-caption fs-6">Abbildung 5: USB-Anschluss verschließen</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Hinweis</span><br>
            Achten Sie unbedingt darauf, nach jeder Synchronisation die Klappe des USB-Anschlusses wieder zu verschließen, um das Eindringen von Feuchtigkeit in den Anschluss zu verhindern und diesen vor der aggressiven Stallluft zu schützen!<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Zwingender Verschluss des UBS-Anschlusses" title="UBS-Anschluss zwingend verschließen" /></a>
                <figcaption class="figure-caption fs-6">Abbildung 6: Zwingender Verschluss des UBS-Anschlusses</figcaption>
            </figure>
        </div>
    </div>
