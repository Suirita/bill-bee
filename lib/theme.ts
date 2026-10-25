"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const storageKey = "bill-bee-theme";
const themeEvent = "bill-bee-theme-change";

function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerTheme(): Theme {
  return "light";
}

function applyTheme(theme: Theme, persist = true) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  if (persist) localStorage.setItem(storageKey, theme);
  window.dispatchEvent(new Event(themeEvent));
}

function subscribe(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== storageKey) return;

    const storedTheme = event.newValue;
    const nextTheme: Theme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    applyTheme(nextTheme, false);
  };

  window.addEventListener(themeEvent, onStoreChange);
  window.addEventListener("storage", onStorage);

  return () => {
    window.removeEventListener(themeEvent, onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function useTheme() {
  return useSyncExternalStore(subscribe, getTheme, getServerTheme);
}

export function toggleTheme() {
  applyTheme(getTheme() === "dark" ? "light" : "dark");
}
