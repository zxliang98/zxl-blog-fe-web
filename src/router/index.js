import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Test from '../views/test/Test.vue'
import Pub from './../views/publish/Publish.vue'
import Center from './../views/center/Center.vue'
import Article from './../views/article/Article.vue'
import User from './../views/user/User.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'publish',
    children: [{
      path: '/publish',
      name: 'publish',
      component: Pub
    }, {
      path: '/center',
      name: 'center',
      component: Center
    }, {
      path: '/article',
      name: 'article',
      component: Article
    }, {
      path: '/user',
      name: 'user',
      component: User
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
