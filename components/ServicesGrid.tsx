"use client";
import { Plane, Map, Car, Hotel, Clock, Shield } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import SectionTag from "./SectionTag";

const services = [
  {
    title: "Airport Transfers",
    description: "Seamless pickups and drop-offs at Princess Juliana International Airport.",
    href: "/services/airport-transfers",
    icon: Plane,
    image: "/images/hero-maho.jpg",
  },
  {
    title: "Hotel & Resort Shuttles",
    description: "Door-to-door service to 50+ hotels and resorts across the island.",
    href: "/services/hotel-shuttles",
    icon: Hotel,
    image: "/images/aerial-grandcase.jpg",
  },
  {
    title: "Island Tours",
    description: "Discover the best beaches, restaurants, and hidden gems of SXM.",
    href: "/services/island-tours",
    icon: Map,
    image: "/images/beach-restaurant.webp",
  },
  {
    title: "Private Charters",
    description: "A dedicated vehicle and driver at your disposal, on your schedule.",
    href: "/services/private-charters",
    icon: Car,
    image: "/images/beachfront-dining.webp",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-dark-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <SectionTag>Our services</SectionTag>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mt-6 mb-4">
              What we offer.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/50 text-sm tracking-wide max-w-lg mx-auto">
              Premium transportation tailored to every traveler in St. Maarten.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link href={service.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 h-72">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <service.icon size={20} strokeWidth={1.5} className="text-gold" />
                      <h3 className="font-serif text-xl font-medium text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-white/60 tracking-wide">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
