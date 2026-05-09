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
      <ScrollReveal>
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group">
                {/* Card Content */}
                <div className="border border-gray-100 rounded-2xl p-6 mb-4 hover:shadow-md transition-shadow duration-300">
                  <service.icon size={32} strokeWidth={1.5} className="text-dark-soft mb-5" />
                  <h3 className="font-serif text-lg font-medium text-dark-soft mb-2">{service.title}</h3>
                  <p className="text-sm text-text-secondary mb-6 leading-relaxed">{service.description}</p>
                  <AnimatedLink href={service.href} variant="dark">Book Now</AnimatedLink>
                </div>
                {/* Card Image */}
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
