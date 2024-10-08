---
title: Modifica dati animali
linkTitle: Modifica
slug: edit
weight: 90
description: >
 Modifica i dati dell'animale selezionato.
date: 2023-07-26
categorie: [Azioni]
etichette: [Azioni, dati animali, modifica]
translationKey: actions/edit
---

## Modifica dati animali {#edit-animal-data}

L'azione <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Modifica" /> `{{<T "Edit" >}}` ti permette di cambiare i dati dell'animale selezionato direttamente. Questa funzione facilita la correzione dei dati dell'animale se, ad esempio, durante l'ispezione dell'animale diventa evidente che il sesso è stato salvato in modo errato. Puoi cambiare i seguenti dati:

- Tipo di animale
- Sesso
- Peso alla nascita
- Razza
- Dove si trova
- ID nazionale dell'animale
- ID
- Multipli
- Data di nascita
- Facilità di parto

Per cambiare i dati dell'animale, procedi come segue:

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona l'elemento del menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Azioni" /> `{{<T "Actions" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Scansiona un animale utilizzando il transponder oppure seleziona un animale dalla lista. Conferma con `{{<T "Ok" >}}` e seleziona un animale con i tasti freccia △ ▽. Conferma con `{{<T "Ok" >}}`.

3. Si apre un sottomenu con le azioni dell'animale. Usa i tasti freccia ◁ ▷ △ ▽ per selezionare l'azione <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Modifica" /> `{{<T "Edit" >}}` e conferma con `{{<T "Ok" >}}`.

4. Si apre una lista con i dati dell'animale. Usa i tasti freccia △ ▽ per selezionare l'opzione di modifica desiderata.

5. Per i dati `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` e `{{<T "CalvingEase" >}}` usa i tasti freccia ◁ ▷ per effettuare la modifica desiderata.

6. Per i dati `{{<T "ID" >}}` e `{{<T "DateBirth" >}}` selezionali con i tasti freccia △ ▽ e conferma con `{{<T "Ok" >}}`. Usa i tasti freccia △ ▽ per selezionare il numero corrispondente e i tasti freccia ◁ ▷ per navigare all'interno dei campi numerici.

7. Salva la modifica con il tasto `F3`.

{{< tabpane >}}
{{< tab header="Modifica dati animali:" text=true disabled=true />}}
{{% tab header="Scansione transponder" text=true %}}
![VitalControl: Menu Azione Modifica dati animali](../images/edit-scan.png "Modifica dati animali")
{{% /tab %}}
{{% tab header="Selezione manuale dalla lista" text=true %}}
![VitalControl: Menu Azione Modifica dati animali](../images/edit.png "Modifica dati animali")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Suggerimento" %}}
Se questa azione non è disponibile, probabilmente è stata disattivata! Attiva l'azione nel menu delle [impostazioni delle azioni](../settings/). In alternativa, reimpostare tutte le azioni riporterà in alto quell'azione.
{{% /alert %}}
