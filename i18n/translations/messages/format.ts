/** Fills "{name}" placeholders: format("Available {hours}", { hours: "9am" }). Safe to use in client components. */
export function format(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
