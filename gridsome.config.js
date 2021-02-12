const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Gift Egwuenu",
  siteUrl: "https://giftegwuenu.com",
  siteDescription:
    "Gift Egwuenu is a frontend developer and content creator. Her blog features content on frontend development, accessibility, and tech career advice.",
  icon: {
    favicon: "./src/favicon.png",
  },
  templates: {
    Post: "/:title",
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        remark: {
          plugins: [
            [
              "gridsome-plugin-remark-prismjs-all",
              {
                showLineNumber: true,
                highlightClassName: "gridsome-highlight",
                codeTitleClassName: "gridsome-code-title",
                classPrefix: "language-",
              },
            ],
            [
              "@noxify/gridsome-plugin-remark-embed",
              {
                enabledProviders: [
                  "Youtube",
                  "Twitter",
                  "Gist",
                  "Codepen",
                  "Giphy",
                  "Spotify",
                ],
              },
            ],
          ],
        },
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    // {
    //   use: "@gridsome/plugin-google-analytics",
    //   options: {
    //     id: "UA-102896008-2",
    //   },
    // },
    {
      use: 'gridsome-plugin-plausible-analytics',
      options: {
        dataDomain: 'giftegwuenu.dev',
        outboundLinkTracking: false
      }
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        latest: true,
        feedOptions: {
          title: "Gift Egwuenu",
          description:
            "A blog on frontend development, technical career and soft skills. Written by Gift Egwuenu",
          feed_url: "https://giftegwuenu.com/rss.xml",
          site_url: "https://giftegwuenu.com",
        },
        feedItemOptions: (node) => ({
          title: node.title,
          date: node.date,
          url: "https://giftegwuenu.com" + node.path,
          description: node.description,
          custom_elements: [
            {
              "content:encoded": {
                _cdata: node.content
              }
            }
          ]

        }),
        output: {
          dir: "./static",
          name: "rss.xml",
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        exclude: ["/exclude-me"],
        config: {
          "/*": {
            changefreq: "weekly",
            priority: 0.8,
          }
        },
      },
    },
    {
      use: "gridsome-plugin-monetization",
      options: {
        paymentPointer: process.env.GRIDSOME_PAYMENT_POINTER, // your payment pointer
        global: true, // add monetization to every page; default: true
      },
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
    },
  },
};
