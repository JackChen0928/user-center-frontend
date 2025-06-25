import { createWebHistory , createRouter} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import UserLoginPage from "@/pages/user/UserLoginPage.vue";
import UserRegisterPage from "@/pages/user/UserRegisterPage.vue";
import UserManagePage from "@/pages/admin/UserManagePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        //重定向
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "home",
            component: HomePage,

        },
        {
            path: "/user/login",
            name: "userLogin",
            component:UserLoginPage,
        },
        {
            path: "/user/register",
            name: "userRegister",
            component: UserRegisterPage,
        },
        {
            path: "/admin/userManage",
            name: "userManage",
            component: UserManagePage,
        },
    ],
});

//暴露出去
export default router;
