import ServiceRoute, { serviceMetadata, serviceSlugs } from "../../../_routes/service";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = serviceSlugs;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return serviceMetadata("en", slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ServiceRoute locale="en" slug={slug} />;
}
