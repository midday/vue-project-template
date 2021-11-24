import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { set } from 'lodash-es'
import locale from 'element-ui/lib/locale'
import elementUILocaleForEnUS from 'element-ui/lib/locale/lang/en'
import elementUILocalForZhCN from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(VueI18n)

/**
 * 生成指定语言的Message
 * @param {Object} requireContext Webpack的requiredContext
 * @returns
 */
const generateMessage = requireContext => {
  const message = {}
  requireContext.keys().forEach(path => {
    const langFileModule = requireContext(path)
    let fileName = path.replace(/^\.\//, '')
    const lastIndex = fileName.lastIndexOf('.')
    fileName = fileName.substring(0, lastIndex)
    const keyList = fileName.split('/')
    const moduleName = keyList.shift()
    const messageKey = keyList.join('.')
    if (moduleName) {
      if (messageKey) {
        set(message, moduleName, message[moduleName] || {})
        set(message[moduleName], messageKey, langFileModule)
      } else {
        set(message, moduleName, langFileModule || {})
      }
    }
  })
  return message
}

const DEFAULT_LANG = 'zh-CN'

const locales = {
  'zh-CN': {
    ...generateMessage(require.context('./lang/zh-CN/', true, /\.json$/)),
    ...elementUILocalForZhCN,
  },
  'en-US': {
    ...generateMessage(require.context('./lang/en-US/', true, /\.json$/)),
    ...elementUILocaleForEnUS,
  },
}

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || DEFAULT_LANG,
  messages: locales,
})

// 为了实现element插件的多语言切换
locale.i18n((key, value) => i18n.t(key, value))

/**
 * 国际化翻译函数
 * @param {String} key 待翻译的key标识
 * @returns
 */
export const $t = key => i18n.t(key)

/**
 * 设置国际化语言
 * @param {String} lang 语言码
 * @returns
 */
export const setI18nLanguage = lang => {
  document.querySelector('html').setAttribute('lang', lang)
  localStorage.setItem('locale', 'zh-CN')
  i18n.locale = lang
  // Object.keys(locales).forEach(lang => {
  //   document.body.classList.remove(`lang-${lang}`)
  // })
  // document.body.classList.add(`lang-${lang}`)
  // document.body.setAttribute('lang', lang)
}

export default i18n
