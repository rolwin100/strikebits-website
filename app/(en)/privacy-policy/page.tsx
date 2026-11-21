import PrivacyPolicyPage, { privacyMetadata } from "../../_routes/privacy-policy";

export const metadata = privacyMetadata("en");

export default function Page() {
  return <PrivacyPolicyPage locale="en" />;
}
