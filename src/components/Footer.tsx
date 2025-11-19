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
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} AIRZEP. All rights reserved.
            </p>

            {/* Charging Station */}
            <div className="flex justify-center items-center my-6 md:my-0 relative">
              <div className="relative">
                {/* Charging Station Base */}
                <svg width="400" height="90" viewBox="0 0 400 90" className="relative z-10">
                  {/* Station platform */}
                  <defs>
                    <linearGradient id="stationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" stopOpacity="1" />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
                    </linearGradient>
                    <filter id="stationGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Main platform */}
                  <rect
                    x="40"
                    y="60"
                    width="320"
                    height="25"
                    rx="3"
                    fill="url(#stationGradient)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <rect x="45" y="65" width="310" height="15" rx="2" fill="#0a0a0a" opacity="0.5" />

                  {/* Charging Pads with Drones */}
                  {[80, 160, 240, 320].map((x, i) => (
                    <g key={i}>
                      {/* Charging Pad */}
                      <rect
                        x={x - 12}
                        y="67"
                        width="24"
                        height="12"
                        rx="2"
                        fill="#1e293b"
                        stroke="#10b981"
                        strokeWidth="1.5"
                      />

                      {/* Energy flow lines */}
                      <line
                        x1={x}
                        y1="50"
                        x2={x}
                        y2="67"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="3,3"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="0"
                          to="6"
                          dur="0.8s"
                          repeatCount="indefinite"
                        />
                      </line>

                      {/* Energy particles */}
                      <circle r="2" fill="#fbbf24">
                        <animateMotion
                          dur="1.5s"
                          repeatCount="indefinite"
                          begin={`${i * 0.3}s`}
                          path={`M ${x} 50 L ${x} 67`}
                        />
                      </circle>

                      {/* Drone above pad */}
                      <g transform={`translate(${x}, ${35 + Math.sin(i) * 2})`}>
                        {/* Drone body */}
                        <ellipse cx="0" cy="0" rx="12" ry="8" fill="#3b82f6" opacity="0.9" />
                        <ellipse cx="0" cy="0" rx="8" ry="5" fill="#60a5fa" opacity="0.7" />

                        {/* Propeller arms */}
                        <line x1="-12" y1="-8" x2="-18" y2="-12" stroke="#1e40af" strokeWidth="2" />
                        <line x1="12" y1="-8" x2="18" y2="-12" stroke="#1e40af" strokeWidth="2" />
                        <line x1="-12" y1="8" x2="-18" y2="12" stroke="#1e40af" strokeWidth="2" />
                        <line x1="12" y1="8" x2="18" y2="12" stroke="#1e40af" strokeWidth="2" />

                        {/* Propellers with spin */}
                        <g transform="translate(-18, -12)">
                          <circle cx="0" cy="0" r="4" fill="#3b82f6" opacity="0.5">
                            <animate
                              attributeName="opacity"
                              values="0.3;0.9;0.3"
                              dur="0.2s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <line x1="-3" y1="0" x2="3" y2="0" stroke="#60a5fa" strokeWidth="1">
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 0 0"
                              to="360 0 0"
                              dur="0.4s"
                              repeatCount="indefinite"
                            />
                          </line>
                        </g>
                        <g transform="translate(18, -12)">
                          <circle cx="0" cy="0" r="4" fill="#3b82f6" opacity="0.5">
                            <animate
                              attributeName="opacity"
                              values="0.9;0.3;0.9"
                              dur="0.2s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <line x1="-3" y1="0" x2="3" y2="0" stroke="#60a5fa" strokeWidth="1">
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 0 0"
                              to="360 0 0"
                              dur="0.4s"
                              repeatCount="indefinite"
                            />
                          </line>
                        </g>
                        <g transform="translate(-18, 12)">
                          <circle cx="0" cy="0" r="4" fill="#3b82f6" opacity="0.5">
                            <animate
                              attributeName="opacity"
                              values="0.9;0.3;0.9"
                              dur="0.2s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <line x1="-3" y1="0" x2="3" y2="0" stroke="#60a5fa" strokeWidth="1">
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 0 0"
                              to="360 0 0"
                              dur="0.4s"
                              repeatCount="indefinite"
                            />
                          </line>
                        </g>
                        <g transform="translate(18, 12)">
                          <circle cx="0" cy="0" r="4" fill="#3b82f6" opacity="0.5">
                            <animate
                              attributeName="opacity"
                              values="0.3;0.9;0.3"
                              dur="0.2s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <line x1="-3" y1="0" x2="3" y2="0" stroke="#60a5fa" strokeWidth="1">
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 0 0"
                              to="360 0 0"
                              dur="0.4s"
                              repeatCount="indefinite"
                            />
                          </line>
                        </g>

                        {/* LED indicator on drone */}
                        <circle cx="0" cy="-2" r="2" fill={i % 2 === 0 ? '#10b981' : '#fbbf24'}>
                          <animate
                            attributeName="opacity"
                            values="1;0.3;1"
                            dur={`${0.8 + i * 0.2}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>

                      {/* Pad LED indicator */}
                      <rect
                        x={x - 3}
                        y="70"
                        width="6"
                        height="6"
                        rx="1"
                        fill={i % 2 === 0 ? '#10b981' : '#fbbf24'}
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0.4;1"
                          dur={`${1 + i * 0.2}s`}
                          repeatCount="indefinite"
                        />
                      </rect>
                    </g>
                  ))}

                  {/* Station Label */}
                  <text
                    x="200"
                    y="15"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#64748b"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    DRONE CHARGING STATION
                  </text>
                  <text
                    x="200"
                    y="27"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#10b981"
                    fontFamily="monospace"
                  >
                    ⚡ ACTIVE: 4/4 CHARGING
                  </text>
                </svg>

                {/* Ambient glow */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur-xl" />
              </div>
            </div>

            <p className="text-sm text-neutral-500">Built with cutting-edge technology</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
