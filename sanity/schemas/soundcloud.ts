import {defineField, defineType} from 'sanity'

export const soundcloud = defineType({
  name: 'soundcloud',
  title: 'Soundcloud',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})