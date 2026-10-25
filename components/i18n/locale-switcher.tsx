"use client";

import { locales, type Locale, useI18n } from "@/components/i18n/i18n-provider";
import GlideSelect from "@/components/react-bits/micro/GlideSelect";
import { animations } from "@/lib/animation-config";
import { useTheme } from "@/lib/theme";

export default function LocaleSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const theme = useTheme();
  const isDark = theme === "dark";
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
      className="locale-glide-select navbar-select-switcher"
      showTags
      accentColor={isDark ? "#f5c451" : "#1d1d1b"}
      surfaceColor={isDark ? "#24241f" : "#fffdf8"}
      highlightColor={isDark ? "#3a3931" : "#f5c451"}
      textColor={isDark ? "#fffaf0" : "#1d1d1b"}
      size="lg"
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
