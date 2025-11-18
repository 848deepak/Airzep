import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with AIRZEP. Request a demo, technical consultation, or partnership discussion. Transform your logistics operations today.',
  openGraph: {
    title: 'Contact AIRZEP',
    description:
      "Request a demo or consultation. Let's discuss how AIRZEP can transform your logistics.",
    images: ['/og-contact.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AIRZEP',
    description: 'Get in touch to discuss your logistics transformation.',
  },
  keywords: [
    'contact AIRZEP',
    'logistics demo',
    'fleet management consultation',
    'autonomous delivery inquiry',
    'logistics partnership',
  ],
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
