---
title: VitalControl ve Alma Pro Arasında Veri Senkronizasyonu
linkTitle: Senkronizasyon
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  VitalControl cihazında depolanan hayvanları otomatik yemlikte kayıtlı hayvanlarla senkronize edin ve VitalControl cihazıyla kaydedilen ölçüm değerlerini değerlendirme amaçlı ve daha iyi görselleştirme için yemliğe aktarın.
weight: 20
categories: [Veri değişimi, Alma Pro]
translationKey: alma-pro/synchronisation
maphilight: true
aliases: /vc/sync/tr
---

Alma Pro otomatik yemlik ve VitalControl cihazı arasında senkronizasyon gerçekleştirmek için aşağıdaki adımları izleyin:

## USB portunu açın

1. Küçük bir tornavida kullanarak USB portunun kapağındaki kilitleme vidasını gevşetin ve kapağı aşağı doğru katlayın:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="USB portunu açın" title="USB portunu açın" /></a>
        <figcaption class="figure-caption fs-6">Şekil 1: USB portunu açın</figcaption>
    </figure>

## VitalControl'u bağlayın

2. Üst orta `Aç/Kapat` düğmesine basarak VitalControl cihazını açın &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="Aç/Kapat düğmesi" />.

2. VitalControl cihazının USB-C soketini, sağlanan USB kablosunu kullanarak <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Daire içine alınmış rakam 1" title="Rakam 1" /> dokunmatik ekranın USB-A soketine bağlayın <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Daire içine alınmış rakam 2" title="Rakam 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="VitalControl'u Alma Pro'ya Bağlayın" title="Bağlantı VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">Şekil 2: VitalControl'u Alma Pro'ya Bağlama</figcaption>
</figure>

### Senkronizasyonu Başlat

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Bilgi:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
        VitalControl cihazının senkronizasyonunu başlatmak için, makineye <span style="font-family: monospace; font-size: 90%;">{{<T "SiteManager" >}}</span> kullanıcı rolüyle giriş yapmış olmanız gerekir. Aksi takdirde, <a href="#figure3_synchronize_vitalcontrol_alma_pro">Senkronizasyon menüsünde</a> <span style="font-family: monospace; font-size: 90%;">{{<T "Synchronize" >}}</span> düğmesi devre dışı kalır.
    </div>
</div>

4. Dokunmatik terminalin sol yan çubuğunda, üstten ikinci düğmeye tıklayın <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Besleyici menüsü" title="Besleyici menüsü"/> `{{<T "Feeder" >}}` <img src="/digits/1_negative_circled.svg" id="StartSynchronisation_Digit_1" width="25" align="middle" alt="Rakam 1" title="Rakam 1" />. Yan çubuğun görünmediği ana menüdeyseniz, besleyici menüsünü açmak için &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Besleyici menüsü" title="Besleyici menüsü"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">`{{<T "Feeder" >}}`</span> düğmesine basın.

1. Dokunmatik terminalin sağ kenar çubuğunda, bağlı besleyici(ler)in sembol(ler)inin altında, `{{<T "VitalControl" >}}` cihazı için <img src="/digits/2_negative_circled.svg" id="StartSynchronisation_Digit_2" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> sembolü şimdi görüntüleniyor. Bu sembole tıklayın.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
            Sağ kenar çubuğunda <span style="font-family: monospace; font-size: 90%;">{{<T "VitalControl" >}}</span> cihazı için <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> sembolü <span style="font-weight: bold;">görünmüyorsa</span>, cihaz ayarlarda hala devre dışı bırakılmıştır. Bu durumda, cihazın bir kerelik <a href="../configuration" >aktivasyonu</a> için talimatları izleyin.
        </div>
    </div>

1. Şimdi senkronizasyon ekranı görünecektir. VitalControl cihazı ile senkronizasyonu başlatmak için altta ortada bulunan <img src="/digits/3_negative_circled.svg" id="StartSynchronisation_Digit_3" width="25" align="middle" alt="circled number 3" title="number 3" /> `{{<T "Synchronize" >}}` düğmesine tıklayın.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;" id="figure3_synchronize_vitalcontrol_alma_pro">
<div style="padding: 12px;">
    <img
        src="../images/synchronise-vitalcontrol-alma-pro.png"
        alt="VitalControl'un Alma Pro otomatik besleyici ile senkronizasyonu"
        usemap="#syncmap"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid"
        align="bottom"
        title="VitalControl'un Alma Pro otomatik besleyici ile senkronizasyonu" />
</div>
<map name="syncmap">
    <area shape="rect" coords="15,115,112,190" alt="Feeder" title='{{<T "Feeder" >}}' href="#StartSynchronisation_Digit_1">
    <area shape="rect" coords="844,240,1012,282" alt="Temperature" title='{{<T "VitalControl" >}}' href="#StartSynchronisation_Digit_2">
    <area shape="rect" coords="361,570,612,620" alt="Temperature" title='{{<T "Synchronize" >}}' href="#StartSynchronisation_Digit_3">
</map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Şekil 3: VitalControl'un Alma Pro otomatik besleyici ile senkronizasyonu
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
        Eğer birçok hayvanın aktarılması gerekiyorsa, senkronizasyon biraz zaman alabilir. Senkronizasyon ilerlemesini VitalControl cihazının ekranında görebilirsiniz.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Senkronizasyon VitalControl Alma Pro, ilerleme göstergesi" title="Senkronizasyon ilerlemesi" /></a>
            <figcaption class="figure-caption fs-6">Şekil 4: Senkronizasyon VitalControl Alma Pro, ilerleme göstergesi</figcaption>
        </figure>
    </div>
</div>

## USB portunu kapatın

7. Başarılı bir senkronizasyondan sonra, USB kablosunu dokunmatik ekranın USB portundan çıkarın. Portun koruyucu kapağını tekrar yukarı katlayın ve küçük bir tornavida kullanarak kilitleme vidasını sıkarak güvenceye alın.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="USB portunu kapatın" title="USB portunu kapatın" /></a>
    <figcaption class="figure-caption fs-6">Şekil 5: USB portunu tekrar kapatın</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Not</span><br>
        Her senkronizasyondan sonra USB portunun kapağını kapattığınızdan emin olun, böylece porta nem girmesini önleyebilir ve ahırınızdaki korozif havadan koruyabilirsiniz!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="USB portunun zorunlu olarak kapatılması" title="USB portunun zorunlu olarak kapatılması" /></a>
            <figcaption class="figure-caption fs-6">Şekil 6: USB portunun zorunlu olarak kapatılması</figcaption>
        </figure>
    </div>
</div>
