import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/for-investors', destination: '/products', permanent: true },
      { source: '/idea-validation', destination: '/products', permanent: true },
      { source: '/founder-pass', destination: '/products', permanent: true },
      { source: '/investor-vetting', destination: '/products', permanent: true },
      { source: '/business-plan', destination: '/products', permanent: true },
      { source: '/growth-roadmap', destination: '/scale-assessment', permanent: true },
      // Localized redirects
      { source: '/es/for-investors', destination: '/es/products', permanent: true },
      { source: '/es/idea-validation', destination: '/es/products', permanent: true },
      { source: '/es/founder-pass', destination: '/es/products', permanent: true },
      { source: '/es/investor-vetting', destination: '/es/products', permanent: true },
      { source: '/es/business-plan', destination: '/es/products', permanent: true },
      { source: '/es/growth-roadmap', destination: '/es/scale-assessment', permanent: true },
      { source: '/pt/for-investors', destination: '/pt/products', permanent: true },
      { source: '/pt/idea-validation', destination: '/pt/products', permanent: true },
      { source: '/pt/founder-pass', destination: '/pt/products', permanent: true },
      { source: '/pt/investor-vetting', destination: '/pt/products', permanent: true },
      { source: '/pt/business-plan', destination: '/pt/products', permanent: true },
      { source: '/pt/growth-roadmap', destination: '/pt/scale-assessment', permanent: true },
      // For Agencies → For Consultants rename
      { source: '/for-agencies', destination: '/for-consultants', permanent: true },
      { source: '/en/for-agencies', destination: '/en/for-consultants', permanent: true },
      { source: '/es/for-agencies', destination: '/es/for-consultants', permanent: true },
      { source: '/pt/for-agencies', destination: '/pt/for-consultants', permanent: true },
    ]
  },
}

export default withNextIntl(nextConfig)
