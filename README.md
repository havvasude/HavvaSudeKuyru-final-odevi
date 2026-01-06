# Dictionary API Uygulaması

Bu proje, JavaScript kullanılarak geliştirilmiş tek sayfalık (SPA) bir İngilizce sözlük uygulamasıdır.
Kullanıcıdan alınan kelimenin anlamı, kelime türü, fonetik yazımı, örnek cümlesi ve telaffuzu
harici bir API üzerinden dinamik olarak gösterilmektedir.

## Kullanılan API
Free Dictionary API

## API Endpoint
https://api.dictionaryapi.dev/api/v2/entries/en/{word}

## Uygulama Nasıl Çalışır?
- Kullanıcı arama alanına bir İngilizce kelime girer
- Arama butonuna basıldığında Fetch API ile ilgili kelime için API isteği yapılır
- Gelen veriler JavaScript ile işlenerek sayfaya dinamik olarak eklenir
- Kelimenin anlamı, türü ve örnek cümlesi kullanıcıya gösterilir
- Eğer kelimeye ait ses dosyası varsa telaffuz dinlenebilir
- Hatalı veya bulunamayan kelimeler için kullanıcıya bilgilendirici mesaj gösterilir

## Kullanılan JavaScript Konuları
- Fetch API
- Async / Await
- try / catch
- DOM Manipülasyonu
- addEventListener
- Array metotları (map, find)
- Fonksiyon kullanımı

## Bonus Özellikler
- Kelimelerin telaffuzunu dinleme özelliği (Audio)
- Yükleniyor ve hata durumları için kullanıcı bilgilendirmesi

## Proje Dosya Yapısı
- index.html
- style.css
- script.js
- README.md
