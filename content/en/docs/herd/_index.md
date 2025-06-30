---
title: "Herd"
linkTitle: "Herd"
date: 2023-07-28T13:25:28+02:00
weight: 80
draft: false
slug: herd
description: >
 View important information about your herd.
categories: [Herd]
tags: [Herd, Temperature, Weight, Rating, Animal data]
translationKey: herd
maphilight: true
---

In this menu you have the following possibilities:

- Perfom an [action](#call-action-menu) for the selected animal <img src="/digits/1_negative_circled.svg" width="20" align="middle" id="FigureOverview_Digit_1" alt="Circled digit 1" title="Digit 1"/>
- [Search](#search-for-an-animal) or [filter](#apply-a-filter) animals  <img src="/digits/2_negative_circled.svg" width="20" align="middle" id="FigureOverview_Digit_2" alt="Circled digit 2" title="Digit 2"/>
- [Configure display settings](#configure-display-settings) <img src="/digits/3_negative_circled.svg" width="20" align="middle" id="FigureOverview_Digit_3" alt="Circled digit 3" title="Digit 3"/>

<figure class="figure" style="margin-top: 5px;">
    <img src="images/overview.png" id="FigureOverview" usemap="#FigureOverviewMap" style="max-width: 60%;" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Herd: Available options in Herd menu" title="Herd: Available options in Herd menu" />
    <figcaption class="figure-caption fs-6"> Figure 1: <span style="font-style: italic;">Available options in Herd menu</figcaption>
</figure>

<map name="FigureOverviewMap">
    <area shape="rect" coords="0,430,240,783" alt='{{<T "ChooseAction" >}}' title='{{<T "ChooseAction" >}}' href="#call-action-menu">
    <area shape="rect" coords="312,430,550,783" alt='{{<T "SearchAnimal" >}}' title='{{<T "SearchAnimal" >}}' href="#search-for-an-animal">
    <area shape="rect" coords="625,380,862,783" alt='{{<T "FurtherActions" >}}' title='{{<T "FurtherActions" >}}' href="#configure-display-settings">
</map>

### Call action menu {#call-action-menu}

You always have the option to call up the action menu for an animal.

1. On the main screen of your {{<T "VitalControl" >}} device, select the menu item &nbsp;<img src="/icons/main/herd.svg" width="60" align="bottom" alt="Open popup" />&nbsp; `{{<T "Herd" >}}` and press the `{{<T "Ok" >}}` button. Your herd overview opens.

2. Select an animal from the list with the arrow keys △ ▽ and confirm with `{{<T "Ok" >}}`. The action menu is now open. How to use this can be found [here](../actions).

4. Return to the herd list with the `F1`  &nbsp;<img src="/icons/footer/exit.svg" width="15" align="bottom" alt="Open popup" />&nbsp; key.

    ![VitalControl: Menu Herd](images/action.png "Call actions")

### Search or filter animals {#search-or-filter-animals}

It is also possible to search for a specific animal or set a filter.

* `{{<T "SearchAnimal" >}}` <img src="/digits/1_negative_circled.svg" width="20" align="middle" alt="Circled digit 1" title="Digit 1"/>

    Search for an animal allows you to search for an animal number using the arrow keys △ ▽ ◁ ▷. For more information about `{{<T "SearchAnimal" >}}` see [here]({{< relref "docs/filter/_index.md" >}}).

* `{{<T "SetFilter" >}}` <img src="/digits/2_negative_circled.svg" width="20" align="middle" alt="Circled digit 2" title="Digit 2"/>

    You can use the filter to limit which animals are displayed in the selection list. For more information about `{{<T "SetFilter" >}}` see [here]({{< relref "docs/filter/_index.md" >}}).

<figure class="figure" style="margin-top: 5px;">
    <img src="images/secondFlowChart.png" id="Figure2"  style="max-width: 60%;" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Herd: Search and set filter" title="Herd: Search and set filter" />
    <figcaption class="figure-caption fs-6">Figure 2: <span style="font-style: italic;">Search and set filter</figcaption>
</figure>

#### Search for an animal

1. On the main screen of your {{<T "VitalControl" >}} device, select the menu item &nbsp;<img src="/icons/main/herd.svg" width="60" align="bottom" alt="Open popup" />&nbsp; `{{<T "Herd" >}}` and press the `{{<T "Ok" >}}` button. Your herd overview opens.

1. Use the `F2` &nbsp;<img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" />&nbsp; to get to the search input. Alternatively use the `F3` key &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; to invoke the popup menu that lists all the available options. Use the arrow keys △ ▽ to highlight `{{<T "SearchAnimal" >}}` and press the central `{{<T "Ok" >}}` button or the `F3` key `{{<T "Ok" >}}`.

1. Further information about the search input can be found [here]().

{{< tabpane >}}
{{< tab header="Search:" text=true disabled=true />}}
{{% tab header="Use of &nbsp;<img src='/icons/footer/search.svg' width='15' align='bottom' alt='Search' />&nbsp;" text=true %}}
![VitalControl: Herd information display {{<T "SearchAnimal" >}}](images/searchF2.png "Display {{<T "SearchAnimal" >}} information")
{{% /tab %}}
{{% tab header="Use of &nbsp;<img src='/icons/footer/open-popup.svg' width='15' align='bottom' alt='Open popup' />&nbsp;" text=true %}}
![VitalControl: Herd information display {{<T "SetFilter" >}}](images/search.png "Display {{<T "SetFilter" >}} information")
{{% /tab %}}
{{< /tabpane >}}

#### Apply a filter

1. On the main screen of your {{<T "VitalControl" >}} device, select the menu item &nbsp;<img src="/icons/main/herd.svg" width="60" align="bottom" alt="Open popup" />&nbsp; `{{<T "Herd" >}}` and press the `{{<T "Ok" >}}` button. Your herd overview opens.

1. Use the `F3` key &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; to invoke the popup menu that lists all the available options. Use the arrow keys △ ▽ to highlight `{{<T "SetFilter" >}}` and press the central `{{<T "Ok" >}}` button or the `F3` key `{{<T "Ok" >}}`.

1. Further information about filter can be found [here](../filter/_index.md).

![VitalControl: Menu Herd Filter](images/setfilter.png "Set a filter")

### Configure display settings  {#configure-display-settings}

Within the herd menu, you have several options to display the information of your animals in short form. All options are shown in [Figure 3](#Figure3) below.

* `{{<T "AnimalDataGenderType" >}}` <img src="/digits/1_negative_circled.svg" width="20" align="middle" alt="Circled digit 1" title="Digit 1"/>

    Under `{{<T "AnimalDataGenderType" >}}`, the two columns on the right show you both the sex and the type (cow, calf, sheep, lamb) of the respective animal.

* `{{<T "AnimalDataEartag" >}}` <img src="/digits/2_negative_circled.svg" width="20" align="middle" alt="Circled digit 2" title="Digit 2"/>

    Under `{{<T "AnimalDataEartag" >}}`, the right column show you the National animal ID of the respective animal.

* `{{<T "Temperature" >}}` <img src="/digits/3_negative_circled.svg" width="20" align="middle" alt="Circled digit 3" title="Digit 3"/>

    When you select `{{<T "Temperature" >}}`, the last measured temperature of the animal is displayed in the middle column. The right-hand column shows you how often which temperature category was measured for the respective animal in the last seven days.

* `{{<T "Rating" >}}` <img src="/digits/4_negative_circled.svg" width="20" align="middle" alt="Circled digit 4" title="Digit 4"/>

    By selecting `{{<T "Rating" >}}`, the most recent rating and the last two past ratings are displayed in the middle column. In the right-hand column you will find the frequencies of the respective score.

* `{{<T "Weight" >}}` <img src="/digits/5_negative_circled.svg" width="20" align="middle" alt="Circled digit 5" title="Digit 5"/>

    With selecting `{{<T "Weight" >}}`, the last recorded weight of the animal is displayed in the middle column. In the right-hand column you will find the daily weight gain.

<figure class="figure" style="margin-top: 5px;">
    <img src="images/flowChartHerdMinimal.png" id="Figure3" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Herd: Available information display in Herd menu" title="Herd: Available information display in Herd menu" />
    <figcaption class="figure-caption fs-6">Figure 3: <span style="font-style: italic;">Available information display in Herd menu</figcaption>
</figure>

To display the desired information, proceed as follows:

1. On the main screen of your {{<T "VitalControl" >}} device, select the menu item &nbsp;<img src="/icons/main/herd.svg" width="60" align="bottom" alt="Open popup" />&nbsp; `{{<T "Herd" >}}` and press the `{{<T "Ok" >}}` button. Your herd overview opens.

1. Use the `F3` key &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; to invoke the popup menu that lists the information categories. Use the arrow keys △ ▽ to highlight your desired selection and display this category by pressing the central `{{<T "Ok" >}}` button or the `F3` key `{{<T "Ok" >}}`.

1. Alternatively, you can use the arrow keys ◁ ▷ to switch between the different display options.

{{< tabpane >}}
{{< tab header="Display settings: " text=true disabled=true />}}
{{% tab header="{{< T \"AnimalDataGenderType\" >}}" text=true %}}
![VitalControl: Herd information display {{<T "AnimalDataGenderType" >}}](images/animaldataGender.png "Display {{<T "AnimalDataGenderType" >}} information")
{{% /tab %}}
{{% tab header="{{< T \"AnimalDataEartag\" >}}" text=true %}}
![VitalControl: Herd information display {{<T "AnimalDataEartag" >}}](images/animaldata.png "Display {{<T "AnimalDataEartag" >}} information")
{{% /tab %}}
{{% tab header="{{< T \"Temperature\" >}}" text=true %}}
![VitalControl: Herd information display {{<T "Temperature" >}}](images/temperature.png "Display {{<T "Temperature" >}} information")
{{% /tab %}}
{{% tab header="{{< T \"Rating\" >}}" text=true %}}
![VitalControl: Herd information display {{<T "Rating" >}}](images/rating.png "Display {{<T "Rating" >}} information")
{{% /tab %}}
{{% tab header="{{< T \"Weight\" >}}" text=true %}}
![VitalControl: Herd information display {{<T "Weight" >}}](images/weight.png "Display {{<T "Weight" >}} information")
{{% /tab %}}
{{< /tabpane >}}
