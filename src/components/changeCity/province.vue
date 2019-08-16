<template>
  <div>
    <span class="name">按省份选择：</span>
    <my-select
      :list="provinceList"
      title="省份"
      :value="provice"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <my-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />
    <span>点击搜索</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="(item,index) in searchList" :key="index" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import mySelect from "./select"
import api from '@/api/index.js'

export default {
  components: {
    mySelect
  },
  data() {
    return {
        provinceList: [],
        provice: '省份',
        cityList: [],
        city: '城市',
        provinceActive: false,
        cityActive: false,
        searchList: ['云南','海南','浙江','上海','天津','陕西'],
        searchWord: '',
        loading: false,
        cityDisabled: true
    };
  },
  created () {
    api.getProvinceList().then(res=>{
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    })
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      flag && (this.cityActive = false);
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      flag && (this.provinceActive = false);
    },
    remoteMethod (val) {
        // 请求后端接口
    },
    changeProvince (provice) {
      this.provice = provice.name;
      this.cityDisabled = false;
      this.cityList = provice.cityInfoList;
    },
    changeCity (city) {
      this.city = city.name;
      this.$store.dispatch('setPosition', city.name);
      this.$router.push({name: 'index'});
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
</style>