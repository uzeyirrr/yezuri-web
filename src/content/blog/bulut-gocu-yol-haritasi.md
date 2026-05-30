---
title: "Bulut Göçü (Cloud Migration) Rehberi: 6 Aşamalı Yol Haritası, Maliyet ve Güvenlik"
description: "Bulut göçü nedir, hangi strateji size uygun ve maliyetler nasıl kontrol edilir? 6R modeli, 6 aşamalı yol haritası, güvenlik ve maliyet optimizasyonu ile kapsamlı rehber."
pubDate: 2026-05-22
author: Yezuri
category: Bulut
tags: ["bulut göçü", "cloud migration", "AWS", "Azure", "altyapı", "maliyet optimizasyonu"]
locale: tr
translationKey: cloud-migration
accent: "#2563eb"
cover: /blog/cloud-migration.svg
---

Fiziksel sunucular yaşlanıyor, bakım maliyetleri artıyor ve iş hacminiz dalgalandıkça altyapınız ya yetersiz kalıyor ya da boşa para yakıyor. **Bulut göçü**, uygulamalarınızı ve verilerinizi kendi sunucularınızdan bulut platformlarına taşıyarak bu sorunları çözer. Ancak yanlış planlanmış bir göç, beklenenden yüksek faturalar ve kesintiler getirebilir. Bu rehber, bulut göçünü riske atmadan nasıl yapacağınızı anlatıyor.

## Bulut göçü nedir?

Bulut göçü; sunucu, veritabanı, uygulama ve verilerin şirket içi (on-premise) altyapıdan AWS, Azure veya Google Cloud gibi bulut sağlayıcılara taşınmasıdır. Taşıma yalnızca "sunucuyu kaldırıp buluta koymak" değildir; çoğu zaman uygulamayı buluta uygun şekilde yeniden tasarlamayı da içerir.

## Buluta neden geçilir?

- **Maliyet modeli:** Büyük peşin donanım yatırımı (CapEx) yerine, kullandıkça öde (OpEx) modeli.
- **Esneklik:** Yoğunlukta otomatik ölçeklenir, sakin dönemde küçülürsünüz. Kampanya günü çöken siteye veda.
- **Erişilebilirlik ve yedeklilik:** Coğrafi olarak dağıtık altyapı, tek bir donanım arızasında işin durmaması demektir.
- **Güvenlik ve uyumluluk:** Büyük sağlayıcılar, çoğu KOBİ'nin tek başına karşılayamayacağı sertifikasyon ve güvenlik katmanları sunar.
- **Hız:** Yeni bir ortam dakikalar içinde ayağa kalkar; haftalarca donanım beklemezsiniz.

## 6R: Bulut göç stratejileri

Her uygulama aynı şekilde taşınmaz. Sektörde "6R" olarak bilinen stratejiler, hangi uygulamaya ne yapılacağını belirler:

1. **Rehost ("lift and shift"):** Uygulamayı olduğu gibi buluta taşımak. En hızlı yöntem; bulutun avantajlarından sınırlı yararlanır.
2. **Replatform:** Küçük iyileştirmelerle taşımak (örn. veritabanını yönetilen bir servise almak). Hız ve fayda dengesi iyidir.
3. **Refactor / Re-architect:** Uygulamayı buluta özgü (mikroservis, sunucusuz) yeniden tasarlamak. En yüksek fayda, en yüksek emek.
4. **Repurchase:** Mevcut çözümü bırakıp bir SaaS'a geçmek (örn. kendi CRM'inizi bırakıp hazır bir CRM almak).
5. **Retire:** Artık kullanılmayan sistemleri tamamen kapatmak. Göç, gereksiz yükten kurtulmak için iyi bir fırsattır.
6. **Retain:** Bazı sistemleri (henüz) şirket içinde tutmak. Her şeyi taşımak zorunda değilsiniz.

> Çoğu gerçek projede bu stratejiler **karışık** uygulanır: kritik uygulama refactor edilirken, ikincil sistemler rehost edilir, ölü sistemler emekliye ayrılır.

## 6 aşamalı bulut göçü yol haritası

### 1. Envanter ve değerlendirme
Hangi uygulamalar, hangi bağımlılıklarla, hangi veriyle çalışıyor? Trafik desenleri ve mevcut maliyetler ne? Bu fotoğraf çekilmeden atılan her adım risklidir.

### 2. Strateji ve hedef mimari
Her uygulama için 6R'den birini seçin. Hedef bulut mimarisini, ağ topolojisini ve güvenlik sınırlarını tasarlayın. Maliyet tahminini bu aşamada çıkarın.

### 3. Kanıtlama (Proof of Concept)
Düşük riskli bir uygulamayı taşıyarak yaklaşımı doğrulayın. Performans, maliyet ve operasyon varsayımlarınızı gerçek veriyle test edin.

### 4. Göç
Önceliklendirilmiş dalgalar halinde taşıyın. Veriyi senkron tutmak, geri dönüş (rollback) planı hazırlamak ve kesinti penceresini minimize etmek kritiktir.

### 5. Doğrulama ve devreye alma
Taşınan sistemleri fonksiyonel, performans ve güvenlik açısından test edin. Trafiği kademeli yönlendirin; her şey doğrulanmadan eski ortamı kapatmayın.

### 6. Optimizasyon
Göç bitiş değil başlangıçtır. Kaynakları doğru boyutlandırın, otomatik ölçeklemeyi ayarlayın, gereksiz kaynakları kapatın. Asıl tasarruf bu aşamada gelir.

## Maliyet kontrolü: faturayı şişiren tuzaklar

Bulutta sürpriz fatura genellikle planlama eksikliğindendir. En sık görülenler:

- **Aşırı boyutlandırma:** İhtiyaçtan büyük makineler seçmek. Gerçek kullanımı izleyip küçültün (right-sizing).
- **Açık unutulan kaynaklar:** Test için açılıp kapatılmayan ortamlar 7/24 fatura üretir.
- **Veri çıkış (egress) ücretleri:** Buluttan dışarı veri taşımak ücretlidir; mimaride dikkate alın.
- **Rezervasyon kullanmamak:** Öngörülebilir yükler için "reserved"/"savings plan" modelleri %40–70 tasarruf sağlayabilir.
- **Otomatik ölçeklemeyi kurmamak:** Sürekli en yüksek kapasiteyi açık tutmak en pahalı seçenektir.

## Güvenlik ve uyumluluk

Bulut güvenliği "paylaşılan sorumluluk" modeliyle çalışır: Sağlayıcı altyapının güvenliğinden, siz ise *buluttaki* yapılandırmanızdan sorumlusunuz. Temel ilkeler:

- **En az yetki (least privilege):** Her kullanıcı ve servis yalnızca ihtiyacı olan erişime sahip olmalı.
- **Şifreleme:** Veriyi hem dururken hem aktarılırken şifreleyin.
- **Ağ izolasyonu:** Özel ağlar, güvenlik grupları ve doğru yapılandırılmış erişim kuralları.
- **İzleme ve denetim:** Logları merkezîleştirin, anormallikleri yakalayın.
- **KVKK/uyumluluk:** Verinin hangi bölgede tutulacağını ve saklama sürelerini baştan netleştirin.

## Sık sorulan sorular

**Bulut göçü işimi kesintiye uğratır mı?**
Doğru planlanmış bir göçte kesinti dakikalarla sınırlı tutulabilir, hatta sıfır kesintiyle yapılabilir. Kademeli geçiş ve geri dönüş planı bunun anahtarıdır.

**Bulut her zaman daha mı ucuz?**
Otomatik olarak değil. Optimizasyon yapılmazsa bulut, şirket içi altyapıdan pahalı olabilir. Tasarruf, doğru boyutlandırma ve sürekli yönetimle gelir.

**Hangi sağlayıcıyı seçmeliyim?**
İhtiyaca bağlı. Microsoft ekosistemi ağırlıklı şirketlerde Azure, geniş servis yelpazesinde AWS, veri/yapay zekâ odağında Google Cloud öne çıkabilir. Karar, mevcut yetkinlik ve iş hedeflerine göre verilmelidir.

## Sonuç

Bulut göçü, doğru yapıldığında maliyetleri öngörülebilir kılan, işi ölçeklenebilir ve dayanıklı hale getiren stratejik bir adımdır. Başarının sırrı; envanteri iyi çıkarmak, her uygulamaya uygun stratejiyi seçmek, küçük bir kanıtlamayla başlamak ve göçten sonra optimizasyonu bırakmamaktır.

Yezuri olarak mevcut altyapınızı değerlendiriyor, size özel bir göç ve maliyet planı çıkarıyor ve geçişi kesintisiz yönetiyoruz. **Bulut yol haritanızı birlikte çıkaralım.**
