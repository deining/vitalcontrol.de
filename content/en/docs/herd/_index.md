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
## Herd {#herd}

In this menu you have the following possibilities:

- Choose which [information about the animals should be displayed](#available-information-display)
- [Filter](#search-animal-and-set-filter) the displayed animals or [search](#search-animal-and-set-filter) for an specific one
- Immediately call the [action menu](#call-action-menu)

### Available information display {#available-information-display}

Within the herd menu, you have several options to display the information of your animals in short form. All options are shown in [Figure 1](#Figure1) below.

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
    <img src="images/flowChartHerdMinimal.png" usemap="#Figure1" id="Figure1"  style="max-width: 60%;" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: check of firmware version" title="Alma Pro: check of firmware version" />
    <figcaption class="figure-caption fs-6">Figure 1: <span style="font-style: italic;">Available information display in Herd menu</figcaption>
</figure>

<map name="Figure1">
    <area shape="rect" coords="296,5,554,329" alt='{{<T "AnimalDataGenderType" >}}' title='Display {{<T "AnimalDataGenderType" >}}' href="#Figure1_Digit_1">
    <area shape="rect" coords="574,76,833,400" alt='{{<T "AnimalDataEartag" >}}' title='Display {{<T "AnimalDataEartag" >}}' href="#Figure1_Digit_2">
    <area shape="rect" coords="852,333,1111,656" alt='{{<T "Temperature" >}}' title='Display {{<T "Temperature" >}}' href="#Figure1_Digit_3">
    <area shape="rect" coords="574,594,833,917" alt='{{<T "Rating" >}}' title='Display {{<T "Rating" >}}' href="#Figure1_Digit_4">
    <area shape="rect" coords="296,732,554,1055" alt='{{<T "Weight" >}}' title='Display {{<T "Weight" >}}' href="#Figure1_Digit_5">
</map>

To display the desired information, proceed as follows:

1. On the main screen of your {{<T "VitalControl" >}} device, select the menu item &nbsp;<img src="/icons/main/herd.svg" width="60" align="bottom" alt="Open popup" />&nbsp; `{{<T "Herd" >}}` and press the `{{<T "Ok" >}}` button. Your herd overview opens.

1. Use the `F3` key &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; to invoke the popup menu that lists the information categories. Use the arrow keys △ ▽ to highlight your desired selection and display this category by pressing the central `{{<T "Ok" >}}` button or the `F3` key `{{<T "Ok" >}}`.

1. Alternatively, you can use the arrow keys ◁ ▷ to switch between the different display options.

{{< tabpane >}}
{{< tab header="Selection of the desired information display: " text=true disabled=true />}}
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

### Search animal and set filter {#search-animal-and-set-filter}

It is also possible to search for a specific animal or set a filter.

* `{{<T "SearchAnimal" >}}` <img src="/digits/1_negative_circled.svg" width="20" align="middle" alt="Circled digit 1" title="Digit 1"/>

    Search for an animal allows you to search for an animal number using the arrow keys △ ▽ ◁ ▷. For more information about `{{<T "SearchAnimal" >}}` see [here]({{< relref "docs/filter/_index.md" >}}).

* `{{<T "SetFilter" >}}` <img src="/digits/2_negative_circled.svg" width="20" align="middle" alt="Circled digit 2" title="Digit 2"/>

    You can use the filter to limit which animals are displayed in the selection list. For more information about `{{<T "SetFilter" >}}` see [here]({{< relref "docs/filter/_index.md" >}}).

<figure class="figure" style="margin-top: 5px;">
    <img src="images/secondFlowChart.png" id="Figure2"  style="max-width: 60%;" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: check of firmware version" title="Alma Pro: check of firmware version" />
    <figcaption class="figure-caption fs-6">Figure 1: <span style="font-style: italic;">Available information display in Herd menu</figcaption>
</figure>

To search for an animal or to set a filter, proceed as follows:

1. On the main screen of your {{<T "VitalControl" >}} device, select the menu item &nbsp;<img src="/icons/main/herd.svg" width="60" align="bottom" alt="Open popup" />&nbsp; `{{<T "Herd" >}}` and press the `{{<T "Ok" >}}` button. Your herd overview opens.

1. Use the `F3` key &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; to invoke the popup menu that lists all the available options. Use the arrow keys △ ▽ to highlight `{{<T "SearchAnimal" >}}` or `{{<T "SetFilter" >}}` and press the central `{{<T "Ok" >}}` button or the `F3` key `{{<T "Ok" >}}`.

{{< tabpane >}}
{{< tab header="Selection of the desired information display: " text=true disabled=true />}}
{{% tab header="{{< T \"SearchAnimal\" >}}" text=true %}}
![VitalControl: Herd information display {{<T "SearchAnimal" >}}](images/search.png "Display {{<T "SearchAnimal" >}} information")
{{% /tab %}}
{{% tab header="{{< T \"SetFilter\" >}}" text=true %}}
![VitalControl: Herd information display {{<T "SetFilter" >}}](images/setfilter.png "Display {{<T "SetFilter" >}} information")
{{% /tab %}}
{{< /tabpane >}}

### Call action menu {#call-action-menu}

You always have the option to call up the action menu for an animal.

1. On the main screen of your {{<T "VitalControl" >}} device, select the menu item &nbsp;<img src="/icons/main/herd.svg" width="60" align="bottom" alt="Open popup" />&nbsp; `{{<T "Herd" >}}` and press the `{{<T "Ok" >}}` button. Your herd overview opens.

2. Select an animal from the list with the arrow keys △ ▽ and confirm with `{{<T "Ok" >}}`. The action menu is now open. How to use this can be found [here](../actions).

4. Return to the herd list with the `F3` key.

    ![VitalControl: Menu Herd](images/action.png "Call actions")
