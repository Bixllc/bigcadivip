"use client";
import ScrollReveal from "./ScrollReveal";
import SectionTag from "./SectionTag";
import AnimatedLink from "./AnimatedLink";

const pillars = [
  { num: "1", label: "Punctual Pickups" },
  { num: "2", label: "Luxury Fleet" },
  { num: "3", label: "Local Expertise" },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              <SectionTag>About us</SectionTag>
              <AnimatedLink href="/about" variant="outline">About company</AnimatedLink>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              We provide premium VIP transportation across St. Maarten, ensuring every ride is comfortable, safe, and on time.
            </h2>
            <p className="text-text-secondary">
              With years of experience serving visitors and residents of SXM, Big Cadi VIP has built a reputation for luxury, reliability, and unmatched local knowledge.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="space-y-6">
              {pillars.map((p) => (
                <div key={p.num} className="flex items-center gap-4 border-b border-gray-100 pb-6">
                  <span className="text-4xl font-bold text-gold/30">&ldquo;{p.num}&rdquo;</span>
                  <span className="text-lg font-medium">{p.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <img
              src="/images/aerial-grandcase.jpg"
              alt="Grand Case Beach Club aerial view"
              className="h-80 w-full object-cover rounded-2xl"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
