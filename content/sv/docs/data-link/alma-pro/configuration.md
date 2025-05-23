---
title: Engångsaktivering och konfiguration av enheten i inställningarna för den automatiska mataren
linkTitle: Konfiguration
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Innan du använder VitalControl för första gången måste du aktivera och korrekt konfigurera den en gång i inställningarna för Alma Pro-mataren.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
---
## Krav

Vi rekommenderar att du använder en firmwareversion <span style="font-weight: bold">24-xx-xx</span> eller högre med VitalControl-enheten.\
För att kontrollera vilken firmwareversion som är installerad på din enhet:

* Navigera till matarens startsida genom att klicka på den översta `Hem`-knappen <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Hemskärmsikon" title="Alma Pro: Hemskärm"/>&nbsp; i navigeringsfältet i den vänstra delen av skärmen.
* På hemskärmen klickar du på `Hjälp`-knappen <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Hjälpmenyikon" title="Alma Pro: Hjälpskärm"/>&nbsp; i det övre högra området av skärmen.
* Versionsnumret <span style="font-size: 140%">➂</span> visas nu till vänster om språkväxlingsknappen.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: kontroll av firmwareversion" title="Alma Pro: kontroll av firmwareversion" />
    <figcaption class="figure-caption fs-6">Skärmdump 1: <span style="font-style: italic;">Alma Pro: kontroll av firmwareversion</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uppmärksamhet</span><br>
        Om firmwareversionen på din matare är lägre än <span style="font-weight: bold">24-xx-xx</span>, kan det finnas skillnader mellan skärmdumparna nedan och visningen på din pekskärm, så att du kanske inte kan följa instruktionerna. I detta fall, kontakta din servicetekniker för att uppdatera firmware på din matare.<br>
    </div>
</div>

## Navigering till inställningsmenyn `{{<T "VitalControl" >}}`

{{% alert title="Uppmärksamhet" %}}
För att aktivera och ställa in enheten {{<T "VitalControl" >}}, måste du vara inloggad som användarrollen {{<T "SiteManager" >}} vid den automatiska mataren. Annars kommer vissa av knapparna som visas och beskrivs nedan inte att vara synliga för dig.
{{% /alert %}}

1. Klicka på den nedre knappen <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Inställningsmeny" title="Inställningar"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> i vänstra sidofältet på pekterminalen. Om du är i huvudmenyn där inget sidofält är synligt, tryck på knappen &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Matarmenyn" title="Matarmenyn"/>`{{<T "Feeder" >}}`för att visa sidofältet.

1. Klicka på den andra knappen från vänster <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Pekterminalinställningar" title="Pekinställningar"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> i den nedre verktygsfältet på pekterminalen.

1. En serie menyobjekt visas nu på vänstra halvan av det centrala skärmområdet. Klicka på den nedre knappen `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Ett menyobjekt (eller eventuellt flera) visas nu på högra halvan av det centrala skärmområdet. Klicka på den översta knappen `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Knappen byter nu till vänstra skärmhalvan.

1. Längst ner på högra sidan av skärmen visas nu knappen &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Öppna VitalControl-inställningar" title="Öppna inställningar" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Klicka på denna knapp, och ett popup-fönster öppnas som visar [Sida 1](#settings-menu-vitalcontrol-page-1) av `{{<T "VitalControl" >}}` inställningsmenyn.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" usemap="#NavigationToVitalControlSettingsMenu" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl-inställningar: Åtkomst" title="Åtkomst till VitalControl-inställningsmenyn" />
    <figcaption class="figure-caption fs-6">Skärmdump 1: Åtkomst till <span style="font-style: italic;">{{<T "VitalControl" >}}</span> inställningsmenyn</figcaption>
</figure>

`{{<T "VitalControl" >}}` inställningsmeny är uppdelad på två sidor:

## `{{<T "VitalControl" >}}` Inställningsmeny - Sida 1 {#settings-menu-vitalcontrol-page-1}

Sida 1 av <span style="font-style: italic;">{{<T "VitalControl" >}}</span> inställningsmeny presenteras enligt följande:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" usemap="#VitalControlSettingsPage1" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl inställningsmeny: Sida 1" title="VitalControl inställningar (1)" />
    <figcaption class="figure-caption fs-6">Skärmdump 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> inställningsmeny, Sida 1</figcaption>
</figure>

På denna sida kan du utföra följande åtgärder och inställningar.

### Aktivering av {{<T "VitalControl" >}} Enhet {#activation-vitalcontrol}

I maskinens standardläge är {{<T "VitalControl" >}} avaktiverad. Ställ in <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> omkopplaren <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> till rätt position <span style="font-style: italic;">{{<T "YES" >}}</span> för att aktivera {{<T "VitalControl" >}} enheten. Därefter kommer ikonen <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl enhet" title="VitalControl"/> för `{{<T "VitalControl" >}}` enheten att visas i den högra sidofältet i matarmenyn, under ikonen/ikonerna för den anslutna maskinen/maskinerna (se Skärmdump <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Matarmenyn</a></span>, figur <span style="font-size: 140%">➁</span> där).

### Synkronisering automatisk matare <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

På vänster sida av skärmen finns två kryssrutor:

* Kryssruta <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Detta alternativ styr beteendet om djur finns på mataren under synkronisering som ännu inte är kända för {{<T "VitalControl" >}}-enheten. Detta alternativ är aktiverat som standard och bör vanligtvis förbli inställt. Om du registrerar dina inköpta djur genom att skanna deras djurpass måste detta alternativ inaktiveras.

<span style="font-weight: bold">Aktivera</span> detta alternativ:

- om du har en helt ny {{<T "VitalControl" >}} framför dig, till vilken du vill överföra alla djur från en matare. Efter synkronisering kommer alla djur som är kända för mataren också att finnas på {{<T "VitalControl" >}}.
- om du kontinuerligt tar nya kalvar till mataren under pågående verksamhet. Dessa djur kommer då också att skapas på {{<T "VitalControl" >}}-enheten under synkronisering.

<span style="font-weight: bold">Inaktivera</span> detta alternativ:

- om du har nyss skapade djur på din {{<T "VitalControl" >}} genom att skanna deras djurpass, där
- dessa djur ännu inte har tilldelats en transponder och
- dessa djur redan matas vid mataren och därför är registrerade där.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uppmärksamhet</span><br>
        Om alternativet förblir inställt i ovanstående konfiguration, kommer djur att finnas två gånger på {{<T "VitalControl" >}} efter synkronisering.
    </div>
</div>

* Checkbox <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Detta alternativ styr om djur som endast finns på {{<T "VitalControl" >}} men inte på mataren ska raderas från {{<T "VitalControl" >}} under nästa synkronisering. Om du använder {{<T "VitalControl" >}} endast under djurens mjölkperiod bör detta alternativ aktiveras. Om du vill spåra djuren bortom mjölkperioden måste du inaktivera detta alternativ.

<span style="font-weight: bold">Aktivera</span> detta alternativ:

- om du endast samlar in data för djuren under mjölkperioden,
- om du vill att djuren ska raderas från {{<T "VitalControl" >}} under nästa synkronisering efter att de har raderats från mataren. På så sätt ackumuleras inte djuren på {{<T "VitalControl" >}} över tid.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uppmärksamhet</span><br>
        Om detta alternativ är aktiverat och kryssrutan <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> också är aktiverad, kommer inga djur att raderas som är yngre än det som anges i sifferfältet <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Inaktivera</span> detta alternativ:
- om du vill fortsätta samla in data för djuren efter mjölkperioden, till exempel under en vägning,
- om du är villig att manuellt radera djuren från {{<T "VitalControl" >}} själv.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uppmärksamhet</span><br>
        Om du inaktiverar detta alternativ måste du avlänka transpondern för avvanda djur på {{<T "VitalControl" >}}-enheten senast när halsbandet tas bort från den avvanda kalven till en annan, yngre kalv. Om transpondern inte tas bort, läggs dataregistren för det yngre djuret - som nu bär det tidigare halsbandet från det avvanda djuret - felaktigt till i det avvanda djurets dataset.
    </div>
</div>

### Synkronisering {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automatisk Matare

På höger sida av skärmen finns en kryssruta och två inmatningsfält:

* Kryssruta <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Detta alternativ styr om djur som finns på {{<T "VitalControl" >}}, som är okända för mataren, kommer att skapas på mataren under nästa synkronisering. Som standard är detta alternativ inte aktiverat.

    <span style="font-weight: bold">Inaktivera</span> detta alternativ eller låt det vara inaktiverat:

    - om du använder din {{<T "VitalControl" >}}-enhet på flera matare samtidigt,
    - om du tar dina djur direkt till mataren utan att registrera dem via {{<T "VitalControl" >}}-enheten först. Dina djur kommer då att skapas automatiskt under registreringen när de matas vid mataren för första gången.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uppmärksamhet</span><br>
        Om {{<T "VitalControl" >}} används på flera maskiner och detta alternativ är markerat, kommer djur oavsiktligt att överföras från en maskin till en annan under synkronisering.
    </div>
</div>

<span style="font-weight: bold">Aktivera</span> detta alternativ:

- om den initiala registreringen av deras nyfödda djur med {{<T "VitalControl" >}} sker före den första utfodringen vid mataren.
- om du registrerar dina inköpta djur genom att skanna deras djurpass på {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uppmärksamhet</span><br>
        Aktivera detta alternativ endast om du använder {{<T "VitalControl" >}} på en enda maskin! Om du vill utföra synkronisering med flera maskiner med detta alternativ inställt, måste du använda en separat {{<T "VitalControl" >}}-enhet för varje maskin.
    </div>
</div>

* Rullgardinsmeny <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   I denna rullgardinsmeny kan du välja den fodringskurva som tilldelas djur som nyss skapats på mataren under synkronisering.

* Numeriskt inmatningsfält<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    I detta nummerfält kan du ange den minimiålder (i dagar) från vilken djur nyss skapas på mataren under synkronisering. Djur som är yngre än den angivna minimiåldern **skapas inte** under synkronisering.

Tryck på knappen <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> för att växla till [sida 2](#settings-menu-vitalcontrol-page-2) i <span style="font-style: italic;">inställningsmenyn {{<T "VitalControl" >}}</span>.

## Inställningsmeny `{{<T "VitalControl" >}}` - Sida 2 {#settings-menu-vitalcontrol-page-2}

### Hur man hanterar datakonflikter under synkronisering

Datakonflikter kan uppstå när man synkroniserar data mellan mataren och {{<T "VitalControl" >}}-enheten. En datakonflikt uppstår när data motsäger varandra på {{<T "VitalControl" >}}-enheten och på mataren (t.ex. angående <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). På denna sida 2 av inställningsmenyn kan du ange om och hur datakonflikter löses under synkronisering. Det finns tre alternativ här:

* Prioritet ges till matarens data, data på {{<T "VitalControl" >}}-enheten skrivs över med den från mataren\.
  Aktivera detta alternativ genom att välja radioknappen i den vänstra kolumnen under matarsymbolen <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Prioritet ges till {{<T "VitalControl" >}}-data, data på mataren skrivs över med den från {{<T "VitalControl" >}}-enheten\.
  Aktivera detta alternativ genom att välja radioknappen i den vänstra kolumnen under {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.


* Inga ändringar görs, både matardata och {{<T "VitalControl" >}} enhetsdata förblir oförändrade.\
  Aktivera detta alternativ genom att välja radioknappen i den högra kolumnen <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Exempel</span><br>
            Efter att du har köpt en grupp kalvar registrerar du dina inköpta djur på {{<T "VitalControl" >}} genom att skanna alla deras djurpass. Djurnumren för dessa djur på {{<T "VitalControl" >}} är då – beroende på <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">enhetsinställningarna</a> – de sista 3-5 siffrorna i djurets pass. Du sätter sedan halsband med Urban-transpondrar på de nyinköpta djuren och matar dem vid den automatiska mataren. Under det första besöket på stationen registreras djuren med sin transponder och skapas på nytt vid mataren. Djurnumren för dessa nya djur på mataren härleds dock från transpondernummret eller motsvarar djurnumret som lagrats för denna transponder i mataren. Detta innebär att ett annat djurnummer nu har tilldelats samma djur på {{<T "VitalControl" >}} enheten och på mataren, vilket resulterar i en datakonflikt. Med hjälp av radioknapparna för <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, kan du nu specificera i inställningsmenyn vilket av de två parallella djurnumren som har prioritet och vilket som kommer att raderas under synkroniseringen.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" usemap="#VitalControlSettingsPage2" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Inställningsmeny VitalControl: Sida 2" title="Inställningar VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Skärmdump 3: Inställningsmeny <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Sida 2</figcaption>
</figure>


<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uppmärksamhet</span><br>
        Av interna skäl kan ändringar för närvarande endast göras på <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. I senare firmware-versioner kan du också göra ändringar på <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> och <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Genom att trycka på <span style="font-style: italic;">knappen</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> kommer du tillbaka till [sida 1](#settings-menu-vitalcontrol-page-1) i `{{<T "VitalControl" >}}` inställningsmenyn.

<map name="NavigationToVitalControlSettingsMenu">
    <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='Klicka {{<T "Settings" >}}' href="#Navigation_Digit_1">
    <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='Klicka {{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
    <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='Klicka {{<T "Accessories" >}}' href="#Navigation_Digit_3">
    <area shape="rect" coords="520,150,870,197" alt='Temperature" title="Klicka {{<T "Synchronize" >}}' href="#Navigation_Digit_4">
    <area shape="rect" coords="580,582,850,636" alt='Temperature" title="Klicka {{<T "Synchronize" >}}' href="#Navigation_Digit_5">
</map>

The content you provided is primarily composed of HTML map elements and translation keys, which do not require translation. If you have any additional text that needs translation, please provide it.
