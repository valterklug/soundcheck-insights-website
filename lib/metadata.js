const SITE_URL = 'https://soundcheckinsights.com'
const SITE_NAME = 'Soundcheck Insights'
const DEFAULT_IMAGE = '/og/og-home.png'

/**
 * Build Next.js Metadata object from page-level SEO config.
 *
 * Usage in any page:
 *   export async function generateMetadata({ params }) {
 *     const { locale } = await params
 *     return buildMetadata({ locale, path: '/products', ... })
 *   }
 */
export function buildMetadata({
  locale = 'en',
  path = '/',
  title,
  description,
  image,
  type = 'website',
  keywords,
  noIndex = false,
}) {
  const fullTitle = path === '/' ? SITE_NAME : `${title} | ${SITE_NAME}`
  const canonicalUrl = `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}${path === '/' ? '' : path}`
  const imageUrl = `${SITE_URL}${image || DEFAULT_IMAGE}`

  return {
    title: fullTitle,
    description,
    keywords: keywords ? keywords.split(',').map((k) => k.trim()) : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}${path === '/' ? '' : path}`,
        es: `${SITE_URL}/es${path === '/' ? '' : path}`,
        pt: `${SITE_URL}/pt${path === '/' ? '' : path}`,
      },
    },
    openGraph: {
      siteName: SITE_NAME,
      type,
      title,
      description,
      url: canonicalUrl,
      locale: locale === 'en' ? 'en_US' : locale === 'es' ? 'es_419' : 'pt_BR',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  }
}

/**
 * SEO configs for every page, matching the original seoConfig.js.
 * Used by generateMetadata in each page file.
 */
export const seoConfig = {
  '/': {
    title: 'Soundcheck Insights - Decision-Grade Market Research',
    description:
      'AI-powered market research, competitive analysis, and strategic intelligence. Validated by a senior strategist. Delivered in days, not months. Test before you invest.',
    image: '/og/og-home.png',
    keywords:
      'market intelligence, AI research, market research, market analysis, competitive intelligence, decision intelligence, strategic research, brand strategy',
  },
  '/products': {
    title: 'Research Products',
    description:
      'Five fixed-scope market intelligence products: Market Research, GoGlobal Viability Analysis, Scale Assessment, Customer Journey Maps, and Virtual Focus Groups. Fixed price, fixed timeline.',
    image: '/og/og-products.png',
    keywords:
      'market research products, expansion report, scale assessment, market research, customer journey maps, virtual focus groups, market intelligence, consumer research',
  },
  '/how-it-works': {
    title: 'How It Works',
    description:
      'Four steps from brief to delivery. Tell us the decision, AI builds the research, a strategist validates, and you receive decision-ready deliverables.',
    image: '/og/og-how-it-works.png',
    keywords:
      'how soundcheck works, AI research process, market intelligence workflow, decision intelligence',
  },
  '/for-agencies': {
    title: 'For Agencies & Consultancies',
    description:
      'Keep 70% of MSRP. White-label market intelligence you operate for your clients. Trial with no commitment.',
    image: '/og/og-for-agencies.png',
    keywords:
      'agency market intelligence, consultancy research, white-label reports, agency revenue, operator platform, fractional executive',
  },
  '/for-consultants': {
    title: 'For Consultants',
    description:
      'Keep 70% of MSRP. White-label market intelligence you operate for your clients. Trial with no commitment.',
    image: '/og/og-for-agencies.png',
    keywords:
      'agency market intelligence, consultancy research, white-label reports, agency revenue, operator platform, fractional executive',
  },
  '/for-brands': {
    title: 'For Brands',
    description:
      'Decision-grade market research delivered to you. Done-for-you engagements or enterprise access for your team.',
    keywords:
      'market research, brand strategy, competitive intelligence, enterprise research',
  },
  '/expansion-report': {
    title: 'GoGlobal Viability Analysis',
    description:
      'Decision-grade market entry intelligence for international brands. CVE Score, competitive landscape, regulatory snapshot, distribution channel map, three strategic paths, and 12-month roadmap.',
    image: '/og/og-expansion-report.png',
    keywords:
      'international expansion, market entry report, CVE score, market expansion, brand expansion, viability analysis, new market entry',
  },
  '/scale-assessment': {
    title: 'Scale Assessment',
    description:
      'For established brands at strategic inflection points. Know whether you are built to scale, identify defensible expansion opportunities, and get a 24-month phased scale plan.',
    image: '/og/og-scale-assessment.png',
    keywords:
      'scale assessment, scaling strategy, operational readiness, business scaling, consumer brand growth, market expansion, AI market intelligence',
  },
  '/virtual-focus-groups': {
    title: 'Virtual Focus Group Sessions',
    description:
      'Test packaging, taglines, creative territories, and pricing claims against research-grounded buyer personas. $3,000 per session. Re-test pack available.',
    image: '/og/og-virtual-focus-groups.png',
    keywords:
      'virtual focus groups, AI focus groups, consumer testing, packaging testing, creative testing, pricing testing, buyer personas, concept testing',
  },
  '/research-platform': {
    title: 'Consumer Intelligence Platform',
    description:
      'Five connected modules for consumer intelligence. Start with what you need. Add depth as the project grows.',
    image: '/og/og-products.png',
    keywords:
      'consumer intelligence, market research, customer journey maps, virtual focus groups, buyer personas, brand research, agency research platform',
  },
  '/consumer-journeys': {
    title: 'Customer Journey Maps',
    description:
      'Brand-specific customer journey maps built from your market research and persona panel. See how each buyer persona moves from awareness to advocacy.',
    image: '/og/og-products.png',
    keywords:
      'customer journey maps, buyer journey, customer journey mapping, brand touchpoints, gap analysis, persona journey, purchase funnel',
  },
  '/market-research': {
    title: 'Market Research',
    description:
      'Decision-grade market research with research-grounded buyer personas. Three reports: Market Analysis, Consumer Analysis, Competitive Landscape.',
    image: '/og/og-products.png',
    keywords:
      'market research, consumer analysis, competitive landscape, buyer personas, market intelligence, brand research',
  },
  '/mana-tech': {
    title: 'Mana Tech Partnership',
    description:
      'Soundcheck Insights partnership with Mana Tech ecosystem for Scale2Miami cohort founders, Mana Hubs members, and the mentor network.',
    image: '/og/og-products.png',
    keywords:
      'mana tech, scale2miami, mana hubs, member rate, operator market intelligence, cross-border expansion, miami agency',
  },
  '/founding-cohort': {
    title: 'Founding Operator Cohort - 10 Seats, Application Only',
    description:
      'Join the first cohort of Soundcheck operators. Platform cost starts at $550 per engagement, locked at 20% off standard for life.',
    image: '/og/og-for-agencies.png',
    keywords:
      'founding operator, operator cohort, market intelligence practice, agency research, white-label research, fractional CMO',
  },
  '/partnerships': {
    title: 'Ecosystem Partnerships - Trade Organizations, Chambers & Accelerators',
    description:
      'Add market intelligence to your member programs. Two paths: member rate (25% off MSRP, delivered for your members) or platform access (run it yourself, 20% off for life).',
    image: '/og/og-partner.png',
    keywords:
      'ecosystem partnership, trade organization, chamber of commerce, accelerator, incubator, member benefits, market intelligence',
  },
  '/partner': {
    title: 'Request Platform Access',
    description:
      'Join the Soundcheck operator network. Deliver AI-powered market intelligence under your brand.',
    image: '/og/og-partner.png',
    keywords:
      'become a partner, agency partnership, operator platform, white-label research, market intelligence partner',
  },
  '/our-partners': {
    title: 'Our Partners',
    description:
      'Agencies and consultancies operating Soundcheck Insights for their clients.',
    image: '/og/og-our-partners.png',
    keywords:
      'soundcheck partners, agency partners, consultancy network, operator network',
  },
  '/resources': {
    title: 'Resources & Insights',
    description:
      'Articles, guides, and market intelligence from Soundcheck Insights.',
    image: '/og/og-resources.png',
    keywords:
      'market intelligence articles, research insights, business strategy resources, market entry guides',
  },
  '/contact': {
    title: 'Contact Soundcheck Insights',
    description:
      'Brief a product, ask about agency partnerships, or tell us what you need. Response within 2 business days.',
    image: '/og/og-contact.png',
    keywords:
      'contact soundcheck, brief a product, agency partnership inquiry, market intelligence inquiry',
  },
  '/articles/us-market-assumptions': {
    title: 'US Market Entry: Assumptions That Kill Deals',
    description:
      'Why international brands fail when entering the US market, and what the data actually says.',
    image: '/og/og-articles-us-market-assumptions.png',
    type: 'article',
    keywords:
      'US market entry, international expansion mistakes, market entry assumptions, brand expansion failures',
  },
  '/living-intelligence': {
    title: 'Living Intelligence',
    description:
      'Monthly market, competitive, and regulatory updates. Your research stays current without starting over.',
    image: '/og/og-products.png',
    keywords:
      'living intelligence, ongoing market intelligence, market monitoring, competitive monitoring, regulatory updates, research subscription',
  },
  '/samples': {
    title: 'Sample Reports — See What You Get',
    description:
      'Explore sample Soundcheck deliverables: GoGlobal Viability Analysis, Scale Assessment, Virtual Focus Group, and Customer Journey Maps. Decision-grade output, generated for fictional companies.',
    image: '/og/og-products.png',
    keywords:
      'sample reports, market research samples, expansion report example, scale assessment sample, virtual focus group demo',
  },
}
