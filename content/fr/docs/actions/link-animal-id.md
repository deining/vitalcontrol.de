---
title: Lier l'ID animal
linkTitle: Lier l'ID animal
slug: link-animal-id
weight: 115
description: >
 Attribuer un ID animal national à un animal qui n'en possède pas
date: 2023-07-26
catégories: [ID animal national]
étiquettes: [ID animal national]
translationKey: actions/national-animal-id
---
{{% alert title="Attention" color="warning" %}}
Cette action n'est pas activée par défaut ! Activez-la comme décrit dans [paramètres d'action](../setting/).
{{% /alert %}}

## Lier l'ID animal {#link-animal-id}

Pour attribuer un ID animal national à un animal qui n'en possède pas, procédez comme suit :

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Soit scannez le transpondeur de l'animal sans l'ID animal national, soit sélectionnez l'animal dans la liste. Pour ce faire, confirmez avec `{{<T "Ok" >}}` et sélectionnez l'ID de l'animal à l'aide des touches fléchées △ ▽. Confirmez avec `{{<T "Ok" >}}`.

3. Un sous-menu avec les actions pour l'animal s'ouvre. Utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner l'action &nbsp;<img src="/icons/actions/link-nais-id.svg" width="35" align="bottom" alt="Lier l'ID animal" /> `{{<T "LinkAnimalID" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. Un autre sous-menu s'ouvre avec toutes les options de réglage pour les données de l'animal. L'option de réglage `{{<T "NationalAnimalID" >}}` est automatiquement sélectionnée. Confirmez avec `{{<T "Ok" >}}`.

5. Utilisez les touches fléchées ◁ ▷ △ ▽ pour régler l'ID animal national. Confirmez à nouveau avec `{{<T "Ok" >}}`.

6. Sauvegardez les paramètres et retournez au menu principal &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` en utilisant la touche `F3`.

{{< tabpane >}}
{{< tab header="Lier l'ID animal :" text=true disabled=true />}}
{{% tab header="Scan du transpondeur" text=true %}}
![VitalControl: Menu Action Lier l'ID animal](../images/linkanimalid-scan.png "Lier l'ID animal")
{{% /tab %}}
{{% tab header="Sélection manuelle dans la liste" text=true %}}
![VitalControl: Menu Action Lier l'ID animal](../images/linkanimalid.png "Lier l'ID animal")
{{% /tab %}}
{{< /tabpane >}}

## Associer l'ID animal avec le scan de la boucle d'oreille électronique {#link-animal-id-with-electronic-ear-tag-scan}

Pour attribuer un ID national à un animal qui possède une boucle d'oreille électronique, procédez comme suit :

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Scannez soit le transpondeur de l'animal sans l'ID national soit sélectionnez l'animal dans la liste. Pour cela, confirmez avec `{{<T "Ok" >}}` et sélectionnez l'ID de l'animal en utilisant les touches fléchées △ ▽. Confirmez avec `{{<T "Ok" >}}`.

3. Un sous-menu avec les actions pour l'animal s'ouvre. Utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner l'action &nbsp;<img src="/icons/actions/scan-nais-id.svg" width="35" align="bottom" alt="Link animal ID" />  `{{<T "LinkAnimalID" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. Scannez maintenant la boucle d'oreille électronique.

5. L'animal a été assigné avec succès un ID national.

{{< tabpane >}}
{{< tab header="Associer l'ID animal avec le scan de la boucle d'oreille électronique :" text=true disabled=true />}}
{{% tab header="Scan du transpondeur" text=true %}}
![VitalControl: Menu Action Associer l'ID animal](../images/linkanimalidscan-scan.png "Associer l'ID animal")
{{% /tab %}}
{{% tab header="Sélection manuelle dans la liste" text=true %}}
![VitalControl: Menu Action Associer l'ID animal](../images/linkanimalidscan.png "Associer l'ID animal")
{{% /tab %}}
{{< /tabpane >}}
