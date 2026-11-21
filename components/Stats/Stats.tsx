import { LocaleLink } from "@/i18n/client";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import CountUp from "./CountUp";
import { stats } from "@/data/stats";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export default function Stats({ locale }: { locale: Locale }) {
  const t = getMessages(locale).stats;

  return (
    <section id="about" className="relative mt-16 overflow-hidden bg-mist py-20 md:mt-20 md:py-24">
      <div className="dots pointer-events-none absolute inset-0 opacity-50 mask-[radial-gradient(ellipse_at_top_left,black,transparent_60%)]" />

      <div className="wrap relative">
        {/* Intro */}
        <Reveal blur={6} className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <p className="max-w-3xl text-xl leading-relaxed text-ink-muted md:text-2xl md:leading-relaxed">
            {t.introBefore}
            <strong className="font-medium text-ink">{t.introStrong1}</strong>
            {t.introMiddle}
            <strong className="font-medium text-ink">{t.introStrong2}</strong>
            {t.introAfter}
          </p>
          <LocaleLink href="/contact" className="btn btn-lime shrink-0">
            {t.consultation} <ArrowUpRight className="size-4" />
          </LocaleLink>
        </Reveal>

        {/* Numbers */}
        <dl className="mt-14 grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={i}
              delay={0.1 + i * 0.1}
              className={`flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:gap-4 lg:py-10 ${
                i % 2 === 1 ? "border-l border-line pl-6 sm:pl-8" : "pr-6"
              } ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l lg:pl-8" : ""
              }`}
            >
              <dt className="sr-only">{t.labels[i]}</dt>
              <dd className="font-display text-5xl leading-none font-semibold tracking-tight text-ink md:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
              <dd aria-hidden="true" className="max-w-[9rem] text-sm leading-snug text-ink-soft md:text-base">{t.labels[i]}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
