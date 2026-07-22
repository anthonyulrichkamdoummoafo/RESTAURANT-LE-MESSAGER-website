"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/locale-provider";
import { GALLERY_IMAGES } from "@/lib/data/gallery";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Reveal } from "@/components/motion/reveal";
import { t, cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

const FILTERS: { key: "all" | GalleryImage["category"] }[] = [
  { key: "all" },
  { key: "interieur" },
  { key: "exterieur" },
  { key: "plats" },
  { key: "cuisine" },
  { key: "evenements" },
];

const SPAN_CLASSES: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  large: "col-span-2 row-span-2",
  normal: "",
};

export function GalleryClient() {
  const { dict, locale } = useLocale();
  const [filter, setFilter] = React.useState<"all" | GalleryImage["category"]>("all");

  const images = GALLERY_IMAGES.filter((img) => filter === "all" || img.category === filter);

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="kicker-divider" />
            {dict.gallery.eyebrow}
            <span className="kicker-divider" />
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold sm:text-5xl">
            {dict.gallery.title}
          </h1>
          <p className="mt-4 text-[rgb(var(--ink-muted))]">{dict.gallery.sub}</p>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                filter === f.key
                  ? "border-wine-500 bg-wine-500 text-cream dark:border-gold-400 dark:bg-gold-400 dark:text-ink"
                  : "border-[rgb(var(--border-subtle))] hover:border-wine-500 dark:hover:border-gold-400"
              )}
            >
              {dict.gallery.filters[f.key]}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
        >
          {images.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={cn("group relative overflow-hidden rounded-2xl shadow-soft", SPAN_CLASSES[img.span ?? "normal"])}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button className="h-full w-full">
                    <div className="h-full w-full transition-transform duration-700 ease-signature group-hover:scale-110">
                      <PlaceholderImage id={img.id} category={img.category} label={t(img.alt, locale)} />
                    </div>
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-left text-xs text-cream">{t(img.alt, locale)}</span>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <div className="aspect-video w-full overflow-hidden rounded-xl">
                    <PlaceholderImage id={img.id} category={img.category} label={t(img.alt, locale)} />
                  </div>
                  <p className="p-4 text-center text-sm text-[rgb(var(--ink-muted))]">{t(img.alt, locale)}</p>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
