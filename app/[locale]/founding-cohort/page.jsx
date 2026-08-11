import { buildMetadata, seoConfig } from '@/lib/metadata'
import FoundingCohort from '@/components/pages/FoundingCohort'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/founding-cohort', ...seoConfig['/founding-cohort'] })
}

export default function Page() {
  return <FoundingCohort />
}
