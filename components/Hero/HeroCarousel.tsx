"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type Slide = { src: string; alt: string };

const INTERVAL_MS = 5000;

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // Auto-advance (off while hovered, or for reduced-motion users)
  useEffect(() => {
    if (paused || reduceMotion || slides.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, slides.length]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={slides[index].src}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.9 }, scale: { duration: 6, ease: "linear" } }}
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            preload={index === 0}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Soft gradient so the dots stay readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-pine-950/70 to-transparent" />

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-6 flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-pill transition-all duration-500 ${
                i === index ? "w-8 bg-lime" : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
