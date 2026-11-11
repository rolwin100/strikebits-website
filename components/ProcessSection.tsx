import { ArrowUpRight, Check, Layers, PenLine, Rocket, Search, type LucideIcon } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

type Step = {
  step: string;
  color: string; // pastel background: bg-sage, bg-butter, bg-peach, bg-sky
  icon: LucideIcon;
  title: string;
  text: string;
  points: string[];
};

// Edit the steps here
const steps: Step[] = [
  {
    step: "01", color: "bg-sage", icon: Search, title: "Discovery & planning",
    text: "We learn your business, customers and goals, then plan the right Shopify solution.",
    points: ["Requirements and audience analysis", "Clear scope, timeline and quote"],
  },
  {
    step: "02", color: "bg-butter", icon: PenLine, title: "Design & development",
    text: "We design and build your custom Shopify app, store or theme to your exact specification.",
    points: ["Conversion-focused design", "Custom themes and apps"],
  },
  {
    step: "03", color: "bg-peach", icon: Layers, title: "Testing & integration",
    text: "We test every flow, connect your third-party services and tune performance before launch.",
    points: ["Third-party and ERP integrations", "Speed and performance optimization"],
  },
  {
    step: "04", color: "bg-sky", icon: Rocket, title: "Launch & support",
    text: "We deploy to production, train your team and keep everything running smoothly.",
    points: ["Smooth go-live and team training", "Ongoing maintenance and updates"],
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section section-mist relative overflow-hidden">
      {/* Dot texture in the top corner */}
      <div className="dots pointer-events-none absolute top-0 left-0 h-80 w-1/2 mask-[radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />

      <div className="wrap relative">
        <Reveal blur={6} className="mx-auto max-w-2xl text-center">
          <span className="tag">How we work</span>
          <h2 className="heading text-balance">From first idea to a store that sells</h2>
          <p className="lead mx-auto">
            A clear four-step process for every Shopify app, store and theme we build.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ icon: StepIcon, ...s }, i) => (
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
                <p className="mt-6 text-sm font-semibold text-pine-600">Step {s.step}</p>
                <h3 className="mt-1 text-2xl xl:text-xl">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.text}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-ink-soft">
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
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-lime">
            Get a quote <ArrowUpRight className="size-4" />
          </Link>
          <Link href="/portfolio" className="btn btn-line">View our work</Link>
        </Reveal>
      </div>
    </section>
  );
}
