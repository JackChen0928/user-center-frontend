import './assets/main.css'

import { createApp } from 'vue';
//引入权限控制文件
import "./access";

import '@/pages/user/UserLoginPage.vue'
//引入pinia
import { createPinia } from 'pinia'

//引入antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

//引入路由
import router from "@/router/index.ts";

import App from './App.vue';

const pinia = createPinia()

createApp(App).use(Antd).use(pinia).use(router).mount('#app')





