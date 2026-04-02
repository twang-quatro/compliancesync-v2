import Link from "next/link";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import ContractorBenefits from "../../components/ContractorBenefits";
import ContractorValueProps from "../../components/ContractorValueProps";
import CTABanner from "../../components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Contractors — ComplianceSync",
  description:
    "Organize your credentials, promote your qualifications, and connect with clients who value verified contractors. ComplianceSync is the voice for better contractors.",
};

export default function ContractorsPage() {
  return (
    <>
      <PageHero
        label={<>Universal Credential Management <span className="text-verified italic normal-case">one step ahead</span></>}
        labelSize="md"
        headline={
          <>
            Your Reputation,<br />
            Your Opportunity,<br />
            <span className="font-bold italic">Your Future.</span>
          </>
        }
        accent="blue"
        heroImage="/images/contractors-hero.png"
        heroImageAlt="Contractor arriving home to greet his child"
        heroImageVariant="blob-left"
      >
        <div className="flex flex-col items-end gap-6">
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.compliancesync.com/members/Registration/CreateAccount.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-magenta text-cream text-[11px] uppercase tracking-[0.18em] font-sans font-extrabold hover:opacity-90 transition-opacity duration-300"
            >
              Register Now
            </Link>
            <Link
              href="https://www.compliancesync.com/members/Registration/CreateAccount.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-verified text-cream text-[11px] uppercase tracking-[0.18em] font-sans font-extrabold hover:opacity-90 transition-opacity duration-300"
            >
              Get Verified
            </Link>
          </div>
          <Image
            src="/images/cs-icon-circle.jpg"
            alt="ComplianceSync logo"
            width={300}
            height={300}
            className="w-[240px] h-auto"
          />
        </div>
      </PageHero>
      <ContractorBenefits />
      <ContractorValueProps />
      <CTABanner
        headline="Let's Connect with Our Clients."
        subhead="Join the contractor verification community built on integrity, honesty, and transparency."
        primaryLabel="Get Verified"
        secondaryLabel="See How It Works"
        secondaryHref="/contact"
      />
    </>
  );
}
