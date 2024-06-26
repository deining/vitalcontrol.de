---
title: Leitfaden für unterschiedliche Betriebsausrichtungen
linkTitle: Leitfaden
description: Finden Sie einen Leitfaden, passend zu Ihrer Betriebsausrichtung
no_list: false
translationKey: guide
weight: 5
---

## Leitfaden {#guide}

{{% alert title="Hinweis" %}}
Innerhalb des Leitfadens finden Sie einige Fragen. Mit der Beantwortung der Fragen werden Ihnen auf Sie zugeschnittene Erklärungen präsentiert. </br> 
Um die Schritt für Schritt Anleitungen für die einzelnen Menüpunkte einzusehen klicken Sie einfach die [blau](../../leitfaden/fresser) hinterlegten Begriffe an. 
{{% /alert %}}

## Ersteinrichtung {#initial-setup}

### Sprache, Datum & Uhrzeit {#language-date--time}

Starten Sie das Gerät mit dem `An/Aus` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp;. Drücken Sie die Taste dazu für ca. eine Sekunde und lassen Sie diese dann los. </br> 
Sie werden nun mit einem Warnhinweis darüber informiert, dass die [Uhrzeit](../../einstellungen/datum-uhrzeit/#to-set-the-time) sowie das [Datum](../../einstellungen/datum-uhrzeit/#to-set-the-date) richtig eingestellt werden müssen. Außerdem startet das Gerät serienmäßig in der [Sprache](../../einstellungen/sprache/#setting-your-language) Englisch, diese müssen Sie auf Ihre Sprache anpassen. 

### Betriebsnummer {#farm-number}

Die [Betriebsnummer](../../einstellungen/betriebsnummer/#set-your-farm-number) wird benötigt damit einige Funktionen wie z.B. das Melden neuer Tiere über den CSV-Export im Menüpunkt <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Zugänge" /> `Zugänge` reibungslos funktioniert. Tragen Sie die Betriebsnummer daher bitte bei der Ersteinrichtung ein, damit Komplikationen in späteren Anwendungen vermieden werden. </br> 
Sollten Sie Probleme bei der Meldung von Tieren über die CSV-Exporte erhalten schauen Sie als erstes danach ob Ihre Betriebsnummer richtig eingetragen ist.

### Tierbestand

#### Import des Tierbestandes aus HI-Tier

Der Import aus HI-Tier ermöglicht es Ihnen alle Tiere die in HI-Tier gemeldet sind auf Ihrem VitalControl anzulegen. Ihr gesamter Tierbestand ist somit sofort verfügbar. Die Anleitung dazu finden Sie [hier](). </br> 
Für das erste Kennenlernen des Gerätes empfehlen wir zunächst einige Tiere manuell anzulegen bevor der gesamte Tierbestand importiert wird.

#### Manuelles Anlegen der Tiere

Beim manuellen Anlegen der Tiere verwenden Sie die Ohrmarkennummer der Tiere um diese im VitalControl anzulegen. Optional können Sie direkt einen Transponder mit einscannen und einige Informationen zu dem Tier abspeichern. Verwenden Sie hierfür den Menüpunkt <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Neues Tier" /> [`Neues Tier`](../../neu/tier/#create-a-new-animal). </br> 
Sollten Sie einen Transponder mit einscannen erfahren Sie alles wichtige Informationen über die Vergabe der ID  [hier](../../einstellungen/tiere-neu-anlegen/#assignment-animal-id).

## Die ersten Schritte am Tier
### Aktionen

Die wichtigsten Funktionen die Sie Tag täglich verwenden werden finden Sie unter dem Menüpunkt &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Aktionen" /> [`Aktionen`](../aktionen/). Hier können Sie z.B. die Temperatur erfassen, eine Wiegung eintragen oder eine Bewertung des Tieres vornehmen. Für ihre Tierkontrolle sind die Aktionen ein unverzichtbarer Bestandteil. </br> 
Der Menüpunkt Aktionen bzw. einzelne Aktionen werden für Sie immer wieder von Bedeutung werden. Sich einmal ausführlich mit den einzelnen Aktionen und deren Anwendungen auseinanderzusetzen wird daher empfohlen. 

Hier erfolgt für jeden Menüpunkt eine kurze Erklärung und Verlinkung.

## Testfrage

<p>Welche Betriebsausrichtung liegt vor?</p>
<button onclick="showResponse('yes')">Fresseraufzucht</button>
<button onclick="showResponse('no')">Milchviehbetrieb</button>

<div id="response"></div>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script>
async function fetchMarkdown(filename) {
  const response = await fetch(filename);
  const text = await response.text();
  return marked.parse(text);
}

async function showResponse(answer) {
  let content;
  if (answer === 'yes') {
    content = await fetchMarkdown('/markdown/test.md');
  } else {
    content = await fetchMarkdown('/markdown/test.md');
  }
  document.getElementById('response').innerHTML = content;
}
</script>
</br> 
Hierüber könnte man die Etablierung von "Anwendungsfällen" für die unterschiedlichen Betriebsausrichtungen vornehmen. Das ganze ist so gedacht, dass man auf die Antwort klickt und sich dann ein entsprechender Text öffnet. Das hält die Seite etwas übersichtlicher. </br> 
Ich fände den Leitfaden als ein Dokument in dem es dann Spezialisierungsmöglichkeiten gibt deutlicher übersichtlicher als wenn wir das ganze in unterschiedliche Dokumente aufteilen. </br> 
Als einen Anwendungsfall stelle ich mir z.B. vor: Fresseraufzucht -> "Ankunft neuer Tiere" oder Milchviehbetrieb ->"Geburt eines Kalbes"
