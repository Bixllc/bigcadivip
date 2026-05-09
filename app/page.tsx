import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import StatsBar from "@/components/StatsBar";
import Testimonial from "@/components/Testimonial";
import ValuesSection from "@/components/ValuesSection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceCards />
      <AboutSection />
      <ServicesGrid />
      <StatsBar />
      <Testimonial />
      <ValuesSection />
      <CTABanner />
    </main>
  );
}
