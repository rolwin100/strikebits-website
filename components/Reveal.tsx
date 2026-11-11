"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Fades and slides its children up once they scroll into view.
 *
 * By default it waits until the element is 15% above the bottom edge of the
 * screen, so the animation plays where the visitor can actually see it.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  blur = 0,
  margin = "0px 0px -15% 0px",
  className,
}: {
  children: ReactNode;
  delay?: number;
  /** Distance to rise, in px */
  y?: number;
  /** Starting blur, in px (0 = no blur) */
  blur?: number;
  /**
   * Shrinks the trigger area (CSS margin syntax). Use "0px" for content that is
   * on screen at page load or at the very bottom of the page.
   */
  margin?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y, ...(blur ? { filter: `blur(${blur}px)` } : {}) }}
      whileInView={{
        opacity: 1,
        y: 0,
        // Drop the filter once the blur has cleared: a leftover blur(0px) keeps the
        // whole block on a filter layer and makes later animations inside it stutter.
        ...(blur ? { filter: "blur(0px)", transitionEnd: { filter: "none" } } : {}),
      }}
      viewport={{ once: true, margin }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
