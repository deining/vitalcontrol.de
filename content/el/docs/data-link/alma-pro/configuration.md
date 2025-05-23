---
title: Ενεργοποίηση και Ρύθμιση της Συσκευής Μιας Φοράς στις Ρυθμίσεις του Αυτόματου Τροφοδότη
linkTitle: Ρύθμιση
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Πριν χρησιμοποιήσετε το VitalControl για πρώτη φορά, πρέπει να το ενεργοποιήσετε και να το ρυθμίσετε σωστά μία φορά στις ρυθμίσεις του τροφοδότη Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
---
## Απαιτήσεις

Συνιστούμε τη χρήση μιας έκδοσης firmware <span style="font-weight: bold">24-xx-xx</span> ή νεότερης με τη συσκευή VitalControl.\
Για να ελέγξετε ποια έκδοση firmware είναι εγκατεστημένη στη συσκευή σας:

* Μεταβείτε στην αρχική σελίδα του τροφοδότη κάνοντας κλικ στο κουμπί `Home` <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Εικονίδιο αρχικής οθόνης" title="Alma Pro: Αρχική οθόνη"/>&nbsp; στη γραμμή πλοήγησης στην αριστερή περιοχή της οθόνης.
* Στην αρχική οθόνη, κάντε κλικ στο κουμπί `Help` <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Εικονίδιο μενού βοήθειας" title="Alma Pro: Οθόνη βοήθειας"/>&nbsp; στην επάνω δεξιά περιοχή της οθόνης.
* Ο αριθμός έκδοσης <span style="font-size: 140%">➂</span> εμφανίζεται τώρα στα αριστερά του κουμπιού αλλαγής γλώσσας.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: έλεγχος έκδοσης firmware" title="Alma Pro: έλεγχος έκδοσης firmware" />
    <figcaption class="figure-caption fs-6">Στιγμιότυπο 1: <span style="font-style: italic;">Alma Pro: έλεγχος έκδοσης firmware</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Προσοχή</span><br>
        Εάν η έκδοση firmware του τροφοδότη σας είναι χαμηλότερη από <span style="font-weight: bold">24-xx-xx</span>, ενδέχεται να υπάρχουν διαφορές μεταξύ των παρακάτω στιγμιότυπων και της εμφάνισης στην οθόνη αφής σας, ώστε να μην μπορείτε να ακολουθήσετε τις οδηγίες. Σε αυτή την περίπτωση, επικοινωνήστε με τον τεχνικό σας για να ενημερώσετε το firmware στον τροφοδότη σας.<br>
    </div>
</div>

## Πλοήγηση στο μενού ρυθμίσεων `{{<T "VitalControl" >}}`

{{% alert title="Προσοχή" %}}
Για να ενεργοποιήσετε και να ρυθμίσετε τη συσκευή {{<T "VitalControl" >}}, πρέπει να είστε συνδεδεμένοι ως ο ρόλος χρήστη {{<T "SiteManager" >}} στον αυτόματο τροφοδότη. Διαφορετικά, ορισμένα από τα κουμπιά που εμφανίζονται και περιγράφονται παρακάτω δεν θα είναι ορατά σε εσάς.
{{% /alert %}}

1. Κάντε κλικ στο κάτω κουμπί <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Μενού Ρυθμίσεων" title="Ρυθμίσεις"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> στην αριστερή πλαϊνή μπάρα του τερματικού αφής. Αν βρίσκεστε στο κύριο μενού όπου δεν είναι ορατή η πλαϊνή μπάρα, πατήστε το κουμπί &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Μενού Τροφοδότη" title="Μενού Τροφοδότη"/>`{{<T "Feeder" >}}`για να εμφανιστεί η πλαϊνή μπάρα.

1. Κάντε κλικ στο δεύτερο κουμπί από τα αριστερά <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Ρυθμίσεις Τερματικού Αφής" title="Ρυθμίσεις Αφής"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> στη κάτω γραμμή εργαλείων του τερματικού αφής.

1. Μια σειρά από στοιχεία μενού εμφανίζεται τώρα στο αριστερό μισό της κεντρικής περιοχής της οθόνης. Κάντε κλικ στο κάτω κουμπί `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Ένα στοιχείο μενού (ή πιθανώς περισσότερα) εμφανίζεται τώρα στο δεξί μισό της κεντρικής περιοχής της οθόνης. Κάντε κλικ στο πάνω κουμπί `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Το κουμπί τώρα μεταβαίνει στο αριστερό μισό της οθόνης.

1. Στο κάτω μέρος της δεξιάς πλευράς της οθόνης, το κουμπί &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Άνοιγμα ρυθμίσεων VitalControl" title="Άνοιγμα ρυθμίσεων" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span> εμφανίζεται τώρα. Κάντε κλικ σε αυτό το κουμπί και θα ανοίξει ένα αναδυόμενο παράθυρο, εμφανίζοντας [Σελίδα 1](#settings-menu-vitalcontrol-page-1) του μενού ρυθμίσεων `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" usemap="#NavigationToVitalControlSettingsMenu" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Ρυθμίσεις VitalControl: Πρόσβαση" title="Πρόσβαση στο μενού ρυθμίσεων VitalControl" />
    <figcaption class="figure-caption fs-6">Στιγμιότυπο 1: Πρόσβαση στο μενού ρυθμίσεων <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Το μενού ρυθμίσεων `{{<T "VitalControl" >}}` είναι χωρισμένο σε δύο σελίδες:

## Μενού Ρυθμίσεων `{{<T "VitalControl" >}}` - Σελίδα 1 {#settings-menu-vitalcontrol-page-1}

Η Σελίδα 1 του μενού ρυθμίσεων <span style="font-style: italic;">{{<T "VitalControl" >}}</span> παρουσιάζεται ως εξής:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" usemap="#VitalControlSettingsPage1" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Μενού ρυθμίσεων VitalControl: Σελίδα 1" title="Ρυθμίσεις VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Στιγμιότυπο 2: Μενού ρυθμίσεων <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Σελίδα 1</figcaption>
</figure>

Σε αυτή τη σελίδα, μπορείτε να εκτελέσετε τις ακόλουθες ενέργειες και ρυθμίσεις.

### Ενεργοποίηση της Συσκευής {{<T "VitalControl" >}} {#activation-vitalcontrol}

Στην προεπιλεγμένη κατάσταση της μηχανής, το {{<T "VitalControl" >}} είναι απενεργοποιημένο. Ρυθμίστε τον διακόπτη <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> στη δεξιά θέση <span style="font-style: italic;">{{<T "YES" >}}</span> για να ενεργοποιήσετε τη συσκευή {{<T "VitalControl" >}}. Στη συνέχεια, στη δεξιά πλαϊνή μπάρα του μενού τροφοδότη, κάτω από το εικονίδιο/τα εικονίδια για τη συνδεδεμένη μηχανή/τις συνδεδεμένες μηχανές, θα εμφανιστεί το εικονίδιο <img src="/icons/device.svg" width="20" align="bottom" alt="Συσκευή VitalControl" title="VitalControl"/> για τη συσκευή `{{<T "VitalControl" >}}` (δείτε το Στιγμιότυπο <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Μενού Τροφοδότη</a></span>, σχήμα <span style="font-size: 140%">➁</span> εκεί).

### Συγχρονισμός αυτόματου τροφοδότη <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Στην αριστερή πλευρά της οθόνης, υπάρχουν δύο πλαίσια επιλογής:

* Πλαίσιο επιλογής <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Αυτή η επιλογή ελέγχει τη συμπεριφορά σε περίπτωση που υπάρχουν ζώα στον τροφοδότη κατά τη διάρκεια του συγχρονισμού που δεν είναι ακόμη γνωστά στη συσκευή {{<T "VitalControl" >}}. Αυτή η επιλογή είναι ενεργοποιημένη από προεπιλογή και γενικά πρέπει να παραμένει ρυθμισμένη. Εάν καταχωρήσετε τα αγορασμένα ζώα σας σκανάροντας τα διαβατήρια ζώων τους, αυτή η επιλογή πρέπει να απενεργοποιηθεί.

<span style="font-weight: bold">Ενεργοποιήστε</span> αυτή την επιλογή:

- αν έχετε ένα ολοκαίνουργιο {{<T "VitalControl" >}} μπροστά σας, στο οποίο θέλετε να μεταφέρετε όλα τα ζώα από έναν τροφοδότη. Μετά τον συγχρονισμό, όλα τα ζώα που είναι γνωστά στον τροφοδότη θα είναι επίσης παρόντα στο {{<T "VitalControl" >}}.
- αν συνεχώς φέρνετε νέα μοσχάρια στον τροφοδότη κατά τη διάρκεια των τρεχουσών λειτουργιών. Αυτά τα ζώα θα δημιουργηθούν επίσης στη συσκευή {{<T "VitalControl" >}} κατά τη διάρκεια του συγχρονισμού.

<span style="font-weight: bold">Απενεργοποιήστε</span> αυτή την επιλογή:

- αν έχετε δημιουργήσει νέα ζώα στο {{<T "VitalControl" >}} σκανάροντας τα διαβατήρια ζώων τους, όπου
- αυτά τα ζώα δεν έχουν ακόμη ανατεθεί σε έναν πομπό και
- αυτά τα ζώα ήδη τρέφονται στον τροφοδότη και επομένως είναι καταχωρημένα εκεί.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Προσοχή</span><br>
        Εάν η επιλογή παραμείνει ρυθμισμένη στην παραπάνω διαμόρφωση, τα ζώα θα είναι παρόντα δύο φορές στο {{<T "VitalControl" >}} μετά τον συγχρονισμό.
    </div>
</div>

* Checkbox <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Αυτή η επιλογή ελέγχει αν τα ζώα που υπάρχουν μόνο στο {{<T "VitalControl" >}} αλλά όχι στον τροφοδότη διαγράφονται από το {{<T "VitalControl" >}} κατά την επόμενη συγχρονισμό. Αν χρησιμοποιείτε το {{<T "VitalControl" >}} μόνο κατά την περίοδο γάλακτος των ζώων, αυτή η επιλογή πρέπει να είναι ενεργοποιημένη. Αν θέλετε να παρακολουθείτε τα ζώα πέρα από την περίοδο γάλακτος, πρέπει να απενεργοποιήσετε αυτή την επιλογή.

<span style="font-weight: bold">Ενεργοποιήστε</span> αυτή την επιλογή:

- αν συλλέγετε δεδομένα για τα ζώα μόνο κατά την περίοδο γάλακτος,
- αν θέλετε τα ζώα να διαγράφονται από το {{<T "VitalControl" >}} κατά την επόμενη συγχρονισμό αφού έχουν διαγραφεί από τον τροφοδότη. Με αυτόν τον τρόπο, τα ζώα δεν συσσωρεύονται στο {{<T "VitalControl" >}} με την πάροδο του χρόνου.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Προσοχή</span><br>
        Αν αυτή η επιλογή είναι ενεργοποιημένη και το πλαίσιο ελέγχου <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> είναι επίσης ενεργοποιημένο, δεν θα διαγραφούν ζώα που είναι νεότερα από την ηλικία που καθορίζεται στο πεδίο αριθμού <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Απενεργοποιήστε</span> αυτή την επιλογή:
- αν θέλετε να συνεχίσετε να συλλέγετε δεδομένα για τα ζώα μετά την περίοδο γάλακτος, για παράδειγμα, κατά τη διάρκεια μιας ζύγισης,
- αν είστε πρόθυμοι να διαγράψετε τα ζώα από το {{<T "VitalControl" >}} μόνοι σας.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Προσοχή</span><br>
        Εάν απενεργοποιήσετε αυτήν την επιλογή, πρέπει να αποσυνδέσετε τον πομπό για τα απογαλακτισμένα ζώα στη συσκευή {{<T "VitalControl" >}} το αργότερο όταν το κολάρο αφαιρεθεί από το απογαλακτισμένο μοσχάρι σε ένα άλλο, νεότερο μοσχάρι. Εάν ο πομπός δεν αφαιρεθεί, τα δεδομένα του νεότερου ζώου -που τώρα φοράει το πρώην κολάρο του απογαλακτισμένου ζώου- προστίθενται λανθασμένα στο σύνολο δεδομένων των απογαλακτισμένων ζώων.
    </div>
</div>

### Συγχρονισμός {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Αυτόματη Ταΐστρα

Στη δεξιά πλευρά της οθόνης, υπάρχει ένα πλαίσιο επιλογής και δύο πεδία εισαγωγής:

* Πλαίσιο επιλογής <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Αυτή η επιλογή ελέγχει αν τα ζώα που υπάρχουν στο {{<T "VitalControl" >}}, τα οποία είναι άγνωστα στην ταΐστρα, θα δημιουργηθούν στην ταΐστρα κατά τον επόμενο συγχρονισμό. Από προεπιλογή, αυτή η επιλογή δεν είναι ενεργοποιημένη.

    <span style="font-weight: bold">Απενεργοποιήστε</span> αυτήν την επιλογή ή αφήστε την απενεργοποιημένη:

    - εάν χρησιμοποιείτε τη συσκευή {{<T "VitalControl" >}} σε πολλαπλές ταΐστρες ταυτόχρονα,
    - εάν φέρνετε τα ζώα σας απευθείας στην ταΐστρα χωρίς να τα καταχωρήσετε πρώτα μέσω της συσκευής {{<T "VitalControl" >}}. Τα ζώα σας θα δημιουργηθούν αυτόματα κατά την καταχώρηση όταν τρέφονται στην ταΐστρα για πρώτη φορά.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Προσοχή</span><br>
            Εάν το {{<T "VitalControl" >}} χρησιμοποιείται σε πολλαπλές μηχανές και αυτή η επιλογή είναι επιλεγμένη, τα ζώα θα μεταφερθούν ακούσια από τη μία μηχανή στην άλλη κατά τη συγχρονισμό.
        </div>
    </div>

    <span style="font-weight: bold">Ενεργοποιήστε</span> αυτή την επιλογή:

    - εάν η αρχική εγγραφή των νεογέννητων ζώων τους με το {{<T "VitalControl" >}} γίνεται πριν από την πρώτη σίτιση στον τροφοδότη.
    - εάν καταγράφετε τα αγορασμένα ζώα σας σκανάροντας τα διαβατήρια των ζώων τους στο {{<T "VitalControl" >}}.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Προσοχή</span><br>
            Ενεργοποιήστε αυτή την επιλογή μόνο εάν χρησιμοποιείτε το {{<T "VitalControl" >}} σε μία μόνο μηχανή! Εάν θέλετε να πραγματοποιήσετε συγχρονισμό με πολλαπλές μηχανές με αυτή την επιλογή ενεργοποιημένη, πρέπει να χρησιμοποιήσετε μια ξεχωριστή συσκευή {{<T "VitalControl" >}} για κάθε μηχανή.
        </div>
    </div>

* Μενού επιλογής <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Σε αυτό το μενού επιλογής, μπορείτε να επιλέξετε την καμπύλη σίτισης που ανατίθεται σε ζώα που δημιουργούνται πρόσφατα στη ταΐστρα κατά τη συγχρονισμό.

* Πεδίο αριθμητικής εισαγωγής<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Σε αυτό το πεδίο αριθμού, μπορείτε να καθορίσετε την ελάχιστη ηλικία (σε ημέρες) από την οποία τα ζώα δημιουργούνται πρόσφατα στη ταΐστρα κατά τη συγχρονισμό. Ζώα που είναι νεότερα από την καθορισμένη ελάχιστη ηλικία **δεν** δημιουργούνται κατά τη συγχρονισμό.

Πατήστε το κουμπί <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> για να μεταβείτε στη [σελίδα 2](#settings-menu-vitalcontrol-page-2) του <span style="font-style: italic;">μενού ρυθμίσεων {{<T "VitalControl" >}}</span>.

## Μενού Ρυθμίσεων `{{<T "VitalControl" >}}` - Σελίδα 2 {#settings-menu-vitalcontrol-page-2}

### Πώς να αντιμετωπίσετε τις συγκρούσεις δεδομένων κατά τη συγχρονισμό

Συγκρούσεις δεδομένων μπορεί να προκύψουν κατά τη συγχρονισμό των δεδομένων μεταξύ της ταΐστρας και της συσκευής {{<T "VitalControl" >}}. Μια σύγκρουση δεδομένων προκύπτει όταν τα δεδομένα αντιφάσκουν μεταξύ τους στη συσκευή {{<T "VitalControl" >}} και στη ταΐστρα (π.χ. σχετικά με τον <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Σε αυτή τη σελίδα 2 του μενού ρυθμίσεων, μπορείτε να καθορίσετε αν και πώς οι συγκρούσεις δεδομένων επιλύονται κατά τη συγχρονισμό. Υπάρχουν τρεις επιλογές εδώ:

* Δίνεται προτεραιότητα στα δεδομένα της ταΐστρας, τα δεδομένα στη συσκευή {{<T "VitalControl" >}} αντικαθίστανται με αυτά της ταΐστρας.
  Ενεργοποιήστε αυτή την επιλογή επιλέγοντας το κουμπί επιλογής στη στήλη αριστερά κάτω από το σύμβολο της ταΐστρας <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Δίνεται προτεραιότητα στα δεδομένα της {{<T "VitalControl" >}}, τα δεδομένα στη ταΐστρα αντικαθίστανται με αυτά της συσκευής {{<T "VitalControl" >}}.
  Ενεργοποιήστε αυτή την επιλογή επιλέγοντας το κουμπί επιλογής στη στήλη αριστερά κάτω από το {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* Δεν γίνονται αλλαγές, τόσο τα δεδομένα του τροφοδότη όσο και τα δεδομένα της συσκευής {{<T "VitalControl" >}} παραμένουν αμετάβλητα.\
  Ενεργοποιήστε αυτήν την επιλογή επιλέγοντας το κουμπί επιλογής στη δεξιά στήλη <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Παράδειγμα</span><br>
            Αφού έχετε αγοράσει μια παρτίδα μοσχαριών, καταχωρείτε τα αγορασμένα ζώα σας στο {{<T "VitalControl" >}} σκανάροντας όλα τα διαβατήρια των ζώων τους. Οι αριθμοί ζώων για αυτά τα ζώα στο {{<T "VitalControl" >}} είναι τότε – ανάλογα με τις <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">ρυθμίσεις της συσκευής</a> – οι τελευταίοι 3-5 αριθμοί του διαβατηρίου του ζώου. Στη συνέχεια, τοποθετείτε περιλαίμια με πομπούς Urban στα νεοαποκτηθέντα ζώα και τα ταΐζετε στον αυτόματο τροφοδότη. Κατά την αρχική επίσκεψη στο σταθμό, τα ζώα καταχωρούνται χρησιμοποιώντας τον πομπό τους και δημιουργούνται εκ νέου στον τροφοδότη. Ωστόσο, οι αριθμοί ζώων για αυτά τα νέα ζώα στον τροφοδότη προέρχονται από τον αριθμό του πομπού ή αντιστοιχούν στον αριθμό ζώου που είναι αποθηκευμένος για αυτόν τον πομπό στον τροφοδότη. Αυτό σημαίνει ότι ένας διαφορετικός αριθμός ζώου έχει πλέον ανατεθεί στο ίδιο ζώο στη συσκευή {{<T "VitalControl" >}} και στον τροφοδότη, με αποτέλεσμα μια σύγκρουση δεδομένων. Χρησιμοποιώντας τα κουμπιά επιλογής για το <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, μπορείτε τώρα να καθορίσετε στο μενού ρυθμίσεων ποιος από τους δύο παράλληλους αριθμούς ζώων έχει προτεραιότητα και ποιος θα διαγραφεί κατά τη συγχρονισμό.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" usemap="#VitalControlSettingsPage2" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Μενού Ρυθμίσεων VitalControl: Σελίδα 2" title="Ρυθμίσεις VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Στιγμιότυπο 3: Μενού Ρυθμίσεων <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Σελίδα 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Προσοχή</span><br>
        Για εσωτερικούς λόγους, οι αλλαγές μπορούν προς το παρόν να γίνουν μόνο στο <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Σε μεταγενέστερες εκδόσεις του firmware, μπορείτε επίσης να κάνετε αλλαγές στο <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> και στο <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Πατώντας το <span style="font-style: italic;">κουμπί</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> θα επιστρέψετε στη [σελίδα 1](#settings-menu-vitalcontrol-page-1) του μενού ρυθμίσεων `{{<T "VitalControl" >}}`.

<map name="NavigationToVitalControlSettingsMenu">
    <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='Κάντε κλικ {{<T "Settings" >}}' href="#Navigation_Digit_1">
    <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='Κάντε κλικ {{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
    <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='Κάντε κλικ {{<T "Accessories" >}}' href="#Navigation_Digit_3">
    <area shape="rect" coords="520,150,870,197" alt='Temperature" title="Κάντε κλικ {{<T "Synchronize" >}}' href="#Navigation_Digit_4">
    <area shape="rect" coords="580,582,850,636" alt='Temperature" title="Κάντε κλικ {{<T "Synchronize" >}}' href="#Navigation_Digit_5">
</map>

<map name="VitalControlSettingsPage1">
    <area shape="rect" coords="253,45,626,107" alt='{{<T "YES" >}}/{{<T "NO" >}}' title='Κάντε κλικ {{<T "YES" >}}/{{<T "NO" >}}' href="#VitalControlSettingsPage1_Digit_1">
    <area shape="rect" coords="11,236,88,316" alt='{{<T "RegisterNewOnVitalControlDevice" >}}' title='Κάντε κλικ {{<T "RegisterNewOnVitalControlDevice" >}}' href="#VitalControlSettingsPage1_Digit_2">
    <area shape="rect" coords="11,357,88,434" alt='{{<T "DeleteFromVitalControl" >}}' title='Κάντε κλικ {{<T "DeleteFromVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
    <area shape="rect" coords="31,463,357,508" alt='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' title='Κάντε κλικ {{<T "DoNotDeleteAnimalsYoungerThan" >}}' href="#VitalControlSettingsPage1_Digit_4">
    <area shape="rect" coords="420,236,511,286" alt='{{<T "RegisterNewOnAutomaticFeeder" >}}' title='Κάντε κλικ {{<T "RegisterNewOnAutomaticFeeder" >}}' href="#VitalControlSettingsPage1_Digit_5">
    <area shape="rect" coords="435,352,837,397" alt='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' title='Κάντε κλικ {{<T "FeedingCurveAssignedToImportedAnimals" >}}' href="#VitalControlSettingsPage1_Digit_6">
    <area shape="rect" coords="513,462,837,507" alt='{{<T "DoNotImportAnimalsOlderThan" >}}' title='Κάντε κλικ {{<T "DoNotImportAnimalsOlderThan" >}}' href="#VitalControlSettingsPage1_Digit_7">
    <area shape="rect" coords="142,517,215,616" alt='Σελίδα 2' title='Κάντε κλικ Σελίδα 2' href="#VitalControlSettingsPage1_Digit_8">
</map>

<map name="VitalControlSettingsPage2">
    <area shape="rect" coords="5,208,235,248" alt='{{<T "EarTagNumber" >}}' title='Κάντε κλικ {{<T "EarTagNumber" >}}' href="#VitalControlSettingsPage2_Digit_1">
    <area shape="rect" coords="5,208,235,328" alt='{{<T "AnimalNumber" >}}' title='Κάντε κλικ {{<T "AnimalNumber" >}}' href="#VitalControlSettingsPage2_Digit_2">
    <area shape="rect" coords="5,368,235,408" alt='{{<T "DateOfBirth" >}}' title='Κάντε κλικ {{<T "DateOfBirth" >}}' href="#VitalControlSettingsPage2_Digit_3">
    <area shape="rect" coords="392,116,455,177" alt='{{<T "Feeder" >}}' title='Κάντε κλικ {{<T "Feeder" >}}' href="#VitalControlSettingsPage2_Digit_4">
    <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='Κάντε κλικ {{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
    <area shape="rect" coords="678,97,775,159" alt='{{<T "NoChange_AP" >}}' title='Κάντε κλικ {{<T "NoChange_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
    <area shape="rect" coords="52,510,125,615" alt='Σελίδα 1' title='Κάντε κλικ Σελίδα 1' href="#VitalControlSettingsPage2_Digit_8">
</map>
