<style lang="scss" scoped>
@import "../../assets/css/show-area.scss";
</style>

<template>
  <div class="appic-editor-wrapper">
    <div class="appic-editor-conatiner">
      <editor-form-list list="list" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EditorFormList from './editor-form-list'

export default {
  components: {
    EditorFormList,
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg,
      pageData: state => state.common.pageData,
    }),
  },
}
</script>

<style>

</style>
