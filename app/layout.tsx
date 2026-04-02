import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ComplianceSync — Contractor Verification Community",
  description:
    "ComplianceSync connects hiring organizations with qualified, insured, and verified contractors. 100% visibility to compliance, always current, always available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
      <body
        className={`${inter.variable} antialiased bg-cream`}
      >
        {children}
      </body>
    </html>
  );
}
