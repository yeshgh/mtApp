<template>
    <div class="category">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(item, index) in list" :key="index">
                <a :href="'#city-'+item">{{item}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section" v-for="(val, key) in cityGroup" :key="key" :id="'city-'+key">
            <dt>{{key}}</dt>
            <dd >
                <span v-for="(item, index) in val" 
                :key="index"
                @click="changeCity(item)">{{item.name}}</span> 
            </dd>
        </dl>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data () {
        return {
            list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityGroup: null,
        }
    },
    created () {
        api.getCityList().then(res=>{
            let data = res.data.data;
            let obj = {};
            data.forEach((item, index) => {
                let letter = item.firstChar.toUpperCase();
                if(!obj[letter]) {
                    obj[letter] = [];
                }
                obj[letter].push(item);
            });
            this.cityGroup = obj;
        })
    },
    methods: {
        changeCity(item) {
            this.$store.dispatch('setPosition',item.name);
            this.$router.push({name:'index'});
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/categroy.scss";
</style>