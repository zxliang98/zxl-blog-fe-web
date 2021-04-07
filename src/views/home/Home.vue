<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          @select="handleSelect"
          default-active="pub"
          class="el-menu-vertical-demo"
        >
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>发布</span>
            </template>
            <el-menu-item index="1-1">文章</el-menu-item>
            <el-menu-item index="1-2">其他</el-menu-item>
          </el-submenu> -->
          <el-menu-item index="publish">
            <i class="el-icon-printer"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="article">
            <i class="el-icon-printer"></i>
            <span slot="title">文章管理</span>
          </el-menu-item>
          <el-menu-item index="catalog">
            <i class="el-icon-printer"></i>
            <span slot="title">分类管理</span>
          </el-menu-item>
          <el-menu-item index="center">
            <i class="el-icon-thumb"></i>
            <span slot="title">个人中心</span>
          </el-menu-item>
          <el-menu-item index="user">
            <i class="el-icon-thumb"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>MY BLOG</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      lastRoute: ""
    };
  },
  methods: {
    handleSelect(m) {
      console.log(m);
      if (m === this.lastRoute) return;

      this.lastRoute = m;
      this.$router.push({
        name: m
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  min-height: 100vh;
}

.el-header {
  line-height: 60px;
  border-bottom: 1px solid #e6e6e6;
}
</style>
