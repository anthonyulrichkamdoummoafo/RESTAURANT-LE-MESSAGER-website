"use client";

import { useLocale } from "@/lib/i18n/locale-provider";
import { STAFF } from "@/lib/data/content";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/motion/reveal";
import { t } from "@/lib/utils";
import { ChefHat } from "lucide-react";

export function ChefSpotlight() {
  const { dict, locale } = useLocale();
  const chef = STAFF[0];

  return (
    <section className="section-pad bg-wine-500 text-cream relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <span className="eyebrow text-gold-300">
            <span className="kicker-divider" />
            {dict.home.chefEyebrow}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            {dict.home.chefTitle}
          </h2>
          <div className="mt-6 flex items-center gap-3 text-gold-300">
            <ChefHat className="h-5 w-5" />
            <div>
              <p className="font-display text-xl">{chef.name}</p>
              <p className="text-sm text-cream/70">{t(chef.role, locale)}</p>
            </div>
          </div>
          <p className="mt-5 max-w-lg text-cream/80 leading-relaxed">{t(chef.bio, locale)}</p>
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-4 border-gold-400/40 shadow-gold">
            <PlaceholderImage id={chef.id} category="cuisine" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
