import ServicesPage, { servicesMetadata } from "../../_routes/services";

export const metadata = servicesMetadata("en");

export default function Page() {
  return <ServicesPage locale="en" />;
}
