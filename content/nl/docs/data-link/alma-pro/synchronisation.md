---
title: Gegevenssynchronisatie tussen VitalControl en Alma Pro
linkTitle: Synchronisatie
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Synchroniseer de dieren die zijn opgeslagen op het VitalControl-apparaat met dieren die zijn geregistreerd op de automatische voederbak en draag gemeten waarden die zijn opgenomen met het VitalControl-apparaat over naar de voederbak voor evaluatiedoeleinden en betere visualisatie.
weight: 20
categories: [Gegevensuitwisseling, Alma Pro]
translationKey: alma-pro/synchronisation
maphilight: true
aliases: /vc/sync/nl
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Om synchronisatie uit te voeren tussen de Alma Pro automatische voederbak en het VitalControl-apparaat, gaat u als volgt te werk:

## Open USB-poort

1. Gebruik een kleine schroevendraaier om de vergrendelingsschroef op de klep van de USB-poort los te draaien en klap deze naar beneden:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Open USB-poort" title="Open USB-poort" /></a>
        <figcaption class="figure-caption fs-6">Figuur 1: Open USB-poort</figcaption>
    </figure>

## Verbind VitalControl

2. Schakel het VitalControl-apparaat in door op de bovenste centrale `Aan/Uit`-knop te drukken &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Aan/Uit-knop" />.

2. Verbind de USB-C-aansluiting van het VitalControl-apparaat met behulp van de meegeleverde USB-kabel <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> met de USB-A-aansluiting van het touchscreen <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Figuur 2: Verbinding maken van VitalControl met Alma Pro</figcaption>
</figure>

### Start synchronisatie

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Let op</span><br>
        Om de synchronisatie van het VitalControl-apparaat te starten, moet u aangemeld zijn op de machine in de gebruikersrol <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Anders is de knop <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> in het <a href="#synchronise-vc-ap" >Synchronisatiemenu</a> uitgeschakeld.
    </div>
</div>

4. Klik in de linker zijbalk van de touch terminal op de tweede knop van boven <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" id="StartSynchronisation_Digit_1" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Als u in het hoofdmenu bent waar geen zijbalk zichtbaar is, druk dan op de knop &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> om het feeder menu te openen.

1. In de rechter zijbalk van de touchscreen-terminal, onder het symbool/de symbolen voor de aangesloten feeder(s), wordt nu het symbool <img src="/digits/2_negative_circled.svg" id="StartSynchronisation_Digit_2" width="25" align="middle" alt="Cijfer 2 in cirkel" title="Cijfer 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl apparaat" title="VitalControl"/> voor het `{{<T "VitalControl" >}}` apparaat weergegeven. Klik op dit symbool.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Let op</span><br>
            Als het symbool <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl apparaat" title="VitalControl"/> voor het <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> apparaat in de rechter zijbalk <span style="font-weight: bold;">niet</span> wordt weergegeven, is het apparaat nog steeds gedeactiveerd in de instellingen. Volg in dat geval de instructies voor eenmalige <a href="../configuration" >activatie</a> van het apparaat.
        </div>
    </div>

1. Het synchronisatiescherm verschijnt nu. Klik op de knop <img src="/digits/3_negative_circled.svg" id="StartSynchronisation_Digit_3" width="25" align="middle" alt="omcirkeld nummer 3" title="nummer 3" /> `{{<T "Synchronize" >}}` in het midden onderaan om de synchronisatie met het VitalControl apparaat te starten.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
<div style="padding: 12px;">
    <img
        src="../images/synchronise-vitalcontrol-alma-pro.png"
        alt="Synchronisatie van VitalControl met Alma Pro automatische feeder"
        usemap="#syncmap"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid"
        align="bottom"
        title="Synchronisatie van VitalControl met Alma Pro automatische feeder" />
</div>
<map name="syncmap">
    <area shape="rect" coords="15,115,112,190" alt="Feeder" title='{{<T "Feeder" >}}' href="#StartSynchronisation_Digit_1">
    <area shape="rect" coords="844,240,1012,282" alt="Temperature" title='{{<T "VitalControl" >}}' href="#StartSynchronisation_Digit_2">
    <area shape="rect" coords="361,570,612,620" alt="Temperature" title='{{<T "Synchronize" >}}' href="#StartSynchronisation_Digit_3">
</map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Figuur 3: Synchronisatie van VitalControl met Alma Pro automatische feeder
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Let op</span><br>
        Als veel dieren moeten worden overgezet, kan de synchronisatie enige tijd duren. U kunt de voortgang van de synchronisatie zien op het display van het VitalControl-apparaat.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Synchronisatie VitalControl Alma Pro, voortgangsindicator" title="Synchronisatie voortgang" /></a>
            <figcaption class="figure-caption fs-6">Figuur 4: Synchronisatie VitalControl Alma Pro, voortgangsindicator</figcaption>
        </figure>
    </div>
</div>

## Sluit USB-poort

7. Na succesvolle synchronisatie, haal de USB-kabel uit de USB-poort op het touchscreen. Klap de beschermkap van de poort weer omhoog en zet deze vast door de vergrendelingsschroef aan te draaien met een kleine schroevendraaier.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Sluit USB-poort" title="Sluit USB-poort" /></a>
    <figcaption class="figure-caption fs-6">Figuur 5: Sluit USB-poort opnieuw</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Opmerking</span><br>
        Zorg ervoor dat u het klepje van de USB-poort na elke synchronisatie sluit om te voorkomen dat er vocht in de poort komt en om de poort te beschermen tegen de corrosieve lucht in uw stal!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Verplicht sluiten van USB-poort" title="Verplicht sluiten van USB-poort" /></a>
            <figcaption class="figure-caption fs-6">Figuur 6: Verplicht sluiten van USB-poort</figcaption>
        </figure>
    </div>
</div>
