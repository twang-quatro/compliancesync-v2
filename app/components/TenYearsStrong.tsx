"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const chapters = [
  {
    number: "01",
    label: "The Scale of the Problem",
    headline: "The Thirty Billion Dollar Problem.",
    bgHex: "#0d1e2f",
    headColor: "text-cream",
    accentColor: "text-cs-blue",
    bodyColor: "text-mist",
    points: [
      {
        stat: "$29.4B",
        copy: "Canada's annual economic burden from workplace injuries — $20.4B in direct healthcare costs, $9B in lost productivity from disability, hospitalization, and premature death.",
      },
      {
        stat: "$80M",
        copy: "Lost to the Canadian economy every single day. In 2023, 1,057 Canadians died at work — and experts estimate up to half of all injuries go unreported.",
      },
      {
        stat: "240,131",
        copy: "WSIB claims registered in Ontario alone in a single year — 179,024 allowed. The burden on organizations and the legal system is not slowing down.",
      },
    ],
  },
  {
    number: "02",
    label: "Legal Liability",
    headline: "Whose Problem is it?",
    bgHex: "#162e44",
    headColor: "text-cream",
    accentColor: "text-cs-blue",
    bodyColor: "text-mist",
    points: [
      {
        stat: "Bill C-45",
        copy: "The Criminal Code places a legal duty on anyone who directs how another person works — including hiring clients. It doesn't matter if a contractor is nominally \"in charge.\"",
      },
      {
        stat: "Joint Liability",
        copy: "Under joint and several liability, you can be held responsible for 100% of damages — even if you were only 50% at fault and the other party can't pay.",
      },
      {
        stat: "Supreme Court",
        copy: "Canada's highest court dismissed an employer's due diligence defence. The City was found liable for breaching its obligations under the Occupational Health and Safety Act.",
      },
    ],
  },
  {
    number: "03",
    label: "The Trend",
    headline: "What's Happened?",
    bgHex: "#0070b3",
    headColor: "text-white",
    accentColor: "text-white",
    bodyColor: "text-white/70",
    points: [
      {
        stat: "+25%",
        copy: "Workplace fatalities have increased 25% over the past 10 years. The regulatory environment is not softening — it's tightening with every passing year.",
      },
      {
        stat: "+50%",
        copy: "Injury claims have surged 50% since 2015. More claims means more scrutiny, more litigation, and more exposure for organizations without documented due diligence.",
      },
      {
        stat: "It's getting worse.",
        copy: "The window to get ahead of this is open — but it closes with every incident. Organizations that act now protect themselves from the wave that's already building.",
      },
    ],
  },
  {
    number: "04",
    label: "The Answer",
    headline: "What's the Answer?",
    bgHex: "#4a6d80",
    headColor: "text-white",
    accentColor: "text-white",
    bodyColor: "text-white/70",
    points: [
      {
        stat: "Control = Liability",
        copy: "If you actively intervene in contractor operations — even briefly — you may be legally exposed. Involvement, not just authority, is what courts look at.",
      },
      {
        stat: "Delegate with Evidence",
        copy: "Hiring a competent, verified contractor with a proven safety record is your primary due diligence defence. Delegation must be documented — and monitoring must continue.",
      },
      {
        stat: "Document Everything",
        copy: "Every contractor evaluation, meeting minute, and safety communication is legal evidence. Organizations that document their process are the ones that survive scrutiny.",
      },
    ],
  },
  {
    number: "05",
    label: "Why ComplianceSync",
    headline: "Why Compliance Sync?",
    bgHex: "#5a9a1a",
    headColor: "text-white",
    accentColor: "text-white",
    bodyColor: "text-white/75",
    points: [
      {
        stat: "Verified at Source",
        copy: "Business registration, WCB eligibility, insurance certificates, licensing — verified directly, not self-reported. The difference between accreditation and real accountability.",
      },
      {
        stat: "95% Efficiency",
        copy: "We automate and monitor your contractor vetting program with a 24-hour turnaround. Eliminate 95% of the manual work — and stay continuously compliant.",
      },
      {
        stat: "Free + Guaranteed",
        copy: "Free access for government, not-for-profit, and corporate hiring clients. Backed by $2 Million in E&O and Cyber Security liability coverage — guaranteed, not implied.",
      },
    ],
  },
  {
    number: "06",
    label: "Our Commitment",
    headline: "Compliance Sync – 10 Years Strong!",
    bgHex: "#cc2e78",
    headColor: "text-white",
    accentColor: "text-white",
    bodyColor: "text-white/75",
    points: [
      {
        stat: "$2M Guarantee",
        copy: "Our Due Diligence Guarantee is backed by $2 Million in liability coverage for Errors & Omissions and Cyber Attack. Backed — not promised, not implied.",
      },
      {
        stat: "Unlimited Scale",
        copy: "North American-wide SaaS platform with unlimited users and locations. Free access for qualified hiring clients — government, not-for-profits, and corporate organizations.",
      },
      {
        stat: "The Mission",
        copy: "A contractor-friendly, affordable universal credential-sharing service — dedicated to getting workers home safe, every day. Ten years in. Still the mission.",
      },
    ],
  },
];

export default function TenYearsStrong() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress → chapter index
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      Math.floor(v * chapters.length),
      chapters.length - 1
    );
    setActive(idx);
  });

  // Progress bar width
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const scrollToChapter = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const chunkHeight = containerRef.current.offsetHeight / chapters.length;
    window.scrollTo({ top: scrollTop + index * chunkHeight + 2, behavior: "smooth" });
  };

  const chapter = chapters[active];

  return (
    <div>
      {/* ── Sticky scrollytelling container ── */}
      {/* Outer: tall enough to scroll through all chapters */}
      <div
        ref={containerRef}
        style={{ height: `${chapters.length * 100}vh` }}
        className="relative"
      >
        {/* Sticky panel: pins below the 80px navbar */}
        <div className="sticky top-20 h-[calc(100dvh-80px)] overflow-hidden">

          {/* Animated background colour */}
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundColor: chapter.bgHex }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Decorative chapter number */}
          <AnimatePresence mode="wait">
            <motion.span
              key={`num-${active}`}
              aria-hidden="true"
              className="absolute bottom-0 right-0 font-display leading-none text-white/[0.06] select-none pointer-events-none"
              style={{ fontSize: "clamp(160px, 28vw, 400px)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {chapter.number}
            </motion.span>
          </AnimatePresence>

          {/* Progress bar */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-white/25 z-30"
            style={{ width: barWidth }}
          />

          {/* Main content */}
          <div className="relative z-10 h-full flex flex-col justify-center max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 overflow-y-auto lg:overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-8 lg:gap-10"
              >
                {/* Chapter label */}
                <p
                  className={`text-[10px] uppercase tracking-[0.28em] ${chapter.accentColor} opacity-60 font-sans`}
                >
                  Chapter {chapter.number}&nbsp;&nbsp;·&nbsp;&nbsp;{chapter.label}
                </p>

                {/* Headline */}
                <h3
                  className={`font-display ${chapter.headColor} leading-[0.92] tracking-[-0.03em] max-w-[700px]`}
                  style={{ fontSize: "clamp(38px, 5.5vw, 76px)" }}
                >
                  {chapter.headline}
                </h3>

                {/* 3 key points */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-14 mt-2">
                  {chapter.points.map((point, i) => (
                    <motion.div
                      key={point.stat}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: i * 0.1 + 0.15,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex flex-col gap-3"
                    >
                      <p
                        className={`font-display ${chapter.headColor} leading-[1.05] tracking-[-0.02em]`}
                        style={{ fontSize: "clamp(20px, 2.4vw, 32px)" }}
                      >
                        {point.stat}
                      </p>
                      <div className="w-6 h-px bg-white/25" />
                      <p
                        className={`font-sans ${chapter.bodyColor} text-[13px] leading-[1.9]`}
                      >
                        {point.copy}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right-side chapter dot navigation */}
          <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
            {chapters.map((c, i) => (
              <button
                key={c.number}
                onClick={() => scrollToChapter(i)}
                aria-label={`Chapter ${c.number}: ${c.label}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === active
                    ? "w-1.5 h-7 bg-white"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Bottom: counter + scroll hint */}
          <div className="absolute bottom-7 left-8 lg:left-20 right-12 lg:right-16 flex items-center justify-between z-30">
            <span className={`font-sans text-[11px] tracking-[0.15em] text-white/30 uppercase`}>
              {active + 1} / {chapters.length}
            </span>
            {active === chapters.length - 1 ? (
              <a
                href="/reports/compliance-sync-10-years-clients.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/60 font-sans hover:text-white transition-colors duration-300 group"
              >
                Download the full report
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            ) : (
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/25 font-sans">
                Scroll to continue
              </span>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
