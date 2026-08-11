import { buildMetadata, seoConfig } from '@/lib/metadata'
import Resources from '@/components/pages/Resources'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/resources', ...seoConfig['/resources'] })
}

export default function Page() {
  return <Resources />
}
