"use client";

import { Check } from "lucide-react";

import { useI18n } from "@/components/i18n/i18n-provider";
import CreativeCta from "@/components/landing/creative-cta";
import AnimatedContent from "@/components/react-bits/animations/AnimatedContent";
import TextAnimation from "@/components/ui/scroll-text";
import { animations } from "@/lib/animation-config";

const plans = [
  {
    key: "starter",
    price: "$0",
    featureCount: 3,
    tone: "bg-white/60 text-[#1d1d1b] dark:bg-[#1b1b18] dark:text-[#f7f3e9]",
    borderTone: "border-black/10 dark:border-white/10",
    mutedTone: "text-black/45 dark:text-white/50",
    descriptionTone: "text-black/60 dark:text-white/60",
    detailTone: "bg-black/8 dark:bg-white/10",
    featured: false,
  },
  {
    key: "studio",
    price: "$19",
    featureCount: 4,
    tone: "bg-[#f5c451] text-[#1d1d1b]",
    borderTone: "border-black/10",
    mutedTone: "text-black/45",
    descriptionTone: "text-black/60",
    detailTone: "bg-black/8",
    featured: true,
  },
  {
    key: "business",
    price: "$49",
    featureCount: 4,
    tone: "bg-[#dff3e7] text-[#1d1d1b] dark:bg-[#19352c] dark:text-[#f1f8f4]",
    borderTone: "border-black/10 dark:border-white/10",
    mutedTone: "text-black/45 dark:text-white/55",
    descriptionTone: "text-black/60 dark:text-white/60",
    detailTone: "bg-black/8 dark:bg-white/10",
    featured: false,
  },
] as const;

export default function PricingSection() {
  const { t } = useI18n();

  return (
    <section className="bg-[#f8f3e8] px-5 py-20 transition-colors duration-[var(--motion-standard)] dark:bg-[#121210] sm:px-8 sm:py-28 xl:py-40" data-scroll-snap id="pricing">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-black/15 pb-14 dark:border-white/15 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45 dark:text-white/50">{t("pricing.eyebrow")}</p>
          <TextAnimation
            as="h2"
            text={t("pricing.title")}
            classname="text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.94] tracking-[-0.055em]"
            direction="up"
          />
        </div>

        <AnimatedContent
          distance={animations.pricingCards.distancePx}
          direction="vertical"
          duration={animations.pricingCards.durationSeconds}
          ease={animations.pricingCards.ease}
          blur={animations.pricingCards.blurPx}
          stagger={animations.pricingCards.staggerSeconds}
          threshold={animations.pricingCards.threshold}
          once={!animations.pricingCards.replayOnReentry}
          className="grid gap-4 pt-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {plans.map((plan) => {
            const planName = t(`pricing.plans.${plan.key}.name`);

            return (
              <article
                className={`relative flex min-h-[28rem] flex-col overflow-hidden rounded-[var(--component-radius)] border p-6 transition-colors duration-[var(--motion-standard)] sm:min-h-[30rem] sm:p-7 xl:min-h-[32rem] ${plan.borderTone} ${plan.tone}`}
                data-cursor-trail-color={plan.featured ? "#1d1d1b" : undefined}
                key={plan.key}
              >
                {plan.featured && (
                  <span className="absolute end-6 top-6 rounded-full bg-[#1d1d1b] px-3 py-1 text-xs font-semibold text-white">
                    {t("pricing.popular")}
                  </span>
                )}
                <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${plan.mutedTone}`}>{planName}</p>
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-6xl font-semibold tracking-[-0.06em]">{plan.price}</span>
                  <span className={`pb-2 text-sm ${plan.mutedTone}`}>{t("pricing.perMonth")}</span>
                </div>
                <p className={`mt-6 max-w-sm leading-7 ${plan.descriptionTone}`}>{t(`pricing.plans.${plan.key}.description`)}</p>
                <ul className="mt-10 space-y-4">
                  {Array.from({ length: plan.featureCount }, (_, index) => {
                    const feature = t(`pricing.plans.${plan.key}.feature${index + 1}`);
                    return (
                      <li className="flex items-center gap-3 text-sm font-medium" key={feature}>
                        <span className={`grid size-6 place-items-center rounded-full ${plan.detailTone}`}>
                          <Check className="size-3.5" />
                        </span>
                        {feature}
                      </li>
                    );
                  })}
                </ul>
                <CreativeCta className="mt-auto w-full" label={t("pricing.choose", { plan: planName })} />
              </article>
            );
          })}
        </AnimatedContent>
        <p className="mt-5 text-center text-xs text-black/40 dark:text-white/45">
          {t("pricing.note")}
        </p>
      </div>
    </section>
  );
}
