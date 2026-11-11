import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Gauge, Handshake, Route } from "lucide-react";
import Reveal from "../Reveal";

// Edit reasons here
const reasons = [
  {
    icon: BadgeCheck,
    title: "Official Shopify Partner",
    text: "We work in the Shopify ecosystem every day and follow Shopify's best practices for apps, themes and Plus stores.",
  },
  {
    icon: Route,
    title: "End-to-end delivery",
    text: "One team from first idea and design through development, App Store submission and launch.",
  },
  {
    icon: Gauge,
    title: "Performance first",
    text: "Fast-loading, conversion-focused builds that keep shoppers on your store and moving to checkout.",
  },
  {
    icon: Handshake,
    title: "A long-term partner",
    text: "Maintenance, updates and clear communication after launch, so your store keeps improving.",
  },
];

export default function WhyStrikeBits() {
  return (
    <section id="why" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        {/* Left: heading */}
        <Reveal blur={6} className="lg:sticky lg:top-32 lg:self-start">
          <span className="tag">Why StrikeBits</span>
          <h2 className="heading text-balance">A Shopify team that builds it right, and sticks around</h2>
          <p className="lead">
            We focus only on Shopify, so you get specialists who know the platform inside out, not
            generalists learning on your project.
          </p>
          <Link href="/contact" className="btn btn-pine mt-8">
            Schedule a call <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        {/* Right: reasons */}
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={0.1 + i * 0.1} y={32} blur={6} className="h-full">
              <article className="h-full rounded-card bg-mist p-8">
                <span className="grid size-12 place-items-center rounded-full bg-lime text-pine-900">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl">{title}</h3>
                <p className="mt-2 text-ink-soft">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
