<template>
  <div class="publish">
    <zxl-md :existCont.sync="existCont"></zxl-md>
    <el-button @click="pubArticle" type="primary">发布</el-button>
  </div>
</template>

<script>
  import zxlMd from './../../components/zxl-md/zxl-md'
  export default {
    data() {
      return {
        existCont: ''
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
.el-button {
  margin-top: 20px;
}
</style>
