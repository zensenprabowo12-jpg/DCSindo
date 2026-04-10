import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailProduk() {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/produk/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [id]);

  if (!data) return <p style={{ padding: 40 }}>Loading...</p>;

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      
      <h1>{data.produk.nama_produk}</h1>

      {/* GAMBAR UTAMA */}
      <img
        src={data.produk.gambar_utama}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p style={{ marginTop: "20px" }}>
        {data.produk.deskripsi}
      </p>

      {/* BULLET */}
      <h3>Spesifikasi:</h3>
      <ul>
        {data.bullet.map((b: any) => (
          <li key={b.id}>{b.isi_bullet}</li>
        ))}
      </ul>

      {/* GAMBAR TAMBAHAN */}
      <h3>Gallery:</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {data.gambar.map((g: any) => (
          <img
            key={g.id}
            src={g.gambar}
            style={{ width: "120px", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
}