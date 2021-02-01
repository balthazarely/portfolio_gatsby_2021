import { MdAlbum } from 'react-icons/md';

export default {
  name: 'copy',
  title: 'Copy',
  type: 'document',
  icon: MdAlbum,
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'H1 text in the Hero',
    },
    {
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'string',
      description: 'Subhead text in the Hero',
    },
    {
      name: 'skills',
      title: 'Tech Skills',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'aboutText',
      title: 'About Body Text',
      type: 'string',
      description: 'P in the body',
    },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
