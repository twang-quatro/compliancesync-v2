# ComplianceSync v2 — Developer Handoff

**Prepared by:** Ultra Creative House (Jordan Flis)
**Date:** April 2, 2026
**Repo:** https://github.com/jordanflis/compliancesync-v2
**Live:** https://www.compliance-sync-v2.vercel.app

---

## Quick Start

```bash
git clone https://github.com/jordanflis/compliancesync-v2.git
cd compliancesync-v2
npm install
npm run dev
```

Opens at `http://localhost:3000`

---

## Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | Framework (App Router) |
| React | 19.2.3 | UI |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | v4 | Styling |
| Framer Motion | 12.x | Animations |

No database. No environment variables. No external API keys. Pure static site.

---

## Project Structure

```
app/
  (main)/              # Route group — all pages share Navbar + Footer
    layout.tsx         # Navbar + Footer wrapper
    page.tsx           # Homepage (/)
    about/
      page.tsx         # /about
      AboutContent.tsx
      AboutHeroLines.tsx
    clients/
      page.tsx         # /clients
    contractors/
      page.tsx         # /contractors
    contact/
      page.tsx         # /contact
    member-resources/
      page.tsx         # /member-resources
  components/          # Shared components
    Navbar.tsx
    Footer.tsx
    HeroHome.tsx
    KeysToPartnerships.tsx
    ClientValueProps.tsx
    ContractorValueProps.tsx
    ContactSection.tsx
    ResourcesHub.tsx   # Member Resources accordion (7 sections, all links)
    VideoPlaceholder.tsx
    ... (and others)
  globals.css          # Tailwind imports + custom properties
  layout.tsx           # Root layout (fonts, metadata)
public/
  images/              # All static images
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, trust stats, values, how it works, CTA |
| `/about` | About — founder video, mission statements, legal definitions, takeaways |
| `/clients` | For Hiring Clients — 11 reasons, video, benefits |
| `/contractors` | For Contractors — 11 reasons, video, benefits |
| `/contact` | Contact form (not yet wired to backend) + company details |
| `/member-resources` | 7 accordion sections with external resource links |

---

## Design System

**Font:** Inter (all weights 300-800)

**Colors (defined in globals.css):**

| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#0d1e2f` | Primary text, dark backgrounds |
| CS Blue | `#0070b3` | Primary accent |
| Magenta | `#cc2e78` | "Approve" action, client CTAs |
| Verified Green | `#5a9a1a` | Green accent, numbered lists |
| CS Teal | `#00B4D8` | "Connect" action |
| CS Green | `#8AC43E` | "Verify" action |
| Gold | `#FFC61A` | "Learn More" / "Contact Us" CTAs |

---

## Deployment

Currently deployed on Vercel via GitHub integration. To deploy your own:

1. Push repo to your GitHub account
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Framework preset: **Next.js** (auto-detected)
4. No environment variables needed
5. Deploy

Or build locally:

```bash
npm run build
npm run start
```

---

## What's Complete

- All 6 pages built and responsive
- Full animation system (Framer Motion)
- YouTube video embeds on About, Clients, Contractors
- Member Resources with all links from source document
- Mobile responsive across all pages
- Navbar with mobile hamburger menu

---

## What's NOT Complete

| Item | Status |
|------|--------|
| Contact form | Frontend built, NOT wired to email backend (recommend Resend or similar) |
| Our Partners page | Not built — waiting on testimonials |
| Favicon | Not added |
| OG image | Not added |
| Transparent CS symbol image | Waiting on asset from Dave |

---

## Key Files to Know

- **`app/components/ResourcesHub.tsx`** — All member resource links live here as structured data. To add/remove links, edit the `sections` array.
- **`app/components/VideoPlaceholder.tsx`** — Reusable YouTube embed component. Pass `youtubeId` prop to change videos.
- **`app/(main)/layout.tsx`** — Controls Navbar + Footer on all pages.
- **`app/globals.css`** — Color variables and Tailwind config.

---

## External URLs in the Site

- **Register Now** buttons → `https://www.compliancesync.com/members/Registration/CreateAccount.aspx`
- **Member Login** → `https://www.compliancesync.com/members/Registration/CreateAccount.aspx`
- All Member Resources links → various external sites (documented in ResourcesHub.tsx)

---

## Support

For questions about the codebase, contact:

**Jordan Flis**
jordan@ultracreativehouse.ca
705-331-1232
