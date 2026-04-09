"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactDetails = [
  {
    label: "Phone",
    value: "1-844-400-4484",
    sub: "Toll-free — Press 0",
    href: "tel:18444004484",
  },
  {
    label: "Email",
    value: "care@compliancesync.com",
    sub: "We respond within one business day",
    href: "mailto:care@compliancesync.com",
  },
  {
    label: "Office",
    value: "400 Applewood Crescent",
    sub: "Suite 100 — Vaughan, Ontario, Canada  L4K 0C3",
    href: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative bg-cream overflow-hidden border-b border-black/8 pt-44 pb-20 lg:pt-52 lg:pb-28">

      {/* Ambient glow */}
      <div className="absolute top-0 left-0 -translate-y-1/4 pointer-events-none blur-[160px] opacity-10 w-[500px] h-[400px] rounded-full bg-verified" />

      {/* Left accent rule */}
      <div className="absolute left-8 lg:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-navy/10 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 relative z-10">

        {/* Top row: headline left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left — headline + subhead */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.p
              className="text-[10px] uppercase tracking-[0.16em] text-cs-blue font-sans mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Contact Us
            </motion.p>

            <motion.h1
              className="font-display text-navy text-[clamp(42px,6vw,88px)] leading-[0.92] tracking-[-0.025em] mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            >
              Let&rsquo;s talk<br />compliance.
            </motion.h1>

            <motion.div
              className="flex items-start gap-4 md:gap-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
            >
              <div className="mt-[10px] w-10 h-px shrink-0 bg-cs-blue" />
              <p className="text-navy/60 font-sans text-lg leading-[1.75] max-w-[400px]">
                Whether you&rsquo;re a hiring organization or a contractor — we&rsquo;re here to help you get started with confidence.
              </p>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-7"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <div className="bg-green-light p-6 sm:p-10 lg:p-14 relative overflow-hidden">
              <span className="absolute -bottom-6 -right-2 font-display text-[160px] leading-none text-navy/[0.05] select-none pointer-events-none tracking-tight">
                CS
              </span>

              {submitted ? (
                <div className="flex flex-col gap-6 py-12 items-start">
                  <div className="w-8 h-px bg-verified" />
                  <h3 className="font-display text-navy text-[36px] leading-tight tracking-[-0.02em]">
                    Message received.
                  </h3>
                  <p className="text-navy/60 font-sans text-base leading-[1.8] max-w-[400px]">
                    We&rsquo;ll be in touch within one business day. In the meantime,
                    feel free to call us toll-free at 1-844-400-4484.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                  <div className="flex flex-col gap-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-navy/50 font-sans">
                      Quick Inquiry
                    </p>
                    <div className="w-6 h-px bg-cs-blue" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-navy/50 font-sans">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="bg-white border border-black/10 text-navy font-sans text-[14px] px-4 py-3.5 placeholder:text-navy/30 focus:outline-none focus:border-cs-blue/50 transition-colors duration-200"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-navy/50 font-sans">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        className="bg-white border border-black/10 text-navy font-sans text-[14px] px-4 py-3.5 placeholder:text-navy/30 focus:outline-none focus:border-cs-blue/50 transition-colors duration-200"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-navy/50 font-sans">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="bg-white border border-black/10 text-navy font-sans text-[14px] px-4 py-3.5 placeholder:text-navy/30 focus:outline-none focus:border-cs-blue/50 transition-colors duration-200"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-navy/50 font-sans">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="bg-white border border-black/10 text-navy font-sans text-[14px] px-4 py-3.5 placeholder:text-navy/30 focus:outline-none focus:border-cs-blue/50 transition-colors duration-200"
                        placeholder="+1 (000) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase tracking-[0.18em] text-navy/50 font-sans">
                      I am a
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Hiring Client", "Contractor"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-3 border border-black/10 px-4 py-3.5 cursor-pointer hover:border-cs-blue/40 transition-colors duration-200 group"
                        >
                          <input
                            type="radio"
                            name="type"
                            value={option}
                            className="accent-cs-blue w-3.5 h-3.5"
                          />
                          <span className="text-[11px] uppercase tracking-[0.14em] text-navy/60 font-sans group-hover:text-navy transition-colors duration-200">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.18em] text-navy/50 font-sans">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="bg-white border border-black/10 text-navy font-sans text-[14px] px-4 py-3.5 placeholder:text-navy/30 focus:outline-none focus:border-cs-blue/50 transition-colors duration-200 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 bg-magenta text-cream text-[11px] uppercase tracking-[0.18em] font-sans hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 w-fit flex items-center gap-4"
                  >
                    {loading ? "Sending..." : "Send Inquiry"}
                    {!loading && <span>&rarr;</span>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Contact details — horizontal row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-16 lg:mt-20"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          {contactDetails.map((detail) => (
            <div
              key={detail.label}
              className="bg-green-light hover:bg-[#e2f4cc] transition-colors duration-300 p-7 flex flex-col gap-2"
            >
              <span className="text-[9px] uppercase tracking-[0.22em] text-navy/40 font-sans">
                {detail.label}
              </span>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="font-display text-navy text-[18px] lg:text-[22px] tracking-tight hover:text-cs-blue transition-colors duration-200"
                >
                  {detail.value}
                </a>
              ) : (
                <span className="font-display text-navy text-[18px] lg:text-[22px] tracking-tight">
                  {detail.value}
                </span>
              )}
              <span className="text-[11px] text-navy/40 font-sans">
                {detail.sub}
              </span>
            </div>
          ))}
        </motion.div>
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
