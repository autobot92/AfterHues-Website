# AfterHues Studio — Official Website

A production-minded, accessible, and SEO-optimized web application for **AfterHues Studio**, crafted with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Brand Identity & Design System

- **Brand Name:** AfterHues Studio
- **Tagline:** *A Scent for Every Hue.*
- **Aesthetic:** Minimalist, refined, creative, and warm premium candle brand experience. Uncluttered composition with generous white space, thin borders, restrained transitions, and prominent label-focused photography.
- **Color Palette:**
  - **Deep Burgundy Red (`#85000F`):** Primary brand accent, hero headers, feature banners, and focused CTAs.
  - **Ivory White (`#F7F3ED`):** Content backgrounds, product surfaces, and light cards.
  - **Champagne Beige (`#B99B7A`):** Divider details, badges, subtle borders, and delicate accents.
- **Brand Assets:**
  - Official Logo: `Brand_Assets/Website_Logo.png` (mapped to `/Brand_Assets/Website_Logo.png` & `/images/brand/Website_Logo.png`)
  - Official Favicon: `Brand_Assets/Favicon.png` (mapped to `/favicon.ico`, `/favicon.png`, and Apple touch icons)
  - No synthetic or stock imagery has been introduced; only the supplied brand assets and original product photography are used.

---

## 2. Sitemap & Routes

The application implements all 6 main pages plus 15 canonical product detail pages:

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Editorial Hero, Shop by Category (7 exact categories), Featured Fragrances, Brand Story teaser, Amazon Storefront CTA, and Footer. *(No unverified testimonials).* |
| `/about` | **About Us** | Official brand story, fragrance-led collections, thoughtful presentation, and everyday rituals. |
| `/products` | **Our Products** | Interactive category filter tabs, responsive product grid (preserving exact brief order), and visually separated "Explore More Collections" section. |
| `/products/[slug]` | **Product Detail** | Dedicated canonical route for each of the 15 candles with gallery switcher, touch swipe, confirmed fragrance note breakdown, candle care rituals, and direct Amazon purchase buttons. |
| `/contact` | **Contact Us** | Inquiry form with client/server validation, honeypot anti-spam, and central studio contact details. |
| `/privacy-policy` | **Privacy Policy** | 10-section policy tailored to the Amazon marketplace checkout model. |
| `/return-refund-policy` | **Return & Refund Policy** | Clear eligibility terms, 24-hour damaged product reporting protocol with unboxing video instructions, and failed transaction terms. |
| `/sitemap.xml` | **Sitemap** | Dynamic XML sitemap indexing all 21 URLs. |
| `/robots.txt` | **Robots** | Search engine crawler instructions linking to sitemap. |

---

## 3. Product Catalog & Image Inventory

All **42 supplied original images across 15 product folders** are wired directly:

| Product Name | Slug | Images | Fragrance Notes | Net Weight | Burn Time | Amazon URL Status |
|---|---|---|---|---|---|---|
| **Cafe Vanilla Melt** | `cafe-vanilla-melt` | 3 | Head: Coffee · Heart: Vanilla · Base: Sandalwood | 100 g | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |
| **Calm Heaven** | `calm-heaven` | 3 | Head: Lavender · Heart: Vanilla · Base: Sandalwood | 100 g | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |
| **Garden Cafe** | `garden-cafe` | 3 | Head: Strawberry · Heart: Jasmine · Base: Coffee, Vanilla | 100 g | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |
| **Moonlit Jasmine** | `moonlit-jasmine` | 3 | Head: Lemongrass · Heart: Jasmine, Rose · Base: Sandalwood, Vanilla | 100 g | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |
| **Nightwood** | `nightwood` | 3 | Head: Lemongrass · Heart: Coffee · Base: Sandalwood, Vanilla | 100 g | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |
| **Nordic Stag** | `nordic-stag` | 3 | Head: Peppermint, Lemongrass · Heart: Lavender · Base: Sandalwood | 100 g | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |
| **Rose Strawberry Macaron** | `rose-strawberry-macaron` | 3 | Head: Strawberry · Heart: Rose · Base: Vanilla | 100 g | 20 Hrs | Direct ASIN Mapped (`B0GS1K3F2B` - `Buy on Amazon`) |
| **Sandalwood Espresso** | `sandalwood-espresso` | 3 | Head: Peppermint · Heart: Coffee · Base: Sandalwood, Vanilla | 100 g | 20 Hrs | Direct ASIN Mapped (`B0GS1PVZ69` - `Buy on Amazon`) |
| **Silk Bouquet** | `silk-bouquet` | 3 | Head: Lavender · Heart: Rose, Jasmine · Base: Vanilla | 100 g | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |
| **Spa Slush** | `spa-slush` | 3 | Head: Lemongrass, Peppermint · Heart: Lavender · Base: Vanilla | 100 g / 100 ml | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |
| **Strawberry Cream Cloud** | `strawberry-cream-cloud` | 3 | Head: Strawberry · Heart: Vanilla · Base: Sandalwood | 100 g | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |
| **Velvet Rose Creme** | `velvet-rose-creme` | 3 | Head: Lavender · Heart: Rose · Base: Vanilla, Sandalwood | 100 g | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |
| **Coffee** | `coffee` | 2 | *Unconfirmed — omitted per brief* | 100 ml | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |
| **Lemongrass Breeze** | `lemongrass-breeze` | 2 | *Unconfirmed — omitted per brief* | 100 ml | 20 Hrs | Direct ASIN Mapped (`B0GSB8Z6Q6` - `Buy on Amazon`) |
| **Jasmine Whisper** | `jasmine-whisper` | 2 | *Unconfirmed — omitted per brief* | 100 ml | 20 Hrs | Direct ASIN Mapped (`Buy on Amazon`) |

> **Catalog Integrity Rules Enforced:**
> - The removed names `Ispatals` and `Royal Sandalwood` do not exist in the code or catalog.
> - `Spa Slush` is assigned to **DARK-WOODS & BARBERSHOP**, **MODERN MINIMAL**, and **FOR HER**.
> - Products appearing in multiple categories reference a single canonical record and single detail route.
> - For all 12 products with 3 images, the second image variant (`02.png`, lifestyle jar photo) is used as the primary display image everywhere, with all original images preserved in the gallery. Coffee, Lemongrass Breeze, and Jasmine Whisper retain their attractive main images.
> - All 15 products now have verified direct Amazon product links mapped.

---

## 4. Pending Brand Owner Updates (Action Required Before Launch)

### A. Contact Information Confirmation
The contact details below were extracted from business policy documents. The brand owner must confirm these values in `src/config/site.ts`:
- **Phone:** `9410057736`
- **Email:** `divyansh.gpt@gmail.com`
- **Customer Care Support Email:** `customercare@afterhues.com`
- **Studio Address:** `11486-E, Sant Nagar Road, Rani Bagh, New Delhi – 110034, India`

### C. Policy & Sales Channel Alignment
Because checkout occurs on Amazon India rather than via an on-site cart:
- The **Privacy Policy** clarifies that no payment credentials, card numbers, or checkout details are collected or stored on this website.
- The **Return & Refund Policy** advises that all products are non-returnable artisanal soy wax items, but damaged deliveries reported within 24 hours with an unboxing video are resolved via `customercare@afterhues.com`. It also notes that Amazon orders may be managed through Amazon's customer service.

---

## 5. Technical Stack & Key Features

- **Framework:** Next.js 15 App Router (`next@15.5.x`) with React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4 with custom theme tokens (`burgundy`, `ivory`, `champagne`, `ink`)
- **Icons:** Lucide React
- **Product Card Hover Slideshow:**
  - Starts with image `01`.
  - On desktop hover/focus, automatically cycles through available images (3 images for 12 products; 2 images for Coffee, Lemongrass Breeze, Jasmine Whisper) at an interval of 1.4 seconds.
  - Automatically resets to image `01` on pointer exit.
  - Full support for `prefers-reduced-motion` (disables auto-rotation for accessibility).
- **Mobile & Touch Product Gallery:**
  - Swipe gestures for touchscreens on detail pages.
  - Keyboard arrow navigation (`ArrowLeft` / `ArrowRight`).
  - Thumbnail carousel with visual active states and counter (`1 of 3`).
- **Contact Form Backend (`/api/contact`):**
  - Server-side field validation and input sanitization.
  - Honeypot anti-spam field (`website_hp`) to catch automated bots.
  - Timestamp velocity check (submissions under 1.5 seconds from page load are rejected).
  - Native integration with **Resend** REST API via `RESEND_API_KEY`.
  - Zero logging of personal user data in server console logs.
- **SEO & Structured Data:**
  - JSON-LD `Organization` schema on root layout.
  - JSON-LD `Product` schema on each product detail page (using only verified data; no fake prices, ratings, or review counts).
  - OpenGraph & Twitter Card metadata across all routes.

---

## 6. Getting Started & Running Locally

### Prerequisites
- Node.js 18.18+ or Node.js 20+ / 24+
- `pnpm` (recommended), `npm`, or `yarn`

### Setup Instructions

1. **Clone or navigate to the workspace:**
   ```bash
   cd "h:\AfterHues Website"
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or: npm install
   ```

3. **Configure environment variables:**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   For local testing without email credentials, `.env.local` comes pre-configured with:
   ```env
   DEV_MOCK_EMAIL=true
   ```

4. **Run the development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build and test the production bundle:**
   ```bash
   pnpm build
   pnpm start -p 3000
   ```

---

## 7. Environment Variables Reference

| Variable | Required in Prod | Description | Example |
|---|---|---|---|
| `RESEND_API_KEY` | **Yes** (for mail) | API key from [Resend](https://resend.com) to deliver contact submissions. | `re_123456789...` |
| `MAIL_FROM` | Optional | Verified sender address in Resend. | `AfterHues Studio <hello@afterhues.com>` |
| `CONTACT_RECIPIENT_EMAIL` | Optional | Destination inbox to receive inquiries (defaults to `siteConfig.contact.supportEmail`). | `customercare@afterhues.com` |
| `DEV_MOCK_EMAIL` | Development only | Set to `"true"` to simulate form submissions locally without sending emails. | `false` |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical site URL for metadata and sitemap generation. | `https://afterhues.com` |

---

## 8. Deployment Guide

### Deploying to Vercel (Recommended)
1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project into the [Vercel Dashboard](https://vercel.com).
3. Under **Environment Variables**, add:
   - `RESEND_API_KEY`: your Resend production API key
   - `MAIL_FROM`: your verified domain sender
   - `CONTACT_RECIPIENT_EMAIL`: `customercare@afterhues.com`
   - `DEV_MOCK_EMAIL`: `false`
4. Click **Deploy**. Vercel will build and serve all static and dynamic routes instantly.

### Deploying to Netlify or Node.js VPS
- **Build command:** `pnpm build` (or `npm run build`)
- **Output directory:** `.next`
- **Node version:** `>= 18.18.0`
