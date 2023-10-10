import {defineField, defineType} from 'sanity'
import {YouTubePreview} from '../../components/YouTubePreview'

export const youtube = defineType({
  name: 'youtube',
  title: 'Youtube',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})