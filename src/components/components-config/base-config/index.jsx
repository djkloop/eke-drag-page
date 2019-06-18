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
    selectField (apiKey, types) {
      console.log(apiKey, types)
    },
  },
  render () {
    const { selectConfig } = this.$props
    return (
      <div class="base-config">
        {
          selectConfig.hasOwnProperty('fieldTypes')
            ? <ElFormItem label="选择控件">
              <ElSelect v-model={selectConfig.apiKey} onChange={() => this.selectField(selectConfig.apiKey, fieldTypes[selectConfig.fieldTypes])} filterable placeholder="请选择" >
                {
                  fieldTypes[selectConfig.fieldTypes].map(item => {
                    return <ElOption key={item.value} value={item.value} label={item.label} />
                  })
                }
              </ElSelect>
            </ElFormItem>
            : null
        }

      </div>
    )
  },
}
