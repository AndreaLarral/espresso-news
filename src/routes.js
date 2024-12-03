import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import NotFound from "./views/NotFound.vue"

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
    }
    // Aquí pondrás las siguientes rutas
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router



