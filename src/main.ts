import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Ice from './components/Ice.vue'
import Ice2 from './components/Ice2.vue'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Ice },
    { path: '/ice', component: Ice2 }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
