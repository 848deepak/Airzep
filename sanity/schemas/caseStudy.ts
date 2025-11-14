import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Logistics', value: 'logistics' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Emergency Response', value: 'emergency' },
          { title: 'Enterprise', value: 'enterprise' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'value', type: 'string', title: 'Value' },
          ],
        },
      ],
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', type: 'text', title: 'Quote' },
        { name: 'author', type: 'string', title: 'Author Name' },
        { name: 'role', type: 'string', title: 'Author Role' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { client } = selection
      return { ...selection, subtitle: client && `Client: ${client}` }
    },
  },
})
