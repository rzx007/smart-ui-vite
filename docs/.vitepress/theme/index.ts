import DefaultTheme from 'vitepress/theme'
// import Button from '../../../src/button'
import SmartyUI from '../../../src/entry'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.component(Button.name, Button)
    app.use(SmartyUI)
    // app.component('Demo', Demo)
    // app.component('DemoBlock', DemoBlock)
  },
}