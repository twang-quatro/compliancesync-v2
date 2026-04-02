import ResourcesHub from "../../components/ResourcesHub";
import PageHero from "../../components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Resources — ComplianceSync",
  description:
    "News, legislation, learning, and industry standards — everything your organization needs to stay current, stay qualified, and stay protected.",
};

export default function MemberResourcesPage() {
  return (
    <>
      <PageHero
        label="Member Resources"
        headline="Knowledge is your first line of defence."
        subhead="News, legislation, learning, and industry standards — everything your organization needs to stay current and stay protected."
        accent="blue"
      />
      <ResourcesHub />
    </>
  );
}
