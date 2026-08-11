import { buildMetadata, seoConfig } from '@/lib/metadata'
import HowItWorks from '@/components/pages/HowItWorks'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/how-it-works', ...seoConfig['/how-it-works'] })
}

export default function Page() {
  return <HowItWorks />
}
