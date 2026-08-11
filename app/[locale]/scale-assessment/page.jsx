import { buildMetadata, seoConfig } from '@/lib/metadata'
import ScaleAssessment from '@/components/pages/ScaleAssessment'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/scale-assessment', ...seoConfig['/scale-assessment'] })
}

export default function Page() {
  return <ScaleAssessment />
}
