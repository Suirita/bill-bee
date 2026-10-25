import type { CSSProperties, ReactNode } from "react";

export type MagicBentoItem = {
  id?: string;
  icon?: ReactNode;
  label?: string;
  title?: string;
  description?: string;
  visual?: ReactNode | string;
  colSpan?: number;
  rowSpan?: number;
  href?: string;
};

export type MagicBentoProps = {
  items?: MagicBentoItem[];
  columns?: number;
  rowHeight?: number;
  gap?: number;
  radius?: number;
  theme?: "dark" | "light";
  glowColor?: string;
  textAutoHide?: boolean;
  enableBorderGlow?: boolean;
  enableSpotlight?: boolean;
  spotlightRadius?: number;
  enableStars?: boolean;
  particleCount?: number;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  intro?: boolean;
  disableAnimations?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function MagicBento(props: MagicBentoProps): JSX.Element;
