<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
                    <el-button type="success" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item,index) in isHotPlaceList" :key="index">
                            <router-link :to="{name:'goods',params:{name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchPlace">
                        <dd v-for="(item,index) in isSearchPlaceList" :key="index">
                            <router-link :to="{name:'goods',params:{name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <a href="#" v-for="(item,index) in suggestList" :key="index">
                        {{item}}
                    </a>
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/api/index.js'

export default {
    data () {
        return {
            searchWord:'',
            isFocus: false,
            isHotPlaceList: [],
            isSearchPlaceList: [],
            suggestList: []
        }
    },
    created () {
        api.getSearchHotWord().then(res=>{
            this.isHotPlaceList = res.data.data;
            this.suggestList = res.data.data;
        })
    },
    methods: {
        focus () {
            this.isFocus = true;
        },
        blur () {
            setTimeout(() => {
                this.isFocus = false;
            }, 200);
        },
        input () {
            let val = this.searchWord;
            api.getSearchWord().then(res=>{
                this.isSearchPlaceList = res.data.data.list.filter((item)=>{
                    return item.includes(val);
                });
            })
        }
    },
    computed: {
        isHotPlace: function () {
            return this.isFocus && !this.searchWord;
        },
        isSearchPlace: function () {
            return this.isFocus && this.searchWord;
        }
    },
}
</script>
<style lang="scss">
    @import "@/assets/css/public/header/search.scss";
</style>

