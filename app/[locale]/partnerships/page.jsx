import { buildMetadata, seoConfig } from '@/lib/metadata'
import Partnerships from '@/components/pages/Partnerships'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/partnerships', ...seoConfig['/partnerships'] })
}

export default function Page() {
  return <Partnerships />
}
