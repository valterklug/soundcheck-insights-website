import { buildMetadata, seoConfig } from '@/lib/metadata'
import ResearchPlatform from '@/components/pages/ResearchPlatform'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/market-research', ...seoConfig['/market-research'] })
}

export default function Page() {
  return <ResearchPlatform />
}
