"use client";
import ScrollReveal from "./ScrollReveal";
import SectionTag from "./SectionTag";
import AnimatedLink from "./AnimatedLink";

export default function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <SectionTag>Testimonials</SectionTag>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-2xl md:text-3xl font-medium leading-snug mt-6 mb-8">
                We take pride in delivering a first-class experience for every guest.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-bg-light rounded-2xl p-8 mb-6">
                <p className="text-sm text-dark-soft mb-4 tracking-wide leading-relaxed">
                  &ldquo;Big Cadi VIP made our St. Maarten trip unforgettable. From the airport pickup to our island tour, everything was seamless, luxurious, and on time. Highly recommend!&rdquo;
                </p>
                <p className="text-sm text-text-secondary font-medium">
                  Sarah M., Visitor from New York
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <AnimatedLink href="/about" variant="outline">Why choose us</AnimatedLink>
                <AnimatedLink href="/booking">Book a ride</AnimatedLink>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <img
              src="/images/beachfront-dining.webp"
              alt="Beachfront dining in St. Maarten"
              className="h-[500px] w-full object-cover rounded-2xl"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
