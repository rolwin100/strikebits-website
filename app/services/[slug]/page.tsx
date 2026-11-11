import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { getService, services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

// One page per service in data/services.ts, built ahead of time
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | StrikeBits`,
    description: service.page.intro,
  };
}

export default async function ServiceRoute({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <ServicePage service={service} />;
}
