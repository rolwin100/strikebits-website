import { ArrowUpRight, Check, Layers, PenLine, Rocket, Search, type LucideIcon } from "lucide-react";
import { LocaleLink } from "@/i18n/client";
import Reveal from "./Reveal";
import type { Locale } from "@/i18n/config";
import { format, getMessages } from "@/i18n/messages";

// Edit the look of each step here; its text is in i18n/messages/en.ts (process.steps), in the same order
const steps: { step: string; color: string; icon: LucideIcon }[] = [
  { step: "01", color: "bg-sage", icon: Search },
  { step: "02", color: "bg-butter", icon: PenLine },
  { step: "03", color: "bg-peach", icon: Layers },
  { step: "04", color: "bg-sky", icon: Rocket },
];

export default function ProcessSection({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const t = m.process;

  return (
    <section id="process" className="section section-mist relative overflow-hidden">
      {/* Dot texture in the top corner */}
      <div className="dots pointer-events-none absolute top-0 left-0 h-80 w-1/2 mask-[radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />

      <div className="wrap relative">
        <Reveal blur={6} className="mx-auto max-w-2xl text-center">
          <span className="tag">{t.tag}</span>
          <h2 className="heading text-balance">{t.heading}</h2>
          <p className="lead mx-auto">{t.lead}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ icon: StepIcon, ...s }, i) => {
            const text = t.steps[i];
            return (
            <Reveal key={s.step} delay={0.1 + i * 0.12} y={32} blur={6} className="h-full">
            <article
              className={`card-pastel ${s.color} h-full xl:p-7`}
            >
              {/* Large faded step number */}
              <span className="pointer-events-none absolute -top-6 -right-2 font-display text-[8rem] leading-none xl:text-[6rem] font-bold text-pine-900/6">
                {s.step}
              </span>

              <div className="relative">
                <div className="chip-icon">
                  <StepIcon className="size-6" strokeWidth={1.8} />
                </div>
                <p className="mt-6 text-sm font-semibold text-pine-600">{format(t.step, { n: s.step })}</p>
                <h3 className="mt-1 text-2xl xl:text-xl">{text.title}</h3>
                <p className="mt-2 text-ink-soft">{text.text}</p>
                <ul className="mt-6 space-y-3">
                  {text.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 text-ink-soft">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ink/20">
                        <Check className="size-3 text-white" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-3">
          <LocaleLink href="/contact" className="btn btn-lime">
            {m.common.getQuote} <ArrowUpRight className="size-4" />
          </LocaleLink>
          <LocaleLink href="/portfolio" className="btn btn-line">{m.common.viewOurWork}</LocaleLink>
        </Reveal>
      </div>
    </section>
  );
}
