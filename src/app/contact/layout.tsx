import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with AIRZEP. Request a demo, technical consultation, or partnership discussion.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
