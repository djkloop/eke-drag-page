import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import PropTypes from 'vue-types'
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
      console.log(evt, this.pageData[this.list])
      const _idx = evt.newIndex
      const COMPONENTS_ONLY_KEY = evt.timeStamp + '_' + Date.now()
      let cloneDeepObj = this.$util.deepClone(this.pageData[this.list][_idx])
      console.log(this.pageData[this.list], _idx)
      debugger
      cloneDeepObj.key = this.pageData[this.list][_idx].type + '_' + COMPONENTS_ONLY_KEY
      this.$set(this.pageData[this.list], _idx, cloneDeepObj)
      console.log(this)
      this.$store.commit('setSelectWg', this.pageData[this.list][_idx])
      this.$store.commit('setConfigTab', 'widget')
    },
  },

  render () {
    return (
      <draggable options={ this.draggableOptions } onAdd={this.handleDraggableAdd} v-model={this.pageData[this.list]} class="appic-editor-form-list">
        <div class="appic-form-view">
          {
            this.pageData[this.list].map((item, idx) => {
              return <WgInput item={item} key={idx} data-item={JSON.stringify(item)} />
            })
          }
        </div>
      </draggable>
    )
  },
}
