"use client";

import { useRef } from "react";
import { BarChart3, Building2, CircleCheckBig, Clock3, FileCheck2, Quote, ReceiptText, TrendingUp } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { SiDropbox, SiFigma, SiHubspot, SiNotion, SiShopify, SiSpotify, SiStripe, SiZapier } from "react-icons/si";

import { useI18n } from "@/components/i18n/i18n-provider";
import LogoLoop from "@/components/react-bits/animations/LogoLoop";
import CardSwap, { Card } from "@/components/react-bits/components/CardSwap";
import MagicBento from "@/components/react-bits/components/MagicBento";
import CountUp from "@/components/react-bits/text-animations/CountUp";
import TextAnimation from "@/components/ui/scroll-text";
import { animations } from "@/lib/animation-config";
import { useTheme } from "@/lib/theme";

const panels = [
  {
    step: "01",
    key: "details",
    className: "bg-[#f5c451] text-[#201a0f]",
    icon: FileCheck2,
    preview: "details",
    trailColor: "#1d1d1b",
  },
  {
    step: "02",
    key: "tenants",
    className: "bg-[#dff3e7] text-[#15221b] dark:bg-[#17352b] dark:text-[#eef8f2]",
    icon: Building2,
    preview: "tenants",
    trailColor: undefined,
  },
  {
    step: "03",
    key: "testimonial",
    className: "bg-[#1d1d1b] text-[#fffaf0] dark:bg-[#0c0c0b]",
    icon: Quote,
    preview: "testimonial",
    trailColor: "#f5c451",
  },
] as const;

function ProductDetailsPreview() {
  const { locale, t } = useI18n();
  const metrics = [
    { key: "outstanding", icon: ReceiptText, to: 84200, prefix: "$", suffix: "", format: "compact", colSpan: 1, rowSpan: 1 },
    { key: "paid", icon: CircleCheckBig, to: 14600, prefix: "$", suffix: "", format: "compact", colSpan: 1, rowSpan: 1 },
    { key: "conversion", icon: TrendingUp, to: 68, prefix: "", suffix: "%", format: "standard", colSpan: 2, rowSpan: 2 },
    { key: "automated", icon: FileCheck2, to: 326, prefix: "", suffix: "", format: "standard", colSpan: 2, rowSpan: 2 },
    { key: "records", icon: BarChart3, to: 128, prefix: "", suffix: "+", format: "standard", colSpan: 1, rowSpan: 1 },
    { key: "overdue", icon: Clock3, to: 7, prefix: "", suffix: "", format: "standard", colSpan: 1, rowSpan: 1 },
  ] as const;
  const chartBars = [36, 52, 44, 68, 58, 82, 72, 94];
  const items = metrics.map(({ key, icon: Icon, to, prefix, suffix, format, colSpan, rowSpan }, index) => {
    const featured = rowSpan === 2;

    return {
    id: key,
    title: t(`story.details.${key}.title`),
    colSpan,
    rowSpan,
    content: (
      <div className="flex h-full min-w-0 flex-col overflow-hidden">
        <div className="flex items-center justify-between gap-3">
          <span className="grid size-8 place-items-center rounded-xl bg-[#f5c451]/70">
            <Icon className="size-4.5" />
          </span>
          <span className="font-mono text-[0.65rem] text-black/35">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className={featured ? "mt-6 max-sm:mt-auto" : "mt-auto"}>
          <CountUp
            from={0}
            to={to}
            mode="roll"
            easing="easeOut"
            format={locale === "ar" && format === "compact" ? "standard" : format}
            separator={locale === "ar" ? "٬" : ","}
            prefix={prefix}
            suffix={suffix}
            direction="up"
            duration={animations.magicBento.countDurationSeconds}
            delay={animations.magicBento.countDelaySeconds + index * animations.magicBento.countStaggerSeconds}
            trigger="view"
            replayOnHover
            className={`count-up-text block max-w-full self-start font-bold leading-[1.2] tracking-[-0.04em] max-sm:text-[1.55rem] ${
              featured ? "text-[clamp(2.5rem,4vw,3.75rem)]" : "text-[clamp(1.6rem,2vw,2.25rem)]"
            }`}
          />
          <h3 className={`${featured ? "mt-4 text-base" : "mt-2 text-xs"} font-semibold tracking-tight`}>
            {t(`story.details.${key}.title`)}
          </h3>
          {featured && (
            <p className="mt-1.5 max-w-xs text-xs leading-5 text-black/50 max-xl:hidden">{t(`story.details.${key}.description`)}</p>
          )}
        </div>
        {featured && key === "conversion" && (
          <div className="mt-auto flex h-14 items-end gap-1.5 rounded-xl bg-black/[0.035] px-3 pb-2 pt-3 max-xl:hidden" aria-hidden="true">
            {chartBars.map((height, barIndex) => (
              <span
                className={`min-w-0 flex-1 rounded-t-sm ${barIndex === chartBars.length - 1 ? "bg-[#a66b00]" : "bg-[#f5c451]"}`}
                key={height}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        )}
        {featured && key === "automated" && (
          <div className="mt-auto flex items-center gap-2 rounded-xl bg-black/[0.035] p-3 max-xl:hidden" aria-hidden="true">
            {[0, 1, 2].map((step) => (
              <div className="contents" key={step}>
                <span className={`grid size-9 shrink-0 place-items-center rounded-full ${step === 2 ? "bg-[#1d1d1b] text-white" : "bg-[#f5c451]"}`}>
                  {step === 2 ? <CircleCheckBig className="size-4" /> : <span className="size-2 rounded-full bg-current" />}
                </span>
                {step < 2 && <span className="h-px min-w-4 flex-1 bg-black/15" />}
              </div>
            ))}
          </div>
        )}
      </div>
    ),
    };
  });

  return (
    <div className="story-bento-preview w-full max-w-[46rem] text-[#171712]">
      <MagicBento
        className="story-metric-bento"
        items={items}
        columns={4}
        rowHeight={150}
        gap={12}
        radius={16}
        theme="light"
        glowColor="#a66b00"
        textAutoHide={false}
        enableBorderGlow={animations.magicBento.enableBorderGlow}
        enableSpotlight={animations.magicBento.enableSpotlight}
        spotlightRadius={300}
        enableStars={false}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={animations.magicBento.clickEffect}
        intro={animations.magicBento.intro}
      />
    </div>
  );
}

function TenantsPreview() {
  const { t } = useI18n();
  const logos = [
    { node: <SiStripe />, title: t("story.tenants.logos.stripe"), hoverColor: "#635bff" },
    { node: <SiShopify />, title: t("story.tenants.logos.shopify"), hoverColor: "#7ab55c" },
    { node: <SiNotion />, title: t("story.tenants.logos.notion"), hoverColor: "#111111" },
    { node: <SiFigma />, title: t("story.tenants.logos.figma"), hoverColor: "#f24e1e" },
    { node: <SiHubspot />, title: t("story.tenants.logos.hubspot"), hoverColor: "#ff5c35" },
    { node: <SiDropbox />, title: t("story.tenants.logos.dropbox"), hoverColor: "#0061ff" },
    { node: <SiZapier />, title: t("story.tenants.logos.zapier"), hoverColor: "#ff4f00" },
    { node: <SiSpotify />, title: t("story.tenants.logos.spotify"), hoverColor: "#1db954" },
  ];

  return (
    <div className="story-logo-preview w-full max-w-2xl overflow-hidden py-12">
      <LogoLoop
        className="story-logo-loop"
        logos={logos}
        speed={animations.logoLoop.speed}
        direction="left"
        logoHeight={58}
        gap={52}
        hoverSpeed={animations.logoLoop.hoverSpeed}
        scaleOnHover={false}
        layout="wave"
        bend={0.42}
        magnify={0.18}
        labels="below"
        muted={0.15}
        intro={animations.logoLoop.intro}
        ariaLabel={t("story.tenants.ariaLabel")}
      />
    </div>
  );
}

function TestimonialPreview() {
  const { t } = useI18n();
  const theme = useTheme();
  const isDark = theme === "dark";
  const testimonialKeys = ["amina", "julien", "sara"] as const;

  return (
    <div
      className="story-testimonial-stack h-[20rem] w-full max-w-[38rem] sm:h-[22rem] xl:h-[35rem]"
      data-cursor-trail-color={isDark ? "#f5c451" : "#1d1d1b"}
    >
      <CardSwap
        width={420}
        height={300}
        cardDistance={58}
        verticalDistance={54}
        cardRadius={16}
        delay={animations.cardSwap.delayMs}
        speed={animations.cardSwap.speed}
        bounce={animations.cardSwap.bounce}
        hoverSpread={animations.cardSwap.hoverSpread}
        intro={animations.cardSwap.intro}
        theme={theme}
        ariaLabel={t("story.testimonial.ariaLabel")}
      >
        {testimonialKeys.map((key, index) => (
          <Card key={key}>
            <figure className="flex h-full flex-col p-7 text-[#1d1d1b] dark:text-[#f7f3e9]">
              <div className="flex items-center justify-between">
                <Quote className="size-8 text-[#a66b00]" />
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/40 dark:text-white/45">
                  {t("story.testimonial.label")} · {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <blockquote className="mt-8 flex-1 text-xl font-medium leading-snug tracking-[-0.035em]">
                {t(`story.testimonial.items.${key}.quote`)}
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-black/10 pt-5 dark:border-white/10">
                <span className="grid size-10 place-items-center rounded-full bg-[#f5c451] text-sm font-bold text-[#1d1d1b]">
                  {t(`story.testimonial.items.${key}.initials`)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t(`story.testimonial.items.${key}.name`)}</span>
                  <span className="mt-0.5 block text-xs text-black/50 dark:text-white/50">{t(`story.testimonial.items.${key}.role`)}</span>
                </span>
              </figcaption>
            </figure>
          </Card>
        ))}
      </CardSwap>
    </div>
  );
}

function PanelPreview({ preview }: { preview: (typeof panels)[number]["preview"] }) {
  if (preview === "details") return <ProductDetailsPreview />;
  if (preview === "tenants") return <TenantsPreview />;
  return <TestimonialPreview />;
}

export default function HorizontalStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { direction, t } = useI18n();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: animations.horizontalStory.springStiffness,
    damping: animations.horizontalStory.springDamping,
    mass: animations.horizontalStory.springMass,
  });
  // Keep the oversized track in physical viewport coordinates. In RTL, a
  // normal-flow 300vw block overflows left and exposes the final panel first.
  const x = useTransform(smoothProgress, [0, 1], ["0vw", `${animations.horizontalStory.travelVw}vw`]);
  const progress = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative h-[280vh]" data-scroll-snap id="horizontal-story" ref={sectionRef}>
      <span className="pointer-events-none absolute start-0 top-0 size-px" id="workflow" />
      <span className="pointer-events-none absolute start-0 top-[90vh] size-px" data-scroll-snap id="tenants" />
      <span className="pointer-events-none absolute start-0 top-[180vh] size-px" data-scroll-snap id="testimonials" />
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 hidden items-center justify-between p-8 text-xs font-semibold uppercase tracking-[0.2em] xl:flex">
          <span>{t("story.eyebrow")}</span>
          <span>{t("story.scrollHint")}</span>
        </div>
        <div className="absolute inset-x-0 top-0 z-30 h-1 bg-black/10 dark:bg-white/10">
          <motion.div className="h-full bg-black dark:bg-white" style={{ width: progress }} />
        </div>

        <motion.div
          className="absolute inset-y-0 left-0 flex w-[300vw] [direction:ltr]"
          dir="ltr"
          style={{ x }}
        >
          {panels.map((panel) => {
            const Icon = panel.icon;

            return (
              <article
                className={`grid h-[100svh] w-screen flex-none grid-cols-1 content-center gap-6 overflow-hidden px-5 pb-8 pt-20 sm:gap-8 sm:px-8 md:px-12 lg:px-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-center xl:px-24 xl:pb-10 xl:pt-24 ${panel.className}`}
                data-cursor-trail-color={panel.trailColor}
                dir={direction}
                key={panel.step}
              >
                <div className="relative z-10 max-w-3xl">
                  <div className="mb-5 flex items-center gap-3 sm:mb-6 xl:mb-8">
                    <span className="grid size-11 place-items-center rounded-full border border-current/20">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                      {panel.step} / {t(`story.panels.${panel.key}.label`)}
                    </span>
                  </div>
                  <TextAnimation
                    as="h2"
                    text={t(`story.panels.${panel.key}.title`)}
                    classname="max-w-3xl text-[clamp(2.15rem,6.2vw,7rem)] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-[clamp(2.5rem,6.2vw,7rem)] xl:leading-[0.9] xl:tracking-[-0.06em]"
                    variants={{
                      hidden: {
                        filter: `blur(${animations.horizontalStory.headingBlurPx}px)`,
                        opacity: 0,
                        y: animations.horizontalStory.headingOffsetPx,
                      },
                      visible: {
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: animations.horizontalStory.headingDurationSeconds,
                          ease: animations.horizontalStory.headingEase as "easeOut",
                        },
                      },
                    }}
                  />
                  <TextAnimation
                    as="p"
                    text={t(`story.panels.${panel.key}.copy`)}
                    classname="mt-5 max-w-xl text-base leading-7 opacity-70 sm:mt-6 sm:text-lg md:text-xl md:leading-8 xl:mt-7"
                    direction={direction === "rtl" ? "left" : "right"}
                  />
                </div>
                <div className="relative z-10 flex items-center justify-center md:justify-end">
                  <PanelPreview preview={panel.preview} />
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
