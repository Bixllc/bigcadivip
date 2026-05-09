# Big Cadi VIP SXM — Website Design Spec

## Overview

Replicate the [Logis Framer template](https://logistics-template.framer.website/) as a Next.js + Tailwind CSS site for **Big Cadi VIP**, a VIP transportation company in St. Maarten (SXM). All animations, layout structure, hover effects, and scroll behaviors from the original template are preserved. Content is replaced with Big Cadi VIP branding, and the accent color changes from blue/teal to gold.

## Brand

- **Company:** Big Cadi VIP SXM
- **Logo:** Gold/chrome old-English "BC VIP" on black background (`bigcadi.JPEG`)
- **Color palette:**
  - Background: White / light (#FFFFFF, #F9F9F9)
  - Accent/primary: Gold (#C5A44E)
  - Accent hover: Darker gold (#A8893A)
  - Text: Dark (#1A1A1A)
  - Secondary text: (#6B6B6B)
  - Dark sections (footer, CTA banner): Black (#0A0A0A)
- **Typography:** Clean sans-serif (Inter or similar), matching Logis template sizing/weights
- **Tone:** Premium, professional, welcoming — VIP island transportation

## Pages

### 1. Home (main page — direct Logis replica)

**Header/Nav:**
- Big Cadi VIP logo (left)
- Nav links: Home, About, Services, Fleet, Booking
- CTA button: "Book Now" (gold, with hover animation matching Logis)

**Hero Section:**
- Headline: "Your VIP ride in St. Maarten."
- Subtext: "Premium airport transfers, island tours, and private charters across the island."
- Service mode pills (matching Logis air/sea/road): Airport | Tours | Private
- CTA: "Our Services" button with arrow icon animation
- Background: Video placeholder area for user's aerial SXM footage (falls back to static image)

**3 Service Cards (matching Logis freight/warehousing/custom):**
1. **Airport Transfers** — "Seamless pickups and drop-offs at Princess Juliana International Airport. Reliable, on-time, every time." Icon: plane
2. **Island Tours** — "Discover St. Maarten's best beaches, restaurants, and hidden gems with a knowledgeable local driver." Icon: map/compass
3. **Private Charters** — "Luxury private rides for any occasion — events, dinners, nightlife, or a full day exploring the island." Icon: car/diamond

Each card has: icon, title, description, "Book Now" hover button, thumbnail image placeholder — same layout/animation as Logis.

**About Section:**
- Tag: "About us"
- Headline: "We provide premium VIP transportation across St. Maarten, ensuring every ride is comfortable, safe, and on time."
- Body: "With years of experience serving visitors and residents of SXM, Big Cadi VIP has built a reputation for luxury, reliability, and unmatched local knowledge."
- 3 numbered pillars:
  1. Punctual Pickups
  2. Luxury Fleet
  3. Local Expertise
- Image: Placeholder for vehicle/island photo

**Services Grid (matching Logis services section):**
- Section title: "Services."
- Description text
- 3 service cards with thumbnails:
  1. Airport Transfers
  2. Hotel & Resort Shuttles
  3. Island Tours
- Each with "Learn more" button with arrow animation

**Stats Bar (matching Logis 10+/1M+/100+/99%):**
- 5,000+ — Happy Passengers
- 4 — Premium Vehicles
- 50+ — Hotels & Resorts Served
- 100% — On-Time Commitment

**Testimonial / Case Study Section:**
- Quote: Placeholder testimonial from a satisfied customer
- "Read more" and "Why choose us" links
- Portrait image placeholder

**Values Section:**
- Tag: "Our values"
- Headline about commitment to safety, luxury, reliability
- 3 value cards:
  1. **Safety** — "Your well-being is our top priority. Licensed, insured, and professionally maintained vehicles."
  2. **Luxury** — "Travel in style with our premium fleet. Every ride is a first-class experience."
  3. **Reliability** — "We're there when you need us. Punctual pickups and seamless coordination, every time."

**CTA Banner (matching Logis "Partner with Logis today"):**
- Headline: "Book your VIP ride today!"
- Subtext: "Ready for a premium transportation experience in St. Maarten? Let Big Cadi VIP handle your ride."
- Buttons: "Book Now" + "Contact Us"
- Tags: Luxury Rides / Island Experts / On-Time Guaranteed
- Background image placeholder

**Footer:**
- Services links
- Company links (About, Fleet, Booking)
- Contact: email, phone, WhatsApp
- Social: Instagram, WhatsApp
- Logo + newsletter signup
- Copyright: Big Cadi VIP. All rights reserved.

### 2. Services Page
- Grid of all 4 services with descriptions and images
- Each links to individual service detail

### 3. Service Detail Pages (4)
- Airport Transfers
- Island Tours
- Hotel & Resort Shuttles
- Private Charters / VIP Rides
- Each has: hero, description, what's included, pricing info, CTA to booking

### 4. About Page
- Company story, mission
- Why choose Big Cadi VIP
- Team/founder section if desired

### 5. Booking Page
- Booking form with fields:
  - Service type (dropdown: Airport Transfer, Island Tour, Hotel Shuttle, Private Charter)
  - Pickup location (text input)
  - Drop-off location (text input)
  - Date (date picker)
  - Time (time picker)
  - Number of passengers (number input)
  - Vehicle preference (dropdown, optional)
  - Full name
  - Phone / WhatsApp number
  - Email
  - Special requests (textarea)
- Submit button (gold)
- Contact info sidebar: phone, WhatsApp, email

### 6. Contact Page
- Contact form (name, email, phone, message)
- WhatsApp direct link
- Phone number
- Email
- Location: St. Maarten, SXM

## Animations & Interactions (replicate from Logis)

All animations from the Logis template must be replicated:
- **Nav CTA hover:** text slides up, duplicate text slides in from below
- **Service card hover:** image scales up slightly, button appears with slide animation
- **Button hover (global):** text slides up with duplicate, arrow icon rotates
- **Scroll reveal:** sections fade in and slide up on scroll (intersection observer)
- **Stats counter:** numbers count up when scrolled into view
- **Tag pills:** subtle entrance animation
- **Footer newsletter input:** focus state animation
- **Smooth scrolling:** between sections
- **Page transitions:** fade between pages

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (to match the Framer template's animation quality)
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **Images:** Next/Image with placeholder blurs
- **Deployment:** Ready for Vercel

## File Structure

```
bigcadivip/
├── app/
│   ├── layout.tsx          # Root layout, nav, footer
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── airport-transfers/page.tsx
│   │   ├── island-tours/page.tsx
│   │   ├── hotel-shuttles/page.tsx
│   │   └── private-charters/page.tsx
│   ├── booking/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── AboutSection.tsx
│   ├── ServicesGrid.tsx
│   ├── StatsBar.tsx
│   ├── Testimonial.tsx
│   ├── ValuesSection.tsx
│   ├── CTABanner.tsx
│   ├── BookingForm.tsx
│   ├── AnimatedButton.tsx
│   ├── ScrollReveal.tsx
│   └── CountUp.tsx
├── public/
│   ├── bigcadi.JPEG        # Logo
│   └── images/             # Placeholder images
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

## Asset Notes

- Logo: Copy from Desktop (`bigcadi.JPEG`)
- Hero video: User will provide aerial SXM footage (placeholder with static fallback)
- Service/about images: Use placeholder boxes with descriptive text until user provides
- Vehicle images: Placeholder until user provides fleet photos
