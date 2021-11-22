import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import user from './modules/user'
import demo from './modules/demo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    user,
    demo,
  },
  state: {},
  getters: {},
  actions: {},
  mutations: {},
})
