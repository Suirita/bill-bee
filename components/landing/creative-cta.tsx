"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CreativeCtaProps = {
  className?: string;
  compact?: boolean;
  label: string;
};

export default function CreativeCta({
  className,
  compact = false,
  label,
}: CreativeCtaProps) {
  return (
    <Link
      className={cn(
        "group relative inline-grid cursor-pointer place-items-center overflow-hidden rounded-full border border-black/15 bg-white font-semibold text-black shadow-sm outline-none transition-[transform,box-shadow] duration-[var(--motion-emphasized)] ease-[var(--motion-ease-out)] hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
        compact ? "h-10 min-w-36 px-4 text-sm" : "h-13 min-w-44 px-6",
        className,
      )}
      href="/auth"
    >
      <span className="relative z-20 inline-block transition-[transform,opacity] duration-[var(--motion-emphasized)] ease-[var(--motion-ease-out)] group-hover:translate-x-10 group-hover:opacity-0 group-focus-visible:translate-x-10 group-focus-visible:opacity-0">
        {label}
      </span>

      <span className="absolute inset-0 z-30 flex translate-x-10 items-center justify-center gap-2 text-white opacity-0 transition-[transform,opacity] duration-[var(--motion-emphasized)] ease-[var(--motion-ease-out)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
        <span>{label}</span>
        <ArrowRight className="size-4 transition-transform duration-[var(--motion-emphasized)] group-hover:translate-x-1 group-focus-visible:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 rtl:group-focus-visible:-translate-x-1" />
      </span>

      <span className="absolute left-3 top-1/2 z-10 size-2 -translate-y-1/2 rounded-full bg-[#1d1d1b] transition-[left,top,width,height,transform,border-radius] duration-[var(--motion-emphasized)] ease-[var(--motion-ease-out)] group-hover:left-0 group-hover:top-0 group-hover:size-full group-hover:scale-[1.04] group-hover:translate-y-0 group-hover:rounded-full group-focus-visible:left-0 group-focus-visible:top-0 group-focus-visible:size-full group-focus-visible:scale-[1.04] group-focus-visible:translate-y-0 group-focus-visible:rounded-full" data-cursor-trail-color="#f5c451" />
    </Link>
  );
}
