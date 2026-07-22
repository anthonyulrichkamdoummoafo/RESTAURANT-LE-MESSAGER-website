"use client";

import * as React from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Newsletter({ compact = false, tone = "default" }: { compact?: boolean; tone?: "default" | "gold-bg" }) {
  const { dict } = useLocale();
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to Supabase `newsletter_subscribers` table or CRM of choice.
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <p className="flex items-center gap-2 text-sm text-leaf-500">
        <CheckCircle2 className="h-4 w-4" />
        {dict.home.newsletterSuccess}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex gap-2", compact ? "flex-col" : "flex-col sm:flex-row")}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={dict.home.newsletterPlaceholder}
        className={cn(
          "h-11 flex-1 rounded-full border px-4 text-sm outline-none transition-colors",
          compact
            ? "border-cream/20 bg-cream/5 text-cream placeholder:text-cream/40 focus:border-gold-400"
            : "border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface))] placeholder:text-[rgb(var(--ink-muted))] focus:border-gold-400"
        )}
      />
      <Button
        type="submit"
        variant={tone === "gold-bg" ? "primary" : "gold"}
        size={compact ? "sm" : "md"}
        className="shrink-0"
      >
        {dict.home.newsletterCta}
        <Send className="h-3.5 w-3.5" />
      </Button>
    </form>
  );
}
