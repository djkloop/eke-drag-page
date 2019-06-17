import draggable from 'vuedraggable'
import { mapState } from 'vuex'

export default {
  name: 'editor-form-list',
  components: {
    draggable,
  },
  data () {
    return {
      list: [1, 2, 3],
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
      console.log(evt)
    },
  },
  render () {
    return (
      <draggable options={this.draggableOptions} onAdd={this.handleDraggableAdd} value={this.list} class="appic-editor-form-list">
        {/* <div class="appic-editor-form-list-item">
        </div> */}
      </draggable>
    )
  },
}
