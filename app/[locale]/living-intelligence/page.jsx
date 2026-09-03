import { buildMetadata, seoConfig } from '@/lib/metadata'
import LivingIntelligence from '@/components/pages/LivingIntelligence'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/living-intelligence', ...seoConfig['/living-intelligence'] })
}

export default function Page() {
  return <LivingIntelligence />
}
