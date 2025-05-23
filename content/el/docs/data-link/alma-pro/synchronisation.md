---
title: Συγχρονισμός δεδομένων μεταξύ VitalControl και Alma Pro
linkTitle: Συγχρονισμός
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Συγχρονίστε τα ζώα που είναι αποθηκευμένα στη συσκευή VitalControl με τα ζώα που είναι καταχωρημένα στην αυτόματη ταΐστρα και μεταφέρετε τις μετρημένες τιμές που έχουν καταγραφεί με τη συσκευή VitalControl στην ταΐστρα για σκοπούς αξιολόγησης και καλύτερης οπτικοποίησης.
weight: 20
categories: [Ανταλλαγή δεδομένων, Alma Pro]
translationKey: alma-pro/synchronisation
aliases: /vc/sync/el
---

Για να πραγματοποιήσετε συγχρονισμό μεταξύ της αυτόματης ταΐστρας Alma Pro και της συσκευής VitalControl, ακολουθήστε τα εξής βήματα:

## Άνοιγμα θύρας USB

1. Χρησιμοποιήστε ένα μικρό κατσαβίδι για να χαλαρώσετε τη βίδα κλειδώματος στο καπάκι της θύρας USB και αναδιπλώστε το:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Άνοιγμα θύρας USB" title="Άνοιγμα θύρας USB" /></a>
        <figcaption class="figure-caption fs-6">Εικόνα 1: Άνοιγμα θύρας USB</figcaption>
    </figure>

## Σύνδεση VitalControl

2. Ενεργοποιήστε τη συσκευή VitalControl πατώντας το κεντρικό πάνω κουμπί `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Κουμπί On/Off" />.

2. Συνδέστε την υποδοχή USB-C της συσκευής VitalControl χρησιμοποιώντας το παρεχόμενο καλώδιο USB <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> με την υποδοχή USB-A της οθόνης αφής <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

    <figure class="figure" style="margin-top: 10px;">
        <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Σχήμα 2: Σύνδεση του VitalControl με το Alma Pro</figcaption>
    </figure>

### Έναρξη συγχρονισμού

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Προσοχή</span><br>
        Για να ξεκινήσετε τον συγχρονισμό της συσκευής VitalControl, πρέπει να είστε συνδεδεμένοι στη μηχανή με το ρόλο χρήστη <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Διαφορετικά, το κουμπί <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> στο <a href="#synchronise-vc-ap" >μενού Συγχρονισμού</a> είναι απενεργοποιημένο.
    </div>
</div>

4. Στην αριστερή πλαϊνή μπάρα του τερματικού αφής, κάντε κλικ στο δεύτερο κουμπί από την κορυφή <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Αν βρίσκεστε στο κύριο μενού όπου δεν είναι ορατή η πλαϊνή μπάρα, πατήστε το κουμπί &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> για να ανοίξετε το μενού τροφοδότη.

1. Στη δεξιά πλαϊνή μπάρα του τερματικού αφής, κάτω από το σύμβολο(-α) για τον συνδεδεμένο τροφοδότη(-ες), εμφανίζεται τώρα το σύμβολο <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> για τη συσκευή `{{<T "VitalControl" >}}`. Κάντε κλικ σε αυτό το σύμβολο.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Προσοχή</span><br>
            Αν το σύμβολο <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> για τη συσκευή <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> στη δεξιά πλαϊνή μπάρα <span style="font-weight: bold;">δεν</span> εμφανίζεται, η συσκευή είναι ακόμα απενεργοποιημένη στις ρυθμίσεις. Σε αυτή την περίπτωση, ακολουθήστε τις οδηγίες για την εφάπαξ <a href="../configuration" >ενεργοποίηση</a> της συσκευής.
        </div>
    </div>

1. Η οθόνη συγχρονισμού θα εμφανιστεί τώρα. Κάντε κλικ στο κουμπί <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="circled number 3" title="number 3" /> `{{<T "Synchronize" >}}` στο κέντρο στο κάτω μέρος για να ξεκινήσετε το συγχρονισμό με τη συσκευή VitalControl.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronisation VitalControl with Alma Pro" title="Synchronisation VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Εικόνα 3: Συγχρονισμός του VitalControl με τον αυτόματο τροφοδότη Alma Pro</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Προσοχή</span><br>
            Εάν πρέπει να μεταφερθούν πολλά ζώα, η συγχρονισμός μπορεί να διαρκέσει κάποιο χρόνο. Μπορείτε να δείτε την πρόοδο του συγχρονισμού στην οθόνη της συσκευής VitalControl.<br>
            <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Συγχρονισμός VitalControl Alma Pro, δείκτης προόδου" title="Πρόοδος συγχρονισμού" /></a>
                <figcaption class="figure-caption fs-6">Εικόνα 4: Συγχρονισμός VitalControl Alma Pro, δείκτης προόδου</figcaption>
            </figure>
        </div>
    </div>

## Κλείσιμο θύρας USB

7. Μετά την επιτυχή συγχρονισμό, αποσυνδέστε το καλώδιο USB από τη θύρα USB στην οθόνη αφής. Αναδιπλώστε το προστατευτικό κάλυμμα της θύρας και ασφαλίστε το σφίγγοντας τη βίδα κλειδώματος με ένα μικρό κατσαβίδι.

    <figure class="figure" style="margin-top: 10px;">
        <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Κλείσιμο θύρας USB" title="Κλείσιμο θύρας USB" /></a>
        <figcaption class="figure-caption fs-6">Εικόνα 5: Κλείσιμο θύρας USB ξανά</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Σημείωση</span><br>
            Βεβαιωθείτε ότι κλείνετε το κάλυμμα της θύρας USB μετά από κάθε συγχρονισμό για να αποτρέψετε την είσοδο υγρασίας στη θύρα και να προστατεύσετε τη θύρα από τον διαβρωτικό αέρα που υπάρχει στο στάβλο σας!<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Υποχρεωτικό κλείσιμο θύρας USB" title="Υποχρεωτικό κλείσιμο θύρας USB" /></a>
                <figcaption class="figure-caption fs-6">Εικόνα 6: Υποχρεωτικό κλείσιμο θύρας USB</figcaption>
            </figure>
        </div>
    </div>
