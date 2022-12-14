import VueRouter from "vue-router";
import * as routesName from "./routesName";
import NewsIndex from '../views/news/NewsIndex.vue';
import Vue from "vue";
import NewsCreate from "@/views/news/NewsCreate.vue";
import NewsShow from '@/views/news/NewsShow';
import CategoriesIndex from '@/views/categories/CategoriesIndex';

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
        },
        {
            path: "/news/show/:id",
            component: NewsShow,
            name: routesName.NEWS_SHOW
        },
        {
            path: "/news/categories",
            component: CategoriesIndex,
            name: routesName.CATEGORIES_INDEX
        }
    ],
    mode: 'history',
})

export default router;