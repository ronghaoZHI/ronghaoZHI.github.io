module.exports = {
  title: '博客',
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
          collapsable: false,
          children: [
            '/',
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