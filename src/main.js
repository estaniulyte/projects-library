import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import router from './router'

import VueLodash from 'vue-lodash'
import lodash from 'lodash'

import VueMoment from 'vue-moment'

Vue.use(VueMoment)

Vue.config.productionTip = false

Vue.use(VueLodash, { lodash })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
