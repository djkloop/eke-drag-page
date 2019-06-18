import { mapState } from 'vuex'
import BaseConfig from './base-config'
import TagConfig from './tag-config'
import StyleConfig from './style-config'

export default {
  name: 'components-config',
  data () {
    return {
      activeName: 'field',
      activeCollaspeNames: ['base', 'tag', 'style'],
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
            <ElCollapse v-model={this.activeCollaspeNames}>
              <ElCollapseItem title="基础设置" name="base">
                <BaseConfig selectConfig={ this.selectWg }/>
              </ElCollapseItem>
              <ElCollapseItem title="标签设置" name="tag">
                <TagConfig selectConfig={ this.selectWg } />
              </ElCollapseItem>
              <ElCollapseItem title="外观设置" name="style">
                <StyleConfig selectConfig={ this.selectWg } />
              </ElCollapseItem>
            </ElCollapse>
          </ElForm>
        </ElTabPane>
        <ElTabPane class="appic-config-tab-pane" label="页面属性" name={'page'}>

        </ElTabPane>
      </ElTabs>
    )
  },
}
