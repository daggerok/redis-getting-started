const baseHref = !process.env.BASE_HREF ? '/' : process.env.BASE_HREF;
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base: baseHref,
  themeConfig: {
    repo: 'daggerok/redis-getting-started',
    lastUpdated: 'Last Updated',
  },
};
