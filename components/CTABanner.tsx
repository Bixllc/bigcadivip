"use client";
import AnimatedLink from "./AnimatedLink";
import ScrollReveal from "./ScrollReveal";

const tags = ["Luxury Rides", "Island Experts", "On-Time Guaranteed"];

export default function CTABanner() {
  return (
    <section className="py-24 bg-dark">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative bg-dark-soft rounded-3xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-soft via-dark-soft/80 to-dark-soft/40 z-10" />
          <img
            src="/images/beach-cocktails.webp"
            alt="Beach cocktails in St. Maarten"
            className="absolute right-0 top-0 bottom-0 w-1/2 h-full object-cover z-0"
          />

          <div className="relative z-20 p-12 md:p-16 max-w-2xl">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
                Book your VIP ride today!
              </h2>
              <p className="text-white/60 text-sm tracking-wide mb-8">
                Ready for a premium transportation experience in St. Maarten? Let Big Cadi VIP handle your ride with style and precision.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-4 mb-10">
                <AnimatedLink href="/booking">Book Now</AnimatedLink>
                <AnimatedLink href="/contact" variant="outline">Contact Us</AnimatedLink>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span key={tag} className="text-sm text-white/60 bg-white/10 rounded-full px-4 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
