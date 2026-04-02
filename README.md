# ComplianceSync

**Client:** Compliance Sync Incorporated
**Built by:** Ultra Creative House (ultracreativehouse.ca)

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Our Services |
| `/clients` | For Hiring Clients |
| `/contractors` | For Contractors |
| `/resources` | Member Resources |
| `/contact` | Contact Us |

---

## Design System

### Fonts
- **Display:** Cormorant Garamond (via Google Fonts) — editorial serif for headlines
- **Body:** Inter (via Google Fonts) — clean grotesque for body copy and UI

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#071524` | Primary background |
| `surface` | `#0C2440` | Secondary dark surfaces, cards |
| `cs-blue` | `#0070B3` | Brand blue — links, accents, interactive |
| `magenta` | `#CC2E78` | Primary CTA accent |
| `verified` | `#78B028` | Verified/qualified states, success |
| `cream` | `#F0EBE1` | Light section backgrounds |
| `mist` | `#6B90A8` | Secondary text, decorative rules |

---

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion

---

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Before Launch

- [ ] Replace placeholder stats in `TrustStats.tsx` with real ComplianceSync data
- [ ] Wire `ContactSection.tsx` form to email handler (Resend, Formspree, or API route)
- [ ] Add favicon and OG image to `/public`
- [ ] Update `metadata` in `layout.tsx` with final SEO copy
