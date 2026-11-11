import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, UserRound } from "lucide-react";
import Reveal from "../Reveal";
import CountUp from "../Stats/CountUp";
import { LinkedInIcon } from "../Footer/SocialIcons";
import { story, team, values } from "@/data/about";
import { site } from "@/data/site";
import { stats } from "@/data/stats";

const heroPhoto = { src: "/about-us.webp", alt: "A team working together around a table with laptops and notebooks" };

/** Turns "plain **highlighted** plain" into text with the highlighted parts in dark ink. */
function Highlighted({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-medium text-ink">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export default function About() {
  return (
    <>
      {/* Page heading */}
      <section className="pt-6">
        <div className="wrap">
          <div className="relative grid overflow-hidden rounded-4xl bg-linear-to-br from-lime-soft/50 via-sage/30 to-mist lg:grid-cols-[1.15fr_1fr]">
            <div className="dots pointer-events-none absolute top-0 left-0 h-full w-1/2 mask-[radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />

            <div className="relative flex flex-col justify-center px-6 py-14 sm:px-10 md:py-20 lg:px-14 xl:px-16">
              <Reveal margin="0px" blur={6}>
                <span className="tag bg-white/80">About us</span>
              </Reveal>
              <Reveal margin="0px" delay={0.1} blur={6}>
                <h1 className="mt-6 max-w-[16ch] text-4xl leading-[1.05] font-normal sm:text-5xl xl:text-[3.6rem]">
                  The Shopify team behind <span className="font-bold">growing brands.</span>
                </h1>
              </Reveal>
              <Reveal margin="0px" delay={0.2} blur={6}>
                <p className="lead">
                  We design, build and support custom Shopify apps, stores and themes for e&#8209;commerce
                  businesses.
                </p>
              </Reveal>
              <Reveal margin="0px" delay={0.3} blur={6} className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn btn-lime">
                  Get in touch <ArrowUpRight className="size-4" />
                </Link>
                <Link href="/portfolio" className="btn btn-line">
                  View our work
                </Link>
              </Reveal>
            </div>

            <Reveal margin="0px" delay={0.2} y={0} blur={10} className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[560px]">
              <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                fill
                preload
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[50%_30%]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-pine-950/70 to-transparent" />

              <div className="absolute bottom-5 left-5 inline-flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur">
                <span className="grid size-9 place-items-center rounded-full bg-pine-800 text-lime">
                  <MapPin className="size-4" />
                </span>
                <p className="text-sm leading-snug text-ink-soft">
                  Based in
                  <br />
                  <span className="font-semibold text-ink">{site.address}</span>
                </p>
              </div>

              <Image
                src="/shopify-partners.webp"
                alt="Shopify Partners"
                width={600}
                height={253}
                className="absolute right-3 bottom-3 hidden h-14 w-auto brightness-0 drop-shadow-[0_1px_2px_rgb(0_0_0/0.4)] invert sm:block"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story + numbers */}
      <section className="section">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <Reveal blur={6}>
              <span className="tag">Our story</span>
              <h2 className="heading text-balance">Specialists in Shopify, by choice</h2>
            </Reveal>

            <Reveal delay={0.1} blur={6}>
              <p className="text-xl leading-relaxed text-ink-muted md:text-2xl md:leading-relaxed">
                <Highlighted text={story.lead} />
              </p>
              <div className="mt-8 grid gap-6 text-ink-soft sm:grid-cols-2">
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <dl className="mt-16 grid grid-cols-2 border-t border-line lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={0.1 + i * 0.1}
                className={`flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:gap-4 lg:py-10 ${
                  i % 2 === 1 ? "border-l border-line pl-6 sm:pl-8" : "pr-6"
                } ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-8" : ""}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-5xl leading-none font-semibold tracking-tight text-ink md:text-6xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
                <dd aria-hidden="true" className="max-w-[9rem] text-sm leading-snug text-ink-soft md:text-base">
                  {s.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Values */}
      <section className="section section-mist relative overflow-hidden">
        <div className="dots pointer-events-none absolute top-0 left-0 h-80 w-1/2 mask-[radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div className="wrap relative">
          <Reveal blur={6} className="mx-auto max-w-2xl text-center">
            <span className="tag">What we value</span>
            <h2 className="heading text-balance">How we work with every client</h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {values.map(({ icon: Icon, title, text, color }, i) => (
              <Reveal key={title} delay={0.1 + i * 0.1} y={32} blur={6} className="h-full">
                <article className={`card-pastel ${color} h-full xl:p-8`}>
                  <div className="chip-icon">
                    <Icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 text-xl">{title}</h3>
                  <p className="mt-2 text-ink-soft">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="wrap">
          <Reveal blur={6} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="tag">The team</span>
              <h2 className="heading max-w-xl text-balance">The people who build your project</h2>
            </div>
            <p className="max-w-md text-ink-soft md:text-right">
              Developers, designers and e&#8209;commerce specialists who work on Shopify every day.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1} y={32} blur={6}>
                <article>
                  <div className={`${member.color} relative grid aspect-square place-items-center overflow-hidden rounded-card`}>
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 22vw, 45vw"
                        className="object-cover"
                      />
                    ) : (
                      <UserRound className="size-14 text-pine-900/20 sm:size-20" strokeWidth={1.2} />
                    )}
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg">{member.name}</h3>
                      <p className="text-sm text-ink-soft">{member.role}</p>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        aria-label={`${member.name} on LinkedIn`}
                        className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition hover:border-pine-400 hover:text-pine-700"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
