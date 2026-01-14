---
title: Activation unique et configuration de l'appareil dans les paramètres de l'alimentation automatique
linkTitle: Configuration
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Avant d'utiliser le VitalControl pour la première fois, vous devez l'activer et le configurer correctement une fois dans les paramètres de l'alimentation Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/fr
---
## Exigences

Nous recommandons d'utiliser une version de firmware <span style="font-weight: bold">25-04-Vxx</span> ou supérieure avec l'appareil VitalControl.\
Pour vérifier quelle version de firmware est installée sur votre appareil :

* Accédez à la page d'accueil de l'alimentation en cliquant sur le bouton `Accueil` en haut <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Icône de l'écran d'accueil" title="Alma Pro : Écran d'accueil"/>&nbsp; dans la barre de navigation à gauche de l'écran.
* Sur l'écran d'accueil, cliquez sur le bouton `Aide` <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Icône du menu d'aide" title="Alma Pro : Écran d'aide"/>&nbsp; dans la partie supérieure droite de l'écran.
* Le numéro de version <span style="font-size: 140%">➂</span> est maintenant affiché à gauche du bouton de changement de langue.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro : vérification de la version du firmware" title="Alma Pro : vérification de la version du firmware" />
    <figcaption class="figure-caption fs-6">Capture d'écran 1 : <span style="font-style: italic;">Alma Pro : vérification de la version du firmware</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alerte :">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        Si la version du firmware de votre alimentation est inférieure à <span style="font-weight: bold">25-04-Vxx</span>, il peut y avoir des divergences entre les captures d'écran ci-dessous et l'affichage sur votre écran tactile, de sorte que vous ne pourrez peut-être pas suivre les instructions. Dans ce cas, contactez votre technicien de service pour mettre à jour le firmware de votre alimentation.<br>
    </div>
</div>

## Navigation vers le menu des paramètres `{{% T "VitalControl" %}}`

{{% alert title="Attention" %}}
Pour activer et configurer le dispositif {{<T "VitalControl" >}}, vous devez être connecté en tant qu'utilisateur avec le rôle {{<T "SiteManager" >}} sur le distributeur automatique. Sinon, certains des boutons affichés et décrits ci-dessous ne seront pas visibles pour vous.
{{% /alert %}}

1. Cliquez sur le bouton du bas <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Menu des paramètres" title="Paramètres"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> dans la barre latérale gauche du terminal tactile. Si vous êtes dans le menu principal où aucune barre latérale n'est visible, appuyez sur le bouton &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Menu du distributeur" title="Menu du distributeur"/>`{{<T "Feeder" >}}`pour afficher la barre latérale.

1. Cliquez sur le deuxième bouton à partir de la gauche <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Paramètres du terminal tactile" title="Paramètres tactiles"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> dans la barre d'outils inférieure du terminal tactile.

1. Une série d'éléments de menu apparaît maintenant sur la moitié gauche de la zone centrale de l'écran. Cliquez sur le bouton du bas `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Un élément de menu (ou peut-être plusieurs) apparaît maintenant sur la moitié droite de la zone centrale de l'écran. Cliquez sur le bouton du haut `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Le bouton passe maintenant à la moitié gauche de l'écran.

1. En bas à droite de l'écran, le bouton &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Ouvrir les paramètres de VitalControl" title="Ouvrir les paramètres" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span> est maintenant affiché. Cliquez sur ce bouton, et une fenêtre popup s'ouvrira, affichant [Page 1](#settings-menu-vitalcontrol-page-1) du menu des paramètres `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="Paramètres de VitalControl: Accès"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Accéder au menu des paramètres de VitalControl" />
    </div>
    <map name="NavigationToVitalControlSettingsMenu">
        <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='{{<T "Settings" >}}' href="#Navigation_Digit_1">
        <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='{{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
        <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='{{<T "Accessories" >}}' href="#Navigation_Digit_3">
        <area shape="rect" coords="520,150,870,197" alt='{{<T "VitalControl" >}}' title='{{<T "VitalControl" >}}' href="#Navigation_Digit_4">
        <area shape="rect" coords="580,582,850,636" alt='{{<T "OpenSettings" >}}' title='{{<T "OpenSettings" >}}' href="#Navigation_Digit_5">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Capture d'écran 2: Accéder au menu des paramètres <span style="font-style: italic;">{{<T "VitalControl" >}}
</figcaption>

Le menu des paramètres `{{<T "VitalControl" >}}` est réparti sur deux pages :

## Menu des Paramètres `{{% T "VitalControl" %}}` - Page 1 {#settings-menu-vitalcontrol-page-1}

La page 1 du menu des paramètres <span style="font-style: italic;">{{<T "VitalControl" >}}</span> se présente comme suit :

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="Menu des paramètres VitalControl: Page 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Paramètres VitalControl (1)" />
    </div>
    <map name="VitalControlSettingsPage1">
        <area shape="rect" coords="253,45,626,107" alt='{{<T "YES" >}}/{{<T "NO" >}}' title='{{<T "YES" >}}/{{<T "NO" >}}' href="#VitalControlSettingsPage1_Digit_1">
        <area shape="rect" coords="11,236,88,316" alt='{{<T "RegisterNewOnVitalControlDevice" >}}' title='{{<T "RegisterNewOnVitalControlDevice" >}}' href="#VitalControlSettingsPage1_Digit_2">
        <area shape="rect" coords="11,357,88,434" alt='{{<T "DeleteFromVitalControl" >}}' title='{{<T "DeleteFromVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
        <area shape="rect" coords="31,463,357,508" alt='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' title='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' href="#VitalControlSettingsPage1_Digit_4">
        <area shape="rect" coords="420,236,511,286" alt='{{<T "RegisterNewOnAutomaticFeeder" >}}' title='{{<T "RegisterNewOnAutomaticFeeder" >}}' href="#VitalControlSettingsPage1_Digit_5">
        <area shape="rect" coords="435,352,837,397" alt='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' title='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' href="#VitalControlSettingsPage1_Digit_6">
        <area shape="rect" coords="513,462,837,507" alt='{{<T "DoNotImportAnimalsOlderThan" >}}' title='{{<T "DoNotImportAnimalsOlderThan" >}}' href="#VitalControlSettingsPage1_Digit_7">
        <area shape="rect" coords="142,517,215,616" alt='Page 2' title='Page 2' href="#VitalControlSettingsPage1_Digit_8">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Capture d'écran 3 : Menu des paramètres <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Page 1
</figcaption>

Sur cette page, vous pouvez effectuer les actions et réglages suivants.

### Activation de l'appareil {{% T "VitalControl" %}} {#activation-vitalcontrol}

Dans l'état par défaut de la machine, le {{<T "VitalControl" >}} est désactivé. Réglez le commutateur <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> sur la position droite <span style="font-style: italic;">{{<T "YES" >}}</span> pour activer l'appareil {{<T "VitalControl" >}}. Ensuite, dans la barre latérale droite du menu du chargeur, sous l'icône(s) de la/les machine(s) connectée(s), l'icône <img src="/icons/device.svg" width="20" align="bottom" alt="Appareil VitalControl" title="VitalControl"/> pour l'appareil `{{<T "VitalControl" >}}` sera affichée (voir Capture d'écran <span style="font-style: italic;"><a href="../synchronisation#figure3_synchronize_vitalcontrol_alma_pro">Menu du Chargeur</a></span>, figure <span style="font-size: 140%">➂</span> là).

### Synchronisation chargeur automatique <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Sur le côté gauche de l'écran, il y a deux cases à cocher :

* Case à cocher <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Cette option contrôle le comportement dans le cas où des animaux sont présents sur le distributeur pendant la synchronisation et ne sont pas encore connus de l'appareil {{<T "VitalControl" >}}. Cette option est activée par défaut et devrait généralement rester activée. Si vous enregistrez vos animaux achetés en scannant leurs passeports animaux, cette option doit être désactivée.

<span style="font-weight: bold">Activez</span> cette option :

- si vous avez un tout nouveau {{<T "VitalControl" >}} devant vous, sur lequel vous souhaitez transférer tous les animaux d'un distributeur. Après la synchronisation, tous les animaux connus du distributeur seront également présents sur le {{<T "VitalControl" >}}.
- si vous amenez continuellement de nouveaux veaux au distributeur pendant les opérations en cours. Ces animaux seront alors également créés sur l'appareil {{<T "VitalControl" >}} lors de la synchronisation.

<span style="font-weight: bold">Désactivez</span> cette option :

- si vous avez créé de nouveaux animaux sur votre {{<T "VitalControl" >}} en scannant leurs passeports animaux, où
- ces animaux n'ont pas encore été assignés à un transpondeur et
- ces animaux sont déjà nourris au distributeur et sont donc déjà enregistrés là-bas.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        Si l'option reste activée dans la configuration ci-dessus, les animaux seront présents deux fois sur le {{<T "VitalControl" >}} après la synchronisation.
    </div>
</div>

* Case à cocher <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Cette option contrôle si les animaux qui sont uniquement présents sur le {{<T "VitalControl" >}} mais pas sur le distributeur sont supprimés du {{<T "VitalControl" >}} lors de la prochaine synchronisation. Si vous utilisez le {{<T "VitalControl" >}} uniquement pendant la période de lactation des animaux, cette option doit être activée. Si vous souhaitez suivre les animaux au-delà de la période de lactation, vous devez désactiver cette option.

<span style="font-weight: bold">Activez</span> cette option :

- si vous ne collectez des données pour les animaux que pendant la période de lactation,
- si vous souhaitez que les animaux soient supprimés du {{<T "VitalControl" >}} lors de la prochaine synchronisation après avoir été supprimés du distributeur. De cette façon, les animaux ne s'accumulent pas sur le {{<T "VitalControl" >}} au fil du temps.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        Si cette option est activée et que la case à cocher <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> est également activée, aucun animal ne sera supprimé s'il est plus jeune que l'âge spécifié dans le champ numérique <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Désactivez</span> cette option :
- si vous souhaitez continuer à collecter des données pour les animaux après la période de lactation, par exemple, lors d'une pesée,
- si vous êtes prêt à supprimer manuellement les animaux du {{<T "VitalControl" >}} vous-même.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        Si vous désactivez cette option, vous devez dissocier le transpondeur pour les animaux sevrés sur l'appareil {{<T "VitalControl" >}} au plus tard lorsque le collier est retiré du veau sevré pour un autre veau plus jeune. Si le transpondeur n'est pas retiré, les enregistrements de données du jeune animal - qui porte maintenant l'ancien collier de l'animal sevré - sont incorrectement ajoutés au jeu de données des animaux sevrés.
    </div>
</div>

### Synchronisation {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Distributeur Automatique

Sur le côté droit de l'écran, il y a une case à cocher et deux champs de saisie :

* Case à cocher <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Cette option contrôle si les animaux présents sur le {{<T "VitalControl" >}}, qui sont inconnus du distributeur, seront créés sur le distributeur lors de la prochaine synchronisation. Par défaut, cette option n'est pas activée.

    <span style="font-weight: bold">Désactivez</span> cette option ou laissez-la désactivée :

    - si vous utilisez votre appareil {{<T "VitalControl" >}} sur plusieurs distributeurs simultanément,
    - si vous amenez vos animaux directement au distributeur sans les enregistrer d'abord via l'appareil {{<T "VitalControl" >}}. Vos animaux seront alors automatiquement créés lors de l'enregistrement lorsqu'ils seront nourris au distributeur pour la première fois.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        Si le {{<T "VitalControl" >}} est utilisé sur plusieurs machines et que cette option est cochée, les animaux seront transférés involontairement d'une machine à l'autre lors de la synchronisation.
    </div>
</div>

<span style="font-weight: bold">Activez</span> cette option :

- si l'enregistrement initial de leurs animaux nouveau-nés avec le {{<T "VitalControl" >}} a lieu avant le premier nourrissage à l'alimentateur.
- si vous enregistrez vos animaux achetés en scannant leurs passeports animaux sur le {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        Activez cette option uniquement si vous utilisez le {{<T "VitalControl" >}} sur une seule machine ! Si vous souhaitez effectuer une synchronisation avec plusieurs machines avec cette option activée, vous devez utiliser un appareil {{<T "VitalControl" >}} distinct pour chaque machine.
    </div>
</div>
```

* Menu déroulant <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Dans ce menu déroulant, vous pouvez sélectionner la courbe d'alimentation qui est attribuée aux animaux nouvellement créés sur le distributeur pendant la synchronisation.

* Champ de saisie numérique<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Dans ce champ numérique, vous pouvez spécifier l'âge minimum (en jours) à partir duquel les animaux sont nouvellement créés sur le distributeur pendant la synchronisation. Les animaux qui sont plus jeunes que l'âge minimum spécifié ne sont **pas** créés pendant la synchronisation.

Appuyez sur le bouton <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> pour passer à [la page 2](#settings-menu-vitalcontrol-page-2) du <span style="font-style: italic;">menu des paramètres {{<T "VitalControl" >}}</span>.

## Menu des Paramètres `{{% T "VitalControl" %}}` - Page 2 {#settings-menu-vitalcontrol-page-2}

### Comment gérer les conflits de données pendant la synchronisation

Des conflits de données peuvent survenir lors de la synchronisation des données entre le distributeur et l'appareil {{<T "VitalControl" >}}. Un conflit de données se produit lorsque les données se contredisent sur l'appareil {{<T "VitalControl" >}} et sur le distributeur (par exemple, concernant le <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Sur cette page 2 du menu des paramètres, vous pouvez spécifier si et comment les conflits de données sont résolus pendant la synchronisation. Il y a trois options ici :

* La priorité est donnée aux données du distributeur, les données sur l'appareil {{<T "VitalControl" >}} sont écrasées par celles du distributeur\.
  Activez cette option en sélectionnant le bouton radio dans la colonne de gauche sous le symbole du distributeur <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* La priorité est donnée aux données {{<T "VitalControl" >}}, les données sur le distributeur sont écrasées par celles de l'appareil {{<T "VitalControl" >}}\.
  Activez cette option en sélectionnant le bouton radio dans la colonne de gauche sous le {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* Aucune modification n'est apportée, les données du distributeur et les données de l'appareil {{<T "VitalControl" >}} restent inchangées.\
  Activez cette option en sélectionnant le bouton radio dans la colonne de droite <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Exemple :">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Exemple</span><br>
            Après avoir acheté un lot de veaux, vous enregistrez vos animaux achetés sur le {{<T "VitalControl" >}} en scannant tous leurs passeports animaux. Les numéros d'animaux pour ces animaux sur le {{<T "VitalControl" >}} sont alors – selon les <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">paramètres de l'appareil</a> – les 3 à 5 derniers chiffres du passeport de l'animal. Vous placez ensuite des colliers avec des transpondeurs Urban sur les animaux nouvellement achetés et les nourrissez au distributeur automatique. Lors de la première visite à la station, les animaux sont enregistrés à l'aide de leur transpondeur et nouvellement créés au distributeur. Cependant, les numéros d'animaux pour ces nouveaux animaux sur le distributeur sont dérivés du numéro de transpondeur ou correspondent au numéro d'animal stocké pour ce transpondeur dans le distributeur. Cela signifie qu'un numéro d'animal différent a maintenant été attribué au même animal sur l'appareil {{<T "VitalControl" >}} et sur le distributeur, entraînant un conflit de données. En utilisant les boutons radio pour le <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, vous pouvez maintenant spécifier dans le menu des paramètres lequel des deux numéros d'animaux parallèles a la priorité et lequel sera supprimé lors de la synchronisation.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Menu des paramètres VitalControl : Page 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Paramètres VitalControl (2)" />
    </div>
    <map name="VitalControlSettingsPage2">
        <area shape="rect" coords="5,208,235,248" alt='{{<T "EarTagNumber" >}}' title='{{<T "EarTagNumber" >}}' href="#VitalControlSettingsPage2_Digit_1">
        <area shape="rect" coords="5,285,235,328" alt='{{<T "AnimalNumber" >}}' title='{{<T "AnimalNumber" >}}' href="#VitalControlSettingsPage2_Digit_2">
        <area shape="rect" coords="5,368,235,408" alt='{{<T "DateOfBirth" >}}' title='{{<T "DateOfBirth" >}}' href="#VitalControlSettingsPage2_Digit_3">
        <area shape="rect" coords="392,116,455,177" alt='{{<T "Feeder" >}}' title='{{<T "Feeder" >}}' href="#VitalControlSettingsPage2_Digit_4">
        <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='{{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
        <area shape="rect" coords="678,97,775,159" alt='{{<T "NoChange_AP" >}}' title='{{<T "NoChange_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
        <area shape="rect" coords="52,510,125,615" alt='Page 1' title='Page 1' href="#VitalControlSettingsPage2_Digit_8">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Capture d'écran 4 : Menu des paramètres <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Page 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        Pour des raisons internes, les modifications ne peuvent actuellement être apportées qu'au <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Dans les versions ultérieures du firmware, vous pourrez également apporter des modifications au <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> et à la <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

En appuyant sur le <span style="font-style: italic;">bouton</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span>, vous reviendrez à la [page 1](#settings-menu-vitalcontrol-page-1) du menu des paramètres `{{<T "VitalControl" >}}`.
