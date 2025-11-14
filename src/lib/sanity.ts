import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Type definitions
export interface CaseStudy {
  _id: string
  title: string
  slug: { current: string }
  client: string
  industry: string
  excerpt: string
  featuredImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  publishedAt: string
  metrics?: Array<{ label: string; value: string }>
  challenge?: string
  solution?: string
  results?: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  author: string
  authorRole?: string
  category: string
  excerpt: string
  featuredImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  content: unknown[]
  tags?: string[]
  publishedAt: string
  readTime?: number
}

export interface Job {
  _id: string
  title: string
  slug: { current: string }
  department: string
  location: string
  type: string
  remote: string
  description: string
  responsibilities?: string[]
  qualifications?: string[]
  benefits?: string[]
  salaryRange?: {
    min: number
    max: number
    currency: string
  }
  postedAt: string
  isActive: boolean
}

export interface Partner {
  _id: string
  name: string
  logo?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  website?: string
  description?: string
  type?: string
  featured: boolean
  order: number
}

// Fetch functions
export async function getCaseStudies(): Promise<CaseStudy[]> {
  return client.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      client,
      industry,
      excerpt,
      featuredImage,
      publishedAt,
      metrics
    }`
  )
}

export async function getCaseStudy(slug: string): Promise<CaseStudy> {
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client,
      industry,
      excerpt,
      featuredImage,
      publishedAt,
      metrics,
      challenge,
      solution,
      results,
      testimonial
    }`,
    { slug }
  )
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      authorRole,
      category,
      excerpt,
      featuredImage,
      tags,
      publishedAt,
      readTime
    }`
  )
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author,
      authorRole,
      category,
      excerpt,
      featuredImage,
      content,
      tags,
      publishedAt,
      readTime
    }`,
    { slug }
  )
}

export async function getJobs(): Promise<Job[]> {
  return client.fetch(
    `*[_type == "job" && isActive == true] | order(postedAt desc) {
      _id,
      title,
      slug,
      department,
      location,
      type,
      remote,
      description,
      postedAt
    }`
  )
}

export async function getJob(slug: string): Promise<Job> {
  return client.fetch(
    `*[_type == "job" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      department,
      location,
      type,
      remote,
      description,
      responsibilities,
      qualifications,
      benefits,
      salaryRange,
      postedAt,
      isActive
    }`,
    { slug }
  )
}

export async function getPartners(): Promise<Partner[]> {
  return client.fetch(
    `*[_type == "partner"] | order(order asc, name asc) {
      _id,
      name,
      logo,
      website,
      description,
      type,
      featured,
      order
    }`
  )
}
