import "dotenv/config";
import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

console.log("Server mulai...");

// ================= DB CONFIG =================
// NOTE:
// - File `server/` adalah backend utama (TS).
// - `server1/` terlihat sebagai backend legacy untuk katalog lama.
// Perbaikan di bawah ini mempertahankan default lama, tapi menghindari credential hardcoded.
const dbHost = process.env.MYSQL_HOST ?? "localhost";
const dbUser = process.env.MYSQL_USER ?? "root";
const dbPassword = process.env.MYSQL_PASSWORD ?? "";
// Legacy default: "newdcs" (jika Anda sudah migrate ke "dcsindo", set MYSQL_DATABASE di .env)
const dbName = process.env.MYSQL_DATABASE ?? "newdcs";
const dbPort = Number.parseInt(process.env.MYSQL_PORT ?? "3306", 10);

const db = mysql.createConnection({
  host: dbHost,
  port: dbPort,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB Error:", err);
  } else {
    console.log(`✅ DB Connected (${dbHost}:${dbPort}/${dbName} as ${dbUser})`);
  }
});

// ================= ROOT =================
app.get("/", (req, res) => {
  res.send("API DCSINDO jalan 🚀");
});

// ===================================================
// 🔥 1. GET SEMUA PRODUK + KATEGORI
// ===================================================
app.get("/produk", (req, res) => {
  const sql = `
    SELECT 
      p.*, 
      k.nama_kategori 
    FROM produk_mikrotik p
    LEFT JOIN kategori_mikrotik k 
    ON p.kategori_id = k.id
    ORDER BY p.id DESC
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// ===================================================
// 🔥 2. GET DETAIL PRODUK + BULLET + GAMBAR
// ===================================================
app.get("/produk/:id", (req, res) => {
  const id = req.params.id;

  const produkQuery = `
    SELECT * FROM produk_mikrotik WHERE id = ?
  `;

  const bulletQuery = `
    SELECT * FROM produk_bullet WHERE produk_id = ?
  `;

  const gambarQuery = `
    SELECT * FROM produk_gambar WHERE produk_id = ?
  `;

  db.query(produkQuery, [id], (err, produk) => {
    if (err) return res.status(500).json(err);

    db.query(bulletQuery, [id], (err, bullet) => {
      if (err) return res.status(500).json(err);

      db.query(gambarQuery, [id], (err, gambar) => {
        if (err) return res.status(500).json(err);

        res.json({
          produk: produk[0],
          bullet,
          gambar,
        });
      });
    });
  });
});

// ===================================================
// 🔥 3. GET KATEGORI
// ===================================================
app.get("/kategori", (req, res) => {
  db.query("SELECT * FROM kategori_mikrotik", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// ===================================================
// 🔥 4. TAMBAH PRODUK
// ===================================================
app.post("/produk", (req, res) => {
  const {
    sku,
    nama_produk,
    kategori_id,
    deskripsi,
    gambar_utama,
    video,
  } = req.body;

  const sql = `
    INSERT INTO produk_mikrotik 
    (sku, nama_produk, kategori_id, deskripsi, gambar_utama, video)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [sku, nama_produk, kategori_id, deskripsi, gambar_utama, video],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Produk berhasil ditambahkan", id: result.insertId });
    }
  );
});

// ===================================================
// 🔥 5. TAMBAH BULLET
// ===================================================
app.post("/produk/:id/bullet", (req, res) => {
  const produk_id = req.params.id;
  const { isi_bullet } = req.body;

  const sql = `
    INSERT INTO produk_bullet (produk_id, isi_bullet)
    VALUES (?, ?)
  `;

  db.query(sql, [produk_id, isi_bullet], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Bullet ditambahkan" });
  });
});

// ===================================================
// 🔥 6. TAMBAH GAMBAR
// ===================================================
app.post("/produk/:id/gambar", (req, res) => {
  const produk_id = req.params.id;
  const { gambar } = req.body;

  const sql = `
    INSERT INTO produk_gambar (produk_id, gambar)
    VALUES (?, ?)
  `;

  db.query(sql, [produk_id, gambar], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Gambar ditambahkan" });
  });
});

// ===================================================
// 🔥 7. DELETE PRODUK
// ===================================================
app.delete("/produk/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM produk_mikrotik WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Produk dihapus" });
  });
});

// ===================================================
// 🔥 8. UPDATE PRODUK
// ===================================================
app.put("/produk/:id", (req, res) => {
  const id = req.params.id;
  const {
    sku,
    nama_produk,
    kategori_id,
    deskripsi,
    gambar_utama,
    video,
  } = req.body;

  const sql = `
    UPDATE produk_mikrotik 
    SET sku=?, nama_produk=?, kategori_id=?, deskripsi=?, gambar_utama=?, video=?
    WHERE id=?
  `;

  db.query(
    sql,
    [sku, nama_produk, kategori_id, deskripsi, gambar_utama, video, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Produk diupdate" });
    }
  );
});

// ================= RUN SERVER =================
const port = Number.parseInt(process.env.PORT ?? "5000", 10);
app.listen(port, () => {
  console.log(`🚀 Server jalan di http://localhost:${port}`);
});