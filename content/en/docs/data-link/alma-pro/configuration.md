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
---

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: check of firmware version" title="Alma Pro: check of firmware version" />
    <figcaption class="figure-caption fs-6">Screenshot 1: <span style="font-style: italic;">Alma Pro: check of firmware version</figcaption>
</figure>

To activate and set up the VitalControl device, proceed as follows:

## Navigation to settings menu `VitalControl`

{{% alert title="Attention" %}}
To activate and set up the VitalControl device, you must be logged in as the `Site manager` user role at the automatic feeder. Otherwise, some of the buttons shown and described below will not be visible to you.
{{% /alert %}}

1. Click on the bottom button <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Settings Menu" title="Settings"/> `Settings` <span style="font-size: 140%">➀</span> in the left sidebar of the touch terminal. If you are in the main menu where no sidebar is visible, press the button &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder Menu" title="Feeder Menu"/> `Feeder` to display the sidebar.

1. Click on the second button from the left <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Touch Terminal Settings" title="Touch Settings"/> `Touch Terminal Settings` <span style="font-size: 140%">➁</span> in the bottom toolbar of the touch terminal.

1. A series of menu items now appears on the left half of the central screen area. Click on the bottom button `Accessories` <span style="font-size: 140%">➂</span>.

1. A menu item (or possibly several) now appears on the right half of the central screen area. Click on the top button `VitalControl` <span style="font-size: 140%">➃</span>. The button now switches to the left screen half.

1. At the bottom of the right side of the screen, the button &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Open VitalControl settings" title="Open settings" /> `Open settings` <span style="font-size: 140%">➄</span> is now displayed. Click this button, and a popup window will open, displaying [Page 1](#settings-menu-vitalcontrol-page-1) of the `VitalControl` settings menu.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl settings: Access" title="Access VitalControl settings menu" />
    <figcaption class="figure-caption fs-6">Screenshot 2: Accessing the <span style="font-style: italic;">VitalControl</span> settings menu</figcaption>
</figure>

The `VitalControl` settings menu is spread across two pages:

## `VitalControl` Settings Menu - Page 1 {#settings-menu-vitalcontrol-page-1}

Page 1 of the <span style="font-style: italic;">VitalControl</span> settings menu is presented as follows:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl settings menu: Page 1" title="VitalControl settings (1)" />
    <figcaption class="figure-caption fs-6">Screenshot 3: <span style="font-style: italic;">VitalControl</span> settings menu, Page 1</figcaption>
</figure>

On this page, you can perform the following actions and settings.

### Activation of the VitalControl Device {#activation-vitalcontrol}

In the default state of the machine, the VitalControl is deactivated. Set the <span style="font-style: italic;">On/Off</span> switch <span style="font-size: 140%">➀</span> to the right position <span style="font-style: italic;">Yes</span> to activate the VitalControl device. Subsequently, in the right sidebar of the feeder menu, below the icon(s) for the connected machine(s), the icon <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl device" title="VitalControl"/> for the `VitalControl` device will be displayed (see Screenshot <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Feeder Menu</a></span>, figure <span style="font-size: 140%">➁</span> there).

### Synchronisation automatic feeder <span style="font-size: 150%">🠲</span> VitalControl

On the left side of the screen, there are two checkboxes:

* Checkbox <span style="font-style: italic;">Register new on VitalControl device</span> <span style="font-size: 140%">➁</span>.

    This option controls the behavior in the event that animals are present on the feeder during synchronisation that are not yet known to the VitalControl device. This option is enabled by default and should generally remain set. If you register your purchased animals by scanning their animal passports, this option must be disabled.

    <span style="font-weight: bold">Enable</span> this option:

    - if you have a brand-new VitalControl in front of you, onto which you want to transfer all animals from a feeder. After synchronisation, all animals known to the feeder will also be present on the VitalControl.
    - if you continuously bring new calves to the feeder during ongoing operations. These animals will then also be created on the VitalControl device during synchronisation.

    <span style="font-weight: bold">Disable</span> this option:

    - if you have newly created animals on your VitalControl by scanning their animal passports, where
    - these animals have not yet been assigned a transponder and
    - these animals are already being fed at the feeder and are therefore registered there.

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">Attention</span><br>
                If the option remains set in the above configuration, animals will be present twice on the VitalControl after synchronisation.
            </div>
        </div>

* Checkbox <span style="font-style: italic;">Delete from VitalControl</span> <span style="font-size: 140%">➂</span>

    This option controls whether animals that are only present on the VitalControl but not on the feeder are deleted from the VitalControl during the next synchronisation. If you use the VitalControl only during the animals' milk period, this option should be enabled. If you want to track the animals beyond the milk period, you must disable this option.

    <span style="font-weight: bold">Enable</span> this option:

    - if you only collect data for the animals during the milk period,
    - - if you want the animals to be deleted from the VitalControl during the next synchronisation after they have been deleted from the feeder. This way, animals do not accumulate on the VitalControl over time.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            If this option is activated and the checkbox <span style="font-size: 140%">➃</span> <span style="font-style: italic;">Register new on automatic feeder</span> is also activated, no animals will be deleted that are younger than specified in the number field <span style="font-size: 140%">➃</span> <span style="font-style: italic;">Do not delete animals younger than</span>.
        </div>
    </div>

    <span style="font-weight: bold">Disable</span> this option:
    - if you want to continue collecting data for the animals after the milk period, for example, during a weighing,
    - if you are willing to manually delete the animals from the VitalControl yourself.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            If you disable this option, you must unlink the transponder for weaned animals on VitalControl device at the latest when the collar is removed from the weaned calf to another, younger calf. If the transponder is not removed, the data records of the younger animal -which is now wearing the former collar of the weaned animal- are incorrectly added to the weaned animals dataset.
        </div>
    </div>

### Synchronisation VitalControl <span style="font-size: 150%">🠲</span> Automatic Feeder

On the right side of the screen, there is a checkbox and two input fields:

* Checkbox <span style="font-style: italic;">Register new on automatic feeder</span> <span style="font-size: 140%">⑤</span>

- This option controls whether animals present on the VitalControl, which are unknown to the feeder, will be created on the feeder during the next synchronisation. By default, this option is not activated.

    <span style="font-weight: bold">Deactivate</span> this option or leave it deactivated:

    - if you use your VitalControl device on multiple feeders simultaneously,
    - if you bring your animals directly to the feeder without registering them via the VitalControl device first. Your animals will then be automatically created during registration when they are fed at the feeder for the first time.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            If the VitalControl is used on multiple machines and this option is checked, animals will be unintentionally transferred from one machine to another during synchronisation.
        </div>
    </div>

    <span style="font-weight: bold">Activate</span> this option:

    - if the initial registration of their newborn animals with the VitalControl takes place before the first feeding at the feeder.
    - if you record your purchased animals by scanning their animal passports on the VitalControl.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            Activate this option only if you use the VitalControl on a single machine! If you want to perform synchronisation with multiple machines with this option set, you must use a separate VitalControl device for each machine.
        </div>
    </div>

* Dropdown menu <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">Feeding curve assigned to imported animals</span>.

   In this drop-down menu, you can select the feed curve that is assigned to animals that are newly created on the feeder during synchronisation.

* Numeric input field<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">do not import animals older than</span>.

    In this number field, you can specify the minimum age (in days) from which animals are newly created on the feeder during synchronisation. Animals that are younger than the specified minimum age are **not** created during synchronisation.

Press button <span style="font-size: 140%">⑧</span> to switch to [page 2](#settings-menu-vitalcontrol-page-2) of the <span style="font-style: italic;">settings menu `VitalControl`</span>.

## Settings Menu `VitalControl` - Page 2 {#settings-menu-vitalcontrol-page-2}

### How to deal with data conflicts during synchronisation

Data conflicts can occur when synchronising the data between the feeder and VitalControl device. A data conflict occurs when the data contradict each other on the VitalControl device and on the feeder (e.g. concerning the <span style="font-style: italic;">animal number</span> <span style="font-size: 140%">➁</span>). On this page 2 of the settings menu, you can specify whether and if, how data conflicts are resolved during synchronisation. There are three options here:

* Priority is given to the feeder data, data on the VitalControl device are overwritten with that of the feeder\.
  Activate this option by selecting the radio button in the left-hand column below the feeder symbol <span style="font-size: 140%">➃</span>.

* Priority is given to the VitalControl data, data on the feeder are overwritten with that of the VitaLControl device\.
  Activate this option by selecting the radio button in the left-hand column below the VitalControl <span style="font-size: 140%">⑤</span>.

* No changes are made, both the feeder data and VitalControl device data remain unchanged.\
  Activate this option by selecting the radio button in the right-hand column <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Example</span><br>
            After you have purchased a batch of calves, you register your purchased animals on the VitalControl by scanning all their animal passports. The animal numbers for these animals on the VitalControl are then – depending on the <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">device settings</a> – the last 3-5 digits of the animal's passport. You then place collars with Urban transponders on the newly purchased animals and feed them at the automatic feeder. During the initial visit to the station, the animals are registered using their transponder and newly created at the feeder. However, the animal numbers for these new animals on the feeder are derived from the transponder number or corresponds to the animal number stored for this transponder in the feeder. This means that a different animal number has now been assigned to the same animal on the VitalControl device and on the feeder, resulting in a data conflict. Using the radio buttons for the <span style="font-style: italic;">animal number</span> <span style="font-size: 140%">➁</span>, you can now specify in the settings menu which of the two parallel animal numbers has priority and which will be deleted during synchronization.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Settings Menu VitalControl: Page 2" title="Settings VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Screenshot 4: Settings Menu <span style="font-style: italic;">VitalControl</span>, Page 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        For internal reasons, changes can currently only be made to the <span style="font-style: italic;">animal number</span> <span style="font-size: 140%">➁</span>. In later firmware versions, you can also make changes to the <span style="font-style: italic;">ear tag number</span> <span style="font-size: 140%">➀</span> and the <span style="font-style: italic;">date of birth</span> <span style="font-size: 140%">➂</span>.
    </div>
</div>

By pressing the <span style="font-style: italic;">button</span> <span style="font-size: 140%">⑧</span> you will return to [page 1](#settings-menu-vitalcontrol-page-1) of the `VitalControl` settings menu.
