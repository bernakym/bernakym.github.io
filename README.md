# bernakym.github.io

Berna Kayım'ın kişisel sitesi. Canlı: **https://bernakym.github.io**

Tasarım [Strata — HTML5 UP](https://html5up.net/strata) (CCA 3.0) üzerine kurulu;
iki dillilik, etiketler, zaman çizelgesi ve dil çubukları sonradan eklendi.

> **Durum:** CV ve portfolyo işlendi — 18 proje yayında.

## Yapı

```
index.html               tek sayfa — tüm içerik burada
assets/css/main.css      şablonun kendi stili (elle düzenlenmiyor)
assets/css/custom.css    ek stiller (dil butonu, etiketler, timeline, dil çubukları)
assets/js/lang.js        TR/EN dil değiştirici
assets/js/main.js        şablonun scripti — lightbox #two yerine #main'e bağlandı
images/avatar.jpg        profil görseli (CV'den kırpıldı)
images/og-profil.jpg     link önizleme görseli
images/work/             proje görselleri (*-thumb.jpg kartta, diğeri lightbox'ta)
.nojekyll                GitHub Pages'in Jekyll işlemesini atlaması için
```

## Bölümler

| id | Bölüm |
|----|-------|
| `header` | İsim ve tek cümlelik tanıtım |
| `#one` | Hakkımda, kullanılan programlar, yabancı dil |
| `#work` | Projeler — 18 kart, lightbox'ta tam pafta |
| `#two` | Deneyim (stajlar) ve yetkinlikler |
| `#three` | Eğitim, sertifikalar, ilgi alanları |
| `#four` | İletişim |

## İki dillilik nasıl çalışıyor

Her metnin HTML içinde iki kopyası var:

```html
<h2 lang="tr">Deneyim</h2>
<h2 lang="en">Experience</h2>
```

`assets/js/lang.js` `<html>` etiketine `data-lang="tr"` ya da `data-lang="en"` koyuyor,
`custom.css` de diğer dildeki kopyaları gizliyor. Seçim `localStorage`'da (`bk-lang`)
saklanıyor; ilk ziyarette tarayıcı diline göre karar veriliyor.

**Yeni metin eklerken iki dili de yazmayı unutma** — tek dilli bir etiket her iki
görünümde de aynı kalır.

## Yeni proje ekleme

1. Görselleri `images/work/` altına koy: `proje-thumb.jpg` (800×600, karttaki
   görsel) ve `proje.jpg` (en fazla 1400px, lightbox'ta açılan tam pafta).
2. `#work` bölümündeki bir `<article class="work-item">` bloğunu kopyalayıp düzenle.
3. Lightbox `#main` içindeki `.work-item a.image` bağlantılarını otomatik yakalar —
   ek ayar gerekmiyor.

Mevcut görseller `BernaKayım-Portfolyo.pdf` dosyasından üretildi: kart görseli
ilgili sayfadan metin kolonu ve alt bant dışarıda kalacak şekilde kırpıldı,
lightbox görseli ise projenin açıklama sayfasının tamamı.

## Siteye bilerek konmayan bilgiler

CV'de olup herkese açık sayfaya taşınmayanlar — istenirse eklenir:

- Telefon numarası
- Açık ev adresi (sayfada yalnızca "Bakırköy, İstanbul" yazıyor)
- Doğum tarihi
- Referans kişinin adı (üçüncü kişiye ait bilgi)

## Yerelde çalıştırma

```bash
python -m http.server 8000
# http://localhost:8000
```

`index.html` dosyasını doğrudan çift tıklayarak da açabilirsin.
