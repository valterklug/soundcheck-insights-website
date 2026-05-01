/**
 * SEO configuration for every page of soundcheckinsights.com
 * Each entry maps to a route and provides meta tags, OG image, and JSON-LD schema.
 */

const SITE_URL = 'https://soundcheckinsights.com'

// ─── Organization Schema (shared) ─────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Soundcheck Insights',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-neg.png`,
  description: 'AI-powered market intelligence platform for agencies, consultancies, and investors. Fixed-scope research products delivered under your brand.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@soundcheckinsights.com',
    contactType: 'sales',
    availableLanguage: ['English', 'Portuguese', 'Spanish', 'Italian'],
  },
  sameAs: [
    'https://www.linkedin.com/company/soundcheck-insights',
  ],
}

// ─── Service Schemas ──────────────────────────────────────────────────────────
function serviceSchema(name, description, price, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'Organization', name: 'Soundcheck Insights' },
    url: `${SITE_URL}${url}`,
    ...(price && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'USD',
      },
    }),
  }
}

function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

// ─── Page Configs ─────────────────────────────────────────────────────────────
const seoConfig = {
  '/': {
    title: 'Soundcheck Insights — AI Market Intelligence for Agencies & Investors',
    description: 'AI-powered market intelligence platform for agencies, consultancies, and investors. Six fixed-scope research products delivered under your brand in as little as 48 hours.',
    image: '/og/og-home.png',
    keywords: 'market intelligence, AI research, agency platform, white-label research, market analysis, competitive intelligence, business intelligence',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Soundcheck Insights',
      url: SITE_URL,
      description: 'AI-powered market intelligence platform for agencies, consultancies, and investors.',
      publisher: organizationSchema,
    },
  },

  '/products': {
    title: 'Research Products',
    description: 'Six fixed-scope market intelligence products: Expansion Reports, Idea Validation, Business Plans, Focus Groups, Growth Roadmaps, and Funding Vetting. Fixed price, fixed timeline, white-label ready.',
    image: '/og/og-products.png',
    keywords: 'market research products, expansion report, idea validation, business plan, focus groups, growth roadmap, funding vetting, white-label research',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Soundcheck Insights Research Products',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'International Expansion Viability Report', url: `${SITE_URL}/expansion-report` },
        { '@type': 'ListItem', position: 2, name: 'Idea Validation Analysis', url: `${SITE_URL}/idea-validation` },
        { '@type': 'ListItem', position: 3, name: 'Business Plan Development', url: `${SITE_URL}/business-plan` },
        { '@type': 'ListItem', position: 4, name: 'AI Virtual Focus Groups', url: `${SITE_URL}/products` },
        { '@type': 'ListItem', position: 5, name: 'US Growth Roadmap', url: `${SITE_URL}/growth-roadmap` },
        { '@type': 'ListItem', position: 6, name: 'Funding Vetting Analysis', url: `${SITE_URL}/for-investors` },
      ],
    },
  },

  '/how-it-works': {
    title: 'How It Works',
    description: 'Four steps from brief to delivery. You run the client intake, the AI generates the research, you validate with your expertise, and you deliver under your brand. 6 to 10 hours of your time per report.',
    image: '/og/og-how-it-works.png',
    keywords: 'how soundcheck works, AI research process, market intelligence workflow, agency research platform',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How Soundcheck Insights Works',
      description: 'Four-step process from brief to delivery of market intelligence reports.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Client Intake', text: 'You run the client intake and capture the brief. About 1 hour of your time.' },
        { '@type': 'HowToStep', position: 2, name: 'AI Research', text: 'The platform generates a 30-50 page research report. Automated, days 1-5.' },
        { '@type': 'HowToStep', position: 3, name: 'Expert Validation', text: 'You validate the output with your professional judgment. 5-8 hours of your time.' },
        { '@type': 'HowToStep', position: 4, name: 'Client Delivery', text: 'You deliver under your brand. Your credit. Your next contract.' },
      ],
    },
  },

  '/for-agencies': {
    title: 'For Agencies & Consultancies',
    description: 'Add a $400 to $1,250+/hour revenue line to your practice with zero new headcount. White-label market intelligence you operate for your clients. Self-serve or full-service.',
    image: '/og/og-for-agencies.png',
    keywords: 'agency market intelligence, consultancy research, white-label reports, agency revenue, operator platform',
    schema: serviceSchema(
      'Soundcheck Insights Operator Platform',
      'White-label market intelligence platform for agencies and consultancies. Deliver research-grade reports under your brand at $400-$1,250+/hour effective rate.',
      null,
      '/for-agencies',
    ),
  },

  '/for-investors': {
    title: 'For Investors — Funding Vetting Analysis',
    description: 'Structured triage for your deal pipeline. Two independent interviews, contradiction analysis, and a one-page ADVANCE / CONDITIONAL / STOP verdict. US$3,000 per company. 7-day delivery.',
    image: '/og/og-for-investors.png',
    keywords: 'VC due diligence, startup vetting, deal pipeline triage, investor intelligence, funding analysis, signal brief',
    schema: serviceSchema(
      'Funding Vetting Analysis',
      'Two structured interviews — founder team and real customer — with independent research and a Signal Brief verdict. ADVANCE, CONDITIONAL, or STOP in 7 business days.',
      '3000',
      '/for-investors',
    ),
  },

  '/expansion-report': {
    title: 'International Expansion Viability Report',
    description: 'Decision-grade market entry intelligence for international brands. CVE Score, competitive landscape, regulatory snapshot, distribution channel map, three strategic paths, and 12-month roadmap. 100+ pages in 14 days.',
    image: '/og/og-expansion-report.png',
    keywords: 'international expansion, market entry report, CVE score, market expansion, brand expansion, viability analysis, new market entry',
    schema: serviceSchema(
      'International Expansion Viability Report',
      '100+ page market entry intelligence report with proprietary CVE Score, competitive landscape analysis, regulatory framework, distribution channel mapping, and 12-month roadmap.',
      '5000',
      '/expansion-report',
    ),
  },

  '/idea-validation': {
    title: 'Idea Validation Analysis',
    description: 'Know if your idea has a market before you spend a dollar building it. IVS Score (0-100), market sizing, competitive analysis, and customer willingness-to-pay. US$799. 48-hour delivery. No calls needed.',
    image: '/og/og-idea-validation.png',
    keywords: 'idea validation, market validation, startup idea testing, IVS score, business idea analysis, willingness to pay',
    schema: serviceSchema(
      'Idea Validation Analysis',
      'AI-powered idea validation with IVS Score (0-100) covering problem validity, market opportunity, competitive whitespace, customer demand signals, and idea differentiation. 48-hour delivery.',
      '799',
      '/idea-validation',
    ),
  },

  '/business-plan': {
    title: 'Business Plan Development',
    description: 'Professional, audience-specific business plans built from structured intake and independent research. 6 configurations: Investor, Bank/SBA, Immigration (E-2/EB-5/L-1A), Franchise, CPG, Founder. US$5,000+.',
    image: '/og/og-business-plan.png',
    keywords: 'business plan, investor business plan, immigration business plan, E-2 visa, EB-5, franchise business plan, SBA loan plan',
    schema: serviceSchema(
      'Business Plan Development',
      'Audience-specific business plans with 6 configurations: Investor, Bank/SBA, Immigration (E-2/EB-5/L-1A), Franchise, CPG, and Founder. 10-section structure, sourced claims, documented assumptions.',
      '5000',
      '/business-plan',
    ),
  },

  '/growth-roadmap': {
    title: 'US Growth Roadmap',
    description: 'For B2B service companies and CPG brands that have stalled. GPS Score (0-100), ranked growth levers with investment estimates, competitive intelligence, and a 90-day action plan. US$5,000+. 14-day delivery.',
    image: '/og/og-growth-roadmap.png',
    keywords: 'growth roadmap, growth strategy, GPS score, B2B growth, CPG growth, competitive analysis, 90-day action plan',
    schema: serviceSchema(
      'US Growth Roadmap',
      'Market analysis, competitive intelligence, proprietary GPS Score (0-100), ranked growth levers with investment estimates, and a 90-day action plan for B2B services and CPG brands.',
      '5000',
      '/growth-roadmap',
    ),
  },

  '/scale-assessment': {
    title: 'Scale Assessment',
    description: 'For US consumer brands at strategic inflection points. Know whether you are built to scale, identify defensible expansion opportunities, and get a 24-month phased scale plan with AI-augmented intelligence. $9,500–$14,500. 3–4 week delivery.',
    image: '/og/og-scale-assessment.png',
    keywords: 'scale assessment, scaling strategy, operational readiness, business scaling, consumer brand growth, market expansion, AI market intelligence',
    schema: serviceSchema(
      'Scale Assessment',
      'Comprehensive assessment for consumer brands: scale diagnostic, market opportunity map, competitive position analysis, operational readiness evaluation, phased 24-month scale plan, and 90-day AI-augmented intelligence layer.',
      '9500',
      '/scale-assessment',
    ),
  },

  '/founder-pass': {
    title: 'Founder Pass',
    description: 'Founder-grade market intelligence before you have a market. Validation Sprint ($750), Brand Brief ($1,500), Focus Test ($1,500). 3–7 day delivery for early-stage startups.',
    image: '/og/og-founder-pass.png',
    keywords: 'founder validation, startup market research, idea validation, early-stage intelligence, founder market analysis, startup positioning',
    schema: serviceSchema(
      'Founder Pass',
      'Three founder-grade market intelligence products for early-stage startups: Validation Sprint, Brand Brief, and Focus Test. Fast turnaround, fixed pricing, no revision rounds.',
      '750',
      '/founder-pass',
    ),
  },

  '/investor-vetting': {
    title: 'Investor Opportunity Vetting',
    description: 'Independent vetting infrastructure for investors who run pipeline at scale. Single vettings from $1,500 or subscription tiers from $2,500/month. Standardized methodology.',
    image: '/og/og-investor-vetting.png',
    keywords: 'investor vetting, deal evaluation, VC due diligence, startup vetting, investment analysis, portfolio evaluation, deal flow intelligence',
    schema: serviceSchema(
      'Investor Opportunity Vetting',
      'Standardized vetting reports for VCs, PE firms, family offices, and angel syndicates. Founder assessment, market validation, competitive landscape, traction check, and risk frame.',
      '1500',
      '/investor-vetting',
    ),
  },

  '/virtual-focus-groups': {
    title: 'Virtual Focus Group Sessions · Module 03',
    description: 'Test packaging, taglines, creative territories, and pricing claims against research-grounded buyer personas. $4,000 per session. Three feedback rounds included. Reusable panels.',
    image: '/og/og-virtual-focus-groups.png',
    keywords: 'virtual focus groups, AI focus groups, consumer testing, packaging testing, creative testing, pricing testing, buyer personas, concept testing',
    schema: serviceSchema(
      'Virtual Focus Group Sessions',
      'Test any concept against your research-grounded persona panel. Preference votes, verbatim quotes, strategic insights, and three rounds of iterative feedback per session.',
      '4000',
      '/virtual-focus-groups',
    ),
  },

  '/research-platform': {
    title: 'Consumer Intelligence Platform',
    description: 'Three connected modules for consumer intelligence: Market Research, Customer Journey Maps, and Virtual Focus Group Sessions. Start with what you need. Add depth as the project grows.',
    image: '/og/og-products.png',
    keywords: 'consumer intelligence, market research, customer journey maps, virtual focus groups, buyer personas, brand research, agency research platform',
    schema: serviceSchema(
      'Consumer Intelligence Platform',
      'Three connected modules: Market Research, Customer Journey Maps, and Virtual Focus Group Sessions. Commission one or chain all three.',
      '4000',
      '/research-platform',
    ),
  },

  '/consumer-journeys': {
    title: 'Customer Journey Maps · Module 02',
    description: 'Brand-specific customer journey maps built from your market research and persona panel. See how each buyer persona moves from awareness to advocacy — and where your touchpoints miss them.',
    image: '/og/og-products.png',
    keywords: 'customer journey maps, buyer journey, customer journey mapping, brand touchpoints, gap analysis, persona journey, purchase funnel',
    schema: serviceSchema(
      'Customer Journey Maps',
      'Brand-specific journey maps showing how each persona moves from awareness to advocacy — and where your touchpoints meet them or miss them. $500 per persona.',
      '500',
      '/consumer-journeys',
    ),
  },

  '/market-research': {
    title: 'Market Research · Module 01',
    description: 'Decision-grade market research with research-grounded buyer personas. Three reports: Market Analysis, Consumer Analysis, Competitive Landscape. From $4,000.',
    image: '/og/og-products.png',
    keywords: 'market research, consumer analysis, competitive landscape, buyer personas, market intelligence, brand research',
    schema: serviceSchema(
      'Market Research',
      'Three decision-grade research reports plus a research-grounded buyer persona panel. The foundation for customer journey maps and virtual focus groups.',
      '4000',
      '/market-research',
    ),
  },

  '/partner': {
    title: 'Request Platform Access',
    description: 'Join the Soundcheck operator network. Deliver AI-powered market intelligence under your brand. Self-serve or full-service. Operator onboarding included.',
    image: '/og/og-partner.png',
    keywords: 'become a partner, agency partnership, operator platform, white-label research, market intelligence partner',
  },

  '/our-partners': {
    title: 'Our Partners',
    description: 'Agencies and consultancies operating Soundcheck Insights for their clients. See who delivers market intelligence through the Soundcheck platform.',
    image: '/og/og-our-partners.png',
    keywords: 'soundcheck partners, agency partners, consultancy network, operator network',
  },

  '/resources': {
    title: 'Resources & Insights',
    description: 'Articles, guides, and market intelligence from Soundcheck Insights. Data-backed perspectives on market entry, competitive strategy, and growth.',
    image: '/og/og-resources.png',
    keywords: 'market intelligence articles, research insights, business strategy resources, market entry guides',
  },

  '/contact': {
    title: 'Contact Soundcheck Insights',
    description: 'Brief a product, ask about agency partnerships, or tell us what you need. Response within 2 business days. No commitment required.',
    image: '/og/og-contact.png',
    keywords: 'contact soundcheck, brief a product, agency partnership inquiry, market intelligence inquiry',
  },

  '/articles/us-market-assumptions': {
    title: 'US Market Entry: Assumptions That Kill Deals',
    description: 'Why international brands fail when entering the US market, and what the data actually says. Common assumptions tested against real market intelligence.',
    image: '/og/og-articles-us-market-assumptions.png',
    type: 'article',
    keywords: 'US market entry, international expansion mistakes, market entry assumptions, brand expansion failures',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'US Market Entry: Assumptions That Kill Deals',
      description: 'Why international brands fail when entering the US market, and what the data actually says.',
      author: { '@type': 'Person', name: 'Valter Klug' },
      publisher: organizationSchema,
      url: `${SITE_URL}/articles/us-market-assumptions`,
      image: `${SITE_URL}/og/og-articles-us-market-assumptions.png`,
    },
  },
}

export default seoConfig
export { organizationSchema, faqSchema }
