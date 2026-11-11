import { Gauge, Handshake, MessagesSquare, Target, type LucideIcon } from "lucide-react";

// Content for the About page.

// The first paragraph is shown large; **double asterisks** mark the highlighted words.
// TODO: add your own story here: when StrikeBits started, who started it and why.
export const story = {
  lead: "StrikeBits is a **software development company** that specializes in building **custom Shopify stores and apps**.",
  paragraphs: [
    "We're a Shopify Partner agency based in Bengaluru, India. Our work covers the whole Shopify platform: private and public apps, complete store builds, custom themes and Shopify Plus.",
    "We stay focused on one platform on purpose. It means the people working on your project know Shopify's APIs, its app review process and its best practices in depth, and can tell you early what will and won't work.",
  ],
};

export type Value = { icon: LucideIcon; title: string; text: string; color: string };

// TODO: adjust these so they describe how you actually work.
export const values: Value[] = [
  {
    icon: Target,
    title: "Shopify specialists",
    text: "We focus on one platform and know it in depth: its APIs, its review process and its limits.",
    color: "bg-sage",
  },
  {
    icon: MessagesSquare,
    title: "Clear communication",
    text: "Plain-language updates and honest timelines, so you always know where your project stands.",
    color: "bg-butter",
  },
  {
    icon: Gauge,
    title: "Built to perform",
    text: "Fast, reliable code that keeps stores quick and apps stable as your business grows.",
    color: "bg-peach",
  },
  {
    icon: Handshake,
    title: "Long-term partners",
    text: "We stay after launch, with maintenance, updates and improvements.",
    color: "bg-sky",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  /** Square photo in /public/team, e.g. "/team/priya.webp". Leave empty to show a placeholder. */
  photo: string;
  linkedin: string;
  color: string;
};

// TODO: these are PLACEHOLDERS — replace with your real team (name, role, photo, LinkedIn link).
export const team: TeamMember[] = [
  { name: "Team member", role: "Role or title", photo: "", linkedin: "", color: "bg-sage" },
  { name: "Team member", role: "Role or title", photo: "", linkedin: "", color: "bg-butter" },
  { name: "Team member", role: "Role or title", photo: "", linkedin: "", color: "bg-peach" },
  { name: "Team member", role: "Role or title", photo: "", linkedin: "", color: "bg-sky" },
];
