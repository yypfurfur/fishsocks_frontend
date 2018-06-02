// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://192.168.1.17/api/'

axios.interceptors.request.use(
  config => {
    // config.data = JSON.stringify(config.data)
    if (!(config.data instanceof Array) && config.data instanceof Object) {
      let params = ''
      Object.keys(config.data).forEach(function (key) {
        params += ((params !== '' ? '&' : '') + (key + '=' + config.data[key]))
      })
      config.data = params
    }
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMTdcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1Mjc2MTA0NzUsImV4cCI6MTUyNzYxNDA3NSwibmJmIjoxNTI3NjEwNDc1LCJqdGkiOiJxTDNTTUxHNFFUcnkxVEVrIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.z_5ylPk1EaP4NgEmeLbYB8nT0BihJNh6MP-dA3K2KDk'
    }
    return config
  }
)

Vue.config.productionTip = false

Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
