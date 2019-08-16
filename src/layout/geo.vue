<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location"/>
            {{$store.state.position}}
            <router-link class="changeCity" :to="{name: 'changeCity'}">
                切换城市
            </router-link>
            [
                <a href="#" v-for="item in nearCity" :key="item.id">
                    {{item.name}}
                </a>
            ]
        </div>
        <div v-if="!$store.state.userName" class="m-user">
            <router-link class="login" :to="{name: 'login'}">
                立即登录
            </router-link>
            <router-link class="register" :to="{name: 'register'}">
                注册
            </router-link>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data () {
        return {
            nearCity: []
        }
    },
    created () {
        api.getCurPosition().then(res=>{
            let city = res.data.data;
            this.$store.dispatch('setPosition', city.name);
            this.nearCity = city.nearCity;
        })
    },
    watch: {
        "$store.state.position": function () {
            // this.nearCity = $store.state.xxx;
        }
    }
}
</script>

<style lang="scss">

</style>