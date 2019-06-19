import PropTypes from 'vue-types'
import { getOptionProps } from '@/utils/prop-typs'
export default {
  name: 'wg-input',
  props: {
    item: PropTypes.object.isRequired,
  },
  methods: {

  },
  render () {
    const { value, label, showLabel, ...resetProps } = getOptionProps(this).item
    const isShowLabel = showLabel
    const elInputAttrs = {
      attrs: {
        ...resetProps,
      },
    }
    console.log(label, showLabel)
    return (
      <ElFormItem label={isShowLabel ? label.labelTitle : null}>
        <ElInput v-model={value} {...elInputAttrs } dataItem={JSON.stringify(elInputAttrs)}/>
      </ElFormItem>
    )
  },
}
