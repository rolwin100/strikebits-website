import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Reveal from "../Reveal";
import { services } from "@/data/services";

/** Service cards. `showHeader={false}` hides the heading (used on the /services page, which has its own). */
export default function Services({ showHeader = true }: { showHeader?: boolean }) {
  const [featured, ...rest] = services;
  const FeaturedIcon = featured.icon;

  return (
    <section id="services" className="section scroll-mt-24 pt-16 md:pt-20">
      <div className="wrap">
        {/* Header */}
        {showHeader && (
          <Reveal blur={6} className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="tag">What we do</span>
              <h2 className="heading max-w-xl text-balance">Shopify services built around your growth</h2>
            </div>
            <p className="max-w-md text-ink-soft md:text-right">
              From a single custom app to a full Shopify Plus build, one team handles design,
              development and support.
            </p>
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
                  {featured.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/15">
                        <Check className="size-3 text-lime" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-auto">
                  <Link href="/contact" className="btn btn-lime">
                    Discuss your app <ArrowUpRight className="size-4" />
                  </Link>
                  <Link href={featured.href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-lime">
                    Learn more
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Other services */}
          {rest.map(({ icon: Icon, ...s }, i) => (
            <Reveal key={s.title} delay={0.15 + i * 0.1} y={32} blur={6} className="h-full">
              <article className="group relative flex h-full flex-col rounded-card border border-line bg-white p-8 transition duration-300 hover:border-pine-200">
                <span className="grid size-12 place-items-center rounded-2xl bg-pine-50 text-pine-700 transition duration-300 group-hover:bg-lime group-hover:text-pine-900">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl">
                  {/* Stretched link: makes the whole card clickable */}
                  <Link href={s.href} className="after:absolute after:inset-0">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-2 text-ink-soft">{s.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-pine-600" strokeWidth={2.5} />
                      {p}
                    </li>
                  ))}
                </ul>
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
  );
}
