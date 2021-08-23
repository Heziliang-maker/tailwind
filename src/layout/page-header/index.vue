<!--
 * @Date: 2021-08-18
 * @Description: 
-->
<template>
  <div></div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
    setup() {
        const state = reactive({});

        return {
            ...toRefs(state)
        };
    }
};
</script>

<style lang="scss" scoped>
</style>