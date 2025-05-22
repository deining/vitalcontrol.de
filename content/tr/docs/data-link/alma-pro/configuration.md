---
title: Cihazın Otomatik Yemlik Ayarlarında Tek Seferlik Aktivasyonu ve Yapılandırılması
linkTitle: Yapılandırma
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  VitalControl'ü ilk kez kullanmadan önce, Alma Pro yemlik ayarlarında bir kez etkinleştirmeniz ve doğru şekilde yapılandırmanız gerekir.
slug: configuration
weight: 10
categories: [Alma Pro, VitalControl]
translationKey: alma-pro/configuration
---
VitalControl cihazını etkinleştirmek ve kurmak için aşağıdaki adımları izleyin:

## Ayarlar menüsüne gitme `{{<T "VitalControl" >}}`

{{% alert title="Dikkat" %}}
{{<T "VitalControl" >}} cihazını etkinleştirmek ve kurmak için, otomatik yemlikte {{<T "SiteManager" >}} kullanıcı rolüyle oturum açmış olmanız gerekir. Aksi takdirde, aşağıda gösterilen ve açıklanan bazı düğmeler sizin için görünür olmayacaktır.
{{% /alert %}}

1. Dokunmatik terminalin sol kenar çubuğunda alt düğmeye tıklayın <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Ayarlar Menüsü" title="Ayarlar"/>`{{<T "Settings" >}}`<span style="font-size: 140%">➀</span>. Kenar çubuğunun görünmediği ana menüdeyseniz, kenar çubuğunu görüntülemek için &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Yemlik Menüsü" title="Yemlik Menüsü"/>`{{<T "Feeder" >}}` düğmesine basın.

1. Dokunmatik terminalin alt araç çubuğunda soldan ikinci düğmeye tıklayın <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Dokunmatik Terminal Ayarları" title="Dokunmatik Ayarlar"/>`{{<T "TouchTerminalSettings" >}}`<span style="font-size: 140%">➁</span>.

1. Şimdi merkezi ekran alanının sol yarısında bir dizi menü öğesi görünür. Alt düğmeye tıklayın `{{<T "Accessories" >}}` <span style="font-size: 140%">➂</span>.

1. Şimdi merkezi ekran alanının sağ yarısında bir menü öğesi (veya muhtemelen birkaç) görünür. Üst düğmeye tıklayın `{{<T "VitalControl" >}}` <span style="font-size: 140%">➃</span>. Düğme şimdi sol ekran yarısına geçer.

1. Ekranın sağ alt kısmında, &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="VitalControl ayarlarını aç" title="Ayarları aç" />`{{<T "OpenSettings" >}}`<span style="font-size: 140%">➄</span> düğmesi şimdi görüntülenir. Bu düğmeye tıklayın ve bir açılır pencere açılacak, `{{<T "VitalControl" >}}` ayarlar menüsünün [Sayfa 1](#settings-menu-vitalcontrol-page-1) sayfasını gösterecektir.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl ayarları: Erişim" title="VitalControl ayarları menüsüne erişim" />
    <figcaption class="figure-caption fs-6">Ekran Görüntüsü 1: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> ayarları menüsüne erişim</figcaption>
</figure>

`{{<T "VitalControl" >}}` ayarları menüsü iki sayfaya yayılmıştır:

## `{{<T "VitalControl" >}}` Ayarları Menüsü - Sayfa 1 {#settings-menu-vitalcontrol-page-1}

<span style="font-style: italic;">{{<T "VitalControl" >}}</span> ayarları menüsünün 1. sayfası şu şekilde sunulmuştur:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="VitalControl ayarları menüsü: Sayfa 1" title="VitalControl ayarları (1)" />
    <figcaption class="figure-caption fs-6">Ekran Görüntüsü 2: <span style="font-style: italic;">{{<T "VitalControl" >}}</span> ayarları menüsü, Sayfa 1</figcaption>
</figure>

Bu sayfada, aşağıdaki işlemleri ve ayarları gerçekleştirebilirsiniz.

### {{<T "VitalControl" >}} Cihazının Aktifleştirilmesi {#activation-vitalcontrol}

Makinenin varsayılan durumunda, {{<T "VitalControl" >}} devre dışıdır. {{<T "VitalControl" >}} cihazını aktifleştirmek için <span style="font-style: italic;">{{<T "NO" >}}/{{<T "YES" >}}</span> anahtarını <span style="font-size: 140%">➀</span> sağ konuma <span style="font-style: italic;">{{<T "YES" >}}</span> getirin. Ardından, besleyici menüsünün sağ kenar çubuğunda, bağlı makine(ler)in simgelerinin altında, `{{<T "VitalControl" >}}` cihazı için <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl cihazı" title="VitalControl"/> simgesi görüntülenecektir (bkz. Ekran Görüntüsü <span style="font-style: italic;"><a href="../synchronisation#synchronise-vc-ap">Besleyici Menüsü</a></span>, oradaki şekil <span style="font-size: 140%">➁</span>).

### Senkronizasyon otomatik besleyici <span style="font-size: 150%">🠲</span> {{<T "VitalControl" >}}

Ekranın sol tarafında iki onay kutusu bulunmaktadır:

* Onay kutusu <span style="font-style: italic;">{{<T "RegisterNewOnVitalControlDevice" >}}</span> <span style="font-size: 140%">➁</span>.

    Bu seçenek, senkronizasyon sırasında besleyicide bulunan ve henüz {{<T "VitalControl" >}} cihazına tanıtılmamış hayvanların varlığı durumunda davranışı kontrol eder. Bu seçenek varsayılan olarak etkindir ve genellikle ayarlı kalmalıdır. Satın aldığınız hayvanları hayvan pasaportlarını tarayarak kaydediyorsanız, bu seçenek devre dışı bırakılmalıdır.

    <span style="font-weight: bold">Etkinleştir</span> bu seçeneği:

    - eğer önünüzde yepyeni bir {{<T "VitalControl" >}} varsa ve tüm hayvanları bir besleyiciden aktarmak istiyorsanız. Senkronizasyondan sonra, besleyicide bilinen tüm hayvanlar {{<T "VitalControl" >}} üzerinde de mevcut olacaktır.
    - eğer sürekli olarak yeni buzağıları operasyon sırasında besleyiciye getiriyorsanız. Bu hayvanlar senkronizasyon sırasında {{<T "VitalControl" >}} cihazında da oluşturulacaktır.

    <span style="font-weight: bold">Devre dışı bırak</span> bu seçeneği:

    - eğer hayvan pasaportlarını tarayarak {{<T "VitalControl" >}} üzerinde yeni oluşturulmuş hayvanlarınız varsa, burada
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


* Onay Kutusu <span style="font-style: italic;">{{<T "DeleteFromVitalControl" >}}</span> <span style="font-size: 140%">➂</span>

    Bu seçenek, sadece {{<T "VitalControl" >}} üzerinde bulunan ancak yemlikte olmayan hayvanların bir sonraki senkronizasyon sırasında {{<T "VitalControl" >}}'den silinip silinmeyeceğini kontrol eder. {{<T "VitalControl" >}}'ü sadece hayvanların süt döneminde kullanıyorsanız, bu seçenek etkinleştirilmelidir. Hayvanları süt döneminin ötesinde takip etmek istiyorsanız, bu seçeneği devre dışı bırakmalısınız.

    Bu seçeneği <span style="font-weight: bold">etkinleştirin</span>:

    - sadece süt döneminde hayvanlar için veri topluyorsanız,
    - hayvanların yemlikten silindikten sonra bir sonraki senkronizasyonda {{<T "VitalControl" >}}'den silinmesini istiyorsanız. Bu şekilde, zamanla {{<T "VitalControl" >}} üzerinde hayvan birikmez.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
            Bu seçenek etkinleştirilirse ve onay kutusu <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> de etkinleştirilirse, <span style="font-size: 140%">➃</span> <span style="font-style: italic;">{{<T "DoNotDeleteAnimalsYoungerThan" >}}</span> sayı alanında belirtilen yaştan daha genç olan hayvanlar silinmeyecektir.
        </div>
    </div>

    Bu seçeneği <span style="font-weight: bold">devre dışı bırakın</span>:
    - süt döneminden sonra, örneğin bir tartım sırasında, hayvanlar için veri toplamaya devam etmek istiyorsanız,
    - hayvanları {{<T "VitalControl" >}}'den manuel olarak silmeye istekliyseniz.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
        Bu seçeneği devre dışı bırakırsanız, sütten kesilen hayvanların transponderini {{<T "VitalControl" >}} cihazında en geç tasma sütten kesilen buzağıdan başka, daha genç bir buzağıya çıkarıldığında bağlantısını kesmelisiniz. Transponder çıkarılmazsa, daha genç hayvanın -şimdi sütten kesilen hayvanın eski tasmasını takan- veri kayıtları yanlışlıkla sütten kesilen hayvanların veri setine eklenir.
    </div>
</div>

### Senkronizasyon {{<T "VitalControl" >}} <span style="font-size: 150%">🠲</span> Otomatik Yemlik

Ekranın sağ tarafında bir onay kutusu ve iki giriş alanı bulunmaktadır:

* Onay Kutusu <span style="font-style: italic;">{{<T "RegisterNewOnAutomaticFeeder" >}}</span> <span style="font-size: 140%">⑤</span>

- Bu seçenek, yemlik tarafından bilinmeyen {{<T "VitalControl" >}} üzerindeki hayvanların bir sonraki senkronizasyon sırasında yemlikte oluşturulup oluşturulmayacağını kontrol eder. Varsayılan olarak, bu seçenek etkin değildir.

    <span style="font-weight: bold">Devre dışı bırakın</span> veya devre dışı bırakılmış halde bırakın:

    - {{<T "VitalControl" >}} cihazınızı aynı anda birden fazla yemlikte kullanıyorsanız,
    - hayvanlarınızı önce {{<T "VitalControl" >}} cihazı aracılığıyla kaydetmeden doğrudan yemliğe getiriyorsanız. Hayvanlarınız, yemlikte ilk kez beslendiklerinde kayıt sırasında otomatik olarak oluşturulacaktır.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
            {{<T "VitalControl" >}} birden fazla makinede kullanılıyorsa ve bu seçenek işaretliyse, hayvanlar senkronizasyon sırasında istemeden bir makineden diğerine aktarılacaktır.
        </div>
    </div>

<span style="font-weight: bold">Bu seçeneği etkinleştirin:</span>

- yeni doğan hayvanlarınızın ilk kaydı {{<T "VitalControl" >}} ile yemlikteki ilk beslenmeden önce gerçekleşirse.
- satın aldığınız hayvanları {{<T "VitalControl" >}} üzerinde hayvan pasaportlarını tarayarak kaydederseniz.

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
        Bu seçeneği yalnızca {{<T "VitalControl" >}}'u tek bir makinede kullanıyorsanız etkinleştirin! Bu seçenek ayarlandığında birden fazla makine ile senkronizasyon yapmak istiyorsanız, her makine için ayrı bir {{<T "VitalControl" >}} cihazı kullanmalısınız.
    </div>
</div>

* Açılır menü <span style="font-size: 140%">⑥</span> <span style="font-style: italic;">{{<T "FeedingCurveAssignedToImportedAnimals" >}}</span>.

   Bu açılır menüde, senkronizasyon sırasında yemlikte yeni oluşturulan hayvanlara atanan yem eğrisini seçebilirsiniz.

* Sayısal giriş alanı<span style="font-size: 140%">⑦</span> <span style="font-style: italic;">{{<T "DoNotImportAnimalsOlderThan" >}}</span>.

    Bu sayı alanında, senkronizasyon sırasında yemlikte yeni oluşturulan hayvanların minimum yaşını (gün olarak) belirtebilirsiniz. Belirtilen minimum yaştan daha genç olan hayvanlar senkronizasyon sırasında **oluşturulmaz**.

Ayarlar menüsünün <span style="font-style: italic;">{{<T "VitalControl" >}}</span> [sayfa 2](#settings-menu-vitalcontrol-page-2)'ye geçmek için <span style="font-size: 140%">⑧</span> düğmesine basın.

## Ayarlar Menüsü `{{<T "VitalControl" >}}` - Sayfa 2 {#settings-menu-vitalcontrol-page-2}

### Senkronizasyon sırasında veri çakışmalarıyla nasıl başa çıkılır

Veri çakışmaları, besleyici ile {{<T "VitalControl" >}} cihazı arasında veri senkronizasyonu sırasında meydana gelebilir. Bir veri çakışması, {{<T "VitalControl" >}} cihazındaki ve besleyicideki verilerin birbiriyle çeliştiği durumlarda ortaya çıkar (örneğin, <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> ile ilgili olarak). Ayarlar menüsünün bu 2. sayfasında, senkronizasyon sırasında veri çakışmalarının nasıl çözüleceğini belirleyebilirsiniz. Burada üç seçenek bulunmaktadır:

* Öncelik besleyici verilerine verilir, {{<T "VitalControl" >}} cihazındaki veriler besleyicinin verileriyle üzerine yazılır.
  Bu seçeneği, besleyici sembolünün altındaki sol sütunda bulunan radyo düğmesini seçerek etkinleştirin <span style="font-size: 140%">➃</span>.

* Öncelik {{<T "VitalControl" >}} verilerine verilir, besleyicideki veriler {{<T "VitalControl" >}} cihazının verileriyle üzerine yazılır.
  Bu seçeneği, {{<T "VitalControl" >}} sembolünün altındaki sol sütunda bulunan radyo düğmesini seçerek etkinleştirin <span style="font-size: 140%">⑤</span>.

* Hiçbir değişiklik yapılmaz, hem besleyici verileri hem de {{<T "VitalControl" >}} cihaz verileri değişmeden kalır.\
  Bu seçeneği, sağ sütunda bulunan radyo düğmesini seçerek etkinleştirin <span style="font-size: 140%">⑥</span>.

<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Example:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Örnek</span><br>
            Bir grup buzağı satın aldıktan sonra, satın aldığınız hayvanları tüm hayvan pasaportlarını tarayarak {{<T "VitalControl" >}} üzerinde kaydedersiniz. {{<T "VitalControl" >}} üzerindeki bu hayvanların hayvan numaraları, <a href="/en/docs/settings/animal-registration/#digit-of-the-new-id">cihaz ayarlarına</a> bağlı olarak hayvan pasaportunun son 3-5 hanesidir. Daha sonra yeni satın alınan hayvanlara Urban transponder'lı tasmalar takar ve onları otomatik besleyicide beslersiniz. İstasyona ilk ziyaret sırasında, hayvanlar transponder kullanılarak kaydedilir ve besleyicide yeni oluşturulur. Ancak, besleyicideki bu yeni hayvanların hayvan numaraları transponder numarasından türetilir veya bu transponder için besleyicide saklanan hayvan numarasına karşılık gelir. Bu, {{<T "VitalControl" >}} cihazında ve besleyicide aynı hayvana farklı bir hayvan numarası atanmış olduğu anlamına gelir ve bu da bir veri çakışmasına neden olur. Ayarlar menüsünde <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> için radyo düğmelerini kullanarak, hangi iki paralel hayvan numarasının öncelikli olduğunu ve hangisinin senkronizasyon sırasında silineceğini belirleyebilirsiniz.
        </div>
</div>

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Ayarlar Menüsü VitalControl: Sayfa 2" title="Ayarlar VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Ekran Görüntüsü 3: Ayarlar Menüsü <span style="font-style: italic;">{{<T "VitalControl" >}}</span>, Sayfa 2</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Uyarı:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Dikkat</span><br>
        Dahili nedenlerden dolayı, şu anda yalnızca <span style="font-style: italic;">{{<T "AnimalNumber" >}}</span> <span style="font-size: 140%">➁</span> üzerinde değişiklik yapılabilir. Daha sonraki yazılım sürümlerinde, <span style="font-style: italic;">{{<T "EarTagNumber" >}}</span> <span style="font-size: 140%">➀</span> ve <span style="font-style: italic;">{{<T "DateOfBirth" >}}</span> <span style="font-size: 140%">➂</span> üzerinde de değişiklik yapabilirsiniz.
    </div>
</div>

<span style="font-style: italic;">Düğmesine</span> <span style="font-size: 140%">⑧</span> basarak `{{<T "VitalControl" >}}` ayarlar menüsünün [sayfa 1](#settings-menu-vitalcontrol-page-1)'ine geri döneceksiniz.
