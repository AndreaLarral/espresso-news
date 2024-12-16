import { createWebHashHistory, createRouter } from 'vue-router'
import NotFound from './views/NotFound.vue';
import News from './views/News.vue';
import Countries from './views/Countries.vue';
import CountryDetail from './components/CountryDetail.vue';

const routes = [
    {
        path: "/:path(.*)",
        name: "Not found",
        component: NotFound
    },
    {
        path: "/",
        name: "News",
        component: News
    },
    {
        path: "/countries",
        name: "Countries",
        component: Countries
    },
    {
        path: "/news/:country",
        name: "Country detail",
        component: CountryDetail
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router



