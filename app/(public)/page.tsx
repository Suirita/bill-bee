import HeroSection from "@/components/landing/hero-section";
import HorizontalStory from "@/components/landing/horizontal-story";
import LandingFooter from "@/components/landing/landing-footer";
import LandingNavbar from "@/components/landing/landing-navbar";
import PricingSection from "@/components/landing/pricing-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f8f3e8] text-[#1d1d1b]">
      <LandingNavbar />
      <HeroSection />
      <HorizontalStory />
      <PricingSection />
      <LandingFooter />
    </main>
  );
}
