import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'type',
      title: 'Partnership Type',
      type: 'string',
      options: {
        list: [
          { title: 'Technology', value: 'technology' },
          { title: 'Integration', value: 'integration' },
          { title: 'Reseller', value: 'reseller' },
          { title: 'Strategic', value: 'strategic' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Partner',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      type: 'type',
    },
    prepare(selection) {
      const { type } = selection
      return { ...selection, subtitle: type }
    },
  },
})
