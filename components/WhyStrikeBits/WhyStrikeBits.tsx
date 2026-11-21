import { LocaleLink } from "@/i18n/client";
import { ArrowUpRight, BadgeCheck, Gauge, Handshake, Route } from "lucide-react";
import Reveal from "../Reveal";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/translations/messages";

// Icons for each reason; the text is in i18n/translations/messages/en.ts (why.reasons), in the same order
const reasonIcons = [BadgeCheck, Route, Gauge, Handshake];

export default function WhyStrikeBits({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const t = m.why;

  return (
    <section id="why" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        {/* Left: heading */}
        <Reveal blur={6} className="lg:sticky lg:top-32 lg:self-start">
          <span className="tag">{t.tag}</span>
          <h2 className="heading text-balance">{t.heading}</h2>
          <p className="lead">{t.lead}</p>
          <LocaleLink href="/contact" className="btn btn-pine mt-8">
            {m.common.scheduleCall} <ArrowUpRight className="size-4" />
          </LocaleLink>
        </Reveal>

        {/* Right: reasons */}
        <div className="grid gap-5 sm:grid-cols-2">
          {t.reasons.map(({ title, text }, i) => {
            const Icon = reasonIcons[i];
            return (
            <Reveal key={i} delay={0.1 + i * 0.1} y={32} blur={6} className="h-full">
              <article className="h-full rounded-card bg-mist p-8">
                <span className="grid size-12 place-items-center rounded-full bg-lime text-pine-900">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl">{title}</h3>
                <p className="mt-2 text-ink-soft">{text}</p>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
