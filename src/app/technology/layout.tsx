import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology',
  description:
    "Explore AIRZEP's cutting-edge technology stack: distributed robotics, edge AI, and intelligent fleet operating systems. Advanced autonomous delivery infrastructure.",
  openGraph: {
    title: 'Technology | AIRZEP',
    description:
      'Discover the advanced technology powering autonomous logistics: distributed robotics, edge AI, and intelligent fleet systems.',
    images: ['/og-technology.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology | AIRZEP',
    description: 'Cutting-edge autonomous logistics technology and infrastructure.',
  },
  keywords: [
    'logistics technology',
    'distributed robotics',
    'edge AI',
    'fleet operating system',
    'autonomous vehicles',
    'real-time coordination',
    'predictive analytics',
    'computer vision',
    'sensor fusion',
    'autonomous navigation',
  ],
}

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return children
}
