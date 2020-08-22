import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.prototype.$http.defaults.baseURL = 'http://192.168.0.109:443'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
