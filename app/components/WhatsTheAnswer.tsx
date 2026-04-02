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

const takeaways = [
  {
    title: "Control is Key",
    body: "Hiring Clients must be cautious when exercising control over a worksite when a third-party contractor is in charge. Actively intervening in day-to-day operations can expose a hiring client to potential liability.",
  },
  {
    title: "Delegation and Expertise",
    body: "Hiring Clients should ensure that they hire experienced contractors with proven safety records, particularly when they lack the in-house expertise to manage projects safely.",
  },
  {
    title: "Contractor Evaluation",
    body: "Hiring Clients should verify safety training, track records, and prior experience before entering into any agreements. Thoroughly vetting a contractor\u2019s ability to comply with health and safety regulations is essential.",
  },
  {
    title: "Ongoing Monitoring",
    body: "Hiring Clients cannot completely relinquish responsibility. Regular monitoring is crucial. Progress meetings and communication regarding safety concerns can help demonstrate that an employer took reasonable actions.",
  },
  {
    title: "Documentation Matters",
    body: "Hiring Clients should document all steps taken to ensure workplace safety, including contractor evaluations, meeting minutes, and any other relevant communication regarding safety protocols.",
  },
];

export default function WhatsTheAnswer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream border-t border-black/8">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          className="mb-10 lg:mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-mist font-sans mb-8">
            What&rsquo;s the Answer?
          </p>
          <p className="text-navy/60 font-sans text-lg leading-[1.75] max-w-[700px]">
            Takeaways for Hiring Clients working with Third-Party Contractors
          </p>
        </motion.div>

        {/* Landmark Ruling banner */}
        <motion.div
          className="mb-16 lg:mb-20"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.08}
        >
          <div className="bg-cs-blue/8 border border-cs-blue/15 px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 max-w-[700px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-cs-blue font-sans font-bold">
              Landmark Ruling — Supreme Court of Canada
            </span>
            <a
              href="https://decisions.scc-csc.ca/scc-csc/scc-csc/en/item/20150/index.do"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-sans text-navy hover:text-cs-blue transition-colors duration-200 underline underline-offset-2"
            >
              R. v. Greater Sudbury (City)
            </a>
          </div>
        </motion.div>

        {/* Numbered list */}
        <div className="flex flex-col gap-0">
          {takeaways.map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-4 md:gap-6 lg:gap-10 py-10 border-t border-black/8 last:border-b"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1 + 0.15}
            >
              {/* Number */}
              <span className="font-display text-navy text-[clamp(28px,3vw,44px)] leading-none tracking-[-0.03em] shrink-0 w-12 lg:w-16 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-3 max-w-[780px]">
                <h3 className="font-display text-navy text-[clamp(18px,2vw,24px)] leading-[1.2] tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-navy/55 font-sans text-[15px] leading-[1.85]">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
