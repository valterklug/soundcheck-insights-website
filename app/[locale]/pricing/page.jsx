import { buildMetadata, seoConfig } from '@/lib/metadata'
import Pricing from '@/components/pages/Pricing'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/pricing', ...seoConfig['/pricing'] })
}

export default function Page() {
  return <Pricing />
}
