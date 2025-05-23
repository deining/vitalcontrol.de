---
title: Ativação e Configuração Única do Dispositivo nas Configurações do Alimentador Automático
linkTitle: Configuração
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Antes de usar o VitalControl pela primeira vez, você deve ativá-lo e configurá-lo adequadamente uma vez nas configurações do alimentador Alma Pro.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
Para ativar e configurar o dispositivo VitalControl, proceda da seguinte forma:

## Navegação para o menu de configurações `{{<T "VitalControl" >}}`

{{% alert title="Atenção" %}}
Para ativar e configurar o dispositivo {{<T "VitalControl" >}}, você deve estar logado como o usuário com função de {{<T "SiteManager" >}} no alimentador automático. Caso contrário, alguns dos botões mostrados e descritos abaixo não estarão visíveis para você.
{{% /alert %}}

1. Clique no botão inferior <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Menu de Configurações" title="Configurações"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> na barra lateral esquerda do terminal de toque. Se você estiver no menu principal onde nenhuma barra lateral é visível, pressione o botão &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Menu do Alimentador" title="Menu do Alimentador"/>`{{<T "Feeder" >}}`para exibir a barra lateral.

1. Clique no segundo botão da esquerda <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Configurações do Terminal de Toque" title="Configurações de Toque"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> na barra de ferramentas inferior do terminal de toque.

1. Uma série de itens de menu agora aparece na metade esquerda da área central da tela. Clique no botão inferior `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Um item de menu (ou possivelmente vários) agora aparece na metade direita da área central da tela. Clique no botão superior `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. O botão agora muda para a metade esquerda da tela.

1. Na parte inferior do lado direito da tela, o botão &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Abrir configurações do VitalControl" title="Abrir configurações" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span> agora é exibido. Clique neste botão, e uma janela pop-up será aberta, exibindo [Página 1](#settings-menu-vitalcontrol-page-1) do menu de configurações `{{<T "VitalControl" >}}`.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Configurações do VitalControl: Acesso" title="Acessar o menu de configurações do VitalControl" />
    <figcaption class="figure-caption fs-6">Captura de tela 1: Acessando o menu de configurações do <span style="font-style: italic;">{{<T "VitalControl" >}}</span></figcaption>
</figure>

O menu de configurações do `{{<T "VitalControl" >}}` está distribuído em duas páginas:

## Menu de Configurações do `{{<T "VitalControl" >}}` - Página 1 {#settings-menu-vitalcontrol-page-1}

A Página 1 do menu de configurações do <span style="font-style: italic;">{{<T "VitalControl" >}}</span> é apresentada da seguinte forma:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Menu de configurações do VitalControl: Página 1" title="Configurações do VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Captura de tela 2: Menu de configurações do <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Página 1</figcaption>
</figure>

Nesta página, você pode realizar as seguintes ações e configurações.

### Ativação do Dispositivo {{<T "VitalControl" >}} {#activation-vitalcontrol}

No estado padrão da máquina, o {{<T "VitalControl" >}} está desativado. Ajuste o interruptor <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> <span style="font-size: 140%">➀</span> para a posição à direita <span style="font-style: italic;">{{<T "YES" >}}</span> para ativar o dispositivo {{<T "VitalControl" >}}. Subsequentemente, na barra lateral direita do menu do alimentador, abaixo do(s) ícone(s) da(s) máquina(s) conectada(s), o ícone <img src="/icons/device.svg" width="20" align="bottom" alt="Dispositivo VitalControl" title="VitalControl"/> para o dispositivo `{{<T "VitalControl" >}}` será exibido (veja Captura de tela <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Menu do Alimentador</a></span>, figura <span style="font-size: 140%">➁</span> lá).

### Alimentador automático de sincronização <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

No lado esquerdo da tela, há duas caixas de seleção:

* Caixa de seleção <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Esta opção controla o comportamento no caso de haver animais presentes no alimentador durante a sincronização que ainda não são conhecidos pelo dispositivo {{<T "VitalControl" >}}. Esta opção está ativada por padrão e geralmente deve permanecer configurada. Se você registrar seus animais comprados escaneando seus passaportes de animais, esta opção deve ser desativada.

    <span style="font-weight: bold">Ative</span> esta opção:

    - se você tiver um {{<T "VitalControl" >}} novo à sua frente, para o qual deseja transferir todos os animais de um alimentador. Após a sincronização, todos os animais conhecidos pelo alimentador também estarão presentes no {{<T "VitalControl" >}}.
    - se você continuamente trouxer novos bezerros para o alimentador durante as operações em andamento. Esses animais também serão criados no dispositivo {{<T "VitalControl" >}} durante a sincronização.

    <span style="font-weight: bold">Desative</span> esta opção:

    - se você tiver animais recém-criados no seu {{<T "VitalControl" >}} escaneando seus passaportes de animais, onde
    - esses animais ainda não foram atribuídos a um transponder e
    - esses animais já estão sendo alimentados no alimentador e, portanto, estão registrados lá.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Atenção</span><br>
                Se a opção permanecer configurada na configuração acima, os animais estarão presentes duas vezes no {{<T "VitalControl" >}} após a sincronização.
            </div>
        </div>

* Caixa de seleção <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Esta opção controla se os animais que estão presentes apenas no {{<T "VitalControl" >}} mas não no alimentador são excluídos do {{<T "VitalControl" >}} durante a próxima sincronização. Se você usa o {{<T "VitalControl" >}} apenas durante o período de lactação dos animais, esta opção deve ser ativada. Se você deseja acompanhar os animais além do período de lactação, deve desativar esta opção.

    <span style="font-weight: bold">Ative</span> esta opção:

    - se você coleta dados dos animais apenas durante o período de lactação,
    - se você deseja que os animais sejam excluídos do {{<T "VitalControl" >}} durante a próxima sincronização após terem sido excluídos do alimentador. Desta forma, os animais não se acumulam no {{<T "VitalControl" >}} ao longo do tempo.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Atenção</span><br>
            Se esta opção estiver ativada e a caixa de seleção <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> também estiver ativada, nenhum animal será excluído que seja mais jovem do que o especificado no campo numérico <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Desative</span> esta opção:
    - se você deseja continuar coletando dados dos animais após o período de lactação, por exemplo, durante uma pesagem,
    - se você estiver disposto a excluir manualmente os animais do {{<T "VitalControl" >}} você mesmo.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenção</span><br>
        Se você desativar esta opção, deve desvincular o transponder para animais desmamados no dispositivo {{<T "VitalControl" >}} o mais tardar quando a coleira for removida do bezerro desmamado para outro bezerro mais jovem. Se o transponder não for removido, os registros de dados do animal mais jovem - que agora está usando a coleira anterior do animal desmamado - serão adicionados incorretamente ao conjunto de dados dos animais desmamados.
    </div>
</div>

### Sincronização {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Alimentador Automático

No lado direito da tela, há uma caixa de seleção e dois campos de entrada:

* Caixa de seleção <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Esta opção controla se os animais presentes no {{<T "VitalControl" >}}, que são desconhecidos para o alimentador, serão criados no alimentador durante a próxima sincronização. Por padrão, esta opção não está ativada.

    <span style="font-weight: bold">Desative</span> esta opção ou deixe-a desativada:

    - se você usar seu dispositivo {{<T "VitalControl" >}} em vários alimentadores simultaneamente,
    - se você levar seus animais diretamente ao alimentador sem registrá-los primeiro através do dispositivo {{<T "VitalControl" >}}. Seus animais serão então criados automaticamente durante o registro quando forem alimentados no alimentador pela primeira vez.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Atenção</span><br>
            Se o {{<T "VitalControl" >}} for usado em várias máquinas e esta opção estiver marcada, os animais serão transferidos involuntariamente de uma máquina para outra durante a sincronização.
        </div>
    </div>

<span style="font-weight: bold">Ative</span> esta opção:

- se o registro inicial dos seus animais recém-nascidos no {{<T "VitalControl" >}} ocorrer antes da primeira alimentação no alimentador.
- se você registrar seus animais comprados escaneando seus passaportes de animais no {{<T "VitalControl" >}}.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenção</span><br>
        Ative esta opção apenas se você usar o {{<T "VitalControl" >}} em uma única máquina! Se você quiser realizar a sincronização com várias máquinas com esta opção ativada, deve usar um dispositivo {{<T "VitalControl" >}} separado para cada máquina.
    </div>
</div>

* Menu suspenso <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Neste menu suspenso, você pode selecionar a curva de alimentação que é atribuída aos animais que são recém-criados no alimentador durante a sincronização.

* Campo de entrada numérica<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Neste campo numérico, você pode especificar a idade mínima (em dias) a partir da qual os animais são recém-criados no alimentador durante a sincronização. Animais que são mais jovens que a idade mínima especificada **não** são criados durante a sincronização.

Pressione o botão <span style="font-size: 140%">⑧</span> para mudar para [página 2](#settings-menu-vitalcontrol-page-2) do <span style="font-style: italic;">menu de configurações {{<T "VitalControl" >}}</span>.

## Menu de Configurações `{{<T "VitalControl" >}}` - Página 2 {#settings-menu-vitalcontrol-page-2}

### Como lidar com conflitos de dados durante a sincronização

Conflitos de dados podem ocorrer ao sincronizar os dados entre o alimentador e o dispositivo {{<T "VitalControl" >}}. Um conflito de dados ocorre quando os dados se contradizem no dispositivo {{<T "VitalControl" >}} e no alimentador (por exemplo, em relação ao <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). Nesta página 2 do menu de configurações, você pode especificar se e como os conflitos de dados são resolvidos durante a sincronização. Existem três opções aqui:

* Prioridade é dada aos dados do alimentador, os dados no dispositivo {{<T "VitalControl" >}} são sobrescritos com os do alimentador\.
  Ative esta opção selecionando o botão de rádio na coluna à esquerda abaixo do símbolo do alimentador <span style="font-size: 140%">➃</span>.

* Prioridade é dada aos dados do {{<T "VitalControl" >}}, os dados no alimentador são sobrescritos com os do dispositivo {{<T "VitalControl" >}}\.
  Ative esta opção selecionando o botão de rádio na coluna à esquerda abaixo do {{<T "VitalControl" >}} <span style="font-size: 140%">⑤</span>.

* Nenhuma alteração é feita, tanto os dados do alimentador quanto os dados do dispositivo {{<T "VitalControl" >}} permanecem inalterados.\ 
  Ative esta opção selecionando o botão de rádio na coluna à direita <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Exemplo</span><br>
            Após a compra de um lote de bezerros, você registra seus animais comprados no {{<T "VitalControl" >}} escaneando todos os passaportes dos animais. Os números dos animais para esses animais no {{<T "VitalControl" >}} são então – dependendo das <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">configurações do dispositivo</a> – os últimos 3-5 dígitos do passaporte do animal. Você então coloca colares com transponders Urban nos animais recém-comprados e os alimenta no alimentador automático. Durante a visita inicial à estação, os animais são registrados usando seu transponder e criados novamente no alimentador. No entanto, os números dos animais para esses novos animais no alimentador são derivados do número do transponder ou correspondem ao número do animal armazenado para este transponder no alimentador. Isso significa que um número de animal diferente foi agora atribuído ao mesmo animal no dispositivo {{<T "VitalControl" >}} e no alimentador, resultando em um conflito de dados. Usando os botões de rádio para o <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>, você pode agora especificar no menu de configurações qual dos dois números de animais paralelos tem prioridade e qual será excluído durante a sincronização.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Menu de Configurações VitalControl: Página 2" title="Configurações VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Captura de Tela 3: Menu de Configurações <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Página 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Atenção</span><br>
        Por razões internas, as alterações atualmente só podem ser feitas no <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. Em versões futuras do firmware, você também poderá fazer alterações no <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> e na <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

Ao pressionar o <span style="font-style: italic;">botão</span> <span style="font-size: 140%">⑧</span> você retornará à [página 1](#settings-menu-vitalcontrol-page-1) do menu de configurações do `{{<T "VitalControl" >}}`.
