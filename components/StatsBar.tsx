"use client";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

const stats = [
  { target: 5000, suffix: "+", label: "Happy Passengers" },
  { target: 4, suffix: "", label: "Premium Vehicles" },
  { target: 50, suffix: "+", label: "Hotels & Resorts Served" },
  { target: 100, suffix: "%", label: "On-Time Commitment" },
];

export default function StatsBar() {
  return (
    <section className="bg-bg-light pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-dark rounded-2xl p-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-2xl md:text-3xl font-medium text-white mb-2">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-white/50 tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
