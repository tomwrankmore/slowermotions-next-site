import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

const interview = {
  name: "interview",
  title: "Interview",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "interview" }),
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: 'relatedProjects',
      title: 'Related projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'interview'}}]
    }
  ],
};

export default interview;
