import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import FaqAccordion from "./FaqAccordion";
import { faqs } from "@/data/faqs";

export default function Faq({ showContactButton = true }: { showContactButton?: boolean }) {
  return (
    <section id="faq" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <Reveal blur={6} className="lg:sticky lg:top-32 lg:self-start">
          <span className="tag">FAQ</span>
          <h2 className="heading text-balance">Questions, answered</h2>
          <p className="lead">
            Everything you need to know about working with us. Can&apos;t find your answer? We&apos;re
            happy to help.
          </p>
          {showContactButton && (
            <Link href="/contact" className="btn btn-pine mt-8">
              Ask us a question <ArrowUpRight className="size-4" />
            </Link>
          )}
        </Reveal>

        <Reveal delay={0.15} y={32} blur={6}>
          <FaqAccordion faqs={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
