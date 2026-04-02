"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  label: React.ReactNode;
  headline: React.ReactNode;
  subhead?: string;
  accent?: "magenta" | "blue";
  heroImage?: string;
  heroImageAlt?: string;
  heroImageVariant?: "mask" | "blob" | "blob-left";
  labelSize?: "sm" | "md";
  children?: React.ReactNode;
}

export default function PageHero({
  label,
  headline,
  subhead,
  accent = "blue",
  heroImage,
  heroImageAlt = "",
  heroImageVariant = "mask",
  labelSize = "sm",
  children,
}: PageHeroProps) {
  return (
    <section className={`relative bg-cream overflow-hidden border-b border-black/8 ${
      heroImageVariant === "blob-left"
        ? "pt-44 pb-36 lg:pt-52 lg:pb-56"
        : "pt-44 pb-28 lg:pt-52 lg:pb-36"
    }`}>

      {/* Ambient glow */}
      <div
        className={`
          absolute top-0 pointer-events-none blur-[160px] opacity-10 w-[500px] h-[400px] rounded-full
          ${heroImageVariant === "blob-left"
            ? "right-0 -translate-y-1/4 bg-verified"
            : accent === "magenta"
              ? "right-0 -translate-y-1/4 bg-magenta"
              : "left-0 -translate-y-1/4 bg-verified"
          }
        `}
      />

      {/* Left accent rule */}
      <div className="absolute left-8 lg:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-navy/10 to-transparent pointer-events-none" />

      {/* Hero image — mask variant (behind content) */}
      {heroImage && heroImageVariant === "mask" && (
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-[52%] pointer-events-none hidden lg:block"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 32%, black 100%), linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 32%, black 100%), linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "destination-in",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        >
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      )}

      {/* Hero image — blob variant (behind content) */}
      {heroImage && heroImageVariant === "blob" && (
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-[1114px] aspect-[1114/735] pointer-events-none hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        >
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="object-cover rounded-tl-[800px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[500px]"
            priority
          />
        </motion.div>
      )}

      {/* Hero image — blob-left variant (behind content, left side) */}
      {heroImage && heroImageVariant === "blob-left" && (
        <motion.div
          className="absolute left-0 bottom-0 top-[180px] w-[60%] max-w-[1000px] pointer-events-none hidden lg:block z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        >
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="object-cover object-top rounded-tr-[350px]"
            priority
          />
        </motion.div>
      )}

      {/* Content — above image */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 relative z-10">

        {/* Label */}
        <motion.p
          className={`uppercase tracking-[0.16em] font-sans mb-8 ${
            labelSize === "md" ? "text-[16px]" : "text-[10px]"
          } ${
            accent === "magenta" ? "text-magenta" : "text-cs-blue"
          } ${
            heroImageVariant === "blob-left" ? "lg:text-right" : ""
          }`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
        >
          {label}
        </motion.p>

        {/* Headline */}
        <motion.h1
          className={`font-display text-navy text-[clamp(52px,7vw,104px)] leading-[0.92] tracking-[-0.025em] max-w-[900px] ${
            heroImageVariant === "blob-left" ? "lg:ml-auto lg:text-right" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.22 }}
        >
          {headline}
        </motion.h1>

        {/* Subhead */}
        {subhead && (
          <motion.div
            className="flex items-start gap-4 md:gap-8 mt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.38 }}
          >
            <div className={`mt-[10px] w-10 h-px shrink-0 ${
              accent === "magenta" ? "bg-magenta" : "bg-cs-blue"
            }`} />
            <p className="text-navy/60 font-sans text-lg leading-[1.75] max-w-[560px]">
              {subhead}
            </p>
          </motion.div>
        )}

        {/* Custom content (CTAs, etc.) */}
        {children && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.42 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Bottom grid tick decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 flex justify-between">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-px h-6 bg-black/8" />
          ))}
        </div>
      </div>
    </section>
  );
}
