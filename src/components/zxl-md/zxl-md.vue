<template>
  <div>
    <mavon-editor ref="md" v-model="content" style="min-height: 600px" @input="input" />

  </div>
</template>

<script>
  // 导入组件 及 组件样式
  import {
    mavonEditor
  } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    components: {
      mavonEditor
    },
    data() {
      return {
        content: ''
      }
    },
    props: {
      existCont: {
        type: String,
        default () {
          return ''
        }
      }
    },
    methods: {
      input() {
        this.$emit('update:existCont', this.content)
      },
    },
    created() {
      if (this.existCont) {
        this.content = this.existCont
      }
    }
  }

</script>

<style>
</style>
