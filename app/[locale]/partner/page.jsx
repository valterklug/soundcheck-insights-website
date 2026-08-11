import { buildMetadata, seoConfig } from '@/lib/metadata'
import Partner from '@/components/pages/Partner'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/partner', ...seoConfig['/partner'] })
}

export default function Page() {
  return <Partner />
}
