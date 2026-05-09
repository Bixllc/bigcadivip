import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import AnimatedLink from "@/components/AnimatedLink";
import CTABanner from "@/components/CTABanner";

export default function PrivateChartersPage() {
  return (
    <main className="pt-32">
      <section className="pb-24 bg-dark">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionTag>Private Charters</SectionTag>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
              Your island, your schedule.
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mb-12">
              A dedicated vehicle and driver at your disposal. Perfect for events, corporate travel, nightlife, or a full day exploring at your own pace.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <ScrollReveal>
              <div className="h-80 bg-dark-soft rounded-2xl flex items-center justify-center text-white/50 text-sm">
                Image placeholder
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-2xl font-bold mb-6">What&apos;s included</h2>
              <ul className="space-y-4">
                {[
                  "Dedicated vehicle & driver",
                  "Fully customizable itinerary",
                  "Hourly or full-day rates",
                  "Event transportation (weddings, parties)",
                  "Nightlife & dinner service",
                  "Corporate travel packages",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/50">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="flex flex-wrap gap-4">
              <AnimatedLink href="/booking">Book Private Charter</AnimatedLink>
              <AnimatedLink href="/services" variant="outline">All Services</AnimatedLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
