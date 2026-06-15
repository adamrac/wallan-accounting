# Wallan Accounting & Bookkeeping — Website

A fast, static, **local-SEO–focused** website for Wallan Accounting & Bookkeeping (Wallan, VIC),
built with [Astro](https://astro.build/). It is engineered to rank for local accounting and
bookkeeping queries across Wallan, the Mitchell Shire and the surrounding region of Victoria.

## Why this ranks locally

The site uses **programmatic SEO**: instead of one page, it generates hundreds of unique,
keyword-targeted, internally-linked pages.

- **Service pages** — one per service (tax returns, BAS, bookkeeping, payroll, etc.)
- **Location pages** — one per town/suburb across the region (`/locations/<town>/`)
- **Service × Location pages** — the big local play: every service crossed with every town
  (e.g. `/locations/kilmore/bookkeeping/`), targeting "<service> in <town>" searches
- **Resources/blog** — informational articles targeting "how much…", "when is BAS due…" queries

### Built-in SEO best practices

- Unique `<title>` + meta description per page
- Canonical URLs, Open Graph + Twitter cards
- Structured data (JSON-LD): `AccountingService` (site-wide), `Service`, `BreadcrumbList`,
  `FAQPage`, `Article`
- Auto-generated `sitemap-index.xml` + `sitemap-*.xml` (via `@astrojs/sitemap`)
- `robots.txt` pointing to the sitemap
- Semantic, accessible, mobile-first HTML; static output for excellent Core Web Vitals
- Deep internal linking (services ↔ locations ↔ nearby areas)

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → ./dist
npm run preview    # preview the production build
```

## Project structure

```
src/
  site.config.ts          # ← single source of truth: business name, phone, address (NAP)
  data/
    services.ts           # services + per-service content & FAQs
    locations.ts          # towns/suburbs + coordinates (powers "nearby areas")
    faqs.ts               # general FAQs
    blog.ts               # articles
  layouts/BaseLayout.astro# <head>, SEO meta, JSON-LD
  components/             # Header, Footer, Faqs, CtaBand, Breadcrumbs, Icon
  lib/schema.ts          # JSON-LD builders
  pages/                 # routes (incl. dynamic [service] / [location] pages)
public/                  # robots.txt, favicon.svg, og-image.png
```

## ⚠️ Before launch — confirm these placeholders

Search the code for `PLACEHOLDER`. Update at minimum:

1. **Domain** — `SITE.url` in `src/site.config.ts` (and the domain in `public/robots.txt`).
2. **Email** — `SITE.email`.
3. **ABN** — `SITE.abn`.
4. **Contact form endpoint** — the Formspree `action` URL in `src/pages/contact.astro`
   (or wire it to the client's preferred form/email handler).
5. **Social profiles** — `SITE.social`.

## Recommended off-site SEO (do these too)

- Create & verify a **Google Business Profile** for Wallan Accounting & Bookkeeping with the exact
  same Name/Address/Phone (NAP) as `site.config.ts`.
- Submit `sitemap-index.xml` in **Google Search Console**.
- Get listed in local directories (True Local, Yellow Pages, Hotfrog) with consistent NAP.

## Adding content later

- **New town:** add an entry to `src/data/locations.ts` → it automatically generates a location page
  plus a page for every service in that town, and is added to the sitemap.
- **New service:** add an entry to `src/data/services.ts` → generates its service page and a page in
  every town.
- **New article:** add an entry to `src/data/blog.ts`.
