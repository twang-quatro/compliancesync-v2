"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 240131,
    prefix: "",
    unit: "Claims",
    descriptor:
      "Were registered with the Ontario Workplace Safety and Insurance Board in 2023",
  },
  {
    value: 1057,
    prefix: "",
    unit: "Deaths",
    descriptor:
      "Were recorded in 2023 due to workplace injuries in Canada",
  },
  {
    value: 333791,
    prefix: "",
    unit: "Years",
    descriptor:
      "Of potential life were lost due to workplace injuries in 2018",
  },
  {
    value: 294,
    prefix: "$",
    unit: "Billion",
    descriptor:
      "Is the estimated total annual economic burden due to workplace injuries in Canada",
    decimal: true,
  },
];

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

function StatItem({
  stat,
  inView,
  delay,
}: {
  stat: (typeof stats)[0];
  inView: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.value, inView);
  const displayValue = (stat as { decimal?: boolean }).decimal
    ? (count / 10).toFixed(1)
    : count.toLocaleString();

  return (
    <motion.div
      className="flex flex-col gap-4 py-8 lg:py-0 border-b lg:border-b-0 lg:border-r border-black/8 last:border-0 px-6 lg:px-10 first:lg:pl-0 last:lg:pr-0"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay,
      }}
    >
      <div className="flex items-baseline gap-0">
        {stat.prefix && (
          <span className="font-display text-navy text-[clamp(36px,4.5vw,64px)] leading-none tracking-[-0.03em]">
            {stat.prefix}
          </span>
        )}
        <span className="font-display text-navy text-[clamp(36px,4.5vw,64px)] leading-none tracking-[-0.03em]">
          {displayValue}
        </span>
      </div>

      <h3 className="font-display text-navy text-[clamp(20px,2.2vw,32px)] leading-[1.1] font-bold tracking-[-0.01em]">
        {stat.unit}
      </h3>

      <p className="text-navy/50 font-sans text-sm leading-[1.7] max-w-[240px]">
        {stat.descriptor}
      </p>
    </motion.div>
  );
}

export default function TrustStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-16 lg:py-24">
        {/* Header row */}
        <motion.div
          className="flex items-center justify-between gap-6 mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-mist font-sans shrink-0">
            By the Numbers
          </p>
          <div className="h-px flex-1 bg-black/8" />
          <p className="text-[10px] uppercase tracking-[0.25em] text-mist font-sans shrink-0">
            Source: Government of Canada
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.unit}
              stat={stat}
              inView={inView}
              delay={i * 0.12 + 0.1}
            />
          ))}
        </div>

        {/* Quote */}
        <motion.div
          className="mt-14 lg:mt-20 pt-10 border-t border-black/8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            delay: 0.6,
          }}
        >
          <p className="font-display text-navy text-[clamp(20px,2.5vw,32px)] leading-[1.2] tracking-[-0.01em] max-w-[640px] italic">
            &ldquo;The best Insurance Policy is the one you never have to
            use.&rdquo;
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-verified" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-mist font-sans">
              Compliance Sync Incorporated
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
