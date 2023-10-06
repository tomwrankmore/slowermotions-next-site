import {defineField, defineType} from 'sanity'

export const spotify = defineType({
  name: 'spotify',
  title: 'Spotify',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})