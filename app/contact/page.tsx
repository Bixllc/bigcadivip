"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionTag>Contact us</SectionTag>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">Get in touch.</h1>
          <p className="text-white/50 text-sm tracking-wide max-w-2xl mb-16">
            Have a question or want to book a ride? Reach out to us anytime — we&apos;re here to help.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <ScrollReveal>
              <a href="https://wa.me/17215551234" target="_blank" rel="noopener" className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <MessageCircle className="text-gold mt-1" size={24} />
                <div>
                  <p className="font-semibold mb-1">WhatsApp</p>
                  <p className="text-sm text-white/50">+1 (721) 555-1234</p>
                  <p className="text-xs text-gold mt-1">Fastest response</p>
                </div>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <a href="tel:+17215551234" className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <Phone className="text-gold mt-1" size={24} />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-sm text-white/50">+1 (721) 555-1234</p>
                </div>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a href="mailto:info@bigcadivip.com" className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <Mail className="text-gold mt-1" size={24} />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-white/50">info@bigcadivip.com</p>
                </div>
              </a>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal delay={0.1}>
              {submitted ? (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-white/50">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                      <input required type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                      <input required type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input type="tel" placeholder="+1 (721) ..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea required rows={5} placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-4 rounded-xl transition-colors text-sm">
                    Send Message
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
