<template>
  <div>
    <mavon-editor ref="md" v-model="content" style="min-height: 600px" @change="change" />

    <button @click="submit">提交</button>
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
      change() {
        console.log(this.content)
      },
      submit() {
        console.log(this.content)
      }
    },
    created() {
      if(this.existCont) {
        this.content = this.existCont
      }
    }
  }

</script>

<style>
</style>
