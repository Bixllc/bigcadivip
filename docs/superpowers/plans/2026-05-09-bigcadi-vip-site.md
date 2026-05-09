# Big Cadi VIP SXM Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Next.js website for Big Cadi VIP SXM that replicates the Logis Framer template layout and animations, with Big Cadi VIP content and gold accent colors.

**Architecture:** Next.js 14 App Router with Tailwind CSS for styling and Framer Motion for animations. Component-based architecture with shared animated primitives (ScrollReveal, AnimatedButton, CountUp) used across all sections. All pages are static/SSG — no backend.

**Tech Stack:** Next.js 14, Tailwind CSS, Framer Motion, Lucide React icons, Inter font (Google Fonts)

**Spec:** `docs/superpowers/specs/2026-05-08-bigcadi-vip-site-design.md`

---

## File Structure

```
bigcadivip/
├── app/
│   ├── globals.css              # Tailwind imports + custom styles
│   ├── layout.tsx               # Root layout: font, metadata, Header, Footer
│   ├── page.tsx                 # Home — assembles all homepage sections
│   ├── about/page.tsx           # About page
│   ├── services/
│   │   ├── page.tsx             # Services overview
│   │   ├── airport-transfers/page.tsx
│   │   ├── island-tours/page.tsx
│   │   ├── hotel-shuttles/page.tsx
│   │   └── private-charters/page.tsx
│   ├── booking/page.tsx         # Booking form page
│   └── contact/page.tsx         # Contact page
├── components/
│   ├── Header.tsx               # Sticky nav with animated CTA
│   ├── Footer.tsx               # Footer with links, newsletter, socials
│   ├── AnimatedButton.tsx       # Reusable button with text-slide + arrow animation
│   ├── AnimatedLink.tsx         # Same animation as button but as Next Link
│   ├── ScrollReveal.tsx         # Intersection observer fade-up wrapper
│   ├── CountUp.tsx              # Animated number counter on scroll
│   ├── SectionTag.tsx           # Small pill/tag with icon (e.g. "About us")
│   ├── Hero.tsx                 # Hero with video bg, headline, service pills
│   ├── ServiceCards.tsx         # 3 featured service cards with hover effects
│   ├── AboutSection.tsx         # About with numbered pillars + image
│   ├── ServicesGrid.tsx         # Services grid with thumbnails
│   ├── StatsBar.tsx             # 4 stat counters
│   ├── Testimonial.tsx          # Customer testimonial + portrait
│   ├── ValuesSection.tsx        # 3 value cards
│   ├── CTABanner.tsx            # CTA section with bg image
│   └── BookingForm.tsx          # Booking form component
├── public/
│   ├── bigcadi.JPEG             # Logo (copied from Desktop)
│   └── placeholder.svg          # Generic placeholder for images
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

## Chunk 1: Project Scaffolding & Shared Components

### Task 1: Initialize Next.js project

**Files:**
- Create: `package.json`, `tailwind.config.ts`, `tsconfig.json`, `app/globals.css`, `app/layout.tsx`

- [ ] **Step 1: Scaffold Next.js with Tailwind**

```bash
cd /Users/sheneskawilliams/bigcadivip
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

Accept defaults. This creates the base project.

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion lucide-react
```

- [ ] **Step 3: Copy logo to public/**

```bash
cp /Users/sheneskawilliams/Desktop/bigcadi.JPEG /Users/sheneskawilliams/bigcadivip/public/bigcadi.JPEG
```

- [ ] **Step 4: Configure Tailwind with Big Cadi VIP colors**

Update `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C5A44E",
          light: "#D4B96A",
          dark: "#A8893A",
        },
        dark: "#0A0A0A",
        "dark-soft": "#1A1A1A",
        "text-secondary": "#6B6B6B",
        "bg-light": "#F5F5F0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 5: Set up globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 6: Set up root layout with metadata**

`app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Big Cadi VIP — Premium Transportation in St. Maarten",
  description: "VIP airport transfers, island tours, hotel shuttles, and private charters across St. Maarten (SXM).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-dark-soft antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 7: Verify dev server runs**

```bash
npm run dev
```

Expected: Dev server starts on localhost:3000, blank page loads without errors.

- [ ] **Step 8: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Next.js project with Tailwind and Framer Motion"
```

---

### Task 2: Build shared animation primitives

**Files:**
- Create: `components/ScrollReveal.tsx`
- Create: `components/AnimatedButton.tsx`
- Create: `components/AnimatedLink.tsx`
- Create: `components/CountUp.tsx`
- Create: `components/SectionTag.tsx`

- [ ] **Step 1: Create ScrollReveal component**

`components/ScrollReveal.tsx` — wraps children, fades+slides up on scroll using Framer Motion `useInView`:

```tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create AnimatedButton component**

`components/AnimatedButton.tsx` — replicates the Logis button hover: text slides up, duplicate text appears from below, arrow icon rotates on hover:

```tsx
"use client";
import { ArrowUpRight } from "lucide-react";

export default function AnimatedButton({
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  children: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    variant === "primary"
      ? "bg-gold text-white hover:bg-gold-dark"
      : "border border-dark-soft text-dark-soft hover:bg-dark-soft hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${base} ${className}`}
    >
      <span className="relative overflow-hidden h-5">
        <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-5">
          <span className="h-5 leading-5">{children}</span>
          <span className="h-5 leading-5">{children}</span>
        </span>
      </span>
      <span className="relative overflow-hidden w-4 h-4">
        <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-4">
          <ArrowUpRight size={16} />
          <ArrowUpRight size={16} />
        </span>
      </span>
    </button>
  );
}
```

- [ ] **Step 3: Create AnimatedLink component**

`components/AnimatedLink.tsx` — same animation as AnimatedButton but wraps a Next.js Link:

```tsx
"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AnimatedLink({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: string;
  href: string;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const base =
    variant === "primary"
      ? "bg-gold text-white hover:bg-gold-dark"
      : "border border-dark-soft text-dark-soft hover:bg-dark-soft hover:text-white";

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${base} ${className}`}
    >
      <span className="relative overflow-hidden h-5">
        <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-5">
          <span className="h-5 leading-5">{children}</span>
          <span className="h-5 leading-5">{children}</span>
        </span>
      </span>
      <span className="relative overflow-hidden w-4 h-4">
        <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-4">
          <ArrowUpRight size={16} />
          <ArrowUpRight size={16} />
        </span>
      </span>
    </Link>
  );
}
```

- [ ] **Step 4: Create CountUp component**

`components/CountUp.tsx` — animates a number counting up when scrolled into view:

```tsx
"use client";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CountUp({
  target,
  suffix = "",
  prefix = "",
  className = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      <span ref={displayRef}>{prefix}0{suffix}</span>
    </span>
  );
}
```

- [ ] **Step 5: Create SectionTag component**

`components/SectionTag.tsx` — small pill with dot icon used above section headings (matches Logis tag style):

```tsx
export default function SectionTag({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-text-secondary ${className}`}>
      <span className="h-2 w-2 rounded-full bg-gold" />
      {children}
    </div>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add components/
git commit -m "feat: add shared animation primitives (ScrollReveal, AnimatedButton, CountUp, SectionTag)"
```

---

### Task 3: Build Header component

**Files:**
- Create: `components/Header.tsx`
- Modify: `app/layout.tsx` (add Header import)

- [ ] **Step 1: Create Header**

`components/Header.tsx` — sticky nav matching Logis layout: logo left, nav links center, CTA button right. Background becomes white on scroll. Mobile hamburger menu.

```tsx
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="relative h-12 w-16">
          <Image src="/bigcadi.JPEG" alt="Big Cadi VIP" fill className="object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark-soft hover:text-gold transition-colors"
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
```

- [ ] **Step 2: Add Header to root layout**

Update `app/layout.tsx` to import and render `<Header />` above `{children}`.

- [ ] **Step 3: Verify header renders**

Run dev server, check header shows on localhost:3000 with logo, nav links, and Book Now button.

- [ ] **Step 4: Commit**

```bash
git add components/Header.tsx app/layout.tsx
git commit -m "feat: add sticky Header with nav and mobile menu"
```

---

### Task 4: Build Footer component

**Files:**
- Create: `components/Footer.tsx`
- Modify: `app/layout.tsx` (add Footer import)

- [ ] **Step 1: Create Footer**

`components/Footer.tsx` — matches Logis footer layout: 4-column grid (Services, Company, Contact, Social), bottom row with logo + newsletter + copyright.

```tsx
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
```

- [ ] **Step 2: Add Footer to root layout**

Update `app/layout.tsx` to import and render `<Footer />` below `{children}`.

- [ ] **Step 3: Verify footer renders**

Check localhost:3000 — footer visible at bottom with all sections.

- [ ] **Step 4: Commit**

```bash
git add components/Footer.tsx app/layout.tsx
git commit -m "feat: add Footer with links, contact, newsletter"
```

---

## Chunk 2: Homepage Sections (Part 1)

### Task 5: Build Hero section

**Files:**
- Create: `components/Hero.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Hero component**

`components/Hero.tsx` — matches Logis hero: large heading right side, subtext + service pills left side, "Our services" CTA button, video/image background. For now, use a dark gradient background as placeholder for the user's aerial SXM video.

```tsx
"use client";
import { motion } from "framer-motion";
import { Plane, Map, Car } from "lucide-react";
import AnimatedLink from "./AnimatedLink";

const servicePills = [
  { icon: Plane, label: "Airport" },
  { icon: Map, label: "Tours" },
  { icon: Car, label: "Private" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background — replace with video when available */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-dark/70 z-0">
        {/* Video placeholder: user will add aerial SXM footage */}
        {/* <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video> */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-white/80 text-lg mb-6 max-w-md">
            Premium VIP transportation across St. Maarten — airport transfers, island tours, and private charters.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {servicePills.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white"
              >
                <Icon size={14} />
                {label}
              </div>
            ))}
          </div>
          <AnimatedLink href="/services">Our services</AnimatedLink>
        </motion.div>

        {/* Right Column — Large Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight">
            Your VIP ride
            <br />
            <span className="text-gold">in St. Maarten.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Wire up home page**

`app/page.tsx`:

```tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify hero renders**

Check localhost:3000 — hero fills viewport, heading visible, pills render, CTA button works.

- [ ] **Step 4: Commit**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: add Hero section with headline, service pills, video placeholder"
```

---

### Task 6: Build ServiceCards section

**Files:**
- Create: `components/ServiceCards.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create ServiceCards component**

`components/ServiceCards.tsx` — 3 cards matching Logis layout: icon + title + description top, "Book Now" button, thumbnail image bottom. Hover effect: image scales, button slides in.

```tsx
"use client";
import { Plane, Map, Car } from "lucide-react";
import AnimatedLink from "./AnimatedLink";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless pickups and drop-offs at Princess Juliana International Airport. Reliable, on-time, every time.",
    href: "/services/airport-transfers",
    image: "/placeholder.svg",
  },
  {
    icon: Map,
    title: "Island Tours",
    description: "Discover St. Maarten's best beaches, restaurants, and hidden gems with a knowledgeable local driver.",
    href: "/services/island-tours",
    image: "/placeholder.svg",
  },
  {
    icon: Car,
    title: "Private Charters",
    description: "Luxury private rides for any occasion — events, dinners, nightlife, or a full day exploring the island.",
    href: "/services/private-charters",
    image: "/placeholder.svg",
  },
];

export default function ServiceCards() {
  return (
    <section className="relative -mt-32 z-20 mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.15}>
            <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <service.icon size={28} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-text-secondary mb-4">{service.description}</p>
                <AnimatedLink href={service.href} variant="outline">Book Now</AnimatedLink>
              </div>
              <div className="overflow-hidden">
                <div className="h-48 bg-bg-light transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-text-secondary text-sm">
                  {/* Replace with actual image */}
                  Image placeholder
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to home page**

Add `<ServiceCards />` below `<Hero />` in `app/page.tsx`.

- [ ] **Step 3: Verify cards render**

Check localhost:3000 — 3 cards overlap hero bottom, hover effects work.

- [ ] **Step 4: Commit**

```bash
git add components/ServiceCards.tsx app/page.tsx
git commit -m "feat: add ServiceCards section with hover effects"
```

---

### Task 7: Build AboutSection

**Files:**
- Create: `components/AboutSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create AboutSection component**

`components/AboutSection.tsx` — matches Logis about: left column has tag + "About company" link, right has heading + body text. Below: numbered pillars (1, 2, 3) left, image right.

```tsx
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
        {/* Top Row */}
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

        {/* Bottom Row */}
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
            <div className="h-80 bg-bg-light rounded-2xl flex items-center justify-center text-text-secondary text-sm">
              {/* Replace with vehicle/island image */}
              Image placeholder
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to home page**

Add `<AboutSection />` below `<ServiceCards />` in `app/page.tsx`.

- [ ] **Step 3: Commit**

```bash
git add components/AboutSection.tsx app/page.tsx
git commit -m "feat: add AboutSection with pillars and layout"
```

---

### Task 8: Build ServicesGrid section

**Files:**
- Create: `components/ServicesGrid.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create ServicesGrid component**

`components/ServicesGrid.tsx` — matches Logis services grid: heading + description left, 3 service cards right with thumbnails and "Learn more" buttons.

```tsx
"use client";
import { Plane, Building, Map } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AnimatedLink from "./AnimatedLink";

const services = [
  {
    title: "Airport Transfers",
    href: "/services/airport-transfers",
    icon: Plane,
  },
  {
    title: "Hotel & Resort Shuttles",
    href: "/services/hotel-shuttles",
    icon: Building,
  },
  {
    title: "Island Tours",
    href: "/services/island-tours",
    icon: Map,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold">Services.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-lg">
              Our services are tailored to meet the unique transportation needs of every traveler in St. Maarten — from airport pickups to full-day island adventures.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                </div>
                <div className="overflow-hidden">
                  <div className="h-56 bg-gray-100 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-text-secondary text-sm">
                    Image placeholder
                  </div>
                </div>
                <div className="p-6">
                  <AnimatedLink href={service.href} variant="outline">Learn more</AnimatedLink>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to home page**

Add `<ServicesGrid />` below `<AboutSection />`.

- [ ] **Step 3: Commit**

```bash
git add components/ServicesGrid.tsx app/page.tsx
git commit -m "feat: add ServicesGrid section"
```

---

## Chunk 3: Homepage Sections (Part 2)

### Task 9: Build StatsBar section

**Files:**
- Create: `components/StatsBar.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create StatsBar component**

`components/StatsBar.tsx` — 4 stats in a row matching Logis (10+/1M+/100+/99%):

```tsx
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to home page** after ServicesGrid.

- [ ] **Step 3: Commit**

```bash
git add components/StatsBar.tsx app/page.tsx
git commit -m "feat: add StatsBar with animated counters"
```

---

### Task 10: Build Testimonial section

**Files:**
- Create: `components/Testimonial.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Testimonial component**

`components/Testimonial.tsx` — matches Logis case study layout: left side has tag + heading + quote + name + links, right side has portrait image.

```tsx
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
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-6 mb-8">
                We take pride in delivering a first-class experience for every guest.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-bg-light rounded-2xl p-8 mb-6">
                <p className="text-lg text-dark-soft mb-4">
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
            <div className="h-[500px] bg-bg-light rounded-2xl flex items-center justify-center text-text-secondary text-sm">
              {/* Replace with portrait/lifestyle image */}
              Image placeholder
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to home page** after StatsBar.

- [ ] **Step 3: Commit**

```bash
git add components/Testimonial.tsx app/page.tsx
git commit -m "feat: add Testimonial section"
```

---

### Task 11: Build ValuesSection

**Files:**
- Create: `components/ValuesSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create ValuesSection component**

`components/ValuesSection.tsx` — matches Logis values: tag + heading top, 3 value cards below with icons.

```tsx
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
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-6 max-w-3xl">
              We are committed to delivering reliable, efficient, and luxurious transportation while maintaining the highest standards of service.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <value.icon size={32} className="text-gold mb-6" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-text-secondary">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to home page** after Testimonial.

- [ ] **Step 3: Commit**

```bash
git add components/ValuesSection.tsx app/page.tsx
git commit -m "feat: add ValuesSection with 3 value cards"
```

---

### Task 12: Build CTABanner section

**Files:**
- Create: `components/CTABanner.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create CTABanner component**

`components/CTABanner.tsx` — matches Logis CTA: dark background with image, heading, subtext, two buttons, floating tags.

```tsx
"use client";
import { motion } from "framer-motion";
import AnimatedLink from "./AnimatedLink";
import ScrollReveal from "./ScrollReveal";

const tags = ["Luxury Rides", "Island Experts", "On-Time Guaranteed"];

export default function CTABanner() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative bg-dark rounded-3xl overflow-hidden">
          {/* Background image placeholder */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-bg-light/5 flex items-center justify-center text-white/20 text-sm z-0">
            {/* Replace with vehicle image */}
          </div>

          <div className="relative z-20 p-12 md:p-16 max-w-2xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Book your VIP ride today!
              </h2>
              <p className="text-white/70 text-lg mb-8">
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
```

- [ ] **Step 2: Add to home page** after ValuesSection, completing the full homepage.

- [ ] **Step 3: Verify full homepage**

Scroll through entire page: Hero -> ServiceCards -> About -> ServicesGrid -> Stats -> Testimonial -> Values -> CTA -> Footer. All animations trigger on scroll.

- [ ] **Step 4: Commit**

```bash
git add components/CTABanner.tsx app/page.tsx
git commit -m "feat: add CTABanner, complete homepage layout"
```

---

## Chunk 4: Inner Pages

### Task 13: Build Booking page

**Files:**
- Create: `components/BookingForm.tsx`
- Create: `app/booking/page.tsx`

- [ ] **Step 1: Create BookingForm component**

`components/BookingForm.tsx` — form with all booking fields: service type dropdown, pickup/dropoff, date/time, passengers, vehicle, name, phone, email, special requests.

```tsx
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
      <div className="bg-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Booking Received!</h3>
        <p className="text-text-secondary">We'll confirm your ride within 24 hours via WhatsApp or email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
      {/* Service Type */}
      <div>
        <label className="block text-sm font-medium mb-2">Service Type</label>
        <select required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors">
          <option value="">Select a service</option>
          {serviceTypes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Pickup / Dropoff */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Pickup Location</label>
          <input required type="text" placeholder="e.g. Princess Juliana Airport" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Drop-off Location</label>
          <input required type="text" placeholder="e.g. Sonesta Maho Beach" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
        </div>
      </div>

      {/* Date / Time / Passengers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Date</label>
          <input required type="date" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Time</label>
          <input required type="time" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Passengers</label>
          <input required type="number" min="1" max="20" placeholder="2" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
        </div>
      </div>

      {/* Name / Phone / Email */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input required type="text" placeholder="John Doe" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Phone / WhatsApp</label>
          <input required type="tel" placeholder="+1 (721) ..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input required type="email" placeholder="john@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-sm font-medium mb-2">Special Requests</label>
        <textarea rows={3} placeholder="Child seats, extra luggage, specific vehicle..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
      </div>

      <button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-4 rounded-xl transition-colors text-sm">
        Request Booking
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Create booking page**

`app/booking/page.tsx`:

```tsx
import BookingForm from "@/components/BookingForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function BookingPage() {
  return (
    <main className="pt-32 pb-24 bg-bg-light min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Ride</h1>
          <p className="text-text-secondary text-lg mb-10">
            Fill out the form below and we'll confirm your VIP ride within 24 hours.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <BookingForm />
        </ScrollReveal>

        {/* Contact sidebar info */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="text-sm text-text-secondary mb-1">WhatsApp</p>
              <a href="https://wa.me/17215551234" className="text-sm font-medium text-gold">+1 (721) 555-1234</a>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="text-sm text-text-secondary mb-1">Phone</p>
              <a href="tel:+17215551234" className="text-sm font-medium text-gold">+1 (721) 555-1234</a>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="text-sm text-text-secondary mb-1">Email</p>
              <a href="mailto:info@bigcadivip.com" className="text-sm font-medium text-gold">info@bigcadivip.com</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Verify booking page**

Navigate to /booking — form renders with all fields, submit shows confirmation.

- [ ] **Step 4: Commit**

```bash
git add components/BookingForm.tsx app/booking/page.tsx
git commit -m "feat: add Booking page with form"
```

---

### Task 14: Build About page

**Files:**
- Create: `app/about/page.tsx`

- [ ] **Step 1: Create About page**

`app/about/page.tsx` — hero heading, company story, why choose us section, values reuse.

```tsx
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import ValuesSection from "@/components/ValuesSection";
import CTABanner from "@/components/CTABanner";

export default function AboutPage() {
  return (
    <main className="pt-32">
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionTag>About Big Cadi VIP</SectionTag>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6 max-w-4xl">
              The premier VIP transportation service in St. Maarten.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-lg max-w-2xl mb-12">
              Big Cadi VIP was founded with one mission: to give every visitor and resident of St. Maarten a luxury transportation experience. Whether you're landing at Princess Juliana, heading to a resort, or exploring the island, we make every ride first-class.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="h-80 bg-bg-light rounded-2xl flex items-center justify-center text-text-secondary text-sm">
                Image placeholder
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-2xl font-bold mb-4">Why choose Big Cadi VIP?</h2>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">01</span>
                  <span><strong className="text-dark-soft">Local Knowledge</strong> — Our drivers know every beach, restaurant, and shortcut on the island.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">02</span>
                  <span><strong className="text-dark-soft">Premium Fleet</strong> — Clean, comfortable, and well-maintained vehicles for every occasion.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">03</span>
                  <span><strong className="text-dark-soft">Always On Time</strong> — We track your flight and adjust pickup times automatically.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">04</span>
                  <span><strong className="text-dark-soft">24/7 Availability</strong> — Book anytime. We operate around the clock.</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <ValuesSection />
      <CTABanner />
    </main>
  );
}
```

- [ ] **Step 2: Verify about page** at /about.

- [ ] **Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: add About page"
```

---

### Task 15: Build Services overview and detail pages

**Files:**
- Create: `app/services/page.tsx`
- Create: `app/services/airport-transfers/page.tsx`
- Create: `app/services/island-tours/page.tsx`
- Create: `app/services/hotel-shuttles/page.tsx`
- Create: `app/services/private-charters/page.tsx`

- [ ] **Step 1: Create Services overview page**

`app/services/page.tsx`:

```tsx
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import AnimatedLink from "@/components/AnimatedLink";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    title: "Airport Transfers",
    description: "Seamless pickups and drop-offs at Princess Juliana International Airport. We track your flight so we're always on time, no matter what.",
    href: "/services/airport-transfers",
  },
  {
    title: "Island Tours",
    description: "Discover the best of St. Maarten — from Maho Beach to Marigot Market, Orient Bay to Philipsburg. Full-day or half-day tours with a knowledgeable local driver.",
    href: "/services/island-tours",
  },
  {
    title: "Hotel & Resort Shuttles",
    description: "Reliable shuttle service between your hotel or resort and anywhere on the island. We partner with 50+ properties across SXM.",
    href: "/services/hotel-shuttles",
  },
  {
    title: "Private Charters",
    description: "Luxury private rides for weddings, dinners, nightlife, corporate events, or a full day exploring at your own pace.",
    href: "/services/private-charters",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionTag>Our services</SectionTag>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
              Premium transportation, your way.
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mb-16">
              From airport arrivals to island adventures, Big Cadi VIP covers every ride you need in St. Maarten.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                    <p className="text-text-secondary mb-6">{service.description}</p>
                    <AnimatedLink href={service.href} variant="outline">Learn more</AnimatedLink>
                  </div>
                  <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center text-text-secondary text-sm overflow-hidden">
                    <div className="transition-transform duration-500 group-hover:scale-105">
                      Image placeholder
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
```

- [ ] **Step 2: Create service detail page template**

Create a shared structure for all 4 service detail pages. Each follows the same pattern: hero heading, description, what's included list, CTA to booking.

`app/services/airport-transfers/page.tsx`:

```tsx
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import AnimatedLink from "@/components/AnimatedLink";
import CTABanner from "@/components/CTABanner";

export default function AirportTransfersPage() {
  return (
    <main className="pt-32">
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionTag>Airport Transfers</SectionTag>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
              Stress-free airport pickups & drop-offs.
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mb-12">
              We monitor your flight in real-time so your driver is always waiting when you land at Princess Juliana International Airport (SXM). No waiting, no hassle.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <ScrollReveal>
              <div className="h-80 bg-bg-light rounded-2xl flex items-center justify-center text-text-secondary text-sm">
                Image placeholder
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-2xl font-bold mb-6">What's included</h2>
              <ul className="space-y-4">
                {[
                  "Meet & greet at the airport terminal",
                  "Real-time flight tracking",
                  "Complimentary wait time (up to 30 min)",
                  "Luggage assistance",
                  "Bottled water on board",
                  "Clean, air-conditioned premium vehicle",
                  "Direct route to your destination",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="flex flex-wrap gap-4">
              <AnimatedLink href="/booking">Book Airport Transfer</AnimatedLink>
              <AnimatedLink href="/services" variant="outline">All Services</AnimatedLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
```

- [ ] **Step 3: Create remaining 3 service detail pages**

Create `island-tours/page.tsx`, `hotel-shuttles/page.tsx`, `private-charters/page.tsx` following the same pattern with service-specific content:

**Island Tours** — "Explore the best of St. Maarten" / includes: half-day & full-day options, popular stops (Maho Beach, Orient Bay, Marigot, Philipsburg), knowledgeable driver/guide, flexible itinerary, photo stops, restaurant recommendations.

**Hotel Shuttles** — "Reliable resort transfers" / includes: door-to-door service, scheduled pickups, group accommodation, luggage handling, partnerships with 50+ hotels.

**Private Charters** — "Your island, your schedule" / includes: dedicated vehicle & driver, fully customizable itinerary, hourly or full-day rates, event transportation, nightlife service, corporate travel.

- [ ] **Step 4: Verify all service pages** — /services, /services/airport-transfers, etc.

- [ ] **Step 5: Commit**

```bash
git add app/services/
git commit -m "feat: add Services overview and 4 detail pages"
```

---

### Task 16: Build Contact page

**Files:**
- Create: `app/contact/page.tsx`

- [ ] **Step 1: Create Contact page**

`app/contact/page.tsx`:

```tsx
"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-32 pb-24 bg-bg-light min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionTag>Contact us</SectionTag>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">Get in touch.</h1>
          <p className="text-text-secondary text-lg max-w-2xl mb-16">
            Have a question or want to book a ride? Reach out to us anytime — we're here to help.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <ScrollReveal>
              <a href="https://wa.me/17215551234" target="_blank" rel="noopener" className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <MessageCircle className="text-gold mt-1" size={24} />
                <div>
                  <p className="font-semibold mb-1">WhatsApp</p>
                  <p className="text-sm text-text-secondary">+1 (721) 555-1234</p>
                  <p className="text-xs text-gold mt-1">Fastest response</p>
                </div>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <a href="tel:+17215551234" className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Phone className="text-gold mt-1" size={24} />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-sm text-text-secondary">+1 (721) 555-1234</p>
                </div>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a href="mailto:info@bigcadivip.com" className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Mail className="text-gold mt-1" size={24} />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-text-secondary">info@bigcadivip.com</p>
                </div>
              </a>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.1}>
              {submitted ? (
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-text-secondary">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input required type="text" placeholder="Your name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input required type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input type="tel" placeholder="+1 (721) ..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea required rows={5} placeholder="How can we help?" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
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
```

- [ ] **Step 2: Verify contact page** at /contact.

- [ ] **Step 3: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: add Contact page with form, WhatsApp, phone, email"
```

---

## Chunk 5: Polish & Placeholder Assets

### Task 17: Create placeholder SVG and finalize

**Files:**
- Create: `public/placeholder.svg`
- Verify: all pages, all links, all animations

- [ ] **Step 1: Create placeholder SVG**

`public/placeholder.svg` — simple gray placeholder with "Image" text:

```svg
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F5F0"/>
  <text x="400" y="300" font-family="Inter, sans-serif" font-size="18" fill="#6B6B6B" text-anchor="middle" dominant-baseline="middle">Image</text>
</svg>
```

- [ ] **Step 2: Test all pages and navigation**

Visit each page, verify:
- Home: all 8 sections render, scroll animations work
- About: content + values + CTA
- Services: overview + 4 detail pages
- Booking: form works, validation, submit confirmation
- Contact: form works, contact cards
- Header: sticky, mobile menu, all links work
- Footer: all links work, newsletter input

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "feat: add placeholder assets, complete Big Cadi VIP site"
```
