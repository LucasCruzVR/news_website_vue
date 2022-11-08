import VueRouter from "vue-router";
import * as routesName from "./routesName";
import NewsIndex from '../views/news/NewsIndex.vue'
import Vue from "vue";

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/news"
        },
        {
            path: "/news",
            component: NewsIndex,
            name: routesName.NEWS_INDEX,
        },
    ],
    mode: 'history',
})

export default router;