---
title: Tietojen vienti USB-muistitikulle
linkTitle: USB-muistitikulle
date: 2023-07-20
weight: 10
description: >
  Vie CVS-tiedostoja, jotka sisältävät eläintietoja ja mittausarvoja VitalControl-laitteesta USB-muistitikulle.
luokat: [Tietojen vienti]
tagit: [CSV-tiedostot, USB-muistitikku]
translationKey: data-export/usb-drive
---
{{% usb-drive/fi "Jotta voit viedä laitteesi tiedot," %}}

## Suorita tietojen vienti {#perform-data-export}

1. Avaa valikkokohta &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Laite" /> `{{<T "Device" >}}` päävalikosta VitalControl-laitteellasi.

2. Kutsu esiin alivalikko `{{<T "DataManagement" >}}`, valitse valikkokohta `{{<T "AnimalData" >}}` ja vahvista valinta `{{<T "Ok" >}}`:lla.

3. Toinen alivalikko avautuu. Valitse valikkokohta `{{<T "ExportAnimalData" >}}` ja vahvista `{{<T "Ok" >}}`.

   ![VitalControl: Valikkopolku tietojen vientiin](../images/data-export.png "Käynnistä tietojen vienti")

4. Aseta USB-muistitikku (C-liitin) laitteen alaosassa olevaan liittimeen.

   ![VitalControl: aseta USB-muistitikku](/images/firmware/update/plug-in-dual-usb-stick.svg "Aseta USB-muistitikku")

5. Kun laite on havainnut USB-tikun, tietojen vienti käynnistyy automaattisesti. Varmuuskopiotietojen kirjoittaminen voi kestää muutaman sekunnin. Kun tietojen vienti on valmis, näytölle tulee onnistumisilmoitus:

   ![VitalControl: onnistumisilmoitus tietojen viennistä](../images/success-data-export.png "Onnistunut tietojen vienti")

6. Tietojen vienti on nyt valmis. Löydät neljä luotua [vientitiedostoa](../export-files/) `export-csv`-kansiosta USB-muistitikultasi.

   ![USB-muistitikku vientitiedostoilla VitalControl](../images/export-files.png "Vientitiedostot USB-muistitikulla")

   {{% alert title="Huomautuksia" %}}
  - Vientitiedostojen tahattoman ylikirjoittamisen estämiseksi jokaisen vientitiedoston nimeen sisältyy aina päivämäärä ja aika, jolloin tiedosto luotiin. Varmista, että käytät uusinta versiota vientitiedostoista, jos olet vienyt eläintietoja useita kertoja.
  - Vientitiedostojen koko riippuu VitalControl-laitteessa olevien eläinten määrästä ja suoritettujen mittausten määrästä. Yleensä vientitiedostot vievät vain muutaman kB tallennustilaa USB-tikulla.
   {{% /alert %}}
