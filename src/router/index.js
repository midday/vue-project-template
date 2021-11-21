import Vue from 'vue'
import Router from 'vue-router'
import common from './common'
import demo from './demo'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [...common, ...demo],
})

export default router
