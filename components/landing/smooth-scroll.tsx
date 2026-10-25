"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Snap from "lenis/snap";

import { animations } from "@/lib/animation-config";

const horizontalDestinations = {
  workflow: 0,
  tenants: 0.5,
  testimonials: 1,
} as const;

function SectionNavigation() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) return;

      const anchor = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = anchor?.getAttribute("href");
      if (!anchor || !hash || hash === "#" || anchor.target === "_blank") return;

      const id = hash.slice(1);
      let destination: number;

      if (id in horizontalDestinations) {
        const story = document.getElementById("horizontal-story");
        if (!story) return;
        const progress = horizontalDestinations[id as keyof typeof horizontalDestinations];
        const storyTop = story.getBoundingClientRect().top + window.scrollY;
        const storyTravel = Math.max(0, story.offsetHeight - window.innerHeight);
        destination = storyTop + storyTravel * progress;
      } else if (id === "top") {
        destination = 0;
      } else {
        const section = document.getElementById(id);
        if (!section) return;
        destination = section.getBoundingClientRect().top + window.scrollY;
      }

      event.preventDefault();
      window.history.pushState(null, "", hash);
      lenis.scrollTo(Math.min(destination, lenis.limit), {
        duration: animations.smoothScroll.durationSeconds,
        offset: 0,
      });
    };

    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, [lenis]);

  return null;
}

function SectionSnap() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const snap = new Snap(lenis, {
      type: "proximity",
      duration: animations.sectionSnap.durationSeconds,
      distanceThreshold: `${animations.sectionSnap.distanceThresholdPercent}%`,
      debounce: animations.sectionSnap.debounceMs,
    });
    const removeElements = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-snap]"))
      .map((element) => snap.addElement(element, {
        align: element.dataset.scrollSnapAlign ?? "start",
        ignoreSticky: true,
      }));

    return () => {
      removeElements.forEach((remove) => remove());
      snap.destroy();
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        anchors: false,
        autoRaf: true,
        duration: animations.smoothScroll.durationSeconds,
        smoothWheel: true,
        wheelMultiplier: animations.smoothScroll.wheelMultiplier,
        respectReducedMotion: true,
      }}
    >
      <SectionNavigation />
      <SectionSnap />
      {children}
    </ReactLenis>
  );
}
