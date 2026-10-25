"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type LiquidGlassCardProps = {
  active?: boolean;
  children: ReactNode;
  className?: string;
};

export function LiquidGlassCard({
  active = true,
  children,
  className,
}: LiquidGlassCardProps) {
  const visibility = active ? "opacity-100" : "opacity-0";

  return (
    <div className={cn("relative h-full w-full rounded-[inherit]", className)}>
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-opacity duration-[var(--motion-glass)]",
          visibility,
        )}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.46) 0%, rgba(255,255,255,0.2) 46%, rgba(255,248,230,0.12) 100%)",
          backdropFilter: "blur(22px) saturate(1.35)",
          WebkitBackdropFilter: "blur(22px) saturate(1.35)",
        }}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-[var(--motion-glass)]",
          visibility,
        )}
        style={{
          background:
            "radial-gradient(ellipse 65% 130% at 12% -45%, rgba(255,255,255,0.88), transparent 58%)",
        }}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-px z-20 rounded-[inherit] transition-opacity duration-[var(--motion-glass)]",
          visibility,
        )}
        style={{
          boxShadow:
            "inset 0 -1px 0 rgba(255,255,255,0.18)",
        }}
      />

      <div className="relative z-30 h-full">{children}</div>
    </div>
  );
}
