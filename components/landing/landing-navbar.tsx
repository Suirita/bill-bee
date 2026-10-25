"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

import { useI18n } from "@/components/i18n/i18n-provider";
import LocaleSwitcher from "@/components/i18n/locale-switcher";
import CreativeCta from "@/components/landing/creative-cta";
import ThemeToggle from "@/components/theme/theme-toggle";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { animations } from "@/lib/animation-config";

export default function LandingNavbar() {
  const [compact, setCompact] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useI18n();
  const navItems = [
    { href: "#workflow", key: "workflow" },
    { href: "#tenants", key: "tenants" },
    { href: "#testimonials", key: "testimonials" },
    { href: "#pricing", key: "pricing" },
  ] as const;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextCompact = latest >= animations.navbar.compactAfterPx;
    setCompact((current) => (current === nextCompact ? current : nextCompact));
  });

  return (
    <div className="relative z-40 h-16">
      <header
        className={`isolate mx-auto border transition-[width,top,border-radius,box-shadow,background-color,border-color] duration-[var(--motion-navbar)] ${
          compact
            ? "fixed inset-x-0 top-3 w-[calc(100%-1.5rem)] max-w-5xl rounded-full border-white/45 bg-white/10 shadow-[0_16px_45px_rgba(29,29,27,0.14),0_2px_8px_rgba(29,29,27,0.08)] dark:border-white/15 dark:bg-black/25 dark:shadow-[0_16px_45px_rgba(0,0,0,0.35),0_2px_8px_rgba(0,0,0,0.25)]"
            : "relative top-0 w-full max-w-none rounded-none border-x-0 border-t-0 border-black/10 bg-[#f8f3e8]/88 backdrop-blur-xl dark:border-white/10 dark:bg-[#121210]/88"
        }`}
      >
        <LiquidGlassCard active={compact}>
          <div
            className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height,padding] duration-[var(--motion-standard)] sm:px-8 ${
              compact ? "h-14" : "h-16"
            }`}
          >
            <a className="flex items-center gap-3 font-semibold tracking-tight" href="#top">
              <span
                className={`grid place-items-center rounded-xl bg-[#f5c451] font-black text-black shadow-[3px_3px_0_#1d1d1b] transition-[width,height] duration-[var(--motion-standard)] ${
                  compact ? "size-8" : "size-9"
                }`}
              >
                {t("brand.mark")}
              </span>
              <span className="hidden text-lg sm:inline">{t("brand.name")}</span>
            </a>
            <nav className="hidden items-center gap-4 text-xs font-medium lg:flex xl:gap-6 xl:text-sm">
              {navItems.map(({ href, key }) => (
                <a
                  className="whitespace-nowrap transition-opacity duration-[var(--motion-fast)] hover:opacity-55"
                  href={href}
                  key={key}
                >
                  {t(`nav.${key}`)}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LocaleSwitcher />
              <CreativeCta compact label={t("nav.start")} />
            </div>
          </div>
        </LiquidGlassCard>
      </header>
    </div>
  );
}
