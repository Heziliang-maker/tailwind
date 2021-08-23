<!--
 * @Date: 2021-08-18
 * @Description: 
-->
 <!-- layout -->
<template>
  <!-- 头部 -->
  <PageHeader />
  <!-- 主体内容 -->
  <router-view></router-view>
  <!-- 底部 -->
</template>

<script>
import PageHeader from "./page-header";
import { reactive, toRefs } from "vue";

export default {
    components: {
        PageHeader
    },
    setup() {
        const state = reactive({
            count: 0
        });

        return {
            ...toRefs(state)
        };
    }
};
</script>

<style lang="scss" scoped>
</style>