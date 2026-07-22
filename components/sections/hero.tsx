"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function Hero() {
  const { dict } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 160]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.12]);

  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <PlaceholderImage
          id="hero-main"
          category="plats-traditionnels"
          label="Photographie signature — plat vedette du Messager"
          className="h-full"
          iconClassName="h-16 w-16 md:h-20 md:w-20"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/30" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-gold-300"
        >
          <span className="kicker-divider" />
          {dict.hero.eyebrow}
          <span className="kicker-divider" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {dict.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-xl text-balance text-base text-cream/80 md:text-lg"
        >
          {dict.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild size="lg" variant="gold">
            <Link href="/reservation">{dict.hero.ctaReserve}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-cream text-cream hover:bg-cream hover:text-ink"
          >
            <Link href="/menu">{dict.hero.ctaMenu}</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-cream/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{dict.hero.scroll}</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
