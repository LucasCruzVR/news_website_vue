import Vue from 'vue'
import App from './App.vue'
import router from './router/routesList'
import './assets/stylesheets/application.scss'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')