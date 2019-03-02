// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(store => {
    const Post = store.addContentType({
      typeName: 'Post',
      route: '/blog/:slug'
    })
    Post.addNode({
      title: Post.title,
      description: Post.description,
      fields: {
        AuthorName: Post.AuthorName,
        'url-slug': Post['url-slug']
      }
    })
  })

}