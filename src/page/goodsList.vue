<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs/>
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <category/>
                </el-row>
                <el-row>
                    <list/>
                </el-row>
            </el-col>
            <el-col :span="5" class="fav-wrap">
                <el-row class="map">
                    <img src="@/assets/img/map.jpg" alt="">
                </el-row>
                <el-row>
                    <fav/>
                </el-row>
            </el-col>

        </el-row>
    </div>
</template>

<script>
import crumbs from "@/components/products/crumbs"
import category from "@/components/products/category"
import list from "@/components/products/list"
import fav from "@/components/products/fav"
export default {
    components: {
        crumbs,
        category,
        list,
        fav
    }
}
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>