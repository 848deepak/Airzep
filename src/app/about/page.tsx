'use client'

import { m } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { LitButton } from '@/components/ui/LitButton'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { DotBackground } from '@/components/ui/dot-background'
import Link from 'next/link'
import { Target, Eye, Rocket, Cpu, Radio, Cog, ArrowRight } from 'lucide-react'

const buildingBlocks = [
  {
    icon: Cpu,
    title: 'Autonomous Drone Systems',
    description: 'Advanced aerial vehicles with multi-sensor fusion and real-time navigation.',
  },
  {
    icon: Radio,
    title: 'Intelligent POD Stations',
    description: 'Automated ground stations for precision landing, charging, and payload transfer.',
  },
  {
    icon: Cog,
    title: 'Fleet OS & AI Platforms',
    description: 'Centralized orchestration and edge AI for autonomous fleet coordination.',
  },
  {
    icon: Rocket,
    title: 'Robotics R&D',
    description: 'Continuous innovation in autonomous systems, perception, and control algorithms.',
  },
  {
    icon: Radio,
    title: 'Connectivity Infrastructure',
    description: 'High-availability mesh networks for seamless autonomous system communication.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
        <BackgroundBeams />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <m.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white">
              Engineering the
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                autonomous future
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              AIRZEP is a technology company building the infrastructure for autonomous logistics at
              global scale.
            </p>
          </m.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <DotBackground className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <m.div
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-950 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary-500" />
                  </div>
                  <CardTitle className="text-3xl">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    To create a fully autonomous logistics layer for the world — where movement is
                    instant, efficient, and intelligently orchestrated.
                  </p>
                </CardContent>
              </Card>
            </m.div>

            <m.div
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent-100 dark:bg-accent-950 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-accent-500" />
                  </div>
                  <CardTitle className="text-3xl">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    A world where autonomous systems seamlessly handle logistics operations,
                    enabling faster, safer, and more sustainable movement of goods globally.
                  </p>
                </CardContent>
              </Card>
            </m.div>
          </div>
        </div>
      </DotBackground>

      {/* What We Build */}
      <section className="py-20 sm:py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6">
          <m.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What We Build</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              A complete technology stack for autonomous logistics infrastructure
            </p>
          </m.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {buildingBlocks.map((block, index) => {
              const Icon = block.icon
              return (
                <m.div
                  key={block.title}
                  initial={{ y: 40 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-950 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <CardTitle className="text-xl">{block.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 dark:text-neutral-400">{block.description}</p>
                    </CardContent>
                  </Card>
                </m.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Stage */}
      <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
        <BackgroundBeams />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <m.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Current Stage</h2>
            <p className="text-xl text-white/90 mb-8">
              R&D phase with active prototype development. We&apos;re engineering the foundational
              technology for autonomous logistics at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <LitButton>
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </LitButton>
              </Link>
              <Link href="/technology">
                <LitButton>Explore Technology</LitButton>
              </Link>
            </div>
          </m.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <m.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Join Us in Building the Future</h2>
            <p className="text-xl text-white/80 mb-8">
              Interested in learning more about AIRZEP&apos;s technology and development roadmap?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <LitButton>Get in Touch</LitButton>
              </Link>
              <Link href="/case-studies">
                <LitButton>View Case Studies</LitButton>
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  )
}
