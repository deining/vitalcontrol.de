---
title: Attivazione e Configurazione Una Tantum del Dispositivo nelle Impostazioni del Distributore Automatico
linkTitle: Configurazione
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Prima di utilizzare il VitalControl per la prima volta, è necessario attivarlo e configurarlo correttamente una volta nelle impostazioni del distributore Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Per attivare e configurare il dispositivo VitalControl, procedere come segue:

## Navigazione al menu delle impostazioni `{{<T "VitalControl" >}}`

{{% alert title="Attenzione" %}}
Per attivare e configurare il dispositivo {{<T "VitalControl" >}}, è necessario essere loggati come utente con ruolo {{<T "SiteManager" >}} al distributore automatico. Altrimenti, alcuni dei pulsanti mostrati e descritti di seguito non saranno visibili.
{{% /alert %}}

1. Clicca sul pulsante in basso <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Menu Impostazioni" title="Impostazioni"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> nella barra laterale sinistra del terminale touch. Se ti trovi nel menu principale dove non è visibile alcuna barra laterale, premi il pulsante &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Menu Distributore" title="Menu Distributore"/>`{{<T "Feeder" >}}`per visualizzare la barra laterale.

1. Clicca sul secondo pulsante da sinistra <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Impostazioni Terminale Touch" title="Impostazioni Touch"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> nella barra degli strumenti in basso del terminale touch.

1. Ora appare una serie di voci di menu sulla metà sinistra dell'area centrale dello schermo. Clicca sul pulsante in basso `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Ora appare una voce di menu (o forse diverse) sulla metà destra dell'area centrale dello schermo. Clicca sul pulsante in alto `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Il pulsante ora si sposta sulla metà sinistra dello schermo.

1. In basso a destra dello schermo, viene ora visualizzato il pulsante &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Apri impostazioni VitalControl" title="Apri impostazioni" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>. Clicca su questo pulsante e si aprirà una finestra popup che mostrerà [Pagina 1](#settings-menu-vitalcontrol-page-1) del menu delle impostazioni `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Impostazioni VitalControl: Accesso" title="Accedi al menu delle impostazioni di VitalControl" />
    <figcaption class="figure-caption fs-6">Screenshot 1: Accesso al menu delle impostazioni di <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Il menu delle impostazioni di `{{<T "VitalControl" >}}` è distribuito su due pagine:

## Menu Impostazioni `{{<T "VitalControl" >}}` - Pagina 1 {#settings-menu-vitalcontrol-page-1}

La Pagina 1 del menu delle impostazioni di <span style="font-style: italic;">{{<T "VitalControl" >}}</span> è presentata come segue:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Menu impostazioni VitalControl: Pagina 1" title="Impostazioni VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Screenshot 2: Menu impostazioni di <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Pagina 1</figcaption>
</figure>

In questa pagina, puoi eseguire le seguenti azioni e impostazioni.

### Attivazione del Dispositivo {{<T "VitalControl" >}} {#activation-vitalcontrol}

Nello stato predefinito della macchina, il {{<T "VitalControl" >}} è disattivato. Imposta l'interruttore <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> nella posizione destra <span style="font-style: italic;">{{<T "YES" >}}</span> per attivare il dispositivo {{<T "VitalControl" >}}. Successivamente, nella barra laterale destra del menu del feeder, sotto l'icona(e) per la/le macchina/e collegata/e, verrà visualizzata l'icona <img src="/icons/device.svg" width="20" align="bottom" alt="Dispositivo VitalControl" title="VitalControl"/> per il dispositivo `{{<T "VitalControl" >}}` (vedi Screenshot <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Menu Feeder</a></span>, figura <span style="font-size: 140%">➁</span> lì).

### Sincronizzazione mangiatoia automatica <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Sul lato sinistro dello schermo, ci sono due caselle di controllo:

* Casella di controllo <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Questa opzione controlla il comportamento nel caso in cui siano presenti animali sulla mangiatoia durante la sincronizzazione che non sono ancora conosciuti dal dispositivo {{<T "VitalControl" >}}. Questa opzione è abilitata per impostazione predefinita e dovrebbe generalmente rimanere impostata. Se registri i tuoi animali acquistati scansionando i loro passaporti animali, questa opzione deve essere disabilitata.

    <span style="font-weight: bold">Abilita</span> questa opzione:

    - se hai un {{<T "VitalControl" >}} completamente nuovo davanti a te, sul quale vuoi trasferire tutti gli animali da una mangiatoia. Dopo la sincronizzazione, tutti gli animali conosciuti dalla mangiatoia saranno presenti anche sul {{<T "VitalControl" >}}.
    - se porti continuamente nuovi vitelli alla mangiatoia durante le operazioni in corso. Questi animali verranno quindi creati anche sul dispositivo {{<T "VitalControl" >}} durante la sincronizzazione.

    <span style="font-weight: bold">Disabilita</span> questa opzione:

    - se hai creato nuovi animali sul tuo {{<T "VitalControl" >}} scansionando i loro passaporti animali, dove
    - questi animali non sono ancora stati assegnati a un transponder e
    - questi animali vengono già nutriti alla mangiatoia e sono quindi registrati lì.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Attenzione</span><br>
                Se l'opzione rimane impostata nella configurazione sopra, gli animali saranno presenti due volte sul {{<T "VitalControl" >}} dopo la sincronizzazione.
            </div>
        </div>


* Casella di controllo <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Questa opzione controlla se gli animali che sono presenti solo su {{<T "VitalControl" >}} ma non sul distributore vengono eliminati da {{<T "VitalControl" >}} durante la prossima sincronizzazione. Se usi {{<T "VitalControl" >}} solo durante il periodo di lattazione degli animali, questa opzione dovrebbe essere abilitata. Se vuoi monitorare gli animali oltre il periodo di lattazione, devi disabilitare questa opzione.

    <span style="font-weight: bold">Abilita</span> questa opzione:

    - se raccogli dati per gli animali solo durante il periodo di lattazione,
    - se vuoi che gli animali vengano eliminati da {{<T "VitalControl" >}} durante la prossima sincronizzazione dopo che sono stati eliminati dal distributore. In questo modo, gli animali non si accumulano su {{<T "VitalControl" >}} nel tempo.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attenzione</span><br>
            Se questa opzione è attivata e la casella di controllo <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> è anche attivata, non verranno eliminati animali più giovani di quanto specificato nel campo numerico <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Disabilita</span> questa opzione:
    - se vuoi continuare a raccogliere dati per gli animali dopo il periodo di lattazione, ad esempio, durante una pesatura,
    - se sei disposto a eliminare manualmente gli animali da {{<T "VitalControl" >}} tu stesso.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attenzione</span><br>
        Se disabiliti questa opzione, devi scollegare il transponder per gli animali svezzati sul dispositivo {{<T "VitalControl" >}} al più tardi quando il collare viene rimosso dal vitello svezzato per un altro vitello più giovane. Se il transponder non viene rimosso, i dati del giovane animale - che ora indossa il collare precedente dell'animale svezzato - vengono aggiunti erroneamente al dataset degli animali svezzati.
    </div>
</div>

### Sincronizzazione {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Alimentatore Automatico

Sul lato destro dello schermo, c'è una casella di controllo e due campi di input:

* Casella di controllo <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Questa opzione controlla se gli animali presenti su {{<T "VitalControl" >}}, che sono sconosciuti all'alimentatore, verranno creati sull'alimentatore durante la prossima sincronizzazione. Per impostazione predefinita, questa opzione non è attivata.

    <span style="font-weight: bold">Disattiva</span> questa opzione o lasciala disattivata:

    - se usi il tuo dispositivo {{<T "VitalControl" >}} su più alimentatori contemporaneamente,
    - se porti i tuoi animali direttamente all'alimentatore senza registrarli prima tramite il dispositivo {{<T "VitalControl" >}}. I tuoi animali verranno quindi creati automaticamente durante la registrazione quando vengono nutriti all'alimentatore per la prima volta.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attenzione</span><br>
            Se il {{<T "VitalControl" >}} viene utilizzato su più macchine e questa opzione è selezionata, gli animali verranno trasferiti involontariamente da una macchina all'altra durante la sincronizzazione.
        </div>
    </div>

<span style="font-weight: bold">Attiva</span> questa opzione:

- se la registrazione iniziale dei loro animali neonati con il {{<T "VitalControl" >}} avviene prima della prima alimentazione al distributore.
- se registri i tuoi animali acquistati scansionando i loro passaporti animali sul {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attenzione</span><br>
        Attiva questa opzione solo se utilizzi il {{<T "VitalControl" >}} su una singola macchina! Se desideri eseguire la sincronizzazione con più macchine con questa opzione attivata, devi utilizzare un dispositivo {{<T "VitalControl" >}} separato per ciascuna macchina.
    </div>
</div>

* Menu a tendina <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   In questo menu a tendina, puoi selezionare la curva di alimentazione assegnata agli animali che vengono creati di nuovo sul distributore durante la sincronizzazione.

* Campo di input numerico<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    In questo campo numerico, puoi specificare l'età minima (in giorni) dalla quale gli animali vengono creati di nuovo sul distributore durante la sincronizzazione. Gli animali che sono più giovani dell'età minima specificata **non** vengono creati durante la sincronizzazione.

Premi il pulsante <span style="font-size: 140%">⑧</span> per passare a [pagina 2](#settings-menu-vitalcontrol-page-2) del <span style="font-style: italic;">menu delle impostazioni {{<T "VitalControl" >}}</span>.

## Menu Impostazioni `{{<T "VitalControl" >}}` - Pagina 2 {#settings-menu-vitalcontrol-page-2}

### Come gestire i conflitti di dati durante la sincronizzazione

I conflitti di dati possono verificarsi durante la sincronizzazione dei dati tra il distributore e il dispositivo {{<T "VitalControl" >}}. Un conflitto di dati si verifica quando i dati si contraddicono tra il dispositivo {{<T "VitalControl" >}} e il distributore (ad esempio, riguardo al <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). In questa pagina 2 del menu impostazioni, puoi specificare se e come i conflitti di dati vengono risolti durante la sincronizzazione. Ci sono tre opzioni disponibili:

* Viene data priorità ai dati del distributore, i dati sul dispositivo {{<T "VitalControl" >}} vengono sovrascritti con quelli del distributore\.
  Attiva questa opzione selezionando il pulsante di opzione nella colonna di sinistra sotto il simbolo del distributore <span style="font-size: 140%">➃</span>.

* Viene data priorità ai dati del {{<T "VitalControl" >}}, i dati sul distributore vengono sovrascritti con quelli del dispositivo {{<T "VitalControl" >}}\.
  Attiva questa opzione selezionando il pulsante di opzione nella colonna di sinistra sotto il {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Non vengono apportate modifiche, sia i dati del distributore che quelli del dispositivo {{<T "VitalControl" >}} rimangono invariati.\
  Attiva questa opzione selezionando il pulsante di opzione nella colonna di destra <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Esempio</span><br>
            Dopo aver acquistato un lotto di vitelli, registri i tuoi animali acquistati sul {{<T "VitalControl" >}} scansionando tutti i loro passaporti animali. I numeri degli animali per questi animali sul {{<T "VitalControl" >}} sono quindi – a seconda delle <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">impostazioni del dispositivo</a> – le ultime 3-5 cifre del passaporto dell'animale. Poi metti collari con transponder Urban sugli animali appena acquistati e li nutri al distributore automatico. Durante la visita iniziale alla stazione, gli animali vengono registrati utilizzando il loro transponder e creati nuovamente al distributore. Tuttavia, i numeri degli animali per questi nuovi animali sul distributore sono derivati dal numero del transponder o corrispondono al numero dell'animale memorizzato per questo transponder nel distributore. Ciò significa che un numero di animale diverso è stato ora assegnato allo stesso animale sul dispositivo {{<T "VitalControl" >}} e sul distributore, risultando in un conflitto di dati. Utilizzando i pulsanti di opzione per il <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, puoi ora specificare nel menu impostazioni quale dei due numeri di animali paralleli ha la priorità e quale verrà eliminato durante la sincronizzazione.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Menu Impostazioni VitalControl: Pagina 2" title="Impostazioni VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Screenshot 3: Menu Impostazioni <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Pagina 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attenzione</span><br>
        Per motivi interni, le modifiche possono attualmente essere apportate solo al <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Nelle versioni firmware successive, sarà possibile apportare modifiche anche al <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> e alla <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Premendo il <span style="font-style: italic;">pulsante</span> <span style="font-size: 140%">⑧</span> tornerai alla [pagina 1](#settings-menu-vitalcontrol-page-1) del menu impostazioni `{{<T "VitalControl" >}}`.
