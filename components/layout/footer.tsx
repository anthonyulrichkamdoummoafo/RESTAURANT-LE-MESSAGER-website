"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail, UtensilsCrossed } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { RESTAURANT, OPENING_HOURS } from "@/lib/data/restaurant-info";
import { Newsletter } from "@/components/sections/newsletter";
import { t } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", key: "home" as const },
  { href: "/menu", key: "menu" as const },
  { href: "/about", key: "about" as const },
  { href: "/gallery", key: "gallery" as const },
  { href: "/events", key: "events" as const },
  { href: "/reservation", key: "reserve" as const },
  { href: "/contact", key: "contact" as const },
];

export function Footer() {
  const { dict, locale } = useLocale();

  return (
    <footer className="relative bg-ink text-cream">
      <div className="container section-pad grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-ink">
              <UtensilsCrossed className="h-4 w-4" />
            </span>
            <span className="font-display text-xl font-semibold">{RESTAURANT.shortName}</span>
          </Link>
          <p className="mt-4 text-sm text-cream/60 max-w-xs leading-relaxed">{dict.footer.tagline}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={RESTAURANT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={RESTAURANT.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base mb-4 text-gold-400">{dict.footer.quickLinks}</h3>
          <ul className="space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-cream/70 hover:text-cream transition-colors">
                  {dict.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base mb-4 text-gold-400">{dict.footer.contactTitle}</h3>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold-400" />
              <span>{locale === "fr" ? RESTAURANT.addressFr : RESTAURANT.addressEn}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`tel:${RESTAURANT.phoneE164}`} className="hover:text-cream transition-colors">
                {RESTAURANT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${RESTAURANT.email}`} className="hover:text-cream transition-colors">
                {RESTAURANT.email}
              </a>
            </li>
          </ul>

          <h3 className="font-display text-base mb-3 mt-6 text-gold-400">{dict.footer.hoursTitle}</h3>
          <ul className="space-y-1 text-sm text-cream/70">
            {OPENING_HOURS.slice(0, 3).map((oh) => (
              <li key={oh.day.fr} className="flex justify-between gap-4">
                <span>{t(oh.day, locale)}</span>
                <span>{oh.hours}</span>
              </li>
            ))}
            <li className="text-cream/40 text-xs pt-1">
              <Link href="/contact" className="hover:text-gold-400 transition-colors">
                {locale === "fr" ? "Voir tous les horaires →" : "See all hours →"}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base mb-4 text-gold-400">{dict.footer.newsletterTitle}</h3>
          <Newsletter compact />
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <p>
            © {new Date().getFullYear()} {RESTAURANT.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
