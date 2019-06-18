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
    const { value, label, ...resetProps } = getOptionProps(this).item
    const elInputAttrs = {
      attrs: {
        ...resetProps,
      },
    }
    return <ElInput v-model={value} {...elInputAttrs } dataItem={JSON.stringify(elInputAttrs)}/>
  },
}
