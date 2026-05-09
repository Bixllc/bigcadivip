import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import ValuesSection from "@/components/ValuesSection";
import CTABanner from "@/components/CTABanner";

export default function AboutPage() {
  return (
    <main className="pt-32">
      <section className="pb-24 bg-dark">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionTag>About Big Cadi VIP</SectionTag>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6 max-w-4xl">
              The premier VIP transportation service in St. Maarten.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/50 text-sm tracking-wide max-w-2xl mb-12">
              Big Cadi VIP was founded with one mission: to give every visitor and resident of St. Maarten a luxury transportation experience. Whether you&apos;re landing at Princess Juliana, heading to a resort, or exploring the island, we make every ride first-class.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="h-80 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/30 text-sm">
                Image placeholder
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-2xl font-bold mb-4">Why choose Big Cadi VIP?</h2>
              <ul className="space-y-4 text-white/50">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">01</span>
                  <span><strong className="text-white">Local Knowledge</strong> — Our drivers know every beach, restaurant, and shortcut on the island.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">02</span>
                  <span><strong className="text-white">Premium Fleet</strong> — Clean, comfortable, and well-maintained vehicles for every occasion.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">03</span>
                  <span><strong className="text-white">Always On Time</strong> — We track your flight and adjust pickup times automatically.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">04</span>
                  <span><strong className="text-white">24/7 Availability</strong> — Book anytime. We operate around the clock.</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <ValuesSection />
      <CTABanner />
    </main>
  );
}
