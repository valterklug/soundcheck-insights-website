import { buildMetadata, seoConfig } from '@/lib/metadata'
import OurPartners from '@/components/pages/OurPartners'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/our-partners', ...seoConfig['/our-partners'] })
}

export default function Page() {
  return <OurPartners />
}
