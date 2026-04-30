import express from "express";
import cors from "cors";
import "dotenv/config";
import mysql from "mysql2/promise";

const app = express();
app.use(cors());
app.use(express.json());

console.log("Server mulai...");

// ================= DB CONFIG =================
function requiredEnv(name) {
  const v = process.env[name];
  if (!v || !String(v).trim()) {
    throw new Error(`[server1][MySQL] ENV "${name}" wajib di-set (cek file .env).`);
  }
  return String(v).trim();
}

const MYSQL_HOST = requiredEnv("MYSQL_HOST");
const MYSQL_PORT = Number.parseInt(process.env.MYSQL_PORT || "3306", 10);
const MYSQL_USER = requiredEnv("MYSQL_USER");
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "";
const MYSQL_DATABASE = requiredEnv("MYSQL_DATABASE");

const db = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  namedPlaceholders: true,
});

(async () => {
  try {
    const conn = await db.getConnection();
    try {
      await conn.ping();
      console.log(
        `✅ [server1][MySQL] Connected to "${MYSQL_DATABASE}" at ${MYSQL_HOST}:${MYSQL_PORT} (user: "${MYSQL_USER}")`,
      );
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("❌ [server1][MySQL] DB Error:", err?.message ?? err);
  }
})();

// ================= ROOT =================
app.get("/", (req, res) => {
  res.send("API DCSINDO jalan 🚀");
});

// ===================================================
// 🔥 1. GET SEMUA PRODUK + KATEGORI
// ===================================================
app.get("/produk", async (_req, res) => {
  const sql = `
    SELECT 
      p.*, 
      k.nama_kategori 
    FROM produk_mikrotik p
    LEFT JOIN kategori_mikrotik k 
    ON p.kategori_id = k.id
    ORDER BY p.id DESC
  `;

  try {
    const [rows] = await db.query(sql);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "DB error", error: err?.message ?? String(err) });
  }
});

// ===================================================
// 🔥 2. GET DETAIL PRODUK + BULLET + GAMBAR
// ===================================================
app.get("/produk/:id", async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  if (!Number.isFinite(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  const produkQuery = `
    SELECT * FROM produk_mikrotik WHERE id = ?
  `;

  const bulletQuery = `
    SELECT * FROM produk_bullet WHERE produk_id = ?
  `;

  const gambarQuery = `
    SELECT * FROM produk_gambar WHERE produk_id = ?
  `;

  try {
    const [[produkRows], [bulletRows], [gambarRows]] = await Promise.all([
      db.query(produkQuery, [id]),
      db.query(bulletQuery, [id]),
      db.query(gambarQuery, [id]),
    ]);

    res.json({
      produk: Array.isArray(produkRows) ? produkRows[0] : null,
      bullet: bulletRows,
      gambar: gambarRows,
    });
  } catch (err) {
    return res.status(500).json({ message: "DB error", error: err?.message ?? String(err) });
  }
});

// ===================================================
// 🔥 3. GET KATEGORI
// ===================================================
app.get("/kategori", async (_req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM kategori_mikrotik");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "DB error", error: err?.message ?? String(err) });
  }
});

// ===================================================
// 🔥 4. TAMBAH PRODUK
// ===================================================
app.post("/produk", async (req, res) => {
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

  try {
    const [result] = await db.query(sql, [
      sku,
      nama_produk,
      kategori_id,
      deskripsi,
      gambar_utama,
      video,
    ]);
    res.json({ message: "Produk berhasil ditambahkan", id: result.insertId });
  } catch (err) {
    res.status(500).json({ message: "DB error", error: err?.message ?? String(err) });
  }
});

// ===================================================
// 🔥 5. TAMBAH BULLET
// ===================================================
app.post("/produk/:id/bullet", async (req, res) => {
  const produk_id = Number.parseInt(req.params.id, 10);
  if (!Number.isFinite(produk_id)) {
    return res.status(400).json({ message: "Invalid id" });
  }
  const { isi_bullet } = req.body;

  const sql = `
    INSERT INTO produk_bullet (produk_id, isi_bullet)
    VALUES (?, ?)
  `;

  try {
    await db.query(sql, [produk_id, isi_bullet]);
    res.json({ message: "Bullet ditambahkan" });
  } catch (err) {
    res.status(500).json({ message: "DB error", error: err?.message ?? String(err) });
  }
});

// ===================================================
// 🔥 6. TAMBAH GAMBAR
// ===================================================
app.post("/produk/:id/gambar", async (req, res) => {
  const produk_id = Number.parseInt(req.params.id, 10);
  if (!Number.isFinite(produk_id)) {
    return res.status(400).json({ message: "Invalid id" });
  }
  const { gambar } = req.body;

  const sql = `
    INSERT INTO produk_gambar (produk_id, gambar)
    VALUES (?, ?)
  `;

  try {
    await db.query(sql, [produk_id, gambar]);
    res.json({ message: "Gambar ditambahkan" });
  } catch (err) {
    res.status(500).json({ message: "DB error", error: err?.message ?? String(err) });
  }
});

// ===================================================
// 🔥 7. DELETE PRODUK
// ===================================================
app.delete("/produk/:id", async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  if (!Number.isFinite(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  try {
    await db.query("DELETE FROM produk_mikrotik WHERE id = ?", [id]);
    res.json({ message: "Produk dihapus" });
  } catch (err) {
    res.status(500).json({ message: "DB error", error: err?.message ?? String(err) });
  }
});

// ===================================================
// 🔥 8. UPDATE PRODUK
// ===================================================
app.put("/produk/:id", async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  if (!Number.isFinite(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }
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

  try {
    await db.query(sql, [
      sku,
      nama_produk,
      kategori_id,
      deskripsi,
      gambar_utama,
      video,
      id,
    ]);
    res.json({ message: "Produk diupdate" });
  } catch (err) {
    res.status(500).json({ message: "DB error", error: err?.message ?? String(err) });
  }
});

// ================= RUN SERVER =================
const PORT = Number.parseInt(process.env.PORT || "5000", 10);
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server jalan di port ${PORT}`);
});