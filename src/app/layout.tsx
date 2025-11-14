import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://airzep.com'),
  title: {
    default: 'AIRZEP — Logistics Technology Reimagined',
    template: '%s | AIRZEP',
  },
  description:
    'Advanced logistics technology through distributed robotics, edge AI, and intelligent fleet operating systems. Transforming delivery infrastructure with autonomous systems.',
  keywords: [
    'logistics technology',
    'robotics',
    'edge AI',
    'fleet management',
    'autonomous systems',
    'distributed systems',
  ],
  authors: [{ name: 'AIRZEP' }],
  creator: 'AIRZEP',
  publisher: 'AIRZEP',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://airzep.com',
    siteName: 'AIRZEP',
    title: 'AIRZEP — Logistics Technology Reimagined',
    description:
      'Advanced logistics technology through distributed robotics, edge AI, and intelligent fleet operating systems.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AIRZEP Logistics Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIRZEP — Logistics Technology Reimagined',
    description:
      'Advanced logistics technology through distributed robotics, edge AI, and intelligent fleet operating systems.',
    images: ['/og-image.jpg'],
    creator: '@airzep',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
