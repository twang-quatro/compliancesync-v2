"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "About", href: "/about" },
  { label: "For Clients", href: "/clients" },
  { label: "For Contractors", href: "/contractors" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [memberOpen, setMemberOpen] = useState(false);
  const memberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (memberRef.current && !memberRef.current.contains(e.target as Node)) {
        setMemberOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-black/8"
          : "bg-white/80 backdrop-blur-sm xl:bg-transparent xl:backdrop-blur-none"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 h-24 lg:h-28 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="ComplianceSync"
            width={140}
            height={78}
            className="h-[55px] md:h-[72px] lg:h-[85px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden xl:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] uppercase tracking-[0.15em] text-navy/60 hover:text-navy transition-colors duration-300 font-sans"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden xl:flex items-center gap-6">
          {/* Member Login dropdown */}
          <div ref={memberRef} className="relative">
            <button
              onClick={() => setMemberOpen(!memberOpen)}
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-navy/60 hover:text-navy transition-colors duration-300 font-sans"
            >
              Member Login
              <span className={`transition-transform duration-200 text-[8px] ${memberOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {memberOpen && (
              <div className="absolute top-full right-0 mt-3 w-48 bg-white border border-black/8 shadow-lg py-2 z-50">
                <a
                  href="https://www.compliancesync.com/members/Login.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMemberOpen(false)}
                  className="block px-5 py-3 text-[10px] uppercase tracking-[0.15em] text-navy/60 hover:text-navy hover:bg-black/3 transition-colors duration-200 font-sans"
                >
                  Portal Login
                </a>
                <Link
                  href="/member-resources"
                  onClick={() => setMemberOpen(false)}
                  className="block px-5 py-3 text-[10px] uppercase tracking-[0.15em] text-navy/60 hover:text-navy hover:bg-black/3 transition-colors duration-200 font-sans"
                >
                  Member Resources
                </Link>
              </div>
            )}
          </div>
          <Link
            href="https://www.compliancesync.com/members/Registration/CreateAccount.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-magenta/60 text-magenta text-[11px] uppercase tracking-[0.15em] hover:bg-magenta hover:text-cream transition-all duration-300 font-sans"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-navy transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-navy transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-navy transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden bg-white/95 backdrop-blur-md border-t border-black/8 overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen py-8" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[12px] uppercase tracking-[0.15em] text-navy/60 hover:text-navy transition-colors duration-200 font-sans"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-6 border-t border-black/10 flex flex-col gap-4">
            <a
              href="https://www.compliancesync.com/members/Login.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] uppercase tracking-[0.15em] text-navy/60 hover:text-navy transition-colors font-sans"
            >
              Portal Login
            </a>
            <Link
              href="/member-resources"
              onClick={() => setMenuOpen(false)}
              className="text-[12px] uppercase tracking-[0.15em] text-navy/60 hover:text-navy transition-colors font-sans"
            >
              Member Resources
            </Link>
            <Link
              href="https://www.compliancesync.com/members/Registration/CreateAccount.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-6 py-2.5 border border-magenta/60 text-magenta text-[11px] uppercase tracking-[0.15em] hover:bg-magenta hover:text-cream transition-all duration-300 font-sans"
            >
              Register Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
