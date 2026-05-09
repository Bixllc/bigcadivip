"use client";
import { useState } from "react";

const serviceTypes = [
  "Airport Transfer",
  "Island Tour",
  "Hotel Shuttle",
  "Private Charter",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Booking Received!</h3>
        <p className="text-white/50">We&apos;ll confirm your ride within 24 hours via WhatsApp or email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">Service Type</label>
        <select required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors">
          <option value="">Select a service</option>
          {serviceTypes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Pickup Location</label>
          <input required type="text" placeholder="e.g. Princess Juliana Airport" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Drop-off Location</label>
          <input required type="text" placeholder="e.g. Sonesta Maho Beach" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Date</label>
          <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Time</label>
          <input required type="time" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Passengers</label>
          <input required type="number" min="1" max="20" placeholder="2" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
          <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Phone / WhatsApp</label>
          <input required type="tel" placeholder="+1 (721) ..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
          <input required type="email" placeholder="john@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">Special Requests</label>
        <textarea rows={3} placeholder="Child seats, extra luggage, specific vehicle..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" />
      </div>

      <button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-4 rounded-xl transition-colors text-sm">
        Request Booking
      </button>
    </form>
  );
}
