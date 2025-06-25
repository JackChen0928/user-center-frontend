<template>
  <a-row :wrap="false">
    <a-col flex="200px">
  <div class="title-bar">
    <img class="logo" src="@/assets/logo.jpg" alt="logo"/>
    <div class="title">用户中心</div>
  </div>
    </a-col>

    <a-col flex="auto">
      <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClick"
      />
    </a-col>
    <a-col flex="80px">
      <div class="user-login-status">
        <a-button type="primary" href="/user/login">登录</a-button>
      </div>
    </a-col>
  </a-row>
</template>


<script lang="ts" setup>
import { h, ref } from 'vue';
import {  HomeOutlined,CrownOutlined } from '@ant-design/icons-vue';
import { MenuProps } from 'ant-design-vue';

import { useRoute, useRouter } from "vue-router";
const router = useRouter();

const current = ref<string[]>(['/home']);
const items = ref<MenuProps['items']>([
  {
    key: '/home',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/user/login',
    label: '登录',
    title: '登录',
  },
  {
    key: '/user/register',
    label: '注册',
    title: '注册',
  },
  {
    key: '/admin/userManage',
    icon: () => h(CrownOutlined),
    label: '用户管理',
    title: '用户管理',
  },
]);
// 路由跳转事件
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};


</script>

<style scoped>

.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>

