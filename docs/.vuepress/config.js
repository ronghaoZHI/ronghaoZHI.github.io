module.exports = {
  title: 'Blog',
  head: [
    ['link', { rel: 'icon', href: './logo.png' }]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Article", link:"/article/" },
      { text: "AboutMe", link:"/about/" },
      { text: "Github", link: "https://github.com/ronghaoZHI" }
    ],
    //  test sidebar
    sidebar: {
      "/article/": [
        {
          title: '文章',
          collapsable: true,
          children: [
            '/article/2018-12-04',
            '/article/2018-12',
            '/article/2018-11',
          ]
      }]
    }
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  },
}