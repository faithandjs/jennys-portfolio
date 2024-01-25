const overview = {
  name: 'overview',
  title: 'Overview',
  type: 'document',
  fields: [
    {
      name: 'bannertext',
      title: 'Banner Text',
      type: 'string',
    },
    {
      name: 'summarytitle',
      title: 'Summary Title',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'newsletter',
      title: 'Newsletter',
      type: 'url',
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url',
    },
    {
      name: 'novypro',
      title: 'Novypro',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
  ],
}

export default overview
