<script setup lang="ts">

import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<template>
 <div id="basicLayout">
  <a-layout style="min-height: 100vh;">
    <a-layout-header class="header">
      <GlobalHeader/>
    </a-layout-header>
    <a-layout-content class="content">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="footer">作者：陈卓杰 qq：2499202708</a-layout-footer>
  </a-layout>
 </div>
</template>

<style scoped>
html,
body {
  height: 100%; /* ✅ 确保布局高度继承 */
  margin: 0;
  padding: 0;
}
#basicLayout {
}

#basicLayout .ant-layout {
  display: flex;
  flex-direction: column;
}

#basicLayout .ant-layout-content {
  flex: 1;
  padding: 20px;
  margin-bottom: 28px; /* 可选，避免与 footer 重叠 */
}
#basicLayout .footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  background: #efefef;
  text-align: center;
  padding: 16px;
  height: 3em; /* 48px / 16px = 3em */
}

 #basicLayout .content {
   flex: 1;
   padding: 20px;
   margin-top: 36px;
   background: linear-gradient(to right, #fefefe, #fff);
   display: flex;
   white-space: nowrap; /* 防止文字换行 */
   flex-direction: column;
   justify-content: flex-start; /* 水平靠左对齐 */
   overflow-y: auto; /* ✅ 允许垂直滚动 */
   height: calc(100vh - 3.75em - 3em); /* ✅ 动态计算高度 */
 }
#basicLayout .header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  padding-inline: 20px;
  background: white;
  text-align: center;
  height: 3.75em; /* 60px / 16px = 3.75em */
  line-height: 3.75em;
}

</style>