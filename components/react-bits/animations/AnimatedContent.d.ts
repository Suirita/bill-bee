import type { CSSProperties, HTMLAttributes, JSX, ReactNode } from "react";

export type AnimatedContentProps = Omit<HTMLAttributes<HTMLDivElement>, "children" | "style"> & {
  children: ReactNode;
  container?: Element | string | null;
  distance?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  blur?: number;
  rotate?: number;
  tilt?: number;
  wipe?: "none" | "up" | "down" | "left" | "right" | "center";
  threshold?: number;
  delay?: number;
  stagger?: number;
  staggerFrom?: "start" | "center" | "end" | "edges" | "random" | number;
  trigger?: "scroll" | "mount";
  once?: boolean;
  scrub?: boolean | number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onStart?: () => void;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
  className?: string;
  style?: CSSProperties;
};

export default function AnimatedContent(props: AnimatedContentProps): JSX.Element;
