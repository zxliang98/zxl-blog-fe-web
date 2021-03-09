<template>
  <div class="article">
    <el-table :data="articleList">
      <el-table-column v-for="item in tableColumn" :key="item.prop" :prop="item.prop" :label="item.label">
      </el-table-column>
      <el-table-column prop="date" label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getArticleList} from '@/http/article'
  export default {
    data() {
      return {
        articleList: [],
        tableColumn: [{
          prop: "title",
          label: "标题"
        }, {
          prop: "content",
          label: "内容"
        }, {
          prop: "date",
          label: "发布时间"
        }, {
          prop: "user",
          label: "发布人"
        }]
      }
    },
    methods: {
      async getArticleList() {
        let params = {}
        let res = await getArticleList(this, params)
        console.log(res);
        this.articleList = res.data
      }
    },
    created() {
      this.getArticleList()
    }
  }

</script>
<style lang="scss" scoped>
  .article {
    width: 80%;
  }

</style>
