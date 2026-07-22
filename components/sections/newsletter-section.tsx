"use client";

import { useLocale } from "@/lib/i18n/locale-provider";
import { Newsletter } from "@/components/sections/newsletter";
import { Reveal } from "@/components/motion/reveal";
import { PatternDivider } from "@/components/pattern-divider";

export function NewsletterSection() {
  const { dict } = useLocale();

  return (
    <section className="section-pad bg-gold-gradient">
      <div className="container">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            {dict.home.newsletterTitle}
          </h2>
          <p className="mt-3 text-ink/70">{dict.home.newsletterSub}</p>
          <PatternDivider tone="wine" className="mx-auto my-6 max-w-xs" />
          <div className="mx-auto max-w-md">
            <Newsletter tone="gold-bg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
