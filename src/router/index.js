import Vue from 'vue'
import VueRouter from 'vue-router'
import Card from '../components/Card.vue';
import Home from '../components/Home.vue';
Vue.use(VueRouter)

  const routes = [
    {path:"/:id",component:Card},
    {path:"/",component:Home},

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
