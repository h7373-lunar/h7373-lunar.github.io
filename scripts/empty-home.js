// Keep the homepage available before the first post is published.
hexo.extend.generator.register('empty-home', function (locals) {
  if (locals.posts.length) return

  return {
    path: 'index.html',
    layout: 'index',
    data: { __index: true, posts: locals.posts, total: 1, current: 1 }
  }
})
