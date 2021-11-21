import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import i18n from '@/locales'
import App from './app.vue'

console.log(router)

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
