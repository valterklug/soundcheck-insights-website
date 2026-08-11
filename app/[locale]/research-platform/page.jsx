import { buildMetadata, seoConfig } from '@/lib/metadata'
import ResearchPlatform from '@/components/pages/ResearchPlatform'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/research-platform', ...seoConfig['/research-platform'] })
}

export default function Page() {
  return <ResearchPlatform />
}
