import { Download, X } from "lucide-react";
import { Link } from "wouter";

const SLIDES = [
  { src: "/images/company-profile/1.png", alt: "Cover – PT. Dinamika Cipta Solusi" },
  { src: "/images/company-profile/2.png", alt: "Table of Contents" },
  { src: "/images/company-profile/3.png", alt: "About Company" },
  { src: "/images/company-profile/4.png", alt: "Our Vision & Mission" },
  { src: "/images/company-profile/5.png", alt: "Our Products" },
  { src: "/images/company-profile/6.png", alt: "Products Detail" },
  { src: "/images/company-profile/7.png", alt: "Why Buy From Us?" },
  { src: "/images/company-profile/8.png", alt: "Contact Us" },
];

export default function CompanyProfile() {
  return (
    <>
      <style>{`
        @media print {
          @page { size: landscape; margin: 0; }
          body * { visibility: hidden; }
          #cp-print-area, #cp-print-area * { visibility: visible; }
          #cp-print-area { position: fixed; top: 0; left: 0; width: 100%; }
          .cp-no-print { display: none !important; }
          .cp-slide {
            page-break-before: always;
            page-break-inside: avoid;
            break-before: page;
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
          }
          .cp-slide:first-child { page-break-before: auto; break-before: auto; }
          .cp-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        }
        @media screen {
          .cp-slide { width: 100%; aspect-ratio: 16/9; position: relative; overflow: hidden; }
          .cp-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
        }
      `}</style>

      {/* Back button + Download – floating bar */}
      <div
        className="cp-no-print"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 24px",
          background: "rgba(10,8,4,0.80)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        <Link href="/">
          <a
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#D4AF37",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            <X size={16} />
            Close
          </a>
        </Link>

        <span style={{ color: "#D4AF37", fontWeight: 800, fontSize: 15, letterSpacing: "0.08em" }}>
          PT. Dinamika Cipta Solusi — Company Profile
        </span>

        <button
          onClick={() => window.print()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 999,
            background: "linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)",
            color: "#1A1208",
            fontWeight: 700,
            fontSize: 13,
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.05em",
          }}
        >
          <Download size={15} />
          Download PDF
        </button>
      </div>

      {/* Slides */}
      <div id="cp-print-area" style={{ paddingTop: 53 }}>
        {SLIDES.map((slide, i) => (
          <div key={i} className="cp-slide">
            <img src={slide.src} alt={slide.alt} loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
      </div>
    </>
  );
}
