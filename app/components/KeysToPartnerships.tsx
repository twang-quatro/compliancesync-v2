"use client";

import { useRef } from "react";
import Image from "next/image";
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


/* ── Mesh generator ──────────────────────────────── */
function generateMesh(
  seed: number,
  count: number,
  w: number,
  h: number,
  maxDist: number
) {
  let s = seed;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };

  const points: [number, number][] = [];
  for (let i = 0; i < count; i++) {
    points.push([
      Math.round(rand() * w * 10) / 10,
      Math.round(rand() * h * 10) / 10,
    ]);
  }

  const lines: [number, number, number, number][] = [];
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      const dx = points[i][0] - points[j][0];
      const dy = points[i][1] - points[j][1];
      if (dx * dx + dy * dy < maxDist * maxDist) {
        lines.push([points[i][0], points[i][1], points[j][0], points[j][1]]);
      }
    }
  }

  return { points, lines };
}

const { points: meshPoints, lines: meshLines } = generateMesh(
  42,
  320,
  1600,
  900,
  120
);

/* ── Component ───────────────────────────────────── */
export default function KeysToPartnerships() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-neutral-300 py-14 lg:py-20 relative overflow-hidden"
    >
      {/* Organic network mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
        >
          {meshLines.map(([x1, y1, x2, y2], i) => (
            <line
              key={`l${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="white"
              strokeWidth="0.8"
              opacity="0.35"
            />
          ))}
          {meshPoints.map(([x, y], i) => (
            <circle
              key={`p${i}`}
              cx={x}
              cy={y}
              r="3"
              fill="white"
              opacity="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 relative z-10">
        {/* Side-by-side: SVG left, text right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left — quadrant graphic */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
          >
            <Image
              src="/images/Diagram.png"
              alt="Four keys to trusted partnerships: easy to work with, always transparent, protect each other, think long term"
              width={600}
              height={600}
              className="w-full max-w-[420px]"
            />
          </motion.div>

          {/* Right — text */}
          <motion.div
            className="lg:w-1/2"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-navy/60 font-sans mb-6">
              100% Transparency, 100% of the Time
            </p>
            <h2 className="font-sans text-navy leading-[0.95] tracking-[-0.02em] text-[clamp(32px,4.5vw,56px)]">
              The Keys to{" "}
              <span className="block italic text-cs-blue font-bold">
                Trusted Partnerships
              </span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
