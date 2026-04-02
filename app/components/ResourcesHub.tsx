"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface LinkItem {
  label: string;
  href?: string;
}

interface SubGroup {
  label: string;
  href?: string;
  items?: LinkItem[];
}

interface ResourceGroup {
  heading: string;
  note?: string;
  noteHref?: string;
  items: (LinkItem | SubGroup)[];
}

interface ResourceSection {
  index: string;
  title: string;
  subtitle?: string;
  href?: string;
  groups: ResourceGroup[];
}

function isSubGroup(item: LinkItem | SubGroup): item is SubGroup {
  return "items" in item && item.items !== undefined;
}

const sections: ResourceSection[] = [
  {
    index: "01",
    title: "Worker Compliance",
    subtitle: "Qualifications & Learning Centre",
    groups: [
      {
        heading: "Certificates of Qualification",
        note: "Compulsory Trades and Licensed Professions",
        items: [
          { label: "Skilled Trades Ontario - 23 Compulsory / 121 Non-Compulsory Trades in Ontario", href: "https://www.skilledtradesontario.ca/about-trades/" },
          { label: "Technical Standards and Safety Authority - Six Regulated Industries", href: "https://www.tssa.org/regulated-industries" },
          {
            label: "Ministry Licenses",
            items: [
              { label: "Security Guards", href: "https://www.compliance.gov.on.ca/services/psis-publicregistry/individual/en" },
              { label: "Exterminators", href: "https://www.ontario.ca/page/pesticide-licences-and-permits" },
            ],
          },
          { label: "Professional Licenses - Engineers and Engineering Interns", href: "https://www.peo.on.ca/directory" },
          {
            label: "Fire Alarm Systems Qualifications",
            items: [
              { label: "CFAA", href: "https://cfaa.ca/technician-directory" },
              { label: "ECAO / CertiFire", href: "https://www.certifire.org/" },
            ],
          },
        ],
      },
      {
        heading: "Safety Training",
        note: "27 FREE online safety training courses offered by WSPS Ontario",
        noteHref: "https://shop.wsps.ca/pages/free-workplace-safety-training",
        items: [
          {
            label: "Worker/Supervisor Safety Awareness (One-time requirement in Ontario)",
            items: [
              { label: "FREE Worker Health and Safety Awareness in 4 Steps", href: "http://www.labour.gov.on.ca/english/hs/elearn/worker/index.php" },
              { label: "FREE Supervisor Health and Safety Awareness in 5 Steps", href: "http://www.labour.gov.on.ca/english/hs/elearn/supervisor/index.php" },
            ],
          },
          {
            label: "GHS/WHMIS 2015 (Valid for three years as a standard)",
            items: [
              { label: "FREE WHMIS (GHS) Online Certification", href: "https://shop.wsps.ca/products/wsps-whmis-2015-for-workers-ecourse" },
            ],
          },
          {
            label: "Working at Heights (Valid for three years, refresher required)",
            items: [
              { label: "Ministry of Labour Approved Working at Heights Training Providers", href: "https://www.labour.gov.on.ca/english/hs/wah_providers.php" },
              { label: "FREE Ladder Safety Training", href: "https://shop.wsps.ca/products/ladder-safety-for-ontario-workers-ecourse" },
            ],
          },
          {
            label: "Electrical Safety (2024 Ontario Electrical Safety Code in effect May 1, 2025)",
            items: [
              { label: "Electrical Safety Authority Safety & Technical Training", href: "https://esasafe.com/contractors/training/safety-and-technical-training/" },
              { label: "FREE Lockout Tagout Training", href: "https://shop.wsps.ca/products/logout-tagout" },
            ],
          },
          {
            label: "First Aid (New Program in effect Summer 2026 aligned with Canadian Standards Association)",
            items: [
              { label: "WSIB Approved Emergency and Standard First Aid Training Providers", href: "http://www.wsib.on.ca/WSIBPortal/faces/WSIBDetailPage?cGUID%3DWSIB014585%26rDef%3DWSIB_RD_ARTICLE" },
            ],
          },
          {
            label: "Joint Health and Safety Committee",
            items: [
              { label: "JHSC Certification Training Program Standard and Provider Standard", href: "https://www.labour.gov.on.ca/english/hs/faqs/jhsc.php" },
            ],
          },
          {
            label: "Violence and Harassment",
            items: [
              { label: "FREE Workplace Violence and Workplace Harassment", href: "https://shop.wsps.ca/products/workplace-violence-and-harassment-awareness-1" },
            ],
          },
          {
            label: "Specialized Safety Training (Free training resources)",
            items: [
              { label: "Asbestos Hazard ($49.00)", href: "https://shop.wsps.ca/products/asbestos-in-the-workplace-2" },
              { label: "Due Diligence", href: "https://shop.wsps.ca/products/supervisor-responsibilities-and-due-diligence-17" },
              { label: "EV Battery H&S", href: "https://shop.wsps.ca/products/ev-battery-health-safety-essentials-ecourse" },
              { label: "Landscape Safety", href: "https://shop.wsps.ca/products/landscape-safety-awareness" },
              { label: "Mental Health", href: "https://shop.wsps.ca/products/workplace-mental-health-awareness" },
              { label: "Tractor Safety", href: "https://shop.wsps.ca/products/tractor-safety-online-training" },
              { label: "Workplace Inspections", href: "https://shop.wsps.ca/products/workplace-inspections-training" },
            ],
          },
          {
            label: "French Language",
            items: [
              { label: "SHSA", href: "https://shop.wsps.ca/products/formation-de-sensibilisation-a-la-sante-et-a-la-securite-lsst-les-superviseurs-de-lontario" },
              { label: "WHSA", href: "https://shop.wsps.ca/products/formation-de-sensibilisation-a-la-sante-et-a-la-securite-lsst-travailleurs-de-lontario" },
              { label: "WHMIS", href: "https://shop.wsps.ca/products/cours-en-ligne-de-sensibilisation-au-simdut" },
            ],
          },
          {
            label: "Mandarin Language",
            items: [
              { label: "SHSA", href: "https://shop.wsps.ca/products/health-safety-awareness-training-ohsa-ontario-supervisors-mandarin" },
              { label: "WHSA", href: "https://shop.wsps.ca/products/health-safety-awareness-training-ohsa-ontario-workers-mandarin" },
              { label: "WHMIS", href: "https://shop.wsps.ca/products/whmis-awareness-ecourse-mandarin" },
            ],
          },
          {
            label: "Spanish Language",
            items: [
              { label: "SHSA", href: "https://shop.wsps.ca/products/capacitacion-para-concientizar-sobre-salud-y-seguridad-ohsa-supervisores-de-ontario" },
              { label: "WHSA", href: "https://shop.wsps.ca/products/capacitacion-para-concientizar-sobre-salud-y-seguridad-ohsa-trabajadores-de-ontario" },
              { label: "WHMIS", href: "https://shop.wsps.ca/products/curso-electronico-de-sensibilizacion-sobre-el-whmis" },
            ],
          },
        ],
      },
    ],
  },
  {
    index: "02",
    title: "Best Practices",
    groups: [
      {
        heading: "Better Business Bureau",
        items: [
          { label: "Contractors: 10 Hiring Mistakes", href: "https://www.bbb.org/all/home-improvement/10-mistakes-to-avoid-home-improvement-project" },
        ],
      },
      {
        heading: "Condominium Management Regulatory Authority of Ontario",
        items: [
          { label: "Procurement and Contractor Oversight - Section 5: Managing Vendor Relationships", href: "https://www.cmrao.ca/wp-content/uploads/2025/08/Procurement-and-Contractor-Oversight-Practice-Guide.pdf" },
        ],
      },
      {
        heading: "Construction & Design Alliance of Ontario",
        items: [
          { label: "Guide to Design and Construction Procurement Best Practices", href: "https://oaa.on.ca/Assets/Common/Shared_Documents/Government%20Relations/CDAO%20Procurement%20Guide.pdf" },
        ],
      },
    ],
  },
  {
    index: "03",
    title: "Occupational Health & Safety",
    groups: [
      {
        heading: "Ontario OHS Resources",
        items: [
          { label: "Workplace Safety & Prevention Services", href: "http://www.wsps.ca/Home.aspx" },
          { label: "Infrastructure Health & Safety Association", href: "http://www.ihsa.ca/IHSA/Course-Search.aspx" },
          { label: "Public Services Health & Safety Association", href: "http://www.pshsa.ca/" },
        ],
      },
      {
        heading: "Canada OHS Resources",
        items: [
          { label: "Canadian Centre for Occupational Health and Safety", href: "http://www.ccohs.ca/" },
        ],
      },
    ],
  },
  {
    index: "04",
    title: "Industry Associations",
    groups: [
      {
        heading: "Canada",
        items: [
          { label: "Canadian Condominium Institute", href: "https://cci.ca/" },
          { label: "Insurance Bureau of Canada", href: "http://www.ibc.ca/on/home" },
          { label: "Healthcare Insurance Reciprocal of Canada", href: "https://www.hiroc.com/About-Us.aspx" },
        ],
      },
      {
        heading: "Ontario",
        items: [
          { label: "Association of Condominium Managers of Ontario", href: "https://acmo.org/" },
          { label: "Association of Municipalities of Ontario", href: "http://www.amo.on.ca/" },
          { label: "Condominium Management Regulatory Authority of Ontario", href: "https://www.cmrao.ca/" },
          { label: "Ontario Municipal Insurance Exchange", href: "http://www.omex.org/" },
          { label: "Ontario Restaurants Hotel & Motel Association", href: "https://www.orhma.com" },
          { label: "Ontario School Boards Insurance Exchange", href: "http://www.osbie.on.ca/risk-management/advisories/coopwork.aspx" },
        ],
      },
    ],
  },
  {
    index: "05",
    title: "Trade Associations",
    groups: [
      {
        heading: "Canada",
        items: [
          { label: "Canadian Federal Skilled Trades Program", href: "http://www.canadavisa.com/" },
          { label: "Canadian Nursery Landscape Association", href: "http://www.canadanursery.com/" },
        ],
      },
      {
        heading: "Ontario",
        items: [
          { label: "Electrical Safety Authority", href: "http://www.esasafe.com/" },
          { label: "LandscapeOntario", href: "http://www.landscapeontario.com/" },
          { label: "Ontario College of Trades", href: "http://www.collegeoftrades.ca/" },
          { label: "Ontario General Contractors Association", href: "http://www.ogca.ca/" },
          {
            label: "Regional Construction Associations",
            items: [
              { label: "Barrie Construction Association", href: "https://barrieca.com/" },
              { label: "London & District Construction Association", href: "https://ldca.on.ca/" },
              { label: "Niagara Construction Association", href: "https://niagaraconstruction.org/" },
              { label: "Toronto Construction Association", href: "https://www.tcaconnect.com/" },
            ],
          },
          { label: "Technical Standards and Safety Authority", href: "http://www.tssa.org/" },
        ],
      },
      {
        heading: "Alberta",
        items: [
          { label: "Landscape-Alberta", href: "http://www.landscape-alberta.com/" },
        ],
      },
    ],
  },
  {
    index: "06",
    title: "Standards & Regulations",
    groups: [
      {
        heading: "Canada",
        items: [
          { label: "Canada Labour Program", href: "http://www.labour.gc.ca/eng/home.shtml" },
          { label: "Association of Workers\u2019 Compensation Boards of Canada", href: "http://awcbc.org/" },
        ],
      },
      {
        heading: "Alberta",
        items: [
          { label: "Alberta Jobs, Skills, Training and Labour", href: "http://work.alberta.ca/" },
          { label: "Alberta Workers\u2019 Compensation Board", href: "http://wcb.ab.ca/" },
        ],
      },
      {
        heading: "British Columbia",
        items: [
          { label: "WorkSafeBC", href: "http://www.worksafebc.com/" },
          { label: "BC Jobs, Tourism, Skills Training and Labour", href: "http://www.gov.bc.ca/jtst/" },
        ],
      },
      {
        heading: "Ontario",
        items: [
          { label: "Ontario Ministry of Labour", href: "http://www.labour.gov.on.ca/" },
          { label: "Ontario Workers Safety Insurance Board", href: "http://www.wsib.on.ca/" },
        ],
      },
      {
        heading: "Quebec",
        items: [
          { label: "Quebec commission des relations du travail", href: "https://www.crt.gouv.qc.ca/" },
          { label: "Quebec CSST", href: "http://www.csst.qc.ca/Pages/index.aspx" },
        ],
      },
      {
        heading: "The Maritimes",
        items: [
          { label: "Nova Scotia Labour & Advanced Education", href: "http://novascotia.ca/lae/" },
          { label: "New Brunswick Labour and Employment Board", href: "http://www.gnb.ca/LEB-CTE/index-e.asp" },
          { label: "WorkplaceNL | Health | Safety | Compensation", href: "https://workplacenl.ca/" },
        ],
      },
    ],
  },
  {
    index: "07",
    title: "Newsroom",
    subtitle: "Ontario Ministry of Labour",
    href: "https://news.ontario.ca/mol/en",
    groups: [],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

function ResourceLink({ item }: { item: LinkItem }) {
  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-navy/55 font-sans text-[14px] leading-[1.7] hover:text-cs-blue transition-colors duration-200 underline underline-offset-2 decoration-black/10 hover:decoration-cs-blue/40"
      >
        {item.label}
      </a>
    );
  }
  return <p className="text-navy/55 font-sans text-[14px] leading-[1.7]">{item.label}</p>;
}

function AccordionSection({ section, inView, delay }: { section: ResourceSection; inView: boolean; delay: number }) {
  const [open, setOpen] = useState(false);
  const hasContent = section.groups.length > 0;

  return (
    <motion.div
      className="border-t border-black/8 last:border-b"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
    >
      <button
        onClick={() => hasContent ? setOpen(!open) : section.href && window.open(section.href, "_blank")}
        className={`flex gap-4 md:gap-6 lg:gap-10 py-10 w-full text-left ${hasContent || section.href ? "cursor-pointer" : "cursor-default"}`}
      >
        <span className="font-display text-verified text-[clamp(28px,3vw,44px)] leading-none tracking-[-0.03em] shrink-0 w-12 lg:w-16 text-right">
          {section.index}
        </span>
        <div className="flex-1 flex items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-navy text-[clamp(18px,2vw,24px)] leading-[1.2] tracking-[-0.01em]">
              {section.title}
            </h3>
            {section.subtitle && (
              <p className="text-navy/50 font-sans text-[14px] italic mt-1">
                {section.subtitle}
              </p>
            )}
          </div>
          {hasContent && (
            <span className={`text-navy/30 text-[20px] transition-transform duration-300 shrink-0 ${open ? "rotate-45" : ""}`}>
              +
            </span>
          )}
          {!hasContent && section.href && (
            <span className="text-cs-blue text-[14px] font-sans shrink-0">&rarr;</span>
          )}
        </div>
      </button>

      <AnimatePresence>
        {open && hasContent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-16 lg:pl-[104px] pb-10 pr-5 flex flex-col gap-8 max-w-[800px]">
              {section.groups.map((group, gi) => (
                <div key={gi} className="flex flex-col gap-3">
                  <div>
                    <h4 className="font-display text-navy text-[16px] lg:text-[18px] leading-[1.3] tracking-[-0.01em]">
                      {group.heading}
                    </h4>
                    {group.note && (
                      group.noteHref ? (
                        <a href={group.noteHref} target="_blank" rel="noopener noreferrer" className="text-navy/40 font-sans text-[13px] mt-1 block hover:text-cs-blue transition-colors duration-200">
                          {group.note}
                        </a>
                      ) : (
                        <p className="text-navy/40 font-sans text-[13px] mt-1">
                          {group.note}
                        </p>
                      )
                    )}
                  </div>
                  <div className="flex flex-col gap-2 pl-4 border-l border-black/8">
                    {group.items.map((item, ii) =>
                      isSubGroup(item) ? (
                        <div key={ii} className="flex flex-col gap-1.5">
                          <p className="text-navy/70 font-sans text-[14px] leading-[1.7] font-medium">
                            {item.label}
                          </p>
                          {item.items && (
                            <div className="flex flex-col gap-1 pl-4">
                              {item.items.map((sub, si) => (
                                <ResourceLink key={si} item={sub} />
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <ResourceLink key={ii} item={item} />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ResourcesHub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col gap-0">
          {sections.map((section, i) => (
            <AccordionSection
              key={section.index}
              section={section}
              inView={inView}
              delay={i * 0.08 + 0.1}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 flex items-start gap-4"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.75}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-verified mt-[5px] shrink-0" />
          <p className="text-navy/40 font-sans text-sm leading-relaxed italic">
            &ldquo;The only dumb question is the one you don&rsquo;t ask.&rdquo; — Member Support is available by phone or email, any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
