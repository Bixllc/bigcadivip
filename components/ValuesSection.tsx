"use client";
import { ShieldCheck, Gem, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionTag from "./SectionTag";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety",
    description: "Your well-being is our top priority. Licensed, insured, and professionally maintained vehicles.",
  },
  {
    icon: Gem,
    title: "Luxury",
    description: "Travel in style with our premium fleet. Every ride is a first-class experience.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We're there when you need us. Punctual pickups and seamless coordination, every time.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <ScrollReveal>
            <SectionTag>Our values</SectionTag>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-snug mt-6 max-w-3xl">
              We are committed to delivering reliable, efficient, and luxurious transportation while maintaining the highest standards of service.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <value.icon size={32} className="text-gold mb-6" />
                <h3 className="font-serif text-lg font-medium mb-3">{value.title}</h3>
                <p className="text-sm text-text-secondary tracking-wide">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
