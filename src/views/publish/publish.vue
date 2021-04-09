<template>
  <div class="publish">
    <el-form label-width="80px">
      <el-form-item label="标题:">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="分类:">
        <zxl-catalog @click="handleCatalog"></zxl-catalog>
      </el-form-item>
      <el-form-item label="内容:">
        <!-- <zxl-md :existCont.sync="existCont"></zxl-md> -->
        <mavon-editor ref="md" v-model="existCont" style="min-height: 600px" />
      </el-form-item>
      <el-form-item>
        <el-button @click="pubArticle" type="primary">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 导入组件 及 组件样式
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

// import zxlMd from "./../../components/zxl-md/zxl-md";
import zxlCatalog from "./../../components/zxl-catalog/zxl-catalog";
import { addArticle, getArticle, editArticle } from "@/http/article";
export default {
  data() {
    return {
      existCont: "",
      title: "",
      catalogId: 0
    };
  },
  components: {
    // zxlMd,
    zxlCatalog,
    mavonEditor
  },
  methods: {
    async pubArticle() {
      console.log(this.existCont);
      if (!this.title || !this.catalogId || !this.existCont)
        return this.$notify.error({
          title: "失败",
          message: "完整填写!"
        });
      let params = {
        title: this.title,
        content: this.existCont,
        name: "zxl",
        catalog: this.catalogId
      };
      if (this.$route.name === "edit") {
        params.id = this.$route.params.id;
        await editArticle(this, params);
        this.$notify.success({
          title: "成功",
          message: "修改成功!"
        });
      } else {
        await addArticle(this, params);
        this.$notify.success({
          title: "成功",
          message: "发布成功!"
        });
      }
      this.$router.push({
        name: "article"
      });
    },
    handleCatalog(val) {
      this.catalogId = val[val.length - 1];
    },
    async getArticleDetail(id) {
      console.log(id);
      let { data } = await getArticle(this, { id });
      this.existCont = data.content;
      console.log(data.content);
      console.log(this.existCont);
      this.title = data.title;
      this.catalogId = data.catalogId;
    }
  },
  mounted() {
    if (this.$route.name === "edit") {
      // 编辑
      this.getArticleDetail(this.$route.params.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.publish {
  width: 80%;
}

.el-button {
  margin-top: 20px;
}
</style>
