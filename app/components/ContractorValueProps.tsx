"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import VideoPlaceholder from "./VideoPlaceholder";

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

const valueProps: { index: string; title: string; body: React.ReactNode }[] = [
  {
    index: "01",
    title: "Easy",
    body: <><strong className="text-navy font-bold">Registration is free, fast and easy</strong>; verification is fast and easy, your annual renewal is faster and easier. It&apos;s that easy.</>,
  },
  {
    index: "02",
    title: "Efficient",
    body: <>Manage <em>all</em> your <strong className="text-navy font-bold">business and worker qualifications</strong> in one place. Save time and effort by automating redundant tasks.</>,
  },
  {
    index: "03",
    title: "Convenient",
    body: <>Share your business credentials with just one click. Share with <strong className="text-navy font-bold">every client you work with</strong>. We take care of the rest.</>,
  },
  {
    index: "04",
    title: "Opportunity",
    body: <>We keep you qualified and visible for opportunities with great clients and make it easy to <strong className="text-navy font-bold">qualify for new jobs</strong>.</>,
  },
  {
    index: "05",
    title: "Promotion",
    body: <>Transparency to your verified business credentials and worker qualifications stand out for your commitment to best practices and safety.</>,
  },
  {
    index: "06",
    title: "Value",
    body: <>Your verified subscription is <strong className="text-navy font-bold">affordable</strong> and tailored for your business- with <strong className="text-navy font-bold">unlimited</strong> client connections.</>,
  },
  {
    index: "07",
    title: "Discretion",
    body: <>We limit sourcing to Public Registries, limit personal information, store no financial data and ensure user integrity. <strong className="text-navy font-bold">YOU control access to your information</strong>.</>,
  },
  {
    index: "08",
    title: "Trust",
    body: <><strong className="text-navy font-bold">We operate at arms length</strong> from Hiring Clients. We do not market, advertise, data mine or sell information. We are working for YOU.</>,
  },
  {
    index: "09",
    title: "Universal",
    body: <>We serve all industries and promote your qualifications, accreditations and professional affiliations to all your Clients.</>,
  },
  {
    index: "10",
    title: "Support",
    body: <>We are here to help. If you need <em>anything</em> just call us at 1-844-400-4484 and press 0.</>,
  },
  {
    index: "11",
    title: "Guarantee",
    body: <>We ensure you get work with our clients, if you don&apos;t then your next Subscription is free.</>,
  },
];

export default function ContractorValueProps() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-cream">

      {/* Section Hero */}
      <div ref={heroRef} className="border-t border-black/8">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 pt-24 lg:pt-36 pb-20 lg:pb-28">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <motion.p
                className="text-[10px] uppercase tracking-[0.25em] text-verified font-sans"
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                custom={0}
              >
                We get you to work
              </motion.p>
              <motion.h2
                className="font-display text-navy text-[clamp(38px,5vw,72px)] leading-[0.95] tracking-[-0.025em]"
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                custom={0.12}
              >
                Your advantage,{" "}
                <span className="text-verified italic">verified.</span>
              </motion.h2>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              custom={0.25}
            >
              <VideoPlaceholder
                name="Dave Forbes"
                title="COO, ComplianceSync"
                quote="Your qualifications speak for themselves. Let's make them visible."
                youtubeId="hweqHCYRQlo"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* 11 Value Propositions */}
      <div ref={listRef} className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-24 lg:py-36">
        <motion.div
          className="flex items-center gap-6 mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={listInView ? "visible" : "hidden"}
          custom={0}
        >
          <p className="text-[13px] uppercase tracking-[0.25em] text-mist font-sans shrink-0">
            Eleven Reasons to Join the Community
          </p>
          <div className="h-px flex-1 bg-black/8" />
        </motion.div>

        <div className="flex flex-col gap-0">
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.index}
              className="flex gap-4 md:gap-6 lg:gap-10 py-10 border-t border-black/8 last:border-b"
              variants={fadeUp}
              initial="hidden"
              animate={listInView ? "visible" : "hidden"}
              custom={i * 0.08 + 0.1}
            >
              <span className="font-display text-verified text-[clamp(28px,3vw,44px)] leading-none tracking-[-0.03em] shrink-0 w-12 lg:w-16 text-right">
                {prop.index}
              </span>
              <div className="flex flex-col gap-3 max-w-[780px]">
                <h3 className="font-display text-navy text-[clamp(18px,2vw,24px)] leading-[1.2] tracking-[-0.01em]">
                  {prop.title}
                </h3>
                <p className="text-navy/55 font-sans text-[15px] leading-[1.85]">
                  {prop.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
