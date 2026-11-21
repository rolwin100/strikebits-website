import AboutPage, { aboutMetadata } from "../../_routes/about";

export const metadata = aboutMetadata("en");

export default function Page() {
  return <AboutPage locale="en" />;
}
