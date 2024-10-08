---
title: Állatadatok szerkesztése
linkTitle: Szerkesztés
slug: edit
weight: 90
description: >
 A kiválasztott állat adatainak szerkesztése.
date: 2023-07-26
kategóriák: [Actions]
címkék: [Actions, állatadatok, szerkesztés]
translationKey: actions/edit
---

## Állatadatok szerkesztése {#edit-animal-data}

A <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` művelet lehetővé teszi a kiválasztott állat adatainak közvetlen módosítását. Ez a funkció megkönnyíti az állatadatok javítását, ha például az állatvizsgálat során kiderül, hogy a nem helytelenül lett elmentve. A következő adatokat módosíthatja:

- Állat típusa
- Nem
- Születési súly
- Fajta
- Tartózkodási hely
- Nemzeti állat azonosító
- Azonosító
- Többszörös
- Születési dátum
- Ellési könnyűség

Az állatadatok módosításához kövesse az alábbi lépéseket:

1. A VitalControl készülék főképernyőjén válassza ki a &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` menüpontot és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Vagy szkenneljen be egy állatot a transzponder segítségével, vagy válasszon egy állatot a listából. Erősítse meg az `{{<T "Ok" >}}` gombbal, és válasszon egy állatot a △ ▽ nyílgombokkal. Erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik egy almenü az állatműveletekkel. Használja a ◁ ▷ △ ▽ nyílgombokat a <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` művelet kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Megnyílik egy lista az állat adataival. Használja a △ ▽ nyílgombokat a kívánt módosítási lehetőség kiválasztásához.

5. Az `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` és `{{<T "CalvingEase" >}}` adatok esetében használja a ◁ ▷ nyílgombokat a kívánt módosítás elvégzéséhez.

6. Az `{{<T "ID" >}}` és `{{<T "DateBirth" >}}` adatok esetében válassza ki őket a △ ▽ nyílgombokkal, és erősítse meg az `{{<T "Ok" >}}` gombbal. Használja a △ ▽ nyílgombokat a megfelelő szám kiválasztásához, és a ◁ ▷ nyílgombokat a számmezőkön belüli navigáláshoz.

7. Mentse a módosítást az `F3` gombbal.

{{< tabpane >}}
{{< tab header="Állatadatok szerkesztése:" text=true disabled=true />}}
{{% tab header="Transzponder szkennelés" text=true %}}
![VitalControl: Menü Művelet Állatadatok szerkesztése](../images/edit-scan.png "Állatadatok szerkesztése")
{{% /tab %}}
{{% tab header="Kézi kiválasztás a listából" text=true %}}
![VitalControl: Menü Művelet Állatadatok szerkesztése](../images/edit.png "Állatadatok szerkesztése")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Tipp" %}}
Ha ez a művelet nem elérhető, valószínűleg deaktiválták a műveletet! Aktiválja a műveletet az [akció beállítások](../setting/) menüben. Alternatív megoldásként az összes művelet visszaállítása visszahozza ezt a műveletet.
{{% /alert %}}
