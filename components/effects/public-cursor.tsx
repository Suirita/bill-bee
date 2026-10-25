"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import TextCursor from "@/components/react-bits/text-animations/TextCursor";
import { animations } from "@/lib/animation-config";

export default function PublicCursor() {
  const beeRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const bee = beeRef.current;
    const trail = document.querySelector<HTMLElement>(".text-cursor--public");
    if (!bee || !trail) return;

    let x = 0;
    let y = 0;
    let rotation = 0;
    let horizontalScale = 1;
    let hasPosition = false;
    let frame = 0;
    let trailColor = "";

    const draw = () => {
      frame = 0;
      bee.style.opacity = "1";
      bee.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${rotation}deg) scaleX(${horizontalScale})`;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const surface = document
        .elementFromPoint(event.clientX, event.clientY)
        ?.closest<HTMLElement>("[data-cursor-trail-color]");
      const nextTrailColor = surface?.dataset.cursorTrailColor ?? "var(--primary)";
      if (nextTrailColor !== trailColor) {
        trailColor = nextTrailColor;
        trail.style.setProperty("--cursor-trail-color", trailColor);
      }

      if (hasPosition) {
        const dx = event.clientX - x;
        const dy = event.clientY - y;

        if (Math.hypot(dx, dy) > animations.cursorTrail.directionThresholdPx) {
          const direction = (Math.atan2(dy, dx) * 180) / Math.PI;
          const pointsLeft = direction > 90 || direction < -90;

          rotation = pointsLeft
            ? direction > 0
              ? direction - 180
              : direction + 180
            : direction;
          horizontalScale = pointsLeft ? -1 : 1;
        }
      }

      x = event.clientX;
      y = event.clientY;
      hasPosition = true;

      if (!frame) frame = requestAnimationFrame(draw);
    };

    const hide = () => {
      bee.style.opacity = "0";
      hasPosition = false;
    };

    const onPointerOut = (event: PointerEvent) => {
      if (event.relatedTarget === null) hide();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerOut);
    window.addEventListener("blur", hide);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("blur", hide);
      trail.style.removeProperty("--cursor-trail-color");
    };
  }, []);

  return (
    <>
      <TextCursor
        text="—"
        mode="stamp"
        fontSize={animations.cursorTrail.fontSizePx}
        spacing={animations.cursorTrail.spacingPx}
        maxPoints={animations.cursorTrail.maxPoints}
        shrink={animations.cursorTrail.shrink}
        fade={animations.cursorTrail.fade}
        smoothing={animations.cursorTrail.smoothing}
        exitDuration={animations.cursorTrail.exitDurationSeconds}
        removalInterval={animations.cursorTrail.removalIntervalMs}
        followMouseDirection={true}
        keepUpright={true}
        randomFloat={false}
        popIn={true}
        color="var(--cursor-trail-color, var(--primary))"
        className="text-cursor--public"
        trackWindow={true}
      />
      <Image
        ref={beeRef}
        src="/pixel-bee-cursor-transparent.png"
        alt=""
        width={32}
        height={32}
        aria-hidden="true"
        draggable={false}
        priority
        unoptimized
        className="public-bee-cursor"
      />
    </>
  );
}
