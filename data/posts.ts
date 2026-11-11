import { Blocks, ShoppingCart, Zap, type LucideIcon } from "lucide-react";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO date, e.g. "2026-10-28"
  readTime: string;
  /** Cover style until real images are added */
  cover: { color: string; icon: LucideIcon };
};

// TODO: these are SAMPLE posts — replace with your real articles.
export const posts: Post[] = [
  {
    slug: "speed-up-your-shopify-store",
    title: "7 ways to speed up your Shopify store",
    excerpt: "Practical fixes for images, apps and theme code that cut load times and lift conversions.",
    category: "Performance",
    date: "2026-10-28",
    readTime: "6 min read",
    cover: { color: "bg-sage", icon: Zap },
  },
  {
    slug: "public-vs-private-shopify-apps",
    title: "Public vs private Shopify apps: which do you need?",
    excerpt: "How the two app types differ in cost, review and maintenance, and when each one makes sense.",
    category: "Shopify apps",
    date: "2026-10-14",
    readTime: "5 min read",
    cover: { color: "bg-butter", icon: Blocks },
  },
  {
    slug: "shopify-plus-checkout-customisation",
    title: "A guide to Shopify Plus checkout customisation",
    excerpt: "What you can change with checkout extensions and Functions, and what to plan before you start.",
    category: "Shopify Plus",
    date: "2026-09-30",
    readTime: "8 min read",
    cover: { color: "bg-sky", icon: ShoppingCart },
  },
];
