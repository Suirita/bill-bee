import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  customClass?: string;
  children?: ReactNode;
  style?: CSSProperties;
};

export function Card(props: CardProps): JSX.Element;

export type CardSwapProps = {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  cardRadius?: number;
  delay?: number;
  speed?: number;
  bounce?: number;
  hoverSpread?: number;
  intro?: boolean;
  theme?: "dark" | "light";
  ariaLabel?: string;
  children?: ReactNode;
};

export default function CardSwap(props: CardSwapProps): JSX.Element;
