import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "project" }),
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
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
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
      // of: [{ type: "" }],
    },
  ],
};

export default project;
