import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://airzep.vercel.app'

  // Static routes
  const routes = ['', '/case-studies', '/contact', '/technology'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Add dynamic case study routes if you have them
  // const caseStudies = await getCaseStudies()
  // const caseStudyRoutes = caseStudies.map((study) => ({
  //   url: `${baseUrl}/case-studies/${study.slug}`,
  //   lastModified: new Date(study.updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))

  return [...routes]
}
