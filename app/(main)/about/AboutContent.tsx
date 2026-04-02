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

const missionStatements: { text: string; highlight: string; color: string }[] = [
  { text: "Building trust through ", highlight: "transparency.", color: "text-magenta" },
  { text: "Protecting one another with sound ", highlight: "insurability.", color: "text-verified" },
  { text: "Doing more to ", highlight: "get workers home safely.", color: "text-cs-teal" },
];

const legalDefs = [
  {
    label: "Due Diligence",
    content: (
      <>
        {"\u201C"}Due diligence is the <strong className="text-navy font-bold">level of judgement, care, prudence, determination, and activity that a person would reasonably be expected to do</strong> under particular circumstances.{"\u201D"}
      </>
    ),
    source: "Canadian Center for Occupational Health and Safety",
    href: "https://www.ccohs.ca/oshanswers/legisl/legislation/diligence.html#section-1-hdr",
  },
  {
    label: "Criminal Liability",
    content: (
      <>
        <span className="text-navy font-semibold">217.1</span> Every one who undertakes, or has the authority, to direct how another person does work or performs a task is under a <strong className="text-navy font-bold">legal duty to take reasonable steps to prevent bodily harm</strong> to that person, or any other person, arising from that work or task.
      </>
    ),
    source: "Bill C-45, Criminal Code of Canada",
    href: "https://www.ccohs.ca/oshanswers/legisl/billc45.html#section-1-hdr",
  },
  {
    label: "Joint & Several Liability",
    content: (
      <>
        {"\u201C"}When an innocent victim is harmed through the fault or neglect of several wrongdoers, the victim can collect his or her damage award from one or all of the wrongdoers. If one of the wrongdoers is 50% responsible for the loss,...but is unable to pay the damages, <strong className="text-navy font-bold">the innocent victim can collect the entire loss from the remaining wrongdoers</strong>, who are {"\u2018"}jointly{"\u2019"} liable to the plaintiff for the loss.{"\u201D"}
      </>
    ),
    source: "Ontario Trial Lawyers Association",
    href: "https://www.otla.com/?pg=JointandSeveralLiability",
  },
];

const takeaways: { title: string; body: React.ReactNode }[] = [
  {
    title: "Control is Key",
    body: <>Hiring Clients must <strong className="text-navy font-bold">be cautious</strong> when exercising control over a worksite when a third-party contractor is in charge. Actively intervening in day-to-day operations can expose a hiring client to potential liability.</>,
  },
  {
    title: "Delegation and Expertise",
    body: <>Hiring Clients should <strong className="text-navy font-bold">ensure</strong> that they hire experienced contractors with proven safety records, particularly when they lack the in-house expertise to manage projects safely.</>,
  },
  {
    title: "Contractor Evaluation",
    body: <>Hiring Clients should <strong className="text-navy font-bold">verify</strong> safety training, track records, and prior experience before entering into any agreements. Thoroughly vetting a contractor&apos;s ability to comply with health and safety regulations is essential.</>,
  },
  {
    title: "Ongoing Monitoring",
    body: <>Hiring Clients cannot completely relinquish responsibility. Regular monitoring is crucial. Progress meetings and communication regarding safety concerns can help demonstrate that an employer took <strong className="text-navy font-bold">reasonable actions</strong>.</>,
  },
  {
    title: "Documentation Matters",
    body: <>Hiring Clients should <strong className="text-navy font-bold">document</strong> all steps taken to ensure workplace safety, including contractor evaluations, meeting minutes, and any other relevant communication regarding safety protocols.</>,
  },
];

export default function AboutContent() {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-60px" });
  const videoRef = useRef(null);
  const videoInView = useInView(videoRef, { once: true, margin: "-60px" });
  const legalRef = useRef(null);
  const legalInView = useInView(legalRef, { once: true, margin: "-60px" });
  const takeawayRef = useRef(null);
  const takeawayInView = useInView(takeawayRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-cream">

      {/* ── Founder Video ── */}
      <div ref={videoRef} className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 pt-24 lg:pt-36 pb-20 lg:pb-28">
        <motion.p
          className="text-[12px] uppercase tracking-[0.25em] text-verified font-sans mb-12"
          variants={fadeUp}
          initial="hidden"
          animate={videoInView ? "visible" : "hidden"}
          custom={0}
        >
          A Message from Our Founder
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={videoInView ? "visible" : "hidden"}
          custom={0.15}
        >
          <VideoPlaceholder
            name="Fred Persia"
            title="Founder, ComplianceSync"
            quote="We are Due Diligence at its best. We guarantee it."
            youtubeId="pBFNer7vilg"
          />
        </motion.div>
      </div>

      {/* ── Mission Statements ── */}
      <div ref={missionRef} className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 pb-24 lg:pb-32">
        <motion.div
          className="mb-10"
          variants={fadeUp}
          initial="hidden"
          animate={missionInView ? "visible" : "hidden"}
          custom={0}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-navy font-sans font-bold shrink-0">
            Our Mission
          </p>
        </motion.div>

        <div className="flex flex-col gap-2 max-w-[780px]">
          {missionStatements.map((statement, i) => (
            <motion.p
              key={i}
              className="font-display text-navy text-[clamp(22px,2.8vw,36px)] leading-[1.25] tracking-[-0.01em]"
              variants={fadeUp}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              custom={i * 0.12 + 0.1}
            >
              {statement.text}
              <span className={statement.color}>{statement.highlight}</span>
            </motion.p>
          ))}
        </div>
      </div>

      {/* ── Legal Maxim — Navy Bar ── */}
      <div className="bg-navy border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-14 lg:py-16">
          <p className="font-display text-cream text-[clamp(22px,2.8vw,36px)] leading-[1.25] tracking-[-0.01em] italic max-w-[900px]">
            &ldquo;Ignorantia juris non excusat&rdquo; &mdash; Ignorance of the law excuses no one.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cs-blue" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-mist font-sans">
              Ancient Roman Legal Maxim
            </span>
          </div>
        </div>
      </div>

      {/* ── Legal Definitions ── */}
      <div ref={legalRef} className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-24 lg:py-32">
        <div className="flex flex-col gap-0">
          {legalDefs.map((def, i) => (
            <motion.div
              key={i}
              className="flex gap-4 md:gap-6 lg:gap-10 py-10 border-t border-black/8 last:border-b"
              variants={fadeUp}
              initial="hidden"
              animate={legalInView ? "visible" : "hidden"}
              custom={i * 0.12 + 0.1}
            >
              <span className="font-display text-verified text-[clamp(28px,3vw,44px)] leading-none tracking-[-0.03em] shrink-0 w-12 lg:w-16 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-3 max-w-[780px]">
                <h3 className="font-display text-navy text-[clamp(18px,2vw,24px)] leading-[1.2] tracking-[-0.01em]">
                  {def.label}
                </h3>
                <p className="text-navy/55 font-sans text-[15px] leading-[1.85] italic">
                  {def.content}
                </p>
                <a
                  href={def.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-mist font-sans hover:text-cs-blue transition-colors duration-200 w-fit"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cs-blue" />
                  {def.source}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Landmark Ruling — Navy Bar ── */}
      <div className="bg-navy border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-14 lg:py-16">
          <p className="font-display text-cream text-[clamp(22px,2.8vw,36px)] leading-[1.25] tracking-[-0.01em] max-w-[900px]">
            Landmark Ruling &mdash; Supreme Court of Canada
          </p>
          <a
            href="https://decisions.scc-csc.ca/scc-csc/scc-csc/en/item/20150/index.do"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-4 text-cream/70 font-sans text-[clamp(16px,1.8vw,22px)] hover:text-cream transition-colors duration-200 underline underline-offset-4 decoration-cream/30"
          >
            R. v. Greater Sudbury (City)
          </a>
        </div>
      </div>

      {/* ── Takeaways ── */}
      <div ref={takeawayRef} className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-24 lg:py-32">
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={takeawayInView ? "visible" : "hidden"}
          custom={0}
        >
          <p className="text-navy/60 font-sans text-lg leading-[1.75] max-w-[700px]">
            Takeaways for Hiring Clients working with Third-Party Contractors
          </p>
        </motion.div>

        {/* Numbered takeaways */}
        <div className="flex flex-col gap-0">
          {takeaways.map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-4 md:gap-6 lg:gap-10 py-10 border-t border-black/8 last:border-b"
              variants={fadeUp}
              initial="hidden"
              animate={takeawayInView ? "visible" : "hidden"}
              custom={i * 0.1 + 0.15}
            >
              <span className="font-display text-verified text-[clamp(28px,3vw,44px)] leading-none tracking-[-0.03em] shrink-0 w-12 lg:w-16 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>
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
