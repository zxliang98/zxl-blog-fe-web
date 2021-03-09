<template>
  <div class="user">
    <el-table :data="userList">
      <el-table-column v-for="item in tableColumn" :key="item.prop" :prop="item.prop" :label="item.label">
      </el-table-column>
      <el-table-column v-if="true" label="密码"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableColumn: [{
          prop: "name",
          label: "用户名"
        }, {
          prop: "mobile",
          label: "手机号"
        }],
        userList: []
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
