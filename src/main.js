import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'

createApp(App).use(router).mount('#app')
const app = create(App)
app.use(router)
app.mount('#app')