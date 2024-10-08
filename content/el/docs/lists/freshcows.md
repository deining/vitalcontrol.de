---
title: "Λίστα φρέσκων αγελάδων"
linkTitle: "Λίστα φρέσκων αγελάδων"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Διευκολύνετε τον έλεγχο των φρέσκων αγελάδων σας.
κατηγορίες: [Λίστες]
ετικέτες: [Λίστες, φρέσκια αγελάδα]
translationKey: lists/fresh-cows
---
### Λίστα φρέσκων αγελάδων {#fresh-cows-list}

{{% alert title="Εξήγηση" %}}
Κατά τη διαχείριση φρέσκων αγελάδων, ο έλεγχος των ζώων καθημερινά για αρκετές ημέρες μετά τη γέννηση θεωρείται καλή πρακτική. Η λίστα φρέσκων αγελάδων διευκολύνει αυτόν τον έλεγχο, ειδικά όσον αφορά την καταγραφή της θερμοκρασίας. Για κάθε ζώο, εμφανίζεται ένα γράφημα στήλης για όλες τις ημέρες της περιόδου ελέγχου, κάθε ημέρα της περιόδου ελέγχου αντιπροσωπεύεται από μια κάθετη στήλη. Ανάλογα με το χρώμα της στήλης (πράσινο, κίτρινο ή κόκκινο), μπορείτε να δείτε αν μετρήθηκε κανονική, αυξημένη ή κρίσιμα αυξημένη θερμοκρασία εκείνη την ημέρα για το αντίστοιχο ζώο.
{{% /alert %}}

Οι αγελάδες τοποθετούνται στη λίστα φρέσκων αγελάδων αμέσως μετά την καταχώρηση του τοκετού τους. Παραμένουν σε αυτή τη λίστα για ένα συγκεκριμένο χρονικό διάστημα, το μήκος αυτού του διαστήματος (σε ημέρες) μπορεί να ρυθμιστεί στις [ρυθμίσεις](../../settings/data-acquisition/#control-period-of-fresh-cows)).
 Οι ακόλουθες ενέργειες είναι διαθέσιμες για αυτή τη λίστα:

- [Πλήρες μενού ενεργειών](../alarm/#full-action-menu)
- [Δεδομένα ζώου](../alarm/#animal-data)
- [Μέτρηση θερμοκρασίας](../alarm/#take-temperature)
- [Εναλλαγή κατάστασης συναγερμού](#toggle-alarm-status)
- [Εναλλαγή κατάστασης παρακολούθησης](#toggle-watch-status)
- [Απόκρυψη μετρημένων αγελάδων](#hide-measured-cows)
- [Αναζήτηση ζώου](../alarm/#search-animal)
- [Ορισμός φίλτρου](../alarm/#set-filter)

{{% alert title="Συμβουλή" %}}
Ορισμένες ενέργειες πραγματοποιούνται με τον ίδιο τρόπο όπως στη [λίστα συναγερμών](../alarm). Δεν εξηγούνται εδώ. Εκτελέστε τα προκαταρκτικά βήματα και χρησιμοποιήστε τον σύνδεσμο της αντίστοιχης ενέργειας για να πάτε στις οδηγίες.
{{% /alert %}}

### Προκαταρκτικά Βήματα {#preliminary-steps}

1. Επιλέξτε το στοιχείο μενού <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Λίστες" /> `{{<T "Lists" >}}` στην κύρια οθόνη της συσκευής σας VitalControl και πατήστε το κουμπί `{{<T "Ok" >}}`.

2. Ένα υπομενού ανοίγει στο οποίο εμφανίζονται διάφορες λίστες. Επιλέξτε τη λίστα `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Επιβεβαιώστε με `{{<T "Ok" >}}`.

3. Η λίστα των φρέσκων αγελάδων είναι τώρα ανοιχτή.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Λίστα φρέσκων αγελάδων")

### Εναλλαγή κατάστασης συναγερμού {#toggle-alarm-status}

1. Ολοκληρώστε τα προκαταρκτικά βήματα.

2. Χρησιμοποιήστε το κλειδί `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; για να καλέσετε ένα αναδυόμενο μενού που εμφανίζει τις δυνατές ενέργειες όταν πατάτε το κλειδί `{{<T "Ok" >}}`. Χρησιμοποιήστε τα βελάκια △ ▽ για να επιλέξετε την ενέργεια `{{<T "ToggleAlarmStatus" >}}` και επιλέξτε αυτή την επιλογή πατώντας το κεντρικό κουμπί `{{<T "Ok" >}}` ή το κλειδί `F3` `{{<T "Ok" >}}`.

3. Μέσα στη λίστα των φρέσκων αγελάδων, χρησιμοποιήστε τα βελάκια △ ▽ για να επιλέξετε το επιθυμητό ζώο και επιβεβαιώστε με `{{<T "Ok" >}}`. Εναλλακτικά, μπορείτε να αναζητήσετε ένα ζώο. Χρησιμοποιήστε το κουμπί `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> και χρησιμοποιήστε τα βελάκια ◁ ▷ △ ▽ για να επιλέξετε τα επιθυμητά ψηφία. Τελικά επιβεβαιώστε με `{{<T "Ok" >}}`.

4. Το ζώο προστίθεται τώρα ή αφαιρείται από τη λίστα ειδοποίησης ανάλογα με την αρχική του κατάσταση.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Εναλλαγή κατάστασης συναγερμού")

### Εναλλαγή κατάστασης παρακολούθησης {#toggle-watch-status}

1. Ολοκληρώστε τα προκαταρκτικά βήματα.

2. Χρησιμοποιήστε το κλειδί `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; για να καλέσετε ένα αναδυόμενο μενού που εμφανίζει τις δυνατές ενέργειες όταν πατάτε το κλειδί `{{<T "Ok" >}}`. Χρησιμοποιήστε τα βελάκια △ ▽ για να επιλέξετε την ενέργεια `{{<T "ToggleWatchStatus" >}}` και επιλέξτε αυτή την επιλογή πατώντας το κεντρικό κουμπί `{{<T "Ok" >}}` ή το κλειδί `F3` `{{<T "Ok" >}}`.

3. Μέσα στη λίστα των φρέσκων αγελάδων, χρησιμοποιήστε τα βελάκια △ ▽ για να επιλέξετε το επιθυμητό ζώο και επιβεβαιώστε με `{{<T "Ok" >}}`. Εναλλακτικά, μπορείτε να αναζητήσετε ένα ζώο. Χρησιμοποιήστε το κουμπί `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> και χρησιμοποιήστε τα βελάκια ◁ ▷ △ ▽ για να επιλέξετε τα επιθυμητά ψηφία. Τελικά επιβεβαιώστε με `{{<T "Ok" >}}`.

4. Το ζώο προστίθεται τώρα ή αφαιρείται από τη λίστα παρακολούθησης ανάλογα με την αρχική του κατάσταση.

![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Toggle watch status")

### Απόκρυψη μετρημένων αγελάδων {#hide-measured-cows}

Εάν αυτή η λειτουργία ενεργοποιηθεί, τα ζώα για τα οποία έχει γίνει μέτρηση θερμοκρασίας κρύβονται από τη λίστα των ξηρών αγελάδων. Εάν αυτή η λειτουργία δεν ενεργοποιηθεί, τα ζώα παραμένουν ορατά στη λίστα.

1. Ολοκληρώστε τα προκαταρκτικά βήματα.

2. Χρησιμοποιήστε το πλήκτρο `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; για να εμφανίσετε ένα αναδυόμενο μενού που περιλαμβάνει διάφορες επιλογές. Χρησιμοποιήστε τα πλήκτρα βελών △ ▽ για να επιλέξετε την επιλογή `{{<T "HideMeasuredCows" >}}` και ενεργοποιήστε αυτή την επιλογή πατώντας το κεντρικό πλήκτρο `{{<T "Ok" >}}` ή το πλήκτρο `F3` `{{<T "Ok" >}}`.

3. Στη λίστα των φρέσκων αγελάδων, χρησιμοποιήστε τα πλήκτρα βελών △ ▽ για να επιλέξετε το επιθυμητό ζώο και επιβεβαιώστε με `{{<T "Ok" >}}`. Εναλλακτικά, μπορείτε να αναζητήσετε ένα ζώο. Χρησιμοποιήστε το πλήκτρο `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> και χρησιμοποιήστε τα πλήκτρα βελών ◁ ▷ △ ▽ για να επιλέξετε τα επιθυμητά ψηφία. Τελικά επιβεβαιώστε με `{{<T "Ok" >}}`.

4. Η λειτουργία `{{<T "HideMeasuredCows" >}}` είναι τώρα ενεργοποιημένη. Η ενεργοποίηση ενδείκνυται με την τσεκαρισμένη επιλογή.

![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Hide measured cows")
