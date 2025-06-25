<script setup lang="ts">
import BasicLayout from './layouts/BasicLayout.vue';
import {useLoginUserStore} from "@/store/user.ts";
import GlobalHeader from "@/components/GlobalHeader.vue";

const loginUserStore = useLoginUserStore();
loginUserStore.fetchLoginUser();


</script>

<template>
<div id="app">
  <BasicLayout/>
</div>

</template>

<style scoped>
#app {


}
</style>
