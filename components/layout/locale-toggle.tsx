"use client";

import { useLocale } from "@/lib/i18n/locale-provider";
import { cn } from "@/lib/utils";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-[rgb(var(--border-subtle))] p-0.5 text-xs font-semibold",
        className
      )}
      role="group"
      aria-label="Choix de la langue / Language choice"
    >
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "rounded-full px-2.5 py-1.5 uppercase transition-colors",
            locale === l
              ? "bg-wine-500 text-cream dark:bg-gold-400 dark:text-ink"
              : "text-[rgb(var(--ink-muted))] hover:text-[rgb(var(--ink))]"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
