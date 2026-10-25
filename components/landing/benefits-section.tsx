"use client";

import { FileText, LineChart, ShieldCheck } from "lucide-react";

import { useI18n } from "@/components/i18n/i18n-provider";
import TextAnimation from "@/components/ui/scroll-text";

const benefits = [
  { icon: FileText, key: "source" },
  { icon: LineChart, key: "clarity" },
  { icon: ShieldCheck, key: "work" },
] as const;

export default function BenefitsSection() {
  const { t } = useI18n();

  return (
    <section className="bg-[#f8f3e8] px-5 py-28 sm:px-8 md:py-40" id="benefits">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-black/15 pb-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45">{t("benefits.eyebrow")}</p>
          <TextAnimation
            as="h2"
            text={t("benefits.title")}
            classname="text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.94] tracking-[-0.055em]"
            direction="up"
          />
        </div>
        <div className="grid gap-4 pt-8 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const title = t(`benefits.items.${benefit.key}.title`);

            return (
              <article
                className="rounded-[1.75rem] border border-black/10 bg-white/55 p-7 transition-transform duration-[var(--motion-fast)] hover:-translate-y-1"
                key={benefit.key}
              >
                <div className="mb-14 flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-[#f5c451]">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-black/35">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 leading-7 text-black/55">{t(`benefits.items.${benefit.key}.copy`)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
