---
title: "Tietojen varmuuskopiointi"
linkTitle: "Varmuuskopio"
date: 2023-07-20
weight: 20
description: >
  Tietojen varmuuskopioinnin avulla luodaan varmuuskopiotiedosto, joka sisältää kaikki VitalControl-laitteessa tallennetut tiedot.
luokat: [Tietojen varmuuskopiointi]
tagit: [varmuuskopiotiedosto, USB-muistitikku]
translationKey: backup
---
{{% usb-drive/fi "Jotta voit suorittaa laitteellesi tietojen varmuuskopioinnin," %}}

## Suorita tietojen varmuuskopiointi {#perform-data-backup}
 
1. Avaa valikkokohta &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Laite" /> `Laite` päävalikossa VitalControl-laitteellasi.

2. Kutsu alavalikko `Tiedonhallinta` ja valitse sen jälkeen alavalikkokohta `Datan vaermuuskopio`. Valitse nyt valikkokohta `Luo varmuuskopio` ja vahvista `OK`. Sinua pyydetään nyt asettamaan USB-muistitikku:

   ![VitalControl: valikkopolku tietojen varmuuskopiointiin](../images/backup.png "Kutsu tietojen varmuuskopiointi")

3. Aseta USB-muistitikku (C-liitin) laitteen alaosassa olevaan liittimeen.

   <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" style="max-width: 500px; width: 100%;" align="bottom" alt="VitalControl: Aseta USB-tikku" title="Aseta USB-tikku" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Kuva 2: Aseta USB-tikku VitalControliin</figcaption></a>
   </figure>

4. Kun laite on havainnut USB-tikun asettamisen, tietojen varmuuskopiointi käynnistyy automaattisesti. Tietojen kerääminen, pakkaaminen ja varmuuskopiotiedoston kirjoittaminen voi kestää minuutin tai kauemmin. Kun varmuuskopiointi on valmis, näytölle tulee onnistumisilmoitus:

   ![VitalControl: onnistumisilmoitus varmuuskopiosta](../images/backup-done.png "Onnistunut tietojen varmuuskopiointi")

5. Tietojen varmuuskopio on nyt luotu. Löydät luodun tiedoston `backup.vcu` hakemistosta `backup` USB-muistitikultasi. Varmuuskopiotiedosto vaatii noin 1 MB tallennustilaa muistitikulla.

   ![USB-muistitikku varmuuskopiotiedostolla VitalControl](../images/backup-file.png "USB-muistitikku varmuuskopiotiedostolla")

   {{% alert title="Vihje" %}}
  Jos tiedosto `backup.vcu` on jo olemassa USB-muistitikkusi `backup`-hakemistossa, tämä tiedosto nimetään uudelleen. Uuden tiedoston nimi koostuu johtavasta merkkijonosta `backup` sekä varmuuskopiotiedoston luomispäivämäärästä ja -ajasta (esim. `backup_2023-07-17_12-50-37.vcb`). Uusi kirjoitettu varmuuskopiotiedosto on aina nimeltään `backup.vcu`.
    {{% /alert %}}

6. Luotua varmuuskopiota voidaan käyttää [palauttamaan](../restore) tallennetut tiedot mihin tahansa VitalControl-laitteeseen tarvittaessa.
