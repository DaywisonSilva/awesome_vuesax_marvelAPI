import Vue from 'vue'
import App from './App.vue'
import axios from './boot/axios'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import './css/main.css'
import './css/reset.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.use(Vuesax)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
