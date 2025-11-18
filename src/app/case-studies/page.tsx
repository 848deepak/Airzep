'use client'

import { m } from 'framer-motion'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { LitButton } from '@/components/ui/LitButton'
import Link from 'next/link'
import { TrendingUp } from 'lucide-react'
import { DotBackground } from '@/components/ui/dot-background'
import { Illustration } from '@/components/ui/glowing-stars'

// Mock data - R&D phase concept studies
const caseStudies = [
  {
    id: '1',
    slug: 'urban-delivery-prototype',
    title: 'Urban Delivery Network - Prototype Testing Phase',
    client: 'Internal R&D',
    industry: 'logistics',
    excerpt:
      'Early-stage autonomous delivery testing in controlled urban environments. Validating multi-sensor navigation and dynamic route optimization algorithms.',
    image: '/assets/case-study-1.jpg',
    metrics: [
      { label: 'Test Flights', value: '500+' },
      { label: 'Navigation Accuracy', value: '98.5%' },
      { label: 'Prototype Phase', value: 'Active' },
    ],
    publishedAt: '2024-11-01',
  },
  {
    id: '2',
    slug: 'autonomous-payload-handling',
    title: 'SPECTRA Pod Integration - Development Phase',
    client: 'R&D Lab',
    industry: 'development',
    excerpt:
      'Developing automated ground station technology for precision landing, charging, and payload management. Current focus: precision alignment systems.',
    image: '/assets/case-study-2.jpg',
    metrics: [
      { label: 'Landing Precision', value: '±2cm' },
      { label: 'Charge Cycles', value: '200+' },
      { label: 'Status', value: 'Prototype' },
    ],
    publishedAt: '2024-10-15',
  },
  {
    id: '3',
    slug: 'fleet-orchestration-testing',
    title: 'NEXUS Fleet OS - Alpha Testing',
    client: 'Internal Systems',
    industry: 'platform',
    excerpt:
      'Building centralized fleet orchestration platform. Testing multi-agent coordination, real-time routing, and edge-to-cloud data synchronization.',
    image: '/assets/case-study-3.jpg',
    metrics: [
      { label: 'Simulated Missions', value: '2,000+' },
      { label: 'Platform Uptime', value: '99.2%' },
      { label: 'Phase', value: 'Alpha' },
    ],
    publishedAt: '2024-09-20',
  },
]

const industries = [
  { label: 'All', value: 'all' },
  { label: 'R&D Projects', value: 'logistics' },
  { label: 'Prototypes', value: 'development' },
  { label: 'Platform Testing', value: 'platform' },
  { label: 'Lab Validation', value: 'enterprise' },
]

export default function CaseStudiesPage() {
  return (
    <DotBackground className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white">
              R&D Projects
              <span className="block text-primary-400">& Prototypes</span>
            </h1>
            <p className="text-xl text-white/80">
              Explore our active research, development, and prototype validation work as we build
              the future of autonomous logistics.
            </p>
          </m.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-white/10 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '3', label: 'Active Prototypes' },
              { value: '2,500+', label: 'Test Missions' },
              { value: '98%', label: 'System Reliability' },
              { value: 'Alpha', label: 'Development Stage' },
            ].map((stat, i) => (
              <m.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter (placeholder for future implementation) */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map(industry => (
              <button
                key={industry.value}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  industry.value === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-800/50 text-white/80 hover:bg-neutral-700/50'
                }`}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <HoverEffect
            items={caseStudies.map(study => ({
              title: study.title,
              description: study.excerpt,
              link: `/case-studies/${study.slug}`,
            }))}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <Illustration mouseEnter={false} />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <m.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Interested in our R&D progress?</h2>
            <p className="text-xl mb-8 text-white/90">
              We&apos;re actively developing prototype systems with planned deployment roadmap. Get
              updates on our development milestones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <LitButton>Request Information</LitButton>
              </Link>
              <Link href="/technology">
                <LitButton>Explore Technology</LitButton>
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </DotBackground>
  )
}
