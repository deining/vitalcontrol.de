---
title: Evaluación
linkTitle: Evaluación
slug: rating
weight: 30
description: >
 Califica tus animales.
date: 2023-07-26
categorías: [Acciones]
etiquetas: [Acciones, Calificación]
translationKey: actions/animal-rating
---

## Califica tus animales {#rate-your-animals}

Al calificar el animal, documentas la condición del animal individual. La condición se determina visualmente y se registra con la ayuda del sistema de semáforo. En la evaluación básica, solo se registra la condición general. En la evaluación extendida registras la condición general, la ingesta de alimento, la consistencia de las heces y las enfermedades respiratorias. Puedes cambiar el modo de calificación directamente en la acción <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Calificación" /> `{{<T "Rating" >}}` o puedes definirlo en los [ajustes](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Consejo" %}}
Una evaluación amarilla o roja significa que VitalControl clasifica al animal como conspicuo y lo pone en la lista de alarmas.
{{% /alert %}}

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acciones" /> `{{<T "Actions" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Escanea un animal usando el transpondedor o selecciona un animal de la lista. Confirma con `{{<T "Ok" >}}` y selecciona un animal con las teclas de flecha △ ▽. Confirma con `{{<T "Ok" >}}`.

3. Se abre un submenú con las acciones del animal. Usa las teclas de flecha ◁ ▷ para seleccionar la acción <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Calificación" /> `{{<T "Rating" >}}` y confirma con `{{<T "Ok" >}}`.

4. Se abre el menú de calificación. Si deseas cambiar el modo de calificación, usa el botón `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Cadena de acciones" />&nbsp; y las teclas de flecha ◁ ▷. Con la tecla `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Atrás" />&nbsp; regresas al menú de evaluación.

5. Usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar un estado y guárdalo con la tecla `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Guardar" /> o la tecla `{{<T "Ok" >}}`.

6. En modo avanzado, usa las teclas `F1` y `F3` para cambiar entre los parámetros de calificación.

{{% alert title="Consejo" %}}
Si no haces una selección usando las teclas de flecha ◁ ▷ pero guardas directamente usando la tecla `F3` o `{{<T "Ok" >}}`, VitalControl guarda una evaluación neutral, representada por un color gris.
{{% /alert %}}

### Evaluación básica {#basic-rating}

{{< tabpane >}}
{{< tab header="Calificación básica:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Acciones del Menú Calificación](../images/basicrating-scan.png "Calificación básica")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Acciones del Menú Calificación](../images/basicrating.png "Calificación básica")
{{% /tab %}}
{{< /tabpane >}}

### Evaluación extendida {#extended-rating}

{{< tabpane >}}
{{< tab header="Calificación básica:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Acciones del Menú Calificación](../images/extendedrating-scan.png "Calificación extendida")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Acciones del Menú Calificación](../images/extendedrating.png "Calificación extendida")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Consejo" %}}
Si esta acción no está disponible, ¡probablemente ha sido desactivada! Activa la acción en el menú de [configuración de acciones](/es/docs/actions/setting/). Alternativamente, restablecer todas las acciones hará que esta acción vuelva a aparecer.
{{% /alert %}}
