"use client";

import { locales, type Locale, useI18n } from "@/components/i18n/i18n-provider";
import GlideSelect from "@/components/react-bits/micro/GlideSelect";
import { animations } from "@/lib/animation-config";

export default function LocaleSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const options = locales.map((option) => ({
    value: option,
    label: t(`language.${option}`),
    tag: t(`language.${option}Name`),
  }));

  return (
    <GlideSelect
      options={options}
      value={locale}
      onChange={(value) => setLocale(value as Locale)}
      ariaLabel={t("language.label")}
      className="locale-glide-select"
      showTags
      accentColor="#1d1d1b"
      surfaceColor="#fffdf8"
      highlightColor="#f5c451"
      textColor="#1d1d1b"
      size="md"
      radius={16}
      menuWidth={176}
      placement="bottom"
      align="left"
      popDuration={animations.select.popDurationMs}
      glideDuration={animations.select.glideDurationMs}
      rememberPosition
    />
  );
}
