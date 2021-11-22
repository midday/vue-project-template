import Vue from 'vue'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import store from '@/store'
import i18n from '@/locales'
import App from '@/App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
