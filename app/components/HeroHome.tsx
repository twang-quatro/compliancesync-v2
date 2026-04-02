"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function HeroHome() {
  return (
    <section className="relative min-h-screen bg-cream flex flex-col overflow-hidden">

      {/* Left accent rule */}
      <div className="absolute left-8 lg:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-verified/30 to-transparent pointer-events-none" />

      {/* Background image — faded behind headline */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/images/hero-bg-contractors.png"
          alt=""
          fill
          className="object-cover opacity-[0.38]"
          priority
        />
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 pt-44 pb-20 lg:pb-28 w-full relative z-10">

        {/* Label */}
        <motion.p
          className="text-[15px] uppercase tracking-[2.5px] text-cs-blue font-sans font-bold mb-10 drop-shadow-sm"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Contractor Risk Intelligence Platform
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-sans text-navy leading-[0.9] tracking-[-0.02em] mb-12 text-[clamp(44px,9vw,124px)]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
        >
          One Source.<br />
          Trusted Partners.<br />
          <span className="text-verified font-bold italic">Better Outcomes</span>
          <span className="italic">.</span>
        </motion.h1>

        {/* Divider + subhead */}
        <motion.div
          className="flex items-start gap-4 md:gap-8 mb-14"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.42}
        >
          <div className="mt-[11px] w-12 h-px bg-magenta shrink-0" />
          <p className="text-mist font-sans font-bold text-[19px] leading-[1.66] max-w-[480px]">
            Universal credential sharing service for businesses that work
            together. Real-time access to source verified qualifications
            when you need them.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.58}
        >
          <Link
            href="/clients"
            className="px-8 py-4 bg-magenta text-cream text-[11px] uppercase tracking-[0.18em] font-sans font-extrabold hover:opacity-90 transition-opacity duration-300"
          >
            Hiring Clients
          </Link>
          <Link
            href="/contractors"
            className="px-8 py-4 border border-cs-blue/50 text-cs-blue text-[11px] uppercase tracking-[0.18em] font-sans font-extrabold hover:border-cs-blue hover:bg-cs-blue/10 transition-all duration-300"
          >
            For Contractors
          </Link>
          <Link
            href="https://www.compliancesync.com/members/Registration/CreateAccount.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-mist text-[11px] uppercase tracking-[0.18em] font-sans font-bold hover:text-navy transition-colors duration-300 flex items-center gap-3"
          >
            Register Now
            <span className="text-magenta font-bold">→</span>
          </Link>
        </motion.div>

        {/* Partner badges — bottom right */}
        <motion.div
          className="absolute bottom-8 right-8 lg:right-20"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.72}
        >
          <Image
            src="/images/badge-bottom.png"
            alt="Partner certifications"
            width={587}
            height={129}
            className="w-auto h-[80px] lg:h-[129px]"
          />
        </motion.div>
      </div>

    </section>
  );
}
