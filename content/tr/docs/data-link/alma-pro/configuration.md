---
title: Cihazın Otomatik Besleyici Ayarlarında Tek Seferlik Aktivasyonu ve Yapılandırılması
linkTitle: Yapılandırma
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  VitalControl'ü ilk kez kullanmadan önce, Alma Pro besleyicinin ayarlarında bir kez etkinleştirmeniz ve doğru şekilde yapılandırmanız gerekir.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
maphilight: true
aliases: /vc/conf/tr
---
## Gereksinimler

VitalControl cihazıyla <span style="font-weight: bold">25-04-Vxx</span> veya daha yüksek bir ürün yazılımı sürümü kullanmanızı öneririz.\
Cihazınıza hangi ürün yazılımı sürümünün yüklü olduğunu kontrol etmek için:

* Ekranın sol tarafındaki gezinme çubuğunda üstteki `Ana Sayfa` düğmesine <span style="font-size: 140%">➀</span> <img src="/icons/almapro/home.svg" width="20" align="top" alt="Ana ekran simgesi" title="Alma Pro: Ana ekran"/>&nbsp; tıklayarak besleyicinin ana sayfasına gidin.
* Ana ekranda, ekranın sağ üst köşesindeki `Yardım` düğmesine <span style="font-size: 140%">➁</span> <img src="/icons/almapro/questionmark.svg" width="20" align="top" alt="Yardım menüsü simgesi" title="Alma Pro: Yardım ekranı"/>&nbsp; tıklayın.
* Sürüm numarası <span style="font-size: 140%">➂</span> şimdi dil değiştirme düğmesinin solunda görüntülenir.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/version-check.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Alma Pro: ürün yazılımı sürüm kontrolü" title="Alma Pro: ürün yazılımı sürüm kontrolü" />
    <figcaption class="figure-caption fs-6">Ekran Görüntüsü 1: <span style="font-style: italic;">Alma Pro: ürün yazılımı sürüm kontrolü</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Uyarı:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
        Eğer besleyicinizin ürün yazılımı sürümü <span style="font-weight: bold">25-04-Vxx</span>'den düşükse, aşağıdaki ekran görüntüleri ile dokunmatik ekranınızdaki görüntü arasında farklılıklar olabilir, bu nedenle talimatları takip edemeyebilirsiniz. Bu durumda, besleyicinizin ürün yazılımını güncellemek için servis teknisyeninize başvurun.<br>
    </div>
</div>

## Ayarlar menüsüne gezinme `{{% T "VitalControl" %}}`

{{% alert title="Dikkat" %}}
{{<T "VitalControl" >}} cihazını etkinleştirmek ve kurmak için otomatik yemlikte {{<T "SiteManager" >}} kullanıcı rolü olarak oturum açmış olmanız gerekir. Aksi takdirde, aşağıda gösterilen ve açıklanan bazı düğmeler size görünmeyecektir.
{{% /alert %}}

1. Dokunmatik terminalin sol kenar çubuğunda alt düğmeye tıklayın <img src="/icons/gear.svg" id="Navigation_Digit_1" width="25" align="bottom" alt="Alma Pro: Ayarlar Menüsü" title="Ayarlar"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span>. Kenar çubuğunun görünmediği ana menüdeyseniz, kenar çubuğunu görüntülemek için &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Yemlik Menüsü" title="Yemlik Menüsü"/>`{{<T "Feeder" >}}` düğmesine basın.

1. Dokunmatik terminalin alt araç çubuğunda soldan ikinci düğmeye tıklayın <img src="/icons/touch-gear.svg" id="Navigation_Digit_2" width="25" align="bottom" alt="Dokunmatik Terminal Ayarları" title="Dokunmatik Ayarlar"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span>.

1. Şimdi merkezi ekran alanının sol yarısında bir dizi menü öğesi görünür. Alt düğmeye tıklayın `{{<T "Accessories" >}}` <span style="font-size: 140%" id="Navigation_Digit_3">➂</span>.

1. Şimdi merkezi ekran alanının sağ yarısında bir (veya muhtemelen birkaç) menü öğesi görünür. Üst düğmeye tıklayın `{{<T "VitalControl" >}}` <span style="font-size: 140%" id="Navigation_Digit_4">➃</span>. Düğme şimdi sol ekran yarısına geçer.

1. Ekranın sağ alt kısmında, &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="VitalControl ayarlarını aç" title="Ayarları aç" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%" id="Navigation_Digit_5">➄</span> düğmesi şimdi görüntülenir. Bu düğmeye tıklayın ve bir açılır pencere açılarak `{{<T "VitalControl" >}}` ayarlar menüsünün [Sayfa 1](#settings-menu-vitalcontrol-page-1)'ini görüntüler.

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/open-settings-vitalcontrol.png"
        alt="VitalControl ayarları: Erişim"
        usemap="#NavigationToVitalControlSettingsMenu"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="VitalControl ayarları menüsüne erişim" />
    </div>
    <map name="NavigationToVitalControlSettingsMenu">
        <area shape="rect" coords="14,531,112,617" alt='{{<T "Settings" >}}' title='{{<T "Settings" >}}' href="#Navigation_Digit_1">
        <area shape="rect" coords="200,648,273,755" alt='{{<T "TouchTerminalSettings" >}}' title='{{<T "TouchTerminalSettings" >}}' href="#Navigation_Digit_2">
        <area shape="rect" coords="130,550,479,596" alt='{{<T "Accessories" >}}' title='{{<T "Accessories" >}}' href="#Navigation_Digit_3">
        <area shape="rect" coords="520,150,870,197" alt='{{<T "VitalControl" >}}' title='{{<T "VitalControl" >}}' href="#Navigation_Digit_4">
        <area shape="rect" coords="580,582,850,636" alt='{{<T "OpenSettings" >}}' title='{{<T "OpenSettings" >}}' href="#Navigation_Digit_5">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Ekran Görüntüsü 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> ayarları menüsüne erişim
</figcaption>

`{{<T "VitalControl" >}}` ayar menüsü iki sayfaya yayılmıştır:

## `{{% T "VitalControl" %}}` Ayar Menüsü - Sayfa 1 {#settings-menu-vitalcontrol-page-1}

<span style="font-style: italic;">{{<T "VitalControl" >}}</span> ayar menüsünün 1. sayfası şu şekilde sunulmuştur:

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-1.png"
        alt="VitalControl ayar menüsü: Sayfa 1"
        usemap="#VitalControlSettingsPage1"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="VitalControl ayarları (1)" />
    </div>
    <map name="VitalControlSettingsPage1">
        <area shape="rect" coords="253,45,626,107" alt='{{<T "YES" >}}/{{<T "NO" >}}' title='{{<T "YES" >}}/{{<T "NO" >}}' href="#VitalControlSettingsPage1_Digit_1">
        <area shape="rect" coords="11,236,88,316" alt='{{<T "RegisterNewOnVitalControlDevice" >}}' title='{{<T "RegisterNewOnVitalControlDevice" >}}' href="#VitalControlSettingsPage1_Digit_2">
        <area shape="rect" coords="11,357,88,434" alt='{{<T "DeleteFromVitalControl" >}}' title='{{<T "DeleteFromVitalControl" >}}' href="#VitalControlSettingsPage1_Digit_3">
        <area shape="rect" coords="31,463,357,508" alt='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' title='{{<T "DoNotDeleteAnimalsYoungerThan" >}}' href="#VitalControlSettingsPage1_Digit_4">
        <area shape="rect" coords="420,236,511,286" alt='{{<T "RegisterNewOnAutomaticFeeder" >}}' title='{{<T "RegisterNewOnAutomaticFeeder" >}}' href="#VitalControlSettingsPage1_Digit_5">
        <area shape="rect" coords="435,352,837,397" alt='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' title='{{<T "FeedingCurveAssignedToImportedAnimals" >}}' href="#VitalControlSettingsPage1_Digit_6">
        <area shape="rect" coords="513,462,837,507" alt='{{<T "DoNotImportAnimalsOlderThan" >}}' title='{{<T "DoNotImportAnimalsOlderThan" >}}' href="#VitalControlSettingsPage1_Digit_7">
        <area shape="rect" coords="142,517,215,616" alt='Page 2' title='Page 2' href="#VitalControlSettingsPage1_Digit_8">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Ekran Görüntüsü 3: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> ayar menüsü, Sayfa 1
</figcaption>

Bu sayfada, aşağıdaki işlemleri ve ayarları gerçekleştirebilirsiniz.

### {{% T "VitalControl" %}} Cihazının Aktifleştirilmesi {#activation-vitalcontrol}

Makinenin varsayılan durumunda, {{<T "VitalControl" >}} devre dışıdır. {{<T "VitalControl" >}} cihazını aktifleştirmek için <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> anahtarını <span id="VitalControlSettingsPage1_Digit_1" style="font-size: 140%">➀</span> sağ konuma <span style="font-style: italic;">{{<T "YES" >}}</span> getirin. Ardından, besleyici menüsünün sağ kenar çubuğunda, bağlı makine(ler)in simgelerinin altında, `{{<T "VitalControl" >}}` cihazı için <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl cihazı" title="VitalControl"/> simgesi görüntülenecektir (bkz. Ekran Görüntüsü <span style="font-style: italic;"><a href="../synchronisation#figure3_synchronize_vitalcontrol_alma_pro">Besleyici Menüsü</a></span>, oradaki şekil <span style="font-size: 140%">➂</span>).

### Senkronizasyon otomatik besleyici <span style="font-size: 150%">🠲</span> {{% T "VitalControl" %}}

Ekranın sol tarafında iki onay kutusu bulunmaktadır:

* Onay kutusu <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_2">➁</span>.

Bu seçenek, senkronizasyon sırasında besleyicide bulunan ve henüz {{<T "VitalControl" >}} cihazına tanıtılmamış hayvanların varlığı durumunda davranışı kontrol eder. Bu seçenek varsayılan olarak etkindir ve genellikle etkin kalmalıdır. Satın aldığınız hayvanları hayvan pasaportlarını tarayarak kaydederseniz, bu seçenek devre dışı bırakılmalıdır.

<span style="font-weight: bold">Bu seçeneği etkinleştirin:</span>

- eğer önünüzde yeni bir {{<T "VitalControl" >}} varsa ve tüm hayvanları bir besleyiciden aktarmak istiyorsanız. Senkronizasyondan sonra, besleyicide bilinen tüm hayvanlar {{<T "VitalControl" >}} üzerinde de mevcut olacaktır.
- eğer sürekli olarak yeni buzağıları operasyon sırasında besleyiciye getiriyorsanız. Bu hayvanlar da senkronizasyon sırasında {{<T "VitalControl" >}} cihazında oluşturulacaktır.

<span style="font-weight: bold">Bu seçeneği devre dışı bırakın:</span>

- eğer hayvan pasaportlarını tarayarak {{<T "VitalControl" >}} üzerinde yeni oluşturulmuş hayvanlarınız varsa,
- bu hayvanlara henüz bir transponder atanmadıysa ve
- bu hayvanlar zaten besleyicide besleniyorsa ve bu nedenle orada kayıtlıysa.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
        Yukarıdaki yapılandırmada seçenek ayarlı kalırsa, senkronizasyondan sonra hayvanlar {{<T "VitalControl" >}} üzerinde iki kez mevcut olacaktır.
    </div>
</div>

* Onay kutusu <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_3">➂</span>

Bu seçenek, sadece {{<T "VitalControl" >}} üzerinde bulunan ancak yemlikte olmayan hayvanların bir sonraki senkronizasyon sırasında {{<T "VitalControl" >}}'den silinip silinmeyeceğini kontrol eder. {{<T "VitalControl" >}}'ü sadece hayvanların süt döneminde kullanıyorsanız, bu seçenek etkinleştirilmelidir. Hayvanları süt dönemi sonrasında da takip etmek istiyorsanız, bu seçeneği devre dışı bırakmalısınız.

Bu seçeneği <span style="font-weight: bold">etkinleştirin</span>:

- sadece süt döneminde hayvanlar için veri topluyorsanız,
- hayvanların yemlikten silindikten sonra bir sonraki senkronizasyon sırasında {{<T "VitalControl" >}}'den silinmesini istiyorsanız. Bu şekilde, zamanla {{<T "VitalControl" >}} üzerinde hayvan birikimi olmaz.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
        Bu seçenek etkinleştirilmişse ve <span style="font-size: 140%">⑤</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> onay kutusu da etkinleştirilmişse, <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_4">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span> sayı alanında belirtilenden daha genç olan hayvanlar silinmeyecektir.
    </div>
</div>

Bu seçeneği <span style="font-weight: bold">devre dışı bırakın</span>:
- süt dönemi sonrasında, örneğin bir tartım sırasında, hayvanlar için veri toplamaya devam etmek istiyorsanız,
- hayvanları {{<T "VitalControl" >}}'den manuel olarak silmeye istekliyseniz.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
        Bu seçeneği devre dışı bırakırsanız, sütten kesilen hayvanların transponderini {{<T "VitalControl" >}} cihazında en geç tasma sütten kesilen buzağıdan başka, daha genç bir buzağıya çıkarıldığında bağlantısını kesmelisiniz. Transponder çıkarılmazsa, artık sütten kesilen hayvanın eski tasmasını takan genç hayvanın veri kayıtları yanlışlıkla sütten kesilen hayvanların veri setine eklenir.
    </div>
</div>

### Senkronizasyon {{% T "VitalControl" %}} <span style="font-size: 150%">🠲</span> Otomatik Yemlik

Ekranın sağ tarafında bir onay kutusu ve iki giriş alanı bulunmaktadır:

* Onay kutusu <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_5">⑤</span>

- Bu seçenek, yemlikte bilinmeyen {{<T "VitalControl" >}} üzerindeki hayvanların, bir sonraki senkronizasyon sırasında yemlikte oluşturulup oluşturulmayacağını kontrol eder. Varsayılan olarak, bu seçenek etkin değildir.

    <span style="font-weight: bold">Devre dışı bırakın</span> veya devre dışı bırakılmış halde bırakın:

    - eğer {{<T "VitalControl" >}} cihazınızı aynı anda birden fazla yemlikte kullanıyorsanız,
    - eğer hayvanlarınızı önce {{<T "VitalControl" >}} cihazı üzerinden kaydetmeden doğrudan yemliğe getiriyorsanız. Hayvanlarınız, yemlikte ilk kez beslendiklerinde kayıt sırasında otomatik olarak oluşturulacaktır.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
            Eğer {{<T "VitalControl" >}} birden fazla makinede kullanılıyorsa ve bu seçenek işaretlenmişse, hayvanlar senkronizasyon sırasında istemeden bir makineden diğerine aktarılacaktır.
        </div>
    </div>

    <span style="font-weight: bold">Aktive edin</span> bu seçeneği:

    - eğer yeni doğan hayvanların ilk kaydı {{<T "VitalControl" >}} ile besleyicideki ilk beslenmeden önce gerçekleşiyorsa.
    - eğer satın aldığınız hayvanları {{<T "VitalControl" >}} üzerinde hayvan pasaportlarını tarayarak kaydediyorsanız.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
            Bu seçeneği yalnızca {{<T "VitalControl" >}} tek bir makinede kullanıyorsanız etkinleştirin! Bu seçenek ayarlandığında birden fazla makine ile senkronizasyon yapmak istiyorsanız, her makine için ayrı bir {{<T "VitalControl" >}} cihazı kullanmalısınız.
        </div>
    </div>


* Açılır menü <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_6">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Bu açılır menüde, senkronizasyon sırasında besleyicide yeni oluşturulan hayvanlara atanan yem eğrisini seçebilirsiniz.

* Sayısal giriş alanı<span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_7">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Bu sayı alanında, senkronizasyon sırasında besleyicide yeni oluşturulan hayvanların minimum yaşını (gün olarak) belirtebilirsiniz. Belirtilen minimum yaştan daha genç olan hayvanlar senkronizasyon sırasında **oluşturulmaz**.

Düğmeye basın <span style="font-size: 140%" id="VitalControlSettingsPage1_Digit_8">⑧</span> <span style="font-style: italic;">ayarlar menüsü {{<T "VitalControl" >}}</span> [sayfa 2](#settings-menu-vitalcontrol-page-2)'ye geçmek için.

## Ayarlar Menüsü `{{% T "VitalControl" %}}` - Sayfa 2 {#settings-menu-vitalcontrol-page-2}

### Senkronizasyon sırasında veri çakışmalarıyla nasıl başa çıkılır

Veri çakışmaları, besleyici ile {{<T "VitalControl" >}} cihazı arasında veri senkronizasyonu yaparken meydana gelebilir. Bir veri çakışması, {{<T "VitalControl" >}} cihazında ve besleyicideki veriler birbiriyle çeliştiğinde meydana gelir (örneğin, <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> ile ilgili olarak). Ayarlar menüsünün bu 2. sayfasında, senkronizasyon sırasında veri çakışmalarının nasıl çözüleceğini belirtebilirsiniz. Burada üç seçenek vardır:

* Öncelik besleyici verilerine verilir, {{<T "VitalControl" >}} cihazındaki veriler besleyicinin verileriyle üzerine yazılır.
  Bu seçeneği, besleyici sembolünün altındaki sol sütundaki radyo düğmesini seçerek etkinleştirin <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_4">➃</span>.

* Öncelik {{<T "VitalControl" >}} verilerine verilir, besleyicideki veriler {{<T "VitalControl" >}} cihazının verileriyle üzerine yazılır.
  Bu seçeneği, {{<T "VitalControl" >}} sembolünün altındaki sol sütundaki radyo düğmesini seçerek etkinleştirin <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_5">⑤</span>.

* Hiçbir değişiklik yapılmaz, hem yemlik verileri hem de {{<T "VitalControl" >}} cihaz verileri değişmeden kalır. Bu seçeneği sağ sütundaki radyo düğmesini seçerek etkinleştirin <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_6">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Örnek</span><br>
            Bir grup buzağı satın aldıktan sonra, satın aldığınız hayvanları tüm hayvan pasaportlarını tarayarak {{<T "VitalControl" >}} üzerinde kaydedersiniz. {{<T "VitalControl" >}} üzerindeki bu hayvanların hayvan numaraları, <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">cihaz ayarlarına</a> bağlı olarak hayvan pasaportunun son 3-5 hanesidir. Daha sonra yeni satın alınan hayvanlara Urban transponder'lı tasmalar takar ve onları otomatik yemlikte beslersiniz. İstasyona ilk ziyaret sırasında, hayvanlar transponder kullanılarak kaydedilir ve yemlikte yeni oluşturulur. Ancak, yemlikteki bu yeni hayvanların hayvan numaraları transponder numarasından türetilir veya bu transponder için yemlikte saklanan hayvan numarasına karşılık gelir. Bu, aynı hayvana {{<T "VitalControl" >}} cihazında ve yemlikte farklı bir hayvan numarası atanmış olduğu anlamına gelir ve bu da bir veri çatışmasına neden olur. <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_2">➁</span> için radyo düğmelerini kullanarak, ayarlar menüsünde iki paralel hayvan numarasından hangisinin öncelikli olduğunu ve hangisinin senkronizasyon sırasında silineceğini belirleyebilirsiniz.
        </div>
</div>

<figure class="figure" style="margin-top: 5px; border: 2px solid #dee2e6; border-radius: 16px; overflow: hidden; margin-bottom: 0;">
    <div style="padding: 12px;">
       <img
        src="../images/settings-vitalcontrol-2.png"
        alt="Ayarlar Menüsü VitalControl: Sayfa 2"
        usemap="#VitalControlSettingsPage2"
        style="max-width: 880px; width: 100%;"
        class="maphilight figure-img img-fluid" 
        align="bottom"
        title="Ayarlar VitalControl (2)" />
    </div>
    <map name="VitalControlSettingsPage2">
        <area shape="rect" coords="5,208,235,248" alt='{{<T "EarTagNumber" >}}' title='{{<T "EarTagNumber" >}}' href="#VitalControlSettingsPage2_Digit_1">
        <area shape="rect" coords="5,285,235,328" alt='{{<T "AnimalNumber" >}}' title='{{<T "AnimalNumber" >}}' href="#VitalControlSettingsPage2_Digit_2">
        <area shape="rect" coords="5,368,235,408" alt='{{<T "DateOfBirth" >}}' title='{{<T "DateOfBirth" >}}' href="#VitalControlSettingsPage2_Digit_3">
        <area shape="rect" coords="392,116,455,177" alt='{{<T "Feeder" >}}' title='{{<T "Feeder" >}}' href="#VitalControlSettingsPage2_Digit_4">
        <area shape="rect" coords="535,116,604,177" alt='{{<T "VitalControl" >}}' title='{{<T "VitalControl" >}}' href="#VitalControlSettingsPage2_Digit_5">
        <area shape="rect" coords="678,97,775,159" alt='{{<T "NoChange_AP" >}}' title='{{<T "NoChange_AP" >}}' href="#VitalControlSettingsPage2_Digit_6">
        <area shape="rect" coords="52,510,125,615" alt='Page 1' title='Page 1' href="#VitalControlSettingsPage2_Digit_8">
    </map>
</figure>
<figcaption class="figure-caption fs-6" style="margin-bottom: 1.5rem;">
    Ekran Görüntüsü 4: Ayarlar Menüsü <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Sayfa 2
</figcaption>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Alert:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
        İç nedenlerden dolayı, şu anda yalnızca <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> üzerinde değişiklik yapılabilir. Daha sonraki yazılım sürümlerinde, <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_1">➀</span> ve <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_3">➂</span> üzerinde de değişiklik yapabilirsiniz.
    </div>
</div>

<span style="font-style: italic;">Düğmeye</span> <span style="font-size: 140%" id="VitalControlSettingsPage2_Digit_8">⑧</span> basarak `{{<T "VitalControl" >}}` ayarları menüsünün [sayfa 1](#settings-menu-vitalcontrol-page-1)'ine geri döneceksiniz.
