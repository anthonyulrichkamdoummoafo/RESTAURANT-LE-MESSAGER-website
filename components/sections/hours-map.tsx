"use client";

import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { OPENING_HOURS, googleMapsEmbedSrc, googleMapsDirectionsUrl, RESTAURANT } from "@/lib/data/restaurant-info";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/utils";

function isOpenNow() {
  const now = new Date();
  const day = now.getDay(); // 0 sun - 6 sat
  const hour = now.getHours() + now.getMinutes() / 60;
  const isFriSat = day === 5 || day === 6;
  const openTime = isFriSat ? 10 : day === 0 ? 10 : 11;
  const closeTime = isFriSat ? 23.5 : 22;
  return hour >= openTime && hour < closeTime;
}

export function HoursMap() {
  const { dict, locale } = useLocale();
  const open = isOpenNow();

  return (
    <section className="section-pad bg-[rgb(var(--surface))]">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="kicker-divider" />
            {dict.home.hoursEyebrow}
            <span className="kicker-divider" />
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            {dict.home.hoursTitle}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] p-8 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-wine-500 dark:text-gold-400" />
                  <h3 className="font-display text-xl">{dict.footer.hoursTitle}</h3>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    open ? "bg-leaf-500/10 text-leaf-600" : "bg-wine-500/10 text-wine-500"
                  }`}
                >
                  {open ? dict.common.openNow : dict.common.closedNow}
                </span>
              </div>
              <ul className="mt-6 divide-y divide-[rgb(var(--border-subtle))]">
                {OPENING_HOURS.map((oh) => (
                  <li key={oh.day.fr} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-[rgb(var(--ink-muted))]">{t(oh.day, locale)}</span>
                    <span className="font-medium">{oh.hours}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-2 text-sm text-[rgb(var(--ink-muted))]">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-wine-500 dark:text-gold-400" />
                <span>{locale === "fr" ? RESTAURANT.addressFr : RESTAURANT.addressEn}</span>
              </div>
              <Button asChild variant="link" className="mt-4">
                <a href={googleMapsDirectionsUrl()} target="_blank" rel="noopener noreferrer">
                  {locale === "fr" ? "Itinéraire" : "Get directions"}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full min-h-[360px] overflow-hidden rounded-3xl border border-[rgb(var(--border-subtle))] shadow-soft">
              <iframe
                title="Localisation Restaurant Le Messager"
                src={googleMapsEmbedSrc()}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
