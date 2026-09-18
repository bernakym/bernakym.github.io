# bernakayim.github.io

Berna Kayım'ın kişisel sitesi. Canlı: **https://bernakayim.github.io**

Tasarım [Strata — HTML5 UP](https://html5up.net/strata) (CCA 3.0) üzerine kurulu;
iki dillilik, etiketler ve proje kartları `gokberkdokmen.github.io` sitesindeki
düzenlemelerle aynı.

> **Durum:** iskelet hazır, içerik henüz girilmedi.
> `index.html` içindeki tüm `TODO` işaretleri doldurulmalı.

## Yapı

```
index.html               tek sayfa — tüm içerik burada
assets/css/main.css      şablonun kendi stili (elle düzenlenmiyor)
assets/css/custom.css    ek stiller (dil butonu, etiketler, kartlar)
assets/js/lang.js        TR/EN dil değiştirici
images/avatar.jpg        profil görseli (şu an yer tutucu)
images/og-profil.jpg     link önizleme görseli (şu an yer tutucu)
images/work/             proje görselleri (*-thumb.jpg ızgarada, diğeri lightbox'ta)
.nojekyll                GitHub Pages'in Jekyll işlemesini atlaması için
```

## İki dillilik nasıl çalışıyor

Her metnin HTML içinde iki kopyası var:

```html
<h2 lang="tr">Projeler</h2>
<h2 lang="en">Selected Work</h2>
```

`assets/js/lang.js` `<html>` etiketine `data-lang="tr"` ya da `data-lang="en"` koyuyor,
`custom.css` de diğer dildeki kopyaları gizliyor. Seçim `localStorage`'da (`bk-lang`)
saklanıyor; ilk ziyarette tarayıcı diline göre karar veriliyor.

**Yeni metin eklerken iki dili de yazmayı unutma** — tek dilli bir etiket her iki
görünümde de aynı kalır.

## Yeni proje ekleme

1. Görseli `images/work/` altına koy: `proje-thumb.jpg` (800×600) ve `proje.jpg` (en fazla 1400px genişlik).
2. `index.html` içinde `id="two"` bölümündeki bir `<article>` bloğunu kopyalayıp düzenle.

## Doldurulacaklar (TODO)

- [ ] Başlık, açıklama ve OG meta etiketleri
- [ ] Header'daki tanıtım cümlesi (TR + EN)
- [ ] Hakkımda paragrafı (TR + EN)
- [ ] Teknoloji / yetenek etiketleri
- [ ] Proje kartları ve görselleri
- [ ] İletişim bilgileri (e-posta, LinkedIn, GitHub, konum)
- [ ] `images/avatar.jpg` ve `images/og-profil.jpg` gerçek görsellerle değiştirilecek

## Yerelde çalıştırma

```bash
python -m http.server 8000
# http://localhost:8000
```

`index.html` dosyasını doğrudan çift tıklayarak da açabilirsin.

## Yayına alma

1. GitHub'da `bernakayim` hesabı altında `bernakayim.github.io` adında bir depo aç.
2. `git remote add origin https://github.com/bernakayim/bernakayim.github.io.git`
3. `git push -u origin main` — Pages otomatik olarak `main` dalından yayınlar.
