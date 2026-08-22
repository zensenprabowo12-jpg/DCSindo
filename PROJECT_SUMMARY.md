# PROJECT_SUMMARY — DCS Indonesia (dcsindo)

> Dokumen acuan teknis untuk pengembangan lanjutan, khususnya **sistem 3 role (admin / trainer / sales)** dan **sistem training lengkap (pendaftaran publik, laporan, dokumentasi)**.
> Toko/katalog multi-brand networking: **MikroTik + Ubiquiti + V-SOL**, plus modul **Training**.

---

## 1. STRUKTUR FOLDER

Monorepo satu proses: **client (React/Vite)** + **server (Express)** dalam satu repo, dibangun jadi satu bundle.

```
DCSindo/
├── client/                      # Frontend React + Vite (SPA)
│   └── src/
│       ├── App.tsx              # ⭐ Router utama (wouter) — semua route publik & /admin
│       ├── main.tsx             # Entry React
│       ├── admin/               # ⭐ Panel admin "induk" (lintas brand)
│       │   ├── Login.tsx        #   Form login bersama (semua brand)
│       │   ├── Dashboard.tsx    #   Landing /admin — pilih brand + entry Activity Log
│       │   ├── NavBar.tsx       #   Tab navigasi admin (DCS/MikroTik/Ubiquiti/Training/V-SOL)
│       │   ├── ActivityLog.tsx  #   Tampilan riwayat percobaan login
│       │   ├── authGate.ts      #   Gate auth in-memory (boolean di RAM browser)
│       │   └── training/        #   Dashboard.tsx + TrainingForm.tsx (CRUD training)
│       ├── mikrotik/            # Brand MikroTik
│       │   ├── admin/           #   Dashboard.tsx, ProductForm.tsx, ProtectedRoute.tsx
│       │   ├── public/          #   StoreCatalog, StoreProductDetail, CategoryCatalogPage…
│       │   ├── landing/         #   Komponen landing page MikroTik
│       │   ├── api.ts           #   ⭐ Wrapper fetch ke /api/mikrotik-dcs/* (juga login/logout/me)
│       │   └── types.ts
│       ├── ubiquiti/            # Brand Ubiquiti (admin/ + public/ + api.ts) — pola sama
│       ├── vsol/                # Brand V-SOL  (admin/ + public/ + api.ts) — pola sama
│       ├── pages/               # Halaman umum: homepage/, support/, training/, cart, firmware…
│       ├── components/ui/       # Komponen shadcn/ui (button, dialog, table, dll)
│       ├── hooks/               # useTrueFalse (feature flag runtime), use-mobile…
│       ├── lib/                 # queryClient (react-query), util produk
│       └── config/, styles/, brands/
│
├── server/                      # Backend Express (TypeScript)
│   ├── index.ts                 # ⭐ Bootstrap: express + session middleware + listen(PORT)
│   ├── routes.ts                # ⭐ registerRoutes() — pasang semua register*Routes()
│   ├── vite.ts                  # Dev: Vite sebagai middleware
│   ├── static.ts                # Prod: serve dist/public
│   ├── ejsViews.ts              # Path view EJS (SSR katalog brand lama)
│   ├── routes/                  # Definisi endpoint per modul
│   │   ├── mikrotikDcsRoutes.ts #   ⭐ /api/mikrotik-dcs/* — auth + CRUD MikroTik
│   │   ├── ubiquitiDcsRoutes.ts #   /api/ubiquiti-dcs/*
│   │   ├── vsolDcsRoutes.ts     #   /api/vsol-dcs/*
│   │   ├── trainingRoutes.ts    #   /api/training/*
│   │   ├── mikrotikRoutes.ts    #   Redirect /mikrotik + serve /uploads statis
│   │   └── catalogMultiBrandRoutes.ts # Katalog lama (tabel brands+products, SSR + /admin/v2)
│   ├── controllers/             # Logika request → panggil model
│   │   ├── mikrotikDcsApiController.ts # ⭐ LOGIN/LOGOUT/ME ada di sini + CRUD MikroTik + activity log
│   │   ├── ubiquitiDcsApiController.ts
│   │   ├── vsolDcsApiController.ts
│   │   ├── trainingApiController.ts
│   │   └── catalog*Controller.ts        # Katalog multi-brand lama
│   ├── models/                  # Query MySQL (mysql2)
│   │   ├── mikrotikDcsProductModel.ts
│   │   ├── ubiquitiDcsProductModel.ts
│   │   ├── vsolDcsProductModel.ts
│   │   ├── trainingModel.ts             # ⭐ training_sessions + training_syllabus (transaksi)
│   │   ├── trainingGalleryModel.ts      # training_gallery
│   │   ├── adminActivityLogModel.ts     # ⭐ admin_activity_log (AUTO-CREATE via ensureTable)
│   │   └── brandModel.ts, catalogProductModel.ts
│   ├── middleware/              # uploadMikrotikDcs.ts, uploadUbiquitiDcs.ts, uploadVsolDcs.ts,
│   │   │                        #   uploadTraining.ts, uploadCatalogProduct.ts (semua multer)
│   ├── config/
│   │   ├── mysqlPool.ts         # ⭐ Pool mysql2 (socket ATAU TCP), namedPlaceholders
│   │   └── db.ts                # Re-export pool
│   ├── training/categories.ts   # Konstanta brand/format/status + computeStatus()
│   ├── mikrotikDcs/categories.ts# Konstanta kategori MikroTik
│   ├── types/express-session.d.ts # ⭐ Tipe SessionData (tempat menambah field role nanti)
│   ├── validation/             # Skema zod produk
│   └── utils/
│
├── database/                    # File .sql manual (dijalankan di phpMyAdmin)
│   ├── mikrotik_dcs_store.sql
│   ├── vsol_dcs_store.sql
│   ├── migrate_training_gallery.sql
│   ├── migrate_training_qr_customlink.sql
│   ├── migrate_mikrotik_dcs_add_*.sql
│   └── migrate_vsol_specs_ordering.sql
│
├── public/uploads/              # (Di server produksi) foto produk hasil upload admin
├── script/build.ts              # Build esbuild (server) + vite (client)
├── .env                         # Konfigurasi (DB, SESSION_SECRET, ADMIN_USER/PASS, feature flags)
├── env.example                  # Contoh .env
└── dist/                        # Hasil build: index.cjs (server) + public/ (client)
```

⭐ = file paling relevan untuk pengembangan auth/role & training.

---

## 2. STACK & ARSITEKTUR

### Teknologi
| Layer | Teknologi |
|---|---|
| Frontend | React 19 + TypeScript + **Vite**, routing **wouter**, **Tailwind v4**, komponen **shadcn/ui** (Radix), data fetching **@tanstack/react-query**, animasi framer-motion |
| Backend | **Express 5** (TypeScript, dijalankan via `tsx`), **express-session** + **memorystore** |
| Database | **MySQL** via **mysql2/promise** (pool, `namedPlaceholders: true`) |
| Upload | **multer** (multipart/form-data) |
| Build | dev pakai `tsx`; prod pakai **esbuild** (server → `dist/index.cjs`) + **vite build** (client → `dist/public`) |

> Catatan: `package.json` masih membawa dependency warisan yang **belum dipakai** di alur utama: `drizzle-orm`, `pg`, `connect-pg-simple`, `passport`, `passport-local`. Auth saat ini **tidak** memakai passport. (Berguna nanti: `passport`/`connect-pg-simple` bisa dipakai bila ingin upgrade auth.)

### Cara terhubung (satu proses melayani semua)
- **Satu** server Express melayani **API (`/api/...`)** + **SPA** + sebagian **SSR/EJS** (katalog brand lama).
- Frontend memanggil API via `fetch` dengan **`credentials: "include"`** → cookie session (`mikrotikdcs.sid`) ikut terkirim. Ini wajib agar auth jalan.
- Respons API selalu JSON berbentuk `{ ok, data?, message? }`.

### Alur request
```
Browser (fetch /api/...)
  → server/index.ts            (express.json, session, logger)
  → server/routes.ts           (registerRoutes)
  → routes/<modul>.ts          (definisi METHOD + path, pasang multer bila perlu)
  → controllers/<modul>.ts     (guard auth → validasi → panggil model → res.json)
  → models/<modul>.ts          (query MySQL via mysqlPool)
  → MySQL
```

### Dev vs Prod
| | Dev | Prod |
|---|---|---|
| Jalankan | `npm run dev` (`tsx server/index.ts`, `NODE_ENV=development`) | `npm run build` lalu `npm start` (`node dist/index.cjs`, `NODE_ENV=production`) |
| Client | Vite middleware (HMR) via `server/vite.ts` | File statis `dist/public` via `server/static.ts` |
| Port | `PORT` dari `.env` (default 8080), bind `0.0.0.0` | sama |
| ⚠️ | `npm run dev:client` (Vite saja, port 8080) **tidak** menjalankan backend → `/api/*` balas HTML; api.ts mendeteksi & melempar error yang jelas | — |

---

## 3. DATABASE

**Database tunggal MySQL** (mis. `dcsindo`). Tidak ada ORM aktif; query SQL ditulis manual di model.

### Cara tabel dibuat (PENTING — dua pola berbeda)
1. **Manual via file `.sql`** di folder `database/` → dijalankan sendiri lewat phpMyAdmin. Berlaku untuk **semua tabel produk & training**.
2. **Auto-create via `ensureTable()`** dalam kode → hanya **`admin_activity_log`** (`adminActivityLogModel.ts`). Tabel dibuat otomatis (`CREATE TABLE IF NOT EXISTS`) saat insert/select pertama. **Pola ini disarankan untuk tabel baru** (mis. `users`) agar deploy tidak perlu langkah SQL manual.

> ⚠️ Tabel **`training_sessions`** dan **`training_syllabus`** dipakai kode (`trainingModel.ts`) tetapi **DDL-nya tidak ada di folder `database/`** (kemungkinan dibuat manual di server). Hanya tabel turunannya — `training_gallery` & kolom QR/custom link — yang punya file migrasi. Perlu diperhatikan saat setup environment baru.

### Daftar tabel & kolom penting

**Produk MikroTik** — `mikrotik_dcs_products`
`id`, `nama_produk`, `sku` (UNIQUE), `category`, `sort_order`, `deskripsi`, `bullet_points` (LONGTEXT berisi JSON), `main_image`, `created_at`, `updated_at`
+ `mikrotik_dcs_product_gallery_images` (`product_id` FK CASCADE, `image_path`, `sort_order`)
+ `mikrotik_dcs_product_technical_items` (migrasi terpisah)

**Produk V-SOL** — `vsol_dcs_products`
`id`, `nama_produk`, `sku`, `category`, `subfilter`, `deskripsi`, `bullet_points` (JSON), `main_image`, `is_new`, `sort_order`, timestamps
+ `vsol_dcs_product_gallery`, `vsol_dcs_technical_specs` (`section_title`, `label`, `value`, `is_check`, `sort_order`), `vsol_dcs_in_the_box`, `vsol_dcs_ordering_info` — semua FK CASCADE ke produk.

**Produk Ubiquiti** — `ubiquiti_dcs_*` (pola sama: products + gallery + specs).

**Katalog multi-brand lama** — `brands` + `products` (dipakai modul `/brand/*` & `/admin/v2`, SSR EJS). Terpisah dari tabel `*_dcs_*` di atas.

**Training** — `training_sessions`
`id`, `title`, `description`, `brand` (MikroTik/Ubiquiti/V-SOL/General), `format` (Online/Offline/Hybrid), `location`, `start_datetime`, `end_datetime`, `duration_hours`, `capacity`, `price`, `is_free`, `has_certificate`, `has_hands_on_lab`, `instructor_name`, `instructor_contact`, `thumbnail`, `qr_image`, `custom_link_url`, `custom_link_label`, timestamps.
- **`status` TIDAK disimpan** — dihitung runtime via `computeStatus(start,end)` → Upcoming/Ongoing/Completed.
+ `training_syllabus` (`training_id`, `item`, `sort_order`) — ditulis ulang penuh tiap update (DELETE + INSERT, dalam transaksi).
+ `training_gallery` (`training_id` FK CASCADE, `image_path`, `caption`, `sort_order`) — foto dokumentasi.

**Activity log** — `admin_activity_log` (AUTO-CREATE)
`id`, `attempted_username` VARCHAR(190), `success` TINYINT(1), `ip_address` VARCHAR(64), `user_agent` VARCHAR(512), `created_at` TIMESTAMP. Mencatat **setiap** percobaan login (sukses & gagal) + IP (sadar `X-Forwarded-For`).

> 🔴 **Belum ada tabel `users` / `roles`.** Identitas admin sepenuhnya dari `.env` + kode. Ini titik utama yang harus ditambah untuk sistem 3 role.

---

## 4. SISTEM AUTH (kondisi sekarang)

### Login: single admin, kredensial dari `.env` + plaintext
- File: `server/controllers/mikrotikDcsApiController.ts`
  ```ts
  const ADMIN_USER = process.env.ADMIN_USER?.trim() || "admin";
  const ADMIN_PASS = process.env.ADMIN_PASS?.trim(); // tidak ada default — seed dilewati bila kosong
  // login = perbandingan string langsung, TANPA hashing:
  const success = username === ADMIN_USER && password === ADMIN_PASS;
  ```
- `.env`: `ADMIN_USER`, `ADMIN_PASS` (fallback hard-coded di kode bila tak diset).
- Endpoint auth standar ada di modul **netral** `/api/auth` (dipakai semua brand):
  `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`.
- Tidak ada lagi endpoint auth per-brand. `GET .../auth/me` milik MikroTik,
  Ubiquiti, dan V-SOL dihapus di L-01; alias `POST /api/mikrotik-dcs/auth/login`
  dan `.../auth/logout` dihapus di Step B setelah access log 30 hari menunjukkan
  nol permintaan. `/api/auth/login` kini satu-satunya pintu login.

### Sesi: express-session + memorystore (RAM)
- Konfigurasi di `server/index.ts`:
  ```ts
  session({
    name: "mikrotikdcs.sid",
    secret: process.env.SESSION_SECRET ?? "…dev…",
    resave: false, saveUninitialized: false,
    store: new MemoryStore({ checkPeriod: 86_400_000 }),   // RAM, bukan DB
    cookie: { maxAge: 7 hari, httpOnly: true, sameSite: "lax" },
  })
  ```
- **Bentuk sesi sekarang** (`server/types/express-session.d.ts`): satu boolean.
  ```ts
  interface SessionData { mikrotikDcsAdmin?: boolean }
  ```
- Login sukses → `req.session.mikrotikDcsAdmin = true`. Logout → `req.session.destroy()`.

### Guard backend (terpusat, pola seragam)
Tiap controller punya helper kecil dengan logika identik (cuma beda nama):
```ts
function requireAdminSession(req, res): boolean {
  if (req.session.mikrotikDcsAdmin) return true;
  res.status(401).json({ ok: false, message: "Perlu login admin." });
  return false;
}
```
- `requireMikrotikDcsSession` (mikrotik), `requireAdminSession` (ubiquiti, vsol), `requireAdmin` (training).
- 🔑 **Satu flag sesi untuk SEMUA brand & training** — login sekali = akses penuh ke semua. Tidak ada pemisahan hak akses.

### Frontend: dua mekanisme (tidak konsisten)
1. **`authGate.ts`** — variabel boolean `authedThisSession` di RAM browser. **Reset tiap refresh**. Dipakai `Dashboard.tsx` (`/admin`).
2. **`ProtectedRoute.tsx`** (versi mikrotik/ubiquiti/vsol/firmware) — sekarang pembungkus tipis `admin/RequireRole.tsx`, yang lewat `admin/session.ts` memanggil `GET /api/auth/me`; kalau `authed=false` → redirect `/admin/login`. Ini sumber kebenaran sebenarnya (cek cookie server).

> ⚠️ Karena `authGate` reset saat refresh, refresh halaman di `/admin` bisa melempar user ke login walau cookie session masih valid.

---

## 5. FITUR YANG SUDAH ADA

### Publik
- **Homepage** per brand: `/` (utama), `/ubiquiti`, `/vsol`, landing `/mikrotik`.
- **Katalog produk per brand** (`*_dcs_*`): list + filter kategori + sort + halaman detail produk (galeri, spesifikasi, video, technical accordion).
  - MikroTik: `/mikrotik/shop`, `/mikrotik/categories/:category`, detail `/mikrotik/shop/:id`.
  - Ubiquiti: `/ubiquiti/shop`, detail `/ubiquiti/shop/:id`.
  - V-SOL: `/vsol/shop`, detail `/vsol/shop/:id`.
- **Katalog multi-brand lama (SSR/EJS)**: `/brand/:slug`, `/brand/:slug/:id` (tabel `brands`+`products`).
- **Training (publik)**: `/training` (list), `/training/:id` (detail — syllabus, info instruktur, QR, custom link, galeri dokumentasi).
- **Support**: `/support`, `/support/mikrotik`, `/support/ubiquiti`, `/support/vsol`.
- **Lainnya**: `/firmware`, `/company-profile`, `/cart`, `/coming-soon`.
- **Feature flag runtime** (`truefalse.json`, hook `useTrueFalse`): mis. `disableMikrotikRoutes` → tampilkan Coming Soon tanpa rebuild.

### Admin (di balik login bersama)
- **Dashboard `/admin`**: pilih brand (MikroTik/Ubiquiti/V-SOL) + jumlah produk + entry Activity Log.
- **CRUD produk per brand** (`/admin/mikrotik`, `/admin/ubiquiti`, `/admin/vsol`): tambah, edit, hapus, **drag & drop reorder** urutan tampil per kategori, upload gambar utama + galeri.
- **CRUD Training** (`/admin/training`): tambah/edit sesi training (semua field di §3), syllabus, upload thumbnail/QR/galeri dokumentasi.
- **Activity Log** (`/admin/activity-log`): riwayat percobaan login (200 baris terakhir).

---

## 6. KOMPONEN FRONTEND UTAMA

### Routing — wouter (BUKAN react-router)
Semua route didefinisikan di `client/src/App.tsx` dalam `<Switch>`. **Urutan penting** (wouter memilih match pertama; route spesifik di atas route umum). Contoh penting:
```tsx
<Route path="/admin/login" component={AdminLogin} />
<Route path="/admin/activity-log" component={AdminActivityLog} />
<Route path="/admin" component={AdminDashboard} />
<Route path="/admin/mikrotik/new" component={MikrotikDcsProductForm} />
<Route path="/admin/mikrotik/:id/edit" component={MikrotikDcsProductForm} />
<Route path="/admin/mikrotik" component={MikrotikDcsDashboard} />
// …ubiquiti, vsol, training pola sama
```
- Navigasi programatik: `const [, setLocation] = useLocation(); setLocation("/admin")`.
- Path alias di Vite: `@mikrotik`, `@ubiquiti`, `@vsol`, `@admin`, `@/…`.

### Komponen kunci
| Komponen | Fungsi |
|---|---|
| `admin/Login.tsx` | Form login bersama → `POST /api/auth/login` → `markAdminAuthedSession()` → `roleHome(role)` |
| `admin/Dashboard.tsx` | Landing admin; cek `isAdminAuthedSession()`, kartu brand + jumlah produk, tombol logout |
| `admin/NavBar.tsx` | Tab navigasi admin lintas brand + tombol Logout/Website |
| `admin/authGate.ts` | Gate auth in-memory (`mark/clear/isAdminAuthedSession`) |
| `<brand>/admin/Dashboard.tsx` | List produk brand + aksi CRUD + reorder |
| `<brand>/admin/ProductForm.tsx` | Form tambah/edit produk (kirim `FormData` multipart) |
| `<brand>/admin/ProtectedRoute.tsx` | Pembungkus halaman; delegasi ke `RequireRole` → cek `GET /api/auth/me`, redirect bila belum login |
| `<brand>/api.ts` | Wrapper `fetch` semua endpoint brand (`credentials:"include"`, helper `j()` deteksi HTML, `safe()` bungkus error) |
| `admin/training/TrainingForm.tsx` | Form training (field kompleks + upload thumbnail/QR/galeri) |
| `lib/queryClient.ts` | Konfigurasi react-query |

---

## 7. POLA & KONVENSI

### Pola respons API
Selalu `{ ok: boolean, data?: T, message?: string }`. Sukses `ok:true`, gagal `ok:false` + `message` (HTTP 400/401/404/500). Frontend `api.ts` membungkus error jadi `{ ok:false, message }` lewat helper `safe()`.

### Pola controller
```ts
export async function apiXxx(req, res) {
  if (!requireAdminSession(req, res)) return;     // 1. guard (kecuali endpoint /public, /meta)
  const id = parseIntParam(req.params.id, res);   // 2. validasi param
  if (id == null) return;
  // 3. baca body / file (multipart)
  // 4. panggil model
  // 5. res.json({ ok:true, data }) | res.status(4xx).json({ ok:false, message })
}
```

### Pola endpoint (per modul, mis. `/api/mikrotik-dcs`)
```
GET    /admin/activity-log
GET    /public/products       GET    /public/products/:id
GET    /meta/categories
GET    /admin/products        GET    /admin/products/:id
POST   /admin/products        PUT    /admin/products/:id   DELETE /admin/products/:id
POST   /admin/products/reorder
```
- `/public/*` & `/meta/*` = tanpa auth; `/admin/*` = wajib guard.
- Auth **tidak lagi** bagian dari pola per-modul: seluruhnya di `/api/auth/*`
  yang netral. Tidak ada sisa alias auth di modul brand mana pun.
- Method: GET (baca), POST (create/login/reorder), PUT (update), DELETE (hapus).

### Cara CRUD — multipart + JSON string
- Create/Update produk & training memakai **`multipart/form-data`** (karena upload gambar via multer; route dibungkus `withMultipart(...)`).
- Field teks kompleks (bullets, specifications, technical_items, existing_gallery) dikirim sebagai **string JSON** di dalam FormData, lalu di-`JSON.parse` & divalidasi di controller (multer kadang membungkus field teks jadi `string[]` → ada helper `multipartString()`).
- Login/logout/reorder pakai `express.json()` biasa.
- Operasi multi-tabel (training + syllabus) memakai **transaksi** (`beginTransaction`/`commit`/`rollback`); update syllabus = hapus semua lalu insert ulang.

### Konvensi penamaan
- Tabel produk DCS: prefix `mikrotik_dcs_`, `ubiquiti_dcs_`, `vsol_dcs_` (sengaja dipisah dari tabel `products` katalog lama).
- Path API: `/api/<brand>-dcs/...`; training `/api/training/...`.
- Controller `apiXxx`, model `listXxx/getXxx/createXxx/updateXxx/deleteXxx`, route `registerXxxRoutes`.
- Query MySQL pakai **named placeholders** (`:nama`) — sudah aktif global di pool.
- Path gambar disimpan sebagai path publik relatif (`/uploads/<modul>/<file>`), file fisik di `process.cwd()/public/uploads`.

---

## 8. HAL PENTING / QUIRKS

### Deploy (produksi: pm2 + WinSCP)
1. `npm run build` → `dist/index.cjs` (server) + `dist/public/` (client).
2. Upload **replace folder `dist/`** via WinSCP.
3. **`pm2 restart dcsindo`** (proses bernama `dcsindo`, id 0). ⚠️ **Jangan sentuh** proses `hrdcsindo` (id 1) — aplikasi terpisah.
4. Verifikasi: `pm2 logs dcsindo --lines 30` → cari `serving on port` + `[MySQL] ✅ Database connected!`.

**JANGAN ditimpa saat upload:**
- `public/uploads/` (di ROOT server, bukan di `dist/`) — semua foto produk hasil upload admin.
- `dist/public/truefalse.json` — feature flag yang sering diedit live di server.
- `.env` server & `node_modules/`.

⚠️ **`.env`**: `pm2 restart` biasa **tidak** reload env. Setelah mengubah `.env` di server → `pm2 restart dcsindo --update-env`.

### Utang teknis / risiko (relevan untuk sistem 3 role)
1. **Sesi di RAM (memorystore)** → tiap restart/deploy = **semua user ter-logout**, tidak persist, tidak share antar instance. Untuk multi-role produksi sebaiknya pindah ke session store persisten (MySQL).
2. **Password plaintext** di `.env`, dibandingkan string langsung — **belum ada hashing**. Tambah **bcrypt** saat membuat tabel `users`.
3. **Satu flag sesi (`mikrotikDcsAdmin`) untuk semua brand & training** → tidak ada pemisahan hak akses. Ganti dengan `req.session.role` + guard berbasis role.
4. **Auth frontend dobel & tidak konsisten** (`authGate` in-memory vs `GET /api/auth/me`) → refresh bisa melempar ke login. `authGate` masih dipanggil `Login.tsx` demi kompatibilitas halaman lama.
5. ~~**Penamaan menyesatkan**: endpoint auth global hidup di modul MikroTik~~ — **selesai**. Seluruh auth pindah ke `/api/auth/*` yang netral: `/auth/me` per-brand dihapus di L-01, alias login/logout MikroTik dihapus di Step B. Flag sesi `mikrotikDcsAdmin` sengaja **dipertahankan** — masih dibaca `requireRole.ts` dan `/api/auth/me`, jadi sesi lama tetap valid.
6. **DDL `training_sessions` & `training_syllabus` tidak ada di folder `database/`** → setup environment baru bisa gagal sebelum tabel dibuat manual.
7. **Dependency warisan belum dipakai** (`drizzle`, `pg`, `passport`, `connect-pg-simple`) — jangan diasumsikan aktif.

---

## LAMPIRAN — Titik sentuh untuk fitur baru

### A. Sistem 3 role (admin / trainer / sales)
| Tambahan | Lokasi |
|---|---|
| Tabel `users` (`id`, `username` UNIQUE, `password_hash`, `role`, `name`, `is_active`, timestamps) — disarankan **auto-create** meniru `adminActivityLogModel.ts` | DB |
| `server/models/userModel.ts` — cari user + verifikasi password (**bcrypt**) | server |
| Ubah login: cek ke tabel users, set `req.session.userId/username/role` | `mikrotikDcsApiController.ts` (atau modul auth baru) |
| Perluas `SessionData` | `server/types/express-session.d.ts` |
| `requireRole("admin"\|"trainer"\|"sales")` — ganti/bungkus guard boolean yang ada | controllers |
| `/auth/me` kirim `role` → frontend sembunyikan/tampilkan menu per role **tanpa ubah layout** | controller + `ProtectedRoute`/`NavBar` |
| (Disarankan) session store persisten | `server/index.ts` |

### B. Sistem training lengkap (pendaftaran publik + laporan + dokumentasi)
| Tambahan | Lokasi |
|---|---|
| Tabel `training_registrations` (`training_id` FK, data pendaftar, status, `created_at`) | DB + `database/*.sql` atau ensureTable |
| Endpoint publik `POST /api/training/:id/register` (tanpa auth) + validasi kapasitas (`capacity`) | route + controller + model training |
| Endpoint admin/trainer: list peserta, ubah status, ekspor laporan | guard `requireRole` |
| Halaman publik pendaftaran (form) di `client/src/pages/training/` | frontend |
| Dashboard laporan + dokumentasi (galeri sudah ada: `training_gallery`) | `client/src/admin/training/` |

> Memanfaatkan yang sudah ada: `computeStatus()` (Upcoming/Ongoing/Completed), `training_gallery` (dokumentasi foto), pola transaksi di `trainingModel.ts`, dan pola guard terpusat agar trainer hanya akses modul training, sales akses katalog, admin akses semua — **tanpa merombak UI yang sudah berjalan**.
