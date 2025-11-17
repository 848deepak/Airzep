'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { Button } from './ui/Button'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { BackgroundRippleEffect } from './ui/background-ripple-effect'
import { Cover } from './ui/cover'

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Ripple Effect - full coverage */}
      <div className="absolute inset-0 w-full h-full">
        <BackgroundRippleEffect rows={10} cols={20} cellSize={56} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-primary-500" />
                Next-Generation Logistics Technology
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
              Logistics technology
              <span className="block mt-2">
                <Cover>reimagined</Cover>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-xl">
              Distributed robotics. Fleet OS. Edge AI. Building the infrastructure for autonomous
              logistics at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '10M+', label: 'Deliveries' },
                { value: '<15min', label: 'Avg. Time' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-bold text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

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
