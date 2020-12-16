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
    }
  }

</script>
<style lang="scss" scoped>
  .article {}

</style>
