"use client";

import { Check, Receipt, Sparkles } from "lucide-react";

import { useI18n } from "@/components/i18n/i18n-provider";
import CreativeCta from "@/components/landing/creative-cta";
import RotatingText from "@/components/react-bits/text-animations/RotatingText";
import { animations } from "@/lib/animation-config";

export default function HeroSection() {
  const { t } = useI18n();
  const featureKeys = ["quotes", "invoices", "expenses", "records"] as const;
  const rotatingKeys = ["invoice", "quote", "expense", "record"] as const;
  const menuKeys = ["overview", "quotes", "invoices", "expenses"] as const;
  const recentActivity = [
    { key: "north", amount: 3400 },
    { key: "pine", amount: 1250 },
    { key: "bright", amount: 860 },
  ] as const;

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center px-5 pb-16 pt-20 sm:px-8 sm:pt-28" data-scroll-snap id="top">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12rem] top-28 size-[28rem] rounded-full bg-[#f5c451]/45 blur-3xl dark:bg-[#f5c451]/18" />
        <div className="absolute bottom-[-14rem] right-[-8rem] size-[34rem] rounded-full bg-[#cfe1ff]/65 blur-3xl dark:bg-[#315681]/30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(29,29,27,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,29,27,0.055)_1px,transparent_1px)] bg-size-[48px_48px] mask-[linear-gradient(to_bottom,black,transparent_85%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-[var(--component-radius)] border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur dark:border-white/12 dark:bg-white/8">
            <Sparkles className="size-4 text-[#bd7d00]" />
            {t("hero.eyebrow")}
          </div>
          <h1 className="flex flex-wrap items-baseline gap-x-[0.16em] gap-y-[0.08em] text-[clamp(3rem,8vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.065em] sm:leading-[0.84] sm:tracking-[-0.07em]">
            <span>{t("hero.titleLead")}</span>
            <RotatingText
              texts={rotatingKeys.map((key) => t(`hero.rotating.${key}`))}
              effect="slide"
              direction="up"
              highlight
              highlightColor="#f5c451"
              staggerFrom="last"
              staggerDuration={animations.rotatingText.staggerDurationSeconds}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              rotationInterval={animations.rotatingText.rotationIntervalMs}
              transition={{
                type: "spring",
                damping: animations.rotatingText.springDamping,
                stiffness: animations.rotatingText.springStiffness,
              }}
              mainClassName="inline-flex align-baseline"
            />
            <span>{t("hero.titleTail")}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/65 sm:text-xl">
            {t("hero.description")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CreativeCta label={t("nav.start")} />
            <a
              className="inline-flex items-center justify-center rounded-[var(--component-radius)] border border-black/15 bg-white/60 px-6 py-3.5 font-semibold backdrop-blur transition-colors duration-[var(--motion-fast)] hover:bg-white dark:border-white/15 dark:bg-white/8 dark:hover:bg-white/13"
              href="#workflow"
            >
              {t("hero.secondaryCta")}
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-black/55 dark:text-white/60">
            {featureKeys.map((key) => (
              <span className="inline-flex items-center gap-2" key={key}>
                <Check className="size-4 text-[#a66b00]" /> {t(`hero.features.${key}`)}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
          <div className="absolute -left-8 -top-8 hidden rotate-[-8deg] rounded-[var(--component-radius)] bg-[#f5c451] px-5 py-3 text-sm font-bold shadow-[5px_5px_0_#1d1d1b] sm:block">
            {t("hero.note")}
          </div>
          <div className="overflow-hidden rounded-[var(--component-radius)] border border-black/15 bg-[#1d1d1b] p-2 shadow-[0_34px_100px_rgba(40,31,10,0.22)] dark:border-white/12 dark:bg-[#080807] dark:shadow-[0_34px_100px_rgba(0,0,0,0.42)]">
            <div className="rounded-[var(--component-radius)] bg-[#fffdf8] dark:bg-[#181816] dark:text-[#f7f3e9]">
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 dark:border-white/10">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#f5c451]" />
                  <span className="size-2.5 rounded-full bg-[#dff3e7]" />
                  <span className="size-2.5 rounded-full bg-[#dce6ff]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40 dark:text-white/45">{t("hero.dashboard.overview")}</span>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-[0.72fr_1.28fr]">
                <aside className="rounded-2xl bg-[#f3eee3] p-4 dark:bg-[#25241f]">
                  <div className="mb-8 flex items-center gap-2 font-semibold">
                    <span className="grid size-8 place-items-center rounded-lg bg-[#f5c451] text-xs font-black">{t("brand.mark")}</span>
                    {t("brand.name")}
                  </div>
                  {menuKeys.map((key, index) => (
                    <div
                      className={`mb-2 rounded-xl px-3 py-2.5 text-sm ${index === 0 ? "bg-[#1d1d1b] font-semibold text-white dark:bg-[#f5c451] dark:text-[#1d1d1b]" : "text-black/50 dark:text-white/50"}`}
                      key={key}
                    >
                      {t(`hero.dashboard.${key}`)}
                    </div>
                  ))}
                </aside>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#f5c451] p-4 text-[#1d1d1b]" data-cursor-trail-color="#1d1d1b">
                      <p className="text-xs font-semibold text-black/50">{t("hero.dashboard.openInvoices")}</p>
                      <p className="mt-4 text-2xl font-semibold">$8,420</p>
                    </div>
                    <div className="rounded-2xl bg-[#dff3e7] p-4 text-[#1d1d1b] dark:bg-[#234237] dark:text-[#f7f3e9]">
                      <p className="text-xs font-semibold text-black/50 dark:text-white/55">{t("hero.dashboard.paidThisMonth")}</p>
                      <p className="mt-4 text-2xl font-semibold">$14,680</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-[#24241f]">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-semibold">{t("hero.dashboard.recentActivity")}</span>
                      <Receipt className="size-4 text-black/35 dark:text-white/40" />
                    </div>
                    {recentActivity.map(({ key, amount }) => {
                      const name = t(`hero.dashboard.clients.${key}`);
                      return (
                      <div className="flex items-center gap-3 border-t border-black/8 py-3 dark:border-white/8" key={key}>
                        <span className="grid size-8 place-items-center rounded-full bg-[#f3eee3] text-xs font-bold dark:bg-white/10">{name[0]}</span>
                        <span className="flex-1 text-sm font-medium">{name}</span>
                        <span className="font-mono text-xs">${amount}</span>
                      </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
