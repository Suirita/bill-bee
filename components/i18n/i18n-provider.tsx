"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

import ar from "@/messages/ar.json";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";

export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

const catalogs = { en, fr, ar } as const;
const storageKey = "bill-bee-locale";
const localeChangeEvent = "bill-bee-locale-change";

type TranslationParams = Record<string, string | number>;
type I18nContextValue = {
  direction: "ltr" | "rtl";
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: TranslationParams) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return locales.includes(value as Locale);
}

function resolveMessage(locale: Locale, key: string) {
  const result = key.split(".").reduce<unknown>((value, part) => {
    if (!value || typeof value !== "object") return undefined;
    return (value as Record<string, unknown>)[part];
  }, catalogs[locale]);

  return typeof result === "string" ? result : key;
}

function interpolate(message: string, params?: TranslationParams) {
  if (!params) return message;
  return message.replace(/\{(\w+)\}/g, (_, key: string) => String(params[key] ?? `{${key}}`));
}

function syncDocument(locale: Locale) {
  const direction = locale === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = locale;
  document.documentElement.dir = direction;
  document.title = resolveMessage(locale, "meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", resolveMessage(locale, "meta.description"));
}

function getLocaleSnapshot(): Locale {
  if (typeof window === "undefined") return "en";

  try {
    const storedLocale = window.localStorage.getItem(storageKey);
    return isLocale(storedLocale) ? storedLocale : "en";
  } catch {
    return "en";
  }
}

function getServerLocaleSnapshot(): Locale {
  return "en";
}

function subscribeToLocale(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === storageKey) onStoreChange();
  };
  const handleLocaleChange = () => onStoreChange();

  window.addEventListener("storage", handleStorage);
  window.addEventListener(localeChangeEvent, handleLocaleChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(localeChangeEvent, handleLocaleChange);
  };
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore<Locale>(subscribeToLocale, getLocaleSnapshot, getServerLocaleSnapshot);
  const direction: I18nContextValue["direction"] = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    syncDocument(locale);
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    try {
      window.localStorage.setItem(storageKey, nextLocale);
    } finally {
      window.dispatchEvent(new Event(localeChangeEvent));
    }
  }, []);

  const t = useCallback(
    (key: string, params?: TranslationParams) => interpolate(resolveMessage(locale, key), params),
    [locale],
  );

  const value = useMemo(
    () => ({ direction, locale, setLocale, t }),
    [direction, locale, setLocale, t],
  );

  return (
    <I18nContext.Provider value={value}>
      <div className="i18n-shell min-h-full" dir={direction} lang={locale}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
