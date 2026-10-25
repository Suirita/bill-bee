"use client";

import { ArrowRight } from "lucide-react";

import { useI18n } from "@/components/i18n/i18n-provider";
import TextAnimation from "@/components/ui/scroll-text";

export default function CtaSection() {
  const { t } = useI18n();

  return (
    <section className="px-5 pb-10 sm:px-8" id="start">
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center overflow-hidden rounded-[var(--component-radius)] bg-[#f5c451] px-7 py-20 text-[#1d1d1b] sm:px-12 lg:px-20" data-cursor-trail-color="#1d1d1b">
        <div className="absolute -right-20 -top-20 size-80 rounded-full border-[48px] border-black/5" />
        <div className="absolute -bottom-44 right-1/4 size-80 rounded-full bg-white/20 blur-2xl" />
        <div className="relative max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em]">{t("cta.eyebrow")}</p>
          <TextAnimation
            as="h2"
            text={t("cta.title")}
            classname="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.06em]"
            letterAnime={true}
          />
          <a
            className="mt-10 inline-flex items-center gap-2 rounded-[var(--component-radius)] bg-[#1d1d1b] px-6 py-3.5 font-semibold text-white transition-transform duration-[var(--motion-fast)] hover:-translate-y-1"
            data-cursor-trail-color="#f5c451"
            href="#top"
          >
            {t("cta.action")} <ArrowRight className="size-4 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}
