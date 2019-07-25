import PropTypes from 'vue-types'

export default {
  gutter: PropTypes.number.def(10),
  type: PropTypes.string,
  justify: PropTypes.string.def('start'),
  align: PropTypes.string.def('align'),
  tag: PropTypes.string.def('div'),
}
