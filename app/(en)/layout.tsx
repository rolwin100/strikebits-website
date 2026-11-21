import RootShell, { rootMetadata } from "../_shell/RootShell";

// English: the site root (/, /about, ...). Other languages live in app/[lang].
export const metadata = rootMetadata("en");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
