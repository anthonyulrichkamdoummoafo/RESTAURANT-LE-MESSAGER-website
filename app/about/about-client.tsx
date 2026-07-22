"use client";

import { useLocale } from "@/lib/i18n/locale-provider";
import { STAFF } from "@/lib/data/content";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/motion/reveal";
import { PatternDivider } from "@/components/pattern-divider";
import { t } from "@/lib/utils";
import { Sparkles, Target, Eye, Award, Leaf as LeafIcon, Users, ChefHat, Home } from "lucide-react";

const WHY_ICONS = [Leaf, ChefHat, Users, Home];
function Leaf(props: React.SVGProps<SVGSVGElement>) {
  return <LeafIcon {...props} />;
}

const TIMELINE = [
  { year: "2016", fr: "Ouverture du premier local à Ange Raphaël.", en: "Opening of the first location in Ange Raphaël." },
  { year: "2018", fr: "Extension de la salle et création de la terrasse.", en: "Dining room extension and terrace creation." },
  { year: "2021", fr: "Lancement du service événementiel et privatisations.", en: "Launch of event hosting and private bookings." },
  { year: "2024", fr: "Rénovation complète et nouvelle carte signature.", en: "Full renovation and new signature menu." },
];

const AWARDS = [
  { fr: "Meilleure table camerounaise — Douala Food Awards", en: "Best Cameroonian Table — Douala Food Awards" },
  { fr: "Coup de cœur presse locale, trois années consécutives", en: "Local press favorite, three years running" },
  { fr: "4,8/5 sur plus de 900 avis clients en ligne", en: "4.8/5 across 900+ online guest reviews" },
];

export function AboutClient() {
  const { dict, locale } = useLocale();
  const chef = STAFF[0];

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="kicker-divider" />
            {dict.about.eyebrow}
            <span className="kicker-divider" />
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold sm:text-5xl">
            {dict.about.title}
          </h1>
        </Reveal>

        {/* History */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
              <PlaceholderImage id="about-history" category="interieur" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-semibold">{dict.about.historyTitle}</h2>
            <p className="mt-4 text-[rgb(var(--ink-muted))] leading-relaxed">{dict.about.historyBody}</p>
          </Reveal>
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] p-8 shadow-soft">
              <Target className="h-8 w-8 text-wine-500 dark:text-gold-400" />
              <h3 className="mt-4 font-display text-2xl font-semibold">{dict.about.missionTitle}</h3>
              <p className="mt-3 text-[rgb(var(--ink-muted))] leading-relaxed">{dict.about.missionBody}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] p-8 shadow-soft">
              <Eye className="h-8 w-8 text-wine-500 dark:text-gold-400" />
              <h3 className="mt-4 font-display text-2xl font-semibold">{dict.about.visionTitle}</h3>
              <p className="mt-3 text-[rgb(var(--ink-muted))] leading-relaxed">{dict.about.visionBody}</p>
            </div>
          </Reveal>
        </div>

        {/* Chef */}
        <div className="mt-24 rounded-3xl bg-wine-500 p-10 text-cream md:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[220px_1fr]">
            <Reveal className="mx-auto">
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-gold-400/40 shadow-gold md:h-56 md:w-56">
                <PlaceholderImage id={chef.id} category="cuisine" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="eyebrow text-gold-300">
                <Sparkles className="h-3.5 w-3.5" /> {dict.about.chefTitle}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{chef.name}</h3>
              <p className="text-sm text-gold-300">{t(chef.role, locale)}</p>
              <p className="mt-4 max-w-xl text-cream/80 leading-relaxed">{t(chef.bio, locale)}</p>
            </Reveal>
          </div>
        </div>

        {/* Why choose us */}
        <div className="mt-24">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-semibold">{dict.about.whyTitle}</h2>
            <PatternDivider className="mx-auto mt-5 max-w-xs" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.about.why.map((item, i) => {
              const Icon = WHY_ICONS[i % WHY_ICONS.length];
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] p-6 text-center shadow-soft">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/15 text-gold-600 dark:text-gold-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-[rgb(var(--ink-muted))] leading-relaxed">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-semibold">{dict.about.timelineTitle}</h2>
          </Reveal>
          <div className="mx-auto mt-12 max-w-2xl">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08}>
                <div className="flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-wine-500 font-display text-sm font-semibold text-cream dark:bg-gold-400 dark:text-ink">
                      {item.year}
                    </span>
                    {i < TIMELINE.length - 1 && <span className="mt-2 w-px flex-1 bg-[rgb(var(--border-subtle))]" />}
                  </div>
                  <p className="pt-3 text-[rgb(var(--ink-muted))] leading-relaxed">
                    {locale === "fr" ? item.fr : item.en}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mt-24">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-semibold">{dict.about.awardsTitle}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {AWARDS.map((award, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] p-6 text-center shadow-soft">
                  <Award className="h-7 w-7 text-gold-500" />
                  <p className="text-sm text-[rgb(var(--ink-muted))] leading-relaxed">
                    {locale === "fr" ? award.fr : award.en}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
