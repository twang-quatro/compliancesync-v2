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

export default function DueDiligenceDefence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-24 lg:py-32">
        {/* Block 1 — Due Diligence */}
        <motion.div
          className="mb-20 lg:mb-28"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-mist font-sans mb-10">
            Due Diligence
          </p>

          <div className="border-l-2 border-cs-blue pl-5 md:pl-8 lg:pl-12 max-w-[860px]">
            <blockquote className="font-display text-navy text-[clamp(20px,2.5vw,30px)] leading-[1.35] tracking-[-0.01em]">
              &ldquo;Due diligence is the level of judgement, care, prudence,
              determination, and activity that a person would reasonably be
              expected to do under particular circumstances.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cs-blue" />
              <a
                href="https://www.ccohs.ca/oshanswers/legisl/legislation/diligence.html#section-1-hdr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-mist font-sans hover:text-cs-blue transition-colors duration-200"
              >
                Canadian Center for Occupational Health and Safety
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-black/8 mb-20 lg:mb-28" />

        {/* Block 2 — Criminal Liability (Bill C-45) */}
        <motion.div
          className="mb-20 lg:mb-28"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.15}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-mist font-sans mb-10">
            Criminal Liability
          </p>

          <div className="border-l-2 border-cs-blue pl-5 md:pl-8 lg:pl-12 max-w-[860px]">
            <p className="text-navy/60 font-sans text-[15px] leading-[1.85] max-w-[780px]">
              <span className="text-navy font-semibold">217.1</span> Every
              one who undertakes, or has the authority, to direct how another
              person does work or performs a task is under a legal duty to take
              reasonable steps to prevent bodily harm to that person, or any
              other person, arising from that work or task.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cs-blue" />
              <a
                href="https://www.ccohs.ca/oshanswers/legisl/billc45.html#section-1-hdr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-mist font-sans hover:text-cs-blue transition-colors duration-200"
              >
                Bill C-45, Criminal Code of Canada
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-black/8 mb-20 lg:mb-28" />

        {/* Block 3 — Joint & Several Liability */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.3}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-mist font-sans mb-10">
            Joint &amp; Several Liability
          </p>

          <div className="border-l-2 border-cs-blue pl-5 md:pl-8 lg:pl-12 max-w-[860px]">
            <blockquote className="font-display text-navy text-[clamp(20px,2.5vw,30px)] leading-[1.35] tracking-[-0.01em]">
              &ldquo;When an innocent victim is harmed through the fault or
              neglect of several wrongdoers, the victim can collect his or her
              damage award from one or all of the wrongdoers. If one of the
              wrongdoers is 50% responsible for the loss,...but is unable to pay
              the damages, the innocent victim can collect the entire loss from
              the remaining wrongdoers, who are &lsquo;jointly&rsquo; liable to
              the plaintiff for the loss.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cs-blue" />
              <a
                href="https://www.otla.com/?pg=JointandSeveralLiability"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-mist font-sans hover:text-cs-blue transition-colors duration-200"
              >
                Ontario Trial Lawyers Association
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
