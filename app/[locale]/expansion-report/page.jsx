import { buildMetadata, seoConfig } from '@/lib/metadata'
import ExpansionReport from '@/components/pages/ExpansionReport'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/expansion-report', ...seoConfig['/expansion-report'] })
}

export default function Page() {
  return <ExpansionReport />
}
