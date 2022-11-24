import VueRouter from "vue-router";
import * as routesName from "./routesName";
import NewsIndex from '../views/news/NewsIndex.vue';
import Vue from "vue";
import NewsCreate from "@/views/news/NewsCreate.vue";

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: "/news",
            component: NewsIndex,
            name: routesName.NEWS_INDEX,
        },
        {
            path: "/news/create",
            component: NewsCreate,
            name: routesName.NEWS_CREATE
        }
    ],
    mode: 'history',
})

export default router;