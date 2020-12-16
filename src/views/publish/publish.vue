<template>
  <div class="publish">
    <el-form label-width="80px">
      <el-form-item label="标题:">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="内容:">
        <zxl-md :existCont.sync="existCont"></zxl-md>
      </el-form-item>
      <el-form-item>
        <el-button @click="pubArticle" type="primary">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import zxlMd from './../../components/zxl-md/zxl-md'
  export default {
    data() {
      return {
        existCont: '',
        title: ''
      }
    },
    components: {
      zxlMd
    },
    methods: {
      pubArticle() {
        console.log(this.existCont);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .publish {
    width: 80%;
  }

  .el-button {
    margin-top: 20px;
  }

</style>
