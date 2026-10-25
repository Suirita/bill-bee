import type { CSSProperties, HTMLAttributes } from "react";

export type RotatingTextProps = HTMLAttributes<HTMLSpanElement> & {
  texts: string[];
  transition?: Record<string, unknown>;
  effect?: "slide" | "fade" | "blur" | "flip";
  direction?: "up" | "down" | "left" | "right";
  highlight?: boolean;
  highlightColor?: string;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  splitLevelClassName?: string;
  mainClassName?: string;
  style?: CSSProperties;
};

export default function RotatingText(props: RotatingTextProps): JSX.Element;
