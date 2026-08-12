import { buildMetadata, seoConfig } from '@/lib/metadata'
import Samples from '@/components/pages/Samples'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/samples', ...seoConfig['/samples'] })
}

export default function Page() {
  return <Samples />
}
