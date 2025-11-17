'use client'

import { useState } from 'react'
import { m } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'demo',
    message: '',
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <m.div
          initial={{ opacity: 1, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center px-4"
        >
          <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-6">
            <Send className="w-10 h-10 text-primary-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Thank you!</h2>
          <p className="text-lg text-white/80 mb-8">
            We&apos;ve received your request. Our team will get back to you within 24 hours.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Submit Another Request
          </Button>
        </m.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary-500 to-accent-500 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">Let&apos;s talk</h1>
            <p className="text-xl text-white/90">
              Ready to transform your logistics? Schedule a demo or speak with our team about your
              specific needs.
            </p>
          </m.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <m.div
                initial={{ opacity: 1, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Get in touch</h2>
                <p className="text-white/80 mb-8">
                  We&apos;re here to help. Reach out through any channel that works best for you.
                </p>
              </m.div>

              <m.div
                initial={{ opacity: 1, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-950 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Email</CardTitle>
                        <CardDescription>hello@airzep.com</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </m.div>

              <m.div
                initial={{ opacity: 1, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-950 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Phone</CardTitle>
                        <CardDescription>+1 (555) 123-4567</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </m.div>

              <m.div
                initial={{ opacity: 1, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-950 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Office</CardTitle>
                        <CardDescription>
                          San Francisco, CA
                          <br />
                          United States
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </m.div>
            </div>

            {/* Contact Form */}
            <m.div
              initial={{ opacity: 1, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Demo</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium mb-2">
                        I&apos;m interested in *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="demo">Product Demo</option>
                        <option value="partnership">Partnership</option>
                        <option value="enterprise">Enterprise Solution</option>
                        <option value="technical">Technical Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your logistics needs..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 rounded border-neutral-300 text-primary-500 focus:ring-2 focus:ring-primary-500"
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        I agree to AIRZEP&apos;s privacy policy and consent to being contacted
                        regarding this inquiry. *
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full" loading={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Request'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </m.div>
          </div>
        </div>
      </section>
    </div>
  )
}
