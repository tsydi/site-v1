export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'keywords',
      title: 'Keywords (SEO)',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description (SEO)',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Personal', value: 'personal'},
          { title: 'Job', value: 'job'},
          { title: 'School', value: 'school'},
        ],
        layout: 'radio'
      }
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'string'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'publishedAt',
      title: 'PublishedAt',
      type: 'datetime'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'text',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
  ]
}