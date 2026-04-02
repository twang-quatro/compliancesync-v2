"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface VideoPlaceholderProps {
  name: string;
  title: string;
  quote: string;
  youtubeId?: string;
  comingSoonText?: string;
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function VideoPlaceholder({
  name,
  title,
  quote,
  youtubeId,
  comingSoonText = "New 2-minute video coming soon",
}: VideoPlaceholderProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  return (
    <div ref={ref} className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
      {/* Video embed area */}
      <motion.div
        className="w-full lg:w-1/2 aspect-video relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease, delay: 0.1 }}
      >
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
            title={`${name} — ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <div className="absolute inset-0 bg-navy/5 border border-navy/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-cs-blue/5 to-magenta/5 pointer-events-none" />
            <div className="flex flex-col items-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-full border-2 border-navy/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-navy/40 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-navy/40 text-xs uppercase tracking-[0.16em] font-sans">
                {comingSoonText}
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Quote + attribution */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease, delay: 0.25 }}
      >
        <div className="w-10 h-px bg-cs-blue" />
        <blockquote className="font-display text-navy text-[clamp(24px,3vw,36px)] leading-[1.2] tracking-[-0.015em]">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex flex-col gap-1">
          <p className="text-navy font-sans text-sm font-semibold">{name}</p>
          <p className="text-navy/50 font-sans text-xs uppercase tracking-[0.14em]">{title}</p>
        </div>
      </motion.div>
    </div>
  );
}
