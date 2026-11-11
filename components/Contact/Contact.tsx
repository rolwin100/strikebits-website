import Image from "next/image";
import { ArrowUpRight, CalendarCheck, Check, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../Reveal";
import { GitHubIcon, LinkedInIcon, XIcon } from "../Footer/SocialIcons";
import ContactForm from "./ContactForm";
import { bookingHref, site, telHref } from "@/data/site";

// ---- Page content (contact details live in data/site.ts) ----
const highlights = [site.emailNote, "30-minute consultation call with our team", `Available ${site.phoneNote}`];

const details = [
  { icon: Phone, label: "Phone", value: site.phone, note: site.phoneNote, href: telHref(site.phone) },
  { icon: Mail, label: "Email", value: site.email, note: site.emailNote, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Address", value: site.address, note: "", href: site.mapUrl },
];

const socials = [
  { icon: LinkedInIcon, label: "LinkedIn", href: site.socials.linkedin },
  { icon: XIcon, label: "X (Twitter)", href: site.socials.x },
  { icon: GitHubIcon, label: "GitHub", href: site.socials.github },
];
// --------------------------------------------------------------

export default function Contact() {
  return (
    <>
      {/* Page heading */}
      <section className="pt-6">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-lime-soft/50 via-sage/30 to-mist px-6 py-14 sm:px-10 md:py-20 lg:px-14 xl:px-16">
            <div className="dots pointer-events-none absolute top-0 left-0 h-full w-1/2 mask-[radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                <Reveal margin="0px" blur={6}>
                  <span className="tag bg-white/80">Contact</span>
                </Reveal>
                <Reveal margin="0px" delay={0.1} blur={6}>
                  <h1 className="mt-6 text-4xl leading-[1.05] font-normal sm:text-5xl xl:text-[3.6rem]">
                    Get in <span className="font-bold">touch.</span>
                  </h1>
                </Reveal>
                <Reveal margin="0px" delay={0.2} blur={6}>
                  <p className="lead">
                    <span className="font-medium text-ink">Ready to transform your e-commerce business?</span> Let&apos;s
                    discuss your project and how we can help you achieve your goals with our Shopify expertise.
                  </p>
                </Reveal>
              </div>

              <Reveal margin="0px" delay={0.3}>
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-2xl bg-white/70 px-5 py-4 font-medium text-ink backdrop-blur">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-pine-800">
                        <Check className="size-3.5 text-lime" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Details + form */}
      <section className="py-16 md:py-20">
        <div className="wrap grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="space-y-6">
            {/* Contact details */}
            <Reveal margin="0px" delay={0.3} y={32}>
              <div className="relative overflow-hidden rounded-card bg-pine-900 p-8 text-pine-200 md:p-10">
                <div className="dots pointer-events-none absolute inset-0 opacity-30 mask-[linear-gradient(to_bottom,black,transparent_60%)]" />
                <div className="relative">
                  <h2 className="text-2xl text-white">Contact details</h2>

                  <ul className="mt-8 space-y-6">
                    {details.map(({ icon: Icon, label, value, note, href }) => (
                      <li key={label} className="flex items-start gap-4">
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-lime">
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold tracking-wider text-pine-200 uppercase">{label}</p>
                          <a href={href} className="mt-1 block break-words text-lg text-white transition hover:text-lime">
                            {value}
                          </a>
                          {note && <p className="mt-0.5 text-sm text-pine-200">{note}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
                    <div className="flex gap-2">
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
                    <Image
                      src="/shopify-partners.webp"
                      alt="Shopify Partners"
                      width={600}
                      height={253}
                      className="h-12 w-auto opacity-90 brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Schedule a meeting */}
            <Reveal y={32}>
              <div className="rounded-card bg-mist p-8 md:p-10">
                <span className="grid size-12 place-items-center rounded-full bg-lime text-pine-900">
                  <CalendarCheck className="size-6" />
                </span>
                <h2 className="mt-6 text-2xl">Schedule a meeting</h2>
                <p className="mt-2 text-ink-soft">
                  Prefer to have a direct conversation? Book a 30-minute consultation call with our team.
                </p>
                <a href={bookingHref} className="btn btn-pine mt-6">
                  Book a call <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form (shown first on phones, on the right on desktop) */}
          <Reveal margin="0px" delay={0.4} y={32} className="order-first lg:order-last">
            <div className="rounded-card border border-line bg-white p-6 shadow-card sm:p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl">Send us a message</h2>
              <p className="mt-2 mb-8 text-ink-soft">
                Fields marked <span className="text-pine-600">*</span> are required.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
