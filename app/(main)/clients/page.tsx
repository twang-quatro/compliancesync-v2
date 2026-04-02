import Link from "next/link";
import PageHero from "../../components/PageHero";
import ClientBenefits from "../../components/ClientBenefits";
import ClientValueProps from "../../components/ClientValueProps";
import CTABanner from "../../components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Hiring Clients — ComplianceSync",
  description:
    "Under Bill C-45, your organization is legally responsible for contractor compliance. ComplianceSync gives you 100% visibility to contractor qualifications, always current, always available.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        label={<>Enterprise level due diligence <span className="text-verified">guaranteed</span></>}
        labelSize="md"
        headline={
          <>
            Your Contractors,<br />
            Your Responsibility,<br />
            <span className="font-bold italic">Your Risk</span>
          </>
        }
        accent="magenta"
        heroImage="/images/clients-hero.jpg"
        heroImageAlt="Construction professionals shaking hands"
        heroImageVariant="blob"
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-magenta text-cream text-[11px] uppercase tracking-[0.18em] font-sans font-extrabold hover:opacity-90 transition-opacity duration-300"
          >
            Learn More
          </Link>
          <Link
            href="https://www.compliancesync.com/members/Registration/CreateAccount.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-verified text-cream text-[11px] uppercase tracking-[0.18em] font-sans font-extrabold hover:opacity-90 transition-opacity duration-300"
          >
            Get Protected
          </Link>
        </div>
      </PageHero>
      <ClientBenefits />
      <ClientValueProps />

      <CTABanner
        headline="Let's Connect with Our Contractors."
        subhead="Join the contractor verification community built on integrity, honesty, and transparency."
        primaryLabel="Start Free"
        secondaryLabel="Learn More"
        secondaryHref="/contact"
      />
    </>
  );
}
