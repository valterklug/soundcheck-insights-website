/**
 * Post-build script: generates a static index.html for each route
 * with the correct OG meta tags baked in.
 *
 * Crawlers (WhatsApp, LinkedIn, Facebook, Twitter, Slack) read static HTML
 * and never execute JS. This script copies the built index.html into
 * route-specific directories (e.g. dist/products/index.html) with the
 * correct <title>, <meta>, and OG tags for each page.
 *
 * The SPA JS bundle still loads, so real users get the full React app.
 *
 * Run after `vite build`: node scripts/generate-seo-pages.js
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const SITE_URL = 'https://soundcheckinsights.com'
const SITE_NAME = 'Soundcheck Insights'

// ─── Per-page SEO data ────────────────────────────────────────────────────────
const pages = {
  '/': {
    title: 'Soundcheck Insights — AI-Native Market Intelligence for Operators',
    description: 'AI-native market intelligence for operators — agencies, consultancies, and fractional executives delivering productized research to international brands entering and scaling in the US.',
    image: '/og/og-home.png',
  },
  '/products': {
    title: 'Research Products | Soundcheck Insights',
    description: 'Five fixed-scope market intelligence products: Market Research, GoGlobal Viability Analysis, Scale Assessment, Customer Journey Maps, and Virtual Focus Groups. Fixed price, fixed timeline.',
    image: '/og/og-products.png',
  },
  '/how-it-works': {
    title: 'How It Works | Soundcheck Insights',
    description: 'Four steps from brief to delivery. You run the client intake, the AI generates the research, you validate with your expertise, and you deliver under your brand.',
    image: '/og/og-how-it-works.png',
  },
  '/for-agencies': {
    title: 'For Agencies & Consultancies | Soundcheck Insights',
    description: 'Keep 70% of MSRP. White-label market intelligence you operate for your clients. Trial available — no setup fee, no commitment.',
    image: '/og/og-for-agencies.png',
  },
  '/expansion-report': {
    title: 'GoGlobal Viability Analysis | Soundcheck Insights',
    description: 'CVE Score, competitive landscape, regulatory snapshot, distribution channel map, and phased roadmap. $2,000. Requires Market Research.',
    image: '/og/og-expansion-report.png',
  },
  '/scale-assessment': {
    title: 'Scale Assessment | Soundcheck Insights',
    description: 'For US consumer brands at strategic inflection points. Scale Diagnostic, 24-month phased plan, AI-augmented intelligence layer. $4,000. Requires Market Research.',
    image: '/og/og-scale-assessment.png',
  },
  '/virtual-focus-groups': {
    title: 'Virtual Focus Group Sessions | Soundcheck Insights',
    description: 'Test concepts against research-grounded buyer personas. $3,000 per session. Re-test pack available. Requires Market Research.',
    image: '/og/og-virtual-focus-groups.png',
  },
  '/research-platform': {
    title: 'Market Research Platform | Soundcheck Insights',
    description: 'Five modular products. Every engagement starts here. Market Research from $3,000, plus Customer Journey Maps, Virtual Focus Groups, GoGlobal, and Scale Assessment.',
    image: '/og/og-products.png',
  },
  '/consumer-journeys': {
    title: 'Customer Journey Maps | Soundcheck Insights',
    description: 'Brand-specific customer journey maps. $500 per persona. Requires Market Research.',
    image: '/og/og-products.png',
  },
  '/market-research': {
    title: 'Market Research | Soundcheck Insights',
    description: 'Decision-grade market research with buyer personas. S/M/L tiers: $3,000 / $3,500 / $4,000.',
    image: '/og/og-products.png',
  },
  '/mana-tech': {
    title: 'Mana Tech Member Rate — 25% Off | Soundcheck Insights',
    description: 'Decision-grade market intelligence for Mana Tech operators, Scale2Miami ecosystem partners, and the mentor network. 25% off MSRP on all five products.',
    image: '/og/og-products.png',
  },
  '/partner': {
    title: 'Become an Operator Partner | Soundcheck Insights',
    description: 'Join the Soundcheck operator network. Deliver AI-powered market intelligence under your brand. White-label delivery, operator economics, Mana Tech member rates.',
    image: '/og/og-partner.png',
  },
  '/our-partners': {
    title: 'Our Partners | Soundcheck Insights',
    description: 'Agencies and consultancies operating Soundcheck Insights for their clients.',
    image: '/og/og-our-partners.png',
  },
  '/resources': {
    title: 'Resources & Insights | Soundcheck Insights',
    description: 'Articles, guides, and market intelligence from Soundcheck Insights.',
    image: '/og/og-resources.png',
  },
  '/contact': {
    title: 'Contact Soundcheck Insights',
    description: 'Brief a product, ask about operator partnerships, or tell us what you need. Response within 2 business days.',
    image: '/og/og-contact.png',
  },
  '/articles/us-market-assumptions': {
    title: 'US Market Entry: Assumptions That Kill Deals | Soundcheck Insights',
    description: 'Why international brands fail when entering the US market, and what the data actually says.',
    image: '/og/og-articles-us-market-assumptions.png',
  },
}

// ─── Read the built index.html as template ────────────────────────────────────
const template = readFileSync(join(DIST, 'index.html'), 'utf-8')

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Replace the default meta tags in the template with page-specific ones.
 */
function injectMeta(html, path, { title, description, image }) {
  const canonicalUrl = `${SITE_URL}${path}`
  const imageUrl = `${SITE_URL}${image}`

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${esc(description)}"`
  )

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${esc(title)}"`
  )
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${esc(description)}"`
  )
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${canonicalUrl}"`
  )
  // Replace both og:image occurrences (property tag + width/height follow)
  html = html.replace(
    /<meta property="og:image" content="[^"]*"/g,
    `<meta property="og:image" content="${imageUrl}"`
  )

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${esc(title)}"`
  )
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${esc(description)}"`
  )
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"/,
    `<meta name="twitter:image" content="${imageUrl}"`
  )

  // Add canonical link if not present
  if (!html.includes('<link rel="canonical"')) {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`)
  }

  return html
}

// ─── Spanish SEO overrides ───────────────────────────────────────────────────
const esPages = {}
for (const [path, config] of Object.entries(pages)) {
  esPages[path === '/' ? '/es' : `/es${path}`] = {
    ...config,
    title: config.title
      .replace('Soundcheck Insights —', 'Soundcheck Insights —')
      .replace('| Soundcheck Insights', '| Soundcheck Insights'),
    image: config.image,
  }
}

// ─── Portuguese SEO overrides ────────────────────────────────────────────────
const ptPages = {}
for (const [path, config] of Object.entries(pages)) {
  ptPages[path === '/' ? '/pt' : `/pt${path}`] = {
    ...config,
    title: config.title
      .replace('Soundcheck Insights —', 'Soundcheck Insights —')
      .replace('| Soundcheck Insights', '| Soundcheck Insights'),
    image: config.image,
  }
}

const allPages = { ...pages, ...esPages, ...ptPages }

// ─── Generate ─────────────────────────────────────────────────────────────────
let count = 0

for (const [path, config] of Object.entries(allPages)) {
  // Root page: update the existing dist/index.html in place
  if (path === '/') {
    const html = injectMeta(template, path, config)
    writeFileSync(join(DIST, 'index.html'), html)
    count++
    console.log(`  ✓ / (updated dist/index.html)`)
    continue
  }

  // Other pages: create dist/<path>/index.html
  const dir = join(DIST, ...path.split('/').filter(Boolean))
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }

  const html = injectMeta(template, path, config)
  writeFileSync(join(dir, 'index.html'), html)
  count++
  console.log(`  ✓ ${path}`)
}

console.log(`\nDone. ${count} pages generated with unique OG tags.`)
