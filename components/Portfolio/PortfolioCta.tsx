import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { portfolioCta } from "@/data/portfolio";

/** Dark pine call-to-action band at the bottom of /portfolio. */
export default function PortfolioCta() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-card bg-pine-900 px-6 py-12 text-pine-100 sm:px-10 md:flex md:items-center md:justify-between md:gap-10 md:py-14 lg:px-14">
            <div>
              <h2 className="text-3xl leading-tight text-white md:text-4xl">
                {portfolioCta.headline[0]} <span className="font-bold">{portfolioCta.headline[1]}</span>
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed">{portfolioCta.text}</p>
            </div>
            <Link href={portfolioCta.button.href} className="btn btn-lime mt-8 shrink-0 md:mt-0">
              {portfolioCta.button.label} <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
