import Vue from 'vue'
import Utils from '@/utils'
import electron from 'electron'

let CustomPlugin = {}

CustomPlugin.install = Vue => {
  if (Vue) {
    Vue.prototype.$util = Utils
    Vue.prototype.$electron = electron
  }
}
Vue.use(CustomPlugin)

export default CustomPlugin
