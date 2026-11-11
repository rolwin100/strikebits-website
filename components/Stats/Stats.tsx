import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import CountUp from "./CountUp";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section id="about" className="relative mt-16 overflow-hidden bg-mist py-20 md:mt-20 md:py-24">
      <div className="dots pointer-events-none absolute inset-0 opacity-50 mask-[radial-gradient(ellipse_at_top_left,black,transparent_60%)]" />

      <div className="wrap relative">
        {/* Intro */}
        <Reveal blur={6} className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <p className="max-w-3xl text-xl leading-relaxed text-ink-muted md:text-2xl md:leading-relaxed">
            We&apos;re a team of{" "}
            <strong className="font-medium text-ink">Shopify developers, designers and e-commerce specialists</strong>{" "}
            helping brands sell more online. <strong className="font-medium text-ink">Our mission</strong> is to turn
            ambitious ideas into fast, reliable Shopify stores and apps that grow with your business.
          </p>
          <Link href="/contact" className="btn btn-lime shrink-0">
            Book a free consultation <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        {/* Numbers */}
        <dl className="mt-14 grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={0.1 + i * 0.1}
              className={`flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:gap-4 lg:py-10 ${
                i % 2 === 1 ? "border-l border-line pl-6 sm:pl-8" : "pr-6"
              } ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l lg:pl-8" : ""
              }`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-5xl leading-none font-semibold tracking-tight text-ink md:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
              <dd aria-hidden="true" className="max-w-[9rem] text-sm leading-snug text-ink-soft md:text-base">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
