"use client";
import { motion } from "framer-motion";
import { Plane, Map, Car } from "lucide-react";
import AnimatedLink from "./AnimatedLink";

const servicePills = [
  { icon: Plane, label: "Airport" },
  { icon: Map, label: "Tours" },
  { icon: Car, label: "Private" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-maho.jpg"
          alt="Maho Beach SXM"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-white/70 text-sm tracking-wide mb-6 max-w-md uppercase">
            Premium VIP transportation across St. Maarten — airport transfers, island tours, and private charters.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {servicePills.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs tracking-widest uppercase text-white"
              >
                <Icon size={14} />
                {label}
              </div>
            ))}
          </div>
          <AnimatedLink href="/services">Our services</AnimatedLink>
        </motion.div>

        {/* Right Column — Large Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1] tracking-tight">
            Your VIP ride
            <br />
            <span className="text-gold">in St. Maarten.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
