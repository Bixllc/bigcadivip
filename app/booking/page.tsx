import BookingForm from "@/components/BookingForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function BookingPage() {
  return (
    <main className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Ride</h1>
          <p className="text-white/50 text-sm tracking-wide mb-10">
            Fill out the form below and we&apos;ll confirm your VIP ride within 24 hours.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <BookingForm />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-sm text-white/40 mb-1">WhatsApp</p>
              <a href="https://wa.me/17215551234" className="text-sm font-medium text-gold">+1 (721) 555-1234</a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-sm text-white/40 mb-1">Phone</p>
              <a href="tel:+17215551234" className="text-sm font-medium text-gold">+1 (721) 555-1234</a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-sm text-white/40 mb-1">Email</p>
              <a href="mailto:info@bigcadivip.com" className="text-sm font-medium text-gold">info@bigcadivip.com</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
