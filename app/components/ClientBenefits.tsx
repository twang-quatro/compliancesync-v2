"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function ClientBenefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-navy border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <motion.div
          className="flex flex-col gap-4 max-w-[620px]"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <p className="font-display text-cream text-[clamp(20px,2.5vw,34px)] leading-[1.2] tracking-[-0.01em] italic">
            Ignorance of the law excuses no one.
          </p>
          <p className="font-display text-cream/70 text-[clamp(18px,2.2vw,28px)] leading-[1.3] tracking-[-0.01em]">
            If something were to happen...
          </p>
          <p className="font-display text-cream/70 text-[clamp(18px,2.2vw,28px)] leading-[1.3] tracking-[-0.01em]">
            would your actions hold up in court?
          </p>
          <p className="text-verified font-sans font-bold text-[15px] uppercase tracking-[0.15em] mt-2">
            Let&apos;s get you protected
          </p>
        </motion.div>
        <Link
          href="https://www.compliancesync.com/members/Registration/CreateAccount.aspx"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-magenta text-cream text-[11px] uppercase tracking-[0.18em] font-sans hover:opacity-90 transition-opacity duration-300 shrink-0"
        >
          Start Today
        </Link>
      </div>
    </section>
  );
}
