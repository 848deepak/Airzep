import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { Analytics } from '@/components/Analytics'

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
  metadataBase: new URL('https://airzep.vercel.app'),
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
    'autonomous delivery',
    'supply chain optimization',
    'last mile delivery',
    'fleet operating system',
    'real-time logistics',
    'predictive analytics',
  ],
  authors: [{ name: 'AIRZEP' }],
  creator: 'AIRZEP',
  publisher: 'AIRZEP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://airzep.vercel.app',
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
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://airzep.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://airzep.vercel.app" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <StructuredData />
        <Analytics />
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
