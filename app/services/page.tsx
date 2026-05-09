import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import AnimatedLink from "@/components/AnimatedLink";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    title: "Airport Transfers",
    description: "Seamless pickups and drop-offs at Princess Juliana International Airport. We track your flight so we&apos;re always on time, no matter what.",
    href: "/services/airport-transfers",
  },
  {
    title: "Island Tours",
    description: "Discover the best of St. Maarten — from Maho Beach to Marigot Market, Orient Bay to Philipsburg. Full-day or half-day tours with a knowledgeable local driver.",
    href: "/services/island-tours",
  },
  {
    title: "Hotel & Resort Shuttles",
    description: "Reliable shuttle service between your hotel or resort and anywhere on the island. We partner with 50+ properties across SXM.",
    href: "/services/hotel-shuttles",
  },
  {
    title: "Private Charters",
    description: "Luxury private rides for weddings, dinners, nightlife, corporate events, or a full day exploring at your own pace.",
    href: "/services/private-charters",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <section className="pb-24 bg-dark">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionTag>Our services</SectionTag>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
              Premium transportation, your way.
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mb-16">
              From airport arrivals to island adventures, Big Cadi VIP covers every ride you need in St. Maarten.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/5 border border-white/10 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                    <p className="text-white/50 mb-6">{service.description}</p>
                    <AnimatedLink href={service.href} variant="outline">Learn more</AnimatedLink>
                  </div>
                  <div className="h-64 bg-white/5 rounded-xl flex items-center justify-center text-white/50 text-sm overflow-hidden">
                    <div className="transition-transform duration-500 group-hover:scale-105">
                      Image placeholder
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
