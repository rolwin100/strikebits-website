import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import Reveal from "../Reveal";
import { GitHubIcon, LinkedInIcon, XIcon } from "./SocialIcons";
import { services } from "@/data/services";
import { bookingHref, site, telHref } from "@/data/site";

// ---- Footer content (items marked TODO need your real details) ----
const YEAR = 2026;

// Links marked "#" don't have a page yet
const columns = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Shopify Partner", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: services.map((service) => ({ label: service.title, href: service.href })),
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/#blog" },
      { label: "FAQs", href: "/#faq" },
      { label: "Support", href: "/services/ongoing-support" },
      { label: "Demo store", href: "#" },
      { label: "Schedule a call", href: bookingHref },
    ],
  },
];

// Contact details and social links come from data/site.ts
const contact = [
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: site.phone, href: telHref(site.phone) },
  { icon: MapPin, label: site.address, href: site.mapUrl },
];

const socials = [
  { icon: LinkedInIcon, label: "LinkedIn", href: site.socials.linkedin },
  { icon: XIcon, label: "X (Twitter)", href: site.socials.x },
  { icon: GitHubIcon, label: "GitHub", href: site.socials.github },
];

const legal = [
  { label: "Privacy policy", href: "/privacy-policy" },
  // These two share the privacy policy page, as on the previous site
  { label: "Terms of service", href: "/privacy-policy" },
  { label: "Cookie policy", href: "/privacy-policy#cookies" },
];
// -------------------------------------------------------

export default function Footer() {
  return (
    <footer className="bg-pine-900 text-pine-200">
      <div className="wrap">
        {/* CTA row */}
        <Reveal margin="0px" className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-14 md:flex-row md:items-center">
          <h2 className="max-w-xl text-3xl text-white md:text-4xl">
            Have a Shopify project in mind? Let&apos;s build it together.
          </h2>
          <Link href="/contact" className="btn btn-lime shrink-0">
            Schedule a call <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        {/* Main grid */}
        <div className="grid gap-12 py-14 lg:grid-cols-12">
          {/* Brand + contact */}
          <Reveal margin="0px" className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm leading-relaxed">
              A Shopify Partner agency building custom Shopify apps, stores and themes for growing brands.
            </p>

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
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-pine-100 transition hover:border-lime hover:bg-lime hover:text-pine-900"
                >
                  <SocialIcon />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Link columns */}
          <Reveal margin="0px" delay={0.1} className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">{col.title}</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-lime">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          {/* Newsletter */}
          <Reveal margin="0px" delay={0.2} className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Newsletter</h3>
            <p className="mt-5 text-sm leading-relaxed">
              Shopify tips and e-commerce growth ideas, once a month. No spam.
            </p>
            <form action="#" className="mt-5 flex items-center rounded-pill border border-white/15 bg-white/5 p-1.5 focus-within:border-lime">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@company.com"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-pine-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-lime text-pine-900 transition hover:bg-lime-deep"
              >
                <Send className="size-4" />
              </button>
            </form>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal margin="0px" delay={0.1} className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm md:flex-row">
          <p>© {YEAR} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legal.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="#top" className="inline-flex items-center gap-2 transition hover:text-white">
            Back to top <ArrowUp className="size-4" />
          </a>
        </Reveal>
      </div>
    </footer>
  );
}
