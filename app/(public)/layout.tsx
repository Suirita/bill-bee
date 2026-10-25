import "lenis/dist/lenis.css";

import { I18nProvider } from "@/components/i18n/i18n-provider";
import SmoothScroll from "@/components/landing/smooth-scroll";
import PublicCursor from "@/components/effects/public-cursor";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18nProvider>
      <SmoothScroll>
        <div className="public-cursor-scope public-scroll-shell">
          <PublicCursor />
          {children}
        </div>
      </SmoothScroll>
    </I18nProvider>
  );
}
