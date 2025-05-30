---
title: Sincronización de datos entre VitalControl y Alma Pro
linkTitle: Sincronización
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Sincroniza los animales almacenados en el dispositivo VitalControl con los animales registrados en el comedero automático y transfiere los valores medidos registrados con el dispositivo VitalControl al comedero para fines de evaluación y mejor visualización.
weight: 20
categories: [Intercambio de datos, Alma Pro]
translationKey: alma-pro/synchronisation
aliases: /vc/sync/es
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Para llevar a cabo la sincronización entre el comedero automático Alma Pro y el dispositivo VitalControl, proceda de la siguiente manera:

## Abrir puerto USB

1. Use un destornillador pequeño para aflojar el tornillo de bloqueo en la tapa del puerto USB y dóblelo hacia abajo:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Abrir puerto USB" title="Abrir puerto USB" /></a>
        <figcaption class="figure-caption fs-6">Figura 1: Abrir puerto USB</figcaption>
    </figure>

## Conectar VitalControl

2. Encienda el dispositivo VitalControl presionando el botón central superior `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Botón On/Off" />.

2. Conecte el enchufe USB-C del dispositivo VitalControl usando el cable USB suministrado <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> con el enchufe USB-A de la pantalla táctil <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Figura 2: Conectando VitalControl a Alma Pro</figcaption>
</figure>

### Iniciar sincronización

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atención</span><br>
        Para iniciar la sincronización del dispositivo VitalControl, debe haber iniciado sesión en la máquina con el rol de usuario <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. De lo contrario, el botón <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> en el <a href="#synchronise-vc-ap" >menú de sincronización</a> estará deshabilitado.
    </div>
</div>

4. En la barra lateral izquierda del terminal táctil, haga clic en el segundo botón desde arriba <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Si está en el menú principal donde no se ve la barra lateral, presione el botón &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> para abrir el menú del alimentador.

1. En la barra lateral derecha del terminal táctil, debajo del símbolo(s) para el(los) alimentador(es) conectado(s), ahora se muestra el símbolo <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Dígito 2 en círculo" title="Dígito 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="Dispositivo VitalControl" title="VitalControl"/> para el dispositivo `{{<T "VitalControl" >}}`. Haz clic en este símbolo.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Atención</span><br>
            Si el símbolo <img src="/icons/device.svg" width="25" align="bottom" alt="Dispositivo VitalControl" title="VitalControl"/> para el dispositivo <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> en la barra lateral derecha <span style="font-weight: bold;">no</span> se muestra, el dispositivo aún está desactivado en la configuración. En este caso, sigue las instrucciones para la <a href="../configuration" >activación</a> única del dispositivo.
        </div>
    </div>

1. Ahora aparecerá la pantalla de sincronización. Haz clic en el botón <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="número 3 en círculo" title="número 3" /> `{{<T "Synchronize" >}}` en el medio en la parte inferior para iniciar la sincronización con el dispositivo VitalControl.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Sincronización VitalControl con Alma Pro" title="Sincronización VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Figura 3: Sincronización de VitalControl con el alimentador automático Alma Pro</figcaption>
    </figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atención</span><br>
        Si muchos animales necesitan ser transferidos, la sincronización puede tardar algún tiempo. Puede ver el progreso de la sincronización en la pantalla del dispositivo VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Sincronización VitalControl Alma Pro, indicador de progreso" title="Progreso de sincronización" /></a>
            <figcaption class="figure-caption fs-6">Figura 4: Sincronización VitalControl Alma Pro, indicador de progreso</figcaption>
        </figure>
    </div>
</div>

## Cerrar puerto USB

7. Después de una sincronización exitosa, desconecte el cable USB del puerto USB en la pantalla táctil. Pliegue la tapa protectora del puerto y asegúrela apretando el tornillo de bloqueo con un destornillador pequeño.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Cerrar puerto USB" title="Cerrar puerto USB" /></a>
    <figcaption class="figure-caption fs-6">Figura 5: Cerrar puerto USB nuevamente</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Nota</span><br>
        Asegúrese de cerrar la tapa del puerto USB después de cada sincronización para evitar que la humedad entre en el puerto y para proteger el puerto del aire corrosivo presente en su establo!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Cierre obligatorio del puerto USB" title="Cierre obligatorio del puerto USB" /></a>
            <figcaption class="figure-caption fs-6">Figura 6: Cierre obligatorio del puerto USB</figcaption>
        </figure>
    </div>
</div>
