<!--
 * @Date: 2021-08-18
 * @Description: 
-->
<template>
  <div class="w-full h-12 bg-red-400 box-border pl-60 pr-60 flex justify-between items-center">
    <div class="w-4/7 h-auto">
      <span class="leading-4"> 🔔 </span>
      <span class="leading-4 font-bold">Summer Arrivals </span>
      <span class="leading-4">| Take advantage of 8 Special Stacks and</span>
      <span class="leading-4 font-bold"> save up to 90% </span>
      <span> 🔔 </span>
    </div>
    <div class="w-1/4 h-auto"></div>
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