---
title: Sincronização de dados entre VitalControl e Alma Pro
linkTitle: Sincronização
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Sincronize os animais armazenados no dispositivo VitalControl com os animais registrados no alimentador automático e transfira os valores medidos registrados com o dispositivo VitalControl para o alimentador para fins de avaliação e melhor visualização.
weight: 20
categories: [Troca de dados, Alma Pro]
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

Para realizar a sincronização entre o alimentador automático Alma Pro e o dispositivo VitalControl, proceda da seguinte forma:

## Abrir porta USB

1. Use uma pequena chave de fenda para soltar o parafuso de bloqueio na aba da porta USB e abaixe-a:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Abrir porta USB" title="Abrir porta USB" /></a>
        <figcaption class="figure-caption fs-6">Figura 1: Abrir porta USB</figcaption>
    </figure>

## Conectar VitalControl

2. Ligue o dispositivo VitalControl pressionando o botão central superior `On/Off` &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Botão On/Off" />.

2. Conecte a entrada USB-C do dispositivo VitalControl usando o cabo USB fornecido <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Dígito 1 em círculo" title="Dígito 1" /> com a entrada USB-A da tela sensível ao toque <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Dígito 2 em círculo" title="Dígito 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Conectar VitalControl ao Alma Pro" title="Conexão VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Figura 2: Conectando VitalControl ao Alma Pro</figcaption>
</figure>

### Iniciar sincronização

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenção</span><br>
        Para iniciar a sincronização do dispositivo VitalControl, você deve estar logado na máquina com o papel de usuário <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span>. Caso contrário, o botão <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> no <a href="#synchronise-vc-ap" >menu de Sincronização</a> estará desativado.
    </div>
</div>

4. Na barra lateral esquerda do terminal de toque, clique no segundo botão de cima para baixo <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Menu Alimentador" title="Menu Alimentador"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Dígito 1" title="Dígito 1" />. Se você estiver no menu principal onde nenhuma barra lateral é visível, pressione o botão &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Menu Alimentador" title="Menu Alimentador"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> para abrir o menu do alimentador.

1. Na barra lateral direita do terminal de tela sensível ao toque, abaixo do(s) símbolo(s) para o(s) alimentador(es) conectado(s), o símbolo <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Dígito 2 em círculo" title="Dígito 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="Dispositivo VitalControl" title="VitalControl"/> para o dispositivo `{{<T "VitalControl" >}}` agora é exibido. Clique neste símbolo.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Atenção</span><br>
            Se o símbolo <img src="/icons/device.svg" width="25" align="bottom" alt="Dispositivo VitalControl" title="VitalControl"/> para o dispositivo <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> na barra lateral direita <span style="font-weight: bold;">não</span> for exibido, o dispositivo ainda está desativado nas configurações. Nesse caso, siga as instruções para a <a href="../configuration" >ativação</a> única do dispositivo.
        </div>
    </div>

1. A tela de sincronização agora aparecerá. Clique no botão <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="número 3 em círculo" title="número 3" /> `{{<T "Synchronize" >}}` no meio, na parte inferior, para iniciar a sincronização com o dispositivo VitalControl.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronise-vc-ap"><img src="../images/synchronise-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Sincronização VitalControl com Alma Pro" title="Sincronização VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Figura 3: Sincronização do VitalControl com o alimentador automático Alma Pro</figcaption>
    </figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenção</span><br>
        Se muitos animais precisarem ser transferidos, a sincronização pode demorar algum tempo. Você pode ver o progresso da sincronização no visor do dispositivo VitalControl.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Sincronização VitalControl Alma Pro, indicador de progresso" title="Progresso da sincronização" /></a>
            <figcaption class="figure-caption fs-6">Figura 4: Sincronização VitalControl Alma Pro, indicador de progresso</figcaption>
        </figure>
    </div>
</div>

## Fechar porta USB

7. Após a sincronização bem-sucedida, desconecte o cabo USB da porta USB na tela sensível ao toque. Dobre a tampa protetora da porta para cima e fixe-a apertando o parafuso de bloqueio com uma pequena chave de fenda.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Fechar porta USB" title="Fechar porta USB" /></a>
    <figcaption class="figure-caption fs-6">Figura 5: Fechar porta USB novamente</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Nota</span><br>
        Certifique-se de fechar a tampa da porta USB após cada sincronização para evitar que a umidade entre na porta e para proteger a porta do ar corrosivo presente no seu celeiro!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Fechamento obrigatório da porta USB" title="Fechamento obrigatório da porta USB" /></a>
            <figcaption class="figure-caption fs-6">Figura 6: Fechamento obrigatório da porta USB</figcaption>
        </figure>
    </div>
</div>

Parece que não há conteúdo para traduzir. Por favor, cole o conteúdo Markdown que você gostaria que eu traduzisse.
