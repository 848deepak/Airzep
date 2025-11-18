'use client'

import { Hero3D } from '@/components/Hero3D'
import { LitButton } from '@/components/ui/LitButton'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { MaskContainer } from '@/components/ui/svg-mask-effect'
import { m } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Cpu, Zap, Network, Code } from 'lucide-react'

const techPillars = [
  {
    icon: Cpu,
    title: 'Robotics',
    description: 'Autonomous flight, adaptive routing, multi-sensor fusion.',
  },
  {
    icon: Zap,
    title: 'Edge AI',
    description: 'Real-time perception, semantic segmentation, sub-10ms inference.',
  },
  {
    icon: Network,
    title: 'Fleet OS',
    description: 'Orchestration layer for 10,000+ autonomous units.',
  },
  {
    icon: Code,
    title: 'APIs',
    description: 'Developer-first, enterprise secure, global-scale integrations.',
  },
]

const solutions = [
  {
    title: 'Logistics',
    description: 'Autonomous last-mile networks with predictive delivery intelligence.',
    metric: 'Enterprise-scale',
    href: '/solutions/logistics',
  },
  {
    title: 'Healthcare',
    description: 'Critical medical supply routing with precision temperature controls.',
    metric: 'Compliance-grade',
    href: '/solutions/healthcare',
  },
  {
    title: 'Emergency Response',
    description: 'Rapid deployment, disaster relief, autonomous mission routing.',
    metric: 'Rapid deployment',
    href: '/solutions/emergency',
  },
]

// const partners = ['TechCorp', 'LogiFlow', 'MedSupply', 'SmartCity', 'RapidResponse', 'GlobalTrade']

export default function HomePage() {
  return (
    <div>
      <Hero3D />

      {/* Technology Section */}
      <section className="relative py-20 sm:py-32 bg-neutral-950 overflow-hidden">
        {/* Background Beams */}
        <BackgroundBeams />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <m.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Technology-first
              <span className="block text-primary-400">infrastructure</span>
            </h2>
            <p className="text-lg text-white/80">
              A vertically integrated stack engineered for enterprise logistics — from autonomous
              systems to Fleet OS and Edge AI.
            </p>
          </m.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <m.div
                  key={pillar.title}
                  initial={{ opacity: 1, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-6 rounded-lg bg-neutral-900/50 border border-white/10 hover:border-primary-500/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-white/70">{pillar.description}</p>
                </m.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <MaskContainer
        className="h-auto min-h-screen py-20"
        revealText={
          <div className="container mx-auto px-4 sm:px-6 w-full h-full flex flex-col items-center justify-center">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-neutral-900">
                Solutions for <span className="text-primary-500">every operation</span>
              </h2>
              <p className="text-lg text-neutral-700">
                Enterprise-grade autonomous logistics engineered for mission-critical operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
              {solutions.map(solution => (
                <div key={solution.title} className="space-y-3 text-left">
                  <h3 className="text-2xl font-bold text-neutral-900">{solution.title}</h3>
                  <p className="text-base text-neutral-700">{solution.description}</p>
                  <div className="pt-3 border-t border-neutral-300">
                    <span className="text-sm font-semibold text-primary-500">
                      {solution.metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      >
        <div className="container mx-auto px-4 sm:px-6 w-full h-full flex flex-col items-center justify-center text-white">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Autonomous <span className="text-primary-400">at scale</span>
            </h2>
            <p className="text-xl text-white/90">Hover to explore our autonomous capabilities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto w-full">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Fast Delivery</h3>
              <p className="text-white/70">Next-generation autonomous flight systems</p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Precision</h3>
              <p className="text-white/70">AI-powered route optimization</p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Global Scale</h3>
              <p className="text-white/70">Worldwide logistics infrastructure</p>
            </div>
          </div>
        </div>
      </MaskContainer>

      {/* CTA Section */}
      <BackgroundBeamsWithCollision>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <m.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Ready to transform your logistics?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Discover how AIRZEP can transform your logistics operations with autonomous
              infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <LitButton>
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </LitButton>
              </Link>
              <Link href="/case-studies">
                <LitButton>View Case Studies</LitButton>
              </Link>
            </div>
          </m.div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  )
}
