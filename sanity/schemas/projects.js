import { MdAlbum } from 'react-icons/md';

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: MdAlbum,
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'Name of the Project',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'order',
      title: 'Placement Order',
      type: 'number',
      description: 'Rate the project order',
    },
    {
      name: 'category',
      title: 'Project Category',
      type: 'string',
      description: 'Category of the Project',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'string',
      description: 'Description of the Project',
    },
    {
      name: 'tags',
      title: 'Tech Used',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'link',
      title: 'Site Link',
      type: 'string',
      description: 'Link to the Live Site',
    },
    {
      name: 'githubLink',
      title: 'Github Link',
      type: 'string',
      description: 'Link to the Git Repo',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imagesGallery',
      title: 'Image gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
