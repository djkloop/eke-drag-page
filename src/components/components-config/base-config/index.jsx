import PropTypes from 'vue-types'
import { fieldTypes } from '@/data'

export default {
  name: 'base-config',
  data () {
    return {
      fieldTypes: fieldTypes,
    }
  },
  props: {
    selectConfig: PropTypes.object.isRequired,
  },
  methods: {
    handleSelectField (apiKey, types) {
      let selectField = types.find(item => apiKey === item.value)
      console.log(selectField, ' xxxxxxx', this.selectConfig)
      if (this.selectConfig.hasOwnProperty('label')) {
        this.selectConfig.label.labelTitle = selectField.label
      }
      if (this.selectConfig.hasOwnProperty('placeholder')) {
        this.selectConfig.placeholder = this.selectConfig.type === 'input' ? `请输入${selectField.label}` : `请选择${selectField.label}`
      }
    },
    handleSwitchChange (bol) {
      console.log(1111111, bol)
    },
    renderSelectFormItem (props, cg) {
      return (
        <ElFormItem label={`${props.label}`}>
          <ElSelect v-model={cg.apiKey} onChange={_ => this.handleSelectField(cg.apiKey, fieldTypes[cg.fieldTypes])} clearable filterable placeholder={cg.placeholder} >
            {
              fieldTypes[cg.fieldTypes].map(item => {
                return <ElOption key={item.value} value={item.value} label={item.label} />
              })
            }
          </ElSelect>
        </ElFormItem>
      )
    },
    renderSwitchFormItem (props, config) {
      return (
        <ElFormItem label={`${props.label}`}>
          <ElSwitch active-value={true} inactive-value={false} v-model={config.showLabel} active-icon-class="el-icon-check" inactive-icon-class="el-icon-close" onChange={val => this[props['func']](val)} ></ElSwitch>
        </ElFormItem>
      )
    },
    renderChild (config) {
      let childs = []
      let props = {}
      // 选择控件属性
      if (config.hasOwnProperty('fieldTypes')) {
        props = {
          label: '选择控件',
        }
        childs.push(this.renderSelectFormItem(props, config))
      }

      // 是否显示标签
      if (config.hasOwnProperty('showLabel')) {
        props = {
          label: '是否显示标签',
          func: 'handleSwitchChange',
        }
        childs.push(this.renderSwitchFormItem(props, config))
      }

      if (config.hasOwnProperty('placeholder')) {
        props = {
          label: '文本内容',
        }
        childs.push(
          <ElFormItem label={props.label}>
            <ElInput v-model={config.placeholder} />
          </ElFormItem>

        )
      }
      return childs
    },
  },
  render () {
    const { selectConfig } = this.$props
    return (
      <div class="base-config">
        {this.renderChild(selectConfig)}
      </div>
    )
  },
}
