import { buildMetadata, seoConfig } from '@/lib/metadata'
import ForAgencies from '@/components/pages/ForAgencies'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/for-consultants', ...seoConfig['/for-consultants'] })
}

export default function Page() {
  return <ForAgencies />
}
