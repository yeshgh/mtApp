import axios from 'axios'

axios.defaults.baseURL = ' https://easy-mock.com/mock/5d64e2527d6515224d74e447/mt'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
