<style lang="scss">
@import '@/assets/css/left-area.scss';
</style>

<template>
  <el-aside class="appic-aside" :style="{ minWidth: '300px', width: '20vw' }">
    <div class="appic-components-list">
      <div class="appic-component-item">
        <div class="appic-component-title">基础类组件</div>
          <draggable
            tag="ul"
            :list="basicComponents"
            v-bind="draggableOptions.basicOptions"
          >
          <li class="appic-component-label" v-for="(item, index) in basicComponents" :key="index">
            <a>{{item.name}}</a>
          </li>
        </draggable>
      </div>
      <div class="appic-component-item">
        <div class="appic-component-title">表单类组件</div>
        <draggable
          tag="ul"
          :list="imgComponents"
          v-bind="draggableOptions.imgOptions"
        >
          <li class="appic-component-label" v-for="(item, index) in imgComponents" :key="index">
            <a>{{item.name}}</a>
          </li>
        </draggable>
      </div>
      <div class="appic-component-item">
        <div class="appic-component-title">数据类组件</div>
        <draggable
          tag="ul"
          :list="assistComponents"
          v-bind="draggableOptions.assistOptions"
        >
          <li class="appic-component-label" v-for="(item, index) in assistComponents" :key="index">
            <a>{{item.name}}</a>
          </li>
        </draggable>
      </div>
    </div>
  </el-aside>
</template>

<script>
import Draggable from 'vuedraggable'
import { mapState } from 'vuex'
import { registerComponents as allWidget, registerConfig } from '../../data'

export default {
  components: {
    Draggable,
  },
  data () {
    return {
      basicComponents: allWidget.basicComponents,
      imgComponents: allWidget.imgComponents,
      assistComponents: allWidget.assistComponents,
      draggableOptions: {
        basicOptions: { group: { name: 'widget', pull: 'clone', put: false }, sort: false, ghostClass: 'ghost' },
        imgOptions: { group: { name: 'widget', pull: 'clone', put: false }, sort: false, ghostClass: 'ghost' },
        assistOptions: { group: { name: 'widget', pull: 'clone', put: false }, sort: false, ghostClass: 'ghost' },
      },
    }
  },
  computed: {
    ...mapState(
      {
        pageData: state => state.common.pageData,
        configTab: state => state.common.configTab,
      }
    ),
  },
  created () {
    let pageData = this.$util.getLStorage('pageData')
    if (pageData) {
      this.$store.commit('setPageData', pageData)
      if (pageData.config.theme) this.$store.commit('setSelectTheme', pageData.config.theme.value)
    } else {
      this.pageData.config = { ...registerConfig.pageConfig }
    }
  },
  mounted () {
    this.$nextTick(function () {
      // 防止火狐浏览器拖拽的时候以新标签打开
      document.body.ondrop = function (event) {
        event.preventDefault()
        event.stopPropagation()
      }
    })
  },
}
</script>
