'use client'

import { m } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Boxes } from '@/components/ui/background-boxes'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 bg-black flex items-center justify-center">
      <section className="relative w-full py-20 sm:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <m.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <m.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-9xl sm:text-[12rem] font-extrabold leading-none text-white">
                404
              </h1>
            </m.div>

            <m.h2
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white"
            >
              Page Not Found
            </m.h2>

            <m.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-white/70 mb-10 max-w-2xl mx-auto"
            >
              Oops! The page you're looking for seems to have taken an autonomous detour. 
              Let's get you back on track.
            </m.p>

            <m.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="xl" variant="default">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Link>
              </Button>
              <Button asChild size="xl" variant="ghost" className="text-white hover:bg-white/10">
                <Link href="javascript:history.back()">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Go Back
                </Link>
              </Button>
            </m.div>

            <m.div
              className="mt-12 pt-12 border-t border-white/10"
            >
              <p className="text-sm text-white/50 mb-4">Looking for something specific?</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/technology"
                  className="text-sm text-white/60 hover:text-primary-400 transition-colors"
                >
                  Technology
                </Link>
                <span className="text-white/30">•</span>
                <Link
                  href="/products"
                  className="text-sm text-white/60 hover:text-primary-400 transition-colors"
                >
                  Products
                </Link>
                <span className="text-white/30">•</span>
                <Link
                  href="/case-studies"
                  className="text-sm text-white/60 hover:text-primary-400 transition-colors"
                >
                  Case Studies
                </Link>
                <span className="text-white/30">•</span>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </m.div>
          </m.div>
        </div>
      </section>
    </div>
  )
}
