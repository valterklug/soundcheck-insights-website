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
  description: 'Decision-grade market intelligence platform for operators — agencies, consultancies, and fractional executives delivering productized research to international brands.',
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
    title: 'Soundcheck Insights — Market Intelligence Platform for Operators',
    description: 'Decision-grade market intelligence for operators — agencies, consultancies, and fractional executives delivering productized research, validation, and strategic insights to international brands entering and scaling in the US.',
    image: '/og/og-home.png',
    keywords: 'market intelligence, AI research, agency platform, white-label research, market analysis, competitive intelligence, operator platform, fractional executive',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Soundcheck Insights',
      url: SITE_URL,
      description: 'Decision-grade market intelligence for operators — agencies, consultancies, and fractional executives.',
      publisher: organizationSchema,
    },
  },

  '/products': {
    title: 'Research Products',
    description: 'Five fixed-scope market intelligence products: Market Research, GoGlobal Viability Analysis, Scale Assessment, Customer Journey Maps, and Virtual Focus Groups. Fixed price, fixed timeline. Available directly or through operator partners.',
    image: '/og/og-products.png',
    keywords: 'market research products, expansion report, scale assessment, market research, customer journey maps, virtual focus groups, market intelligence, consumer research',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Soundcheck Insights Research Products',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'GoGlobal Viability Analysis', url: `${SITE_URL}/expansion-report` },
        { '@type': 'ListItem', position: 2, name: 'Scale Assessment', url: `${SITE_URL}/scale-assessment` },
        { '@type': 'ListItem', position: 3, name: 'Market Research', url: `${SITE_URL}/research-platform` },
        { '@type': 'ListItem', position: 4, name: 'Customer Journey Maps', url: `${SITE_URL}/consumer-journeys` },
        { '@type': 'ListItem', position: 5, name: 'Virtual Focus Groups', url: `${SITE_URL}/virtual-focus-groups` },
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
    description: 'Keep 70% of MSRP. White-label market intelligence you operate for your clients. Trial with no commitment — two engagements at 35% of MSRP.',
    image: '/og/og-for-agencies.png',
    keywords: 'agency market intelligence, consultancy research, white-label reports, agency revenue, operator platform, fractional executive',
    schema: serviceSchema(
      'Soundcheck Insights Operator Platform',
      'White-label market intelligence platform for agencies and consultancies. 30% platform fee, 70% operator margin. Trial available.',
      null,
      '/for-agencies',
    ),
  },

  // /for-investors removed — redirects to /products

  '/expansion-report': {
    title: 'GoGlobal Viability Analysis',
    description: 'Decision-grade market entry intelligence for international brands. CVE Score, competitive landscape, regulatory snapshot, distribution channel map, three strategic paths, and 12-month roadmap. 100+ pages in 14 days.',
    image: '/og/og-expansion-report.png',
    keywords: 'international expansion, market entry report, CVE score, market expansion, brand expansion, viability analysis, new market entry',
    schema: serviceSchema(
      'GoGlobal Viability Analysis',
      'Market entry intelligence with CVE Score, competitive landscape analysis, regulatory framework, distribution channel mapping, and phased roadmap. Attaches to Market Research.',
      '2000',
      '/expansion-report',
    ),
  },

  // /idea-validation removed — redirects to /products

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
    description: 'For established brands at strategic inflection points. Know whether you are built to scale, identify defensible expansion opportunities, and get a 24-month phased scale plan. $4,000. Requires Market Research.',
    image: '/og/og-scale-assessment.png',
    keywords: 'scale assessment, scaling strategy, operational readiness, business scaling, consumer brand growth, market expansion, AI market intelligence',
    schema: serviceSchema(
      'Scale Assessment',
      'Comprehensive assessment for consumer brands: scale diagnostic, market opportunity map, competitive position analysis, operational readiness evaluation, phased 24-month scale plan, and 90-day AI-augmented intelligence layer.',
      '4000',
      '/scale-assessment',
    ),
  },

  // /founder-pass, /idea-validation, /investor-vetting, /for-investors — all redirect to /products

  // /investor-vetting removed — redirects to /products

  '/virtual-focus-groups': {
    title: 'Virtual Focus Group Sessions · Module 03',
    description: 'Test packaging, taglines, creative territories, and pricing claims against research-grounded buyer personas. $3,000 per session. Re-test pack available. Requires Market Research.',
    image: '/og/og-virtual-focus-groups.png',
    keywords: 'virtual focus groups, AI focus groups, consumer testing, packaging testing, creative testing, pricing testing, buyer personas, concept testing',
    schema: serviceSchema(
      'Virtual Focus Group Sessions',
      'Test any concept against your research-grounded persona panel. Preference votes, verbatim quotes, strategic insights. $3,000/session + $2,000 re-test pack.',
      '3000',
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
      'Brand-specific journey maps showing how each persona moves from awareness to advocacy — and where your touchpoints meet them or miss them. $500 per persona. Requires Market Research.',
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

  '/founding-cohort': {
    title: 'Founding Operator Cohort — 10 Seats, Application Only',
    description: 'Join the first cohort of Soundcheck operators. Platform cost starts at $550 per engagement, locked at 20% off standard for life. White-label market intelligence for agencies, consultancies, and fractional executives. 10 seats available.',
    image: '/og/og-for-agencies.png',
    keywords: 'founding operator, operator cohort, market intelligence practice, agency research, white-label research, fractional CMO, consultancy research, operator platform',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Soundcheck Insights Founding Operator Cohort',
      description: 'Application-only cohort for agencies and consultancies building a market intelligence practice on Soundcheck. 10 seats. Platform cost from $550 per engagement, locking at 20% off standard for life.',
      organizer: { '@type': 'Organization', name: 'Soundcheck Insights' },
      maximumAttendeeCapacity: 10,
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    },
  },

  '/partnerships': {
    title: 'Ecosystem Partnerships — Trade Organizations, Chambers & Accelerators',
    description: 'Add market intelligence to your member programs. Two paths: member rate (25% off MSRP, delivered for your members) or platform access (run it yourself, 20% off for life). For bi-national chambers, trade promotion agencies, accelerators, incubators, and economic development organizations.',
    image: '/og/og-partner.png',
    keywords: 'ecosystem partnership, trade organization, chamber of commerce, accelerator, incubator, member benefits, market intelligence, international expansion, economic development',
  },

  '/partner': {
    title: 'Request Platform Access',
    description: 'Join the Soundcheck operator network. Deliver AI-powered market intelligence under your brand. Self-serve or full-service. Operator onboarding included.',
    image: '/og/og-partner.png',
    keywords: 'become a partner, agency partnership, operator platform, white-label research, market intelligence partner',
  },

  '/mana-tech': {
    title: 'Mana Tech Partnership — Soundcheck Insights',
    description: 'Soundcheck Insights partnership with Mana Tech ecosystem for Scale2Miami cohort founders, Mana Hubs members, and the mentor network.',
    image: '/og/og-products.png',
    keywords: 'mana tech, scale2miami, mana hubs, member rate, operator market intelligence, cross-border expansion, miami agency',
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
