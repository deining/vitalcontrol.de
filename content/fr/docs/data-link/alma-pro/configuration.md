---

title: Activation et configuration unique de l'appareil dans les paramètres du distributeur automatique

linkTitle: Configuration

date: 2023-08-04T12:32:28+02:00

draft: false

description: >

  Avant d'utiliser le VitalControl pour la première fois, vous devez l'activer et le configurer correctement une fois dans les paramètres du distributeur Alma Pro.

slug: configuration

weight: 10

categories: [Alma Pro, VitalControl]

translationKey: alma-pro/configuration

---

Pour activer et configurer l'appareil VitalControl, procédez comme suit :

## Navigation vers le menu des paramètres `{{<T "VitalControl" >}}`

{{% alert title="Attention" %}}

Pour activer et configurer l'appareil {{<T "VitalControl" >}}, vous devez être connecté en tant qu'utilisateur avec le rôle {{<T "SiteManager" >}} sur le distributeur automatique. Sinon, certains des boutons affichés et décrits ci-dessous ne seront pas visibles pour vous.

{{% /alert %}}

1. Cliquez sur le bouton du bas <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Menu des paramètres" title="Paramètres"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> dans la barre latérale gauche du terminal tactile. Si vous êtes dans le menu principal où aucune barre latérale n'est visible, appuyez sur le bouton &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Menu du distributeur" title="Menu du distributeur"/>`{{<T "Feeder" >}}`pour afficher la barre latérale.

1. Cliquez sur le deuxième bouton à partir de la gauche <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Paramètres du terminal tactile" title="Paramètres tactiles"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> dans la barre d'outils inférieure du terminal tactile.

1. Une série d'éléments de menu apparaît maintenant sur la moitié gauche de la zone centrale de l'écran. Cliquez sur le bouton du bas `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Un élément de menu (ou peut-être plusieurs) apparaît maintenant sur la moitié droite de la zone centrale de l'écran. Cliquez sur le bouton du haut `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Le bouton passe maintenant à la moitié gauche de l'écran.

1. En bas à droite de l'écran, le bouton &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Ouvrir les paramètres de VitalControl" title="Ouvrir les paramètres" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span> est maintenant affiché. Cliquez sur ce bouton, et une fenêtre popup s'ouvrira, affichant [Page 1](#settings-menu-vitalcontrol-page-1) du menu des paramètres `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Paramètres VitalControl : Accès" title="Accéder au menu des paramètres VitalControl" />
    <figcaption class="figure-caption fs-6">Capture d'écran 1 : Accéder au menu des paramètres <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

Le menu des paramètres `{{<T "VitalControl" >}}` est réparti sur deux pages :

## Menu des Paramètres `{{<T "VitalControl" >}}` - Page 1 {#settings-menu-vitalcontrol-page-1}

La page 1 du menu des paramètres <span style="font-style: italic;">{{<T "VitalControl" >}}</span> se présente comme suit :

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Menu des paramètres VitalControl : Page 1" title="Paramètres VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Capture d'écran 2 : Menu des paramètres <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Page 1</figcaption>
</figure>

Sur cette page, vous pouvez effectuer les actions et réglages suivants.

### Activation de l'Appareil {{<T "VitalControl" >}} {#activation-vitalcontrol}

Dans l'état par défaut de la machine, le {{<T "VitalControl" >}} est désactivé. Réglez l'interrupteur <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> sur la position de droite <span style="font-style: italic;">{{<T "YES" >}}</span> pour activer l'appareil {{<T "VitalControl" >}}. Ensuite, dans la barre latérale droite du menu du distributeur, sous l'icône(s) de la/les machine(s) connectée(s), l'icône <img src="/icons/device.svg" width="20" align="bottom" alt="Appareil VitalControl" title="VitalControl"/> pour l'appareil `{{<T "VitalControl" >}}` sera affichée (voir Capture d'écran <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Menu du Distributeur</a></span>, figure <span style="font-size: 140%">➁</span> là-bas).

### Synchronisation automatique de l'alimentation <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Sur le côté gauche de l'écran, il y a deux cases à cocher :

* Case à cocher <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Cette option contrôle le comportement dans le cas où des animaux sont présents sur l'alimentation pendant la synchronisation et ne sont pas encore connus de l'appareil {{<T "VitalControl" >}}. Cette option est activée par défaut et devrait généralement rester activée. Si vous enregistrez vos animaux achetés en scannant leurs passeports animaux, cette option doit être désactivée.

    <span style="font-weight: bold">Activez</span> cette option :

    - si vous avez un tout nouveau {{<T "VitalControl" >}} devant vous, sur lequel vous souhaitez transférer tous les animaux d'une alimentation. Après la synchronisation, tous les animaux connus de l'alimentation seront également présents sur le {{<T "VitalControl" >}}.
    - si vous amenez continuellement de nouveaux veaux à l'alimentation pendant les opérations en cours. Ces animaux seront alors également créés sur l'appareil {{<T "VitalControl" >}} lors de la synchronisation.

    <span style="font-weight: bold">Désactivez</span> cette option :

    - si vous avez créé de nouveaux animaux sur votre {{<T "VitalControl" >}} en scannant leurs passeports animaux, où
    - ces animaux n'ont pas encore été assignés à un transpondeur et
    - ces animaux sont déjà nourris à l'alimentation et sont donc enregistrés là-bas.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Attention</span><br>
                Si l'option reste activée dans la configuration ci-dessus, les animaux seront présents deux fois sur le {{<T "VitalControl" >}} après la synchronisation.
            </div>
        </div>

* Case à cocher <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

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
            Si cette option est activée et que la case à cocher <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> est également activée, aucun animal ne sera supprimé s'il est plus jeune que l'âge spécifié dans le champ numérique <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
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

### Synchronisation {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Distributeur Automatique

Sur le côté droit de l'écran, il y a une case à cocher et deux champs de saisie :

* Case à cocher <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

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
            Si le {{<T "VitalControl" >}} est utilisé sur plusieurs machines et que cette option est cochée, les animaux seront transférés involontairement d'une machine à une autre lors de la synchronisation.
        </div>
    </div>

<span style="font-weight: bold">Activez</span> cette option :

- si l'enregistrement initial de leurs animaux nouveau-nés avec le {{<T "VitalControl" >}} a lieu avant le premier repas à l'alimentation.
- si vous enregistrez vos animaux achetés en scannant leurs passeports animaux sur le {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        Activez cette option uniquement si vous utilisez le {{<T "VitalControl" >}} sur une seule machine ! Si vous souhaitez effectuer une synchronisation avec plusieurs machines avec cette option activée, vous devez utiliser un appareil {{<T "VitalControl" >}} séparé pour chaque machine.
    </div>
</div>

* Menu déroulant <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Dans ce menu déroulant, vous pouvez sélectionner la courbe d'alimentation qui est attribuée aux animaux nouvellement créés sur l'alimentation pendant la synchronisation.

* Champ de saisie numérique<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Dans ce champ numérique, vous pouvez spécifier l'âge minimum (en jours) à partir duquel les animaux sont nouvellement créés sur l'alimentation pendant la synchronisation. Les animaux qui sont plus jeunes que l'âge minimum spécifié ne sont **pas** créés pendant la synchronisation.

Appuyez sur le bouton <span style="font-size: 140%">⑧</span> pour passer à [la page 2](#settings-menu-vitalcontrol-page-2) du <span style="font-style: italic;">menu des paramètres {{<T "VitalControl" >}}</span>.

## Menu des paramètres `{{<T "VitalControl" >}}` - Page 2 {#settings-menu-vitalcontrol-page-2}

### Comment gérer les conflits de données lors de la synchronisation

Des conflits de données peuvent survenir lors de la synchronisation des données entre le distributeur et l'appareil {{<T "VitalControl" >}}. Un conflit de données se produit lorsque les données se contredisent sur l'appareil {{<T "VitalControl" >}} et sur le distributeur (par exemple, concernant le <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Sur cette page 2 du menu des paramètres, vous pouvez spécifier si et comment les conflits de données sont résolus lors de la synchronisation. Il y a trois options ici :

* La priorité est donnée aux données du distributeur, les données sur l'appareil {{<T "VitalControl" >}} sont écrasées par celles du distributeur.
  Activez cette option en sélectionnant le bouton radio dans la colonne de gauche sous le symbole du distributeur <span style="font-size: 140%">➃</span>.

* La priorité est donnée aux données {{<T "VitalControl" >}}, les données sur le distributeur sont écrasées par celles de l'appareil {{<T "VitalControl" >}}.
  Activez cette option en sélectionnant le bouton radio dans la colonne de gauche sous le {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Aucune modification n'est apportée, les données du distributeur et de l'appareil {{<T "VitalControl" >}} restent inchangées.
  Activez cette option en sélectionnant le bouton radio dans la colonne de droite <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Exemple</span><br>
            Après avoir acheté un lot de veaux, vous enregistrez vos animaux achetés sur le {{<T "VitalControl" >}} en scannant tous leurs passeports animaux. Les numéros d'animaux pour ces animaux sur le {{<T "VitalControl" >}} sont alors – selon les <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">paramètres de l'appareil</a> – les 3 à 5 derniers chiffres du passeport de l'animal. Vous placez ensuite des colliers avec des transpondeurs Urban sur les animaux nouvellement achetés et les nourrissez au distributeur automatique. Lors de la première visite à la station, les animaux sont enregistrés à l'aide de leur transpondeur et nouvellement créés au distributeur. Cependant, les numéros d'animaux pour ces nouveaux animaux sur le distributeur sont dérivés du numéro de transpondeur ou correspondent au numéro d'animal stocké pour ce transpondeur dans le distributeur. Cela signifie qu'un numéro d'animal différent a maintenant été attribué au même animal sur l'appareil {{<T "VitalControl" >}} et sur le distributeur, entraînant un conflit de données. À l'aide des boutons radio pour le <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, vous pouvez maintenant spécifier dans le menu des paramètres lequel des deux numéros d'animaux parallèles a la priorité et lequel sera supprimé lors de la synchronisation.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Menu Paramètres VitalControl : Page 2" title="Paramètres VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Capture d'écran 3 : Menu Paramètres <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Page 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alerte :">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        Pour des raisons internes, les modifications ne peuvent actuellement être apportées qu'au <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Dans les versions ultérieures du firmware, vous pourrez également apporter des modifications au <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> et à la <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

En appuyant sur le <span style="font-style: italic;">bouton</span> <span style="font-size: 140%">⑧</span>, vous reviendrez à [la page 1](#settings-menu-vitalcontrol-page-1) du menu des paramètres `{{<T "VitalControl" >}}`.
