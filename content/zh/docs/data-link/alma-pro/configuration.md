---
title: 在自動餵食器設定中一次性啟用和配置設備
linkTitle: 配置
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  在首次使用 VitalControl 之前，您必須在 Alma Pro 飼料機的設定中啟用並正確配置它。
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
要啟用和設置 VitalControl 設備，請按以下步驟進行：

## 導航到設定選單 `{{<T "VitalControl" >}}`

{{% alert title="注意" %}}
要啟用和設置 {{<T "VitalControl" >}} 設備，您必須以 {{<T "SiteManager" >}} 使用者角色登入自動餵食器。否則，您將無法看到以下描述的一些按鈕。
{{% /alert %}}

1. 點擊觸控終端左側邊欄底部的按鈕 <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: 設定選單" title="設定"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span>。如果您在主選單中看不到側邊欄，請按按鈕 &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: 飼料機選單" title="飼料機選單"/>`{{<T "Feeder" >}}`以顯示側邊欄。

1. 點擊觸控終端底部工具欄中從左數第二個按鈕 <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="觸控終端設定" title="觸控設定"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span>。

1. 現在中央螢幕區域的左半部分會出現一系列選單項目。點擊底部按鈕 `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>。

1. 現在中央螢幕區域的右半部分會出現一個（或多個）選單項目。點擊頂部按鈕 `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>。按鈕現在切換到左側螢幕。

1. 在螢幕右側底部，現在顯示按鈕 &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="打開 VitalControl 設定" title="打開設定" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span>。點擊此按鈕，將打開一個彈出窗口，顯示 `{{<T "VitalControl" >}}` 設定選單的[第 1 頁](#settings-menu-vitalcontrol-page-1)。

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl 設定：存取" title="存取 VitalControl 設定選單" />
    <figcaption class="figure-caption fs-6">截圖 1：存取 <span style="font-style: italic;">{{<T "VitalControl" >}}</span> 設定選單</figcaption>
</figure>

`{{<T "VitalControl" >}}` 設定選單分為兩頁：

## `{{<T "VitalControl" >}}` 設定選單 - 第 1 頁 {#settings-menu-vitalcontrol-page-1}

<span style="font-style: italic;">{{<T "VitalControl" >}}</span> 設定選單的第 1 頁如下所示：

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl 設定選單：第 1 頁" title="VitalControl 設定 (1)" />
    <figcaption class="figure-caption fs-6">截圖 2：<span style="font-style: italic;">{{<T "VitalControl" >}}</span> 設定選單，第 1 頁</figcaption>
</figure>

在此頁面，您可以執行以下操作和設定。

### 啟用 {{<T "VitalControl" >}} 裝置 {#activation-vitalcontrol}

在機器的預設狀態下，{{<T "VitalControl" >}} 是停用的。將 <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> 開關 <span style="font-size: 140%">➀</span> 設置到右側位置 <span style="font-style: italic;">{{<T "YES" >}}</span> 以啟用 {{<T "VitalControl" >}} 裝置。隨後，在供料器選單的右側欄位中，連接的機器圖標下方，將顯示 <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl 裝置" title="VitalControl"/> `{{<T "VitalControl" >}}` 裝置的圖標（參見截圖 <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">供料器選單</a></span>，圖 <span style="font-size: 140%">➁</span>）。

### 自動飼料機同步 <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

在螢幕的左側，有兩個核取方塊：

* 核取方塊 <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>。

    此選項控制在同步過程中，如果飼料機上有尚未被{{<T "VitalControl" >}}設備識別的動物時的行為。此選項預設為啟用，通常應保持設置。如果您透過掃描動物護照來註冊購買的動物，則必須停用此選項。

    <span style="font-weight: bold">啟用</span>此選項：

    - 如果您面前有一個全新的{{<T "VitalControl" >}}，並且您希望將所有動物從飼料機轉移到該設備上。同步後，飼料機上已知的所有動物也將出現在{{<T "VitalControl" >}}上。
    - 如果您在持續運行期間不斷將新生小牛帶到飼料機上。這些動物在同步過程中也會在{{<T "VitalControl" >}}設備上被創建。

    <span style="font-weight: bold">停用</span>此選項：

    - 如果您透過掃描動物護照在{{<T "VitalControl" >}}上創建了新的動物，並且
    - 這些動物尚未被分配晶片，且
    - 這些動物已經在飼料機上進行餵養，因此已在那裡註冊。

        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                <span class="text-primary fs-3 fw-semibold">注意</span><br>
                如果在上述配置中保持設置，動物在同步後將在{{<T "VitalControl" >}}上出現兩次。
            </div>
        </div>

* 勾選框 <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    此選項控制是否在下次同步時，將僅存在於{{<T "VitalControl" >}}而不在餵食器上的動物從{{<T "VitalControl" >}}中刪除。如果您僅在動物的泌乳期使用{{<T "VitalControl" >}}，則應啟用此選項。如果您希望在泌乳期之後繼續追蹤動物，則必須停用此選項。

    <span style="font-weight: bold">啟用</span>此選項：

    - 如果您僅在泌乳期收集動物的數據，
    - 如果您希望在動物從餵食器中刪除後的下次同步時，將其從{{<T "VitalControl" >}}中刪除。這樣，動物不會隨著時間的推移在{{<T "VitalControl" >}}中累積。

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">注意</span><br>
            如果此選項已啟用，且勾選框<span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span>也已啟用，則不會刪除年齡小於<span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span>中指定數字的動物。
        </div>
    </div>

    <span style="font-weight: bold">停用</span>此選項：
    - 如果您希望在泌乳期後繼續收集動物的數據，例如在稱重期間，
    - 如果您願意手動從{{<T "VitalControl" >}}中刪除動物。

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">注意</span><br>
            如果您停用此選項，您必須在從斷奶小牛移除項圈並轉移到另一頭較年輕的小牛時，於 {{<T "VitalControl" >}} 設備上解除轉發器的連結。如果未移除轉發器，較年輕動物的數據記錄（現在佩戴斷奶動物的舊項圈）將錯誤地添加到斷奶動物的數據集中。
        </div>
    </div>

### 同步 {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> 自動餵食器

在螢幕的右側，有一個複選框和兩個輸入欄位：

* 複選框 <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- 此選項控制在 {{<T "VitalControl" >}} 上存在但餵食器未知的動物是否會在下次同步時於餵食器上創建。預設情況下，此選項未啟用。

    <span style="font-weight: bold">停用</span>此選項或保持其停用：

    - 如果您同時在多個餵食器上使用 {{<T "VitalControl" >}} 設備，
    - 如果您直接將動物帶到餵食器而未先通過 {{<T "VitalControl" >}} 設備註冊。您的動物將在首次於餵食器上餵食時自動創建。

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">注意</span><br>
            如果 {{<T "VitalControl" >}} 用於多台機器且此選項已勾選，動物將在同步期間無意中從一台機器轉移到另一台機器。
        </div>
    </div>

<span style="font-weight: bold">啟用</span>此選項：

- 如果在第一次餵食前，於 {{<T "VitalControl" >}} 上完成新生動物的初始註冊。
- 如果您透過掃描動物護照在 {{<T "VitalControl" >}} 上記錄購買的動物。

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">注意</span><br>
        僅在您於單一機器上使用 {{<T "VitalControl" >}} 時啟用此選項！如果您希望在多台機器上進行同步，且已設置此選項，則必須為每台機器使用單獨的 {{<T "VitalControl" >}} 設備。
    </div>
</div>

* 下拉選單 <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>。

   在此下拉選單中，您可以選擇在同步過程中於餵食器上新創建的動物所分配的飼料曲線。

* 數字輸入欄位<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>。

    在此數字欄位中，您可以指定在同步過程中於餵食器上新創建動物的最小年齡（以天為單位）。年齡小於指定最小年齡的動物在同步過程中**不會**被創建。

按下按鈕 <span style="font-size: 140%">⑧</span> 以切換到 <span style="font-style: italic;">設定選單 {{<T "VitalControl" >}}</span> 的[第2頁](#settings-menu-vitalcontrol-page-2)。

## 設定選單 `{{<T "VitalControl" >}}` - 第 2 頁 {#settings-menu-vitalcontrol-page-2}

### 如何處理同步過程中的數據衝突

當在飼料機和 {{<T "VitalControl" >}} 設備之間同步數據時，可能會發生數據衝突。數據衝突發生在 {{<T "VitalControl" >}} 設備和飼料機上的數據相互矛盾時（例如，關於 <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span>）。在設定選單的第 2 頁上，您可以指定在同步過程中是否以及如何解決數據衝突。這裡有三個選項：

* 優先考慮飼料機數據，{{<T "VitalControl" >}} 設備上的數據將被飼料機的數據覆蓋。
  通過選擇飼料機符號下方左側欄中的單選按鈕來啟用此選項 <span style="font-size: 140%">➃</span>。

* 優先考慮 {{<T "VitalControl" >}} 數據，飼料機上的數據將被 {{<T "VitalControl" >}} 設備的數據覆蓋。
  通過選擇 {{<T "VitalControl" >}} 下方左側欄中的單選按鈕來啟用此選項 <span style="font-size: 140%">⑤</span>。

* 不做任何更改，飼料機數據和 {{<T "VitalControl" >}} 設備數據保持不變。\
  通過選擇右側欄中的單選按鈕來啟用此選項 <span style="font-size: 140%">⑥</span>。

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">範例</span><br>
            當您購買了一批小牛後，您可以通過掃描所有動物護照在 {{<T "VitalControl" >}} 上註冊您購買的動物。這些動物在 {{<T "VitalControl" >}} 上的動物編號將根據<a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">設備設定</a>為動物護照的最後 3-5 位數字。然後，您將帶有 Urban 傳感器的項圈放在新購買的動物上，並在自動飼料機上餵養它們。在首次訪問站點時，動物會使用其傳感器進行註冊並在飼料機上新建。然而，這些新動物在飼料機上的動物編號是從傳感器編號派生的，或者與飼料機中為此傳感器存儲的動物編號相對應。這意味著在 {{<T "VitalControl" >}} 設備和飼料機上，現在為同一動物分配了不同的動物編號，導致數據衝突。使用 <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> 的單選按鈕，您現在可以在設定選單中指定哪一個平行的動物編號具有優先權，並在同步過程中刪除哪一個。
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Settings Menu VitalControl: Page 2" title="Settings VitalControl (2)" />
    <figcaption class="figure-caption fs-6">截圖 3: 設定選單 <span style="font-style: italic;">{{<T "VitalControl" >}}</span>，第 2 頁</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">注意</span><br>
        由於內部原因，目前只能對 <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> 進行更改。在後續的韌體版本中，您也可以對 <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> 和 <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span> 進行更改。
    </div>
</div>

按下 <span style="font-style: italic;">按鈕</span> <span style="font-size: 140%">⑧</span>，您將返回到 `{{<T "VitalControl" >}}` 設定選單的[第 1 頁](#settings-menu-vitalcontrol-page-1)。
