export type DeepPartial<T> = T extends (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;

/**
 * Lays translated text over the English original. Anything the translation
 * doesn't provide (including non-text values such as icons) stays English.
 * Arrays are merged by position, so a translated list must keep the same order.
 */
export function deepMerge<T>(base: T, overrides: DeepPartial<T> | undefined): T {
  if (overrides === undefined || overrides === null) return base;
  if (Array.isArray(base) && Array.isArray(overrides)) {
    return base.map((item, i) => deepMerge(item, (overrides as unknown[])[i] as never)) as T;
  }
  if (isPlainObject(base) && isPlainObject(overrides)) {
    const result: Record<string, unknown> = { ...base };
    for (const key of Object.keys(overrides)) {
      result[key] = deepMerge(base[key], overrides[key] as never);
    }
    return result as T;
  }
  return overrides as T;
}
