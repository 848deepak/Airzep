'use client'

import { m } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <m.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Last Updated: November 18, 2025
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              AIRZEP (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <p>We collect information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Name, email address, phone number, and company information</li>
              <li>Communication preferences and inquiries submitted through contact forms</li>
              <li>Technical consultation requests and demo scheduling information</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address, browser type, and operating system</li>
              <li>Pages visited, time spent on pages, and navigation paths</li>
              <li>Referring website addresses and search terms used</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use collected information for the following purposes:</p>
            <ul>
              <li>To respond to inquiries and provide requested information</li>
              <li>To schedule demos and technical consultations</li>
              <li>To improve our website, products, and services</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>

            <h2>4. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul>
              <li>Service providers who assist in operating our website and services</li>
              <li>Professional advisors, including lawyers and accountants</li>
              <li>Law enforcement or regulatory authorities when legally required</li>
              <li>Business successors in the event of a merger or acquisition</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              information, including encryption, access controls, and secure data storage. However,
              no method of transmission over the internet is 100% secure.
            </p>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
              <li>Withdrawal of consent</li>
            </ul>

            <h2>7. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience. You can control
              cookie preferences through your browser settings. Disabling cookies may affect website
              functionality.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices of these external sites.
            </p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not
              knowingly collect personal information from children.
            </p>

            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your
              country of residence. We ensure appropriate safeguards are in place for such
              transfers.
            </p>

            <h2>11. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes
              outlined in this policy, unless a longer retention period is required by law.
            </p>

            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of significant
              changes by posting the new policy on this page with an updated &quot;Last
              Updated&quot; date.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights,
              please contact us:
            </p>
            <p>
              Email: <a href="mailto:privacy@airzep.com">privacy@airzep.com</a>
              <br />
              Website: <Link href="/contact">airzep.com/contact</Link>
            </p>
          </div>
        </m.div>
      </div>
    </div>
  )
}
