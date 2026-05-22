import Layout from "@/components/layout";
import SectionShell from "./landing/components/SectionShell";
import HeroSection from "./landing/components/HeroSection";
import ProductShowcase from "./landing/components/ProductShowcase";
import VideoAndCategory from "./landing/components/VideoAndCategory";
import WhyChooseUs from "./landing/components/WhyChooseUs";
import LandingBackground from "./landing/components/LandingBackground";
import { LANDING_CATEGORIES, LANDING_PRODUCTS, LANDING_VIDEO } from "./landing/data";

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

      {/* WhyChooseUs punya background sendiri — sudah bagus */}
      <SectionShell id="mikrotik-home-c" className="min-h-screen">
        <WhyChooseUs />
      </SectionShell>
    </Layout>
  );
}
