import { buildMetadata, seoConfig } from '@/lib/metadata'
import ForAgencies from '@/components/pages/ForAgencies'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/for-agencies', ...seoConfig['/for-agencies'] })
}

export default function Page() {
  return <ForAgencies />
}
