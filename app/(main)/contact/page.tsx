import ContactSection from "../../components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — ComplianceSync",
  description:
    "Get in touch with the ComplianceSync team. Call toll-free at 1-844-400-4484 or email care@compliancesync.com.",
};

export default function ContactPage() {
  return <ContactSection />;
}
