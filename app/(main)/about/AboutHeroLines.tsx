"use client";

import { motion } from "framer-motion";

const heroLines = [
  "Risk intelligence for businesses that work together and share liability.",
  "We deliver secure access to source verified credentials when you need them.",
  "We make it easy to stay connected, build trust and influence the best outcome.",
  "We help you do more to get the people we depend on home safe everyday.",
  "We are due diligence at it\u2019s best. We guarantee it.",
];

export default function AboutHeroLines() {
  return (
    <div className="flex flex-col gap-1 max-w-[780px]">
      {heroLines.map((line, i) => (
        <motion.p
          key={i}
          className="text-navy/80 font-sans text-[clamp(15px,1.4vw,18px)] leading-[1.7]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.5 + i * 1,
          }}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
}
