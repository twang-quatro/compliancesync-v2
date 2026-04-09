import Link from "next/link";

type NavLink = { label: string; href: string; external?: boolean };
type NavColumn = { heading: string; links: NavLink[] };

const navColumns: NavColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "For Hiring Clients", href: "/clients" },
      { label: "For Contractors", href: "/contractors" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Account",
    links: [
      {
        label: "Portal Login",
        href: "https://www.compliancesync.com/members/Login.aspx",
        external: true,
      },
      {
        label: "Member Resources",
        href: "/member-resources",
        external: false,
      },
      {
        label: "Register Now",
        href: "https://www.compliancesync.com/members/Registration/CreateAccount.aspx",
        external: true,
      },
      {
        label: "Terms of Use",
        href: "https://www.compliancesync.com/compliancesync/Images/Footer/Terms%20Of%20Use%20Agreement.pdf",
        external: true,
      },
      {
        label: "Privacy Policy",
        href: "https://www.compliancesync.com/compliancesync/Images/Footer/Privacy%20Policy.pdf",
        external: true,
      },
    ],
  },
];

const values = ["Integrity", "Honesty", "Transparency"];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">

      {/* Values bar */}
      <div className="border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-5 flex flex-wrap gap-6 items-center justify-center lg:justify-start">
          {values.map((value, i) => (
            <div key={value} className="flex items-center gap-6">
              {i > 0 && <span className="hidden lg:block w-px h-3 bg-cs-blue/40" />}
              <span className="text-[10px] uppercase tracking-[0.22em] text-cs-blue font-sans">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main body */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div>
              <span className="font-display text-cream text-2xl tracking-tight">
                Compliance<span className="text-cs-blue">Sync</span>
              </span>
              <sup className="text-cs-blue text-xs ml-0.5">®</sup>
            </div>
            <p className="text-mist text-sm leading-relaxed font-sans max-w-[220px]">
              The contractor verification community built on integrity, honesty,
              and transparency.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="tel:18444004484"
                className="text-[11px] uppercase tracking-[0.12em] text-mist hover:text-cream transition-colors duration-200 font-sans"
              >
                1-844-400-4484
              </a>
              <a
                href="mailto:care@compliancesync.com"
                className="text-[11px] uppercase tracking-[0.12em] text-mist hover:text-cream transition-colors duration-200 font-sans"
              >
                care@compliancesync.com
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-6">
              <h4 className="text-[10px] uppercase tracking-[0.22em] text-magenta font-sans">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-[13px] text-mist hover:text-cream transition-colors duration-200 font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] uppercase tracking-[0.12em] text-mist/40 font-sans">
            © {new Date().getFullYear()} Compliance Sync Incorporated. All rights reserved.
          </p>
          <address className="not-italic text-[11px] uppercase tracking-[0.12em] text-mist/40 font-sans text-center sm:text-right">
            400 Applewood Crescent, Suite 100 — Vaughan, Ontario, Canada
          </address>
        </div>
      </div>
    </footer>
  );
}
