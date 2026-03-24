# Solexi.ai — Digital Legacy Preservation Platform

## Project Overview

Solexi.ai is a multilingual, single-page website for a digital legacy preservation platform. The site helps people organize their memories, documents, access credentials, and final wishes for their loved ones — in case of incapacity or after death.

**Design system**: Scandinavian-clean, inspired by 3 reference images (light-oak hexagonal libraries, ethereal luminous silhouettes, zenith lighting). Emotional tone: serenity, peace, care.

**Palette**: Off-white `#f7f4ef`, Cream `#ede8df`, Linen `#ddd0b3`, Slate `#8fa3b1`, Slate-deep `#4a7082`, Charcoal `#3a3530`, Ink `#1e1c1a`.

**Typography**: Cormorant Garamond (headings) + Inter (body).

---

## Completed Features

### ✅ Multilingual Homepage (EN / FR / ES)
- **English (dominant)**: `/index.html` → `https://solexi.ai/`
- **French**: `/fr/index.html` → `https://solexi.ai/fr/`
- **Spanish**: `/es/index.html` → `https://solexi.ai/es/`

Each homepage includes:
- Sticky navigation with logo, section links, language selector (EN·FR·ES), CTA button
- Hero section with **4-photo cross-fade carousel** background (happy people), CSS library shelves, ethereal spirit animation, floating particles
- Stats band (50% without will, $15k lost, 5 min to start, 1/3 with estate plan)
- About section with reference photo + "2023 founded" badge
- Hexagonal memory wall (emoji-based CSS hex grid)
- Three-pillar feature section (Structure, Transmission, Continuity)
- Dark library section with statistics grid (72h, 80%, 3 years, 0 excuses)
- Central quote section
- Process timeline (4 steps)
- Split image section with reference photo
- Registration form (first name, email, optional phone) with JS validation + toast
- FAQ accordion (5 questions, Schema.org FAQPage)
- Testimonials (3 Canadian users)
- Founder section (Daniel Tanguay)
- Full footer (4 columns, social icons, language selector)

### ✅ Trust Center (EN / FR / ES)
- **English**: `/trust/index.html` → `https://solexi.ai/trust/`
- **French**: `/fr/trust/index.html` → `https://solexi.ai/fr/trust/`
- **Spanish**: `/es/trust/index.html` → `https://solexi.ai/es/trust/`

Each Trust Center includes:
- Three tabbed sections: Privacy, Security, AI Policy
- Privacy: 11 sections (summary, scope, collection, purposes, AI, legal basis, retention, third-parties, rights, incidents, contact)
- Security: 6 sections with 8 controls + 24-month roadmap (Phase 1–3)
- AI Policy: 6 sections (features, consent model, data handling, transparency, safety controls, rights)
- FAQPage Schema.org (5 FAQ rich snippets per language)
- Sticky tab navigation with smooth scroll
- GTM events: trust_tab_switch

### ✅ SEO & Technical
- Full Schema.org: WebSite, WebPage, Organization, Service, FAQPage, Person
- Open Graph (10+ tags per page, 1200×630 image)
- Twitter Card (summary_large_image)
- hreflang (EN, FR, ES, x-default) on all 6 pages
- Google Tag Manager (**GTM-5DZLVZS9** — production)
- GTM events: menu_open, anchor_click, faq_open, form_submit, cta_click, trust_tab_switch, 404_page_view, waitlist_thank_you_view, share_click
- Canonical URLs on all pages
- Robots meta: index, follow, max-image-preview:large
- Accessibility: skip links, ARIA labels, keyboard navigation, screen reader support

---

## Site Map

```
solexi.ai/
├── /                    → English homepage (index.html) ✅ DOMINANT
├── /fr/                 → French homepage (fr/index.html) ✅
├── /es/                 → Spanish homepage (es/index.html) ✅
├── /trust/              → Trust Center EN (trust/index.html) ✅
├── /fr/trust/           → Trust Center FR (fr/trust/index.html) ✅
├── /es/trust/           → Trust Center ES (es/trust/index.html) ✅
├── /404.html            → Custom 404 page (404.html) ✅
├── /thank-you.html      → Waitlist confirmation (thank-you.html) ✅
├── /sitemap.xml         → XML sitemap ✅
├── /robots.txt          → Crawl directives ✅
├── /solutions/          → Solutions page 🔲
├── /research/           → Research page 🔲
├── /glossary/           → Glossary page 🔲
├── /celebrities/        → Celebrities page 🔲
├── /terms/              → Terms of Use 🔲
└── source/              → Original HTML source files
    ├── privacy.html
    ├── security.html
    └── ai-policy.html
```

---

## File Structure

```
index.html              → English homepage (dominant)
fr/
  ├── index.html         → French homepage
  └── trust/
      └── index.html     → Trust Center FR
es/
  ├── index.html         → Spanish homepage
  └── trust/
      └── index.html     → Trust Center ES
trust/
  └── index.html         → Trust Center EN
404.html                → Custom 404 page
thank-you.html          → Waitlist confirmation
sitemap.xml             → XML sitemap with hreflang
robots.txt              → Search engine directives
images/
  ├── hero-1.jpg          → Carousel: elderly couple smiling (Pexels 7236499)
  ├── hero-2.jpg          → Carousel: mother & daughter laughing (Pexels 8136398)
  ├── hero-3.jpg          → Carousel: happy family on couch (Pexels 6148987)
  └── hero-4.jpg          → Carousel: family hugging (Pexels 6148945)
source/
  ├── privacy.html       → Original privacy source
  ├── security.html      → Original security source
  └── ai-policy.html     → Original AI policy source
README.md               → This file
```

---

## Functional Entry URIs

| URI | Language | Page | Status |
|-----|----------|------|--------|
| `/` | EN | Homepage | ✅ |
| `/fr/` | FR | Page d'accueil | ✅ |
| `/es/` | ES | Página de inicio | ✅ |
| `/trust/` | EN | Trust Center | ✅ |
| `/trust/#privacy` | EN | Privacy Policy tab | ✅ |
| `/trust/#security` | EN | Security & Trust tab | ✅ |
| `/trust/#ai` | EN | AI Policy tab | ✅ |
| `/fr/trust/` | FR | Centre de confiance | ✅ |
| `/fr/trust/#privacy` | FR | Onglet Confidentialité | ✅ |
| `/fr/trust/#security` | FR | Onglet Sécurité | ✅ |
| `/fr/trust/#ai` | FR | Onglet Politique IA | ✅ |
| `/es/trust/` | ES | Centro de confianza | ✅ |
| `/es/trust/#privacy` | ES | Pestaña Privacidad | ✅ |
| `/es/trust/#security` | ES | Pestaña Seguridad | ✅ |
| `/es/trust/#ai` | ES | Pestaña Política de IA | ✅ |
| `/#faq` | EN | FAQ section | ✅ |
| `/#form` | EN | Registration form | ✅ |
| `/fr/#faq` | FR | Section FAQ | ✅ |
| `/fr/#form` | FR | Formulaire d'inscription | ✅ |
| `/es/#faq` | ES | Sección FAQ | ✅ |
| `/es/#form` | ES | Formulario de registro | ✅ |
| `/404.html` | EN | Custom 404 page | ✅ |
| `/thank-you.html` | EN | Waitlist confirmation | ✅ |
| `/sitemap.xml` | — | XML sitemap | ✅ |
| `/robots.txt` | — | Crawl directives | ✅ |

---

## External Dependencies

| Resource | CDN | Purpose |
|----------|-----|---------|
| Cormorant Garamond | Google Fonts | Heading typography |
| Inter | Google Fonts | Body typography |
| Google Tag Manager | googletagmanager.com | Analytics & event tracking (GTM-5DZLVZS9) |

No other external dependencies. Pure HTML/CSS/JS. Self-contained files.

### Hero Carousel
- 4 photos (Pexels, free license) rotating every 5 s with 1.6 s cross-fade
- Dark overlay (≈ 50 % opacity gradient) for white-text readability
- Dot navigation (clickable, resets timer)
- Responsive: images use `background-size:cover`
- Photos: `images/hero-1.jpg` through `images/hero-4.jpg`

---

## Not Yet Implemented

1. **Solutions page** (`/solutions/`) — Use cases and solutions
2. **Research page** (`/research/`) — Research and publications
3. **Glossary** (`/glossary/`) — Digital legacy terminology
4. **Celebrities page** (`/celebrities/`) — Celebrity use cases
5. **Terms of Use** (`/terms/`) — Legal terms
6. **OG image** — Create `images/og-home.jpg` and `images/og-trust.jpg` (1200×630)
7. **Favicons** — Create `favicon.svg`, `favicon.png`, `apple-touch-icon.png`
8. **Backend form submission** — Currently client-side only

---

## Recommended Next Steps

1. Generate OG images and favicons
2. Connect registration form to backend/CRM (e.g., Mailchimp, HubSpot)
3. Create remaining content pages (Solutions, Research, Glossary, Celebrities, Terms)
4. Configure Vercel rewrites if needed (`vercel.json`)
5. Deploy via the **Publish tab** or push to GitHub

---

## Contact

- **Founder**: Daniel Tanguay, CEO & Founder
- **Company**: Solexi.ai Inc.
- **Address**: 527 rue Lacasse, Terrebonne, QC J6W 4Y7, Canada
- **Email**: Daniel@solexi.ai
- **Phone**: +1-514-570-3074

© 2025 Solexi.ai Inc.
