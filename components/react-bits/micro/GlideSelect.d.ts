import type { JSX, ReactNode } from "react";

export type GlideSelectOption = {
  value: string;
  label: ReactNode;
  tag?: ReactNode;
};

export type GlideSelectProps = {
  options?: Array<string | GlideSelectOption>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, option: GlideSelectOption) => void;
  placeholder?: ReactNode;
  showTags?: boolean;
  accentColor?: string;
  surfaceColor?: string;
  highlightColor?: string;
  textColor?: string;
  size?: "sm" | "md" | "lg";
  radius?: number;
  menuWidth?: number;
  placement?: "top" | "bottom";
  align?: "left" | "right";
  popDuration?: number;
  glideDuration?: number;
  rememberPosition?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
};

export default function GlideSelect(props: GlideSelectProps): JSX.Element;
