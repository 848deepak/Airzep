'use client'

import { Hero3D } from '@/components/Hero3D'
import { Button } from '@/components/ui/Button'
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
    description:
      'Advanced autonomous systems with real-time obstacle avoidance and adaptive path planning.',
  },
  {
    icon: Zap,
    title: 'Edge AI',
    description:
      'Distributed intelligence processing at the edge for sub-millisecond decision making.',
  },
  {
    icon: Network,
    title: 'Fleet OS',
    description:
      'Centralized orchestration platform managing thousands of autonomous units in real-time.',
  },
  {
    icon: Code,
    title: 'APIs',
    description: 'Developer-first integration platform with comprehensive SDKs and webhooks.',
  },
]

const solutions = [
  {
    title: 'Logistics',
    description:
      'Last-mile delivery optimization with autonomous routing and predictive analytics.',
    metric: '40% faster',
    href: '/solutions/logistics',
  },
  {
    title: 'Healthcare',
    description:
      'Critical supply delivery with temperature monitoring and chain-of-custody tracking.',
    metric: '99.9% reliability',
    href: '/solutions/healthcare',
  },
  {
    title: 'Emergency Response',
    description: 'Rapid deployment systems for disaster relief and emergency medical supplies.',
    metric: '<10min response',
    href: '/solutions/emergency',
  },
]

const partners = ['TechCorp', 'LogiFlow', 'MedSupply', 'SmartCity', 'RapidResponse', 'GlobalTrade']

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
              <span className="block text-primary-400">approach</span>
            </h2>
            <p className="text-lg text-white/80">
              Our platform combines cutting-edge robotics, distributed systems, and artificial
              intelligence to create a seamless logistics infrastructure.
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
                Solutions for{" "}
                <span className="text-primary-500">every industry</span>
              </h2>
              <p className="text-lg text-neutral-700">
                Tailored logistics technology solutions designed for mission-critical applications
                across diverse sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
              {solutions.map((solution) => (
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
              Innovative{" "}
              <span className="text-primary-400">drone technology</span>
            </h2>
            <p className="text-xl text-white/90">
              Hover to explore our industry-specific solutions
            </p>
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
              Schedule a demo to see how AIRZEP can revolutionize your delivery infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="default">
                <Link href="/contact" className="group">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </m.div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  )
}
