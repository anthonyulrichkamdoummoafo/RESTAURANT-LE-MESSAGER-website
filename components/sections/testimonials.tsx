"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { TESTIMONIALS } from "@/lib/data/content";
import { Reveal } from "@/components/motion/reveal";
import { t, cn } from "@/lib/utils";

export function Testimonials() {
  const { dict, locale } = useLocale();
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);

  function go(delta: number) {
    setDirection(delta);
    setIndex((prev) => (prev + delta + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  React.useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <section className="section-pad bg-ink text-cream relative overflow-hidden">
      <Quote className="pointer-events-none absolute left-1/2 top-10 h-32 w-32 -translate-x-1/2 text-gold-400/10" />
      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold-300">
            <span className="kicker-divider" />
            {dict.home.testimonialsEyebrow}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            {dict.home.testimonialsTitle}
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < current.rating ? "fill-gold-400 text-gold-400" : "text-cream/20"
                      )}
                    />
                  ))}
                </div>
                <p className="mt-5 text-balance font-display text-xl leading-relaxed text-cream/90 sm:text-2xl">
                  “{t(current.quote, locale)}”
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/15 text-sm font-semibold text-gold-300">
                    {current.avatarInitials}
                  </span>
                  <div className="text-left">
                    <p className="font-medium">{current.name}</p>
                    <p className="text-xs text-cream/50">{t(current.role, locale)}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((tItem, i) => (
                <button
                  key={tItem.id}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Témoignage ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-6 bg-gold-400" : "w-1.5 bg-cream/25"
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
