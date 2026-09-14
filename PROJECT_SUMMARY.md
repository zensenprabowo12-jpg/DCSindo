# PROJECT_SUMMARY — DCS Indonesia (dcsindo)

> Dokumen acuan teknis untuk pengembangan lanjutan, khususnya **sistem 3 role (admin / trainer / sales)** dan **sistem training lengkap (pendaftaran publik, laporan, dokumentasi)**.
> Toko/katalog multi-brand networking: **MikroTik + Ubiquiti + V-SOL + FiberHome**, plus modul **Training** dan **Firmware**.

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
│       │   ├── Dashboard.tsx    #   Landing /admin — pilih brand + entry log
│       │   ├── NavBar.tsx       #   Tab navigasi admin (DCS/MikroTik/Ubiquiti/Training/V-SOL/FiberHome/Firmware)
│       │   ├── ActivityLog.tsx  #   Tampilan riwayat percobaan login
│       │   ├── VisitorLog.tsx   #   Statistik pengunjung (geoip + user agent)
│       │   ├── Peserta.tsx      #   ⭐ Daftar peserta training (hasil pendaftaran publik)
│       │   ├── Users.tsx        #   ⭐ CRUD user panel + role
│       │   ├── session.ts       #   ⭐ Sumber kebenaran sesi/role → GET /api/auth/me
│       │   ├── RequireRole.tsx  #   ⭐ Guard halaman berbasis role
│       │   ├── authGate.ts      #   Gate auth in-memory (warisan, lihat §4)
│       │   ├── training/        #   Dashboard.tsx + TrainingForm.tsx (CRUD training)
│       │   ├── fiberhome/       #   FiberHomeAdmin.tsx + FiberHomeProductForm.tsx
│       │   └── firmware/        #   Dashboard, List, FirmwareForm, PopupSettings
│       ├── mikrotik/            # Brand MikroTik
│       │   ├── admin/           #   Dashboard.tsx, ProductForm.tsx, ProtectedRoute.tsx
│       │   ├── public/          #   StoreCatalog, StoreProductDetail, CategoryCatalogPage…
│       │   ├── landing/         #   Komponen landing page MikroTik
│       │   ├── api.ts           #   ⭐ Wrapper fetch ke /api/mikrotik-dcs/*
│       │   └── types.ts
│       ├── ubiquiti/            # Brand Ubiquiti (admin/ + public/ + api.ts) — pola sama
│       ├── vsol/                # Brand V-SOL  (admin/ + public/ + api.ts) — pola sama
│       ├── pages/               # Halaman umum
│       │   ├── fiberhome/       #   ⭐ Publik FiberHome (list + detail + hero variants)
│       │   ├── homepage/        #   home-utama.tsx (hero video), home-ubiquiti, home-vsol
│       │   ├── support/         #   Mikrotik.tsx, Vsol.tsx, Ubiquiti.tsx
│       │   ├── training/        #   TrainingList.tsx, TrainingDetail.tsx (+ form pendaftaran)
│       │   ├── firmware.tsx, firmware-brand.tsx
│       │   └── company-profile, coming-soon, not-found, cart (⚠️ tidak dirouting)
│       ├── components/
│       │   ├── ui/              #   Komponen shadcn/ui (button, dialog, table, dll)
│       │   ├── catalog/         #   ⭐ L-06: CatalogSkeleton/Empty/Error dipakai semua brand
│       │   ├── icons/whatsapp.tsx #  ⭐ Logo WhatsApp resmi (Simple Icons, CC0)
│       │   ├── firmware/        #   DownloadConfirmDialog, FirmwareDetailModal
│       │   ├── layout.tsx       #   ⭐ Header/footer/floating WhatsApp
│       │   └── ChunkErrorBoundary.tsx, AdminChunkFallback.tsx  (mitigasi lazy-load)
│       ├── hooks/               # useTrueFalse (feature flag runtime), use-mobile, use-toast
│       ├── lib/                 # queryClient, ⭐ contact.ts (nomor WA terpusat), util produk
│       └── config/, styles/, brands/
│
├── server/                      # Backend Express (TypeScript)
│   ├── index.ts                 # ⭐ Bootstrap: header keamanan + CSP + session + listen(PORT)
│   ├── routes.ts                # ⭐ registerRoutes() — pasang semua register*Routes()
│   ├── vite.ts                  # Dev: Vite sebagai middleware
│   ├── static.ts                # Prod: serve dist/public
│   ├── auth/roles.ts            # ⭐ USER_ROLES = admin | trainer | sales
│   ├── routes/                  # Definisi endpoint per modul
│   │   ├── authRoutes.ts        #   ⭐ /api/auth/* — login/logout/me + CRUD users
│   │   ├── mikrotikDcsRoutes.ts #   /api/mikrotik-dcs/*
│   │   ├── ubiquitiDcsRoutes.ts #   /api/ubiquiti-dcs/*
│   │   ├── vsolDcsRoutes.ts     #   /api/vsol-dcs/*
│   │   ├── fiberHomeDcsRoutes.ts#   /api/fiberhome-dcs/*
│   │   ├── trainingRoutes.ts    #   /api/training/* (termasuk pendaftaran publik)
│   │   ├── firmwareRoutes.ts, firmwarePopupRoutes.ts
│   │   ├── visitorLogRoutes.ts  #   /api/visitor-log/*
│   │   ├── cspReportRoutes.ts   #   Penerima laporan pelanggaran CSP
│   │   └── mikrotikRoutes.ts    #   Redirect /mikrotik
│   ├── controllers/             # Logika request → panggil model
│   │   ├── authController.ts    #   ⭐ LOGIN/LOGOUT/ME (bcrypt + role)
│   │   ├── usersController.ts   #   ⭐ CRUD user panel (admin only)
│   │   ├── mikrotikDcsApiController.ts, ubiquitiDcsApiController.ts,
│   │   ├── vsolDcsApiController.ts, fiberHomeDcsApiController.ts,
│   │   ├── trainingApiController.ts, firmwareApiController.ts,
│   │   └── firmwarePopupApiController.ts, visitorLogApiController.ts
│   ├── models/                  # Query MySQL (mysql2)
│   │   ├── userModel.ts         #   ⭐ users + bcrypt + ensureUsersTable + seed dari .env
│   │   ├── trainingModel.ts     #   ⭐ training_sessions + training_syllabus (transaksi)
│   │   ├── trainingRegistrationModel.ts # ⭐ training_registrations (M-03)
│   │   ├── trainingGalleryModel.ts, adminActivityLogModel.ts (AUTO-CREATE)
│   │   ├── visitorLogModel.ts   #   visitor_log (AUTO-CREATE) + retensi 3 bulan
│   │   ├── firmwareModel.ts, firmwarePopupSettingsModel.ts
│   │   └── mikrotikDcsProductModel.ts, ubiquitiDcsProductModel.ts,
│   │       vsolDcsProductModel.ts, fiberHomeDcsProductModel.ts
│   ├── middleware/
│   │   ├── requireRole.ts       #   ⭐ Guard berbasis role (requireRole / requireRoleMw)
│   │   ├── loginRateLimit.ts    #   ⭐ H-02: pembatas laju per-IP + per-username
│   │   ├── trainingRateLimit.ts #   M-03: pembatas laju pendaftaran publik
│   │   ├── csp.ts               #   ⭐ Content-Security-Policy (mode enforce)
│   │   ├── errorSanitizer.ts    #   H-04: sanitasi body 5xx + correlation ID
│   │   ├── staticUploads.ts     #   Mount /uploads + nosniff + Content-Disposition
│   │   ├── visitorTracker.ts    #   Pencatat pengunjung (geoip)
│   │   └── upload*.ts           #   multer per modul (mikrotik/ubiquiti/vsol/fiberhome/training/firmware)
│   ├── utils/
│   │   ├── safeUpload.ts        #   ⭐ Hapus file upload saat validasi/DB gagal (C-04/M-04)
│   │   └── staticAssetPath.ts
│   ├── jobs/visitorLogPrune.ts  # Job retensi visitor_log
│   ├── config/
│   │   ├── mysqlPool.ts         # ⭐ Pool mysql2 (socket ATAU TCP), namedPlaceholders
│   │   └── db.ts                # Re-export pool + verifikasi saat startup
│   ├── training/categories.ts   # Konstanta brand/format/status + computeStatus()
│   ├── mikrotikDcs/categories.ts# Konstanta kategori MikroTik
│   └── types/                   # ⭐ express-session.d.ts (SessionData + role), express-mysql-session.d.ts
│
├── database/                    # File .sql manual (dijalankan di phpMyAdmin)
│   ├── mikrotik_dcs_store.sql, ubiquiti_dcs_store.sql, vsol_dcs_store.sql
│   ├── fiberhome_schema.sql, fiberhome_improvements.sql, fiberhome_specs_grouping.sql
│   ├── training_schema.sql              # ⭐ DDL training_sessions + training_syllabus
│   ├── migrate_training_gallery.sql, migrate_training_qr_customlink.sql
│   ├── migrate_training_registrations_m03.sql
│   ├── migrate_vsol_dcs_sku_unique.sql  # M-07
│   ├── migrate_mikrotik_dcs_add_*.sql, migrate_vsol_specs_ordering.sql
│   └── firmware_store.sql, firmware_popup_settings.sql, backup_*.sql
│
├── public/uploads/              # (Di server produksi) foto produk, firmware, & video hero
├── script/build.ts              # Build esbuild (server) + vite (client)
├── .env                         # Konfigurasi (DB, SESSION_SECRET, ADMIN_USER/PASS, feature flags)
├── env.example                  # Contoh .env
└── dist/                        # Hasil build: index.cjs (server) + public/ (client)
```

⭐ = file paling relevan untuk pengembangan auth/role & training.

> Katalog multi-brand lama (SSR/EJS, tabel `brands`+`products`, `/brand/*`, `/admin/v2`) **sudah dihapus seluruhnya**: `ejsViews.ts`, `catalogMultiBrandRoutes.ts`, `catalog*Controller.ts`, `brandModel.ts`, dan `catalogProductModel.ts` tidak ada lagi. Folder `server/validation/` (skema zod) juga sudah tidak ada — validasi produk kini manual di controller.

---

## 2. STACK & ARSITEKTUR

### Teknologi
| Layer | Teknologi |
|---|---|
| Frontend | React 19 + TypeScript + **Vite**, routing **wouter**, **Tailwind v4**, komponen **shadcn/ui** (Radix), data fetching **@tanstack/react-query**, animasi framer-motion |
| Backend | **Express 5** (TypeScript, dijalankan via `tsx`), **express-session** + **express-mysql-session** |
| Database | **MySQL/MariaDB** via **mysql2/promise** (pool, `namedPlaceholders: true`) |
| Auth | **bcryptjs** (hash password), **express-rate-limit** (H-02 & M-03) |
| Upload | **multer** (multipart/form-data) + `utils/safeUpload.ts` |
| Analitik | **geoip-lite** + **ua-parser-js** (visitor log) |
| Build | dev pakai `tsx`; prod pakai **esbuild** (server → `dist/index.cjs`) + **vite build** (client → `dist/public`) |

> Catatan dependency warisan: `drizzle-orm`, `pg`, `connect-pg-simple`, `passport`, dan `passport-local` **sudah dihapus** dari `package.json` (commit `e898d4c`). Yang sekarang masih terpasang tapi **tidak dipakai** di alur utama: **`ejs`** (sisa katalog SSR lama yang sudah dibuang) dan **`react-router-dom`** (routing tetap memakai wouter — 0 import di `client/src`). `zod` masih terpasang dan dipakai di sisi client (react-hook-form resolver), bukan di server.

### Cara terhubung (satu proses melayani semua)
- **Satu** server Express melayani **API (`/api/...`)** + **SPA**. Tidak ada lagi jalur SSR/EJS.
- Frontend memanggil API via `fetch` dengan **`credentials: "include"`** → cookie session (`mikrotikdcs.sid`) ikut terkirim. Ini wajib agar auth jalan.
- Respons API selalu JSON berbentuk `{ ok, data?, message? }`.

### Alur request
```
Browser (fetch /api/...)
  → server/index.ts            (trust proxy → header keamanan → CSP → express.json
                                → session → logger → visitorTracker → errorSanitizer)
  → server/routes.ts           (registerRoutes)
  → routes/<modul>.ts          (definisi METHOD + path, rate limit / requireRoleMw / multer bila perlu)
  → controllers/<modul>.ts     (guard role → validasi → panggil model → res.json)
  → models/<modul>.ts          (query MySQL via mysqlPool)
  → MySQL
```

### Dev vs Prod
| | Dev | Prod |
|---|---|---|
| Jalankan | `npm run dev` (`tsx server/index.ts`, `NODE_ENV=development`) | `npm run build` lalu `npm start` (`node dist/index.cjs`, `NODE_ENV=production`) |
| Client | Vite middleware (HMR) via `server/vite.ts` | File statis `dist/public` via `server/static.ts` |
| Port | `PORT` dari `.env` (default 8080), bind `0.0.0.0` | sama |
| CSP | `csp.ts` meneruskan request tanpa header | Header `Content-Security-Policy` **enforce** |
| Cookie | `secure: false` (dev jalan di http://localhost) | `secure: true` — bergantung `X-Forwarded-Proto` dari Apache |
| ⚠️ | `npm run dev:client` (Vite saja, port 8080) **tidak** menjalankan backend → `/api/*` balas HTML; api.ts mendeteksi & melempar error yang jelas | — |

---

## 3. DATABASE

**Database tunggal MySQL/MariaDB** (mis. `dcsindo`). Tidak ada ORM; query SQL ditulis manual di model.

### Cara tabel dibuat (PENTING — dua pola berbeda)
1. **Manual via file `.sql`** di folder `database/` → dijalankan sendiri lewat phpMyAdmin. Berlaku untuk **semua tabel produk, training, & firmware**.
2. **Auto-create via `ensureTable()`** dalam kode → `admin_activity_log` (`adminActivityLogModel.ts`), **`users`** (`userModel.ts`), dan **`visitor_log`** (`visitorLogModel.ts`). Tabel **`sessions`** juga dibuat otomatis oleh `express-mysql-session` (`createDatabaseTable: true`). **Pola ini disarankan untuk tabel baru** agar deploy tidak perlu langkah SQL manual.

### Daftar tabel & kolom penting

**Produk MikroTik** — `mikrotik_dcs_products`
`id`, `nama_produk`, `sku`, `category`, `sort_order`, `deskripsi`, `bullet_points` (LONGTEXT berisi JSON), `main_image`, `created_at`, `updated_at`
- 🔑 Kunci unik **komposit `(sku, category)`** (`uq_mikrotik_dcs_sku_category`), **bukan** UNIQUE pada `sku` saja. Satu produk MikroTik boleh tampil di beberapa kategori sekaligus — itu fitur katalog, bukan data kotor. Lihat komentar panjang di `database/mikrotik_dcs_store.sql`: mengubahnya jadi `UNIQUE (sku)` menghapus 16 baris produksi.
+ `mikrotik_dcs_product_gallery_images` (`product_id` FK CASCADE, `image_path`, `sort_order`)
+ `mikrotik_dcs_product_technical_items` (`product_id`, `title`, `content`, `sort_order`) — terpasang penuh di model, controller, & ProductForm.

**Produk V-SOL** — `vsol_dcs_products`
`id`, `nama_produk`, `sku` (**UNIQUE** `uq_vsol_dcs_sku`, M-07), `category`, `subfilter`, `deskripsi`, `bullet_points` (JSON), `main_image`, `is_new`, `sort_order`, timestamps
+ `vsol_dcs_product_gallery`, `vsol_dcs_technical_specs` (`section_title`, `label`, `value`, `is_check`, `sort_order`), `vsol_dcs_in_the_box`, `vsol_dcs_ordering_info` — semua FK CASCADE ke produk.

**Produk Ubiquiti** — `ubiquiti_dcs_*` (pola sama: products + gallery + specs; `sku` UNIQUE).

**Produk FiberHome** — `fiberhome_*` (`fiberhome_schema.sql`; `sku` VARCHAR(100) NOT NULL **UNIQUE**) + tabel spesifikasi/grouping turunannya.

**Firmware** — `firmware_store.sql` (daftar firmware per brand + file) & `firmware_popup_settings.sql` (pengaturan popup peringatan).

**Training** — `training_sessions` (DDL di `database/training_schema.sql`)
`id`, `title`, `description`, `brand` (MikroTik/Ubiquiti/V-SOL/General), `format` (Online/Offline/Hybrid), `location`, `start_datetime`, `end_datetime`, `duration_hours`, `capacity`, `price`, `is_free`, `has_certificate`, `has_hands_on_lab`, `instructor_name`, `instructor_contact`, `thumbnail`, `qr_image`, `custom_link_url`, `custom_link_label`, timestamps.
- **`status` TIDAK disimpan** — dihitung runtime via `computeStatus(start,end)` → Upcoming/Ongoing/Completed.
+ `training_syllabus` (`training_id`, `item`, `sort_order`) — ditulis ulang penuh tiap update (DELETE + INSERT, dalam transaksi).
+ `training_gallery` (`training_id` FK CASCADE, `image_path`, `caption`, `sort_order`) — foto dokumentasi.
+ `training_registrations` (`migrate_training_registrations_m03.sql`) — peserta pendaftaran publik + status; ada pencegahan duplikat & perbaikan race kuota (M-03).

**User panel** — `users` (AUTO-CREATE)
`id`, `username` (UNIQUE), `password_hash` (**bcrypt**, 10 rounds), `role` (`admin`/`trainer`/`sales`, default `admin`), `name`, `is_active`, timestamps. Di-seed sekali dari `ADMIN_USER`/`ADMIN_PASS` **hanya bila tabel kosong**; bila env belum diset, seed **dilewati dengan peringatan** (sengaja — tidak membuat kredensial yang sudah diketahui publik).

**Sesi** — `sessions` (AUTO-CREATE oleh `express-mysql-session`).

**Activity log** — `admin_activity_log` (AUTO-CREATE)
`id`, `attempted_username` VARCHAR(190), `success` TINYINT(1), `ip_address` VARCHAR(64), `user_agent` VARCHAR(512), `created_at` TIMESTAMP. Mencatat **setiap** percobaan login (sukses & gagal) + IP (sadar `X-Forwarded-For`, hanya percaya hop loopback sejak H-02).

**Visitor log** — `visitor_log` (AUTO-CREATE) — kunjungan halaman + geoip + user agent, dengan job retensi 3 bulan (`jobs/visitorLogPrune.ts`).

> ℹ️ **Catatan MariaDB**: server produksi adalah MariaDB meski semua nama paket/tooling memakai `mysql*`. Ini memengaruhi collation default saat membuat tabel baru.

---

## 4. SISTEM AUTH (kondisi sekarang)

### Login: tabel `users` + bcrypt
- File: `server/controllers/authController.ts` + `server/models/userModel.ts`.
- Password disimpan sebagai **hash bcrypt** (10 rounds) di kolom `users.password_hash`. **Tidak ada lagi** perbandingan string plaintext.
- `ADMIN_USER`/`ADMIN_PASS` di `.env` kini **hanya dipakai untuk seed awal** saat tabel `users` kosong — bukan kredensial runtime.
- Endpoint auth ada di modul **netral** `/api/auth` (dipakai semua brand):
  `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`,
  plus CRUD user `GET|POST|PUT|DELETE /api/auth/users` (admin only).
- Tidak ada lagi endpoint auth per-brand. `GET .../auth/me` milik MikroTik,
  Ubiquiti, dan V-SOL dihapus di L-01; alias `POST /api/mikrotik-dcs/auth/login`
  dan `.../auth/logout` dihapus di Step B setelah access log 30 hari menunjukkan
  nol permintaan. `/api/auth/login` kini satu-satunya pintu login.

### Pembatas laju login (H-02)
`server/middleware/loginRateLimit.ts` — **dua lapis**, jendela 15 menit:
- `loginIpRateLimit` — menahan satu penyerang dari satu tempat.
- `loginUsernameRateLimit` — menahan botnet yang menyasar SATU akun dari banyak IP.

Keduanya instance **tunggal** (singleton): kalau kelak ada pintu login kedua, ia **harus** memakai instance yang sama, kalau tidak penyerang cukup menyelang-nyeling dua URL untuk jatah ganda. Store di memori proses — benar selama PM2 fork mode satu instance. Pendaftaran training publik punya pembatas sendiri (`trainingRateLimit.ts`, M-03) yang justru **menghitung request sukses**, kebalikan dari login.

### Sesi: express-session + MySQL store (persisten)
- Konfigurasi di `server/index.ts`:
  ```ts
  session({
    name: "mikrotikdcs.sid",
    secret: process.env.SESSION_SECRET ?? "…dev…",
    resave: false, saveUninitialized: false,
    store: buildSessionStore(),          // MySQL; fallback MemoryStore bila konfig DB tak lengkap
    cookie: {
      maxAge: 7 hari, httpOnly: true, sameSite: "lax",
      secure: process.env.NODE_ENV === "production",   // H-03
    },
  })
  ```
- **Sesi tidak lagi hilang saat `pm2 restart`** — tersimpan di tabel `sessions`.
- **H-03**: cookie `Secure` di produksi. Bergantung pada `app.set("trust proxy", "loopback")` — TLS diterminasi Apache, jadi express-session menilai keamanan koneksi dari `X-Forwarded-Proto`. ⚠️ Kalau header itu hilang, `Set-Cookie` dilewatkan **tanpa error apa pun** dan login produksi mati senyap.
- **Session fixation**: `req.session.regenerate()` dipanggil saat login sukses (H-03).
- **Bentuk sesi sekarang** (`server/types/express-session.d.ts`):
  ```ts
  interface SessionData {
    mikrotikDcsAdmin?: boolean;  // kompatibilitas sesi lama
    userId?: number;
    username?: string;
    role?: UserRole;             // "admin" | "trainer" | "sales"
  }
  ```

### Guard backend: berbasis role
`server/middleware/requireRole.ts` menggantikan helper boleh/tidak per-controller:
```ts
const ok = requireRole("admin")(req, res);   // belum login → 401; role salah → 403
if (!ok) return;
```
- `requireRoleMw(...)` = bentuk middleware, dipakai bila guard **harus** jalan sebelum multer — guard boolean di dalam handler baru jalan setelah file terlanjur ditulis ke disk (C-04 Step 8).
- `currentRole(req)` memetakan sesi lama (`mikrotikDcsAdmin=true` tanpa `role`) menjadi `"admin"`, jadi sesi yang sudah berjalan tetap valid.
- Role `trainer` & `sales` sudah terdefinisi di `server/auth/roles.ts` dan punya halaman tujuan sendiri (`roleHome()`), tapi pemisahan hak akses per modul **belum** disebar penuh ke semua controller.

### Frontend: dua mekanisme (tidak konsisten)
1. **`admin/session.ts`** — ⭐ sumber kebenaran: `fetchMe()` → `GET /api/auth/me`, plus `roleHome(role)` & `logout()`. Dipakai `RequireRole.tsx`.
2. **`admin/authGate.ts`** — variabel boolean `authedThisSession` di RAM browser, **reset tiap refresh**. Warisan; masih dipanggil `Login.tsx` & `Dashboard.tsx` demi kompatibilitas halaman lama.

> ⚠️ Karena `authGate` reset saat refresh, refresh halaman di `/admin` bisa melempar user ke login walau cookie session masih valid.

---

## 5. FITUR YANG SUDAH ADA

### Publik
- **Homepage** per brand: `/` (utama, dengan **hero video self-hosted** 3 klip acak), `/ubiquiti`, `/vsol`, landing `/mikrotik`.
- **Katalog produk per brand**: list + filter kategori + sort + halaman detail produk (galeri, spesifikasi, video, technical accordion).
  - MikroTik: `/mikrotik/shop`, `/mikrotik/categories/:category`, detail `/mikrotik/shop/:id`.
  - Ubiquiti: `/ubiquiti/shop`, detail `/ubiquiti/shop/:id`.
  - V-SOL: `/vsol/shop`, detail `/vsol/shop/:id`.
  - FiberHome: `/fiberhome`, detail `/fiberhome/:sku`.
- **Firmware publik**: `/firmware`, `/firmware/:brand` — dengan dialog konfirmasi unduh & modal detail (catatan rilis, checksum, peringatan risiko flashing).
- **Training (publik)**: `/training` (list), `/training/:id` (detail — syllabus, info instruktur, QR, custom link, galeri dokumentasi, **form pendaftaran**).
- **Support**: `/support`, `/support/mikrotik`, `/support/ubiquiti`, `/support/vsol`.
- **Lainnya**: `/company-profile`, `/coming-soon`.
- **Feature flag runtime** (`truefalse.json`, hook `useTrueFalse`): `disableMikrotikRoutes`, `disableFiberHomeRoutes`, `disableUbiquitiAccessories`, `showAddons`, `showUbiquitiInStockBadge` → tampilkan Coming Soon / sembunyikan elemen tanpa rebuild.
- **Kontak WhatsApp terpusat** (`lib/contact.ts`): dua nomor dipilih **acak 50:50** lewat `buildWhatsAppUrl()`, dipakai footer, tombol melayang, halaman support, detail produk, & training. Ikon memakai komponen bersama `components/icons/whatsapp.tsx`.

> ⚠️ `client/src/pages/cart.tsx` **tidak dirouting** di `App.tsx` dan tidak diimpor dari mana pun — file mati. `/cart` tidak bisa diakses.

### Admin (di balik login bersama)
- **Dashboard `/admin`**: pilih brand (MikroTik/Ubiquiti/V-SOL/FiberHome) + jumlah produk + entry log.
- **CRUD produk per brand** (`/admin/mikrotik`, `/admin/ubiquiti`, `/admin/vsol`, `/admin/fiberhome`): tambah, edit, hapus, **drag & drop reorder** urutan tampil per kategori, upload gambar utama + galeri.
- **CRUD Firmware** (`/admin/firmware`, `/admin/firmware/:brand`, `/admin/firmware/settings`).
- **CRUD Training** (`/admin/training`): tambah/edit sesi training (semua field di §3), syllabus, upload thumbnail/QR/galeri dokumentasi.
- **Peserta training** (`/admin/peserta`): daftar pendaftar + ubah status.
- **Manajemen user** (`/admin/users`): CRUD user panel + role (admin only).
- **Activity Log** (`/admin/activity-log`): riwayat percobaan login (200 baris terakhir).
- **Visitor Log** (`/admin/visitor-log`): statistik pengunjung (geoip + user agent).
- **Lazy loading route admin** (M-06) dengan mitigasi chunk kedaluwarsa (`ChunkErrorBoundary`).

---

## 6. KOMPONEN FRONTEND UTAMA

### Routing — wouter (BUKAN react-router)
Semua route didefinisikan di `client/src/App.tsx` dalam `<Switch>`. **Urutan penting** (wouter memilih match pertama; route spesifik di atas route umum). Contoh penting:
```tsx
<Route path="/admin/login" component={AdminLogin} />
<Route path="/admin/activity-log" component={AdminActivityLog} />
<Route path="/admin/visitor-log" component={AdminVisitorLog} />
<Route path="/admin/peserta" component={AdminPeserta} />
<Route path="/admin/users" component={AdminUsers} />
<Route path="/admin" component={AdminDashboard} />
<Route path="/admin/mikrotik/new" component={MikrotikDcsProductForm} />
<Route path="/admin/mikrotik/:id/edit" component={MikrotikDcsProductForm} />
<Route path="/admin/mikrotik" component={MikrotikDcsDashboard} />
// …ubiquiti, vsol, fiberhome, training, firmware pola sama
```
- Navigasi programatik: `const [, setLocation] = useLocation(); setLocation("/admin")`.
- Path alias di Vite: `@mikrotik`, `@ubiquiti`, `@vsol`, `@admin`, `@/…`.
- ⚠️ `react-router-dom` ada di `package.json` tapi **tidak dipakai sama sekali** — jangan ikut dipakai.

### Komponen kunci
| Komponen | Fungsi |
|---|---|
| `admin/Login.tsx` | Form login bersama → `POST /api/auth/login` → `markAdminAuthedSession()` → `roleHome(role)` |
| `admin/session.ts` | ⭐ `fetchMe()` / `roleHome()` / `logout()` — sumber kebenaran sesi & role |
| `admin/RequireRole.tsx` | ⭐ Guard halaman: cek `GET /api/auth/me`, redirect bila belum login / role salah |
| `admin/Dashboard.tsx` | Landing admin; kartu brand + jumlah produk, tombol logout |
| `admin/NavBar.tsx` | Tab navigasi admin lintas brand + tombol Logout/Website |
| `admin/authGate.ts` | Gate auth in-memory warisan (`mark/clear/isAdminAuthedSession`) |
| `admin/Users.tsx` / `admin/Peserta.tsx` | CRUD user panel; daftar peserta training |
| `<brand>/admin/Dashboard.tsx` | List produk brand + aksi CRUD + reorder |
| `<brand>/admin/ProductForm.tsx` | Form tambah/edit produk (kirim `FormData` multipart) |
| `<brand>/admin/ProtectedRoute.tsx` | Pembungkus tipis di atas `RequireRole` |
| `<brand>/api.ts` | Wrapper `fetch` semua endpoint brand (`credentials:"include"`, helper `j()` deteksi HTML, `safe()` bungkus error) |
| `components/catalog/*` | ⭐ L-06: `CatalogSkeleton` / `CatalogEmpty` / `CatalogError` — status loading/kosong/error seragam di semua katalog |
| `components/icons/whatsapp.tsx` | ⭐ Logo WhatsApp resmi (Simple Icons, CC0) — glyph mengisi 99,5% kanvas 24×24 |
| `lib/contact.ts` | ⭐ Sumber tunggal nomor WA + `buildWhatsAppUrl()` (acak 50:50, `encodeURIComponent`) |
| `admin/training/TrainingForm.tsx` | Form training (field kompleks + upload thumbnail/QR/galeri) |
| `lib/queryClient.ts` | Konfigurasi react-query |

> ⚠️ **Ukuran ikon di dalam `<Button>`**: base class `button.tsx` memuat `[&_svg]:size-4` dengan spesifisitas (0,1,1), yang **mengalahkan** utility `w-3.5` polos (0,1,0). Ikon di dalam Button karena itu memakai modifier penting Tailwind v4 (`w-3.5! h-3.5!`). Tanpa `!`, kelas ukurannya diam-diam tidak berlaku.

---

## 7. POLA & KONVENSI

### Pola respons API
Selalu `{ ok: boolean, data?: T, message?: string }`. Sukses `ok:true`, gagal `ok:false` + `message` (HTTP 400/401/403/404/429/500). Frontend `api.ts` membungkus error jadi `{ ok:false, message }` lewat helper `safe()`.

> ⚠️ Body 429 dari rate limiter **harus objek**, bukan teks polos — bawaan `express-rate-limit` adalah teks, dan `res.json()` di client akan melempar sehingga user melihat "Koneksi ke server gagal" alih-alih alasan sebenarnya. Sudah ditangani di `loginRateLimit.ts` & `trainingRateLimit.ts`.

### Pola controller
```ts
export async function apiXxx(req, res) {
  if (!requireRole("admin")(req, res)) return;    // 1. guard role (kecuali endpoint /public, /meta)
  const id = parseIntParam(req.params.id, res);   // 2. validasi param
  if (id == null) return;
  // 3. baca body / file (multipart)
  // 4. panggil model
  // 5. res.json({ ok:true, data }) | res.status(4xx).json({ ok:false, message })
}
```
- Bila route memasang multer, guard dipasang di **level route** pakai `requireRoleMw(...)` supaya file tidak terlanjur ditulis ke disk (C-04 Step 8).
- Validasi/DB gagal setelah upload → `removeUploadedFiles()` dari `utils/safeUpload.ts` membersihkan file yatim (C-04 / M-04).

### Pola endpoint (per modul, mis. `/api/mikrotik-dcs`)
```
GET    /admin/activity-log
GET    /public/products       GET    /public/products/:id
GET    /meta/categories
GET    /admin/products        GET    /admin/products/:id
POST   /admin/products        PUT    /admin/products/:id   DELETE /admin/products/:id
POST   /admin/products/reorder
```
- `/public/*` & `/meta/*` = tanpa auth; `/admin/*` = wajib guard role.
- Auth **tidak lagi** bagian dari pola per-modul: seluruhnya di `/api/auth/*`
  yang netral. Tidak ada sisa alias auth di modul brand mana pun.
- Method: GET (baca), POST (create/login/reorder), PUT (update), DELETE (hapus).

### Cara CRUD — multipart + JSON string
- Create/Update produk & training memakai **`multipart/form-data`** (karena upload gambar via multer; route dibungkus `withMultipart(...)`).
- Field teks kompleks (bullets, specifications, technical_items, existing_gallery) dikirim sebagai **string JSON** di dalam FormData, lalu di-`JSON.parse` & divalidasi di controller (multer kadang membungkus field teks jadi `string[]` → ada helper `multipartString()`).
- Login/logout/reorder pakai `express.json()` biasa.
- Operasi multi-tabel (training + syllabus) memakai **transaksi** (`beginTransaction`/`commit`/`rollback`); update syllabus = hapus semua lalu insert ulang.

### Konvensi penamaan
- Tabel produk DCS: prefix `mikrotik_dcs_`, `ubiquiti_dcs_`, `vsol_dcs_`, `fiberhome_`.
- Path API: `/api/<brand>-dcs/...`; training `/api/training/...`; auth `/api/auth/...`.
- Controller `apiXxx`, model `listXxx/getXxx/createXxx/updateXxx/deleteXxx`, route `registerXxxRoutes`.
- Query MySQL pakai **named placeholders** (`:nama`) — sudah aktif global di pool.
  ⚠️ **Jangan** teruskan `namedPlaceholders` ke `express-mysql-session` — library itu memakai `?`.
- Path gambar disimpan sebagai path publik relatif (`/uploads/<modul>/<file>`), file fisik di `process.cwd()/public/uploads`.
- Log akses `/api` **tidak pernah** mencatat body response (M-01) — sengaja tanpa daftar putih path, supaya endpoint baru ber-PII tidak diam-diam ikut tercatat.

---

## 8. HAL PENTING / QUIRKS

### Keamanan yang sudah terpasang (ringkas)
| Kode | Isi |
|---|---|
| C-01/C-02/H-01 | Guard route katalog & mikrotik legacy (modulnya kini dihapus) |
| C-03 | Kredensial default dinetralkan dari berkas yang di-track |
| C-04 | `nosniff` di `/uploads`, `safeUpload`, guard sebelum multer |
| H-02 | Rate limit login 2 lapis + perbaikan IP yang bisa dipalsukan di audit log |
| H-03 | Cookie `Secure` di produksi + `session.regenerate()` saat login |
| H-04 | Sanitasi body 5xx + correlation ID (`errorSanitizer.ts`) |
| H-05 | `npm audit fix` + hapus paket drizzle |
| H-06 | Header keamanan dasar → CSP Report-Only → **CSP enforce** |
| M-01 | Berhenti mencatat body response (kebocoran PII ke log PM2) |
| M-03 | Pengerasan pendaftaran training (rate limit, anti-duplikat, race kuota) |
| M-04/M-07 | Gambar yatim saat DB gagal; UNIQUE SKU V-SOL |
| M-06 | React production build + lazy load route admin |
| L-01/L-06 | Hapus route auth per-brand; komponen katalog bersama |

### Deploy (produksi: pm2 + WinSCP)
1. `npm run build` → `dist/index.cjs` (server) + `dist/public/` (client).
2. Upload **replace folder `dist/`** via WinSCP.
3. **`pm2 restart dcsindo`** (proses bernama `dcsindo`, id 0). ⚠️ **Jangan sentuh** proses `hrdcsindo` (id 1) — aplikasi terpisah.
4. Verifikasi: `pm2 logs dcsindo --lines 30` → cari `serving on port` + `[MySQL] ✅ Database connected!`.

**JANGAN ditimpa saat upload:**
- **`public/uploads/`** (di ROOT server, bukan di `dist/`) — isinya sekarang bukan foto produk saja:
  - `mikrotik-dcs/`, `ubiquiti-dcs/`, `vsol-dcs/`, `fiberhome/`, `products/` — foto produk hasil upload admin
  - `training/` — thumbnail, QR, galeri dokumentasi
  - `firmware/` — berkas firmware (bisa ratusan MB)
  - **`hero/`** — ⭐ video hero homepage (`hero-1.mp4` … `hero-3.mp4`). **Sengaja tidak ada di repo**; hanya poster `.webp`-nya yang di-track (`client/public/images/hero/`) supaya hero tetap tampil benar di mesin developer. Menimpa folder ini = homepage kehilangan video.
- `dist/public/truefalse.json` — feature flag yang sering diedit live di server.
- `.env` server & `node_modules/`.

⚠️ **`.env`**: `pm2 restart` biasa **tidak** reload env. Setelah mengubah `.env` di server → `pm2 restart dcsindo --update-env`.

### Konfigurasi sisi server (di luar repo)
Tidak ikut ter-deploy oleh langkah di atas — dikelola langsung di server:
- **Apache**: `AllowEncodedSlashes NoDecode` dipasang di **semua vhost** (bukan hanya satu), redirect **HTTP → HTTPS**, dan header **HSTS**. TLS diterminasi di Apache; Node membaca `X-Forwarded-Proto` (lihat H-03 di §4).
- **pm2-logrotate** aktif agar log PM2 tidak tumbuh tanpa batas.
- Upload firmware besar: `requestTimeout` dinaikkan ke 30 menit di `server/index.ts`.

### Utang teknis / risiko (yang masih terbuka)
1. **Auth frontend dobel & tidak konsisten** (`authGate` in-memory vs `GET /api/auth/me`) → refresh bisa melempar ke login. `authGate` masih dipanggil `Login.tsx`/`Dashboard.tsx` demi kompatibilitas halaman lama.
2. **Pemisahan role belum disebar penuh.** `requireRole` & `roleHome()` sudah ada dan `trainer`/`sales` sudah terdefinisi, tapi sebagian besar guard masih `requireRole("admin")`. Modul per-role belum benar-benar terpisah.
3. **Copy bahasa Indonesia di halaman publik** — terbesar di modul **training** (form pendaftaran: "Nama lengkap", "Daftar Sekarang", "Kembali ke Training") dan **firmware** (`DownloadConfirmDialog`, `FirmwareDetailModal`, termasuk disclaimer risiko flashing). Katalog MikroTik, `ChunkErrorBoundary`, dan `layout.tsx` juga masih ada sisa. `TrainingList.tsx:186` bahkan mencampur dua bahasa dalam satu ekspresi (`completed ? "Lihat Dokumentasi" : "View Details"`).
4. **M-05 — pagination** belum dikerjakan: endpoint list masih mengembalikan seluruh baris.
5. **Komentar usang di `lib/contact.ts`** — masih menyebut `DCS_WHATSAPP_PRIMARY` "dipertahankan untuk pemakai lama (FiberHomePage, FiberHomeProductDetail, TrainingDetail)", padahal ketiganya sudah pindah ke `buildWhatsAppUrl()`. Export-nya kini **0 pemakai** tapi sengaja belum dihapus.
6. **`mikrotik_dcs_product_technical_items` kosong di produksi** — jalur kode lengkap (model → controller → ProductForm) tapi belum ada isinya.
7. **Field video mati di `client/src/mikrotik/landing/data.ts`** — tiga entri menunjuk `/videos/*.mp4` yang **tidak ada** di repo maupun server.
8. **`client/src/pages/cart.tsx` file mati** — tidak dirouting & tidak diimpor dari mana pun.
9. **Dependency terpasang tapi tidak dipakai**: `ejs` (sisa katalog SSR yang sudah dihapus) dan `react-router-dom` (routing pakai wouter).
10. **Rate-limit store di memori proses** — benar hanya selama PM2 jalan **fork mode satu instance**. Kalau diubah ke cluster, batas efektif terkali jumlah instance, tanpa error dan tanpa peringatan.

---

## LAMPIRAN — Titik sentuh untuk fitur baru

### A. Sistem 3 role (admin / trainer / sales) — **sebagian besar sudah jadi**
| Bagian | Status | Lokasi |
|---|---|---|
| Tabel `users` (`id`, `username` UNIQUE, `password_hash`, `role`, `name`, `is_active`, timestamps), auto-create | ✅ selesai | `server/models/userModel.ts` |
| Verifikasi password **bcrypt** | ✅ selesai | `userModel.ts` (10 rounds) |
| Login set `req.session.userId/username/role` | ✅ selesai | `server/controllers/authController.ts` |
| `SessionData` diperluas (`userId`, `username`, `role`) | ✅ selesai | `server/types/express-session.d.ts` |
| `requireRole("admin"\|"trainer"\|"sales")` + versi middleware | ✅ selesai | `server/middleware/requireRole.ts` |
| `/auth/me` kirim `role`; frontend pakai `RequireRole` + `roleHome()` | ✅ selesai | `authController.ts`, `admin/session.ts`, `admin/RequireRole.tsx` |
| Session store persisten | ✅ selesai | `server/index.ts` (express-mysql-session) |
| CRUD user + role dari panel | ✅ selesai | `server/controllers/usersController.ts`, `admin/Users.tsx` |
| **Sisa pekerjaan**: sebar guard non-admin ke modul (trainer → training saja, sales → katalog/peserta saja) | 🔶 terbuka | controllers + `NavBar.tsx` |

### B. Sistem training lengkap (pendaftaran publik + laporan + dokumentasi) — **sebagian besar sudah jadi**
| Bagian | Status | Lokasi |
|---|---|---|
| Tabel `training_registrations` | ✅ selesai | `database/migrate_training_registrations_m03.sql` |
| Endpoint publik `POST /api/training/:id/register` + validasi kapasitas | ✅ selesai | `trainingRoutes.ts`, `trainingApiController.ts`, `trainingRegistrationModel.ts` |
| Pengerasan M-03: rate limit, anti-duplikat, perbaikan race kuota | ✅ selesai | `middleware/trainingRateLimit.ts` + model |
| Halaman publik pendaftaran (form) | ✅ selesai | `client/src/pages/training/TrainingDetail.tsx` |
| Dashboard peserta + ubah status | ✅ selesai | `client/src/admin/Peserta.tsx` |
| Galeri dokumentasi | ✅ selesai | `training_gallery` + `TrainingForm.tsx` |
| **Sisa pekerjaan**: ekspor laporan (CSV/Excel) & pembatasan akses per role | 🔶 terbuka | controller + `Peserta.tsx` |

> Memanfaatkan yang sudah ada: `computeStatus()` (Upcoming/Ongoing/Completed), `training_gallery` (dokumentasi foto), pola transaksi di `trainingModel.ts`, dan `requireRole` agar trainer hanya akses modul training, sales akses katalog/peserta, admin akses semua — **tanpa merombak UI yang sudah berjalan**.
