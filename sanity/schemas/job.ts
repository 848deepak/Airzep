import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'job',
  title: 'Job Posting',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
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
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Engineering', value: 'engineering' },
          { title: 'Product', value: 'product' },
          { title: 'Design', value: 'design' },
          { title: 'Operations', value: 'operations' },
          { title: 'Sales', value: 'sales' },
          { title: 'Marketing', value: 'marketing' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
          { title: 'Internship', value: 'internship' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'remote',
      title: 'Remote Option',
      type: 'string',
      options: {
        list: [
          { title: 'Remote', value: 'remote' },
          { title: 'Hybrid', value: 'hybrid' },
          { title: 'On-site', value: 'onsite' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'salaryRange',
      title: 'Salary Range',
      type: 'object',
      fields: [
        { name: 'min', type: 'number', title: 'Minimum' },
        { name: 'max', type: 'number', title: 'Maximum' },
        { name: 'currency', type: 'string', title: 'Currency', initialValue: 'USD' },
      ],
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted At',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      department: 'department',
      location: 'location',
    },
    prepare(selection) {
      const { department, location } = selection
      return { ...selection, subtitle: `${department} • ${location}` }
    },
  },
})
