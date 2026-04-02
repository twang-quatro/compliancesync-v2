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

const props = [
  {
    title: "Smart & Simple",
    accent: "bg-cs-blue",
    lines: ["User Friendly", "Real-Time Insight"],
  },
  {
    title: "Fast & Easy",
    accent: "bg-verified",
    lines: ["15 m Registration / Same-Day Verification", "Real-Human Support"],
  },
  {
    title: "Time & Money",
    accent: "bg-magenta",
    lines: ["Affordable for Contractors", "Free Client Access"],
  },
  {
    title: "Win & Win",
    accent: "bg-navy",
    lines: ["Risk \u2192 Opportunity", "Need \u2192 Fulfillment"],
  },
];

export default function ValueProps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-16 lg:py-24">
        {/* Section title */}
        <motion.p
          className="font-sans text-mist text-[clamp(16px,1.6vw,20px)] italic leading-[1.5] tracking-[-0.01em] mb-10 lg:mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          Five Great Reasons&hellip;
        </motion.p>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
          {props.map((prop, i) => (
            <motion.div
              key={prop.title}
              className="bg-cream hover:bg-white transition-colors duration-300 p-8 lg:p-10 flex flex-col gap-5 relative overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.12 + 0.1}
            >
              {/* Accent bar + title */}
              <div className="flex items-center gap-4">
                <div className={`w-8 h-1 rounded-full ${prop.accent}`} />
                <h3 className="font-display text-navy text-[clamp(22px,2.2vw,30px)] leading-[1.05] tracking-[-0.02em] font-bold">
                  {prop.title}
                </h3>
              </div>

              {/* Lines — increased font size */}
              <div className="flex flex-col gap-3 pl-12">
                {prop.lines.map((line, j) => (
                  <p
                    key={j}
                    className="text-navy/60 font-sans text-[17px] lg:text-[19px] leading-[1.7]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Best Reason — dramatic centered callout */}
        <motion.div
          className="mt-16 lg:mt-20 text-center"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.6}
        >
          <p className="font-sans text-mist text-[clamp(16px,1.6vw,20px)] leading-[1.5] tracking-[-0.01em] mb-5">
            Best reason of all
          </p>
          <h2 className="font-display text-cs-green text-[clamp(30px,4.5vw,60px)] leading-[1.0] tracking-[-0.025em] font-bold italic">
            Getting your workers home safe everyday!
          </h2>
          <div className="mx-auto mt-6 w-16 h-1 rounded-full bg-verified" />
        </motion.div>
      </div>
    </section>
  );
}
