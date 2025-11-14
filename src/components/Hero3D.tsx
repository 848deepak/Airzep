'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { Button } from './ui/Button'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

const HeroScene = dynamic(() => import('./HeroScene').then(mod => mod.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500" />
    </div>
  ),
})

export function Hero3D() {
  const [show3D, setShow3D] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check if device supports 3D and screen is large enough
    if (typeof window !== 'undefined' && window.innerWidth > 900) {
      // Progressive enhancement: load 3D after initial paint
      const timer = setTimeout(() => {
        setMounted(true)
        setShow3D(true)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      // For smaller screens, set mounted after a delay to avoid sync setState
      const timer = setTimeout(() => setMounted(true), 0)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-primary-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-sm font-medium">
                <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-primary-500" />
                Next-Generation Logistics Technology
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              Logistics technology
              <span className="block mt-2 bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                reimagined
              </span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl"
            >
              Distributed robotics. Fleet OS. Edge AI. Building the infrastructure for autonomous
              logistics at scale.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="xl" variant="default">
                <Link href="/contact" className="group">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href="/technology" className="group">
                  <Play className="mr-2 h-5 w-5" />
                  Explore Technology
                </Link>
              </Button>
            </m.div>

            {/* Stats */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200 dark:border-neutral-800"
            >
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '10M+', label: 'Deliveries' },
                { value: '<15min', label: 'Avg. Time' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-bold text-primary-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </m.div>
          </m.div>

          {/* 3D Scene or Fallback */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            {mounted && show3D ? (
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <HeroScene />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-8">
                <m.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-48 h-48 sm:w-64 sm:h-64"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    <rect x="50" y="50" width="100" height="100" fill="url(#grad1)" />
                    <circle cx="50" cy="50" r="10" fill="white" opacity="0.6" />
                    <circle cx="150" cy="50" r="10" fill="white" opacity="0.6" />
                    <circle cx="50" cy="150" r="10" fill="white" opacity="0.6" />
                    <circle cx="150" cy="150" r="10" fill="white" opacity="0.6" />
                  </svg>
                </m.div>
              </div>
            )}
          </m.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <m.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-neutral-300 dark:border-neutral-700 flex items-start justify-center p-2">
            <m.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-neutral-400"
            />
          </div>
        </m.div>
      </m.div>
    </section>
  )
}
