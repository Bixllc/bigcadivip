"use client";
import ScrollReveal from "./ScrollReveal";
import AnimatedLink from "./AnimatedLink";

const services = [
  {
    title: "Airport Transfers",
    href: "/services/airport-transfers",
    image: "/images/hero-maho.jpg",
  },
  {
    title: "Hotel & Resort Shuttles",
    href: "/services/hotel-shuttles",
    image: "/images/aerial-grandcase.jpg",
  },
  {
    title: "Island Tours",
    href: "/services/island-tours",
    image: "/images/beach-restaurant.webp",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-dark-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-medium">Services.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/50 text-sm tracking-wide">
              Our services are tailored to meet the unique transportation needs of every traveler in St. Maarten — from airport pickups to full-day island adventures.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <div className="group bg-dark rounded-2xl border border-white/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="font-serif text-lg font-medium mb-4">{service.title}</h3>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <AnimatedLink href={service.href} variant="outline">Learn more</AnimatedLink>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
