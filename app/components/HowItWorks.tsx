"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Register &\nDefine",
    body: "Register below as a Hiring Client and we\u2019ll schedule an online consultation at your convenience. Our flexible platform customizes to your exact needs. We can have you running in as little as 24 hours.",
    cta: "Register",
    ctaHref: "https://www.compliancesync.com/members/Registration/CreateAccount.aspx",
    ctaColor: "bg-magenta hover:bg-magenta/90",
    external: true,
  },
  {
    number: "02",
    title: "Setup &\nLaunch",
    body: "We\u2019ll setup your entire personalized Hiring Client experience absolutely free. No obligations, no nonsense, no excuses. Unlimited users, locations, training, contractors and custom documentation.",
    cta: "Contact Us",
    ctaHref: "/contact",
    ctaColor: "bg-[#FFC61A] hover:bg-[#FFC61A]/90",
    external: false,
  },
  {
    number: "03",
    title: "Connect &\nVerify",
    body: "We\u2019ll do all the heavy lifting getting your team ready and contractors on board. It\u2019s easier than you think and it\u2019s what we do. We\u2019ll deliver 100% satisfaction to you and your trusted partners. GUARANTEED.",
    cta: "Call Us",
    ctaHref: "tel:+18444004484",
    ctaColor: "bg-verified hover:bg-verified/90",
    external: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  }),
};

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-green-light">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-16 lg:py-28">
        {/* Section header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-24"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-cs-blue font-sans mb-6">
              How It Works
            </p>
            <h2 className="font-display text-navy text-[clamp(42px,5.5vw,80px)] leading-[0.95] tracking-[-0.02em] max-w-[540px]">
              Compliance made{" "}
              <span className="text-verified italic">simple.</span>
            </h2>
          </div>
          <p className="text-mist font-sans text-base leading-[1.8] max-w-[360px] lg:text-right">
            Three steps to having 100% transparency to your contractors.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="bg-white border border-black/8 p-10 lg:p-14 flex flex-col gap-8 relative overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.15 + 0.1}
            >
              {/* Ghost number */}
              <span className="absolute -top-4 -right-2 font-display text-[140px] leading-none text-navy/[0.04] select-none pointer-events-none tracking-tight">
                {step.number}
              </span>

              {/* Number */}
              <div className="flex items-center gap-4">
                <span className="font-display text-magenta text-[13px] tracking-widest">
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-black/8" />
              </div>

              {/* Title */}
              <h3 className="font-display text-navy text-[clamp(28px,5vw,42px)] leading-[1.0] tracking-[-0.02em] whitespace-pre-line">
                {step.title}
              </h3>

              {/* Body */}
              <p className="text-navy/60 font-sans text-[15px] leading-[1.85] flex-1">
                {step.body}
              </p>

              {/* CTA Button */}
              {step.external ? (
                <a
                  href={step.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-8 py-4 text-cream text-[12px] uppercase tracking-[0.16em] font-sans font-bold rounded-sm transition-colors duration-300 ${step.ctaColor}`}
                >
                  {step.cta}
                </a>
              ) : (
                <Link
                  href={step.ctaHref}
                  className={`inline-flex items-center justify-center px-8 py-4 text-cream text-[12px] uppercase tracking-[0.16em] font-sans font-bold rounded-sm transition-colors duration-300 ${step.ctaColor}`}
                >
                  {step.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-12 pt-10 border-t border-black/8"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.55}
        >
          <p className="font-display text-navy text-[22px] lg:text-[28px] leading-tight tracking-[-0.01em] italic">
            &ldquo;It&rsquo;s simple.&rdquo;
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 border border-cs-blue/50 text-cs-blue text-[11px] uppercase tracking-[0.18em] font-sans hover:border-cs-blue hover:bg-cs-blue/10 transition-all duration-300"
          >
            Explore the Platform
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
