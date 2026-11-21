import type { DeepPartial } from "../merge";
import type { AboutContent } from "@/data/about";
import type { Faq } from "@/data/faqs";
import type { Post } from "@/data/posts";
import type { PortfolioContent } from "@/data/portfolio";
import type { Service } from "@/data/services";
import type { LegalDocument } from "@/components/Legal";

/**
 * One entry per data file that holds text. Each is a partial copy of the English data:
 * only write the fields you translate, and keep lists in the same order as English.
 */
export type ContentOverrides = {
  services?: DeepPartial<Service[]>;
  about?: DeepPartial<AboutContent>;
  faqs?: DeepPartial<Faq[]>;
  posts?: DeepPartial<Post[]>;
  portfolio?: DeepPartial<PortfolioContent>;
  privacy?: DeepPartial<LegalDocument>;
};
