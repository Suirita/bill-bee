import type { CSSProperties } from "react";

import animationConfig from "@/config/animations.json";

export const animations = animationConfig;

export const textRevealEase = animationConfig.textReveal.ease as [number, number, number, number];

type AnimationCssVariables = CSSProperties & Record<`--motion-${string}`, string | number>;

export const animationCssVariables: AnimationCssVariables = {
  "--motion-fast": `${animationConfig.transitions.fastMs}ms`,
  "--motion-standard": `${animationConfig.transitions.standardMs}ms`,
  "--motion-emphasized": `${animationConfig.transitions.emphasizedMs}ms`,
  "--motion-glass": `${animationConfig.transitions.glassMs}ms`,
  "--motion-navbar": `${animationConfig.transitions.navbarMs}ms`,
  "--motion-ease-out": animationConfig.transitions.easeOutCss,
  "--motion-select-pop": `${animationConfig.select.popDurationMs}ms`,
  "--motion-select-pop-out": `${Math.round((animationConfig.select.popDurationMs * 2) / 3)}ms`,
  "--motion-select-glide": `${animationConfig.select.glideDurationMs}ms`,
  "--motion-select-color": `${animationConfig.select.colorDurationMs}ms`,
  "--motion-select-interaction": `${animationConfig.select.interactionDurationMs}ms`,
  "--motion-select-chevron": `${animationConfig.select.chevronDurationMs}ms`,
  "--motion-select-feedback": `${animationConfig.select.feedbackDurationMs}ms`,
};
