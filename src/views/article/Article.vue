<template>
  <div class="article">
    以下是所有的文章,如需发布文章请点击
    <el-button @click="toOtherPage('pub')" type="primary">发布</el-button>
    .
    <el-divider content-position="left">所有文章</el-divider>
    <el-table :data="articleList">
      <el-table-column prop="title" label="标题">
        <template slot-scope="scope">
          <div class="text">
            {{ scope.row.title }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="content" label="内容">
        <template slot-scope="scope">
          <div class="text">
            {{ scope.row.content }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="pubTime" label="发布时间">
        <template slot-scope="scope">
          {{ new Date(scope.row.pubTime).toLocaleString() }}
        </template>
      </el-table-column>
      <el-table-column prop="pubUser" label="发布人"></el-table-column>
      <el-table-column prop="date" label="操作">
        <template slot-scope="scope">
          <el-button @click="toOtherPage('edit', scope.row)" type="text"
            >查看/编辑</el-button
          >
          <el-button @click="delArticle(scope.row)" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getArticleList } from "@/http/article";
export default {
  data() {
    return {
      articleList: [],
      tableColumn: [
        {
          prop: "title",
          label: "标题"
        },
        {
          prop: "content",
          label: "内容"
        },
        {
          prop: "pubTime",
          label: "发布时间"
        },
        {
          prop: "pubUser",
          label: "发布人"
        }
      ]
    };
  },
  methods: {
    async getArticleList() {
      let params = {};
      let res = await getArticleList(this, params);
      console.log(res);
      this.articleList = res.data;
    },
    delArticle(item) {
      console.log(item);
    },
    toOtherPage(type, data) {
      console.log(type);
      if (type === "pub") {
        this.$router.push({
          name: "publish"
        });
      } else if (type === "edit") {
        this.$router.push({
          name: "edit",
          params: {
            id: data.id
          }
        });
      }
    }
  },
  created() {
    this.getArticleList();
  }
};
</script>
<style lang="scss" scoped>
.article {
  width: 90%;
  .el-button {
    padding: 5px 20px;
  }
  .text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
