"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", key: "home" as const },
  { href: "/menu", key: "menu" as const },
  { href: "/about", key: "about" as const },
  { href: "/gallery", key: "gallery" as const },
  { href: "/events", key: "events" as const },
  { href: "/contact", key: "contact" as const },
];

export function Navbar() {
  const { dict } = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { scrollY } = useScroll();

  // The hero (home page only) renders a dark video behind a transparent
  // navbar, so before scrolling we always force light text/logo — regardless
  // of light/dark theme — for legibility. Once scrolled, the navbar gets a
  // solid surface and normal theme-aware colors take over.
  const isHome = pathname === "/";
  const onDark = isHome && !scrolled;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-signature",
          scrolled
            ? "bg-[rgb(var(--surface))]/90 backdrop-blur-lg shadow-soft py-2"
            : "bg-transparent py-4"
        )}
      >
        <nav className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo
              height={64}
              priority
              variant={onDark ? "light-text" : "auto"}
              className="h-9 md:h-10 transition-transform group-hover:scale-105"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium tracking-wide transition-colors",
                      onDark
                        ? cn("text-cream/90 hover:text-gold-300", active && "text-gold-300")
                        : cn(
                            "text-[rgb(var(--ink))] hover:text-wine-500 dark:hover:text-gold-400",
                            active && "text-wine-500 dark:text-gold-400"
                          )
                    )}
                  >
                    {dict.nav[item.key]}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gold-400"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <LocaleToggle
              className={onDark ? "border-cream/30 text-cream" : undefined}
            />
            <ThemeToggle className={onDark ? "border-cream/30 text-cream" : undefined} />
            <Button asChild size="sm" variant={onDark ? "gold" : "primary"}>
              <Link href="/reservation">{dict.nav.reserve}</Link>
            </Button>
          </div>

          <button
            className={cn(
              "lg:hidden flex h-10 w-10 items-center justify-center rounded-full border transition-colors",
              onDark ? "border-cream/30 text-cream" : "border-[rgb(var(--border-subtle))]"
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[64px] z-30 mx-4 rounded-2xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] p-6 shadow-soft lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block text-base font-medium",
                      pathname === item.href
                        ? "text-wine-500 dark:text-gold-400"
                        : "text-[rgb(var(--ink))]"
                    )}
                  >
                    {dict.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between gap-3">
              <LocaleToggle />
              <ThemeToggle />
            </div>
            <Button asChild className="mt-4 w-full" variant="primary">
              <Link href="/reservation">{dict.nav.reserve}</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gold-gradient z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
