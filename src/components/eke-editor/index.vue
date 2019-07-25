<template>
  <el-container class="appic-editor">
    <el-header  class="appic-editor-header">
      编辑器代码区域
    </el-header>
    <el-main class="appic-editor-container">
      <el-card class="box-card">
        <div id="monaco-editor">

        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js'
export default {
  data () {
    return {
      monaco_instance: null,
    }
  },
  mounted () {
    this.monaco_instance = monaco.editor.create(document.querySelector('#monaco-editor'), {
      value: 'console.log("hello world");',
      language: 'javascript',
      theme: 'vs-dark',
    })
    this.monaco_instance.onDidChangeModelContent(this.monacoOnDidChangeModelContent)
  },
  destroyed () {
    this.destroyMonaco()
  },
  methods: {
    monacoOnDidChangeModelContent (event) {
      const newVal = this.monaco_instance.getValue()
      console.log(newVal, event)
    },
    destroyMonaco () {
      if (typeof this.monaco_instance !== 'undefined') {
        this.monaco_instance.dispose()
      }
    },
  },

}
</script>

<style lang="scss" scoped>
.appic-editor {
  &-header {
   height: 45px;
   line-height: 45px;
  }

  &-container {
    box-shadow: 0 0 8px rgba(255, 255, 155, .3);
  }

}
</style>
