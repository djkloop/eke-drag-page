<template>
  <div class="appic-container-form">
    <el-container>
      <Header />
      <el-container>
        <components-list />
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Header</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/header'
import ComponentsList from '@/components/components-list'

export default {
  name: 'home',
  components: {
    Header,
    ComponentsList,
  },
}
</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #24292e;
    color: hsla(0,0%,100%,.7);
    z-index: 32;
  }

  .el-main {
    min-height: calc(100vh - 120px);
    background-color: #E9EEF3;
    color: #333;
  }
</style>
