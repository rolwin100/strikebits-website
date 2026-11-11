import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import Reveal from "../Reveal";
import ProcessSection from "../ProcessSection";
import FaqAccordion from "../Faq/FaqAccordion";
import ServiceVisual from "./ServiceVisual";
import { services, type Service } from "@/data/services";

const pastel = ["bg-sage", "bg-butter", "bg-peach", "bg-sky"];

/** Full page for one service. Content comes from data/services.ts. */
export default function ServicePage({ service }: { service: Service }) {
  const { title, page } = service;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Page heading */}
      <section className="pt-6">
        <div className="wrap">
          <div className="relative grid overflow-hidden rounded-4xl bg-linear-to-br from-lime-soft/50 via-sage/30 to-mist lg:grid-cols-[1.15fr_1fr]">
            <div className="dots pointer-events-none absolute top-0 left-0 h-full w-1/2 mask-[radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />

            <div className="relative flex flex-col justify-center px-6 py-14 sm:px-10 md:py-20 lg:px-14 xl:px-16">
              <Reveal margin="0px" blur={6}>
                <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft">
                  <Link href="/" className="transition hover:text-pine-700">
                    Home
                  </Link>
                  <ChevronRight className="size-3.5 text-ink-muted" />
                  <Link href="/services" className="transition hover:text-pine-700">
                    Services
                  </Link>
                  <ChevronRight className="size-3.5 text-ink-muted" />
                  <span aria-current="page" className="font-medium text-ink">
                    {title}
                  </span>
                </nav>
              </Reveal>
              <Reveal margin="0px" delay={0.1} blur={6}>
                <h1 className="mt-6 max-w-[16ch] text-4xl leading-[1.05] font-normal sm:text-5xl xl:text-[3.6rem]">
                  {page.headline[0]} <span className="font-bold">{page.headline[1]}</span>
                </h1>
              </Reveal>
              <Reveal margin="0px" delay={0.2} blur={6}>
                <p className="lead">{page.intro}</p>
              </Reveal>
              <Reveal margin="0px" delay={0.3} blur={6} className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn btn-lime">
                  Get a quote <ArrowUpRight className="size-4" />
                </Link>
                <Link href="/portfolio" className="btn btn-line">
                  View our work
                </Link>
              </Reveal>
            </div>

            <Reveal margin="0px" delay={0.3} y={32} blur={6} className="relative flex items-center px-6 pb-16 sm:px-10 lg:py-16 lg:pr-14 lg:pl-0 xl:pr-16">
              <ServiceVisual slug={service.slug} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section">
        <div className="wrap">
          <Reveal blur={6} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="tag">What&apos;s included</span>
              <h2 className="heading max-w-xl text-balance">What we do in {title.replace(/^Ongoing/, "ongoing")}</h2>
            </div>
            <p className="max-w-md text-ink-soft md:text-right">{service.description}</p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.features.map(({ icon: FeatureIcon, title: featureTitle, text }, i) => (
              <Reveal key={featureTitle} delay={0.05 + (i % 3) * 0.1} y={32} blur={6} className="h-full">
                <article className="h-full rounded-card border border-line bg-white p-8">
                  <span className="grid size-12 place-items-center rounded-2xl bg-pine-50 text-pine-700">
                    <FeatureIcon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl">{featureTitle}</h3>
                  <p className="mt-2 text-ink-soft">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work (shared with the home page) */}
      <ProcessSection />

      {/* Good fit */}
      <section className="section">
        <div className="wrap">
          <Reveal blur={6} className="mx-auto max-w-2xl text-center">
            <span className="tag">Is this right for you?</span>
            <h2 className="heading text-balance">This is a good fit if&hellip;</h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {page.fits.map((fit, i) => (
              <Reveal key={fit.title} delay={0.1 + i * 0.1} y={32} blur={6} className="h-full">
                <article className={`card-pastel ${pastel[i % pastel.length]} h-full`}>
                  <span className="pointer-events-none absolute -top-5 -right-1 font-display text-[7rem] leading-none font-bold text-pine-900/6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative max-w-[16ch] text-2xl">{fit.title}</h3>
                  <p className="relative mt-3 text-ink-soft">{fit.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="section pt-0 md:pt-0">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal blur={6} className="lg:sticky lg:top-32 lg:self-start">
            <span className="tag">FAQ</span>
            <h2 className="heading text-balance">Common questions</h2>
            <p className="lead">Have a question that isn&apos;t answered here? Ask us directly.</p>
            <Link href="/contact" className="btn btn-pine mt-8">
              Ask us a question <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.15} y={32} blur={6}>
            <FaqAccordion faqs={page.faqs} />
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="section bg-mist">
        <div className="wrap">
          <Reveal blur={6} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="tag">More services</span>
              <h2 className="heading max-w-xl text-balance">Explore our other services</h2>
            </div>
            <Link href="/services" className="btn btn-line self-start md:self-auto">
              All services <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {others.map(({ icon: OtherIcon, ...other }, i) => (
              <Reveal key={other.slug} delay={0.1 + i * 0.1} y={32} blur={6} className="h-full">
                <article className="group relative flex h-full flex-col rounded-card bg-white p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-pine-50 text-pine-700 transition duration-300 group-hover:bg-lime group-hover:text-pine-900">
                    <OtherIcon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-lg transition group-hover:text-pine-600">
                    <Link href={other.href} className="after:absolute after:inset-0">
                      {other.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{other.short}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-pine-700">
                    Learn more
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
