import { mapState } from 'vuex'
import BaseConfig from './base-config'
import TagConfig from './tag-config'
import StyleConfig from './style-config'

export default {
  name: 'components-config',
  data () {
    return {
      activeName: 'field',
    }
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg,
    }),
  },
  render () {
    return (
      <ElTabs stretch v-model={this.activeName}>
        <ElTabPane class="appic-config-tab-pane" label="字段属性" name={'field'}>
          <ElForm label-position="top">
            <BaseConfig selectConfig={ this.selectWg }/>
            <TagConfig selectConfig={ this.selectWg } />
            <StyleConfig selectConfig={ this.selectWg } />
          </ElForm>
        </ElTabPane>
        <ElTabPane class="appic-config-tab-pane" label="页面属性" name={'page'}>

        </ElTabPane>
      </ElTabs>
    )
  },
}
