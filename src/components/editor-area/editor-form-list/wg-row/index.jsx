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
    const props = getOptionProps(this).item
    const { originProps } = props
    const elRowProps = {
      attrs: {
      },
      props: {
        ...originProps,
      },
    }
    return (
      <ElRow {...elRowProps} dataItem={JSON.stringify(elRowProps)} >
        <ElCol span={6}>
          <div>11111111</div>
        </ElCol>
        <ElCol span={6}>
          <div>11111111</div>
        </ElCol>
        <ElCol span={6}>
          <div>11111111</div>
        </ElCol>
        <ElCol span={6}>
          <div>11111111</div>
        </ElCol>
      </ElRow>
    )
  },
}
