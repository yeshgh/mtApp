import axios from '@/axios.js'

var api = {
  getSearchHotWord (params) {
    return axios.get('/header/searchHotWords.json', params)
  },
  getSearchWord () {
    return axios.get('/header/search.json')
  },
  getMenuList () {
    return axios.get('/index/nav.json')
  },
  getResultProducts () {
    return axios.get('/index/resultsByKeywords.json')
  },
  getProductsList () {
    return axios.get('/list/goodList.json')
  },
  getClassifyList () {
    return axios.get('/list/classify.json')
  },
  getAreaList () {
    return axios.get('/list/areaList.json')
  },
  getHotCity () {
    return axios.get('/city/hot.json')
  },
  getRecentCity () {
    return axios.get('/city/recents.json')
  },
  getProvinceList () {
    return axios.get('/city/province.json')
  },
  getCurPosition () {
    return axios.get('/city/getPosition.json')
  },
  getCityList () {
    return axios.get('/city/cityList.json')
  },
  login (params) {
    return axios.get('/login', params)
  },
  register (params) {
    return axios.get('/register', params)
  },
  getFavList () {
    return axios.get('/list/recommend.json')
  }
}

export default api
