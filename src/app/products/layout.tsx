import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description:
    "Explore AIRZEP's complete autonomous logistics ecosystem. From AURORA delivery drones to NEXUS Fleet OS, every product is engineered with precision, reliability, and scale in mind.",
  openGraph: {
    title: 'Products | AIRZEP',
    description:
      'Complete autonomous logistics ecosystem — drones, ground stations, Fleet OS, and enterprise platforms.',
    images: ['/og-technology.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | AIRZEP',
    description: 'Autonomous delivery systems engineered for enterprise scale.',
  },
  keywords: [
    'autonomous drones',
    'delivery drones',
    'fleet operating system',
    'logistics automation',
    'edge AI',
    'autonomous infrastructure',
    'enterprise logistics',
  ],
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
