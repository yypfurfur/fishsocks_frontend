import axios from 'axios'
import qs from 'qs'
import router from '../router'
import { Indicator } from 'mint-ui'

require('es6-promise').polyfill()
// export const _this = this
export const Axios = axios.create({
  baseURL: 'http://192.168.1.17/api/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

// 请求拦截器
Axios.interceptors.request.use(
  config => {
    Indicator.open()
    // config.data = JSON.stringify(config.data)
    // console.log(config)
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }

    if (config.url.indexOf('auth/login') === -1 && config.url.indexOf('auth/register') === -1 && localStorage.token) {
      config.headers.Authorization = localStorage.token
    }
    return config
  }, error => {
    console.log('ERROR!')
    return Promise.reject(error)
  }
)

// 响应拦截器
Axios.interceptors.response.use(
  response => {
    // if (!response.data.success) {
    //   console.log(response.error_msg)
    //   return Promise.reject(response)
    // }
    Indicator.close() 
    return response.data
  }, error => {
    Indicator.close()
    let status = error.response.status
    if (status === 401) {
      router.push({ path: 'login' })
    }

    return Promise.reject(error.response.data)
  }
)

export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, 'axios', { value: Axios })
  }
}
