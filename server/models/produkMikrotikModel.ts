import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";

export type ProdukMikrotikRow = {
  id: number;
  nama_produk: string;
  deskripsi: string;
  spesifikasi: string;
  harga: string | null;
  gambar: string;
  created_at: Date;
};

function mapRow(r: RowDataPacket): ProdukMikrotikRow {
  return {
    id: r.id,
    nama_produk: r.nama_produk,
    deskripsi: r.deskripsi,
    spesifikasi: r.spesifikasi,
    harga: r.harga === null || r.harga === undefined ? null : String(r.harga),
    gambar: r.gambar ?? "",
    created_at: r.created_at,
  };
}

export async function findAllProdukMikrotik(): Promise<ProdukMikrotikRow[]> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    "SELECT id, nama_produk, deskripsi, spesifikasi, harga, gambar, created_at FROM produk_mikrotik ORDER BY created_at DESC, id DESC",
  );
  return rows.map(mapRow);
}

export async function findProdukMikrotikById(
  id: number,
): Promise<ProdukMikrotikRow | null> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    "SELECT id, nama_produk, deskripsi, spesifikasi, harga, gambar, created_at FROM produk_mikrotik WHERE id = :id LIMIT 1",
    { id },
  );
  if (!rows.length) return null;
  return mapRow(rows[0]);
}

export type ProdukMikrotikInput = {
  nama_produk: string;
  deskripsi: string;
  spesifikasi: string;
  harga: number | null;
  gambar: string;
};

export async function insertProdukMikrotik(
  input: ProdukMikrotikInput,
): Promise<number> {
  const [result] = await mysqlPool.execute<ResultSetHeader>(
    `INSERT INTO produk_mikrotik (nama_produk, deskripsi, spesifikasi, harga, gambar)
     VALUES (:nama_produk, :deskripsi, :spesifikasi, :harga, :gambar)`,
    {
      nama_produk: input.nama_produk,
      deskripsi: input.deskripsi,
      spesifikasi: input.spesifikasi,
      harga: input.harga,
      gambar: input.gambar,
    },
  );
  return result.insertId;
}

export async function updateProdukMikrotik(
  id: number,
  input: ProdukMikrotikInput,
): Promise<boolean> {
  const [result] = await mysqlPool.execute<ResultSetHeader>(
    `UPDATE produk_mikrotik SET
       nama_produk = :nama_produk,
       deskripsi = :deskripsi,
       spesifikasi = :spesifikasi,
       harga = :harga,
       gambar = :gambar
     WHERE id = :id`,
    {
      id,
      nama_produk: input.nama_produk,
      deskripsi: input.deskripsi,
      spesifikasi: input.spesifikasi,
      harga: input.harga,
      gambar: input.gambar,
    },
  );
  return result.affectedRows > 0;
}

export async function deleteProdukMikrotik(id: number): Promise<boolean> {
  const [result] = await mysqlPool.execute<ResultSetHeader>(
    "DELETE FROM produk_mikrotik WHERE id = :id",
    { id },
  );
  return result.affectedRows > 0;
}
