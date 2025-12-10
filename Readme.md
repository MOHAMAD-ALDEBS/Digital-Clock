# Digital Clock

Gerçek zamanlı dijital saat uygulaması. Modern tasarım ve sorunsuz performans ile saati 12 saatlik AM/PM formatında gösterir.

## 📸 Proje Ekran Görüntüsü

![Digital Clock](img/ss.jpg)

## 🎯 Özellikler

- ⏰ Gerçek zamanlı saat güncellemesi (her saniye)
- 🕐 12 saatlik AM/PM formatı
- 🎨 Modern ve şık arayüz
- 📱 Responsive tasarım
- 🌙 Arka plan görseli ile estetik görünüm
- 📦 Kutucuk içinde saat, dakika, saniye ve dönem göstergesi

## 📋 Dosya Yapısı

```
Digital Clock/
├── index.html      # HTML yapısı
├── style.css       # Stil dosyası
├── script.js       # JavaScript işlevleri
├── Readme.md       # Bu dosya
└── img/
    └── background.jpg  # Arka plan görseli
```

## 🛠️ Kullanılan Teknolojiler

- **HTML5** - Sayfa yapısı
- **CSS3** - Stil ve tasarım (Flexbox)
- **JavaScript** - Dinamik saat işlevselliği

## 🚀 Nasıl Kullanılır?

1. Dosyaları bilgisayarınıza indirin
2. `index.html` dosyasını web tarayıcınızda açın
3. Gerçek zamanlı saati izleyin

## 💻 Kod Özellikleri

### JavaScript (script.js)
- `updateClock()` fonksiyonu her saniye çalışır
- Saati 12 saatlik formata dönüştürür
- AM/PM değerini otomatik olarak ayarlar
- 10'dan küçük sayıları 0 ile başlatır (01, 02, vb.)

### CSS (style.css)
- **Flexbox** ile responsive layout
- **RGBA renkleri** ile şeffaf kutucuklar
- **Text-shadow** efektleri ile derinlik
- Farklı boyutlarda kutucuklar (saat: 90x90px, AM/PM: 50x50px)

## 🎨 Tasarım Detayları

- **Ana Kutucuklar**: 90x90 piksel, koyu arka plan (rgba(0, 0, 0, 0.5))
- **AM/PM Kutucuğu**: 50x50 piksel, açık arka plan (rgba(255, 255, 255, 0.2))
- **Border Radius**: 5px (dik köşeler)
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

## 📝 Lisans

Bu proje özgürce kullanılabilir ve düzenlenebilir.

## 👨‍💻 Geliştirici

Hazırlanma Tarihi: 2024
