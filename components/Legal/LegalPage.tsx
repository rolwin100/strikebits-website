import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../Reveal";
import TableOfContents from "./TableOfContents";
import { site, telHref } from "@/data/site";

export type LegalBlock = { p: string } | { list: string[] };

export type LegalSection = {
  /** Used for the #link, e.g. "cookies" */
  id: string;
  title: string;
  blocks: LegalBlock[];
  /** Show the company's contact details under this section */
  showContact?: boolean;
};

export type LegalDocument = {
  /** [light part, bold part] of the page heading */
  title: [string, string];
  /** Shown as "Last updated: …" */
  updated: string;
  intro: string[];
  sections: LegalSection[];
};

const contact = [
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: site.phone, href: telHref(site.phone) },
  { icon: MapPin, label: site.address, href: site.mapUrl },
];

/** Layout for legal pages (privacy policy, terms, cookie policy). */
export default function LegalPage({ content }: { content: LegalDocument }) {
  const { title, updated, intro, sections } = content;

  return (
    <>
      {/* Page heading */}
      <section className="pt-6">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-lime-soft/50 via-sage/30 to-mist px-6 py-12 sm:px-10 md:py-16 lg:px-14 xl:px-16">
            <div className="dots pointer-events-none absolute top-0 left-0 h-full w-1/2 mask-[radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />
            <div className="relative">
              <Reveal margin="0px" blur={6}>
                <span className="tag bg-white/80">Legal</span>
              </Reveal>
              <Reveal margin="0px" delay={0.1} blur={6}>
                <h1 className="mt-6 text-4xl leading-[1.05] font-normal sm:text-5xl xl:text-[3.6rem]">
                  {title[0]} <span className="font-bold">{title[1]}</span>
                </h1>
              </Reveal>
              <Reveal margin="0px" delay={0.2}>
                <p className="mt-6 inline-flex items-center gap-2 rounded-pill bg-white/70 px-4 py-2 text-sm font-medium text-ink backdrop-blur">
                  <CalendarDays className="size-4 text-pine-600" />
                  Last updated: {updated}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contents + document */}
      <section className="py-12 md:py-20">
        <div className="wrap grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <aside>
            <TableOfContents items={sections.map(({ id, title }) => ({ id, title }))} />
          </aside>

          <article className="max-w-3xl">
            <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {sections.map((section, i) => (
              <section key={section.id} id={section.id} className="mt-12 scroll-mt-28 border-t border-line pt-10">
                <p className="font-display text-sm font-semibold text-pine-600 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 text-2xl md:text-3xl">{section.title}</h2>

                <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                  {section.blocks.map((block, k) =>
                    "p" in block ? (
                      <p key={k}>{block.p}</p>
                    ) : (
                      <ul key={k} className="space-y-2.5">
                        {block.list.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-pine-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>

                {section.showContact && (
                  <address className="mt-6 rounded-card bg-mist p-6 not-italic md:p-8">
                    <p className="font-display text-lg font-semibold text-ink">{site.legalName}</p>
                    <ul className="mt-4 space-y-3">
                      {contact.map(({ icon: Icon, label, href }) => (
                        <li key={label}>
                          <a href={href} className="inline-flex items-center gap-3 text-ink-soft transition hover:text-pine-700">
                            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-pine-700">
                              <Icon className="size-4" />
                            </span>
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </address>
                )}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
