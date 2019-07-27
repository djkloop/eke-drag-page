import Draggable from 'vuedraggable'
import { mapState } from 'vuex'
import NestedProps from './nested-draggable-props'
import './nested-draggable.scss'

export default {
  name: 'nested-draggable',
  props: {
    ...NestedProps,
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg,
      pageData: state => state.common.pageData,
    }),
  },
  data () {
    return {
      typeKey: [],
      draggableOptions: { group: 'widget', ghostClass: 'ghost', swapThreshold: 0.5, animation: 100 },
    }
  },
  methods: {
    handleWgFormItemAdd (evt) {
      console.log(evt, ' 还会触发嘛')
      const _idx = evt.newIndex
      // 组件唯一值(非常有用)
      const COMPONENTS_ONLY_KEY = evt.timeStamp + '_' + Date.now()
      console.log(this.pageData)
      let cloneDeepObj = this.$util.deepClone(this.pageData[this.listType][_idx])
      cloneDeepObj.key = this.pageData[this.listType][_idx].type + '_' + COMPONENTS_ONLY_KEY
      cloneDeepObj.uniqueId = this.$util.uniqueId()
      this.typeKey.push(cloneDeepObj.key)
      console.log(this.typeKey)
      cloneDeepObj.tasks = []
      console.log(cloneDeepObj)
      this.$set(this.pageData[this.listType], _idx, cloneDeepObj)
      this.$store.commit('setSelectWg', this.pageData[this.listType][_idx])
      this.$store.commit('setConfigTab', 'widget')
    },
    handleWgFormItemOnEnd (evt) {
      console.log(evt, ' end')
    },
    handleWgFormItemChange (evt) {
      console.log(evt, ' change')
    },
    renderChild (list) {
      return (
        <Draggable
          tag="ul"
          list={list}
          group={{ name: 'widget' }}
          ghostClass="ghost"
          class="dragArea"
          onEnd={this.handleWgFormItemOnEnd}
          onChange={this.handleWgFormItemChange}
        >
          {
            list.length > 0 ? list.map((item, idx) => {
              return (
                item.tasks ? (
                  <li key={item.name + idx}>
                    <p>{ item.name }</p>
                    { this.renderChild(item.tasks) }
                  </li>
                )
                  : (
                    <li key={item.name + idx}>
                      <p>{ item.name }</p>
                    </li>
                  )
              )
            })
              : <Fragment />
          }
        </Draggable>)
    },
  },
  render () {
    return (
      <Draggable
        tag="ul"
        list={this.tasks}
        group={{ name: 'widget' }}
        ghostClass="ghost"
        class="dragArea"
      >
        {
          this.renderChild(this.tasks)
        }
      </Draggable>
    )
  },
}
