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

const statements: { text: string; highlight: string; color: string }[] = [
  { text: "Protecting one another with sound ", highlight: "insurability.", color: "text-verified" },
  { text: "Doing more to ", highlight: "get workers home safely.", color: "text-cs-teal" },
];

export default function MissionStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 pt-28 lg:pt-40 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column — label + accent line */}
          <motion.div
            className="lg:col-span-3 flex flex-col justify-between gap-8"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-mist font-sans">
              Our Mission
            </p>
            <div className="hidden lg:block w-px h-32 bg-gradient-to-b from-cs-blue/40 to-transparent" />
          </motion.div>

          {/* Right column — headline + statements */}
          <motion.div
            className="lg:col-span-9"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.15}
          >
            <h2 className="font-display text-navy text-[clamp(32px,4vw,58px)] leading-[1.1] tracking-[-0.02em] max-w-[780px]">
              Building trust through{" "}
              <span className="text-magenta italic">transparency.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20">
        <div className="h-px bg-black/8" />
      </div>

      {/* Mission statements */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-24 lg:py-36">
        <div className="flex flex-col gap-6 max-w-[780px]">
          {statements.map((statement, i) => (
            <motion.p
              key={i}
              className="font-display text-navy text-[clamp(22px,2.8vw,36px)] leading-[1.25] tracking-[-0.01em]"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.12 + 0.25}
            >
              {statement.text}
              <span className={statement.color}>{statement.highlight}</span>
            </motion.p>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20">
        <div className="h-px bg-black/8" />
      </div>

      {/* Legal maxim callout */}
      <motion.div
        className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-20 lg:py-28"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0.6}
      >
        <div className="border-l-2 border-cs-blue pl-8 lg:pl-12 max-w-[780px]">
          <p className="font-display text-navy text-[clamp(24px,3vw,40px)] leading-[1.15] tracking-[-0.015em] italic">
            &ldquo;Ignorantia juris non excusat&rdquo;
          </p>
          <p className="text-navy/60 font-sans text-lg leading-[1.75] mt-4">
            Ignorance of the law excuses no one.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cs-blue" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-mist font-sans">
              Ancient Roman Legal Maxim
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
