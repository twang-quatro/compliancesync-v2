"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    icon: "/images/badge-left.png",
    iconAlt: "Cloud arrow icon",
    iconW: 91,
    iconH: 72,
    title: "One Source",
    body: "Transparency for businesses that work together",
    tagline: "We keep you connected",
  },
  {
    icon: "/images/badge-center.png",
    iconAlt: "Handshake icon",
    iconW: 91,
    iconH: 72,
    title: "Trusted Partners",
    body: "Critical information available when you need it",
    tagline: "We keep you safe",
  },
  {
    icon: "/images/badge-right.png",
    iconAlt: "Verified checkmark icon",
    iconW: 91,
    iconH: 57,
    title: "Better Outcomes",
    body: "Verified credentials for confident decisions",
    tagline: "We guarantee compliance",
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

export default function ValuesPillars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-14 lg:py-20">
        {/* Label */}
        <motion.p
          className="text-[10px] uppercase tracking-[0.25em] text-mist font-sans mb-10 lg:mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          Due Diligence by Design
        </motion.p>

        {/* Side-by-side: heading left, pillars right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left — heading */}
          <motion.div
            className="lg:w-[320px] shrink-0"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.05}
          >
            <h2 className="font-sans text-navy leading-[0.95] tracking-[-0.02em] text-[clamp(36px,4.5vw,60px)]">
              The Power{" "}
              <span className="block italic text-verified">
                To Influence.
              </span>
            </h2>
          </motion.div>

          {/* Right — three pillar cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="bg-cream hover:bg-white transition-colors duration-300 p-8 lg:p-10 flex flex-col items-center text-center gap-5"
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.12 + 0.12}
              >
                {/* Icon */}
                <Image
                  src={pillar.icon}
                  alt={pillar.iconAlt}
                  width={pillar.iconW}
                  height={pillar.iconH}
                  className="w-[56px] h-auto"
                />

                {/* Title */}
                <h3 className="font-sans font-bold text-navy text-[clamp(15px,1.4vw,18px)] leading-[1.35]">
                  {pillar.title}
                </h3>

                {/* Body */}
                <p className="font-sans text-[14px] leading-[1.7] text-navy/60">
                  {pillar.body}
                </p>

                {/* Tagline */}
                <p className="font-sans text-[14px] leading-[1.7] font-semibold text-navy">
                  {pillar.tagline}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
