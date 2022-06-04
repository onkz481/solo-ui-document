import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// plugins
import router from './plugins/router'
import soloui from './plugins/soloui'

// scss
import './styles/main.scss'

// components
import App from './App.vue'

// uses
Vue.use(VueAxios, axios)

// documents
import docs from './documents/index'
Vue.prototype.$docs = new docs()

// mixins
import mixins from './mixins'

Vue.config.productionTip = false

new Vue({
  router,
  soloui,
  mixins: [mixins],
  render: h => h(App)
}).$mount('#app')
