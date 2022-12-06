import Vue from 'vue'
import App from './App.vue'
import router from './router/routesList'
import './assets/stylesheets/application.scss'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import moment from 'moment'
Vue.config.productionTip = false

Vue.use(VueQuillEditor);

Vue.prototype.moment = moment;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')