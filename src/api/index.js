import axios from '@/axios.js'

var api = {
    getSearchHotWord(params) {
        return axios.get('/api/meituan/header/searchHotWords.json',params);
    },
    getSearchWord() {
        return axios.get('/api/meituan/header/search.json');
    },
    getMenuList() {
        return axios.get('/api/meituan/index/nav.json');
    },
    getResultProducts() {
        return axios.get('/api/meituan/index/resultsByKeywords.json');
    },
    getProductsList() {
        return axios.get('/api/meituan/list/goodsList.json');
    },
    getClassifyList() {
        return axios.get('/api/meituan/list/classify.json');
    },
    getAreaList() {
        return axios.get('/api/meituan/list/areaList.json');
    },
    getHotCity() {
        return axios.get('/api/meituan/city/hot.json');
    },
    getRecentCity() {
        return axios.get('/api/meituan/city/recents.json');
    },
    getProvinceList() {
        return axios.get('/api/meituan/city/province.json');
    },
    getCurPosition() {
        return axios.get('/api/meituan/city/getPosition.json');
    },
    getCityList() {
        return axios.get('/api/meituan/city/cityList.json');
    },
    login(params) {
        return axios.get('/api/meituan/login',params);
    },
    register(params) {
        return axios.get('/api/meituan/register',params);
    },
    getFavList() {
        return axios.get('/api/meituan/list/recommend.json');
    }

}

export default api;