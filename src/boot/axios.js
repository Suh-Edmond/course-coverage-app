import Vue from 'vue'
import axios_ from 'axios'
import { LocalStorage } from 'quasar'
import { store } from '../store'
import { router } from '../router'



const axios = axios_.create({
  withCredentials: true
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return Promise.resolve(response);
}, function (error) {
    console.log(error )
  if(error.response.status == 401 && error.response.statusText == 'Unauthorized'){
    LocalStorage.remove('authenticated')
    store.dispatch('setAuthStatus', false) //logout the user
    router.push({
      name: 'login'
    }, () => { })
  }
//   Any status codes that falls outside the range of 2xx cause this function to trigger
//   Do something with response error
  return Promise.reject(error);
});

axios.interceptors.request.use(function (config) {
  console.log('hello world')
    config.headers.common['Authorization'] =  'Bearer ' + store.state.modules.app.token

    return config;
});

Vue.prototype.$axios = axios

export { axios }
