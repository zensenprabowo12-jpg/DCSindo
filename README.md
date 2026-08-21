## DCSindo (React + Express + MySQL)

### Konfigurasi Environment

Salin `env.example` menjadi `.env`, lalu sesuaikan nilai-nilainya (terutama koneksi database dan `SESSION_SECRET`).

```bash
copy env.example .env
```

### Menjalankan di Local / Server

- Development (Express + Vite via middleware):

```bash
npm run dev
```

- Production build:

```bash
npm run build
set NODE_ENV=production
npm start
```

### Menjalankan dengan PM2 (recommended di server)

Install PM2:

```bash
npm i -g pm2
```

Jalankan:

```bash
set NODE_ENV=production
pm2 start dist/index.cjs --name dcsindo
pm2 save
pm2 logs dcsindo
```

### Catatan koneksi database

- **Client (React)** tidak perlu akses langsung ke MySQL.
- **Backend (Express)** yang melakukan koneksi ke database menggunakan env `DB_HOST/DB_PORT/DB_USER/DB_PASSWORD/DB_NAME` (atau `DB_SOCKET` bila memakai UNIX socket).
- Jika database berada di mesin/server yang sama dengan backend, `DB_HOST=localhost` adalah pilihan yang benar.

