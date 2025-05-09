---
title: "Tworzenie kopii zapasowej danych"
linkTitle: "Kopia zapasowa"
date: 2023-07-20
weight: 20
description: >
  Za pomocą kopii zapasowej danych tworzony jest plik kopii zapasowej, który zawiera wszystkie dane przechowywane na urządzeniu VitalControl.
kategorie: [Kopia zapasowa danych]
tagi: [plik kopii zapasowej, pendrive USB]
translationKey: backup
---
{{% usb-drive/en "Aby wykonać kopię zapasową danych dla swojego urządzenia," %}}

## Wykonaj kopię zapasową danych {#perform-data-backup}

1. Otwórz pozycję menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` na głównym ekranie swojego urządzenia VitalControl.

2. Wywołaj podmenu `{{< T "DataManagement" >}}` i wybierz następnie pozycję podmenu `{{< T "DataBackup" >}}`. Teraz wybierz pozycję menu `{{< T "CreateBackup" >}}` i potwierdź `OK`. Teraz zostaniesz poproszony o włożenie pendrive'a USB:

   ![VitalControl: ścieżka menu kopii zapasowej danych](../images/backup.png "Wywołaj kopię zapasową danych")

3. Włóż pendrive USB (wtyczka C) do złącza na dole urządzenia.

   <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" style="max-width: 500px; width: 100%;" align="bottom" alt="VitalControl:Włóż pamięć USB" title="Włóż pamięć USB" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Rysunek 2: Wkładanie pamięci USB do VitalControl</figcaption></a>
   </figure>

4. Gdy urządzenie wykryje włożenie pendrive'a, kopia zapasowa danych zostanie automatycznie uruchomiona. Zbieranie, kompresowanie i zapisywanie danych kopii zapasowej może potrwać minutę lub dłużej. Po zakończeniu kopii zapasowej wyświetlony zostanie komunikat o sukcesie:

   ![VitalControl: komunikat o sukcesie kopii zapasowej](../images/backup-done.png "Sukces kopii zapasowej danych")

5. Kopia zapasowa danych została utworzona. Znajdziesz utworzony plik `backup.vcu` w katalogu `backup` na swoim pendrive'ie USB. Plik kopii zapasowej wymaga około 1 MB miejsca na pendrive'ie.

   ![Pendrive USB z plikiem kopii zapasowej VitalControl](../images/backup-file.png "Pendrive USB z plikiem kopii zapasowej")

   {{% alert title="Wskazówka" %}}
  Jeśli plik `backup.vcu` już istnieje w katalogu `backup` na twoim pendrive'ie USB, ten plik zostanie przemianowany. Nowa nazwa pliku składa się z wiodącego ciągu `backup` oraz daty i godziny utworzenia pliku kopii zapasowej (np. `backup_2023-07-17_12-50-37.vcb`). Nowo zapisany plik kopii zapasowej zawsze nosi nazwę `backup.vcu`.
    {{% /alert %}}


6. Utworzony plik kopii zapasowej może być użyty do [przywrócenia](../restore) przechowywanych danych na dowolne urządzenie VitalControl, jeśli zajdzie taka potrzeba.
