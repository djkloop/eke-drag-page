<style lang="scss" scoped>
@import "../../assets/css/left-area.scss";

.appic-container-show-area {
  min-width: 400px;
  max-width: 720px;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;

  .btn-bar {
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    border-bottom: solid 2px #e4e7ed;
    text-align: right;
  }

  .el-main {
    padding: 0;
    position: relative;
  }
}
</style>

<template>
  <div class="appic-container-form">
    <el-container style="height:100vh;">
      <Header />
      <el-container>
        <components-list />
        <el-container class="appic-container-show-area">
          <el-header class="btn-bar" style="height: 45px;">
            <el-button type="text" size="medium" icon="el-icon-refresh"  class="mg-r15">重置</el-button>
            <el-button type="text" size="medium" icon="el-icon-view" class="mg-r15">预览</el-button>
            <el-button type="text" size="medium" icon="el-icon-document" class="mg-r15">保存</el-button>
          </el-header>
          <el-main>
            <editor-area />
          </el-main>
        </el-container>
        <el-aside>
          good
        </el-aside>
      </el-container>
      <el-footer>1</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/header'
import ComponentsList from '@/components/components-list'
import EditorArea from '@/components/editor-area'

export default {
  name: 'home',
  components: {
    Header,
    ComponentsList,
    EditorArea,
  },
}
</script>

<style lang="scss" scoped>
  .el-main {
    min-height: calc(100vh - 120px);
    background-color: #E9EEF3;
    color: #333;
  }

  .el-aside,
  .el-main {
    overflow: auto;
  }
</style>
