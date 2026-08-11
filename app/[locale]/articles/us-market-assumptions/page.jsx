import { buildMetadata, seoConfig } from '@/lib/metadata'
import USMarketAssumptions from '@/components/pages/USMarketAssumptions'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/articles/us-market-assumptions', ...seoConfig['/articles/us-market-assumptions'] })
}

export default function Page() {
  return <USMarketAssumptions />
}
