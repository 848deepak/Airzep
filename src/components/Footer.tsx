import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Technology', href: '/technology' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [{ label: 'Case Studies', href: '/case-studies' }],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/airzep', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/airzep', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/airzep', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hello@airzep.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-bold text-white tracking-[0.15em] uppercase">
                AIRZEP
              </span>
            </Link>
            <p className="text-sm text-neutral-400 mb-6 max-w-xs">
              Advancing logistics technology through distributed robotics, edge AI, and intelligent
              fleet systems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} AIRZEP. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500 mt-4 md:mt-0">
            Built with cutting-edge technology
          </p>
        </div>
      </div>
    </footer>
  )
}
