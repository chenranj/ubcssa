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
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'chenranj/ubcssa',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '帮助我们改进手册！',
    lastUpdated: '上次更新: ',
    nav: [
      {
        text: '新生手册',
        link: '/book/',
      },
      {
        text: '诈骗预防',
        link: '/spam/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
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
