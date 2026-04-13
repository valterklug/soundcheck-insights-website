import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://soundcheckinsights.com'
const SITE_NAME = 'Soundcheck Insights'
const DEFAULT_IMAGE = '/og/og-home.png'

/**
 * SEO head component — renders meta, OG, Twitter Card, canonical, and JSON-LD.
 *
 * @param {string}  title       — Page title (appended with " | Soundcheck Insights")
 * @param {string}  description — Meta description (max ~155 chars)
 * @param {string}  path        — Page path, e.g. "/products" (used for canonical + OG url)
 * @param {string}  image       — OG image path relative to public, e.g. "/og/og-products.png"
 * @param {string}  type        — OG type, default "website"
 * @param {object}  schema      — Optional JSON-LD structured data object
 * @param {string}  keywords    — Optional comma-separated keywords
 * @param {boolean} noIndex     — Optional, set true to noindex this page
 */
export default function SEO({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  schema,
  keywords,
  noIndex = false,
}) {
  const fullTitle = path === '/' ? SITE_NAME : `${title} | ${SITE_NAME}`
  const canonicalUrl = `${SITE_URL}${path}`
  const imageUrl = `${SITE_URL}${image || DEFAULT_IMAGE}`

  return (
    <Helmet>
      {/* Base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} — ${SITE_NAME}`} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${title} — ${SITE_NAME}`} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
