import PageHero from "../../components/PageHero";
import AboutBenefits from "../../components/AboutBenefits";
import AboutContent from "./AboutContent";
import AboutHeroLines from "./AboutHeroLines";
import CTABanner from "../../components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — ComplianceSync",
  description:
    "ComplianceSync is a Risk Intelligence Platform for businesses that work together and share liability. Due Diligence at its best.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        headline={
          <>
            Due Diligence{" "}
            <span className="text-verified italic">made easy.</span>
          </>
        }
        accent="blue"
      >
        <AboutHeroLines />
      </PageHero>
      <AboutBenefits />
      <AboutContent />
      <CTABanner
        headline="Let's Connect with Our Partners."
        subhead="Join the contractor verification community built on integrity, honesty, and transparency."
      />
    </>
  );
}
