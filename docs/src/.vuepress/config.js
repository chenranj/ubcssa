const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '布法罗学联',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: '',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#005bbb' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', {href: '//db.onlinewebfonts.com/c/752149278afff657a3b77d75b35463fc?family=PingFang+SC', rel:'stylesheet', type:'text/css'}],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: '',
    nav: [
      {
        text: '新生手册',
        link: '/book/',
      },
      {
        text: '关于学联',
        link: '/about/'
      },
      {
        text: '学校官网',
        link: 'https://buffalo.edu'
      }
    ],
    sidebar: {
      '/book/': [
        {
          title: '新生手册',
          collapsable: false,
          children: [
            'preface',
            'prepare',
            'campus-life',
            'live',
            'food',
            'phone',
            'bank',
            'traffic-ruls',
          ]
        },
        {
          title: '专题文章',
          collapsable: false,
          children: [
            'spam',
          ]
        },
      ],
      '/about/': [
        {
          title: '关于学联',
          collapsable: false,
          children: [
            '',
            'contact',
            'resources',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    'fulltext-search',
  ]
}
