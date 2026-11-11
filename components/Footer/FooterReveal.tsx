"use client";

import { useRef, type ReactNode } from "react";
import {
  MotionConfig,
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

/**
 * Parallax footer reveal: the footer slides up from behind the page
 * while it scrolls into view. Wrap <Footer /> with this.
 *
 * The reveal finishes at whichever comes first:
 *  - the footer is fully in view (short footers, e.g. desktop), or
 *  - the footer's top edge is 35% from the top of the screen (footers taller
 *    than the screen, e.g. phones), so the content is never stuck hidden.
 */
export default function FooterReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // 0 = footer top enters the screen, 1 = footer bottom reaches the screen bottom
  const { scrollYProgress: untilFullyInView } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  // 0 = footer top enters the screen, 1 = footer top is 35% from the top
  const { scrollYProgress: untilTopIsHigh } = useScroll({
    target: ref,
    offset: ["start end", "start 0.35"],
  });
  const progress = useTransform(() => Math.max(untilFullyInView.get(), untilTopIsHigh.get()));

  // Travel is based on screen height (not footer height) so tall footers don't move too far
  const y = useTransform(progress, [0, 1], ["-22vh", "0vh"]);
  const scale = useTransform(progress, [0, 1], [0.94, 1]);
  const opacity = useTransform(progress, [0, 1], [0.4, 1]);
  // Starts blurred, fully sharp at 80% of the reveal
  const blurAmount = useTransform(progress, [0, 0.8], [12, 0]);
  const filter = useMotionTemplate`blur(${blurAmount}px)`;

  return (
    <MotionConfig reducedMotion="user">
      <div ref={ref} className="overflow-hidden bg-pine-950">
        <motion.div
          style={reduceMotion ? undefined : { y, scale, opacity, filter }}
          className="origin-top"
        >
          {children}
        </motion.div>
      </div>
    </MotionConfig>
  );
}
