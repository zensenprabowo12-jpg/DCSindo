"use client";

import { useEffect, useState } from "react";

function useDarkMode(): boolean {
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

export default function LandingBackground({ children }: { children: React.ReactNode }) {
  const isDark = useDarkMode();

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: "url(/images/batik/batik-mikrotik1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      {/* OVERLAY GELAP - satu untuk semua section */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isDark ? "rgba(10,10,15,0.76)" : "rgba(28,20,14,0.68)",
          transition: "background 0.5s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* GLOW AMBIENT */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "5%", left: "10%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.10) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", top: "40%", right: "5%", width: "35vw", height: "35vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "30%", width: "35vw", height: "35vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      {/* GRID TEXTURE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage: "linear-gradient(rgba(255,107,53,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
