"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import AnimatedLink from "./AnimatedLink";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <Link href="/" className="relative h-12 w-16">
          <Image src="/bigcadi.JPEG" alt="Big Cadi VIP" fill className="object-contain mix-blend-multiply" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-dark-soft hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <AnimatedLink href="/booking">Book Now</AnimatedLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-dark-soft"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-dark-soft"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <AnimatedLink href="/booking">Book Now</AnimatedLink>
        </div>
      )}
    </header>
  );
}
