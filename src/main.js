import Vue from 'vue'
import App from './App.vue'
import router from './router/routesList'
import './assets/stylesheets/application.scss'
import moment from 'moment'
Vue.config.productionTip = false



Vue.prototype.moment = moment

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')