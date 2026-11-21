import { LocaleLink } from "@/i18n/client";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Reveal from "../Reveal";
import { getServices } from "@/data/services";
import { serviceIcons } from "@/data/serviceIcons";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

/** Service cards. `showHeader={false}` hides the heading (used on the /services page, which has its own). */
export default function Services({ locale, showHeader = true }: { locale: Locale; showHeader?: boolean }) {
  const m = getMessages(locale);
  const [featured, ...rest] = getServices(locale);
  const FeaturedIcon = serviceIcons[featured.slug];

  return (
    <section id="services" className="section scroll-mt-24 pt-16 md:pt-20">
      <div className="wrap">
        {/* Header */}
        {showHeader && (
          <Reveal blur={6} className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="tag">{m.servicesSection.tag}</span>
              <h2 className="heading max-w-xl text-balance">{m.servicesSection.heading}</h2>
            </div>
            <p className="max-w-md text-ink-soft md:text-right">{m.servicesSection.text}</p>
          </Reveal>
        )}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured service */}
          <Reveal delay={0.1} y={32} blur={6} className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <article className="relative flex h-full flex-col overflow-hidden rounded-card bg-pine-900 p-8 text-pine-100 md:p-10">
              <div className="dots pointer-events-none absolute inset-0 opacity-30 mask-[linear-gradient(to_bottom,black,transparent_60%)]" />
              <div className="relative flex h-full flex-col">
                <span className="grid size-14 place-items-center rounded-2xl bg-lime text-pine-900">
                  <FeaturedIcon className="size-7" />
                </span>
                <h3 className="mt-8 text-3xl text-white">{featured.title}</h3>
                <p className="mt-3 leading-relaxed text-pine-200">{featured.description}</p>
                <ul className="mt-8 space-y-3">
                  {featured.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/15">
                        <Check className="size-3 text-lime" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-auto">
                  <LocaleLink href="/contact" className="btn btn-lime">
                    {m.servicesSection.discussApp} <ArrowUpRight className="size-4" />
                  </LocaleLink>
                  <LocaleLink href={featured.href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-lime">
                    {m.common.learnMore}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </LocaleLink>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Other services */}
          {rest.map((s, i) => {
            const Icon = serviceIcons[s.slug];
            return (
            <Reveal key={s.slug} delay={0.15 + i * 0.1} y={32} blur={6} className="h-full">
              <article className="group relative flex h-full flex-col rounded-card border border-line bg-white p-8 transition duration-300 hover:border-pine-200">
                <span className="grid size-12 place-items-center rounded-2xl bg-pine-50 text-pine-700 transition duration-300 group-hover:bg-lime group-hover:text-pine-900">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl">
                  {/* Stretched link: makes the whole card clickable */}
                  <LocaleLink href={s.href} className="after:absolute after:inset-0">
                    {s.title}
                  </LocaleLink>
                </h3>
                <p className="mt-2 text-ink-soft">{s.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-pine-600" strokeWidth={2.5} />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-pine-700">
                  {m.common.learnMore}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
