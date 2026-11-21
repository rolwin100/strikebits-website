import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { contentOverrides } from "@/i18n/content";
import { en } from "@/i18n/content/en";
import { deepMerge } from "@/i18n/merge";

// The blog post text is in i18n/content/en.ts (English) and de.ts / fr.ts (translations).
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

/** Posts in a language: translations from i18n/content laid over the English text (same order) */
export const getPosts = (locale: Locale): Post[] => deepMerge(en.posts, contentOverrides[locale].posts);
