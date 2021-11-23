import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { set } from 'lodash-es'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import { DEFAULT_LANG } from '@/constants'

Vue.use(VueI18n)

/**
 * 生成指定语言的Message
 * @param {Object} requireContext
 * @returns
 */
const generateMessage = requireContext => {
  const obj = {}
  requireContext.keys().forEach(path => {
    const langFileModule = requireContext(path)
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

const locales = {
  'zh-CN': {
    ...generateMessage(require.context('./lang/zh-CN/', true, /\.json$/)),
    ...zhLocale,
  },
  'en-US': {
    ...generateMessage(require.context('./lang/en-US/', true, /\.json$/)),
    ...enLocale,
  },
}

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || DEFAULT_LANG,
  messages: locales,
})

// 为了实现element插件的多语言切换
locale.i18n((key, value) => i18n.t(key, value))

/**
 * 对外导出方法，方便JS使用功能
 * @param {String} 语言
 * @returns
 */
export const $t = key => i18n.t(key)

/**
 *
 * @param {String} 设置语言
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
