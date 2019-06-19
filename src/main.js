import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/plugins/element'
import '@/plugins/elec-plugins'
import '@/assets/css/base.scss'
import './registerServiceWorker'

import Fragment from '@/components/common/fragment'

Vue.component('Fragment', Fragment)

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
