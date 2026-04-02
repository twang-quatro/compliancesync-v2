import PageHero from "../../components/PageHero";
import ServicesGrid from "../../components/ServicesGrid";
import CTABanner from "../../components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — ComplianceSync",
  description:
    "Automated management and tracking of compliance documentation. ComplianceSync gives hiring clients and contractors the tools to stay verified, always.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        headline="The platform that keeps you covered."
        subhead="Automated management and tracking of compliance documentation — so your organization always has proof of due diligence, in real time."
        accent="blue"
      />
      <ServicesGrid />
      <CTABanner
        headline="See it in action."
        subhead="Register today and discover how ComplianceSync transforms contractor compliance from a liability into a competitive advantage."
      />
    </>
  );
}
