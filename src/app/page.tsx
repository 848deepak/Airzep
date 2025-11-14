'use client'

import { Hero3D } from '@/components/Hero3D'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
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
    <>
      <Hero3D />

      {/* Technology Section */}
      <section className="py-20 sm:py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Technology-first
              <span className="block text-primary-500">approach</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card hover className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-950 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{pillar.description}</CardDescription>
                    </CardContent>
                  </Card>
                </m.div>
              )
            })}
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline">
              <Link href="/technology">
                Explore Technology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </m.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 sm:py-32 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Solutions for
              <span className="block text-primary-500">every industry</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Tailored logistics technology solutions designed for mission-critical applications
              across diverse sectors.
            </p>
          </m.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <m.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link href={solution.href} className="group block h-full">
                  <Card hover className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-primary-500 transition-colors">
                        {solution.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base">
                        {solution.description}
                      </CardDescription>
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
                        <span className="text-sm font-semibold text-primary-500">
                          {solution.metric}
                        </span>
                        <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-8">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner, index) => (
                <m.div
                  key={partner}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-2xl font-bold text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                >
                  {partner}
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="container mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to transform your logistics?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule a demo to see how AIRZEP can revolutionize your delivery infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="secondary">
                <Link href="/contact">Request Demo</Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </m.div>
        </div>
      </section>
    </>
  )
}
