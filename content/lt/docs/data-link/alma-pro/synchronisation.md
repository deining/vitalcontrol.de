---
title: Duomenų sinchronizavimas tarp VitalControl ir Alma Pro
linkTitle: Sinchronizavimas
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Sinchronizuokite gyvūnus, saugomus VitalControl įrenginyje, su gyvūnais, registruotais automatiniame šėrykloje, ir perduokite išmatuotas vertes, užregistruotas su VitalControl įrenginiu, į šėryklą vertinimo tikslais ir geresniam vizualizavimui.
weight: 20
categories: [Duomenų mainai, Alma Pro]
translationKey: alma-pro/synchronisation
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Norėdami atlikti sinchronizavimą tarp Alma Pro automatinės šėryklos ir VitalControl įrenginio, atlikite šiuos veiksmus:

## Atidarykite USB prievadą

1. Naudokite mažą atsuktuvą, kad atlaisvintumėte užrakto varžtą ant USB prievado dangtelio ir jį nuleiskite:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Atidarykite USB prievadą" title="Atidarykite USB prievadą" /></a>
        <figcaption class="figure-caption fs-6">1 pav.: Atidarykite USB prievadą</figcaption>
    </figure>

## Prijunkite VitalControl

2. Įjunkite VitalControl įrenginį paspausdami viršutinį centrinį `Įjungti/Išjungti` mygtuką &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Įjungti/Išjungti mygtukas" />.

2. Prijunkite VitalControl įrenginio USB-C lizdą naudodami pateiktą USB kabelį <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> prie jutiklinio ekrano USB-A lizdo <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">2 pav.: VitalControl prijungimas prie Alma Pro</figcaption>
</figure>

### Pradėti sinchronizavimą

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
        Norint pradėti VitalControl įrenginio sinchronizavimą, turite būti prisijungę prie įrenginio kaip vartotojas su vaidmeniu <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Priešingu atveju, <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> mygtukas <a href="#synchronise-vc-ap" >Sinchronizavimo meniu</a> bus išjungtas.
    </div>
</div>

4. Kairiajame jutiklinio terminalo šoniniame meniu spustelėkite antrą mygtuką iš viršaus <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Jei esate pagrindiniame meniu, kuriame nėra matomas šoninis meniu, paspauskite mygtuką &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> norėdami atidaryti feeder meniu.

1. Dešiniajame jutiklinio ekrano terminalo šoniniame skydelyje, po prijungto šėryklos simboliu (-ais), dabar rodomas simbolis <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Skaičius 2 apskritime" title="Skaičius 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl įrenginys" title="VitalControl"/> `{{<T "VitalControl" >}}` įrenginiui. Spustelėkite šį simbolį.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
            Jei simbolis <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl įrenginys" title="VitalControl"/> `{{<T "VitalControl" >}}` įrenginiui dešiniajame šoniniame skydelyje <span style="font-weight: bold;">nerodomas</span>, įrenginys vis dar yra išjungtas nustatymuose. Tokiu atveju, sekite instrukcijas dėl vienkartinio įrenginio <a href="../configuration" >aktyvavimo</a>.
        </div>
    </div>

1. Dabar pasirodys sinchronizacijos ekranas. Spustelėkite mygtuką <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="apskritime esantis skaičius 3" title="skaičius 3" /> `{{<T "Synchronize" >}}` apačioje viduryje, kad pradėtumėte sinchronizaciją su VitalControl įrenginiu.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl sinchronizacija su Alma Pro" title="VitalControl sinchronizacija - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">3 pav.: VitalControl sinchronizacija su Alma Pro automatine šėrykla</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Dėmesio</span><br>
            Jei reikia perkelti daug gyvūnų, sinchronizacija gali užtrukti. Sinchronizacijos eigą galite matyti VitalControl įrenginio ekrane.<br>
            <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Sinchronizacija VitalControl Alma Pro, progreso indikatorius" title="Sinchronizacijos progresas" /></a>
                <figcaption class="figure-caption fs-6">4 pav.: Sinchronizacija VitalControl Alma Pro, progreso indikatorius</figcaption>
            </figure>
        </div>
    </div>

## Uždarykite USB prievadą

7. Po sėkmingos sinchronizacijos atjunkite USB kabelį nuo jutiklinio ekrano USB prievado. Užlenkite apsauginį dangtelį atgal ir pritvirtinkite jį, priverždami užrakinimo varžtą mažu atsuktuvu.

    <figure class="figure" style="margin-top: 10px;">
        <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Uždarykite USB prievadą" title="Uždarykite USB prievadą" /></a>
        <figcaption class="figure-caption fs-6">5 pav.: Uždarykite USB prievadą dar kartą</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Pastaba</span><br>
            Po kiekvienos sinchronizacijos būtinai uždarykite USB prievado dangtelį, kad į prievadą nepatektų drėgmė ir apsaugotumėte prievadą nuo korozinio oro jūsų tvarto aplinkoje!<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Privalomas USB prievado uždarymas" title="Privalomas USB prievado uždarymas" /></a>
                <figcaption class="figure-caption fs-6">6 pav.: Privalomas USB prievado uždarymas</figcaption>
            </figure>
        </div>
    </div>

Prašome įklijuoti Markdown turinį, kurį norite išversti į lietuvių kalbą.
