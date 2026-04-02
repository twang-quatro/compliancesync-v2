"use client";

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

export default function AboutBenefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-navy border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-14 lg:py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <p className="font-display text-cream text-[clamp(22px,2.8vw,36px)] leading-[1.25] tracking-[-0.01em] italic max-w-[900px]">
            &ldquo;The best insurance policy is the one you never have to look for.&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cs-blue" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-mist font-sans">
              Compliance Sync
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
