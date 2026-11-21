import { notFound } from "next/navigation";
import HomePage from "../_routes/home";
import { isLocale } from "@/i18n/config";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <HomePage locale={lang} />;
}
