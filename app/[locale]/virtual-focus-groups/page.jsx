import { buildMetadata, seoConfig } from '@/lib/metadata'
import VirtualFocusGroups from '@/components/pages/VirtualFocusGroups'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/virtual-focus-groups', ...seoConfig['/virtual-focus-groups'] })
}

export default function Page() {
  return <VirtualFocusGroups />
}
