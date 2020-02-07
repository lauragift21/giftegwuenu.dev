// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gift Egwuenu',
  siteUrl: 'https://giftegwuenu.com',
  siteDescription: 'Personal Blog by Gift Egwuenu. She\'s a Frontend Developer & Hobbyist Photographer and she\'s passionate about making the web accessible to everyone.',

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: '/:slug',
        remark: {
          plugins: [
            ['@noxify/gridsome-plugin-remark-embed', {
              'enabledProviders' : [
                'Youtube',
                'Twitter',
                'Gist',
                'Codepen',
                'Giphy',
                'Spotify'
              ],
            }]
          ]
        },
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-102896008-2'
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Gift Egwuenu',
          description: 'A blog on frontend development, technical career and soft skills. Written by Gift Egwuenu, Front-end Developer',
          feed_url: 'https://giftegwuenu.com/rss.xml',
          site_url: 'https://giftegwuenu.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          date: node.date,
          url: 'https://giftegwuenu.com/' + node.slug,
          description: node.description
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/exclude-me'],
        config: {
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}
