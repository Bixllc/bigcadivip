import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Airport Transfers", href: "/services/airport-transfers" },
  { label: "Island Tours", href: "/services/island-tours" },
  { label: "Hotel Shuttles", href: "/services/hotel-shuttles" },
  { label: "Private Charters", href: "/services/private-charters" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Booking", href: "/booking" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Services */}
          <div>
            <p className="text-sm font-semibold mb-4 text-white/60">Services</p>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold mb-4 text-white/60">Company</p>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold mb-4 text-white/60">Contact us</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="mailto:info@bigcadivip.com" className="hover:text-gold transition-colors">info@bigcadivip.com</a></li>
              <li><a href="tel:+17215551234" className="hover:text-gold transition-colors">+1 (721) 555-1234</a></li>
              <li><a href="https://wa.me/17215551234" target="_blank" rel="noopener" className="hover:text-gold transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-semibold mb-4 text-white/60">Follow us</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <Link href="/" className="relative h-12 w-16">
            <Image src="/bigcadi.JPEG" alt="Big Cadi VIP" fill className="object-contain" />
          </Link>

          <div className="flex-1 max-w-md">
            <h3 className="text-lg font-semibold mb-3">Stay in touch with Big Cadi VIP.</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-l-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button className="bg-gold hover:bg-gold-dark text-white px-5 py-2.5 rounded-r-full text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <p className="text-xs text-white/40 mt-10">Big Cadi VIP. All rights reserved.</p>
      </div>
    </footer>
  );
}
