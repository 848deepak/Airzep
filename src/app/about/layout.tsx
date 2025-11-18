import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'AIRZEP is a technology company building the infrastructure for autonomous logistics at global scale. Engineering the autonomous future through robotics, AI, and distributed systems.',
  openGraph: {
    title: 'About AIRZEP',
    description:
      'Building the infrastructure for autonomous logistics. Mission: Create a fully autonomous logistics layer for the world.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About AIRZEP',
    description: 'Engineering the autonomous future of logistics.',
  },
  keywords: [
    'AIRZEP',
    'autonomous logistics',
    'robotics company',
    'logistics technology',
    'drone technology',
    'fleet operating system',
    'logistics infrastructure',
  ],
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
