<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in classicLlist" :key="item.type">
        <my-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item) in areaList" :key="item.type">
        <my-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
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
      classicLlist: [],
      areaList: []
    };
  },
  created () {
    api.getClassifyList().then(res=>{
      this.classicLlist = res.data.data;
    });
    api.getAreaList().then(res=>{
      this.areaList = res.data.data;
    });
  }
};
</script>