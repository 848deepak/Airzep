'use client'

import { m } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Boxes } from '@/components/ui/background-boxes'
import { Spotlight } from '@/components/ui/spotlight'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import Link from 'next/link'
import { Activity } from 'lucide-react'

const products = [
  {
    name: 'AURORA Series',
    category: 'Autonomous Delivery Drones',
    description:
      'High-end autonomous drones engineered for high-frequency logistics operations. Features 5kg payload capacity, multi-sensor navigation, 45min flight time, and sub-10ms decisioning. [R&D Phase]',
    link: '#',
  },
  {
    name: 'ARC Series',
    category: 'Heavy Payload Systems',
    description:
      'Industrial-grade autonomous aircraft for enterprise transport operations. Supports 15–25kg payload with reinforced carbon composite frame and redundant flight systems. [Development]',
    link: '#',
  },
  {
    name: 'VORTEX Series',
    category: 'High-Speed Autonomous Drones',
    description:
      'Built for emergency response and rapid deployment scenarios. Features ultra-fast acceleration, high-agility flight control, and emergency mission routing. [Prototype]',
    link: '#',
  },
  {
    name: 'SPECTRA Pods',
    category: 'Intelligent Ground Stations',
    description:
      'Autonomous Transfer Stations for precision landing, charging, and payload handling. Includes automated landing, precision alignment, and secure payload management. [Development]',
    link: '#',
  },
  {
    name: 'NEXUS',
    category: 'Fleet Operating System',
    description:
      'Centralized orchestration platform for large-scale autonomous fleet management. Multi-agent coordination, real-time route optimization, and global autoscaling. [Active Development]',
    link: '#',
  },
  {
    name: 'QUANTA',
    category: 'Edge AI Module',
    description:
      'On-device AI accelerator for real-time perception and autonomous decision-making. Sub-10ms inference, 12 concurrent models, 99.7% accuracy, OTA updates. [R&D Phase]',
    link: '#',
  },
  {
    name: 'SKYLINK',
    category: 'Autonomous Connectivity Layer',
    description:
      'High-availability mesh network for seamless autonomous system communication. Sub-100ms latency with redundant connectivity and global coverage. [Development]',
    link: '#',
  },
  {
    name: 'OMNI',
    category: 'Enterprise Dashboard',
    description:
      'Mission control interface for enterprises operating AIRZEP infrastructure. Real-time telemetry, fleet analytics, mission planning, and API integrations. [Beta]',
    link: '#',
  },
  {
    name: 'SENTINEL',
    category: 'Safety & Compliance Engine',
    description:
      'Real-time regulatory compliance and airspace monitoring for autonomous operations. Includes airspace monitoring, regulatory compliance, and incident management. [Development]',
    link: '#',
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <m.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white">
              Autonomous logistics
              <span className="block text-white">ecosystem</span>
            </h1>
            <p className="text-xl text-white/80 mb-4">Minimal. Autonomous. Enterprise-Ready.</p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              AIRZEP builds a complete autonomous logistics ecosystem. Every product is engineered
              with precision, reliability, and scale in mind.
            </p>
          </m.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <HoverEffect
            items={products.map(product => ({
              title: product.name,
              description: product.description,
              link: product.link,
            }))}
          />
        </div>
      </section>

      {/* Development Note */}
      <section className="relative py-20 bg-black overflow-hidden">
        <Spotlight />
        <div className="container mx-auto px-4 sm:px-6 relative z-50">
          <m.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/20 mb-6">
              <Activity className="w-8 h-8 text-primary-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Currently in R&D Phase</h2>
            <p className="text-lg text-white/80 mb-8">
              AIRZEP is actively developing prototype systems with planned deployment roadmap.
              We&apos;re building the future of autonomous logistics infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Request Information</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/technology">Explore Technology</Link>
              </Button>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  )
}
