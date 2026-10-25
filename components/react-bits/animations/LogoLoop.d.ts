import type { CSSProperties, ReactNode } from "react";

export type LogoLoopItem = {
  node?: ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
  hoverColor?: string;
  ariaLabel?: string;
};

export type LogoLoopProps = {
  logos: LogoLoopItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  layout?: "line" | "wave";
  bend?: number;
  magnify?: number;
  labels?: "none" | "hover" | "below";
  muted?: number;
  intro?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
};

export default function LogoLoop(props: LogoLoopProps): JSX.Element;
