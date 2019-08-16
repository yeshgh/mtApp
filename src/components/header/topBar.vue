<template>
    <el-row class="m-header-topBar m-header">
        <el-col :span="10">
            <geo />
        </el-col>
        <el-col :span="14">
            <my-nav />
        </el-col>
    </el-row>
</template>

<script>
import geo from '@/layout/geo';
import myNav from '@/layout/nav';
export default {
    components: {
        geo,
        myNav
    }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>