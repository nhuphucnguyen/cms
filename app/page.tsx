import { SiteNavbar } from "@/components/SiteNavbar";
import { Hero } from "@/components/Hero";
import { ProductsSection } from "@/components/ProductsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { InsightsSection } from "@/components/InsightsSection";
import { CareersCTA } from "@/components/CareersCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <Hero />
      <ProductsSection />
      <HowItWorksSection />
      <InsightsSection />
      <CareersCTA />
      <Footer />
    </div>
  );
}

