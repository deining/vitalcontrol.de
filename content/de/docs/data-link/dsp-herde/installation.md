---
title: Einrichtung der Technikkopplung
linkTitle: Einrichtung
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Richten Sie einmalig die Technikkopplung zur Datensynchronisation zwischen der Herde Software und dem VitalControl-Gerät ein.
weight: 10
Kategorien: [DSP Herde, Technikkopplung]
translationKey: DSPherde/installation
---
Vor dem erstmaligen [Datenaustausch](../datentausch/) muss einmalig die Technikkopplung zum VitalControl-Gerät angelegt und eingerichtet werden.

> [!NOTE] Achtung
> Überprüfen Sie  vor der Einrichtung der Technikkopplung, ob die Software `VCSynchronizer` auf ihrem PC installiert ist, diese Software wird zwingend zum Datenaustausch benötigt.  Öffnen Sie dazu im Windows Startmenü die Liste ihrer Anwendungen und überprüfen Sie, ob Sie dort den Eintrag `Urban VitalControl` finden können. Falls nicht, [installieren](../../vcsynchronizer/installation/) sie die Software `VCSynchronizer` auf ihren PC.

{{% alert title="Achtung" %}}
Überprüfen Sie  vor der Einrichtung der Technikkopplung, ob die Software `VCSynchronizer` auf ihrem PC installiert ist, diese Software wird zwingend zum Datenaustausch benötigt.  Öffnen Sie dazu im Windows Startmenü die Liste ihrer Anwendungen und überprüfen Sie, ob Sie dort den Eintrag `Urban VitalControl` finden können. Falls nicht, [installieren](../../vcsynchronizer/installation/) sie die Software `VCSynchronizer` auf ihren PC.
{{% /alert %}}

Zur Einrichtung der Kopplung selbst gehen Sie wie folgt vor:

## Technikkopplung anlegen

1. Öffnen Sie in der Herde-Software das Einstellungsmenü. Je nach Konfiguration ihrer Benutzeroberfläche erreichen Sie den entsprechenden Menüpunkt `Einstellungen` im Hauptmenü (Menüpunkt _Organisation_), in der Seitenleiste oder in der Werkzeugleiste (horizontal oder vertikal).

   ![Herde Software: Aufruf des Einstellungsmenüs](../screenshots/einstellungen.png "Herde: Aufruf Einstellungen")

1. Es öffnet sich ein Pop-up betitelt `Einstellungen`, in dessen linker Seitenleiste zahlreiche Einstellungskategorien aufgelistet sind. Öffnen Sie die Kategorie `Service` <span style="font-size: 140%">➊</span>, und wählen sie die Unterkategorie `Technik` <span style="font-size: 140%">➋</span> aus:

1. In der Kopfzeile des rechten Hauptbereichs erscheint jetzt ein Dropdown im welchem die aktuell bereits eingerichteten Technikkopplungen aufgeführt sind. Rechts daneben wird die Anzahl der vorhandenen Kopplungen angegeben. Klicken Sie auf die Schaltfläche ![Herde Software: Neue Technikkopplung anlegen](/icons/new.png "Herde: Technikkopplung anlegen") `Neue Kopplung anlegen` <span style="font-size: 140%">➌</span>.

   ![Herde Software: Einstellungen Technik aufrufen](../screenshots/einstellungen-technik.png "Herde: Einstellungen Technik")

1. Es öffnet sich ein weiteres Popup-Fenster. Geben Sie dort als **Name der Kopplung** `VitalControl` und als **Techniktyp** `Urban VitalControl (Gen 2)`an und klicken Sie anschließend die Schaltfläche `Übernehmen`.

   ![Herde Software: Neue Technikkopplung VitalControl](../screenshots/neue-kopplung.png "Neue Technikkopplung VitalControl").

   Die Technikkopplung ist jetzt angelegt und muss in den nächsten Schritten konfiguriert werden.

## Grundeinstellungen konfigurieren

Initial ist im angezeigten Bildschirm der Reiter `Grundeinstellungen` ausgewählt, wie die untenstehende Abbildung zeigt. Nehmen Sie dort in den Kategorien `Externes Programm` <span style="font-size: 140%">➊</span>, `Tierdaten` <span style="font-size: 140%">➋</span>, `Orte` <span style="font-size: 140%">➌</span> und Abgang <span style="font-size: 140%">➍</span> Anpassungen gemäß ihren betriebsspezifischen Gegebenheiten vor.

   ![Herde Software: Konfiguration Technikkopplung](../screenshots/grundeinstellungen.png "Technikkopplung: Grundeinstellungen").

### Kategorie `Externes Programm` <span style="font-size: 140%">➊</span>

Für die Durchführung des Datenaustauschs zwischen VitalControl und Herde Plus wird als externes Programm die Basissoftware [VitalControl Synchronizer](../../vcsynchronizer) verwendet. Für die korrekte Funktion dieses Programms müssen in der Kategorie `Externes Programm` <span style="font-size: 140%">➊</span> einige Anpassungen vorgenommen werden:

- **Rechnername Kopplung**:  
  In der Voreinstellung ist dieses Feld leer, es empfiehlt sich, hier den eigenen Rechnernamen einzutragen. Drücken Sie hierzu auf das Symbol `Pfeil nach unten` ![Herde Software: Neue Technikkopplung anlegen](/icons/arrow-down.png "Herde: Technikkopplung anlegen") am rechten Ende des Drop-Down Feldes. Ihr Rechnername wird jetzt ermittelt und zur Auswahl vorgeschlagen. Sofern in diesem Feld ihr Rechnername eingetragen ist, kann der Datenaustausch nur noch von ihrem Rechner aus gestartet werden, die Durchführung des Datenaustauschs wird also an ihren Rechner gebunden.

- **Ausführen in Pfad**:  
  Hier bitte als Wert `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` eintragen, dies ist der absolute Pfad zum Programm `VitalControl Synchronizer` bzw. zur Datei `vcsynchronizer.exe`. Sollte bei der [Installation des VCSynchronizers](../../vcsynchronizer/installation) das Zielverzeichnis für das Programm geändert worden sein, bitte hier das gewählte Zielverzeichnis angeben.

- **Herde 🡒 Technik**:  
  Hier bitte als Wert `vc_imp.bat` eintragen. Diese Batchdatei gibt den Ablauf des Datenimports vor.

- **Technik 🡒  Herde**:  
  Hier bitte als Wert `vc_exp.bat` eintragen. Diese Batchdatei gibt den Ablauf des Datenexports vor.

### Kategorie `Tierdaten` <span style="font-size: 140%">➋</span>

Für die korrekte Funktion des Datenaustauschs müssen in der Kategorie `Tierdaten` <span style="font-size: 140%">➋</span> weitere Anpassungen vorgenommen werden:

- **Tier-Nummer**:  
  Diese Einstellung legt fest, welche ID die Tiere auf dem VitalControl zur Anzeige erhalten:
  - Sofern Sie Stallnummern an ihre Tiere vergeben haben, sollten Sie hier den Wert `Stallnummer` auswählen: die angezeigte ID eines Tieres auf dem VitalControl wird dann jeweils der ihnen bekannten Stallnummer entsprechen.
  - Falls Sie -wie etwa im Mastbereich üblich- ihren Tieren **keine** Stallnummern zuweisen, dann sollten Sie hier den Wert `Ohr-Nr. (5 Stellen)` auswählen. Die angezeigte ID eines Tieres auf dem VitalControl wird dann den letzten 5 Ziffern der auf der gelben Ohrmarke aufgedruckten Nummer entsprechen.

<br>

- **Sender-Nr.**:  
  Diese Einstellung legt die beim RFID-Scan erwartete Nummer für ein Tier fest:  
  - Falls Sie ihren Tieren ein Halsband mit einem Transponder anlegen oder ihren Tieren einen Ohrtransponder einziehen ‒jeweils etwa zur Identifikation am Tränkeautomaten‒, sollten Sie hier den Wert `Transponder` auswählen.
  - Falls ihre Tiere bzw. Kälber elektronische Lebendohrmarken tragen, auf denen die offizielle 15-stellige Nummer ihres Tieres kodiert sind und die ein Leben lang zur Identifikation des Tiers dienen werden, sollten Sie hier den Wert `Ohr-Nr. (15 Stellen)` auswählen.

<br>

- **Mindestalter für Übergabe**:  
  Ist hier der Wert `0` eintragen, so werden **alle Tiere** an das VitalControl-Gerät übertragen, unabhängig von ihrem Alter. Ein Wert größer `0` legt das Mindestalter (in Tagen) für die zu übertragenden Tiere fest. Sollen etwa **nur Kühe** auf das Gerät übertragen werden, so ist hier ein Wert von 600 Tagen (= 20 Monate) als Mindestalter einzutragen.

### Kategorie `Orte` <span style="font-size: 140%">➌</span>

Hier können Sie Tiere an bestimmten Orten von der Übertragung ausschließen. Entfernen Sie dazu das Häkchen von denjenigen Ort(en), für die Sie **keine** Übertragung der dort aufgestallten Tiere wünschen.

### Kategorie `Abgang` <span style="font-size: 140%">➍</span>

Setzen Sie hier das Häkchen bei der Option `In Herde abgegangen`. Dadurch legen Sie fest, dass abgegangene Tiere im Zuge der Synchronisation auch vom VitalControl gelöscht werden.
Setzen Sie bei der Option `In Herde nicht vorhanden` ebenfalls das Häkchen. Dadurch legen Sie fest, dass Tiere auf dem VitalControl, die der `Herde` Software nicht bekannt sind, im Zuge der Synchronisation vom VitalControl gelöscht werden.

## Technikspezifische Einstellungen konfigurieren

Klicken Sie als nächstes auf den Reiter `Technikspezifische Einstellungen`, um dort Angaben zum Umfang des Datenaustauschs zu machen. Es empfiehlt sich, alle dort aufgeführten Kästchen anzuhaken, einzig das Feld `Importdatei nach Verarbeitung sichern` sollte nur dann ausgewählt werden, wenn es zu Diagnosezwecken vom Service empfohlen wird.

- **Höchstalter für Übergabe**:  
  Ist hier der Wert `0` eintragen, so werden **alle Tiere** an das VitalControl-Gerät übertragen, unabhängig von ihrem Alter. Ein Wert größer `0` legt das Höchstalter (in Tagen) für die zu übertragenden Tiere fest. Sollen etwa **nur Kälber** auf das Gerät übertragen werden, so ist hier ein Wert von 90 Tagen (= 3 Monate) als Höchstalter einzutragen.

   ![Herde Software: Konfiguration Technikkopplung](../screenshots/technikspezifische-einstellungen.png "Technikkopplung: Spezifische Einstellungen").

## Technikkopplung speichern

Drücken Sie auf die Taste `Speichern (F2)`, nachdem Sie die Konfiguration der Technikkopplung vorgenommen haben. Damit ist die Technikkopplung für das VitalControl gespeichert und einsatzbereit.  
Führen Sie nun sofort einen [Datenaustausch](../datentausch/) durch, um zu überprüfen, ob die von Ihnen vorgenommenen Einstellungen gültig und zielführend sind.
