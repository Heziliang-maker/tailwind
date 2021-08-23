<template>
  <div class="flex flex-col items-center justify-start">
    <img alt="Vue logo" src="@/assets/logo.png">
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
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