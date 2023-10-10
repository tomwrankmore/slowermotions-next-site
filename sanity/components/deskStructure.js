import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const myStructure = (S, context) =>
  S.list()
    .title('Base')
    .items([
      orderableDocumentListDeskItem({type: 'interview', S, context}),
      S.listItem()
        .title('Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')),
            ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'interview'].includes(listItem.getId()))
    ])