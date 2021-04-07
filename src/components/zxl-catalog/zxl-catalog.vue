<template>
  <div class="zxl-catalog">
    <el-cascader
      v-model="value"
      :options="options"
      :props="{ value: 'id' }"
      @change="handleChange"
    ></el-cascader>
  </div>
</template>

<script>
import { getCatalog } from "@/http/catalog";
export default {
  data() {
    return {
      value: [],
      options: []
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
      this.$emit('click', val)
    },
    async getCatalog() {
      let { data } = await getCatalog(this);
      console.log(data);
      this.options = data;
    }
  },
  created() {
    this.getCatalog();
  }
};
</script>

<style lang="scss" scoped>
.zxl-catalog {
  .el-cascader {
    width: 100%;
  }
}
</style>
