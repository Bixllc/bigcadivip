import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceCards />
      <AboutSection />
      <ServicesGrid />
    </main>
  );
}
