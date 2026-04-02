"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import VideoPlaceholder from "../../components/VideoPlaceholder";

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

export default function FoundersVideo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-cream border-t border-black/8">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-24 lg:py-32">
        <motion.p
          className="text-[10px] uppercase tracking-[0.25em] text-mist font-sans mb-12"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          A Message from Our Founder
        </motion.p>

        <VideoPlaceholder
          name="Fred Persia"
          title="Founder, ComplianceSync"
          quote="We are Due Diligence at its best. We guarantee it."
          youtubeId="pBFNer7vilg"
        />
      </div>
    </section>
  );
}
