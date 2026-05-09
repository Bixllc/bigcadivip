"use client";
import { Plane, Map, Car, Hotel } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    href: "/services/airport-transfers",
  },
  {
    icon: Map,
    title: "Island Tours",
    href: "/services/island-tours",
  },
  {
    icon: Hotel,
    title: "Hotel Shuttles",
    href: "/services/hotel-shuttles",
  },
  {
    icon: Car,
    title: "Private Charters",
    href: "/services/private-charters",
  },
];

export default function ServiceCards() {
  return (
    <section className="relative -mt-24 z-20 mx-auto max-w-5xl px-6">
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col items-center justify-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
            >
              <service.icon
                size={36}
                strokeWidth={1.5}
                className="text-gold transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs font-medium uppercase tracking-widest text-white/70 group-hover:text-white transition-colors text-center">
                {service.title}
              </span>
            </Link>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
