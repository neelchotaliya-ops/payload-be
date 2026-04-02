import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'posts',         // URL: GET /api/posts
  admin: {
    useAsTitle: 'title', // Shows title in admin list view
  },
  access: {
    read: () => true,    // Public read — anyone can fetch posts
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      // Used in URL: /blog/my-first-post
    },
    {
      name: 'content',
      type: 'richText',  // Rich text editor in admin panel
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
    },
  ],
}
 
export default Posts
