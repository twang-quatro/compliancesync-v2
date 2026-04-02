"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CTABannerProps {
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "blue";
}

export default function CTABanner({
  headline = "Ready to establish due diligence?",
  subhead = "Join the contractor verification community trusted by hiring organizations across Canada.",
  primaryLabel = "Register Now",
  primaryHref = "https://www.compliancesync.com/members/Registration/CreateAccount.aspx",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
  variant = "dark",
}: CTABannerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const isDark = variant === "dark";

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden border-t border-white/5 ${
        isDark ? "bg-surface" : "bg-cs-blue"
      }`}
    >
      {/* Ambient gradient */}
      <div className={`
        absolute inset-0 pointer-events-none
        ${isDark
          ? "bg-gradient-to-r from-magenta/5 via-transparent to-cs-blue/5"
          : "bg-gradient-to-r from-white/5 via-transparent to-white/5"
        }
      `} />

      {/* Ghost text */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 font-display text-[200px] leading-none select-none pointer-events-none text-white/[0.025] tracking-tight">
        CS
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-24 lg:py-32 relative">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">

          {/* Copy */}
          <div className="flex flex-col gap-6 max-w-[600px]">
            <motion.p
              className={`text-[10px] uppercase tracking-[0.25em] font-sans ${
                isDark ? "text-magenta" : "text-white/60"
              }`}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              Get Started
            </motion.p>

            <motion.h2
              className="font-display text-cream text-[clamp(32px,4vw,60px)] leading-[1.0] tracking-[-0.02em]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
            >
              {headline}
            </motion.h2>

            <motion.p
              className="text-mist font-sans text-base leading-[1.8]"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
            >
              {subhead}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.3 }}
          >
            <Link
              href={primaryHref}
              target={primaryHref.startsWith("http") ? "_blank" : undefined}
              rel={primaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="px-8 py-4 bg-magenta text-cream text-[11px] uppercase tracking-[0.18em] font-sans hover:opacity-90 transition-opacity duration-300 text-center"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className={`
                px-8 py-4 text-[11px] uppercase tracking-[0.18em] font-sans transition-all duration-300 text-center
                ${isDark
                  ? "border border-white/15 text-cream hover:border-white/40"
                  : "border border-white/30 text-cream hover:border-white/60"
                }
              `}
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </div>

        {/* Contact strip */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <p className="text-[11px] uppercase tracking-[0.16em] text-mist/50 font-sans">
            Questions? We&rsquo;re here.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="tel:18444004484"
              className="text-[11px] uppercase tracking-[0.14em] text-mist/50 hover:text-cream transition-colors duration-200 font-sans"
            >
              1-844-400-4484
            </a>
            <a
              href="mailto:care@compliancesync.com"
              className="text-[11px] uppercase tracking-[0.14em] text-mist/50 hover:text-cream transition-colors duration-200 font-sans"
            >
              care@compliancesync.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
