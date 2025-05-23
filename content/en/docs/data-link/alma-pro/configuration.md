---
title: One-time Activation and Configuration of the Device in the automatic feeder Settings
linkTitle: Configuration
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Before using the VitalControl for the first time, you must activate and properly configure it once in the settings of Alma Pro feeder.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
---
## Requirements

We recommend using a firmware version <span style="font-weight: bold">24-xx-xx</span> or higher with the VitalControl device.\
To check which firmware version is installed on your device:

* Navigate to the feeder's home page by clicking the top `Home` button <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Home screen icon" title="Alma Pro: Home screen"/>&nbsp; in the navigation bar in the left-hand area of ​​the screen.
* On the home screen, click the `Help` button <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Help menu icon" title="Alma Pro: Help screen"/>&nbsp; in the top-right area of ​​the screen.
* The version number <span style="font-size: 140%">➂</span> is now displayed to the left of the language switch button.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: check of firmware version" title="Alma Pro: check of firmware version" />
    <figcaption class="figure-caption fs-6">Screenshot 1: <span style="font-style: italic;">Alma Pro: check of firmware version</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        If the firmware version of your feeder is lower than <span style="font-weight: bold">24-xx-xx</span>, there may be discrepancies between the screenshots below and the display on your touchscreen, so that you may not be able to follow the instructions. In this case, contact your service technician to update the firmware on your feeder.<br>
    </div>
</div>

## Navigation to settings menu `{{<T "VitalControl" >}}`

{{% alert title="Attention" %}}
To activate and set up the {{<T "VitalControl" >}} device, you must be logged in as the {{<T "SiteManager" >}} user role at the automatic feeder. Otherwise, some of the buttons shown and described below will not be visible to you.
{{% /alert %}}

1. Click on the bottom button <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Settings Menu" title="Settings"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span> in the left sidebar of the touch terminal. If you are in the main menu where no sidebar is visible, press the button &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder Menu" title="Feeder Menu"/>`{{<T "Feeder" >}}`to display the sidebar.

1. Click on the second button from the left <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Touch Terminal Settings" title="Touch Settings"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span> in the bottom toolbar of the touch terminal.

1. A series of menu items now appears on the left half of the central screen area. Click on the bottom button `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. A menu item (or possibly several) now appears on the right half of the central screen area. Click on the top button `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. The button now switches to the left screen half.

1. At the bottom of the right side of the screen, the button &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Open VitalControl settings" title="Open settings" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span> is now displayed. Click this button, and a popup window will open, displaying [Page 1](#settings-menu-vitalcontrol-page-1) of the `{{<T "VitalControl" >}}` settings menu.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" usemap="#NavigationToVitalControlSettingsMenu" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl settings: Access" title="Access VitalControl settings menu" />
    <figcaption class="figure-caption fs-6">Screenshot 1: Accessing the <span style="font-style: italic;">{{<T "VitalControl" >}}</span> settings menu</figcaption>
</figure>

The `{{<T "VitalControl" >}}` settings menu is spread across two pages:

## `{{<T "VitalControl" >}}` Settings Menu - Page 1 {#settings-menu-vitalcontrol-page-1}

Page 1 of the <span style="font-style: italic;">{{<T "VitalControl" >}}</span> settings menu is presented as follows:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" usemap="#VitalControlSettingsPage1" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl settings menu: Page 1" title="VitalControl settings (1)" />
    <figcaption class="figure-caption fs-6">Screenshot 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> settings menu, Page 1</figcaption>
</figure>

On this page, you can perform the following actions and settings.

### Activation of the {{<T "VitalControl" >}} Device {#activation-vitalcontrol}

In the default state of the machine, the {{<T "VitalControl" >}} is deactivated. Set the <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> switch <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> to the right position <span style="font-style: italic;">{{<T "YES" >}}</span> to activate the {{<T "VitalControl" >}} device. Subsequently, in the right sidebar of the feeder menu, below the icon(s) for the connected machine(s), the icon <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl device" title="VitalControl"/> for the `{{<T "VitalControl" >}}` device will be displayed (see Screenshot <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Feeder Menu</a></span>, figure <span style="font-size: 140%">➁</span> there).

### Synchronisation automatic feeder <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

On the left side of the screen, there are two checkboxes:

* Checkbox <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

    This option controls the behavior in the event that animals are present on the feeder during synchronisation that are not yet known to the {{<T "VitalControl" >}} device. This option is enabled by default and should generally remain set. If you register your purchased animals by scanning their animal passports, this option must be disabled.

    <span style="font-weight: bold">Enable</span> this option:

    - if you have a brand-new {{<T "VitalControl" >}} in front of you, onto which you want to transfer all animals from a feeder. After synchronisation, all animals known to the feeder will also be present on the {{<T "VitalControl" >}}.
    - if you continuously bring new calves to the feeder during ongoing operations. These animals will then also be created on the {{<T "VitalControl" >}} device during synchronisation.

    <span style="font-weight: bold">Disable</span> this option:

    - if you have newly created animals on your {{<T "VitalControl" >}} by scanning their animal passports, where
    - these animals have not yet been assigned a transponder and
    - these animals are already being fed at the feeder and are therefore registered there.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Attention</span><br>
                If the option remains set in the above configuration, animals will be present twice on the {{<T "VitalControl" >}} after synchronisation.
            </div>
        </div>

* Checkbox <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

    This option controls whether animals that are only present on the {{<T "VitalControl" >}} but not on the feeder are deleted from the {{<T "VitalControl" >}} during the next synchronisation. If you use the {{<T "VitalControl" >}} only during the animals' milk period, this option should be enabled. If you want to track the animals beyond the milk period, you must disable this option.

    <span style="font-weight: bold">Enable</span> this option:

    - if you only collect data for the animals during the milk period,
    - if you want the animals to be deleted from the {{<T "VitalControl" >}} during the next synchronisation after they have been deleted from the feeder. This way, animals do not accumulate on the {{<T "VitalControl" >}} over time.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            If this option is activated and the checkbox <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> is also activated, no animals will be deleted that are younger than specified in the number field <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>.
        </div>
    </div>

    <span style="font-weight: bold">Disable</span> this option:
    - if you want to continue collecting data for the animals after the milk period, for example, during a weighing,
    - if you are willing to manually delete the animals from the {{<T "VitalControl" >}} yourself.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            If you disable this option, you must unlink the transponder for weaned animals on {{<T "VitalControl" >}} device at the latest when the collar is removed from the weaned calf to another, younger calf. If the transponder is not removed, the data records of the younger animal -which is now wearing the former collar of the weaned animal- are incorrectly added to the weaned animals dataset.
        </div>
    </div>

### Synchronisation {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Automatic Feeder

On the right side of the screen, there is a checkbox and two input fields:

* Checkbox <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- This option controls whether animals present on the {{<T "VitalControl" >}}, which are unknown to the feeder, will be created on the feeder during the next synchronisation. By default, this option is not activated.

    <span style="font-weight: bold">Deactivate</span> this option or leave it deactivated:

    - if you use your {{<T "VitalControl" >}} device on multiple feeders simultaneously,
    - if you bring your animals directly to the feeder without registering them via the {{<T "VitalControl" >}} device first. Your animals will then be automatically created during registration when they are fed at the feeder for the first time.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            If the {{<T "VitalControl" >}} is used on multiple machines and this option is checked, animals will be unintentionally transferred from one machine to another during synchronisation.
        </div>
    </div>

    <span style="font-weight: bold">Activate</span> this option:

    - if the initial registration of their newborn animals with the {{<T "VitalControl" >}} takes place before the first feeding at the feeder.
    - if you record your purchased animals by scanning their animal passports on the {{<T "VitalControl" >}}.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            Activate this option only if you use the {{<T "VitalControl" >}} on a single machine! If you want to perform synchronisation with multiple machines with this option set, you must use a separate {{<T "VitalControl" >}} device for each machine.
        </div>
    </div>

* Dropdown menu <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   In this drop-down menu, you can select the feed curve that is assigned to animals that are newly created on the feeder during synchronisation.

* Numeric input field<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    In this number field, you can specify the minimum age (in days) from which animals are newly created on the feeder during synchronisation. Animals that are younger than the specified minimum age are **not** created during synchronisation.

Press button <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> to switch to [page 2](#settings-menu-vitalcontrol-page-2) of the <span style="font-style: italic;">settings menu {{<T "VitalControl" >}}</span>.

## Settings Menu `{{<T "VitalControl" >}}` - Page 2 {#settings-menu-vitalcontrol-page-2}

### How to deal with data conflicts during synchronisation

Data conflicts can occur when synchronising the data between the feeder and {{<T "VitalControl" >}} device. A data conflict occurs when the data contradict each other on the {{<T "VitalControl" >}} device and on the feeder (e.g. concerning the <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>). On this page 2 of the settings menu, you can specify whether and if, how data conflicts are resolved during synchronisation. There are three options here:

* Priority is given to the feeder data, data on the {{<T "VitalControl" >}} device are overwritten with that of the feeder\.
  Activate this option by selecting the radio button in the left-hand column below the feeder symbol <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Priority is given to the {{<T "VitalControl" >}} data, data on the feeder are overwritten with that of the {{<T "VitalControl" >}} device\.
  Activate this option by selecting the radio button in the left-hand column below the {{<T "VitalControl" >}} <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* No changes are made, both the feeder data and {{<T "VitalControl" >}} device data remain unchanged.\
  Activate this option by selecting the radio button in the right-hand column <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Example</span><br>
            After you have purchased a batch of calves, you register your purchased animals on the {{<T "VitalControl" >}} by scanning all their animal passports. The animal numbers for these animals on the {{<T "VitalControl" >}} are then – depending on the <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">device settings</a> – the last 3-5 digits of the animal's passport. You then place collars with Urban transponders on the newly purchased animals and feed them at the automatic feeder. During the initial visit to the station, the animals are registered using their transponder and newly created at the feeder. However, the animal numbers for these new animals on the feeder are derived from the transponder number or corresponds to the animal number stored for this transponder in the feeder. This means that a different animal number has now been assigned to the same animal on the {{<T "VitalControl" >}} device and on the feeder, resulting in a data conflict. Using the radio buttons for the <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span>, you can now specify in the settings menu which of the two parallel animal numbers has priority and which will be deleted during synchronization.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" usemap="#VitalControlSettingsPage2" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Settings Menu VitalControl: Page 2" title="Settings VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Screenshot 3: Settings Menu <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Page 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        For internal reasons, changes can currently only be made to the <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>. In later firmware versions, you can also make changes to the <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> and the <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span>.
    </div>
</div>

By pressing the <span style="font-style: italic;">button</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> you will return to [page 1](#settings-menu-vitalcontrol-page-1) of the `{{<T "VitalControl" >}}` settings menu.

<map name="NavigationToVitalControlSettingsMenu">
    <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='Click {{<T "Settings" >}}' href="#Navigation_Digit_1">
    <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='Click {{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
    <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='Click {{<T "Accessories" >}}' href="#Navigation_Digit_3">
    <area shape="rect" coords="520,150,870,197" alt='Temperature" title="Click {{<T "Synchronize" >}}' href="#Navigation_Digit_4">
    <area shape="rect" coords="580,582,850,636" alt='Temperature" title="Click {{<T "Synchronize" >}}' href="#Navigation_Digit_5">
</map>

<map name="VitalControlSettingsPage1">
    <area shape="rect" coords="253,45,626,107" alt='{{<T "YES" >}}/{{<T "NO" >}}' title='Click {{<T "YES" >}}/{{<T "NO" >}}' href="#VitalControlSettingsPage1_Digit_1">
    <area shape="rect" coords="11,236,88,316" alt='{{<T "RegisterNewOnVitalControlDevice" >}}' title='Click {{<T "RegisterNewOnVitalControlDevice" >}}' href="#VitalControlSettingsPage1_Digit_2">
    <area shape="rect" coords="11,357,88,434" alt='{{<T "DeleteFromVitalControl" >}}' title='Click {{<T "DeleteFromVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
    <area shape="rect" coords="31,463,357,508" alt='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' title='Click {{<T "DoNotDeleteAnimalsYoungerThan" >}}' href="#VitalControlSettingsPage1_Digit_4">
    <area shape="rect" coords="420,236,511,286" alt='{{<T "RegisterNewOnAutomaticFeeder" >}}' title='Click {{<T "RegisterNewOnAutomaticFeeder" >}}' href="#VitalControlSettingsPage1_Digit_5">
    <area shape="rect" coords="435,352,837,397" alt='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' title='Click {{<T "FeedingCurveAssignedToImportedAnimals" >}}' href="#VitalControlSettingsPage1_Digit_6">
    <area shape="rect" coords="513,462,837,507" alt='{{<T "DoNotImportAnimalsOlderThan" >}}' title='Click {{<T "DoNotImportAnimalsOlderThan" >}}' href="#VitalControlSettingsPage1_Digit_7">
    <area shape="rect" coords="142,517,215,616" alt='Page 2' title='Click Page 2' href="#VitalControlSettingsPage1_Digit_8">
</map>

<map name="VitalControlSettingsPage2">
    <area shape="rect" coords="5,208,235,248" alt='{{<T "EarTagNumber" >}}' title='Click {{<T "EarTagNumber" >}}' href="#VitalControlSettingsPage2_Digit_1">
    <area shape="rect" coords="5,208,235,328" alt='{{<T "AnimalNumber" >}}' title='Click {{<T "AnimalNumber" >}}' href="#VitalControlSettingsPage2_Digit_2">
    <area shape="rect" coords="5,368,235,408" alt='{{<T "DateOfBirth" >}}' title='Click {{<T "DateOfBirth" >}}' href="#VitalControlSettingsPage2_Digit_3">
    <area shape="rect" coords="392,116,455,177" alt='{{<T "Feeder" >}}' title='Click {{<T "Feeder" >}}' href="#VitalControlSettingsPage2_Digit_4">
    <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='Click {{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
    <area shape="rect" coords="678,97,775,159" alt='{{<T "NoChange_AP" >}}' title='Click {{<T "NoChange_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
    <area shape="rect" coords="52,510,125,615" alt='Page 1' title='Click Page 1' href="#VitalControlSettingsPage2_Digit_8">
</map>
