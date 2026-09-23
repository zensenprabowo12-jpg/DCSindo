# Implementasi: Panduan Instalasi Per-Firmware + Fallback ke Panduan Global

> Branch: `security/c01-c03-hardening` · Tanggal: 2026-09-23 · Mode: batch, **tanpa deploy**
> `npm run check` exit 0 · `npm run build` sukses
> Isi laporan.md sebelumnya (analisa hardcode vs PopupSettings) ditimpa penuh — masih bisa diambil dari git history.

---

## 0. Koreksi yang harus diketahui lebih dulu

**Nama tabelnya `firmware_files`, bukan `firmware`.** Instruksi menyebut `ALTER TABLE firmware`; kalau dijalankan apa adanya di phpMyAdmin hasilnya `ERROR 1146: Table 'dcsindo.firmware' doesn't exist`. Migrasi yang saya buat memakai nama yang benar (`firmware_store.sql:11` sebagai rujukan).

---

## 1. Migrasi DB — `database/migrate_firmware_install_guide.sql` (file baru)

```sql
ALTER TABLE firmware_files
  ADD COLUMN IF NOT EXISTS install_guide TEXT NULL AFTER notes;
```

- **Nullable, tanpa DEFAULT** — 20 firmware yang sudah ada bernilai `NULL` → tetap memakai panduan global, tidak ada yang berubah setelah migrasi.
- **Idempotent** lewat `ADD COLUMN IF NOT EXISTS` — klausa khas **MariaDB** (server produksi MariaDB 11.8), aman dijalankan berulang. Kalau suatu saat pindah ke MySQL asli, klausa ini harus dibuang karena MySQL tidak mengenalnya (sudah dicatat sebagai komentar di filenya).
- **Query verifikasi** ada di bagian bawah file: cek kolom muncul dengan `IS_NULLABLE='YES'`, plus query opsional menghitung berapa firmware yang sudah punya panduan sendiri (harus `0` tepat setelah migrasi).
- Harus dijalankan di **dua database**: lokal (XAMPP) + produksi `192.168.92.27`.

---

## 2. Server

### `server/models/firmwareModel.ts`

- `FirmwareFileRow` + `FirmwareFileInput` dapat field `install_guide`.
- `mapRow()` → `install_guide: r.install_guide ?? null` (aman saat kolomnya tidak ikut ter-SELECT).
- **Deteksi kolom runtime** — ini bagian yang menjawab permintaan "kode tidak boleh crash kalau kolomnya belum ada":

```ts
let installGuideColumnExists: boolean | null = null;

async function hasInstallGuideColumn(): Promise<boolean> {
  if (installGuideColumnExists !== null) return installGuideColumnExists;
  try {
    const [rows] = await mysqlPool.query<RowDataPacket[]>(
      `SELECT 1 FROM information_schema.COLUMNS
       WHERE TABLE_SCHEMA = DATABASE()
         AND TABLE_NAME = 'firmware_files'
         AND COLUMN_NAME = 'install_guide'
       LIMIT 1`,
    );
    installGuideColumnExists = rows.length > 0;
    …
  } catch {
    // Gagal mendeteksi TIDAK di-cache, supaya percobaan berikutnya bisa benar.
    return false;
  }
  return installGuideColumnExists;
}
```

  `SELECT`, `INSERT`, dan `UPDATE` menyusun daftar kolomnya berdasarkan hasil ini. Tanpa kolom di DB, isian panduan per-item **diabaikan diam-diam** — bukan menggagalkan penyimpanan firmware, dan bukan mematikan listing publik.
- `SELECT_COLUMNS` (konstanta) → `BASE_SELECT_COLUMNS` + fungsi `selectColumns()`.
- **`LIST_ROW_CAP` dari M-05 tidak disentuh** — `LIMIT ${LIST_ROW_CAP}` masih persis seperti semula.

### `server/controllers/firmwareApiController.ts`

Dua baris, gaya validasi identik dengan `notes`:

```ts
install_guide: nullableStr(req.body.install_guide),
```

di `apiFirmwareAdminCreate` (`:165`) dan `apiFirmwareAdminUpdate` (`:262`). `nullableStr` sudah men-`trim()` dan mengubah string kosong jadi `null` — persis perilaku yang diinginkan untuk memicu fallback. Endpoint publik `apiFirmwarePublicList` otomatis ikut mengembalikan kolomnya karena memakai `listFirmwareFiles()` yang sama.

**Permission tidak disentuh** — `requireRole("admin","trainer")` yang sudah ada di `:54` sudah mencakup field baru ini.

---

## 3. Admin form — `client/src/admin/firmware/FirmwareForm.tsx`

Textarea **"Panduan Instalasi"** tepat di bawah **"Catatan"**, styling sama persis (hanya ditambah `font-mono leading-relaxed` supaya baris-per-langkah enak dibaca, mengikuti textarea di halaman PopupSettings).

Hint: *"Satu langkah per baris. Penomoran 1, 2, 3… dibuat otomatis — jangan ditulis manual. Kosongkan untuk memakai panduan global."*

State `installGuide`, di-load dari `d.install_guide ?? ""` saat edit, dikirim `fd.set("install_guide", installGuide.trim())`. `.trim()` hanya membuang whitespace di ujung — newline antar langkah tetap utuh.

Form ini dipakai untuk **tambah maupun edit** (`/admin/firmware/:brand/new` dan `/:id/edit`), jadi keduanya langsung dapat field ini.

---

## 4. Modal publik — `client/src/components/firmware/FirmwareDetailModal.tsx`

```ts
const perItem = parse(item.install_guide);
if (perItem.length) return perItem;
const global = parse(installGuide);
return global.length ? global : DUMMY_INSTALL_STEPS;
```

Prioritas: **per-item → global → DUMMY**. Parsing dan penomoran otomatis tidak berubah (split per baris, buang baris kosong, nomor dari `i + 1`). Disclaimer tidak disentuh sama sekali.

---

## 5. PopupSettings — `client/src/admin/firmware/PopupSettings.tsx`

- Label: "Panduan Instalasi" → **"Panduan Instalasi (default)"**.
- Hint ditambah: *"Dipakai HANYA untuk firmware yang belum punya panduannya sendiri; panduan per firmware diisi di form Edit Firmware dan selalu menang atas teks ini."*
- Subjudul halaman diperbaiki — sebelumnya menulis "dipakai pada popup detail SEMUA firmware", yang sekarang tidak lagi benar untuk panduan instalasi. Sekarang memisahkan: disclaimer berlaku untuk semua, panduan instalasi hanya default.

---

## 6. `PROJECT_SUMMARY.md`

Ditambah: kolom `firmware_files.install_guide`, rantai fallback tiga tingkat, catatan disclaimer tetap global, catatan deteksi kolom + keharusan restart, entri file migrasi di pohon `database/`, serta keterangan field baru di bagian rute publik & admin.

---

## 7. Urutan deploy & keamanan jeda

### Rekomendasi: **SQL DULU, baru kode** (sesuai rencana Anda)

| Tahap | Keadaan | Aman? |
|---|---|---|
| 1. Jalankan SQL di phpMyAdmin produksi | Kode lama masih jalan. Kode lama meng-SELECT daftar kolom secara eksplisit, jadi kolom baru sama sekali tidak terlihat olehnya. | ✅ Aman, nol dampak |
| 2. Deploy kode + restart server | Deteksi kolom jalan saat request pertama → kolom ketemu → panduan per-item langsung aktif | ✅ Aman |

**Tidak ada jeda berbahaya** di urutan ini.

### Kalau terbalik (kode dulu, SQL belakangan)

Juga **tidak crash** — itu gunanya deteksi kolom. Tapi ada satu jebakan yang harus Anda tahu:

> Hasil deteksi **di-cache di memori proses**. Kalau kode sudah jalan sebelum kolomnya ada, server terlanjur mencatat "kolom tidak ada". Setelah SQL dijalankan, server **wajib di-restart**; kalau tidak, field Panduan Instalasi di form admin tetap bisa diisi dan tombol Simpan tetap sukses, tapi isinya **dibuang diam-diam**.

Karena itu urutan **SQL dulu** tetap yang disarankan — menghilangkan jendela "simpan tapi hilang" sepenuhnya.

### Rollback

Kalau kode di-rollback tapi kolom sudah terlanjur ada: aman, kolomnya boleh dibiarkan. Kode lama tidak pernah menyebut kolom itu, dan `NULL` tidak mengganggu apa pun.

---

## 8. Verifikasi yang sudah & belum dilakukan

| | Status |
|---|---|
| `npm run check` (tsc) | ✅ exit 0 |
| `npm run build` | ✅ sukses (client + server bundle) |
| Migrasi dijalankan | ❌ **belum** — Anda jalankan manual di phpMyAdmin |
| Uji fungsional end-to-end (isi panduan → cek popup publik) | ❌ **belum** — MySQL/MariaDB lokal mati (`ERROR 2002 ... 10061`), jadi tidak ada DB untuk dites |
| Deploy | ❌ tidak dilakukan (batch mode) |

Logika fallback tiga tingkat lolos typecheck dan build, tapi **belum pernah dijalankan terhadap data nyata**. Uji pertama sebaiknya: isi panduan di satu firmware, kosongkan di firmware lain, lalu bandingkan kedua popup-nya.

---

## RANGKUMAN

- **Kolom baru `firmware_files.install_guide` TEXT NULL** — migrasi di `database/migrate_firmware_install_guide.sql`, idempotent (`ADD COLUMN IF NOT EXISTS`, khas MariaDB), lengkap dengan query verifikasi.
- **Koreksi penting:** nama tabelnya `firmware_files`, bukan `firmware` seperti di instruksi — kalau dipakai apa adanya akan error "table doesn't exist".
- **Rantai fallback sesuai permintaan:** panduan per-item → panduan global `firmware_popup_settings` → teks dummy hardcode. 20 firmware lama tidak berubah tampilannya.
- **Form Edit/Add Firmware** dapat textarea "Panduan Instalasi" persis di bawah "Catatan", dengan hint "kosongkan untuk memakai panduan global".
- **Halaman PopupSettings** sekarang menyebut panduan instalasinya sebagai **(default)** dan menjelaskan bahwa panduan per-firmware selalu menang.
- **Kode aman walau kolom belum ada** — `firmwareModel.ts` mendeteksi kolomnya lewat `information_schema` lalu men-cache hasilnya; tanpa kolom, isian panduan diabaikan diam-diam dan halaman firmware publik tetap hidup.
- **Urutan deploy: SQL dulu, baru kode.** Di urutan ini tidak ada jeda berbahaya sama sekali.
- **Jebakan kalau terbalik:** hasil deteksi di-cache, jadi kalau SQL dijalankan saat server sudah hidup, **server wajib di-restart** — kalau tidak, isian panduan tersimpan "sukses" tapi dibuang.
- **Tidak disentuh:** disclaimer (tetap global), dialog konfirmasi download, popup homepage, permission (admin+trainer sudah lolos guard lama), dan `LIST_ROW_CAP` dari M-05.
- **`npm run check` exit 0 dan `npm run build` sukses**, tapi **belum ada uji fungsional** — DB lokal mati, jadi rantai fallback belum pernah dijalankan dengan data nyata.
