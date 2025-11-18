export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AIRZEP',
  url: 'https://airzep.vercel.app',
  logo: 'https://airzep.vercel.app/logo.png',
  description:
    'Advanced logistics technology through distributed robotics, edge AI, and intelligent fleet operating systems.',
  sameAs: [
    'https://twitter.com/airzep',
    'https://linkedin.com/company/airzep',
    'https://github.com/airzep',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@airzep.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AIRZEP',
  url: 'https://airzep.vercel.app',
  description:
    'Advanced logistics technology through distributed robotics, edge AI, and intelligent fleet operating systems.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://airzep.vercel.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AIRZEP Logistics Technology',
  provider: {
    '@type': 'Organization',
    name: 'AIRZEP',
  },
  serviceType: 'Logistics Technology',
  description:
    'Advanced logistics technology through distributed robotics, edge AI, and intelligent fleet operating systems.',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Logistics Solutions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Autonomous Fleet Management',
          description: 'Intelligent fleet operating systems with real-time coordination',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Edge AI Processing',
          description: 'Real-time decision making and predictive analytics',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Distributed Robotics',
          description: 'Advanced autonomous delivery systems',
        },
      },
    ],
  },
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
