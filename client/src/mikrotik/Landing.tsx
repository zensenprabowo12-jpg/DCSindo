import Layout from "@/components/layout";
import SectionShell from "./landing/components/SectionShell";
import HeroSection from "./landing/components/HeroSection";
import ProductShowcase from "./landing/components/ProductShowcase";
import VideoAndCategory from "./landing/components/VideoAndCategory";
import WhyChooseUs from "./landing/components/WhyChooseUs";
import LandingBackground from "./landing/components/LandingBackground";
import { LANDING_CATEGORIES, LANDING_PRODUCTS, LANDING_VIDEO } from "./landing/data";
import { Link } from "wouter";
import { ArrowRight, FlaskConical, Award } from "lucide-react";

function TrainingShortcut() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(255,107,53,0.03) 100%)",
        borderTop: "1px solid rgba(255,107,53,0.15)",
        borderBottom: "1px solid rgba(255,107,53,0.15)",
        padding: "64px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 40 }}>
        <div style={{ flex: "1 1 300px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#FF6B35", marginBottom: 10 }}>
            DCS Training Center
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "#E8E4DC", lineHeight: 1.2, marginBottom: 14 }}>
            MikroTik Training &amp; Workshop
          </h2>
          <p style={{ fontSize: 15, color: "rgba(232,228,220,0.6)", lineHeight: 1.7, marginBottom: 24 }}>
            Master RouterOS, network configuration, and MikroTik deployment with experienced instructors. Available for all skill levels.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            {[
              { icon: <FlaskConical size={13} />, label: "Hands-On Lab" },
              { icon: <Award size={13} />, label: "Certified" },
            ].map((b) => (
              <span
                key={b.label}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 12, fontWeight: 700, padding: "5px 12px",
                  borderRadius: 100, border: "1px solid rgba(255,107,53,0.35)",
                  color: "#FF6B35", background: "rgba(255,107,53,0.08)",
                }}
              >
                {b.icon}
                {b.label}
              </span>
            ))}
          </div>
          <Link href="/training?brand=MikroTik">
            <a
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 28px", borderRadius: 100,
                background: "#FF6B35", color: "#000",
                fontSize: 14, fontWeight: 800, textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View Training Schedule
              <ArrowRight size={16} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function MikrotikLandingPage() {
  return (
    <Layout>
      {/* Tiga section pertama share satu background batik */}
      <LandingBackground>
        <SectionShell id="mikrotik-home-1">
          <HeroSection />
        </SectionShell>

        <SectionShell id="mikrotik-home-a" className="min-h-screen">
          <ProductShowcase products={LANDING_PRODUCTS} />
        </SectionShell>

        <SectionShell id="mikrotik-home-b" className="min-h-screen">
          <VideoAndCategory
            title={LANDING_VIDEO.title}
            description={LANDING_VIDEO.description}
            videoId={LANDING_VIDEO.videoId}
            categories={LANDING_CATEGORIES}
          />
        </SectionShell>
      </LandingBackground>

      {/* Training shortcut */}
      <TrainingShortcut />

      {/* WhyChooseUs punya background sendiri — sudah bagus */}
      <SectionShell id="mikrotik-home-c" className="min-h-screen">
        <WhyChooseUs />
      </SectionShell>
    </Layout>
  );
}
