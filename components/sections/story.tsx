"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-provider";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { PatternDivider } from "@/components/pattern-divider";
import { ArrowRight } from "lucide-react";

export function Story() {
  const { dict } = useLocale();

  const stats = [
    { value: 8, suffix: "+", label: dict.home.counters.years },
    { value: 40, suffix: "+", label: dict.home.counters.dishes },
    { value: 3000, suffix: "+", label: dict.home.counters.guests },
    { value: 4.8, suffix: "/5", label: dict.home.counters.rating, decimal: true },
  ];

  return (
    <section className="section-pad bg-[rgb(var(--surface))] overflow-hidden">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
              <PlaceholderImage id="story-main" category="cuisine" label="Notre cuisine, notre histoire" />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden w-48 rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] p-4 shadow-soft sm:block">
              <div className="aspect-square overflow-hidden rounded-xl">
                <PlaceholderImage id="story-detail" category="plats-traditionnels" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">
            <span className="kicker-divider" />
            {dict.home.storyEyebrow}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            {dict.home.storyTitle}
          </h2>
          <p className="mt-5 text-[rgb(var(--ink-muted))] leading-relaxed">{dict.home.storyBody}</p>

          <PatternDivider className="my-8 max-w-xs" />

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-wine-500 dark:text-gold-400">
                  {stat.decimal ? stat.value.toFixed(1) : <AnimatedCounter value={stat.value} />}
                  {!stat.decimal && stat.suffix}
                  {stat.decimal && stat.suffix}
                </p>
                <p className="mt-1 text-xs text-[rgb(var(--ink-muted))] leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          <Button asChild variant="link" className="mt-8">
            <Link href="/about">
              {dict.home.storyCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
