---
title: Synchronisation des données entre VitalControl et Alma Pro
linkTitle: Synchronisation
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Synchronisez les animaux stockés sur l'appareil VitalControl avec les animaux enregistrés sur le distributeur automatique et transférez les valeurs mesurées enregistrées avec l'appareil VitalControl vers le distributeur pour des fins d'évaluation et une meilleure visualisation.
weight: 20
categories: [Échange de données, Alma Pro]
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

Pour effectuer la synchronisation entre le distributeur automatique Alma Pro et l'appareil VitalControl, procédez comme suit :

## Ouvrir le port USB

1. Utilisez un petit tournevis pour desserrer la vis de verrouillage sur le volet du port USB et abaissez-le :

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Ouvrir le port USB" title="Ouvrir le port USB" /></a>
        <figcaption class="figure-caption fs-6">Figure 1 : Ouvrir le port USB</figcaption>
    </figure>

## Connecter VitalControl

2. Allumez l'appareil VitalControl en appuyant sur le bouton central supérieur `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Bouton On/Off" />.

2. Connectez la prise USB-C de l'appareil VitalControl à l'aide du câble USB fourni <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> avec la prise USB-A de l'écran tactile <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Figure 2 : Connexion de VitalControl à Alma Pro</figcaption>
</figure>

### Démarrer la synchronisation

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        Pour démarrer la synchronisation de l'appareil VitalControl, vous devez être connecté à la machine avec le rôle utilisateur <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Sinon, le bouton <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> dans le <a href="#synchronise-vc-ap" >menu de synchronisation</a> est désactivé.
    </div>
</div>

4. Dans la barre latérale gauche du terminal tactile, cliquez sur le deuxième bouton à partir du haut <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Si vous êtes dans le menu principal où aucune barre latérale n'est visible, appuyez sur le bouton &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> pour ouvrir le menu du feeder.

1. Dans la barre latérale droite du terminal à écran tactile, sous le(s) symbole(s) du(des) distributeur(s) connecté(s), le symbole <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Chiffre 2 dans un cercle" title="Chiffre 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="Appareil VitalControl" title="VitalControl"/> pour l'appareil `{{<T "VitalControl" >}}` est maintenant affiché. Cliquez sur ce symbole.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            Si le symbole <img src="/icons/device.svg" width="25" align="bottom" alt="Appareil VitalControl" title="VitalControl"/> pour l'appareil <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> dans la barre latérale droite <span style="font-weight: bold;">n'est pas</span> affiché, l'appareil est encore désactivé dans les paramètres. Dans ce cas, suivez les instructions pour l'<a href="../configuration" >activation</a> unique de l'appareil.
        </div>
    </div>

1. L'écran de synchronisation apparaîtra maintenant. Cliquez sur le bouton <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="numéro 3 encerclé" title="numéro 3" /> `{{<T "Synchronize" >}}` au milieu en bas pour démarrer la synchronisation avec l'appareil VitalControl.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronisation VitalControl avec Alma Pro" title="Synchronisation VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Figure 3 : Synchronisation de VitalControl avec le distributeur automatique Alma Pro</figcaption>
    </figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        Si de nombreux animaux doivent être transférés, la synchronisation peut prendre un certain temps. Vous pouvez voir la progression de la synchronisation sur l'écran de l'appareil VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Synchronisation VitalControl Alma Pro, indicateur de progression" title="Progression de la synchronisation" /></a>
            <figcaption class="figure-caption fs-6">Figure 4 : Synchronisation VitalControl Alma Pro, indicateur de progression</figcaption>
        </figure>
    </div>
</div>

## Fermer le port USB

7. Après une synchronisation réussie, débranchez le câble USB du port USB sur l'écran tactile. Repliez le couvercle de protection du port et fixez-le en serrant la vis de verrouillage à l'aide d'un petit tournevis.

    <figure class="figure" style="margin-top: 10px;">
        <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Fermer le port USB" title="Fermer le port USB" /></a>
        <figcaption class="figure-caption fs-6">Figure 5 : Fermer à nouveau le port USB</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Remarque</span><br>
            Assurez-vous de fermer le clapet du port USB après chaque synchronisation pour éviter que l'humidité ne pénètre dans le port et pour protéger le port de l'air corrosif présent dans votre étable !<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Fermeture obligatoire du port USB" title="Fermeture obligatoire du port USB" /></a>
                <figcaption class="figure-caption fs-6">Figure 6 : Fermeture obligatoire du port USB</figcaption>
            </figure>
        </div>
    </div>
