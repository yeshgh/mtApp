<template>
  <div class="fav-box">
    <p class="cai">猜你喜欢</p>
    <ul class="fav-item-wrap">
      <li class="fav-item" v-for="item in favList" :key="item.id">
        <div class="fav-item-img">
          <img :src="item.imgUrl" />
        </div>
        <p class="title">{{item.title}}</p>
        <p>
          <el-rate v-model="item.score" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
          <span class="comment">{{item.commentNum}}人评论</span>
        </p>
        <p class="area">{{item.areaName}}</p>
        <p class="lowPrice">￥{{item.lowPrice}}起</p>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      favList: []
    };
  },
  created() {
    api.getFavList().then(res => {
      this.favList = res.data.data.map(item=>{
          item.score = +item.score;
          item.imgUrl = 'https://p1.meituan.net/mogu/37285b3a5acba1c618184e34ecdf0fc9169580.jpg@190w_106h_1e_1c';
          return item;
      });
    });
  }
};
</script>

<style lang="scss">
</style>