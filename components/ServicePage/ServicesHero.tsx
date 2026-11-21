import { LocaleLink } from "@/i18n/client";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { getServices } from "@/data/services";
import { serviceIcons } from "@/data/serviceIcons";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

/** Heading panel for the /services overview page. */
export default function ServicesHero({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const t = m.servicesHero;

  return (
    <section className="pt-6">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-lime-soft/50 via-sage/30 to-mist px-6 py-14 sm:px-10 md:py-20 lg:px-14 xl:px-16">
          <div className="dots pointer-events-none absolute top-0 left-0 h-full w-1/2 mask-[radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <Reveal margin="0px" blur={6}>
                <span className="tag bg-white/80">{t.tag}</span>
              </Reveal>
              <Reveal margin="0px" delay={0.1} blur={6}>
                <h1 className="mt-6 max-w-[16ch] text-4xl leading-[1.05] font-normal sm:text-5xl xl:text-[3.6rem]">
                  {t.headlineLight}
                  <span className="font-bold">{t.headlineBold}</span>
                </h1>
              </Reveal>
              <Reveal margin="0px" delay={0.2} blur={6}>
                <p className="lead">{t.lead}</p>
              </Reveal>
              <Reveal margin="0px" delay={0.3} blur={6} className="mt-8">
                <LocaleLink href="/contact" className="btn btn-lime">
                  {m.common.getQuote} <ArrowUpRight className="size-4" />
                </LocaleLink>
              </Reveal>
            </div>

            {/* Quick links to each service */}
            <Reveal margin="0px" delay={0.3}>
              <ul className="space-y-2.5">
                {getServices(locale).map((service) => {
                  const Icon = serviceIcons[service.slug];
                  return (
                  <li key={service.slug}>
                    <LocaleLink
                      href={service.href}
                      className="group flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 font-medium text-ink backdrop-blur transition hover:bg-white"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-pine-800 text-lime">
                        <Icon className="size-4" />
                      </span>
                      {service.title}
                      <ArrowUpRight className="ml-auto size-4 text-ink-muted transition group-hover:text-pine-700" />
                    </LocaleLink>
                  </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
