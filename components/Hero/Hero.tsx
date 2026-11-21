import { ArrowUpRight, Gauge, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { LocaleLink } from "@/i18n/client";
import Reveal from "../Reveal";
import HeroCarousel from "./HeroCarousel";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/translations/messages";

// ---- Edit hero content here (the text is in i18n/translations/messages/en.ts) ----
const slideImages = ["/banner-img-1.webp", "/banner-img-2.webp", "/banner-img-3.webp"];
const trustIcons = [ShoppingBag, Gauge];

// TODO: replace with your real number
const launched = "50+";
// ---------------------------------------------------------------------

export default function Hero({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const t = m.hero;
  const slides = slideImages.map((src, i) => ({ src, alt: t.slides[i] }));

  return (
    <section className="pt-6 pb-16 md:pb-24">
      <div className="wrap">
        <div className="relative grid overflow-hidden rounded-4xl bg-linear-to-br from-lime-soft/50 via-sage/30 to-mist lg:grid-cols-[1.15fr_1fr]">
          {/* Dot texture */}
          <div className="dots pointer-events-none absolute top-0 left-0 h-full w-1/2 mask-[radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />

          {/* Left: message */}
          <div className="relative flex flex-col justify-center px-6 py-14 sm:px-10 md:py-20 lg:px-14 xl:px-16">
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

            <Reveal margin="0px" delay={0.3} blur={6} className="mt-8 flex flex-wrap items-center gap-3">
              <LocaleLink href="/contact" className="btn btn-lime">
                {m.common.getQuote} <ArrowUpRight className="size-4" />
              </LocaleLink>
              <LocaleLink href="/portfolio" className="btn btn-line">{m.common.viewOurWork}</LocaleLink>
            </Reveal>

            {/* Trust row */}
            <Reveal margin="0px" delay={0.4} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-pine-900/10 pt-8">
              {t.trust.map(({ title, text }, i) => {
                const TrustIcon = trustIcons[i];
                return (
                <div key={i} className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-pine-800 text-lime">
                    <TrustIcon className="size-5" />
                  </span>
                  <p className="text-sm leading-snug text-ink-soft">
                    <span className="font-semibold text-ink">{title}</span>
                    <br />
                    {text}
                  </p>
                </div>
                );
              })}
            </Reveal>
          </div>

          {/* Right: photo carousel */}
          <Reveal margin="0px" delay={0.2} y={0} blur={10} className="relative min-h-90 sm:min-h-115 lg:min-h-160">
            <HeroCarousel slides={slides} />

            {/* Shopify Partners badge */}
            <div className="absolute bottom-10 left-3">
              <Image
                src="/shopify-partners.webp"
                alt={t.partnersAlt}
                width={600}
                height={253}
                className="h-20 w-auto brightness-0 invert"
              />
            </div>

            {/* Floating status pill */}
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-pill bg-white/90 px-4 py-2 text-sm font-medium text-ink backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-pine-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-pine-600" />
              </span>
              {t.available}
            </div>

            {/* Floating stat card */}
            <Reveal margin="0px"
              delay={0.6}
              y={20}
              className="absolute right-4 bottom-4 rounded-2xl bg-pine-900/90 p-4 text-white backdrop-blur sm:right-6 sm:bottom-6 sm:w-52 sm:p-5"
            >
              <p className="text-sm text-pine-200">{t.launchedLabel}</p>
              <p className="mt-1 font-display text-3xl font-semibold sm:text-4xl">{launched}</p>
              <div className="mt-4 hidden h-10 items-end gap-1.5 sm:flex">
                {[35, 50, 40, 65, 55, 80, 100].map((h, i) => (
                  <span
                    key={i}
                    className={`flex-1 rounded-sm ${i === 6 ? "bg-lime" : "bg-white/20"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
