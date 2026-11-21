import { LocaleLink } from "@/i18n/client";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { getPortfolio } from "@/data/portfolio";
import { statusTexts } from "./AppCard";
import AppLogo from "./AppLogo";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/translations/messages";

/** Heading panel for the /portfolio page, with quick links to each app card. */
export default function PortfolioHero({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const { apps, hero: portfolioHero } = getPortfolio(locale);
  const statusShort = statusTexts(m.portfolio).short;

  return (
    <section className="pt-6">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-lime-soft/50 via-sage/30 to-mist px-6 py-14 sm:px-10 md:py-20 lg:px-14 xl:px-16">
          <div className="dots pointer-events-none absolute top-0 left-0 h-full w-1/2 mask-[radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <Reveal margin="0px" blur={6}>
                <span className="tag bg-white/80">{portfolioHero.tag}</span>
              </Reveal>
              <Reveal margin="0px" delay={0.1} blur={6}>
                <h1 className="mt-6 max-w-[16ch] text-4xl leading-[1.05] font-normal sm:text-5xl xl:text-[3.6rem]">
                  {portfolioHero.headline[0]} <span className="font-bold">{portfolioHero.headline[1]}</span>
                </h1>
              </Reveal>
              <Reveal margin="0px" delay={0.2} blur={6}>
                <p className="lead">{portfolioHero.intro}</p>
              </Reveal>
              <Reveal margin="0px" delay={0.3} blur={6} className="mt-8">
                <LocaleLink href="/contact" className="btn btn-lime">
                  {m.common.getQuote} <ArrowUpRight className="size-4" />
                </LocaleLink>
              </Reveal>
            </div>

            {/* Quick links to each app card */}
            <Reveal margin="0px" delay={0.3}>
              <ul className="space-y-2.5">
                {apps.map((app) => (
                  <li key={app.slug}>
                    <a
                      href={`#${app.slug}`}
                      className="group flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 font-medium text-ink backdrop-blur transition hover:bg-white"
                    >
                      <AppLogo app={app} size={36} className="size-9 rounded-xl" decorative />
                      {app.name}
                      <span className="ml-auto text-xs font-medium text-ink-muted">{statusShort[app.status]}</span>
                      <ArrowUpRight className="size-4 text-ink-muted transition group-hover:text-pine-700" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
