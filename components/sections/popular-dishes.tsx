"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { MENU_ITEMS } from "@/lib/data/menu";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { t, formatPrice } from "@/lib/utils";

export function PopularDishes() {
  const { dict, locale } = useLocale();
  const dishes = MENU_ITEMS.filter((d) => d.popular).slice(0, 6);

  return (
    <section className="section-pad bg-[rgb(var(--surface))]">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="kicker-divider" />
            {dict.home.dishesEyebrow}
            <span className="kicker-divider" />
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            {dict.home.dishesTitle}
          </h2>
          <p className="mt-4 text-[rgb(var(--ink-muted))]">{dict.home.dishesSub}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, i) => (
            <Reveal key={dish.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group overflow-hidden rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] shadow-soft"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 ease-signature group-hover:scale-110">
                    <PlaceholderImage id={dish.id} category={dish.category} label={dish.name} />
                  </div>
                  <div className="absolute left-3 top-3 flex gap-2">
                    <Badge variant="gold">
                      <Flame className="h-3 w-3" /> {dict.menu.popular}
                    </Badge>
                    {dish.spicy && <Badge variant="wine">🌶️</Badge>}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold leading-snug">{dish.name}</h3>
                    <span className="shrink-0 font-display text-lg font-semibold text-wine-500 dark:text-gold-400">
                      {formatPrice(dish.price, locale)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[rgb(var(--ink-muted))] leading-relaxed">
                    {t(dish.description, locale)}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/menu">
              {dict.common.viewMenu}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
