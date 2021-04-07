<template>
  <div class="catalog">
    <el-divider content-position="left">所有分类如下:</el-divider>
    <zxl-catalog :key="catalogKey" @click="handleClick"></zxl-catalog>
    <el-divider content-position="left">添加分类</el-divider>
    如需添加分类,直接在上方选择父级分类,之后在下面填写子级分类,最后点击
    <el-button @click="handleCatalog('add')" type="primary">添加</el-button>
    即可.
    <el-input v-model="catalogName"></el-input>
    <el-divider content-position="left">删除分类</el-divider>
    如需删除分类,直接在上方选择要删除的分类,之后点击
    <el-popconfirm @confirm="handleCatalog('del')" title="你确定要删除吗？">
      <el-button slot="reference" type="primary">删除</el-button>
    </el-popconfirm>
    即可.
  </div>
</template>

<script>
import zxlCatalog from "@/components/zxl-catalog/zxl-catalog";
import { addCatalog, delCatalog } from "@/http/catalog";
export default {
  data() {
    return {
      catalogList: [],
      catalogName: "",
      catalogKey: 0
    };
  },
  components: {
    zxlCatalog
  },
  methods: {
    handleCatalog(type) {
      let params;
      if (type === "add") {
        // 添加分类
        if (!this.catalogName) {
          return this.$notify.error({
            title: "错误",
            message: "请输入子级分类名称!"
          });
        } else if (!this.catalogList.length) {
          return this.$notify.error({
            title: "错误",
            message: "请选择父级分类名称!"
          });
        }
        params = {
          catalog_name: this.catalogName,
          parent_id: this.catalogList[this.catalogList.length - 1],
          ancestors: this.catalogList.join()
        };
        addCatalog(this, params).then(res => {
          console.log(res);
          this.$notify.success({
            title: "成功",
            message: "添加分类成功!"
          });
          this.catalogKey = Date.now();
        });
      } else if (type === "del") {
        // 删除分类
        if (!this.catalogList.length) {
          return this.$notify.error({
            title: "错误",
            message: "请选择要删除的分类名称!"
          });
        }
        params = {
          id: this.catalogList[this.catalogList.length - 1]
        };
        delCatalog(this, params).then(res => {
          console.log(res);
          this.$notify.success({
            title: "成功",
            message: "删除分类成功!"
          });
          this.catalogKey = Date.now();
        });
      }
    },
    handleClick(val) {
      this.catalogList = [0, ...val];
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.catalog {
  .el-button {
    padding: 5px 20px;
  }
  .el-input {
    margin: 10px 0;
  }
}
</style>
