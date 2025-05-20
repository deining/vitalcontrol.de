---
title: One-time Activation and Configuration of the Device in the automatic feeder Settings
linkTitle: Configuration
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Before using the VitalControl for the first time, you must activate and properly configure it once in the settings of Alma Pro feeder.
slug: configuration
weight: 10
categories: [Alma Pro]
translationKey: alma-pro/configuration
---
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
    <figcaption class="figure-caption fs-6">Screenshot 1: Accessing the <span style="font-style: italic;">VitalControl</span> settings menu</figcaption>
</figure>

The `VitalControl` settings menu is spread across two pages:

## `VitalControl` Settings Menu - Page 1 {#settings-menu-vitalcontrol-page-1}

Page 1 of the <span style="font-style: italic;">VitalControl</span> settings menu is presented as follows:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl settings menu: Page 1" title="VitalControl settings (1)" />
    <figcaption class="figure-caption fs-6">Screenshot 2: <span style="font-style: italic;">VitalControl</span> settings menu, Page 1</figcaption>
</figure>

On this page, you can perform the following actions and settings.

### Activation of the VitalControl Device

In the default state of the machine, the VitalControl is deactivated. Set the <span style="font-style: italic;">On/Off</span> switch <span style="font-size: 140%">➀</span> to the right position <span style="font-style: italic;">Yes</span> to activate the VitalControl device. Subsequently, in the right sidebar of the feeder menu, below the icon(s) for the connected machine(s), the icon <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl device" title="VitalControl"/> for the `VitalControl` device will be displayed (see Screenshot <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Feeder Menu</a></span>, figure <span style="font-size: 140%">➁</span> there).

### Synchronisation automatic feeder <span style="font-size: 150%">🠲</span> VitalControl

On the left side of the screen, there is only the option <span style="font-style: italic;">Register new on VitalControl device</span> <span style="font-size: 140%">➁</span>.

This option controls the behavior in the event that animals are present on the automat during synchronisation that are not yet known to the VitalControl. This option is enabled by default and should generally remain set. If you record your purchased feeders by scanning the animal passports, this option must be disabled.

<span style="font-weight: bold">Enable</span> this option:

- if you have a brand-new VitalControl in front of you, onto which you want to transfer all animals from an automat. After synchronisation, all animals known to the automat will also be present on the VitalControl.
- if you continuously bring new calves to the automat during ongoing operations. These animals will then also be created on the VitalControl during synchronisation.

<span style="font-weight: bold">Disable</span> this option:
- if you have newly created animals on your VitalControl by scanning animal passports, where
    - these animals have not yet been assigned a transponder and
    - these animals are already being fed at the automat and are therefore registered there.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            If the option remains set in the above configuration, animals will be present twice on the VitalControl after synchronisation.
        </div>
    </div>

### Synchronisation VitalControl <span style="font-size: 150%">🠲</span> automatic Feeder

On the right side of the screen, there are two options:

- The option <span style="font-style: italic;">Delete from VitalControl</span> <span style="font-size: 140%">➂</span> controls whether animals deleted from the automat are also deleted from the VitalControl during the next synchronisation. If you use the VitalControl only during the animals' drinking period, this option should be enabled. If you want to track the animals beyond the drinking period, you must disable this option.

    <span style="font-weight: bold">Enable</span> this option:

    - if you only collect data for the animals during the drinking period,
    - if you want the animals to be automatically deleted from the VitalControl immediately after being deleted from the automat. This way, animals do not accumulate on the VitalControl over time.

    <span style="font-weight: bold">Disable</span> this option:
    - if you want to continue collecting data for the animals after the drinking period, for example, during a weighing,
    - if you are willing to manually delete the animals from the VitalControl yourself.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            If you disable this option, you must release the transponder for the animal on the VitalControl as soon as an animal is deleted from the automat. If this release of the transponder is omitted, data records of another animal newly created on the automat, which now carries the same transponder that the animal remaining on the VitalControl once carried, will be incorrectly added to the animal's data record.
        </div>
    </div>

- The option <span style="font-style: italic;">Register new on automatic feeder</span> <span style="font-size: 140%">➃</span> controls whether animals present on the VitalControl, which are unknown to the machine, will be created on the machine during the next synchronisation. By default, this option is not activated. Activate this option if the initial recording of your animals is done with the VitalControl. Leave this option deactivated if you use a VitalControl on multiple machines and/or if your animals are registered during the initial feeding at the machine.

    <span style="font-weight: bold">Deactivate</span> this option or leave it deactivated:
    - if you use your VitalControl device on multiple machines simultaneously,
    - if you bring your animals directly to the machines without recording them first with the VitalControl.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            If the VitalControl is used on multiple machines and this option remains set, animals will be unintentionally transferred from one machine to another during synchronisation.
        </div>
    </div>

    <span style="font-weight: bold">Activate</span> this option:

    - if you record your newborn animals with the VitalControl,
    - if you record your purchased animals by scanning the animal passports on the VitalControl.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            Activate this option only if you use the VitalControl on a single machine! If you want to perform synchronisation with multiple machines with this option set, you must use a separate VitalControl device for each machine.
        </div>
    </div>

## Settings Menu `VitalControl` - Page 2

### Priority in Synchronisation Conflicts

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Settings Menu VitalControl: Page 2" title="Settings VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Screenshot 3: Settings Menu <span style="font-style: italic;">VitalControl</span>, Page 2</figcaption>
</figure>
