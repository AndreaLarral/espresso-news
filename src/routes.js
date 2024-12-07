import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue'; // Corrected the import statement
import Sources from './views/Sources.vue';
import News from './views/News.vue';
import Categories from './views/Categories.vue';
import New from './views/New.vue';
import Countries from './views/Countries.vue';

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
        path: "/news",
        name: "News",
        component: News
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
    {
        path: "/countries",
        name: "Countries",
        component: Countries
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router



