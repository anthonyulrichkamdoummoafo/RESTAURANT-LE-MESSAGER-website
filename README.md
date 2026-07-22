# Restaurant Le Messager — Site Web

Site vitrine premium pour **Restaurant Le Messager**, Ange Raphaël, Douala, Cameroun.

Bilingue (FR par défaut / EN), mode clair-sombre, animations Framer Motion, 7 pages complètes.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS + tailwindcss-animate
- Framer Motion
- Radix UI primitives (shadcn/ui-style components, hand-rolled — no CLI dependency)
- Lucide Icons
- next-themes (dark/light mode)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site defaults to French; use the FR/EN toggle in the navbar.

> **Note on fonts:** `next/font/google` fetches Playfair Display & Inter from Google Fonts
> at build time, so `npm run dev` / `npm run build` need normal internet access — this is
> standard for any Next.js project and works out of the box on Vercel or any CI with
> internet access.

## Project structure

```
app/                     Routes (App Router)
  page.tsx               Home
  menu/                  Menu (search, filter, WhatsApp ordering)
  about/                 About (history, mission/vision, chef, timeline, awards)
  gallery/               Masonry gallery with lightbox
  reservation/           Reservation form + confirmation screen
  contact/               Contact info, map, form, FAQ
  events/                Weddings / birthdays / corporate / private dining
  layout.tsx             Root layout, fonts, providers, SEO metadata, JSON-LD
  sitemap.ts / robots.ts SEO routes

components/
  layout/                Navbar, footer, WhatsApp button, back-to-top, toggles
  sections/              Reusable home-page & shared sections
  ui/                    Design-system primitives (button, card, badge, etc.)
  motion/                Reveal-on-scroll wrapper
  pattern-divider.tsx    Signature wax-print-inspired divider motif

lib/
  data/                  Static content: restaurant info, menu, gallery, events, FAQ...
  i18n/                  FR/EN dictionaries + locale context/provider
  utils.ts               cn(), price formatting, localized-text helper

types/                   Shared TypeScript types
```

## Content & imagery

All copy (menu descriptions, testimonials, staff bios, FAQ, etc.) is real, ready-to-use
French/English content — not lorem ipsum — so you can launch with it as-is or refine it.

**Photography:** since this build environment has no access to stock photo/image
services, every photo slot renders a branded placeholder (`components/ui/placeholder-image.tsx`)
— a gradient in the brand palette with a contextual icon and label. To go live:

1. Drop real photos into `public/images/`.
2. Replace `<PlaceholderImage id="..." category="..." />` with `next/image` pointing at
   your file, keeping the same `alt` text already defined in `lib/data/*`.

The `image` field already present on every menu/gallery/event/staff item is a stable slug
you can map straight to a filename.

## Design system

Colors, type and motion follow the brief exactly:

| Token       | Value      | Usage                        |
|-------------|-----------|-------------------------------|
| `wine`      | `#8B0000` | Primary — buttons, headings   |
| `gold`      | `#D4AF37` | Secondary — accents, CTAs     |
| `cream`     | `#FAF7F2` | Light background              |
| `ink`       | `#181818` | Dark background / text        |
| `leaf`      | `#2E8B57` | Success / WhatsApp accents    |

Signature element: a small repeating diamond motif (`PatternDivider`) inspired by
Central African wax-print (pagne) textile patterns, used sparingly at major section
breaks instead of a generic wave/blob divider.

## Backend & CMS roadmap (not yet implemented)

This phase focused on a complete, polished **public-facing** site. The brief also asked
for a Supabase-backed CMS and admin dashboard — that's a separate, substantial phase.
Suggested next steps when you're ready:

1. **Supabase project** with tables: `restaurant_info`, `categories`, `menu_items`,
   `gallery`, `reservations`, `events`, `testimonials`, `staff`, `opening_hours`, `users`.
   The shapes in `types/index.ts` and `lib/data/*` map directly to these tables — moving
   from static arrays to Supabase queries is largely a drop-in swap.
2. **Auth**: Supabase Auth with a `role` column (admin / staff) gating `/admin`.
3. **Admin dashboard** at `/admin`: CRUD screens for menu, gallery, reservations,
   testimonials, events, staff, opening hours, homepage content, plus a simple
   analytics view (reservation counts, popular dishes).
4. Wire the reservation form and contact form to insert into Supabase instead of
   (or in addition to) the current WhatsApp deep-link.

## Scripts

```bash
npm run dev        # start dev server
npm run build       # production build
npm run start       # run production build
npm run lint         # ESLint
npm run typecheck   # tsc --noEmit
```
