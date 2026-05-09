import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import AnimatedLink from "@/components/AnimatedLink";
import CTABanner from "@/components/CTABanner";

export default function HotelShuttlesPage() {
  return (
    <main className="pt-32">
      <section className="pb-24 bg-dark">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionTag>Hotel &amp; Resort Shuttles</SectionTag>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
              Reliable resort transfers.
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mb-12">
              Door-to-door shuttle service between your accommodation and anywhere on the island. We work with 50+ hotels and resorts across SXM.
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
                  "Door-to-door service",
                  "Scheduled pickups",
                  "Group accommodation (up to 8 passengers)",
                  "Luggage handling",
                  "Partnerships with 50+ hotels & resorts",
                  "Air-conditioned comfort",
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
              <AnimatedLink href="/booking">Book Hotel Shuttle</AnimatedLink>
              <AnimatedLink href="/services" variant="outline">All Services</AnimatedLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
