<template>
  <div class="appic-editor-wrapper">
    编辑区域
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
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
