---
title: "Αλυσίδα ενεργειών: ρύθμιση και χρήση"
linkTitle: "Αλυσίδα ενεργειών"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Εκτέλεση πολλαπλών ενεργειών σε ζώα διαδοχικά
κατηγορίες: [Αλυσίδα ενεργειών]
ετικέτες: [Αλυσίδα ενεργειών, Ενέργειες]
translationKey: action-chain
---
## Αλυσίδα ενεργειών {#chain-of-actions}

Η αλυσίδα ενεργειών σας επιτρέπει να εκτελέσετε αυτόματα πολλές ενέργειες για ένα ζώο, η μία μετά την άλλη. Για παράδειγμα, μπορείτε να επιλέξετε τις ενέργειες `{{<T "Temperature" >}}` και `{{<T "Rating" >}}`. Εάν στη συνέχεια εκτελέσετε την αλυσίδα ενεργειών, μπορείτε πρώτα να πάρετε τη θερμοκρασία του ζώου σας και αμέσως μετά να καταγράψετε την αξιολόγηση.

### Χρήση αλυσίδας ενεργειών {#use-chain-of-actions}

1. Στην κύρια οθόνη της συσκευής σας VitalControl, επιλέξτε το στοιχείο μενού &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Αλυσίδα ενεργειών" />&nbsp; `{{<T "ActionChain" >}}` και πατήστε το κουμπί `{{<T "Ok" >}}`.

2. Είτε σαρώστε ένα ζώο χρησιμοποιώντας τον ανιχνευτή ή επιβεβαιώστε με `{{<T "Ok" >}}` και χρησιμοποιήστε τα πλήκτρα βέλους △ ▽ ◁ ▷ για να εισάγετε το επιθυμητό αναγνωριστικό του ζώου.

3. Η αλυσίδα ενεργειών τώρα εκτελείται. Μόλις όλες οι ενέργειες στην αλυσίδα ενεργειών έχουν πραγματοποιηθεί, το επόμενο ζώο μπορεί να επιλεγεί απευθείας.

{{< tabpane >}}
{{< tab header="Χρήση αλυσίδας ενεργειών:" text=true disabled=true />}}
{{% tab header="Σάρωση με τον ανιχνευτή" text=true %}}
![VitalControl: Μενού αλυσίδας ενεργειών](images/chainofactions-scan.png "Αλυσίδα ενεργειών")
{{% /tab %}}
{{% tab header="Χειροκίνητη επιλογή από τη λίστα" text=true %}}
![VitalControl: Μενού αλυσίδας ενεργειών](images/chainofactions.png "Αλυσίδα ενεργειών")
{{% /tab %}}
{{< /tabpane >}}

### Ρύθμιση αλυσίδας ενεργειών {#set-chain-of-actions}

1. Στην κύρια οθόνη της συσκευής σας VitalControl, επιλέξτε το στοιχείο μενού &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Αλυσίδα ενεργειών" />&nbsp; `{{<T "ActionChain" >}}` και πατήστε το κουμπί `{{<T "Ok" >}}`.

2. Χρησιμοποιήστε το κουμπί `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Αλυσίδα ενεργειών" />&nbsp; (`{{<T "Settings" >}}`).

3. Ένας επικαλυπτόμενος οθόνη εμφανίζεται. Χρησιμοποιήστε τα πλήκτρα βέλους △ ▽ για να επιλέξετε ανάμεσα στις ενέργειες 1 - 4 (μπορείτε να εκτελέσετε έως τέσσερις ενέργειες σε σειρά). Χρησιμοποιήστε τα πλήκτρα βέλους ◁ ▷ για να επιλέξετε την επιθυμητή ενέργεια για την αντίστοιχη ενέργεια. Αποθηκεύστε τις ρυθμίσεις με το κλειδί `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Αποθήκευση και επιστροφή" />&nbsp;.

4. Εάν θέλετε να επαναφέρετε ολόκληρη την αλυσίδα ενεργειών, επιλέξτε την επιλογή `{{<T "ResetActionChain" >}}` στο υπομενού χρησιμοποιώντας τα βελάκια △ ▽ και επιβεβαιώστε με `{{<T "Ok" >}}`.

    ![VitalControl: Menu chain of actions](images/setchainofactions.png "Set chain of actions")

{{% alert title="Συμβουλή" %}}
Μέσα στις ατομικές ενέργειες έχετε τις ίδιες επιλογές ρύθμισης όπως περιγράφονται στο κεφάλαιο [Actions](../actions) για κάθε ατομική ενέργεια.
{{% /alert %}}

{{% alert title="Συμβουλή" %}}
Τα σύμβολα στην αρχική οθόνη της αλυσίδας ενεργειών δείχνουν ποιες ενέργειες έχετε ρυθμίσει και σε ποια σειρά.
{{% /alert %}}
