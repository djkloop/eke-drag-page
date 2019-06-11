<template>
  <div class="hello">
    <p>
      用户输入信息 -- {{ replyMessage }}
    </p>
    <p>
      <el-button type="primary" @click="createIpcMessage">厉害了</el-button>
    </p>
  </div>
</template>

<script>
import pkg from '../../package.json'
import { ipcRenderer } from 'electron'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data () {
    return {
      isBtn: false,
      ipcRenderer: ipcRenderer,
      replyMessage: '',
    }
  },
  created () {
    // 用户接受输入回调
    ipcRenderer.on('main-reply', (e, message) => {
      this.showMessage(message)
    })
  },
  methods: {
    createIpcMessage () {
      const { ipcRenderer } = this.$electron
      ipcRenderer.send('async-render', `当前版本信息 ${pkg.version} \r 当前版本信息 ${pkg.version} \r 当前版本信息 ${pkg.version} \r`)
    },
    showMessage (message) {
      this.replyMessage = message
      this.$notify({
        title: '用户输入信息',
        message,
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  padding: 50px;
}
</style>
