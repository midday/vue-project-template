import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { set } from 'lodash-es'

Vue.use(VueI18n)

/**
 * 生成指定语言的Message
 * @param {Object} requireContext
 * @returns
 */
const generateMessage = requireContext => {
  const obj = {}
  requireContext.keys().forEach(path => {
    const langFileModule = requireContext(path).default
    let fileName = path.replace(/^\.\//, '')
    const lastIndex = fileName.lastIndexOf('.')
    fileName = fileName.substring(0, lastIndex)
    const keyList = fileName.split('/')
    const moduleName = keyList.shift()
    const objKey = keyList.join('.')
    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {})
        set(obj[moduleName], objKey, langFileModule)
      } else {
        set(obj, moduleName, langFileModule || {})
      }
    }
  })
  return obj
}

// 默认语言
const defaultLang = 'zh-CN'

const i18n = new VueI18n({
  locale: defaultLang,
  fallbackLocale: defaultLang,
  messages: {
    'zh-CN': {
      ...generateMessage(require.context('./zh-CN/', true, /\.js$/)),
    },
    'en-US': {
      ...generateMessage(require.context('./en-US/', true, /\.js$/)),
    },
  },
})

export const $t = key => i18n.t(key)

export const setI18nLanguage = lang => {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export default i18n
