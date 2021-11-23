import Vue from 'vue'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'
import router from '@/router'
import store from '@/store'
import i18n from '@/locales'
import directives from '@/directives'
import App from '@/App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(directives)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
