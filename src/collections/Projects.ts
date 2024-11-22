import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'description'],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
              admin: {
                description: 'The title of the project',
              },
            },
            {
              name: 'description',
              label: 'Description',
              type: 'textarea',
              required: true,
              admin: {
                description: 'The description of the project',
              },
            },
            {
              name: 'thumbnail',
              label: 'Thumbnail',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'The thumbnail of the project',
              },
            },
          ],
        },
        {
          label: 'Links',
          fields: [
            {
              name: 'url',
              label: 'URL',
              type: 'text',
              required: true,
              admin: {
                description: 'URL link of the project',
              },
            },
            {
              name: 'github',
              label: 'GitHub',
              type: 'text',
              required: true,
              admin: {
                description: 'GitHub URL link of the project',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'Metadata',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'slug',
          type: 'text',
          unique: true,
          label: 'Slug',
          admin: {
            description: 'Automatically generated from the title',
            readOnly: true,
          },
          hooks: {
            beforeValidate: [
              ({ data }) => {
                return data?.title
                  .trim()
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-+|-+$/g, '')
              },
            ],
          },
        },
        {
          name: 'SEO Title',
          type: 'text',
          label: 'SEO Title',
          admin: {
            description: 'Automatically generated from the title',
            readOnly: true,
          },
          hooks: {
            beforeValidate: [
              ({ data }) => {
                return data?.title
              },
            ],
          },
        },
        {
          name: 'SEO Description',
          type: 'textarea',
          label: 'SEO Description',
          admin: {
            description: 'Automatically generated from the description',
            readOnly: true,
          },
          hooks: {
            beforeValidate: [
              ({ data }) => {
                return data?.description
              },
            ],
          },
        },
      ],
    },
  ],
}
