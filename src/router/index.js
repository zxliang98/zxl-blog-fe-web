import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/home/Home.vue";
// 发布文章
import Pub from "./../views/publish/Publish.vue";
// 文章管理
import Article from "./../views/article/Article.vue";
// 分类管理
import Catalog from "./../views/catalog/Catalog.vue";
// 个人中心
import Center from "./../views/center/Center.vue";
// 用户管理
import User from "./../views/user/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "publish",
    children: [
      {
        path: "/publish",
        name: "publish",
        component: Pub
      },
      {
        path: "/edit:id",
        name: "edit",
        component: Pub
      },
      {
        path: "/article",
        name: "article",
        component: Article
      },
      {
        path: "/catalog",
        name: "catalog",
        component: Catalog
      },
      {
        path: "/center",
        name: "center",
        component: Center
      },
      {
        path: "/user",
        name: "user",
        component: User
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
