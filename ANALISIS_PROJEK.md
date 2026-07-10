# ANALISIS PROJEK — DCSindo

> Laporan analisis menyeluruh untuk perencanaan fitur baru.
> Dibuat: 2026-07-08 · Branch: `mikrotik` · **Read-only** (tidak ada kode yang diubah).

Website katalog produk & training untuk **DCS Indonesia** (distributor perangkat jaringan: MikroTik, Ubiquiti/UniFi, V-SOL). Satu server Express melayani **REST API + React SPA + beberapa halaman SSR (EJS)**.

---

## 1. Struktur & Stack

### 1.1 Struktur folder utama

```
DCSindo/
├── client/                 # Frontend React (Vite root)
│   ├── index.html
│   ├── public/             # Aset statis (images, truefalse.json, firmware/*)
│   └── src/
│       ├── App.tsx         # Routing utama (wouter)
│       ├── main.tsx
│       ├── admin/          # ★ Dashboard admin inti (Login, Dashboard, NavBar, Users, dst)
│       ├── mikrotik/       # Modul brand MikroTik (admin/ + public/ + api.ts + types.ts)
│       ├── ubiquiti/       # Modul brand Ubiquiti (struktur sama)
│       ├── vsol/           # Modul brand V-SOL (struktur sama)
│       ├── pages/          # Halaman publik (home, collection, product, firmware, support…)
│       ├── components/     # Komponen bersama (layout, search-modal, ui/ = shadcn)
│       ├── hooks/ · lib/ · config/ · styles/
│
├── server/                 # Backend Express (TypeScript, dijalankan via tsx)
│   ├── index.ts            # Entry: app, session, middleware, error handler, listen
│   ├── routes.ts           # Aggregator: memanggil semua register*Routes()
│   ├── routes/             # Registrasi endpoint per domain
│   ├── controllers/        # Handler request
│   ├── models/             # Query MySQL (mysql2)
│   ├── middleware/         # Multer upload + requireRole (auth guard)
│   ├── config/             # mysqlPool.ts (koneksi DB) + db.ts (alias)
│   ├── auth/roles.ts       # Konstanta role
│   ├── mikrotikDcs/ · training/  # Definisi kategori
│   ├── validation/ · utils/ · types/
│   ├── static.ts · ejsViews.ts · vite.ts
│
├── shared/schema.ts        # ⚠️ Drizzle pgTable (Postgres) — TIDAK dipakai (dead code)
├── database/               # File .sql (skema + migrasi)
├── views/                  # Template EJS (admin, catalog, mikrotik, partials)
├── public/uploads/         # Target upload file (per brand/domain)
├── script/build.ts         # Skrip build kustom
├── package.json · vite.config.ts · tsconfig.json · .env
```

### 1.2 Framework / library (dari `package.json`)

| Area | Teknologi |
|---|---|
| **Frontend** | React 19, **wouter** (routing), **@tanstack/react-query** (tersedia), Tailwind CSS 4, Radix UI + shadcn, framer-motion, lucide-react, react-hook-form + zod |
| **Backend** | **Express 5**, express-session, **express-mysql-session** (session store), **mysql2** (driver DB), **multer** (upload), bcrypt (via userModel), ejs (SSR), passport (terpasang, minim dipakai) |
| **Build / tooling** | **Vite 7**, **tsx** (run TS langsung), esbuild, cross-env, TypeScript 5.6, drizzle-kit + drizzle-orm + `pg` ⚠️ (terpasang tapi **tidak dipakai**) |

> Catatan: `drizzle-orm`, `pg`, dan `shared/schema.ts` (pgTable/Postgres) adalah sisa arsitektur lama — aplikasi **berjalan penuh di MySQL**, bukan Postgres/Drizzle.

### 1.3 Cara menjalankan (`package.json` scripts)

| Script | Perintah | Fungsi |
|---|---|---|
| `npm run dev` | `cross-env NODE_ENV=development tsx server/index.ts` | Dev: Express + Vite (middleware). Port default **5000** (dari `.env`). |
| `npm run build` | `tsx script/build.ts` | Build produksi ke `dist/`. |
| `npm start` | `cross-env NODE_ENV=production node dist/index.cjs` | Jalankan hasil build (disarankan via PM2). |
| `npm run check` | `tsc` | Type-check. |
| `npm run db:push` | `drizzle-kit push` | ⚠️ Warisan Drizzle — tidak relevan dengan MySQL aktif. |

**Konfigurasi `.env`** (kunci): `DB_SOCKET` *atau* `DB_HOST`/`DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `SESSION_SECRET`, `PORT`, `ADMIN_USER`/`ADMIN_PASS` (seed admin awal), serta feature-flag `VITE_DISABLE_MIKROTIK_ROUTES` dll.

> ⚠️ **Catatan Windows:** `.env` saat ini memakai `DB_SOCKET=/var/run/mysqld/mysqld.sock` (socket Linux). Di Windows, hapus/komentari `DB_SOCKET` dan pakai `DB_HOST`/`DB_PORT` agar koneksi TCP. Tanpa MySQL, session store & fitur data tidak jalan.

---

## 2. Backend (Node/Express)

### 2.1 Alur registrasi

`server/index.ts` → `registerRoutes()` (`server/routes.ts`) memanggil, berurutan:
`registerEjsViewPaths` · `registerAuthRoutes` · `registerCatalogMultiBrandRoutes` · `registerMikrotikRoutes` · `registerMikrotikDcsRoutes` · `registerUbiquitiDcsRoutes` · `registerVsolDcsRoutes` · `registerTrainingRoutes`. Di dev, Vite catch-all dipasang **paling akhir** agar tidak menabrak route API.

### 2.2 Daftar endpoint

**Auth** — `server/routes/authRoutes.ts`
| Method | Path | Handler |
|---|---|---|
| POST | `/api/auth/login` | apiAuthLogin |
| POST | `/api/auth/logout` | apiAuthLogout |
| GET | `/api/auth/me` | apiAuthMe |
| GET | `/api/auth/users` | apiUsersList |
| POST | `/api/auth/users` | apiUsersCreate |
| PUT | `/api/auth/users/:id` | apiUsersUpdate |
| DELETE | `/api/auth/users/:id` | apiUsersDelete |

**Katalog multi-brand (legacy)** — `catalogMultiBrandRoutes.ts` · SSR + API + admin form
| Method | Path | Ket. |
|---|---|---|
| GET | `/brand/:slug` , `/brand/:slug/:id` | Halaman SSR (EJS) |
| GET | `/api/brands` | List brand |
| GET/POST/PUT/DELETE | `/api/products` , `/api/products/:id` | CRUD produk (upload field `gambar`) |
| GET/POST | `/admin/v2/products[...]` | Admin form SSR (list/new/edit/update/delete) |

**MikroTik (legacy per-item)** — `mikrotikRoutes.ts`
| Method | Path | Ket. |
|---|---|---|
| GET | `/uploads/*` | **Static** `public/uploads` (dipakai semua brand) |
| GET | `/mikrotik/:id` | Redirect ID numerik → `/mikrotik/shop/:id` |
| POST | `/admin/mikrotik[...]` | Admin form (create/update/delete, field `gambar`) |
| GET/POST/PUT/DELETE | `/api/mikrotik[/:id]` | CRUD API |

**MikroTik DCS (aktif)** — `mikrotikDcsRoutes.ts` · base `/api/mikrotik-dcs`
| Method | Path |
|---|---|
| POST/POST/GET | `/auth/login` · `/auth/logout` · `/auth/me` |
| GET | `/admin/activity-log` |
| GET | `/public/products` · `/public/products/:id` |
| GET | `/meta/categories` |
| GET | `/admin/products` · `/admin/products/:id` |
| POST | `/admin/products/reorder` |
| POST/PUT/DELETE | `/admin/products[/:id]` (multipart upload) |

**Ubiquiti DCS** — `ubiquitiDcsRoutes.ts` · base `/api/ubiquiti-dcs` — **pola endpoint identik** MikroTik DCS (auth/me, public, meta/categories, admin CRUD + reorder).
**V-SOL DCS** — `vsolDcsRoutes.ts` · base `/api/vsol-dcs` — **pola endpoint identik**.

**Training** — `trainingRoutes.ts` · base `/api/training`
| Method | Path | Ket. |
|---|---|---|
| GET | `/sessions` · `/sessions/:id` · `/meta` · `/:id/availability` | Publik |
| POST | `/:id/register` | Pendaftaran publik (tanpa login) |
| GET/PUT | `/registrations` · `/registrations/:id/status` | Kelola peserta |
| GET/POST/PUT/DELETE | `/admin/sessions[...]` | CRUD sesi (upload thumbnail/QR) |
| GET/POST/DELETE | `/admin/sessions/:id/gallery` · `/admin/gallery/:imageId` | Galeri dokumentasi |

### 2.3 Struktur route / controller / model

Pola berlapis konsisten: **routes/** (daftar endpoint + pasang middleware) → **controllers/** (validasi + orkestrasi) → **models/** (query MySQL mentah, `mysql2` named placeholders). Tiap brand DCS punya trio: `xxxDcsRoutes.ts` + `xxxDcsApiController.ts` + `xxxDcsProductModel.ts`.

### 2.4 Koneksi database

- **DB:** MySQL via `mysql2/promise`. Config: **`server/config/mysqlPool.ts`** (di-alias oleh `server/config/db.ts`).
- **Logika koneksi:** jika `DB_SOCKET` di-set → **UNIX socket** (server Linux); jika tidak → **TCP** `DB_HOST:DB_PORT` (Windows/remote).
- **Env:** `DB_SOCKET`, `DB_USER` (wajib), `DB_PASSWORD`, `DB_NAME` (wajib), `DB_HOST` (default `localhost`), `DB_PORT` (default `3306`).
- **Pool:** `connectionLimit: 10`, `namedPlaceholders: true`.
- **Verifikasi startup:** `verifyMysqlOnStartup()` ping pool + pesan error ramah (ER_BAD_DB_ERROR / ECONNREFUSED / ER_ACCESS_DENIED_ERROR).
- **Session store:** `express-mysql-session` menyimpan sesi ke tabel `sessions` MySQL (`createDatabaseTable: true`), **fallback ke MemoryStore** bila config DB tak lengkap. Cookie `mikrotikdcs.sid`, TTL 7 hari.

### 2.5 Upload file — **ya, memakai Multer** (disk storage)

Middleware di `server/middleware/upload*.ts`, output ke `public/uploads/<domain>/`, diakses publik via `/uploads/...`. Nama file: `{timestamp}-{originalname}.{ext}`.

| Middleware | Folder | Field | Limit | Tipe |
|---|---|---|---|---|
| `uploadCatalogProduct.ts` | `products/` | `gambar` | 5 MB | Gambar |
| `uploadMikrotik.ts` | `mikrotik/` | `gambar` | 5 MB | Gambar |
| `uploadMikrotikDcs.ts` | `mikrotik-dcs/` | `main_image`, `gallery`(30) | 8 MB | Gambar |
| `uploadUbiquitiDcs.ts` | `ubiquiti-dcs/` | `main_image`, `gallery`, `overview_images`, `overview_videos`, `in_the_box` | 50 MB | Gambar **+ Video** |
| `uploadVsolDcs.ts` | `vsol-dcs/` | `main_image`, `gallery`, `in_the_box` | 20 MB | Gambar |
| `uploadTraining.ts` | `training/` | `thumbnail`, `qr_image`, `images`(galeri) | 5–10 MB | Gambar |

> Belum ada middleware upload untuk file **firmware** (.bin/.img/.zip) — relevan untuk fitur baru (lihat §6).

---

## 3. Database

DB: **MySQL** (utf8mb4). Total ± **24 tabel** dalam beberapa subsistem. Beberapa dibuat otomatis dari kode (`ensureTable()`), beberapa dari file `.sql`, dan **beberapa DDL-nya belum ada di folder `database/`** (risiko deploy).

### 3.1 Cara produk & brand disimpan — **4 sistem terpisah**

**Sistem 1 — Katalog multi-brand (legacy).**
- `brands` (id, nama_brand, slug, created_at) — **satu-satunya tabel yang memakai konsep "brand".**
- `products` (id, **brand_id → brands.id**, nama_produk, deskripsi, spesifikasi, gambar, created_at).
- Relasi: `products.brand_id` → `brands.id` (1:N). Dipakai route `/brand/:slug`.
- ⚠️ DDL tidak ada di `database/` (diasumsikan sudah ada di DB).

**Sistem 2 — MikroTik DCS (aktif).** Tabel **berdiri sendiri, tidak terhubung ke `brands`.**
- `mikrotik_dcs_products` — kolom: `id`, `nama_produk`, `sku`(UNIQUE), `category`, `sort_order`, `deskripsi`, `bullet_points`(JSON, maks 9), `main_image`, `video_url/title/description`, `specifications`(JSON), `created_at`, `updated_at`.
- `mikrotik_dcs_product_gallery_images` — `id`, `product_id`(FK CASCADE), `image_path`, `sort_order`.
- `mikrotik_dcs_product_technical_items` — `id`, `product_id`(FK CASCADE), `title`, `content`, `sort_order`.
- DDL: `database/mikrotik_dcs_store.sql` + migrasi (`..._add_video_specs.sql`, `..._add_technical_items.sql`).

**Sistem 3 — Ubiquiti DCS (aktif).** Berdiri sendiri; paling kaya relasi.
- `ubiquiti_dcs_products` (+ `subfilter`, `is_new`) dan tabel anak (semua FK `product_id` CASCADE): `..._product_gallery`, `..._overview_images`, `..._overview_videos`, `..._technical_specs` (section_title/label/value/is_check), `..._in_the_box`, `..._addons` (self-join `addon_product_id` → produk lain).
- ⚠️ **DDL belum ada** di folder `database/` (hanya tersirat dari query model).

**Sistem 4 — V-SOL DCS (aktif).** Berdiri sendiri.
- `vsol_dcs_products` (mirip Ubiquiti: `subfilter`, `is_new`, `bullet_points` JSON) + `vsol_dcs_product_gallery`, `vsol_dcs_technical_specs` (pasca-migrasi: `item`/`sub_item`/`value`), `vsol_dcs_in_the_box`, `vsol_dcs_ordering_info`.
- DDL: `database/vsol_dcs_store.sql` + `migrate_vsol_specs_ordering.sql`.

### 3.2 Autentikasi & Training

- `users` — `id`, `username`(UNIQUE), `password_hash`(bcrypt), `role`(admin/trainer/sales), `name`, `is_active`, timestamps. **Auto-created** + seed admin dari `.env`.
- `admin_activity_log` — mencatat **setiap** percobaan login: `attempted_username`, `success`, `ip_address`, `user_agent`, `created_at`. Auto-created.
- `sessions` — dibuat otomatis oleh `express-mysql-session`.
- **Training:** `training_sessions` (⚠️ DDL hilang), `training_syllabus` (⚠️ DDL hilang), `training_gallery` (`migrate_training_gallery.sql`), `training_registrations` (auto-created).

> **Peringatan konsistensi:** DDL untuk `ubiquiti_dcs_*`, `training_sessions`, `training_syllabus`, `brands`, `products` **belum tersimpan** di `database/`. Sebaiknya dilengkapi agar deploy ke DB baru reproducible.

---

## 4. Frontend Dashboard Admin

### 4.1 Struktur halaman admin

Admin inti di **`client/src/admin/`**: `Login.tsx`, `Dashboard.tsx` (kartu brand + jumlah produk), `NavBar.tsx` (navigasi), `RequireRole.tsx` (proteksi), `Users.tsx`, `ActivityLog.tsx`, `Peserta.tsx`, `session.ts`, `authGate.ts`, dan `training/` (Dashboard + TrainingForm).

Admin **per brand** ada di modulnya masing-masing dengan struktur identik:
`client/src/{mikrotik,ubiquiti,vsol}/admin/` → `Dashboard.tsx` (list + drag-reorder + filter + CRUD), `ProductForm.tsx` (create/edit), `ProtectedRoute.tsx` (bungkus `RequireRole` admin-only).

Route admin (di `App.tsx`, wouter): `/admin/login`, `/admin`, `/admin/activity-log`, `/admin/users`, `/admin/peserta`, `/admin/{mikrotik,ubiquiti,vsol}` (+`/new`, `/:id/edit`), `/admin/training` (+`/new`, `/:id/edit`).

### 4.2 Pola menambah menu/halaman admin baru

**Tidak ada sidebar** — navigasi berupa **top navbar horizontal** dengan visibilitas berbasis role. Sumbernya array `TABS` di **`client/src/admin/NavBar.tsx`**:

```ts
const TABS: Tab[] = [
  { label: "DCS",      href: "/admin",          roles: ["admin"] },
  { label: "MikroTik", href: "/admin/mikrotik", roles: ["admin"] },
  { label: "Ubiquiti", href: "/admin/ubiquiti", roles: ["admin"] },
  { label: "V-SOL",    href: "/admin/vsol",     roles: ["admin"] },
  { label: "Training", href: "/admin/training", roles: ["admin","trainer"] },
  { label: "Peserta",  href: "/admin/peserta",  roles: ["admin","trainer","sales"] },
  { label: "Users",    href: "/admin/users",    roles: ["admin"] },
];
```

**Langkah menambah halaman admin baru (edit 3–4 tempat):**
1. **Komponen** baru di `client/src/admin/` (atau modul brand), dibungkus `RequireRole`.
2. **Route** di `client/src/App.tsx`: `<Route path="/admin/xxx" component={Xxx} />`.
3. **Tab** di `NavBar.tsx` (`TABS`): `{ label, href, roles }`.
4. **Backend** (bila perlu data): tambah `xxxRoutes.ts` + controller + model, daftarkan di `server/routes.ts`.

### 4.3 Contoh alur CRUD lengkap — **MikroTik DCS Product** (referensi pola)

```
UI: client/src/mikrotik/admin/ProductForm.tsx
  → susun FormData (field + JSON.stringify specs/bullets/technical_items + file)
API client: client/src/mikrotik/api.ts  → fetch(..., { credentials: "include" })
  POST /api/mikrotik-dcs/admin/products         (create)
  PUT  /api/mikrotik-dcs/admin/products/:id     (edit)
Middleware: uploadMikrotikDcs (Multer) → requireRole("admin")
Controller: mikrotikDcsApiController.ts (apiMikrotikDcsAdminCreate/Update/Delete)
  → validasi kategori kanonik, hapus file lama saat replace
Model: mikrotikDcsProductModel.ts (transaksi)
  → INSERT/UPDATE mikrotik_dcs_products
  → sync mikrotik_dcs_product_gallery_images & _technical_items
Response: { ok: true, data: { id } }  → UI redirect ke /admin/mikrotik
```

- **List:** `GET /admin/products?category=&sort=custom` → tabel (thumbnail, nama, SKU, kategori, tombol Edit/Delete).
- **Reorder:** drag-drop → `POST /admin/products/reorder` (JSON `orderedIds` per kategori) → `sort_order`.
- **Delete:** `DELETE /admin/products/:id` → hapus baris (CASCADE ke anak) + hapus file dari disk.
- **Teknik client:** `fetch` biasa + `credentials:"include"` (cookie sesi), `FormData` untuk multipart (tanpa set `Content-Type` manual). react-query tersedia tapi modul brand memakai fetch langsung.

---

## 5. Autentikasi

**Model:** session cookie server-side (bukan JWT). Cookie `mikrotikdcs.sid` (httpOnly, sameSite lax), disimpan di MySQL (`express-mysql-session`).

**Alur:**
1. **Login** — `Login.tsx` POST `/api/auth/login` (`credentials:"include"`). Controller cek `users` + `bcrypt.compare`. Jika sah → set `req.session.userId/username/role` (+ `mikrotikDcsAdmin=true` untuk kompatibilitas) & catat sukses ke `admin_activity_log`; jika gagal → 401 + catat gagal.
2. **Redirect per role** via `roleHome()`: admin→`/admin`, trainer→`/admin/training`, sales→`/admin/peserta`.
3. **Cek sesi** — `GET /api/auth/me` → `{ authed, user:{ username, role } }`. Frontend tak menyimpan apa pun di localStorage.
4. **Proteksi route (client)** — `client/src/admin/RequireRole.tsx`: saat mount, panggil `fetchMe()`; bila belum login → `/admin/login`, bila role tak cocok → `roleHome(role)`. Render diblok sampai cek selesai.
5. **Proteksi endpoint (server)** — **`server/middleware/requireRole.ts`**. Setiap handler admin memanggil `if (!requireRole("admin")(req,res)) return;` → 401 (belum login) / 403 (role salah). **Semua endpoint admin (MikroTik/Ubiquiti/V-SOL/Training/Users) terlindungi di server**, bukan hanya di UI.
6. **Logout** — `POST /api/auth/logout` → `req.session.destroy()`.

**Role & tabel:** `admin`, `trainer`, `sales` (didefinisikan di `server/auth/roles.ts`). Audit login di `admin_activity_log` → ditampilkan di `/admin/activity-log`.

---

## 6. Rekomendasi — Menambahkan Fitur "Firmware"

### 6.1 Kondisi saat ini

- **Frontend:** `client/src/pages/firmware.tsx` sudah ada — halaman **statis**, data firmware **hardcoded** (tab Ubiquiti/MikroTik/V-SOL, 5 entri; sebagian link eksternal). Route `/firmware` aktif di `App.tsx` **tetapi tidak tertaut di menu/navigasi utama** (hanya via URL langsung).
- **Backend:** **nol** — tidak ada route, controller, model, tabel DB, maupun middleware upload untuk firmware.
- **Storage:** file firmware Ubiquiti mengacu ke `/firmware/...` padahal folder `public/firmware/` **belum dibuat**.
- **Relasi produk:** firmware saat ini **tidak** terhubung ke produk/brand mana pun.

### 6.2 Rekomendasi penempatan — **ikuti pola "DCS store" per brand**

Pola brand DCS (MikroTik/Ubiquiti/V-SOL) adalah cetak biru paling konsisten untuk fitur baru yang punya admin + upload + katalog publik. Terapkan hal yang sama untuk Firmware:

**Backend** (cermin `*DcsRoutes/Controller/Model` + `upload*`):
1. **Tabel DB** `firmware_files` + file DDL `database/firmware_store.sql`. Kolom saran: `id`, `brand`(mikrotik/ubiquiti/vsol), `product_name`, `model_sku`(opsional, bisa relasi longgar ke `*_dcs_products.sku`), `version`, `release_date`, `file_path`, `file_size`, `checksum`(opsional), `notes`, `is_external`+`external_url`(untuk link mikrotik.com/GDrive), `sort_order`, `created_at`, `updated_at`.
2. **Model** `server/models/firmwareModel.ts` (query MySQL, pola sama).
3. **Controller** `server/controllers/firmwareApiController.ts`: `public/list`, `admin/list`, `admin/create|update|delete`, semua admin dijaga `requireRole("admin")`.
4. **Routes** `server/routes/firmwareRoutes.ts`, base `/api/firmware`; daftarkan di `server/routes.ts`.
5. **Upload** `server/middleware/uploadFirmware.ts` (Multer) → `public/uploads/firmware/`. **Perlu penyesuaian:** whitelist ekstensi biner (`.bin/.img/.zip/.npk/.tar`) via `fileFilter`, dan **limit ukuran besar** (mis. 200–500 MB) karena firmware ≠ gambar.

**Frontend Admin** (cermin `client/src/{brand}/admin/`):
6. Buat `client/src/admin/firmware/Dashboard.tsx` (list + CRUD) & `FirmwareForm.tsx` (upload/link), bungkus `RequireRole` admin.
7. Tambah route di `App.tsx`: `/admin/firmware` (+`/new`, `/:id/edit`).
8. Tambah tab di `NavBar.tsx`: `{ label: "Firmware", href: "/admin/firmware", roles: ["admin"] }`.

**Frontend Publik:**
9. Ubah `client/src/pages/firmware.tsx` agar `fetch('/api/firmware/public/list')` (react-query/fetch) menggantikan data hardcoded — struktur tab brand dipertahankan.
10. Tautkan `/firmware` di navigasi utama (`components/layout.tsx`) + footer agar dapat ditemukan.
11. Buat folder `public/uploads/firmware/` (upload) dan/atau `client/public/firmware/` (aset statis existing).

### 6.3 Ringkasan berkas yang disentuh (checklist pola)

| Lapisan | Berkas baru/edit |
|---|---|
| DB | `database/firmware_store.sql` (+ jalankan di MySQL) |
| Model | `server/models/firmwareModel.ts` |
| Controller | `server/controllers/firmwareApiController.ts` |
| Routes | `server/routes/firmwareRoutes.ts` + daftar di `server/routes.ts` |
| Upload | `server/middleware/uploadFirmware.ts` (ext biner + limit besar) |
| Admin UI | `client/src/admin/firmware/{Dashboard,FirmwareForm}.tsx` |
| Routing | `client/src/App.tsx` (route `/admin/firmware*`) |
| Navigasi | `client/src/admin/NavBar.tsx` (tab) + `components/layout.tsx` (link publik) |
| Publik | `client/src/pages/firmware.tsx` (ganti data statis → API) |

> **Keputusan desain utama:** apakah firmware **berdiri sendiri** (tabel `firmware_files` dengan kolom `brand`, seperti rekomendasi di atas — paling sederhana & sesuai halaman publik saat ini) **atau** ditautkan sebagai **anak produk** (`product_id` → `*_dcs_products`, mirip pola gallery/technical_items). Untuk kebutuhan "download center per brand", **tabel berdiri sendiri** lebih pas dan minim perubahan pada 3 sistem produk yang sudah ada.

---

## Lampiran — Temuan penting

- **DB dialect:** MySQL murni. `drizzle-orm`/`pg`/`shared/schema.ts`(pgTable) = dead code.
- **DDL belum lengkap:** `ubiquiti_dcs_*`, `training_sessions`, `training_syllabus`, `brands`, `products` tidak punya file `.sql` — lengkapi untuk reproducibility.
- **`.env` Windows:** ganti `DB_SOCKET` → `DB_HOST`/`DB_PORT` agar server + session store MySQL jalan.
- **Legacy:** `produk_mikrotik` (model ada, route tak dipakai) & katalog `/admin/v2` = warisan; fokus pengembangan ada di sistem DCS per brand.
