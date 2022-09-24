import { defineConfig } from 'vitepress'
const sidebar: any = {
  '/': [
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
      ]
    },
  ]
}
export default defineConfig({
  title: "🔨  Smarty-UI",
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/rzx007' }
    ],
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Evan You'
    },
  },
  
})