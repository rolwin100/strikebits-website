import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { LocaleLink } from "@/i18n/client";
import Logo from "../Logo";
import Reveal from "../Reveal";
import { GitHubIcon, LinkedInIcon, XIcon } from "./SocialIcons";
import { LanguageDropdown } from "../Header/LanguageMenu";
import { getServices } from "@/data/services";
import { bookingHref, site, telHref } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/translations/messages";

// ---- Footer content (items marked TODO need your real details; the text is in i18n/translations/messages/en.ts) ----
const YEAR = 2026;

// Contact details and social links come from data/site.ts
const contact = [
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: site.phone, href: telHref(site.phone) },
  { icon: MapPin, label: site.address, href: site.mapUrl },
];
// -------------------------------------------------------

export default function Footer({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const f = m.footer;

  // Links marked "#" don't have a page yet
  const columns = [
    {
      title: f.columns.company,
      links: [
        { label: f.links.about, href: "/about" },
        { label: f.links.portfolio, href: "/portfolio" },
        { label: f.links.shopifyPartner, href: "/about" },
        { label: f.links.careers, href: "#" },
        { label: f.links.contact, href: "/contact" },
      ],
    },
    {
      title: f.columns.services,
      links: getServices(locale).map((service) => ({ label: service.title, href: service.href })),
    },
    {
      title: f.columns.resources,
      links: [
        { label: f.links.blog, href: "/#blog" },
        { label: f.links.faqs, href: "/#faq" },
        { label: f.links.support, href: "/services/ongoing-support" },
        { label: f.links.demoStore, href: "#" },
        { label: f.links.scheduleCall, href: bookingHref },
      ],
    },
  ];

  const socials = [
    { icon: LinkedInIcon, label: m.social.linkedin, href: site.socials.linkedin },
    { icon: XIcon, label: m.social.x, href: site.socials.x },
    { icon: GitHubIcon, label: m.social.github, href: site.socials.github },
  ];

  const legal = [
    { label: f.legal.privacy, href: "/privacy-policy" },
    // These two share the privacy policy page, as on the previous site
    { label: f.legal.terms, href: "/privacy-policy" },
    { label: f.legal.cookies, href: "/privacy-policy#cookies" },
  ];

  return (
    <footer className="bg-pine-900 text-pine-200">
      <div className="wrap">
        {/* CTA row */}
        <Reveal margin="0px" className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-14 md:flex-row md:items-center">
          <h2 className="max-w-xl text-3xl text-white md:text-4xl">{f.cta}</h2>
          <LocaleLink href="/contact" className="btn btn-lime shrink-0">
            {f.scheduleCall} <ArrowUpRight className="size-4" />
          </LocaleLink>
        </Reveal>

        {/* Main grid */}
        <div className="grid gap-12 py-14 lg:grid-cols-12">
          {/* Brand + contact */}
          <Reveal margin="0px" className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm leading-relaxed">{f.blurb}</p>

            <ul className="mt-6 space-y-3 text-sm">
              {contact.map(({ icon: ContactIcon, label, href }) => (
                <li key={label}>
                  <a href={href} className="inline-flex items-center gap-3 transition hover:text-white">
                    <ContactIcon className="size-4 shrink-0 text-lime" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-2">
              {socials.map(({ icon: SocialIcon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-pine-100 transition hover:border-lime hover:bg-lime hover:text-pine-900"
                >
                  <SocialIcon />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Link columns */}
          <Reveal margin="0px" delay={0.1} className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">{col.title}</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <LocaleLink href={link.href} className="transition hover:text-lime">
                        {link.label}
                      </LocaleLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          {/* Newsletter */}
          <Reveal margin="0px" delay={0.2} className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">{f.newsletter.title}</h3>
            <p className="mt-5 text-sm leading-relaxed">{f.newsletter.text}</p>
            <form action="#" className="mt-5 flex items-center rounded-pill border border-white/15 bg-white/5 p-1.5 focus-within:border-lime">
              <label htmlFor="newsletter-email" className="sr-only">{f.newsletter.emailLabel}</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder={f.newsletter.placeholder}
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-pine-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label={f.newsletter.subscribe}
                className="grid size-10 shrink-0 place-items-center rounded-full bg-lime text-pine-900 transition hover:bg-lime-deep"
              >
                <Send className="size-4" />
              </button>
            </form>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal margin="0px" delay={0.1} className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm md:flex-row">
          <p>© {YEAR} {site.name}. {f.rights}</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legal.map((item, i) => (
              <li key={i}>
                <LocaleLink href={item.href} className="transition hover:text-white">
                  {item.label}
                </LocaleLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <LanguageDropdown tone="dark" direction="up" fullName />
            <a href="#top" className="inline-flex items-center gap-2 transition hover:text-white">
              {f.backToTop} <ArrowUp className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
