const summary = {
  name: 'summary',
  title: 'Summary',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'paragraph',
      title: 'Pargrapgh',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}

export default summary
