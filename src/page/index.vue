<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <my-menu/>
            </el-col>
            <el-col :span="19">
                <my-life/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :nav="iStyle"/>
                <container :nav="recomment"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import myMenu from '@/components/index/menu'
import myLife from '@/components/index/life'
import container from '@/components/index/container'

export default {
    components: {
        myMenu,
        myLife,
        container
    },
    data () {
        return {
            iStyle: {
                title: '有格调',
                class: 'istyle',
                list: [{
                        text: '约会聚餐',
                        tab: 'food'
                    },{
                        text: '丽人SPA',
                        tab: 'spa'
                    },{
                        text: '电影演出',
                        tab: 'movie'
                    },{
                        text: '品质出游',
                        tab: 'travel'
                    }
                ]
            },
            recomment: {
                title: '优惠',
                class: 'youhui',
                list: [
                    {
                        text: '全部',
                        tab: 'all'
                    },{
                        text: '美食',
                        tab: 'food'
                    },{
                        text: '休闲',
                        tab: 'xiuxian'
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/index/index.scss";
</style>