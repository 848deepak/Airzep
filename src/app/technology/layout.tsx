import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology',
  description:
    'Advanced logistics technology stack: distributed robotics, edge AI, fleet operating system, and developer APIs.',
}

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return children
}
