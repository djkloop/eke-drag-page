import PropTypes from 'vue-types'
import { fieldTypes } from '@/data'

export default {
  name: 'tag-config',
  data () {
    return {
      fieldTypes: fieldTypes,
    }
  },
  props: {
    selectConfig: PropTypes.object.isRequired,
  },
  render () {
    return <div>tag-config</div>
  },
}
