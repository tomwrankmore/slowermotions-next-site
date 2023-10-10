import {defineField, defineType} from 'sanity'

export const figure = defineType({
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: false
  },
  fields: [
    defineField({
      title: 'Caption',
      name: 'caption',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      description: 'Important for SEO and accessiblity.',
    }),
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
})
