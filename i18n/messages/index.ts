import { deepMerge, type DeepPartial } from "../merge";
import type { Locale } from "../config";
import { de } from "./de";
import { en, type Messages } from "./en";
import { fr } from "./fr";

export type { Messages };

const overrides: Record<Locale, DeepPartial<Messages> | undefined> = { en: undefined, de, fr };

/** Interface text for a language: its translations laid over the English original */
export const getMessages = (locale: Locale): Messages => deepMerge(en, overrides[locale]);

export { format } from "./format";
