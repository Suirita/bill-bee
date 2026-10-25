import type { CSSProperties, JSX } from "react";

export type TextCursorProps = {
  text?: string;
  mode?: "stamp" | "chain" | "ribbon";
  spacing?: number;
  maxPoints?: number;
  followMouseDirection?: boolean;
  randomFloat?: boolean;
  exitDuration?: number;
  removalInterval?: number;
  shrink?: number;
  fade?: number;
  smoothing?: number;
  popIn?: boolean;
  keepUpright?: boolean;
  hideCursor?: boolean;
  color?: string;
  fontSize?: number;
  fontWeight?: number | string;
  fontFamily?: string;
  className?: string;
  style?: CSSProperties;
  trackWindow?: boolean;
};

declare const TextCursor: (props: TextCursorProps) => JSX.Element;

export default TextCursor;
