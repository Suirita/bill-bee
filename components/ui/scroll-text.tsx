"use client";

import { motion, type Variants } from "motion/react";

import { animations, textRevealEase } from "@/lib/animation-config";

type ScrollTextProps = {
  as?: "h1" | "h2" | "h3" | "p";
  text: string;
  classname?: string;
  direction?: "up" | "down" | "left" | "right";
  letterAnime?: boolean;
  lineAnime?: boolean;
  variants?: Variants;
};

const animatedTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
};

const directionOffset = {
  up: { y: animations.textReveal.offsetPx },
  down: { y: -animations.textReveal.offsetPx },
  left: { x: animations.textReveal.offsetPx },
  right: { x: -animations.textReveal.offsetPx },
};

export default function TextAnimation({
  as = "h2",
  text,
  classname = "",
  direction = "up",
  letterAnime = false,
  lineAnime = false,
  variants,
}: ScrollTextProps) {
  const MotionTag = animatedTags[as];
  const segments = letterAnime
    ? Array.from(text)
    : lineAnime
      ? text.split(/(?<=[.!?])\s+/)
      : text.split(/\s+/);

  const itemVariants: Variants =
    variants ??
    ({
      hidden: {
        ...directionOffset[direction],
        filter: `blur(${animations.textReveal.blurPx}px)`,
        opacity: 0,
      },
      visible: {
        x: 0,
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
        transition: {
          duration: animations.textReveal.durationSeconds,
          ease: textRevealEase,
        },
      },
    } satisfies Variants);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: letterAnime
          ? animations.textReveal.letterStaggerSeconds
          : lineAnime
            ? animations.textReveal.lineStaggerSeconds
            : animations.textReveal.wordStaggerSeconds,
      },
    },
  };

  return (
    <MotionTag
      aria-label={text}
      className={classname}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: animations.textReveal.viewportAmount, once: false }}
      variants={containerVariants}
    >
      {segments.map((segment, index) => (
        <motion.span
          aria-hidden="true"
          className={lineAnime ? "block" : "inline-block"}
          key={`${segment}-${index}`}
          variants={itemVariants}
        >
          {segment === " " ? "\u00a0" : segment}
          {!letterAnime && !lineAnime && index < segments.length - 1
            ? "\u00a0"
            : null}
        </motion.span>
      ))}
    </MotionTag>
  );
}
