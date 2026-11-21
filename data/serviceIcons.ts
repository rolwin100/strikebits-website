import { Code, LifeBuoy, Crown, Palette, Store, type LucideIcon } from "lucide-react";

/** Icon for each service, by slug. Kept apart from the text so translations never touch it. */
export const serviceIcons: Record<string, LucideIcon> = {
  "shopify-app-development": Code,
  "shopify-store-development": Store,
  "shopify-theme-development": Palette,
  "shopify-plus-development": Crown,
  "ongoing-support": LifeBuoy,
};
