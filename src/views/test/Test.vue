<template>
  <div class="test">
    <zxl-md :existCont="existCont"></zxl-md>
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
    }
  }

</script>

<style>

</style>
