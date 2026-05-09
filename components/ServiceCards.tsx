"use client";
import { Plane, Map, Car } from "lucide-react";
import AnimatedLink from "./AnimatedLink";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless pickups and drop-offs at Princess Juliana International Airport. Reliable, on-time, every time.",
    href: "/services/airport-transfers",
    image: "/images/hero-maho.jpg",
  },
  {
    icon: Map,
    title: "Island Tours",
    description: "Discover St. Maarten's best beaches, restaurants, and hidden gems with a knowledgeable local driver.",
    href: "/services/island-tours",
    image: "/images/aerial-grandcase.jpg",
  },
  {
    icon: Car,
    title: "Private Charters",
    description: "Luxury private rides for any occasion — events, dinners, nightlife, or a full day exploring the island.",
    href: "/services/private-charters",
    image: "/images/beach-restaurant.webp",
  },
];

export default function ServiceCards() {
  return (
    <section className="relative -mt-32 z-20 mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.15}>
            <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <service.icon size={28} className="text-gold mb-4" />
                <h3 className="font-serif text-base font-medium mb-2">{service.title}</h3>
                <p className="text-xs text-text-secondary mb-4 tracking-wide">{service.description}</p>
                <AnimatedLink href={service.href} variant="outline">Book Now</AnimatedLink>
              </div>
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
