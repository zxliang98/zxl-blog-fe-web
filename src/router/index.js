import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Test from '../views/test/Test.vue'
import Pub from './../views/publish/publish.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'pub',
    children: [{
      path: '/pub',
      name: 'pub',
      component: Pub
    }]
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  routes
})

export default router
