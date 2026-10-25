"use client";

import { useI18n } from "@/components/i18n/i18n-provider";

export default function LandingFooter() {
  const { t } = useI18n();

  return (
    <footer className="px-5 py-10 sm:px-8" data-scroll-snap data-scroll-snap-align="end" id="footer">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-black/10 pt-10 text-sm text-black/50 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <span className="text-xl font-semibold text-black">{t("brand.name")}</span>
          <p className="mt-3 max-w-md leading-6">{t("footer.description")}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 font-medium">
          <a className="transition-colors duration-[var(--motion-fast)] hover:text-black" href="#workflow">{t("footer.product")}</a>
          <a className="transition-colors duration-[var(--motion-fast)] hover:text-black" href="#pricing">{t("footer.pricing")}</a>
          <a className="transition-colors duration-[var(--motion-fast)] hover:text-black" href="/auth">{t("footer.getStarted")}</a>
        </div>
      </div>
    </footer>
  );
}
