'use client'

import { m } from 'framer-motion'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <m.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Last Updated: November 18, 2025
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using AIRZEP&apos;s website and services, you agree to be bound by
              these Terms of Service. If you do not agree to these terms, please do not use our
              services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              AIRZEP provides information about autonomous logistics technology, including robotics
              systems, fleet operating systems, and related infrastructure. Our services are
              currently in the research and development phase.
            </p>

            <h2>3. Use License</h2>
            <h3>3.1 Permitted Use</h3>
            <p>You are granted a limited, non-exclusive, non-transferable license to:</p>
            <ul>
              <li>Access and view website content for personal or business evaluation purposes</li>
              <li>Download materials for non-commercial use with proper attribution</li>
              <li>Contact us for legitimate business inquiries</li>
            </ul>

            <h3>3.2 Prohibited Use</h3>
            <p>You may not:</p>
            <ul>
              <li>Modify, copy, or create derivative works from our content without permission</li>
              <li>Use automated systems to scrape or extract data from our website</li>
              <li>Reverse engineer any technology or systems</li>
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Impersonate AIRZEP or our representatives</li>
            </ul>

            <h2>4. Intellectual Property Rights</h2>
            <p>
              All content, trademarks, logos, and intellectual property on this website are owned by
              AIRZEP or our licensors. You may not use our trademarks or branding without express
              written permission.
            </p>

            <h2>5. User Content and Communications</h2>
            <p>
              When you submit information through our contact forms or communications, you grant us
              the right to use, reproduce, and respond to such communications. You represent that
              you have the right to share any information you provide.
            </p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided &quot;as is&quot; without warranties of any
              kind, either express or implied. We do not warrant that:
            </p>
            <ul>
              <li>Our services will be uninterrupted, timely, secure, or error-free</li>
              <li>Information provided will be accurate or complete</li>
              <li>Any defects will be corrected</li>
              <li>Our services are free from viruses or harmful components</li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, AIRZEP shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting from your use of or
              inability to use our services.
            </p>

            <h2>8. Product Information and Development Stage</h2>
            <p>
              AIRZEP products and services are currently in the research and development phase.
              Information provided on this website is subject to change. Any specifications,
              features, or timelines are preliminary and not binding commitments.
            </p>

            <h2>9. External Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              content, policies, or practices of external sites.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold AIRZEP harmless from any claims, losses, damages, or
              expenses arising from your use of our services or violation of these terms.
            </p>

            <h2>11. Privacy</h2>
            <p>
              Your use of our services is also governed by our{' '}
              <Link href="/privacy">Privacy Policy</Link>, which is incorporated by reference into
              these Terms of Service.
            </p>

            <h2>12. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be
              effective upon posting to this page. Your continued use of our services constitutes
              acceptance of modified terms.
            </p>

            <h2>13. Termination</h2>
            <p>
              We may terminate or suspend your access to our services at any time, without prior
              notice, for conduct that we believe violates these Terms of Service or is harmful to
              other users, us, or third parties.
            </p>

            <h2>14. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws
              of the jurisdiction in which AIRZEP operates, without regard to conflict of law
              provisions.
            </p>

            <h2>15. Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms shall be resolved through binding arbitration in
              accordance with applicable arbitration rules, except where prohibited by law.
            </p>

            <h2>16. Severability</h2>
            <p>
              If any provision of these Terms of Service is found to be unenforceable, the remaining
              provisions shall remain in full force and effect.
            </p>

            <h2>17. Entire Agreement</h2>
            <p>
              These Terms of Service, together with our Privacy Policy, constitute the entire
              agreement between you and AIRZEP regarding your use of our services.
            </p>

            <h2>18. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
            <p>
              Email: <a href="mailto:legal@airzep.com">legal@airzep.com</a>
              <br />
              Website: <Link href="/contact">airzep.com/contact</Link>
            </p>
          </div>
        </m.div>
      </div>
    </div>
  )
}
