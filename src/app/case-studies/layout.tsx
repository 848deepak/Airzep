import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Explore how leading organizations use AIRZEP to transform their logistics operations with measurable results. Real-world success stories from healthcare, emergency response, and enterprise logistics.',
  openGraph: {
    title: 'Case Studies | AIRZEP',
    description:
      'See how leading organizations achieve 40% faster delivery times and 35% cost reduction with AIRZEP.',
    images: ['/og-case-studies.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | AIRZEP',
    description: 'Real-world logistics transformation stories with measurable results.',
  },
  keywords: [
    'logistics case studies',
    'autonomous delivery success stories',
    'supply chain transformation',
    'fleet management results',
    'logistics ROI',
    'delivery optimization',
  ],
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
