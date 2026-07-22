"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { EVENTS } from "@/lib/data/content";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { t, cn } from "@/lib/utils";

export function EventsClient() {
  const { dict, locale } = useLocale();

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="kicker-divider" />
            {dict.events.eyebrow}
            <span className="kicker-divider" />
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold sm:text-5xl">
            {dict.events.title}
          </h1>
          <p className="mt-4 text-[rgb(var(--ink-muted))]">{dict.events.sub}</p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {EVENTS.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.08}>
              <div
                className={cn(
                  "group overflow-hidden rounded-3xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] shadow-soft",
                  i % 2 === 1 && "md:mt-10"
                )}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 ease-signature group-hover:scale-110">
                    <PlaceholderImage id={event.id} category="evenements" label={t(event.title, locale)} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <h2 className="absolute bottom-4 left-6 font-display text-2xl font-semibold text-cream">
                    {t(event.title, locale)}
                  </h2>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-[rgb(var(--ink-muted))] leading-relaxed">{t(event.description, locale)}</p>
                  <ul className="mt-5 space-y-2">
                    {event.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 shrink-0 text-leaf-500" />
                        {t(feat, locale)}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--ink-muted))]">
                      {dict.events.minGuests} {event.minGuests} {dict.events.guestsLabel}
                    </span>
                    <Button asChild size="sm" variant="outline">
                      <Link href="/contact">
                        {dict.events.cta}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 rounded-3xl bg-wine-500 p-10 text-center text-cream md:p-16">
          <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
            {locale === "fr"
              ? "Un projet d'événement en tête ? Parlons-en."
              : "Have an event in mind? Let's talk."}
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">{dict.events.cta}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream text-cream hover:bg-cream hover:text-ink">
              <Link href="/reservation">{dict.common.reserveTable}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
