import Cookies from 'js-cookie'

const BUSINESS_TOTKEN = 'BUSINESS_TOTKEN'

/**
 * 获取Token
 * @returns
 */
export const getToken = () => Cookies.get(BUSINESS_TOTKEN)

/**
 * 设置Token
 * @param {String} token
 * @returns
 */
export const setToken = token => Cookies.set(BUSINESS_TOTKEN, token)

/**
 * 移除Token
 * @returns
 */
export const removeToken = () => Cookies.remove(BUSINESS_TOTKEN)
