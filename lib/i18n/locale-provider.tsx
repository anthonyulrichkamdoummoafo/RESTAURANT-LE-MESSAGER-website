"use client";

import * as React from "react";
import { dictionaries, type Dictionary } from "./dictionaries";
import type { Locale } from "@/types";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dictionary;
}

const LocaleContext = React.createContext<LocaleContextValue | undefined>(undefined);

const STORAGE_KEY = "lemessager-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("fr");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    const browser = navigator.language?.toLowerCase().startsWith("en") ? "en" : "fr";
    const initial = stored ?? browser;
    setLocaleState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const value = React.useMemo(
    () => ({ locale, setLocale, dict: dictionaries[locale] }),
    [locale, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
