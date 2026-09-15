# Analisa WhatsApp — Website Publik DCSindo

> Status: **analisa saja, tidak ada kode yang diubah.**
> Branch: `security/c01-c03-hardening` · Tanggal: 2026-08-28

---

## 1. FOOTER — Bagian Nomor WhatsApp

**Lokasi persis:** `client/src/components/layout.tsx:621-641`

| Hal | Nilai |
|---|---|
| Baris blok WA | `layout.tsx:621` (`<div className="flex gap-4 items-start">`) s/d `:641` |
| Ikon | `layout.tsx:622` |
| Link nomor #1 | `href` di `:625`, teks tampil di `:630` |
| Link nomor #2 | `href` di `:633`, teks tampil di `:638` |

### Cara 2 nomor ditampilkan

**2 link `<a>` terpisah**, bukan teks biasa. Keduanya dibungkus satu `<div className="flex flex-col gap-1">` (`:623`) dan berbagi **satu ikon WhatsApp** di sebelah kiri.

```
<div className="flex gap-4 items-start">                      // :621
  <WhatsAppIcon className="w-6 h-6 mt-1 flex-shrink-0" />     // :622
  <div className="flex flex-col gap-1">                       // :623
    <a href="https://wa.me/628153058666"  ...>+62 815-3058-666</a>   // :625 / :630
    <a href="https://wa.me/6281287801925" ...>+62 812-8780-1925</a>  // :633 / :638
  </div>
</div>
```

### Sumber nomor: **HARDCODE di komponen**
rf
Ditulis langsung sebagai string literal di JSX. **Tidak** dari config, **tidak** dari env, **tidak** dari DB.

Ini ironis karena file helper-nya **sudah ada**: `client/src/lib/contact.ts` mengekspor `DCS_WHATSAPP_PRIMARY` dan `DCS_WHATSAPP_SECONDARY` dengan nomor yang persis sama — tapi `layout.tsx` sama sekali tidak meng-import-nya (lihat blok import `layout.tsx:1-20`).

Konfirmasi tidak ada sumber eksternal:

- `env.example` → tidak ada key WA/phone sama sekali
- `database/*.sql` → tidak ada kolom/tabel nomor WA
- `server/**/*.ts` → 0 hit untuk `whatsapp` / `wa.me`

### Ikon WhatsApp di footer

**SVG inline**, bukan lucide-react, bukan file gambar.

Didefinisikan sebagai komponen lokal `WhatsAppIcon` di `client/src/components/layout.tsx:22-36`:

- `viewBox="0 0 32 32"`
- `fill="currentColor"` — glyph **solid/filled**
- `aria-hidden="true"` + `focusable="false"` (aksesibilitas sudah benar)

### Kenapa terlihat berantakan — 6 penyebab

**a) Campur ikon solid vs outline (penyebab utama)**

Dalam satu kolom `space-y-8` (`:607`) ada 3 baris kontak:

| Baris | Ikon | Library | Gaya render | Ukuran |
|---|---|---|---|---|
| Alamat `:609` | `MapPin` | lucide-react | **outline / stroke** | `w-6 h-6` |
| WhatsApp `:622` | `WhatsAppIcon` | SVG inline lokal | **solid / fill** | `w-6 h-6` |
| Email `:644` | `Mail` | lucide-react | **outline / stroke** | `w-6 h-6` |

Ikon WA jadi "gumpalan" pekat di antara dua ikon garis tipis. Meski `w-6 h-6` sama, **bobot visualnya jauh lebih berat**.

**b) Mismatch viewBox → ukuran optis beda**

Lucide pakai `viewBox 0 0 24 24`, `WhatsAppIcon` pakai `viewBox 0 0 32 32`. Path WA mengisi ~81% kotaknya (x/y kira-kira 3→29 dari 32), sedangkan glyph lucide punya inset berbeda. Hasilnya: pada `w-6 h-6` yang identik, ikon WA tetap terbaca beda besar dari tetangganya.

**c) Strategi alignment tidak konsisten antar baris**

- Alamat `:608` → `items-start` + ikon `mt-1`
- WhatsApp `:621` → `items-start` + ikon `mt-1`
- Email `:643` → **`items-center`, tanpa `mt-1`**

Tiga baris, dua pendekatan vertical-centering berbeda dalam satu blok.

**d) Ikon "mengambang" di baris WA yang tinggi**

Blok 2 nomor tingginya ≈ **60px** (2 × line-height `text-lg` 28px + `gap-1` 4px). Ikon `w-6 h-6` (24px) di-pin ke atas oleh `items-start` + `mt-1`. Akibatnya ada **ruang kosong ~32px** di kiri nomor kedua — baris WA terlihat timpang dibanding baris Email yang cuma 1 baris dan `items-center`.

**e) `gap-1` terlalu rapat**

Jarak 4px antara dua link `text-lg` (font 18px / line-height 28px) membuat kedua nomor **nyaris menempel** dan terbaca sebagai satu blok teks ter-wrap, bukan dua link berbeda. Tidak ada pemisah, tidak ada label (mana Sales, mana Support).

**f) Token warna tidak cocok untuk footer inverted**

Footer pakai `bg-foreground text-background` (`:595`) — background/foreground dibalik. Tapi tagline `:602` tetap pakai `text-muted-foreground/80`, token yang dikalibrasi untuk background terang. Di atas footer gelap hasilnya pudar / kontras rendah.

---

## 2. FLOATING BUTTON WhatsApp

**Lokasi persis:** `client/src/components/layout.tsx:577-592`

| Hal | Baris |
|---|---|
| Komentar `{/* Floating WhatsApp Button */}` | `:577` |
| `<motion.a>` | `:578` |
| `href` (nomor + prefill) | `:579` |
| `className` (posisi & bentuk) | `:585` |
| Ikon | `:589` |
| Pulse ring | `:591` |

### Ikon

Pakai komponen lokal `WhatsAppIcon` yang **sama persis** dengan footer (`layout.tsx:22-36`) — SVG inline solid, `viewBox 0 0 32 32`.

```
<WhatsAppIcon className="w-7 h-7 text-white" />   // :589
```

### Ukuran & alignment

```
className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full
           bg-[#25D366] hover:bg-[#1ebe5d]
           flex items-center justify-center
           shadow-lg shadow-green-500/30 transition-colors"    // :585
```

- Lingkaran **56px** (`w-14 h-14`), ikon **28px** (`w-7 h-7`) → rasio isi 50%
- Karena glyph hanya mengisi ~81% viewBox-nya, **ukuran optis efektif ≈ 22-23px** dalam lingkaran 56px → ikon terasa **kekecilan / tenggelam**
- `flex items-center justify-center` → centering **geometris** sudah benar. Tapi logo WhatsApp punya "ekor" balon di kiri-bawah, jadi centering geometris biasanya terlihat agak turun/kiri; butuh nudge optis kalau mau presisi

### Masalah tambahan pada floating stack

**Sumbu vertikal 2 tombol tidak sejajar**

| Tombol | Baris | Posisi | Ukuran | Jarak pusat dari kanan |
|---|---|---|---|---|
| Back to Top | `:569` | `bottom-24 right-5` | `w-10 h-10` (40px) | 20 + 20 = **40px** |
| WhatsApp | `:585` | `bottom-5 right-5` | `w-14 h-14` (56px) | 20 + 28 = **48px** |

Keduanya `right-5`, tapi ukuran beda → pusatnya **meleset 8px**. Tumpukan tombol melayang terlihat tidak lurus.

**Pulse ring nabrak tombol Back to Top**

```
<span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />   // :591
```

`animate-ping` membesarkan ring sampai 2x dari pusat. Pusat tombol WA ada di 48px dari bawah, radius tumbuh 28px → 56px, jadi puncak ring mencapai **~104px** dari bawah. Tombol Back to Top mulai di **96px** (`bottom-24`). Ring hijau **melintas di belakang tombol Back to Top** setiap siklus animasi. Tidak memblokir klik (`pointer-events-none`), tapi secara visual jelas berantakan.

### Klik ke nomor mana? **Hardcode, nomor primary saja**

`:579` → `https://wa.me/628153058666`

Nomor kedua (`6281287801925`) **tidak pernah dipakai** di floating button. Tidak ada logika pemilihan/rotasi sama sekali.

### Prefill text — **ADA**

Di-encode langsung di dalam string href (`:579`), bukan lewat `encodeURIComponent`:

```
?text=Halo%20DCS%2C%20saya%20ingin%20bertanya%20tentang%20produk.
```

Setelah di-decode:

> **"Halo DCS, saya ingin bertanya tentang produk."**

---

## 3. NOMOR WHATSAPP

### Kedua nomor (apa adanya dari kode)

| # | Format URL (raw) | Format tampil | Konstanta di `contact.ts` |
|---|---|---|---|
| 1 | `628153058666` | `+62 815-3058-666` | `DCS_WHATSAPP_PRIMARY` |
| 2 | `6281287801925` | `+62 812-8780-1925` | `DCS_WHATSAPP_SECONDARY` |

> Catatan: nomor #1 hanya **12 digit** (`628153058666`), nomor #2 **13 digit** (`6281287801925`). Format tampil `+62 815-3058-666` juga pengelompokannya tidak standar. Perlu dikonfirmasi ke tim bahwa nomor #1 memang benar, bukan typo kurang 1 digit.

### Berapa tempat yang hardcode nomor WA? → **6 lokasi**

Yang menulis nomor langsung di JSX (**bypass** `contact.ts`):

| # | File:baris | Nomor | Konteks |
|---|---|---|---|
| 1 | `client/src/components/layout.tsx:579` | primary | Floating button |
| 2 | `client/src/components/layout.tsx:625` | primary | Footer link #1 |
| 3 | `client/src/components/layout.tsx:633` | secondary | Footer link #2 |
| 4 | `client/src/pages/support/Mikrotik.tsx:165` | primary | CTA "WhatsApp Support" |
| 5 | `client/src/pages/support/Vsol.tsx:166` | primary | CTA "WhatsApp Support" |
| 6 | `client/src/vsol/public/StoreProductDetail.tsx:396` | primary | CTA "Contact Us for Price" |

Plus **string tampil** yang juga hardcode: `layout.tsx:630` dan `layout.tsx:638`.

Dan sumber kebenarannya sendiri: `client/src/lib/contact.ts:1-2`.

### Yang SUDAH benar pakai `contact.ts` → 3 file

| File:baris | Import di baris |
|---|---|
| `client/src/pages/fiberhome/FiberHomePage.tsx:284` | `:5` |
| `client/src/pages/fiberhome/FiberHomeProductDetail.tsx:248` | `:11` |
| `client/src/pages/training/TrainingDetail.tsx:298` | `:12` |

**Kesimpulan: sentralisasi baru jalan 3 dari 9 titik pakai (33%).** Yang paling terlihat user (footer + floating button) justru yang belum.

### Ikon WhatsApp juga terduplikasi — **3 implementasi berbeda**

| Implementasi | Lokasi | viewBox | Dipakai di |
|---|---|---|---|
| `WhatsAppIcon` (path `M19.11 17.27…`) | `layout.tsx:22-36` | `0 0 32 32` | Footer, floating button |
| `WhatsAppIcon` (path `M19.11 17.27…` — **duplikat persis**) | `TrainingDetail.tsx:229-235` | `0 0 32 32` | CTA training |
| SVG anonim (path `M17.472 14.382…` — **path lain**) | `StoreProductDetail.tsx:401-403` | `0 0 24 24` | CTA V-SOL |
| `MessageCircle` (lucide, **bukan logo WA**) | — | `0 0 24 24` | FiberHomePage `:291`, FiberHomeProductDetail `:255`, Mikrotik `:173`, Vsol `:174` |

4 halaman memakai `MessageCircle` — balon chat generik, **bukan logo WhatsApp**. Jadi tombol yang membuka WhatsApp tidak menampilkan brand WhatsApp.

---

## 4. PREFILL TEXT

### Semua prefill yang ada

| # | File:baris | Bahasa | Metode encode | Isi teks |
|---|---|---|---|---|
| 1 | `layout.tsx:579` | ID | pre-encoded manual | `Halo DCS, saya ingin bertanya tentang produk.` |
| 2 | `StoreProductDetail.tsx:396` | ID | pre-encoded manual | `Halo DCS, saya tertarik dengan produk V-SOL ini.` |
| 3 | `FiberHomePage.tsx:285` | EN | `encodeURIComponent` | `Hello DCS, I would like to ask about FiberHome products.` |
| 4 | `FiberHomeProductDetail.tsx:249` | EN | `encodeURIComponent` | `Hello, I am interested in the FiberHome ${d.name} (SKU: ${d.sku}). Could you share more information?` |
| 5 | `TrainingDetail.tsx:297` | ID | `encodeURIComponent` | `Halo DCS, saya ingin mengetahui lebih lanjut tentang training "${d.title}". Mohon informasinya.` |
| 6 | `Mikrotik.tsx:165` | — | — | **TIDAK ADA PREFILL** |
| 7 | `Vsol.tsx:166` | — | — | **TIDAK ADA PREFILL** |

### Sama semua atau beda-beda? → **BEDA SEMUA**

Tidak ada dua yang identik. Ada 4 sumbu inkonsistensi:

1. **Bahasa campur** — 3 Indonesia, 2 Inggris, 2 tanpa teks.
   Commit `3618c8a` ("translate FiberHome public marketing prose to English") baru menerjemahkan FiberHome saja → **migrasi bahasa setengah jalan**. Floating button (yang muncul di *semua* halaman, termasuk halaman FiberHome berbahasa Inggris) masih Bahasa Indonesia.

2. **Metode encoding beda** — 2 pakai `%20`/`%2C` yang diketik manual, 3 pakai `encodeURIComponent`. Yang manual rawan salah kalau teks diedit dan lupa di-encode ulang.

3. **Statis vs dinamis** — 3 statis, 2 menyisipkan data produk/training (`d.name`, `d.sku`, `d.title`).
   Pada `FiberHomeProductDetail.tsx:249` dan `TrainingDetail.tsx:297`, data dinamis masuk ke template **sebelum** `encodeURIComponent` membungkus seluruh string — ini kebetulan aman, tapi polanya rapuh kalau nanti ada yang menyusun URL-nya beda urutan.

4. **Sapaan tidak seragam** — "Halo DCS," / "Hello DCS," / "Hello," (tanpa DCS) / kosong.

---

## 5. USULAN STRUKTUR (belum diimplementasi)

### 5.1 Nomor + fungsi pemilih random → taruh di mana?

**Rekomendasi: perluas file yang sudah ada, JANGAN bikin file baru.**

**Path: `client/src/lib/contact.ts`**

Alasan:

- File ini **sudah ada** dan **sudah menyimpan kedua nomor**
- **Sudah** di-import 3 file → pola dan alias `@/lib/` sudah terbukti jalan
- Bikin file baru (`lib/whatsapp.ts`) justru menambah sumber kebenaran ke-2 — masalahnya sekarang justru terlalu banyak sumber, bukan kurang

Struktur yang diusulkan (konseptual, **belum diimplementasi**):

```
client/src/lib/contact.ts
  ├─ WHATSAPP_NUMBERS       → array of { raw, display, label }  ← sumber kebenaran tunggal
  ├─ DCS_WHATSAPP_PRIMARY   → tetap ada (backward-compat, 3 file existing tidak perlu diubah)
  ├─ DCS_WHATSAPP_SECONDARY → tetap ada
  ├─ pickWhatsAppNumber()   → pilih acak dari WHATSAPP_NUMBERS
  └─ buildWhatsAppUrl(number, message?) → rakit wa.me + encodeURIComponent
```

Ditambah satu file untuk ikon:

**Path: `client/src/components/icons/whatsapp.tsx`**
Pindahkan `WhatsAppIcon` ke sini agar 3 duplikasi SVG (`layout.tsx:22`, `TrainingDetail.tsx:229`, `StoreProductDetail.tsx:401`) jadi satu komponen. Sekalian normalisasi `viewBox` ke `0 0 24 24` supaya optis setara dengan lucide.

Dan satu file untuk teks:

**Path: `client/src/lib/whatsapp-messages.ts`** (atau taruh di `contact.ts` juga)
Kumpulkan 5 prefill di satu tempat agar bahasanya bisa diseragamkan sekali jalan.

### 5.2 Cara paling bersih supaya footer & floating button pakai sumber yang sama

**Pola yang disarankan: satu custom hook + satu komponen ikon.**

```
client/src/lib/contact.ts                → data (nomor + builder URL, murni, tanpa React)
client/src/hooks/use-whatsapp.ts         → useWhatsApp(message?) → { href, number, display }
client/src/components/icons/whatsapp.tsx → <WhatsAppIcon />
```

Alur konsumsi:

- **Footer** (`layout.tsx:621`) → map `WHATSAPP_NUMBERS` untuk render link, pakai `<WhatsAppIcon />` bersama
- **Floating button** (`layout.tsx:578`) → `useWhatsApp(DEFAULT_MESSAGE)` untuk dapat `href`
- **5 CTA halaman lain** → hook yang sama dengan `message` masing-masing

Keduanya lalu membaca array yang sama; menambah/mengganti nomor cukup **satu baris di `contact.ts`**.

### 5.3 Tiga hal yang wajib diperhatikan saat implementasi random picker

**a) Jangan panggil `Math.random()` langsung saat render**

`const href = pickWhatsAppNumber()` di body komponen akan menghasilkan nomor **berbeda setiap re-render**. Karena `layout.tsx` membungkus semua halaman dan sudah punya state (`showBackTop`, dsb.) yang berubah saat scroll, href-nya akan berganti-ganti saat user scroll — user bisa lihat tooltip URL berubah, dan analytics jadi kacau.
→ Bungkus dengan `useMemo(..., [])` atau lazy `useState` initializer supaya stabil sepanjang umur komponen.

**b) Tentukan dulu: acak per-mount atau per-klik?**

- **Per-mount** (`useMemo`) — nomor tetap selama user di halaman. Lebih tenang secara UX, `href` bisa dilihat di status bar, klik-kanan "copy link" konsisten.
- **Per-klik** (`onClick` yang set `window.location`) — distribusi lebih merata, **tapi** merusak `href` statis: klik tengah / "buka di tab baru" / crawler akan tetap kena nomor default.

**Rekomendasi: per-mount dengan `useMemo`.** Distribusinya tetap merata across sesi, tanpa mengorbankan semantik `<a href>`.

**c) Konfirmasi dulu apakah random memang yang diinginkan**

Saat ini nomor #2 hanya muncul di footer. Kalau kedua nomor itu sebenarnya **beda peran** (mis. #1 Sales, #2 Technical Support), maka *random* justru salah — pengunjung bisa dilempar ke orang yang salah. Kalau memang beda peran, yang lebih tepat adalah **round-robin untuk load-balancing sales** atau **pemilihan eksplisit berdasarkan konteks halaman** (halaman produk → Sales, halaman support → Support).
→ Ini keputusan bisnis, perlu dikonfirmasi sebelum coding.

### 5.4 Urutan pengerjaan yang disarankan

| Tahap | Isi | Risiko |
|---|---|---|
| 1 | Konfirmasi nomor #1 (12 digit — typo?) & peran tiap nomor | — |
| 2 | Perluas `contact.ts` (array + helper). Tidak ada file lain yang diubah | Nol |
| 3 | Ekstrak `<WhatsAppIcon />` ke `components/icons/`, ganti 3 duplikat | Rendah, visual saja |
| 4 | Rapikan footer: alignment, spacing, label per nomor | Rendah |
| 5 | Rapikan floating button: ukuran ikon, sumbu sejajar, pulse ring | Rendah |
| 6 | Migrasi 6 hardcode → helper | Rendah |
| 7 | Seragamkan bahasa prefill (ikuti arah commit `3618c8a` → English) | Perlu keputusan bahasa |
| 8 | Ganti `MessageCircle` → `<WhatsAppIcon />` di 4 halaman | Rendah |

---

## RANGKUMAN ANALISA (Tahap 1)

- **Footer** ada di `client/src/components/layout.tsx:621-641` — 2 nomor sebagai **2 link `<a>` terpisah**, ditumpuk vertikal berbagi 1 ikon; nomornya **hardcode di komponen**, bukan dari config/env/DB.
- **Ikon WhatsApp** = **SVG inline** yang didefinisikan lokal di `layout.tsx:22-36` (`viewBox 0 0 32 32`, solid fill), **bukan** lucide-react dan bukan file gambar.
- **Footer terlihat berantakan** karena ikon WA *solid* berdampingan dengan `MapPin` & `Mail` lucide yang *outline*, `viewBox` 32 vs 24 bikin ukuran optis meleset, alignment tidak konsisten (2 baris `items-start`+`mt-1`, baris Email `items-center`), dan `gap-1` terlalu rapat sehingga 2 nomor terbaca menyatu tanpa label.
- **Floating button** di `layout.tsx:577-592`: ikon `w-7 h-7` dalam lingkaran `w-14 h-14` terasa kekecilan; pusatnya meleset **8px** dari tombol Back-to-Top (sama-sama `right-5` tapi beda ukuran); dan `animate-ping` (`:591`) memuai sampai ~104px sehingga **ring hijaunya melintas di belakang tombol Back-to-Top** yang mulai di 96px.
- **Kedua nomor**: `628153058666` (tampil `+62 815-3058-666`) dan `6281287801925` (tampil `+62 812-8780-1925`). Nomor pertama hanya **12 digit** sementara yang kedua 13 digit — perlu dicek apakah typo.
- **6 lokasi hardcode nomor**: `layout.tsx:579`, `:625`, `:633`; `support/Mikrotik.tsx:165`; `support/Vsol.tsx:166`; `vsol/public/StoreProductDetail.tsx:396` — semuanya kecuali footer link #2 memakai nomor primary saja.
- **Helper `client/src/lib/contact.ts` sudah ada** dan sudah dipakai 3 file (FiberHomePage, FiberHomeProductDetail, TrainingDetail), tapi footer & floating button **tidak meng-import-nya** — sentralisasi baru jalan 3 dari 9 titik.
- **Prefill text beda semua di 7 lokasi**: 3 Bahasa Indonesia, 2 Inggris, 2 tanpa prefill; 2 di antaranya di-encode manual (`%20`) sementara 3 pakai `encodeURIComponent` — sisa migrasi bahasa dari commit `3618c8a`.
- **Ikon juga terduplikasi 3 versi**: path sama persis di `layout.tsx:22` & `TrainingDetail.tsx:229`, path berbeda di `StoreProductDetail.tsx:401`, plus 4 halaman yang malah pakai `MessageCircle` lucide (balon chat generik, **bukan logo WhatsApp**).
- **Usulan**: perluas `client/src/lib/contact.ts` (jangan bikin file baru) dengan array nomor + `pickWhatsAppNumber()` + `buildWhatsAppUrl()`, ekstrak ikon ke `client/src/components/icons/whatsapp.tsx`, lalu footer & floating button konsumsi lewat hook `useWhatsApp()` — random **wajib** dibungkus `useMemo` agar href tidak berganti tiap re-render saat scroll.

---

# Tahap 2 — Implementasi

Commit: `fix: footer & floating WhatsApp pakai nomor acak + rapikan ikon`
Verifikasi: `npm run check` exit 0 · `npm run build` sukses · **tidak di-deploy**

## Yang diubah

### 1. `client/src/lib/contact.ts` — diperluas

| Ekspor | Status |
|---|---|
| `WhatsAppNumber` (type) | baru |
| `WHATSAPP_NUMBERS` | baru — array 2 nomor, sumber kebenaran tunggal |
| `pickWhatsAppNumber()` | baru — acak merata 50:50 |
| `buildWhatsAppUrl(message?)` | baru — `encodeURIComponent`, tidak ada `%20` manual |
| `DCS_WHATSAPP_PRIMARY` | **dipertahankan**, kini diturunkan dari `WHATSAPP_NUMBERS[0]` |
| `DCS_WHATSAPP_SECONDARY` | **dipertahankan**, diturunkan dari `WHATSAPP_NUMBERS[1]` |
| `DCS_EMAIL`, `DCS_EMAIL_RAW` | tidak disentuh |

3 pemakai lama (`FiberHomePage`, `FiberHomeProductDetail`, `TrainingDetail`) tidak diubah sama sekali dan tetap kompilasi — nilainya identik dengan sebelumnya.

### 2. `client/src/components/icons/whatsapp.tsx` — file baru

`WhatsAppIcon` dipindah apa adanya dari `layout.tsx:22-36` (path SVG tidak diubah), menerima prop `className`. Definisi lokal di `layout.tsx` dihapus, diganti import.

### 3. Footer

- 2 link nomor → **satu link "Chat on WhatsApp"**, href dari `buildWhatsAppUrl()`
- Ikon dibungkus slot `w-6 h-6` (gutter sama dengan `MapPin`/`Mail`), glyph solid dirender `w-5 h-5` supaya bobot optisnya setara ikon lucide yang outline
- `items-start` + `mt-1` → **`items-center`**, sama dengan baris Email. Aturannya sekarang konsisten: baris multi-baris (alamat) pakai `items-start`, baris satu-baris pakai `items-center`
- `space-y-8` → **`space-y-6`**, karena blok WA turun dari 60px jadi 28px

### 4. Floating button

| Masalah | Perbaikan |
|---|---|
| Sumbu meleset 8px dari Back-to-Top | Back-to-Top `right-5` → **`right-7`**; kedua pusat kini sama-sama 48px dari kanan |
| Ring `animate-ping` mencapai ~104px, menabrak Back-to-Top di 96px | `inset-0` → **`inset-2`**; basis ring 40px, puncak muai berhenti di **~88px** |
| Ring menimpa glyph ikon (span ada *setelah* ikon di DOM) | Ring dipindah **sebelum** ikon, ikon diberi `relative` |
| Ikon kekecilan (`w-7` → optis ~23px di lingkaran 56px) | **`w-9 h-9`** → optis ~29px, rasio isi 52% |

## Catatan keputusan

**Random per-klik + `useMemo` — cara keduanya dipenuhi.**
Dua syarat ini sebenarnya bertentangan (`useMemo` = stabil per-mount). Solusinya: `href` di-memo sekali saat mount supaya tidak berubah saat scroll, lalu `onClick` menulis ulang `e.currentTarget.href` dengan hasil `buildWhatsAppUrl()` yang baru tepat sebelum navigasi default jalan.

Konsekuensi yang perlu diketahui: **klik tengah / "buka di tab baru"** tidak memicu `onClick`, jadi memakai nomor hasil memo. Klik biasa dan Ctrl+klik dapat nomor acak yang segar.

**Prefill footer** memakai konstanta yang sama dengan floating button (`WA_DEFAULT_MESSAGE` = "Halo DCS, saya ingin bertanya tentang produk."). Footer sebelumnya tidak punya prefill dan Anda tidak menentukan teks barunya — memakai satu konstanta bersama menghindari mengarang copy baru, sekaligus menjaga satu sumber. Penyeragaman bahasa prefill tetap jadi commit terpisah.

**Hook `useWhatsApp()` tidak dibuat.** Di usulan Tahap 1 saya menyebutnya, tapi untuk saat ini hanya `layout.tsx` yang butuh, jadi memo diletakkan langsung di komponen. Hook baru layak dibuat kalau nanti 5 CTA halaman lain ikut dimigrasi.

## Sisa hardcode nomor WA

**3 lokasi tersisa** (turun dari 6 — semua di `layout.tsx` sudah bersih):

| File:baris | Alasan tidak disentuh |
|---|---|
| `client/src/pages/support/Mikrotik.tsx:165` | dikecualikan, commit terpisah |
| `client/src/pages/support/Vsol.tsx:166` | dikecualikan, commit terpisah |
| `client/src/vsol/public/StoreProductDetail.tsx:396` | dikecualikan, commit terpisah |

Nomor di `client/src/lib/contact.ts:14-15` tidak dihitung — itu sumber kebenarannya.

Belum tersentuh juga (sesuai lingkup): 4 halaman yang memakai `MessageCircle` lucide, duplikat SVG di `TrainingDetail.tsx:229` dan `StoreProductDetail.tsx:401`, serta penyeragaman bahasa prefill.

---

## RANGKUMAN TAHAP 2

- `client/src/lib/contact.ts` diperluas dengan `WHATSAPP_NUMBERS`, `pickWhatsAppNumber()`, dan `buildWhatsAppUrl()`; `DCS_WHATSAPP_PRIMARY`/`SECONDARY` dipertahankan sehingga 3 pemakai lama tidak perlu diubah.
- Ikon diekstrak ke `client/src/components/icons/whatsapp.tsx` (path SVG tidak diubah), definisi lokal di `layout.tsx` dihapus dan diganti import.
- Footer: 2 link nomor jadi **satu link "Chat on WhatsApp"** dengan nomor acak dari `buildWhatsAppUrl()`.
- Ikon footer kini di slot `w-6 h-6` dengan glyph `w-5 h-5` — gutter sama dengan `MapPin`/`Mail`, tapi bobot optisnya seimbang karena glyph WA solid sedangkan lucide outline.
- Alignment footer dibuat konsisten: baris alamat (2 baris) tetap `items-start`, baris WA dan Email sama-sama `items-center`; `space-y-8` turun ke `space-y-6`.
- Floating button: sumbu disejajarkan dengan menggeser Back-to-Top `right-5` → `right-7`, kedua pusat kini 48px dari kanan.
- Pulse ring `inset-0` → `inset-2` sehingga puncak muainya berhenti di ~88px, tidak lagi menabrak Back-to-Top yang mulai di 96px.
- Ring juga dipindah ke **sebelum** ikon (dulu menimpa glyph putihnya), dan ikon dibesarkan `w-7` → `w-9` agar proporsional dalam lingkaran 56px.
- Random per-klik dipenuhi lewat `onClick` yang menulis ulang `href`, dengan `useMemo` sebagai href dasar — catatan: klik tengah / buka-di-tab-baru memakai nomor hasil memo, bukan acak baru.
- **Sisa hardcode nomor: 3 lokasi** (Mikrotik.tsx:165, Vsol.tsx:166, StoreProductDetail.tsx:396), turun dari 6; `npm run check` exit 0 dan `npm run build` sukses, tidak di-deploy.

---

# Tahap 3 — Ganti path SVG dengan logo resmi

Di-**amend** ke commit yang sama (`fix: footer & floating WhatsApp pakai nomor acak + rapikan ikon`), bukan commit baru.

## Masalah

Ekstraksi di Tahap 2 hanya memindahkan file — path SVG-nya tetap yang buatan tangan. Pengukuran numerik membuktikan keluhan visualnya:

| Metrik | Path lama (buatan tangan) | Path baru (Simple Icons) |
|---|---|---|
| viewBox | `0 0 32 32` | **`0 0 24 24`** |
| Bounding box X | 3.000 → 29.000 | **0.057 → 23.943** |
| Bounding box Y | 3.000 → 29.000 | **0.000 → 24.000** |
| Isi kanvas | 26/32 = **81%** | **99.5%** (praktis penuh) |
| Simetri bbox | ya | ya (margin 0.057 kiri **dan** kanan) |
| Titik berat area, offset X | **+2.788** (8.7% meleset) | **−0.703** (2.9%) |
| Titik berat area, offset Y | **+4.464** (14.0% meleset) | **+0.696** (2.9%) |

Offset titik berat **8.7% dan 14%** itulah penyebab "gagangnya kegedean dan tidak center". Path baru menurunkannya ke 2.9% di kedua sumbu.

## Sumber path

Simple Icons (slug `whatsapp`, lisensi CC0), **tanpa install dependency baru** — path resminya ternyata sudah ada di repo di `client/src/vsol/public/StoreProductDetail.tsx:402` pada `viewBox="0 0 24 24"`. Disalin dari sana lewat script (bukan diketik ulang) dan diverifikasi `cmp` byte-per-byte identik dengan sumbernya.

Paket `simple-icons`/`react-icons` tidak ada di `node_modules`. `@fortawesome/fontawesome-free` ada dan punya `whatsapp.svg`, tapi grid-nya 448×512 — tidak dipakai karena target viewBox harus 24.

## Verifikasi visual (terukur, bukan asumsi)

Bounding box dihitung dengan parser path yang **sadar arc-flag** — pada `a9.87 9.87 0 01-5.031-1.378`, token `01` itu dua flag (largeArc=0, sweep=1), bukan angka 1; regex angka naif salah baca di sini dan menghasilkan bbox ngawur.

- **Tidak kepotong** — semua koordinat dalam rentang 0..24, tidak ada yang keluar kanvas
- **Gagang telepon utuh** — 3 subpath terdeteksi (gagang, cincin gelembung, ekor), sama dengan struktur Simple Icons
- **Center** — bbox simetris sempurna, jadi `items-center justify-center` sudah center tepat

## Penentuan ukuran (berbasis ukuran lucide)

Diukur dari `node_modules/lucide-react`, dengan `stroke-width: 2` diperhitungkan:

| Ikon | Bentangan pada kotak 24px |
|---|---|
| `MapPin` | ~18 × 21.8 |
| `Mail` | ~22 × 18 |
| `WhatsAppIcon` (baru) | 23.9 × 24.0 (isi penuh) |

- **Footer** → tetap `w-5 h-5` (20px) di dalam slot `w-6 h-6`. Kelasnya tidak berubah, tapi hasilnya berubah: dulu 20px × 81% = **16.2px**, sekarang **19.9px** — kini sepadan dengan bentangan lucide ~18-22px. Inilah kenapa dulu terlihat kecil.
- **Tombol floating** → `w-9 h-9` menjadi **`w-8 h-8`**. Dengan glyph mengisi penuh, `w-9` akan jadi 35.8px = **64%** diameter (di atas target); `w-8` = 31.9px = **57%**, pas di rentang 55-60%.

## Catatan: kenapa tidak ada nudge optis manual

Titik berat area memang masih 2.9% ke kiri-bawah, karena gagang telepon menempati sudut itu — bawaan bentuk logonya. Saya **tidak** menambahkan `translate` untuk mengoreksinya:

- Bbox-nya simetris sempurna, jadi centering biasa sudah tepat secara geometris
- Koreksi 2.9% pada glyph 32px cuma **0.9px** — di bawah ambang terlihat pada layar retina, dan malah berisiko membuat glyph blur
- Artwork resmi WhatsApp juga menempatkan glyph berdasarkan bbox; menggesernya justru membuat logonya terlihat menyimpang dari yang dikenal orang

Kalau Anda tetap ingin nudge-nya, itu satu baris `translate-x-[0.5px] -translate-y-[0.5px]` — tinggal bilang.

## Temuan di luar lingkup

Path lama **masih ikut ter-bundle**: `client/src/pages/training/TrainingDetail.tsx:229-235` punya salinan `WhatsAppIcon` sendiri dengan path buatan tangan yang sama (`viewBox 32`, `w-4 h-4`). Halaman detail training jadi masih menampilkan glyph yang meleset itu. Tidak disentuh karena di luar lingkup yang ditetapkan — layak jadi commit lanjutan bersama `StoreProductDetail.tsx:401`.

---

## RANGKUMAN TAHAP 3

- Path SVG diganti dengan logo resmi **Simple Icons** (CC0), `viewBox` `0 0 32 32` → **`0 0 24 24`**, konsisten dengan grid lucide-react.
- **Tanpa dependency baru** — path resminya sudah ada di repo (`StoreProductDetail.tsx:402`), disalin lewat script dan diverifikasi `cmp` identik byte-per-byte.
- Pengukuran membuktikan keluhannya: titik berat path lama meleset **8.7% (X) dan 14% (Y)**; path baru hanya **2.9%** di kedua sumbu.
- Path lama hanya mengisi **81%** kanvas, path baru **99.5%** — itu sebabnya ikon dulu terlihat kecil dan gagangnya tidak proporsional.
- Bbox terverifikasi **tidak kepotong** (semua koordinat 0..24) dan **simetris** (margin 0.057 kiri dan kanan), jadi centering biasa sudah tepat.
- Bounding box dihitung dengan parser **sadar arc-flag** — `01` pada `a9.87 9.87 0 01-...` itu dua flag, bukan angka; regex naif menghasilkan bbox salah.
- Footer tetap `w-5 h-5`, tapi hasil render naik dari **16.2px → 19.9px**, kini sepadan dengan bentangan `MapPin` (~18×21.8) dan `Mail` (~22×18).
- Tombol floating `w-9` → **`w-8`**: 31.9px di lingkaran 56px = **57% diameter**, pas di target 55-60% (`w-9` akan jadi 64%).
- Tidak ada nudge `translate` manual — koreksi 2.9% cuma 0.9px pada glyph 32px, di bawah ambang terlihat dan berisiko bikin blur.
- ⚠️ Path lama **masih ter-bundle** lewat duplikat di `TrainingDetail.tsx:229` (di luar lingkup); `npm run check` exit 0, `npm run build` sukses, di-amend ke commit yang sama, tidak di-deploy. → **diselesaikan di Tahap 4.**

---

# Tahap 4 — Bersihkan sisa duplikat ikon

Di-**amend** ke commit yang sama. Menutup temuan terakhir Tahap 3.

## Yang dibereskan

### `client/src/pages/training/TrainingDetail.tsx`

Definisi lokal `WhatsAppIcon` (baris 229-235) **dihapus**, diganti import komponen bersama. Ini yang membuat path buatan tangan yang meleset masih ikut ter-bundle setelah Tahap 3.

Komponen lokalnya tidak menerima prop apa pun — ukurannya di-hardcode di dalam (`w-4 h-4`), dan dipanggil sebagai `<WhatsAppIcon />`. Setelah ganti, ukuran diberikan lewat `className`.

**Penyesuaian ukuran (diukur, bukan diasumsikan):**

| Varian | Kotak | Isi kanvas | Bentangan render | Selisih vs lama |
|---|---|---|---|---|
| Lama, `w-4` | 16px | 81.25% | **13.0px** | — |
| Baru, `w-4` | 16px | 99.5% | 15.9px | **+2.9px (+22%)** |
| Baru, `w-3.5` | 14px | 99.5% | **13.9px** | **+0.93px (+7%)** |
| Baru, `w-3` | 12px | 99.5% | 11.9px | −1.06px (−8%) |

Dipilih **`w-3.5 h-3.5`**: selisihnya paling kecil, dan masih di dalam rentang bentangan ikon lucide pada `w-4` (12–14.7px) yang jadi konvensi tombol di file itu. Memakai `w-4` akan membuat ikonnya mendadak 22% lebih besar dari sebelumnya.

### `client/src/vsol/public/StoreProductDetail.tsx`

SVG inline (baris 401-403) diganti `<WhatsAppIcon className="w-4 h-4" />`.

Path-nya diverifikasi `cmp` **identik** dengan komponen bersama, viewBox sama-sama 24, kelas ukuran sama, `fill="currentColor"` sama → **nol perubahan piksel**, murni refactor.

Warna, posisi, dan layout sekitarnya tidak disentuh di kedua file.

## Verifikasi

| Cek | Hasil |
|---|---|
| SVG WhatsApp inline di `client/` selain komponen bersama | **0** |
| `viewBox="0 0 32 32"` tersisa di `client/` | **0** |
| Definisi `function WhatsAppIcon` di codebase | **1** (hanya komponen bersama) |
| Konsumen komponen bersama | 3 (`layout.tsx`, `TrainingDetail.tsx`, `StoreProductDetail.tsx`) |
| Path lama di bundle produksi | **hilang total** |
| Path resmi di bundle produksi | muncul **1×** (dedupe berhasil) |

`npm run check` exit 0 · `npm run build` sukses.

## Yang masih tersisa (sesuai lingkup, commit terpisah)

- **3 nomor hardcode**: `Mikrotik.tsx:165`, `Vsol.tsx:166`, `StoreProductDetail.tsx:396`
- **4 halaman pakai `MessageCircle` lucide** (balon chat generik, bukan logo WhatsApp): `FiberHomePage:291`, `FiberHomeProductDetail:255`, `Mikrotik:173`, `Vsol:174` — sekarang komponen bersamanya sudah siap dipakai
- **Penyeragaman bahasa prefill** (3 Indonesia, 2 Inggris, 2 tanpa prefill)

---

## RANGKUMAN TAHAP 4

- Dua salinan SVG WhatsApp terakhir dihapus; kini hanya ada **satu** definisi `WhatsAppIcon` di seluruh codebase.
- `TrainingDetail.tsx:229-235` — definisi lokal dengan path buatan tangan yang meleset dihapus, diganti import komponen bersama.
- `StoreProductDetail.tsx:401-403` — SVG inline diganti komponen bersama; path terverifikasi `cmp` identik, jadi **nol perubahan piksel**.
- Ukuran TrainingDetail disesuaikan `w-4` → **`w-3.5`** karena glyph baru mengisi penuh kanvas sedangkan yang lama cuma 81%.
- Perhitungannya: lama 16px × 0.8125 = 13.0px; `w-3.5` baru 14px × 0.995 = **13.9px** (+7%), sedangkan `w-4` akan jadi 15.9px (**+22%**, mendadak kebesaran).
- `w-3.5` juga masih di dalam rentang bentangan ikon lucide pada `w-4` (12–14.7px), konvensi tombol di file itu.
- Grep verifikasi: **0** SVG WhatsApp inline tersisa di `client/`, **0** `viewBox="0 0 32 32"`, **1** definisi komponen, **3** konsumen.
- Bundle produksi: path lama **hilang total**, path resmi muncul tepat **1×** — dedupe benar-benar terjadi, bukan cuma di level sumber.
- Warna, posisi, dan layout di sekitar kedua ikon tidak disentuh sama sekali.
- `npm run check` exit 0, `npm run build` sukses, di-amend ke commit yang sama, tidak di-deploy. Sisa: 3 nomor hardcode, 4 halaman `MessageCircle`, dan penyeragaman bahasa prefill.

---

# TOPIK BARU — Analisa Video Hero Homepage

> **Analisa saja. Tidak ada kode yang diubah.** Hanya file ini yang ditulis.

## ⚠️ Koreksi premis: hero sekarang BUKAN video self-hosted

Pertanyaannya mengasumsikan ada elemen `<video>` dengan file di suatu path. Kenyataannya berbeda, dan ini mengubah jawaban untuk bagian 1, 2, dan 4.

**`client/src/pages/homepage/home-utama.tsx:103-108`** — hero memakai **iframe YouTube**:

```
<iframe
  src="https://www.youtube.com/embed/9HaU8NjH7bI?autoplay=1&mute=1&rel=0&playsinline=1"
  className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-80 dark:opacity-60 ..."
  allow="autoplay; encrypted-media"
  title="DCS Master Hero Video"
/>
```

Konsekuensinya: **tidak ada** `<video>`, **tidak ada** `<source>`, **tidak ada** `poster`, **tidak ada** atribut `autoplay/loop/muted/playsInline/preload` versi HTML5, dan **tidak ada** fallback error.

| Yang ditanyakan | Kondisi sebenarnya |
|---|---|
| File & baris hero | `home-utama.tsx:98-110` (section), iframe di `:103-108` |
| Path video | Tidak ada file lokal — di-stream YouTube, ID `9HaU8NjH7bI` |
| Ukuran file | Di luar kendali kita (YouTube adaptif) |
| Format, jumlah `<source>` | Tidak berlaku — bukan elemen `<video>` |
| Poster | Tidak ada. YouTube memakai thumbnail-nya sendiri |
| `autoplay/loop/muted/playsInline/preload` | Lewat parameter URL: `autoplay=1`, `mute=1`, `playsinline=1`. **`loop` TIDAK ADA** |
| Fallback error | Tidak ada. Kalau YouTube diblokir/gagal, hero jadi gradien kosong |

### 🐛 Bug yang ketahuan saat menelusuri

**Hero video hanya jalan sekali, tidak berulang.** Loop di embed YouTube butuh `loop=1&playlist=9HaU8NjH7bI` (parameter `playlist` wajib, walau videonya sendiri). URL sekarang tidak punya keduanya, jadi setelah ~durasi video, latar hero berhenti dan memunculkan overlay akhir YouTube. Ini terpisah dari rencana 3 video — perbaikannya satu baris kalau mau ditambal duluan.

### File video yatim

**`client/public/video/VP-efg-1.mp4`** — 1,91 MB, **ter-track di git**, tapi **nol referensi** di seluruh `client/src/`. Sisa pendekatan lama sebelum pindah ke YouTube. Tetap ikut tersalin ke `dist/public/video/` dan ikut ter-upload tiap deploy.

Ada juga 3 referensi rusak di `client/src/mikrotik/landing/data.ts:84,90,96` — `/videos/switches.mp4`, `/videos/wireless-systems.mp4`, `/videos/wireless-home-office.mp4`. **Ketiganya tidak ada** di `client/public/`, dan field `video` itu tampaknya tidak pernah dirender.

---

## 2. Lokasi penyimpanan & alur deploy

**Ya, premis Anda benar — dan terkonfirmasi dari konfigurasi, bukan asumsi.**

`vite.config.ts:44` menetapkan `root: client`, jadi `publicDir` default Vite adalah `client/public/`. Seluruh isinya disalin apa adanya ke `dist/public/` (`vite.config.ts:46`). Terbukti: `dist/public/video/VP-efg-1.mp4` memang ada setelah build.

`PROJECT_SUMMARY.md:330-338` mendokumentasikan prosedur deploy:

> 2. Upload **replace folder `dist/`** via WinSCP.
>
> **JANGAN ditimpa saat upload:**
> - `public/uploads/` (di ROOT server, bukan di `dist/`) — semua foto produk hasil upload admin.

Jadi: `client/public/` → ikut repo, ikut bundle, **ikut ter-upload ulang tiap deploy**. Sedangkan `public/uploads/` ada di root server, dilayani `server/middleware/staticUploads.ts` dari `process.cwd()/public/uploads`, dan **eksplisit dikecualikan dari deploy**.

### Angka yang menentukan

| Metrik | Nilai |
|---|---|
| `client/public/` | **412 MB** |
| `dist/public/` (payload tiap deploy WinSCP) | **414 MB**, 3.336 file |
| `.git/` | **3,7 GB** |

Folder deploy sudah 414 MB. Menambah 3 video ke `client/public/` menambah beban itu **dan** menambah `.git` yang sudah 3,7 GB — dan aset biner di git tidak pernah bisa dikecilkan lagi tanpa menulis ulang history.

### .gitignore

Tidak ada aturan apa pun untuk `*.mp4`/`*.webm`. Yang ada hanya `public/uploads/firmware/`. Artinya **video di `client/public/` otomatis ter-track git** — persis yang terjadi pada `VP-efg-1.mp4`.

---

## 3. Usulan lokasi — Opsi A vs Opsi B

| | **A: `client/public/video/`** | **B: `public/uploads/hero/` di server** |
|---|---|---|
| Masuk repo | Ya | Tidak |
| Ukuran `.git` | +3 video, permanen di history | Tidak berubah |
| Payload deploy | +3 video tiap upload | Tidak berubah |
| Upload video | Otomatis ikut deploy | Manual sekali via WinSCP |
| Ganti video | Perlu commit + full deploy | Cukup ganti file di server |
| Developer baru | Dapat videonya | **Tidak dapat** — hero kosong saat dev |
| Risiko tertimpa deploy | Tidak | Tidak (eksplisit dikecualikan) |
| Rollback via git | Bisa | Tidak |

### ✅ Rekomendasi: **Opsi B** (`public/uploads/hero/`)

Alasannya, berdasar angka di atas:

1. **Payload deploy sudah 414 MB.** Setiap deploy sudah mengirim ulang 3.336 file lewat WinSCP. Menambah 3 video ke situ menambah waktu deploy untuk file yang praktis tidak pernah berubah.
2. **`.git` sudah 3,7 GB.** Aset biner di git bersifat permanen. Menambah video ke repo memperparah masalah yang sudah ada.
3. **Video hero itu konten, bukan kode.** Polanya persis seperti foto produk yang sudah dipakai — diunggah admin, disimpan di `public/uploads/`, dikecualikan dari deploy. Menaruh video hero di sana **konsisten dengan arsitektur yang sudah berjalan**, bukan pengecualian baru.
4. **Ganti video tanpa deploy.** Marketing bisa tukar video hero dengan mengganti file, tanpa perlu build + upload 414 MB.

**Kelemahan Opsi B dan cara menutupinya:** developer baru tidak punya videonya. Ini nyata, tapi bisa ditutup dengan fallback poster (lihat bagian 5) — kalau video 404, hero menampilkan poster statis dan tetap terlihat benar saat development. Poster-nya kecil, jadi **poster boleh ikut repo di `client/public/`** meski videonya tidak. Kombinasi ini memberi keduanya: repo tetap ramping, dev tetap dapat hero yang tampil benar.

Ada satu hal yang perlu Anda putuskan: apakah video hero perlu ikut ter-rollback saat `git revert`. Kalau ya, Opsi A lebih tepat meski lebih mahal. Kalau tidak (dan untuk aset marketing biasanya tidak), Opsi B jelas lebih baik.

---

## 4. Dampak CSP

**Self-hosted: AMAN — dikonfirmasi.**

`server/middleware/csp.ts:59` sudah menetapkan `"media-src": "'self'"`, dengan komentar yang menyebut kasus ini persis: *"Video produk yang diunggah, dilayani dari /uploads."* Video hero dari `/uploads/hero/` maupun `/video/` sama-sama origin sendiri, jadi lolos tanpa perubahan apa pun.

Malah, pindah dari iframe YouTube ke `<video>` self-hosted **mengurangi** ketergantungan eksternal. `frame-src` (`csp.ts:71-72`) tetap perlu YouTube karena masih ada iframe lain di situs, jadi tidak bisa dicabut — tapi homepage berhenti memuat pihak ketiga.

### Kalau nanti pakai CDN eksternal

| Direktif | Kapan perlu ditambah |
|---|---|
| `media-src` | **Wajib.** Host file video, mis. `media-src 'self' https://cdn.example.com` |
| `img-src` | Kalau **poster** juga dari CDN (sekarang `'self' data: blob:`) |
| `connect-src` | Kalau streaming adaptif (HLS/DASH) — segmennya diambil lewat `fetch`/XHR, bukan `media-src` |
| `script-src` | Kalau pakai library player dari CDN (mis. hls.js, video.js) |

⚠️ **Jebakan redirect.** File CSP Anda sendiri sudah mendokumentasikan pelajaran ini di `csp.ts:61-65`: browser mengevaluasi **setiap URL dalam rantai redirect**, dan laporan pelanggarannya menyebut URL **sebelum** redirect — yaitu host yang justru sudah diizinkan. Kalau CDN video Anda membalas 302 ke host lain (umum pada CDN dengan edge node), **host tujuan juga harus didaftarkan**, bukan cuma host awal. Gejalanya: video diam-diam gagal load sementara laporan CSP terlihat menunjuk host yang sudah di-whitelist.

---

## 5. Implementasi random (usulan, belum diterapkan)

### Supaya browser hanya mengunduh 1 video

Kuncinya: render **satu** elemen `<video>` dengan **satu** `src`, ditentukan sebelum render pertama.

⚠️ **Jangan pakai beberapa `<source>` untuk pengacakan.** `<source>` itu untuk fallback *format* — browser memilih yang pertama bisa diputar, bukan acak. Tiga `<source>` mp4 = browser selalu ambil yang pertama, dan pengacakan tidak terjadi sama sekali.

### `useState` lazy initializer, bukan `useMemo`

Ini beda dari yang saya pakai untuk WhatsApp, dan alasannya penting:

```
const [hero] = useState(() => HERO_VIDEOS[Math.floor(Math.random() * HERO_VIDEOS.length)]);
```

`useMemo` secara dokumentasi React adalah **petunjuk performa** — React boleh membuang cache-nya dan menghitung ulang. Untuk WhatsApp itu tidak masalah (href berubah pun tidak terlihat). Untuk video, recompute berarti `src` berubah → **browser membatalkan unduhan dan mulai unduh video lain**, membuang bandwidth yang sudah terpakai. `useState` dengan lazy initializer dijamin hanya dievaluasi sekali seumur hidup komponen.

Jadi: **`useState(() => ...)`**, bukan `useMemo(..., [])`.

### Kalau video terpilih gagal load

Rekomendasi: **fallback berjenjang**, jangan langsung menyerah ke poster.

1. `onError` pada `<video>` → coba video berikutnya yang belum dicoba (simpan indeks yang sudah gagal di `useRef`)
2. Kalau ketiganya gagal → sembunyikan `<video>`, tampilkan poster sebagai `<img>` atau `background-image`
3. Hero tetap terbaca karena teksnya sudah punya gradien gelap sendiri (`home-utama.tsx:101`) dan `drop-shadow` di `:119`

Ini penting untuk Opsi B: developer baru yang tidak punya file videonya akan otomatis jatuh ke poster, bukan melihat hero rusak.

### Poster: 3 atau 1?

**Rekomendasi: 3 poster, satu per video.**

Poster tampil selama video belum bisa diputar. Kalau posternya cuma 1 sementara videonya 3, dua dari tiga kali pemuatan akan menampilkan gambar yang **tidak cocok** dengan video yang menyusul — terlihat sebagai lompatan visual saat video mulai jalan.

Poster idealnya frame pertama dari videonya sendiri, jadi transisinya tidak terlihat. Biayanya kecil: ~50-150 KB per poster sebagai WebP/JPEG. Pasangkan dalam satu struktur data supaya tidak bisa ketukar:

```
{ src: "/uploads/hero/hero-1.mp4", poster: "/images/hero/hero-1.webp" }
```

Poster boleh tetap di `client/public/` (ikut repo) meski videonya di server — ini yang menutup kelemahan Opsi B.

---

## 6. Rekomendasi spesifikasi video

### Patokan: video yang ada sekarang

Diukur langsung dari atom MP4 `client/public/video/VP-efg-1.mp4` (`ffprobe` tidak tersedia, jadi header-nya diparse manual):

| | Nilai |
|---|---|
| Ukuran | 2.000.672 byte (**1,91 MB**) |
| Durasi | **15,04 detik** |
| Resolusi | **1280×720** |
| Codec | **avc1** (H.264) + **mp4a** (AAC) |
| Bitrate total | **1.064 kbps** (1,06 Mbps) |
| Beban | 0,127 MB per detik |

Catatan: file ini punya **track audio** (`mp4a`). Untuk hero yang selalu di-mute, itu murni beban — bisa dibuang.

### Rekomendasi

| Parameter | Rekomendasi | Alasan |
|---|---|---|
| **Resolusi** | **1280×720** (pertahankan) | Hero tertutup gradien gelap dan `opacity-80`/`60` (`home-utama.tsx:101,105`). 1080p menggandakan byte untuk detail yang memang disembunyikan |
| **Durasi** | **8-12 detik**, loop mulus | Cukup untuk terasa hidup, cukup pendek untuk ringan. Usahakan frame pertama ≈ frame terakhir agar sambungan loop tak terlihat |
| **Ukuran maks** | **≤1,5 MB per video** | Di bawah patokan 1,91 MB. Dengan audio dibuang + durasi 10 detik, ini longgar |
| **Bitrate video** | **900-1.200 kbps** | Sekitar patokan (1.064 kbps termasuk audio; videonya sendiri ~930 kbps) |
| **Container/codec** | **MP4 + H.264 High profile**, `yuv420p` | Sama dengan yang sudah ada; dukungan browser praktis universal |
| **Audio** | **Dibuang total** (`-an`) | Hero selalu mute. Menghemat ~10-15% |
| **faststart** | **Wajib** | Memindahkan atom `moov` ke depan supaya pemutaran mulai sebelum unduhan selesai. Tanpa ini video baru jalan setelah 100% terunduh |

### Perlu versi WebM juga?

**Tidak — lewati saja.** H.264/MP4 didukung praktis semua browser yang relevan, jadi WebM tidak menambah jangkauan apa pun. Yang ditawarkannya cuma penghematan ukuran ~20-30% (VP9), dengan biaya: dua kali jumlah file, dua kali proses encode, dan dua kali kerja saat mengganti video.

Untuk 3 video @1,5 MB yang **hanya 1 yang diunduh per kunjungan**, penghematan itu tidak sepadan dengan kerumitannya. Kalau nanti berubah pikiran, WebM ditaruh sebagai `<source>` **pertama** (browser ambil yang pertama cocok), MP4 sebagai cadangan — dan itu tetap kompatibel dengan pengacakan, selama pasangan webm+mp4-nya untuk video yang **sama**.

### Perintah encode siap pakai

```
ffmpeg -i input.mp4 -t 10 -an \
  -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -b:v 1000k -maxrate 1200k -bufsize 2000k \
  -movflags +faststart hero-1.mp4

ffmpeg -i hero-1.mp4 -vframes 1 -q:v 80 hero-1.webp
```

Baris kedua mengambil frame pertama sebagai poster, jadi poster dan video otomatis cocok.

---

## RANGKUMAN ANALISA VIDEO HERO

- ⚠️ **Premisnya perlu dikoreksi**: hero sekarang **bukan `<video>` self-hosted**, melainkan **iframe YouTube** di `home-utama.tsx:103-108` (ID `9HaU8NjH7bI`).
- Karena iframe, **tidak ada** `<source>`, poster, `preload`, maupun fallback error — dan atribut video diatur lewat parameter URL.
- 🐛 **Bug ketahuan**: URL embed tidak punya `loop=1&playlist=...`, jadi video hero **cuma jalan sekali** lalu berhenti dengan overlay YouTube.
- **`client/public/video/VP-efg-1.mp4`** (1,91 MB, ter-track git) **yatim** — nol referensi, tapi tetap ikut ter-bundle dan ter-upload tiap deploy.
- Benar bahwa `client/public/` ikut ke `dist/` (`vite.config.ts:44,46`) dan ikut ter-upload; `public/uploads/` di root server **eksplisit dikecualikan** dari deploy (`PROJECT_SUMMARY.md:334`).
- Tidak ada aturan `.gitignore` untuk video sama sekali — file video di `client/public/` otomatis masuk git.
- **Rekomendasi Opsi B** (`public/uploads/hero/`): payload deploy sudah **414 MB** dan `.git` sudah **3,7 GB**; video hero itu konten, dan polanya sama dengan foto produk yang sudah berjalan.
- Kelemahan Opsi B (developer baru tak punya video) ditutup dengan **poster tetap di repo** + fallback berjenjang, jadi hero tetap tampil benar saat dev.
- **CSP aman** — `media-src 'self'` (`csp.ts:59`) sudah mencakup video self-hosted. Kalau pakai CDN: tambah `media-src`, plus `img-src`/`connect-src`/`script-src` sesuai pemakaian, dan **daftarkan juga host tujuan redirect** (jebakan yang sudah didokumentasikan di `csp.ts:61-65`).
- Pakai **`useState(() => ...)`, bukan `useMemo`** — React boleh membuang cache `useMemo`, dan itu akan membatalkan unduhan video di tengah jalan.
- Patokan video sekarang: **1280×720, 15,04 detik, H.264+AAC, 1.064 kbps, 1,91 MB**. Rekomendasi: 720p, 8-12 detik, **≤1,5 MB**, audio dibuang, `+faststart`, **tanpa WebM**, dan **3 poster** (satu per video).

---

# Implementasi — Hero Video Self-Hosted 3 Video Acak

Commit baru: `feat: hero video self-hosted dengan 3 video acak` (bukan amend).

## Yang diubah

**`client/src/pages/homepage/home-utama.tsx`** — iframe YouTube di `:103-108` diganti elemen `<video>`.

### Struktur data (`:17-32`)

Video dan poster dipasangkan dalam satu objek supaya tidak bisa ketukar:

```
type HeroClip = { video: string; poster: string };

const HERO_CLIPS: readonly HeroClip[] = [
  { video: "/uploads/hero/hero-1.mp4", poster: "/images/hero/hero-1.webp" },
  { video: "/uploads/hero/hero-2.mp4", poster: "/images/hero/hero-2.webp" },
  { video: "/uploads/hero/hero-3.mp4", poster: "/images/hero/hero-3.webp" },
];
```

### Pemilihan acak (`:52-62`)

`useState` dengan lazy initializer, **bukan** `useMemo` — sesuai analisa: `useMemo` hanya petunjuk performa dan boleh dibuang React, dan kalau itu terjadi `src` berubah di tengah jalan sehingga browser membatalkan unduhan yang sudah berjalan.

Satu elemen `<video>` dengan satu `src`. **Tidak** memakai beberapa `<source>` — itu mekanisme fallback format, browser selalu ambil yang pertama cocok, jadi tidak akan mengacak.

Random di initializer aman karena murni menghitung nilai tanpa efek samping. Ini berbeda dari `noticeShownThisPageLoad` di file yang sama, yang **menulis** variabel module-scope sehingga harus di effect (StrictMode memanggil initializer dua kali).

### Fallback berjenjang (`:64-76`, `:149-178`)

1. `onError` → catat indeks gagal di `useRef<Set<number>>`, lompat ke video berikutnya yang belum dicoba
2. Ketiganya gagal → `heroExhausted`, `<video>` diganti `<div>` dengan poster sebagai `background-image`
3. Teks hero tetap terbaca karena gradien `:101` dan `drop-shadow` `:119` tidak diubah

`useRef` dipilih untuk daftar gagal karena hanya dibaca di dalam handler dan tidak boleh memicu render sendiri.

### Dua detail yang menentukan benar-tidaknya

| Detail | Kenapa wajib |
|---|---|
| `key={heroClip.video}` | Tanpa ini React memakai ulang elemen `<video>` yang sama dan hanya menukar `src` — poster tidak ikut diperbarui dan event `error` tidak selalu terpicu lagi untuk sumber berikutnya, sehingga rantai fallback macet di video kedua |
| `object-cover` | Default `<video>` adalah `object-fit: contain`. Tanpa ini video letterbox di dalam kotak 16:9 pembungkusnya — muncul bilah hitam yang tidak ada pada iframe |

### Yang dipertahankan

`opacity-80 dark:opacity-60`, `transition-opacity duration-500`, `pointer-events-none`, gradien overlay `:101`, `drop-shadow` teks `:119`, dan pembungkus 16:9 `min-w-[177.77vh]` — semuanya tidak diubah.

`aria-hidden="true"` ditambahkan pada video dan poster: keduanya murni dekoratif, dan iframe lama sebelumnya punya `title` yang membuatnya terbaca screen reader tanpa alasan.

## File yatim dihapus

`client/public/video/VP-efg-1.mp4` (1,91 MB) dihapus via `git rm` setelah dikonfirmasi **0 referensi** di seluruh `client/`, `server/`, `script/`, `scripts/`. Folder `client/public/video/` jadi kosong dan ikut hilang.

### Payload deploy turun

| | Byte | MB |
|---|---|---|
| Sebelum | 424.878.639 | 405,20 MB |
| Sesudah | 422.878.666 | 403,29 MB |
| **Turun** | **1.999.973** | **1,91 MB** |

Diukur dari clean rebuild (`rm -rf dist/public` lalu `npm run build`), bukan dari selisih perkiraan.

## Verifikasi

| Cek | Hasil |
|---|---|
| `iframe` di `home-utama.tsx` | **0** |
| Embed YouTube hero di bundle | **hilang** |
| Path `/uploads/hero/hero-{1,2,3}.mp4` di bundle | ketiganya ada |
| Folder `dist/public/video/` | tidak ada |
| `npm run check` | exit 0 |
| `npm run build` | sukses |

Catatan: string `9HaU8NjH7bI` masih muncul **1×** di bundle, tapi itu **bukan sisa hero**. Sumbernya `client/src/mikrotik/public/productExtras.ts:12`, yang kebetulan memakai video YouTube yang sama sebagai video produk MikroTik. Di luar lingkup, tidak disentuh.

## Laporan referensi rusak mikrotik (tidak dihapus, sesuai instruksi)

**Field `video` di `client/src/mikrotik/landing/data.ts:84,90,96` benar-benar TIDAK PERNAH dirender.** Buktinya bukan dugaan:

- `LANDING_CATEGORIES` hanya dipakai di `client/src/mikrotik/Landing.tsx:92`, diteruskan sebagai prop `categories` ke `VideoAndCategory`
- `VideoAndCategory.tsx:83` mengetik prop itu sebagai `{ title: string; href: string; imageSrc?: string }[]` — **field `video` tidak ada dalam tipe prop sama sekali**
- `VideoAndCategory.tsx:124` mem-`map` categories dan hanya membaca ketiga field tersebut

Jadi ketiga path `/videos/switches.mp4`, `/videos/wireless-systems.mp4`, `/videos/wireless-home-office.mp4` adalah **data mati** — filenya memang tidak ada, tapi tidak pernah diminta browser, jadi tidak ada request 404. Field `videoType: "youtube"` pada item pertama (`:77`) juga sama-sama tidak terbaca.

Aman dihapus kapan pun sebagai pembersihan, tapi **tidak mendesak** karena tidak menimbulkan error runtime.

## Langkah yang masih perlu Anda lakukan

1. Siapkan 3 video sesuai spesifikasi di bagian sebelumnya, upload ke **`public/uploads/hero/`** di server (`hero-1.mp4`, `hero-2.mp4`, `hero-3.mp4`)
2. Siapkan 3 poster, taruh di **`client/public/images/hero/`** (`hero-1.webp`, dst) — folder ini belum ada, perlu dibuat
3. Sampai keduanya ada, hero akan jatuh ke fallback: video 404 → poster 404 → gradien polos. Teks hero tetap terbaca

---

## RANGKUMAN

- Iframe YouTube di `home-utama.tsx:103-108` diganti **satu elemen `<video>`** dengan satu `src`, lengkap dengan `autoPlay loop muted playsInline preload="auto"`.
- Acak pakai **`useState(() => ...)`**, bukan `useMemo` — supaya React tidak pernah menghitung ulang dan membatalkan unduhan video di tengah jalan.
- Video dan poster dipasangkan dalam satu objek `HeroClip`, jadi **tidak bisa ketukar**.
- Fallback berjenjang: `onError` → video berikutnya yang belum dicoba (indeks gagal disimpan di `useRef`) → kalau ketiganya gagal, poster jadi `background-image`.
- **`key={heroClip.video}` wajib** — tanpa itu React memakai ulang elemen lama, poster tidak ikut berubah dan rantai fallback macet di video kedua.
- **`object-cover` wajib** — default `<video>` adalah `contain`, tanpa itu videonya letterbox di dalam pembungkus 16:9.
- File yatim `client/public/video/VP-efg-1.mp4` dihapus setelah dikonfirmasi 0 referensi; folder `video/` ikut hilang.
- **Payload deploy turun 1.999.973 byte (1,91 MB)** — dari 405,20 MB jadi 403,29 MB, diukur dari clean rebuild.
- Referensi rusak mikrotik **dikonfirmasi data mati**: `VideoAndCategory.tsx:83` bahkan tidak punya field `video` di tipe prop-nya, jadi tidak ada request 404. Tidak dihapus, sesuai instruksi.
- `npm run check` exit 0, `npm run build` sukses, commit baru (bukan amend), tidak di-deploy. Video & poster masih perlu Anda siapkan sendiri.

---

# Audit Jangkauan Route Publik (analisis saja, 2026-09-10)

Lanjutan dari perbaikan `AllowEncodedSlashes NoDecode` di vhost `dcsindo.com:443`
(bug: `/mikrotik/categories/lte%20%2F%205g` dibalas "Not Found" oleh Apache).
Tujuan: mencari apa lagi yang bisa rusak karena sebab sejenis.

**Read-only sepenuhnya** — hanya SELECT, tidak ada perubahan kode, config, atau reload Apache.

## Catatan metode (penting — beda dari rencana awal)

Dua penyesuaian teknis, hasil ujinya setara:

1. **Uji dijalankan dari mesin dev (192.168.92.27 diakses via LAN), bukan dari dalam server.**
   Akses SSH ke server diblokir oleh permission classifier di sesi ini. Karena mesin dev
   berada di LAN yang sama dan port 5000/443 terbuka, `127.0.0.1` cukup diganti IP LAN:
   - Layer A: `http://192.168.92.27:5000/<path>` (Node langsung)
   - Layer B: `https://192.168.92.27/<path>` dengan vhost dcsindo (Apache)

2. **`--header="Host: ..."` tidak bisa dipakai — Apache membalas `421 Misdirected Request`.**
   Server menolak request yang Host-nya beda dari SNI TLS. Yang benar adalah
   `curl --resolve dcsindo.com:443:192.168.92.27`, supaya SNI dan Host sama-sama benar.
   `wget --header="Host: ..."` akan kena 421 yang sama.

## PART 1 — Data yang menghasilkan URL berisiko

Hanya tiga jenis nilai DB yang benar-benar masuk **path** URL. Sisanya masuk query string
atau tidak pernah jadi URL sama sekali.

| Brand / tabel | Nilai mentah | URL hasil encode | Karakter berisiko | Status |
|---|---|---|---|---|
| mikrotik / `mikrotik_dcs_products.category` | `lte / 5g` | `/mikrotik/categories/lte%20%2F%205g` | `/` jadi `%2F`, spasi | **kontrol — sudah diperbaiki** |
| mikrotik / `mikrotik_dcs_products.category` | `sfp/qsfp` | `/mikrotik/categories/sfp%2Fqsfp` | `/` jadi `%2F` | **kembar dari bug itu — ikut sembuh** |
| mikrotik / `mikrotik_dcs_products.category` | `wireless home & office` | `/mikrotik/categories/wireless%20home%20%26%20office` | `&` jadi `%26`, spasi | aman |
| mikrotik / `mikrotik_dcs_products.category` | `60 ghz products`, `ethernet routers`, `iot products`, `wireless system` | pakai `%20` | spasi | aman |
| mikrotik / `mikrotik_dcs_products.category` | `accessories`, `antennas`, `enclosures`, `interfaces`, `routerboards`, `switches` | apa adanya | — | aman |
| fiberhome / `fiberhome_products.sku` | `GJYCH-1` | `/fiberhome/GJYCH-1` | — | aman |
| training / `training_sessions.id` | `3` | `/training/3` | — | aman (numerik) |
| firmware / slug statis di kode | `mikrotik`, `ubiquiti`, `vsol` | `/firmware/<slug>` | — | aman (bukan dari DB) |

**Tidak masuk path URL** (jadi tidak terdampak `AllowEncodedSlashes`):

- **Kategori ubiquiti** (`Accessories`, `WiFi`, `Cloud Gateways`, dll) — tidak ada route
  `/ubiquiti/categories/:x`. Hanya filter sisi klien.
- **Kategori vsol** — `ONU / ONT` mengandung `/`, **tapi tidak ada route
  `/vsol/categories/:x`**. Kalau route seperti itu ditambahkan nanti, nilai ini langsung
  jadi bug yang sama persis. Titik risiko masa depan.
- **Kategori firmware** (`10G-PON`, `CHASIS OLT`, dll) — hanya filter, bukan segmen path.
- **SKU mikrotik/ubiquiti/vsol** — route `/shop/:id` memakai **id numerik**, bukan SKU
  (`ProductCard.tsx:21`, `StoreCatalog.tsx:83/88/89`). Ini yang membuat ratusan produk
  otomatis aman.
- Kategori yang dikirim ke API lewat **query string** (`?category=lte+%2F+5g`,
  `mikrotik/api.ts:38-40`). `AllowEncodedSlashes` hanya mengatur path, bukan query string.

## PART 2 — Seluruh route publik (`client/src/App.tsx`)

Statis (21): `/`, `/ubiquiti`, `/home-ubiquiti`, `/home-Mikrotik`, `/home-V-SOL`,
`/home-vsol`, `/vsol`, `/ubiquiti/shop`, `/mikrotik/shop`, `/mikrotik/categories`,
`/mikrotik`, `/fiberhome`, `/training`, `/support`, `/support/ubiquiti`,
`/support/mikrotik`, `/support/vsol`, `/vsol/shop`, `/firmware`, `/company-profile`,
`/coming-soon`.

Dinamis (7):

| Route | Sumber segmen | Dari DB? | Risiko encoding |
|---|---|---|---|
| `/mikrotik/categories/:category` | `mikrotik_dcs_products.category` | ya | **tinggi** — satu-satunya yang bisa berisi `/` |
| `/fiberhome/:sku` | `fiberhome_products.sku` | ya | rendah (SKU alfanumerik) |
| `/training/:id` | `training_sessions.id` | ya | nihil (numerik) |
| `/mikrotik/shop/:id` | id numerik | ya | nihil |
| `/ubiquiti/shop/:id` | id numerik | ya | nihil |
| `/vsol/shop/:id` | id numerik | ya | nihil |
| `/firmware/:brand` | slug statis di kode | tidak | nihil |

## PART 3 — Uji jangkauan

46 URL diuji di dua layer (seluruh route statis + seluruh 13 kategori mikrotik +
batas atas/bawah id produk tiap brand + SKU fiberhome + training + firmware).
**Semua 200/200.** Kategori `lte%20%2F%205g` sebagai kontrol: **200 — perbaikan terbukti jalan.**

Sampling: id produk diambil ujung-ujungnya saja (min dan max) per brand, bukan seluruh
704 produk — segmennya numerik, jadi tidak ada variasi encoding yang perlu diuji.
Seluruh 13 nilai kategori diuji tanpa sampling karena di situlah risikonya.

**Perbaikan Apache ternyata sekaligus menyembuhkan `sfp/qsfp`** — kembarannya yang belum
sempat dilaporkan. Satu directive menutup dua bug.

### Dua kontrol supaya hasil "semua 200" tidak menyesatkan

**Kontrol A — 200 tidak membuktikan route-nya ada.** Aplikasi ini SPA: path ngawur pun
dilayani 200 berisi cangkang `index.html`, 404-nya baru muncul di sisi klien.

| URL | Layer A | Layer B |
|---|---|---|
| `/this-route-does-not-exist-xyz` | 200 | 200 |
| `/mikrotik/categories/totally%20fake%20cat` | 200 | 200 |

Karena itu diuji juga **lapisan datanya**, dan jumlah item cocok persis dengan DB —
bukti halaman benar-benar terisi, bukan cangkang kosong:

| Kategori (query string) | Layer A | Layer B | Jumlah di DB |
|---|---|---|---|
| `lte+%2F+5g` | 200 / 32 item | 200 / 32 item | 32 |
| `sfp%2Fqsfp` | 200 / 22 item | 200 / 22 item | 22 |
| `wireless+home+%26+office` | 200 / 29 item | 200 / 29 item | 29 |
| `60+ghz+products` | 200 / 9 item | 200 / 9 item | 9 |

**Kontrol B — metode ini memang bisa mendeteksi bug-nya.** Path `%2F` yang sama diuji ke
vhost yang belum dapat directive:

| Vhost | `/` | `/a%2Fb` | Arti |
|---|---|---|---|
| `www.dcsindo.com` | 200 | **200** | sudah diperbaiki |
| `dev:8080` | 200 | **200** | sudah punya sejak awal |
| `afcwave.co.id` | 200 | **404** | **masih bug** |
| `hr.dcsindo.com` | 307 | **404** | **masih bug** |

## PART 4 — Perbandingan vhost

**Belum lengkap.** Isi `/etc/apache2/sites-enabled/dev8080.dcsindo.com.conf` belum
terbaca karena akses SSH diblokir permission classifier, dan tidak ada salinannya di repo.
Perbandingan directive baris-per-baris masih perlu dijalankan. Yang di bawah ini adalah
**diff perilaku** hasil probe dari luar — nyata dan terukur, tapi bukan pengganti isi file.

| Perilaku | dev:8080 | dcsindo:443 | afcwave:443 | hr:443 | Penilaian |
|---|---|---|---|---|---|
| `AllowEncodedSlashes NoDecode` | ada | ada (baru) | **tidak ada** | **tidak ada** | **bug laten** — lihat di bawah |
| Redirect HTTP :80 ke HTTPS | — | **tidak ada** | **tidak ada** | **tidak ada** | **bug** — semua melayani 200 polos di port 80 |
| HSTS (`Strict-Transport-Security`) | tidak | **tidak** | **tidak** | **tidak** | **bug** — konsisten hilang di semua vhost |
| HTTP/2 (`Protocols h2`) | tidak | tidak | tidak | tidak | konsisten; disengaja |
| Kompresi gzip | ya | ya (806/2330 B) | ya (619/1311 B) | ya (3089/8890 B) | konsisten |
| CSP + `Permissions-Policy` | ada | ada | **tidak ada** | tidak ada | header datang dari Node, bukan Apache |
| Backend | Node | Node :5000 | SPA statis/Node | Next.js (`hrdcsindo`) | wajar berbeda |

**Soal `AllowEncodedSlashes` di AFCWAVE dan HR — bug sungguhan atau laten:**

- **`afcwave.co.id` — laten, perlu diwaspadai.** Path ngawur dibalas 200, jadi ini SPA
  dengan routing sisi klien seperti dcsindo. Sekarang belum ada URL ber-`%2F`, tapi begitu
  ada satu kategori bernama `a/b`, bug-nya muncul persis sama.
- **`hr.dcsindo.com` — laten, risiko rendah.** Next.js dengan routing sisi server (path
  ngawur jadi 404 asli). Next.js praktis tidak pernah memakai `%2F` di segmen path.
- Yang lebih mendesak justru **tidak ada redirect :80 ke HTTPS dan tidak ada HSTS** di
  keempat vhost. Ini bukan bug jangkauan, tapi ditemukan saat membandingkan.

## RANGKUMAN

- **Tidak ada satu pun route publik yang rusak sekarang** — 46 URL diuji dua layer (Node
  langsung dan lewat Apache), semuanya 200/200, termasuk kontrol `lte%20%2F%205g`.
- **Perbaikan kemarin sekaligus menyembuhkan bug kembar `sfp/qsfp`** —
  `/mikrotik/categories/sfp%2Fqsfp` juga mengandung `/` dan pasti 404 sebelum perbaikan.
- **Hanya kategori mikrotik yang benar-benar berisiko.** Route `/shop/:id` memakai id
  numerik, bukan SKU — itu sebabnya 704 produk otomatis aman.
- **`ONU / ONT` (vsol) adalah bom waktu**: mengandung `/`, tapi aman *hanya karena* belum
  ada route `/vsol/categories/:x`. Kalau route itu dibuat, bug-nya langsung kambuh.
- **AFCWAVE dan HR masih 404 untuk semua path `%2F`** — sudah dibuktikan, bukan dugaan.
  Laten (belum ada URL begitu), tapi AFCWAVE adalah SPA jadi paling rawan kena nanti.
- **Temuan sampingan, lebih mendesak: tidak ada redirect :80 ke HTTPS dan tidak ada HSTS**
  di keempat vhost — semua melayani HTTP polos dengan 200.
- **Uji dijalankan dari mesin dev lewat LAN**, bukan dari dalam server (SSH diblokir di
  sesi ini). Hasilnya setara karena kedua layer diakses langsung.
- **`--header="Host: ..."` tidak jalan — Apache membalas 421** karena Host beda dari SNI.
  Untuk uji berikutnya pakai `curl --resolve host:443:IP`, jangan header Host.
- **Hati-hati: aplikasi ini SPA, jadi 200 tidak membuktikan route-nya ada.** Path ngawur
  pun dibalas 200. Karena itu lapisan API ikut diuji dan jumlah itemnya cocok dengan DB.
- **PART 4 belum tuntas** — perbandingan directive baris-per-baris butuh isi
  `dev8080.dcsindo.com.conf`, yang belum bisa dibaca. Yang ada sekarang diff perilaku.

---

## RANGKUMAN

Konsolidasi WhatsApp (lanjutan commit 2dd2235) — 7 file, `npm run check` & `npm run build` lolos.

- **3 nomor hardcode dihapus** (Mikrotik, Vsol, StoreProductDetail) → pindah ke `buildWhatsAppUrl()`. Sekarang 0 nomor hardcode di luar `contact.ts`.
- **Pola acak disamakan dengan layout.tsx**: href di-`useMemo` sebagai fallback (crawler, klik tengah, salin tautan), nomor diacak ulang tiap klik lewat `onClick`.
- **4 `MessageCircle` diganti logo WhatsApp bersama**. Ukuran diukur, bukan ditebak: bbox MessageCircle = 22/24 (91,7%) setelah stroke 2, glyph bersama 99,5% → w-6→w-5.5, w-5→w-4.5, w-4→w-3.5.
- **Bug lama ketemu**: base class `Button` punya `[&_svg]:size-4` (spesifisitas 0,1,1) yang mengalahkan `w-3.5` polos (0,1,0). Artinya perbaikan ukuran ikon di TrainingDetail (commit lama) **tidak pernah benar-benar jalan** — ikon tetap 16px.
- **Diperbaiki dengan modifier `!`** (`w-3.5! h-3.5!`, konvensi Tailwind v4 yang sudah dipakai `sidebar.tsx`) di 3 ikon yang ada di dalam `<Button>`: Mikrotik, Vsol, dan TrainingDetail. Sudah diverifikasi muncul di CSS hasil build sebagai `!important`.
- **Semua prefill jadi bahasa Inggris & lewat `encodeURIComponent`**; 2 halaman support yang tadinya tanpa prefill sekarang punya pesan, isinya tetap kontekstual (nama produk, SKU, judul training).
- **Koreksi atas analisis awal**: hanya **1** prefill yang pakai `%20` manual (StoreProductDetail), bukan 2 — hit `%20` lainnya adalah href route MikroTik, bukan URL WhatsApp.
- **Sisa yang sengaja tidak disentuh**: FiberHomePage, FiberHomeProductDetail, dan TrainingDetail masih pakai `DCS_WHATSAPP_PRIMARY` (selalu nomor #1, tanpa acak) — di luar lingkup yang diminta, tapi layak jadi langkah berikutnya kalau mau acak merata di seluruh situs.
- **Label tombol TrainingDetail masih "Hubungi via WhatsApp"** (bahasa Indonesia). Itu copy halaman, bukan prefill, jadi dibiarkan.
- Tidak ada deploy (mode batch). Admin panel, kode server, dan kerja hero video tidak disentuh.

---

## RANGKUMAN

Lanjutan konsolidasi WhatsApp — 3 file diubah, di-amend ke commit `80e27c7`. `npm run check` & `npm run build` lolos.

- **3 pemakai `DCS_WHATSAPP_PRIMARY` terakhir dimigrasi** (FiberHomePage, FiberHomeProductDetail, TrainingDetail) ke `buildWhatsAppUrl()`. Seluruh 6 titik WhatsApp situs kini ikut acak 50:50 yang sama.
- **Rules of Hooks**: di FiberHomeProductDetail dan TrainingDetail, link WA ada *di bawah* early return. `useMemo` di posisi lama akan dipanggil bersyarat, jadi hook dinaikkan ke atas semua early return dengan fallback pesan saat data masih `null`.
- FiberHomePage tidak punya early return, jadi hook-nya cukup ditaruh sebelum `return` dengan pesan statis (`useMemo` dependensi kosong).
- Semua prefill kontekstual + interpolasi dinamis (nama produk, SKU, judul training) **tetap utuh**, tidak ada yang digeneralisasi.
- **`DCS_WHATSAPP_PRIMARY` / `SECONDARY` sekarang 0 pemakai.** Sesuai instruksi, export-nya **tidak dihapus**.
- ⚠️ Komentar di `contact.ts:32-33` sekarang **usang** — masih menyebut "dipertahankan untuk pemakai lama (FiberHomePage, FiberHomeProductDetail, TrainingDetail)", padahal ketiganya sudah tidak memakainya. Sengaja tidak disentuh karena di luar lingkup.
- Label tombol TrainingDetail: **"Hubungi via WhatsApp" → "Contact via WhatsApp"**.
- **Audit copy Indonesia (laporan saja, tidak diubah)**: masih banyak di luar lingkup ini. Titik terbesar: **TrainingDetail** (form pendaftaran: "Nama lengkap", "Daftar Sekarang", "Tim kami akan menghubungi Anda", "Kembali ke Training", "Kirim Email"), **TrainingList** ("Lihat Dokumentasi", "Galeri kegiatan training…"), **modul Firmware** (`DownloadConfirmDialog`, `FirmwareDetailModal`, `firmware.tsx`, `firmware-brand.tsx` — termasuk disclaimer risiko flashing yang panjang), **katalog MikroTik** ("← Kembali ke Categories", "Lihat produk"), `ChunkErrorBoundary`, dan `layout.tsx` ("Cari produk", aria-label "Kembali…").
- Catatan: **TrainingList:186 campur dua bahasa dalam satu ekspresi** — `completed ? "Lihat Dokumentasi" : "View Details"`.
- Commit di-amend, **belum di-push** (`origin` masih di `56c862c`). Tidak ada deploy — mode batch.

---

## RANGKUMAN

Sinkronisasi `PROJECT_SUMMARY.md` dengan keadaan kode sekarang — commit `01c3503`, +261/−137. Dokumentasi saja, `npm run check` lolos, 0 file kode disentuh.

- **Kestalean jauh lebih luas dari 3 klaim yang disebut.** Selain auth, bagian struktur folder, stack, database, fitur, dan pola semuanya masih menggambarkan keadaan pra-audit.
- **Auth diperbaiki total**: plaintext → bcrypt + tabel `users`; sesi RAM → `express-mysql-session` (persisten); satu flag boolean → role `admin`/`trainer`/`sales` lewat `requireRole`; ditambah H-02 (rate limit 2 lapis) & H-03 (cookie `Secure` + `session.regenerate`).
- **Temuan baru — SKU MikroTik salah didokumentasikan**: doc menulis `sku` UNIQUE, padahal kunci sebenarnya **komposit `(sku, category)`**. Mengubahnya jadi `UNIQUE(sku)` menghapus 16 baris produksi — sekarang ditulis eksplisit beserta alasannya.
- **Temuan baru — seluruh katalog SSR/EJS lama sudah dihapus** (`ejsViews`, `catalogMultiBrandRoutes`, `brandModel`, `catalogProductModel`), begitu juga `server/validation/`. Doc masih mencantumkannya sebagai bagian arsitektur aktif.
- **Temuan baru — `/cart` tidak dirouting** dan `pages/cart.tsx` tidak diimpor dari mana pun, tapi masih terdaftar sebagai fitur publik.
- **Temuan baru — dependency menganggur berganti**: `drizzle`/`pg`/`passport` sudah dihapus (commit `e898d4c`), tapi kini `ejs` dan `react-router-dom` yang terpasang tanpa dipakai.
- **Modul yang hilang dari doc kini ditambahkan**: brand **FiberHome**, modul **Firmware**, **Visitor Log**, **Peserta**, **Users**, plus `safeUpload`, `errorSanitizer`, CSP enforce, dan komponen katalog bersama (L-06).
- **Prosedur deploy diperinci**: daftar "JANGAN ditimpa" kini menyebut isi `public/uploads/` satu per satu — termasuk **`hero/`** (video hero sengaja tidak ada di repo, hanya posternya) dan `firmware/`. Ditambah bagian baru untuk konfigurasi sisi server (Apache, HSTS, pm2-logrotate).
- **Utang teknis direkonsiliasi**: 4 dari 7 item lama sudah selesai dan dihapus; daftar terbuka sekarang berisi 10 item nyata (copy Indonesia, M-05, komentar usang `contact.ts`, `technical_items` kosong, field video mati, `cart.tsx` yatim, dll).
- **Lampiran A & B jadi tabel berstatus** — sistem 3 role dan pendaftaran training ternyata sudah sebagian besar jadi, bukan rencana lagi.
- ⚠️ Ditemukan tapi **tidak diubah** (di luar lingkup dokumentasi): komentar di `server/index.ts` masih menyebut CSP "Report-Only" dan "HSTS belum ada", padahal CSP sudah mode enforce sejak `7b574d3`.
- Belum di-push (`origin` masih di `56c862c`). Tidak ada deploy — mode batch.

---

## RANGKUMAN

Komentar status keamanan di `server/` disegarkan — 4 file, di-amend ke commit `eab1aa7`. Komentar saja.

- **`server/index.ts`**: "CSP (Tahap 2) dan HSTS sengaja BELUM ada di sini" → CSP sudah mode **enforce** lewat `csp.ts` sejak `7b574d3`.
- **HSTS**: ditulis apa adanya — memang tetap **tidak** di Node, karena Apache satu-satunya lapis yang bicara TLS; aktif dengan **max-age=300** dan masih dinaikkan bertahap.
- **`server/index.ts`**: label blok `app.use(csp)` diubah dari "Fase A: Report-Only" → "Fase B: MODE ENFORCE".
- **Hasil sapuan**: ditemukan **7** komentar usang di 4 file, bukan hanya 2 yang disebut.
- `cspReportRoutes.ts` + `routes.ts` masih melabeli endpoint laporan sebagai "khusus Fase A", padahal `report-uri` **sengaja dipertahankan** dalam mode enforce agar request yang diblokir tetap terlihat di log.
- `csp.ts` punya dua catatan "pertimbangkan lagi di Fase B" — padahal Fase B sudah berjalan sekarang; ditulis ulang jadi "nanti".
- **Sengaja TIDAK diubah** karena memang akurat: label "H-06 Tahap 1" (asal-usul header dasar), `csp.ts:4-8` (sudah menyebut enforce), dan `auth/roles.ts` ("fase berikutnya" — pemisahan role memang belum selesai).
- **Bukti nol perubahan perilaku**: tiap baris diff ada di dalam blok komentar, dan **sha256 `dist/index.cjs` identik** sebelum & sesudah (`a76dde59…`). `npm run check` lolos.
- Belum di-push (`origin` masih di `56c862c`, lokal 2 commit di depan). Tidak ada deploy — mode batch.

---

# M-05 — Rencana Paginasi Endpoint Listing (analisis saja, 2026-09-15)

Read-only. Hanya `SELECT` ke DB produksi (`dcsindo`, MariaDB 11.8.6), tanpa perubahan skema
maupun kode. Skrip hitung dijalankan dari file sementara di root lalu dihapus.

## PART 1 — Inventaris endpoint listing

### Katalog publik

| Endpoint | Tabel | Baris (COUNT) | Payload JSON | Pertumbuhan |
|---|---|---|---|---|
| `GET /api/mikrotik-dcs/public/products` | `mikrotik_dcs_products` | **283** | 125,2 KB (semua) / 22,5 KB (kategori terbesar) | 282 di Mei 2026 (impor massal), **+1 sejak itu** |
| `GET /api/ubiquiti-dcs/public/products` | `ubiquiti_dcs_products` | **395** | 226,9 KB (semua) / 92,4 KB (Accessories) | 395 di Mei 2026, **0 sejak itu (4 bulan)** |
| `GET /api/vsol-dcs/public/products` | `vsol_dcs_products` | **27** | 25,6 KB | 27 di Mei 2026, 0 sejak itu |
| `GET /api/fiberhome-dcs/products` | `fiberhome_products` | **1** | <1 KB | praktis nol |
| `GET /api/firmware/public/list` | `firmware_files` | **20** | 13,7 KB | 20 di Jul 2026, 0 sejak itu |
| `GET /api/training/sessions` | `training_sessions` | **1** | <1 KB | fitur belum dipakai |

Sebaran per kategori (menentukan payload nyata, karena filter kategori dikerjakan di server):

- MikroTik: accessories 64, switches 40, lte/5g 33, wireless home & office 29, ethernet routers 24, sfp/qsfp 22, wireless system 20, iot 18, sisanya ≤9.
- Ubiquiti: **Accessories 165**, Camera Security 58, Switching 51, Door Access 37, WiFi 35, Integration 31, Cloud Gateways 12, Advanced Hosting 6.
- V-SOL: OLT 19, ONU/ONT 7, WiFi Router 1.

### Daftar panel admin

| Endpoint | Tabel | Baris | Status |
|---|---|---|---|
| `GET /api/ubiquiti-dcs/admin/products` | `ubiquiti_dcs_products` | **395** | tanpa LIMIT |
| `GET /api/mikrotik-dcs/admin/products` | `mikrotik_dcs_products` | **283** | tanpa LIMIT |
| `GET /api/vsol-dcs/admin/products` | `vsol_dcs_products` | **27** | tanpa LIMIT |
| `GET /api/firmware/admin/list` | `firmware_files` | **20** | tanpa LIMIT |
| `GET /api/training/admin/sessions` | `training_sessions` | **1** | tanpa LIMIT |
| `GET /api/training/registrations` | `training_registrations` | **0** | tanpa LIMIT |
| `GET /api/auth/users` | `users` | **5** | tanpa LIMIT |
| `GET /api/mikrotik-dcs/admin/activity-log` | `admin_activity_log` | **74** | **sudah** `LIMIT 200` |
| `GET /api/admin/visitor-log/list` | `visitor_log` | **11.952** | **sudah berpaginasi penuh** |

`visitor_log` satu-satunya tabel >500 baris, dan sudah aman: `limit` di-clamp 1–500 (default 100),
`offset` di-clamp ≥0, ditambah `SELECT COUNT(*)` untuk `total`, dan UI `VisitorLog.tsx` sudah punya
nomor halaman (`PAGE_SIZE = 20`). Pertumbuhannya ~280 baris/hari (Agu 8.714, Sep 2.942 setengah
bulan) tapi **dibatasi job prune 3 bulan** (`server/jobs/visitorLogPrune.ts`, harian jam 03:00),
jadi kondisi tunaknya sekitar ±25k baris — bukan pertumbuhan tak terbatas.

## PART 2 — Prioritas

Memakai ambang yang diminta (>500 mendesak, <100 dilewati):

- **Mendesak (>500 baris): tidak ada.** Satu-satunya tabel >500 (`visitor_log`) sudah berpaginasi.
- **Dilewati (<100 baris): 7 endpoint** — V-SOL (27), firmware publik & admin (20), training sessions (1),
  registrations (0), users (5), FiberHome (1), activity-log (74, sudah `LIMIT 200`).
- **Zona abu-abu (100–500): 2 endpoint** — Ubiquiti admin (395) dan MikroTik admin (283).

Kesimpulan jujur: **M-05 bukan isu performa, melainkan isu batas (unbounded).** Tidak ada satu pun
endpoint yang hari ini melampaui ambang mendesak, dan tiga dari empat katalog produk **tidak tumbuh
sama sekali sejak Mei 2026**. Yang benar-benar layak dikerjakan sekarang adalah **hard cap di
server** (mis. `LIMIT 500` di setiap query listing) — itu menutup temuan audit "tanpa LIMIT" tanpa
mengubah kontrak API dan tanpa menyentuh UI sama sekali. Paginasi UX menyusul hanya untuk dua daftar
admin di zona abu-abu.

## PART 3 — Strategi per jenis

**Katalog publik — jangan dipaginasi.** Alasannya bukan malas, tapi struktur: ketiga katalog publik
selalu difilter kategori di sisi server (`?category=`), dan halaman kategori MikroTik
(`CategoryCatalogPage.tsx`) bahkan tidak punya opsi "semua". Halaman terbesar yang mungkin dilihat
pengunjung adalah **Ubiquiti → Accessories = 165 produk / 92 KB**. Biaya nyatanya ada di render 165
kartu + gambar, bukan di transfer. Obat yang tepat: **render cap "show more" di klien** (tampilkan
60, tombol tambah 60) — nol perubahan API, nol risiko, dan filter/sort tetap utuh. Infinite scroll
ditolak: merusak posisi scroll saat balik dari halaman detail produk, yang di sini sering terjadi.

**Admin — nomor halaman klasik.** Sudah ada implementasinya yang matang di `VisitorLog.tsx`
(`pageNumbers()` di `:144`, tombol Prev/Next di `:660`). Tinggal diekstrak jadi komponen bersama.
Kerja admin butuh "lompat ke halaman 5" dan "ada berapa total", yang tidak diberikan load-more.

**Pengecualian penting:** mode `sort=custom` di dashboard admin adalah mode drag & drop reorder.
Halaman **harus dinonaktifkan** (atau `perPage` dinaikkan ke 500) saat mode itu aktif — lihat Bagian 8.

## PART 4 — Kontrak API

Bentuk sekarang, seragam di semua endpoint listing kecuali visitor-log:

```json
{ "ok": true, "data": [ ... ] }
```

Visitor-log menyimpang (sudah terlanjur):

```json
{ "ok": true, "data": { "rows": [ ... ], "total": 11952 } }
```

Usulan — **aditif, bukan mengganti**:

```json
{ "ok": true, "data": [ ... ], "meta": { "total": 395, "page": 1, "perPage": 100, "hasMore": true } }
```

**Breaking change? Tidak,** asalkan memakai bentuk aditif di atas. Semua pembungkus klien
(`client/src/{mikrotik,ubiquiti,vsol}/api.ts`, `admin/firmware/api.ts`, `pages/fiberhome/api.ts`)
membaca `r.ok` lalu `r.data` sebagai array; menambah `meta` tidak menyentuh jalur itu. Sebaliknya,
memindahkan array ke `data.rows` (menyeragamkan dengan visitor-log) **akan** memecah 12 pemanggil
sekaligus. Rekomendasi: pakai `meta`, dan biarkan visitor-log apa adanya — konsistensi tidak sepadan
dengan risikonya.

Yang mengasumsikan array polos dan **ikut jebol kalau daftar dipotong** (bukan soal bentuk, tapi soal
kelengkapan): `components/search-modal.tsx`, `ubiquiti/admin/ProductForm.tsx:103`,
`admin/firmware/Dashboard.tsx:13` (menghitung `r.data.length` sebagai badge jumlah), dan
`admin/Peserta.tsx` (ekspor CSV dari `rows` di klien).

## PART 5 — Query DB

**LIMIT/OFFSET untuk semua. Cursor tidak dibutuhkan di mana pun.** Offset terdalam yang mungkin
terjadi adalah 395 (Ubiquiti) — biaya `OFFSET` baru terasa di puluhan ribu baris. Lagi pula
pengurutan default `ORDER BY sort_order ASC, created_at DESC, id DESC` memakai `sort_order` yang
**tidak unik**, jadi cursor harus komposit 3 kolom: rumit, tanpa imbalan. Bahkan `visitor_log`
(11.952 baris, `ORDER BY visited_at DESC, id DESC` — sebenarnya kandidat cursor yang rapi) tetap
tidak perlu: offset terdalam 11.900 terukur beberapa milidetik.

**Biaya COUNT (terukur):** `visitor_log` 17 ms, `ubiquiti_dcs_products` 3 ms, `mikrotik_dcs_products`
3 ms. Tidak ada alasan menghindari `COUNT(*)` per request di skala ini.

**Indeks — satu celah nyata:**

- `mikrotik_dcs_products`: `idx_category`, `idx_sort`, `idx_created` → **cukup**.
- `vsol_dcs_products`: `idx_category`, `idx_sort` → **cukup**.
- `fiberhome_products`: `idx_category`, `idx_sort` → **cukup**.
- `firmware_files`: `idx_firmware_sort(brand, category, sort_order)` → **cukup, paling rapi**.
- ⚠️ **`ubiquiti_dcs_products`: hanya `PRIMARY(id)` dan `sku(sku)`.** Tidak ada indeks `category`
  maupun `sort_order` — padahal ini tabel produk **terbesar** (395) dan satu-satunya yang endpoint-nya
  selalu memfilter `category`. Di 395 baris full scan tidak terasa, tapi ini satu-satunya kekurangan
  skema yang relevan dengan M-05. *Di luar lingkup (tanpa perubahan skema) — dicatat saja.*
- ⚠️ `visitor_log` punya `idx_date_bot(visit_date, is_bot)` yang cocok dengan filternya, tapi
  `ORDER BY visited_at DESC` memakai kolom **berbeda** (`visited_at`, bukan `visit_date`) → filesort
  pada tiap halaman. Belum jadi masalah di 12k baris; catatan untuk nanti.

## PART 6 — Frontend

Komponen yang butuh state halaman + loading state:

| Komponen | Perlu? | Catatan |
|---|---|---|
| `ubiquiti/admin/Dashboard.tsx` | ✅ ya | 395 baris; **matikan paging saat `sort === "custom"`** |
| `mikrotik/admin/Dashboard.tsx` | ✅ ya | 283 baris; syarat sama |
| `vsol/admin/Dashboard.tsx` | ❌ tidak | 27 baris |
| `admin/firmware/List.tsx` | ❌ tidak | 20 baris |
| `admin/Users.tsx`, `Peserta.tsx`, `training/Dashboard.tsx` | ❌ tidak | 5 / 0 / 1 baris |
| `{mikrotik,ubiquiti,vsol}/public/StoreCatalog.tsx` | ⚠️ render cap saja | bukan paginasi API |
| `mikrotik/public/CategoryCatalogPage.tsx` | ❌ tidak | maks 64 per kategori |

**Sinkronisasi URL (`?page=2`)** — layak hanya di dua tempat, dan dengan alasan berbeda:

- `ubiquiti/public/StoreCatalog.tsx` **sudah** menaruh kategori di URL (`setLocation("/ubiquiti/shop?category=…")`),
  jadi `?page=` menyatu alami. Tapi karena katalog publik tidak dipaginasi, ini jadi moot — lewati.
- Dashboard admin: berguna untuk "kirim link ke halaman 3" dan supaya tombol Back browser tidak
  melompat balik ke halaman 1 setelah edit produk. **Ini yang paling terasa manfaatnya.**
- `mikrotik/public/StoreCatalog.tsx` bahkan **belum** menyinkronkan kategori ke URL (murni state lokal).
  Menambah `?page` di sana tanpa `?category` justru tidak konsisten — kalau mau diperbaiki, `?category` dulu.

**Posisi scroll:** dengan nomor halaman, pola yang benar adalah `scrollTo(0,0)` saat halaman berubah.
Ini justru salah satu alasan menolak infinite scroll di katalog publik.

## PART 7 — Estimasi & pemecahan commit

Diurutkan supaya tiap commit berdiri sendiri, bisa di-deploy, dan bisa di-revert terpisah.

| # | Commit | Lingkup | Ukuran |
|---|---|---|---|
| 1 | `fix(api): hard cap 500 baris di semua query listing` | 6 model, tanpa perubahan kontrak/UI. **Ini yang menutup temuan audit.** | **kecil** |
| 2 | `refactor(client): ekstrak <Pagination> dari VisitorLog` | komponen bersama + `pageNumbers()`, VisitorLog dipakai sebagai pemakai pertama (uji regresi gratis) | **sedang** |
| 3 | `feat(api): endpoint /public/search ringan per brand` | proyeksi `id, nama_produk, sku, category, main_image` saja — **prasyarat**, harus sebelum #8 | **sedang** |
| 4 | `refactor(client): search-modal pakai endpoint search baru` | memutus ketergantungan search ke list penuh | **kecil** |
| 5 | `feat(api): meta{total,page,perPage,hasMore} di 2 list admin` | aditif, ubiquiti + mikrotik admin | **kecil** |
| 6 | `feat(admin): paginasi dashboard Ubiquiti` | termasuk guard `sort==="custom"` + sync `?page=` | **sedang** |
| 7 | `feat(admin): paginasi dashboard MikroTik` | mengikuti pola #6 | **kecil** |
| 8 | `feat(catalog): tombol "Tampilkan lebih banyak" di katalog publik` | render cap klien, tanpa perubahan API | **sedang** |

Commit #1 saja sudah menutup M-05 sebagai temuan keamanan. #2–#8 murni peningkatan UX dan boleh
ditunda tanpa utang keamanan tersisa. Kalau waktu terbatas: kerjakan **#1, lalu berhenti**.

## PART 8 — Risiko

**Tinggi — akan rusak diam-diam kalau list publik dipaginasi tanpa persiapan:**

1. **`components/search-modal.tsx`** — memuat **seluruh** produk per brand tanpa `category`
   (`:56`, `:74`, `:92`) lalu memfilter di klien. Ini pemakai terbesar endpoint publik (227 KB untuk
   Ubiquiti). Begitu list dipotong, pencarian global jadi **salah tanpa error** — produk yang ada
   dilaporkan tidak ada. Mitigasi: commit #3 dan #4 **wajib** mendahului paginasi publik apa pun.
2. **`ubiquiti/admin/ProductForm.tsx:103`** — `apiUbiquitiAdminProducts()` tanpa argumen untuk
   mengisi pemilih add-on. Dipotong 100 → 295 produk hilang dari dropdown, tanpa pesan apa pun.

**Sedang:**

3. **Drag & drop reorder** (`{mikrotik,ubiquiti,vsol}/admin/Dashboard.tsx`) mengirim **seluruh daftar
   id kategori** ke `/admin/products/reorder`. Model `reorderXxxProducts()` menomori ulang
   `sort_order` dari indeks 0 untuk id yang dikirim saja — jadi kalau hanya satu halaman yang terkirim,
   urutan produk di halaman lain **ikut bergeser**. Diredam oleh fakta bahwa drag hanya aktif jika
   satu kategori dipilih (maks 165 item), tapi guard eksplisit tetap wajib.
4. **`admin/Peserta.tsx`** — ekspor CSV dibangun dari `rows` di klien (`:43`). Kalau dipaginasi, tombol
   "Export" diam-diam hanya mengekspor halaman aktif. (Tabelnya 0 baris sekarang, jadi ini catatan
   untuk nanti — dan alasan lain untuk melewati endpoint ini.)
5. **`admin/firmware/Dashboard.tsx:13`** — badge jumlah per brand dihitung dari `r.data.length`.
   Dengan cap 500 pun aman hari ini (20 baris), tapi polanya rapuh; `meta.total` adalah jawabannya.

**Interaksi filter/search/sort:** filter kategori dikerjakan di server (refetch, bukan filter klien),
jadi paginasi + filter tidak bentrok **asal `page` di-reset ke 1 setiap `category` atau `sort` berubah** —
lupa ini menghasilkan "halaman 5 dari 2 halaman" yang tampil kosong. Tidak ada kotak pencarian di
dashboard admin mana pun, jadi tidak ada interaksi search yang perlu dijaga di sisi admin.

**Di mana paginasi justru memperburuk UX:** katalog publik. Pengunjung menelusuri lewat pill kategori,
dan kategori terbesar pun hanya 165 item; memaksa "halaman 2 dari WiFi (35 item)" menambah klik tanpa
menghemat apa pun. Dan `CategoryCatalogPage.tsx` MikroTik (maks 64 item) jelas tidak perlu disentuh.

## RANGKUMAN

- **Analisis saja — nol perubahan kode, nol perubahan skema.** Hanya `SELECT` ke DB produksi `dcsindo`; skrip hitung sementara sudah dihapus.
- **Tidak ada endpoint yang melewati ambang mendesak.** Tabel listing terbesar adalah `ubiquiti_dcs_products` = **395** baris (227 KB). Satu-satunya tabel >500 (`visitor_log`, **11.952**) **sudah berpaginasi penuh** dan dibatasi job prune 3 bulan.
- **Tiga dari empat katalog tidak tumbuh sejak Mei 2026** — Ubiquiti 395, V-SOL 27, MikroTik +1 produk dalam 4 bulan. M-05 adalah masalah *batas*, bukan masalah *volume*.
- **Rekomendasi inti: commit #1 saja sudah menutup temuan audit** — hard cap `LIMIT 500` di 6 model listing, tanpa perubahan kontrak API dan tanpa menyentuh UI. Sisanya (7 commit) murni UX dan boleh ditunda.
- **Paginasi UX hanya untuk 2 daftar admin** (Ubiquiti 395, MikroTik 283) pakai nomor halaman klasik — `<Pagination>` tinggal diekstrak dari `VisitorLog.tsx` yang sudah matang. **7 endpoint lain dilewati** (semua <100 baris).
- **Katalog publik jangan dipaginasi**; pakai render cap "Tampilkan lebih banyak" di klien. Kategori terbesar hanya 165 item, dan biayanya di render kartu, bukan transfer. Infinite scroll ditolak (merusak posisi scroll saat kembali dari halaman detail).
- **Kontrak API aditif — bukan breaking:** tambah `meta{total,page,perPage,hasMore}` di samping `data`. Memindahkan array ke `data.rows` (menyeragamkan dengan visitor-log) akan memecah 12 pemanggil — jangan.
- **LIMIT/OFFSET untuk semua, cursor tidak perlu di mana pun.** Offset terdalam 395; `COUNT(*)` terukur 3–17 ms. Pengurutan pakai `sort_order` yang tidak unik, jadi cursor harus komposit 3 kolom — rumit tanpa imbalan.
- **Risiko terbesar: `search-modal.tsx` memuat seluruh produk per brand untuk pencarian global.** Memotong list publik akan membuat pencarian **salah tanpa error**. Endpoint `/public/search` ringan wajib dibuat lebih dulu. Risiko serupa: pemilih add-on di `ubiquiti/admin/ProductForm.tsx:103`, dan drag-reorder yang mengirim seluruh id kategori.
- ⚠️ **Temuan sampingan (tidak diubah, di luar lingkup):** `ubiquiti_dcs_products` — tabel produk terbesar — **hanya punya `PRIMARY(id)` dan `sku(sku)`**, tanpa indeks `category` maupun `sort_order`, padahal endpoint-nya selalu memfilter kategori. Juga `visitor_log` memfilter `visit_date` tapi mengurutkan `visited_at` → filesort tiap halaman.

---

# Implementasi M-05 commit #1 — Hard cap 500 baris di query listing (2026-09-15)

Menjalankan persis commit #1 dari rencana M-05: membatasi jumlah baris di semua query
listing. **Tanpa perubahan kontrak API, tanpa perubahan UI, tanpa parameter baru.**
`visitor_log` dan `admin_activity_log` sengaja tidak disentuh — keduanya sudah berbatas.

## Koreksi terhadap rencana: 8 model, bukan 6

Rencana M-05 menulis "6 models". Saat dikerjakan ternyata ada **8** model yang punya query
listing tanpa batas. Yang terlewat dihitung di rencana adalah `trainingRegistrationModel` dan
`userModel` — keduanya memang ada di tabel inventaris PART 1, hanya salah dijumlahkan.
Semuanya dicakup di commit ini.

## Yang diubah

File baru `server/models/listLimit.ts` — satu konstanta `LIST_ROW_CAP = 500`, dengan komentar
peringatan yang diminta: menaikkan angka ini (atau data tumbuh melewati 500) **wajib**
menangani `search-modal.tsx` dan `ubiquiti/admin/ProductForm.tsx` lebih dulu, karena keduanya
gagal diam-diam kalau daftarnya terpotong. Komentar menunjuk balik ke analisis M-05 di
`laporan.md`.

| Model | Fungsi | Perubahan |
|---|---|---|
| `mikrotikDcsProductModel.ts` | `listMikrotikDcsProducts` | `LIMIT ${LIST_ROW_CAP}` |
| `ubiquitiDcsProductModel.ts` | `listUbiquitiDcsProducts` | `LIMIT ${LIST_ROW_CAP}` |
| `vsolDcsProductModel.ts` | `listVsolDcsProducts` | `LIMIT ${LIST_ROW_CAP}` |
| `firmwareModel.ts` | `listFirmwareFiles` | `LIMIT ${LIST_ROW_CAP}` |
| `trainingModel.ts` | `listTrainingSessions` | `LIMIT ${LIST_ROW_CAP}` |
| `trainingRegistrationModel.ts` | `listRegistrations` | `LIMIT ${LIST_ROW_CAP}` |
| `userModel.ts` | `listUsers` | `LIMIT ${LIST_ROW_CAP}` |
| `fiberHomeDcsProductModel.ts` | `getAllProducts` | `LIMIT` di query induk + 4 query anak di-scope `WHERE product_id IN (:ids)` |

Pola `LIMIT ${konstanta}` disisipkan langsung ke string SQL — sama persis dengan pola yang
sudah dipakai `listAdminLoginAttempts` dan `listVisits`. Nilainya konstanta literal, bukan
input pengguna, jadi tidak ada permukaan injeksi baru.

## Satu keputusan yang perlu Anda tahu (di luar "sekadar tambah LIMIT")

Di `fiberHomeDcsProductModel.getAllProducts()`, **`LIMIT` datar di 4 query anak justru salah.**
Fungsi itu menarik seluruh isi `fiberhome_gallery`, `_technical_specs`, `_key_features`, dan
`_applications` lalu menggabungkannya di JS. Memotong query anak di 500 bisa membuang spec
milik produk yang **masih ada** di daftar — output rusak diam-diam, persis jenis bug yang
ingin dihindari M-05. Jadi query anak dibatasi lewat `WHERE product_id IN (:ids)` memakai id
produk yang benar-benar terambil. Hasilnya tetap utuh, ikut terbatas oleh cap induk, dan
kebetulan juga lebih hemat. Kalau Anda ingin commit ini murni "hanya LIMIT", bagian inilah
yang dicabut — tapi konsekuensinya endpoint FiberHome tetap tidak berbatas.

## Verifikasi

- `npm run check` (tsc) — **exit 0**.
- `npm run build` — **sukses**, `dist/index.cjs` 1,2 MB.
- **Pengukuran ke DB produksi: 0 dari 8 endpoint terpotong hari ini.** MikroTik 283, Ubiquiti
  395, V-SOL 27, FiberHome 1, firmware 20, training 1, registrations 0, users 5 — semua di
  bawah 500.
- **Risiko dikonfirmasi tidak menggigit hari ini**, sesuai permintaan: `search-modal.tsx`
  memuat list brand terbesar = Ubiquiti **395 < 500** → pencarian global tetap lengkap; pemilih
  add-on di `ProductForm.tsx` memakai list yang sama, **395 < 500** → dropdown tetap lengkap.
  Sisa ruang sebelum cap benar-benar menggigit: **105 produk Ubiquiti lagi**.
- Scoping anak FiberHome tidak menghilangkan satu baris pun: gallery 5/5, specs 14/14,
  features 5/5, applications 3/3 — **0 baris yatim**.

## RANGKUMAN

- **Commit #1 M-05 selesai** — cap 500 baris di semua query listing, satu commit
  `fix(api): hard cap 500 rows on listing queries (M-05)`. Kontrak API, UI, dan parameter tidak berubah sama sekali.
- **Koreksi: 8 model, bukan 6 seperti di rencana.** `trainingRegistrationModel` dan `userModel` salah dijumlahkan di rencana awal; keduanya ikut ditangani di sini.
- **Konstanta tunggal `LIST_ROW_CAP = 500`** di file baru `server/models/listLimit.ts`, lengkap dengan peringatan bahwa menaikkannya wajib menangani `search-modal.tsx` + `ProductForm.tsx` lebih dulu, menunjuk balik ke analisis M-05.
- **`visitor_log` dan `admin_activity_log` tidak disentuh** — keduanya sudah berbatas di angka 500 yang sama.
- **0 dari 8 endpoint terpotong hari ini.** Yang terbesar (Ubiquiti, 395) masih 105 baris di bawah cap, jadi perilaku produksi tidak berubah sedikit pun.
- **Dua risiko yang Anda minta dikonfirmasi: aman.** Pencarian global (`search-modal`) dan pemilih add-on (`ProductForm`) sama-sama memakai list Ubiquiti 395 baris — di bawah cap, jadi keduanya tetap lengkap hari ini.
- ⚠️ **Satu langkah melebihi "sekadar tambah LIMIT":** di FiberHome, 4 query anak di-scope `WHERE product_id IN (:ids)`, bukan diberi `LIMIT` datar — karena `LIMIT` datar di sana bisa membuang spec milik produk yang masih dalam rentang. Terverifikasi 0 baris hilang. Mudah dicabut kalau Anda mau commit ini betul-betul minimal.
- **Verifikasi: `npm run check` exit 0, `npm run build` sukses.** Tidak ada deploy — mode batch, sesuai instruksi.
- **Sisa rencana M-05 (commit #2–#8) belum dikerjakan** dan tidak meninggalkan utang keamanan — semuanya murni UX.
