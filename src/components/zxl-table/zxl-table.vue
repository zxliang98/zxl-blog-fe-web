<template>
  <el-table :data="articleList">
    <template v-for="item in tableColumn">
      <el-table-column
        v-if="item.type === 'scope'"
        :key="item.prop"
        :label="item.lable"
      ></el-table-column>
      <el-table-column
        v-else
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      >
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  props: {
    tableColumn: {
      type: Array,
      default() {
        return [];
      }
    },
    articleList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style></style>
