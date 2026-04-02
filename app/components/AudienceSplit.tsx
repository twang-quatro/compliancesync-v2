"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const panels = [
  {
    id: "clients",
    label: "Hiring Clients",
    headline: "Your responsibility.\nOur platform.",
    subhead:
      "Under Bill C-45, Canadian employers bear direct legal responsibility for contractor health and safety on site. ComplianceSync gives you the documented proof of due diligence that protects your organization — and your career.",
    points: [
      "100% visibility to contractor compliance",
      "Real-time proof of certification",
      "Organization-wide dashboard access",
      "Automated expiry alerts",
    ],
    cta: "Protect Your Organization",
    href: "/clients",
    accent: "magenta" as const,
  },
  {
    id: "contractors",
    label: "Contractors",
    headline: "Your credentials.\nYour community.",
    subhead:
      "ComplianceSync is the voice for better contractors. Organize your credentials, demonstrate your commitment to safety, and connect with the clients who value what you bring to the job.",
    points: [
      "Verified profile shared with clients",
      "Stand out in a competitive market",
      "Centralized credential management",
      "Free profile sharing across clients",
    ],
    cta: "Grow Your Business",
    href: "/contractors",
    accent: "cs-blue" as const,
  },
];

export default function AudienceSplit() {
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-cream border-t border-black/8 min-h-[85vh] flex flex-col lg:flex-row"
    >
      {panels.map((panel, i) => {
        const isActive = active === panel.id;
        const isDimmed = active !== null && !isActive;

        return (
          <motion.div
            key={panel.id}
            className={`
              relative flex-1 flex flex-col justify-between p-10 lg:p-16 xl:p-20
              border-b lg:border-b-0 lg:border-r border-black/8 last:border-0
              cursor-default transition-colors duration-500 overflow-hidden
              ${isDimmed ? "bg-cream" : isActive ? "bg-green-light" : "bg-cream"}
            `}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.15 }}
            onMouseEnter={() => setActive(panel.id)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-8 lg:mb-16">
              <span className={`text-[10px] uppercase tracking-[0.25em] font-sans transition-colors duration-300 ${
                panel.accent === "magenta" ? "text-magenta" : "text-cs-blue"
              }`}>
                {panel.label}
              </span>
              <span className={`font-display text-sm transition-colors duration-300 ${
                isDimmed ? "text-navy/10" : "text-navy/20"
              }`}>
                0{i + 1}
              </span>
            </div>

            {/* Headline */}
            <div className="flex-1 flex flex-col justify-center gap-10">
              <h2 className={`font-display text-[clamp(38px,4.5vw,64px)] leading-[0.95] tracking-[-0.02em] transition-colors duration-300 whitespace-pre-line ${
                isDimmed ? "text-navy/30" : "text-navy"
              }`}>
                {panel.headline}
              </h2>

              <p className={`font-sans text-[15px] leading-[1.85] max-w-[420px] transition-colors duration-300 ${
                isDimmed ? "text-mist/30" : "text-mist"
              }`}>
                {panel.subhead}
              </p>

              {/* Points */}
              <ul className="flex flex-col gap-3">
                {panel.points.map((point) => (
                  <li
                    key={point}
                    className={`flex items-center gap-3 transition-opacity duration-300 ${
                      isDimmed ? "opacity-20" : "opacity-100"
                    }`}
                  >
                    <span className={`w-1 h-1 rounded-full shrink-0 ${
                      panel.accent === "magenta" ? "bg-magenta" : "bg-cs-blue"
                    }`} />
                    <span className="text-[12px] uppercase tracking-[0.14em] text-mist font-sans">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-16">
              <Link
                href={panel.href}
                className={`
                  inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] font-sans
                  transition-all duration-300 group
                  ${panel.accent === "magenta"
                    ? "text-magenta hover:text-navy"
                    : "text-cs-blue hover:text-navy"
                  }
                  ${isDimmed ? "opacity-20 pointer-events-none" : "opacity-100"}
                `}
              >
                {panel.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
