<template>
    <div class="choose-wrap">
        <div :class="['choose', disabled?'disabled':'']" @click="showWrapper" v-document-click="documentClick">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{'mt-content': true, active: showWrapperActive}">
                <h2>{{title}}</h2>
                <div :class="['wrapper', className]">
                    <div class="col" v-for="(listData,index) in renderList" :key="index">
                        <span v-for="(item,index) in listData" 
                        :key="index" @click="changeValue(item)"
                        :class="{'mt-item':true, active: item.name == value}">
                            {{item.name}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['list','title','value','showWrapperActive','disabled','className'],
    methods: {
        showWrapper (e) {
            e.stopPropagation();
            if(!this.disabled) {
                this.$emit('change_active', true);
            }
        },
        documentClick () {
            this.$emit('change_active', false);
        },
        changeValue (city) {
            this.$emit('change', city);
        }
    },
    computed: {
        renderList () {
            let col = Math.ceil( this.list.length / 12 );
            let resultList = [];
            for(let i = 0; i < col; i++) {
                let data = this.list.slice(i*12, i*12+12);
                resultList.push(data);
            }
            return resultList;
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/select.scss";
</style>