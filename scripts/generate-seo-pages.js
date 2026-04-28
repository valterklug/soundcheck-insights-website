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
    title: 'Soundcheck Insights — AI Market Intelligence for Agencies & Investors',
    description: 'AI-powered market intelligence platform for agencies, consultancies, and investors. Six fixed-scope research products delivered under your brand in as little as 48 hours.',
    image: '/og/og-home.png',
  },
  '/products': {
    title: 'Research Products | Soundcheck Insights',
    description: 'Six fixed-scope market intelligence products: Expansion Reports, Idea Validation, Business Plans, Focus Groups, Growth Roadmaps, and Funding Vetting. Fixed price, fixed timeline, white-label ready.',
    image: '/og/og-products.png',
  },
  '/how-it-works': {
    title: 'How It Works | Soundcheck Insights',
    description: 'Four steps from brief to delivery. You run the client intake, the AI generates the research, you validate with your expertise, and you deliver under your brand.',
    image: '/og/og-how-it-works.png',
  },
  '/for-agencies': {
    title: 'For Agencies & Consultancies | Soundcheck Insights',
    description: 'Add a $400 to $1,250+/hour revenue line to your practice with zero new headcount. White-label market intelligence you operate for your clients.',
    image: '/og/og-for-agencies.png',
  },
  '/for-investors': {
    title: 'For Investors — Funding Vetting Analysis | Soundcheck Insights',
    description: 'Structured triage for your deal pipeline. Two independent interviews, contradiction analysis, and a one-page ADVANCE / CONDITIONAL / STOP verdict. US$3,000 per company.',
    image: '/og/og-for-investors.png',
  },
  '/expansion-report': {
    title: 'International Expansion Viability Report | Soundcheck Insights',
    description: 'Decision-grade market entry intelligence. CVE Score, competitive landscape, regulatory snapshot, distribution channel map, and 12-month roadmap. 100+ pages in 14 days.',
    image: '/og/og-expansion-report.png',
  },
  '/idea-validation': {
    title: 'Idea Validation Analysis | Soundcheck Insights',
    description: 'Know if your idea has a market before you spend a dollar building it. IVS Score (0-100), market sizing, competitive analysis. US$799. 48-hour delivery.',
    image: '/og/og-idea-validation.png',
  },
  '/business-plan': {
    title: 'Business Plan Development | Soundcheck Insights',
    description: 'Professional, audience-specific business plans. 6 configurations: Investor, Bank/SBA, Immigration (E-2/EB-5/L-1A), Franchise, CPG, Founder. US$5,000+.',
    image: '/og/og-business-plan.png',
  },
  '/growth-roadmap': {
    title: 'US Growth Roadmap | Soundcheck Insights',
    description: 'For B2B service companies and CPG brands that have stalled. GPS Score (0-100), ranked growth levers with investment estimates, and a 90-day action plan.',
    image: '/og/og-growth-roadmap.png',
  },
  '/scale-assessment': {
    title: 'Scale Assessment | Soundcheck Insights',
    description: 'For US consumer brands at strategic inflection points. Know whether you are built to scale, identify defensible expansion opportunities, and get a 24-month phased scale plan with AI-augmented intelligence.',
    image: '/og/og-scale-assessment.png',
  },
  '/founder-pass': {
    title: 'Founder Pass | Soundcheck Insights',
    description: 'Founder-grade market intelligence before you have a market. Validation Sprint ($750), Brand Brief ($1,500), Focus Test ($1,500). 3-7 day delivery.',
    image: '/og/og-founder-pass.png',
  },
  '/investor-vetting': {
    title: 'Investor Opportunity Vetting | Soundcheck Insights',
    description: 'Independent vetting infrastructure for investors who run pipeline at scale. Single vettings from $1,500 or subscription tiers from $2,500/month.',
    image: '/og/og-investor-vetting.png',
  },
  '/virtual-focus-groups': {
    title: 'Virtual Focus Group Sessions · Module 03 | Soundcheck Insights',
    description: 'Test concepts against research-grounded buyer personas. $4,000 per session. Three feedback rounds included.',
    image: '/og/og-virtual-focus-groups.png',
  },
  '/research-platform': {
    title: 'Consumer Intelligence Platform | Soundcheck Insights',
    description: 'Three connected modules: Market Research, Consumer Journey Maps, Virtual Focus Group Sessions.',
    image: '/og/og-products.png',
  },
  '/consumer-journeys': {
    title: 'Consumer Journey Maps · Module 02 | Soundcheck Insights',
    description: 'Brand-specific consumer journey maps. $400 per persona.',
    image: '/og/og-products.png',
  },
  '/market-research': {
    title: 'Market Research · Module 01 | Soundcheck Insights',
    description: 'Decision-grade market research with buyer personas. From $4,000.',
    image: '/og/og-products.png',
  },
  '/partner': {
    title: 'Request Platform Access | Soundcheck Insights',
    description: 'Join the Soundcheck operator network. Deliver AI-powered market intelligence under your brand. Self-serve or full-service.',
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
    description: 'Brief a product, ask about agency partnerships, or tell us what you need. Response within 2 business days.',
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
