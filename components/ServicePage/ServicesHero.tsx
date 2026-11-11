import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { services } from "@/data/services";

/** Heading panel for the /services overview page. */
export default function ServicesHero() {
  return (
    <section className="pt-6">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-lime-soft/50 via-sage/30 to-mist px-6 py-14 sm:px-10 md:py-20 lg:px-14 xl:px-16">
          <div className="dots pointer-events-none absolute top-0 left-0 h-full w-1/2 mask-[radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <Reveal margin="0px" blur={6}>
                <span className="tag bg-white/80">Services</span>
              </Reveal>
              <Reveal margin="0px" delay={0.1} blur={6}>
                <h1 className="mt-6 max-w-[16ch] text-4xl leading-[1.05] font-normal sm:text-5xl xl:text-[3.6rem]">
                  Shopify services, <span className="font-bold">end to end.</span>
                </h1>
              </Reveal>
              <Reveal margin="0px" delay={0.2} blur={6}>
                <p className="lead">
                  From a single custom app to a full Shopify Plus build, one team handles design, development and
                  support.
                </p>
              </Reveal>
              <Reveal margin="0px" delay={0.3} blur={6} className="mt-8">
                <Link href="/contact" className="btn btn-lime">
                  Get a quote <ArrowUpRight className="size-4" />
                </Link>
              </Reveal>
            </div>

            {/* Quick links to each service */}
            <Reveal margin="0px" delay={0.3}>
              <ul className="space-y-2.5">
                {services.map(({ icon: Icon, ...service }) => (
                  <li key={service.slug}>
                    <Link
                      href={service.href}
                      className="group flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 font-medium text-ink backdrop-blur transition hover:bg-white"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-pine-800 text-lime">
                        <Icon className="size-4" />
                      </span>
                      {service.title}
                      <ArrowUpRight className="ml-auto size-4 text-ink-muted transition group-hover:text-pine-700" />
                    </Link>
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
