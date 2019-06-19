import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import PropTypes from 'vue-types'
import classnames from 'classnames'
import WgInput from './wg-input'

export default {
  name: 'editor-form-list',
  props: {
    list: PropTypes.string,
  },
  components: {
    draggable,
    WgInput,
  },
  data () {
    return {
      draggableOptions: { group: 'widget', ghostClass: 'ghost', swapThreshold: 0.5, animation: 100 },
    }
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg,
      pageData: state => state.common.pageData,
    }),
  },
  methods: {
    handleDraggableAdd (evt) {
      const _idx = evt.newIndex
      const COMPONENTS_ONLY_KEY = evt.timeStamp + '_' + Date.now()
      let cloneDeepObj = this.$util.deepClone(this.pageData[this.list][_idx])
      cloneDeepObj.key = this.pageData[this.list][_idx].type + '_' + COMPONENTS_ONLY_KEY
      this.$set(this.pageData[this.list], _idx, cloneDeepObj)
      this.$store.commit('setSelectWg', this.pageData[this.list][_idx])
      this.$store.commit('setConfigTab', 'widget')
    },
    handleSelectWidget (idx) {
      this.$notify({
        title: `当前页面选中的第 - ${idx}个组件`,
        message: '右下角厉害了...',
        position: 'bottom-right',
      })
      this.$store.commit('setSelectWg', this.pageData[this.list][idx])
    },
    handleWidgetDelete (idx, e) {
      e.stopPropagation()
      const hasEle = this.pageData[this.list][idx] !== void 0
      if (hasEle) {
        this.pageData[this.list].splice(idx, 1)
        if (this.pageData[this.list].length > 0) {
          if (idx === 0) {
            this.handleSelectWidget(idx)
          } else {
            this.handleSelectWidget(--idx)
          }
        }
      }
    },
    handleWidgetCopy (idx, e) {
      e.stopPropagation()
      const hasEle = this.pageData[this.list][idx] !== void 0
      if (hasEle) {
        const cloneEle = this.$util.deepClone(this.pageData[this.list][idx])
        const COMPONENTS_ONLY_KEY = Math.ceil(Math.random() * 1000000) + '_' + Date.now()
        cloneEle.key = this.pageData[this.list][idx].type + '_' + COMPONENTS_ONLY_KEY
        this.pageData[this.list].splice(idx, 0, cloneEle)
        this.$store.commit('setSelectWg', this.pageData[this.list][idx + 1])
      }
    },
  },
  render () {
    return (
      <ElForm>
        <draggable options={ this.draggableOptions } onAdd={this.handleDraggableAdd} v-model={this.pageData[this.list]} class="appic-editor-form-list">
          {
            this.pageData[this.list].map((item, idx) => {
              return (
                <div class={classnames('appic-form-view', { active: this.selectWg.key === item.key })} onClick={() => this.handleSelectWidget(idx)}>
                  <WgInput item={item} key={idx} data-item={JSON.stringify(item)} />
                  {
                    this.selectWg.key === item.key
                      ? <Fragment>
                        <ElButton class="widget-action-copy" circle plain type="primary" title="复制" onClick={(e) => this.handleWidgetCopy(idx, e)}>复制</ElButton>
                        <ElButton class="widget-action-delete" circle plain type="danger" title="删除" onClick={(e) => this.handleWidgetDelete(idx, e)}>删除</ElButton>
                      </Fragment>
                      : null
                  }
                </div>
              )
            })
          }
        </draggable>
      </ElForm>
    )
  },
}
