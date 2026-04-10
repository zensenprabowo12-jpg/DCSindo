import { useEffect, useState } from "react";

export default function MikrotikPage() {
  const [produk, setProduk] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/produk")
      .then((res) => res.json())
      .then((data) => {
        setProduk(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Produk MikroTik
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={gridStyle}>
          {produk.map((item) => (
            <div key={item.id} style={cardStyle}>
              
              {/* GAMBAR */}
              <img
                src={item.gambar_utama || "https://via.placeholder.com/200"}
                alt={item.nama_produk}
                style={imgStyle}
              />

              {/* INFO */}
              <h2 style={{ fontSize: "18px" }}>{item.nama_produk}</h2>

              <p style={{ color: "gray", fontSize: "14px" }}>
                {item.nama_kategori}
              </p>

              <p style={{ fontSize: "14px" }}>
                {item.deskripsi?.slice(0, 80)}...
              </p>

              {/* BUTTON */}
              <button
                style={buttonStyle}
                onClick={() =>
                  window.location.href = `/mikrotik/${item.id}`
                }
              >
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ================= STYLE =================
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  border: "1px solid #eee",
  borderRadius: "12px",
  padding: "16px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  transition: "0.3s",
};

const imgStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover" as const,
  borderRadius: "8px",
  marginBottom: "10px",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "10px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};