---
title: "Einstellungen zur Tierdatenerfassung"
linkTitle: "Tierdatenerfassung"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: erfassung-tierdaten
description: >
 Hier hinterlegen Sie relevante Einstellungen für die Tierdatenerfassung.
Kategorien: [Einstellungen]
Tags: [Einstellungen, Einheiten]
translationKey: settings/data-acquisition
maphilight: true
---
## Übersicht {#overview}
 
Die nachfolgende Grafik listet die verfügbaren Einstellungen zur Tierdatenerfassung auf:

<img src="../bilder/tierdatenerfassung.png" alt="Tierdatenerfassung" title="Tierdatenerfassung" usemap="#workmap-uebersicht" class="maphilight" />

<map name="workmap-uebersicht">
  <area shape="rect" coords="3,40,237,80" alt="Gewichtserfassung" title="Untermenü: Einstellungen zur Gewichtserfassung&#10;Mausklick: zur Dokumentation" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,237,160" alt="Modus Tierbewertung" title="Stellen Sie den Modus der Tierbewertung ein&#10;Mausklick: zur Dokumentation" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,237,240" alt="Länge Kontrollperiode Frischmelker" title="Legen Sie die Länge der Kontrollperiode für Frischmelker fest&#10;Mausklick: zur Dokumentation" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Zurück" title="Springen Sie eine Ebene zurück" href="/docs/einstellungen/">
</map>

{{% alert title="Hinweis" %}}
Bewegen Sie den Mauszeiger über eine Zeile in der obigen Grafik und lassen ihn kurz ruhen. Im einem Tooltip werden ihnen jetzt Infos zur jeweiligen Einstellung präsentiert. Klicken Sie auf eine der Zeilen, so werden Sie zu einer Beschreibung der jeweiligen Einstellung weitergeleitet.
{{% /alert %}}

## Einstellungen zur Gewichtserfassung {#settings-weight-recording}

Die nachfolgende Grafik listet die verfügbaren Einstellungen zur Gewichtserfassung auf:

<img src="../bilder/gewichtserfassung.png" alt="Menüpunkte Einstellungen Gewichtserfassung" title="Einstellungen Gewichtserfassung" usemap="#workmap-gewicht" class="maphilight" />

<map name="workmap-gewicht">
  <area shape="rect" coords="1,40,230,200" alt="Schwellenwerte Zunahmen" title="Legen Sie die bei der Bewertung der Zunahmen genutzten Schwellenwerte fest&#10;Mausklick: zur Dokumentation" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Geburtsgewicht" title="Legen Sie das beim Anlegen neuer Tiere genutzte Geburtsgewicht fest&#10;Mausklick: zur Dokumentation" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Mittlere tägliche Zunahme" title="Legen Sie zur Gewichtsschätzung genutzten mittleren täglichen Zunahmen fest&#10;Mausklick: zur Dokumentation" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Genauigkeit Gewichtserfassung" title="Legen Sie die Genauigkeit der Gewichtserfassung fest&#10;Mausklick: zur Dokumentation" href="#precision-of-weight-recording">
</map>

### Bewertung der täglichen Zunahmen: Schwellenwerte {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Erläuterung" %}}
Das rote Feld zeigt den Bereich "kritische zu niedrige Gewichtszunahme". Das gelbe Feld zeigt den Bereich "suboptimale Gewichtszunahme".
{{% /alert %}}

Um die Schwellenwerte für die Bewertung der täglichen Zunahme anzupassen gehen Sie wie folgt vor:

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen` und drücken Sie die Taste `OK`.

2. Es öffnet sich ein Untermenü, in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽  um `Tierdatenerfassung` auszuwählen. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein weiteres Untermenü in dem in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽ um zwischen den Einstellungsfeldern `Gewichtserfassung`, `Tierbewertung`, und `Kontrolle Frischmelker für` auswählen können. Wählen Sie `Gewichtserfassung` und bestätigen Sie mit `OK`.

4. Das Einstellungsfeld `Tägliche Zunahmen` ist automatisch ausgewählt. Nutzen Sie die Pfeiltasten ◁ ▷ um die gewünschte Tierart auszuwählen. Bestätigen Sie mit `OK`. Alternativ können Sie das Stiftsymbol mit der Taste <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Bearbeiten" /> `F3` verwenden um direkt zur Bearbeitung des roten und gelben Bereiches zu springen.

5. Nutzen Sie die Pfeiltasten △ ▽ um im roten und gelben Bereich die gewünschte "größer gleich" g/Tag Zunahme auszuwählen. Nutzen Sie die Tasten `F2`/`F3` 🡄 🡆 oder die Pfeiltasten ◁ ▷ um zwischen dem roten und dem gelben Bereich zu wählen.

6. Sobald Sie die gewünschte "größer gleich" g/Tag Zunahme festgelegt haben, nutzen Sie die `F1` Taste <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Zurück" />&nbsp; oder bestätigen Sie mit `OK` um zurück auf `Tägliche Zunahmen` zu springen.

    ![VitalControl: Menüfolge Einstellung Schwellenwerte tägliche Zunahme](../bilder/schwellenwertebewertungzunahmen.png "Schwellenwerte tägliche Zunahmen")

### Geburtsgewicht {#birth-weight}
 
Das Gerät verwendet das hier in den Einstellungen hinterlegte Geburtsgewicht als Vorgabewert beim Anlegen neuer Tiere. Um ggf. das individuelle Geburtsgewicht eines neu geborenen Tieres schneller auswählen zu können, besteht die Möglichkeit, diesen Vorgabewert betriebsindividuell anzupassen. Für diese Anpassung des Wert für das `Geburtsgewicht` gehen Sie wie folgt vor:

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen` und drücken Sie die Taste `OK`.

2. Es öffnet sich ein Untermenü, in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽  um `Tierdatenerfassung` auszuwählen. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein weiteres Untermenü in dem in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽ um zwischen den Einstellungsfeldern `Gewichtserfassung`, `Tierbewertung`, und `Kontrolle Frischmelker für` auswählen können. Wählen Sie `Gewichtserfassung` und bestätigen Sie mit `OK`.

4. Nutzen Sie die Pfeiltasten △ ▽ um das Einstellungsfeld `Geburtsgewicht` auszuwählen und nutzen Sie die Pfeiltasten ◁ ▷ um das gewünschte Geburtsgewicht einzustellen. Das Gerät verwendet das hier definierte Geburtsgewicht nun als Standard beim Anlegen neuer Tiere. 

    ![VitalControl: Menüfolge Einstellung Tierdaten Geburtsgewicht](../bilder/geburtsgewicht.png "Geburtsgewicht einstellen")

{{% alert title="Warnung" color="warning" %}}
Beim Vorgabewert für das Geburtsgewicht handelt es sich nur um einen Näherungswert, welcher beim Anlegen eines neuen Tieres individuell angepasst werden muss.
Wenn Sie diese Anpassung nicht vornehmen wollen oder wenn Sie Tiere automatisch [im Hintergrund](../tiere-neu-anlegen/#auto-registration) anlegen, sollte beim Neuanlegen eines Tieres kein Geburtsgewicht abgefragt bzw. abgespeichert werden. Dies kann in den Einstellungen zum [Tiere neu anlegen](../tiere-neu-anlegen/#set-recorded-weights) vereinbart werden.
{{% /alert %}}

{{% alert title="Standardwerte Geburtsgewicht:" %}}

| Tierart                        |  Lamm          | Kalb          |
|--------------------------------|----------------|---------------| 
| Standardwert *Geburtsgewicht*: | 4 kg           | 40 kg         |
| Wertebereich:                  | 1,0 bis 99 kg  | 1,0 bis 99 kg |
{{% /alert %}}

### Mittlere tägliche Zunahme {#average-daily-weight-gain}

{{% alert title="Erläuterung" %}}
Bei der Aktion [Wiegung](../../aktionen/wiegung/) wird anhand des Tieralters und der hier in den Einstallungen definierten täglichen Zunahme ein ungefähres Tiergewicht für das zu wiegende Tier vorgeschlagen. Sollte der vorgeschlagene Gewichtswert bei der Mehrzahl der zu wiegenden Tiere zu niedrig oder zu hoch sein, sollten Sie den definierten Wert nach unten bzw. nach oben anpassen, um die manuelle Einstellung des Gewichtswerts mit den Pfeiltasten abzukürzen.
{{% /alert %}}

Um die für den Gewichtsvorschlag genutzte `mittlere tägliche Zunahme` auf Ihrem Gerät festzulegen gehen Sie wie folgt vor:

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen` und drücken Sie die Taste `OK`.

2. Es öffnet sich ein Untermenü, in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽  um `Tierdatenerfassung` auszuwählen. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein weiteres Untermenü in dem in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽ um zwischen den Einstellungsfeldern `Gewichtserfassung`, `Tierbewertung`, und `Kontrolle Frischmelker für` auswählen können. Wählen Sie `Gewichtserfassung` und bestätigen Sie mit `OK`.

4. Nutzen Sie die Pfeiltasten △ ▽ um das Einstellungsfeld `Mittlere tägliche Zunahme` auszuwählen. Nutzen Sie die Pfeiltasten ◁ ▷ um die gewünschte Mittlere tägliche Zunahme g/Tag einzustellen. Das Gerät verwendet jetzt die hier definierte durchschnittliche tägliche Zunahme als Standard für die erwartete tägliche Zunahme der Tiere.

    ![VitalControl: Menüfolge Einstellung Tierdaten Mittlere tägliche Zunahme](../bilder/mittleretaeglichezunahme.png "Mittlere tägliche Zunahme einstellen")

### Genauigkeit der Gewichtserfassung {#precision-of-weight-recording}

{{% alert title="Erläuterung" %}}
Je nach Anwendungsfall und Tierart (Lamm, Kalb, Kuh)  treten unterschiedliche Anforderungen auf, mit welcher Auflösung  der Gewichtswert erfasst werden soll (auf 10, auf 100 g oder auf 1 kg genau). Die entsprechende Einstellung kann im Einstellungsmenü 'Maximale Genauigkeit' vorgenommen werden.
{{% /alert %}}

Die untenstehende Tabelle zeigt die Präzision der Gewichtserfassung im Abhängigkeit vom Gewichtsbereich und der getätigten Einstellung für die `Maximale Genauigkeit`:

| Einstellung *Maximale Genauigkeit*:         |  10 g | 100 g | 1 kg |
|---------------------------------------------|-------|-------|------| 
| Präzision im Bereich von *0 bis 9,9 kg*:    | 10 g  | 100 g | 1 kg | 
| Präzision im Bereich von *10 bis 49,9 kg*:  | 100 g | 100 g | 1 kg |
| Präzision im Bereich von *50 bis 99,9 kg*:  | 500 g | 500 g | 1 kg |
| Präzision für Werte *über 100 kg*:         | 1 kg  | 1 kg  | 1 kg |

Um die maximale Genauigkeit der Gewichtserfassung auf Ihrem Gerät festzulegen gehen Sie wie folgt vor:

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen` und drücken Sie die Taste `OK`.

2. Es öffnet sich ein Untermenü, in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽  um `Tierdatenerfassung` auszuwählen. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein weiteres Untermenü in dem in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽ um zwischen den Einstellungsfeldern `Gewichtserfassung`, `Tierbewertung`, und `Kontrolle Frischmelker für` auswählen können. Wählen Sie `Gewichtserfassung` und bestätigen Sie mit `OK`.

4. Nutzen Sie die Pfeiltasten △ ▽ um das Einstellungsfeld `Maximale Genauigkeit` auszuwählen. Nutzen Sie die Pfeiltasten ◁ ▷ um die gewünschte maximale Genauigkeit einzustellen. Die Präzision der Gewichtseingabe auf jedem Gerät erfolgt jetzt anhand der getätigten Einstellung.

    ![VitalControl: Menüfolge Einstellung Genauigkeit der Gewichtserfassung](../bilder/genauigkeitgewichtserfassung.png "Genauigkeit der Gewichtserfassung einstellen")

<br>
Speichern Sie die Einstellungen und gelangen Sie mittels der `F1` Taste &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Speichern und zurück" /> zurück in das Obermenü `Tierdatenerfassung`.

## Modus der Tierbewertung {#mode-of-animal-rating}

{{% alert title="Erläuterung" %}}
Bei der Aktion [Tierbewertung](../../aktionen/tierbewertung/) können Sie zwischen zwei verschiedenen Modi wählen: Im **einfachen Modus** wird bei der Tierbewertung lediglich der Allgemeinzustand abgefragt (grün/gelb/rot). Bei der **erweiterten Bewertung** werden vier Bewertungskategorien abgefragt: Allgemeinzustand, Futterverzehr, Durchfall und Atemwegserkrankung.
{{% /alert %}}

Um den Modus der Tierbewertung auf Ihrem Gerät festzulegen gehen Sie wie folgt vor:

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen` und drücken Sie die Taste `OK`.

2. Es öffnet sich ein Untermenü, in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten  △ ▽  um `Tierdatenerfassung` auszuwählen. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein weiteres Untermenü in dem in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽ um zwischen den Einstellungsfeldern `Gewichtserfassung`, `Tierbewertung`, und `Kontrolle Frischmelker für` auswählen können. Wählen Sie `Tierbewertung`.

4. Nutzen Sie die Pfeiltasten ◁ ▷ um die gewünschte Tierbewertung einzustellen.

    ![VitalControl: Menüfolge Einstellung Tierbewertung](../bilder/tierbewertung.png "Tierbewertung einstellen")

## Kontrollperiode Frischmelker {#control-period-of-fresh-cows}

{{% alert title="Erläuterung" %}}
Beim Management von Frischmelkern ist es gute fachliche Praxis, mehrere Tage nach der Geburt täglich eine Tierkontrolle incl. Temperaturmessung durchzuführen. Die Dauer dieser Kontrollperiode variiert betriebsindividuell erheblich. Deswegen kann in den Einstellungen des VitalControls die Länge der Kontrollperiode auf einen Wert zwischen 3 und 14 Tagen festgelegt werden. Der hier eingestellte Wert für den Zeitraum der Frischmelkerkontolle bestimmt die Anzahl der Säulen des Säulendiagramms, welches in der [Frischmelkerliste](../listen/frischmelker/) individuell für jedes Tier angezeigt wird.
{{% /alert %}}

Um die Länge der Kontrollperiode für die Frischmelker auf Ihrem Gerät festzulegen gehen Sie wie folgt vor:

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen` und drücken Sie die Taste `OK`.

2. Es öffnet sich ein Untermenü, in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten  △ ▽  um `Tierdatenerfassung` auszuwählen. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein weiteres Untermenü in dem in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽ um zwischen den Einstellungsfeldern `Gewichtserfassung`, `Tierbewertung`, und `Kontrolle Frischmelker für` auswählen können. Wählen Sie `Kontrolle Frischmelker für`.

4. Nutzen Sie die Pfeiltasten ◁ ▷ um die gewünschte Kontrolldauer in Tagen post partum einzustellen.

    ![VitalControl: Menüfolge Einstellung Kontrolle Frischmelker](../bilder/kontrollefrischmelker.png "Kontrollperiode Frischmelker einstellen")

<br>

Speichern Sie die Einstellungen und gelangen Sie mittels der `F1` Taste &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Speichern und Zurück" /> zurück in das Obermenü <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen`.
