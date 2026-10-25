"use client";

import { Moon, Sun } from "lucide-react";

import { useI18n } from "@/components/i18n/i18n-provider";
import { toggleTheme, useTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const theme = useTheme();
  const { t } = useI18n();
  const isDark = theme === "dark";
  const label = t(isDark ? "theme.switchToLight" : "theme.switchToDark");

  return (
    <button
      aria-label={label}
      aria-pressed={isDark}
      className="navbar-switcher group grid size-11 shrink-0 place-items-center rounded-[var(--component-radius)] border border-black/12 bg-[#fffdf8] text-[#1d1d1b] shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-black/70 dark:border-white/12 dark:bg-[#24241f] dark:text-[#fffaf0] dark:focus-visible:ring-white/70"
      onClick={toggleTheme}
      title={label}
      type="button"
    >
      <span className="relative size-4.5">
        <Moon
          aria-hidden="true"
          className={`absolute inset-0 size-4.5 transition-[opacity,transform] duration-[var(--motion-standard)] ${
            isDark ? "scale-75 rotate-45 opacity-0" : "scale-100 rotate-0 opacity-100"
          }`}
        />
        <Sun
          aria-hidden="true"
          className={`absolute inset-0 size-4.5 transition-[opacity,transform] duration-[var(--motion-standard)] ${
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-45 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}
