'use client'

import { m } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { LitButton } from '@/components/ui/LitButton'
import { Boxes } from '@/components/ui/background-boxes'
import { Spotlight } from '@/components/ui/spotlight'
import { PointerHighlight } from '@/components/ui/pointer-highlight'
import Link from 'next/link'
import { Cpu, Zap, Network, Code, ArrowRight, Shield, Gauge, Cloud } from 'lucide-react'
import { cn } from '@/lib/utils'

const techStack = [
  {
    icon: Cpu,
    title: 'Distributed Robotics',
    description: 'Autonomous units built for precision, reliability, and safety.',
    features: [
      'Multi-sensor fusion (LiDAR, Camera, IMU)',
      'Dynamic SLAM navigation',
      'Real-time obstacle avoidance',
      'Predictive maintenance ML models',
    ],
    specs: {
      'Processing Power': '40 TOPS',
      'Sensor Range': '100m 360°',
      'Battery Life': '45 minutes',
      Payload: '5kg max',
    },
  },
  {
    icon: Zap,
    title: 'Edge AI',
    description: 'Ultra-low-latency models running directly on autonomous hardware.',
    features: [
      'Semantic segmentation',
      'Object detection',
      'Behavioral prediction',
      'OTA model updates',
    ],
    specs: {
      'Inference Time': '<10ms',
      Models: '12 concurrent',
      Accuracy: '99.7%',
      'Power Efficiency': '2W average',
    },
  },
  {
    icon: Network,
    title: 'NEXUS — Fleet Operating System',
    description: 'Enterprise-grade orchestration for autonomous fleets.',
    features: [
      'Multi-agent coordination',
      'Dynamic routing',
      'Collision management',
      'Telemetry dashboards',
    ],
    specs: {
      'Fleet Size': '10,000+ units',
      Uptime: '99.99%',
      Latency: '<100ms',
      Scale: 'Global coverage',
    },
  },
  {
    icon: Code,
    title: 'Developer Platform',
    description: 'APIs, SDKs, and webhooks built for enterprise integrations.',
    features: [
      'REST + GraphQL APIs',
      'WebSockets for real-time data',
      '8 language SDKs',
      'Sandbox environment',
    ],
    specs: {
      'API Uptime': '99.95%',
      'Rate Limit': '10,000 req/min',
      SDKs: '8 Languages',
      Documentation: 'OpenAPI 3.0',
    },
  },
]

const additionalFeatures = [
  {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'End-to-end encryption, zero-knowledge architecture, SOC 2 Type II compliance.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Sub-second response times, 99.99% uptime SLA, global CDN distribution.',
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    description: 'Multi-cloud deployment, auto-scaling, disaster recovery, edge computing.',
  },
]

export default function TechnologyPage() {
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
              Technology that
            </h1>
            <PointerHighlight
              containerClassName="mx-auto mb-6"
              rectangleClassName="border-blue-500"
              pointerClassName="text-blue-500"
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                powers autonomy
              </span>
            </PointerHighlight>
            <p className="text-xl text-white/80 mb-4">Minimal. Precise. Intelligent.</p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              A fusion of robotics, AI, and distributed systems — engineered to deliver autonomy at
              enterprise scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <LitButton>Schedule Technical Demo</LitButton>
              </Link>
              <Link href="/docs">
                <LitButton>View Documentation</LitButton>
              </Link>
            </div>
          </m.div>
        </div>
      </section>

      {/* Technology Stack Details */}
      <section className="relative py-20 sm:py-32 bg-white dark:bg-black">
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:40px_40px]',
            '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
            'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <m.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Core Technology Pillars</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Four foundational technologies working in concert to enable autonomous logistics at
              scale.
            </p>
          </m.div>

          <div className="space-y-24">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              const isEven = index % 2 === 0

              return (
                <m.div
                  key={tech.title}
                  initial={{ y: 40 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-950 mb-6">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{tech.title}</h3>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                      {tech.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {tech.features.map(feature => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2" />
                          <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/technology/${tech.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <LitButton>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 inline" />
                      </LitButton>
                    </Link>
                  </div>

                  {/* Specs Card */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <Card className="bg-neutral-50 dark:bg-neutral-900">
                      <CardHeader>
                        <CardTitle className="text-xl">Technical Specifications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <dl className="space-y-4">
                          {Object.entries(tech.specs).map(([key, value]) => (
                            <div
                              key={key}
                              className="flex justify-between items-center pb-4 border-b border-neutral-200 dark:border-neutral-800 last:border-0 last:pb-0"
                            >
                              <dt className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                {key}
                              </dt>
                              <dd className="text-lg font-bold text-primary-500">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </CardContent>
                    </Card>
                  </div>
                </m.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="relative py-20 bg-black overflow-hidden">
        <Spotlight />
        <div className="container mx-auto px-4 sm:px-6 relative z-50">
          <m.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-neutral-400">
              Built for mission-critical operations with security, performance, and reliability at
              the core.
            </p>
          </m.div>

          <HoverEffect
            items={additionalFeatures.map(feature => ({
              title: feature.title,
              description: feature.description,
              link: '#',
            }))}
            className="grid-cols-1 md:grid-cols-3"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 bg-black">
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:40px_40px]',
            '[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <m.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <PointerHighlight
              containerClassName="mx-auto mb-6"
              rectangleClassName="border-blue-500"
              pointerClassName="text-blue-500"
            >
              <h2 className="text-4xl sm:text-5xl font-bold">Ready to integrate?</h2>
            </PointerHighlight>
            <p className="text-xl mb-8 text-white/90">
              Explore our developer documentation and start building with AIRZEP APIs today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs">
                <LitButton>View API Docs</LitButton>
              </Link>
              <Link href="/contact">
                <LitButton>Talk to Engineering</LitButton>
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  )
}
