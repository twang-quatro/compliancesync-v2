"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const services = [
  {
    index: "01",
    title: "Proof of Compliance",
    description: "Instant, documented proof that every contractor on your site meets your requirements — before work begins and throughout the engagement.",
    features: ["Company & worker insurance verification", "Trade qualifications on record", "Safety training certification"],
    audience: "clients",
  },
  {
    index: "02",
    title: "Simple Administration",
    description: "Replace the paper trail with a single dashboard. Define your requirements once and let ComplianceSync manage the rest.",
    features: ["Centralized client requirements", "Worker certification tracking", "Automated expiry notifications"],
    audience: "clients",
  },
  {
    index: "03",
    title: "Complete Visibility",
    description: "Seamless, organization-wide access to contractor compliance status. Search by contractor, worker, or community — from any device.",
    features: ["Contractor & worker search", "Mobile-friendly interface", "Instant access to documentation"],
    audience: "clients",
  },
  {
    index: "04",
    title: "Verified Opportunity",
    description: "ComplianceSync gives qualified contractors a platform to prove their value and connect with clients who are actively looking for verified partners.",
    features: ["Verified profile shared with clients", "Competitive advantage in your market", "Connect with the right customers"],
    audience: "contractors",
  },
  {
    index: "05",
    title: "Credential Management",
    description: "Organize every certification, insurance policy, and qualification in one place. Share your verified profile with any client — for free.",
    features: ["Centralized credential storage", "Free profile sharing across clients", "Worker PIN access for field teams"],
    audience: "contractors",
  },
  {
    index: "06",
    title: "Built-In Standards",
    description: "ComplianceSync ships with established compliance standards built in — giving every organization a recognized baseline from day one.",
    features: ["Custom organizational fit", "Built-in compliance standards", "Exception reporting & alerts"],
    audience: "both",
  },
];

const dashboards = [
  {
    title: "Client Compliance Dashboard",
    description: "A real-time view of every contractor relationship in your organization. Filter by status, search by contractor, export documentation — all from one screen.",
    accent: "magenta" as const,
    href: "/clients",
  },
  {
    title: "Contractor Compliance Dashboard",
    description: "Your credentials, organized and ready to share. Update certifications, manage worker records, and track your compliance status across every client relationship.",
    accent: "blue" as const,
    href: "/contractors",
  },
];

const audienceLabel: Record<string, string> = {
  clients: "Hiring Clients",
  contractors: "Contractors",
  both: "Platform-Wide",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const dashRef = useRef(null);
  const dashInView = useInView(dashRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-28 lg:py-40" ref={ref}>

        <motion.div
          className="flex items-center gap-6 mb-12 lg:mb-20"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-cs-blue font-sans shrink-0">
            Platform Capabilities
          </p>
          <div className="h-px flex-1 bg-black/8" />
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/8">
          {services.map((service, i) => (
            <motion.div
              key={service.index}
              className="bg-white p-10 lg:p-12 flex flex-col gap-7 relative overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1 + 0.1}
            >
              <span className="absolute -bottom-6 -right-2 font-display text-[120px] leading-none text-navy/[0.04] select-none pointer-events-none">
                {service.index}
              </span>

              <div className="flex items-center justify-between">
                <span className="font-display text-[12px] text-navy/30 tracking-widest">
                  {service.index}
                </span>
                <span className={`text-[9px] uppercase tracking-[0.18em] font-sans px-2.5 py-1 border ${
                  service.audience === "clients"
                    ? "border-magenta/30 text-magenta/70"
                    : service.audience === "contractors"
                    ? "border-cs-blue/30 text-cs-blue/70"
                    : "border-black/10 text-navy/40"
                }`}>
                  {audienceLabel[service.audience]}
                </span>
              </div>

              <h3 className="font-display text-navy text-[28px] lg:text-[32px] leading-[1.1] tracking-[-0.015em]">
                {service.title}
              </h3>

              <p className="text-navy/60 font-sans text-[14px] leading-[1.85] flex-1">
                {service.description}
              </p>

              <ul className="flex flex-col gap-2.5 pt-2 border-t border-black/8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-verified mt-[7px] shrink-0" />
                    <span className="text-[12px] uppercase tracking-[0.1em] text-navy/40 font-sans leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Dashboard callouts */}
        <div ref={dashRef} className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/8 mt-px">
          {dashboards.map((dash, i) => (
            <motion.div
              key={dash.title}
              className="bg-green-light p-10 lg:p-14 flex flex-col gap-6 group cursor-pointer hover:bg-[#e2f4cc] transition-colors duration-300"
              variants={fadeUp}
              initial="hidden"
              animate={dashInView ? "visible" : "hidden"}
              custom={i * 0.15}
            >
              <div className={`w-8 h-px ${dash.accent === "magenta" ? "bg-magenta" : "bg-cs-blue"}`} />
              <h3 className="font-display text-navy text-[28px] lg:text-[34px] leading-[1.1] tracking-[-0.015em]">
                {dash.title}
              </h3>
              <p className="text-navy/60 font-sans text-[15px] leading-[1.8] max-w-[460px]">
                {dash.description}
              </p>
              <Link
                href={dash.href}
                className={`flex items-center gap-3 mt-auto text-[11px] uppercase tracking-[0.18em] font-sans transition-all duration-300 group-hover:gap-5 ${
                  dash.accent === "magenta" ? "text-magenta" : "text-cs-blue"
                }`}
              >
                Learn More <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
