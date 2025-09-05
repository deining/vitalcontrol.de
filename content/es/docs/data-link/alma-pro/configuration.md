---
title: Activación y Configuración Única del Dispositivo en la Configuración del Alimentador Automático
linkTitle: Configuración
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Antes de usar el VitalControl por primera vez, debe activarlo y configurarlo adecuadamente una vez en la configuración del alimentador Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/es
---
## Requisitos

Recomendamos usar una versión de firmware <span style="font-weight: bold">24-xx-xx</span> o superior con el dispositivo VitalControl.\
Para verificar qué versión de firmware está instalada en su dispositivo:

* Navegue a la página de inicio del alimentador haciendo clic en el botón superior `Inicio` <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Icono de pantalla de inicio" title="Alma Pro: Pantalla de inicio"/>&nbsp; en la barra de navegación en el área izquierda de la pantalla.
* En la pantalla de inicio, haga clic en el botón `Ayuda` <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Icono del menú de ayuda" title="Alma Pro: Pantalla de ayuda"/>&nbsp; en el área superior derecha de la pantalla.
* El número de versión <span style="font-size: 140%">➂</span> ahora se muestra a la izquierda del botón de cambio de idioma.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: verificación de la versión del firmware" title="Alma Pro: verificación de la versión del firmware" />
    <figcaption class="figure-caption fs-6">Captura de pantalla 1: <span style="font-style: italic;">Alma Pro: verificación de la versión del firmware</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alerta:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atención</span><br>
        Si la versión de firmware de su alimentador es inferior a <span style="font-weight: bold">24-xx-xx</span>, puede haber discrepancias entre las capturas de pantalla a continuación y la pantalla en su pantalla táctil, por lo que es posible que no pueda seguir las instrucciones. En este caso, contacte a su técnico de servicio para actualizar el firmware de su alimentador.<br>
    </div>
</div>

## Navegación al menú de configuración `{{% T "VitalControl" %}}`

{{% alert title="Atención" %}}
Para activar y configurar el dispositivo {{<T "VitalControl" >}}, debe estar conectado con el rol de usuario {{<T "SiteManager" >}} en el alimentador automático. De lo contrario, algunos de los botones mostrados y descritos a continuación no serán visibles para usted.
{{% /alert %}}

1. Haga clic en el botón inferior <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Menú de Configuración" title="Configuración"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> en la barra lateral izquierda del terminal táctil. Si está en el menú principal donde no se ve la barra lateral, presione el botón &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Menú del Alimentador" title="Menú del Alimentador"/>`{{<T "Feeder" >}}`para mostrar la barra lateral.

1. Haga clic en el segundo botón desde la izquierda <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Configuración del Terminal Táctil" title="Configuración Táctil"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> en la barra de herramientas inferior del terminal táctil.

1. Ahora aparece una serie de elementos de menú en la mitad izquierda del área central de la pantalla. Haga clic en el botón inferior `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Ahora aparece un elemento de menú (o posiblemente varios) en la mitad derecha del área central de la pantalla. Haga clic en el botón superior `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. El botón ahora se cambia a la mitad izquierda de la pantalla.

1. En la parte inferior del lado derecho de la pantalla, ahora se muestra el botón &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Abrir configuración de VitalControl" title="Abrir configuración" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span>. Haga clic en este botón y se abrirá una ventana emergente que mostrará [Página 1](#settings-menu-vitalcontrol-page-1) del menú de configuración de `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="Configuración de VitalControl: Acceso"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Acceder al menú de configuración de VitalControl" />
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
    Captura de pantalla 2: Accediendo al menú de configuración de <span style="font-style: italic;">{{<T "VitalControl" >}}
</figcaption>

El menú de configuración de `{{<T "VitalControl" >}}` se distribuye en dos páginas:

## Menú de Configuración de `{{% T "VitalControl" %}}` - Página 1 {#settings-menu-vitalcontrol-page-1}

La Página 1 del menú de configuración de <span style="font-style: italic;">{{<T "VitalControl" >}}</span> se presenta de la siguiente manera:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="Menú de configuración de VitalControl: Página 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Configuración de VitalControl (1)" />
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
    Captura de pantalla 3: Menú de configuración de <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Página 1
</figcaption>


En esta página, puedes realizar las siguientes acciones y configuraciones.

### Activación del Dispositivo {{% T "VitalControl" %}} {#activation-vitalcontrol}

En el estado predeterminado de la máquina, el {{<T "VitalControl" >}} está desactivado. Coloca el interruptor <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> en la posición derecha <span style="font-style: italic;">{{<T "YES" >}}</span> para activar el dispositivo {{<T "VitalControl" >}}. Posteriormente, en la barra lateral derecha del menú del alimentador, debajo del icono(s) de la(s) máquina(s) conectada(s), se mostrará el icono <img src="/icons/device.svg" width="20" align="bottom" alt="Dispositivo VitalControl" title="VitalControl"/> para el dispositivo `{{<T "VitalControl" >}}` (ver Captura de pantalla <span style="font-style: italic;"><a href="../synchronisation#figure3_synchronize_vitalcontrol_alma_pro">Menú del Alimentador</a></span>, figura <span style="font-size: 140%">➂</span> allí).

### Sincronización alimentador automático <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

En el lado izquierdo de la pantalla, hay dos casillas de verificación:

* Casilla de verificación <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Esta opción controla el comportamiento en caso de que haya animales presentes en el comedero durante la sincronización que aún no son conocidos por el dispositivo {{<T "VitalControl" >}}. Esta opción está habilitada por defecto y generalmente debería permanecer configurada. Si registras tus animales comprados escaneando sus pasaportes de animales, esta opción debe deshabilitarse.

<span style="font-weight: bold">Habilita</span> esta opción:

- si tienes un {{<T "VitalControl" >}} completamente nuevo frente a ti, al cual deseas transferir todos los animales de un comedero. Después de la sincronización, todos los animales conocidos por el comedero también estarán presentes en el {{<T "VitalControl" >}}.
- si continuamente traes nuevos terneros al comedero durante las operaciones en curso. Estos animales también se crearán en el dispositivo {{<T "VitalControl" >}} durante la sincronización.

<span style="font-weight: bold">Deshabilita</span> esta opción:

- si has creado nuevos animales en tu {{<T "VitalControl" >}} escaneando sus pasaportes de animales, donde
- a estos animales aún no se les ha asignado un transpondedor y
- estos animales ya están siendo alimentados en el comedero y, por lo tanto, están registrados allí.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atención</span><br>
        Si la opción permanece configurada en la configuración anterior, los animales estarán presentes dos veces en el {{<T "VitalControl" >}} después de la sincronización.
    </div>
</div>

* Casilla de verificación <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Esta opción controla si los animales que solo están presentes en el {{<T "VitalControl" >}} pero no en el alimentador se eliminan del {{<T "VitalControl" >}} durante la próxima sincronización. Si usas el {{<T "VitalControl" >}} solo durante el período de lactancia de los animales, esta opción debe estar habilitada. Si deseas rastrear a los animales más allá del período de lactancia, debes desactivar esta opción.

<span style="font-weight: bold">Habilita</span> esta opción:

- si solo recopilas datos de los animales durante el período de lactancia,
- si deseas que los animales se eliminen del {{<T "VitalControl" >}} durante la próxima sincronización después de que hayan sido eliminados del alimentador. De esta manera, los animales no se acumulan en el {{<T "VitalControl" >}} con el tiempo.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atención</span><br>
        Si esta opción está activada y la casilla <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> también está activada, no se eliminarán los animales que sean más jóvenes que lo especificado en el campo numérico <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
    </div>
</div>

<span style="font-weight: bold">Desactiva</span> esta opción:
- si deseas seguir recopilando datos de los animales después del período de lactancia, por ejemplo, durante un pesaje,
- si estás dispuesto a eliminar manualmente los animales del {{<T "VitalControl" >}} tú mismo.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atención</span><br>
        Si desactiva esta opción, debe desvincular el transpondedor para los animales destetados en el dispositivo {{<T "VitalControl" >}} a más tardar cuando el collar se retire del ternero destetado a otro ternero más joven. Si no se retira el transpondedor, los registros de datos del animal más joven -que ahora lleva el collar anterior del animal destetado- se añaden incorrectamente al conjunto de datos de los animales destetados.
    </div>
</div>

### Sincronización {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Alimentador Automático

En el lado derecho de la pantalla, hay una casilla de verificación y dos campos de entrada:

* Casilla de verificación <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Esta opción controla si los animales presentes en el {{<T "VitalControl" >}}, que son desconocidos para el alimentador, se crearán en el alimentador durante la próxima sincronización. Por defecto, esta opción no está activada.

    <span style="font-weight: bold">Desactive</span> esta opción o déjela desactivada:

    - si utiliza su dispositivo {{<T "VitalControl" >}} en múltiples alimentadores simultáneamente,
    - si lleva sus animales directamente al alimentador sin registrarlos primero a través del dispositivo {{<T "VitalControl" >}}. Sus animales se crearán automáticamente durante el registro cuando sean alimentados en el alimentador por primera vez.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atención</span><br>
        Si el {{<T "VitalControl" >}} se utiliza en varias máquinas y esta opción está marcada, los animales se transferirán involuntariamente de una máquina a otra durante la sincronización.
    </div>
</div>

<span style="font-weight: bold">Active</span> esta opción:

- si el registro inicial de sus animales recién nacidos con el {{<T "VitalControl" >}} se realiza antes de la primera alimentación en el comedero.
- si registra sus animales comprados escaneando sus pasaportes de animales en el {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atención</span><br>
        ¡Active esta opción solo si utiliza el {{<T "VitalControl" >}} en una sola máquina! Si desea realizar la sincronización con varias máquinas con esta opción configurada, debe usar un dispositivo {{<T "VitalControl" >}} separado para cada máquina.
    </div>
</div>

* Menú desplegable <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   En este menú desplegable, puedes seleccionar la curva de alimentación que se asigna a los animales que se crean nuevos en el alimentador durante la sincronización.

* Campo de entrada numérica<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    En este campo numérico, puedes especificar la edad mínima (en días) a partir de la cual los animales se crean nuevos en el alimentador durante la sincronización. Los animales que son más jóvenes que la edad mínima especificada **no** se crean durante la sincronización.

Presiona el botón <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> para cambiar a [página 2](#settings-menu-vitalcontrol-page-2) del <span style="font-style: italic;">menú de configuración {{<T "VitalControl" >}}</span>.

## Menú de Configuración `{{% T "VitalControl" %}}` - Página 2 {#settings-menu-vitalcontrol-page-2}

### Cómo manejar los conflictos de datos durante la sincronización

Los conflictos de datos pueden ocurrir al sincronizar los datos entre el alimentador y el dispositivo {{<T "VitalControl" >}}. Un conflicto de datos ocurre cuando los datos se contradicen entre sí en el dispositivo {{<T "VitalControl" >}} y en el alimentador (por ejemplo, en relación con el <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). En esta página 2 del menú de configuración, puedes especificar si y cómo se resuelven los conflictos de datos durante la sincronización. Hay tres opciones aquí:

* Se da prioridad a los datos del alimentador, los datos en el dispositivo {{<T "VitalControl" >}} se sobrescriben con los del alimentador\.
  Activa esta opción seleccionando el botón de opción en la columna izquierda debajo del símbolo del alimentador <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Se da prioridad a los datos de {{<T "VitalControl" >}}, los datos en el alimentador se sobrescriben con los del dispositivo {{<T "VitalControl" >}}\.
  Activa esta opción seleccionando el botón de opción en la columna izquierda debajo del {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* No se realizan cambios, tanto los datos del alimentador como los datos del dispositivo {{<T "VitalControl" >}} permanecen sin cambios.\
  Active esta opción seleccionando el botón de radio en la columna de la derecha <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Ejemplo</span><br>
            Después de haber comprado un lote de terneros, registra sus animales comprados en el {{<T "VitalControl" >}} escaneando todos sus pasaportes de animales. Los números de animales para estos animales en el {{<T "VitalControl" >}} son entonces, dependiendo de la <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">configuración del dispositivo</a>, los últimos 3-5 dígitos del pasaporte del animal. Luego coloca collares con transpondedores Urban en los animales recién comprados y los alimenta en el alimentador automático. Durante la visita inicial a la estación, los animales se registran usando su transpondedor y se crean nuevos en el alimentador. Sin embargo, los números de animales para estos nuevos animales en el alimentador se derivan del número del transpondedor o corresponden al número de animal almacenado para este transpondedor en el alimentador. Esto significa que ahora se ha asignado un número de animal diferente al mismo animal en el dispositivo {{<T "VitalControl" >}} y en el alimentador, lo que resulta en un conflicto de datos. Usando los botones de radio para el <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, ahora puede especificar en el menú de configuración cuál de los dos números de animales paralelos tiene prioridad y cuál se eliminará durante la sincronización.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Menú de Configuración VitalControl: Página 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Configuración VitalControl (2)" />
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
    Captura de pantalla 4: Menú de Configuración <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Página 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atención</span><br>
        Por razones internas, actualmente solo se pueden hacer cambios en el <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. En versiones posteriores del firmware, también podrá realizar cambios en el <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> y en la <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

Al presionar el <span style="font-style: italic;">botón</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> volverá a la [página 1](#settings-menu-vitalcontrol-page-1) del menú de configuración de `{{<T "VitalControl" >}}`.
