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
    title: "Intelligent",
    body: <>One-click onboarding &rarr; qualification &rarr; notification &rarr; approval &rarr; ongoing validation. <strong className="text-navy font-bold">We document your Duty of Care</strong> from need to fulfillment.</>,
  },
  {
    index: "02",
    title: "Reliability",
    body: <>We verify business credentials <strong className="text-navy font-bold">at the source</strong> to provide 100% insurability. If we say they&apos;re compliant then they&apos;re compliant. <strong className="text-navy font-bold">We guarantee it.</strong></>,
  },
  {
    index: "03",
    title: "Continuity",
    body: <>We monitor your contractor&apos;s compliance requirements <strong className="text-navy font-bold">365 days of the year.</strong></>,
  },
  {
    index: "04",
    title: "Visibility",
    body: <>Workers represent risk. We ask contractors to <strong className="text-navy font-bold">identify all workers going on site,</strong> ensure they have current training, and <strong className="text-navy font-bold">verify mandatory trade and license requirements</strong> where applicable.</>,
  },
  {
    index: "05",
    title: "Real-time",
    body: <><strong className="text-navy font-bold">Ubiquitous access</strong> to verified documentation of every contractor&apos;s qualifications whenever, wherever you need it.</>,
  },
  {
    index: "06",
    title: "Transparency",
    body: <><strong className="text-navy font-bold">Every contractor, every project, every worker, every record</strong> for <strong className="text-navy font-bold">everyone in your organization</strong> that&apos;s working with contractors.</>,
  },
  {
    index: "07",
    title: "Automatic",
    body: <>We track every records&apos; expiry dates, so you don&apos;t have to. If there&apos;s a problem <strong className="text-navy font-bold">we deal with it</strong>. If it becomes <em>your</em> problem, <strong className="text-navy font-bold">we&apos;ll let you know</strong>.</>,
  },
  {
    index: "08",
    title: "Informed",
    body: <>We give you the tools to confidently manage contractors to <strong className="text-navy font-bold">meet <em>your</em> standards</strong>; before work begins <em>and</em> <strong className="text-navy font-bold">throughout your engagement</strong>.</>,
  },
  {
    index: "09",
    title: "Mitigation",
    body: <>We give you the <strong className="text-navy font-bold">power to influence</strong> better outcomes. Safe workers are good workers. Everyone is happier when the job is done right.</>,
  },
  {
    index: "10",
    title: "Success",
    body: <>Ongoing validation of your entire organizations&apos; exposure to risk, with intuitive dashboards, regular reporting and confidential evaluation.</>,
  },
  {
    index: "11",
    title: "No excuses",
    body: <>Access for qualified Hiring Clients is <strong className="text-navy font-bold">FREE</strong>. We&apos;ll help you every step of the way. Its FAST. It&apos;s EASY. No catch. No obligations. No nonsense.</>,
  },
];

export default function ClientValueProps() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-cream">

      {/* Section Hero */}
      <div ref={heroRef} className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 pt-24 lg:pt-36 pb-20 lg:pb-28">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <motion.p
              className="text-[11px] uppercase tracking-[0.25em] text-verified font-sans"
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              custom={0}
            >
              We protect you
            </motion.p>
            <motion.h2
              className="font-display text-navy text-[clamp(38px,5vw,72px)] leading-[0.95] tracking-[-0.025em]"
              variants={fadeUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              custom={0.12}
            >
              Let&rsquo;s turn it up to{" "}
              <span className="text-magenta italic">eleven!</span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            custom={0.25}
          >
            <VideoPlaceholder
              name="Fred Persia"
              title="CEO, ComplianceSync"
              quote="The best insurance policy is the one you never have to look for."
              youtubeId="NpRwIOI4jlM"
            />
          </motion.div>
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
            Eleven Reasons to Partner with Us
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
