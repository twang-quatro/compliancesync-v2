import HeroHome from "../components/HeroHome";
import ValuesPillars from "../components/ValuesPillars";
import KeysToPartnerships from "../components/KeysToPartnerships";
import ValueProps from "../components/ValueProps";
import HowItWorks from "../components/HowItWorks";
import TrustStats from "../components/TrustStats";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroHome />
      <TrustStats />
      <ValuesPillars />
      <ValueProps />
      <KeysToPartnerships />
      <HowItWorks />
      <CTABanner />
    </>
  );
}
