'use client'

import { m } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Image from 'next/image'

// Mock data - replace with CMS data using getCaseStudies()
const caseStudies = [
  {
    id: '1',
    slug: 'techcorp-last-mile-delivery',
    title: 'TechCorp Reduces Last-Mile Delivery Time by 40%',
    client: 'TechCorp',
    industry: 'logistics',
    excerpt:
      'How TechCorp leveraged AIRZEP&apos;s autonomous fleet to cut delivery times in half while reducing operational costs.',
    image: '/assets/case-study-1.jpg',
    metrics: [
      { label: 'Faster Delivery', value: '40%' },
      { label: 'Cost Reduction', value: '35%' },
      { label: 'Fleet Efficiency', value: '99.5%' },
    ],
    publishedAt: '2024-11-01',
  },
  {
    id: '2',
    slug: 'medlogistics-critical-supplies',
    title: 'MedLogistics Achieves 99.9% On-Time Critical Supply Delivery',
    client: 'MedLogistics',
    industry: 'healthcare',
    excerpt:
      'Healthcare supply chain transformation with temperature-controlled autonomous delivery ensuring patient safety.',
    image: '/assets/case-study-2.jpg',
    metrics: [
      { label: 'On-Time Delivery', value: '99.9%' },
      { label: 'Temperature Accuracy', value: '100%' },
      { label: 'Response Time', value: '<15min' },
    ],
    publishedAt: '2024-10-15',
  },
  {
    id: '3',
    slug: 'rapid-response-disaster-relief',
    title: 'RapidResponse Delivers Aid in 8 Minutes During Natural Disaster',
    client: 'RapidResponse',
    industry: 'emergency',
    excerpt:
      'Emergency response coordination using AIRZEP&apos;s autonomous fleet for rapid disaster relief supply delivery.',
    image: '/assets/case-study-3.jpg',
    metrics: [
      { label: 'Avg Response', value: '8min' },
      { label: 'Successful Missions', value: '2,500+' },
      { label: 'Lives Impacted', value: '50,000+' },
    ],
    publishedAt: '2024-09-20',
  },
]

const industries = [
  { label: 'All', value: 'all' },
  { label: 'Logistics', value: 'logistics' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Emergency Response', value: 'emergency' },
  { label: 'Enterprise', value: 'enterprise' },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-neutral-950 to-primary-950 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
              Customer Success
              <span className="block text-primary-300">Stories</span>
            </h1>
            <p className="text-xl text-neutral-300">
              See how leading organizations transform their logistics operations with measurable,
              real-world results.
            </p>
          </m.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10M+', label: 'Deliveries Completed' },
              { value: '99.9%', label: 'Average Uptime' },
              { value: '40%', label: 'Avg Cost Reduction' },
              { value: '150+', label: 'Enterprise Clients' },
            ].map((stat, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter (placeholder for future implementation) */}
      <section className="py-12 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map(industry => (
              <button
                key={industry.value}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  industry.value === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                }`}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <m.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                  <Card hover className="h-full flex flex-col">
                    {/* Image placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500 rounded-t-2xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                        {study.client.charAt(0)}
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300">
                          {study.industry}
                        </span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary-500 transition-colors">
                        {study.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="mb-6">{study.excerpt}</CardDescription>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mt-auto pt-6 border-t border-neutral-200 dark:border-neutral-800">
                        {study.metrics.map(metric => (
                          <div key={metric.label} className="text-center">
                            <div className="text-lg font-bold text-primary-500">{metric.value}</div>
                            <div className="text-xs text-neutral-600 dark:text-neutral-400">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 mt-6 text-primary-500 font-medium group-hover:gap-3 transition-all">
                        Read Case Study
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </m.div>
            ))}
          </div>
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
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to write your success story?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of organizations transforming their logistics with AIRZEP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="secondary">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                size="xl"
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
