'use client'

import { m } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { Button } from '@/components/ui/Button'
import { Boxes } from '@/components/ui/background-boxes'
import { Spotlight } from '@/components/ui/spotlight'
import Link from 'next/link'
import { Cpu, Zap, Network, Code, ArrowRight, Shield, Gauge, Cloud } from 'lucide-react'
import { cn } from '@/lib/utils'

const techStack = [
  {
    icon: Cpu,
    title: 'Distributed Robotics',
    description:
      'Autonomous units powered by advanced sensor fusion, real-time obstacle avoidance, and adaptive path planning algorithms.',
    features: [
      'Multi-sensor fusion (LiDAR, Camera, IMU)',
      'Real-time SLAM for navigation',
      'Weather-resistant operation',
      'Predictive maintenance AI',
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
    title: 'Edge AI Processing',
    description:
      'On-device neural networks processing vision, sensor data, and decision-making with sub-10ms latency for real-time autonomous operations.',
    features: [
      'Object detection and classification',
      'Semantic segmentation for navigation',
      'Behavioral prediction models',
      'Continuous model updates via OTA',
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
    title: 'Fleet Operating System',
    description:
      'Centralized orchestration platform managing thousands of autonomous units with intelligent routing, load balancing, and real-time optimization.',
    features: [
      'Multi-agent coordination',
      'Dynamic route optimization',
      'Traffic management & collision avoidance',
      'Real-time telemetry dashboard',
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
    description:
      'Comprehensive REST & GraphQL APIs, SDKs in 8 languages, webhooks, and sandbox environment for rapid integration.',
    features: [
      'RESTful & GraphQL APIs',
      'WebSocket for real-time updates',
      'Comprehensive SDK libraries',
      'Sandbox & testing environment',
    ],
    specs: {
      'API Uptime': '99.95%',
      'Rate Limit': '10,000 req/min',
      Languages: '8 SDKs',
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
            className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white">
              Technology that
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                powers autonomy
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Our technology stack combines cutting-edge robotics, distributed AI, and intelligent
              orchestration to deliver the future of logistics today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="default">
                <Link href="/contact">Schedule Technical Demo</Link>
              </Button>
              <Button asChild size="xl" variant="ghost" className="text-white hover:bg-white/10">
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </m.div>
        </div>
      </section>

      {/* Technology Stack Details */}
      <section className="relative py-20 sm:py-32 bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
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

                    <Button asChild variant="outline">
                      <Link href={`/technology/${tech.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Enterprise-Grade Features</h2>
            <p className="text-lg text-neutral-400">
              Built for mission-critical operations with security, performance, and reliability at
              the core.
            </p>
          </m.div>

          <HoverEffect
            items={additionalFeatures.map((feature) => ({
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
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to integrate?</h2>
            <p className="text-xl mb-8 text-white/90">
              Explore our developer documentation and start building with AIRZEP APIs today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="secondary">
                <Link href="/docs">View API Docs</Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Talk to Engineering</Link>
              </Button>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  )
}
