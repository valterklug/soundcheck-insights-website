import { buildMetadata, seoConfig } from '@/lib/metadata'
import ConsumerJourneys from '@/components/pages/ConsumerJourneys'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/consumer-journeys', ...seoConfig['/consumer-journeys'] })
}

export default function Page() {
  return <ConsumerJourneys />
}
