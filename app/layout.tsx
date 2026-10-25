import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { animationCssVariables } from "@/lib/animation-config";
import { themeInitializationScript } from "@/lib/theme-script";
import { cn } from "@/lib/utils";
import en from "@/messages/en.json";

const spaceGrotesk = Space_Grotesk({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      style={animationCssVariables}
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", spaceGrotesk.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-initialization" strategy="beforeInteractive">
          {themeInitializationScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
