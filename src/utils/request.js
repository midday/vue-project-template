import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from './auth'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(
  config => {
    config.headers['X-Token'] = getToken()
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      })
      // Token失效，清理失效Token，跳转到登录页面
      if (res.code === 50012) {
        return Promise.reject(new Error(res.message || 'Error'))
      }
    } else {
      return res
    }
  },
  error => {
    console.log(error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject()
  }
)

export default instance
