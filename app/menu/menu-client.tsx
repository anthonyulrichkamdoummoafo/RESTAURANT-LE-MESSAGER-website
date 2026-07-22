"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Flame, Leaf, Ban, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/data/menu";
import { whatsappLink } from "@/lib/data/restaurant-info";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/motion/reveal";
import { t, formatPrice, cn } from "@/lib/utils";
import type { MenuCategorySlug } from "@/types";

export function MenuPageClient() {
  const { dict, locale } = useLocale();
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<MenuCategorySlug | "all">("all");

  const filtered = MENU_ITEMS.filter((item) => {
    const matchesCategory = category === "all" || item.category === category;
    const matchesQuery =
      query.trim() === "" ||
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      t(item.description, locale).toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="kicker-divider" />
            {dict.menu.eyebrow}
            <span className="kicker-divider" />
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold sm:text-5xl">
            {dict.menu.title}
          </h1>
          <p className="mt-4 text-[rgb(var(--ink-muted))]">{dict.menu.sub}</p>
        </Reveal>

        <div className="sticky top-16 z-20 mt-10 -mx-4 bg-[rgb(var(--surface))]/95 px-4 py-4 backdrop-blur-md md:static md:mx-0 md:bg-transparent md:px-0 md:backdrop-blur-none">
          <div className="relative mx-auto max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--ink-muted))]" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={dict.menu.searchPlaceholder}
              className="pl-10"
            />
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setCategory("all")}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                category === "all"
                  ? "border-wine-500 bg-wine-500 text-cream dark:border-gold-400 dark:bg-gold-400 dark:text-ink"
                  : "border-[rgb(var(--border-subtle))] hover:border-wine-500 dark:hover:border-gold-400"
              )}
            >
              {dict.menu.allCategories}
            </button>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                  category === cat.slug
                    ? "border-wine-500 bg-wine-500 text-cream dark:border-gold-400 dark:bg-gold-400 dark:text-ink"
                    : "border-[rgb(var(--border-subtle))] hover:border-wine-500 dark:hover:border-gold-400"
                )}
              >
                {t(cat.label, locale)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center text-[rgb(var(--ink-muted))]"
              >
                {dict.menu.noResults}
              </motion.p>
            ) : (
              <motion.div
                key={category + query}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
                    className={cn(
                      "group overflow-hidden rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] shadow-soft",
                      !item.available && "opacity-60"
                    )}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div className="h-full w-full transition-transform duration-700 ease-signature group-hover:scale-110">
                        <PlaceholderImage id={item.id} category={item.category} label={item.name} />
                      </div>
                      <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                        {item.popular && (
                          <Badge variant="gold">
                            <Flame className="h-3 w-3" /> {dict.menu.popular}
                          </Badge>
                        )}
                        {item.vegetarian && (
                          <Badge variant="leaf">
                            <Leaf className="h-3 w-3" /> {dict.menu.vegetarian}
                          </Badge>
                        )}
                      </div>
                      {!item.available && (
                        <div className="absolute inset-0 flex items-center justify-center bg-ink/50">
                          <Badge variant="wine" className="bg-ink text-cream border-none">
                            <Ban className="h-3 w-3" /> {dict.menu.unavailable}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-lg font-semibold leading-snug">
                          {item.name} {item.spicy && <span title={dict.menu.spicy}>🌶️</span>}
                        </h3>
                        <span className="shrink-0 font-display text-lg font-semibold text-wine-500 dark:text-gold-400">
                          {formatPrice(item.price, locale)}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[rgb(var(--ink-muted))] leading-relaxed">
                        {t(item.description, locale)}
                      </p>
                      {item.available && (
                        <a
                          href={whatsappLink(
                            locale === "fr"
                              ? `Bonjour, je souhaite commander : ${item.name}`
                              : `Hello, I'd like to order: ${item.name}`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-leaf-600 hover:text-leaf-700"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          {dict.menu.orderWhatsapp}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
