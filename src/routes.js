import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import NotFound from "./views/NotFound.vue"
import Sources from './views/Sources.vue';
import Countries from './views/Countries.vue';
import Categories from './views/Categories.vue';
import New from './views/New.vue';


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/:path(.*)",
        name: "Not found",
        component: NotFound
    },
    {
        path: "/sources",
        name: "Sources",
        component: Sources
    },
    {
        path: "/countries",
        name: "Countries",
        component: Countries
    },
    {
        path: "/categories",
        name: "Categories",
        component: Categories
    },
    {
        path: "/new",
        name: "New",
        component: New
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router



