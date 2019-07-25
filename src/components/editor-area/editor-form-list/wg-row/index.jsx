import PropTypes from 'vue-types'
import { getOptionProps } from '@/utils/prop-typs'
import RowProps from './rowProps'
export default {
  name: 'wg-row',
  props: {
    item: PropTypes.object.isRequired,
    ...RowProps,
  },
  methods: {

  },
  render () {
    const { value, label, showLabel, ...resetProps } = getOptionProps(this).item
    console.log(this.item)
    const isShowLabel = showLabel
    const elInputAttrs = {
      attrs: {
        ...resetProps,
      },
    }
    console.log(label, showLabel)
    return (
      <ElFormItem label={isShowLabel ? label.labelTitle : null}>
        <ElRow {...elInputAttrs } dataItem={JSON.stringify(elInputAttrs)} >123</ElRow>
      </ElFormItem>
    )
  },
}
